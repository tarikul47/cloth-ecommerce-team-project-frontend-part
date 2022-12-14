import Layout from "../../components/Layout";
import Product from "../../components/Product";
import Attribute from "../../components/UI/Attribute";
import Button from "../../components/UI/Button";
import Image from "../../components/UI/Image";
import Quantity from "../../components/UI/Quantity";

const ProductSlug = () => {
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
        <div className="relative container min-w-screen px-4 py-8">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              <Image src="https://images.unsplash.com/photo-1521498542256-5aeb47ba2b36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />

              <div className="grid grid-cols-2 gap-4 lg:mt-4">
                <Image src="https://images.unsplash.com/photo-1521498542256-5aeb47ba2b36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                <Image src="https://images.unsplash.com/photo-1521498542256-5aeb47ba2b36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                <Image src="https://images.unsplash.com/photo-1521498542256-5aeb47ba2b36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                <Image src="https://images.unsplash.com/photo-1521498542256-5aeb47ba2b36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
              </div>
            </div>

            <div className="sticky top-0">
              <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
                catagory name
              </strong>

              <div className="mt-8 flex justify-between">
                <div className="max-w-[35ch]">
                  <h1 className="text-2xl font-bold font-roboto">
                    Mens Casual Shirt
                  </h1>

                  <p className="mt-0.5 text-sm text-slate-400">SKU-2638</p>
                </div>

                <p className="text-lg font-bold text-green-600">BDT 1500</p>
              </div>

              <details className="group relative mt-4">
                <summary className="block">
                  <div>
                    <div className="prose max-w-none group-open:hidden">
                      <h4>Product details:</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa veniam dicta beatae eos ex error culpa delectus rem
                        tenetur, architecto quam nesciunt, dolor veritatis nisi
                        minus inventore, rerum at recusandae?
                      </p>
                    </div>

                    <span className="mt-4 cursor-pointer text-sm font-medium underline group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                      Read More
                    </span>
                  </div>
                </summary>

                <div className="prose max-w-none pb-6">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa veniam dicta beatae eos ex error culpa delectus rem
                    tenetur, architecto quam nesciunt, dolor veritatis nisi
                    minus inventore, rerum at recusandae?
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat nam sapiente nobis ea veritatis error consequatur
                    nisi exercitationem iure laudantium culpa, animi temporibus
                    non! Maxime et quisquam amet. A, deserunt!
                  </p>
                </div>
              </details>

              <form className="mt-8">
                <fieldset>
                  <legend className="mb-1 text-sm font-medium">Color</legend>

                  <div className="mt-2 flex gap-1">
                    <Attribute attr="color" name="green" />
                    <Attribute name="blue" />
                    <Attribute name="pink" />
                    <Attribute name="red" />
                    <Attribute name="indigo" />
                  </div>
                </fieldset>

                <fieldset className="mt-4">
                  <legend className="mb-1 text-sm font-medium">Size</legend>

                  <div className="flow-root">
                    <div className="-m-0.5 flex flex-wrap">
                      <Attribute attr="size" name="XS" />
                      <Attribute attr="size" name="S" />
                      <Attribute attr="size" name="M" />
                      <Attribute attr="size" name="L" />
                      <Attribute attr="size" name="XL" />
                      <button
                        type="submit"
                        className="ml-3 block border border-gray-900 rounded bg-white px-3 py-2 text-xs font-medium text-black hover:bg-slate-300"
                      >
                        Size Guide
                      </button>
                    </div>
                  </div>
                </fieldset>

                <div className="mt-4">
                  <legend className="mb-1 text-sm font-medium">Quantity</legend>
                  <Quantity />
                </div>

                <div className="mt-8 flex">
                  <Button bgColor="black" label="Add to Bag">
                    <svg
                      className="ml-1.5 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </Button>
                  <Button bgColor="white" label="Go Back" />
                </div>
              </form>

              <div className="my-8">
                <h4 className="mb-1 text-sm font-medium">Returns:</h4>
                <p className="text-sm mt-2">
                  <span className="block">
                    *Returns are free within 7 days unless used.{" "}
                  </span>

                  <a href="" className="mt-1 inline-block underline text-blue-400">
                    Find out more about our return policy
                  </a>
                </p>

                <h4 className="mb-1 text-sm font-medium mt-4">Delivery:</h4>
                <p className="text-sm mt-1">
                  <span className="block text-blue-400">
                    {" "}
                    2 to 3 days at metropolitan city{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="container h-px my-10 bg-gray-300" />

      <section>
        <div className="container min-w-screen px-4 py-8">
          <div className="mb-8 flex sm:flex-row justify-between">
            <h2 className="text-2xl font-roboto font-semibold">
              Other items in This catagory
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-4">
            {products.map((product) => (
              <Product product={product} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductSlug;
