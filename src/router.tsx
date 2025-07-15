import { createBrowserRouter } from "react-router";
import Home from "./modules/home/pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export { router };
