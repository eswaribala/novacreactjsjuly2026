import MainContent from "../MainContent/MainContent";
import SideBar from "../SideBar/SideBar";
import { Outlet } from "react-router-dom";

function HomeScreen() {
  return (
    <div className="application-shell">
    <div className="flex min-h-[calc(100vh-180px)] w-full items-stretch">
      <SideBar/>
      <MainContent><Outlet /></MainContent>

    </div>
    </div>
  );
}
export default HomeScreen;