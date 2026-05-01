import { Outlet } from "react-router";
import Dnavbar from "../Component/Common/Dnavbar";
import Dfooter from "../Component/Common/Dfooter";
import Sidebar from "../Component/Common/Sidebar";


export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#f0f7ff]">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Dnavbar />
      </div>

      {/* Fixed Sidebar */}
      <div className="fixed left-0 top-[60px] bottom-0 w-1/5 bg-[#f0f7ff] overflow-hidden">
        <Sidebar />
      </div>

      {/* Page content */}
      <main className="ml-[20%] pt-[60px] p-7">
        <Outlet />
        
      </main>
    </div>
  );
}