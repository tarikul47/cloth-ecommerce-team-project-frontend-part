import Layout from "../components/Layout";
import Button from "../components/UI/Button";

const thankyou = () => {
  return (
    <Layout>
      <section>
        <div class="container flex items-center justify-center min-h-screen">
          <div>
            <div class="flex flex-col items-center space-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-green-600 w-20 h-20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h1 class="text-4xl font-bold font-poppins">Order Received !</h1>
              <h1 class="text-xl font-bold font-poppins">Thank you</h1>
              <p>Your order has been received.</p>
              <p>
                Your order number:{" "}
                <span class="text-lg font-bold text-green-600">635782</span>
              </p>

              <div>
                <Button bgColor="black" label="Continue Shopping" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default thankyou;
