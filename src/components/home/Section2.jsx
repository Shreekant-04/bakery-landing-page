import bg from "../../assets/background.png";
import product1 from "../../assets/products/1.png";
import product2 from "../../assets/products/2.png";
import product3 from "../../assets/products/3.png";
import product4 from "../../assets/products/4.png";
import product5 from "../../assets/products/5.png";
import product6 from "../../assets/products/6.png";

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
    <section className="bg-white  flex flex-col justify-start items-center gap-12 pt-16 sm:px-12 py-12">
      <h2 className="text-5xl font-Sansita font-semibold">Top Products</h2>
      <div className="  w-4/5 mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center px-8   py-2 ">
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
      className="rounded-lg flex flex-col items-center relative bg-cover bg-center  col-span-1 px-4 py-2 lg:py-6 text-white "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-64 h-48 rounded-lg  flex justify-center items-center ">
        <img
          src={product.img}
          alt={product.name}
          className="w-3/5 sm:w-4/5 lg:w-full h-full object-contain transition-transform duration-300 hover:scale-110 
"
        />
      </div>
      <p className="text-xl font-semibold mt-4 ">{product.price}</p>
      <p className="text-lg ">{product.name}</p>
    </div>
  );
};
