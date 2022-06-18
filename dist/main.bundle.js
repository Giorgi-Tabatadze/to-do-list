"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".todo {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.taskform {\n  position: absolute;\n  top: 200px;\n  left: 400px;\n  display: flex;\n  align-items: center;\n  background-color: gray;\n  color: white;\n}\n\n.todo-completed {\n  text-decoration: line-through;\n  color: rgba(0, 0, 0, 0.563);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,6BAA6B;EAC7B,2BAA2B;AAC7B","sourcesContent":[".todo {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.taskform {\n  position: absolute;\n  top: 200px;\n  left: 400px;\n  display: flex;\n  align-items: center;\n  background-color: gray;\n  color: white;\n}\n\n.todo-completed {\n  text-decoration: line-through;\n  color: rgba(0, 0, 0, 0.563);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dommanagment/mainlist.js":
/*!**************************************!*\
  !*** ./src/dommanagment/mainlist.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utility_pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/pubsub */ "./src/utility/pubsub.js");
/* harmony import */ var _utility_removeallchildnodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/removeallchildnodes */ "./src/utility/removeallchildnodes.js");
/* harmony import */ var _tododata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tododata */ "./src/tododata.js");
/* harmony import */ var _taskform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskform */ "./src/dommanagment/taskform.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui */ "./src/dommanagment/ui.js");






const mainList = {
  parent: null,
  detailsRendered: false,

  renderContainer: (container) => {    
    const listContainer = document.createElement("div");
    listContainer.setAttribute("id", "list-container");

    container.appendChild(listContainer);
    mainList.parent = listContainer;

    _utility_pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe("todoAdded", mainList.renderList);
    _utility_pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe("todoAdded", mainList.removeDetails);
    _utility_pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe("todoEdited", mainList.renderList);
    _utility_pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe("todoEdited", mainList.removeDetails);

  },

  renderList: (list) => {
    (0,_utility_removeallchildnodes__WEBPACK_IMPORTED_MODULE_1__["default"])(mainList.parent);

    const listUl = document.createElement("ul");
    mainList.parent.appendChild(listUl);

    

    list.forEach(todo => {

      const handleEdit = (e) => {
        console.log(todo);
        const todoInfo = {
          index: list.indexOf(todo),
          todoObj: todo
        }
        _ui__WEBPACK_IMPORTED_MODULE_4__["default"].addForm(todoInfo);
      };

      const handleDetails = (e) =>{
        mainList.renderDetails(todo);
      }

      const todoLi = document.createElement("li");
      todoLi.classList.add("todo")
      todoLi.dataset.index = list.indexOf(todo);
      if (todo.completed) {
        console.log("completed")
        todoLi.classList.add("todo-completed")
      };

      const check = document.createElement("input");
      check.classList.add("todo-check")
      check.setAttribute("type", "checkbox");
      check.checked = todo.completed;
      check.addEventListener("change", mainList.handleCheck);
      todoLi.appendChild(check)

      const title = document.createElement("p");
      title.classList.add("todo-title");
      title.innerText = todo.title;
      todoLi.appendChild(title)

      const priority = document.createElement("p");
      priority.classList.add("todo-priority");
      priority.innerText = `Priority: ${todo.priority}`
      todoLi.appendChild(priority);

      const detailsBtn = document.createElement("button");
      detailsBtn.classList.add("todo-details");
      detailsBtn.innerText = "Details";
      todoLi.appendChild(detailsBtn);
      detailsBtn.addEventListener("click", handleDetails);

      const date = document.createElement("p");
      date.classList.add("todo-date");
      date.innerText = todo.date;
      todoLi.appendChild(date);

      const editBtn = document.createElement("button")
      editBtn.classList.add("todo-edit");
      editBtn.innerText = "Edit";
      todoLi.appendChild(editBtn);
      editBtn.addEventListener("click", handleEdit)


      listUl.appendChild(todoLi);

    });
  },

  handleCheck: (e) => {
    console.log("received")
    const info = {
      index : e.target.parentNode.dataset.index,
      value: e.target.checked,
    }

    _utility_pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("checkChanged", info)
  },

  renderDetails: (todo) => {
    if (!mainList.detailsRendered){
    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("details-container")
    if (todo.completed){
      detailsContainer.classList.add("completed")
    };

    const completed = document.createElement("p");


    if (todo.completed) {
      completed.innerText = "Completed"
    }
    else {
      completed.innerText = "Not Completed"
    }
    detailsContainer.appendChild(completed)

    const title = document.createElement("p");
    title.classList.add("details-title");
    title.innerText = `Title: ${todo.title}`;
    detailsContainer.appendChild(title);

    const description = document.createElement("p");
    description.classList.add("details-text");
    description.innerText = `Description: ${todo.description}`;
    detailsContainer.appendChild(description);

    const priority = document.createElement("p");
    priority.classList.add("details-priority"); 
    priority.innerText = `Priority: ${todo.priority}`
    detailsContainer.appendChild(priority);

    const date = document.createElement("p");
    date.classList.add("details-date");
    date.innerText = `Date: ${todo.date}`;
    detailsContainer.appendChild(date);

    const cancelBtn = document.createElement("button");
    cancelBtn.innerText = "X";
    cancelBtn.addEventListener("click", () => {
      mainList.removeDetails(detailsContainer);
      console.log("Details removed");
    })
    detailsContainer.appendChild(cancelBtn)
    

    mainList.parent.appendChild(detailsContainer);

    mainList.detailsRendered = true;
  }
  },

  removeDetails: (details) =>{
    if (Array.isArray(details)){
      mainList.detailsRendered = false;
      return
    };
    mainList.parent.removeChild(details);
    mainList.detailsRendered = false;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainList);

/***/ }),

/***/ "./src/dommanagment/sidebar.js":
/*!*************************************!*\
  !*** ./src/dommanagment/sidebar.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utility_pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/pubsub */ "./src/utility/pubsub.js");
/* harmony import */ var _tododata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tododata */ "./src/tododata.js");
/* harmony import */ var _utility_removeallchildnodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility/removeallchildnodes */ "./src/utility/removeallchildnodes.js");




