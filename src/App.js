import './App.css';
import { RouterProvider } from "react-router-dom";
import useRoute from "./utils/useRoute";

function App() {
  const appRoute = useRoute();
  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
    
  );
}


export default App;
