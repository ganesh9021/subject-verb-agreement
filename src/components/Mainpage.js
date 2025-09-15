import React from "react";
import { OlabsPage } from "english-olabsnxtg-library";
import QuizPopupContent from "../components/QuizPopupContent";
import useWebSocket, { ReadyState } from "react-use-websocket";
import logconfig from "../config/dbconfig";
import { SendLogData } from "../config/wslog.js";
import Midcontent from "./Midcontent.js";
import { useTranslation } from "react-i18next";

const Mainpage = () => {
  const { t } = useTranslation();
  const { sendJsonMessage } = useWebSocket(logconfig.logurl, { share: true });

  return (
    <>
      <OlabsPage
        H_title="Subject verb agreement"
        HQ_yes={t("yes")}
        HQ_cancel={t("cancel")}
        HQ_quittext={t("aysywtq")}
        M_midheight="90%"
        RSM_procedure_tt={t("procedure")}
        RSM_animation_tt={t("animation")}
        RSM_theory_tt={t("theory")}
        RSM_vivavoce_tt={t("vivavoce")}
        RSM_ok={t("ok")}
        M_midcontent_comp={<Midcontent />}
        RSM_Intruc_popup_title_string={t("ifq")}
        RSM_QuizPopupContent_comp={<QuizPopupContent />}
        WS_sendJsonMessage={sendJsonMessage}
        WS_SendLogData={SendLogData}
        labNo="-"
        labShortName="Subject verb agreement"
      />
    </>
  );
};

export default Mainpage;
