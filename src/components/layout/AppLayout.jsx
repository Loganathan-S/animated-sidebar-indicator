import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const AppLayout = () => {
  return (
    <>
      <p className="bg-dark text-white p-2">HEADER</p>
      <div className="container min-vh-100 ">
        <div className="row mt-5">
          <div className="col-sm-3 border p-3 bg-secondary text-white">
            <Sidebar />
          </div>
          <div className="col-sm-9 p-3 border ">
            <Outlet />
          </div>
        </div>
      </div>
      <p className="bg-dark text-white p-2">FOOTER</p>
    </>
  );
};

export default AppLayout;
