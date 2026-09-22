import SEOContentPage from "../components/SEOContentPage";
import { seoPages } from "../data/SEOPageContent";

const About: React.FC = () => <SEOContentPage content={seoPages.about} canonical="https://idealbathrenovations.ca/about" />;
export default About;
