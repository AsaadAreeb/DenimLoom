// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// type ImageType = { src: string; alt: string; link?: string; label?: string };

// interface ShiftingRowProps {
//   images: ImageType[];
//   interval?: number;
// }

// const ShiftingRow = ({ images, interval = 3000 }: ShiftingRowProps) => {
//   const [startIndex, setStartIndex] = useState(0);
//   const [visibleCount, setVisibleCount] = useState(3);

//   // ✅ Preload images once
//   useEffect(() => {
//     images.forEach((img) => {
//       const preload = new Image();
//       preload.src = img.src;
//     });
//   }, [images]);

//   // Responsive visibleCount based on screen width
//   useEffect(() => {
//     const updateVisibleCount = () => {
//       if (window.innerWidth < 640) {
//         setVisibleCount(1); // Mobile
//       } else if (window.innerWidth < 1024) {
//         setVisibleCount(2); // Tablet
//       } else {
//         setVisibleCount(3); // Desktop
//       }
//     };

//     updateVisibleCount();
//     window.addEventListener("resize", updateVisibleCount);
//     return () => window.removeEventListener("resize", updateVisibleCount);
//   }, []);

//   // Auto-shifting logic
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setStartIndex((prev) => (prev + 1) % images.length);
//     }, interval);
//     return () => clearInterval(timer);
//   }, [images.length, interval]);

//   const visibleImages = Array.from({ length: visibleCount }, (_, i) =>
//     images[(startIndex + i) % images.length]
//   );

//   return (
//     <div className="flex w-full overflow-hidden h-[500px] sm:h-[600px] lg:h-[800px]">
//       {visibleImages.map((img, i) => (
//         <Link
//           to={img.link || "/products"}
//           key={img.src + i}
//           className="h-full flex-1 relative group"
//         >
//           <img
//             src={img.src}
//             alt={img.alt}
//             loading="eager" // ✅ force earlier load
//             className="w-full h-full object-cover opacity-0 transition-opacity duration-500"
//             onLoad={(e) => (e.currentTarget.style.opacity = "1")} // ✅ fade-in
//           />

//           {/* Overlay with text */}
//           <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center pb-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <span className="text-white text-2xl font-bold">
//               {img.label || img.alt}
//             </span>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// const ImageShowcase = () => {
//   const shirts = [
//     { src: "/upfront/croptop/1.jpg", alt: "Denim Shirt", label: "Crop Top Shirt" },
//     { src: "/upfront/croptop/2.jpg", alt: "Denim Shirt", label: "Crop Top Shirt" },
//     { src: "/upfront/croptop/3.jpg", alt: "Denim Shirt", label: "Crop Top Shirt" },
//     { src: "/upfront/croptop/4.jpg", alt: "Denim Shirt", label: "Crop Top Shirt" },
//     { src: "/upfront/croptop/5.jpg", alt: "Denim Shirt", label: "Crop Top Shirt" },
//     { src: "/upfront/croptop/6.jpg", alt: "Denim Shirt", label: "Crop Top Shirt" },
//     { src: "/upfront/croptop/7.jpg", alt: "Denim Shirt", label: "Crop Top Shirt" },
//   ];

//   const jackets = [
//     { src: "/upfront/jackets/2.jpg", alt: "Denim Jacket", label: "Classic Jacket" },
//     { src: "/upfront/jackets/9.jpg", alt: "Denim Jacket", label: "Oversized Jacket" },
//     { src: "/upfront/jackets/13.jpg", alt: "Denim Jacket", label: "Trucker Jacket" },
//     { src: "/upfront/jackets/3.jpg", alt: "Denim Jacket", label: "Slim Fit Jacket" },
//     { src: "/upfront/jackets/4.jpg", alt: "Denim Jacket", label: "Vintage Jacket" },
//     { src: "/upfront/jackets/7.jpg", alt: "Denim Jacket", label: "Modern Jacket" },
//   ];

