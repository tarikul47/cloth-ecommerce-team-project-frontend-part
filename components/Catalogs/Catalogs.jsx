import Catalog from "./Catalog";
import Error from "../Error";

const Catalogs = ({ catalogs }) => {
  const {
    data: catalogsData,
    catalogsIsLoading,
    catalogsIsError,
    catalogsError,
  } = catalogs;

  // // decide what to render
  let contentCatalogs = null;
  if (catalogsIsLoading) contentCatalogs = <h3>isLoading</h3>;

  if (!catalogsIsLoading && catalogsIsError) {
    contentCatalogs = <Error status={catalogsError.status} />;
  }

  if (
    !catalogsIsLoading &&
    !catalogsIsError &&
    Object.keys(catalogsData).length < 0
  ) {
    contentCatalogs = <div className="col-span-12">No catalogs found!</div>;
  }

  if (!catalogsIsLoading && !catalogsIsError) {
    contentCatalogs = catalogsData.data?.map((catalog) => (
      <Catalog key={catalog.id} catalog={catalog.attributes} />
    ));
  }

  return (
    <section className="container max-w-screen-xl my-10">
      {catalogsError ? (
        contentCatalogs
      ) : (
        <div className="flex flex-wrap gap-2">
          <div className="flex md:flex-row sm: flex-col">{contentCatalogs}</div>
        </div>
      )}
    </section>
  );
};

export default Catalogs;
