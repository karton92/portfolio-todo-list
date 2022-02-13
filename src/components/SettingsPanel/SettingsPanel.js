import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import "./SettingsPanel.scss";

//Settings images & icons
import pol from "../../images/pol.png";
import en from "../../images/uk.png";
import blue from "../../images/blue.png";
import pink from "../../images/pink.png";
import { RiSettings4Line } from "react-icons/ri";

const SettingsPanel = () => {
  const [settings, setSettings] = useState(false);

  const { theme, setTheme, language, setLanguage } = useContext(AppContext);

  const handleSettings = () => {
    setSettings(!settings);
  };

  const handleClass = () => {
    if (settings) {
      return "settings active";
    } else return "settings";
  };

  return (
    <div className="settings-panel">
      <div className={`${handleClass()} ${theme.bgImage}`}>
        <div>
          <p>{language.language}</p>
          <img onClick={() => setLanguage("pl")} src={pol} alt="polish" />
          <img onClick={() => setLanguage("en")} src={en} alt="english" />
        </div>
        <div>
          <p>{language.theme}</p>
          <img onClick={() => setTheme("blue")} src={blue} alt="blue" />
          <img onClick={() => setTheme("pink")} src={pink} alt="pink" />
        </div>
      </div>

      <div className="settings-icon">
        <RiSettings4Line onClick={handleSettings} />
      </div>
      <h1>{language.title}</h1>
    </div>
  );
};

export default SettingsPanel;
