const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      characters: [

      ],
      singleCharacter: {
        
      },
      planets: [

      ],
      singlePlanet: {
        
      },
      favorites: [

      ]
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      getCharacters: () => {
        fetch("https://swapi.dev/api/people/")
          .then((response) => {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            // Read the response as JSON
            return response.json();
          })
          .then((data) => {
            // Do stuff with the JSONified response
            setStore({characters:data.results})
            console.log(data.results)
          })
          .catch((error) => {
            console.log("Looks like there was a problem: \n", error);
          });
      },
      getSingleCharacter: (id) => {
        fetch(`https://swapi.dev/api/people/${id}`)
          .then((response) => {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            // Read the response as JSON
            return response.json();
          })
          .then((data) => {
            setStore({singleCharacter:data})
          })
          .catch((error) => {
            console.log("Looks like there was a problem: \n", error);
          });
      },
      getPlanets: () => {
        fetch("https://swapi.dev/api/planets/")
          .then((response) => {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            // Read the response as JSON
            return response.json();
          })
          .then((data) => {
            // Do stuff with the JSONified response
            setStore({planets:data.results})
            console.log(data.results)
          })
          .catch((error) => {
            console.log("Looks like there was a problem: \n", error);
          });
      },
      getSinglePlanet: (id) => {
        fetch(`https://swapi.dev/api/planets/${id}`)
          .then((response) => {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            // Read the response as JSON
            return response.json();
          })
          .then((data) => {
            setStore({singlePlanet:data})
          })
          .catch((error) => {
            console.log("Looks like there was a problem: \n", error);
          });
      },
      favoriteCheck: (name) => {
        const favorites = getStore().favorites;
        if (favorites.indexOf(name) !== -1) {
          getActions().removeFavorite(name);
        }
        getActions().addFavorite(name);
      },
      addFavorite: (name) => {
        setStore({ favorites: getStore().favorites.concat(name) });
      },
      removeFavorite: (name) => {
        setStore({
          favorites: getStore().favorites.filter((element) => element !== name),
        })}
    },
  };
};

export default getState;
