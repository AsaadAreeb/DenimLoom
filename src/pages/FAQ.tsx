import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import ReactDOMServer from "react-dom/server";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// Structured & categorized FAQs for Denim Loom
const faqSections = [
  {
    title: "Fabric & Composition",
    items: [
      {
        question: "What fabrics do you offer for denim jeans?",
        answer: (
          <>
            We offer a variety of fabrics, including:
            <ul className="list-disc mt-2 pl-5">
              <li>98% Cotton + 2% Spandex</li>
              <li>100% Cotton</li>
              <li>Poly + Cotton + Spandex blends</li>
              <li>Special cool fabrics (premium brands like Levi's)</li>
            </ul>
            <p className="mt-2">
              Composition and shades can be customized as per your requirements.
            </p>
          </>
        ),
      },
      {
        question: "Are different color variants available?",
        answer: (
          <p>
            Yes. Available shades: Blue, Mid-Blue, Black, Grey, White, Indigo, Acro and many more.
          </p>
        ),
      },
      {
        question: "Which color shades will be used?",
        answer: (
          <p>
            Standard shades are available; custom shades like Blue, Mid-Blue, and Sky Blue can be
            accommodated on request.
          </p>
        ),
      },
    ],
  },

  {
    title: "Pricing & Production",
    items: [
      {
        question: "What is the estimated cost for premium straight-fit jeans?",
        answer: (
          <>
            <p>Based on fabric weight:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left mt-2 min-w-[300px]">
                <thead>
                  <tr>
                    <th className="pb-1">Fabric (oz)</th>
                    <th className="pb-1">Cost (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>9 - 12 oz</td>
                    <td>$8 - $10</td>
                  </tr>
                  <tr>
                    <td>12 - 14 oz</td>
                    <td>$11 - $12</td>
                  </tr>
                  <tr>
                    <td>14 - 15 oz</td>
                    <td>$13 - $15</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2">Accessories: $2 (separate charge)</p>
            <p className="mt-2">
              Final pricing depends on selected fabric, shade, and finishing details.
            </p>
          </>
        ),
      },
      {
        question: "What is the lead time to the US for your products?",
        answer: (
          <p>
            Once the sample is finalized and approved, production lead time is approximately 30 to
            45 days.
          </p>
        ),
      },
      {
        question: "What are the next steps after inquiry?",
        answer: (
          <>
            <p>
              Please share any sample reference or specific design concept. We will then provide a
              detailed breakdown of:
            </p>
            <ul className="list-disc mt-2 pl-5">
              <li>Material usage</li>
              <li>Customization method</li>
              <li>Costing</li>
            </ul>
          </>
        ),
      },
    ],
  },

  {
    title: "Customization & Design",
    items: [
      {
        question: "Can you manage custom branding on all products?",
        answer: (
          <>
            <p>Yes, custom branding is available on patches, tags, buttons, and more.</p>
            <div className="mt-2">
              <p>Initial pricing:</p>
              <ul className="list-disc pl-5 mt-1">
                <li>Fabric & Stitching: $8 - $10 (9 - 12 oz)</li>
                <li>Accessories: $1.50 – $2.50 depending on customization level</li>
              </ul>
            </div>
          </>
        ),
      },
      {
        question: "What kind of patch is used for customer branding?",
        answer: (
          <>
            <p>Options include:</p>
            <ul className="list-disc mt-2 pl-5">
              <li>Standard: $0.16 – $0.20</li>
              <li>Leather: $0.50 – $0.60</li>
            </ul>
            <p className="mt-2">Custom/embossed patches available at minimal additional cost.</p>
          </>
        ),
      },
      {
        question: "What kind of tag cards will be used?",
        answer: (
          <p>
            Tag cards will be made as per your design. Charges are minimal and calculated separately.
          </p>
        ),
      },
      {
        question: "Will washing instructions be mentioned?",
        answer: <p>Yes, as per standard export requirements.</p>,
      },
      {
        question: "Will sizes be based on UK/EU standards?",
        answer: <p>Yes, sizing will match UK/EU standards based on your target market.</p>,
      },
    ],
  },

  {
    title: "Shipping & Delivery",
    items: [
      {
        question: "Do you manage delivery to the US and what is the estimated landing cost per piece?",
        answer: (
          <>
            <p>
              Yes, we handle full export and delivery management. Final costs vary based on
              packaging, fabric, and accessories.
            </p>
            <ul className="list-disc mt-2 pl-5 space-y-1">
              <li>
                Women’s jeans: ~3 pcs/kg → <span className="font-semibold">$6.00 per piece</span>
              </li>
              <li>
                Men’s jeans: ~2 pcs/kg → <span className="font-semibold">$8.00 per piece</span>
              </li>
            </ul>
          </>
        ),
      },
      {
        question: "How long does it take to send a sample to the US?",
        answer: (
          <>
            <p>Sample production: 15–20 days</p>
            <p>Shipping by air: 5–7 days</p>
            <p>
              An audit report is provided; client may arrange own inspection. Sample and freight
              cost borne by client.
            </p>
          </>
        ),
      },
    ],
  },

  {
    title: "Branding & Accessories",
    items: [
      {
        question: "Are special accessories charges included?",
        answer: <p>No, accessory charges are separate.</p>,
      },
      {
        question: "Are other garments like tops, dresses, and T-shirts available?",
        answer: (
          <p>
            Yes, we offer a wide range of apparel. View options at{" "}
            <a
              href="https://www.denimloom.com/products/apparel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              catalog
            </a>
          </p>
        ),
      },
    ],
  },

  {
    title: "Factory, Equipment & Audit",
    items: [
      {
        question: "Can you share pictures of your factory?",
        answer: <p>Yes, photos of the stitching unit and warehouse can be shared upon request.</p>,
      },
      {
        question: "What is done for audit purposes?",
        answer: <p>Audit reports are available upon request; clients may conduct their own audits.</p>,
      },
      {
        question: "What in-house equipment do you use for customizations?",
        answer: (
          <>
            <p>Our stitching unit is fully equipped with advanced tools, including:</p>
            <ul className="list-disc mt-2 pl-5">
              <li>Heat Press Machine</li>
              <li>Vinyl Cutter</li>
              <li>Rhinestone Applicator Tool</li>
              <li>Foil Printing Machine</li>
              <li>Sublimation Printer</li>
              <li>Laser Etching Machine</li>
            </ul>
          </>
        ),
      },
      {
        question: "How do you source materials for custom work?",
        answer: (
          <>
            <p>
              Materials are procured on demand for quality control and flexibility. We also stock
              essential embellishments, such as:
            </p>
            <ul className="list-disc mt-2 pl-5">
              <li>Rhinestones & Crystals</li>
              <li>Patches</li>
              <li>Beads</li>
              <li>Fabric paints (matte, metallic, 3D puff, glow)</li>
              <li>Lace fabrics</li>
              <li>3D puff inks</li>
            </ul>
          </>
        ),
      },
      {
        question: "What if I need highly specialized finishes or effects?",
        answer: (
          <p>
            For extraordinary customizations (e.g., 3D animation effects, specialty finishes), we
            collaborate with expert outsourcing partners to ensure top-quality results.
          </p>
        ),
      },
    ],
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Flatten all FAQ items for schema generation
  const allFaqs = faqSections.flatMap((section) => section.items);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "url": "https://www.denimloom.com/faq",
    "name": "FAQ - MOQ, Pricing, Samples & Shipping | Denim Loom",
    "description":
      "Answers to common sourcing questions: MOQ, pricing, sample policy and lead times for denim manufacturing and wholesale orders.",
    "mainEntity": allFaqs.map(({ question, answer }) => ({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": ReactDOMServer.renderToStaticMarkup(answer),
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>FAQ - MOQ, Pricing, Samples & Shipping | Denim Loom</title>
        <meta
          name="description"
          content="Answers to common sourcing questions: MOQ, pricing, sample policy and lead times for denim manufacturing and wholesale orders."
        />
        <link rel="canonical" href="https://www.denimloom.com/faq" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navbar variant="hero" />

      <div className="flex flex-col">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[70vh] flex items-center text-white pt-32"
        >
          <div className="absolute inset-0">
            <img
              src="/hero/FAQ_hero.jpeg"
              alt="Frequently Asked Questions Denim Loom"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-xl text-left ml-3 md:ml-[200px]"
            >
              <h1 className="text-4xl font-lobster mb-6">Frequently Asked Questions</h1>
              <p className="text-xl">
                Answers to our most commonly asked questions across products and customization.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* FAQ Sections */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {faqSections.map((section, sIndex) => (
              <div key={sIndex} className="mb-10">
                <h2 className="text-2xl font-semibold text-indigo-700 mb-6 border-b border-indigo-200 pb-2">
                  {section.title}
                </h2>

                {section.items.map((item, index) => {
                  const combinedIndex = sIndex * 100 + index; // unique key
                  return (
                    <motion.div
                      key={combinedIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.02 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-2xl shadow-md mb-4 overflow-hidden"
                    >
                      <div
                        className="flex items-center justify-between p-4 sm:p-6 cursor-pointer"
                        onClick={() => toggleFAQ(combinedIndex)}
                      >
                        <div className="flex">
                          <span className="text-indigo-600 font-bold text-sm sm:text-lg min-w-[28px] mr-2">
                            {index + 1}.
                          </span>
                          <h3 className="text-sm sm:text-lg font-semibold leading-snug pr-4">
                            {item.question}
                          </h3>
                        </div>
                        <motion.div
                          animate={{ rotate: activeIndex === combinedIndex ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0 ml-2"
                        >
                          <svg
                            className="w-5 h-5 text-indigo-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </motion.div>
                      </div>

                      <AnimatePresence>
                        {activeIndex === combinedIndex && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                              transition: {
                                height: { duration: 0.3 },
                                opacity: { duration: 0.2, delay: 0.1 },
                              },
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                              transition: {
                                height: { duration: 0.3 },
                                opacity: { duration: 0.2 },
                              },
                            }}
                            className="border-t border-gray-100"
                          >
                            <div className="text-gray-700 text-sm sm:text-base leading-relaxed p-4 sm:p-6 pl-6 sm:pl-10">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            ))}

            <div className="text-center text-sm sm:text-lg text-gray-500 mt-6 sm:mt-8 italic">
              * Please note that prices are subject to change. Contact us to confirm current pricing,
              which may vary based on order quantity and customization requirements.
            </div>
          </div>
        </section>
      </div>

      <Footer backgroundImage="/footer.jpeg" transparent />
    </>
  );
};

export default FAQ;
