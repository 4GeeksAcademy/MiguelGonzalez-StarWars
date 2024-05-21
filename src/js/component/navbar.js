import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-dark mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1 text-white">Star Wars</span>
      </Link>
      <div className="ml-auto">
        <div className="dropdown dropleft"> 
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites {store.favorites?.length}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {store.favorites?.map((favorite, index) => (
              <li key={index}>
                <a className="dropdown-item" href="#">
                  {favorite}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

