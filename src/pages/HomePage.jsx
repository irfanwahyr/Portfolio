import Navbar from "../component/layout/Navbar";
import Hero from "../component/layout/Hero";
import About from "../component/layout/About";
import Experience from "../component/layout/Experience";
import Portfolio from "../component/layout/Portfolio";
import Contact from "../component/layout/Contact";
import Footer from "../component/layout/Footer";
import "../assets/css/index.css";

const HomePage = () => {
    return (
        <div className="bg-second-bg-color h-screen top-0 left-0">
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    )
}

export default HomePage;