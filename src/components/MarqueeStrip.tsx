import { useEffect, useState } from "react";

const offers = [
  "🎉 Get Your Samples Now • 🔥 10% Off Initial Samples • 📦 MOQs As Low As 1 Piece Per Style (Samples Only)",
  "👖 Premium Denim Manufacturing • 🧵 Custom Styles, Washes & Finishes • 🌍 Exporting Worldwide with On-Time Delivery",
  "🏭 Factory-Direct Pricing • ✅ CE Certified Fabrics & Stitching Quality • 📦 Bulk & Small Orders Accepted",
  "✨ Elevating Denim Standards • 🔒 Rigorous Quality Control • 🤝 Trusted Partner for Global Apparel Brands",
];

const MarqueeStrip = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % offers.length);
    }, 20000); // change every 20 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black overflow-hidden whitespace-nowrap">
      <div
        key={currentIndex}
        className="animate-marquee text-white text-xl font-semibold py-3 inline-block"
      >
        {offers[currentIndex]} •{" "}
        <a
          href="https://wa.me/923440854334"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600 underline ml-4"
        >
          Click here to get quote →
        </a>
      </div>
    </div>
  );
};

export default MarqueeStrip;
