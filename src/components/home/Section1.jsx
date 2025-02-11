import heroImg from "../../assets/heroImg.png";

export const Section1 = () => {
  return (
    <section className="h-[40vh] lg:h-screen w-full bg-cover bg-center relative flex justify-start items-center">
      <img
        src={heroImg}
        alt="heroImg"
        className="absolute top-0 left-0 h-full w-full object-fill"
      />
      <div className="z-30 text-white px-4 sm:px-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-1/2 flex flex-col">
        <div>
          <p className="text-[#E9BD8C] text-lg sm:text-xl md:text-2xl font-Inter">
            Delicious Cafe
          </p>
          <h1 className="font-Sansita text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-2/3 md:w-3/4 lg:w-2/3 ">
            Sweet Treats, Perfect Eats
          </h1>
        </div>

        <div className="mt-4 md:mt-10 mb-6 sm:mb-10 font-semibold font-Inter flex  sm:flex-row gap-4">
          <button className="px-2 sm:px-8 py-2 sm:py-4 rounded-lg border border-[#933C24] bg-[#933C24] text-xs sm:text-base">
            Shop Now
          </button>
          <button className="px-2 sm:px-8 py-2 sm:py-4 rounded-lg border  text-xs sm:text-base">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};
