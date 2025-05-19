import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/SpeechConversion/HomePage";
import Archives from "../pages/Archive/Archives";
import MainLayout from "../Layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "archive", element: <Archives /> },
    ],
  },
]);
export default router;
