import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { CardPersonaje } from "../component/cardPersonaje";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
		{store.characters.map((character) => (
			      <CardPersonaje
				  name={character.name}
				  gender={character.gender}
				  hair_color={character.hair_color}
				/>
		 ) )}
    </div>
  );
};
