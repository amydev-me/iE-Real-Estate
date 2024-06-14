import { Layout, RequireAuth } from "./routes/Layout/index";
import HomePage from "./routes/HomePage/index";
import ListPage from "./routes/ListPage/index";

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import SinglePage from "./routes/SinglePage";
import ProfilePage from "./routes/ProfilePage";
import Login from "./routes/LoginPage";
import Register from "./routes/RegisterPage/Register";
import ProfileUpdatePage from "./routes/ProfileUpdatePage/profileUpdatePage";
import NewPostPage from "./routes/newPostPage";
import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loaders";


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
          element: <ListPage />,
          loader: listPageLoader,
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePageLoader
        },
        
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        }
      ]
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          loader: profilePageLoader
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />
        },
        {
          path: "/post/add",
          element: <NewPostPage />
        }
      ]
    }
  ]);

  return ( 
    <RouterProvider router={router}/>
  );
}

export default App;