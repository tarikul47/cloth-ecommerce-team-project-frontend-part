const Product = ({ product }) => {
  return (
    <div class="border border-slate-100 shadow-lg">
      <img
        class="w-full -mt-3 h-96 object-cover"
        alt=""
        src="https://images.unsplash.com/photo-1624835567150-0c530a20d8cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2440&q=80"
      />

      <div class="flex items-center justify-between">
        <h3 class="mt-4 px-2 text-md font-medium text-slate-900">
          {product.name}
        </h3>
      </div>

      <div class="mt-4 px-2 flex items-center justify-between font-bold">
        <p class="text-green-600">
          BDT <span class="sm:text-xs md:text-lg">{product.price}</span>
        </p>
        <p class="text-xs uppercase tracking-wide text-blue-600">6 Colors</p>
      </div>

      <button
        type="button"
        class="w-full items-center justify-center bg-black text-white px-8 py-3 mt-3"
      >
        <span class="text-sm font-medium px-2"> View Details </span>
      </button>
    </div>
  );
};

export default Product;