const sidebar = {
  parent : null,
  projectsParent: null,
  formGenerated: false,

  render: (container) => {
    sidebar.parent = container;

    sidebar.projectsParent = document.createElement("div");

    container.appendChild(sidebar.projectsParent)

    sidebar.renderProjects(_tododata__WEBPACK_IMPORTED_MODULE_1__["default"].projects);


    _utility_pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe("projectAdded", sidebar.renderProjects)
    
  },

  renderProjects: (projects) => {
    (0,_utility_removeallchildnodes__WEBPACK_IMPORTED_MODULE_2__["default"])(sidebar.projectsParent);

    const navUl = document.createElement("ul");
    sidebar.projectsParent.appendChild(navUl);

    projects.forEach(project => {
      const li = document.createElement("li")
      li.innerText = project;
      navUl.appendChild(li);
    });

    const addProjectBtn = document.createElement("button");
    addProjectBtn.innerText = "+ New Project";
    addProjectBtn.addEventListener("click", sidebar.renderForm);

    navUl.appendChild(addProjectBtn)

  },

  renderForm: () => {
    if (!sidebar.formGenerated) {
      const projectAddContainter = document.createElement("div");
      sidebar.parent.appendChild(projectAddContainter);

      const projectName = document.createElement("input")
      projectName.setAttribute("type", "text");
      projectName.setAttribute("id", "project-input");
      const projectNameLabel = document.createElement("label");
      projectNameLabel.setAttribute("id", "project-input");

      const submit = document.createElement("button");
      submit.innerText = "submit";
      submit.addEventListener("click", () => {
        if(projectName.value.length !== 0){
          _utility_pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("projectAddRequested", projectName.value);
          sidebar.removeForm(projectAddContainter);
        }
      })

      const cancelBtn = document.createElement("button");
      cancelBtn.innerText = "X";
      cancelBtn.addEventListener("click", () => {
        sidebar.removeForm(projectAddContainter);
      })

      projectAddContainter.appendChild(projectNameLabel);
      projectAddContainter.appendChild(projectName);
      projectAddContainter.appendChild(submit);
      projectAddContainter.appendChild(cancelBtn);
    }
    sidebar.formGenerated = true;
  },

  removeForm: (form) => {
    sidebar.parent.removeChild(form);
    sidebar.formGenerated = false;
  },

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebar);

/***/ }),

/***/ "./src/dommanagment/taskform.js":
/*!**************************************!*\
  !*** ./src/dommanagment/taskform.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utility_pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/pubsub */ "./src/utility/pubsub.js");
/* harmony import */ var _tododata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tododata */ "./src/tododata.js");
/* harmony import */ var _utility_objectfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility/objectfactory */ "./src/utility/objectfactory.js");




const addTaskForm = {
  render: (container, prefilledInfo) => {
    const form = document.createElement("form");
    form.classList.add("taskform");

    //title
    const titleDiv = document.createElement("div");

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "title");

    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("id", "title");
    titleLabel.innerText = "Title: "

    titleDiv.appendChild(titleLabel);
    titleDiv.appendChild(titleInput);

    //description 
    const descriptionDiv = document.createElement("div");

    const descriptionInput = document.createElement("textarea");
    descriptionInput.setAttribute("id", "description");

    const descriptionLabel = document.createElement("label");
    descriptionLabel.setAttribute("id", "description");
    descriptionLabel.innerText = "description: "
    
    descriptionDiv.appendChild(descriptionLabel);
    descriptionDiv.appendChild(descriptionInput);

    //date 
    const dateDiv = document.createElement("div");

    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("id", "date");

    const dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "date");
    dateLabel.innerText = "date: "

    dateDiv.appendChild(dateLabel);
    dateDiv.appendChild(dateInput);

    //priority 
    const priorityDiv = document.createElement("div");

    const prioritySelect = document.createElement("select");
    prioritySelect.setAttribute("id", "priority")
    const priorityLabel = document.createElement("label")
    priorityLabel.setAttribute("id", "priority")

    const lowPriorityOption = document.createElement("option");
    const mediumPriorityOption = document.createElement("option");
    const highPriorityOption = document.createElement("option");

    lowPriorityOption.setAttribute("value", "low");
    mediumPriorityOption.setAttribute("value", "medium");
    highPriorityOption.setAttribute("value", "high");

    lowPriorityOption.innerText = "Low"
    mediumPriorityOption.innerText = "Medium"
    highPriorityOption.innerText = "High"

    prioritySelect.appendChild(lowPriorityOption);
    prioritySelect.appendChild(mediumPriorityOption);
    prioritySelect.appendChild(highPriorityOption);
    priorityDiv.appendChild(priorityLabel);
    priorityDiv.appendChild(prioritySelect);

    //submit

    const submitBtn = document.createElement("button");
    submitBtn.innerText = "Submit";

    //cancel
    const cancelBtn = document.createElement("button")
    cancelBtn.setAttribute("type", "button");
    cancelBtn.innerText = "X"
    cancelBtn.addEventListener("click", handleCancel);
    

    //append to form
    form.appendChild(titleDiv);
    form.appendChild(descriptionDiv);
    form.appendChild(dateDiv);
    form.appendChild(priorityDiv);
    form.appendChild(submitBtn);
    form.appendChild(cancelBtn);



    function handleSubmit(event) { 
      event.preventDefault(); 
      _utility_pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("formUsed", form)

      const title = titleInput.value;
      const description = descriptionInput.value;
      const date = dateInput.value;
      const priority = prioritySelect.value;

      const todo = _utility_objectfactory__WEBPACK_IMPORTED_MODULE_2__["default"].todo(title, description, date, priority);
      _tododata__WEBPACK_IMPORTED_MODULE_1__["default"].addTodo(todo);

    };

    function handleEdit(event) {
      event.preventDefault(); 
      _utility_pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("formUsed", form);
      console.log(prefilledInfo);

      prefilledInfo.todoObj.title = titleInput.value;
      prefilledInfo.todoObj.description = descriptionInput.value;
      prefilledInfo.todoObj.date = dateInput.value;
      prefilledInfo.todoObj.priority = prioritySelect.value;

      _utility_pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("todoEditRequested", prefilledInfo)
    }

    function handleCancel () {
      _utility_pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("formUsed", form);
    }

    if (prefilledInfo){
      titleInput.value = prefilledInfo.todoObj.title;
      descriptionInput.value = prefilledInfo.todoObj.description;
      dateInput.value = prefilledInfo.todoObj.date;
      prioritySelect.value = prefilledInfo.todoObj.priority;

      form.addEventListener("submit", handleEdit);
    }
    else {
    form.addEventListener('submit', handleSubmit);
    };

    container.appendChild(form);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTaskForm);

