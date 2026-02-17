import { motion } from 'framer-motion';
import heroImage from '../assets/hero-new.jpg';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('schedule-tour')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 text-center text-white px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-4">
          Country Club Way
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light">
          Luxury Real Estate | Excellence in Service
        </p>
        <button 
          onClick={scrollToContact}
          className="bg-white text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
        >
          Get In Touch
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
