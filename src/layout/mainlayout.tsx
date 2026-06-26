import { Outlet } from "react-router";
import Header from "../components/header";
import BottomBar from "../components/BottomBar";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <BottomBar />
    </div>
  );
};

export default MainLayout;
