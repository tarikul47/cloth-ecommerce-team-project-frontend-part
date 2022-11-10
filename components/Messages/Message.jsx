const Message = ({ message }) => {
  return (
    <div className="flex md:flex-row sm: flex-col">
      <div className="bg-black text-white text-center md:w-[610px] md:h-[40px]">
        <h4 className="p-2">{message}</h4>
      </div>
    </div>
  );
};

export default Message;
