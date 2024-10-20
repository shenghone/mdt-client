import React, { useState, useEffect } from 'react';

import Logo from "../../Static/mytutorlogobigV2.png";

import HelpDeskLandingWrapper from "./Style/HelpDeskLandingWrapper";
import Confetti from "../../Static/Confetti.jpg";

import { handleTo } from "../../util";
import { useParams, useHistory } from "react-router-dom";

import { ReactComponent as AdminPicture } from "../../Static/helpdesk/admin.svg"
import { ReactComponent as StudentPicture } from "../../Static/helpdesk/student.svg"
import { ReactComponent as TeacherPicture } from "../../Static/helpdesk/teacher.svg"
import { ReactComponent as PrivacyPicture } from "../../Static/helpdesk/privacy.svg"
import { ReactComponent as ContactPicture } from "../../Static/helpdesk/contact.svg"

export default () => {
    const params = useParams();
    const history = useHistory();

    const handleTo = (to) => {
        history.push(to);
    };

    const [queryTopic, setQueryTopic] = useState("default")

    const handleClick = (str) => {
        switch (str) {
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
                    <h2>What can we help you with?</h2>
                </div>
            </div>
            <div className="helpTopicsContainer">
                <div className="topRow">
                    <div className="buttonContainer" onClick={() => handleTo("/help/admin")}>
                        <button className="topicButton">
                            <div className="buttonTitle">
                                Admin
                        </div>
                            <div className="buttonImg">
                                <AdminPicture />
                            </div>
                            <div className="buttonDesc">
                                For all admin related questions, please click here.
                        </div>
                        </button>
                    </div>
                    <div className="buttonContainer" onClick={() => handleTo("/help/teacher")}>
                        <button className="topicButton">
                            <div className="buttonTitle">
                                Teacher
                        </div>
                            <div className="buttonImg">
                                <TeacherPicture />
                            </div>
                            <div className="buttonDesc">
                                For all teacher related questions, please click here.
                        </div>
                        </button>
                    </div>
                    <div className="buttonContainer" onClick={() => handleTo("/help/student")}>
                        <button className="topicButton">
                            <div className="buttonTitle">
                                Student
                        </div>
                            <div className="buttonImg">
                                <StudentPicture />
                            </div>
                            <div className="buttonDesc">
                                For all student related questions, please click here.
                        </div>
                        </button>
                    </div>
                </div>
                <div className="bottomRow">
                    <div className="buttonContainer" onClick={() => handleTo("/help/privacy")}>
                        <button className="topicButton">
                            <div className="buttonTitle">
                                Privacy
                        </div>
                            <div className="buttonImg">
                                <PrivacyPicture />
                            </div>
                            <div className="buttonDesc">
                                For all admin related questions, please click here.
                        </div>
                        </button>
                    </div>
                    <div className="buttonContainer" onClick={() => handleTo("/help/contact")}>
                        <button className="topicButton">
                            <div className="buttonTitle">
                                Contact
                        </div>
                            <div className="buttonImg">
                                <ContactPicture />
                            </div>
                            <div className="buttonDesc">
                                Not the answers you are looking for? Submit a ticket here!
                        </div>
                        </button>
                    </div>
                </div>
            </div>
        </ HelpDeskLandingWrapper>
    );
}