import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
    return (
        <>
            <Header companyname="Faculty-List" />
            <div className='container-fluid'>
            <Outlet />
            </div>
        </>
    );
}

export default Layout;