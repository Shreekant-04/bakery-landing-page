import bg from "../../assets/background.png";
import social1 from "../../assets/icons/1.png";
import social2 from "../../assets/icons/2.png";
import social3 from "../../assets/icons/3.png";
import social4 from "../../assets/icons/4.png";
import Image from "./Image";

const Footer = () => {
  return (
    <section
      className="text-white font-inter py-4 px-4 md:px-8"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="px-4 md:px-8  flex flex-col md:flex-row gap-4 md:gap-0 p-4 justify-between items-center border-2 border-transparent border-b-[#E9BD8D]">
        <div className="w-[15vmin]">
          <Image src="favicon.png" alt="logo" className="w-full h-auto" />
        </div>
        <ul className="flex flex-wrap justify-center items-center gap-3 list-none">
          <li className="font-semibold">Follow Us</li>
          {[social1, social2, social3, social4].map((social, i) => (
            <li key={i + "124541"}>
              <img
                src={social}
                alt="logo"
                className="w-8 h-8 md:w-auto md:h-auto"
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-8 justify-items-center p-4">
        <div className="text-lg md:text-2xl">
          <h3 className="text-[#E9BD8D] text-2xl md:text-3xl font-semibold mb-4">
            About Us
          </h3>
          <p className="mb-2">(456) 789-12301</p>
          <p className="mb-2">info@modrino.co.uk</p>
          <p className="mb-2">South 13th street</p>
          <p className="mb-2">New york America</p>
        </div>
        <div>
          <h3 className="text-[#E9BD8D] text-2xl md:text-3xl font-semibold mb-4">
            Explore
          </h3>
          <ul className="text-lg md:text-2xl space-y-2">
            <li>Home</li>
            <li>Blog</li>
            <li>Contact us</li>
            <li>Services</li>
          </ul>
        </div>
      </div>
      <div className="text-[#737373] text-base md:text-xl text-center p-4 md:p-8">
        &copy; 2025 Bake House. All rights reserved
      </div>
    </section>
  );
};

export default Footer;
