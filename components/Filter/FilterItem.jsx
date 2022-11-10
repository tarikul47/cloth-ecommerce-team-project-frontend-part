const FilterItem = ({ name, id }) => {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        name="type[new-in]"
        className="h-5 w-5 rounded border-gray-300"
      />

      <label for="new-in" className="ml-3 text-sm font-medium">
        {name}
      </label>
    </div>
  );
};

export default FilterItem;
