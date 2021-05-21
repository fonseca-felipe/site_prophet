import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";
import "./ResultPage.css";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import portuguese from "../../assets/Portugues.png";
import english from "../../assets/English.png";
import spanish from "../../assets/Spanish.png";

class ResultPage extends Component {
    constructor(props, context) {
        
        super(props, context);
        let table = null;
        if(props.lang == 'en'){
            table = english;
        }else if(props.lang == 'pt'){
            table = portuguese;
        }else{
            table = spanish;
        }

        this.state = {
            showModal: false,
            table,
        };
    }
    openModal = event => {
        event.preventDefault();
        this.setState({ showModal: true });
    };
    closeModal = () => {
        this.setState({ showModal: false });
    };
    render() {
        const { probability, score, odds, hasDisabled } = this.props;
        return (
            <div className="result-container">
                <NavBar />
                <div className="result-inner-container">
                    <div className="results">
                        <div className="panel large centralized my-5">
                            <FormattedMessage id="result" />
                        </div>
                        {/* <div className="result-item my-5">
                            <div className="panel large">
                                <FormattedMessage id="total" />
                            </div>
                            <div className="result-value">{score}</div>
                        </div>
                        <div className="result-item my-5">
                            <div className="panel large">
                                <FormattedMessage id="odd" />
                            </div>
                            <div className="result-value">
                                {odds.toFixed(2)}
                            </div>
                        </div> */}
                        <div className="result-item my-5">
                            <div className="panel large green">
                                <FormattedMessage id="likelihood" />
                            </div>
                            <div className="result-value red">
                                {(probability * 100).toFixed(0)}%
                            </div>
                        </div>
                        <div className="alert alert-success green-font">
                            The accuracy of the derivation model based on 1,000 bootstrap replicates was 90.3%. The calibration was estimated by the Brier score (0.122) and the Hosmer-Lemeshow goodness-of-fit test (chi-square 8.76, df 8, p = 0.36). Cox-Snell and Nagelkerke were R² 0.07 and 0.15 respectively. Area Under Curve of 0.71 (SE 0.036, 95% CI 0.65-0.79). <br/>


                            Considering the PROpHET PC grading score (0 to 5 points), each group point represents an odds ratio 1.41 (95% CI 1.2-1.5, p &lt; 0.001) for HT. The AUC of the PROpHET PC (0 to 5 points) was 0.713 (SE 0.03, 95% CI 0.65-0.78).
                        </div>
                        {hasDisabled && (
                            <div className="alert warning">
                                <FormattedHTMLMessage id="result.warning" />
                            </div>
                        )}
                        {score >= 3 && (
                            <div className="alert alert-danger">
                                <FormattedHTMLMessage id="result.alert" />{" "}
                                <br />
                                <Button
                                    variant="info"
                                    className="px-5"
                                    onClick={this.openModal}
                                >
                                    Info
                                </Button>
                                <Modal
                                    size="lg"
                                    show={this.state.showModal}
                                    onHide={this.closeModal}
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title>                                            
                                        </Modal.Title>
                                    </Modal.Header>

                                    <Modal.Body>
                                    <div class="alert alert-secondary" role="alert">
                                        <FormattedHTMLMessage id="result.alert-modal" />
                                    </div>
                                        
                                        <img
                                            className="table"
                                            src={this.state.table}
                                            alt=""
                                        />
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button
                                            variant="secondary"
                                            onClick={this.closeModal}
                                        >
                                            Close
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        )}
                        <Link
                            to="/"
                            type="button"
                            className="btn btn-primary btn-lg btn-block btn-primary"
                        >
                            Back
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    let hasDisabled = false;
    console.log("statetopros");

    let questions_score = state.questions.reduce((obj, question) => {
        if (state.answers[question].disabled) {
            obj[question] = 0;
            hasDisabled = true;
        } else {
            obj[question] = state.answers[question].value;
        }
        return obj;
    }, {});    

    let g =
        -4.178 
        + 0.6 *  questions_score.male
        + 0.004 * questions_score.glycemia 
        + 0.077 * questions_score.nihss 
        + 1.282 * questions_score.cardio;
    let probability = 1 / (1 + Math.pow(Math.E, -g));
    console.log(probability)    
    return {
        probability,
        // score,
        // odds: or,
        hasDisabled,
        lang: state.locale.lang
    };
};
export default connect(mapStateToProps)(ResultPage);
