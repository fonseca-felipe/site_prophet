import React, { Component } from "react";
import "./Question.css";
import classNames from "classnames";
import { connect } from "react-redux";
import { FormattedHTMLMessage } from "react-intl";
import messages from "../../messages";
import { Modal, Button } from "react-bootstrap";

class Question extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            showModal: false
        };
    }
    openModal = () => {
        this.setState({ showModal: true });
    };
    closeModal = () => {
        this.setState({ showModal: false });
    };
    render() {
        const {
            question,
            value,
            disabled,
            changeValue,
            changeDisabled,
            lang,
            number = false,
            minRange = 0,
            maxRange = 999,
        } = this.props;
        let classes = classNames({
            switch: true,
            disabled: disabled
        });

        return (
            <div className="my-4 question">
                <img src={this.props.src} alt="" />
                <div onClick={this.openModal} className="texto">
                    <span>{messages[lang][question]}</span>
                </div>
                <div className="group">
                    {!number && (
                        <label className={classes}>
                            <input
                                type="checkbox"
                                defaultChecked={value}
                                onChange={evt =>
                                    changeValue(question, value == 0 ? 1 : 0)
                                }
                            />
                            <span className="slider" />
                        </label>
                    )}
                    {number && (
                        <input
                            type="number"
                            // inputmode="numeric"
                            // pattern="[0-9]*"
                            className="number-input"
                            // size="3"
                            max={maxRange}
                            min={minRange}
                            required
                            disabled={disabled}
                            onChange={evt =>
                                changeValue(question, +evt.target.value)
                            }
                        />
                    )}
                    <label
                        className="checkmark-container"
                        onChange={() => changeDisabled(question)}
                    >
                        <span className="big">{messages[lang]['not_available']}</span>
                        <span className="small">N/A</span>
                        <input type="checkbox" defaultChecked={disabled} />
                        <span className="checkmark" />
                    </label>
                </div>
                <Modal
                    size="lg"
                    show={this.state.showModal}
                    onHide={this.closeModal}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>{messages[lang][question]}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormattedHTMLMessage id={question + ".description"} />                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        value: state.answers[props.question].value,
        disabled: state.answers[props.question].disabled,
        lang: state.locale.lang
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeValue: (question, value) => {
            dispatch({ type: "CHANGE_VALUE", question, value });
        },
        changeDisabled: (question, value) => {
            dispatch({ type: "CHANGE_DISABLED", question, value });
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Question);
