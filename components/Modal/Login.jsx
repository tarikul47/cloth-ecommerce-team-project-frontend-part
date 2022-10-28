const Login = () => {
  return (
    <div x-data="{show:false}">
      <div class="flex items-center justify-center mt-40">
        <button
          class="px-4 py-2 font-semibold text-blue-100 bg-blue-600 rounded"
          type="button"
        >
          Login Modal
        </button>
      </div>
      <div
       
        class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
      >
        <div class="flex flex-col w-full p-20 m-8 bg-white rounded-md lg:m-0 lg:w-1/4 sm:p-10">
          <div class="mb-8 text-center">
            <h1 class="my-3 text-4xl font-bold">Sign in</h1>
            <p class="text-sm text-coolGray-600">
              Sign in to shop your desired product
            </p>
          </div>
          <form action="" class="">
            <div class="space-y-4">
              <div>
                <label for="email" class="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  class="w-full px-3 py-2 text-blue-800 border border-black rounded-md bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-300"
                />
              </div>
              <div>
                <div class="flex justify-between mb-2">
                  <label for="password" class="text-sm">
                    Password
                  </label>
                  <a href="#" class="text-xs text-blue-600 hover:underline">
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  class="w-full px-3 py-2 text-blue-800 border border-black rounded-md bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-300"
                />
              </div>
            </div>
            <div class="mt-6 space-y-2">
              <div class="flex gap-x-2">
                <button
                  type="button"
                  class="w-full px-8 py-3 text-blue-100 bg-black rounded-md"
                >
                  Sign in
                </button>
                <button
                  type="button"
                  class="w-full px-8 py-3 text-black border border-black rounded-md"
                >
                  Cancel
                </button>
              </div>
              <p class="px-6 pt-6 text-sm text-center text-coolGray-600">
                Don't have an shopping account yet?
              </p>
              <p class="px-6 text-MD text-center">
                <a href="#" class="text-black underline hover:text-blue-600">
                  CREATE AN ACCOUNT
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
