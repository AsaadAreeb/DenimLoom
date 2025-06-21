import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Service } from '../../types/service';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

const ServiceModal = ({ service, onClose }: ServiceModalProps) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-lg max-w-md w-full h-3/4 overflow-y-auto relative shadow-lg"
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>

          <div className="p-4">
            <h2 className="text-xl font-bold mb-3">{service.title}</h2>
            <div className="prose prose-indigo max-w-none text-sm">
              <p className="text-gray-600 mb-4">{service.detailedDescription}</p>

              <h3 className="text-base font-semibold mb-2">Key Features:</h3>
              <ul className="space-y-1 mb-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-indigo-600 mr-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <h3 className="text-base font-semibold mb-2">Why Choose Us:</h3>
              <ul className="space-y-1 mb-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-indigo-600 mr-1">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>

              {service.processSteps && (
                <>
                  <h3 className="text-base font-semibold mb-2">Our Process:</h3>
                  <ol className="space-y-1">
                    {service.processSteps.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <span className="font-bold text-indigo-600 mr-1">
                          {index + 1}.
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ServiceModal;
