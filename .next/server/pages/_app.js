module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./Redux/Actions/userAction.js":
/*!*************************************!*\
  !*** ./Redux/Actions/userAction.js ***!
  \*************************************/
/*! exports provided: createUser, editUserDetails, getUserData, refreshIdToken, logoutUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editUserDetails", function() { return editUserDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserData", function() { return getUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshIdToken", function() { return refreshIdToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Types */ "./Redux/Types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const createUser = (userData, Router) => async dispatch => {
  dispatch({
    type: _Types__WEBPACK_IMPORTED_MODULE_0__["LOADING_UI"]
  });
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('https://us-central1-resume-builder-startup.cloudfunctions.net/api/createAccount', userData).then(res => {
    console.log(res.data);
    setAuthorizationHeader(res.data.firstIdToken);
    storeSessionToken(res.data.refreshToken);
    dispatch(getUserData());
    dispatch({
      type: _Types__WEBPACK_IMPORTED_MODULE_0__["CLEAR_ERRORS"]
    });
    Router.push('/admin/profile');
    dispatch(getUserData());
  }).catch(err => {
    console.log(err.response.data); // dispatch({
    //  type: SET_ERRORS,
    //  payload: err.response.data
    // })
  });
};
const editUserDetails = userDetails => async dispatch => {
  dispatch({
    type: _Types__WEBPACK_IMPORTED_MODULE_0__["LOADING_USER"]
  });
  const res = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('https://us-central1-resume-builder-startup.cloudfunctions.net/api/user', userDetails);
  dispatch(getUserData());
  console.log(res.data); //   })
  //   .catch((err) => console.log(err));
}; //This will fetch all the user INfo from the DataBase

const getUserData = () => async dispatch => {
  dispatch({
    type: _Types__WEBPACK_IMPORTED_MODULE_0__["LOADING_USER"]
  });
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://us-central1-resume-builder-startup.cloudfunctions.net/api/user').then(res => {
    dispatch({
      type: _Types__WEBPACK_IMPORTED_MODULE_0__["SET_USER"],
      payload: res.data
    });
  }).catch(err => console.log(err));
}; //This will refresh the acsess toekm

const refreshIdToken = sessionToken => async dispatch => {
  const res = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`https://securetoken.googleapis.com/v1/token?key=AIzaSyBoIyQqz_8yKUFxjJO7jqBZWEslC7je7U4`, {
    grant_type: "refresh_token",
    refresh_token: sessionToken
  });
  console.log(res.data.access_token);
  setAuthorizationHeader(res.data.access_token);
  dispatch(getUserData()); // .catch((err) =>{
  //     console.log(err)
  // })
}; //Set the Authorizationheader for the Jwt token and user permisssio

const setAuthorizationHeader = token => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem('FBIdToken', FBIdToken);
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.common['Authorization'] = FBIdToken;
};

const storeSessionToken = sessionToken => {
  const refreshToken = sessionToken;
  localStorage.setItem('refreshToken', refreshToken);
};

const logoutUser = Router => dispatch => {
  localStorage.removeItem('FBIdToken');
  localStorage.removeItem('refreshToken');
  delete axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.common['Authorization'];
  dispatch({
    type: _Types__WEBPACK_IMPORTED_MODULE_0__["SET_UNAUTHENTICATED"]
  });
  Router.push('/');
}; // Update User ACcount

/***/ }),

/***/ "./Redux/Reducers/dataReducer.js":
/*!***************************************!*\
  !*** ./Redux/Reducers/dataReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Types */ "./Redux/Types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  blogs: [],
  blog: {},
  deleteMessage: {},
  loading: false
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  switch (action.type) {
    case _Types__WEBPACK_IMPORTED_MODULE_0__["LOADING_DATA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _Types__WEBPACK_IMPORTED_MODULE_0__["GET_ALL_BLOG"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        blogs: action.payload,
        loading: false
      });

    case _Types__WEBPACK_IMPORTED_MODULE_0__["GET_BLOG"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        blog: action.payload
      });
    //   case POST_IMAGE:
    //     return {
    //       ...state,
    //       postImage: action.payload
    //     };
    //         case LIKE_TIMELINE:
    //         case UNLIKE_TIMELINE:
    //           let index = state.timelines.findIndex(
    //             (timeline) => timeline.timelineId === action.payload.timelineId
    //           );
    //           state.timelines[index] = action.payload;
    //           if (state.timeline.timelineId === action.payload.timelineId) {
    //             let temp = state.timeline.comments;
    //             state.timeline = action.payload;
    //             state.timeline.comments = temp
    //           }
    //       return {
    //         ...state
    //       };
    //   case DELETE_TIMELINE:
    //     return {
    //       ...state,
    //       blogs: state.timelines.filter((timeline) => timeline.timelineId !== action.payload )
    //  };

    case _Types__WEBPACK_IMPORTED_MODULE_0__["POST_BLOG"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        blogs: [action.payload, ...state.blogs]
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./Redux/Reducers/uiReducer.js":
/*!*************************************!*\
  !*** ./Redux/Reducers/uiReducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Types */ "./Redux/Types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  loading: false,
  errors: null
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  switch (action.type) {
    case _Types__WEBPACK_IMPORTED_MODULE_0__["SET_ERRORS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        errors: action.payload
      });

    case _Types__WEBPACK_IMPORTED_MODULE_0__["CLEAR_ERRORS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        errors: null
      });

    case _Types__WEBPACK_IMPORTED_MODULE_0__["LOADING_UI"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _Types__WEBPACK_IMPORTED_MODULE_0__["STOP_LOADING_UI"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./Redux/Reducers/userReducer.js":
/*!***************************************!*\
  !*** ./Redux/Reducers/userReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Types */ "./Redux/Types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  authenticated: false,
  loading: false,
  credentials: {},
  likes: [],
  notifications: []
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  switch (action.type) {
    case _Types__WEBPACK_IMPORTED_MODULE_0__["SET_AUTHENTICATED"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        authenticated: true
      });

    case _Types__WEBPACK_IMPORTED_MODULE_0__["SET_UNAUTHENTICATED"]:
      return initialState;

    case _Types__WEBPACK_IMPORTED_MODULE_0__["SET_USER"]:
      return _objectSpread({
        authenticated: true,
        loading: false
      }, action.payload);

    case _Types__WEBPACK_IMPORTED_MODULE_0__["LOADING_USER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./Redux/Store.js":
/*!************************!*\
  !*** ./Redux/Store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Reducers_userReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Reducers/userReducer */ "./Redux/Reducers/userReducer.js");
/* harmony import */ var _Reducers_dataReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Reducers/dataReducer */ "./Redux/Reducers/dataReducer.js");
/* harmony import */ var _Reducers_uiReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Reducers/uiReducer */ "./Redux/Reducers/uiReducer.js");