/***/ }),

/***/ "./src/dommanagment/ui.js":
/*!********************************!*\
  !*** ./src/dommanagment/ui.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utility_removeallchildnodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/removeallchildnodes */ "./src/utility/removeallchildnodes.js");
/* harmony import */ var _utility_pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/pubsub */ "./src/utility/pubsub.js");
/* harmony import */ var _taskform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskform */ "./src/dommanagment/taskform.js");




const topUi = {
  //cache container
  parent : null,
  formGenerated: false,

  render: (container) => {
    topUi.parent = container;

    const addTaskBtn = document.createElement("button");
    addTaskBtn.innerText = "+ Add Task"
    container.appendChild(addTaskBtn);
    

    addTaskBtn.addEventListener("click", topUi.addForm);

    _utility_pubsub__WEBPACK_IMPORTED_MODULE_1__.pubsub.subscribe("formUsed", topUi.removeForm);
  },

  addForm: (prefilled) => {
  if (!topUi.formGenerated) {
    console.log(prefilled);
    if (prefilled.type !== "click"){
    _taskform__WEBPACK_IMPORTED_MODULE_2__["default"].render(topUi.parent, prefilled);
    }
    else{
    _taskform__WEBPACK_IMPORTED_MODULE_2__["default"].render(topUi.parent, false);
    };
    topUi.formGenerated = true;
   }
  },

  removeForm: (form) => {
    topUi.parent.removeChild(form);
    topUi.formGenerated = false;
  },

  test: (text) => {
    text.forEach(element => {
      console.log(element)
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (topUi);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _tododata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tododata */ "./src/tododata.js");
/* harmony import */ var _dommanagment_mainlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dommanagment/mainlist */ "./src/dommanagment/mainlist.js");
/* harmony import */ var _dommanagment_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dommanagment/ui */ "./src/dommanagment/ui.js");
/* harmony import */ var _dommanagment_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dommanagment/sidebar */ "./src/dommanagment/sidebar.js");








const domStuff = (() => {
  const body = document.querySelector("body");
  const content = document.createElement("div");
  content.setAttribute("id", "content");
  body.appendChild(content)

  const header = document.createElement("header");
  const main = document.createElement("main");
  const aside = document.createElement("aside");
  content.appendChild(aside);
  content.appendChild(header);
  content.appendChild(main);

  _dommanagment_ui__WEBPACK_IMPORTED_MODULE_3__["default"].render(header);
  _dommanagment_mainlist__WEBPACK_IMPORTED_MODULE_2__["default"].renderContainer(main);
  _dommanagment_sidebar__WEBPACK_IMPORTED_MODULE_4__["default"].render(aside);
})();






/***/ }),

/***/ "./src/tododata.js":
/*!*************************!*\
  !*** ./src/tododata.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utility_pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility/pubsub */ "./src/utility/pubsub.js");


const todoData = {
  list: [],
  projects: ["general",],

  addTodo: (toDo) => {
    todoData.list.push(toDo);
    _utility_pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("todoAdded", todoData.list);
  },

  getTodo: () => {
    return list;
  },

  checkUncheck: (info) => {
    console.log(todoData.list[info[0]])
    todoData.list[info.index].completed = info.value;
    _utility_pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("todoEdited", todoData.list);
  },

  editTodo: (info) => {
    todoData[info.index] = info.todoObj;
    _utility_pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("todoEdited", todoData.list);
  },

  addProject: (project) => {
    console.log(project);
    todoData.projects.push(project);
    _utility_pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("projectAdded", todoData.projects);
  }

};

_utility_pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe("checkChanged", todoData.checkUncheck);
_utility_pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe("todoEditRequested", todoData.editTodo);
_utility_pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe("projectAddRequested", todoData.addProject);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoData);

/***/ }),

/***/ "./src/utility/objectfactory.js":
/*!**************************************!*\
  !*** ./src/utility/objectfactory.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createObject = {
  todo: (title, description, date, priority) => {
    let completed = false;
    let project = "general";
    return{title, description, date, priority, completed, project};
  },
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createObject);

/***/ }),

/***/ "./src/utility/pubsub.js":
/*!*******************************!*\
  !*** ./src/utility/pubsub.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pubsub": () => (/* binding */ pubsub)
/* harmony export */ });
const pubsub = {
  events: {},
  subscribe: function(evName, fn) {
    console.log(`PUBSUB: someone just subscribed to know about ${evName}`);
    //add an event with a name as new or to existing list
    this.events[evName] = this.events[evName] || [];
    this.events[evName].push(fn);
  },
  unsubscribe: function(evName, fn) {
    console.log(`PUBSUB: someone just UNsubscribed from ${evName}`);
    //remove an event function by name
    if (this.events[evName]) {
      this.events[evName] = this.events[evName].filter(f => f !== fn);
    }
  },
  publish: function(evName, data) {
    console.log(`PUBSUB: Making an broadcast about ${evName} with ${data}`);
    //emit|publish|announce the event to anyone who is subscribed
    if (this.events[evName]) {
      this.events[evName].forEach(f => {
        f(data);
      });
    }
  }
};

/***/ }),

