import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Leaf, Heart, Shield } from 'lucide-react';
import Button from '../components/ui/Button';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mr-6">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Our Purpose</h2>
                <p className="text-gray-600">Empowering eco-conscious consumers</p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              At PurePick, our purpose is to empower eco-conscious consumers. We provide a simple, powerful tool to evaluate cosmetic products for sustainability and ethical practices, helping you make choices that are good for you and the planet.
            </p>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-6">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">What We Do</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                PurePick is a mobile and web application built to close the information gap between you and your cosmetics, giving you clear, actionable insights.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-pink-50 rounded-xl">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Sustainable</h4>
                <p className="text-sm text-gray-600">Promoting eco-friendly beauty choices</p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Transparent</h4>
                <p className="text-sm text-gray-600">Clear, actionable product insights</p>
              </div>
              
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Ethical</h4>
                <p className="text-sm text-gray-600">Supporting cruelty-free practices</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link to="/scan">
            <Button size="lg" className="mb-4">
              Start Scanning Products
            </Button>
          </Link>
          <p className="text-gray-600">Join thousands of users making better beauty choices</p>
        </div>
      </div>
    </div>
  );
};

export default About;
