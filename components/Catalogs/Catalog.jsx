const Catalog = ({ name, url, image }) => {
  return (
    <a href={url} class="block">
      <div class="m-2">
        <img src={image} alt={name} />
        <h3 class="m-auto bg-black p-2 text-white font-roboto text-2xl text-center">
          {name}
        </h3>
      </div>
    </a>
  );
};

export default Catalog;
