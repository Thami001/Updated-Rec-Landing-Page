import Hero from "./sections/hero.tsx";
import ShowcaseSection from "./sections/showcaseSection.tsx";
import Navbar from "./components/navbar.tsx";
import LogoShowcase from "./sections/logoShowcase.tsx";
import Testimonials from "./sections/Testimonials.tsx";
import Contact from "./sections/contact.tsx";
import Footer from "./sections/footer.tsx";
import FAQ from "./sections/FAQ.tsx";
import FeatureCards from "./sections/featureCards.tsx";


const App = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <ShowcaseSection/>
            <FeatureCards/>
            <LogoShowcase/>
            <Testimonials/>
            <FAQ/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default App;