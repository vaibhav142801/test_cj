import React from "react";
import { Card } from "react-bootstrap";
import "./totalcart.css";

const TotalCart = ({ todos, title }) => {
  return (
    <div>
      <Card
        bg={"light"}
        key={"light"}
        text={"dark"}
        style={{ minWidth: "18rem" }}
        className="mb-2"
      >
        <Card.Body>
          <Card.Text className="cardContant">{todos} task</Card.Text>
          <hr />
          <Card.Title className="cardtitle"> {title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TotalCart;
