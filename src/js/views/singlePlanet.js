import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const planet = store.singlePlanet;

  useEffect(() => {
    actions.getSinglePlanet(id);
  }, []);

  return (
    <div className="jumbotron">
      <ul>
        <li className="text-white card mx-1 bg-dark" style={{width:"18rem", marginBottom: "10px"}}>Climate: {planet.climate}</li>
        <li className="text-white card mx-1 bg-dark" style={{width:"18rem", marginBottom: "10px"}}>Diameter: {planet.diameter}</li>
        <li className="text-white card mx-1 bg-dark" style={{width:"18rem", marginBottom: "10px"}}>Gravity: {planet.gravity}</li>
        <li className="text-white card mx-1 bg-dark" style={{width:"18rem", marginBottom: "10px"}}>Population: {planet.population}</li>
        <li className="text-white card mx-1 bg-dark" style={{width:"18rem", marginBottom: "10px"}}>Terrain: {planet.terrain}</li>
        <li className="text-white card mx-1 bg-dark" style={{width:"18rem", marginBottom: "10px"}}>Rotation Period: {planet.rotation_period}</li>
        <li className="text-white card mx-1 bg-dark" style={{width:"18rem", marginBottom: "10px"}}>Name: {planet.name}</li>
        <li className="text-white card mx-1 bg-dark" style={{width:"18rem", marginBottom: "10px"}}>Orbital Period: {planet.orbital_period}</li>
      </ul>
    </div>
  );
};
