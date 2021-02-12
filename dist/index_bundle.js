/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* GENERAL */\\nhtml body {\\n  margin: 0;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\nbutton > * {\\n  pointer-events: none;\\n}\\n\\n.rotate180 {\\n  transform: rotate(180deg);\\n}\\n\\n#content {\\n  min-height: calc(100vh - 124px);\\n}\\n\\n.warning {\\n  color: red;\\n}\\n\\n/* HEADER */\\n.header {\\n  align-items: center;\\n  background-color: white;\\n  display: flex;\\n  height: 70px;\\n  opacity: 0.85;\\n  padding-left: 40px;\\n  position: sticky;\\n  top: 0;\\n}\\n.header__logo {\\n  cursor: pointer;\\n  font: bold 24px Rubik, sans-serif;\\n  transition: font-size 150ms;\\n}\\n.header__logo:hover {\\n  font-size: 28px;\\n}\\n.header__nav {\\n  margin-left: auto;\\n  display: none;\\n}\\n.header__navbars {\\n  cursor: pointer;\\n  margin-right: 30px;\\n  margin-left: auto;\\n}\\n.header__link {\\n  cursor: pointer;\\n  font: 16px Roboto, sans-serif;\\n  margin-right: 30px;\\n}\\n.header__link:hover {\\n  color: #4f4f4f;\\n}\\n.header__button {\\n  background-color: inherit;\\n  border-radius: 6px;\\n  border: 1px solid rgba(27, 27, 27, 0.4);\\n  box-sizing: border-box;\\n  cursor: pointer;\\n  display: none;\\n  font: 500 16px Roboto, sans-serif;\\n  height: 43px;\\n  margin-right: 40px;\\n  width: 106px;\\n}\\n.header__button:hover {\\n  background-color: #f7f9fb;\\n}\\n.header__button:active {\\n  color: #4f4f4f;\\n}\\n@media all and (min-width: 768px) {\\n  .header__nav {\\n    display: block;\\n  }\\n  .header__button {\\n    display: block;\\n  }\\n  .header__navbars {\\n    display: none;\\n  }\\n}\\n\\n/* FOOTER */\\n.footer {\\n  background-color: #3f3d56;\\n  display: flex;\\n  flex-direction: column;\\n  height: 124px;\\n  padding-left: 40px;\\n}\\n@media all and (min-width: 768px) {\\n  .footer {\\n    align-items: center;\\n    flex-direction: row;\\n  }\\n}\\n@media all and (min-width: 768px) {\\n  .footer div {\\n    margin-left: auto;\\n  }\\n}\\n.footer__copyright {\\n  font: 16px Roboto, sans-serif;\\n  color: #ffffff;\\n  opacity: 0.4;\\n}\\n.footer div:last-child {\\n  margin-right: 21px;\\n}\\n.footer__icon {\\n  cursor: pointer;\\n  margin-right: 19px;\\n}\\n.footer__icon img:hover {\\n  filter: brightness(0.75);\\n}\\n\\n/* ABOUT US */\\n/* FAQ */\\n.about,\\n.faq {\\n  display: flex;\\n  flex-direction: column;\\n}\\n.about__img,\\n.faq__img {\\n  margin: 100px auto 0 auto;\\n}\\n@media all and (max-width: 414px) {\\n  .about__img,\\n.faq__img {\\n    width: 90vw;\\n  }\\n}\\n.about__heading,\\n.faq__heading {\\n  font: 700 64px Roboto, sans-serif;\\n  margin: 60px auto 0 auto;\\n}\\n.about__description,\\n.faq__description {\\n  font: 400 24px Roboto, sans-serif;\\n  line-height: 147.3%;\\n  margin: 30px auto 0 auto;\\n  max-width: 925px;\\n  padding: 0 20px;\\n  text-align: center;\\n}\\n\\n/* CONTACTS */\\n.contacts {\\n  background-color: #f7f9fb;\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 80px;\\n}\\n.contacts__heading {\\n  font: 500 48px Roboto, sans-serif;\\n  margin: 60px auto 0 auto;\\n}\\n.contacts__container {\\n  align-items: center;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  margin-top: 40px;\\n  padding-bottom: 40px;\\n}\\n@media all and (min-width: 768px) {\\n  .contacts__container {\\n    flex-direction: row;\\n    margin-top: 40px;\\n    padding-bottom: 100px;\\n  }\\n}\\n.contacts__item {\\n  height: 56px;\\n  margin-bottom: 20px;\\n  text-align: center;\\n  width: 264px;\\n}\\n@media all and (min-width: 768px) {\\n  .contacts__item {\\n    height: 56px;\\n    text-align: center;\\n    width: 264px;\\n  }\\n}\\n@media all and (min-width: 768px) {\\n  .contacts__delimiter {\\n    background: #c8c8cf;\\n    height: 62px;\\n    margin: 0 68px;\\n    width: 1px;\\n  }\\n}\\n.contacts__caption {\\n  color: #4f4f4f;\\n  font: 14px/20.62px Roboto, sans-serif;\\n  margin: 2px 0;\\n}\\n.contacts__method {\\n  font: 20px/29.46px Roboto, sans-serif;\\n  margin: 3px 0;\\n}\\n\\n/* TEAM */\\n.team {\\n  display: flex;\\n  flex-direction: column;\\n}\\n.team__heading {\\n  font: 500 48px Roboto, sans-serif;\\n  margin: 60px auto 0 auto;\\n}\\n.team__container {\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  margin: 0 auto 60px;\\n  max-width: 1110px;\\n}\\n.team__container div {\\n  height: 260px;\\n  margin: 38px 30px;\\n  text-align: center;\\n  width: 196px;\\n}\\n@media all and (min-width: 768px) {\\n  .team__container {\\n    margin: 0 auto 120px;\\n  }\\n}\\n.team__img {\\n  height: 180px;\\n  width: 180px;\\n}\\n.team__person {\\n  font: 20px Roboto, sans-serif;\\n  margin: 22px 0 8px 0;\\n}\\n.team__role {\\n  color: #828282;\\n  font: 14px/20.62px Roboto, sans-serif;\\n  margin: 2px 0;\\n}\\n\\n/* FAQ */\\n.faq__collapsible {\\n  display: flex;\\n  flex-direction: column;\\n  margin: 30px auto 120px auto;\\n  width: 70vw;\\n}\\n@media all and (min-width: 768px) {\\n  .faq__collapsible {\\n    margin: 30px auto 120px auto;\\n  }\\n}\\n\\n.faq__collbutton {\\n  background-color: #f7f7f8;\\n  border-radius: 6px;\\n  border: none;\\n  display: flex;\\n  margin-bottom: 15px;\\n  font: 400 20px/29.49px Roboto, sans-serif;\\n  justify-content: space-between;\\n  padding: 18px 22px 18px 22px;\\n  text-align: left;\\n}\\n.faq__collbutton:hover {\\n  background: rgba(97, 161, 153, 0.1);\\n}\\n.faq__collbutton:active {\\n  color: rgba(97, 161, 153, 0.15);\\n}\\n.faq__collbutton_open {\\n  background: rgba(97, 161, 153, 0.15);\\n  color: #61a199;\\n}\\n\\n.faq__chevron {\\n  margin-left: 30px;\\n}\\n\\n.faq__answer {\\n  display: none;\\n  font: 400 20px/29.49px Roboto, sans-serif;\\n  margin-bottom: 40px;\\n  max-width: 784px;\\n  padding: 0 40px 0 20px;\\n}\\n.faq__answer_visible {\\n  display: block;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://sf-module21/./src/styles/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://sf-module21/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://sf-module21/./src/styles/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://sf-module21/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/close-24px.svg":
/*!***********************************!*\
  !*** ./src/assets/close-24px.svg ***!
  \***********************************/
/***/ ((module) => {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 24 24\\\"><path d=\\\"M0 0h24v24H0z\\\" fill=\\\"none\\\"></path><path d=\\\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\\\"></path></svg>\"\n\n//# sourceURL=webpack://sf-module21/./src/assets/close-24px.svg?");

/***/ }),

