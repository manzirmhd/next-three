import Image from "next/image";
import Navbar from "./navbar/page";
import HeroOne from "./components/HeroOne";
import SocialIcons from "./components/SocialIcons";
import HeroCard from "./components/HeroCard";
import ButtonComp from "./components/ButtonComp";
import Category from "./components/Category";
import CategoryCard from "./components/CategoryCard";
import AboutUs from "./components/AboutUs";
import ChooseCard from "./components/ChooseCard";
import Choose from "./components/Choose";
import FoodMenu from "./components/FoodMenu";
import FoodMenuCard from "./components/FoodMenuCard";
import Pizza from "./components/Pizza";
import ClientCard from "./components/ClientCard";
import Clients from "./components/Clients";
import BlogCard1 from "./components/BlogCard1";
import BlogCard2 from "./components/BlogCard2";
import Blog from "./components/Blog";
import Subscribe from "./components/Subscribe";
import LastCompCard from "./components/LastCompCard";
import LastComp from "./components/LastComp";
import Footer from "./components/Footer";
import Rating from "./components/Rating";

export default function Home() {
  return (
    <main >
      <Navbar/>
      <HeroOne/>
      <Category/>
      <AboutUs/>
      <Choose/>
      <FoodMenu/>
      <Pizza/>
      <Clients/>
      <Blog/>
      <Subscribe/>
      <LastComp/>
      <Footer/>
  </main>
  );
}

