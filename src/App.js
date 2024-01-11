import Head from './Components/Head';
import Body from './Components/Body';
import Footer from './Components/Footer';
import './App.css';
import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
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
