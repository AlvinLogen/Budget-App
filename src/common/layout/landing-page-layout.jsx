import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header-page/header";
import Footer from "../footer-page/footer";

const LandingPageLayout = () => {
    return (
        <div className="font-dmsans">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default LandingPageLayout;