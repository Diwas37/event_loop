import Home from "./pages/home";
import Events from "./pages/events";
import Checkout from ".pages/checkout"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/events/:eventId",
      element: <Events />,
    },
    {
      path: "/",
      elements: <Checkout />
    }
  ]);
  return <RouterProvider router={router} />;
};

export default App;