const initialState = {};
const middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a];
const reducers = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  user: _Reducers_userReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  data: _Reducers_dataReducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  UI: _Reducers_uiReducer__WEBPACK_IMPORTED_MODULE_5__["default"]
});
const initStore = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(reducers, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_0__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middleware)));
/* harmony default export */ __webpack_exports__["default"] = (initStore);

/***/ }),

/***/ "./Redux/Types.js":
/*!************************!*\
  !*** ./Redux/Types.js ***!
  \************************/
/*! exports provided: SET_AUTHENTICATED, SET_UNAUTHENTICATED, SET_USER, LOADING_USER, POST_BLOG, POST_IMAGE, GET_ALL_BLOG, SUBMIT_COMMENT, DELETE_BLOG, GET_BLOG, SET_ERRORS, LOADING_UI, CLEAR_ERRORS, LOADING_DATA, STOP_LOADING_UI, SET_BLOG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_AUTHENTICATED", function() { return SET_AUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_UNAUTHENTICATED", function() { return SET_UNAUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER", function() { return SET_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING_USER", function() { return LOADING_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_BLOG", function() { return POST_BLOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_IMAGE", function() { return POST_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_BLOG", function() { return GET_ALL_BLOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBMIT_COMMENT", function() { return SUBMIT_COMMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_BLOG", function() { return DELETE_BLOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_BLOG", function() { return GET_BLOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ERRORS", function() { return SET_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING_UI", function() { return LOADING_UI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_ERRORS", function() { return CLEAR_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING_DATA", function() { return LOADING_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOP_LOADING_UI", function() { return STOP_LOADING_UI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_BLOG", function() { return SET_BLOG; });
//User Reducer
const SET_AUTHENTICATED = 'SET_AUTHENTICATED';
const SET_UNAUTHENTICATED = 'SET_UNAUTHENTICATED';
const SET_USER = 'SET_USER';
const LOADING_USER = 'LOADING_USER'; //Blog reducer

const POST_BLOG = 'POST_BLOG';
const POST_IMAGE = 'POST_IMAGE';
const GET_ALL_BLOG = 'GET_ALL_BLOG';
const SUBMIT_COMMENT = 'SUBMIT_COMMENT';
const DELETE_BLOG = 'DELETE_BLOG';
const GET_BLOG = 'GET_BLOG'; // UI reducer types

const SET_ERRORS = 'SET_ERRORS';
const LOADING_UI = 'LOADING_UI';
const CLEAR_ERRORS = 'CLEAR_ERRORS';
const LOADING_DATA = 'LOADING_DATA';
const STOP_LOADING_UI = 'STOP_LOADING_UI'; // Data Reducers

const SET_BLOG = 'SET_BLOG';

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/nprogress/nprogress.css":
/*!**********************************************!*\
  !*** ./node_modules/nprogress/nprogress.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Redux_Store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Redux/Store */ "./Redux/Store.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Redux_Types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Redux/Types */ "./Redux/Types.js");
/* harmony import */ var _Redux_Actions_userAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Redux/Actions/userAction */ "./Redux/Actions/userAction.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../theme */ "./theme.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! nprogress/nprogress.css */ "./node_modules/nprogress/nprogress.css");
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_18__);

var _jsxFileName = "C:\\Users\\Israel Oduguwa\\Desktop\\startup-server\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















 //nprogress module

 //styles of nprogress

const ISSERVER = true;

if (false) {}

next_router__WEBPACK_IMPORTED_MODULE_16___default.a.events.on('routeChangeStart', () => nprogress__WEBPACK_IMPORTED_MODULE_17___default.a.start());
next_router__WEBPACK_IMPORTED_MODULE_16___default.a.events.on('routeChangeComplete', () => nprogress__WEBPACK_IMPORTED_MODULE_17___default.a.done());
next_router__WEBPACK_IMPORTED_MODULE_16___default.a.events.on('routeChangeError', () => nprogress__WEBPACK_IMPORTED_MODULE_17___default.a.done());

