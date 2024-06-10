import Layout from "./routes/Layout/index";
import HomePage from "./routes/HomePage/index";
import ListPage from "./routes/ListPage/index";

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import SinglePage from "./routes/SinglePage";
import ProfilePage from "./routes/ProfilePage";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/list",
          element: <ListPage />
        },
        {
          path: "/:id",
          element: <SinglePage />
        },
        {
          path: "/profile",
          element: <ProfilePage />
        }
      ]
    } 
  ]);

  return ( 
    <RouterProvider router={router}/>
  );
}

export default App;