"use client";
// ScrollToTop.js
import { motion } from "framer-motion";
import { Button } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button when scrolled down, hide it when at the top
      setIsVisible(window.scrollY > 200);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTop = () => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.9 }}
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "1rem",
        zIndex: "1000",
      }}
    >
      <Button
        onClick={handleScrollTop}
        colorScheme="red"
        size="lg"
        display={isVisible ? "block" : "none"}
      >
        <FaArrowUp />
      </Button>
    </motion.div>
  );
};

export default ScrollToTop;
