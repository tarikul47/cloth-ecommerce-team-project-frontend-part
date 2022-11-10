import FilterItem from "./FilterItem";

const Filter = ({ label, data = [] }) => {
  return (
    <div>
      <fieldset>
        <legend className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">
          {label}
        </legend>

        <div className="space-y-2 px-5 py-6">
          {data.map((item) => (
            <FilterItem name={item.name} id={item.id} />
          ))}
          <div className="pt-2">
            <button type="button" className="text-xs text-gray-500 underline">
              Reset {label}
            </button>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default Filter;
