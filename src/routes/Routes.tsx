import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/LandingPage";
import Coins from "../pages/Coins";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/coins",
        element: <Coins />,
      },
      {
        path: "/compare",
        element: <p>compare</p>,
      },
    ],
  },
]);

export default router;
