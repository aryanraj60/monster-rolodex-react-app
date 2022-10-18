import { Component } from "react";
import "./card-list.styles.css";
import CardContainer from "../card-container/card-container.component";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((currentMonster) => {
        const { name, id, email } = currentMonster;
        return <CardContainer id={id} name={name} email={email} />;
      })}
    </div>
  );
};

export default CardList;
