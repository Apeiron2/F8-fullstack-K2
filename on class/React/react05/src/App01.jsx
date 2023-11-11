import React, { useState } from "react";
import Theme from "./components/Theme";
export const MyContext = React.createContext();
function App() {
  const [state, setState] = useState({
    theme: "light",
  });
  const setTheme = (color) => {
    setState({ ...state, theme: color });
  };
  return (
    <MyContext.Provider value={{ state, setTheme }}>
      <Theme />
    </MyContext.Provider>
  );
}

export default App;
