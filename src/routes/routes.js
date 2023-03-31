import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/home";
import Characters from "../pages/characters/characters";
import Episodes from "../pages/episodes/episodes";
import Locations from "../pages/locations/locations";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/personagens",
        element: <Characters />,
      },
      {
        path: "/episodios",
        element: <Episodes />,
      },
      {
        path: "/localizacoes",
        element: <Locations />,
      },
    ],
  },
]);
