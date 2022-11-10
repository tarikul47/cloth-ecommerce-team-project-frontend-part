import SectionTitle from "../SectionTitle";
import CatagoryDisplay from "./CatagoryDisplay";

const CatagoryDisplays = ({ data, title }) => {
  const image =
    data == "Men Catalog"
      ? "https://images.unsplash.com/photo-1459785704030-654f6c5934a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80"
      : "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80";
  return (
    <section>
      <div className="container max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionTitle title={title} />
        <div className="grid sm:grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:items-stretch">
          <CatagoryDisplay name="Simple Watch" image={image} url="#" />
          <CatagoryDisplay name="Simple Watch" image={image} url="#" />
          <CatagoryDisplay name="Simple Watch" image={image} url="#" />
          <CatagoryDisplay name="Simple Watch" image={image} url="#" />
        </div>
      </div>
    </section>
  );
};

export default CatagoryDisplays;
