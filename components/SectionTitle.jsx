const SectionTitle = ({ title }) => {
  return (
    <div class="mb-8 flex sm:flex-row justify-between">
      <h2 class="text-2xl font-roboto font-semibold">{title}</h2>
      <h4 class="p-1">view all</h4>
    </div>
  );
};

export default SectionTitle;
