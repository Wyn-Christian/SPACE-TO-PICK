import { createBrowserRouter } from "react-router-dom";

import Root from "./routes/Root";

// Pages
import Home from "./routes/Home";
import ErrorPage from "./routes/ErrorPage";
import SamplePage from "./routes/SamplePage";
import Login from "./routes/Login";
import Listings, { listingsLoader } from "./routes/Listings";
import ListingDetail, {
  listingDetailLoader,
} from "./routes/ListingDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "listings",
            loader: listingsLoader,
            element: <Listings />,
          },
          {
            path: "listing/:id",
            loader: listingDetailLoader,
            element: <ListingDetail />,
          },
          {
            path: "log-in",
            element: <Login />,
          },
          {
            path: "sign-up",
            element: <SamplePage title="Sign Up" />,
          },
          {
            path: "admin",
            children: [
              {
                index: true,
                element: <SamplePage title="Admin Index" />,
              },
              {
                path: "listings",
                element: <SamplePage title="Admin Listings" />,
              },
              {
                path: "Sellers",
                element: <SamplePage title="Admin Sellers" />,
              },
              {
                path: "customers",
                element: <SamplePage title="Admin Customers" />,
              },
              {
                path: "account",
                element: <SamplePage title="Admin Account" />,
              },
            ],
          },
          {
            path: "seller",
            children: [
              {
                index: true,
                element: <SamplePage title="Seller Dashboard" />,
              },
              {
                path: "Listings",
                element: <SamplePage title="Seller Listings" />,
              },
              {
                path: "account",
                element: <SamplePage title="Seller Account" />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
