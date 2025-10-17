import React from 'react';
import { User, Settings, Award, Heart } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
          <p className="text-gray-600 mt-2">Manage your account and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <Card.Header>
                <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
              </Card.Header>
              <Card.Content className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">John Doe</h3>
                    <p className="text-gray-600">john.doe@example.com</p>
                  </div>
                </div>
                <Button variant="outline">
                  <Settings className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </Card.Content>
            </Card>
          </div>

          <div>
            <Card>
              <Card.Header>
                <h2 className="text-xl font-semibold text-gray-900">Achievements</h2>
              </Card.Header>
              <Card.Content className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-yellow-500" />
                  <div>
                    <p className="font-medium text-gray-900">Eco Warrior</p>
                    <p className="text-sm text-gray-600">Scanned 50+ products</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-6 h-6 text-red-500" />
                  <div>
                    <p className="font-medium text-gray-900">Sustainability Champion</p>
                    <p className="text-sm text-gray-600">Chose eco-friendly options</p>
                  </div>
                </div>
              </Card.Content>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
