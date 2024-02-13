"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist\\client\\components\\action-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist\\client\\components\\request-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!*********************************************************************************************!*\
  !*** external "next/dist\\client\\components\\static-generation-async-storage.external.js" ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\static-generation-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CMyProject%5Crestaurant-mafia%5Cfront-end%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CMyProject%5Crestaurant-mafia%5Cfront-end&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CMyProject%5Crestaurant-mafia%5Cfront-end%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CMyProject%5Crestaurant-mafia%5Cfront-end&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var C_MyProject_restaurant_mafia_front_end_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.js */ \"(rsc)/./app/api/auth/[...nextauth]/route.js\");\n\r\n// @ts-ignore this need to be imported from next/dist to be external\r\n\r\n\r\n// @ts-expect-error - replaced by webpack/turbopack loader\r\n\r\nconst AppRouteRouteModule = next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule;\r\n// We inject the nextConfigOutput here so that we can use them in the route\r\n// module.\r\nconst nextConfigOutput = \"\"\r\nconst routeModule = new AppRouteRouteModule({\r\n    definition: {\r\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\r\n        page: \"/api/auth/[...nextauth]/route\",\r\n        pathname: \"/api/auth/[...nextauth]\",\r\n        filename: \"route\",\r\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\r\n    },\r\n    resolvedPagePath: \"C:\\\\MyProject\\\\restaurant-mafia\\\\front-end\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.js\",\r\n    nextConfigOutput,\r\n    userland: C_MyProject_restaurant_mafia_front_end_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\r\n});\r\n// Pull out the exports that we need to expose from the module. This should\r\n// be eliminated when we've moved the other routes to the new format. These\r\n// are used to hook into the route.\r\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\r\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\r\n\r\n\r\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDTXlQcm9qZWN0JTVDcmVzdGF1cmFudC1tYWZpYSU1Q2Zyb250LWVuZCU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q015UHJvamVjdCU1Q3Jlc3RhdXJhbnQtbWFmaWElNUNmcm9udC1lbmQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDaEQ7QUFDMEY7QUFDM0I7QUFDL0Q7QUFDZ0g7QUFDaEgsNEJBQTRCLGdIQUEwQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNpSjtBQUNqSjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQtZW5kLz83MWUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIm5leHQvZGlzdC9zZXJ2ZXIvbm9kZS1wb2x5ZmlsbC1oZWFkZXJzXCI7XHJcbi8vIEB0cy1pZ25vcmUgdGhpcyBuZWVkIHRvIGJlIGltcG9ydGVkIGZyb20gbmV4dC9kaXN0IHRvIGJlIGV4dGVybmFsXHJcbmltcG9ydCAqIGFzIG1vZHVsZSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XHJcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XHJcbi8vIEB0cy1leHBlY3QtZXJyb3IgLSByZXBsYWNlZCBieSB3ZWJwYWNrL3R1cmJvcGFjayBsb2FkZXJcclxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXE15UHJvamVjdFxcXFxyZXN0YXVyYW50LW1hZmlhXFxcXGZyb250LWVuZFxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS5qc1wiO1xyXG5jb25zdCBBcHBSb3V0ZVJvdXRlTW9kdWxlID0gbW9kdWxlLkFwcFJvdXRlUm91dGVNb2R1bGU7XHJcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxyXG4vLyBtb2R1bGUuXHJcbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXHJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xyXG4gICAgZGVmaW5pdGlvbjoge1xyXG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXHJcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxyXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXHJcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcclxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcclxuICAgIH0sXHJcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXE15UHJvamVjdFxcXFxyZXN0YXVyYW50LW1hZmlhXFxcXGZyb250LWVuZFxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS5qc1wiLFxyXG4gICAgbmV4dENvbmZpZ091dHB1dCxcclxuICAgIHVzZXJsYW5kXHJcbn0pO1xyXG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcclxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXHJcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXHJcbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XHJcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XHJcbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCAgfTtcclxuXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CMyProject%5Crestaurant-mafia%5Cfront-end%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CMyProject%5Crestaurant-mafia%5Cfront-end&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.js":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ hendler),\n/* harmony export */   POST: () => (/* binding */ hendler)\n/* harmony export */ });\n/* harmony import */ var _dbConfig_dbConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/dbConfig/dbConfig */ \"(rsc)/./dbConfig/dbConfig.ts\");\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/userModel */ \"(rsc)/./models/userModel.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst hendler = next_auth__WEBPACK_IMPORTED_MODULE_2___default()({\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n            id: \"credentials\",\n            name: \"Credentials\",\n            async authorize (credentials) {\n                await (0,_dbConfig_dbConfig__WEBPACK_IMPORTED_MODULE_0__.connect)();\n                try {\n                    const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n                        email: credentials.email\n                    });\n                    if (user) {\n                        const isPasswordCorrect = await bcryptjs__WEBPACK_IMPORTED_MODULE_5__.bcrypt.compare(credentials.password, user.password);\n                        if (isPasswordCorrect) {\n                            return user;\n                        } else {\n                            throw new Error(\"Wrong Credentials!\");\n                        }\n                    } else {\n                        throw new Error(\"User not found!\");\n                    }\n                } catch (err) {\n                    throw new Error(err);\n                }\n            }\n        })\n    ]\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ1I7QUFDTDtBQUN1QjtBQUNVO0FBQ2hDO0FBRWxDLE1BQU1NLFVBQVVKLGdEQUFRQSxDQUFDO0lBQ3ZCSyxXQUFXO1FBQ1RKLHNFQUFjQSxDQUFDO1lBQ2JLLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUztZQUMvQkMsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxhQUFhO1FBQ3pDO1FBQ0FULDJFQUFtQkEsQ0FBQztZQUNsQlUsSUFBSTtZQUNKQyxNQUFNO1lBQ04sTUFBTUMsV0FBVUMsV0FBVztnQkFDekIsTUFBTWpCLDJEQUFPQTtnQkFFYixJQUFJO29CQUNGLE1BQU1rQixPQUFPLE1BQU1qQix5REFBSUEsQ0FBQ2tCLE9BQU8sQ0FBQzt3QkFDOUJDLE9BQU9ILFlBQVlHLEtBQUs7b0JBQzFCO29CQUVBLElBQUlGLE1BQU07d0JBQ1IsTUFBTUcsb0JBQW9CLE1BQU1oQiw0Q0FBTUEsQ0FBQ2lCLE9BQU8sQ0FDNUNMLFlBQVlNLFFBQVEsRUFDcEJMLEtBQUtLLFFBQVE7d0JBR2YsSUFBSUYsbUJBQW1COzRCQUNyQixPQUFPSDt3QkFDVCxPQUFPOzRCQUNMLE1BQU0sSUFBSU0sTUFBTTt3QkFDbEI7b0JBQ0YsT0FBTzt3QkFDTCxNQUFNLElBQUlBLE1BQU07b0JBQ2xCO2dCQUNGLEVBQUUsT0FBT0MsS0FBSztvQkFDWixNQUFNLElBQUlELE1BQU1DO2dCQUNsQjtZQUNGO1FBQ0Y7S0FDRDtBQUNIO0FBRTJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQtZW5kLy4vYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanM/ZGExYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcIkAvZGJDb25maWcvZGJDb25maWdcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSBcIkAvbW9kZWxzL3VzZXJNb2RlbFwiO1xyXG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XHJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XHJcbmltcG9ydCB7IGJjcnlwdCB9IGZyb20gXCJiY3J5cHRqc1wiO1xyXG5cclxuY29uc3QgaGVuZGxlciA9IE5leHRBdXRoKHtcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEdvb2dsZVByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9JRCxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfU0VDUkVULFxyXG4gICAgfSksXHJcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcclxuICAgICAgaWQ6IFwiY3JlZGVudGlhbHNcIixcclxuICAgICAgbmFtZTogXCJDcmVkZW50aWFsc1wiLFxyXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcclxuICAgICAgICBhd2FpdCBjb25uZWN0KCk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHtcclxuICAgICAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsLFxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgaXNQYXNzd29yZENvcnJlY3QgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShcclxuICAgICAgICAgICAgICBjcmVkZW50aWFscy5wYXNzd29yZCxcclxuICAgICAgICAgICAgICB1c2VyLnBhc3N3b3JkXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNQYXNzd29yZENvcnJlY3QpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXcm9uZyBDcmVkZW50aWFscyFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVzZXIgbm90IGZvdW5kIVwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IHsgaGVuZGxlciBhcyBQT1NULCBoZW5kbGVyIGFzIEdFVCB9O1xyXG4iXSwibmFtZXMiOlsiY29ubmVjdCIsIlVzZXIiLCJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsImJjcnlwdCIsImhlbmRsZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfU0VDUkVUIiwiaWQiLCJuYW1lIiwiYXV0aG9yaXplIiwiY3JlZGVudGlhbHMiLCJ1c2VyIiwiZmluZE9uZSIsImVtYWlsIiwiaXNQYXNzd29yZENvcnJlY3QiLCJjb21wYXJlIiwicGFzc3dvcmQiLCJFcnJvciIsImVyciIsIlBPU1QiLCJHRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./dbConfig/dbConfig.ts":
