import Promotional from "./Promotional";

const Promotionals = ({ promotionals = [] }) => {
  return (
    <section className="container max-w-screen-xl my-10">
      <div className="flex flex-wrap gap-2">
        <div className="flex md:flex-row sm: flex-col">
          {promotionals.map((item, index) => (
            <Promotional key={index} name={item.name} image={item.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotionals;
