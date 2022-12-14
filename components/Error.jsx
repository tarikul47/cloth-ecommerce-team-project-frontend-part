const Error = ({ status }) => {
  return (
    <section className="container max-w-screen-xl my-10">
      <div
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center"
        role="alert"
      >
        <strong class="font-bold">{status}</strong>
        {/* <span class="block sm:inline">Something seriously bad happened.</span> */}
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
      </div>
    </section>
  );
};

export default Error;
