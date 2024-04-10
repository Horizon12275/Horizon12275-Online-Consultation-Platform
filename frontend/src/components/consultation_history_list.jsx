import React, { useState } from "react";
import ConsultationHistoryCard from "./consultation_history_card";


export default function ConsultationHistoryList() {
  const [n, setN] = useState(3);
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
    if (n === 2) {
      setN(6);
    } else {
      setN(2);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <header className="text-2xl text-center text-black max-w-[84px] m-auto mt-3">
        History:
      </header>

      {Array(n)
        .fill()
        .map((_, index) => (
          <React.Fragment key={index}>
            <ConsultationHistoryCard />
          </React.Fragment>
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
