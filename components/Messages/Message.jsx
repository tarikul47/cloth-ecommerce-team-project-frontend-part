const Message = ({ message }) => {
  return (
    <div class="flex md:flex-row sm: flex-col">
      <div class="bg-black text-white text-center md:w-[610px] md:h-[40px]">
        <h4 class="p-2">{message}</h4>
      </div>
    </div>
  );
};

export default Message;
