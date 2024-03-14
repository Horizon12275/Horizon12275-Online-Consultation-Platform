import React from "react";
import { useEffect, useState } from "react";
import ChatRoom from "../components/chatroom";
import { useParams } from "react-router-dom";
import { getExpertById } from "../services/expertService"; // 导入专家相关的服务函数
import { Flex,  Divider } from "antd";
import ConsultationHistoryList from "../components/consultation_history_list";
import RateButton from "../components/rate";
import { ChatLayout } from "../layouts";
import CommentBox from "../components/comment_box";


const ConsultPage = () => {
  let { id } = useParams();
  const [expert, setExpert] = useState({});
  useEffect(() => {
    getExpertById(id).then((res) => {
      setExpert(res);
    });
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
          <CommentBox />
        </div>
        <ChatRoom expert={expert} />
      </Flex>
    </ChatLayout>
  );
};

export default ConsultPage;
