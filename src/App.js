import Login from './pages/login/login';
import Register from './pages/register/register';
import Leftbar from './Component/leftbar/Leftbar';
import Rightbar from './Component/rightbar/Rightbar';
import Navbar from './Component/navbar/Navbar';
import Home from './pages/home/Home';
import Profile from './pages/profile/profile'

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
//import { isDOMComponent } from 'react-dom/test-utils';



const Layout = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Leftbar />
        <div style={{flex:6}}
        ><Outlet />
        </div>
        
        <Rightbar />
      </div>
    </div>
  );
}



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>

      },

      { 
        path:"/profile/:id",
        element:<Profile/> 
      }
    ]

  }
  ,
  {
    path: "/login",
    element: <Login/>
  },

  {
    path: "/register",
    element: <Register/>
  },
]);


function App() {
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;
