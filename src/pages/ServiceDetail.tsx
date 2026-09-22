import { useParams, Navigate } from "react-router-dom";
import SEOContentPage from "../components/SEOContentPage";
import { seoPages } from "../data/SEOPageContent";

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug || !seoPages[slug]) return <Navigate to="/services" replace />;
  return <SEOContentPage content={seoPages[slug]} canonical={`https://idealbathrenovations.ca/services/${slug}`} />;
};
export default ServiceDetail;
