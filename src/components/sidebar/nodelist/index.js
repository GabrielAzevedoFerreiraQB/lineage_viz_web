import Checkbox from "@quantumblack/kedro-ui/lib/components/checkbox/checkbox";
import ThemeContext from "../../theme";
import React from "react";

class NodeList extends React.Component {
    render() {
        const theme = this.context;
        const dfs = this.extracted(theme);
        return (
            <div>
                <section>
                    {dfs}
                </section>
            </div>
        )
    }

    extracted(theme) {
        const dfs = [];
        // const nodes  = this.props.nodes_and_atts;
        const nodes = [1, 2, 3, 4, 5];
        nodes.forEach((node) => {
            dfs.push(<Checkbox label={node} name={String(node)} value={1} key={node} theme={theme}/>);
        });
        return dfs;
    }
}

NodeList.contextType = ThemeContext
export default NodeList;