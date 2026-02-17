import { motion } from 'framer-motion';

const TopBar = () => {
  const scrollToContact = () => {
    document.getElementById('schedule-tour')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold font-playfair">Country Club Way</h1>
          </div>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={scrollToContact}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Contact
            </button>
            <a 
              href="tel:+14805250031" 
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              (480) 525-0031
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default TopBar;
