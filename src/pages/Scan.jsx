import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, UploadCloud, Scan, Loader2, Zap, Lock } from 'lucide-react';


// NOTE: This component assumes a running backend API at '/api/analyze-product' 
// as detailed in the roadmap below.


// Analysis results are now displayed on a separate page


const ScanProduct = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [barcode, setBarcode] = useState('');
  const [loading, setLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [error, setError] = useState(null);
  const [scanCount, setScanCount] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);

  // Check authentication status and scan count on component mount
  useEffect(() => {
    // Check if user is logged in (you can replace this with actual auth logic)
    const userToken = localStorage.getItem('userToken');
    setIsAuthenticated(!!userToken);
    
    // Get scan count from localStorage
    const storedScanCount = parseInt(localStorage.getItem('scanCount') || '0');
    setScanCount(storedScanCount);
  }, []);

  // Check if user can perform scan
  const canScan = () => {
    return isAuthenticated || scanCount === 0;
  };

  // Increment scan count and check if auth is needed
  const incrementScanCount = () => {
    const newCount = scanCount + 1;
    setScanCount(newCount);
    localStorage.setItem('scanCount', newCount.toString());
    
    // If this was the first scan and user is not authenticated, show auth prompt
    if (newCount === 1 && !isAuthenticated) {
      setShowAuthPrompt(true);
    }
  };

  const apiKey = ""; // Keep the API key as an empty string as instructed.
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;


  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setBarcode('');
      setError(null);
      setAnalysisResult(null);
    }
  };


  const handleBarcodeChange = (event) => {
    setBarcode(event.target.value);
    setFile(null);
    setError(null);
    setAnalysisResult(null);
  };


  const arrayBufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };
  
  const analyzeImage = useCallback(async () => {
    if (!file) return;

    // Check if user can scan
    if (!canScan()) {
      setError("Please login or signup to continue scanning products.");
      navigate('/login');
      return;
    }

    setLoading(true);
    setError(null);
    setAnalysisResult(null);


    try {
      // 1. Read the file content as an ArrayBuffer
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      
      reader.onload = async () => {
        const base64ImageData = arrayBufferToBase64(reader.result);
        const mimeType = file.type;


        const systemPrompt = "You are PurePick AI, a sustainability and ingredient safety expert. Analyze the provided image of a product's ingredient list. Extract the full ingredient list and then categorize the ingredients into 'Safe', 'Warning' (for mild irritants/allergens), and 'Critical' (for known harmful or unsustainable components). Provide the final output as a structured JSON object only, matching the specified schema. If you cannot read the ingredients, set the status to 'Unreadable'.";
        
        const payload = {
          contents: [
            {
              role: "user",
              parts: [
                { text: "Analyze this ingredient list image and provide a safety rating and ingredient breakdown based on sustainability and known toxicity." },
                {
                  inlineData: {
                    mimeType: mimeType,
                    data: base64ImageData
                  }
                }
              ]
            }
          ],
          systemInstruction: { parts: [{ text: systemPrompt }] },
          generationConfig: {
            responseMimeType: "application/json",
            responseSchema: {
              type: "OBJECT",
              properties: {
                status: { type: "STRING", description: "Overall rating: Safe, Warning, Critical, or Unreadable." },
                summary: { type: "STRING", description: "A one-sentence summary of the product's safety/sustainability." },
                ingredientList: { type: "STRING", description: "The full, extracted list of ingredients." },
                breakdown: {
                  type: "ARRAY",
                  description: "List of categorized ingredients.",
                  items: {
                    type: "OBJECT",
                    properties: {
                      name: { type: "STRING", description: "The ingredient name." },
                      category: { type: "STRING", description: "Safe, Warning, or Critical." },
                      reason: { type: "STRING", description: "Why it was categorized this way (e.g., 'known irritant', 'sustainable sourcing')." }
                    }
                  }
                }
              },
              required: ["status", "summary", "ingredientList", "breakdown"]
            }
          }
        };


        let response;
        let retries = 0;
        const maxRetries = 3;
        const baseDelay = 1000;


        while (retries < maxRetries) {
          try {
            response = await fetch(apiUrl, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload)
            });


            if (response.ok) {
              const result = await response.json();
              const jsonText = result.candidates?.[0]?.content?.parts?.[0]?.text;
              if (jsonText) {
                const parsedJson = JSON.parse(jsonText);
                // Increment scan count
                incrementScanCount();
                // Navigate to results page with analysis data
                navigate('/product-results', { 
                  state: { 
                    analysisResult: {
                      productName: file.name.replace(/\.[^/.]+$/, ""), // Remove file extension
                      sustainabilityScore: parsedJson.status === 'Safe' ? 85 : parsedJson.status === 'Warning' ? 55 : 25,
                      concerns: parsedJson.breakdown.filter(item => item.category === 'Critical' || item.category === 'Warning').map(item => item.reason),
                      goodPoints: parsedJson.breakdown.filter(item => item.category === 'Safe').map(item => item.reason),
                      keyInfo: parsedJson.ingredientList || parsedJson.summary
                    }
                  }
                });
                break; // Success, exit loop
              } else {
                throw new Error("API response was valid, but contained no generated JSON content.");
              }
            } else {
              throw new Error(`API request failed with status: ${response.status}`);
            }
          } catch (e) {
            console.error(`Attempt ${retries + 1} failed:`, e);
            if (retries < maxRetries - 1) {
              const delay = baseDelay * (2 ** retries) + Math.random() * 500;
              await new Promise(resolve => setTimeout(resolve, delay));
            } else {
              setError("Failed to analyze image after several retries. Please try a clearer image.");
            }
            retries++;
          }
        }
      };


      reader.onerror = () => {
        setError("Error reading the file.");
      };


    } catch (e) {
      setError(`An unexpected error occurred during analysis.`);
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [file]);


  const analyzeBarcode = useCallback(async () => {
    if (!barcode) return;

    // Check if user can scan
    if (!canScan()) {
      setError("Please login or signup to continue scanning products.");
      navigate('/login');
      return;
    }

    setLoading(true);
    setError(null);
    setAnalysisResult(null);

    // Mock delay to simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    try {
        // Mock product database for testing
        const mockProducts = {
          '123456789012': {
            productName: 'L\'Oréal Paris Revitalift Moisturizer',
            sustainabilityScore: 35,
            concerns: [
              'Contains microplastics that harm marine life',
              'Palm oil from non-sustainable sources',
              'Excessive plastic packaging with no recycling info'
            ],
            goodPoints: [
              'Cruelty-free certified',
              'No parabens or sulfates'
            ],
            keyInfo: 'Contains water, glycerin, palm oil, silicone polymers, and synthetic fragrances. Not certified organic.',
            ingredients: ['Water', 'Glycerin', 'Palm Oil', 'Silicone Polymers', 'Synthetic Fragrances', 'Parabens', 'Sulfates']
          },
          '987654321098': {
            productName: 'The Ordinary Hyaluronic Acid Serum',
            sustainabilityScore: 78,
            concerns: [
              'Plastic dropper bottle',
              'Limited ingredient sourcing transparency'
            ],
            goodPoints: [
              'Minimal ingredient list',
              'Cruelty-free and vegan',
              'Affordable sustainable option',
              'Recyclable packaging'
            ],
            keyInfo: 'Contains hyaluronic acid, vitamin B5, and purified water. Simple, effective formulation with minimal environmental impact.',
            ingredients: ['Water', 'Hyaluronic Acid', 'Vitamin B5', 'Phenoxyethanol']
          },
          '456789123456': {
            productName: 'Neutrogena Ultra Gentle Daily Cleanser',
            sustainabilityScore: 52,
            concerns: [
              'Contains sulfates that can be harsh',
              'Non-biodegradable ingredients'
            ],
            goodPoints: [
              'Dermatologist recommended',
              'Suitable for sensitive skin',
              'No artificial fragrances'
            ],
            keyInfo: 'Contains water, cocamidopropyl betaine, sodium chloride, and preservatives. Gentle formula but with some environmental concerns.',
            ingredients: ['Water', 'Cocamidopropyl Betaine', 'Sodium Chloride', 'Sulfates', 'Fragrance']
          }
        };

        const productData = mockProducts[barcode];
        
        if (productData) {
          // Increment scan count
          incrementScanCount();
          // Navigate to results page with found product data
          navigate('/product-results', { 
            state: { 
              analysisResult: productData
            }
          });
        } else {
          // Increment scan count
          incrementScanCount();
          // Product not found in mock database
          navigate('/product-results', { 
            state: { 
              analysisResult: {
                productName: `Unknown Product (${barcode})`,
                sustainabilityScore: 25,
                concerns: [
                  'Product not found in our database',
                  'Unable to verify ingredients',
                  'No sustainability certifications available'
                ],
                goodPoints: [
                  'Registered barcode number',
                  'Trackable product'
                ],
                keyInfo: `Product identified by barcode: ${barcode}. Limited information available. Consider choosing products with more transparency.`
              }
            }
          });
        }
    } catch (e) {
        setError(e.message || "Failed to analyze barcode. Please try again.");
    } finally {
        setLoading(false);
    }
  }, [barcode, navigate]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      analyzeImage();
    } else if (barcode) {
      analyzeBarcode();
    } else {
      setError("Please upload an image or enter a barcode.");
    }
  };


  // Color functions removed - results displayed on separate page


  return (
    <div className="min-h-screen bg-pink-50/70 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          PurePick Analyzer <Zap className="inline w-6 h-6 text-[#FF69B4] -mt-1" />
        </h1>


        {/* Scan Limit Info */}
        {!isAuthenticated && (
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Lock className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-blue-900">
                  {scanCount === 0 ? 'Free Trial: 1 scan remaining' : 'Trial completed - Login for unlimited scans'}
                </span>
              </div>
              {scanCount > 0 && (
                <button
                  onClick={() => navigate('/register')}
                  className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition-colors"
                >
                  Sign Up Free
                </button>
              )}
            </div>
          </div>
        )}

        {/* Input Form */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl mb-8 border border-[#F3CFC6]">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Image Upload Section */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <UploadCloud className="inline w-4 h-4 mr-1 -mt-0.5" /> Upload Ingredient Image
              </label>
              <div className="flex items-center space-x-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className={`flex-grow cursor-pointer p-3 text-center rounded-lg border-2 transition-colors duration-200 ${
                    file ? 'border-green-500 bg-green-50 text-green-700' : 'border-gray-300 hover:border-[#FF69B4] hover:text-[#FF69B4]'
                  }`}
                >
                  {file ? `File Selected: ${file.name}` : 'Click to Upload Image'}
                </label>
                <span className="text-gray-500 text-sm">OR</span>
              </div>
            </div>


            {/* Barcode Input Section */}
            <div>
              <label htmlFor="barcode" className="block text-sm font-medium text-gray-700 mb-2">
                <Scan className="inline w-4 h-4 mr-1 -mt-0.5" /> Enter Barcode / UPC
              </label>
              <input
                id="barcode"
                type="text"
                value={barcode}
                onChange={handleBarcodeChange}
                placeholder="E.g., 8809618059039"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#FF69B4] focus:border-[#FF69B4]"
              />
            </div>
            
            <button
              type="submit"
              disabled={loading || (!file && !barcode)}
              className={`w-full py-3 rounded-xl text-white font-semibold transition-all duration-300 shadow-md ${
                loading || (!file && !barcode)
                  ? 'bg-pink-300 cursor-not-allowed'
                  : 'bg-[#FF69B4] hover:bg-pink-700 hover:shadow-lg'
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  Analyzing Product...
                </div>
              ) : (
                'Analyze Product'
              )}
            </button>
          </form>
          {error && (
            <p className="mt-4 text-sm font-medium text-red-600 p-3 bg-red-100 rounded-lg border border-red-300">
              Analysis Error: {error}
            </p>
          )}
        </div>


        {/* Results will be shown on a separate page after analysis */}

        {/* Authentication Prompt Modal */}
        {showAuthPrompt && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Continue Your Journey
                </h3>
                <p className="text-gray-600 mb-6">
                  You've completed your first scan! To continue analyzing more products and access personalized features, please create an account or sign in.
                </p>
                <div className="space-y-3">
                  <button
                    onClick={() => navigate('/register')}
                    className="w-full bg-gradient-to-r from-primary-500 to-rose-500 text-white py-3 px-6 rounded-lg font-medium hover:from-primary-600 hover:to-rose-600 transition-colors"
                  >
                    Create Account
                  </button>
                  <button
                    onClick={() => navigate('/login')}
                    className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => setShowAuthPrompt(false)}
                    className="w-full text-gray-500 py-2 text-sm hover:text-gray-700 transition-colors"
                  >
                    Maybe Later
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default ScanProduct;
