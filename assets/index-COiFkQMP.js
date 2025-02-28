var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a2;
(function() {
  const e19 = document.createElement("link").relList;
  if (!(e19 && e19.supports && e19.supports("modulepreload"))) {
    for (const e20 of document.querySelectorAll('link[rel="modulepreload"]')) t2(e20);
    new MutationObserver((e20) => {
      for (const n2 of e20) if ("childList" === n2.type) for (const e21 of n2.addedNodes) "LINK" === e21.tagName && "modulepreload" === e21.rel && t2(e21);
    }).observe(document, { childList: true, subtree: true });
  }
  function t2(e20) {
    if (e20.ep) return;
    e20.ep = true;
    const t3 = function(e21) {
      const t4 = {};
      return e21.integrity && (t4.integrity = e21.integrity), e21.referrerPolicy && (t4.referrerPolicy = e21.referrerPolicy), "use-credentials" === e21.crossOrigin ? t4.credentials = "include" : "anonymous" === e21.crossOrigin ? t4.credentials = "omit" : t4.credentials = "same-origin", t4;
    }(e20);
    fetch(e20.href, t3);
  }
})();
var e, t, n, r, i, o, a, s, u, l, c, f, h = {}, p = [], d = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, m = Array.isArray;
function v(e19, t2) {
  for (var n2 in t2) e19[n2] = t2[n2];
  return e19;
}
function g(e19) {
  e19 && e19.parentNode && e19.parentNode.removeChild(e19);
}
function _(t2, n2, r2) {
  var i2, o2, a2, s2 = {};
  for (a2 in n2) "key" == a2 ? i2 = n2[a2] : "ref" == a2 ? o2 = n2[a2] : s2[a2] = n2[a2];
  if (arguments.length > 2 && (s2.children = arguments.length > 3 ? e.call(arguments, 2) : r2), "function" == typeof t2 && null != t2.defaultProps) for (a2 in t2.defaultProps) void 0 === s2[a2] && (s2[a2] = t2.defaultProps[a2]);
  return y(t2, s2, i2, o2, null);
}
function y(e19, r2, i2, o2, a2) {
  var s2 = { type: e19, props: r2, key: i2, ref: o2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == a2 ? ++n : a2, __i: -1, __u: 0 };
  return null == a2 && null != t.vnode && t.vnode(s2), s2;
}
function b() {
  return { current: null };
}
function w(e19) {
  return e19.children;
}
function x(e19, t2) {
  this.props = e19, this.context = t2;
}
function C(e19, t2) {
  if (null == t2) return e19.__ ? C(e19.__, e19.__i + 1) : null;
  for (var n2; t2 < e19.__k.length; t2++) if (null != (n2 = e19.__k[t2]) && null != n2.__e) return n2.__e;
  return "function" == typeof e19.type ? C(e19) : null;
}
function T(e19) {
  var t2, n2;
  if (null != (e19 = e19.__) && null != e19.__c) {
    for (e19.__e = e19.__c.base = null, t2 = 0; t2 < e19.__k.length; t2++) if (null != (n2 = e19.__k[t2]) && null != n2.__e) {
      e19.__e = e19.__c.base = n2.__e;
      break;
    }
    return T(e19);
  }
}
function O(e19) {
  (!e19.__d && (e19.__d = true) && r.push(e19) && !S.__r++ || i !== t.debounceRendering) && ((i = t.debounceRendering) || o)(S);
}
function S() {
  var e19, n2, i2, o2, s2, u2, l2, c2;
  for (r.sort(a); e19 = r.shift(); ) e19.__d && (n2 = r.length, o2 = void 0, u2 = (s2 = (i2 = e19).__v).__e, l2 = [], c2 = [], i2.__P && ((o2 = v({}, s2)).__v = s2.__v + 1, t.vnode && t.vnode(o2), L(i2.__P, o2, s2, i2.__n, i2.__P.namespaceURI, 32 & s2.__u ? [u2] : null, l2, null == u2 ? C(s2) : u2, !!(32 & s2.__u), c2), o2.__v = s2.__v, o2.__.__k[o2.__i] = o2, j(l2, o2, c2), o2.__e != u2 && T(o2)), r.length > n2 && r.sort(a));
  S.__r = 0;
}
function E(e19, t2, n2, r2, i2, o2, a2, s2, u2, l2, c2) {
  var f2, d2, v2, g2, _2, b2, x2 = r2 && r2.__k || p, T2 = t2.length;
  for (u2 = function(e20, t3, n3, r3, i3) {
    var o3, a3, s3, u3, l3, c3 = n3.length, f3 = c3, h2 = 0;
    for (e20.__k = new Array(i3), o3 = 0; o3 < i3; o3++) null != (a3 = t3[o3]) && "boolean" != typeof a3 && "function" != typeof a3 ? (u3 = o3 + h2, (a3 = e20.__k[o3] = "string" == typeof a3 || "number" == typeof a3 || "bigint" == typeof a3 || a3.constructor == String ? y(null, a3, null, null, null) : m(a3) ? y(w, { children: a3 }, null, null, null) : void 0 === a3.constructor && a3.__b > 0 ? y(a3.type, a3.props, a3.key, a3.ref ? a3.ref : null, a3.__v) : a3).__ = e20, a3.__b = e20.__b + 1, s3 = null, -1 !== (l3 = a3.__i = M(a3, n3, u3, f3)) && (f3--, (s3 = n3[l3]) && (s3.__u |= 2)), null == s3 || null === s3.__v ? (-1 == l3 && h2--, "function" != typeof a3.type && (a3.__u |= 4)) : l3 != u3 && (l3 == u3 - 1 ? h2-- : l3 == u3 + 1 ? h2++ : (l3 > u3 ? h2-- : h2++, a3.__u |= 4))) : e20.__k[o3] = null;
    if (f3) for (o3 = 0; o3 < c3; o3++) null != (s3 = n3[o3]) && !(2 & s3.__u) && (s3.__e == r3 && (r3 = C(s3)), I(s3, s3));
    return r3;
  }(n2, t2, x2, u2, T2), f2 = 0; f2 < T2; f2++) null != (v2 = n2.__k[f2]) && (d2 = -1 === v2.__i ? h : x2[v2.__i] || h, v2.__i = f2, b2 = L(e19, v2, d2, i2, o2, a2, s2, u2, l2, c2), g2 = v2.__e, v2.ref && d2.ref != v2.ref && (d2.ref && z(d2.ref, null, v2), c2.push(v2.ref, v2.__c || g2, v2)), null == _2 && null != g2 && (_2 = g2), 4 & v2.__u || d2.__k === v2.__k ? u2 = P(v2, u2, e19) : "function" == typeof v2.type && void 0 !== b2 ? u2 = b2 : g2 && (u2 = g2.nextSibling), v2.__u &= -7);
  return n2.__e = _2, u2;
}
function P(e19, t2, n2) {
  var r2, i2;
  if ("function" == typeof e19.type) {
    for (r2 = e19.__k, i2 = 0; r2 && i2 < r2.length; i2++) r2[i2] && (r2[i2].__ = e19, t2 = P(r2[i2], t2, n2));
    return t2;
  }
  e19.__e != t2 && (t2 && e19.type && !n2.contains(t2) && (t2 = C(e19)), n2.insertBefore(e19.__e, t2 || null), t2 = e19.__e);
  do {
    t2 = t2 && t2.nextSibling;
  } while (null != t2 && 8 == t2.nodeType);
  return t2;
}
function k(e19, t2) {
  return t2 = t2 || [], null == e19 || "boolean" == typeof e19 || (m(e19) ? e19.some(function(e20) {
    k(e20, t2);
  }) : t2.push(e19)), t2;
}
function M(e19, t2, n2, r2) {
  var i2, o2, a2 = e19.key, s2 = e19.type, u2 = t2[n2];
  if (null === u2 || u2 && a2 == u2.key && s2 === u2.type && !(2 & u2.__u)) return n2;
  if (r2 > (null == u2 || 2 & u2.__u ? 0 : 1)) for (i2 = n2 - 1, o2 = n2 + 1; i2 >= 0 || o2 < t2.length; ) {
    if (i2 >= 0) {
      if ((u2 = t2[i2]) && !(2 & u2.__u) && a2 == u2.key && s2 === u2.type) return i2;
      i2--;
    }
    if (o2 < t2.length) {
      if ((u2 = t2[o2]) && !(2 & u2.__u) && a2 == u2.key && s2 === u2.type) return o2;
      o2++;
    }
  }
  return -1;
}
function N(e19, t2, n2) {
  "-" == t2[0] ? e19.setProperty(t2, null == n2 ? "" : n2) : e19[t2] = null == n2 ? "" : "number" != typeof n2 || d.test(t2) ? n2 : n2 + "px";
}
function A(e19, t2, n2, r2, i2) {
  var o2;
  e: if ("style" == t2) if ("string" == typeof n2) e19.style.cssText = n2;
  else {
    if ("string" == typeof r2 && (e19.style.cssText = r2 = ""), r2) for (t2 in r2) n2 && t2 in n2 || N(e19.style, t2, "");
    if (n2) for (t2 in n2) r2 && n2[t2] === r2[t2] || N(e19.style, t2, n2[t2]);
  }
  else if ("o" == t2[0] && "n" == t2[1]) o2 = t2 != (t2 = t2.replace(s, "$1")), t2 = t2.toLowerCase() in e19 || "onFocusOut" == t2 || "onFocusIn" == t2 ? t2.toLowerCase().slice(2) : t2.slice(2), e19.l || (e19.l = {}), e19.l[t2 + o2] = n2, n2 ? r2 ? n2.u = r2.u : (n2.u = u, e19.addEventListener(t2, o2 ? c : l, o2)) : e19.removeEventListener(t2, o2 ? c : l, o2);
  else {
    if ("http://www.w3.org/2000/svg" == i2) t2 = t2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != t2 && "height" != t2 && "href" != t2 && "list" != t2 && "form" != t2 && "tabIndex" != t2 && "download" != t2 && "rowSpan" != t2 && "colSpan" != t2 && "role" != t2 && "popover" != t2 && t2 in e19) try {
      e19[t2] = null == n2 ? "" : n2;
      break e;
    } catch (e20) {
    }
    "function" == typeof n2 || (null == n2 || false === n2 && "-" != t2[4] ? e19.removeAttribute(t2) : e19.setAttribute(t2, "popover" == t2 && 1 == n2 ? "" : n2));
  }
}
function R(e19) {
  return function(n2) {
    if (this.l) {
      var r2 = this.l[n2.type + e19];
      if (null == n2.t) n2.t = u++;
      else if (n2.t < r2.u) return;
      return r2(t.event ? t.event(n2) : n2);
    }
  };
}
function L(e19, n2, r2, i2, o2, a2, s2, u2, l2, c2) {
  var f2, h2, p2, d2, _2, y2, b2, C2, T2, O2, S2, P2, k2, M2, N2, A2, R2, L2 = n2.type;
  if (void 0 !== n2.constructor) return null;
  128 & r2.__u && (l2 = !!(32 & r2.__u), a2 = [u2 = n2.__e = r2.__e]), (f2 = t.__b) && f2(n2);
  e: if ("function" == typeof L2) try {
    if (C2 = n2.props, T2 = "prototype" in L2 && L2.prototype.render, O2 = (f2 = L2.contextType) && i2[f2.__c], S2 = f2 ? O2 ? O2.props.value : f2.__ : i2, r2.__c ? b2 = (h2 = n2.__c = r2.__c).__ = h2.__E : (T2 ? n2.__c = h2 = new L2(C2, S2) : (n2.__c = h2 = new x(C2, S2), h2.constructor = L2, h2.render = B), O2 && O2.sub(h2), h2.props = C2, h2.state || (h2.state = {}), h2.context = S2, h2.__n = i2, p2 = h2.__d = true, h2.__h = [], h2._sb = []), T2 && null == h2.__s && (h2.__s = h2.state), T2 && null != L2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = v({}, h2.__s)), v(h2.__s, L2.getDerivedStateFromProps(C2, h2.__s))), d2 = h2.props, _2 = h2.state, h2.__v = n2, p2) T2 && null == L2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), T2 && null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
    else {
      if (T2 && null == L2.getDerivedStateFromProps && C2 !== d2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(C2, S2), !h2.__e && (null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(C2, h2.__s, S2) || n2.__v == r2.__v)) {
        for (n2.__v != r2.__v && (h2.props = C2, h2.state = h2.__s, h2.__d = false), n2.__e = r2.__e, n2.__k = r2.__k, n2.__k.some(function(e20) {
          e20 && (e20.__ = n2);
        }), P2 = 0; P2 < h2._sb.length; P2++) h2.__h.push(h2._sb[P2]);
        h2._sb = [], h2.__h.length && s2.push(h2);
        break e;
      }
      null != h2.componentWillUpdate && h2.componentWillUpdate(C2, h2.__s, S2), T2 && null != h2.componentDidUpdate && h2.__h.push(function() {
        h2.componentDidUpdate(d2, _2, y2);
      });
    }
    if (h2.context = S2, h2.props = C2, h2.__P = e19, h2.__e = false, k2 = t.__r, M2 = 0, T2) {
      for (h2.state = h2.__s, h2.__d = false, k2 && k2(n2), f2 = h2.render(h2.props, h2.state, h2.context), N2 = 0; N2 < h2._sb.length; N2++) h2.__h.push(h2._sb[N2]);
      h2._sb = [];
    } else do {
      h2.__d = false, k2 && k2(n2), f2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
    } while (h2.__d && ++M2 < 25);
    h2.state = h2.__s, null != h2.getChildContext && (i2 = v(v({}, i2), h2.getChildContext())), T2 && !p2 && null != h2.getSnapshotBeforeUpdate && (y2 = h2.getSnapshotBeforeUpdate(d2, _2)), u2 = E(e19, m(A2 = null != f2 && f2.type === w && null == f2.key ? f2.props.children : f2) ? A2 : [A2], n2, r2, i2, o2, a2, s2, u2, l2, c2), h2.base = n2.__e, n2.__u &= -161, h2.__h.length && s2.push(h2), b2 && (h2.__E = h2.__ = null);
  } catch (e20) {
    if (n2.__v = null, l2 || null != a2) if (e20.then) {
      for (n2.__u |= l2 ? 160 : 128; u2 && 8 == u2.nodeType && u2.nextSibling; ) u2 = u2.nextSibling;
      a2[a2.indexOf(u2)] = null, n2.__e = u2;
    } else for (R2 = a2.length; R2--; ) g(a2[R2]);
    else n2.__e = r2.__e, n2.__k = r2.__k;
    t.__e(e20, n2, r2);
  }
  else null == a2 && n2.__v == r2.__v ? (n2.__k = r2.__k, n2.__e = r2.__e) : u2 = n2.__e = D(r2.__e, n2, r2, i2, o2, a2, s2, l2, c2);
  return (f2 = t.diffed) && f2(n2), 128 & n2.__u ? void 0 : u2;
}
function j(e19, n2, r2) {
  for (var i2 = 0; i2 < r2.length; i2++) z(r2[i2], r2[++i2], r2[++i2]);
  t.__c && t.__c(n2, e19), e19.some(function(n3) {
    try {
      e19 = n3.__h, n3.__h = [], e19.some(function(e20) {
        e20.call(n3);
      });
    } catch (e20) {
      t.__e(e20, n3.__v);
    }
  });
}
function D(n2, r2, i2, o2, a2, s2, u2, l2, c2) {
  var f2, p2, d2, v2, _2, y2, b2, w2 = i2.props, x2 = r2.props, T2 = r2.type;
  if ("svg" == T2 ? a2 = "http://www.w3.org/2000/svg" : "math" == T2 ? a2 = "http://www.w3.org/1998/Math/MathML" : a2 || (a2 = "http://www.w3.org/1999/xhtml"), null != s2) {
    for (f2 = 0; f2 < s2.length; f2++) if ((_2 = s2[f2]) && "setAttribute" in _2 == !!T2 && (T2 ? _2.localName == T2 : 3 == _2.nodeType)) {
      n2 = _2, s2[f2] = null;
      break;
    }
  }
  if (null == n2) {
    if (null == T2) return document.createTextNode(x2);
    n2 = document.createElementNS(a2, T2, x2.is && x2), l2 && (t.__m && t.__m(r2, s2), l2 = false), s2 = null;
  }
  if (null === T2) w2 === x2 || l2 && n2.data === x2 || (n2.data = x2);
  else {
    if (s2 = s2 && e.call(n2.childNodes), w2 = i2.props || h, !l2 && null != s2) for (w2 = {}, f2 = 0; f2 < n2.attributes.length; f2++) w2[(_2 = n2.attributes[f2]).name] = _2.value;
    for (f2 in w2) if (_2 = w2[f2], "children" == f2) ;
    else if ("dangerouslySetInnerHTML" == f2) d2 = _2;
    else if (!(f2 in x2)) {
      if ("value" == f2 && "defaultValue" in x2 || "checked" == f2 && "defaultChecked" in x2) continue;
      A(n2, f2, null, _2, a2);
    }
    for (f2 in x2) _2 = x2[f2], "children" == f2 ? v2 = _2 : "dangerouslySetInnerHTML" == f2 ? p2 = _2 : "value" == f2 ? y2 = _2 : "checked" == f2 ? b2 = _2 : l2 && "function" != typeof _2 || w2[f2] === _2 || A(n2, f2, _2, w2[f2], a2);
    if (p2) l2 || d2 && (p2.__html === d2.__html || p2.__html === n2.innerHTML) || (n2.innerHTML = p2.__html), r2.__k = [];
    else if (d2 && (n2.innerHTML = ""), E(n2, m(v2) ? v2 : [v2], r2, i2, o2, "foreignObject" == T2 ? "http://www.w3.org/1999/xhtml" : a2, s2, u2, s2 ? s2[0] : i2.__k && C(i2, 0), l2, c2), null != s2) for (f2 = s2.length; f2--; ) g(s2[f2]);
    l2 || (f2 = "value", "progress" == T2 && null == y2 ? n2.removeAttribute("value") : void 0 !== y2 && (y2 !== n2[f2] || "progress" == T2 && !y2 || "option" == T2 && y2 !== w2[f2]) && A(n2, f2, y2, w2[f2], a2), f2 = "checked", void 0 !== b2 && b2 !== n2[f2] && A(n2, f2, b2, w2[f2], a2));
  }
  return n2;
}
function z(e19, n2, r2) {
  try {
    if ("function" == typeof e19) {
      var i2 = "function" == typeof e19.__u;
      i2 && e19.__u(), i2 && null == n2 || (e19.__u = e19(n2));
    } else e19.current = n2;
  } catch (e20) {
    t.__e(e20, r2);
  }
}
function I(e19, n2, r2) {
  var i2, o2;
  if (t.unmount && t.unmount(e19), (i2 = e19.ref) && (i2.current && i2.current !== e19.__e || z(i2, null, n2)), null != (i2 = e19.__c)) {
    if (i2.componentWillUnmount) try {
      i2.componentWillUnmount();
    } catch (e20) {
      t.__e(e20, n2);
    }
    i2.base = i2.__P = null;
  }
  if (i2 = e19.__k) for (o2 = 0; o2 < i2.length; o2++) i2[o2] && I(i2[o2], n2, r2 || "function" != typeof e19.type);
  r2 || g(e19.__e), e19.__c = e19.__ = e19.__e = void 0;
}
function B(e19, t2, n2) {
  return this.constructor(e19, n2);
}
function F(n2, r2, i2) {
  var o2, a2, s2, u2;
  r2 == document && (r2 = document.documentElement), t.__ && t.__(n2, r2), a2 = (o2 = "function" == typeof i2) ? null : i2 && i2.__k || r2.__k, s2 = [], u2 = [], L(r2, n2 = (!o2 && i2 || r2).__k = _(w, null, [n2]), a2 || h, h, r2.namespaceURI, !o2 && i2 ? [i2] : a2 ? null : r2.firstChild ? e.call(r2.childNodes) : null, s2, !o2 && i2 ? i2 : a2 ? a2.__e : r2.firstChild, o2, u2), j(s2, n2, u2);
}
function V(e19, t2) {
  F(e19, t2, V);
}
function H(t2, n2, r2) {
  var i2, o2, a2, s2, u2 = v({}, t2.props);
  for (a2 in t2.type && t2.type.defaultProps && (s2 = t2.type.defaultProps), n2) "key" == a2 ? i2 = n2[a2] : "ref" == a2 ? o2 = n2[a2] : u2[a2] = void 0 === n2[a2] && void 0 !== s2 ? s2[a2] : n2[a2];
  return arguments.length > 2 && (u2.children = arguments.length > 3 ? e.call(arguments, 2) : r2), y(t2.type, u2, i2 || t2.key, o2 || t2.ref, null);
}
function U(e19, t2) {
  var n2 = { __c: t2 = "__cC" + f++, __: e19, Consumer: function(e20, t3) {
    return e20.children(t3);
  }, Provider: function(e20) {
    var n3, r2;
    return this.getChildContext || (n3 = /* @__PURE__ */ new Set(), (r2 = {})[t2] = this, this.getChildContext = function() {
      return r2;
    }, this.componentWillUnmount = function() {
      n3 = null;
    }, this.shouldComponentUpdate = function(e21) {
      this.props.value !== e21.value && n3.forEach(function(e22) {
        e22.__e = true, O(e22);
      });
    }, this.sub = function(e21) {
      n3.add(e21);
      var t3 = e21.componentWillUnmount;
      e21.componentWillUnmount = function() {
        n3 && n3.delete(e21), t3 && t3.call(e21);
      };
    }), e20.children;
  } };
  return n2.Provider.__ = n2.Consumer.contextType = n2;
}
e = p.slice, t = { __e: function(e19, t2, n2, r2) {
  for (var i2, o2, a2; t2 = t2.__; ) if ((i2 = t2.__c) && !i2.__) try {
    if ((o2 = i2.constructor) && null != o2.getDerivedStateFromError && (i2.setState(o2.getDerivedStateFromError(e19)), a2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(e19, r2 || {}), a2 = i2.__d), a2) return i2.__E = i2;
  } catch (t3) {
    e19 = t3;
  }
  throw e19;
} }, n = 0, x.prototype.setState = function(e19, t2) {
  var n2;
  n2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = v({}, this.state), "function" == typeof e19 && (e19 = e19(v({}, n2), this.props)), e19 && v(n2, e19), null != e19 && this.__v && (t2 && this._sb.push(t2), O(this));
}, x.prototype.forceUpdate = function(e19) {
  this.__v && (this.__e = true, e19 && this.__h.push(e19), O(this));
}, x.prototype.render = w, r = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, a = function(e19, t2) {
  return e19.__v.__b - t2.__v.__b;
}, S.__r = 0, s = /(PointerCapture)$|Capture$/i, u = 0, l = R(false), c = R(true), f = 0;
var W = 0;
function $(e19, n2, r2, i2, o2, a2) {
  n2 || (n2 = {});
  var s2, u2, l2 = n2;
  if ("ref" in l2) for (u2 in l2 = {}, n2) "ref" == u2 ? s2 = n2[u2] : l2[u2] = n2[u2];
  var c2 = { type: e19, props: l2, key: r2, ref: s2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --W, __i: -1, __u: 0, __source: o2, __self: a2 };
  if ("function" == typeof e19 && (s2 = e19.defaultProps)) for (u2 in s2) void 0 === l2[u2] && (l2[u2] = s2[u2]);
  return t.vnode && t.vnode(c2), c2;
}
var Y, X, q, Z, G = 0, K = [], J = t, Q = J.__b, ee = J.__r, te = J.diffed, ne = J.__c, re = J.unmount, ie = J.__;
function oe(e19, t2) {
  J.__h && J.__h(X, e19, G || t2), G = 0;
  var n2 = X.__H || (X.__H = { __: [], __h: [] });
  return e19 >= n2.__.length && n2.__.push({}), n2.__[e19];
}
function ae(e19) {
  return G = 1, se(Ce, e19);
}
function se(e19, t2, n2) {
  var r2 = oe(Y++, 2);
  if (r2.t = e19, !r2.__c && (r2.__ = [n2 ? n2(t2) : Ce(void 0, t2), function(e20) {
    var t3 = r2.__N ? r2.__N[0] : r2.__[0], n3 = r2.t(t3, e20);
    t3 !== n3 && (r2.__N = [n3, r2.__[1]], r2.__c.setState({}));
  }], r2.__c = X, !X.u)) {
    var i2 = function(e20, t3, n3) {
      if (!r2.__c.__H) return true;
      var i3 = r2.__c.__H.__.filter(function(e21) {
        return !!e21.__c;
      });
      if (i3.every(function(e21) {
        return !e21.__N;
      })) return !o2 || o2.call(this, e20, t3, n3);
      var a3 = r2.__c.props !== e20;
      return i3.forEach(function(e21) {
        if (e21.__N) {
          var t4 = e21.__[0];
          e21.__ = e21.__N, e21.__N = void 0, t4 !== e21.__[0] && (a3 = true);
        }
      }), o2 && o2.call(this, e20, t3, n3) || a3;
    };
    X.u = true;
    var o2 = X.shouldComponentUpdate, a2 = X.componentWillUpdate;
    X.componentWillUpdate = function(e20, t3, n3) {
      if (this.__e) {
        var r3 = o2;
        o2 = void 0, i2(e20, t3, n3), o2 = r3;
      }
      a2 && a2.call(this, e20, t3, n3);
    }, X.shouldComponentUpdate = i2;
  }
  return r2.__N || r2.__;
}
function ue(e19, t2) {
  var n2 = oe(Y++, 3);
  !J.__s && xe(n2.__H, t2) && (n2.__ = e19, n2.i = t2, X.__H.__h.push(n2));
}
function le(e19, t2) {
  var n2 = oe(Y++, 4);
  !J.__s && xe(n2.__H, t2) && (n2.__ = e19, n2.i = t2, X.__h.push(n2));
}
function ce(e19) {
  return G = 5, he(function() {
    return { current: e19 };
  }, []);
}
function fe(e19, t2, n2) {
  G = 6, le(function() {
    return "function" == typeof e19 ? (e19(t2()), function() {
      return e19(null);
    }) : e19 ? (e19.current = t2(), function() {
      return e19.current = null;
    }) : void 0;
  }, null == n2 ? n2 : n2.concat(e19));
}
function he(e19, t2) {
  var n2 = oe(Y++, 7);
  return xe(n2.__H, t2) && (n2.__ = e19(), n2.__H = t2, n2.__h = e19), n2.__;
}
function pe(e19, t2) {
  return G = 8, he(function() {
    return e19;
  }, t2);
}
function de(e19) {
  var t2 = X.context[e19.__c], n2 = oe(Y++, 9);
  return n2.c = e19, t2 ? (null == n2.__ && (n2.__ = true, t2.sub(X)), t2.props.value) : e19.__;
}
function me(e19, t2) {
  J.useDebugValue && J.useDebugValue(t2 ? t2(e19) : e19);
}
function ve() {
  var e19 = oe(Y++, 11);
  if (!e19.__) {
    for (var t2 = X.__v; null !== t2 && !t2.__m && null !== t2.__; ) t2 = t2.__;
    var n2 = t2.__m || (t2.__m = [0, 0]);
    e19.__ = "P" + n2[0] + "-" + n2[1]++;
  }
  return e19.__;
}
function ge() {
  for (var e19; e19 = K.shift(); ) if (e19.__P && e19.__H) try {
    e19.__H.__h.forEach(be), e19.__H.__h.forEach(we), e19.__H.__h = [];
  } catch (t2) {
    e19.__H.__h = [], J.__e(t2, e19.__v);
  }
}
J.__b = function(e19) {
  X = null, Q && Q(e19);
}, J.__ = function(e19, t2) {
  e19 && t2.__k && t2.__k.__m && (e19.__m = t2.__k.__m), ie && ie(e19, t2);
}, J.__r = function(e19) {
  ee && ee(e19), Y = 0;
  var t2 = (X = e19.__c).__H;
  t2 && (q === X ? (t2.__h = [], X.__h = [], t2.__.forEach(function(e20) {
    e20.__N && (e20.__ = e20.__N), e20.i = e20.__N = void 0;
  })) : (t2.__h.forEach(be), t2.__h.forEach(we), t2.__h = [], Y = 0)), q = X;
}, J.diffed = function(e19) {
  te && te(e19);
  var t2 = e19.__c;
  t2 && t2.__H && (t2.__H.__h.length && (1 !== K.push(t2) && Z === J.requestAnimationFrame || ((Z = J.requestAnimationFrame) || ye)(ge)), t2.__H.__.forEach(function(e20) {
    e20.i && (e20.__H = e20.i), e20.i = void 0;
  })), q = X = null;
}, J.__c = function(e19, t2) {
  t2.some(function(e20) {
    try {
      e20.__h.forEach(be), e20.__h = e20.__h.filter(function(e21) {
        return !e21.__ || we(e21);
      });
    } catch (n2) {
      t2.some(function(e21) {
        e21.__h && (e21.__h = []);
      }), t2 = [], J.__e(n2, e20.__v);
    }
  }), ne && ne(e19, t2);
}, J.unmount = function(e19) {
  re && re(e19);
  var t2, n2 = e19.__c;
  n2 && n2.__H && (n2.__H.__.forEach(function(e20) {
    try {
      be(e20);
    } catch (e21) {
      t2 = e21;
    }
  }), n2.__H = void 0, t2 && J.__e(t2, n2.__v));
};
var _e = "function" == typeof requestAnimationFrame;
function ye(e19) {
  var t2, n2 = function() {
    clearTimeout(r2), _e && cancelAnimationFrame(t2), setTimeout(e19);
  }, r2 = setTimeout(n2, 100);
  _e && (t2 = requestAnimationFrame(n2));
}
function be(e19) {
  var t2 = X, n2 = e19.__c;
  "function" == typeof n2 && (e19.__c = void 0, n2()), X = t2;
}
function we(e19) {
  var t2 = X;
  e19.__c = e19.__(), X = t2;
}
function xe(e19, t2) {
  return !e19 || e19.length !== t2.length || t2.some(function(t3, n2) {
    return t3 !== e19[n2];
  });
}
function Ce(e19, t2) {
  return "function" == typeof t2 ? t2(e19) : t2;
}
function Te(e19, t2) {
  for (var n2 in t2) e19[n2] = t2[n2];
  return e19;
}
function Oe(e19, t2) {
  for (var n2 in e19) if ("__source" !== n2 && !(n2 in t2)) return true;
  for (var r2 in t2) if ("__source" !== r2 && e19[r2] !== t2[r2]) return true;
  return false;
}
function Se(e19, t2) {
  var n2 = t2(), r2 = ae({ t: { __: n2, u: t2 } }), i2 = r2[0].t, o2 = r2[1];
  return le(function() {
    i2.__ = n2, i2.u = t2, Ee(i2) && o2({ t: i2 });
  }, [e19, n2, t2]), ue(function() {
    return Ee(i2) && o2({ t: i2 }), e19(function() {
      Ee(i2) && o2({ t: i2 });
    });
  }, [e19]), n2;
}
function Ee(e19) {
  var t2, n2, r2 = e19.u, i2 = e19.__;
  try {
    var o2 = r2();
    return !((t2 = i2) === (n2 = o2) && (0 !== t2 || 1 / t2 == 1 / n2) || t2 != t2 && n2 != n2);
  } catch (e20) {
    return true;
  }
}
function Pe(e19) {
  e19();
}
function ke(e19) {
  return e19;
}
function Me() {
  return [false, Pe];
}
var Ne = le;
function Ae(e19, t2) {
  this.props = e19, this.context = t2;
}
function Re(e19, t2) {
  function n2(e20) {
    var n3 = this.props.ref, r3 = n3 == e20.ref;
    return !r3 && n3 && (n3.call ? n3(null) : n3.current = null), t2 ? !t2(this.props, e20) || !r3 : Oe(this.props, e20);
  }
  function r2(t3) {
    return this.shouldComponentUpdate = n2, _(e19, t3);
  }
  return r2.displayName = "Memo(" + (e19.displayName || e19.name) + ")", r2.prototype.isReactComponent = true, r2.__f = true, r2;
}
(Ae.prototype = new x()).isPureReactComponent = true, Ae.prototype.shouldComponentUpdate = function(e19, t2) {
  return Oe(this.props, e19) || Oe(this.state, t2);
};
var Le = t.__b;
t.__b = function(e19) {
  e19.type && e19.type.__f && e19.ref && (e19.props.ref = e19.ref, e19.ref = null), Le && Le(e19);
};
var je = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function De(e19) {
  function t2(t3) {
    var n2 = Te({}, t3);
    return delete n2.ref, e19(n2, t3.ref || null);
  }
  return t2.$$typeof = je, t2.render = t2, t2.prototype.isReactComponent = t2.__f = true, t2.displayName = "ForwardRef(" + (e19.displayName || e19.name) + ")", t2;
}
var ze = function(e19, t2) {
  return null == e19 ? null : k(k(e19).map(t2));
}, Ie = { map: ze, forEach: ze, count: function(e19) {
  return e19 ? k(e19).length : 0;
}, only: function(e19) {
  var t2 = k(e19);
  if (1 !== t2.length) throw "Children.only";
  return t2[0];
}, toArray: k }, Be = t.__e;
t.__e = function(e19, t2, n2, r2) {
  if (e19.then) {
    for (var i2, o2 = t2; o2 = o2.__; ) if ((i2 = o2.__c) && i2.__c) return null == t2.__e && (t2.__e = n2.__e, t2.__k = n2.__k), i2.__c(e19, t2);
  }
  Be(e19, t2, n2, r2);
};
var Fe = t.unmount;
function Ve(e19, t2, n2) {
  return e19 && (e19.__c && e19.__c.__H && (e19.__c.__H.__.forEach(function(e20) {
    "function" == typeof e20.__c && e20.__c();
  }), e19.__c.__H = null), null != (e19 = Te({}, e19)).__c && (e19.__c.__P === n2 && (e19.__c.__P = t2), e19.__c = null), e19.__k = e19.__k && e19.__k.map(function(e20) {
    return Ve(e20, t2, n2);
  })), e19;
}
function He(e19, t2, n2) {
  return e19 && n2 && (e19.__v = null, e19.__k = e19.__k && e19.__k.map(function(e20) {
    return He(e20, t2, n2);
  }), e19.__c && e19.__c.__P === t2 && (e19.__e && n2.appendChild(e19.__e), e19.__c.__e = true, e19.__c.__P = n2)), e19;
}
function Ue() {
  this.__u = 0, this.o = null, this.__b = null;
}
function We(e19) {
  var t2 = e19.__.__c;
  return t2 && t2.__a && t2.__a(e19);
}
function $e(e19) {
  var t2, n2, r2;
  function i2(i3) {
    if (t2 || (t2 = e19()).then(function(e20) {
      n2 = e20.default || e20;
    }, function(e20) {
      r2 = e20;
    }), r2) throw r2;
    if (!n2) throw t2;
    return _(n2, i3);
  }
  return i2.displayName = "Lazy", i2.__f = true, i2;
}
function Ye() {
  this.i = null, this.l = null;
}
t.unmount = function(e19) {
  var t2 = e19.__c;
  t2 && t2.__R && t2.__R(), t2 && 32 & e19.__u && (e19.type = null), Fe && Fe(e19);
}, (Ue.prototype = new x()).__c = function(e19, t2) {
  var n2 = t2.__c, r2 = this;
  null == r2.o && (r2.o = []), r2.o.push(n2);
  var i2 = We(r2.__v), o2 = false, a2 = function() {
    o2 || (o2 = true, n2.__R = null, i2 ? i2(s2) : s2());
  };
  n2.__R = a2;
  var s2 = function() {
    if (!--r2.__u) {
      if (r2.state.__a) {
        var e20 = r2.state.__a;
        r2.__v.__k[0] = He(e20, e20.__c.__P, e20.__c.__O);
      }
      var t3;
      for (r2.setState({ __a: r2.__b = null }); t3 = r2.o.pop(); ) t3.forceUpdate();
    }
  };
  r2.__u++ || 32 & t2.__u || r2.setState({ __a: r2.__b = r2.__v.__k[0] }), e19.then(a2, a2);
}, Ue.prototype.componentWillUnmount = function() {
  this.o = [];
}, Ue.prototype.render = function(e19, t2) {
  if (this.__b) {
    if (this.__v.__k) {
      var n2 = document.createElement("div"), r2 = this.__v.__k[0].__c;
      this.__v.__k[0] = Ve(this.__b, n2, r2.__O = r2.__P);
    }
    this.__b = null;
  }
  var i2 = t2.__a && _(w, null, e19.fallback);
  return i2 && (i2.__u &= -33), [_(w, null, t2.__a ? null : e19.children), i2];
};
var Xe = function(e19, t2, n2) {
  if (++n2[1] === n2[0] && e19.l.delete(t2), e19.props.revealOrder && ("t" !== e19.props.revealOrder[0] || !e19.l.size)) for (n2 = e19.i; n2; ) {
    for (; n2.length > 3; ) n2.pop()();
    if (n2[1] < n2[0]) break;
    e19.i = n2 = n2[2];
  }
};
function qe(e19) {
  return this.getChildContext = function() {
    return e19.context;
  }, e19.children;
}
function Ze(e19) {
  var t2 = this, n2 = e19.h;
  t2.componentWillUnmount = function() {
    F(null, t2.v), t2.v = null, t2.h = null;
  }, t2.h && t2.h !== n2 && t2.componentWillUnmount(), t2.v || (t2.h = n2, t2.v = { nodeType: 1, parentNode: n2, childNodes: [], contains: function() {
    return true;
  }, appendChild: function(e20) {
    this.childNodes.push(e20), t2.h.appendChild(e20);
  }, insertBefore: function(e20, n3) {
    this.childNodes.push(e20), t2.h.insertBefore(e20, n3);
  }, removeChild: function(e20) {
    this.childNodes.splice(this.childNodes.indexOf(e20) >>> 1, 1), t2.h.removeChild(e20);
  } }), F(_(qe, { context: t2.context }, e19.__v), t2.v);
}
function Ge(e19, t2) {
  var n2 = _(Ze, { __v: e19, h: t2 });
  return n2.containerInfo = t2, n2;
}
(Ye.prototype = new x()).__a = function(e19) {
  var t2 = this, n2 = We(t2.__v), r2 = t2.l.get(e19);
  return r2[0]++, function(i2) {
    var o2 = function() {
      t2.props.revealOrder ? (r2.push(i2), Xe(t2, e19, r2)) : i2();
    };
    n2 ? n2(o2) : o2();
  };
}, Ye.prototype.render = function(e19) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t2 = k(e19.children);
  e19.revealOrder && "b" === e19.revealOrder[0] && t2.reverse();
  for (var n2 = t2.length; n2--; ) this.l.set(t2[n2], this.i = [1, 0, this.i]);
  return e19.children;
}, Ye.prototype.componentDidUpdate = Ye.prototype.componentDidMount = function() {
  var e19 = this;
  this.l.forEach(function(t2, n2) {
    Xe(e19, n2, t2);
  });
};
var Ke = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, Je = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Qe = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, et = /[A-Z0-9]/g, tt = "undefined" != typeof document, nt = function(e19) {
  return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(e19);
};
function rt(e19, t2, n2) {
  return null == t2.__k && (t2.textContent = ""), F(e19, t2), "function" == typeof n2 && n2(), e19 ? e19.__c : null;
}
function it(e19, t2, n2) {
  return V(e19, t2), "function" == typeof n2 && n2(), e19 ? e19.__c : null;
}
x.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e19) {
  Object.defineProperty(x.prototype, e19, { configurable: true, get: function() {
    return this["UNSAFE_" + e19];
  }, set: function(t2) {
    Object.defineProperty(this, e19, { configurable: true, writable: true, value: t2 });
  } });
});
var ot = t.event;
function at() {
}
function st() {
  return this.cancelBubble;
}
function ut() {
  return this.defaultPrevented;
}
t.event = function(e19) {
  return ot && (e19 = ot(e19)), e19.persist = at, e19.isPropagationStopped = st, e19.isDefaultPrevented = ut, e19.nativeEvent = e19;
};
var lt, ct = { enumerable: false, configurable: true, get: function() {
  return this.class;
} }, ft = t.vnode;
t.vnode = function(e19) {
  "string" == typeof e19.type && function(e20) {
    var t2 = e20.props, n2 = e20.type, r2 = {}, i2 = -1 === n2.indexOf("-");
    for (var o2 in t2) {
      var a2 = t2[o2];
      if (!("value" === o2 && "defaultValue" in t2 && null == a2 || tt && "children" === o2 && "noscript" === n2 || "class" === o2 || "className" === o2)) {
        var s2 = o2.toLowerCase();
        "defaultValue" === o2 && "value" in t2 && null == t2.value ? o2 = "value" : "download" === o2 && true === a2 ? a2 = "" : "translate" === s2 && "no" === a2 ? a2 = false : "o" === s2[0] && "n" === s2[1] ? "ondoubleclick" === s2 ? o2 = "ondblclick" : "onchange" !== s2 || "input" !== n2 && "textarea" !== n2 || nt(t2.type) ? "onfocus" === s2 ? o2 = "onfocusin" : "onblur" === s2 ? o2 = "onfocusout" : Qe.test(o2) && (o2 = s2) : s2 = o2 = "oninput" : i2 && Je.test(o2) ? o2 = o2.replace(et, "-$&").toLowerCase() : null === a2 && (a2 = void 0), "oninput" === s2 && r2[o2 = s2] && (o2 = "oninputCapture"), r2[o2] = a2;
      }
    }
    "select" == n2 && r2.multiple && Array.isArray(r2.value) && (r2.value = k(t2.children).forEach(function(e21) {
      e21.props.selected = -1 != r2.value.indexOf(e21.props.value);
    })), "select" == n2 && null != r2.defaultValue && (r2.value = k(t2.children).forEach(function(e21) {
      e21.props.selected = r2.multiple ? -1 != r2.defaultValue.indexOf(e21.props.value) : r2.defaultValue == e21.props.value;
    })), t2.class && !t2.className ? (r2.class = t2.class, Object.defineProperty(r2, "className", ct)) : (t2.className && !t2.class || t2.class && t2.className) && (r2.class = r2.className = t2.className), e20.props = r2;
  }(e19), e19.$$typeof = Ke, ft && ft(e19);
};
var ht = t.__r;
t.__r = function(e19) {
  ht && ht(e19), lt = e19.__c;
};
var pt = t.diffed;
t.diffed = function(e19) {
  pt && pt(e19);
  var t2 = e19.props, n2 = e19.__e;
  null != n2 && "textarea" === e19.type && "value" in t2 && t2.value !== n2.value && (n2.value = null == t2.value ? "" : t2.value), lt = null;
};
var dt = { ReactCurrentDispatcher: { current: { readContext: function(e19) {
  return lt.__n[e19.__c].props.value;
}, useCallback: pe, useContext: de, useDebugValue: me, useDeferredValue: ke, useEffect: ue, useId: ve, useImperativeHandle: fe, useInsertionEffect: Ne, useLayoutEffect: le, useMemo: he, useReducer: se, useRef: ce, useState: ae, useSyncExternalStore: Se, useTransition: Me } } };
function mt(e19) {
  return _.bind(null, e19);
}
function vt(e19) {
  return !!e19 && e19.$$typeof === Ke;
}
function gt(e19) {
  return vt(e19) && e19.type === w;
}
function _t(e19) {
  return !!e19 && !!e19.displayName && ("string" == typeof e19.displayName || e19.displayName instanceof String) && e19.displayName.startsWith("Memo(");
}
function yt(e19) {
  return vt(e19) ? H.apply(null, arguments) : e19;
}
function bt(e19) {
  return !!e19.__k && (F(null, e19), true);
}
function wt(e19) {
  return e19 && (e19.base || 1 === e19.nodeType && e19) || null;
}
var xt = function(e19, t2) {
  return e19(t2);
}, Ct = function(e19, t2) {
  return e19(t2);
}, Tt = w, Ot = vt, St = { useState: ae, useId: ve, useReducer: se, useEffect: ue, useLayoutEffect: le, useInsertionEffect: Ne, useTransition: Me, useDeferredValue: ke, useSyncExternalStore: Se, startTransition: Pe, useRef: ce, useImperativeHandle: fe, useMemo: he, useCallback: pe, useContext: de, useDebugValue: me, version: "18.3.1", Children: Ie, render: rt, hydrate: it, unmountComponentAtNode: bt, createPortal: Ge, createElement: _, createContext: U, createFactory: mt, cloneElement: yt, createRef: b, Fragment: w, isValidElement: vt, isElement: Ot, isFragment: gt, isMemo: _t, findDOMNode: wt, Component: x, PureComponent: Ae, memo: Re, forwardRef: De, flushSync: Ct, unstable_batchedUpdates: xt, StrictMode: Tt, Suspense: Ue, SuspenseList: Ye, lazy: $e, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: dt };
const Et = Object.freeze(Object.defineProperty({ __proto__: null, Children: Ie, Component: x, Fragment: w, PureComponent: Ae, StrictMode: Tt, Suspense: Ue, SuspenseList: Ye, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: dt, cloneElement: yt, createContext: U, createElement: _, createFactory: mt, createPortal: Ge, createRef: b, default: St, findDOMNode: wt, flushSync: Ct, forwardRef: De, hydrate: it, isElement: Ot, isFragment: gt, isMemo: _t, isValidElement: vt, lazy: $e, memo: Re, render: rt, startTransition: Pe, unmountComponentAtNode: bt, unstable_batchedUpdates: xt, useCallback: pe, useContext: de, useDebugValue: me, useDeferredValue: ke, useEffect: ue, useErrorBoundary: function(e19) {
  var t2 = oe(Y++, 10), n2 = ae();
  return t2.__ = e19, X.componentDidCatch || (X.componentDidCatch = function(e20, r2) {
    t2.__ && t2.__(e20, r2), n2[1](e20);
  }), [n2[0], function() {
    n2[1](void 0);
  }];
}, useId: ve, useImperativeHandle: fe, useInsertionEffect: Ne, useLayoutEffect: le, useMemo: he, useReducer: se, useRef: ce, useState: ae, useSyncExternalStore: Se, useTransition: Me, version: "18.3.1" }, Symbol.toStringTag, { value: "Module" })), Pt = (e19) => _("svg", { width: 12, height: 12, viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e19 }, _("path", { d: "M5.99996 3.08333C5.4231 3.08333 4.85919 3.25439 4.37955 3.57488C3.8999 3.89537 3.52607 4.35089 3.30531 4.88384C3.08455 5.41679 3.0268 6.00324 3.13934 6.56901C3.25188 7.13479 3.52966 7.65449 3.93756 8.0624C4.34547 8.4703 4.86517 8.74809 5.43095 8.86063C5.99672 8.97317 6.58317 8.91541 7.11612 8.69465C7.64907 8.47389 8.10459 8.10006 8.42508 7.62041C8.74557 7.14077 8.91663 6.57686 8.91663 6C8.91663 5.22645 8.60933 4.48459 8.06235 3.93761C7.51537 3.39063 6.77351 3.08333 5.99996 3.08333ZM5.99996 7.75C5.65384 7.75 5.3155 7.64737 5.02771 7.45507C4.73992 7.26278 4.51562 6.98947 4.38317 6.6697C4.25072 6.34993 4.21606 5.99806 4.28358 5.65859C4.35111 5.31913 4.51778 5.00731 4.76252 4.76256C5.00726 4.51782 5.31908 4.35115 5.65855 4.28363C5.99802 4.2161 6.34988 4.25076 6.66966 4.38321C6.98943 4.51567 7.26274 4.73997 7.45503 5.02775C7.64732 5.31554 7.74996 5.65388 7.74996 6C7.74996 6.46413 7.56558 6.90925 7.2374 7.23744C6.90921 7.56563 6.46409 7.75 5.99996 7.75ZM8.91663 2.5C8.80125 2.5 8.68847 2.53421 8.59254 2.59831C8.49661 2.66241 8.42185 2.75351 8.3777 2.8601C8.33354 2.96669 8.32199 3.08398 8.3445 3.19714C8.36701 3.31029 8.42257 3.41423 8.50415 3.49581C8.58573 3.57739 8.68967 3.63295 8.80282 3.65546C8.91598 3.67797 9.03327 3.66642 9.13986 3.62226C9.24645 3.57811 9.33755 3.50335 9.40165 3.40742C9.46575 3.31149 9.49996 3.19871 9.49996 3.08333C9.49996 2.92862 9.4385 2.78025 9.32911 2.67086C9.21971 2.56146 9.07133 2.5 8.91663 2.5ZM11.7983 3.80667C11.7886 3.30816 11.6939 2.81497 11.5183 2.34833C11.3554 1.92371 11.1051 1.53808 10.7835 1.21649C10.4619 0.894904 10.0763 0.644544 9.65163 0.481668C9.18499 0.306026 8.6918 0.211332 8.19329 0.201668C7.62746 0.166668 7.44079 0.166668 5.99996 0.166668C4.55913 0.166668 4.37246 0.166668 3.80663 0.201668C3.30812 0.211332 2.81493 0.306026 2.34829 0.481668C1.92366 0.644544 1.53804 0.894904 1.21645 1.21649C0.894862 1.53808 0.644502 1.92371 0.481626 2.34833C0.305984 2.81497 0.21129 3.30816 0.201626 3.80667C0.166626 4.37833 0.166626 4.565 0.166626 6C0.166626 7.435 0.166626 7.62167 0.201626 8.19333C0.21129 8.69184 0.305984 9.18503 0.481626 9.65167C0.644502 10.0763 0.894862 10.4619 1.21645 10.7835C1.53804 11.1051 1.92366 11.3555 2.34829 11.5183C2.81493 11.694 3.30812 11.7887 3.80663 11.7983C4.38996 11.7983 4.55913 11.8333 5.99996 11.8333C7.44079 11.8333 7.62746 11.8333 8.19329 11.7983C8.6918 11.7887 9.18499 11.694 9.65163 11.5183C10.0763 11.3555 10.4619 11.1051 10.7835 10.7835C11.1051 10.4619 11.3554 10.0763 11.5183 9.65167C11.6939 9.18503 11.7886 8.69184 11.7983 8.19333C11.7983 7.61 11.8333 7.435 11.8333 6C11.8333 4.565 11.8333 4.37833 11.7983 3.80667ZM10.6316 8.14083C10.6214 8.51102 10.5525 8.87725 10.4275 9.22583C10.3241 9.50137 10.1607 9.75044 9.94913 9.955C9.74579 10.1667 9.49622 10.3284 9.21996 10.4275C8.87055 10.5576 8.50188 10.6286 8.12913 10.6375C7.58079 10.6375 7.41163 10.6667 5.99413 10.6667C4.57663 10.6667 4.41329 10.6667 3.86496 10.6667C3.4928 10.6571 3.12456 10.5881 2.77413 10.4625C2.49859 10.3591 2.24952 10.1957 2.04496 9.98417C1.8333 9.78083 1.67158 9.53126 1.57246 9.255C1.44285 8.90746 1.37188 8.5408 1.36246 8.17C1.36246 7.58667 1.36246 7.44083 1.36246 6.02917C1.36246 4.6175 1.36246 4.44833 1.36246 3.88833C1.37251 3.51571 1.44345 3.14723 1.57246 2.7975C1.67312 2.5237 1.83469 2.27636 2.04496 2.07417C2.24829 1.86251 2.49786 1.70079 2.77413 1.60167C3.12354 1.47152 3.4922 1.40055 3.86496 1.39167C4.41329 1.33333 4.58246 1.33333 5.99996 1.33333C7.41746 1.33333 7.58663 1.33333 8.13496 1.33333C8.50954 1.34286 8.88002 1.4138 9.23163 1.54333C9.50542 1.64399 9.75276 1.80556 9.95496 2.01583C10.1666 2.21917 10.3283 2.46874 10.4275 2.745C10.5703 3.1 10.6512 3.47684 10.6666 3.85917C10.6666 4.4425 10.6958 4.58833 10.6958 6C10.6958 7.41167 10.6666 7.58083 10.6666 8.14083H10.6316Z", fill: "#919191" })), kt = (e19) => _("svg", { width: 10, height: 14, viewBox: "0 0 10 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e19 }, _("path", { d: "M8.98413 5.50667C8.93062 5.42751 8.85848 5.3627 8.77406 5.31794C8.68963 5.27319 8.59551 5.24986 8.49996 5.25H6.74996V4.08334H8.03329C8.188 4.08334 8.33637 4.02188 8.44577 3.91248C8.55517 3.80309 8.61663 3.65471 8.61663 3.5V1.16667C8.61663 1.01196 8.55517 0.863586 8.44577 0.75419C8.33637 0.644794 8.188 0.583336 8.03329 0.583336H6.16663C5.26931 0.583336 4.40875 0.939793 3.77425 1.57429C3.13975 2.20879 2.78329 3.06935 2.78329 3.96667V5.25H1.49996C1.34525 5.25 1.19688 5.31146 1.08748 5.42086C0.978084 5.53025 0.916626 5.67863 0.916626 5.83334V8.16667C0.916626 8.32138 0.978084 8.46975 1.08748 8.57915C1.19688 8.68855 1.34525 8.75 1.49996 8.75H2.78329V12.8333C2.78329 12.988 2.84475 13.1364 2.95415 13.2458C3.06354 13.3552 3.21192 13.4167 3.36663 13.4167H6.16663C6.32133 13.4167 6.46971 13.3552 6.5791 13.2458C6.6885 13.1364 6.74996 12.988 6.74996 12.8333V8.75H7.56662C7.68345 8.75012 7.79763 8.71515 7.89435 8.64962C7.99108 8.5841 8.0659 8.49104 8.10913 8.3825L9.04246 6.04917C9.07769 5.96084 9.0908 5.86523 9.08063 5.77068C9.07046 5.67613 9.03733 5.58549 8.98413 5.50667ZM7.16996 7.58334H6.16663C6.01192 7.58334 5.86354 7.64479 5.75415 7.75419C5.64475 7.86359 5.58329 8.01196 5.58329 8.16667V12.25H3.94996V8.16667C3.94996 8.01196 3.8885 7.86359 3.7791 7.75419C3.66971 7.64479 3.52134 7.58334 3.36663 7.58334H2.08329V6.41667H3.36663C3.52134 6.41667 3.66971 6.35521 3.7791 6.24582C3.8885 6.13642 3.94996 5.98805 3.94996 5.83334V3.96667C3.9515 3.37925 4.18553 2.81632 4.60091 2.40095C5.01628 1.98558 5.5792 1.75154 6.16663 1.75H7.44996V2.91667H6.98329C6.78579 2.8879 6.58447 2.89997 6.39182 2.95215C6.19917 3.00432 6.01928 3.09549 5.86329 3.22C5.76863 3.31911 5.69502 3.43636 5.64689 3.56469C5.59877 3.69301 5.57714 3.82976 5.58329 3.96667V5.83334C5.58329 5.98805 5.64475 6.13642 5.75415 6.24582C5.86354 6.35521 6.01192 6.41667 6.16663 6.41667H7.63663L7.16996 7.58334Z", fill: "#919191" })), Mt = (e19) => _("svg", { width: 14, height: 11, viewBox: "0 0 14 11", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e19 }, _("path", { d: "M13.4116 1.13969C13.4116 1.04402 13.3844 0.950032 13.3326 0.867312C13.2809 0.784592 13.2064 0.71609 13.1168 0.668784C13.0273 0.621477 12.9258 0.597055 12.8228 0.598006C12.7198 0.598956 12.6188 0.625245 12.5303 0.674194C12.1889 0.862903 11.8213 1.00742 11.4377 1.10374C10.89 0.667278 10.1913 0.428442 9.46956 0.430883C8.67773 0.431729 7.91724 0.718287 7.34869 1.23005C6.78013 1.74181 6.448 2.43871 6.42244 3.1736C4.86143 2.94245 3.44665 2.18589 2.44787 1.04818C2.38769 0.980379 2.31084 0.927014 2.22379 0.892581C2.13674 0.858149 2.04205 0.843659 1.94771 0.850333C1.85342 0.857543 1.76244 0.885971 1.68264 0.93316C1.60284 0.980349 1.53662 1.04488 1.4897 1.12117C1.24909 1.51107 1.1109 1.94816 1.08636 2.39696C1.06181 2.84576 1.15159 3.2936 1.34842 3.70413L1.34729 3.70519C1.25882 3.75578 1.18581 3.82661 1.13525 3.91088C1.08468 3.99516 1.05824 4.09008 1.05847 4.18656C1.0574 4.26614 1.06254 4.3457 1.07385 4.42459C1.13343 5.10615 1.45872 5.74412 1.98873 6.21886C1.95277 6.28247 1.93083 6.35209 1.92418 6.42366C1.91752 6.49522 1.9263 6.56731 1.94999 6.63569C2.18105 7.30419 2.67244 7.86856 3.328 8.21837C2.66197 8.45752 1.94283 8.54091 1.23392 8.46117C1.10271 8.44588 0.969805 8.47246 0.856999 8.53653C0.744193 8.60061 0.658187 8.69838 0.613088 8.81381C0.56799 8.92924 0.566477 9.05547 0.608798 9.1718C0.65112 9.28814 0.734762 9.38766 0.846005 9.45405C2.06523 10.1832 3.48482 10.5709 4.93504 10.5707C6.57961 10.5879 8.18418 10.0999 9.49918 9.18267C10.8142 8.26543 11.7658 6.97036 12.2062 5.49892C12.4121 4.85793 12.5173 4.19267 12.5184 3.52376C12.5184 3.48832 12.5184 3.45182 12.5178 3.41533C12.8224 3.11033 13.0583 2.75195 13.2118 2.36119C13.3652 1.97043 13.4332 1.55515 13.4116 1.13969ZM11.4827 2.87948C11.3864 2.98529 11.3376 3.12149 11.3466 3.25981C11.3523 3.34918 11.3517 3.4391 11.3517 3.52376C11.3505 4.08901 11.2613 4.65113 11.0868 5.19267C10.7272 6.44467 9.92547 7.5484 8.81009 8.32707C7.69471 9.10575 6.33018 9.51433 4.93504 9.48739C4.43388 9.48753 3.93446 9.43285 3.44708 9.32446C4.06857 9.13848 4.64968 8.85176 5.16347 8.47758C5.2581 8.40839 5.32736 8.31371 5.36174 8.20652C5.39612 8.09933 5.39393 7.98489 5.35549 7.8789C5.31704 7.77291 5.24422 7.68056 5.14701 7.61453C5.0498 7.5485 4.93296 7.51202 4.81254 7.51009C4.32769 7.50309 3.8647 7.3216 3.52111 7.00387C3.60827 6.98853 3.69486 6.96948 3.78088 6.94674C3.90689 6.91343 4.01716 6.84172 4.09394 6.74315C4.17071 6.64457 4.20953 6.52487 4.20413 6.40332C4.19874 6.28177 4.14945 6.16544 4.0642 6.07307C3.97895 5.9807 3.8627 5.91765 3.73417 5.89408C3.45273 5.84247 3.1879 5.73129 2.96027 5.56918C2.73264 5.40707 2.54833 5.1984 2.42167 4.95939C2.52709 4.97275 2.63319 4.98105 2.73954 4.98425C2.86588 4.98602 2.98955 4.95044 3.09268 4.88264C3.1958 4.81484 3.27303 4.71834 3.31319 4.60709C3.35168 4.49484 3.3497 4.374 3.30755 4.26288C3.2654 4.15177 3.18538 4.05645 3.07963 3.99137C2.82305 3.83265 2.61287 3.61731 2.46792 3.36464C2.32297 3.11197 2.24777 2.82986 2.24906 2.54358C2.24906 2.50762 2.2502 2.47164 2.25248 2.4362C3.55988 3.56842 5.25567 4.23586 7.04106 4.32093C7.13119 4.32422 7.22094 4.30846 7.30354 4.27483C7.38614 4.2412 7.45943 4.19058 7.51787 4.12679C7.57573 4.06239 7.61669 3.9864 7.63755 3.9048C7.6584 3.82319 7.65857 3.73821 7.63804 3.65654C7.60468 3.52728 7.58767 3.39485 7.58734 3.26193C7.58787 2.79855 7.78634 2.35429 8.13921 2.02664C8.49207 1.69898 8.9705 1.51469 9.46952 1.5142C9.72627 1.51356 9.98036 1.56235 10.2158 1.6575C10.4512 1.75264 10.6628 1.89207 10.8373 2.06698C10.9046 2.13419 10.9892 2.1843 11.0833 2.21254C11.1773 2.24078 11.2775 2.24622 11.3745 2.22833C11.6141 2.18503 11.8503 2.12671 12.0814 2.05378C11.9237 2.3533 11.7223 2.63116 11.4827 2.87948Z", fill: "#919191" })), Nt = (e19) => _("svg", { width: 14, height: 12, viewBox: "0 0 14 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e19 }, _("path", { d: "M12.9877 0.416174C12.8216 0.278002 12.6211 0.187446 12.4077 0.154144C12.1942 0.120841 11.9757 0.146037 11.7754 0.227052L1.32155 4.44767C1.09799 4.53965 0.907688 4.69745 0.775904 4.90012C0.644119 5.10278 0.577085 5.34073 0.583698 5.58239C0.590312 5.82404 0.67026 6.05797 0.812932 6.25313C0.955605 6.44828 1.15425 6.59543 1.38251 6.67505L3.49709 7.41048L4.67572 11.3081C4.69174 11.3602 4.71498 11.4097 4.74477 11.4553C4.7493 11.4623 4.75567 11.4675 4.76048 11.4743C4.7949 11.5224 4.83649 11.5648 4.88381 11.6002C4.89727 11.6105 4.91016 11.6201 4.92454 11.6292C4.97992 11.6659 5.04125 11.6928 5.1058 11.7086L5.11271 11.7092L5.11662 11.7108C5.15543 11.7187 5.19494 11.7227 5.23454 11.7228C5.23835 11.7228 5.24173 11.721 5.24551 11.7209C5.30528 11.7199 5.36453 11.7096 5.42114 11.6904C5.43432 11.6859 5.4456 11.6784 5.45838 11.673C5.5006 11.6555 5.54061 11.6331 5.57755 11.6062C5.60714 11.5812 5.63674 11.5563 5.66635 11.5314L7.24261 9.79108L9.5936 11.6123C9.80058 11.7734 10.0553 11.861 10.3176 11.8612C10.5925 11.8609 10.8589 11.766 11.0721 11.5926C11.2854 11.4192 11.4325 11.1778 11.4889 10.9087L13.3921 1.56575C13.4352 1.35547 13.4204 1.13742 13.3491 0.934931C13.2779 0.73244 13.153 0.553126 12.9877 0.416174ZM5.46585 7.59619C5.38496 7.67675 5.32967 7.77941 5.30691 7.89128L5.12636 8.76861L4.66899 7.25598L7.04039 6.0211L5.46585 7.59619ZM10.3085 10.69L7.5303 8.53782C7.41406 8.448 7.26826 8.40528 7.12193 8.41816C6.9756 8.43104 6.8395 8.49858 6.74074 8.60732L6.23592 9.16452L6.41433 8.29742L10.5461 4.16567C10.6447 4.06718 10.7048 3.93663 10.7155 3.79766C10.7261 3.65869 10.6867 3.5205 10.6042 3.40811C10.5218 3.29572 10.4018 3.21657 10.2661 3.18499C10.1303 3.15342 9.98776 3.17151 9.8642 3.23598L3.93445 6.32335L1.76191 5.52832L12.2494 1.33275L10.3085 10.69Z", fill: "#919191" })), At = (e19) => _("svg", { width: 12, height: 10, viewBox: "0 0 12 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e19 }, _("path", { d: "M7.68579 4.11333L5.93579 3.09833C5.78032 3.00647 5.60304 2.95802 5.42246 2.95802C5.24188 2.95802 5.0646 3.00647 4.90913 3.09833C4.75246 3.18665 4.62258 3.31568 4.53325 3.47176C4.44391 3.62785 4.39843 3.80518 4.40163 3.985V6.015C4.39843 6.19481 4.44391 6.37215 4.53325 6.52824C4.62258 6.68432 4.75246 6.81335 4.90913 6.90167C5.0646 6.99352 5.24188 7.04198 5.42246 7.04198C5.60304 7.04198 5.78032 6.99352 5.93579 6.90167L7.68579 5.88667C7.8354 5.79484 7.95897 5.66619 8.04468 5.513C8.1304 5.35981 8.17541 5.18721 8.17541 5.01167C8.17541 4.83613 8.1304 4.66352 8.04468 4.51033C7.95897 4.35714 7.8354 4.22849 7.68579 4.13667V4.11333ZM5.55663 5.77V4.23L6.88663 5L5.55663 5.77ZM10.0833 0.333332H1.91663C1.4525 0.333332 1.00738 0.517707 0.679189 0.845895C0.351001 1.17408 0.166626 1.6192 0.166626 2.08333V7.91667C0.166626 8.38079 0.351001 8.82591 0.679189 9.1541C1.00738 9.48229 1.4525 9.66667 1.91663 9.66667H10.0833C10.5474 9.66667 10.9925 9.48229 11.3207 9.1541C11.6489 8.82591 11.8333 8.38079 11.8333 7.91667V2.08333C11.8333 1.6192 11.6489 1.17408 11.3207 0.845895C10.9925 0.517707 10.5474 0.333332 10.0833 0.333332ZM10.6666 7.91667C10.6666 8.07138 10.6052 8.21975 10.4958 8.32915C10.3864 8.43854 10.238 8.5 10.0833 8.5H1.91663C1.76192 8.5 1.61354 8.43854 1.50415 8.32915C1.39475 8.21975 1.33329 8.07138 1.33329 7.91667V2.08333C1.33329 1.92862 1.39475 1.78025 1.50415 1.67085C1.61354 1.56146 1.76192 1.5 1.91663 1.5H10.0833C10.238 1.5 10.3864 1.56146 10.4958 1.67085C10.6052 1.78025 10.6666 1.92862 10.6666 2.08333V7.91667Z", fill: "#919191" }));
function Rt() {
  return $("ul", { className: "socials column center-x gap-40", children: [{ name: "facebook", icon: $(kt, {}) }, { name: "instagram", icon: $(Pt, {}) }, { name: "twitter", icon: $(Mt, {}) }, { name: "youtube", icon: $(At, {}) }, { name: "telegram", icon: $(Nt, {}) }].map((e19, t2) => $("li", { children: e19.icon }, t2)) });
}
function Lt(e19) {
  if (void 0 === e19) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e19;
}
function jt(e19, t2) {
  e19.prototype = Object.create(t2.prototype), e19.prototype.constructor = e19, e19.__proto__ = t2;
}
/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Dt, zt, It, Bt, Ft, Vt, Ht, Ut, Wt, $t, Yt, Xt = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } }, qt = { duration: 0.5, overwrite: false, delay: 0 }, Zt = 1e8, Gt = 1e-8, Kt = 2 * Math.PI, Jt = Kt / 4, Qt = 0, en = Math.sqrt, tn = Math.cos, nn = Math.sin, rn = function(e19) {
  return "string" == typeof e19;
}, on = function(e19) {
  return "function" == typeof e19;
}, an = function(e19) {
  return "number" == typeof e19;
}, sn = function(e19) {
  return void 0 === e19;
}, un = function(e19) {
  return "object" == typeof e19;
}, ln = function(e19) {
  return false !== e19;
}, cn = function() {
  return "undefined" != typeof window;
}, fn = function(e19) {
  return on(e19) || rn(e19);
}, hn = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {
}, pn = Array.isArray, dn = /(?:-?\.?\d|\.)+/gi, mn = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, vn = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, gn = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, _n = /[+-]=-?[.\d]+/, yn = /[^,'"\[\]\s]+/gi, bn = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, wn = {}, xn = {}, Cn = function(e19) {
  return (xn = Jn(e19, wn)) && Qi;
}, Tn = function(e19, t2) {
  return console.warn("Invalid property", e19, "set to", t2, "Missing plugin? gsap.registerPlugin()");
}, On = function(e19, t2) {
  return !t2 && console.warn(e19);
}, Sn = function(e19, t2) {
  return e19 && (wn[e19] = t2) && xn && (xn[e19] = t2) || wn;
}, En = function() {
  return 0;
}, Pn = { suppressEvents: true, isStart: true, kill: false }, kn = { suppressEvents: true, kill: false }, Mn = { suppressEvents: true }, Nn = {}, An = [], Rn = {}, Ln = {}, jn = {}, Dn = 30, zn = [], In = "", Bn = function(e19) {
  var t2, n2, r2 = e19[0];
  if (un(r2) || on(r2) || (e19 = [e19]), !(t2 = (r2._gsap || {}).harness)) {
    for (n2 = zn.length; n2-- && !zn[n2].targetTest(r2); ) ;
    t2 = zn[n2];
  }
  for (n2 = e19.length; n2--; ) e19[n2] && (e19[n2]._gsap || (e19[n2]._gsap = new pi(e19[n2], t2))) || e19.splice(n2, 1);
  return e19;
}, Fn = function(e19) {
  return e19._gsap || Bn(Mr(e19))[0]._gsap;
}, Vn = function(e19, t2, n2) {
  return (n2 = e19[t2]) && on(n2) ? e19[t2]() : sn(n2) && e19.getAttribute && e19.getAttribute(t2) || n2;
}, Hn = function(e19, t2) {
  return (e19 = e19.split(",")).forEach(t2) || e19;
}, Un = function(e19) {
  return Math.round(1e5 * e19) / 1e5 || 0;
}, Wn = function(e19) {
  return Math.round(1e7 * e19) / 1e7 || 0;
}, $n = function(e19, t2) {
  var n2 = t2.charAt(0), r2 = parseFloat(t2.substr(2));
  return e19 = parseFloat(e19), "+" === n2 ? e19 + r2 : "-" === n2 ? e19 - r2 : "*" === n2 ? e19 * r2 : e19 / r2;
}, Yn = function(e19, t2) {
  for (var n2 = t2.length, r2 = 0; e19.indexOf(t2[r2]) < 0 && ++r2 < n2; ) ;
  return r2 < n2;
}, Xn = function() {
  var e19, t2, n2 = An.length, r2 = An.slice(0);
  for (Rn = {}, An.length = 0, e19 = 0; e19 < n2; e19++) (t2 = r2[e19]) && t2._lazy && (t2.render(t2._lazy[0], t2._lazy[1], true)._lazy = 0);
}, qn = function(e19, t2, n2, r2) {
  An.length && !zt && Xn(), e19.render(t2, n2, zt && t2 < 0 && (e19._initted || e19._startAt)), An.length && !zt && Xn();
}, Zn = function(e19) {
  var t2 = parseFloat(e19);
  return (t2 || 0 === t2) && (e19 + "").match(yn).length < 2 ? t2 : rn(e19) ? e19.trim() : e19;
}, Gn = function(e19) {
  return e19;
}, Kn = function(e19, t2) {
  for (var n2 in t2) n2 in e19 || (e19[n2] = t2[n2]);
  return e19;
}, Jn = function(e19, t2) {
  for (var n2 in t2) e19[n2] = t2[n2];
  return e19;
}, Qn = function e2(t2, n2) {
  for (var r2 in n2) "__proto__" !== r2 && "constructor" !== r2 && "prototype" !== r2 && (t2[r2] = un(n2[r2]) ? e2(t2[r2] || (t2[r2] = {}), n2[r2]) : n2[r2]);
  return t2;
}, er = function(e19, t2) {
  var n2, r2 = {};
  for (n2 in e19) n2 in t2 || (r2[n2] = e19[n2]);
  return r2;
}, tr = function(e19) {
  var t2, n2 = e19.parent || Bt, r2 = e19.keyframes ? (t2 = pn(e19.keyframes), function(e20, n3) {
    for (var r3 in n3) r3 in e20 || "duration" === r3 && t2 || "ease" === r3 || (e20[r3] = n3[r3]);
  }) : Kn;
  if (ln(e19.inherit)) for (; n2; ) r2(e19, n2.vars.defaults), n2 = n2.parent || n2._dp;
  return e19;
}, nr = function(e19, t2, n2, r2, i2) {
  var o2, a2 = e19[r2];
  if (i2) for (o2 = t2[i2]; a2 && a2[i2] > o2; ) a2 = a2._prev;
  return a2 ? (t2._next = a2._next, a2._next = t2) : (t2._next = e19[n2], e19[n2] = t2), t2._next ? t2._next._prev = t2 : e19[r2] = t2, t2._prev = a2, t2.parent = t2._dp = e19, t2;
}, rr = function(e19, t2, n2, r2) {
  void 0 === n2 && (n2 = "_first"), void 0 === r2 && (r2 = "_last");
  var i2 = t2._prev, o2 = t2._next;
  i2 ? i2._next = o2 : e19[n2] === t2 && (e19[n2] = o2), o2 ? o2._prev = i2 : e19[r2] === t2 && (e19[r2] = i2), t2._next = t2._prev = t2.parent = null;
}, ir = function(e19, t2) {
  e19.parent && (!t2 || e19.parent.autoRemoveChildren) && e19.parent.remove && e19.parent.remove(e19), e19._act = 0;
}, or = function(e19, t2) {
  if (e19 && (!t2 || t2._end > e19._dur || t2._start < 0)) for (var n2 = e19; n2; ) n2._dirty = 1, n2 = n2.parent;
  return e19;
}, ar = function(e19, t2, n2, r2) {
  return e19._startAt && (zt ? e19._startAt.revert(kn) : e19.vars.immediateRender && !e19.vars.autoRevert || e19._startAt.render(t2, true, r2));
}, sr = function e3(t2) {
  return !t2 || t2._ts && e3(t2.parent);
}, ur = function(e19) {
  return e19._repeat ? lr(e19._tTime, e19 = e19.duration() + e19._rDelay) * e19 : 0;
}, lr = function(e19, t2) {
  var n2 = Math.floor(e19 = Wn(e19 / t2));
  return e19 && n2 === e19 ? n2 - 1 : n2;
}, cr = function(e19, t2) {
  return (e19 - t2._start) * t2._ts + (t2._ts >= 0 ? 0 : t2._dirty ? t2.totalDuration() : t2._tDur);
}, fr = function(e19) {
  return e19._end = Wn(e19._start + (e19._tDur / Math.abs(e19._ts || e19._rts || Gt) || 0));
}, hr = function(e19, t2) {
  var n2 = e19._dp;
  return n2 && n2.smoothChildTiming && e19._ts && (e19._start = Wn(n2._time - (e19._ts > 0 ? t2 / e19._ts : ((e19._dirty ? e19.totalDuration() : e19._tDur) - t2) / -e19._ts)), fr(e19), n2._dirty || or(n2, e19)), e19;
}, pr = function(e19, t2) {
  var n2;
  if ((t2._time || !t2._dur && t2._initted || t2._start < e19._time && (t2._dur || !t2.add)) && (n2 = cr(e19.rawTime(), t2), (!t2._dur || Or(0, t2.totalDuration(), n2) - t2._tTime > Gt) && t2.render(n2, true)), or(e19, t2)._dp && e19._initted && e19._time >= e19._dur && e19._ts) {
    if (e19._dur < e19.duration()) for (n2 = e19; n2._dp; ) n2.rawTime() >= 0 && n2.totalTime(n2._tTime), n2 = n2._dp;
    e19._zTime = -1e-8;
  }
}, dr = function(e19, t2, n2, r2) {
  return t2.parent && ir(t2), t2._start = Wn((an(n2) ? n2 : n2 || e19 !== Bt ? xr(e19, n2, t2) : e19._time) + t2._delay), t2._end = Wn(t2._start + (t2.totalDuration() / Math.abs(t2.timeScale()) || 0)), nr(e19, t2, "_first", "_last", e19._sort ? "_start" : 0), _r(t2) || (e19._recent = t2), r2 || pr(e19, t2), e19._ts < 0 && hr(e19, e19._tTime), e19;
}, mr = function(e19, t2) {
  return (wn.ScrollTrigger || Tn("scrollTrigger", t2)) && wn.ScrollTrigger.create(t2, e19);
}, vr = function(e19, t2, n2, r2, i2) {
  return wi(e19, t2, i2), e19._initted ? !n2 && e19._pt && !zt && (e19._dur && false !== e19.vars.lazy || !e19._dur && e19.vars.lazy) && Wt !== ei.frame ? (An.push(e19), e19._lazy = [i2, r2], 1) : void 0 : 1;
}, gr = function e4(t2) {
  var n2 = t2.parent;
  return n2 && n2._ts && n2._initted && !n2._lock && (n2.rawTime() < 0 || e4(n2));
}, _r = function(e19) {
  var t2 = e19.data;
  return "isFromStart" === t2 || "isStart" === t2;
}, yr = function(e19, t2, n2, r2) {
  var i2 = e19._repeat, o2 = Wn(t2) || 0, a2 = e19._tTime / e19._tDur;
  return a2 && !r2 && (e19._time *= o2 / e19._dur), e19._dur = o2, e19._tDur = i2 ? i2 < 0 ? 1e10 : Wn(o2 * (i2 + 1) + e19._rDelay * i2) : o2, a2 > 0 && !r2 && hr(e19, e19._tTime = e19._tDur * a2), e19.parent && fr(e19), n2 || or(e19.parent, e19), e19;
}, br = function(e19) {
  return e19 instanceof mi ? or(e19) : yr(e19, e19._dur);
}, wr = { _start: 0, endTime: En, totalDuration: En }, xr = function e5(t2, n2, r2) {
  var i2, o2, a2, s2 = t2.labels, u2 = t2._recent || wr, l2 = t2.duration() >= Zt ? u2.endTime(false) : t2._dur;
  return rn(n2) && (isNaN(n2) || n2 in s2) ? (o2 = n2.charAt(0), a2 = "%" === n2.substr(-1), i2 = n2.indexOf("="), "<" === o2 || ">" === o2 ? (i2 >= 0 && (n2 = n2.replace(/=/, "")), ("<" === o2 ? u2._start : u2.endTime(u2._repeat >= 0)) + (parseFloat(n2.substr(1)) || 0) * (a2 ? (i2 < 0 ? u2 : r2).totalDuration() / 100 : 1)) : i2 < 0 ? (n2 in s2 || (s2[n2] = l2), s2[n2]) : (o2 = parseFloat(n2.charAt(i2 - 1) + n2.substr(i2 + 1)), a2 && r2 && (o2 = o2 / 100 * (pn(r2) ? r2[0] : r2).totalDuration()), i2 > 1 ? e5(t2, n2.substr(0, i2 - 1), r2) + o2 : l2 + o2)) : null == n2 ? l2 : +n2;
}, Cr = function(e19, t2, n2) {
  var r2, i2, o2 = an(t2[1]), a2 = (o2 ? 2 : 1) + (e19 < 2 ? 0 : 1), s2 = t2[a2];
  if (o2 && (s2.duration = t2[1]), s2.parent = n2, e19) {
    for (r2 = s2, i2 = n2; i2 && !("immediateRender" in r2); ) r2 = i2.vars.defaults || {}, i2 = ln(i2.vars.inherit) && i2.parent;
    s2.immediateRender = ln(r2.immediateRender), e19 < 2 ? s2.runBackwards = 1 : s2.startAt = t2[a2 - 1];
  }
  return new Si(t2[0], s2, t2[a2 + 1]);
}, Tr = function(e19, t2) {
  return e19 || 0 === e19 ? t2(e19) : t2;
}, Or = function(e19, t2, n2) {
  return n2 < e19 ? e19 : n2 > t2 ? t2 : n2;
}, Sr = function(e19, t2) {
  return rn(e19) && (t2 = bn.exec(e19)) ? t2[1] : "";
}, Er = [].slice, Pr = function(e19, t2) {
  return e19 && un(e19) && "length" in e19 && (!t2 && !e19.length || e19.length - 1 in e19 && un(e19[0])) && !e19.nodeType && e19 !== Ft;
}, kr = function(e19, t2, n2) {
  return void 0 === n2 && (n2 = []), e19.forEach(function(e20) {
    var r2;
    return rn(e20) && !t2 || Pr(e20, 1) ? (r2 = n2).push.apply(r2, Mr(e20)) : n2.push(e20);
  }) || n2;
}, Mr = function(e19, t2, n2) {
  return It && !t2 && It.selector ? It.selector(e19) : !rn(e19) || n2 || !Vt && ti() ? pn(e19) ? kr(e19, n2) : Pr(e19) ? Er.call(e19, 0) : e19 ? [e19] : [] : Er.call((t2 || Ht).querySelectorAll(e19), 0);
}, Nr = function(e19) {
  return e19 = Mr(e19)[0] || On("Invalid scope") || {}, function(t2) {
    var n2 = e19.current || e19.nativeElement || e19;
    return Mr(t2, n2.querySelectorAll ? n2 : n2 === e19 ? On("Invalid scope") || Ht.createElement("div") : e19);
  };
}, Ar = function(e19) {
  return e19.sort(function() {
    return 0.5 - Math.random();
  });
}, Rr = function(e19) {
  if (on(e19)) return e19;
  var t2 = un(e19) ? e19 : { each: e19 }, n2 = ui(t2.ease), r2 = t2.from || 0, i2 = parseFloat(t2.base) || 0, o2 = {}, a2 = r2 > 0 && r2 < 1, s2 = isNaN(r2) || a2, u2 = t2.axis, l2 = r2, c2 = r2;
  return rn(r2) ? l2 = c2 = { center: 0.5, edges: 0.5, end: 1 }[r2] || 0 : !a2 && s2 && (l2 = r2[0], c2 = r2[1]), function(e20, a3, f2) {
    var h2, p2, d2, m2, v2, g2, _2, y2, b2, w2 = (f2 || t2).length, x2 = o2[w2];
    if (!x2) {
      if (!(b2 = "auto" === t2.grid ? 0 : (t2.grid || [1, Zt])[1])) {
        for (_2 = -1e8; _2 < (_2 = f2[b2++].getBoundingClientRect().left) && b2 < w2; ) ;
        b2 < w2 && b2--;
      }
      for (x2 = o2[w2] = [], h2 = s2 ? Math.min(b2, w2) * l2 - 0.5 : r2 % b2, p2 = b2 === Zt ? 0 : s2 ? w2 * c2 / b2 - 0.5 : r2 / b2 | 0, _2 = 0, y2 = Zt, g2 = 0; g2 < w2; g2++) d2 = g2 % b2 - h2, m2 = p2 - (g2 / b2 | 0), x2[g2] = v2 = u2 ? Math.abs("y" === u2 ? m2 : d2) : en(d2 * d2 + m2 * m2), v2 > _2 && (_2 = v2), v2 < y2 && (y2 = v2);
      "random" === r2 && Ar(x2), x2.max = _2 - y2, x2.min = y2, x2.v = w2 = (parseFloat(t2.amount) || parseFloat(t2.each) * (b2 > w2 ? w2 - 1 : u2 ? "y" === u2 ? w2 / b2 : b2 : Math.max(b2, w2 / b2)) || 0) * ("edges" === r2 ? -1 : 1), x2.b = w2 < 0 ? i2 - w2 : i2, x2.u = Sr(t2.amount || t2.each) || 0, n2 = n2 && w2 < 0 ? ai(n2) : n2;
    }
    return w2 = (x2[e20] - x2.min) / x2.max || 0, Wn(x2.b + (n2 ? n2(w2) : w2) * x2.v) + x2.u;
  };
}, Lr = function(e19) {
  var t2 = Math.pow(10, ((e19 + "").split(".")[1] || "").length);
  return function(n2) {
    var r2 = Wn(Math.round(parseFloat(n2) / e19) * e19 * t2);
    return (r2 - r2 % 1) / t2 + (an(n2) ? 0 : Sr(n2));
  };
}, jr = function(e19, t2) {
  var n2, r2, i2 = pn(e19);
  return !i2 && un(e19) && (n2 = i2 = e19.radius || Zt, e19.values ? (e19 = Mr(e19.values), (r2 = !an(e19[0])) && (n2 *= n2)) : e19 = Lr(e19.increment)), Tr(t2, i2 ? on(e19) ? function(t3) {
    return r2 = e19(t3), Math.abs(r2 - t3) <= n2 ? r2 : t3;
  } : function(t3) {
    for (var i3, o2, a2 = parseFloat(r2 ? t3.x : t3), s2 = parseFloat(r2 ? t3.y : 0), u2 = Zt, l2 = 0, c2 = e19.length; c2--; ) (i3 = r2 ? (i3 = e19[c2].x - a2) * i3 + (o2 = e19[c2].y - s2) * o2 : Math.abs(e19[c2] - a2)) < u2 && (u2 = i3, l2 = c2);
    return l2 = !n2 || u2 <= n2 ? e19[l2] : t3, r2 || l2 === t3 || an(t3) ? l2 : l2 + Sr(t3);
  } : Lr(e19));
}, Dr = function(e19, t2, n2, r2) {
  return Tr(pn(e19) ? !t2 : true === n2 ? !!(n2 = 0) : !r2, function() {
    return pn(e19) ? e19[~~(Math.random() * e19.length)] : (n2 = n2 || 1e-5) && (r2 = n2 < 1 ? Math.pow(10, (n2 + "").length - 2) : 1) && Math.floor(Math.round((e19 - n2 / 2 + Math.random() * (t2 - e19 + 0.99 * n2)) / n2) * n2 * r2) / r2;
  });
}, zr = function(e19, t2, n2) {
  return Tr(n2, function(n3) {
    return e19[~~t2(n3)];
  });
}, Ir = function(e19) {
  for (var t2, n2, r2, i2, o2 = 0, a2 = ""; ~(t2 = e19.indexOf("random(", o2)); ) r2 = e19.indexOf(")", t2), i2 = "[" === e19.charAt(t2 + 7), n2 = e19.substr(t2 + 7, r2 - t2 - 7).match(i2 ? yn : dn), a2 += e19.substr(o2, t2 - o2) + Dr(i2 ? n2 : +n2[0], i2 ? 0 : +n2[1], +n2[2] || 1e-5), o2 = r2 + 1;
  return a2 + e19.substr(o2, e19.length - o2);
}, Br = function(e19, t2, n2, r2, i2) {
  var o2 = t2 - e19, a2 = r2 - n2;
  return Tr(i2, function(t3) {
    return n2 + ((t3 - e19) / o2 * a2 || 0);
  });
}, Fr = function(e19, t2, n2) {
  var r2, i2, o2, a2 = e19.labels, s2 = Zt;
  for (r2 in a2) (i2 = a2[r2] - t2) < 0 == !!n2 && i2 && s2 > (i2 = Math.abs(i2)) && (o2 = r2, s2 = i2);
  return o2;
}, Vr = function(e19, t2, n2) {
  var r2, i2, o2, a2 = e19.vars, s2 = a2[t2], u2 = It, l2 = e19._ctx;
  if (s2) return r2 = a2[t2 + "Params"], i2 = a2.callbackScope || e19, n2 && An.length && Xn(), l2 && (It = l2), o2 = r2 ? s2.apply(i2, r2) : s2.call(i2), It = u2, o2;
}, Hr = function(e19) {
  return ir(e19), e19.scrollTrigger && e19.scrollTrigger.kill(!!zt), e19.progress() < 1 && Vr(e19, "onInterrupt"), e19;
}, Ur = [], Wr = function(e19) {
  if (e19) if (e19 = !e19.name && e19.default || e19, cn() || e19.headless) {
    var t2 = e19.name, n2 = on(e19), r2 = t2 && !n2 && e19.init ? function() {
      this._props = [];
    } : e19, i2 = { init: En, render: ji, add: yi, kill: zi, modifier: Di, rawVars: 0 }, o2 = { targetTest: 0, get: 0, getSetter: Ni, aliases: {}, register: 0 };
    if (ti(), e19 !== r2) {
      if (Ln[t2]) return;
      Kn(r2, Kn(er(e19, i2), o2)), Jn(r2.prototype, Jn(i2, er(e19, o2))), Ln[r2.prop = t2] = r2, e19.targetTest && (zn.push(r2), Nn[t2] = 1), t2 = ("css" === t2 ? "CSS" : t2.charAt(0).toUpperCase() + t2.substr(1)) + "Plugin";
    }
    Sn(t2, r2), e19.register && e19.register(Qi, r2, Fi);
  } else Ur.push(e19);
}, $r = 255, Yr = { aqua: [0, $r, $r], lime: [0, $r, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, $r], navy: [0, 0, 128], white: [$r, $r, $r], olive: [128, 128, 0], yellow: [$r, $r, 0], orange: [$r, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [$r, 0, 0], pink: [$r, 192, 203], cyan: [0, $r, $r], transparent: [$r, $r, $r, 0] }, Xr = function(e19, t2, n2) {
  return (6 * (e19 += e19 < 0 ? 1 : e19 > 1 ? -1 : 0) < 1 ? t2 + (n2 - t2) * e19 * 6 : e19 < 0.5 ? n2 : 3 * e19 < 2 ? t2 + (n2 - t2) * (2 / 3 - e19) * 6 : t2) * $r + 0.5 | 0;
}, qr = function(e19, t2, n2) {
  var r2, i2, o2, a2, s2, u2, l2, c2, f2, h2, p2 = e19 ? an(e19) ? [e19 >> 16, e19 >> 8 & $r, e19 & $r] : 0 : Yr.black;
  if (!p2) {
    if ("," === e19.substr(-1) && (e19 = e19.substr(0, e19.length - 1)), Yr[e19]) p2 = Yr[e19];
    else if ("#" === e19.charAt(0)) {
      if (e19.length < 6 && (r2 = e19.charAt(1), i2 = e19.charAt(2), o2 = e19.charAt(3), e19 = "#" + r2 + r2 + i2 + i2 + o2 + o2 + (5 === e19.length ? e19.charAt(4) + e19.charAt(4) : "")), 9 === e19.length) return [(p2 = parseInt(e19.substr(1, 6), 16)) >> 16, p2 >> 8 & $r, p2 & $r, parseInt(e19.substr(7), 16) / 255];
      p2 = [(e19 = parseInt(e19.substr(1), 16)) >> 16, e19 >> 8 & $r, e19 & $r];
    } else if ("hsl" === e19.substr(0, 3)) if (p2 = h2 = e19.match(dn), t2) {
      if (~e19.indexOf("=")) return p2 = e19.match(mn), n2 && p2.length < 4 && (p2[3] = 1), p2;
    } else a2 = +p2[0] % 360 / 360, s2 = +p2[1] / 100, r2 = 2 * (u2 = +p2[2] / 100) - (i2 = u2 <= 0.5 ? u2 * (s2 + 1) : u2 + s2 - u2 * s2), p2.length > 3 && (p2[3] *= 1), p2[0] = Xr(a2 + 1 / 3, r2, i2), p2[1] = Xr(a2, r2, i2), p2[2] = Xr(a2 - 1 / 3, r2, i2);
    else p2 = e19.match(dn) || Yr.transparent;
    p2 = p2.map(Number);
  }
  return t2 && !h2 && (r2 = p2[0] / $r, i2 = p2[1] / $r, o2 = p2[2] / $r, u2 = ((l2 = Math.max(r2, i2, o2)) + (c2 = Math.min(r2, i2, o2))) / 2, l2 === c2 ? a2 = s2 = 0 : (f2 = l2 - c2, s2 = u2 > 0.5 ? f2 / (2 - l2 - c2) : f2 / (l2 + c2), a2 = l2 === r2 ? (i2 - o2) / f2 + (i2 < o2 ? 6 : 0) : l2 === i2 ? (o2 - r2) / f2 + 2 : (r2 - i2) / f2 + 4, a2 *= 60), p2[0] = ~~(a2 + 0.5), p2[1] = ~~(100 * s2 + 0.5), p2[2] = ~~(100 * u2 + 0.5)), n2 && p2.length < 4 && (p2[3] = 1), p2;
}, Zr = function(e19) {
  var t2 = [], n2 = [], r2 = -1;
  return e19.split(Kr).forEach(function(e20) {
    var i2 = e20.match(vn) || [];
    t2.push.apply(t2, i2), n2.push(r2 += i2.length + 1);
  }), t2.c = n2, t2;
}, Gr = function(e19, t2, n2) {
  var r2, i2, o2, a2, s2 = "", u2 = (e19 + s2).match(Kr), l2 = t2 ? "hsla(" : "rgba(", c2 = 0;
  if (!u2) return e19;
  if (u2 = u2.map(function(e20) {
    return (e20 = qr(e20, t2, 1)) && l2 + (t2 ? e20[0] + "," + e20[1] + "%," + e20[2] + "%," + e20[3] : e20.join(",")) + ")";
  }), n2 && (o2 = Zr(e19), (r2 = n2.c).join(s2) !== o2.c.join(s2))) for (a2 = (i2 = e19.replace(Kr, "1").split(vn)).length - 1; c2 < a2; c2++) s2 += i2[c2] + (~r2.indexOf(c2) ? u2.shift() || l2 + "0,0,0,0)" : (o2.length ? o2 : u2.length ? u2 : n2).shift());
  if (!i2) for (a2 = (i2 = e19.split(Kr)).length - 1; c2 < a2; c2++) s2 += i2[c2] + u2[c2];
  return s2 + i2[a2];
}, Kr = function() {
  var e19, t2 = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
  for (e19 in Yr) t2 += "|" + e19 + "\\b";
  return new RegExp(t2 + ")", "gi");
}(), Jr = /hsl[a]?\(/, Qr = function(e19) {
  var t2, n2 = e19.join(" ");
  if (Kr.lastIndex = 0, Kr.test(n2)) return t2 = Jr.test(n2), e19[1] = Gr(e19[1], t2), e19[0] = Gr(e19[0], t2, Zr(e19[1])), true;
}, ei = function() {
  var e19, t2, n2, r2, i2, o2, a2 = Date.now, s2 = 500, u2 = 33, l2 = a2(), c2 = l2, f2 = 1e3 / 240, h2 = f2, p2 = [], d2 = function n3(d3) {
    var m2, v2, g2, _2, y2 = a2() - c2, b2 = true === d3;
    if ((y2 > s2 || y2 < 0) && (l2 += y2 - u2), ((m2 = (g2 = (c2 += y2) - l2) - h2) > 0 || b2) && (_2 = ++r2.frame, i2 = g2 - 1e3 * r2.time, r2.time = g2 /= 1e3, h2 += m2 + (m2 >= f2 ? 4 : f2 - m2), v2 = 1), b2 || (e19 = t2(n3)), v2) for (o2 = 0; o2 < p2.length; o2++) p2[o2](g2, i2, _2, d3);
  };
  return r2 = { time: 0, frame: 0, tick: function() {
    d2(true);
  }, deltaRatio: function(e20) {
    return i2 / (1e3 / (e20 || 60));
  }, wake: function() {
    Ut && (!Vt && cn() && (Ft = Vt = window, Ht = Ft.document || {}, wn.gsap = Qi, (Ft.gsapVersions || (Ft.gsapVersions = [])).push(Qi.version), Cn(xn || Ft.GreenSockGlobals || !Ft.gsap && Ft || {}), Ur.forEach(Wr)), n2 = "undefined" != typeof requestAnimationFrame && requestAnimationFrame, e19 && r2.sleep(), t2 = n2 || function(e20) {
      return setTimeout(e20, h2 - 1e3 * r2.time + 1 | 0);
    }, Yt = 1, d2(2));
  }, sleep: function() {
    (n2 ? cancelAnimationFrame : clearTimeout)(e19), Yt = 0, t2 = En;
  }, lagSmoothing: function(e20, t3) {
    s2 = e20 || 1 / 0, u2 = Math.min(t3 || 33, s2);
  }, fps: function(e20) {
    f2 = 1e3 / (e20 || 240), h2 = 1e3 * r2.time + f2;
  }, add: function(e20, t3, n3) {
    var i3 = t3 ? function(t4, n4, o3, a3) {
      e20(t4, n4, o3, a3), r2.remove(i3);
    } : e20;
    return r2.remove(e20), p2[n3 ? "unshift" : "push"](i3), ti(), i3;
  }, remove: function(e20, t3) {
    ~(t3 = p2.indexOf(e20)) && p2.splice(t3, 1) && o2 >= t3 && o2--;
  }, _listeners: p2 }, r2;
}(), ti = function() {
  return !Yt && ei.wake();
}, ni = {}, ri = /^[\d.\-M][\d.\-,\s]/, ii = /["']/g, oi = function(e19) {
  for (var t2, n2, r2, i2 = {}, o2 = e19.substr(1, e19.length - 3).split(":"), a2 = o2[0], s2 = 1, u2 = o2.length; s2 < u2; s2++) n2 = o2[s2], t2 = s2 !== u2 - 1 ? n2.lastIndexOf(",") : n2.length, r2 = n2.substr(0, t2), i2[a2] = isNaN(r2) ? r2.replace(ii, "").trim() : +r2, a2 = n2.substr(t2 + 1).trim();
  return i2;
}, ai = function(e19) {
  return function(t2) {
    return 1 - e19(1 - t2);
  };
}, si = function e6(t2, n2) {
  for (var r2, i2 = t2._first; i2; ) i2 instanceof mi ? e6(i2, n2) : !i2.vars.yoyoEase || i2._yoyo && i2._repeat || i2._yoyo === n2 || (i2.timeline ? e6(i2.timeline, n2) : (r2 = i2._ease, i2._ease = i2._yEase, i2._yEase = r2, i2._yoyo = n2)), i2 = i2._next;
}, ui = function(e19, t2) {
  return e19 && (on(e19) ? e19 : ni[e19] || function(e20) {
    var t3 = (e20 + "").split("("), n2 = ni[t3[0]];
    return n2 && t3.length > 1 && n2.config ? n2.config.apply(null, ~e20.indexOf("{") ? [oi(t3[1])] : function(e21) {
      var t4 = e21.indexOf("(") + 1, n3 = e21.indexOf(")"), r2 = e21.indexOf("(", t4);
      return e21.substring(t4, ~r2 && r2 < n3 ? e21.indexOf(")", n3 + 1) : n3);
    }(e20).split(",").map(Zn)) : ni._CE && ri.test(e20) ? ni._CE("", e20) : n2;
  }(e19)) || t2;
}, li = function(e19, t2, n2, r2) {
  void 0 === n2 && (n2 = function(e20) {
    return 1 - t2(1 - e20);
  }), void 0 === r2 && (r2 = function(e20) {
    return e20 < 0.5 ? t2(2 * e20) / 2 : 1 - t2(2 * (1 - e20)) / 2;
  });
  var i2, o2 = { easeIn: t2, easeOut: n2, easeInOut: r2 };
  return Hn(e19, function(e20) {
    for (var t3 in ni[e20] = wn[e20] = o2, ni[i2 = e20.toLowerCase()] = n2, o2) ni[i2 + ("easeIn" === t3 ? ".in" : "easeOut" === t3 ? ".out" : ".inOut")] = ni[e20 + "." + t3] = o2[t3];
  }), o2;
}, ci = function(e19) {
  return function(t2) {
    return t2 < 0.5 ? (1 - e19(1 - 2 * t2)) / 2 : 0.5 + e19(2 * (t2 - 0.5)) / 2;
  };
}, fi = function e7(t2, n2, r2) {
  var i2 = n2 >= 1 ? n2 : 1, o2 = (r2 || (t2 ? 0.3 : 0.45)) / (n2 < 1 ? n2 : 1), a2 = o2 / Kt * (Math.asin(1 / i2) || 0), s2 = function(e19) {
    return 1 === e19 ? 1 : i2 * Math.pow(2, -10 * e19) * nn((e19 - a2) * o2) + 1;
  }, u2 = "out" === t2 ? s2 : "in" === t2 ? function(e19) {
    return 1 - s2(1 - e19);
  } : ci(s2);
  return o2 = Kt / o2, u2.config = function(n3, r3) {
    return e7(t2, n3, r3);
  }, u2;
}, hi = function e8(t2, n2) {
  void 0 === n2 && (n2 = 1.70158);
  var r2 = function(e19) {
    return e19 ? --e19 * e19 * ((n2 + 1) * e19 + n2) + 1 : 0;
  }, i2 = "out" === t2 ? r2 : "in" === t2 ? function(e19) {
    return 1 - r2(1 - e19);
  } : ci(r2);
  return i2.config = function(n3) {
    return e8(t2, n3);
  }, i2;
};
Hn("Linear,Quad,Cubic,Quart,Quint,Strong", function(e19, t2) {
  var n2 = t2 < 5 ? t2 + 1 : t2;
  li(e19 + ",Power" + (n2 - 1), t2 ? function(e20) {
    return Math.pow(e20, n2);
  } : function(e20) {
    return e20;
  }, function(e20) {
    return 1 - Math.pow(1 - e20, n2);
  }, function(e20) {
    return e20 < 0.5 ? Math.pow(2 * e20, n2) / 2 : 1 - Math.pow(2 * (1 - e20), n2) / 2;
  });
}), ni.Linear.easeNone = ni.none = ni.Linear.easeIn, li("Elastic", fi("in"), fi("out"), fi()), function(e19, t2) {
  var n2 = 1 / t2, r2 = 2 * n2, i2 = 2.5 * n2, o2 = function(o3) {
    return o3 < n2 ? e19 * o3 * o3 : o3 < r2 ? e19 * Math.pow(o3 - 1.5 / t2, 2) + 0.75 : o3 < i2 ? e19 * (o3 -= 2.25 / t2) * o3 + 0.9375 : e19 * Math.pow(o3 - 2.625 / t2, 2) + 0.984375;
  };
  li("Bounce", function(e20) {
    return 1 - o2(1 - e20);
  }, o2);
}(7.5625, 2.75), li("Expo", function(e19) {
  return Math.pow(2, 10 * (e19 - 1)) * e19 + e19 * e19 * e19 * e19 * e19 * e19 * (1 - e19);
}), li("Circ", function(e19) {
  return -(en(1 - e19 * e19) - 1);
}), li("Sine", function(e19) {
  return 1 === e19 ? 1 : 1 - tn(e19 * Jt);
}), li("Back", hi("in"), hi("out"), hi()), ni.SteppedEase = ni.steps = wn.SteppedEase = { config: function(e19, t2) {
  void 0 === e19 && (e19 = 1);
  var n2 = 1 / e19, r2 = e19 + (t2 ? 0 : 1), i2 = t2 ? 1 : 0;
  return function(e20) {
    return ((r2 * Or(0, 0.99999999, e20) | 0) + i2) * n2;
  };
} }, qt.ease = ni["quad.out"], Hn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(e19) {
  return In += e19 + "," + e19 + "Params,";
});
var pi = function(e19, t2) {
  this.id = Qt++, e19._gsap = this, this.target = e19, this.harness = t2, this.get = t2 ? t2.get : Vn, this.set = t2 ? t2.getSetter : Ni;
}, di = function() {
  function e19(e20) {
    this.vars = e20, this._delay = +e20.delay || 0, (this._repeat = e20.repeat === 1 / 0 ? -2 : e20.repeat || 0) && (this._rDelay = e20.repeatDelay || 0, this._yoyo = !!e20.yoyo || !!e20.yoyoEase), this._ts = 1, yr(this, +e20.duration, 1, 1), this.data = e20.data, It && (this._ctx = It, It.data.push(this)), Yt || ei.wake();
  }
  var t2 = e19.prototype;
  return t2.delay = function(e20) {
    return e20 || 0 === e20 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e20 - this._delay), this._delay = e20, this) : this._delay;
  }, t2.duration = function(e20) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? e20 + (e20 + this._rDelay) * this._repeat : e20) : this.totalDuration() && this._dur;
  }, t2.totalDuration = function(e20) {
    return arguments.length ? (this._dirty = 0, yr(this, this._repeat < 0 ? e20 : (e20 - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t2.totalTime = function(e20, t3) {
    if (ti(), !arguments.length) return this._tTime;
    var n2 = this._dp;
    if (n2 && n2.smoothChildTiming && this._ts) {
      for (hr(this, e20), !n2._dp || n2.parent || pr(n2, this); n2 && n2.parent; ) n2.parent._time !== n2._start + (n2._ts >= 0 ? n2._tTime / n2._ts : (n2.totalDuration() - n2._tTime) / -n2._ts) && n2.totalTime(n2._tTime, true), n2 = n2.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e20 < this._tDur || this._ts < 0 && e20 > 0 || !this._tDur && !e20) && dr(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== e20 || !this._dur && !t3 || this._initted && Math.abs(this._zTime) === Gt || !e20 && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e20), qn(this, e20, t3)), this;
  }, t2.time = function(e20, t3) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e20 + ur(this)) % (this._dur + this._rDelay) || (e20 ? this._dur : 0), t3) : this._time;
  }, t2.totalProgress = function(e20, t3) {
    return arguments.length ? this.totalTime(this.totalDuration() * e20, t3) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, t2.progress = function(e20, t3) {
    return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? e20 : 1 - e20) + ur(this), t3) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t2.iteration = function(e20, t3) {
    var n2 = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (e20 - 1) * n2, t3) : this._repeat ? lr(this._tTime, n2) + 1 : 1;
  }, t2.timeScale = function(e20, t3) {
    if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
    if (this._rts === e20) return this;
    var n2 = this.parent && this._ts ? cr(this.parent._time, this) : this._tTime;
    return this._rts = +e20 || 0, this._ts = this._ps || -1e-8 === e20 ? 0 : this._rts, this.totalTime(Or(-Math.abs(this._delay), this._tDur, n2), false !== t3), fr(this), function(e21) {
      for (var t4 = e21.parent; t4 && t4.parent; ) t4._dirty = 1, t4.totalDuration(), t4 = t4.parent;
      return e21;
    }(this);
  }, t2.paused = function(e20) {
    return arguments.length ? (this._ps !== e20 && (this._ps = e20, e20 ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (ti(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== Gt && (this._tTime -= Gt)))), this) : this._ps;
  }, t2.startTime = function(e20) {
    if (arguments.length) {
      this._start = e20;
      var t3 = this.parent || this._dp;
      return t3 && (t3._sort || !this.parent) && dr(t3, this, e20 - this._delay), this;
    }
    return this._start;
  }, t2.endTime = function(e20) {
    return this._start + (ln(e20) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t2.rawTime = function(e20) {
    var t3 = this.parent || this._dp;
    return t3 ? e20 && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? cr(t3.rawTime(e20), this) : this._tTime : this._tTime;
  }, t2.revert = function(e20) {
    void 0 === e20 && (e20 = Mn);
    var t3 = zt;
    return zt = e20, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(e20), this.totalTime(-0.01, e20.suppressEvents)), "nested" !== this.data && false !== e20.kill && this.kill(), zt = t3, this;
  }, t2.globalTime = function(e20) {
    for (var t3 = this, n2 = arguments.length ? e20 : t3.rawTime(); t3; ) n2 = t3._start + n2 / (Math.abs(t3._ts) || 1), t3 = t3._dp;
    return !this.parent && this._sat ? this._sat.globalTime(e20) : n2;
  }, t2.repeat = function(e20) {
    return arguments.length ? (this._repeat = e20 === 1 / 0 ? -2 : e20, br(this)) : -2 === this._repeat ? 1 / 0 : this._repeat;
  }, t2.repeatDelay = function(e20) {
    if (arguments.length) {
      var t3 = this._time;
      return this._rDelay = e20, br(this), t3 ? this.time(t3) : this;
    }
    return this._rDelay;
  }, t2.yoyo = function(e20) {
    return arguments.length ? (this._yoyo = e20, this) : this._yoyo;
  }, t2.seek = function(e20, t3) {
    return this.totalTime(xr(this, e20), ln(t3));
  }, t2.restart = function(e20, t3) {
    return this.play().totalTime(e20 ? -this._delay : 0, ln(t3)), this._dur || (this._zTime = -1e-8), this;
  }, t2.play = function(e20, t3) {
    return null != e20 && this.seek(e20, t3), this.reversed(false).paused(false);
  }, t2.reverse = function(e20, t3) {
    return null != e20 && this.seek(e20 || this.totalDuration(), t3), this.reversed(true).paused(false);
  }, t2.pause = function(e20, t3) {
    return null != e20 && this.seek(e20, t3), this.paused(true);
  }, t2.resume = function() {
    return this.paused(false);
  }, t2.reversed = function(e20) {
    return arguments.length ? (!!e20 !== this.reversed() && this.timeScale(-this._rts || (e20 ? -1e-8 : 0)), this) : this._rts < 0;
  }, t2.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -1e-8, this;
  }, t2.isActive = function() {
    var e20, t3 = this.parent || this._dp, n2 = this._start;
    return !(t3 && !(this._ts && this._initted && t3.isActive() && (e20 = t3.rawTime(true)) >= n2 && e20 < this.endTime(true) - Gt));
  }, t2.eventCallback = function(e20, t3, n2) {
    var r2 = this.vars;
    return arguments.length > 1 ? (t3 ? (r2[e20] = t3, n2 && (r2[e20 + "Params"] = n2), "onUpdate" === e20 && (this._onUpdate = t3)) : delete r2[e20], this) : r2[e20];
  }, t2.then = function(e20) {
    var t3 = this;
    return new Promise(function(n2) {
      var r2 = on(e20) ? e20 : Gn, i2 = function() {
        var e21 = t3.then;
        t3.then = null, on(r2) && (r2 = r2(t3)) && (r2.then || r2 === t3) && (t3.then = e21), n2(r2), t3.then = e21;
      };
      t3._initted && 1 === t3.totalProgress() && t3._ts >= 0 || !t3._tTime && t3._ts < 0 ? i2() : t3._prom = i2;
    });
  }, t2.kill = function() {
    Hr(this);
  }, e19;
}();
Kn(di.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: false, parent: null, _initted: false, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -1e-8, _prom: 0, _ps: false, _rts: 1 });
var mi = function(e19) {
  function t2(t3, n3) {
    var r2;
    return void 0 === t3 && (t3 = {}), (r2 = e19.call(this, t3) || this).labels = {}, r2.smoothChildTiming = !!t3.smoothChildTiming, r2.autoRemoveChildren = !!t3.autoRemoveChildren, r2._sort = ln(t3.sortChildren), Bt && dr(t3.parent || Bt, Lt(r2), n3), t3.reversed && r2.reverse(), t3.paused && r2.paused(true), t3.scrollTrigger && mr(Lt(r2), t3.scrollTrigger), r2;
  }
  jt(t2, e19);
  var n2 = t2.prototype;
  return n2.to = function(e20, t3, n3) {
    return Cr(0, arguments, this), this;
  }, n2.from = function(e20, t3, n3) {
    return Cr(1, arguments, this), this;
  }, n2.fromTo = function(e20, t3, n3, r2) {
    return Cr(2, arguments, this), this;
  }, n2.set = function(e20, t3, n3) {
    return t3.duration = 0, t3.parent = this, tr(t3).repeatDelay || (t3.repeat = 0), t3.immediateRender = !!t3.immediateRender, new Si(e20, t3, xr(this, n3), 1), this;
  }, n2.call = function(e20, t3, n3) {
    return dr(this, Si.delayedCall(0, e20, t3), n3);
  }, n2.staggerTo = function(e20, t3, n3, r2, i2, o2, a2) {
    return n3.duration = t3, n3.stagger = n3.stagger || r2, n3.onComplete = o2, n3.onCompleteParams = a2, n3.parent = this, new Si(e20, n3, xr(this, i2)), this;
  }, n2.staggerFrom = function(e20, t3, n3, r2, i2, o2, a2) {
    return n3.runBackwards = 1, tr(n3).immediateRender = ln(n3.immediateRender), this.staggerTo(e20, t3, n3, r2, i2, o2, a2);
  }, n2.staggerFromTo = function(e20, t3, n3, r2, i2, o2, a2, s2) {
    return r2.startAt = n3, tr(r2).immediateRender = ln(r2.immediateRender), this.staggerTo(e20, t3, r2, i2, o2, a2, s2);
  }, n2.render = function(e20, t3, n3) {
    var r2, i2, o2, a2, s2, u2, l2, c2, f2, h2, p2, d2, m2 = this._time, v2 = this._dirty ? this.totalDuration() : this._tDur, g2 = this._dur, _2 = e20 <= 0 ? 0 : Wn(e20), y2 = this._zTime < 0 != e20 < 0 && (this._initted || !g2);
    if (this !== Bt && _2 > v2 && e20 >= 0 && (_2 = v2), _2 !== this._tTime || n3 || y2) {
      if (m2 !== this._time && g2 && (_2 += this._time - m2, e20 += this._time - m2), r2 = _2, f2 = this._start, u2 = !(c2 = this._ts), y2 && (g2 || (m2 = this._zTime), (e20 || !t3) && (this._zTime = e20)), this._repeat) {
        if (p2 = this._yoyo, s2 = g2 + this._rDelay, this._repeat < -1 && e20 < 0) return this.totalTime(100 * s2 + e20, t3, n3);
        if (r2 = Wn(_2 % s2), _2 === v2 ? (a2 = this._repeat, r2 = g2) : ((a2 = ~~(h2 = Wn(_2 / s2))) && a2 === h2 && (r2 = g2, a2--), r2 > g2 && (r2 = g2)), h2 = lr(this._tTime, s2), !m2 && this._tTime && h2 !== a2 && this._tTime - h2 * s2 - this._dur <= 0 && (h2 = a2), p2 && 1 & a2 && (r2 = g2 - r2, d2 = 1), a2 !== h2 && !this._lock) {
          var b2 = p2 && 1 & h2, w2 = b2 === (p2 && 1 & a2);
          if (a2 < h2 && (b2 = !b2), m2 = b2 ? 0 : _2 % g2 ? g2 : _2, this._lock = 1, this.render(m2 || (d2 ? 0 : Wn(a2 * s2)), t3, !g2)._lock = 0, this._tTime = _2, !t3 && this.parent && Vr(this, "onRepeat"), this.vars.repeatRefresh && !d2 && (this.invalidate()._lock = 1), m2 && m2 !== this._time || u2 !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
          if (g2 = this._dur, v2 = this._tDur, w2 && (this._lock = 2, m2 = b2 ? g2 : -1e-4, this.render(m2, true), this.vars.repeatRefresh && !d2 && this.invalidate()), this._lock = 0, !this._ts && !u2) return this;
          si(this, d2);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (l2 = function(e21, t4, n4) {
        var r3;
        if (n4 > t4) for (r3 = e21._first; r3 && r3._start <= n4; ) {
          if ("isPause" === r3.data && r3._start > t4) return r3;
          r3 = r3._next;
        }
        else for (r3 = e21._last; r3 && r3._start >= n4; ) {
          if ("isPause" === r3.data && r3._start < t4) return r3;
          r3 = r3._prev;
        }
      }(this, Wn(m2), Wn(r2)), l2 && (_2 -= r2 - (r2 = l2._start))), this._tTime = _2, this._time = r2, this._act = !c2, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e20, m2 = 0), !m2 && r2 && !t3 && !a2 && (Vr(this, "onStart"), this._tTime !== _2)) return this;
      if (r2 >= m2 && e20 >= 0) for (i2 = this._first; i2; ) {
        if (o2 = i2._next, (i2._act || r2 >= i2._start) && i2._ts && l2 !== i2) {
          if (i2.parent !== this) return this.render(e20, t3, n3);
          if (i2.render(i2._ts > 0 ? (r2 - i2._start) * i2._ts : (i2._dirty ? i2.totalDuration() : i2._tDur) + (r2 - i2._start) * i2._ts, t3, n3), r2 !== this._time || !this._ts && !u2) {
            l2 = 0, o2 && (_2 += this._zTime = -1e-8);
            break;
          }
        }
        i2 = o2;
      }
      else {
        i2 = this._last;
        for (var x2 = e20 < 0 ? e20 : r2; i2; ) {
          if (o2 = i2._prev, (i2._act || x2 <= i2._end) && i2._ts && l2 !== i2) {
            if (i2.parent !== this) return this.render(e20, t3, n3);
            if (i2.render(i2._ts > 0 ? (x2 - i2._start) * i2._ts : (i2._dirty ? i2.totalDuration() : i2._tDur) + (x2 - i2._start) * i2._ts, t3, n3 || zt && (i2._initted || i2._startAt)), r2 !== this._time || !this._ts && !u2) {
              l2 = 0, o2 && (_2 += this._zTime = x2 ? -1e-8 : Gt);
              break;
            }
          }
          i2 = o2;
        }
      }
      if (l2 && !t3 && (this.pause(), l2.render(r2 >= m2 ? 0 : -1e-8)._zTime = r2 >= m2 ? 1 : -1, this._ts)) return this._start = f2, fr(this), this.render(e20, t3, n3);
      this._onUpdate && !t3 && Vr(this, "onUpdate", true), (_2 === v2 && this._tTime >= this.totalDuration() || !_2 && m2) && (f2 !== this._start && Math.abs(c2) === Math.abs(this._ts) || this._lock || ((e20 || !g2) && (_2 === v2 && this._ts > 0 || !_2 && this._ts < 0) && ir(this, 1), t3 || e20 < 0 && !m2 || !_2 && !m2 && v2 || (Vr(this, _2 === v2 && e20 >= 0 ? "onComplete" : "onReverseComplete", true), this._prom && !(_2 < v2 && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, n2.add = function(e20, t3) {
    var n3 = this;
    if (an(t3) || (t3 = xr(this, t3, e20)), !(e20 instanceof di)) {
      if (pn(e20)) return e20.forEach(function(e21) {
        return n3.add(e21, t3);
      }), this;
      if (rn(e20)) return this.addLabel(e20, t3);
      if (!on(e20)) return this;
      e20 = Si.delayedCall(0, e20);
    }
    return this !== e20 ? dr(this, e20, t3) : this;
  }, n2.getChildren = function(e20, t3, n3, r2) {
    void 0 === e20 && (e20 = true), void 0 === t3 && (t3 = true), void 0 === n3 && (n3 = true), void 0 === r2 && (r2 = -1e8);
    for (var i2 = [], o2 = this._first; o2; ) o2._start >= r2 && (o2 instanceof Si ? t3 && i2.push(o2) : (n3 && i2.push(o2), e20 && i2.push.apply(i2, o2.getChildren(true, t3, n3)))), o2 = o2._next;
    return i2;
  }, n2.getById = function(e20) {
    for (var t3 = this.getChildren(1, 1, 1), n3 = t3.length; n3--; ) if (t3[n3].vars.id === e20) return t3[n3];
  }, n2.remove = function(e20) {
    return rn(e20) ? this.removeLabel(e20) : on(e20) ? this.killTweensOf(e20) : (e20.parent === this && rr(this, e20), e20 === this._recent && (this._recent = this._last), or(this));
  }, n2.totalTime = function(t3, n3) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Wn(ei.time - (this._ts > 0 ? t3 / this._ts : (this.totalDuration() - t3) / -this._ts))), e19.prototype.totalTime.call(this, t3, n3), this._forcing = 0, this) : this._tTime;
  }, n2.addLabel = function(e20, t3) {
    return this.labels[e20] = xr(this, t3), this;
  }, n2.removeLabel = function(e20) {
    return delete this.labels[e20], this;
  }, n2.addPause = function(e20, t3, n3) {
    var r2 = Si.delayedCall(0, t3 || En, n3);
    return r2.data = "isPause", this._hasPause = 1, dr(this, r2, xr(this, e20));
  }, n2.removePause = function(e20) {
    var t3 = this._first;
    for (e20 = xr(this, e20); t3; ) t3._start === e20 && "isPause" === t3.data && ir(t3), t3 = t3._next;
  }, n2.killTweensOf = function(e20, t3, n3) {
    for (var r2 = this.getTweensOf(e20, n3), i2 = r2.length; i2--; ) vi !== r2[i2] && r2[i2].kill(e20, t3);
    return this;
  }, n2.getTweensOf = function(e20, t3) {
    for (var n3, r2 = [], i2 = Mr(e20), o2 = this._first, a2 = an(t3); o2; ) o2 instanceof Si ? Yn(o2._targets, i2) && (a2 ? (!vi || o2._initted && o2._ts) && o2.globalTime(0) <= t3 && o2.globalTime(o2.totalDuration()) > t3 : !t3 || o2.isActive()) && r2.push(o2) : (n3 = o2.getTweensOf(i2, t3)).length && r2.push.apply(r2, n3), o2 = o2._next;
    return r2;
  }, n2.tweenTo = function(e20, t3) {
    t3 = t3 || {};
    var n3, r2 = this, i2 = xr(r2, e20), o2 = t3, a2 = o2.startAt, s2 = o2.onStart, u2 = o2.onStartParams, l2 = o2.immediateRender, c2 = Si.to(r2, Kn({ ease: t3.ease || "none", lazy: false, immediateRender: false, time: i2, overwrite: "auto", duration: t3.duration || Math.abs((i2 - (a2 && "time" in a2 ? a2.time : r2._time)) / r2.timeScale()) || Gt, onStart: function() {
      if (r2.pause(), !n3) {
        var e21 = t3.duration || Math.abs((i2 - (a2 && "time" in a2 ? a2.time : r2._time)) / r2.timeScale());
        c2._dur !== e21 && yr(c2, e21, 0, 1).render(c2._time, true, true), n3 = 1;
      }
      s2 && s2.apply(c2, u2 || []);
    } }, t3));
    return l2 ? c2.render(0) : c2;
  }, n2.tweenFromTo = function(e20, t3, n3) {
    return this.tweenTo(t3, Kn({ startAt: { time: xr(this, e20) } }, n3));
  }, n2.recent = function() {
    return this._recent;
  }, n2.nextLabel = function(e20) {
    return void 0 === e20 && (e20 = this._time), Fr(this, xr(this, e20));
  }, n2.previousLabel = function(e20) {
    return void 0 === e20 && (e20 = this._time), Fr(this, xr(this, e20), 1);
  }, n2.currentLabel = function(e20) {
    return arguments.length ? this.seek(e20, true) : this.previousLabel(this._time + Gt);
  }, n2.shiftChildren = function(e20, t3, n3) {
    void 0 === n3 && (n3 = 0);
    for (var r2, i2 = this._first, o2 = this.labels; i2; ) i2._start >= n3 && (i2._start += e20, i2._end += e20), i2 = i2._next;
    if (t3) for (r2 in o2) o2[r2] >= n3 && (o2[r2] += e20);
    return or(this);
  }, n2.invalidate = function(t3) {
    var n3 = this._first;
    for (this._lock = 0; n3; ) n3.invalidate(t3), n3 = n3._next;
    return e19.prototype.invalidate.call(this, t3);
  }, n2.clear = function(e20) {
    void 0 === e20 && (e20 = true);
    for (var t3, n3 = this._first; n3; ) t3 = n3._next, this.remove(n3), n3 = t3;
    return this._dp && (this._time = this._tTime = this._pTime = 0), e20 && (this.labels = {}), or(this);
  }, n2.totalDuration = function(e20) {
    var t3, n3, r2, i2 = 0, o2 = this, a2 = o2._last, s2 = Zt;
    if (arguments.length) return o2.timeScale((o2._repeat < 0 ? o2.duration() : o2.totalDuration()) / (o2.reversed() ? -e20 : e20));
    if (o2._dirty) {
      for (r2 = o2.parent; a2; ) t3 = a2._prev, a2._dirty && a2.totalDuration(), (n3 = a2._start) > s2 && o2._sort && a2._ts && !o2._lock ? (o2._lock = 1, dr(o2, a2, n3 - a2._delay, 1)._lock = 0) : s2 = n3, n3 < 0 && a2._ts && (i2 -= n3, (!r2 && !o2._dp || r2 && r2.smoothChildTiming) && (o2._start += n3 / o2._ts, o2._time -= n3, o2._tTime -= n3), o2.shiftChildren(-n3, false, -1 / 0), s2 = 0), a2._end > i2 && a2._ts && (i2 = a2._end), a2 = t3;
      yr(o2, o2 === Bt && o2._time > i2 ? o2._time : i2, 1, 1), o2._dirty = 0;
    }
    return o2._tDur;
  }, t2.updateRoot = function(e20) {
    if (Bt._ts && (qn(Bt, cr(e20, Bt)), Wt = ei.frame), ei.frame >= Dn) {
      Dn += Xt.autoSleep || 120;
      var t3 = Bt._first;
      if ((!t3 || !t3._ts) && Xt.autoSleep && ei._listeners.length < 2) {
        for (; t3 && !t3._ts; ) t3 = t3._next;
        t3 || ei.sleep();
      }
    }
  }, t2;
}(di);
Kn(mi.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var vi, gi, _i = function(e19, t2, n2, r2, i2, o2, a2) {
  var s2, u2, l2, c2, f2, h2, p2, d2, m2 = new Fi(this._pt, e19, t2, 0, 1, Li, null, i2), v2 = 0, g2 = 0;
  for (m2.b = n2, m2.e = r2, n2 += "", (p2 = ~(r2 += "").indexOf("random(")) && (r2 = Ir(r2)), o2 && (o2(d2 = [n2, r2], e19, t2), n2 = d2[0], r2 = d2[1]), u2 = n2.match(gn) || []; s2 = gn.exec(r2); ) c2 = s2[0], f2 = r2.substring(v2, s2.index), l2 ? l2 = (l2 + 1) % 5 : "rgba(" === f2.substr(-5) && (l2 = 1), c2 !== u2[g2++] && (h2 = parseFloat(u2[g2 - 1]) || 0, m2._pt = { _next: m2._pt, p: f2 || 1 === g2 ? f2 : ",", s: h2, c: "=" === c2.charAt(1) ? $n(h2, c2) - h2 : parseFloat(c2) - h2, m: l2 && l2 < 4 ? Math.round : 0 }, v2 = gn.lastIndex);
  return m2.c = v2 < r2.length ? r2.substring(v2, r2.length) : "", m2.fp = a2, (_n.test(r2) || p2) && (m2.e = 0), this._pt = m2, m2;
}, yi = function(e19, t2, n2, r2, i2, o2, a2, s2, u2, l2) {
  on(r2) && (r2 = r2(i2 || 0, e19, o2));
  var c2, f2 = e19[t2], h2 = "get" !== n2 ? n2 : on(f2) ? u2 ? e19[t2.indexOf("set") || !on(e19["get" + t2.substr(3)]) ? t2 : "get" + t2.substr(3)](u2) : e19[t2]() : f2, p2 = on(f2) ? u2 ? ki : Pi : Ei;
  if (rn(r2) && (~r2.indexOf("random(") && (r2 = Ir(r2)), "=" === r2.charAt(1) && ((c2 = $n(h2, r2) + (Sr(h2) || 0)) || 0 === c2) && (r2 = c2)), !l2 || h2 !== r2 || gi) return isNaN(h2 * r2) || "" === r2 ? (!f2 && !(t2 in e19) && Tn(t2, r2), _i.call(this, e19, t2, h2, r2, p2, s2 || Xt.stringFilter, u2)) : (c2 = new Fi(this._pt, e19, t2, +h2 || 0, r2 - (h2 || 0), "boolean" == typeof f2 ? Ri : Ai, 0, p2), u2 && (c2.fp = u2), a2 && c2.modifier(a2, this, e19), this._pt = c2);
}, bi = function(e19, t2, n2, r2, i2, o2) {
  var a2, s2, u2, l2;
  if (Ln[e19] && false !== (a2 = new Ln[e19]()).init(i2, a2.rawVars ? t2[e19] : function(e20, t3, n3, r3, i3) {
    if (on(e20) && (e20 = Ci(e20, i3, t3, n3, r3)), !un(e20) || e20.style && e20.nodeType || pn(e20) || hn(e20)) return rn(e20) ? Ci(e20, i3, t3, n3, r3) : e20;
    var o3, a3 = {};
    for (o3 in e20) a3[o3] = Ci(e20[o3], i3, t3, n3, r3);
    return a3;
  }(t2[e19], r2, i2, o2, n2), n2, r2, o2) && (n2._pt = s2 = new Fi(n2._pt, i2, e19, 0, 1, a2.render, a2, 0, a2.priority), n2 !== $t)) for (u2 = n2._ptLookup[n2._targets.indexOf(i2)], l2 = a2._props.length; l2--; ) u2[a2._props[l2]] = s2;
  return a2;
}, wi = function e9(t2, n2, r2) {
  var i2, o2, a2, s2, u2, l2, c2, f2, h2, p2, d2, m2, v2, g2 = t2.vars, _2 = g2.ease, y2 = g2.startAt, b2 = g2.immediateRender, w2 = g2.lazy, x2 = g2.onUpdate, C2 = g2.runBackwards, T2 = g2.yoyoEase, O2 = g2.keyframes, S2 = g2.autoRevert, E2 = t2._dur, P2 = t2._startAt, k2 = t2._targets, M2 = t2.parent, N2 = M2 && "nested" === M2.data ? M2.vars.targets : k2, A2 = "auto" === t2._overwrite && !Dt, R2 = t2.timeline;
  if (R2 && (!O2 || !_2) && (_2 = "none"), t2._ease = ui(_2, qt.ease), t2._yEase = T2 ? ai(ui(true === T2 ? _2 : T2, qt.ease)) : 0, T2 && t2._yoyo && !t2._repeat && (T2 = t2._yEase, t2._yEase = t2._ease, t2._ease = T2), t2._from = !R2 && !!g2.runBackwards, !R2 || O2 && !g2.stagger) {
    if (m2 = (f2 = k2[0] ? Fn(k2[0]).harness : 0) && g2[f2.prop], i2 = er(g2, Nn), P2 && (P2._zTime < 0 && P2.progress(1), n2 < 0 && C2 && b2 && !S2 ? P2.render(-1, true) : P2.revert(C2 && E2 ? kn : Pn), P2._lazy = 0), y2) {
      if (ir(t2._startAt = Si.set(k2, Kn({ data: "isStart", overwrite: false, parent: M2, immediateRender: true, lazy: !P2 && ln(w2), startAt: null, delay: 0, onUpdate: x2 && function() {
        return Vr(t2, "onUpdate");
      }, stagger: 0 }, y2))), t2._startAt._dp = 0, t2._startAt._sat = t2, n2 < 0 && (zt || !b2 && !S2) && t2._startAt.revert(kn), b2 && E2 && n2 <= 0 && r2 <= 0) return void (n2 && (t2._zTime = n2));
    } else if (C2 && E2 && !P2) if (n2 && (b2 = false), a2 = Kn({ overwrite: false, data: "isFromStart", lazy: b2 && !P2 && ln(w2), immediateRender: b2, stagger: 0, parent: M2 }, i2), m2 && (a2[f2.prop] = m2), ir(t2._startAt = Si.set(k2, a2)), t2._startAt._dp = 0, t2._startAt._sat = t2, n2 < 0 && (zt ? t2._startAt.revert(kn) : t2._startAt.render(-1, true)), t2._zTime = n2, b2) {
      if (!n2) return;
    } else e9(t2._startAt, Gt, Gt);
    for (t2._pt = t2._ptCache = 0, w2 = E2 && ln(w2) || w2 && !E2, o2 = 0; o2 < k2.length; o2++) {
      if (c2 = (u2 = k2[o2])._gsap || Bn(k2)[o2]._gsap, t2._ptLookup[o2] = p2 = {}, Rn[c2.id] && An.length && Xn(), d2 = N2 === k2 ? o2 : N2.indexOf(u2), f2 && false !== (h2 = new f2()).init(u2, m2 || i2, t2, d2, N2) && (t2._pt = s2 = new Fi(t2._pt, u2, h2.name, 0, 1, h2.render, h2, 0, h2.priority), h2._props.forEach(function(e19) {
        p2[e19] = s2;
      }), h2.priority && (l2 = 1)), !f2 || m2) for (a2 in i2) Ln[a2] && (h2 = bi(a2, i2, t2, d2, u2, N2)) ? h2.priority && (l2 = 1) : p2[a2] = s2 = yi.call(t2, u2, a2, "get", i2[a2], d2, N2, 0, g2.stringFilter);
      t2._op && t2._op[o2] && t2.kill(u2, t2._op[o2]), A2 && t2._pt && (vi = t2, Bt.killTweensOf(u2, p2, t2.globalTime(n2)), v2 = !t2.parent, vi = 0), t2._pt && w2 && (Rn[c2.id] = 1);
    }
    l2 && Bi(t2), t2._onInit && t2._onInit(t2);
  }
  t2._onUpdate = x2, t2._initted = (!t2._op || t2._pt) && !v2, O2 && n2 <= 0 && R2.render(Zt, true, true);
}, xi = function(e19, t2, n2, r2) {
  var i2, o2, a2 = t2.ease || r2 || "power1.inOut";
  if (pn(t2)) o2 = n2[e19] || (n2[e19] = []), t2.forEach(function(e20, n3) {
    return o2.push({ t: n3 / (t2.length - 1) * 100, v: e20, e: a2 });
  });
  else for (i2 in t2) o2 = n2[i2] || (n2[i2] = []), "ease" === i2 || o2.push({ t: parseFloat(e19), v: t2[i2], e: a2 });
}, Ci = function(e19, t2, n2, r2, i2) {
  return on(e19) ? e19.call(t2, n2, r2, i2) : rn(e19) && ~e19.indexOf("random(") ? Ir(e19) : e19;
}, Ti = In + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Oi = {};
Hn(Ti + ",id,stagger,delay,duration,paused,scrollTrigger", function(e19) {
  return Oi[e19] = 1;
});
var Si = function(e19) {
  function t2(t3, n3, r2, i2) {
    var o2;
    "number" == typeof n3 && (r2.duration = n3, n3 = r2, r2 = null);
    var a2, s2, u2, l2, c2, f2, h2, p2, d2 = (o2 = e19.call(this, i2 ? n3 : tr(n3)) || this).vars, m2 = d2.duration, v2 = d2.delay, g2 = d2.immediateRender, _2 = d2.stagger, y2 = d2.overwrite, b2 = d2.keyframes, w2 = d2.defaults, x2 = d2.scrollTrigger, C2 = d2.yoyoEase, T2 = n3.parent || Bt, O2 = (pn(t3) || hn(t3) ? an(t3[0]) : "length" in n3) ? [t3] : Mr(t3);
    if (o2._targets = O2.length ? Bn(O2) : On("GSAP target " + t3 + " not found. https://gsap.com", !Xt.nullTargetWarn) || [], o2._ptLookup = [], o2._overwrite = y2, b2 || _2 || fn(m2) || fn(v2)) {
      if (n3 = o2.vars, (a2 = o2.timeline = new mi({ data: "nested", defaults: w2 || {}, targets: T2 && "nested" === T2.data ? T2.vars.targets : O2 })).kill(), a2.parent = a2._dp = Lt(o2), a2._start = 0, _2 || fn(m2) || fn(v2)) {
        if (l2 = O2.length, h2 = _2 && Rr(_2), un(_2)) for (c2 in _2) ~Ti.indexOf(c2) && (p2 || (p2 = {}), p2[c2] = _2[c2]);
        for (s2 = 0; s2 < l2; s2++) (u2 = er(n3, Oi)).stagger = 0, C2 && (u2.yoyoEase = C2), p2 && Jn(u2, p2), f2 = O2[s2], u2.duration = +Ci(m2, Lt(o2), s2, f2, O2), u2.delay = (+Ci(v2, Lt(o2), s2, f2, O2) || 0) - o2._delay, !_2 && 1 === l2 && u2.delay && (o2._delay = v2 = u2.delay, o2._start += v2, u2.delay = 0), a2.to(f2, u2, h2 ? h2(s2, f2, O2) : 0), a2._ease = ni.none;
        a2.duration() ? m2 = v2 = 0 : o2.timeline = 0;
      } else if (b2) {
        tr(Kn(a2.vars.defaults, { ease: "none" })), a2._ease = ui(b2.ease || n3.ease || "none");
        var S2, E2, P2, k2 = 0;
        if (pn(b2)) b2.forEach(function(e20) {
          return a2.to(O2, e20, ">");
        }), a2.duration();
        else {
          for (c2 in u2 = {}, b2) "ease" === c2 || "easeEach" === c2 || xi(c2, b2[c2], u2, b2.easeEach);
          for (c2 in u2) for (S2 = u2[c2].sort(function(e20, t4) {
            return e20.t - t4.t;
          }), k2 = 0, s2 = 0; s2 < S2.length; s2++) (P2 = { ease: (E2 = S2[s2]).e, duration: (E2.t - (s2 ? S2[s2 - 1].t : 0)) / 100 * m2 })[c2] = E2.v, a2.to(O2, P2, k2), k2 += P2.duration;
          a2.duration() < m2 && a2.to({}, { duration: m2 - a2.duration() });
        }
      }
      m2 || o2.duration(m2 = a2.duration());
    } else o2.timeline = 0;
    return true !== y2 || Dt || (vi = Lt(o2), Bt.killTweensOf(O2), vi = 0), dr(T2, Lt(o2), r2), n3.reversed && o2.reverse(), n3.paused && o2.paused(true), (g2 || !m2 && !b2 && o2._start === Wn(T2._time) && ln(g2) && sr(Lt(o2)) && "nested" !== T2.data) && (o2._tTime = -1e-8, o2.render(Math.max(0, -v2) || 0)), x2 && mr(Lt(o2), x2), o2;
  }
  jt(t2, e19);
  var n2 = t2.prototype;
  return n2.render = function(e20, t3, n3) {
    var r2, i2, o2, a2, s2, u2, l2, c2, f2, h2 = this._time, p2 = this._tDur, d2 = this._dur, m2 = e20 < 0, v2 = e20 > p2 - Gt && !m2 ? p2 : e20 < Gt ? 0 : e20;
    if (d2) {
      if (v2 !== this._tTime || !e20 || n3 || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== m2 || this._lazy) {
        if (r2 = v2, c2 = this.timeline, this._repeat) {
          if (a2 = d2 + this._rDelay, this._repeat < -1 && m2) return this.totalTime(100 * a2 + e20, t3, n3);
          if (r2 = Wn(v2 % a2), v2 === p2 ? (o2 = this._repeat, r2 = d2) : (o2 = ~~(s2 = Wn(v2 / a2))) && o2 === s2 ? (r2 = d2, o2--) : r2 > d2 && (r2 = d2), (u2 = this._yoyo && 1 & o2) && (f2 = this._yEase, r2 = d2 - r2), s2 = lr(this._tTime, a2), r2 === h2 && !n3 && this._initted && o2 === s2) return this._tTime = v2, this;
          o2 !== s2 && (c2 && this._yEase && si(c2, u2), this.vars.repeatRefresh && !u2 && !this._lock && r2 !== a2 && this._initted && (this._lock = n3 = 1, this.render(Wn(a2 * o2), true).invalidate()._lock = 0));
        }
        if (!this._initted) {
          if (vr(this, m2 ? e20 : r2, n3, t3, v2)) return this._tTime = 0, this;
          if (!(h2 === this._time || n3 && this.vars.repeatRefresh && o2 !== s2)) return this;
          if (d2 !== this._dur) return this.render(e20, t3, n3);
        }
        if (this._tTime = v2, this._time = r2, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = l2 = (f2 || this._ease)(r2 / d2), this._from && (this.ratio = l2 = 1 - l2), r2 && !h2 && !t3 && !o2 && (Vr(this, "onStart"), this._tTime !== v2)) return this;
        for (i2 = this._pt; i2; ) i2.r(l2, i2.d), i2 = i2._next;
        c2 && c2.render(e20 < 0 ? e20 : c2._dur * c2._ease(r2 / this._dur), t3, n3) || this._startAt && (this._zTime = e20), this._onUpdate && !t3 && (m2 && ar(this, e20, 0, n3), Vr(this, "onUpdate")), this._repeat && o2 !== s2 && this.vars.onRepeat && !t3 && this.parent && Vr(this, "onRepeat"), v2 !== this._tDur && v2 || this._tTime !== v2 || (m2 && !this._onUpdate && ar(this, e20, 0, true), (e20 || !d2) && (v2 === this._tDur && this._ts > 0 || !v2 && this._ts < 0) && ir(this, 1), t3 || m2 && !h2 || !(v2 || h2 || u2) || (Vr(this, v2 === p2 ? "onComplete" : "onReverseComplete", true), this._prom && !(v2 < p2 && this.timeScale() > 0) && this._prom()));
      }
    } else !function(e21, t4, n4, r3) {
      var i3, o3, a3, s3 = e21.ratio, u3 = t4 < 0 || !t4 && (!e21._start && gr(e21) && (e21._initted || !_r(e21)) || (e21._ts < 0 || e21._dp._ts < 0) && !_r(e21)) ? 0 : 1, l3 = e21._rDelay, c3 = 0;
      if (l3 && e21._repeat && (c3 = Or(0, e21._tDur, t4), o3 = lr(c3, l3), e21._yoyo && 1 & o3 && (u3 = 1 - u3), o3 !== lr(e21._tTime, l3) && (s3 = 1 - u3, e21.vars.repeatRefresh && e21._initted && e21.invalidate())), u3 !== s3 || zt || r3 || e21._zTime === Gt || !t4 && e21._zTime) {
        if (!e21._initted && vr(e21, t4, r3, n4, c3)) return;
        for (a3 = e21._zTime, e21._zTime = t4 || (n4 ? Gt : 0), n4 || (n4 = t4 && !a3), e21.ratio = u3, e21._from && (u3 = 1 - u3), e21._time = 0, e21._tTime = c3, i3 = e21._pt; i3; ) i3.r(u3, i3.d), i3 = i3._next;
        t4 < 0 && ar(e21, t4, 0, true), e21._onUpdate && !n4 && Vr(e21, "onUpdate"), c3 && e21._repeat && !n4 && e21.parent && Vr(e21, "onRepeat"), (t4 >= e21._tDur || t4 < 0) && e21.ratio === u3 && (u3 && ir(e21, 1), n4 || zt || (Vr(e21, u3 ? "onComplete" : "onReverseComplete", true), e21._prom && e21._prom()));
      } else e21._zTime || (e21._zTime = t4);
    }(this, e20, t3, n3);
    return this;
  }, n2.targets = function() {
    return this._targets;
  }, n2.invalidate = function(t3) {
    return (!t3 || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t3), e19.prototype.invalidate.call(this, t3);
  }, n2.resetTo = function(e20, t3, n3, r2, i2) {
    Yt || ei.wake(), this._ts || this.play();
    var o2 = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
    return this._initted || wi(this, o2), function(e21, t4, n4, r3, i3, o3, a2, s2) {
      var u2, l2, c2, f2, h2 = (e21._pt && e21._ptCache || (e21._ptCache = {}))[t4];
      if (!h2) for (h2 = e21._ptCache[t4] = [], c2 = e21._ptLookup, f2 = e21._targets.length; f2--; ) {
        if ((u2 = c2[f2][t4]) && u2.d && u2.d._pt) for (u2 = u2.d._pt; u2 && u2.p !== t4 && u2.fp !== t4; ) u2 = u2._next;
        if (!u2) return gi = 1, e21.vars[t4] = "+=0", wi(e21, a2), gi = 0, s2 ? On(t4 + " not eligible for reset") : 1;
        h2.push(u2);
      }
      for (f2 = h2.length; f2--; ) (u2 = (l2 = h2[f2])._pt || l2).s = !r3 && 0 !== r3 || i3 ? u2.s + (r3 || 0) + o3 * u2.c : r3, u2.c = n4 - u2.s, l2.e && (l2.e = Un(n4) + Sr(l2.e)), l2.b && (l2.b = u2.s + Sr(l2.b));
    }(this, e20, t3, n3, r2, this._ease(o2 / this._dur), o2, i2) ? this.resetTo(e20, t3, n3, r2, 1) : (hr(this, 0), this.parent || nr(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, n2.kill = function(e20, t3) {
    if (void 0 === t3 && (t3 = "all"), !(e20 || t3 && "all" !== t3)) return this._lazy = this._pt = 0, this.parent ? Hr(this) : this.scrollTrigger && this.scrollTrigger.kill(!!zt), this;
    if (this.timeline) {
      var n3 = this.timeline.totalDuration();
      return this.timeline.killTweensOf(e20, t3, vi && true !== vi.vars.overwrite)._first || Hr(this), this.parent && n3 !== this.timeline.totalDuration() && yr(this, this._dur * this.timeline._tDur / n3, 0, 1), this;
    }
    var r2, i2, o2, a2, s2, u2, l2, c2 = this._targets, f2 = e20 ? Mr(e20) : c2, h2 = this._ptLookup, p2 = this._pt;
    if ((!t3 || "all" === t3) && function(e21, t4) {
      for (var n4 = e21.length, r3 = n4 === t4.length; r3 && n4-- && e21[n4] === t4[n4]; ) ;
      return n4 < 0;
    }(c2, f2)) return "all" === t3 && (this._pt = 0), Hr(this);
    for (r2 = this._op = this._op || [], "all" !== t3 && (rn(t3) && (s2 = {}, Hn(t3, function(e21) {
      return s2[e21] = 1;
    }), t3 = s2), t3 = function(e21, t4) {
      var n4, r3, i3, o3, a3 = e21[0] ? Fn(e21[0]).harness : 0, s3 = a3 && a3.aliases;
      if (!s3) return t4;
      for (r3 in n4 = Jn({}, t4), s3) if (r3 in n4) for (i3 = (o3 = s3[r3].split(",")).length; i3--; ) n4[o3[i3]] = n4[r3];
      return n4;
    }(c2, t3)), l2 = c2.length; l2--; ) if (~f2.indexOf(c2[l2])) for (s2 in i2 = h2[l2], "all" === t3 ? (r2[l2] = t3, a2 = i2, o2 = {}) : (o2 = r2[l2] = r2[l2] || {}, a2 = t3), a2) (u2 = i2 && i2[s2]) && ("kill" in u2.d && true !== u2.d.kill(s2) || rr(this, u2, "_pt"), delete i2[s2]), "all" !== o2 && (o2[s2] = 1);
    return this._initted && !this._pt && p2 && Hr(this), this;
  }, t2.to = function(e20, n3) {
    return new t2(e20, n3, arguments[2]);
  }, t2.from = function(e20, t3) {
    return Cr(1, arguments);
  }, t2.delayedCall = function(e20, n3, r2, i2) {
    return new t2(n3, 0, { immediateRender: false, lazy: false, overwrite: false, delay: e20, onComplete: n3, onReverseComplete: n3, onCompleteParams: r2, onReverseCompleteParams: r2, callbackScope: i2 });
  }, t2.fromTo = function(e20, t3, n3) {
    return Cr(2, arguments);
  }, t2.set = function(e20, n3) {
    return n3.duration = 0, n3.repeatDelay || (n3.repeat = 0), new t2(e20, n3);
  }, t2.killTweensOf = function(e20, t3, n3) {
    return Bt.killTweensOf(e20, t3, n3);
  }, t2;
}(di);
Kn(Si.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }), Hn("staggerTo,staggerFrom,staggerFromTo", function(e19) {
  Si[e19] = function() {
    var t2 = new mi(), n2 = Er.call(arguments, 0);
    return n2.splice("staggerFromTo" === e19 ? 5 : 4, 0, 0), t2[e19].apply(t2, n2);
  };
});
var Ei = function(e19, t2, n2) {
  return e19[t2] = n2;
}, Pi = function(e19, t2, n2) {
  return e19[t2](n2);
}, ki = function(e19, t2, n2, r2) {
  return e19[t2](r2.fp, n2);
}, Mi = function(e19, t2, n2) {
  return e19.setAttribute(t2, n2);
}, Ni = function(e19, t2) {
  return on(e19[t2]) ? Pi : sn(e19[t2]) && e19.setAttribute ? Mi : Ei;
}, Ai = function(e19, t2) {
  return t2.set(t2.t, t2.p, Math.round(1e6 * (t2.s + t2.c * e19)) / 1e6, t2);
}, Ri = function(e19, t2) {
  return t2.set(t2.t, t2.p, !!(t2.s + t2.c * e19), t2);
}, Li = function(e19, t2) {
  var n2 = t2._pt, r2 = "";
  if (!e19 && t2.b) r2 = t2.b;
  else if (1 === e19 && t2.e) r2 = t2.e;
  else {
    for (; n2; ) r2 = n2.p + (n2.m ? n2.m(n2.s + n2.c * e19) : Math.round(1e4 * (n2.s + n2.c * e19)) / 1e4) + r2, n2 = n2._next;
    r2 += t2.c;
  }
  t2.set(t2.t, t2.p, r2, t2);
}, ji = function(e19, t2) {
  for (var n2 = t2._pt; n2; ) n2.r(e19, n2.d), n2 = n2._next;
}, Di = function(e19, t2, n2, r2) {
  for (var i2, o2 = this._pt; o2; ) i2 = o2._next, o2.p === r2 && o2.modifier(e19, t2, n2), o2 = i2;
}, zi = function(e19) {
  for (var t2, n2, r2 = this._pt; r2; ) n2 = r2._next, r2.p === e19 && !r2.op || r2.op === e19 ? rr(this, r2, "_pt") : r2.dep || (t2 = 1), r2 = n2;
  return !t2;
}, Ii = function(e19, t2, n2, r2) {
  r2.mSet(e19, t2, r2.m.call(r2.tween, n2, r2.mt), r2);
}, Bi = function(e19) {
  for (var t2, n2, r2, i2, o2 = e19._pt; o2; ) {
    for (t2 = o2._next, n2 = r2; n2 && n2.pr > o2.pr; ) n2 = n2._next;
    (o2._prev = n2 ? n2._prev : i2) ? o2._prev._next = o2 : r2 = o2, (o2._next = n2) ? n2._prev = o2 : i2 = o2, o2 = t2;
  }
  e19._pt = r2;
}, Fi = function() {
  function e19(e20, t2, n2, r2, i2, o2, a2, s2, u2) {
    this.t = t2, this.s = r2, this.c = i2, this.p = n2, this.r = o2 || Ai, this.d = a2 || this, this.set = s2 || Ei, this.pr = u2 || 0, this._next = e20, e20 && (e20._prev = this);
  }
  return e19.prototype.modifier = function(e20, t2, n2) {
    this.mSet = this.mSet || this.set, this.set = Ii, this.m = e20, this.mt = n2, this.tween = t2;
  }, e19;
}();
Hn(In + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(e19) {
  return Nn[e19] = 1;
}), wn.TweenMax = wn.TweenLite = Si, wn.TimelineLite = wn.TimelineMax = mi, Bt = new mi({ sortChildren: false, defaults: qt, autoRemoveChildren: true, id: "root", smoothChildTiming: true }), Xt.stringFilter = Qr;
var Vi = [], Hi = {}, Ui = [], Wi = 0, $i = 0, Yi = function(e19) {
  return (Hi[e19] || Ui).map(function(e20) {
    return e20();
  });
}, Xi = function() {
  var e19 = Date.now(), t2 = [];
  e19 - Wi > 2 && (Yi("matchMediaInit"), Vi.forEach(function(e20) {
    var n2, r2, i2, o2, a2 = e20.queries, s2 = e20.conditions;
    for (r2 in a2) (n2 = Ft.matchMedia(a2[r2]).matches) && (i2 = 1), n2 !== s2[r2] && (s2[r2] = n2, o2 = 1);
    o2 && (e20.revert(), i2 && t2.push(e20));
  }), Yi("matchMediaRevert"), t2.forEach(function(e20) {
    return e20.onMatch(e20, function(t3) {
      return e20.add(null, t3);
    });
  }), Wi = e19, Yi("matchMedia"));
}, qi = function() {
  function e19(e20, t3) {
    this.selector = t3 && Nr(t3), this.data = [], this._r = [], this.isReverted = false, this.id = $i++, e20 && this.add(e20);
  }
  var t2 = e19.prototype;
  return t2.add = function(e20, t3, n2) {
    on(e20) && (n2 = t3, t3 = e20, e20 = on);
    var r2 = this, i2 = function() {
      var e21, i3 = It, o2 = r2.selector;
      return i3 && i3 !== r2 && i3.data.push(r2), n2 && (r2.selector = Nr(n2)), It = r2, e21 = t3.apply(r2, arguments), on(e21) && r2._r.push(e21), It = i3, r2.selector = o2, r2.isReverted = false, e21;
    };
    return r2.last = i2, e20 === on ? i2(r2, function(e21) {
      return r2.add(null, e21);
    }) : e20 ? r2[e20] = i2 : i2;
  }, t2.ignore = function(e20) {
    var t3 = It;
    It = null, e20(this), It = t3;
  }, t2.getTweens = function() {
    var t3 = [];
    return this.data.forEach(function(n2) {
      return n2 instanceof e19 ? t3.push.apply(t3, n2.getTweens()) : n2 instanceof Si && !(n2.parent && "nested" === n2.parent.data) && t3.push(n2);
    }), t3;
  }, t2.clear = function() {
    this._r.length = this.data.length = 0;
  }, t2.kill = function(e20, t3) {
    var n2 = this;
    if (e20 ? function() {
      for (var t4, r3 = n2.getTweens(), i2 = n2.data.length; i2--; ) "isFlip" === (t4 = n2.data[i2]).data && (t4.revert(), t4.getChildren(true, true, false).forEach(function(e21) {
        return r3.splice(r3.indexOf(e21), 1);
      }));
      for (r3.map(function(e21) {
        return { g: e21._dur || e21._delay || e21._sat && !e21._sat.vars.immediateRender ? e21.globalTime(0) : -1 / 0, t: e21 };
      }).sort(function(e21, t5) {
        return t5.g - e21.g || -1 / 0;
      }).forEach(function(t5) {
        return t5.t.revert(e20);
      }), i2 = n2.data.length; i2--; ) (t4 = n2.data[i2]) instanceof mi ? "nested" !== t4.data && (t4.scrollTrigger && t4.scrollTrigger.revert(), t4.kill()) : !(t4 instanceof Si) && t4.revert && t4.revert(e20);
      n2._r.forEach(function(t5) {
        return t5(e20, n2);
      }), n2.isReverted = true;
    }() : this.data.forEach(function(e21) {
      return e21.kill && e21.kill();
    }), this.clear(), t3) for (var r2 = Vi.length; r2--; ) Vi[r2].id === this.id && Vi.splice(r2, 1);
  }, t2.revert = function(e20) {
    this.kill(e20 || {});
  }, e19;
}(), Zi = function() {
  function e19(e20) {
    this.contexts = [], this.scope = e20, It && It.data.push(this);
  }
  var t2 = e19.prototype;
  return t2.add = function(e20, t3, n2) {
    un(e20) || (e20 = { matches: e20 });
    var r2, i2, o2, a2 = new qi(0, n2 || this.scope), s2 = a2.conditions = {};
    for (i2 in It && !a2.selector && (a2.selector = It.selector), this.contexts.push(a2), t3 = a2.add("onMatch", t3), a2.queries = e20, e20) "all" === i2 ? o2 = 1 : (r2 = Ft.matchMedia(e20[i2])) && (Vi.indexOf(a2) < 0 && Vi.push(a2), (s2[i2] = r2.matches) && (o2 = 1), r2.addListener ? r2.addListener(Xi) : r2.addEventListener("change", Xi));
    return o2 && t3(a2, function(e21) {
      return a2.add(null, e21);
    }), this;
  }, t2.revert = function(e20) {
    this.kill(e20 || {});
  }, t2.kill = function(e20) {
    this.contexts.forEach(function(t3) {
      return t3.kill(e20, true);
    });
  }, e19;
}(), Gi = { registerPlugin: function() {
  for (var e19 = arguments.length, t2 = new Array(e19), n2 = 0; n2 < e19; n2++) t2[n2] = arguments[n2];
  t2.forEach(function(e20) {
    return Wr(e20);
  });
}, timeline: function(e19) {
  return new mi(e19);
}, getTweensOf: function(e19, t2) {
  return Bt.getTweensOf(e19, t2);
}, getProperty: function(e19, t2, n2, r2) {
  rn(e19) && (e19 = Mr(e19)[0]);
  var i2 = Fn(e19 || {}).get, o2 = n2 ? Gn : Zn;
  return "native" === n2 && (n2 = ""), e19 ? t2 ? o2((Ln[t2] && Ln[t2].get || i2)(e19, t2, n2, r2)) : function(t3, n3, r3) {
    return o2((Ln[t3] && Ln[t3].get || i2)(e19, t3, n3, r3));
  } : e19;
}, quickSetter: function(e19, t2, n2) {
  if ((e19 = Mr(e19)).length > 1) {
    var r2 = e19.map(function(e20) {
      return Qi.quickSetter(e20, t2, n2);
    }), i2 = r2.length;
    return function(e20) {
      for (var t3 = i2; t3--; ) r2[t3](e20);
    };
  }
  e19 = e19[0] || {};
  var o2 = Ln[t2], a2 = Fn(e19), s2 = a2.harness && (a2.harness.aliases || {})[t2] || t2, u2 = o2 ? function(t3) {
    var r3 = new o2();
    $t._pt = 0, r3.init(e19, n2 ? t3 + n2 : t3, $t, 0, [e19]), r3.render(1, r3), $t._pt && ji(1, $t);
  } : a2.set(e19, s2);
  return o2 ? u2 : function(t3) {
    return u2(e19, s2, n2 ? t3 + n2 : t3, a2, 1);
  };
}, quickTo: function(e19, t2, n2) {
  var r2, i2 = Qi.to(e19, Kn(((r2 = {})[t2] = "+=0.1", r2.paused = true, r2.stagger = 0, r2), n2 || {})), o2 = function(e20, n3, r3) {
    return i2.resetTo(t2, e20, n3, r3);
  };
  return o2.tween = i2, o2;
}, isTweening: function(e19) {
  return Bt.getTweensOf(e19, true).length > 0;
}, defaults: function(e19) {
  return e19 && e19.ease && (e19.ease = ui(e19.ease, qt.ease)), Qn(qt, e19 || {});
}, config: function(e19) {
  return Qn(Xt, e19 || {});
}, registerEffect: function(e19) {
  var t2 = e19.name, n2 = e19.effect, r2 = e19.plugins, i2 = e19.defaults, o2 = e19.extendTimeline;
  (r2 || "").split(",").forEach(function(e20) {
    return e20 && !Ln[e20] && !wn[e20] && On(t2 + " effect requires " + e20 + " plugin.");
  }), jn[t2] = function(e20, t3, r3) {
    return n2(Mr(e20), Kn(t3 || {}, i2), r3);
  }, o2 && (mi.prototype[t2] = function(e20, n3, r3) {
    return this.add(jn[t2](e20, un(n3) ? n3 : (r3 = n3) && {}, this), r3);
  });
}, registerEase: function(e19, t2) {
  ni[e19] = ui(t2);
}, parseEase: function(e19, t2) {
  return arguments.length ? ui(e19, t2) : ni;
}, getById: function(e19) {
  return Bt.getById(e19);
}, exportRoot: function(e19, t2) {
  void 0 === e19 && (e19 = {});
  var n2, r2, i2 = new mi(e19);
  for (i2.smoothChildTiming = ln(e19.smoothChildTiming), Bt.remove(i2), i2._dp = 0, i2._time = i2._tTime = Bt._time, n2 = Bt._first; n2; ) r2 = n2._next, !t2 && !n2._dur && n2 instanceof Si && n2.vars.onComplete === n2._targets[0] || dr(i2, n2, n2._start - n2._delay), n2 = r2;
  return dr(Bt, i2, 0), i2;
}, context: function(e19, t2) {
  return e19 ? new qi(e19, t2) : It;
}, matchMedia: function(e19) {
  return new Zi(e19);
}, matchMediaRefresh: function() {
  return Vi.forEach(function(e19) {
    var t2, n2, r2 = e19.conditions;
    for (n2 in r2) r2[n2] && (r2[n2] = false, t2 = 1);
    t2 && e19.revert();
  }) || Xi();
}, addEventListener: function(e19, t2) {
  var n2 = Hi[e19] || (Hi[e19] = []);
  ~n2.indexOf(t2) || n2.push(t2);
}, removeEventListener: function(e19, t2) {
  var n2 = Hi[e19], r2 = n2 && n2.indexOf(t2);
  r2 >= 0 && n2.splice(r2, 1);
}, utils: { wrap: function e10(t2, n2, r2) {
  var i2 = n2 - t2;
  return pn(t2) ? zr(t2, e10(0, t2.length), n2) : Tr(r2, function(e19) {
    return (i2 + (e19 - t2) % i2) % i2 + t2;
  });
}, wrapYoyo: function e11(t2, n2, r2) {
  var i2 = n2 - t2, o2 = 2 * i2;
  return pn(t2) ? zr(t2, e11(0, t2.length - 1), n2) : Tr(r2, function(e19) {
    return t2 + ((e19 = (o2 + (e19 - t2) % o2) % o2 || 0) > i2 ? o2 - e19 : e19);
  });
}, distribute: Rr, random: Dr, snap: jr, normalize: function(e19, t2, n2) {
  return Br(e19, t2, 0, 1, n2);
}, getUnit: Sr, clamp: function(e19, t2, n2) {
  return Tr(n2, function(n3) {
    return Or(e19, t2, n3);
  });
}, splitColor: qr, toArray: Mr, selector: Nr, mapRange: Br, pipe: function() {
  for (var e19 = arguments.length, t2 = new Array(e19), n2 = 0; n2 < e19; n2++) t2[n2] = arguments[n2];
  return function(e20) {
    return t2.reduce(function(e21, t3) {
      return t3(e21);
    }, e20);
  };
}, unitize: function(e19, t2) {
  return function(n2) {
    return e19(parseFloat(n2)) + (t2 || Sr(n2));
  };
}, interpolate: function e12(t2, n2, r2, i2) {
  var o2 = isNaN(t2 + n2) ? 0 : function(e19) {
    return (1 - e19) * t2 + e19 * n2;
  };
  if (!o2) {
    var a2, s2, u2, l2, c2, f2 = rn(t2), h2 = {};
    if (true === r2 && (i2 = 1) && (r2 = null), f2) t2 = { p: t2 }, n2 = { p: n2 };
    else if (pn(t2) && !pn(n2)) {
      for (u2 = [], l2 = t2.length, c2 = l2 - 2, s2 = 1; s2 < l2; s2++) u2.push(e12(t2[s2 - 1], t2[s2]));
      l2--, o2 = function(e19) {
        e19 *= l2;
        var t3 = Math.min(c2, ~~e19);
        return u2[t3](e19 - t3);
      }, r2 = n2;
    } else i2 || (t2 = Jn(pn(t2) ? [] : {}, t2));
    if (!u2) {
      for (a2 in n2) yi.call(h2, t2, a2, "get", n2[a2]);
      o2 = function(e19) {
        return ji(e19, h2) || (f2 ? t2.p : t2);
      };
    }
  }
  return Tr(r2, o2);
}, shuffle: Ar }, install: Cn, effects: jn, ticker: ei, updateRoot: mi.updateRoot, plugins: Ln, globalTimeline: Bt, core: { PropTween: Fi, globals: Sn, Tween: Si, Timeline: mi, Animation: di, getCache: Fn, _removeLinkedListItem: rr, reverting: function() {
  return zt;
}, context: function(e19) {
  return e19 && It && (It.data.push(e19), e19._ctx = It), It;
}, suppressOverwrites: function(e19) {
  return Dt = e19;
} } };
Hn("to,from,fromTo,delayedCall,set,killTweensOf", function(e19) {
  return Gi[e19] = Si[e19];
}), ei.add(mi.updateRoot), $t = Gi.to({}, { duration: 0 });
var Ki = function(e19, t2) {
  for (var n2 = e19._pt; n2 && n2.p !== t2 && n2.op !== t2 && n2.fp !== t2; ) n2 = n2._next;
  return n2;
}, Ji = function(e19, t2) {
  return { name: e19, rawVars: 1, init: function(e20, n2, r2) {
    r2._onInit = function(e21) {
      var r3, i2;
      if (rn(n2) && (r3 = {}, Hn(n2, function(e22) {
        return r3[e22] = 1;
      }), n2 = r3), t2) {
        for (i2 in r3 = {}, n2) r3[i2] = t2(n2[i2]);
        n2 = r3;
      }
      !function(e22, t3) {
        var n3, r4, i3, o2 = e22._targets;
        for (n3 in t3) for (r4 = o2.length; r4--; ) (i3 = e22._ptLookup[r4][n3]) && (i3 = i3.d) && (i3._pt && (i3 = Ki(i3, n3)), i3 && i3.modifier && i3.modifier(t3[n3], e22, o2[r4], n3));
      }(e21, n2);
    };
  } };
}, Qi = Gi.registerPlugin({ name: "attr", init: function(e19, t2, n2, r2, i2) {
  var o2, a2, s2;
  for (o2 in this.tween = n2, t2) s2 = e19.getAttribute(o2) || "", (a2 = this.add(e19, "setAttribute", (s2 || 0) + "", t2[o2], r2, i2, 0, 0, o2)).op = o2, a2.b = s2, this._props.push(o2);
}, render: function(e19, t2) {
  for (var n2 = t2._pt; n2; ) zt ? n2.set(n2.t, n2.p, n2.b, n2) : n2.r(e19, n2.d), n2 = n2._next;
} }, { name: "endArray", init: function(e19, t2) {
  for (var n2 = t2.length; n2--; ) this.add(e19, n2, e19[n2] || 0, t2[n2], 0, 0, 0, 0, 0, 1);
} }, Ji("roundProps", Lr), Ji("modifiers"), Ji("snap", jr)) || Gi;
Si.version = mi.version = Qi.version = "3.12.7", Ut = 1, cn() && ti(), ni.Power0, ni.Power1, ni.Power2, ni.Power3, ni.Power4, ni.Linear, ni.Quad, ni.Cubic, ni.Quart, ni.Quint, ni.Strong, ni.Elastic, ni.Back, ni.SteppedEase, ni.Bounce, ni.Sine, ni.Expo, ni.Circ;
/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var eo, to, no, ro, io, oo, ao, so, uo = {}, lo = 180 / Math.PI, co = Math.PI / 180, fo = Math.atan2, ho = /([A-Z])/g, po = /(left|right|width|margin|padding|x)/i, mo = /[\s,\(]\S/, vo = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" }, go = function(e19, t2) {
  return t2.set(t2.t, t2.p, Math.round(1e4 * (t2.s + t2.c * e19)) / 1e4 + t2.u, t2);
}, _o = function(e19, t2) {
  return t2.set(t2.t, t2.p, 1 === e19 ? t2.e : Math.round(1e4 * (t2.s + t2.c * e19)) / 1e4 + t2.u, t2);
}, yo = function(e19, t2) {
  return t2.set(t2.t, t2.p, e19 ? Math.round(1e4 * (t2.s + t2.c * e19)) / 1e4 + t2.u : t2.b, t2);
}, bo = function(e19, t2) {
  var n2 = t2.s + t2.c * e19;
  t2.set(t2.t, t2.p, ~~(n2 + (n2 < 0 ? -0.5 : 0.5)) + t2.u, t2);
}, wo = function(e19, t2) {
  return t2.set(t2.t, t2.p, e19 ? t2.e : t2.b, t2);
}, xo = function(e19, t2) {
  return t2.set(t2.t, t2.p, 1 !== e19 ? t2.b : t2.e, t2);
}, Co = function(e19, t2, n2) {
  return e19.style[t2] = n2;
}, To = function(e19, t2, n2) {
  return e19.style.setProperty(t2, n2);
}, Oo = function(e19, t2, n2) {
  return e19._gsap[t2] = n2;
}, So = function(e19, t2, n2) {
  return e19._gsap.scaleX = e19._gsap.scaleY = n2;
}, Eo = function(e19, t2, n2, r2, i2) {
  var o2 = e19._gsap;
  o2.scaleX = o2.scaleY = n2, o2.renderTransform(i2, o2);
}, Po = function(e19, t2, n2, r2, i2) {
  var o2 = e19._gsap;
  o2[t2] = n2, o2.renderTransform(i2, o2);
}, ko = "transform", Mo = ko + "Origin", No = function e13(t2, n2) {
  var r2 = this, i2 = this.target, o2 = i2.style, a2 = i2._gsap;
  if (t2 in uo && o2) {
    if (this.tfm = this.tfm || {}, "transform" === t2) return vo.transform.split(",").forEach(function(t3) {
      return e13.call(r2, t3, n2);
    });
    if (~(t2 = vo[t2] || t2).indexOf(",") ? t2.split(",").forEach(function(e19) {
      return r2.tfm[e19] = Zo(i2, e19);
    }) : this.tfm[t2] = a2.x ? a2[t2] : Zo(i2, t2), t2 === Mo && (this.tfm.zOrigin = a2.zOrigin), this.props.indexOf(ko) >= 0) return;
    a2.svg && (this.svgo = i2.getAttribute("data-svg-origin"), this.props.push(Mo, n2, "")), t2 = ko;
  }
  (o2 || n2) && this.props.push(t2, n2, o2[t2]);
}, Ao = function(e19) {
  e19.translate && (e19.removeProperty("translate"), e19.removeProperty("scale"), e19.removeProperty("rotate"));
}, Ro = function() {
  var e19, t2, n2 = this.props, r2 = this.target, i2 = r2.style, o2 = r2._gsap;
  for (e19 = 0; e19 < n2.length; e19 += 3) n2[e19 + 1] ? 2 === n2[e19 + 1] ? r2[n2[e19]](n2[e19 + 2]) : r2[n2[e19]] = n2[e19 + 2] : n2[e19 + 2] ? i2[n2[e19]] = n2[e19 + 2] : i2.removeProperty("--" === n2[e19].substr(0, 2) ? n2[e19] : n2[e19].replace(ho, "-$1").toLowerCase());
  if (this.tfm) {
    for (t2 in this.tfm) o2[t2] = this.tfm[t2];
    o2.svg && (o2.renderTransform(), r2.setAttribute("data-svg-origin", this.svgo || "")), (e19 = ao()) && e19.isStart || i2[ko] || (Ao(i2), o2.zOrigin && i2[Mo] && (i2[Mo] += " " + o2.zOrigin + "px", o2.zOrigin = 0, o2.renderTransform()), o2.uncache = 1);
  }
}, Lo = function(e19, t2) {
  var n2 = { target: e19, props: [], revert: Ro, save: No };
  return e19._gsap || Qi.core.getCache(e19), t2 && e19.style && e19.nodeType && t2.split(",").forEach(function(e20) {
    return n2.save(e20);
  }), n2;
}, jo = function(e19, t2) {
  var n2 = to.createElementNS ? to.createElementNS((t2 || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e19) : to.createElement(e19);
  return n2 && n2.style ? n2 : to.createElement(e19);
}, Do = function e14(t2, n2, r2) {
  var i2 = getComputedStyle(t2);
  return i2[n2] || i2.getPropertyValue(n2.replace(ho, "-$1").toLowerCase()) || i2.getPropertyValue(n2) || !r2 && e14(t2, Io(n2) || n2, 1) || "";
}, zo = "O,Moz,ms,Ms,Webkit".split(","), Io = function(e19, t2, n2) {
  var r2 = (t2 || io).style, i2 = 5;
  if (e19 in r2 && !n2) return e19;
  for (e19 = e19.charAt(0).toUpperCase() + e19.substr(1); i2-- && !(zo[i2] + e19 in r2); ) ;
  return i2 < 0 ? null : (3 === i2 ? "ms" : i2 >= 0 ? zo[i2] : "") + e19;
}, Bo = function() {
  "undefined" != typeof window && window.document && (eo = window, to = eo.document, no = to.documentElement, io = jo("div") || { style: {} }, jo("div"), ko = Io(ko), Mo = ko + "Origin", io.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", so = !!Io("perspective"), ao = Qi.core.reverting, ro = 1);
}, Fo = function(e19) {
  var t2, n2 = e19.ownerSVGElement, r2 = jo("svg", n2 && n2.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i2 = e19.cloneNode(true);
  i2.style.display = "block", r2.appendChild(i2), no.appendChild(r2);
  try {
    t2 = i2.getBBox();
  } catch (e20) {
  }
  return r2.removeChild(i2), no.removeChild(r2), t2;
}, Vo = function(e19, t2) {
  for (var n2 = t2.length; n2--; ) if (e19.hasAttribute(t2[n2])) return e19.getAttribute(t2[n2]);
}, Ho = function(e19) {
  var t2, n2;
  try {
    t2 = e19.getBBox();
  } catch (r2) {
    t2 = Fo(e19), n2 = 1;
  }
  return t2 && (t2.width || t2.height) || n2 || (t2 = Fo(e19)), !t2 || t2.width || t2.x || t2.y ? t2 : { x: +Vo(e19, ["x", "cx", "x1"]) || 0, y: +Vo(e19, ["y", "cy", "y1"]) || 0, width: 0, height: 0 };
}, Uo = function(e19) {
  return !(!e19.getCTM || e19.parentNode && !e19.ownerSVGElement || !Ho(e19));
}, Wo = function(e19, t2) {
  if (t2) {
    var n2, r2 = e19.style;
    t2 in uo && t2 !== Mo && (t2 = ko), r2.removeProperty ? ("ms" !== (n2 = t2.substr(0, 2)) && "webkit" !== t2.substr(0, 6) || (t2 = "-" + t2), r2.removeProperty("--" === n2 ? t2 : t2.replace(ho, "-$1").toLowerCase())) : r2.removeAttribute(t2);
  }
}, $o = function(e19, t2, n2, r2, i2, o2) {
  var a2 = new Fi(e19._pt, t2, n2, 0, 1, o2 ? xo : wo);
  return e19._pt = a2, a2.b = r2, a2.e = i2, e19._props.push(n2), a2;
}, Yo = { deg: 1, rad: 1, turn: 1 }, Xo = { grid: 1, flex: 1 }, qo = function e15(t2, n2, r2, i2) {
  var o2, a2, s2, u2, l2 = parseFloat(r2) || 0, c2 = (r2 + "").trim().substr((l2 + "").length) || "px", f2 = io.style, h2 = po.test(n2), p2 = "svg" === t2.tagName.toLowerCase(), d2 = (p2 ? "client" : "offset") + (h2 ? "Width" : "Height"), m2 = 100, v2 = "px" === i2, g2 = "%" === i2;
  if (i2 === c2 || !l2 || Yo[i2] || Yo[c2]) return l2;
  if ("px" !== c2 && !v2 && (l2 = e15(t2, n2, r2, "px")), u2 = t2.getCTM && Uo(t2), (g2 || "%" === c2) && (uo[n2] || ~n2.indexOf("adius"))) return o2 = u2 ? t2.getBBox()[h2 ? "width" : "height"] : t2[d2], Un(g2 ? l2 / o2 * m2 : l2 / 100 * o2);
  if (f2[h2 ? "width" : "height"] = m2 + (v2 ? c2 : i2), a2 = "rem" !== i2 && ~n2.indexOf("adius") || "em" === i2 && t2.appendChild && !p2 ? t2 : t2.parentNode, u2 && (a2 = (t2.ownerSVGElement || {}).parentNode), a2 && a2 !== to && a2.appendChild || (a2 = to.body), (s2 = a2._gsap) && g2 && s2.width && h2 && s2.time === ei.time && !s2.uncache) return Un(l2 / s2.width * m2);
  if (!g2 || "height" !== n2 && "width" !== n2) (g2 || "%" === c2) && !Xo[Do(a2, "display")] && (f2.position = Do(t2, "position")), a2 === t2 && (f2.position = "static"), a2.appendChild(io), o2 = io[d2], a2.removeChild(io), f2.position = "absolute";
  else {
    var _2 = t2.style[n2];
    t2.style[n2] = m2 + i2, o2 = t2[d2], _2 ? t2.style[n2] = _2 : Wo(t2, n2);
  }
  return h2 && g2 && ((s2 = Fn(a2)).time = ei.time, s2.width = a2[d2]), Un(v2 ? o2 * l2 / m2 : o2 && l2 ? m2 / o2 * l2 : 0);
}, Zo = function(e19, t2, n2, r2) {
  var i2;
  return ro || Bo(), t2 in vo && "transform" !== t2 && ~(t2 = vo[t2]).indexOf(",") && (t2 = t2.split(",")[0]), uo[t2] && "transform" !== t2 ? (i2 = sa(e19, r2), i2 = "transformOrigin" !== t2 ? i2[t2] : i2.svg ? i2.origin : ua(Do(e19, Mo)) + " " + i2.zOrigin + "px") : (!(i2 = e19.style[t2]) || "auto" === i2 || r2 || ~(i2 + "").indexOf("calc(")) && (i2 = ea[t2] && ea[t2](e19, t2, n2) || Do(e19, t2) || Vn(e19, t2) || ("opacity" === t2 ? 1 : 0)), n2 && !~(i2 + "").trim().indexOf(" ") ? qo(e19, t2, i2, n2) + n2 : i2;
}, Go = function(e19, t2, n2, r2) {
  if (!n2 || "none" === n2) {
    var i2 = Io(t2, e19, 1), o2 = i2 && Do(e19, i2, 1);
    o2 && o2 !== n2 ? (t2 = i2, n2 = o2) : "borderColor" === t2 && (n2 = Do(e19, "borderTopColor"));
  }
  var a2, s2, u2, l2, c2, f2, h2, p2, d2, m2, v2, g2 = new Fi(this._pt, e19.style, t2, 0, 1, Li), _2 = 0, y2 = 0;
  if (g2.b = n2, g2.e = r2, n2 += "", "auto" === (r2 += "") && (f2 = e19.style[t2], e19.style[t2] = r2, r2 = Do(e19, t2) || r2, f2 ? e19.style[t2] = f2 : Wo(e19, t2)), Qr(a2 = [n2, r2]), r2 = a2[1], u2 = (n2 = a2[0]).match(vn) || [], (r2.match(vn) || []).length) {
    for (; s2 = vn.exec(r2); ) h2 = s2[0], d2 = r2.substring(_2, s2.index), c2 ? c2 = (c2 + 1) % 5 : "rgba(" !== d2.substr(-5) && "hsla(" !== d2.substr(-5) || (c2 = 1), h2 !== (f2 = u2[y2++] || "") && (l2 = parseFloat(f2) || 0, v2 = f2.substr((l2 + "").length), "=" === h2.charAt(1) && (h2 = $n(l2, h2) + v2), p2 = parseFloat(h2), m2 = h2.substr((p2 + "").length), _2 = vn.lastIndex - m2.length, m2 || (m2 = m2 || Xt.units[t2] || v2, _2 === r2.length && (r2 += m2, g2.e += m2)), v2 !== m2 && (l2 = qo(e19, t2, f2, m2) || 0), g2._pt = { _next: g2._pt, p: d2 || 1 === y2 ? d2 : ",", s: l2, c: p2 - l2, m: c2 && c2 < 4 || "zIndex" === t2 ? Math.round : 0 });
    g2.c = _2 < r2.length ? r2.substring(_2, r2.length) : "";
  } else g2.r = "display" === t2 && "none" === r2 ? xo : wo;
  return _n.test(r2) && (g2.e = 0), this._pt = g2, g2;
}, Ko = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" }, Jo = function(e19) {
  var t2 = e19.split(" "), n2 = t2[0], r2 = t2[1] || "50%";
  return "top" !== n2 && "bottom" !== n2 && "left" !== r2 && "right" !== r2 || (e19 = n2, n2 = r2, r2 = e19), t2[0] = Ko[n2] || n2, t2[1] = Ko[r2] || r2, t2.join(" ");
}, Qo = function(e19, t2) {
  if (t2.tween && t2.tween._time === t2.tween._dur) {
    var n2, r2, i2, o2 = t2.t, a2 = o2.style, s2 = t2.u, u2 = o2._gsap;
    if ("all" === s2 || true === s2) a2.cssText = "", r2 = 1;
    else for (i2 = (s2 = s2.split(",")).length; --i2 > -1; ) n2 = s2[i2], uo[n2] && (r2 = 1, n2 = "transformOrigin" === n2 ? Mo : ko), Wo(o2, n2);
    r2 && (Wo(o2, ko), u2 && (u2.svg && o2.removeAttribute("transform"), a2.scale = a2.rotate = a2.translate = "none", sa(o2, 1), u2.uncache = 1, Ao(a2)));
  }
}, ea = { clearProps: function(e19, t2, n2, r2, i2) {
  if ("isFromStart" !== i2.data) {
    var o2 = e19._pt = new Fi(e19._pt, t2, n2, 0, 0, Qo);
    return o2.u = r2, o2.pr = -10, o2.tween = i2, e19._props.push(n2), 1;
  }
} }, ta = [1, 0, 0, 1, 0, 0], na = {}, ra = function(e19) {
  return "matrix(1, 0, 0, 1, 0, 0)" === e19 || "none" === e19 || !e19;
}, ia = function(e19) {
  var t2 = Do(e19, ko);
  return ra(t2) ? ta : t2.substr(7).match(mn).map(Un);
}, oa = function(e19, t2) {
  var n2, r2, i2, o2, a2 = e19._gsap || Fn(e19), s2 = e19.style, u2 = ia(e19);
  return a2.svg && e19.getAttribute("transform") ? "1,0,0,1,0,0" === (u2 = [(i2 = e19.transform.baseVal.consolidate().matrix).a, i2.b, i2.c, i2.d, i2.e, i2.f]).join(",") ? ta : u2 : (u2 !== ta || e19.offsetParent || e19 === no || a2.svg || (i2 = s2.display, s2.display = "block", (n2 = e19.parentNode) && (e19.offsetParent || e19.getBoundingClientRect().width) || (o2 = 1, r2 = e19.nextElementSibling, no.appendChild(e19)), u2 = ia(e19), i2 ? s2.display = i2 : Wo(e19, "display"), o2 && (r2 ? n2.insertBefore(e19, r2) : n2 ? n2.appendChild(e19) : no.removeChild(e19))), t2 && u2.length > 6 ? [u2[0], u2[1], u2[4], u2[5], u2[12], u2[13]] : u2);
}, aa = function(e19, t2, n2, r2, i2, o2) {
  var a2, s2, u2, l2 = e19._gsap, c2 = i2 || oa(e19, true), f2 = l2.xOrigin || 0, h2 = l2.yOrigin || 0, p2 = l2.xOffset || 0, d2 = l2.yOffset || 0, m2 = c2[0], v2 = c2[1], g2 = c2[2], _2 = c2[3], y2 = c2[4], b2 = c2[5], w2 = t2.split(" "), x2 = parseFloat(w2[0]) || 0, C2 = parseFloat(w2[1]) || 0;
  n2 ? c2 !== ta && (s2 = m2 * _2 - v2 * g2) && (u2 = x2 * (-v2 / s2) + C2 * (m2 / s2) - (m2 * b2 - v2 * y2) / s2, x2 = x2 * (_2 / s2) + C2 * (-g2 / s2) + (g2 * b2 - _2 * y2) / s2, C2 = u2) : (x2 = (a2 = Ho(e19)).x + (~w2[0].indexOf("%") ? x2 / 100 * a2.width : x2), C2 = a2.y + (~(w2[1] || w2[0]).indexOf("%") ? C2 / 100 * a2.height : C2)), r2 || false !== r2 && l2.smooth ? (y2 = x2 - f2, b2 = C2 - h2, l2.xOffset = p2 + (y2 * m2 + b2 * g2) - y2, l2.yOffset = d2 + (y2 * v2 + b2 * _2) - b2) : l2.xOffset = l2.yOffset = 0, l2.xOrigin = x2, l2.yOrigin = C2, l2.smooth = !!r2, l2.origin = t2, l2.originIsAbsolute = !!n2, e19.style[Mo] = "0px 0px", o2 && ($o(o2, l2, "xOrigin", f2, x2), $o(o2, l2, "yOrigin", h2, C2), $o(o2, l2, "xOffset", p2, l2.xOffset), $o(o2, l2, "yOffset", d2, l2.yOffset)), e19.setAttribute("data-svg-origin", x2 + " " + C2);
}, sa = function(e19, t2) {
  var n2 = e19._gsap || new pi(e19);
  if ("x" in n2 && !t2 && !n2.uncache) return n2;
  var r2, i2, o2, a2, s2, u2, l2, c2, f2, h2, p2, d2, m2, v2, g2, _2, y2, b2, w2, x2, C2, T2, O2, S2, E2, P2, k2, M2, N2, A2, R2, L2, j2 = e19.style, D2 = n2.scaleX < 0, z2 = "px", I2 = "deg", B2 = getComputedStyle(e19), F2 = Do(e19, Mo) || "0";
  return r2 = i2 = o2 = u2 = l2 = c2 = f2 = h2 = p2 = 0, a2 = s2 = 1, n2.svg = !(!e19.getCTM || !Uo(e19)), B2.translate && ("none" === B2.translate && "none" === B2.scale && "none" === B2.rotate || (j2[ko] = ("none" !== B2.translate ? "translate3d(" + (B2.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== B2.rotate ? "rotate(" + B2.rotate + ") " : "") + ("none" !== B2.scale ? "scale(" + B2.scale.split(" ").join(",") + ") " : "") + ("none" !== B2[ko] ? B2[ko] : "")), j2.scale = j2.rotate = j2.translate = "none"), v2 = oa(e19, n2.svg), n2.svg && (n2.uncache ? (E2 = e19.getBBox(), F2 = n2.xOrigin - E2.x + "px " + (n2.yOrigin - E2.y) + "px", S2 = "") : S2 = !t2 && e19.getAttribute("data-svg-origin"), aa(e19, S2 || F2, !!S2 || n2.originIsAbsolute, false !== n2.smooth, v2)), d2 = n2.xOrigin || 0, m2 = n2.yOrigin || 0, v2 !== ta && (b2 = v2[0], w2 = v2[1], x2 = v2[2], C2 = v2[3], r2 = T2 = v2[4], i2 = O2 = v2[5], 6 === v2.length ? (a2 = Math.sqrt(b2 * b2 + w2 * w2), s2 = Math.sqrt(C2 * C2 + x2 * x2), u2 = b2 || w2 ? fo(w2, b2) * lo : 0, (f2 = x2 || C2 ? fo(x2, C2) * lo + u2 : 0) && (s2 *= Math.abs(Math.cos(f2 * co))), n2.svg && (r2 -= d2 - (d2 * b2 + m2 * x2), i2 -= m2 - (d2 * w2 + m2 * C2))) : (L2 = v2[6], A2 = v2[7], k2 = v2[8], M2 = v2[9], N2 = v2[10], R2 = v2[11], r2 = v2[12], i2 = v2[13], o2 = v2[14], l2 = (g2 = fo(L2, N2)) * lo, g2 && (S2 = T2 * (_2 = Math.cos(-g2)) + k2 * (y2 = Math.sin(-g2)), E2 = O2 * _2 + M2 * y2, P2 = L2 * _2 + N2 * y2, k2 = T2 * -y2 + k2 * _2, M2 = O2 * -y2 + M2 * _2, N2 = L2 * -y2 + N2 * _2, R2 = A2 * -y2 + R2 * _2, T2 = S2, O2 = E2, L2 = P2), c2 = (g2 = fo(-x2, N2)) * lo, g2 && (_2 = Math.cos(-g2), R2 = C2 * (y2 = Math.sin(-g2)) + R2 * _2, b2 = S2 = b2 * _2 - k2 * y2, w2 = E2 = w2 * _2 - M2 * y2, x2 = P2 = x2 * _2 - N2 * y2), u2 = (g2 = fo(w2, b2)) * lo, g2 && (S2 = b2 * (_2 = Math.cos(g2)) + w2 * (y2 = Math.sin(g2)), E2 = T2 * _2 + O2 * y2, w2 = w2 * _2 - b2 * y2, O2 = O2 * _2 - T2 * y2, b2 = S2, T2 = E2), l2 && Math.abs(l2) + Math.abs(u2) > 359.9 && (l2 = u2 = 0, c2 = 180 - c2), a2 = Un(Math.sqrt(b2 * b2 + w2 * w2 + x2 * x2)), s2 = Un(Math.sqrt(O2 * O2 + L2 * L2)), g2 = fo(T2, O2), f2 = Math.abs(g2) > 2e-4 ? g2 * lo : 0, p2 = R2 ? 1 / (R2 < 0 ? -R2 : R2) : 0), n2.svg && (S2 = e19.getAttribute("transform"), n2.forceCSS = e19.setAttribute("transform", "") || !ra(Do(e19, ko)), S2 && e19.setAttribute("transform", S2))), Math.abs(f2) > 90 && Math.abs(f2) < 270 && (D2 ? (a2 *= -1, f2 += u2 <= 0 ? 180 : -180, u2 += u2 <= 0 ? 180 : -180) : (s2 *= -1, f2 += f2 <= 0 ? 180 : -180)), t2 = t2 || n2.uncache, n2.x = r2 - ((n2.xPercent = r2 && (!t2 && n2.xPercent || (Math.round(e19.offsetWidth / 2) === Math.round(-r2) ? -50 : 0))) ? e19.offsetWidth * n2.xPercent / 100 : 0) + z2, n2.y = i2 - ((n2.yPercent = i2 && (!t2 && n2.yPercent || (Math.round(e19.offsetHeight / 2) === Math.round(-i2) ? -50 : 0))) ? e19.offsetHeight * n2.yPercent / 100 : 0) + z2, n2.z = o2 + z2, n2.scaleX = Un(a2), n2.scaleY = Un(s2), n2.rotation = Un(u2) + I2, n2.rotationX = Un(l2) + I2, n2.rotationY = Un(c2) + I2, n2.skewX = f2 + I2, n2.skewY = h2 + I2, n2.transformPerspective = p2 + z2, (n2.zOrigin = parseFloat(F2.split(" ")[2]) || !t2 && n2.zOrigin || 0) && (j2[Mo] = ua(F2)), n2.xOffset = n2.yOffset = 0, n2.force3D = Xt.force3D, n2.renderTransform = n2.svg ? ma : so ? da : ca, n2.uncache = 0, n2;
}, ua = function(e19) {
  return (e19 = e19.split(" "))[0] + " " + e19[1];
}, la = function(e19, t2, n2) {
  var r2 = Sr(t2);
  return Un(parseFloat(t2) + parseFloat(qo(e19, "x", n2 + "px", r2))) + r2;
}, ca = function(e19, t2) {
  t2.z = "0px", t2.rotationY = t2.rotationX = "0deg", t2.force3D = 0, da(e19, t2);
}, fa = "0deg", ha = "0px", pa = ") ", da = function(e19, t2) {
  var n2 = t2 || this, r2 = n2.xPercent, i2 = n2.yPercent, o2 = n2.x, a2 = n2.y, s2 = n2.z, u2 = n2.rotation, l2 = n2.rotationY, c2 = n2.rotationX, f2 = n2.skewX, h2 = n2.skewY, p2 = n2.scaleX, d2 = n2.scaleY, m2 = n2.transformPerspective, v2 = n2.force3D, g2 = n2.target, _2 = n2.zOrigin, y2 = "", b2 = "auto" === v2 && e19 && 1 !== e19 || true === v2;
  if (_2 && (c2 !== fa || l2 !== fa)) {
    var w2, x2 = parseFloat(l2) * co, C2 = Math.sin(x2), T2 = Math.cos(x2);
    x2 = parseFloat(c2) * co, w2 = Math.cos(x2), o2 = la(g2, o2, C2 * w2 * -_2), a2 = la(g2, a2, -Math.sin(x2) * -_2), s2 = la(g2, s2, T2 * w2 * -_2 + _2);
  }
  m2 !== ha && (y2 += "perspective(" + m2 + pa), (r2 || i2) && (y2 += "translate(" + r2 + "%, " + i2 + "%) "), (b2 || o2 !== ha || a2 !== ha || s2 !== ha) && (y2 += s2 !== ha || b2 ? "translate3d(" + o2 + ", " + a2 + ", " + s2 + ") " : "translate(" + o2 + ", " + a2 + pa), u2 !== fa && (y2 += "rotate(" + u2 + pa), l2 !== fa && (y2 += "rotateY(" + l2 + pa), c2 !== fa && (y2 += "rotateX(" + c2 + pa), f2 === fa && h2 === fa || (y2 += "skew(" + f2 + ", " + h2 + pa), 1 === p2 && 1 === d2 || (y2 += "scale(" + p2 + ", " + d2 + pa), g2.style[ko] = y2 || "translate(0, 0)";
}, ma = function(e19, t2) {
  var n2, r2, i2, o2, a2, s2 = t2 || this, u2 = s2.xPercent, l2 = s2.yPercent, c2 = s2.x, f2 = s2.y, h2 = s2.rotation, p2 = s2.skewX, d2 = s2.skewY, m2 = s2.scaleX, v2 = s2.scaleY, g2 = s2.target, _2 = s2.xOrigin, y2 = s2.yOrigin, b2 = s2.xOffset, w2 = s2.yOffset, x2 = s2.forceCSS, C2 = parseFloat(c2), T2 = parseFloat(f2);
  h2 = parseFloat(h2), p2 = parseFloat(p2), (d2 = parseFloat(d2)) && (p2 += d2 = parseFloat(d2), h2 += d2), h2 || p2 ? (h2 *= co, p2 *= co, n2 = Math.cos(h2) * m2, r2 = Math.sin(h2) * m2, i2 = Math.sin(h2 - p2) * -v2, o2 = Math.cos(h2 - p2) * v2, p2 && (d2 *= co, a2 = Math.tan(p2 - d2), i2 *= a2 = Math.sqrt(1 + a2 * a2), o2 *= a2, d2 && (a2 = Math.tan(d2), n2 *= a2 = Math.sqrt(1 + a2 * a2), r2 *= a2)), n2 = Un(n2), r2 = Un(r2), i2 = Un(i2), o2 = Un(o2)) : (n2 = m2, o2 = v2, r2 = i2 = 0), (C2 && !~(c2 + "").indexOf("px") || T2 && !~(f2 + "").indexOf("px")) && (C2 = qo(g2, "x", c2, "px"), T2 = qo(g2, "y", f2, "px")), (_2 || y2 || b2 || w2) && (C2 = Un(C2 + _2 - (_2 * n2 + y2 * i2) + b2), T2 = Un(T2 + y2 - (_2 * r2 + y2 * o2) + w2)), (u2 || l2) && (a2 = g2.getBBox(), C2 = Un(C2 + u2 / 100 * a2.width), T2 = Un(T2 + l2 / 100 * a2.height)), a2 = "matrix(" + n2 + "," + r2 + "," + i2 + "," + o2 + "," + C2 + "," + T2 + ")", g2.setAttribute("transform", a2), x2 && (g2.style[ko] = a2);
}, va = function(e19, t2, n2, r2, i2) {
  var o2, a2, s2 = 360, u2 = rn(i2), l2 = parseFloat(i2) * (u2 && ~i2.indexOf("rad") ? lo : 1) - r2, c2 = r2 + l2 + "deg";
  return u2 && ("short" === (o2 = i2.split("_")[1]) && (l2 %= s2) !== l2 % 180 && (l2 += l2 < 0 ? s2 : -360), "cw" === o2 && l2 < 0 ? l2 = (l2 + 36e9) % s2 - ~~(l2 / s2) * s2 : "ccw" === o2 && l2 > 0 && (l2 = (l2 - 36e9) % s2 - ~~(l2 / s2) * s2)), e19._pt = a2 = new Fi(e19._pt, t2, n2, r2, l2, _o), a2.e = c2, a2.u = "deg", e19._props.push(n2), a2;
}, ga = function(e19, t2) {
  for (var n2 in t2) e19[n2] = t2[n2];
  return e19;
}, _a = function(e19, t2, n2) {
  var r2, i2, o2, a2, s2, u2, l2, c2 = ga({}, n2._gsap), f2 = n2.style;
  for (i2 in c2.svg ? (o2 = n2.getAttribute("transform"), n2.setAttribute("transform", ""), f2[ko] = t2, r2 = sa(n2, 1), Wo(n2, ko), n2.setAttribute("transform", o2)) : (o2 = getComputedStyle(n2)[ko], f2[ko] = t2, r2 = sa(n2, 1), f2[ko] = o2), uo) (o2 = c2[i2]) !== (a2 = r2[i2]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i2) < 0 && (s2 = Sr(o2) !== (l2 = Sr(a2)) ? qo(n2, i2, o2, l2) : parseFloat(o2), u2 = parseFloat(a2), e19._pt = new Fi(e19._pt, r2, i2, s2, u2 - s2, go), e19._pt.u = l2 || 0, e19._props.push(i2));
  ga(r2, c2);
};
Hn("padding,margin,Width,Radius", function(e19, t2) {
  var n2 = "Top", r2 = "Right", i2 = "Bottom", o2 = "Left", a2 = (t2 < 3 ? [n2, r2, i2, o2] : [n2 + o2, n2 + r2, i2 + r2, i2 + o2]).map(function(n3) {
    return t2 < 2 ? e19 + n3 : "border" + n3 + e19;
  });
  ea[t2 > 1 ? "border" + e19 : e19] = function(e20, t3, n3, r3, i3) {
    var o3, s2;
    if (arguments.length < 4) return o3 = a2.map(function(t4) {
      return Zo(e20, t4, n3);
    }), 5 === (s2 = o3.join(" ")).split(o3[0]).length ? o3[0] : s2;
    o3 = (r3 + "").split(" "), s2 = {}, a2.forEach(function(e21, t4) {
      return s2[e21] = o3[t4] = o3[t4] || o3[(t4 - 1) / 2 | 0];
    }), e20.init(t3, s2, i3);
  };
});
var ya, ba, wa, xa = { name: "css", register: Bo, targetTest: function(e19) {
  return e19.style && e19.nodeType;
}, init: function(e19, t2, n2, r2, i2) {
  var o2, a2, s2, u2, l2, c2, f2, h2, p2, d2, m2, v2, g2, _2, y2, b2, w2 = this._props, x2 = e19.style, C2 = n2.vars.startAt;
  for (f2 in ro || Bo(), this.styles = this.styles || Lo(e19), b2 = this.styles.props, this.tween = n2, t2) if ("autoRound" !== f2 && (a2 = t2[f2], !Ln[f2] || !bi(f2, t2, n2, r2, e19, i2))) {
    if (l2 = typeof a2, c2 = ea[f2], "function" === l2 && (l2 = typeof (a2 = a2.call(n2, r2, e19, i2))), "string" === l2 && ~a2.indexOf("random(") && (a2 = Ir(a2)), c2) c2(this, e19, f2, a2, n2) && (y2 = 1);
    else if ("--" === f2.substr(0, 2)) o2 = (getComputedStyle(e19).getPropertyValue(f2) + "").trim(), a2 += "", Kr.lastIndex = 0, Kr.test(o2) || (h2 = Sr(o2), p2 = Sr(a2)), p2 ? h2 !== p2 && (o2 = qo(e19, f2, o2, p2) + p2) : h2 && (a2 += h2), this.add(x2, "setProperty", o2, a2, r2, i2, 0, 0, f2), w2.push(f2), b2.push(f2, 0, x2[f2]);
    else if ("undefined" !== l2) {
      if (C2 && f2 in C2 ? (o2 = "function" == typeof C2[f2] ? C2[f2].call(n2, r2, e19, i2) : C2[f2], rn(o2) && ~o2.indexOf("random(") && (o2 = Ir(o2)), Sr(o2 + "") || "auto" === o2 || (o2 += Xt.units[f2] || Sr(Zo(e19, f2)) || ""), "=" === (o2 + "").charAt(1) && (o2 = Zo(e19, f2))) : o2 = Zo(e19, f2), u2 = parseFloat(o2), (d2 = "string" === l2 && "=" === a2.charAt(1) && a2.substr(0, 2)) && (a2 = a2.substr(2)), s2 = parseFloat(a2), f2 in vo && ("autoAlpha" === f2 && (1 === u2 && "hidden" === Zo(e19, "visibility") && s2 && (u2 = 0), b2.push("visibility", 0, x2.visibility), $o(this, x2, "visibility", u2 ? "inherit" : "hidden", s2 ? "inherit" : "hidden", !s2)), "scale" !== f2 && "transform" !== f2 && ~(f2 = vo[f2]).indexOf(",") && (f2 = f2.split(",")[0])), m2 = f2 in uo) if (this.styles.save(f2), v2 || ((g2 = e19._gsap).renderTransform && !t2.parseTransform || sa(e19, t2.parseTransform), _2 = false !== t2.smoothOrigin && g2.smooth, (v2 = this._pt = new Fi(this._pt, x2, ko, 0, 1, g2.renderTransform, g2, 0, -1)).dep = 1), "scale" === f2) this._pt = new Fi(this._pt, g2, "scaleY", g2.scaleY, (d2 ? $n(g2.scaleY, d2 + s2) : s2) - g2.scaleY || 0, go), this._pt.u = 0, w2.push("scaleY", f2), f2 += "X";
      else {
        if ("transformOrigin" === f2) {
          b2.push(Mo, 0, x2[Mo]), a2 = Jo(a2), g2.svg ? aa(e19, a2, 0, _2, 0, this) : ((p2 = parseFloat(a2.split(" ")[2]) || 0) !== g2.zOrigin && $o(this, g2, "zOrigin", g2.zOrigin, p2), $o(this, x2, f2, ua(o2), ua(a2)));
          continue;
        }
        if ("svgOrigin" === f2) {
          aa(e19, a2, 1, _2, 0, this);
          continue;
        }
        if (f2 in na) {
          va(this, g2, f2, u2, d2 ? $n(u2, d2 + a2) : a2);
          continue;
        }
        if ("smoothOrigin" === f2) {
          $o(this, g2, "smooth", g2.smooth, a2);
          continue;
        }
        if ("force3D" === f2) {
          g2[f2] = a2;
          continue;
        }
        if ("transform" === f2) {
          _a(this, a2, e19);
          continue;
        }
      }
      else f2 in x2 || (f2 = Io(f2) || f2);
      if (m2 || (s2 || 0 === s2) && (u2 || 0 === u2) && !mo.test(a2) && f2 in x2) s2 || (s2 = 0), (h2 = (o2 + "").substr((u2 + "").length)) !== (p2 = Sr(a2) || (f2 in Xt.units ? Xt.units[f2] : h2)) && (u2 = qo(e19, f2, o2, p2)), this._pt = new Fi(this._pt, m2 ? g2 : x2, f2, u2, (d2 ? $n(u2, d2 + s2) : s2) - u2, m2 || "px" !== p2 && "zIndex" !== f2 || false === t2.autoRound ? go : bo), this._pt.u = p2 || 0, h2 !== p2 && "%" !== p2 && (this._pt.b = o2, this._pt.r = yo);
      else if (f2 in x2) Go.call(this, e19, f2, o2, d2 ? d2 + a2 : a2);
      else if (f2 in e19) this.add(e19, f2, o2 || e19[f2], d2 ? d2 + a2 : a2, r2, i2);
      else if ("parseTransform" !== f2) {
        Tn(f2, a2);
        continue;
      }
      m2 || (f2 in x2 ? b2.push(f2, 0, x2[f2]) : "function" == typeof e19[f2] ? b2.push(f2, 2, e19[f2]()) : b2.push(f2, 1, o2 || e19[f2])), w2.push(f2);
    }
  }
  y2 && Bi(this);
}, render: function(e19, t2) {
  if (t2.tween._time || !ao()) for (var n2 = t2._pt; n2; ) n2.r(e19, n2.d), n2 = n2._next;
  else t2.styles.revert();
}, get: Zo, aliases: vo, getSetter: function(e19, t2, n2) {
  var r2 = vo[t2];
  return r2 && r2.indexOf(",") < 0 && (t2 = r2), t2 in uo && t2 !== Mo && (e19._gsap.x || Zo(e19, "x")) ? n2 && oo === n2 ? "scale" === t2 ? So : Oo : (oo = n2 || {}) && ("scale" === t2 ? Eo : Po) : e19.style && !sn(e19.style[t2]) ? Co : ~t2.indexOf("-") ? To : Ni(e19, t2);
}, core: { _removeProperty: Wo, _getMatrix: oa } };
Qi.utils.checkPrefix = Io, Qi.core.getStyleSaver = Lo, wa = Hn((ya = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (ba = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(e19) {
  uo[e19] = 1;
}), Hn(ba, function(e19) {
  Xt.units[e19] = "deg", na[e19] = 1;
}), vo[wa[13]] = ya + "," + ba, Hn("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(e19) {
  var t2 = e19.split(":");
  vo[t2[1]] = wa[t2[0]];
}), Hn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(e19) {
  Xt.units[e19] = "px";
}), Qi.registerPlugin(xa);
var Ca = Qi.registerPlugin(xa) || Qi;
Ca.core.Tween;
/*!
 * @gsap/react 2.1.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
let Ta = "undefined" != typeof document ? le : ue, Oa = (e19) => e19 && !Array.isArray(e19) && "object" == typeof e19, Sa = [], Ea = {}, Pa = Ca;
const ka = (e19, t2 = Sa) => {
  let n2 = Ea;
  Oa(e19) ? (n2 = e19, e19 = null, t2 = "dependencies" in n2 ? n2.dependencies : Sa) : Oa(t2) && (n2 = t2, t2 = "dependencies" in n2 ? n2.dependencies : Sa), e19 && "function" != typeof e19 && console.warn("First parameter must be a function or config object");
  const { scope: r2, revertOnUpdate: i2 } = n2, o2 = ce(false), a2 = ce(Pa.context(() => {
  }, r2)), s2 = ce((e20) => a2.current.add(null, e20)), u2 = t2 && t2.length && !i2;
  return u2 && Ta(() => (o2.current = true, () => a2.current.revert()), Sa), Ta(() => {
    if (e19 && a2.current.add(e19, r2), !u2 || !o2.current) return () => a2.current.revert();
  }, t2), { context: a2.current, contextSafe: s2.current };
};
function Ma(e19) {
  const [t2, n2] = ae(() => window.matchMedia(e19).matches);
  return ue(() => {
    const t3 = window.matchMedia(e19);
    function r2(e20) {
      n2(e20.matches);
    }
    return t3.addEventListener("change", r2), () => {
      t3.removeEventListener("change", r2);
    };
  }, [e19]), t2;
}
ka.register = (e19) => {
  Pa = e19;
}, ka.headless = true;
const Na = /* @__PURE__ */ new WeakMap(), Aa = {};
function Ra(e19) {
  !function() {
    const e20 = La();
    e20 && Na.delete(Aa);
  }(), Na.set(Aa, e19);
}
function La() {
  return Na.get(Aa);
}
const ja = /* @__PURE__ */ new WeakMap(), Da = {};
function za() {
  return ja.get(Da);
}
function Ia(e19 = () => {
}, t2, n2 = () => {
}) {
  const r2 = Ma("(min-width: 1025px)"), i2 = Ma("(min-height: 695px)"), o2 = Ma("(min-height: 2200px) and (min-width: 1500px), (min-width: 3000px)"), a2 = r2 && i2 || o2;
  return ka(() => (e19 && requestAnimationFrame(() => {
    const t3 = { scroller: a2 ? "#scroll-wrapper" : window };
    a2 && (t3.containerAnimation = La()), e19(t3);
  }), () => {
    n2 && n2();
  }), { dependencies: [r2, i2, o2], revertOnUpdate: true, ...t2 }), { isLargeScreen: o2, width: r2, height: i2, scrollTo: function(e20, t3) {
    var _a3, _b2;
    a2 ? (_a3 = za()) == null ? void 0 : _a3.scrollIntoView(document.getElementById(e20), t3) : (_b2 = document.getElementById(e20)) == null ? void 0 : _b2.scrollIntoView({ behavior: "smooth" });
  } };
}
function Ba() {
  const { scrollTo: e19 } = Ia();
  return $("div", { className: "center-flex", children: $("div", { className: "scroll-down center-gr", onClick: () => {
    e19("home-scroll");
  }, children: $("img", { className: "icon", src: "data:image/svg+xml,%3csvg%20width='10'%20height='16'%20viewBox='0%200%2010%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.29411%2010.29L6.00411%2012.59V1C6.00411%200.734784%205.89876%200.48043%205.71122%200.292893C5.52368%200.105357%205.26933%200%205.00411%200C4.7389%200%204.48454%200.105357%204.29701%200.292893C4.10947%200.48043%204.00411%200.734784%204.00411%201V12.59L1.71411%2010.29C1.52581%2010.1017%201.27041%209.99591%201.00411%209.99591C0.737811%209.99591%200.482416%2010.1017%200.294113%2010.29C0.105809%2010.4783%202.09808e-05%2010.7337%202.09808e-05%2011C2.09808e-05%2011.2663%200.105809%2011.5217%200.294113%2011.71L4.29411%2015.71C4.38922%2015.801%204.50136%2015.8724%204.62411%2015.92C4.74381%2015.9729%204.87324%2016.0002%205.00411%2016.0002C5.13498%2016.0002%205.26441%2015.9729%205.38411%2015.92C5.50686%2015.8724%205.61901%2015.801%205.71411%2015.71L9.71411%2011.71C9.90242%2011.5217%2010.0082%2011.2663%2010.0082%2011C10.0082%2010.7337%209.90242%2010.4783%209.71411%2010.29C9.62087%2010.1968%209.51018%2010.1228%209.38836%2010.0723C9.26654%2010.0219%209.13597%209.99591%209.00411%209.99591C8.73781%209.99591%208.48242%2010.1017%208.29411%2010.29Z'%20fill='white'%20fill-opacity='0.5'/%3e%3c/svg%3e", alt: "arrow" }) }) });
}
function Fa() {
  const { width: e19, height: t2 } = Ia();
  return $("section", { id: "home", children: [e19 && t2 && $(Rt, {}), $("div", { className: "container", children: [$(Ba, {}), $("div", { className: "text-wrapper", children: $("div", { className: "row center-y gap-50", children: [$("h1", { className: "capitalize", children: ["from idea", $("br", {}), " to life"] }), $("p", { className: "to-small text-white capitalize", children: ["Arhitecture modern technology", $("br", {}), " MasBo is an architectural group working in the field of architecture and", $("br", {}), " urban planning. For our customers, we are known as a reliable partner", $("br", {}), " with high standards of quality and responsibility."] })] }) })] })] });
}
function Va() {
  const { width: e19, height: t2, isLargeScreen: n2 } = Ia((r2) => {
    (e19 && t2 || n2) && (Ca.set(".scroll-indicator div", { width: "0%" }), Ca.to(".scroll-indicator div", { ease: "power1.out", width: "100%", scrollTrigger: { scroller: r2.scroller, trigger: "#home-scroll", start: "top top", end: () => "+=" + window.innerHeight, scrub: true } }));
  });
  return e19 && t2 && Ge($("div", { className: "scroll-indicator", children: $("div", {}) }), document.getElementById("modal-root"));
}
function Ha({ arrow: e19 = true, ...t2 }) {
  return $("div", { className: "main-button", children: $("button", { className: "font-bold text-white", ...t2, children: $("div", { className: "row gap-10 center-y", children: [t2.children, e19 && $("img", { alt: "arrow", className: "icon", src: "data:image/svg+xml,%3csvg%20width='7'%20height='11'%20viewBox='0%200%207%2011'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.7103%2010.487L5.9503%206.19701C6.04402%206.10405%206.11842%205.99344%206.16919%205.87159C6.21996%205.74973%206.24609%205.61902%206.24609%205.48701C6.24609%205.355%206.21996%205.22429%206.16919%205.10243C6.11842%204.98057%206.04402%204.86997%205.9503%204.77701L1.7103%200.537009C1.61733%200.443281%201.50673%200.368886%201.38487%200.318117C1.26301%200.267349%201.13231%200.241211%201.0003%200.241211C0.868284%200.241211%200.737578%200.267349%200.615719%200.318117C0.49386%200.368886%200.383259%200.443281%200.290296%200.537009C0.104044%200.724371%20-0.000496897%200.977823%20-0.000496908%201.24201C-0.00049692%201.50619%200.104044%201.75965%200.290296%201.94701L3.8303%205.48701L0.290295%209.02701C0.105551%209.21327%200.00140007%209.46467%200.000295224%209.72701C-0.000465813%209.85862%200.0247589%209.98908%200.0745235%2010.1109C0.124288%2010.2328%200.197614%2010.3436%200.290295%2010.437C0.379913%2010.5341%200.487879%2010.6124%200.607955%2010.6675C0.72803%2010.7227%200.857835%2010.7534%200.989871%2010.7581C1.12191%2010.7627%201.25355%2010.7412%201.37721%2010.6946C1.50086%2010.6481%201.61407%2010.5775%201.7103%2010.487Z'%20fill='white'/%3e%3c/svg%3e" })] }) }) });
}
const Ua = "/masbo_website/assets/img-2-BiZDErvq.jpg";
var Wa = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function $a(e19) {
  if (e19.__esModule) return e19;
  var t2 = e19.default;
  if ("function" == typeof t2) {
    var n2 = function e20() {
      return this instanceof e20 ? Reflect.construct(t2, arguments, this.constructor) : t2.apply(this, arguments);
    };
    n2.prototype = t2.prototype;
  } else n2 = {};
  return Object.defineProperty(n2, "__esModule", { value: true }), Object.keys(e19).forEach(function(t3) {
    var r2 = Object.getOwnPropertyDescriptor(e19, t3);
    Object.defineProperty(n2, t3, r2.get ? r2 : { enumerable: true, get: function() {
      return e19[t3];
    } });
  }), n2;
}
var Ya = { exports: {} };
const Xa = $a(Et);
var qa;
var Za = (qa || (qa = 1, (() => {
  var e19 = { 296: (e20, t3, n3) => {
    var r3 = /^\s+|\s+$/g, i2 = /^[-+]0x[0-9a-f]+$/i, o2 = /^0b[01]+$/i, a2 = /^0o[0-7]+$/i, s2 = parseInt, u2 = "object" == typeof n3.g && n3.g && n3.g.Object === Object && n3.g, l2 = "object" == typeof self && self && self.Object === Object && self, c2 = u2 || l2 || Function("return this")(), f2 = Object.prototype.toString, h2 = Math.max, p2 = Math.min, d2 = function() {
      return c2.Date.now();
    };
    function m2(e21) {
      var t4 = typeof e21;
      return !!e21 && ("object" == t4 || "function" == t4);
    }
    function v2(e21) {
      if ("number" == typeof e21) return e21;
      if (function(e22) {
        return "symbol" == typeof e22 || /* @__PURE__ */ function(e23) {
          return !!e23 && "object" == typeof e23;
        }(e22) && "[object Symbol]" == f2.call(e22);
      }(e21)) return NaN;
      if (m2(e21)) {
        var t4 = "function" == typeof e21.valueOf ? e21.valueOf() : e21;
        e21 = m2(t4) ? t4 + "" : t4;
      }
      if ("string" != typeof e21) return 0 === e21 ? e21 : +e21;
      e21 = e21.replace(r3, "");
      var n4 = o2.test(e21);
      return n4 || a2.test(e21) ? s2(e21.slice(2), n4 ? 2 : 8) : i2.test(e21) ? NaN : +e21;
    }
    e20.exports = function(e21, t4, n4) {
      var r4, i3, o3, a3, s3, u3, l3 = 0, c3 = false, f3 = false, g2 = true;
      if ("function" != typeof e21) throw new TypeError("Expected a function");
      function _2(t5) {
        var n5 = r4, o4 = i3;
        return r4 = i3 = void 0, l3 = t5, a3 = e21.apply(o4, n5);
      }
      function y2(e22) {
        var n5 = e22 - u3;
        return void 0 === u3 || n5 >= t4 || n5 < 0 || f3 && e22 - l3 >= o3;
      }
      function b2() {
        var e22 = d2();
        if (y2(e22)) return w2(e22);
        s3 = setTimeout(b2, function(e23) {
          var n5 = t4 - (e23 - u3);
          return f3 ? p2(n5, o3 - (e23 - l3)) : n5;
        }(e22));
      }
      function w2(e22) {
        return s3 = void 0, g2 && r4 ? _2(e22) : (r4 = i3 = void 0, a3);
      }
      function x2() {
        var e22 = d2(), n5 = y2(e22);
        if (r4 = arguments, i3 = this, u3 = e22, n5) {
          if (void 0 === s3) return function(e23) {
            return l3 = e23, s3 = setTimeout(b2, t4), c3 ? _2(e23) : a3;
          }(u3);
          if (f3) return s3 = setTimeout(b2, t4), _2(u3);
        }
        return void 0 === s3 && (s3 = setTimeout(b2, t4)), a3;
      }
      return t4 = v2(t4) || 0, m2(n4) && (c3 = !!n4.leading, o3 = (f3 = "maxWait" in n4) ? h2(v2(n4.maxWait) || 0, t4) : o3, g2 = "trailing" in n4 ? !!n4.trailing : g2), x2.cancel = function() {
        void 0 !== s3 && clearTimeout(s3), l3 = 0, r4 = u3 = i3 = s3 = void 0;
      }, x2.flush = function() {
        return void 0 === s3 ? a3 : w2(d2());
      }, x2;
    };
  }, 96: (e20, t3, n3) => {
    var r3 = "Expected a function", i2 = /^\s+|\s+$/g, o2 = /^[-+]0x[0-9a-f]+$/i, a2 = /^0b[01]+$/i, s2 = /^0o[0-7]+$/i, u2 = parseInt, l2 = "object" == typeof n3.g && n3.g && n3.g.Object === Object && n3.g, c2 = "object" == typeof self && self && self.Object === Object && self, f2 = l2 || c2 || Function("return this")(), h2 = Object.prototype.toString, p2 = Math.max, d2 = Math.min, m2 = function() {
      return f2.Date.now();
    };
    function v2(e21) {
      var t4 = typeof e21;
      return !!e21 && ("object" == t4 || "function" == t4);
    }
    function g2(e21) {
      if ("number" == typeof e21) return e21;
      if (function(e22) {
        return "symbol" == typeof e22 || /* @__PURE__ */ function(e23) {
          return !!e23 && "object" == typeof e23;
        }(e22) && "[object Symbol]" == h2.call(e22);
      }(e21)) return NaN;
      if (v2(e21)) {
        var t4 = "function" == typeof e21.valueOf ? e21.valueOf() : e21;
        e21 = v2(t4) ? t4 + "" : t4;
      }
      if ("string" != typeof e21) return 0 === e21 ? e21 : +e21;
      e21 = e21.replace(i2, "");
      var n4 = a2.test(e21);
      return n4 || s2.test(e21) ? u2(e21.slice(2), n4 ? 2 : 8) : o2.test(e21) ? NaN : +e21;
    }
    e20.exports = function(e21, t4, n4) {
      var i3 = true, o3 = true;
      if ("function" != typeof e21) throw new TypeError(r3);
      return v2(n4) && (i3 = "leading" in n4 ? !!n4.leading : i3, o3 = "trailing" in n4 ? !!n4.trailing : o3), function(e22, t5, n5) {
        var i4, o4, a3, s3, u3, l3, c3 = 0, f3 = false, h3 = false, _2 = true;
        if ("function" != typeof e22) throw new TypeError(r3);
        function y2(t6) {
          var n6 = i4, r4 = o4;
          return i4 = o4 = void 0, c3 = t6, s3 = e22.apply(r4, n6);
        }
        function b2(e23) {
          var n6 = e23 - l3;
          return void 0 === l3 || n6 >= t5 || n6 < 0 || h3 && e23 - c3 >= a3;
        }
        function w2() {
          var e23 = m2();
          if (b2(e23)) return x2(e23);
          u3 = setTimeout(w2, function(e24) {
            var n6 = t5 - (e24 - l3);
            return h3 ? d2(n6, a3 - (e24 - c3)) : n6;
          }(e23));
        }
        function x2(e23) {
          return u3 = void 0, _2 && i4 ? y2(e23) : (i4 = o4 = void 0, s3);
        }
        function C2() {
          var e23 = m2(), n6 = b2(e23);
          if (i4 = arguments, o4 = this, l3 = e23, n6) {
            if (void 0 === u3) return function(e24) {
              return c3 = e24, u3 = setTimeout(w2, t5), f3 ? y2(e24) : s3;
            }(l3);
            if (h3) return u3 = setTimeout(w2, t5), y2(l3);
          }
          return void 0 === u3 && (u3 = setTimeout(w2, t5)), s3;
        }
        return t5 = g2(t5) || 0, v2(n5) && (f3 = !!n5.leading, a3 = (h3 = "maxWait" in n5) ? p2(g2(n5.maxWait) || 0, t5) : a3, _2 = "trailing" in n5 ? !!n5.trailing : _2), C2.cancel = function() {
          void 0 !== u3 && clearTimeout(u3), c3 = 0, i4 = l3 = o4 = u3 = void 0;
        }, C2.flush = function() {
          return void 0 === u3 ? s3 : x2(m2());
        }, C2;
      }(e21, t4, { leading: i3, maxWait: t4, trailing: o3 });
    };
  }, 703: (e20, t3, n3) => {
    var r3 = n3(414);
    function i2() {
    }
    function o2() {
    }
    o2.resetWarningCache = i2, e20.exports = function() {
      function e21(e22, t5, n5, i3, o3, a2) {
        if (a2 !== r3) {
          var s2 = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw s2.name = "Invariant Violation", s2;
        }
      }
      function t4() {
        return e21;
      }
      e21.isRequired = e21;
      var n4 = { array: e21, bigint: e21, bool: e21, func: e21, number: e21, object: e21, string: e21, symbol: e21, any: e21, arrayOf: t4, element: e21, elementType: e21, instanceOf: t4, node: e21, objectOf: t4, oneOf: t4, oneOfType: t4, shape: t4, exact: t4, checkPropTypes: o2, resetWarningCache: i2 };
      return n4.PropTypes = n4, n4;
    };
  }, 697: (e20, t3, n3) => {
    e20.exports = n3(703)();
  }, 414: (e20) => {
    e20.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  } }, t2 = {};
  function n2(r3) {
    var i2 = t2[r3];
    if (void 0 !== i2) return i2.exports;
    var o2 = t2[r3] = { exports: {} };
    return e19[r3](o2, o2.exports, n2), o2.exports;
  }
  n2.n = (e20) => {
    var t3 = e20 && e20.__esModule ? () => e20.default : () => e20;
    return n2.d(t3, { a: t3 }), t3;
  }, n2.d = (e20, t3) => {
    for (var r3 in t3) n2.o(t3, r3) && !n2.o(e20, r3) && Object.defineProperty(e20, r3, { enumerable: true, get: t3[r3] });
  }, n2.g = function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e20) {
      if ("object" == typeof window) return window;
    }
  }(), n2.o = (e20, t3) => Object.prototype.hasOwnProperty.call(e20, t3), n2.r = (e20) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e20, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e20, "__esModule", { value: true });
  };
  var r2 = {};
  (() => {
    n2.r(r2), n2.d(r2, { LazyLoadComponent: () => U2, LazyLoadImage: () => ee2, trackWindowScroll: () => A2 });
    const e20 = Xa;
    var t3 = n2.n(e20), i2 = n2(697);
    function o2() {
      return "undefined" != typeof window && "IntersectionObserver" in window && "isIntersecting" in window.IntersectionObserverEntry.prototype;
    }
    function a2(e21) {
      return a2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e22) {
        return typeof e22;
      } : function(e22) {
        return e22 && "function" == typeof Symbol && e22.constructor === Symbol && e22 !== Symbol.prototype ? "symbol" : typeof e22;
      }, a2(e21);
    }
    function s2(e21, t4) {
      var n3 = Object.keys(e21);
      if (Object.getOwnPropertySymbols) {
        var r3 = Object.getOwnPropertySymbols(e21);
        t4 && (r3 = r3.filter(function(t5) {
          return Object.getOwnPropertyDescriptor(e21, t5).enumerable;
        })), n3.push.apply(n3, r3);
      }
      return n3;
    }
    function u2(e21, t4, n3) {
      return (t4 = c2(t4)) in e21 ? Object.defineProperty(e21, t4, { value: n3, enumerable: true, configurable: true, writable: true }) : e21[t4] = n3, e21;
    }
    function l2(e21, t4) {
      for (var n3 = 0; n3 < t4.length; n3++) {
        var r3 = t4[n3];
        r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(e21, c2(r3.key), r3);
      }
    }
    function c2(e21) {
      var t4 = function(e22) {
        if ("object" !== a2(e22) || null === e22) return e22;
        var t5 = e22[Symbol.toPrimitive];
        if (void 0 !== t5) {
          var n3 = t5.call(e22, "string");
          if ("object" !== a2(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e22);
      }(e21);
      return "symbol" === a2(t4) ? t4 : String(t4);
    }
    function f2(e21, t4) {
      return f2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e22, t5) {
        return e22.__proto__ = t5, e22;
      }, f2(e21, t4);
    }
    function h2(e21) {
      return h2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e22) {
        return e22.__proto__ || Object.getPrototypeOf(e22);
      }, h2(e21);
    }
    var p2 = function(e21) {
      e21.forEach(function(e22) {
        e22.isIntersecting && e22.target.onVisible();
      });
    }, d2 = {}, m2 = function(e21) {
      !function(e22, t4) {
        if ("function" != typeof t4 && null !== t4) throw new TypeError("Super expression must either be null or a function");
        e22.prototype = Object.create(t4 && t4.prototype, { constructor: { value: e22, writable: true, configurable: true } }), Object.defineProperty(e22, "prototype", { writable: false }), t4 && f2(e22, t4);
      }(v3, e21);
      var n3, r3, i3, c3, m3 = (i3 = v3, c3 = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if ("function" == typeof Proxy) return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (e22) {
          return false;
        }
      }(), function() {
        var e22, t4 = h2(i3);
        if (c3) {
          var n4 = h2(this).constructor;
          e22 = Reflect.construct(t4, arguments, n4);
        } else e22 = t4.apply(this, arguments);
        return function(e23, t5) {
          if (t5 && ("object" === a2(t5) || "function" == typeof t5)) return t5;
          if (void 0 !== t5) throw new TypeError("Derived constructors may only return object or undefined");
          return function(e24) {
            if (void 0 === e24) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e24;
          }(e23);
        }(this, e22);
      });
      function v3(e22) {
        var t4;
        if (function(e23, t5) {
          if (!(e23 instanceof t5)) throw new TypeError("Cannot call a class as a function");
        }(this, v3), (t4 = m3.call(this, e22)).supportsObserver = !e22.scrollPosition && e22.useIntersectionObserver && o2(), t4.supportsObserver) {
          var n4 = e22.threshold;
          t4.observer = function(e23) {
            return d2[e23] = d2[e23] || new IntersectionObserver(p2, { rootMargin: e23 + "px" }), d2[e23];
          }(n4);
        }
        return t4;
      }
      return n3 = v3, r3 = [{ key: "componentDidMount", value: function() {
        this.placeholder && this.observer && (this.placeholder.onVisible = this.props.onVisible, this.observer.observe(this.placeholder)), this.supportsObserver || this.updateVisibility();
      } }, { key: "componentWillUnmount", value: function() {
        this.observer && this.placeholder && this.observer.unobserve(this.placeholder);
      } }, { key: "componentDidUpdate", value: function() {
        this.supportsObserver || this.updateVisibility();
      } }, { key: "getPlaceholderBoundingBox", value: function() {
        var e22 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props.scrollPosition, t4 = this.placeholder.getBoundingClientRect(), n4 = this.placeholder.style, r4 = parseInt(n4.getPropertyValue("margin-left"), 10) || 0, i4 = parseInt(n4.getPropertyValue("margin-top"), 10) || 0;
        return { bottom: e22.y + t4.bottom + i4, left: e22.x + t4.left + r4, right: e22.x + t4.right + r4, top: e22.y + t4.top + i4 };
      } }, { key: "isPlaceholderInViewport", value: function() {
        if ("undefined" == typeof window || !this.placeholder) return false;
        var e22 = this.props, t4 = e22.scrollPosition, n4 = e22.threshold, r4 = this.getPlaceholderBoundingBox(t4), i4 = t4.y + window.innerHeight, o3 = t4.x, a3 = t4.x + window.innerWidth, s3 = t4.y;
        return Boolean(s3 - n4 <= r4.bottom && i4 + n4 >= r4.top && o3 - n4 <= r4.right && a3 + n4 >= r4.left);
      } }, { key: "updateVisibility", value: function() {
        this.isPlaceholderInViewport() && this.props.onVisible();
      } }, { key: "render", value: function() {
        var e22 = this, n4 = this.props, r4 = n4.className, i4 = n4.height, o3 = n4.placeholder, a3 = n4.style, l3 = n4.width;
        if (o3 && "function" != typeof o3.type) return t3().cloneElement(o3, { ref: function(t4) {
          return e22.placeholder = t4;
        } });
        var c4 = function(e23) {
          for (var t4 = 1; t4 < arguments.length; t4++) {
            var n5 = null != arguments[t4] ? arguments[t4] : {};
            t4 % 2 ? s2(Object(n5), true).forEach(function(t5) {
              u2(e23, t5, n5[t5]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e23, Object.getOwnPropertyDescriptors(n5)) : s2(Object(n5)).forEach(function(t5) {
              Object.defineProperty(e23, t5, Object.getOwnPropertyDescriptor(n5, t5));
            });
          }
          return e23;
        }({ display: "inline-block" }, a3);
        return void 0 !== l3 && (c4.width = l3), void 0 !== i4 && (c4.height = i4), t3().createElement("span", { className: r4, ref: function(t4) {
          return e22.placeholder = t4;
        }, style: c4 }, o3);
      } }], r3 && l2(n3.prototype, r3), Object.defineProperty(n3, "prototype", { writable: false }), v3;
    }(t3().Component);
    m2.propTypes = { onVisible: i2.PropTypes.func.isRequired, className: i2.PropTypes.string, height: i2.PropTypes.oneOfType([i2.PropTypes.number, i2.PropTypes.string]), placeholder: i2.PropTypes.element, threshold: i2.PropTypes.number, useIntersectionObserver: i2.PropTypes.bool, scrollPosition: i2.PropTypes.shape({ x: i2.PropTypes.number.isRequired, y: i2.PropTypes.number.isRequired }), width: i2.PropTypes.oneOfType([i2.PropTypes.number, i2.PropTypes.string]) }, m2.defaultProps = { className: "", placeholder: null, threshold: 100, useIntersectionObserver: true };
    const v2 = m2;
    var g2 = n2(296), _2 = n2.n(g2), y2 = n2(96), b2 = n2.n(y2), w2 = function(e21) {
      var t4 = getComputedStyle(e21, null);
      return t4.getPropertyValue("overflow") + t4.getPropertyValue("overflow-y") + t4.getPropertyValue("overflow-x");
    };
    const x2 = function(e21) {
      if (!(e21 instanceof HTMLElement)) return window;
      for (var t4 = e21; t4 && t4 instanceof HTMLElement; ) {
        if (/(scroll|auto)/.test(w2(t4))) return t4;
        t4 = t4.parentNode;
      }
      return window;
    };
    function C2(e21) {
      return C2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e22) {
        return typeof e22;
      } : function(e22) {
        return e22 && "function" == typeof Symbol && e22.constructor === Symbol && e22 !== Symbol.prototype ? "symbol" : typeof e22;
      }, C2(e21);
    }
    var T2 = ["delayMethod", "delayTime"];
    function O2() {
      return O2 = Object.assign ? Object.assign.bind() : function(e21) {
        for (var t4 = 1; t4 < arguments.length; t4++) {
          var n3 = arguments[t4];
          for (var r3 in n3) Object.prototype.hasOwnProperty.call(n3, r3) && (e21[r3] = n3[r3]);
        }
        return e21;
      }, O2.apply(this, arguments);
    }
    function S2(e21, t4) {
      return S2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e22, t5) {
        return e22.__proto__ = t5, e22;
      }, S2(e21, t4);
    }
    function E2(e21, t4) {
      if (t4 && ("object" === C2(t4) || "function" == typeof t4)) return t4;
      if (void 0 !== t4) throw new TypeError("Derived constructors may only return object or undefined");
      return P2(e21);
    }
    function P2(e21) {
      if (void 0 === e21) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e21;
    }
    function k2(e21) {
      return k2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e22) {
        return e22.__proto__ || Object.getPrototypeOf(e22);
      }, k2(e21);
    }
    var M2 = function() {
      return "undefined" == typeof window ? 0 : window.scrollX || window.pageXOffset;
    }, N2 = function() {
      return "undefined" == typeof window ? 0 : window.scrollY || window.pageYOffset;
    };
    const A2 = function(e21) {
      var n3 = function(n4) {
        !function(e22, t4) {
          if ("function" != typeof t4 && null !== t4) throw new TypeError("Super expression must either be null or a function");
          e22.prototype = Object.create(t4 && t4.prototype, { constructor: { value: e22, writable: true, configurable: true } }), Object.defineProperty(e22, "prototype", { writable: false }), t4 && S2(e22, t4);
        }(l3, n4);
        var r3, i3, a3, s3, u3 = (a3 = l3, s3 = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return false;
          if (Reflect.construct.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (e22) {
            return false;
          }
        }(), function() {
          var e22, t4 = k2(a3);
          if (s3) {
            var n5 = k2(this).constructor;
            e22 = Reflect.construct(t4, arguments, n5);
          } else e22 = t4.apply(this, arguments);
          return E2(this, e22);
        });
        function l3(e22) {
          var n5;
          if (function(e23, t4) {
            if (!(e23 instanceof t4)) throw new TypeError("Cannot call a class as a function");
          }(this, l3), (n5 = u3.call(this, e22)).useIntersectionObserver = e22.useIntersectionObserver && o2(), n5.useIntersectionObserver) return E2(n5);
          var r4 = n5.onChangeScroll.bind(P2(n5));
          return "debounce" === e22.delayMethod ? n5.delayedScroll = _2()(r4, e22.delayTime) : "throttle" === e22.delayMethod && (n5.delayedScroll = b2()(r4, e22.delayTime)), n5.state = { scrollPosition: { x: M2(), y: N2() } }, n5.baseComponentRef = t3().createRef(), n5;
        }
        return r3 = l3, (i3 = [{ key: "componentDidMount", value: function() {
          this.addListeners();
        } }, { key: "componentWillUnmount", value: function() {
          this.removeListeners();
        } }, { key: "componentDidUpdate", value: function() {
          "undefined" == typeof window || this.useIntersectionObserver || x2(this.baseComponentRef.current) !== this.scrollElement && (this.removeListeners(), this.addListeners());
        } }, { key: "addListeners", value: function() {
          "undefined" == typeof window || this.useIntersectionObserver || (this.scrollElement = x2(this.baseComponentRef.current), this.scrollElement.addEventListener("scroll", this.delayedScroll, { passive: true }), window.addEventListener("resize", this.delayedScroll, { passive: true }), this.scrollElement !== window && window.addEventListener("scroll", this.delayedScroll, { passive: true }));
        } }, { key: "removeListeners", value: function() {
          "undefined" == typeof window || this.useIntersectionObserver || (this.scrollElement.removeEventListener("scroll", this.delayedScroll), window.removeEventListener("resize", this.delayedScroll), this.scrollElement !== window && window.removeEventListener("scroll", this.delayedScroll));
        } }, { key: "onChangeScroll", value: function() {
          this.useIntersectionObserver || this.setState({ scrollPosition: { x: M2(), y: N2() } });
        } }, { key: "render", value: function() {
          var n5 = this.props, r4 = (n5.delayMethod, n5.delayTime, function(e22, t4) {
            if (null == e22) return {};
            var n6, r5, i5 = function(e23, t5) {
              if (null == e23) return {};
              var n7, r6, i6 = {}, o4 = Object.keys(e23);
              for (r6 = 0; r6 < o4.length; r6++) n7 = o4[r6], t5.indexOf(n7) >= 0 || (i6[n7] = e23[n7]);
              return i6;
            }(e22, t4);
            if (Object.getOwnPropertySymbols) {
              var o3 = Object.getOwnPropertySymbols(e22);
              for (r5 = 0; r5 < o3.length; r5++) n6 = o3[r5], t4.indexOf(n6) >= 0 || Object.prototype.propertyIsEnumerable.call(e22, n6) && (i5[n6] = e22[n6]);
            }
            return i5;
          }(n5, T2)), i4 = this.useIntersectionObserver ? null : this.state.scrollPosition;
          return t3().createElement(e21, O2({ forwardRef: this.baseComponentRef, scrollPosition: i4 }, r4));
        } }]) && function(e22, t4) {
          for (var n5 = 0; n5 < t4.length; n5++) {
            var r4 = t4[n5];
            r4.enumerable = r4.enumerable || false, r4.configurable = true, "value" in r4 && (r4.writable = true), Object.defineProperty(e22, (i4 = function(e23) {
              if ("object" !== C2(e23) || null === e23) return e23;
              var t5 = e23[Symbol.toPrimitive];
              if (void 0 !== t5) {
                var n6 = t5.call(e23, "string");
                if ("object" !== C2(n6)) return n6;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e23);
            }(r4.key), "symbol" === C2(i4) ? i4 : String(i4)), r4);
          }
          var i4;
        }(r3.prototype, i3), Object.defineProperty(r3, "prototype", { writable: false }), l3;
      }(t3().Component);
      return n3.propTypes = { delayMethod: i2.PropTypes.oneOf(["debounce", "throttle"]), delayTime: i2.PropTypes.number, useIntersectionObserver: i2.PropTypes.bool }, n3.defaultProps = { delayMethod: "throttle", delayTime: 300, useIntersectionObserver: true }, n3;
    };
    function R2(e21) {
      return R2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e22) {
        return typeof e22;
      } : function(e22) {
        return e22 && "function" == typeof Symbol && e22.constructor === Symbol && e22 !== Symbol.prototype ? "symbol" : typeof e22;
      }, R2(e21);
    }
    function L2(e21, t4) {
      return L2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e22, t5) {
        return e22.__proto__ = t5, e22;
      }, L2(e21, t4);
    }
    function j2(e21) {
      return j2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e22) {
        return e22.__proto__ || Object.getPrototypeOf(e22);
      }, j2(e21);
    }
    var D2 = function(e21) {
      !function(e22, t4) {
        if ("function" != typeof t4 && null !== t4) throw new TypeError("Super expression must either be null or a function");
        e22.prototype = Object.create(t4 && t4.prototype, { constructor: { value: e22, writable: true, configurable: true } }), Object.defineProperty(e22, "prototype", { writable: false }), t4 && L2(e22, t4);
      }(s3, e21);
      var n3, r3, i3, o3, a3 = (i3 = s3, o3 = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if ("function" == typeof Proxy) return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (e22) {
          return false;
        }
      }(), function() {
        var e22, t4 = j2(i3);
        if (o3) {
          var n4 = j2(this).constructor;
          e22 = Reflect.construct(t4, arguments, n4);
        } else e22 = t4.apply(this, arguments);
        return function(e23, t5) {
          if (t5 && ("object" === R2(t5) || "function" == typeof t5)) return t5;
          if (void 0 !== t5) throw new TypeError("Derived constructors may only return object or undefined");
          return function(e24) {
            if (void 0 === e24) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e24;
          }(e23);
        }(this, e22);
      });
      function s3(e22) {
        return function(e23, t4) {
          if (!(e23 instanceof t4)) throw new TypeError("Cannot call a class as a function");
        }(this, s3), a3.call(this, e22);
      }
      return n3 = s3, (r3 = [{ key: "render", value: function() {
        return t3().createElement(v2, this.props);
      } }]) && function(e22, t4) {
        for (var n4 = 0; n4 < t4.length; n4++) {
          var r4 = t4[n4];
          r4.enumerable = r4.enumerable || false, r4.configurable = true, "value" in r4 && (r4.writable = true), Object.defineProperty(e22, (i4 = function(e23) {
            if ("object" !== R2(e23) || null === e23) return e23;
            var t5 = e23[Symbol.toPrimitive];
            if (void 0 !== t5) {
              var n5 = t5.call(e23, "string");
              if ("object" !== R2(n5)) return n5;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e23);
          }(r4.key), "symbol" === R2(i4) ? i4 : String(i4)), r4);
        }
        var i4;
      }(n3.prototype, r3), Object.defineProperty(n3, "prototype", { writable: false }), s3;
    }(t3().Component);
    const z2 = A2(D2);
    function I2(e21) {
      return I2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e22) {
        return typeof e22;
      } : function(e22) {
        return e22 && "function" == typeof Symbol && e22.constructor === Symbol && e22 !== Symbol.prototype ? "symbol" : typeof e22;
      }, I2(e21);
    }
    function B2(e21, t4) {
      return B2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e22, t5) {
        return e22.__proto__ = t5, e22;
      }, B2(e21, t4);
    }
    function F2(e21) {
      if (void 0 === e21) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e21;
    }
    function V2(e21) {
      return V2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e22) {
        return e22.__proto__ || Object.getPrototypeOf(e22);
      }, V2(e21);
    }
    var H2 = function(e21) {
      !function(e22, t4) {
        if ("function" != typeof t4 && null !== t4) throw new TypeError("Super expression must either be null or a function");
        e22.prototype = Object.create(t4 && t4.prototype, { constructor: { value: e22, writable: true, configurable: true } }), Object.defineProperty(e22, "prototype", { writable: false }), t4 && B2(e22, t4);
      }(u3, e21);
      var n3, r3, i3, a3, s3 = (i3 = u3, a3 = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if ("function" == typeof Proxy) return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (e22) {
          return false;
        }
      }(), function() {
        var e22, t4 = V2(i3);
        if (a3) {
          var n4 = V2(this).constructor;
          e22 = Reflect.construct(t4, arguments, n4);
        } else e22 = t4.apply(this, arguments);
        return function(e23, t5) {
          if (t5 && ("object" === I2(t5) || "function" == typeof t5)) return t5;
          if (void 0 !== t5) throw new TypeError("Derived constructors may only return object or undefined");
          return F2(e23);
        }(this, e22);
      });
      function u3(e22) {
        var t4;
        !function(e23, t5) {
          if (!(e23 instanceof t5)) throw new TypeError("Cannot call a class as a function");
        }(this, u3), t4 = s3.call(this, e22);
        var n4 = e22.afterLoad, r4 = e22.beforeLoad, i4 = e22.scrollPosition, o3 = e22.visibleByDefault;
        return t4.state = { visible: o3 }, o3 && (r4(), n4()), t4.onVisible = t4.onVisible.bind(F2(t4)), t4.isScrollTracked = Boolean(i4 && Number.isFinite(i4.x) && i4.x >= 0 && Number.isFinite(i4.y) && i4.y >= 0), t4;
      }
      return n3 = u3, (r3 = [{ key: "componentDidUpdate", value: function(e22, t4) {
        t4.visible !== this.state.visible && this.props.afterLoad();
      } }, { key: "onVisible", value: function() {
        this.props.beforeLoad(), this.setState({ visible: true });
      } }, { key: "render", value: function() {
        if (this.state.visible) return this.props.children;
        var e22 = this.props, n4 = e22.className, r4 = e22.delayMethod, i4 = e22.delayTime, a4 = e22.height, s4 = e22.placeholder, u4 = e22.scrollPosition, l3 = e22.style, c3 = e22.threshold, f3 = e22.useIntersectionObserver, h3 = e22.width;
        return this.isScrollTracked || f3 && o2() ? t3().createElement(v2, { className: n4, height: a4, onVisible: this.onVisible, placeholder: s4, scrollPosition: u4, style: l3, threshold: c3, useIntersectionObserver: f3, width: h3 }) : t3().createElement(z2, { className: n4, delayMethod: r4, delayTime: i4, height: a4, onVisible: this.onVisible, placeholder: s4, style: l3, threshold: c3, width: h3 });
      } }]) && function(e22, t4) {
        for (var n4 = 0; n4 < t4.length; n4++) {
          var r4 = t4[n4];
          r4.enumerable = r4.enumerable || false, r4.configurable = true, "value" in r4 && (r4.writable = true), Object.defineProperty(e22, (i4 = function(e23) {
            if ("object" !== I2(e23) || null === e23) return e23;
            var t5 = e23[Symbol.toPrimitive];
            if (void 0 !== t5) {
              var n5 = t5.call(e23, "string");
              if ("object" !== I2(n5)) return n5;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e23);
          }(r4.key), "symbol" === I2(i4) ? i4 : String(i4)), r4);
        }
        var i4;
      }(n3.prototype, r3), Object.defineProperty(n3, "prototype", { writable: false }), u3;
    }(t3().Component);
    H2.propTypes = { afterLoad: i2.PropTypes.func, beforeLoad: i2.PropTypes.func, useIntersectionObserver: i2.PropTypes.bool, visibleByDefault: i2.PropTypes.bool }, H2.defaultProps = { afterLoad: function() {
      return {};
    }, beforeLoad: function() {
      return {};
    }, useIntersectionObserver: true, visibleByDefault: false };
    const U2 = H2;
    function W2(e21) {
      return W2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e22) {
        return typeof e22;
      } : function(e22) {
        return e22 && "function" == typeof Symbol && e22.constructor === Symbol && e22 !== Symbol.prototype ? "symbol" : typeof e22;
      }, W2(e21);
    }
    var $2 = ["afterLoad", "beforeLoad", "delayMethod", "delayTime", "effect", "placeholder", "placeholderSrc", "scrollPosition", "threshold", "useIntersectionObserver", "visibleByDefault", "wrapperClassName", "wrapperProps"];
    function Y2(e21, t4) {
      var n3 = Object.keys(e21);
      if (Object.getOwnPropertySymbols) {
        var r3 = Object.getOwnPropertySymbols(e21);
        t4 && (r3 = r3.filter(function(t5) {
          return Object.getOwnPropertyDescriptor(e21, t5).enumerable;
        })), n3.push.apply(n3, r3);
      }
      return n3;
    }
    function X2(e21) {
      for (var t4 = 1; t4 < arguments.length; t4++) {
        var n3 = null != arguments[t4] ? arguments[t4] : {};
        t4 % 2 ? Y2(Object(n3), true).forEach(function(t5) {
          q2(e21, t5, n3[t5]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e21, Object.getOwnPropertyDescriptors(n3)) : Y2(Object(n3)).forEach(function(t5) {
          Object.defineProperty(e21, t5, Object.getOwnPropertyDescriptor(n3, t5));
        });
      }
      return e21;
    }
    function q2(e21, t4, n3) {
      return (t4 = G2(t4)) in e21 ? Object.defineProperty(e21, t4, { value: n3, enumerable: true, configurable: true, writable: true }) : e21[t4] = n3, e21;
    }
    function Z2() {
      return Z2 = Object.assign ? Object.assign.bind() : function(e21) {
        for (var t4 = 1; t4 < arguments.length; t4++) {
          var n3 = arguments[t4];
          for (var r3 in n3) Object.prototype.hasOwnProperty.call(n3, r3) && (e21[r3] = n3[r3]);
        }
        return e21;
      }, Z2.apply(this, arguments);
    }
    function G2(e21) {
      var t4 = function(e22) {
        if ("object" !== W2(e22) || null === e22) return e22;
        var t5 = e22[Symbol.toPrimitive];
        if (void 0 !== t5) {
          var n3 = t5.call(e22, "string");
          if ("object" !== W2(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e22);
      }(e21);
      return "symbol" === W2(t4) ? t4 : String(t4);
    }
    function K2(e21, t4) {
      return K2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e22, t5) {
        return e22.__proto__ = t5, e22;
      }, K2(e21, t4);
    }
    function J2(e21) {
      return J2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e22) {
        return e22.__proto__ || Object.getPrototypeOf(e22);
      }, J2(e21);
    }
    var Q2 = function(e21) {
      !function(e22, t4) {
        if ("function" != typeof t4 && null !== t4) throw new TypeError("Super expression must either be null or a function");
        e22.prototype = Object.create(t4 && t4.prototype, { constructor: { value: e22, writable: true, configurable: true } }), Object.defineProperty(e22, "prototype", { writable: false }), t4 && K2(e22, t4);
      }(s3, e21);
      var n3, r3, i3, o3, a3 = (i3 = s3, o3 = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if ("function" == typeof Proxy) return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (e22) {
          return false;
        }
      }(), function() {
        var e22, t4 = J2(i3);
        if (o3) {
          var n4 = J2(this).constructor;
          e22 = Reflect.construct(t4, arguments, n4);
        } else e22 = t4.apply(this, arguments);
        return function(e23, t5) {
          if (t5 && ("object" === W2(t5) || "function" == typeof t5)) return t5;
          if (void 0 !== t5) throw new TypeError("Derived constructors may only return object or undefined");
          return function(e24) {
            if (void 0 === e24) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e24;
          }(e23);
        }(this, e22);
      });
      function s3(e22) {
        var t4;
        return function(e23, t5) {
          if (!(e23 instanceof t5)) throw new TypeError("Cannot call a class as a function");
        }(this, s3), (t4 = a3.call(this, e22)).state = { loaded: false }, t4;
      }
      return n3 = s3, (r3 = [{ key: "onImageLoad", value: function() {
        var e22 = this;
        return this.state.loaded ? null : function(t4) {
          e22.props.onLoad(t4), e22.props.afterLoad(), e22.setState({ loaded: true });
        };
      } }, { key: "getImg", value: function() {
        var e22 = this.props, n4 = (e22.afterLoad, e22.beforeLoad, e22.delayMethod, e22.delayTime, e22.effect, e22.placeholder, e22.placeholderSrc, e22.scrollPosition, e22.threshold, e22.useIntersectionObserver, e22.visibleByDefault, e22.wrapperClassName, e22.wrapperProps, function(e23, t4) {
          if (null == e23) return {};
          var n5, r4, i4 = function(e24, t5) {
            if (null == e24) return {};
            var n6, r5, i5 = {}, o5 = Object.keys(e24);
            for (r5 = 0; r5 < o5.length; r5++) n6 = o5[r5], t5.indexOf(n6) >= 0 || (i5[n6] = e24[n6]);
            return i5;
          }(e23, t4);
          if (Object.getOwnPropertySymbols) {
            var o4 = Object.getOwnPropertySymbols(e23);
            for (r4 = 0; r4 < o4.length; r4++) n5 = o4[r4], t4.indexOf(n5) >= 0 || Object.prototype.propertyIsEnumerable.call(e23, n5) && (i4[n5] = e23[n5]);
          }
          return i4;
        }(e22, $2));
        return t3().createElement("img", Z2({}, n4, { onLoad: this.onImageLoad() }));
      } }, { key: "getLazyLoadImage", value: function() {
        var e22 = this.props, n4 = e22.beforeLoad, r4 = e22.className, i4 = e22.delayMethod, o4 = e22.delayTime, a4 = e22.height, s4 = e22.placeholder, u3 = e22.scrollPosition, l3 = e22.style, c3 = e22.threshold, f3 = e22.useIntersectionObserver, h3 = e22.visibleByDefault, p3 = e22.width;
        return t3().createElement(U2, { beforeLoad: n4, className: r4, delayMethod: i4, delayTime: o4, height: a4, placeholder: s4, scrollPosition: u3, style: l3, threshold: c3, useIntersectionObserver: f3, visibleByDefault: h3, width: p3 }, this.getImg());
      } }, { key: "getWrappedLazyLoadImage", value: function(e22) {
        var n4 = this.props, r4 = n4.effect, i4 = n4.height, o4 = n4.placeholderSrc, a4 = n4.width, s4 = n4.wrapperClassName, u3 = n4.wrapperProps, l3 = this.state.loaded, c3 = l3 ? " lazy-load-image-loaded" : "", f3 = l3 || !o4 ? {} : { backgroundImage: "url(".concat(o4, ")"), backgroundSize: "100% 100%" };
        return t3().createElement("span", Z2({ className: s4 + " lazy-load-image-background " + r4 + c3, style: X2(X2({}, f3), {}, { color: "transparent", display: "inline-block", height: i4, width: a4 }) }, u3), e22);
      } }, { key: "render", value: function() {
        var e22 = this.props, t4 = e22.effect, n4 = e22.placeholderSrc, r4 = e22.visibleByDefault, i4 = e22.wrapperClassName, o4 = e22.wrapperProps, a4 = this.getLazyLoadImage();
        return (t4 || n4) && !r4 || i4 || o4 ? this.getWrappedLazyLoadImage(a4) : a4;
      } }]) && function(e22, t4) {
        for (var n4 = 0; n4 < t4.length; n4++) {
          var r4 = t4[n4];
          r4.enumerable = r4.enumerable || false, r4.configurable = true, "value" in r4 && (r4.writable = true), Object.defineProperty(e22, G2(r4.key), r4);
        }
      }(n3.prototype, r3), Object.defineProperty(n3, "prototype", { writable: false }), s3;
    }(t3().Component);
    Q2.propTypes = { onLoad: i2.PropTypes.func, afterLoad: i2.PropTypes.func, beforeLoad: i2.PropTypes.func, delayMethod: i2.PropTypes.string, delayTime: i2.PropTypes.number, effect: i2.PropTypes.string, placeholderSrc: i2.PropTypes.string, threshold: i2.PropTypes.number, useIntersectionObserver: i2.PropTypes.bool, visibleByDefault: i2.PropTypes.bool, wrapperClassName: i2.PropTypes.string, wrapperProps: i2.PropTypes.object }, Q2.defaultProps = { onLoad: function() {
    }, afterLoad: function() {
      return {};
    }, beforeLoad: function() {
      return {};
    }, delayMethod: "throttle", delayTime: 300, effect: "", placeholderSrc: null, threshold: 100, useIntersectionObserver: true, visibleByDefault: false, wrapperClassName: "" };
    const ee2 = Q2;
  })(), Ya.exports = r2;
})()), Ya.exports);
function Ga({ el: e19 }) {
  return $("li", { children: [$("div", { className: "placeholder-1", children: $(Za.LazyLoadImage, { src: e19.img, width: "100%", height: "127px", effect: "opacity", alt: "project-image" }) }), $("span", { className: "up-case font-reg text-white", children: e19.date }), $("h5", { children: e19.title }), $("p", { className: "to-middle text-white capitalize", children: e19.description })] });
}
const Ka = [{ img: Ua, title: "How the industrial zone turned into a colorful microdistrict", date: "25 september ", description: "We offer innovative engineering solutions that ensure the successful achievement of the client's goals. Because engineering is a result-oriented strategy in action." }, { img: "/masbo_website/assets/img-11-CrLJoGSl.jpg", title: "How the industrial zone turned into a colorful microdistrict", date: "25 september ", description: "We offer innovative engineering solutions that ensure the successful achievement of the client's goals. Because engineering is a result-oriented strategy in action." }, { img: "/masbo_website/assets/img-12-CMpzjhR5.jpg", title: "How the industrial zone turned into a colorful microdistrict", date: "25 september ", description: "We offer innovative engineering solutions that ensure the successful achievement of the client's goals. Because engineering is a result-oriented strategy in action." }];
function Ja() {
  return Ia((e19) => {
    const t2 = Ca.utils.toArray(".projects-list .placeholder-1");
    Ca.set(t2, { clipPath: "inset(0 100% 0 0)" }), Ca.to(t2, { ease: "none", clipPath: "inset(0)", scrollTrigger: { trigger: ".projects-list", start: "left 30%", toggleActions: "play none none none", ...e19 } });
  }), $("ul", { className: "data row gap-85", children: Ka.map((e19, t2) => $(Ga, { el: e19 }, t2)) });
}
function Qa() {
  return $("section", { className: "projects-list", children: $("div", { className: "row center-y full-height", children: $("div", { className: "container", children: [$("div", { className: "text-wrapper row gap-50", children: [$("h1", { className: "capitalize", children: ["how we are", $("br", {}), " working"] }), $("div", { children: [$("p", { className: "to-middle text-white capitalize", children: "Arhitecture modern technology Collaboration is a priority at MasBo. We believe that the best result can only be achieved through constant dialogue between all stakeholders. Our practice brings together experts in the field of architecture, design, engineering and construction, to solve any tasks assigned to us." }), $(Ha, { type: "button", children: "learn more" })] })] }), $(Ja, {})] }) }) });
}
const es = "/masbo_website/assets/img-16-BcCvOyYk.jpg", ts = "/masbo_website/assets/img-17-wiKgS99T.jpg", ns = "data:image/svg+xml,%3csvg%20width='64'%20height='68'%20viewBox='0%200%2064%2068'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.9167%2012.5556L1%2019.7778V42.8889M13.9167%2012.5556L38.4583%2019.7778M13.9167%2012.5556V35.6667M38.4583%2019.7778V9.66667L50.0833%201L63%209.66667V22.6667M38.4583%2019.7778V22.6667M38.4583%2047.2222L50.0833%2039.2778L63%2047.2222V22.6667M38.4583%2047.2222V66L13.9167%2058.0556M38.4583%2047.2222V42.8889M13.9167%2058.0556L1%2066V42.8889M13.9167%2058.0556V35.6667M1%2042.8889L13.9167%2035.6667M13.9167%2035.6667L38.4583%2042.8889M38.4583%2022.6667L50.0833%2014L63%2022.6667M38.4583%2022.6667V42.8889'%20stroke='white'%20stroke-width='1.5'/%3e%3c/svg%3e", rs = "data:image/svg+xml,%3csvg%20width='56'%20height='68'%20viewBox='0%200%2056%2068'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%2067L0.999998%2014.4748L23.6667%202L23.6667%2066.3367L12.3333%2066.3367L12.3333%2036.798L33.6667%2024.9798L55%2036.798L55%2056.4949L33.6667%2056.4949L33.6667%2066.3367L44.3333%2066.3367L44.3333%2030.8889'%20stroke='white'%20stroke-width='1.5'/%3e%3c/svg%3e", is = "data:image/svg+xml,%3csvg%20width='42'%20height='68'%20viewBox='0%200%2042%2068'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.6667%2029.0833V13.5104L1%202V56.1667L23.6667%2067M23.6667%2029.0833L41%2037.2083M23.6667%2029.0833V43.9792M41%2037.2083V59.5521L23.6667%2067M41%2037.2083L23.6667%2043.9792M23.6667%2067V43.9792'%20stroke='white'%20stroke-width='1.5'/%3e%3c/svg%3e", os = "data:image/svg+xml,%3csvg%20width='64'%20height='63'%20viewBox='0%200%2064%2063'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.0261%202L1%2011.732V61L22.0261%2051.268M22.0261%202L42.513%2012.3402M22.0261%202V51.268M42.513%2012.3402L63%202V51.5722L42.513%2061M42.513%2012.3402V61M42.513%2061L22.0261%2051.268'%20stroke='white'%20stroke-width='1.5'/%3e%3c/svg%3e", as = "data:image/svg+xml,%3csvg%20width='65'%20height='65'%20viewBox='0%200%2065%2065'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M51.266%2031.5053L64%2036.8105V64H51.266M51.266%2031.5053V22.2211L38.5319%2016.9158M51.266%2031.5053L38.5319%2036.8105M51.266%2031.5053V64M38.5319%2016.9158V6.96842L25.7979%201M38.5319%2016.9158L25.7979%2022.2211M38.5319%2016.9158V36.8105M25.7979%201L13.0638%206.96842V40.7895M25.7979%201V22.2211M13.0638%2040.7895L1%2046.0947V64H25.7979M13.0638%2040.7895L25.7979%2046.0947M25.7979%2064H38.5319M25.7979%2064V46.0947M25.7979%2022.2211V46.0947M38.5319%2064V36.8105M38.5319%2064H51.266'%20stroke='white'%20stroke-width='1.5'/%3e%3c/svg%3e";
function ss({ img: e19, icon: t2, title: n2, className: r2 }) {
  return $("div", { className: r2, children: [$(Za.LazyLoadImage, { src: e19, width: "100%", height: "100%", effect: "opacity", alt: n2 }), $("div", { className: "column center-y center-x gap-10", children: [$("img", { className: "icon", alt: "icon", src: t2 }), $("h5", { children: n2 })] })] });
}
function us() {
  return $("div", { className: "container", children: $("div", { className: "row center-x center-y full-height", children: $("div", { className: "text-wrapper row gap-50", children: [$("h1", { className: "capitalize", children: ["What we ", $("br", {}), " engage?"] }), $("div", { children: [$("p", { className: "to-middle text-white capitalize", children: "Our portfolio is a long-term experience, a variety of complex projects and the implementation of innovative solutions. We approach each client and his project as a unique challenge that we accept. Responsibly performing our work, we will confidently bring it to life." }), $(Ha, { arrow: true, type: "button", children: "Learn more" })] })] }) }) });
}
const ls = [{ img: "/masbo_website/assets/img-13-gvxAk8Ki.jpg", icon: os, title: "Interior", className: "placeholder-2" }, { img: "/masbo_website/assets/img-14-D2ut6RlI.jpg", icon: ns, title: "Architecture", className: "placeholder-1" }, { img: "/masbo_website/assets/img-15-DrmZ1q9_.jpg", icon: rs, title: "Engineering", className: "placeholder-2" }, { img: es, icon: is, title: "Construction", className: "placeholder-1" }, { img: ts, icon: "data:image/svg+xml,%3csvg%20width='80'%20height='58'%20viewBox='0%200%2080%2058'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M28.6923%201L1%2021.2062V57H12.0769M28.6923%201L55.1539%2021.7835M28.6923%201V57M55.1539%2021.7835V57M55.1539%2021.7835H12.0769V57M55.1539%2057H71.1539V40.2577M55.1539%2057H28.6923M71.1539%2040.2577V40.2577C66.1769%2039.6559%2062.9543%2034.7008%2064.4224%2029.9073L71.1539%207.92784L78.0143%2029.6498C79.5636%2034.5552%2076.2632%2039.6586%2071.1539%2040.2577V40.2577ZM28.6923%2057H12.0769'%20stroke='white'%20stroke-width='1.5'/%3e%3c/svg%3e", title: "Landscape Design", className: "placeholder-2" }, { img: Ua, icon: as, title: "Investment projects", className: "placeholder-1" }];
function cs() {
  return $("section", { className: "services", children: [$("div", { className: "row", children: ls.slice(0, 4).map((e19, t2) => $(ss, { ...e19 }, t2)) }), $("div", { className: "row", children: [$(ss, { ...ls[4] }), $(us, {}), $(ss, { ...ls[5] })] })] });
}
const fs = ({ src: e19, alt: t2, className: n2 }) => $("div", { className: n2, children: $(Za.LazyLoadImage, { src: e19, width: "100%", height: "100%", effect: "opacity", alt: t2 }) }), hs = ({ icon: e19, title: t2, text: n2 }) => $("div", { className: "column center-y center-x gap-10", children: [$("img", { className: "icon", alt: "icon", src: e19 }), $("h5", { children: t2 }), $("p", { className: "to-middle text-center text-white capitalize", dangerouslySetInnerHTML: { __html: n2 } })] });
function ps() {
  return $("section", { className: "investment-projects", children: $("div", { className: "row full-height", children: [$("div", { className: "section-block", children: [$(fs, { src: ts, alt: "img-17", className: "placeholder-1 full-height" }), $("div", { className: "description", children: [$("h1", { className: "capitalize", children: ["Investment", $("br", {}), " projects"] }), $("p", { className: "to-middle text-white capitalize", children: "Our portfolio is a long-term experience, a variety of complex projects and the implementation of innovative solutions. We approach each client and his project as a unique challenge that we accept. Responsibly performing our work, we will confidently bring it to life." }), $(Ha, { arrow: false, type: "button", children: "Order The Project" })] })] }), $("div", { className: "section-block", children: [$(fs, { src: "/masbo_website/assets/img-19-C2NWmUJ9.jpg", alt: "img-19", className: "placeholder-1" }), $(hs, { icon: as, title: "Investment projects", text: "MasBo is an architectural group working in <br/> the field of architecture and urban planning." }), $(fs, { src: "/masbo_website/assets/img-20-CzdFevMc.jpg", alt: "img-20", className: "placeholder-2" })] }), $("div", { className: "section-block", children: [$(fs, { src: "/masbo_website/assets/img-18-Cerp6Fko.jpg", alt: "img-18", className: "placeholder-1" }), $(fs, { src: es, alt: "img-16", className: "placeholder-2" })] })] }) });
}
const ds = [{ num: 123, title: "successful projects" }, { num: 1235, title: "people who work with us" }, { num: 23, title: "urban planning projects" }, { num: 1012, title: "Modern interiors " }];
function ms() {
  return Ia((e19) => {
    Ca.utils.toArray("li h2").forEach((t2, n2) => {
      Ca.to(t2, { innerText: ds[n2].num, duration: 2, ease: "power1.out", snap: { innerText: 1 }, scrollTrigger: { trigger: ".about .container", start: "top 20%", toggleActions: "play none none none", scroller: e19.scroller } });
    });
  }), $("ul", { className: "row wrap gap-150", children: ds.map((e19, t2) => $("li", { children: [$("h2", { children: "0" }), $("span", { className: "fs-14 text-white capitalize", children: e19.title })] }, t2)) });
}
function vs() {
  const { width: e19, height: t2 } = Ia();
  return $("section", { className: "about", children: $("div", { className: "container column end-x", children: [$("div", { className: "row center-y", children: [$("div", { className: "text-wrapper  center-y row gap-50", children: [$("h1", { className: "capitalize", children: ["from idea", $("br", {}), " to life"] }), $("p", { className: "to-small text-white capitalize", children: ["Arhitecture modern technology", $("br", {}), " MasBo is an architectural group working in the field of", $("br", {}), " architecture and urban planning. For our customers, we are known", $("br", {}), "as a reliable partner with high standards of quality and", $("br", {}), " responsibility."] })] }), $("div", { className: "play self-center-y center-gr", children: $("img", { className: "icon", src: "data:image/svg+xml,%3csvg%20width='16'%20height='18'%20viewBox='0%200%2016%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.8658%205.99832L4.80958%200.458317C4.31953%200.156477%203.76332%20-0.00164499%203.19744%201.29041e-05C2.63157%200.0016708%202.07618%200.163049%201.5877%200.467756C1.09921%200.772464%200.695033%201.20964%200.416212%201.73489C0.137391%202.26014%20-0.00613872%202.85475%200.000201292%203.45832V14.5783C0.000201292%2015.4854%200.338002%2016.3552%200.93929%2016.9966C1.54058%2017.638%202.3561%2017.9983%203.20645%2017.9983C3.76936%2017.9973%204.32216%2017.8387%204.80958%2017.5383L13.8658%2011.9983C14.3524%2011.6979%2014.7564%2011.2663%2015.0373%2010.7468C15.3182%2010.2272%2015.466%209.63804%2015.466%209.03832C15.466%208.43859%2015.3182%207.84941%2015.0373%207.32988C14.7564%206.81035%2014.3524%206.37873%2013.8658%206.07832V5.99832ZM12.9283%2010.1883L3.87208%2015.8083C3.66909%2015.931%203.43976%2015.9955%203.20645%2015.9955C2.97314%2015.9955%202.74381%2015.931%202.54083%2015.8083C2.33842%2015.6837%202.17034%2015.5044%202.0535%2015.2885C1.93665%2015.0725%201.87516%2014.8276%201.8752%2014.5783V3.41832C1.87516%203.16901%201.93665%202.92409%202.0535%202.70818C2.17034%202.49226%202.33842%202.31297%202.54083%202.18832C2.74464%202.06747%202.97329%202.00221%203.20645%201.99832C3.43945%202.00342%203.66783%202.06861%203.87208%202.18832L12.9283%207.76832C13.1308%207.89292%2013.299%208.07219%2013.4159%208.28811C13.5328%208.50402%2013.5943%208.74897%2013.5943%208.99832C13.5943%209.24766%2013.5328%209.49261%2013.4159%209.70853C13.299%209.92445%2013.1308%2010.1037%2012.9283%2010.2283V10.1883Z'%20fill='%231C6BCF'/%3e%3c/svg%3e", alt: "arrow" }) })] }), $(ms, {}), e19 && t2 && $(Rt, {})] }) });
}
function gs() {
  return $("section", { className: "architecture", children: $("div", { className: "row full-height", children: [$("div", { className: "section-block full-height", children: [$(hs, { icon: ns, title: "Architecture", text: "MasBo is an architectural group working in  <br/> the field of architecture and urban planning." }), $(hs, { icon: rs, title: "Engineering", text: "Modern solutions for the modern city." }), $(fs, { src: "/masbo_website/assets/img-1-BNwLU0Tj.jpg", alt: "img-1", className: "placeholder-2" })] }), $("div", { className: "section-block full-height", children: [$(fs, { src: Ua, alt: "img-2", className: "placeholder-1 full-height" }), $("div", { className: "description", children: [$("h1", { className: "capitalize", children: ["innovative ", $("br", {}), " engineering &", $("br", {}), " architecture", $("br", {}), " solutions"] }), $("p", { className: "to-middle text-white capitalize", children: "We offer innovative engineering solutions that ensure the successful achievement of the client's goals. Because engineering is a result-oriented strategy in action. An individual approach and attention to detail in the development of engineering systems allows us to obtain reliable, verified solutions. Simply put, we think over the operation of facilities based on practical experience and scientific knowledge." }), $(Ha, { arrow: false, type: "button", children: "Order The Project" })] })] }), $("div", { className: "section-block full-height", children: [$(fs, { src: "/masbo_website/assets/img-3-B4znrZ0Z.jpg", alt: "img-3", className: "placeholder-2" }), $(fs, { src: "/masbo_website/assets/img-4-C-U5Vtyg.jpg", alt: "img-4", className: "placeholder-1" })] })] }) });
}
function _s() {
  return $("section", { className: "construction", children: $("div", { className: "row full-height", children: [$("div", { className: "section-block", children: [$(fs, { src: "/masbo_website/assets/img-5-BIAjnhja.jpg", alt: "img-5", className: "placeholder-1" }), $(hs, { icon: is, title: "Construction", text: "MasBo is an architectural group working in <br/> the field of architecture and urban planning." })] }), $("div", { className: "section-block full-height", children: [$(fs, { src: "/masbo_website/assets/img-6-Bbs3LRR4.jpg", alt: "img-6", className: "placeholder-2 full-height" }), $("div", { className: "description", children: [$("h1", { className: "capitalize", children: ["innovative ", $("br", {}), " engineering", $("br", {}), " solutions"] }), $("p", { className: "to-middle text-white capitalize", children: "We offer innovative engineering solutions that ensure the successful achievement of the client's goals. Because engineering is a result-oriented strategy in action. An individual approach and attention to detail in the development of engineering systems allows us to obtain reliable, verified solutions. Simply put, we think over the operation of facilities based on practical experience and scientific knowledge." }), $(Ha, { arrow: false, type: "button", children: "Order The Project" })] })] }), $("div", { className: "section-block", children: [$(hs, { icon: os, title: "Interior", text: "MasBo is an architectural group working in <br/> the field of architecture and urban planning." }), $(fs, { src: "/masbo_website/assets/img-7-BmamNXji.jpg", alt: "img-7", className: "placeholder-2" }), $(fs, { src: "/masbo_website/assets/img-8-BtYqCmbC.jpg", alt: "img-8", className: "placeholder-1" })] }), $("div", { className: "section-block full-height ", children: [$(fs, { src: "/masbo_website/assets/img-9-BxUptN8g.jpg", alt: "img-9", className: "placeholder-1 full-height" }), $("div", { className: "description", children: [$("h1", { className: "capitalize", children: ["interior & ", $("br", {}), " landscape", $("br", {}), " design"] }), $("p", { className: "to-middle text-white capitalize", children: "We create a comfortable space for living and working, entertainment and education. High-quality and thoughtful design not only pleases the eye, but creates a healthy environment for a comfortable and intuitive use of the room." }), $(Ha, { arrow: false, type: "button", children: "Order The Project" })] })] }), $("div", { className: "section-block", children: [$(fs, { src: "/masbo_website/assets/img-10-CBSuR36R.jpg", alt: "img-10", className: "placeholder-2" }), $(hs, { icon: ns, title: "Landscape Design", text: "MasBo is an architectural group working in <br/> the field of architecture and urban planning." })] })] }) });
}
const ys = ["/masbo_website/assets/team-circle-DaJto7iH.jpg", "/masbo_website/assets/team-circle-1-C89-BzF6.jpg", "/masbo_website/assets/team-circle-2-B_7NMk-k.jpg", "/masbo_website/assets/team-circle-3-BSRnSoOJ.jpg", "/masbo_website/assets/team-circle-4-B3Mfvny-.jpg"];
function bs() {
  const e19 = ce(null), t2 = "Meeting our team".split("").map((e20, t3) => $("span", { children: " " === e20 ? " " : e20 }, t3));
  return Ia((t3) => {
    const n2 = Ca.utils.toArray(".team li"), r2 = e19.current.querySelectorAll("span");
    Ca.set(r2, { opacity: 0, y: 20 }), Ca.to(r2, { opacity: 1, y: 0, delay: 0.3, duration: 3, stagger: 0.05, ease: "expo.out", scrollTrigger: { trigger: ".team", start: "left 40%", toggleActions: "play none none none", ...t3 } }), Ca.set(n2, { opacity: 0, y: 25 }), Ca.to(n2, { opacity: 1, y: 0, delay: 0.3, duration: 3, stagger: 0.09, ease: "expo.out", scrollTrigger: { trigger: ".team", start: "left 40%", toggleActions: "play none none none", ...t3 } });
  }), $(w, { children: [$("h1", { ref: e19, children: t2 }), $("ul", { className: "row", children: ys.map((e20, t3) => $("li", { children: $("img", { src: e20, alt: `team-img-${t3 + 1}` }) }, t3)) })] });
}
function ws() {
  return $("section", { className: "team", children: $("div", { className: "container full-height", children: $("div", { className: "column center-y center-x gap-25 full-height", children: [$("span", { className: "fs-14 text-white text-center up-case", children: "confidently to bring idea to life." }), $(bs, {}), $("p", { className: "to-middle text-white text-center capitalize", children: "MasBo is an architectural group working in the field of architecture and urban planning. The company was founded in 2006. We offer a full range of services from interior design, individual cottages to the design and construction of residential complexes." }), $(Ha, { arrow: true, children: "Let’s work together" })] }) }) });
}
function xs() {
  return $("section", { id: "home-scroll", children: [$("div", { className: "row", children: [$(vs, {}), $(gs, {}), $(_s, {}), $(Qa, {}), $(cs, {}), $(ps, {}), $(ws, {})] }), $(Va, {})] });
}
function Cs() {
  return $("div", { id: "home-page", children: [$(Fa, {}), $(xs, {})] });
}
function Ts(e19) {
  return $("div", { onClick: e19.onClick, className: "close-menu", children: $("div", { className: "close-menu-wrapper", children: [$("div", {}), $("div", {})] }) });
}
var Os, Ss = {};
!function() {
  if (Os) return Ss;
  Os = 1, Object.defineProperty(Ss, "__esModule", { value: true }), Ss.parse = function(e20, t3) {
    const n3 = new o2(), r3 = e20.length;
    if (r3 < 2) return n3;
    const i3 = (t3 == null ? void 0 : t3.decode) || u2;
    let l2 = 0;
    do {
      const t4 = e20.indexOf("=", l2);
      if (-1 === t4) break;
      const o3 = e20.indexOf(";", l2), u3 = -1 === o3 ? r3 : o3;
      if (t4 > u3) {
        l2 = e20.lastIndexOf(";", t4 - 1) + 1;
        continue;
      }
      const c2 = a2(e20, l2, t4), f2 = s2(e20, t4, c2), h2 = e20.slice(c2, f2);
      if (void 0 === n3[h2]) {
        let r4 = a2(e20, t4 + 1, u3), o4 = s2(e20, u3, r4);
        const l3 = i3(e20.slice(r4, o4));
        n3[h2] = l3;
      }
      l2 = u3 + 1;
    } while (l2 < r3);
    return n3;
  }, Ss.serialize = function(o3, a3, s3) {
    const u3 = (s3 == null ? void 0 : s3.encode) || encodeURIComponent;
    if (!e19.test(o3)) throw new TypeError(`argument name is invalid: ${o3}`);
    const l2 = u3(a3);
    if (!t2.test(l2)) throw new TypeError(`argument val is invalid: ${a3}`);
    let c2 = o3 + "=" + l2;
    if (!s3) return c2;
    if (void 0 !== s3.maxAge) {
      if (!Number.isInteger(s3.maxAge)) throw new TypeError(`option maxAge is invalid: ${s3.maxAge}`);
      c2 += "; Max-Age=" + s3.maxAge;
    }
    if (s3.domain) {
      if (!n2.test(s3.domain)) throw new TypeError(`option domain is invalid: ${s3.domain}`);
      c2 += "; Domain=" + s3.domain;
    }
    if (s3.path) {
      if (!r2.test(s3.path)) throw new TypeError(`option path is invalid: ${s3.path}`);
      c2 += "; Path=" + s3.path;
    }
    if (s3.expires) {
      if (!function(e20) {
        return "[object Date]" === i2.call(e20);
      }(s3.expires) || !Number.isFinite(s3.expires.valueOf())) throw new TypeError(`option expires is invalid: ${s3.expires}`);
      c2 += "; Expires=" + s3.expires.toUTCString();
    }
    s3.httpOnly && (c2 += "; HttpOnly");
    s3.secure && (c2 += "; Secure");
    s3.partitioned && (c2 += "; Partitioned");
    if (s3.priority) {
      switch ("string" == typeof s3.priority ? s3.priority.toLowerCase() : void 0) {
        case "low":
          c2 += "; Priority=Low";
          break;
        case "medium":
          c2 += "; Priority=Medium";
          break;
        case "high":
          c2 += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${s3.priority}`);
      }
    }
    if (s3.sameSite) {
      switch ("string" == typeof s3.sameSite ? s3.sameSite.toLowerCase() : s3.sameSite) {
        case true:
        case "strict":
          c2 += "; SameSite=Strict";
          break;
        case "lax":
          c2 += "; SameSite=Lax";
          break;
        case "none":
          c2 += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${s3.sameSite}`);
      }
    }
    return c2;
  };
  const e19 = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, t2 = /^[\u0021-\u003A\u003C-\u007E]*$/, n2 = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, r2 = /^[\u0020-\u003A\u003D-\u007E]*$/, i2 = Object.prototype.toString, o2 = (() => {
    const e20 = function() {
    };
    return e20.prototype = /* @__PURE__ */ Object.create(null), e20;
  })();
  function a2(e20, t3, n3) {
    do {
      const n4 = e20.charCodeAt(t3);
      if (32 !== n4 && 9 !== n4) return t3;
    } while (++t3 < n3);
    return n3;
  }
  function s2(e20, t3, n3) {
    for (; t3 > n3; ) {
      const n4 = e20.charCodeAt(--t3);
      if (32 !== n4 && 9 !== n4) return t3 + 1;
    }
    return n3;
  }
  function u2(e20) {
    if (-1 === e20.indexOf("%")) return e20;
    try {
      return decodeURIComponent(e20);
    } catch (t3) {
      return e20;
    }
  }
}();
/**
 * react-router v7.1.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var Es = "popstate";
function Ps(e19 = {}) {
  return function(e20, t2, n2, r2 = {}) {
    let { window: i2 = document.defaultView, v5Compat: o2 = false } = r2, a2 = i2.history, s2 = "POP", u2 = null, l2 = c2();
    null == l2 && (l2 = 0, a2.replaceState({ ...a2.state, idx: l2 }, ""));
    function c2() {
      return (a2.state || { idx: null }).idx;
    }
    function f2() {
      s2 = "POP";
      let e21 = c2(), t3 = null == e21 ? null : e21 - l2;
      l2 = e21, u2 && u2({ action: s2, location: m2.location, delta: t3 });
    }
    function h2(e21, t3) {
      s2 = "PUSH";
      let n3 = As(m2.location, e21, t3);
      l2 = c2() + 1;
      let r3 = Ns(n3, l2), f3 = m2.createHref(n3);
      try {
        a2.pushState(r3, "", f3);
      } catch (e22) {
        if (e22 instanceof DOMException && "DataCloneError" === e22.name) throw e22;
        i2.location.assign(f3);
      }
      o2 && u2 && u2({ action: s2, location: m2.location, delta: 1 });
    }
    function p2(e21, t3) {
      s2 = "REPLACE";
      let n3 = As(m2.location, e21, t3);
      l2 = c2();
      let r3 = Ns(n3, l2), i3 = m2.createHref(n3);
      a2.replaceState(r3, "", i3), o2 && u2 && u2({ action: s2, location: m2.location, delta: 0 });
    }
    function d2(e21) {
      let t3 = "null" !== i2.location.origin ? i2.location.origin : i2.location.href, n3 = "string" == typeof e21 ? e21 : Rs(e21);
      return n3 = n3.replace(/ $/, "%20"), ks(t3, `No window.location.(origin|href) available to create URL for href: ${n3}`), new URL(n3, t3);
    }
    let m2 = { get action() {
      return s2;
    }, get location() {
      return e20(i2, a2);
    }, listen(e21) {
      if (u2) throw new Error("A history only accepts one active listener");
      return i2.addEventListener(Es, f2), u2 = e21, () => {
        i2.removeEventListener(Es, f2), u2 = null;
      };
    }, createHref: (e21) => t2(i2, e21), createURL: d2, encodeLocation(e21) {
      let t3 = d2(e21);
      return { pathname: t3.pathname, search: t3.search, hash: t3.hash };
    }, push: h2, replace: p2, go: (e21) => a2.go(e21) };
    return m2;
  }(function(e20, t2) {
    let { pathname: n2, search: r2, hash: i2 } = e20.location;
    return As("", { pathname: n2, search: r2, hash: i2 }, t2.state && t2.state.usr || null, t2.state && t2.state.key || "default");
  }, function(e20, t2) {
    return "string" == typeof t2 ? t2 : Rs(t2);
  }, 0, e19);
}
function ks(e19, t2) {
  if (false === e19 || null == e19) throw new Error(t2);
}
function Ms(e19, t2) {
  if (!e19) {
    "undefined" != typeof console && console.warn(t2);
    try {
      throw new Error(t2);
    } catch (e20) {
    }
  }
}
function Ns(e19, t2) {
  return { usr: e19.state, key: e19.key, idx: t2 };
}
function As(e19, t2, n2 = null, r2) {
  return { pathname: "string" == typeof e19 ? e19 : e19.pathname, search: "", hash: "", ..."string" == typeof t2 ? Ls(t2) : t2, state: n2, key: t2 && t2.key || r2 || Math.random().toString(36).substring(2, 10) };
}
function Rs({ pathname: e19 = "/", search: t2 = "", hash: n2 = "" }) {
  return t2 && "?" !== t2 && (e19 += "?" === t2.charAt(0) ? t2 : "?" + t2), n2 && "#" !== n2 && (e19 += "#" === n2.charAt(0) ? n2 : "#" + n2), e19;
}
function Ls(e19) {
  let t2 = {};
  if (e19) {
    let n2 = e19.indexOf("#");
    n2 >= 0 && (t2.hash = e19.substring(n2), e19 = e19.substring(0, n2));
    let r2 = e19.indexOf("?");
    r2 >= 0 && (t2.search = e19.substring(r2), e19 = e19.substring(0, r2)), e19 && (t2.pathname = e19);
  }
  return t2;
}
function js(e19, t2, n2 = "/") {
  return function(e20, t3, n3, r2) {
    let i2 = "string" == typeof t3 ? Ls(t3) : t3, o2 = Zs(i2.pathname || "/", n3);
    if (null == o2) return null;
    let a2 = Ds(e20);
    !function(e21) {
      e21.sort((e22, t4) => e22.score !== t4.score ? t4.score - e22.score : function(e23, t5) {
        let n4 = e23.length === t5.length && e23.slice(0, -1).every((e24, n5) => e24 === t5[n5]);
        return n4 ? e23[e23.length - 1] - t5[t5.length - 1] : 0;
      }(e22.routesMeta.map((e23) => e23.childrenIndex), t4.routesMeta.map((e23) => e23.childrenIndex)));
    }(a2);
    let s2 = null;
    for (let e21 = 0; null == s2 && e21 < a2.length; ++e21) {
      let t4 = qs(o2);
      s2 = Ys(a2[e21], t4, r2);
    }
    return s2;
  }(e19, t2, n2, false);
}
function Ds(e19, t2 = [], n2 = [], r2 = "") {
  let i2 = (e20, i3, o2) => {
    let a2 = { relativePath: void 0 === o2 ? e20.path || "" : o2, caseSensitive: true === e20.caseSensitive, childrenIndex: i3, route: e20 };
    a2.relativePath.startsWith("/") && (ks(a2.relativePath.startsWith(r2), `Absolute route path "${a2.relativePath}" nested under path "${r2}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), a2.relativePath = a2.relativePath.slice(r2.length));
    let s2 = Qs([r2, a2.relativePath]), u2 = n2.concat(a2);
    e20.children && e20.children.length > 0 && (ks(true !== e20.index, `Index routes must not have child routes. Please remove all child routes from route path "${s2}".`), Ds(e20.children, t2, u2, s2)), (null != e20.path || e20.index) && t2.push({ path: s2, score: $s(s2, e20.index), routesMeta: u2 });
  };
  return e19.forEach((e20, t3) => {
    var _a3;
    if ("" !== e20.path && ((_a3 = e20.path) == null ? void 0 : _a3.includes("?"))) for (let n3 of zs(e20.path)) i2(e20, t3, n3);
    else i2(e20, t3);
  }), t2;
}
function zs(e19) {
  let t2 = e19.split("/");
  if (0 === t2.length) return [];
  let [n2, ...r2] = t2, i2 = n2.endsWith("?"), o2 = n2.replace(/\?$/, "");
  if (0 === r2.length) return i2 ? [o2, ""] : [o2];
  let a2 = zs(r2.join("/")), s2 = [];
  return s2.push(...a2.map((e20) => "" === e20 ? o2 : [o2, e20].join("/"))), i2 && s2.push(...a2), s2.map((t3) => e19.startsWith("/") && "" === t3 ? "/" : t3);
}
var Is = /^:[\w-]+$/, Bs = 3, Fs = 2, Vs = 1, Hs = 10, Us = -2, Ws = (e19) => "*" === e19;
function $s(e19, t2) {
  let n2 = e19.split("/"), r2 = n2.length;
  return n2.some(Ws) && (r2 += Us), t2 && (r2 += Fs), n2.filter((e20) => !Ws(e20)).reduce((e20, t3) => e20 + (Is.test(t3) ? Bs : "" === t3 ? Vs : Hs), r2);
}
function Ys(e19, t2, n2 = false) {
  let { routesMeta: r2 } = e19, i2 = {}, o2 = "/", a2 = [];
  for (let e20 = 0; e20 < r2.length; ++e20) {
    let s2 = r2[e20], u2 = e20 === r2.length - 1, l2 = "/" === o2 ? t2 : t2.slice(o2.length) || "/", c2 = Xs({ path: s2.relativePath, caseSensitive: s2.caseSensitive, end: u2 }, l2), f2 = s2.route;
    if (!c2 && u2 && n2 && !r2[r2.length - 1].route.index && (c2 = Xs({ path: s2.relativePath, caseSensitive: s2.caseSensitive, end: false }, l2)), !c2) return null;
    Object.assign(i2, c2.params), a2.push({ params: i2, pathname: Qs([o2, c2.pathname]), pathnameBase: eu(Qs([o2, c2.pathnameBase])), route: f2 }), "/" !== c2.pathnameBase && (o2 = Qs([o2, c2.pathnameBase]));
  }
  return a2;
}
function Xs(e19, t2) {
  "string" == typeof e19 && (e19 = { path: e19, caseSensitive: false, end: true });
  let [n2, r2] = function(e20, t3 = false, n3 = true) {
    Ms("*" === e20 || !e20.endsWith("*") || e20.endsWith("/*"), `Route path "${e20}" will be treated as if it were "${e20.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e20.replace(/\*$/, "/*")}".`);
    let r3 = [], i3 = "^" + e20.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (e21, t4, n4) => (r3.push({ paramName: t4, isOptional: null != n4 }), n4 ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    e20.endsWith("*") ? (r3.push({ paramName: "*" }), i3 += "*" === e20 || "/*" === e20 ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n3 ? i3 += "\\/*$" : "" !== e20 && "/" !== e20 && (i3 += "(?:(?=\\/|$))");
    let o3 = new RegExp(i3, t3 ? void 0 : "i");
    return [o3, r3];
  }(e19.path, e19.caseSensitive, e19.end), i2 = t2.match(n2);
  if (!i2) return null;
  let o2 = i2[0], a2 = o2.replace(/(.)\/+$/, "$1"), s2 = i2.slice(1);
  return { params: r2.reduce((e20, { paramName: t3, isOptional: n3 }, r3) => {
    if ("*" === t3) {
      let e21 = s2[r3] || "";
      a2 = o2.slice(0, o2.length - e21.length).replace(/(.)\/+$/, "$1");
    }
    const i3 = s2[r3];
    return e20[t3] = n3 && !i3 ? void 0 : (i3 || "").replace(/%2F/g, "/"), e20;
  }, {}), pathname: o2, pathnameBase: a2, pattern: e19 };
}
function qs(e19) {
  try {
    return e19.split("/").map((e20) => decodeURIComponent(e20).replace(/\//g, "%2F")).join("/");
  } catch (t2) {
    return Ms(false, `The URL path "${e19}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t2}).`), e19;
  }
}
function Zs(e19, t2) {
  if ("/" === t2) return e19;
  if (!e19.toLowerCase().startsWith(t2.toLowerCase())) return null;
  let n2 = t2.endsWith("/") ? t2.length - 1 : t2.length, r2 = e19.charAt(n2);
  return r2 && "/" !== r2 ? null : e19.slice(n2) || "/";
}
function Gs(e19, t2, n2, r2) {
  return `Cannot include a '${e19}' character in a manually specified \`to.${t2}\` field [${JSON.stringify(r2)}].  Please separate it out to the \`to.${n2}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Ks(e19) {
  let t2 = function(e20) {
    return e20.filter((e21, t3) => 0 === t3 || e21.route.path && e21.route.path.length > 0);
  }(e19);
  return t2.map((e20, n2) => n2 === t2.length - 1 ? e20.pathname : e20.pathnameBase);
}
function Js(e19, t2, n2, r2 = false) {
  let i2;
  "string" == typeof e19 ? i2 = Ls(e19) : (i2 = { ...e19 }, ks(!i2.pathname || !i2.pathname.includes("?"), Gs("?", "pathname", "search", i2)), ks(!i2.pathname || !i2.pathname.includes("#"), Gs("#", "pathname", "hash", i2)), ks(!i2.search || !i2.search.includes("#"), Gs("#", "search", "hash", i2)));
  let o2, a2 = "" === e19 || "" === i2.pathname, s2 = a2 ? "/" : i2.pathname;
  if (null == s2) o2 = n2;
  else {
    let e20 = t2.length - 1;
    if (!r2 && s2.startsWith("..")) {
      let t3 = s2.split("/");
      for (; ".." === t3[0]; ) t3.shift(), e20 -= 1;
      i2.pathname = t3.join("/");
    }
    o2 = e20 >= 0 ? t2[e20] : "/";
  }
  let u2 = function(e20, t3 = "/") {
    let { pathname: n3, search: r3 = "", hash: i3 = "" } = "string" == typeof e20 ? Ls(e20) : e20, o3 = n3 ? n3.startsWith("/") ? n3 : function(e21, t4) {
      let n4 = t4.replace(/\/+$/, "").split("/");
      return e21.split("/").forEach((e22) => {
        ".." === e22 ? n4.length > 1 && n4.pop() : "." !== e22 && n4.push(e22);
      }), n4.length > 1 ? n4.join("/") : "/";
    }(n3, t3) : t3;
    return { pathname: o3, search: tu(r3), hash: nu(i3) };
  }(i2, o2), l2 = s2 && "/" !== s2 && s2.endsWith("/"), c2 = (a2 || "." === s2) && n2.endsWith("/");
  return u2.pathname.endsWith("/") || !l2 && !c2 || (u2.pathname += "/"), u2;
}
var Qs = (e19) => e19.join("/").replace(/\/\/+/g, "/"), eu = (e19) => e19.replace(/\/+$/, "").replace(/^\/*/, "/"), tu = (e19) => e19 && "?" !== e19 ? e19.startsWith("?") ? e19 : "?" + e19 : "", nu = (e19) => e19 && "#" !== e19 ? e19.startsWith("#") ? e19 : "#" + e19 : "";
var ru = ["POST", "PUT", "PATCH", "DELETE"];
new Set(ru);
var iu = ["GET", ...ru];
new Set(iu);
var ou = U(null);
ou.displayName = "DataRouter";
var au = U(null);
au.displayName = "DataRouterState";
var su = U({ isTransitioning: false });
su.displayName = "ViewTransition", U(/* @__PURE__ */ new Map()).displayName = "Fetchers", U(null).displayName = "Await";
var uu = U(null);
uu.displayName = "Navigation";
var lu = U(null);
lu.displayName = "Location";
var cu = U({ outlet: null, matches: [], isDataRoute: false });
cu.displayName = "Route";
var fu = U(null);
function hu() {
  return null != de(lu);
}
function pu() {
  return ks(hu(), "useLocation() may be used only in the context of a <Router> component."), de(lu).location;
}
fu.displayName = "RouteError";
var du = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function mu(e19) {
  de(uu).static || le(e19);
}
function vu() {
  let { isDataRoute: e19 } = de(cu);
  return e19 ? function() {
    let { router: e20 } = function(e21) {
      let t3 = de(ou);
      return ks(t3, Cu(e21)), t3;
    }("useNavigate"), t2 = Tu("useNavigate"), n2 = ce(false);
    return mu(() => {
      n2.current = true;
    }), pe(async (r2, i2 = {}) => {
      Ms(n2.current, du), n2.current && ("number" == typeof r2 ? e20.navigate(r2) : await e20.navigate(r2, { fromRouteId: t2, ...i2 }));
    }, [e20, t2]);
  }() : function() {
    ks(hu(), "useNavigate() may be used only in the context of a <Router> component.");
    let e20 = de(ou), { basename: t2, navigator: n2 } = de(uu), { matches: r2 } = de(cu), { pathname: i2 } = pu(), o2 = JSON.stringify(Ks(r2)), a2 = ce(false);
    mu(() => {
      a2.current = true;
    });
    let s2 = pe((r3, s3 = {}) => {
      if (Ms(a2.current, du), !a2.current) return;
      if ("number" == typeof r3) return void n2.go(r3);
      let u2 = Js(r3, JSON.parse(o2), i2, "path" === s3.relative);
      null == e20 && "/" !== t2 && (u2.pathname = "/" === u2.pathname ? t2 : Qs([t2, u2.pathname])), (s3.replace ? n2.replace : n2.push)(u2, s3.state, s3);
    }, [t2, n2, o2, i2, e20]);
    return s2;
  }();
}
function gu(e19, { relative: t2 } = {}) {
  let { matches: n2 } = de(cu), { pathname: r2 } = pu(), i2 = JSON.stringify(Ks(n2));
  return he(() => Js(e19, JSON.parse(i2), r2, "path" === t2), [e19, i2, r2, t2]);
}
function _u(e19, t2, n2, r2) {
  var _a3;
  ks(hu(), "useRoutes() may be used only in the context of a <Router> component.");
  let { navigator: i2, static: o2 } = de(uu), { matches: a2 } = de(cu), s2 = a2[a2.length - 1], u2 = s2 ? s2.params : {}, l2 = s2 ? s2.pathname : "/", c2 = s2 ? s2.pathnameBase : "/", f2 = s2 && s2.route;
  {
    let e20 = f2 && f2.path || "";
    Su(l2, !f2 || e20.endsWith("*") || e20.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l2}" (under <Route path="${e20}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e20}"> to <Route path="${"/" === e20 ? "*" : `${e20}/*`}">.`);
  }
  let h2, p2 = pu();
  if (t2) {
    let e20 = "string" == typeof t2 ? Ls(t2) : t2;
    ks("/" === c2 || ((_a3 = e20.pathname) == null ? void 0 : _a3.startsWith(c2)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c2}" but pathname "${e20.pathname}" was given in the \`location\` prop.`), h2 = e20;
  } else h2 = p2;
  let d2 = h2.pathname || "/", m2 = d2;
  if ("/" !== c2) {
    let e20 = c2.replace(/^\//, "").split("/");
    m2 = "/" + d2.replace(/^\//, "").split("/").slice(e20.length).join("/");
  }
  let v2 = !o2 && n2 && n2.matches && n2.matches.length > 0 ? n2.matches : js(e19, { pathname: m2 });
  Ms(f2 || null != v2, `No routes matched location "${h2.pathname}${h2.search}${h2.hash}" `), Ms(null == v2 || void 0 !== v2[v2.length - 1].route.element || void 0 !== v2[v2.length - 1].route.Component || void 0 !== v2[v2.length - 1].route.lazy, `Matched leaf route at location "${h2.pathname}${h2.search}${h2.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
  let g2 = function(e20, t3 = [], n3 = null) {
    if (null == e20) {
      if (!n3) return null;
      if (n3.errors) e20 = n3.matches;
      else {
        if (0 !== t3.length || n3.initialized || !(n3.matches.length > 0)) return null;
        e20 = n3.matches;
      }
    }
    let r3 = e20, i3 = n3 == null ? void 0 : n3.errors;
    if (null != i3) {
      let e21 = r3.findIndex((e22) => e22.route.id && void 0 !== (i3 == null ? void 0 : i3[e22.route.id]));
      ks(e21 >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(i3).join(",")}`), r3 = r3.slice(0, Math.min(r3.length, e21 + 1));
    }
    let o3 = false, a3 = -1;
    if (n3) for (let e21 = 0; e21 < r3.length; e21++) {
      let t4 = r3[e21];
      if ((t4.route.HydrateFallback || t4.route.hydrateFallbackElement) && (a3 = e21), t4.route.id) {
        let { loaderData: e22, errors: i4 } = n3, s3 = t4.route.loader && !e22.hasOwnProperty(t4.route.id) && (!i4 || void 0 === i4[t4.route.id]);
        if (t4.route.lazy || s3) {
          o3 = true, r3 = a3 >= 0 ? r3.slice(0, a3 + 1) : [r3[0]];
          break;
        }
      }
    }
    return r3.reduceRight((e21, s3, u3) => {
      let l3, c3 = false, f3 = null, h3 = null;
      n3 && (l3 = i3 && s3.route.id ? i3[s3.route.id] : void 0, f3 = s3.route.errorElement || bu, o3 && (a3 < 0 && 0 === u3 ? (Su("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration"), c3 = true, h3 = null) : a3 === u3 && (c3 = true, h3 = s3.route.hydrateFallbackElement || null)));
      let p3 = t3.concat(r3.slice(0, u3 + 1)), d3 = () => {
        let t4;
        return t4 = l3 ? f3 : c3 ? h3 : s3.route.Component ? _(s3.route.Component, null) : s3.route.element ? s3.route.element : e21, _(xu, { match: s3, routeContext: { outlet: e21, matches: p3, isDataRoute: null != n3 }, children: t4 });
      };
      return n3 && (s3.route.ErrorBoundary || s3.route.errorElement || 0 === u3) ? _(wu, { location: n3.location, revalidation: n3.revalidation, component: f3, error: l3, children: d3(), routeContext: { outlet: null, matches: p3, isDataRoute: true } }) : d3();
    }, null);
  }(v2 && v2.map((e20) => Object.assign({}, e20, { params: Object.assign({}, u2, e20.params), pathname: Qs([c2, i2.encodeLocation ? i2.encodeLocation(e20.pathname).pathname : e20.pathname]), pathnameBase: "/" === e20.pathnameBase ? c2 : Qs([c2, i2.encodeLocation ? i2.encodeLocation(e20.pathnameBase).pathname : e20.pathnameBase]) })), a2, n2, r2);
  return t2 && g2 ? _(lu.Provider, { value: { location: { pathname: "/", search: "", hash: "", state: null, key: "default", ...h2 }, navigationType: "POP" } }, g2) : g2;
}
function yu() {
  let e19 = function() {
    var _a3;
    let e20 = de(fu), t3 = function(e21) {
      let t4 = de(au);
      return ks(t4, Cu(e21)), t4;
    }("useRouteError"), n3 = Tu("useRouteError");
    if (void 0 !== e20) return e20;
    return (_a3 = t3.errors) == null ? void 0 : _a3[n3];
  }(), t2 = function(e20) {
    return null != e20 && "number" == typeof e20.status && "string" == typeof e20.statusText && "boolean" == typeof e20.internal && "data" in e20;
  }(e19) ? `${e19.status} ${e19.statusText}` : e19 instanceof Error ? e19.message : JSON.stringify(e19), n2 = e19 instanceof Error ? e19.stack : null, r2 = "rgba(200,200,200, 0.5)", i2 = { padding: "0.5rem", backgroundColor: r2 }, o2 = { padding: "2px 4px", backgroundColor: r2 }, a2 = null;
  return console.error("Error handled by React Router default ErrorBoundary:", e19), a2 = _(w, null, _("p", null, "💿 Hey developer 👋"), _("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", _("code", { style: o2 }, "ErrorBoundary"), " or", " ", _("code", { style: o2 }, "errorElement"), " prop on your route.")), _(w, null, _("h2", null, "Unexpected Application Error!"), _("h3", { style: { fontStyle: "italic" } }, t2), n2 ? _("pre", { style: i2 }, n2) : null, a2);
}
U(null);
var bu = _(yu, null), wu = class extends x {
  constructor(e19) {
    super(e19), this.state = { location: e19.location, revalidation: e19.revalidation, error: e19.error };
  }
  static getDerivedStateFromError(e19) {
    return { error: e19 };
  }
  static getDerivedStateFromProps(e19, t2) {
    return t2.location !== e19.location || "idle" !== t2.revalidation && "idle" === e19.revalidation ? { error: e19.error, location: e19.location, revalidation: e19.revalidation } : { error: void 0 !== e19.error ? e19.error : t2.error, location: t2.location, revalidation: e19.revalidation || t2.revalidation };
  }
  componentDidCatch(e19, t2) {
    console.error("React Router caught the following error during render", e19, t2);
  }
  render() {
    return void 0 !== this.state.error ? _(cu.Provider, { value: this.props.routeContext }, _(fu.Provider, { value: this.state.error, children: this.props.component })) : this.props.children;
  }
};
function xu({ routeContext: e19, match: t2, children: n2 }) {
  let r2 = de(ou);
  return r2 && r2.static && r2.staticContext && (t2.route.errorElement || t2.route.ErrorBoundary) && (r2.staticContext._deepestRenderedBoundaryId = t2.route.id), _(cu.Provider, { value: e19 }, n2);
}
function Cu(e19) {
  return `${e19} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Tu(e19) {
  let t2 = function(e20) {
    let t3 = de(cu);
    return ks(t3, Cu(e20)), t3;
  }(e19), n2 = t2.matches[t2.matches.length - 1];
  return ks(n2.route.id, `${e19} can only be used on routes that contain a unique "id"`), n2.route.id;
}
var Ou = {};
function Su(e19, t2, n2) {
  t2 || Ou[e19] || (Ou[e19] = true, Ms(false, n2));
}
function Eu(e19) {
  ks(false, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
}
function Pu({ basename: e19 = "/", children: t2 = null, location: n2, navigationType: r2 = "POP", navigator: i2, static: o2 = false }) {
  ks(!hu(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
  let a2 = e19.replace(/^\/*/, "/"), s2 = he(() => ({ basename: a2, navigator: i2, static: o2, future: {} }), [a2, i2, o2]);
  "string" == typeof n2 && (n2 = Ls(n2));
  let { pathname: u2 = "/", search: l2 = "", hash: c2 = "", state: f2 = null, key: h2 = "default" } = n2, p2 = he(() => {
    let e20 = Zs(u2, a2);
    return null == e20 ? null : { location: { pathname: e20, search: l2, hash: c2, state: f2, key: h2 }, navigationType: r2 };
  }, [a2, u2, l2, c2, f2, h2, r2]);
  return Ms(null != p2, `<Router basename="${a2}"> is not able to match the URL "${u2}${l2}${c2}" because it does not start with the basename, so the <Router> won't render anything.`), null == p2 ? null : _(uu.Provider, { value: s2 }, _(lu.Provider, { children: t2, value: p2 }));
}
function ku({ children: e19, location: t2 }) {
  return _u(Mu(e19), t2);
}
function Mu(e19, t2 = []) {
  let n2 = [];
  return Ie.forEach(e19, (e20, r2) => {
    if (!vt(e20)) return;
    let i2 = [...t2, r2];
    if (e20.type === w) return void n2.push.apply(n2, Mu(e20.props.children, i2));
    ks(e20.type === Eu, `[${"string" == typeof e20.type ? e20.type : e20.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), ks(!e20.props.index || !e20.props.children, "An index route cannot have child routes.");
    let o2 = { id: e20.props.id || i2.join("-"), caseSensitive: e20.props.caseSensitive, element: e20.props.element, Component: e20.props.Component, index: e20.props.index, path: e20.props.path, loader: e20.props.loader, action: e20.props.action, hydrateFallbackElement: e20.props.hydrateFallbackElement, HydrateFallback: e20.props.HydrateFallback, errorElement: e20.props.errorElement, ErrorBoundary: e20.props.ErrorBoundary, hasErrorBoundary: true === e20.props.hasErrorBoundary || null != e20.props.ErrorBoundary || null != e20.props.errorElement, shouldRevalidate: e20.props.shouldRevalidate, handle: e20.props.handle, lazy: e20.props.lazy };
    e20.props.children && (o2.children = Mu(e20.props.children, i2)), n2.push(o2);
  }), n2;
}
Re(function({ routes: e19, future: t2, state: n2 }) {
  return _u(e19, void 0, n2, t2);
});
var Nu = "get", Au = "application/x-www-form-urlencoded";
function Ru(e19) {
  return null != e19 && "string" == typeof e19.tagName;
}
var Lu = null;
var ju = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function Du(e19) {
  return null == e19 || ju.has(e19) ? e19 : (Ms(false, `"${e19}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Au}"`), null);
}
function zu(e19, t2) {
  let n2, r2, i2, o2, a2;
  if (Ru(s2 = e19) && "form" === s2.tagName.toLowerCase()) {
    let a3 = e19.getAttribute("action");
    r2 = a3 ? Zs(a3, t2) : null, n2 = e19.getAttribute("method") || Nu, i2 = Du(e19.getAttribute("enctype")) || Au, o2 = new FormData(e19);
  } else if (function(e20) {
    return Ru(e20) && "button" === e20.tagName.toLowerCase();
  }(e19) || function(e20) {
    return Ru(e20) && "input" === e20.tagName.toLowerCase();
  }(e19) && ("submit" === e19.type || "image" === e19.type)) {
    let a3 = e19.form;
    if (null == a3) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let s3 = e19.getAttribute("formaction") || a3.getAttribute("action");
    if (r2 = s3 ? Zs(s3, t2) : null, n2 = e19.getAttribute("formmethod") || a3.getAttribute("method") || Nu, i2 = Du(e19.getAttribute("formenctype")) || Du(a3.getAttribute("enctype")) || Au, o2 = new FormData(a3, e19), !function() {
      if (null === Lu) try {
        new FormData(document.createElement("form"), 0), Lu = false;
      } catch (e20) {
        Lu = true;
      }
      return Lu;
    }()) {
      let { name: t3, type: n3, value: r3 } = e19;
      if ("image" === n3) {
        let e20 = t3 ? `${t3}.` : "";
        o2.append(`${e20}x`, "0"), o2.append(`${e20}y`, "0");
      } else t3 && o2.append(t3, r3);
    }
  } else {
    if (Ru(e19)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    n2 = Nu, r2 = null, i2 = Au, a2 = e19;
  }
  var s2;
  return o2 && "text/plain" === i2 && (a2 = o2, o2 = void 0), { action: r2, method: n2.toLowerCase(), encType: i2, formData: o2, body: a2 };
}
function Iu(e19, t2) {
  if (false === e19 || null == e19) throw new Error(t2);
}
function Bu(e19) {
  return null != e19 && (null == e19.href ? "preload" === e19.rel && "string" == typeof e19.imageSrcSet && "string" == typeof e19.imageSizes : "string" == typeof e19.rel && "string" == typeof e19.href);
}
async function Fu(e19, t2, n2) {
  return function(e20, t3) {
    let n3 = /* @__PURE__ */ new Set();
    return new Set(t3), e20.reduce((e21, t4) => {
      let r2 = JSON.stringify(function(e22) {
        let t5 = {}, n4 = Object.keys(e22).sort();
        for (let r3 of n4) t5[r3] = e22[r3];
        return t5;
      }(t4));
      return n3.has(r2) || (n3.add(r2), e21.push({ key: r2, link: t4 })), e21;
    }, []);
  }((await Promise.all(e19.map(async (e20) => {
    let r2 = t2.routes[e20.route.id];
    if (r2) {
      let e21 = await async function(e22, t3) {
        if (e22.id in t3) return t3[e22.id];
        try {
          let n3 = await import(e22.module);
          return t3[e22.id] = n3, n3;
        } catch (t4) {
          return console.error(`Error loading route module \`${e22.module}\`, reloading page...`), console.error(t4), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
          });
        }
      }(r2, n2);
      return e21.links ? e21.links() : [];
    }
    return [];
  }))).flat(1).filter(Bu).filter((e20) => "stylesheet" === e20.rel || "preload" === e20.rel).map((e20) => "stylesheet" === e20.rel ? { ...e20, rel: "prefetch", as: "style" } : { ...e20, rel: "prefetch" }));
}
function Vu(e19, t2, n2, r2, i2, o2) {
  let a2 = (e20, t3) => !n2[t3] || e20.route.id !== n2[t3].route.id, s2 = (e20, t3) => {
    var _a3;
    return n2[t3].pathname !== e20.pathname || ((_a3 = n2[t3].route.path) == null ? void 0 : _a3.endsWith("*")) && n2[t3].params["*"] !== e20.params["*"];
  };
  return "assets" === o2 ? t2.filter((e20, t3) => a2(e20, t3) || s2(e20, t3)) : "data" === o2 ? t2.filter((t3, o3) => {
    var _a3;
    let u2 = r2.routes[t3.route.id];
    if (!u2 || !u2.hasLoader) return false;
    if (a2(t3, o3) || s2(t3, o3)) return true;
    if (t3.route.shouldRevalidate) {
      let r3 = t3.route.shouldRevalidate({ currentUrl: new URL(i2.pathname + i2.search + i2.hash, window.origin), currentParams: ((_a3 = n2[0]) == null ? void 0 : _a3.params) || {}, nextUrl: new URL(e19, window.origin), nextParams: t3.params, defaultShouldRevalidate: true });
      if ("boolean" == typeof r3) return r3;
    }
    return true;
  }) : [];
}
function Hu(e19, t2) {
  return n2 = e19.map((e20) => {
    let n3 = t2.routes[e20.route.id];
    if (!n3) return [];
    let r2 = [n3.module];
    return n3.imports && (r2 = r2.concat(n3.imports)), r2;
  }).flat(1), [...new Set(n2)];
  var n2;
}
var Uu = U(void 0);
function Wu() {
  let e19 = de(Uu);
  return Iu(e19, "You must render this element inside a <HydratedRouter> element"), e19;
}
function $u(e19, t2) {
  return (n2) => {
    e19 && e19(n2), n2.defaultPrevented || t2(n2);
  };
}
function Yu({ page: e19, ...t2 }) {
  let { router: n2 } = function() {
    let e20 = de(ou);
    return Iu(e20, "You must render this element inside a <DataRouterContext.Provider> element"), e20;
  }(), r2 = he(() => js(n2.routes, e19, n2.basename), [n2.routes, e19, n2.basename]);
  return r2 ? _(Xu, { page: e19, matches: r2, ...t2 }) : null;
}
function Xu({ page: e19, matches: t2, ...n2 }) {
  let r2 = pu(), { manifest: i2, routeModules: o2 } = Wu(), { loaderData: a2, matches: s2 } = function() {
    let e20 = de(au);
    return Iu(e20, "You must render this element inside a <DataRouterStateContext.Provider> element"), e20;
  }(), u2 = he(() => Vu(e19, t2, s2, i2, r2, "data"), [e19, t2, s2, i2, r2]), l2 = he(() => Vu(e19, t2, s2, i2, r2, "assets"), [e19, t2, s2, i2, r2]), c2 = he(() => {
    if (e19 === r2.pathname + r2.search + r2.hash) return [];
    let n3 = /* @__PURE__ */ new Set(), s3 = false;
    if (t2.forEach((e20) => {
      var _a3;
      let t3 = i2.routes[e20.route.id];
      t3 && t3.hasLoader && (!u2.some((t4) => t4.route.id === e20.route.id) && e20.route.id in a2 && ((_a3 = o2[e20.route.id]) == null ? void 0 : _a3.shouldRevalidate) || t3.hasClientLoader ? s3 = true : n3.add(e20.route.id));
    }), 0 === n3.size) return [];
    let l3 = function(e20) {
      let t3 = "string" == typeof e20 ? new URL(e20, "undefined" == typeof window ? "server://singlefetch/" : window.location.origin) : e20;
      return "/" === t3.pathname ? t3.pathname = "_root.data" : t3.pathname = `${t3.pathname.replace(/\/$/, "")}.data`, t3;
    }(e19);
    return s3 && n3.size > 0 && l3.searchParams.set("_routes", t2.filter((e20) => n3.has(e20.route.id)).map((e20) => e20.route.id).join(",")), [l3.pathname + l3.search];
  }, [a2, r2, i2, u2, t2, e19, o2]), f2 = he(() => Hu(l2, i2), [l2, i2]), h2 = function(e20) {
    let { manifest: t3, routeModules: n3 } = Wu(), [r3, i3] = ae([]);
    return ue(() => {
      let r4 = false;
      return Fu(e20, t3, n3).then((e21) => {
        r4 || i3(e21);
      }), () => {
        r4 = true;
      };
    }, [e20, t3, n3]), r3;
  }(l2);
  return _(w, null, c2.map((e20) => _("link", { key: e20, rel: "prefetch", as: "fetch", href: e20, ...n2 })), f2.map((e20) => _("link", { key: e20, rel: "modulepreload", href: e20, ...n2 })), h2.map(({ key: e20, link: t3 }) => _("link", { key: e20, ...t3 })));
}
function qu(...e19) {
  return (t2) => {
    e19.forEach((e20) => {
      "function" == typeof e20 ? e20(t2) : null != e20 && (e20.current = t2);
    });
  };
}
Uu.displayName = "FrameworkContext";
var Zu = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement;
try {
  Zu && (window.__reactRouterVersion = "7.1.5");
} catch (Q2) {
}
function Gu({ basename: e19, children: t2, window: n2 }) {
  let r2 = ce();
  null == r2.current && (r2.current = Ps({ window: n2, v5Compat: true }));
  let i2 = r2.current, [o2, a2] = ae({ action: i2.action, location: i2.location }), s2 = pe((e20) => {
    Pe(() => a2(e20));
  }, [a2]);
  return le(() => i2.listen(s2), [i2, s2]), _(Pu, { basename: e19, children: t2, location: o2.location, navigationType: o2.action, navigator: i2 });
}
var Ku = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Ju = De(function({ onClick: e19, discover: t2 = "render", prefetch: n2 = "none", relative: r2, reloadDocument: i2, replace: o2, state: a2, target: s2, to: u2, preventScrollReset: l2, viewTransition: c2, ...f2 }, h2) {
  let p2, { basename: d2 } = de(uu), m2 = "string" == typeof u2 && Ku.test(u2), v2 = false;
  if ("string" == typeof u2 && m2 && (p2 = u2, Zu)) try {
    let e20 = new URL(window.location.href), t3 = u2.startsWith("//") ? new URL(e20.protocol + u2) : new URL(u2), n3 = Zs(t3.pathname, d2);
    t3.origin === e20.origin && null != n3 ? u2 = n3 + t3.search + t3.hash : v2 = true;
  } catch (e20) {
    Ms(false, `<Link to="${u2}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
  }
  let g2 = function(e20, { relative: t3 } = {}) {
    ks(hu(), "useHref() may be used only in the context of a <Router> component.");
    let { basename: n3, navigator: r3 } = de(uu), { hash: i3, pathname: o3, search: a3 } = gu(e20, { relative: t3 }), s3 = o3;
    return "/" !== n3 && (s3 = "/" === o3 ? n3 : Qs([n3, o3])), r3.createHref({ pathname: s3, search: a3, hash: i3 });
  }(u2, { relative: r2 }), [y2, b2, x2] = function(e20, t3) {
    let n3 = de(Uu), [r3, i3] = ae(false), [o3, a3] = ae(false), { onFocus: s3, onBlur: u3, onMouseEnter: l3, onMouseLeave: c3, onTouchStart: f3 } = t3, h3 = ce(null);
    ue(() => {
      if ("render" === e20 && a3(true), "viewport" === e20) {
        let e21 = new IntersectionObserver((e22) => {
          e22.forEach((e23) => {
            a3(e23.isIntersecting);
          });
        }, { threshold: 0.5 });
        return h3.current && e21.observe(h3.current), () => {
          e21.disconnect();
        };
      }
    }, [e20]), ue(() => {
      if (r3) {
        let e21 = setTimeout(() => {
          a3(true);
        }, 100);
        return () => {
          clearTimeout(e21);
        };
      }
    }, [r3]);
    let p3 = () => {
      i3(true);
    }, d3 = () => {
      i3(false), a3(false);
    };
    return n3 ? "intent" !== e20 ? [o3, h3, {}] : [o3, h3, { onFocus: $u(s3, p3), onBlur: $u(u3, d3), onMouseEnter: $u(l3, p3), onMouseLeave: $u(c3, d3), onTouchStart: $u(f3, p3) }] : [false, h3, {}];
  }(n2, f2), C2 = function(e20, { target: t3, replace: n3, state: r3, preventScrollReset: i3, relative: o3, viewTransition: a3 } = {}) {
    let s3 = vu(), u3 = pu(), l3 = gu(e20, { relative: o3 });
    return pe((c3) => {
      if (function(e21, t4) {
        return !(0 !== e21.button || t4 && "_self" !== t4 || function(e22) {
          return !!(e22.metaKey || e22.altKey || e22.ctrlKey || e22.shiftKey);
        }(e21));
      }(c3, t3)) {
        c3.preventDefault();
        let t4 = void 0 !== n3 ? n3 : Rs(u3) === Rs(l3);
        s3(e20, { replace: t4, state: r3, preventScrollReset: i3, relative: o3, viewTransition: a3 });
      }
    }, [u3, s3, l3, n3, r3, t3, e20, i3, o3, a3]);
  }(u2, { replace: o2, state: a2, target: s2, preventScrollReset: l2, relative: r2, viewTransition: c2 });
  let T2 = _("a", { ...f2, ...x2, href: p2 || g2, onClick: v2 || i2 ? e19 : function(t3) {
    e19 && e19(t3), t3.defaultPrevented || C2(t3);
  }, ref: qu(h2, b2), target: s2, "data-discover": m2 || "render" !== t2 ? void 0 : "true" });
  return y2 && !m2 ? _(w, null, T2, _(Yu, { page: g2 })) : T2;
});
Ju.displayName = "Link";
var Qu = De(function({ "aria-current": e19 = "page", caseSensitive: t2 = false, className: n2 = "", end: r2 = false, style: i2, to: o2, viewTransition: a2, children: s2, ...u2 }, l2) {
  let c2 = gu(o2, { relative: u2.relative }), f2 = pu(), h2 = de(au), { navigator: p2, basename: d2 } = de(uu), m2 = null != h2 && function(e20, t3 = {}) {
    let n3 = de(su);
    ks(null != n3, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let { basename: r3 } = tl("useViewTransitionState"), i3 = gu(e20, { relative: t3.relative });
    if (!n3.isTransitioning) return false;
    let o3 = Zs(n3.currentLocation.pathname, r3) || n3.currentLocation.pathname, a3 = Zs(n3.nextLocation.pathname, r3) || n3.nextLocation.pathname;
    return null != Xs(i3.pathname, a3) || null != Xs(i3.pathname, o3);
  }(c2) && true === a2, v2 = p2.encodeLocation ? p2.encodeLocation(c2).pathname : c2.pathname, g2 = f2.pathname, y2 = h2 && h2.navigation && h2.navigation.location ? h2.navigation.location.pathname : null;
  t2 || (g2 = g2.toLowerCase(), y2 = y2 ? y2.toLowerCase() : null, v2 = v2.toLowerCase()), y2 && d2 && (y2 = Zs(y2, d2) || y2);
  const b2 = "/" !== v2 && v2.endsWith("/") ? v2.length - 1 : v2.length;
  let w2, x2 = g2 === v2 || !r2 && g2.startsWith(v2) && "/" === g2.charAt(b2), C2 = null != y2 && (y2 === v2 || !r2 && y2.startsWith(v2) && "/" === y2.charAt(v2.length)), T2 = { isActive: x2, isPending: C2, isTransitioning: m2 }, O2 = x2 ? e19 : void 0;
  w2 = "function" == typeof n2 ? n2(T2) : [n2, x2 ? "active" : null, C2 ? "pending" : null, m2 ? "transitioning" : null].filter(Boolean).join(" ");
  let S2 = "function" == typeof i2 ? i2(T2) : i2;
  return _(Ju, { ...u2, "aria-current": O2, className: w2, ref: l2, style: S2, to: o2, viewTransition: a2 }, "function" == typeof s2 ? s2(T2) : s2);
});
Qu.displayName = "NavLink";
var el = De(({ discover: e19 = "render", fetcherKey: t2, navigate: n2, reloadDocument: r2, replace: i2, state: o2, method: a2 = Nu, action: s2, onSubmit: u2, relative: l2, preventScrollReset: c2, viewTransition: f2, ...h2 }, p2) => {
  let d2 = function() {
    let { router: e20 } = tl("useSubmit"), { basename: t3 } = de(uu), n3 = Tu("useRouteId");
    return pe(async (r3, i3 = {}) => {
      let { action: o3, method: a3, encType: s3, formData: u3, body: l3 } = zu(r3, t3);
      if (false === i3.navigate) {
        let t4 = i3.fetcherKey || rl();
        await e20.fetch(t4, n3, i3.action || o3, { preventScrollReset: i3.preventScrollReset, formData: u3, body: l3, formMethod: i3.method || a3, formEncType: i3.encType || s3, flushSync: i3.flushSync });
      } else await e20.navigate(i3.action || o3, { preventScrollReset: i3.preventScrollReset, formData: u3, body: l3, formMethod: i3.method || a3, formEncType: i3.encType || s3, replace: i3.replace, state: i3.state, fromRouteId: n3, flushSync: i3.flushSync, viewTransition: i3.viewTransition });
    }, [e20, t3, n3]);
  }(), m2 = function(e20, { relative: t3 } = {}) {
    let { basename: n3 } = de(uu), r3 = de(cu);
    ks(r3, "useFormAction must be used inside a RouteContext");
    let [i3] = r3.matches.slice(-1), o3 = { ...gu(e20 || ".", { relative: t3 }) }, a3 = pu();
    if (null == e20) {
      o3.search = a3.search;
      let e21 = new URLSearchParams(o3.search), t4 = e21.getAll("index"), n4 = t4.some((e22) => "" === e22);
      if (n4) {
        e21.delete("index"), t4.filter((e22) => e22).forEach((t5) => e21.append("index", t5));
        let n5 = e21.toString();
        o3.search = n5 ? `?${n5}` : "";
      }
    }
    e20 && "." !== e20 || !i3.route.index || (o3.search = o3.search ? o3.search.replace(/^\?/, "?index&") : "?index");
    "/" !== n3 && (o3.pathname = "/" === o3.pathname ? n3 : Qs([n3, o3.pathname]));
    return Rs(o3);
  }(s2, { relative: l2 }), v2 = "get" === a2.toLowerCase() ? "get" : "post", g2 = "string" == typeof s2 && Ku.test(s2);
  return _("form", { ref: p2, method: v2, action: m2, onSubmit: r2 ? u2 : (e20) => {
    if (u2 && u2(e20), e20.defaultPrevented) return;
    e20.preventDefault();
    let r3 = e20.nativeEvent.submitter, s3 = (r3 == null ? void 0 : r3.getAttribute("formmethod")) || a2;
    d2(r3 || e20.currentTarget, { fetcherKey: t2, method: s3, navigate: n2, replace: i2, state: o2, relative: l2, preventScrollReset: c2, viewTransition: f2 });
  }, ...h2, "data-discover": g2 || "render" !== e19 ? void 0 : "true" });
});
function tl(e19) {
  let t2 = de(ou);
  return ks(t2, function(e20) {
    return `${e20} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }(e19)), t2;
}
el.displayName = "Form";
var nl = 0, rl = () => `__${String(++nl)}__`;
new TextEncoder();
const il = "/masbo_website/assets/MASBO_Logo%202-CZaHQsdR.svg";
function ol() {
  return $(Ju, { className: "logo", to: "/", children: $("img", { className: "icon", src: il, alt: "logo" }) });
}
function al() {
  return $("ul", { className: "mobile-socials gap-15 s-between", children: [{ name: "facebook", icon: $(kt, {}) }, { name: "instagram", icon: $(Pt, {}) }, { name: "twitter", icon: $(Mt, {}) }, { name: "youtube", icon: $(At, {}) }, { name: "telegram", icon: $(Nt, {}) }].map((e19, t2) => $("li", { children: $("a", { href: "#", className: "center-gr", children: e19.icon }) }, t2)) });
}
const sl = [["/about", "About Us"], ["/portfolio", "Portfolio"], ["/team", "Team"], ["/services", "Services"], ["/news", "News"], ["/contact", "Contact"]], ul = [["/technologies", "Technologies"], ["/approach", "Our approach"], ["/projects", "Last projects"], ["/team", "Become a part of team"], ["/investment", "For investors"]];
function ll() {
  return $(w, { children: [$("h5", { className: "static capitalize", children: "hot links:" }), $("ul", { className: "hot-links row wrap gap-10", children: ul.map(([e19, t2]) => $("li", { className: "center-gr", children: $(Ju, { to: e19, children: t2 }) }, e19)) })] });
}
function cl() {
  return $("div", { className: "mobile-footer", children: [$("div", { className: "lang row center-x end-y gap-10", children: [$("span", { className: "fs-14 text-white font-bold up-case", children: "eng" }), $("div", { className: "line" }), $("span", { className: "fs-14 text-white font-bold up-case", children: "ukr" })] }), $(ll, {}), $("div", { className: "row s-between gap-20", children: [$("p", { className: "to-small text-white capitalize", children: [$("span", { className: "font-bold", children: " Address: " }), " Ukraine, Kyiv region, 08200 Irpen,", $("br", {}), " Stelmakh street 9a, office 206"] }), $("p", { className: "to-small text-white capitalize", children: [$("span", { className: "font-bold", children: "Tel:" }), " +3 (096) 029-81-18, +3 (063) 023-81-18", $("br", {}), $("span", { className: "font-bold", children: "Email:" }), " office@masbo.com.ua"] })] }), $(al, {})] });
}
function fl() {
  return $("div", { className: "column s-between", children: [$("ul", { className: "column gap-20", children: ul.map(([e19, t2]) => $("li", { children: $(Ju, { to: e19, children: t2 }) }, e19)) }), $("p", { className: "to-middle text-white capitalize", children: [$("span", { className: "font-bold", children: "Tel:" }), " +3 (096) 029-81-18, +3 (063) 023-81-18", $("br", {}), $("span", { className: "font-bold", children: "Email:" }), " office@masbo.com.ua"] })] });
}
function hl() {
  return $("div", { className: "column s-between", children: [$("ul", { className: "column gap-20", children: sl.map(([e19, t2]) => $("li", { children: $(Ju, { to: e19, children: t2 }) }, e19)) }), $("p", { className: "to-middle text-white capitalize", children: [$("span", { className: "font-bold", children: " Address: " }), " Ukraine, Kyiv region, 08200 Irpen,", $("br", {}), " Stelmakh street 9a, office 206"] })] });
}
const pl = [{ scheme: "/masbo_website/assets/scheme-1-CvbvJQS8.png", title: "private houses" }, { scheme: "/masbo_website/assets/scheme-2-BlV3S1Bv.png", title: "interiors" }, { scheme: "/masbo_website/assets/scheme-3-LDANCKLm.png", title: $(w, { children: ["commercial ", $("br", {}), " real estate"] }) }, { scheme: "/masbo_website/assets/scheme-4-DEwb1c8-.png", title: $(w, { children: ["urban ", $("br", {}), " development"] }) }];
function dl() {
  return $("ul", { className: "schemes", children: pl.map(({ scheme: e19, title: t2 }, n2) => $("li", { className: "column s-between", children: [$("img", { alt: "scheme", src: e19 }), $("h5", { className: "static capitalize", children: t2 })] }, n2)) });
}
function ml() {
  return $("svg", { className: "transition", viewBox: "0 0 3988 3185", preserveAspectRatio: "none", children: $("path", { className: "path", fill: "#E9E9E9", d: "M0 8026.8V3957.5C1307.5 2957.72 2532 2922.72 3988 3960V8026.8C3988 8026.8 3089.5 7146.72 2003 7146.72C916.5 7146.72 0 8026.8 0 8026.8Z", vectorEffect: "non-scaling-stroke" }) });
}
const vl = "M0 4069V-8C2516.76 -7.99976 1409.21 -8.00024 3990 -5.49619V4069C3990 4069 3091.05 3187.25 2004 3187.25C916.96 3187.25 0 4069 0 4069Z", gl = "M0 8026.8V3957.5C1307.5 2957.72 2532 2922.72 3988 3960V8026.8C3988 8026.8 3089.5 7146.72 2003 7146.72C916.5 7146.72 0 8026.8 0 8026.8Z";
function _l({ openTl: e19, closeTl: t2 }) {
  const n2 = Ma("(max-width: 600px)");
  return ka(() => (e19.current = Ca.timeline({ paused: true }).to(".transition path", { duration: 0.8, ease: "power3.in", attr: { d: vl, fill: "#1D1D20" }, onStart: () => {
    var _a3;
    document.body.classList.add("overlay-opened"), (_a3 = za()) == null ? void 0 : _a3.updatePluginOptions("overflow", { open: true });
  } }).to(".transition path", { duration: 0.4, ease: "power3.out", attr: { d: vl } }).from([".menu-overlay .logo", ".close-menu", ".lang", ".menu-overlay p", ".mobile-footer h5"], { opacity: 0, y: -20, duration: 0.5, stagger: 0.2 }, "-=0.5").from(".menu-overlay ul li", { opacity: 0, x: -30, duration: 0.4, stagger: 0.05, onComplete: () => {
    Ca.set(".close-menu", { pointerEvents: "all" });
  } }, "-=1.2"), t2.current = Ca.timeline({ paused: true }).to(".menu-overlay ul li", { opacity: 0, x: 30, duration: 0.3, stagger: 0.05, onStart: () => {
    Ca.set(".close-menu", { pointerEvents: "none" });
  } }, "-=0,7").to([".menu-overlay  .logo", ".close-menu", ".lang", ".menu-overlay p", ".mobile-footer h5"], { opacity: 0, y: -20, duration: 0.3, stagger: 0.1 }, "-=0.4").to(".transition path", { duration: 0.5, ease: "power3.in", attr: { d: "M0 2015.3V-2054C1307.5 -3053.78 2532 -3088.78 3988 -2051.5V2015.3C3988 2015.3 3089.5 1135.22 2003 1135.22C916.5 1135.22 0 2015.3 0 2015.3Z", fill: "#E9E9E9" } }, "-=0.4").to(".transition path", { duration: 0.3, ease: "power3.out", attr: { d: "M0 0.0825195V-3665.86C1499.5 -3667 2271 -3665.86 3989 -3667V0.0825195C3989 0.0825195 2773.81 0.0825195 1979 0.0825195C1129 0.0825195 0 0.0825195 0 0.0825195Z" }, onComplete: () => {
    var _a3;
    Ca.set(".transition path", { attr: { d: gl } }), Ca.set(".close-menu", { clearProps: "pointerEvents" }), (_a3 = za()) == null ? void 0 : _a3.updatePluginOptions("overflow", { open: false }), document.body.classList.remove("overlay-opened");
  } }), () => {
    var _a3, _b2, _c2;
    (_a3 = e19.current) == null ? void 0 : _a3.kill(), (_b2 = t2.current) == null ? void 0 : _b2.kill(), Ca.set(".transition path", { attr: { d: gl, fill: "#E9E9E9" } }), Ca.set(".close-menu", { clearProps: "pointerEvents" }), (_c2 = za()) == null ? void 0 : _c2.updatePluginOptions("overflow", { open: false }), document.body.removeAttribute("class");
  }), { dependencies: [n2, open], revertOnUpdate: true }), Ge($("div", { className: "menu-overlay row center-y", children: [$(ml, {}), $(ol, {}), $("div", { className: "row s-between gap-50", children: [$(hl, {}), !n2 && $(fl, {}), $("div", { className: "column s-between", children: [$(dl, {}), !n2 && $("p", { className: "to-middle text-white capitalize", children: "We offer a full range of services from interior design, individual cottages to the design and construction of residential complexes. For our customers, we are known as a reliable partner with high standards of quality and responsibility." })] }), n2 && $(cl, {})] }), $(Ts, { onClick: () => t2.current.restart() })] }), document.querySelector("#transition-root"));
}
function yl() {
  const e19 = ce(null), t2 = ce(null);
  return $("div", { className: "menu-bars column gap-5 end-y", onClick: () => {
    e19.current.restart();
  }, children: [$("div", {}), $("div", {}), $("div", {}), $(_l, { openTl: e19, closeTl: t2 })] });
}
function bl() {
  return Ma("(min-width: 920px)") && $("nav", { children: $("ul", { className: "row", children: [{ name: "About us", path: "/about" }, { name: "Portfolio", path: "/portfolio" }, { name: "Team", path: "/team" }, { name: "Services", path: "/services" }, { name: "News", path: "/news" }, { name: "Contacts", path: "/contacts" }].map(({ name: e19, path: t2 }) => $("li", { children: $(Ju, { href: t2, className: "text-white fs-14 capitalize", children: e19 }) }, t2)) }) });
}
function wl() {
  const { width: e19, height: t2, isLargeScreen: n2 } = Ia((r2) => {
    Ca.to("header", { scrollTrigger: { scroller: r2.scroller, trigger: "main", start: "3px top", onEnter: () => Ca.set("header", { className: "scrolled", clearProps: "backgroundColor" }), onLeaveBack: () => Ca.set("header", { className: "static", clearProps: "backgroundColor" }) } }), (e19 && t2 || n2) && Ca.to("header", { scrollTrigger: { trigger: ".about", start: "left 0%", end: "right 0%", onEnter: () => {
      Ca.set("header", { backgroundColor: "transparent" });
    }, onEnterBack: () => {
      Ca.set("header", { backgroundColor: "transparent" });
    }, onLeaveBack: () => {
      Ca.set("header", { clearProps: "backgroundColor" });
    }, onLeave: () => {
      Ca.set("header", { clearProps: "backgroundColor" });
    } } });
  });
  return $("header", { children: $("div", { className: "container", children: $("div", { className: "row s-between", children: [$("div", { className: "row center-y", children: [$(ol, {}), $(bl, {})] }), $("div", { className: "row center-y", children: [$("div", { className: "order-project", children: $("span", { className: "fs-14 text-white capitalize", children: "Order the project" }) }), $(yl, {})] })] }) }) });
}
const xl = U({});
function Cl(e19) {
  const t2 = ce(null);
  return null === t2.current && (t2.current = e19()), t2.current;
}
const Tl = U(null), Ol = U({ transformPagePoint: (e19) => e19, isStatic: false, reducedMotion: "never" });
class Sl extends x {
  getSnapshotBeforeUpdate(e19) {
    const t2 = this.props.childRef.current;
    if (t2 && e19.isPresent && !this.props.isPresent) {
      const e20 = t2.offsetParent, n2 = e20 instanceof HTMLElement && e20.offsetWidth || 0, r2 = this.props.sizeRef.current;
      r2.height = t2.offsetHeight || 0, r2.width = t2.offsetWidth || 0, r2.top = t2.offsetTop, r2.left = t2.offsetLeft, r2.right = n2 - r2.width - r2.left;
    }
    return null;
  }
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function El({ children: e19, isPresent: t2, anchorX: n2 }) {
  const r2 = ve(), i2 = ce(null), o2 = ce({ width: 0, height: 0, top: 0, left: 0, right: 0 }), { nonce: a2 } = de(Ol);
  return Ne(() => {
    const { width: e20, height: s2, top: u2, left: l2, right: c2 } = o2.current;
    if (t2 || !i2.current || !e20 || !s2) return;
    const f2 = "left" === n2 ? `left: ${l2}` : `right: ${c2}`;
    i2.current.dataset.motionPopId = r2;
    const h2 = document.createElement("style");
    return a2 && (h2.nonce = a2), document.head.appendChild(h2), h2.sheet && h2.sheet.insertRule(`
          [data-motion-pop-id="${r2}"] {
            position: absolute !important;
            width: ${e20}px !important;
            height: ${s2}px !important;
            ${f2}px !important;
            top: ${u2}px !important;
          }
        `), () => {
      document.head.removeChild(h2);
    };
  }, [t2]), $(Sl, { isPresent: t2, childRef: i2, sizeRef: o2, children: yt(e19, { ref: i2 }) });
}
const Pl = ({ children: e19, initial: t2, isPresent: n2, onExitComplete: r2, custom: i2, presenceAffectsLayout: o2, mode: a2, anchorX: s2 }) => {
  const u2 = Cl(kl), l2 = ve(), c2 = pe((e20) => {
    u2.set(e20, true);
    for (const e21 of u2.values()) if (!e21) return;
    r2 && r2();
  }, [u2, r2]), f2 = he(() => ({ id: l2, initial: t2, isPresent: n2, custom: i2, onExitComplete: c2, register: (e20) => (u2.set(e20, false), () => u2.delete(e20)) }), o2 ? [Math.random(), c2] : [n2, c2]);
  return he(() => {
    u2.forEach((e20, t3) => u2.set(t3, false));
  }, [n2]), ue(() => {
    !n2 && !u2.size && r2 && r2();
  }, [n2]), "popLayout" === a2 && (e19 = $(El, { isPresent: n2, anchorX: s2, children: e19 })), $(Tl.Provider, { value: f2, children: e19 });
};
function kl() {
  return /* @__PURE__ */ new Map();
}
const Ml = (e19) => e19.key || "";
function Nl(e19) {
  const t2 = [];
  return Ie.forEach(e19, (e20) => {
    vt(e20) && t2.push(e20);
  }), t2;
}
const Al = "undefined" != typeof window ? le : ue, Rl = ({ children: e19, custom: t2, initial: n2 = true, onExitComplete: r2, presenceAffectsLayout: i2 = true, mode: o2 = "sync", propagate: a2 = false, anchorX: s2 = "left" }) => {
  const [u2, l2] = function(e20 = true) {
    const t3 = de(Tl);
    if (null === t3) return [true, null];
    const { isPresent: n3, onExitComplete: r3, register: i3 } = t3, o3 = ve();
    ue(() => {
      e20 && i3(o3);
    }, [e20]);
    const a3 = pe(() => e20 && r3 && r3(o3), [o3, r3, e20]);
    return !n3 && r3 ? [false, a3] : [true];
  }(a2), c2 = he(() => Nl(e19), [e19]), f2 = a2 && !u2 ? [] : c2.map(Ml), h2 = ce(true), p2 = ce(c2), d2 = Cl(() => /* @__PURE__ */ new Map()), [m2, v2] = ae(c2), [g2, _2] = ae(c2);
  Al(() => {
    h2.current = false, p2.current = c2;
    for (let e20 = 0; e20 < g2.length; e20++) {
      const t3 = Ml(g2[e20]);
      f2.includes(t3) ? d2.delete(t3) : true !== d2.get(t3) && d2.set(t3, false);
    }
  }, [g2, f2.length, f2.join("-")]);
  const y2 = [];
  if (c2 !== m2) {
    let e20 = [...c2];
    for (let t3 = 0; t3 < g2.length; t3++) {
      const n3 = g2[t3], r3 = Ml(n3);
      f2.includes(r3) || (e20.splice(t3, 0, n3), y2.push(n3));
    }
    return "wait" === o2 && y2.length && (e20 = y2), _2(Nl(e20)), v2(c2), null;
  }
  const { forceRender: b2 } = de(xl);
  return $(w, { children: g2.map((e20) => {
    const m3 = Ml(e20), v3 = !(a2 && !u2) && (c2 === g2 || f2.includes(m3));
    return $(Pl, { isPresent: v3, initial: !(h2.current && !n2) && void 0, custom: v3 ? void 0 : t2, presenceAffectsLayout: i2, mode: o2, onExitComplete: v3 ? void 0 : () => {
      if (!d2.has(m3)) return;
      d2.set(m3, true);
      let e21 = true;
      d2.forEach((t3) => {
        t3 || (e21 = false);
      }), e21 && (null == b2 || b2(), _2(p2.current), a2 && (null == l2 || l2()), r2 && r2());
    }, anchorX: s2, children: e20 }, m3);
  }) });
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Ll = function(e19, t2) {
  return Ll = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e20, t3) {
    e20.__proto__ = t3;
  } || function(e20, t3) {
    for (var n2 in t3) t3.hasOwnProperty(n2) && (e20[n2] = t3[n2]);
  }, Ll(e19, t2);
};
var jl, Dl, zl, Il, Bl, Fl, Vl, Hl, Ul, Wl, $l, Yl, Xl, ql, Zl, Gl, Kl, Jl, Ql = function() {
  return Ql = Object.assign || function(e19) {
    for (var t2, n2 = 1, r2 = arguments.length; n2 < r2; n2++) for (var i2 in t2 = arguments[n2]) Object.prototype.hasOwnProperty.call(t2, i2) && (e19[i2] = t2[i2]);
    return e19;
  }, Ql.apply(this, arguments);
};
function ec(e19, t2, n2, r2) {
  var i2, o2 = arguments.length, a2 = o2 < 3 ? t2 : null === r2 ? r2 = Object.getOwnPropertyDescriptor(t2, n2) : r2;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a2 = Reflect.decorate(e19, t2, n2, r2);
  else for (var s2 = e19.length - 1; s2 >= 0; s2--) (i2 = e19[s2]) && (a2 = (o2 < 3 ? i2(a2) : o2 > 3 ? i2(t2, n2, a2) : i2(t2, n2)) || a2);
  return o2 > 3 && a2 && Object.defineProperty(t2, n2, a2), a2;
}
function tc() {
  for (var e19 = 0, t2 = 0, n2 = arguments.length; t2 < n2; t2++) e19 += arguments[t2].length;
  var r2 = Array(e19), i2 = 0;
  for (t2 = 0; t2 < n2; t2++) for (var o2 = arguments[t2], a2 = 0, s2 = o2.length; a2 < s2; a2++, i2++) r2[i2] = o2[a2];
  return r2;
}
function nc() {
  return Dl ? jl : (Dl = 1, jl = function(e19) {
    try {
      return !!e19();
    } catch (e20) {
      return true;
    }
  });
}
function rc() {
  if (Il) return zl;
  Il = 1;
  var e19 = nc();
  return zl = !e19(function() {
    var e20 = (function() {
    }).bind();
    return "function" != typeof e20 || e20.hasOwnProperty("prototype");
  });
}
function ic() {
  if (Fl) return Bl;
  Fl = 1;
  var e19 = rc(), t2 = Function.prototype, n2 = t2.call, r2 = e19 && t2.bind.bind(n2, n2);
  return Bl = e19 ? r2 : function(e20) {
    return function() {
      return n2.apply(e20, arguments);
    };
  }, Bl;
}
function oc() {
  if (Hl) return Vl;
  Hl = 1;
  var e19 = ic(), t2 = e19({}.toString), n2 = e19("".slice);
  return Vl = function(e20) {
    return n2(t2(e20), 8, -1);
  };
}
function ac() {
  if (Wl) return Ul;
  Wl = 1;
  var e19 = ic(), t2 = nc(), n2 = oc(), r2 = Object, i2 = e19("".split);
  return Ul = t2(function() {
    return !r2("z").propertyIsEnumerable(0);
  }) ? function(e20) {
    return "String" === n2(e20) ? i2(e20, "") : r2(e20);
  } : r2;
}
function sc() {
  return Yl ? $l : (Yl = 1, $l = function(e19) {
    return null == e19;
  });
}
function uc() {
  if (ql) return Xl;
  ql = 1;
  var e19 = sc(), t2 = TypeError;
  return Xl = function(n2) {
    if (e19(n2)) throw new t2("Can't call method on " + n2);
    return n2;
  };
}
function lc() {
  if (Gl) return Zl;
  Gl = 1;
  var e19 = ac(), t2 = uc();
  return Zl = function(n2) {
    return e19(t2(n2));
  };
}
function cc() {
  if (Jl) return Kl;
  Jl = 1;
  var e19 = function(e20) {
    return e20 && e20.Math === Math && e20;
  };
  return Kl = e19("object" == typeof globalThis && globalThis) || e19("object" == typeof window && window) || e19("object" == typeof self && self) || e19("object" == typeof Wa && Wa) || e19("object" == typeof Kl && Kl) || /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")();
}
var fc, hc, pc, dc, mc, vc, gc, _c, yc, bc, wc, xc, Cc, Tc, Oc, Sc, Ec, Pc, kc, Mc, Nc, Ac, Rc, Lc, jc, Dc, zc, Ic, Bc, Fc = { exports: {} };
function Vc() {
  return hc ? fc : (hc = 1, fc = false);
}
function Hc() {
  if (dc) return pc;
  dc = 1;
  var e19 = cc(), t2 = Object.defineProperty;
  return pc = function(n2, r2) {
    try {
      t2(e19, n2, { value: r2, configurable: true, writable: true });
    } catch (t3) {
      e19[n2] = r2;
    }
    return r2;
  };
}
function Uc() {
  if (mc) return Fc.exports;
  mc = 1;
  var e19 = Vc(), t2 = cc(), n2 = Hc(), r2 = "__core-js_shared__", i2 = Fc.exports = t2[r2] || n2(r2, {});
  return (i2.versions || (i2.versions = [])).push({ version: "3.40.0", mode: e19 ? "pure" : "global", copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.40.0/LICENSE", source: "https://github.com/zloirock/core-js" }), Fc.exports;
}
function Wc() {
  if (gc) return vc;
  gc = 1;
  var e19 = Uc();
  return vc = function(t2, n2) {
    return e19[t2] || (e19[t2] = n2 || {});
  };
}
function $c() {
  if (yc) return _c;
  yc = 1;
  var e19 = uc(), t2 = Object;
  return _c = function(n2) {
    return t2(e19(n2));
  };
}
function Yc() {
  if (wc) return bc;
  wc = 1;
  var e19 = ic(), t2 = $c(), n2 = e19({}.hasOwnProperty);
  return bc = Object.hasOwn || function(e20, r2) {
    return n2(t2(e20), r2);
  };
}
function Xc() {
  if (Cc) return xc;
  Cc = 1;
  var e19 = ic(), t2 = 0, n2 = Math.random(), r2 = e19(1 .toString);
  return xc = function(e20) {
    return "Symbol(" + (void 0 === e20 ? "" : e20) + ")_" + r2(++t2 + n2, 36);
  };
}
function qc() {
  if (Ec) return Sc;
  Ec = 1;
  var e19, t2, n2 = cc(), r2 = function() {
    if (Oc) return Tc;
    Oc = 1;
    var e20 = cc().navigator, t3 = e20 && e20.userAgent;
    return Tc = t3 ? String(t3) : "";
  }(), i2 = n2.process, o2 = n2.Deno, a2 = i2 && i2.versions || o2 && o2.version, s2 = a2 && a2.v8;
  return s2 && (t2 = (e19 = s2.split("."))[0] > 0 && e19[0] < 4 ? 1 : +(e19[0] + e19[1])), !t2 && r2 && (!(e19 = r2.match(/Edge\/(\d+)/)) || e19[1] >= 74) && (e19 = r2.match(/Chrome\/(\d+)/)) && (t2 = +e19[1]), Sc = t2;
}
function Zc() {
  if (kc) return Pc;
  kc = 1;
  var e19 = qc(), t2 = nc(), n2 = cc().String;
  return Pc = !!Object.getOwnPropertySymbols && !t2(function() {
    var t3 = Symbol("symbol detection");
    return !n2(t3) || !(Object(t3) instanceof Symbol) || !Symbol.sham && e19 && e19 < 41;
  });
}
function Gc() {
  if (Nc) return Mc;
  Nc = 1;
  var e19 = Zc();
  return Mc = e19 && !Symbol.sham && "symbol" == typeof Symbol.iterator;
}
function Kc() {
  if (Rc) return Ac;
  Rc = 1;
  var e19 = cc(), t2 = Wc(), n2 = Yc(), r2 = Xc(), i2 = Zc(), o2 = Gc(), a2 = e19.Symbol, s2 = t2("wks"), u2 = o2 ? a2.for || a2 : a2 && a2.withoutSetter || r2;
  return Ac = function(e20) {
    return n2(s2, e20) || (s2[e20] = i2 && n2(a2, e20) ? a2[e20] : u2("Symbol." + e20)), s2[e20];
  };
}
function Jc() {
  if (jc) return Lc;
  jc = 1;
  var e19 = "object" == typeof document && document.all;
  return Lc = void 0 === e19 && void 0 !== e19 ? function(t2) {
    return "function" == typeof t2 || t2 === e19;
  } : function(e20) {
    return "function" == typeof e20;
  };
}
function Qc() {
  if (zc) return Dc;
  zc = 1;
  var e19 = Jc();
  return Dc = function(t2) {
    return "object" == typeof t2 ? null !== t2 : e19(t2);
  };
}
function ef() {
  if (Bc) return Ic;
  Bc = 1;
  var e19 = Qc(), t2 = String, n2 = TypeError;
  return Ic = function(r2) {
    if (e19(r2)) return r2;
    throw new n2(t2(r2) + " is not an object");
  };
}
var tf, nf, rf, of, af = {};
function sf() {
  if (nf) return tf;
  nf = 1;
  var e19 = nc();
  return tf = !e19(function() {
    return 7 !== Object.defineProperty({}, 1, { get: function() {
      return 7;
    } })[1];
  });
}
function uf() {
  if (of) return rf;
  of = 1;
  var e19 = sf(), t2 = nc();
  return rf = e19 && t2(function() {
    return 42 !== Object.defineProperty(function() {
    }, "prototype", { value: 42, writable: false }).prototype;
  });
}
var lf, cf, ff, hf, pf, df, mf, vf, gf, _f, yf, bf, wf, xf, Cf, Tf, Of, Sf, Ef, Pf, kf, Mf, Nf, Af, Rf, Lf, jf, Df, zf, If, Bf, Ff, Vf, Hf, Uf, Wf, $f, Yf, Xf, qf, Zf, Gf, Kf, Jf, Qf, eh, th, nh, rh, ih, oh, ah, sh, uh, lh, ch, fh, hh, ph, dh, mh, vh, gh, _h, yh = {};
function bh() {
  if (cf) return lf;
  cf = 1;
  var e19 = cc(), t2 = Qc(), n2 = e19.document, r2 = t2(n2) && t2(n2.createElement);
  return lf = function(e20) {
    return r2 ? n2.createElement(e20) : {};
  };
}
function wh() {
  if (hf) return ff;
  hf = 1;
  var e19 = sf(), t2 = nc(), n2 = bh();
  return ff = !e19 && !t2(function() {
    return 7 !== Object.defineProperty(n2("div"), "a", { get: function() {
      return 7;
    } }).a;
  });
}
function xh() {
  if (df) return pf;
  df = 1;
  var e19 = rc(), t2 = Function.prototype.call;
  return pf = e19 ? t2.bind(t2) : function() {
    return t2.apply(t2, arguments);
  }, pf;
}
function Ch() {
  if (vf) return mf;
  vf = 1;
  var e19 = cc(), t2 = Jc();
  return mf = function(n2, r2) {
    return arguments.length < 2 ? (i2 = e19[n2], t2(i2) ? i2 : void 0) : e19[n2] && e19[n2][r2];
    var i2;
  }, mf;
}
function Th() {
  if (_f) return gf;
  _f = 1;
  var e19 = ic();
  return gf = e19({}.isPrototypeOf);
}
function Oh() {
  if (bf) return yf;
  bf = 1;
  var e19 = Ch(), t2 = Jc(), n2 = Th(), r2 = Gc(), i2 = Object;
  return yf = r2 ? function(e20) {
    return "symbol" == typeof e20;
  } : function(r3) {
    var o2 = e19("Symbol");
    return t2(o2) && n2(o2.prototype, i2(r3));
  };
}
function Sh() {
  if (xf) return wf;
  xf = 1;
  var e19 = String;
  return wf = function(t2) {
    try {
      return e19(t2);
    } catch (e20) {
      return "Object";
    }
  };
}
function Eh() {
  if (Tf) return Cf;
  Tf = 1;
  var e19 = Jc(), t2 = Sh(), n2 = TypeError;
  return Cf = function(r2) {
    if (e19(r2)) return r2;
    throw new n2(t2(r2) + " is not a function");
  };
}
function Ph() {
  if (Sf) return Of;
  Sf = 1;
  var e19 = Eh(), t2 = sc();
  return Of = function(n2, r2) {
    var i2 = n2[r2];
    return t2(i2) ? void 0 : e19(i2);
  }, Of;
}
function kh() {
  if (Pf) return Ef;
  Pf = 1;
  var e19 = xh(), t2 = Jc(), n2 = Qc(), r2 = TypeError;
  return Ef = function(i2, o2) {
    var a2, s2;
    if ("string" === o2 && t2(a2 = i2.toString) && !n2(s2 = e19(a2, i2))) return s2;
    if (t2(a2 = i2.valueOf) && !n2(s2 = e19(a2, i2))) return s2;
    if ("string" !== o2 && t2(a2 = i2.toString) && !n2(s2 = e19(a2, i2))) return s2;
    throw new r2("Can't convert object to primitive value");
  }, Ef;
}
function Mh() {
  if (Mf) return kf;
  Mf = 1;
  var e19 = xh(), t2 = Qc(), n2 = Oh(), r2 = Ph(), i2 = kh(), o2 = Kc(), a2 = TypeError, s2 = o2("toPrimitive");
  return kf = function(o3, u2) {
    if (!t2(o3) || n2(o3)) return o3;
    var l2, c2 = r2(o3, s2);
    if (c2) {
      if (void 0 === u2 && (u2 = "default"), l2 = e19(c2, o3, u2), !t2(l2) || n2(l2)) return l2;
      throw new a2("Can't convert object to primitive value");
    }
    return void 0 === u2 && (u2 = "number"), i2(o3, u2);
  };
}
function Nh() {
  if (Af) return Nf;
  Af = 1;
  var e19 = Mh(), t2 = Oh();
  return Nf = function(n2) {
    var r2 = e19(n2, "string");
    return t2(r2) ? r2 : r2 + "";
  };
}
function Ah() {
  if (Rf) return yh;
  Rf = 1;
  var e19 = sf(), t2 = wh(), n2 = uf(), r2 = ef(), i2 = Nh(), o2 = TypeError, a2 = Object.defineProperty, s2 = Object.getOwnPropertyDescriptor, u2 = "enumerable", l2 = "configurable", c2 = "writable";
  return yh.f = e19 ? n2 ? function(e20, t3, n3) {
    if (r2(e20), t3 = i2(t3), r2(n3), "function" == typeof e20 && "prototype" === t3 && "value" in n3 && c2 in n3 && !n3[c2]) {
      var o3 = s2(e20, t3);
      o3 && o3[c2] && (e20[t3] = n3.value, n3 = { configurable: l2 in n3 ? n3[l2] : o3[l2], enumerable: u2 in n3 ? n3[u2] : o3[u2], writable: false });
    }
    return a2(e20, t3, n3);
  } : a2 : function(e20, n3, s3) {
    if (r2(e20), n3 = i2(n3), r2(s3), t2) try {
      return a2(e20, n3, s3);
    } catch (e21) {
    }
    if ("get" in s3 || "set" in s3) throw new o2("Accessors not supported");
    return "value" in s3 && (e20[n3] = s3.value), e20;
  }, yh;
}
function Rh() {
  if (zf) return Df;
  zf = 1;
  var e19 = function() {
    if (jf) return Lf;
    jf = 1;
    var e20 = Math.ceil, t2 = Math.floor;
    return Lf = Math.trunc || function(n2) {
      var r2 = +n2;
      return (r2 > 0 ? t2 : e20)(r2);
    }, Lf;
  }();
  return Df = function(t2) {
    var n2 = +t2;
    return n2 != n2 || 0 === n2 ? 0 : e19(n2);
  };
}
function Lh() {
  if (Bf) return If;
  Bf = 1;
  var e19 = Rh(), t2 = Math.max, n2 = Math.min;
  return If = function(r2, i2) {
    var o2 = e19(r2);
    return o2 < 0 ? t2(o2 + i2, 0) : n2(o2, i2);
  };
}
function jh() {
  if (Vf) return Ff;
  Vf = 1;
  var e19 = Rh(), t2 = Math.min;
  return Ff = function(n2) {
    var r2 = e19(n2);
    return r2 > 0 ? t2(r2, 9007199254740991) : 0;
  };
}
function Dh() {
  if (Uf) return Hf;
  Uf = 1;
  var e19 = jh();
  return Hf = function(t2) {
    return e19(t2.length);
  };
}
function zh() {
  return Xf ? Yf : (Xf = 1, Yf = {});
}
function Ih() {
  if (Zf) return qf;
  Zf = 1;
  var e19 = ic(), t2 = Yc(), n2 = lc(), r2 = function() {
    if ($f) return Wf;
    $f = 1;
    var e20 = lc(), t3 = Lh(), n3 = Dh(), r3 = function(r4) {
      return function(i3, o3, a2) {
        var s2 = e20(i3), u2 = n3(s2);
        if (0 === u2) return !r4 && -1;
        var l2, c2 = t3(a2, u2);
        if (r4 && o3 != o3) {
          for (; u2 > c2; ) if ((l2 = s2[c2++]) != l2) return true;
        } else for (; u2 > c2; c2++) if ((r4 || c2 in s2) && s2[c2] === o3) return r4 || c2 || 0;
        return !r4 && -1;
      };
    };
    return Wf = { includes: r3(true), indexOf: r3(false) };
  }().indexOf, i2 = zh(), o2 = e19([].push);
  return qf = function(e20, a2) {
    var s2, u2 = n2(e20), l2 = 0, c2 = [];
    for (s2 in u2) !t2(i2, s2) && t2(u2, s2) && o2(c2, s2);
    for (; a2.length > l2; ) t2(u2, s2 = a2[l2++]) && (~r2(c2, s2) || o2(c2, s2));
    return c2;
  }, qf;
}
function Bh() {
  return Kf ? Gf : (Kf = 1, Gf = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]);
}
function Fh() {
  if (Qf) return Jf;
  Qf = 1;
  var e19 = Ih(), t2 = Bh();
  return Jf = Object.keys || function(n2) {
    return e19(n2, t2);
  }, Jf;
}
function Vh() {
  if (nh) return th;
  nh = 1;
  var e19 = Ch();
  return th = e19("document", "documentElement");
}
function Hh() {
  if (ih) return rh;
  ih = 1;
  var e19 = Wc(), t2 = Xc(), n2 = e19("keys");
  return rh = function(e20) {
    return n2[e20] || (n2[e20] = t2(e20));
  };
}
function Uh() {
  if (ah) return oh;
  ah = 1;
  var e19, t2 = ef(), n2 = function() {
    if (eh) return af;
    eh = 1;
    var e20 = sf(), t3 = uf(), n3 = Ah(), r3 = ef(), i3 = lc(), o3 = Fh();
    return af.f = e20 && !t3 ? Object.defineProperties : function(e21, t4) {
      r3(e21);
      for (var a3, s3 = i3(t4), u3 = o3(t4), l3 = u3.length, c3 = 0; l3 > c3; ) n3.f(e21, a3 = u3[c3++], s3[a3]);
      return e21;
    }, af;
  }(), r2 = Bh(), i2 = zh(), o2 = Vh(), a2 = bh(), s2 = Hh(), u2 = "prototype", l2 = "script", c2 = s2("IE_PROTO"), f2 = function() {
  }, h2 = function(e20) {
    return "<" + l2 + ">" + e20 + "</" + l2 + ">";
  }, p2 = function(e20) {
    e20.write(h2("")), e20.close();
    var t3 = e20.parentWindow.Object;
    return e20 = null, t3;
  }, d2 = function() {
    try {
      e19 = new ActiveXObject("htmlfile");
    } catch (e20) {
    }
    var t3, n3, i3;
    d2 = "undefined" != typeof document ? document.domain && e19 ? p2(e19) : (n3 = a2("iframe"), i3 = "java" + l2 + ":", n3.style.display = "none", o2.appendChild(n3), n3.src = String(i3), (t3 = n3.contentWindow.document).open(), t3.write(h2("document.F=Object")), t3.close(), t3.F) : p2(e19);
    for (var s3 = r2.length; s3--; ) delete d2[u2][r2[s3]];
    return d2();
  };
  return i2[c2] = true, oh = Object.create || function(e20, r3) {
    var i3;
    return null !== e20 ? (f2[u2] = t2(e20), i3 = new f2(), f2[u2] = null, i3[c2] = e20) : i3 = d2(), void 0 === r3 ? i3 : n2.f(i3, r3);
  }, oh;
}
function Wh() {
  if (uh) return sh;
  uh = 1;
  var e19 = Kc(), t2 = Uh(), n2 = Ah().f, r2 = e19("unscopables"), i2 = Array.prototype;
  return void 0 === i2[r2] && n2(i2, r2, { configurable: true, value: t2(null) }), sh = function(e20) {
    i2[r2][e20] = true;
  };
}
function $h() {
  return ch ? lh : (ch = 1, lh = {});
}
function Yh() {
  if (hh) return fh;
  hh = 1;
  var e19 = cc(), t2 = Jc(), n2 = e19.WeakMap;
  return fh = t2(n2) && /native code/.test(String(n2));
}
function Xh() {
  return dh ? ph : (dh = 1, ph = function(e19, t2) {
    return { enumerable: !(1 & e19), configurable: !(2 & e19), writable: !(4 & e19), value: t2 };
  });
}
function qh() {
  if (vh) return mh;
  vh = 1;
  var e19 = sf(), t2 = Ah(), n2 = Xh();
  return mh = e19 ? function(e20, r2, i2) {
    return t2.f(e20, r2, n2(1, i2));
  } : function(e20, t3, n3) {
    return e20[t3] = n3, e20;
  };
}
function Zh() {
  if (_h) return gh;
  _h = 1;
  var e19, t2, n2, r2 = Yh(), i2 = cc(), o2 = Qc(), a2 = qh(), s2 = Yc(), u2 = Uc(), l2 = Hh(), c2 = zh(), f2 = "Object already initialized", h2 = i2.TypeError, p2 = i2.WeakMap;
  if (r2 || u2.state) {
    var d2 = u2.state || (u2.state = new p2());
    d2.get = d2.get, d2.has = d2.has, d2.set = d2.set, e19 = function(e20, t3) {
      if (d2.has(e20)) throw new h2(f2);
      return t3.facade = e20, d2.set(e20, t3), t3;
    }, t2 = function(e20) {
      return d2.get(e20) || {};
    }, n2 = function(e20) {
      return d2.has(e20);
    };
  } else {
    var m2 = l2("state");
    c2[m2] = true, e19 = function(e20, t3) {
      if (s2(e20, m2)) throw new h2(f2);
      return t3.facade = e20, a2(e20, m2, t3), t3;
    }, t2 = function(e20) {
      return s2(e20, m2) ? e20[m2] : {};
    }, n2 = function(e20) {
      return s2(e20, m2);
    };
  }
  return gh = { set: e19, get: t2, has: n2, enforce: function(r3) {
    return n2(r3) ? t2(r3) : e19(r3, {});
  }, getterFor: function(e20) {
    return function(n3) {
      var r3;
      if (!o2(n3) || (r3 = t2(n3)).type !== e20) throw new h2("Incompatible receiver, " + e20 + " required");
      return r3;
    };
  } };
}
var Gh, Kh, Jh = {}, Qh = {};
function ep() {
  if (Gh) return Qh;
  Gh = 1;
  var e19 = {}.propertyIsEnumerable, t2 = Object.getOwnPropertyDescriptor, n2 = t2 && !e19.call({ 1: 2 }, 1);
  return Qh.f = n2 ? function(e20) {
    var n3 = t2(this, e20);
    return !!n3 && n3.enumerable;
  } : e19, Qh;
}
function tp() {
  if (Kh) return Jh;
  Kh = 1;
  var e19 = sf(), t2 = xh(), n2 = ep(), r2 = Xh(), i2 = lc(), o2 = Nh(), a2 = Yc(), s2 = wh(), u2 = Object.getOwnPropertyDescriptor;
  return Jh.f = e19 ? u2 : function(e20, l2) {
    if (e20 = i2(e20), l2 = o2(l2), s2) try {
      return u2(e20, l2);
    } catch (e21) {
    }
    if (a2(e20, l2)) return r2(!t2(n2.f, e20, l2), e20[l2]);
  }, Jh;
}
var np, rp, ip, op, ap, sp, up, lp = { exports: {} };
function cp() {
  if (rp) return np;
  rp = 1;
  var e19 = sf(), t2 = Yc(), n2 = Function.prototype, r2 = e19 && Object.getOwnPropertyDescriptor, i2 = t2(n2, "name"), o2 = i2 && "something" === (function() {
  }).name, a2 = i2 && (!e19 || e19 && r2(n2, "name").configurable);
  return np = { EXISTS: i2, PROPER: o2, CONFIGURABLE: a2 };
}
function fp() {
  if (op) return ip;
  op = 1;
  var e19 = ic(), t2 = Jc(), n2 = Uc(), r2 = e19(Function.toString);
  return t2(n2.inspectSource) || (n2.inspectSource = function(e20) {
    return r2(e20);
  }), ip = n2.inspectSource;
}
function hp() {
  if (ap) return lp.exports;
  ap = 1;
  var e19 = ic(), t2 = nc(), n2 = Jc(), r2 = Yc(), i2 = sf(), o2 = cp().CONFIGURABLE, a2 = fp(), s2 = Zh(), u2 = s2.enforce, l2 = s2.get, c2 = String, f2 = Object.defineProperty, h2 = e19("".slice), p2 = e19("".replace), d2 = e19([].join), m2 = i2 && !t2(function() {
    return 8 !== f2(function() {
    }, "length", { value: 8 }).length;
  }), v2 = String(String).split("String"), g2 = lp.exports = function(e20, t3, n3) {
    "Symbol(" === h2(c2(t3), 0, 7) && (t3 = "[" + p2(c2(t3), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), n3 && n3.getter && (t3 = "get " + t3), n3 && n3.setter && (t3 = "set " + t3), (!r2(e20, "name") || o2 && e20.name !== t3) && (i2 ? f2(e20, "name", { value: t3, configurable: true }) : e20.name = t3), m2 && n3 && r2(n3, "arity") && e20.length !== n3.arity && f2(e20, "length", { value: n3.arity });
    try {
      n3 && r2(n3, "constructor") && n3.constructor ? i2 && f2(e20, "prototype", { writable: false }) : e20.prototype && (e20.prototype = void 0);
    } catch (e21) {
    }
    var a3 = u2(e20);
    return r2(a3, "source") || (a3.source = d2(v2, "string" == typeof t3 ? t3 : "")), e20;
  };
  return Function.prototype.toString = g2(function() {
    return n2(this) && l2(this).source || a2(this);
  }, "toString"), lp.exports;
}
function pp() {
  if (up) return sp;
  up = 1;
  var e19 = Jc(), t2 = Ah(), n2 = hp(), r2 = Hc();
  return sp = function(i2, o2, a2, s2) {
    s2 || (s2 = {});
    var u2 = s2.enumerable, l2 = void 0 !== s2.name ? s2.name : o2;
    if (e19(a2) && n2(a2, l2, s2), s2.global) u2 ? i2[o2] = a2 : r2(o2, a2);
    else {
      try {
        s2.unsafe ? i2[o2] && (u2 = true) : delete i2[o2];
      } catch (e20) {
      }
      u2 ? i2[o2] = a2 : t2.f(i2, o2, { value: a2, enumerable: false, configurable: !s2.nonConfigurable, writable: !s2.nonWritable });
    }
    return i2;
  }, sp;
}
var dp, mp = {};
function vp() {
  if (dp) return mp;
  dp = 1;
  var e19 = Ih(), t2 = Bh().concat("length", "prototype");
  return mp.f = Object.getOwnPropertyNames || function(n2) {
    return e19(n2, t2);
  }, mp;
}
var gp, _p, yp, bp, wp, xp, Cp, Tp, Op, Sp, Ep, Pp, kp, Mp, Np, Ap, Rp, Lp, jp, Dp, zp, Ip, Bp, Fp, Vp, Hp, Up, Wp, $p, Yp, Xp, qp, Zp, Gp = {};
function Kp() {
  return gp || (gp = 1, Gp.f = Object.getOwnPropertySymbols), Gp;
}
function Jp() {
  if (yp) return _p;
  yp = 1;
  var e19 = Ch(), t2 = ic(), n2 = vp(), r2 = Kp(), i2 = ef(), o2 = t2([].concat);
  return _p = e19("Reflect", "ownKeys") || function(e20) {
    var t3 = n2.f(i2(e20)), a2 = r2.f;
    return a2 ? o2(t3, a2(e20)) : t3;
  };
}
function Qp() {
  if (wp) return bp;
  wp = 1;
  var e19 = Yc(), t2 = Jp(), n2 = tp(), r2 = Ah();
  return bp = function(i2, o2, a2) {
    for (var s2 = t2(o2), u2 = r2.f, l2 = n2.f, c2 = 0; c2 < s2.length; c2++) {
      var f2 = s2[c2];
      e19(i2, f2) || a2 && e19(a2, f2) || u2(i2, f2, l2(o2, f2));
    }
  }, bp;
}
function ed() {
  if (Cp) return xp;
  Cp = 1;
  var e19 = nc(), t2 = Jc(), n2 = /#|\.prototype\./, r2 = function(n3, r3) {
    var u2 = o2[i2(n3)];
    return u2 === s2 || u2 !== a2 && (t2(r3) ? e19(r3) : !!r3);
  }, i2 = r2.normalize = function(e20) {
    return String(e20).replace(n2, ".").toLowerCase();
  }, o2 = r2.data = {}, a2 = r2.NATIVE = "N", s2 = r2.POLYFILL = "P";
  return xp = r2;
}
function td() {
  if (Op) return Tp;
  Op = 1;
  var e19 = cc(), t2 = tp().f, n2 = qh(), r2 = pp(), i2 = Hc(), o2 = Qp(), a2 = ed();
  return Tp = function(s2, u2) {
    var l2, c2, f2, h2, p2, d2 = s2.target, m2 = s2.global, v2 = s2.stat;
    if (l2 = m2 ? e19 : v2 ? e19[d2] || i2(d2, {}) : e19[d2] && e19[d2].prototype) for (c2 in u2) {
      if (h2 = u2[c2], f2 = s2.dontCallGetSet ? (p2 = t2(l2, c2)) && p2.value : l2[c2], !a2(m2 ? c2 : d2 + (v2 ? "." : "#") + c2, s2.forced) && void 0 !== f2) {
        if (typeof h2 == typeof f2) continue;
        o2(h2, f2);
      }
      (s2.sham || f2 && f2.sham) && n2(h2, "sham", true), r2(l2, c2, h2, s2);
    }
  };
}
function nd() {
  if (kp) return Pp;
  kp = 1;
  var e19 = Yc(), t2 = Jc(), n2 = $c(), r2 = Hh(), i2 = function() {
    if (Ep) return Sp;
    Ep = 1;
    var e20 = nc();
    return Sp = !e20(function() {
      function e21() {
      }
      return e21.prototype.constructor = null, Object.getPrototypeOf(new e21()) !== e21.prototype;
    }), Sp;
  }(), o2 = r2("IE_PROTO"), a2 = Object, s2 = a2.prototype;
  return Pp = i2 ? a2.getPrototypeOf : function(r3) {
    var i3 = n2(r3);
    if (e19(i3, o2)) return i3[o2];
    var u2 = i3.constructor;
    return t2(u2) && i3 instanceof u2 ? u2.prototype : i3 instanceof a2 ? s2 : null;
  }, Pp;
}
function rd() {
  if (Np) return Mp;
  Np = 1;
  var e19, t2, n2, r2 = nc(), i2 = Jc(), o2 = Qc(), a2 = Uh(), s2 = nd(), u2 = pp(), l2 = Kc(), c2 = Vc(), f2 = l2("iterator"), h2 = false;
  return [].keys && ("next" in (n2 = [].keys()) ? (t2 = s2(s2(n2))) !== Object.prototype && (e19 = t2) : h2 = true), !o2(e19) || r2(function() {
    var t3 = {};
    return e19[f2].call(t3) !== t3;
  }) ? e19 = {} : c2 && (e19 = a2(e19)), i2(e19[f2]) || u2(e19, f2, function() {
    return this;
  }), Mp = { IteratorPrototype: e19, BUGGY_SAFARI_ITERATORS: h2 };
}
function id() {
  if (Rp) return Ap;
  Rp = 1;
  var e19 = Ah().f, t2 = Yc(), n2 = Kc()("toStringTag");
  return Ap = function(r2, i2, o2) {
    r2 && !o2 && (r2 = r2.prototype), r2 && !t2(r2, n2) && e19(r2, n2, { configurable: true, value: i2 });
  };
}
function od() {
  if (zp) return Dp;
  zp = 1;
  var e19 = ic(), t2 = Eh();
  return Dp = function(n2, r2, i2) {
    try {
      return e19(t2(Object.getOwnPropertyDescriptor(n2, r2)[i2]));
    } catch (e20) {
    }
  };
}
function ad() {
  if (Bp) return Ip;
  Bp = 1;
  var e19 = Qc();
  return Ip = function(t2) {
    return e19(t2) || null === t2;
  };
}
function sd() {
  if (Vp) return Fp;
  Vp = 1;
  var e19 = ad(), t2 = String, n2 = TypeError;
  return Fp = function(r2) {
    if (e19(r2)) return r2;
    throw new n2("Can't set " + t2(r2) + " as a prototype");
  };
}
function ud() {
  if (Up) return Hp;
  Up = 1;
  var e19 = od(), t2 = Qc(), n2 = uc(), r2 = sd();
  return Hp = Object.setPrototypeOf || ("__proto__" in {} ? function() {
    var i2, o2 = false, a2 = {};
    try {
      (i2 = e19(Object.prototype, "__proto__", "set"))(a2, []), o2 = a2 instanceof Array;
    } catch (e20) {
    }
    return function(e20, a3) {
      return n2(e20), r2(a3), t2(e20) ? (o2 ? i2(e20, a3) : e20.__proto__ = a3, e20) : e20;
    };
  }() : void 0), Hp;
}
function ld() {
  if ($p) return Wp;
  $p = 1;
  var e19 = td(), t2 = xh(), n2 = Vc(), r2 = cp(), i2 = Jc(), o2 = function() {
    if (jp) return Lp;
    jp = 1;
    var e20 = rd().IteratorPrototype, t3 = Uh(), n3 = Xh(), r3 = id(), i3 = $h(), o3 = function() {
      return this;
    };
    return Lp = function(a3, s3, u3, l3) {
      var c3 = s3 + " Iterator";
      return a3.prototype = t3(e20, { next: n3(+!l3, u3) }), r3(a3, c3, false, true), i3[c3] = o3, a3;
    };
  }(), a2 = nd(), s2 = ud(), u2 = id(), l2 = qh(), c2 = pp(), f2 = Kc(), h2 = $h(), p2 = rd(), d2 = r2.PROPER, m2 = r2.CONFIGURABLE, v2 = p2.IteratorPrototype, g2 = p2.BUGGY_SAFARI_ITERATORS, _2 = f2("iterator"), y2 = "keys", b2 = "values", w2 = "entries", x2 = function() {
    return this;
  };
  return Wp = function(r3, f3, p3, C2, T2, O2, S2) {
    o2(p3, f3, C2);
    var E2, P2, k2, M2 = function(e20) {
      if (e20 === T2 && j2) return j2;
      if (!g2 && e20 && e20 in R2) return R2[e20];
      switch (e20) {
        case y2:
        case b2:
        case w2:
          return function() {
            return new p3(this, e20);
          };
      }
      return function() {
        return new p3(this);
      };
    }, N2 = f3 + " Iterator", A2 = false, R2 = r3.prototype, L2 = R2[_2] || R2["@@iterator"] || T2 && R2[T2], j2 = !g2 && L2 || M2(T2), D2 = "Array" === f3 && R2.entries || L2;
    if (D2 && (E2 = a2(D2.call(new r3()))) !== Object.prototype && E2.next && (n2 || a2(E2) === v2 || (s2 ? s2(E2, v2) : i2(E2[_2]) || c2(E2, _2, x2)), u2(E2, N2, true, true), n2 && (h2[N2] = x2)), d2 && T2 === b2 && L2 && L2.name !== b2 && (!n2 && m2 ? l2(R2, "name", b2) : (A2 = true, j2 = function() {
      return t2(L2, this);
    })), T2) if (P2 = { values: M2(b2), keys: O2 ? j2 : M2(y2), entries: M2(w2) }, S2) for (k2 in P2) (g2 || A2 || !(k2 in R2)) && c2(R2, k2, P2[k2]);
    else e19({ target: f3, proto: true, forced: g2 || A2 }, P2);
    return n2 && !S2 || R2[_2] === j2 || c2(R2, _2, j2, { name: T2 }), h2[f3] = j2, P2;
  };
}
function cd() {
  return Xp ? Yp : (Xp = 1, Yp = function(e19, t2) {
    return { value: e19, done: t2 };
  });
}
function fd() {
  if (Zp) return qp;
  Zp = 1;
  var e19 = lc(), t2 = Wh(), n2 = $h(), r2 = Zh(), i2 = Ah().f, o2 = ld(), a2 = cd(), s2 = Vc(), u2 = sf(), l2 = "Array Iterator", c2 = r2.set, f2 = r2.getterFor(l2);
  qp = o2(Array, "Array", function(t3, n3) {
    c2(this, { type: l2, target: e19(t3), index: 0, kind: n3 });
  }, function() {
    var e20 = f2(this), t3 = e20.target, n3 = e20.index++;
    if (!t3 || n3 >= t3.length) return e20.target = null, a2(void 0, true);
    switch (e20.kind) {
      case "keys":
        return a2(n3, false);
      case "values":
        return a2(t3[n3], false);
    }
    return a2([n3, t3[n3]], false);
  }, "values");
  var h2 = n2.Arguments = n2.Array;
  if (t2("keys"), t2("values"), t2("entries"), !s2 && u2 && "values" !== h2.name) try {
    i2(h2, "name", { value: "values" });
  } catch (e20) {
  }
  return qp;
}
var hd, pd, dd, md, vd, gd, _d, yd, bd, wd, xd, Cd, Td, Od, Sd, Ed, Pd, kd, Md, Nd, Ad, Rd, Ld, jd, Dd, zd, Id, Bd, Fd, Vd, Hd, Ud, Wd, $d, Yd, Xd, qd, Zd, Gd, Kd, Jd, Qd, em, tm, nm, rm, im = {}, om = { exports: {} }, am = {};
function sm() {
  if (pd) return hd;
  pd = 1;
  var e19 = ic();
  return hd = e19([].slice);
}
function um() {
  if (dd) return am;
  dd = 1;
  var e19 = oc(), t2 = lc(), n2 = vp().f, r2 = sm(), i2 = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
  return am.f = function(o2) {
    return i2 && "Window" === e19(o2) ? function(e20) {
      try {
        return n2(e20);
      } catch (e21) {
        return r2(i2);
      }
    }(o2) : n2(t2(o2));
  }, am;
}
function lm() {
  if (_d) return gd;
  _d = 1;
  var e19 = nc(), t2 = Qc(), n2 = oc(), r2 = function() {
    if (vd) return md;
    vd = 1;
    var e20 = nc();
    return md = e20(function() {
      if ("function" == typeof ArrayBuffer) {
        var e21 = new ArrayBuffer(8);
        Object.isExtensible(e21) && Object.defineProperty(e21, "a", { value: 8 });
      }
    });
  }(), i2 = Object.isExtensible, o2 = e19(function() {
  });
  return gd = o2 || r2 ? function(e20) {
    return !!t2(e20) && ((!r2 || "ArrayBuffer" !== n2(e20)) && (!i2 || i2(e20)));
  } : i2;
}
function cm() {
  if (bd) return yd;
  bd = 1;
  var e19 = nc();
  return yd = !e19(function() {
    return Object.isExtensible(Object.preventExtensions({}));
  });
}
function fm() {
  if (wd) return om.exports;
  wd = 1;
  var e19 = td(), t2 = ic(), n2 = zh(), r2 = Qc(), i2 = Yc(), o2 = Ah().f, a2 = vp(), s2 = um(), u2 = lm(), l2 = Xc(), c2 = cm(), f2 = false, h2 = l2("meta"), p2 = 0, d2 = function(e20) {
    o2(e20, h2, { value: { objectID: "O" + p2++, weakData: {} } });
  }, m2 = om.exports = { enable: function() {
    m2.enable = function() {
    }, f2 = true;
    var n3 = a2.f, r3 = t2([].splice), i3 = {};
    i3[h2] = 1, n3(i3).length && (a2.f = function(e20) {
      for (var t3 = n3(e20), i4 = 0, o3 = t3.length; i4 < o3; i4++) if (t3[i4] === h2) {
        r3(t3, i4, 1);
        break;
      }
      return t3;
    }, e19({ target: "Object", stat: true, forced: true }, { getOwnPropertyNames: s2.f }));
  }, fastKey: function(e20, t3) {
    if (!r2(e20)) return "symbol" == typeof e20 ? e20 : ("string" == typeof e20 ? "S" : "P") + e20;
    if (!i2(e20, h2)) {
      if (!u2(e20)) return "F";
      if (!t3) return "E";
      d2(e20);
    }
    return e20[h2].objectID;
  }, getWeakData: function(e20, t3) {
    if (!i2(e20, h2)) {
      if (!u2(e20)) return true;
      if (!t3) return false;
      d2(e20);
    }
    return e20[h2].weakData;
  }, onFreeze: function(e20) {
    return c2 && f2 && u2(e20) && !i2(e20, h2) && d2(e20), e20;
  } };
  return n2[h2] = true, om.exports;
}
function hm() {
  if (Od) return Td;
  Od = 1;
  var e19 = function() {
    if (Cd) return xd;
    Cd = 1;
    var e20 = oc(), t3 = ic();
    return xd = function(n3) {
      if ("Function" === e20(n3)) return t3(n3);
    }, xd;
  }(), t2 = Eh(), n2 = rc(), r2 = e19(e19.bind);
  return Td = function(e20, i2) {
    return t2(e20), void 0 === i2 ? e20 : n2 ? r2(e20, i2) : function() {
      return e20.apply(i2, arguments);
    };
  }, Td;
}
function pm() {
  if (Ed) return Sd;
  Ed = 1;
  var e19 = Kc(), t2 = $h(), n2 = e19("iterator"), r2 = Array.prototype;
  return Sd = function(e20) {
    return void 0 !== e20 && (t2.Array === e20 || r2[n2] === e20);
  };
}
function dm() {
  if (kd) return Pd;
  kd = 1;
  var e19 = {};
  return e19[Kc()("toStringTag")] = "z", Pd = "[object z]" === String(e19);
}
function mm() {
  if (Nd) return Md;
  Nd = 1;
  var e19 = dm(), t2 = Jc(), n2 = oc(), r2 = Kc()("toStringTag"), i2 = Object, o2 = "Arguments" === n2(/* @__PURE__ */ function() {
    return arguments;
  }());
  return Md = e19 ? n2 : function(e20) {
    var a2, s2, u2;
    return void 0 === e20 ? "Undefined" : null === e20 ? "Null" : "string" == typeof (s2 = function(e21, t3) {
      try {
        return e21[t3];
      } catch (e22) {
      }
    }(a2 = i2(e20), r2)) ? s2 : o2 ? n2(a2) : "Object" === (u2 = n2(a2)) && t2(a2.callee) ? "Arguments" : u2;
  }, Md;
}
function vm() {
  if (Rd) return Ad;
  Rd = 1;
  var e19 = mm(), t2 = Ph(), n2 = sc(), r2 = $h(), i2 = Kc()("iterator");
  return Ad = function(o2) {
    if (!n2(o2)) return t2(o2, i2) || t2(o2, "@@iterator") || r2[e19(o2)];
  };
}
function gm() {
  if (jd) return Ld;
  jd = 1;
  var e19 = xh(), t2 = Eh(), n2 = ef(), r2 = Sh(), i2 = vm(), o2 = TypeError;
  return Ld = function(a2, s2) {
    var u2 = arguments.length < 2 ? i2(a2) : s2;
    if (t2(u2)) return n2(e19(u2, a2));
    throw new o2(r2(a2) + " is not iterable");
  }, Ld;
}
function _m() {
  if (zd) return Dd;
  zd = 1;
  var e19 = xh(), t2 = ef(), n2 = Ph();
  return Dd = function(r2, i2, o2) {
    var a2, s2;
    t2(r2);
    try {
      if (!(a2 = n2(r2, "return"))) {
        if ("throw" === i2) throw o2;
        return o2;
      }
      a2 = e19(a2, r2);
    } catch (e20) {
      s2 = true, a2 = e20;
    }
    if ("throw" === i2) throw o2;
    if (s2) throw a2;
    return t2(a2), o2;
  };
}
function ym() {
  if (Bd) return Id;
  Bd = 1;
  var e19 = hm(), t2 = xh(), n2 = ef(), r2 = Sh(), i2 = pm(), o2 = Dh(), a2 = Th(), s2 = gm(), u2 = vm(), l2 = _m(), c2 = TypeError, f2 = function(e20, t3) {
    this.stopped = e20, this.result = t3;
  }, h2 = f2.prototype;
  return Id = function(p2, d2, m2) {
    var v2, g2, _2, y2, b2, w2, x2, C2 = m2 && m2.that, T2 = !(!m2 || !m2.AS_ENTRIES), O2 = !(!m2 || !m2.IS_RECORD), S2 = !(!m2 || !m2.IS_ITERATOR), E2 = !(!m2 || !m2.INTERRUPTED), P2 = e19(d2, C2), k2 = function(e20) {
      return v2 && l2(v2, "normal", e20), new f2(true, e20);
    }, M2 = function(e20) {
      return T2 ? (n2(e20), E2 ? P2(e20[0], e20[1], k2) : P2(e20[0], e20[1])) : E2 ? P2(e20, k2) : P2(e20);
    };
    if (O2) v2 = p2.iterator;
    else if (S2) v2 = p2;
    else {
      if (!(g2 = u2(p2))) throw new c2(r2(p2) + " is not iterable");
      if (i2(g2)) {
        for (_2 = 0, y2 = o2(p2); y2 > _2; _2++) if ((b2 = M2(p2[_2])) && a2(h2, b2)) return b2;
        return new f2(false);
      }
      v2 = s2(p2, g2);
    }
    for (w2 = O2 ? p2.next : v2.next; !(x2 = t2(w2, v2)).done; ) {
      try {
        b2 = M2(x2.value);
      } catch (e20) {
        l2(v2, "throw", e20);
      }
      if ("object" == typeof b2 && b2 && a2(h2, b2)) return b2;
    }
    return new f2(false);
  }, Id;
}
function bm() {
  if (Vd) return Fd;
  Vd = 1;
  var e19 = Th(), t2 = TypeError;
  return Fd = function(n2, r2) {
    if (e19(r2, n2)) return n2;
    throw new t2("Incorrect invocation");
  };
}
function wm() {
  if (Ud) return Hd;
  Ud = 1;
  var e19 = Kc()("iterator"), t2 = false;
  try {
    var n2 = 0, r2 = { next: function() {
      return { done: !!n2++ };
    }, return: function() {
      t2 = true;
    } };
    r2[e19] = function() {
      return this;
    }, Array.from(r2, function() {
      throw 2;
    });
  } catch (e20) {
  }
  return Hd = function(n3, r3) {
    try {
      if (!r3 && !t2) return false;
    } catch (e20) {
      return false;
    }
    var i2 = false;
    try {
      var o2 = {};
      o2[e19] = function() {
        return { next: function() {
          return { done: i2 = true };
        } };
      }, n3(o2);
    } catch (e20) {
    }
    return i2;
  };
}
function xm() {
  if ($d) return Wd;
  $d = 1;
  var e19 = Jc(), t2 = Qc(), n2 = ud();
  return Wd = function(r2, i2, o2) {
    var a2, s2;
    return n2 && e19(a2 = i2.constructor) && a2 !== o2 && t2(s2 = a2.prototype) && s2 !== o2.prototype && n2(r2, s2), r2;
  };
}
function Cm() {
  if (Xd) return Yd;
  Xd = 1;
  var e19 = td(), t2 = cc(), n2 = ic(), r2 = ed(), i2 = pp(), o2 = fm(), a2 = ym(), s2 = bm(), u2 = Jc(), l2 = sc(), c2 = Qc(), f2 = nc(), h2 = wm(), p2 = id(), d2 = xm();
  return Yd = function(m2, v2, g2) {
    var _2 = -1 !== m2.indexOf("Map"), y2 = -1 !== m2.indexOf("Weak"), b2 = _2 ? "set" : "add", w2 = t2[m2], x2 = w2 && w2.prototype, C2 = w2, T2 = {}, O2 = function(e20) {
      var t3 = n2(x2[e20]);
      i2(x2, e20, "add" === e20 ? function(e21) {
        return t3(this, 0 === e21 ? 0 : e21), this;
      } : "delete" === e20 ? function(e21) {
        return !(y2 && !c2(e21)) && t3(this, 0 === e21 ? 0 : e21);
      } : "get" === e20 ? function(e21) {
        return y2 && !c2(e21) ? void 0 : t3(this, 0 === e21 ? 0 : e21);
      } : "has" === e20 ? function(e21) {
        return !(y2 && !c2(e21)) && t3(this, 0 === e21 ? 0 : e21);
      } : function(e21, n3) {
        return t3(this, 0 === e21 ? 0 : e21, n3), this;
      });
    };
    if (r2(m2, !u2(w2) || !(y2 || x2.forEach && !f2(function() {
      new w2().entries().next();
    })))) C2 = g2.getConstructor(v2, m2, _2, b2), o2.enable();
    else if (r2(m2, true)) {
      var S2 = new C2(), E2 = S2[b2](y2 ? {} : -0, 1) !== S2, P2 = f2(function() {
        S2.has(1);
      }), k2 = h2(function(e20) {
        new w2(e20);
      }), M2 = !y2 && f2(function() {
        for (var e20 = new w2(), t3 = 5; t3--; ) e20[b2](t3, t3);
        return !e20.has(-0);
      });
      k2 || ((C2 = v2(function(e20, t3) {
        s2(e20, x2);
        var n3 = d2(new w2(), e20, C2);
        return l2(t3) || a2(t3, n3[b2], { that: n3, AS_ENTRIES: _2 }), n3;
      })).prototype = x2, x2.constructor = C2), (P2 || M2) && (O2("delete"), O2("has"), _2 && O2("get")), (M2 || E2) && O2(b2), y2 && x2.clear && delete x2.clear;
    }
    return T2[m2] = C2, e19({ global: true, constructor: true, forced: C2 !== w2 }, T2), p2(C2, m2), y2 || g2.setStrong(C2, m2, _2), C2;
  };
}
function Tm() {
  if (Zd) return qd;
  Zd = 1;
  var e19 = hp(), t2 = Ah();
  return qd = function(n2, r2, i2) {
    return i2.get && e19(i2.get, r2, { getter: true }), i2.set && e19(i2.set, r2, { setter: true }), t2.f(n2, r2, i2);
  };
}
function Om() {
  if (Kd) return Gd;
  Kd = 1;
  var e19 = pp();
  return Gd = function(t2, n2, r2) {
    for (var i2 in n2) e19(t2, i2, n2[i2], r2);
    return t2;
  };
}
function Sm() {
  if (Qd) return Jd;
  Qd = 1;
  var e19 = Ch(), t2 = Tm(), n2 = Kc(), r2 = sf(), i2 = n2("species");
  return Jd = function(n3) {
    var o2 = e19(n3);
    r2 && o2 && !o2[i2] && t2(o2, i2, { configurable: true, get: function() {
      return this;
    } });
  };
}
function Em() {
  if (tm) return em;
  tm = 1;
  var e19 = Uh(), t2 = Tm(), n2 = Om(), r2 = hm(), i2 = bm(), o2 = sc(), a2 = ym(), s2 = ld(), u2 = cd(), l2 = Sm(), c2 = sf(), f2 = fm().fastKey, h2 = Zh(), p2 = h2.set, d2 = h2.getterFor;
  return em = { getConstructor: function(s3, u3, l3, h3) {
    var m2 = s3(function(t3, n3) {
      i2(t3, v2), p2(t3, { type: u3, index: e19(null), first: null, last: null, size: 0 }), c2 || (t3.size = 0), o2(n3) || a2(n3, t3[h3], { that: t3, AS_ENTRIES: l3 });
    }), v2 = m2.prototype, g2 = d2(u3), _2 = function(e20, t3, n3) {
      var r3, i3, o3 = g2(e20), a3 = y2(e20, t3);
      return a3 ? a3.value = n3 : (o3.last = a3 = { index: i3 = f2(t3, true), key: t3, value: n3, previous: r3 = o3.last, next: null, removed: false }, o3.first || (o3.first = a3), r3 && (r3.next = a3), c2 ? o3.size++ : e20.size++, "F" !== i3 && (o3.index[i3] = a3)), e20;
    }, y2 = function(e20, t3) {
      var n3, r3 = g2(e20), i3 = f2(t3);
      if ("F" !== i3) return r3.index[i3];
      for (n3 = r3.first; n3; n3 = n3.next) if (n3.key === t3) return n3;
    };
    return n2(v2, { clear: function() {
      for (var t3 = g2(this), n3 = t3.first; n3; ) n3.removed = true, n3.previous && (n3.previous = n3.previous.next = null), n3 = n3.next;
      t3.first = t3.last = null, t3.index = e19(null), c2 ? t3.size = 0 : this.size = 0;
    }, delete: function(e20) {
      var t3 = this, n3 = g2(t3), r3 = y2(t3, e20);
      if (r3) {
        var i3 = r3.next, o3 = r3.previous;
        delete n3.index[r3.index], r3.removed = true, o3 && (o3.next = i3), i3 && (i3.previous = o3), n3.first === r3 && (n3.first = i3), n3.last === r3 && (n3.last = o3), c2 ? n3.size-- : t3.size--;
      }
      return !!r3;
    }, forEach: function(e20) {
      for (var t3, n3 = g2(this), i3 = r2(e20, arguments.length > 1 ? arguments[1] : void 0); t3 = t3 ? t3.next : n3.first; ) for (i3(t3.value, t3.key, this); t3 && t3.removed; ) t3 = t3.previous;
    }, has: function(e20) {
      return !!y2(this, e20);
    } }), n2(v2, l3 ? { get: function(e20) {
      var t3 = y2(this, e20);
      return t3 && t3.value;
    }, set: function(e20, t3) {
      return _2(this, 0 === e20 ? 0 : e20, t3);
    } } : { add: function(e20) {
      return _2(this, e20 = 0 === e20 ? 0 : e20, e20);
    } }), c2 && t2(v2, "size", { configurable: true, get: function() {
      return g2(this).size;
    } }), m2;
  }, setStrong: function(e20, t3, n3) {
    var r3 = t3 + " Iterator", i3 = d2(t3), o3 = d2(r3);
    s2(e20, t3, function(e21, t4) {
      p2(this, { type: r3, target: e21, state: i3(e21), kind: t4, last: null });
    }, function() {
      for (var e21 = o3(this), t4 = e21.kind, n4 = e21.last; n4 && n4.removed; ) n4 = n4.previous;
      return e21.target && (e21.last = n4 = n4 ? n4.next : e21.state.first) ? u2("keys" === t4 ? n4.key : "values" === t4 ? n4.value : [n4.key, n4.value], false) : (e21.target = null, u2(void 0, true));
    }, n3 ? "entries" : "values", !n3, true), l2(t3);
  } }, em;
}
function Pm() {
  return rm || (rm = 1, nm || (nm = 1, Cm()("Map", function(e19) {
    return function() {
      return e19(this, arguments.length ? arguments[0] : void 0);
    };
  }, Em()))), im;
}
var km, Mm, Nm, Am = {};
function Rm() {
  if (Mm) return km;
  Mm = 1;
  var e19 = ic(), t2 = Map.prototype;
  return km = { Map, set: e19(t2.set), get: e19(t2.get), has: e19(t2.has), remove: e19(t2.delete), proto: t2 };
}
var Lm, jm, Dm, zm = {};
function Im() {
  if (Dm) return zm;
  Dm = 1;
  var e19 = dm(), t2 = pp(), n2 = function() {
    if (jm) return Lm;
    jm = 1;
    var e20 = dm(), t3 = mm();
    return Lm = e20 ? {}.toString : function() {
      return "[object " + t3(this) + "]";
    };
  }();
  return e19 || t2(Object.prototype, "toString", n2, { unsafe: true }), zm;
}
var Bm, Fm, Vm, Hm, Um, Wm, $m, Ym, Xm, qm = {};
function Zm() {
  if (Fm) return Bm;
  Fm = 1;
  var e19 = mm(), t2 = String;
  return Bm = function(n2) {
    if ("Symbol" === e19(n2)) throw new TypeError("Cannot convert a Symbol value to a string");
    return t2(n2);
  };
}
function Gm() {
  if (Um) return qm;
  Um = 1;
  var e19 = function() {
    if (Hm) return Vm;
    Hm = 1;
    var e20 = ic(), t3 = Rh(), n3 = Zm(), r3 = uc(), i3 = e20("".charAt), o3 = e20("".charCodeAt), a3 = e20("".slice), s3 = function(e21) {
      return function(s4, u2) {
        var l2, c2, f2 = n3(r3(s4)), h2 = t3(u2), p2 = f2.length;
        return h2 < 0 || h2 >= p2 ? e21 ? "" : void 0 : (l2 = o3(f2, h2)) < 55296 || l2 > 56319 || h2 + 1 === p2 || (c2 = o3(f2, h2 + 1)) < 56320 || c2 > 57343 ? e21 ? i3(f2, h2) : l2 : e21 ? a3(f2, h2, h2 + 2) : c2 - 56320 + (l2 - 55296 << 10) + 65536;
      };
    };
    return Vm = { codeAt: s3(false), charAt: s3(true) };
  }().charAt, t2 = Zm(), n2 = Zh(), r2 = ld(), i2 = cd(), o2 = "String Iterator", a2 = n2.set, s2 = n2.getterFor(o2);
  return r2(String, "String", function(e20) {
    a2(this, { type: o2, string: t2(e20), index: 0 });
  }, function() {
    var t3, n3 = s2(this), r3 = n3.string, o3 = n3.index;
    return o3 >= r3.length ? i2(void 0, true) : (t3 = e19(r3, o3), n3.index += t3.length, i2(t3, false));
  }), qm;
}
function Km() {
  if ($m) return Wm;
  $m = 1;
  var e19 = cc();
  return Wm = e19;
}
!function() {
  if (Xm) return Ym;
  Xm = 1, fd(), Pm(), function() {
    if (Nm) return Am;
    Nm = 1;
    var e20 = td(), t2 = ic(), n2 = Eh(), r2 = uc(), i2 = ym(), o2 = Rm(), a2 = Vc(), s2 = nc(), u2 = o2.Map, l2 = o2.has, c2 = o2.get, f2 = o2.set, h2 = t2([].push), p2 = a2 || s2(function() {
      return 1 !== u2.groupBy("ab", function(e21) {
        return e21;
      }).get("a").length;
    });
    e20({ target: "Map", stat: true, forced: a2 || p2 }, { groupBy: function(e21, t3) {
      r2(e21), n2(t3);
      var o3 = new u2(), a3 = 0;
      return i2(e21, function(e22) {
        var n3 = t3(e22, a3++);
        l2(o3, n3) ? h2(c2(o3, n3), e22) : f2(o3, n3, [e22]);
      }), o3;
    } });
  }(), Im(), Gm();
  var e19 = Km();
  Ym = e19.Map;
}();
var Jm, Qm, ev = {};
function tv() {
  return Qm || (Qm = 1, Jm || (Jm = 1, Cm()("Set", function(e19) {
    return function() {
      return e19(this, arguments.length ? arguments[0] : void 0);
    };
  }, Em()))), ev;
}
var nv, rv, iv, ov, av, sv, uv, lv, cv, fv, hv, pv, dv, mv, vv, gv, _v, yv, bv, wv, xv, Cv = {};
function Tv() {
  if (rv) return nv;
  rv = 1;
  var e19 = ic(), t2 = Set.prototype;
  return nv = { Set, add: e19(t2.add), has: e19(t2.has), remove: e19(t2.delete), proto: t2 };
}
function Ov() {
  if (ov) return iv;
  ov = 1;
  var e19 = Tv().has;
  return iv = function(t2) {
    return e19(t2), t2;
  };
}
function Sv() {
  if (sv) return av;
  sv = 1;
  var e19 = xh();
  return av = function(t2, n2, r2) {
    for (var i2, o2, a2 = r2 ? t2 : t2.iterator, s2 = t2.next; !(i2 = e19(s2, a2)).done; ) if (void 0 !== (o2 = n2(i2.value))) return o2;
  }, av;
}
function Ev() {
  if (lv) return uv;
  lv = 1;
  var e19 = ic(), t2 = Sv(), n2 = Tv(), r2 = n2.Set, i2 = n2.proto, o2 = e19(i2.forEach), a2 = e19(i2.keys), s2 = a2(new r2()).next;
  return uv = function(e20, n3, r3) {
    return r3 ? t2({ iterator: a2(e20), next: s2 }, n3) : o2(e20, n3);
  }, uv;
}
function Pv() {
  if (fv) return cv;
  fv = 1;
  var e19 = Tv(), t2 = Ev(), n2 = e19.Set, r2 = e19.add;
  return cv = function(e20) {
    var i2 = new n2();
    return t2(e20, function(e21) {
      r2(i2, e21);
    }), i2;
  }, cv;
}
function kv() {
  if (pv) return hv;
  pv = 1;
  var e19 = od(), t2 = Tv();
  return hv = e19(t2.proto, "size", "get") || function(e20) {
    return e20.size;
  }, hv;
}
function Mv() {
  return mv ? dv : (mv = 1, dv = function(e19) {
    return { iterator: e19, next: e19.next, done: false };
  });
}
function Nv() {
  if (gv) return vv;
  gv = 1;
  var e19 = Eh(), t2 = ef(), n2 = xh(), r2 = Rh(), i2 = Mv(), o2 = "Invalid size", a2 = RangeError, s2 = TypeError, u2 = Math.max, l2 = function(t3, n3) {
    this.set = t3, this.size = u2(n3, 0), this.has = e19(t3.has), this.keys = e19(t3.keys);
  };
  return l2.prototype = { getIterator: function() {
    return i2(t2(n2(this.keys, this.set)));
  }, includes: function(e20) {
    return n2(this.has, this.set, e20);
  } }, vv = function(e20) {
    t2(e20);
    var n3 = +e20.size;
    if (n3 != n3) throw new s2(o2);
    var i3 = r2(n3);
    if (i3 < 0) throw new a2(o2);
    return new l2(e20, i3);
  };
}
function Av() {
  if (wv) return bv;
  wv = 1;
  var e19 = Ch(), t2 = function(e20) {
    return { size: e20, has: function() {
      return false;
    }, keys: function() {
      return { next: function() {
        return { done: true };
      } };
    } };
  }, n2 = function(e20) {
    return { size: e20, has: function() {
      return true;
    }, keys: function() {
      throw new Error("e");
    } };
  };
  return bv = function(r2, i2) {
    var o2 = e19("Set");
    try {
      new o2()[r2](t2(0));
      try {
        return new o2()[r2](t2(-1)), false;
      } catch (e20) {
        if (!i2) return true;
        try {
          return new o2()[r2](n2(-1 / 0)), false;
        } catch (e21) {
          var a2 = new o2();
          return a2.add(1), a2.add(2), i2(a2[r2](n2(1 / 0)));
        }
      }
    } catch (e20) {
      return false;
    }
  }, bv;
}
function Rv() {
  if (xv) return Cv;
  xv = 1;
  var e19 = td(), t2 = function() {
    if (yv) return _v;
    yv = 1;
    var e20 = Ov(), t3 = Tv(), n2 = Pv(), r2 = kv(), i2 = Nv(), o2 = Ev(), a2 = Sv(), s2 = t3.has, u2 = t3.remove;
    return _v = function(t4) {
      var l2 = e20(this), c2 = i2(t4), f2 = n2(l2);
      return r2(l2) <= c2.size ? o2(l2, function(e21) {
        c2.includes(e21) && u2(f2, e21);
      }) : a2(c2.getIterator(), function(e21) {
        s2(l2, e21) && u2(f2, e21);
      }), f2;
    }, _v;
  }();
  return e19({ target: "Set", proto: true, real: true, forced: !Av()("difference", function(e20) {
    return 0 === e20.size;
  }) }, { difference: t2 }), Cv;
}
var Lv, jv, Dv, zv = {};
function Iv() {
  if (Dv) return zv;
  Dv = 1;
  var e19 = td(), t2 = nc(), n2 = function() {
    if (jv) return Lv;
    jv = 1;
    var e20 = Ov(), t3 = Tv(), n3 = kv(), r2 = Nv(), i2 = Ev(), o2 = Sv(), a2 = t3.Set, s2 = t3.add, u2 = t3.has;
    return Lv = function(t4) {
      var l2 = e20(this), c2 = r2(t4), f2 = new a2();
      return n3(l2) > c2.size ? o2(c2.getIterator(), function(e21) {
        u2(l2, e21) && s2(f2, e21);
      }) : i2(l2, function(e21) {
        c2.includes(e21) && s2(f2, e21);
      }), f2;
    }, Lv;
  }();
  return e19({ target: "Set", proto: true, real: true, forced: !Av()("intersection", function(e20) {
    return 2 === e20.size && e20.has(1) && e20.has(2);
  }) || t2(function() {
    return "3,2" !== String(Array.from((/* @__PURE__ */ new Set([1, 2, 3])).intersection(/* @__PURE__ */ new Set([3, 2]))));
  }) }, { intersection: n2 }), zv;
}
var Bv, Fv, Vv, Hv = {};
function Uv() {
  if (Vv) return Hv;
  Vv = 1;
  var e19 = td(), t2 = function() {
    if (Fv) return Bv;
    Fv = 1;
    var e20 = Ov(), t3 = Tv().has, n2 = kv(), r2 = Nv(), i2 = Ev(), o2 = Sv(), a2 = _m();
    return Bv = function(s2) {
      var u2 = e20(this), l2 = r2(s2);
      if (n2(u2) <= l2.size) return false !== i2(u2, function(e21) {
        if (l2.includes(e21)) return false;
      }, true);
      var c2 = l2.getIterator();
      return false !== o2(c2, function(e21) {
        if (t3(u2, e21)) return a2(c2, "normal", false);
      });
    }, Bv;
  }();
  return e19({ target: "Set", proto: true, real: true, forced: !Av()("isDisjointFrom", function(e20) {
    return !e20;
  }) }, { isDisjointFrom: t2 }), Hv;
}
var Wv, $v, Yv, Xv = {};
function qv() {
  if (Yv) return Xv;
  Yv = 1;
  var e19 = td(), t2 = function() {
    if ($v) return Wv;
    $v = 1;
    var e20 = Ov(), t3 = kv(), n2 = Ev(), r2 = Nv();
    return Wv = function(i2) {
      var o2 = e20(this), a2 = r2(i2);
      return !(t3(o2) > a2.size) && false !== n2(o2, function(e21) {
        if (!a2.includes(e21)) return false;
      }, true);
    }, Wv;
  }();
  return e19({ target: "Set", proto: true, real: true, forced: !Av()("isSubsetOf", function(e20) {
    return e20;
  }) }, { isSubsetOf: t2 }), Xv;
}
var Zv, Gv, Kv, Jv = {};
function Qv() {
  if (Kv) return Jv;
  Kv = 1;
  var e19 = td(), t2 = function() {
    if (Gv) return Zv;
    Gv = 1;
    var e20 = Ov(), t3 = Tv().has, n2 = kv(), r2 = Nv(), i2 = Sv(), o2 = _m();
    return Zv = function(a2) {
      var s2 = e20(this), u2 = r2(a2);
      if (n2(s2) < u2.size) return false;
      var l2 = u2.getIterator();
      return false !== i2(l2, function(e21) {
        if (!t3(s2, e21)) return o2(l2, "normal", false);
      });
    }, Zv;
  }();
  return e19({ target: "Set", proto: true, real: true, forced: !Av()("isSupersetOf", function(e20) {
    return !e20;
  }) }, { isSupersetOf: t2 }), Jv;
}
var eg, tg, ng, rg = {};
function ig() {
  if (ng) return rg;
  ng = 1;
  var e19 = td(), t2 = function() {
    if (tg) return eg;
    tg = 1;
    var e20 = Ov(), t3 = Tv(), n2 = Pv(), r2 = Nv(), i2 = Sv(), o2 = t3.add, a2 = t3.has, s2 = t3.remove;
    return eg = function(t4) {
      var u2 = e20(this), l2 = r2(t4).getIterator(), c2 = n2(u2);
      return i2(l2, function(e21) {
        a2(u2, e21) ? s2(c2, e21) : o2(c2, e21);
      }), c2;
    }, eg;
  }();
  return e19({ target: "Set", proto: true, real: true, forced: !Av()("symmetricDifference") }, { symmetricDifference: t2 }), rg;
}
var og, ag, sg, ug, lg, cg = {};
function fg() {
  if (sg) return cg;
  sg = 1;
  var e19 = td(), t2 = function() {
    if (ag) return og;
    ag = 1;
    var e20 = Ov(), t3 = Tv().add, n2 = Pv(), r2 = Nv(), i2 = Sv();
    return og = function(o2) {
      var a2 = e20(this), s2 = r2(o2).getIterator(), u2 = n2(a2);
      return i2(s2, function(e21) {
        t3(u2, e21);
      }), u2;
    }, og;
  }();
  return e19({ target: "Set", proto: true, real: true, forced: !Av()("union") }, { union: t2 }), cg;
}
!function() {
  if (lg) return ug;
  lg = 1, fd(), Im(), tv(), Rv(), Iv(), Uv(), qv(), Qv(), ig(), fg(), Gm();
  var e19 = Km();
  ug = e19.Set;
}();
var hg, pg, dg, mg, vg, gg, _g, yg, bg, wg, xg, Cg, Tg, Og, Sg, Eg, Pg = {}, kg = {};
function Mg() {
  if (pg) return hg;
  pg = 1;
  var e19 = oc();
  return hg = Array.isArray || function(t2) {
    return "Array" === e19(t2);
  };
}
function Ng() {
  if (mg) return dg;
  mg = 1;
  var e19 = ic(), t2 = nc(), n2 = Jc(), r2 = mm(), i2 = Ch(), o2 = fp(), a2 = function() {
  }, s2 = i2("Reflect", "construct"), u2 = /^\s*(?:class|function)\b/, l2 = e19(u2.exec), c2 = !u2.test(a2), f2 = function(e20) {
    if (!n2(e20)) return false;
    try {
      return s2(a2, [], e20), true;
    } catch (e21) {
      return false;
    }
  }, h2 = function(e20) {
    if (!n2(e20)) return false;
    switch (r2(e20)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        return false;
    }
    try {
      return c2 || !!l2(u2, o2(e20));
    } catch (e21) {
      return true;
    }
  };
  return h2.sham = true, dg = !s2 || t2(function() {
    var e20;
    return f2(f2.call) || !f2(Object) || !f2(function() {
      e20 = true;
    }) || e20;
  }) ? h2 : f2;
}
function Ag() {
  if (gg) return vg;
  gg = 1;
  var e19 = Mg(), t2 = Ng(), n2 = Qc(), r2 = Kc()("species"), i2 = Array;
  return vg = function(o2) {
    var a2;
    return e19(o2) && (a2 = o2.constructor, (t2(a2) && (a2 === i2 || e19(a2.prototype)) || n2(a2) && null === (a2 = a2[r2])) && (a2 = void 0)), void 0 === a2 ? i2 : a2;
  }, vg;
}
function Rg() {
  if (yg) return _g;
  yg = 1;
  var e19 = Ag();
  return _g = function(t2, n2) {
    return new (e19(t2))(0 === n2 ? 0 : n2);
  };
}
function Lg() {
  if (Cg) return xg;
  Cg = 1;
  var e19 = ic(), t2 = Om(), n2 = fm().getWeakData, r2 = bm(), i2 = ef(), o2 = sc(), a2 = Qc(), s2 = ym(), u2 = function() {
    if (wg) return bg;
    wg = 1;
    var e20 = hm(), t3 = ic(), n3 = ac(), r3 = $c(), i3 = Dh(), o3 = Rg(), a3 = t3([].push), s3 = function(t4) {
      var s4 = 1 === t4, u3 = 2 === t4, l3 = 3 === t4, c3 = 4 === t4, f3 = 6 === t4, h3 = 7 === t4, p3 = 5 === t4 || f3;
      return function(d3, m3, v3, g3) {
        for (var _3, y3, b2 = r3(d3), w2 = n3(b2), x2 = i3(w2), C2 = e20(m3, v3), T2 = 0, O2 = g3 || o3, S2 = s4 ? O2(d3, x2) : u3 || h3 ? O2(d3, 0) : void 0; x2 > T2; T2++) if ((p3 || T2 in w2) && (y3 = C2(_3 = w2[T2], T2, b2), t4)) if (s4) S2[T2] = y3;
        else if (y3) switch (t4) {
          case 3:
            return true;
          case 5:
            return _3;
          case 6:
            return T2;
          case 2:
            a3(S2, _3);
        }
        else switch (t4) {
          case 4:
            return false;
          case 7:
            a3(S2, _3);
        }
        return f3 ? -1 : l3 || c3 ? c3 : S2;
      };
    };
    return bg = { forEach: s3(0), map: s3(1), filter: s3(2), some: s3(3), every: s3(4), find: s3(5), findIndex: s3(6), filterReject: s3(7) };
  }(), l2 = Yc(), c2 = Zh(), f2 = c2.set, h2 = c2.getterFor, p2 = u2.find, d2 = u2.findIndex, m2 = e19([].splice), v2 = 0, g2 = function(e20) {
    return e20.frozen || (e20.frozen = new _2());
  }, _2 = function() {
    this.entries = [];
  }, y2 = function(e20, t3) {
    return p2(e20.entries, function(e21) {
      return e21[0] === t3;
    });
  };
  return _2.prototype = { get: function(e20) {
    var t3 = y2(this, e20);
    if (t3) return t3[1];
  }, has: function(e20) {
    return !!y2(this, e20);
  }, set: function(e20, t3) {
    var n3 = y2(this, e20);
    n3 ? n3[1] = t3 : this.entries.push([e20, t3]);
  }, delete: function(e20) {
    var t3 = d2(this.entries, function(t4) {
      return t4[0] === e20;
    });
    return ~t3 && m2(this.entries, t3, 1), !!~t3;
  } }, xg = { getConstructor: function(e20, u3, c3, p3) {
    var d3 = e20(function(e21, t3) {
      r2(e21, m3), f2(e21, { type: u3, id: v2++, frozen: null }), o2(t3) || s2(t3, e21[p3], { that: e21, AS_ENTRIES: c3 });
    }), m3 = d3.prototype, _3 = h2(u3), y3 = function(e21, t3, r3) {
      var o3 = _3(e21), a3 = n2(i2(t3), true);
      return true === a3 ? g2(o3).set(t3, r3) : a3[o3.id] = r3, e21;
    };
    return t2(m3, { delete: function(e21) {
      var t3 = _3(this);
      if (!a2(e21)) return false;
      var r3 = n2(e21);
      return true === r3 ? g2(t3).delete(e21) : r3 && l2(r3, t3.id) && delete r3[t3.id];
    }, has: function(e21) {
      var t3 = _3(this);
      if (!a2(e21)) return false;
      var r3 = n2(e21);
      return true === r3 ? g2(t3).has(e21) : r3 && l2(r3, t3.id);
    } }), t2(m3, c3 ? { get: function(e21) {
      var t3 = _3(this);
      if (a2(e21)) {
        var r3 = n2(e21);
        if (true === r3) return g2(t3).get(e21);
        if (r3) return r3[t3.id];
      }
    }, set: function(e21, t3) {
      return y3(this, e21, t3);
    } } : { add: function(e21) {
      return y3(this, e21, true);
    } }), d3;
  } }, xg;
}
function jg() {
  return Og || (Og = 1, function() {
    if (Tg) return kg;
    Tg = 1;
    var e19, t2 = cm(), n2 = cc(), r2 = ic(), i2 = Om(), o2 = fm(), a2 = Cm(), s2 = Lg(), u2 = Qc(), l2 = Zh().enforce, c2 = nc(), f2 = Yh(), h2 = Object, p2 = Array.isArray, d2 = h2.isExtensible, m2 = h2.isFrozen, v2 = h2.isSealed, g2 = h2.freeze, _2 = h2.seal, y2 = !n2.ActiveXObject && "ActiveXObject" in n2, b2 = function(e20) {
      return function() {
        return e20(this, arguments.length ? arguments[0] : void 0);
      };
    }, w2 = a2("WeakMap", b2, s2), x2 = w2.prototype, C2 = r2(x2.set);
    if (f2) if (y2) {
      e19 = s2.getConstructor(b2, "WeakMap", true), o2.enable();
      var T2 = r2(x2.delete), O2 = r2(x2.has), S2 = r2(x2.get);
      i2(x2, { delete: function(t3) {
        if (u2(t3) && !d2(t3)) {
          var n3 = l2(this);
          return n3.frozen || (n3.frozen = new e19()), T2(this, t3) || n3.frozen.delete(t3);
        }
        return T2(this, t3);
      }, has: function(t3) {
        if (u2(t3) && !d2(t3)) {
          var n3 = l2(this);
          return n3.frozen || (n3.frozen = new e19()), O2(this, t3) || n3.frozen.has(t3);
        }
        return O2(this, t3);
      }, get: function(t3) {
        if (u2(t3) && !d2(t3)) {
          var n3 = l2(this);
          return n3.frozen || (n3.frozen = new e19()), O2(this, t3) ? S2(this, t3) : n3.frozen.get(t3);
        }
        return S2(this, t3);
      }, set: function(t3, n3) {
        if (u2(t3) && !d2(t3)) {
          var r3 = l2(this);
          r3.frozen || (r3.frozen = new e19()), O2(this, t3) ? C2(this, t3, n3) : r3.frozen.set(t3, n3);
        } else C2(this, t3, n3);
        return this;
      } });
    } else t2 && c2(function() {
      var e20 = g2([]);
      return C2(new w2(), e20, 1), !m2(e20);
    }) && i2(x2, { set: function(e20, t3) {
      var n3;
      return p2(e20) && (m2(e20) ? n3 = g2 : v2(e20) && (n3 = _2)), C2(this, e20, t3), n3 && n3(e20), this;
    } });
  }()), Pg;
}
!function() {
  if (Eg) return Sg;
  Eg = 1, fd(), Im(), jg();
  var e19 = Km();
  Sg = e19.WeakMap;
}();
var Dg, zg, Ig, Bg, Fg, Vg, Hg, Ug, Wg, $g = {};
function Yg() {
  if (zg) return Dg;
  zg = 1;
  var e19 = ef(), t2 = _m();
  return Dg = function(n2, r2, i2, o2) {
    try {
      return o2 ? r2(e19(i2)[0], i2[1]) : r2(i2);
    } catch (e20) {
      t2(n2, "throw", e20);
    }
  }, Dg;
}
function Xg() {
  if (Bg) return Ig;
  Bg = 1;
  var e19 = sf(), t2 = Ah(), n2 = Xh();
  return Ig = function(r2, i2, o2) {
    e19 ? t2.f(r2, i2, n2(0, o2)) : r2[i2] = o2;
  };
}
function qg() {
  if (Hg) return $g;
  Hg = 1;
  var e19 = td(), t2 = function() {
    if (Vg) return Fg;
    Vg = 1;
    var e20 = hm(), t3 = xh(), n2 = $c(), r2 = Yg(), i2 = pm(), o2 = Ng(), a2 = Dh(), s2 = Xg(), u2 = gm(), l2 = vm(), c2 = Array;
    return Fg = function(f2) {
      var h2 = n2(f2), p2 = o2(this), d2 = arguments.length, m2 = d2 > 1 ? arguments[1] : void 0, v2 = void 0 !== m2;
      v2 && (m2 = e20(m2, d2 > 2 ? arguments[2] : void 0));
      var g2, _2, y2, b2, w2, x2, C2 = l2(h2), T2 = 0;
      if (!C2 || this === c2 && i2(C2)) for (g2 = a2(h2), _2 = p2 ? new this(g2) : c2(g2); g2 > T2; T2++) x2 = v2 ? m2(h2[T2], T2) : h2[T2], s2(_2, T2, x2);
      else for (_2 = p2 ? new this() : [], w2 = (b2 = u2(h2, C2)).next; !(y2 = t3(w2, b2)).done; T2++) x2 = v2 ? r2(b2, m2, [y2.value, T2], true) : y2.value, s2(_2, T2, x2);
      return _2.length = T2, _2;
    }, Fg;
  }();
  return e19({ target: "Array", stat: true, forced: !wm()(function(e20) {
    Array.from(e20);
  }) }, { from: t2 }), $g;
}
!function() {
  if (Wg) return Ug;
  Wg = 1, Gm(), qg();
  var e19 = Km();
  Ug = e19.Array.from;
}();
var Zg, Gg, Kg, Jg, Qg, e_, t_ = {};
function n_() {
  if (Kg) return t_;
  Kg = 1;
  var e19 = td(), t2 = function() {
    if (Gg) return Zg;
    Gg = 1;
    var e20 = sf(), t3 = ic(), n2 = xh(), r2 = nc(), i2 = Fh(), o2 = Kp(), a2 = ep(), s2 = $c(), u2 = ac(), l2 = Object.assign, c2 = Object.defineProperty, f2 = t3([].concat);
    return Zg = !l2 || r2(function() {
      if (e20 && 1 !== l2({ b: 1 }, l2(c2({}, "a", { enumerable: true, get: function() {
        c2(this, "b", { value: 3, enumerable: false });
      } }), { b: 2 })).b) return true;
      var t4 = {}, n3 = {}, r3 = Symbol("assign detection"), o3 = "abcdefghijklmnopqrst";
      return t4[r3] = 7, o3.split("").forEach(function(e21) {
        n3[e21] = e21;
      }), 7 !== l2({}, t4)[r3] || i2(l2({}, n3)).join("") !== o3;
    }) ? function(t4, r3) {
      for (var l3 = s2(t4), c3 = arguments.length, h2 = 1, p2 = o2.f, d2 = a2.f; c3 > h2; ) for (var m2, v2 = u2(arguments[h2++]), g2 = p2 ? f2(i2(v2), p2(v2)) : i2(v2), _2 = g2.length, y2 = 0; _2 > y2; ) m2 = g2[y2++], e20 && !n2(d2, v2, m2) || (l3[m2] = v2[m2]);
      return l3;
    } : l2, Zg;
  }();
  return e19({ target: "Object", stat: true, arity: 2, forced: Object.assign !== t2 }, { assign: t2 }), t_;
}
!function() {
  if (Qg) return Jg;
  Qg = 1, n_();
  var e19 = Km();
  Jg = e19.Object.assign;
}();
var r_ = /* @__PURE__ */ new WeakMap();
function i_() {
  if (void 0 !== e_) return e_;
  var e19 = false;
  try {
    var t2 = function() {
    }, n2 = Object.defineProperty({}, "passive", { enumerable: true, get: function() {
      return e19 = true, true;
    } });
    window.addEventListener("testPassive", t2, n2), window.removeEventListener("testPassive", t2, n2);
  } catch (e20) {
  }
  return e_ = !!e19 && { passive: false };
}
function o_(e19) {
  var t2 = r_.get(e19) || [];
  return r_.set(e19, t2), function(e20, n2, r2) {
    function i2(e21) {
      e21.defaultPrevented || r2(e21);
    }
    n2.split(/\s+/g).forEach(function(n3) {
      t2.push({ elem: e20, eventName: n3, handler: i2 }), e20.addEventListener(n3, i2, i_());
    });
  };
}
function a_(e19) {
  var t2 = function(e20) {
    return e20.touches ? e20.touches[e20.touches.length - 1] : e20;
  }(e19);
  return { x: t2.clientX, y: t2.clientY };
}
function s_(e19, t2) {
  return void 0 === t2 && (t2 = []), t2.some(function(t3) {
    return e19 === t3;
  });
}
var u_ = ["webkit", "moz", "ms", "o"], l_ = new RegExp("^-(?!(?:" + u_.join("|") + ")-)");
function c_(e19, t2) {
  t2 = function(e20) {
    var t3 = {};
    return Object.keys(e20).forEach(function(n2) {
      if (l_.test(n2)) {
        var r2 = e20[n2];
        n2 = n2.replace(/^-/, ""), t3[n2] = r2, u_.forEach(function(e21) {
          t3["-" + e21 + "-" + n2] = r2;
        });
      } else t3[n2] = e20[n2];
    }), t3;
  }(t2), Object.keys(t2).forEach(function(n2) {
    var r2 = n2.replace(/^-/, "").replace(/-([a-z])/g, function(e20, t3) {
      return t3.toUpperCase();
    });
    e19.style[r2] = t2[n2];
  });
}
var f_ = function() {
  function e19(e20) {
    this.velocityMultiplier = window.devicePixelRatio, this.updateTime = Date.now(), this.delta = { x: 0, y: 0 }, this.velocity = { x: 0, y: 0 }, this.lastPosition = { x: 0, y: 0 }, this.lastPosition = a_(e20);
  }
  return e19.prototype.update = function(e20) {
    var t2 = this, n2 = t2.velocity, r2 = t2.updateTime, i2 = t2.lastPosition, o2 = Date.now(), a2 = a_(e20), s2 = { x: -(a2.x - i2.x), y: -(a2.y - i2.y) }, u2 = o2 - r2 || 16.7, l2 = s2.x / u2 * 16.7, c2 = s2.y / u2 * 16.7;
    n2.x = l2 * this.velocityMultiplier, n2.y = c2 * this.velocityMultiplier, this.delta = s2, this.updateTime = o2, this.lastPosition = a2;
  }, e19;
}(), h_ = function() {
  function e19() {
    this._touchList = {};
  }
  return Object.defineProperty(e19.prototype, "_primitiveValue", { get: function() {
    return { x: 0, y: 0 };
  }, enumerable: true, configurable: true }), e19.prototype.isActive = function() {
    return void 0 !== this._activeTouchID;
  }, e19.prototype.getDelta = function() {
    var e20 = this._getActiveTracker();
    return e20 ? Ql({}, e20.delta) : this._primitiveValue;
  }, e19.prototype.getVelocity = function() {
    var e20 = this._getActiveTracker();
    return e20 ? Ql({}, e20.velocity) : this._primitiveValue;
  }, e19.prototype.getEasingDistance = function(e20) {
    var t2 = 1 - e20, n2 = { x: 0, y: 0 }, r2 = this.getVelocity();
    return Object.keys(r2).forEach(function(e21) {
      for (var i2 = Math.abs(r2[e21]) <= 10 ? 0 : r2[e21]; 0 !== i2; ) n2[e21] += i2, i2 = i2 * t2 | 0;
    }), n2;
  }, e19.prototype.track = function(e20) {
    var t2 = this, n2 = e20.targetTouches;
    return Array.from(n2).forEach(function(e21) {
      t2._add(e21);
    }), this._touchList;
  }, e19.prototype.update = function(e20) {
    var t2 = this, n2 = e20.touches, r2 = e20.changedTouches;
    return Array.from(n2).forEach(function(e21) {
      t2._renew(e21);
    }), this._setActiveID(r2), this._touchList;
  }, e19.prototype.release = function(e20) {
    var t2 = this;
    delete this._activeTouchID, Array.from(e20.changedTouches).forEach(function(e21) {
      t2._delete(e21);
    });
  }, e19.prototype._add = function(e20) {
    this._has(e20) && this._delete(e20);
    var t2 = new f_(e20);
    this._touchList[e20.identifier] = t2;
  }, e19.prototype._renew = function(e20) {
    this._has(e20) && this._touchList[e20.identifier].update(e20);
  }, e19.prototype._delete = function(e20) {
    delete this._touchList[e20.identifier];
  }, e19.prototype._has = function(e20) {
    return this._touchList.hasOwnProperty(e20.identifier);
  }, e19.prototype._setActiveID = function(e20) {
    this._activeTouchID = e20[e20.length - 1].identifier;
  }, e19.prototype._getActiveTracker = function() {
    return this._touchList[this._activeTouchID];
  }, e19;
}();
function p_(e19, t2, n2) {
  return Math.max(t2, Math.min(n2, e19));
}
function d_(e19, t2, n2) {
  var r2;
  void 0 === t2 && (t2 = 0);
  var i2 = -1 / 0;
  return function() {
    for (var o2 = this, a2 = [], s2 = 0; s2 < arguments.length; s2++) a2[s2] = arguments[s2];
    if (n2) {
      var u2 = Date.now(), l2 = u2 - i2;
      i2 = u2, l2 >= t2 && e19.apply(this, a2);
    }
    clearTimeout(r2), r2 = setTimeout(function() {
      e19.apply(o2, a2);
    }, t2);
  };
}
function m_(e19, t2) {
  return void 0 === t2 && (t2 = 1 / 0), function(n2, r2) {
    var i2 = "_" + r2;
    Object.defineProperty(n2, r2, { get: function() {
      return this[i2];
    }, set: function(n3) {
      Object.defineProperty(this, i2, { value: p_(n3, e19, t2), enumerable: false, writable: true, configurable: true });
    }, enumerable: true, configurable: true });
  };
}
function v_(e19, t2) {
  var n2 = "_" + t2;
  Object.defineProperty(e19, t2, { get: function() {
    return this[n2];
  }, set: function(e20) {
    Object.defineProperty(this, n2, { value: !!e20, enumerable: false, writable: true, configurable: true });
  }, enumerable: true, configurable: true });
}
function g_() {
  for (var e19 = [], t2 = 0; t2 < arguments.length; t2++) e19[t2] = arguments[t2];
  return function(t3, n2, r2) {
    var i2 = r2.value;
    return { get: function() {
      return this.hasOwnProperty(n2) || Object.defineProperty(this, n2, { value: d_.apply(void 0, tc([i2], e19)) }), this[n2];
    } };
  };
}
var __, y_ = function() {
  function e19(e20) {
    var t2 = this;
    void 0 === e20 && (e20 = {}), this.damping = 0.1, this.thumbMinSize = 20, this.renderByPixels = true, this.alwaysShowTracks = false, this.continuousScrolling = true, this.delegateTo = null, this.plugins = {}, Object.keys(e20).forEach(function(n2) {
      t2[n2] = e20[n2];
    });
  }
  return Object.defineProperty(e19.prototype, "wheelEventTarget", { get: function() {
    return this.delegateTo;
  }, set: function(e20) {
    console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."), this.delegateTo = e20;
  }, enumerable: true, configurable: true }), ec([m_(0, 1)], e19.prototype, "damping", void 0), ec([m_(0, 1 / 0)], e19.prototype, "thumbMinSize", void 0), ec([v_], e19.prototype, "renderByPixels", void 0), ec([v_], e19.prototype, "alwaysShowTracks", void 0), ec([v_], e19.prototype, "continuousScrolling", void 0), e19;
}();
!function(e19) {
  e19.X = "x", e19.Y = "y";
}(__ || (__ = {}));
var b_ = function() {
  function e19(e20, t2) {
    void 0 === t2 && (t2 = 0), this._direction = e20, this._minSize = t2, this.element = document.createElement("div"), this.displaySize = 0, this.realSize = 0, this.offset = 0, this.element.className = "scrollbar-thumb scrollbar-thumb-" + e20;
  }
  return e19.prototype.attachTo = function(e20) {
    e20.appendChild(this.element);
  }, e19.prototype.update = function(e20, t2, n2) {
    this.realSize = Math.min(t2 / n2, 1) * t2, this.displaySize = Math.max(this.realSize, this._minSize), this.offset = e20 / n2 * (t2 + (this.realSize - this.displaySize)), c_(this.element, this._getStyle());
  }, e19.prototype._getStyle = function() {
    switch (this._direction) {
      case __.X:
        return { width: this.displaySize + "px", "-transform": "translate3d(" + this.offset + "px, 0, 0)" };
      case __.Y:
        return { height: this.displaySize + "px", "-transform": "translate3d(0, " + this.offset + "px, 0)" };
      default:
        return null;
    }
  }, e19;
}(), w_ = function() {
  function e19(e20, t2) {
    void 0 === t2 && (t2 = 0), this.element = document.createElement("div"), this._isShown = false, this.element.className = "scrollbar-track scrollbar-track-" + e20, this.thumb = new b_(e20, t2), this.thumb.attachTo(this.element);
  }
  return e19.prototype.attachTo = function(e20) {
    e20.appendChild(this.element);
  }, e19.prototype.show = function() {
    this._isShown || (this._isShown = true, this.element.classList.add("show"));
  }, e19.prototype.hide = function() {
    this._isShown && (this._isShown = false, this.element.classList.remove("show"));
  }, e19.prototype.update = function(e20, t2, n2) {
    c_(this.element, { display: n2 <= t2 ? "none" : "block" }), this.thumb.update(e20, t2, n2);
  }, e19;
}(), x_ = function() {
  function e19(e20) {
    this._scrollbar = e20;
    var t2 = e20.options.thumbMinSize;
    this.xAxis = new w_(__.X, t2), this.yAxis = new w_(__.Y, t2), this.xAxis.attachTo(e20.containerEl), this.yAxis.attachTo(e20.containerEl), e20.options.alwaysShowTracks && (this.xAxis.show(), this.yAxis.show());
  }
  return e19.prototype.update = function() {
    var e20 = this._scrollbar, t2 = e20.size, n2 = e20.offset;
    this.xAxis.update(n2.x, t2.container.width, t2.content.width), this.yAxis.update(n2.y, t2.container.height, t2.content.height);
  }, e19.prototype.autoHideOnIdle = function() {
    this._scrollbar.options.alwaysShowTracks || (this.xAxis.hide(), this.yAxis.hide());
  }, ec([g_(300)], e19.prototype, "autoHideOnIdle", null), e19;
}();
var C_ = /* @__PURE__ */ new WeakMap();
function T_(e19) {
  return Math.pow(e19 - 1, 3) + 1;
}
var O_, S_, E_, P_ = function() {
  function e19(e20, t2) {
    var n2 = this.constructor;
    this.scrollbar = e20, this.name = n2.pluginName, this.options = Ql(Ql({}, n2.defaultOptions), t2);
  }
  return e19.prototype.onInit = function() {
  }, e19.prototype.onDestroy = function() {
  }, e19.prototype.onUpdate = function() {
  }, e19.prototype.onRender = function(e20) {
  }, e19.prototype.transformDelta = function(e20, t2) {
    return Ql({}, e20);
  }, e19.pluginName = "", e19.defaultOptions = {}, e19;
}(), k_ = { order: /* @__PURE__ */ new Set(), constructors: {} };
function M_() {
  for (var e19 = [], t2 = 0; t2 < arguments.length; t2++) e19[t2] = arguments[t2];
  e19.forEach(function(e20) {
    var t3 = e20.pluginName;
    if (!t3) throw new TypeError("plugin name is required");
    k_.order.add(t3), k_.constructors[t3] = e20;
  });
}
!function(e19) {
  e19[e19.TAB = 9] = "TAB", e19[e19.SPACE = 32] = "SPACE", e19[e19.PAGE_UP = 33] = "PAGE_UP", e19[e19.PAGE_DOWN = 34] = "PAGE_DOWN", e19[e19.END = 35] = "END", e19[e19.HOME = 36] = "HOME", e19[e19.LEFT = 37] = "LEFT", e19[e19.UP = 38] = "UP", e19[e19.RIGHT = 39] = "RIGHT", e19[e19.DOWN = 40] = "DOWN";
}(O_ || (O_ = {})), function(e19) {
  e19[e19.X = 0] = "X", e19[e19.Y = 1] = "Y";
}(S_ || (S_ = {}));
var N_ = { STANDARD: 1, OTHERS: -3 }, A_ = [1, 28, 500], R_ = function(e19) {
  return A_[e19] || A_[0];
};
const L_ = Object.freeze(Object.defineProperty({ __proto__: null, keyboardHandler: function(e19) {
  var t2 = o_(e19), n2 = e19.containerEl;
  t2(n2, "keydown", function(t3) {
    var r2 = document.activeElement;
    if ((r2 === n2 || n2.contains(r2)) && !function(e20) {
      if ("INPUT" === e20.tagName || "SELECT" === e20.tagName || "TEXTAREA" === e20.tagName || e20.isContentEditable) return !e20.disabled;
      return false;
    }(r2)) {
      var i2 = function(e20, t4) {
        var n3 = e20.size, r3 = e20.limit, i3 = e20.offset;
        switch (t4) {
          case O_.TAB:
            return function(e21) {
              requestAnimationFrame(function() {
                e21.scrollIntoView(document.activeElement, { offsetTop: e21.size.container.height / 2, offsetLeft: e21.size.container.width / 2, onlyScrollIfNeeded: true });
              });
            }(e20);
          case O_.SPACE:
            return [0, 200];
          case O_.PAGE_UP:
            return [0, 40 - n3.container.height];
          case O_.PAGE_DOWN:
            return [0, n3.container.height - 40];
          case O_.END:
            return [0, r3.y - i3.y];
          case O_.HOME:
            return [0, -i3.y];
          case O_.LEFT:
            return [-40, 0];
          case O_.UP:
            return [0, -40];
          case O_.RIGHT:
            return [40, 0];
          case O_.DOWN:
            return [0, 40];
          default:
            return null;
        }
      }(e19, t3.keyCode || t3.which);
      if (i2) {
        var o2 = i2[0], a2 = i2[1];
        e19.addTransformableMomentum(o2, a2, t3, function(n3) {
          n3 ? t3.preventDefault() : (e19.containerEl.blur(), e19.parent && e19.parent.containerEl.focus());
        });
      }
    }
  });
}, mouseHandler: function(e19) {
  var t2, n2, r2, i2, o2, a2 = o_(e19), s2 = e19.containerEl, u2 = e19.track, l2 = u2.xAxis, c2 = u2.yAxis;
  function f2(t3, n3) {
    var r3 = e19.size, i3 = e19.limit, o3 = e19.offset;
    return t3 === S_.X ? p_(n3 / (r3.container.width + (l2.thumb.realSize - l2.thumb.displaySize)) * r3.content.width, 0, i3.x) - o3.x : t3 === S_.Y ? p_(n3 / (r3.container.height + (c2.thumb.realSize - c2.thumb.displaySize)) * r3.content.height, 0, i3.y) - o3.y : 0;
  }
  function h2(e20) {
    return s_(e20, [l2.element, l2.thumb.element]) ? S_.X : s_(e20, [c2.element, c2.thumb.element]) ? S_.Y : void 0;
  }
  a2(s2, "click", function(t3) {
    if (!n2 && s_(t3.target, [l2.element, c2.element])) {
      var r3 = t3.target, i3 = h2(r3), o3 = r3.getBoundingClientRect(), a3 = a_(t3);
      if (i3 === S_.X) {
        var s3 = a3.x - o3.left - l2.thumb.displaySize / 2;
        e19.setMomentum(f2(i3, s3), 0);
      }
      if (i3 === S_.Y) {
        s3 = a3.y - o3.top - c2.thumb.displaySize / 2;
        e19.setMomentum(0, f2(i3, s3));
      }
    }
  }), a2(s2, "mousedown", function(n3) {
    if (s_(n3.target, [l2.thumb.element, c2.thumb.element])) {
      t2 = true;
      var a3 = n3.target, u3 = a_(n3), f3 = a3.getBoundingClientRect();
      i2 = h2(a3), r2 = { x: u3.x - f3.left, y: u3.y - f3.top }, o2 = s2.getBoundingClientRect(), c_(e19.containerEl, { "-user-select": "none" });
    }
  }), a2(window, "mousemove", function(a3) {
    if (t2) {
      n2 = true;
      var s3 = a_(a3);
      if (i2 === S_.X) {
        var u3 = s3.x - r2.x - o2.left;
        e19.setMomentum(f2(i2, u3), 0);
      }
      if (i2 === S_.Y) {
        u3 = s3.y - r2.y - o2.top;
        e19.setMomentum(0, f2(i2, u3));
      }
    }
  }), a2(window, "mouseup blur", function() {
    t2 = n2 = false, c_(e19.containerEl, { "-user-select": "" });
  });
}, resizeHandler: function(e19) {
  o_(e19)(window, "resize", d_(e19.update.bind(e19), 300));
}, selectHandler: function(e19) {
  var t2, n2 = o_(e19), r2 = e19.containerEl, i2 = e19.contentEl, o2 = false, a2 = false;
  function s2(n3) {
    var r3 = n3.x, i3 = n3.y;
    if (r3 || i3) {
      var o3 = e19.offset, a3 = e19.limit;
      e19.setMomentum(p_(o3.x + r3, 0, a3.x) - o3.x, p_(o3.y + i3, 0, a3.y) - o3.y), t2 = requestAnimationFrame(function() {
        s2({ x: r3, y: i3 });
      });
    }
  }
  n2(window, "mousemove", function(n3) {
    if (o2) {
      cancelAnimationFrame(t2);
      var r3 = function(e20, t3) {
        var n4 = e20.bounding, r4 = n4.top, i3 = n4.right, o3 = n4.bottom, a3 = n4.left, s3 = a_(t3), u2 = s3.x, l2 = s3.y, c2 = { x: 0, y: 0 }, f2 = 20;
        if (0 === u2 && 0 === l2) return c2;
        u2 > i3 - f2 ? c2.x = u2 - i3 + f2 : u2 < a3 + f2 && (c2.x = u2 - a3 - f2);
        l2 > o3 - f2 ? c2.y = l2 - o3 + f2 : l2 < r4 + f2 && (c2.y = l2 - r4 - f2);
        return c2.x *= 2, c2.y *= 2, c2;
      }(e19, n3);
      s2(r3);
    }
  }), n2(i2, "contextmenu", function() {
    a2 = true, cancelAnimationFrame(t2), o2 = false;
  }), n2(i2, "mousedown", function() {
    a2 = false;
  }), n2(i2, "selectstart", function() {
    a2 || (cancelAnimationFrame(t2), o2 = true);
  }), n2(window, "mouseup blur", function() {
    cancelAnimationFrame(t2), o2 = false, a2 = false;
  }), n2(r2, "scroll", function(e20) {
    e20.preventDefault(), r2.scrollTop = r2.scrollLeft = 0;
  });
}, touchHandler: function(e19) {
  var t2, n2 = e19.options.delegateTo || e19.containerEl, r2 = new h_(), i2 = o_(e19), o2 = 0;
  i2(n2, "touchstart", function(n3) {
    r2.track(n3), e19.setMomentum(0, 0), 0 === o2 && (t2 = e19.options.damping, e19.options.damping = Math.max(t2, 0.5)), o2++;
  }), i2(n2, "touchmove", function(t3) {
    if (!E_ || E_ === e19) {
      r2.update(t3);
      var n3 = r2.getDelta(), i3 = n3.x, o3 = n3.y;
      e19.addTransformableMomentum(i3, o3, t3, function(n4) {
        n4 && t3.cancelable && (t3.preventDefault(), E_ = e19);
      });
    }
  }), i2(n2, "touchcancel touchend", function(n3) {
    var i3 = r2.getEasingDistance(t2);
    e19.addTransformableMomentum(i3.x, i3.y, n3), 0 === --o2 && (e19.options.damping = t2), r2.release(n3), E_ = null;
  });
}, wheelHandler: function(e19) {
  o_(e19)(e19.options.delegateTo || e19.containerEl, "onwheel" in window || document.implementation.hasFeature("Events.wheel", "3.0") ? "wheel" : "mousewheel", function(t2) {
    var n2 = function(e20) {
      if ("deltaX" in e20) {
        var t3 = R_(e20.deltaMode);
        return { x: e20.deltaX / N_.STANDARD * t3, y: e20.deltaY / N_.STANDARD * t3 };
      }
      if ("wheelDeltaX" in e20) return { x: e20.wheelDeltaX / N_.OTHERS, y: e20.wheelDeltaY / N_.OTHERS };
      return { x: 0, y: e20.wheelDelta / N_.OTHERS };
    }(t2), r2 = n2.x, i2 = n2.y;
    e19.addTransformableMomentum(r2, i2, t2, function(e20) {
      e20 && t2.preventDefault();
    });
  });
} }, Symbol.toStringTag, { value: "Module" }));
var j_ = /* @__PURE__ */ new Map(), D_ = function() {
  function e19(e20, t2) {
    var n2 = this;
    this.offset = { x: 0, y: 0 }, this.limit = { x: 1 / 0, y: 1 / 0 }, this.bounding = { top: 0, right: 0, bottom: 0, left: 0 }, this._plugins = [], this._momentum = { x: 0, y: 0 }, this._listeners = /* @__PURE__ */ new Set(), this.containerEl = e20;
    var r2 = this.contentEl = document.createElement("div");
    this.options = new y_(t2), e20.setAttribute("data-scrollbar", "true"), e20.setAttribute("tabindex", "-1"), c_(e20, { overflow: "hidden", outline: "none" }), window.navigator.msPointerEnabled && (e20.style.msTouchAction = "none"), r2.className = "scroll-content", Array.from(e20.childNodes).forEach(function(e21) {
      r2.appendChild(e21);
    }), e20.appendChild(r2), this.track = new x_(this), this.size = this.getSize(), this._plugins = function(e21, t3) {
      return Array.from(k_.order).filter(function(e22) {
        return false !== t3[e22];
      }).map(function(n3) {
        var r3 = new (0, k_.constructors[n3])(e21, t3[n3]);
        return t3[n3] = r3.options, r3;
      });
    }(this, this.options.plugins);
    var i2 = e20.scrollLeft, o2 = e20.scrollTop;
    e20.scrollLeft = e20.scrollTop = 0, this.setPosition(i2, o2, { withoutCallbacks: true });
    var a2 = window.ResizeObserver;
    "function" == typeof a2 && (this._observer = new a2(function() {
      n2.update();
    }), this._observer.observe(r2)), j_.set(e20, this), requestAnimationFrame(function() {
      n2._init();
    });
  }
  return Object.defineProperty(e19.prototype, "parent", { get: function() {
    for (var e20 = this.containerEl.parentElement; e20; ) {
      var t2 = j_.get(e20);
      if (t2) return t2;
      e20 = e20.parentElement;
    }
    return null;
  }, enumerable: true, configurable: true }), Object.defineProperty(e19.prototype, "scrollTop", { get: function() {
    return this.offset.y;
  }, set: function(e20) {
    this.setPosition(this.scrollLeft, e20);
  }, enumerable: true, configurable: true }), Object.defineProperty(e19.prototype, "scrollLeft", { get: function() {
    return this.offset.x;
  }, set: function(e20) {
    this.setPosition(e20, this.scrollTop);
  }, enumerable: true, configurable: true }), e19.prototype.getSize = function() {
    return t2 = (e20 = this).containerEl, n2 = e20.contentEl, r2 = getComputedStyle(t2), i2 = ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"].map(function(e21) {
      return r2[e21] ? parseFloat(r2[e21]) : 0;
    }), o2 = i2[0] + i2[1], a2 = i2[2] + i2[3], { container: { width: t2.clientWidth, height: t2.clientHeight }, content: { width: n2.offsetWidth - n2.clientWidth + n2.scrollWidth + a2, height: n2.offsetHeight - n2.clientHeight + n2.scrollHeight + o2 } };
    var e20, t2, n2, r2, i2, o2, a2;
  }, e19.prototype.update = function() {
    var e20, t2, n2, r2, i2;
    t2 = (e20 = this).getSize(), n2 = { x: Math.max(t2.content.width - t2.container.width, 0), y: Math.max(t2.content.height - t2.container.height, 0) }, r2 = e20.containerEl.getBoundingClientRect(), i2 = { top: Math.max(r2.top, 0), right: Math.min(r2.right, window.innerWidth), bottom: Math.min(r2.bottom, window.innerHeight), left: Math.max(r2.left, 0) }, e20.size = t2, e20.limit = n2, e20.bounding = i2, e20.track.update(), e20.setPosition(), this._plugins.forEach(function(e21) {
      e21.onUpdate();
    });
  }, e19.prototype.isVisible = function(e20) {
    return function(e21, t2) {
      var n2 = e21.bounding, r2 = t2.getBoundingClientRect(), i2 = Math.max(n2.top, r2.top), o2 = Math.max(n2.left, r2.left), a2 = Math.min(n2.right, r2.right);
      return i2 < Math.min(n2.bottom, r2.bottom) && o2 < a2;
    }(this, e20);
  }, e19.prototype.setPosition = function(e20, t2, n2) {
    var r2 = this;
    void 0 === e20 && (e20 = this.offset.x), void 0 === t2 && (t2 = this.offset.y), void 0 === n2 && (n2 = {});
    var i2 = function(e21, t3, n3) {
      var r3 = e21.options, i3 = e21.offset, o2 = e21.limit, a2 = e21.track, s2 = e21.contentEl;
      return r3.renderByPixels && (t3 = Math.round(t3), n3 = Math.round(n3)), t3 = p_(t3, 0, o2.x), n3 = p_(n3, 0, o2.y), t3 !== i3.x && a2.xAxis.show(), n3 !== i3.y && a2.yAxis.show(), r3.alwaysShowTracks || a2.autoHideOnIdle(), t3 === i3.x && n3 === i3.y ? null : (i3.x = t3, i3.y = n3, c_(s2, { "-transform": "translate3d(" + -t3 + "px, " + -n3 + "px, 0)" }), a2.update(), { offset: Ql({}, i3), limit: Ql({}, o2) });
    }(this, e20, t2);
    i2 && !n2.withoutCallbacks && this._listeners.forEach(function(e21) {
      e21.call(r2, i2);
    });
  }, e19.prototype.scrollTo = function(e20, t2, n2, r2) {
    void 0 === e20 && (e20 = this.offset.x), void 0 === t2 && (t2 = this.offset.y), void 0 === n2 && (n2 = 0), void 0 === r2 && (r2 = {}), function(e21, t3, n3, r3, i2) {
      void 0 === r3 && (r3 = 0);
      var o2 = void 0 === i2 ? {} : i2, a2 = o2.easing, s2 = void 0 === a2 ? T_ : a2, u2 = o2.callback, l2 = e21.options, c2 = e21.offset, f2 = e21.limit;
      l2.renderByPixels && (t3 = Math.round(t3), n3 = Math.round(n3));
      var h2 = c2.x, p2 = c2.y, d2 = p_(t3, 0, f2.x) - h2, m2 = p_(n3, 0, f2.y) - p2, v2 = Date.now();
      cancelAnimationFrame(C_.get(e21)), function t4() {
        var n4 = Date.now() - v2, i3 = r3 ? s2(Math.min(n4 / r3, 1)) : 1;
        if (e21.setPosition(h2 + d2 * i3, p2 + m2 * i3), n4 >= r3) "function" == typeof u2 && u2.call(e21);
        else {
          var o3 = requestAnimationFrame(t4);
          C_.set(e21, o3);
        }
      }();
    }(this, e20, t2, n2, r2);
  }, e19.prototype.scrollIntoView = function(e20, t2) {
    void 0 === t2 && (t2 = {}), function(e21, t3, n2) {
      var r2 = void 0 === n2 ? {} : n2, i2 = r2.alignToTop, o2 = void 0 === i2 || i2, a2 = r2.onlyScrollIfNeeded, s2 = void 0 !== a2 && a2, u2 = r2.offsetTop, l2 = void 0 === u2 ? 0 : u2, c2 = r2.offsetLeft, f2 = void 0 === c2 ? 0 : c2, h2 = r2.offsetBottom, p2 = void 0 === h2 ? 0 : h2, d2 = e21.containerEl, m2 = e21.bounding, v2 = e21.offset, g2 = e21.limit;
      if (t3 && d2.contains(t3)) {
        var _2 = t3.getBoundingClientRect();
        if (!s2 || !e21.isVisible(t3)) {
          var y2 = o2 ? _2.top - m2.top - l2 : _2.bottom - m2.bottom + p2;
          e21.setMomentum(_2.left - m2.left - f2, p_(y2, -v2.y, g2.y - v2.y));
        }
      }
    }(this, e20, t2);
  }, e19.prototype.addListener = function(e20) {
    if ("function" != typeof e20) throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");
    this._listeners.add(e20);
  }, e19.prototype.removeListener = function(e20) {
    this._listeners.delete(e20);
  }, e19.prototype.addTransformableMomentum = function(e20, t2, n2, r2) {
    this._updateDebounced();
    var i2 = this._plugins.reduce(function(e21, t3) {
      return t3.transformDelta(e21, n2) || e21;
    }, { x: e20, y: t2 }), o2 = !this._shouldPropagateMomentum(i2.x, i2.y);
    o2 && this.addMomentum(i2.x, i2.y), r2 && r2.call(this, o2);
  }, e19.prototype.addMomentum = function(e20, t2) {
    this.setMomentum(this._momentum.x + e20, this._momentum.y + t2);
  }, e19.prototype.setMomentum = function(e20, t2) {
    0 === this.limit.x && (e20 = 0), 0 === this.limit.y && (t2 = 0), this.options.renderByPixels && (e20 = Math.round(e20), t2 = Math.round(t2)), this._momentum.x = e20, this._momentum.y = t2;
  }, e19.prototype.updatePluginOptions = function(e20, t2) {
    this._plugins.forEach(function(n2) {
      n2.name === e20 && Object.assign(n2.options, t2);
    });
  }, e19.prototype.destroy = function() {
    var e20, t2, n2 = this.containerEl, r2 = this.contentEl;
    e20 = this, (t2 = r_.get(e20)) && (t2.forEach(function(e21) {
      var t3 = e21.elem, n3 = e21.eventName, r3 = e21.handler;
      t3.removeEventListener(n3, r3, i_());
    }), r_.delete(e20)), this._listeners.clear(), this.setMomentum(0, 0), cancelAnimationFrame(this._renderID), this._observer && this._observer.disconnect(), j_.delete(this.containerEl);
    for (var i2 = Array.from(r2.childNodes); n2.firstChild; ) n2.removeChild(n2.firstChild);
    i2.forEach(function(e21) {
      n2.appendChild(e21);
    }), c_(n2, { overflow: "" }), n2.scrollTop = this.scrollTop, n2.scrollLeft = this.scrollLeft, this._plugins.forEach(function(e21) {
      e21.onDestroy();
    }), this._plugins.length = 0;
  }, e19.prototype._init = function() {
    var e20 = this;
    this.update(), Object.keys(L_).forEach(function(t2) {
      L_[t2](e20);
    }), this._plugins.forEach(function(e21) {
      e21.onInit();
    }), this._render();
  }, e19.prototype._updateDebounced = function() {
    this.update();
  }, e19.prototype._shouldPropagateMomentum = function(e20, t2) {
    void 0 === e20 && (e20 = 0), void 0 === t2 && (t2 = 0);
    var n2 = this, r2 = n2.options, i2 = n2.offset, o2 = n2.limit;
    if (!r2.continuousScrolling) return false;
    0 === o2.x && 0 === o2.y && this._updateDebounced();
    var a2 = p_(e20 + i2.x, 0, o2.x), s2 = p_(t2 + i2.y, 0, o2.y), u2 = true;
    return u2 = (u2 = (u2 = u2 && a2 === i2.x) && s2 === i2.y) && (i2.x === o2.x || 0 === i2.x || i2.y === o2.y || 0 === i2.y);
  }, e19.prototype._render = function() {
    var e20 = this._momentum;
    if (e20.x || e20.y) {
      var t2 = this._nextTick("x"), n2 = this._nextTick("y");
      e20.x = t2.momentum, e20.y = n2.momentum, this.setPosition(t2.position, n2.position);
    }
    var r2 = Ql({}, this._momentum);
    this._plugins.forEach(function(e21) {
      e21.onRender(r2);
    }), this._renderID = requestAnimationFrame(this._render.bind(this));
  }, e19.prototype._nextTick = function(e20) {
    var t2 = this, n2 = t2.options, r2 = t2.offset, i2 = t2._momentum, o2 = r2[e20], a2 = i2[e20];
    if (Math.abs(a2) <= 0.1) return { momentum: 0, position: o2 + a2 };
    var s2 = a2 * (1 - n2.damping);
    return n2.renderByPixels && (s2 |= 0), { momentum: s2, position: o2 + a2 - s2 };
  }, ec([g_(100, true)], e19.prototype, "_updateDebounced", null), e19;
}(), z_ = "smooth-scrollbar-style", I_ = false;
function B_() {
  if (!I_ && "undefined" != typeof window) {
    var e19 = document.createElement("style");
    e19.id = z_, e19.textContent = "\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  display: flow-root;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: rgba(222, 222, 222, .75);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: rgba(0, 0, 0, .5);\n  border-radius: 4px;\n}\n", document.head && document.head.appendChild(e19), I_ = true;
  }
}
var F_ = function(e19) {
  function t2() {
    return null !== e19 && e19.apply(this, arguments) || this;
  }
  return function(e20, t3) {
    function n2() {
      this.constructor = e20;
    }
    Ll(e20, t3), e20.prototype = null === t3 ? Object.create(t3) : (n2.prototype = t3.prototype, new n2());
  }(t2, e19), t2.init = function(e20, t3) {
    if (!e20 || 1 !== e20.nodeType) throw new TypeError("expect element to be DOM Element, but got " + e20);
    return B_(), j_.has(e20) ? j_.get(e20) : new D_(e20, t3);
  }, t2.initAll = function(e20) {
    return Array.from(document.querySelectorAll("[data-scrollbar]"), function(n2) {
      return t2.init(n2, e20);
    });
  }, t2.has = function(e20) {
    return j_.has(e20);
  }, t2.get = function(e20) {
    return j_.get(e20);
  }, t2.getAll = function() {
    return Array.from(j_.values());
  }, t2.destroy = function(e20) {
    var t3 = j_.get(e20);
    t3 && t3.destroy();
  }, t2.destroyAll = function() {
    j_.forEach(function(e20) {
      e20.destroy();
    });
  }, t2.use = function() {
    for (var e20 = [], t3 = 0; t3 < arguments.length; t3++) e20[t3] = arguments[t3];
    return M_.apply(void 0, e20);
  }, t2.attachStyle = function() {
    return B_();
  }, t2.detachStyle = function() {
    return function() {
      if (I_ && "undefined" != typeof window) {
        var e20 = document.getElementById(z_);
        e20 && e20.parentNode && (e20.parentNode.removeChild(e20), I_ = false);
      }
    }();
  }, t2.version = "8.8.4", t2.ScrollbarPlugin = P_, t2;
}(D_);
function V_(e19, t2, n2) {
  return t2 && function(e20, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r2 = t3[n3];
      r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e20, r2.key, r2);
    }
  }(e19.prototype, t2), e19;
}
/*!
 * Observer 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var H_, U_, W_, $_, Y_, X_, q_, Z_, G_, K_, J_, Q_, ey, ty = function() {
  return H_ || "undefined" != typeof window && (H_ = window.gsap) && H_.registerPlugin && H_;
}, ny = 1, ry = [], iy = [], oy = [], ay = Date.now, sy = function(e19, t2) {
  return t2;
}, uy = function(e19, t2) {
  return ~oy.indexOf(e19) && oy[oy.indexOf(e19) + 1][t2];
}, ly = function(e19) {
  return !!~K_.indexOf(e19);
}, cy = function(e19, t2, n2, r2, i2) {
  return e19.addEventListener(t2, n2, { passive: false !== r2, capture: !!i2 });
}, fy = function(e19, t2, n2, r2) {
  return e19.removeEventListener(t2, n2, !!r2);
}, hy = "scrollLeft", py = "scrollTop", dy = function() {
  return J_ && J_.isPressed || iy.cache++;
}, my = function(e19, t2) {
  var n2 = function n3(r2) {
    if (r2 || 0 === r2) {
      ny && (W_.history.scrollRestoration = "manual");
      var i2 = J_ && J_.isPressed;
      r2 = n3.v = Math.round(r2) || (J_ && J_.iOS ? 1 : 0), e19(r2), n3.cacheID = iy.cache, i2 && sy("ss", r2);
    } else (t2 || iy.cache !== n3.cacheID || sy("ref")) && (n3.cacheID = iy.cache, n3.v = e19());
    return n3.v + n3.offset;
  };
  return n2.offset = 0, e19 && n2;
}, vy = { s: hy, p: "left", p2: "Left", os: "right", os2: "Right", d: "width", d2: "Width", a: "x", sc: my(function(e19) {
  return arguments.length ? W_.scrollTo(e19, gy.sc()) : W_.pageXOffset || $_[hy] || Y_[hy] || X_[hy] || 0;
}) }, gy = { s: py, p: "top", p2: "Top", os: "bottom", os2: "Bottom", d: "height", d2: "Height", a: "y", op: vy, sc: my(function(e19) {
  return arguments.length ? W_.scrollTo(vy.sc(), e19) : W_.pageYOffset || $_[py] || Y_[py] || X_[py] || 0;
}) }, _y = function(e19, t2) {
  return (t2 && t2._ctx && t2._ctx.selector || H_.utils.toArray)(e19)[0] || ("string" == typeof e19 && false !== H_.config().nullTargetWarn ? console.warn("Element not found:", e19) : null);
}, yy = function(e19, t2) {
  var n2 = t2.s, r2 = t2.sc;
  ly(e19) && (e19 = $_.scrollingElement || Y_);
  var i2 = iy.indexOf(e19), o2 = r2 === gy.sc ? 1 : 2;
  !~i2 && (i2 = iy.push(e19) - 1), iy[i2 + o2] || cy(e19, "scroll", dy);
  var a2 = iy[i2 + o2], s2 = a2 || (iy[i2 + o2] = my(uy(e19, n2), true) || (ly(e19) ? r2 : my(function(t3) {
    return arguments.length ? e19[n2] = t3 : e19[n2];
  })));
  return s2.target = e19, a2 || (s2.smooth = "smooth" === H_.getProperty(e19, "scrollBehavior")), s2;
}, by = function(e19, t2, n2) {
  var r2 = e19, i2 = e19, o2 = ay(), a2 = o2, s2 = t2 || 50, u2 = Math.max(500, 3 * s2), l2 = function(e20, t3) {
    var u3 = ay();
    t3 || u3 - o2 > s2 ? (i2 = r2, r2 = e20, a2 = o2, o2 = u3) : n2 ? r2 += e20 : r2 = i2 + (e20 - i2) / (u3 - a2) * (o2 - a2);
  };
  return { update: l2, reset: function() {
    i2 = r2 = n2 ? 0 : r2, a2 = o2 = 0;
  }, getVelocity: function(e20) {
    var t3 = a2, s3 = i2, c2 = ay();
    return (e20 || 0 === e20) && e20 !== r2 && l2(e20), o2 === a2 || c2 - a2 > u2 ? 0 : (r2 + (n2 ? s3 : -s3)) / ((n2 ? c2 : o2) - t3) * 1e3;
  } };
}, wy = function(e19, t2) {
  return t2 && !e19._gsapAllow && e19.preventDefault(), e19.changedTouches ? e19.changedTouches[0] : e19;
}, xy = function(e19) {
  var t2 = Math.max.apply(Math, e19), n2 = Math.min.apply(Math, e19);
  return Math.abs(t2) >= Math.abs(n2) ? t2 : n2;
}, Cy = function() {
  (G_ = H_.core.globals().ScrollTrigger) && G_.core && function() {
    var e19 = G_.core, t2 = e19.bridge || {}, n2 = e19._scrollers, r2 = e19._proxies;
    n2.push.apply(n2, iy), r2.push.apply(r2, oy), iy = n2, oy = r2, sy = function(e20, n3) {
      return t2[e20](n3);
    };
  }();
}, Ty = function(e19) {
  return H_ = e19 || ty(), !U_ && H_ && "undefined" != typeof document && document.body && (W_ = window, $_ = document, Y_ = $_.documentElement, X_ = $_.body, K_ = [W_, $_, Y_, X_], H_.utils.clamp, ey = H_.core.context || function() {
  }, Z_ = "onpointerenter" in X_ ? "pointer" : "mouse", q_ = Oy.isTouch = W_.matchMedia && W_.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in W_ || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Q_ = Oy.eventTypes = ("ontouchstart" in Y_ ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Y_ ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
    return ny = 0;
  }, 500), Cy(), U_ = 1), U_;
};
vy.op = gy, iy.cache = 0;
var Oy = function() {
  function e19(e20) {
    this.init(e20);
  }
  return e19.prototype.init = function(e20) {
    U_ || Ty(H_) || console.warn("Please gsap.registerPlugin(Observer)"), G_ || Cy();
    var t2 = e20.tolerance, n2 = e20.dragMinimum, r2 = e20.type, i2 = e20.target, o2 = e20.lineHeight, a2 = e20.debounce, s2 = e20.preventDefault, u2 = e20.onStop, l2 = e20.onStopDelay, c2 = e20.ignore, f2 = e20.wheelSpeed, h2 = e20.event, p2 = e20.onDragStart, d2 = e20.onDragEnd, m2 = e20.onDrag, v2 = e20.onPress, g2 = e20.onRelease, _2 = e20.onRight, y2 = e20.onLeft, b2 = e20.onUp, w2 = e20.onDown, x2 = e20.onChangeX, C2 = e20.onChangeY, T2 = e20.onChange, O2 = e20.onToggleX, S2 = e20.onToggleY, E2 = e20.onHover, P2 = e20.onHoverEnd, k2 = e20.onMove, M2 = e20.ignoreCheck, N2 = e20.isNormalizer, A2 = e20.onGestureStart, R2 = e20.onGestureEnd, L2 = e20.onWheel, j2 = e20.onEnable, D2 = e20.onDisable, z2 = e20.onClick, I2 = e20.scrollSpeed, B2 = e20.capture, F2 = e20.allowClicks, V2 = e20.lockAxis, H2 = e20.onLockAxis;
    this.target = i2 = _y(i2) || Y_, this.vars = e20, c2 && (c2 = H_.utils.toArray(c2)), t2 = t2 || 1e-9, n2 = n2 || 0, f2 = f2 || 1, I2 = I2 || 1, r2 = r2 || "wheel,touch,pointer", a2 = false !== a2, o2 || (o2 = parseFloat(W_.getComputedStyle(X_).lineHeight) || 22);
    var U2, W2, $2, Y2, X2, q2, Z2, G2 = this, K2 = 0, J2 = 0, Q2 = e20.passive || !s2 && false !== e20.passive, ee2 = yy(i2, vy), te2 = yy(i2, gy), ne2 = ee2(), re2 = te2(), ie2 = ~r2.indexOf("touch") && !~r2.indexOf("pointer") && "pointerdown" === Q_[0], oe2 = ly(i2), ae2 = i2.ownerDocument || $_, se2 = [0, 0, 0], ue2 = [0, 0, 0], le2 = 0, ce2 = function() {
      return le2 = ay();
    }, fe2 = function(e21, t3) {
      return (G2.event = e21) && c2 && ~c2.indexOf(e21.target) || t3 && ie2 && "touch" !== e21.pointerType || M2 && M2(e21, t3);
    }, he2 = function() {
      var e21 = G2.deltaX = xy(se2), n3 = G2.deltaY = xy(ue2), r3 = Math.abs(e21) >= t2, i3 = Math.abs(n3) >= t2;
      T2 && (r3 || i3) && T2(G2, e21, n3, se2, ue2), r3 && (_2 && G2.deltaX > 0 && _2(G2), y2 && G2.deltaX < 0 && y2(G2), x2 && x2(G2), O2 && G2.deltaX < 0 != K2 < 0 && O2(G2), K2 = G2.deltaX, se2[0] = se2[1] = se2[2] = 0), i3 && (w2 && G2.deltaY > 0 && w2(G2), b2 && G2.deltaY < 0 && b2(G2), C2 && C2(G2), S2 && G2.deltaY < 0 != J2 < 0 && S2(G2), J2 = G2.deltaY, ue2[0] = ue2[1] = ue2[2] = 0), (Y2 || $2) && (k2 && k2(G2), $2 && (p2 && 1 === $2 && p2(G2), m2 && m2(G2), $2 = 0), Y2 = false), q2 && !(q2 = false) && H2 && H2(G2), X2 && (L2(G2), X2 = false), U2 = 0;
    }, pe2 = function(e21, t3, n3) {
      se2[n3] += e21, ue2[n3] += t3, G2._vx.update(e21), G2._vy.update(t3), a2 ? U2 || (U2 = requestAnimationFrame(he2)) : he2();
    }, de2 = function(e21, t3) {
      V2 && !Z2 && (G2.axis = Z2 = Math.abs(e21) > Math.abs(t3) ? "x" : "y", q2 = true), "y" !== Z2 && (se2[2] += e21, G2._vx.update(e21, true)), "x" !== Z2 && (ue2[2] += t3, G2._vy.update(t3, true)), a2 ? U2 || (U2 = requestAnimationFrame(he2)) : he2();
    }, me2 = function(e21) {
      if (!fe2(e21, 1)) {
        var t3 = (e21 = wy(e21, s2)).clientX, r3 = e21.clientY, i3 = t3 - G2.x, o3 = r3 - G2.y, a3 = G2.isDragging;
        G2.x = t3, G2.y = r3, (a3 || (i3 || o3) && (Math.abs(G2.startX - t3) >= n2 || Math.abs(G2.startY - r3) >= n2)) && ($2 = a3 ? 2 : 1, a3 || (G2.isDragging = true), de2(i3, o3));
      }
    }, ve2 = G2.onPress = function(e21) {
      fe2(e21, 1) || e21 && e21.button || (G2.axis = Z2 = null, W2.pause(), G2.isPressed = true, e21 = wy(e21), K2 = J2 = 0, G2.startX = G2.x = e21.clientX, G2.startY = G2.y = e21.clientY, G2._vx.reset(), G2._vy.reset(), cy(N2 ? i2 : ae2, Q_[1], me2, Q2, true), G2.deltaX = G2.deltaY = 0, v2 && v2(G2));
    }, ge2 = G2.onRelease = function(e21) {
      if (!fe2(e21, 1)) {
        fy(N2 ? i2 : ae2, Q_[1], me2, true);
        var t3 = !isNaN(G2.y - G2.startY), n3 = G2.isDragging, r3 = n3 && (Math.abs(G2.x - G2.startX) > 3 || Math.abs(G2.y - G2.startY) > 3), o3 = wy(e21);
        !r3 && t3 && (G2._vx.reset(), G2._vy.reset(), s2 && F2 && H_.delayedCall(0.08, function() {
          if (ay() - le2 > 300 && !e21.defaultPrevented) {
            if (e21.target.click) e21.target.click();
            else if (ae2.createEvent) {
              var t4 = ae2.createEvent("MouseEvents");
              t4.initMouseEvent("click", true, true, W_, 1, o3.screenX, o3.screenY, o3.clientX, o3.clientY, false, false, false, false, 0, null), e21.target.dispatchEvent(t4);
            }
          }
        })), G2.isDragging = G2.isGesturing = G2.isPressed = false, u2 && n3 && !N2 && W2.restart(true), $2 && he2(), d2 && n3 && d2(G2), g2 && g2(G2, r3);
      }
    }, _e2 = function(e21) {
      return e21.touches && e21.touches.length > 1 && (G2.isGesturing = true) && A2(e21, G2.isDragging);
    }, ye2 = function() {
      return (G2.isGesturing = false) || R2(G2);
    }, be2 = function(e21) {
      if (!fe2(e21)) {
        var t3 = ee2(), n3 = te2();
        pe2((t3 - ne2) * I2, (n3 - re2) * I2, 1), ne2 = t3, re2 = n3, u2 && W2.restart(true);
      }
    }, we2 = function(e21) {
      if (!fe2(e21)) {
        e21 = wy(e21, s2), L2 && (X2 = true);
        var t3 = (1 === e21.deltaMode ? o2 : 2 === e21.deltaMode ? W_.innerHeight : 1) * f2;
        pe2(e21.deltaX * t3, e21.deltaY * t3, 0), u2 && !N2 && W2.restart(true);
      }
    }, xe2 = function(e21) {
      if (!fe2(e21)) {
        var t3 = e21.clientX, n3 = e21.clientY, r3 = t3 - G2.x, i3 = n3 - G2.y;
        G2.x = t3, G2.y = n3, Y2 = true, u2 && W2.restart(true), (r3 || i3) && de2(r3, i3);
      }
    }, Ce2 = function(e21) {
      G2.event = e21, E2(G2);
    }, Te2 = function(e21) {
      G2.event = e21, P2(G2);
    }, Oe2 = function(e21) {
      return fe2(e21) || wy(e21, s2) && z2(G2);
    };
    W2 = G2._dc = H_.delayedCall(l2 || 0.25, function() {
      G2._vx.reset(), G2._vy.reset(), W2.pause(), u2 && u2(G2);
    }).pause(), G2.deltaX = G2.deltaY = 0, G2._vx = by(0, 50, true), G2._vy = by(0, 50, true), G2.scrollX = ee2, G2.scrollY = te2, G2.isDragging = G2.isGesturing = G2.isPressed = false, ey(this), G2.enable = function(e21) {
      return G2.isEnabled || (cy(oe2 ? ae2 : i2, "scroll", dy), r2.indexOf("scroll") >= 0 && cy(oe2 ? ae2 : i2, "scroll", be2, Q2, B2), r2.indexOf("wheel") >= 0 && cy(i2, "wheel", we2, Q2, B2), (r2.indexOf("touch") >= 0 && q_ || r2.indexOf("pointer") >= 0) && (cy(i2, Q_[0], ve2, Q2, B2), cy(ae2, Q_[2], ge2), cy(ae2, Q_[3], ge2), F2 && cy(i2, "click", ce2, true, true), z2 && cy(i2, "click", Oe2), A2 && cy(ae2, "gesturestart", _e2), R2 && cy(ae2, "gestureend", ye2), E2 && cy(i2, Z_ + "enter", Ce2), P2 && cy(i2, Z_ + "leave", Te2), k2 && cy(i2, Z_ + "move", xe2)), G2.isEnabled = true, G2.isDragging = G2.isGesturing = G2.isPressed = Y2 = $2 = false, G2._vx.reset(), G2._vy.reset(), ne2 = ee2(), re2 = te2(), e21 && e21.type && ve2(e21), j2 && j2(G2)), G2;
    }, G2.disable = function() {
      G2.isEnabled && (ry.filter(function(e21) {
        return e21 !== G2 && ly(e21.target);
      }).length || fy(oe2 ? ae2 : i2, "scroll", dy), G2.isPressed && (G2._vx.reset(), G2._vy.reset(), fy(N2 ? i2 : ae2, Q_[1], me2, true)), fy(oe2 ? ae2 : i2, "scroll", be2, B2), fy(i2, "wheel", we2, B2), fy(i2, Q_[0], ve2, B2), fy(ae2, Q_[2], ge2), fy(ae2, Q_[3], ge2), fy(i2, "click", ce2, true), fy(i2, "click", Oe2), fy(ae2, "gesturestart", _e2), fy(ae2, "gestureend", ye2), fy(i2, Z_ + "enter", Ce2), fy(i2, Z_ + "leave", Te2), fy(i2, Z_ + "move", xe2), G2.isEnabled = G2.isPressed = G2.isDragging = false, D2 && D2(G2));
    }, G2.kill = G2.revert = function() {
      G2.disable();
      var e21 = ry.indexOf(G2);
      e21 >= 0 && ry.splice(e21, 1), J_ === G2 && (J_ = 0);
    }, ry.push(G2), N2 && ly(i2) && (J_ = G2), G2.enable(h2);
  }, V_(e19, [{ key: "velocityX", get: function() {
    return this._vx.getVelocity();
  } }, { key: "velocityY", get: function() {
    return this._vy.getVelocity();
  } }]), e19;
}();
Oy.version = "3.12.7", Oy.create = function(e19) {
  return new Oy(e19);
}, Oy.register = Ty, Oy.getAll = function() {
  return ry.slice();
}, Oy.getById = function(e19) {
  return ry.filter(function(t2) {
    return t2.vars.id === e19;
  })[0];
}, ty() && H_.registerPlugin(Oy);
/*!
 * ScrollTrigger 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Sy, Ey, Py, ky, My, Ny, Ay, Ry, Ly, jy, Dy, zy, Iy, By, Fy, Vy, Hy, Uy, Wy, $y, Yy, Xy, qy, Zy, Gy, Ky, Jy, Qy, eb, tb, nb, rb, ib, ob, ab, sb, ub, lb, cb = 1, fb = Date.now, hb = fb(), pb = 0, db = 0, mb = function(e19, t2, n2) {
  var r2 = kb(e19) && ("clamp(" === e19.substr(0, 6) || e19.indexOf("max") > -1);
  return n2["_" + t2 + "Clamp"] = r2, r2 ? e19.substr(6, e19.length - 7) : e19;
}, vb = function(e19, t2) {
  return !t2 || kb(e19) && "clamp(" === e19.substr(0, 6) ? e19 : "clamp(" + e19 + ")";
}, gb = function e16() {
  return db && requestAnimationFrame(e16);
}, _b = function() {
  return By = 1;
}, yb = function() {
  return By = 0;
}, bb = function(e19) {
  return e19;
}, wb = function(e19) {
  return Math.round(1e5 * e19) / 1e5 || 0;
}, xb = function() {
  return "undefined" != typeof window;
}, Cb = function() {
  return Sy || xb() && (Sy = window.gsap) && Sy.registerPlugin && Sy;
}, Tb = function(e19) {
  return !!~Ay.indexOf(e19);
}, Ob = function(e19) {
  return ("Height" === e19 ? nb : Py["inner" + e19]) || My["client" + e19] || Ny["client" + e19];
}, Sb = function(e19) {
  return uy(e19, "getBoundingClientRect") || (Tb(e19) ? function() {
    return Bw.width = Py.innerWidth, Bw.height = nb, Bw;
  } : function() {
    return Jb(e19);
  });
}, Eb = function(e19, t2) {
  var n2 = t2.s, r2 = t2.d2, i2 = t2.d, o2 = t2.a;
  return Math.max(0, (n2 = "scroll" + r2) && (o2 = uy(e19, n2)) ? o2() - Sb(e19)()[i2] : Tb(e19) ? (My[n2] || Ny[n2]) - Ob(r2) : e19[n2] - e19["offset" + r2]);
}, Pb = function(e19, t2) {
  for (var n2 = 0; n2 < Wy.length; n2 += 3) (!t2 || ~t2.indexOf(Wy[n2 + 1])) && e19(Wy[n2], Wy[n2 + 1], Wy[n2 + 2]);
}, kb = function(e19) {
  return "string" == typeof e19;
}, Mb = function(e19) {
  return "function" == typeof e19;
}, Nb = function(e19) {
  return "number" == typeof e19;
}, Ab = function(e19) {
  return "object" == typeof e19;
}, Rb = function(e19, t2, n2) {
  return e19 && e19.progress(t2 ? 0 : 1) && n2 && e19.pause();
}, Lb = function(e19, t2) {
  if (e19.enabled) {
    var n2 = e19._ctx ? e19._ctx.add(function() {
      return t2(e19);
    }) : t2(e19);
    n2 && n2.totalTime && (e19.callbackAnimation = n2);
  }
}, jb = Math.abs, Db = "left", zb = "right", Ib = "bottom", Bb = "width", Fb = "height", Vb = "Right", Hb = "Left", Ub = "Top", Wb = "Bottom", $b = "padding", Yb = "margin", Xb = "Width", qb = "Height", Zb = "px", Gb = function(e19) {
  return Py.getComputedStyle(e19);
}, Kb = function(e19, t2) {
  for (var n2 in t2) n2 in e19 || (e19[n2] = t2[n2]);
  return e19;
}, Jb = function(e19, t2) {
  var n2 = t2 && "matrix(1, 0, 0, 1, 0, 0)" !== Gb(e19)[Fy] && Sy.to(e19, { x: 0, y: 0, xPercent: 0, yPercent: 0, rotation: 0, rotationX: 0, rotationY: 0, scale: 1, skewX: 0, skewY: 0 }).progress(1), r2 = e19.getBoundingClientRect();
  return n2 && n2.progress(0).kill(), r2;
}, Qb = function(e19, t2) {
  var n2 = t2.d2;
  return e19["offset" + n2] || e19["client" + n2] || 0;
}, ew = function(e19) {
  var t2, n2 = [], r2 = e19.labels, i2 = e19.duration();
  for (t2 in r2) n2.push(r2[t2] / i2);
  return n2;
}, tw = function(e19) {
  var t2 = Sy.utils.snap(e19), n2 = Array.isArray(e19) && e19.slice(0).sort(function(e20, t3) {
    return e20 - t3;
  });
  return n2 ? function(e20, r2, i2) {
    var o2;
    if (void 0 === i2 && (i2 = 1e-3), !r2) return t2(e20);
    if (r2 > 0) {
      for (e20 -= i2, o2 = 0; o2 < n2.length; o2++) if (n2[o2] >= e20) return n2[o2];
      return n2[o2 - 1];
    }
    for (o2 = n2.length, e20 += i2; o2--; ) if (n2[o2] <= e20) return n2[o2];
    return n2[0];
  } : function(n3, r2, i2) {
    void 0 === i2 && (i2 = 1e-3);
    var o2 = t2(n3);
    return !r2 || Math.abs(o2 - n3) < i2 || o2 - n3 < 0 == r2 < 0 ? o2 : t2(r2 < 0 ? n3 - e19 : n3 + e19);
  };
}, nw = function(e19, t2, n2, r2) {
  return n2.split(",").forEach(function(n3) {
    return e19(t2, n3, r2);
  });
}, rw = function(e19, t2, n2, r2, i2) {
  return e19.addEventListener(t2, n2, { passive: !r2, capture: !!i2 });
}, iw = function(e19, t2, n2, r2) {
  return e19.removeEventListener(t2, n2, !!r2);
}, ow = function(e19, t2, n2) {
  (n2 = n2 && n2.wheelHandler) && (e19(t2, "wheel", n2), e19(t2, "touchmove", n2));
}, aw = { startColor: "green", endColor: "red", indent: 0, fontSize: "16px", fontWeight: "normal" }, sw = { toggleActions: "play", anticipatePin: 0 }, uw = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 }, lw = function(e19, t2) {
  if (kb(e19)) {
    var n2 = e19.indexOf("="), r2 = ~n2 ? +(e19.charAt(n2 - 1) + 1) * parseFloat(e19.substr(n2 + 1)) : 0;
    ~n2 && (e19.indexOf("%") > n2 && (r2 *= t2 / 100), e19 = e19.substr(0, n2 - 1)), e19 = r2 + (e19 in uw ? uw[e19] * t2 : ~e19.indexOf("%") ? parseFloat(e19) * t2 / 100 : parseFloat(e19) || 0);
  }
  return e19;
}, cw = function(e19, t2, n2, r2, i2, o2, a2, s2) {
  var u2 = i2.startColor, l2 = i2.endColor, c2 = i2.fontSize, f2 = i2.indent, h2 = i2.fontWeight, p2 = ky.createElement("div"), d2 = Tb(n2) || "fixed" === uy(n2, "pinType"), m2 = -1 !== e19.indexOf("scroller"), v2 = d2 ? Ny : n2, g2 = -1 !== e19.indexOf("start"), _2 = g2 ? u2 : l2, y2 = "border-color:" + _2 + ";font-size:" + c2 + ";color:" + _2 + ";font-weight:" + h2 + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
  return y2 += "position:" + ((m2 || s2) && d2 ? "fixed;" : "absolute;"), (m2 || s2 || !d2) && (y2 += (r2 === gy ? zb : Ib) + ":" + (o2 + parseFloat(f2)) + "px;"), a2 && (y2 += "box-sizing:border-box;text-align:left;width:" + a2.offsetWidth + "px;"), p2._isStart = g2, p2.setAttribute("class", "gsap-marker-" + e19 + (t2 ? " marker-" + t2 : "")), p2.style.cssText = y2, p2.innerText = t2 || 0 === t2 ? e19 + "-" + t2 : e19, v2.children[0] ? v2.insertBefore(p2, v2.children[0]) : v2.appendChild(p2), p2._offset = p2["offset" + r2.op.d2], fw(p2, 0, r2, g2), p2;
}, fw = function(e19, t2, n2, r2) {
  var i2 = { display: "block" }, o2 = n2[r2 ? "os2" : "p2"], a2 = n2[r2 ? "p2" : "os2"];
  e19._isFlipped = r2, i2[n2.a + "Percent"] = r2 ? -100 : 0, i2[n2.a] = r2 ? "1px" : 0, i2["border" + o2 + Xb] = 1, i2["border" + a2 + Xb] = 0, i2[n2.p] = t2 + "px", Sy.set(e19, i2);
}, hw = [], pw = {}, dw = function() {
  return fb() - pb > 34 && (ab || (ab = requestAnimationFrame(Aw)));
}, mw = function() {
  (!qy || !qy.isPressed || qy.startX > Ny.clientWidth) && (iy.cache++, qy ? ab || (ab = requestAnimationFrame(Aw)) : Aw(), pb || ww("scrollStart"), pb = fb());
}, vw = function() {
  Ky = Py.innerWidth, Gy = Py.innerHeight;
}, gw = function(e19) {
  iy.cache++, (true === e19 || !Iy && !Xy && !ky.fullscreenElement && !ky.webkitFullscreenElement && (!Zy || Ky !== Py.innerWidth || Math.abs(Py.innerHeight - Gy) > 0.25 * Py.innerHeight)) && Ry.restart(true);
}, _w = {}, yw = [], bw = function e17() {
  return iw(Yw, "scrollEnd", e17) || kw(true);
}, ww = function(e19) {
  return _w[e19] && _w[e19].map(function(e20) {
    return e20();
  }) || yw;
}, xw = [], Cw = function(e19) {
  for (var t2 = 0; t2 < xw.length; t2 += 5) (!e19 || xw[t2 + 4] && xw[t2 + 4].query === e19) && (xw[t2].style.cssText = xw[t2 + 1], xw[t2].getBBox && xw[t2].setAttribute("transform", xw[t2 + 2] || ""), xw[t2 + 3].uncache = 1);
}, Tw = function(e19, t2) {
  var n2;
  for (Vy = 0; Vy < hw.length; Vy++) !(n2 = hw[Vy]) || t2 && n2._ctx !== t2 || (e19 ? n2.kill(1) : n2.revert(true, true));
  rb = true, t2 && Cw(t2), t2 || ww("revert");
}, Ow = function(e19, t2) {
  iy.cache++, (t2 || !sb) && iy.forEach(function(e20) {
    return Mb(e20) && e20.cacheID++ && (e20.rec = 0);
  }), kb(e19) && (Py.history.scrollRestoration = eb = e19);
}, Sw = 0, Ew = function() {
  Ny.appendChild(tb), nb = !qy && tb.offsetHeight || Py.innerHeight, Ny.removeChild(tb);
}, Pw = function(e19) {
  return Ly(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t2) {
    return t2.style.display = e19 ? "none" : "block";
  });
}, kw = function(e19, t2) {
  if (My = ky.documentElement, Ny = ky.body, Ay = [Py, ky, My, Ny], !pb || e19 || rb) {
    Ew(), sb = Yw.isRefreshing = true, iy.forEach(function(e20) {
      return Mb(e20) && ++e20.cacheID && (e20.rec = e20());
    });
    var n2 = ww("refreshInit");
    $y && Yw.sort(), t2 || Tw(), iy.forEach(function(e20) {
      Mb(e20) && (e20.smooth && (e20.target.style.scrollBehavior = "auto"), e20(0));
    }), hw.slice(0).forEach(function(e20) {
      return e20.refresh();
    }), rb = false, hw.forEach(function(e20) {
      if (e20._subPinOffset && e20.pin) {
        var t3 = e20.vars.horizontal ? "offsetWidth" : "offsetHeight", n3 = e20.pin[t3];
        e20.revert(true, 1), e20.adjustPinSpacing(e20.pin[t3] - n3), e20.refresh();
      }
    }), ib = 1, Pw(true), hw.forEach(function(e20) {
      var t3 = Eb(e20.scroller, e20._dir), n3 = "max" === e20.vars.end || e20._endClamp && e20.end > t3, r2 = e20._startClamp && e20.start >= t3;
      (n3 || r2) && e20.setPositions(r2 ? t3 - 1 : e20.start, n3 ? Math.max(r2 ? t3 : e20.start + 1, t3) : e20.end, true);
    }), Pw(false), ib = 0, n2.forEach(function(e20) {
      return e20 && e20.render && e20.render(-1);
    }), iy.forEach(function(e20) {
      Mb(e20) && (e20.smooth && requestAnimationFrame(function() {
        return e20.target.style.scrollBehavior = "smooth";
      }), e20.rec && e20(e20.rec));
    }), Ow(eb, 1), Ry.pause(), Sw++, sb = 2, Aw(2), hw.forEach(function(e20) {
      return Mb(e20.vars.onRefresh) && e20.vars.onRefresh(e20);
    }), sb = Yw.isRefreshing = false, ww("refresh");
  } else rw(Yw, "scrollEnd", bw);
}, Mw = 0, Nw = 1, Aw = function(e19) {
  if (2 === e19 || !sb && !rb) {
    Yw.isUpdating = true, lb && lb.update(0);
    var t2 = hw.length, n2 = fb(), r2 = n2 - hb >= 50, i2 = t2 && hw[0].scroll();
    if (Nw = Mw > i2 ? -1 : 1, sb || (Mw = i2), r2 && (pb && !By && n2 - pb > 200 && (pb = 0, ww("scrollEnd")), Dy = hb, hb = n2), Nw < 0) {
      for (Vy = t2; Vy-- > 0; ) hw[Vy] && hw[Vy].update(0, r2);
      Nw = 1;
    } else for (Vy = 0; Vy < t2; Vy++) hw[Vy] && hw[Vy].update(0, r2);
    Yw.isUpdating = false;
  }
  ab = 0;
}, Rw = [Db, "top", Ib, zb, Yb + Wb, Yb + Vb, Yb + Ub, Yb + Hb, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], Lw = Rw.concat([Bb, Fb, "boxSizing", "max" + Xb, "max" + qb, "position", Yb, $b, $b + Ub, $b + Vb, $b + Wb, $b + Hb]), jw = function(e19, t2, n2, r2) {
  if (!e19._gsap.swappedIn) {
    for (var i2, o2 = Rw.length, a2 = t2.style, s2 = e19.style; o2--; ) a2[i2 = Rw[o2]] = n2[i2];
    a2.position = "absolute" === n2.position ? "absolute" : "relative", "inline" === n2.display && (a2.display = "inline-block"), s2[Ib] = s2[zb] = "auto", a2.flexBasis = n2.flexBasis || "auto", a2.overflow = "visible", a2.boxSizing = "border-box", a2[Bb] = Qb(e19, vy) + Zb, a2[Fb] = Qb(e19, gy) + Zb, a2[$b] = s2[Yb] = s2.top = s2[Db] = "0", zw(r2), s2[Bb] = s2["max" + Xb] = n2[Bb], s2[Fb] = s2["max" + qb] = n2[Fb], s2[$b] = n2[$b], e19.parentNode !== t2 && (e19.parentNode.insertBefore(t2, e19), t2.appendChild(e19)), e19._gsap.swappedIn = true;
  }
}, Dw = /([A-Z])/g, zw = function(e19) {
  if (e19) {
    var t2, n2, r2 = e19.t.style, i2 = e19.length, o2 = 0;
    for ((e19.t._gsap || Sy.core.getCache(e19.t)).uncache = 1; o2 < i2; o2 += 2) n2 = e19[o2 + 1], t2 = e19[o2], n2 ? r2[t2] = n2 : r2[t2] && r2.removeProperty(t2.replace(Dw, "-$1").toLowerCase());
  }
}, Iw = function(e19) {
  for (var t2 = Lw.length, n2 = e19.style, r2 = [], i2 = 0; i2 < t2; i2++) r2.push(Lw[i2], n2[Lw[i2]]);
  return r2.t = e19, r2;
}, Bw = { left: 0, top: 0 }, Fw = function(e19, t2, n2, r2, i2, o2, a2, s2, u2, l2, c2, f2, h2, p2) {
  Mb(e19) && (e19 = e19(s2)), kb(e19) && "max" === e19.substr(0, 3) && (e19 = f2 + ("=" === e19.charAt(4) ? lw("0" + e19.substr(3), n2) : 0));
  var d2, m2, v2, g2 = h2 ? h2.time() : 0;
  if (h2 && h2.seek(0), isNaN(e19) || (e19 = +e19), Nb(e19)) h2 && (e19 = Sy.utils.mapRange(h2.scrollTrigger.start, h2.scrollTrigger.end, 0, f2, e19)), a2 && fw(a2, n2, r2, true);
  else {
    Mb(t2) && (t2 = t2(s2));
    var _2, y2, b2, w2, x2 = (e19 || "0").split(" ");
    v2 = _y(t2, s2) || Ny, (_2 = Jb(v2) || {}) && (_2.left || _2.top) || "none" !== Gb(v2).display || (w2 = v2.style.display, v2.style.display = "block", _2 = Jb(v2), w2 ? v2.style.display = w2 : v2.style.removeProperty("display")), y2 = lw(x2[0], _2[r2.d]), b2 = lw(x2[1] || "0", n2), e19 = _2[r2.p] - u2[r2.p] - l2 + y2 + i2 - b2, a2 && fw(a2, b2, r2, n2 - b2 < 20 || a2._isStart && b2 > 20), n2 -= n2 - b2;
  }
  if (p2 && (s2[p2] = e19 || -1e-3, e19 < 0 && (e19 = 0)), o2) {
    var C2 = e19 + n2, T2 = o2._isStart;
    d2 = "scroll" + r2.d2, fw(o2, C2, r2, T2 && C2 > 20 || !T2 && (c2 ? Math.max(Ny[d2], My[d2]) : o2.parentNode[d2]) <= C2 + 1), c2 && (u2 = Jb(a2), c2 && (o2.style[r2.op.p] = u2[r2.op.p] - r2.op.m - o2._offset + Zb));
  }
  return h2 && v2 && (d2 = Jb(v2), h2.seek(f2), m2 = Jb(v2), h2._caScrollDist = d2[r2.p] - m2[r2.p], e19 = e19 / h2._caScrollDist * f2), h2 && h2.seek(g2), h2 ? e19 : Math.round(e19);
}, Vw = /(webkit|moz|length|cssText|inset)/i, Hw = function(e19, t2, n2, r2) {
  if (e19.parentNode !== t2) {
    var i2, o2, a2 = e19.style;
    if (t2 === Ny) {
      for (i2 in e19._stOrig = a2.cssText, o2 = Gb(e19)) +i2 || Vw.test(i2) || !o2[i2] || "string" != typeof a2[i2] || "0" === i2 || (a2[i2] = o2[i2]);
      a2.top = n2, a2.left = r2;
    } else a2.cssText = e19._stOrig;
    Sy.core.getCache(e19).uncache = 1, t2.appendChild(e19);
  }
}, Uw = function(e19, t2, n2) {
  var r2 = t2, i2 = r2;
  return function(t3) {
    var o2 = Math.round(e19());
    return o2 !== r2 && o2 !== i2 && Math.abs(o2 - r2) > 3 && Math.abs(o2 - i2) > 3 && (t3 = o2, n2 && n2()), i2 = r2, r2 = Math.round(t3);
  };
}, Ww = function(e19, t2, n2) {
  var r2 = {};
  r2[t2.p] = "+=" + n2, Sy.set(e19, r2);
}, $w = function(e19, t2) {
  var n2 = yy(e19, t2), r2 = "_scroll" + t2.p2, i2 = function t3(i3, o2, a2, s2, u2) {
    var l2 = t3.tween, c2 = o2.onComplete, f2 = {};
    a2 = a2 || n2();
    var h2 = Uw(n2, a2, function() {
      l2.kill(), t3.tween = 0;
    });
    return u2 = s2 && u2 || 0, s2 = s2 || i3 - a2, l2 && l2.kill(), o2[r2] = i3, o2.inherit = false, o2.modifiers = f2, f2[r2] = function() {
      return h2(a2 + s2 * l2.ratio + u2 * l2.ratio * l2.ratio);
    }, o2.onUpdate = function() {
      iy.cache++, t3.tween && Aw();
    }, o2.onComplete = function() {
      t3.tween = 0, c2 && c2.call(l2);
    }, l2 = t3.tween = Sy.to(e19, o2);
  };
  return e19[r2] = n2, n2.wheelHandler = function() {
    return i2.tween && i2.tween.kill() && (i2.tween = 0);
  }, rw(e19, "wheel", n2.wheelHandler), Yw.isTouch && rw(e19, "touchmove", n2.wheelHandler), i2;
}, Yw = function() {
  function e19(t2, n2) {
    Ey || e19.register(Sy) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Qy(this), this.init(t2, n2);
  }
  return e19.prototype.init = function(t2, n2) {
    if (this.progress = this.start = 0, this.vars && this.kill(true, true), db) {
      var r2, i2, o2, a2, s2, u2, l2, c2, f2, h2, p2, d2, m2, v2, g2, _2, y2, b2, w2, x2, C2, T2, O2, S2, E2, P2, k2, M2, N2, A2, R2, L2, j2, D2, z2, I2, B2, F2, V2, H2, U2, W2, $2 = t2 = Kb(kb(t2) || Nb(t2) || t2.nodeType ? { trigger: t2 } : t2, sw), Y2 = $2.onUpdate, X2 = $2.toggleClass, q2 = $2.id, Z2 = $2.onToggle, G2 = $2.onRefresh, K2 = $2.scrub, J2 = $2.trigger, Q2 = $2.pin, ee2 = $2.pinSpacing, te2 = $2.invalidateOnRefresh, ne2 = $2.anticipatePin, re2 = $2.onScrubComplete, ie2 = $2.onSnapComplete, oe2 = $2.once, ae2 = $2.snap, se2 = $2.pinReparent, ue2 = $2.pinSpacer, le2 = $2.containerAnimation, ce2 = $2.fastScrollEnd, fe2 = $2.preventOverlaps, he2 = t2.horizontal || t2.containerAnimation && false !== t2.horizontal ? vy : gy, pe2 = !K2 && 0 !== K2, de2 = _y(t2.scroller || Py), me2 = Sy.core.getCache(de2), ve2 = Tb(de2), ge2 = "fixed" === ("pinType" in t2 ? t2.pinType : uy(de2, "pinType") || ve2 && "fixed"), _e2 = [t2.onEnter, t2.onLeave, t2.onEnterBack, t2.onLeaveBack], ye2 = pe2 && t2.toggleActions.split(" "), be2 = "markers" in t2 ? t2.markers : sw.markers, we2 = ve2 ? 0 : parseFloat(Gb(de2)["border" + he2.p2 + Xb]) || 0, xe2 = this, Ce2 = t2.onRefreshInit && function() {
        return t2.onRefreshInit(xe2);
      }, Te2 = function(e20, t3, n3) {
        var r3 = n3.d, i3 = n3.d2, o3 = n3.a;
        return (o3 = uy(e20, "getBoundingClientRect")) ? function() {
          return o3()[r3];
        } : function() {
          return (t3 ? Ob(i3) : e20["client" + i3]) || 0;
        };
      }(de2, ve2, he2), Oe2 = function(e20, t3) {
        return !t3 || ~oy.indexOf(e20) ? Sb(e20) : function() {
          return Bw;
        };
      }(de2, ve2), Se2 = 0, Ee2 = 0, Pe2 = 0, ke2 = yy(de2, he2);
      if (xe2._startClamp = xe2._endClamp = false, xe2._dir = he2, ne2 *= 45, xe2.scroller = de2, xe2.scroll = le2 ? le2.time.bind(le2) : ke2, a2 = ke2(), xe2.vars = t2, n2 = n2 || t2.animation, "refreshPriority" in t2 && ($y = 1, -9999 === t2.refreshPriority && (lb = xe2)), me2.tweenScroll = me2.tweenScroll || { top: $w(de2, gy), left: $w(de2, vy) }, xe2.tweenTo = r2 = me2.tweenScroll[he2.p], xe2.scrubDuration = function(e20) {
        (j2 = Nb(e20) && e20) ? L2 ? L2.duration(e20) : L2 = Sy.to(n2, { ease: "expo", totalProgress: "+=0", inherit: false, duration: j2, paused: true, onComplete: function() {
          return re2 && re2(xe2);
        } }) : (L2 && L2.progress(1).kill(), L2 = 0);
      }, n2 && (n2.vars.lazy = false, n2._initted && !xe2.isReverted || false !== n2.vars.immediateRender && false !== t2.immediateRender && n2.duration() && n2.render(0, true, true), xe2.animation = n2.pause(), n2.scrollTrigger = xe2, xe2.scrubDuration(K2), A2 = 0, q2 || (q2 = n2.vars.id)), ae2 && (Ab(ae2) && !ae2.push || (ae2 = { snapTo: ae2 }), "scrollBehavior" in Ny.style && Sy.set(ve2 ? [Ny, My] : de2, { scrollBehavior: "auto" }), iy.forEach(function(e20) {
        return Mb(e20) && e20.target === (ve2 ? ky.scrollingElement || My : de2) && (e20.smooth = false);
      }), o2 = Mb(ae2.snapTo) ? ae2.snapTo : "labels" === ae2.snapTo ? /* @__PURE__ */ function(e20) {
        return function(t3) {
          return Sy.utils.snap(ew(e20), t3);
        };
      }(n2) : "labelsDirectional" === ae2.snapTo ? (H2 = n2, function(e20, t3) {
        return tw(ew(H2))(e20, t3.direction);
      }) : false !== ae2.directional ? function(e20, t3) {
        return tw(ae2.snapTo)(e20, fb() - Ee2 < 500 ? 0 : t3.direction);
      } : Sy.utils.snap(ae2.snapTo), D2 = ae2.duration || { min: 0.1, max: 2 }, D2 = Ab(D2) ? jy(D2.min, D2.max) : jy(D2, D2), z2 = Sy.delayedCall(ae2.delay || j2 / 2 || 0.1, function() {
        var e20 = ke2(), t3 = fb() - Ee2 < 500, i3 = r2.tween;
        if (!(t3 || Math.abs(xe2.getVelocity()) < 10) || i3 || By || Se2 === e20) xe2.isActive && Se2 !== e20 && z2.restart(true);
        else {
          var a3, s3, c3 = (e20 - u2) / v2, f3 = n2 && !pe2 ? n2.totalProgress() : c3, h3 = t3 ? 0 : (f3 - R2) / (fb() - Dy) * 1e3 || 0, p3 = Sy.utils.clamp(-c3, 1 - c3, jb(h3 / 2) * h3 / 0.185), d3 = c3 + (false === ae2.inertia ? 0 : p3), m3 = ae2, g3 = m3.onStart, _3 = m3.onInterrupt, y3 = m3.onComplete;
          if (a3 = o2(d3, xe2), Nb(a3) || (a3 = d3), s3 = Math.max(0, Math.round(u2 + a3 * v2)), e20 <= l2 && e20 >= u2 && s3 !== e20) {
            if (i3 && !i3._initted && i3.data <= jb(s3 - e20)) return;
            false === ae2.inertia && (p3 = a3 - c3), r2(s3, { duration: D2(jb(0.185 * Math.max(jb(d3 - f3), jb(a3 - f3)) / h3 / 0.05 || 0)), ease: ae2.ease || "power3", data: jb(s3 - e20), onInterrupt: function() {
              return z2.restart(true) && _3 && _3(xe2);
            }, onComplete: function() {
              xe2.update(), Se2 = ke2(), n2 && !pe2 && (L2 ? L2.resetTo("totalProgress", a3, n2._tTime / n2._tDur) : n2.progress(a3)), A2 = R2 = n2 && !pe2 ? n2.totalProgress() : xe2.progress, ie2 && ie2(xe2), y3 && y3(xe2);
            } }, e20, p3 * v2, s3 - e20 - p3 * v2), g3 && g3(xe2, r2.tween);
          }
        }
      }).pause()), q2 && (pw[q2] = xe2), (V2 = (J2 = xe2.trigger = _y(J2 || true !== Q2 && Q2)) && J2._gsap && J2._gsap.stRevert) && (V2 = V2(xe2)), Q2 = true === Q2 ? J2 : _y(Q2), kb(X2) && (X2 = { targets: J2, className: X2 }), Q2 && (false === ee2 || ee2 === Yb || (ee2 = !(!ee2 && Q2.parentNode && Q2.parentNode.style && "flex" === Gb(Q2.parentNode).display) && $b), xe2.pin = Q2, (i2 = Sy.core.getCache(Q2)).spacer ? g2 = i2.pinState : (ue2 && ((ue2 = _y(ue2)) && !ue2.nodeType && (ue2 = ue2.current || ue2.nativeElement), i2.spacerIsNative = !!ue2, ue2 && (i2.spacerState = Iw(ue2))), i2.spacer = b2 = ue2 || ky.createElement("div"), b2.classList.add("pin-spacer"), q2 && b2.classList.add("pin-spacer-" + q2), i2.pinState = g2 = Iw(Q2)), false !== t2.force3D && Sy.set(Q2, { force3D: true }), xe2.spacer = b2 = i2.spacer, N2 = Gb(Q2), S2 = N2[ee2 + he2.os2], x2 = Sy.getProperty(Q2), C2 = Sy.quickSetter(Q2, he2.a, Zb), jw(Q2, b2, N2), y2 = Iw(Q2)), be2) {
        d2 = Ab(be2) ? Kb(be2, aw) : aw, h2 = cw("scroller-start", q2, de2, he2, d2, 0), p2 = cw("scroller-end", q2, de2, he2, d2, 0, h2), w2 = h2["offset" + he2.op.d2];
        var Me2 = _y(uy(de2, "content") || de2);
        c2 = this.markerStart = cw("start", q2, Me2, he2, d2, w2, 0, le2), f2 = this.markerEnd = cw("end", q2, Me2, he2, d2, w2, 0, le2), le2 && (F2 = Sy.quickSetter([c2, f2], he2.a, Zb)), ge2 || oy.length && true === uy(de2, "fixedMarkers") || (W2 = Gb(U2 = ve2 ? Ny : de2).position, U2.style.position = "absolute" === W2 || "fixed" === W2 ? W2 : "relative", Sy.set([h2, p2], { force3D: true }), P2 = Sy.quickSetter(h2, he2.a, Zb), M2 = Sy.quickSetter(p2, he2.a, Zb));
      }
      if (le2) {
        var Ne2 = le2.vars.onUpdate, Ae2 = le2.vars.onUpdateParams;
        le2.eventCallback("onUpdate", function() {
          xe2.update(0, 0, 1), Ne2 && Ne2.apply(le2, Ae2 || []);
        });
      }
      if (xe2.previous = function() {
        return hw[hw.indexOf(xe2) - 1];
      }, xe2.next = function() {
        return hw[hw.indexOf(xe2) + 1];
      }, xe2.revert = function(e20, t3) {
        if (!t3) return xe2.kill(true);
        var r3 = false !== e20 || !xe2.enabled, i3 = Iy;
        r3 !== xe2.isReverted && (r3 && (I2 = Math.max(ke2(), xe2.scroll.rec || 0), Pe2 = xe2.progress, B2 = n2 && n2.progress()), c2 && [c2, f2, h2, p2].forEach(function(e21) {
          return e21.style.display = r3 ? "none" : "block";
        }), r3 && (Iy = xe2, xe2.update(r3)), !Q2 || se2 && xe2.isActive || (r3 ? function(e21, t4, n3) {
          zw(n3);
          var r4 = e21._gsap;
          if (r4.spacerIsNative) zw(r4.spacerState);
          else if (e21._gsap.swappedIn) {
            var i4 = t4.parentNode;
            i4 && (i4.insertBefore(e21, t4), i4.removeChild(t4));
          }
          e21._gsap.swappedIn = false;
        }(Q2, b2, g2) : jw(Q2, b2, Gb(Q2), E2)), r3 || xe2.update(r3), Iy = i3, xe2.isReverted = r3);
      }, xe2.refresh = function(i3, o3, d3, w3) {
        if (!Iy && xe2.enabled || o3) if (Q2 && i3 && pb) rw(e19, "scrollEnd", bw);
        else {
          !sb && Ce2 && Ce2(xe2), Iy = xe2, r2.tween && !d3 && (r2.tween.kill(), r2.tween = 0), L2 && L2.pause(), te2 && n2 && n2.revert({ kill: false }).invalidate(), xe2.isReverted || xe2.revert(true, true), xe2._subPinOffset = false;
          var C3, S3, P3, M3, N3, A3, R3, j3, D3, F3, V3, H3, U3, W3 = Te2(), $3 = Oe2(), Y3 = le2 ? le2.duration() : Eb(de2, he2), X3 = v2 <= 0.01, q3 = 0, Z3 = w3 || 0, K3 = Ab(d3) ? d3.end : t2.end, ne3 = t2.endTrigger || J2, re3 = Ab(d3) ? d3.start : t2.start || (0 !== t2.start && J2 ? Q2 ? "0 0" : "0 100%" : 0), ie3 = xe2.pinnedContainer = t2.pinnedContainer && _y(t2.pinnedContainer, xe2), oe3 = J2 && Math.max(0, hw.indexOf(xe2)) || 0, ae3 = oe3;
          for (be2 && Ab(d3) && (H3 = Sy.getProperty(h2, he2.p), U3 = Sy.getProperty(p2, he2.p)); ae3-- > 0; ) (A3 = hw[ae3]).end || A3.refresh(0, 1) || (Iy = xe2), !(R3 = A3.pin) || R3 !== J2 && R3 !== Q2 && R3 !== ie3 || A3.isReverted || (F3 || (F3 = []), F3.unshift(A3), A3.revert(true, true)), A3 !== hw[ae3] && (oe3--, ae3--);
          for (Mb(re3) && (re3 = re3(xe2)), re3 = mb(re3, "start", xe2), u2 = Fw(re3, J2, W3, he2, ke2(), c2, h2, xe2, $3, we2, ge2, Y3, le2, xe2._startClamp && "_startClamp") || (Q2 ? -1e-3 : 0), Mb(K3) && (K3 = K3(xe2)), kb(K3) && !K3.indexOf("+=") && (~K3.indexOf(" ") ? K3 = (kb(re3) ? re3.split(" ")[0] : "") + K3 : (q3 = lw(K3.substr(2), W3), K3 = kb(re3) ? re3 : (le2 ? Sy.utils.mapRange(0, le2.duration(), le2.scrollTrigger.start, le2.scrollTrigger.end, u2) : u2) + q3, ne3 = J2)), K3 = mb(K3, "end", xe2), l2 = Math.max(u2, Fw(K3 || (ne3 ? "100% 0" : Y3), ne3, W3, he2, ke2() + q3, f2, p2, xe2, $3, we2, ge2, Y3, le2, xe2._endClamp && "_endClamp")) || -1e-3, q3 = 0, ae3 = oe3; ae3--; ) (R3 = (A3 = hw[ae3]).pin) && A3.start - A3._pinPush <= u2 && !le2 && A3.end > 0 && (C3 = A3.end - (xe2._startClamp ? Math.max(0, A3.start) : A3.start), (R3 === J2 && A3.start - A3._pinPush < u2 || R3 === ie3) && isNaN(re3) && (q3 += C3 * (1 - A3.progress)), R3 === Q2 && (Z3 += C3));
          if (u2 += q3, l2 += q3, xe2._startClamp && (xe2._startClamp += q3), xe2._endClamp && !sb && (xe2._endClamp = l2 || -1e-3, l2 = Math.min(l2, Eb(de2, he2))), v2 = l2 - u2 || (u2 -= 0.01) && 1e-3, X3 && (Pe2 = Sy.utils.clamp(0, 1, Sy.utils.normalize(u2, l2, I2))), xe2._pinPush = Z3, c2 && q3 && ((C3 = {})[he2.a] = "+=" + q3, ie3 && (C3[he2.p] = "-=" + ke2()), Sy.set([c2, f2], C3)), !Q2 || ib && xe2.end >= Eb(de2, he2)) {
            if (J2 && ke2() && !le2) for (S3 = J2.parentNode; S3 && S3 !== Ny; ) S3._pinOffset && (u2 -= S3._pinOffset, l2 -= S3._pinOffset), S3 = S3.parentNode;
          } else C3 = Gb(Q2), M3 = he2 === gy, P3 = ke2(), T2 = parseFloat(x2(he2.a)) + Z3, !Y3 && l2 > 1 && (V3 = { style: V3 = (ve2 ? ky.scrollingElement || My : de2).style, value: V3["overflow" + he2.a.toUpperCase()] }, ve2 && "scroll" !== Gb(Ny)["overflow" + he2.a.toUpperCase()] && (V3.style["overflow" + he2.a.toUpperCase()] = "scroll")), jw(Q2, b2, C3), y2 = Iw(Q2), S3 = Jb(Q2, true), j3 = ge2 && yy(de2, M3 ? vy : gy)(), ee2 ? ((E2 = [ee2 + he2.os2, v2 + Z3 + Zb]).t = b2, (ae3 = ee2 === $b ? Qb(Q2, he2) + v2 + Z3 : 0) && (E2.push(he2.d, ae3 + Zb), "auto" !== b2.style.flexBasis && (b2.style.flexBasis = ae3 + Zb)), zw(E2), ie3 && hw.forEach(function(e20) {
            e20.pin === ie3 && false !== e20.vars.pinSpacing && (e20._subPinOffset = true);
          }), ge2 && ke2(I2)) : (ae3 = Qb(Q2, he2)) && "auto" !== b2.style.flexBasis && (b2.style.flexBasis = ae3 + Zb), ge2 && ((N3 = { top: S3.top + (M3 ? P3 - u2 : j3) + Zb, left: S3.left + (M3 ? j3 : P3 - u2) + Zb, boxSizing: "border-box", position: "fixed" })[Bb] = N3["max" + Xb] = Math.ceil(S3.width) + Zb, N3[Fb] = N3["max" + qb] = Math.ceil(S3.height) + Zb, N3[Yb] = N3[Yb + Ub] = N3[Yb + Vb] = N3[Yb + Wb] = N3[Yb + Hb] = "0", N3[$b] = C3[$b], N3[$b + Ub] = C3[$b + Ub], N3[$b + Vb] = C3[$b + Vb], N3[$b + Wb] = C3[$b + Wb], N3[$b + Hb] = C3[$b + Hb], _2 = function(e20, t3, n3) {
            for (var r3, i4 = [], o4 = e20.length, a3 = n3 ? 8 : 0; a3 < o4; a3 += 2) r3 = e20[a3], i4.push(r3, r3 in t3 ? t3[r3] : e20[a3 + 1]);
            return i4.t = e20.t, i4;
          }(g2, N3, se2), sb && ke2(0)), n2 ? (D3 = n2._initted, Yy(1), n2.render(n2.duration(), true, true), O2 = x2(he2.a) - T2 + v2 + Z3, k2 = Math.abs(v2 - O2) > 1, ge2 && k2 && _2.splice(_2.length - 2, 2), n2.render(0, true, true), D3 || n2.invalidate(true), n2.parent || n2.totalTime(n2.totalTime()), Yy(0)) : O2 = v2, V3 && (V3.value ? V3.style["overflow" + he2.a.toUpperCase()] = V3.value : V3.style.removeProperty("overflow-" + he2.a));
          F3 && F3.forEach(function(e20) {
            return e20.revert(false, true);
          }), xe2.start = u2, xe2.end = l2, a2 = s2 = sb ? I2 : ke2(), le2 || sb || (a2 < I2 && ke2(I2), xe2.scroll.rec = 0), xe2.revert(false, true), Ee2 = fb(), z2 && (Se2 = -1, z2.restart(true)), Iy = 0, n2 && pe2 && (n2._initted || B2) && n2.progress() !== B2 && n2.progress(B2 || 0, true).render(n2.time(), true, true), (X3 || Pe2 !== xe2.progress || le2 || te2 || n2 && !n2._initted) && (n2 && !pe2 && n2.totalProgress(le2 && u2 < -1e-3 && !Pe2 ? Sy.utils.normalize(u2, l2, 0) : Pe2, true), xe2.progress = X3 || (a2 - u2) / v2 === Pe2 ? 0 : Pe2), Q2 && ee2 && (b2._pinOffset = Math.round(xe2.progress * O2)), L2 && L2.invalidate(), isNaN(H3) || (H3 -= Sy.getProperty(h2, he2.p), U3 -= Sy.getProperty(p2, he2.p), Ww(h2, he2, H3), Ww(c2, he2, H3 - (w3 || 0)), Ww(p2, he2, U3), Ww(f2, he2, U3 - (w3 || 0))), X3 && !sb && xe2.update(), !G2 || sb || m2 || (m2 = true, G2(xe2), m2 = false);
        }
      }, xe2.getVelocity = function() {
        return (ke2() - s2) / (fb() - Dy) * 1e3 || 0;
      }, xe2.endAnimation = function() {
        Rb(xe2.callbackAnimation), n2 && (L2 ? L2.progress(1) : n2.paused() ? pe2 || Rb(n2, xe2.direction < 0, 1) : Rb(n2, n2.reversed()));
      }, xe2.labelToScroll = function(e20) {
        return n2 && n2.labels && (u2 || xe2.refresh() || u2) + n2.labels[e20] / n2.duration() * v2 || 0;
      }, xe2.getTrailing = function(e20) {
        var t3 = hw.indexOf(xe2), n3 = xe2.direction > 0 ? hw.slice(0, t3).reverse() : hw.slice(t3 + 1);
        return (kb(e20) ? n3.filter(function(t4) {
          return t4.vars.preventOverlaps === e20;
        }) : n3).filter(function(e21) {
          return xe2.direction > 0 ? e21.end <= u2 : e21.start >= l2;
        });
      }, xe2.update = function(e20, t3, i3) {
        if (!le2 || i3 || e20) {
          var o3, c3, f3, p3, d3, m3, g3, w3 = true === sb ? I2 : xe2.scroll(), x3 = e20 ? 0 : (w3 - u2) / v2, E3 = x3 < 0 ? 0 : x3 > 1 ? 1 : x3 || 0, N3 = xe2.progress;
          if (t3 && (s2 = a2, a2 = le2 ? ke2() : w3, ae2 && (R2 = A2, A2 = n2 && !pe2 ? n2.totalProgress() : E3)), ne2 && Q2 && !Iy && !cb && pb && (!E3 && u2 < w3 + (w3 - s2) / (fb() - Dy) * ne2 ? E3 = 1e-4 : 1 === E3 && l2 > w3 + (w3 - s2) / (fb() - Dy) * ne2 && (E3 = 0.9999)), E3 !== N3 && xe2.enabled) {
            if (p3 = (d3 = (o3 = xe2.isActive = !!E3 && E3 < 1) !== (!!N3 && N3 < 1)) || !!E3 != !!N3, xe2.direction = E3 > N3 ? 1 : -1, xe2.progress = E3, p3 && !Iy && (c3 = E3 && !N3 ? 0 : 1 === E3 ? 1 : 1 === N3 ? 2 : 3, pe2 && (f3 = !d3 && "none" !== ye2[c3 + 1] && ye2[c3 + 1] || ye2[c3], g3 = n2 && ("complete" === f3 || "reset" === f3 || f3 in n2))), fe2 && (d3 || g3) && (g3 || K2 || !n2) && (Mb(fe2) ? fe2(xe2) : xe2.getTrailing(fe2).forEach(function(e21) {
              return e21.endAnimation();
            })), pe2 || (!L2 || Iy || cb ? n2 && n2.totalProgress(E3, !(!Iy || !Ee2 && !e20)) : (L2._dp._time - L2._start !== L2._time && L2.render(L2._dp._time - L2._start), L2.resetTo ? L2.resetTo("totalProgress", E3, n2._tTime / n2._tDur) : (L2.vars.totalProgress = E3, L2.invalidate().restart()))), Q2) if (e20 && ee2 && (b2.style[ee2 + he2.os2] = S2), ge2) {
              if (p3) {
                if (m3 = !e20 && E3 > N3 && l2 + 1 > w3 && w3 + 1 >= Eb(de2, he2), se2) if (e20 || !o3 && !m3) Hw(Q2, b2);
                else {
                  var j3 = Jb(Q2, true), D3 = w3 - u2;
                  Hw(Q2, Ny, j3.top + (he2 === gy ? D3 : 0) + Zb, j3.left + (he2 === gy ? 0 : D3) + Zb);
                }
                zw(o3 || m3 ? _2 : y2), k2 && E3 < 1 && o3 || C2(T2 + (1 !== E3 || m3 ? 0 : O2));
              }
            } else C2(wb(T2 + O2 * E3));
            ae2 && !r2.tween && !Iy && !cb && z2.restart(true), X2 && (d3 || oe2 && E3 && (E3 < 1 || !ob)) && Ly(X2.targets).forEach(function(e21) {
              return e21.classList[o3 || oe2 ? "add" : "remove"](X2.className);
            }), Y2 && !pe2 && !e20 && Y2(xe2), p3 && !Iy ? (pe2 && (g3 && ("complete" === f3 ? n2.pause().totalProgress(1) : "reset" === f3 ? n2.restart(true).pause() : "restart" === f3 ? n2.restart(true) : n2[f3]()), Y2 && Y2(xe2)), !d3 && ob || (Z2 && d3 && Lb(xe2, Z2), _e2[c3] && Lb(xe2, _e2[c3]), oe2 && (1 === E3 ? xe2.kill(false, 1) : _e2[c3] = 0), d3 || _e2[c3 = 1 === E3 ? 1 : 3] && Lb(xe2, _e2[c3])), ce2 && !o3 && Math.abs(xe2.getVelocity()) > (Nb(ce2) ? ce2 : 2500) && (Rb(xe2.callbackAnimation), L2 ? L2.progress(1) : Rb(n2, "reverse" === f3 ? 1 : !E3, 1))) : pe2 && Y2 && !Iy && Y2(xe2);
          }
          if (M2) {
            var B3 = le2 ? w3 / le2.duration() * (le2._caScrollDist || 0) : w3;
            P2(B3 + (h2._isFlipped ? 1 : 0)), M2(B3);
          }
          F2 && F2(-w3 / le2.duration() * (le2._caScrollDist || 0));
        }
      }, xe2.enable = function(t3, n3) {
        xe2.enabled || (xe2.enabled = true, rw(de2, "resize", gw), ve2 || rw(de2, "scroll", mw), Ce2 && rw(e19, "refreshInit", Ce2), false !== t3 && (xe2.progress = Pe2 = 0, a2 = s2 = Se2 = ke2()), false !== n3 && xe2.refresh());
      }, xe2.getTween = function(e20) {
        return e20 && r2 ? r2.tween : L2;
      }, xe2.setPositions = function(e20, t3, n3, r3) {
        if (le2) {
          var i3 = le2.scrollTrigger, o3 = le2.duration(), a3 = i3.end - i3.start;
          e20 = i3.start + a3 * e20 / o3, t3 = i3.start + a3 * t3 / o3;
        }
        xe2.refresh(false, false, { start: vb(e20, n3 && !!xe2._startClamp), end: vb(t3, n3 && !!xe2._endClamp) }, r3), xe2.update();
      }, xe2.adjustPinSpacing = function(e20) {
        if (E2 && e20) {
          var t3 = E2.indexOf(he2.d) + 1;
          E2[t3] = parseFloat(E2[t3]) + e20 + Zb, E2[1] = parseFloat(E2[1]) + e20 + Zb, zw(E2);
        }
      }, xe2.disable = function(t3, n3) {
        if (xe2.enabled && (false !== t3 && xe2.revert(true, true), xe2.enabled = xe2.isActive = false, n3 || L2 && L2.pause(), I2 = 0, i2 && (i2.uncache = 1), Ce2 && iw(e19, "refreshInit", Ce2), z2 && (z2.pause(), r2.tween && r2.tween.kill() && (r2.tween = 0)), !ve2)) {
          for (var o3 = hw.length; o3--; ) if (hw[o3].scroller === de2 && hw[o3] !== xe2) return;
          iw(de2, "resize", gw), ve2 || iw(de2, "scroll", mw);
        }
      }, xe2.kill = function(e20, r3) {
        xe2.disable(e20, r3), L2 && !r3 && L2.kill(), q2 && delete pw[q2];
        var o3 = hw.indexOf(xe2);
        o3 >= 0 && hw.splice(o3, 1), o3 === Vy && Nw > 0 && Vy--, o3 = 0, hw.forEach(function(e21) {
          return e21.scroller === xe2.scroller && (o3 = 1);
        }), o3 || sb || (xe2.scroll.rec = 0), n2 && (n2.scrollTrigger = null, e20 && n2.revert({ kill: false }), r3 || n2.kill()), c2 && [c2, f2, h2, p2].forEach(function(e21) {
          return e21.parentNode && e21.parentNode.removeChild(e21);
        }), lb === xe2 && (lb = 0), Q2 && (i2 && (i2.uncache = 1), o3 = 0, hw.forEach(function(e21) {
          return e21.pin === Q2 && o3++;
        }), o3 || (i2.spacer = 0)), t2.onKill && t2.onKill(xe2);
      }, hw.push(xe2), xe2.enable(false, false), V2 && V2(xe2), n2 && n2.add && !v2) {
        var Re2 = xe2.update;
        xe2.update = function() {
          xe2.update = Re2, iy.cache++, u2 || l2 || xe2.refresh();
        }, Sy.delayedCall(0.01, xe2.update), v2 = 0.01, u2 = l2 = 0;
      } else xe2.refresh();
      Q2 && function() {
        if (ub !== Sw) {
          var e20 = ub = Sw;
          requestAnimationFrame(function() {
            return e20 === Sw && kw(true);
          });
        }
      }();
    } else this.update = this.refresh = this.kill = bb;
  }, e19.register = function(t2) {
    return Ey || (Sy = t2 || Cb(), xb() && window.document && e19.enable(), Ey = db), Ey;
  }, e19.defaults = function(e20) {
    if (e20) for (var t2 in e20) sw[t2] = e20[t2];
    return sw;
  }, e19.disable = function(e20, t2) {
    db = 0, hw.forEach(function(n3) {
      return n3[t2 ? "kill" : "disable"](e20);
    }), iw(Py, "wheel", mw), iw(ky, "scroll", mw), clearInterval(zy), iw(ky, "touchcancel", bb), iw(Ny, "touchstart", bb), nw(iw, ky, "pointerdown,touchstart,mousedown", _b), nw(iw, ky, "pointerup,touchend,mouseup", yb), Ry.kill(), Pb(iw);
    for (var n2 = 0; n2 < iy.length; n2 += 3) ow(iw, iy[n2], iy[n2 + 1]), ow(iw, iy[n2], iy[n2 + 2]);
  }, e19.enable = function() {
    if (Py = window, ky = document, My = ky.documentElement, Ny = ky.body, Sy && (Ly = Sy.utils.toArray, jy = Sy.utils.clamp, Qy = Sy.core.context || bb, Yy = Sy.core.suppressOverwrites || bb, eb = Py.history.scrollRestoration || "auto", Mw = Py.pageYOffset || 0, Sy.core.globals("ScrollTrigger", e19), Ny)) {
      db = 1, (tb = document.createElement("div")).style.height = "100vh", tb.style.position = "absolute", Ew(), gb(), Oy.register(Sy), e19.isTouch = Oy.isTouch, Jy = Oy.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Zy = 1 === Oy.isTouch, rw(Py, "wheel", mw), Ay = [Py, ky, My, Ny], Sy.matchMedia ? (e19.matchMedia = function(e20) {
        var t3, n3 = Sy.matchMedia();
        for (t3 in e20) n3.add(t3, e20[t3]);
        return n3;
      }, Sy.addEventListener("matchMediaInit", function() {
        return Tw();
      }), Sy.addEventListener("matchMediaRevert", function() {
        return Cw();
      }), Sy.addEventListener("matchMedia", function() {
        kw(0, 1), ww("matchMedia");
      }), Sy.matchMedia().add("(orientation: portrait)", function() {
        return vw(), vw;
      })) : console.warn("Requires GSAP 3.11.0 or later"), vw(), rw(ky, "scroll", mw);
      var t2, n2, r2 = Ny.hasAttribute("style"), i2 = Ny.style, o2 = i2.borderTopStyle, a2 = Sy.core.Animation.prototype;
      for (a2.revert || Object.defineProperty(a2, "revert", { value: function() {
        return this.time(-0.01, true);
      } }), i2.borderTopStyle = "solid", t2 = Jb(Ny), gy.m = Math.round(t2.top + gy.sc()) || 0, vy.m = Math.round(t2.left + vy.sc()) || 0, o2 ? i2.borderTopStyle = o2 : i2.removeProperty("border-top-style"), r2 || (Ny.setAttribute("style", ""), Ny.removeAttribute("style")), zy = setInterval(dw, 250), Sy.delayedCall(0.5, function() {
        return cb = 0;
      }), rw(ky, "touchcancel", bb), rw(Ny, "touchstart", bb), nw(rw, ky, "pointerdown,touchstart,mousedown", _b), nw(rw, ky, "pointerup,touchend,mouseup", yb), Fy = Sy.utils.checkPrefix("transform"), Lw.push(Fy), Ey = fb(), Ry = Sy.delayedCall(0.2, kw).pause(), Wy = [ky, "visibilitychange", function() {
        var e20 = Py.innerWidth, t3 = Py.innerHeight;
        ky.hidden ? (Hy = e20, Uy = t3) : Hy === e20 && Uy === t3 || gw();
      }, ky, "DOMContentLoaded", kw, Py, "load", kw, Py, "resize", gw], Pb(rw), hw.forEach(function(e20) {
        return e20.enable(0, 1);
      }), n2 = 0; n2 < iy.length; n2 += 3) ow(iw, iy[n2], iy[n2 + 1]), ow(iw, iy[n2], iy[n2 + 2]);
    }
  }, e19.config = function(t2) {
    "limitCallbacks" in t2 && (ob = !!t2.limitCallbacks);
    var n2 = t2.syncInterval;
    n2 && clearInterval(zy) || (zy = n2) && setInterval(dw, n2), "ignoreMobileResize" in t2 && (Zy = 1 === e19.isTouch && t2.ignoreMobileResize), "autoRefreshEvents" in t2 && (Pb(iw) || Pb(rw, t2.autoRefreshEvents || "none"), Xy = -1 === (t2.autoRefreshEvents + "").indexOf("resize"));
  }, e19.scrollerProxy = function(e20, t2) {
    var n2 = _y(e20), r2 = iy.indexOf(n2), i2 = Tb(n2);
    ~r2 && iy.splice(r2, i2 ? 6 : 2), t2 && (i2 ? oy.unshift(Py, t2, Ny, t2, My, t2) : oy.unshift(n2, t2));
  }, e19.clearMatchMedia = function(e20) {
    hw.forEach(function(t2) {
      return t2._ctx && t2._ctx.query === e20 && t2._ctx.kill(true, true);
    });
  }, e19.isInViewport = function(e20, t2, n2) {
    var r2 = (kb(e20) ? _y(e20) : e20).getBoundingClientRect(), i2 = r2[n2 ? Bb : Fb] * t2 || 0;
    return n2 ? r2.right - i2 > 0 && r2.left + i2 < Py.innerWidth : r2.bottom - i2 > 0 && r2.top + i2 < Py.innerHeight;
  }, e19.positionInViewport = function(e20, t2, n2) {
    kb(e20) && (e20 = _y(e20));
    var r2 = e20.getBoundingClientRect(), i2 = r2[n2 ? Bb : Fb], o2 = null == t2 ? i2 / 2 : t2 in uw ? uw[t2] * i2 : ~t2.indexOf("%") ? parseFloat(t2) * i2 / 100 : parseFloat(t2) || 0;
    return n2 ? (r2.left + o2) / Py.innerWidth : (r2.top + o2) / Py.innerHeight;
  }, e19.killAll = function(e20) {
    if (hw.slice(0).forEach(function(e21) {
      return "ScrollSmoother" !== e21.vars.id && e21.kill();
    }), true !== e20) {
      var t2 = _w.killAll || [];
      _w = {}, t2.forEach(function(e21) {
        return e21();
      });
    }
  }, e19;
}();
Yw.version = "3.12.7", Yw.saveStyles = function(e19) {
  return e19 ? Ly(e19).forEach(function(e20) {
    if (e20 && e20.style) {
      var t2 = xw.indexOf(e20);
      t2 >= 0 && xw.splice(t2, 5), xw.push(e20, e20.style.cssText, e20.getBBox && e20.getAttribute("transform"), Sy.core.getCache(e20), Qy());
    }
  }) : xw;
}, Yw.revert = function(e19, t2) {
  return Tw(!e19, t2);
}, Yw.create = function(e19, t2) {
  return new Yw(e19, t2);
}, Yw.refresh = function(e19) {
  return e19 ? gw(true) : (Ey || Yw.register()) && kw(true);
}, Yw.update = function(e19) {
  return ++iy.cache && Aw(true === e19 ? 2 : 0);
}, Yw.clearScrollMemory = Ow, Yw.maxScroll = function(e19, t2) {
  return Eb(e19, t2 ? vy : gy);
}, Yw.getScrollFunc = function(e19, t2) {
  return yy(_y(e19), t2 ? vy : gy);
}, Yw.getById = function(e19) {
  return pw[e19];
}, Yw.getAll = function() {
  return hw.filter(function(e19) {
    return "ScrollSmoother" !== e19.vars.id;
  });
}, Yw.isScrolling = function() {
  return !!pb;
}, Yw.snapDirectional = tw, Yw.addEventListener = function(e19, t2) {
  var n2 = _w[e19] || (_w[e19] = []);
  ~n2.indexOf(t2) || n2.push(t2);
}, Yw.removeEventListener = function(e19, t2) {
  var n2 = _w[e19], r2 = n2 && n2.indexOf(t2);
  r2 >= 0 && n2.splice(r2, 1);
}, Yw.batch = function(e19, t2) {
  var n2, r2 = [], i2 = {}, o2 = t2.interval || 0.016, a2 = t2.batchMax || 1e9, s2 = function(e20, t3) {
    var n3 = [], r3 = [], i3 = Sy.delayedCall(o2, function() {
      t3(n3, r3), n3 = [], r3 = [];
    }).pause();
    return function(e21) {
      n3.length || i3.restart(true), n3.push(e21.trigger), r3.push(e21), a2 <= n3.length && i3.progress(1);
    };
  };
  for (n2 in t2) i2[n2] = "on" === n2.substr(0, 2) && Mb(t2[n2]) && "onRefreshInit" !== n2 ? s2(0, t2[n2]) : t2[n2];
  return Mb(a2) && (a2 = a2(), rw(Yw, "refresh", function() {
    return a2 = t2.batchMax();
  })), Ly(e19).forEach(function(e20) {
    var t3 = {};
    for (n2 in i2) t3[n2] = i2[n2];
    t3.trigger = e20, r2.push(Yw.create(t3));
  }), r2;
};
var Xw, qw = function(e19, t2, n2, r2) {
  return t2 > r2 ? e19(r2) : t2 < 0 && e19(0), n2 > r2 ? (r2 - t2) / (n2 - t2) : n2 < 0 ? t2 / (t2 - n2) : 1;
}, Zw = function e18(t2, n2) {
  true === n2 ? t2.style.removeProperty("touch-action") : t2.style.touchAction = true === n2 ? "auto" : n2 ? "pan-" + n2 + (Oy.isTouch ? " pinch-zoom" : "") : "none", t2 === My && e18(Ny, n2);
}, Gw = { auto: 1, scroll: 1 }, Kw = function(e19) {
  var t2, n2 = e19.event, r2 = e19.target, i2 = e19.axis, o2 = (n2.changedTouches ? n2.changedTouches[0] : n2).target, a2 = o2._gsap || Sy.core.getCache(o2), s2 = fb();
  if (!a2._isScrollT || s2 - a2._isScrollT > 2e3) {
    for (; o2 && o2 !== Ny && (o2.scrollHeight <= o2.clientHeight && o2.scrollWidth <= o2.clientWidth || !Gw[(t2 = Gb(o2)).overflowY] && !Gw[t2.overflowX]); ) o2 = o2.parentNode;
    a2._isScroll = o2 && o2 !== r2 && !Tb(o2) && (Gw[(t2 = Gb(o2)).overflowY] || Gw[t2.overflowX]), a2._isScrollT = s2;
  }
  (a2._isScroll || "x" === i2) && (n2.stopPropagation(), n2._gsapAllow = true);
}, Jw = function(e19, t2, n2, r2) {
  return Oy.create({ target: e19, capture: true, debounce: false, lockAxis: true, type: t2, onWheel: r2 = r2 && Kw, onPress: r2, onDrag: r2, onScroll: r2, onEnable: function() {
    return n2 && rw(ky, Oy.eventTypes[0], ex, false, true);
  }, onDisable: function() {
    return iw(ky, Oy.eventTypes[0], ex, true);
  } });
}, Qw = /(input|label|select|textarea)/i, ex = function(e19) {
  var t2 = Qw.test(e19.target.tagName);
  (t2 || Xw) && (e19._gsapAllow = true, Xw = t2);
}, tx = function(e19) {
  Ab(e19) || (e19 = {}), e19.preventDefault = e19.isNormalizer = e19.allowClicks = true, e19.type || (e19.type = "wheel,touch"), e19.debounce = !!e19.debounce, e19.id = e19.id || "normalizer";
  var t2, n2, r2, i2, o2, a2, s2, u2, l2 = e19, c2 = l2.normalizeScrollX, f2 = l2.momentum, h2 = l2.allowNestedScroll, p2 = l2.onRelease, d2 = _y(e19.target) || My, m2 = Sy.core.globals().ScrollSmoother, v2 = m2 && m2.get(), g2 = Jy && (e19.content && _y(e19.content) || v2 && false !== e19.content && !v2.smooth() && v2.content()), _2 = yy(d2, gy), y2 = yy(d2, vy), b2 = 1, w2 = (Oy.isTouch && Py.visualViewport ? Py.visualViewport.scale * Py.visualViewport.width : Py.outerWidth) / Py.innerWidth, x2 = 0, C2 = Mb(f2) ? function() {
    return f2(t2);
  } : function() {
    return f2 || 2.8;
  }, T2 = Jw(d2, e19.type, true, h2), O2 = function() {
    return i2 = false;
  }, S2 = bb, E2 = bb, P2 = function() {
    n2 = Eb(d2, gy), E2 = jy(Jy ? 1 : 0, n2), c2 && (S2 = jy(0, Eb(d2, vy))), r2 = Sw;
  }, k2 = function() {
    g2._gsap.y = wb(parseFloat(g2._gsap.y) + _2.offset) + "px", g2.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(g2._gsap.y) + ", 0, 1)", _2.offset = _2.cacheID = 0;
  }, M2 = function() {
    P2(), o2.isActive() && o2.vars.scrollY > n2 && (_2() > n2 ? o2.progress(1) && _2(n2) : o2.resetTo("scrollY", n2));
  };
  return g2 && Sy.set(g2, { y: "+=0" }), e19.ignoreCheck = function(e20) {
    return Jy && "touchmove" === e20.type && function() {
      if (i2) {
        requestAnimationFrame(O2);
        var e21 = wb(t2.deltaY / 2), n3 = E2(_2.v - e21);
        if (g2 && n3 !== _2.v + _2.offset) {
          _2.offset = n3 - _2.v;
          var r3 = wb((parseFloat(g2 && g2._gsap.y) || 0) - _2.offset);
          g2.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + r3 + ", 0, 1)", g2._gsap.y = r3 + "px", _2.cacheID = iy.cache, Aw();
        }
        return true;
      }
      _2.offset && k2(), i2 = true;
    }() || b2 > 1.05 && "touchstart" !== e20.type || t2.isGesturing || e20.touches && e20.touches.length > 1;
  }, e19.onPress = function() {
    i2 = false;
    var e20 = b2;
    b2 = wb((Py.visualViewport && Py.visualViewport.scale || 1) / w2), o2.pause(), e20 !== b2 && Zw(d2, b2 > 1.01 || !c2 && "x"), a2 = y2(), s2 = _2(), P2(), r2 = Sw;
  }, e19.onRelease = e19.onGestureStart = function(e20, t3) {
    if (_2.offset && k2(), t3) {
      iy.cache++;
      var r3, i3, a3 = C2();
      c2 && (i3 = (r3 = y2()) + 0.05 * a3 * -e20.velocityX / 0.227, a3 *= qw(y2, r3, i3, Eb(d2, vy)), o2.vars.scrollX = S2(i3)), i3 = (r3 = _2()) + 0.05 * a3 * -e20.velocityY / 0.227, a3 *= qw(_2, r3, i3, Eb(d2, gy)), o2.vars.scrollY = E2(i3), o2.invalidate().duration(a3).play(0.01), (Jy && o2.vars.scrollY >= n2 || r3 >= n2 - 1) && Sy.to({}, { onUpdate: M2, duration: a3 });
    } else u2.restart(true);
    p2 && p2(e20);
  }, e19.onWheel = function() {
    o2._ts && o2.pause(), fb() - x2 > 1e3 && (r2 = 0, x2 = fb());
  }, e19.onChange = function(e20, t3, n3, i3, o3) {
    if (Sw !== r2 && P2(), t3 && c2 && y2(S2(i3[2] === t3 ? a2 + (e20.startX - e20.x) : y2() + t3 - i3[1])), n3) {
      _2.offset && k2();
      var u3 = o3[2] === n3, l3 = u3 ? s2 + e20.startY - e20.y : _2() + n3 - o3[1], f3 = E2(l3);
      u3 && l3 !== f3 && (s2 += f3 - l3), _2(f3);
    }
    (n3 || t3) && Aw();
  }, e19.onEnable = function() {
    Zw(d2, !c2 && "x"), Yw.addEventListener("refresh", M2), rw(Py, "resize", M2), _2.smooth && (_2.target.style.scrollBehavior = "auto", _2.smooth = y2.smooth = false), T2.enable();
  }, e19.onDisable = function() {
    Zw(d2, true), iw(Py, "resize", M2), Yw.removeEventListener("refresh", M2), T2.kill();
  }, e19.lockAxis = false !== e19.lockAxis, (t2 = new Oy(e19)).iOS = Jy, Jy && !_2() && _2(1), Jy && Sy.ticker.add(bb), u2 = t2._dc, o2 = Sy.to(t2, { ease: "power4", paused: true, inherit: false, scrollX: c2 ? "+=0.1" : "+=0", scrollY: "+=0.1", modifiers: { scrollY: Uw(_2, _2(), function() {
    return o2.pause();
  }) }, onUpdate: Aw, onComplete: u2.vars.onComplete }), t2;
};
Yw.sort = function(e19) {
  if (Mb(e19)) return hw.sort(e19);
  var t2 = Py.pageYOffset || 0;
  return Yw.getAll().forEach(function(e20) {
    return e20._sortY = e20.trigger ? t2 + e20.trigger.getBoundingClientRect().top : e20.start + Py.innerHeight;
  }), hw.sort(e19 || function(e20, t3) {
    return -1e6 * (e20.vars.refreshPriority || 0) + (e20.vars.containerAnimation ? 1e6 : e20._sortY) - ((t3.vars.containerAnimation ? 1e6 : t3._sortY) + -1e6 * (t3.vars.refreshPriority || 0));
  });
}, Yw.observe = function(e19) {
  return new Oy(e19);
}, Yw.normalizeScroll = function(e19) {
  if (void 0 === e19) return qy;
  if (true === e19 && qy) return qy.enable();
  if (false === e19) return qy && qy.kill(), void (qy = e19);
  var t2 = e19 instanceof Oy ? e19 : tx(e19);
  return qy && qy.target === t2.target && qy.kill(), Tb(t2.target) && (qy = t2), t2;
}, Yw.core = { _getVelocityProp: by, _inputObserver: Jw, _scrollers: iy, _proxies: oy, bridge: { ss: function() {
  pb || ww("scrollStart"), pb = fb();
}, ref: function() {
  return Iy;
} } }, Cb() && Sy.registerPlugin(Yw);
var nx = Qi.registerPlugin(xa) || Qi;
function rx({ children: e19 }) {
  const t2 = ce(null), { width: n2, height: r2, isLargeScreen: i2 } = Ia();
  return ka(() => {
    let e20, o2;
    "scrollRestoration" in window.history && (window.history.scrollRestoration = "manual");
    const a2 = () => {
      var n3;
      t2.current && (e20 = F_.init(t2.current, { damping: 0.06, alwaysShowTrack: true, renderByPixels: true, delegateTo: document }), n3 = e20, ja.set(Da, n3), Yw.scrollerProxy(t2.current, { scrollTop(t3) {
        return arguments.length && (e20.scrollTop = t3), e20.scrollTop;
      }, getBoundingClientRect: () => ({ top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }) }), e20.addListener(Yw.update), Yw.defaults({ scroller: t2.current }), Yw.refresh());
    };
    return o2 = new ResizeObserver(() => {
      Yw.refresh();
    }), t2.current && o2.observe(t2.current), (n2 && r2 || i2) && a2(), (() => {
      if (n2 && r2) {
        Ra(nx.to("#home-scroll > .row", { x: i2 ? "-700vw" : () => -(5033 + 4 * window.innerWidth + window.innerWidth / 3 * 2), ease: "none", scrollTrigger: { trigger: "#home-scroll", start: "top top", end: () => "+=" + window.innerHeight, pin: true, scrub: true, invalidateOnRefresh: true, force3D: true } }));
      }
    })(), () => {
      za() && (za().destroy(), ja.delete(Da)), Yw.killAll(), o2 && o2.disconnect();
    };
  }, { dependencies: [n2, r2, i2], scope: t2, revertOnUpdate: true }), $("div", { id: "scroll-wrapper", style: { position: n2 && r2 ? "fixed" : "static", height: "100%" }, ref: t2, children: e19 });
}
nx.core.Tween, nx.registerPlugin(Yw, ka);
function ix() {
  return $("footer", { children: [$("div", { className: "container", children: $("div", { className: "row gap-75 s-between", children: [$("div", { children: [$(Ju, { className: "logo", children: $("img", { className: "icon", src: il, alt: "logo" }) }), $("h5", { className: "static capitalize", children: "About the company" }), $("p", { className: "to-middle text-white capitalize", children: "MasBo is an architectural group working in the field of architecture and urban planning. The company was founded in 2006. We offer a full range of services from interior design, individual cottages to the design and construction of residential complexes." }), $("div", { className: "row gap-25 wrap", children: [$("p", { className: "to-middle text-white capitalize", children: [$("span", { className: "font-bold", children: " Address: " }), " Ukraine, Kyiv region, 08200 Irpen,", $("br", {}), " Stelmakh street 9a, office 206"] }), $("p", { className: "to-middle text-white capitalize", children: [$("span", { className: "font-bold", children: "Tel:" }), " +3 (096) 029-81-18, +3 (063) 023-81-18", $("br", {}), $("span", { className: "font-bold", children: "Email:" }), " office@masbo.com.ua"] })] })] }), $("div", { className: "line" }), $("div", { className: "row wrap s-between gap-50", children: [$("div", { children: [$("h5", { children: "Popular" }), $("ul", { children: [$("li", { children: [" ", $(Ju, { children: "  Arhitexture" }), " "] }), $("li", { children: ["   ", $(Ju, { children: "Modern design" }), " "] }), $("li", { children: ["   ", $(Ju, { children: "Our Services" }), " "] }), $("li", { children: ["   ", $(Ju, { children: "How we work" }), " "] }), $("li", { children: ["   ", $(Ju, { children: "Order the project" }), " "] })] })] }), $("div", { children: [$("h5", { children: "Hot links" }), $("ul", { children: [$("li", { children: ["   ", $(Ju, { children: "       Our team" }), " "] }), $("li", { children: ["   ", $(Ju, { children: "Our Services" }), " "] }), $("li", { children: ["   ", $(Ju, { children: "   How to order " }), " "] }), $("li", { children: ["   ", $(Ju, { children: "Last project" }), " "] })] })] }), $("div", { className: "footer-socials", children: [$("h5", { children: "Social" }), $("ul", { children: [$("li", { className: "row center-y gap-15", children: [$("a", { href: "#", children: $(kt, {}) }), $("h4", { children: "  Facebook" })] }), $("li", { className: "row center-y gap-15", children: [$("a", { href: "#", children: $(Pt, {}) }), $("h4", { children: "   Instagram" })] }), $("li", { className: "row center-y gap-15", children: [$("a", { href: "#", children: [" ", $(Mt, {})] }), $("h4", { children: "  Twiter" })] }), $("li", { className: "row center-y gap-15", children: [$("a", { href: "#", children: $(At, {}) }), $("h4", { children: "   Youtube" })] }), $("li", { className: "row center-y gap-15", children: [$("a", { href: "#", children: [" ", $(Nt, {})] }), $("h4", { children: "    Telegram" })] })] })] })] })] }) }), $("div", { className: "container", children: $(al, {}) }), $("div", { className: "label center-gr", children: $("span", { className: "fs-12 text-white text-center", children: ["© ", (/* @__PURE__ */ new Date()).getFullYear(), " .All Rioghts Reserved."] }) })] });
}
function ox() {
  const e19 = pu();
  return $(w, { children: [$(wl, {}), $(rx, { children: [$("main", { children: $(Rl, { mode: "wait", initial: false, children: $(ku, { location: e19, children: $(Eu, { path: "/", element: $(Cs, {}) }) }, e19.pathname) }) }), $(ix, {})] })] });
}
F_.use((_a2 = class extends P_ {
  transformDelta(e19) {
    return this.options.open ? { x: 0, y: 0 } : e19;
  }
}, __publicField(_a2, "pluginName", "overflow"), __publicField(_a2, "defaultOptions", { open: false }), _a2)), F($(Gu, { basename: "/masbo_website", children: $(ox, {}) }), document.getElementById("app"));
