import Image from "next/image";

const Catalog = ({ catalog }) => {
  const {
    name,
    url,
    image: { data },
  } = catalog;

  console.log("image--", data[0].attributes.url);

  return (
    <a href={url} className="block">
      <div className="m-2">
        <Image src={data[0].attributes.url} alt={name} width={400} height={300} />
        <h3 className="m-auto bg-black p-2 text-white font-roboto text-2xl text-center">
          {name}
        </h3>
      </div>
    </a>
  );
};

export default Catalog;
