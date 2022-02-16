import React, { Component } from "react";
import Question from "../../components/Question/Question";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./QuizPage.css";
import messages from "../../messages";

import male from "../../assets/male.png";
import glycemia from "../../assets/glycemia.png";
import aspects from "../../assets/NIHSS.png";
import acm from "../../assets/Cardio.png";
import NavBar from "../../components/NavBar/NavBar";



function QuizPage(props) {
    let form = React.createRef();
    let {history, lang} = props;
    let onClick = () => {
        if(form.current.reportValidity()){
            history.push("/result");
        }
        
    };
    return (
        <div className="quiz-container">
            <NavBar />
            <form ref={form} onSubmit={e => e.preventDefault()} className="inner-quiz">
                <div className="quiz">
                    <Question question="male" src={male} />
                    <Question question="glycemia" src={glycemia} minRange="1" maxRange="999" number />
                    <Question question="nihss" src={aspects} minRange="1" maxRange="42" number/>
                    <Question question="cardio" src={acm} />
                     
                    
                    <FormattedMessage id="quiz.click"></FormattedMessage>
                    
                    <input
                        type="submit"
                        className="evaluate my-5"
                        to="/result"
                        onClick={onClick}
                        value={messages[lang].evaluate}
                    >                                        
                    </input>
                    {/* <Link className="evaluate my-5" to='/result'><FormattedMessage id='evaluate'></FormattedMessage></Link> */}
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        lang: state.locale.lang
    };
};

export default connect(mapStateToProps)(QuizPage);