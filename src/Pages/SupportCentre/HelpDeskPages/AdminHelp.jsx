import React, { useState, useEffect } from 'react';

import Logo from "../../../Static/mytutorlogobigV2.png";

import HelpDeskLandingWrapper from "../Style/HelpDeskLandingWrapper";
import Confetti from "../../../Static/Confetti.jpg";

import { handleTo } from "../../../util";
import { useParams, useHistory } from "react-router-dom";

import { ReactComponent as AdminPicture } from "../../../Static/helpdesk/admin.svg"
import { ReactComponent as StudentPicture } from "../../../Static/helpdesk/student.svg"
import { ReactComponent as TeacherPicture } from "../../../Static/helpdesk/teacher.svg"
import { ReactComponent as PrivacyPicture } from "../../../Static/helpdesk/privacy.svg"
import { ReactComponent as ContactPicture } from "../../../Static/helpdesk/contact.svg"

export default () => {
    const params = useParams();
    const history = useHistory();

    const handleTo = (to) => {
        history.push(to);
    };

    const [queryTopic, setQueryTopic] = useState("default")

    const handleClick = (str) => {
        switch(str){
            case "admin": setQueryTopic("admin"); break;
            case "sudent": setQueryTopic("student"); break;
            case "teacher": setQueryTopic("teacher"); break;
            case "privacy": setQueryTopic("privacy"); break;
            case "contact": setQueryTopic("contact"); break;
        }
    }
    return (
        <HelpDeskLandingWrapper>
            <div className="headerContainer">
                <div className="header">
                    <img src={Logo} alt="deenstrong" onClick={() => handleTo("/")} />
                    <div className="supportCentreWrapper" onClick={() => handleTo("/help")}>
                        <i className="fas fa-question-circle"></i>
                        <div className="supportCentre">Support Centre</div>
                    </div>
                </div>
                <div className="confetti">
                    {/* <img src={Confetti} alt="Confetti" /> */}
                    <h2>Welcome!</h2>
                    <h2>Admin Help Portal</h2>
                </div>
            </div>
        </ HelpDeskLandingWrapper>
    );
}