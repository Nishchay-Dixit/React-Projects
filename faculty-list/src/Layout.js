import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
    return (
        <>
            <Header companyname="Faculty-List" />
            <Outlet />
        </>
    );
}

export default Layout;