/*!******************************!*\
  !*** ./dbConfig/dbConfig.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connect: () => (/* binding */ connect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connect() {\n    try {\n        mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI);\n        const connection = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection);\n        connection.on(\"connection\", ()=>{\n            console.log(\"MongoDB connected successfully\");\n        });\n        connection.on(\"error\", (err)=>{\n            console.log(\"MongoDB connection error\" + err);\n            process.exit();\n        });\n    } catch (error) {\n        console.log(error);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9kYkNvbmZpZy9kYkNvbmZpZy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFekIsZUFBZUM7SUFDcEIsSUFBSTtRQUNGRCx1REFBZ0IsQ0FBQ0UsUUFBUUMsR0FBRyxDQUFDQyxTQUFTO1FBQ3RDLE1BQU1DLGFBQWFMLDREQUFtQjtRQUV0Q0ssV0FBV0MsRUFBRSxDQUFDLGNBQWM7WUFDMUJDLFFBQVFDLEdBQUcsQ0FBQztRQUNkO1FBRUFILFdBQVdDLEVBQUUsQ0FBQyxTQUFTLENBQUNHO1lBQ3RCRixRQUFRQyxHQUFHLENBQUMsNkJBQTZCQztZQUN6Q1AsUUFBUVEsSUFBSTtRQUNkO0lBQ0YsRUFBRSxPQUFPQyxPQUFPO1FBQ2RKLFFBQVFDLEdBQUcsQ0FBQ0c7SUFDZDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQtZW5kLy4vZGJDb25maWcvZGJDb25maWcudHM/M2JlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdCgpIHtcclxuICB0cnkge1xyXG4gICAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkkhKTtcclxuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBtb25nb29zZS5jb25uZWN0aW9uO1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub24oXCJjb25uZWN0aW9uXCIsICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJNb25nb0RCIGNvbm5lY3RlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9uKFwiZXJyb3JcIiwgKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIk1vbmdvREIgY29ubmVjdGlvbiBlcnJvclwiICsgZXJyKTtcclxuICAgICAgcHJvY2Vzcy5leGl0KCk7XHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSSSIsImNvbm5lY3Rpb24iLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJleGl0IiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./dbConfig/dbConfig.ts\n");

