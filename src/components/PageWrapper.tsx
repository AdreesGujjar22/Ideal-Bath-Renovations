import type { FC, ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface PageWrapperProps {
  children: ReactNode;
  title?: string;
}

export const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  const location = useLocation();

  return (
    <>
      <div key={location.pathname} style={{ width: "100%", minHeight: "80vh" }}>
        {children}
      </div>
    </>
  );
};

export default PageWrapper;
