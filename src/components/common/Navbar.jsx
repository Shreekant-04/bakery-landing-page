import { useEffect, useState } from "react";
import menuIcon from "../../assets/icons/menu.png";
import closeIcon from "../../assets/icons/close.png";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={` fixed top-0 left-0 w-full h-[10vmin] font-Poppins flex items-center gap-8  z-[999] ${
        isScrolled ? " bg-[#ffffff33] backdrop-blur-sm text-black rounded-b-xl" : " text-white"
      } transition-all duration-200`}
    >
      <div className=" h-full w-max ml-8">
        <img
          src="favicon.png"
          alt="Logo"
          className="w-full h-full object-fit"
        />
      </div>

      <ul
        className={`flex  items-center text-lg gap-4 font-semibold   transition-all duration-300 ${
          screenSize < 450
            ? `fixed z-50 top-0 w-2/4 backdrop-blur-md bg-[#11111186]
  ${toggle ? "right-0" : "-right-[60%]"} h-[100vh] flex-col justify-start pt-16`
            : `w-3/4 justify-center`
        }`}
      >
        <div
          className={`h-[8vmin]  ml-auto cursor-pointer ${
            screenSize > 450 ? "hidden" : "block"
          } absolute top-2 left-2  `}
          onClick={() => settoggle((prev) => !prev)}
        >
          <img src={closeIcon} alt="close" className="w-[8vmin] h-[8vmin] " />
        </div>
        <li className="text-[#E9BD8C] cursor-pointer ">Home</li>
        <li className="hover:text-[#E9BD8C] cursor-pointer">Blog</li>
        <li className="hover:text-[#E9BD8C] cursor-pointer">Contact Us</li>
        <li className="hover:text-[#E9BD8C] cursor-pointer">Services</li>
      </ul>
      <div
        className={`h-[8vmin]  ml-auto cursor-pointer ${
          screenSize > 450 ? "hidden" : "block"
        }`}
        onClick={() => settoggle((prev) => !prev)}
      >
        <img src={menuIcon} alt="menu" className="w-full h-full" />
      </div>
      {/* overlay for ham menu  */}
      {screenSize < 450 && toggle && (
        <div
          className="backdrop-blur-md fixed top-0 left-0 h-full w-full z-40"
          onClick={() => settoggle((prev) => !prev)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
