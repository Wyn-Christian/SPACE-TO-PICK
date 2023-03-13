import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h1>Error Root Page</h1>,
    children: [
      {
        errorElement: <h1>Error Element Page</h1>,
        children: [
          {
            index: true,
            element: <h1>Index Element of Root</h1>,
          },
        ],
      },
    ],
  },
]);

export default router;
