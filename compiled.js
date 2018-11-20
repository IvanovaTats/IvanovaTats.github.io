"use strict";

var _ApiClient = _interopRequireDefault(require("./modules/ApiClient.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apiClient = new _ApiClient.default();
document.addEventListener('DOMContentLoaded', apiClient.LoadSources, false);
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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiKey = void 0;
var apiKey = "5fb7dea8d7f440b1af9b7cd7cba9640d"; //"75f32e4838744d73b2a6392f4143f2e0";

exports.apiKey = apiKey;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showSources = showSources;
exports.showArticles = showArticles;
exports.addEventToSource = addEventToSource;

var _ApiClient = _interopRequireDefault(require("./ApiClient.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function showSources(obj) {
  var className = "sources";
  var el = document.getElementById(className);
  var src = obj[className];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = src[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var source = _step.value;
      var str = "<div class=\"".concat(className, "\" id=\"").concat(source.id, "\">").concat(source.name, "</div>");
      el.innerHTML += str;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  ;
  return el;
}

function showArticles(obj) {
  var className = "articles";
  var el = document.getElementById(className);
  var src = obj[className];
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = src[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var source = _step2.value;
      var str = "<a href=\"".concat(source.url, "\" class=\"").concat(className, "\">").concat(source.title, "</a>");
      el.innerHTML += str;
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  ;
}

function addEventToSource(el) {
  var className = "sources";
  var sources = el.getElementsByClassName(className);

  var _arr = Object.entries(sources);

  var _loop = function _loop() {
    var _arr$_i = _slicedToArray(_arr[_i], 2),
        index = _arr$_i[0],
        value = _arr$_i[1];

    value.addEventListener("click", function () {
      document.getElementById("articles").innerHTML = '';

      _ApiClient.default.loadNewsBySource(value.id);
    }, false);
  };

  for (var _i = 0; _i < _arr.length; _i++) {
    _loop();
  }

  ;
}
