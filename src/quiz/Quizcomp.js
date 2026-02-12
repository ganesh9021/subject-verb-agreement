import React, { lazy, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ThreeDots } from "react-loader-spinner";
import { useTranslation } from "react-i18next";

async function getLoad(setFlagPlay, setPlay) {
  try {
    const pathCompPlay = require.resolve("QuizOlabsNxtG");

    if (pathCompPlay != undefined) {
      const Play = lazy(() => import("QuizOlabsNxtG"));
      setFlagPlay(true);
      setPlay(Play);
      console.log("in true ...");
      console.log(Play);
    }
  } catch (e) {
    setFlagPlay(false);
    console.log("error", e);
  }
}

const updateQuizJSON = (langQuizJson) => {
  let tempQuizJson = JSON.parse(JSON.stringify(langQuizJson));

  for (let i = 0; i < langQuizJson.length; i++) {
    if (langQuizJson[i].questionHasImg) {
      let imagepath = "./QuizImages/" + langQuizJson[i].questionImg;
      var imgTemp = require(`${imagepath}`);
      tempQuizJson[i].questionImg = imgTemp;
    }
    if (langQuizJson[i].explanationHasImg) {
      let imageExp = "./QuizImages/" + langQuizJson[i].explanationImg;
      var imgExp = require(`${imageExp}`);
      tempQuizJson[i].explanationImg = imgExp;
    }
    var checkForOptions = langQuizJson[i].isOptionsHaveImages;
    for (let j = 0; j < checkForOptions.length; j++) {
      if (checkForOptions[j]) {
        if (j == 0) {
          let imageOpt = "./QuizImages/" + langQuizJson[i].optionAImg;
          var imgOp = require(`${imageOpt}`);
          tempQuizJson[i].optionAImg = imgOp;
        }
        if (j == 1) {
          let imageOpt = "./QuizImages/" + langQuizJson[i].optionBImg;
          var imgOp = require(`${imageOpt}`);
          tempQuizJson[i].optionBImg = imgOp;
        }
        if (j == 2) {
          let imageOpt = "./QuizImages/" + langQuizJson[i].optionCImg;
          var imgOp = require(`${imageOpt}`);
          tempQuizJson[i].optionCImg = imgOp;
        }
        if (j == 3) {
          let imageOpt = "./QuizImages/" + langQuizJson[i].optionDImg;
          var imgOp = require(`${imageOpt}`);
          tempQuizJson[i].optionDImg = imgOp;
        }
      }
    }
  }
  console.log(tempQuizJson);
  return tempQuizJson;
};

const Quizcomp = ({ currentQuesJson }) => {
  const [flagPlay, setFlagPlay] = useState(null);
  const [Play, setPlay] = useState();
  const [langObj, setLangObj] = useState({});
  const [t, i18n] = useTranslation();
  let { firstStore } = useSelector((globalState) => globalState);

  useEffect(() => {
    getLoad(setFlagPlay, setPlay);
    let quizEnglish = updateQuizJSON(currentQuesJson);

    setLangObj({
      activeQuesJson: quizEnglish,
    });
  }, []);

  return (
    <>
      {flagPlay == null ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            visible={true}
          />
        </div>
      ) : flagPlay ? (
        <Play
          quizText={{
            previous_btn: t("previous_btn"),
            submit_btn: t("submit_btn"),
            next_btn: t("next"),
            questionsLabel: t("questionsLabel"),
            question_marks_title: t("question_marks_title"),
            timer: t("timer"),
            score_title: t("score_title"),
            please_select_option: t("please_select_option"),
            correct_answer: t("correct_answer"),
            wrong_answer: t("wrong_answer"),
            finish_btn: t("finish"),
            reached_maximum_attempts: t("reached_maximum_attempts"),
            attempt_next_question: t("attempt_next_question"),
            close_btn: t("close"),
            explanation_header: t("explanation_header"),
            are_you_sure_you_want_to_quit_quiz_scorecard: t(
              "are_you_sure_you_want_to_quit_quiz_scorecard"
            ),
            yes: t("yes"),
            cancel: t("cancel"),
            result: t("result"),
            you_scored: t("you_scored"),
            total_no_of_Question: t("total_no_of_Question"),
            correct_answers: t("correct_answers"),
            wrong_answers: t("wrong_answers"),
            partial_attempts: t("partial_attempts"),
            unattempted: t("unattempted"),
            time_taken: t("time_taken"),
            minutes: t("minutes"),
            seconds: t("seconds"),
            congratulations: t("congratulations"),
            ok: t("ok"),
          }}
          questionJson={langObj}
        />
      ) : (
        <h4> Please install Quiz Moduele </h4>
      )}
    </>
  );
};

export default Quizcomp;
