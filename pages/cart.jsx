import CartItem from "../components/CartItem";
import Layout from "../components/Layout";
import Login from "../components/Modal/Login";
import Signup from "../components/Modal/Signup";
import Button from "../components/UI/Button";

const cart = () => {
  return (
    <Layout>
      <section>
        <div className="flex justify-center my-6">
          <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
            <div className="flex-1">
              <h2 className="font-bold text-2xl text-center mb-10">
                YOUR SHOPPING BAG
              </h2>
              <table className="w-full text-sm lg:text-base" cellspacing="0">
                <thead>
                  <tr className="h-12 uppercase">
                    <th className="hidden md:table-cell"></th>
                    <th className="text-left">ADDED ITEMS</th>
                    <th className="lg:text-right text-left pl-5 lg:pl-0">
                      <span className="lg:hidden" title="Quantity">
                        Qtd
                      </span>
                      <span className="hidden lg:inline">Quantity</span>
                    </th>
                    <th className="hidden text-right md:table-cell">
                      Unit price (BDT)
                    </th>
                    <th className="text-right">Total price</th>
                  </tr>
                </thead>

                <tbody>
                  <CartItem />
                </tbody>
              </table>
              <hr className="pb-6 mt-6" />
              <div className="my-4 mt-6 -mx-2 flex justify-between">
                <div>
                  <Button bgColor="black" label="Continue Shopping" />
                </div>

                <div className="lg:px-2 lg:w-1/2">
                  <div className="p-4 bg-gray-100 rounded-full">
                    <h1 className="ml-2 font-bold uppercase">Order Details</h1>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between border-b">
                      <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                        Subtotal
                      </div>
                      <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                        3000
                      </div>
                    </div>

                    <div className="flex justify-between pt-4 border-b">
                      <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                        VAT 10%
                      </div>
                      <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                        300
                      </div>
                    </div>
                    <div className="flex justify-between pt-4 border-b">
                      <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                        Total
                      </div>
                      <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                        3300
                      </div>
                    </div>
                    <a href="#">
                      <button className="w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-black shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                        <span className="ml-2 mt-5px">Procceed to checkout</span>
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
