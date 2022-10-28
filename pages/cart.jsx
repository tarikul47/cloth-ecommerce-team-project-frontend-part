import Layout from "../components/Layout";

const cart = () => {
  return (
    <Layout>
      <section>
        <div class="flex justify-center my-6">
          <div class="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
            <div class="flex-1">
              <h2 class="font-bold text-2xl text-center mb-10">
                YOUR SHOPPING BAG
              </h2>
              <table class="w-full text-sm lg:text-base" cellspacing="0">
                <thead>
                  <tr class="h-12 uppercase">
                    <th class="hidden md:table-cell"></th>
                    <th class="text-left">ADDED ITEMS</th>
                    <th class="lg:text-right text-left pl-5 lg:pl-0">
                      <span class="lg:hidden" title="Quantity">
                        Qtd
                      </span>
                      <span class="hidden lg:inline">Quantity</span>
                    </th>
                    <th class="hidden text-right md:table-cell">
                      Unit price (BDT)
                    </th>
                    <th class="text-right">Total price</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td class="hidden pb-4 md:table-cell">
                      <a href="#">
                        <img
                          src="https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80"
                          class="w-20 rounded"
                          alt="Thumbnail"
                        />
                      </a>
                    </td>

                    <td>
                      <p class="mb-2 md:ml-4">Mens casual shirt</p>
                      <form action="" method="POST">
                        <button type="submit" class="text-gray-700 md:ml-4">
                          <small>(Remove item)</small>
                        </button>
                      </form>
                    </td>

                    <td class="justify-center md:justify-end md:flex mt-6">
                      <div>
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
                      </div>
                    </td>

                    <td class="hidden text-right md:table-cell">
                      <span class="text-sm lg:text-base font-medium">1500</span>
                    </td>

                    <td class="text-right">
                      <span class="text-sm lg:text-base font-medium">1500</span>
                    </td>
                  </tr>

                  <tr>
                    <td class="hidden pb-4 md:table-cell">
                      <a href="#">
                        <img
                          src="https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80"
                          class="w-20 rounded"
                          alt="Thumbnail"
                        />
                      </a>
                    </td>

                    <td>
                      <p class="mb-2 md:ml-4">Mens casual shirt</p>
                      <form action="" method="POST">
                        <button type="submit" class="text-gray-700 md:ml-4">
                          <small>(Remove item)</small>
                        </button>
                      </form>
                    </td>

                    <td class="justify-center md:justify-end md:flex mt-6">
                      <div>
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
                      </div>
                    </td>

                    <td class="hidden text-right md:table-cell">
                      <span class="text-sm lg:text-base font-medium">1500</span>
                    </td>

                    <td class="text-right">
                      <span class="text-sm lg:text-base font-medium">1500</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <hr class="pb-6 mt-6" />
              <div class="my-4 mt-6 -mx-2 flex justify-between">
                <div>
                  <button
                    type="button"
                    class="mt-4 mr-2 flex w-full items-center justify-center rounded-sm bg-black hover:bg-gray-700 text-white px-8 py-4"
                  >
                    <span class="text-sm font-medium"> Continue Shopping </span>
                  </button>
                </div>

                <div class="lg:px-2 lg:w-1/2">
                  <div class="p-4 bg-gray-100 rounded-full">
                    <h1 class="ml-2 font-bold uppercase">Order Details</h1>
                  </div>
                  <div class="p-4">
                    <div class="flex justify-between border-b">
                      <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                        Subtotal
                      </div>
                      <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                        3000
                      </div>
                    </div>

                    <div class="flex justify-between pt-4 border-b">
                      <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                        VAT 10%
                      </div>
                      <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                        300
                      </div>
                    </div>
                    <div class="flex justify-between pt-4 border-b">
                      <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                        Total
                      </div>
                      <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                        3300
                      </div>
                    </div>
                    <a href="#">
                      <button class="w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-black shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                        <span class="ml-2 mt-5px">Procceed to checkout</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default cart;
