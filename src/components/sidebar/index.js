import React from "react";
import SearchBar from '@quantumblack/kedro-ui/lib/components/search-bar';
import './index.css';
import classnames from "classnames";
import ThemeContext from "../theme";
import NodeList from "./nodelist";

class Sidebar extends React.Component {
    // static contextType = ThemeContext;
    render() {
        console.log(this.context);
        const theme = this.context;
        return (
            <div className={classnames('pipeline-sidebar', {'pipeline-sidebar--visible': true})}>
                <div className="pipeline-ui">
                    <SearchBar theme={theme}/>
                    <NodeList/>
                </div>
            </div>
        )
    }
}

Sidebar.contextType = ThemeContext


export default Sidebar;


// todo:    list of nodes and att passed as input
// todo: collapse and toggle
// todo:    background color right
// todo: collapse sidebar
// todo:
