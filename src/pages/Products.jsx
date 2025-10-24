import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, Leaf, Heart, ShoppingCart, Award, Eye } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  // Mock product database
  const allProducts = [
    {
      id: 1,
      name: 'L\'Oréal Paris Revitalift Moisturizer',
      brand: 'L\'Oréal Paris',
      category: 'Moisturizer',
      price: '$24.99',
      rating: 4.2,
      sustainabilityScore: 35,
      image: '/api/placeholder/150/150',
      badges: ['Popular'],
      description: 'Anti-aging moisturizer with retinol and hyaluronic acid.',
      barcode: '123456789012'
    },
    {
      id: 2,
      name: 'The Ordinary Hyaluronic Acid Serum',
      brand: 'The Ordinary',
      category: 'Serum',
      price: '$8.90',
      rating: 4.8,
      sustainabilityScore: 78,
      image: '/api/placeholder/150/150',
      badges: ['Eco-Friendly', 'Best Value'],
      description: 'Hydrating serum with multiple types of hyaluronic acid.',
      barcode: '987654321098'
    },
    {
      id: 3,
      name: 'Neutrogena Ultra Gentle Daily Cleanser',
      brand: 'Neutrogena',
      category: 'Cleanser',
      price: '$12.49',
      rating: 4.5,
      sustainabilityScore: 52,
      image: '/api/placeholder/150/150',
      badges: ['Dermatologist Recommended'],
      description: 'Gentle daily cleanser for sensitive skin.',
      barcode: '456789123456'
    },
    {
      id: 4,
      name: 'Cetaphil Gentle Skin Cleanser',
      brand: 'Cetaphil',
      category: 'Cleanser',
      price: '$15.99',
      rating: 4.6,
      sustainabilityScore: 48,
      image: '/api/placeholder/150/150',
      badges: ['Sensitive Skin'],
      description: 'Non-comedogenic cleanser for all skin types.',
      barcode: '789123456789'
    },
    {
      id: 5,
      name: 'Olay Regenerist Micro-Sculpting Cream',
      brand: 'Olay',
      category: 'Moisturizer',
      price: '$28.99',
      rating: 4.3,
      sustainabilityScore: 42,
      image: '/api/placeholder/150/150',
      badges: ['Anti-Aging'],
      description: 'Firming moisturizer with amino-peptides.',
      barcode: '321654987321'
    },
    {
      id: 6,
      name: 'CeraVe Hydrating Foaming Oil Cleanser',
      brand: 'CeraVe',
      category: 'Cleanser',
      price: '$16.99',
      rating: 4.7,
      sustainabilityScore: 65,
      image: '/api/placeholder/150/150',
      badges: ['Ceramides', 'Eco-Friendly'],
      description: 'Oil cleanser that transforms into a soft foam.',
      barcode: '654321987654'
    },
    {
      id: 7,
      name: 'Drunk Elephant C-Firma Day Serum',
      brand: 'Drunk Elephant',
      category: 'Serum',
      price: '$80.00',
      rating: 4.4,
      sustainabilityScore: 72,
      image: '/api/placeholder/150/150',
      badges: ['Vitamin C', 'Premium'],
      description: 'Antioxidant day serum with 15% L-ascorbic acid.',
      barcode: '147258369147'
    },
    {
      id: 8,
      name: 'Glossier Cloud Paint Blush',
      brand: 'Glossier',
      category: 'Makeup',
      price: '$22.00',
      rating: 4.6,
      sustainabilityScore: 68,
      image: '/api/placeholder/150/150',
      badges: ['Cruelty-Free', 'Trendy'],
      description: 'Gel-cream blush for a natural flush.',
      barcode: '258369147258'
    }
  ];

  const categories = ['all', 'Moisturizer', 'Cleanser', 'Serum', 'Makeup'];

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || product.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const getScoreColor = (score) => {
    if (score >= 70) return 'text-green-600 bg-green-50';
    if (score >= 50) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getScoreLabel = (score) => {
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Moderate';
    return 'Poor';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Database</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive database of beauty products with sustainability ratings and detailed analysis.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products or brands..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {allProducts.length} products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative">
                {/* Product Image */}
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-xl flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                    <Leaf className="w-10 h-10 text-primary-600" />
                  </div>
                </div>
                
                {/* Favorite Button */}
                <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                  <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                </button>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  {product.badges.slice(0, 2).map((badge, index) => (
                    <span key={index} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4">
                {/* Product Info */}
                <div className="mb-3">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">{product.name}</h3>
                  <p className="text-xs text-gray-600">{product.brand}</p>
                  <p className="text-xs text-gray-500">{product.category}</p>
                </div>

                {/* Rating and Sustainability Score */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <div className={`px-2 py-1 rounded-full ${getScoreColor(product.sustainabilityScore)}`}>
                    <span className="text-xs font-semibold">
                      {product.sustainabilityScore}% {getScoreLabel(product.sustainabilityScore)}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-600 mb-4 line-clamp-2">{product.description}</p>

                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-900">{product.price}</span>
                  <div className="flex space-x-2">
                    <Link 
                      to="/product-results" 
                      state={{ 
                        analysisResult: {
                          productName: product.name,
                          sustainabilityScore: product.sustainabilityScore,
                          concerns: product.sustainabilityScore < 50 ? 
                            ['Contains potentially harmful ingredients', 'Non-sustainable packaging'] : 
                            ['Minor packaging concerns'],
                          goodPoints: product.sustainabilityScore > 70 ? 
                            ['Eco-friendly ingredients', 'Sustainable packaging', 'Cruelty-free'] : 
                            ['Some natural ingredients', 'Dermatologist tested'],
                          keyInfo: product.description
                        }
                      }}
                    >
                      <Button size="sm" variant="outline" className="text-xs px-2 py-1">
                        <Eye className="w-3 h-3 mr-1" />
                        View
                      </Button>
                    </Link>
                    <Button size="sm" className="text-xs px-2 py-1">
                      <ShoppingCart className="w-3 h-3 mr-1" />
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search terms or filters.</p>
            <Button onClick={() => { setSearchTerm(''); setFilterCategory('all'); }}>
              Clear Filters
            </Button>
          </div>
        )}

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link to="/">
            <Button variant="secondary" size="lg">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
