import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Banner } from "./Banner";
import { Product } from "./Product";
import offerImg from "../../assets/offerImg.png";
import aboutImg from "../../assets/aboutImg.png";
import exploreImg1 from "../../assets/explore/1.png";
import exploreImg2 from "../../assets/explore/2.png";
import exploreImg3 from "../../assets/explore/3.png";
import exploreImg4 from "../../assets/explore/4.png";
import exploreImg5 from "../../assets/explore/5.png";
import exploreImg6 from "../../assets/explore/6.png";
import featuredImg1 from "../../assets/featured/1.png";
import featuredImg2 from "../../assets/featured/2.png";
import featuredImg3 from "../../assets/featured/3.png";

const Home = () => {
  // Home component renders five sections including offers and about us information
  return (
    <>
      <Section1 />
      <Section2 />
      <Banner
        img={offerImg}
        titleColor={"[#933C24]"}
        textColor={"[#3a3838]"}
        title={"20% Off  Your First Order"}
        desc={
          "Sign up today and enjoy exclusive savings on our delicious baked goods!"
        }
      />
      <Product
        title={"Explore More"}
        items={[
          { img: exploreImg1 },
          { img: exploreImg2 },
          { img: exploreImg3 },
          { img: exploreImg4 },
          { img: exploreImg5 },
          { img: exploreImg6 },
        ]}
      />
      <Banner
        img={aboutImg}
        title={"About us"}
        desc={" where passion meets perfection in every bite. Since 2010. "}
      >
        <button className="px-2 sm:px-8 py-2 sm:py-4 rounded-lg border font-semibold text-white border-[#933C24] bg-[#933C24] text-xs sm:text-base">
          Read More
        </button>
      </Banner>
      <Product
        title={"Featured Treats"}
        items={[
          { img: featuredImg1, text: { name: "Puff Pastry ", price: "$8" } },
          { img: featuredImg2, text: { name: "Doughnuts", price: "$8" } },
          { img: featuredImg3, text: { name: "Brownies", price: "$5" } },
        ]}
      />
    </>
  );
};

export default Home;
