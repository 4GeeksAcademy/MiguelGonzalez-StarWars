import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const character = store.singleCharacter;

  useEffect(() => {
    actions.getSingleCharacter(id);
  }, []);

  return (
    <div className="jumbotron">
      <ul>
        <li className="text-white card mx-1 bg-dark" style={{width:"18rem", marginBottom: "10px"}}>Birth year: {character.birth_year}</li>
        <li className="text-white card mx-1 bg-dark" style={{width:"18rem", marginBottom: "10px"}}>Eye color: {character.eye_color}</li>
        <li className="text-white card mx-1 bg-dark" style={{width:"18rem", marginBottom: "10px"}}>Gender: {character.gender}</li>
        <li className="text-white card mx-1 bg-dark" style={{width:"18rem", marginBottom: "10px"}}>Hair Color: {character.hair_color}</li>
        <li className="text-white card mx-1 bg-dark" style={{width:"18rem", marginBottom: "10px"}}>Height: {character.height}</li>
        <li className="text-white card mx-1 bg-dark" style={{width:"18rem", marginBottom: "10px"}}>Mass: {character.mass}</li>
        <li className="text-white card mx-1 bg-dark" style={{width:"18rem", marginBottom: "10px"}}>Name: {character.name}</li>
        <li className="text-white card mx-1 bg-dark" style={{width:"18rem", marginBottom: "10px"}}>Skin Color: {character.skin_color}</li>
      </ul>
    </div>
  );
};
