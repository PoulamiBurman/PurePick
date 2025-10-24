import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { AlertTriangle, CheckCircle, Info, ArrowRight, Leaf, X, Shield, Settings } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const ProductResults = () => {
  const location = useLocation();
  const [userAvoidList, setUserAvoidList] = useState([]);
  const [avoidedIngredients, setAvoidedIngredients] = useState([]);
  
  // Mock data - in real app, this would come from the scan results
  const productData = location.state?.analysisResult || {
    productName: "Sample Beauty Product",
    sustainabilityScore: 42,
    concerns: [
      "Contains microplastics that harm marine life",
      "Palm oil from non-sustainable sources", 
      "Excessive plastic packaging with no recycling info"
    ],
    goodPoints: [
      "Cruelty-free certified",
      "No parabens or sulfates"
    ],
    keyInfo: "Contains water, glycerin, palm oil, silicone polymers, and synthetic fragrances. Not certified organic.",
    ingredients: ["Water", "Glycerin", "Palm Oil", "Silicone Polymers", "Synthetic Fragrances", "Parabens", "Sulfates"]
  };

  // Load user's avoid list and check for matches
  useEffect(() => {
    const savedAvoidList = localStorage.getItem('userAvoidList');
    if (savedAvoidList) {
      const avoidList = JSON.parse(savedAvoidList);
      setUserAvoidList(avoidList);
      
      // Check if any ingredients in the product match the avoid list
      const productIngredients = productData.ingredients || [];
      const productText = `${productData.productName} ${productData.keyInfo} ${productData.concerns.join(' ')} ${productData.goodPoints.join(' ')}`.toLowerCase();
      
      const foundAvoidedIngredients = avoidList.filter(avoidedItem => {
        const itemName = avoidedItem.name.toLowerCase();
        
        // Check direct ingredient matches
        const directMatch = productIngredients.some(ingredient => 
          ingredient.toLowerCase().includes(itemName) || itemName.includes(ingredient.toLowerCase())
        );
        
        // Check text content matches
        const textMatch = productText.includes(itemName) || 
                         itemName.split(' ').some(word => productText.includes(word.toLowerCase()));
        
        return directMatch || textMatch;
      });
      
      setAvoidedIngredients(foundAvoidedIngredients);
    }
  }, [productData]);

  const getScoreColor = (score) => {
    if (score >= 70) return 'text-green-600';
    if (score >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBackground = (score) => {
    if (score >= 70) return 'bg-green-50 border-green-200';
    if (score >= 40) return 'bg-yellow-50 border-yellow-200';
    return 'bg-red-50 border-red-200';
  };

  const getScoreLabel = (score) => {
    if (score >= 70) return 'Good';
    if (score >= 40) return 'Moderate';
    return 'Poor';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Product Analysis Results</h1>
          <p className="text-gray-600">{productData.productName}</p>
        </div>

        {/* Avoid List Warning */}
        {avoidedIngredients.length > 0 && (
          <Card className="mb-8 p-6 bg-red-50 border-2 border-red-300">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-red-900 mb-2">
                  ⚠️ Personal Avoid List Alert!
                </h3>
                <p className="text-red-800 mb-4">
                  This product contains <strong>{avoidedIngredients.length}</strong> ingredient{avoidedIngredients.length > 1 ? 's' : ''} from your personal avoid list:
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {avoidedIngredients.map((ingredient, index) => (
                    <div key={index} className="flex items-center bg-red-100 border border-red-300 rounded-full px-3 py-1">
                      <X className="w-4 h-4 text-red-600 mr-1" />
                      <span className="text-sm font-medium text-red-700">{ingredient.name}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/eco-alternatives" state={{ productData, avoidedIngredients }}>
                    <Button size="sm" className="!bg-green-600 hover:!bg-green-700 !text-white">
                      <Shield className="w-4 h-4 mr-2" />
                      Find Safer Alternatives
                    </Button>
                  </Link>
                  <Link to="/profile">
                    <Button variant="outline" size="sm" className="border-red-300 text-red-700 hover:bg-red-50">
                      <Settings className="w-4 h-4 mr-2" />
                      Update Avoid List
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* No Avoided Ingredients - Positive Message */}
        {userAvoidList.length > 0 && avoidedIngredients.length === 0 && (
          <Card className="mb-8 p-4 bg-green-50 border-2 border-green-200">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <div>
                <h3 className="text-lg font-semibold text-green-900">Great Choice!</h3>
                <p className="text-green-700">This product doesn't contain any ingredients from your avoid list.</p>
              </div>
            </div>
          </Card>
        )}

        {/* Sustainability Score */}
        <Card className={`mb-8 p-8 text-center border-2 ${getScoreBackground(productData.sustainabilityScore)}`}>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Sustainability Score</h2>
            <div className="flex items-center justify-center space-x-4">
              <div className={`text-6xl font-bold ${getScoreColor(productData.sustainabilityScore)}`}>
                {productData.sustainabilityScore}
              </div>
              <div className="text-left">
                <div className="text-2xl font-medium text-gray-600">/100</div>
                <div className={`text-lg font-semibold ${getScoreColor(productData.sustainabilityScore)}`}>
                  {getScoreLabel(productData.sustainabilityScore)}
                </div>
              </div>
            </div>
            
            {/* Score Bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
              <div 
                className={`h-3 rounded-full transition-all duration-500 ${
                  productData.sustainabilityScore >= 70 ? 'bg-green-500' :
                  productData.sustainabilityScore >= 40 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${productData.sustainabilityScore}%` }}
              ></div>
            </div>
          </div>
        </Card>

        {/* Concerns Section */}
        <Card className="mb-6 p-6 bg-orange-50 border-orange-200">
          <div className="flex items-center mb-4">
            <AlertTriangle className="w-6 h-6 text-orange-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-800">Concerns</h3>
          </div>
          <div className="space-y-3">
            {productData.concerns.map((concern, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-orange-100 rounded-lg">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">{concern}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Good Points Section */}
        <Card className="mb-6 p-6 bg-green-50 border-green-200">
          <div className="flex items-center mb-4">
            <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-800">Good Points</h3>
          </div>
          <div className="space-y-3">
            {productData.goodPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-green-100 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Key Info Section */}
        <Card className="mb-8 p-6 bg-purple-50 border-purple-200">
          <div className="flex items-center mb-4">
            <Info className="w-6 h-6 text-purple-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-800">Key Info</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">{productData.keyInfo}</p>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/eco-alternatives" state={{ productData }}>
            <Button size="lg" className="w-full sm:w-auto !bg-gradient-to-r !from-green-400 !to-green-600 hover:!from-green-500 hover:!to-green-700 !text-white !border-0 !shadow-lg">
              <Leaf className="w-5 h-5 mr-2" />
              Eco-Friendly Alternatives
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          
          <Link to="/scan">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Scan Another Product
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductResults;
