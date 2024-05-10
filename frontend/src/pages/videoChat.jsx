import { BasicLayout } from "../layouts";
import ChatApp from "../components/consult";
import VideosDisplay from "../components/videos_display";
import React from "react";

function VideoChatPage() {
  return (
    <BasicLayout>
      <VideosDisplay />
      <ChatApp />
    </BasicLayout>
  );
}
export default VideoChatPage;