class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
        store: _Redux_Store__WEBPACK_IMPORTED_MODULE_5__["default"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
            name: "viewport",
            content: "minimum-scale=1, initial-scale=1, width=device-width"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css",
            integrity: "sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2",
            crossorigin: "anonymous"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["ThemeProvider"], {
          theme: _theme__WEBPACK_IMPORTED_MODULE_14__["default"],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_12___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 6
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 1
    }, this);
  }

}

MyApp.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType.isRequired,
  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};

const makeStore = () => _Redux_Store__WEBPACK_IMPORTED_MODULE_5__["default"];

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6__["createWrapper"])(makeStore);
/* harmony default export */ __webpack_exports__["default"] = (wrapper.withRedux(MyApp)); // export default function MyApp(props) {
//   const { Component, pageProps } = props;
//   // React.useEffect(() => {
//   //   // Remove the server-side injected CSS.
//   //   const jssStyles = document.querySelector('#jss-server-side');
//   //   if (jssStyles) {
//   //     jssStyles.parentElement.removeChild(jssStyles);
//   //   }
//   // }, []);
//   return (
//     <React.Fragment>
//      <Provider store={initStore}>
//      <Head>
//         {/* <title>My page</title> */}
//         <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
//         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/>
//       </Head>
//       <ThemeProvider theme={theme}>
//         {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//         <CssBaseline />
//         <Component {...pageProps} />
//       </ThemeProvider>
//      </Provider>
//     </React.Fragment>
//   );
// }

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./theme.js":
/*!******************!*\
  !*** ./theme.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);
// export const light = {
//     palette: {
//     type: 'light',
//    main:{
//     secondary:"#f7588c",
//    }
//     }
//   } 
//   export const dark = {
//     palette: {
//     type: 'dark',
//     },
//   }

 // Create a theme instance.

const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  // palette: {
  //   primary: {
  //     main: '#556cd6',
  //   },
  //   secondary: {
  //     main: '#19857b',
  //   },
  //   error: {
  //     main: red.A400,
  //   },
  //   background: {
  //     default: 'red',
  //   },
  // },
  palette: {
    type: 'light',
    main: {
      secondary: "#f7588c"
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL1JlZHV4L0FjdGlvbnMvdXNlckFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9SZWR1eC9SZWR1Y2Vycy9kYXRhUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9SZWR1eC9SZWR1Y2Vycy91aVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vUmVkdXgvUmVkdWNlcnMvdXNlclJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vUmVkdXgvU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vUmVkdXgvVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiand0LWRlY29kZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibnByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsiY3JlYXRlVXNlciIsInVzZXJEYXRhIiwiUm91dGVyIiwiZGlzcGF0Y2giLCJ0eXBlIiwiTE9BRElOR19VSSIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInNldEF1dGhvcml6YXRpb25IZWFkZXIiLCJmaXJzdElkVG9rZW4iLCJzdG9yZVNlc3Npb25Ub2tlbiIsInJlZnJlc2hUb2tlbiIsImdldFVzZXJEYXRhIiwiQ0xFQVJfRVJST1JTIiwicHVzaCIsImNhdGNoIiwiZXJyIiwicmVzcG9uc2UiLCJlZGl0VXNlckRldGFpbHMiLCJ1c2VyRGV0YWlscyIsIkxPQURJTkdfVVNFUiIsImdldCIsIlNFVF9VU0VSIiwicGF5bG9hZCIsInJlZnJlc2hJZFRva2VuIiwic2Vzc2lvblRva2VuIiwiZ3JhbnRfdHlwZSIsInJlZnJlc2hfdG9rZW4iLCJhY2Nlc3NfdG9rZW4iLCJ0b2tlbiIsIkZCSWRUb2tlbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJsb2dvdXRVc2VyIiwicmVtb3ZlSXRlbSIsIlNFVF9VTkFVVEhFTlRJQ0FURUQiLCJpbml0aWFsU3RhdGUiLCJibG9ncyIsImJsb2ciLCJkZWxldGVNZXNzYWdlIiwibG9hZGluZyIsInN0YXRlIiwiYWN0aW9uIiwiTE9BRElOR19EQVRBIiwiR0VUX0FMTF9CTE9HIiwiR0VUX0JMT0ciLCJQT1NUX0JMT0ciLCJlcnJvcnMiLCJTRVRfRVJST1JTIiwiU1RPUF9MT0FESU5HX1VJIiwiYXV0aGVudGljYXRlZCIsImNyZWRlbnRpYWxzIiwibGlrZXMiLCJub3RpZmljYXRpb25zIiwiU0VUX0FVVEhFTlRJQ0FURUQiLCJtaWRkbGV3YXJlIiwidGh1bmsiLCJyZWR1Y2VycyIsImNvbWJpbmVSZWR1Y2VycyIsInVzZXIiLCJ1c2VyUmVkdWNlciIsImRhdGFSZWR1Y2VyIiwiVUkiLCJ1aVJlZHVjZXIiLCJpbml0U3RvcmUiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJQT1NUX0lNQUdFIiwiU1VCTUlUX0NPTU1FTlQiLCJERUxFVEVfQkxPRyIsIlNFVF9CTE9HIiwicGFnZVByb3BzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb21wb25lbnREaWRDYXRjaCIsInJlbmRlciIsIl9fTl9TU0ciLCJ1cmwiLCJjcmVhdGVVcmwiLCJBcHAiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwid2FybkNvbnRhaW5lciIsIndhcm5VcmwiLCJwIiwiYmFjayIsInJvdXRlciIsInB1c2hUbyIsInB1c2hSb3V0ZSIsImFzIiwicHVzaFVybCIsInJlcGxhY2UiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwiSVNTRVJWRVIiLCJldmVudHMiLCJvbiIsIk5Qcm9ncmVzcyIsInN0YXJ0IiwiZG9uZSIsIk15QXBwIiwiY29tcG9uZW50RGlkTW91bnQiLCJqc3NTdHlsZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJwcm9wcyIsInRoZW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwib2JqZWN0IiwibWFrZVN0b3JlIiwid3JhcHBlciIsImNyZWF0ZVdyYXBwZXIiLCJ3aXRoUmVkdXgiLCJjcmVhdGVNdWlUaGVtZSIsInBhbGV0dGUiLCJtYWluIiwic2Vjb25kYXJ5Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsK0Q7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxNQUFNQSxVQUFVLEdBQUcsQ0FBRUMsUUFBRixFQUFZQyxNQUFaLEtBQXdCLE1BQU9DLFFBQVAsSUFBbUI7QUFDakVBLFVBQVEsQ0FBQztBQUFDQyxRQUFJLEVBQUNDLGlEQUFVQTtBQUFoQixHQUFELENBQVI7QUFDQUMsOENBQUssQ0FBQ0MsSUFBTixDQUFXLGlGQUFYLEVBQThGTixRQUE5RixF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Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaklBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0NBR0E7O0FBQ0EsTUFBTVEsS0FBSyxHQUFHVSwrRUFBYyxDQUFDO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsU0FBTyxFQUFFO0FBQ0g5SCxRQUFJLEVBQUUsT0FESDtBQUVKK0gsUUFBSSxFQUFDO0FBQ0pDLGVBQVMsRUFBQztBQUROO0FBRkQ7QUFma0IsQ0FBRCxDQUE1QjtBQXVCZWIsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0EsMEQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IHsgU0VUX1VTRVIsIExPQURJTkdfVUksIExPQURJTkdfVVNFUiwgQ0xFQVJfRVJST1JTLCBTRVRfRVJST1JTLCBTRVRfVU5BVVRIRU5USUNBVEVEIH0gZnJvbSBcIi4uL1R5cGVzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVVc2VyID0gKCB1c2VyRGF0YSwgUm91dGVyICkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PntcclxuICAgIGRpc3BhdGNoKHt0eXBlOkxPQURJTkdfVUl9KTtcclxuICAgIGF4aW9zLnBvc3QoJ2h0dHBzOi8vdXMtY2VudHJhbDEtcmVzdW1lLWJ1aWxkZXItc3RhcnR1cC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpL2NyZWF0ZUFjY291bnQnLCB1c2VyRGF0YSlcclxuICAgIC50aGVuKChyZXMpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXHJcbiAgICAgICAgc2V0QXV0aG9yaXphdGlvbkhlYWRlcihyZXMuZGF0YS5maXJzdElkVG9rZW4pO1xyXG4gICAgICAgIHN0b3JlU2Vzc2lvblRva2VuKHJlcy5kYXRhLnJlZnJlc2hUb2tlbilcclxuICAgICAgICBkaXNwYXRjaChnZXRVc2VyRGF0YSgpKTtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IENMRUFSX0VSUk9SU30pO1xyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vcHJvZmlsZScpO1xyXG4gICAgICAgIGRpc3BhdGNoKGdldFVzZXJEYXRhKCkpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YSlcclxuICAgICAgICAvLyBkaXNwYXRjaCh7XHJcbiAgICAgICAgLy8gIHR5cGU6IFNFVF9FUlJPUlMsXHJcbiAgICAgICAgLy8gIHBheWxvYWQ6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgLy8gfSlcclxuICAgICB9KTtcclxufVxyXG5leHBvcnQgY29uc3QgZWRpdFVzZXJEZXRhaWxzID0gKHVzZXJEZXRhaWxzKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6IExPQURJTkdfVVNFUiB9KTtcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwczovL3VzLWNlbnRyYWwxLXJlc3VtZS1idWlsZGVyLXN0YXJ0dXAuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS91c2VyJywgdXNlckRldGFpbHMpICAgICAgXHJcbiAgICAgICAgZGlzcGF0Y2goZ2V0VXNlckRhdGEoKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICB9O1xyXG5cclxuLy9UaGlzIHdpbGwgZmV0Y2ggYWxsIHRoZSB1c2VyIElOZm8gZnJvbSB0aGUgRGF0YUJhc2VcclxuZXhwb3J0IGNvbnN0IGdldFVzZXJEYXRhID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IExPQURJTkdfVVNFUn0pXHJcbiAgYXhpb3MuZ2V0KCdodHRwczovL3VzLWNlbnRyYWwxLXJlc3VtZS1idWlsZGVyLXN0YXJ0dXAuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS91c2VyJykgICAgIFxyXG4gIC50aGVuKChyZXMpID0+e1xyXG4gICAgICBcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBTRVRfVVNFUixcclxuICAgICAgICBwYXlsb2FkOiByZXMuZGF0YVxyXG4gICAgfSlcclxuICB9KVxyXG4gIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gICBcclxufVxyXG4vL1RoaXMgd2lsbCByZWZyZXNoIHRoZSBhY3Nlc3MgdG9la21cclxuZXhwb3J0IGNvbnN0IHJlZnJlc2hJZFRva2VuID0gKHNlc3Npb25Ub2tlbikgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PntcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYGh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlYXBpcy5jb20vdjEvdG9rZW4/a2V5PUFJemFTeUJvSXlRcXpfOHlLVUZ4akpPN2pxQlpXRXNsQzdqZTdVNGAsXHJcbiAgICB7XHJcbiAgICAgICAgZ3JhbnRfdHlwZTpcInJlZnJlc2hfdG9rZW5cIiwgICAgICAgIFxyXG4gICAgICAgIHJlZnJlc2hfdG9rZW46c2Vzc2lvblRva2VuXHJcbiAgICB9XHJcbiAgICApICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLmFjY2Vzc190b2tlbilcclxuICAgICAgICBzZXRBdXRob3JpemF0aW9uSGVhZGVyKHJlcy5kYXRhLmFjY2Vzc190b2tlbilcclxuICAgICAgICBkaXNwYXRjaChnZXRVc2VyRGF0YSgpKTtcclxuICAgIFxyXG4gICAgLy8gLmNhdGNoKChlcnIpID0+e1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgIC8vIH0pXHJcbn1cclxuLy9TZXQgdGhlIEF1dGhvcml6YXRpb25oZWFkZXIgZm9yIHRoZSBKd3QgdG9rZW4gYW5kIHVzZXIgcGVybWlzc3Npb1xyXG5cclxuY29uc3Qgc2V0QXV0aG9yaXphdGlvbkhlYWRlciA9ICh0b2tlbikgPT4ge1xyXG4gICAgY29uc3QgRkJJZFRva2VuID0gYEJlYXJlciAke3Rva2VufWA7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnRkJJZFRva2VuJywgRkJJZFRva2VuKTtcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSBGQklkVG9rZW47XHJcbiAgfTtcclxuY29uc3Qgc3RvcmVTZXNzaW9uVG9rZW4gPSAoc2Vzc2lvblRva2VuKSA9PntcclxuICAgIGNvbnN0IHJlZnJlc2hUb2tlbiA9IHNlc3Npb25Ub2tlbjtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZWZyZXNoVG9rZW4nLCByZWZyZXNoVG9rZW4pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRVc2VyID0gKFJvdXRlcikgPT4gKGRpc3BhdGNoKSA9PntcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdGQklkVG9rZW4nKTsgXHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncmVmcmVzaFRva2VuJyk7XHJcbiAgICBkZWxldGUgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXTtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogU0VUX1VOQVVUSEVOVElDQVRFRCB9KTtcclxuICAgIFJvdXRlci5wdXNoKCcvJyk7XHJcbn1cclxuXHJcbi8vIFVwZGF0ZSBVc2VyIEFDY291bnRcclxuXHJcbiIsImltcG9ydCB7XHJcbiAgICBHRVRfQUxMX0JMT0csXHJcbiAgICAvLyBMSUtFX1RJTUVMSU5FLFxyXG4gICAgLy8gVU5MSUtFX1RJTUVMSU5FLFxyXG4gICAgTE9BRElOR19EQVRBLFxyXG4gICAgU1VCTUlUX0NPTU1FTlQsXHJcbiAgICBQT1NUX0JMT0csICAgIFxyXG4gICAgLy8gREVMRVRFX0JMT0dcclxuICAgIC8vIFNVQk1JVF9DT01NRU5ULFxyXG4gICAgR0VUX0JMT0dcclxuICB9IGZyb20gJy4uL1R5cGVzJztcclxuICBcclxuICBjb25zdCBpbml0aWFsU3RhdGUgPSB7ICBcclxuICAgICAgYmxvZ3M6W10sXHJcbiAgICBibG9nOnt9LFxyXG4gICAgZGVsZXRlTWVzc2FnZTp7fSxcclxuICAgICAgbG9hZGluZzogZmFsc2VcclxuICB9O1xyXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBMT0FESU5HX0RBVEE6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgIGNhc2UgR0VUX0FMTF9CTE9HOlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGJsb2dzOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgICAgY2FzZSBHRVRfQkxPRzpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBibG9nOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH07XHJcbiAgICAvLyAgIGNhc2UgUE9TVF9JTUFHRTpcclxuICAgIC8vICAgICByZXR1cm4ge1xyXG4gICAgLy8gICAgICAgLi4uc3RhdGUsXHJcbiAgICAvLyAgICAgICBwb3N0SW1hZ2U6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAvLyAgICAgfTtcclxuLy8gICAgICAgICBjYXNlIExJS0VfVElNRUxJTkU6XHJcbi8vICAgICAgICAgY2FzZSBVTkxJS0VfVElNRUxJTkU6XHJcbi8vICAgICAgICAgICBsZXQgaW5kZXggPSBzdGF0ZS50aW1lbGluZXMuZmluZEluZGV4KFxyXG4vLyAgICAgICAgICAgICAodGltZWxpbmUpID0+IHRpbWVsaW5lLnRpbWVsaW5lSWQgPT09IGFjdGlvbi5wYXlsb2FkLnRpbWVsaW5lSWRcclxuLy8gICAgICAgICAgICk7XHJcbi8vICAgICAgICAgICBzdGF0ZS50aW1lbGluZXNbaW5kZXhdID0gYWN0aW9uLnBheWxvYWQ7XHJcbi8vICAgICAgICAgICBpZiAoc3RhdGUudGltZWxpbmUudGltZWxpbmVJZCA9PT0gYWN0aW9uLnBheWxvYWQudGltZWxpbmVJZCkge1xyXG4vLyAgICAgICAgICAgICBsZXQgdGVtcCA9IHN0YXRlLnRpbWVsaW5lLmNvbW1lbnRzO1xyXG4vLyAgICAgICAgICAgICBzdGF0ZS50aW1lbGluZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4vLyAgICAgICAgICAgICBzdGF0ZS50aW1lbGluZS5jb21tZW50cyA9IHRlbXBcclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAuLi5zdGF0ZVxyXG4vLyAgICAgICB9O1xyXG4gIC8vICAgY2FzZSBERUxFVEVfVElNRUxJTkU6XHJcbiAgLy8gICAgIHJldHVybiB7XHJcbiAgLy8gICAgICAgLi4uc3RhdGUsXHJcbiAgLy8gICAgICAgYmxvZ3M6IHN0YXRlLnRpbWVsaW5lcy5maWx0ZXIoKHRpbWVsaW5lKSA9PiB0aW1lbGluZS50aW1lbGluZUlkICE9PSBhY3Rpb24ucGF5bG9hZCApXHJcbiAgLy8gIH07XHJcbiAgICBjYXNlIFBPU1RfQkxPRzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBibG9nczogW2FjdGlvbi5wYXlsb2FkLCBcclxuICAgICAgICAgIC4uLnN0YXRlLmJsb2dzXVxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTRVRfRVJST1JTLCBDTEVBUl9FUlJPUlMsIExPQURJTkdfVUksICBTVE9QX0xPQURJTkdfVUkgfSBmcm9tIFwiLi4vVHlwZXNcIjsgXHJcbiBcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbG9hZGluZyA6ZmFsc2UsXHJcbiAgICBlcnJvcnM6IG51bGxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pe1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIFNFVF9FUlJPUlM6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBlcnJvcnM6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBDTEVBUl9FUlJPUlM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAgXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcnM6bnVsbFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIExPQURJTkdfVUk6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6dHJ1ZSwgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFNUT1BfTE9BRElOR19VSTpcclxuICAgICAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOmZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnR7IFNFVF9BVVRIRU5USUNBVEVELCBTRVRfVU5BVVRIRU5USUNBVEVELFNFVF9VU0VSLCBMT0FESU5HX1VTRVIgfSBmcm9tIFwiLi4vVHlwZXNcIjtcclxuXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBhdXRoZW50aWNhdGVkOiBmYWxzZSxcclxuICAgIGxvYWRpbmc6ZmFsc2UsXHJcbiAgICBjcmVkZW50aWFsczoge30sXHJcbiAgICBsaWtlczogW10sXHJcbiAgICBub3RpZmljYXRpb25zOltdXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbil7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgU0VUX0FVVEhFTlRJQ0FURUQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICBhdXRoZW50aWNhdGVkOiB0cnVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICBjYXNlIFNFVF9VTkFVVEhFTlRJQ0FURUQ6XHJcbiAgICAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuICAgICAgICBjYXNlIFNFVF9VU0VSOlxyXG4gICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgIGxvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICBjYXNlIExPQURJTkdfVVNFUjpcclxuICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgbG9hZGluZzp0cnVlfSAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXHJcbmltcG9ydCB7IFxyXG4gICAgY3JlYXRlU3RvcmUsIFxyXG4gICAgY29tYmluZVJlZHVjZXJzLCBcclxuICAgIGFwcGx5TWlkZGxld2FyZSwgXHJcbiAgICAgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuaW1wb3J0IHVzZXJSZWR1Y2VyIGZyb20gXCIuL1JlZHVjZXJzL3VzZXJSZWR1Y2VyXCI7XHJcbmltcG9ydCBkYXRhUmVkdWNlciBmcm9tIFwiLi9SZWR1Y2Vycy9kYXRhUmVkdWNlclwiO1xyXG5pbXBvcnQgdWlSZWR1Y2VyIGZyb20gXCIuL1JlZHVjZXJzL3VpUmVkdWNlclwiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XHJcbmNvbnN0IG1pZGRsZXdhcmUgPSBbdGh1bmtdO1xyXG5jb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICB1c2VyOiB1c2VyUmVkdWNlcixcclxuICAgIGRhdGE6ZGF0YVJlZHVjZXIsXHJcbiAgICBVSTp1aVJlZHVjZXIsXHJcbn0pO1xyXG5cclxuY29uc3QgaW5pdFN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMsIGluaXRpYWxTdGF0ZSwgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXRTdG9yZSIsIi8vVXNlciBSZWR1Y2VyXHJcbmV4cG9ydCBjb25zdCBTRVRfQVVUSEVOVElDQVRFRCA9ICdTRVRfQVVUSEVOVElDQVRFRCc7XHJcbmV4cG9ydCBjb25zdCBTRVRfVU5BVVRIRU5USUNBVEVEID0gJ1NFVF9VTkFVVEhFTlRJQ0FURUQnO1xyXG5leHBvcnQgY29uc3QgU0VUX1VTRVIgPSAnU0VUX1VTRVInO1xyXG5leHBvcnQgY29uc3QgTE9BRElOR19VU0VSID0gJ0xPQURJTkdfVVNFUic7XHJcbi8vQmxvZyByZWR1Y2VyXHJcbmV4cG9ydCBjb25zdCBQT1NUX0JMT0cgPSdQT1NUX0JMT0cnO1xyXG5leHBvcnQgY29uc3QgUE9TVF9JTUFHRSA9ICdQT1NUX0lNQUdFJztcclxuZXhwb3J0IGNvbnN0IEdFVF9BTExfQkxPRyA9ICdHRVRfQUxMX0JMT0cnO1xyXG5leHBvcnQgY29uc3QgU1VCTUlUX0NPTU1FTlQgPSAnU1VCTUlUX0NPTU1FTlQnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX0JMT0cgPSdERUxFVEVfQkxPRyc7XHJcbmV4cG9ydCBjb25zdCBHRVRfQkxPRyA9ICdHRVRfQkxPRyc7XHJcblxyXG4vLyBVSSByZWR1Y2VyIHR5cGVzXHJcbmV4cG9ydCBjb25zdCBTRVRfRVJST1JTID0gJ1NFVF9FUlJPUlMnO1xyXG5leHBvcnQgY29uc3QgTE9BRElOR19VSSA9ICdMT0FESU5HX1VJJztcclxuZXhwb3J0IGNvbnN0IENMRUFSX0VSUk9SUyA9ICdDTEVBUl9FUlJPUlMnO1xyXG5leHBvcnQgY29uc3QgTE9BRElOR19EQVRBID0gJ0xPQURJTkdfREFUQSc7XHJcbmV4cG9ydCBjb25zdCBTVE9QX0xPQURJTkdfVUkgPSAnU1RPUF9MT0FESU5HX1VJJztcclxuLy8gRGF0YSBSZWR1Y2Vyc1xyXG5leHBvcnQgY29uc3QgU0VUX0JMT0cgPSAnU0VUX0JMT0cnOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxuICBOZXh0V2ViVml0YWxzTWV0cmljLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgeyBOZXh0V2ViVml0YWxzTWV0cmljIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwICBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBpbml0U3RvcmUgZnJvbSBcIi4uL1JlZHV4L1N0b3JlXCI7XG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgeyBTRVRfQVVUSEVOVElDQVRFRCB9IGZyb20gJy4uL1JlZHV4L1R5cGVzJztcbmltcG9ydCB7IHJlZnJlc2hJZFRva2VuLCBnZXRVc2VyRGF0YSB9IGZyb20gJy4uL1JlZHV4L0FjdGlvbnMvdXNlckFjdGlvbic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3RoZW1lJztcbmltcG9ydCBqd3REZWNvZGUgZnJvbSBcImp3dC1kZWNvZGVcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnOyAvL25wcm9ncmVzcyBtb2R1bGVcbmltcG9ydCAnbnByb2dyZXNzL25wcm9ncmVzcy5jc3MnOyAvL3N0eWxlcyBvZiBucHJvZ3Jlc3NcblxuY29uc3QgSVNTRVJWRVIgPSB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiO1xuXG5pZihwcm9jZXNzLmJyb3dzZXIpe1xuXG4gIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLkZCSWRUb2tlbjtcbiAgY29uc3Qgc2Vzc2lvblRva2VuID0gbG9jYWxTdG9yYWdlLnJlZnJlc2hUb2tlblxuICBpZiAodG9rZW4pe1xuICAgIGNvbnN0IGRlY29kZWRUb2tlbiA9IGp3dERlY29kZSh0b2tlbik7XG4gICAgaWYoZGVjb2RlZFRva2VuLmV4cCAqIDEwMDAgPCBEYXRlLm5vdygpKXtcbiAgICAgIGluaXRTdG9yZS5kaXNwYXRjaChyZWZyZXNoSWRUb2tlbihzZXNzaW9uVG9rZW4pKVxuICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPScvc2lnbmluJztcbiAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBVc2VyIGlzIFNpZ25lZCBpblwiKVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgaW5pdFN0b3JlLmRpc3BhdGNoKHsgdHlwZTpTRVRfQVVUSEVOVElDQVRFRH0pO1xuICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9IHRva2VuOyBcbiAgICAgIGNvbnNvbGUubG9nKFwiaGVyZVwiKVxuICAgICAgaW5pdFN0b3JlLmRpc3BhdGNoKGdldFVzZXJEYXRhKCkpICAgIFxuICAgIH1cbiAgfVxufVxuXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCkpO1xuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xuXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7ICBcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGNvbnN0IGpzc1N0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqc3Mtc2VydmVyLXNpZGUnKVxuICAgIGlmIChqc3NTdHlsZXMgJiYganNzU3R5bGVzLnBhcmVudE5vZGUpIHtcbiAgICAgIGpzc1N0eWxlcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGpzc1N0eWxlcylcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCl7XG4gICAgY29uc3Qge0NvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuKFxuPFJlYWN0LkZyYWdtZW50PlxuICAgICA8UHJvdmlkZXIgc3RvcmU9e2luaXRTdG9yZX0+XG4gICAgIDxIZWFkPlxuICAgICAgICB7LyogPHRpdGxlPk15IHBhZ2U8L3RpdGxlPiAqL31cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIm1pbmltdW0tc2NhbGU9MSwgaW5pdGlhbC1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDQuNS4zL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LVRYOHQyN0VjUkUzZS9paFU3em1ReFZuY0RBeTV1SUt6NHJFa2dJWGVNZWQ0TTBqbGZJRFB2ZzZ1cUtJMnhYcjJcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiLz5cbiAgICAgICBcbiAgICAgIDwvSGVhZD5cbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIHsvKiBDc3NCYXNlbGluZSBraWNrc3RhcnQgYW4gZWxlZ2FudCwgY29uc2lzdGVudCwgYW5kIHNpbXBsZSBiYXNlbGluZSB0byBidWlsZCB1cG9uLiAqL31cbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgPC9Qcm92aWRlcj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbiAgfVxufVxuXG5NeUFwcC5wcm9wVHlwZXMgPSB7XG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXG4gIHBhZ2VQcm9wczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcbmNvbnN0IG1ha2VTdG9yZSA9ICgpPT5pbml0U3RvcmVcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSk7XG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcClcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAocHJvcHMpIHtcbi8vICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gcHJvcHM7XG5cbi8vICAgLy8gUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbi8vICAgLy8gICAvLyBSZW1vdmUgdGhlIHNlcnZlci1zaWRlIGluamVjdGVkIENTUy5cbi8vICAgLy8gICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNzLXNlcnZlci1zaWRlJyk7XG4vLyAgIC8vICAgaWYgKGpzc1N0eWxlcykge1xuLy8gICAvLyAgICAganNzU3R5bGVzLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKTtcbi8vICAgLy8gICB9XG4vLyAgIC8vIH0sIFtdKTtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxSZWFjdC5GcmFnbWVudD5cbi8vICAgICAgPFByb3ZpZGVyIHN0b3JlPXtpbml0U3RvcmV9PlxuLy8gICAgICA8SGVhZD5cbi8vICAgICAgICAgey8qIDx0aXRsZT5NeSBwYWdlPC90aXRsZT4gKi99XG4vLyAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJtaW5pbXVtLXNjYWxlPTEsIGluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbi8vICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA0LjUuMy9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiIGludGVncml0eT1cInNoYTM4NC1UWDh0MjdFY1JFM2UvaWhVN3ptUXhWbmNEQXk1dUlLejRyRWtnSVhlTWVkNE0wamxmSURQdmc2dXFLSTJ4WHIyXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIi8+XG4gICAgICAgXG4vLyAgICAgICA8L0hlYWQ+XG4vLyAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuLy8gICAgICAgICB7LyogQ3NzQmFzZWxpbmUga2lja3N0YXJ0IGFuIGVsZWdhbnQsIGNvbnNpc3RlbnQsIGFuZCBzaW1wbGUgYmFzZWxpbmUgdG8gYnVpbGQgdXBvbi4gKi99XG4vLyAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxuLy8gICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4vLyAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4vLyAgICAgIDwvUHJvdmlkZXI+XG4vLyAgICAgPC9SZWFjdC5GcmFnbWVudD5cbi8vICAgKTtcbi8vIH0iLCIvLyBleHBvcnQgY29uc3QgbGlnaHQgPSB7XHJcbi8vICAgICBwYWxldHRlOiB7XHJcbi8vICAgICB0eXBlOiAnbGlnaHQnLFxyXG4vLyAgICBtYWluOntcclxuLy8gICAgIHNlY29uZGFyeTpcIiNmNzU4OGNcIixcclxuLy8gICAgfVxyXG4vLyAgICAgfVxyXG4gICBcclxuLy8gICB9IFxyXG4vLyAgIGV4cG9ydCBjb25zdCBkYXJrID0ge1xyXG4vLyAgICAgcGFsZXR0ZToge1xyXG4vLyAgICAgdHlwZTogJ2RhcmsnLFxyXG4vLyAgICAgfSxcclxuLy8gICB9XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IHJlZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycyc7XHJcblxyXG4vLyBDcmVhdGUgYSB0aGVtZSBpbnN0YW5jZS5cclxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcbiAgLy8gcGFsZXR0ZToge1xyXG4gIC8vICAgcHJpbWFyeToge1xyXG4gIC8vICAgICBtYWluOiAnIzU1NmNkNicsXHJcbiAgLy8gICB9LFxyXG4gIC8vICAgc2Vjb25kYXJ5OiB7XHJcbiAgLy8gICAgIG1haW46ICcjMTk4NTdiJyxcclxuICAvLyAgIH0sXHJcbiAgLy8gICBlcnJvcjoge1xyXG4gIC8vICAgICBtYWluOiByZWQuQTQwMCxcclxuICAvLyAgIH0sXHJcbiAgLy8gICBiYWNrZ3JvdW5kOiB7XHJcbiAgLy8gICAgIGRlZmF1bHQ6ICdyZWQnLFxyXG4gIC8vICAgfSxcclxuICAvLyB9LFxyXG4gIHBhbGV0dGU6IHtcclxuICAgICAgICB0eXBlOiAnbGlnaHQnLFxyXG4gICAgICAgbWFpbjp7XHJcbiAgICAgICAgc2Vjb25kYXJ5OlwiI2Y3NTg4Y1wiLFxyXG4gICAgICAgfVxyXG4gICAgICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqd3QtZGVjb2RlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnByb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9