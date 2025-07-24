


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
  const processSteps = [
    {
      id: 'yarn-store',
      title: 'Yarn Store',
      description: 'We currently dye up to 2,000 kgs of yarn daily, employing advanced dyeing machines that ensure color consistency and precision. Our focus on accurate dyeing techniques guarantees a high-quality finish, meeting international environmental and safety standards. The facility is equipped with automated controls to minimize human error and improve throughput, ensuring the highest colorfastness and uniformity across batches.',
      image: '/process_svg/yarnStore.png',
    },
    {
      id: 'yarn-dyeing',
      title: 'Yarn Dyeing',
      description: 'Processes up to 2,000 kg of yarn daily using high-tech dyeing machines for color consistency and fastness. Automated controls minimize errors and optimize water and dye usage, reducing waste by 30%. The process adheres to OEKO-TEX standards, achieving 98% color matching accuracy. Eco-friendly techniques ensure compliance with environmental regulations while maintaining uniform quality across batches.',
      image: '/process_svg/yarn_dyeing.png',
    },
    {
      id: 'fabric-dyeing',
      title: 'Fabric Dyeing',
      description: 'Handles up to 10,000 meters of fabric daily, using jet and pad dyeing machines for even color distribution. Eco-friendly dyes and advanced monitoring ensure minimal water and chemical use, meeting REACH standards. Shrinkage is kept below 3%, and fabric color consistency is ensured. The process supports a variety of materials, including cotton, polyester, and blends, for versatile production.',
      image: '/process_svg/fabric.jpeg',
    },
    {
      id: 'knitting',
      title: 'Knitting',
      description: 'Produces 15,000 meters of fabric daily using circular and flat knitting machines. Automated systems ensure consistent gauge uniformity, with tolerances of ±2 mm. Capable of handling various yarn types, the process produces fabrics for garments, upholstery, and technical textiles. Advanced equipment minimizes defects, ensuring tensile strength and product durability.',
      image: '/process_svg/knitting.jpeg',
    },
    {
      id: 'cutting',
      title: 'Cutting & Stitching',
      description: 'Cuts up to 5,000 garments daily using CAD-guided machines with ±1 mm precision, reducing fabric waste by 15%. Stitching lines handle 3,500 garments per day, utilizing lockstitch, overlock, and flatlock systems for durability and flexibility. The process ensures consistent sizes, shapes, and stitching quality, meeting client specifications for bulk production.',
      image: '/process_svg/cut&stic.jpeg',
    },
    {
      id: 'swing-thread',
      title: 'Sewing Thread',
      description: 'Produces 1,500 thread cones daily, each weighing 1–2 kg. Threads are designed with 35 N/mm² tensile strength, ensuring durability during sewing. Over 500 color shades are available, matching fabric specifications. Automated machines guarantee uniform thickness and twist, minimizing thread breakage and enhancing performance for industrial and garment applications.',
      image: '/process_svg/sweingthread.jpeg',
    },
    {
      id: 'printing',
      title: 'Printing',
      description: 'Prints up to 8,000 meters of fabric daily using digital and rotary screen printing. Digital systems provide 600 DPI resolution for complex designs, while rotary systems handle high-volume orders efficiently. Eco-friendly inks reduce VOC emissions by 25%, ensuring compliance with environmental standards. The process delivers precise alignment and vibrant, durable prints for diverse applications.',
      image: '/process_svg/printing.jpeg',
    },
    {
      id: 'finishing',
      title: 'Finishing',
      description: 'Processes 12,000 meters of fabric or 6,000 garments daily, applying softening, anti-pilling, wrinkle-resistance, and waterproof finishes. Heat-setting ensures shrinkage control within ±1% tolerance, while advanced systems reduce energy consumption by 20%. The process enhances the product’s durability, comfort, and appearance, making it ready for retail or industrial use.',
      image: '/process_svg/finishing.png',
    },
    {
      id: 'quality-control',
      title: 'Quality Control',
      description: 'Conducts 100% inspection at all stages, testing for tensile strength, shrinkage, and colorfastness. Defect rates are kept below 1.5%, ensuring adherence to ISO and client standards. Automated and manual inspections maintain consistent quality, meeting international benchmarks for washing, rubbing, and light exposure. Only defect-free products are approved for shipment.',
      image: '/process_svg/inspection.png',
    },
    {
      id: 'warehouse-packing-shipping',
      title: 'Warehouse Packing & Shipping',
      description: 'Stores up to 20,000 garments or 50,000 meters of fabric in climate-controlled warehouses. Automated packing ensures 98% accuracy, offering custom solutions for bulk and retail orders. Dispatches up to 15 containers weekly, with deliveries completed within 2–10 business days globally. Efficient logistics ensure timely shipments while maintaining product integrity during transit.',
      image: '/process_svg/warehouse.jpg',
    }
  ];

  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedProcess, setSelectedProcess] = useState<string>(processSteps[0].id); // Initialize with the first process step

  const handleProcessClick = (processId: string) => {
    setSelectedProcess(processId);
  };

  const processDetail = processSteps.find((process) => process.id === selectedProcess);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        // className="relative py-20 bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-700 text-white"
        className="relative py-20 bg-denim-gradient text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-4xl font-lobster mb-6">Our Services</h1>
            <p className="text-xl max-w-2xl">
              Expertly crafted denim, manufactured to perfection and exported worldwide.
              From design to delivery, we bring your vision to life with quality and precision!
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
            <h2 className="text-4xl font-lobster mb-12 text-center bg-denim-gradient bg-clip-text text-transparent">Our Process</h2>

            {/* Mobile: Process Steps as Buttons */}
            <div className="md:hidden flex justify-center mb-6 flex-wrap gap-2 sm:gap-4">
              {processSteps.map((step) => (
                <button
                  key={step.id}
                  className={`cursor-pointer px-3 py-2 rounded-md bg-denim-gradient text-sm hover:text-gray-300 hover:scale-105 transition-all duration-300 ease-in-out transform ${selectedProcess === step.id
                      ? 'bg-indigo-500 scale-105 text-white'
                      : 'bg-indigo-600 text-gray-200'
                    }`}
                  onClick={() => handleProcessClick(step.id)}
                >
                  {step.title}
                </button>
              ))}
            </div>

            <div className="flex flex-col md:flex-row">
              {/* Desktop: Sidebar */}
              <div className="hidden md:block w-full md:w-1/5 bg-denim-gradients text-black rounded-lg shadow-lg p-6 h-auto mb-8 md:mb-0">
                <h3 className="text-xl font-courgette text-white mb-6">Process Steps</h3>
                <ul className="space-y-4">
                  {processSteps.map((step) => (
                    <li
                      key={step.id}
                      className={`cursor-pointer p-3 rounded-md hover:bg-black hover:scale-105 transition-all duration-300 ease-in-out transform ${selectedProcess === step.id
                          ? 'bg-black scale-105 text-white'
                          : 'text-gray-200'
                        }`}
                      onClick={() => handleProcessClick(step.id)}
                    >
                      {step.title}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process Details */}
              <div className="flex-1 bg-white rounded-lg shadow-lg p-6 md:ml-6">
                {processDetail ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <h3 className="text-2xl font-lobster mb-4">{processDetail.title}</h3>
                    <p className="text-gray-600 mb-6">{processDetail.description}</p>
                    <img
                      src={processDetail.image}
                      alt={processDetail.title}
                      className="rounded-lg shadow-xl h-[65vh] w-full object-cover"
                    />
                  </motion.div>
                ) : (
                  <p className="text-gray-500 text-center">Select a process to view details.</p>
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