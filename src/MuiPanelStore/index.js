import get from 'lodash/get';
import React, { createContext, useEffect, useState } from 'react';
import MuiPanelManager from '../MuiPanelManager';

const localStorageKey = 'material-ui-panel.layout'
const DataContext = createContext(null);

function MuiPanelProvider({ allowRightClick, initialSide = 'left', showCollapseButton, ...props } = props) {

    // const cachedLayout = localStorage.getItem(localStorageKey);

    const initialLayout = get(props, 'layout', []);
    const initialSettings = get(props, 'settings', {
        isCollapsed: false,
    });

    const [layout, setLayout] = useState(initialLayout);
    const [settings, setSettings] = useState(initialSettings);

    const handlePanelAnnouncement = ({ id, ref, children, notifications, subTitle, shortText, iconInHeader = true, title, tooltip, icon, showIcon = true, noPanel = false }) => {
        setLayout(layout => [
            ...layout.filter(lo => lo.uniqueId !== id),
            {
                id,
                uniqueId: id,
                side: initialSide,
                isVisible: false,
                asGroup: false,
                asEmbedded: false,
                parentId: null,
                iconInHeader,
                isCollapsed: false,
                ref,
                index: layout.length,
                showBadge: false,
                notifications: {
                    count: 0,
                    color: "primary",
                    ...notifications,
                },
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
    }

    const handleSetAsGroup = ({ uniqueId }) => {
        setLayout(layout.map(layoutObject => layoutObject.uniqueId === uniqueId
            ? { ...layoutObject, asGroup: !layoutObject.asGroup }
            : layoutObject));
    }

    const handleUnSetAsEmbedded = ({ uniqueId }) => {
        setLayout(layout.map(layoutObject =>
            layoutObject.uniqueId === uniqueId
                ? { ...layoutObject, asGroup: false, asEmbedded: false, isVisible: false, parentId: null }
                : layoutObject
        ));
    }

    const handlePanelAlerts = ({ id, count, color }) => {
        const foundObject = layout.find(layoutObject => layoutObject.id === id);
        if (foundObject && foundObject.notifications.count !== count) {
            setLayout(layout => layout.map(layoutObject => layoutObject.id === id
                ? { ...layoutObject, notifications: { count, color } }
                : layoutObject
            ));
        }
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

    const toggleSettingIsCollapsed = () => {
        setSettings({...settings, isCollapsed: !settings.isCollapsed });
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
            localStorageKey,
            JSON.stringify(layout.map(l => ({ ...l, children: undefined, icon: undefined }))    )
        )
    }, [layout]);

    // useEffect(() => { console.log("---"); layout.forEach(layoutObject => console.log(layoutObject)) }, [layout]);
    // useEffect(() => { console.log('settings', settings) }, [settings]);

    return <DataContext.Provider
        value={{
            layout, setLayout,
            settings, setSettings,

            handleUnSetAsEmbedded,
            toggleSettingIsCollapsed,
            handleSetAsGroup,
            handleSetVisible,
            handlePanelAlerts,
            handleSetSide,
            handleToggleCollapse,
            handleSetAsEmbedded,
            handlePanelAnnouncement
        }}>
        <MuiPanelManager {...{allowRightClick, showCollapseButton}}>
            {props.children}
        </MuiPanelManager>
    </DataContext.Provider>
}

export default DataContext;
export { MuiPanelProvider };
