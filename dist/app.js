"use strict";

var _express = _interopRequireDefault(require("express"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _http = _interopRequireDefault(require("http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const port = process.env.PORT || '3000';

const server = _http.default.createServer(app);

app.set('port', port);
server.listen(port);
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use((0, _cookieParser.default)());
app.use(function (req, res) {
  res.status(404).end();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAudHMiXSwibmFtZXMiOlsiYXBwIiwicG9ydCIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIiwic2VydmVyIiwiaHR0cCIsImNyZWF0ZVNlcnZlciIsInNldCIsImxpc3RlbiIsInVzZSIsImV4cHJlc3MiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwicmVxIiwicmVzIiwic3RhdHVzIiwiZW5kIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUEsR0FBRyxHQUFHLHVCQUFaO0FBQ0EsTUFBTUMsSUFBWSxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBWixJQUFvQixNQUF6Qzs7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLGNBQUtDLFlBQUwsQ0FBa0JQLEdBQWxCLENBQWY7O0FBRUFBLEdBQUcsQ0FBQ1EsR0FBSixDQUFRLE1BQVIsRUFBZ0JQLElBQWhCO0FBQ0FJLE1BQU0sQ0FBQ0ksTUFBUCxDQUFjUixJQUFkO0FBRUFELEdBQUcsQ0FBQ1UsR0FBSixDQUFRQyxpQkFBUUMsSUFBUixFQUFSO0FBRUFaLEdBQUcsQ0FBQ1UsR0FBSixDQUFRQyxpQkFBUUUsVUFBUixDQUFtQjtBQUFFQyxFQUFBQSxRQUFRLEVBQUU7QUFBWixDQUFuQixDQUFSO0FBRUFkLEdBQUcsQ0FBQ1UsR0FBSixDQUFRLDRCQUFSO0FBRUFWLEdBQUcsQ0FBQ1UsR0FBSixDQUFRLFVBQVVLLEdBQVYsRUFBZUMsR0FBZixFQUFvQjtBQUN4QkEsRUFBQUEsR0FBRyxDQUFDQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsR0FBaEI7QUFDSCxDQUZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgY29va2llUGFyc2VyIGZyb20gJ2Nvb2tpZS1wYXJzZXInO1xuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCc7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmNvbnN0IHBvcnQ6IHN0cmluZyA9IHByb2Nlc3MuZW52LlBPUlQgfHwgJzMwMDAnO1xuY29uc3Qgc2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoYXBwKTtcblxuYXBwLnNldCgncG9ydCcsIHBvcnQpO1xuc2VydmVyLmxpc3Rlbihwb3J0KTtcblxuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XG5cbmFwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKTtcblxuYXBwLnVzZShjb29raWVQYXJzZXIoKSk7XG5cbmFwcC51c2UoZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gICAgcmVzLnN0YXR1cyg0MDQpLmVuZCgpO1xufSk7XG4iXX0=