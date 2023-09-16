import { Toaster } from "react-hot-toast"
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from "./pages/home/Home";
import ExerciseDetail from "./pages/exercises/ExerciseDetail";
import { DataProvider } from "./context/DataContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/exercisedetail",
    element: <ExerciseDetail />,
  },
]);

function App() {
  return (
    <>
      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </>
  )
}

export default App
