import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scan, BookOpen, User, Heart } from 'lucide-react';
import Button from '../ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set to true for testing - will be managed by actual auth

  // Check authentication status on component mount and listen for auth changes
  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem('userToken');
      // If no token exists, set a mock token for testing
      if (!token) {
        localStorage.setItem('userToken', 'mock-jwt-token');
        localStorage.setItem('userEmail', 'sarah.johnson@example.com');
        localStorage.setItem('userName', 'Sarah Johnson');
      }
      setIsLoggedIn(true); // Always logged in for testing
    };

    // Check initial auth status
    checkAuthStatus();

    // Listen for auth changes from login/register pages
    const handleAuthChange = () => {
      checkAuthStatus();
    };

    window.addEventListener('auth-change', handleAuthChange);
    
    return () => {
      window.removeEventListener('auth-change', handleAuthChange);
    };
  }, []);

  const navigation = [
    { name: 'Home', href: '/', icon: null },
    { name: 'Scan', href: '/scan', icon: Scan },
    { name: 'Learn', href: '/learn', icon: BookOpen },
  ];

  const userNavigation = [
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'Favorites', href: '/favorites', icon: Heart },
  ];

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    // For testing purposes, show confirmation and then log back in
    if (confirm('Are you sure you want to logout? (This will log you back in automatically for testing)')) {
      localStorage.removeItem('userToken');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userName');
      setIsLoggedIn(false);
      
      // Auto log back in after 1 second for testing
      setTimeout(() => {
        localStorage.setItem('userToken', 'mock-jwt-token');
        localStorage.setItem('userEmail', 'sarah.johnson@example.com');
        localStorage.setItem('userName', 'Sarah Johnson');
        setIsLoggedIn(true);
      }, 1000);
    }
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 rounded-full">
            <img 
              src="/logo.svg" 
              alt="PurePick Logo" 
              className="w-10 h-10 object-contain "            />
            <span className="text-xl font-bold text-gray-900">PurePick</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile">
                  <Button variant="ghost" className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>Profile</span>
                  </Button>
                </Link>
                <Button variant="primary" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link to="/register">
                  <Button variant="primary">Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary-600 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.href)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon && <item.icon className="w-5 h-5" />}
                  <span>{item.name}</span>
                </Link>
              ))}
              
              {isLoggedIn ? (
                <div className="px-3 py-2 space-y-2">
                  <Link to="/profile" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full flex items-center justify-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>Profile</span>
                    </Button>
                  </Link>
                  <Button variant="primary" onClick={handleLogout} className="w-full">
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="px-3 py-2 space-y-2">
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full">Login</Button>
                  </Link>
                  <Link to="/register" onClick={() => setIsOpen(false)}>
                    <Button variant="primary" className="w-full">Sign Up</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
