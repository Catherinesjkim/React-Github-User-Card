import React from "react";

const FollowerCard = props => {
  return (
    <div className="user-card">
      <img src={props.src} width="30%" alt="My Avatar"></img>
      <h1>{props.name}</h1>
    </div>
  )
}
export default FollowerCard;