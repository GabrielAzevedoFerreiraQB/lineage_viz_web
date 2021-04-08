import Checkbox from "@quantumblack/kedro-ui/lib/components/checkbox/checkbox";
import ThemeContext from "../../theme";
import React from "react";

class NodeList extends React.Component {
    render() {
        const theme = this.context;
        return (
            <div>
                This Will asdfbe a Node List
                <section>
                    <Checkbox
                        label='Hello Worladfadfd'
                        name='test-1'
                        value={1}
                        theme={theme}/>
                    <Checkbox
                        label='Hello World'
                        disabled={true}
                        name='test-2'
                        value={1}
                        theme={theme}/>
                    <Checkbox
                        label='Hello World'
                        defaultChecked={true}
                        name='test-3'
                        value={1}
                        theme={theme}/>
                </section>
            </div>
        )
    }
}

NodeList.contextType = ThemeContext
export default NodeList;