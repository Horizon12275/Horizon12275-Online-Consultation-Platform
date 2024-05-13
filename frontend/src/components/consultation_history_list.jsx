import React, { useEffect, useState } from "react";
import ConsultationHistoryCard from "./consultation_history_card";
import { Link } from "react-router-dom";
import { getOtherUserById } from "../services/userService";
import { getRecommendedExperts } from "../services/expertService";

export default function ConsultationHistoryList() {
  const [experts, setExperts] = useState([]);
  useEffect(() => {
    getRecommendedExperts().then((res) => {
      setExperts(res);
    });
  }, []);


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
