import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [currentTheme, setTheme] = useState("blue");
  const [currentLanguage, setLanguage] = useState("pl");

  const themes = {
    blue: {
      bgImage: "bgBlue",
      bgColor: "rgb(47, 127, 192)",
      bgButton: `linear-gradient(
        90deg,
        rgb(37, 117, 192) 0%,
        rgb(80, 164, 185) 100%
      )`,
    },
    pink: {
      bgImage: "bgPink",
      bgColor: "rgb(209, 103, 160)",
      bgButton: `linear-gradient(
        to bottom right,
        rgba(231, 145, 205, 0.5),
        rgba(238, 53, 130, 0.5)
      )`,
    },
  };

  const languages = {
    pl: {
      title: "Jakie plany na dziś?",
      language: "Język",
      readMoreText: "Pokaż więcej",
      theme: "Motyw",
      forecast: "Prognoza Pogody",
      forecastInput: "Szukaj stolicy",
      forecastButton: "Szukaj",
      addInputText: "Dodaj zadanie",
      updateInputText: "Nowa treść zadania",
      updateButtonText: "Zmień",
      sortOptions: [
        { value: "latest", label: "Najnowsze" },
        { value: "oldest", label: "Najstarsze" },
        { value: "complete", label: "Ukończone" },
      ],
      filterOptions: [
        { value: "all", label: "Wszystkie" },
        { value: "complete", label: "Ukończone" },
        { value: "uncomplete", label: "Nieukończone" },
      ],
    },
    en: {
      title: "What we are doing today?",
      language: "Language",
      readMoreText: "Read more",
      theme: "Theme",
      forecast: "Weather Forecast",
      forecastInput: "Search for capital city",
      forecastButton: "Search",
      addInputText: "Add todo",
      updateInputText: "Update todo",
      updateButtonText: "Update",
      sortOptions: [
        { value: "latest", label: "Latest" },
        { value: "oldest", label: "Oldest" },
        { value: "complete", label: "Completed" },
      ],
      filterOptions: [
        { value: "all", label: "All" },
        { value: "complete", label: "Complete" },
        { value: "uncomplete", label: "Uncomplete" },
      ],
    },
  };

  return (
    <AppContext.Provider
      value={{
        theme: themes[currentTheme],
        language: languages[currentLanguage],
        setTheme,
        setLanguage,
        currentLanguage,
        currentTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
