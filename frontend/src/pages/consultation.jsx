import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getExpertById } from "../services/expertService"; // 导入专家相关的服务函数
import { Flex, Divider } from "antd";
import ConsultationHistoryList from "../components/consultation_history_list";
import RateButton from "../components/rate";
import { BasicLayout } from "../layouts";
import CommentList from "../components/comment_list";
import History from "../components/history.jsx";
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
    user &&
    (
      <BasicLayout>
        <Flex>
          <div
          style={{
            minHeight: "800px",
            backgroundColor: "#f5f5f5",
            padding: "0 10px",
            height: "100vh",

          }}
          >
            {user.role === "user" && (
              <>
                <ConsultationHistoryList
                  style={{ position: "fixed", top: "30px", left: "300px" }}
                />
                {/*<Divider style={{ margin: "10px 0" }} />*/}
                <RateButton />
                <CommentList comments={comments} />
                <CommentBox
                  id={receiverId}
                  type={"expert"}
                  setComments={setComments}
                  style={{ position: "absolute", top: "30px", left: "300px" }}
                />

                <AIPrompt />
              </>
            )}

            <ChatApp sid={user.id} receiver={receiver} />
          </div>
        </Flex>
      </BasicLayout>
    )
  );
};

export default ConsultPage;
