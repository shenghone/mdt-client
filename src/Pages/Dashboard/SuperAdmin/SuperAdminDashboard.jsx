import React, { useState, useRef, useEffect } from "react";
import { NavItem, SideNav } from "../../../Components/SideNav/SideNav";
import Footer from "../../../Components/Footer/Footer";
import { ReactComponent as ArchiveIcon } from "../../../Static/acv.svg";
import { ReactComponent as DashbaordIcon } from "../../../Static/Icons/bar-chart2.svg";
import { ReactComponent as RequestsIcon } from "../../../Static/Icons/mail-unread.svg";
import AdminList from "./AdminList.js";
import SuperAdminWrapper from "./superAdminWrapper";

export default () => {

    return (
        <SuperAdminWrapper>
            <div className="sideNavContainer">
                <SideNav userName="Super Admin">
                    <NavItem linkTo={"/superadmin"} icon={<i class="fas fa-chart-bar"></i>} title="Dashboard" />
                    <NavItem linkTo={"/superadmin/archived"} icon={<i class="fas fa-archive"></i>} title="Archive" />
                    <NavItem linkTo={"/superadmin/requests"} icon={<i class="fas fa-envelope-open-text"></i>} title="Requests" />
                </SideNav>
            </div>
            <div className="mainContainer">
                <div className="titleContainer">
                    Super Admin Dashboard
                </div>
                <div className="contentContainer">
                    <div className="tableContainer">

                    </div>
                    <div className="infoContainer">

                    </div>
                </div>
                <div className="footerContainer">
                    <Footer />
                </div>
            </div>
        </SuperAdminWrapper>
    )
}