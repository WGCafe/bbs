"use strict";

var _lodash = _interopRequireDefault(require("lodash"));

var _print = _interopRequireDefault(require("./print.js"));

require("../styles/style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function component() {
  let element = document.createElement('div');
  let btn = document.createElement('button'); // Lodash, now imported by this script

  element.innerHTML = _lodash.default.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = _print.default;
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素

document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component(); // 重新渲染页面后，component 更新 click 事件处理

    document.body.appendChild(element);
  });
}