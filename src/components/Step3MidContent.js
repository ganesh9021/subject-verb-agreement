import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export const Step3MidContent = ({ jsonData, setStep, GenerateRandomNo }) => {
  const { t } = useTranslation();
  const [cleanedData, setCleanedData] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [nextDisable, setNextDisable] = useState(true);
  const [dropdownvalue, setDropdownvalue] = useState("");
  const [completeSubject, setCompleteSubject] = useState(
    jsonData.completeSubject.split(" ")
  );
  const [verbArr, setVerbArr] = useState([]);
  const [feedbackObj, setFeedbackObj] = useState({
    feedbackTitle: "",
    description: "",
    remedy: "",
  });

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
    let verbArray = [];
    for (let i = 0; i < updatedData.length; i++) {
      if (updatedData[i] === "/") {
        let prev = updatedData[i - 1];
        let next = updatedData[i + 1];
        verbArray.push(prev);
        verbArray.push(next);
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
    setVerbArr(verbArray);
  };

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setDropdownvalue(selectedValue);
  };

  const handleSubmit = () => {
    // console.log(dropdownvalue);
    if (dropdownvalue === jsonData.correctHVerb) {
      setFeedbackObj((prevState) => ({
        ...prevState,
        feedbackTitle: "Result",
        description:
          "Your answer is correct! Click on 'Next Sentence' to solve next question.",
      }));
      let ele = document.getElementsByClassName("green");
      for (let i = 0; i < ele.length; i++) {
        ele[i].classList.add("blinkGreen");
      }
      setNextDisable(false);
    } else {
      setFeedbackObj((prevState) => ({
        ...prevState,
        feedbackTitle: "Feedback",
        description: "Selected correct verb.",
      }));
      let ele = document.getElementsByClassName("red");
      for (let i = 0; i < ele.length; i++) {
        ele[i].classList.add("blinkRed");
      }
    }
    setShowFeedback(true);
  };

  const handleNextSent = () => {
    setStep(1);
    GenerateRandomNo();
  };
  return (
    <div className="p-3">
      <div className="row">
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
      </div>
      <div className="row mb-3">
        <div className="fw-bolder text-center">
          Step [3 of 3]. Choose appropriate verb(s) in the sentence:
        </div>
      </div>

      <div className="row mb-3">
        <div className="text-center">
          {cleanedData.map((word, index) => (
            <>
              {!word.includes("/") ? (
                <button
                  className="p-2 rounded rounded-3"
                  key={index}
                  style={{
                    margin: "5px",
                    border: "2px solid #04B4AE",
                    background: "white",
                  }}
                >
                  {word}
                </button>
              ) : (
                <>
                  <button
                    className="p-2 rounded rounded-3"
                    key={index}
                    style={{
                      margin: "5px",
                      border: "2px solid #04B4AE",
                      background: "white",
                    }}
                  >
                    <select
                      className="p-1"
                      onChange={(e) => handleChange(e)}
                      style={{ cursor: "pointer", background: "#F5B946" }}
                    >
                      <option>-----------</option>
                      <option>{verbArr[0]}</option>
                      <option>{verbArr[1]}</option>
                    </select>
                  </button>
                </>
              )}
            </>
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
                    <td>{feedbackObj.description}</td>
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
            onClick={handleNextSent}
            sx={{
              background: "#0F477E",
              color: "#ffffff",
              fontSize: "calc(.6rem + .4vw)",
            }}
          >
            {t("next_sentence")}
          </Button>
        </div>
      </div>
    </div>
  );
};
