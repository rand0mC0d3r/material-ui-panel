import get from 'lodash/get';
import React, { createContext, useEffect, useState } from 'react';
import MuiPanelManager from '../MuiPanelManager';
import { oppositeSide } from '../utils';
import MuiDebug from './MuiDebug';

const localStorageKey = 'material-ui-panel.layout'
const DataContext = createContext(null);

const getRandomColor = () => '#' + Math.random().toString(16).substr(-6)

function MuiPanelProvider({
	allowRightClick,
	initialSide = 'left',
	markerColor,
	inverseMarkers,
	debugMode,
	showCollapseButton,
	...props } = props) {

		// const cachedLayout = localStorage.getItem(localStorageKey);

		const var1 = {
			direction: 'horizontal',
			order: 'normal',
			zones: [
				{
					type: 'panel',
					panelId: "panel123"
				},
				{
					type: 'panel',
					panelId: 'panel31233',
				},
			]
		}

		const var2 = {
				direction: 'horizontal',
				order: 'normal',
				zones: [
					{
						type: 'panel',
						panelId: "panel123"
					},
					{
						type: 'list',
						direction: 'vertical',
						order: 'normal',
						zones: [
							{
								type: 'panel',
								panelId: "panel123"
							},
							{
								type: 'list',
								direction: 'horizontal',
								order: 'normal',
								zones: [
									{
										type: 'panel',
										panelId: "panel123"
									},
									{
										type: 'content',
										panelId: "content"
									}
								]
							},
						]
					},
					{
						type: 'content',
						panelId: "content"
					},
					{
						type: 'list',
						direction: 'vertical',
						order: 'normal',
						zones: [
							{
								type: 'panel',
								panelId: "panel123"
							},
							{
								type: 'content',
								panelId: "content"
							},
							{
								type: 'panel',
								panelId: "panel123"
							},
							{
								type: 'content',
								panelId: "content"
							}
						]
					},
				]
			}

	const var3 = [
		{
			id: (Math.random() + 1).toString(36).substring(7),
			direction: 'horizontal',
			order: 'normal',
			type: 'list',
			background: getRandomColor(),
			zones: [ ]
		},
		// {
		// 	id: 'abcdX12',
		// 	direction: 'horizontal',
		// 	order: 'normal',
		// 	zones: [ "xxxx", 'abcdX12sub']
		// },
		// {
		// 	id: 'abcdX12sub',
		// 	parentId: 'abcd',
		// 	direction: 'horizontal',
		// 	order: 'normal',
		// 	zones: [ "ytr"]
		// },
		// {
		// 	id: "ytr",
		// 	parentId: 'abcd',
		// 	type: 'panel',
		// 	panelId: "panel123"
		// },
		// {
		// 	id: "xxxx",
		// 	parentId: 'abcd',
		// 	type: 'panel',
		// 	panelId: "panel123"
		// },
		// {
		// 	id: "sfsdfsd",
		// 	parentId: 'abcd',
		// 	type: 'panel',
		// 	panelId: "panel123"
		// },
		// {
		// 	id: "sdfdsfsdf3",
		// 	parentId: 'abcd',
		// 	type: 'panel',
		// 	panelId: 'panel31233',
		// },
	]

		const initialLayout = get(props, 'layout', []);
		const initialSections = get(props, 'sections', var3);
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

	const toggleSectionDirection = ({ sectionId }) => {
		setSections(sections => sections.map(section => {
			if (section.id === sectionId) {
				return {
					...section,
					direction: section.direction === 'vertical' ? 'horizontal' : 'vertical'
				}
			}
			return section
		}))
	}

	const addZoneToSection = ({ sectionId }) => {
		const randomString = (Math.random() + 1).toString(36).substring(7)
		setSections(sections => [
			...sections.map(section => {
				if (section.id === sectionId) {
					return { ...section, zones: [...section.zones, randomString] }
				}
				return section
			}),
			{
				id: randomString,
				direction: 'horizontal',
				order: 'normal',
				background: getRandomColor(),
				parentId: sectionId,
				type: 'list',
				zones: [ ]
		},])
	}
	const addPanelToSection = ({ sectionId, panelId }) => {
		setSections(sections => sections.map(section => {
			if (section.id === sectionId) {
				return {
					...section,
					panelId
				}
			}
			return section
		}))
	}

	const chooseTypeForSection = ({ panelId, isList = false }) => {
		setSections(sections => sections.map(section => {
			if (section.id === panelId) {
				return {
					...section,
					type: isList ? 'list' : 'panel'
				}
			}
			return section
		}))
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
		useEffect(() => setSettings(settings => ({...settings, debugMode: debugMode })), [debugMode]);
		useEffect(() => !!markerColor && setSettings(settings => ({...settings, markerColor })), [markerColor]);

		// useEffect(() => { console.log("---"); layout.forEach(layoutObject => console.log(layoutObject)) }, [layout]);
		// useEffect(() => { console.log('settings', settings) }, [settings]);
		useEffect(() => { console.log('sections', sections) }, [sections]);

		return <DataContext.Provider
			value={{
				layout, setLayout,
				settings, setSettings,
				sections, setSections,


				addZoneToSection,
				toggleSectionDirection,
				chooseTypeForSection,
				addPanelToSection,

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
