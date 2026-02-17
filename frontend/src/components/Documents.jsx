import { motion } from 'framer-motion';
import { FaFileAlt, FaDownload, FaImage } from 'react-icons/fa';

const documents = [
  {
    title: 'CC&Rs',
    filename: 'Recorded CC&Rs.pdf',
    path: '/Recorded CC&Rs .pdf',
    type: 'pdf',
  },
  {
    title: 'Bylaws',
    filename: 'Executed Bylaws.pdf',
    path: '/Executed Bylaws .pdf',
    type: 'pdf',
  },
  {
    title: 'Floor Plan - Unit A',
    filename: 'floor-plan-unit-a.png',
    path: '/docs/floor-plan-unit-a.png',
    type: 'image',
  },
  {
    title: 'Floor Plan - Unit B',
    filename: 'floor-plan-unit-b.png',
    path: '/docs/floor-plan-unit-b.png',
    type: 'image',
  },
  {
    title: 'Floor Plan - Unit C',
    filename: 'floor-plan-unit-c.png',
    path: '/docs/floor-plan-unit-c.png',
    type: 'image',
  },
];

const Documents = () => {
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
            Documents & Resources
          </h2>
          <p className="text-lg text-gray-600">
            Download important documents and information about Country Club Way
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <motion.a
              key={doc.filename}
              href={doc.path}
              target="_blank"
              rel="noopener noreferrer"
              download
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg p-6 transition-colors group"
            >
              <div className="absolute top-4 right-4">
                <FaDownload className="text-gray-400 group-hover:text-gray-600 transition-colors" />
              </div>
              
              <div className="flex items-start gap-4">
                {doc.type === 'pdf' ? (
                  <FaFileAlt className="text-4xl text-gray-400" />
                ) : (
                  <FaImage className="text-4xl text-gray-400" />
                )}
                <div>
                  <h3 className="font-semibold text-lg mb-1">{doc.title}</h3>
                  <p className="text-sm text-gray-500">{doc.filename}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documents;
