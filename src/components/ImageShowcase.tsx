import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type ImageType = { src: string; alt: string; link?: string; label?: string };

interface ShiftingRowProps {
  images: ImageType[];
  interval?: number;
}

const ShiftingRow = ({ images, interval = 3000 }: ShiftingRowProps) => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Responsive visibleCount based on screen width
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2); // Tablet
      } else {
        setVisibleCount(3); // Desktop
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // Auto-shifting logic
  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  const visibleImages = Array.from({ length: visibleCount }, (_, i) =>
    images[(startIndex + i) % images.length]
  );

  return (
    <div className="flex w-full overflow-hidden h-[500px] sm:h-[600px] lg:h-[800px]">
      {visibleImages.map((img, i) => (
        <Link
          to={img.link || "/products"}
          key={img.src + i}
          className="h-full flex-1 relative group"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover"
          />

          {/* Overlay with text */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center pb-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-2xl font-bold">
              {img.label || img.alt}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

const ImageShowcase = () => {
  const shirts = [
    { src: "/upfront/croptop/1.jpg", alt: "Denim Shirt", label: "Crop Top Shirt" },
    { src: "/upfront/croptop/2.jpg", alt: "Denim Shirt", label: "Crop Top Shirt" },
    { src: "/upfront/croptop/3.jpg", alt: "Denim Shirt", label: "Crop Top Shirt" },
    { src: "/upfront/croptop/4.jpg", alt: "Denim Shirt", label: "Crop Top Shirt" },
    { src: "/upfront/croptop/5.jpg", alt: "Denim Shirt", label: "Crop Top Shirt" },
    { src: "/upfront/croptop/6.jpg", alt: "Denim Shirt", label: "Crop Top Shirt" },
    { src: "/upfront/croptop/7.jpg", alt: "Denim Shirt", label: "Crop Top Shirt" },
  ];

  const jackets = [
    { src: "/upfront/jackets/2.jpg", alt: "Denim Jacket", label: "Classic Jacket" },
    { src: "/upfront/jackets/9.jpg", alt: "Denim Jacket", label: "Oversized Jacket" },
    { src: "/upfront/jackets/13.jpg", alt: "Denim Jacket", label: "Trucker Jacket" },
    { src: "/upfront/jackets/3.jpg", alt: "Denim Jacket", label: "Slim Fit Jacket" },
    { src: "/upfront/jackets/4.jpg", alt: "Denim Jacket", label: "Vintage Jacket" },
    { src: "/upfront/jackets/7.jpg", alt: "Denim Jacket", label: "Modern Jacket" },
  ];

  const jeans = [
    { src: "/upfront/jeans/baggy1.jpg", alt: "Denim Jeans", label: "Baggy Jeans" },
    { src: "/upfront/jeans/baggy2.jpg", alt: "Denim Jeans", label: "Baggy Jeans" },
    { src: "/upfront/jeans/man3.jpg", alt: "Denim Jeans", label: "Straight Jeans Men" },
    { src: "/upfront/jeans/bootcut1.jpg", alt: "Denim Jeans", label: "Bootcut Jeans" },
    { src: "/upfront/jeans/bootcut3.jpg", alt: "Denim Jeans", label: "Bootcut Jeans" },
    { src: "/upfront/jeans/straight3.jpg", alt: "Denim Jeans", label: "Straight Jeans Women" },
  ];

  const shorts = [
    { src: "/upfront/shorts/male1.jpg", alt: "Denim Shorts", label: "Men's Denim Shorts" },
    { src: "/upfront/shorts/female1.jpg", alt: "Denim Shorts", label: "Women's Denim Shorts" },
    { src: "/upfront/shorts/male2.jpg", alt: "Denim Shorts", label: "Men's Denim Shorts" },
    { src: "/upfront/shorts/female2.jpg", alt: "Denim Shorts", label: "Women's Denim Shorts" },
    { src: "/upfront/shorts/female3.jpg", alt: "Denim Shorts", label: "Women's Denim Shorts" },
  ];

  return (
    <div>
      <ShiftingRow images={shirts} interval={10000} />
      <ShiftingRow images={jackets} interval={10000} />
      <ShiftingRow images={jeans} interval={10000} />
      <ShiftingRow images={shorts} interval={10000} />
    </div>
  );
};

export default ImageShowcase;
