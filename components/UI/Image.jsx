const Image = ({ src }) => {
  return (
    <img
      alt="Les Paul"
      src={src}
      className="aspect-square w-full rounded-xl object-cover"
    />
  );
};

export default Image;
