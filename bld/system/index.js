'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

app.use('/admin', _express2.default.static(_path2.default.join(__dirname, 'admin')));

app.use('/cms-content', _express2.default.static(_path2.default.join(__dirname, 'cms-fs')));

app.use('/content', null);

app.listen(8080);