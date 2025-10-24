import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Camera, Search, CheckCircle, Scan, BarChart3, Leaf } from 'lucide-react';
import Button from '../components/ui/Button';

const HowItWorks = () => {
  const steps = [
    {
      icon: Camera,
      title: 'Scan',
      description: 'Use your camera to instantly scan a product\'s barcode or upload an image of its ingredient label.',
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: BarChart3,
      title: 'Analyze',
      description: 'Our system cross-checks the ingredients with databases like EWG Skin Deep to classify them based on safety, environmental impact, and ethical concerns.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: CheckCircle,
      title: 'Choose',
      description: 'Instantly receive an overall sustainability score, check for cruelty-free status, and discover eco-friendly alternatives to help you make a better choice.',
      color: 'from-green-400 to-green-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how PurePick makes it easy to evaluate your beauty products in just three simple steps
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="text-center mb-6">
                <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border-4 border-gray-200 flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-700">{index + 1}</span>
                </div>
              </div>

              {/* Content */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{step.description}</p>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 -right-4 text-gray-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Detailed Process */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">The Process in Detail</h2>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Scan className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 1: Scan Your Product</h3>
                <p className="text-gray-600 leading-relaxed">
                  Simply point your camera at any beauty product's barcode or take a photo of the ingredient list. Our advanced image recognition technology will instantly identify the product and extract all relevant information.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Search className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 2: Comprehensive Analysis</h3>
                <p className="text-gray-600 leading-relaxed">
                  We cross-reference each ingredient with trusted databases including EWG Skin Deep, analyzing for safety concerns, environmental impact, and ethical considerations. Our AI-powered system evaluates hundreds of factors in seconds.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Step 3: Make Better Choices</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get an instant sustainability score, detailed breakdown of concerns and benefits, plus personalized recommendations for eco-friendly alternatives. Make informed decisions that align with your values.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link to="/scan">
            <Button size="lg" className="mb-4">
              Try It Now - Scan Your First Product
            </Button>
          </Link>
          <p className="text-gray-600">It takes less than 30 seconds to get your first analysis</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
