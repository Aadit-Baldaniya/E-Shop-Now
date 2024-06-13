import Category from "../category/Category";
import HeroSection from "../heroSection/HeroSection";
import HomePageProductCard from "../homePageProductcard/HomePageProductCard";
import Layout from "../layout/Layout";
import Testimonial from "../testimoniel/Testimonial";
import Track from "../track/Track";

function Home() {
  return (
    <Layout>
      <HeroSection />
      <Category />
      <HomePageProductCard />
      <Track />
      <Testimonial />
    </Layout>
  );
}

export default Home;
