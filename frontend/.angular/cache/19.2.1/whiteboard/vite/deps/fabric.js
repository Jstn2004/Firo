import {
  __async
} from "./chunk-XWLXMCJQ.js";

// node_modules/fabric/dist/index.min.mjs
function t(t2, e3, s2) {
  return (e3 = function(t3) {
    var e4 = function(t4, e5) {
      if ("object" != typeof t4 || !t4) return t4;
      var s3 = t4[Symbol.toPrimitive];
      if (void 0 !== s3) {
        var i2 = s3.call(t4, e5 || "default");
        if ("object" != typeof i2) return i2;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === e5 ? String : Number)(t4);
    }(t3, "string");
    return "symbol" == typeof e4 ? e4 : e4 + "";
  }(e3)) in t2 ? Object.defineProperty(t2, e3, {
    value: s2,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t2[e3] = s2, t2;
}
function e(t2, e3) {
  var s2 = Object.keys(t2);
  if (Object.getOwnPropertySymbols) {
    var i2 = Object.getOwnPropertySymbols(t2);
    e3 && (i2 = i2.filter(function(e4) {
      return Object.getOwnPropertyDescriptor(t2, e4).enumerable;
    })), s2.push.apply(s2, i2);
  }
  return s2;
}
function s(s2) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var r2 = null != arguments[i2] ? arguments[i2] : {};
    i2 % 2 ? e(Object(r2), true).forEach(function(e3) {
      t(s2, e3, r2[e3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s2, Object.getOwnPropertyDescriptors(r2)) : e(Object(r2)).forEach(function(t2) {
      Object.defineProperty(s2, t2, Object.getOwnPropertyDescriptor(r2, t2));
    });
  }
  return s2;
}
function i(t2, e3) {
  if (null == t2) return {};
  var s2, i2, r2 = function(t3, e4) {
    if (null == t3) return {};
    var s3 = {};
    for (var i3 in t3) if ({}.hasOwnProperty.call(t3, i3)) {
      if (e4.indexOf(i3) >= 0) continue;
      s3[i3] = t3[i3];
    }
    return s3;
  }(t2, e3);
  if (Object.getOwnPropertySymbols) {
    var n2 = Object.getOwnPropertySymbols(t2);
    for (i2 = 0; i2 < n2.length; i2++) s2 = n2[i2], e3.indexOf(s2) >= 0 || {}.propertyIsEnumerable.call(t2, s2) && (r2[s2] = t2[s2]);
  }
  return r2;
}
function r(t2, e3) {
  return e3 || (e3 = t2.slice(0)), Object.freeze(Object.defineProperties(t2, {
    raw: {
      value: Object.freeze(e3)
    }
  }));
}
var n = class {
  constructor() {
    t(this, "browserShadowBlurConstant", 1), t(this, "DPI", 96), t(this, "devicePixelRatio", "undefined" != typeof window ? window.devicePixelRatio : 1), t(this, "perfLimitSizeTotal", 2097152), t(this, "maxCacheSideLimit", 4096), t(this, "minCacheSideLimit", 256), t(this, "disableStyleCopyPaste", false), t(this, "enableGLFiltering", true), t(this, "textureSize", 4096), t(this, "forceGLPutImageData", false), t(this, "cachesBoundsOfCurve", false), t(this, "fontPaths", {}), t(this, "NUM_FRACTION_DIGITS", 4);
  }
};
var o = new class extends n {
  constructor(t2) {
    super(), this.configure(t2);
  }
  configure() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    Object.assign(this, t2);
  }
  addFonts() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    this.fontPaths = s(s({}, this.fontPaths), t2);
  }
  removeFonts() {
    (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).forEach((t2) => {
      delete this.fontPaths[t2];
    });
  }
  clearFonts() {
    this.fontPaths = {};
  }
  restoreDefaults(t2) {
    const e3 = new n(), s2 = (null == t2 ? void 0 : t2.reduce((t3, s3) => (t3[s3] = e3[s3], t3), {})) || e3;
    this.configure(s2);
  }
}();
var a = function(t2) {
  for (var e3 = arguments.length, s2 = new Array(e3 > 1 ? e3 - 1 : 0), i2 = 1; i2 < e3; i2++) s2[i2 - 1] = arguments[i2];
  return console[t2]("fabric", ...s2);
};
var h = class extends Error {
  constructor(t2, e3) {
    super("fabric: ".concat(t2), e3);
  }
};
var c = class extends h {
  constructor(t2) {
    super("".concat(t2, " 'options.signal' is in 'aborted' state"));
  }
};
var l = class {
};
var u = class extends l {
  testPrecision(t2, e3) {
    const s2 = "precision ".concat(e3, " float;\nvoid main(){}"), i2 = t2.createShader(t2.FRAGMENT_SHADER);
    return !!i2 && (t2.shaderSource(i2, s2), t2.compileShader(i2), !!t2.getShaderParameter(i2, t2.COMPILE_STATUS));
  }
  queryWebGL(t2) {
    const e3 = t2.getContext("webgl");
    e3 && (this.maxTextureSize = e3.getParameter(e3.MAX_TEXTURE_SIZE), this.GLPrecision = ["highp", "mediump", "lowp"].find((t3) => this.testPrecision(e3, t3)), e3.getExtension("WEBGL_lose_context").loseContext(), a("log", "WebGL: max texture size ".concat(this.maxTextureSize)));
  }
  isSupported(t2) {
    return !!this.maxTextureSize && this.maxTextureSize >= t2;
  }
};
var d = {};
var g;
var f = (t2) => {
  g = t2;
};
var p = () => g || (g = {
  document,
  window,
  isTouchSupported: "ontouchstart" in window || "ontouchstart" in document || window && window.navigator && window.navigator.maxTouchPoints > 0,
  WebGLProbe: new u(),
  dispose() {
  },
  copyPasteData: d
});
var m = () => p().document;
var v = () => p().window;
var y = () => {
  var t2;
  return Math.max(null !== (t2 = o.devicePixelRatio) && void 0 !== t2 ? t2 : v().devicePixelRatio, 1);
};
var _ = new class {
  constructor() {
    t(this, "charWidthsCache", {}), t(this, "boundsOfCurveCache", {});
  }
  getFontCache(t2) {
    let {
      fontFamily: e3,
      fontStyle: s2,
      fontWeight: i2
    } = t2;
    e3 = e3.toLowerCase(), this.charWidthsCache[e3] || (this.charWidthsCache[e3] = {});
    const r2 = this.charWidthsCache[e3], n2 = "".concat(s2.toLowerCase(), "_").concat((i2 + "").toLowerCase());
    return r2[n2] || (r2[n2] = {}), r2[n2];
  }
  clearFontCache(t2) {
    (t2 = (t2 || "").toLowerCase()) ? this.charWidthsCache[t2] && delete this.charWidthsCache[t2] : this.charWidthsCache = {};
  }
  limitDimsByArea(t2) {
    const {
      perfLimitSizeTotal: e3
    } = o, s2 = Math.sqrt(e3 * t2);
    return [Math.floor(s2), Math.floor(e3 / s2)];
  }
}();
var x = "6.6.1";
function C() {
}
var b = Math.PI / 2;
var w = 2 * Math.PI;
var S = Math.PI / 180;
var T = Object.freeze([1, 0, 0, 1, 0, 0]);
var O = 16;
var k = 0.4477152502;
var D = "center";
var M = "left";
var P = "top";
var E = "bottom";
var A = "right";
var j = "none";
var F = /\r?\n/;
var L = "moving";
var R = "scaling";
var I = "rotating";
var B = "rotate";
var X = "skewing";
var Y = "resizing";
var W = "modifyPoly";
var V = "modifyPath";
var z = "changed";
var H = "scale";
var G = "scaleX";
var N = "scaleY";
var U = "skewX";
var q = "skewY";
var K = "fill";
var J = "stroke";
var Q = "modified";
var Z = "json";
var $ = "svg";
var tt = new class {
  constructor() {
    this[Z] = /* @__PURE__ */ new Map(), this[$] = /* @__PURE__ */ new Map();
  }
  has(t2) {
    return this[Z].has(t2);
  }
  getClass(t2) {
    const e3 = this[Z].get(t2);
    if (!e3) throw new h("No class registered for ".concat(t2));
    return e3;
  }
  setClass(t2, e3) {
    e3 ? this[Z].set(e3, t2) : (this[Z].set(t2.type, t2), this[Z].set(t2.type.toLowerCase(), t2));
  }
  getSVGClass(t2) {
    return this[$].get(t2);
  }
  setSVGClass(t2, e3) {
    this[$].set(null != e3 ? e3 : t2.type.toLowerCase(), t2);
  }
}();
var et = new class extends Array {
  remove(t2) {
    const e3 = this.indexOf(t2);
    e3 > -1 && this.splice(e3, 1);
  }
  cancelAll() {
    const t2 = this.splice(0);
    return t2.forEach((t3) => t3.abort()), t2;
  }
  cancelByCanvas(t2) {
    if (!t2) return [];
    const e3 = this.filter((e4) => {
      var s2;
      return e4.target === t2 || "object" == typeof e4.target && (null === (s2 = e4.target) || void 0 === s2 ? void 0 : s2.canvas) === t2;
    });
    return e3.forEach((t3) => t3.abort()), e3;
  }
  cancelByTarget(t2) {
    if (!t2) return [];
    const e3 = this.filter((e4) => e4.target === t2);
    return e3.forEach((t3) => t3.abort()), e3;
  }
}();
var st = class {
  constructor() {
    t(this, "__eventListeners", {});
  }
  on(t2, e3) {
    if (this.__eventListeners || (this.__eventListeners = {}), "object" == typeof t2) return Object.entries(t2).forEach((t3) => {
      let [e4, s2] = t3;
      this.on(e4, s2);
    }), () => this.off(t2);
    if (e3) {
      const s2 = t2;
      return this.__eventListeners[s2] || (this.__eventListeners[s2] = []), this.__eventListeners[s2].push(e3), () => this.off(s2, e3);
    }
    return () => false;
  }
  once(t2, e3) {
    if ("object" == typeof t2) {
      const e4 = [];
      return Object.entries(t2).forEach((t3) => {
        let [s2, i2] = t3;
        e4.push(this.once(s2, i2));
      }), () => e4.forEach((t3) => t3());
    }
    if (e3) {
      const s2 = this.on(t2, function() {
        for (var t3 = arguments.length, i2 = new Array(t3), r2 = 0; r2 < t3; r2++) i2[r2] = arguments[r2];
        e3.call(this, ...i2), s2();
      });
      return s2;
    }
    return () => false;
  }
  _removeEventListener(t2, e3) {
    if (this.__eventListeners[t2]) if (e3) {
      const s2 = this.__eventListeners[t2], i2 = s2.indexOf(e3);
      i2 > -1 && s2.splice(i2, 1);
    } else this.__eventListeners[t2] = [];
  }
  off(t2, e3) {
    if (this.__eventListeners) if (void 0 === t2) for (const t3 in this.__eventListeners) this._removeEventListener(t3);
    else "object" == typeof t2 ? Object.entries(t2).forEach((t3) => {
      let [e4, s2] = t3;
      this._removeEventListener(e4, s2);
    }) : this._removeEventListener(t2, e3);
  }
  fire(t2, e3) {
    var s2;
    if (!this.__eventListeners) return;
    const i2 = null === (s2 = this.__eventListeners[t2]) || void 0 === s2 ? void 0 : s2.concat();
    if (i2) for (let t3 = 0; t3 < i2.length; t3++) i2[t3].call(this, e3 || {});
  }
};
var it = (t2, e3) => {
  const s2 = t2.indexOf(e3);
  return -1 !== s2 && t2.splice(s2, 1), t2;
};
var rt = (t2) => {
  if (0 === t2) return 1;
  switch (Math.abs(t2) / b) {
    case 1:
    case 3:
      return 0;
    case 2:
      return -1;
  }
  return Math.cos(t2);
};
var nt = (t2) => {
  if (0 === t2) return 0;
  const e3 = t2 / b, s2 = Math.sign(t2);
  switch (e3) {
    case 1:
      return s2;
    case 2:
      return 0;
    case 3:
      return -s2;
  }
  return Math.sin(t2);
};
var ot = class _ot {
  constructor() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    "object" == typeof t2 ? (this.x = t2.x, this.y = t2.y) : (this.x = t2, this.y = e3);
  }
  add(t2) {
    return new _ot(this.x + t2.x, this.y + t2.y);
  }
  addEquals(t2) {
    return this.x += t2.x, this.y += t2.y, this;
  }
  scalarAdd(t2) {
    return new _ot(this.x + t2, this.y + t2);
  }
  scalarAddEquals(t2) {
    return this.x += t2, this.y += t2, this;
  }
  subtract(t2) {
    return new _ot(this.x - t2.x, this.y - t2.y);
  }
  subtractEquals(t2) {
    return this.x -= t2.x, this.y -= t2.y, this;
  }
  scalarSubtract(t2) {
    return new _ot(this.x - t2, this.y - t2);
  }
  scalarSubtractEquals(t2) {
    return this.x -= t2, this.y -= t2, this;
  }
  multiply(t2) {
    return new _ot(this.x * t2.x, this.y * t2.y);
  }
  scalarMultiply(t2) {
    return new _ot(this.x * t2, this.y * t2);
  }
  scalarMultiplyEquals(t2) {
    return this.x *= t2, this.y *= t2, this;
  }
  divide(t2) {
    return new _ot(this.x / t2.x, this.y / t2.y);
  }
  scalarDivide(t2) {
    return new _ot(this.x / t2, this.y / t2);
  }
  scalarDivideEquals(t2) {
    return this.x /= t2, this.y /= t2, this;
  }
  eq(t2) {
    return this.x === t2.x && this.y === t2.y;
  }
  lt(t2) {
    return this.x < t2.x && this.y < t2.y;
  }
  lte(t2) {
    return this.x <= t2.x && this.y <= t2.y;
  }
  gt(t2) {
    return this.x > t2.x && this.y > t2.y;
  }
  gte(t2) {
    return this.x >= t2.x && this.y >= t2.y;
  }
  lerp(t2) {
    let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.5;
    return e3 = Math.max(Math.min(1, e3), 0), new _ot(this.x + (t2.x - this.x) * e3, this.y + (t2.y - this.y) * e3);
  }
  distanceFrom(t2) {
    const e3 = this.x - t2.x, s2 = this.y - t2.y;
    return Math.sqrt(e3 * e3 + s2 * s2);
  }
  midPointFrom(t2) {
    return this.lerp(t2);
  }
  min(t2) {
    return new _ot(Math.min(this.x, t2.x), Math.min(this.y, t2.y));
  }
  max(t2) {
    return new _ot(Math.max(this.x, t2.x), Math.max(this.y, t2.y));
  }
  toString() {
    return "".concat(this.x, ",").concat(this.y);
  }
  setXY(t2, e3) {
    return this.x = t2, this.y = e3, this;
  }
  setX(t2) {
    return this.x = t2, this;
  }
  setY(t2) {
    return this.y = t2, this;
  }
  setFromPoint(t2) {
    return this.x = t2.x, this.y = t2.y, this;
  }
  swap(t2) {
    const e3 = this.x, s2 = this.y;
    this.x = t2.x, this.y = t2.y, t2.x = e3, t2.y = s2;
  }
  clone() {
    return new _ot(this.x, this.y);
  }
  rotate(t2) {
    let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : at;
    const s2 = nt(t2), i2 = rt(t2), r2 = this.subtract(e3);
    return new _ot(r2.x * i2 - r2.y * s2, r2.x * s2 + r2.y * i2).add(e3);
  }
  transform(t2) {
    let e3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return new _ot(t2[0] * this.x + t2[2] * this.y + (e3 ? 0 : t2[4]), t2[1] * this.x + t2[3] * this.y + (e3 ? 0 : t2[5]));
  }
};
var at = new ot(0, 0);
var ht = (t2) => !!t2 && Array.isArray(t2._objects);
function ct(e3) {
  class s2 extends e3 {
    constructor() {
      super(...arguments), t(this, "_objects", []);
    }
    _onObjectAdded(t2) {
    }
    _onObjectRemoved(t2) {
    }
    _onStackOrderChanged(t2) {
    }
    add() {
      for (var t2 = arguments.length, e4 = new Array(t2), s3 = 0; s3 < t2; s3++) e4[s3] = arguments[s3];
      const i2 = this._objects.push(...e4);
      return e4.forEach((t3) => this._onObjectAdded(t3)), i2;
    }
    insertAt(t2) {
      for (var e4 = arguments.length, s3 = new Array(e4 > 1 ? e4 - 1 : 0), i2 = 1; i2 < e4; i2++) s3[i2 - 1] = arguments[i2];
      return this._objects.splice(t2, 0, ...s3), s3.forEach((t3) => this._onObjectAdded(t3)), this._objects.length;
    }
    remove() {
      const t2 = this._objects, e4 = [];
      for (var s3 = arguments.length, i2 = new Array(s3), r2 = 0; r2 < s3; r2++) i2[r2] = arguments[r2];
      return i2.forEach((s4) => {
        const i3 = t2.indexOf(s4);
        -1 !== i3 && (t2.splice(i3, 1), e4.push(s4), this._onObjectRemoved(s4));
      }), e4;
    }
    forEachObject(t2) {
      this.getObjects().forEach((e4, s3, i2) => t2(e4, s3, i2));
    }
    getObjects() {
      for (var t2 = arguments.length, e4 = new Array(t2), s3 = 0; s3 < t2; s3++) e4[s3] = arguments[s3];
      return 0 === e4.length ? [...this._objects] : this._objects.filter((t3) => t3.isType(...e4));
    }
    item(t2) {
      return this._objects[t2];
    }
    isEmpty() {
      return 0 === this._objects.length;
    }
    size() {
      return this._objects.length;
    }
    contains(t2, e4) {
      return !!this._objects.includes(t2) || !!e4 && this._objects.some((e5) => e5 instanceof s2 && e5.contains(t2, true));
    }
    complexity() {
      return this._objects.reduce((t2, e4) => t2 += e4.complexity ? e4.complexity() : 0, 0);
    }
    sendObjectToBack(t2) {
      return !(!t2 || t2 === this._objects[0]) && (it(this._objects, t2), this._objects.unshift(t2), this._onStackOrderChanged(t2), true);
    }
    bringObjectToFront(t2) {
      return !(!t2 || t2 === this._objects[this._objects.length - 1]) && (it(this._objects, t2), this._objects.push(t2), this._onStackOrderChanged(t2), true);
    }
    sendObjectBackwards(t2, e4) {
      if (!t2) return false;
      const s3 = this._objects.indexOf(t2);
      if (0 !== s3) {
        const i2 = this.findNewLowerIndex(t2, s3, e4);
        return it(this._objects, t2), this._objects.splice(i2, 0, t2), this._onStackOrderChanged(t2), true;
      }
      return false;
    }
    bringObjectForward(t2, e4) {
      if (!t2) return false;
      const s3 = this._objects.indexOf(t2);
      if (s3 !== this._objects.length - 1) {
        const i2 = this.findNewUpperIndex(t2, s3, e4);
        return it(this._objects, t2), this._objects.splice(i2, 0, t2), this._onStackOrderChanged(t2), true;
      }
      return false;
    }
    moveObjectTo(t2, e4) {
      return t2 !== this._objects[e4] && (it(this._objects, t2), this._objects.splice(e4, 0, t2), this._onStackOrderChanged(t2), true);
    }
    findNewLowerIndex(t2, e4, s3) {
      let i2;
      if (s3) {
        i2 = e4;
        for (let s4 = e4 - 1; s4 >= 0; --s4) if (t2.isOverlapping(this._objects[s4])) {
          i2 = s4;
          break;
        }
      } else i2 = e4 - 1;
      return i2;
    }
    findNewUpperIndex(t2, e4, s3) {
      let i2;
      if (s3) {
        i2 = e4;
        for (let s4 = e4 + 1; s4 < this._objects.length; ++s4) if (t2.isOverlapping(this._objects[s4])) {
          i2 = s4;
          break;
        }
      } else i2 = e4 + 1;
      return i2;
    }
    collectObjects(t2) {
      let {
        left: e4,
        top: s3,
        width: i2,
        height: r2
      } = t2, {
        includeIntersecting: n2 = true
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const o2 = [], a2 = new ot(e4, s3), h2 = a2.add(new ot(i2, r2));
      for (let t3 = this._objects.length - 1; t3 >= 0; t3--) {
        const e5 = this._objects[t3];
        e5.selectable && e5.visible && (n2 && e5.intersectsWithRect(a2, h2) || e5.isContainedWithinRect(a2, h2) || n2 && e5.containsPoint(a2) || n2 && e5.containsPoint(h2)) && o2.push(e5);
      }
      return o2;
    }
  }
  return s2;
}
var lt = class extends st {
  _setOptions() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    for (const e3 in t2) this.set(e3, t2[e3]);
  }
  _setObject(t2) {
    for (const e3 in t2) this._set(e3, t2[e3]);
  }
  set(t2, e3) {
    return "object" == typeof t2 ? this._setObject(t2) : this._set(t2, e3), this;
  }
  _set(t2, e3) {
    this[t2] = e3;
  }
  toggle(t2) {
    const e3 = this.get(t2);
    return "boolean" == typeof e3 && this.set(t2, !e3), this;
  }
  get(t2) {
    return this[t2];
  }
};
function ut(t2) {
  return v().requestAnimationFrame(t2);
}
function dt(t2) {
  return v().cancelAnimationFrame(t2);
}
var gt = 0;
var ft = () => gt++;
var pt = () => {
  const t2 = m().createElement("canvas");
  if (!t2 || void 0 === t2.getContext) throw new h("Failed to create `canvas` element");
  return t2;
};
var mt = () => m().createElement("img");
var vt = (t2) => {
  const e3 = pt();
  return e3.width = t2.width, e3.height = t2.height, e3;
};
var yt = (t2, e3, s2) => t2.toDataURL("image/".concat(e3), s2);
var _t = (t2, e3, s2) => new Promise((i2, r2) => {
  t2.toBlob(i2, "image/".concat(e3), s2);
});
var xt = (t2) => t2 * S;
var Ct = (t2) => t2 / S;
var bt = (t2) => t2.every((t3, e3) => t3 === T[e3]);
var wt = (t2, e3, s2) => new ot(t2).transform(e3, s2);
var St = (t2) => {
  const e3 = 1 / (t2[0] * t2[3] - t2[1] * t2[2]), s2 = [e3 * t2[3], -e3 * t2[1], -e3 * t2[2], e3 * t2[0], 0, 0], {
    x: i2,
    y: r2
  } = new ot(t2[4], t2[5]).transform(s2, true);
  return s2[4] = -i2, s2[5] = -r2, s2;
};
var Tt = (t2, e3, s2) => [t2[0] * e3[0] + t2[2] * e3[1], t2[1] * e3[0] + t2[3] * e3[1], t2[0] * e3[2] + t2[2] * e3[3], t2[1] * e3[2] + t2[3] * e3[3], s2 ? 0 : t2[0] * e3[4] + t2[2] * e3[5] + t2[4], s2 ? 0 : t2[1] * e3[4] + t2[3] * e3[5] + t2[5]];
var Ot = (t2, e3) => t2.reduceRight((t3, s2) => s2 && t3 ? Tt(s2, t3, e3) : s2 || t3, void 0) || T.concat();
var kt = (t2) => {
  let [e3, s2] = t2;
  return Math.atan2(s2, e3);
};
var Dt = (t2) => {
  const e3 = kt(t2), s2 = Math.pow(t2[0], 2) + Math.pow(t2[1], 2), i2 = Math.sqrt(s2), r2 = (t2[0] * t2[3] - t2[2] * t2[1]) / i2, n2 = Math.atan2(t2[0] * t2[2] + t2[1] * t2[3], s2);
  return {
    angle: Ct(e3),
    scaleX: i2,
    scaleY: r2,
    skewX: Ct(n2),
    skewY: 0,
    translateX: t2[4] || 0,
    translateY: t2[5] || 0
  };
};
var Mt = function(t2) {
  return [1, 0, 0, 1, t2, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0];
};
function Pt() {
  let {
    angle: t2 = 0
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
    x: e3 = 0,
    y: s2 = 0
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  const i2 = xt(t2), r2 = rt(i2), n2 = nt(i2);
  return [r2, n2, -n2, r2, e3 ? e3 - (r2 * e3 - n2 * s2) : 0, s2 ? s2 - (n2 * e3 + r2 * s2) : 0];
}
var Et = function(t2) {
  return [t2, 0, 0, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t2, 0, 0];
};
var At = (t2) => Math.tan(xt(t2));
var jt = (t2) => [1, 0, At(t2), 1, 0, 0];
var Ft = (t2) => [1, At(t2), 0, 1, 0, 0];
var Lt = (t2) => {
  let {
    scaleX: e3 = 1,
    scaleY: s2 = 1,
    flipX: i2 = false,
    flipY: r2 = false,
    skewX: n2 = 0,
    skewY: o2 = 0
  } = t2, a2 = Et(i2 ? -e3 : e3, r2 ? -s2 : s2);
  return n2 && (a2 = Tt(a2, jt(n2), true)), o2 && (a2 = Tt(a2, Ft(o2), true)), a2;
};
var Rt = (t2) => {
  const {
    translateX: e3 = 0,
    translateY: s2 = 0,
    angle: i2 = 0
  } = t2;
  let r2 = Mt(e3, s2);
  i2 && (r2 = Tt(r2, Pt({
    angle: i2
  })));
  const n2 = Lt(t2);
  return bt(n2) || (r2 = Tt(r2, n2)), r2;
};
var It = function(t2) {
  let {
    signal: e3,
    crossOrigin: s2 = null
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return new Promise(function(i2, r2) {
    if (e3 && e3.aborted) return r2(new c("loadImage"));
    const n2 = mt();
    let o2;
    e3 && (o2 = function(t3) {
      n2.src = "", r2(t3);
    }, e3.addEventListener("abort", o2, {
      once: true
    }));
    const a2 = function() {
      n2.onload = n2.onerror = null, o2 && (null == e3 || e3.removeEventListener("abort", o2)), i2(n2);
    };
    t2 ? (n2.onload = a2, n2.onerror = function() {
      o2 && (null == e3 || e3.removeEventListener("abort", o2)), r2(new h("Error loading ".concat(n2.src)));
    }, s2 && (n2.crossOrigin = s2), n2.src = t2) : a2();
  });
};
var Bt = function(t2) {
  let {
    signal: e3,
    reviver: s2 = C
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return new Promise((i2, r2) => {
    const n2 = [];
    e3 && e3.addEventListener("abort", r2, {
      once: true
    }), Promise.all(t2.map((t3) => tt.getClass(t3.type).fromObject(t3, {
      signal: e3
    }).then((e4) => (s2(t3, e4), n2.push(e4), e4)))).then(i2).catch((t3) => {
      n2.forEach((t4) => {
        t4.dispose && t4.dispose();
      }), r2(t3);
    }).finally(() => {
      e3 && e3.removeEventListener("abort", r2);
    });
  });
};
var Xt = function(t2) {
  let {
    signal: e3
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return new Promise((s2, i2) => {
    const r2 = [];
    e3 && e3.addEventListener("abort", i2, {
      once: true
    });
    const n2 = Object.values(t2).map((t3) => t3 && t3.type && tt.has(t3.type) ? Bt([t3], {
      signal: e3
    }).then((t4) => {
      let [e4] = t4;
      return r2.push(e4), e4;
    }) : t3), o2 = Object.keys(t2);
    Promise.all(n2).then((t3) => t3.reduce((t4, e4, s3) => (t4[o2[s3]] = e4, t4), {})).then(s2).catch((t3) => {
      r2.forEach((t4) => {
        t4.dispose && t4.dispose();
      }), i2(t3);
    }).finally(() => {
      e3 && e3.removeEventListener("abort", i2);
    });
  });
};
var Yt = function(t2) {
  return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).reduce((e3, s2) => (s2 in t2 && (e3[s2] = t2[s2]), e3), {});
};
var Wt = (t2, e3) => Object.keys(t2).reduce((s2, i2) => (e3(t2[i2], i2, t2) && (s2[i2] = t2[i2]), s2), {});
var Vt = {
  aliceblue: "#F0F8FF",
  antiquewhite: "#FAEBD7",
  aqua: "#0FF",
  aquamarine: "#7FFFD4",
  azure: "#F0FFFF",
  beige: "#F5F5DC",
  bisque: "#FFE4C4",
  black: "#000",
  blanchedalmond: "#FFEBCD",
  blue: "#00F",
  blueviolet: "#8A2BE2",
  brown: "#A52A2A",
  burlywood: "#DEB887",
  cadetblue: "#5F9EA0",
  chartreuse: "#7FFF00",
  chocolate: "#D2691E",
  coral: "#FF7F50",
  cornflowerblue: "#6495ED",
  cornsilk: "#FFF8DC",
  crimson: "#DC143C",
  cyan: "#0FF",
  darkblue: "#00008B",
  darkcyan: "#008B8B",
  darkgoldenrod: "#B8860B",
  darkgray: "#A9A9A9",
  darkgrey: "#A9A9A9",
  darkgreen: "#006400",
  darkkhaki: "#BDB76B",
  darkmagenta: "#8B008B",
  darkolivegreen: "#556B2F",
  darkorange: "#FF8C00",
  darkorchid: "#9932CC",
  darkred: "#8B0000",
  darksalmon: "#E9967A",
  darkseagreen: "#8FBC8F",
  darkslateblue: "#483D8B",
  darkslategray: "#2F4F4F",
  darkslategrey: "#2F4F4F",
  darkturquoise: "#00CED1",
  darkviolet: "#9400D3",
  deeppink: "#FF1493",
  deepskyblue: "#00BFFF",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1E90FF",
  firebrick: "#B22222",
  floralwhite: "#FFFAF0",
  forestgreen: "#228B22",
  fuchsia: "#F0F",
  gainsboro: "#DCDCDC",
  ghostwhite: "#F8F8FF",
  gold: "#FFD700",
  goldenrod: "#DAA520",
  gray: "#808080",
  grey: "#808080",
  green: "#008000",
  greenyellow: "#ADFF2F",
  honeydew: "#F0FFF0",
  hotpink: "#FF69B4",
  indianred: "#CD5C5C",
  indigo: "#4B0082",
  ivory: "#FFFFF0",
  khaki: "#F0E68C",
  lavender: "#E6E6FA",
  lavenderblush: "#FFF0F5",
  lawngreen: "#7CFC00",
  lemonchiffon: "#FFFACD",
  lightblue: "#ADD8E6",
  lightcoral: "#F08080",
  lightcyan: "#E0FFFF",
  lightgoldenrodyellow: "#FAFAD2",
  lightgray: "#D3D3D3",
  lightgrey: "#D3D3D3",
  lightgreen: "#90EE90",
  lightpink: "#FFB6C1",
  lightsalmon: "#FFA07A",
  lightseagreen: "#20B2AA",
  lightskyblue: "#87CEFA",
  lightslategray: "#789",
  lightslategrey: "#789",
  lightsteelblue: "#B0C4DE",
  lightyellow: "#FFFFE0",
  lime: "#0F0",
  limegreen: "#32CD32",
  linen: "#FAF0E6",
  magenta: "#F0F",
  maroon: "#800000",
  mediumaquamarine: "#66CDAA",
  mediumblue: "#0000CD",
  mediumorchid: "#BA55D3",
  mediumpurple: "#9370DB",
  mediumseagreen: "#3CB371",
  mediumslateblue: "#7B68EE",
  mediumspringgreen: "#00FA9A",
  mediumturquoise: "#48D1CC",
  mediumvioletred: "#C71585",
  midnightblue: "#191970",
  mintcream: "#F5FFFA",
  mistyrose: "#FFE4E1",
  moccasin: "#FFE4B5",
  navajowhite: "#FFDEAD",
  navy: "#000080",
  oldlace: "#FDF5E6",
  olive: "#808000",
  olivedrab: "#6B8E23",
  orange: "#FFA500",
  orangered: "#FF4500",
  orchid: "#DA70D6",
  palegoldenrod: "#EEE8AA",
  palegreen: "#98FB98",
  paleturquoise: "#AFEEEE",
  palevioletred: "#DB7093",
  papayawhip: "#FFEFD5",
  peachpuff: "#FFDAB9",
  peru: "#CD853F",
  pink: "#FFC0CB",
  plum: "#DDA0DD",
  powderblue: "#B0E0E6",
  purple: "#800080",
  rebeccapurple: "#639",
  red: "#F00",
  rosybrown: "#BC8F8F",
  royalblue: "#4169E1",
  saddlebrown: "#8B4513",
  salmon: "#FA8072",
  sandybrown: "#F4A460",
  seagreen: "#2E8B57",
  seashell: "#FFF5EE",
  sienna: "#A0522D",
  silver: "#C0C0C0",
  skyblue: "#87CEEB",
  slateblue: "#6A5ACD",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#FFFAFA",
  springgreen: "#00FF7F",
  steelblue: "#4682B4",
  tan: "#D2B48C",
  teal: "#008080",
  thistle: "#D8BFD8",
  tomato: "#FF6347",
  turquoise: "#40E0D0",
  violet: "#EE82EE",
  wheat: "#F5DEB3",
  white: "#FFF",
  whitesmoke: "#F5F5F5",
  yellow: "#FF0",
  yellowgreen: "#9ACD32"
};
var zt = (t2, e3, s2) => (s2 < 0 && (s2 += 1), s2 > 1 && (s2 -= 1), s2 < 1 / 6 ? t2 + 6 * (e3 - t2) * s2 : s2 < 0.5 ? e3 : s2 < 2 / 3 ? t2 + (e3 - t2) * (2 / 3 - s2) * 6 : t2);
var Ht = (t2, e3, s2, i2) => {
  t2 /= 255, e3 /= 255, s2 /= 255;
  const r2 = Math.max(t2, e3, s2), n2 = Math.min(t2, e3, s2);
  let o2, a2;
  const h2 = (r2 + n2) / 2;
  if (r2 === n2) o2 = a2 = 0;
  else {
    const i3 = r2 - n2;
    switch (a2 = h2 > 0.5 ? i3 / (2 - r2 - n2) : i3 / (r2 + n2), r2) {
      case t2:
        o2 = (e3 - s2) / i3 + (e3 < s2 ? 6 : 0);
        break;
      case e3:
        o2 = (s2 - t2) / i3 + 2;
        break;
      case s2:
        o2 = (t2 - e3) / i3 + 4;
    }
    o2 /= 6;
  }
  return [Math.round(360 * o2), Math.round(100 * a2), Math.round(100 * h2), i2];
};
var Gt = function() {
  let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "1";
  return parseFloat(t2) / (t2.endsWith("%") ? 100 : 1);
};
var Nt = (t2) => Math.min(Math.round(t2), 255).toString(16).toUpperCase().padStart(2, "0");
var Ut = (t2) => {
  let [e3, s2, i2, r2 = 1] = t2;
  const n2 = Math.round(0.3 * e3 + 0.59 * s2 + 0.11 * i2);
  return [n2, n2, n2, r2];
};
var qt = class _qt {
  constructor(e3) {
    if (t(this, "isUnrecognised", false), e3) {
      if (e3 instanceof _qt) this.setSource([...e3._source]);
      else if (Array.isArray(e3)) {
        const [t2, s2, i2, r2 = 1] = e3;
        this.setSource([t2, s2, i2, r2]);
      } else this.setSource(this._tryParsingColor(e3));
    } else this.setSource([0, 0, 0, 1]);
  }
  _tryParsingColor(t2) {
    return (t2 = t2.toLowerCase()) in Vt && (t2 = Vt[t2]), "transparent" === t2 ? [255, 255, 255, 0] : _qt.sourceFromHex(t2) || _qt.sourceFromRgb(t2) || _qt.sourceFromHsl(t2) || (this.isUnrecognised = true) && [0, 0, 0, 1];
  }
  getSource() {
    return this._source;
  }
  setSource(t2) {
    this._source = t2;
  }
  toRgb() {
    const [t2, e3, s2] = this.getSource();
    return "rgb(".concat(t2, ",").concat(e3, ",").concat(s2, ")");
  }
  toRgba() {
    return "rgba(".concat(this.getSource().join(","), ")");
  }
  toHsl() {
    const [t2, e3, s2] = Ht(...this.getSource());
    return "hsl(".concat(t2, ",").concat(e3, "%,").concat(s2, "%)");
  }
  toHsla() {
    const [t2, e3, s2, i2] = Ht(...this.getSource());
    return "hsla(".concat(t2, ",").concat(e3, "%,").concat(s2, "%,").concat(i2, ")");
  }
  toHex() {
    return this.toHexa().slice(0, 6);
  }
  toHexa() {
    const [t2, e3, s2, i2] = this.getSource();
    return "".concat(Nt(t2)).concat(Nt(e3)).concat(Nt(s2)).concat(Nt(Math.round(255 * i2)));
  }
  getAlpha() {
    return this.getSource()[3];
  }
  setAlpha(t2) {
    return this._source[3] = t2, this;
  }
  toGrayscale() {
    return this.setSource(Ut(this.getSource())), this;
  }
  toBlackWhite(t2) {
    const [e3, , , s2] = Ut(this.getSource()), i2 = e3 < (t2 || 127) ? 0 : 255;
    return this.setSource([i2, i2, i2, s2]), this;
  }
  overlayWith(t2) {
    t2 instanceof _qt || (t2 = new _qt(t2));
    const e3 = this.getSource(), s2 = t2.getSource(), [i2, r2, n2] = e3.map((t3, e4) => Math.round(0.5 * t3 + 0.5 * s2[e4]));
    return this.setSource([i2, r2, n2, e3[3]]), this;
  }
  static fromRgb(t2) {
    return _qt.fromRgba(t2);
  }
  static fromRgba(t2) {
    return new _qt(_qt.sourceFromRgb(t2));
  }
  static sourceFromRgb(t2) {
    const e3 = t2.match(/^rgba?\(\s*(\d{0,3}(?:\.\d+)?%?)\s*[\s|,]\s*(\d{0,3}(?:\.\d+)?%?)\s*[\s|,]\s*(\d{0,3}(?:\.\d+)?%?)\s*(?:\s*[,/]\s*(\d{0,3}(?:\.\d+)?%?)\s*)?\)$/i);
    if (e3) {
      const [t3, s2, i2] = e3.slice(1, 4).map((t4) => {
        const e4 = parseFloat(t4);
        return t4.endsWith("%") ? Math.round(2.55 * e4) : e4;
      });
      return [t3, s2, i2, Gt(e3[4])];
    }
  }
  static fromHsl(t2) {
    return _qt.fromHsla(t2);
  }
  static fromHsla(t2) {
    return new _qt(_qt.sourceFromHsl(t2));
  }
  static sourceFromHsl(t2) {
    const e3 = t2.match(/^hsla?\(\s*([+-]?\d{0,3}(?:\.\d+)?(?:deg|turn|rad)?)\s*[\s|,]\s*(\d{0,3}(?:\.\d+)?%?)\s*[\s|,]\s*(\d{0,3}(?:\.\d+)?%?)\s*(?:\s*[,/]\s*(\d*(?:\.\d+)?%?)\s*)?\)$/i);
    if (!e3) return;
    const s2 = (_qt.parseAngletoDegrees(e3[1]) % 360 + 360) % 360 / 360, i2 = parseFloat(e3[2]) / 100, r2 = parseFloat(e3[3]) / 100;
    let n2, o2, a2;
    if (0 === i2) n2 = o2 = a2 = r2;
    else {
      const t3 = r2 <= 0.5 ? r2 * (i2 + 1) : r2 + i2 - r2 * i2, e4 = 2 * r2 - t3;
      n2 = zt(e4, t3, s2 + 1 / 3), o2 = zt(e4, t3, s2), a2 = zt(e4, t3, s2 - 1 / 3);
    }
    return [Math.round(255 * n2), Math.round(255 * o2), Math.round(255 * a2), Gt(e3[4])];
  }
  static fromHex(t2) {
    return new _qt(_qt.sourceFromHex(t2));
  }
  static sourceFromHex(t2) {
    if (t2.match(/^#?(([0-9a-f]){3,4}|([0-9a-f]{2}){3,4})$/i)) {
      const e3 = t2.slice(t2.indexOf("#") + 1);
      let s2;
      s2 = e3.length <= 4 ? e3.split("").map((t3) => t3 + t3) : e3.match(/.{2}/g);
      const [i2, r2, n2, o2 = 255] = s2.map((t3) => parseInt(t3, 16));
      return [i2, r2, n2, o2 / 255];
    }
  }
  static parseAngletoDegrees(t2) {
    const e3 = t2.toLowerCase(), s2 = parseFloat(e3);
    return e3.includes("rad") ? Ct(s2) : e3.includes("turn") ? 360 * s2 : s2;
  }
};
var Kt = (t2, e3) => parseFloat(Number(t2).toFixed(e3));
var Jt = function(t2) {
  let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O;
  const s2 = /\D{0,2}$/.exec(t2), i2 = parseFloat(t2), r2 = o.DPI;
  switch (null == s2 ? void 0 : s2[0]) {
    case "mm":
      return i2 * r2 / 25.4;
    case "cm":
      return i2 * r2 / 2.54;
    case "in":
      return i2 * r2;
    case "pt":
      return i2 * r2 / 72;
    case "pc":
      return i2 * r2 / 72 * 12;
    case "em":
      return i2 * e3;
    default:
      return i2;
  }
};
var Qt = (t2) => {
  const [e3, s2] = t2.trim().split(" "), [i2, r2] = (n2 = e3) && n2 !== j ? [n2.slice(1, 4), n2.slice(5, 8)] : n2 === j ? [n2, n2] : ["Mid", "Mid"];
  var n2;
  return {
    meetOrSlice: s2 || "meet",
    alignX: i2,
    alignY: r2
  };
};
var Zt = (t2) => "matrix(" + t2.map((t3) => Kt(t3, o.NUM_FRACTION_DIGITS)).join(" ") + ")";
var $t = function(t2, e3) {
  let s2, i2, r2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
  if (e3) {
    if (e3.toLive) s2 = "url(#SVGID_".concat(e3.id, ")");
    else {
      const t3 = new qt(e3), r3 = t3.getAlpha();
      s2 = t3.toRgb(), 1 !== r3 && (i2 = r3.toString());
    }
  } else s2 = "none";
  return r2 ? "".concat(t2, ": ").concat(s2, "; ").concat(i2 ? "".concat(t2, "-opacity: ").concat(i2, "; ") : "") : "".concat(t2, '="').concat(s2, '" ').concat(i2 ? "".concat(t2, '-opacity="').concat(i2, '" ') : "");
};
var te = (t2) => !!t2 && void 0 !== t2.toLive;
var ee = (t2) => !!t2 && "function" == typeof t2.toObject;
var se = (t2) => !!t2 && void 0 !== t2.offsetX && "source" in t2;
var ie = (t2) => !!t2 && "multiSelectionStacking" in t2;
function re(t2) {
  const e3 = t2 && ne(t2);
  let s2 = 0, i2 = 0;
  if (!t2 || !e3) return {
    left: s2,
    top: i2
  };
  let r2 = t2;
  const n2 = e3.documentElement, o2 = e3.body || {
    scrollLeft: 0,
    scrollTop: 0
  };
  for (; r2 && (r2.parentNode || r2.host) && (r2 = r2.parentNode || r2.host, r2 === e3 ? (s2 = o2.scrollLeft || n2.scrollLeft || 0, i2 = o2.scrollTop || n2.scrollTop || 0) : (s2 += r2.scrollLeft || 0, i2 += r2.scrollTop || 0), 1 !== r2.nodeType || "fixed" !== r2.style.position); ) ;
  return {
    left: s2,
    top: i2
  };
}
var ne = (t2) => t2.ownerDocument || null;
var oe = (t2) => {
  var e3;
  return (null === (e3 = t2.ownerDocument) || void 0 === e3 ? void 0 : e3.defaultView) || null;
};
var ae = function(t2, e3, s2) {
  let {
    width: i2,
    height: r2
  } = s2, n2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
  t2.width = i2, t2.height = r2, n2 > 1 && (t2.setAttribute("width", (i2 * n2).toString()), t2.setAttribute("height", (r2 * n2).toString()), e3.scale(n2, n2));
};
var he = (t2, e3) => {
  let {
    width: s2,
    height: i2
  } = e3;
  s2 && (t2.style.width = "number" == typeof s2 ? "".concat(s2, "px") : s2), i2 && (t2.style.height = "number" == typeof i2 ? "".concat(i2, "px") : i2);
};
function ce(t2) {
  return void 0 !== t2.onselectstart && (t2.onselectstart = () => false), t2.style.userSelect = j, t2;
}
var le = class {
  constructor(e3) {
    t(this, "_originalCanvasStyle", void 0), t(this, "lower", void 0);
    const s2 = this.createLowerCanvas(e3);
    this.lower = {
      el: s2,
      ctx: s2.getContext("2d")
    };
  }
  createLowerCanvas(t2) {
    const e3 = (s2 = t2) && void 0 !== s2.getContext ? t2 : t2 && m().getElementById(t2) || pt();
    var s2;
    if (e3.hasAttribute("data-fabric")) throw new h("Trying to initialize a canvas that has already been initialized. Did you forget to dispose the canvas?");
    return this._originalCanvasStyle = e3.style.cssText, e3.setAttribute("data-fabric", "main"), e3.classList.add("lower-canvas"), e3;
  }
  cleanupDOM(t2) {
    let {
      width: e3,
      height: s2
    } = t2;
    const {
      el: i2
    } = this.lower;
    i2.classList.remove("lower-canvas"), i2.removeAttribute("data-fabric"), i2.setAttribute("width", "".concat(e3)), i2.setAttribute("height", "".concat(s2)), i2.style.cssText = this._originalCanvasStyle || "", this._originalCanvasStyle = void 0;
  }
  setDimensions(t2, e3) {
    const {
      el: s2,
      ctx: i2
    } = this.lower;
    ae(s2, i2, t2, e3);
  }
  setCSSDimensions(t2) {
    he(this.lower.el, t2);
  }
  calcOffset() {
    return function(t2) {
      var e3;
      const s2 = t2 && ne(t2), i2 = {
        left: 0,
        top: 0
      };
      if (!s2) return i2;
      const r2 = (null === (e3 = oe(t2)) || void 0 === e3 ? void 0 : e3.getComputedStyle(t2, null)) || {};
      i2.left += parseInt(r2.borderLeftWidth, 10) || 0, i2.top += parseInt(r2.borderTopWidth, 10) || 0, i2.left += parseInt(r2.paddingLeft, 10) || 0, i2.top += parseInt(r2.paddingTop, 10) || 0;
      let n2 = {
        left: 0,
        top: 0
      };
      const o2 = s2.documentElement;
      void 0 !== t2.getBoundingClientRect && (n2 = t2.getBoundingClientRect());
      const a2 = re(t2);
      return {
        left: n2.left + a2.left - (o2.clientLeft || 0) + i2.left,
        top: n2.top + a2.top - (o2.clientTop || 0) + i2.top
      };
    }(this.lower.el);
  }
  dispose() {
    p().dispose(this.lower.el), delete this.lower;
  }
};
var ue = {
  backgroundVpt: true,
  backgroundColor: "",
  overlayVpt: true,
  overlayColor: "",
  includeDefaultValues: true,
  svgViewportTransformation: true,
  renderOnAddRemove: true,
  skipOffscreen: true,
  enableRetinaScaling: true,
  imageSmoothingEnabled: true,
  controlsAboveOverlay: false,
  allowTouchScrolling: false,
  viewportTransform: [...T]
};
var de = class _de extends ct(lt) {
  get lowerCanvasEl() {
    var t2;
    return null === (t2 = this.elements.lower) || void 0 === t2 ? void 0 : t2.el;
  }
  get contextContainer() {
    var t2;
    return null === (t2 = this.elements.lower) || void 0 === t2 ? void 0 : t2.ctx;
  }
  static getDefaults() {
    return _de.ownDefaults;
  }
  constructor(t2) {
    let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    super(), Object.assign(this, this.constructor.getDefaults()), this.set(e3), this.initElements(t2), this._setDimensionsImpl({
      width: this.width || this.elements.lower.el.width || 0,
      height: this.height || this.elements.lower.el.height || 0
    }), this.skipControlsDrawing = false, this.viewportTransform = [...this.viewportTransform], this.calcViewportBoundaries();
  }
  initElements(t2) {
    this.elements = new le(t2);
  }
  add() {
    const t2 = super.add(...arguments);
    return arguments.length > 0 && this.renderOnAddRemove && this.requestRenderAll(), t2;
  }
  insertAt(t2) {
    for (var e3 = arguments.length, s2 = new Array(e3 > 1 ? e3 - 1 : 0), i2 = 1; i2 < e3; i2++) s2[i2 - 1] = arguments[i2];
    const r2 = super.insertAt(t2, ...s2);
    return s2.length > 0 && this.renderOnAddRemove && this.requestRenderAll(), r2;
  }
  remove() {
    const t2 = super.remove(...arguments);
    return t2.length > 0 && this.renderOnAddRemove && this.requestRenderAll(), t2;
  }
  _onObjectAdded(t2) {
    t2.canvas && t2.canvas !== this && (a("warn", "Canvas is trying to add an object that belongs to a different canvas.\nResulting to default behavior: removing object from previous canvas and adding to new canvas"), t2.canvas.remove(t2)), t2._set("canvas", this), t2.setCoords(), this.fire("object:added", {
      target: t2
    }), t2.fire("added", {
      target: this
    });
  }
  _onObjectRemoved(t2) {
    t2._set("canvas", void 0), this.fire("object:removed", {
      target: t2
    }), t2.fire("removed", {
      target: this
    });
  }
  _onStackOrderChanged() {
    this.renderOnAddRemove && this.requestRenderAll();
  }
  getRetinaScaling() {
    return this.enableRetinaScaling ? y() : 1;
  }
  calcOffset() {
    return this._offset = this.elements.calcOffset();
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  setWidth(t2, e3) {
    return this.setDimensions({
      width: t2
    }, e3);
  }
  setHeight(t2, e3) {
    return this.setDimensions({
      height: t2
    }, e3);
  }
  _setDimensionsImpl(t2) {
    let {
      cssOnly: e3 = false,
      backstoreOnly: i2 = false
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!e3) {
      const e4 = s({
        width: this.width,
        height: this.height
      }, t2);
      this.elements.setDimensions(e4, this.getRetinaScaling()), this.hasLostContext = true, this.width = e4.width, this.height = e4.height;
    }
    i2 || this.elements.setCSSDimensions(t2), this.calcOffset();
  }
  setDimensions(t2, e3) {
    this._setDimensionsImpl(t2, e3), e3 && e3.cssOnly || this.requestRenderAll();
  }
  getZoom() {
    return this.viewportTransform[0];
  }
  setViewportTransform(t2) {
    this.viewportTransform = t2, this.calcViewportBoundaries(), this.renderOnAddRemove && this.requestRenderAll();
  }
  zoomToPoint(t2, e3) {
    const s2 = t2, i2 = [...this.viewportTransform], r2 = wt(t2, St(i2));
    i2[0] = e3, i2[3] = e3;
    const n2 = wt(r2, i2);
    i2[4] += s2.x - n2.x, i2[5] += s2.y - n2.y, this.setViewportTransform(i2);
  }
  setZoom(t2) {
    this.zoomToPoint(new ot(0, 0), t2);
  }
  absolutePan(t2) {
    const e3 = [...this.viewportTransform];
    return e3[4] = -t2.x, e3[5] = -t2.y, this.setViewportTransform(e3);
  }
  relativePan(t2) {
    return this.absolutePan(new ot(-t2.x - this.viewportTransform[4], -t2.y - this.viewportTransform[5]));
  }
  getElement() {
    return this.elements.lower.el;
  }
  clearContext(t2) {
    t2.clearRect(0, 0, this.width, this.height);
  }
  getContext() {
    return this.elements.lower.ctx;
  }
  clear() {
    this.remove(...this.getObjects()), this.backgroundImage = void 0, this.overlayImage = void 0, this.backgroundColor = "", this.overlayColor = "", this.clearContext(this.getContext()), this.fire("canvas:cleared"), this.renderOnAddRemove && this.requestRenderAll();
  }
  renderAll() {
    this.cancelRequestedRender(), this.destroyed || this.renderCanvas(this.getContext(), this._objects);
  }
  renderAndReset() {
    this.nextRenderHandle = 0, this.renderAll();
  }
  requestRenderAll() {
    this.nextRenderHandle || this.disposed || this.destroyed || (this.nextRenderHandle = ut(() => this.renderAndReset()));
  }
  calcViewportBoundaries() {
    const t2 = this.width, e3 = this.height, s2 = St(this.viewportTransform), i2 = wt({
      x: 0,
      y: 0
    }, s2), r2 = wt({
      x: t2,
      y: e3
    }, s2), n2 = i2.min(r2), o2 = i2.max(r2);
    return this.vptCoords = {
      tl: n2,
      tr: new ot(o2.x, n2.y),
      bl: new ot(n2.x, o2.y),
      br: o2
    };
  }
  cancelRequestedRender() {
    this.nextRenderHandle && (dt(this.nextRenderHandle), this.nextRenderHandle = 0);
  }
  drawControls(t2) {
  }
  renderCanvas(t2, e3) {
    if (this.destroyed) return;
    const s2 = this.viewportTransform, i2 = this.clipPath;
    this.calcViewportBoundaries(), this.clearContext(t2), t2.imageSmoothingEnabled = this.imageSmoothingEnabled, t2.patternQuality = "best", this.fire("before:render", {
      ctx: t2
    }), this._renderBackground(t2), t2.save(), t2.transform(s2[0], s2[1], s2[2], s2[3], s2[4], s2[5]), this._renderObjects(t2, e3), t2.restore(), this.controlsAboveOverlay || this.skipControlsDrawing || this.drawControls(t2), i2 && (i2._set("canvas", this), i2.shouldCache(), i2._transformDone = true, i2.renderCache({
      forClipping: true
    }), this.drawClipPathOnCanvas(t2, i2)), this._renderOverlay(t2), this.controlsAboveOverlay && !this.skipControlsDrawing && this.drawControls(t2), this.fire("after:render", {
      ctx: t2
    }), this.__cleanupTask && (this.__cleanupTask(), this.__cleanupTask = void 0);
  }
  drawClipPathOnCanvas(t2, e3) {
    const s2 = this.viewportTransform;
    t2.save(), t2.transform(...s2), t2.globalCompositeOperation = "destination-in", e3.transform(t2), t2.scale(1 / e3.zoomX, 1 / e3.zoomY), t2.drawImage(e3._cacheCanvas, -e3.cacheTranslationX, -e3.cacheTranslationY), t2.restore();
  }
  _renderObjects(t2, e3) {
    for (let s2 = 0, i2 = e3.length; s2 < i2; ++s2) e3[s2] && e3[s2].render(t2);
  }
  _renderBackgroundOrOverlay(t2, e3) {
    const s2 = this["".concat(e3, "Color")], i2 = this["".concat(e3, "Image")], r2 = this.viewportTransform, n2 = this["".concat(e3, "Vpt")];
    if (!s2 && !i2) return;
    const o2 = te(s2);
    if (s2) {
      if (t2.save(), t2.beginPath(), t2.moveTo(0, 0), t2.lineTo(this.width, 0), t2.lineTo(this.width, this.height), t2.lineTo(0, this.height), t2.closePath(), t2.fillStyle = o2 ? s2.toLive(t2) : s2, n2 && t2.transform(...r2), o2) {
        t2.transform(1, 0, 0, 1, s2.offsetX || 0, s2.offsetY || 0);
        const e4 = s2.gradientTransform || s2.patternTransform;
        e4 && t2.transform(...e4);
      }
      t2.fill(), t2.restore();
    }
    if (i2) {
      t2.save();
      const {
        skipOffscreen: e4
      } = this;
      this.skipOffscreen = n2, n2 && t2.transform(...r2), i2.render(t2), this.skipOffscreen = e4, t2.restore();
    }
  }
  _renderBackground(t2) {
    this._renderBackgroundOrOverlay(t2, "background");
  }
  _renderOverlay(t2) {
    this._renderBackgroundOrOverlay(t2, "overlay");
  }
  getCenter() {
    return {
      top: this.height / 2,
      left: this.width / 2
    };
  }
  getCenterPoint() {
    return new ot(this.width / 2, this.height / 2);
  }
  centerObjectH(t2) {
    return this._centerObject(t2, new ot(this.getCenterPoint().x, t2.getCenterPoint().y));
  }
  centerObjectV(t2) {
    return this._centerObject(t2, new ot(t2.getCenterPoint().x, this.getCenterPoint().y));
  }
  centerObject(t2) {
    return this._centerObject(t2, this.getCenterPoint());
  }
  viewportCenterObject(t2) {
    return this._centerObject(t2, this.getVpCenter());
  }
  viewportCenterObjectH(t2) {
    return this._centerObject(t2, new ot(this.getVpCenter().x, t2.getCenterPoint().y));
  }
  viewportCenterObjectV(t2) {
    return this._centerObject(t2, new ot(t2.getCenterPoint().x, this.getVpCenter().y));
  }
  getVpCenter() {
    return wt(this.getCenterPoint(), St(this.viewportTransform));
  }
  _centerObject(t2, e3) {
    t2.setXY(e3, D, D), t2.setCoords(), this.renderOnAddRemove && this.requestRenderAll();
  }
  toDatalessJSON(t2) {
    return this.toDatalessObject(t2);
  }
  toObject(t2) {
    return this._toObjectMethod("toObject", t2);
  }
  toJSON() {
    return this.toObject();
  }
  toDatalessObject(t2) {
    return this._toObjectMethod("toDatalessObject", t2);
  }
  _toObjectMethod(t2, e3) {
    const i2 = this.clipPath, r2 = i2 && !i2.excludeFromExport ? this._toObject(i2, t2, e3) : null;
    return s(s(s({
      version: x
    }, Yt(this, e3)), {}, {
      objects: this._objects.filter((t3) => !t3.excludeFromExport).map((s2) => this._toObject(s2, t2, e3))
    }, this.__serializeBgOverlay(t2, e3)), r2 ? {
      clipPath: r2
    } : null);
  }
  _toObject(t2, e3, s2) {
    let i2;
    this.includeDefaultValues || (i2 = t2.includeDefaultValues, t2.includeDefaultValues = false);
    const r2 = t2[e3](s2);
    return this.includeDefaultValues || (t2.includeDefaultValues = !!i2), r2;
  }
  __serializeBgOverlay(t2, e3) {
    const s2 = {}, i2 = this.backgroundImage, r2 = this.overlayImage, n2 = this.backgroundColor, o2 = this.overlayColor;
    return te(n2) ? n2.excludeFromExport || (s2.background = n2.toObject(e3)) : n2 && (s2.background = n2), te(o2) ? o2.excludeFromExport || (s2.overlay = o2.toObject(e3)) : o2 && (s2.overlay = o2), i2 && !i2.excludeFromExport && (s2.backgroundImage = this._toObject(i2, t2, e3)), r2 && !r2.excludeFromExport && (s2.overlayImage = this._toObject(r2, t2, e3)), s2;
  }
  toSVG() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e3 = arguments.length > 1 ? arguments[1] : void 0;
    t2.reviver = e3;
    const s2 = [];
    return this._setSVGPreamble(s2, t2), this._setSVGHeader(s2, t2), this.clipPath && s2.push('<g clip-path="url(#'.concat(this.clipPath.clipPathId, ')" >\n')), this._setSVGBgOverlayColor(s2, "background"), this._setSVGBgOverlayImage(s2, "backgroundImage", e3), this._setSVGObjects(s2, e3), this.clipPath && s2.push("</g>\n"), this._setSVGBgOverlayColor(s2, "overlay"), this._setSVGBgOverlayImage(s2, "overlayImage", e3), s2.push("</svg>"), s2.join("");
  }
  _setSVGPreamble(t2, e3) {
    e3.suppressPreamble || t2.push('<?xml version="1.0" encoding="', e3.encoding || "UTF-8", '" standalone="no" ?>\n', '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ', '"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n');
  }
  _setSVGHeader(t2, e3) {
    const s2 = e3.width || "".concat(this.width), i2 = e3.height || "".concat(this.height), r2 = o.NUM_FRACTION_DIGITS, n2 = e3.viewBox;
    let a2;
    if (n2) a2 = 'viewBox="'.concat(n2.x, " ").concat(n2.y, " ").concat(n2.width, " ").concat(n2.height, '" ');
    else if (this.svgViewportTransformation) {
      const t3 = this.viewportTransform;
      a2 = 'viewBox="'.concat(Kt(-t3[4] / t3[0], r2), " ").concat(Kt(-t3[5] / t3[3], r2), " ").concat(Kt(this.width / t3[0], r2), " ").concat(Kt(this.height / t3[3], r2), '" ');
    } else a2 = 'viewBox="0 0 '.concat(this.width, " ").concat(this.height, '" ');
    t2.push("<svg ", 'xmlns="http://www.w3.org/2000/svg" ', 'xmlns:xlink="http://www.w3.org/1999/xlink" ', 'version="1.1" ', 'width="', s2, '" ', 'height="', i2, '" ', a2, 'xml:space="preserve">\n', "<desc>Created with Fabric.js ", x, "</desc>\n", "<defs>\n", this.createSVGFontFacesMarkup(), this.createSVGRefElementsMarkup(), this.createSVGClipPathMarkup(e3), "</defs>\n");
  }
  createSVGClipPathMarkup(t2) {
    const e3 = this.clipPath;
    return e3 ? (e3.clipPathId = "CLIPPATH_".concat(ft()), '<clipPath id="'.concat(e3.clipPathId, '" >\n').concat(e3.toClipPathSVG(t2.reviver), "</clipPath>\n")) : "";
  }
  createSVGRefElementsMarkup() {
    return ["background", "overlay"].map((t2) => {
      const e3 = this["".concat(t2, "Color")];
      if (te(e3)) {
        const s2 = this["".concat(t2, "Vpt")], i2 = this.viewportTransform, r2 = {
          isType: () => false,
          width: this.width / (s2 ? i2[0] : 1),
          height: this.height / (s2 ? i2[3] : 1)
        };
        return e3.toSVG(r2, {
          additionalTransform: s2 ? Zt(i2) : ""
        });
      }
    }).join("");
  }
  createSVGFontFacesMarkup() {
    const t2 = [], e3 = {}, s2 = o.fontPaths;
    this._objects.forEach(function e4(s3) {
      t2.push(s3), ht(s3) && s3._objects.forEach(e4);
    }), t2.forEach((t3) => {
      if (!(i3 = t3) || "function" != typeof i3._renderText) return;
      var i3;
      const {
        styles: r2,
        fontFamily: n2
      } = t3;
      !e3[n2] && s2[n2] && (e3[n2] = true, r2 && Object.values(r2).forEach((t4) => {
        Object.values(t4).forEach((t5) => {
          let {
            fontFamily: i4 = ""
          } = t5;
          !e3[i4] && s2[i4] && (e3[i4] = true);
        });
      }));
    });
    const i2 = Object.keys(e3).map((t3) => "		@font-face {\n			font-family: '".concat(t3, "';\n			src: url('").concat(s2[t3], "');\n		}\n")).join("");
    return i2 ? '	<style type="text/css"><![CDATA[\n'.concat(i2, "]]></style>\n") : "";
  }
  _setSVGObjects(t2, e3) {
    this.forEachObject((s2) => {
      s2.excludeFromExport || this._setSVGObject(t2, s2, e3);
    });
  }
  _setSVGObject(t2, e3, s2) {
    t2.push(e3.toSVG(s2));
  }
  _setSVGBgOverlayImage(t2, e3, s2) {
    const i2 = this[e3];
    i2 && !i2.excludeFromExport && i2.toSVG && t2.push(i2.toSVG(s2));
  }
  _setSVGBgOverlayColor(t2, e3) {
    const s2 = this["".concat(e3, "Color")];
    if (s2) if (te(s2)) {
      const i2 = s2.repeat || "", r2 = this.width, n2 = this.height, o2 = this["".concat(e3, "Vpt")] ? Zt(St(this.viewportTransform)) : "";
      t2.push('<rect transform="'.concat(o2, " translate(").concat(r2 / 2, ",").concat(n2 / 2, ')" x="').concat(s2.offsetX - r2 / 2, '" y="').concat(s2.offsetY - n2 / 2, '" width="').concat("repeat-y" !== i2 && "no-repeat" !== i2 || !se(s2) ? r2 : s2.source.width, '" height="').concat("repeat-x" !== i2 && "no-repeat" !== i2 || !se(s2) ? n2 : s2.source.height, '" fill="url(#SVGID_').concat(s2.id, ')"></rect>\n'));
    } else t2.push('<rect x="0" y="0" width="100%" height="100%" ', 'fill="', s2, '"', "></rect>\n");
  }
  loadFromJSON(t2, e3) {
    let {
      signal: s2
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (!t2) return Promise.reject(new h("`json` is undefined"));
    const i2 = "string" == typeof t2 ? JSON.parse(t2) : t2, {
      objects: r2 = [],
      backgroundImage: n2,
      background: o2,
      overlayImage: a2,
      overlay: c2,
      clipPath: l2
    } = i2, u2 = this.renderOnAddRemove;
    return this.renderOnAddRemove = false, Promise.all([Bt(r2, {
      reviver: e3,
      signal: s2
    }), Xt({
      backgroundImage: n2,
      backgroundColor: o2,
      overlayImage: a2,
      overlayColor: c2,
      clipPath: l2
    }, {
      signal: s2
    })]).then((t3) => {
      let [e4, s3] = t3;
      return this.clear(), this.add(...e4), this.set(i2), this.set(s3), this.renderOnAddRemove = u2, this;
    });
  }
  clone(t2) {
    const e3 = this.toObject(t2);
    return this.cloneWithoutData().loadFromJSON(e3);
  }
  cloneWithoutData() {
    const t2 = vt(this);
    return new this.constructor(t2);
  }
  toDataURL() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const {
      format: e3 = "png",
      quality: s2 = 1,
      multiplier: i2 = 1,
      enableRetinaScaling: r2 = false
    } = t2, n2 = i2 * (r2 ? this.getRetinaScaling() : 1);
    return yt(this.toCanvasElement(n2, t2), e3, s2);
  }
  toBlob() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const {
      format: e3 = "png",
      quality: s2 = 1,
      multiplier: i2 = 1,
      enableRetinaScaling: r2 = false
    } = t2, n2 = i2 * (r2 ? this.getRetinaScaling() : 1);
    return _t(this.toCanvasElement(n2, t2), e3, s2);
  }
  toCanvasElement() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, {
      width: e3,
      height: s2,
      left: i2,
      top: r2,
      filter: n2
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const o2 = (e3 || this.width) * t2, a2 = (s2 || this.height) * t2, h2 = this.getZoom(), c2 = this.width, l2 = this.height, u2 = this.skipControlsDrawing, d2 = h2 * t2, g2 = this.viewportTransform, f2 = [d2, 0, 0, d2, (g2[4] - (i2 || 0)) * t2, (g2[5] - (r2 || 0)) * t2], p2 = this.enableRetinaScaling, m2 = vt({
      width: o2,
      height: a2
    }), v2 = n2 ? this._objects.filter((t3) => n2(t3)) : this._objects;
    return this.enableRetinaScaling = false, this.viewportTransform = f2, this.width = o2, this.height = a2, this.skipControlsDrawing = true, this.calcViewportBoundaries(), this.renderCanvas(m2.getContext("2d"), v2), this.viewportTransform = g2, this.width = c2, this.height = l2, this.calcViewportBoundaries(), this.enableRetinaScaling = p2, this.skipControlsDrawing = u2, m2;
  }
  dispose() {
    return !this.disposed && this.elements.cleanupDOM({
      width: this.width,
      height: this.height
    }), et.cancelByCanvas(this), this.disposed = true, new Promise((t2, e3) => {
      const s2 = () => {
        this.destroy(), t2(true);
      };
      s2.kill = e3, this.__cleanupTask && this.__cleanupTask.kill("aborted"), this.destroyed ? t2(false) : this.nextRenderHandle ? this.__cleanupTask = s2 : s2();
    });
  }
  destroy() {
    this.destroyed = true, this.cancelRequestedRender(), this.forEachObject((t2) => t2.dispose()), this._objects = [], this.backgroundImage && this.backgroundImage.dispose(), this.backgroundImage = void 0, this.overlayImage && this.overlayImage.dispose(), this.overlayImage = void 0, this.elements.dispose();
  }
  toString() {
    return "#<Canvas (".concat(this.complexity(), "): { objects: ").concat(this._objects.length, " }>");
  }
};
t(de, "ownDefaults", ue);
var ge = ["touchstart", "touchmove", "touchend"];
var fe = (t2) => {
  const e3 = re(t2.target), s2 = function(t3) {
    const e4 = t3.changedTouches;
    return e4 && e4[0] ? e4[0] : t3;
  }(t2);
  return new ot(s2.clientX + e3.left, s2.clientY + e3.top);
};
var pe = (t2) => ge.includes(t2.type) || "touch" === t2.pointerType;
var me = (t2) => {
  t2.preventDefault(), t2.stopPropagation();
};
var ve = (t2) => {
  let e3 = 0, s2 = 0, i2 = 0, r2 = 0;
  for (let n2 = 0, o2 = t2.length; n2 < o2; n2++) {
    const {
      x: o3,
      y: a2
    } = t2[n2];
    (o3 > i2 || !n2) && (i2 = o3), (o3 < e3 || !n2) && (e3 = o3), (a2 > r2 || !n2) && (r2 = a2), (a2 < s2 || !n2) && (s2 = a2);
  }
  return {
    left: e3,
    top: s2,
    width: i2 - e3,
    height: r2 - s2
  };
};
var ye = ["translateX", "translateY", "scaleX", "scaleY"];
var _e = (t2, e3) => xe(t2, Tt(e3, t2.calcOwnMatrix()));
var xe = (t2, e3) => {
  const s2 = Dt(e3), {
    translateX: r2,
    translateY: n2,
    scaleX: o2,
    scaleY: a2
  } = s2, h2 = i(s2, ye), c2 = new ot(r2, n2);
  t2.flipX = false, t2.flipY = false, Object.assign(t2, h2), t2.set({
    scaleX: o2,
    scaleY: a2
  }), t2.setPositionByOrigin(c2, D, D);
};
var Ce = (t2) => {
  t2.scaleX = 1, t2.scaleY = 1, t2.skewX = 0, t2.skewY = 0, t2.flipX = false, t2.flipY = false, t2.rotate(0);
};
var be = (t2) => ({
  scaleX: t2.scaleX,
  scaleY: t2.scaleY,
  skewX: t2.skewX,
  skewY: t2.skewY,
  angle: t2.angle,
  left: t2.left,
  flipX: t2.flipX,
  flipY: t2.flipY,
  top: t2.top
});
var we = (t2, e3, s2) => {
  const i2 = t2 / 2, r2 = e3 / 2, n2 = [new ot(-i2, -r2), new ot(i2, -r2), new ot(-i2, r2), new ot(i2, r2)].map((t3) => t3.transform(s2)), o2 = ve(n2);
  return new ot(o2.width, o2.height);
};
var Se = function() {
  let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T;
  return Tt(St(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T), t2);
};
var Te = function(t2) {
  let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T, s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T;
  return t2.transform(Se(e3, s2));
};
var Oe = function(t2) {
  let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T, s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T;
  return t2.transform(Se(e3, s2), true);
};
var ke = (t2, e3, s2) => {
  const i2 = Se(e3, s2);
  return xe(t2, Tt(i2, t2.calcOwnMatrix())), i2;
};
var De = (t2, e3) => {
  var i2;
  const {
    transform: {
      target: r2
    }
  } = e3;
  null === (i2 = r2.canvas) || void 0 === i2 || i2.fire("object:".concat(t2), s(s({}, e3), {}, {
    target: r2
  })), r2.fire(t2, e3);
};
var Me = {
  left: -0.5,
  top: -0.5,
  center: 0,
  bottom: 0.5,
  right: 0.5
};
var Pe = (t2) => "string" == typeof t2 ? Me[t2] : t2 - 0.5;
var Ee = "not-allowed";
function Ae(t2) {
  return Pe(t2.originX) === Pe(D) && Pe(t2.originY) === Pe(D);
}
function je(t2) {
  return 0.5 - Pe(t2);
}
var Fe = (t2, e3) => t2[e3];
var Le = (t2, e3, s2, i2) => ({
  e: t2,
  transform: e3,
  pointer: new ot(s2, i2)
});
function Re(t2, e3) {
  const s2 = t2.getTotalAngle() + Ct(Math.atan2(e3.y, e3.x)) + 360;
  return Math.round(s2 % 360 / 45);
}
function Ie(t2, e3, s2, i2, r2) {
  var n2;
  let {
    target: o2,
    corner: a2
  } = t2;
  const h2 = o2.controls[a2], c2 = (null === (n2 = o2.canvas) || void 0 === n2 ? void 0 : n2.getZoom()) || 1, l2 = o2.padding / c2, u2 = function(t3, e4, s3, i3) {
    const r3 = t3.getRelativeCenterPoint(), n3 = void 0 !== s3 && void 0 !== i3 ? t3.translateToGivenOrigin(r3, D, D, s3, i3) : new ot(t3.left, t3.top);
    return (t3.angle ? e4.rotate(-xt(t3.angle), r3) : e4).subtract(n3);
  }(o2, new ot(i2, r2), e3, s2);
  return u2.x >= l2 && (u2.x -= l2), u2.x <= -l2 && (u2.x += l2), u2.y >= l2 && (u2.y -= l2), u2.y <= l2 && (u2.y += l2), u2.x -= h2.offsetX, u2.y -= h2.offsetY, u2;
}
var Be = (t2, e3, s2, i2) => {
  const {
    target: r2,
    offsetX: n2,
    offsetY: o2
  } = e3, a2 = s2 - n2, h2 = i2 - o2, c2 = !Fe(r2, "lockMovementX") && r2.left !== a2, l2 = !Fe(r2, "lockMovementY") && r2.top !== h2;
  return c2 && r2.set(M, a2), l2 && r2.set(P, h2), (c2 || l2) && De(L, Le(t2, e3, s2, i2)), c2 || l2;
};
var Xe = class {
  getSvgStyles(t2) {
    const e3 = this.fillRule ? this.fillRule : "nonzero", s2 = this.strokeWidth ? this.strokeWidth : "0", i2 = this.strokeDashArray ? this.strokeDashArray.join(" ") : j, r2 = this.strokeDashOffset ? this.strokeDashOffset : "0", n2 = this.strokeLineCap ? this.strokeLineCap : "butt", o2 = this.strokeLineJoin ? this.strokeLineJoin : "miter", a2 = this.strokeMiterLimit ? this.strokeMiterLimit : "4", h2 = void 0 !== this.opacity ? this.opacity : "1", c2 = this.visible ? "" : " visibility: hidden;", l2 = t2 ? "" : this.getSvgFilter(), u2 = $t(K, this.fill);
    return [$t(J, this.stroke), "stroke-width: ", s2, "; ", "stroke-dasharray: ", i2, "; ", "stroke-linecap: ", n2, "; ", "stroke-dashoffset: ", r2, "; ", "stroke-linejoin: ", o2, "; ", "stroke-miterlimit: ", a2, "; ", u2, "fill-rule: ", e3, "; ", "opacity: ", h2, ";", l2, c2].join("");
  }
  getSvgFilter() {
    return this.shadow ? "filter: url(#SVGID_".concat(this.shadow.id, ");") : "";
  }
  getSvgCommons() {
    return [this.id ? 'id="'.concat(this.id, '" ') : "", this.clipPath ? 'clip-path="url(#'.concat(this.clipPath.clipPathId, ')" ') : ""].join("");
  }
  getSvgTransform(t2) {
    let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    const s2 = t2 ? this.calcTransformMatrix() : this.calcOwnMatrix(), i2 = 'transform="'.concat(Zt(s2));
    return "".concat(i2).concat(e3, '" ');
  }
  _toSVG(t2) {
    return [""];
  }
  toSVG(t2) {
    return this._createBaseSVGMarkup(this._toSVG(t2), {
      reviver: t2
    });
  }
  toClipPathSVG(t2) {
    return "	" + this._createBaseClipPathSVGMarkup(this._toSVG(t2), {
      reviver: t2
    });
  }
  _createBaseClipPathSVGMarkup(t2) {
    let {
      reviver: e3,
      additionalTransform: s2 = ""
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const i2 = [this.getSvgTransform(true, s2), this.getSvgCommons()].join(""), r2 = t2.indexOf("COMMON_PARTS");
    return t2[r2] = i2, e3 ? e3(t2.join("")) : t2.join("");
  }
  _createBaseSVGMarkup(t2) {
    let {
      noStyle: e3,
      reviver: s2,
      withShadow: i2,
      additionalTransform: r2
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const n2 = e3 ? "" : 'style="'.concat(this.getSvgStyles(), '" '), o2 = i2 ? 'style="'.concat(this.getSvgFilter(), '" ') : "", a2 = this.clipPath, h2 = this.strokeUniform ? 'vector-effect="non-scaling-stroke" ' : "", c2 = a2 && a2.absolutePositioned, l2 = this.stroke, u2 = this.fill, d2 = this.shadow, g2 = [], f2 = t2.indexOf("COMMON_PARTS");
    let p2;
    a2 && (a2.clipPathId = "CLIPPATH_".concat(ft()), p2 = '<clipPath id="'.concat(a2.clipPathId, '" >\n').concat(a2.toClipPathSVG(s2), "</clipPath>\n")), c2 && g2.push("<g ", o2, this.getSvgCommons(), " >\n"), g2.push("<g ", this.getSvgTransform(false), c2 ? "" : o2 + this.getSvgCommons(), " >\n");
    const m2 = [n2, h2, e3 ? "" : this.addPaintOrder(), " ", r2 ? 'transform="'.concat(r2, '" ') : ""].join("");
    return t2[f2] = m2, te(u2) && g2.push(u2.toSVG(this)), te(l2) && g2.push(l2.toSVG(this)), d2 && g2.push(d2.toSVG(this)), a2 && g2.push(p2), g2.push(t2.join("")), g2.push("</g>\n"), c2 && g2.push("</g>\n"), s2 ? s2(g2.join("")) : g2.join("");
  }
  addPaintOrder() {
    return this.paintFirst !== K ? ' paint-order="'.concat(this.paintFirst, '" ') : "";
  }
};
function Ye(t2) {
  return new RegExp("^(" + t2.join("|") + ")\\b", "i");
}
var We;
var Ve = String.raw(We || (We = r(["(?:[-+]?(?:d*.d+|d+.?)(?:[eE][-+]?d+)?)"], ["(?:[-+]?(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][-+]?\\d+)?)"])));
var ze = "http://www.w3.org/2000/svg";
var He = new RegExp("(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*(" + Ve + "(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|" + Ve + "))?\\s+(.*)");
var Ge = {
  cx: M,
  x: M,
  r: "radius",
  cy: P,
  y: P,
  display: "visible",
  visibility: "visible",
  transform: "transformMatrix",
  "fill-opacity": "fillOpacity",
  "fill-rule": "fillRule",
  "font-family": "fontFamily",
  "font-size": "fontSize",
  "font-style": "fontStyle",
  "font-weight": "fontWeight",
  "letter-spacing": "charSpacing",
  "paint-order": "paintFirst",
  "stroke-dasharray": "strokeDashArray",
  "stroke-dashoffset": "strokeDashOffset",
  "stroke-linecap": "strokeLineCap",
  "stroke-linejoin": "strokeLineJoin",
  "stroke-miterlimit": "strokeMiterLimit",
  "stroke-opacity": "strokeOpacity",
  "stroke-width": "strokeWidth",
  "text-decoration": "textDecoration",
  "text-anchor": "textAnchor",
  opacity: "opacity",
  "clip-path": "clipPath",
  "clip-rule": "clipRule",
  "vector-effect": "strokeUniform",
  "image-rendering": "imageSmoothing"
};
var Ne = "font-size";
var Ue = "clip-path";
var qe = Ye(["path", "circle", "polygon", "polyline", "ellipse", "rect", "line", "image", "text"]);
var Ke = Ye(["symbol", "image", "marker", "pattern", "view", "svg"]);
var Je = Ye(["symbol", "g", "a", "svg", "clipPath", "defs"]);
var Qe = new RegExp("^\\s*(" + Ve + "+)\\s*,?\\s*(" + Ve + "+)\\s*,?\\s*(" + Ve + "+)\\s*,?\\s*(" + Ve + "+)\\s*$");
var Ze = new ot(1, 0);
var $e = new ot();
var ts = (t2, e3) => t2.rotate(e3);
var es = (t2, e3) => new ot(e3).subtract(t2);
var ss = (t2) => t2.distanceFrom($e);
var is = (t2, e3) => Math.atan2(as(t2, e3), hs(t2, e3));
var rs = (t2) => is(Ze, t2);
var ns = (t2) => t2.eq($e) ? t2 : t2.scalarDivide(ss(t2));
var os = function(t2) {
  let e3 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
  return ns(new ot(-t2.y, t2.x).scalarMultiply(e3 ? 1 : -1));
};
var as = (t2, e3) => t2.x * e3.y - t2.y * e3.x;
var hs = (t2, e3) => t2.x * e3.x + t2.y * e3.y;
var cs = (t2, e3, s2) => {
  if (t2.eq(e3) || t2.eq(s2)) return true;
  const i2 = as(e3, s2), r2 = as(e3, t2), n2 = as(s2, t2);
  return i2 >= 0 ? r2 >= 0 && n2 <= 0 : !(r2 <= 0 && n2 >= 0);
};
var ls = "(-?\\d+(?:\\.\\d*)?(?:px)?(?:\\s?|$))?";
var us = new RegExp("(?:\\s|^)" + ls + ls + "(" + Ve + "?(?:px)?)?(?:\\s?|$)(?:$|\\s)");
var ds = class _ds {
  constructor(t2) {
    const e3 = "string" == typeof t2 ? _ds.parseShadow(t2) : t2;
    Object.assign(this, _ds.ownDefaults, e3), this.id = ft();
  }
  static parseShadow(t2) {
    const e3 = t2.trim(), [, s2 = 0, i2 = 0, r2 = 0] = (us.exec(e3) || []).map((t3) => parseFloat(t3) || 0);
    return {
      color: (e3.replace(us, "") || "rgb(0,0,0)").trim(),
      offsetX: s2,
      offsetY: i2,
      blur: r2
    };
  }
  toString() {
    return [this.offsetX, this.offsetY, this.blur, this.color].join("px ");
  }
  toSVG(t2) {
    const e3 = ts(new ot(this.offsetX, this.offsetY), xt(-t2.angle)), s2 = new qt(this.color);
    let i2 = 40, r2 = 40;
    return t2.width && t2.height && (i2 = 100 * Kt((Math.abs(e3.x) + this.blur) / t2.width, o.NUM_FRACTION_DIGITS) + 20, r2 = 100 * Kt((Math.abs(e3.y) + this.blur) / t2.height, o.NUM_FRACTION_DIGITS) + 20), t2.flipX && (e3.x *= -1), t2.flipY && (e3.y *= -1), '<filter id="SVGID_'.concat(this.id, '" y="-').concat(r2, '%" height="').concat(100 + 2 * r2, '%" x="-').concat(i2, '%" width="').concat(100 + 2 * i2, '%" >\n	<feGaussianBlur in="SourceAlpha" stdDeviation="').concat(Kt(this.blur ? this.blur / 2 : 0, o.NUM_FRACTION_DIGITS), '"></feGaussianBlur>\n	<feOffset dx="').concat(Kt(e3.x, o.NUM_FRACTION_DIGITS), '" dy="').concat(Kt(e3.y, o.NUM_FRACTION_DIGITS), '" result="oBlur" ></feOffset>\n	<feFlood flood-color="').concat(s2.toRgb(), '" flood-opacity="').concat(s2.getAlpha(), '"/>\n	<feComposite in2="oBlur" operator="in" />\n	<feMerge>\n		<feMergeNode></feMergeNode>\n		<feMergeNode in="SourceGraphic"></feMergeNode>\n	</feMerge>\n</filter>\n');
  }
  toObject() {
    const t2 = {
      color: this.color,
      blur: this.blur,
      offsetX: this.offsetX,
      offsetY: this.offsetY,
      affectStroke: this.affectStroke,
      nonScaling: this.nonScaling,
      type: this.constructor.type
    }, e3 = _ds.ownDefaults;
    return this.includeDefaultValues ? t2 : Wt(t2, (t3, s2) => t3 !== e3[s2]);
  }
  static fromObject(t2) {
    return __async(this, null, function* () {
      return new this(t2);
    });
  }
};
t(ds, "ownDefaults", {
  color: "rgb(0,0,0)",
  blur: 0,
  offsetX: 0,
  offsetY: 0,
  affectStroke: false,
  includeDefaultValues: true,
  nonScaling: false
}), t(ds, "type", "shadow"), tt.setClass(ds, "shadow");
var gs = (t2, e3, s2) => Math.max(t2, Math.min(e3, s2));
var fs = [P, M, G, N, "flipX", "flipY", "originX", "originY", "angle", "opacity", "globalCompositeOperation", "shadow", "visible", U, q];
var ps = [K, J, "strokeWidth", "strokeDashArray", "width", "height", "paintFirst", "strokeUniform", "strokeLineCap", "strokeDashOffset", "strokeLineJoin", "strokeMiterLimit", "backgroundColor", "clipPath"];
var ms = {
  top: 0,
  left: 0,
  width: 0,
  height: 0,
  angle: 0,
  flipX: false,
  flipY: false,
  scaleX: 1,
  scaleY: 1,
  minScaleLimit: 0,
  skewX: 0,
  skewY: 0,
  originX: M,
  originY: P,
  strokeWidth: 1,
  strokeUniform: false,
  padding: 0,
  opacity: 1,
  paintFirst: K,
  fill: "rgb(0,0,0)",
  fillRule: "nonzero",
  stroke: null,
  strokeDashArray: null,
  strokeDashOffset: 0,
  strokeLineCap: "butt",
  strokeLineJoin: "miter",
  strokeMiterLimit: 4,
  globalCompositeOperation: "source-over",
  backgroundColor: "",
  shadow: null,
  visible: true,
  includeDefaultValues: true,
  excludeFromExport: false,
  objectCaching: true,
  clipPath: void 0,
  inverted: false,
  absolutePositioned: false,
  centeredRotation: true,
  centeredScaling: false,
  dirty: true
};
var vs = (t2, e3, s2, i2) => (t2 < Math.abs(e3) ? (t2 = e3, i2 = s2 / 4) : i2 = 0 === e3 && 0 === t2 ? s2 / w * Math.asin(1) : s2 / w * Math.asin(e3 / t2), {
  a: t2,
  c: e3,
  p: s2,
  s: i2
});
var ys = (t2, e3, s2, i2, r2) => t2 * Math.pow(2, 10 * (i2 -= 1)) * Math.sin((i2 * r2 - e3) * w / s2);
var _s = (t2, e3, s2, i2) => -s2 * Math.cos(t2 / i2 * b) + s2 + e3;
var xs = (t2, e3, s2, i2) => (t2 /= i2) < 1 / 2.75 ? s2 * (7.5625 * t2 * t2) + e3 : t2 < 2 / 2.75 ? s2 * (7.5625 * (t2 -= 1.5 / 2.75) * t2 + 0.75) + e3 : t2 < 2.5 / 2.75 ? s2 * (7.5625 * (t2 -= 2.25 / 2.75) * t2 + 0.9375) + e3 : s2 * (7.5625 * (t2 -= 2.625 / 2.75) * t2 + 0.984375) + e3;
var Cs = (t2, e3, s2, i2) => s2 - xs(i2 - t2, 0, s2, i2) + e3;
var bs = Object.freeze({
  __proto__: null,
  defaultEasing: _s,
  easeInBack: function(t2, e3, s2, i2) {
    let r2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1.70158;
    return s2 * (t2 /= i2) * t2 * ((r2 + 1) * t2 - r2) + e3;
  },
  easeInBounce: Cs,
  easeInCirc: (t2, e3, s2, i2) => -s2 * (Math.sqrt(1 - (t2 /= i2) * t2) - 1) + e3,
  easeInCubic: (t2, e3, s2, i2) => s2 * (t2 / i2) ** 3 + e3,
  easeInElastic: (t2, e3, s2, i2) => {
    const r2 = s2;
    let n2 = 0;
    if (0 === t2) return e3;
    if (1 === (t2 /= i2)) return e3 + s2;
    n2 || (n2 = 0.3 * i2);
    const {
      a: o2,
      s: a2,
      p: h2
    } = vs(r2, s2, n2, 1.70158);
    return -ys(o2, a2, h2, t2, i2) + e3;
  },
  easeInExpo: (t2, e3, s2, i2) => 0 === t2 ? e3 : s2 * 2 ** (10 * (t2 / i2 - 1)) + e3,
  easeInOutBack: function(t2, e3, s2, i2) {
    let r2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1.70158;
    return (t2 /= i2 / 2) < 1 ? s2 / 2 * (t2 * t2 * ((1 + (r2 *= 1.525)) * t2 - r2)) + e3 : s2 / 2 * ((t2 -= 2) * t2 * ((1 + (r2 *= 1.525)) * t2 + r2) + 2) + e3;
  },
  easeInOutBounce: (t2, e3, s2, i2) => t2 < i2 / 2 ? 0.5 * Cs(2 * t2, 0, s2, i2) + e3 : 0.5 * xs(2 * t2 - i2, 0, s2, i2) + 0.5 * s2 + e3,
  easeInOutCirc: (t2, e3, s2, i2) => (t2 /= i2 / 2) < 1 ? -s2 / 2 * (Math.sqrt(1 - t2 ** 2) - 1) + e3 : s2 / 2 * (Math.sqrt(1 - (t2 -= 2) * t2) + 1) + e3,
  easeInOutCubic: (t2, e3, s2, i2) => (t2 /= i2 / 2) < 1 ? s2 / 2 * t2 ** 3 + e3 : s2 / 2 * ((t2 - 2) ** 3 + 2) + e3,
  easeInOutElastic: (t2, e3, s2, i2) => {
    const r2 = s2;
    let n2 = 0;
    if (0 === t2) return e3;
    if (2 === (t2 /= i2 / 2)) return e3 + s2;
    n2 || (n2 = i2 * (0.3 * 1.5));
    const {
      a: o2,
      s: a2,
      p: h2,
      c: c2
    } = vs(r2, s2, n2, 1.70158);
    return t2 < 1 ? -0.5 * ys(o2, a2, h2, t2, i2) + e3 : o2 * Math.pow(2, -10 * (t2 -= 1)) * Math.sin((t2 * i2 - a2) * w / h2) * 0.5 + c2 + e3;
  },
  easeInOutExpo: (t2, e3, s2, i2) => 0 === t2 ? e3 : t2 === i2 ? e3 + s2 : (t2 /= i2 / 2) < 1 ? s2 / 2 * 2 ** (10 * (t2 - 1)) + e3 : s2 / 2 * -(2 ** (-10 * --t2) + 2) + e3,
  easeInOutQuad: (t2, e3, s2, i2) => (t2 /= i2 / 2) < 1 ? s2 / 2 * t2 ** 2 + e3 : -s2 / 2 * (--t2 * (t2 - 2) - 1) + e3,
  easeInOutQuart: (t2, e3, s2, i2) => (t2 /= i2 / 2) < 1 ? s2 / 2 * t2 ** 4 + e3 : -s2 / 2 * ((t2 -= 2) * t2 ** 3 - 2) + e3,
  easeInOutQuint: (t2, e3, s2, i2) => (t2 /= i2 / 2) < 1 ? s2 / 2 * t2 ** 5 + e3 : s2 / 2 * ((t2 - 2) ** 5 + 2) + e3,
  easeInOutSine: (t2, e3, s2, i2) => -s2 / 2 * (Math.cos(Math.PI * t2 / i2) - 1) + e3,
  easeInQuad: (t2, e3, s2, i2) => s2 * (t2 /= i2) * t2 + e3,
  easeInQuart: (t2, e3, s2, i2) => s2 * (t2 /= i2) * t2 ** 3 + e3,
  easeInQuint: (t2, e3, s2, i2) => s2 * (t2 / i2) ** 5 + e3,
  easeInSine: (t2, e3, s2, i2) => -s2 * Math.cos(t2 / i2 * b) + s2 + e3,
  easeOutBack: function(t2, e3, s2, i2) {
    let r2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1.70158;
    return s2 * ((t2 = t2 / i2 - 1) * t2 * ((r2 + 1) * t2 + r2) + 1) + e3;
  },
  easeOutBounce: xs,
  easeOutCirc: (t2, e3, s2, i2) => s2 * Math.sqrt(1 - (t2 = t2 / i2 - 1) * t2) + e3,
  easeOutCubic: (t2, e3, s2, i2) => s2 * ((t2 / i2 - 1) ** 3 + 1) + e3,
  easeOutElastic: (t2, e3, s2, i2) => {
    const r2 = s2;
    let n2 = 0;
    if (0 === t2) return e3;
    if (1 === (t2 /= i2)) return e3 + s2;
    n2 || (n2 = 0.3 * i2);
    const {
      a: o2,
      s: a2,
      p: h2,
      c: c2
    } = vs(r2, s2, n2, 1.70158);
    return o2 * 2 ** (-10 * t2) * Math.sin((t2 * i2 - a2) * w / h2) + c2 + e3;
  },
  easeOutExpo: (t2, e3, s2, i2) => t2 === i2 ? e3 + s2 : s2 * -(2 ** (-10 * t2 / i2) + 1) + e3,
  easeOutQuad: (t2, e3, s2, i2) => -s2 * (t2 /= i2) * (t2 - 2) + e3,
  easeOutQuart: (t2, e3, s2, i2) => -s2 * ((t2 = t2 / i2 - 1) * t2 ** 3 - 1) + e3,
  easeOutQuint: (t2, e3, s2, i2) => s2 * ((t2 / i2 - 1) ** 5 + 1) + e3,
  easeOutSine: (t2, e3, s2, i2) => s2 * Math.sin(t2 / i2 * b) + e3
});
var ws = () => false;
var Ss = class {
  constructor(e3) {
    let {
      startValue: s2,
      byValue: i2,
      duration: r2 = 500,
      delay: n2 = 0,
      easing: o2 = _s,
      onStart: a2 = C,
      onChange: h2 = C,
      onComplete: c2 = C,
      abort: l2 = ws,
      target: u2
    } = e3;
    t(this, "_state", "pending"), t(this, "durationProgress", 0), t(this, "valueProgress", 0), this.tick = this.tick.bind(this), this.duration = r2, this.delay = n2, this.easing = o2, this._onStart = a2, this._onChange = h2, this._onComplete = c2, this._abort = l2, this.target = u2, this.startValue = s2, this.byValue = i2, this.value = this.startValue, this.endValue = Object.freeze(this.calculate(this.duration).value);
  }
  get state() {
    return this._state;
  }
  isDone() {
    return "aborted" === this._state || "completed" === this._state;
  }
  start() {
    const t2 = (t3) => {
      "pending" === this._state && (this.startTime = t3 || +/* @__PURE__ */ new Date(), this._state = "running", this._onStart(), this.tick(this.startTime));
    };
    this.register(), this.delay > 0 ? setTimeout(() => ut(t2), this.delay) : ut(t2);
  }
  tick(t2) {
    const e3 = (t2 || +/* @__PURE__ */ new Date()) - this.startTime, s2 = Math.min(e3, this.duration);
    this.durationProgress = s2 / this.duration;
    const {
      value: i2,
      valueProgress: r2
    } = this.calculate(s2);
    this.value = Object.freeze(i2), this.valueProgress = r2, "aborted" !== this._state && (this._abort(this.value, this.valueProgress, this.durationProgress) ? (this._state = "aborted", this.unregister()) : e3 >= this.duration ? (this.durationProgress = this.valueProgress = 1, this._onChange(this.endValue, this.valueProgress, this.durationProgress), this._state = "completed", this._onComplete(this.endValue, this.valueProgress, this.durationProgress), this.unregister()) : (this._onChange(this.value, this.valueProgress, this.durationProgress), ut(this.tick)));
  }
  register() {
    et.push(this);
  }
  unregister() {
    et.remove(this);
  }
  abort() {
    this._state = "aborted", this.unregister();
  }
};
var Ts = ["startValue", "endValue"];
var Os = class extends Ss {
  constructor(t2) {
    let {
      startValue: e3 = 0,
      endValue: r2 = 100
    } = t2;
    super(s(s({}, i(t2, Ts)), {}, {
      startValue: e3,
      byValue: r2 - e3
    }));
  }
  calculate(t2) {
    const e3 = this.easing(t2, this.startValue, this.byValue, this.duration);
    return {
      value: e3,
      valueProgress: Math.abs((e3 - this.startValue) / this.byValue)
    };
  }
};
var ks = ["startValue", "endValue"];
var Ds = class extends Ss {
  constructor(t2) {
    let {
      startValue: e3 = [0],
      endValue: r2 = [100]
    } = t2;
    super(s(s({}, i(t2, ks)), {}, {
      startValue: e3,
      byValue: r2.map((t3, s2) => t3 - e3[s2])
    }));
  }
  calculate(t2) {
    const e3 = this.startValue.map((e4, s2) => this.easing(t2, e4, this.byValue[s2], this.duration, s2));
    return {
      value: e3,
      valueProgress: Math.abs((e3[0] - this.startValue[0]) / this.byValue[0])
    };
  }
};
var Ms = ["startValue", "endValue", "easing", "onChange", "onComplete", "abort"];
var Ps = (t2, e3, s2, i2) => e3 + s2 * (1 - Math.cos(t2 / i2 * b));
var Es = (t2) => t2 && ((e3, s2, i2) => t2(new qt(e3).toRgba(), s2, i2));
var As = class extends Ss {
  constructor(t2) {
    let {
      startValue: e3,
      endValue: r2,
      easing: n2 = Ps,
      onChange: o2,
      onComplete: a2,
      abort: h2
    } = t2, c2 = i(t2, Ms);
    const l2 = new qt(e3).getSource(), u2 = new qt(r2).getSource();
    super(s(s({}, c2), {}, {
      startValue: l2,
      byValue: u2.map((t3, e4) => t3 - l2[e4]),
      easing: n2,
      onChange: Es(o2),
      onComplete: Es(a2),
      abort: Es(h2)
    }));
  }
  calculate(t2) {
    const [e3, s2, i2, r2] = this.startValue.map((e4, s3) => this.easing(t2, e4, this.byValue[s3], this.duration, s3)), n2 = [...[e3, s2, i2].map(Math.round), gs(0, r2, 1)];
    return {
      value: n2,
      valueProgress: n2.map((t3, e4) => 0 !== this.byValue[e4] ? Math.abs((t3 - this.startValue[e4]) / this.byValue[e4]) : 0).find((t3) => 0 !== t3) || 0
    };
  }
};
function js(t2) {
  const e3 = ((t3) => Array.isArray(t3.startValue) || Array.isArray(t3.endValue))(t2) ? new Ds(t2) : new Os(t2);
  return e3.start(), e3;
}
function Fs(t2) {
  const e3 = new As(t2);
  return e3.start(), e3;
}
var Ls = class _Ls {
  constructor(t2) {
    this.status = t2, this.points = [];
  }
  includes(t2) {
    return this.points.some((e3) => e3.eq(t2));
  }
  append() {
    for (var t2 = arguments.length, e3 = new Array(t2), s2 = 0; s2 < t2; s2++) e3[s2] = arguments[s2];
    return this.points = this.points.concat(e3.filter((t3) => !this.includes(t3))), this;
  }
  static isPointContained(t2, e3, s2) {
    let i2 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (e3.eq(s2)) return t2.eq(e3);
    if (e3.x === s2.x) return t2.x === e3.x && (i2 || t2.y >= Math.min(e3.y, s2.y) && t2.y <= Math.max(e3.y, s2.y));
    if (e3.y === s2.y) return t2.y === e3.y && (i2 || t2.x >= Math.min(e3.x, s2.x) && t2.x <= Math.max(e3.x, s2.x));
    {
      const r2 = es(e3, s2), n2 = es(e3, t2).divide(r2);
      return i2 ? Math.abs(n2.x) === Math.abs(n2.y) : n2.x === n2.y && n2.x >= 0 && n2.x <= 1;
    }
  }
  static isPointInPolygon(t2, e3) {
    const s2 = new ot(t2).setX(Math.min(t2.x - 1, ...e3.map((t3) => t3.x)));
    let i2 = 0;
    for (let r2 = 0; r2 < e3.length; r2++) {
      const n2 = this.intersectSegmentSegment(e3[r2], e3[(r2 + 1) % e3.length], t2, s2);
      if (n2.includes(t2)) return true;
      i2 += Number("Intersection" === n2.status);
    }
    return i2 % 2 == 1;
  }
  static intersectLineLine(t2, e3, s2, i2) {
    let r2 = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], n2 = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
    const o2 = e3.x - t2.x, a2 = e3.y - t2.y, h2 = i2.x - s2.x, c2 = i2.y - s2.y, l2 = t2.x - s2.x, u2 = t2.y - s2.y, d2 = h2 * u2 - c2 * l2, g2 = o2 * u2 - a2 * l2, f2 = c2 * o2 - h2 * a2;
    if (0 !== f2) {
      const e4 = d2 / f2, s3 = g2 / f2;
      return (r2 || 0 <= e4 && e4 <= 1) && (n2 || 0 <= s3 && s3 <= 1) ? new _Ls("Intersection").append(new ot(t2.x + e4 * o2, t2.y + e4 * a2)) : new _Ls();
    }
    if (0 === d2 || 0 === g2) {
      const o3 = r2 || n2 || _Ls.isPointContained(t2, s2, i2) || _Ls.isPointContained(e3, s2, i2) || _Ls.isPointContained(s2, t2, e3) || _Ls.isPointContained(i2, t2, e3);
      return new _Ls(o3 ? "Coincident" : void 0);
    }
    return new _Ls("Parallel");
  }
  static intersectSegmentLine(t2, e3, s2, i2) {
    return _Ls.intersectLineLine(t2, e3, s2, i2, false, true);
  }
  static intersectSegmentSegment(t2, e3, s2, i2) {
    return _Ls.intersectLineLine(t2, e3, s2, i2, false, false);
  }
  static intersectLinePolygon(t2, e3, s2) {
    let i2 = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
    const r2 = new _Ls(), n2 = s2.length;
    for (let o2, a2, h2, c2 = 0; c2 < n2; c2++) {
      if (o2 = s2[c2], a2 = s2[(c2 + 1) % n2], h2 = _Ls.intersectLineLine(t2, e3, o2, a2, i2, false), "Coincident" === h2.status) return h2;
      r2.append(...h2.points);
    }
    return r2.points.length > 0 && (r2.status = "Intersection"), r2;
  }
  static intersectSegmentPolygon(t2, e3, s2) {
    return _Ls.intersectLinePolygon(t2, e3, s2, false);
  }
  static intersectPolygonPolygon(t2, e3) {
    const s2 = new _Ls(), i2 = t2.length, r2 = [];
    for (let n2 = 0; n2 < i2; n2++) {
      const o2 = t2[n2], a2 = t2[(n2 + 1) % i2], h2 = _Ls.intersectSegmentPolygon(o2, a2, e3);
      "Coincident" === h2.status ? (r2.push(h2), s2.append(o2, a2)) : s2.append(...h2.points);
    }
    return r2.length > 0 && r2.length === t2.length ? new _Ls("Coincident") : (s2.points.length > 0 && (s2.status = "Intersection"), s2);
  }
  static intersectPolygonRectangle(t2, e3, s2) {
    const i2 = e3.min(s2), r2 = e3.max(s2), n2 = new ot(r2.x, i2.y), o2 = new ot(i2.x, r2.y);
    return _Ls.intersectPolygonPolygon(t2, [i2, n2, r2, o2]);
  }
};
var Rs = class extends lt {
  getX() {
    return this.getXY().x;
  }
  setX(t2) {
    this.setXY(this.getXY().setX(t2));
  }
  getY() {
    return this.getXY().y;
  }
  setY(t2) {
    this.setXY(this.getXY().setY(t2));
  }
  getRelativeX() {
    return this.left;
  }
  setRelativeX(t2) {
    this.left = t2;
  }
  getRelativeY() {
    return this.top;
  }
  setRelativeY(t2) {
    this.top = t2;
  }
  getXY() {
    const t2 = this.getRelativeXY();
    return this.group ? wt(t2, this.group.calcTransformMatrix()) : t2;
  }
  setXY(t2, e3, s2) {
    this.group && (t2 = wt(t2, St(this.group.calcTransformMatrix()))), this.setRelativeXY(t2, e3, s2);
  }
  getRelativeXY() {
    return new ot(this.left, this.top);
  }
  setRelativeXY(t2) {
    let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.originX, s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.originY;
    this.setPositionByOrigin(t2, e3, s2);
  }
  isStrokeAccountedForInDimensions() {
    return false;
  }
  getCoords() {
    const {
      tl: t2,
      tr: e3,
      br: s2,
      bl: i2
    } = this.aCoords || (this.aCoords = this.calcACoords()), r2 = [t2, e3, s2, i2];
    if (this.group) {
      const t3 = this.group.calcTransformMatrix();
      return r2.map((e4) => wt(e4, t3));
    }
    return r2;
  }
  intersectsWithRect(t2, e3) {
    return "Intersection" === Ls.intersectPolygonRectangle(this.getCoords(), t2, e3).status;
  }
  intersectsWithObject(t2) {
    const e3 = Ls.intersectPolygonPolygon(this.getCoords(), t2.getCoords());
    return "Intersection" === e3.status || "Coincident" === e3.status || t2.isContainedWithinObject(this) || this.isContainedWithinObject(t2);
  }
  isContainedWithinObject(t2) {
    return this.getCoords().every((e3) => t2.containsPoint(e3));
  }
  isContainedWithinRect(t2, e3) {
    const {
      left: s2,
      top: i2,
      width: r2,
      height: n2
    } = this.getBoundingRect();
    return s2 >= t2.x && s2 + r2 <= e3.x && i2 >= t2.y && i2 + n2 <= e3.y;
  }
  isOverlapping(t2) {
    return this.intersectsWithObject(t2) || this.isContainedWithinObject(t2) || t2.isContainedWithinObject(this);
  }
  containsPoint(t2) {
    return Ls.isPointInPolygon(t2, this.getCoords());
  }
  isOnScreen() {
    if (!this.canvas) return false;
    const {
      tl: t2,
      br: e3
    } = this.canvas.vptCoords;
    return !!this.getCoords().some((s2) => s2.x <= e3.x && s2.x >= t2.x && s2.y <= e3.y && s2.y >= t2.y) || !!this.intersectsWithRect(t2, e3) || this.containsPoint(t2.midPointFrom(e3));
  }
  isPartiallyOnScreen() {
    if (!this.canvas) return false;
    const {
      tl: t2,
      br: e3
    } = this.canvas.vptCoords;
    if (this.intersectsWithRect(t2, e3)) return true;
    return this.getCoords().every((s2) => (s2.x >= e3.x || s2.x <= t2.x) && (s2.y >= e3.y || s2.y <= t2.y)) && this.containsPoint(t2.midPointFrom(e3));
  }
  getBoundingRect() {
    return ve(this.getCoords());
  }
  getScaledWidth() {
    return this._getTransformedDimensions().x;
  }
  getScaledHeight() {
    return this._getTransformedDimensions().y;
  }
  scale(t2) {
    this._set(G, t2), this._set(N, t2), this.setCoords();
  }
  scaleToWidth(t2) {
    const e3 = this.getBoundingRect().width / this.getScaledWidth();
    return this.scale(t2 / this.width / e3);
  }
  scaleToHeight(t2) {
    const e3 = this.getBoundingRect().height / this.getScaledHeight();
    return this.scale(t2 / this.height / e3);
  }
  getCanvasRetinaScaling() {
    var t2;
    return (null === (t2 = this.canvas) || void 0 === t2 ? void 0 : t2.getRetinaScaling()) || 1;
  }
  getTotalAngle() {
    return this.group ? Ct(kt(this.calcTransformMatrix())) : this.angle;
  }
  getViewportTransform() {
    var t2;
    return (null === (t2 = this.canvas) || void 0 === t2 ? void 0 : t2.viewportTransform) || T.concat();
  }
  calcACoords() {
    const t2 = Pt({
      angle: this.angle
    }), {
      x: e3,
      y: s2
    } = this.getRelativeCenterPoint(), i2 = Mt(e3, s2), r2 = Tt(i2, t2), n2 = this._getTransformedDimensions(), o2 = n2.x / 2, a2 = n2.y / 2;
    return {
      tl: wt({
        x: -o2,
        y: -a2
      }, r2),
      tr: wt({
        x: o2,
        y: -a2
      }, r2),
      bl: wt({
        x: -o2,
        y: a2
      }, r2),
      br: wt({
        x: o2,
        y: a2
      }, r2)
    };
  }
  setCoords() {
    this.aCoords = this.calcACoords();
  }
  transformMatrixKey() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e3 = [];
    return !t2 && this.group && (e3 = this.group.transformMatrixKey(t2)), e3.push(this.top, this.left, this.width, this.height, this.scaleX, this.scaleY, this.angle, this.strokeWidth, this.skewX, this.skewY, +this.flipX, +this.flipY, Pe(this.originX), Pe(this.originY)), e3;
  }
  calcTransformMatrix() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e3 = this.calcOwnMatrix();
    if (t2 || !this.group) return e3;
    const s2 = this.transformMatrixKey(t2), i2 = this.matrixCache;
    return i2 && i2.key.every((t3, e4) => t3 === s2[e4]) ? i2.value : (this.group && (e3 = Tt(this.group.calcTransformMatrix(false), e3)), this.matrixCache = {
      key: s2,
      value: e3
    }, e3);
  }
  calcOwnMatrix() {
    const t2 = this.transformMatrixKey(true), e3 = this.ownMatrixCache;
    if (e3 && e3.key === t2) return e3.value;
    const s2 = this.getRelativeCenterPoint(), i2 = {
      angle: this.angle,
      translateX: s2.x,
      translateY: s2.y,
      scaleX: this.scaleX,
      scaleY: this.scaleY,
      skewX: this.skewX,
      skewY: this.skewY,
      flipX: this.flipX,
      flipY: this.flipY
    }, r2 = Rt(i2);
    return this.ownMatrixCache = {
      key: t2,
      value: r2
    }, r2;
  }
  _getNonTransformedDimensions() {
    return new ot(this.width, this.height).scalarAdd(this.strokeWidth);
  }
  _calculateCurrentDimensions(t2) {
    return this._getTransformedDimensions(t2).transform(this.getViewportTransform(), true).scalarAdd(2 * this.padding);
  }
  _getTransformedDimensions() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const e3 = s({
      scaleX: this.scaleX,
      scaleY: this.scaleY,
      skewX: this.skewX,
      skewY: this.skewY,
      width: this.width,
      height: this.height,
      strokeWidth: this.strokeWidth
    }, t2), i2 = e3.strokeWidth;
    let r2 = i2, n2 = 0;
    this.strokeUniform && (r2 = 0, n2 = i2);
    const o2 = e3.width + r2, a2 = e3.height + r2;
    let h2;
    return h2 = 0 === e3.skewX && 0 === e3.skewY ? new ot(o2 * e3.scaleX, a2 * e3.scaleY) : we(o2, a2, Lt(e3)), h2.scalarAdd(n2);
  }
  translateToGivenOrigin(t2, e3, s2, i2, r2) {
    let n2 = t2.x, o2 = t2.y;
    const a2 = Pe(i2) - Pe(e3), h2 = Pe(r2) - Pe(s2);
    if (a2 || h2) {
      const t3 = this._getTransformedDimensions();
      n2 += a2 * t3.x, o2 += h2 * t3.y;
    }
    return new ot(n2, o2);
  }
  translateToCenterPoint(t2, e3, s2) {
    if (e3 === D && s2 === D) return t2;
    const i2 = this.translateToGivenOrigin(t2, e3, s2, D, D);
    return this.angle ? i2.rotate(xt(this.angle), t2) : i2;
  }
  translateToOriginPoint(t2, e3, s2) {
    const i2 = this.translateToGivenOrigin(t2, D, D, e3, s2);
    return this.angle ? i2.rotate(xt(this.angle), t2) : i2;
  }
  getCenterPoint() {
    const t2 = this.getRelativeCenterPoint();
    return this.group ? wt(t2, this.group.calcTransformMatrix()) : t2;
  }
  getRelativeCenterPoint() {
    return this.translateToCenterPoint(new ot(this.left, this.top), this.originX, this.originY);
  }
  getPointByOrigin(t2, e3) {
    return this.translateToOriginPoint(this.getRelativeCenterPoint(), t2, e3);
  }
  setPositionByOrigin(t2, e3, s2) {
    const i2 = this.translateToCenterPoint(t2, e3, s2), r2 = this.translateToOriginPoint(i2, this.originX, this.originY);
    this.set({
      left: r2.x,
      top: r2.y
    });
  }
  _getLeftTopCoords() {
    return this.translateToOriginPoint(this.getRelativeCenterPoint(), M, P);
  }
};
var Is = ["type"];
var Bs = ["extraParam"];
var Xs = class e2 extends Rs {
  static getDefaults() {
    return e2.ownDefaults;
  }
  get type() {
    const t2 = this.constructor.type;
    return "FabricObject" === t2 ? "object" : t2.toLowerCase();
  }
  set type(t2) {
    a("warn", "Setting type has no effect", t2);
  }
  constructor(s2) {
    super(), t(this, "_cacheContext", null), Object.assign(this, e2.ownDefaults), this.setOptions(s2);
  }
  _createCacheCanvas() {
    this._cacheCanvas = pt(), this._cacheContext = this._cacheCanvas.getContext("2d"), this._updateCacheCanvas(), this.dirty = true;
  }
  _limitCacheSize(t2) {
    const e3 = t2.width, s2 = t2.height, i2 = o.maxCacheSideLimit, r2 = o.minCacheSideLimit;
    if (e3 <= i2 && s2 <= i2 && e3 * s2 <= o.perfLimitSizeTotal) return e3 < r2 && (t2.width = r2), s2 < r2 && (t2.height = r2), t2;
    const n2 = e3 / s2, [a2, h2] = _.limitDimsByArea(n2), c2 = gs(r2, a2, i2), l2 = gs(r2, h2, i2);
    return e3 > c2 && (t2.zoomX /= e3 / c2, t2.width = c2, t2.capped = true), s2 > l2 && (t2.zoomY /= s2 / l2, t2.height = l2, t2.capped = true), t2;
  }
  _getCacheCanvasDimensions() {
    const t2 = this.getTotalObjectScaling(), e3 = this._getTransformedDimensions({
      skewX: 0,
      skewY: 0
    }), s2 = e3.x * t2.x / this.scaleX, i2 = e3.y * t2.y / this.scaleY;
    return {
      width: Math.ceil(s2 + 2),
      height: Math.ceil(i2 + 2),
      zoomX: t2.x,
      zoomY: t2.y,
      x: s2,
      y: i2
    };
  }
  _updateCacheCanvas() {
    const t2 = this._cacheCanvas, e3 = this._cacheContext, {
      width: s2,
      height: i2,
      zoomX: r2,
      zoomY: n2,
      x: o2,
      y: a2
    } = this._limitCacheSize(this._getCacheCanvasDimensions()), h2 = s2 !== t2.width || i2 !== t2.height, c2 = this.zoomX !== r2 || this.zoomY !== n2;
    if (!t2 || !e3) return false;
    if (h2 || c2) {
      s2 !== t2.width || i2 !== t2.height ? (t2.width = s2, t2.height = i2) : (e3.setTransform(1, 0, 0, 1, 0, 0), e3.clearRect(0, 0, t2.width, t2.height));
      const h3 = o2 / 2, c3 = a2 / 2;
      return this.cacheTranslationX = Math.round(t2.width / 2 - h3) + h3, this.cacheTranslationY = Math.round(t2.height / 2 - c3) + c3, e3.translate(this.cacheTranslationX, this.cacheTranslationY), e3.scale(r2, n2), this.zoomX = r2, this.zoomY = n2, true;
    }
    return false;
  }
  setOptions() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    this._setOptions(t2);
  }
  transform(t2) {
    const e3 = this.group && !this.group._transformDone || this.group && this.canvas && t2 === this.canvas.contextTop, s2 = this.calcTransformMatrix(!e3);
    t2.transform(s2[0], s2[1], s2[2], s2[3], s2[4], s2[5]);
  }
  getObjectScaling() {
    if (!this.group) return new ot(Math.abs(this.scaleX), Math.abs(this.scaleY));
    const t2 = Dt(this.calcTransformMatrix());
    return new ot(Math.abs(t2.scaleX), Math.abs(t2.scaleY));
  }
  getTotalObjectScaling() {
    const t2 = this.getObjectScaling();
    if (this.canvas) {
      const e3 = this.canvas.getZoom(), s2 = this.getCanvasRetinaScaling();
      return t2.scalarMultiply(e3 * s2);
    }
    return t2;
  }
  getObjectOpacity() {
    let t2 = this.opacity;
    return this.group && (t2 *= this.group.getObjectOpacity()), t2;
  }
  _constrainScale(t2) {
    return Math.abs(t2) < this.minScaleLimit ? t2 < 0 ? -this.minScaleLimit : this.minScaleLimit : 0 === t2 ? 1e-4 : t2;
  }
  _set(t2, e3) {
    t2 !== G && t2 !== N || (e3 = this._constrainScale(e3)), t2 === G && e3 < 0 ? (this.flipX = !this.flipX, e3 *= -1) : "scaleY" === t2 && e3 < 0 ? (this.flipY = !this.flipY, e3 *= -1) : "shadow" !== t2 || !e3 || e3 instanceof ds || (e3 = new ds(e3));
    const s2 = this[t2] !== e3;
    return this[t2] = e3, s2 && this.constructor.cacheProperties.includes(t2) && (this.dirty = true), this.parent && (this.dirty || s2 && this.constructor.stateProperties.includes(t2)) && this.parent._set("dirty", true), this;
  }
  isNotVisible() {
    return 0 === this.opacity || !this.width && !this.height && 0 === this.strokeWidth || !this.visible;
  }
  render(t2) {
    this.isNotVisible() || this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (t2.save(), this._setupCompositeOperation(t2), this.drawSelectionBackground(t2), this.transform(t2), this._setOpacity(t2), this._setShadow(t2), this.shouldCache() ? (this.renderCache(), this.drawCacheOnCanvas(t2)) : (this._removeCacheCanvas(), this.drawObject(t2, false, {}), this.dirty = false), t2.restore());
  }
  drawSelectionBackground(t2) {
  }
  renderCache(t2) {
    if (t2 = t2 || {}, this._cacheCanvas && this._cacheContext || this._createCacheCanvas(), this.isCacheDirty() && this._cacheContext) {
      const {
        zoomX: e3,
        zoomY: s2,
        cacheTranslationX: i2,
        cacheTranslationY: r2
      } = this, {
        width: n2,
        height: o2
      } = this._cacheCanvas;
      this.drawObject(this._cacheContext, t2.forClipping, {
        zoomX: e3,
        zoomY: s2,
        cacheTranslationX: i2,
        cacheTranslationY: r2,
        width: n2,
        height: o2,
        parentClipPaths: []
      }), this.dirty = false;
    }
  }
  _removeCacheCanvas() {
    this._cacheCanvas = void 0, this._cacheContext = null;
  }
  hasStroke() {
    return this.stroke && "transparent" !== this.stroke && 0 !== this.strokeWidth;
  }
  hasFill() {
    return this.fill && "transparent" !== this.fill;
  }
  needsItsOwnCache() {
    return !!(this.paintFirst === J && this.hasFill() && this.hasStroke() && this.shadow) || !!this.clipPath;
  }
  shouldCache() {
    return this.ownCaching = this.objectCaching && (!this.parent || !this.parent.isOnACache()) || this.needsItsOwnCache(), this.ownCaching;
  }
  willDrawShadow() {
    return !!this.shadow && (0 !== this.shadow.offsetX || 0 !== this.shadow.offsetY);
  }
  drawClipPathOnCache(t2, e3, s2) {
    t2.save(), e3.inverted ? t2.globalCompositeOperation = "destination-out" : t2.globalCompositeOperation = "destination-in", t2.setTransform(1, 0, 0, 1, 0, 0), t2.drawImage(s2, 0, 0), t2.restore();
  }
  drawObject(t2, e3, s2) {
    const i2 = this.fill, r2 = this.stroke;
    e3 ? (this.fill = "black", this.stroke = "", this._setClippingProperties(t2)) : this._renderBackground(t2), this._render(t2), this._drawClipPath(t2, this.clipPath, s2), this.fill = i2, this.stroke = r2;
  }
  createClipPathLayer(t2, e3) {
    const s2 = vt(e3), i2 = s2.getContext("2d");
    if (i2.translate(e3.cacheTranslationX, e3.cacheTranslationY), i2.scale(e3.zoomX, e3.zoomY), t2._cacheCanvas = s2, e3.parentClipPaths.forEach((t3) => {
      t3.transform(i2);
    }), e3.parentClipPaths.push(t2), t2.absolutePositioned) {
      const t3 = St(this.calcTransformMatrix());
      i2.transform(t3[0], t3[1], t3[2], t3[3], t3[4], t3[5]);
    }
    return t2.transform(i2), t2.drawObject(i2, true, e3), s2;
  }
  _drawClipPath(t2, e3, s2) {
    if (!e3) return;
    e3._transformDone = true;
    const i2 = this.createClipPathLayer(e3, s2);
    this.drawClipPathOnCache(t2, e3, i2);
  }
  drawCacheOnCanvas(t2) {
    t2.scale(1 / this.zoomX, 1 / this.zoomY), t2.drawImage(this._cacheCanvas, -this.cacheTranslationX, -this.cacheTranslationY);
  }
  isCacheDirty() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (this.isNotVisible()) return false;
    const e3 = this._cacheCanvas, s2 = this._cacheContext;
    return !(!e3 || !s2 || t2 || !this._updateCacheCanvas()) || !!(this.dirty || this.clipPath && this.clipPath.absolutePositioned) && (e3 && s2 && !t2 && (s2.save(), s2.setTransform(1, 0, 0, 1, 0, 0), s2.clearRect(0, 0, e3.width, e3.height), s2.restore()), true);
  }
  _renderBackground(t2) {
    if (!this.backgroundColor) return;
    const e3 = this._getNonTransformedDimensions();
    t2.fillStyle = this.backgroundColor, t2.fillRect(-e3.x / 2, -e3.y / 2, e3.x, e3.y), this._removeShadow(t2);
  }
  _setOpacity(t2) {
    this.group && !this.group._transformDone ? t2.globalAlpha = this.getObjectOpacity() : t2.globalAlpha *= this.opacity;
  }
  _setStrokeStyles(t2, e3) {
    const s2 = e3.stroke;
    s2 && (t2.lineWidth = e3.strokeWidth, t2.lineCap = e3.strokeLineCap, t2.lineDashOffset = e3.strokeDashOffset, t2.lineJoin = e3.strokeLineJoin, t2.miterLimit = e3.strokeMiterLimit, te(s2) ? "percentage" === s2.gradientUnits || s2.gradientTransform || s2.patternTransform ? this._applyPatternForTransformedGradient(t2, s2) : (t2.strokeStyle = s2.toLive(t2), this._applyPatternGradientTransform(t2, s2)) : t2.strokeStyle = e3.stroke);
  }
  _setFillStyles(t2, e3) {
    let {
      fill: s2
    } = e3;
    s2 && (te(s2) ? (t2.fillStyle = s2.toLive(t2), this._applyPatternGradientTransform(t2, s2)) : t2.fillStyle = s2);
  }
  _setClippingProperties(t2) {
    t2.globalAlpha = 1, t2.strokeStyle = "transparent", t2.fillStyle = "#000000";
  }
  _setLineDash(t2, e3) {
    e3 && 0 !== e3.length && t2.setLineDash(e3);
  }
  _setShadow(t2) {
    if (!this.shadow) return;
    const e3 = this.shadow, s2 = this.canvas, i2 = this.getCanvasRetinaScaling(), [r2, , , n2] = (null == s2 ? void 0 : s2.viewportTransform) || T, a2 = r2 * i2, h2 = n2 * i2, c2 = e3.nonScaling ? new ot(1, 1) : this.getObjectScaling();
    t2.shadowColor = e3.color, t2.shadowBlur = e3.blur * o.browserShadowBlurConstant * (a2 + h2) * (c2.x + c2.y) / 4, t2.shadowOffsetX = e3.offsetX * a2 * c2.x, t2.shadowOffsetY = e3.offsetY * h2 * c2.y;
  }
  _removeShadow(t2) {
    this.shadow && (t2.shadowColor = "", t2.shadowBlur = t2.shadowOffsetX = t2.shadowOffsetY = 0);
  }
  _applyPatternGradientTransform(t2, e3) {
    if (!te(e3)) return {
      offsetX: 0,
      offsetY: 0
    };
    const s2 = e3.gradientTransform || e3.patternTransform, i2 = -this.width / 2 + e3.offsetX || 0, r2 = -this.height / 2 + e3.offsetY || 0;
    return "percentage" === e3.gradientUnits ? t2.transform(this.width, 0, 0, this.height, i2, r2) : t2.transform(1, 0, 0, 1, i2, r2), s2 && t2.transform(s2[0], s2[1], s2[2], s2[3], s2[4], s2[5]), {
      offsetX: i2,
      offsetY: r2
    };
  }
  _renderPaintInOrder(t2) {
    this.paintFirst === J ? (this._renderStroke(t2), this._renderFill(t2)) : (this._renderFill(t2), this._renderStroke(t2));
  }
  _render(t2) {
  }
  _renderFill(t2) {
    this.fill && (t2.save(), this._setFillStyles(t2, this), "evenodd" === this.fillRule ? t2.fill("evenodd") : t2.fill(), t2.restore());
  }
  _renderStroke(t2) {
    if (this.stroke && 0 !== this.strokeWidth) {
      if (this.shadow && !this.shadow.affectStroke && this._removeShadow(t2), t2.save(), this.strokeUniform) {
        const e3 = this.getObjectScaling();
        t2.scale(1 / e3.x, 1 / e3.y);
      }
      this._setLineDash(t2, this.strokeDashArray), this._setStrokeStyles(t2, this), t2.stroke(), t2.restore();
    }
  }
  _applyPatternForTransformedGradient(t2, e3) {
    var s2;
    const i2 = this._limitCacheSize(this._getCacheCanvasDimensions()), r2 = this.getCanvasRetinaScaling(), n2 = i2.x / this.scaleX / r2, o2 = i2.y / this.scaleY / r2, a2 = vt({
      width: Math.ceil(n2),
      height: Math.ceil(o2)
    }), h2 = a2.getContext("2d");
    h2 && (h2.beginPath(), h2.moveTo(0, 0), h2.lineTo(n2, 0), h2.lineTo(n2, o2), h2.lineTo(0, o2), h2.closePath(), h2.translate(n2 / 2, o2 / 2), h2.scale(i2.zoomX / this.scaleX / r2, i2.zoomY / this.scaleY / r2), this._applyPatternGradientTransform(h2, e3), h2.fillStyle = e3.toLive(t2), h2.fill(), t2.translate(-this.width / 2 - this.strokeWidth / 2, -this.height / 2 - this.strokeWidth / 2), t2.scale(r2 * this.scaleX / i2.zoomX, r2 * this.scaleY / i2.zoomY), t2.strokeStyle = null !== (s2 = h2.createPattern(a2, "no-repeat")) && void 0 !== s2 ? s2 : "");
  }
  _findCenterFromElement() {
    return new ot(this.left + this.width / 2, this.top + this.height / 2);
  }
  clone(t2) {
    const e3 = this.toObject(t2);
    return this.constructor.fromObject(e3);
  }
  cloneAsImage(t2) {
    const e3 = this.toCanvasElement(t2);
    return new (tt.getClass("image"))(e3);
  }
  toCanvasElement() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const e3 = be(this), s2 = this.group, i2 = this.shadow, r2 = Math.abs, n2 = t2.enableRetinaScaling ? y() : 1, o2 = (t2.multiplier || 1) * n2, a2 = t2.canvasProvider || ((t3) => new de(t3, {
      enableRetinaScaling: false,
      renderOnAddRemove: false,
      skipOffscreen: false
    }));
    delete this.group, t2.withoutTransform && Ce(this), t2.withoutShadow && (this.shadow = null), t2.viewportTransform && ke(this, this.getViewportTransform()), this.setCoords();
    const h2 = pt(), c2 = this.getBoundingRect(), l2 = this.shadow, u2 = new ot();
    if (l2) {
      const t3 = l2.blur, e4 = l2.nonScaling ? new ot(1, 1) : this.getObjectScaling();
      u2.x = 2 * Math.round(r2(l2.offsetX) + t3) * r2(e4.x), u2.y = 2 * Math.round(r2(l2.offsetY) + t3) * r2(e4.y);
    }
    const d2 = c2.width + u2.x, g2 = c2.height + u2.y;
    h2.width = Math.ceil(d2), h2.height = Math.ceil(g2);
    const f2 = a2(h2);
    "jpeg" === t2.format && (f2.backgroundColor = "#fff"), this.setPositionByOrigin(new ot(f2.width / 2, f2.height / 2), D, D);
    const p2 = this.canvas;
    f2._objects = [this], this.set("canvas", f2), this.setCoords();
    const m2 = f2.toCanvasElement(o2 || 1, t2);
    return this.set("canvas", p2), this.shadow = i2, s2 && (this.group = s2), this.set(e3), this.setCoords(), f2._objects = [], f2.destroy(), m2;
  }
  toDataURL() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return yt(this.toCanvasElement(t2), t2.format || "png", t2.quality || 1);
  }
  toBlob() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return _t(this.toCanvasElement(t2), t2.format || "png", t2.quality || 1);
  }
  isType() {
    for (var t2 = arguments.length, e3 = new Array(t2), s2 = 0; s2 < t2; s2++) e3[s2] = arguments[s2];
    return e3.includes(this.constructor.type) || e3.includes(this.type);
  }
  complexity() {
    return 1;
  }
  toJSON() {
    return this.toObject();
  }
  rotate(t2) {
    const {
      centeredRotation: e3,
      originX: s2,
      originY: i2
    } = this;
    if (e3) {
      const {
        x: t3,
        y: e4
      } = this.getRelativeCenterPoint();
      this.originX = D, this.originY = D, this.left = t3, this.top = e4;
    }
    if (this.set("angle", t2), e3) {
      const {
        x: t3,
        y: e4
      } = this.translateToOriginPoint(this.getRelativeCenterPoint(), s2, i2);
      this.left = t3, this.top = e4, this.originX = s2, this.originY = i2;
    }
  }
  setOnGroup() {
  }
  _setupCompositeOperation(t2) {
    this.globalCompositeOperation && (t2.globalCompositeOperation = this.globalCompositeOperation);
  }
  dispose() {
    et.cancelByTarget(this), this.off(), this._set("canvas", void 0), this._cacheCanvas && p().dispose(this._cacheCanvas), this._cacheCanvas = void 0, this._cacheContext = null;
  }
  animate(t2, e3) {
    return Object.entries(t2).reduce((t3, s2) => {
      let [i2, r2] = s2;
      return t3[i2] = this._animate(i2, r2, e3), t3;
    }, {});
  }
  _animate(t2, e3) {
    let i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    const r2 = t2.split("."), n2 = this.constructor.colorProperties.includes(r2[r2.length - 1]), {
      abort: o2,
      startValue: a2,
      onChange: h2,
      onComplete: c2
    } = i2, l2 = s(s({}, i2), {}, {
      target: this,
      startValue: null != a2 ? a2 : r2.reduce((t3, e4) => t3[e4], this),
      endValue: e3,
      abort: null == o2 ? void 0 : o2.bind(this),
      onChange: (t3, e4, s2) => {
        r2.reduce((e5, s3, i3) => (i3 === r2.length - 1 && (e5[s3] = t3), e5[s3]), this), h2 && h2(t3, e4, s2);
      },
      onComplete: (t3, e4, s2) => {
        this.setCoords(), c2 && c2(t3, e4, s2);
      }
    });
    return n2 ? Fs(l2) : js(l2);
  }
  isDescendantOf(t2) {
    const {
      parent: e3,
      group: s2
    } = this;
    return e3 === t2 || s2 === t2 || !!e3 && e3.isDescendantOf(t2) || !!s2 && s2 !== e3 && s2.isDescendantOf(t2);
  }
  getAncestors() {
    const t2 = [];
    let e3 = this;
    do {
      e3 = e3.parent, e3 && t2.push(e3);
    } while (e3);
    return t2;
  }
  findCommonAncestors(t2) {
    if (this === t2) return {
      fork: [],
      otherFork: [],
      common: [this, ...this.getAncestors()]
    };
    const e3 = this.getAncestors(), s2 = t2.getAncestors();
    if (0 === e3.length && s2.length > 0 && this === s2[s2.length - 1]) return {
      fork: [],
      otherFork: [t2, ...s2.slice(0, s2.length - 1)],
      common: [this]
    };
    for (let i2, r2 = 0; r2 < e3.length; r2++) {
      if (i2 = e3[r2], i2 === t2) return {
        fork: [this, ...e3.slice(0, r2)],
        otherFork: [],
        common: e3.slice(r2)
      };
      for (let n2 = 0; n2 < s2.length; n2++) {
        if (this === s2[n2]) return {
          fork: [],
          otherFork: [t2, ...s2.slice(0, n2)],
          common: [this, ...e3]
        };
        if (i2 === s2[n2]) return {
          fork: [this, ...e3.slice(0, r2)],
          otherFork: [t2, ...s2.slice(0, n2)],
          common: e3.slice(r2)
        };
      }
    }
    return {
      fork: [this, ...e3],
      otherFork: [t2, ...s2],
      common: []
    };
  }
  hasCommonAncestors(t2) {
    const e3 = this.findCommonAncestors(t2);
    return e3 && !!e3.common.length;
  }
  isInFrontOf(t2) {
    if (this === t2) return;
    const e3 = this.findCommonAncestors(t2);
    if (e3.fork.includes(t2)) return true;
    if (e3.otherFork.includes(this)) return false;
    const s2 = e3.common[0] || this.canvas;
    if (!s2) return;
    const i2 = e3.fork.pop(), r2 = e3.otherFork.pop(), n2 = s2._objects.indexOf(i2), o2 = s2._objects.indexOf(r2);
    return n2 > -1 && n2 > o2;
  }
  toObject() {
    const t2 = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).concat(e2.customProperties, this.constructor.customProperties || []);
    let i2;
    const r2 = o.NUM_FRACTION_DIGITS, {
      clipPath: n2,
      fill: a2,
      stroke: h2,
      shadow: c2,
      strokeDashArray: l2,
      left: u2,
      top: d2,
      originX: g2,
      originY: f2,
      width: p2,
      height: m2,
      strokeWidth: v2,
      strokeLineCap: y2,
      strokeDashOffset: _2,
      strokeLineJoin: C2,
      strokeUniform: b2,
      strokeMiterLimit: w2,
      scaleX: S2,
      scaleY: T2,
      angle: O2,
      flipX: k2,
      flipY: D2,
      opacity: M2,
      visible: P2,
      backgroundColor: E2,
      fillRule: A2,
      paintFirst: j2,
      globalCompositeOperation: F2,
      skewX: L2,
      skewY: R2
    } = this;
    n2 && !n2.excludeFromExport && (i2 = n2.toObject(t2.concat("inverted", "absolutePositioned")));
    const I2 = (t3) => Kt(t3, r2), B2 = s(s({}, Yt(this, t2)), {}, {
      type: this.constructor.type,
      version: x,
      originX: g2,
      originY: f2,
      left: I2(u2),
      top: I2(d2),
      width: I2(p2),
      height: I2(m2),
      fill: ee(a2) ? a2.toObject() : a2,
      stroke: ee(h2) ? h2.toObject() : h2,
      strokeWidth: I2(v2),
      strokeDashArray: l2 ? l2.concat() : l2,
      strokeLineCap: y2,
      strokeDashOffset: _2,
      strokeLineJoin: C2,
      strokeUniform: b2,
      strokeMiterLimit: I2(w2),
      scaleX: I2(S2),
      scaleY: I2(T2),
      angle: I2(O2),
      flipX: k2,
      flipY: D2,
      opacity: I2(M2),
      shadow: c2 ? c2.toObject() : c2,
      visible: P2,
      backgroundColor: E2,
      fillRule: A2,
      paintFirst: j2,
      globalCompositeOperation: F2,
      skewX: I2(L2),
      skewY: I2(R2)
    }, i2 ? {
      clipPath: i2
    } : null);
    return this.includeDefaultValues ? B2 : this._removeDefaultValues(B2);
  }
  toDatalessObject(t2) {
    return this.toObject(t2);
  }
  _removeDefaultValues(t2) {
    const e3 = this.constructor.getDefaults(), s2 = Object.keys(e3).length > 0 ? e3 : Object.getPrototypeOf(this);
    return Wt(t2, (t3, e4) => {
      if (e4 === M || e4 === P || "type" === e4) return true;
      const i2 = s2[e4];
      return t3 !== i2 && !(Array.isArray(t3) && Array.isArray(i2) && 0 === t3.length && 0 === i2.length);
    });
  }
  toString() {
    return "#<".concat(this.constructor.type, ">");
  }
  static _fromObject(t2) {
    let e3 = i(t2, Is), s2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
      extraParam: r2
    } = s2, n2 = i(s2, Bs);
    return Xt(e3, n2).then((t3) => r2 ? (delete t3[r2], new this(e3[r2], t3)) : new this(t3));
  }
  static fromObject(t2, e3) {
    return this._fromObject(t2, e3);
  }
};
t(Xs, "stateProperties", fs), t(Xs, "cacheProperties", ps), t(Xs, "ownDefaults", ms), t(Xs, "type", "FabricObject"), t(Xs, "colorProperties", [K, J, "backgroundColor"]), t(Xs, "customProperties", []), tt.setClass(Xs), tt.setClass(Xs, "object");
var Ys = (t2, e3, i2) => (r2, n2, o2, a2) => {
  const h2 = e3(r2, n2, o2, a2);
  return h2 && De(t2, s(s({}, Le(r2, n2, o2, a2)), i2)), h2;
};
function Ws(t2) {
  return (e3, s2, i2, r2) => {
    const {
      target: n2,
      originX: o2,
      originY: a2
    } = s2, h2 = n2.getRelativeCenterPoint(), c2 = n2.translateToOriginPoint(h2, o2, a2), l2 = t2(e3, s2, i2, r2);
    return n2.setPositionByOrigin(c2, s2.originX, s2.originY), l2;
  };
}
var Vs = Ys(Y, Ws((t2, e3, s2, i2) => {
  const r2 = Ie(e3, e3.originX, e3.originY, s2, i2);
  if (Pe(e3.originX) === Pe(D) || Pe(e3.originX) === Pe(A) && r2.x < 0 || Pe(e3.originX) === Pe(M) && r2.x > 0) {
    const {
      target: t3
    } = e3, s3 = t3.strokeWidth / (t3.strokeUniform ? t3.scaleX : 1), i3 = Ae(e3) ? 2 : 1, n2 = t3.width, o2 = Math.abs(r2.x * i3 / t3.scaleX) - s3;
    return t3.set("width", Math.max(o2, 1)), n2 !== t3.width;
  }
  return false;
}));
function zs(t2, e3, s2, i2, r2) {
  i2 = i2 || {};
  const n2 = this.sizeX || i2.cornerSize || r2.cornerSize, o2 = this.sizeY || i2.cornerSize || r2.cornerSize, a2 = void 0 !== i2.transparentCorners ? i2.transparentCorners : r2.transparentCorners, h2 = a2 ? J : K, c2 = !a2 && (i2.cornerStrokeColor || r2.cornerStrokeColor);
  let l2, u2 = e3, d2 = s2;
  t2.save(), t2.fillStyle = i2.cornerColor || r2.cornerColor || "", t2.strokeStyle = i2.cornerStrokeColor || r2.cornerStrokeColor || "", n2 > o2 ? (l2 = n2, t2.scale(1, o2 / n2), d2 = s2 * n2 / o2) : o2 > n2 ? (l2 = o2, t2.scale(n2 / o2, 1), u2 = e3 * o2 / n2) : l2 = n2, t2.beginPath(), t2.arc(u2, d2, l2 / 2, 0, w, false), t2[h2](), c2 && t2.stroke(), t2.restore();
}
function Hs(t2, e3, s2, i2, r2) {
  i2 = i2 || {};
  const n2 = this.sizeX || i2.cornerSize || r2.cornerSize, o2 = this.sizeY || i2.cornerSize || r2.cornerSize, a2 = void 0 !== i2.transparentCorners ? i2.transparentCorners : r2.transparentCorners, h2 = a2 ? J : K, c2 = !a2 && (i2.cornerStrokeColor || r2.cornerStrokeColor), l2 = n2 / 2, u2 = o2 / 2;
  t2.save(), t2.fillStyle = i2.cornerColor || r2.cornerColor || "", t2.strokeStyle = i2.cornerStrokeColor || r2.cornerStrokeColor || "", t2.translate(e3, s2);
  const d2 = r2.getTotalAngle();
  t2.rotate(xt(d2)), t2["".concat(h2, "Rect")](-l2, -u2, n2, o2), c2 && t2.strokeRect(-l2, -u2, n2, o2), t2.restore();
}
var Gs = class {
  constructor(e3) {
    t(this, "visible", true), t(this, "actionName", H), t(this, "angle", 0), t(this, "x", 0), t(this, "y", 0), t(this, "offsetX", 0), t(this, "offsetY", 0), t(this, "sizeX", 0), t(this, "sizeY", 0), t(this, "touchSizeX", 0), t(this, "touchSizeY", 0), t(this, "cursorStyle", "crosshair"), t(this, "withConnection", false), Object.assign(this, e3);
  }
  shouldActivate(t2, e3, s2, i2) {
    var r2;
    let {
      tl: n2,
      tr: o2,
      br: a2,
      bl: h2
    } = i2;
    return (null === (r2 = e3.canvas) || void 0 === r2 ? void 0 : r2.getActiveObject()) === e3 && e3.isControlVisible(t2) && Ls.isPointInPolygon(s2, [n2, o2, a2, h2]);
  }
  getActionHandler(t2, e3, s2) {
    return this.actionHandler;
  }
  getMouseDownHandler(t2, e3, s2) {
    return this.mouseDownHandler;
  }
  getMouseUpHandler(t2, e3, s2) {
    return this.mouseUpHandler;
  }
  cursorStyleHandler(t2, e3, s2) {
    return e3.cursorStyle;
  }
  getActionName(t2, e3, s2) {
    return e3.actionName;
  }
  getVisibility(t2, e3) {
    var s2, i2;
    return null !== (s2 = null === (i2 = t2._controlsVisibility) || void 0 === i2 ? void 0 : i2[e3]) && void 0 !== s2 ? s2 : this.visible;
  }
  setVisibility(t2, e3, s2) {
    this.visible = t2;
  }
  positionHandler(t2, e3, s2, i2) {
    return new ot(this.x * t2.x + this.offsetX, this.y * t2.y + this.offsetY).transform(e3);
  }
  calcCornerCoords(t2, e3, s2, i2, r2, n2) {
    const o2 = Ot([Mt(s2, i2), Pt({
      angle: t2
    }), Et((r2 ? this.touchSizeX : this.sizeX) || e3, (r2 ? this.touchSizeY : this.sizeY) || e3)]);
    return {
      tl: new ot(-0.5, -0.5).transform(o2),
      tr: new ot(0.5, -0.5).transform(o2),
      br: new ot(0.5, 0.5).transform(o2),
      bl: new ot(-0.5, 0.5).transform(o2)
    };
  }
  render(t2, e3, s2, i2, r2) {
    if ("circle" === ((i2 = i2 || {}).cornerStyle || r2.cornerStyle)) zs.call(this, t2, e3, s2, i2, r2);
    else Hs.call(this, t2, e3, s2, i2, r2);
  }
};
var Ns = (t2, e3, s2) => s2.lockRotation ? Ee : e3.cursorStyle;
var Us = Ys(I, Ws((t2, e3, s2, i2) => {
  let {
    target: r2,
    ex: n2,
    ey: o2,
    theta: a2,
    originX: h2,
    originY: c2
  } = e3;
  const l2 = r2.translateToOriginPoint(r2.getRelativeCenterPoint(), h2, c2);
  if (Fe(r2, "lockRotation")) return false;
  const u2 = Math.atan2(o2 - l2.y, n2 - l2.x), d2 = Math.atan2(i2 - l2.y, s2 - l2.x);
  let g2 = Ct(d2 - u2 + a2);
  if (r2.snapAngle && r2.snapAngle > 0) {
    const t3 = r2.snapAngle, e4 = r2.snapThreshold || t3, s3 = Math.ceil(g2 / t3) * t3, i3 = Math.floor(g2 / t3) * t3;
    Math.abs(g2 - i3) < e4 ? g2 = i3 : Math.abs(g2 - s3) < e4 && (g2 = s3);
  }
  g2 < 0 && (g2 = 360 + g2), g2 %= 360;
  const f2 = r2.angle !== g2;
  return r2.angle = g2, f2;
}));
function qs(t2, e3) {
  const s2 = e3.canvas, i2 = t2[s2.uniScaleKey];
  return s2.uniformScaling && !i2 || !s2.uniformScaling && i2;
}
function Ks(t2, e3, s2) {
  const i2 = Fe(t2, "lockScalingX"), r2 = Fe(t2, "lockScalingY");
  if (i2 && r2) return true;
  if (!e3 && (i2 || r2) && s2) return true;
  if (i2 && "x" === e3) return true;
  if (r2 && "y" === e3) return true;
  const {
    width: n2,
    height: o2,
    strokeWidth: a2
  } = t2;
  return 0 === n2 && 0 === a2 && "y" !== e3 || 0 === o2 && 0 === a2 && "x" !== e3;
}
var Js = ["e", "se", "s", "sw", "w", "nw", "n", "ne", "e"];
var Qs = (t2, e3, s2) => {
  const i2 = qs(t2, s2);
  if (Ks(s2, 0 !== e3.x && 0 === e3.y ? "x" : 0 === e3.x && 0 !== e3.y ? "y" : "", i2)) return Ee;
  const r2 = Re(s2, e3);
  return "".concat(Js[r2], "-resize");
};
function Zs(t2, e3, s2, i2) {
  let r2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
  const n2 = e3.target, o2 = r2.by, a2 = qs(t2, n2);
  let h2, c2, l2, u2, d2, g2;
  if (Ks(n2, o2, a2)) return false;
  if (e3.gestureScale) c2 = e3.scaleX * e3.gestureScale, l2 = e3.scaleY * e3.gestureScale;
  else {
    if (h2 = Ie(e3, e3.originX, e3.originY, s2, i2), d2 = "y" !== o2 ? Math.sign(h2.x || e3.signX || 1) : 1, g2 = "x" !== o2 ? Math.sign(h2.y || e3.signY || 1) : 1, e3.signX || (e3.signX = d2), e3.signY || (e3.signY = g2), Fe(n2, "lockScalingFlip") && (e3.signX !== d2 || e3.signY !== g2)) return false;
    if (u2 = n2._getTransformedDimensions(), a2 && !o2) {
      const t3 = Math.abs(h2.x) + Math.abs(h2.y), {
        original: s3
      } = e3, i3 = t3 / (Math.abs(u2.x * s3.scaleX / n2.scaleX) + Math.abs(u2.y * s3.scaleY / n2.scaleY));
      c2 = s3.scaleX * i3, l2 = s3.scaleY * i3;
    } else c2 = Math.abs(h2.x * n2.scaleX / u2.x), l2 = Math.abs(h2.y * n2.scaleY / u2.y);
    Ae(e3) && (c2 *= 2, l2 *= 2), e3.signX !== d2 && "y" !== o2 && (e3.originX = je(e3.originX), c2 *= -1, e3.signX = d2), e3.signY !== g2 && "x" !== o2 && (e3.originY = je(e3.originY), l2 *= -1, e3.signY = g2);
  }
  const f2 = n2.scaleX, p2 = n2.scaleY;
  return o2 ? ("x" === o2 && n2.set(G, c2), "y" === o2 && n2.set(N, l2)) : (!Fe(n2, "lockScalingX") && n2.set(G, c2), !Fe(n2, "lockScalingY") && n2.set(N, l2)), f2 !== n2.scaleX || p2 !== n2.scaleY;
}
var $s = Ys(R, Ws((t2, e3, s2, i2) => Zs(t2, e3, s2, i2)));
var ti = Ys(R, Ws((t2, e3, s2, i2) => Zs(t2, e3, s2, i2, {
  by: "x"
})));
var ei = Ys(R, Ws((t2, e3, s2, i2) => Zs(t2, e3, s2, i2, {
  by: "y"
})));
var si = ["target", "ex", "ey", "skewingSide"];
var ii = {
  x: {
    counterAxis: "y",
    scale: G,
    skew: U,
    lockSkewing: "lockSkewingX",
    origin: "originX",
    flip: "flipX"
  },
  y: {
    counterAxis: "x",
    scale: N,
    skew: q,
    lockSkewing: "lockSkewingY",
    origin: "originY",
    flip: "flipY"
  }
};
var ri = ["ns", "nesw", "ew", "nwse"];
var ni = (t2, e3, s2) => {
  if (0 !== e3.x && Fe(s2, "lockSkewingY")) return Ee;
  if (0 !== e3.y && Fe(s2, "lockSkewingX")) return Ee;
  const i2 = Re(s2, e3) % 4;
  return "".concat(ri[i2], "-resize");
};
function oi(t2, e3, r2, n2, o2) {
  const {
    target: a2
  } = r2, {
    counterAxis: h2,
    origin: c2,
    lockSkewing: l2,
    skew: u2,
    flip: d2
  } = ii[t2];
  if (Fe(a2, l2)) return false;
  const {
    origin: g2,
    flip: f2
  } = ii[h2], p2 = Pe(r2[g2]) * (a2[f2] ? -1 : 1), m2 = -Math.sign(p2) * (a2[d2] ? -1 : 1), v2 = 0.5 * -((0 === a2[u2] && Ie(r2, D, D, n2, o2)[t2] > 0 || a2[u2] > 0 ? 1 : -1) * m2) + 0.5, y2 = Ys(X, Ws((e4, s2, r3, n3) => function(t3, e5, s3) {
    let {
      target: r4,
      ex: n4,
      ey: o3,
      skewingSide: a3
    } = e5, h3 = i(e5, si);
    const {
      skew: c3
    } = ii[t3], l3 = s3.subtract(new ot(n4, o3)).divide(new ot(r4.scaleX, r4.scaleY))[t3], u3 = r4[c3], d3 = h3[c3], g3 = Math.tan(xt(d3)), f3 = "y" === t3 ? r4._getTransformedDimensions({
      scaleX: 1,
      scaleY: 1,
      skewX: 0
    }).x : r4._getTransformedDimensions({
      scaleX: 1,
      scaleY: 1
    }).y, p3 = 2 * l3 * a3 / Math.max(f3, 1) + g3, m3 = Ct(Math.atan(p3));
    r4.set(c3, m3);
    const v3 = u3 !== r4[c3];
    if (v3 && "y" === t3) {
      const {
        skewX: t4,
        scaleX: e6
      } = r4, s4 = r4._getTransformedDimensions({
        skewY: u3
      }), i2 = r4._getTransformedDimensions(), n5 = 0 !== t4 ? s4.x / i2.x : 1;
      1 !== n5 && r4.set(G, n5 * e6);
    }
    return v3;
  }(t2, s2, new ot(r3, n3))));
  return y2(e3, s(s({}, r2), {}, {
    [c2]: v2,
    skewingSide: m2
  }), n2, o2);
}
var ai = (t2, e3, s2, i2) => oi("x", t2, e3, s2, i2);
var hi = (t2, e3, s2, i2) => oi("y", t2, e3, s2, i2);
function ci(t2, e3) {
  return t2[e3.canvas.altActionKey];
}
var li = (t2, e3, s2) => {
  const i2 = ci(t2, s2);
  return 0 === e3.x ? i2 ? U : N : 0 === e3.y ? i2 ? q : G : "";
};
var ui = (t2, e3, s2) => ci(t2, s2) ? ni(0, e3, s2) : Qs(t2, e3, s2);
var di = (t2, e3, s2, i2) => ci(t2, e3.target) ? hi(t2, e3, s2, i2) : ti(t2, e3, s2, i2);
var gi = (t2, e3, s2, i2) => ci(t2, e3.target) ? ai(t2, e3, s2, i2) : ei(t2, e3, s2, i2);
var fi = () => ({
  ml: new Gs({
    x: -0.5,
    y: 0,
    cursorStyleHandler: ui,
    actionHandler: di,
    getActionName: li
  }),
  mr: new Gs({
    x: 0.5,
    y: 0,
    cursorStyleHandler: ui,
    actionHandler: di,
    getActionName: li
  }),
  mb: new Gs({
    x: 0,
    y: 0.5,
    cursorStyleHandler: ui,
    actionHandler: gi,
    getActionName: li
  }),
  mt: new Gs({
    x: 0,
    y: -0.5,
    cursorStyleHandler: ui,
    actionHandler: gi,
    getActionName: li
  }),
  tl: new Gs({
    x: -0.5,
    y: -0.5,
    cursorStyleHandler: Qs,
    actionHandler: $s
  }),
  tr: new Gs({
    x: 0.5,
    y: -0.5,
    cursorStyleHandler: Qs,
    actionHandler: $s
  }),
  bl: new Gs({
    x: -0.5,
    y: 0.5,
    cursorStyleHandler: Qs,
    actionHandler: $s
  }),
  br: new Gs({
    x: 0.5,
    y: 0.5,
    cursorStyleHandler: Qs,
    actionHandler: $s
  }),
  mtr: new Gs({
    x: 0,
    y: -0.5,
    actionHandler: Us,
    cursorStyleHandler: Ns,
    offsetY: -40,
    withConnection: true,
    actionName: B
  })
});
var pi = () => ({
  mr: new Gs({
    x: 0.5,
    y: 0,
    actionHandler: Vs,
    cursorStyleHandler: ui,
    actionName: Y
  }),
  ml: new Gs({
    x: -0.5,
    y: 0,
    actionHandler: Vs,
    cursorStyleHandler: ui,
    actionName: Y
  })
});
var mi = () => s(s({}, fi()), pi());
var vi = class _vi extends Xs {
  static getDefaults() {
    return s(s({}, super.getDefaults()), _vi.ownDefaults);
  }
  constructor(t2) {
    super(), Object.assign(this, this.constructor.createControls(), _vi.ownDefaults), this.setOptions(t2);
  }
  static createControls() {
    return {
      controls: fi()
    };
  }
  _updateCacheCanvas() {
    const t2 = this.canvas;
    if (this.noScaleCache && t2 && t2._currentTransform) {
      const e3 = t2._currentTransform, s2 = e3.target, i2 = e3.action;
      if (this === s2 && i2 && i2.startsWith(H)) return false;
    }
    return super._updateCacheCanvas();
  }
  getActiveControl() {
    const t2 = this.__corner;
    return t2 ? {
      key: t2,
      control: this.controls[t2],
      coord: this.oCoords[t2]
    } : void 0;
  }
  findControl(t2) {
    let e3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!this.hasControls || !this.canvas) return;
    this.__corner = void 0;
    const s2 = Object.entries(this.oCoords);
    for (let i2 = s2.length - 1; i2 >= 0; i2--) {
      const [r2, n2] = s2[i2], o2 = this.controls[r2];
      if (o2.shouldActivate(r2, this, t2, e3 ? n2.touchCorner : n2.corner)) return this.__corner = r2, {
        key: r2,
        control: o2,
        coord: this.oCoords[r2]
      };
    }
  }
  calcOCoords() {
    const t2 = this.getViewportTransform(), e3 = this.getCenterPoint(), s2 = Mt(e3.x, e3.y), i2 = Pt({
      angle: this.getTotalAngle() - (this.group && this.flipX ? 180 : 0)
    }), r2 = Tt(s2, i2), n2 = Tt(t2, r2), o2 = Tt(n2, [1 / t2[0], 0, 0, 1 / t2[3], 0, 0]), a2 = this.group ? Dt(this.calcTransformMatrix()) : void 0;
    a2 && (a2.scaleX = Math.abs(a2.scaleX), a2.scaleY = Math.abs(a2.scaleY));
    const h2 = this._calculateCurrentDimensions(a2), c2 = {};
    return this.forEachControl((t3, e4) => {
      const s3 = t3.positionHandler(h2, o2, this, t3);
      c2[e4] = Object.assign(s3, this._calcCornerCoords(t3, s3));
    }), c2;
  }
  _calcCornerCoords(t2, e3) {
    const s2 = this.getTotalAngle();
    return {
      corner: t2.calcCornerCoords(s2, this.cornerSize, e3.x, e3.y, false, this),
      touchCorner: t2.calcCornerCoords(s2, this.touchCornerSize, e3.x, e3.y, true, this)
    };
  }
  setCoords() {
    super.setCoords(), this.canvas && (this.oCoords = this.calcOCoords());
  }
  forEachControl(t2) {
    for (const e3 in this.controls) t2(this.controls[e3], e3, this);
  }
  drawSelectionBackground(t2) {
    if (!this.selectionBackgroundColor || this.canvas && this.canvas._activeObject !== this) return;
    t2.save();
    const e3 = this.getRelativeCenterPoint(), s2 = this._calculateCurrentDimensions(), i2 = this.getViewportTransform();
    t2.translate(e3.x, e3.y), t2.scale(1 / i2[0], 1 / i2[3]), t2.rotate(xt(this.angle)), t2.fillStyle = this.selectionBackgroundColor, t2.fillRect(-s2.x / 2, -s2.y / 2, s2.x, s2.y), t2.restore();
  }
  strokeBorders(t2, e3) {
    t2.strokeRect(-e3.x / 2, -e3.y / 2, e3.x, e3.y);
  }
  _drawBorders(t2, e3) {
    let i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    const r2 = s({
      hasControls: this.hasControls,
      borderColor: this.borderColor,
      borderDashArray: this.borderDashArray
    }, i2);
    t2.save(), t2.strokeStyle = r2.borderColor, this._setLineDash(t2, r2.borderDashArray), this.strokeBorders(t2, e3), r2.hasControls && this.drawControlsConnectingLines(t2, e3), t2.restore();
  }
  _renderControls(t2) {
    let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const {
      hasBorders: i2,
      hasControls: r2
    } = this, n2 = s({
      hasBorders: i2,
      hasControls: r2
    }, e3), o2 = this.getViewportTransform(), a2 = n2.hasBorders, h2 = n2.hasControls, c2 = Tt(o2, this.calcTransformMatrix()), l2 = Dt(c2);
    t2.save(), t2.translate(l2.translateX, l2.translateY), t2.lineWidth = this.borderScaleFactor, this.group === this.parent && (t2.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1), this.flipX && (l2.angle -= 180), t2.rotate(xt(this.group ? l2.angle : this.angle)), a2 && this.drawBorders(t2, l2, e3), h2 && this.drawControls(t2, e3), t2.restore();
  }
  drawBorders(t2, e3, s2) {
    let i2;
    if (s2 && s2.forActiveSelection || this.group) {
      const t3 = we(this.width, this.height, Lt(e3)), s3 = this.isStrokeAccountedForInDimensions() ? at : (this.strokeUniform ? new ot().scalarAdd(this.canvas ? this.canvas.getZoom() : 1) : new ot(e3.scaleX, e3.scaleY)).scalarMultiply(this.strokeWidth);
      i2 = t3.add(s3).scalarAdd(this.borderScaleFactor).scalarAdd(2 * this.padding);
    } else i2 = this._calculateCurrentDimensions().scalarAdd(this.borderScaleFactor);
    this._drawBorders(t2, i2, s2);
  }
  drawControlsConnectingLines(t2, e3) {
    let s2 = false;
    t2.beginPath(), this.forEachControl((i2, r2) => {
      i2.withConnection && i2.getVisibility(this, r2) && (s2 = true, t2.moveTo(i2.x * e3.x, i2.y * e3.y), t2.lineTo(i2.x * e3.x + i2.offsetX, i2.y * e3.y + i2.offsetY));
    }), s2 && t2.stroke();
  }
  drawControls(t2) {
    let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    t2.save();
    const i2 = this.getCanvasRetinaScaling(), {
      cornerStrokeColor: r2,
      cornerDashArray: n2,
      cornerColor: o2
    } = this, a2 = s({
      cornerStrokeColor: r2,
      cornerDashArray: n2,
      cornerColor: o2
    }, e3);
    t2.setTransform(i2, 0, 0, i2, 0, 0), t2.strokeStyle = t2.fillStyle = a2.cornerColor, this.transparentCorners || (t2.strokeStyle = a2.cornerStrokeColor), this._setLineDash(t2, a2.cornerDashArray), this.forEachControl((e4, s2) => {
      if (e4.getVisibility(this, s2)) {
        const i3 = this.oCoords[s2];
        e4.render(t2, i3.x, i3.y, a2, this);
      }
    }), t2.restore();
  }
  isControlVisible(t2) {
    return this.controls[t2] && this.controls[t2].getVisibility(this, t2);
  }
  setControlVisible(t2, e3) {
    this._controlsVisibility || (this._controlsVisibility = {}), this._controlsVisibility[t2] = e3;
  }
  setControlsVisibility() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    Object.entries(t2).forEach((t3) => {
      let [e3, s2] = t3;
      return this.setControlVisible(e3, s2);
    });
  }
  clearContextTop(t2) {
    if (!this.canvas) return;
    const e3 = this.canvas.contextTop;
    if (!e3) return;
    const s2 = this.canvas.viewportTransform;
    e3.save(), e3.transform(s2[0], s2[1], s2[2], s2[3], s2[4], s2[5]), this.transform(e3);
    const i2 = this.width + 4, r2 = this.height + 4;
    return e3.clearRect(-i2 / 2, -r2 / 2, i2, r2), t2 || e3.restore(), e3;
  }
  onDeselect(t2) {
    return false;
  }
  onSelect(t2) {
    return false;
  }
  shouldStartDragging(t2) {
    return false;
  }
  onDragStart(t2) {
    return false;
  }
  canDrop(t2) {
    return false;
  }
  renderDragSourceEffect(t2) {
  }
  renderDropTargetEffect(t2) {
  }
};
function yi(t2, e3) {
  return e3.forEach((e4) => {
    Object.getOwnPropertyNames(e4.prototype).forEach((s2) => {
      "constructor" !== s2 && Object.defineProperty(t2.prototype, s2, Object.getOwnPropertyDescriptor(e4.prototype, s2) || /* @__PURE__ */ Object.create(null));
    });
  }), t2;
}
t(vi, "ownDefaults", {
  noScaleCache: true,
  lockMovementX: false,
  lockMovementY: false,
  lockRotation: false,
  lockScalingX: false,
  lockScalingY: false,
  lockSkewingX: false,
  lockSkewingY: false,
  lockScalingFlip: false,
  cornerSize: 13,
  touchCornerSize: 24,
  transparentCorners: true,
  cornerColor: "rgb(178,204,255)",
  cornerStrokeColor: "",
  cornerStyle: "rect",
  cornerDashArray: null,
  hasControls: true,
  borderColor: "rgb(178,204,255)",
  borderDashArray: null,
  borderOpacityWhenMoving: 0.4,
  borderScaleFactor: 1,
  hasBorders: true,
  selectionBackgroundColor: "",
  selectable: true,
  evented: true,
  perPixelTargetFind: false,
  activeOn: "down",
  hoverCursor: null,
  moveCursor: null
});
var _i = class extends vi {
};
yi(_i, [Xe]), tt.setClass(_i), tt.setClass(_i, "object");
var xi = (t2, e3, s2, i2) => {
  const r2 = 2 * (i2 = Math.round(i2)) + 1, {
    data: n2
  } = t2.getImageData(e3 - i2, s2 - i2, r2, r2);
  for (let t3 = 3; t3 < n2.length; t3 += 4) {
    if (n2[t3] > 0) return false;
  }
  return true;
};
var Ci = class {
  constructor(t2) {
    this.options = t2, this.strokeProjectionMagnitude = this.options.strokeWidth / 2, this.scale = new ot(this.options.scaleX, this.options.scaleY), this.strokeUniformScalar = this.options.strokeUniform ? new ot(1 / this.options.scaleX, 1 / this.options.scaleY) : new ot(1, 1);
  }
  createSideVector(t2, e3) {
    const s2 = es(t2, e3);
    return this.options.strokeUniform ? s2.multiply(this.scale) : s2;
  }
  projectOrthogonally(t2, e3, s2) {
    return this.applySkew(t2.add(this.calcOrthogonalProjection(t2, e3, s2)));
  }
  isSkewed() {
    return 0 !== this.options.skewX || 0 !== this.options.skewY;
  }
  applySkew(t2) {
    const e3 = new ot(t2);
    return e3.y += e3.x * Math.tan(xt(this.options.skewY)), e3.x += e3.y * Math.tan(xt(this.options.skewX)), e3;
  }
  scaleUnitVector(t2, e3) {
    return t2.multiply(this.strokeUniformScalar).scalarMultiply(e3);
  }
};
var bi = new ot();
var wi = class _wi extends Ci {
  static getOrthogonalRotationFactor(t2, e3) {
    const s2 = e3 ? is(t2, e3) : rs(t2);
    return Math.abs(s2) < b ? -1 : 1;
  }
  constructor(e3, s2, i2, r2) {
    super(r2), t(this, "AB", void 0), t(this, "AC", void 0), t(this, "alpha", void 0), t(this, "bisector", void 0), this.A = new ot(e3), this.B = new ot(s2), this.C = new ot(i2), this.AB = this.createSideVector(this.A, this.B), this.AC = this.createSideVector(this.A, this.C), this.alpha = is(this.AB, this.AC), this.bisector = ns(ts(this.AB.eq(bi) ? this.AC : this.AB, this.alpha / 2));
  }
  calcOrthogonalProjection(t2, e3) {
    let s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.strokeProjectionMagnitude;
    const i2 = this.createSideVector(t2, e3), r2 = os(i2), n2 = _wi.getOrthogonalRotationFactor(r2, this.bisector);
    return this.scaleUnitVector(r2, s2 * n2);
  }
  projectBevel() {
    const t2 = [];
    return (this.alpha % w == 0 ? [this.B] : [this.B, this.C]).forEach((e3) => {
      t2.push(this.projectOrthogonally(this.A, e3)), t2.push(this.projectOrthogonally(this.A, e3, -this.strokeProjectionMagnitude));
    }), t2;
  }
  projectMiter() {
    const t2 = [], e3 = Math.abs(this.alpha), s2 = 1 / Math.sin(e3 / 2), i2 = this.scaleUnitVector(this.bisector, -this.strokeProjectionMagnitude * s2), r2 = this.options.strokeUniform ? ss(this.scaleUnitVector(this.bisector, this.options.strokeMiterLimit)) : this.options.strokeMiterLimit;
    return ss(i2) / this.strokeProjectionMagnitude <= r2 && t2.push(this.applySkew(this.A.add(i2))), t2.push(...this.projectBevel()), t2;
  }
  projectRoundNoSkew(t2, e3) {
    const s2 = [], i2 = new ot(_wi.getOrthogonalRotationFactor(this.bisector), _wi.getOrthogonalRotationFactor(new ot(this.bisector.y, this.bisector.x)));
    return [new ot(1, 0).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(i2), new ot(0, 1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(i2)].forEach((i3) => {
      cs(i3, t2, e3) && s2.push(this.A.add(i3));
    }), s2;
  }
  projectRoundWithSkew(t2, e3) {
    const s2 = [], {
      skewX: i2,
      skewY: r2,
      scaleX: n2,
      scaleY: o2,
      strokeUniform: a2
    } = this.options, h2 = new ot(Math.tan(xt(i2)), Math.tan(xt(r2))), c2 = this.strokeProjectionMagnitude, l2 = a2 ? c2 / o2 / Math.sqrt(1 / o2 ** 2 + 1 / n2 ** 2 * h2.y ** 2) : c2 / Math.sqrt(1 + h2.y ** 2), u2 = new ot(Math.sqrt(Math.max(c2 ** 2 - l2 ** 2, 0)), l2), d2 = a2 ? c2 / Math.sqrt(1 + h2.x ** 2 * (1 / o2) ** 2 / (1 / n2 + 1 / n2 * h2.x * h2.y) ** 2) : c2 / Math.sqrt(1 + h2.x ** 2 / (1 + h2.x * h2.y) ** 2), g2 = new ot(d2, Math.sqrt(Math.max(c2 ** 2 - d2 ** 2, 0)));
    return [g2, g2.scalarMultiply(-1), u2, u2.scalarMultiply(-1)].map((t3) => this.applySkew(a2 ? t3.multiply(this.strokeUniformScalar) : t3)).forEach((i3) => {
      cs(i3, t2, e3) && s2.push(this.applySkew(this.A).add(i3));
    }), s2;
  }
  projectRound() {
    const t2 = [];
    t2.push(...this.projectBevel());
    const e3 = this.alpha % w == 0, s2 = this.applySkew(this.A), i2 = t2[e3 ? 0 : 2].subtract(s2), r2 = t2[e3 ? 1 : 0].subtract(s2), n2 = e3 ? this.applySkew(this.AB.scalarMultiply(-1)) : this.applySkew(this.bisector.multiply(this.strokeUniformScalar).scalarMultiply(-1)), o2 = as(i2, n2) > 0, a2 = o2 ? i2 : r2, h2 = o2 ? r2 : i2;
    return this.isSkewed() ? t2.push(...this.projectRoundWithSkew(a2, h2)) : t2.push(...this.projectRoundNoSkew(a2, h2)), t2;
  }
  projectPoints() {
    switch (this.options.strokeLineJoin) {
      case "miter":
        return this.projectMiter();
      case "round":
        return this.projectRound();
      default:
        return this.projectBevel();
    }
  }
  project() {
    return this.projectPoints().map((t2) => ({
      originPoint: this.A,
      projectedPoint: t2,
      angle: this.alpha,
      bisector: this.bisector
    }));
  }
};
var Si = class extends Ci {
  constructor(t2, e3, s2) {
    super(s2), this.A = new ot(t2), this.T = new ot(e3);
  }
  calcOrthogonalProjection(t2, e3) {
    let s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.strokeProjectionMagnitude;
    const i2 = this.createSideVector(t2, e3);
    return this.scaleUnitVector(os(i2), s2);
  }
  projectButt() {
    return [this.projectOrthogonally(this.A, this.T, this.strokeProjectionMagnitude), this.projectOrthogonally(this.A, this.T, -this.strokeProjectionMagnitude)];
  }
  projectRound() {
    const t2 = [];
    if (!this.isSkewed() && this.A.eq(this.T)) {
      const e3 = new ot(1, 1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar);
      t2.push(this.applySkew(this.A.add(e3)), this.applySkew(this.A.subtract(e3)));
    } else t2.push(...new wi(this.A, this.T, this.T, this.options).projectRound());
    return t2;
  }
  projectSquare() {
    const t2 = [];
    if (this.A.eq(this.T)) {
      const e3 = new ot(1, 1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar);
      t2.push(this.A.add(e3), this.A.subtract(e3));
    } else {
      const e3 = this.calcOrthogonalProjection(this.A, this.T, this.strokeProjectionMagnitude), s2 = this.scaleUnitVector(ns(this.createSideVector(this.A, this.T)), -this.strokeProjectionMagnitude), i2 = this.A.add(s2);
      t2.push(i2.add(e3), i2.subtract(e3));
    }
    return t2.map((t3) => this.applySkew(t3));
  }
  projectPoints() {
    switch (this.options.strokeLineCap) {
      case "round":
        return this.projectRound();
      case "square":
        return this.projectSquare();
      default:
        return this.projectButt();
    }
  }
  project() {
    return this.projectPoints().map((t2) => ({
      originPoint: this.A,
      projectedPoint: t2
    }));
  }
};
var Ti = function(t2, e3) {
  let s2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  const i2 = [];
  if (0 === t2.length) return i2;
  const r2 = t2.reduce((t3, e4) => (t3[t3.length - 1].eq(e4) || t3.push(new ot(e4)), t3), [new ot(t2[0])]);
  if (1 === r2.length) s2 = true;
  else if (!s2) {
    const t3 = r2[0], e4 = ((t4, e5) => {
      for (let s3 = t4.length - 1; s3 >= 0; s3--) if (e5(t4[s3], s3, t4)) return s3;
      return -1;
    })(r2, (e5) => !e5.eq(t3));
    r2.splice(e4 + 1);
  }
  return r2.forEach((t3, r3, n2) => {
    let o2, a2;
    0 === r3 ? (a2 = n2[1], o2 = s2 ? t3 : n2[n2.length - 1]) : r3 === n2.length - 1 ? (o2 = n2[r3 - 1], a2 = s2 ? t3 : n2[0]) : (o2 = n2[r3 - 1], a2 = n2[r3 + 1]), s2 && 1 === n2.length ? i2.push(...new Si(t3, t3, e3).project()) : !s2 || 0 !== r3 && r3 !== n2.length - 1 ? i2.push(...new wi(t3, o2, a2, e3).project()) : i2.push(...new Si(t3, 0 === r3 ? a2 : o2, e3).project());
  }), i2;
};
var Oi = (t2) => {
  const e3 = {};
  return Object.keys(t2).forEach((i2) => {
    e3[i2] = {}, Object.keys(t2[i2]).forEach((r2) => {
      e3[i2][r2] = s({}, t2[i2][r2]);
    });
  }), e3;
};
var ki = (t2) => t2.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var Di = (t2) => {
  const e3 = [];
  for (let s2, i2 = 0; i2 < t2.length; i2++) false !== (s2 = Mi(t2, i2)) && e3.push(s2);
  return e3;
};
var Mi = (t2, e3) => {
  const s2 = t2.charCodeAt(e3);
  if (isNaN(s2)) return "";
  if (s2 < 55296 || s2 > 57343) return t2.charAt(e3);
  if (55296 <= s2 && s2 <= 56319) {
    if (t2.length <= e3 + 1) throw "High surrogate without following low surrogate";
    const s3 = t2.charCodeAt(e3 + 1);
    if (56320 > s3 || s3 > 57343) throw "High surrogate without following low surrogate";
    return t2.charAt(e3) + t2.charAt(e3 + 1);
  }
  if (0 === e3) throw "Low surrogate without preceding high surrogate";
  const i2 = t2.charCodeAt(e3 - 1);
  if (55296 > i2 || i2 > 56319) throw "Low surrogate without preceding high surrogate";
  return false;
};
var Pi = Object.freeze({
  __proto__: null,
  capitalize: function(t2) {
    let e3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return "".concat(t2.charAt(0).toUpperCase()).concat(e3 ? t2.slice(1) : t2.slice(1).toLowerCase());
  },
  escapeXml: ki,
  graphemeSplit: Di
});
var Ei = function(t2, e3) {
  let s2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return t2.fill !== e3.fill || t2.stroke !== e3.stroke || t2.strokeWidth !== e3.strokeWidth || t2.fontSize !== e3.fontSize || t2.fontFamily !== e3.fontFamily || t2.fontWeight !== e3.fontWeight || t2.fontStyle !== e3.fontStyle || t2.textBackgroundColor !== e3.textBackgroundColor || t2.deltaY !== e3.deltaY || s2 && (t2.overline !== e3.overline || t2.underline !== e3.underline || t2.linethrough !== e3.linethrough);
};
var Ai = (t2, e3) => {
  const s2 = e3.split("\n"), i2 = [];
  let r2 = -1, n2 = {};
  t2 = Oi(t2);
  for (let e4 = 0; e4 < s2.length; e4++) {
    const o2 = Di(s2[e4]);
    if (t2[e4]) for (let s3 = 0; s3 < o2.length; s3++) {
      r2++;
      const o3 = t2[e4][s3];
      o3 && Object.keys(o3).length > 0 && (Ei(n2, o3, true) ? i2.push({
        start: r2,
        end: r2 + 1,
        style: o3
      }) : i2[i2.length - 1].end++), n2 = o3 || {};
    }
    else r2 += o2.length, n2 = {};
  }
  return i2;
};
var ji = (t2, e3) => {
  if (!Array.isArray(t2)) return Oi(t2);
  const i2 = e3.split(F), r2 = {};
  let n2 = -1, o2 = 0;
  for (let e4 = 0; e4 < i2.length; e4++) {
    const a2 = Di(i2[e4]);
    for (let i3 = 0; i3 < a2.length; i3++) n2++, t2[o2] && t2[o2].start <= n2 && n2 < t2[o2].end && (r2[e4] = r2[e4] || {}, r2[e4][i3] = s({}, t2[o2].style), n2 === t2[o2].end - 1 && o2++);
  }
  return r2;
};
var Fi = ["display", "transform", K, "fill-opacity", "fill-rule", "opacity", J, "stroke-dasharray", "stroke-linecap", "stroke-dashoffset", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "id", "paint-order", "vector-effect", "instantiated_by_use", "clip-path"];
function Li(t2, e3) {
  const s2 = t2.nodeName, i2 = t2.getAttribute("class"), r2 = t2.getAttribute("id"), n2 = "(?![a-zA-Z\\-]+)";
  let o2;
  if (o2 = new RegExp("^" + s2, "i"), e3 = e3.replace(o2, ""), r2 && e3.length && (o2 = new RegExp("#" + r2 + n2, "i"), e3 = e3.replace(o2, "")), i2 && e3.length) {
    const t3 = i2.split(" ");
    for (let s3 = t3.length; s3--; ) o2 = new RegExp("\\." + t3[s3] + n2, "i"), e3 = e3.replace(o2, "");
  }
  return 0 === e3.length;
}
function Ri(t2, e3) {
  let s2 = true;
  const i2 = Li(t2, e3.pop());
  return i2 && e3.length && (s2 = function(t3, e4) {
    let s3, i3 = true;
    for (; t3.parentElement && 1 === t3.parentElement.nodeType && e4.length; ) i3 && (s3 = e4.pop()), i3 = Li(t3 = t3.parentElement, s3);
    return 0 === e4.length;
  }(t2, e3)), i2 && s2 && 0 === e3.length;
}
var Ii = (t2) => {
  var e3;
  return null !== (e3 = Ge[t2]) && void 0 !== e3 ? e3 : t2;
};
var Bi = new RegExp("(".concat(Ve, ")"), "gi");
var Xi = (t2) => t2.replace(Bi, " $1 ").replace(/,/gi, " ").replace(/\s+/gi, " ");
var Yi;
var Wi;
var Vi;
var zi;
var Hi;
var Gi;
var Ni;
var Ui = "(".concat(Ve, ")");
var qi = String.raw(Yi || (Yi = r(["(skewX)(", ")"], ["(skewX)\\(", "\\)"])), Ui);
var Ki = String.raw(Wi || (Wi = r(["(skewY)(", ")"], ["(skewY)\\(", "\\)"])), Ui);
var Ji = String.raw(Vi || (Vi = r(["(rotate)(", "(?: ", " ", ")?)"], ["(rotate)\\(", "(?: ", " ", ")?\\)"])), Ui, Ui, Ui);
var Qi = String.raw(zi || (zi = r(["(scale)(", "(?: ", ")?)"], ["(scale)\\(", "(?: ", ")?\\)"])), Ui, Ui);
var Zi = String.raw(Hi || (Hi = r(["(translate)(", "(?: ", ")?)"], ["(translate)\\(", "(?: ", ")?\\)"])), Ui, Ui);
var $i = String.raw(Gi || (Gi = r(["(matrix)(", " ", " ", " ", " ", " ", ")"], ["(matrix)\\(", " ", " ", " ", " ", " ", "\\)"])), Ui, Ui, Ui, Ui, Ui, Ui);
var tr = "(?:".concat($i, "|").concat(Zi, "|").concat(Ji, "|").concat(Qi, "|").concat(qi, "|").concat(Ki, ")");
var er = "(?:".concat(tr, "*)");
var sr = String.raw(Ni || (Ni = r(["^s*(?:", "?)s*$"], ["^\\s*(?:", "?)\\s*$"])), er);
var ir = new RegExp(sr);
var rr = new RegExp(tr);
var nr = new RegExp(tr, "g");
function or(t2) {
  const e3 = [];
  if (!(t2 = Xi(t2).replace(/\s*([()])\s*/gi, "$1")) || t2 && !ir.test(t2)) return [...T];
  for (const s2 of t2.matchAll(nr)) {
    const t3 = rr.exec(s2[0]);
    if (!t3) continue;
    let i2 = T;
    const r2 = t3.filter((t4) => !!t4), [, n2, ...o2] = r2, [a2, h2, c2, l2, u2, d2] = o2.map((t4) => parseFloat(t4));
    switch (n2) {
      case "translate":
        i2 = Mt(a2, h2);
        break;
      case B:
        i2 = Pt({
          angle: a2
        }, {
          x: h2,
          y: c2
        });
        break;
      case H:
        i2 = Et(a2, h2);
        break;
      case U:
        i2 = jt(a2);
        break;
      case q:
        i2 = Ft(a2);
        break;
      case "matrix":
        i2 = [a2, h2, c2, l2, u2, d2];
    }
    e3.push(i2);
  }
  return Ot(e3);
}
function ar(t2, e3, s2, i2) {
  const r2 = Array.isArray(e3);
  let n2, o2 = e3;
  if (t2 !== K && t2 !== J || e3 !== j) {
    if ("strokeUniform" === t2) return "non-scaling-stroke" === e3;
    if ("strokeDashArray" === t2) o2 = e3 === j ? null : e3.replace(/,/g, " ").split(/\s+/).map(parseFloat);
    else if ("transformMatrix" === t2) o2 = s2 && s2.transformMatrix ? Tt(s2.transformMatrix, or(e3)) : or(e3);
    else if ("visible" === t2) o2 = e3 !== j && "hidden" !== e3, s2 && false === s2.visible && (o2 = false);
    else if ("opacity" === t2) o2 = parseFloat(e3), s2 && void 0 !== s2.opacity && (o2 *= s2.opacity);
    else if ("textAnchor" === t2) o2 = "start" === e3 ? M : "end" === e3 ? A : D;
    else if ("charSpacing" === t2) n2 = Jt(e3, i2) / i2 * 1e3;
    else if ("paintFirst" === t2) {
      const t3 = e3.indexOf(K), s3 = e3.indexOf(J);
      o2 = K, (t3 > -1 && s3 > -1 && s3 < t3 || -1 === t3 && s3 > -1) && (o2 = J);
    } else {
      if ("href" === t2 || "xlink:href" === t2 || "font" === t2 || "id" === t2) return e3;
      if ("imageSmoothing" === t2) return "optimizeQuality" === e3;
      n2 = r2 ? e3.map(Jt) : Jt(e3, i2);
    }
  } else o2 = "";
  return !r2 && isNaN(n2) ? o2 : n2;
}
function hr(t2, e3) {
  const s2 = t2.match(He);
  if (!s2) return;
  const i2 = s2[1], r2 = s2[3], n2 = s2[4], o2 = s2[5], a2 = s2[6];
  i2 && (e3.fontStyle = i2), r2 && (e3.fontWeight = isNaN(parseFloat(r2)) ? r2 : parseFloat(r2)), n2 && (e3.fontSize = Jt(n2)), a2 && (e3.fontFamily = a2), o2 && (e3.lineHeight = "normal" === o2 ? 1 : o2);
}
function cr(t2, e3) {
  t2.replace(/;\s*$/, "").split(";").forEach((t3) => {
    if (!t3) return;
    const [s2, i2] = t3.split(":");
    e3[s2.trim().toLowerCase()] = i2.trim();
  });
}
function lr(t2) {
  const e3 = {}, s2 = t2.getAttribute("style");
  return s2 ? ("string" == typeof s2 ? cr(s2, e3) : function(t3, e4) {
    Object.entries(t3).forEach((t4) => {
      let [s3, i2] = t4;
      void 0 !== i2 && (e4[s3.toLowerCase()] = i2);
    });
  }(s2, e3), e3) : e3;
}
var ur = {
  stroke: "strokeOpacity",
  fill: "fillOpacity"
};
function dr(t2, e3, i2) {
  if (!t2) return {};
  let r2, n2 = {}, o2 = O;
  t2.parentNode && Je.test(t2.parentNode.nodeName) && (n2 = dr(t2.parentElement, e3, i2), n2.fontSize && (r2 = o2 = Jt(n2.fontSize)));
  const a2 = s(s(s({}, e3.reduce((e4, s2) => {
    const i3 = t2.getAttribute(s2);
    return i3 && (e4[s2] = i3), e4;
  }, {})), function(t3) {
    let e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i3 = {};
    for (const r3 in e4) Ri(t3, r3.split(" ")) && (i3 = s(s({}, i3), e4[r3]));
    return i3;
  }(t2, i2)), lr(t2));
  a2[Ue] && t2.setAttribute(Ue, a2[Ue]), a2[Ne] && (r2 = Jt(a2[Ne], o2), a2[Ne] = "".concat(r2));
  const h2 = {};
  for (const t3 in a2) {
    const e4 = Ii(t3), s2 = ar(e4, a2[t3], n2, r2);
    h2[e4] = s2;
  }
  h2 && h2.font && hr(h2.font, h2);
  const c2 = s(s({}, n2), h2);
  return Je.test(t2.nodeName) ? c2 : function(t3) {
    const e4 = _i.getDefaults();
    return Object.entries(ur).forEach((s2) => {
      let [i3, r3] = s2;
      if (void 0 === t3[r3] || "" === t3[i3]) return;
      if (void 0 === t3[i3]) {
        if (!e4[i3]) return;
        t3[i3] = e4[i3];
      }
      if (0 === t3[i3].indexOf("url(")) return;
      const n3 = new qt(t3[i3]);
      t3[i3] = n3.setAlpha(Kt(n3.getAlpha() * t3[r3], 2)).toRgba();
    }), t3;
  }(c2);
}
var gr = ["left", "top", "width", "height", "visible"];
var fr = ["rx", "ry"];
var pr = class _pr extends _i {
  static getDefaults() {
    return s(s({}, super.getDefaults()), _pr.ownDefaults);
  }
  constructor(t2) {
    super(), Object.assign(this, _pr.ownDefaults), this.setOptions(t2), this._initRxRy();
  }
  _initRxRy() {
    const {
      rx: t2,
      ry: e3
    } = this;
    t2 && !e3 ? this.ry = t2 : e3 && !t2 && (this.rx = e3);
  }
  _render(t2) {
    const {
      width: e3,
      height: s2
    } = this, i2 = -e3 / 2, r2 = -s2 / 2, n2 = this.rx ? Math.min(this.rx, e3 / 2) : 0, o2 = this.ry ? Math.min(this.ry, s2 / 2) : 0, a2 = 0 !== n2 || 0 !== o2;
    t2.beginPath(), t2.moveTo(i2 + n2, r2), t2.lineTo(i2 + e3 - n2, r2), a2 && t2.bezierCurveTo(i2 + e3 - k * n2, r2, i2 + e3, r2 + k * o2, i2 + e3, r2 + o2), t2.lineTo(i2 + e3, r2 + s2 - o2), a2 && t2.bezierCurveTo(i2 + e3, r2 + s2 - k * o2, i2 + e3 - k * n2, r2 + s2, i2 + e3 - n2, r2 + s2), t2.lineTo(i2 + n2, r2 + s2), a2 && t2.bezierCurveTo(i2 + k * n2, r2 + s2, i2, r2 + s2 - k * o2, i2, r2 + s2 - o2), t2.lineTo(i2, r2 + o2), a2 && t2.bezierCurveTo(i2, r2 + k * o2, i2 + k * n2, r2, i2 + n2, r2), t2.closePath(), this._renderPaintInOrder(t2);
  }
  toObject() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return super.toObject([...fr, ...t2]);
  }
  _toSVG() {
    const {
      width: t2,
      height: e3,
      rx: s2,
      ry: i2
    } = this;
    return ["<rect ", "COMMON_PARTS", 'x="'.concat(-t2 / 2, '" y="').concat(-e3 / 2, '" rx="').concat(s2, '" ry="').concat(i2, '" width="').concat(t2, '" height="').concat(e3, '" />\n')];
  }
  static fromElement(t2, e3, r2) {
    return __async(this, null, function* () {
      const n2 = dr(t2, this.ATTRIBUTE_NAMES, r2), {
        left: o2 = 0,
        top: a2 = 0,
        width: h2 = 0,
        height: c2 = 0,
        visible: l2 = true
      } = n2, u2 = i(n2, gr);
      return new this(s(s(s({}, e3), u2), {}, {
        left: o2,
        top: a2,
        width: h2,
        height: c2,
        visible: Boolean(l2 && h2 && c2)
      }));
    });
  }
};
t(pr, "type", "Rect"), t(pr, "cacheProperties", [...ps, ...fr]), t(pr, "ownDefaults", {
  rx: 0,
  ry: 0
}), t(pr, "ATTRIBUTE_NAMES", [...Fi, "x", "y", "rx", "ry", "width", "height"]), tt.setClass(pr), tt.setSVGClass(pr);
var mr = "initialization";
var vr = "added";
var yr = "removed";
var _r = "imperative";
var xr = (t2, e3) => {
  const {
    strokeUniform: s2,
    strokeWidth: i2,
    width: r2,
    height: n2,
    group: o2
  } = e3, a2 = o2 && o2 !== t2 ? Se(o2.calcTransformMatrix(), t2.calcTransformMatrix()) : null, h2 = a2 ? e3.getRelativeCenterPoint().transform(a2) : e3.getRelativeCenterPoint(), c2 = !e3.isStrokeAccountedForInDimensions(), l2 = s2 && c2 ? Oe(new ot(i2, i2), void 0, t2.calcTransformMatrix()) : at, u2 = !s2 && c2 ? i2 : 0, d2 = we(r2 + u2, n2 + u2, Ot([a2, e3.calcOwnMatrix()], true)).add(l2).scalarDivide(2);
  return [h2.subtract(d2), h2.add(d2)];
};
var Cr = class {
  calcLayoutResult(t2, e3) {
    if (this.shouldPerformLayout(t2)) return this.calcBoundingBox(e3, t2);
  }
  shouldPerformLayout(t2) {
    let {
      type: e3,
      prevStrategy: s2,
      strategy: i2
    } = t2;
    return e3 === mr || e3 === _r || !!s2 && i2 !== s2;
  }
  shouldLayoutClipPath(t2) {
    let {
      type: e3,
      target: {
        clipPath: s2
      }
    } = t2;
    return e3 !== mr && s2 && !s2.absolutePositioned;
  }
  getInitialSize(t2, e3) {
    return e3.size;
  }
  calcBoundingBox(t2, e3) {
    const {
      type: s2,
      target: i2
    } = e3;
    if (s2 === _r && e3.overrides) return e3.overrides;
    if (0 === t2.length) return;
    const {
      left: r2,
      top: n2,
      width: o2,
      height: a2
    } = ve(t2.map((t3) => xr(i2, t3)).reduce((t3, e4) => t3.concat(e4), [])), h2 = new ot(o2, a2), c2 = new ot(r2, n2).add(h2.scalarDivide(2));
    if (s2 === mr) {
      const t3 = this.getInitialSize(e3, {
        size: h2,
        center: c2
      });
      return {
        center: c2,
        relativeCorrection: new ot(0, 0),
        size: t3
      };
    }
    return {
      center: c2.transform(i2.calcOwnMatrix()),
      size: h2
    };
  }
};
t(Cr, "type", "strategy");
var br = class extends Cr {
  shouldPerformLayout(t2) {
    return true;
  }
};
t(br, "type", "fit-content"), tt.setClass(br);
var wr = ["strategy"];
var Sr = ["target", "strategy", "bubbles", "prevStrategy"];
var Tr = "layoutManager";
var Or = class {
  constructor() {
    let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new br();
    t(this, "strategy", void 0), this.strategy = e3, this._subscriptions = /* @__PURE__ */ new Map();
  }
  performLayout(t2) {
    const e3 = s(s({
      bubbles: true,
      strategy: this.strategy
    }, t2), {}, {
      prevStrategy: this._prevLayoutStrategy,
      stopPropagation() {
        this.bubbles = false;
      }
    });
    this.onBeforeLayout(e3);
    const i2 = this.getLayoutResult(e3);
    i2 && this.commitLayout(e3, i2), this.onAfterLayout(e3, i2), this._prevLayoutStrategy = e3.strategy;
  }
  attachHandlers(t2, e3) {
    const {
      target: s2
    } = e3;
    return [Q, L, Y, I, R, X, z, W, V].map((e4) => t2.on(e4, (t3) => this.performLayout(e4 === Q ? {
      type: "object_modified",
      trigger: e4,
      e: t3,
      target: s2
    } : {
      type: "object_modifying",
      trigger: e4,
      e: t3,
      target: s2
    })));
  }
  subscribe(t2, e3) {
    this.unsubscribe(t2, e3);
    const s2 = this.attachHandlers(t2, e3);
    this._subscriptions.set(t2, s2);
  }
  unsubscribe(t2, e3) {
    (this._subscriptions.get(t2) || []).forEach((t3) => t3()), this._subscriptions.delete(t2);
  }
  unsubscribeTargets(t2) {
    t2.targets.forEach((e3) => this.unsubscribe(e3, t2));
  }
  subscribeTargets(t2) {
    t2.targets.forEach((e3) => this.subscribe(e3, t2));
  }
  onBeforeLayout(t2) {
    const {
      target: e3,
      type: r2
    } = t2, {
      canvas: n2
    } = e3;
    if (r2 === mr || r2 === vr ? this.subscribeTargets(t2) : r2 === yr && this.unsubscribeTargets(t2), e3.fire("layout:before", {
      context: t2
    }), n2 && n2.fire("object:layout:before", {
      target: e3,
      context: t2
    }), r2 === _r && t2.deep) {
      const r3 = i(t2, wr);
      e3.forEachObject((t3) => t3.layoutManager && t3.layoutManager.performLayout(s(s({}, r3), {}, {
        bubbles: false,
        target: t3
      })));
    }
  }
  getLayoutResult(t2) {
    const {
      target: e3,
      strategy: s2,
      type: i2
    } = t2, r2 = s2.calcLayoutResult(t2, e3.getObjects());
    if (!r2) return;
    const n2 = i2 === mr ? new ot() : e3.getRelativeCenterPoint(), {
      center: o2,
      correction: a2 = new ot(),
      relativeCorrection: h2 = new ot()
    } = r2, c2 = n2.subtract(o2).add(a2).transform(i2 === mr ? T : St(e3.calcOwnMatrix()), true).add(h2);
    return {
      result: r2,
      prevCenter: n2,
      nextCenter: o2,
      offset: c2
    };
  }
  commitLayout(t2, e3) {
    const {
      target: s2
    } = t2, {
      result: {
        size: i2
      },
      nextCenter: r2
    } = e3;
    var n2, o2;
    (s2.set({
      width: i2.x,
      height: i2.y
    }), this.layoutObjects(t2, e3), t2.type === mr) ? s2.set({
      left: null !== (n2 = t2.x) && void 0 !== n2 ? n2 : r2.x + i2.x * Pe(s2.originX),
      top: null !== (o2 = t2.y) && void 0 !== o2 ? o2 : r2.y + i2.y * Pe(s2.originY)
    }) : (s2.setPositionByOrigin(r2, D, D), s2.setCoords(), s2.set("dirty", true));
  }
  layoutObjects(t2, e3) {
    const {
      target: s2
    } = t2;
    s2.forEachObject((i2) => {
      i2.group === s2 && this.layoutObject(t2, e3, i2);
    }), t2.strategy.shouldLayoutClipPath(t2) && this.layoutObject(t2, e3, s2.clipPath);
  }
  layoutObject(t2, e3, s2) {
    let {
      offset: i2
    } = e3;
    s2.set({
      left: s2.left + i2.x,
      top: s2.top + i2.y
    });
  }
  onAfterLayout(t2, e3) {
    const {
      target: r2,
      strategy: n2,
      bubbles: o2,
      prevStrategy: a2
    } = t2, h2 = i(t2, Sr), {
      canvas: c2
    } = r2;
    r2.fire("layout:after", {
      context: t2,
      result: e3
    }), c2 && c2.fire("object:layout:after", {
      context: t2,
      result: e3,
      target: r2
    });
    const l2 = r2.parent;
    o2 && null != l2 && l2.layoutManager && ((h2.path || (h2.path = [])).push(r2), l2.layoutManager.performLayout(s(s({}, h2), {}, {
      target: l2
    }))), r2.set("dirty", true);
  }
  dispose() {
    const {
      _subscriptions: t2
    } = this;
    t2.forEach((t3) => t3.forEach((t4) => t4())), t2.clear();
  }
  toObject() {
    return {
      type: Tr,
      strategy: this.strategy.constructor.type
    };
  }
  toJSON() {
    return this.toObject();
  }
};
tt.setClass(Or, Tr);
var kr = ["type", "objects", "layoutManager"];
var Dr = class extends Or {
  performLayout() {
  }
};
var Mr = class _Mr extends ct(_i) {
  static getDefaults() {
    return s(s({}, super.getDefaults()), _Mr.ownDefaults);
  }
  constructor() {
    let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], s2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    super(), t(this, "_activeObjects", []), t(this, "__objectSelectionTracker", void 0), t(this, "__objectSelectionDisposer", void 0), Object.assign(this, _Mr.ownDefaults), this.setOptions(s2), this.groupInit(e3, s2);
  }
  groupInit(t2, e3) {
    var s2;
    this._objects = [...t2], this.__objectSelectionTracker = this.__objectSelectionMonitor.bind(this, true), this.__objectSelectionDisposer = this.__objectSelectionMonitor.bind(this, false), this.forEachObject((t3) => {
      this.enterGroup(t3, false);
    }), this.layoutManager = null !== (s2 = e3.layoutManager) && void 0 !== s2 ? s2 : new Or(), this.layoutManager.performLayout({
      type: mr,
      target: this,
      targets: [...t2],
      x: e3.left,
      y: e3.top
    });
  }
  canEnterGroup(t2) {
    return t2 === this || this.isDescendantOf(t2) ? (a("error", "Group: circular object trees are not supported, this call has no effect"), false) : -1 === this._objects.indexOf(t2) || (a("error", "Group: duplicate objects are not supported inside group, this call has no effect"), false);
  }
  _filterObjectsBeforeEnteringGroup(t2) {
    return t2.filter((t3, e3, s2) => this.canEnterGroup(t3) && s2.indexOf(t3) === e3);
  }
  add() {
    for (var t2 = arguments.length, e3 = new Array(t2), s2 = 0; s2 < t2; s2++) e3[s2] = arguments[s2];
    const i2 = this._filterObjectsBeforeEnteringGroup(e3), r2 = super.add(...i2);
    return this._onAfterObjectsChange(vr, i2), r2;
  }
  insertAt(t2) {
    for (var e3 = arguments.length, s2 = new Array(e3 > 1 ? e3 - 1 : 0), i2 = 1; i2 < e3; i2++) s2[i2 - 1] = arguments[i2];
    const r2 = this._filterObjectsBeforeEnteringGroup(s2), n2 = super.insertAt(t2, ...r2);
    return this._onAfterObjectsChange(vr, r2), n2;
  }
  remove() {
    const t2 = super.remove(...arguments);
    return this._onAfterObjectsChange(yr, t2), t2;
  }
  _onObjectAdded(t2) {
    this.enterGroup(t2, true), this.fire("object:added", {
      target: t2
    }), t2.fire("added", {
      target: this
    });
  }
  _onObjectRemoved(t2, e3) {
    this.exitGroup(t2, e3), this.fire("object:removed", {
      target: t2
    }), t2.fire("removed", {
      target: this
    });
  }
  _onAfterObjectsChange(t2, e3) {
    this.layoutManager.performLayout({
      type: t2,
      targets: e3,
      target: this
    });
  }
  _onStackOrderChanged() {
    this._set("dirty", true);
  }
  _set(t2, e3) {
    const s2 = this[t2];
    return super._set(t2, e3), "canvas" === t2 && s2 !== e3 && (this._objects || []).forEach((s3) => {
      s3._set(t2, e3);
    }), this;
  }
  _shouldSetNestedCoords() {
    return this.subTargetCheck;
  }
  removeAll() {
    return this._activeObjects = [], this.remove(...this._objects);
  }
  __objectSelectionMonitor(t2, e3) {
    let {
      target: s2
    } = e3;
    const i2 = this._activeObjects;
    if (t2) i2.push(s2), this._set("dirty", true);
    else if (i2.length > 0) {
      const t3 = i2.indexOf(s2);
      t3 > -1 && (i2.splice(t3, 1), this._set("dirty", true));
    }
  }
  _watchObject(t2, e3) {
    t2 && this._watchObject(false, e3), t2 ? (e3.on("selected", this.__objectSelectionTracker), e3.on("deselected", this.__objectSelectionDisposer)) : (e3.off("selected", this.__objectSelectionTracker), e3.off("deselected", this.__objectSelectionDisposer));
  }
  enterGroup(t2, e3) {
    t2.group && t2.group.remove(t2), t2._set("parent", this), this._enterGroup(t2, e3);
  }
  _enterGroup(t2, e3) {
    e3 && xe(t2, Tt(St(this.calcTransformMatrix()), t2.calcTransformMatrix())), this._shouldSetNestedCoords() && t2.setCoords(), t2._set("group", this), t2._set("canvas", this.canvas), this._watchObject(true, t2);
    const s2 = this.canvas && this.canvas.getActiveObject && this.canvas.getActiveObject();
    s2 && (s2 === t2 || t2.isDescendantOf(s2)) && this._activeObjects.push(t2);
  }
  exitGroup(t2, e3) {
    this._exitGroup(t2, e3), t2._set("parent", void 0), t2._set("canvas", void 0);
  }
  _exitGroup(t2, e3) {
    t2._set("group", void 0), e3 || (xe(t2, Tt(this.calcTransformMatrix(), t2.calcTransformMatrix())), t2.setCoords()), this._watchObject(false, t2);
    const s2 = this._activeObjects.length > 0 ? this._activeObjects.indexOf(t2) : -1;
    s2 > -1 && this._activeObjects.splice(s2, 1);
  }
  shouldCache() {
    const t2 = _i.prototype.shouldCache.call(this);
    if (t2) {
      for (let t3 = 0; t3 < this._objects.length; t3++) if (this._objects[t3].willDrawShadow()) return this.ownCaching = false, false;
    }
    return t2;
  }
  willDrawShadow() {
    if (super.willDrawShadow()) return true;
    for (let t2 = 0; t2 < this._objects.length; t2++) if (this._objects[t2].willDrawShadow()) return true;
    return false;
  }
  isOnACache() {
    return this.ownCaching || !!this.parent && this.parent.isOnACache();
  }
  drawObject(t2, e3, s2) {
    this._renderBackground(t2);
    for (let e4 = 0; e4 < this._objects.length; e4++) {
      var i2;
      const s3 = this._objects[e4];
      null !== (i2 = this.canvas) && void 0 !== i2 && i2.preserveObjectStacking && s3.group !== this ? (t2.save(), t2.transform(...St(this.calcTransformMatrix())), s3.render(t2), t2.restore()) : s3.group === this && s3.render(t2);
    }
    this._drawClipPath(t2, this.clipPath, s2);
  }
  setCoords() {
    super.setCoords(), this._shouldSetNestedCoords() && this.forEachObject((t2) => t2.setCoords());
  }
  triggerLayout() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    this.layoutManager.performLayout(s({
      target: this,
      type: _r
    }, t2));
  }
  render(t2) {
    this._transformDone = true, super.render(t2), this._transformDone = false;
  }
  __serializeObjects(t2, e3) {
    const s2 = this.includeDefaultValues;
    return this._objects.filter(function(t3) {
      return !t3.excludeFromExport;
    }).map(function(i2) {
      const r2 = i2.includeDefaultValues;
      i2.includeDefaultValues = s2;
      const n2 = i2[t2 || "toObject"](e3);
      return i2.includeDefaultValues = r2, n2;
    });
  }
  toObject() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    const e3 = this.layoutManager.toObject();
    return s(s(s({}, super.toObject(["subTargetCheck", "interactive", ...t2])), "fit-content" !== e3.strategy || this.includeDefaultValues ? {
      layoutManager: e3
    } : {}), {}, {
      objects: this.__serializeObjects("toObject", t2)
    });
  }
  toString() {
    return "#<Group: (".concat(this.complexity(), ")>");
  }
  dispose() {
    this.layoutManager.unsubscribeTargets({
      targets: this.getObjects(),
      target: this
    }), this._activeObjects = [], this.forEachObject((t2) => {
      this._watchObject(false, t2), t2.dispose();
    }), super.dispose();
  }
  _createSVGBgRect(t2) {
    if (!this.backgroundColor) return "";
    const e3 = pr.prototype._toSVG.call(this), s2 = e3.indexOf("COMMON_PARTS");
    e3[s2] = 'for="group" ';
    const i2 = e3.join("");
    return t2 ? t2(i2) : i2;
  }
  _toSVG(t2) {
    const e3 = ["<g ", "COMMON_PARTS", " >\n"], s2 = this._createSVGBgRect(t2);
    s2 && e3.push("		", s2);
    for (let s3 = 0; s3 < this._objects.length; s3++) e3.push("		", this._objects[s3].toSVG(t2));
    return e3.push("</g>\n"), e3;
  }
  getSvgStyles() {
    const t2 = void 0 !== this.opacity && 1 !== this.opacity ? "opacity: ".concat(this.opacity, ";") : "", e3 = this.visible ? "" : " visibility: hidden;";
    return [t2, this.getSvgFilter(), e3].join("");
  }
  toClipPathSVG(t2) {
    const e3 = [], s2 = this._createSVGBgRect(t2);
    s2 && e3.push("	", s2);
    for (let s3 = 0; s3 < this._objects.length; s3++) e3.push("	", this._objects[s3].toClipPathSVG(t2));
    return this._createBaseClipPathSVGMarkup(e3, {
      reviver: t2
    });
  }
  static fromObject(t2, e3) {
    let {
      type: r2,
      objects: n2 = [],
      layoutManager: o2
    } = t2, a2 = i(t2, kr);
    return Promise.all([Bt(n2, e3), Xt(a2, e3)]).then((t3) => {
      let [e4, i2] = t3;
      const r3 = new this(e4, s(s(s({}, a2), i2), {}, {
        layoutManager: new Dr()
      }));
      if (o2) {
        const t4 = tt.getClass(o2.type), e5 = tt.getClass(o2.strategy);
        r3.layoutManager = new t4(new e5());
      } else r3.layoutManager = new Or();
      return r3.layoutManager.subscribeTargets({
        type: mr,
        target: r3,
        targets: r3.getObjects()
      }), r3.setCoords(), r3;
    });
  }
};
t(Mr, "type", "Group"), t(Mr, "ownDefaults", {
  strokeWidth: 0,
  subTargetCheck: false,
  interactive: false
}), tt.setClass(Mr);
var Pr = (t2, e3) => Math.min(e3.width / t2.width, e3.height / t2.height);
var Er = (t2, e3) => Math.max(e3.width / t2.width, e3.height / t2.height);
var Ar = "\\s*,?\\s*";
var jr = "".concat(Ar, "(").concat(Ve, ")");
var Fr = "".concat(jr).concat(jr).concat(jr).concat(Ar, "([01])").concat(Ar, "([01])").concat(jr).concat(jr);
var Lr = {
  m: "l",
  M: "L"
};
var Rr = (t2, e3, s2, i2, r2, n2, o2, a2, h2, c2, l2) => {
  const u2 = rt(t2), d2 = nt(t2), g2 = rt(e3), f2 = nt(e3), p2 = s2 * r2 * g2 - i2 * n2 * f2 + o2, m2 = i2 * r2 * g2 + s2 * n2 * f2 + a2;
  return ["C", c2 + h2 * (-s2 * r2 * d2 - i2 * n2 * u2), l2 + h2 * (-i2 * r2 * d2 + s2 * n2 * u2), p2 + h2 * (s2 * r2 * f2 + i2 * n2 * g2), m2 + h2 * (i2 * r2 * f2 - s2 * n2 * g2), p2, m2];
};
var Ir = (t2, e3, s2, i2) => {
  const r2 = Math.atan2(e3, t2), n2 = Math.atan2(i2, s2);
  return n2 >= r2 ? n2 - r2 : 2 * Math.PI - (r2 - n2);
};
function Br(t2, e3, s2, i2, r2, n2, a2, h2) {
  let c2;
  if (o.cachesBoundsOfCurve && (c2 = [...arguments].join(), _.boundsOfCurveCache[c2])) return _.boundsOfCurveCache[c2];
  const l2 = Math.sqrt, u2 = Math.abs, d2 = [], g2 = [[0, 0], [0, 0]];
  let f2 = 6 * t2 - 12 * s2 + 6 * r2, p2 = -3 * t2 + 9 * s2 - 9 * r2 + 3 * a2, m2 = 3 * s2 - 3 * t2;
  for (let t3 = 0; t3 < 2; ++t3) {
    if (t3 > 0 && (f2 = 6 * e3 - 12 * i2 + 6 * n2, p2 = -3 * e3 + 9 * i2 - 9 * n2 + 3 * h2, m2 = 3 * i2 - 3 * e3), u2(p2) < 1e-12) {
      if (u2(f2) < 1e-12) continue;
      const t4 = -m2 / f2;
      0 < t4 && t4 < 1 && d2.push(t4);
      continue;
    }
    const s3 = f2 * f2 - 4 * m2 * p2;
    if (s3 < 0) continue;
    const r3 = l2(s3), o2 = (-f2 + r3) / (2 * p2);
    0 < o2 && o2 < 1 && d2.push(o2);
    const a3 = (-f2 - r3) / (2 * p2);
    0 < a3 && a3 < 1 && d2.push(a3);
  }
  let v2 = d2.length;
  const y2 = v2, x2 = Vr(t2, e3, s2, i2, r2, n2, a2, h2);
  for (; v2--; ) {
    const {
      x: t3,
      y: e4
    } = x2(d2[v2]);
    g2[0][v2] = t3, g2[1][v2] = e4;
  }
  g2[0][y2] = t2, g2[1][y2] = e3, g2[0][y2 + 1] = a2, g2[1][y2 + 1] = h2;
  const C2 = [new ot(Math.min(...g2[0]), Math.min(...g2[1])), new ot(Math.max(...g2[0]), Math.max(...g2[1]))];
  return o.cachesBoundsOfCurve && (_.boundsOfCurveCache[c2] = C2), C2;
}
var Xr = (t2, e3, s2) => {
  let [i2, r2, n2, o2, a2, h2, c2, l2] = s2;
  const u2 = ((t3, e4, s3, i3, r3, n3, o3) => {
    if (0 === s3 || 0 === i3) return [];
    let a3 = 0, h3 = 0, c3 = 0;
    const l3 = Math.PI, u3 = o3 * S, d2 = nt(u3), g2 = rt(u3), f2 = 0.5 * (-g2 * t3 - d2 * e4), p2 = 0.5 * (-g2 * e4 + d2 * t3), m2 = s3 ** 2, v2 = i3 ** 2, y2 = p2 ** 2, _2 = f2 ** 2, x2 = m2 * v2 - m2 * y2 - v2 * _2;
    let C2 = Math.abs(s3), b2 = Math.abs(i3);
    if (x2 < 0) {
      const t4 = Math.sqrt(1 - x2 / (m2 * v2));
      C2 *= t4, b2 *= t4;
    } else c3 = (r3 === n3 ? -1 : 1) * Math.sqrt(x2 / (m2 * y2 + v2 * _2));
    const w2 = c3 * C2 * p2 / b2, T2 = -c3 * b2 * f2 / C2, O2 = g2 * w2 - d2 * T2 + 0.5 * t3, k2 = d2 * w2 + g2 * T2 + 0.5 * e4;
    let D2 = Ir(1, 0, (f2 - w2) / C2, (p2 - T2) / b2), M2 = Ir((f2 - w2) / C2, (p2 - T2) / b2, (-f2 - w2) / C2, (-p2 - T2) / b2);
    0 === n3 && M2 > 0 ? M2 -= 2 * l3 : 1 === n3 && M2 < 0 && (M2 += 2 * l3);
    const P2 = Math.ceil(Math.abs(M2 / l3 * 2)), E2 = [], A2 = M2 / P2, j2 = 8 / 3 * Math.sin(A2 / 4) * Math.sin(A2 / 4) / Math.sin(A2 / 2);
    let F2 = D2 + A2;
    for (let t4 = 0; t4 < P2; t4++) E2[t4] = Rr(D2, F2, g2, d2, C2, b2, O2, k2, j2, a3, h3), a3 = E2[t4][5], h3 = E2[t4][6], D2 = F2, F2 += A2;
    return E2;
  })(c2 - t2, l2 - e3, r2, n2, a2, h2, o2);
  for (let s3 = 0, i3 = u2.length; s3 < i3; s3++) u2[s3][1] += t2, u2[s3][2] += e3, u2[s3][3] += t2, u2[s3][4] += e3, u2[s3][5] += t2, u2[s3][6] += e3;
  return u2;
};
var Yr = (t2) => {
  let e3 = 0, s2 = 0, i2 = 0, r2 = 0;
  const n2 = [];
  let o2, a2 = 0, h2 = 0;
  for (const c2 of t2) {
    const t3 = [...c2];
    let l2;
    switch (t3[0]) {
      case "l":
        t3[1] += e3, t3[2] += s2;
      case "L":
        e3 = t3[1], s2 = t3[2], l2 = ["L", e3, s2];
        break;
      case "h":
        t3[1] += e3;
      case "H":
        e3 = t3[1], l2 = ["L", e3, s2];
        break;
      case "v":
        t3[1] += s2;
      case "V":
        s2 = t3[1], l2 = ["L", e3, s2];
        break;
      case "m":
        t3[1] += e3, t3[2] += s2;
      case "M":
        e3 = t3[1], s2 = t3[2], i2 = t3[1], r2 = t3[2], l2 = ["M", e3, s2];
        break;
      case "c":
        t3[1] += e3, t3[2] += s2, t3[3] += e3, t3[4] += s2, t3[5] += e3, t3[6] += s2;
      case "C":
        a2 = t3[3], h2 = t3[4], e3 = t3[5], s2 = t3[6], l2 = ["C", t3[1], t3[2], a2, h2, e3, s2];
        break;
      case "s":
        t3[1] += e3, t3[2] += s2, t3[3] += e3, t3[4] += s2;
      case "S":
        "C" === o2 ? (a2 = 2 * e3 - a2, h2 = 2 * s2 - h2) : (a2 = e3, h2 = s2), e3 = t3[3], s2 = t3[4], l2 = ["C", a2, h2, t3[1], t3[2], e3, s2], a2 = l2[3], h2 = l2[4];
        break;
      case "q":
        t3[1] += e3, t3[2] += s2, t3[3] += e3, t3[4] += s2;
      case "Q":
        a2 = t3[1], h2 = t3[2], e3 = t3[3], s2 = t3[4], l2 = ["Q", a2, h2, e3, s2];
        break;
      case "t":
        t3[1] += e3, t3[2] += s2;
      case "T":
        "Q" === o2 ? (a2 = 2 * e3 - a2, h2 = 2 * s2 - h2) : (a2 = e3, h2 = s2), e3 = t3[1], s2 = t3[2], l2 = ["Q", a2, h2, e3, s2];
        break;
      case "a":
        t3[6] += e3, t3[7] += s2;
      case "A":
        Xr(e3, s2, t3).forEach((t4) => n2.push(t4)), e3 = t3[6], s2 = t3[7];
        break;
      case "z":
      case "Z":
        e3 = i2, s2 = r2, l2 = ["Z"];
    }
    l2 ? (n2.push(l2), o2 = l2[0]) : o2 = "";
  }
  return n2;
};
var Wr = (t2, e3, s2, i2) => Math.sqrt((s2 - t2) ** 2 + (i2 - e3) ** 2);
var Vr = (t2, e3, s2, i2, r2, n2, o2, a2) => (h2) => {
  const c2 = h2 ** 3, l2 = ((t3) => 3 * t3 ** 2 * (1 - t3))(h2), u2 = ((t3) => 3 * t3 * (1 - t3) ** 2)(h2), d2 = ((t3) => (1 - t3) ** 3)(h2);
  return new ot(o2 * c2 + r2 * l2 + s2 * u2 + t2 * d2, a2 * c2 + n2 * l2 + i2 * u2 + e3 * d2);
};
var zr = (t2) => t2 ** 2;
var Hr = (t2) => 2 * t2 * (1 - t2);
var Gr = (t2) => (1 - t2) ** 2;
var Nr = (t2, e3, s2, i2, r2, n2, o2, a2) => (h2) => {
  const c2 = zr(h2), l2 = Hr(h2), u2 = Gr(h2), d2 = 3 * (u2 * (s2 - t2) + l2 * (r2 - s2) + c2 * (o2 - r2)), g2 = 3 * (u2 * (i2 - e3) + l2 * (n2 - i2) + c2 * (a2 - n2));
  return Math.atan2(g2, d2);
};
var Ur = (t2, e3, s2, i2, r2, n2) => (o2) => {
  const a2 = zr(o2), h2 = Hr(o2), c2 = Gr(o2);
  return new ot(r2 * a2 + s2 * h2 + t2 * c2, n2 * a2 + i2 * h2 + e3 * c2);
};
var qr = (t2, e3, s2, i2, r2, n2) => (o2) => {
  const a2 = 1 - o2, h2 = 2 * (a2 * (s2 - t2) + o2 * (r2 - s2)), c2 = 2 * (a2 * (i2 - e3) + o2 * (n2 - i2));
  return Math.atan2(c2, h2);
};
var Kr = (t2, e3, s2) => {
  let i2 = new ot(e3, s2), r2 = 0;
  for (let e4 = 1; e4 <= 100; e4 += 1) {
    const s3 = t2(e4 / 100);
    r2 += Wr(i2.x, i2.y, s3.x, s3.y), i2 = s3;
  }
  return r2;
};
var Jr = (t2, e3) => {
  let i2, r2 = 0, n2 = 0, o2 = {
    x: t2.x,
    y: t2.y
  }, a2 = s({}, o2), h2 = 0.01, c2 = 0;
  const l2 = t2.iterator, u2 = t2.angleFinder;
  for (; n2 < e3 && h2 > 1e-4; ) a2 = l2(r2), c2 = r2, i2 = Wr(o2.x, o2.y, a2.x, a2.y), i2 + n2 > e3 ? (r2 -= h2, h2 /= 2) : (o2 = a2, r2 += h2, n2 += i2);
  return s(s({}, a2), {}, {
    angle: u2(c2)
  });
};
var Qr = (t2) => {
  let e3, s2, i2 = 0, r2 = 0, n2 = 0, o2 = 0, a2 = 0;
  const h2 = [];
  for (const c2 of t2) {
    const t3 = {
      x: r2,
      y: n2,
      command: c2[0],
      length: 0
    };
    switch (c2[0]) {
      case "M":
        s2 = t3, s2.x = o2 = r2 = c2[1], s2.y = a2 = n2 = c2[2];
        break;
      case "L":
        s2 = t3, s2.length = Wr(r2, n2, c2[1], c2[2]), r2 = c2[1], n2 = c2[2];
        break;
      case "C":
        e3 = Vr(r2, n2, c2[1], c2[2], c2[3], c2[4], c2[5], c2[6]), s2 = t3, s2.iterator = e3, s2.angleFinder = Nr(r2, n2, c2[1], c2[2], c2[3], c2[4], c2[5], c2[6]), s2.length = Kr(e3, r2, n2), r2 = c2[5], n2 = c2[6];
        break;
      case "Q":
        e3 = Ur(r2, n2, c2[1], c2[2], c2[3], c2[4]), s2 = t3, s2.iterator = e3, s2.angleFinder = qr(r2, n2, c2[1], c2[2], c2[3], c2[4]), s2.length = Kr(e3, r2, n2), r2 = c2[3], n2 = c2[4];
        break;
      case "Z":
        s2 = t3, s2.destX = o2, s2.destY = a2, s2.length = Wr(r2, n2, o2, a2), r2 = o2, n2 = a2;
    }
    i2 += s2.length, h2.push(s2);
  }
  return h2.push({
    length: i2,
    x: r2,
    y: n2
  }), h2;
};
var Zr = function(t2, e3) {
  let i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Qr(t2), r2 = 0;
  for (; e3 - i2[r2].length > 0 && r2 < i2.length - 2; ) e3 -= i2[r2].length, r2++;
  const n2 = i2[r2], o2 = e3 / n2.length, a2 = t2[r2];
  switch (n2.command) {
    case "M":
      return {
        x: n2.x,
        y: n2.y,
        angle: 0
      };
    case "Z":
      return s(s({}, new ot(n2.x, n2.y).lerp(new ot(n2.destX, n2.destY), o2)), {}, {
        angle: Math.atan2(n2.destY - n2.y, n2.destX - n2.x)
      });
    case "L":
      return s(s({}, new ot(n2.x, n2.y).lerp(new ot(a2[1], a2[2]), o2)), {}, {
        angle: Math.atan2(a2[2] - n2.y, a2[1] - n2.x)
      });
    case "C":
    case "Q":
      return Jr(n2, e3);
  }
};
var $r = new RegExp("[mzlhvcsqta][^mzlhvcsqta]*", "gi");
var tn = new RegExp(Fr, "g");
var en = new RegExp(Ve, "gi");
var sn = {
  m: 2,
  l: 2,
  h: 1,
  v: 1,
  c: 6,
  s: 4,
  q: 4,
  t: 2,
  a: 7
};
var rn = (t2) => {
  var e3;
  const s2 = [], i2 = null !== (e3 = t2.match($r)) && void 0 !== e3 ? e3 : [];
  for (const t3 of i2) {
    const e4 = t3[0];
    if ("z" === e4 || "Z" === e4) {
      s2.push([e4]);
      continue;
    }
    const i3 = sn[e4.toLowerCase()];
    let r2 = [];
    if ("a" === e4 || "A" === e4) {
      tn.lastIndex = 0;
      for (let e5 = null; e5 = tn.exec(t3); ) r2.push(...e5.slice(1));
    } else r2 = t3.match(en) || [];
    for (let t4 = 0; t4 < r2.length; t4 += i3) {
      const n2 = new Array(i3), o2 = Lr[e4];
      n2[0] = t4 > 0 && o2 ? o2 : e4;
      for (let e5 = 0; e5 < i3; e5++) n2[e5 + 1] = parseFloat(r2[t4 + e5]);
      s2.push(n2);
    }
  }
  return s2;
};
var nn = function(t2) {
  let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, s2 = new ot(t2[0]), i2 = new ot(t2[1]), r2 = 1, n2 = 0;
  const o2 = [], a2 = t2.length, h2 = a2 > 2;
  let c2;
  for (h2 && (r2 = t2[2].x < i2.x ? -1 : t2[2].x === i2.x ? 0 : 1, n2 = t2[2].y < i2.y ? -1 : t2[2].y === i2.y ? 0 : 1), o2.push(["M", s2.x - r2 * e3, s2.y - n2 * e3]), c2 = 1; c2 < a2; c2++) {
    if (!s2.eq(i2)) {
      const t3 = s2.midPointFrom(i2);
      o2.push(["Q", s2.x, s2.y, t3.x, t3.y]);
    }
    s2 = t2[c2], c2 + 1 < t2.length && (i2 = t2[c2 + 1]);
  }
  return h2 && (r2 = s2.x > t2[c2 - 2].x ? 1 : s2.x === t2[c2 - 2].x ? 0 : -1, n2 = s2.y > t2[c2 - 2].y ? 1 : s2.y === t2[c2 - 2].y ? 0 : -1), o2.push(["L", s2.x + r2 * e3, s2.y + n2 * e3]), o2;
};
var on = (t2, e3) => t2.map((t3) => t3.map((t4, s2) => 0 === s2 || void 0 === e3 ? t4 : Kt(t4, e3)).join(" ")).join(" ");
function an(t2, e3) {
  const s2 = t2.style;
  s2 && e3 && ("string" == typeof e3 ? s2.cssText += ";" + e3 : Object.entries(e3).forEach((t3) => {
    let [e4, i2] = t3;
    return s2.setProperty(e4, i2);
  }));
}
var hn = (t2, e3) => Math.floor(Math.random() * (e3 - t2 + 1)) + t2;
function cn(t2) {
  let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  const s2 = e3.onComplete || C, i2 = new (v()).XMLHttpRequest(), r2 = e3.signal, n2 = function() {
    i2.abort();
  }, o2 = function() {
    r2 && r2.removeEventListener("abort", n2), i2.onerror = i2.ontimeout = C;
  };
  if (r2 && r2.aborted) throw new c("request");
  return r2 && r2.addEventListener("abort", n2, {
    once: true
  }), i2.onreadystatechange = function() {
    4 === i2.readyState && (o2(), s2(i2), i2.onreadystatechange = C);
  }, i2.onerror = i2.ontimeout = o2, i2.open("get", t2, true), i2.send(), i2;
}
var ln = (t2, e3) => {
  let s2 = t2._findCenterFromElement();
  t2.transformMatrix && (((t3) => {
    if (t3.transformMatrix) {
      const {
        scaleX: e4,
        scaleY: s3,
        angle: i2,
        skewX: r2
      } = Dt(t3.transformMatrix);
      t3.flipX = false, t3.flipY = false, t3.set(G, e4), t3.set(N, s3), t3.angle = i2, t3.skewX = r2, t3.skewY = 0;
    }
  })(t2), s2 = s2.transform(t2.transformMatrix)), delete t2.transformMatrix, e3 && (t2.scaleX *= e3.scaleX, t2.scaleY *= e3.scaleY, t2.cropX = e3.cropX, t2.cropY = e3.cropY, s2.x += e3.offsetLeft, s2.y += e3.offsetTop, t2.width = e3.width, t2.height = e3.height), t2.setPositionByOrigin(s2, D, D);
};
var un = Object.freeze({
  __proto__: null,
  addTransformToObject: _e,
  animate: js,
  animateColor: Fs,
  applyTransformToObject: xe,
  calcAngleBetweenVectors: is,
  calcDimensionsMatrix: Lt,
  calcPlaneChangeMatrix: Se,
  calcVectorRotation: rs,
  cancelAnimFrame: dt,
  capValue: gs,
  composeMatrix: Rt,
  copyCanvasElement: (t2) => {
    var e3;
    const s2 = vt(t2);
    return null === (e3 = s2.getContext("2d")) || void 0 === e3 || e3.drawImage(t2, 0, 0), s2;
  },
  cos: rt,
  createCanvasElement: pt,
  createImage: mt,
  createRotateMatrix: Pt,
  createScaleMatrix: Et,
  createSkewXMatrix: jt,
  createSkewYMatrix: Ft,
  createTranslateMatrix: Mt,
  createVector: es,
  crossProduct: as,
  degreesToRadians: xt,
  dotProduct: hs,
  ease: bs,
  enlivenObjectEnlivables: Xt,
  enlivenObjects: Bt,
  findScaleToCover: Er,
  findScaleToFit: Pr,
  getBoundsOfCurve: Br,
  getOrthonormalVector: os,
  getPathSegmentsInfo: Qr,
  getPointOnPath: Zr,
  getPointer: fe,
  getRandomInt: hn,
  getRegularPolygonPath: (t2, e3) => {
    const s2 = 2 * Math.PI / t2;
    let i2 = -b;
    t2 % 2 == 0 && (i2 += s2 / 2);
    const r2 = new Array(t2 + 1);
    for (let n2 = 0; n2 < t2; n2++) {
      const t3 = n2 * s2 + i2, {
        x: o2,
        y: a2
      } = new ot(rt(t3), nt(t3)).scalarMultiply(e3);
      r2[n2] = [0 === n2 ? "M" : "L", o2, a2];
    }
    return r2[t2] = ["Z"], r2;
  },
  getSmoothPathFromPoints: nn,
  getSvgAttributes: (t2) => {
    const e3 = ["instantiated_by_use", "style", "id", "class"];
    switch (t2) {
      case "linearGradient":
        return e3.concat(["x1", "y1", "x2", "y2", "gradientUnits", "gradientTransform"]);
      case "radialGradient":
        return e3.concat(["gradientUnits", "gradientTransform", "cx", "cy", "r", "fx", "fy", "fr"]);
      case "stop":
        return e3.concat(["offset", "stop-color", "stop-opacity"]);
    }
    return e3;
  },
  getUnitVector: ns,
  groupSVGElements: (t2, e3) => t2 && 1 === t2.length ? t2[0] : new Mr(t2, e3),
  hasStyleChanged: Ei,
  invertTransform: St,
  isBetweenVectors: cs,
  isIdentityMatrix: bt,
  isTouchEvent: pe,
  isTransparent: xi,
  joinPath: on,
  loadImage: It,
  magnitude: ss,
  makeBoundingBoxFromPoints: ve,
  makePathSimpler: Yr,
  matrixToSVG: Zt,
  mergeClipPaths: (t2, e3) => {
    var s2;
    let i2 = t2, r2 = e3;
    i2.inverted && !r2.inverted && (i2 = e3, r2 = t2), ke(r2, null === (s2 = r2.group) || void 0 === s2 ? void 0 : s2.calcTransformMatrix(), i2.calcTransformMatrix());
    const n2 = i2.inverted && r2.inverted;
    return n2 && (i2.inverted = r2.inverted = false), new Mr([i2], {
      clipPath: r2,
      inverted: n2
    });
  },
  multiplyTransformMatrices: Tt,
  multiplyTransformMatrixArray: Ot,
  parsePath: rn,
  parsePreserveAspectRatioAttribute: Qt,
  parseUnit: Jt,
  pick: Yt,
  projectStrokeOnPoints: Ti,
  qrDecompose: Dt,
  radiansToDegrees: Ct,
  removeFromArray: it,
  removeTransformFromObject: (t2, e3) => {
    const s2 = St(e3), i2 = Tt(s2, t2.calcOwnMatrix());
    xe(t2, i2);
  },
  removeTransformMatrixForSvgParsing: ln,
  request: cn,
  requestAnimFrame: ut,
  resetObjectTransform: Ce,
  rotatePoint: (t2, e3, s2) => t2.rotate(s2, e3),
  rotateVector: ts,
  saveObjectTransform: be,
  sendObjectToPlane: ke,
  sendPointToPlane: Te,
  sendVectorToPlane: Oe,
  setStyle: an,
  sin: nt,
  sizeAfterTransform: we,
  string: Pi,
  stylesFromArray: ji,
  stylesToArray: Ai,
  toBlob: _t,
  toDataURL: yt,
  toFixed: Kt,
  transformPath: (t2, e3, s2) => (s2 && (e3 = Tt(e3, [1, 0, 0, 1, -s2.x, -s2.y])), t2.map((t3) => {
    const s3 = [...t3];
    for (let i2 = 1; i2 < t3.length - 1; i2 += 2) {
      const {
        x: r2,
        y: n2
      } = wt({
        x: t3[i2],
        y: t3[i2 + 1]
      }, e3);
      s3[i2] = r2, s3[i2 + 1] = n2;
    }
    return s3;
  })),
  transformPoint: wt
});
var dn = class extends le {
  constructor(e3) {
    let {
      allowTouchScrolling: s2 = false,
      containerClass: i2 = ""
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    super(e3), t(this, "upper", void 0), t(this, "container", void 0);
    const {
      el: r2
    } = this.lower, n2 = this.createUpperCanvas();
    this.upper = {
      el: n2,
      ctx: n2.getContext("2d")
    }, this.applyCanvasStyle(r2, {
      allowTouchScrolling: s2
    }), this.applyCanvasStyle(n2, {
      allowTouchScrolling: s2,
      styles: {
        position: "absolute",
        left: "0",
        top: "0"
      }
    });
    const o2 = this.createContainerElement();
    o2.classList.add(i2), r2.parentNode && r2.parentNode.replaceChild(o2, r2), o2.append(r2, n2), this.container = o2;
  }
  createUpperCanvas() {
    const {
      el: t2
    } = this.lower, e3 = pt();
    return e3.className = t2.className, e3.classList.remove("lower-canvas"), e3.classList.add("upper-canvas"), e3.setAttribute("data-fabric", "top"), e3.style.cssText = t2.style.cssText, e3.setAttribute("draggable", "true"), e3;
  }
  createContainerElement() {
    const t2 = m().createElement("div");
    return t2.setAttribute("data-fabric", "wrapper"), an(t2, {
      position: "relative"
    }), ce(t2), t2;
  }
  applyCanvasStyle(t2, e3) {
    const {
      styles: i2,
      allowTouchScrolling: r2
    } = e3;
    an(t2, s(s({}, i2), {}, {
      "touch-action": r2 ? "manipulation" : j
    })), ce(t2);
  }
  setDimensions(t2, e3) {
    super.setDimensions(t2, e3);
    const {
      el: s2,
      ctx: i2
    } = this.upper;
    ae(s2, i2, t2, e3);
  }
  setCSSDimensions(t2) {
    super.setCSSDimensions(t2), he(this.upper.el, t2), he(this.container, t2);
  }
  cleanupDOM(t2) {
    const e3 = this.container, {
      el: s2
    } = this.lower, {
      el: i2
    } = this.upper;
    super.cleanupDOM(t2), e3.removeChild(i2), e3.removeChild(s2), e3.parentNode && e3.parentNode.replaceChild(s2, e3);
  }
  dispose() {
    super.dispose(), p().dispose(this.upper.el), delete this.upper, delete this.container;
  }
};
var gn = class _gn extends de {
  constructor() {
    super(...arguments), t(this, "targets", []), t(this, "_hoveredTargets", []), t(this, "_objectsToRender", void 0), t(this, "_currentTransform", null), t(this, "_groupSelector", null), t(this, "contextTopDirty", false);
  }
  static getDefaults() {
    return s(s({}, super.getDefaults()), _gn.ownDefaults);
  }
  get upperCanvasEl() {
    var t2;
    return null === (t2 = this.elements.upper) || void 0 === t2 ? void 0 : t2.el;
  }
  get contextTop() {
    var t2;
    return null === (t2 = this.elements.upper) || void 0 === t2 ? void 0 : t2.ctx;
  }
  get wrapperEl() {
    return this.elements.container;
  }
  initElements(t2) {
    this.elements = new dn(t2, {
      allowTouchScrolling: this.allowTouchScrolling,
      containerClass: this.containerClass
    }), this._createCacheCanvas();
  }
  _onObjectAdded(t2) {
    this._objectsToRender = void 0, super._onObjectAdded(t2);
  }
  _onObjectRemoved(t2) {
    this._objectsToRender = void 0, t2 === this._activeObject && (this.fire("before:selection:cleared", {
      deselected: [t2]
    }), this._discardActiveObject(), this.fire("selection:cleared", {
      deselected: [t2]
    }), t2.fire("deselected", {
      target: t2
    })), t2 === this._hoveredTarget && (this._hoveredTarget = void 0, this._hoveredTargets = []), super._onObjectRemoved(t2);
  }
  _onStackOrderChanged() {
    this._objectsToRender = void 0, super._onStackOrderChanged();
  }
  _chooseObjectsToRender() {
    const t2 = this._activeObject;
    return !this.preserveObjectStacking && t2 ? this._objects.filter((e3) => !e3.group && e3 !== t2).concat(t2) : this._objects;
  }
  renderAll() {
    this.cancelRequestedRender(), this.destroyed || (!this.contextTopDirty || this._groupSelector || this.isDrawingMode || (this.clearContext(this.contextTop), this.contextTopDirty = false), this.hasLostContext && (this.renderTopLayer(this.contextTop), this.hasLostContext = false), !this._objectsToRender && (this._objectsToRender = this._chooseObjectsToRender()), this.renderCanvas(this.getContext(), this._objectsToRender));
  }
  renderTopLayer(t2) {
    t2.save(), this.isDrawingMode && this._isCurrentlyDrawing && (this.freeDrawingBrush && this.freeDrawingBrush._render(), this.contextTopDirty = true), this.selection && this._groupSelector && (this._drawSelection(t2), this.contextTopDirty = true), t2.restore();
  }
  renderTop() {
    const t2 = this.contextTop;
    this.clearContext(t2), this.renderTopLayer(t2), this.fire("after:render", {
      ctx: t2
    });
  }
  setTargetFindTolerance(t2) {
    t2 = Math.round(t2), this.targetFindTolerance = t2;
    const e3 = this.getRetinaScaling(), s2 = Math.ceil((2 * t2 + 1) * e3);
    this.pixelFindCanvasEl.width = this.pixelFindCanvasEl.height = s2, this.pixelFindContext.scale(e3, e3);
  }
  isTargetTransparent(t2, e3, s2) {
    const i2 = this.targetFindTolerance, r2 = this.pixelFindContext;
    this.clearContext(r2), r2.save(), r2.translate(-e3 + i2, -s2 + i2), r2.transform(...this.viewportTransform);
    const n2 = t2.selectionBackgroundColor;
    t2.selectionBackgroundColor = "", t2.render(r2), t2.selectionBackgroundColor = n2, r2.restore();
    const o2 = Math.round(i2 * this.getRetinaScaling());
    return xi(r2, o2, o2, o2);
  }
  _isSelectionKeyPressed(t2) {
    const e3 = this.selectionKey;
    return !!e3 && (Array.isArray(e3) ? !!e3.find((e4) => !!e4 && true === t2[e4]) : t2[e3]);
  }
  _shouldClearSelection(t2, e3) {
    const s2 = this.getActiveObjects(), i2 = this._activeObject;
    return !!(!e3 || e3 && i2 && s2.length > 1 && -1 === s2.indexOf(e3) && i2 !== e3 && !this._isSelectionKeyPressed(t2) || e3 && !e3.evented || e3 && !e3.selectable && i2 && i2 !== e3);
  }
  _shouldCenterTransform(t2, e3, s2) {
    if (!t2) return;
    let i2;
    return e3 === H || e3 === G || e3 === N || e3 === Y ? i2 = this.centeredScaling || t2.centeredScaling : e3 === B && (i2 = this.centeredRotation || t2.centeredRotation), i2 ? !s2 : s2;
  }
  _getOriginFromCorner(t2, e3) {
    const s2 = {
      x: t2.originX,
      y: t2.originY
    };
    return e3 ? (["ml", "tl", "bl"].includes(e3) ? s2.x = A : ["mr", "tr", "br"].includes(e3) && (s2.x = M), ["tl", "mt", "tr"].includes(e3) ? s2.y = E : ["bl", "mb", "br"].includes(e3) && (s2.y = P), s2) : s2;
  }
  _setupCurrentTransform(t2, e3, i2) {
    var r2;
    const n2 = e3.group ? Te(this.getScenePoint(t2), void 0, e3.group.calcTransformMatrix()) : this.getScenePoint(t2), {
      key: o2 = "",
      control: a2
    } = e3.getActiveControl() || {}, h2 = i2 && a2 ? null === (r2 = a2.getActionHandler(t2, e3, a2)) || void 0 === r2 ? void 0 : r2.bind(a2) : Be, c2 = ((t3, e4, s2, i3) => {
      if (!e4 || !t3) return "drag";
      const r3 = i3.controls[e4];
      return r3.getActionName(s2, r3, i3);
    })(i2, o2, t2, e3), l2 = t2[this.centeredKey], u2 = this._shouldCenterTransform(e3, c2, l2) ? {
      x: D,
      y: D
    } : this._getOriginFromCorner(e3, o2), d2 = {
      target: e3,
      action: c2,
      actionHandler: h2,
      actionPerformed: false,
      corner: o2,
      scaleX: e3.scaleX,
      scaleY: e3.scaleY,
      skewX: e3.skewX,
      skewY: e3.skewY,
      offsetX: n2.x - e3.left,
      offsetY: n2.y - e3.top,
      originX: u2.x,
      originY: u2.y,
      ex: n2.x,
      ey: n2.y,
      lastX: n2.x,
      lastY: n2.y,
      theta: xt(e3.angle),
      width: e3.width,
      height: e3.height,
      shiftKey: t2.shiftKey,
      altKey: l2,
      original: s(s({}, be(e3)), {}, {
        originX: u2.x,
        originY: u2.y
      })
    };
    this._currentTransform = d2, this.fire("before:transform", {
      e: t2,
      transform: d2
    });
  }
  setCursor(t2) {
    this.upperCanvasEl.style.cursor = t2;
  }
  _drawSelection(t2) {
    const {
      x: e3,
      y: s2,
      deltaX: i2,
      deltaY: r2
    } = this._groupSelector, n2 = new ot(e3, s2).transform(this.viewportTransform), o2 = new ot(e3 + i2, s2 + r2).transform(this.viewportTransform), a2 = this.selectionLineWidth / 2;
    let h2 = Math.min(n2.x, o2.x), c2 = Math.min(n2.y, o2.y), l2 = Math.max(n2.x, o2.x), u2 = Math.max(n2.y, o2.y);
    this.selectionColor && (t2.fillStyle = this.selectionColor, t2.fillRect(h2, c2, l2 - h2, u2 - c2)), this.selectionLineWidth && this.selectionBorderColor && (t2.lineWidth = this.selectionLineWidth, t2.strokeStyle = this.selectionBorderColor, h2 += a2, c2 += a2, l2 -= a2, u2 -= a2, _i.prototype._setLineDash.call(this, t2, this.selectionDashArray), t2.strokeRect(h2, c2, l2 - h2, u2 - c2));
  }
  findTarget(t2) {
    if (this.skipTargetFind) return;
    const e3 = this.getViewportPoint(t2), s2 = this._activeObject, i2 = this.getActiveObjects();
    if (this.targets = [], s2 && i2.length >= 1) {
      if (s2.findControl(e3, pe(t2))) return s2;
      if (i2.length > 1 && this.searchPossibleTargets([s2], e3)) return s2;
      if (s2 === this.searchPossibleTargets([s2], e3)) {
        if (this.preserveObjectStacking) {
          const i3 = this.targets;
          this.targets = [];
          const r2 = this.searchPossibleTargets(this._objects, e3);
          return t2[this.altSelectionKey] && r2 && r2 !== s2 ? (this.targets = i3, s2) : r2;
        }
        return s2;
      }
    }
    return this.searchPossibleTargets(this._objects, e3);
  }
  _pointIsInObjectSelectionArea(t2, e3) {
    let s2 = t2.getCoords();
    const i2 = this.getZoom(), r2 = t2.padding / i2;
    if (r2) {
      const [t3, e4, i3, n2] = s2, o2 = Math.atan2(e4.y - t3.y, e4.x - t3.x), a2 = rt(o2) * r2, h2 = nt(o2) * r2, c2 = a2 + h2, l2 = a2 - h2;
      s2 = [new ot(t3.x - l2, t3.y - c2), new ot(e4.x + c2, e4.y - l2), new ot(i3.x + l2, i3.y + c2), new ot(n2.x - c2, n2.y + l2)];
    }
    return Ls.isPointInPolygon(e3, s2);
  }
  _checkTarget(t2, e3) {
    if (t2 && t2.visible && t2.evented && this._pointIsInObjectSelectionArea(t2, Te(e3, void 0, this.viewportTransform))) {
      if (!this.perPixelTargetFind && !t2.perPixelTargetFind || t2.isEditing) return true;
      if (!this.isTargetTransparent(t2, e3.x, e3.y)) return true;
    }
    return false;
  }
  _searchPossibleTargets(t2, e3) {
    let s2 = t2.length;
    for (; s2--; ) {
      const i2 = t2[s2];
      if (this._checkTarget(i2, e3)) {
        if (ht(i2) && i2.subTargetCheck) {
          const t3 = this._searchPossibleTargets(i2._objects, e3);
          t3 && this.targets.push(t3);
        }
        return i2;
      }
    }
  }
  searchPossibleTargets(t2, e3) {
    const s2 = this._searchPossibleTargets(t2, e3);
    if (s2 && ht(s2) && s2.interactive && this.targets[0]) {
      const t3 = this.targets;
      for (let e4 = t3.length - 1; e4 > 0; e4--) {
        const s3 = t3[e4];
        if (!ht(s3) || !s3.interactive) return s3;
      }
      return t3[0];
    }
    return s2;
  }
  getViewportPoint(t2) {
    return this._pointer ? this._pointer : this.getPointer(t2, true);
  }
  getScenePoint(t2) {
    return this._absolutePointer ? this._absolutePointer : this.getPointer(t2);
  }
  getPointer(t2) {
    let e3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    const s2 = this.upperCanvasEl, i2 = s2.getBoundingClientRect();
    let r2 = fe(t2), n2 = i2.width || 0, o2 = i2.height || 0;
    n2 && o2 || (P in i2 && E in i2 && (o2 = Math.abs(i2.top - i2.bottom)), A in i2 && M in i2 && (n2 = Math.abs(i2.right - i2.left))), this.calcOffset(), r2.x = r2.x - this._offset.left, r2.y = r2.y - this._offset.top, e3 || (r2 = Te(r2, void 0, this.viewportTransform));
    const a2 = this.getRetinaScaling();
    1 !== a2 && (r2.x /= a2, r2.y /= a2);
    const h2 = 0 === n2 || 0 === o2 ? new ot(1, 1) : new ot(s2.width / n2, s2.height / o2);
    return r2.multiply(h2);
  }
  _setDimensionsImpl(t2, e3) {
    this._resetTransformEventData(), super._setDimensionsImpl(t2, e3), this._isCurrentlyDrawing && this.freeDrawingBrush && this.freeDrawingBrush._setBrushStyles(this.contextTop);
  }
  _createCacheCanvas() {
    this.pixelFindCanvasEl = pt(), this.pixelFindContext = this.pixelFindCanvasEl.getContext("2d", {
      willReadFrequently: true
    }), this.setTargetFindTolerance(this.targetFindTolerance);
  }
  getTopContext() {
    return this.elements.upper.ctx;
  }
  getSelectionContext() {
    return this.elements.upper.ctx;
  }
  getSelectionElement() {
    return this.elements.upper.el;
  }
  getActiveObject() {
    return this._activeObject;
  }
  getActiveObjects() {
    const t2 = this._activeObject;
    return ie(t2) ? t2.getObjects() : t2 ? [t2] : [];
  }
  _fireSelectionEvents(t2, e3) {
    let s2 = false, i2 = false;
    const r2 = this.getActiveObjects(), n2 = [], o2 = [];
    t2.forEach((t3) => {
      r2.includes(t3) || (s2 = true, t3.fire("deselected", {
        e: e3,
        target: t3
      }), o2.push(t3));
    }), r2.forEach((i3) => {
      t2.includes(i3) || (s2 = true, i3.fire("selected", {
        e: e3,
        target: i3
      }), n2.push(i3));
    }), t2.length > 0 && r2.length > 0 ? (i2 = true, s2 && this.fire("selection:updated", {
      e: e3,
      selected: n2,
      deselected: o2
    })) : r2.length > 0 ? (i2 = true, this.fire("selection:created", {
      e: e3,
      selected: n2
    })) : t2.length > 0 && (i2 = true, this.fire("selection:cleared", {
      e: e3,
      deselected: o2
    })), i2 && (this._objectsToRender = void 0);
  }
  setActiveObject(t2, e3) {
    const s2 = this.getActiveObjects(), i2 = this._setActiveObject(t2, e3);
    return this._fireSelectionEvents(s2, e3), i2;
  }
  _setActiveObject(t2, e3) {
    const s2 = this._activeObject;
    return s2 !== t2 && !(!this._discardActiveObject(e3, t2) && this._activeObject) && !t2.onSelect({
      e: e3
    }) && (this._activeObject = t2, ie(t2) && s2 !== t2 && t2.set("canvas", this), t2.setCoords(), true);
  }
  _discardActiveObject(t2, e3) {
    const s2 = this._activeObject;
    return !!s2 && !s2.onDeselect({
      e: t2,
      object: e3
    }) && (this._currentTransform && this._currentTransform.target === s2 && this.endCurrentTransform(t2), ie(s2) && s2 === this._hoveredTarget && (this._hoveredTarget = void 0), this._activeObject = void 0, true);
  }
  discardActiveObject(t2) {
    const e3 = this.getActiveObjects(), s2 = this.getActiveObject();
    e3.length && this.fire("before:selection:cleared", {
      e: t2,
      deselected: [s2]
    });
    const i2 = this._discardActiveObject(t2);
    return this._fireSelectionEvents(e3, t2), i2;
  }
  endCurrentTransform(t2) {
    const e3 = this._currentTransform;
    this._finalizeCurrentTransform(t2), e3 && e3.target && (e3.target.isMoving = false), this._currentTransform = null;
  }
  _finalizeCurrentTransform(t2) {
    const e3 = this._currentTransform, s2 = e3.target, i2 = {
      e: t2,
      target: s2,
      transform: e3,
      action: e3.action
    };
    s2._scaling && (s2._scaling = false), s2.setCoords(), e3.actionPerformed && (this.fire("object:modified", i2), s2.fire(Q, i2));
  }
  setViewportTransform(t2) {
    super.setViewportTransform(t2);
    const e3 = this._activeObject;
    e3 && e3.setCoords();
  }
  destroy() {
    const t2 = this._activeObject;
    ie(t2) && (t2.removeAll(), t2.dispose()), delete this._activeObject, super.destroy(), this.pixelFindContext = null, this.pixelFindCanvasEl = void 0;
  }
  clear() {
    this.discardActiveObject(), this._activeObject = void 0, this.clearContext(this.contextTop), super.clear();
  }
  drawControls(t2) {
    const e3 = this._activeObject;
    e3 && e3._renderControls(t2);
  }
  _toObject(t2, e3, s2) {
    const i2 = this._realizeGroupTransformOnObject(t2), r2 = super._toObject(t2, e3, s2);
    return t2.set(i2), r2;
  }
  _realizeGroupTransformOnObject(t2) {
    const {
      group: e3
    } = t2;
    if (e3 && ie(e3) && this._activeObject === e3) {
      const s2 = Yt(t2, ["angle", "flipX", "flipY", M, G, N, U, q, P]);
      return _e(t2, e3.calcOwnMatrix()), s2;
    }
    return {};
  }
  _setSVGObject(t2, e3, s2) {
    const i2 = this._realizeGroupTransformOnObject(e3);
    super._setSVGObject(t2, e3, s2), e3.set(i2);
  }
};
t(gn, "ownDefaults", {
  uniformScaling: true,
  uniScaleKey: "shiftKey",
  centeredScaling: false,
  centeredRotation: false,
  centeredKey: "altKey",
  altActionKey: "shiftKey",
  selection: true,
  selectionKey: "shiftKey",
  selectionColor: "rgba(100, 100, 255, 0.3)",
  selectionDashArray: [],
  selectionBorderColor: "rgba(255, 255, 255, 0.3)",
  selectionLineWidth: 1,
  selectionFullyContained: false,
  hoverCursor: "move",
  moveCursor: "move",
  defaultCursor: "default",
  freeDrawingCursor: "crosshair",
  notAllowedCursor: "not-allowed",
  perPixelTargetFind: false,
  targetFindTolerance: 0,
  skipTargetFind: false,
  stopContextMenu: false,
  fireRightClick: false,
  fireMiddleClick: false,
  enablePointerEvents: false,
  containerClass: "canvas-container",
  preserveObjectStacking: false
});
var fn = class {
  constructor(e3) {
    t(this, "targets", []), t(this, "__disposer", void 0);
    const s2 = () => {
      const {
        hiddenTextarea: t2
      } = e3.getActiveObject() || {};
      t2 && t2.focus();
    }, i2 = e3.upperCanvasEl;
    i2.addEventListener("click", s2), this.__disposer = () => i2.removeEventListener("click", s2);
  }
  exitTextEditing() {
    this.target = void 0, this.targets.forEach((t2) => {
      t2.isEditing && t2.exitEditing();
    });
  }
  add(t2) {
    this.targets.push(t2);
  }
  remove(t2) {
    this.unregister(t2), it(this.targets, t2);
  }
  register(t2) {
    this.target = t2;
  }
  unregister(t2) {
    t2 === this.target && (this.target = void 0);
  }
  onMouseMove(t2) {
    var e3;
    (null === (e3 = this.target) || void 0 === e3 ? void 0 : e3.isEditing) && this.target.updateSelectionOnMouseMove(t2);
  }
  clear() {
    this.targets = [], this.target = void 0;
  }
  dispose() {
    this.clear(), this.__disposer(), delete this.__disposer;
  }
};
var pn = ["target", "oldTarget", "fireCanvas", "e"];
var mn = {
  passive: false
};
var vn = (t2, e3) => {
  const s2 = t2.getViewportPoint(e3), i2 = t2.getScenePoint(e3);
  return {
    viewportPoint: s2,
    scenePoint: i2,
    pointer: s2,
    absolutePointer: i2
  };
};
var yn = function(t2) {
  for (var e3 = arguments.length, s2 = new Array(e3 > 1 ? e3 - 1 : 0), i2 = 1; i2 < e3; i2++) s2[i2 - 1] = arguments[i2];
  return t2.addEventListener(...s2);
};
var _n = function(t2) {
  for (var e3 = arguments.length, s2 = new Array(e3 > 1 ? e3 - 1 : 0), i2 = 1; i2 < e3; i2++) s2[i2 - 1] = arguments[i2];
  return t2.removeEventListener(...s2);
};
var xn = {
  mouse: {
    in: "over",
    out: "out",
    targetIn: "mouseover",
    targetOut: "mouseout",
    canvasIn: "mouse:over",
    canvasOut: "mouse:out"
  },
  drag: {
    in: "enter",
    out: "leave",
    targetIn: "dragenter",
    targetOut: "dragleave",
    canvasIn: "drag:enter",
    canvasOut: "drag:leave"
  }
};
var Cn = class extends gn {
  constructor(e3) {
    super(e3, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), t(this, "_isClick", void 0), t(this, "textEditingManager", new fn(this)), ["_onMouseDown", "_onTouchStart", "_onMouseMove", "_onMouseUp", "_onTouchEnd", "_onResize", "_onMouseWheel", "_onMouseOut", "_onMouseEnter", "_onContextMenu", "_onDoubleClick", "_onDragStart", "_onDragEnd", "_onDragProgress", "_onDragOver", "_onDragEnter", "_onDragLeave", "_onDrop"].forEach((t2) => {
      this[t2] = this[t2].bind(this);
    }), this.addOrRemove(yn, "add");
  }
  _getEventPrefix() {
    return this.enablePointerEvents ? "pointer" : "mouse";
  }
  addOrRemove(t2, e3) {
    const s2 = this.upperCanvasEl, i2 = this._getEventPrefix();
    t2(oe(s2), "resize", this._onResize), t2(s2, i2 + "down", this._onMouseDown), t2(s2, "".concat(i2, "move"), this._onMouseMove, mn), t2(s2, "".concat(i2, "out"), this._onMouseOut), t2(s2, "".concat(i2, "enter"), this._onMouseEnter), t2(s2, "wheel", this._onMouseWheel), t2(s2, "contextmenu", this._onContextMenu), t2(s2, "dblclick", this._onDoubleClick), t2(s2, "dragstart", this._onDragStart), t2(s2, "dragend", this._onDragEnd), t2(s2, "dragover", this._onDragOver), t2(s2, "dragenter", this._onDragEnter), t2(s2, "dragleave", this._onDragLeave), t2(s2, "drop", this._onDrop), this.enablePointerEvents || t2(s2, "touchstart", this._onTouchStart, mn);
  }
  removeListeners() {
    this.addOrRemove(_n, "remove");
    const t2 = this._getEventPrefix(), e3 = ne(this.upperCanvasEl);
    _n(e3, "".concat(t2, "up"), this._onMouseUp), _n(e3, "touchend", this._onTouchEnd, mn), _n(e3, "".concat(t2, "move"), this._onMouseMove, mn), _n(e3, "touchmove", this._onMouseMove, mn), clearTimeout(this._willAddMouseDown);
  }
  _onMouseWheel(t2) {
    this.__onMouseWheel(t2);
  }
  _onMouseOut(t2) {
    const e3 = this._hoveredTarget, i2 = s({
      e: t2
    }, vn(this, t2));
    this.fire("mouse:out", s(s({}, i2), {}, {
      target: e3
    })), this._hoveredTarget = void 0, e3 && e3.fire("mouseout", s({}, i2)), this._hoveredTargets.forEach((t3) => {
      this.fire("mouse:out", s(s({}, i2), {}, {
        target: t3
      })), t3 && t3.fire("mouseout", s({}, i2));
    }), this._hoveredTargets = [];
  }
  _onMouseEnter(t2) {
    this._currentTransform || this.findTarget(t2) || (this.fire("mouse:over", s({
      e: t2
    }, vn(this, t2))), this._hoveredTarget = void 0, this._hoveredTargets = []);
  }
  _onDragStart(t2) {
    this._isClick = false;
    const e3 = this.getActiveObject();
    if (e3 && e3.onDragStart(t2)) {
      this._dragSource = e3;
      const s2 = {
        e: t2,
        target: e3
      };
      return this.fire("dragstart", s2), e3.fire("dragstart", s2), void yn(this.upperCanvasEl, "drag", this._onDragProgress);
    }
    me(t2);
  }
  _renderDragEffects(t2, e3, s2) {
    let i2 = false;
    const r2 = this._dropTarget;
    r2 && r2 !== e3 && r2 !== s2 && (r2.clearContextTop(), i2 = true), null == e3 || e3.clearContextTop(), s2 !== e3 && (null == s2 || s2.clearContextTop());
    const n2 = this.contextTop;
    n2.save(), n2.transform(...this.viewportTransform), e3 && (n2.save(), e3.transform(n2), e3.renderDragSourceEffect(t2), n2.restore(), i2 = true), s2 && (n2.save(), s2.transform(n2), s2.renderDropTargetEffect(t2), n2.restore(), i2 = true), n2.restore(), i2 && (this.contextTopDirty = true);
  }
  _onDragEnd(t2) {
    const e3 = !!t2.dataTransfer && t2.dataTransfer.dropEffect !== j, s2 = e3 ? this._activeObject : void 0, i2 = {
      e: t2,
      target: this._dragSource,
      subTargets: this.targets,
      dragSource: this._dragSource,
      didDrop: e3,
      dropTarget: s2
    };
    _n(this.upperCanvasEl, "drag", this._onDragProgress), this.fire("dragend", i2), this._dragSource && this._dragSource.fire("dragend", i2), delete this._dragSource, this._onMouseUp(t2);
  }
  _onDragProgress(t2) {
    const e3 = {
      e: t2,
      target: this._dragSource,
      dragSource: this._dragSource,
      dropTarget: this._draggedoverTarget
    };
    this.fire("drag", e3), this._dragSource && this._dragSource.fire("drag", e3);
  }
  findDragTargets(t2) {
    this.targets = [];
    return {
      target: this._searchPossibleTargets(this._objects, this.getViewportPoint(t2)),
      targets: [...this.targets]
    };
  }
  _onDragOver(t2) {
    const e3 = "dragover", {
      target: s2,
      targets: i2
    } = this.findDragTargets(t2), r2 = this._dragSource, n2 = {
      e: t2,
      target: s2,
      subTargets: i2,
      dragSource: r2,
      canDrop: false,
      dropTarget: void 0
    };
    let o2;
    this.fire(e3, n2), this._fireEnterLeaveEvents(s2, n2), s2 && (s2.canDrop(t2) && (o2 = s2), s2.fire(e3, n2));
    for (let s3 = 0; s3 < i2.length; s3++) {
      const r3 = i2[s3];
      r3.canDrop(t2) && (o2 = r3), r3.fire(e3, n2);
    }
    this._renderDragEffects(t2, r2, o2), this._dropTarget = o2;
  }
  _onDragEnter(t2) {
    const {
      target: e3,
      targets: s2
    } = this.findDragTargets(t2), i2 = {
      e: t2,
      target: e3,
      subTargets: s2,
      dragSource: this._dragSource
    };
    this.fire("dragenter", i2), this._fireEnterLeaveEvents(e3, i2);
  }
  _onDragLeave(t2) {
    const e3 = {
      e: t2,
      target: this._draggedoverTarget,
      subTargets: this.targets,
      dragSource: this._dragSource
    };
    this.fire("dragleave", e3), this._fireEnterLeaveEvents(void 0, e3), this._renderDragEffects(t2, this._dragSource), this._dropTarget = void 0, this.targets = [], this._hoveredTargets = [];
  }
  _onDrop(t2) {
    const {
      target: e3,
      targets: i2
    } = this.findDragTargets(t2), r2 = this._basicEventHandler("drop:before", s({
      e: t2,
      target: e3,
      subTargets: i2,
      dragSource: this._dragSource
    }, vn(this, t2)));
    r2.didDrop = false, r2.dropTarget = void 0, this._basicEventHandler("drop", r2), this.fire("drop:after", r2);
  }
  _onContextMenu(t2) {
    const e3 = this.findTarget(t2), s2 = this.targets || [], i2 = this._basicEventHandler("contextmenu:before", {
      e: t2,
      target: e3,
      subTargets: s2
    });
    return this.stopContextMenu && me(t2), this._basicEventHandler("contextmenu", i2), false;
  }
  _onDoubleClick(t2) {
    this._cacheTransformEventData(t2), this._handleEvent(t2, "dblclick"), this._resetTransformEventData();
  }
  getPointerId(t2) {
    const e3 = t2.changedTouches;
    return e3 ? e3[0] && e3[0].identifier : this.enablePointerEvents ? t2.pointerId : -1;
  }
  _isMainEvent(t2) {
    return true === t2.isPrimary || false !== t2.isPrimary && ("touchend" === t2.type && 0 === t2.touches.length || !t2.changedTouches || t2.changedTouches[0].identifier === this.mainTouchId);
  }
  _onTouchStart(t2) {
    let e3 = !this.allowTouchScrolling;
    const s2 = this._activeObject;
    void 0 === this.mainTouchId && (this.mainTouchId = this.getPointerId(t2)), this.__onMouseDown(t2), (this.isDrawingMode || s2 && this._target === s2) && (e3 = true), e3 && t2.preventDefault(), this._resetTransformEventData();
    const i2 = this.upperCanvasEl, r2 = this._getEventPrefix(), n2 = ne(i2);
    yn(n2, "touchend", this._onTouchEnd, mn), e3 && yn(n2, "touchmove", this._onMouseMove, mn), _n(i2, "".concat(r2, "down"), this._onMouseDown);
  }
  _onMouseDown(t2) {
    this.__onMouseDown(t2), this._resetTransformEventData();
    const e3 = this.upperCanvasEl, s2 = this._getEventPrefix();
    _n(e3, "".concat(s2, "move"), this._onMouseMove, mn);
    const i2 = ne(e3);
    yn(i2, "".concat(s2, "up"), this._onMouseUp), yn(i2, "".concat(s2, "move"), this._onMouseMove, mn);
  }
  _onTouchEnd(t2) {
    if (t2.touches.length > 0) return;
    this.__onMouseUp(t2), this._resetTransformEventData(), delete this.mainTouchId;
    const e3 = this._getEventPrefix(), s2 = ne(this.upperCanvasEl);
    _n(s2, "touchend", this._onTouchEnd, mn), _n(s2, "touchmove", this._onMouseMove, mn), this._willAddMouseDown && clearTimeout(this._willAddMouseDown), this._willAddMouseDown = setTimeout(() => {
      yn(this.upperCanvasEl, "".concat(e3, "down"), this._onMouseDown), this._willAddMouseDown = 0;
    }, 400);
  }
  _onMouseUp(t2) {
    this.__onMouseUp(t2), this._resetTransformEventData();
    const e3 = this.upperCanvasEl, s2 = this._getEventPrefix();
    if (this._isMainEvent(t2)) {
      const t3 = ne(this.upperCanvasEl);
      _n(t3, "".concat(s2, "up"), this._onMouseUp), _n(t3, "".concat(s2, "move"), this._onMouseMove, mn), yn(e3, "".concat(s2, "move"), this._onMouseMove, mn);
    }
  }
  _onMouseMove(t2) {
    const e3 = this.getActiveObject();
    !this.allowTouchScrolling && (!e3 || !e3.shouldStartDragging(t2)) && t2.preventDefault && t2.preventDefault(), this.__onMouseMove(t2);
  }
  _onResize() {
    this.calcOffset(), this._resetTransformEventData();
  }
  _shouldRender(t2) {
    const e3 = this.getActiveObject();
    return !!e3 != !!t2 || e3 && t2 && e3 !== t2;
  }
  __onMouseUp(t2) {
    var e3;
    this._cacheTransformEventData(t2), this._handleEvent(t2, "up:before");
    const s2 = this._currentTransform, i2 = this._isClick, r2 = this._target, {
      button: n2
    } = t2;
    if (n2) return (this.fireMiddleClick && 1 === n2 || this.fireRightClick && 2 === n2) && this._handleEvent(t2, "up"), void this._resetTransformEventData();
    if (this.isDrawingMode && this._isCurrentlyDrawing) return void this._onMouseUpInDrawingMode(t2);
    if (!this._isMainEvent(t2)) return;
    let o2, a2, h2 = false;
    if (s2 && (this._finalizeCurrentTransform(t2), h2 = s2.actionPerformed), !i2) {
      const e4 = r2 === this._activeObject;
      this.handleSelection(t2), h2 || (h2 = this._shouldRender(r2) || !e4 && r2 === this._activeObject);
    }
    if (r2) {
      const e4 = r2.findControl(this.getViewportPoint(t2), pe(t2)), {
        key: i3,
        control: n3
      } = e4 || {};
      if (a2 = i3, r2.selectable && r2 !== this._activeObject && "up" === r2.activeOn) this.setActiveObject(r2, t2), h2 = true;
      else if (n3) {
        const e5 = n3.getMouseUpHandler(t2, r2, n3);
        e5 && (o2 = this.getScenePoint(t2), e5.call(n3, t2, s2, o2.x, o2.y));
      }
      r2.isMoving = false;
    }
    if (s2 && (s2.target !== r2 || s2.corner !== a2)) {
      const e4 = s2.target && s2.target.controls[s2.corner], i3 = e4 && e4.getMouseUpHandler(t2, s2.target, e4);
      o2 = o2 || this.getScenePoint(t2), i3 && i3.call(e4, t2, s2, o2.x, o2.y);
    }
    this._setCursorFromEvent(t2, r2), this._handleEvent(t2, "up"), this._groupSelector = null, this._currentTransform = null, r2 && (r2.__corner = void 0), h2 ? this.requestRenderAll() : i2 || null !== (e3 = this._activeObject) && void 0 !== e3 && e3.isEditing || this.renderTop();
  }
  _basicEventHandler(t2, e3) {
    const {
      target: s2,
      subTargets: i2 = []
    } = e3;
    this.fire(t2, e3), s2 && s2.fire(t2, e3);
    for (let r2 = 0; r2 < i2.length; r2++) i2[r2] !== s2 && i2[r2].fire(t2, e3);
    return e3;
  }
  _handleEvent(t2, e3) {
    const i2 = this._target, r2 = this.targets || [], n2 = s(s({
      e: t2,
      target: i2,
      subTargets: r2
    }, vn(this, t2)), {}, {
      transform: this._currentTransform
    }, "up:before" === e3 || "up" === e3 ? {
      isClick: this._isClick,
      currentTarget: this.findTarget(t2),
      currentSubTargets: this.targets
    } : {});
    this.fire("mouse:".concat(e3), n2), i2 && i2.fire("mouse".concat(e3), n2);
    for (let t3 = 0; t3 < r2.length; t3++) r2[t3] !== i2 && r2[t3].fire("mouse".concat(e3), n2);
  }
  _onMouseDownInDrawingMode(t2) {
    this._isCurrentlyDrawing = true, this.getActiveObject() && (this.discardActiveObject(t2), this.requestRenderAll());
    const e3 = this.getScenePoint(t2);
    this.freeDrawingBrush && this.freeDrawingBrush.onMouseDown(e3, {
      e: t2,
      pointer: e3
    }), this._handleEvent(t2, "down");
  }
  _onMouseMoveInDrawingMode(t2) {
    if (this._isCurrentlyDrawing) {
      const e3 = this.getScenePoint(t2);
      this.freeDrawingBrush && this.freeDrawingBrush.onMouseMove(e3, {
        e: t2,
        pointer: e3
      });
    }
    this.setCursor(this.freeDrawingCursor), this._handleEvent(t2, "move");
  }
  _onMouseUpInDrawingMode(t2) {
    const e3 = this.getScenePoint(t2);
    this.freeDrawingBrush ? this._isCurrentlyDrawing = !!this.freeDrawingBrush.onMouseUp({
      e: t2,
      pointer: e3
    }) : this._isCurrentlyDrawing = false, this._handleEvent(t2, "up");
  }
  __onMouseDown(t2) {
    this._isClick = true, this._cacheTransformEventData(t2), this._handleEvent(t2, "down:before");
    let e3 = this._target;
    const {
      button: s2
    } = t2;
    if (s2) return (this.fireMiddleClick && 1 === s2 || this.fireRightClick && 2 === s2) && this._handleEvent(t2, "down"), void this._resetTransformEventData();
    if (this.isDrawingMode) return void this._onMouseDownInDrawingMode(t2);
    if (!this._isMainEvent(t2)) return;
    if (this._currentTransform) return;
    let i2 = this._shouldRender(e3), r2 = false;
    if (this.handleMultiSelection(t2, e3) ? (e3 = this._activeObject, r2 = true, i2 = true) : this._shouldClearSelection(t2, e3) && this.discardActiveObject(t2), this.selection && (!e3 || !e3.selectable && !e3.isEditing && e3 !== this._activeObject)) {
      const e4 = this.getScenePoint(t2);
      this._groupSelector = {
        x: e4.x,
        y: e4.y,
        deltaY: 0,
        deltaX: 0
      };
    }
    if (e3) {
      const s3 = e3 === this._activeObject;
      e3.selectable && "down" === e3.activeOn && this.setActiveObject(e3, t2);
      const i3 = e3.findControl(this.getViewportPoint(t2), pe(t2));
      if (e3 === this._activeObject && (i3 || !r2)) {
        this._setupCurrentTransform(t2, e3, s3);
        const r3 = i3 ? i3.control : void 0, n2 = this.getScenePoint(t2), o2 = r3 && r3.getMouseDownHandler(t2, e3, r3);
        o2 && o2.call(r3, t2, this._currentTransform, n2.x, n2.y);
      }
    }
    i2 && (this._objectsToRender = void 0), this._handleEvent(t2, "down"), i2 && this.requestRenderAll();
  }
  _resetTransformEventData() {
    this._target = this._pointer = this._absolutePointer = void 0;
  }
  _cacheTransformEventData(t2) {
    this._resetTransformEventData(), this._pointer = this.getViewportPoint(t2), this._absolutePointer = Te(this._pointer, void 0, this.viewportTransform), this._target = this._currentTransform ? this._currentTransform.target : this.findTarget(t2);
  }
  __onMouseMove(t2) {
    if (this._isClick = false, this._cacheTransformEventData(t2), this._handleEvent(t2, "move:before"), this.isDrawingMode) return void this._onMouseMoveInDrawingMode(t2);
    if (!this._isMainEvent(t2)) return;
    const e3 = this._groupSelector;
    if (e3) {
      const s2 = this.getScenePoint(t2);
      e3.deltaX = s2.x - e3.x, e3.deltaY = s2.y - e3.y, this.renderTop();
    } else if (this._currentTransform) this._transformObject(t2);
    else {
      const e4 = this.findTarget(t2);
      this._setCursorFromEvent(t2, e4), this._fireOverOutEvents(t2, e4);
    }
    this.textEditingManager.onMouseMove(t2), this._handleEvent(t2, "move"), this._resetTransformEventData();
  }
  _fireOverOutEvents(t2, e3) {
    const s2 = this._hoveredTarget, i2 = this._hoveredTargets, r2 = this.targets, n2 = Math.max(i2.length, r2.length);
    this.fireSyntheticInOutEvents("mouse", {
      e: t2,
      target: e3,
      oldTarget: s2,
      fireCanvas: true
    });
    for (let e4 = 0; e4 < n2; e4++) this.fireSyntheticInOutEvents("mouse", {
      e: t2,
      target: r2[e4],
      oldTarget: i2[e4]
    });
    this._hoveredTarget = e3, this._hoveredTargets = this.targets.concat();
  }
  _fireEnterLeaveEvents(t2, e3) {
    const i2 = this._draggedoverTarget, r2 = this._hoveredTargets, n2 = this.targets, o2 = Math.max(r2.length, n2.length);
    this.fireSyntheticInOutEvents("drag", s(s({}, e3), {}, {
      target: t2,
      oldTarget: i2,
      fireCanvas: true
    }));
    for (let t3 = 0; t3 < o2; t3++) this.fireSyntheticInOutEvents("drag", s(s({}, e3), {}, {
      target: n2[t3],
      oldTarget: r2[t3]
    }));
    this._draggedoverTarget = t2;
  }
  fireSyntheticInOutEvents(t2, e3) {
    let {
      target: r2,
      oldTarget: n2,
      fireCanvas: o2,
      e: a2
    } = e3, h2 = i(e3, pn);
    const {
      targetIn: c2,
      targetOut: l2,
      canvasIn: u2,
      canvasOut: d2
    } = xn[t2], g2 = n2 !== r2;
    if (n2 && g2) {
      const t3 = s(s({}, h2), {}, {
        e: a2,
        target: n2,
        nextTarget: r2
      }, vn(this, a2));
      o2 && this.fire(d2, t3), n2.fire(l2, t3);
    }
    if (r2 && g2) {
      const t3 = s(s({}, h2), {}, {
        e: a2,
        target: r2,
        previousTarget: n2
      }, vn(this, a2));
      o2 && this.fire(u2, t3), r2.fire(c2, t3);
    }
  }
  __onMouseWheel(t2) {
    this._cacheTransformEventData(t2), this._handleEvent(t2, "wheel"), this._resetTransformEventData();
  }
  _transformObject(t2) {
    const e3 = this.getScenePoint(t2), s2 = this._currentTransform, i2 = s2.target, r2 = i2.group ? Te(e3, void 0, i2.group.calcTransformMatrix()) : e3;
    s2.shiftKey = t2.shiftKey, s2.altKey = !!this.centeredKey && t2[this.centeredKey], this._performTransformAction(t2, s2, r2), s2.actionPerformed && this.requestRenderAll();
  }
  _performTransformAction(t2, e3, s2) {
    const {
      action: i2,
      actionHandler: r2,
      target: n2
    } = e3, o2 = !!r2 && r2(t2, e3, s2.x, s2.y);
    o2 && n2.setCoords(), "drag" === i2 && o2 && (e3.target.isMoving = true, this.setCursor(e3.target.moveCursor || this.moveCursor)), e3.actionPerformed = e3.actionPerformed || o2;
  }
  _setCursorFromEvent(t2, e3) {
    if (!e3) return void this.setCursor(this.defaultCursor);
    let s2 = e3.hoverCursor || this.hoverCursor;
    const i2 = ie(this._activeObject) ? this._activeObject : null, r2 = (!i2 || e3.group !== i2) && e3.findControl(this.getViewportPoint(t2));
    if (r2) {
      const s3 = r2.control;
      this.setCursor(s3.cursorStyleHandler(t2, s3, e3));
    } else e3.subTargetCheck && this.targets.concat().reverse().map((t3) => {
      s2 = t3.hoverCursor || s2;
    }), this.setCursor(s2);
  }
  handleMultiSelection(t2, e3) {
    const s2 = this._activeObject, i2 = ie(s2);
    if (s2 && this._isSelectionKeyPressed(t2) && this.selection && e3 && e3.selectable && (s2 !== e3 || i2) && (i2 || !e3.isDescendantOf(s2) && !s2.isDescendantOf(e3)) && !e3.onSelect({
      e: t2
    }) && !s2.getActiveControl()) {
      if (i2) {
        const i3 = s2.getObjects();
        if (e3 === s2) {
          const s3 = this.getViewportPoint(t2);
          if (!(e3 = this.searchPossibleTargets(i3, s3) || this.searchPossibleTargets(this._objects, s3)) || !e3.selectable) return false;
        }
        e3.group === s2 ? (s2.remove(e3), this._hoveredTarget = e3, this._hoveredTargets = [...this.targets], 1 === s2.size() && this._setActiveObject(s2.item(0), t2)) : (s2.multiSelectAdd(e3), this._hoveredTarget = s2, this._hoveredTargets = [...this.targets]), this._fireSelectionEvents(i3, t2);
      } else {
        s2.isEditing && s2.exitEditing();
        const i3 = new (tt.getClass("ActiveSelection"))([], {
          canvas: this
        });
        i3.multiSelectAdd(s2, e3), this._hoveredTarget = i3, this._setActiveObject(i3, t2), this._fireSelectionEvents([s2], t2);
      }
      return true;
    }
    return false;
  }
  handleSelection(t2) {
    if (!this.selection || !this._groupSelector) return false;
    const {
      x: e3,
      y: s2,
      deltaX: i2,
      deltaY: r2
    } = this._groupSelector, n2 = new ot(e3, s2), o2 = n2.add(new ot(i2, r2)), a2 = n2.min(o2), h2 = n2.max(o2).subtract(a2), c2 = this.collectObjects({
      left: a2.x,
      top: a2.y,
      width: h2.x,
      height: h2.y
    }, {
      includeIntersecting: !this.selectionFullyContained
    }), l2 = n2.eq(o2) ? c2[0] ? [c2[0]] : [] : c2.length > 1 ? c2.filter((e4) => !e4.onSelect({
      e: t2
    })).reverse() : c2;
    if (1 === l2.length) this.setActiveObject(l2[0], t2);
    else if (l2.length > 1) {
      const e4 = tt.getClass("ActiveSelection");
      this.setActiveObject(new e4(l2, {
        canvas: this
      }), t2);
    }
    return this._groupSelector = null, true;
  }
  clear() {
    this.textEditingManager.clear(), super.clear();
  }
  destroy() {
    this.removeListeners(), this.textEditingManager.dispose(), super.destroy();
  }
};
var bn = {
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0
};
var wn = s(s({}, bn), {}, {
  r1: 0,
  r2: 0
});
var Sn = (t2, e3) => isNaN(t2) && "number" == typeof e3 ? e3 : t2;
var Tn = /^(\d+\.\d+)%|(\d+)%$/;
function On(t2) {
  return t2 && Tn.test(t2);
}
function kn(t2, e3) {
  const s2 = "number" == typeof t2 ? t2 : "string" == typeof t2 ? parseFloat(t2) / (On(t2) ? 100 : 1) : NaN;
  return gs(0, Sn(s2, e3), 1);
}
var Dn = /\s*;\s*/;
var Mn = /\s*:\s*/;
function Pn(t2, e3) {
  let s2, i2;
  const r2 = t2.getAttribute("style");
  if (r2) {
    const t3 = r2.split(Dn);
    "" === t3[t3.length - 1] && t3.pop();
    for (let e4 = t3.length; e4--; ) {
      const [r3, n3] = t3[e4].split(Mn).map((t4) => t4.trim());
      "stop-color" === r3 ? s2 = n3 : "stop-opacity" === r3 && (i2 = n3);
    }
  }
  const n2 = new qt(s2 || t2.getAttribute("stop-color") || "rgb(0,0,0)");
  return {
    offset: kn(t2.getAttribute("offset"), 0),
    color: n2.toRgb(),
    opacity: Sn(parseFloat(i2 || t2.getAttribute("stop-opacity") || ""), 1) * n2.getAlpha() * e3
  };
}
function En(t2, e3) {
  const s2 = [], i2 = t2.getElementsByTagName("stop"), r2 = kn(e3, 1);
  for (let t3 = i2.length; t3--; ) s2.push(Pn(i2[t3], r2));
  return s2;
}
function An(t2) {
  return "linearGradient" === t2.nodeName || "LINEARGRADIENT" === t2.nodeName ? "linear" : "radial";
}
function jn(t2) {
  return "userSpaceOnUse" === t2.getAttribute("gradientUnits") ? "pixels" : "percentage";
}
function Fn(t2, e3) {
  return t2.getAttribute(e3);
}
function Ln(t2, e3) {
  return function(t3, e4) {
    let s2, {
      width: i2,
      height: r2,
      gradientUnits: n2
    } = e4;
    return Object.keys(t3).reduce((e5, o2) => {
      const a2 = t3[o2];
      return "Infinity" === a2 ? s2 = 1 : "-Infinity" === a2 ? s2 = 0 : (s2 = "string" == typeof a2 ? parseFloat(a2) : a2, "string" == typeof a2 && On(a2) && (s2 *= 0.01, "pixels" === n2 && ("x1" !== o2 && "x2" !== o2 && "r2" !== o2 || (s2 *= i2), "y1" !== o2 && "y2" !== o2 || (s2 *= r2)))), e5[o2] = s2, e5;
    }, {});
  }("linear" === An(t2) ? function(t3) {
    return {
      x1: Fn(t3, "x1") || 0,
      y1: Fn(t3, "y1") || 0,
      x2: Fn(t3, "x2") || "100%",
      y2: Fn(t3, "y2") || 0
    };
  }(t2) : function(t3) {
    return {
      x1: Fn(t3, "fx") || Fn(t3, "cx") || "50%",
      y1: Fn(t3, "fy") || Fn(t3, "cy") || "50%",
      r1: 0,
      x2: Fn(t3, "cx") || "50%",
      y2: Fn(t3, "cy") || "50%",
      r2: Fn(t3, "r") || "50%"
    };
  }(t2), s(s({}, e3), {}, {
    gradientUnits: jn(t2)
  }));
}
var Rn = class {
  constructor(t2) {
    const {
      type: e3 = "linear",
      gradientUnits: i2 = "pixels",
      coords: r2 = {},
      colorStops: n2 = [],
      offsetX: o2 = 0,
      offsetY: a2 = 0,
      gradientTransform: h2,
      id: c2
    } = t2 || {};
    Object.assign(this, {
      type: e3,
      gradientUnits: i2,
      coords: s(s({}, "radial" === e3 ? wn : bn), r2),
      colorStops: n2,
      offsetX: o2,
      offsetY: a2,
      gradientTransform: h2,
      id: c2 ? "".concat(c2, "_").concat(ft()) : ft()
    });
  }
  addColorStop(t2) {
    for (const e3 in t2) {
      const s2 = new qt(t2[e3]);
      this.colorStops.push({
        offset: parseFloat(e3),
        color: s2.toRgb(),
        opacity: s2.getAlpha()
      });
    }
    return this;
  }
  toObject(t2) {
    return s(s({}, Yt(this, t2)), {}, {
      type: this.type,
      coords: s({}, this.coords),
      colorStops: this.colorStops.map((t3) => s({}, t3)),
      offsetX: this.offsetX,
      offsetY: this.offsetY,
      gradientUnits: this.gradientUnits,
      gradientTransform: this.gradientTransform ? [...this.gradientTransform] : void 0
    });
  }
  toSVG(t2) {
    let {
      additionalTransform: e3
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const i2 = [], r2 = this.gradientTransform ? this.gradientTransform.concat() : T.concat(), n2 = "pixels" === this.gradientUnits ? "userSpaceOnUse" : "objectBoundingBox", o2 = this.colorStops.map((t3) => s({}, t3)).sort((t3, e4) => t3.offset - e4.offset);
    let a2 = -this.offsetX, h2 = -this.offsetY;
    var c2;
    "objectBoundingBox" === n2 ? (a2 /= t2.width, h2 /= t2.height) : (a2 += t2.width / 2, h2 += t2.height / 2), (c2 = t2) && "function" == typeof c2._renderPathCommands && "percentage" !== this.gradientUnits && (a2 -= t2.pathOffset.x, h2 -= t2.pathOffset.y), r2[4] -= a2, r2[5] -= h2;
    const l2 = ['id="SVGID_'.concat(this.id, '"'), 'gradientUnits="'.concat(n2, '"'), 'gradientTransform="'.concat(e3 ? e3 + " " : "").concat(Zt(r2), '"'), ""].join(" ");
    if ("linear" === this.type) {
      const {
        x1: t3,
        y1: e4,
        x2: s2,
        y2: r3
      } = this.coords;
      i2.push("<linearGradient ", l2, ' x1="', t3, '" y1="', e4, '" x2="', s2, '" y2="', r3, '">\n');
    } else if ("radial" === this.type) {
      const {
        x1: t3,
        y1: e4,
        x2: s2,
        y2: r3,
        r1: n3,
        r2: a3
      } = this.coords, h3 = n3 > a3;
      i2.push("<radialGradient ", l2, ' cx="', h3 ? t3 : s2, '" cy="', h3 ? e4 : r3, '" r="', h3 ? n3 : a3, '" fx="', h3 ? s2 : t3, '" fy="', h3 ? r3 : e4, '">\n'), h3 && (o2.reverse(), o2.forEach((t4) => {
        t4.offset = 1 - t4.offset;
      }));
      const c3 = Math.min(n3, a3);
      if (c3 > 0) {
        const t4 = c3 / Math.max(n3, a3);
        o2.forEach((e5) => {
          e5.offset += t4 * (1 - e5.offset);
        });
      }
    }
    return o2.forEach((t3) => {
      let {
        color: e4,
        offset: s2,
        opacity: r3
      } = t3;
      i2.push("<stop ", 'offset="', 100 * s2 + "%", '" style="stop-color:', e4, void 0 !== r3 ? ";stop-opacity: " + r3 : ";", '"/>\n');
    }), i2.push("linear" === this.type ? "</linearGradient>" : "</radialGradient>", "\n"), i2.join("");
  }
  toLive(t2) {
    const {
      x1: e3,
      y1: s2,
      x2: i2,
      y2: r2,
      r1: n2,
      r2: o2
    } = this.coords, a2 = "linear" === this.type ? t2.createLinearGradient(e3, s2, i2, r2) : t2.createRadialGradient(e3, s2, n2, i2, r2, o2);
    return this.colorStops.forEach((t3) => {
      let {
        color: e4,
        opacity: s3,
        offset: i3
      } = t3;
      a2.addColorStop(i3, void 0 !== s3 ? new qt(e4).setAlpha(s3).toRgba() : e4);
    }), a2;
  }
  static fromObject(t2) {
    return __async(this, null, function* () {
      const {
        colorStops: e3,
        gradientTransform: i2
      } = t2;
      return new this(s(s({}, t2), {}, {
        colorStops: e3 ? e3.map((t3) => s({}, t3)) : void 0,
        gradientTransform: i2 ? [...i2] : void 0
      }));
    });
  }
  static fromElement(t2, e3, i2) {
    const r2 = jn(t2), n2 = e3._findCenterFromElement();
    return new this(s({
      id: t2.getAttribute("id") || void 0,
      type: An(t2),
      coords: Ln(t2, {
        width: i2.viewBoxWidth || i2.width,
        height: i2.viewBoxHeight || i2.height
      }),
      colorStops: En(t2, i2.opacity),
      gradientUnits: r2,
      gradientTransform: or(t2.getAttribute("gradientTransform") || "")
    }, "pixels" === r2 ? {
      offsetX: e3.width / 2 - n2.x,
      offsetY: e3.height / 2 - n2.y
    } : {
      offsetX: 0,
      offsetY: 0
    }));
  }
};
t(Rn, "type", "Gradient"), tt.setClass(Rn, "gradient"), tt.setClass(Rn, "linear"), tt.setClass(Rn, "radial");
var In = ["type", "source", "patternTransform"];
var Bn = class {
  get type() {
    return "pattern";
  }
  set type(t2) {
    a("warn", "Setting type has no effect", t2);
  }
  constructor(e3) {
    t(this, "repeat", "repeat"), t(this, "offsetX", 0), t(this, "offsetY", 0), t(this, "crossOrigin", ""), this.id = ft(), Object.assign(this, e3);
  }
  isImageSource() {
    return !!this.source && "string" == typeof this.source.src;
  }
  isCanvasSource() {
    return !!this.source && !!this.source.toDataURL;
  }
  sourceToString() {
    return this.isImageSource() ? this.source.src : this.isCanvasSource() ? this.source.toDataURL() : "";
  }
  toLive(t2) {
    return this.source && (!this.isImageSource() || this.source.complete && 0 !== this.source.naturalWidth && 0 !== this.source.naturalHeight) ? t2.createPattern(this.source, this.repeat) : null;
  }
  toObject() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    const {
      repeat: e3,
      crossOrigin: i2
    } = this;
    return s(s({}, Yt(this, t2)), {}, {
      type: "pattern",
      source: this.sourceToString(),
      repeat: e3,
      crossOrigin: i2,
      offsetX: Kt(this.offsetX, o.NUM_FRACTION_DIGITS),
      offsetY: Kt(this.offsetY, o.NUM_FRACTION_DIGITS),
      patternTransform: this.patternTransform ? [...this.patternTransform] : null
    });
  }
  toSVG(t2) {
    let {
      width: e3,
      height: s2
    } = t2;
    const {
      source: i2,
      repeat: r2,
      id: n2
    } = this, o2 = Sn(this.offsetX / e3, 0), a2 = Sn(this.offsetY / s2, 0), h2 = "repeat-y" === r2 || "no-repeat" === r2 ? 1 + Math.abs(o2 || 0) : Sn(i2.width / e3, 0), c2 = "repeat-x" === r2 || "no-repeat" === r2 ? 1 + Math.abs(a2 || 0) : Sn(i2.height / s2, 0);
    return ['<pattern id="SVGID_'.concat(n2, '" x="').concat(o2, '" y="').concat(a2, '" width="').concat(h2, '" height="').concat(c2, '">'), '<image x="0" y="0" width="'.concat(i2.width, '" height="').concat(i2.height, '" xlink:href="').concat(this.sourceToString(), '"></image>'), "</pattern>", ""].join("\n");
  }
  static fromObject(t2, e3) {
    return __async(this, null, function* () {
      let {
        type: r2,
        source: n2,
        patternTransform: o2
      } = t2, a2 = i(t2, In);
      const h2 = yield It(n2, s(s({}, e3), {}, {
        crossOrigin: a2.crossOrigin
      }));
      return new this(s(s({}, a2), {}, {
        patternTransform: o2 && o2.slice(0),
        source: h2
      }));
    });
  }
};
t(Bn, "type", "Pattern"), tt.setClass(Bn), tt.setClass(Bn, "pattern");
var Xn = class {
  constructor(e3) {
    t(this, "color", "rgb(0, 0, 0)"), t(this, "width", 1), t(this, "shadow", null), t(this, "strokeLineCap", "round"), t(this, "strokeLineJoin", "round"), t(this, "strokeMiterLimit", 10), t(this, "strokeDashArray", null), t(this, "limitedToCanvasSize", false), this.canvas = e3;
  }
  _setBrushStyles(t2) {
    t2.strokeStyle = this.color, t2.lineWidth = this.width, t2.lineCap = this.strokeLineCap, t2.miterLimit = this.strokeMiterLimit, t2.lineJoin = this.strokeLineJoin, t2.setLineDash(this.strokeDashArray || []);
  }
  _saveAndTransform(t2) {
    const e3 = this.canvas.viewportTransform;
    t2.save(), t2.transform(e3[0], e3[1], e3[2], e3[3], e3[4], e3[5]);
  }
  needsFullRender() {
    return new qt(this.color).getAlpha() < 1 || !!this.shadow;
  }
  _setShadow() {
    if (!this.shadow || !this.canvas) return;
    const t2 = this.canvas, e3 = this.shadow, s2 = t2.contextTop, i2 = t2.getZoom() * t2.getRetinaScaling();
    s2.shadowColor = e3.color, s2.shadowBlur = e3.blur * i2, s2.shadowOffsetX = e3.offsetX * i2, s2.shadowOffsetY = e3.offsetY * i2;
  }
  _resetShadow() {
    const t2 = this.canvas.contextTop;
    t2.shadowColor = "", t2.shadowBlur = t2.shadowOffsetX = t2.shadowOffsetY = 0;
  }
  _isOutSideCanvas(t2) {
    return t2.x < 0 || t2.x > this.canvas.getWidth() || t2.y < 0 || t2.y > this.canvas.getHeight();
  }
};
var Yn = ["path", "left", "top"];
var Wn = ["d"];
var Vn = class _Vn extends _i {
  constructor(t2) {
    let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
      path: s2,
      left: r2,
      top: n2
    } = e3, o2 = i(e3, Yn);
    super(), Object.assign(this, _Vn.ownDefaults), this.setOptions(o2), this._setPath(t2 || [], true), "number" == typeof r2 && this.set(M, r2), "number" == typeof n2 && this.set(P, n2);
  }
  _setPath(t2, e3) {
    this.path = Yr(Array.isArray(t2) ? t2 : rn(t2)), this.setBoundingBox(e3);
  }
  _findCenterFromElement() {
    const t2 = this._calcBoundsFromPath();
    return new ot(t2.left + t2.width / 2, t2.top + t2.height / 2);
  }
  _renderPathCommands(t2) {
    const e3 = -this.pathOffset.x, s2 = -this.pathOffset.y;
    t2.beginPath();
    for (const i2 of this.path) switch (i2[0]) {
      case "L":
        t2.lineTo(i2[1] + e3, i2[2] + s2);
        break;
      case "M":
        t2.moveTo(i2[1] + e3, i2[2] + s2);
        break;
      case "C":
        t2.bezierCurveTo(i2[1] + e3, i2[2] + s2, i2[3] + e3, i2[4] + s2, i2[5] + e3, i2[6] + s2);
        break;
      case "Q":
        t2.quadraticCurveTo(i2[1] + e3, i2[2] + s2, i2[3] + e3, i2[4] + s2);
        break;
      case "Z":
        t2.closePath();
    }
  }
  _render(t2) {
    this._renderPathCommands(t2), this._renderPaintInOrder(t2);
  }
  toString() {
    return "#<Path (".concat(this.complexity(), '): { "top": ').concat(this.top, ', "left": ').concat(this.left, " }>");
  }
  toObject() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return s(s({}, super.toObject(t2)), {}, {
      path: this.path.map((t3) => t3.slice())
    });
  }
  toDatalessObject() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    const e3 = this.toObject(t2);
    return this.sourcePath && (delete e3.path, e3.sourcePath = this.sourcePath), e3;
  }
  _toSVG() {
    const t2 = on(this.path, o.NUM_FRACTION_DIGITS);
    return ["<path ", "COMMON_PARTS", 'd="'.concat(t2, '" stroke-linecap="round" />\n')];
  }
  _getOffsetTransform() {
    const t2 = o.NUM_FRACTION_DIGITS;
    return " translate(".concat(Kt(-this.pathOffset.x, t2), ", ").concat(Kt(-this.pathOffset.y, t2), ")");
  }
  toClipPathSVG(t2) {
    const e3 = this._getOffsetTransform();
    return "	" + this._createBaseClipPathSVGMarkup(this._toSVG(), {
      reviver: t2,
      additionalTransform: e3
    });
  }
  toSVG(t2) {
    const e3 = this._getOffsetTransform();
    return this._createBaseSVGMarkup(this._toSVG(), {
      reviver: t2,
      additionalTransform: e3
    });
  }
  complexity() {
    return this.path.length;
  }
  setDimensions() {
    this.setBoundingBox();
  }
  setBoundingBox(t2) {
    const {
      width: e3,
      height: s2,
      pathOffset: i2
    } = this._calcDimensions();
    this.set({
      width: e3,
      height: s2,
      pathOffset: i2
    }), t2 && this.setPositionByOrigin(i2, D, D);
  }
  _calcBoundsFromPath() {
    const t2 = [];
    let e3 = 0, s2 = 0, i2 = 0, r2 = 0;
    for (const n2 of this.path) switch (n2[0]) {
      case "L":
        i2 = n2[1], r2 = n2[2], t2.push({
          x: e3,
          y: s2
        }, {
          x: i2,
          y: r2
        });
        break;
      case "M":
        i2 = n2[1], r2 = n2[2], e3 = i2, s2 = r2;
        break;
      case "C":
        t2.push(...Br(i2, r2, n2[1], n2[2], n2[3], n2[4], n2[5], n2[6])), i2 = n2[5], r2 = n2[6];
        break;
      case "Q":
        t2.push(...Br(i2, r2, n2[1], n2[2], n2[1], n2[2], n2[3], n2[4])), i2 = n2[3], r2 = n2[4];
        break;
      case "Z":
        i2 = e3, r2 = s2;
    }
    return ve(t2);
  }
  _calcDimensions() {
    const t2 = this._calcBoundsFromPath();
    return s(s({}, t2), {}, {
      pathOffset: new ot(t2.left + t2.width / 2, t2.top + t2.height / 2)
    });
  }
  static fromObject(t2) {
    return this._fromObject(t2, {
      extraParam: "path"
    });
  }
  static fromElement(t2, e3, r2) {
    return __async(this, null, function* () {
      const n2 = dr(t2, this.ATTRIBUTE_NAMES, r2), {
        d: o2
      } = n2;
      return new this(o2, s(s(s({}, i(n2, Wn)), e3), {}, {
        left: void 0,
        top: void 0
      }));
    });
  }
};
t(Vn, "type", "Path"), t(Vn, "cacheProperties", [...ps, "path", "fillRule"]), t(Vn, "ATTRIBUTE_NAMES", [...Fi, "d"]), tt.setClass(Vn), tt.setSVGClass(Vn);
var zn = class _zn extends Xn {
  constructor(e3) {
    super(e3), t(this, "decimate", 0.4), t(this, "drawStraightLine", false), t(this, "straightLineKey", "shiftKey"), this._points = [], this._hasStraightLine = false;
  }
  needsFullRender() {
    return super.needsFullRender() || this._hasStraightLine;
  }
  static drawSegment(t2, e3, s2) {
    const i2 = e3.midPointFrom(s2);
    return t2.quadraticCurveTo(e3.x, e3.y, i2.x, i2.y), i2;
  }
  onMouseDown(t2, e3) {
    let {
      e: s2
    } = e3;
    this.canvas._isMainEvent(s2) && (this.drawStraightLine = !!this.straightLineKey && s2[this.straightLineKey], this._prepareForDrawing(t2), this._addPoint(t2), this._render());
  }
  onMouseMove(t2, e3) {
    let {
      e: s2
    } = e3;
    if (this.canvas._isMainEvent(s2) && (this.drawStraightLine = !!this.straightLineKey && s2[this.straightLineKey], (true !== this.limitedToCanvasSize || !this._isOutSideCanvas(t2)) && this._addPoint(t2) && this._points.length > 1)) if (this.needsFullRender()) this.canvas.clearContext(this.canvas.contextTop), this._render();
    else {
      const t3 = this._points, e4 = t3.length, s3 = this.canvas.contextTop;
      this._saveAndTransform(s3), this.oldEnd && (s3.beginPath(), s3.moveTo(this.oldEnd.x, this.oldEnd.y)), this.oldEnd = _zn.drawSegment(s3, t3[e4 - 2], t3[e4 - 1]), s3.stroke(), s3.restore();
    }
  }
  onMouseUp(t2) {
    let {
      e: e3
    } = t2;
    return !this.canvas._isMainEvent(e3) || (this.drawStraightLine = false, this.oldEnd = void 0, this._finalizeAndAddPath(), false);
  }
  _prepareForDrawing(t2) {
    this._reset(), this._addPoint(t2), this.canvas.contextTop.moveTo(t2.x, t2.y);
  }
  _addPoint(t2) {
    return !(this._points.length > 1 && t2.eq(this._points[this._points.length - 1])) && (this.drawStraightLine && this._points.length > 1 && (this._hasStraightLine = true, this._points.pop()), this._points.push(t2), true);
  }
  _reset() {
    this._points = [], this._setBrushStyles(this.canvas.contextTop), this._setShadow(), this._hasStraightLine = false;
  }
  _render() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.canvas.contextTop, e3 = this._points[0], s2 = this._points[1];
    if (this._saveAndTransform(t2), t2.beginPath(), 2 === this._points.length && e3.x === s2.x && e3.y === s2.y) {
      const t3 = this.width / 1e3;
      e3.x -= t3, s2.x += t3;
    }
    t2.moveTo(e3.x, e3.y);
    for (let i2 = 1; i2 < this._points.length; i2++) _zn.drawSegment(t2, e3, s2), e3 = this._points[i2], s2 = this._points[i2 + 1];
    t2.lineTo(e3.x, e3.y), t2.stroke(), t2.restore();
  }
  convertPointsToSVGPath(t2) {
    const e3 = this.width / 1e3;
    return nn(t2, e3);
  }
  createPath(t2) {
    const e3 = new Vn(t2, {
      fill: null,
      stroke: this.color,
      strokeWidth: this.width,
      strokeLineCap: this.strokeLineCap,
      strokeMiterLimit: this.strokeMiterLimit,
      strokeLineJoin: this.strokeLineJoin,
      strokeDashArray: this.strokeDashArray
    });
    return this.shadow && (this.shadow.affectStroke = true, e3.shadow = new ds(this.shadow)), e3;
  }
  decimatePoints(t2, e3) {
    if (t2.length <= 2) return t2;
    let s2, i2 = t2[0];
    const r2 = this.canvas.getZoom(), n2 = Math.pow(e3 / r2, 2), o2 = t2.length - 1, a2 = [i2];
    for (let e4 = 1; e4 < o2 - 1; e4++) s2 = Math.pow(i2.x - t2[e4].x, 2) + Math.pow(i2.y - t2[e4].y, 2), s2 >= n2 && (i2 = t2[e4], a2.push(i2));
    return a2.push(t2[o2]), a2;
  }
  _finalizeAndAddPath() {
    this.canvas.contextTop.closePath(), this.decimate && (this._points = this.decimatePoints(this._points, this.decimate));
    const t2 = this.convertPointsToSVGPath(this._points);
    if (function(t3) {
      return "M 0 0 Q 0 0 0 0 L 0 0" === on(t3);
    }(t2)) return void this.canvas.requestRenderAll();
    const e3 = this.createPath(t2);
    this.canvas.clearContext(this.canvas.contextTop), this.canvas.fire("before:path:created", {
      path: e3
    }), this.canvas.add(e3), this.canvas.requestRenderAll(), e3.setCoords(), this._resetShadow(), this.canvas.fire("path:created", {
      path: e3
    });
  }
};
var Hn = ["left", "top", "radius"];
var Gn = ["radius", "startAngle", "endAngle", "counterClockwise"];
var Nn = class _Nn extends _i {
  static getDefaults() {
    return s(s({}, super.getDefaults()), _Nn.ownDefaults);
  }
  constructor(t2) {
    super(), Object.assign(this, _Nn.ownDefaults), this.setOptions(t2);
  }
  _set(t2, e3) {
    return super._set(t2, e3), "radius" === t2 && this.setRadius(e3), this;
  }
  _render(t2) {
    t2.beginPath(), t2.arc(0, 0, this.radius, xt(this.startAngle), xt(this.endAngle), this.counterClockwise), this._renderPaintInOrder(t2);
  }
  getRadiusX() {
    return this.get("radius") * this.get(G);
  }
  getRadiusY() {
    return this.get("radius") * this.get(N);
  }
  setRadius(t2) {
    this.radius = t2, this.set({
      width: 2 * t2,
      height: 2 * t2
    });
  }
  toObject() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return super.toObject([...Gn, ...t2]);
  }
  _toSVG() {
    const t2 = (this.endAngle - this.startAngle) % 360;
    if (0 === t2) return ["<circle ", "COMMON_PARTS", 'cx="0" cy="0" ', 'r="', "".concat(this.radius), '" />\n'];
    {
      const {
        radius: e3
      } = this, s2 = xt(this.startAngle), i2 = xt(this.endAngle), r2 = rt(s2) * e3, n2 = nt(s2) * e3, o2 = rt(i2) * e3, a2 = nt(i2) * e3, h2 = t2 > 180 ? 1 : 0, c2 = this.counterClockwise ? 0 : 1;
      return ['<path d="M '.concat(r2, " ").concat(n2, " A ").concat(e3, " ").concat(e3, " 0 ").concat(h2, " ").concat(c2, " ").concat(o2, " ").concat(a2, '" '), "COMMON_PARTS", " />\n"];
    }
  }
  static fromElement(t2, e3, r2) {
    return __async(this, null, function* () {
      const n2 = dr(t2, this.ATTRIBUTE_NAMES, r2), {
        left: o2 = 0,
        top: a2 = 0,
        radius: h2 = 0
      } = n2;
      return new this(s(s({}, i(n2, Hn)), {}, {
        radius: h2,
        left: o2 - h2,
        top: a2 - h2
      }));
    });
  }
  static fromObject(t2) {
    return super._fromObject(t2);
  }
};
t(Nn, "type", "Circle"), t(Nn, "cacheProperties", [...ps, ...Gn]), t(Nn, "ownDefaults", {
  radius: 0,
  startAngle: 0,
  endAngle: 360,
  counterClockwise: false
}), t(Nn, "ATTRIBUTE_NAMES", ["cx", "cy", "r", ...Fi]), tt.setClass(Nn), tt.setSVGClass(Nn);
var Un = class extends Xn {
  constructor(e3) {
    super(e3), t(this, "width", 10), this.points = [];
  }
  drawDot(t2) {
    const e3 = this.addPoint(t2), s2 = this.canvas.contextTop;
    this._saveAndTransform(s2), this.dot(s2, e3), s2.restore();
  }
  dot(t2, e3) {
    t2.fillStyle = e3.fill, t2.beginPath(), t2.arc(e3.x, e3.y, e3.radius, 0, 2 * Math.PI, false), t2.closePath(), t2.fill();
  }
  onMouseDown(t2) {
    this.points = [], this.canvas.clearContext(this.canvas.contextTop), this._setShadow(), this.drawDot(t2);
  }
  _render() {
    const t2 = this.canvas.contextTop, e3 = this.points;
    this._saveAndTransform(t2);
    for (let s2 = 0; s2 < e3.length; s2++) this.dot(t2, e3[s2]);
    t2.restore();
  }
  onMouseMove(t2) {
    true === this.limitedToCanvasSize && this._isOutSideCanvas(t2) || (this.needsFullRender() ? (this.canvas.clearContext(this.canvas.contextTop), this.addPoint(t2), this._render()) : this.drawDot(t2));
  }
  onMouseUp() {
    const t2 = this.canvas.renderOnAddRemove;
    this.canvas.renderOnAddRemove = false;
    const e3 = [];
    for (let t3 = 0; t3 < this.points.length; t3++) {
      const s3 = this.points[t3], i2 = new Nn({
        radius: s3.radius,
        left: s3.x,
        top: s3.y,
        originX: D,
        originY: D,
        fill: s3.fill
      });
      this.shadow && (i2.shadow = new ds(this.shadow)), e3.push(i2);
    }
    const s2 = new Mr(e3, {
      canvas: this.canvas
    });
    this.canvas.fire("before:path:created", {
      path: s2
    }), this.canvas.add(s2), this.canvas.fire("path:created", {
      path: s2
    }), this.canvas.clearContext(this.canvas.contextTop), this._resetShadow(), this.canvas.renderOnAddRemove = t2, this.canvas.requestRenderAll();
  }
  addPoint(t2) {
    let {
      x: e3,
      y: s2
    } = t2;
    const i2 = {
      x: e3,
      y: s2,
      radius: hn(Math.max(0, this.width - 20), this.width + 20) / 2,
      fill: new qt(this.color).setAlpha(hn(0, 100) / 100).toRgba()
    };
    return this.points.push(i2), i2;
  }
};
var qn = class extends Xn {
  constructor(e3) {
    super(e3), t(this, "width", 10), t(this, "density", 20), t(this, "dotWidth", 1), t(this, "dotWidthVariance", 1), t(this, "randomOpacity", false), t(this, "optimizeOverlapping", true), this.sprayChunks = [], this.sprayChunk = [];
  }
  onMouseDown(t2) {
    this.sprayChunks = [], this.canvas.clearContext(this.canvas.contextTop), this._setShadow(), this.addSprayChunk(t2), this.renderChunck(this.sprayChunk);
  }
  onMouseMove(t2) {
    true === this.limitedToCanvasSize && this._isOutSideCanvas(t2) || (this.addSprayChunk(t2), this.renderChunck(this.sprayChunk));
  }
  onMouseUp() {
    const t2 = this.canvas.renderOnAddRemove;
    this.canvas.renderOnAddRemove = false;
    const e3 = [];
    for (let t3 = 0; t3 < this.sprayChunks.length; t3++) {
      const s3 = this.sprayChunks[t3];
      for (let t4 = 0; t4 < s3.length; t4++) {
        const i2 = s3[t4], r2 = new pr({
          width: i2.width,
          height: i2.width,
          left: i2.x + 1,
          top: i2.y + 1,
          originX: D,
          originY: D,
          fill: this.color
        });
        e3.push(r2);
      }
    }
    const s2 = new Mr(this.optimizeOverlapping ? function(t3) {
      const e4 = {}, s3 = [];
      for (let i2, r2 = 0; r2 < t3.length; r2++) i2 = "".concat(t3[r2].left).concat(t3[r2].top), e4[i2] || (e4[i2] = true, s3.push(t3[r2]));
      return s3;
    }(e3) : e3, {
      objectCaching: true,
      subTargetCheck: false,
      interactive: false
    });
    this.shadow && s2.set("shadow", new ds(this.shadow)), this.canvas.fire("before:path:created", {
      path: s2
    }), this.canvas.add(s2), this.canvas.fire("path:created", {
      path: s2
    }), this.canvas.clearContext(this.canvas.contextTop), this._resetShadow(), this.canvas.renderOnAddRemove = t2, this.canvas.requestRenderAll();
  }
  renderChunck(t2) {
    const e3 = this.canvas.contextTop;
    e3.fillStyle = this.color, this._saveAndTransform(e3);
    for (let s2 = 0; s2 < t2.length; s2++) {
      const i2 = t2[s2];
      e3.globalAlpha = i2.opacity, e3.fillRect(i2.x, i2.y, i2.width, i2.width);
    }
    e3.restore();
  }
  _render() {
    const t2 = this.canvas.contextTop;
    t2.fillStyle = this.color, this._saveAndTransform(t2);
    for (let t3 = 0; t3 < this.sprayChunks.length; t3++) this.renderChunck(this.sprayChunks[t3]);
    t2.restore();
  }
  addSprayChunk(t2) {
    this.sprayChunk = [];
    const e3 = this.width / 2;
    for (let s2 = 0; s2 < this.density; s2++) this.sprayChunk.push({
      x: hn(t2.x - e3, t2.x + e3),
      y: hn(t2.y - e3, t2.y + e3),
      width: this.dotWidthVariance ? hn(Math.max(1, this.dotWidth - this.dotWidthVariance), this.dotWidth + this.dotWidthVariance) : this.dotWidth,
      opacity: this.randomOpacity ? hn(0, 100) / 100 : 1
    });
    this.sprayChunks.push(this.sprayChunk);
  }
};
var Kn = class extends zn {
  constructor(t2) {
    super(t2);
  }
  getPatternSrc() {
    const t2 = pt(), e3 = t2.getContext("2d");
    return t2.width = t2.height = 25, e3 && (e3.fillStyle = this.color, e3.beginPath(), e3.arc(10, 10, 10, 0, 2 * Math.PI, false), e3.closePath(), e3.fill()), t2;
  }
  getPattern(t2) {
    return t2.createPattern(this.source || this.getPatternSrc(), "repeat");
  }
  _setBrushStyles(t2) {
    super._setBrushStyles(t2);
    const e3 = this.getPattern(t2);
    e3 && (t2.strokeStyle = e3);
  }
  createPath(t2) {
    const e3 = super.createPath(t2), s2 = e3._getLeftTopCoords().scalarAdd(e3.strokeWidth / 2);
    return e3.stroke = new Bn({
      source: this.source || this.getPatternSrc(),
      offsetX: -s2.x,
      offsetY: -s2.y
    }), e3;
  }
};
var Jn = ["x1", "y1", "x2", "y2"];
var Qn = ["x1", "y1", "x2", "y2"];
var Zn = ["x1", "x2", "y1", "y2"];
var $n = class _$n extends _i {
  constructor() {
    let [t2, e3, s2, i2] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [0, 0, 0, 0], r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    super(), Object.assign(this, _$n.ownDefaults), this.setOptions(r2), this.x1 = t2, this.x2 = s2, this.y1 = e3, this.y2 = i2, this._setWidthHeight();
    const {
      left: n2,
      top: o2
    } = r2;
    "number" == typeof n2 && this.set(M, n2), "number" == typeof o2 && this.set(P, o2);
  }
  _setWidthHeight() {
    const {
      x1: t2,
      y1: e3,
      x2: s2,
      y2: i2
    } = this;
    this.width = Math.abs(s2 - t2), this.height = Math.abs(i2 - e3);
    const {
      left: r2,
      top: n2,
      width: o2,
      height: a2
    } = ve([{
      x: t2,
      y: e3
    }, {
      x: s2,
      y: i2
    }]), h2 = new ot(r2 + o2 / 2, n2 + a2 / 2);
    this.setPositionByOrigin(h2, D, D);
  }
  _set(t2, e3) {
    return super._set(t2, e3), Zn.includes(t2) && this._setWidthHeight(), this;
  }
  _render(t2) {
    t2.beginPath();
    const e3 = this.calcLinePoints();
    t2.moveTo(e3.x1, e3.y1), t2.lineTo(e3.x2, e3.y2), t2.lineWidth = this.strokeWidth;
    const s2 = t2.strokeStyle;
    var i2;
    te(this.stroke) ? t2.strokeStyle = this.stroke.toLive(t2) : t2.strokeStyle = null !== (i2 = this.stroke) && void 0 !== i2 ? i2 : t2.fillStyle;
    this.stroke && this._renderStroke(t2), t2.strokeStyle = s2;
  }
  _findCenterFromElement() {
    return new ot((this.x1 + this.x2) / 2, (this.y1 + this.y2) / 2);
  }
  toObject() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return s(s({}, super.toObject(t2)), this.calcLinePoints());
  }
  _getNonTransformedDimensions() {
    const t2 = super._getNonTransformedDimensions();
    return "butt" === this.strokeLineCap && (0 === this.width && (t2.y -= this.strokeWidth), 0 === this.height && (t2.x -= this.strokeWidth)), t2;
  }
  calcLinePoints() {
    const {
      x1: t2,
      x2: e3,
      y1: s2,
      y2: i2,
      width: r2,
      height: n2
    } = this, o2 = t2 <= e3 ? -1 : 1, a2 = s2 <= i2 ? -1 : 1;
    return {
      x1: o2 * r2 / 2,
      x2: o2 * -r2 / 2,
      y1: a2 * n2 / 2,
      y2: a2 * -n2 / 2
    };
  }
  _toSVG() {
    const {
      x1: t2,
      x2: e3,
      y1: s2,
      y2: i2
    } = this.calcLinePoints();
    return ["<line ", "COMMON_PARTS", 'x1="'.concat(t2, '" y1="').concat(s2, '" x2="').concat(e3, '" y2="').concat(i2, '" />\n')];
  }
  static fromElement(t2, e3, s2) {
    return __async(this, null, function* () {
      const r2 = dr(t2, this.ATTRIBUTE_NAMES, s2), {
        x1: n2 = 0,
        y1: o2 = 0,
        x2: a2 = 0,
        y2: h2 = 0
      } = r2;
      return new this([n2, o2, a2, h2], i(r2, Jn));
    });
  }
  static fromObject(t2) {
    let {
      x1: e3,
      y1: r2,
      x2: n2,
      y2: o2
    } = t2, a2 = i(t2, Qn);
    return this._fromObject(s(s({}, a2), {}, {
      points: [e3, r2, n2, o2]
    }), {
      extraParam: "points"
    });
  }
};
t($n, "type", "Line"), t($n, "cacheProperties", [...ps, ...Zn]), t($n, "ATTRIBUTE_NAMES", Fi.concat(Zn)), tt.setClass($n), tt.setSVGClass($n);
var to = class _to extends _i {
  static getDefaults() {
    return s(s({}, super.getDefaults()), _to.ownDefaults);
  }
  constructor(t2) {
    super(), Object.assign(this, _to.ownDefaults), this.setOptions(t2);
  }
  _render(t2) {
    const e3 = this.width / 2, s2 = this.height / 2;
    t2.beginPath(), t2.moveTo(-e3, s2), t2.lineTo(0, -s2), t2.lineTo(e3, s2), t2.closePath(), this._renderPaintInOrder(t2);
  }
  _toSVG() {
    const t2 = this.width / 2, e3 = this.height / 2;
    return ["<polygon ", "COMMON_PARTS", 'points="', "".concat(-t2, " ").concat(e3, ",0 ").concat(-e3, ",").concat(t2, " ").concat(e3), '" />'];
  }
};
t(to, "type", "Triangle"), t(to, "ownDefaults", {
  width: 100,
  height: 100
}), tt.setClass(to), tt.setSVGClass(to);
var eo = ["rx", "ry"];
var so = class _so extends _i {
  static getDefaults() {
    return s(s({}, super.getDefaults()), _so.ownDefaults);
  }
  constructor(t2) {
    super(), Object.assign(this, _so.ownDefaults), this.setOptions(t2);
  }
  _set(t2, e3) {
    switch (super._set(t2, e3), t2) {
      case "rx":
        this.rx = e3, this.set("width", 2 * e3);
        break;
      case "ry":
        this.ry = e3, this.set("height", 2 * e3);
    }
    return this;
  }
  getRx() {
    return this.get("rx") * this.get(G);
  }
  getRy() {
    return this.get("ry") * this.get(N);
  }
  toObject() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return super.toObject([...eo, ...t2]);
  }
  _toSVG() {
    return ["<ellipse ", "COMMON_PARTS", 'cx="0" cy="0" rx="'.concat(this.rx, '" ry="').concat(this.ry, '" />\n')];
  }
  _render(t2) {
    t2.beginPath(), t2.save(), t2.transform(1, 0, 0, this.ry / this.rx, 0, 0), t2.arc(0, 0, this.rx, 0, w, false), t2.restore(), this._renderPaintInOrder(t2);
  }
  static fromElement(t2, e3, s2) {
    return __async(this, null, function* () {
      const i2 = dr(t2, this.ATTRIBUTE_NAMES, s2);
      return i2.left = (i2.left || 0) - i2.rx, i2.top = (i2.top || 0) - i2.ry, new this(i2);
    });
  }
};
function io(t2) {
  if (!t2) return [];
  const e3 = t2.replace(/,/g, " ").trim().split(/\s+/), s2 = [];
  for (let t3 = 0; t3 < e3.length; t3 += 2) s2.push({
    x: parseFloat(e3[t3]),
    y: parseFloat(e3[t3 + 1])
  });
  return s2;
}
t(so, "type", "Ellipse"), t(so, "cacheProperties", [...ps, ...eo]), t(so, "ownDefaults", {
  rx: 0,
  ry: 0
}), t(so, "ATTRIBUTE_NAMES", [...Fi, "cx", "cy", "rx", "ry"]), tt.setClass(so), tt.setSVGClass(so);
var ro = ["left", "top"];
var no = {
  exactBoundingBox: false
};
var oo = class _oo extends _i {
  static getDefaults() {
    return s(s({}, super.getDefaults()), _oo.ownDefaults);
  }
  constructor() {
    let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], s2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    super(), t(this, "strokeDiff", void 0), Object.assign(this, _oo.ownDefaults), this.setOptions(s2), this.points = e3;
    const {
      left: i2,
      top: r2
    } = s2;
    this.initialized = true, this.setBoundingBox(true), "number" == typeof i2 && this.set(M, i2), "number" == typeof r2 && this.set(P, r2);
  }
  isOpen() {
    return true;
  }
  _projectStrokeOnPoints(t2) {
    return Ti(this.points, t2, this.isOpen());
  }
  _calcDimensions(t2) {
    t2 = s({
      scaleX: this.scaleX,
      scaleY: this.scaleY,
      skewX: this.skewX,
      skewY: this.skewY,
      strokeLineCap: this.strokeLineCap,
      strokeLineJoin: this.strokeLineJoin,
      strokeMiterLimit: this.strokeMiterLimit,
      strokeUniform: this.strokeUniform,
      strokeWidth: this.strokeWidth
    }, t2 || {});
    const e3 = this.exactBoundingBox ? this._projectStrokeOnPoints(t2).map((t3) => t3.projectedPoint) : this.points;
    if (0 === e3.length) return {
      left: 0,
      top: 0,
      width: 0,
      height: 0,
      pathOffset: new ot(),
      strokeOffset: new ot(),
      strokeDiff: new ot()
    };
    const i2 = ve(e3), r2 = Lt(s(s({}, t2), {}, {
      scaleX: 1,
      scaleY: 1
    })), n2 = ve(this.points.map((t3) => wt(t3, r2, true))), o2 = new ot(this.scaleX, this.scaleY);
    let a2 = i2.left + i2.width / 2, h2 = i2.top + i2.height / 2;
    return this.exactBoundingBox && (a2 -= h2 * Math.tan(xt(this.skewX)), h2 -= a2 * Math.tan(xt(this.skewY))), s(s({}, i2), {}, {
      pathOffset: new ot(a2, h2),
      strokeOffset: new ot(n2.left, n2.top).subtract(new ot(i2.left, i2.top)).multiply(o2),
      strokeDiff: new ot(i2.width, i2.height).subtract(new ot(n2.width, n2.height)).multiply(o2)
    });
  }
  _findCenterFromElement() {
    const t2 = ve(this.points);
    return new ot(t2.left + t2.width / 2, t2.top + t2.height / 2);
  }
  setDimensions() {
    this.setBoundingBox();
  }
  setBoundingBox(t2) {
    const {
      left: e3,
      top: s2,
      width: i2,
      height: r2,
      pathOffset: n2,
      strokeOffset: o2,
      strokeDiff: a2
    } = this._calcDimensions();
    this.set({
      width: i2,
      height: r2,
      pathOffset: n2,
      strokeOffset: o2,
      strokeDiff: a2
    }), t2 && this.setPositionByOrigin(new ot(e3 + i2 / 2, s2 + r2 / 2), D, D);
  }
  isStrokeAccountedForInDimensions() {
    return this.exactBoundingBox;
  }
  _getNonTransformedDimensions() {
    return this.exactBoundingBox ? new ot(this.width, this.height) : super._getNonTransformedDimensions();
  }
  _getTransformedDimensions() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (this.exactBoundingBox) {
      let n2;
      if (Object.keys(t2).some((t3) => this.strokeUniform || this.constructor.layoutProperties.includes(t3))) {
        var e3, s2;
        const {
          width: i3,
          height: r3
        } = this._calcDimensions(t2);
        n2 = new ot(null !== (e3 = t2.width) && void 0 !== e3 ? e3 : i3, null !== (s2 = t2.height) && void 0 !== s2 ? s2 : r3);
      } else {
        var i2, r2;
        n2 = new ot(null !== (i2 = t2.width) && void 0 !== i2 ? i2 : this.width, null !== (r2 = t2.height) && void 0 !== r2 ? r2 : this.height);
      }
      return n2.multiply(new ot(t2.scaleX || this.scaleX, t2.scaleY || this.scaleY));
    }
    return super._getTransformedDimensions(t2);
  }
  _set(t2, e3) {
    const s2 = this.initialized && this[t2] !== e3, i2 = super._set(t2, e3);
    return this.exactBoundingBox && s2 && ((t2 === G || t2 === N) && this.strokeUniform && this.constructor.layoutProperties.includes("strokeUniform") || this.constructor.layoutProperties.includes(t2)) && this.setDimensions(), i2;
  }
  toObject() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return s(s({}, super.toObject(t2)), {}, {
      points: this.points.map((t3) => {
        let {
          x: e3,
          y: s2
        } = t3;
        return {
          x: e3,
          y: s2
        };
      })
    });
  }
  _toSVG() {
    const t2 = [], e3 = this.pathOffset.x, s2 = this.pathOffset.y, i2 = o.NUM_FRACTION_DIGITS;
    for (let r2 = 0, n2 = this.points.length; r2 < n2; r2++) t2.push(Kt(this.points[r2].x - e3, i2), ",", Kt(this.points[r2].y - s2, i2), " ");
    return ["<".concat(this.constructor.type.toLowerCase(), " "), "COMMON_PARTS", 'points="'.concat(t2.join(""), '" />\n')];
  }
  _render(t2) {
    const e3 = this.points.length, s2 = this.pathOffset.x, i2 = this.pathOffset.y;
    if (e3 && !isNaN(this.points[e3 - 1].y)) {
      t2.beginPath(), t2.moveTo(this.points[0].x - s2, this.points[0].y - i2);
      for (let r2 = 0; r2 < e3; r2++) {
        const e4 = this.points[r2];
        t2.lineTo(e4.x - s2, e4.y - i2);
      }
      !this.isOpen() && t2.closePath(), this._renderPaintInOrder(t2);
    }
  }
  complexity() {
    return this.points.length;
  }
  static fromElement(t2, e3, r2) {
    return __async(this, null, function* () {
      return new this(io(t2.getAttribute("points")), s(s({}, i(dr(t2, this.ATTRIBUTE_NAMES, r2), ro)), e3));
    });
  }
  static fromObject(t2) {
    return this._fromObject(t2, {
      extraParam: "points"
    });
  }
};
t(oo, "ownDefaults", no), t(oo, "type", "Polyline"), t(oo, "layoutProperties", [U, q, "strokeLineCap", "strokeLineJoin", "strokeMiterLimit", "strokeWidth", "strokeUniform", "points"]), t(oo, "cacheProperties", [...ps, "points"]), t(oo, "ATTRIBUTE_NAMES", [...Fi]), tt.setClass(oo), tt.setSVGClass(oo);
var ao = class extends oo {
  isOpen() {
    return false;
  }
};
t(ao, "ownDefaults", no), t(ao, "type", "Polygon"), tt.setClass(ao), tt.setSVGClass(ao);
var ho = ["fontSize", "fontWeight", "fontFamily", "fontStyle"];
var co = ["underline", "overline", "linethrough"];
var lo = [...ho, "lineHeight", "text", "charSpacing", "textAlign", "styles", "path", "pathStartOffset", "pathSide", "pathAlign"];
var uo = [...lo, ...co, "textBackgroundColor", "direction"];
var go = [...ho, ...co, J, "strokeWidth", K, "deltaY", "textBackgroundColor"];
var fo = {
  _reNewline: F,
  _reSpacesAndTabs: /[ \t\r]/g,
  _reSpaceAndTab: /[ \t\r]/,
  _reWords: /\S+/g,
  fontSize: 40,
  fontWeight: "normal",
  fontFamily: "Times New Roman",
  underline: false,
  overline: false,
  linethrough: false,
  textAlign: M,
  fontStyle: "normal",
  lineHeight: 1.16,
  superscript: {
    size: 0.6,
    baseline: -0.35
  },
  subscript: {
    size: 0.6,
    baseline: 0.11
  },
  textBackgroundColor: "",
  stroke: null,
  shadow: null,
  path: void 0,
  pathStartOffset: 0,
  pathSide: M,
  pathAlign: "baseline",
  _fontSizeFraction: 0.222,
  offsets: {
    underline: 0.1,
    linethrough: -0.315,
    overline: -0.88
  },
  _fontSizeMult: 1.13,
  charSpacing: 0,
  deltaY: 0,
  direction: "ltr",
  CACHE_FONT_SIZE: 400,
  MIN_TEXT_WIDTH: 2
};
var po = "justify";
var mo = "justify-left";
var vo = "justify-right";
var yo = "justify-center";
var _o = class extends _i {
  isEmptyStyles(t2) {
    if (!this.styles) return true;
    if (void 0 !== t2 && !this.styles[t2]) return true;
    const e3 = void 0 === t2 ? this.styles : {
      line: this.styles[t2]
    };
    for (const t3 in e3) for (const s2 in e3[t3]) for (const i2 in e3[t3][s2]) return false;
    return true;
  }
  styleHas(t2, e3) {
    if (!this.styles) return false;
    if (void 0 !== e3 && !this.styles[e3]) return false;
    const s2 = void 0 === e3 ? this.styles : {
      0: this.styles[e3]
    };
    for (const e4 in s2) for (const i2 in s2[e4]) if (void 0 !== s2[e4][i2][t2]) return true;
    return false;
  }
  cleanStyle(t2) {
    if (!this.styles) return false;
    const e3 = this.styles;
    let s2, i2, r2 = 0, n2 = true, o2 = 0;
    for (const o3 in e3) {
      s2 = 0;
      for (const a2 in e3[o3]) {
        const h2 = e3[o3][a2] || {};
        r2++, void 0 !== h2[t2] ? (i2 ? h2[t2] !== i2 && (n2 = false) : i2 = h2[t2], h2[t2] === this[t2] && delete h2[t2]) : n2 = false, 0 !== Object.keys(h2).length ? s2++ : delete e3[o3][a2];
      }
      0 === s2 && delete e3[o3];
    }
    for (let t3 = 0; t3 < this._textLines.length; t3++) o2 += this._textLines[t3].length;
    n2 && r2 === o2 && (this[t2] = i2, this.removeStyle(t2));
  }
  removeStyle(t2) {
    if (!this.styles) return;
    const e3 = this.styles;
    let s2, i2, r2;
    for (i2 in e3) {
      for (r2 in s2 = e3[i2], s2) delete s2[r2][t2], 0 === Object.keys(s2[r2]).length && delete s2[r2];
      0 === Object.keys(s2).length && delete e3[i2];
    }
  }
  _extendStyles(t2, e3) {
    const {
      lineIndex: i2,
      charIndex: r2
    } = this.get2DCursorLocation(t2);
    this._getLineStyle(i2) || this._setLineStyle(i2);
    const n2 = Wt(s(s({}, this._getStyleDeclaration(i2, r2)), e3), (t3) => void 0 !== t3);
    this._setStyleDeclaration(i2, r2, n2);
  }
  getSelectionStyles(t2, e3, s2) {
    const i2 = [];
    for (let r2 = t2; r2 < (e3 || t2); r2++) i2.push(this.getStyleAtPosition(r2, s2));
    return i2;
  }
  getStyleAtPosition(t2, e3) {
    const {
      lineIndex: s2,
      charIndex: i2
    } = this.get2DCursorLocation(t2);
    return e3 ? this.getCompleteStyleDeclaration(s2, i2) : this._getStyleDeclaration(s2, i2);
  }
  setSelectionStyles(t2, e3, s2) {
    for (let i2 = e3; i2 < (s2 || e3); i2++) this._extendStyles(i2, t2);
    this._forceClearCache = true;
  }
  _getStyleDeclaration(t2, e3) {
    var s2;
    const i2 = this.styles && this.styles[t2];
    return i2 && null !== (s2 = i2[e3]) && void 0 !== s2 ? s2 : {};
  }
  getCompleteStyleDeclaration(t2, e3) {
    return s(s({}, Yt(this, this.constructor._styleProperties)), this._getStyleDeclaration(t2, e3));
  }
  _setStyleDeclaration(t2, e3, s2) {
    this.styles[t2][e3] = s2;
  }
  _deleteStyleDeclaration(t2, e3) {
    delete this.styles[t2][e3];
  }
  _getLineStyle(t2) {
    return !!this.styles[t2];
  }
  _setLineStyle(t2) {
    this.styles[t2] = {};
  }
  _deleteLineStyle(t2) {
    delete this.styles[t2];
  }
};
t(_o, "_styleProperties", go);
var xo = /  +/g;
var Co = /"/g;
function bo(t2, e3, s2, i2, r2) {
  return "		".concat(function(t3, e4) {
    let {
      left: s3,
      top: i3,
      width: r3,
      height: n2
    } = e4, a2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.NUM_FRACTION_DIGITS;
    const h2 = $t(K, t3, false), [c2, l2, u2, d2] = [s3, i3, r3, n2].map((t4) => Kt(t4, a2));
    return "<rect ".concat(h2, ' x="').concat(c2, '" y="').concat(l2, '" width="').concat(u2, '" height="').concat(d2, '"></rect>');
  }(t2, {
    left: e3,
    top: s2,
    width: i2,
    height: r2
  }), "\n");
}
var wo = ["textAnchor", "textDecoration", "dx", "dy", "top", "left", "fontSize", "strokeWidth"];
var So;
var To = class _To extends _o {
  static getDefaults() {
    return s(s({}, super.getDefaults()), _To.ownDefaults);
  }
  constructor(e3, s2) {
    super(), t(this, "__charBounds", []), Object.assign(this, _To.ownDefaults), this.setOptions(s2), this.styles || (this.styles = {}), this.text = e3, this.initialized = true, this.path && this.setPathInfo(), this.initDimensions(), this.setCoords();
  }
  setPathInfo() {
    const t2 = this.path;
    t2 && (t2.segmentsInfo = Qr(t2.path));
  }
  _splitText() {
    const t2 = this._splitTextIntoLines(this.text);
    return this.textLines = t2.lines, this._textLines = t2.graphemeLines, this._unwrappedTextLines = t2._unwrappedLines, this._text = t2.graphemeText, t2;
  }
  initDimensions() {
    this._splitText(), this._clearCache(), this.dirty = true, this.path ? (this.width = this.path.width, this.height = this.path.height) : (this.width = this.calcTextWidth() || this.cursorWidth || this.MIN_TEXT_WIDTH, this.height = this.calcTextHeight()), this.textAlign.includes(po) && this.enlargeSpaces();
  }
  enlargeSpaces() {
    let t2, e3, s2, i2, r2, n2, o2;
    for (let a2 = 0, h2 = this._textLines.length; a2 < h2; a2++) if ((this.textAlign === po || a2 !== h2 - 1 && !this.isEndOfWrapping(a2)) && (i2 = 0, r2 = this._textLines[a2], e3 = this.getLineWidth(a2), e3 < this.width && (o2 = this.textLines[a2].match(this._reSpacesAndTabs)))) {
      s2 = o2.length, t2 = (this.width - e3) / s2;
      for (let e4 = 0; e4 <= r2.length; e4++) n2 = this.__charBounds[a2][e4], this._reSpaceAndTab.test(r2[e4]) ? (n2.width += t2, n2.kernedWidth += t2, n2.left += i2, i2 += t2) : n2.left += i2;
    }
  }
  isEndOfWrapping(t2) {
    return t2 === this._textLines.length - 1;
  }
  missingNewlineOffset(t2) {
    return 1;
  }
  get2DCursorLocation(t2, e3) {
    const s2 = e3 ? this._unwrappedTextLines : this._textLines;
    let i2;
    for (i2 = 0; i2 < s2.length; i2++) {
      if (t2 <= s2[i2].length) return {
        lineIndex: i2,
        charIndex: t2
      };
      t2 -= s2[i2].length + this.missingNewlineOffset(i2, e3);
    }
    return {
      lineIndex: i2 - 1,
      charIndex: s2[i2 - 1].length < t2 ? s2[i2 - 1].length : t2
    };
  }
  toString() {
    return "#<Text (".concat(this.complexity(), '): { "text": "').concat(this.text, '", "fontFamily": "').concat(this.fontFamily, '" }>');
  }
  _getCacheCanvasDimensions() {
    const t2 = super._getCacheCanvasDimensions(), e3 = this.fontSize;
    return t2.width += e3 * t2.zoomX, t2.height += e3 * t2.zoomY, t2;
  }
  _render(t2) {
    const e3 = this.path;
    e3 && !e3.isNotVisible() && e3._render(t2), this._setTextStyles(t2), this._renderTextLinesBackground(t2), this._renderTextDecoration(t2, "underline"), this._renderText(t2), this._renderTextDecoration(t2, "overline"), this._renderTextDecoration(t2, "linethrough");
  }
  _renderText(t2) {
    this.paintFirst === J ? (this._renderTextStroke(t2), this._renderTextFill(t2)) : (this._renderTextFill(t2), this._renderTextStroke(t2));
  }
  _setTextStyles(t2, e3, s2) {
    if (t2.textBaseline = "alphabetic", this.path) switch (this.pathAlign) {
      case D:
        t2.textBaseline = "middle";
        break;
      case "ascender":
        t2.textBaseline = P;
        break;
      case "descender":
        t2.textBaseline = E;
    }
    t2.font = this._getFontDeclaration(e3, s2);
  }
  calcTextWidth() {
    let t2 = this.getLineWidth(0);
    for (let e3 = 1, s2 = this._textLines.length; e3 < s2; e3++) {
      const s3 = this.getLineWidth(e3);
      s3 > t2 && (t2 = s3);
    }
    return t2;
  }
  _renderTextLine(t2, e3, s2, i2, r2, n2) {
    this._renderChars(t2, e3, s2, i2, r2, n2);
  }
  _renderTextLinesBackground(t2) {
    if (!this.textBackgroundColor && !this.styleHas("textBackgroundColor")) return;
    const e3 = t2.fillStyle, s2 = this._getLeftOffset();
    let i2 = this._getTopOffset();
    for (let e4 = 0, r2 = this._textLines.length; e4 < r2; e4++) {
      const r3 = this.getHeightOfLine(e4);
      if (!this.textBackgroundColor && !this.styleHas("textBackgroundColor", e4)) {
        i2 += r3;
        continue;
      }
      const n2 = this._textLines[e4].length, o2 = this._getLineLeftOffset(e4);
      let a2, h2, c2 = 0, l2 = 0, u2 = this.getValueOfPropertyAt(e4, 0, "textBackgroundColor");
      for (let d2 = 0; d2 < n2; d2++) {
        const n3 = this.__charBounds[e4][d2];
        h2 = this.getValueOfPropertyAt(e4, d2, "textBackgroundColor"), this.path ? (t2.save(), t2.translate(n3.renderLeft, n3.renderTop), t2.rotate(n3.angle), t2.fillStyle = h2, h2 && t2.fillRect(-n3.width / 2, -r3 / this.lineHeight * (1 - this._fontSizeFraction), n3.width, r3 / this.lineHeight), t2.restore()) : h2 !== u2 ? (a2 = s2 + o2 + l2, "rtl" === this.direction && (a2 = this.width - a2 - c2), t2.fillStyle = u2, u2 && t2.fillRect(a2, i2, c2, r3 / this.lineHeight), l2 = n3.left, c2 = n3.width, u2 = h2) : c2 += n3.kernedWidth;
      }
      h2 && !this.path && (a2 = s2 + o2 + l2, "rtl" === this.direction && (a2 = this.width - a2 - c2), t2.fillStyle = h2, t2.fillRect(a2, i2, c2, r3 / this.lineHeight)), i2 += r3;
    }
    t2.fillStyle = e3, this._removeShadow(t2);
  }
  _measureChar(t2, e3, s2, i2) {
    const r2 = _.getFontCache(e3), n2 = this._getFontDeclaration(e3), o2 = s2 + t2, a2 = s2 && n2 === this._getFontDeclaration(i2), h2 = e3.fontSize / this.CACHE_FONT_SIZE;
    let c2, l2, u2, d2;
    if (s2 && void 0 !== r2[s2] && (u2 = r2[s2]), void 0 !== r2[t2] && (d2 = c2 = r2[t2]), a2 && void 0 !== r2[o2] && (l2 = r2[o2], d2 = l2 - u2), void 0 === c2 || void 0 === u2 || void 0 === l2) {
      const i3 = function() {
        if (!So) {
          const t3 = vt({
            width: 0,
            height: 0
          });
          So = t3.getContext("2d");
        }
        return So;
      }();
      this._setTextStyles(i3, e3, true), void 0 === c2 && (d2 = c2 = i3.measureText(t2).width, r2[t2] = c2), void 0 === u2 && a2 && s2 && (u2 = i3.measureText(s2).width, r2[s2] = u2), a2 && void 0 === l2 && (l2 = i3.measureText(o2).width, r2[o2] = l2, d2 = l2 - u2);
    }
    return {
      width: c2 * h2,
      kernedWidth: d2 * h2
    };
  }
  getHeightOfChar(t2, e3) {
    return this.getValueOfPropertyAt(t2, e3, "fontSize");
  }
  measureLine(t2) {
    const e3 = this._measureLine(t2);
    return 0 !== this.charSpacing && (e3.width -= this._getWidthOfCharSpacing()), e3.width < 0 && (e3.width = 0), e3;
  }
  _measureLine(t2) {
    let e3, s2, i2 = 0;
    const r2 = this.pathSide === A, n2 = this.path, o2 = this._textLines[t2], a2 = o2.length, h2 = new Array(a2);
    this.__charBounds[t2] = h2;
    for (let r3 = 0; r3 < a2; r3++) {
      const n3 = o2[r3];
      s2 = this._getGraphemeBox(n3, t2, r3, e3), h2[r3] = s2, i2 += s2.kernedWidth, e3 = n3;
    }
    if (h2[a2] = {
      left: s2 ? s2.left + s2.width : 0,
      width: 0,
      kernedWidth: 0,
      height: this.fontSize,
      deltaY: 0
    }, n2 && n2.segmentsInfo) {
      let t3 = 0;
      const e4 = n2.segmentsInfo[n2.segmentsInfo.length - 1].length;
      switch (this.textAlign) {
        case M:
          t3 = r2 ? e4 - i2 : 0;
          break;
        case D:
          t3 = (e4 - i2) / 2;
          break;
        case A:
          t3 = r2 ? 0 : e4 - i2;
      }
      t3 += this.pathStartOffset * (r2 ? -1 : 1);
      for (let i3 = r2 ? a2 - 1 : 0; r2 ? i3 >= 0 : i3 < a2; r2 ? i3-- : i3++) s2 = h2[i3], t3 > e4 ? t3 %= e4 : t3 < 0 && (t3 += e4), this._setGraphemeOnPath(t3, s2), t3 += s2.kernedWidth;
    }
    return {
      width: i2,
      numOfSpaces: 0
    };
  }
  _setGraphemeOnPath(t2, e3) {
    const s2 = t2 + e3.kernedWidth / 2, i2 = this.path, r2 = Zr(i2.path, s2, i2.segmentsInfo);
    e3.renderLeft = r2.x - i2.pathOffset.x, e3.renderTop = r2.y - i2.pathOffset.y, e3.angle = r2.angle + (this.pathSide === A ? Math.PI : 0);
  }
  _getGraphemeBox(t2, e3, s2, i2, r2) {
    const n2 = this.getCompleteStyleDeclaration(e3, s2), o2 = i2 ? this.getCompleteStyleDeclaration(e3, s2 - 1) : {}, a2 = this._measureChar(t2, n2, i2, o2);
    let h2, c2 = a2.kernedWidth, l2 = a2.width;
    0 !== this.charSpacing && (h2 = this._getWidthOfCharSpacing(), l2 += h2, c2 += h2);
    const u2 = {
      width: l2,
      left: 0,
      height: n2.fontSize,
      kernedWidth: c2,
      deltaY: n2.deltaY
    };
    if (s2 > 0 && !r2) {
      const t3 = this.__charBounds[e3][s2 - 1];
      u2.left = t3.left + t3.width + a2.kernedWidth - a2.width;
    }
    return u2;
  }
  getHeightOfLine(t2) {
    if (this.__lineHeights[t2]) return this.__lineHeights[t2];
    let e3 = this.getHeightOfChar(t2, 0);
    for (let s2 = 1, i2 = this._textLines[t2].length; s2 < i2; s2++) e3 = Math.max(this.getHeightOfChar(t2, s2), e3);
    return this.__lineHeights[t2] = e3 * this.lineHeight * this._fontSizeMult;
  }
  calcTextHeight() {
    let t2, e3 = 0;
    for (let s2 = 0, i2 = this._textLines.length; s2 < i2; s2++) t2 = this.getHeightOfLine(s2), e3 += s2 === i2 - 1 ? t2 / this.lineHeight : t2;
    return e3;
  }
  _getLeftOffset() {
    return "ltr" === this.direction ? -this.width / 2 : this.width / 2;
  }
  _getTopOffset() {
    return -this.height / 2;
  }
  _renderTextCommon(t2, e3) {
    t2.save();
    let s2 = 0;
    const i2 = this._getLeftOffset(), r2 = this._getTopOffset();
    for (let n2 = 0, o2 = this._textLines.length; n2 < o2; n2++) {
      const o3 = this.getHeightOfLine(n2), a2 = o3 / this.lineHeight, h2 = this._getLineLeftOffset(n2);
      this._renderTextLine(e3, t2, this._textLines[n2], i2 + h2, r2 + s2 + a2, n2), s2 += o3;
    }
    t2.restore();
  }
  _renderTextFill(t2) {
    (this.fill || this.styleHas(K)) && this._renderTextCommon(t2, "fillText");
  }
  _renderTextStroke(t2) {
    (this.stroke && 0 !== this.strokeWidth || !this.isEmptyStyles()) && (this.shadow && !this.shadow.affectStroke && this._removeShadow(t2), t2.save(), this._setLineDash(t2, this.strokeDashArray), t2.beginPath(), this._renderTextCommon(t2, "strokeText"), t2.closePath(), t2.restore());
  }
  _renderChars(t2, e3, s2, i2, r2, n2) {
    const o2 = this.getHeightOfLine(n2), a2 = this.textAlign.includes(po), h2 = this.path, c2 = !a2 && 0 === this.charSpacing && this.isEmptyStyles(n2) && !h2, l2 = "ltr" === this.direction, u2 = "ltr" === this.direction ? 1 : -1, d2 = e3.direction;
    let g2, f2, p2, m2, v2, y2 = "", _2 = 0;
    if (e3.save(), d2 !== this.direction && (e3.canvas.setAttribute("dir", l2 ? "ltr" : "rtl"), e3.direction = l2 ? "ltr" : "rtl", e3.textAlign = l2 ? M : A), r2 -= o2 * this._fontSizeFraction / this.lineHeight, c2) return this._renderChar(t2, e3, n2, 0, s2.join(""), i2, r2), void e3.restore();
    for (let o3 = 0, c3 = s2.length - 1; o3 <= c3; o3++) m2 = o3 === c3 || this.charSpacing || h2, y2 += s2[o3], p2 = this.__charBounds[n2][o3], 0 === _2 ? (i2 += u2 * (p2.kernedWidth - p2.width), _2 += p2.width) : _2 += p2.kernedWidth, a2 && !m2 && this._reSpaceAndTab.test(s2[o3]) && (m2 = true), m2 || (g2 = g2 || this.getCompleteStyleDeclaration(n2, o3), f2 = this.getCompleteStyleDeclaration(n2, o3 + 1), m2 = Ei(g2, f2, false)), m2 && (h2 ? (e3.save(), e3.translate(p2.renderLeft, p2.renderTop), e3.rotate(p2.angle), this._renderChar(t2, e3, n2, o3, y2, -_2 / 2, 0), e3.restore()) : (v2 = i2, this._renderChar(t2, e3, n2, o3, y2, v2, r2)), y2 = "", g2 = f2, i2 += u2 * _2, _2 = 0);
    e3.restore();
  }
  _applyPatternGradientTransformText(t2) {
    const e3 = this.width + this.strokeWidth, s2 = this.height + this.strokeWidth, i2 = vt({
      width: e3,
      height: s2
    }), r2 = i2.getContext("2d");
    return i2.width = e3, i2.height = s2, r2.beginPath(), r2.moveTo(0, 0), r2.lineTo(e3, 0), r2.lineTo(e3, s2), r2.lineTo(0, s2), r2.closePath(), r2.translate(e3 / 2, s2 / 2), r2.fillStyle = t2.toLive(r2), this._applyPatternGradientTransform(r2, t2), r2.fill(), r2.createPattern(i2, "no-repeat");
  }
  handleFiller(t2, e3, s2) {
    let i2, r2;
    return te(s2) ? "percentage" === s2.gradientUnits || s2.gradientTransform || s2.patternTransform ? (i2 = -this.width / 2, r2 = -this.height / 2, t2.translate(i2, r2), t2[e3] = this._applyPatternGradientTransformText(s2), {
      offsetX: i2,
      offsetY: r2
    }) : (t2[e3] = s2.toLive(t2), this._applyPatternGradientTransform(t2, s2)) : (t2[e3] = s2, {
      offsetX: 0,
      offsetY: 0
    });
  }
  _setStrokeStyles(t2, e3) {
    let {
      stroke: s2,
      strokeWidth: i2
    } = e3;
    return t2.lineWidth = i2, t2.lineCap = this.strokeLineCap, t2.lineDashOffset = this.strokeDashOffset, t2.lineJoin = this.strokeLineJoin, t2.miterLimit = this.strokeMiterLimit, this.handleFiller(t2, "strokeStyle", s2);
  }
  _setFillStyles(t2, e3) {
    let {
      fill: s2
    } = e3;
    return this.handleFiller(t2, "fillStyle", s2);
  }
  _renderChar(t2, e3, s2, i2, r2, n2, o2) {
    const a2 = this._getStyleDeclaration(s2, i2), h2 = this.getCompleteStyleDeclaration(s2, i2), c2 = "fillText" === t2 && h2.fill, l2 = "strokeText" === t2 && h2.stroke && h2.strokeWidth;
    if (l2 || c2) {
      if (e3.save(), e3.font = this._getFontDeclaration(h2), a2.textBackgroundColor && this._removeShadow(e3), a2.deltaY && (o2 += a2.deltaY), c2) {
        const t3 = this._setFillStyles(e3, h2);
        e3.fillText(r2, n2 - t3.offsetX, o2 - t3.offsetY);
      }
      if (l2) {
        const t3 = this._setStrokeStyles(e3, h2);
        e3.strokeText(r2, n2 - t3.offsetX, o2 - t3.offsetY);
      }
      e3.restore();
    }
  }
  setSuperscript(t2, e3) {
    this._setScript(t2, e3, this.superscript);
  }
  setSubscript(t2, e3) {
    this._setScript(t2, e3, this.subscript);
  }
  _setScript(t2, e3, s2) {
    const i2 = this.get2DCursorLocation(t2, true), r2 = this.getValueOfPropertyAt(i2.lineIndex, i2.charIndex, "fontSize"), n2 = this.getValueOfPropertyAt(i2.lineIndex, i2.charIndex, "deltaY"), o2 = {
      fontSize: r2 * s2.size,
      deltaY: n2 + r2 * s2.baseline
    };
    this.setSelectionStyles(o2, t2, e3);
  }
  _getLineLeftOffset(t2) {
    const e3 = this.getLineWidth(t2), s2 = this.width - e3, i2 = this.textAlign, r2 = this.direction, n2 = this.isEndOfWrapping(t2);
    let o2 = 0;
    return i2 === po || i2 === yo && !n2 || i2 === vo && !n2 || i2 === mo && !n2 ? 0 : (i2 === D && (o2 = s2 / 2), i2 === A && (o2 = s2), i2 === yo && (o2 = s2 / 2), i2 === vo && (o2 = s2), "rtl" === r2 && (i2 === A || i2 === po || i2 === vo ? o2 = 0 : i2 === M || i2 === mo ? o2 = -s2 : i2 !== D && i2 !== yo || (o2 = -s2 / 2)), o2);
  }
  _clearCache() {
    this._forceClearCache = false, this.__lineWidths = [], this.__lineHeights = [], this.__charBounds = [];
  }
  getLineWidth(t2) {
    if (void 0 !== this.__lineWidths[t2]) return this.__lineWidths[t2];
    const {
      width: e3
    } = this.measureLine(t2);
    return this.__lineWidths[t2] = e3, e3;
  }
  _getWidthOfCharSpacing() {
    return 0 !== this.charSpacing ? this.fontSize * this.charSpacing / 1e3 : 0;
  }
  getValueOfPropertyAt(t2, e3, s2) {
    var i2;
    return null !== (i2 = this._getStyleDeclaration(t2, e3)[s2]) && void 0 !== i2 ? i2 : this[s2];
  }
  _renderTextDecoration(t2, e3) {
    if (!this[e3] && !this.styleHas(e3)) return;
    let s2 = this._getTopOffset();
    const i2 = this._getLeftOffset(), r2 = this.path, n2 = this._getWidthOfCharSpacing(), o2 = this.offsets[e3];
    for (let a2 = 0, h2 = this._textLines.length; a2 < h2; a2++) {
      const h3 = this.getHeightOfLine(a2);
      if (!this[e3] && !this.styleHas(e3, a2)) {
        s2 += h3;
        continue;
      }
      const c2 = this._textLines[a2], l2 = h3 / this.lineHeight, u2 = this._getLineLeftOffset(a2);
      let d2, g2, f2 = 0, p2 = 0, m2 = this.getValueOfPropertyAt(a2, 0, e3), v2 = this.getValueOfPropertyAt(a2, 0, K);
      const y2 = s2 + l2 * (1 - this._fontSizeFraction);
      let _2 = this.getHeightOfChar(a2, 0), x2 = this.getValueOfPropertyAt(a2, 0, "deltaY");
      for (let s3 = 0, n3 = c2.length; s3 < n3; s3++) {
        const n4 = this.__charBounds[a2][s3];
        d2 = this.getValueOfPropertyAt(a2, s3, e3), g2 = this.getValueOfPropertyAt(a2, s3, K);
        const h4 = this.getHeightOfChar(a2, s3), c3 = this.getValueOfPropertyAt(a2, s3, "deltaY");
        if (r2 && d2 && g2) t2.save(), t2.fillStyle = v2, t2.translate(n4.renderLeft, n4.renderTop), t2.rotate(n4.angle), t2.fillRect(-n4.kernedWidth / 2, o2 * h4 + c3, n4.kernedWidth, this.fontSize / 15), t2.restore();
        else if ((d2 !== m2 || g2 !== v2 || h4 !== _2 || c3 !== x2) && p2 > 0) {
          let e4 = i2 + u2 + f2;
          "rtl" === this.direction && (e4 = this.width - e4 - p2), m2 && v2 && (t2.fillStyle = v2, t2.fillRect(e4, y2 + o2 * _2 + x2, p2, this.fontSize / 15)), f2 = n4.left, p2 = n4.width, m2 = d2, v2 = g2, _2 = h4, x2 = c3;
        } else p2 += n4.kernedWidth;
      }
      let C2 = i2 + u2 + f2;
      "rtl" === this.direction && (C2 = this.width - C2 - p2), t2.fillStyle = g2, d2 && g2 && t2.fillRect(C2, y2 + o2 * _2 + x2, p2 - n2, this.fontSize / 15), s2 += h3;
    }
    this._removeShadow(t2);
  }
  _getFontDeclaration() {
    let {
      fontFamily: t2 = this.fontFamily,
      fontStyle: e3 = this.fontStyle,
      fontWeight: s2 = this.fontWeight,
      fontSize: i2 = this.fontSize
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r2 = arguments.length > 1 ? arguments[1] : void 0;
    const n2 = t2.includes("'") || t2.includes('"') || t2.includes(",") || _To.genericFonts.includes(t2.toLowerCase()) ? t2 : '"'.concat(t2, '"');
    return [e3, s2, "".concat(r2 ? this.CACHE_FONT_SIZE : i2, "px"), n2].join(" ");
  }
  render(t2) {
    this.visible && (this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (this._forceClearCache && this.initDimensions(), super.render(t2)));
  }
  graphemeSplit(t2) {
    return Di(t2);
  }
  _splitTextIntoLines(t2) {
    const e3 = t2.split(this._reNewline), s2 = new Array(e3.length), i2 = ["\n"];
    let r2 = [];
    for (let t3 = 0; t3 < e3.length; t3++) s2[t3] = this.graphemeSplit(e3[t3]), r2 = r2.concat(s2[t3], i2);
    return r2.pop(), {
      _unwrappedLines: s2,
      lines: e3,
      graphemeText: r2,
      graphemeLines: s2
    };
  }
  toObject() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return s(s({}, super.toObject([...uo, ...t2])), {}, {
      styles: Ai(this.styles, this.text)
    }, this.path ? {
      path: this.path.toObject()
    } : {});
  }
  set(t2, e3) {
    const {
      textLayoutProperties: s2
    } = this.constructor;
    super.set(t2, e3);
    let i2 = false, r2 = false;
    if ("object" == typeof t2) for (const e4 in t2) "path" === e4 && this.setPathInfo(), i2 = i2 || s2.includes(e4), r2 = r2 || "path" === e4;
    else i2 = s2.includes(t2), r2 = "path" === t2;
    return r2 && this.setPathInfo(), i2 && this.initialized && (this.initDimensions(), this.setCoords()), this;
  }
  complexity() {
    return 1;
  }
  static fromElement(t2, e3, r2) {
    return __async(this, null, function* () {
      const n2 = dr(t2, _To.ATTRIBUTE_NAMES, r2), o2 = s(s({}, e3), n2), {
        textAnchor: a2 = M,
        textDecoration: h2 = "",
        dx: c2 = 0,
        dy: l2 = 0,
        top: u2 = 0,
        left: d2 = 0,
        fontSize: g2 = O,
        strokeWidth: f2 = 1
      } = o2, p2 = i(o2, wo), m2 = new this((t2.textContent || "").replace(/^\s+|\s+$|\n+/g, "").replace(/\s+/g, " "), s({
        left: d2 + c2,
        top: u2 + l2,
        underline: h2.includes("underline"),
        overline: h2.includes("overline"),
        linethrough: h2.includes("line-through"),
        strokeWidth: 0,
        fontSize: g2
      }, p2)), v2 = m2.getScaledHeight() / m2.height, y2 = ((m2.height + m2.strokeWidth) * m2.lineHeight - m2.height) * v2, _2 = m2.getScaledHeight() + y2;
      let x2 = 0;
      return a2 === D && (x2 = m2.getScaledWidth() / 2), a2 === A && (x2 = m2.getScaledWidth()), m2.set({
        left: m2.left - x2,
        top: m2.top - (_2 - m2.fontSize * (0.07 + m2._fontSizeFraction)) / m2.lineHeight,
        strokeWidth: f2
      }), m2;
    });
  }
  static fromObject(t2) {
    return this._fromObject(s(s({}, t2), {}, {
      styles: ji(t2.styles || {}, t2.text)
    }), {
      extraParam: "text"
    });
  }
};
t(To, "textLayoutProperties", lo), t(To, "cacheProperties", [...ps, ...uo]), t(To, "ownDefaults", fo), t(To, "type", "Text"), t(To, "genericFonts", ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui", "ui-serif", "ui-sans-serif", "ui-monospace", "ui-rounded", "math", "emoji", "fangsong"]), t(To, "ATTRIBUTE_NAMES", Fi.concat("x", "y", "dx", "dy", "font-family", "font-style", "font-weight", "font-size", "letter-spacing", "text-decoration", "text-anchor")), yi(To, [class extends Xe {
  _toSVG() {
    const t2 = this._getSVGLeftTopOffsets(), e3 = this._getSVGTextAndBg(t2.textTop, t2.textLeft);
    return this._wrapSVGTextAndBg(e3);
  }
  toSVG(t2) {
    return this._createBaseSVGMarkup(this._toSVG(), {
      reviver: t2,
      noStyle: true,
      withShadow: true
    });
  }
  _getSVGLeftTopOffsets() {
    return {
      textLeft: -this.width / 2,
      textTop: -this.height / 2,
      lineTop: this.getHeightOfLine(0)
    };
  }
  _wrapSVGTextAndBg(t2) {
    let {
      textBgRects: e3,
      textSpans: s2
    } = t2;
    const i2 = this.getSvgTextDecoration(this);
    return [e3.join(""), '		<text xml:space="preserve" ', this.fontFamily ? 'font-family="'.concat(this.fontFamily.replace(Co, "'"), '" ') : "", this.fontSize ? 'font-size="'.concat(this.fontSize, '" ') : "", this.fontStyle ? 'font-style="'.concat(this.fontStyle, '" ') : "", this.fontWeight ? 'font-weight="'.concat(this.fontWeight, '" ') : "", i2 ? 'text-decoration="'.concat(i2, '" ') : "", "rtl" === this.direction ? 'direction="'.concat(this.direction, '" ') : "", 'style="', this.getSvgStyles(true), '"', this.addPaintOrder(), " >", s2.join(""), "</text>\n"];
  }
  _getSVGTextAndBg(t2, e3) {
    const s2 = [], i2 = [];
    let r2, n2 = t2;
    this.backgroundColor && i2.push(...bo(this.backgroundColor, -this.width / 2, -this.height / 2, this.width, this.height));
    for (let t3 = 0, o2 = this._textLines.length; t3 < o2; t3++) r2 = this._getLineLeftOffset(t3), "rtl" === this.direction && (r2 += this.width), (this.textBackgroundColor || this.styleHas("textBackgroundColor", t3)) && this._setSVGTextLineBg(i2, t3, e3 + r2, n2), this._setSVGTextLineText(s2, t3, e3 + r2, n2), n2 += this.getHeightOfLine(t3);
    return {
      textSpans: s2,
      textBgRects: i2
    };
  }
  _createTextCharSpan(t2, e3, s2, i2) {
    const r2 = this.getSvgSpanStyles(e3, t2 !== t2.trim() || !!t2.match(xo)), n2 = r2 ? 'style="'.concat(r2, '"') : "", a2 = e3.deltaY, h2 = a2 ? ' dy="'.concat(Kt(a2, o.NUM_FRACTION_DIGITS), '" ') : "";
    return '<tspan x="'.concat(Kt(s2, o.NUM_FRACTION_DIGITS), '" y="').concat(Kt(i2, o.NUM_FRACTION_DIGITS), '" ').concat(h2).concat(n2, ">").concat(ki(t2), "</tspan>");
  }
  _setSVGTextLineText(t2, e3, s2, i2) {
    const r2 = this.getHeightOfLine(e3), n2 = this.textAlign.includes(po), o2 = this._textLines[e3];
    let a2, h2, c2, l2, u2, d2 = "", g2 = 0;
    i2 += r2 * (1 - this._fontSizeFraction) / this.lineHeight;
    for (let r3 = 0, f2 = o2.length - 1; r3 <= f2; r3++) u2 = r3 === f2 || this.charSpacing, d2 += o2[r3], c2 = this.__charBounds[e3][r3], 0 === g2 ? (s2 += c2.kernedWidth - c2.width, g2 += c2.width) : g2 += c2.kernedWidth, n2 && !u2 && this._reSpaceAndTab.test(o2[r3]) && (u2 = true), u2 || (a2 = a2 || this.getCompleteStyleDeclaration(e3, r3), h2 = this.getCompleteStyleDeclaration(e3, r3 + 1), u2 = Ei(a2, h2, true)), u2 && (l2 = this._getStyleDeclaration(e3, r3), t2.push(this._createTextCharSpan(d2, l2, s2, i2)), d2 = "", a2 = h2, "rtl" === this.direction ? s2 -= g2 : s2 += g2, g2 = 0);
  }
  _setSVGTextLineBg(t2, e3, s2, i2) {
    const r2 = this._textLines[e3], n2 = this.getHeightOfLine(e3) / this.lineHeight;
    let o2, a2 = 0, h2 = 0, c2 = this.getValueOfPropertyAt(e3, 0, "textBackgroundColor");
    for (let l2 = 0; l2 < r2.length; l2++) {
      const {
        left: r3,
        width: u2,
        kernedWidth: d2
      } = this.__charBounds[e3][l2];
      o2 = this.getValueOfPropertyAt(e3, l2, "textBackgroundColor"), o2 !== c2 ? (c2 && t2.push(...bo(c2, s2 + h2, i2, a2, n2)), h2 = r3, a2 = u2, c2 = o2) : a2 += d2;
    }
    o2 && t2.push(...bo(c2, s2 + h2, i2, a2, n2));
  }
  _getSVGLineTopOffset(t2) {
    let e3, s2 = 0;
    for (e3 = 0; e3 < t2; e3++) s2 += this.getHeightOfLine(e3);
    const i2 = this.getHeightOfLine(e3);
    return {
      lineTop: s2,
      offset: (this._fontSizeMult - this._fontSizeFraction) * i2 / (this.lineHeight * this._fontSizeMult)
    };
  }
  getSvgStyles(t2) {
    return "".concat(super.getSvgStyles(t2), " white-space: pre;");
  }
  getSvgSpanStyles(t2, e3) {
    const {
      fontFamily: s2,
      strokeWidth: i2,
      stroke: r2,
      fill: n2,
      fontSize: o2,
      fontStyle: a2,
      fontWeight: h2,
      deltaY: c2
    } = t2, l2 = this.getSvgTextDecoration(t2);
    return [r2 ? $t(J, r2) : "", i2 ? "stroke-width: ".concat(i2, "; ") : "", s2 ? "font-family: ".concat(s2.includes("'") || s2.includes('"') ? s2 : "'".concat(s2, "'"), "; ") : "", o2 ? "font-size: ".concat(o2, "px; ") : "", a2 ? "font-style: ".concat(a2, "; ") : "", h2 ? "font-weight: ".concat(h2, "; ") : "", l2 ? "text-decoration: ".concat(l2, "; ") : l2, n2 ? $t(K, n2) : "", c2 ? "baseline-shift: ".concat(-c2, "; ") : "", e3 ? "white-space: pre; " : ""].join("");
  }
  getSvgTextDecoration(t2) {
    return ["overline", "underline", "line-through"].filter((e3) => t2[e3.replace("-", "")]).join(" ");
  }
}]), tt.setClass(To), tt.setSVGClass(To);
var Oo = class {
  constructor(e3) {
    t(this, "target", void 0), t(this, "__mouseDownInPlace", false), t(this, "__dragStartFired", false), t(this, "__isDraggingOver", false), t(this, "__dragStartSelection", void 0), t(this, "__dragImageDisposer", void 0), t(this, "_dispose", void 0), this.target = e3;
    const s2 = [this.target.on("dragenter", this.dragEnterHandler.bind(this)), this.target.on("dragover", this.dragOverHandler.bind(this)), this.target.on("dragleave", this.dragLeaveHandler.bind(this)), this.target.on("dragend", this.dragEndHandler.bind(this)), this.target.on("drop", this.dropHandler.bind(this))];
    this._dispose = () => {
      s2.forEach((t2) => t2()), this._dispose = void 0;
    };
  }
  isPointerOverSelection(t2) {
    const e3 = this.target, s2 = e3.getSelectionStartFromPointer(t2);
    return e3.isEditing && s2 >= e3.selectionStart && s2 <= e3.selectionEnd && e3.selectionStart < e3.selectionEnd;
  }
  start(t2) {
    return this.__mouseDownInPlace = this.isPointerOverSelection(t2);
  }
  isActive() {
    return this.__mouseDownInPlace;
  }
  end(t2) {
    const e3 = this.isActive();
    return e3 && !this.__dragStartFired && (this.target.setCursorByClick(t2), this.target.initDelayedCursor(true)), this.__mouseDownInPlace = false, this.__dragStartFired = false, this.__isDraggingOver = false, e3;
  }
  getDragStartSelection() {
    return this.__dragStartSelection;
  }
  setDragImage(t2, e3) {
    var s2;
    let {
      selectionStart: i2,
      selectionEnd: r2
    } = e3;
    const n2 = this.target, o2 = n2.canvas, a2 = new ot(n2.flipX ? -1 : 1, n2.flipY ? -1 : 1), h2 = n2._getCursorBoundaries(i2), c2 = new ot(h2.left + h2.leftOffset, h2.top + h2.topOffset).multiply(a2).transform(n2.calcTransformMatrix()), l2 = o2.getScenePoint(t2).subtract(c2), u2 = n2.getCanvasRetinaScaling(), d2 = n2.getBoundingRect(), g2 = c2.subtract(new ot(d2.left, d2.top)), f2 = o2.viewportTransform, p2 = g2.add(l2).transform(f2, true), m2 = n2.backgroundColor, v2 = Oi(n2.styles);
    n2.backgroundColor = "";
    const y2 = {
      stroke: "transparent",
      fill: "transparent",
      textBackgroundColor: "transparent"
    };
    n2.setSelectionStyles(y2, 0, i2), n2.setSelectionStyles(y2, r2, n2.text.length), n2.dirty = true;
    const _2 = n2.toCanvasElement({
      enableRetinaScaling: o2.enableRetinaScaling,
      viewportTransform: true
    });
    n2.backgroundColor = m2, n2.styles = v2, n2.dirty = true, an(_2, {
      position: "fixed",
      left: "".concat(-_2.width, "px"),
      border: j,
      width: "".concat(_2.width / u2, "px"),
      height: "".concat(_2.height / u2, "px")
    }), this.__dragImageDisposer && this.__dragImageDisposer(), this.__dragImageDisposer = () => {
      _2.remove();
    }, ne(t2.target || this.target.hiddenTextarea).body.appendChild(_2), null === (s2 = t2.dataTransfer) || void 0 === s2 || s2.setDragImage(_2, p2.x, p2.y);
  }
  onDragStart(t2) {
    this.__dragStartFired = true;
    const e3 = this.target, i2 = this.isActive();
    if (i2 && t2.dataTransfer) {
      const i3 = this.__dragStartSelection = {
        selectionStart: e3.selectionStart,
        selectionEnd: e3.selectionEnd
      }, r2 = e3._text.slice(i3.selectionStart, i3.selectionEnd).join(""), n2 = s({
        text: e3.text,
        value: r2
      }, i3);
      t2.dataTransfer.setData("text/plain", r2), t2.dataTransfer.setData("application/fabric", JSON.stringify({
        value: r2,
        styles: e3.getSelectionStyles(i3.selectionStart, i3.selectionEnd, true)
      })), t2.dataTransfer.effectAllowed = "copyMove", this.setDragImage(t2, n2);
    }
    return e3.abortCursorAnimation(), i2;
  }
  canDrop(t2) {
    if (this.target.editable && !this.target.getActiveControl() && !t2.defaultPrevented) {
      if (this.isActive() && this.__dragStartSelection) {
        const e3 = this.target.getSelectionStartFromPointer(t2), s2 = this.__dragStartSelection;
        return e3 < s2.selectionStart || e3 > s2.selectionEnd;
      }
      return true;
    }
    return false;
  }
  targetCanDrop(t2) {
    return this.target.canDrop(t2);
  }
  dragEnterHandler(t2) {
    let {
      e: e3
    } = t2;
    const s2 = this.targetCanDrop(e3);
    !this.__isDraggingOver && s2 && (this.__isDraggingOver = true);
  }
  dragOverHandler(t2) {
    const {
      e: e3
    } = t2, s2 = this.targetCanDrop(e3);
    !this.__isDraggingOver && s2 ? this.__isDraggingOver = true : this.__isDraggingOver && !s2 && (this.__isDraggingOver = false), this.__isDraggingOver && (e3.preventDefault(), t2.canDrop = true, t2.dropTarget = this.target);
  }
  dragLeaveHandler() {
    (this.__isDraggingOver || this.isActive()) && (this.__isDraggingOver = false);
  }
  dropHandler(t2) {
    var e3;
    const {
      e: s2
    } = t2, i2 = s2.defaultPrevented;
    this.__isDraggingOver = false, s2.preventDefault();
    let r2 = null === (e3 = s2.dataTransfer) || void 0 === e3 ? void 0 : e3.getData("text/plain");
    if (r2 && !i2) {
      const e4 = this.target, i3 = e4.canvas;
      let n2 = e4.getSelectionStartFromPointer(s2);
      const {
        styles: o2
      } = s2.dataTransfer.types.includes("application/fabric") ? JSON.parse(s2.dataTransfer.getData("application/fabric")) : {}, a2 = r2[Math.max(0, r2.length - 1)], h2 = 0;
      if (this.__dragStartSelection) {
        const t3 = this.__dragStartSelection.selectionStart, s3 = this.__dragStartSelection.selectionEnd;
        n2 > t3 && n2 <= s3 ? n2 = t3 : n2 > s3 && (n2 -= s3 - t3), e4.removeChars(t3, s3), delete this.__dragStartSelection;
      }
      e4._reNewline.test(a2) && (e4._reNewline.test(e4._text[n2]) || n2 === e4._text.length) && (r2 = r2.trimEnd()), t2.didDrop = true, t2.dropTarget = e4, e4.insertChars(r2, o2, n2), i3.setActiveObject(e4), e4.enterEditing(s2), e4.selectionStart = Math.min(n2 + h2, e4._text.length), e4.selectionEnd = Math.min(e4.selectionStart + r2.length, e4._text.length), e4.hiddenTextarea.value = e4.text, e4._updateTextarea(), e4.hiddenTextarea.focus(), e4.fire(z, {
        index: n2 + h2,
        action: "drop"
      }), i3.fire("text:changed", {
        target: e4
      }), i3.contextTopDirty = true, i3.requestRenderAll();
    }
  }
  dragEndHandler(t2) {
    let {
      e: e3
    } = t2;
    if (this.isActive() && this.__dragStartFired && this.__dragStartSelection) {
      var s2;
      const t3 = this.target, i2 = this.target.canvas, {
        selectionStart: r2,
        selectionEnd: n2
      } = this.__dragStartSelection, o2 = (null === (s2 = e3.dataTransfer) || void 0 === s2 ? void 0 : s2.dropEffect) || j;
      o2 === j ? (t3.selectionStart = r2, t3.selectionEnd = n2, t3._updateTextarea(), t3.hiddenTextarea.focus()) : (t3.clearContextTop(), "move" === o2 && (t3.removeChars(r2, n2), t3.selectionStart = t3.selectionEnd = r2, t3.hiddenTextarea && (t3.hiddenTextarea.value = t3.text), t3._updateTextarea(), t3.fire(z, {
        index: r2,
        action: "dragend"
      }), i2.fire("text:changed", {
        target: t3
      }), i2.requestRenderAll()), t3.exitEditing());
    }
    this.__dragImageDisposer && this.__dragImageDisposer(), delete this.__dragImageDisposer, delete this.__dragStartSelection, this.__isDraggingOver = false;
  }
  dispose() {
    this._dispose && this._dispose();
  }
};
var ko = /[ \n\.,;!\?\-]/;
var Do = class extends To {
  constructor() {
    super(...arguments), t(this, "_currentCursorOpacity", 1);
  }
  initBehavior() {
    this._tick = this._tick.bind(this), this._onTickComplete = this._onTickComplete.bind(this), this.updateSelectionOnMouseMove = this.updateSelectionOnMouseMove.bind(this);
  }
  onDeselect(t2) {
    return this.isEditing && this.exitEditing(), this.selected = false, super.onDeselect(t2);
  }
  _animateCursor(t2) {
    let {
      toValue: e3,
      duration: s2,
      delay: i2,
      onComplete: r2
    } = t2;
    return js({
      startValue: this._currentCursorOpacity,
      endValue: e3,
      duration: s2,
      delay: i2,
      onComplete: r2,
      abort: () => !this.canvas || this.selectionStart !== this.selectionEnd,
      onChange: (t3) => {
        this._currentCursorOpacity = t3, this.renderCursorOrSelection();
      }
    });
  }
  _tick(t2) {
    this._currentTickState = this._animateCursor({
      toValue: 0,
      duration: this.cursorDuration / 2,
      delay: Math.max(t2 || 0, 100),
      onComplete: this._onTickComplete
    });
  }
  _onTickComplete() {
    var t2;
    null === (t2 = this._currentTickCompleteState) || void 0 === t2 || t2.abort(), this._currentTickCompleteState = this._animateCursor({
      toValue: 1,
      duration: this.cursorDuration,
      onComplete: this._tick
    });
  }
  initDelayedCursor(t2) {
    this.abortCursorAnimation(), this._tick(t2 ? 0 : this.cursorDelay);
  }
  abortCursorAnimation() {
    let t2 = false;
    [this._currentTickState, this._currentTickCompleteState].forEach((e3) => {
      e3 && !e3.isDone() && (t2 = true, e3.abort());
    }), this._currentCursorOpacity = 1, t2 && this.clearContextTop();
  }
  restartCursorIfNeeded() {
    [this._currentTickState, this._currentTickCompleteState].some((t2) => !t2 || t2.isDone()) && this.initDelayedCursor();
  }
  selectAll() {
    return this.selectionStart = 0, this.selectionEnd = this._text.length, this._fireSelectionChanged(), this._updateTextarea(), this;
  }
  getSelectedText() {
    return this._text.slice(this.selectionStart, this.selectionEnd).join("");
  }
  findWordBoundaryLeft(t2) {
    let e3 = 0, s2 = t2 - 1;
    if (this._reSpace.test(this._text[s2])) for (; this._reSpace.test(this._text[s2]); ) e3++, s2--;
    for (; /\S/.test(this._text[s2]) && s2 > -1; ) e3++, s2--;
    return t2 - e3;
  }
  findWordBoundaryRight(t2) {
    let e3 = 0, s2 = t2;
    if (this._reSpace.test(this._text[s2])) for (; this._reSpace.test(this._text[s2]); ) e3++, s2++;
    for (; /\S/.test(this._text[s2]) && s2 < this._text.length; ) e3++, s2++;
    return t2 + e3;
  }
  findLineBoundaryLeft(t2) {
    let e3 = 0, s2 = t2 - 1;
    for (; !/\n/.test(this._text[s2]) && s2 > -1; ) e3++, s2--;
    return t2 - e3;
  }
  findLineBoundaryRight(t2) {
    let e3 = 0, s2 = t2;
    for (; !/\n/.test(this._text[s2]) && s2 < this._text.length; ) e3++, s2++;
    return t2 + e3;
  }
  searchWordBoundary(t2, e3) {
    const s2 = this._text;
    let i2 = t2 > 0 && this._reSpace.test(s2[t2]) && (-1 === e3 || !F.test(s2[t2 - 1])) ? t2 - 1 : t2, r2 = s2[i2];
    for (; i2 > 0 && i2 < s2.length && !ko.test(r2); ) i2 += e3, r2 = s2[i2];
    return -1 === e3 && ko.test(r2) && i2++, i2;
  }
  selectWord(t2) {
    t2 = t2 || this.selectionStart;
    const e3 = this.searchWordBoundary(t2, -1), s2 = Math.max(e3, this.searchWordBoundary(t2, 1));
    this.selectionStart = e3, this.selectionEnd = s2, this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection();
  }
  selectLine(t2) {
    t2 = t2 || this.selectionStart;
    const e3 = this.findLineBoundaryLeft(t2), s2 = this.findLineBoundaryRight(t2);
    return this.selectionStart = e3, this.selectionEnd = s2, this._fireSelectionChanged(), this._updateTextarea(), this;
  }
  enterEditing(t2) {
    !this.isEditing && this.editable && (this.enterEditingImpl(), this.fire("editing:entered", t2 ? {
      e: t2
    } : void 0), this._fireSelectionChanged(), this.canvas && (this.canvas.fire("text:editing:entered", {
      target: this,
      e: t2
    }), this.canvas.requestRenderAll()));
  }
  enterEditingImpl() {
    this.canvas && (this.canvas.calcOffset(), this.canvas.textEditingManager.exitTextEditing()), this.isEditing = true, this.initHiddenTextarea(), this.hiddenTextarea.focus(), this.hiddenTextarea.value = this.text, this._updateTextarea(), this._saveEditingProps(), this._setEditingProps(), this._textBeforeEdit = this.text, this._tick();
  }
  updateSelectionOnMouseMove(t2) {
    if (this.getActiveControl()) return;
    const e3 = this.hiddenTextarea;
    ne(e3).activeElement !== e3 && e3.focus();
    const s2 = this.getSelectionStartFromPointer(t2), i2 = this.selectionStart, r2 = this.selectionEnd;
    (s2 === this.__selectionStartOnMouseDown && i2 !== r2 || i2 !== s2 && r2 !== s2) && (s2 > this.__selectionStartOnMouseDown ? (this.selectionStart = this.__selectionStartOnMouseDown, this.selectionEnd = s2) : (this.selectionStart = s2, this.selectionEnd = this.__selectionStartOnMouseDown), this.selectionStart === i2 && this.selectionEnd === r2 || (this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection()));
  }
  _setEditingProps() {
    this.hoverCursor = "text", this.canvas && (this.canvas.defaultCursor = this.canvas.moveCursor = "text"), this.borderColor = this.editingBorderColor, this.hasControls = this.selectable = false, this.lockMovementX = this.lockMovementY = true;
  }
  fromStringToGraphemeSelection(t2, e3, s2) {
    const i2 = s2.slice(0, t2), r2 = this.graphemeSplit(i2).length;
    if (t2 === e3) return {
      selectionStart: r2,
      selectionEnd: r2
    };
    const n2 = s2.slice(t2, e3);
    return {
      selectionStart: r2,
      selectionEnd: r2 + this.graphemeSplit(n2).length
    };
  }
  fromGraphemeToStringSelection(t2, e3, s2) {
    const i2 = s2.slice(0, t2).join("").length;
    if (t2 === e3) return {
      selectionStart: i2,
      selectionEnd: i2
    };
    return {
      selectionStart: i2,
      selectionEnd: i2 + s2.slice(t2, e3).join("").length
    };
  }
  _updateTextarea() {
    if (this.cursorOffsetCache = {}, this.hiddenTextarea) {
      if (!this.inCompositionMode) {
        const t2 = this.fromGraphemeToStringSelection(this.selectionStart, this.selectionEnd, this._text);
        this.hiddenTextarea.selectionStart = t2.selectionStart, this.hiddenTextarea.selectionEnd = t2.selectionEnd;
      }
      this.updateTextareaPosition();
    }
  }
  updateFromTextArea() {
    if (!this.hiddenTextarea) return;
    this.cursorOffsetCache = {};
    const t2 = this.hiddenTextarea;
    this.text = t2.value, this.set("dirty", true), this.initDimensions(), this.setCoords();
    const e3 = this.fromStringToGraphemeSelection(t2.selectionStart, t2.selectionEnd, t2.value);
    this.selectionEnd = this.selectionStart = e3.selectionEnd, this.inCompositionMode || (this.selectionStart = e3.selectionStart), this.updateTextareaPosition();
  }
  updateTextareaPosition() {
    if (this.selectionStart === this.selectionEnd) {
      const t2 = this._calcTextareaPosition();
      this.hiddenTextarea.style.left = t2.left, this.hiddenTextarea.style.top = t2.top;
    }
  }
  _calcTextareaPosition() {
    if (!this.canvas) return {
      left: "1px",
      top: "1px"
    };
    const t2 = this.inCompositionMode ? this.compositionStart : this.selectionStart, e3 = this._getCursorBoundaries(t2), s2 = this.get2DCursorLocation(t2), i2 = s2.lineIndex, r2 = s2.charIndex, n2 = this.getValueOfPropertyAt(i2, r2, "fontSize") * this.lineHeight, o2 = e3.leftOffset, a2 = this.getCanvasRetinaScaling(), h2 = this.canvas.upperCanvasEl, c2 = h2.width / a2, l2 = h2.height / a2, u2 = c2 - n2, d2 = l2 - n2, g2 = new ot(e3.left + o2, e3.top + e3.topOffset + n2).transform(this.calcTransformMatrix()).transform(this.canvas.viewportTransform).multiply(new ot(h2.clientWidth / c2, h2.clientHeight / l2));
    return g2.x < 0 && (g2.x = 0), g2.x > u2 && (g2.x = u2), g2.y < 0 && (g2.y = 0), g2.y > d2 && (g2.y = d2), g2.x += this.canvas._offset.left, g2.y += this.canvas._offset.top, {
      left: "".concat(g2.x, "px"),
      top: "".concat(g2.y, "px"),
      fontSize: "".concat(n2, "px"),
      charHeight: n2
    };
  }
  _saveEditingProps() {
    this._savedProps = {
      hasControls: this.hasControls,
      borderColor: this.borderColor,
      lockMovementX: this.lockMovementX,
      lockMovementY: this.lockMovementY,
      hoverCursor: this.hoverCursor,
      selectable: this.selectable,
      defaultCursor: this.canvas && this.canvas.defaultCursor,
      moveCursor: this.canvas && this.canvas.moveCursor
    };
  }
  _restoreEditingProps() {
    this._savedProps && (this.hoverCursor = this._savedProps.hoverCursor, this.hasControls = this._savedProps.hasControls, this.borderColor = this._savedProps.borderColor, this.selectable = this._savedProps.selectable, this.lockMovementX = this._savedProps.lockMovementX, this.lockMovementY = this._savedProps.lockMovementY, this.canvas && (this.canvas.defaultCursor = this._savedProps.defaultCursor || this.canvas.defaultCursor, this.canvas.moveCursor = this._savedProps.moveCursor || this.canvas.moveCursor), delete this._savedProps);
  }
  _exitEditing() {
    const t2 = this.hiddenTextarea;
    this.selected = false, this.isEditing = false, t2 && (t2.blur && t2.blur(), t2.parentNode && t2.parentNode.removeChild(t2)), this.hiddenTextarea = null, this.abortCursorAnimation(), this.selectionStart !== this.selectionEnd && this.clearContextTop();
  }
  exitEditingImpl() {
    this._exitEditing(), this.selectionEnd = this.selectionStart, this._restoreEditingProps(), this._forceClearCache && (this.initDimensions(), this.setCoords());
  }
  exitEditing() {
    const t2 = this._textBeforeEdit !== this.text;
    return this.exitEditingImpl(), this.fire("editing:exited"), t2 && this.fire(Q), this.canvas && (this.canvas.fire("text:editing:exited", {
      target: this
    }), t2 && this.canvas.fire("object:modified", {
      target: this
    })), this;
  }
  _removeExtraneousStyles() {
    for (const t2 in this.styles) this._textLines[t2] || delete this.styles[t2];
  }
  removeStyleFromTo(t2, e3) {
    const {
      lineIndex: s2,
      charIndex: i2
    } = this.get2DCursorLocation(t2, true), {
      lineIndex: r2,
      charIndex: n2
    } = this.get2DCursorLocation(e3, true);
    if (s2 !== r2) {
      if (this.styles[s2]) for (let t3 = i2; t3 < this._unwrappedTextLines[s2].length; t3++) delete this.styles[s2][t3];
      if (this.styles[r2]) for (let t3 = n2; t3 < this._unwrappedTextLines[r2].length; t3++) {
        const e4 = this.styles[r2][t3];
        e4 && (this.styles[s2] || (this.styles[s2] = {}), this.styles[s2][i2 + t3 - n2] = e4);
      }
      for (let t3 = s2 + 1; t3 <= r2; t3++) delete this.styles[t3];
      this.shiftLineStyles(r2, s2 - r2);
    } else if (this.styles[s2]) {
      const t3 = this.styles[s2], e4 = n2 - i2;
      for (let e5 = i2; e5 < n2; e5++) delete t3[e5];
      for (const i3 in this.styles[s2]) {
        const s3 = parseInt(i3, 10);
        s3 >= n2 && (t3[s3 - e4] = t3[i3], delete t3[i3]);
      }
    }
  }
  shiftLineStyles(t2, e3) {
    const s2 = Object.assign({}, this.styles);
    for (const i2 in this.styles) {
      const r2 = parseInt(i2, 10);
      r2 > t2 && (this.styles[r2 + e3] = s2[r2], s2[r2 - e3] || delete this.styles[r2]);
    }
  }
  insertNewlineStyleObject(t2, e3, i2, r2) {
    const n2 = {}, o2 = this._unwrappedTextLines[t2].length, a2 = o2 === e3;
    let h2 = false;
    i2 || (i2 = 1), this.shiftLineStyles(t2, i2);
    const c2 = this.styles[t2] ? this.styles[t2][0 === e3 ? e3 : e3 - 1] : void 0;
    for (const s2 in this.styles[t2]) {
      const i3 = parseInt(s2, 10);
      i3 >= e3 && (h2 = true, n2[i3 - e3] = this.styles[t2][s2], a2 && 0 === e3 || delete this.styles[t2][s2]);
    }
    let l2 = false;
    for (h2 && !a2 && (this.styles[t2 + i2] = n2, l2 = true), (l2 || o2 > e3) && i2--; i2 > 0; ) r2 && r2[i2 - 1] ? this.styles[t2 + i2] = {
      0: s({}, r2[i2 - 1])
    } : c2 ? this.styles[t2 + i2] = {
      0: s({}, c2)
    } : delete this.styles[t2 + i2], i2--;
    this._forceClearCache = true;
  }
  insertCharStyleObject(t2, e3, i2, r2) {
    this.styles || (this.styles = {});
    const n2 = this.styles[t2], o2 = n2 ? s({}, n2) : {};
    i2 || (i2 = 1);
    for (const t3 in o2) {
      const s2 = parseInt(t3, 10);
      s2 >= e3 && (n2[s2 + i2] = o2[s2], o2[s2 - i2] || delete n2[s2]);
    }
    if (this._forceClearCache = true, r2) {
      for (; i2--; ) Object.keys(r2[i2]).length && (this.styles[t2] || (this.styles[t2] = {}), this.styles[t2][e3 + i2] = s({}, r2[i2]));
      return;
    }
    if (!n2) return;
    const a2 = n2[e3 ? e3 - 1 : 1];
    for (; a2 && i2--; ) this.styles[t2][e3 + i2] = s({}, a2);
  }
  insertNewStyleBlock(t2, e3, s2) {
    const i2 = this.get2DCursorLocation(e3, true), r2 = [0];
    let n2, o2 = 0;
    for (let e4 = 0; e4 < t2.length; e4++) "\n" === t2[e4] ? (o2++, r2[o2] = 0) : r2[o2]++;
    for (r2[0] > 0 && (this.insertCharStyleObject(i2.lineIndex, i2.charIndex, r2[0], s2), s2 = s2 && s2.slice(r2[0] + 1)), o2 && this.insertNewlineStyleObject(i2.lineIndex, i2.charIndex + r2[0], o2), n2 = 1; n2 < o2; n2++) r2[n2] > 0 ? this.insertCharStyleObject(i2.lineIndex + n2, 0, r2[n2], s2) : s2 && this.styles[i2.lineIndex + n2] && s2[0] && (this.styles[i2.lineIndex + n2][0] = s2[0]), s2 = s2 && s2.slice(r2[n2] + 1);
    r2[n2] > 0 && this.insertCharStyleObject(i2.lineIndex + n2, 0, r2[n2], s2);
  }
  removeChars(t2) {
    let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t2 + 1;
    this.removeStyleFromTo(t2, e3), this._text.splice(t2, e3 - t2), this.text = this._text.join(""), this.set("dirty", true), this.initDimensions(), this.setCoords(), this._removeExtraneousStyles();
  }
  insertChars(t2, e3, s2) {
    let i2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s2;
    i2 > s2 && this.removeStyleFromTo(s2, i2);
    const r2 = this.graphemeSplit(t2);
    this.insertNewStyleBlock(r2, s2, e3), this._text = [...this._text.slice(0, s2), ...r2, ...this._text.slice(i2)], this.text = this._text.join(""), this.set("dirty", true), this.initDimensions(), this.setCoords(), this._removeExtraneousStyles();
  }
  setSelectionStartEndWithShift(t2, e3, s2) {
    s2 <= t2 ? (e3 === t2 ? this._selectionDirection = M : this._selectionDirection === A && (this._selectionDirection = M, this.selectionEnd = t2), this.selectionStart = s2) : s2 > t2 && s2 < e3 ? this._selectionDirection === A ? this.selectionEnd = s2 : this.selectionStart = s2 : (e3 === t2 ? this._selectionDirection = A : this._selectionDirection === M && (this._selectionDirection = A, this.selectionStart = e3), this.selectionEnd = s2);
  }
};
var Mo = class extends Do {
  initHiddenTextarea() {
    const t2 = this.canvas && ne(this.canvas.getElement()) || m(), e3 = t2.createElement("textarea");
    Object.entries({
      autocapitalize: "off",
      autocorrect: "off",
      autocomplete: "off",
      spellcheck: "false",
      "data-fabric": "textarea",
      wrap: "off"
    }).map((t3) => {
      let [s3, i3] = t3;
      return e3.setAttribute(s3, i3);
    });
    const {
      top: s2,
      left: i2,
      fontSize: r2
    } = this._calcTextareaPosition();
    e3.style.cssText = "position: absolute; top: ".concat(s2, "; left: ").concat(i2, "; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; padding-top: ").concat(r2, ";"), (this.hiddenTextareaContainer || t2.body).appendChild(e3), Object.entries({
      blur: "blur",
      keydown: "onKeyDown",
      keyup: "onKeyUp",
      input: "onInput",
      copy: "copy",
      cut: "copy",
      paste: "paste",
      compositionstart: "onCompositionStart",
      compositionupdate: "onCompositionUpdate",
      compositionend: "onCompositionEnd"
    }).map((t3) => {
      let [s3, i3] = t3;
      return e3.addEventListener(s3, this[i3].bind(this));
    }), this.hiddenTextarea = e3;
  }
  blur() {
    this.abortCursorAnimation();
  }
  onKeyDown(t2) {
    if (!this.isEditing) return;
    const e3 = "rtl" === this.direction ? this.keysMapRtl : this.keysMap;
    if (t2.keyCode in e3) this[e3[t2.keyCode]](t2);
    else {
      if (!(t2.keyCode in this.ctrlKeysMapDown) || !t2.ctrlKey && !t2.metaKey) return;
      this[this.ctrlKeysMapDown[t2.keyCode]](t2);
    }
    t2.stopImmediatePropagation(), t2.preventDefault(), t2.keyCode >= 33 && t2.keyCode <= 40 ? (this.inCompositionMode = false, this.clearContextTop(), this.renderCursorOrSelection()) : this.canvas && this.canvas.requestRenderAll();
  }
  onKeyUp(t2) {
    !this.isEditing || this._copyDone || this.inCompositionMode ? this._copyDone = false : t2.keyCode in this.ctrlKeysMapUp && (t2.ctrlKey || t2.metaKey) && (this[this.ctrlKeysMapUp[t2.keyCode]](t2), t2.stopImmediatePropagation(), t2.preventDefault(), this.canvas && this.canvas.requestRenderAll());
  }
  onInput(t2) {
    const e3 = this.fromPaste;
    if (this.fromPaste = false, t2 && t2.stopPropagation(), !this.isEditing) return;
    const s2 = () => {
      this.updateFromTextArea(), this.fire(z), this.canvas && (this.canvas.fire("text:changed", {
        target: this
      }), this.canvas.requestRenderAll());
    };
    if ("" === this.hiddenTextarea.value) return this.styles = {}, void s2();
    const i2 = this._splitTextIntoLines(this.hiddenTextarea.value).graphemeText, r2 = this._text.length, n2 = i2.length, a2 = this.selectionStart, h2 = this.selectionEnd, c2 = a2 !== h2;
    let l2, u2, d2, g2, f2 = n2 - r2;
    const m2 = this.fromStringToGraphemeSelection(this.hiddenTextarea.selectionStart, this.hiddenTextarea.selectionEnd, this.hiddenTextarea.value), v2 = a2 > m2.selectionStart;
    c2 ? (u2 = this._text.slice(a2, h2), f2 += h2 - a2) : n2 < r2 && (u2 = v2 ? this._text.slice(h2 + f2, h2) : this._text.slice(a2, a2 - f2));
    const y2 = i2.slice(m2.selectionEnd - f2, m2.selectionEnd);
    if (u2 && u2.length && (y2.length && (l2 = this.getSelectionStyles(a2, a2 + 1, false), l2 = y2.map(() => l2[0])), c2 ? (d2 = a2, g2 = h2) : v2 ? (d2 = h2 - u2.length, g2 = h2) : (d2 = h2, g2 = h2 + u2.length), this.removeStyleFromTo(d2, g2)), y2.length) {
      const {
        copyPasteData: t3
      } = p();
      e3 && y2.join("") === t3.copiedText && !o.disableStyleCopyPaste && (l2 = t3.copiedTextStyle), this.insertNewStyleBlock(y2, a2, l2);
    }
    s2();
  }
  onCompositionStart() {
    this.inCompositionMode = true;
  }
  onCompositionEnd() {
    this.inCompositionMode = false;
  }
  onCompositionUpdate(t2) {
    let {
      target: e3
    } = t2;
    const {
      selectionStart: s2,
      selectionEnd: i2
    } = e3;
    this.compositionStart = s2, this.compositionEnd = i2, this.updateTextareaPosition();
  }
  copy() {
    if (this.selectionStart === this.selectionEnd) return;
    const {
      copyPasteData: t2
    } = p();
    t2.copiedText = this.getSelectedText(), o.disableStyleCopyPaste ? t2.copiedTextStyle = void 0 : t2.copiedTextStyle = this.getSelectionStyles(this.selectionStart, this.selectionEnd, true), this._copyDone = true;
  }
  paste() {
    this.fromPaste = true;
  }
  _getWidthBeforeCursor(t2, e3) {
    let s2, i2 = this._getLineLeftOffset(t2);
    return e3 > 0 && (s2 = this.__charBounds[t2][e3 - 1], i2 += s2.left + s2.width), i2;
  }
  getDownCursorOffset(t2, e3) {
    const s2 = this._getSelectionForOffset(t2, e3), i2 = this.get2DCursorLocation(s2), r2 = i2.lineIndex;
    if (r2 === this._textLines.length - 1 || t2.metaKey || 34 === t2.keyCode) return this._text.length - s2;
    const n2 = i2.charIndex, o2 = this._getWidthBeforeCursor(r2, n2), a2 = this._getIndexOnLine(r2 + 1, o2);
    return this._textLines[r2].slice(n2).length + a2 + 1 + this.missingNewlineOffset(r2);
  }
  _getSelectionForOffset(t2, e3) {
    return t2.shiftKey && this.selectionStart !== this.selectionEnd && e3 ? this.selectionEnd : this.selectionStart;
  }
  getUpCursorOffset(t2, e3) {
    const s2 = this._getSelectionForOffset(t2, e3), i2 = this.get2DCursorLocation(s2), r2 = i2.lineIndex;
    if (0 === r2 || t2.metaKey || 33 === t2.keyCode) return -s2;
    const n2 = i2.charIndex, o2 = this._getWidthBeforeCursor(r2, n2), a2 = this._getIndexOnLine(r2 - 1, o2), h2 = this._textLines[r2].slice(0, n2), c2 = this.missingNewlineOffset(r2 - 1);
    return -this._textLines[r2 - 1].length + a2 - h2.length + (1 - c2);
  }
  _getIndexOnLine(t2, e3) {
    const s2 = this._textLines[t2];
    let i2, r2, n2 = this._getLineLeftOffset(t2), o2 = 0;
    for (let a2 = 0, h2 = s2.length; a2 < h2; a2++) if (i2 = this.__charBounds[t2][a2].width, n2 += i2, n2 > e3) {
      r2 = true;
      const t3 = n2 - i2, s3 = n2, h3 = Math.abs(t3 - e3);
      o2 = Math.abs(s3 - e3) < h3 ? a2 : a2 - 1;
      break;
    }
    return r2 || (o2 = s2.length - 1), o2;
  }
  moveCursorDown(t2) {
    this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorUpOrDown("Down", t2);
  }
  moveCursorUp(t2) {
    0 === this.selectionStart && 0 === this.selectionEnd || this._moveCursorUpOrDown("Up", t2);
  }
  _moveCursorUpOrDown(t2, e3) {
    const s2 = this["get".concat(t2, "CursorOffset")](e3, this._selectionDirection === A);
    if (e3.shiftKey ? this.moveCursorWithShift(s2) : this.moveCursorWithoutShift(s2), 0 !== s2) {
      const t3 = this.text.length;
      this.selectionStart = gs(0, this.selectionStart, t3), this.selectionEnd = gs(0, this.selectionEnd, t3), this.abortCursorAnimation(), this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea();
    }
  }
  moveCursorWithShift(t2) {
    const e3 = this._selectionDirection === M ? this.selectionStart + t2 : this.selectionEnd + t2;
    return this.setSelectionStartEndWithShift(this.selectionStart, this.selectionEnd, e3), 0 !== t2;
  }
  moveCursorWithoutShift(t2) {
    return t2 < 0 ? (this.selectionStart += t2, this.selectionEnd = this.selectionStart) : (this.selectionEnd += t2, this.selectionStart = this.selectionEnd), 0 !== t2;
  }
  moveCursorLeft(t2) {
    0 === this.selectionStart && 0 === this.selectionEnd || this._moveCursorLeftOrRight("Left", t2);
  }
  _move(t2, e3, s2) {
    let i2;
    if (t2.altKey) i2 = this["findWordBoundary".concat(s2)](this[e3]);
    else {
      if (!t2.metaKey && 35 !== t2.keyCode && 36 !== t2.keyCode) return this[e3] += "Left" === s2 ? -1 : 1, true;
      i2 = this["findLineBoundary".concat(s2)](this[e3]);
    }
    return void 0 !== i2 && this[e3] !== i2 && (this[e3] = i2, true);
  }
  _moveLeft(t2, e3) {
    return this._move(t2, e3, "Left");
  }
  _moveRight(t2, e3) {
    return this._move(t2, e3, "Right");
  }
  moveCursorLeftWithoutShift(t2) {
    let e3 = true;
    return this._selectionDirection = M, this.selectionEnd === this.selectionStart && 0 !== this.selectionStart && (e3 = this._moveLeft(t2, "selectionStart")), this.selectionEnd = this.selectionStart, e3;
  }
  moveCursorLeftWithShift(t2) {
    return this._selectionDirection === A && this.selectionStart !== this.selectionEnd ? this._moveLeft(t2, "selectionEnd") : 0 !== this.selectionStart ? (this._selectionDirection = M, this._moveLeft(t2, "selectionStart")) : void 0;
  }
  moveCursorRight(t2) {
    this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorLeftOrRight("Right", t2);
  }
  _moveCursorLeftOrRight(t2, e3) {
    const s2 = "moveCursor".concat(t2).concat(e3.shiftKey ? "WithShift" : "WithoutShift");
    this._currentCursorOpacity = 1, this[s2](e3) && (this.abortCursorAnimation(), this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea());
  }
  moveCursorRightWithShift(t2) {
    return this._selectionDirection === M && this.selectionStart !== this.selectionEnd ? this._moveRight(t2, "selectionStart") : this.selectionEnd !== this._text.length ? (this._selectionDirection = A, this._moveRight(t2, "selectionEnd")) : void 0;
  }
  moveCursorRightWithoutShift(t2) {
    let e3 = true;
    return this._selectionDirection = A, this.selectionStart === this.selectionEnd ? (e3 = this._moveRight(t2, "selectionStart"), this.selectionEnd = this.selectionStart) : this.selectionStart = this.selectionEnd, e3;
  }
};
var Po = (t2) => !!t2.button;
var Eo = class extends Mo {
  constructor() {
    super(...arguments), t(this, "draggableTextDelegate", void 0);
  }
  initBehavior() {
    this.on("mousedown", this._mouseDownHandler), this.on("mousedown:before", this._mouseDownHandlerBefore), this.on("mouseup", this.mouseUpHandler), this.on("mousedblclick", this.doubleClickHandler), this.on("tripleclick", this.tripleClickHandler), this.__lastClickTime = +/* @__PURE__ */ new Date(), this.__lastLastClickTime = +/* @__PURE__ */ new Date(), this.__lastPointer = {}, this.on("mousedown", this.onMouseDown), this.draggableTextDelegate = new Oo(this), super.initBehavior();
  }
  shouldStartDragging() {
    return this.draggableTextDelegate.isActive();
  }
  onDragStart(t2) {
    return this.draggableTextDelegate.onDragStart(t2);
  }
  canDrop(t2) {
    return this.draggableTextDelegate.canDrop(t2);
  }
  onMouseDown(t2) {
    if (!this.canvas) return;
    this.__newClickTime = +/* @__PURE__ */ new Date();
    const e3 = t2.pointer;
    this.isTripleClick(e3) && (this.fire("tripleclick", t2), me(t2.e)), this.__lastLastClickTime = this.__lastClickTime, this.__lastClickTime = this.__newClickTime, this.__lastPointer = e3, this.__lastSelected = this.selected && !this.getActiveControl();
  }
  isTripleClick(t2) {
    return this.__newClickTime - this.__lastClickTime < 500 && this.__lastClickTime - this.__lastLastClickTime < 500 && this.__lastPointer.x === t2.x && this.__lastPointer.y === t2.y;
  }
  doubleClickHandler(t2) {
    this.isEditing && this.selectWord(this.getSelectionStartFromPointer(t2.e));
  }
  tripleClickHandler(t2) {
    this.isEditing && this.selectLine(this.getSelectionStartFromPointer(t2.e));
  }
  _mouseDownHandler(t2) {
    let {
      e: e3
    } = t2;
    this.canvas && this.editable && !Po(e3) && !this.getActiveControl() && (this.draggableTextDelegate.start(e3) || (this.canvas.textEditingManager.register(this), this.selected && (this.inCompositionMode = false, this.setCursorByClick(e3)), this.isEditing && (this.__selectionStartOnMouseDown = this.selectionStart, this.selectionStart === this.selectionEnd && this.abortCursorAnimation(), this.renderCursorOrSelection())));
  }
  _mouseDownHandlerBefore(t2) {
    let {
      e: e3
    } = t2;
    this.canvas && this.editable && !Po(e3) && (this.selected = this === this.canvas._activeObject);
  }
  mouseUpHandler(t2) {
    let {
      e: e3,
      transform: s2
    } = t2;
    const i2 = this.draggableTextDelegate.end(e3);
    if (this.canvas) {
      this.canvas.textEditingManager.unregister(this);
      const t3 = this.canvas._activeObject;
      if (t3 && t3 !== this) return;
    }
    !this.editable || this.group && !this.group.interactive || s2 && s2.actionPerformed || Po(e3) || i2 || (this.__lastSelected && !this.getActiveControl() ? (this.selected = false, this.__lastSelected = false, this.enterEditing(e3), this.selectionStart === this.selectionEnd ? this.initDelayedCursor(true) : this.renderCursorOrSelection()) : this.selected = true);
  }
  setCursorByClick(t2) {
    const e3 = this.getSelectionStartFromPointer(t2), s2 = this.selectionStart, i2 = this.selectionEnd;
    t2.shiftKey ? this.setSelectionStartEndWithShift(s2, i2, e3) : (this.selectionStart = e3, this.selectionEnd = e3), this.isEditing && (this._fireSelectionChanged(), this._updateTextarea());
  }
  getSelectionStartFromPointer(t2) {
    const e3 = this.canvas.getScenePoint(t2).transform(St(this.calcTransformMatrix())).add(new ot(-this._getLeftOffset(), -this._getTopOffset()));
    let s2 = 0, i2 = 0, r2 = 0;
    for (let t3 = 0; t3 < this._textLines.length && s2 <= e3.y; t3++) s2 += this.getHeightOfLine(t3), r2 = t3, t3 > 0 && (i2 += this._textLines[t3 - 1].length + this.missingNewlineOffset(t3 - 1));
    let n2 = Math.abs(this._getLineLeftOffset(r2));
    const o2 = this._textLines[r2].length, a2 = this.__charBounds[r2];
    for (let t3 = 0; t3 < o2; t3++) {
      const s3 = n2 + a2[t3].kernedWidth;
      if (e3.x <= s3) {
        Math.abs(e3.x - s3) <= Math.abs(e3.x - n2) && i2++;
        break;
      }
      n2 = s3, i2++;
    }
    return Math.min(this.flipX ? o2 - i2 : i2, this._text.length);
  }
};
var Ao = "moveCursorUp";
var jo = "moveCursorDown";
var Fo = "moveCursorLeft";
var Lo = "moveCursorRight";
var Ro = "exitEditing";
var Io = s({
  selectionStart: 0,
  selectionEnd: 0,
  selectionColor: "rgba(17,119,255,0.3)",
  isEditing: false,
  editable: true,
  editingBorderColor: "rgba(102,153,255,0.25)",
  cursorWidth: 2,
  cursorColor: "",
  cursorDelay: 1e3,
  cursorDuration: 600,
  caching: true,
  hiddenTextareaContainer: null,
  keysMap: {
    9: Ro,
    27: Ro,
    33: Ao,
    34: jo,
    35: Lo,
    36: Fo,
    37: Fo,
    38: Ao,
    39: Lo,
    40: jo
  },
  keysMapRtl: {
    9: Ro,
    27: Ro,
    33: Ao,
    34: jo,
    35: Fo,
    36: Lo,
    37: Lo,
    38: Ao,
    39: Fo,
    40: jo
  },
  ctrlKeysMapDown: {
    65: "selectAll"
  },
  ctrlKeysMapUp: {
    67: "copy",
    88: "cut"
  }
}, {
  _selectionDirection: null,
  _reSpace: /\s|\r?\n/,
  inCompositionMode: false
});
var Bo = class _Bo extends Eo {
  static getDefaults() {
    return s(s({}, super.getDefaults()), _Bo.ownDefaults);
  }
  get type() {
    const t2 = super.type;
    return "itext" === t2 ? "i-text" : t2;
  }
  constructor(t2, e3) {
    super(t2, s(s({}, _Bo.ownDefaults), e3)), this.initBehavior();
  }
  _set(t2, e3) {
    return this.isEditing && this._savedProps && t2 in this._savedProps ? (this._savedProps[t2] = e3, this) : ("canvas" === t2 && (this.canvas instanceof Cn && this.canvas.textEditingManager.remove(this), e3 instanceof Cn && e3.textEditingManager.add(this)), super._set(t2, e3));
  }
  setSelectionStart(t2) {
    t2 = Math.max(t2, 0), this._updateAndFire("selectionStart", t2);
  }
  setSelectionEnd(t2) {
    t2 = Math.min(t2, this.text.length), this._updateAndFire("selectionEnd", t2);
  }
  _updateAndFire(t2, e3) {
    this[t2] !== e3 && (this._fireSelectionChanged(), this[t2] = e3), this._updateTextarea();
  }
  _fireSelectionChanged() {
    this.fire("selection:changed"), this.canvas && this.canvas.fire("text:selection:changed", {
      target: this
    });
  }
  initDimensions() {
    this.isEditing && this.initDelayedCursor(), super.initDimensions();
  }
  getSelectionStyles() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.selectionStart || 0, e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.selectionEnd, s2 = arguments.length > 2 ? arguments[2] : void 0;
    return super.getSelectionStyles(t2, e3, s2);
  }
  setSelectionStyles(t2) {
    let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.selectionStart || 0, s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.selectionEnd;
    return super.setSelectionStyles(t2, e3, s2);
  }
  get2DCursorLocation() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.selectionStart, e3 = arguments.length > 1 ? arguments[1] : void 0;
    return super.get2DCursorLocation(t2, e3);
  }
  render(t2) {
    super.render(t2), this.cursorOffsetCache = {}, this.renderCursorOrSelection();
  }
  toCanvasElement(t2) {
    const e3 = this.isEditing;
    this.isEditing = false;
    const s2 = super.toCanvasElement(t2);
    return this.isEditing = e3, s2;
  }
  renderCursorOrSelection() {
    if (!this.isEditing) return;
    const t2 = this.clearContextTop(true);
    if (!t2) return;
    const e3 = this._getCursorBoundaries();
    this.selectionStart !== this.selectionEnd || this.inCompositionMode ? this.renderSelection(t2, e3) : this.renderCursor(t2, e3), this.canvas.contextTopDirty = true, t2.restore();
  }
  _getCursorBoundaries() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.selectionStart, e3 = arguments.length > 1 ? arguments[1] : void 0;
    const s2 = this._getLeftOffset(), i2 = this._getTopOffset(), r2 = this._getCursorBoundariesOffsets(t2, e3);
    return {
      left: s2,
      top: i2,
      leftOffset: r2.left,
      topOffset: r2.top
    };
  }
  _getCursorBoundariesOffsets(t2, e3) {
    return e3 ? this.__getCursorBoundariesOffsets(t2) : this.cursorOffsetCache && "top" in this.cursorOffsetCache ? this.cursorOffsetCache : this.cursorOffsetCache = this.__getCursorBoundariesOffsets(t2);
  }
  __getCursorBoundariesOffsets(t2) {
    let e3 = 0, s2 = 0;
    const {
      charIndex: i2,
      lineIndex: r2
    } = this.get2DCursorLocation(t2);
    for (let t3 = 0; t3 < r2; t3++) e3 += this.getHeightOfLine(t3);
    const n2 = this._getLineLeftOffset(r2), o2 = this.__charBounds[r2][i2];
    o2 && (s2 = o2.left), 0 !== this.charSpacing && i2 === this._textLines[r2].length && (s2 -= this._getWidthOfCharSpacing());
    const a2 = {
      top: e3,
      left: n2 + (s2 > 0 ? s2 : 0)
    };
    return "rtl" === this.direction && (this.textAlign === A || this.textAlign === po || this.textAlign === vo ? a2.left *= -1 : this.textAlign === M || this.textAlign === mo ? a2.left = n2 - (s2 > 0 ? s2 : 0) : this.textAlign !== D && this.textAlign !== yo || (a2.left = n2 - (s2 > 0 ? s2 : 0))), a2;
  }
  renderCursorAt(t2) {
    this._renderCursor(this.canvas.contextTop, this._getCursorBoundaries(t2, true), t2);
  }
  renderCursor(t2, e3) {
    this._renderCursor(t2, e3, this.selectionStart);
  }
  getCursorRenderingData() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.selectionStart, e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._getCursorBoundaries(t2);
    const s2 = this.get2DCursorLocation(t2), i2 = s2.lineIndex, r2 = s2.charIndex > 0 ? s2.charIndex - 1 : 0, n2 = this.getValueOfPropertyAt(i2, r2, "fontSize"), o2 = this.getObjectScaling().x * this.canvas.getZoom(), a2 = this.cursorWidth / o2, h2 = this.getValueOfPropertyAt(i2, r2, "deltaY"), c2 = e3.topOffset + (1 - this._fontSizeFraction) * this.getHeightOfLine(i2) / this.lineHeight - n2 * (1 - this._fontSizeFraction);
    return {
      color: this.cursorColor || this.getValueOfPropertyAt(i2, r2, "fill"),
      opacity: this._currentCursorOpacity,
      left: e3.left + e3.leftOffset - a2 / 2,
      top: c2 + e3.top + h2,
      width: a2,
      height: n2
    };
  }
  _renderCursor(t2, e3, s2) {
    const {
      color: i2,
      opacity: r2,
      left: n2,
      top: o2,
      width: a2,
      height: h2
    } = this.getCursorRenderingData(s2, e3);
    t2.fillStyle = i2, t2.globalAlpha = r2, t2.fillRect(n2, o2, a2, h2);
  }
  renderSelection(t2, e3) {
    const s2 = {
      selectionStart: this.inCompositionMode ? this.hiddenTextarea.selectionStart : this.selectionStart,
      selectionEnd: this.inCompositionMode ? this.hiddenTextarea.selectionEnd : this.selectionEnd
    };
    this._renderSelection(t2, s2, e3);
  }
  renderDragSourceEffect() {
    const t2 = this.draggableTextDelegate.getDragStartSelection();
    this._renderSelection(this.canvas.contextTop, t2, this._getCursorBoundaries(t2.selectionStart, true));
  }
  renderDropTargetEffect(t2) {
    const e3 = this.getSelectionStartFromPointer(t2);
    this.renderCursorAt(e3);
  }
  _renderSelection(t2, e3, s2) {
    const i2 = e3.selectionStart, r2 = e3.selectionEnd, n2 = this.textAlign.includes(po), o2 = this.get2DCursorLocation(i2), a2 = this.get2DCursorLocation(r2), h2 = o2.lineIndex, c2 = a2.lineIndex, l2 = o2.charIndex < 0 ? 0 : o2.charIndex, u2 = a2.charIndex < 0 ? 0 : a2.charIndex;
    for (let e4 = h2; e4 <= c2; e4++) {
      const i3 = this._getLineLeftOffset(e4) || 0;
      let r3 = this.getHeightOfLine(e4), o3 = 0, a3 = 0, d2 = 0;
      if (e4 === h2 && (a3 = this.__charBounds[h2][l2].left), e4 >= h2 && e4 < c2) d2 = n2 && !this.isEndOfWrapping(e4) ? this.width : this.getLineWidth(e4) || 5;
      else if (e4 === c2) if (0 === u2) d2 = this.__charBounds[c2][u2].left;
      else {
        const t3 = this._getWidthOfCharSpacing();
        d2 = this.__charBounds[c2][u2 - 1].left + this.__charBounds[c2][u2 - 1].width - t3;
      }
      o3 = r3, (this.lineHeight < 1 || e4 === c2 && this.lineHeight > 1) && (r3 /= this.lineHeight);
      let g2 = s2.left + i3 + a3, f2 = r3, p2 = 0;
      const m2 = d2 - a3;
      this.inCompositionMode ? (t2.fillStyle = this.compositionColor || "black", f2 = 1, p2 = r3) : t2.fillStyle = this.selectionColor, "rtl" === this.direction && (this.textAlign === A || this.textAlign === po || this.textAlign === vo ? g2 = this.width - g2 - m2 : this.textAlign === M || this.textAlign === mo ? g2 = s2.left + i3 - d2 : this.textAlign !== D && this.textAlign !== yo || (g2 = s2.left + i3 - d2)), t2.fillRect(g2, s2.top + s2.topOffset + p2, m2, f2), s2.topOffset += o3;
    }
  }
  getCurrentCharFontSize() {
    const t2 = this._getCurrentCharIndex();
    return this.getValueOfPropertyAt(t2.l, t2.c, "fontSize");
  }
  getCurrentCharColor() {
    const t2 = this._getCurrentCharIndex();
    return this.getValueOfPropertyAt(t2.l, t2.c, K);
  }
  _getCurrentCharIndex() {
    const t2 = this.get2DCursorLocation(this.selectionStart, true), e3 = t2.charIndex > 0 ? t2.charIndex - 1 : 0;
    return {
      l: t2.lineIndex,
      c: e3
    };
  }
  dispose() {
    this.exitEditingImpl(), this.draggableTextDelegate.dispose(), super.dispose();
  }
};
t(Bo, "ownDefaults", Io), t(Bo, "type", "IText"), tt.setClass(Bo), tt.setClass(Bo, "i-text");
var Xo = class _Xo extends Bo {
  static getDefaults() {
    return s(s({}, super.getDefaults()), _Xo.ownDefaults);
  }
  constructor(t2, e3) {
    super(t2, s(s({}, _Xo.ownDefaults), e3));
  }
  static createControls() {
    return {
      controls: mi()
    };
  }
  initDimensions() {
    this.initialized && (this.isEditing && this.initDelayedCursor(), this._clearCache(), this.dynamicMinWidth = 0, this._styleMap = this._generateStyleMap(this._splitText()), this.dynamicMinWidth > this.width && this._set("width", this.dynamicMinWidth), this.textAlign.includes(po) && this.enlargeSpaces(), this.height = this.calcTextHeight());
  }
  _generateStyleMap(t2) {
    let e3 = 0, s2 = 0, i2 = 0;
    const r2 = {};
    for (let n2 = 0; n2 < t2.graphemeLines.length; n2++) "\n" === t2.graphemeText[i2] && n2 > 0 ? (s2 = 0, i2++, e3++) : !this.splitByGrapheme && this._reSpaceAndTab.test(t2.graphemeText[i2]) && n2 > 0 && (s2++, i2++), r2[n2] = {
      line: e3,
      offset: s2
    }, i2 += t2.graphemeLines[n2].length, s2 += t2.graphemeLines[n2].length;
    return r2;
  }
  styleHas(t2, e3) {
    if (this._styleMap && !this.isWrapping) {
      const t3 = this._styleMap[e3];
      t3 && (e3 = t3.line);
    }
    return super.styleHas(t2, e3);
  }
  isEmptyStyles(t2) {
    if (!this.styles) return true;
    let e3, s2 = 0, i2 = t2 + 1, r2 = false;
    const n2 = this._styleMap[t2], o2 = this._styleMap[t2 + 1];
    n2 && (t2 = n2.line, s2 = n2.offset), o2 && (i2 = o2.line, r2 = i2 === t2, e3 = o2.offset);
    const a2 = void 0 === t2 ? this.styles : {
      line: this.styles[t2]
    };
    for (const t3 in a2) for (const i3 in a2[t3]) {
      const n3 = parseInt(i3, 10);
      if (n3 >= s2 && (!r2 || n3 < e3)) for (const e4 in a2[t3][i3]) return false;
    }
    return true;
  }
  _getStyleDeclaration(t2, e3) {
    if (this._styleMap && !this.isWrapping) {
      const s2 = this._styleMap[t2];
      if (!s2) return {};
      t2 = s2.line, e3 = s2.offset + e3;
    }
    return super._getStyleDeclaration(t2, e3);
  }
  _setStyleDeclaration(t2, e3, s2) {
    const i2 = this._styleMap[t2];
    super._setStyleDeclaration(i2.line, i2.offset + e3, s2);
  }
  _deleteStyleDeclaration(t2, e3) {
    const s2 = this._styleMap[t2];
    super._deleteStyleDeclaration(s2.line, s2.offset + e3);
  }
  _getLineStyle(t2) {
    const e3 = this._styleMap[t2];
    return !!this.styles[e3.line];
  }
  _setLineStyle(t2) {
    const e3 = this._styleMap[t2];
    super._setLineStyle(e3.line);
  }
  _wrapText(t2, e3) {
    this.isWrapping = true;
    const s2 = this.getGraphemeDataForRender(t2), i2 = [];
    for (let t3 = 0; t3 < s2.wordsData.length; t3++) i2.push(...this._wrapLine(t3, e3, s2));
    return this.isWrapping = false, i2;
  }
  getGraphemeDataForRender(t2) {
    const e3 = this.splitByGrapheme, s2 = e3 ? "" : " ";
    let i2 = 0;
    return {
      wordsData: t2.map((t3, r2) => {
        let n2 = 0;
        const o2 = e3 ? this.graphemeSplit(t3) : this.wordSplit(t3);
        return 0 === o2.length ? [{
          word: [],
          width: 0
        }] : o2.map((t4) => {
          const o3 = e3 ? [t4] : this.graphemeSplit(t4), a2 = this._measureWord(o3, r2, n2);
          return i2 = Math.max(a2, i2), n2 += o3.length + s2.length, {
            word: o3,
            width: a2
          };
        });
      }),
      largestWordWidth: i2
    };
  }
  _measureWord(t2, e3) {
    let s2, i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, r2 = 0;
    for (let n2 = 0, o2 = t2.length; n2 < o2; n2++) {
      r2 += this._getGraphemeBox(t2[n2], e3, n2 + i2, s2, true).kernedWidth, s2 = t2[n2];
    }
    return r2;
  }
  wordSplit(t2) {
    return t2.split(this._wordJoiners);
  }
  _wrapLine(t2, e3, s2) {
    let {
      largestWordWidth: i2,
      wordsData: r2
    } = s2, n2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    const o2 = this._getWidthOfCharSpacing(), a2 = this.splitByGrapheme, h2 = [], c2 = a2 ? "" : " ";
    let l2 = 0, u2 = [], d2 = 0, g2 = 0, f2 = true;
    e3 -= n2;
    const p2 = Math.max(e3, i2, this.dynamicMinWidth), m2 = r2[t2];
    let v2;
    for (d2 = 0, v2 = 0; v2 < m2.length; v2++) {
      const {
        word: e4,
        width: s3
      } = m2[v2];
      d2 += e4.length, l2 += g2 + s3 - o2, l2 > p2 && !f2 ? (h2.push(u2), u2 = [], l2 = s3, f2 = true) : l2 += o2, f2 || a2 || u2.push(c2), u2 = u2.concat(e4), g2 = a2 ? 0 : this._measureWord([c2], t2, d2), d2++, f2 = false;
    }
    return v2 && h2.push(u2), i2 + n2 > this.dynamicMinWidth && (this.dynamicMinWidth = i2 - o2 + n2), h2;
  }
  isEndOfWrapping(t2) {
    return !this._styleMap[t2 + 1] || this._styleMap[t2 + 1].line !== this._styleMap[t2].line;
  }
  missingNewlineOffset(t2, e3) {
    return this.splitByGrapheme && !e3 ? this.isEndOfWrapping(t2) ? 1 : 0 : 1;
  }
  _splitTextIntoLines(t2) {
    const e3 = super._splitTextIntoLines(t2), s2 = this._wrapText(e3.lines, this.width), i2 = new Array(s2.length);
    for (let t3 = 0; t3 < s2.length; t3++) i2[t3] = s2[t3].join("");
    return e3.lines = i2, e3.graphemeLines = s2, e3;
  }
  getMinWidth() {
    return Math.max(this.minWidth, this.dynamicMinWidth);
  }
  _removeExtraneousStyles() {
    const t2 = /* @__PURE__ */ new Map();
    for (const e3 in this._styleMap) {
      const s2 = parseInt(e3, 10);
      if (this._textLines[s2]) {
        const s3 = this._styleMap[e3].line;
        t2.set("".concat(s3), true);
      }
    }
    for (const e3 in this.styles) t2.has(e3) || delete this.styles[e3];
  }
  toObject() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return super.toObject(["minWidth", "splitByGrapheme", ...t2]);
  }
};
t(Xo, "type", "Textbox"), t(Xo, "textLayoutProperties", [...Bo.textLayoutProperties, "width"]), t(Xo, "ownDefaults", {
  minWidth: 20,
  dynamicMinWidth: 2,
  lockScalingFlip: true,
  noScaleCache: false,
  _wordJoiners: /[ \t\r]/,
  splitByGrapheme: false
}), tt.setClass(Xo);
var Yo = class extends Cr {
  shouldPerformLayout(t2) {
    return !!t2.target.clipPath && super.shouldPerformLayout(t2);
  }
  shouldLayoutClipPath() {
    return false;
  }
  calcLayoutResult(t2, e3) {
    const {
      target: s2
    } = t2, {
      clipPath: i2,
      group: r2
    } = s2;
    if (!i2 || !this.shouldPerformLayout(t2)) return;
    const {
      width: n2,
      height: o2
    } = ve(xr(s2, i2)), a2 = new ot(n2, o2);
    if (i2.absolutePositioned) {
      return {
        center: Te(i2.getRelativeCenterPoint(), void 0, r2 ? r2.calcTransformMatrix() : void 0),
        size: a2
      };
    }
    {
      const r3 = i2.getRelativeCenterPoint().transform(s2.calcOwnMatrix(), true);
      if (this.shouldPerformLayout(t2)) {
        const {
          center: s3 = new ot(),
          correction: i3 = new ot()
        } = this.calcBoundingBox(e3, t2) || {};
        return {
          center: s3.add(r3),
          correction: i3.subtract(r3),
          size: a2
        };
      }
      return {
        center: s2.getRelativeCenterPoint().add(r3),
        size: a2
      };
    }
  }
};
t(Yo, "type", "clip-path"), tt.setClass(Yo);
var Wo = class extends Cr {
  getInitialSize(t2, e3) {
    let {
      target: s2
    } = t2, {
      size: i2
    } = e3;
    return new ot(s2.width || i2.x, s2.height || i2.y);
  }
};
t(Wo, "type", "fixed"), tt.setClass(Wo);
var Vo = class extends Or {
  subscribeTargets(t2) {
    const e3 = t2.target;
    t2.targets.reduce((t3, e4) => (e4.parent && t3.add(e4.parent), t3), /* @__PURE__ */ new Set()).forEach((t3) => {
      t3.layoutManager.subscribeTargets({
        target: t3,
        targets: [e3]
      });
    });
  }
  unsubscribeTargets(t2) {
    const e3 = t2.target, s2 = e3.getObjects();
    t2.targets.reduce((t3, e4) => (e4.parent && t3.add(e4.parent), t3), /* @__PURE__ */ new Set()).forEach((t3) => {
      !s2.some((e4) => e4.parent === t3) && t3.layoutManager.unsubscribeTargets({
        target: t3,
        targets: [e3]
      });
    });
  }
};
var zo = class _zo extends Mr {
  static getDefaults() {
    return s(s({}, super.getDefaults()), _zo.ownDefaults);
  }
  constructor() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    super(), Object.assign(this, _zo.ownDefaults), this.setOptions(e3);
    const {
      left: s2,
      top: i2,
      layoutManager: r2
    } = e3;
    this.groupInit(t2, {
      left: s2,
      top: i2,
      layoutManager: null != r2 ? r2 : new Vo()
    });
  }
  _shouldSetNestedCoords() {
    return true;
  }
  __objectSelectionMonitor() {
  }
  multiSelectAdd() {
    for (var t2 = arguments.length, e3 = new Array(t2), s2 = 0; s2 < t2; s2++) e3[s2] = arguments[s2];
    "selection-order" === this.multiSelectionStacking ? this.add(...e3) : e3.forEach((t3) => {
      const e4 = this._objects.findIndex((e5) => e5.isInFrontOf(t3)), s3 = -1 === e4 ? this.size() : e4;
      this.insertAt(s3, t3);
    });
  }
  canEnterGroup(t2) {
    return this.getObjects().some((e3) => e3.isDescendantOf(t2) || t2.isDescendantOf(e3)) ? (a("error", "ActiveSelection: circular object trees are not supported, this call has no effect"), false) : super.canEnterGroup(t2);
  }
  enterGroup(t2, e3) {
    t2.parent && t2.parent === t2.group ? t2.parent._exitGroup(t2) : t2.group && t2.parent !== t2.group && t2.group.remove(t2), this._enterGroup(t2, e3);
  }
  exitGroup(t2, e3) {
    this._exitGroup(t2, e3), t2.parent && t2.parent._enterGroup(t2, true);
  }
  _onAfterObjectsChange(t2, e3) {
    super._onAfterObjectsChange(t2, e3);
    const s2 = /* @__PURE__ */ new Set();
    e3.forEach((t3) => {
      const {
        parent: e4
      } = t3;
      e4 && s2.add(e4);
    }), t2 === yr ? s2.forEach((t3) => {
      t3._onAfterObjectsChange(vr, e3);
    }) : s2.forEach((t3) => {
      t3._set("dirty", true);
    });
  }
  onDeselect() {
    return this.removeAll(), false;
  }
  toString() {
    return "#<ActiveSelection: (".concat(this.complexity(), ")>");
  }
  shouldCache() {
    return false;
  }
  isOnACache() {
    return false;
  }
  _renderControls(t2, e3, i2) {
    t2.save(), t2.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1;
    const r2 = s(s({
      hasControls: false
    }, i2), {}, {
      forActiveSelection: true
    });
    for (let e4 = 0; e4 < this._objects.length; e4++) this._objects[e4]._renderControls(t2, r2);
    super._renderControls(t2, e3), t2.restore();
  }
};
t(zo, "type", "ActiveSelection"), t(zo, "ownDefaults", {
  multiSelectionStacking: "canvas-stacking"
}), tt.setClass(zo), tt.setClass(zo, "activeSelection");
var Ho = class {
  constructor() {
    t(this, "resources", {});
  }
  applyFilters(t2, e3, s2, i2, r2) {
    const n2 = r2.getContext("2d");
    if (!n2) return;
    n2.drawImage(e3, 0, 0, s2, i2);
    const o2 = {
      sourceWidth: s2,
      sourceHeight: i2,
      imageData: n2.getImageData(0, 0, s2, i2),
      originalEl: e3,
      originalImageData: n2.getImageData(0, 0, s2, i2),
      canvasEl: r2,
      ctx: n2,
      filterBackend: this
    };
    t2.forEach((t3) => {
      t3.applyTo(o2);
    });
    const {
      imageData: a2
    } = o2;
    return a2.width === s2 && a2.height === i2 || (r2.width = a2.width, r2.height = a2.height), n2.putImageData(a2, 0, 0), o2;
  }
};
var Go = class {
  constructor() {
    let {
      tileSize: e3 = o.textureSize
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    t(this, "aPosition", new Float32Array([0, 0, 0, 1, 1, 0, 1, 1])), t(this, "resources", {}), this.tileSize = e3, this.setupGLContext(e3, e3), this.captureGPUInfo();
  }
  setupGLContext(t2, e3) {
    this.dispose(), this.createWebGLCanvas(t2, e3);
  }
  createWebGLCanvas(t2, e3) {
    const s2 = vt({
      width: t2,
      height: e3
    }), i2 = s2.getContext("webgl", {
      alpha: true,
      premultipliedAlpha: false,
      depth: false,
      stencil: false,
      antialias: false
    });
    i2 && (i2.clearColor(0, 0, 0, 0), this.canvas = s2, this.gl = i2);
  }
  applyFilters(t2, e3, s2, i2, r2, n2) {
    const o2 = this.gl, a2 = r2.getContext("2d");
    if (!o2 || !a2) return;
    let h2;
    n2 && (h2 = this.getCachedTexture(n2, e3));
    const c2 = {
      originalWidth: e3.width || e3.naturalWidth || 0,
      originalHeight: e3.height || e3.naturalHeight || 0,
      sourceWidth: s2,
      sourceHeight: i2,
      destinationWidth: s2,
      destinationHeight: i2,
      context: o2,
      sourceTexture: this.createTexture(o2, s2, i2, h2 ? void 0 : e3),
      targetTexture: this.createTexture(o2, s2, i2),
      originalTexture: h2 || this.createTexture(o2, s2, i2, h2 ? void 0 : e3),
      passes: t2.length,
      webgl: true,
      aPosition: this.aPosition,
      programCache: this.programCache,
      pass: 0,
      filterBackend: this,
      targetCanvas: r2
    }, l2 = o2.createFramebuffer();
    return o2.bindFramebuffer(o2.FRAMEBUFFER, l2), t2.forEach((t3) => {
      t3 && t3.applyTo(c2);
    }), function(t3) {
      const e4 = t3.targetCanvas, s3 = e4.width, i3 = e4.height, r3 = t3.destinationWidth, n3 = t3.destinationHeight;
      s3 === r3 && i3 === n3 || (e4.width = r3, e4.height = n3);
    }(c2), this.copyGLTo2D(o2, c2), o2.bindTexture(o2.TEXTURE_2D, null), o2.deleteTexture(c2.sourceTexture), o2.deleteTexture(c2.targetTexture), o2.deleteFramebuffer(l2), a2.setTransform(1, 0, 0, 1, 0, 0), c2;
  }
  dispose() {
    this.canvas && (this.canvas = null, this.gl = null), this.clearWebGLCaches();
  }
  clearWebGLCaches() {
    this.programCache = {}, this.textureCache = {};
  }
  createTexture(t2, e3, s2, i2, r2) {
    const {
      NEAREST: n2,
      TEXTURE_2D: o2,
      RGBA: a2,
      UNSIGNED_BYTE: h2,
      CLAMP_TO_EDGE: c2,
      TEXTURE_MAG_FILTER: l2,
      TEXTURE_MIN_FILTER: u2,
      TEXTURE_WRAP_S: d2,
      TEXTURE_WRAP_T: g2
    } = t2, f2 = t2.createTexture();
    return t2.bindTexture(o2, f2), t2.texParameteri(o2, l2, r2 || n2), t2.texParameteri(o2, u2, r2 || n2), t2.texParameteri(o2, d2, c2), t2.texParameteri(o2, g2, c2), i2 ? t2.texImage2D(o2, 0, a2, a2, h2, i2) : t2.texImage2D(o2, 0, a2, e3, s2, 0, a2, h2, null), f2;
  }
  getCachedTexture(t2, e3, s2) {
    const {
      textureCache: i2
    } = this;
    if (i2[t2]) return i2[t2];
    {
      const r2 = this.createTexture(this.gl, e3.width, e3.height, e3, s2);
      return r2 && (i2[t2] = r2), r2;
    }
  }
  evictCachesForKey(t2) {
    this.textureCache[t2] && (this.gl.deleteTexture(this.textureCache[t2]), delete this.textureCache[t2]);
  }
  copyGLTo2D(t2, e3) {
    const s2 = t2.canvas, i2 = e3.targetCanvas, r2 = i2.getContext("2d");
    if (!r2) return;
    r2.translate(0, i2.height), r2.scale(1, -1);
    const n2 = s2.height - i2.height;
    r2.drawImage(s2, 0, n2, i2.width, i2.height, 0, 0, i2.width, i2.height);
  }
  copyGLTo2DPutImageData(t2, e3) {
    const s2 = e3.targetCanvas.getContext("2d"), i2 = e3.destinationWidth, r2 = e3.destinationHeight, n2 = i2 * r2 * 4;
    if (!s2) return;
    const o2 = new Uint8Array(this.imageBuffer, 0, n2), a2 = new Uint8ClampedArray(this.imageBuffer, 0, n2);
    t2.readPixels(0, 0, i2, r2, t2.RGBA, t2.UNSIGNED_BYTE, o2);
    const h2 = new ImageData(a2, i2, r2);
    s2.putImageData(h2, 0, 0);
  }
  captureGPUInfo() {
    if (this.gpuInfo) return this.gpuInfo;
    const t2 = this.gl, e3 = {
      renderer: "",
      vendor: ""
    };
    if (!t2) return e3;
    const s2 = t2.getExtension("WEBGL_debug_renderer_info");
    if (s2) {
      const i2 = t2.getParameter(s2.UNMASKED_RENDERER_WEBGL), r2 = t2.getParameter(s2.UNMASKED_VENDOR_WEBGL);
      i2 && (e3.renderer = i2.toLowerCase()), r2 && (e3.vendor = r2.toLowerCase());
    }
    return this.gpuInfo = e3, e3;
  }
};
var No;
function Uo() {
  const {
    WebGLProbe: t2
  } = p();
  return t2.queryWebGL(pt()), o.enableGLFiltering && t2.isSupported(o.textureSize) ? new Go({
    tileSize: o.textureSize
  }) : new Ho();
}
function qo() {
  return !No && (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && (No = Uo()), No;
}
function Ko(t2) {
  No = t2;
}
var Jo = ["filters", "resizeFilter", "src", "crossOrigin", "type"];
var Qo = ["cropX", "cropY"];
var Zo = class _Zo extends _i {
  static getDefaults() {
    return s(s({}, super.getDefaults()), _Zo.ownDefaults);
  }
  constructor(e3, s2) {
    super(), t(this, "_lastScaleX", 1), t(this, "_lastScaleY", 1), t(this, "_filterScalingX", 1), t(this, "_filterScalingY", 1), this.filters = [], Object.assign(this, _Zo.ownDefaults), this.setOptions(s2), this.cacheKey = "texture".concat(ft()), this.setElement("string" == typeof e3 ? (this.canvas && ne(this.canvas.getElement()) || m()).getElementById(e3) : e3, s2);
  }
  getElement() {
    return this._element;
  }
  setElement(t2) {
    var e3;
    let s2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    this.removeTexture(this.cacheKey), this.removeTexture("".concat(this.cacheKey, "_filtered")), this._element = t2, this._originalElement = t2, this._setWidthHeight(s2), null === (e3 = t2.classList) || void 0 === e3 || e3.add(_Zo.CSS_CANVAS), 0 !== this.filters.length && this.applyFilters(), this.resizeFilter && this.applyResizeFilters();
  }
  removeTexture(t2) {
    const e3 = qo(false);
    e3 instanceof Go && e3.evictCachesForKey(t2);
  }
  dispose() {
    super.dispose(), this.removeTexture(this.cacheKey), this.removeTexture("".concat(this.cacheKey, "_filtered")), this._cacheContext = null, ["_originalElement", "_element", "_filteredEl", "_cacheCanvas"].forEach((t2) => {
      const e3 = this[t2];
      e3 && p().dispose(e3), this[t2] = void 0;
    });
  }
  getCrossOrigin() {
    return this._originalElement && (this._originalElement.crossOrigin || null);
  }
  getOriginalSize() {
    const t2 = this.getElement();
    return t2 ? {
      width: t2.naturalWidth || t2.width,
      height: t2.naturalHeight || t2.height
    } : {
      width: 0,
      height: 0
    };
  }
  _stroke(t2) {
    if (!this.stroke || 0 === this.strokeWidth) return;
    const e3 = this.width / 2, s2 = this.height / 2;
    t2.beginPath(), t2.moveTo(-e3, -s2), t2.lineTo(e3, -s2), t2.lineTo(e3, s2), t2.lineTo(-e3, s2), t2.lineTo(-e3, -s2), t2.closePath();
  }
  toObject() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    const e3 = [];
    return this.filters.forEach((t3) => {
      t3 && e3.push(t3.toObject());
    }), s(s({}, super.toObject([...Qo, ...t2])), {}, {
      src: this.getSrc(),
      crossOrigin: this.getCrossOrigin(),
      filters: e3
    }, this.resizeFilter ? {
      resizeFilter: this.resizeFilter.toObject()
    } : {});
  }
  hasCrop() {
    return !!this.cropX || !!this.cropY || this.width < this._element.width || this.height < this._element.height;
  }
  _toSVG() {
    const t2 = [], e3 = this._element, s2 = -this.width / 2, i2 = -this.height / 2;
    let r2 = [], n2 = [], o2 = "", a2 = "";
    if (!e3) return [];
    if (this.hasCrop()) {
      const t3 = ft();
      r2.push('<clipPath id="imageCrop_' + t3 + '">\n', '	<rect x="' + s2 + '" y="' + i2 + '" width="' + this.width + '" height="' + this.height + '" />\n', "</clipPath>\n"), o2 = ' clip-path="url(#imageCrop_' + t3 + ')" ';
    }
    if (this.imageSmoothing || (a2 = ' image-rendering="optimizeSpeed"'), t2.push("	<image ", "COMMON_PARTS", 'xlink:href="'.concat(this.getSvgSrc(true), '" x="').concat(s2 - this.cropX, '" y="').concat(i2 - this.cropY, '" width="').concat(e3.width || e3.naturalWidth, '" height="').concat(e3.height || e3.naturalHeight, '"').concat(a2).concat(o2, "></image>\n")), this.stroke || this.strokeDashArray) {
      const t3 = this.fill;
      this.fill = null, n2 = ['	<rect x="'.concat(s2, '" y="').concat(i2, '" width="').concat(this.width, '" height="').concat(this.height, '" style="').concat(this.getSvgStyles(), '" />\n')], this.fill = t3;
    }
    return r2 = this.paintFirst !== K ? r2.concat(n2, t2) : r2.concat(t2, n2), r2;
  }
  getSrc(t2) {
    const e3 = t2 ? this._element : this._originalElement;
    return e3 ? e3.toDataURL ? e3.toDataURL() : this.srcFromAttribute ? e3.getAttribute("src") || "" : e3.src : this.src || "";
  }
  getSvgSrc(t2) {
    return this.getSrc(t2);
  }
  setSrc(t2) {
    let {
      crossOrigin: e3,
      signal: s2
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return It(t2, {
      crossOrigin: e3,
      signal: s2
    }).then((t3) => {
      void 0 !== e3 && this.set({
        crossOrigin: e3
      }), this.setElement(t3);
    });
  }
  toString() {
    return '#<Image: { src: "'.concat(this.getSrc(), '" }>');
  }
  applyResizeFilters() {
    const t2 = this.resizeFilter, e3 = this.minimumScaleTrigger, s2 = this.getTotalObjectScaling(), i2 = s2.x, r2 = s2.y, n2 = this._filteredEl || this._originalElement;
    if (this.group && this.set("dirty", true), !t2 || i2 > e3 && r2 > e3) return this._element = n2, this._filterScalingX = 1, this._filterScalingY = 1, this._lastScaleX = i2, void (this._lastScaleY = r2);
    const o2 = vt(n2), {
      width: a2,
      height: h2
    } = n2;
    this._element = o2, this._lastScaleX = t2.scaleX = i2, this._lastScaleY = t2.scaleY = r2, qo().applyFilters([t2], n2, a2, h2, this._element), this._filterScalingX = o2.width / this._originalElement.width, this._filterScalingY = o2.height / this._originalElement.height;
  }
  applyFilters() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.filters || [];
    if (t2 = t2.filter((t3) => t3 && !t3.isNeutralState()), this.set("dirty", true), this.removeTexture("".concat(this.cacheKey, "_filtered")), 0 === t2.length) return this._element = this._originalElement, this._filteredEl = void 0, this._filterScalingX = 1, void (this._filterScalingY = 1);
    const e3 = this._originalElement, s2 = e3.naturalWidth || e3.width, i2 = e3.naturalHeight || e3.height;
    if (this._element === this._originalElement) {
      const t3 = vt({
        width: s2,
        height: i2
      });
      this._element = t3, this._filteredEl = t3;
    } else this._filteredEl && (this._element = this._filteredEl, this._filteredEl.getContext("2d").clearRect(0, 0, s2, i2), this._lastScaleX = 1, this._lastScaleY = 1);
    qo().applyFilters(t2, this._originalElement, s2, i2, this._element, this.cacheKey), this._originalElement.width === this._element.width && this._originalElement.height === this._element.height || (this._filterScalingX = this._element.width / this._originalElement.width, this._filterScalingY = this._element.height / this._originalElement.height);
  }
  _render(t2) {
    t2.imageSmoothingEnabled = this.imageSmoothing, true !== this.isMoving && this.resizeFilter && this._needsResize() && this.applyResizeFilters(), this._stroke(t2), this._renderPaintInOrder(t2);
  }
  drawCacheOnCanvas(t2) {
    t2.imageSmoothingEnabled = this.imageSmoothing, super.drawCacheOnCanvas(t2);
  }
  shouldCache() {
    return this.needsItsOwnCache();
  }
  _renderFill(t2) {
    const e3 = this._element;
    if (!e3) return;
    const s2 = this._filterScalingX, i2 = this._filterScalingY, r2 = this.width, n2 = this.height, o2 = Math.max(this.cropX, 0), a2 = Math.max(this.cropY, 0), h2 = e3.naturalWidth || e3.width, c2 = e3.naturalHeight || e3.height, l2 = o2 * s2, u2 = a2 * i2, d2 = Math.min(r2 * s2, h2 - l2), g2 = Math.min(n2 * i2, c2 - u2), f2 = -r2 / 2, p2 = -n2 / 2, m2 = Math.min(r2, h2 / s2 - o2), v2 = Math.min(n2, c2 / i2 - a2);
    e3 && t2.drawImage(e3, l2, u2, d2, g2, f2, p2, m2, v2);
  }
  _needsResize() {
    const t2 = this.getTotalObjectScaling();
    return t2.x !== this._lastScaleX || t2.y !== this._lastScaleY;
  }
  _resetWidthHeight() {
    this.set(this.getOriginalSize());
  }
  _setWidthHeight() {
    let {
      width: t2,
      height: e3
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const s2 = this.getOriginalSize();
    this.width = t2 || s2.width, this.height = e3 || s2.height;
  }
  parsePreserveAspectRatioAttribute() {
    const t2 = Qt(this.preserveAspectRatio || ""), e3 = this.width, s2 = this.height, i2 = {
      width: e3,
      height: s2
    };
    let r2, n2 = this._element.width, o2 = this._element.height, a2 = 1, h2 = 1, c2 = 0, l2 = 0, u2 = 0, d2 = 0;
    return !t2 || t2.alignX === j && t2.alignY === j ? (a2 = e3 / n2, h2 = s2 / o2) : ("meet" === t2.meetOrSlice && (a2 = h2 = Pr(this._element, i2), r2 = (e3 - n2 * a2) / 2, "Min" === t2.alignX && (c2 = -r2), "Max" === t2.alignX && (c2 = r2), r2 = (s2 - o2 * h2) / 2, "Min" === t2.alignY && (l2 = -r2), "Max" === t2.alignY && (l2 = r2)), "slice" === t2.meetOrSlice && (a2 = h2 = Er(this._element, i2), r2 = n2 - e3 / a2, "Mid" === t2.alignX && (u2 = r2 / 2), "Max" === t2.alignX && (u2 = r2), r2 = o2 - s2 / h2, "Mid" === t2.alignY && (d2 = r2 / 2), "Max" === t2.alignY && (d2 = r2), n2 = e3 / a2, o2 = s2 / h2)), {
      width: n2,
      height: o2,
      scaleX: a2,
      scaleY: h2,
      offsetLeft: c2,
      offsetTop: l2,
      cropX: u2,
      cropY: d2
    };
  }
  static fromObject(t2, e3) {
    let {
      filters: r2,
      resizeFilter: n2,
      src: o2,
      crossOrigin: a2,
      type: h2
    } = t2, c2 = i(t2, Jo);
    return Promise.all([It(o2, s(s({}, e3), {}, {
      crossOrigin: a2
    })), r2 && Bt(r2, e3), n2 && Bt([n2], e3), Xt(c2, e3)]).then((t3) => {
      let [e4, i2 = [], [r3] = [], n3 = {}] = t3;
      return new this(e4, s(s({}, c2), {}, {
        src: o2,
        filters: i2,
        resizeFilter: r3
      }, n3));
    });
  }
  static fromURL(t2) {
    let {
      crossOrigin: e3 = null,
      signal: s2
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i2 = arguments.length > 2 ? arguments[2] : void 0;
    return It(t2, {
      crossOrigin: e3,
      signal: s2
    }).then((t3) => new this(t3, i2));
  }
  static fromElement(_0) {
    return __async(this, arguments, function* (t2) {
      let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s2 = arguments.length > 2 ? arguments[2] : void 0;
      const i2 = dr(t2, this.ATTRIBUTE_NAMES, s2);
      return this.fromURL(i2["xlink:href"], e3, i2).catch((t3) => (a("log", "Unable to parse Image", t3), null));
    });
  }
};
function $o(t2) {
  if (!Ke.test(t2.nodeName)) return {};
  const e3 = t2.getAttribute("viewBox");
  let s2, i2, r2 = 1, n2 = 1, o2 = 0, a2 = 0;
  const h2 = t2.getAttribute("width"), c2 = t2.getAttribute("height"), l2 = t2.getAttribute("x") || 0, u2 = t2.getAttribute("y") || 0, d2 = !(e3 && Qe.test(e3)), g2 = !h2 || !c2 || "100%" === h2 || "100%" === c2;
  let f2 = "", p2 = 0, m2 = 0;
  if (d2 && (l2 || u2) && t2.parentNode && "#document" !== t2.parentNode.nodeName && (f2 = " translate(" + Jt(l2 || "0") + " " + Jt(u2 || "0") + ") ", s2 = (t2.getAttribute("transform") || "") + f2, t2.setAttribute("transform", s2), t2.removeAttribute("x"), t2.removeAttribute("y")), d2 && g2) return {
    width: 0,
    height: 0
  };
  const v2 = {
    width: 0,
    height: 0
  };
  if (d2) return v2.width = Jt(h2), v2.height = Jt(c2), v2;
  const y2 = e3.match(Qe);
  o2 = -parseFloat(y2[1]), a2 = -parseFloat(y2[2]);
  const _2 = parseFloat(y2[3]), x2 = parseFloat(y2[4]);
  v2.minX = o2, v2.minY = a2, v2.viewBoxWidth = _2, v2.viewBoxHeight = x2, g2 ? (v2.width = _2, v2.height = x2) : (v2.width = Jt(h2), v2.height = Jt(c2), r2 = v2.width / _2, n2 = v2.height / x2);
  const C2 = Qt(t2.getAttribute("preserveAspectRatio") || "");
  if (C2.alignX !== j && ("meet" === C2.meetOrSlice && (n2 = r2 = r2 > n2 ? n2 : r2), "slice" === C2.meetOrSlice && (n2 = r2 = r2 > n2 ? r2 : n2), p2 = v2.width - _2 * r2, m2 = v2.height - x2 * r2, "Mid" === C2.alignX && (p2 /= 2), "Mid" === C2.alignY && (m2 /= 2), "Min" === C2.alignX && (p2 = 0), "Min" === C2.alignY && (m2 = 0)), 1 === r2 && 1 === n2 && 0 === o2 && 0 === a2 && 0 === l2 && 0 === u2) return v2;
  if ((l2 || u2) && "#document" !== t2.parentNode.nodeName && (f2 = " translate(" + Jt(l2 || "0") + " " + Jt(u2 || "0") + ") "), s2 = f2 + " matrix(" + r2 + " 0 0 " + n2 + " " + (o2 * r2 + p2) + " " + (a2 * n2 + m2) + ") ", "svg" === t2.nodeName) {
    for (i2 = t2.ownerDocument.createElementNS(ze, "g"); t2.firstChild; ) i2.appendChild(t2.firstChild);
    t2.appendChild(i2);
  } else i2 = t2, i2.removeAttribute("x"), i2.removeAttribute("y"), s2 = i2.getAttribute("transform") + s2;
  return i2.setAttribute("transform", s2), v2;
}
t(Zo, "type", "Image"), t(Zo, "cacheProperties", [...ps, ...Qo]), t(Zo, "ownDefaults", {
  strokeWidth: 0,
  srcFromAttribute: false,
  minimumScaleTrigger: 0.5,
  cropX: 0,
  cropY: 0,
  imageSmoothing: true
}), t(Zo, "CSS_CANVAS", "canvas-img"), t(Zo, "ATTRIBUTE_NAMES", [...Fi, "x", "y", "width", "height", "preserveAspectRatio", "xlink:href", "crossOrigin", "image-rendering"]), tt.setClass(Zo), tt.setSVGClass(Zo);
var ta = (t2) => t2.tagName.replace("svg:", "");
var ea = Ye(["pattern", "defs", "symbol", "metadata", "clipPath", "mask", "desc"]);
function sa(t2, e3) {
  let s2, i2, r2, n2, o2 = [];
  for (r2 = 0, n2 = e3.length; r2 < n2; r2++) s2 = e3[r2], i2 = t2.getElementsByTagNameNS("http://www.w3.org/2000/svg", s2), o2 = o2.concat(Array.from(i2));
  return o2;
}
var ia = ["gradientTransform", "x1", "x2", "y1", "y2", "gradientUnits", "cx", "cy", "r", "fx", "fy"];
var ra = "xlink:href";
function na(t2, e3) {
  var s2;
  const i2 = (null === (s2 = e3.getAttribute(ra)) || void 0 === s2 ? void 0 : s2.slice(1)) || "", r2 = t2.getElementById(i2);
  if (r2 && r2.getAttribute(ra) && na(t2, r2), r2 && (ia.forEach((t3) => {
    const s3 = r2.getAttribute(t3);
    !e3.hasAttribute(t3) && s3 && e3.setAttribute(t3, s3);
  }), !e3.children.length)) {
    const t3 = r2.cloneNode(true);
    for (; t3.firstChild; ) e3.appendChild(t3.firstChild);
  }
  e3.removeAttribute(ra);
}
var oa = ["linearGradient", "radialGradient", "svg:linearGradient", "svg:radialGradient"];
function aa(t2) {
  const e3 = t2.getElementsByTagName("style");
  let i2, r2;
  const n2 = {};
  for (i2 = 0, r2 = e3.length; i2 < r2; i2++) {
    const t3 = (e3[i2].textContent || "").replace(/\/\*[\s\S]*?\*\//g, "");
    "" !== t3.trim() && t3.split("}").filter((t4, e4, s2) => s2.length > 1 && t4.trim()).forEach((t4) => {
      if ((t4.match(/{/g) || []).length > 1 && t4.trim().startsWith("@")) return;
      const e4 = t4.split("{"), o2 = {}, a2 = e4[1].trim().split(";").filter(function(t5) {
        return t5.trim();
      });
      for (i2 = 0, r2 = a2.length; i2 < r2; i2++) {
        const t5 = a2[i2].split(":"), e5 = t5[0].trim(), s2 = t5[1].trim();
        o2[e5] = s2;
      }
      (t4 = e4[0].trim()).split(",").forEach((t5) => {
        "" !== (t5 = t5.replace(/^svg/i, "").trim()) && (n2[t5] = s(s({}, n2[t5] || {}), o2));
      });
    });
  }
  return n2;
}
var ha = (t2) => tt.getSVGClass(ta(t2).toLowerCase());
var ca = class {
  constructor(t2, e3, s2, i2, r2) {
    this.elements = t2, this.options = e3, this.reviver = s2, this.regexUrl = /^url\(['"]?#([^'"]+)['"]?\)/g, this.doc = i2, this.clipPaths = r2, this.gradientDefs = function(t3) {
      const e4 = sa(t3, oa), s3 = {};
      let i3 = e4.length;
      for (; i3--; ) {
        const r3 = e4[i3];
        r3.getAttribute("xlink:href") && na(t3, r3);
        const n2 = r3.getAttribute("id");
        n2 && (s3[n2] = r3);
      }
      return s3;
    }(i2), this.cssRules = aa(i2);
  }
  parse() {
    return Promise.all(this.elements.map((t2) => this.createObject(t2)));
  }
  createObject(t2) {
    return __async(this, null, function* () {
      const e3 = ha(t2);
      if (e3) {
        const s2 = yield e3.fromElement(t2, this.options, this.cssRules);
        return this.resolveGradient(s2, t2, K), this.resolveGradient(s2, t2, J), s2 instanceof Zo && s2._originalElement ? ln(s2, s2.parsePreserveAspectRatioAttribute()) : ln(s2), yield this.resolveClipPath(s2, t2), this.reviver && this.reviver(t2, s2), s2;
      }
      return null;
    });
  }
  extractPropertyDefinition(t2, e3, s2) {
    const i2 = t2[e3], r2 = this.regexUrl;
    if (!r2.test(i2)) return;
    r2.lastIndex = 0;
    const n2 = r2.exec(i2)[1];
    return r2.lastIndex = 0, s2[n2];
  }
  resolveGradient(t2, e3, i2) {
    const r2 = this.extractPropertyDefinition(t2, i2, this.gradientDefs);
    if (r2) {
      const n2 = e3.getAttribute(i2 + "-opacity"), o2 = Rn.fromElement(r2, t2, s(s({}, this.options), {}, {
        opacity: n2
      }));
      t2.set(i2, o2);
    }
  }
  resolveClipPath(t2, e3, s2) {
    return __async(this, null, function* () {
      const i2 = this.extractPropertyDefinition(t2, "clipPath", this.clipPaths);
      if (i2) {
        const r2 = St(t2.calcTransformMatrix()), n2 = i2[0].parentElement;
        let o2 = e3;
        for (; !s2 && o2.parentElement && o2.getAttribute("clip-path") !== t2.clipPath; ) o2 = o2.parentElement;
        o2.parentElement.appendChild(n2);
        const a2 = or("".concat(o2.getAttribute("transform") || "", " ").concat(n2.getAttribute("originalTransform") || ""));
        n2.setAttribute("transform", "matrix(".concat(a2.join(","), ")"));
        const h2 = yield Promise.all(i2.map((t3) => ha(t3).fromElement(t3, this.options, this.cssRules).then((t4) => (ln(t4), t4.fillRule = t4.clipRule, delete t4.clipRule, t4)))), c2 = 1 === h2.length ? h2[0] : new Mr(h2), l2 = Tt(r2, c2.calcTransformMatrix());
        c2.clipPath && (yield this.resolveClipPath(c2, o2, n2.getAttribute("clip-path") ? o2 : void 0));
        const {
          scaleX: u2,
          scaleY: d2,
          angle: g2,
          skewX: f2,
          translateX: p2,
          translateY: m2
        } = Dt(l2);
        c2.set({
          flipX: false,
          flipY: false
        }), c2.set({
          scaleX: u2,
          scaleY: d2,
          angle: g2,
          skewX: f2,
          skewY: 0
        }), c2.setPositionByOrigin(new ot(p2, m2), D, D), t2.clipPath = c2;
      } else delete t2.clipPath;
    });
  }
};
var la = (t2) => qe.test(ta(t2));
var ua = () => ({
  objects: [],
  elements: [],
  options: {},
  allElements: []
});
function da(_0, _1) {
  return __async(this, arguments, function* (t2, e3) {
    let {
      crossOrigin: i2,
      signal: r2
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (r2 && r2.aborted) return a("log", new c("parseSVGDocument")), ua();
    const n2 = t2.documentElement;
    !function(t3) {
      const e4 = sa(t3, ["use", "svg:use"]), s2 = ["x", "y", "xlink:href", "href", "transform"];
      for (const i3 of e4) {
        const e5 = i3.attributes, r3 = {};
        for (const t4 of e5) t4.value && (r3[t4.name] = t4.value);
        const n3 = (r3["xlink:href"] || r3.href || "").slice(1);
        if ("" === n3) return;
        const o3 = t3.getElementById(n3);
        if (null === o3) return;
        let a2 = o3.cloneNode(true);
        const h3 = a2.attributes, c2 = {};
        for (const t4 of h3) t4.value && (c2[t4.name] = t4.value);
        const {
          x: l3 = 0,
          y: u3 = 0,
          transform: d3 = ""
        } = r3, g2 = "".concat(d3, " ").concat(c2.transform || "", " translate(").concat(l3, ", ").concat(u3, ")");
        if ($o(a2), /^svg$/i.test(a2.nodeName)) {
          const t4 = a2.ownerDocument.createElementNS(ze, "g");
          Object.entries(c2).forEach((e6) => {
            let [s3, i4] = e6;
            return t4.setAttributeNS(ze, s3, i4);
          }), t4.append(...a2.childNodes), a2 = t4;
        }
        for (const t4 of e5) {
          if (!t4) continue;
          const {
            name: e6,
            value: i4
          } = t4;
          if (!s2.includes(e6)) if ("style" === e6) {
            const t5 = {};
            cr(i4, t5), Object.entries(c2).forEach((e7) => {
              let [s4, i5] = e7;
              t5[s4] = i5;
            }), cr(c2.style || "", t5);
            const s3 = Object.entries(t5).map((t6) => t6.join(":")).join(";");
            a2.setAttribute(e6, s3);
          } else !c2[e6] && a2.setAttribute(e6, i4);
        }
        a2.setAttribute("transform", g2), a2.setAttribute("instantiated_by_use", "1"), a2.removeAttribute("id"), i3.parentNode.replaceChild(a2, i3);
      }
    }(t2);
    const o2 = Array.from(n2.getElementsByTagName("*")), h2 = s(s({}, $o(n2)), {}, {
      crossOrigin: i2,
      signal: r2
    }), l2 = o2.filter((t3) => ($o(t3), la(t3) && !function(t4) {
      let e4 = t4;
      for (; e4 && (e4 = e4.parentElement); ) if (e4 && e4.nodeName && ea.test(ta(e4)) && !e4.getAttribute("instantiated_by_use")) return true;
      return false;
    }(t3)));
    if (!l2 || l2 && !l2.length) return s(s({}, ua()), {}, {
      options: h2,
      allElements: o2
    });
    const u2 = {};
    o2.filter((t3) => "clipPath" === ta(t3)).forEach((t3) => {
      t3.setAttribute("originalTransform", t3.getAttribute("transform") || "");
      const e4 = t3.getAttribute("id");
      u2[e4] = Array.from(t3.getElementsByTagName("*")).filter((t4) => la(t4));
    });
    const d2 = new ca(l2, h2, e3, t2, u2);
    return {
      objects: yield d2.parse(),
      elements: l2,
      options: h2,
      allElements: o2
    };
  });
}
function ga(t2, e3, s2) {
  return da(new (v()).DOMParser().parseFromString(t2.trim(), "text/xml"), e3, s2);
}
function fa(t2, e3) {
  let s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  return new Promise((e4, i2) => {
    cn(t2.replace(/^\n\s*/, "").trim(), {
      onComplete: (t3) => {
        const s3 = t3.responseXML;
        s3 && e4(s3), i2();
      },
      signal: s2.signal
    });
  }).then((t3) => da(t3, e3, s2)).catch(() => ua());
}
var pa = W;
var ma = (t2) => function(e3, s2, i2) {
  const {
    points: r2,
    pathOffset: n2
  } = i2;
  return new ot(r2[t2]).subtract(n2).transform(Tt(i2.getViewportTransform(), i2.calcTransformMatrix()));
};
var va = (t2, e3, s2, i2) => {
  const {
    target: r2,
    pointIndex: n2
  } = e3, o2 = r2, a2 = Te(new ot(s2, i2), void 0, o2.calcOwnMatrix());
  return o2.points[n2] = a2.add(o2.pathOffset), o2.setDimensions(), true;
};
var ya = (t2, e3) => function(i2, r2, n2, o2) {
  const a2 = r2.target, h2 = new ot(a2.points[(t2 > 0 ? t2 : a2.points.length) - 1]), c2 = h2.subtract(a2.pathOffset).transform(a2.calcOwnMatrix()), l2 = e3(i2, s(s({}, r2), {}, {
    pointIndex: t2
  }), n2, o2), u2 = h2.subtract(a2.pathOffset).transform(a2.calcOwnMatrix()).subtract(c2);
  return a2.left -= u2.x, a2.top -= u2.y, l2;
};
var _a = (t2) => Ys(pa, ya(t2, va));
var xa = (t2, e3, s2) => {
  const {
    path: i2,
    pathOffset: r2
  } = t2, n2 = i2[e3];
  return new ot(n2[s2] - r2.x, n2[s2 + 1] - r2.y).transform(Tt(t2.getViewportTransform(), t2.calcTransformMatrix()));
};
function Ca(t2, e3, s2) {
  const {
    commandIndex: i2,
    pointIndex: r2
  } = this;
  return xa(s2, i2, r2);
}
function ba(t2, e3, i2, r2) {
  const {
    target: n2
  } = e3, {
    commandIndex: o2,
    pointIndex: a2
  } = this, h2 = ((t3, e4, s2, i3, r3) => {
    const {
      path: n3,
      pathOffset: o3
    } = t3, a3 = n3[(i3 > 0 ? i3 : n3.length) - 1], h3 = new ot(a3[r3], a3[r3 + 1]), c2 = h3.subtract(o3).transform(t3.calcOwnMatrix()), l2 = Te(new ot(e4, s2), void 0, t3.calcOwnMatrix());
    n3[i3][r3] = l2.x + o3.x, n3[i3][r3 + 1] = l2.y + o3.y, t3.setDimensions();
    const u2 = h3.subtract(t3.pathOffset).transform(t3.calcOwnMatrix()).subtract(c2);
    return t3.left -= u2.x, t3.top -= u2.y, t3.set("dirty", true), true;
  })(n2, i2, r2, o2, a2);
  return De(this.actionName, s(s({}, Le(t2, e3, i2, r2)), {}, {
    commandIndex: o2,
    pointIndex: a2
  })), h2;
}
var wa = class extends Gs {
  constructor(t2) {
    super(t2);
  }
  render(t2, e3, i2, r2, n2) {
    const o2 = s(s({}, r2), {}, {
      cornerColor: this.controlFill,
      cornerStrokeColor: this.controlStroke,
      transparentCorners: !this.controlFill
    });
    super.render(t2, e3, i2, o2, n2);
  }
};
var Sa = class extends wa {
  constructor(t2) {
    super(t2);
  }
  render(t2, e3, s2, i2, r2) {
    const {
      path: n2
    } = r2, {
      commandIndex: o2,
      pointIndex: a2,
      connectToCommandIndex: h2,
      connectToPointIndex: c2
    } = this;
    t2.save(), t2.strokeStyle = this.controlStroke, this.connectionDashArray && t2.setLineDash(this.connectionDashArray);
    const [l2] = n2[o2], u2 = xa(r2, h2, c2);
    if ("Q" === l2) {
      const i3 = xa(r2, o2, a2 + 2);
      t2.moveTo(i3.x, i3.y), t2.lineTo(e3, s2);
    } else t2.moveTo(e3, s2);
    t2.lineTo(u2.x, u2.y), t2.stroke(), t2.restore(), super.render(t2, e3, s2, i2, r2);
  }
};
var Ta = (t2, e3, i2, r2, n2, o2) => new (i2 ? Sa : wa)(s(s({
  commandIndex: t2,
  pointIndex: e3,
  actionName: "modifyPath",
  positionHandler: Ca,
  actionHandler: ba,
  connectToCommandIndex: n2,
  connectToPointIndex: o2
}, r2), i2 ? r2.controlPointStyle : r2.pointStyle));
var Oa = Object.freeze({
  __proto__: null,
  changeWidth: Vs,
  createObjectDefaultControls: fi,
  createPathControls: function(t2) {
    let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const s2 = {};
    let i2 = "M";
    return t2.path.forEach((t3, r2) => {
      const n2 = t3[0];
      switch ("Z" !== n2 && (s2["c_".concat(r2, "_").concat(n2)] = Ta(r2, t3.length - 2, false, e3)), n2) {
        case "C":
          s2["c_".concat(r2, "_C_CP_1")] = Ta(r2, 1, true, e3, r2 - 1, /* @__PURE__ */ ((t4) => "C" === t4 ? 5 : "Q" === t4 ? 3 : 1)(i2)), s2["c_".concat(r2, "_C_CP_2")] = Ta(r2, 3, true, e3, r2, 5);
          break;
        case "Q":
          s2["c_".concat(r2, "_Q_CP_1")] = Ta(r2, 1, true, e3, r2, 3);
      }
      i2 = n2;
    }), s2;
  },
  createPolyActionHandler: _a,
  createPolyControls: function(t2) {
    let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const i2 = {};
    for (let r2 = 0; r2 < ("number" == typeof t2 ? t2 : t2.points.length); r2++) i2["p".concat(r2)] = new Gs(s({
      actionName: pa,
      positionHandler: ma(r2),
      actionHandler: _a(r2)
    }, e3));
    return i2;
  },
  createPolyPositionHandler: ma,
  createResizeControls: pi,
  createTextboxDefaultControls: mi,
  dragHandler: Be,
  factoryPolyActionHandler: ya,
  getLocalPoint: Ie,
  polyActionHandler: va,
  renderCircleControl: zs,
  renderSquareControl: Hs,
  rotationStyleHandler: Ns,
  rotationWithSnapping: Us,
  scaleCursorStyleHandler: Qs,
  scaleOrSkewActionName: li,
  scaleSkewCursorStyleHandler: ui,
  scalingEqually: $s,
  scalingX: ti,
  scalingXOrSkewingY: di,
  scalingY: ei,
  scalingYOrSkewingX: gi,
  skewCursorStyleHandler: ni,
  skewHandlerX: ai,
  skewHandlerY: hi,
  wrapWithFireEvent: Ys,
  wrapWithFixedAnchor: Ws
});
var ka = (t2) => void 0 !== t2.webgl;
var Da = (t2, e3) => {
  const s2 = vt({
    width: t2,
    height: e3
  }), i2 = pt().getContext("webgl"), r2 = {
    imageBuffer: new ArrayBuffer(t2 * e3 * 4)
  }, n2 = {
    destinationWidth: t2,
    destinationHeight: e3,
    targetCanvas: s2
  };
  let o2;
  o2 = v().performance.now(), Go.prototype.copyGLTo2D.call(r2, i2, n2);
  const a2 = v().performance.now() - o2;
  o2 = v().performance.now(), Go.prototype.copyGLTo2DPutImageData.call(r2, i2, n2);
  return a2 > v().performance.now() - o2;
};
var Ma = "precision highp float";
var Pa = "\n    ".concat(Ma, ";\n    varying vec2 vTexCoord;\n    uniform sampler2D uTexture;\n    void main() {\n      gl_FragColor = texture2D(uTexture, vTexCoord);\n    }");
var Ea = ["type"];
var Aa = ["type"];
var ja = new RegExp(Ma, "g");
var Fa = class {
  get type() {
    return this.constructor.type;
  }
  constructor() {
    let t2 = i(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, Ea);
    Object.assign(this, this.constructor.defaults, t2);
  }
  getFragmentSource() {
    return Pa;
  }
  getVertexSource() {
    return "\n    attribute vec2 aPosition;\n    varying vec2 vTexCoord;\n    void main() {\n      vTexCoord = aPosition;\n      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);\n    }";
  }
  createProgram(t2) {
    let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getFragmentSource(), s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.getVertexSource();
    const {
      WebGLProbe: {
        GLPrecision: i2 = "highp"
      }
    } = p();
    "highp" !== i2 && (e3 = e3.replace(ja, Ma.replace("highp", i2)));
    const r2 = t2.createShader(t2.VERTEX_SHADER), n2 = t2.createShader(t2.FRAGMENT_SHADER), o2 = t2.createProgram();
    if (!r2 || !n2 || !o2) throw new h("Vertex, fragment shader or program creation error");
    if (t2.shaderSource(r2, s2), t2.compileShader(r2), !t2.getShaderParameter(r2, t2.COMPILE_STATUS)) throw new h("Vertex shader compile error for ".concat(this.type, ": ").concat(t2.getShaderInfoLog(r2)));
    if (t2.shaderSource(n2, e3), t2.compileShader(n2), !t2.getShaderParameter(n2, t2.COMPILE_STATUS)) throw new h("Fragment shader compile error for ".concat(this.type, ": ").concat(t2.getShaderInfoLog(n2)));
    if (t2.attachShader(o2, r2), t2.attachShader(o2, n2), t2.linkProgram(o2), !t2.getProgramParameter(o2, t2.LINK_STATUS)) throw new h('Shader link error for "'.concat(this.type, '" ').concat(t2.getProgramInfoLog(o2)));
    const a2 = this.getUniformLocations(t2, o2) || {};
    return a2.uStepW = t2.getUniformLocation(o2, "uStepW"), a2.uStepH = t2.getUniformLocation(o2, "uStepH"), {
      program: o2,
      attributeLocations: this.getAttributeLocations(t2, o2),
      uniformLocations: a2
    };
  }
  getAttributeLocations(t2, e3) {
    return {
      aPosition: t2.getAttribLocation(e3, "aPosition")
    };
  }
  getUniformLocations(t2, e3) {
    const s2 = this.constructor.uniformLocations, i2 = {};
    for (let r2 = 0; r2 < s2.length; r2++) i2[s2[r2]] = t2.getUniformLocation(e3, s2[r2]);
    return i2;
  }
  sendAttributeData(t2, e3, s2) {
    const i2 = e3.aPosition, r2 = t2.createBuffer();
    t2.bindBuffer(t2.ARRAY_BUFFER, r2), t2.enableVertexAttribArray(i2), t2.vertexAttribPointer(i2, 2, t2.FLOAT, false, 0, 0), t2.bufferData(t2.ARRAY_BUFFER, s2, t2.STATIC_DRAW);
  }
  _setupFrameBuffer(t2) {
    const e3 = t2.context;
    if (t2.passes > 1) {
      const s2 = t2.destinationWidth, i2 = t2.destinationHeight;
      t2.sourceWidth === s2 && t2.sourceHeight === i2 || (e3.deleteTexture(t2.targetTexture), t2.targetTexture = t2.filterBackend.createTexture(e3, s2, i2)), e3.framebufferTexture2D(e3.FRAMEBUFFER, e3.COLOR_ATTACHMENT0, e3.TEXTURE_2D, t2.targetTexture, 0);
    } else e3.bindFramebuffer(e3.FRAMEBUFFER, null), e3.finish();
  }
  _swapTextures(t2) {
    t2.passes--, t2.pass++;
    const e3 = t2.targetTexture;
    t2.targetTexture = t2.sourceTexture, t2.sourceTexture = e3;
  }
  isNeutralState(t2) {
    return false;
  }
  applyTo(t2) {
    ka(t2) ? (this._setupFrameBuffer(t2), this.applyToWebGL(t2), this._swapTextures(t2)) : this.applyTo2d(t2);
  }
  applyTo2d(t2) {
  }
  getCacheKey() {
    return this.type;
  }
  retrieveShader(t2) {
    const e3 = this.getCacheKey();
    return t2.programCache[e3] || (t2.programCache[e3] = this.createProgram(t2.context)), t2.programCache[e3];
  }
  applyToWebGL(t2) {
    const e3 = t2.context, s2 = this.retrieveShader(t2);
    0 === t2.pass && t2.originalTexture ? e3.bindTexture(e3.TEXTURE_2D, t2.originalTexture) : e3.bindTexture(e3.TEXTURE_2D, t2.sourceTexture), e3.useProgram(s2.program), this.sendAttributeData(e3, s2.attributeLocations, t2.aPosition), e3.uniform1f(s2.uniformLocations.uStepW, 1 / t2.sourceWidth), e3.uniform1f(s2.uniformLocations.uStepH, 1 / t2.sourceHeight), this.sendUniformData(e3, s2.uniformLocations), e3.viewport(0, 0, t2.destinationWidth, t2.destinationHeight), e3.drawArrays(e3.TRIANGLE_STRIP, 0, 4);
  }
  bindAdditionalTexture(t2, e3, s2) {
    t2.activeTexture(s2), t2.bindTexture(t2.TEXTURE_2D, e3), t2.activeTexture(t2.TEXTURE0);
  }
  unbindAdditionalTexture(t2, e3) {
    t2.activeTexture(e3), t2.bindTexture(t2.TEXTURE_2D, null), t2.activeTexture(t2.TEXTURE0);
  }
  sendUniformData(t2, e3) {
  }
  createHelpLayer(t2) {
    if (!t2.helpLayer) {
      const {
        sourceWidth: e3,
        sourceHeight: s2
      } = t2, i2 = vt({
        width: e3,
        height: s2
      });
      t2.helpLayer = i2;
    }
  }
  toObject() {
    const t2 = Object.keys(this.constructor.defaults || {});
    return s({
      type: this.type
    }, t2.reduce((t3, e3) => (t3[e3] = this[e3], t3), {}));
  }
  toJSON() {
    return this.toObject();
  }
  static fromObject(t2, e3) {
    return __async(this, null, function* () {
      return new this(i(t2, Aa));
    });
  }
};
t(Fa, "type", "BaseFilter"), t(Fa, "uniformLocations", []);
var La = {
  multiply: "gl_FragColor.rgb *= uColor.rgb;\n",
  screen: "gl_FragColor.rgb = 1.0 - (1.0 - gl_FragColor.rgb) * (1.0 - uColor.rgb);\n",
  add: "gl_FragColor.rgb += uColor.rgb;\n",
  difference: "gl_FragColor.rgb = abs(gl_FragColor.rgb - uColor.rgb);\n",
  subtract: "gl_FragColor.rgb -= uColor.rgb;\n",
  lighten: "gl_FragColor.rgb = max(gl_FragColor.rgb, uColor.rgb);\n",
  darken: "gl_FragColor.rgb = min(gl_FragColor.rgb, uColor.rgb);\n",
  exclusion: "gl_FragColor.rgb += uColor.rgb - 2.0 * (uColor.rgb * gl_FragColor.rgb);\n",
  overlay: "\n    if (uColor.r < 0.5) {\n      gl_FragColor.r *= 2.0 * uColor.r;\n    } else {\n      gl_FragColor.r = 1.0 - 2.0 * (1.0 - gl_FragColor.r) * (1.0 - uColor.r);\n    }\n    if (uColor.g < 0.5) {\n      gl_FragColor.g *= 2.0 * uColor.g;\n    } else {\n      gl_FragColor.g = 1.0 - 2.0 * (1.0 - gl_FragColor.g) * (1.0 - uColor.g);\n    }\n    if (uColor.b < 0.5) {\n      gl_FragColor.b *= 2.0 * uColor.b;\n    } else {\n      gl_FragColor.b = 1.0 - 2.0 * (1.0 - gl_FragColor.b) * (1.0 - uColor.b);\n    }\n    ",
  tint: "\n    gl_FragColor.rgb *= (1.0 - uColor.a);\n    gl_FragColor.rgb += uColor.rgb;\n    "
};
var Ra = class extends Fa {
  getCacheKey() {
    return "".concat(this.type, "_").concat(this.mode);
  }
  getFragmentSource() {
    return "\n      precision highp float;\n      uniform sampler2D uTexture;\n      uniform vec4 uColor;\n      varying vec2 vTexCoord;\n      void main() {\n        vec4 color = texture2D(uTexture, vTexCoord);\n        gl_FragColor = color;\n        if (color.a > 0.0) {\n          ".concat(La[this.mode], "\n        }\n      }\n      ");
  }
  applyTo2d(t2) {
    let {
      imageData: {
        data: e3
      }
    } = t2;
    const s2 = new qt(this.color).getSource(), i2 = this.alpha, r2 = s2[0] * i2, n2 = s2[1] * i2, o2 = s2[2] * i2, a2 = 1 - i2;
    for (let t3 = 0; t3 < e3.length; t3 += 4) {
      const s3 = e3[t3], i3 = e3[t3 + 1], h2 = e3[t3 + 2];
      let c2, l2, u2;
      switch (this.mode) {
        case "multiply":
          c2 = s3 * r2 / 255, l2 = i3 * n2 / 255, u2 = h2 * o2 / 255;
          break;
        case "screen":
          c2 = 255 - (255 - s3) * (255 - r2) / 255, l2 = 255 - (255 - i3) * (255 - n2) / 255, u2 = 255 - (255 - h2) * (255 - o2) / 255;
          break;
        case "add":
          c2 = s3 + r2, l2 = i3 + n2, u2 = h2 + o2;
          break;
        case "difference":
          c2 = Math.abs(s3 - r2), l2 = Math.abs(i3 - n2), u2 = Math.abs(h2 - o2);
          break;
        case "subtract":
          c2 = s3 - r2, l2 = i3 - n2, u2 = h2 - o2;
          break;
        case "darken":
          c2 = Math.min(s3, r2), l2 = Math.min(i3, n2), u2 = Math.min(h2, o2);
          break;
        case "lighten":
          c2 = Math.max(s3, r2), l2 = Math.max(i3, n2), u2 = Math.max(h2, o2);
          break;
        case "overlay":
          c2 = r2 < 128 ? 2 * s3 * r2 / 255 : 255 - 2 * (255 - s3) * (255 - r2) / 255, l2 = n2 < 128 ? 2 * i3 * n2 / 255 : 255 - 2 * (255 - i3) * (255 - n2) / 255, u2 = o2 < 128 ? 2 * h2 * o2 / 255 : 255 - 2 * (255 - h2) * (255 - o2) / 255;
          break;
        case "exclusion":
          c2 = r2 + s3 - 2 * r2 * s3 / 255, l2 = n2 + i3 - 2 * n2 * i3 / 255, u2 = o2 + h2 - 2 * o2 * h2 / 255;
          break;
        case "tint":
          c2 = r2 + s3 * a2, l2 = n2 + i3 * a2, u2 = o2 + h2 * a2;
      }
      e3[t3] = c2, e3[t3 + 1] = l2, e3[t3 + 2] = u2;
    }
  }
  sendUniformData(t2, e3) {
    const s2 = new qt(this.color).getSource();
    s2[0] = this.alpha * s2[0] / 255, s2[1] = this.alpha * s2[1] / 255, s2[2] = this.alpha * s2[2] / 255, s2[3] = this.alpha, t2.uniform4fv(e3.uColor, s2);
  }
};
t(Ra, "defaults", {
  color: "#F95C63",
  mode: "multiply",
  alpha: 1
}), t(Ra, "type", "BlendColor"), t(Ra, "uniformLocations", ["uColor"]), tt.setClass(Ra);
var Ia = {
  multiply: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform sampler2D uImage;\n    uniform vec4 uColor;\n    varying vec2 vTexCoord;\n    varying vec2 vTexCoord2;\n    void main() {\n      vec4 color = texture2D(uTexture, vTexCoord);\n      vec4 color2 = texture2D(uImage, vTexCoord2);\n      color.rgba *= color2.rgba;\n      gl_FragColor = color;\n    }\n    ",
  mask: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform sampler2D uImage;\n    uniform vec4 uColor;\n    varying vec2 vTexCoord;\n    varying vec2 vTexCoord2;\n    void main() {\n      vec4 color = texture2D(uTexture, vTexCoord);\n      vec4 color2 = texture2D(uImage, vTexCoord2);\n      color.a = color2.a;\n      gl_FragColor = color;\n    }\n    "
};
var Ba = ["type", "image"];
var Xa = class extends Fa {
  getCacheKey() {
    return "".concat(this.type, "_").concat(this.mode);
  }
  getFragmentSource() {
    return Ia[this.mode];
  }
  getVertexSource() {
    return "\n    attribute vec2 aPosition;\n    varying vec2 vTexCoord;\n    varying vec2 vTexCoord2;\n    uniform mat3 uTransformMatrix;\n    void main() {\n      vTexCoord = aPosition;\n      vTexCoord2 = (uTransformMatrix * vec3(aPosition, 1.0)).xy;\n      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);\n    }\n    ";
  }
  applyToWebGL(t2) {
    const e3 = t2.context, s2 = this.createTexture(t2.filterBackend, this.image);
    this.bindAdditionalTexture(e3, s2, e3.TEXTURE1), super.applyToWebGL(t2), this.unbindAdditionalTexture(e3, e3.TEXTURE1);
  }
  createTexture(t2, e3) {
    return t2.getCachedTexture(e3.cacheKey, e3.getElement());
  }
  calculateMatrix() {
    const t2 = this.image, {
      width: e3,
      height: s2
    } = t2.getElement();
    return [1 / t2.scaleX, 0, 0, 0, 1 / t2.scaleY, 0, -t2.left / e3, -t2.top / s2, 1];
  }
  applyTo2d(t2) {
    let {
      imageData: {
        data: e3,
        width: s2,
        height: i2
      },
      filterBackend: {
        resources: r2
      }
    } = t2;
    const n2 = this.image;
    r2.blendImage || (r2.blendImage = pt());
    const o2 = r2.blendImage, a2 = o2.getContext("2d");
    o2.width !== s2 || o2.height !== i2 ? (o2.width = s2, o2.height = i2) : a2.clearRect(0, 0, s2, i2), a2.setTransform(n2.scaleX, 0, 0, n2.scaleY, n2.left, n2.top), a2.drawImage(n2.getElement(), 0, 0, s2, i2);
    const h2 = a2.getImageData(0, 0, s2, i2).data;
    for (let t3 = 0; t3 < e3.length; t3 += 4) {
      const s3 = e3[t3], i3 = e3[t3 + 1], r3 = e3[t3 + 2], n3 = e3[t3 + 3], o3 = h2[t3], a3 = h2[t3 + 1], c2 = h2[t3 + 2], l2 = h2[t3 + 3];
      switch (this.mode) {
        case "multiply":
          e3[t3] = s3 * o3 / 255, e3[t3 + 1] = i3 * a3 / 255, e3[t3 + 2] = r3 * c2 / 255, e3[t3 + 3] = n3 * l2 / 255;
          break;
        case "mask":
          e3[t3 + 3] = l2;
      }
    }
  }
  sendUniformData(t2, e3) {
    const s2 = this.calculateMatrix();
    t2.uniform1i(e3.uImage, 1), t2.uniformMatrix3fv(e3.uTransformMatrix, false, s2);
  }
  toObject() {
    return s(s({}, super.toObject()), {}, {
      image: this.image && this.image.toObject()
    });
  }
  static fromObject(t2, e3) {
    return __async(this, null, function* () {
      let {
        type: r2,
        image: n2
      } = t2, o2 = i(t2, Ba);
      return Zo.fromObject(n2, e3).then((t3) => new this(s(s({}, o2), {}, {
        image: t3
      })));
    });
  }
};
t(Xa, "type", "BlendImage"), t(Xa, "defaults", {
  mode: "multiply",
  alpha: 1
}), t(Xa, "uniformLocations", ["uTransformMatrix", "uImage"]), tt.setClass(Xa);
var Ya = class extends Fa {
  getFragmentSource() {
    return "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform vec2 uDelta;\n    varying vec2 vTexCoord;\n    const float nSamples = 15.0;\n    vec3 v3offset = vec3(12.9898, 78.233, 151.7182);\n    float random(vec3 scale) {\n      /* use the fragment position for a different seed per-pixel */\n      return fract(sin(dot(gl_FragCoord.xyz, scale)) * 43758.5453);\n    }\n    void main() {\n      vec4 color = vec4(0.0);\n      float total = 0.0;\n      float offset = random(v3offset);\n      for (float t = -nSamples; t <= nSamples; t++) {\n        float percent = (t + offset - 0.5) / nSamples;\n        float weight = 1.0 - abs(percent);\n        color += texture2D(uTexture, vTexCoord + uDelta * percent) * weight;\n        total += weight;\n      }\n      gl_FragColor = color / total;\n    }\n  ";
  }
  applyTo(t2) {
    ka(t2) ? (this.aspectRatio = t2.sourceWidth / t2.sourceHeight, t2.passes++, this._setupFrameBuffer(t2), this.horizontal = true, this.applyToWebGL(t2), this._swapTextures(t2), this._setupFrameBuffer(t2), this.horizontal = false, this.applyToWebGL(t2), this._swapTextures(t2)) : this.applyTo2d(t2);
  }
  applyTo2d(t2) {
    t2.imageData = this.simpleBlur(t2);
  }
  simpleBlur(t2) {
    let {
      ctx: e3,
      imageData: s2,
      filterBackend: {
        resources: i2
      }
    } = t2;
    const {
      width: r2,
      height: n2
    } = s2;
    i2.blurLayer1 || (i2.blurLayer1 = pt(), i2.blurLayer2 = pt());
    const o2 = i2.blurLayer1, a2 = i2.blurLayer2;
    o2.width === r2 && o2.height === n2 || (a2.width = o2.width = r2, a2.height = o2.height = n2);
    const h2 = o2.getContext("2d"), c2 = a2.getContext("2d"), l2 = 15, u2 = 0.06 * this.blur * 0.5;
    let d2, g2, f2, p2;
    for (h2.putImageData(s2, 0, 0), c2.clearRect(0, 0, r2, n2), p2 = -15; p2 <= l2; p2++) d2 = (Math.random() - 0.5) / 4, g2 = p2 / l2, f2 = u2 * g2 * r2 + d2, c2.globalAlpha = 1 - Math.abs(g2), c2.drawImage(o2, f2, d2), h2.drawImage(a2, 0, 0), c2.globalAlpha = 1, c2.clearRect(0, 0, a2.width, a2.height);
    for (p2 = -15; p2 <= l2; p2++) d2 = (Math.random() - 0.5) / 4, g2 = p2 / l2, f2 = u2 * g2 * n2 + d2, c2.globalAlpha = 1 - Math.abs(g2), c2.drawImage(o2, d2, f2), h2.drawImage(a2, 0, 0), c2.globalAlpha = 1, c2.clearRect(0, 0, a2.width, a2.height);
    e3.drawImage(o2, 0, 0);
    const m2 = e3.getImageData(0, 0, o2.width, o2.height);
    return h2.globalAlpha = 1, h2.clearRect(0, 0, o2.width, o2.height), m2;
  }
  sendUniformData(t2, e3) {
    const s2 = this.chooseRightDelta();
    t2.uniform2fv(e3.uDelta, s2);
  }
  isNeutralState() {
    return 0 === this.blur;
  }
  chooseRightDelta() {
    let t2 = 1;
    const e3 = [0, 0];
    this.horizontal ? this.aspectRatio > 1 && (t2 = 1 / this.aspectRatio) : this.aspectRatio < 1 && (t2 = this.aspectRatio);
    const s2 = t2 * this.blur * 0.12;
    return this.horizontal ? e3[0] = s2 : e3[1] = s2, e3;
  }
};
t(Ya, "type", "Blur"), t(Ya, "defaults", {
  blur: 0
}), t(Ya, "uniformLocations", ["uDelta"]), tt.setClass(Ya);
var Wa = class extends Fa {
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uBrightness;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    color.rgb += uBrightness;\n    gl_FragColor = color;\n  }\n";
  }
  applyTo2d(t2) {
    let {
      imageData: {
        data: e3
      }
    } = t2;
    const s2 = Math.round(255 * this.brightness);
    for (let t3 = 0; t3 < e3.length; t3 += 4) e3[t3] += s2, e3[t3 + 1] += s2, e3[t3 + 2] += s2;
  }
  isNeutralState() {
    return 0 === this.brightness;
  }
  sendUniformData(t2, e3) {
    t2.uniform1f(e3.uBrightness, this.brightness);
  }
};
t(Wa, "type", "Brightness"), t(Wa, "defaults", {
  brightness: 0
}), t(Wa, "uniformLocations", ["uBrightness"]), tt.setClass(Wa);
var Va = {
  matrix: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  colorsOnly: true
};
var za = class extends Fa {
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  varying vec2 vTexCoord;\n  uniform mat4 uColorMatrix;\n  uniform vec4 uConstants;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    color *= uColorMatrix;\n    color += uConstants;\n    gl_FragColor = color;\n  }";
  }
  applyTo2d(t2) {
    const e3 = t2.imageData.data, s2 = this.matrix, i2 = this.colorsOnly;
    for (let t3 = 0; t3 < e3.length; t3 += 4) {
      const r2 = e3[t3], n2 = e3[t3 + 1], o2 = e3[t3 + 2];
      if (e3[t3] = r2 * s2[0] + n2 * s2[1] + o2 * s2[2] + 255 * s2[4], e3[t3 + 1] = r2 * s2[5] + n2 * s2[6] + o2 * s2[7] + 255 * s2[9], e3[t3 + 2] = r2 * s2[10] + n2 * s2[11] + o2 * s2[12] + 255 * s2[14], !i2) {
        const i3 = e3[t3 + 3];
        e3[t3] += i3 * s2[3], e3[t3 + 1] += i3 * s2[8], e3[t3 + 2] += i3 * s2[13], e3[t3 + 3] = r2 * s2[15] + n2 * s2[16] + o2 * s2[17] + i3 * s2[18] + 255 * s2[19];
      }
    }
  }
  sendUniformData(t2, e3) {
    const s2 = this.matrix, i2 = [s2[0], s2[1], s2[2], s2[3], s2[5], s2[6], s2[7], s2[8], s2[10], s2[11], s2[12], s2[13], s2[15], s2[16], s2[17], s2[18]], r2 = [s2[4], s2[9], s2[14], s2[19]];
    t2.uniformMatrix4fv(e3.uColorMatrix, false, i2), t2.uniform4fv(e3.uConstants, r2);
  }
  toObject() {
    return s(s({}, super.toObject()), {}, {
      matrix: [...this.matrix]
    });
  }
};
function Ha(e3, s2) {
  var i2;
  const r2 = (t(i2 = class extends za {
    toObject() {
      return {
        type: this.type,
        colorsOnly: this.colorsOnly
      };
    }
  }, "type", e3), t(i2, "defaults", {
    colorsOnly: false,
    matrix: s2
  }), i2);
  return tt.setClass(r2, e3), r2;
}
t(za, "type", "ColorMatrix"), t(za, "defaults", Va), t(za, "uniformLocations", ["uColorMatrix", "uConstants"]), tt.setClass(za);
var Ga = Ha("Brownie", [0.5997, 0.34553, -0.27082, 0, 0.186, -0.0377, 0.86095, 0.15059, 0, -0.1449, 0.24113, -0.07441, 0.44972, 0, -0.02965, 0, 0, 0, 1, 0]);
var Na = Ha("Vintage", [0.62793, 0.32021, -0.03965, 0, 0.03784, 0.02578, 0.64411, 0.03259, 0, 0.02926, 0.0466, -0.08512, 0.52416, 0, 0.02023, 0, 0, 0, 1, 0]);
var Ua = Ha("Kodachrome", [1.12855, -0.39673, -0.03992, 0, 0.24991, -0.16404, 1.08352, -0.05498, 0, 0.09698, -0.16786, -0.56034, 1.60148, 0, 0.13972, 0, 0, 0, 1, 0]);
var qa = Ha("Technicolor", [1.91252, -0.85453, -0.09155, 0, 0.04624, -0.30878, 1.76589, -0.10601, 0, -0.27589, -0.2311, -0.75018, 1.84759, 0, 0.12137, 0, 0, 0, 1, 0]);
var Ka = Ha("Polaroid", [1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122, 0, 0, -0.016, -0.016, 1.483, 0, 0, 0, 0, 0, 1, 0]);
var Ja = Ha("Sepia", [0.393, 0.769, 0.189, 0, 0, 0.349, 0.686, 0.168, 0, 0, 0.272, 0.534, 0.131, 0, 0, 0, 0, 0, 1, 0]);
var Qa = Ha("BlackWhite", [1.5, 1.5, 1.5, 0, -1, 1.5, 1.5, 1.5, 0, -1, 1.5, 1.5, 1.5, 0, -1, 0, 0, 0, 1, 0]);
var Za = class extends Fa {
  constructor() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    super(t2), this.subFilters = t2.subFilters || [];
  }
  applyTo(t2) {
    ka(t2) && (t2.passes += this.subFilters.length - 1), this.subFilters.forEach((e3) => {
      e3.applyTo(t2);
    });
  }
  toObject() {
    return {
      type: this.type,
      subFilters: this.subFilters.map((t2) => t2.toObject())
    };
  }
  isNeutralState() {
    return !this.subFilters.some((t2) => !t2.isNeutralState());
  }
  static fromObject(t2, e3) {
    return Promise.all((t2.subFilters || []).map((t3) => tt.getClass(t3.type).fromObject(t3, e3))).then((t3) => new this({
      subFilters: t3
    }));
  }
};
t(Za, "type", "Composed"), tt.setClass(Za);
var $a = class extends Fa {
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uContrast;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    float contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));\n    color.rgb = contrastF * (color.rgb - 0.5) + 0.5;\n    gl_FragColor = color;\n  }";
  }
  isNeutralState() {
    return 0 === this.contrast;
  }
  applyTo2d(t2) {
    let {
      imageData: {
        data: e3
      }
    } = t2;
    const s2 = Math.floor(255 * this.contrast), i2 = 259 * (s2 + 255) / (255 * (259 - s2));
    for (let t3 = 0; t3 < e3.length; t3 += 4) e3[t3] = i2 * (e3[t3] - 128) + 128, e3[t3 + 1] = i2 * (e3[t3 + 1] - 128) + 128, e3[t3 + 2] = i2 * (e3[t3 + 2] - 128) + 128;
  }
  sendUniformData(t2, e3) {
    t2.uniform1f(e3.uContrast, this.contrast);
  }
};
t($a, "type", "Contrast"), t($a, "defaults", {
  contrast: 0
}), t($a, "uniformLocations", ["uContrast"]), tt.setClass($a);
var th = {
  Convolute_3_1: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[9];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 0);\n      for (float h = 0.0; h < 3.0; h+=1.0) {\n        for (float w = 0.0; w < 3.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 1), uStepH * (h - 1));\n          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 3.0 + w)];\n        }\n      }\n      gl_FragColor = color;\n    }\n    ",
  Convolute_3_0: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[9];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 1);\n      for (float h = 0.0; h < 3.0; h+=1.0) {\n        for (float w = 0.0; w < 3.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 1.0), uStepH * (h - 1.0));\n          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 3.0 + w)];\n        }\n      }\n      float alpha = texture2D(uTexture, vTexCoord).a;\n      gl_FragColor = color;\n      gl_FragColor.a = alpha;\n    }\n    ",
  Convolute_5_1: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[25];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 0);\n      for (float h = 0.0; h < 5.0; h+=1.0) {\n        for (float w = 0.0; w < 5.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));\n          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 5.0 + w)];\n        }\n      }\n      gl_FragColor = color;\n    }\n    ",
  Convolute_5_0: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[25];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 1);\n      for (float h = 0.0; h < 5.0; h+=1.0) {\n        for (float w = 0.0; w < 5.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));\n          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 5.0 + w)];\n        }\n      }\n      float alpha = texture2D(uTexture, vTexCoord).a;\n      gl_FragColor = color;\n      gl_FragColor.a = alpha;\n    }\n    ",
  Convolute_7_1: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[49];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 0);\n      for (float h = 0.0; h < 7.0; h+=1.0) {\n        for (float w = 0.0; w < 7.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));\n          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 7.0 + w)];\n        }\n      }\n      gl_FragColor = color;\n    }\n    ",
  Convolute_7_0: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[49];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 1);\n      for (float h = 0.0; h < 7.0; h+=1.0) {\n        for (float w = 0.0; w < 7.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));\n          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 7.0 + w)];\n        }\n      }\n      float alpha = texture2D(uTexture, vTexCoord).a;\n      gl_FragColor = color;\n      gl_FragColor.a = alpha;\n    }\n    ",
  Convolute_9_1: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[81];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 0);\n      for (float h = 0.0; h < 9.0; h+=1.0) {\n        for (float w = 0.0; w < 9.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));\n          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 9.0 + w)];\n        }\n      }\n      gl_FragColor = color;\n    }\n    ",
  Convolute_9_0: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[81];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 1);\n      for (float h = 0.0; h < 9.0; h+=1.0) {\n        for (float w = 0.0; w < 9.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));\n          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 9.0 + w)];\n        }\n      }\n      float alpha = texture2D(uTexture, vTexCoord).a;\n      gl_FragColor = color;\n      gl_FragColor.a = alpha;\n    }\n    "
};
var eh = class extends Fa {
  getCacheKey() {
    return "".concat(this.type, "_").concat(Math.sqrt(this.matrix.length), "_").concat(this.opaque ? 1 : 0);
  }
  getFragmentSource() {
    return th[this.getCacheKey()];
  }
  applyTo2d(t2) {
    const e3 = t2.imageData, s2 = e3.data, i2 = this.matrix, r2 = Math.round(Math.sqrt(i2.length)), n2 = Math.floor(r2 / 2), o2 = e3.width, a2 = e3.height, h2 = t2.ctx.createImageData(o2, a2), c2 = h2.data, l2 = this.opaque ? 1 : 0;
    let u2, d2, g2, f2, p2, m2, v2, y2, _2, x2, C2, b2, w2;
    for (C2 = 0; C2 < a2; C2++) for (x2 = 0; x2 < o2; x2++) {
      for (p2 = 4 * (C2 * o2 + x2), u2 = 0, d2 = 0, g2 = 0, f2 = 0, w2 = 0; w2 < r2; w2++) for (b2 = 0; b2 < r2; b2++) v2 = C2 + w2 - n2, m2 = x2 + b2 - n2, v2 < 0 || v2 >= a2 || m2 < 0 || m2 >= o2 || (y2 = 4 * (v2 * o2 + m2), _2 = i2[w2 * r2 + b2], u2 += s2[y2] * _2, d2 += s2[y2 + 1] * _2, g2 += s2[y2 + 2] * _2, l2 || (f2 += s2[y2 + 3] * _2));
      c2[p2] = u2, c2[p2 + 1] = d2, c2[p2 + 2] = g2, c2[p2 + 3] = l2 ? s2[p2 + 3] : f2;
    }
    t2.imageData = h2;
  }
  sendUniformData(t2, e3) {
    t2.uniform1fv(e3.uMatrix, this.matrix);
  }
  toObject() {
    return s(s({}, super.toObject()), {}, {
      opaque: this.opaque,
      matrix: [...this.matrix]
    });
  }
};
t(eh, "type", "Convolute"), t(eh, "defaults", {
  opaque: false,
  matrix: [0, 0, 0, 0, 1, 0, 0, 0, 0]
}), t(eh, "uniformLocations", ["uMatrix", "uOpaque", "uHalfSize", "uSize"]), tt.setClass(eh);
var sh = "Gamma";
var ih = class extends Fa {
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform vec3 uGamma;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    vec3 correction = (1.0 / uGamma);\n    color.r = pow(color.r, correction.r);\n    color.g = pow(color.g, correction.g);\n    color.b = pow(color.b, correction.b);\n    gl_FragColor = color;\n    gl_FragColor.rgb *= color.a;\n  }\n";
  }
  constructor() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    super(t2), this.gamma = t2.gamma || this.constructor.defaults.gamma.concat();
  }
  applyTo2d(t2) {
    let {
      imageData: {
        data: e3
      }
    } = t2;
    const s2 = this.gamma, i2 = 1 / s2[0], r2 = 1 / s2[1], n2 = 1 / s2[2];
    this.rgbValues || (this.rgbValues = {
      r: new Uint8Array(256),
      g: new Uint8Array(256),
      b: new Uint8Array(256)
    });
    const o2 = this.rgbValues;
    for (let t3 = 0; t3 < 256; t3++) o2.r[t3] = 255 * Math.pow(t3 / 255, i2), o2.g[t3] = 255 * Math.pow(t3 / 255, r2), o2.b[t3] = 255 * Math.pow(t3 / 255, n2);
    for (let t3 = 0; t3 < e3.length; t3 += 4) e3[t3] = o2.r[e3[t3]], e3[t3 + 1] = o2.g[e3[t3 + 1]], e3[t3 + 2] = o2.b[e3[t3 + 2]];
  }
  sendUniformData(t2, e3) {
    t2.uniform3fv(e3.uGamma, this.gamma);
  }
  isNeutralState() {
    const {
      gamma: t2
    } = this;
    return 1 === t2[0] && 1 === t2[1] && 1 === t2[2];
  }
  toObject() {
    return {
      type: sh,
      gamma: this.gamma.concat()
    };
  }
};
t(ih, "type", sh), t(ih, "defaults", {
  gamma: [1, 1, 1]
}), t(ih, "uniformLocations", ["uGamma"]), tt.setClass(ih);
var rh = {
  average: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = texture2D(uTexture, vTexCoord);\n      float average = (color.r + color.b + color.g) / 3.0;\n      gl_FragColor = vec4(average, average, average, color.a);\n    }\n    ",
  lightness: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform int uMode;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 col = texture2D(uTexture, vTexCoord);\n      float average = (max(max(col.r, col.g),col.b) + min(min(col.r, col.g),col.b)) / 2.0;\n      gl_FragColor = vec4(average, average, average, col.a);\n    }\n    ",
  luminosity: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform int uMode;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 col = texture2D(uTexture, vTexCoord);\n      float average = 0.21 * col.r + 0.72 * col.g + 0.07 * col.b;\n      gl_FragColor = vec4(average, average, average, col.a);\n    }\n    "
};
var nh = class extends Fa {
  applyTo2d(t2) {
    let {
      imageData: {
        data: e3
      }
    } = t2;
    for (let t3, s2 = 0; s2 < e3.length; s2 += 4) {
      const i2 = e3[s2], r2 = e3[s2 + 1], n2 = e3[s2 + 2];
      switch (this.mode) {
        case "average":
          t3 = (i2 + r2 + n2) / 3;
          break;
        case "lightness":
          t3 = (Math.min(i2, r2, n2) + Math.max(i2, r2, n2)) / 2;
          break;
        case "luminosity":
          t3 = 0.21 * i2 + 0.72 * r2 + 0.07 * n2;
      }
      e3[s2 + 2] = e3[s2 + 1] = e3[s2] = t3;
    }
  }
  getCacheKey() {
    return "".concat(this.type, "_").concat(this.mode);
  }
  getFragmentSource() {
    return rh[this.mode];
  }
  sendUniformData(t2, e3) {
    t2.uniform1i(e3.uMode, 1);
  }
  isNeutralState() {
    return false;
  }
};
t(nh, "type", "Grayscale"), t(nh, "defaults", {
  mode: "average"
}), t(nh, "uniformLocations", ["uMode"]), tt.setClass(nh);
var oh = s(s({}, Va), {}, {
  rotation: 0
});
var ah = class extends za {
  calculateMatrix() {
    const t2 = this.rotation * Math.PI, e3 = rt(t2), s2 = nt(t2), i2 = 1 / 3, r2 = Math.sqrt(i2) * s2, n2 = 1 - e3;
    this.matrix = [e3 + n2 / 3, i2 * n2 - r2, i2 * n2 + r2, 0, 0, i2 * n2 + r2, e3 + i2 * n2, i2 * n2 - r2, 0, 0, i2 * n2 - r2, i2 * n2 + r2, e3 + i2 * n2, 0, 0, 0, 0, 0, 1, 0];
  }
  isNeutralState() {
    return 0 === this.rotation;
  }
  applyTo(t2) {
    this.calculateMatrix(), super.applyTo(t2);
  }
  toObject() {
    return {
      type: this.type,
      rotation: this.rotation
    };
  }
};
t(ah, "type", "HueRotation"), t(ah, "defaults", oh), tt.setClass(ah);
var hh = class extends Fa {
  applyTo2d(t2) {
    let {
      imageData: {
        data: e3
      }
    } = t2;
    for (let t3 = 0; t3 < e3.length; t3 += 4) e3[t3] = 255 - e3[t3], e3[t3 + 1] = 255 - e3[t3 + 1], e3[t3 + 2] = 255 - e3[t3 + 2], this.alpha && (e3[t3 + 3] = 255 - e3[t3 + 3]);
  }
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform int uInvert;\n  uniform int uAlpha;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    if (uInvert == 1) {\n      if (uAlpha == 1) {\n        gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,1.0 -color.a);\n      } else {\n        gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,color.a);\n      }\n    } else {\n      gl_FragColor = color;\n    }\n  }\n";
  }
  isNeutralState() {
    return !this.invert;
  }
  sendUniformData(t2, e3) {
    t2.uniform1i(e3.uInvert, Number(this.invert)), t2.uniform1i(e3.uAlpha, Number(this.alpha));
  }
};
t(hh, "type", "Invert"), t(hh, "defaults", {
  alpha: false,
  invert: true
}), t(hh, "uniformLocations", ["uInvert", "uAlpha"]), tt.setClass(hh);
var ch = class extends Fa {
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uStepH;\n  uniform float uNoise;\n  uniform float uSeed;\n  varying vec2 vTexCoord;\n  float rand(vec2 co, float seed, float vScale) {\n    return fract(sin(dot(co.xy * vScale ,vec2(12.9898 , 78.233))) * 43758.5453 * (seed + 0.01) / 2.0);\n  }\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    color.rgb += (0.5 - rand(vTexCoord, uSeed, 0.1 / uStepH)) * uNoise;\n    gl_FragColor = color;\n  }\n";
  }
  applyTo2d(t2) {
    let {
      imageData: {
        data: e3
      }
    } = t2;
    const s2 = this.noise;
    for (let t3 = 0; t3 < e3.length; t3 += 4) {
      const i2 = (0.5 - Math.random()) * s2;
      e3[t3] += i2, e3[t3 + 1] += i2, e3[t3 + 2] += i2;
    }
  }
  sendUniformData(t2, e3) {
    t2.uniform1f(e3.uNoise, this.noise / 255), t2.uniform1f(e3.uSeed, Math.random());
  }
  isNeutralState() {
    return 0 === this.noise;
  }
};
t(ch, "type", "Noise"), t(ch, "defaults", {
  noise: 0
}), t(ch, "uniformLocations", ["uNoise", "uSeed"]), tt.setClass(ch);
var lh = class extends Fa {
  applyTo2d(t2) {
    let {
      imageData: {
        data: e3,
        width: s2,
        height: i2
      }
    } = t2;
    for (let t3 = 0; t3 < i2; t3 += this.blocksize) for (let r2 = 0; r2 < s2; r2 += this.blocksize) {
      const n2 = 4 * t3 * s2 + 4 * r2, o2 = e3[n2], a2 = e3[n2 + 1], h2 = e3[n2 + 2], c2 = e3[n2 + 3];
      for (let n3 = t3; n3 < Math.min(t3 + this.blocksize, i2); n3++) for (let t4 = r2; t4 < Math.min(r2 + this.blocksize, s2); t4++) {
        const i3 = 4 * n3 * s2 + 4 * t4;
        e3[i3] = o2, e3[i3 + 1] = a2, e3[i3 + 2] = h2, e3[i3 + 3] = c2;
      }
    }
  }
  isNeutralState() {
    return 1 === this.blocksize;
  }
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uBlocksize;\n  uniform float uStepW;\n  uniform float uStepH;\n  varying vec2 vTexCoord;\n  void main() {\n    float blockW = uBlocksize * uStepW;\n    float blockH = uBlocksize * uStepH;\n    int posX = int(vTexCoord.x / blockW);\n    int posY = int(vTexCoord.y / blockH);\n    float fposX = float(posX);\n    float fposY = float(posY);\n    vec2 squareCoords = vec2(fposX * blockW, fposY * blockH);\n    vec4 color = texture2D(uTexture, squareCoords);\n    gl_FragColor = color;\n  }\n";
  }
  sendUniformData(t2, e3) {
    t2.uniform1f(e3.uBlocksize, this.blocksize);
  }
};
t(lh, "type", "Pixelate"), t(lh, "defaults", {
  blocksize: 4
}), t(lh, "uniformLocations", ["uBlocksize"]), tt.setClass(lh);
var uh = class extends Fa {
  getFragmentSource() {
    return "\nprecision highp float;\nuniform sampler2D uTexture;\nuniform vec4 uLow;\nuniform vec4 uHigh;\nvarying vec2 vTexCoord;\nvoid main() {\n  gl_FragColor = texture2D(uTexture, vTexCoord);\n  if(all(greaterThan(gl_FragColor.rgb,uLow.rgb)) && all(greaterThan(uHigh.rgb,gl_FragColor.rgb))) {\n    gl_FragColor.a = 0.0;\n  }\n}\n";
  }
  applyTo2d(t2) {
    let {
      imageData: {
        data: e3
      }
    } = t2;
    const s2 = 255 * this.distance, i2 = new qt(this.color).getSource(), r2 = [i2[0] - s2, i2[1] - s2, i2[2] - s2], n2 = [i2[0] + s2, i2[1] + s2, i2[2] + s2];
    for (let t3 = 0; t3 < e3.length; t3 += 4) {
      const s3 = e3[t3], i3 = e3[t3 + 1], o2 = e3[t3 + 2];
      s3 > r2[0] && i3 > r2[1] && o2 > r2[2] && s3 < n2[0] && i3 < n2[1] && o2 < n2[2] && (e3[t3 + 3] = 0);
    }
  }
  sendUniformData(t2, e3) {
    const s2 = new qt(this.color).getSource(), i2 = this.distance, r2 = [0 + s2[0] / 255 - i2, 0 + s2[1] / 255 - i2, 0 + s2[2] / 255 - i2, 1], n2 = [s2[0] / 255 + i2, s2[1] / 255 + i2, s2[2] / 255 + i2, 1];
    t2.uniform4fv(e3.uLow, r2), t2.uniform4fv(e3.uHigh, n2);
  }
};
t(uh, "type", "RemoveColor"), t(uh, "defaults", {
  color: "#FFFFFF",
  distance: 0.02,
  useAlpha: false
}), t(uh, "uniformLocations", ["uLow", "uHigh"]), tt.setClass(uh);
var dh = class extends Fa {
  sendUniformData(t2, e3) {
    t2.uniform2fv(e3.uDelta, this.horizontal ? [1 / this.width, 0] : [0, 1 / this.height]), t2.uniform1fv(e3.uTaps, this.taps);
  }
  getFilterWindow() {
    const t2 = this.tempScale;
    return Math.ceil(this.lanczosLobes / t2);
  }
  getCacheKey() {
    const t2 = this.getFilterWindow();
    return "".concat(this.type, "_").concat(t2);
  }
  getFragmentSource() {
    const t2 = this.getFilterWindow();
    return this.generateShader(t2);
  }
  getTaps() {
    const t2 = this.lanczosCreate(this.lanczosLobes), e3 = this.tempScale, s2 = this.getFilterWindow(), i2 = new Array(s2);
    for (let r2 = 1; r2 <= s2; r2++) i2[r2 - 1] = t2(r2 * e3);
    return i2;
  }
  generateShader(t2) {
    const e3 = new Array(t2);
    for (let s2 = 1; s2 <= t2; s2++) e3[s2 - 1] = "".concat(s2, ".0 * uDelta");
    return "\n      precision highp float;\n      uniform sampler2D uTexture;\n      uniform vec2 uDelta;\n      varying vec2 vTexCoord;\n      uniform float uTaps[".concat(t2, "];\n      void main() {\n        vec4 color = texture2D(uTexture, vTexCoord);\n        float sum = 1.0;\n        ").concat(e3.map((t3, e4) => "\n              color += texture2D(uTexture, vTexCoord + ".concat(t3, ") * uTaps[").concat(e4, "] + texture2D(uTexture, vTexCoord - ").concat(t3, ") * uTaps[").concat(e4, "];\n              sum += 2.0 * uTaps[").concat(e4, "];\n            ")).join("\n"), "\n        gl_FragColor = color / sum;\n      }\n    ");
  }
  applyToForWebgl(t2) {
    t2.passes++, this.width = t2.sourceWidth, this.horizontal = true, this.dW = Math.round(this.width * this.scaleX), this.dH = t2.sourceHeight, this.tempScale = this.dW / this.width, this.taps = this.getTaps(), t2.destinationWidth = this.dW, super.applyTo(t2), t2.sourceWidth = t2.destinationWidth, this.height = t2.sourceHeight, this.horizontal = false, this.dH = Math.round(this.height * this.scaleY), this.tempScale = this.dH / this.height, this.taps = this.getTaps(), t2.destinationHeight = this.dH, super.applyTo(t2), t2.sourceHeight = t2.destinationHeight;
  }
  applyTo(t2) {
    ka(t2) ? this.applyToForWebgl(t2) : this.applyTo2d(t2);
  }
  isNeutralState() {
    return 1 === this.scaleX && 1 === this.scaleY;
  }
  lanczosCreate(t2) {
    return (e3) => {
      if (e3 >= t2 || e3 <= -t2) return 0;
      if (e3 < 11920929e-14 && e3 > -11920929e-14) return 1;
      const s2 = (e3 *= Math.PI) / t2;
      return Math.sin(e3) / e3 * Math.sin(s2) / s2;
    };
  }
  applyTo2d(t2) {
    const e3 = t2.imageData, s2 = this.scaleX, i2 = this.scaleY;
    this.rcpScaleX = 1 / s2, this.rcpScaleY = 1 / i2;
    const r2 = e3.width, n2 = e3.height, o2 = Math.round(r2 * s2), a2 = Math.round(n2 * i2);
    let h2;
    h2 = "sliceHack" === this.resizeType ? this.sliceByTwo(t2, r2, n2, o2, a2) : "hermite" === this.resizeType ? this.hermiteFastResize(t2, r2, n2, o2, a2) : "bilinear" === this.resizeType ? this.bilinearFiltering(t2, r2, n2, o2, a2) : "lanczos" === this.resizeType ? this.lanczosResize(t2, r2, n2, o2, a2) : new ImageData(o2, a2), t2.imageData = h2;
  }
  sliceByTwo(t2, e3, s2, i2, r2) {
    const n2 = t2.imageData, o2 = 0.5;
    let a2 = false, h2 = false, c2 = e3 * o2, l2 = s2 * o2;
    const u2 = t2.filterBackend.resources;
    let d2 = 0, g2 = 0;
    const f2 = e3;
    let p2 = 0;
    u2.sliceByTwo || (u2.sliceByTwo = pt());
    const m2 = u2.sliceByTwo;
    (m2.width < 1.5 * e3 || m2.height < s2) && (m2.width = 1.5 * e3, m2.height = s2);
    const v2 = m2.getContext("2d");
    for (v2.clearRect(0, 0, 1.5 * e3, s2), v2.putImageData(n2, 0, 0), i2 = Math.floor(i2), r2 = Math.floor(r2); !a2 || !h2; ) e3 = c2, s2 = l2, i2 < Math.floor(c2 * o2) ? c2 = Math.floor(c2 * o2) : (c2 = i2, a2 = true), r2 < Math.floor(l2 * o2) ? l2 = Math.floor(l2 * o2) : (l2 = r2, h2 = true), v2.drawImage(m2, d2, g2, e3, s2, f2, p2, c2, l2), d2 = f2, g2 = p2, p2 += l2;
    return v2.getImageData(d2, g2, i2, r2);
  }
  lanczosResize(t2, e3, s2, i2, r2) {
    const n2 = t2.imageData.data, o2 = t2.ctx.createImageData(i2, r2), a2 = o2.data, h2 = this.lanczosCreate(this.lanczosLobes), c2 = this.rcpScaleX, l2 = this.rcpScaleY, u2 = 2 / this.rcpScaleX, d2 = 2 / this.rcpScaleY, g2 = Math.ceil(c2 * this.lanczosLobes / 2), f2 = Math.ceil(l2 * this.lanczosLobes / 2), p2 = {}, m2 = {
      x: 0,
      y: 0
    }, v2 = {
      x: 0,
      y: 0
    };
    return function t3(y2) {
      let _2, x2, C2, b2, w2, S2, T2, O2, k2, D2, M2;
      for (m2.x = (y2 + 0.5) * c2, v2.x = Math.floor(m2.x), _2 = 0; _2 < r2; _2++) {
        for (m2.y = (_2 + 0.5) * l2, v2.y = Math.floor(m2.y), w2 = 0, S2 = 0, T2 = 0, O2 = 0, k2 = 0, x2 = v2.x - g2; x2 <= v2.x + g2; x2++) if (!(x2 < 0 || x2 >= e3)) {
          D2 = Math.floor(1e3 * Math.abs(x2 - m2.x)), p2[D2] || (p2[D2] = {});
          for (let t4 = v2.y - f2; t4 <= v2.y + f2; t4++) t4 < 0 || t4 >= s2 || (M2 = Math.floor(1e3 * Math.abs(t4 - m2.y)), p2[D2][M2] || (p2[D2][M2] = h2(Math.sqrt(Math.pow(D2 * u2, 2) + Math.pow(M2 * d2, 2)) / 1e3)), C2 = p2[D2][M2], C2 > 0 && (b2 = 4 * (t4 * e3 + x2), w2 += C2, S2 += C2 * n2[b2], T2 += C2 * n2[b2 + 1], O2 += C2 * n2[b2 + 2], k2 += C2 * n2[b2 + 3]));
        }
        b2 = 4 * (_2 * i2 + y2), a2[b2] = S2 / w2, a2[b2 + 1] = T2 / w2, a2[b2 + 2] = O2 / w2, a2[b2 + 3] = k2 / w2;
      }
      return ++y2 < i2 ? t3(y2) : o2;
    }(0);
  }
  bilinearFiltering(t2, e3, s2, i2, r2) {
    let n2, o2, a2, h2, c2, l2, u2, d2, g2, f2, p2, m2, v2, y2 = 0;
    const _2 = this.rcpScaleX, x2 = this.rcpScaleY, C2 = 4 * (e3 - 1), b2 = t2.imageData.data, w2 = t2.ctx.createImageData(i2, r2), S2 = w2.data;
    for (u2 = 0; u2 < r2; u2++) for (d2 = 0; d2 < i2; d2++) for (c2 = Math.floor(_2 * d2), l2 = Math.floor(x2 * u2), g2 = _2 * d2 - c2, f2 = x2 * u2 - l2, v2 = 4 * (l2 * e3 + c2), p2 = 0; p2 < 4; p2++) n2 = b2[v2 + p2], o2 = b2[v2 + 4 + p2], a2 = b2[v2 + C2 + p2], h2 = b2[v2 + C2 + 4 + p2], m2 = n2 * (1 - g2) * (1 - f2) + o2 * g2 * (1 - f2) + a2 * f2 * (1 - g2) + h2 * g2 * f2, S2[y2++] = m2;
    return w2;
  }
  hermiteFastResize(t2, e3, s2, i2, r2) {
    const n2 = this.rcpScaleX, o2 = this.rcpScaleY, a2 = Math.ceil(n2 / 2), h2 = Math.ceil(o2 / 2), c2 = t2.imageData.data, l2 = t2.ctx.createImageData(i2, r2), u2 = l2.data;
    for (let t3 = 0; t3 < r2; t3++) for (let s3 = 0; s3 < i2; s3++) {
      const r3 = 4 * (s3 + t3 * i2);
      let l3 = 0, d2 = 0, g2 = 0, f2 = 0, p2 = 0, m2 = 0, v2 = 0;
      const y2 = (t3 + 0.5) * o2;
      for (let i3 = Math.floor(t3 * o2); i3 < (t3 + 1) * o2; i3++) {
        const t4 = Math.abs(y2 - (i3 + 0.5)) / h2, r4 = (s3 + 0.5) * n2, o3 = t4 * t4;
        for (let t5 = Math.floor(s3 * n2); t5 < (s3 + 1) * n2; t5++) {
          let s4 = Math.abs(r4 - (t5 + 0.5)) / a2;
          const n3 = Math.sqrt(o3 + s4 * s4);
          n3 > 1 && n3 < -1 || (l3 = 2 * n3 * n3 * n3 - 3 * n3 * n3 + 1, l3 > 0 && (s4 = 4 * (t5 + i3 * e3), v2 += l3 * c2[s4 + 3], g2 += l3, c2[s4 + 3] < 255 && (l3 = l3 * c2[s4 + 3] / 250), f2 += l3 * c2[s4], p2 += l3 * c2[s4 + 1], m2 += l3 * c2[s4 + 2], d2 += l3));
        }
      }
      u2[r3] = f2 / d2, u2[r3 + 1] = p2 / d2, u2[r3 + 2] = m2 / d2, u2[r3 + 3] = v2 / g2;
    }
    return l2;
  }
};
t(dh, "type", "Resize"), t(dh, "defaults", {
  resizeType: "hermite",
  scaleX: 1,
  scaleY: 1,
  lanczosLobes: 3
}), t(dh, "uniformLocations", ["uDelta", "uTaps"]), tt.setClass(dh);
var gh = class extends Fa {
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uSaturation;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    float rgMax = max(color.r, color.g);\n    float rgbMax = max(rgMax, color.b);\n    color.r += rgbMax != color.r ? (rgbMax - color.r) * uSaturation : 0.00;\n    color.g += rgbMax != color.g ? (rgbMax - color.g) * uSaturation : 0.00;\n    color.b += rgbMax != color.b ? (rgbMax - color.b) * uSaturation : 0.00;\n    gl_FragColor = color;\n  }\n";
  }
  applyTo2d(t2) {
    let {
      imageData: {
        data: e3
      }
    } = t2;
    const s2 = -this.saturation;
    for (let t3 = 0; t3 < e3.length; t3 += 4) {
      const i2 = e3[t3], r2 = e3[t3 + 1], n2 = e3[t3 + 2], o2 = Math.max(i2, r2, n2);
      e3[t3] += o2 !== i2 ? (o2 - i2) * s2 : 0, e3[t3 + 1] += o2 !== r2 ? (o2 - r2) * s2 : 0, e3[t3 + 2] += o2 !== n2 ? (o2 - n2) * s2 : 0;
    }
  }
  sendUniformData(t2, e3) {
    t2.uniform1f(e3.uSaturation, -this.saturation);
  }
  isNeutralState() {
    return 0 === this.saturation;
  }
};
t(gh, "type", "Saturation"), t(gh, "defaults", {
  saturation: 0
}), t(gh, "uniformLocations", ["uSaturation"]), tt.setClass(gh);
var fh = class extends Fa {
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uVibrance;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    float max = max(color.r, max(color.g, color.b));\n    float avg = (color.r + color.g + color.b) / 3.0;\n    float amt = (abs(max - avg) * 2.0) * uVibrance;\n    color.r += max != color.r ? (max - color.r) * amt : 0.00;\n    color.g += max != color.g ? (max - color.g) * amt : 0.00;\n    color.b += max != color.b ? (max - color.b) * amt : 0.00;\n    gl_FragColor = color;\n  }\n";
  }
  applyTo2d(t2) {
    let {
      imageData: {
        data: e3
      }
    } = t2;
    const s2 = -this.vibrance;
    for (let t3 = 0; t3 < e3.length; t3 += 4) {
      const i2 = e3[t3], r2 = e3[t3 + 1], n2 = e3[t3 + 2], o2 = Math.max(i2, r2, n2), a2 = (i2 + r2 + n2) / 3, h2 = 2 * Math.abs(o2 - a2) / 255 * s2;
      e3[t3] += o2 !== i2 ? (o2 - i2) * h2 : 0, e3[t3 + 1] += o2 !== r2 ? (o2 - r2) * h2 : 0, e3[t3 + 2] += o2 !== n2 ? (o2 - n2) * h2 : 0;
    }
  }
  sendUniformData(t2, e3) {
    t2.uniform1f(e3.uVibrance, -this.vibrance);
  }
  isNeutralState() {
    return 0 === this.vibrance;
  }
};
t(fh, "type", "Vibrance"), t(fh, "defaults", {
  vibrance: 0
}), t(fh, "uniformLocations", ["uVibrance"]), tt.setClass(fh);
var ph = Object.freeze({
  __proto__: null,
  BaseFilter: Fa,
  BlackWhite: Qa,
  BlendColor: Ra,
  BlendImage: Xa,
  Blur: Ya,
  Brightness: Wa,
  Brownie: Ga,
  ColorMatrix: za,
  Composed: Za,
  Contrast: $a,
  Convolute: eh,
  Gamma: ih,
  Grayscale: nh,
  HueRotation: ah,
  Invert: hh,
  Kodachrome: Ua,
  Noise: ch,
  Pixelate: lh,
  Polaroid: Ka,
  RemoveColor: uh,
  Resize: dh,
  Saturation: gh,
  Sepia: Ja,
  Technicolor: qa,
  Vibrance: fh,
  Vintage: Na
});
export {
  zo as ActiveSelection,
  Xn as BaseBrush,
  Xs as BaseFabricObject,
  Cn as Canvas,
  Ho as Canvas2dFilterBackend,
  dn as CanvasDOMManager,
  Nn as Circle,
  Un as CircleBrush,
  Yo as ClipPathLayout,
  qt as Color,
  Gs as Control,
  so as Ellipse,
  Zo as FabricImage,
  _i as FabricObject,
  To as FabricText,
  br as FitContentLayout,
  Wo as FixedLayout,
  Rn as Gradient,
  Mr as Group,
  Bo as IText,
  Zo as Image,
  vi as InteractiveFabricObject,
  Ls as Intersection,
  Or as LayoutManager,
  Cr as LayoutStrategy,
  $n as Line,
  _i as Object,
  st as Observable,
  Vn as Path,
  Bn as Pattern,
  Kn as PatternBrush,
  zn as PencilBrush,
  ot as Point,
  ao as Polygon,
  oo as Polyline,
  pr as Rect,
  ds as Shadow,
  qn as SprayBrush,
  de as StaticCanvas,
  le as StaticCanvasDOMManager,
  To as Text,
  Xo as Textbox,
  to as Triangle,
  Go as WebGLFilterBackend,
  _ as cache,
  tt as classRegistry,
  o as config,
  Oa as controlsUtils,
  ct as createCollectionMixin,
  ph as filters,
  aa as getCSSRules,
  p as getEnv,
  m as getFabricDocument,
  v as getFabricWindow,
  qo as getFilterBackend,
  T as iMatrix,
  Uo as initFilterBackend,
  Da as isPutImageFaster,
  ka as isWebGLPipelineState,
  ga as loadSVGFromString,
  fa as loadSVGFromURL,
  dr as parseAttributes,
  hr as parseFontDeclaration,
  io as parsePointsAttribute,
  da as parseSVGDocument,
  lr as parseStyleAttribute,
  or as parseTransformAttribute,
  et as runningAnimations,
  f as setEnv,
  Ko as setFilterBackend,
  un as util,
  x as version
};
//# sourceMappingURL=fabric.js.map
