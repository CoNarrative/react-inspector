'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var isDOM = _interopDefault(require('is-dom'));

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var theme = {
  BASE_FONT_FAMILY: 'Menlo, monospace',
  BASE_FONT_SIZE: '11px',
  BASE_LINE_HEIGHT: 1.2,
  BASE_BACKGROUND_COLOR: 'rgb(36, 36, 36)',
  BASE_COLOR: 'rgb(213, 213, 213)',
  OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
  OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
  OBJECT_NAME_COLOR: 'rgb(227, 110, 236)',
  OBJECT_VALUE_NULL_COLOR: 'rgb(127, 127, 127)',
  OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(127, 127, 127)',
  OBJECT_VALUE_REGEXP_COLOR: 'rgb(233, 63, 59)',
  OBJECT_VALUE_STRING_COLOR: 'rgb(233, 63, 59)',
  OBJECT_VALUE_SYMBOL_COLOR: 'rgb(233, 63, 59)',
  OBJECT_VALUE_NUMBER_COLOR: 'hsl(252, 100%, 75%)',
  OBJECT_VALUE_BOOLEAN_COLOR: 'hsl(252, 100%, 75%)',
  OBJECT_VALUE_FUNCTION_PREFIX_COLOR: 'rgb(85, 106, 242)',
  HTML_TAG_COLOR: 'rgb(93, 176, 215)',
  HTML_TAGNAME_COLOR: 'rgb(93, 176, 215)',
  HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
  HTML_ATTRIBUTE_NAME_COLOR: 'rgb(155, 187, 220)',
  HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(242, 151, 102)',
  HTML_COMMENT_COLOR: 'rgb(137, 137, 137)',
  HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',
  ARROW_COLOR: 'rgb(145, 145, 145)',
  ARROW_MARGIN_RIGHT: 3,
  ARROW_FONT_SIZE: 12,
  ARROW_ANIMATION_DURATION: '0',
  TREENODE_FONT_FAMILY: 'Menlo, monospace',
  TREENODE_FONT_SIZE: '11px',
  TREENODE_LINE_HEIGHT: 1.2,
  TREENODE_PADDING_LEFT: 12,
  TABLE_BORDER_COLOR: 'rgb(85, 85, 85)',
  TABLE_TH_BACKGROUND_COLOR: 'rgb(44, 44, 44)',
  TABLE_TH_HOVER_COLOR: 'rgb(48, 48, 48)',
  TABLE_SORT_ICON_COLOR: 'black',
  //'rgb(48, 57, 66)',
  TABLE_DATA_BACKGROUND_IMAGE: 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))',
  TABLE_DATA_BACKGROUND_SIZE: '128px 32px'
};

var theme$1 = {
  BASE_FONT_FAMILY: 'Menlo, monospace',
  BASE_FONT_SIZE: '11px',
  BASE_LINE_HEIGHT: 1.2,
  BASE_BACKGROUND_COLOR: 'white',
  BASE_COLOR: 'black',
  OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
  OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
  OBJECT_NAME_COLOR: 'rgb(136, 19, 145)',
  OBJECT_VALUE_NULL_COLOR: 'rgb(128, 128, 128)',
  OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(128, 128, 128)',
  OBJECT_VALUE_REGEXP_COLOR: 'rgb(196, 26, 22)',
  OBJECT_VALUE_STRING_COLOR: 'rgb(196, 26, 22)',
  OBJECT_VALUE_SYMBOL_COLOR: 'rgb(196, 26, 22)',
  OBJECT_VALUE_NUMBER_COLOR: 'rgb(28, 0, 207)',
  OBJECT_VALUE_BOOLEAN_COLOR: 'rgb(28, 0, 207)',
  OBJECT_VALUE_FUNCTION_PREFIX_COLOR: 'rgb(13, 34, 170)',
  HTML_TAG_COLOR: 'rgb(168, 148, 166)',
  HTML_TAGNAME_COLOR: 'rgb(136, 18, 128)',
  HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
  HTML_ATTRIBUTE_NAME_COLOR: 'rgb(153, 69, 0)',
  HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(26, 26, 166)',
  HTML_COMMENT_COLOR: 'rgb(35, 110, 37)',
  HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',
  ARROW_COLOR: '#6e6e6e',
  ARROW_MARGIN_RIGHT: 3,
  ARROW_FONT_SIZE: 12,
  ARROW_ANIMATION_DURATION: '0',
  TREENODE_FONT_FAMILY: 'Menlo, monospace',
  TREENODE_FONT_SIZE: '11px',
  TREENODE_LINE_HEIGHT: 1.2,
  TREENODE_PADDING_LEFT: 12,
  TABLE_BORDER_COLOR: '#aaa',
  TABLE_TH_BACKGROUND_COLOR: '#eee',
  TABLE_TH_HOVER_COLOR: 'hsla(0, 0%, 90%, 1)',
  TABLE_SORT_ICON_COLOR: '#6e6e6e',
  TABLE_DATA_BACKGROUND_IMAGE: 'linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))',
  TABLE_DATA_BACKGROUND_SIZE: '128px 32px'
};



var themes = /*#__PURE__*/Object.freeze({
chromeDark: theme,
chromeLight: theme$1
});

var ExpandedPathsContext = React.createContext([{}, function () {}]);

var unselectable = {
  WebkitTouchCallout: 'none',
  WebkitUserSelect: 'none',
  KhtmlUserSelect: 'none',
  MozUserSelect: 'none',
  msUserSelect: 'none',
  OUserSelect: 'none',
  userSelect: 'none'
};

