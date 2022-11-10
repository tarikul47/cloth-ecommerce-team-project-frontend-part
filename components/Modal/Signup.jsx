const Signup = () => {
  return (
    <div x-data="{show:false}">
      <div className="flex items-center justify-center mt-40">
        <button
          className="px-4 py-2 font-semibold text-blue-100 bg-blue-600 rounded"
          type="button"
        >
          Login Modal
        </button>
      </div>
      <div
        x-show="show"
        
      >
        <div className="flex flex-col w-full p-20 m-8 bg-white rounded-md lg:m-0 lg:w-1/4 sm:p-10">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign up</h1>
            <p className="text-sm text-coolGray-600">
              Sign up to shop with URBANSTYLE
            </p>
          </div>
          <form action="" className="">
            <div className="space-y-4">
              <div>
                <label for="name" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="name"
                  className="w-full px-3 py-2 text-blue-800 border border-black rounded-md bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-300"
                />
              </div>
              <div>
                <label for="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="w-full px-3 py-2 text-blue-800 border border-black rounded-md bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-300"
                />
              </div>
              <div>
                <label for="number" className="block mb-2 text-sm">
                  Phone number
                </label>
                <input
                  type="number"
                  name="number"
                  placeholder="phone number"
                  className="w-full px-3 py-2 text-blue-800 border border-black rounded-md bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-300"
                />
              </div>
              <div>
                <div>
                  <label for="password" className="text-sm">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="w-full px-3 py-2 text-blue-800 border border-black rounded-md bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-300"
                />
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <div className="flex gap-x-2">
                <button
                  type="button"
                  className="w-full px-8 py-3 text-blue-100 bg-black rounded-md"
                >
                  Sign up
                </button>
                <button
                  type="button"
                  className="w-full px-8 py-3 text-black border border-black rounded-md"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
