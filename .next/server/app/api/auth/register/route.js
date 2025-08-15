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
exports.id = "app/api/auth/register/route";
exports.ids = ["app/api/auth/register/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "perf_hooks":
/*!*****************************!*\
  !*** external "perf_hooks" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("perf_hooks");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fregister%2Froute&page=%2Fapi%2Fauth%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fregister%2Froute.ts&appDir=E%3A%5Cthinking%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cthinking&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fregister%2Froute&page=%2Fapi%2Fauth%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fregister%2Froute.ts&appDir=E%3A%5Cthinking%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cthinking&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_thinking_src_app_api_auth_register_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/register/route.ts */ \"(rsc)/./src/app/api/auth/register/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/register/route\",\n        pathname: \"/api/auth/register\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/register/route\"\n    },\n    resolvedPagePath: \"E:\\\\thinking\\\\src\\\\app\\\\api\\\\auth\\\\register\\\\route.ts\",\n    nextConfigOutput,\n    userland: E_thinking_src_app_api_auth_register_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/register/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGcmVnaXN0ZXIlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkZyZWdpc3RlciUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkZyZWdpc3RlciUyRnJvdXRlLnRzJmFwcERpcj1FJTNBJTVDdGhpbmtpbmclNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUUlM0ElNUN0aGlua2luZyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDSztBQUNsRjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2FnZ3JlZ2F0b3ItY2hhdC1mcm9udGVuZC8/MTkwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJFOlxcXFx0aGlua2luZ1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXHJlZ2lzdGVyXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL3JlZ2lzdGVyL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9yZWdpc3RlclwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9yZWdpc3Rlci9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkU6XFxcXHRoaW5raW5nXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxccmVnaXN0ZXJcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvcmVnaXN0ZXIvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fregister%2Froute&page=%2Fapi%2Fauth%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fregister%2Froute.ts&appDir=E%3A%5Cthinking%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cthinking&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/register/route.ts":
/*!********************************************!*\
  !*** ./src/app/api/auth/register/route.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n\n\n\nasync function POST(request) {\n    try {\n        const { name, email, password } = await request.json();\n        // 1. Validate input\n        if (!name || !email || !password) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(\"Missing name, email, or password\", {\n                status: 400\n            });\n        }\n        // 2. Check if user already exists\n        const existingUsers = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])`SELECT * FROM users WHERE email = ${email}`;\n        if (existingUsers.length > 0) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(\"User with this email already exists\", {\n                status: 409\n            });\n        }\n        // 3. Hash the password\n        const hashedPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hash(password, 10);\n        // 4. Insert the new user into the database\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])`\r\n      INSERT INTO users (email, name, password_hash) \r\n      VALUES (${email}, ${name}, ${hashedPassword})\r\n    `;\n        // Note: We need to add the password_hash column to our users table.\n        // I will provide the SQL command for that shortly.\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"User created successfully\"\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        console.error(\"Error in /api/auth/register:\", error);\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(\"Internal Server Error\", {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL3JlZ2lzdGVyL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMkM7QUFDaEI7QUFDRztBQUV2QixlQUFlRyxLQUFLQyxPQUFnQjtJQUN6QyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUcsTUFBTUgsUUFBUUksSUFBSTtRQUVwRCxvQkFBb0I7UUFDcEIsSUFBSSxDQUFDSCxRQUFRLENBQUNDLFNBQVMsQ0FBQ0MsVUFBVTtZQUNoQyxPQUFPLElBQUlQLHFEQUFZQSxDQUFDLG9DQUFvQztnQkFBRVMsUUFBUTtZQUFJO1FBQzVFO1FBRUEsa0NBQWtDO1FBQ2xDLE1BQU1DLGdCQUFnQixNQUFNVCxtREFBRyxDQUFDLGtDQUFrQyxFQUFFSyxNQUFNLENBQUM7UUFDM0UsSUFBSUksY0FBY0MsTUFBTSxHQUFHLEdBQUc7WUFDNUIsT0FBTyxJQUFJWCxxREFBWUEsQ0FBQyx1Q0FBdUM7Z0JBQUVTLFFBQVE7WUFBSTtRQUMvRTtRQUVBLHVCQUF1QjtRQUN2QixNQUFNRyxpQkFBaUIsTUFBTVYscURBQVcsQ0FBQ0ssVUFBVTtRQUVuRCwyQ0FBMkM7UUFDM0MsTUFBTU4sbURBQUcsQ0FBQzs7Y0FFQSxFQUFFSyxNQUFNLEVBQUUsRUFBRUQsS0FBSyxFQUFFLEVBQUVPLGVBQWU7SUFDOUMsQ0FBQztRQUVELG9FQUFvRTtRQUNwRSxtREFBbUQ7UUFFbkQsT0FBT1oscURBQVlBLENBQUNRLElBQUksQ0FBQztZQUFFTSxTQUFTO1FBQTRCLEdBQUc7WUFBRUwsUUFBUTtRQUFJO0lBRW5GLEVBQUUsT0FBT00sT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsZ0NBQWdDQTtRQUM5QyxPQUFPLElBQUlmLHFEQUFZQSxDQUFDLHlCQUF5QjtZQUFFUyxRQUFRO1FBQUk7SUFDakU7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2FnZ3JlZ2F0b3ItY2hhdC1mcm9udGVuZC8uL3NyYy9hcHAvYXBpL2F1dGgvcmVnaXN0ZXIvcm91dGUudHM/ZTgwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XHJcbmltcG9ydCBzcWwgZnJvbSAnQC9saWIvZGInO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG5cclxuICAgIC8vIDEuIFZhbGlkYXRlIGlucHV0XHJcbiAgICBpZiAoIW5hbWUgfHwgIWVtYWlsIHx8ICFwYXNzd29yZCkge1xyXG4gICAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcIk1pc3NpbmcgbmFtZSwgZW1haWwsIG9yIHBhc3N3b3JkXCIsIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gMi4gQ2hlY2sgaWYgdXNlciBhbHJlYWR5IGV4aXN0c1xyXG4gICAgY29uc3QgZXhpc3RpbmdVc2VycyA9IGF3YWl0IHNxbGBTRUxFQ1QgKiBGUk9NIHVzZXJzIFdIRVJFIGVtYWlsID0gJHtlbWFpbH1gO1xyXG4gICAgaWYgKGV4aXN0aW5nVXNlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcIlVzZXIgd2l0aCB0aGlzIGVtYWlsIGFscmVhZHkgZXhpc3RzXCIsIHsgc3RhdHVzOiA0MDkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gMy4gSGFzaCB0aGUgcGFzc3dvcmRcclxuICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEwKTtcclxuXHJcbiAgICAvLyA0LiBJbnNlcnQgdGhlIG5ldyB1c2VyIGludG8gdGhlIGRhdGFiYXNlXHJcbiAgICBhd2FpdCBzcWxgXHJcbiAgICAgIElOU0VSVCBJTlRPIHVzZXJzIChlbWFpbCwgbmFtZSwgcGFzc3dvcmRfaGFzaCkgXHJcbiAgICAgIFZBTFVFUyAoJHtlbWFpbH0sICR7bmFtZX0sICR7aGFzaGVkUGFzc3dvcmR9KVxyXG4gICAgYDtcclxuICAgIFxyXG4gICAgLy8gTm90ZTogV2UgbmVlZCB0byBhZGQgdGhlIHBhc3N3b3JkX2hhc2ggY29sdW1uIHRvIG91ciB1c2VycyB0YWJsZS5cclxuICAgIC8vIEkgd2lsbCBwcm92aWRlIHRoZSBTUUwgY29tbWFuZCBmb3IgdGhhdCBzaG9ydGx5LlxyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiVXNlciBjcmVhdGVkIHN1Y2Nlc3NmdWxseVwiIH0sIHsgc3RhdHVzOiAyMDEgfSk7XHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gL2FwaS9hdXRoL3JlZ2lzdGVyOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcIkludGVybmFsIFNlcnZlciBFcnJvclwiLCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwic3FsIiwiYmNyeXB0IiwiUE9TVCIsInJlcXVlc3QiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImpzb24iLCJzdGF0dXMiLCJleGlzdGluZ1VzZXJzIiwibGVuZ3RoIiwiaGFzaGVkUGFzc3dvcmQiLCJoYXNoIiwibWVzc2FnZSIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/register/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var postgres__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! postgres */ \"(rsc)/./node_modules/postgres/src/index.js\");\n\nif (!process.env.DATABASE_URL) {\n    throw new Error(\"DATABASE_URL is not set\");\n}\nconst sql = (0,postgres__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(process.env.DATABASE_URL, {\n    ssl: \"require\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sql);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWdDO0FBRWhDLElBQUksQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxZQUFZLEVBQUU7SUFDN0IsTUFBTSxJQUFJQyxNQUFNO0FBQ2xCO0FBRUEsTUFBTUMsTUFBTUwsb0RBQVFBLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWSxFQUFFO0lBQzdDRyxLQUFLO0FBQ1A7QUFFQSxpRUFBZUQsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FnZ3JlZ2F0b3ItY2hhdC1mcm9udGVuZC8uL3NyYy9saWIvZGIudHM/OWU0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcG9zdGdyZXMgZnJvbSAncG9zdGdyZXMnO1xyXG5cclxuaWYgKCFwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoJ0RBVEFCQVNFX1VSTCBpcyBub3Qgc2V0Jyk7XHJcbn1cclxuXHJcbmNvbnN0IHNxbCA9IHBvc3RncmVzKHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCwge1xyXG4gIHNzbDogJ3JlcXVpcmUnLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNxbDtcclxuIl0sIm5hbWVzIjpbInBvc3RncmVzIiwicHJvY2VzcyIsImVudiIsIkRBVEFCQVNFX1VSTCIsIkVycm9yIiwic3FsIiwic3NsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/postgres","vendor-chunks/bcryptjs"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fregister%2Froute&page=%2Fapi%2Fauth%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fregister%2Froute.ts&appDir=E%3A%5Cthinking%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cthinking&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();