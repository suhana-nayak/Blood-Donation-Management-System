import Hero from "./Hero";
import AboutImg from "../assets/aboutusimg.jpeg"
import Footer from "./Footer";
import AboutUs from "./AboutUs";

function About() {
    return(
        <>
        <Hero 
        cName="hero-mid"
        heroImg={AboutImg}
        />
        <AboutUs/>
        <Footer/>

        </>
    );
}
export default About;