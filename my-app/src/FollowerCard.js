import React from "react";


const FollowerCard = props => {

  return (
    <div className="follower-card">
      <h1>Github Handle: {props.name}</h1>
      <img 
        src={props.src} 
        width="30%" 
        alt="My Avatar">
      </img>
      <div className="center">
        <a className="button" href={props.github}> Github Profile </a>
      </div>
    </div>
  )
}
export default FollowerCard;