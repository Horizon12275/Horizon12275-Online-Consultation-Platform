import React from "react";
import "../css/loading.css";

export default function VideoLoading() {
  return (
    <>
      <div className="loading-container">
        <div className="loading-text">Loading... Please Repress Connect Button</div>
        <div className="loading" />
      </div>
    </>
  );
}