//   const jeans = [
//     { src: "/upfront/jeans/baggy1.jpg", alt: "Denim Jeans", label: "Baggy Jeans" },
//     { src: "/upfront/jeans/baggy2.jpg", alt: "Denim Jeans", label: "Baggy Jeans" },
//     { src: "/upfront/jeans/man3.jpg", alt: "Denim Jeans", label: "Straight Jeans Men" },
//     { src: "/upfront/jeans/bootcut1.jpg", alt: "Denim Jeans", label: "Bootcut Jeans" },
//     { src: "/upfront/jeans/bootcut3.jpg", alt: "Denim Jeans", label: "Bootcut Jeans" },
//     { src: "/upfront/jeans/straight3.jpg", alt: "Denim Jeans", label: "Straight Jeans Women" },
//   ];

//   const shorts = [
//     { src: "/upfront/shorts/male1.jpg", alt: "Denim Shorts", label: "Men's Denim Shorts" },
//     { src: "/upfront/shorts/female1.jpg", alt: "Denim Shorts", label: "Women's Denim Shorts" },
//     { src: "/upfront/shorts/male2.jpg", alt: "Denim Shorts", label: "Men's Denim Shorts" },
//     { src: "/upfront/shorts/female2.jpg", alt: "Denim Shorts", label: "Women's Denim Shorts" },
//     { src: "/upfront/shorts/female3.jpg", alt: "Denim Shorts", label: "Women's Denim Shorts" },
//   ];

//   return (
//     <div>
//       <ShiftingRow images={shirts} interval={10000} />
//       <ShiftingRow images={jackets} interval={10000} />
//       <ShiftingRow images={jeans} interval={10000} />
//       <ShiftingRow images={shorts} interval={10000} />
//     </div>
//   );
// };

// export default ImageShowcase;

// import { useEffect, useState, useCallback } from "react";
// import { Link } from "react-router-dom";

// type ImageType = { src: string; alt: string; link?: string; label?: string };

// interface ShiftingRowProps {
//   images: ImageType[];
//   interval?: number;
// }

// const ShiftingRow = ({ images, interval = 3000 }: ShiftingRowProps) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [visibleCount, setVisibleCount] = useState(3);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   // Preload images
//   useEffect(() => {
//     images.forEach((img) => {
//       const preload = new Image();
//       preload.src = img.src;
//     });
//   }, [images]);

//   // Responsive visibleCount
//   useEffect(() => {
//     const updateVisibleCount = () => {
//       if (window.innerWidth < 640) setVisibleCount(1);
//       else if (window.innerWidth < 1024) setVisibleCount(2);
//       else setVisibleCount(3);
//     };
//     updateVisibleCount();
//     window.addEventListener("resize", updateVisibleCount);
//     return () => window.removeEventListener("resize", updateVisibleCount);
//   }, []);

//   // Function to go to next slide
//   const goToNext = useCallback(() => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   }, [images.length, isTransitioning]);

//   // Reset transitioning flag after animation
//   useEffect(() => {
//     if (!isTransitioning) return;
//     const timer = setTimeout(() => setIsTransitioning(false), 500); // Match transition duration
//     return () => clearTimeout(timer);
//   }, [isTransitioning]);

//   // Auto-advance
//   useEffect(() => {
//     if (isTransitioning) return;
//     const timer = setInterval(goToNext, interval);
//     return () => clearInterval(timer);
//   }, [interval, isTransitioning, goToNext]);

//   // Calculate translateX value based on currentIndex
//   const translateX = `translateX(-${currentIndex * (100 / visibleCount)}%)`;

//   // Ensure we have enough images for seamless loop
//   const carouselImages = [...images, ...images.slice(0, visibleCount)];

