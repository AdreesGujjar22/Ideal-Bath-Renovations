import { useParams, Navigate } from "react-router-dom";
import SEOContentPage from "../components/SEOContentPage";
import { seoPages } from "../data/SEOPageContent";

const ServiceAreaDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug || !seoPages[slug]) return <Navigate to="/service-areas" replace />;
  return <SEOContentPage content={seoPages[slug]} canonical={`https://idealbathrenovations.ca/service-areas/${slug}`} />;
};
export default ServiceAreaDetail;
