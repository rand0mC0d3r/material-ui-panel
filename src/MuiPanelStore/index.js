/* eslint-disable no-debugger */
import get from 'lodash/get';
import { createContext, useEffect, useState } from 'react';
import MuiPanelManager from '../MuiPanelManager';
import { oppositeSide } from '../utils';
import MuiDebug from './MuiDebug';

const localStorageKey = 'material-ui-panel.layout';
const DataContext = createContext(null);

const getRandomColor = () => '#' + Math.random().toString(16).substr(-6);
const getRandomId = () => (Math.random() + 1).toString(36).substring(7);

function MuiPanelProvider({
	allowRightClick,
	initialSide = 'left',
	markerColor,
	inverseMarkers,
	debugMode,
	showCollapseButton,
	showSplitterButton,
	...props }) {
	// const cachedLayout = localStorage.getItem(localStorageKey);

	const initialLayout = get(props, 'layout', []);
	const initialStatus = get(props, 'status', []);
	const initialSections = get(props, 'sections', [
		{
			id: getRandomId(),
			direction: 'horizontal',
			order: 'normal',
			type: 'content',
			background: getRandomColor(),
			isCollapsed: true,
			zones: []
		},
	]);
	const initialSettings = get(props, 'settings', {
		isCollapsed: false,
		canSplitter: true,
		inverseMarkers: false,
		allowRightClick: false,
		markerColor: 'textPrimary',
		debugMode: false,
	});

	const [layout, setLayout] = useState(initialLayout);
	const [status, setStatus] = useState(initialStatus);
	const [sections, setSections] = useState(initialSections);
	const [settings, setSettings] = useState(initialSettings);

	const handleStatusAnnouncement = ({ id, side, elements, tooltip }) => {
		setStatus(status => [
			...status.filter(lo => lo.uniqueId !== id),
			{
				uniqueId: id,
				side,
				elements,
				tooltip,
				type: 'user'
			}
		]);
	};
	const handleStatusDestroy = ({ id }) => {
		setStatus(status => [...status.filter(lo => lo.uniqueId !== id)]);
	};

	const handlePanelAnnouncement = ({ id, ref, disabled, children, handleOnClick, placement, notifications, subTitle, shortText, iconInHeader = true, title, tooltip, icon, showIcon = true, noPanel = false }) => {
		setLayout(layout => [
			...layout.filter(lo => lo.uniqueId !== id),
			{
				uniqueId: id,
				asContent: false,
				asGroup: false,
				handleOnClick,
				notifications: {
					count: 0,
					summary: 0,
					color: 'primary',
					...notifications,
				},
				asEmbedded: false,
				asSection: false,
				side: initialSide,
				isVisible: false,
				parentId: null,
				disabled,
				iconInHeader,
				isCollapsed: false,
				ref,
				index: layout.length,
				showBadge: false,
				variant: 'standard',
				subTitle,
				title,
				placement,
				showIcon,
				shortText,
				tooltip,
				noPanel,
				icon,
				children,
			}
		]);
	};

	const handlePanelDestroy = ({ id }) => {
		setLayout(layout => [...layout.filter(lo => lo.uniqueId !== id)]);
	};

	const handleContentAnnouncement = ({ id, children }) => {
		setLayout(layout => [
			...layout.filter(lo => lo.uniqueId !== id),
			{
				uniqueId: id,
				asContent: true,
				side: initialSide,
				index: layout.length,
				children,
			}
		]);
	};

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
		);
	};

	const handleSetAsGroup = ({ uniqueId }) => {
		setLayout(layout => layout.map(layoutObject => layoutObject.uniqueId === uniqueId
			? { ...layoutObject, asGroup: !layoutObject.asGroup }
			: layoutObject));
	};

	const handleSetIcon = ({ uniqueId, icon }) => {
		setLayout(layout => layout.map(layoutObject => layoutObject.uniqueId === uniqueId
			? { ...layoutObject, icon }: layoutObject));
	};

	const handleSetStatusElements = ({ uniqueId, elements }) => {
		console.log(uniqueId, elements, status);
		setStatus(status => status.map(statusObject => statusObject.uniqueId === uniqueId
			? { ...statusObject, elements }
			: statusObject));
	};

	const handleUnSetAsEmbedded = ({ uniqueId }) => {
		setLayout(layout.map(layoutObject =>
			layoutObject.uniqueId === uniqueId
				? { ...layoutObject, asGroup: false, asEmbedded: false, isVisible: false, parentId: null }
				: layoutObject
		));
	};

	const setSectionUrl = ({ sectionId, url }) => {
		setSections(sections => sections.map(section => {
			if (section.id === sectionId) {
				return {
					...section,
					url
				};
			}
			return section;
		}));
	};

	const toggleSectionDirection = ({ sectionId }) => {
		setSections(sections => sections.map(section => {
			if (section.id === sectionId) {
				return {
					...section,
					direction: section.direction === 'vertical' ? 'horizontal' : 'vertical'
				};
			}
			return section;
		}));
	};

	const toggleCollapseSection = ({ sectionId }) => {
		console.log('i am here', sectionId);
		setSections(sections => sections.map(section => {
			if (section.id === sectionId) {
				return {
					...section,
					isCollapsed: !section.isCollapsed
				};
			}
			return section;
		}));
	};

	const addZoneToSection = ({ sectionId }) => {
		const randomString = (Math.random() + 1).toString(36).substring(7);
		setSections(sections => [
			...sections.map(section => {
				if (section.id === sectionId) {
					return { ...section, zones: [...section.zones, randomString] };
				}
				return section;
			}),
			{
				id: randomString,
				direction: 'vertical',
				order: 'normal',
				background: getRandomColor(),
				parentId: sectionId,
				isCollapsed: false,
				type: 'panel',
				zones: []
			}]);
	};

	const removeZoneFromSection = ({ sectionId }) => {
		console.log('clicked remove section');
		setSections(sections => [
			...sections
				.filter(section => section.id !== sectionId)
				.map(section => {
					if (section.zones.some(sz => sz === sectionId)) {
						return { ...section, zones: [...section.zones.filter(sz => sz !== sectionId)] };
					}
					return section;
				}),
		]);
	};

	const addPanelToSection = ({ sectionId, panelId }) => {
		let previousPanel = null;
		setSections(sections => sections.map(section => {
			if (section.id === sectionId) {
				previousPanel = section.panelId;
				return {
					...section,
					panelId,
					isCollapsed: false,
				};
			}
			if (section.panelId === panelId) {
				previousPanel = section.panelId;
				return {
					...section,
					panelId: null,
				};
			}

			return section;
		}));
		setLayout(layout => layout
			.map(layoutObject => layoutObject.uniqueId === panelId || layoutObject.parentId === panelId
				? { ...layoutObject, asSection: true, isVisible: true }
				: layoutObject)
			.map(layoutObject => layoutObject.uniqueId === previousPanel || layoutObject.parentId === previousPanel
				? { ...layoutObject, asSection: false, isVisible: false }
				: layoutObject));
	};


	const removePanelFromSection = ({ sectionId, panelId }) => {
		console.log('here', panelId);
		setSections(sections => sections.map(section => {
			if (section.id === sectionId) {
				return {
					...section,
					panelId: null
				};
			}
			return section;
		}));
		setLayout(layout => layout.map(layoutObject => layoutObject.uniqueId === panelId
			? { ...layoutObject, asSection: false, isVisible: false }
			: layoutObject));
	};

	const showContent = ({ sectionId }) => {
		let foundPanelId = null;
		setSections(sections => sections.map(section => {
			foundPanelId = section.panelId;
			if (section.type === 'content') {
				return {
					...section,
					type: 'list',
				};
			}
			if (section.id === sectionId) {
				return {
					...section,
					type: 'content',
				};
			}
			return section;
		}));
		setLayout(layout => layout.map(layoutObject => layoutObject.uniqueId === foundPanelId
			? { ...layoutObject, asSection: false, isVisible: false }
			: layoutObject));
	};

	const splitContentNg = ({ sectionId, type, index, count }) => {
		debugger;
		const randomStrings = [getRandomId(), getRandomId(), getRandomId()];

		setSections(sections => [
			...sections.map(section => {
				if (section.id === sectionId) {
					return {
						...section,
						zones: [...section.zones, ...randomStrings.slice(0, count)],
						direction: type === 'vs' ? 'horizontal' : 'vertical',
						type: 'list'
					};
				}
				return section;
			}),
			...[...Array(count)].map((item, indexCount) => ({
				uniqueId: randomStrings[indexCount],
				id: randomStrings[indexCount],
				direction: 'vertical',
				order: 'normal',
				background: getRandomColor(),
				parentId: sectionId,
				isCollapsed: false,
				type: indexCount === index ? 'content' : 'panel',
				zones: [ ]
			}))
		]);
	};
	const splitContent = ({ sectionId }) => {
		const randomString = (Math.random() + 1).toString(36).substring(7);
		const randomStringPanel = (Math.random() + 1).toString(36).substring(7);
		setSections(sections => [
			...sections.map(section => {
				if (section.id === sectionId) {
					return { ...section, zones: [...section.zones, randomString, randomStringPanel], type: 'list' };
				}
				return section;
			}),
			{
				id: randomString,
				uniqueId: randomString,
				direction: 'vertical',
				order: 'normal',
				background: getRandomColor(),
				parentId: sectionId,
				isCollapsed: false,
				type: 'content',
				zones: [ ]
			},
			{
				id: randomStringPanel,
				uniqueId: randomStringPanel,
				direction: 'vertical',
				order: 'normal',
				background: getRandomColor(),
				parentId: sectionId,
				isCollapsed: false,
				type: 'panel',
				zones: []
		}]);
	};

	const chooseTypeForSection = ({ panelId, type = 'list' }) => {
		let foundPanelId = null;
		setSections(sections => sections.map(section => {
			if (section.id === panelId) {
				foundPanelId = section.panelId;
				return {
					...section,
					type,
					isCollapsed: false,
					panelId: undefined,
					url: undefined,
				};
			}
			return section;
		}));
		setLayout(layout => layout.map(layoutObject => layoutObject.uniqueId === foundPanelId
			? { ...layoutObject, asSection: false, isVisible: false }
			: layoutObject));
	};

	const handlePanelAlerts = ({ id, count, color }) => {
			const updateObject = (layout) => {
				return layout.map(layoutObject =>
					(layoutObject.uniqueId === id && (layoutObject.notifications.count !== count || layoutObject.notifications.color !== color))
						? { ...layoutObject, notifications: { count, color } }
						: layoutObject
				);
			};

			setLayout(layout => updateParentSummary(updateObject(layout)));
		};

		const handleToggleCollapse = ({ uniqueId }) => {
			setLayout(layout.map(layoutObject => layoutObject.uniqueId === uniqueId
				? { ...layoutObject, isCollapsed: !layoutObject.isCollapsed }
				: layoutObject));
		};

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
		};

		const handleSetSide = ({ uniqueId }) => {
			setLayout(layout
				.map(layoutObject => (layoutObject.uniqueId === uniqueId || layoutObject.parentId === uniqueId)
					? {
						...layoutObject,
						side: oppositeSide(layoutObject.side)
					}
					: { ...layoutObject, isVisible: false })
			);
		};

	const toggleSettingIsCollapsed = (collapsed) => setSettings(settings => ({ ...settings, isCollapsed: collapsed ? collapsed : !settings.isCollapsed }));

	const handleSetVisible = ({ uniqueId }) => {
		setSettings(settings => ({ ...settings, isCollapsed: false }));

		const foundObject = layout.find(lo => lo.uniqueId === uniqueId);
		if (foundObject) {
			setLayout(layout => ([...layout.map(lo => {
				if (lo.side === foundObject.side && !lo.asSection) {
					if (lo.uniqueId === foundObject.uniqueId) {
						return { ...lo, isVisible: !lo.isVisible, notifications: { ...lo.notifications, count: 0, summary: 0 }};
					} else if (lo.parentId === foundObject.uniqueId) {
						return { ...lo, isVisible: !lo.isVisible };
					} else {
						return { ...lo, isVisible: false };
					}
				}
				return lo;
			})]));
		}
	};

		useEffect(() => {
			localStorage.setItem(
				localStorageKey,
				JSON.stringify(layout.map(l => ({ ...l, children: undefined, icon: undefined }))    )
			);
		}, [layout]);

		useEffect(() => setSettings(settings => ({ ...settings, inverseMarkers: !settings.inverseMarkers })), [inverseMarkers]);

		useEffect(() => setSettings(settings => ({ ...settings, allowRightClick: !settings.allowRightClick })), [allowRightClick]);

		useEffect(() => setSettings(settings => ({ ...settings, debugMode: debugMode })), [debugMode]);


		useEffect(() => !!markerColor && setSettings(settings => ({...settings, markerColor })), [markerColor]);

		// useEffect(() => { console.log("---"); layout.forEach(layoutObject => console.log(layoutObject)) }, [layout]);
		// useEffect(() => { console.log('settings', settings) }, [settings]);
		// useEffect(() => { console.log('sections', sections) }, [sections]);
		// useEffect(() => { console.log('status', status) }, [status]);

	return <DataContext.Provider
			id="provider"
			value={{
				layout, setLayout,
				settings, setSettings,
				sections, setSections,
				status,


				showContent,
				addZoneToSection, removeZoneFromSection,

				splitContent,
				splitContentNg,

				toggleSectionDirection,
				chooseTypeForSection,
				setSectionUrl,
				toggleCollapseSection,
				addPanelToSection, removePanelFromSection,

				handleUnSetAsEmbedded,
				toggleSettingIsCollapsed,
				handleSetAsGroup,
				handleSetVisible,
				handlePanelAlerts,
				handleSetSide,
				handleToggleCollapse,
				handleSetAsEmbedded,
				handleSetIcon,
				handlePanelAnnouncement,
				handleContentAnnouncement,
				handlePanelDestroy,

				handleStatusAnnouncement,
				handleStatusDestroy,
				handleSetStatusElements,
			}}>
			<MuiPanelManager {...{allowRightClick, showCollapseButton, showSplitterButton }}>
				{props.children}
			</MuiPanelManager>
			{settings.debugMode && <MuiDebug />}
		</DataContext.Provider>;
}

export default DataContext;
export { MuiPanelProvider };
