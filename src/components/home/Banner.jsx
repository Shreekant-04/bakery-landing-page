/* eslint-disable react/prop-types */
export const Banner = ({
  img,
  title,
  desc,
  titleColor = "white",
  textColor = "white",
  children,
}) => {
  return (
    <section
      className="bg-white  h-[300px] md:h-[50vh] lg:h-[60vh] w-full relative overflow-hidden flex justify-center items-center "
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="z-20 w-full lg:w-1/2  flex flex-col justify-center items-center gap-2 text-center">
        <h2
          className={`text-3xl sm:text-5xl font-Sansita w-1/2  text-${titleColor} font-medium`}
        >
          {title}
        </h2>
        <p
          className={`text-${textColor} w-4/5 sm:w-1/2 sm:text-lg font-normal font-Inter `}
        >
          {desc}
        </p>
        {children}
      </div>
    </section>
  );
};
