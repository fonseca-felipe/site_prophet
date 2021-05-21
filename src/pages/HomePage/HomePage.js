import React from "react";
import { connect } from "react-redux";
import logo from "../../assets/logo_prophet_pc.png";
import { withRouter } from "react-router-dom";
import "./HomePage.css";
import NavBar from "../../components/NavBar/NavBar";

function HomePage(props) {
    const { history, changeLanguage } = props;
    let onClick = lang => {
        changeLanguage(lang);
        history.push("/quiz");
    };

    return (
        <div>
            <NavBar activePage="home" />
            <div className="logo my-5">
                <img src={logo} alt="" />
            </div>

            <div className="container buttons-lang">
                <div className="row">
                    <div className="col-md">
                        <button
                            onClick={() => {
                                onClick("en");
                            }}
                            className="btn btn-warning btn-lg btn-block my-2"
                        >
                            English
                        </button>
                    </div>
                    <div className="col-md">
                        <button
                            onClick={() => {
                                onClick("pt");
                            }}
                            className="btn btn-primary btn-lg btn-block my-2"
                        >
                            Português
                        </button>
                    </div>
                    <div className="col-md">
                        <button
                            onClick={() => {
                                onClick("es");
                            }}
                            className="btn btn-success btn-lg btn-block my-2"
                        >
                            Español
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        changeLanguage: lang => {
            dispatch({ type: "CHANGE_LOCALE", lang });
        }
    };
};

export default withRouter(
    connect(
        () => ({}),
        mapDispatchToProps
    )(HomePage)
);
