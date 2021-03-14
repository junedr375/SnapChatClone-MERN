import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./Chats.css";

import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import { auth, db } from "./firebase";
import Chat from "./Chat";
import { selectUser } from "./features/appSlice";

import { useSelector } from "react-redux";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { resetCameraImage } from "./features/cameraSlice";

function Chats() {
  const [posts, setPosts] = useState([]);

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const history = useHistory();
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const takeSnap = () => {
    dispatch(resetCameraImage());
    history.push("/");
  };
  return (
    <div className="chats">
      <div className="chats__header">
        <Avatar
          src={user.profilePic}
          onClick={() => auth.signOut()}
          className="chats__avatar"
        ></Avatar>

        <div className="chats__search">
          <SearchIcon className="chats__searchIcon"></SearchIcon>
          <input placeholder="Friends" type="text"></input>
        </div>
        <ChatBubbleIcon className="chats__chatIcon"></ChatBubbleIcon>
      </div>

      <div className="chats__posts">
        {posts.map(
          ({
            id,
            data: { profilePic, username, timestamp, imageUrl, read },
          }) => (
            <Chat
              key={id}
              id={id}
              username={username}
              timestamp={timestamp}
              imageUrl={imageUrl}
              read={read}
              profilePic={profilePic}
            ></Chat>
          )
        )}
      </div>

      <RadioButtonUncheckedIcon
        className="chats__takePicture"
        onClick={takeSnap}
        fontSize="large"
      ></RadioButtonUncheckedIcon>
    </div>
  );
}

export default Chats;