//   return (
//     <div className="flex w-full overflow-hidden h-[500px] sm:h-[600px] lg:h-[800px]">
//       <div
//         className="flex w-full h-full transition-transform duration-500 ease-in-out"
//         style={{ transform: translateX }}
//       >
//         {carouselImages.map((img, index) => (
//           <div
//             key={`${img.src}-${index}`}
//             className="flex-shrink-0 w-full h-full"
//             style={{ width: `${100 / visibleCount}%` }}
//           >
//             <Link
//               to={img.link || "/products"}
//               className="h-full w-full block relative group"
//             >
//               <img
//                 src={img.src}
//                 alt={img.alt}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center pb-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <span className="text-white text-2xl font-bold">
//                   {img.label || img.alt}
//                 </span>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Keep your existing ImageShowcase component as is
// const ImageShowcase = () => {
//   const shirts = [
//     { src: "/upfront/croptop/1.jpg", alt: "Denim Shirt", label: "Crop Top Shirt" },
//     { src: "/upfront/croptop/2.jpg", alt: "Denim Shirt", label: "Crop Top Shirt" },
//     { src: "/upfront/croptop/3.jpg", alt: "Denim Shirt", label: "Crop Top Shirt" },
//     { src: "/upfront/croptop/4.jpg", alt: "Denim Shirt", label: "Crop Top Shirt" },
//     { src: "/upfront/croptop/5.jpg", alt: "Denim Shirt", label: "Crop Top Shirt" },
//     { src: "/upfront/croptop/6.jpg", alt: "Denim Shirt", label: "Crop Top Shirt" },
//     { src: "/upfront/croptop/7.jpg", alt: "Denim Shirt", label: "Crop Top Shirt" },
//   ];

//   const jackets = [
//     { src: "/upfront/jackets/2.jpg", alt: "Denim Jacket", label: "Classic Jacket" },
//     { src: "/upfront/jackets/9.jpg", alt: "Denim Jacket", label: "Oversized Jacket" },
//     { src: "/upfront/jackets/13.jpg", alt: "Denim Jacket", label: "Trucker Jacket" },
//     { src: "/upfront/jackets/3.jpg", alt: "Denim Jacket", label: "Slim Fit Jacket" },
//     { src: "/upfront/jackets/4.jpg", alt: "Denim Jacket", label: "Vintage Jacket" },
//     { src: "/upfront/jackets/7.jpg", alt: "Denim Jacket", label: "Modern Jacket" },
//   ];

//   const jeans = [
//     { src: "/upfront/jeans/baggy1.jpg", alt: "Denim Jeans", label: "Baggy Jeans" },
//     { src: "/upfront/jeans/baggy2.jpg", alt: "Denim Jeans", label: "Baggy Jeans" },
//     { src: "/upfront/jeans/man3.jpg", alt: "Denim Jeans", label: "Straight Jeans Men" },
//     { src: "/upfront/jeans/bootcut1.jpg", alt: "Denim Jeans", label: "Bootcut Jeans" },
//     { src: "/upfront/jeans/bootcut3.jpg", alt: "Denim Jeans", label: "Bootcut Jeans" },
//     { src: "/upfront/jeans/straight3.jpg", alt: "Denim Jeans", label: "Straight Jeans Women" },
//   ];

//   const shorts = [
//     { src: "/upfront/shorts/male1.jpg", alt: "Denim Shorts", label: "Men's Denim Shorts" },
//     { src: "/upfront/shorts/female1.jpg", alt: "Denim Shorts", label: "Women's Denim Shorts" },
//     { src: "/upfront/shorts/male2.jpg", alt: "Denim Shorts", label: "Men's Denim Shorts" },
//     { src: "/upfront/shorts/female2.jpg", alt: "Denim Shorts", label: "Women's Denim Shorts" },
//     { src: "/upfront/shorts/female3.jpg", alt: "Denim Shorts", label: "Women's Denim Shorts" },
//   ];
//   return (
//     <div>
//       <ShiftingRow images={shirts} interval={10000} />
//       <ShiftingRow images={jackets} interval={10000} />
//       <ShiftingRow images={jeans} interval={10000} />
//       <ShiftingRow images={shorts} interval={10000} />
//     </div>
//   );
// };

