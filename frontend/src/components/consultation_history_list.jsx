import React, { useEffect, useState } from "react";
import ConsultationHistoryCard from "./consultation_history_card";
import { Link, useParams } from "react-router-dom";
import { getConsultation } from "../services/consultationService";

export default function ConsultationHistoryList() {
  const {receiverId}=useParams();
  const [experts, setExperts] = useState([]);
  useEffect(() => {
    getConsultation().then((consultations) => {
      consultations.sort((a, b) => {
        return new Date(b.time) - new Date(a.time);
      });
      setExperts(consultations.map((consultation) => consultation?.expert));
    });
  }, [receiverId]);//目前只能切换咨询时更新列表 应该做到发送消息时更新列表

  return (
    <div
      style={{
        width: "100%",
        display: "grid",
        gap: "2px",
        position: "absolute",
        top: "50px",
        left: "280px",
      }}
    >
      <h2>Consultation History:</h2>

      {experts.slice(0, 3).map((expert) => (
        <Link to={`/consultation/${expert.id}`} key={expert.id}>
          <React.Fragment key={expert.id}>
            <ConsultationHistoryCard expert={expert} />
          </React.Fragment>
        </Link>
      ))}

      {/* <Row justify="left" style={{ marginTop: "0px" }}>
        <Button onClick={handleClick} hoverable>
          <Row align="middle">
            <CommentOutlined style={{ marginRight: "10px" }} />
            <h3>{expanded ? "收起聊天" : "全部聊天"}</h3>
          </Row>
        </Button>
      </Row> */}
    </div>
  );
}
