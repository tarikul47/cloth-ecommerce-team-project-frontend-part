import React from "react";

const Promotional = ({ name, image }) => {
  return (
    <a href="#" className="block">
      <div className="m-2">
        <img src={image} alt={name} />
        <h3 className="m-auto bg-black p-2 text-white font-poppins text-2xl text-center">
          {name}
        </h3>
      </div>
    </a>
  );
};

export default Promotional;
