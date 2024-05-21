import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { CardPersonaje } from "../component/cardPersonaje";
import { Context } from "../store/appContext";
import { CardPlanetas } from "../component/cardPlanetas";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5 ">
      <h2 className="text-white">Characters</h2>
      <div className="row flex-row flex-nowrap overflow-auto ms-2">
        {store.characters.map((character, index) => (
          <CardPersonaje
            name={character.name}
            gender={character.gender}
            hair_color={character.hair_color}
            id={index + 1}
          />
        ))}
      </div>
      <h2 className="text-white">Planets</h2>
      <div className="row flex-row flex-nowrap overflow-auto ms-2">
        {store.planets.map((planet, index) => (
          <CardPlanetas
            name={planet.name}
            population={planet.population}
            gravity={planet.gravity}
            id={index + 1}
          />
        ))}
      </div>
    </div>
  );
};
