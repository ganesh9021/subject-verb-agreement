import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../css/midcontent.css";
import { Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export const Step2MidContent = ({ jsonData, setStep }) => {
  const { t } = useTranslation();
  const [cleanedData, setCleanedData] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [completeSubject, setCompleteSubject] = useState(
    jsonData.completeSubject.split(" ")
  );
  const [feedbackObj, setFeedbackObj] = useState({
    feedbackTitle: "",
    description: "",
    remedy: "",
  });
  const [nextDisable, setNextDisable] = useState(true);

  useEffect(() => {
    handleData();
    setCompleteSubject(jsonData.completeSubject.split(" "));
    const redElements = document.getElementsByClassName("red");
    const yellowElements = document.getElementsByClassName("yellow");
    const greenElements = document.getElementsByClassName("green");
    // Loop through the HTMLCollection and set the opacity for each element
    for (let i = 0; i < redElements.length; i++) {
      redElements[i].style.opacity = "0.2"; // Adjust opacity value as needed
      yellowElements[i].style.opacity = "0.2";
      greenElements[i].style.opacity = "0.2";
    }
  }, [jsonData]);

  const handleData = () => {
    let updatedData = [];

    for (let i = 0; i < jsonData.sentenceArray.length; i++) {
      if (jsonData.sentenceArray[i].includes("_subject")) {
        let splitword1 = jsonData.sentenceArray[i].split("_");
        updatedData.push(splitword1[0]);
      } else if (
        jsonData.sentenceArray[i].includes("_hv") ||
        jsonData.sentenceArray[i].includes("_mv")
      ) {
        let splitword2 = jsonData.sentenceArray[i].split("_");
        updatedData.push(splitword2[0]);
      } else {
        updatedData.push(jsonData.sentenceArray[i]);
      }
    }

    let finalData = [];
    for (let i = 0; i < updatedData.length; i++) {
      if (updatedData[i] === "/") {
        let prev = updatedData[i - 1];
        let next = updatedData[i + 1];
        if (prev && next) {
          finalData.pop();
          finalData.push(`${prev} / ${next}`);
          i++;
        }
      } else {
        finalData.push(updatedData[i]);
      }
    }

    setCleanedData(finalData);
  };

  const handleSingular = () => {
    clearAllBlinking();

    if ("singular" !== jsonData.subjectNumber) {
      setFeedbackObj((prevState) => ({
        ...prevState,
        feedbackTitle: "Feedback",
        description: "Wrong answer",
        remedy: `Observe the clause ${jsonData.completeSubject} and accordingly decide the 'Subject' number.`,
      }));

      let ele = document.getElementsByClassName("red");
      for (let i = 0; i < ele.length; i++) {
        ele[i].classList.add("blinkRed");
      }
    } else {
      setNextDisable(false);
      setFeedbackObj((prevState) => ({
        ...prevState,
        feedbackTitle: "Result",
        description: "Click on 'Next Step' to continue.",
      }));

      let ele = document.getElementsByClassName("green");
      for (let i = 0; i < ele.length; i++) {
        ele[i].classList.add("blinkGreen");
      }
    }

    setShowFeedback(true);
  };

  const handlePlural = () => {
    clearAllBlinking();

    if ("plural" !== jsonData.subjectNumber) {
      setFeedbackObj((prevState) => ({
        ...prevState,
        feedbackTitle: "Feedback",
        description: "Wrong answer",
        remedy: `Observe the clause ${jsonData.completeSubject} and accordingly decide the 'Subject' number.`,
      }));

      let ele = document.getElementsByClassName("red");
      for (let i = 0; i < ele.length; i++) {
        ele[i].classList.add("blinkRed");
      }
    } else {
      setNextDisable(false);
      setFeedbackObj((prevState) => ({
        ...prevState,
        feedbackTitle: "Result",
        description: "Click on 'Next Step' to continue.",
      }));

      let ele = document.getElementsByClassName("green");
      for (let i = 0; i < ele.length; i++) {
        ele[i].classList.add("blinkGreen");
      }
    }

    setShowFeedback(true);
  };

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const clearAllBlinking = () => {
    const allLights = document.querySelectorAll(".red, .yellow, .green");
    allLights.forEach((el) => {
      el.classList.remove("blinkRed", "blinkYellow", "blinkGreen");
    });
  };

  return (
    <div className="p-3">
      <div className="row mb-3">
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
      <div className="row  mb-3">
        <div className="fw-bolder text-center">
          Step [2 of 3]. Identify if{" "}
          <span style={{ color: "brown" }}>'{jsonData.completeSubject}'</span>{" "}
          clause is singular or plural:
        </div>
      </div>
      <div className="row">
        <div className="mb-5 text-center">
          {" "}
          {cleanedData.map((word, index) => (
            <button
              className="p-2 rounded rounded-3"
              key={index}
              style={{
                margin: "5px",
                border:
                  word == completeSubject[index]
                    ? "2px solid rgb(117, 71, 25)"
                    : "2px solid #04B4AE",
                background:
                  word == completeSubject[index] ? "rgb(163, 122, 0)" : "white",
              }}
            >
              {word}
            </button>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="text-center">
          {showFeedback &&
            (feedbackObj.feedbackTitle === "Feedback" ? (
              <Table
                className="text-center"
                bordered
                style={{ border: "1px solid black" }}
              >
                <thead style={{ background: "#0F477E", color: "#ffffff" }}>
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
                <tbody style={{ background: "#EDF6FA", color: "#000" }}>
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
                <thead style={{ background: "#0F477E", color: "#ffffff" }}>
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
                <tbody style={{ background: "#EDF6FA", color: "#000" }}>
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
            disabled={!nextDisable}
            variant="contained"
            onClick={handleSingular}
            sx={{
              background: "#0F477E",
              color: "#ffffff",
              fontSize: "calc(.6rem + .4vw)",
            }}
          >
            {t("singular")}
          </Button>
          <Button
            disabled={!nextDisable}
            variant="contained"
            onClick={handlePlural}
            sx={{
              background: "#0F477E",
              color: "#ffffff",
              fontSize: "calc(.6rem + .4vw)",
            }}
          >
            {t("plural")}
          </Button>
          <Button
            disabled={nextDisable}
            variant="contained"
            onClick={handleNextStep}
            sx={{
              background: "#0F477E",
              color: "#ffffff",
              fontSize: "calc(.6rem + .4vw)",
            }}
          >
            {t("next_step")}
          </Button>
        </div>
      </div>
    </div>
  );
};
