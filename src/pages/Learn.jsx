import React from 'react';
import { Leaf, Shield, Award } from 'lucide-react';
import Card from '../components/ui/Card';

const Learn = () => {
  const articles = [
    {
      title: 'Understanding Sustainable Beauty',
      excerpt: 'Learn what makes a beauty product truly sustainable and eco-friendly.',
      category: 'Sustainability',
      readTime: '5 min read',
      icon: Leaf,
    },
    {
      title: 'Ingredient Safety Guide',
      excerpt: 'A comprehensive guide to understanding cosmetic ingredients and their safety ratings.',
      category: 'Safety',
      readTime: '8 min read',
      icon: Shield,
    },
    {
      title: 'Ethical Beauty Practices',
      excerpt: 'Discover brands that prioritize ethical sourcing and cruelty-free practices.',
      category: 'Ethics',
      readTime: '6 min read',
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Learn About Sustainable Beauty</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover everything you need to know about making informed, sustainable beauty choices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} hover className="group">
              <div className="p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <article.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="mb-2">
                  <span className="text-sm text-primary-600 font-medium">{article.category}</span>
                  <span className="text-sm text-gray-500 ml-2">• {article.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600">{article.excerpt}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learn;
