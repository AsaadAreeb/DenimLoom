import { LucideIcon } from 'lucide-react';
import { Service } from '../../types/service';

interface ServiceCardProps {
  service: Service;
  Icon: LucideIcon;
  onLearnMore: (service: Service) => void;
}

const ServiceCard = ({ service, Icon, onLearnMore }: ServiceCardProps) => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
      <Icon className="w-12 h-12 text-blue-500 mb-4" />
      <h2 className="text-xl font-courgette mb-2">{service.title}</h2>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <button
        onClick={() => onLearnMore(service)}
        className="text-blue-700 font-semibold hover:text-indigo-800 transition-colors duration-200"
      >
        Learn More →
      </button>
    </div>
  );
}

export default ServiceCard;