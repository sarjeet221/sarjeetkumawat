import React, { useEffect, useState } from 'react';
import { FaArrowUp } from "react-icons/fa";

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Cleanup the event listener
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-10 bg-green-600 text-white p-2 rounded-full shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default GoToTopButton;
