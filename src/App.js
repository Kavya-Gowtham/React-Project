import React from "react";
import { createRoot } from "react-dom/client";
import "../index.css"
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/**All the children according to route come into Outlet and replace component based on route*/}
      <Outlet />
    </div>
  );
};
// here we are creating a configuration where we provide paths
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      }
    ],
    errorElement: <Error />
  },
  
]);


const root = createRoot(document.getElementById("root"));
//providing configuration to render
root.render(<RouterProvider router={appRouter} />);
