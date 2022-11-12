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
import { convert } from "../utils/helper";
import { getCategoryList } from "../features/categories/categories";

export default function Home({ catalogs, categories }) {
  // const {
  //   data: catalogsData,
  //   catalogsIsLoading,
  //   catalogsIsError,
  //   catalogsError,
  // } = catalogs;
  // // catalogs collection
  // //const { data } = useGetCatalogsQuery();
  // console.log("props", catalogs);

  //console.log("catalogs", Object.keys(catalogs).length > 0);
  //console.log("isLoading", isLoading);
  //console.log("isError", isError);
  //console.log("error", error);
  //console.log("catalogs", catalogs);
  // console.log("products", products);

  // if (!isLoading && !isError && catalogs?.length < 0) {
  //   contentCatalogs = <Catalogs catalogs={catalogs} />;
  // }

  // if (!catalogsIsLoading && !catalogsIsError) {
  //   contentCatalogs = <Catalogs catalogs={catalogsData} />;
  // }

  // console.log("contentCatalogs", contentCatalogs);
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
      <Catalogs catalogs={catalogs} />
      <Messages />
      <Promotionals promotionals={promotionals} />
      <CatagoryDisplays
        data="Men Catalog"
        title="Shop our range for him"
        categories={categories}
      />
      <CatagoryDisplays
        data="Women Catalog"
        title="Shop our range for her"
        categories={categories}
      />
    </Layout>
  );
}

// catalogs collection on server side
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (contex) => {
    // Dispatch catalogs
    const {
      data: catalogs,
      isLoading: catalogsIsLoading,
      isError: catalogsIsError,
      error: catalogsError,
    } = await store.dispatch(getCatalogs.initiate());
    // Dispatch products
    const {
      data: categories,
      isLoading: categoryIsLoading,
      isError: categoryIsError,
      error: categoryError,
    } = await store.dispatch(getCategoryList.initiate());
    console.log("server product data - ", categories);
    //await Promise.all(getRunningOperationPromise());

    return {
      props: {
        catalogs: {
          data: convert(catalogs),
          catalogsIsLoading,
          catalogsIsError,
          error: convert(catalogsError),
        },
        categories: {
          data: convert(categories),
          categoryIsLoading,
          categoryIsError,
          categoryError: convert(categoryError),
        },
      },
    };
  }
);
