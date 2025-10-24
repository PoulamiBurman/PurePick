import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Eye, Server } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: October 2024</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Main Statement */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 mb-8">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">Your Privacy is Critical</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                We are committed to handling all personal data responsibly, in compliance with GDPR and other data protection regulations.
              </p>
            </div>

            {/* Security Measures */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Lock className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Data Security</h3>
                </div>
                <p className="text-gray-600">
                  All user data is secured and passwords are encrypted with advanced hashing algorithms to protect your information.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Server className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Secure Communication</h3>
                </div>
                <p className="text-gray-600">
                  All communication between you and our server is protected by HTTPS encryption for maximum security.
                </p>
              </div>
            </div>

            {/* Data Usage */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-purple-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900">How We Use Your Data</h3>
              </div>
              <div className="bg-purple-50 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed">
                  We only use your scan history to provide you with your personalized product history and favorites list. 
                  Your data helps us improve your experience by remembering your preferences and providing personalized recommendations.
                </p>
              </div>
            </div>

            {/* What We Collect */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Account Information</h4>
                  <p className="text-gray-600">Email address, username, and encrypted password</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Scan History</h4>
                  <p className="text-gray-600">Products you've scanned and their analysis results</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Preferences</h4>
                  <p className="text-gray-600">Your favorites, settings, and personalization choices</p>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2">Access & Export</h4>
                  <p className="text-green-700 text-sm">Request a copy of all your personal data</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Correction</h4>
                  <p className="text-blue-700 text-sm">Update or correct your information</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-900 mb-2">Deletion</h4>
                  <p className="text-yellow-700 text-sm">Request deletion of your account and data</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 mb-2">Portability</h4>
                  <p className="text-purple-700 text-sm">Transfer your data to another service</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Questions About Privacy?</h3>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or how we handle your data, please contact us.
              </p>
              <Link to="/contact" className="text-primary-600 hover:text-primary-700 font-medium">
                Contact Our Privacy Team →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
