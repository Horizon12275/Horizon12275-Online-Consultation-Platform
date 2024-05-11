import React, { useEffect, useState } from "react";
import ConsultationHistoryCard from "./consultation_history_card";
import { Link } from "react-router-dom";
import { getOtherUserById } from "../services/userService";
import { getRecommendedExperts } from "../services/expertService";

export default function ConsultationHistoryList() {
  const [n, setN] = useState(3);
  const [expanded, setExpanded] = useState(false);
  const [experts, setExperts] = useState([]);
  useEffect(() => {
    getRecommendedExperts().then((res) => {
      setExperts(res);
    });
  }, []);

  const handleClick = () => {
    setExpanded(!expanded);
    if (n === 2) {
      setN(6);
    } else {
      setN(2);
    }
  };

  return (
    <div style={{ width: "100%",display:'grid',gap:'5px' }}>
      <header className="text-2xl text-center text-black max-w-[84px] m-auto mt-3">
        History:
      </header>

      {experts.slice(0, n).map((expert) => (
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
