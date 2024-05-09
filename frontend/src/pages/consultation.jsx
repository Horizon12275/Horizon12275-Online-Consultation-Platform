import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getExpertById } from "../services/expertService"; // 导入专家相关的服务函数
import { Flex, Divider } from "antd";
import ConsultationHistoryList from "../components/consultation_history_list";
import RateButton from "../components/rate";
import { BasicLayout, ChatLayout } from "../layouts";
import CommentList from "../components/comment_list";
import History from "../components/history.jsx";
import AIPrompt from "../components/ai_prompt.jsx";
import ChatApp from "../components/consult.jsx";
import CommentBox from "../components/comment_box.jsx";
import { getCommentsByArticleId } from "../services/articleCommentService.jsx";
import { getCommentsByExpertId } from "../services/expertCommentService.jsx";

const ConsultPage = () => {
  let { receiverId } = useParams();

  const [expert, setExpert] = useState({});
  const [comments, setComments] = useState([]);
  useEffect(() => {
    Promise.all([
      getExpertById(receiverId),
      getCommentsByExpertId(receiverId),
    ]).then(([expert, comments]) => {
      setExpert(expert);
      setComments(comments);
      console.log(receiverId);
    });
  }, [receiverId]);

  return (
    <BasicLayout>
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
          <CommentList comments={comments}  />
          <CommentBox id={receiverId} type={"expert"} setComments={setComments} />
          <History />
          <AIPrompt />

          <ChatApp />
        </div>
      </Flex>
    </BasicLayout>
  );
};

export default ConsultPage;
