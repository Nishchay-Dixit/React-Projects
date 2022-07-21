import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
    return (
        <>
            <Header companyname="My-App" />
            <Outlet />
            <Footer companyname="My-App" />
        </>
    );
}

export default Layout;