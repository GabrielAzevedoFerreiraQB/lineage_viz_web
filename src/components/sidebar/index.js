import React  from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import '@quantumblack/kedro-viz/lib/components/sidebar/sidebar.css';
// import NodeList from '@quantumblack/kedro-viz/lib/components/node-list';
// import PrimaryToolbar from '@quantumblack/kedro-viz/lib/components/primary-toolbar';
import PrimaryToolbar from "./primary-toolbar";
import NodeListProvider from './node-list/index'


/**
 * Main app container. Handles showing/hiding the sidebar nav, and theme classes.
 * @param {boolean} props.visible Whether the sidebar is open/closed
 */
export const Sidebar = ({ visible }) => {
    // const [pipelineIsOpen, togglePipeline] = useState(false);
    return (
        <>
            <div
                className={classnames('pipeline-sidebar', {
                    'pipeline-sidebar--visible': visible,
                })}>
                <div className="pipeline-ui">
                    {/*<PipelineList onToggleOpen={togglePipeline} />*/}
                    <NodeListProvider/>
                </div>
                <nav className="pipeline-toolbar">
                    <PrimaryToolbar />
                    {/*<MiniMapToolbar />*/}
                </nav>
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    visible: state.visible.sidebar,
});

export default connect(mapStateToProps)(Sidebar);