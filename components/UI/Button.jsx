const Button = ({ label, children, bgColor }) => {
  //const bgColor = (bgColor === black)? "bg-black" :
  let backgroundColor = "";
  switch (bgColor) {
    case "black":
      backgroundColor = "bg-black";
      break;
    case "white":
      backgroundColor = "bg-white text-black border border-gray-900";
      break;

    default:
      break;
  }
  return (
    <button
      type="button"
      className={`mt-4 mr-2 flex w-full items-center justify-center rounded-sm ${backgroundColor} text-white px-8 py-4`}
    >
      <span className="text-sm font-medium"> {label} </span>

      {children && children}
    </button>
  );
};

export default Button;
