import get from 'lodash/get';
import React, { createContext, useEffect, useState } from 'react';

const DataContext = createContext(null);

function DataContextProvider(props) {
    const initialLayout = get(props, 'layout', []);

    const [layout, setLayout] = useState(initialLayout);

    const handlePanelAnnouncement = (side, title, icon, noPanel = false) => {
        setLayout(layout => [
            ...layout.filter(lo => lo.title !== title),
            {
                showBadge: false,
                notificationCount: 0,
                variant: 'dot',
                isVisible: false,
                index: layout.length,
                side,
                title,
                noPanel,
                icon,
            }
        ]);
    }

    useEffect(() => { console.log('store layout', layout) }, [layout]);

    return <DataContext.Provider
        value={{
            layout, setLayout,
            handlePanelAnnouncement
    }}>{props.children}</DataContext.Provider>
}

export default DataContext;
export { DataContextProvider };
