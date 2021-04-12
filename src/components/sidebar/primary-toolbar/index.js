import React from 'react';
import {PrimaryToolbar} from "@quantumblack/kedro-viz/lib/components/primary-toolbar";
import { connect } from 'react-redux';
import {
    toggleExportModal,
    toggleLayers,
    toggleSidebar,
    toggleTextLabels,
    toggleTheme,
} from '@quantumblack/kedro-viz/lib/actions';
import { getVisibleLayerIDs } from '@quantumblack/kedro-viz/lib/selectors/disabled';
import '@quantumblack/kedro-viz/lib/components/primary-toolbar/primary-toolbar.css';

export const mapStateToProps = (state) => ({
    disableLayerBtn: !state.layer.ids.length,
    textLabels: state.textLabels,
    theme: state.theme,
    visible: state.visible,
    visibleLayers: Boolean(getVisibleLayerIDs(state).length),
});

export const mapDispatchToProps = (dispatch) => ({
    onToggleExportModal: (value) => {
        dispatch(toggleExportModal(value));
    },
    onToggleLayers: (value) => {
        dispatch(toggleLayers(Boolean(value)));
    },
    onToggleSidebar: (visible) => {
        dispatch(toggleSidebar(visible));
    },
    onToggleTextLabels: (value) => {
        dispatch(toggleTextLabels(Boolean(value)));
    },
    onToggleTheme: (value) => {
        dispatch(toggleTheme(value));
    },
});

/**
 * Main contols for filtering the chart data
 * @param {Function} onToggleTheme Handle toggling theme between light/dark
 * @param {Function} onToggleTextLabels Handle toggling text labels on/off
 * @param {Boolean} textLabels Whether text labels are displayed
 * @param {string} theme Kedro UI light/dark theme
 */
export default connect(mapStateToProps, mapDispatchToProps)(PrimaryToolbar);
