import Contact from "../../Component/MainComponent/Contact";
import Feedback from "../../Component/MainComponent/Feedback/Feedback";
import RentableHome from "../../Component/MainComponent/RentableHome";
import Footer from "../../Component/SharedComponent/Footer";
import HeroSlider from "../../Component/SharedComponent/Slider";




const Home = () => {

  return (
    <div>
      <HeroSlider />
      <RentableHome />
      <Contact/>
      <Feedback/>
    </div>
  );
};

export default Home;
