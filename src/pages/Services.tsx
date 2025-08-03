


import { motion } from 'framer-motion';
import { Package, Truck, Factory, Recycle, Shield, BarChart } from 'lucide-react';
import { useState } from 'react';
import { Service } from '../types/service';
import { services } from '../data/services';
import ServiceCard from '../components/services/ServiceCard';
import ServiceModal from '../components/services/ServiceModal';
import { Helmet } from 'react-helmet-async';


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
    description: 'As a leading denim manufacturer in Lahore, Pakistan, our yarn store dyes up to 2,000 kg of denim yarn daily using advanced machines for pinpoint color consistency. Our automated controls ensure the highest uniformity and colorfastness, meeting international OEKO-TEX and safety standards.',
    image: '/process_svg/yarnStore.png',
  },
  {
    id: 'yarn-dyeing',
    title: 'Yarn Dyeing',
    description: 'Our Lahore-based facility processes 2,000 kg of yarn per day—optimizing water and dye usage by 30%. As a top denim manufacturer in Pakistan, we adhere to OEKO-TEX standards and achieve 98% color-match accuracy with eco-friendly dye techniques.',
    image: '/process_svg/yarn_dyeing.png',
  },
  {
    id: 'fabric-dyeing',
    title: 'Fabric Dyeing',
    description: 'At our Pakistan denim manufacturing plant, we dye up to 10,000 m of fabric daily on jet and pad machines. We use eco-friendly dyes, maintain <3% shrinkage, meet REACH requirements, and ensure uniform color distribution across cotton, polyester, and blended fabrics.',
    image: '/process_svg/fabric.jpeg',
  },
  {
    id: 'knitting',
    title: 'Knitting',
    description: 'Our circular and flat knitting lines in Lahore produce 15,000 m of denim fabric each day. This leading denim manufacturer in Pakistan guarantees ±2 mm gauge uniformity and robust tensile strength for garments, upholstery, and technical textiles.',
    image: '/process_svg/knitting.jpeg',
  },
  {
    id: 'cutting',
    title: 'Cutting & Stitching',
    description: 'As one of Pakistan’s premier denim manufacturers, we cut 5,000 garments daily with CAD-guided precision (±1 mm), reducing waste by 15%. Our stitching lines deliver 3,500 lock-, over-, and flatlock-stitched garments per day, all in our Lahore factory.',
    image: '/process_svg/cut&stic.jpeg',
  },
  {
    id: 'swing-thread',
    title: 'Sewing Thread',
    description: 'Our Lahore plant spins 1,500 cones of sewing thread daily (1–2 kg each) with 35 N/mm² tensile strength. Over 500 shades ensure perfect denim matching—making us a top choice among denim manufacturers in Pakistan.',
    image: '/process_svg/sweingthread.jpeg',
  },
  {
    id: 'printing',
    title: 'Printing',
    description: 'At Denim Loom’s Lahore facility, we digitally and screen-print 8,000 m of denim daily at 600 DPI. Our eco-ink process cuts VOCs by 25% and guarantees sharp, fade-resistant prints for high-volume runs.',
    image: '/process_svg/printing.jpeg',
  },
  {
    id: 'finishing',
    title: 'Finishing',
    description: 'Our finishing line in Lahore treats 12,000 m of fabric or 6,000 garments each day with softening, anti-pilling, wrinkle-resistant, and waterproof finishes—delivering durable, retail-ready denim from Pakistan’s leading manufacturer.',
    image: '/process_svg/finishing.png',
  },
  {
    id: 'quality-control',
    title: 'Quality Control',
    description: 'As a top denim manufacturer in Pakistan, we conduct 100% inspections on tensile strength, shrinkage, and colorfastness. Our defect rate remains below 1.5%, ensuring only flawless denim leaves our Lahore factory.',
    image: '/process_svg/inspection.png',
  },
  {
    id: 'warehouse-packing-shipping',
    title: 'Warehouse Packing & Shipping',
    description: 'Our climate-controlled Lahore warehouse stores up to 50,000 m of denim or 20,000 garments. We dispatch 15+ containers weekly worldwide, offering custom packing solutions with 98% accuracy—solidifying our reputation in Pakistan’s denim exports.',
    image: '/process_svg/warehouse.jpg',
  }
];


  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedProcess, setSelectedProcess] = useState<string>(processSteps[0].id); // Initialize with the first process step

  const handleProcessClick = (processId: string) => {
    setSelectedProcess(processId);
  };

  const processDetail = processSteps.find((process) => process.id === selectedProcess);

  const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "url": "https://www.denimloom.com/services",
  "name": "Our Services – Denim Loom",
  "description": "Fabric manufacturing, dyeing, inspection, finishing and packaging services offered at Denim Loom.",
  "provider": { "@id": "https://www.denimloom.com/#organization" },
  "mainEntity": {
    "@type": "OfferCatalog",
    "name": "Denim Fabric Service Catalog",
    "itemListElement": processSteps.map((step) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": step.title, // Required property added
        "description": step.description
      }
    }))
  }
};

  return (
     <>
      <Helmet>
        <title>Services – Denim Loom</title>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
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
    </>
  );
};

export default Services;