import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedTextTypeInView = ({ text, delay, className }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the element's position relative to the viewport
      const elementRect = document.getElementById('animated-text-type').getBoundingClientRect();

      // Check if the element is at least 50% visible in the viewport
      if (elementRect.top < window.innerHeight / 2 && elementRect.bottom > 0) {
        setIsVisible(true);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Check if the element is already visible on mount
    handleScroll();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text, isVisible]);

  return (
    <motion.span
      id="animated-text-type"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className={className} // Use the provided className
    >
      {currentText}
    </motion.span>
  );
};

export default AnimatedTextTypeInView;
