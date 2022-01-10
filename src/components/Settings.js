import React, { useState, useContext } from "react";
import { AppContext } from "./Context/AppContext";
import "./Settings.css";

//Settings images & icons
import pol from "../images/pol.png";
import uk from "../images/uk.png";
import blue from "../images/blue.png";
import pink from "../images/pink.png";
import { RiSettings4Line } from "react-icons/ri";

const Settings = () => {
  const [settings, setSettings] = useState(false);
  const [zindex, setZindex] = useState(false);

  // CONTEXT
  const { pinkTheme, setPinkTheme, theme, english, setEnglish, language } =
    useContext(AppContext);

  const settingsStyle = pinkTheme ? { backgroundImage: theme.bgImg } : null;

  const handler = () => {
    setZindex(!zindex);
  };

  const handleSettings = () => {
    setSettings(!settings);
    window.setTimeout(handler, 600);
  };

  const handleClass = () => {
    if (zindex) {
      return "settings active index";
    } else if (settings) {
      return "settings active";
    } else return "settings";
  };

  return (
    <>
      <div className="settings-icon">
        <RiSettings4Line onClick={handleSettings} />
      </div>
      <div className={handleClass()} style={settingsStyle}>
        <p>{english ? language.settings[0] : "język"}</p>
        <img onClick={() => setEnglish(false)} src={pol} alt="poland" />
        <img onClick={() => setEnglish(true)} src={uk} alt="english" />
        <p>{english ? language.settings[1] : "motyw"}</p>
        <img onClick={() => setPinkTheme(false)} src={blue} alt="blue" />
        <img onClick={() => setPinkTheme(true)} src={pink} alt="pink" />
      </div>
    </>
  );
};

export default Settings;
