import React from "react";
import { Col, Card } from "reactstrap";
import GitHubCalendar from 'react-github-calendar';

const FollowerCard = props => {

  return (
    <Col lg="6">
      <Card className="follower-card" width="50%">
        <h1>{props.name}</h1>
        <div className="imageDiv">
          <img src={props.src} alt="My Avatar"></img>
        </div>
        <div className="center">
          <a className="button" href={props.github}>
            {" "}
            Github Profile{" "}
          </a>
        </div>
        <div>
          <GitHubCalendar username={props.name} />
        </div>
      </Card>
    </Col>
  );
}
export default FollowerCard;