/***/ "./src/utility/removeallchildnodes.js":
/*!********************************************!*\
  !*** ./src/utility/removeallchildnodes.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeAllChildNodes);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLElBQUksMkRBQWM7QUFDbEIsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJEQUFjO0FBQ2xCLEdBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUksMkRBQWM7QUFDbEIsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJEQUFjO0FBQ2xCOztBQUVBOztBQUVBLDZEQUFnQjtBQUNoQiw2REFBZ0I7QUFDaEIsNkRBQWdCOztBQUVoQixpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7OztBQ3RDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsR0FBRztBQUNIOztBQUVBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7O0FDUnBCO0FBQ1AsWUFBWTtBQUNaO0FBQ0EsaUVBQWlFLE9BQU87QUFDeEU7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsMERBQTBELE9BQU87QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxxREFBcUQsUUFBUSxPQUFPLEtBQUs7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLG1CQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kb21tYW5hZ21lbnQvbWFpbmxpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kb21tYW5hZ21lbnQvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RvbW1hbmFnbWVudC90YXNrZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RvbW1hbmFnbWVudC91aS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kb2RhdGEuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91dGlsaXR5L29iamVjdGZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91dGlsaXR5L3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3V0aWxpdHkvcmVtb3ZlYWxsY2hpbGRub2Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi50b2RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFza2Zvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyMDBweDtcXG4gIGxlZnQ6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kby1jb21wbGV0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU2Myk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsMkJBQTJCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50b2RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFza2Zvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyMDBweDtcXG4gIGxlZnQ6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kby1jb21wbGV0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU2Myk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHVic3ViIH0gZnJvbSBcIi4uL3V0aWxpdHkvcHVic3ViXCI7XG5pbXBvcnQgcmVtb3ZlQWxsQ2hpbGROb2RlcyBmcm9tIFwiLi4vdXRpbGl0eS9yZW1vdmVhbGxjaGlsZG5vZGVzXCI7XG5pbXBvcnQgdG9kb0RhdGEgZnJvbSBcIi4uL3RvZG9kYXRhXCI7XG5pbXBvcnQgYWRkVGFza0Zvcm0gZnJvbSBcIi4vdGFza2Zvcm1cIjtcbmltcG9ydCB0b3BVaSBmcm9tIFwiLi91aVwiO1xuXG5jb25zdCBtYWluTGlzdCA9IHtcbiAgcGFyZW50OiBudWxsLFxuICBkZXRhaWxzUmVuZGVyZWQ6IGZhbHNlLFxuXG4gIHJlbmRlckNvbnRhaW5lcjogKGNvbnRhaW5lcikgPT4geyAgICBcbiAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsaXN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGlzdC1jb250YWluZXJcIik7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XG4gICAgbWFpbkxpc3QucGFyZW50ID0gbGlzdENvbnRhaW5lcjtcblxuICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJ0b2RvQWRkZWRcIiwgbWFpbkxpc3QucmVuZGVyTGlzdCk7XG4gICAgcHVic3ViLnN1YnNjcmliZShcInRvZG9BZGRlZFwiLCBtYWluTGlzdC5yZW1vdmVEZXRhaWxzKTtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKFwidG9kb0VkaXRlZFwiLCBtYWluTGlzdC5yZW5kZXJMaXN0KTtcbiAgICBwdWJzdWIuc3Vic2NyaWJlKFwidG9kb0VkaXRlZFwiLCBtYWluTGlzdC5yZW1vdmVEZXRhaWxzKTtcblxuICB9LFxuXG4gIHJlbmRlckxpc3Q6IChsaXN0KSA9PiB7XG4gICAgcmVtb3ZlQWxsQ2hpbGROb2RlcyhtYWluTGlzdC5wYXJlbnQpO1xuXG4gICAgY29uc3QgbGlzdFVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIG1haW5MaXN0LnBhcmVudC5hcHBlbmRDaGlsZChsaXN0VWwpO1xuXG4gICAgXG5cbiAgICBsaXN0LmZvckVhY2godG9kbyA9PiB7XG5cbiAgICAgIGNvbnN0IGhhbmRsZUVkaXQgPSAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh0b2RvKTtcbiAgICAgICAgY29uc3QgdG9kb0luZm8gPSB7XG4gICAgICAgICAgaW5kZXg6IGxpc3QuaW5kZXhPZih0b2RvKSxcbiAgICAgICAgICB0b2RvT2JqOiB0b2RvXG4gICAgICAgIH1cbiAgICAgICAgdG9wVWkuYWRkRm9ybSh0b2RvSW5mbyk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBoYW5kbGVEZXRhaWxzID0gKGUpID0+e1xuICAgICAgICBtYWluTGlzdC5yZW5kZXJEZXRhaWxzKHRvZG8pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0b2RvTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICB0b2RvTGkuY2xhc3NMaXN0LmFkZChcInRvZG9cIilcbiAgICAgIHRvZG9MaS5kYXRhc2V0LmluZGV4ID0gbGlzdC5pbmRleE9mKHRvZG8pO1xuICAgICAgaWYgKHRvZG8uY29tcGxldGVkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29tcGxldGVkXCIpXG4gICAgICAgIHRvZG9MaS5jbGFzc0xpc3QuYWRkKFwidG9kby1jb21wbGV0ZWRcIilcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgY2hlY2suY2xhc3NMaXN0LmFkZChcInRvZG8tY2hlY2tcIilcbiAgICAgIGNoZWNrLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgIGNoZWNrLmNoZWNrZWQgPSB0b2RvLmNvbXBsZXRlZDtcbiAgICAgIGNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgbWFpbkxpc3QuaGFuZGxlQ2hlY2spO1xuICAgICAgdG9kb0xpLmFwcGVuZENoaWxkKGNoZWNrKVxuXG4gICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRvZG8tdGl0bGVcIik7XG4gICAgICB0aXRsZS5pbm5lclRleHQgPSB0b2RvLnRpdGxlO1xuICAgICAgdG9kb0xpLmFwcGVuZENoaWxkKHRpdGxlKVxuXG4gICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRvZG8tcHJpb3JpdHlcIik7XG4gICAgICBwcmlvcml0eS5pbm5lclRleHQgPSBgUHJpb3JpdHk6ICR7dG9kby5wcmlvcml0eX1gXG4gICAgICB0b2RvTGkuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gICAgICBjb25zdCBkZXRhaWxzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGRldGFpbHNCdG4uY2xhc3NMaXN0LmFkZChcInRvZG8tZGV0YWlsc1wiKTtcbiAgICAgIGRldGFpbHNCdG4uaW5uZXJUZXh0ID0gXCJEZXRhaWxzXCI7XG4gICAgICB0b2RvTGkuYXBwZW5kQ2hpbGQoZGV0YWlsc0J0bik7XG4gICAgICBkZXRhaWxzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVEZXRhaWxzKTtcblxuICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1kYXRlXCIpO1xuICAgICAgZGF0ZS5pbm5lclRleHQgPSB0b2RvLmRhdGU7XG4gICAgICB0b2RvTGkuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWVkaXRcIik7XG4gICAgICBlZGl0QnRuLmlubmVyVGV4dCA9IFwiRWRpdFwiO1xuICAgICAgdG9kb0xpLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRWRpdClcblxuXG4gICAgICBsaXN0VWwuYXBwZW5kQ2hpbGQodG9kb0xpKTtcblxuICAgIH0pO1xuICB9LFxuXG4gIGhhbmRsZUNoZWNrOiAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwicmVjZWl2ZWRcIilcbiAgICBjb25zdCBpbmZvID0ge1xuICAgICAgaW5kZXggOiBlLnRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQuaW5kZXgsXG4gICAgICB2YWx1ZTogZS50YXJnZXQuY2hlY2tlZCxcbiAgICB9XG5cbiAgICBwdWJzdWIucHVibGlzaChcImNoZWNrQ2hhbmdlZFwiLCBpbmZvKVxuICB9LFxuXG4gIHJlbmRlckRldGFpbHM6ICh0b2RvKSA9PiB7XG4gICAgaWYgKCFtYWluTGlzdC5kZXRhaWxzUmVuZGVyZWQpe1xuICAgIGNvbnN0IGRldGFpbHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRldGFpbHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRldGFpbHMtY29udGFpbmVyXCIpXG4gICAgaWYgKHRvZG8uY29tcGxldGVkKXtcbiAgICAgIGRldGFpbHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKVxuICAgIH07XG5cbiAgICBjb25zdCBjb21wbGV0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuXG4gICAgaWYgKHRvZG8uY29tcGxldGVkKSB7XG4gICAgICBjb21wbGV0ZWQuaW5uZXJUZXh0ID0gXCJDb21wbGV0ZWRcIlxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbXBsZXRlZC5pbm5lclRleHQgPSBcIk5vdCBDb21wbGV0ZWRcIlxuICAgIH1cbiAgICBkZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXBsZXRlZClcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcImRldGFpbHMtdGl0bGVcIik7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gYFRpdGxlOiAke3RvZG8udGl0bGV9YDtcbiAgICBkZXRhaWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRldGFpbHMtdGV4dFwiKTtcbiAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBgRGVzY3JpcHRpb246ICR7dG9kby5kZXNjcmlwdGlvbn1gO1xuICAgIGRldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiZGV0YWlscy1wcmlvcml0eVwiKTsgXG4gICAgcHJpb3JpdHkuaW5uZXJUZXh0ID0gYFByaW9yaXR5OiAke3RvZG8ucHJpb3JpdHl9YFxuICAgIGRldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRhdGUuY2xhc3NMaXN0LmFkZChcImRldGFpbHMtZGF0ZVwiKTtcbiAgICBkYXRlLmlubmVyVGV4dCA9IGBEYXRlOiAke3RvZG8uZGF0ZX1gO1xuICAgIGRldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNhbmNlbEJ0bi5pbm5lclRleHQgPSBcIlhcIjtcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIG1haW5MaXN0LnJlbW92ZURldGFpbHMoZGV0YWlsc0NvbnRhaW5lcik7XG4gICAgICBjb25zb2xlLmxvZyhcIkRldGFpbHMgcmVtb3ZlZFwiKTtcbiAgICB9KVxuICAgIGRldGFpbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKVxuICAgIFxuXG4gICAgbWFpbkxpc3QucGFyZW50LmFwcGVuZENoaWxkKGRldGFpbHNDb250YWluZXIpO1xuXG4gICAgbWFpbkxpc3QuZGV0YWlsc1JlbmRlcmVkID0gdHJ1ZTtcbiAgfVxuICB9LFxuXG4gIHJlbW92ZURldGFpbHM6IChkZXRhaWxzKSA9PntcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkZXRhaWxzKSl7XG4gICAgICBtYWluTGlzdC5kZXRhaWxzUmVuZGVyZWQgPSBmYWxzZTtcbiAgICAgIHJldHVyblxuICAgIH07XG4gICAgbWFpbkxpc3QucGFyZW50LnJlbW92ZUNoaWxkKGRldGFpbHMpO1xuICAgIG1haW5MaXN0LmRldGFpbHNSZW5kZXJlZCA9IGZhbHNlO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFpbkxpc3Q7IiwiaW1wb3J0IHsgcHVic3ViIH0gZnJvbSBcIi4uL3V0aWxpdHkvcHVic3ViXCI7XG5pbXBvcnQgdG9kb0RhdGEgZnJvbSBcIi4uL3RvZG9kYXRhXCI7XG5pbXBvcnQgcmVtb3ZlQWxsQ2hpbGROb2RlcyBmcm9tIFwiLi4vdXRpbGl0eS9yZW1vdmVhbGxjaGlsZG5vZGVzXCI7XG5cbmNvbnN0IHNpZGViYXIgPSB7XG4gIHBhcmVudCA6IG51bGwsXG4gIHByb2plY3RzUGFyZW50OiBudWxsLFxuICBmb3JtR2VuZXJhdGVkOiBmYWxzZSxcblxuICByZW5kZXI6IChjb250YWluZXIpID0+IHtcbiAgICBzaWRlYmFyLnBhcmVudCA9IGNvbnRhaW5lcjtcblxuICAgIHNpZGViYXIucHJvamVjdHNQYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXIucHJvamVjdHNQYXJlbnQpXG5cbiAgICBzaWRlYmFyLnJlbmRlclByb2plY3RzKHRvZG9EYXRhLnByb2plY3RzKTtcblxuXG4gICAgcHVic3ViLnN1YnNjcmliZShcInByb2plY3RBZGRlZFwiLCBzaWRlYmFyLnJlbmRlclByb2plY3RzKVxuICAgIFxuICB9LFxuXG4gIHJlbmRlclByb2plY3RzOiAocHJvamVjdHMpID0+IHtcbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKHNpZGViYXIucHJvamVjdHNQYXJlbnQpO1xuXG4gICAgY29uc3QgbmF2VWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgc2lkZWJhci5wcm9qZWN0c1BhcmVudC5hcHBlbmRDaGlsZChuYXZVbCk7XG5cbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgIGxpLmlubmVyVGV4dCA9IHByb2plY3Q7XG4gICAgICBuYXZVbC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRQcm9qZWN0QnRuLmlubmVyVGV4dCA9IFwiKyBOZXcgUHJvamVjdFwiO1xuICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNpZGViYXIucmVuZGVyRm9ybSk7XG5cbiAgICBuYXZVbC5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnRuKVxuXG4gIH0sXG5cbiAgcmVuZGVyRm9ybTogKCkgPT4ge1xuICAgIGlmICghc2lkZWJhci5mb3JtR2VuZXJhdGVkKSB7XG4gICAgICBjb25zdCBwcm9qZWN0QWRkQ29udGFpbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzaWRlYmFyLnBhcmVudC5hcHBlbmRDaGlsZChwcm9qZWN0QWRkQ29udGFpbnRlcik7XG5cbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1pbnB1dFwiKTtcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICBwcm9qZWN0TmFtZUxhYmVsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1pbnB1dFwiKTtcblxuICAgICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHN1Ym1pdC5pbm5lclRleHQgPSBcInN1Ym1pdFwiO1xuICAgICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmKHByb2plY3ROYW1lLnZhbHVlLmxlbmd0aCAhPT0gMCl7XG4gICAgICAgICAgcHVic3ViLnB1Ymxpc2goXCJwcm9qZWN0QWRkUmVxdWVzdGVkXCIsIHByb2plY3ROYW1lLnZhbHVlKTtcbiAgICAgICAgICBzaWRlYmFyLnJlbW92ZUZvcm0ocHJvamVjdEFkZENvbnRhaW50ZXIpO1xuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgY2FuY2VsQnRuLmlubmVyVGV4dCA9IFwiWFwiO1xuICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHNpZGViYXIucmVtb3ZlRm9ybShwcm9qZWN0QWRkQ29udGFpbnRlcik7XG4gICAgICB9KVxuXG4gICAgICBwcm9qZWN0QWRkQ29udGFpbnRlci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUxhYmVsKTtcbiAgICAgIHByb2plY3RBZGRDb250YWludGVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICAgIHByb2plY3RBZGRDb250YWludGVyLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gICAgICBwcm9qZWN0QWRkQ29udGFpbnRlci5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuICAgIH1cbiAgICBzaWRlYmFyLmZvcm1HZW5lcmF0ZWQgPSB0cnVlO1xuICB9LFxuXG4gIHJlbW92ZUZvcm06IChmb3JtKSA9PiB7XG4gICAgc2lkZWJhci5wYXJlbnQucmVtb3ZlQ2hpbGQoZm9ybSk7XG4gICAgc2lkZWJhci5mb3JtR2VuZXJhdGVkID0gZmFsc2U7XG4gIH0sXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2lkZWJhcjsiLCJpbXBvcnQgeyBwdWJzdWIgfSBmcm9tIFwiLi4vdXRpbGl0eS9wdWJzdWJcIjtcbmltcG9ydCB0b2RvRGF0YSBmcm9tIFwiLi4vdG9kb2RhdGFcIjtcbmltcG9ydCBjcmVhdGVPYmplY3QgZnJvbSBcIi4uL3V0aWxpdHkvb2JqZWN0ZmFjdG9yeVwiO1xuXG5jb25zdCBhZGRUYXNrRm9ybSA9IHtcbiAgcmVuZGVyOiAoY29udGFpbmVyLCBwcmVmaWxsZWRJbmZvKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcInRhc2tmb3JtXCIpO1xuXG4gICAgLy90aXRsZVxuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGl0bGVcIik7XG5cbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aXRsZVwiKTtcbiAgICB0aXRsZUxhYmVsLmlubmVyVGV4dCA9IFwiVGl0bGU6IFwiXG5cbiAgICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICAgIC8vZGVzY3JpcHRpb24gXG4gICAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVzY3JpcHRpb25cIik7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmlubmVyVGV4dCA9IFwiZGVzY3JpcHRpb246IFwiXG4gICAgXG4gICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG4gICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgICAvL2RhdGUgXG4gICAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRhdGVcIik7XG5cbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGF0ZVwiKTtcbiAgICBkYXRlTGFiZWwuaW5uZXJUZXh0ID0gXCJkYXRlOiBcIlxuXG4gICAgZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgIGRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICAgIC8vcHJpb3JpdHkgXG4gICAgY29uc3QgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHByaW9yaXR5U2VsZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJpb3JpdHlcIilcbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5XCIpXG5cbiAgICBjb25zdCBsb3dQcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgY29uc3QgbWVkaXVtUHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIGNvbnN0IGhpZ2hQcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbiAgICBsb3dQcmlvcml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImxvd1wiKTtcbiAgICBtZWRpdW1Qcmlvcml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIm1lZGl1bVwiKTtcbiAgICBoaWdoUHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJoaWdoXCIpO1xuXG4gICAgbG93UHJpb3JpdHlPcHRpb24uaW5uZXJUZXh0ID0gXCJMb3dcIlxuICAgIG1lZGl1bVByaW9yaXR5T3B0aW9uLmlubmVyVGV4dCA9IFwiTWVkaXVtXCJcbiAgICBoaWdoUHJpb3JpdHlPcHRpb24uaW5uZXJUZXh0ID0gXCJIaWdoXCJcblxuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5T3B0aW9uKTtcbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChtZWRpdW1Qcmlvcml0eU9wdGlvbik7XG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5T3B0aW9uKTtcbiAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdCk7XG5cbiAgICAvL3N1Ym1pdFxuXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdWJtaXRCdG4uaW5uZXJUZXh0ID0gXCJTdWJtaXRcIjtcblxuICAgIC8vY2FuY2VsXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAgIGNhbmNlbEJ0bi5pbm5lclRleHQgPSBcIlhcIlxuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2FuY2VsKTtcbiAgICBcblxuICAgIC8vYXBwZW5kIHRvIGZvcm1cbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVEaXYpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG5cblxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7IFxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgXG4gICAgICBwdWJzdWIucHVibGlzaChcImZvcm1Vc2VkXCIsIGZvcm0pXG5cbiAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcbiAgICAgIGNvbnN0IGRhdGUgPSBkYXRlSW5wdXQudmFsdWU7XG4gICAgICBjb25zdCBwcmlvcml0eSA9IHByaW9yaXR5U2VsZWN0LnZhbHVlO1xuXG4gICAgICBjb25zdCB0b2RvID0gY3JlYXRlT2JqZWN0LnRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSk7XG4gICAgICB0b2RvRGF0YS5hZGRUb2RvKHRvZG8pO1xuXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUVkaXQoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuICAgICAgcHVic3ViLnB1Ymxpc2goXCJmb3JtVXNlZFwiLCBmb3JtKTtcbiAgICAgIGNvbnNvbGUubG9nKHByZWZpbGxlZEluZm8pO1xuXG4gICAgICBwcmVmaWxsZWRJbmZvLnRvZG9PYmoudGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xuICAgICAgcHJlZmlsbGVkSW5mby50b2RvT2JqLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcbiAgICAgIHByZWZpbGxlZEluZm8udG9kb09iai5kYXRlID0gZGF0ZUlucHV0LnZhbHVlO1xuICAgICAgcHJlZmlsbGVkSW5mby50b2RvT2JqLnByaW9yaXR5ID0gcHJpb3JpdHlTZWxlY3QudmFsdWU7XG5cbiAgICAgIHB1YnN1Yi5wdWJsaXNoKFwidG9kb0VkaXRSZXF1ZXN0ZWRcIiwgcHJlZmlsbGVkSW5mbylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDYW5jZWwgKCkge1xuICAgICAgcHVic3ViLnB1Ymxpc2goXCJmb3JtVXNlZFwiLCBmb3JtKTtcbiAgICB9XG5cbiAgICBpZiAocHJlZmlsbGVkSW5mbyl7XG4gICAgICB0aXRsZUlucHV0LnZhbHVlID0gcHJlZmlsbGVkSW5mby50b2RvT2JqLnRpdGxlO1xuICAgICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHByZWZpbGxlZEluZm8udG9kb09iai5kZXNjcmlwdGlvbjtcbiAgICAgIGRhdGVJbnB1dC52YWx1ZSA9IHByZWZpbGxlZEluZm8udG9kb09iai5kYXRlO1xuICAgICAgcHJpb3JpdHlTZWxlY3QudmFsdWUgPSBwcmVmaWxsZWRJbmZvLnRvZG9PYmoucHJpb3JpdHk7XG5cbiAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVFZGl0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVTdWJtaXQpO1xuICAgIH07XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWRkVGFza0Zvcm07IiwiaW1wb3J0IHJlbW92ZUFsbENoaWxkTm9kZXMgZnJvbSBcIi4uL3V0aWxpdHkvcmVtb3ZlYWxsY2hpbGRub2Rlc1wiO1xuaW1wb3J0IHsgcHVic3ViIH0gZnJvbSBcIi4uL3V0aWxpdHkvcHVic3ViXCI7XG5pbXBvcnQgYWRkVGFza0Zvcm0gZnJvbSBcIi4vdGFza2Zvcm1cIjtcblxuY29uc3QgdG9wVWkgPSB7XG4gIC8vY2FjaGUgY29udGFpbmVyXG4gIHBhcmVudCA6IG51bGwsXG4gIGZvcm1HZW5lcmF0ZWQ6IGZhbHNlLFxuXG4gIHJlbmRlcjogKGNvbnRhaW5lcikgPT4ge1xuICAgIHRvcFVpLnBhcmVudCA9IGNvbnRhaW5lcjtcblxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZFRhc2tCdG4uaW5uZXJUZXh0ID0gXCIrIEFkZCBUYXNrXCJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG4gICAgXG5cbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b3BVaS5hZGRGb3JtKTtcblxuICAgIHB1YnN1Yi5zdWJzY3JpYmUoXCJmb3JtVXNlZFwiLCB0b3BVaS5yZW1vdmVGb3JtKTtcbiAgfSxcblxuICBhZGRGb3JtOiAocHJlZmlsbGVkKSA9PiB7XG4gIGlmICghdG9wVWkuZm9ybUdlbmVyYXRlZCkge1xuICAgIGNvbnNvbGUubG9nKHByZWZpbGxlZCk7XG4gICAgaWYgKHByZWZpbGxlZC50eXBlICE9PSBcImNsaWNrXCIpe1xuICAgIGFkZFRhc2tGb3JtLnJlbmRlcih0b3BVaS5wYXJlbnQsIHByZWZpbGxlZCk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgYWRkVGFza0Zvcm0ucmVuZGVyKHRvcFVpLnBhcmVudCwgZmFsc2UpO1xuICAgIH07XG4gICAgdG9wVWkuZm9ybUdlbmVyYXRlZCA9IHRydWU7XG4gICB9XG4gIH0sXG5cbiAgcmVtb3ZlRm9ybTogKGZvcm0pID0+IHtcbiAgICB0b3BVaS5wYXJlbnQucmVtb3ZlQ2hpbGQoZm9ybSk7XG4gICAgdG9wVWkuZm9ybUdlbmVyYXRlZCA9IGZhbHNlO1xuICB9LFxuXG4gIHRlc3Q6ICh0ZXh0KSA9PiB7XG4gICAgdGV4dC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgY29uc29sZS5sb2coZWxlbWVudClcbiAgICB9KTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvcFVpIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuaW1wb3J0IHRvZG9EYXRhIGZyb20gXCIuL3RvZG9kYXRhXCI7XG5pbXBvcnQgbWFpbkxpc3QgZnJvbSBcIi4vZG9tbWFuYWdtZW50L21haW5saXN0XCI7XG5pbXBvcnQgdG9wVWkgZnJvbSBcIi4vZG9tbWFuYWdtZW50L3VpXCI7XG5pbXBvcnQgc2lkZWJhciBmcm9tIFwiLi9kb21tYW5hZ21lbnQvc2lkZWJhclwiO1xuXG5cblxuY29uc3QgZG9tU3R1ZmYgPSAoKCkgPT4ge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGVudFwiKTtcbiAgYm9keS5hcHBlbmRDaGlsZChjb250ZW50KVxuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXNpZGVcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYXNpZGUpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgdG9wVWkucmVuZGVyKGhlYWRlcik7XG4gIG1haW5MaXN0LnJlbmRlckNvbnRhaW5lcihtYWluKTtcbiAgc2lkZWJhci5yZW5kZXIoYXNpZGUpO1xufSkoKTtcblxuXG5cblxuIiwiaW1wb3J0IHsgcHVic3ViIH0gZnJvbSBcIi4vdXRpbGl0eS9wdWJzdWJcIjtcblxuY29uc3QgdG9kb0RhdGEgPSB7XG4gIGxpc3Q6IFtdLFxuICBwcm9qZWN0czogW1wiZ2VuZXJhbFwiLF0sXG5cbiAgYWRkVG9kbzogKHRvRG8pID0+IHtcbiAgICB0b2RvRGF0YS5saXN0LnB1c2godG9Ebyk7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJ0b2RvQWRkZWRcIiwgdG9kb0RhdGEubGlzdCk7XG4gIH0sXG5cbiAgZ2V0VG9kbzogKCkgPT4ge1xuICAgIHJldHVybiBsaXN0O1xuICB9LFxuXG4gIGNoZWNrVW5jaGVjazogKGluZm8pID0+IHtcbiAgICBjb25zb2xlLmxvZyh0b2RvRGF0YS5saXN0W2luZm9bMF1dKVxuICAgIHRvZG9EYXRhLmxpc3RbaW5mby5pbmRleF0uY29tcGxldGVkID0gaW5mby52YWx1ZTtcbiAgICBwdWJzdWIucHVibGlzaChcInRvZG9FZGl0ZWRcIiwgdG9kb0RhdGEubGlzdCk7XG4gIH0sXG5cbiAgZWRpdFRvZG86IChpbmZvKSA9PiB7XG4gICAgdG9kb0RhdGFbaW5mby5pbmRleF0gPSBpbmZvLnRvZG9PYmo7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJ0b2RvRWRpdGVkXCIsIHRvZG9EYXRhLmxpc3QpO1xuICB9LFxuXG4gIGFkZFByb2plY3Q6IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgdG9kb0RhdGEucHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICBwdWJzdWIucHVibGlzaChcInByb2plY3RBZGRlZFwiLCB0b2RvRGF0YS5wcm9qZWN0cyk7XG4gIH1cblxufTtcblxucHVic3ViLnN1YnNjcmliZShcImNoZWNrQ2hhbmdlZFwiLCB0b2RvRGF0YS5jaGVja1VuY2hlY2spO1xucHVic3ViLnN1YnNjcmliZShcInRvZG9FZGl0UmVxdWVzdGVkXCIsIHRvZG9EYXRhLmVkaXRUb2RvKTtcbnB1YnN1Yi5zdWJzY3JpYmUoXCJwcm9qZWN0QWRkUmVxdWVzdGVkXCIsIHRvZG9EYXRhLmFkZFByb2plY3QpO1xuXG5leHBvcnQgZGVmYXVsdCB0b2RvRGF0YTsiLCJjb25zdCBjcmVhdGVPYmplY3QgPSB7XG4gIHRvZG86ICh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgbGV0IGNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIGxldCBwcm9qZWN0ID0gXCJnZW5lcmFsXCI7XG4gICAgcmV0dXJue3RpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCwgcHJvamVjdH07XG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU9iamVjdDsiLCJleHBvcnQgY29uc3QgcHVic3ViID0ge1xuICBldmVudHM6IHt9LFxuICBzdWJzY3JpYmU6IGZ1bmN0aW9uKGV2TmFtZSwgZm4pIHtcbiAgICBjb25zb2xlLmxvZyhgUFVCU1VCOiBzb21lb25lIGp1c3Qgc3Vic2NyaWJlZCB0byBrbm93IGFib3V0ICR7ZXZOYW1lfWApO1xuICAgIC8vYWRkIGFuIGV2ZW50IHdpdGggYSBuYW1lIGFzIG5ldyBvciB0byBleGlzdGluZyBsaXN0XG4gICAgdGhpcy5ldmVudHNbZXZOYW1lXSA9IHRoaXMuZXZlbnRzW2V2TmFtZV0gfHwgW107XG4gICAgdGhpcy5ldmVudHNbZXZOYW1lXS5wdXNoKGZuKTtcbiAgfSxcbiAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uKGV2TmFtZSwgZm4pIHtcbiAgICBjb25zb2xlLmxvZyhgUFVCU1VCOiBzb21lb25lIGp1c3QgVU5zdWJzY3JpYmVkIGZyb20gJHtldk5hbWV9YCk7XG4gICAgLy9yZW1vdmUgYW4gZXZlbnQgZnVuY3Rpb24gYnkgbmFtZVxuICAgIGlmICh0aGlzLmV2ZW50c1tldk5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldk5hbWVdID0gdGhpcy5ldmVudHNbZXZOYW1lXS5maWx0ZXIoZiA9PiBmICE9PSBmbik7XG4gICAgfVxuICB9LFxuICBwdWJsaXNoOiBmdW5jdGlvbihldk5hbWUsIGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhgUFVCU1VCOiBNYWtpbmcgYW4gYnJvYWRjYXN0IGFib3V0ICR7ZXZOYW1lfSB3aXRoICR7ZGF0YX1gKTtcbiAgICAvL2VtaXR8cHVibGlzaHxhbm5vdW5jZSB0aGUgZXZlbnQgdG8gYW55b25lIHdobyBpcyBzdWJzY3JpYmVkXG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0uZm9yRWFjaChmID0+IHtcbiAgICAgICAgZihkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTsiLCJmdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbW92ZUFsbENoaWxkTm9kZXM7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9