"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Config = require("./Config.js");

var _Render = require("./Render.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ApiClient =
/*#__PURE__*/
function () {
  function ApiClient() {
    _classCallCheck(this, ApiClient);
  }

  _createClass(ApiClient, [{
    key: "LoadSources",
    value: function LoadSources() {
      var url = "https://newsapi.org/v2/sources";
      var req = new Request(url);
      fetch(req, {
        headers: {
          'X-Api-Key': _Config.apiKey
        }
      }).then(function (response) {
        response.json().then(function (obj) {
          var el = (0, _Render.showSources)(obj);
          (0, _Render.addEventToSource)(el);
        });
      });
    }
  }], [{
    key: "loadNewsBySource",
    value: function loadNewsBySource(source) {
      var url = "https://newsapi.org/v2/top-headlines?sources=".concat(source);
      var req = new Request(url);
      fetch(req, {
        headers: {
          'X-Api-Key': _Config.apiKey
        }
      }).then(function (response) {
        response.json().then(function (obj) {
          (0, _Render.showArticles)(obj);
        });
      });
    }
  }]);

  return ApiClient;
}();

exports.default = ApiClient;