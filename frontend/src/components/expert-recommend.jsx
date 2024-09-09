import React, { useEffect, useState } from "react";
import { getRecommendedExperts } from "../services/expertService";
import ExpertShowCard from "./expert_showcard";

const ExpertRecommend = () => {
  const [experts, setExperts] = useState([]);
  useEffect(() => {
    getRecommendedExperts().then((res) => {
      setExperts(res);
    });
  }, []);

  return (
    <div>
      <h1 className="text-xl font-extrabold leading-7 text-black mb-5">
        Recommended Experts
      </h1>
      <div className="flex gap-4">
        {experts.map((expert) => (
          <ExpertShowCard key={expert.id} item={expert} />
        ))}
      </div>
    </div>
  );
};

export default ExpertRecommend;
