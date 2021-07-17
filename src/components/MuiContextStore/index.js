import get from 'lodash/get';
import React, { createContext, useEffect, useState } from 'react';

const DataContext = createContext(null);

function DataContextProvider(props) {
    const initialLayout = get(props, 'layout', []);
    const initialRows = get(props, 'rows', 1);

    const [layout, setLayout] = useState(initialLayout);
    const [rows, setRows] = useState(initialRows);

    const handlePanelAnnouncement = ({ side, shortText, title, tooltip, icon, showIcon = true, noPanel = false }) => {
        const uniqueId = Math.random().toString(36).substring(7);
        // console.log("Generated UniqueID:", uniqueId);
        setLayout(layout => [
            ...layout,
            {
                uniqueId,
                asGroup: false,
                asEmbedded: false,
                parentId: null,
                isVisible: false,
                index: layout.length,
                showBadge: false,
                notificationCount: 0,
                variant: 'dot',
                isCollapsed: false,
                index: layout.length,
                side,
                title,
                showIcon,
                shortText,
                tooltip,
                noPanel,
                icon,
            }
        ]);
        return uniqueId
    }

    const handleCountRows = () => {
        let count = 0;
        layout.forEach(lo => {
            const tmpCount = layout.filter(layoutObject => layoutObject.parentId === lo.uniqueId).length;
            if (tmpCount > count) { count = tmpCount + 1; }
        })
        console.log("count Rows", count);
        setRows(count)
    }

    const handleSetAsGroup = ({ uniqueId }) => {
        setLayout(layout.map(layoutObject => layoutObject.uniqueId === uniqueId
            ? { ...layoutObject, asGroup: !layoutObject.asGroup }
            : layoutObject));
    }
    const handleUnSetAsEmbedded = ({ uniqueId }) => {
        setLayout(layout.map(layoutObject => layoutObject.uniqueId === uniqueId
            ? { ...layoutObject, asGroup: false, asEmbedded: false, isVisible: false, parentId: null }
            : layoutObject));
        handleCountRows()
    }



    const handleSetAsEmbedded = ({ uniqueId, parentId }) => {
        const findParent = layout.find(layoutObject => layoutObject.uniqueId === parentId);
        if (findParent) {
            const updateEmbedded = layout.map(layoutObject => layoutObject.uniqueId === uniqueId
            ? { ...layoutObject, parentId, side: findParent.side, asEmbedded: !layoutObject.asEmbedded }
            : layoutObject);
            const activateParent = updateEmbedded.map(layoutObject => layoutObject.uniqueId === parentId
                ? { ...layoutObject, isVisible: true }
                : layoutObject
            );
            setLayout(activateParent);
        }
    }

    const handleSetSide = ({ uniqueId }) => {
        setLayout(layout.map(layoutObject => layoutObject.uniqueId === uniqueId
            ? { ...layoutObject, isVisible: false, side: layoutObject.side === 'right' ? "left" : 'right' }
            : layoutObject));
    }

    const handleSetVisible = ({ uniqueId }) => {
        const foundObject = layout.find(lo => lo.uniqueId === uniqueId);
        if (foundObject) {
            console.log("toggling visibility for id", uniqueId, foundObject);
            setLayout(layout => ([...layout.map(lo => {
                if (lo.side === foundObject.side) {
                    if (lo.uniqueId === foundObject.uniqueId) {
                        console.log('found by uniqueId')
                        return { ...lo, isVisible: !lo.isVisible }
                    } else if (lo.parentId === foundObject.uniqueId) {
                        console.log('found by parentId')
                        return { ...lo, isVisible: !lo.isVisible }
                    } else {
                        console.log('not found')
                        return { ...lo, isVisible: false }
                    }
                }
                console.log('other side')
                return lo
            })]));
        }
    }

    useEffect(() => { console.log("---"); layout.forEach(layoutObject => console.log(layoutObject)) }, [layout]);

    return <DataContext.Provider
        value={{
            layout, setLayout,
            rows,

            handleCountRows,
            handleUnSetAsEmbedded,
            handleSetAsGroup,
            handleSetVisible,
            handleSetSide,
            handleSetAsEmbedded,
            handlePanelAnnouncement
    }}>{props.children}</DataContext.Provider>
}

export default DataContext;
export { DataContextProvider };
