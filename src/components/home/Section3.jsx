import offerImg from "../../assets/offerImg.png";

export const Section3 = () => {
  return (
    <section className="bg-white  h-[300px] md:h-[50vh] lg:h-[60vh] w-full relative overflow-hidden flex justify-center items-center ">
      <div className="w-full h-full absolute top-0 left-0 py-8">
        <img
          src={offerImg}
          alt="offer"
          className="w-full h-full object-cover object-center transition-transform duration-300 "
        />
      </div>
      <div className="z-20 w-full lg:w-1/2  flex flex-col justify-center items-center gap-2 text-center">
        <h2 className="text-3xl sm:text-5xl font-Sansita w-1/2  text-[#933C24] font-medium">
          20% Off Your First Order
        </h2>
        <p className="text-[#3a3838] w-4/5 sm:w-1/2 sm:text-lg font-normal font-Inter ">
          Sign up today and enjoy exclusive savings on our delicious baked
          goods!
        </p>
      </div>
    </section>
  );
};
