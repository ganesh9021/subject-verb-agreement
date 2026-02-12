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
import { useTranslation } from "react-i18next";

const ProcedureMidContent = () => {
  const { t } = useTranslation();
  return (
    <div
      className="py-3"
      style={{
        overflow: "auto",
        width: "100%",
        paddingRight: "10px",
        fontSize: "calc(.6rem + .4vw)",
      }}
    >
      <div className="fw-bolder">{t("procedure")}:</div>
      <div>{t("proc1")}</div>
      <ol type="A">
        <li>{t("proc2")}</li>
        <ul type="disc">
          <li>{t("proc3")}</li>
          <li>{t("proc4")}</li>
          <li>{t("proc5")}</li>
          <li>{t("proc6")}</li>

          <div className="" style={{ display: "flex", alignItems: "start" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                className="img-fluid"
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  border: "1px solid black",
                }}
                src={step1_1}
                alt="img"
              />
              <div className="fw-bold">{t("proc_image_1")}</div>
            </div>
          </div>

          <li>{t("proc7")}</li>
          <li>{t("proc8")}</li>

          <div className="row">
            <div
              className="col"
              style={{ display: "flex", alignItems: "start" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  className="img-fluid"
                  style={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    border: "1px solid black",
                  }}
                  src={step1_2}
                  alt="img"
                />
                <div className="fw-bold">{t("proc_image_2")}</div>
              </div>
            </div>
            <div
              className="col"
              style={{ display: "flex", alignItems: "start" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  className="img-fluid"
                  style={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    border: "1px solid black",
                  }}
                  src={step1_3}
                  alt="img"
                />
                <div className="fw-bold">{t("proc_image_3")}</div>
              </div>
            </div>
          </div>

          <div className="" style={{ display: "flex", alignItems: "start" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                className="img-fluid"
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  border: "1px solid black",
                }}
                src={step1_4}
                alt="img"
              />
              <div className="fw-bold">{t("proc_image_4")}</div>
            </div>
          </div>
        </ul>
        <li>{t("proc12")}</li>
        <ul type="disc">
          <li>{t("proc9")}</li>

          <div className="" style={{ display: "flex", alignItems: "start" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                className="img-fluid"
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  border: "1px solid black",
                }}
                src={step2_1}
                alt="img"
              />
              <div className="fw-bold">{t("proc_image_5")}</div>
            </div>
          </div>

          <li>{t("proc10")}</li>
          <li>{t("proc11")}</li>

          <div className="row">
            <div
              className="col"
              style={{ display: "flex", alignItems: "start" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  className="img-fluid"
                  style={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    border: "1px solid black",
                  }}
                  src={step2_2}
                  alt="img"
                />
                <div className="fw-bold">{t("proc_image_6")}</div>
              </div>
            </div>
            <div
              className="col"
              style={{ display: "flex", alignItems: "start" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  className="img-fluid"
                  style={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    border: "1px solid black",
                  }}
                  src={step2_3}
                  alt="img"
                />
                <div className="fw-bold">{t("proc_image_7")}</div>
              </div>
            </div>
          </div>
        </ul>
        <li>{t("proc13")}</li>
        <ul type="disc">
          <li>{t("proc14")}</li>

          <div className="row">
            <div
              className="col"
              style={{ display: "flex", alignItems: "start" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  className="img-fluid"
                  style={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    border: "1px solid black",
                  }}
                  src={step3_1}
                  alt="img"
                />
                <div className="fw-bold">{t("proc_image_8")}</div>
              </div>
            </div>
            <div
              className="col"
              style={{ display: "flex", alignItems: "start" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  className="img-fluid"
                  style={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    border: "1px solid black",
                  }}
                  src={step3_2}
                  alt="img"
                />
                <div className="fw-bold">{t("proc_image_9")}</div>
              </div>
            </div>
          </div>

          <li>{t("proc15")}</li>

          <div className="row">
            <div
              className="col"
              style={{ display: "flex", alignItems: "start" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  className="img-fluid"
                  style={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    border: "1px solid black",
                  }}
                  src={step3_3}
                  alt="img"
                />
                <div className="fw-bold">{t("proc_image_10")}</div>
              </div>
            </div>
            <div
              className="col"
              style={{ display: "flex", alignItems: "start" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  className="img-fluid"
                  style={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    border: "1px solid black",
                  }}
                  src={step3_4}
                  alt="img"
                />
                <div className="fw-bold">{t("proc_image_11")}</div>
              </div>
            </div>
          </div>

          <li>{t("proc16")}</li>
        </ul>
      </ol>
    </div>
  );
};

export default ProcedureMidContent;
