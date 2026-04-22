import MessageCard from "./MessageCard";

const MessageList = ({ messages }) => {
  return (
    <div className="flex flex-col gap-3">
      {messages.map((message) => (
        <MessageCard key={message.id} message={message} />
      ))}
    </div>
  );
};

export default MessageList;