var base = (function (theme) {
  return {
    DOMNodePreview: {
      htmlOpenTag: {
        base: {
          color: theme.HTML_TAG_COLOR
        },
        tagName: {
          color: theme.HTML_TAGNAME_COLOR,
          textTransform: theme.HTML_TAGNAME_TEXT_TRANSFORM
        },
        htmlAttributeName: {
          color: theme.HTML_ATTRIBUTE_NAME_COLOR
        },
        htmlAttributeValue: {
          color: theme.HTML_ATTRIBUTE_VALUE_COLOR
        }
      },
      htmlCloseTag: {
        base: {
          color: theme.HTML_TAG_COLOR
        },
        offsetLeft: {
          /* hack: offset placeholder */
          marginLeft: -theme.TREENODE_PADDING_LEFT
        },
        tagName: {
          color: theme.HTML_TAGNAME_COLOR,
          textTransform: theme.HTML_TAGNAME_TEXT_TRANSFORM
        }
      },
      htmlComment: {
        color: theme.HTML_COMMENT_COLOR
      },
      htmlDoctype: {
        color: theme.HTML_DOCTYPE_COLOR
      }
    },
    ObjectPreview: {
      objectDescription: {
        fontStyle: 'italic'
      },
      preview: {
        fontStyle: 'italic'
      },
      arrayMaxProperties: theme.OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES,
      objectMaxProperties: theme.OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES
    },
    ObjectName: {
      base: {
        color: theme.OBJECT_NAME_COLOR
      },
      dimmed: {
        opacity: 0.6
      }
    },
    ObjectValue: {
      objectValueNull: {
        color: theme.OBJECT_VALUE_NULL_COLOR
      },
      objectValueUndefined: {
        color: theme.OBJECT_VALUE_UNDEFINED_COLOR
      },
      objectValueRegExp: {
        color: theme.OBJECT_VALUE_REGEXP_COLOR
      },
      objectValueString: {
        color: theme.OBJECT_VALUE_STRING_COLOR
      },
      objectValueSymbol: {
        color: theme.OBJECT_VALUE_SYMBOL_COLOR
      },
      objectValueNumber: {
        color: theme.OBJECT_VALUE_NUMBER_COLOR
      },
      objectValueBoolean: {
        color: theme.OBJECT_VALUE_BOOLEAN_COLOR
      },
      objectValueFunctionPrefix: {
        color: theme.OBJECT_VALUE_FUNCTION_PREFIX_COLOR,
        fontStyle: 'italic'
      },
      objectValueFunctionName: {
        fontStyle: 'italic'
      }
    },
    TreeView: {
      treeViewOutline: {
        padding: 0,
        margin: 0,
        listStyleType: 'none'
      }
    },
    TreeNode: {
      treeNodeBase: {
        color: theme.BASE_COLOR,
        backgroundColor: theme.BASE_BACKGROUND_COLOR,
        lineHeight: theme.TREENODE_LINE_HEIGHT,
        cursor: 'default',
        boxSizing: 'border-box',
        listStyle: 'none',
        fontFamily: theme.TREENODE_FONT_FAMILY,
        fontSize: theme.TREENODE_FONT_SIZE
      },
      treeNodePreviewContainer: {},
      treeNodePlaceholder: _objectSpread({
        whiteSpace: 'pre',
        fontSize: theme.ARROW_FONT_SIZE,
        marginRight: theme.ARROW_MARGIN_RIGHT
      }, unselectable),
      treeNodeArrow: {
        base: _objectSpread({
          color: theme.ARROW_COLOR,
          display: 'inline-block',
          // lineHeight: '14px',
          fontSize: theme.ARROW_FONT_SIZE,
          marginRight: theme.ARROW_MARGIN_RIGHT
        }, parseFloat(theme.ARROW_ANIMATION_DURATION) > 0 ? {
          transition: "transform ".concat(theme.ARROW_ANIMATION_DURATION, " ease 0s")
        } : {}, unselectable),
        expanded: {
          WebkitTransform: 'rotateZ(90deg)',
          MozTransform: 'rotateZ(90deg)',
          transform: 'rotateZ(90deg)'
        },
        collapsed: {
          WebkitTransform: 'rotateZ(0deg)',
          MozTransform: 'rotateZ(0deg)',
          transform: 'rotateZ(0deg)'
        }
      },
      treeNodeChildNodesContainer: {
        margin: 0,
        // reset user-agent style
        paddingLeft: theme.TREENODE_PADDING_LEFT
      }
    },
    TableInspector: {
      base: {
        color: theme.BASE_COLOR,
        position: 'relative',
        border: "1px solid ".concat(theme.TABLE_BORDER_COLOR),
        fontFamily: theme.BASE_FONT_FAMILY,
        fontSize: theme.BASE_FONT_SIZE,
        lineHeight: '120%',
        boxSizing: 'border-box',
        cursor: 'default'
      }
    },
    TableInspectorHeaderContainer: {
      base: {
        top: 0,
        height: '17px',
        left: 0,
        right: 0,
        overflowX: 'hidden'
      },
      table: {
        tableLayout: 'fixed',
        borderSpacing: 0,
        borderCollapse: 'separate',
        height: '100%',
        width: '100%',
        margin: 0
      }
    },
    TableInspectorDataContainer: {
      tr: {
        display: 'table-row'
      },
      td: {
        boxSizing: 'border-box',
        border: 'none',
        // prevent overrides
        height: '16px',
        // /* 0.5 * table.background-size height */
        verticalAlign: 'top',
        padding: '1px 4px',
        WebkitUserSelect: 'text',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        lineHeight: '14px'
      },
      div: {
        position: 'static',
        top: '17px',
        bottom: 0,
        overflowY: 'overlay',
        transform: 'translateZ(0)',
        left: 0,
        right: 0,
        overflowX: 'hidden'
      },
      table: {
        positon: 'static',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        borderTop: '0 none transparent',
        margin: 0,
        // prevent user agent stylesheet overrides
        backgroundImage: theme.TABLE_DATA_BACKGROUND_IMAGE,
        backgroundSize: theme.TABLE_DATA_BACKGROUND_SIZE,
        tableLayout: 'fixed',
        // table
        borderSpacing: 0,
        borderCollapse: 'separate',
        // height: '100%',
        width: '100%',
        fontSize: theme.BASE_FONT_SIZE,
        lineHeight: '120%'
      }
    },
    TableInspectorTH: {
      base: {
        position: 'relative',
        // anchor for sort icon container
        height: 'auto',
        textAlign: 'left',
        backgroundColor: theme.TABLE_TH_BACKGROUND_COLOR,
        borderBottom: "1px solid ".concat(theme.TABLE_BORDER_COLOR),
        fontWeight: 'normal',
        verticalAlign: 'middle',
        padding: '0 4px',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        lineHeight: '14px',
        ':hover': {
          backgroundColor: theme.TABLE_TH_HOVER_COLOR
        }
      },
      div: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        // prevent user agent stylesheet overrides
        fontSize: theme.BASE_FONT_SIZE,
        lineHeight: '120%'
      }
    },
    TableInspectorLeftBorder: {
      none: {
        borderLeft: 'none'
      },
      solid: {
        borderLeft: "1px solid ".concat(theme.TABLE_BORDER_COLOR)
      }
    },
    TableInspectorSortIcon: _objectSpread({
      display: 'block',
      marginRight: 3,
      // 4,
      width: 8,
      height: 7,
      marginTop: -7,
      color: theme.TABLE_SORT_ICON_COLOR,
      fontSize: 12
    }, unselectable)
  };
});

var DEFAULT_THEME_NAME = 'chromeLight';
var ThemeContext = React.createContext(base(themes[DEFAULT_THEME_NAME]));
/**
 * Hook to get the component styles for the current theme.
 * @param {string} baseStylesKey - Name of the component to be styled
 */

var useStyles = function useStyles(baseStylesKey) {
  var themeStyles = React.useContext(ThemeContext);
  return themeStyles[baseStylesKey];
};
/**
 * HOC to create a component that accepts a "theme" prop and uses it to set
 * the current theme. This is intended to be used by the top-level inspector
 * components.
 * @param {Object} WrappedComponent - React component to be wrapped
 */

