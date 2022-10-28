import Catalog from "./Catalog";

const Catalogs = () => {
  return (
    <section className="container max-w-screen-xl my-10">
      <div className="flex flex-wrap gap-2">
        <div className="flex md:flex-row sm: flex-col">
          <Catalog
            name="Men"
            url="/catalogs/men"
            image="https://images.unsplash.com/photo-1507680434567-5739c80be1ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          />
          <Catalog
            name="Women"
            url="#"
            image="https://images.unsplash.com/photo-1549575810-b9b7abc51d9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          />
          <Catalog
            name="Kids"
            url="#"
            image="https://images.unsplash.com/photo-1627859774205-83c1279a6382?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
          />
        </div>
      </div>
    </section>
  );
};

export default Catalogs;
