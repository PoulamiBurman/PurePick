import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, AlertTriangle, Database, Shield } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: October 2024</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Agreement */}
            <div className="bg-gradient-to-r from-primary-50 to-rose-50 rounded-xl p-6 mb-8">
              <div className="flex items-center mb-4">
                <FileText className="w-8 h-8 text-primary-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">Agreement to Terms</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                By using PurePick, you agree to use our platform for informational purposes. Please read these terms carefully before using our service.
              </p>
            </div>

            {/* Data Sources */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Database className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900">Data Sources & Accuracy</h3>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 mb-4">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The ratings and analyses provided are based on data from trusted third-party APIs and our internal database, including:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Open Beauty Facts database
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    EWG Skin Deep database
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    PurePick internal research database
                  </li>
                </ul>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900">Important Disclaimer</h3>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl p-6">
                <p className="text-gray-700 leading-relaxed">
                  While we strive for accuracy, PurePick is not responsible for decisions made based on this data. 
                  Our analyses are for informational purposes only and should not replace professional advice. 
                  Always consult with healthcare professionals for specific concerns about cosmetic products.
                </p>
              </div>
            </div>

            {/* Service Availability */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900">Service Availability</h3>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed">
                  Our service depends on the availability of third-party APIs and may fall back on cached data if an API is unavailable. 
                  We work continuously to ensure reliable service but cannot guarantee 100% uptime.
                </p>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Your Responsibilities</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Accurate Information</h4>
                  <p className="text-gray-600">Provide accurate information when creating your account</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Appropriate Use</h4>
                  <p className="text-gray-600">Use our service only for its intended informational purposes</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Account Security</h4>
                  <p className="text-gray-600">Keep your login credentials secure and report any unauthorized access</p>
                </div>
              </div>
            </div>

            {/* Limitations */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Limitations of Liability</h3>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  PurePick provides information "as is" without warranties of any kind. We are not liable for:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Decisions made based on our analysis</li>
                  <li>• Allergic reactions or adverse effects from products</li>
                  <li>• Inaccuracies in third-party data sources</li>
                  <li>• Service interruptions or technical issues</li>
                </ul>
              </div>
            </div>

            {/* Updates */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Updates to Terms</h3>
              <div className="bg-purple-50 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed">
                  We may update these terms from time to time. We will notify users of significant changes via email or through the app. 
                  Continued use of PurePick after changes constitutes acceptance of the new terms.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Questions About These Terms?</h3>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please don't hesitate to contact us.
              </p>
              <Link to="/contact" className="text-primary-600 hover:text-primary-700 font-medium">
                Contact Our Legal Team →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
