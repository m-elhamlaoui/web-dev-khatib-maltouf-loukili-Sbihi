import React, { useState } from 'react';
import BookingChatbot from './BookingChatbot'; 
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/solid"; 

function ChatbotToggleButton() {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div className="z-50 fixed bottom-0 right-4">
      {!showChatbot && (
        <div
          className=" mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-orange-900 p-2 text-center shadow-lg cursor-pointer"
          onClick={toggleChatbot}
        >
          <ChatBubbleBottomCenterIcon className="h-8 w-8 text-white" />
        </div>
      )}
      {showChatbot && <BookingChatbot onClose={toggleChatbot} />}
    </div>
  );
}

export default ChatbotToggleButton;
