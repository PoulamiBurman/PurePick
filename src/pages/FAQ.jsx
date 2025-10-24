import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp, HelpCircle, Search } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        {
          id: 1,
          question: 'How do I scan products with PurePick?',
          answer: 'Simply open the PurePick app, tap the "Scan Product" button, and point your camera at the product\'s barcode or ingredient label. Our advanced image recognition will instantly identify the product and provide analysis results within seconds.'
        },
        {
          id: 2,
          question: 'What if a product scan fails?',
          answer: 'If a scan fails, try these steps: 1) Ensure good lighting and hold the camera steady, 2) Clean your camera lens, 3) Try scanning from different angles, 4) If the barcode is damaged, you can manually enter the product name or UPC code, 5) Contact our support team if issues persist.'
        }
      ]
    },
    {
      category: 'Understanding Results',
      questions: [
        {
          id: 3,
          question: 'What do the sustainability scores mean?',
          answer: 'Our sustainability scores range from 0-100: 70-100 (Good) indicates eco-friendly products with sustainable ingredients and packaging, 40-69 (Moderate) shows products with some concerns but acceptable overall, 0-39 (Poor) indicates products with significant environmental or health concerns.'
        },
        {
          id: 4,
          question: 'Where does PurePick get its data from?',
          answer: 'We source data from trusted databases including EWG Skin Deep, Open Beauty Facts, and our internal research database. We cross-reference multiple sources to ensure accuracy and provide comprehensive analysis of ingredients, sustainability practices, and ethical considerations.'
        }
      ]
    },
    {
      category: 'Data & Privacy',
      questions: [
        {
          id: 5,
          question: 'How does PurePick protect my data?',
          answer: 'Your privacy is our priority. We use HTTPS encryption for all communications, hash passwords with advanced algorithms, comply with GDPR regulations, and only use your scan history to provide personalized recommendations and maintain your product history.'
        },
        {
          id: 6,
          question: 'Can I delete my account and data?',
          answer: 'Yes, you have full control over your data. You can delete your account and all associated data at any time through your profile settings, or by contacting our support team. We will permanently remove all your personal information within 30 days of your request.'
        }
      ]
    },
    {
      category: 'Technical Issues',
      questions: [
        {
          id: 7,
          question: 'Why is the app running slowly?',
          answer: 'Slow performance can be caused by: poor internet connection, outdated app version, insufficient device storage, or high server load. Try updating the app, clearing cache, ensuring stable internet connection, or restarting the app. Contact support if issues persist.'
        },
        {
          id: 8,
          question: 'What happens if third-party APIs are unavailable?',
          answer: 'Our service depends on third-party APIs for some data. If an API is temporarily unavailable, we fall back on cached data to ensure continuous service. While this may result in slightly older information, we work to maintain service reliability and update data as soon as APIs are restored.'
        }
      ]
    },
    {
      category: 'Product Information',
      questions: [
        {
          id: 9,
          question: 'How accurate are the ingredient analyses?',
          answer: 'We strive for high accuracy by cross-referencing multiple trusted databases and using AI-powered analysis. However, our service is for informational purposes only and should not replace professional medical advice. Always consult healthcare professionals for specific concerns about cosmetic products.'
        },
        {
          id: 10,
          question: 'Can I suggest products to be added to the database?',
          answer: 'Absolutely! We welcome product suggestions from our community. You can submit product information through our contact form, and our team will review and add new products to our database. This helps us expand our coverage and serve our users better.'
        }
      ]
    }
  ];

  const filteredFAQs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions? Visit our FAQ to get answers about how to scan products, what our sustainability scores mean, 
              where our data comes from, what happens if a scan fails, and how we protect your data.
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredFAQs.map((category) => (
            <div key={category.category} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-primary-500 to-rose-500 px-6 py-4">
                <h2 className="text-xl font-semibold text-white flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2" />
                  {category.category}
                </h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {category.questions.map((faq) => (
                  <div key={faq.id} className="p-6">
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full text-left flex items-center justify-between focus:outline-none group"
                    >
                      <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                        {faq.question}
                      </h3>
                      {openFAQ === faq.id ? (
                        <ChevronUp className="w-5 h-5 text-gray-500 group-hover:text-primary-600 transition-colors flex-shrink-0 ml-4" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-primary-600 transition-colors flex-shrink-0 ml-4" />
                      )}
                    </button>
                    
                    {openFAQ === faq.id && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredFAQs.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search terms or browse all categories.</p>
            <button
              onClick={() => setSearchTerm('')}
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Contact Support */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Our support team is here to help you with any questions or concerns.
          </p>
          <Link to="/contact">
            <button className="bg-gradient-to-r from-primary-500 to-rose-500 text-white px-8 py-3 rounded-lg font-medium hover:from-primary-600 hover:to-rose-600 transition-colors">
              Contact Support
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
