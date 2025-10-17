import React from 'react';
import { Heart, Star } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Favorites = () => {
  const favorites = [
    {
      id: 1,
      name: 'Radiance Renewal Serum',
      brand: 'PureGlow',
      price: '$45.00',
      rating: 4.8,
      sustainabilityScore: 92,
    },
    {
      id: 2,
      name: 'Gentle Cleansing Gel',
      brand: 'EcoBeauty',
      price: '$28.00',
      rating: 4.9,
      sustainabilityScore: 88,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Your Favorites</h1>
          <p className="text-gray-600 mt-2">Products you've saved for later</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((product) => (
            <Card key={product.id} hover className="group">
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-rose-100 relative">
                <button className="absolute top-4 right-4 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                </button>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Sustainability</span>
                      <span className="font-semibold text-green-600">{product.sustainabilityScore}%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card.Content className="space-y-3">
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600">{product.brand}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="font-semibold text-gray-900">{product.price}</span>
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  Add to Cart
                </Button>
              </Card.Content>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
