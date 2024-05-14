import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getExpertById } from "../services/expertService"; // 导入专家相关的服务函数
import { Flex, Divider } from "antd";
import ConsultationHistoryList from "../components/consultation_history_list";
import RateButton from "../components/rate";
import { PrivateLayout } from "../layouts";
import CommentList from "../components/comment_list";
import ChatApp from "../components/consult.jsx";
import CommentBox from "../components/comment_box.jsx";
import { getCommentsByExpertId } from "../services/expertCommentService.jsx";
import { useAuth } from "../context/authContext.jsx";
import { getClientById } from "../services/clientService.jsx";
import { getConsultation } from "../services/consultationService.jsx";

const ConsultPage = () => {
  const { user } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  let receiverId = searchParams.get("receiverId"); // 从url中获取receiverId
  const [receiver, setReceiver] = useState({});
  const [comments, setComments] = useState([]);
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    console.log(receiverId);
    getConsultation().then((consultations) => {
      if (consultations.length === 0) {
        alert("You have consulted no expert yet.");
        location.href = "/";
      }
      //目前只能切换咨询时更新列表 应该做到发送消息时更新列表
      consultations.sort((a, b) => {
        return new Date(b.time) - new Date(a.time);
      });
      setExperts(consultations.map((consultation) => consultation?.expert));
      if (!receiverId) {
        receiverId = consultations[0]?.expert?.id;
        console.log(receiverId);
      } else {
       
      }
      if (user?.role === "user") {
        Promise.all([
          getExpertById(searchParams.get("receiverId")),
          getCommentsByExpertId(searchParams.get("receiverId")),
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
    });
  }, [user, searchParams]);

  return (
    <PrivateLayout>
      <Flex>
        <div
          style={{
            minHeight: "800px",
            backgroundColor: "#f5f5f5",
            padding: "0 10px",
            height: "100vh",
          }}
        >
          {user?.role === "user" && (
            <>
              <ConsultationHistoryList
                style={{ position: "fixed", top: "30px", left: "300px" }}
                experts={experts}
              />
              {/*<Divider style={{ margin: "10px 0" }} />*/}
              {/* <RateButton /> */}
              <CommentList comments={comments} />
              <CommentBox
                id={receiverId}
                type={"expert"}
                setComments={setComments}
                style={{ position: "absolute", top: "30px", left: "300px" }}
              />

              {/*<AIPrompt />*/}
            </>
          )}
          <ChatApp sid={user?.id} receiver={receiver} receiverId={receiverId} />
        </div>
      </Flex>
    </PrivateLayout>
  );
};

export default ConsultPage;
