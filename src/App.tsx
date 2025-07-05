import { Outlet } from "react-router";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div className="max-w-[1320px] mx-auto space-y-5 ">
        <Navbar></Navbar>
        <div className="p-5">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