var themeAcceptor = function themeAcceptor(WrappedComponent) {
  var ThemeAcceptor = function ThemeAcceptor(_ref) {
    var _ref$theme = _ref.theme,
        theme = _ref$theme === void 0 ? DEFAULT_THEME_NAME : _ref$theme,
        restProps = _objectWithoutProperties(_ref, ["theme"]);

    var themeStyles = React.useMemo(function () {
      switch (Object.prototype.toString.call(theme)) {
        case '[object String]':
          return base(themes[theme]);

        case '[object Object]':
          return base(theme);

        default:
          return base(themes[DEFAULT_THEME_NAME]);
      }
    }, [theme]);
    return React__default.createElement(ThemeContext.Provider, {
      value: themeStyles
    }, React__default.createElement(WrappedComponent, restProps));
  };

  ThemeAcceptor.propTypes = {
    theme: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  };
  return ThemeAcceptor;
};

var Arrow = function Arrow(_ref) {
  var expanded = _ref.expanded,
      styles = _ref.styles;
  return React__default.createElement("span", {
    style: _objectSpread({}, styles.base, expanded ? styles.expanded : styles.collapsed)
  }, "\u25B6");
};

var TreeNode = React.memo(function (props) {
  props = _objectSpread({
    expanded: true,
    nodeRenderer: function nodeRenderer(_ref2) {
      var name = _ref2.name;
      return React__default.createElement("span", null, name);
    },
    onClick: function onClick() {},
    shouldShowArrow: false,
    shouldShowPlaceholder: true
  }, props);
  var _props = props,
      expanded = _props.expanded,
      onClick = _props.onClick,
      children = _props.children,
      nodeRenderer = _props.nodeRenderer,
      title = _props.title,
      shouldShowArrow = _props.shouldShowArrow,
      shouldShowPlaceholder = _props.shouldShowPlaceholder;
  var styles = useStyles('TreeNode');
  var NodeRenderer = nodeRenderer;
  return React__default.createElement("li", {
    "aria-expanded": expanded,
    role: "treeitem",
    style: styles.treeNodeBase,
    title: title
  }, React__default.createElement("div", {
    style: styles.treeNodePreviewContainer,
    onClick: onClick
  }, shouldShowArrow || React.Children.count(children) > 0 ? React__default.createElement(Arrow, {
    expanded: expanded,
    styles: styles.treeNodeArrow
  }) : shouldShowPlaceholder && React__default.createElement("span", {
    style: styles.treeNodePlaceholder
  }, "\xA0"), React__default.createElement(NodeRenderer, props)), React__default.createElement("ol", {
    role: "group",
    style: styles.treeNodeChildNodesContainer
  }, expanded ? children : undefined));
});
TreeNode.propTypes = {
  name: PropTypes.string,
  data: PropTypes.any,
  expanded: PropTypes.bool,
  shouldShowArrow: PropTypes.bool,
  shouldShowPlaceholder: PropTypes.bool,
  nodeRenderer: PropTypes.func,
  onClick: PropTypes.func
};

var DEFAULT_ROOT_PATH = '$';
var WILDCARD = '*';
function hasChildNodes(data, dataIterator) {
  return !dataIterator(data).next().done;
}
var wildcardPathsFromLevel = function wildcardPathsFromLevel(level) {
  // i is depth
  return Array.from({
    length: level
  }, function (_, i) {
    return [DEFAULT_ROOT_PATH].concat(Array.from({
      length: i
    }, function () {
      return '*';
    })).join('.');
  });
};
var getExpandedPaths = function getExpandedPaths(data, dataIterator, expandPaths, expandLevel, prevExpandedPaths) {
  var wildcardPaths = [].concat(wildcardPathsFromLevel(expandLevel)).concat(expandPaths).filter(function (path) {
    return typeof path === 'string';
  }); // could be undefined

  var expandedPaths = [];
  wildcardPaths.forEach(function (wildcardPath) {
    var keyPaths = wildcardPath.split('.');

    var populatePaths = function populatePaths(curData, curPath, depth) {
      if (depth === keyPaths.length) {
        expandedPaths.push(curPath);
        return;
      }

      var key = keyPaths[depth];

      if (depth === 0) {
        if (hasChildNodes(curData, dataIterator) && (key === DEFAULT_ROOT_PATH || key === WILDCARD)) {
          populatePaths(curData, DEFAULT_ROOT_PATH, depth + 1);
        }
      } else {
        if (key === WILDCARD) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = dataIterator(curData)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _ref2 = _step.value;
              var name = _ref2.name,
                  _data = _ref2.data;

              if (hasChildNodes(_data, dataIterator)) {
                populatePaths(_data, "".concat(curPath, ".").concat(name), depth + 1);
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        } else {
          var value = curData[key];

          if (hasChildNodes(value, dataIterator)) {
            populatePaths(value, "".concat(curPath, ".").concat(key), depth + 1);
          }
        }
      }
    };

    populatePaths(data, '', 0);
  });
  return expandedPaths.reduce(function (obj, path) {
    obj[path] = true;
    return obj;
  }, _objectSpread({}, prevExpandedPaths));
};

var ConnectedTreeNode = React.memo(function (props) {
  var data = props.data,
      dataIterator = props.dataIterator,
      path = props.path,
      depth = props.depth,
      nodeRenderer = props.nodeRenderer;

  var _useContext = React.useContext(ExpandedPathsContext),
      _useContext2 = _slicedToArray(_useContext, 2),
      expandedPaths = _useContext2[0],
      setExpandedPaths = _useContext2[1];

  var nodeHasChildNodes = hasChildNodes(data, dataIterator);
  var expanded = !!expandedPaths[path];
  var handleClick = React.useCallback(function () {
    return nodeHasChildNodes && setExpandedPaths(function (prevExpandedPaths) {
      return _objectSpread({}, prevExpandedPaths, _defineProperty({}, path, !expanded));
    });
  }, [nodeHasChildNodes, setExpandedPaths, path, expanded]);
  return React__default.createElement(TreeNode, _extends({
    expanded: expanded,
    onClick: handleClick // show arrow anyway even if not expanded and not rendering children
    ,
    shouldShowArrow: nodeHasChildNodes // show placeholder only for non root nodes
    ,
    shouldShowPlaceholder: depth > 0 // Render a node from name and data (or possibly other props like isNonenumerable)
    ,
    nodeRenderer: nodeRenderer
  }, props), // only render if the node is expanded
  expanded ? _toConsumableArray(dataIterator(data)).map(function (_ref) {
    var name = _ref.name,
        data = _ref.data,
        renderNodeProps = _objectWithoutProperties(_ref, ["name", "data"]);

    return React__default.createElement(ConnectedTreeNode, _extends({
      name: name,
      data: data,
      depth: depth + 1,
      path: "".concat(path, ".").concat(name),
      key: name,
      dataIterator: dataIterator,
      nodeRenderer: nodeRenderer
    }, renderNodeProps));
  }) : null);
});
ConnectedTreeNode.propTypes = {
  name: PropTypes.string,
  data: PropTypes.any,
  dataIterator: PropTypes.func,
  depth: PropTypes.number,
  expanded: PropTypes.bool,
  nodeRenderer: PropTypes.func
};
var TreeView = React.memo(function (_ref2) {
  var name = _ref2.name,
      data = _ref2.data,
      dataIterator = _ref2.dataIterator,
      nodeRenderer = _ref2.nodeRenderer,
      expandPaths = _ref2.expandPaths,
      expandLevel = _ref2.expandLevel;
  var styles = useStyles('TreeView');
  var stateAndSetter = React.useState({});

  var _stateAndSetter = _slicedToArray(stateAndSetter, 2),
      setExpandedPaths = _stateAndSetter[1];

  React.useLayoutEffect(function () {
    return setExpandedPaths(function (prevExpandedPaths) {
      return getExpandedPaths(data, dataIterator, expandPaths, expandLevel, prevExpandedPaths);
    });
  }, [data, dataIterator, expandPaths, expandLevel]);
  return React__default.createElement(ExpandedPathsContext.Provider, {
    value: stateAndSetter
  }, React__default.createElement("ol", {
    role: "tree",
    style: styles.treeViewOutline
  }, React__default.createElement(ConnectedTreeNode, {
    name: name,
    data: data,
    dataIterator: dataIterator,
    depth: 0,
    path: DEFAULT_ROOT_PATH,
    nodeRenderer: nodeRenderer
  })));
});
TreeView.propTypes = {
  name: PropTypes.string,
  data: PropTypes.any,
  dataIterator: PropTypes.func,
  nodeRenderer: PropTypes.func,
  expandPaths: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  expandLevel: PropTypes.number
};

