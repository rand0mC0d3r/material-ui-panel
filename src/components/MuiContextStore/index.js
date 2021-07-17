import get from 'lodash/get';
import React, { createContext, useEffect, useState } from 'react';

const DataContext = createContext(null);

function DataContextProvider(props) {
    const initialLayout = get(props, 'layout', []);

    const [layout, setLayout] = useState(initialLayout);

    const handlePanelAnnouncement = (side, title, icon, noPanel = false) => {
        const uniqueId = Math.random().toString(36).substring(7);
        console.log("Generated UniqueID:", uniqueId);
        setLayout(layout => [
            ...layout,
            {
                uniqueId,
                showBadge: false,
                notificationCount: 0,
                variant: 'dot',
                isVisible: false,
                isCollapsed: false,
                index: layout.length,
                side,
                title,
                noPanel,
                icon,
            }
        ]);
        return uniqueId
    }

    useEffect(() => { console.log('store layout', ...layout) }, [layout]);

    return <DataContext.Provider
        value={{
            layout, setLayout,
            handlePanelAnnouncement
    }}>{props.children}</DataContext.Provider>
}

export default DataContext;
export { DataContextProvider };
