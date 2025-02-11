/* eslint-disable react/prop-types */
import H2 from "../common/H2";
import Image from "../common/Image";

export const Product = ({ items, title }) => {
  return (
    <section className="w-full flex flex-col  justify- items-center px-4 py-2 sm:py-8 gap-4">
      <H2
        className={"text-4xl sm:text-5xl font-Sansita font-semibold underline"}
      >
        {title}
      </H2>
      <div className="lg:w-4/5 mt-4 lg:h-4/5 grid grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center px-8   py-2 ">
        {items.map((item, i) => (
          <div key={i}>
            <Image
              key={i}
              src={item.img}
              alt={i}
              className="w-full   object-contain transition-transform duration-300 hover:scale-105 cursor-pointer col-span-1 justify-self-center"
            />
            {item.text && (
              <p className="py-2 px-4 font-semibold flex  justify-between font-Inter">
                <span>{item?.text?.name}</span>
                <span>{item?.text?.price}</span>
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
