import Head from "./Head";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Filter from "./Filter";
import { Provider } from "react-redux";
import store from "../utils/store";

const AppLayout = () => {


  return (
    <Provider store={store}>
     
      <div className="flex flex-col min-h-screen">
      <Head/>
      <Filter/>
      <Outlet/>
      <Footer />
      </div>
      
   </Provider>
  );
};

export default AppLayout;