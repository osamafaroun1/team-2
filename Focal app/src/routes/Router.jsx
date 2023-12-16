import { businessroutes } from "../modules/BusinessOwner/routers/route";
import Home  from "../pages/Home/Home";
import PageJobLogin  from "../pages/PageJobLogin/PageJobLogin";
import Register  from "../pages/Register/Register";
import { jopSeekerRoutes } from "../modules/JobSeeker/routers/jopSeekerRoutes";
import App from "./../App";


export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      ...businessroutes,
      ...jopSeekerRoutes,
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/login",
        element: <PageJobLogin />,
        
      },
      {
        path: "/register",
        element: <Register />,
        
      },

    ],
  },
];
