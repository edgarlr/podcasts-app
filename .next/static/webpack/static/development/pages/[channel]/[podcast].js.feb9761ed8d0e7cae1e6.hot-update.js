webpackHotUpdate("static/development/pages/[channel]/[podcast].js",{

/***/ "./components/AudioControls.js":
/*!*************************************!*\
  !*** ./components/AudioControls.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AudioControls; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
var _jsxFileName = "/Users/edgarlopez/Code/courses/react/next/podcasts/components/AudioControls.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function AudioControls(_ref) {
  var clipSrc = _ref.clipSrc;
  return __jsx("div", {
    className: "jsx-1017501654" + " " + 'player',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("audio", {
    autoPlay: false,
    className: "jsx-1017501654",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("source", {
    src: clipSrc,
    type: "audio/mpeg",
    className: "jsx-1017501654",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-1017501654" + " " + 'main-player',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: "jsx-1017501654" + " " + 'controller-button',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdSkipPrevious"], {
    color: "white",
    size: "3em",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  })), __jsx("button", {
    className: "jsx-1017501654" + " " + 'play-button',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdPlayArrow"], {
    color: "white",
    size: "3em",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  })), __jsx("button", {
    className: "jsx-1017501654" + " " + 'controller-button',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdSkipNext"], {
    color: "white",
    size: "3em",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }))), __jsx("input", {
    type: "range",
    name: "progressbar",
    id: "pgrbar",
    className: "jsx-1017501654" + " " + 'slider',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-1017501654" + " " + 'progress-time',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1017501654",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "0:43"), __jsx("div", {
    className: "jsx-1017501654",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "0:43")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1017501654",
    __self: this
  }, ".slider.jsx-1017501654{-webkit-appearance:none;height:4px;background:#ffffff;width:100%;outline:none;-webkit-transition:0.2s;-webkit-transition:opacity 0.2s;transition:opacity 0.2s;}.slider.jsx-1017501654::-webkit-slider-thumb{-webkit-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;width:2.5em;height:2.5em;border-radius:50%;background:Blue;border:4px solid #131414;cursor:pointer;}.player.jsx-1017501654{height:auto;}.main-player.jsx-1017501654{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:10%;}.controller-button.jsx-1017501654{background:none;border:none;}.play-button.jsx-1017501654{width:72px;height:72px;border-radius:50%;border:1px solid white;background:none;}.control-bar.jsx-1017501654{height:4px;background:#5e5f5f;width:100%;position:relative;margin:16px 0;}.progress-bar.jsx-1017501654{position:absolute;height:4px;background:#ffffff;left:0;right:20%;}.payback-controller.jsx-1017501654{position:absolute;height:20px;width:20px;border-radius:50%;border:4px solid #131414;right:0;top:0;background:#fff;margin:-12px -12px;}.progress-time.jsx-1017501654{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:#979797;font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZGdhcmxvcGV6L0NvZGUvY291cnNlcy9yZWFjdC9uZXh0L3BvZGNhc3RzL2NvbXBvbmVudHMvQXVkaW9Db250cm9scy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ2tCLEFBR21DLEFBVUEsQUFXWixBQUdDLEFBTUcsQUFJTCxBQU9BLEFBT08sQUFPQSxBQVdMLFdBL0JELEFBT08sQ0FwQnJCLElBU2MsRUFrQkQsQUFPQyxLQXBCTSxDQW5DUCxBQVVLLElBcUJsQixDQWtCcUIsQ0FQUixBQWNBLEtBdkRRLE1BbUNJLEFBT0wsQUFjQSxPQVBYLE1BaERJLENBaURELElBUEksQUFjVyxLQXJCVCxDQWxDSCxBQWlEZixRQVBBLENBckIrQixBQTBDQyxJQTlETixFQWtDMUIsSUFxQlUsQ0FoREksT0FpRE4sS0FoRE8sQ0FpREcsSUF4RFEsUUFRTixJQWlEQyxjQWhESCxLQWlEbEIsV0FoRDJCLGNBVDNCLFdBVWlCLGVBQ2pCLEtBa0RnQixRQTFDSyxNQTJDSixlQUNqQix3RUEzQ29CLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvZWRnYXJsb3Blei9Db2RlL2NvdXJzZXMvcmVhY3QvbmV4dC9wb2RjYXN0cy9jb21wb25lbnRzL0F1ZGlvQ29udHJvbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBNZFBhdXNlLCBNZFBsYXlBcnJvdywgTWRTa2lwUHJldmlvdXMsIE1kU2tpcE5leHQgfSBmcm9tICdyZWFjdC1pY29ucy9tZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1ZGlvQ29udHJvbHMoe2NsaXBTcmN9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3BsYXllcic+XG4gICAgICA8YXVkaW8gYXV0b1BsYXk9e2ZhbHNlfT5cbiAgICAgICAgPHNvdXJjZSBzcmM9e2NsaXBTcmN9IHR5cGU9J2F1ZGlvL21wZWcnIC8+XG4gICAgICA8L2F1ZGlvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbi1wbGF5ZXInPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nY29udHJvbGxlci1idXR0b24nPlxuICAgICAgICAgIDxNZFNraXBQcmV2aW91cyBjb2xvcj0nd2hpdGUnIHNpemU9JzNlbScgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdwbGF5LWJ1dHRvbic+XG4gICAgICAgICAgPE1kUGxheUFycm93IGNvbG9yPSd3aGl0ZScgc2l6ZT0nM2VtJyAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2NvbnRyb2xsZXItYnV0dG9uJz5cbiAgICAgICAgICA8TWRTa2lwTmV4dCBjb2xvcj0nd2hpdGUnIHNpemU9JzNlbScgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGlucHV0IHR5cGU9J3JhbmdlJyBuYW1lPSdwcm9ncmVzc2JhcicgaWQ9J3BncmJhcicgY2xhc3NOYW1lPSdzbGlkZXInIC8+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9J2NvbnRyb2wtYmFyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2dyZXNzLWJhcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheWJhY2stY29udHJvbGxlcicgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4gKi99XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9ncmVzcy10aW1lJz5cbiAgICAgICAgPGRpdj4wOjQzPC9kaXY+XG4gICAgICAgIDxkaXY+MDo0MzwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnNsaWRlciB7XG4gICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIHdpZHRoOiAyLjVlbTtcbiAgICAgICAgICBoZWlnaHQ6IDIuNWVtO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBCbHVlO1xuICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICMxMzE0MTQ7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBsYXllciB7XG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5tYWluLXBsYXllciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgICAgICAgfVxuICAgICAgICAuY29udHJvbGxlci1idXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5wbGF5LWJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGg6IDcycHg7XG4gICAgICAgICAgaGVpZ2h0OiA3MnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5jb250cm9sLWJhciB7XG4gICAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzVlNWY1ZjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgLnByb2dyZXNzLWJhciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMjAlO1xuICAgICAgICB9XG4gICAgICAgIC5wYXliYWNrLWNvbnRyb2xsZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICMxMzE0MTQ7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgbWFyZ2luOiAtMTJweCAtMTJweDtcbiAgICAgICAgfVxuICAgICAgICAucHJvZ3Jlc3MtdGltZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgY29sb3I6ICM5Nzk3OTc7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/edgarlopez/Code/courses/react/next/podcasts/components/AudioControls.js */"));
}

/***/ })

})
//# sourceMappingURL=[podcast].js.feb9761ed8d0e7cae1e6.hot-update.js.map