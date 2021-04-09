import React from "react";
import './App.scss';
import { Provider } from 'react-redux';
import ThemeContext from "./theme";
import classnames from "classnames";
import Sidebar from '@quantumblack/kedro-viz/lib/components/sidebar/index'
import configureStore from '@quantumblack/kedro-viz/lib/store/index'
import getInitialState from '@quantumblack/kedro-viz/lib/store/initial-state'

class App extends React.Component {

    render() {
        console.log(this.props.data)

        return (
            <ThemeContext.Provider value={'dark'}>{/*TODO put inside store?*/}
                <Wrapper data={this.props.data}/>
            </ThemeContext.Provider>

        );
    }
}

class Wrapper extends React.Component {

    constructor(props) {
        super(props);
        console.log('asdfasdfasfa')
        const initialState = getInitialState(props);
        console.log(initialState)
        this.store = configureStore(initialState);
    }

    render() {
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
