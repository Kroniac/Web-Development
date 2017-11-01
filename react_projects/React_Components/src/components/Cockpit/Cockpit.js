import React from "react";
import cass from "./Cockpit.css";

const Cockpit = props => {
  const classes = [];

  if (props.persons.length < 3) {
    classes.push(cass.red);
  }

  if (props.persons.length < 2) {
    classes.push(cass.bold);
  }

  let btnClass = "";
  if (props.showPersons) {
    btnClass = cass.Red;
  }
  return (
    <div className={cass.Cockpit}>
      <br />
      <br />
      <h1>{props.title} </h1>
      <button className={btnClass} onClick={props.clicked}>
        Show Details
      </button>

      <p className={classes.join(" ")}>Look, I'm changing!!</p>
    </div>
  );
};

export default Cockpit;
