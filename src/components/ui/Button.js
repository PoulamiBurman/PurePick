import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  onClick,
  type = 'button',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 transform active:scale-95';
  
  const variants = {
    primary: 'bg-gradient-to-b from-primary-400 to-primary-600 hover:from-primary-500 hover:to-primary-700 text-white shadow-lg hover:shadow-xl focus:ring-primary-500 border-2 border-primary-500/20',
    secondary: 'bg-gradient-to-b from-white to-gray-50 hover:from-gray-50 hover:to-gray-100 text-gray-700 border-2 border-gray-200 shadow-md hover:shadow-lg focus:ring-gray-300',
    outline: 'border-2 border-primary-300 bg-white hover:bg-primary-50 text-primary-600 focus:ring-primary-500 shadow-sm hover:shadow-md',
    ghost: 'text-primary-600 hover:bg-primary-50 focus:ring-primary-500 hover:shadow-sm',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg',
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  return (
    <button
      type={type}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
