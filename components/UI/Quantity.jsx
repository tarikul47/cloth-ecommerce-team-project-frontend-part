const Quantity = () => {
  return (
    <span class="inline-flex divide-x overflow-hidden rounded-md border bg-white shadow-sm">
      <button
        class="inline-block px-2 text-gray-700 hover:bg-gray-50 focus:relative"
        title="Edit Product"
      >
        -
      </button>

      <input
        type="number"
        id="quantity"
        min="1"
        value="1"
        class="w-12 rounded border-gray-100 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
      />

      <button
        class="inline-block px-2 text-gray-700 hover:bg-gray-50 focus:relative"
        title="Delete Product"
      >
        +
      </button>
    </span>
  );
};

export default Quantity;
