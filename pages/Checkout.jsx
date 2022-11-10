import Layout from "../components/Layout";

const Checkout = () => {
  return (
    <Layout>
      <section>
        <div className="container my-6">
          <div className="w-full p-8 bg-white shadow-lg">
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 justify-between">
              <div className="">
                <table className="w-full text-sm lg:text-base" cellspacing="0">
                  <thead>
                    <tr className="h-12 uppercase">
                      <th className="hidden md:table-cell"></th>
                      <th className="text-left">ADDED ITEMS</th>
                      <th className="text-center pl-5 lg:pl-0">
                        <span className="lg:hidden text-center" title="Quantity">
                          Qty
                        </span>
                        <span className="hidden lg:inline">Quantity</span>
                      </th>
                      <th className="text-right">Price</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="hidden pb-4 md:table-cell">
                        <a href="#">
                          <img
                            src="https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80"
                            className="w-20 rounded"
                            alt="Thumbnail"
                          />
                        </a>
                      </td>

                      <td>
                        <p className="mb-2 md:ml-4">Mens casual shirt</p>
                        <form action="" method="POST">
                          <button type="submit" className="text-gray-700 md:ml-4">
                            <small>(Remove item)</small>
                          </button>
                        </form>
                      </td>

                      <td className="text-center mt-6">
                        <p>1</p>
                      </td>

                      <td className="text-right">
                        <span className="text-sm lg:text-base font-medium">
                          1500
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td className="hidden pb-4 md:table-cell">
                        <a href="#">
                          <img
                            src="https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80"
                            className="w-20 rounded"
                            alt="Thumbnail"
                          />
                        </a>
                      </td>

                      <td>
                        <p className="mb-2 md:ml-4">Mens casual shirt</p>
                        <form action="" method="POST">
                          <button type="submit" className="text-gray-700 md:ml-4">
                            <small>(Remove item)</small>
                          </button>
                        </form>
                      </td>

                      <td className="text-center mt-6">
                        <p>1</p>
                      </td>

                      <td className="text-right">
                        <span className="text-sm lg:text-base font-medium">
                          1500
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mx-4">
                <div className="w-full">
                  <div className="p-2 bg-gray-100 rounded-full">
                    <h1 className="ml-2 font-bold uppercase">Order Details</h1>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between border-b text-base">
                      <div className="lg:px-4 lg:py-2 m-2 font-bold text-center text-gray-800">
                        Subtotal
                      </div>
                      <div className="lg:px-4 lg:py-2 m-2 font-bold text-center text-gray-900">
                        3000
                      </div>
                    </div>

                    <div className="flex justify-between pt-4 border-b text-base">
                      <div className="lg:px-4 lg:py-2 m-2 font-bold text-center text-gray-800">
                        VAT 10%
                      </div>
                      <div className="lg:px-4 lg:py-2 m-2 font-bold text-center text-gray-900">
                        300
                      </div>
                    </div>
                    <div className="flex justify-between pt-4 border-b text-base">
                      <div className="lg:px-4 lg:py-2 m-2 font-bold text-center text-gray-800">
                        Total
                      </div>
                      <div className="lg:px-4 lg:py-2 m-2 font-bold text-center text-gray-900">
                        3300
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <p>
                <span className="font-bold">New customer?</span>
                <span className="underline text-blue-400">
                  Click here to Register
                </span>
              </p>
            </div>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 justify-between">
              <div className="w-full">
                <p className="px-4 py-3 mt-6 font-medium text-black bg-gray-100">
                  Billing address
                </p>
                <div>
                  <p className="py-4 px-4 text-sm">Select your billing address</p>
                  <div className="p-2">
                    <button
                      onclick="showBillingDropdownOptions()"
                      className="flex flex-row justify-between w-48 px-2 py-2 text-gray-700 bg-white border-2 border-white rounded-md shadow focus:outline-none focus:border-black"
                    >
                      <span className="select-none">Select address</span>

                      <svg
                        id="arrow-down"
                        className="hidden w-6 h-6 stroke-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <svg
                        id="arrow-up"
                        className="w-6 h-6 stroke-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                    <div
                      id="billing-options"
                      className="hidden w-48 py-2 mt-2 bg-white rounded-lg shadow-xl"
                    >
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-black hover:text-white"
                      >
                        Default address
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-black hover:text-white"
                      >
                        Add new address
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <p className="px-4 py-3 mt-6 font-medium text-black bg-gray-100">
                  Delivery address
                </p>
                <div>
                  <p className="py-4 px-4 text-sm">Select your delivery address</p>
                  <div className="p-2">
                    <button
                      onclick="showDeliveryDropdownOptions()"
                      className="flex flex-row justify-between w-48 px-2 py-2 text-gray-700 bg-white border-2 border-white rounded-md shadow focus:outline-none focus:border-black"
                    >
                      <span className="select-none">Select address</span>

                      <svg
                        id="arrow-down"
                        className="hidden w-6 h-6 stroke-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <svg
                        id="arrow-up"
                        className="w-6 h-6 stroke-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                    <div
                      id="delivery-options"
                      className="hidden w-48 py-2 mt-2 bg-white rounded-lg shadow-xl"
                    >
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-black hover:text-white"
                      >
                        Default address
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-black hover:text-white"
                      >
                        Add new address
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 md:justify-between">
              <div className="w-full">
                <p className="px-4 py-3 mt-6 font-medium text-black bg-gray-100">
                  Billing summary
                </p>
                <div className="mx-4">
                  <div className="w-full">
                    <div className="p-4">
                      <div className="flex justify-between border-b text-base">
                        <div className="lg:px-4 lg:py-2 m-2 font-bold text-center text-gray-800">
                          Subtotal
                        </div>
                        <div className="lg:px-4 lg:py-2 m-2 font-bold text-center text-gray-900">
                          3000
                        </div>
                      </div>
                      <div className="flex justify-between pt-4 border-b text-base">
                        <div className="lg:px-4 lg:py-2 m-2 font-bold text-center text-gray-800">
                          VAT 10%
                        </div>
                        <div className="lg:px-4 lg:py-2 m-2 font-bold text-center text-gray-900">
                          300
                        </div>
                      </div>
                      <div className="flex justify-between pt-4 border-b text-base">
                        <div className="lg:px-4 lg:py-2 m-2 font-bold text-center text-gray-800">
                          Delivery charge
                        </div>
                        <div className="lg:px-4 lg:py-2 m-2 font-bold text-center text-gray-900">
                          50
                        </div>
                      </div>
                      <div className="flex justify-between pt-4 border-b text-base">
                        <div className="lg:px-4 lg:py-2 m-2 font-bold text-center text-gray-800">
                          Total
                        </div>
                        <div className="lg:px-4 lg:py-2 m-2 font-bold text-center text-gray-900">
                          3350
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <p className="px-4 py-3 mt-6 font-medium text-black bg-gray-100">
                  Payment
                </p>
                <div>
                  <p className="py-4 px-4 text-sm">
                    Please choose your payment menthod
                  </p>
                  <div className="p-2">
                    <button
                      onclick="showPaymentDropdownOptions()"
                      className="flex flex-row justify-between w-48 px-2 py-2 text-gray-700 bg-white border-2 border-white rounded-md shadow focus:outline-none focus:border-black"
                    >
                      <span className="select-none">Payment method</span>

                      <svg
                        id="arrow-down"
                        className="hidden w-6 h-6 stroke-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <svg
                        id="arrow-up"
                        className="w-6 h-6 stroke-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                    <div
                      id="payment-options"
                      className="hidden w-48 py-2 mt-2 bg-white rounded-lg shadow-xl"
                    >
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-black hover:text-white"
                      >
                        Mobile Payment
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-black hover:text-white"
                      >
                        Debit card
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-black hover:text-white"
                      >
                        COD
                      </a>
                    </div>

                    <button className="w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-black shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                      <span className="ml-2 mt-5px">Pay and Place order</span>
                    </button>
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

export default Checkout;
