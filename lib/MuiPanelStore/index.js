"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MuiPanelProvider = MuiPanelProvider;
exports.default = void 0;

var _react = require("react");

var _MuiPanelManager = _interopRequireDefault(require("../MuiPanelManager"));

var _utils = require("../utils");

var _MuiDebug = _interopRequireDefault(require("./MuiDebug"));

var _excluded = ["allowRightClick", "initialSide", "markerColor", "inverseMarkers", "debugMode", "upperBar", "tooltipComponent", "showCollapseButton", "showSplitterButton"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var localStorageKey = 'material-ui-panel.layout';
var settingsStorageKey = 'material-ui-panel.settings';
var statusStorageKey = 'material-ui-panel.status';
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
      upperBar = _ref.upperBar,
      tooltipComponent = _ref.tooltipComponent,
      showCollapseButton = _ref.showCollapseButton,
      showSplitterButton = _ref.showSplitterButton,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useState = (0, _react.useState)(props['layout'] || []),
      _useState2 = _slicedToArray(_useState, 2),
      layout = _useState2[0],
      setLayout = _useState2[1];

  var _useState3 = (0, _react.useState)(props['status'] || []),
      _useState4 = _slicedToArray(_useState3, 2),
      status = _useState4[0],
      setStatus = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      storedStatus = _useState6[0],
      setStoredStatus = _useState6[1];

  (0, _react.useEffect)(function () {
    var storedStatusLocal = localStorage.getItem(statusStorageKey);

    if (storedStatusLocal) {
      setStoredStatus(JSON.parse(storedStatusLocal));
    }
  }, []);
  (0, _react.useEffect)(function () {
    if (storedStatus.length > 0) {
      setStatus(function (status) {
        return status.map(function (statusItem) {
          var found = storedStatus.find(function (ss) {
            return ss.uniqueId === statusItem.uniqueId;
          });
          return found ? _objectSpread(_objectSpread({}, statusItem), found) : statusItem;
        });
      });
    }
  }, [storedStatus]);

  var _useState7 = (0, _react.useState)(props['sections'] || [{
    id: getRandomId(),
    direction: 'horizontal',
    order: 'normal',
    type: 'content',
    background: getRandomColor(),
    isCollapsed: true,
    zones: []
  }]),
      _useState8 = _slicedToArray(_useState7, 2),
      sections = _useState8[0],
      setSections = _useState8[1];

  var _useState9 = (0, _react.useState)(props['settings'] || {
    isCollapsed: false,
    canSplitter: true,
    statusBarAnnounced: false,
    inverseMarkers: false,
    allowRightClick: false,
    markerColor: 'textPrimary',
    debugMode: false
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      settings = _useState10[0],
      setSettings = _useState10[1]; // useEffect(() => {
  //   const storedSettings = JSON.parse(localStorage.getItem(settingsStorageKey))
  //   if (storedSettings) {
  //     setSettings(storedSettings)
  //   }
  //   console.log('ffff')
  // }, [])
  // const handleStatusPreserve = () => {
  //   localStorage.setItem('material-ui-panel.status', JSON.stringify(status.map(s => ({ ...s, children: undefined }))))
  // }


  var handleStatusAnnouncement = function handleStatusAnnouncement(_ref2) {
    var id = _ref2.id,
        secondary = _ref2.secondary;
    setStatus(function (status) {
      return [].concat(_toConsumableArray(status.filter(function (lo) {
        return lo.uniqueId !== id;
      })), [{
        index: status.length,
        uniqueId: id,
        visible: true,
        secondary: secondary
      }]);
    });
  };

  var handleStatusUpdate = function handleStatusUpdate(_ref3) {
    var id = _ref3.id,
        children = _ref3.children;
    setStatus(function (status) {
      return status.map(function (lo) {
        return lo.uniqueId !== id ? lo : _objectSpread(_objectSpread({}, lo), {}, {
          children: children
        });
      });
    });
  };

  var handleStatusVisibilityToggle = function handleStatusVisibilityToggle(_ref4) {
    var id = _ref4.id;
    setStatus(function (status) {
      return status.map(function (lo) {
        return lo.uniqueId === id ? _objectSpread(_objectSpread({}, lo), {}, {
          visible: !lo.visible
        }) : lo;
      });
    });
  };

  var handleStatusDestroy = function handleStatusDestroy(_ref5) {
    var id = _ref5.id;
    setStatus(function (status) {
      return _toConsumableArray(status.filter(function (lo) {
        return lo.uniqueId !== id;
      }));
    });
  };

  var handlePanelAnnouncement = function handlePanelAnnouncement(_ref6) {
    var id = _ref6.id,
        ref = _ref6.ref,
        extraButtons = _ref6.extraButtons,
        disabled = _ref6.disabled,
        children = _ref6.children,
        handleOnClick = _ref6.handleOnClick,
        placement = _ref6.placement,
        notifications = _ref6.notifications,
        subTitle = _ref6.subTitle,
        shortText = _ref6.shortText,
        _ref6$iconInHeader = _ref6.iconInHeader,
        iconInHeader = _ref6$iconInHeader === void 0 ? true : _ref6$iconInHeader,
        title = _ref6.title,
        tooltip = _ref6.tooltip,
        icon = _ref6.icon,
        _ref6$showIcon = _ref6.showIcon,
        showIcon = _ref6$showIcon === void 0 ? true : _ref6$showIcon,
        _ref6$noPanel = _ref6.noPanel,
        noPanel = _ref6$noPanel === void 0 ? false : _ref6$noPanel;
    setLayout(function (layout) {
      return [].concat(_toConsumableArray(layout.filter(function (lo) {
        return lo.uniqueId !== id;
      })), [{
        uniqueId: id,
        asContent: false,
        asGroup: false,
        extraButtons: extraButtons,
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
        disabled: disabled,
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

  var handlePanelDestroy = function handlePanelDestroy(_ref7) {
    var id = _ref7.id;
    setLayout(function (layout) {
      return _toConsumableArray(layout.filter(function (lo) {
        return lo.uniqueId !== id;
      }));
    });
  };

  var handleContentAnnouncement = function handleContentAnnouncement(_ref8) {
    var id = _ref8.id,
        children = _ref8.children;
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

  var handleSetAsGroup = function handleSetAsGroup(_ref9) {
    var uniqueId = _ref9.uniqueId;
    setLayout(function (layout) {
      return layout.map(function (layoutObject) {
        return layoutObject.uniqueId === uniqueId ? _objectSpread(_objectSpread({}, layoutObject), {}, {
          asGroup: !layoutObject.asGroup
        }) : layoutObject;
      });
    });
  };

  var handleSetIcon = function handleSetIcon(_ref10) {
    var uniqueId = _ref10.uniqueId,
        icon = _ref10.icon;
    setLayout(function (layout) {
      return layout.map(function (layoutObject) {
        return layoutObject.uniqueId === uniqueId ? _objectSpread(_objectSpread({}, layoutObject), {}, {
          icon: icon
        }) : layoutObject;
      });
    });
  };

  var handleSetDisabled = function handleSetDisabled(_ref11) {
    var uniqueId = _ref11.uniqueId;
    setLayout(function (layout) {
      return layout.map(function (layoutObject) {
        return layoutObject.uniqueId === uniqueId ? _objectSpread(_objectSpread({}, layoutObject), {}, {
          disabled: !layoutObject.disabled,
          isCollapsed: true
        }) : layoutObject;
      });
    });
  };

  var handleSetStatusElements = function handleSetStatusElements(_ref12) {
    var uniqueId = _ref12.uniqueId,
        elements = _ref12.elements;
    setStatus(function (status) {
      return status.map(function (statusObject) {
        return statusObject.uniqueId === uniqueId ? _objectSpread(_objectSpread({}, statusObject), {}, {
          elements: elements
        }) : statusObject;
      });
    });
  };

  var handleUnSetAsEmbedded = function handleUnSetAsEmbedded(_ref13) {
    var uniqueId = _ref13.uniqueId;
    setLayout(layout.map(function (layoutObject) {
      return layoutObject.uniqueId === uniqueId ? _objectSpread(_objectSpread({}, layoutObject), {}, {
        asGroup: false,
        asEmbedded: false,
        isVisible: false,
        parentId: null
      }) : layoutObject;
    }));
  };

  var setSectionUrl = function setSectionUrl(_ref14) {
    var sectionId = _ref14.sectionId,
        url = _ref14.url;
    setSections(function (sections) {
      return sections.map(function (section) {
        if (section.id === sectionId) {
          return _objectSpread(_objectSpread({}, section), {}, {
            url: url
          });
        }

        return section;
      });
    });
  };

  var toggleSectionDirection = function toggleSectionDirection(_ref15) {
    var sectionId = _ref15.sectionId;
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

  var toggleCollapseSection = function toggleCollapseSection(_ref16) {
    var sectionId = _ref16.sectionId;
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

  var addZoneToSection = function addZoneToSection(_ref17) {
    var sectionId = _ref17.sectionId;
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

  var removeZoneFromSection = function removeZoneFromSection(_ref18) {
    var sectionId = _ref18.sectionId;
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

  var addPanelToSection = function addPanelToSection(_ref19) {
    var sectionId = _ref19.sectionId,
        panelId = _ref19.panelId;
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

  var removePanelFromSection = function removePanelFromSection(_ref20) {
    var sectionId = _ref20.sectionId,
        panelId = _ref20.panelId;
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

  var showContent = function showContent(_ref21) {
    var sectionId = _ref21.sectionId;
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

  var splitContentNg = function splitContentNg(_ref22) {
    var sectionId = _ref22.sectionId,
        type = _ref22.type,
        index = _ref22.index,
        count = _ref22.count;
    var randomStrings = [getRandomId(), getRandomId(), getRandomId()];
    setSections(function (sections) {
      return [].concat(_toConsumableArray(sections.map(function (section) {
        if (section.id === sectionId) {
          return _objectSpread(_objectSpread({}, section), {}, {
            zones: [].concat(_toConsumableArray(section.zones), _toConsumableArray(randomStrings.slice(0, count))),
            direction: type === 'vs' ? 'horizontal' : 'vertical',
            type: 'list'
          });
        }

        return section;
      })), _toConsumableArray(_toConsumableArray(Array(count)).map(function (item, indexCount) {
        return {
          uniqueId: randomStrings[indexCount],
          id: randomStrings[indexCount],
          direction: 'vertical',
          order: 'normal',
          background: getRandomColor(),
          parentId: sectionId,
          isCollapsed: false,
          type: indexCount === index ? 'content' : 'panel',
          zones: []
        };
      })));
    });
  };

  var splitContent = function splitContent(_ref23) {
    var sectionId = _ref23.sectionId;
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
        uniqueId: randomString,
        direction: 'vertical',
        order: 'normal',
        background: getRandomColor(),
        parentId: sectionId,
        isCollapsed: false,
        type: 'content',
        zones: []
      }, {
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
    });
  };

  var chooseTypeForSection = function chooseTypeForSection(_ref24) {
    var panelId = _ref24.panelId,
        _ref24$type = _ref24.type,
        type = _ref24$type === void 0 ? 'list' : _ref24$type;
    var foundPanelId = null;
    setSections(function (sections) {
      return sections.map(function (section) {
        if (section.id === panelId) {
          foundPanelId = section.panelId;
          return _objectSpread(_objectSpread({}, section), {}, {
            type: type,
            isCollapsed: false,
            panelId: undefined,
            url: undefined
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

  var handlePanelAlerts = function handlePanelAlerts(_ref25) {
    var id = _ref25.id,
        count = _ref25.count,
        color = _ref25.color;

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

  var handleToggleCollapse = function handleToggleCollapse(_ref26) {
    var uniqueId = _ref26.uniqueId;
    setLayout(layout.map(function (layoutObject) {
      return layoutObject.uniqueId === uniqueId ? _objectSpread(_objectSpread({}, layoutObject), {}, {
        isCollapsed: !layoutObject.isCollapsed
      }) : layoutObject;
    }));
  };

  var handleSetAsEmbedded = function handleSetAsEmbedded(_ref27) {
    var uniqueId = _ref27.uniqueId,
        parentId = _ref27.parentId;
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

  var handleSetSide = function handleSetSide(_ref28) {
    var uniqueId = _ref28.uniqueId;
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

  var triggerStatusBarAnnounced = function triggerStatusBarAnnounced() {
    if (!settings.statusBarAnnounced) {
      setSettings(function (settings) {
        return _objectSpread(_objectSpread({}, settings), {}, {
          statusBarAnnounced: true
        });
      });
    }
  };

  var handleSetVisible = function handleSetVisible(_ref29) {
    var uniqueId = _ref29.uniqueId;
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
        extraButtons: undefined,
        icon: undefined
      });
    })));
  }, [layout]);
  (0, _react.useEffect)(function () {
    return setSettings(function (settings) {
      return _objectSpread(_objectSpread({}, settings), {}, {
        inverseMarkers: inverseMarkers,
        allowRightClick: allowRightClick,
        debugMode: debugMode,
        upperBar: upperBar
      });
    });
  }, [inverseMarkers, allowRightClick, debugMode, upperBar]);
  (0, _react.useEffect)(function () {
    return !!markerColor && setSettings(function (settings) {
      return _objectSpread(_objectSpread({}, settings), {}, {
        markerColor: markerColor
      });
    });
  }, [markerColor]);
  (0, _react.useEffect)(function () {
    localStorage.setItem(settingsStorageKey, JSON.stringify(settings));
  }, [settings]);
  (0, _react.useEffect)(function () {
    localStorage.setItem(statusStorageKey, JSON.stringify(status.map(function (s) {
      return _objectSpread(_objectSpread({}, s), {}, {
        children: undefined
      });
    })));
  }, [status]);
  return /*#__PURE__*/React.createElement(DataContext.Provider, {
    id: "provider",
    value: {
      layout: layout,
      setLayout: setLayout,
      settings: settings,
      setSettings: setSettings,
      sections: sections,
      setSections: setSections,
      status: status,
      tooltipComponent: tooltipComponent,
      showContent: showContent,
      addZoneToSection: addZoneToSection,
      removeZoneFromSection: removeZoneFromSection,
      splitContent: splitContent,
      splitContentNg: splitContentNg,
      handleStatusVisibilityToggle: handleStatusVisibilityToggle,
      toggleSectionDirection: toggleSectionDirection,
      chooseTypeForSection: chooseTypeForSection,
      setSectionUrl: setSectionUrl,
      toggleCollapseSection: toggleCollapseSection,
      addPanelToSection: addPanelToSection,
      removePanelFromSection: removePanelFromSection,
      handleUnSetAsEmbedded: handleUnSetAsEmbedded,
      toggleSettingIsCollapsed: toggleSettingIsCollapsed,
      handleSetAsGroup: handleSetAsGroup,
      handleStatusUpdate: handleStatusUpdate,
      handleSetVisible: handleSetVisible,
      handlePanelAlerts: handlePanelAlerts,
      handleSetSide: handleSetSide,
      handleSetDisabled: handleSetDisabled,
      handleToggleCollapse: handleToggleCollapse,
      triggerStatusBarAnnounced: triggerStatusBarAnnounced,
      handleSetAsEmbedded: handleSetAsEmbedded,
      handleSetIcon: handleSetIcon,
      handlePanelAnnouncement: handlePanelAnnouncement,
      handleContentAnnouncement: handleContentAnnouncement,
      handlePanelDestroy: handlePanelDestroy,
      handleStatusAnnouncement: handleStatusAnnouncement,
      handleStatusDestroy: handleStatusDestroy,
      handleSetStatusElements: handleSetStatusElements
    }
  }, /*#__PURE__*/React.createElement(_MuiPanelManager.default, {
    allowRightClick: allowRightClick,
    showCollapseButton: showCollapseButton,
    showSplitterButton: showSplitterButton
  }, props.children), settings.debugMode && /*#__PURE__*/React.createElement(_MuiDebug.default, null));
}

var _default = DataContext;
exports.default = _default;