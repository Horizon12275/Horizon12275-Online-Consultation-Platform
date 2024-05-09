import React, { useEffect, useState } from "react";
import { getAllExperts } from "../services/expertService";
import ExpertShowCard from "./expert_showcard";

const ExpertRecommend = ({ tag }) => {
  const [experts, setExperts] = useState([]);
  useEffect(() => {
    getAllExperts().then((res) => {
      setExperts(res);
    });
  }, []);

  return (
    <div>
      <h1 className="text-xl font-extrabold leading-7 text-black max-w-[109px]">
        Recommended Experts
      </h1>
      <div className="flex gap-4">
        {similarExperts.map((expert) => (
          <ExpertShowCard key={expert.id} item={expert} />
        ))}
      </div>
    </div>
  );
};

export default ExpertRecommend;
