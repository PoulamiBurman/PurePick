import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Leaf, Heart, ShoppingCart, Award } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const EcoAlternatives = () => {
  const navigate = useNavigate();

  const alternatives = [
    {
      id: 1,
      name: 'Organic Hydrating Cream',
      brand: 'EcoGlow',
      price: '$32.00',
      originalPrice: '$38.00',
      rating: 4.8,
      sustainabilityScore: 95,
      image: '/api/placeholder/120/120',
      badges: ['Organic', 'Cruelty-Free', 'Vegan'],
      keyFeatures: [
        'Certified organic ingredients',
        'Plastic-free packaging',
        'Sustainably sourced palm oil alternative'
      ],
      discount: '15% OFF'
    },
    {
      id: 2,
      name: 'Natural Moisture Balm',
      brand: 'PureBotanics',
      price: '$28.00',
      rating: 4.9,
      sustainabilityScore: 92,
      image: '/api/placeholder/120/120',
      badges: ['Natural', 'Zero Waste', 'Refillable'],
      keyFeatures: [
        'Zero waste packaging',
        'Refillable containers',
        'Locally sourced ingredients'
      ]
    },
    {
      id: 3,
      name: 'Sustainable Face Moisturizer',
      brand: 'GreenBeauty',
      price: '$35.00',
      rating: 4.7,
      sustainabilityScore: 88,
      image: '/api/placeholder/120/120',
      badges: ['Sustainable', 'B-Corp', 'Carbon Neutral'],
      keyFeatures: [
        'Carbon neutral production',
        'B-Corp certified company',
        'Recyclable packaging'
      ]
    }
  ];

  const getScoreColor = (score) => {
    // Calculate RGB values for smooth transition from red to green
    const red = Math.max(0, Math.min(255, 255 - (score * 2.55)));
    const green = Math.max(0, Math.min(255, score * 2.55));
    return `rgb(${Math.round(red)}, ${Math.round(green)}, 0)`;
  };

  const getScoreBg = (score) => {
    // Light background version of the score color
    if (score >= 80) return 'bg-green-50';
    if (score >= 60) return 'bg-yellow-50';
    if (score >= 40) return 'bg-orange-50';
    return 'bg-red-50';
  };


  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/product-analysis')}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
            <h1 className="text-lg font-semibold text-gray-900">Eco-Friendly Alternatives</h1>
            <div className="w-10"></div>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6">
        {/* Header Info */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-2">
            <Leaf className="w-6 h-6 text-green-500 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">Better Choices</h2>
          </div>
          <p className="text-gray-600 text-sm">
            We found {alternatives.length} eco-friendly alternatives with higher sustainability scores
          </p>
        </div>

        {/* Alternatives List */}
        <div className="space-y-4">
          {alternatives.map((product, index) => (
            <Card key={product.id} className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-200">
              <Card.Content className="p-4">
                <div className="flex space-x-4">
                  {/* Product Image */}
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
                      <Leaf className="w-8 h-8 text-green-600" />
                    </div>
                    {product.discount && (
                      <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        {product.discount}
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm">{product.name}</h3>
                        <p className="text-xs text-gray-600">{product.brand}</p>
                      </div>
                      <button className="p-1 hover:bg-gray-100 rounded-full">
                        <Heart className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>

                    {/* Rating and Score */}
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs font-medium">{product.rating}</span>
                      </div>
                      <div className={`px-2 py-1 rounded-full ${getScoreBg(product.sustainabilityScore)}`}>
                        <span 
                          className="text-xs font-semibold"
                          style={{ color: getScoreColor(product.sustainabilityScore) }}
                        >
                          {product.sustainabilityScore}% Sustainable
                        </span>
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-1 mb-2">
                      {product.badges.slice(0, 2).map((badge, badgeIndex) => (
                        <span key={badgeIndex} className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                          {badge}
                        </span>
                      ))}
                      {product.badges.length > 2 && (
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
                          +{product.badges.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Price and Action */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-gray-900">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-xs text-gray-500 line-through">{product.originalPrice}</span>
                        )}
                      </div>
                      <Button size="sm" className="text-xs px-3 py-1">
                        <ShoppingCart className="w-3 h-3 mr-1" />
                        Add
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <div className="space-y-1">
                    {product.keyFeatures.slice(0, 2).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card.Content>
            </Card>
          ))}
        </div>

        {/* Why These Alternatives */}
        <Card className="mt-6 bg-green-50/90 backdrop-blur-sm border border-green-200">
          <Card.Content className="p-4">
            <div className="flex items-center mb-3">
              <Award className="w-5 h-5 text-green-600 mr-2" />
              <h3 className="font-semibold text-green-900">Why these alternatives?</h3>
            </div>
            <div className="space-y-2 text-sm text-green-800">
              <div className="flex items-start space-x-2">
                <div className="w-1 h-1 bg-green-600 rounded-full mt-2"></div>
                <span>Higher sustainability scores (88-95% vs 42%)</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1 h-1 bg-green-600 rounded-full mt-2"></div>
                <span>Eco-friendly packaging and ingredients</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1 h-1 bg-green-600 rounded-full mt-2"></div>
                <span>Certified by trusted environmental organizations</span>
              </div>
            </div>
          </Card.Content>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <Button 
            variant="secondary"
            onClick={() => navigate('/scan')}
            className="py-3"
          >
            Scan Another
          </Button>
          <Button 
            onClick={() => navigate('/')}
            className="py-3"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EcoAlternatives;
