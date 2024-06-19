import React from "react";
import ConsultationHistoryCard from "./consultation_history_card";
import { useSearchParams } from "react-router-dom";

export default function ConsultationHistoryList({ experts }) {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div
      style={{
        width: "350px",
        display: "grid",
        gap: "2px",
        position: "absolute",
        top: "50px",
        left: "280px",
      }}
    >
      <h2>Consultation History:</h2>

      {experts.slice(0, 3).map((expert) => (
        <div
          className="cursor-pointer w-[100%]"
          key={expert.id}
          onClick={() => {
            setSearchParams({ receiverId: expert.id });
          }}
        >
          <ConsultationHistoryCard expert={expert} />
        </div>
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
