// import React from 'react'
// import style from './Scroll.module.css'
// export default function Scroll() {
//     return (
//         <>
//         </>
        
//     )
// }

// src/components/ScrollToTopButton.js

import React, { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <div className="fixed bottom-4 left-4">
        <button
          onClick={scrollToTop}
          className="bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
        >
        <i className=' fas fa-2x fa-arrow-alt-circle-up '></i>
        </button>
      </div>
    )
  );
};

export default ScrollToTopButton;
