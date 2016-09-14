'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = _commander2.default.args; /* eslint-disable */


if (!name) {
  console.error('No name specified for new CMS');
}