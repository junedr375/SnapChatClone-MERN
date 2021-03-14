import { Avatar } from "@material-ui/core";
import StopRoundedIcon from "@material-ui/icons/StopRounded";
import React from "react";
import "./Chat.css";
import ReactTimeago from "react-timeago";
import { selectImage } from "./features/appSlice";
import { useDispatch } from "react-redux";
import { db } from "./firebase";
import { useHistory } from "react-router-dom";

export default function Chat({
  id,
  username,
  timestamp,
  read,
  imageUrl,

  profilePic,
}) {
  const dispatch = useDispatch();
  const history = useHistory();
  const open = () => {
    if (!read) {
      dispatch(selectImage(imageUrl));
      db.collection("posts").doc(id).set(
        {
          read: true,
        },
        { merge: true }
      );
      history.push("/chats/view");
    }
  };
  return (
    <div onClick={open} className="chat">
      <Avatar className="chat__avatar" src={profilePic}></Avatar>

      <div className="chat__texts">
        <h4>{username}</h4>
        <p>
          {!read && "Tap to View - "}
          <ReactTimeago
            date={new Date(timestamp?.toDate()).toUTCString()}
          ></ReactTimeago>{" "}
        </p>
      </div>

      {!read && <StopRoundedIcon className="chat__readIcon" />}
    </div>
  );
}
