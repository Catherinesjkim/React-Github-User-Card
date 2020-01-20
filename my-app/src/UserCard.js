import React from "react";

const UserCard = props => {
  return (
    <div className="user-card">
      <img src={props.img} width="30%" alt="My Avatar"></img>
      <h2>{props.name}</h2>
      <span>Github Handle: </span>
      <a href={props.url}>{props.login}</a>
      <p> Total Followers: {props.followers}</p>
      <p>Total Repos: {props.repos}</p>
      <p> Locations: {props.location}</p>
    </div>
  )
}
export default UserCard;