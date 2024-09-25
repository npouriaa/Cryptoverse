import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/LandingPage";
import CryptoCurrencies from "../pages/CryptoCurrencies";

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
        element: <CryptoCurrencies />,
      },
      {
        path: "/compare",
        element: <p>compare</p>,
      },
    ],
  },
]);

export default router;
