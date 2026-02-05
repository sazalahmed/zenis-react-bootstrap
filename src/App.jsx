import MainHeader from "./components/headerArea/MainHeader";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import "./assets/css/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <MainHeader />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
