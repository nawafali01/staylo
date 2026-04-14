import MessageCard from "./MessageCard";

const MessageList = ({ messages }) => {
  return (
    <div className="flex flex-col gap-3">
      {messages.map((msg) => (
        <MessageCard key={msg.id} message={msg} />
      ))}
    </div>
  );
};

export default MessageList;
