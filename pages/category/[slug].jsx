import React from "react";
import Filter from "../../components/Filter/Filter";
import Layout from "../../components/Layout";
import Product from "../../components/Product";

const Categoryslug = () => {
  const categories = [
    { id: 1, name: "New" },
    { id: 2, name: "Shirts" },
    { id: 1, name: "Pants" },
    { id: 1, name: "Suits" },
    { id: 1, name: "T-shirts" },
    { id: 1, name: "Jackets" },
    { id: 1, name: "Sportswear" },
  ];
  const size = [
    { id: 1, name: "sm" },
    { id: 2, name: "md" },
    { id: 1, name: "lg" },
    { id: 1, name: "xl" },
    { id: 1, name: "xxl" },
  ];
  const color = [
    { id: 1, name: "Red" },
    { id: 2, name: "Blue" },
    { id: 1, name: "Yellow" },
    { id: 1, name: "Sky" },
    { id: 1, name: "Purple" },
  ];
  const products = [
    {
      id: 1,
      name: "Mens casual shirt",
      price: 500,
      image:
        "https://images.unsplash.com/photo-1624835567150-0c530a20d8cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2440&q=80",
    },
    {
      id: 1,
      name: "Mens casual shirt",
      price: 500,
      image:
        "https://images.unsplash.com/photo-1624835567150-0c530a20d8cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2440&q=80",
    },
    {
      id: 1,
      name: "Mens casual shirt",
      price: 500,
      image:
        "https://images.unsplash.com/photo-1624835567150-0c530a20d8cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2440&q=80",
    },
    {
      id: 1,
      name: "Mens casual shirt",
      price: 500,
      image:
        "https://images.unsplash.com/photo-1624835567150-0c530a20d8cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2440&q=80",
    },
  ];
  return (
    <Layout>
      <section>
        <div className="container min-w-screen py-12">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
            <div className="lg:sticky lg:top-4">
              <details
                open
                className="overflow-hidden rounded border border-gray-200"
              >
                <summary className="flex items-center justify-between bg-gray-100 px-5 py-3 lg:hidden">
                  <span className="text-sm font-medium"> Toggle Filters </span>

                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </summary>

                <form className="border-t border-gray-200 lg:border-t-0">
                  <Filter label="Categories" data={categories} />
                  <Filter label="Sizes" data={size} />
                  <Filter label="Colors" data={color} />

                  <div className="flex justify-between border-t border-gray-200 px-5 py-3">
                    <button
                      name="reset"
                      type="button"
                      className="rounded text-xs font-medium text-gray-600 underline"
                    >
                      Reset All
                    </button>

                    <button
                      name="commit"
                      type="button"
                      className="rounded bg-black px-5 py-3 text-xs font-medium text-white"
                    >
                      Apply Filters
                    </button>
                  </div>
                </form>
              </details>
            </div>

            <div className="lg:col-span-3">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  <span className="hidden sm:inline"> Showing </span>6 of 24
                  Products
                </p>

                <div className="ml-4">
                  <label for="SortBy" className="sr-only">
                    Sort
                  </label>
                  <select
                    id="SortBy"
                    name="sort_by"
                    className="rounded border-gray-100 text-sm"
                  >
                    <option readonly>Sort</option>
                    <option value="price-asc">Price, Low-High</option>
                    <option value="price-desc">Price, High-Low</option>
                  </select>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product) => (
                  <Product product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Categoryslug;
