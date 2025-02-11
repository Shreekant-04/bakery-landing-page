/* eslint-disable react/prop-types */
import bg from "../../assets/background.png";
import product1 from "../../assets/products/1.png";
import product2 from "../../assets/products/2.png";
import product3 from "../../assets/products/3.png";
import product4 from "../../assets/products/4.png";
import product5 from "../../assets/products/5.png";
import product6 from "../../assets/products/6.png";
import H2 from "../common/H2";
import Image from "../common/Image";

export const Section2 = () => {
  const products = [
    { img: product1, name: "Whole Grain Bread", price: "$4.99" },
    { img: product2, name: "White Bread", price: "$3.99" },
    { img: product3, name: "Croissant", price: "$2.99" },
    { img: product4, name: "Baguette", price: "$3.49" },
    { img: product5, name: "Cinnamon Roll", price: "$2.49" },
    { img: product6, name: "Danish Pastry", price: "$2.99" },
  ];
  return (
    <section className="bg-white w-full  flex flex-col justify-start items-center gap-6 sm:gap-12 px-4 sm:px-8 md:px-12  py-8 sm:py-12">
      <H2>Top Products</H2>
      <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

const Card = ({ product }) => {
  return (
    <div
      className="w-full max-w-[300px] rounded-xl flex flex-col items-center relative bg-cover bg-center p-4 col-span-1 "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full  flex justify-center items-center  h-[65vmin] sm:h-[50vmin] md:h-[25vmin] lg:h-[40vmin]">
        <Image
          src={product.img}
          alt={product.name}
          className="w-4/5 h-auto object-contain transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="text-white text-center mt-auto">
        <p className="text-xl font-semibold">{product.price}</p>
        <p className="text-lg">{product.name}</p>
      </div>
    </div>
  );
};