/**
 * A view for object property names.
 *
 * If the property name is enumerable (in Object.keys(object)),
 * the property name will be rendered normally.
 *
 * If the property name is not enumerable (`Object.prototype.propertyIsEnumerable()`),
 * the property name will be dimmed to show the difference.
 */

var ObjectName = function ObjectName(_ref) {
  var name = _ref.name,
      _ref$dimmed = _ref.dimmed,
      dimmed = _ref$dimmed === void 0 ? false : _ref$dimmed,
      _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles;
  var themeStyles = useStyles('ObjectName');

  var appliedStyles = _objectSpread({}, themeStyles.base, dimmed ? themeStyles['dimmed'] : {}, styles);

  return React__default.createElement("span", {
    style: appliedStyles
  }, name);
};

ObjectName.propTypes = {
  /** Property name */
  name: PropTypes.string,

  /** Should property name be dimmed */
  dimmed: PropTypes.bool
};

/**
 * A short description of the object values.
 * Can be used to render tree node in ObjectInspector
 * or render objects in TableInspector.
 */

var ObjectValue = function ObjectValue(_ref) {
  var object = _ref.object,
      styles = _ref.styles;
  var themeStyles = useStyles('ObjectValue');

  var mkStyle = function mkStyle(key) {
    return _objectSpread({}, themeStyles[key], styles);
  };

  switch (_typeof(object)) {
    case 'bigint':
      return React__default.createElement("span", {
        style: mkStyle('objectValueNumber')
      }, String(object), "n");

    case 'number':
      return React__default.createElement("span", {
        style: mkStyle('objectValueNumber')
      }, String(object));

    case 'string':
      return React__default.createElement("span", {
        style: mkStyle('objectValueString')
      }, "\"", object, "\"");

    case 'boolean':
      return React__default.createElement("span", {
        style: mkStyle('objectValueBoolean')
      }, String(object));

    case 'undefined':
      return React__default.createElement("span", {
        style: mkStyle('objectValueUndefined')
      }, "undefined");

    case 'object':
      if (object === null) {
        return React__default.createElement("span", {
          style: mkStyle('objectValueNull')
        }, "null");
      }

      if (object instanceof Date) {
        return React__default.createElement("span", null, object.toString());
      }

      if (object instanceof RegExp) {
        return React__default.createElement("span", {
          style: mkStyle('objectValueRegExp')
        }, object.toString());
      }

      if (Array.isArray(object)) {
        return React__default.createElement("span", null, "Array(".concat(object.length, ")"));
      }

      if (!object.constructor) {
        return React__default.createElement("span", null, "Object");
      }

      if (typeof object.constructor.isBuffer === 'function' && object.constructor.isBuffer(object)) {
        return React__default.createElement("span", null, "Buffer[".concat(object.length, "]"));
      }

      return React__default.createElement("span", null, object.constructor.name);

    case 'function':
      return React__default.createElement("span", null, React__default.createElement("span", {
        style: mkStyle('objectValueFunctionPrefix')
      }, "\u0192\xA0"), React__default.createElement("span", {
        style: mkStyle('objectValueFunctionName')
      }, object.name, "()"));

    case 'symbol':
      return React__default.createElement("span", {
        style: mkStyle('objectValueSymbol')
      }, object.toString());

    default:
      return React__default.createElement("span", null);
  }
};

ObjectValue.propTypes = {
  // the object to describe
  object: PropTypes.any
};

var hasOwnProperty = Object.prototype.hasOwnProperty;
var propertyIsEnumerable = Object.prototype.propertyIsEnumerable;

/* intersperse arr with separator */

function intersperse(arr, sep) {
  if (arr.length === 0) {
    return [];
  }

  return arr.slice(1).reduce(function (xs, x) {
    return xs.concat([sep, x]);
  }, [arr[0]]);
}
/**
 * A preview of the object
 */


var ObjectPreview = function ObjectPreview(_ref) {
  var data = _ref.data;
  var styles = useStyles('ObjectPreview');
  var object = data;

  if (_typeof(object) !== 'object' || object === null || object instanceof Date || object instanceof RegExp) {
    return React__default.createElement(ObjectValue, {
      object: object
    });
  }

  if (Array.isArray(object)) {
    var maxProperties = styles.arrayMaxProperties;
    var previewArray = object.slice(0, maxProperties).map(function (element, index) {
      return React__default.createElement(ObjectValue, {
        key: index,
        object: element
      });
    });

    if (object.length > maxProperties) {
      previewArray.push(React__default.createElement("span", {
        key: "ellipsis"
      }, "\u2026"));
    }

    var arrayLength = object.length;
    return React__default.createElement(React__default.Fragment, null, React__default.createElement("span", {
      style: styles.objectDescription
    }, arrayLength === 0 ? "" : "(".concat(arrayLength, ")\xA0")), React__default.createElement("span", {
      style: styles.preview
    }, "[", intersperse(previewArray, ', '), "]"));
  } else {
    var _maxProperties = styles.objectMaxProperties;
    var propertyNodes = [];

    for (var propertyName in object) {
      var propertyValue = object[propertyName];

      if (hasOwnProperty.call(object, propertyName)) {
        var ellipsis = void 0;

        if (propertyNodes.length === _maxProperties - 1 && Object.keys(object).length > _maxProperties) {
          ellipsis = React__default.createElement("span", {
            key: 'ellipsis'
          }, "\u2026");
        }

        propertyNodes.push(React__default.createElement("span", {
          key: propertyName
        }, React__default.createElement(ObjectName, {
          name: propertyName || "\"\""
        }), ":\xA0", React__default.createElement(ObjectValue, {
          object: propertyValue
        }), ellipsis));
        if (ellipsis) break;
      }
    }

    var objectConstructorName = object.constructor ? object.constructor.name : 'Object';
    return React__default.createElement(React__default.Fragment, null, React__default.createElement("span", {
      style: styles.objectDescription
    }, objectConstructorName === 'Object' ? '' : "".concat(objectConstructorName, " ")), React__default.createElement("span", {
      style: styles.preview
    }, '{', intersperse(propertyNodes, ', '), '}'));
  }
};

