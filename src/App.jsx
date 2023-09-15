import { Toaster } from "react-hot-toast"
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from "./pages/home/Home";
import Exercise from "./pages/exercise/Exercise";
import ExerciseDetail from "./pages/exercise/ExerciseDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/exercise",
    element: <Exercise /> ,
  },
  {
    path: "/exercise/:id",
    element: <ExerciseDetail /> ,
  },
]);

function App() {
  return (
    <>
      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
      {/* <Header /> */}
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </>
  )
}

export default App
