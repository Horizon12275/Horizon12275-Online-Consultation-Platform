import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getExpertById } from "../services/expertService"; // 导入专家相关的服务函数
import { Flex, Divider } from "antd";
import ConsultationHistoryList from "../components/consultation_history_list";
import RateButton from "../components/rate";
import { BasicLayout } from "../layouts";
import CommentList from "../components/comment_list";
import { getComments } from "../services/commentService";
import VoiceChatList from "../components/history.jsx";
import AIPrompt from "../components/ai_prompt.jsx";
import ChatApp from "../components/consult.jsx";
import CommentBox from "../components/comment_box.jsx";
import { getCommentsByExpertId } from "../services/expertCommentService.jsx";
import { useAuth } from "../context/authContext.jsx";
import { getClientById } from "../services/clientService.jsx";

const ConsultPage = () => {
  const { user } = useAuth();
  let { receiverId } = useParams();
  const [receiver, setReceiver] = useState({});
  const [comments, setComments] = useState([]);
  useEffect(() => {
    if (user?.role === "user") {
      Promise.all([
        getExpertById(receiverId),
        getCommentsByExpertId(receiverId),
      ]).then(([expert, comments]) => {
        setReceiver(expert);
        setComments(comments);
      });
    } else {
      // 如果当前用户是专家，则获取用户信息
      getClientById(receiverId).then((client) => {
        setReceiver(client);
      });
    }
  }, [receiverId, user]);

  return (
    <ChatLayout>
      <Flex>
        <div
          style={{
            width: "350px",

            backgroundColor: "#f5f5f5",
            padding: "0 15px",
            marginTop: "20px",
            overflowY: "scroll",
          }}
        >
          <ConsultationHistoryList />
          <Divider style={{ margin: "30px 0" }} />
          <RateButton />
          <CommentList comments={comments} />
          <VoiceChatList />
          <AIPrompt />
          <ConsultHead />
          <ChatApp />
          <Messagebox />
        </div>
      </Flex>
    </ChatLayout>
  );
};

export default ConsultPage;
