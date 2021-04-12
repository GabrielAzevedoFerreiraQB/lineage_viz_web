import React from "react";
import './App.scss';
import { Provider } from 'react-redux';
import ThemeContext from "./theme";
import classnames from "classnames";
import configureStore from '@quantumblack/kedro-viz/lib/store/index'
import getInitialState from '@quantumblack/kedro-viz/lib/store/initial-state'
import Sidebar from "./sidebar";

class App extends React.Component {

    render() {
        return (
                <Wrapper data={this.props.data}/>
        );
    }
}

class Wrapper extends React.Component {

    constructor(props) {
        super(props);
        const initialState = getInitialState(props);
        this.store = configureStore(initialState);
        console.log('constructor:')
        console.log(this.store.getState())
    }

    render() {
        console.log('render:')
        console.log(this.store.getState())
        const theme = this.context;
        return (
            <div
                className={classnames('kedro-pipeline kedro', {
                    'kui-theme--dark': theme === 'dark',
                    'kui-theme--light': theme === 'light',
                })}>>
                <Provider store={this.store}>
                    <Sidebar/>
                </Provider>

                {/*Diagram will be added here*/}
            </div>
        );
    }

}
Wrapper.contextType = ThemeContext

export default App;
