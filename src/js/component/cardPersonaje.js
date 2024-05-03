import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

export const CardPersonaje = (props) => {
   // const [title, setTitle] = useState ("Personajes") 
  return (
    <div className="card" style={{width: "18rem"}}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
            {props.hair_color}{props.gender}
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
