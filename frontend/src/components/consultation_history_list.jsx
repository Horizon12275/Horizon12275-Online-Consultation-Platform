import React from "react";
import ConsultationHistoryCard from "./consultation_history_card";
import { useSearchParams } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function ConsultationHistoryList({ consultations }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { user } = useAuth();

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
      {user?.role === "user" &&
        consultations.slice(0, 3).map((consultation) => (
          <div
            className="cursor-pointer w-[100%]"
            key={consultation.expert.id}
            onClick={() => {
              setSearchParams({ receiverId: consultation.expert.id });
            }}
          >
            <ConsultationHistoryCard expert={consultation.expert} time={consultation.time}/>
          </div>
        ))}
      {user?.role === "expert" &&
        consultations.slice(0, 3).map((consultation) => (
          <div
            className="cursor-pointer w-[100%]"
            key={consultation.client.id}
            onClick={() => {
              setSearchParams({ receiverId: consultation.client.id });
            }}
          >
            <ConsultationHistoryCard client={consultation.client} />
          </div>
        ))}
    </div>
  );
}
