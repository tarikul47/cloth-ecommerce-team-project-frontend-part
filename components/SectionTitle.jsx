const SectionTitle = ({ title }) => {
  return (
    <div className="mb-8 flex sm:flex-row justify-between">
      <h2 className="text-2xl font-roboto font-semibold">{title}</h2>
      <h4 className="p-1">view all</h4>
    </div>
  );
};

export default SectionTitle;
