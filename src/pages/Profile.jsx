import React, { useState, useEffect } from 'react';
import { User, Settings, Award, Heart, AlertTriangle, Shield, Save, X, Plus, History, Star, Trophy, Target, Calendar, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Profile = () => {
  const [avoidList, setAvoidList] = useState([]);
  const [customIngredient, setCustomIngredient] = useState('');
  const [showAddCustom, setShowAddCustom] = useState(false);

  // Predefined ingredients and concerns users commonly want to avoid
  const commonAvoidableItems = [
    { id: 'parabens', name: 'Parabens', category: 'Preservatives', description: 'May disrupt hormones' },
    { id: 'sulfates', name: 'Sulfates (SLS/SLES)', category: 'Surfactants', description: 'Can cause dryness and irritation' },
    { id: 'fragrance', name: 'Fragrance/Parfum', category: 'Fragrance', description: 'May cause allergic reactions' },
    { id: 'formaldehyde', name: 'Formaldehyde', category: 'Preservatives', description: 'Known carcinogen' },
    { id: 'phthalates', name: 'Phthalates', category: 'Plasticizers', description: 'Potential hormone disruptors' },
    { id: 'mineral-oil', name: 'Mineral Oil', category: 'Emollients', description: 'Petroleum-derived, may clog pores' },
    { id: 'gluten', name: 'Gluten', category: 'Allergens', description: 'For those with gluten sensitivity' },
    { id: 'alcohol', name: 'Drying Alcohols', category: 'Solvents', description: 'Can dry out skin' },
    { id: 'silicones', name: 'Silicones', category: 'Emollients', description: 'May cause buildup' },
    { id: 'retinol', name: 'Retinol/Retinoids', category: 'Active Ingredients', description: 'For pregnancy/sensitive skin' },
    { id: 'essential-oils', name: 'Essential Oils', category: 'Fragrance', description: 'May cause sensitivity' },
    { id: 'coconut', name: 'Coconut-derived ingredients', category: 'Allergens', description: 'For coconut allergies' }
  ];

  // Load avoid list from localStorage on component mount
  useEffect(() => {
    const savedAvoidList = localStorage.getItem('userAvoidList');
    if (savedAvoidList) {
      setAvoidList(JSON.parse(savedAvoidList));
    }
  }, []);

  // Save avoid list to localStorage whenever it changes
  const saveAvoidList = (newAvoidList) => {
    setAvoidList(newAvoidList);
    localStorage.setItem('userAvoidList', JSON.stringify(newAvoidList));
  };

  const toggleAvoidItem = (item) => {
    const isCurrentlyAvoided = avoidList.some(avoided => avoided.id === item.id);
    
    if (isCurrentlyAvoided) {
      // Remove from avoid list
      const newAvoidList = avoidList.filter(avoided => avoided.id !== item.id);
      saveAvoidList(newAvoidList);
    } else {
      // Add to avoid list
      const newAvoidList = [...avoidList, item];
      saveAvoidList(newAvoidList);
    }
  };

  const addCustomIngredient = () => {
    if (customIngredient.trim()) {
      const customItem = {
        id: `custom-${Date.now()}`,
        name: customIngredient.trim(),
        category: 'Custom',
        description: 'Custom ingredient to avoid'
      };
      
      const newAvoidList = [...avoidList, customItem];
      saveAvoidList(newAvoidList);
      setCustomIngredient('');
      setShowAddCustom(false);
    }
  };

  const removeCustomIngredient = (itemId) => {
    const newAvoidList = avoidList.filter(item => item.id !== itemId);
    saveAvoidList(newAvoidList);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Preservatives': 'bg-red-100 text-red-700',
      'Surfactants': 'bg-blue-100 text-blue-700',
      'Fragrance': 'bg-purple-100 text-purple-700',
      'Allergens': 'bg-orange-100 text-orange-700',
      'Active Ingredients': 'bg-green-100 text-green-700',
      'Emollients': 'bg-yellow-100 text-yellow-700',
      'Plasticizers': 'bg-pink-100 text-pink-700',
      'Solvents': 'bg-indigo-100 text-indigo-700',
      'Custom': 'bg-gray-100 text-gray-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Personal Dashboard</h1>
          <p className="text-xl text-gray-600">Welcome back, Sarah! Here's your beauty journey overview.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <div className="p-6 text-center">
              <BarChart3 className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">127</div>
              <div className="text-blue-100">Products Scanned</div>
            </div>
          </Card>
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <div className="p-6 text-center">
              <Heart className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">23</div>
              <div className="text-green-100">Favorites Saved</div>
            </div>
          </Card>
          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <div className="p-6 text-center">
              <Shield className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">{avoidList.length}</div>
              <div className="text-purple-100">Ingredients Avoided</div>
            </div>
          </Card>
          <Card className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
            <div className="p-6 text-center">
              <Trophy className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">8</div>
              <div className="text-yellow-100">Achievements Earned</div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Personal Info & Quick Actions */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Personal Information */}
            <Card className="bg-white shadow-lg">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Sarah Johnson</h3>
                      <p className="text-gray-600">sarah.johnson@example.com</p>
                      <p className="text-sm text-gray-500">Member since Oct 2024</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Settings className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-white shadow-lg">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <Link to="/history" className="block">
                    <Button variant="outline" className="w-full justify-start">
                      <History className="w-4 h-4 mr-3" />
                      View Scan History
                    </Button>
                  </Link>
                  <Link to="/favorites" className="block">
                    <Button variant="outline" className="w-full justify-start">
                      <Star className="w-4 h-4 mr-3" />
                      My Favorites
                    </Button>
                  </Link>
                  <Link to="/scan" className="block">
                    <Button className="w-full justify-start">
                      <Target className="w-4 h-4 mr-3" />
                      Scan New Product
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>

            {/* Trophy Case */}
            <Card className="bg-white shadow-lg">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                  Trophy Case
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <Award className="w-6 h-6 text-yellow-500" />
                    <div>
                      <p className="font-medium text-gray-900">Eco Warrior</p>
                      <p className="text-sm text-gray-600">Scanned 100+ products</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <Heart className="w-6 h-6 text-green-500" />
                    <div>
                      <p className="font-medium text-gray-900">Sustainability Champion</p>
                      <p className="text-sm text-gray-600">Chose eco-friendly options</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <Shield className="w-6 h-6 text-blue-500" />
                    <div>
                      <p className="font-medium text-gray-900">Ingredient Expert</p>
                      <p className="text-sm text-gray-600">Customized avoid list</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <Calendar className="w-6 h-6 text-purple-500" />
                    <div>
                      <p className="font-medium text-gray-900">Daily Scanner</p>
                      <p className="text-sm text-gray-600">7-day scanning streak</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Avoid List & Recent Activity */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Recent Activity */}
            <Card className="bg-white shadow-lg">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <History className="w-5 h-5 mr-2 text-blue-500" />
                  Recent Activity
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Target className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Scanned L'Oréal Moisturizer</p>
                      <p className="text-sm text-gray-600">Found 2 avoided ingredients • 2 hours ago</p>
                    </div>
                    <div className="text-red-500 text-sm font-medium">Warning</div>
                  </div>
                  <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Added The Ordinary Serum to favorites</p>
                      <p className="text-sm text-gray-600">Clean ingredients match your preferences • 1 day ago</p>
                    </div>
                    <div className="text-green-500 text-sm font-medium">Safe</div>
                  </div>
                  <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Updated avoid list</p>
                      <p className="text-sm text-gray-600">Added 'Fragrance' to personal avoid list • 3 days ago</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <Link to="/history">
                    <Button variant="outline" size="sm">
                      View Full History
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>

            {/* Personalized Avoid List */}
            <Card className="bg-white shadow-lg">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                      <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                      Personal Avoid List
                    </h2>
                    <p className="text-gray-600 mt-1">
                      Customize your ingredient preferences. We'll alert you when scanning products with these ingredients.
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-600">{avoidList.length}</div>
                    <div className="text-sm text-gray-500">items avoided</div>
                  </div>
                </div>

                {/* Current Avoid List */}
                {avoidList.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Currently Avoiding:</h3>
                    <div className="flex flex-wrap gap-2">
                      {avoidList.map((item) => (
                        <div key={item.id} className="flex items-center bg-red-50 border border-red-200 rounded-full px-3 py-1">
                          <span className="text-sm font-medium text-red-700">{item.name}</span>
                          {item.id.startsWith('custom-') && (
                            <button
                              onClick={() => removeCustomIngredient(item.id)}
                              className="ml-2 text-red-500 hover:text-red-700"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Common Avoidable Items */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Common Ingredients to Avoid:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {commonAvoidableItems.map((item) => {
                      const isAvoided = avoidList.some(avoided => avoided.id === item.id);
                      return (
                        <div
                          key={item.id}
                          className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            isAvoided 
                              ? 'border-red-300 bg-red-50' 
                              : 'border-gray-200 bg-white hover:border-primary-300 hover:bg-primary-50'
                          }`}
                          onClick={() => toggleAvoidItem(item)}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center mb-2">
                                <h4 className="font-medium text-gray-900">{item.name}</h4>
                                <span className={`ml-2 px-2 py-1 text-xs rounded-full ${getCategoryColor(item.category)}`}>
                                  {item.category}
                                </span>
                              </div>
                              <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ml-3 ${
                              isAvoided ? 'bg-red-500 border-red-500' : 'border-gray-300'
                            }`}>
                              {isAvoided && <X className="w-3 h-3 text-white" />}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Add Custom Ingredient */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Add Custom Ingredient:</h3>
                  {!showAddCustom ? (
                    <button
                      onClick={() => setShowAddCustom(true)}
                      className="flex items-center px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary-300 hover:text-primary-600 transition-colors"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add specific ingredient to avoid
                    </button>
                  ) : (
                    <div className="flex items-center space-x-3">
                      <input
                        type="text"
                        value={customIngredient}
                        onChange={(e) => setCustomIngredient(e.target.value)}
                        placeholder="Enter ingredient name (e.g., Benzyl Alcohol)"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        onKeyPress={(e) => e.key === 'Enter' && addCustomIngredient()}
                      />
                      <Button onClick={addCustomIngredient} size="sm">
                        <Save className="w-4 h-4 mr-1" />
                        Add
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => {
                          setShowAddCustom(false);
                          setCustomIngredient('');
                        }}
                      >
                        Cancel
                      </Button>
                    </div>
                  )}
                </div>

                {/* How it Works */}
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-900 mb-2">How Your Avoid List Works:</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• When you scan products, we'll check against your avoid list</li>
                    <li>• You'll see a prominent warning if a product contains avoided ingredients</li>
                    <li>• We'll suggest alternative products that don't contain your avoided items</li>
                    <li>• Your preferences are saved locally and sync across your devices</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
