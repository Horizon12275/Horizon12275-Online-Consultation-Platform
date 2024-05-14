import { PrivateLayout } from "../layouts";
import VideosDisplay from "../components/videos_display";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import { getExpertById } from "../services/expertService";
import { getClientById } from "../services/clientService";
import { useParams } from "react-router-dom";
import ChatAppSmall from "../components/consultSmall";

function VideoChatPage() {
  const { receiverId } = useParams();
  const { user } = useAuth();
  const [receiver, setReceiver] = useState({});
  useEffect(() => {
    if (user?.role === "user") {
      getExpertById(receiverId).then((expert) => {
        setReceiver(expert);
      });
    } else {
      // 如果当前用户是专家，则获取用户信息
      getClientById(receiverId).then((client) => {
        setReceiver(client);
      });
    }
  }, [receiverId, user]);
  return (
    <PrivateLayout>
      <VideosDisplay />
      <ChatAppSmall sid={user?.id} receiver={receiver} />
    </PrivateLayout>
  );
}
export default VideoChatPage;
