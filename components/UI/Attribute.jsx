const Attribute = ({ attr, name }) => {
  const classname =
    attr == "size"
      ? `group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white`
      : `block h-6 w-6 rounded-full border border-gray-200 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300`;
  return (
    <label
      for={`color_${name}`}
      class={`cursor-pointer ${attr == "size" && "p-0.5"}`}
    >
      <input
        type="radio"
        id={`color_${name}`}
        name="color"
        class="peer sr-only"
      />
      <span style={{ backgroundColor: name }} class={classname}>
        {attr == "size" && name}
      </span>
    </label>
  );
};

export default Attribute;
