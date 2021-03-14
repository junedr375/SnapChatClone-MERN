import { Avatar } from "@material-ui/core";
import StopRoundedIcon from "@material-ui/icons/StopRounded";
import React from "react";
import "./Chat.css";

export default function Chat({
  id,
  username,
  timestamp,
  read,
  imageUrl,

  profilePic,
}) {
  return (
    <div className="chat">
      <Avatar className="chat__avatar" src={profilePic}></Avatar>

      <div className="chat__texts">
        <h4>{username}</h4>
        <p>Tap to View - {new Date(timestamp?.toDate()).toUTCString()} </p>
      </div>

      {!read && <StopRoundedIcon className="chat__readIcon" />}
    </div>
  );
}
