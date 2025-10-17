import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Scan, Upload, Camera } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const ScanPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen gradient-bg py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Scan Your Product</h1>
          <p className="text-xl text-gray-600">
            Upload a product image or scan a barcode to analyze ingredients and sustainability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 text-center hover:shadow-lg transition-shadow">
            <Upload className="w-16 h-16 text-primary-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload Product Label</h3>
            <p className="text-gray-600 mb-6">
              Take a photo or upload an image of the product label for ingredient analysis
            </p>
            <Button 
              className="w-full"
              onClick={() => navigate('/scan-interface')}
            >
              <Camera className="w-5 h-5 mr-2" />
              Upload Image
            </Button>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow">
            <Scan className="w-16 h-16 text-primary-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Scan Barcode</h3>
            <p className="text-gray-600 mb-6">
              Scan the product barcode to instantly get product information and analysis
            </p>
            <Button 
              className="w-full"
              onClick={() => navigate('/scan-interface')}
            >
              <Scan className="w-5 h-5 mr-2" />
              Scan Barcode
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ScanPage;
