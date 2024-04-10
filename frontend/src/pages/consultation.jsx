import { useEffect, useState } from "react";
import ChatRoom from "../components/chatroom";
import { useParams } from "react-router-dom";
import { getExpertById } from "../services/expertService"; // 导入专家相关的服务函数
import { Flex, Divider } from "antd";
import ConsultationHistoryList from "../components/consultation_history_list";
import RateButton from "../components/rate";
import { ChatLayout } from "../layouts";
import CommentList from "../components/comment_list";
import { getComments } from "../services/commentService";

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
            width: "350px",
            minHeight: "550px",
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
        </div>
        <ChatRoom expert={expert} />
      </Flex>
    </ChatLayout>
  );
};

export default ConsultPage;
