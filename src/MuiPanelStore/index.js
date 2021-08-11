import get from 'lodash/get';
import React, { createContext, useEffect, useState } from 'react';
import MuiPanelManager from '../MuiPanelManager';
import { oppositeSide } from '../utils';
import MuiDebug from './MuiDebug';

const localStorageKey = 'material-ui-panel.layout'
const DataContext = createContext(null);

function MuiPanelProvider({
	allowRightClick,
	initialSide = 'left',
	markerColor,
	inverseMarkers,
	debugMode,
	showCollapseButton,
	...props } = props) {

		// const cachedLayout = localStorage.getItem(localStorageKey);

		const initialLayout = get(props, 'layout', []);
		const initialSections = get(props, 'sections', {
			direction: 'vertical',
			order: 'normal',
			zoneA: 'content',
			zoneB: {
				direction: 'horizontal',
				order: 'normal',
				zoneA: 'panelNotifications',
				zoneB: 'panelAlerts',
			},
		});
		const initialSettings = get(props, 'settings', {
			isCollapsed: false,
			inverseMarkers: false,
			markerColor: 'textPrimary',
			debugMode: false,
		});

		const [layout, setLayout] = useState(initialLayout);
		const [sections, setSections] = useState(initialSections);
		const [settings, setSettings] = useState(initialSettings);

		const handlePanelAnnouncement = ({ id, ref, children, notifications, subTitle, shortText, iconInHeader = true, title, tooltip, icon, showIcon = true, noPanel = false }) => {
			setLayout(layout => [
				...layout.filter(lo => lo.uniqueId !== id),
				{
					id,
					uniqueId: id,
					asGroup: false,
					notifications: {
						count: 0,
						summary: 0,
						color: "primary",
						...notifications,
					},
					asEmbedded: false,
					side: initialSide,
					isVisible: false,
					parentId: null,
					iconInHeader,
					isCollapsed: false,
					ref,
					index: layout.length,
					showBadge: false,
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

		const updateParentSummary = (layout) => {
			return layout.map(layoutObject =>
				(layoutObject.parentId === null)
					? {
						...layoutObject,
						notifications: {
							...layoutObject.notifications,
							summary: layout.reduce((acc, value) => {
								if (value.parentId === layoutObject.uniqueId) {
									acc = acc + value.notifications.count;
								}
								return acc;
							}, 0) + layoutObject.notifications.count,
						}
					}
					: layoutObject
			)
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
			const updateObject = (layout) => {
				return layout.map(layoutObject =>
					(layoutObject.uniqueId === id && (layoutObject.notifications.count !== count || layoutObject.notifications.color !== color))
						? { ...layoutObject, notifications: { count, color } }
						: layoutObject
				)
			}

			setLayout(layout => updateParentSummary(updateObject(layout)));
		}

		const handleToggleCollapse = ({ uniqueId }) => {
			setLayout(layout.map(layoutObject => layoutObject.uniqueId === uniqueId
				? { ...layoutObject, isCollapsed: !layoutObject.isCollapsed }
				: layoutObject));
		}

		const handleSetAsEmbedded = ({ uniqueId, parentId }) => {
			const findParent = layout.find(layoutObject => layoutObject.uniqueId === parentId);
			if (findParent) {
				const updateEmbedded = layout => layout.map(layoutObject => layoutObject.uniqueId === uniqueId
					? { ...layoutObject, parentId, isVisible: true, side: findParent.side, asEmbedded: !layoutObject.asEmbedded }
					: layoutObject);
				const activateParent = layout =>  layout.map(layoutObject => layoutObject.uniqueId === parentId || layoutObject.parentId === parentId
					? { ...layoutObject, isVisible: true }
					: layoutObject);

				setLayout(layout => updateParentSummary(activateParent(updateEmbedded(layout))));
			}
		}

		const handleSetSide = ({ uniqueId }) => {
			setLayout(layout
				.map(layoutObject => (layoutObject.uniqueId === uniqueId || layoutObject.parentId === uniqueId)
					? {
						...layoutObject,
						isVisible: true,
						side: oppositeSide(layoutObject.side)
					}
					: { ...layoutObject, isVisible: false })
			);
		}

	const toggleSettingIsCollapsed = () => setSettings(settings => ({ ...settings, isCollapsed: !settings.isCollapsed }));

		const handleSetVisible = ({ uniqueId }) => {
			const foundObject = layout.find(lo => lo.uniqueId === uniqueId);
			if (foundObject) {
				setLayout(layout => ([...layout.map(lo => {
					if (lo.side === foundObject.side) {
						if (lo.uniqueId === foundObject.uniqueId) {
							return { ...lo, isVisible: !lo.isVisible, notifications: { ...lo.notifications, count: 0, summary: 0 }}
						} else if (lo.parentId === foundObject.uniqueId) {
							return { ...lo, isVisible: !lo.isVisible }
						} else {
							return { ...lo, isVisible: false }
						}
					}
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

		useEffect(() => setSettings(settings => ({...settings, inverseMarkers: !settings.inverseMarkers })), [inverseMarkers]);
		useEffect(() => setSettings(settings => ({...settings, debugMode: !settings.debugMode })), [debugMode]);
		useEffect(() => !!markerColor && setSettings(settings => ({...settings, markerColor })), [markerColor]);

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
			<MuiDebug />
		</DataContext.Provider>
}

export default DataContext;
export { MuiPanelProvider };
