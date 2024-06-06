import Hero from "./Hero";
import Homeimg from "../assets/homeblood.jpeg";
import Destination from "./Destination";
import Card from "./card";
import Footer from "./Footer";

function Homemain() {
    return(
        <>
        <Hero 
        cName="hero"
        heroImg={Homeimg}
        title="Be Grateful and Donate Blood"
        text="Your Blood, Their Lifeline" 
        />
        <Destination />
        <Card/>
        <Footer />
        </>
    );
}
export default Homemain;