const CatagoryDisplay = ({ name, image, url }) => {
  return (
    <div className="">
      <a href={url} className="block">
        <img
          alt={name}
          src={image}
          className="aspect-square w-full rounded object-cover"
        />
        <h3 className="font-medium mt-2 font-roboto">{name}</h3>
      </a>
    </div>
  );
};

export default CatagoryDisplay;