var ObjectRootLabel = function ObjectRootLabel(_ref) {
  var name = _ref.name,
      data = _ref.data;

  if (typeof name === 'string') {
    return React__default.createElement("span", null, React__default.createElement(ObjectName, {
      name: name
    }), React__default.createElement("span", null, ": "), React__default.createElement(ObjectPreview, {
      data: data
    }));
  } else {
    return React__default.createElement(ObjectPreview, {
      data: data
    });
  }
};

/**
 * if isNonenumerable is specified, render the name dimmed
 */

var ObjectLabel = function ObjectLabel(_ref) {
  var name = _ref.name,
      data = _ref.data,
      _ref$isNonenumerable = _ref.isNonenumerable,
      isNonenumerable = _ref$isNonenumerable === void 0 ? false : _ref$isNonenumerable;
  var object = data;
  return React__default.createElement("span", null, typeof name === 'string' ? React__default.createElement(ObjectName, {
    name: name,
    dimmed: isNonenumerable
  }) : React__default.createElement(ObjectPreview, {
    data: name
  }), React__default.createElement("span", null, ": "), React__default.createElement(ObjectValue, {
    object: object
  }));
};

ObjectLabel.propTypes = {
  /** Non enumerable object property will be dimmed */
  isNonenumerable: PropTypes.bool
};

var createIterator = function createIterator(showNonenumerable, sortObjectKeys) {
  var objectIterator =
  /*#__PURE__*/
  regeneratorRuntime.mark(function objectIterator(data) {
    var shouldIterate, dataIsArray, i, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, entry, _entry, k, v, keys, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, propertyName, propertyValue, _propertyValue;

    return regeneratorRuntime.wrap(function objectIterator$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            shouldIterate = _typeof(data) === 'object' && data !== null || typeof data === 'function';

            if (shouldIterate) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            dataIsArray = Array.isArray(data); // iterable objects (except arrays)

            if (!(!dataIsArray && data[Symbol.iterator])) {
              _context.next = 41;
              break;
            }

            i = 0;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 9;
            _iterator = data[Symbol.iterator]();

          case 11:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 25;
              break;
            }

            entry = _step.value;

            if (!(Array.isArray(entry) && entry.length === 2)) {
              _context.next = 19;
              break;
            }

            _entry = _slicedToArray(entry, 2), k = _entry[0], v = _entry[1];
            _context.next = 17;
            return {
              name: k,
              data: v
            };

          case 17:
            _context.next = 21;
            break;

          case 19:
            _context.next = 21;
            return {
              name: i.toString(),
              data: entry
            };

          case 21:
            i++;

          case 22:
            _iteratorNormalCompletion = true;
            _context.next = 11;
            break;

          case 25:
            _context.next = 31;
            break;

          case 27:
            _context.prev = 27;
            _context.t0 = _context["catch"](9);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 31:
            _context.prev = 31;
            _context.prev = 32;

            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }

          case 34:
            _context.prev = 34;

            if (!_didIteratorError) {
              _context.next = 37;
              break;
            }

            throw _iteratorError;

          case 37:
            return _context.finish(34);

          case 38:
            return _context.finish(31);

          case 39:
            _context.next = 82;
            break;

          case 41:
            keys = Object.getOwnPropertyNames(data);

            if (sortObjectKeys === true && !dataIsArray) {
              // Array keys should not be sorted in alphabetical order
              keys.sort();
            } else if (typeof sortObjectKeys === 'function') {
              keys.sort(sortObjectKeys);
            }

            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context.prev = 46;
            _iterator2 = keys[Symbol.iterator]();

          case 48:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              _context.next = 65;
              break;
            }

            propertyName = _step2.value;

            if (!propertyIsEnumerable.call(data, propertyName)) {
              _context.next = 56;
              break;
            }

            propertyValue = data[propertyName];
            _context.next = 54;
            return {
              name: propertyName || "\"\"",
              data: propertyValue
            };

          case 54:
            _context.next = 62;
            break;

          case 56:
            if (!showNonenumerable) {
              _context.next = 62;
              break;
            }

            // To work around the error (happens some time when propertyName === 'caller' || propertyName === 'arguments')
            // 'caller' and 'arguments' are restricted function properties and cannot be accessed in this context
            // http://stackoverflow.com/questions/31921189/caller-and-arguments-are-restricted-function-properties-and-cannot-be-access
            _propertyValue = void 0;

            try {
              _propertyValue = data[propertyName];
            } catch (e) {// console.warn(e)
            }

            if (!(_propertyValue !== undefined)) {
              _context.next = 62;
              break;
            }

            _context.next = 62;
            return {
              name: propertyName,
              data: _propertyValue,
              isNonenumerable: true
            };

          case 62:
            _iteratorNormalCompletion2 = true;
            _context.next = 48;
            break;

          case 65:
            _context.next = 71;
            break;

          case 67:
            _context.prev = 67;
            _context.t1 = _context["catch"](46);
            _didIteratorError2 = true;
            _iteratorError2 = _context.t1;

          case 71:
            _context.prev = 71;
            _context.prev = 72;

            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }

          case 74:
            _context.prev = 74;

            if (!_didIteratorError2) {
              _context.next = 77;
              break;
            }

            throw _iteratorError2;

          case 77:
            return _context.finish(74);

          case 78:
            return _context.finish(71);

          case 79:
            if (!(showNonenumerable && data !== Object.prototype
            /* already added */
            )) {
              _context.next = 82;
              break;
            }

            _context.next = 82;
            return {
              name: '__proto__',
              data: Object.getPrototypeOf(data),
              isNonenumerable: true
            };

          case 82:
          case "end":
            return _context.stop();
        }
      }
    }, objectIterator, null, [[9, 27, 31, 39], [32,, 34, 38], [46, 67, 71, 79], [72,, 74, 78]]);
  });
  return objectIterator;
};

var defaultNodeRenderer = function defaultNodeRenderer(_ref) {
  var depth = _ref.depth,
      name = _ref.name,
      data = _ref.data,
      isNonenumerable = _ref.isNonenumerable;
  return depth === 0 ? React__default.createElement(ObjectRootLabel, {
    name: name,
    data: data
  }) : React__default.createElement(ObjectLabel, {
    name: name,
    data: data,
    isNonenumerable: isNonenumerable
  });
};
/**
 * Tree-view for objects
 */


