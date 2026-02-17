import { motion } from 'framer-motion';

const Welcome = () => {
  const scrollToContact = () => {
    document.getElementById('schedule-tour')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white py-24"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
          Welcome to Country Club Way
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Experience luxury living at its finest in Tempe, Arizona. Country Club Way offers 
          sophisticated townhomes designed with meticulous attention to detail, combining 
          elegant architecture with modern amenities. Our exclusive community provides 
          the perfect blend of comfort, style, and convenience for discerning homeowners 
          seeking an elevated lifestyle.
        </p>
        <button 
          onClick={scrollToContact}
          className="bg-gray-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
        >
          Get In Touch
        </button>
      </div>
    </motion.section>
  );
};

export default Welcome;
