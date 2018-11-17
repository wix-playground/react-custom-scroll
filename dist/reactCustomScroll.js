(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory((function webpackLoadOptionalExternalModule() { try { return require("prop-types"); } catch(e) {} }()), require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["prop-types", "react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactCustomScroll"] = factory((function webpackLoadOptionalExternalModule() { try { return require("prop-types"); } catch(e) {} }()), require("react"), require("react-dom"));
	else
		root["ReactCustomScroll"] = factory(root["prop-types"], root["react"], root["react-dom"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_prop_types__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main/cs.scss":
/*!**************************!*\
  !*** ./src/main/cs.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\nmodule.exports = {\"custom-scroll\":\"rcs-custom-scroll\",\"customScroll\":\"rcs-custom-scroll\",\"outer-container\":\"rcs-outer-container\",\"outerContainer\":\"rcs-outer-container\",\"positioning\":\"rcs-positioning\",\"custom-scrollbar\":\"rcs-custom-scrollbar\",\"customScrollbar\":\"rcs-custom-scrollbar\",\"inner-container\":\"rcs-inner-container\",\"innerContainer\":\"rcs-inner-container\",\"content-scrolled\":\"rcs-content-scrolled\",\"contentScrolled\":\"rcs-content-scrolled\",\"scroll-handle-dragged\":\"rcs-scroll-handle-dragged\",\"scrollHandleDragged\":\"rcs-scroll-handle-dragged\",\"custom-scrollbar-rtl\":\"rcs-custom-scrollbar-rtl\",\"customScrollbarRtl\":\"rcs-custom-scrollbar-rtl\",\"custom-scroll-handle\":\"rcs-custom-scroll-handle\",\"customScrollHandle\":\"rcs-custom-scroll-handle\",\"inner-handle\":\"rcs-inner-handle\",\"innerHandle\":\"rcs-inner-handle\"};\n\n//# sourceURL=webpack://ReactCustomScroll/./src/main/cs.scss?");

/***/ }),

/***/ "./src/main/customScroll.js":
/*!**********************************!*\
  !*** ./src/main/customScroll.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"react-dom\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _cs = __webpack_require__(/*! ./cs.scss */ \"./src/main/cs.scss\");\n\nvar _cs2 = _interopRequireDefault(_cs);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar simpleDebounce = function simpleDebounce(func, delay) {\n  var timer = void 0;\n\n  return function () {\n    clearTimeout(timer);\n    timer = setTimeout(function () {\n      func();\n    }, delay);\n  };\n};\n\nvar ensureWithinLimits = function ensureWithinLimits(value, min, max) {\n  min = !min && min !== 0 ? value : min;\n  max = !max && max !== 0 ? value : max;\n  if (min > max) {\n    console.error('min limit is greater than max limit');\n    return value;\n  }\n  if (value < min) {\n    return min;\n  }\n  if (value > max) {\n    return max;\n  }\n  return value;\n};\n\nfunction isEventPosOnDomNode(event, domNode) {\n  var nodeClientRect = domNode.getBoundingClientRect();\n  return isEventPosOnLayout(event, nodeClientRect);\n}\n\nfunction isEventPosOnLayout(event, layout) {\n  return event.clientX > layout.left && event.clientX < layout.right && event.clientY > layout.top && event.clientY < layout.top + layout.height;\n}\n\nvar CustomScroll = function (_Component) {\n  _inherits(CustomScroll, _Component);\n\n  function CustomScroll(props) {\n    _classCallCheck(this, CustomScroll);\n\n    var _this = _possibleConstructorReturn(this, (CustomScroll.__proto__ || Object.getPrototypeOf(CustomScroll)).call(this, props));\n\n    _this.adjustFreezePosition = function (prevProps) {\n      var innerContainer = _this.getScrolledElement();\n      var contentWrapper = _this.contentWrapper;\n\n      if (_this.props.freezePosition) {\n        contentWrapper.scrollTop = _this.state.scrollPos;\n      }\n\n      if (prevProps.freezePosition) {\n        innerContainer.scrollTop = _this.state.scrollPos;\n      }\n    };\n\n    _this.toggleScrollIfNeeded = function () {\n      var shouldHaveScroll = _this.contentHeight - _this.visibleHeight > 1;\n      if (_this.hasScroll !== shouldHaveScroll) {\n        _this.hasScroll = shouldHaveScroll;\n        _this.forceUpdate();\n      }\n    };\n\n    _this.getScrollTop = function () {\n      return _this.getScrolledElement().scrollTop;\n    };\n\n    _this.updateScrollPosition = function (scrollValue) {\n      var innerContainer = _this.getScrolledElement();\n      var updatedScrollTop = ensureWithinLimits(scrollValue, 0, _this.contentHeight - _this.visibleHeight);\n      if (_this.state.scrollPos !== updatedScrollTop || innerContainer.scrollTop !== updatedScrollTop) {\n        innerContainer.scrollTop = updatedScrollTop;\n        _this.setState({\n          scrollPos: updatedScrollTop\n        });\n      }\n    };\n\n    _this.onClick = function (event) {\n      if (!_this.hasScroll || !_this.isMouseEventOnCustomScrollbar(event) || _this.isMouseEventOnScrollHandle(event)) {\n        return;\n      }\n      var newScrollHandleTop = _this.calculateNewScrollHandleTop(event);\n      var newScrollValue = _this.getScrollValueFromHandlePosition(newScrollHandleTop);\n\n      _this.updateScrollPosition(newScrollValue);\n    };\n\n    _this.isMouseEventOnCustomScrollbar = function (event) {\n      if (!_this.customScrollbarRef) {\n        return false;\n      }\n      var customScrollElm = _reactDom2.default.findDOMNode(_this);\n      var boundingRect = customScrollElm.getBoundingClientRect();\n      var customScrollbarBoundingRect = _this.customScrollbarRef.getBoundingClientRect();\n      var horizontalClickArea = _this.props.rtl ? {\n        left: boundingRect.left,\n        right: customScrollbarBoundingRect.right\n      } : {\n        left: customScrollbarBoundingRect.left,\n        width: boundingRect.right\n      };\n      var customScrollbarLayout = Object.assign({}, {\n        left: boundingRect.left,\n        right: boundingRect.right,\n        top: boundingRect.top,\n        height: boundingRect.height\n      }, horizontalClickArea);\n      return isEventPosOnLayout(event, customScrollbarLayout);\n    };\n\n    _this.isMouseEventOnScrollHandle = function (event) {\n      if (!_this.scrollHandle) {\n        return false;\n      }\n      var scrollHandle = _reactDom2.default.findDOMNode(_this.scrollHandle);\n      return isEventPosOnDomNode(event, scrollHandle);\n    };\n\n    _this.calculateNewScrollHandleTop = function (clickEvent) {\n      var domNode = _reactDom2.default.findDOMNode(_this);\n      var boundingRect = domNode.getBoundingClientRect();\n      var currentTop = boundingRect.top + window.pageYOffset;\n      var clickYRelativeToScrollbar = clickEvent.pageY - currentTop;\n      var scrollHandleTop = _this.getScrollHandleStyle().top;\n      var newScrollHandleTop = void 0;\n      var isBelowHandle = clickYRelativeToScrollbar > scrollHandleTop + _this.scrollHandleHeight;\n      if (isBelowHandle) {\n        newScrollHandleTop = scrollHandleTop + Math.min(_this.scrollHandleHeight, _this.visibleHeight - _this.scrollHandleHeight);\n      } else {\n        newScrollHandleTop = scrollHandleTop - Math.max(_this.scrollHandleHeight, 0);\n      }\n      return newScrollHandleTop;\n    };\n\n    _this.getScrollValueFromHandlePosition = function (handlePosition) {\n      return handlePosition / _this.scrollRatio;\n    };\n\n    _this.getScrollHandleStyle = function () {\n      var handlePosition = _this.state.scrollPos * _this.scrollRatio;\n      _this.scrollHandleHeight = _this.visibleHeight * _this.scrollRatio;\n      return {\n        height: _this.scrollHandleHeight,\n        top: handlePosition\n      };\n    };\n\n    _this.adjustCustomScrollPosToContentPos = function (scrollPosition) {\n      _this.setState({\n        scrollPos: scrollPosition\n      });\n    };\n\n    _this.onScroll = function (event) {\n      if (_this.props.freezePosition) {\n        return;\n      }\n      _this.hideScrollThumb();\n      _this.adjustCustomScrollPosToContentPos(event.currentTarget.scrollTop);\n      if (_this.props.onScroll) {\n        _this.props.onScroll(event);\n      }\n    };\n\n    _this.getScrolledElement = function () {\n      return _this.innerContainer;\n    };\n\n    _this.onMouseDown = function (event) {\n      if (!_this.hasScroll || !_this.isMouseEventOnScrollHandle(event)) {\n        return;\n      }\n\n      _this.startDragHandlePos = _this.getScrollHandleStyle().top;\n      _this.startDragMousePos = event.pageY;\n      _this.setState({\n        onDrag: true\n      });\n      document.addEventListener('mousemove', _this.onHandleDrag);\n      document.addEventListener('mouseup', _this.onHandleDragEnd);\n    };\n\n    _this.onTouchStart = function () {\n      _this.setState({\n        onDrag: true\n      });\n    };\n\n    _this.onHandleDrag = function (event) {\n      event.preventDefault();\n      var mouseDeltaY = event.pageY - _this.startDragMousePos;\n      var handleTopPosition = ensureWithinLimits(_this.startDragHandlePos + mouseDeltaY, 0, _this.visibleHeight - _this.scrollHandleHeight);\n      var newScrollValue = _this.getScrollValueFromHandlePosition(handleTopPosition);\n      _this.updateScrollPosition(newScrollValue);\n    };\n\n    _this.onHandleDragEnd = function (e) {\n      _this.setState({\n        onDrag: false\n      });\n      e.preventDefault();\n      document.removeEventListener('mousemove', _this.onHandleDrag);\n      document.removeEventListener('mouseup', _this.onHandleDragEnd);\n    };\n\n    _this.blockOuterScroll = function (e) {\n      if (_this.props.allowOuterScroll) {\n        return;\n      }\n      var contentNode = e.currentTarget;\n      var totalHeight = e.currentTarget.scrollHeight;\n      var maxScroll = totalHeight - e.currentTarget.offsetHeight;\n      var delta = e.deltaY % 3 ? e.deltaY : e.deltaY * 10;\n      if (contentNode.scrollTop + delta <= 0) {\n        contentNode.scrollTop = 0;\n        e.preventDefault();\n      } else if (contentNode.scrollTop + delta >= maxScroll) {\n        contentNode.scrollTop = maxScroll;\n        e.preventDefault();\n      }\n      e.stopPropagation();\n    };\n\n    _this.getInnerContainerClasses = function () {\n      if (_this.state.scrollPos && _this.props.addScrolledClass) {\n        return _cs2.default.innerContainer + ' ' + _cs2.default.contentScrolled;\n      }\n      return _cs2.default.innerContainer;\n    };\n\n    _this.getScrollStyles = function () {\n      var scrollSize = _this.scrollbarYWidth || 20;\n      var marginKey = _this.props.rtl ? 'marginLeft' : 'marginRight';\n      var innerContainerStyle = {\n        height: _this.props.heightRelativeToParent || _this.props.flex ? '100%' : ''\n      };\n      innerContainerStyle[marginKey] = -1 * scrollSize;\n      var contentWrapperStyle = {\n        height: _this.props.heightRelativeToParent || _this.props.flex ? '100%' : '',\n        overflowY: _this.props.freezePosition ? 'hidden' : 'visible'\n      };\n      contentWrapperStyle[marginKey] = _this.scrollbarYWidth ? 0 : scrollSize;\n\n      return {\n        innerContainer: innerContainerStyle,\n        contentWrapper: contentWrapperStyle\n      };\n    };\n\n    _this.getOuterContainerStyle = function () {\n      return {\n        height: _this.props.heightRelativeToParent || _this.props.flex ? '100%' : ''\n      };\n    };\n\n    _this.getRootStyles = function () {\n      var result = {};\n\n      if (_this.props.heightRelativeToParent) {\n        result.height = _this.props.heightRelativeToParent;\n      } else if (_this.props.flex) {\n        result.flex = _this.props.flex;\n      }\n\n      return result;\n    };\n\n    _this.enforceMinHandleHeight = function (calculatedStyle) {\n      var minHeight = _this.props.minScrollHandleHeight;\n      if (calculatedStyle.height >= minHeight) {\n        return calculatedStyle;\n      }\n\n      var diffHeightBetweenMinAndCalculated = minHeight - calculatedStyle.height;\n      var scrollPositionToAvailableScrollRatio = _this.state.scrollPos / (_this.contentHeight - _this.visibleHeight);\n      var scrollHandlePosAdjustmentForMinHeight = diffHeightBetweenMinAndCalculated * scrollPositionToAvailableScrollRatio;\n      var handlePosition = calculatedStyle.top - scrollHandlePosAdjustmentForMinHeight;\n\n      return {\n        height: minHeight,\n        top: handlePosition\n      };\n    };\n\n    _this.setCustomScrollbarRef = function (elm) {\n      if (elm && !_this.customScrollbarRef) {\n        _this.customScrollbarRef = elm;\n      }\n    };\n\n    _this.scrollbarYWidth = 0;\n    _this.state = {\n      scrollPos: 0,\n      onDrag: false\n    };\n\n    _this.setRefElement = function (elmKey) {\n      return function (element) {\n        if (element && !_this[elmKey]) {\n          _this[elmKey] = element;\n        }\n      };\n    };\n\n    _this.hideScrollThumb = simpleDebounce(function () {\n      _this.setState({\n        onDrag: false\n      });\n    }, 500);\n    return _this;\n  }\n\n  _createClass(CustomScroll, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      if (typeof this.props.scrollTo !== 'undefined') {\n        this.updateScrollPosition(this.props.scrollTo);\n      } else {\n        this.forceUpdate();\n      }\n    }\n  }, {\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate(prevProps, prevState) {\n      var prevContentHeight = this.contentHeight;\n      var prevVisibleHeight = this.visibleHeight;\n      var innerContainer = this.getScrolledElement();\n      var reachedBottomOnPrevRender = prevState.scrollPos >= prevContentHeight - prevVisibleHeight;\n\n      this.contentHeight = innerContainer.scrollHeight;\n      this.scrollbarYWidth = innerContainer.offsetWidth - innerContainer.clientWidth;\n      this.visibleHeight = innerContainer.clientHeight;\n      this.scrollRatio = this.contentHeight ? this.visibleHeight / this.contentHeight : 1;\n\n      this.toggleScrollIfNeeded();\n\n      if (this.props.freezePosition || prevProps.freezePosition) {\n        this.adjustFreezePosition(prevProps);\n      }\n      if (typeof this.props.scrollTo !== 'undefined' && this.props.scrollTo !== prevProps.scrollTo) {\n        this.updateScrollPosition(this.props.scrollTo);\n      } else if (this.props.keepAtBottom && reachedBottomOnPrevRender && (prevContentHeight !== this.contentHeight || this.state === prevState)) {\n        this.updateScrollPosition(this.contentHeight - this.visibleHeight);\n      }\n    }\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      document.removeEventListener('mousemove', this.onHandleDrag);\n      document.removeEventListener('mouseup', this.onHandleDragEnd);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var scrollStyles = this.getScrollStyles();\n      var rootStyle = this.getRootStyles();\n      var scrollHandleStyle = this.enforceMinHandleHeight(this.getScrollHandleStyle());\n\n      return _react2.default.createElement(\n        'div',\n        { className: _cs2.default.customScroll + ' ' + (this.state.onDrag ? _cs2.default.scrollHandleDragged : ''),\n          style: rootStyle },\n        _react2.default.createElement(\n          'div',\n          { className: _cs2.default.outerContainer,\n            style: this.getOuterContainerStyle(),\n            onMouseDown: this.onMouseDown,\n            onTouchStart: this.onTouchStart,\n            onClick: this.onClick },\n          this.hasScroll ? _react2.default.createElement(\n            'div',\n            { className: _cs2.default.positioning },\n            _react2.default.createElement(\n              'div',\n              { ref: this.setCustomScrollbarRef,\n                className: _cs2.default.customScrollbar + ' ' + (this.props.rtl ? _cs2.default.customScrollbarRtl : ''),\n                key: 'scrollbar' },\n              _react2.default.createElement(\n                'div',\n                { ref: this.setRefElement('scrollHandle'),\n                  className: _cs2.default.customScrollHandle,\n                  style: scrollHandleStyle },\n                _react2.default.createElement('div', { className: this.props.handleClass })\n              )\n            )\n          ) : null,\n          _react2.default.createElement(\n            'div',\n            { ref: this.setRefElement('innerContainer'),\n              className: this.getInnerContainerClasses(),\n              style: scrollStyles.innerContainer,\n              onScroll: this.onScroll,\n              onWheel: this.blockOuterScroll },\n            _react2.default.createElement(\n              'div',\n              { className: _cs2.default.contentWrapper,\n                ref: this.setRefElement('contentWrapper'),\n                style: scrollStyles.contentWrapper },\n              this.props.children\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return CustomScroll;\n}(_react.Component);\n\ntry {\n  var PropTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n  CustomScroll.propTypes = {\n    children: PropTypes.any,\n    allowOuterScroll: PropTypes.bool,\n    heightRelativeToParent: PropTypes.string,\n    onScroll: PropTypes.func,\n    addScrolledClass: PropTypes.bool,\n    freezePosition: PropTypes.bool,\n    handleClass: PropTypes.string,\n    minScrollHandleHeight: PropTypes.number,\n    flex: PropTypes.string,\n    rtl: PropTypes.bool,\n    scrollTo: PropTypes.number,\n    keepAtBottom: PropTypes.bool\n  };\n} catch (e) {} //eslint-disable-line no-empty\n\nCustomScroll.defaultProps = {\n  handleClass: _cs2.default.innerHandle,\n  minScrollHandleHeight: 38\n};\n\nmodule.exports = CustomScroll;\n\n//# sourceURL=webpack://ReactCustomScroll/./src/main/customScroll.js?");

/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./src/main/customScroll ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/main/customScroll */\"./src/main/customScroll.js\");\n\n\n//# sourceURL=webpack://ReactCustomScroll/multi_./src/main/customScroll?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if(typeof __WEBPACK_EXTERNAL_MODULE_prop_types__ === 'undefined') {var e = new Error(\"Cannot find module \\\"prop-types\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e;}\nmodule.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;\n\n//# sourceURL=webpack://ReactCustomScroll/external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://ReactCustomScroll/external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;\n\n//# sourceURL=webpack://ReactCustomScroll/external_%22react-dom%22?");

/***/ })

/******/ });
});