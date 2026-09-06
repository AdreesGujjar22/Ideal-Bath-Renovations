import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import PageLoader from "./PageLoader";

interface PageWrapperProps {
  children: React.ReactNode;
  title?: string;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children, title }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // When route changes, show loader briefly to allow DOM, layout & assets to prepare,
    // then reveal the complete page smoothly.
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="page-loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            style={{ position: "relative", zIndex: 9999 }}
          >
            <PageLoader message={title ? `Loading ${title}...` : "Preparing bathroom showcase..."} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 12 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
        style={{ width: "100%", minHeight: "80vh" }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageWrapper;
