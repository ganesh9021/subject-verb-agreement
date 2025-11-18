import React, { useEffect, useState } from "react";
import data from "../supportingfiles/svaJSON.json";
import { Table } from "react-bootstrap";
import { Button } from "@mui/material";
import "../css/midcontent.css";
import Modal from "react-bootstrap/Modal";
import { Step2MidContent } from "./Step2MidContent";
import { Step3MidContent } from "./Step3MidContent";
import { useTranslation } from "react-i18next";

const Midcontent = () => {
  const { t } = useTranslation();
  const [randomIndex, setRandomIndex] = useState(0);
  const [clickedWordArray, setClickedWordArray] = useState([]);
  const [subjectCount, setSubjectCount] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [nextDisable, setNextDisable] = useState(true);
  const [incorrectAttempt, setIncorrectAttempt] = useState(0);
  const [step, setStep] = useState(1);
  const [feedbackObj, setFeedbackObj] = useState({
    feedbackTitle: "",
    description: "",
    remedy: "",
  });

  useEffect(() => {
    let subjectArray = data[randomIndex].sentenceArray.filter((item) =>
      item.includes("_subject")
    );
    setSubjectCount(subjectArray.length);
    const redElements = document.getElementsByClassName("red");
    const yellowElements = document.getElementsByClassName("yellow");
    const greenElements = document.getElementsByClassName("green");
    // Loop through the HTMLCollection and set the opacity for each element
    for (let i = 0; i < redElements.length; i++) {
      redElements[i].style.opacity = "0.2"; // Adjust opacity value as needed
      yellowElements[i].style.opacity = "0.2";
      greenElements[i].style.opacity = "0.2";
    }
  }, [randomIndex]);

  const handleWordClick = (ClickedWord) => {
    if (
      document.getElementById(ClickedWord).style.background ==
      "rgb(127, 245, 249)"
    ) {
      document.getElementById(ClickedWord).style.background = "";
      setClickedWordArray(
        (prev) =>
          prev.includes(ClickedWord)
            ? prev.filter((word) => word !== ClickedWord) // Remove the ClickedWord from the array
            : [...prev, ClickedWord] // Add the ClickedWord if it's not already in the array
      );
    } else {
      document.getElementById(ClickedWord).style.background =
        "rgb(127, 245, 249)";
      setClickedWordArray((prev) => [...prev, ClickedWord]);
    }
  };

  const handleSubmit = () => {
    setShowFeedback(true);
    let subjectArray = data[randomIndex].sentenceArray.filter((item) =>
      item.includes("_subject")
    );
    let finalResult = compareArrays(clickedWordArray, subjectArray);

    // Remove all previous blinking lights
    clearAllBlinking();

    if (finalResult === true) {
      setNextDisable(false);

      let ele = document.getElementsByClassName("green");
      for (let i = 0; i < ele.length; i++) {
        ele[i].classList.add("blinkGreen");
      }

      for (let i = 0; i < subjectArray.length; i++) {
        document.getElementById(subjectArray[i]).style.background =
          "rgb(154, 213, 91)";
        document.getElementById(subjectArray[i]).style.border =
          "2px solid rgb(72, 124, 18)";
      }

      setFeedbackObj((prevState) => ({
        ...prevState,
        feedbackTitle: "Result",
        description: "Click on 'Next Step' to continue.",
      }));
    } else if (finalResult === "partially correct") {
      setIncorrectAttempt(incorrectAttempt + 1);

      let ele = document.getElementsByClassName("yellow");
      for (let i = 0; i < ele.length; i++) {
        ele[i].classList.add("blinkYellow");
      }

      if (clickedWordArray.length === 1) {
        setFeedbackObj((prevState) => ({
          ...prevState,
          feedbackTitle: "Feedback",
          description:
            "The selected word/words is/are the part of the 'Subject'(s).",
          remedy: "Select complete 'Subject' from the sentence.",
        }));
      } else {
        setFeedbackObj((prevState) => ({
          ...prevState,
          feedbackTitle: "Feedback",
          description:
            "The selected words contain part of the subject(s) as well as other words.",
          remedy: "Select only 'Subject' part from the given sentence.",
        }));
      }
    } else {
      setIncorrectAttempt(incorrectAttempt + 1);

      let ele = document.getElementsByClassName("red");
      for (let i = 0; i < ele.length; i++) {
        ele[i].classList.add("blinkRed");
      }

      setFeedbackObj((prevState) => ({
        ...prevState,
        feedbackTitle: "Feedback",
        description: "No 'Subject'(s) selected.",
        remedy:
          "Select 'Subject'(s) of the given sentence and by clicking on the word.",
      }));
    }
  };

  const clearAllBlinking = () => {
    const allLights = document.querySelectorAll(".red, .yellow, .green");
    allLights.forEach((el) => {
      el.classList.remove("blinkRed", "blinkYellow", "blinkGreen");
    });
  };

  const handelNextStep = () => {
    setStep(step + 1);
    setShowFeedback(false);
    setClickedWordArray([]);
  };

  const handleShowAnswer = () => {
    setNextDisable(false);
    let subjectArray = data[randomIndex].sentenceArray.filter((item) =>
      item.includes("_subject")
    );
    // console.log(subjectArray);
    for (let i = 0; i < subjectArray.length; i++) {
      document.getElementById(subjectArray[i]).style.background =
        "rgb(154, 213, 91)";
      document.getElementById(subjectArray[i]).style.border =
        "2px solid rgb(72, 124, 18)";
    }
  };

  function compareArrays(arr1, arr2) {
    // Check if all elements in arr1 are in arr2 and vice versa
    const allMatch =
      arr1.every((item) => arr2.includes(item)) &&
      arr2.every((item) => arr1.includes(item));

    if (allMatch) {
      return true;
    }

    // Check if at least one element is common between arr1 and arr2
    const anyMatch =
      arr1.some((item) => arr2.includes(item)) &&
      arr2.some((item) => arr1.includes(item));

    if (anyMatch) {
      return "partially correct";
    }

    // If no elements match
    return false;
  }

  function GenerateRandomNo() {
    let randomNo = Math.floor(Math.random() * data.length);
    setRandomIndex(randomNo);
    setNextDisable(true);
    setShowFeedback(false);
    setIncorrectAttempt(0);
  }

  return (
    <div
      className="row d-flex"
      style={{
        width: "100vw",
        backgroundColor: "#F2FBFF",
        borderRadius: "14px",
        opacity: 1,
        boxShadow: "0px 10px 5px rgba(0, 0, 0, 0.40)",
        display: "block",
        overflow: "auto",
      }}
    >
      <div className="col-sm-9 d-flex align-items-center justify-content-center">
        <div
          style={{
            height: "80vh",
            width: "95%",
            background: "#FFFFFF 0% 0% no-repeat padding-box",
            borderRadius: "13px",
            boxShadow: "0px 4px 7px #00000029",
            display: "block",
            padding: "4%",
            paddingTop: "0%",
            overflow: "auto",
            overflowX: "hidden",
            margin: "5px",
            fontSize: "calc(.6rem + .4vw)",
          }}
        >
          <div
            style={{
              background: "#3bafda",
              padding: "10px",
              borderRadius: "5px 5px 0 0",
              color: "#fff",
              fontWeight: "bolder",
            }}
          >
            Subject Verb Agreement
          </div>
          <div className="p-2">
            {step === 1 && (
              <div>
                <div className="row mb-2">
                  <div className="trafficlight">
                    <div className="light">
                      <div className="red"></div>
                      <div id="inst1" className="lit">
                        Wrong
                      </div>
                    </div>
                    <div className="light">
                      <div className="yellow"></div>
                      <div id="inst2" className="lit">
                        Partially Correct
                      </div>
                    </div>
                    <div className="light">
                      <div className="green"></div>
                      <div id="inst3" className="lit">
                        Correct
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="fw-bolder text-center">
                    Step [1 of 3]. Select the subject(s) in the sentence:
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="text-center">
                    {data[randomIndex].sentenceArray1.map((item, index) => (
                      <div
                        key={index}
                        className="btn btn-outline m-1"
                        id={item}
                        style={{ border: "2px solid #04B4AE" }}
                        onClick={() => handleWordClick(item)}
                      >
                        {item.split("_")[0]}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="text-center">
                    {showFeedback &&
                      (feedbackObj.feedbackTitle === "Feedback" ? (
                        <Table
                          className="text-center"
                          bordered
                          style={{ border: "1px solid black" }}
                        >
                          <thead
                            style={{ background: "#0F477E", color: "#ffffff" }}
                          >
                            <tr>
                              <th
                                style={{
                                  background: "rgb(66, 139, 202)",
                                  color: "white",
                                }}
                                className="text-center"
                                colSpan={2}
                              >
                                {feedbackObj.feedbackTitle}
                              </th>
                            </tr>
                          </thead>
                          <tbody
                            style={{ background: "#EDF6FA", color: "#000" }}
                          >
                            <tr>
                              <td>Description</td>
                              <td>{feedbackObj.description}</td>
                            </tr>
                            <tr>
                              <td>Remedy</td>
                              <td>{feedbackObj.remedy}</td>
                            </tr>
                          </tbody>
                        </Table>
                      ) : (
                        <Table
                          className="text-center"
                          bordered
                          style={{ border: "1px solid black" }}
                        >
                          <thead
                            style={{ background: "#0F477E", color: "#ffffff" }}
                          >
                            <tr>
                              <th
                                style={{
                                  background: "rgb(66, 139, 202)",
                                  color: "white",
                                }}
                                className="text-center"
                                colSpan={2}
                              >
                                {feedbackObj.feedbackTitle}
                              </th>
                            </tr>
                          </thead>
                          <tbody
                            style={{ background: "#EDF6FA", color: "#000" }}
                          >
                            <tr style={{ background: "#dff0d8" }}>
                              <td colSpan={2}>{feedbackObj.description}</td>
                            </tr>
                          </tbody>
                        </Table>
                      ))}
                  </div>
                </div>
                <div className="row">
                  <div className="d-flex justify-content-around">
                    <Button
                      variant="contained"
                      onClick={handleSubmit}
                      sx={{
                        background: "#0F477E",
                        color: "#ffffff",
                        fontSize: "calc(.6rem + .4vw)",
                      }}
                    >
                      {t("submit")}
                    </Button>
                    <Button
                      disabled={nextDisable}
                      variant="contained"
                      onClick={handelNextStep}
                      sx={{
                        background: "#0F477E",
                        color: "#ffffff",
                        fontSize: "calc(.6rem + .4vw)",
                      }}
                    >
                      {t("next")}
                    </Button>
                    <Button
                      disabled={incorrectAttempt < 3}
                      variant="contained"
                      onClick={handleShowAnswer}
                      sx={{
                        background: "#0F477E",
                        color: "#ffffff",
                        fontSize: "calc(.6rem + .4vw)",
                      }}
                    >
                      {t("show_answer")}
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => setModalOpen(true)}
                      sx={{
                        background: "#0F477E",
                        color: "#ffffff",
                        fontSize: "calc(.6rem + .4vw)",
                      }}
                    >
                      {t("hint")}
                    </Button>
                  </div>
                </div>
              </div>
            )}
            {step === 2 && (
              <Step2MidContent jsonData={data[randomIndex]} setStep={setStep} />
            )}
            {step === 3 && (
              <Step3MidContent
                jsonData={data[randomIndex]}
                setStep={setStep}
                GenerateRandomNo={GenerateRandomNo}
              />
            )}
          </div>
          {/* start of Modal to show hint */}
          <Modal
            show={modalOpen} // This controls the modal visibility
            onHide={() => setModalOpen(false)} // This allows closing the modal when clicking outside or the close button
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header
              closeButton
              style={{
                background: "#90D5FF",
              }}
            >
              <Modal.Title id="contained-modal-title-vcenter">
                <b>{t("hint")}</b>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ul style={{ fontSize: "calc(.6rem + .4vw)" }}>
                <li>There are {subjectCount} 'Subjects' in this sentence.</li>
                <li>
                  Subject of the sentence can be identified by asking the
                  question 'what' to the 'Verb'.
                </li>
                <li>
                  The 'Subject'(s) of a sentence generally consists of a noun(s)
                  or a pronoun(s).
                </li>
              </ul>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="contained"
                onClick={() => setModalOpen(false)}
                sx={{
                  fontSize: "calc(.6rem + .2vw)",
                  color: "#ffffff",
                  background: "#0F477E",
                }}
              >
                {t("close")}
              </Button>
            </Modal.Footer>
          </Modal>
          {/* End of Modal */}
        </div>
      </div>

      <div className="col-sm-3 d-flex align-items-center">
        <div
          style={{
            height: "80vh",
            width: "95%",
            overflow: "auto",
            overflowX: "hidden",
            borderRadius: "13px",
            boxShadow: "0px 4px 7px #00000029",
            display: "block",
            background: "#FFFFFF 0% 0% no-repeat padding-box",
            margin: "5px",
          }}
        >
          <div
            className="sticky-top text-center subheading"
            style={{
              background: "#002F65",
              borderRadius: "13px 13px 0px 0px",
              opacity: "1",
              color: "#FFFFFF",
              fontSize: "calc(1rem + 0.2vw)",
              fontWeight: "bolder",
            }}
          >
            {t("instr")}
          </div>
          <div
            style={{
              maxHeight: "50vh",
              padding: "2%",
              lineHeight: "30px",
              fontSize: "calc(.6rem + .4vw)",
            }}
          >
            <div>
              <ul>
                <li>{t("instr1")}</li>
                <li>{t("instr2")}</li>
                <li>{t("instr3")}</li>
                <li>{t("instr4")}</li>
                <li>{t("instr5")}</li>
                <li>{t("instr6")}</li>
                <li>{t("instr7")}</li>
                <li>{t("instr8")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Midcontent;
