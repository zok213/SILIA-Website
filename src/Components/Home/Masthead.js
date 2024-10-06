import React from "react";
import home from '../../Assets/home.png';
function Masthead() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center home-gradient">
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ flexDirection: "column" }}
      >
        <img className="bg" src={home} alt="" />
      </div>
    </div>
  );
}

export default Masthead;
