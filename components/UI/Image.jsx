const Image = ({ src }) => {
  return (
    <img
      alt="Les Paul"
      src={src}
      class="aspect-square w-full rounded-xl object-cover"
    />
  );
};

export default Image;
