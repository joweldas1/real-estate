import Contact from "../../Component/MainComponent/Contact";
import RentableHome from "../../Component/MainComponent/RentableHome";
import Footer from "../../Component/SharedComponent/Footer";
import HeroSlider from "../../Component/SharedComponent/Slider";




const Home = () => {

  return (
    <div>
      <HeroSlider />
      <RentableHome />
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;
