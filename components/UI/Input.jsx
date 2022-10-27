const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg focus:border-gray-600  focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-gray-300"
      placeholder={placeholder}
    />
  );
};

export default Input;
