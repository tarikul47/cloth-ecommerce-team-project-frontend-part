import Input from "./UI/Input";
import MenuItem from "./UI/MenuItem";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  console.log(router.route);
  return (
    <section>
      <nav x-data="{ isOpen: false }" className="relative bg-black">
        <div className="container px-6 py-3 mx-auto md:flex">
          <div className="flex items-center justify-between">
            <div>
              <a
                className="text-2xl font-bold text-white transition-colors duration-300 transform lg:text-3xl"
                href="/"
              >
                URBANSTYLE
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                x-cloak="true"
                type="button"
                className="text-gray-500 hover:text-gray-600  focus:outline-none focus:text-gray-600"
                aria-label="toggle menu"
              >
                <svg
                  x-show="!isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>

                <svg
                  x-show="isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            x-cloak="true"
            className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-black md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between"
          >
            <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
              <MenuItem
                name="HOME"
                design="py-2 border-b-2 border-transparent text-white hover:text-white transition-colors duration-300 transform hover:border-white sm:mx-6"
              />
              <MenuItem
                name="MEN"
                design="py-2 border-b-2 border-transparent text-white hover:text-white transition-colors duration-300 transform hover:border-white sm:mx-6"
              />
              <MenuItem
                name="WOMEN"
                design="py-2 border-b-2 border-transparent text-white hover:text-white transition-colors duration-300 transform hover:border-white sm:mx-6"
              />
              <MenuItem
                name="KIDS"
                design="py-2 border-b-2 border-transparent text-white hover:text-white transition-colors duration-300 transform hover:border-white sm:mx-6"
              />
              <MenuItem
                name="CART"
                url="/cart"
                design="py-2 border-b-2 border-transparent text-white hover:text-white transition-colors duration-300 transform hover:border-white sm:mx-6"
              />
              <MenuItem
                name="CHECKOUT"
                url="/checkout"
                design="py-2 border-b-2 border-transparent text-white hover:text-white transition-colors duration-300 transform hover:border-white sm:mx-6"
              />
              <MenuItem
                name="THANKYOU"
                url="/thankyou"
                design="py-2 border-b-2 border-transparent text-white hover:text-white transition-colors duration-300 transform hover:border-white sm:mx-6"
              />
            </div>
            <div className="relative mt-4 md:mt-0 flex">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-5 h-5 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>

              <Input type="text" placeholder="Search" />
              <div className="px-5 py-1">
                <svg
                  style={{ color: "white" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-bag"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="py-3 mt-3 -mx-3 overflow-y-auto whitespace-nowrap scroll-hidden">
            <MenuItem
              name="NEW IN"
              design="py-2 text-sm border-b-2 border-transparent text-white hover:text-white transition-colors duration-300 transform hover:border-white sm:mx-6"
              url="/category/pants"
            />
            <MenuItem
              name="PANJABI"
              design="py-2 text-sm border-b-2 border-transparent text-white hover:text-white transition-colors duration-300 transform hover:border-white sm:mx-6"
              url="/category/pants"
            />
            <MenuItem
              name="NEW IN"
              design="py-2 text-sm border-b-2 border-transparent text-white hover:text-white transition-colors duration-300 transform hover:border-white sm:mx-6"
              url="/category/pants"
            />
            <MenuItem
              name="PANTS"
              design="py-2 text-sm border-b-2 border-transparent text-white hover:text-white transition-colors duration-300 transform hover:border-white sm:mx-6"
              url="/category/pants"
            />
            <MenuItem
              name="JACKETS"
              design="py-2 text-sm border-b-2 border-transparent text-white hover:text-white transition-colors duration-300 transform hover:border-white sm:mx-6"
              url="/category/pants"
            />
            <MenuItem
              name="SHIRTS"
              design="py-2 text-sm border-b-2 border-transparent text-white hover:text-white transition-colors duration-300 transform hover:border-white sm:mx-6"
              url="/category/pants"
            />
            <MenuItem
              name=" SPORTSWEAR"
              design="py-2 text-sm border-b-2 border-transparent text-white hover:text-white transition-colors duration-300 transform hover:border-white sm:mx-6"
              url="/category/pants"
            />
          </div>
        </div>
      </nav>
      {/* Sub Menu */}
    </section>
  );
};

export default Navbar;
