import React, { useContext, useEffect, useState } from "react";

import dynamic from "next/dynamic";
import { AuthContext } from "@/context";

import { useRouter } from "next/router";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);

export default function Home() {
  const { userName, secret } = useContext(AuthContext);
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== undefined) {
      setShowChat(true);
    }
  }, []);

  useEffect(() => {
    if (userName === "" || secret === "") {
      router.push("/");
    }
  }, [userName, secret]);

  if (!showChat) return <div />;

  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine
          height="calc(100vh - 212px)"
          projectID="e23ebdc5-7f44-49dc-8e77-e09ba751d5ee"
          userName={userName}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial />}
        />
      </div>
    </div>
  );
}