/***/ "./src/assets/menu-24px.svg":
/*!**********************************!*\
  !*** ./src/assets/menu-24px.svg ***!
  \**********************************/
/***/ ((module) => {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 24 24\\\"><path d=\\\"M0 0h24v24H0z\\\" fill=\\\"none\\\"></path><path d=\\\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\\\"></path></svg>\"\n\n//# sourceURL=webpack://sf-module21/./src/assets/menu-24px.svg?");

/***/ }),

/***/ "./src/js/about.js":
/*!*************************!*\
  !*** ./src/js/about.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_close_24px_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/close-24px.svg */ \"./src/assets/close-24px.svg\");\n/* harmony import */ var _assets_close_24px_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_close_24px_svg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_menu_24px_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/menu-24px.svg */ \"./src/assets/menu-24px.svg\");\n/* harmony import */ var _assets_menu_24px_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_menu_24px_svg__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n// ABOUT.HTML:\n\nconst navbars = document.querySelector(\".header__navbars\");\nconst navbarsIcon = document.querySelector(\"#navbarsIcon\");\n\nconst toggleNavbar = function toggleResponsiveNavbarWhenClicking() {\n    navbars.classList.toggle(\"navbars-visible\");\n    if (navbars.classList.contains(\"navbars-visible\")) {\n        navbarsIcon.src = (_assets_close_24px_svg__WEBPACK_IMPORTED_MODULE_0___default());\n    } else {\n        navbarsIcon.src = (_assets_menu_24px_svg__WEBPACK_IMPORTED_MODULE_1___default());\n    }\n};\n\nnavbars.addEventListener(\"click\", toggleNavbar);\n\n\n//# sourceURL=webpack://sf-module21/./src/js/about.js?");

/***/ }),

/***/ "./src/js/faq.js":
/*!***********************!*\
  !*** ./src/js/faq.js ***!
  \***********************/
/***/ (() => {

eval("// FAQ.HTML:\n\nconst collbuttons = document.querySelectorAll(\".faq__collbutton\");\n\nconst toggleCollapsible = function toggleCollapsibleElementsWhenCLicking(\n    event\n) {\n    const answer = event.target.nextElementSibling;\n    event.target.classList.toggle(\"faq__collbutton_open\");\n    event.target.querySelector(\"img\").classList.toggle(\"rotate180\");\n    answer.classList.toggle(\"faq__answer_visible\");\n};\n\ncollbuttons.forEach((collbutton) => {\n    collbutton.addEventListener(\"click\", toggleCollapsible);\n});\n\n\n//# sourceURL=webpack://sf-module21/./src/js/faq.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.js */ \"./src/js/about.js\");\n/* harmony import */ var _faq_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faq.js */ \"./src/js/faq.js\");\n/* harmony import */ var _faq_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_faq_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/styles.scss */ \"./src/styles/styles.scss\");\n\n\n\n\n\n//# sourceURL=webpack://sf-module21/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;