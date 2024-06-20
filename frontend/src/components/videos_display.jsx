import React, { useEffect, useState, useRef } from "react";
import Peer from "peerjs";
import { Link, useParams } from "react-router-dom";
import { getReceiverId, getUser } from "../services/userService";
import "../css/loading.css";
import VideoBox from "./video_box";
import { useAuth } from "../context/authContext";
import { PEERURL } from "../services/requestService";

function CallButton({ onClick }) {
  return (
    <button
      className="call-button hover:scale-105 transition-transform duration-300 ease-in-out"
      onClick={onClick}
    >
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
    <button
      className="call-button hover:scale-105 transition-transform duration-300 ease-in-out"
      onClick={onClick}
    >
      <img
        className="call-icon"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c021edfc9b00b4b26bfa8ac69dab5ee7e915ca7310725b8e4ddfc4bb009bc60?apiKey=b565e599026f4ea2ba591e53566a67d8&"
        alt="Cancel icon"
      />
      <span className="call-text">Cancel</span>
    </button>
  );
}

function BackButton({ onClick }) {
  return (
    <button
      className="call-button hover:scale-105 transition-transform duration-300 ease-in-out"
      onClick={onClick}
    >
      <img
        className="call-icon"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c021edfc9b00b4b26bfa8ac69dab5ee7e915ca7310725b8e4ddfc4bb009bc60?apiKey=b565e599026f4ea2ba591e53566a67d8&"
        alt="Cancel icon"
      />
      <span className="call-text">Back</span>
    </button>
  );
}

const VideosDisplay = () => {
  const { receiverId } = useParams();
  const [stream, setStream] = useState(null);
  const [peerId, setPeerId] = useState("");
  const [currentUserId, setCurrentUserId] = useState("");
  const [remotePeerIdValue, setRemotePeerIdValue] = useState("");
  const remoteVideoRef = useRef(null);
  const currentUserVideoRef = useRef(null);
  const peerInstance = useRef(null);
  const [isLoadingCurrentUser, setIsLoadingCurrentUser] = useState(true);

  //获取当前已经登陆的用户的信息，并通过解析路由，获取即将通讯的用户的id
  useEffect(() => {
    getUser().then((res) => {
      setCurrentUserId("user" + res.id);
      console.log("Current user id is: " + res.id);
    });
    getReceiverId(receiverId).then((res) => {
      setRemotePeerIdValue("user" + res);
      console.log("Receiver id is: " + res);
    });
  }, []);
  useEffect(() => {
    if (peerInstance.current) {
      console.log("Peer instance destroyed" + peerInstance.current);
      peerInstance.current.destroy();
    }
  }, [currentUserId]);

  useEffect(() => {
    if (!currentUserId) {
      return;
    }

    console.log("Current user id for peer is: " + currentUserId);

    //创建peer实例
    const peer = new Peer(currentUserId, {
      host: PEERURL,
      port: 9000,
      path: "/myapp",
    });

    //获取当前用户的peerId
    peer.on("open", (id) => {
      setPeerId(id);
      console.log("My peer ID is: " + id);
    });

    //接收远程用户的视频流
    peer.on("call", (call) => {
      //获取当前用户的视频流
      var getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;

      //获取当前用户的视频流
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
    console.log("Calling peer with ID: " + remotePeerId);
    //获取当前用户的视频流
    var getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;

    //获取当前用户的视频流
    getUserMedia({ video: true, audio: true }, (mediaStream) => {
      currentUserVideoRef.current.srcObject = mediaStream;
      currentUserVideoRef.current.play();

      //呼叫远程用户
      const call = peerInstance.current.call(remotePeerId, mediaStream);
      console.log(mediaStream);

      //接收远程用户的视频流
      call.on("stream", (remoteStream) => {
        remoteVideoRef.current.srcObject = remoteStream;
        remoteVideoRef.current.play();
      });
      console.log("Calling peer with ID: " + remotePeerId);
      call.on("error", (err) => {
        console.error("Call error", err);
      });

      peerInstance.current.on("error", (err) => {
        console.error("Peer error", err);
      });
    });
    setIsLoadingCurrentUser(false);
  };

  const cancel = () => {
    //关闭当前用户的视频流
    if (currentUserVideoRef.current && currentUserVideoRef.current.srcObject) {
      const tracks = currentUserVideoRef.current.srcObject.getTracks();
      tracks.forEach((track) => {
        track.stop();
      });
      currentUserVideoRef.current.srcObject = null;
    }

    //关闭远程用户的视频流
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
        <div
          style={{
            position: "absolute",
            top: "55px",
            left: "1246px",
            right: "200px",
            bottom: "200px",
          }}
        >
          <CallButton onClick={() => call(remotePeerIdValue)} />
        </div>
        <div
          style={{
            position: "absolute",
            top: "55px",
            left: "1386px",
            right: "200px",
            bottom: "200px",
          }}
        >
          <CancelButton onClick={() => cancel()} />
        </div>
        <div
          style={{
            position: "absolute",
            top: "55px",
            left: "1510px",
            right: "200px",
            bottom: "200px",
          }}
        >
          <Link to={`/consultation?receiverId=${receiverId}`} style={{}}>
            <BackButton />
          </Link>
        </div>
        <div style={{ marginTop: "60px" }}>
          <VideoBox
            currentUserVideoRef={currentUserVideoRef}
            isLoadingCurrentUser={isLoadingCurrentUser}
          />
          <VideoBox
            currentUserVideoRef={remoteVideoRef}
            isLoadingCurrentUser={isLoadingCurrentUser}
          />
        </div>
      </div>{" "}
    </>
  );
};

export default VideosDisplay;
