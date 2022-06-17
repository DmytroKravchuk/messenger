import React, {
  Dispatch,
  ReactChild,
  ReactChildren,
  SetStateAction,
  useMemo,
  useState,
} from "react";

type ThemeProps = {
  themeValue: {
    background: string;
  };
  setThemeValue: Dispatch<SetStateAction<{ background: string }>>;
};

const ThemeContext = React.createContext<ThemeProps | undefined>(undefined);

type AuxProps = {
  children: ReactChild | ReactChildren;
};

const ThemeProvider = ({ children }: AuxProps) => {
  const [themeValue, setThemeValue] = useState({ background: "#fff" });
  const value = useMemo(() => ({ themeValue, setThemeValue }), [themeValue]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export { ThemeProvider, useTheme };
