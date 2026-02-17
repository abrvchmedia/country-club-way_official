import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import planAImage from '../assets/planA.jpg';
import planBImage from '../assets/planB.jpg';

const plansData = {
  planA: {
    title: 'Plan A',
    image: planAImage,
    floorPlan: '/docs/floor-plan-unit-a.png',
    stats: {
      bedrooms: 3,
      bathrooms: 3,
      sqft: '2,500',
      garage: '2-car attached',
    },
    features: [
      'Gourmet kitchen with premium stainless steel appliances',
      'Spacious master suite with walk-in closet and spa-like bathroom',
      'Open-concept living and dining areas with high ceilings',
      'Private patio with mountain views',
    ],
  },
  planB: {
    title: 'Plan B',
    image: planBImage,
    floorPlan: '/docs/floor-plan-unit-b.png',
    stats: {
      bedrooms: 4,
      bathrooms: 3.5,
      sqft: '2,850',
      garage: '2-car attached',
    },
    features: [
      'Chef-inspired kitchen with quartz countertops and island',
      'Luxurious master retreat with separate sitting area',
      'Flexible loft space perfect for home office or entertainment',
      'Covered balcony overlooking the golf course',
    ],
  },
};

const Townhomes = () => {
  const [activeTab, setActiveTab] = useState('planA');
  const activePlan = plansData[activeTab];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
            Country Club Townhomes
          </h2>
          <p className="text-lg text-gray-600">
            Tempe, AZ | Estimated delivery: Spring 2026
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-8 mb-12 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('planA')}
            className={`pb-4 px-6 font-semibold text-lg transition-colors relative ${
              activeTab === 'planA'
                ? 'text-gray-900'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Plan A
            {activeTab === 'planA' && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab('planB')}
            className={`pb-4 px-6 font-semibold text-lg transition-colors relative ${
              activeTab === 'planB'
                ? 'text-gray-900'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Plan B
            {activeTab === 'planB' && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"
              />
            )}
          </button>
        </div>

        {/* Plan Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-3xl font-bold font-playfair text-center mb-8">
              {activePlan.title}
            </h3>

            {/* Hero Image */}
            <div className="mb-12 rounded-lg overflow-hidden">
              <img
                src={activePlan.image}
                alt={activePlan.title}
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column - Floor Plan */}
              <div>
                <h4 className="text-2xl font-bold font-playfair mb-6">Floor Plan</h4>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
                  <img
                    src={activePlan.floorPlan}
                    alt={`${activePlan.title} Floor Plan`}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Bedrooms</p>
                    <p className="text-2xl font-bold">{activePlan.stats.bedrooms}</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Bathrooms</p>
                    <p className="text-2xl font-bold">{activePlan.stats.bathrooms}</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Square Feet</p>
                    <p className="text-2xl font-bold">{activePlan.stats.sqft}</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Garage</p>
                    <p className="text-lg font-bold">{activePlan.stats.garage}</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Features */}
              <div>
                <h4 className="text-2xl font-bold font-playfair mb-4">Features</h4>
                <p className="text-gray-600 mb-6">
                  Each home includes premium finishes and modern amenities:
                </p>
                <ul className="space-y-4">
                  {activePlan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Townhomes;
