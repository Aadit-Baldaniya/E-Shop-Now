import { useContext } from "react";
import Category from "../category/Category";
import HeroSection from "../heroSection/HeroSection";
import HomePageProductCard from "../homePageProductcard/HomePageProductCard";
import Layout from "../layout/Layout";
import Testimonial from "../testimoniel/Testimonial";
import Track from "../track/Track";
import Mycontaxt from "../../contaxt/Mycontaxt";

function Home() {
  const value = useContext(Mycontaxt);
  const name = value;
  return (
    <Layout>
      <h1>{name}</h1>
      <HeroSection />
      <Category />
      <HomePageProductCard />
      <Track />
      <Testimonial />
    </Layout>
  );
}

export default Home;
