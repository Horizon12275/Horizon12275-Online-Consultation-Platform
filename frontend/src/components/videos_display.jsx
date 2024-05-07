import React, { useEffect, useState, useRef } from "react";
import Peer from "peerjs";
import { useParams } from "react-router-dom";
import { getUser } from "../services/userService";

const VideosDisplay = () => {
  const { receiverId } = useParams();
  const [stream, setStream] = useState(null);
  const [peerId, setPeerId] = useState("");
  const [currentUserId, setCurrentUserId] = useState("");
  const [remotePeerIdValue, setRemotePeerIdValue] = useState("");
  const [isFirstRender, setIsFirstRender] = useState(true);
  const remoteVideoRef = useRef(null);
  const currentUserVideoRef = useRef(null);
  const peerInstance = useRef(null);
  //获取当前已经登陆的用户的信息，并通过解析路由，获取即将通讯的用户的id
  useEffect(() => {
    getUser().then((res) => {
      setCurrentUserId(res.id);
      setRemotePeerIdValue(receiverId);
      console.log("Current user id is: " + res.id);
      console.log("Receiver id is: " + receiverId);
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
      currentUserVideoRef.current.play();

      const call = peerInstance.current.call(remotePeerId, mediaStream);
      console.log(mediaStream);

      call.on("stream", (remoteStream) => {
        remoteVideoRef.current.srcObject = remoteStream;
        remoteVideoRef.current.play();
      });
    });
  };

  return (
    <div className="App" style={{ textAlign: "left" }}>
      <h1 style={{ color: "black" }}>Current user id is {peerId}</h1>
      <input
        type="text"
        value={remotePeerIdValue}
        onChange={(e) => setRemotePeerIdValue(e.target.value)}
        style={{
          width: "200px",
          height: "30px",
          fontSize: "16px",
          color: "black",
        }}
      />
      <button
        onClick={() => call(remotePeerIdValue)}
        style={{
          marginLeft: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "green",
        }}
      >
        Call
      </button>
      <div style={{ marginTop: "20px" }}>
        <video
          ref={currentUserVideoRef}
          style={{ width: "300px", height: "200px" }}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <video
          ref={remoteVideoRef}
          style={{ width: "300px", height: "200px" }}
        />
      </div>
    </div>
  );
};

export default VideosDisplay;
