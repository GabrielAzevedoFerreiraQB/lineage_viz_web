import React from "react";
import './App.scss';
import Sidebar from "./sidebar";
import ThemeContext from "./theme";
import classnames from "classnames";

function App() {
  return (
      <ThemeContext.Provider value={'light'}>
        <Wrapper theme={'dark'}/>
      </ThemeContext.Provider>

  );
}

const Wrapper = ({theme }) => (
    <div
        className={classnames('kedro-pipeline kedro', {
            'kui-theme--dark': theme === 'dark',
            'kui-theme--light': theme === 'light',
        })}>>
        <h1>Spark lineage viz</h1>
        <Sidebar/>
        {/*Diagram will be added here*/}
    </div>
);

export default App;
