import { RouterProvider, createBrowserRouter } from "react-router-dom";
import router from "./router";


export default function App() {
  
    return (
    <div className="bg-[#ECFDF5] min-h-screen text-gray-800">
      <RouterProvider router={router} />;
    </div>
    );
}