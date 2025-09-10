import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Create the router configuration using createBrowserRouter for better performance
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

// Router component that provides the router context
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
