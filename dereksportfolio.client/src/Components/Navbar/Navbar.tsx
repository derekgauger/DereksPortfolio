import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUp } from 'lucide-react';


type NavItem = {
  name: string;
  path: string;
}

const navItems : NavItem []= [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Experiences', path: '/experiences' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (item : NavItem) => {
    navigate(item.path);
    setIsMenuOpen(false);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const checkPathInLocation = (item : NavItem) => {
    if (location.pathname === '/' && item.name === 'Home') {
      return true;
    } else if (location.pathname !== '/' && item.name !== 'Home' && location.pathname.includes(item.path)) {
      return true
    }
    return false;
  }

  return (
    <>
      <nav className={`font-mono fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname != '/' ? 'bg-black bg-opacity-90' : 'bg-transparent'
      }`}>
        <div className="container mx-auto py-6">
          <div className="flex justify-between items-center">
            <div onClick={() => navigate("/")} className="text-4xl font-bold text-white cursor-pointer">Derek Gauger</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className={`text-white hover:text-green-300 ${
                    checkPathInLocation(item)
                      ? 'border-b-2 border-green-400'
                      : ''
                  } ${item.name === 'Home' ? 'text-green-400' : ''}`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-black opacity-9">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className={`block w-full text-left py-2 px-4 hover:bg-[#212121] ${
                    checkPathInLocation(item)
                      ? 'text-green-400'
                      : 'text-white'
                  } ${item.name === 'Home' ? 'text-green-400' : ''}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Floating Action Button */}
      <button
        onClick={scrollToTop}
        className={`z-50 fixed bottom-8 right-8 p-3 bg-green-400 text-[#212121] rounded-full shadow-lg transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-16 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </>
  );
};

export default Navbar;