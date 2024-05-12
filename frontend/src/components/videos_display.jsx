import React, { useEffect, useState, useRef } from "react";
import Peer from "peerjs";
import { useParams } from "react-router-dom";
import { getReceiverId, getUser } from "../services/userService";
import "../css/loading.css";
import VideoBox from "./video_box";
import { useAuth } from "../context/authContext";

function CallButton({ onClick }) {
  return (
    <button className="call-button" onClick={onClick}>
      <img
        className="call-icon"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c021edfc9b00b4b26bfa8ac69dab5ee7e915ca7310725b8e4ddfc4bb009bc60?apiKey=b565e599026f4ea2ba591e53566a67d8&"
        alt="Call icon"
      />
      <span className="call-text">Connect</span>
    </button>
  );
}

function CancelButton({ onClick }) {
  return (
    <button className="call-button" onClick={onClick}>
      <img
        className="call-icon"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c021edfc9b00b4b26bfa8ac69dab5ee7e915ca7310725b8e4ddfc4bb009bc60?apiKey=b565e599026f4ea2ba591e53566a67d8&"
        alt="Cancel icon"
      />
      <span className="call-text">Cancel</span>
    </button>
  );
}

const VideosDisplay = () => {
  const { user } = useAuth();
  const { receiverId } = useParams();
  const [stream, setStream] = useState(null);
  const [peerId, setPeerId] = useState("");
  const [currentUserId, setCurrentUserId] = useState("");
  const [remotePeerIdValue, setRemotePeerIdValue] = useState("");
  const [isFirstRender, setIsFirstRender] = useState(true);
  const remoteVideoRef = useRef(null);
  const currentUserVideoRef = useRef(null);
  const peerInstance = useRef(null);
  const [isLoadingCurrentUser, setIsLoadingCurrentUser] = useState(true);

  //获取当前已经登陆的用户的信息，并通过解析路由，获取即将通讯的用户的id
  useEffect(() => {
    setCurrentUserId(user?.id);
    getReceiverId(receiverId).then((res) => {
      setRemotePeerIdValue(res);
      console.log("Current user id is: " + user?.id);
      console.log("Receiver id is: " + res);
    });
  }, []);
  useEffect(() => {
    return () => {
      if (peerInstance.current) {
        peerInstance.current.destroy();
      }
    };
  }, []);
  useEffect(() => {
    if (!currentUserId) {
      return;
    }
    console.log("Current user id for peer is: " + currentUserId);
    const peer = new Peer(currentUserId, {
      host: "localhost",
      port: 9000,
      path: "/myapp",
    });

    peer.on("open", (id) => {
      setPeerId(id);
      console.log("My peer ID is: " + id);
    });

    peer.on("call", (call) => {
      var getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;

      getUserMedia({ video: true, audio: true }, (mediaStream) => {
        currentUserVideoRef.current.srcObject = mediaStream;
        currentUserVideoRef.current.play();
        call.answer(mediaStream);
        call.on("stream", function (remoteStream) {
          remoteVideoRef.current.srcObject = remoteStream;
          remoteVideoRef.current.play();
        });
      });
    });
    peerInstance.current = peer;
  }, [stream, currentUserId]);

  const call = (remotePeerId) => {
    var getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;

    getUserMedia({ video: true, audio: true }, (mediaStream) => {
      currentUserVideoRef.current.srcObject = mediaStream;
      currentUserVideoRef.current.play().catch((error) => {
        console.log("Play method error: ", error);
      });

      const call = peerInstance.current.call(remotePeerId, mediaStream);
      console.log(mediaStream);

      call.on("stream", (remoteStream) => {
        remoteVideoRef.current.srcObject = remoteStream;

        remoteVideoRef.current.play().catch((error) => {
          console.log("Play method error: ", error);
        });
      });
    });
    setIsLoadingCurrentUser(false);
  };

  const cancel = () => {
    if (currentUserVideoRef.current && currentUserVideoRef.current.srcObject) {
      const tracks = currentUserVideoRef.current.srcObject.getTracks();
      tracks.forEach((track) => {
        track.stop();
      });
      currentUserVideoRef.current.srcObject = null;
    }

    if (remoteVideoRef.current && remoteVideoRef.current.srcObject) {
      const tracks = remoteVideoRef.current.srcObject.getTracks();
      tracks.forEach((track) => {
        track.stop();
      });
      remoteVideoRef.current.srcObject = null;
    }
    setIsLoadingCurrentUser(true);
  };

  return (
    <>
      <div className="App" style={{ textAlign: "left" }}>
        <CallButton onClick={() => call(remotePeerIdValue)} />
        <CancelButton onClick={() => cancel()} />
        <VideoBox
          currentUserVideoRef={currentUserVideoRef}
          isLoadingCurrentUser={isLoadingCurrentUser}
        />
        <VideoBox
          currentUserVideoRef={remoteVideoRef}
          isLoadingCurrentUser={isLoadingCurrentUser}
        />
      </div>
    </>
  );
};

export default VideosDisplay;
