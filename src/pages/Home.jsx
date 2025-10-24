import React from 'react';
import { Link } from 'react-router-dom';
import { Scan, Shield, Leaf, Award, Star, ArrowRight, Heart, Users, TrendingUp } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Home = () => {
  const features = [
    {
      icon: Scan,
      title: 'Smart Product Scanning',
      description: 'Scan product labels or barcodes to instantly analyze ingredients and sustainability metrics.',
    },
    {
      icon: Shield,
      title: 'Safety Analysis',
      description: 'Get detailed ingredient analysis with safety ratings: Safe, Moderate, Harmful, or Unknown.',
    },
    {
      icon: Leaf,
      title: 'Sustainability Score',
      description: 'Comprehensive sustainability and ethical practice ratings from 0-100.',
    },
    {
      icon: Award,
      title: 'Eco-Friendly Alternatives',
      description: 'Discover better alternatives with higher sustainability scores and cleaner ingredients.',
    },
  ];

  const bestsellers = [
    {
      id: 1,
      name: 'Radiance Renewal Serum',
      brand: 'PureGlow',
      price: '$45.00',
      rating: 4.8,
      sustainabilityScore: 92,
      image: '/api/placeholder/200/200',
      category: 'Serum',
    },
    {
      id: 2,
      name: 'Gentle Cleansing Gel',
      brand: 'EcoBeauty',
      price: '$28.00',
      rating: 4.9,
      sustainabilityScore: 88,
      image: '/api/placeholder/200/200',
      category: 'Cleanser',
    },
    {
      id: 3,
      name: 'Vitamin C Brightening Serum',
      brand: 'GreenGlow',
      price: '$52.00',
      rating: 4.7,
      sustainabilityScore: 95,
      image: '/api/placeholder/200/200',
      category: 'Serum',
    },
    {
      id: 4,
      name: 'Hydrating Face Moisturizer',
      brand: 'PureCare',
      price: '$38.00',
      rating: 4.6,
      sustainabilityScore: 90,
      image: '/api/placeholder/200/200',
      category: 'Moisturizer',
    },
  ];

  const stats = [
    { label: 'Products Analyzed', value: '50K+', icon: Scan },
    { label: 'Happy Users', value: '25K+', icon: Users },
    { label: 'Sustainability Score', value: '95%', icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="gradient-bg py-20 lg:py-32"
        style={{
          backgroundImage: 'url(/my-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Beauty that Begins with{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-rose-600">
                    You
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Discover sustainable beauty products that are good for you and the planet. 
                  Scan, analyze, and make informed choices with <span className="inline-flex items-center gap-2"><img src="/logo.svg" alt="PurePick Logo" className="w-6 h-6 object-contain" />PurePick</span>.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/scan">
                  <Button size="lg" className="w-full sm:w-auto">
                    <Scan className="w-5 h-5 mr-2" />
                    Scan Product
                  </Button>
                </Link>
                <Link to="/learn">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <stat.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-rose-100 rounded-3xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-4">
                  {/* Mock product images */}
                  <div className="space-y-4">
                    <div className="bg-white rounded-2xl p-4 shadow-lg transform rotate-3 hover:rotate-0 transition-transform">
                      <div className="w-full h-32 bg-gradient-to-br from-primary-200 to-primary-300 rounded-xl mb-3"></div>
                      <div className="text-sm font-medium text-gray-900">Gentle Cleanser</div>
                      <div className="text-xs text-gray-600">Sustainability: 95%</div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-lg transform -rotate-2 hover:rotate-0 transition-transform">
                      <div className="w-full h-32 bg-gradient-to-br from-rose-200 to-rose-300 rounded-xl mb-3"></div>
                      <div className="text-sm font-medium text-gray-900">Vitamin Serum</div>
                      <div className="text-xs text-gray-600">Sustainability: 92%</div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="bg-white rounded-2xl p-4 shadow-lg transform rotate-2 hover:rotate-0 transition-transform">
                      <div className="w-full h-32 bg-gradient-to-br from-primary-300 to-rose-200 rounded-xl mb-3"></div>
                      <div className="text-sm font-medium text-gray-900">Face Cream</div>
                      <div className="text-xs text-gray-600">Sustainability: 88%</div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-lg transform -rotate-1 hover:rotate-0 transition-transform">
                      <div className="w-full h-32 bg-gradient-to-br from-rose-300 to-primary-200 rounded-xl mb-3"></div>
                      <div className="text-sm font-medium text-gray-900">Lip Balm</div>
                      <div className="text-xs text-gray-600">Sustainability: 97%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              Why Choose 
              <img src="/logo.svg" alt="PurePick Logo" className="w-12 h-12 object-contain" />
              PurePick?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive analysis helps you make informed decisions about the beauty products you use every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Bestsellers
            </h2>
            <p className="text-xl text-gray-600">
              Top-rated sustainable beauty products loved by our community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellers.map((product) => (
              <Card key={product.id} hover className="group">
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-rose-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-200/50 to-rose-200/50"></div>
                  <div className="absolute top-4 right-4">
                    <button className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
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

          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="secondary" size="lg">
                View All Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-rose-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Make Better Beauty Choices?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of users who are already making more sustainable beauty decisions with <span className="inline-flex items-center gap-2"><img src="/logo.svg" alt="PurePick Logo" className="w-6 h-6 object-contain" />PurePick</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button variant="secondary" size="lg" className="bg-white text-primary-600 hover:bg-gray-50">
                Get Started Free
              </Button>
            </Link>
            <Link to="/scan">
              <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
                <Scan className="w-5 h-5 mr-2" />
                Try Scanning Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
