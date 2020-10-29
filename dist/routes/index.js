"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();
/* GET home page. */


router.get('/', function (_req, res) {
  res.render('index', {
    title: 'Express'
  });
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvaW5kZXgudHMiXSwibmFtZXMiOlsicm91dGVyIiwiZXhwcmVzcyIsIlJvdXRlciIsImdldCIsIl9yZXEiLCJyZXMiLCJyZW5kZXIiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUEsTUFBTUEsTUFBTSxHQUFHQyxpQkFBUUMsTUFBUixFQUFmO0FBRUE7OztBQUNBRixNQUFNLENBQUNHLEdBQVAsQ0FBVyxHQUFYLEVBQWdCLFVBQVVDLElBQVYsRUFBZ0JDLEdBQWhCLEVBQXFCO0FBQ2pDQSxFQUFBQSxHQUFHLENBQUNDLE1BQUosQ0FBVyxPQUFYLEVBQW9CO0FBQUVDLElBQUFBLEtBQUssRUFBRTtBQUFULEdBQXBCO0FBQ0gsQ0FGRDtlQUllUCxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbi8qIEdFVCBob21lIHBhZ2UuICovXG5yb3V0ZXIuZ2V0KCcvJywgZnVuY3Rpb24gKF9yZXEsIHJlcykge1xuICAgIHJlcy5yZW5kZXIoJ2luZGV4JywgeyB0aXRsZTogJ0V4cHJlc3MnIH0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdfQ==