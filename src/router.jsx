import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import About from "./About";
import Details from "./Details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>یک خطای غیرمنتظره رخ داد!</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "users/:id",
        element: <Details />,
      },
    ],
  },
]);