var ObjectInspector = function ObjectInspector(_ref2) {
  var _ref2$showNonenumerab = _ref2.showNonenumerable,
      showNonenumerable = _ref2$showNonenumerab === void 0 ? false : _ref2$showNonenumerab,
      sortObjectKeys = _ref2.sortObjectKeys,
      nodeRenderer = _ref2.nodeRenderer,
      treeViewProps = _objectWithoutProperties(_ref2, ["showNonenumerable", "sortObjectKeys", "nodeRenderer"]);

  var dataIterator = createIterator(showNonenumerable, sortObjectKeys);
  var renderer = nodeRenderer ? nodeRenderer : defaultNodeRenderer;
  return React__default.createElement(TreeView, _extends({
    nodeRenderer: renderer,
    dataIterator: dataIterator
  }, treeViewProps));
};

ObjectInspector.propTypes = {
  /** An integer specifying to which level the tree should be initially expanded. */
  expandLevel: PropTypes.number,

  /** An array containing all the paths that should be expanded when the component is initialized, or a string of just one path */
  expandPaths: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  name: PropTypes.string,

  /** Not required prop because we also allow undefined value */
  data: PropTypes.any,

  /** Show non-enumerable properties */
  showNonenumerable: PropTypes.bool,

  /** Sort object keys with optional compare function. */
  sortObjectKeys: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),

  /** Provide a custom nodeRenderer */
  nodeRenderer: PropTypes.func
};
var ObjectInspector$1 = themeAcceptor(ObjectInspector);

/*
 * Polyfill for running tests
 * `includes` is an ES2016 feature
 */
if (!Array.prototype.includes) {
  Array.prototype.includes = function (searchElement
  /*, fromIndex*/
  ) {
    var O = Object(this);
    var len = parseInt(O.length) || 0;

    if (len === 0) {
      return false;
    }

    var n = parseInt(arguments[1]) || 0;
    var k;

    if (n >= 0) {
      k = n;
    } else {
      k = len + n;

      if (k < 0) {
        k = 0;
      }
    }

    var currentElement;

    while (k < len) {
      currentElement = O[k];

      if (searchElement === currentElement || searchElement !== searchElement && currentElement !== currentElement) {
        // NaN !== NaN
        return true;
      }

      k++;
    }

    return false;
  };
}

function getHeaders(data) {
  if (_typeof(data) === 'object') {
    var rowHeaders; // is an array

    if (Array.isArray(data)) {
      var nRows = data.length;
      rowHeaders = _toConsumableArray(Array(nRows).keys());
    } else if (data !== null) {
      // is an object
      // keys are row indexes
      rowHeaders = Object.keys(data);
    } // Time: O(nRows * nCols)


    var colHeaders = rowHeaders.reduce(function (colHeaders, rowHeader) {
      var row = data[rowHeader];

      if (_typeof(row) === 'object' && row !== null) {
        /* O(nCols) Could optimize `includes` here */
        var cols = Object.keys(row);
        cols.reduce(function (xs, x) {
          if (!xs.includes(x)) {
            /* xs is the colHeaders to be filled by searching the row's indexes */
            xs.push(x);
          }

          return xs;
        }, colHeaders);
      }

      return colHeaders;
    }, []);
    return {
      rowHeaders: rowHeaders,
      colHeaders: colHeaders
    };
  }

  return undefined;
}

var DataContainer = function DataContainer(_ref) {
  var rows = _ref.rows,
      columns = _ref.columns,
      rowsData = _ref.rowsData;
  var styles = useStyles('TableInspectorDataContainer');
  var borderStyles = useStyles('TableInspectorLeftBorder');
  return React__default.createElement("div", {
    style: styles.div
  }, React__default.createElement("table", {
    style: styles.table
  }, React__default.createElement("colgroup", null), React__default.createElement("tbody", null, rows.map(function (row, i) {
    return React__default.createElement("tr", {
      key: row,
      style: styles.tr
    }, React__default.createElement("td", {
      style: _objectSpread({}, styles.td, borderStyles.none)
    }, row), columns.map(function (column) {
      var rowData = rowsData[i]; // rowData could be
      //  object -> index by key
      //    array -> index by array index
      //    null -> pass
      //  boolean -> pass
      //  string -> pass (hasOwnProperty returns true for [0..len-1])
      //  number -> pass
      //  function -> pass
      //  symbol
      //  undefined -> pass

      if (_typeof(rowData) === 'object' && rowData !== null && hasOwnProperty.call(rowData, column)) {
        return React__default.createElement("td", {
          key: column,
          style: _objectSpread({}, styles.td, borderStyles.solid)
        }, React__default.createElement(ObjectValue, {
          object: rowData[column]
        }));
      } else {
        return React__default.createElement("td", {
          key: column,
          style: _objectSpread({}, styles.td, borderStyles.solid)
        });
      }
    }));
  }))));
};

var SortIconContainer = function SortIconContainer(props) {
  return React__default.createElement("div", {
    style: {
      position: 'absolute',
      top: 1,
      right: 0,
      bottom: 1,
      display: 'flex',
      alignItems: 'center'
    }
  }, props.children);
};

var SortIcon = function SortIcon(_ref) {
  var sortAscending = _ref.sortAscending;
  var styles = useStyles('TableInspectorSortIcon');
  var glyph = sortAscending ? '▲' : '▼';
  return React__default.createElement("div", {
    style: styles
  }, glyph);
};

var TH = function TH(_ref2) {
  var _ref2$sortAscending = _ref2.sortAscending,
      sortAscending = _ref2$sortAscending === void 0 ? false : _ref2$sortAscending,
      _ref2$sorted = _ref2.sorted,
      sorted = _ref2$sorted === void 0 ? false : _ref2$sorted,
      _ref2$onClick = _ref2.onClick,
      onClick = _ref2$onClick === void 0 ? undefined : _ref2$onClick,
      _ref2$borderStyle = _ref2.borderStyle,
      borderStyle = _ref2$borderStyle === void 0 ? {} : _ref2$borderStyle,
      children = _ref2.children,
      thProps = _objectWithoutProperties(_ref2, ["sortAscending", "sorted", "onClick", "borderStyle", "children"]);

  var styles = useStyles('TableInspectorTH');

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hovered = _useState2[0],
      setHovered = _useState2[1];

  var handleMouseEnter = React.useCallback(function () {
    return setHovered(true);
  }, []);
  var handleMouseLeave = React.useCallback(function () {
    return setHovered(false);
  }, []);
  return React__default.createElement("th", _extends({}, thProps, {
    style: _objectSpread({}, styles.base, borderStyle, hovered ? styles.base[':hover'] : {}),
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onClick: onClick
  }), React__default.createElement("div", {
    style: styles.div
  }, children), sorted && React__default.createElement(SortIconContainer, null, React__default.createElement(SortIcon, {
    sortAscending: sortAscending
  })));
};

