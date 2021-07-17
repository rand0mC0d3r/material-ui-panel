import get from 'lodash/get';
import React, { createContext, useEffect, useState } from 'react';

const DataContext = createContext(null);

function DataContextProvider(props) {
    const initialLayout = get(props, 'layout', []);

    const [layout, setLayout] = useState(initialLayout);

    const handlePanelAnnouncement = ({ side, shortText, tooltip, icon, showIcon = true, noPanel = false }) => {
        const uniqueId = Math.random().toString(36).substring(7);
        // console.log("Generated UniqueID:", uniqueId);
        setLayout(layout => [
            ...layout,
            {
                uniqueId,
                asGroup: false,
                showBadge: false,
                notificationCount: 0,
                variant: 'dot',
                isVisible: false,
                isCollapsed: false,
                index: layout.length,
                side,
                showIcon,
                shortText,
                tooltip,
                noPanel,
                icon,
            }
        ]);
        return uniqueId
    }

    const handleSetAsGroup = ({ uniqueId }) => {
        // console.log("announcing as group for id", uniqueId, layout);
        setLayout(layout.map(layoutObject => layoutObject.uniqueId === uniqueId ? { ...layoutObject, asGroup: !layoutObject.asGroup } : layoutObject));
    }

    const handleSetSide = ({ uniqueId }) => {
        // console.log("switching side for id", uniqueId, layout);
        setLayout(layout.map(layoutObject => layoutObject.uniqueId === uniqueId ? { ...layoutObject, isVisible: false, side: layoutObject.side === 'right' ? "left" : 'right' } : layoutObject));
    }

    const handleSetVisible = ({ uniqueId }) => {
        // console.log("toggling visibility for id", uniqueId, layout);
        const foundObject = layout.find(lo => lo.uniqueId === uniqueId);
        if (foundObject) {
            setLayout(layout => ([...layout.map(lo => {
                if (lo.side === foundObject.side) {
                return { ...lo, isVisible: lo.uniqueId === foundObject.uniqueId ? !lo.isVisible : false }
                }
                return lo
            })]));
        }
    }

    // useEffect(() => { console.log('store layout', ...layout) }, [layout]);

    return <DataContext.Provider
        value={{
            layout, setLayout,
            handleSetAsGroup,
            handleSetVisible,
            handleSetSide,
            handlePanelAnnouncement
    }}>{props.children}</DataContext.Provider>
}

export default DataContext;
export { DataContextProvider };
