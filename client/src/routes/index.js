import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RegisterUser from "../pages/RegisterUser";
import CheckEmailPage from "../pages/CheckEmailPage";
import CheckPasswordPage from "../pages/CheckPasswordPage";
import Home from "../pages/Home";
import MessagePage from "../components/MessagePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "register",
        element: <RegisterUser />,
      },
      {
        path: "email",
        element: <CheckEmailPage />,
      },
      {
        path: "password",
        element: <CheckPasswordPage />,
      },

      {
        path: "",
        element: <Home />,
        children: [
          {
            path: ":userId",
            element: <MessagePage />,
          },
        ],
      },
    ],
  },
]);

export default router;
