"use strict";

var _ApiClient = _interopRequireDefault(require("./modules/ApiClient.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apiClient = new _ApiClient.default();
document.addEventListener('DOMContentLoaded', apiClient.LoadSources, false);