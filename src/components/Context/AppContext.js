import { createContext, useState } from "react";
import pinkBG from "../../images/bgPink.jpg";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  //Theme useState
  const [pinkTheme, setPinkTheme] = useState(false);
  const [english, setEnglish] = useState(false);

  const theme = {
    bgColor: "rgb(209, 103, 160)",
    bgImg: `url(${pinkBG})`,
    button: "pink",
  };

  const language = {
    title: {
      eng: "What we are doing today?",
      pol: "Jakie plany na dziś?",
    },
    input: ["Add todo", "Update todo", "Update"],
    options: {
      eng: "Sort by: ",
      pol: "Sortuj: ",
    },
    sortOptions: [
      { eng: "all", pol: "wszystkie" },
      { eng: "complete", pol: "zakończone" },
      { eng: "uncomplete", pol: "niezakończone" },
      { eng: "latest", pol: "najnowsze" },
      { eng: "oldest", pol: "najstarsze" },
    ],
    settings: ["Language", "Theme"],
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        pinkTheme,
        setPinkTheme,
        language,
        english,
        setEnglish,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
