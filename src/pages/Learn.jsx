import React, { useState, useMemo } from 'react';
import { Search, AlertTriangle, CheckCircle, Info, Filter, BookOpen, Leaf, Shield, Award } from 'lucide-react';
import Card from '../components/ui/Card';

const Learn = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRisk, setSelectedRisk] = useState('all');

  // Comprehensive ingredient database
  const ingredients = [
    {
      name: 'Phenoxyethanol',
      category: 'Preservative',
      purpose: 'Prevents bacterial and fungal growth in cosmetic products',
      riskLevel: 'low',
      description: 'A widely used preservative that helps extend product shelf life. Generally considered safe in concentrations up to 1%. May cause mild skin irritation in sensitive individuals.',
      alternatives: ['Ethylhexylglycerin', 'Benzyl Alcohol', 'Potassium Sorbate'],
      foundIn: ['Moisturizers', 'Serums', 'Makeup', 'Cleansers']
    },
    {
      name: 'Sodium Lauryl Sulfate (SLS)',
      category: 'Surfactant',
      purpose: 'Creates foam and helps remove dirt and oil from skin and hair',
      riskLevel: 'moderate',
      description: 'A strong cleansing agent that can be harsh on sensitive skin. May cause dryness, irritation, and strip natural oils. Often found in shampoos and body washes.',
      alternatives: ['Sodium Laureth Sulfate', 'Coco Glucoside', 'Decyl Glucoside'],
      foundIn: ['Shampoos', 'Body washes', 'Toothpaste', 'Cleansers']
    },
    {
      name: 'Parabens',
      category: 'Preservative',
      purpose: 'Prevent microbial growth and extend product shelf life',
      riskLevel: 'moderate',
      description: 'A group of preservatives (methylparaben, propylparaben, etc.) that have been linked to hormone disruption concerns. Many brands now offer paraben-free alternatives.',
      alternatives: ['Phenoxyethanol', 'Benzyl Alcohol', 'Natural preservatives'],
      foundIn: ['Moisturizers', 'Makeup', 'Shampoos', 'Deodorants']
    },
    {
      name: 'Hyaluronic Acid',
      category: 'Humectant',
      purpose: 'Attracts and retains moisture in the skin',
      riskLevel: 'low',
      description: 'A powerful hydrating ingredient that can hold up to 1000 times its weight in water. Naturally found in skin and considered very safe for most people.',
      alternatives: ['Glycerin', 'Sodium PCA', 'Aloe Vera'],
      foundIn: ['Serums', 'Moisturizers', 'Eye creams', 'Sheet masks']
    },
    {
      name: 'Retinol',
      category: 'Active Ingredient',
      purpose: 'Promotes cell turnover and reduces signs of aging',
      riskLevel: 'moderate',
      description: 'A form of Vitamin A that helps with anti-aging and acne. Can cause irritation, dryness, and increased sun sensitivity. Should be used gradually and with sunscreen.',
      alternatives: ['Bakuchiol', 'Peptides', 'Vitamin C', 'Niacinamide'],
      foundIn: ['Anti-aging serums', 'Night creams', 'Acne treatments']
    },
    {
      name: 'Formaldehyde',
      category: 'Preservative',
      purpose: 'Preservative and hardening agent',
      riskLevel: 'high',
      description: 'A known carcinogen that can cause allergic reactions and respiratory issues. Often found in nail products and hair treatments. Best avoided entirely.',
      alternatives: ['Phenoxyethanol', 'Benzyl Alcohol', 'Natural preservatives'],
      foundIn: ['Nail polish', 'Hair straightening treatments', 'Some makeup']
    },
    {
      name: 'Niacinamide',
      category: 'Active Ingredient',
      purpose: 'Reduces inflammation, controls oil production, and improves skin texture',
      riskLevel: 'low',
      description: 'Also known as Vitamin B3, this ingredient is well-tolerated by most skin types. Helps with acne, hyperpigmentation, and strengthens the skin barrier.',
      alternatives: ['Zinc Oxide', 'Salicylic Acid', 'Azelaic Acid'],
      foundIn: ['Serums', 'Moisturizers', 'Acne treatments', 'Toners']
    },
    {
      name: 'Fragrance (Parfum)',
      category: 'Fragrance',
      purpose: 'Adds scent to cosmetic products',
      riskLevel: 'moderate',
      description: 'A catch-all term that can contain hundreds of undisclosed chemicals. May cause allergic reactions and skin sensitivity. Fragrance-free products are safer for sensitive skin.',
      alternatives: ['Essential oils', 'Natural extracts', 'Fragrance-free formulas'],
      foundIn: ['Perfumes', 'Lotions', 'Shampoos', 'Makeup']
    },
    {
      name: 'Glycerin',
      category: 'Humectant',
      purpose: 'Moisturizes and softens skin by attracting water',
      riskLevel: 'low',
      description: 'A safe and effective moisturizing ingredient derived from plants or animals. Helps maintain skin hydration and is suitable for all skin types.',
      alternatives: ['Hyaluronic Acid', 'Sodium PCA', 'Honey'],
      foundIn: ['Moisturizers', 'Cleansers', 'Serums', 'Soaps']
    },
    {
      name: 'Salicylic Acid',
      category: 'Active Ingredient',
      purpose: 'Exfoliates skin and unclogs pores',
      riskLevel: 'low',
      description: 'A beta-hydroxy acid (BHA) that penetrates pores to remove dead skin cells and excess oil. Effective for acne-prone skin but may cause dryness if overused.',
      alternatives: ['Glycolic Acid', 'Lactic Acid', 'Azelaic Acid'],
      foundIn: ['Acne treatments', 'Toners', 'Cleansers', 'Exfoliants']
    },
    {
      name: 'Mineral Oil',
      category: 'Emollient',
      purpose: 'Moisturizes and creates a protective barrier on skin',
      riskLevel: 'low',
      description: 'A petroleum-derived ingredient that locks in moisture. While safe, some prefer plant-based alternatives for environmental reasons. Non-comedogenic when pure.',
      alternatives: ['Jojoba Oil', 'Squalane', 'Argan Oil'],
      foundIn: ['Moisturizers', 'Baby products', 'Makeup removers', 'Lip balms']
    },
    {
      name: 'Titanium Dioxide',
      category: 'UV Filter',
      purpose: 'Provides broad-spectrum sun protection',
      riskLevel: 'low',
      description: 'A mineral sunscreen ingredient that sits on top of skin to reflect UV rays. Generally safe and well-tolerated, though nano particles may raise some concerns.',
      alternatives: ['Zinc Oxide', 'Chemical sunscreens'],
      foundIn: ['Sunscreens', 'BB creams', 'Foundation', 'Moisturizers with SPF']
    }
  ];

  const categories = ['all', 'Preservative', 'Surfactant', 'Humectant', 'Active Ingredient', 'Fragrance', 'Emollient', 'UV Filter'];
  const riskLevels = ['all', 'low', 'moderate', 'high'];

  const filteredIngredients = useMemo(() => {
    return ingredients.filter(ingredient => {
      const matchesSearch = ingredient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           ingredient.purpose.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           ingredient.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || ingredient.category === selectedCategory;
      const matchesRisk = selectedRisk === 'all' || ingredient.riskLevel === selectedRisk;
      
      return matchesSearch && matchesCategory && matchesRisk;
    });
  }, [searchTerm, selectedCategory, selectedRisk]);

  const getRiskColor = (riskLevel) => {
    switch (riskLevel) {
      case 'low': return 'text-green-600 bg-green-50 border-green-200';
      case 'moderate': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getRiskIcon = (riskLevel) => {
    switch (riskLevel) {
      case 'low': return CheckCircle;
      case 'moderate': return Info;
      case 'high': return AlertTriangle;
      default: return Info;
    }
  };

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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 text-primary-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Interactive Ingredient Glossary</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dive into our educational hub to find articles, tips, and awareness content about cosmetic sustainability. 
            Learn what ingredients really mean, how to read labels, and make informed beauty choices.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Bar */}
            <div className="md:col-span-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search ingredients (e.g., Phenoxyethanol)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Risk Level Filter */}
            <div>
              <select
                value={selectedRisk}
                onChange={(e) => setSelectedRisk(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white"
              >
                {riskLevels.map(risk => (
                  <option key={risk} value={risk}>
                    {risk === 'all' ? 'All Risk Levels' : `${risk.charAt(0).toUpperCase() + risk.slice(1)} Risk`}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredIngredients.length} of {ingredients.length} ingredients
          </div>
        </div>

        {/* Ingredient Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredIngredients.map((ingredient, index) => {
            const RiskIcon = getRiskIcon(ingredient.riskLevel);
            return (
              <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{ingredient.name}</h3>
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">
                        {ingredient.category}
                      </span>
                    </div>
                    <div className={`flex items-center px-2 py-1 rounded-full border ${getRiskColor(ingredient.riskLevel)}`}>
                      <RiskIcon className="w-4 h-4 mr-1" />
                      <span className="text-xs font-medium capitalize">{ingredient.riskLevel}</span>
                    </div>
                  </div>

                  {/* Purpose */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-1">Purpose:</h4>
                    <p className="text-sm text-gray-600">{ingredient.purpose}</p>
                  </div>

                  {/* Description */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-1">What you need to know:</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{ingredient.description}</p>
                  </div>

                  {/* Found In */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Commonly found in:</h4>
                    <div className="flex flex-wrap gap-1">
                      {ingredient.foundIn.slice(0, 3).map((product, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          {product}
                        </span>
                      ))}
                      {ingredient.foundIn.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          +{ingredient.foundIn.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Alternatives */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Safer alternatives:</h4>
                    <div className="flex flex-wrap gap-1">
                      {ingredient.alternatives.slice(0, 2).map((alt, idx) => (
                        <span key={idx} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                          {alt}
                        </span>
                      ))}
                      {ingredient.alternatives.length > 2 && (
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                          +{ingredient.alternatives.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* No Results */}
        {filteredIngredients.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No ingredients found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search terms or filters.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedRisk('all');
              }}
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Educational Articles */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Educational Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 group">
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

        {/* Risk Level Legend */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Risk Level Guide</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center p-3 bg-green-50 rounded-lg border border-green-200">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
              <div>
                <div className="font-medium text-green-900">Low Risk</div>
                <div className="text-sm text-green-700">Generally safe for most people</div>
              </div>
            </div>
            <div className="flex items-center p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <Info className="w-5 h-5 text-yellow-600 mr-3" />
              <div>
                <div className="font-medium text-yellow-900">Moderate Risk</div>
                <div className="text-sm text-yellow-700">May cause issues for some individuals</div>
              </div>
            </div>
            <div className="flex items-center p-3 bg-red-50 rounded-lg border border-red-200">
              <AlertTriangle className="w-5 h-5 text-red-600 mr-3" />
              <div>
                <div className="font-medium text-red-900">High Risk</div>
                <div className="text-sm text-red-700">Best avoided or used with caution</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
