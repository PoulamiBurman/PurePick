import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Leaf, AlertTriangle, CheckCircle, Info, TreePine } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const ProductAnalysis = () => {
  const navigate = useNavigate();

  // Mock product data - you can change the sustainabilityScore to test different colors
  const productData = {
    name: 'Moisturizing Face Cream',
    brand: 'BeautyBrand',
    sustainabilityScore: 42, // Try changing this to 15 (red), 50 (orange), 75 (yellow-green), or 95 (green)
    rating: 'Fair',
    concerns: [
      'Contains microplastics that harm marine life',
      'Palm oil from non-sustainable sources',
      'Excessive plastic packaging with no recycling info'
    ],
    goodPoints: [
      'Cruelty-free certified',
      'No parabens or sulfates'
    ],
    keyInfo: 'Contains water, glycerin, palm oil, silicone polymers, and synthetic fragrances. Not certified organic.'
  };


  const getScoreBgColor = (score) => {
    // Same calculation for background colors
    const red = Math.max(0, Math.min(255, 255 - (score * 2.55)));
    const green = Math.max(0, Math.min(255, score * 2.55));
    return `rgb(${Math.round(red)}, ${Math.round(green)}, 0)`;
  };

  const getScoreTextColor = (score) => {
    // For text color classes
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    if (score >= 40) return 'text-orange-500';
    return 'text-red-500';
  };

  const getProgressWidth = (score) => {
    return `${score}%`;
  };

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/scan-interface')}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
            <div className="text-center">
              <h1 className="text-lg font-semibold text-gray-900">{productData.name}</h1>
              <p className="text-sm text-gray-600">{productData.brand}</p>
            </div>
            <div className="w-10"></div>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Sustainability Score */}
        <Card className="bg-white/90 backdrop-blur-sm">
          <Card.Content className="p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <Leaf className="w-6 h-6 text-green-500 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Sustainability Score</h2>
            </div>
            
            {/* Circular Score */}
            <div className="relative w-32 h-32 mx-auto mb-4">
              <div 
                className="w-32 h-32 rounded-full flex items-center justify-center shadow-lg"
                style={{ backgroundColor: getScoreBgColor(productData.sustainabilityScore) }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">{productData.sustainabilityScore}</div>
                  <div className="text-sm text-white/90">/ 100</div>
                </div>
              </div>
            </div>
            
            <div className={`text-xl font-semibold mb-4 ${getScoreTextColor(productData.sustainabilityScore)}`}>
              {productData.rating}
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="h-3 rounded-full transition-all duration-500"
                style={{ 
                  width: getProgressWidth(productData.sustainabilityScore),
                  backgroundColor: getScoreBgColor(productData.sustainabilityScore)
                }}
              ></div>
            </div>
          </Card.Content>
        </Card>

        {/* Concerns */}
        <Card className="bg-white/90 backdrop-blur-sm">
          <Card.Content className="p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-6 h-6 text-orange-500 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Concerns</h2>
            </div>
            <div className="space-y-3">
              {productData.concerns.map((concern, index) => (
                <div key={index} className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">{concern}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card.Content>
        </Card>

        {/* Good Points */}
        <Card className="bg-white/90 backdrop-blur-sm">
          <Card.Content className="p-6">
            <div className="flex items-center mb-4">
              <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Good Points</h2>
            </div>
            <div className="space-y-3">
              {productData.goodPoints.map((point, index) => (
                <div key={index} className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">{point}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card.Content>
        </Card>

        {/* Key Info */}
        <Card className="bg-white/90 backdrop-blur-sm">
          <Card.Content className="p-6">
            <div className="flex items-center mb-4">
              <Info className="w-6 h-6 text-purple-500 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Key Info</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{productData.keyInfo}</p>
          </Card.Content>
        </Card>

        {/* Find Eco-Friendly Alternatives Button */}
        <div className="pt-4">
          <Button 
            onClick={() => navigate('/eco-alternatives')}
            className="w-full bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white py-4 text-lg font-semibold shadow-xl"
            size="lg"
          >
            <TreePine className="w-6 h-6 mr-3" />
            Find Eco-Friendly Alternatives
          </Button>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          <Button 
            variant="secondary"
            onClick={() => {
              // Add to favorites logic
              console.log('Added to favorites');
            }}
            className="py-3"
          >
            Save Product
          </Button>
          <Button 
            variant="outline"
            onClick={() => navigate('/scan')}
            className="py-3"
          >
            Scan Another
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductAnalysis;
