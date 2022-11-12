import Image from "next/image";

const CatagoryDisplay = ({ category }) => {
  const {
    name,
    url,
    image: { data },
  } = category;
  return (
    <div className="">
      <a href={url} className="block">
      <Image src={data[0].attributes.url} alt={name} width={400} height={300} />
        <h3 className="font-medium mt-2 font-roboto">{name}</h3>
      </a>
    </div>
  );
};

export default CatagoryDisplay;
