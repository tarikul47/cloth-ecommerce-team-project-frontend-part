import Error from "../Error";
import SectionTitle from "../SectionTitle";
import CatagoryDisplay from "./CatagoryDisplay";

const CatagoryDisplays = (props) => {
  const { attr, title, categories } = props;

  // const {
  //   data: catalogsData,
  //   catalogsIsLoading,
  //   catalogsIsError,
  //   catalogsError,
  // } = catalogs;

  //console.log("props--", categories);

  const {
    data: categoriesData,
    categoryIsLoading,
    categoryIsError,
    categoryError,
  } = categories;

  //console.log("categoriesData--", categoryError.status);

  // // decide what to render
  let contentCategories = null;
  // if (categoryIsLoading) contentCategories = <h3>isLoading</h3>;

  if (!categoryIsLoading && categoryIsError) {
    contentCategories = <Error status={categoryError.status} />;
  }

  // if (
  //   !categoryIsLoading &&
  //   !categoryIsError &&
  //   Object.keys(categoriesData).length < 0
  // ) {
  //   contentCategories = <div className="col-span-12">No catalogs found!</div>;
  // }

  if (!categoryIsLoading && !categoryIsError) {
    contentCategories = categoriesData.data?.map((category) => (
      <CatagoryDisplay key={category.id} category={category.attributes} />
    ));
  }

  return (
    <section>
      <div className="container max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionTitle title={title} />
        {categoryError ? (
          contentCategories
        ) : (
          <div className="grid sm:grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:items-stretch">
            {contentCategories}
          </div>
        )}
      </div>
    </section>
  );
};

export default CatagoryDisplays;