var HeaderContainer = function HeaderContainer(_ref) {
  var _ref$indexColumnText = _ref.indexColumnText,
      indexColumnText = _ref$indexColumnText === void 0 ? '(index)' : _ref$indexColumnText,
      _ref$columns = _ref.columns,
      columns = _ref$columns === void 0 ? [] : _ref$columns,
      sorted = _ref.sorted,
      sortIndexColumn = _ref.sortIndexColumn,
      sortColumn = _ref.sortColumn,
      sortAscending = _ref.sortAscending,
      onTHClick = _ref.onTHClick,
      onIndexTHClick = _ref.onIndexTHClick;
  var styles = useStyles('TableInspectorHeaderContainer');
  var borderStyles = useStyles('TableInspectorLeftBorder');
  return React__default.createElement("div", {
    style: styles.base
  }, React__default.createElement("table", {
    style: styles.table
  }, React__default.createElement("tbody", null, React__default.createElement("tr", null, React__default.createElement(TH, {
    borderStyle: borderStyles.none,
    sorted: sorted && sortIndexColumn,
    sortAscending: sortAscending,
    onClick: onIndexTHClick
  }, indexColumnText), columns.map(function (column) {
    return React__default.createElement(TH, {
      borderStyle: borderStyles.solid,
      key: column,
      sorted: sorted && sortColumn === column,
      sortAscending: sortAscending,
      onClick: onTHClick.bind(null, column)
    }, column);
  })))));
};

var TableInspector = function TableInspector(_ref) {
  var data = _ref.data,
      columns = _ref.columns;
  var styles = useStyles('TableInspector');

  var _useState = React.useState({
    // has user ever clicked the <th> tag to sort?
    sorted: false,
    // is index column sorted?
    sortIndexColumn: false,
    // which column is sorted?
    sortColumn: undefined,
    // is sorting ascending or descending?
    sortAscending: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      _useState2$ = _useState2[0],
      sorted = _useState2$.sorted,
      sortIndexColumn = _useState2$.sortIndexColumn,
      sortColumn = _useState2$.sortColumn,
      sortAscending = _useState2$.sortAscending,
      setState = _useState2[1];

  var handleIndexTHClick = React.useCallback(function () {
    setState(function (_ref2) {
      var sortIndexColumn = _ref2.sortIndexColumn,
          sortAscending = _ref2.sortAscending;
      return {
        sorted: true,
        sortIndexColumn: true,
        sortColumn: undefined,
        // when changed to a new column, default to asending
        sortAscending: sortIndexColumn ? !sortAscending : true
      };
    });
  }, []);
  var handleTHClick = React.useCallback(function (col) {
    setState(function (_ref3) {
      var sortColumn = _ref3.sortColumn,
          sortAscending = _ref3.sortAscending;
      return {
        sorted: true,
        sortIndexColumn: false,
        // update sort column
        sortColumn: col,
        // when changed to a new column, default to asending
        sortAscending: col === sortColumn ? !sortAscending : true
      };
    });
  }, []);

  if (_typeof(data) !== 'object' || data === null) {
    return React__default.createElement("div", null);
  }

  var _getHeaders = getHeaders(data),
      rowHeaders = _getHeaders.rowHeaders,
      colHeaders = _getHeaders.colHeaders; // columns to be displayed are specified
  // NOTE: there's some space for optimization here


  if (columns !== undefined) {
    colHeaders = columns;
  }

  var rowsData = rowHeaders.map(function (rowHeader) {
    return data[rowHeader];
  });
  var columnDataWithRowIndexes;
  /* row indexes are [0..nRows-1] */
  // TODO: refactor

  if (sortColumn !== undefined) {
    // the column to be sorted (rowsData, column) => [[columnData, rowIndex]]
    columnDataWithRowIndexes = rowsData.map(function (rowData, index) {
      // normalize rowData
      if (_typeof(rowData) === 'object' && rowData !== null
      /*&& rowData.hasOwnProperty(sortColumn)*/
      ) {
          var columnData = rowData[sortColumn];
          return [columnData, index];
        }

      return [undefined, index];
    });
  } else {
    if (sortIndexColumn) {
      columnDataWithRowIndexes = rowHeaders.map(function (rowData, index) {
        var columnData = rowHeaders[index];
        return [columnData, index];
      });
    }
  }

  if (columnDataWithRowIndexes !== undefined) {
    // apply a mapper before sorting (because we need to access inside a container)
    var comparator = function comparator(mapper, ascending) {
      return function (a, b) {
        var v1 = mapper(a); // the datum

        var v2 = mapper(b);

        var type1 = _typeof(v1);

        var type2 = _typeof(v2); // use '<' operator to compare same type of values or compare type precedence order #


        var lt = function lt(v1, v2) {
          if (v1 < v2) {
            return -1;
          } else if (v1 > v2) {
            return 1;
          } else {
            return 0;
          }
        };

        var result;

        if (type1 === type2) {
          result = lt(v1, v2);
        } else {
          // order of different types
          var order = {
            string: 0,
            number: 1,
            object: 2,
            symbol: 3,
            boolean: 4,
            undefined: 5,
            function: 6
          };
          result = lt(order[type1], order[type2]);
        } // reverse result if descending


        if (!ascending) result = -result;
        return result;
      };
    };

    var sortedRowIndexes = columnDataWithRowIndexes.sort(comparator(function (item) {
      return item[0];
    }, sortAscending)).map(function (item) {
      return item[1];
    }); // sorted row indexes

    rowHeaders = sortedRowIndexes.map(function (i) {
      return rowHeaders[i];
    });
    rowsData = sortedRowIndexes.map(function (i) {
      return rowsData[i];
    });
  }

  return React__default.createElement("div", {
    style: styles.base
  }, React__default.createElement(HeaderContainer, {
    columns: colHeaders
    /* for sorting */
    ,
    sorted: sorted,
    sortIndexColumn: sortIndexColumn,
    sortColumn: sortColumn,
    sortAscending: sortAscending,
    onTHClick: handleTHClick,
    onIndexTHClick: handleIndexTHClick
  }), React__default.createElement(DataContainer, {
    rows: rowHeaders,
    columns: colHeaders,
    rowsData: rowsData
  }));
};

TableInspector.propTypes = {
  /**
   * the Javascript object you would like to inspect, either an array or an object
   */
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),

  /**
   * An array of the names of the columns you'd like to display in the table
   */
  columns: PropTypes.array
};
var TableInspector$1 = themeAcceptor(TableInspector);

var TEXT_NODE_MAX_INLINE_CHARS = 80;

var shouldInline = function shouldInline(data) {
  return data.childNodes.length === 0 || data.childNodes.length === 1 && data.childNodes[0].nodeType === Node.TEXT_NODE && data.textContent.length < TEXT_NODE_MAX_INLINE_CHARS;
};

var OpenTag = function OpenTag(_ref) {
  var tagName = _ref.tagName,
      attributes = _ref.attributes,
      styles = _ref.styles;
  return React__default.createElement("span", {
    style: styles.base
  }, '<', React__default.createElement("span", {
    style: styles.tagName
  }, tagName), function () {
    if (attributes) {
      var attributeNodes = [];

      for (var i = 0; i < attributes.length; i++) {
        var attribute = attributes[i];
        attributeNodes.push(React__default.createElement("span", {
          key: i
        }, ' ', React__default.createElement("span", {
          style: styles.htmlAttributeName
        }, attribute.name), '="', React__default.createElement("span", {
          style: styles.htmlAttributeValue
        }, attribute.value), '"'));
      }

      return attributeNodes;
    }
  }(), '>');
}; // isChildNode style={{ marginLeft: -12 /* hack: offset placeholder */ }}


var CloseTag = function CloseTag(_ref2) {
  var tagName = _ref2.tagName,
      _ref2$isChildNode = _ref2.isChildNode,
      isChildNode = _ref2$isChildNode === void 0 ? false : _ref2$isChildNode,
      styles = _ref2.styles;
  return React__default.createElement("span", {
    style: _extends({}, styles.base, isChildNode && styles.offsetLeft)
  }, '</', React__default.createElement("span", {
    style: styles.tagName
  }, tagName), '>');
};

var nameByNodeType = {
  1: 'ELEMENT_NODE',
  3: 'TEXT_NODE',
  7: 'PROCESSING_INSTRUCTION_NODE',
  8: 'COMMENT_NODE',
  9: 'DOCUMENT_NODE',
  10: 'DOCUMENT_TYPE_NODE',
  // http://stackoverflow.com/questions/6088972/get-doctype-of-an-html-as-string-with-javascript
  11: 'DOCUMENT_FRAGMENT_NODE'
};

var DOMNodePreview = function DOMNodePreview(_ref3) {
  var isCloseTag = _ref3.isCloseTag,
      data = _ref3.data,
      expanded = _ref3.expanded;
  var styles = useStyles('DOMNodePreview');

  if (isCloseTag) {
    return React__default.createElement(CloseTag, {
      styles: styles.htmlCloseTag,
      isChildNode: true,
      tagName: data.tagName
    });
  }

  switch (data.nodeType) {
    case Node.ELEMENT_NODE:
      return React__default.createElement("span", null, React__default.createElement(OpenTag, {
        tagName: data.tagName,
        attributes: data.attributes,
        styles: styles.htmlOpenTag
      }), shouldInline(data) ? data.textContent : !expanded && '…', !expanded && React__default.createElement(CloseTag, {
        tagName: data.tagName,
        styles: styles.htmlCloseTag
      }));

    case Node.TEXT_NODE:
      return React__default.createElement("span", null, data.textContent);

    case Node.CDATA_SECTION_NODE:
      return React__default.createElement("span", null, '<![CDATA[' + data.textContent + ']]>');

    case Node.COMMENT_NODE:
      return React__default.createElement("span", {
        style: styles.htmlComment
      }, '<!--', data.textContent, '-->');

    case Node.PROCESSING_INSTRUCTION_NODE:
      return React__default.createElement("span", null, data.nodeName);

    case Node.DOCUMENT_TYPE_NODE:
      return React__default.createElement("span", {
        style: styles.htmlDoctype
      }, '<!DOCTYPE ', data.name, data.publicId ? " PUBLIC \"".concat(data.publicId, "\"") : '', !data.publicId && data.systemId ? ' SYSTEM' : '', data.systemId ? " \"".concat(data.systemId, "\"") : '', '>');

    case Node.DOCUMENT_NODE:
      return React__default.createElement("span", null, data.nodeName);

    case Node.DOCUMENT_FRAGMENT_NODE:
      return React__default.createElement("span", null, data.nodeName);

    default:
      return React__default.createElement("span", null, nameByNodeType[data.nodeType]);
  }
};

DOMNodePreview.propTypes = {
  /** If true, just render a close tag */
  isCloseTag: PropTypes.bool,

  /**  */
  name: PropTypes.string,

  /** The DOM Node */
  data: PropTypes.object.isRequired,

  /** Whether the DOM node has been expanded. */
  expanded: PropTypes.bool.isRequired
};

var domIterator =
/*#__PURE__*/
regeneratorRuntime.mark(function domIterator(data) {
  var textInlined, i, node;
  return regeneratorRuntime.wrap(function domIterator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(data && data.childNodes)) {
            _context.next = 17;
            break;
          }

          textInlined = shouldInline(data);

          if (!textInlined) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return");

        case 4:
          i = 0;

        case 5:
          if (!(i < data.childNodes.length)) {
            _context.next = 14;
            break;
          }

          node = data.childNodes[i];

          if (!(node.nodeType === Node.TEXT_NODE && node.textContent.trim().length === 0)) {
            _context.next = 9;
            break;
          }

          return _context.abrupt("continue", 11);

        case 9:
          _context.next = 11;
          return {
            name: "".concat(node.tagName, "[").concat(i, "]"),
            data: node
          };

        case 11:
          i++;
          _context.next = 5;
          break;

        case 14:
          if (!data.tagName) {
            _context.next = 17;
            break;
          }

          _context.next = 17;
          return {
            name: 'CLOSE_TAG',
            data: {
              tagName: data.tagName
            },
            isCloseTag: true
          };

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, domIterator);
});

