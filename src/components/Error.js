import React from "react";
import "./Error.css";

const Error = (props) => {
  return (
    <div className="backdrop" onClick={props.clear}>
      <div className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <button onClick={props.clear}>Ok</button>
        </footer>
      </div>
    </div>
  );
};

export default Error;
