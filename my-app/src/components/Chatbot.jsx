import React, { useState } from "react";

function Chat({ onColorChange }) {
  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    // Extract the color from the message (assuming the message format is "#RRGGBB")
    const color = message.trim();

    if (color.match(/^#[0-9A-Fa-f]{6}$/)) {
      onColorChange(color);
    } else {
      console.error("Invalid color format");
    }

    setMessage("");
  };

  return (
    <div className="chat">
      <input
        type="text"
        placeholder="Type a color (#RRGGBB)"
        value={message}
        onChange={handleMessageChange}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default Chat;