var DOMInspector = function DOMInspector(props) {
  return React__default.createElement(TreeView, _extends({
    nodeRenderer: DOMNodePreview,
    dataIterator: domIterator
  }, props));
};

DOMInspector.propTypes = {
  // The DOM Node to inspect
  data: PropTypes.object.isRequired
};
var DOMInspector$1 = themeAcceptor(DOMInspector);

var Inspector = function Inspector(_ref) {
  var _ref$table = _ref.table,
      table = _ref$table === void 0 ? false : _ref$table,
      data = _ref.data,
      rest = _objectWithoutProperties(_ref, ["table", "data"]);

  if (table) {
    return React__default.createElement(TableInspector$1, _extends({
      data: data
    }, rest));
  }

  if (isDOM(data)) return React__default.createElement(DOMInspector$1, _extends({
    data: data
  }, rest));
  return React__default.createElement(ObjectInspector$1, _extends({
    data: data
  }, rest));
};

Inspector.propTypes = {
  data: PropTypes.any,
  name: PropTypes.string,
  table: PropTypes.bool
};

exports.DOMInspector = DOMInspector$1;
exports.Inspector = Inspector;
exports.ObjectInspector = ObjectInspector$1;
exports.ObjectLabel = ObjectLabel;
exports.ObjectName = ObjectName;
exports.ObjectRootLabel = ObjectRootLabel;
exports.ObjectValue = ObjectValue;
exports.TableInspector = TableInspector$1;
exports.chromeDark = theme;
exports.chromeLight = theme$1;
exports.default = Inspector;
//# sourceMappingURL=react-inspector.js.map
