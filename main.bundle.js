"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility/ui */ "./src/utility/ui.js");
/* harmony import */ var _tododata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tododata */ "./src/tododata.js");
/* harmony import */ var _utility_mainlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility/mainlist */ "./src/utility/mainlist.js");






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

  _utility_ui__WEBPACK_IMPORTED_MODULE_0__["default"].render(header);
  _utility_mainlist__WEBPACK_IMPORTED_MODULE_2__["default"].setParent(main);
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
  projects: [],

  addTodo: (toDo) => {
    todoData.list.push(toDo);
    _utility_pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("todoAdded", todoData.list);
  },

  getTodo: () => {
    return list;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoData);

/***/ }),

/***/ "./src/utility/mainlist.js":
/*!*********************************!*\
  !*** ./src/utility/mainlist.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/utility/pubsub.js");


const mainList = {
  parent: null,

  render: (list) => {
    
  },

  setParent : (container) => {
    mainList.parent = container;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainList);

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
    
    return{title, description, date, priority};
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

/***/ }),

/***/ "./src/utility/taskform.js":
/*!*********************************!*\
  !*** ./src/utility/taskform.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/utility/pubsub.js");
/* harmony import */ var _tododata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tododata */ "./src/tododata.js");
/* harmony import */ var _objectfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objectfactory */ "./src/utility/objectfactory.js");




const addTaskForm = {
  render: (container) => {
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


    //append to form
    form.appendChild(titleDiv);
    form.appendChild(descriptionDiv);
    form.appendChild(dateDiv);
    form.appendChild(priorityDiv);
    form.appendChild(submitBtn);


    function handleForm(event) { 
      event.preventDefault(); 
      const title = titleInput.value;
      const description = descriptionInput.value;
      const date = dateInput.value;
      const priority = prioritySelect.value;

      _pubsub__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("formUsed", form)
      const todo = _objectfactory__WEBPACK_IMPORTED_MODULE_2__["default"].todo(title, description, date, priority);
      _tododata__WEBPACK_IMPORTED_MODULE_1__["default"].addTodo(todo);

    };
    form.addEventListener('submit', handleForm);
    
    container.appendChild(form);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTaskForm);

/***/ }),

/***/ "./src/utility/ui.js":
/*!***************************!*\
  !*** ./src/utility/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taskform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskform */ "./src/utility/taskform.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub */ "./src/utility/pubsub.js");