/***/ }),

/***/ "(rsc)/./models/userModel.js":
/*!*****************************!*\
  !*** ./models/userModel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema({\n    username: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    isVerified: {\n        type: Boolean,\n        default: false\n    },\n    forgotPasswordToken: String,\n    forgotPasswordTokenExpiry: Date,\n    verifyToken: String,\n    verifyTokenExpiry: Date\n}, {\n    timestamps: true\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).users || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"users\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvdXNlck1vZGVsLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxhQUFhRCxzREFBZSxDQUNoQztJQUNFRyxVQUFVO1FBQ1JDLE1BQU1DO1FBQ05DLFVBQVU7SUFDWjtJQUNBQyxPQUFPO1FBQ0xILE1BQU1DO1FBQ05DLFVBQVU7UUFDVkUsUUFBUTtJQUNWO0lBQ0FDLFVBQVU7UUFDUkwsTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FJLFlBQVk7UUFDVk4sTUFBTU87UUFDTkMsU0FBUztJQUNYO0lBQ0FDLHFCQUFxQlI7SUFDckJTLDJCQUEyQkM7SUFDM0JDLGFBQWFYO0lBQ2JZLG1CQUFtQkY7QUFDckIsR0FDQTtJQUFFRyxZQUFZO0FBQUs7QUFHckIsTUFBTUMsT0FBT25CLHdEQUFlLENBQUNxQixLQUFLLElBQUlyQixxREFBYyxDQUFDLFNBQVNDO0FBRTlELGlFQUFla0IsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250LWVuZC8uL21vZGVscy91c2VyTW9kZWwuanM/OTYxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCB1c2VyU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hKFxyXG4gIHtcclxuICAgIHVzZXJuYW1lOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgZW1haWw6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHBhc3N3b3JkOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgaXNWZXJpZmllZDoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBmb3Jnb3RQYXNzd29yZFRva2VuOiBTdHJpbmcsXHJcbiAgICBmb3Jnb3RQYXNzd29yZFRva2VuRXhwaXJ5OiBEYXRlLFxyXG4gICAgdmVyaWZ5VG9rZW46IFN0cmluZyxcclxuICAgIHZlcmlmeVRva2VuRXhwaXJ5OiBEYXRlLFxyXG4gIH0sXHJcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cclxuKTtcclxuXHJcbmNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbHMudXNlcnMgfHwgbW9uZ29vc2UubW9kZWwoXCJ1c2Vyc1wiLCB1c2VyU2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInVzZXJTY2hlbWEiLCJTY2hlbWEiLCJ1c2VybmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwidW5pcXVlIiwicGFzc3dvcmQiLCJpc1ZlcmlmaWVkIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJmb3Jnb3RQYXNzd29yZFRva2VuIiwiZm9yZ290UGFzc3dvcmRUb2tlbkV4cGlyeSIsIkRhdGUiLCJ2ZXJpZnlUb2tlbiIsInZlcmlmeVRva2VuRXhwaXJ5IiwidGltZXN0YW1wcyIsIlVzZXIiLCJtb2RlbHMiLCJ1c2VycyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./models/userModel.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/bcryptjs","vendor-chunks/preact","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CMyProject%5Crestaurant-mafia%5Cfront-end%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CMyProject%5Crestaurant-mafia%5Cfront-end&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();