import React from 'react';
import ShoppingCartIcon from './icons/ShoppingCartIcon';
import UserIcon from './icons/UserIcon';
import SearchIcon from './icons/SearchIcon';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-white bg-opacity-90 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              <SearchIcon />
            </button>
            <a href="#login" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Login">
              <UserIcon />
            </a>
            <button className="text-gray-600 hover:text-gray-900 transition-colors relative">
              <ShoppingCartIcon />
              <span className="absolute -top-2 -right-2 bg-slate-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-lg">الرئيسية</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-lg">المتجر</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-lg">وصل حديثاً</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-lg">تخفيضات</a>
          </nav>

          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-3xl font-bold text-slate-800 tracking-wider">
              COR
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;