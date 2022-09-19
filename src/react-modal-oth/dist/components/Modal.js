"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./style.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Modal = _ref => {
  let {
    icon,
    closeIcon,
    show,
    setShow,
    title,
    text
  } = _ref;
  const handleKeydown = (0, _react.useCallback)(e => {
    if (e.type === "click" || e.key === "Escape" || e.key === "Enter") {
      setShow(false);
    }
  }, []);
  (0, _react.useEffect)(() => {
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);
  return show && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "wrapper-modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-icon"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: icon,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("img", {
    className: "modal-close-icon",
    src: closeIcon,
    alt: "",
    onKeyPress: e => handleKeydown(e),
    onClick: e => handleKeydown(e)
  }), /*#__PURE__*/_react.default.createElement("h1", {
    className: "modal__title"
  }, title), /*#__PURE__*/_react.default.createElement("p", {
    className: "modal__text"
  }, text), /*#__PURE__*/_react.default.createElement("div", {
    className: "wrapper-btn"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn",
    onClick: e => handleKeydown(e)
  }, "OK", " ")))));
};

var _default = Modal;
exports.default = _default;