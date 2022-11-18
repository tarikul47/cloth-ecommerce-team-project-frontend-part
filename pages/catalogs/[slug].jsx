import React from "react";
import { wrapper } from "../../app/store";
import CatagoryDisplays from "../../components/CatagoryDisplays/CatagoryDisplays";
import Layout from "../../components/Layout";
import Promotionals from "../../components/Promotionals/Promotionals";
import { getCategoryList } from "../../features/category/category";
import { convert } from "../../utils/helper";

const CatalogSlug = ({ categories }) => {
  // catalogs collection

  const promotionals = [
    {
      name: " Grab the season",
      image:
        "https://img.freepik.com/free-psd/editable-turtleneck-t-shirt-mockup-psd-men-rsquo-s-casual-business-fashion-ad_53876-138385.jpg?w=1380&t=st=1666795321~exp=1666795921~hmac=152e335952b6fb5a33aeb55a33585433ef2dbb769d1e0b2325a43234bdf32205",
    },
    {
      name: "Hurry up!",
      image:
        "https://img.freepik.com/free-psd/editable-men-s-t-shirt-psd-mockup-black-gray-activewear-ad_53876-123296.jpg?w=1380&t=st=1666795196~exp=1666795796~hmac=a28eb393f03e451a13b75bb62804c15ca7c90f7862f8b991d8fdaa271534a46f",
    },
  ];
  return (
    <Layout>
      <Promotionals promotionals={promotionals} />
      <CatagoryDisplays
        attr="Men Catalog"
        title="Men's catagories"
        categories={categories}
      />
      <CatagoryDisplays
        attr="Men Catalog"
        title="Featured Products"
        categories={categories}
      />
      <CatagoryDisplays
        attr="Men Catalog"
        title="New Arival"
        categories={categories}
      />
    </Layout>
  );
};

export default CatalogSlug;

// catalogs collection on server side
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (contex) => {
    // Dispatch catalogs
    const {
      data: categories,
      isLoading: categoryIsLoading,
      isError: categoryIsError,
      error: categoryError,
    } = await store.dispatch(getCategoryList.initiate());

    console.log("categories data on server - ", categories);
    //await Promise.all(getRunningOperationPromise());

    return {
      props: {
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
