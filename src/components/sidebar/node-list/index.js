import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import utils from '@quantumblack/kedro-ui/lib/utils';
import NodeList from './node-list'
import {
    createGroup,
    getFilteredItems,
    // getGroups,
    // getSections
} from '@quantumblack/kedro-viz/lib/components/node-list/node-list-items';
import { toggleTagActive, toggleTagFilter } from '@quantumblack/kedro-viz/lib/actions/tags';
import { toggleTypeDisabled } from '@quantumblack/kedro-viz/lib/actions/node-type';
import { getNodeTypes } from '@quantumblack/kedro-viz/lib/selectors/node-types';
import { getTagData } from '@quantumblack/kedro-viz/lib/selectors/tags';
import { getNodeSelected } from '@quantumblack/kedro-viz/lib/selectors/nodes';
import {
    loadNodeData,
    toggleNodeHovered,
    toggleNodesDisabled,
} from '@quantumblack/kedro-viz/lib/actions/nodes';
import '@quantumblack/kedro-viz/lib/components/node-list/styles/node-list.css';
import {getGroupedNodes} from "./selector";
import { createSelector } from 'reselect';

const isTagType = (type) => type === 'tag';


/**
 * Returns groups of items per type
 * @param {array} types List of node types
 * @param {array} items List of items
 * @return {array} List of groups
 */
export const getGroups = createSelector(
    [(state) => state.types, (state) => state.items],
    (nodeTypes, items) => {
        console.log('BEG getGroups *************************************************************************')
        console.log('nodeTypes')
        console.log(nodeTypes)
        console.log('items...')
        console.log( Object.entries(items))

        const groups = {};
        for (const it of Object.entries(items)) {
            groups[it[0]] = createGroup({'id':it[0]}, items[it[0]]);
        }

        console.log('groups')
        console.log( groups)
        console.log('END getGroups *************************************************************************')

        return groups;
    }
);


/**
 * Provides data from the store to populate a NodeList component.
 * Also handles user interaction and dispatches updates back to the store.
 *
 * The data are hierarchical but provided through flat lists in the form of:
 *
 * Sections (first level) e.g. Categories, Elements
 * Groups (second level) e.g. Tags, Nodes, Datasets, Parameters
 * Items (third level) e.g. 'Data Engineering', 'Content Optimisation'
 */
const NodeListProvider = ({
                              faded,
                              nodes,
                              nodeSelected,
                              tags,
                              tagsEnabled,
                              types,
                              onToggleNodesDisabled,
                              onToggleNodeSelected,
                              onToggleNodeActive,
                              onToggleTagActive,
                              onToggleTagFilter,
                              onToggleTypeDisabled,
                          }) => {
    const [searchValue, updateSearchValue] = useState('');
    // console.log(nodes)
    // console.log(tags)
    // console.log(tagsEnabled)
    // console.log(nodeSelected)
    // console.log(searchValue)
    const items = getFilteredItems({
        nodes,
        tags,
        tagsEnabled,
        nodeSelected,
        searchValue,
    });
    delete items.tag
    const groups = getGroups({ types, items });

    const onItemClick = (item) => {
        if (isTagType(item.type)) {
            onTagItemChange(item, item.checked);
        } else {
            if (item.faded || item.selected) {
                onToggleNodeSelected(null);
            } else {
                onToggleNodeSelected(item.id);
            }
        }
    };

    const onItemChange = (item, checked) => {
        if (isTagType(item.type)) {
            onTagItemChange(item, checked);
        } else {
            if (checked) {
                onToggleNodeActive(null);
            }

            onToggleNodesDisabled([item.id], checked);
        }
    };

    const onItemMouseEnter = (item) => {
        if (isTagType(item.type)) {
            onToggleTagActive(item.id, true);
        } else if (item.visible) {
            onToggleNodeActive(item.id);
        }
    };

    const onItemMouseLeave = (item) => {
        if (isTagType(item.type)) {
            onToggleTagActive(item.id, false);
        } else if (item.visible) {
            onToggleNodeActive(null);
        }
    };

    const onToggleGroupChecked = (type, checked) => {
        console.log('---------------type')
        console.log(type)
        console.log('---------------checked')
        console.log(checked)
        if (isTagType(type)) {
            // Filter all tags if at least one tag item set, otherwise enable all tags
            const tagItems = items[type] || [];
            const someTagSet = tagItems.some((tagItem) => !tagItem.unset);
            const allTagsValue = someTagSet ? undefined : true;
            onToggleTagFilter(
                tagItems.map((tag) => tag.id),
                allTagsValue
            );
        } else {
            onToggleTypeDisabled(type, checked);
        }
    };

    const onTagItemChange = (tagItem, wasChecked) => {
        const tagItems = items[tagItem.type] || [];
        const oneTagChecked =
            tagItems.filter((tagItem) => tagItem.checked).length === 1;
        const shouldResetTags = wasChecked && oneTagChecked;

        if (shouldResetTags) {
            // Unset all tags
            onToggleTagFilter(
                tags.map((tag) => tag.id),
                undefined
            );
        } else {
            // Toggle the tag
            onToggleTagFilter([tagItem.id], !wasChecked);
        }

        // Reset node selection
        onToggleNodeSelected(null);
        onToggleNodeActive(null);
    };

    // Deselect node on Escape key
    const handleKeyDown = (event) => {
        utils.handleKeyEvent(event.keyCode, {
            escape: () => onToggleNodeSelected(null),
        });
    };
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    });
    // sections = [{'name':'Datasets', types:['data']}]
    const sections = [{
        'name':'Datasets',
        'types': Object.entries(items).map((el)=>(el[0]))
    }]
    // console.log('BEG========================================================================')
    // console.log('nodes')
    // console.log(nodes)
    // console.log('items')
    // console.log(items)
    // console.log('sec')
    // console.log(sections)
    // console.log('groups')
    // console.log(groups)
    // console.log('END========================================================================')

    return (
        <NodeList
            faded={faded}
            items={items}
            sections={sections}
            groups={groups}
            searchValue={searchValue}
            onUpdateSearchValue={updateSearchValue}
            onToggleGroupChecked={onToggleGroupChecked}
            onItemClick={onItemClick}
            onItemMouseEnter={onItemMouseEnter}
            onItemMouseLeave={onItemMouseLeave}
            onItemChange={onItemChange}
        />
    );
};

export const mapStateToProps = (state) => ({
    tags: getTagData(state),
    tagsEnabled: state.tag.enabled,
    nodes: getGroupedNodes(state),
    nodeSelected: getNodeSelected(state),
    types: getNodeTypes(state),
});

export const mapDispatchToProps = (dispatch) => ({
    onToggleTagActive: (tagIDs, active) => {
        dispatch(toggleTagActive(tagIDs, active));
    },
    onToggleTagFilter: (tagIDs, enabled) => {
        dispatch(toggleTagFilter(tagIDs, enabled));
    },
    onToggleTypeDisabled: (typeID, disabled) => {
        dispatch(toggleTypeDisabled(typeID, disabled));
    },
    onToggleNodeSelected: (nodeID) => {
        dispatch(loadNodeData(nodeID));
    },
    onToggleNodeActive: (nodeID) => {
        dispatch(toggleNodeHovered(nodeID));
    },
    onToggleNodesDisabled: (nodeIDs, disabled) => {
        dispatch(toggleNodesDisabled(nodeIDs, disabled));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(NodeListProvider);
