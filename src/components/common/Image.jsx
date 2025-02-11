

const Image = ({ src, alt, className }) => {
  return <img src={src} alt={alt} loading="eager" className={className} />;
};

export default Image;
