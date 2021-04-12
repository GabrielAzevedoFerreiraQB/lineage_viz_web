import React from "react";
import './App.scss';
import {Provider} from 'react-redux';
import classnames from "classnames";
import configureStore from '@quantumblack/kedro-viz/lib/store/index'
import getInitialState from '@quantumblack/kedro-viz/lib/store/initial-state'
import Sidebar from "./sidebar";
import {connect} from 'react-redux';

class App extends React.Component {
    constructor(props) {
        super(props);
        const initialState = getInitialState(props);
        this.store = configureStore(initialState);
        console.log('constructor:')
        console.log(this.store.getState())
    }

    render() {
        return (
            <Provider store={this.store}>
                <WrapperConnect data={this.props.data}/>
            </Provider>

        );
    }
}

export const Wrapper = ({theme}) => (
    <div
        className={classnames('kedro-pipeline kedro', {
            'kui-theme--dark': theme === 'dark',
            'kui-theme--light': theme === 'light',
        })}>>
        <Sidebar/>
        {/*Diagram will be added here*/}
    </div>
);


export const mapStateToProps = (state) => ({
    theme: state.theme,
});

const WrapperConnect = connect(mapStateToProps)(Wrapper);

export default App;
