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
    className: "jsx-436067236" + " " + 'player',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("audio", {
    autoPlay: false,
    className: "jsx-436067236",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("source", {
    src: clipSrc,
    type: "audio/mpeg",
    className: "jsx-436067236",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-436067236" + " " + 'main-player',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: "jsx-436067236" + " " + 'controller-button',
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
    className: "jsx-436067236" + " " + 'play-button',
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
    className: "jsx-436067236" + " " + 'controller-button',
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
    className: "jsx-436067236" + " " + 'slider',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-436067236" + " " + 'progress-time',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-436067236",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "0:43"), __jsx("div", {
    className: "jsx-436067236",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "0:43")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "436067236",
    __self: this
  }, ".slider.jsx-436067236{-webkit-appearance:none;overflow:hidden;height:4px;background:#ffffff;width:100%;outline:none;-webkit-transition:0.2s;-webkit-transition:opacity 0.2s;transition:opacity 0.2s;}.slider.jsx-436067236::-webkit-slider-thumb{-webkit-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;width:2.5em;height:2.5em;border-radius:50%;background:Blue;border:4px solid #131414;cursor:pointer;}.slider.jsx-436067236::-webkit-slider-runnable-track{width:10px;-webkit-appearance:none;height:10px;cursor:ew-resize;background:#434343;box-shadow:-80px 0 0 80px #43e5f7;}.player.jsx-436067236{height:auto;}.main-player.jsx-436067236{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:10%;}.controller-button.jsx-436067236{background:none;border:none;}.play-button.jsx-436067236{width:72px;height:72px;border-radius:50%;border:1px solid white;background:none;}.control-bar.jsx-436067236{height:4px;background:#5e5f5f;width:100%;position:relative;margin:16px 0;}.progress-bar.jsx-436067236{position:absolute;height:4px;background:#ffffff;left:0;right:20%;}.payback-controller.jsx-436067236{position:absolute;height:20px;width:20px;border-radius:50%;border:4px solid #131414;right:0;top:0;background:#fff;margin:-12px -12px;}.progress-time.jsx-436067236{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:#979797;font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZGdhcmxvcGV6L0NvZGUvY291cnNlcy9yZWFjdC9uZXh0L3BvZGNhc3RzL2NvbXBvbmVudHMvQXVkaW9Db250cm9scy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ2tCLEFBR21DLEFBV0EsQUFVYixBQVNDLEFBR0MsQUFNRyxBQUlMLEFBT0EsQUFPTyxBQU9BLEFBV0wsV0FyRFcsQUFzQlosQUFPTyxDQXBCckIsSUFTYyxFQWtCRCxBQU9DLEtBcEJNLENBNUNGLEFBV0EsSUE2QmxCLENBa0JxQixDQVBSLEFBY0EsS0EzQ0MsS0FyQkQsQ0E0Q1ksQUFPTCxBQWNBLE1BM0NELENBb0NWLEdBekRZLElBMERULElBUEksQUFjVyxLQTNDTixBQXNCSCxDQWVsQixLQTFEYSxHQW1EYixDQXJCK0IsQUEwQ0MsTUE1QmhDLENBM0NlLEVBcUJxQixDQTJDMUIsQ0F4REksT0F5RE4sRUFoRWtCLEdBUVgsQ0F5REcsWUF4REUsSUF5REMsR0E3Q3JCLENBcEIwQixVQVNSLEtBeURsQixXQXhEMkIseUJBQ1YsS0FWakIsVUFXQSxLQTBEZ0IsUUExQ0ssTUEyQ0osZUFDakIsd0VBM0NvQixrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2VkZ2FybG9wZXovQ29kZS9jb3Vyc2VzL3JlYWN0L25leHQvcG9kY2FzdHMvY29tcG9uZW50cy9BdWRpb0NvbnRyb2xzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTWRQYXVzZSwgTWRQbGF5QXJyb3csIE1kU2tpcFByZXZpb3VzLCBNZFNraXBOZXh0IH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdWRpb0NvbnRyb2xzKHtjbGlwU3JjfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdwbGF5ZXInPlxuICAgICAgPGF1ZGlvIGF1dG9QbGF5PXtmYWxzZX0+XG4gICAgICAgIDxzb3VyY2Ugc3JjPXtjbGlwU3JjfSB0eXBlPSdhdWRpby9tcGVnJyAvPlxuICAgICAgPC9hdWRpbz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4tcGxheWVyJz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2NvbnRyb2xsZXItYnV0dG9uJz5cbiAgICAgICAgICA8TWRTa2lwUHJldmlvdXMgY29sb3I9J3doaXRlJyBzaXplPSczZW0nIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncGxheS1idXR0b24nPlxuICAgICAgICAgIDxNZFBsYXlBcnJvdyBjb2xvcj0nd2hpdGUnIHNpemU9JzNlbScgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdjb250cm9sbGVyLWJ1dHRvbic+XG4gICAgICAgICAgPE1kU2tpcE5leHQgY29sb3I9J3doaXRlJyBzaXplPSczZW0nIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxpbnB1dCB0eXBlPSdyYW5nZScgbmFtZT0ncHJvZ3Jlc3NiYXInIGlkPSdwZ3JiYXInIGNsYXNzTmFtZT0nc2xpZGVyJyAvPlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdjb250cm9sLWJhcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9ncmVzcy1iYXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXliYWNrLWNvbnRyb2xsZXInIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+ICovfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZ3Jlc3MtdGltZSc+XG4gICAgICAgIDxkaXY+MDo0MzwvZGl2PlxuICAgICAgICA8ZGl2PjA6NDM8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5zbGlkZXIge1xuICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIHdpZHRoOiAyLjVlbTtcbiAgICAgICAgICBoZWlnaHQ6IDIuNWVtO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBCbHVlO1xuICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICMxMzE0MTQ7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcbiAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgIGN1cnNvcjogZXctcmVzaXplO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM0MzQzNDM7XG4gICAgICAgICAgYm94LXNoYWRvdzogLTgwcHggMCAwIDgwcHggIzQzZTVmNztcbiAgICAgICAgfVxuXG4gICAgICAgIC5wbGF5ZXIge1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAubWFpbi1wbGF5ZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRyb2xsZXItYnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAucGxheS1idXR0b24ge1xuICAgICAgICAgIHdpZHRoOiA3MnB4O1xuICAgICAgICAgIGhlaWdodDogNzJweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuY29udHJvbC1iYXIge1xuICAgICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM1ZTVmNWY7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG1hcmdpbjogMTZweCAwO1xuICAgICAgICB9XG4gICAgICAgIC5wcm9ncmVzcy1iYXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgcmlnaHQ6IDIwJTtcbiAgICAgICAgfVxuICAgICAgICAucGF5YmFjay1jb250cm9sbGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBib3JkZXI6IDRweCBzb2xpZCAjMTMxNDE0O1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIG1hcmdpbjogLTEycHggLTEycHg7XG4gICAgICAgIH1cbiAgICAgICAgLnByb2dyZXNzLXRpbWUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGNvbG9yOiAjOTc5Nzk3O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/edgarlopez/Code/courses/react/next/podcasts/components/AudioControls.js */"));
}

/***/ })

})
//# sourceMappingURL=[podcast].js.64ed86eb36cf9ee59b72.hot-update.js.map