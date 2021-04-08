import React from "react";
import './App.css';
import Sidebar from "./sidebar";
import ThemeContext from "./theme";

function App() {
  return (
      <ThemeContext.Provider value={'light'}>
        <div className={'App'}>
            <h1>Spark lineage viz</h1>
            <Sidebar/>
            {/*Diagram will be added here*/}
        </div>
      </ThemeContext.Provider>

  );
}

export default App;
