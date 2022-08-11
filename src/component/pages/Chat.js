import React, { useEffect, useState } from "react";
import io from "socket.io-client";

let socket;
const Chat = () => {
  const [user, setUser] = useState("");
  const [room, setRoom] = useState("");
  const backendUrl = "http://localhost:5000";

  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const user = params.get("name");
    const room = params.get("room");
    //console.log(user, room);
    setUser(user);
    setRoom(room);

    socket = io(backendUrl);

    // send user and room to server
    socket.emit("join", { username: user, room: room });
  }, [backendUrl]);

  return <div>Chat</div>;
};

export default Chat;
