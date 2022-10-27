const CatagoryDisplay = ({ name, image, url }) => {
  return (
    <div class="">
      <a href={url} class="block">
        <img
          alt={name}
          src={image}
          class="aspect-square w-full rounded object-cover"
        />
        <h3 class="font-medium mt-2 font-roboto">{name}</h3>
      </a>
    </div>
  );
};

export default CatagoryDisplay;
