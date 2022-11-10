import Message from "./Message";

const Messages = () => {
  return (
    <section className="container max-w-screen-xl my-10">
      <div className="flex sm:flex-wrap gap-2 px-2">
        <Message message="Free delivery in Dhaka city till 30 Nov" />
        <Message message="Free delivery in Dhaka city till 30 Nov" />
      </div>
    </section>
  );
};

export default Messages;
