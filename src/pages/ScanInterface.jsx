import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Upload, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const ScanInterface = () => {
  const navigate = useNavigate();
  const [isScanning, setIsScanning] = useState(false);

  const handleCameraScan = () => {
    setIsScanning(true);
    // Simulate scanning process
    setTimeout(() => {
      navigate('/product-analysis');
    }, 2000);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Simulate upload and processing
      setTimeout(() => {
        navigate('/product-analysis');
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/scan')}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
            <h1 className="text-lg font-semibold text-gray-900">Point at barcode or upload photo</h1>
            <div className="w-10"></div>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-8">
        {/* Camera Viewfinder Area */}
        <div className="relative mb-8">
          <div className="aspect-square bg-black/10 rounded-3xl overflow-hidden relative">
            {/* Scanning overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              {isScanning ? (
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                  <p className="text-white font-medium">Scanning...</p>
                </div>
              ) : (
                <div className="w-64 h-64 border-2 border-white/50 rounded-2xl flex items-center justify-center">
                  <div className="w-48 h-32 border-2 border-white rounded-lg flex items-center justify-center">
                    <Camera className="w-8 h-8 text-white/70" />
                  </div>
                </div>
              )}
            </div>
            
            {/* Corner indicators */}
            <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-white rounded-tl-lg"></div>
            <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-white rounded-tr-lg"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-white rounded-bl-lg"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-white rounded-br-lg"></div>
          </div>
        </div>

        {/* Instructions Card */}
        <Card className="mb-8 bg-white/90 backdrop-blur-sm">
          <Card.Content className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">How to scan</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">1</span>
                </div>
                <p className="text-gray-600">Position the barcode in the frame</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">2</span>
                </div>
                <p className="text-gray-600">Keep your camera steady</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">3</span>
                </div>
                <p className="text-gray-600">Wait for automatic detection</p>
              </div>
            </div>
          </Card.Content>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-4">
          {/* Start Camera Scan Button */}
          <Button 
            onClick={handleCameraScan}
            disabled={isScanning}
            className="w-full bg-gradient-to-r from-primary-500 to-rose-500 hover:from-primary-600 hover:to-rose-600 text-white py-4 text-lg font-semibold shadow-xl"
            size="lg"
          >
            <Camera className="w-6 h-6 mr-3" />
            {isScanning ? 'Scanning...' : 'Start Camera Scan'}
          </Button>

          {/* Upload Photo Button */}
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              id="photo-upload"
            />
            <Button 
              variant="secondary"
              className="w-full border-2 border-primary-300 bg-white/90 hover:bg-primary-50 text-primary-600 py-4 text-lg font-semibold"
              size="lg"
            >
              <Upload className="w-6 h-6 mr-3" />
              Upload Product Photo
            </Button>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            For best results, ensure good lighting and hold the camera steady
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScanInterface;
