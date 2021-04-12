import { createSelector } from 'reselect';
import {
    getNodeDisabled,
    getNodeDisabledTag,
} from '@quantumblack/kedro-viz/lib/selectors/disabled';
import { getPipelineNodeIDs } from '@quantumblack/kedro-viz/lib/selectors/pipeline';


const getNodeName = (state) => state.node.name;
const getNodeDisabledNode = (state) => state.node.disabled;
const getNodeTags = (state) => state.node.tags;
const getNodeType = (state) => state.node.type;
const getNodeTypeDisabled = (state) => state.nodeType.disabled;
/**
 * Returns formatted nodes as an array, with all relevant properties
 */
export const getNodeData = createSelector(
    [
        getPipelineNodeIDs,
        getNodeName,
        getNodeType,
        getNodeDisabled,
        getNodeDisabledNode,
        getNodeDisabledTag,
        getNodeTypeDisabled,
        getNodeTags,
    ],
    (
        nodeIDs,
        nodeName,
        nodeType,
        nodeDisabled,
        nodeDisabledNode,
        nodeDisabledTag,
        typeDisabled,
        tags
    ) =>
        nodeIDs
            .sort((a, b) => {
                if (nodeName[a] < nodeName[b]) return -1;
                if (nodeName[a] > nodeName[b]) return 1;
                return 0;
            })
            .map((id) => ({
                id,
                name: nodeName[id],
                type: nodeType[id],
                tags: tags[id],
                disabled: nodeDisabled[id],
                disabled_node: Boolean(nodeDisabledNode[id]),
                disabled_tag: nodeDisabledTag[id],
                disabled_type: Boolean(typeDisabled[nodeType[id]]),
            }))
);

/**
 * Returns formatted nodes grouped by type
 */
export const getGroupedNodes = createSelector([getNodeData], (nodes) =>
    nodes.reduce(function (obj, item) {
        const key = item.type;
        if (!obj.hasOwnProperty(key)) {
            obj[key] = [];
        }
        obj[key].push(item);
        return obj;
    }, {})
);
