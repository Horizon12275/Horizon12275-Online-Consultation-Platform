import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getExpertById } from "../services/expertService"; // 导入专家相关的服务函数
import { Flex, Divider } from "antd";
import ConsultationHistoryList from "../components/consultation_history_list";
import RateButton from "../components/rate";
import { ChatLayout } from "../layouts";
import CommentList from "../components/comment_list";
import { getComments } from "../services/commentService";
import History from "../components/history.jsx";
import AIPrompt from "../components/ai_prompt.jsx";
import ConsultHead from "../components/consult_head.jsx";
import ChatApp from "../components/consult.jsx";
import Messagebox from "../components/message_box.jsx";
const ConsultPage = () => {
  let { id } = useParams();
  const [expert, setExpert] = useState({});
  const [comments, setComments] = useState([]);
  useEffect(() => {
    Promise.all([getExpertById(id), getComments(id)]).then(
      ([expert, comments]) => {
        setExpert(expert);
        setComments(comments);
      }
    );
  }, [id]);

  return (
    <ChatLayout>
      <Flex>
        <div
          style={{
            
            minHeight: "800px",
            backgroundColor: "#f5f5f5",
            padding: "0 10px",
            height: "100vh",
            overflowY: "scroll",
          }}
        >
          <ConsultationHistoryList />
          <Divider style={{ margin: "10px 0" }} />
          <RateButton />
          <CommentList comments={comments} />
          <History />
          <AIPrompt />
          
          <ChatApp />
        </div>
      </Flex>
    </ChatLayout>
  );
};

export default ConsultPage;
