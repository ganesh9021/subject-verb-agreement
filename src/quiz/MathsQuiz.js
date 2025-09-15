import { Quiz } from "english-olabsnxtg-library";
import React from "react";
import Quizcomp from "./Quizcomp";
import { useTranslation } from "react-i18next";
import useWebSocket, { ReadyState } from "react-use-websocket";
import logconfig from "../config/dbconfig";
import { SendLogData } from "../config/wslog.js";

const MathsQuiz = () => {

  const { sendJsonMessage } = useWebSocket(logconfig.logurl, { share: true });
  const { t, i18n } = useTranslation();
  
  return (
    <div>
      <Quiz
        H_title="Subject verb agreement"
        H_sidebarvisible="hidden"
        HQ_quittext={t("aysywtq")}
        HQ_yes={t("yes")}
        HQ_cancel={t("cancel")}
        quiz_component={<Quizcomp/>}
        WS_sendJsonMessage={sendJsonMessage}
        WS_SendLogData={SendLogData}
        labNo="-"
        labShortName="Subject verb agreement"         
      />
    </div>
  );
};

export default MathsQuiz;
