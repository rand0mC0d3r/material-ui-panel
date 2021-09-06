"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MuiPanelProvider = MuiPanelProvider;
exports.default = void 0;

var _get = _interopRequireDefault(require("lodash/get"));

var _react = require("react");

var _MuiPanelManager = _interopRequireDefault(require("../MuiPanelManager"));

var _utils = require("../utils");

var _MuiDebug = _interopRequireDefault(require("./MuiDebug"));

var _excluded = ["allowRightClick", "initialSide", "markerColor", "inverseMarkers", "debugMode", "showCollapseButton"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var localStorageKey = 'material-ui-panel.layout';
var DataContext = /*#__PURE__*/(0, _react.createContext)(null);

var getRandomColor = function getRandomColor() {
  return '#' + Math.random().toString(16).substr(-6);
};

var getRandomId = function getRandomId() {
  return (Math.random() + 1).toString(36).substring(7);
};

function MuiPanelProvider(_ref) {
  var allowRightClick = _ref.allowRightClick,
      _ref$initialSide = _ref.initialSide,
      initialSide = _ref$initialSide === void 0 ? 'left' : _ref$initialSide,
      markerColor = _ref.markerColor,
      inverseMarkers = _ref.inverseMarkers,
      debugMode = _ref.debugMode,
      showCollapseButton = _ref.showCollapseButton,
      props = _objectWithoutProperties(_ref, _excluded);

  // const cachedLayout = localStorage.getItem(localStorageKey);
  var initialLayout = (0, _get.default)(props, 'layout', []);
  var initialStatus = (0, _get.default)(props, 'status', []);
  var initialSections = (0, _get.default)(props, 'sections', [{
    id: getRandomId(),
    direction: 'horizontal',
    order: 'normal',
    type: 'content',
    background: getRandomColor(),
    isCollapsed: true,
    zones: []
  }]);
  var initialSettings = (0, _get.default)(props, 'settings', {
    isCollapsed: false,
    inverseMarkers: false,
    markerColor: 'textPrimary',
    debugMode: false
  });

  var _useState = (0, _react.useState)(initialLayout),
      _useState2 = _slicedToArray(_useState, 2),
      layout = _useState2[0],
      setLayout = _useState2[1];

  var _useState3 = (0, _react.useState)(initialStatus),
      _useState4 = _slicedToArray(_useState3, 2),
      status = _useState4[0],
      setStatus = _useState4[1];

  var _useState5 = (0, _react.useState)(initialSections),
      _useState6 = _slicedToArray(_useState5, 2),
      sections = _useState6[0],
      setSections = _useState6[1];

  var _useState7 = (0, _react.useState)(initialSettings),
      _useState8 = _slicedToArray(_useState7, 2),
      settings = _useState8[0],
      setSettings = _useState8[1];

  var handleStatusAnnouncement = function handleStatusAnnouncement(_ref2) {
    var id = _ref2.id,
        side = _ref2.side,
        elements = _ref2.elements,
        tooltip = _ref2.tooltip;
    setStatus(function (status) {
      return [].concat(_toConsumableArray(status.filter(function (lo) {
        return lo.uniqueId !== id;
      })), [{
        uniqueId: id,
        side: side,
        elements: elements,
        tooltip: tooltip,
        type: 'user'
      }]);
    });
  };

  var handlePanelAnnouncement = function handlePanelAnnouncement(_ref3) {
    var id = _ref3.id,
        ref = _ref3.ref,
        children = _ref3.children,
        handleOnClick = _ref3.handleOnClick,
        placement = _ref3.placement,
        notifications = _ref3.notifications,
        subTitle = _ref3.subTitle,
        shortText = _ref3.shortText,
        _ref3$iconInHeader = _ref3.iconInHeader,
        iconInHeader = _ref3$iconInHeader === void 0 ? true : _ref3$iconInHeader,
        title = _ref3.title,
        tooltip = _ref3.tooltip,
        icon = _ref3.icon,
        _ref3$showIcon = _ref3.showIcon,
        showIcon = _ref3$showIcon === void 0 ? true : _ref3$showIcon,
        _ref3$noPanel = _ref3.noPanel,
        noPanel = _ref3$noPanel === void 0 ? false : _ref3$noPanel;
    setLayout(function (layout) {
      return [].concat(_toConsumableArray(layout.filter(function (lo) {
        return lo.uniqueId !== id;
      })), [{
        uniqueId: id,
        asContent: false,
        asGroup: false,
        handleOnClick: handleOnClick,
        notifications: _objectSpread({
          count: 0,
          summary: 0,
          color: 'primary'
        }, notifications),
        asEmbedded: false,
        asSection: false,
        side: initialSide,
        isVisible: false,
        parentId: null,
        iconInHeader: iconInHeader,
        isCollapsed: false,
        ref: ref,
        index: layout.length,
        showBadge: false,
        variant: 'standard',
        subTitle: subTitle,
        title: title,
        placement: placement,
        showIcon: showIcon,
        shortText: shortText,
        tooltip: tooltip,
        noPanel: noPanel,
        icon: icon,
        children: children
      }]);
    });
  };

  var handleContentAnnouncement = function handleContentAnnouncement(_ref4) {
    var id = _ref4.id,
        children = _ref4.children;
    setLayout(function (layout) {
      return [].concat(_toConsumableArray(layout.filter(function (lo) {
        return lo.uniqueId !== id;
      })), [{
        uniqueId: id,
        asContent: true,
        side: initialSide,
        index: layout.length,
        children: children
      }]);
    });
  };

  var updateParentSummary = function updateParentSummary(layout) {
    return layout.map(function (layoutObject) {
      return layoutObject.parentId === null ? _objectSpread(_objectSpread({}, layoutObject), {}, {
        notifications: _objectSpread(_objectSpread({}, layoutObject.notifications), {}, {
          summary: layout.reduce(function (acc, value) {
            if (value.parentId === layoutObject.uniqueId) {
              acc = acc + value.notifications.count;
            }

            return acc;
          }, 0) + layoutObject.notifications.count
        })
      }) : layoutObject;
    });
  };

  var handleSetAsGroup = function handleSetAsGroup(_ref5) {
    var uniqueId = _ref5.uniqueId;
    setLayout(layout.map(function (layoutObject) {
      return layoutObject.uniqueId === uniqueId ? _objectSpread(_objectSpread({}, layoutObject), {}, {
        asGroup: !layoutObject.asGroup
      }) : layoutObject;
    }));
  };

  var handleSetStatusElements = function handleSetStatusElements(_ref6) {
    var uniqueId = _ref6.uniqueId,
        elements = _ref6.elements;
    console.log(uniqueId, elements, status);
    setStatus(function (status) {
      return status.map(function (statusObject) {
        return statusObject.uniqueId === uniqueId ? _objectSpread(_objectSpread({}, statusObject), {}, {
          elements: elements
        }) : statusObject;
      });
    });
  };

  var handleUnSetAsEmbedded = function handleUnSetAsEmbedded(_ref7) {
    var uniqueId = _ref7.uniqueId;
    setLayout(layout.map(function (layoutObject) {
      return layoutObject.uniqueId === uniqueId ? _objectSpread(_objectSpread({}, layoutObject), {}, {
        asGroup: false,
        asEmbedded: false,
        isVisible: false,
        parentId: null
      }) : layoutObject;
    }));
  };

  var toggleSectionDirection = function toggleSectionDirection(_ref8) {
    var sectionId = _ref8.sectionId;
    setSections(function (sections) {
      return sections.map(function (section) {
        if (section.id === sectionId) {
          return _objectSpread(_objectSpread({}, section), {}, {
            direction: section.direction === 'vertical' ? 'horizontal' : 'vertical'
          });
        }

        return section;
      });
    });
  };

  var toggleCollapseSection = function toggleCollapseSection(_ref9) {
    var sectionId = _ref9.sectionId;
    console.log('i am here', sectionId);
    setSections(function (sections) {
      return sections.map(function (section) {
        if (section.id === sectionId) {
          return _objectSpread(_objectSpread({}, section), {}, {
            isCollapsed: !section.isCollapsed
          });
        }

        return section;
      });
    });
  };

  var addZoneToSection = function addZoneToSection(_ref10) {
    var sectionId = _ref10.sectionId;
    var randomString = (Math.random() + 1).toString(36).substring(7);
    setSections(function (sections) {
      return [].concat(_toConsumableArray(sections.map(function (section) {
        if (section.id === sectionId) {
          return _objectSpread(_objectSpread({}, section), {}, {
            zones: [].concat(_toConsumableArray(section.zones), [randomString])
          });
        }

        return section;
      })), [{
        id: randomString,
        direction: 'vertical',
        order: 'normal',
        background: getRandomColor(),
        parentId: sectionId,
        isCollapsed: false,
        type: 'panel',
        zones: []
      }]);
    });
  };

  var removeZoneFromSection = function removeZoneFromSection(_ref11) {
    var sectionId = _ref11.sectionId;
    console.log('clicked remove section');
    setSections(function (sections) {
      return _toConsumableArray(sections.filter(function (section) {
        return section.id !== sectionId;
      }).map(function (section) {
        if (section.zones.some(function (sz) {
          return sz === sectionId;
        })) {
          return _objectSpread(_objectSpread({}, section), {}, {
            zones: _toConsumableArray(section.zones.filter(function (sz) {
              return sz !== sectionId;
            }))
          });
        }

        return section;
      }));
    });
  };

  var addPanelToSection = function addPanelToSection(_ref12) {
    var sectionId = _ref12.sectionId,
        panelId = _ref12.panelId;
    var previousPanel = null;
    setSections(function (sections) {
      return sections.map(function (section) {
        if (section.id === sectionId) {
          previousPanel = section.panelId;
          return _objectSpread(_objectSpread({}, section), {}, {
            panelId: panelId,
            isCollapsed: false
          });
        }

        if (section.panelId === panelId) {
          previousPanel = section.panelId;
          return _objectSpread(_objectSpread({}, section), {}, {
            panelId: null
          });
        }

        return section;
      });
    });
    setLayout(function (layout) {
      return layout.map(function (layoutObject) {
        return layoutObject.uniqueId === panelId || layoutObject.parentId === panelId ? _objectSpread(_objectSpread({}, layoutObject), {}, {
          asSection: true,
          isVisible: true
        }) : layoutObject;
      }).map(function (layoutObject) {
        return layoutObject.uniqueId === previousPanel || layoutObject.parentId === previousPanel ? _objectSpread(_objectSpread({}, layoutObject), {}, {
          asSection: false,
          isVisible: false
        }) : layoutObject;
      });
    });
  };

  var removePanelFromSection = function removePanelFromSection(_ref13) {
    var sectionId = _ref13.sectionId,
        panelId = _ref13.panelId;
    console.log('here', panelId);
    setSections(function (sections) {
      return sections.map(function (section) {
        if (section.id === sectionId) {
          return _objectSpread(_objectSpread({}, section), {}, {
            panelId: null
          });
        }

        return section;
      });
    });
    setLayout(function (layout) {
      return layout.map(function (layoutObject) {
        return layoutObject.uniqueId === panelId ? _objectSpread(_objectSpread({}, layoutObject), {}, {
          asSection: false,
          isVisible: false
        }) : layoutObject;
      });
    });
  };

  var showContent = function showContent(_ref14) {
    var sectionId = _ref14.sectionId;
    var foundPanelId = null;
    setSections(function (sections) {
      return sections.map(function (section) {
        foundPanelId = section.panelId;

        if (section.type === 'content') {
          return _objectSpread(_objectSpread({}, section), {}, {
            type: 'list'
          });
        }

        if (section.id === sectionId) {
          return _objectSpread(_objectSpread({}, section), {}, {
            type: 'content'
          });
        }

        return section;
      });
    });
    setLayout(function (layout) {
      return layout.map(function (layoutObject) {
        return layoutObject.uniqueId === foundPanelId ? _objectSpread(_objectSpread({}, layoutObject), {}, {
          asSection: false,
          isVisible: false
        }) : layoutObject;
      });
    });
  };

  var splitContent = function splitContent(_ref15) {
    var sectionId = _ref15.sectionId;
    var randomString = (Math.random() + 1).toString(36).substring(7);
    var randomStringPanel = (Math.random() + 1).toString(36).substring(7);
    setSections(function (sections) {
      return [].concat(_toConsumableArray(sections.map(function (section) {
        if (section.id === sectionId) {
          return _objectSpread(_objectSpread({}, section), {}, {
            zones: [].concat(_toConsumableArray(section.zones), [randomString, randomStringPanel]),
            type: 'list'
          });
        }

        return section;
      })), [{
        id: randomString,
        direction: 'vertical',
        order: 'normal',
        background: getRandomColor(),
        parentId: sectionId,
        isCollapsed: false,
        type: 'content',
        zones: []
      }, {
        id: randomStringPanel,
        direction: 'vertical',
        order: 'normal',
        background: getRandomColor(),
        parentId: sectionId,
        isCollapsed: false,
        type: 'panel',
        zones: []
      }]);
    });
  };

  var chooseTypeForSection = function chooseTypeForSection(_ref16) {
    var panelId = _ref16.panelId,
        _ref16$isList = _ref16.isList,
        isList = _ref16$isList === void 0 ? false : _ref16$isList;
    var foundPanelId = null;
    setSections(function (sections) {
      return sections.map(function (section) {
        if (section.id === panelId) {
          foundPanelId = section.panelId;
          return _objectSpread(_objectSpread({}, section), {}, {
            type: isList ? 'list' : 'panel',
            isCollapsed: false,
            panelId: undefined
          });
        }

        return section;
      });
    });
    setLayout(function (layout) {
      return layout.map(function (layoutObject) {
        return layoutObject.uniqueId === foundPanelId ? _objectSpread(_objectSpread({}, layoutObject), {}, {
          asSection: false,
          isVisible: false
        }) : layoutObject;
      });
    });
  };

  var handlePanelAlerts = function handlePanelAlerts(_ref17) {
    var id = _ref17.id,
        count = _ref17.count,
        color = _ref17.color;

    var updateObject = function updateObject(layout) {
      return layout.map(function (layoutObject) {
        return layoutObject.uniqueId === id && (layoutObject.notifications.count !== count || layoutObject.notifications.color !== color) ? _objectSpread(_objectSpread({}, layoutObject), {}, {
          notifications: {
            count: count,
            color: color
          }
        }) : layoutObject;
      });
    };

    setLayout(function (layout) {
      return updateParentSummary(updateObject(layout));
    });
  };

  var handleToggleCollapse = function handleToggleCollapse(_ref18) {
    var uniqueId = _ref18.uniqueId;
    setLayout(layout.map(function (layoutObject) {
      return layoutObject.uniqueId === uniqueId ? _objectSpread(_objectSpread({}, layoutObject), {}, {
        isCollapsed: !layoutObject.isCollapsed
      }) : layoutObject;
    }));
  };

  var handleSetAsEmbedded = function handleSetAsEmbedded(_ref19) {
    var uniqueId = _ref19.uniqueId,
        parentId = _ref19.parentId;
    var findParent = layout.find(function (layoutObject) {
      return layoutObject.uniqueId === parentId;
    });

    if (findParent) {
      var updateEmbedded = function updateEmbedded(layout) {
        return layout.map(function (layoutObject) {
          return layoutObject.uniqueId === uniqueId ? _objectSpread(_objectSpread({}, layoutObject), {}, {
            parentId: parentId,
            isVisible: true,
            side: findParent.side,
            asEmbedded: !layoutObject.asEmbedded
          }) : layoutObject;
        });
      };

      var activateParent = function activateParent(layout) {
        return layout.map(function (layoutObject) {
          return layoutObject.uniqueId === parentId || layoutObject.parentId === parentId ? _objectSpread(_objectSpread({}, layoutObject), {}, {
            isVisible: true
          }) : layoutObject;
        });
      };

      setLayout(function (layout) {
        return updateParentSummary(activateParent(updateEmbedded(layout)));
      });
    }
  };

  var handleSetSide = function handleSetSide(_ref20) {
    var uniqueId = _ref20.uniqueId;
    setLayout(layout.map(function (layoutObject) {
      return layoutObject.uniqueId === uniqueId || layoutObject.parentId === uniqueId ? _objectSpread(_objectSpread({}, layoutObject), {}, {
        side: (0, _utils.oppositeSide)(layoutObject.side)
      }) : _objectSpread(_objectSpread({}, layoutObject), {}, {
        isVisible: false
      });
    }));
  };

  var toggleSettingIsCollapsed = function toggleSettingIsCollapsed(collapsed) {
    return setSettings(function (settings) {
      return _objectSpread(_objectSpread({}, settings), {}, {
        isCollapsed: collapsed ? collapsed : !settings.isCollapsed
      });
    });
  };

  var handleSetVisible = function handleSetVisible(_ref21) {
    var uniqueId = _ref21.uniqueId;
    setSettings(function (settings) {
      return _objectSpread(_objectSpread({}, settings), {}, {
        isCollapsed: false
      });
    });
    var foundObject = layout.find(function (lo) {
      return lo.uniqueId === uniqueId;
    });

    if (foundObject) {
      setLayout(function (layout) {
        return _toConsumableArray(layout.map(function (lo) {
          if (lo.side === foundObject.side && !lo.asSection) {
            if (lo.uniqueId === foundObject.uniqueId) {
              return _objectSpread(_objectSpread({}, lo), {}, {
                isVisible: !lo.isVisible,
                notifications: _objectSpread(_objectSpread({}, lo.notifications), {}, {
                  count: 0,
                  summary: 0
                })
              });
            } else if (lo.parentId === foundObject.uniqueId) {
              return _objectSpread(_objectSpread({}, lo), {}, {
                isVisible: !lo.isVisible
              });
            } else {
              return _objectSpread(_objectSpread({}, lo), {}, {
                isVisible: false
              });
            }
          }

          return lo;
        }));
      });
    }
  };

  (0, _react.useEffect)(function () {
    localStorage.setItem(localStorageKey, JSON.stringify(layout.map(function (l) {
      return _objectSpread(_objectSpread({}, l), {}, {
        children: undefined,
        icon: undefined
      });
    })));
  }, [layout]);
  (0, _react.useEffect)(function () {
    return setSettings(function (settings) {
      return _objectSpread(_objectSpread({}, settings), {}, {
        inverseMarkers: !settings.inverseMarkers
      });
    });
  }, [inverseMarkers]);
  (0, _react.useEffect)(function () {
    return setSettings(function (settings) {
      return _objectSpread(_objectSpread({}, settings), {}, {
        debugMode: debugMode
      });
    });
  }, [debugMode]);
  (0, _react.useEffect)(function () {
    return !!markerColor && setSettings(function (settings) {
      return _objectSpread(_objectSpread({}, settings), {}, {
        markerColor: markerColor
      });
    });
  }, [markerColor]); // useEffect(() => { console.log("---"); layout.forEach(layoutObject => console.log(layoutObject)) }, [layout]);
  // useEffect(() => { console.log('settings', settings) }, [settings]);
  // useEffect(() => { console.log('sections', sections) }, [sections]);
  // useEffect(() => { console.log('status', status) }, [status]);

  return /*#__PURE__*/React.createElement(DataContext.Provider, {
    value: {
      layout: layout,
      setLayout: setLayout,
      settings: settings,
      setSettings: setSettings,
      sections: sections,
      setSections: setSections,
      status: status,
      showContent: showContent,
      addZoneToSection: addZoneToSection,
      removeZoneFromSection: removeZoneFromSection,
      splitContent: splitContent,
      toggleSectionDirection: toggleSectionDirection,
      chooseTypeForSection: chooseTypeForSection,
      toggleCollapseSection: toggleCollapseSection,
      addPanelToSection: addPanelToSection,
      removePanelFromSection: removePanelFromSection,
      handleUnSetAsEmbedded: handleUnSetAsEmbedded,
      toggleSettingIsCollapsed: toggleSettingIsCollapsed,
      handleSetAsGroup: handleSetAsGroup,
      handleSetVisible: handleSetVisible,
      handlePanelAlerts: handlePanelAlerts,
      handleSetSide: handleSetSide,
      handleToggleCollapse: handleToggleCollapse,
      handleSetAsEmbedded: handleSetAsEmbedded,
      handlePanelAnnouncement: handlePanelAnnouncement,
      handleContentAnnouncement: handleContentAnnouncement,
      handleStatusAnnouncement: handleStatusAnnouncement,
      handleSetStatusElements: handleSetStatusElements
    }
  }, /*#__PURE__*/React.createElement(_MuiPanelManager.default, {
    allowRightClick: allowRightClick,
    showCollapseButton: showCollapseButton
  }, props.children), /*#__PURE__*/React.createElement(_MuiDebug.default, null));
}

var _default = DataContext;
exports.default = _default;