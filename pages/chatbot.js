import { useState } from "react";

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { text: "Hi, how can I help you today?", sender: "bot" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setMessages([
        ...messages,
        { text: inputValue, sender: "user" },
        { text: "Sorry, I didn't understand. Can you please rephrase?", sender: "bot" },
      ]);
      setInputValue("");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-blue-900 text-white py-4">
        <h1 className="text-center text-2xl font-bold">Banking Chat Bot</h1>
      </header>
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-between min-h-[90vh]">
        <div className="flex-grow overflow-y-scroll p-4 bg-gray-200 rounded-md">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`rounded-md p-3 mb-3 ${
                message.sender === "user" ? "bg-green-500 text-white self-end" : "bg-white text-gray-800 self-start"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleMessageSubmit} className="flex items-center mt-4">
          <input
            type="text"
            placeholder="Type your message here..."
            className="flex-grow rounded-md py-2 px-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-900 text-white rounded-md py-2 px-4 ml-4 font-bold hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}