// export default ImageShowcase;

import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";

type ImageType = { src: string; alt: string; link?: string; label?: string };

interface ShiftingRowProps {
  images: ImageType[];
  interval?: number;
}

const ShiftingRow = ({ images, interval = 3000 }: ShiftingRowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [visibleCount, setVisibleCount] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Preload images
  useEffect(() => {
    images.forEach((img) => {
      const preload = new Image();
      preload.src = img.src;
    });
  }, [images]);

  // Responsive visibleCount
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // Function to handle the next slide with bounce logic
  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    setCurrentIndex((prevIndex) => {
      // If we're at the end and going forward, reverse direction
      if (direction === 1 && prevIndex >= images.length - visibleCount) {
        setDirection(-1);
        return prevIndex - 1;
      }
      // If we're at the start and going backward, reverse direction
      else if (direction === -1 && prevIndex <= 0) {
        setDirection(1);
        return prevIndex + 1;
      }
      // Otherwise, continue in current direction
      else {
        return prevIndex + direction;
      }
    });
  }, [direction, images.length, visibleCount, isTransitioning]);

  // Reset transitioning flag after animation
  useEffect(() => {
    if (!isTransitioning) return;
    const timer = setTimeout(() => setIsTransitioning(false), 500);
    return () => clearTimeout(timer);
  }, [isTransitioning]);

  // Auto-advance
  useEffect(() => {
    if (isTransitioning) return;
    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer);
  }, [interval, isTransitioning, goToNext]);

  // Calculate translateX value based on currentIndex
  const translateX = `translateX(-${currentIndex * (100 / visibleCount)}%)`;

  return (
    <div className="flex w-full overflow-hidden h-[500px] sm:h-[600px] lg:h-[800px]">
      <div
        className="flex w-full h-full transition-transform duration-500 ease-in-out"
        style={{ transform: translateX }}
      >
        {images.map((img, index) => (
          <div
            key={`${img.src}-${index}`}
            className="flex-shrink-0 w-full h-full"
            style={{ width: `${100 / visibleCount}%` }}
          >
            <Link
              to={img.link || "/products"}
              className="h-full w-full block relative group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center pb-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-2xl font-bold">
                  {img.label || img.alt}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

// Keep your existing ImageShowcase component as is
const ImageShowcase = () => {
  const shirts = [
  { 
    src: "/upfront/croptop/1.jpg", 
    alt: "Denim Crop Top", 
    label: "Crop Top Shirt",
    link: "/products/apparel/classic-denim-crop-top/47"
  },
  { 
    src: "/upfront/croptop/2.jpg", 
    alt: "Denim Crop Top", 
    label: "Crop Top Shirt",
    link: "/products/apparel/classic-denim-crop-top/47" 
  },
  { 
    src: "/upfront/croptop/3.jpg", 
    alt: "Denim Crop Top", 
    label: "Crop Top Shirt",
    link: "/products/apparel/classic-denim-crop-top/47" 
  },
  { 
    src: "/upfront/croptop/4.jpg", 
    alt: "Designer Denim Crop Top", 
    label: "Designer Crop Top Shirt",
    link: "/products/apparel/designer-cropped-denim-shirt/48" 
  },
  { 
    src: "/upfront/croptop/5.jpg", 
    alt: "Designer Denim Crop Top", 
    label: "Designer Crop Top Shirt",
    link: "/products/apparel/designer-cropped-denim-shirt/48" 
  },
  { 
    src: "/upfront/croptop/6.jpg", 
    alt: "Denim Crop Top", 
    label: "Crop Top Shirt",
    link: "/products/apparel/classic-denim-crop-top/47" 
  },
  { 
    src: "/upfront/croptop/7.jpg", 
    alt: "Designer Denim Crop Top", 
    label: "Designer Crop Top Shirt",
    link: "/products/apparel/designer-cropped-denim-shirt/48" 
  },
];

const jackets = [
  { 
    src: "/upfront/jackets/2.jpg", 
    alt: "Classic Denim Jacket", 
    label: "Classic Jacket",
    link: "/products/apparel/classic-denim-jackets/5" 
  },
  { 
    src: "/upfront/jackets/9.jpg", 
    alt: "Oversized Denim Jacket", 
    label: "Oversized Jacket",
    link: "/products/apparel/oversized-denim-jackets/7" 
  },
  { 
    src: "/upfront/jackets/13.jpg", 
    alt: "Trucker Denim Jacket", 
    label: "Trucker Jacket",
    link: "/products/apparel/trucker-jackets/8" 
  },
  { 
    src: "/upfront/jackets/3.jpg", 
    alt: "Slim Fit Denim Jacket", 
    label: "Slim Fit Jacket",
    link: "/products" 
  },
  { 
    src: "/upfront/jackets/4.jpg", 
    alt: "Vintage Denim Jacket", 
    label: "Vintage Jacket",
    link: "/products" 
  },
  { 
    src: "/upfront/jackets/7.jpg", 
    alt: "Modern Denim Jacket", 
    label: "Modern Jacket",
    link: "/products" 
  },
];

const jeans = [
  { 
    src: "/upfront/jeans/baggy1.jpg", 
    alt: "Baggy Denim Jeans", 
    label: "Baggy Jeans",
    link: "/products/apparel/classic-baggy-jeans/50" 
  },
  { 
    src: "/upfront/jeans/baggy2.jpg", 
    alt: "Baggy Denim Jeans", 
    label: "Baggy Jeans",
    link: "/products/apparel/classic-baggy-jeans/50" 
  },
  { 
    src: "/upfront/jeans/man3.jpg", 
    alt: "Men's Straight Leg Jeans", 
    label: "Straight Jeans Men",
    link: "/products/apparel/straight-leg-jeans/2" 
  },
  { 
    src: "/upfront/jeans/bootcut1.jpg", 
    alt: "Bootcut Denim Jeans", 
    label: "Bootcut Jeans",
    link: "/products/apparel/bootcut-jeans/3" 
  },
  { 
    src: "/upfront/jeans/bootcut3.jpg", 
    alt: "Bootcut Denim Jeans", 
    label: "Bootcut Jeans",
    link: "/products/apparel/bootcut-jeans/3" 
  },
  { 
    src: "/upfront/jeans/straight3.jpg", 
    alt: "Women's Straight Leg Jeans", 
    label: "Straight Jeans Women",
    link: "/products/apparel/straight-leg-jeans/2" 
  },
];

const shorts = [
  { 
    src: "/upfront/shorts/male1.jpg", 
    alt: "Men's Denim Shorts", 
    label: "Men's Denim Shorts",
    link: "/products/apparel/cargo-shorts/21" 
  },
  { 
    src: "/upfront/shorts/female1.jpg", 
    alt: "Women's Denim Shorts", 
    label: "Women's Denim Shorts",
    link: "/products/apparel/high-waisted-shorts/23" 
  },
  { 
    src: "/upfront/shorts/male2.jpg", 
    alt: "Men's Denim Shorts", 
    label: "Men's Denim Shorts",
    link: "/products/apparel/cargo-shorts/21" 
  },
  { 
    src: "/upfront/shorts/female2.jpg", 
    alt: "Women's Denim Shorts", 
    label: "Women's Denim Shorts",
    link: "/products/apparel/bermuda-shorts/20" 
  },
  { 
    src: "/upfront/shorts/female3.jpg", 
    alt: "Women's Denim Shorts", 
    label: "Women's Denim Shorts",
    link: "/products/apparel/cut-off-shorts/22" 
  },
];

  return (
    <div>
      <ShiftingRow images={shirts} interval={5000} />
      <ShiftingRow images={jackets} interval={6000} />
      <ShiftingRow images={jeans} interval={5000} />
      <ShiftingRow images={shorts} interval={6000} />
    </div>
  );
};

export default ImageShowcase;