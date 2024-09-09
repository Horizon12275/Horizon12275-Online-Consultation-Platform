import React, { useEffect, useState, useRef } from "react";
import "../css/loading.css";
import VideoLoading from "./video_loading";

export default function VideoBox({
  currentUserVideoRef,
  isLoadingCurrentUser,
}) {
  const [showControls, setShowControls] = useState(false);

  const goFullScreen = (videoRef) => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.mozRequestFullScreen) {
      /* Firefox */
      videoRef.current.mozRequestFullScreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) {
      /* IE/Edge */
      videoRef.current.msRequestFullscreen();
    }
  };

  const handlePlayPause = () => {
    if (currentUserVideoRef.current.paused) {
      currentUserVideoRef.current.play();
    } else {
      currentUserVideoRef.current.pause();
    }
  };

  const handleVolume = (event) => {
    currentUserVideoRef.current.volume = event.target.value;
  };

  return (
    <div
      className="video-container"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
        marginLeft: "40px",
        width: "700px",
        height: "373px",
        borderRadius: "15px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        position: "relative",
      }}
    >
      <video
        ref={currentUserVideoRef}
        style={{
          maxHeight: "100%",
          maxWidth: "100%",
          minWidth: "500px",
          zIndex: 100,
        }}
      />
      {isLoadingCurrentUser && <VideoLoading />}
      {showControls && (
        <div className="controls">
          <button onClick={handlePlayPause}>Play/Pause</button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            onChange={handleVolume}
          />
          <button onClick={() => goFullScreen(currentUserVideoRef)}>
            Go Fullscreen
          </button>
        </div>
      )}
    </div>
  );
}
