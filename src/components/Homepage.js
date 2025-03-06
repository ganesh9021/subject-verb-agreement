import React from "react";
import { Launchpage } from "english-olabsnxtg-library";
import ActStartPopupContent from "../components/ActStartPopupContent";
import useWebSocket, { ReadyState } from "react-use-websocket";
import logconfig from "../config/dbconfig";
import { SendLogData } from "../config/wslog.js";

const Homepage = () => {
  const { sendJsonMessage } = useWebSocket(logconfig.logurl, { share: true });

  var arr = [
    "Student will recognize the correct subject-verb agreement in both written and spoken sentences",
    "Student will able to apply the rules of subject-verb agreement.",
  ];

  return (
    <>
      <Launchpage
        L_title="Subject verb agreement"
        L_objective="Objective"
        L_act_objective="To understand and apply the grammatical rule that the subject and verb in a sentence."
        L_learning_outcome="Learning Outcome"
        L_array={arr}
        L_startbutton="START"
        RSM_help_tt="Help"
        RSM_theory_tt="Theory"
        RSM_procedure_tt="Procedure"
        RSM_animation_tt="Animation"
        RSM_vivavoce_tt="Viva voce"
        RSM_ok="OK"
        WAWGTL_title_string="What are we going to learn?"
        WAWGTL_comp={<ActStartPopupContent />}
        ok="OK"
        cancel="CANCEL"
        WS_sendJsonMessage={sendJsonMessage}
        WS_SendLogData={SendLogData}
        labNo="6"
        labShortName="Subject verb agreement"
      />
    </>
  );
};

export default Homepage;
