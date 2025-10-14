// import { useState } from "react";
// import { X } from "lucide-react";

// const NewsletterPopup = () => {
//   const [showPopup, setShowPopup] = useState(true);
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     fetch("https://formsubmit.co/el/miyafe", {
//       method: "POST",
//       body: new FormData(form),
//     })
//       .then(() => setSubmitted(true))
//       .catch(() => alert("Something went wrong. Please try again later."));
//   };

//   if (!showPopup) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
//       <div className="bg-white p-6 rounded-2xl shadow-2xl w-[90%] max-w-sm text-center relative">
//         {/* Close button */}
//         <button
//           onClick={() => setShowPopup(false)}
//           className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
//         >
//           <X className="w-5 h-5" />
//         </button>

//         {!submitted ? (
//           <>
//             <h2 className="text-xl font-semibold text-gray-800 mb-2">
//               Become Part of Our Community
//             </h2>
//             <p className="text-gray-600 text-sm mb-4">
//               Receive our newsletters and catalogs directly in your inbox.
//             </p>

//             <form
//               onSubmit={handleSubmit}
//               className="flex flex-col gap-3"
//             >
//               <input
//                 type="email"
//                 name="email"
//                 required
//                 placeholder="Your Email Address"
//                 className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
//               />
//               <input type="hidden" name="_captcha" value="false" />
//               <button
//                 type="submit"
//                 className="bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition-all"
//               >
//                 Yes, Sign Me Up
//               </button>
//             </form>
//           </>
//         ) : (
//           <div className="py-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-2">
//               Thank You!
//             </h3>
//             <p className="text-gray-600 text-sm">
//               You’ve been added to our newsletter list.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NewsletterPopup;


import { useEffect, useState, useRef } from "react";
import { X, Mail } from "lucide-react";

const FloatingNewsletter = () => {
  const [visible, setVisible] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);


  // Show popup after 2 seconds
  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 2000);
    startAutoHideTimer(); // start the auto-hide timer
    return () => {
      clearTimeout(showTimer);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  const startAutoHideTimer = () => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => {
      if (!isTyping) {
        setVisible(false);
        setMinimized(true);
      }
    }, 9000);
  };

  const handleFocus = () => {
    setIsTyping(true);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
  };

  const handleBlur = () => {
    setIsTyping(false);
    startAutoHideTimer();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    fetch("https://formsubmit.co/0a1306e19e5e833fac6a7bd17a32b74a", {
      method: "POST",
      body: new FormData(form),
    })
      .then(() => setSubmitted(true))
      .catch(() => alert("Something went wrong. Please try again later."));

    setTimeout(() => {
      setVisible(false);
      setMinimized(true);
      setSubmitted(false);
    }, 2500);
  };

  const handleClose = () => {
    setVisible(false);
    setMinimized(true);
  };

  const handleReopen = () => {
    setMinimized(false);
    setVisible(true);
    startAutoHideTimer();
  };

  return (
    <>
      {/* Floating Popup */}
      {visible && (
        <div className="fixed bottom-6 right-6 bg-white shadow-xl border border-gray-200 rounded-2xl p-4 w-72 z-50 transition-all duration-500">
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
          >
            <X size={16} />
          </button>

          {!submitted ? (
            <>
              <h3 className="text-sm font-semibold text-gray-800 mb-1">
                Become Part of Our Community
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                Get our newsletters and catalogs.
              </p>

              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email address"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="flex-1 border border-gray-300 rounded-lg px-2 py-1 text-xs focus:ring-1 focus:ring-blue-400 outline-none"
                />
                <input type="hidden" name="_captcha" value="false" />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-3 py-1 rounded-lg text-xs hover:bg-blue-700 transition-all"
                >
                  Join
                </button>
              </form>
            </>
          ) : (
            <p className="text-sm text-gray-700 py-2 text-center">
              ✅ Thank you!
            </p>
          )}
        </div>
      )}

      {/* Small Floating Dot */}
      {minimized && (
        <button
          onClick={handleReopen}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-40 transition-all duration-300"
        >
          <Mail size={18} />
        </button>
      )}
    </>
  );
};

export default FloatingNewsletter;
