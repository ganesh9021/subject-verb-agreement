import React from "react";
import ReactPlayer from "react-player";
import { useTranslation } from "react-i18next";

const AnimationMidContent = () => {
  const { t, i18n } = useTranslation();
  const video = {
    basePath: "./videos/",
    name: "lab11",
  };
  const base = t("video_animation", { video });
  const lang = i18n.language;
  const videoSrc = `${base}_${lang}.mp4`;
  const fallbackSrc = `${base}_en.mp4`;

  return (
    <div className="py-3" style={{ width: "100%", paddingRight: "10px" }}>
      <ReactPlayer
        className="react-player"
        url={videoSrc}
        width="100%"
        height="100%"
        onError={(e) => (e.currentTarget.src = fallbackSrc)}
        controls
      />
    </div>
  );
};

export default AnimationMidContent;
