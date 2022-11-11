import Layout from "../components/Layout";
import Catalogs from "../components/Catalogs/Catalogs";
import Messages from "../components/Messages/Messages";
import Promotionals from "../components/Promotionals/Promotionals";
import CatagoryDisplays from "../components/CatagoryDisplays/CatagoryDisplays";
import {
  getCatalogs,
  useGetCatalogsQuery,
} from "../features/catalogs/catalogs";
import { wrapper } from "../app/store";
import { convert, prepareForSerializatoin } from "../utils/helper";
import Error from "../components/Error";
import { getProductList } from "../features/categories/categories";

export default function Home({ data: catalogs, isLoading, isError, error }) {
  // catalogs collection
  //const { data } = useGetCatalogsQuery();
  //console.log("props", catalogs, isLoading, isError, error);

  //console.log("catalogs", Object.keys(catalogs).length > 0);
  console.log("isLoading", isLoading);
  console.log("isError", isError);
  console.log("error", error);

  // decide what to render
  let contentCatalogs = null;
  if (isLoading) contentCatalogs = <h3>isLoading</h3>;

  if (!isLoading && isError) {
    contentCatalogs = <Error status={error.status} />;
  }

  if (!isLoading && !isError && Object.keys(catalogs).length < 0) {
    contentCatalogs = <div className="col-span-12">No catalogs found!</div>;
  }

  // if (!isLoading && !isError && catalogs?.length < 0) {
  //   contentCatalogs = <Catalogs catalogs={catalogs} />;
  // }

  if (!isLoading && !isError) {
    contentCatalogs = <Catalogs catalogs={catalogs} />;
  }

  console.log("contentCatalogs", contentCatalogs);
  const promotionals = [
    {
      name: " Grab the season",
      image:
        "https://img.freepik.com/free-vector/new-season-banner-template_1361-1221.jpg?w=1380&t=st=1666707534~exp=1666708134~hmac=8a782c27ae276b993b4b485f6875cccc5eb38a367fb515a30c56ed7e9e2ee3db",
    },
    {
      name: "Hurry up!",
      image:
        "https://img.freepik.com/free-vector/floral-new-collection-banner-template_1361-1251.jpg?w=1380&t=st=1666707552~exp=1666708152~hmac=3b9880a173b03847238077d13d21e45e370f836670fdf83de2e8ecb0680f1b6a",
    },
  ];
  return (
    <Layout>
      {contentCatalogs}
      <Messages />
      <Promotionals promotionals={promotionals} />
      <CatagoryDisplays data="Men Catalog" title="Shop our range for him" />
      <CatagoryDisplays data="Women Catalog" title="Shop our range for her" />
    </Layout>
  );
}

// catalogs collection on server side
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (contex) => {
    // Dispatch catalogs
    const {
      data: catalogs,
      isError: catalogsIsError,
      isLoading: catalogsIsLoading,
      error: catalogsError,
    } = await store.dispatch(getCatalogs.initiate());
    // Dispatch products
    const {
      data: products,
      isError: productIsError,
      isLoading: productIsLoading,
      error: productError,
    } = await store.dispatch(getProductList.initiate());
    console.log("server product data - ", products);
    //await Promise.all(getRunningOperationPromise());

    return {
      props: {
        data: convert(catalogs),
        catalogsIsLoading,
        catalogsIsError,
        error: convert(catalogsError),
      },
    };
  }
);
