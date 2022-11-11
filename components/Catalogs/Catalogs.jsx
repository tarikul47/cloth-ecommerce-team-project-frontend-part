import Catalog from "./Catalog";

const Catalogs = ({ catalogs: { data = [] } }) => {
  //console.log("catalogs", data);

  return (
    <section className="container max-w-screen-xl my-10">
      <div className="flex flex-wrap gap-2">
        <div className="flex md:flex-row sm: flex-col">
          {data?.map((catalog) => (
            <Catalog key={catalog.id} catalog={catalog.attributes} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalogs;
