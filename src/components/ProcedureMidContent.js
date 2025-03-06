import React from "react";
import step1_1 from "../Img/ProcedureImages/step1_mid.png";
import step1_2 from "../Img/ProcedureImages/step1_fb1.png";
import step1_3 from "../Img/ProcedureImages/step1_fb2.png";
import step1_4 from "../Img/ProcedureImages/step1_fb3.png";
import step2_1 from "../Img/ProcedureImages/step2_mid.png";
import step2_2 from "../Img/ProcedureImages/step2_fb1.png";
import step2_3 from "../Img/ProcedureImages/step2_fb2.png";
import step3_1 from "../Img/ProcedureImages/step3_mid.png";
import step3_2 from "../Img/ProcedureImages/step3_mid1.png";
import step3_3 from "../Img/ProcedureImages/step3_fb1.png";
import step3_4 from "../Img/ProcedureImages/step3_fb2.png";

const ProcedureMidContent = () => {
  return (
    <div
      className="p-3 scrollbar-primary"
      style={{ overflow: "auto", width: "100%" }}
    >
      <div className="fw-bolder">Procedure:</div>
      <div>There are theree steps in the activity.</div>
      <ol type="A">
        <li>Step 1</li>
        <ul type="disc">
          <li>A sentence is given.</li>
          <li>Click on the subject word.</li>
          <li>Click on the submit button to check the answer.</li>
          <li>Clcik on the next step to move to the next step.</li>
          <div className="text-center m-2">
            <div>
              <img
                className="img-fluid"
                style={{ border: "1px solid black" }}
                src={step1_1}
                alt="logo"
              />
            </div>
            <div className="fw-bolder">Fig. 1: Step 1</div>
          </div>
          <li>The show answer button will be enable after 3 wrong attempts.</li>
          <li>
            The feedback is provided in 3 ways namely wrong, correct and
            partially correct.
          </li>
          <div className="d-flex">
            <div className="col text-center me-2">
              <img
                className="img-fluid border border-dark"
                src={step1_2}
                alt="logo"
              />
              <div className="fw-bolder">Fig. 2: Step 1 feedback</div>
            </div>
            <div className="col text-center">
              <img
                className="img-fluid border border-dark"
                src={step1_3}
                alt="logo"
              />
              <div className="fw-bolder">Fig. 3: Step 1 feedback</div>
            </div>
          </div>
          <div className="text-center m-2">
            <div>
              <img
                className="img-fluid"
                style={{ border: "1px solid black" }}
                src={step1_4}
                alt="logo"
              />
            </div>
            <div className="fw-bolder">Fig. 4: Step 1 feedback</div>
          </div>
        </ul>
        <li>Step 2</li>
        <ul type="disc">
          <li>The complete subject sentence is given.</li>
          <div className="text-center m-2">
            <div>
              <img
                className="img-fluid"
                style={{ border: "1px solid black" }}
                src={step2_1}
                alt="logo"
              />
            </div>
            <div className="fw-bolder">Fig. 5: Step 2</div>
          </div>
          <li>
            Click on the singular button if subject clause is singular else
            click on the plural button.
          </li>
          <li>The correct and incorrect feedback is provided.</li>
          <div className="d-flex">
            <div className="col text-center me-2">
              <img
                className="img-fluid border border-dark"
                src={step2_2}
                alt="logo"
              />
              <div className="fw-bolder">Fig. 6: Step 2 feedback</div>
            </div>
            <div className="col text-center">
              <img
                className="img-fluid border border-dark"
                src={step2_3}
                alt="logo"
              />
              <div className="fw-bolder">Fig. 7: Step 2 feedback</div>
            </div>
          </div>
        </ul>
        <li>Step 3</li>
        <ul type="disc">
          <li>Click on the correct helping verb from the dropdown menu.</li>
          <div className="d-flex">
            <div className="col text-center me-2">
              <img
                className="img-fluid border border-dark"
                src={step3_1}
                alt="logo"
              />
              <div className="fw-bolder">Fig. 8: Step 3 MidContent</div>
            </div>
            <div className="col text-center">
              <img
                className="img-fluid border border-dark"
                src={step3_2}
                alt="logo"
              />
              <div className="fw-bolder">Fig. 9: Step 3 midContent</div>
            </div>
          </div>
          <li>Click on the submit button to check the answer.</li>
          <div className="d-flex">
            <div className="col text-center me-2">
              <img
                className="img-fluid border border-dark"
                src={step3_3}
                alt="logo"
              />
              <div className="fw-bolder">Fig. 10: Step 3 feedback</div>
            </div>
            <div className="col text-center">
              <img
                className="img-fluid border border-dark"
                src={step3_4}
                alt="logo"
              />
              <div className="fw-bolder">Fig. 11: Step 3 feedback</div>
            </div>
          </div>
          <li>
            Click on the Next sentence button to move to the next sentence.
          </li>
        </ul>
      </ol>
    </div>
  );
};

export default ProcedureMidContent;
