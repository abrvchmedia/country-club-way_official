import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-playfair mb-4">
              Country Club Way
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Luxury townhomes in the heart of Tempe, offering sophisticated living 
              with unparalleled attention to detail and premium finishes.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>1234 Country Club Way</p>
              <p>Tempe, AZ 85281</p>
              <p className="pt-2">
                <a href="tel:+14805551234" className="hover:text-white transition-colors">
                  (480) 555-1234
                </a>
              </p>
              <p>
                <a href="mailto:info@countryclubway.com" className="hover:text-white transition-colors">
                  info@countryclubway.com
                </a>
              </p>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Country Club Way. All rights reserved. | 
            Equal Housing Opportunity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
