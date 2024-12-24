

import { motion } from 'framer-motion';
import { Package, Truck, Factory, Recycle, Shield, BarChart } from 'lucide-react';
import { useState } from 'react';
import { Service } from '../types/service';
import { services } from '../data/services';
import ServiceCard from '../components/services/ServiceCard';
import ServiceModal from '../components/services/ServiceModal';

const serviceIcons = {
  manufacturing: Factory,
  export: Truck,
  quality: Shield,
  packaging: Package,
  sustainability: Recycle,
  'market-analysis': BarChart,
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // New state for process selection
  const [selectedProcess, setSelectedProcess] = useState<string | null>(null);

  // Process data
  const processSteps = [
    {
      id: 'yarn-store',
      title: 'Yarn Store',
      description: 'We currently dye up to 2,000 kgs of yarn daily, employing advanced dyeing machines that ensure color consistency and precision. Our focus on accurate dyeing techniques guarantees a high-quality finish, meeting international environmental and safety standards. The facility is equipped with automated controls to minimize human error and improve throughput, ensuring the highest colorfastness and uniformity across batches.',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80',
    },
    {
      id: 'yarn-dyeing',
      title: 'Yarn Dyeing',
      description: 'We currently dye up to 3,000 kgs of yarn daily using advanced dyeing machines. Our focus on accuracy and color consistency guarantees a high-quality finish, meeting environmental and safety standards.',
      image: 'https://images.unsplash.com/photo-1504261331686-caa1193ed8eb?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1MnwwfDF8c2VhcmNofDJ8fHlhaXJufGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 'fabric-dyeing',
      title: 'Fabric Dyeing',
      description: 'Fabric dyeing and finishing capacity stands at 4,000 meters per day. We prioritize colorfastness, soft finishes, and minimal shrinkage, ensuring fabrics meet top-tier quality standards.',
      image: 'https://images.unsplash.com/photo-1586842632589-4794246ffed2?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1MnwwfDF8c2VhcmNofDJ8fGZhbmlhY3xlbnwwfHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 'knitting',
      title: 'Knitting',
      description: 'Our knitting division operates at a daily capacity of 2,500 meters, utilizing circular and flat knitting machines. This ensures smooth production flow and premium fabric texture, tailored to client specifications.',
      image: 'https://images.unsplash.com/photo-1572208593835-e8b72b72ff8b?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1MnwwfDF8c2VhcmNofDJ8fG5laXJpbnx8ZW58MHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 'cutting',
      title: 'Cutting & Stitching',
      description: 'Our cutting department handles up to 2,000 pieces daily using precision cutting tools. This ensures minimal wastage and high accuracy for consistent garment production.',
      image: 'https://images.unsplash.com/photo-1588613027925-df3748e76f7a?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1MnwwfDF8c2VhcmNofDJ8fGZhbmljY3x8ZW58MHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 'swing-thread',
      title: 'Sewing Thread',
      description: 'A consistent stock of sewing thread is maintained, with sufficient reserves to support daily stitching operations. This ensures smooth workflow without production delays.',
      image: 'https://images.unsplash.com/photo-1596977926981-5ab4c96dbd02?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1MnwwfDF8c2VhcmNofDJ8fGZpbmlzaGluZ3xlbnwwfHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 'printing',
      title: 'Printing',
      description: 'We currently produce 1,500 meters of printed fabric per day, utilizing both digital and screen printing techniques. Our prints are sharp, vibrant, and designed to withstand repeated washes.',
      image: 'https://images.unsplash.com/photo-1571687463483-7e14868e79b0?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1MnwwfDF8c2VhcmNofDJ8fHByaW50aW5nfGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 'finishing',
      title: 'Finishing',
      description: 'Finishing is the last step of fabric production that involves treatments such as pressing, smoothing, or waterproofing to enhance fabric quality.',
      image: 'https://images.unsplash.com/photo-1590963210367-45772e589f38?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1MnwwfDF8c2VhcmNofDJ8fGZpbmlzaGluZ3xlbnwwfHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 'quality-control',
      title: 'Quality Control',
      description: 'Every stage undergoes meticulous quality checks, with over 50 inspections performed daily. We monitor yarn strength, color accuracy, and fabric consistency, ensuring defect-free output.',
      image: 'https://images.unsplash.com/photo-1565067551-8e76c5b0e9a3?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1MnwwfDF8c2VhcmNofDJ8fHF1YWxpdHklMjBjb250cm9sfGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    },
    {
      id: 'warehouse-packing-shipping',
      title: 'Warehouse Packing & Shipping',
      description: 'The warehouse covers 10,000 square feet, handling storage, packing, and shipping. We dispatch up to 2,500 units daily, ensuring prompt delivery and accurate order fulfillment for clients.',
      image: 'https://images.unsplash.com/photo-1598715076632-04f5cf89929f?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1MnwwfDF8c2VhcmNofDJ8fGZhbmlzY2VsbHxlbnwwfHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080',
    }
  ];
  

  const handleProcessClick = (processId: string) => {
    setSelectedProcess(processId);
  };

  const processDetail = selectedProcess
    ? processSteps.find((process) => process.id === selectedProcess)
    : null;

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-700 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-2xl">
              Comprehensive denim manufacturing and export solutions tailored to your needs.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                Icon={serviceIcons[service.id as keyof typeof serviceIcons]}
                onLearnMore={setSelectedService}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />

      {/* Process Section with Sidebar */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
<div className="flex flex-col md:flex-row"> {/* Flexbox adjusted for responsiveness */}


  {/* Sidebar */}
  <div className="w-full md:w-1/5 bg-gradient-to-r from-indigo-600 to-indigo-600 text-black rounded-lg shadow-lg p-6 h-auto mb-8 md:mb-0">
    <h3 className="text-xl font-semibold text-white mb-6">Process Steps</h3>
    <ul className="space-y-4">
      {processSteps.map((step) => (
        <li
          key={step.id}
          className={`cursor-pointer p-3 rounded-md hover:bg-indigo-500 hover:scale-105 transition-all duration-300 ease-in-out transform ${
            selectedProcess === step.id ? 'bg-indigo-700' : 'bg-indigo-800'
          }`}
          onClick={() => handleProcessClick(step.id)}
        >
          <span className="font-medium text-sm text-white">{step.title}</span>
        </li>
      ))}
    </ul>
  </div>





              {/* Process Details */}
              {/* Process Details */}
  <div className="w-full md:w-4/5 pl-8">
    {processDetail ? (
      <div>
        <h3 className="text-2xl font-semibold mb-4">{processDetail.title}</h3>
        <p className="text-gray-600 mb-6  text-justify">{processDetail.description}</p>
        <img
          src={processDetail.image}
          alt={processDetail.title}
          className="rounded-lg shadow-xl h-[80vh] w-full object-cover"

        />
      </div>
    ) : (
      <p className="text-gray-600">Select a process to view more details.</p>
    )}
  </div>

</div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
