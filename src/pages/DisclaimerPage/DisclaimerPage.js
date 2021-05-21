import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./DisclaimerPage.css";
import logo from "../../assets/logo.png";

function DisclaimerPage(props) {
    return (
        <div className="disclaimer-container">
            <NavBar activePage="disclaimer" />
            <div className="container">
                <div className="logo-container">
                    <img src={logo} alt="" />
                </div>
                <div className="text">
                    <h1 className="my-5">The Disclaimer</h1>
                    <span className="py-4">
                        This application is made available solely for personal
                        non-commercial, teaching and educational use. This
                        application is not a medical device and does not and
                        should not be construed to provide health-related or
                        medical advice, or clinical decision support, or to
                        support or replace the diagnosis, or other kind of
                        medical decision. This application does not create a
                        physician-patient relationship between the
                        above-mentioned institutions and any individual. You,
                        the user, agree to use this application under all these
                        terms and conditions. If you do not agree to all of
                        these terms of use, do not use this site.
                        <br />
                        Dr. Joao Andrade and the developers make no
                        representations as to any matter whatsoever, including
                        accuracy, fitness for a particular purpose or
                        non-infringement.
                        <br />
                        Dr Joao Andrade and the developers are not liable to you
                        or anyone else for any decision made or action taken
                        based on reliance upon the information contained on or
                        provided through this website. The use of the
                        information shall be at your own risk.
                    </span>
                </div>
            </div>
        </div>
    );
}

export default DisclaimerPage;
