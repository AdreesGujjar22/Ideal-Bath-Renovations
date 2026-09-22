import SEOContentPage from "../components/SEOContentPage";
import { seoPages } from "../data/SEOPageContent";

const Home: React.FC = () => <SEOContentPage content={seoPages.home} canonical="https://idealbathrenovations.ca/" />;
export default Home;
