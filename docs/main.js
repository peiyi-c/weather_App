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

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://weather_app/./src/scss/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n\n\nconst apiKey = {\"TERM_PROGRAM\":\"vscode\",\"NODE\":\"/Users/chenpennz/.nvm/versions/node/v19.7.0/bin/node\",\"INIT_CWD\":\"/Users/chenpennz/Projects/API_dump/20230708_weather_App \",\"NVM_CD_FLAGS\":\"\",\"SHELL\":\"/bin/bash\",\"TERM\":\"xterm-256color\",\"npm_config_metrics_registry\":\"https://registry.npmjs.org/\",\"TMPDIR\":\"/var/folders/dn/4_3cl3h15n700jj4rwr9_4_r0000gn/T/\",\"npm_config_global_prefix\":\"/Users/chenpennz/.nvm/versions/node/v19.7.0\",\"TERM_PROGRAM_VERSION\":\"1.81.1\",\"MallocNanoZone\":\"0\",\"ORIGINAL_XDG_CURRENT_DESKTOP\":\"undefined\",\"COLOR\":\"1\",\"npm_config_noproxy\":\"\",\"npm_config_local_prefix\":\"/Users/chenpennz/Projects/API_dump/20230708_weather_App \",\"USER\":\"chenpennz\",\"NVM_DIR\":\"/Users/chenpennz/.nvm\",\"COMMAND_MODE\":\"unix2003\",\"npm_config_globalconfig\":\"/Users/chenpennz/.nvm/versions/node/v19.7.0/etc/npmrc\",\"SSH_AUTH_SOCK\":\"/private/tmp/com.apple.launchd.zJ2JRZWw0F/Listeners\",\"__CF_USER_TEXT_ENCODING\":\"0x1F5:0x0:0x0\",\"npm_execpath\":\"/Users/chenpennz/.nvm/versions/node/v19.7.0/lib/node_modules/npm/bin/npm-cli.js\",\"PATH\":\"/Users/chenpennz/Projects/API_dump/20230708_weather_App /node_modules/.bin:/Users/chenpennz/Projects/API_dump/node_modules/.bin:/Users/chenpennz/Projects/node_modules/.bin:/Users/chenpennz/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/chenpennz/.nvm/versions/node/v19.7.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/chenpennz/.nvm/versions/node/v19.7.0/bin:/Users/chenpennz/bin:/usr/local/bin:/Users/chenpennz/.nvm/versions/node/v19.7.0/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin:/Users/chenpennz/.nvm/versions/node/v19.7.0/bin:/Users/chenpennz/bin\",\"npm_package_json\":\"/Users/chenpennz/Projects/API_dump/20230708_weather_App /package.json\",\"_\":\"/Users/chenpennz/Projects/API_dump/20230708_weather_App /node_modules/.bin/webpack\",\"npm_config_userconfig\":\"/Users/chenpennz/.npmrc\",\"npm_config_init_module\":\"/Users/chenpennz/.npm-init.js\",\"__CFBundleIdentifier\":\"com.microsoft.VSCode\",\"npm_command\":\"run-script\",\"PWD\":\"/Users/chenpennz/Projects/API_dump/20230708_weather_App \",\"npm_lifecycle_event\":\"build\",\"EDITOR\":\"vi\",\"npm_package_name\":\"weather_app\",\"LANG\":\"en_US.UTF-8\",\"XPC_FLAGS\":\"0x0\",\"VSCODE_GIT_ASKPASS_EXTRA_ARGS\":\"--ms-enable-electron-run-as-node\",\"npm_config_node_gyp\":\"/Users/chenpennz/.nvm/versions/node/v19.7.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js\",\"npm_package_version\":\"1.0.0\",\"XPC_SERVICE_NAME\":\"0\",\"HOME\":\"/Users/chenpennz\",\"SHLVL\":\"3\",\"VSCODE_GIT_ASKPASS_MAIN\":\"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js\",\"npm_config_cache\":\"/Users/chenpennz/.npm\",\"LOGNAME\":\"chenpennz\",\"npm_lifecycle_script\":\"webpack --watch\",\"VSCODE_GIT_IPC_HANDLE\":\"/var/folders/dn/4_3cl3h15n700jj4rwr9_4_r0000gn/T/vscode-git-35387d5738.sock\",\"NVM_BIN\":\"/Users/chenpennz/.nvm/versions/node/v19.7.0/bin\",\"npm_config_user_agent\":\"npm/9.5.0 node/v19.7.0 darwin x64 workspaces/false\",\"GIT_ASKPASS\":\"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh\",\"VSCODE_GIT_ASKPASS_NODE\":\"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)\",\"npm_node_execpath\":\"/Users/chenpennz/.nvm/versions/node/v19.7.0/bin/node\",\"npm_config_prefix\":\"/Users/chenpennz/.nvm/versions/node/v19.7.0\",\"COLORTERM\":\"truecolor\",\"apiKey\":\"088788039083216d262ca18141f64fd7\"}.apiKey;\nconst apiUrl = \"https://api.openweathermap.org/data/2.5/weather?units=metric&q=\";\n\n\nconst searchBox = document.querySelector('.search input')\nconst searchBtn = document.querySelector('.search button')\n\nconst error = document.querySelector('.error')\nconst weather = document.querySelector('.weather')\nconst weatherIcon = document.querySelector('.weather-icon')\n\nconst city = document.querySelector('.city')\nconst temp = document.querySelector('.temp')\nconst humidity = document.querySelector('.humidity')\nconst wind = document.querySelector('.wind')\n\n// Functions //\nasync function checkWeather(inputValue) {\n  const response = await fetch(apiUrl + inputValue + `&appid=${apiKey}`);\n  if (response.status === 404) {\n    hideWeather()\n    error.innerHTML = `<p>Cannot find \"${inputValue}\" : ( </p>`\n  } else {\n    let data = await response.json()\n    displayWeather(data)\n  }\n  searchBox.value = ''\n}\nfunction hideWeather() {\n  // error.style.display = 'block'\n  error.style.opacity = '1'\n  error.style.height = 'auto'\n  //weather.style.display = 'none'\n  weather.style.opacity = '0'\n  weather.style.height = '0'\n}\nfunction displayWeather(data) {\n  city.textContent = data.name;\n  temp.textContent = Math.round(data.main.temp) + ' °C'\n  humidity.textContent = data.main.humidity + ' %'\n  wind.textContent = data.wind.speed + ' km/h'\n\n  let weatherIcons = ['clear', 'clouds', 'drizzle', 'mist', 'rain', 'snow']\n  if (weatherIcons.includes(data.weather[0].main)) {\n    weatherIcon.src = 'images/' + data.weather[0].main + '.png'\n  }\n\n  //error.style.display = 'none'\n  error.style.opacity = '0'\n  error.style.height = '0'\n  //weather.style.display = 'block'\n  weather.style.opacity = '1'\n  weather.style.height = 'auto'\n\n\n}\n\n// Event Listeners //\nsearchBtn.addEventListener('click', () => {\n  //e.preventDefault()\n  checkWeather(searchBox.value)\n})\nsearchBox.addEventListener('keyup', searchByEnter)\nfunction searchByEnter(e) {\n  if (e.keyCode === 13) {\n    e.preventDefault()\n    searchBtn.click();\n  }\n}\n\n\n\n//# sourceURL=webpack://weather_app/./src/index.js?");

/***/ })

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;