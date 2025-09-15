import "./App.css";
import { Routes, Route, useParams } from "react-router-dom";
import Homepage from "./components/Homepage";
import Mainpage from "./components/Mainpage";
import TheoryPage from "./components/TheoryPage";
import AnimationPage from "./components/AnimationPage";
import MathsQuiz from "./quiz/MathsQuiz";
import Procedure from "./components/Procedure";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { useTranslation } from "react-i18next";
import axios from "axios";
import useWebSocket from "react-use-websocket";
import setLangStore, { changeLang } from "./store/Store";
import logconfig from "./config/dbconfig";
import ReactGA from "react-ga4";
import Language from "./Language";

function App() {
  const { id } = useParams();
  const [ip, setIP] = useState("");
  let dispatch = useDispatch();
  const sid = uuid();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    localStorage.setItem("sessionid", sid);
  }, []);

  useEffect(() => {
    // to call get data function which return ip address
    getData();
  }, [ip]);

  const getData = async () => {
    try {
      //const res = await axios.get('https://api.ipify.org/?format=json')
      const res = await axios.get("http://10.212.8.133:8083/get_ip");
      //console.log(res.data);
      setIP(res.data.ip);
      localStorage.setItem("clientip", ip);
    } catch (error) {}
  };

  const { sendJsonMessage, readyState } = useWebSocket(logconfig.logurl, {
    onOpen: () => {
      console.log("WebSocket connection established.");
    },
    onError: () => {
      console.log("WebSocket connection Error");
    },
    share: true,
    filter: () => false,
    retryOnError: true,
    shouldReconnect: () => true,
  });

  useEffect(() => {
    ReactGA.initialize("G-ZLKNSX7SDM", {
      gaOptions: {
        gtag: true,
      },
    });
  }, []);

  useEffect(() => {
    if (id == "en") {
      alert("in app en : ", id);
      i18n.changeLanguage("en");
      dispatch(changeLang("en"));
    }
    if (id == "hn") {
      alert("in app hn : ", id);
      i18n.changeLanguage("hn");
      dispatch(changeLang("hn"));
    }
  }, []);

  return (
    <Routes>
      <Route path="/:id" element={<App />} />
      <Route exact path="/" element={<Homepage />}></Route>
      <Route exact path="/theory" element={<TheoryPage />}></Route>
      <Route exact path="/animation" element={<AnimationPage />}></Route>
      <Route exact path="/quiz" element={<MathsQuiz />}></Route>
      <Route exact path="/procedure" element={<Procedure />}></Route>
      <Route exact path="/letusverify" element={<Homepage />}></Route>
      <Route
        exact
        path="/launchpage/englishactivity"
        element={<Mainpage />}
      ></Route>
    </Routes>
  );
}

export default App;
