import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, ArrowRight, Leaf, Heart, Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Rise of Clean Beauty: What It Really Means',
      excerpt: 'Discover the truth behind clean beauty claims and learn how to identify truly sustainable products.',
      author: 'Sarah Johnson',
      date: 'October 20, 2024',
      category: 'Sustainable Beauty',
      readTime: '5 min read',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 2,
      title: '10 Ingredients to Avoid in Your Skincare Routine',
      excerpt: 'A comprehensive guide to harmful ingredients commonly found in cosmetics and their alternatives.',
      author: 'Dr. Emily Chen',
      date: 'October 18, 2024',
      category: 'Ingredient Guide',
      readTime: '8 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Sustainable Packaging: The Future of Beauty',
      excerpt: 'How beauty brands are revolutionizing packaging to reduce environmental impact.',
      author: 'Michael Green',
      date: 'October 15, 2024',
      category: 'Sustainability',
      readTime: '6 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'Cruelty-Free vs. Vegan: Understanding the Difference',
      excerpt: 'Learn the important distinctions between cruelty-free and vegan beauty products.',
      author: 'Lisa Martinez',
      date: 'October 12, 2024',
      category: 'Ethics',
      readTime: '4 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'DIY Natural Beauty Recipes for Glowing Skin',
      excerpt: 'Simple, effective homemade beauty treatments using ingredients from your kitchen.',
      author: 'Anna Thompson',
      date: 'October 10, 2024',
      category: 'DIY Beauty',
      readTime: '7 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'The Environmental Impact of Microplastics in Cosmetics',
      excerpt: 'Understanding how tiny plastic particles in beauty products affect our oceans and health.',
      author: 'Dr. James Wilson',
      date: 'October 8, 2024',
      category: 'Environmental Impact',
      readTime: '9 min read',
      image: '/api/placeholder/400/250'
    }
  ];

  const categories = ['All', 'Sustainable Beauty', 'Ingredient Guide', 'Sustainability', 'Ethics', 'DIY Beauty', 'Environmental Impact'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">PurePick Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the latest news on sustainable beauty, product spotlights, and tips for living a more eco-conscious lifestyle. 
              Stay up-to-date with industry changes and discover new ways to make your beauty routine greener.
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors border border-gray-200 hover:border-primary-200"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post) => (
          <Card key={post.id} className="mb-12 overflow-hidden bg-gradient-to-r from-primary-500 to-rose-500 text-white">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-sm font-medium opacity-90">Featured Article</span>
                </div>
                <h2 className="text-3xl font-bold leading-tight">{post.title}</h2>
                <p className="text-lg opacity-90">{post.excerpt}</p>
                <div className="flex items-center space-x-4 text-sm opacity-80">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <Button variant="secondary" className="mt-4">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="bg-white/10 rounded-xl flex items-center justify-center">
                <Leaf className="w-24 h-24 text-white/50" />
              </div>
            </div>
          </Card>
        ))}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.filter(post => !post.featured).map((post) => (
            <Card key={post.id} className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary-600" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="text-xs">
                    Read More
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Stay Updated</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss the latest sustainable beauty tips, product reviews, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Button className="px-6">Subscribe</Button>
            </div>
          </div>
        </Card>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="secondary" size="lg">
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
