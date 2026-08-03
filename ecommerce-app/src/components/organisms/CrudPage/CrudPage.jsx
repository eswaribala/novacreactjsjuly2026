import SideBar from "../SideBar/SideBar";
import MainContent from "../MainContent/MainContent";
import { Outlet } from "react-router-dom";
function CrudPage() {
    return (
        <div className="application-shell">
           
            <div className="dashboard-layout">
                <SideBar />
                <MainContent> <Outlet /></MainContent>
            </div>
        </div>
    );
}
export default CrudPage;