/* harmony import */ var _removeallchildnodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeallchildnodes */ "./src/utility/removeallchildnodes.js");




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

    _pubsub__WEBPACK_IMPORTED_MODULE_1__.pubsub.subscribe("formUsed", topUi.removeForm);
  },

  addForm: () => {
  if (!topUi.formGenerated) {
    _taskform__WEBPACK_IMPORTED_MODULE_0__["default"].render(topUi.parent);
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNDO0FBQ1E7Ozs7QUFJMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSwwREFBWTtBQUNkLEVBQUUsbUVBQWtCO0FBQ3BCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJ5Qzs7QUFFMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDJEQUFjO0FBQ2xCLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7O0FDaEJXOztBQUVsQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7O0FDZHZCO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7QUNQcEI7QUFDUCxZQUFZO0FBQ1o7QUFDQSxpRUFBaUUsT0FBTztBQUN4RTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSwwREFBMEQsT0FBTztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHFEQUFxRCxRQUFRLE9BQU8sS0FBSztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsbUJBQW1COzs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0M7QUFDUTs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSxtREFBYztBQUNwQixtQkFBbUIsMkRBQWlCO0FBQ3BDLE1BQU0seURBQWdCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1R1c7QUFDSDtBQUNzQjs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFJLHFEQUFnQjtBQUNwQixHQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFJLHdEQUFrQjtBQUN0QjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQSxpRUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvZGF0YS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3V0aWxpdHkvbWFpbmxpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91dGlsaXR5L29iamVjdGZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91dGlsaXR5L3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3V0aWxpdHkvcmVtb3ZlYWxsY2hpbGRub2Rlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3V0aWxpdHkvdGFza2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy91dGlsaXR5L3VpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0b3BVaSBmcm9tIFwiLi91dGlsaXR5L3VpXCI7XG5pbXBvcnQgdG9kb0RhdGEgZnJvbSBcIi4vdG9kb2RhdGFcIjtcbmltcG9ydCBtYWluTGlzdCBmcm9tIFwiLi91dGlsaXR5L21haW5saXN0XCI7XG5cblxuXG5jb25zdCBkb21TdHVmZiA9ICgoKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250ZW50XCIpO1xuICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpXG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBjb25zdCBhc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhc2lkZVwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChhc2lkZSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcblxuICB0b3BVaS5yZW5kZXIoaGVhZGVyKTtcbiAgbWFpbkxpc3Quc2V0UGFyZW50KG1haW4pO1xufSkoKTtcblxuXG5cblxuIiwiaW1wb3J0IHsgcHVic3ViIH0gZnJvbSBcIi4vdXRpbGl0eS9wdWJzdWJcIjtcblxuY29uc3QgdG9kb0RhdGEgPSB7XG4gIGxpc3Q6IFtdLFxuICBwcm9qZWN0czogW10sXG5cbiAgYWRkVG9kbzogKHRvRG8pID0+IHtcbiAgICB0b2RvRGF0YS5saXN0LnB1c2godG9Ebyk7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJ0b2RvQWRkZWRcIiwgdG9kb0RhdGEubGlzdCk7XG4gIH0sXG5cbiAgZ2V0VG9kbzogKCkgPT4ge1xuICAgIHJldHVybiBsaXN0O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b2RvRGF0YTsiLCJpbXBvcnQgeyBwdWJzdWIgfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuY29uc3QgbWFpbkxpc3QgPSB7XG4gIHBhcmVudDogbnVsbCxcblxuICByZW5kZXI6IChsaXN0KSA9PiB7XG4gICAgXG4gIH0sXG5cbiAgc2V0UGFyZW50IDogKGNvbnRhaW5lcikgPT4ge1xuICAgIG1haW5MaXN0LnBhcmVudCA9IGNvbnRhaW5lcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBtYWluTGlzdDsiLCJjb25zdCBjcmVhdGVPYmplY3QgPSB7XG4gIHRvZG86ICh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgXG4gICAgcmV0dXJue3RpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHl9O1xuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVPYmplY3Q7IiwiZXhwb3J0IGNvbnN0IHB1YnN1YiA9IHtcbiAgZXZlbnRzOiB7fSxcbiAgc3Vic2NyaWJlOiBmdW5jdGlvbihldk5hbWUsIGZuKSB7XG4gICAgY29uc29sZS5sb2coYFBVQlNVQjogc29tZW9uZSBqdXN0IHN1YnNjcmliZWQgdG8ga25vdyBhYm91dCAke2V2TmFtZX1gKTtcbiAgICAvL2FkZCBhbiBldmVudCB3aXRoIGEgbmFtZSBhcyBuZXcgb3IgdG8gZXhpc3RpbmcgbGlzdFxuICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0gPSB0aGlzLmV2ZW50c1tldk5hbWVdIHx8IFtdO1xuICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0ucHVzaChmbik7XG4gIH0sXG4gIHVuc3Vic2NyaWJlOiBmdW5jdGlvbihldk5hbWUsIGZuKSB7XG4gICAgY29uc29sZS5sb2coYFBVQlNVQjogc29tZW9uZSBqdXN0IFVOc3Vic2NyaWJlZCBmcm9tICR7ZXZOYW1lfWApO1xuICAgIC8vcmVtb3ZlIGFuIGV2ZW50IGZ1bmN0aW9uIGJ5IG5hbWVcbiAgICBpZiAodGhpcy5ldmVudHNbZXZOYW1lXSkge1xuICAgICAgdGhpcy5ldmVudHNbZXZOYW1lXSA9IHRoaXMuZXZlbnRzW2V2TmFtZV0uZmlsdGVyKGYgPT4gZiAhPT0gZm4pO1xuICAgIH1cbiAgfSxcbiAgcHVibGlzaDogZnVuY3Rpb24oZXZOYW1lLCBkYXRhKSB7XG4gICAgY29uc29sZS5sb2coYFBVQlNVQjogTWFraW5nIGFuIGJyb2FkY2FzdCBhYm91dCAke2V2TmFtZX0gd2l0aCAke2RhdGF9YCk7XG4gICAgLy9lbWl0fHB1Ymxpc2h8YW5ub3VuY2UgdGhlIGV2ZW50IHRvIGFueW9uZSB3aG8gaXMgc3Vic2NyaWJlZFxuICAgIGlmICh0aGlzLmV2ZW50c1tldk5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldk5hbWVdLmZvckVhY2goZiA9PiB7XG4gICAgICAgIGYoZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07IiwiZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpIHtcbiAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW1vdmVBbGxDaGlsZE5vZGVzOyIsImltcG9ydCB7IHB1YnN1YiB9IGZyb20gXCIuL3B1YnN1YlwiO1xuaW1wb3J0IHRvZG9EYXRhIGZyb20gXCIuLi90b2RvZGF0YVwiO1xuaW1wb3J0IGNyZWF0ZU9iamVjdCBmcm9tIFwiLi9vYmplY3RmYWN0b3J5XCI7XG5cbmNvbnN0IGFkZFRhc2tGb3JtID0ge1xuICByZW5kZXI6IChjb250YWluZXIpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwidGFza2Zvcm1cIik7XG5cbiAgICAvL3RpdGxlXG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aXRsZVwiKTtcblxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRpdGxlXCIpO1xuICAgIHRpdGxlTGFiZWwuaW5uZXJUZXh0ID0gXCJUaXRsZTogXCJcblxuICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gICAgLy9kZXNjcmlwdGlvbiBcbiAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjcmlwdGlvblwiKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJUZXh0ID0gXCJkZXNjcmlwdGlvbjogXCJcbiAgICBcbiAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcblxuICAgIC8vZGF0ZSBcbiAgICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGF0ZVwiKTtcblxuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkYXRlXCIpO1xuICAgIGRhdGVMYWJlbC5pbm5lclRleHQgPSBcImRhdGU6IFwiXG5cbiAgICBkYXRlRGl2LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuXG4gICAgLy9wcmlvcml0eSBcbiAgICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgcHJpb3JpdHlTZWxlY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eVwiKVxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcbiAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJpb3JpdHlcIilcblxuICAgIGNvbnN0IGxvd1ByaW9yaXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBjb25zdCBtZWRpdW1Qcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgY29uc3QgaGlnaFByaW9yaXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblxuICAgIGxvd1ByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwibG93XCIpO1xuICAgIG1lZGl1bVByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwibWVkaXVtXCIpO1xuICAgIGhpZ2hQcmlvcml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImhpZ2hcIik7XG5cbiAgICBsb3dQcmlvcml0eU9wdGlvbi5pbm5lclRleHQgPSBcIkxvd1wiXG4gICAgbWVkaXVtUHJpb3JpdHlPcHRpb24uaW5uZXJUZXh0ID0gXCJNZWRpdW1cIlxuICAgIGhpZ2hQcmlvcml0eU9wdGlvbi5pbm5lclRleHQgPSBcIkhpZ2hcIlxuXG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHlPcHRpb24pO1xuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG1lZGl1bVByaW9yaXR5T3B0aW9uKTtcbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHlPcHRpb24pO1xuICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KTtcblxuICAgIC8vc3VibWl0XG5cbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHN1Ym1pdEJ0bi5pbm5lclRleHQgPSBcIlN1Ym1pdFwiO1xuXG5cbiAgICAvL2FwcGVuZCB0byBmb3JtXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlRGl2KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUZvcm0oZXZlbnQpIHsgXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcbiAgICAgIGNvbnN0IGRhdGUgPSBkYXRlSW5wdXQudmFsdWU7XG4gICAgICBjb25zdCBwcmlvcml0eSA9IHByaW9yaXR5U2VsZWN0LnZhbHVlO1xuXG4gICAgICBwdWJzdWIucHVibGlzaChcImZvcm1Vc2VkXCIsIGZvcm0pXG4gICAgICBjb25zdCB0b2RvID0gY3JlYXRlT2JqZWN0LnRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSk7XG4gICAgICB0b2RvRGF0YS5hZGRUb2RvKHRvZG8pO1xuXG4gICAgfTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZUZvcm0pO1xuICAgIFxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhZGRUYXNrRm9ybTsiLCJpbXBvcnQgYWRkVGFza0Zvcm0gZnJvbSBcIi4vdGFza2Zvcm1cIjtcbmltcG9ydCB7IHB1YnN1YiB9IGZyb20gXCIuL3B1YnN1YlwiO1xuaW1wb3J0IHJlbW92ZUFsbENoaWxkTm9kZXMgZnJvbSBcIi4vcmVtb3ZlYWxsY2hpbGRub2Rlc1wiO1xuXG5jb25zdCB0b3BVaSA9IHtcbiAgLy9jYWNoZSBjb250YWluZXJcbiAgcGFyZW50IDogbnVsbCxcbiAgZm9ybUdlbmVyYXRlZDogZmFsc2UsXG5cbiAgcmVuZGVyOiAoY29udGFpbmVyKSA9PiB7XG4gICAgdG9wVWkucGFyZW50ID0gY29udGFpbmVyO1xuXG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkVGFza0J0bi5pbm5lclRleHQgPSBcIisgQWRkIFRhc2tcIlxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcbiAgICBcblxuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvcFVpLmFkZEZvcm0pO1xuXG4gICAgcHVic3ViLnN1YnNjcmliZShcImZvcm1Vc2VkXCIsIHRvcFVpLnJlbW92ZUZvcm0pO1xuICB9LFxuXG4gIGFkZEZvcm06ICgpID0+IHtcbiAgaWYgKCF0b3BVaS5mb3JtR2VuZXJhdGVkKSB7XG4gICAgYWRkVGFza0Zvcm0ucmVuZGVyKHRvcFVpLnBhcmVudCk7XG4gICAgdG9wVWkuZm9ybUdlbmVyYXRlZCA9IHRydWU7XG4gICB9XG4gIH0sXG5cbiAgcmVtb3ZlRm9ybTogKGZvcm0pID0+IHtcbiAgICB0b3BVaS5wYXJlbnQucmVtb3ZlQ2hpbGQoZm9ybSk7XG4gICAgdG9wVWkuZm9ybUdlbmVyYXRlZCA9IGZhbHNlO1xuICB9LFxuXG4gIHRlc3Q6ICh0ZXh0KSA9PiB7XG4gICAgdGV4dC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgY29uc29sZS5sb2coZWxlbWVudClcbiAgICB9KTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvcFVpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9