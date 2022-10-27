import Layout from "../components/Layout";
import Catalogs from "../components/Catalogs/Catalogs";
import Messages from "../components/Messages/Messages";
import Promotionals from "../components/Promotionals/Promotionals";
import CatagoryDisplays from "../components/CatagoryDisplays/CatagoryDisplays";

export default function Home() {
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
      <Catalogs />
      <Messages />
      <Promotionals promotionals={promotionals} />
      <CatagoryDisplays data="Men Catalog" title="Shop our range for him" />
      <CatagoryDisplays data="Women Catalog" title="Shop our range for her" />
    </Layout>
  );
}
