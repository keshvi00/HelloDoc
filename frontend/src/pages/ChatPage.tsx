import React, { lazy, Suspense } from "react";
import ChatLayout from "../components/Chat/ChatLayout";

const ChatPage = () => {
  return (
    <Suspense fallback={<div>Loading chat...</div>}>
      <ChatLayout />
    </Suspense>
  );
};

export default ChatPage;
