import React from "react";
import './App.scss';
import Sidebar from "./sidebar";
import ThemeContext from "./theme";
import classnames from "classnames";


class App extends React.Component {

    render() {
        return (
            <ThemeContext.Provider value={'dark'}>
                <Wrapper/>
            </ThemeContext.Provider>

        );
    }
}

class Wrapper extends React.Component {
    render() {
        const theme = this.context;
        return (
            <div
                className={classnames('kedro-pipeline kedro', {
                    'kui-theme--dark': theme === 'dark',
                    'kui-theme--light': theme === 'light',
                })}>>
                <Sidebar/>
                {/*Diagram will be added here*/}
            </div>
        );
    }

}
Wrapper.contextType = ThemeContext

export default App;
