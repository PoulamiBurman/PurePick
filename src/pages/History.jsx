import React from 'react';
import { Clock, Star } from 'lucide-react';
import Card from '../components/ui/Card';

const History = () => {
  const scanHistory = [
    {
      id: 1,
      productName: 'Gentle Face Cleanser',
      brand: 'EcoBeauty',
      scanDate: '2024-10-15',
      sustainabilityScore: 88,
      safetyRating: 'Safe',
    },
    {
      id: 2,
      productName: 'Vitamin C Serum',
      brand: 'GreenGlow',
      scanDate: '2024-10-14',
      sustainabilityScore: 95,
      safetyRating: 'Safe',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Scan History</h1>
          <p className="text-gray-600 mt-2">View your previously scanned products</p>
        </div>

        <div className="space-y-4">
          {scanHistory.map((item) => (
            <Card key={item.id} hover>
              <Card.Content className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-4">
                  <Clock className="w-8 h-8 text-gray-400" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.productName}</h3>
                    <p className="text-gray-600">{item.brand}</p>
                    <p className="text-sm text-gray-500">Scanned on {item.scanDate}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2 mb-1">
                    <Star className="w-4 h-4 text-green-500" />
                    <span className="font-medium text-green-600">{item.sustainabilityScore}%</span>
                  </div>
                  <span className="text-sm text-gray-600">{item.safetyRating}</span>
                </div>
              </Card.Content>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
