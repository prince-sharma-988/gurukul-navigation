
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Layout/Layout";
import Event from "./Pages/Event";
import Team from "./Pages/Team";
import Login from "./component/Login";  

import PageNotFound from "./Pages/Pagenotfound"
import College from "./Pages/College";

function App() {

  const Router = createBrowserRouter([
    {
      path:'/',
      element:<Layout />,
      children:[
        {
          path:'/',
          element:<Home />
        },{
         path:'Home',
          element:<Home />},

        {
          path:'login',
          element:<Login />
        },
        {
          path:'college',
          element:<College />
        },
        {
          path:'Team',
          element:<Team />
        },
        {
          path:'Event',
          element:<Event />
        },
      ]
    },
    {
      path:'*',
      element:<PageNotFound />
    }
  ]);

  return (
    <RouterProvider router={Router} />
  )
}

export default App
