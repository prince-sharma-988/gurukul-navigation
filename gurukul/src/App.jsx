
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Layout/Layout";
import Event from "./Pages/Event";
import About from "./Pages/About";
import Login from "./Pages/Login";  
import Register from "./Pages/Resgister";
import Navigation from "./Pages/Navigation";
import PageNotFound from "./Pages/Pagenotfound"

function App() {

  const Router = createBrowserRouter([
    {
      path:'/',
      element:<Layout />,
      children:[
        {
          path:'home',
          element:<Home />
        },
        {
          path:'register',
          element:<Register />
        },
        {
          path:'login',
          element:<Login />
        },
        {
          path:'navigation',
          element:<Navigation />
        },
        {
          path:'About',
          element:<About />
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
