
import { useState } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold text-primary">
            Digital Education
          </h1>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-primary focus:outline-none"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-700 hover:text-primary">
            Trang chủ
          </Button>
          <Button variant="ghost" className="text-gray-700 hover:text-primary">
            Khóa học
          </Button>
          <Button variant="ghost" className="text-gray-700 hover:text-primary">
            Giới thiệu
          </Button>
          <Button variant="ghost" className="text-gray-700 hover:text-primary">
            Liên hệ
          </Button>
          <Button className="bg-primary hover:bg-blue-600 text-white">
            Đăng nhập
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden container mx-auto mt-4 pb-4">
          <div className="flex flex-col space-y-2">
            <Button variant="ghost" className="text-gray-700 hover:text-primary justify-start">
              Trang chủ
            </Button>
            <Button variant="ghost" className="text-gray-700 hover:text-primary justify-start">
              Khóa học
            </Button>
            <Button variant="ghost" className="text-gray-700 hover:text-primary justify-start">
              Giới thiệu
            </Button>
            <Button variant="ghost" className="text-gray-700 hover:text-primary justify-start">
              Liên hệ
            </Button>
            <Button className="bg-primary hover:bg-blue-600 text-white w-full">
              Đăng nhập
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
