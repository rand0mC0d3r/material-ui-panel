import get from 'lodash/get';
import React, { createContext, useEffect, useState } from 'react';

const DataContext = createContext(null);

function DataContextProvider(props) {
    const initialLayout = get(props, 'layout', []);

    const [layout, setLayout] = useState(initialLayout);

    const handlePanelAnnouncement = ({ ref, children, side, notificationCount = 0, subTitle, shortText, iconInHeader = true, title, tooltip, icon, showIcon = true, noPanel = false }) => {
        const uniqueId = Math.random().toString(36).substring(7);
        setLayout(layout => [
            ...layout,
            {
                uniqueId,
                side,


                isVisible: false,
                asGroup: false,
                asEmbedded: false,
                parentId: null,
                iconInHeader,
                isCollapsed: false,
                ref,
                index: layout.length,
                showBadge: false,
                notificationCount,
                variant: 'standard',
                index: layout.length,
                subTitle,
                title,
                showIcon,
                shortText,
                tooltip,
                noPanel,
                icon,
                children,
            }
        ]);
        return uniqueId
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
    }

    const handlePanelAlerts = ({ uniqueId, notificationCount }) => {
        setLayout(layout.map(layoutObject => layoutObject.uniqueId === uniqueId
            ? { ...layoutObject, notificationCount }
            : layoutObject));
    }

    const handleToggleCollapse = ({ uniqueId }) => {
        setLayout(layout.map(layoutObject => layoutObject.uniqueId === uniqueId
            ? { ...layoutObject, isCollapsed: !layoutObject.isCollapsed }
            : layoutObject));
    }

    const handleSetAsEmbedded = ({ uniqueId, parentId }) => {
        const findParent = layout.find(layoutObject => layoutObject.uniqueId === parentId);
        if (findParent) {
            const updateEmbedded = layout.map(layoutObject => layoutObject.uniqueId === uniqueId
            ? { ...layoutObject, parentId, isVisible: true, side: findParent.side, asEmbedded: !layoutObject.asEmbedded }
            : layoutObject);
            const activateParent = updateEmbedded.map(layoutObject => layoutObject.uniqueId === parentId || layoutObject.parentId === parentId
                ? { ...layoutObject, isVisible: true }
                : layoutObject
            );
            setLayout(activateParent);
        }
    }

    const handleSetSide = ({ uniqueId }) => {
        const findCurrent = layout.find(layoutObject => layoutObject.uniqueId === uniqueId);
        setLayout(layout
            .map(layoutObject => (layoutObject.uniqueId === uniqueId || layoutObject.parentId === uniqueId)
                ? {
                    ...layoutObject,
                    isVisible: true,
                    side: layoutObject.side === 'right' ? "left" : 'right'
                }
                : { ...layoutObject, isVisible: false })
        );
    }

    const handleSetVisible = ({ uniqueId }) => {
        const foundObject = layout.find(lo => lo.uniqueId === uniqueId);
        if (foundObject) {
            console.log("toggling visibility for id", uniqueId, foundObject);
            setLayout(layout => ([...layout.map(lo => {
                if (lo.side === foundObject.side) {
                    if (lo.uniqueId === foundObject.uniqueId) {
                        console.log('found by uniqueId')
                        return { ...lo, isVisible: !lo.isVisible, notificationCount: 0 }
                    } else if (lo.parentId === foundObject.uniqueId) {
                        console.log('found by parentId')
                        return { ...lo, isVisible: true }
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

    useEffect(() => {
        localStorage.setItem(
            'material-ui-panel.layout',
            JSON.stringify(layout.map(l => ({ ...l, children: null, icon: null }))    )
        )
    }, [layout]);

    useEffect(() => { console.log("---"); layout.forEach(layoutObject => console.log(layoutObject)) }, [layout]);

    return <DataContext.Provider
        value={{
            layout, setLayout,

            handleUnSetAsEmbedded,
            handleSetAsGroup,
            handleSetVisible,
            handlePanelAlerts,
            handleSetSide,
            handleToggleCollapse,
            handleSetAsEmbedded,
            handlePanelAnnouncement
    }}>{props.children}</DataContext.Provider>
}

export default DataContext;
export { DataContextProvider };
