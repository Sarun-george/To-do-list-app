/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Google Sans\", sans-serif;\n}\n\nnav{\n    display: flex;\n    justify-content: space-between;\n    background-color: #C0B236;\n    height: 70px;\n    padding-left: 50px;\n}\n\nnav h1{\n  align-content: center;\n}\n\nnav button{\n  margin-right: 50px;\n  height: 45px;\n  width: 100px;\n  margin-top: 10px;\n  background-color: #FFF38C;\n  border: 1px solid black;\n  border-radius: 7px;\n  cursor: pointer;\n}\n\n#container{\n    display: flex;\n    min-height: 90vh;\n}\n\n.sidebar{\n    width: 330px;\n    background-color: #F0E161;\n}\n\n.sidebar-header{\n    display: flex;\n    justify-content: space-between;\n    margin-top: 15px;\n}\n\n\n.sidebar-header h1{\n    padding-left: 20px;\n    padding-top: 10px;\n}\n\n#project-button{\n  margin-right: 30px;\n  height: 40px;\n  width: 50px;\n  margin-top: 15px;\n  cursor: pointer;\n  background-color: #D9CB50;\n  border: 1px solid;\n  border-radius: 7px;\n  font-size: x-large; \n}\n\n.sidebar-content{\n  margin-top: 40px;\n  padding-left: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n\n.sidebar-content div{\n  height: 40px;\n  width: 285px;\n  padding-top: 9px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.sidebar-content div button{\n  margin-right: 20px;\n  height: 23px;\n  width: 35px;\n  visibility: hidden;\n  background-color: red;\n  border: 1px solid black;\n  cursor: pointer;\n}\n\n.sidebar-content div:hover button{\n  visibility: visible;\n}\n\n.sidebar-content div h3{\n  padding-left: 20px;\n}\n\n.sidebar-content div:hover {\n  background-color: #C0B236;\n  border-radius: 10px;\n}\n\n#main-content{\nbackground-color: #FFF38C;\nflex-grow: 1;\n}\n\n#main-content h1{\npadding-left: 20px;\npadding-top: 20px;\n}\n\n#task-list div{\n    height: 70px;\n    width: 900px;\n    margin-left: 70px;\n    margin-top: 30px;\n    border: 1px solid black;\n    border-radius: 10px;\n    display: flex;\n    justify-content: space-between;\n    background-color: #D9CB50;\n    align-items: center;\n}\n\n#main-content div h3{\n    margin-left: 25px;\n}\n\n\n#main-content div button{\n    margin-right: 50px;\n    height: 35px;\n    width: 60px;\n    background-color: orangered;\n    border: 1px solid black;\n    border-radius: 24px;\n}\n\n/* project dialog */\n\n#project-form {\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n    padding: 20px;\n    \n}\n\n#project-dialog{\n   height: 240px;\n   margin-top: 190px;\n   margin-left: 550px;\n   border: 2px solid black;\n   border-radius: 10px;\n   width: 600px;\n   background-color: coral;\n}\n\n#project-dialog h1{\n    text-align: center;\n}\n\n#project-form div{\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    width: 550px;\n    margin-left: 25px;\n}\n\n#project-form input {\n    width: 400px;\n    height: 30px;\n    border-radius: 5px;\n    border: 1px solid black;\n}\n#project-form select {\n    width: 200px;\n    height: 30px;\n    border-radius: 5px;\n    border: 1px solid black;\n}\n\n#project-form label {\n    font-weight: bold;\n    width: 100px;\n}\n\n\n/* todo dialog */\n\n#todo-form {\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n    padding: 20px;\n    \n} \n\n\n#todo-dialog{\n   height: 400px;\n   margin-top: 190px;\n   margin-left: 550px;\n   border: 2px solid black;\n   border-radius: 10px;\n   width: 600px;\n   background-color: coral;\n}\n\n#todo-dialog h1{\n    text-align: center;\n}\n\n#todo-form div{\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    width: 550px;\n    margin-left: 25px;\n}\n\n#todo-form input {\n    width: 400px;\n    height: 30px;\n    border-radius: 5px;\n    border: 1px solid black;\n}\n#todo-form select {\n    width: 200px;\n    height: 30px;\n    border-radius: 5px;\n    border: 1px solid black;\n}\n\n#todo-form label {\n    font-weight: bold;\n    width: 100px;\n}\n\n\n    \n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-project.js */ \"./src/todo-project.js\");\n/* harmony import */ var _todo_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-item.js */ \"./src/todo-item.js\");\n\n\n\n\nlet selectedProject = null;\nconst project_dialog = document.getElementById(\"project-dialog\");\nconst projectBtn = document.getElementById(\"project-button\");\nconst project_form = document.getElementById(\"project-form\");\nconst project_cancelBtn = document.getElementById(\"cancel-btn\");\nconst taskList = document.getElementById(\"task-list\");\nconst sidebarContent = document.querySelector(\".sidebar-content\");\n\nconst saveProjects = () => {\n    localStorage.setItem(\"projects\", JSON.stringify(_todo_project_js__WEBPACK_IMPORTED_MODULE_0__.projects));\n};\n\nconst initProjects = () => {\n    const saved = localStorage.getItem(\"projects\");\n\n    if (saved) {\n        const parsed = JSON.parse(saved);\n\n        parsed.forEach(p => {\n            const project = new _todo_project_js__WEBPACK_IMPORTED_MODULE_0__.Project(p.title);\n\n            p.todos.forEach(t => {\n                const todo = new _todo_item_js__WEBPACK_IMPORTED_MODULE_1__.TodoItem(\n                    t.title,\n                    t.description,\n                    t.dueDate,\n                    t.priority\n                );\n                project.todos.push(todo);\n            });\n\n            (0,_todo_project_js__WEBPACK_IMPORTED_MODULE_0__.addProject)(project);\n        });\n\n    } else {\n        const personal = new _todo_project_js__WEBPACK_IMPORTED_MODULE_0__.Project(\"Personal\");\n        const work = new _todo_project_js__WEBPACK_IMPORTED_MODULE_0__.Project(\"Work\");\n\n        (0,_todo_project_js__WEBPACK_IMPORTED_MODULE_0__.addProject)(personal);\n        (0,_todo_project_js__WEBPACK_IMPORTED_MODULE_0__.addProject)(work);\n        saveProjects();\n    }\n\n    // render everything\n    _todo_project_js__WEBPACK_IMPORTED_MODULE_0__.projects.forEach(project => renderProject(project));\n\n    // select first project\n    selectedProject = _todo_project_js__WEBPACK_IMPORTED_MODULE_0__.projects[0];\n\n    const firstProjectDiv = sidebarContent.firstChild;\n    if (firstProjectDiv) {\n        firstProjectDiv.classList.add(\"active\");\n    }\n\n    renderTodos();\n};\n\n\n\nconst renderProject = (project) => {\n    const div = document.createElement(\"div\");\n    const h3 = document.createElement(\"h3\");\n    const del = document.createElement(\"button\");\n    div.addEventListener(\"click\", () => {\n    selectedProject = project;\n\n    document.querySelectorAll(\".sidebar-content div\")\n        .forEach(d => d.classList.remove(\"active\"));\n\n    div.classList.add(\"active\");\n\n    renderTodos();\n});\n\n    del.textContent = \"Del\";\n\n    del.addEventListener(\"click\", () => {\n    const index = _todo_project_js__WEBPACK_IMPORTED_MODULE_0__.projects.indexOf(project);\n    if (index > -1) {\n        _todo_project_js__WEBPACK_IMPORTED_MODULE_0__.projects.splice(index, 1);\n    }\n\n    if (selectedProject === project) {\n        selectedProject = null;\n        taskList.innerHTML = \"\";\n    }\n    saveProjects();\n    sidebarContent.removeChild(div);\n});\n\n    h3.textContent = project.title;\n    div.appendChild(h3);\n    div.appendChild(del);\n    sidebarContent.appendChild(div);\n};\n\nconst renderTodos = () => {\n    taskList.innerHTML = \"\";\n\n    if (!selectedProject) return;\n\n    selectedProject.todos.forEach(todo => renderTodo(todo));\n};\n\nconst renderTodo = (todo) => {\n    const div = document.createElement(\"div\");\n    const h3 = document.createElement(\"h3\");\n    const del = document.createElement(\"button\");\n    const description = document.createElement(\"p\");\n    const dueDate = document.createElement(\"p\");\n    const priority = document.createElement(\"p\");\n\n    description.textContent = todo.description;\n    dueDate.textContent = todo.dueDate;\n    priority.textContent = todo.priority;\n\n    del.textContent = \"Del\";\n\n    del.addEventListener(\"click\", () => {\n        const index = selectedProject.todos.indexOf(todo);\n        if (index > -1) {\n            selectedProject.todos.splice(index, 1);\n        }\n\n        saveProjects();\n        renderTodos();\n    });\n\n    h3.textContent = todo.title;\n\n    div.appendChild(h3);\n    div.appendChild(description);\n    div.appendChild(dueDate);\n    div.appendChild(priority);\n    div.appendChild(del);\n\n    taskList.appendChild(div);\n};\n\n\nprojectBtn.addEventListener(\"click\", () => {\n    project_dialog.showModal();\n});\n\n// when form submitted, USE the Project class   \nproject_form.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    const title = document.getElementById(\"project-title\").value;\n    const newProject = new _todo_project_js__WEBPACK_IMPORTED_MODULE_0__.Project(title);\n    (0,_todo_project_js__WEBPACK_IMPORTED_MODULE_0__.addProject)(newProject);\n    saveProjects();\n    renderProject(newProject);\n    project_dialog.close();\n    project_form.reset();\n});\n\nproject_cancelBtn.addEventListener(\"click\", () => {\n    project_dialog.close();\n    project_form.reset();\n});\n\nconst todo_dialog = document.getElementById(\"todo-dialog\");\nconst todo_btn = document.getElementById(\"todo-button\");\nconst todo_form = document.getElementById(\"todo-form\");\nconst todo_cancelBtn = document.getElementById(\"cancel-todo-btn\");\n\ntodo_btn.addEventListener(\"click\", () => {\n    todo_dialog.showModal();\n});\n\ntodo_form.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n\n      if (!selectedProject) {\n        alert(\"Select a project first\");\n        return;\n    }\n\n    const title = document.getElementById(\"todo-title\").value;\n    const description = document.getElementById(\"todo-description\").value;\n    const dueDate = document.getElementById(\"todo-due-date\").value;\n    const priority = document.getElementById(\"todo-priority\").value;\n    const newTodo = new _todo_item_js__WEBPACK_IMPORTED_MODULE_1__.TodoItem(title, description, dueDate, priority);\n    selectedProject.todos.push(newTodo);\n    saveProjects();\n    renderTodos();\n    todo_dialog.close();\n    todo_form.reset();\n});\n\ntodo_cancelBtn.addEventListener(\"click\", () => {\n    todo_dialog.close();\n    todo_form.reset();\n});\n     \n\ninitProjects();\n\n//# sourceURL=webpack://todo-list/./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _todo_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-project.js */ \"./src/todo-project.js\");\n/* harmony import */ var _todo_item_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-item.js */ \"./src/todo-item.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n// src/index.js\n\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?\n}");

/***/ },

/***/ "./src/todo-item.js"
/*!**************************!*\
  !*** ./src/todo-item.js ***!
  \**************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TodoItem: () => (/* binding */ TodoItem)\n/* harmony export */ });\n\n\nclass TodoItem {\n    constructor(title, description, dueDate, priority) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n    }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/todo-item.js?\n}");

/***/ },

/***/ "./src/todo-project.js"
/*!*****************************!*\
  !*** ./src/todo-project.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   projects: () => (/* binding */ projects)\n/* harmony export */ });\nconst projects = [];\n\nclass Project {\n    constructor(title, todos = []) {\n        this.title = title;\n        this.todos = todos;\n    }\n}   \n\nconst addProject = (project) => {\n    projects.push(project);\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/todo-project.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;