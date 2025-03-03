var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a2;
(function() {
  const t19 = document.createElement("link").relList;
  if (!(t19 && t19.supports && t19.supports("modulepreload"))) {
    for (const t20 of document.querySelectorAll('link[rel="modulepreload"]')) e2(t20);
    new MutationObserver((t20) => {
      for (const n2 of t20) if ("childList" === n2.type) for (const t21 of n2.addedNodes) "LINK" === t21.tagName && "modulepreload" === t21.rel && e2(t21);
    }).observe(document, { childList: true, subtree: true });
  }
  function e2(t20) {
    if (t20.ep) return;
    t20.ep = true;
    const e3 = function(t21) {
      const e4 = {};
      return t21.integrity && (e4.integrity = t21.integrity), t21.referrerPolicy && (e4.referrerPolicy = t21.referrerPolicy), "use-credentials" === t21.crossOrigin ? e4.credentials = "include" : "anonymous" === t21.crossOrigin ? e4.credentials = "omit" : e4.credentials = "same-origin", e4;
    }(t20);
    fetch(t20.href, e3);
  }
})();
var t, e, n, r, i, o, s, a, u, l, c, h, f = {}, d = [], p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, m = Array.isArray;
function v(t19, e2) {
  for (var n2 in e2) t19[n2] = e2[n2];
  return t19;
}
function g(t19) {
  t19 && t19.parentNode && t19.parentNode.removeChild(t19);
}
function y(e2, n2, r2) {
  var i2, o2, s2, a2 = {};
  for (s2 in n2) "key" == s2 ? i2 = n2[s2] : "ref" == s2 ? o2 = n2[s2] : a2[s2] = n2[s2];
  if (arguments.length > 2 && (a2.children = arguments.length > 3 ? t.call(arguments, 2) : r2), "function" == typeof e2 && null != e2.defaultProps) for (s2 in e2.defaultProps) void 0 === a2[s2] && (a2[s2] = e2.defaultProps[s2]);
  return _(e2, a2, i2, o2, null);
}
function _(t19, r2, i2, o2, s2) {
  var a2 = { type: t19, props: r2, key: i2, ref: o2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == s2 ? ++n : s2, __i: -1, __u: 0 };
  return null == s2 && null != e.vnode && e.vnode(a2), a2;
}
function b() {
  return { current: null };
}
function w(t19) {
  return t19.children;
}
function x(t19, e2) {
  this.props = t19, this.context = e2;
}
function T(t19, e2) {
  if (null == e2) return t19.__ ? T(t19.__, t19.__i + 1) : null;
  for (var n2; e2 < t19.__k.length; e2++) if (null != (n2 = t19.__k[e2]) && null != n2.__e) return n2.__e;
  return "function" == typeof t19.type ? T(t19) : null;
}
function C(t19) {
  var e2, n2;
  if (null != (t19 = t19.__) && null != t19.__c) {
    for (t19.__e = t19.__c.base = null, e2 = 0; e2 < t19.__k.length; e2++) if (null != (n2 = t19.__k[e2]) && null != n2.__e) {
      t19.__e = t19.__c.base = n2.__e;
      break;
    }
    return C(t19);
  }
}
function P(t19) {
  (!t19.__d && (t19.__d = true) && r.push(t19) && !S.__r++ || i !== e.debounceRendering) && ((i = e.debounceRendering) || o)(S);
}
function S() {
  var t19, n2, i2, o2, a2, u2, l2, c2;
  for (r.sort(s); t19 = r.shift(); ) t19.__d && (n2 = r.length, o2 = void 0, u2 = (a2 = (i2 = t19).__v).__e, l2 = [], c2 = [], i2.__P && ((o2 = v({}, a2)).__v = a2.__v + 1, e.vnode && e.vnode(o2), L(i2.__P, o2, a2, i2.__n, i2.__P.namespaceURI, 32 & a2.__u ? [u2] : null, l2, null == u2 ? T(a2) : u2, !!(32 & a2.__u), c2), o2.__v = a2.__v, o2.__.__k[o2.__i] = o2, j(l2, o2, c2), o2.__e != u2 && C(o2)), r.length > n2 && r.sort(s));
  S.__r = 0;
}
function E(t19, e2, n2, r2, i2, o2, s2, a2, u2, l2, c2) {
  var h2, p2, v2, g2, y2, b2, x2 = r2 && r2.__k || d, C2 = e2.length;
  for (u2 = function(t20, e3, n3, r3, i3) {
    var o3, s3, a3, u3, l3, c3 = n3.length, h3 = c3, f2 = 0;
    for (t20.__k = new Array(i3), o3 = 0; o3 < i3; o3++) null != (s3 = e3[o3]) && "boolean" != typeof s3 && "function" != typeof s3 ? (u3 = o3 + f2, (s3 = t20.__k[o3] = "string" == typeof s3 || "number" == typeof s3 || "bigint" == typeof s3 || s3.constructor == String ? _(null, s3, null, null, null) : m(s3) ? _(w, { children: s3 }, null, null, null) : void 0 === s3.constructor && s3.__b > 0 ? _(s3.type, s3.props, s3.key, s3.ref ? s3.ref : null, s3.__v) : s3).__ = t20, s3.__b = t20.__b + 1, a3 = null, -1 !== (l3 = s3.__i = M(s3, n3, u3, h3)) && (h3--, (a3 = n3[l3]) && (a3.__u |= 2)), null == a3 || null === a3.__v ? (-1 == l3 && f2--, "function" != typeof s3.type && (s3.__u |= 4)) : l3 != u3 && (l3 == u3 - 1 ? f2-- : l3 == u3 + 1 ? f2++ : (l3 > u3 ? f2-- : f2++, s3.__u |= 4))) : t20.__k[o3] = null;
    if (h3) for (o3 = 0; o3 < c3; o3++) null != (a3 = n3[o3]) && !(2 & a3.__u) && (a3.__e == r3 && (r3 = T(a3)), B(a3, a3));
    return r3;
  }(n2, e2, x2, u2, C2), h2 = 0; h2 < C2; h2++) null != (v2 = n2.__k[h2]) && (p2 = -1 === v2.__i ? f : x2[v2.__i] || f, v2.__i = h2, b2 = L(t19, v2, p2, i2, o2, s2, a2, u2, l2, c2), g2 = v2.__e, v2.ref && p2.ref != v2.ref && (p2.ref && V(p2.ref, null, v2), c2.push(v2.ref, v2.__c || g2, v2)), null == y2 && null != g2 && (y2 = g2), 4 & v2.__u || p2.__k === v2.__k ? u2 = O(v2, u2, t19) : "function" == typeof v2.type && void 0 !== b2 ? u2 = b2 : g2 && (u2 = g2.nextSibling), v2.__u &= -7);
  return n2.__e = y2, u2;
}
function O(t19, e2, n2) {
  var r2, i2;
  if ("function" == typeof t19.type) {
    for (r2 = t19.__k, i2 = 0; r2 && i2 < r2.length; i2++) r2[i2] && (r2[i2].__ = t19, e2 = O(r2[i2], e2, n2));
    return e2;
  }
  t19.__e != e2 && (e2 && t19.type && !n2.contains(e2) && (e2 = T(t19)), n2.insertBefore(t19.__e, e2 || null), e2 = t19.__e);
  do {
    e2 = e2 && e2.nextSibling;
  } while (null != e2 && 8 == e2.nodeType);
  return e2;
}
function k(t19, e2) {
  return e2 = e2 || [], null == t19 || "boolean" == typeof t19 || (m(t19) ? t19.some(function(t20) {
    k(t20, e2);
  }) : e2.push(t19)), e2;
}
function M(t19, e2, n2, r2) {
  var i2, o2, s2 = t19.key, a2 = t19.type, u2 = e2[n2];
  if (null === u2 || u2 && s2 == u2.key && a2 === u2.type && !(2 & u2.__u)) return n2;
  if (r2 > (null == u2 || 2 & u2.__u ? 0 : 1)) for (i2 = n2 - 1, o2 = n2 + 1; i2 >= 0 || o2 < e2.length; ) {
    if (i2 >= 0) {
      if ((u2 = e2[i2]) && !(2 & u2.__u) && s2 == u2.key && a2 === u2.type) return i2;
      i2--;
    }
    if (o2 < e2.length) {
      if ((u2 = e2[o2]) && !(2 & u2.__u) && s2 == u2.key && a2 === u2.type) return o2;
      o2++;
    }
  }
  return -1;
}
function A(t19, e2, n2) {
  "-" == e2[0] ? t19.setProperty(e2, null == n2 ? "" : n2) : t19[e2] = null == n2 ? "" : "number" != typeof n2 || p.test(e2) ? n2 : n2 + "px";
}
function R(t19, e2, n2, r2, i2) {
  var o2;
  t: if ("style" == e2) if ("string" == typeof n2) t19.style.cssText = n2;
  else {
    if ("string" == typeof r2 && (t19.style.cssText = r2 = ""), r2) for (e2 in r2) n2 && e2 in n2 || A(t19.style, e2, "");
    if (n2) for (e2 in n2) r2 && n2[e2] === r2[e2] || A(t19.style, e2, n2[e2]);
  }
  else if ("o" == e2[0] && "n" == e2[1]) o2 = e2 != (e2 = e2.replace(a, "$1")), e2 = e2.toLowerCase() in t19 || "onFocusOut" == e2 || "onFocusIn" == e2 ? e2.toLowerCase().slice(2) : e2.slice(2), t19.l || (t19.l = {}), t19.l[e2 + o2] = n2, n2 ? r2 ? n2.u = r2.u : (n2.u = u, t19.addEventListener(e2, o2 ? c : l, o2)) : t19.removeEventListener(e2, o2 ? c : l, o2);
  else {
    if ("http://www.w3.org/2000/svg" == i2) e2 = e2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != e2 && "height" != e2 && "href" != e2 && "list" != e2 && "form" != e2 && "tabIndex" != e2 && "download" != e2 && "rowSpan" != e2 && "colSpan" != e2 && "role" != e2 && "popover" != e2 && e2 in t19) try {
      t19[e2] = null == n2 ? "" : n2;
      break t;
    } catch (t20) {
    }
    "function" == typeof n2 || (null == n2 || false === n2 && "-" != e2[4] ? t19.removeAttribute(e2) : t19.setAttribute(e2, "popover" == e2 && 1 == n2 ? "" : n2));
  }
}
function D(t19) {
  return function(n2) {
    if (this.l) {
      var r2 = this.l[n2.type + t19];
      if (null == n2.t) n2.t = u++;
      else if (n2.t < r2.u) return;
      return r2(e.event ? e.event(n2) : n2);
    }
  };
}
function L(t19, n2, r2, i2, o2, s2, a2, u2, l2, c2) {
  var h2, f2, d2, p2, y2, _2, b2, T2, C2, P2, S2, O2, k2, M2, A2, R2, D2, L2 = n2.type;
  if (void 0 !== n2.constructor) return null;
  128 & r2.__u && (l2 = !!(32 & r2.__u), s2 = [u2 = n2.__e = r2.__e]), (h2 = e.__b) && h2(n2);
  t: if ("function" == typeof L2) try {
    if (T2 = n2.props, C2 = "prototype" in L2 && L2.prototype.render, P2 = (h2 = L2.contextType) && i2[h2.__c], S2 = h2 ? P2 ? P2.props.value : h2.__ : i2, r2.__c ? b2 = (f2 = n2.__c = r2.__c).__ = f2.__E : (C2 ? n2.__c = f2 = new L2(T2, S2) : (n2.__c = f2 = new x(T2, S2), f2.constructor = L2, f2.render = I), P2 && P2.sub(f2), f2.props = T2, f2.state || (f2.state = {}), f2.context = S2, f2.__n = i2, d2 = f2.__d = true, f2.__h = [], f2._sb = []), C2 && null == f2.__s && (f2.__s = f2.state), C2 && null != L2.getDerivedStateFromProps && (f2.__s == f2.state && (f2.__s = v({}, f2.__s)), v(f2.__s, L2.getDerivedStateFromProps(T2, f2.__s))), p2 = f2.props, y2 = f2.state, f2.__v = n2, d2) C2 && null == L2.getDerivedStateFromProps && null != f2.componentWillMount && f2.componentWillMount(), C2 && null != f2.componentDidMount && f2.__h.push(f2.componentDidMount);
    else {
      if (C2 && null == L2.getDerivedStateFromProps && T2 !== p2 && null != f2.componentWillReceiveProps && f2.componentWillReceiveProps(T2, S2), !f2.__e && (null != f2.shouldComponentUpdate && false === f2.shouldComponentUpdate(T2, f2.__s, S2) || n2.__v == r2.__v)) {
        for (n2.__v != r2.__v && (f2.props = T2, f2.state = f2.__s, f2.__d = false), n2.__e = r2.__e, n2.__k = r2.__k, n2.__k.some(function(t20) {
          t20 && (t20.__ = n2);
        }), O2 = 0; O2 < f2._sb.length; O2++) f2.__h.push(f2._sb[O2]);
        f2._sb = [], f2.__h.length && a2.push(f2);
        break t;
      }
      null != f2.componentWillUpdate && f2.componentWillUpdate(T2, f2.__s, S2), C2 && null != f2.componentDidUpdate && f2.__h.push(function() {
        f2.componentDidUpdate(p2, y2, _2);
      });
    }
    if (f2.context = S2, f2.props = T2, f2.__P = t19, f2.__e = false, k2 = e.__r, M2 = 0, C2) {
      for (f2.state = f2.__s, f2.__d = false, k2 && k2(n2), h2 = f2.render(f2.props, f2.state, f2.context), A2 = 0; A2 < f2._sb.length; A2++) f2.__h.push(f2._sb[A2]);
      f2._sb = [];
    } else do {
      f2.__d = false, k2 && k2(n2), h2 = f2.render(f2.props, f2.state, f2.context), f2.state = f2.__s;
    } while (f2.__d && ++M2 < 25);
    f2.state = f2.__s, null != f2.getChildContext && (i2 = v(v({}, i2), f2.getChildContext())), C2 && !d2 && null != f2.getSnapshotBeforeUpdate && (_2 = f2.getSnapshotBeforeUpdate(p2, y2)), u2 = E(t19, m(R2 = null != h2 && h2.type === w && null == h2.key ? h2.props.children : h2) ? R2 : [R2], n2, r2, i2, o2, s2, a2, u2, l2, c2), f2.base = n2.__e, n2.__u &= -161, f2.__h.length && a2.push(f2), b2 && (f2.__E = f2.__ = null);
  } catch (t20) {
    if (n2.__v = null, l2 || null != s2) if (t20.then) {
      for (n2.__u |= l2 ? 160 : 128; u2 && 8 == u2.nodeType && u2.nextSibling; ) u2 = u2.nextSibling;
      s2[s2.indexOf(u2)] = null, n2.__e = u2;
    } else for (D2 = s2.length; D2--; ) g(s2[D2]);
    else n2.__e = r2.__e, n2.__k = r2.__k;
    e.__e(t20, n2, r2);
  }
  else null == s2 && n2.__v == r2.__v ? (n2.__k = r2.__k, n2.__e = r2.__e) : u2 = n2.__e = N(r2.__e, n2, r2, i2, o2, s2, a2, l2, c2);
  return (h2 = e.diffed) && h2(n2), 128 & n2.__u ? void 0 : u2;
}
function j(t19, n2, r2) {
  for (var i2 = 0; i2 < r2.length; i2++) V(r2[i2], r2[++i2], r2[++i2]);
  e.__c && e.__c(n2, t19), t19.some(function(n3) {
    try {
      t19 = n3.__h, n3.__h = [], t19.some(function(t20) {
        t20.call(n3);
      });
    } catch (t20) {
      e.__e(t20, n3.__v);
    }
  });
}
function N(n2, r2, i2, o2, s2, a2, u2, l2, c2) {
  var h2, d2, p2, v2, y2, _2, b2, w2 = i2.props, x2 = r2.props, C2 = r2.type;
  if ("svg" == C2 ? s2 = "http://www.w3.org/2000/svg" : "math" == C2 ? s2 = "http://www.w3.org/1998/Math/MathML" : s2 || (s2 = "http://www.w3.org/1999/xhtml"), null != a2) {
    for (h2 = 0; h2 < a2.length; h2++) if ((y2 = a2[h2]) && "setAttribute" in y2 == !!C2 && (C2 ? y2.localName == C2 : 3 == y2.nodeType)) {
      n2 = y2, a2[h2] = null;
      break;
    }
  }
  if (null == n2) {
    if (null == C2) return document.createTextNode(x2);
    n2 = document.createElementNS(s2, C2, x2.is && x2), l2 && (e.__m && e.__m(r2, a2), l2 = false), a2 = null;
  }
  if (null === C2) w2 === x2 || l2 && n2.data === x2 || (n2.data = x2);
  else {
    if (a2 = a2 && t.call(n2.childNodes), w2 = i2.props || f, !l2 && null != a2) for (w2 = {}, h2 = 0; h2 < n2.attributes.length; h2++) w2[(y2 = n2.attributes[h2]).name] = y2.value;
    for (h2 in w2) if (y2 = w2[h2], "children" == h2) ;
    else if ("dangerouslySetInnerHTML" == h2) p2 = y2;
    else if (!(h2 in x2)) {
      if ("value" == h2 && "defaultValue" in x2 || "checked" == h2 && "defaultChecked" in x2) continue;
      R(n2, h2, null, y2, s2);
    }
    for (h2 in x2) y2 = x2[h2], "children" == h2 ? v2 = y2 : "dangerouslySetInnerHTML" == h2 ? d2 = y2 : "value" == h2 ? _2 = y2 : "checked" == h2 ? b2 = y2 : l2 && "function" != typeof y2 || w2[h2] === y2 || R(n2, h2, y2, w2[h2], s2);
    if (d2) l2 || p2 && (d2.__html === p2.__html || d2.__html === n2.innerHTML) || (n2.innerHTML = d2.__html), r2.__k = [];
    else if (p2 && (n2.innerHTML = ""), E(n2, m(v2) ? v2 : [v2], r2, i2, o2, "foreignObject" == C2 ? "http://www.w3.org/1999/xhtml" : s2, a2, u2, a2 ? a2[0] : i2.__k && T(i2, 0), l2, c2), null != a2) for (h2 = a2.length; h2--; ) g(a2[h2]);
    l2 || (h2 = "value", "progress" == C2 && null == _2 ? n2.removeAttribute("value") : void 0 !== _2 && (_2 !== n2[h2] || "progress" == C2 && !_2 || "option" == C2 && _2 !== w2[h2]) && R(n2, h2, _2, w2[h2], s2), h2 = "checked", void 0 !== b2 && b2 !== n2[h2] && R(n2, h2, b2, w2[h2], s2));
  }
  return n2;
}
function V(t19, n2, r2) {
  try {
    if ("function" == typeof t19) {
      var i2 = "function" == typeof t19.__u;
      i2 && t19.__u(), i2 && null == n2 || (t19.__u = t19(n2));
    } else t19.current = n2;
  } catch (t20) {
    e.__e(t20, r2);
  }
}
function B(t19, n2, r2) {
  var i2, o2;
  if (e.unmount && e.unmount(t19), (i2 = t19.ref) && (i2.current && i2.current !== t19.__e || V(i2, null, n2)), null != (i2 = t19.__c)) {
    if (i2.componentWillUnmount) try {
      i2.componentWillUnmount();
    } catch (t20) {
      e.__e(t20, n2);
    }
    i2.base = i2.__P = null;
  }
  if (i2 = t19.__k) for (o2 = 0; o2 < i2.length; o2++) i2[o2] && B(i2[o2], n2, r2 || "function" != typeof t19.type);
  r2 || g(t19.__e), t19.__c = t19.__ = t19.__e = void 0;
}
function I(t19, e2, n2) {
  return this.constructor(t19, n2);
}
function F(n2, r2, i2) {
  var o2, s2, a2, u2;
  r2 == document && (r2 = document.documentElement), e.__ && e.__(n2, r2), s2 = (o2 = "function" == typeof i2) ? null : i2 && i2.__k || r2.__k, a2 = [], u2 = [], L(r2, n2 = (!o2 && i2 || r2).__k = y(w, null, [n2]), s2 || f, f, r2.namespaceURI, !o2 && i2 ? [i2] : s2 ? null : r2.firstChild ? t.call(r2.childNodes) : null, a2, !o2 && i2 ? i2 : s2 ? s2.__e : r2.firstChild, o2, u2), j(a2, n2, u2);
}
function z(t19, e2) {
  F(t19, e2, z);
}
function U(e2, n2, r2) {
  var i2, o2, s2, a2, u2 = v({}, e2.props);
  for (s2 in e2.type && e2.type.defaultProps && (a2 = e2.type.defaultProps), n2) "key" == s2 ? i2 = n2[s2] : "ref" == s2 ? o2 = n2[s2] : u2[s2] = void 0 === n2[s2] && void 0 !== a2 ? a2[s2] : n2[s2];
  return arguments.length > 2 && (u2.children = arguments.length > 3 ? t.call(arguments, 2) : r2), _(e2.type, u2, i2 || e2.key, o2 || e2.ref, null);
}
function W(t19, e2) {
  var n2 = { __c: e2 = "__cC" + h++, __: t19, Consumer: function(t20, e3) {
    return t20.children(e3);
  }, Provider: function(t20) {
    var n3, r2;
    return this.getChildContext || (n3 = /* @__PURE__ */ new Set(), (r2 = {})[e2] = this, this.getChildContext = function() {
      return r2;
    }, this.componentWillUnmount = function() {
      n3 = null;
    }, this.shouldComponentUpdate = function(t21) {
      this.props.value !== t21.value && n3.forEach(function(t22) {
        t22.__e = true, P(t22);
      });
    }, this.sub = function(t21) {
      n3.add(t21);
      var e3 = t21.componentWillUnmount;
      t21.componentWillUnmount = function() {
        n3 && n3.delete(t21), e3 && e3.call(t21);
      };
    }), t20.children;
  } };
  return n2.Provider.__ = n2.Consumer.contextType = n2;
}
t = d.slice, e = { __e: function(t19, e2, n2, r2) {
  for (var i2, o2, s2; e2 = e2.__; ) if ((i2 = e2.__c) && !i2.__) try {
    if ((o2 = i2.constructor) && null != o2.getDerivedStateFromError && (i2.setState(o2.getDerivedStateFromError(t19)), s2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(t19, r2 || {}), s2 = i2.__d), s2) return i2.__E = i2;
  } catch (e3) {
    t19 = e3;
  }
  throw t19;
} }, n = 0, x.prototype.setState = function(t19, e2) {
  var n2;
  n2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = v({}, this.state), "function" == typeof t19 && (t19 = t19(v({}, n2), this.props)), t19 && v(n2, t19), null != t19 && this.__v && (e2 && this._sb.push(e2), P(this));
}, x.prototype.forceUpdate = function(t19) {
  this.__v && (this.__e = true, t19 && this.__h.push(t19), P(this));
}, x.prototype.render = w, r = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, s = function(t19, e2) {
  return t19.__v.__b - e2.__v.__b;
}, S.__r = 0, a = /(PointerCapture)$|Capture$/i, u = 0, l = D(false), c = D(true), h = 0;
var H = 0;
function $(t19, n2, r2, i2, o2, s2) {
  n2 || (n2 = {});
  var a2, u2, l2 = n2;
  if ("ref" in l2) for (u2 in l2 = {}, n2) "ref" == u2 ? a2 = n2[u2] : l2[u2] = n2[u2];
  var c2 = { type: t19, props: l2, key: r2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --H, __i: -1, __u: 0, __source: o2, __self: s2 };
  if ("function" == typeof t19 && (a2 = t19.defaultProps)) for (u2 in a2) void 0 === l2[u2] && (l2[u2] = a2[u2]);
  return e.vnode && e.vnode(c2), c2;
}
var Y, X, q, G, K = 0, Z = [], J = e, Q = J.__b, tt = J.__r, et = J.diffed, nt = J.__c, rt = J.unmount, it = J.__;
function ot(t19, e2) {
  J.__h && J.__h(X, t19, K || e2), K = 0;
  var n2 = X.__H || (X.__H = { __: [], __h: [] });
  return t19 >= n2.__.length && n2.__.push({}), n2.__[t19];
}
function st(t19) {
  return K = 1, at(Tt, t19);
}
function at(t19, e2, n2) {
  var r2 = ot(Y++, 2);
  if (r2.t = t19, !r2.__c && (r2.__ = [n2 ? n2(e2) : Tt(void 0, e2), function(t20) {
    var e3 = r2.__N ? r2.__N[0] : r2.__[0], n3 = r2.t(e3, t20);
    e3 !== n3 && (r2.__N = [n3, r2.__[1]], r2.__c.setState({}));
  }], r2.__c = X, !X.u)) {
    var i2 = function(t20, e3, n3) {
      if (!r2.__c.__H) return true;
      var i3 = r2.__c.__H.__.filter(function(t21) {
        return !!t21.__c;
      });
      if (i3.every(function(t21) {
        return !t21.__N;
      })) return !o2 || o2.call(this, t20, e3, n3);
      var s3 = r2.__c.props !== t20;
      return i3.forEach(function(t21) {
        if (t21.__N) {
          var e4 = t21.__[0];
          t21.__ = t21.__N, t21.__N = void 0, e4 !== t21.__[0] && (s3 = true);
        }
      }), o2 && o2.call(this, t20, e3, n3) || s3;
    };
    X.u = true;
    var o2 = X.shouldComponentUpdate, s2 = X.componentWillUpdate;
    X.componentWillUpdate = function(t20, e3, n3) {
      if (this.__e) {
        var r3 = o2;
        o2 = void 0, i2(t20, e3, n3), o2 = r3;
      }
      s2 && s2.call(this, t20, e3, n3);
    }, X.shouldComponentUpdate = i2;
  }
  return r2.__N || r2.__;
}
function ut(t19, e2) {
  var n2 = ot(Y++, 3);
  !J.__s && xt(n2.__H, e2) && (n2.__ = t19, n2.i = e2, X.__H.__h.push(n2));
}
function lt(t19, e2) {
  var n2 = ot(Y++, 4);
  !J.__s && xt(n2.__H, e2) && (n2.__ = t19, n2.i = e2, X.__h.push(n2));
}
function ct(t19) {
  return K = 5, ft(function() {
    return { current: t19 };
  }, []);
}
function ht(t19, e2, n2) {
  K = 6, lt(function() {
    return "function" == typeof t19 ? (t19(e2()), function() {
      return t19(null);
    }) : t19 ? (t19.current = e2(), function() {
      return t19.current = null;
    }) : void 0;
  }, null == n2 ? n2 : n2.concat(t19));
}
function ft(t19, e2) {
  var n2 = ot(Y++, 7);
  return xt(n2.__H, e2) && (n2.__ = t19(), n2.__H = e2, n2.__h = t19), n2.__;
}
function dt(t19, e2) {
  return K = 8, ft(function() {
    return t19;
  }, e2);
}
function pt(t19) {
  var e2 = X.context[t19.__c], n2 = ot(Y++, 9);
  return n2.c = t19, e2 ? (null == n2.__ && (n2.__ = true, e2.sub(X)), e2.props.value) : t19.__;
}
function mt(t19, e2) {
  J.useDebugValue && J.useDebugValue(e2 ? e2(t19) : t19);
}
function vt() {
  var t19 = ot(Y++, 11);
  if (!t19.__) {
    for (var e2 = X.__v; null !== e2 && !e2.__m && null !== e2.__; ) e2 = e2.__;
    var n2 = e2.__m || (e2.__m = [0, 0]);
    t19.__ = "P" + n2[0] + "-" + n2[1]++;
  }
  return t19.__;
}
function gt() {
  for (var t19; t19 = Z.shift(); ) if (t19.__P && t19.__H) try {
    t19.__H.__h.forEach(bt), t19.__H.__h.forEach(wt), t19.__H.__h = [];
  } catch (e2) {
    t19.__H.__h = [], J.__e(e2, t19.__v);
  }
}
J.__b = function(t19) {
  X = null, Q && Q(t19);
}, J.__ = function(t19, e2) {
  t19 && e2.__k && e2.__k.__m && (t19.__m = e2.__k.__m), it && it(t19, e2);
}, J.__r = function(t19) {
  tt && tt(t19), Y = 0;
  var e2 = (X = t19.__c).__H;
  e2 && (q === X ? (e2.__h = [], X.__h = [], e2.__.forEach(function(t20) {
    t20.__N && (t20.__ = t20.__N), t20.i = t20.__N = void 0;
  })) : (e2.__h.forEach(bt), e2.__h.forEach(wt), e2.__h = [], Y = 0)), q = X;
}, J.diffed = function(t19) {
  et && et(t19);
  var e2 = t19.__c;
  e2 && e2.__H && (e2.__H.__h.length && (1 !== Z.push(e2) && G === J.requestAnimationFrame || ((G = J.requestAnimationFrame) || _t)(gt)), e2.__H.__.forEach(function(t20) {
    t20.i && (t20.__H = t20.i), t20.i = void 0;
  })), q = X = null;
}, J.__c = function(t19, e2) {
  e2.some(function(t20) {
    try {
      t20.__h.forEach(bt), t20.__h = t20.__h.filter(function(t21) {
        return !t21.__ || wt(t21);
      });
    } catch (n2) {
      e2.some(function(t21) {
        t21.__h && (t21.__h = []);
      }), e2 = [], J.__e(n2, t20.__v);
    }
  }), nt && nt(t19, e2);
}, J.unmount = function(t19) {
  rt && rt(t19);
  var e2, n2 = t19.__c;
  n2 && n2.__H && (n2.__H.__.forEach(function(t20) {
    try {
      bt(t20);
    } catch (t21) {
      e2 = t21;
    }
  }), n2.__H = void 0, e2 && J.__e(e2, n2.__v));
};
var yt = "function" == typeof requestAnimationFrame;
function _t(t19) {
  var e2, n2 = function() {
    clearTimeout(r2), yt && cancelAnimationFrame(e2), setTimeout(t19);
  }, r2 = setTimeout(n2, 100);
  yt && (e2 = requestAnimationFrame(n2));
}
function bt(t19) {
  var e2 = X, n2 = t19.__c;
  "function" == typeof n2 && (t19.__c = void 0, n2()), X = e2;
}
function wt(t19) {
  var e2 = X;
  t19.__c = t19.__(), X = e2;
}
function xt(t19, e2) {
  return !t19 || t19.length !== e2.length || e2.some(function(e3, n2) {
    return e3 !== t19[n2];
  });
}
function Tt(t19, e2) {
  return "function" == typeof e2 ? e2(t19) : e2;
}
function Ct(t19, e2) {
  for (var n2 in e2) t19[n2] = e2[n2];
  return t19;
}
function Pt(t19, e2) {
  for (var n2 in t19) if ("__source" !== n2 && !(n2 in e2)) return true;
  for (var r2 in e2) if ("__source" !== r2 && t19[r2] !== e2[r2]) return true;
  return false;
}
function St(t19, e2) {
  var n2 = e2(), r2 = st({ t: { __: n2, u: e2 } }), i2 = r2[0].t, o2 = r2[1];
  return lt(function() {
    i2.__ = n2, i2.u = e2, Et(i2) && o2({ t: i2 });
  }, [t19, n2, e2]), ut(function() {
    return Et(i2) && o2({ t: i2 }), t19(function() {
      Et(i2) && o2({ t: i2 });
    });
  }, [t19]), n2;
}
function Et(t19) {
  var e2, n2, r2 = t19.u, i2 = t19.__;
  try {
    var o2 = r2();
    return !((e2 = i2) === (n2 = o2) && (0 !== e2 || 1 / e2 == 1 / n2) || e2 != e2 && n2 != n2);
  } catch (t20) {
    return true;
  }
}
function Ot(t19) {
  t19();
}
function kt(t19) {
  return t19;
}
function Mt() {
  return [false, Ot];
}
var At = lt;
function Rt(t19, e2) {
  this.props = t19, this.context = e2;
}
function Dt(t19, e2) {
  function n2(t20) {
    var n3 = this.props.ref, r3 = n3 == t20.ref;
    return !r3 && n3 && (n3.call ? n3(null) : n3.current = null), e2 ? !e2(this.props, t20) || !r3 : Pt(this.props, t20);
  }
  function r2(e3) {
    return this.shouldComponentUpdate = n2, y(t19, e3);
  }
  return r2.displayName = "Memo(" + (t19.displayName || t19.name) + ")", r2.prototype.isReactComponent = true, r2.__f = true, r2;
}
(Rt.prototype = new x()).isPureReactComponent = true, Rt.prototype.shouldComponentUpdate = function(t19, e2) {
  return Pt(this.props, t19) || Pt(this.state, e2);
};
var Lt = e.__b;
e.__b = function(t19) {
  t19.type && t19.type.__f && t19.ref && (t19.props.ref = t19.ref, t19.ref = null), Lt && Lt(t19);
};
var jt = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function Nt(t19) {
  function e2(e3) {
    var n2 = Ct({}, e3);
    return delete n2.ref, t19(n2, e3.ref || null);
  }
  return e2.$$typeof = jt, e2.render = e2, e2.prototype.isReactComponent = e2.__f = true, e2.displayName = "ForwardRef(" + (t19.displayName || t19.name) + ")", e2;
}
var Vt = function(t19, e2) {
  return null == t19 ? null : k(k(t19).map(e2));
}, Bt = { map: Vt, forEach: Vt, count: function(t19) {
  return t19 ? k(t19).length : 0;
}, only: function(t19) {
  var e2 = k(t19);
  if (1 !== e2.length) throw "Children.only";
  return e2[0];
}, toArray: k }, It = e.__e;
e.__e = function(t19, e2, n2, r2) {
  if (t19.then) {
    for (var i2, o2 = e2; o2 = o2.__; ) if ((i2 = o2.__c) && i2.__c) return null == e2.__e && (e2.__e = n2.__e, e2.__k = n2.__k), i2.__c(t19, e2);
  }
  It(t19, e2, n2, r2);
};
var Ft = e.unmount;
function zt(t19, e2, n2) {
  return t19 && (t19.__c && t19.__c.__H && (t19.__c.__H.__.forEach(function(t20) {
    "function" == typeof t20.__c && t20.__c();
  }), t19.__c.__H = null), null != (t19 = Ct({}, t19)).__c && (t19.__c.__P === n2 && (t19.__c.__P = e2), t19.__c = null), t19.__k = t19.__k && t19.__k.map(function(t20) {
    return zt(t20, e2, n2);
  })), t19;
}
function Ut(t19, e2, n2) {
  return t19 && n2 && (t19.__v = null, t19.__k = t19.__k && t19.__k.map(function(t20) {
    return Ut(t20, e2, n2);
  }), t19.__c && t19.__c.__P === e2 && (t19.__e && n2.appendChild(t19.__e), t19.__c.__e = true, t19.__c.__P = n2)), t19;
}
function Wt() {
  this.__u = 0, this.o = null, this.__b = null;
}
function Ht(t19) {
  var e2 = t19.__.__c;
  return e2 && e2.__a && e2.__a(t19);
}
function $t(t19) {
  var e2, n2, r2;
  function i2(i3) {
    if (e2 || (e2 = t19()).then(function(t20) {
      n2 = t20.default || t20;
    }, function(t20) {
      r2 = t20;
    }), r2) throw r2;
    if (!n2) throw e2;
    return y(n2, i3);
  }
  return i2.displayName = "Lazy", i2.__f = true, i2;
}
function Yt() {
  this.i = null, this.l = null;
}
e.unmount = function(t19) {
  var e2 = t19.__c;
  e2 && e2.__R && e2.__R(), e2 && 32 & t19.__u && (t19.type = null), Ft && Ft(t19);
}, (Wt.prototype = new x()).__c = function(t19, e2) {
  var n2 = e2.__c, r2 = this;
  null == r2.o && (r2.o = []), r2.o.push(n2);
  var i2 = Ht(r2.__v), o2 = false, s2 = function() {
    o2 || (o2 = true, n2.__R = null, i2 ? i2(a2) : a2());
  };
  n2.__R = s2;
  var a2 = function() {
    if (!--r2.__u) {
      if (r2.state.__a) {
        var t20 = r2.state.__a;
        r2.__v.__k[0] = Ut(t20, t20.__c.__P, t20.__c.__O);
      }
      var e3;
      for (r2.setState({ __a: r2.__b = null }); e3 = r2.o.pop(); ) e3.forceUpdate();
    }
  };
  r2.__u++ || 32 & e2.__u || r2.setState({ __a: r2.__b = r2.__v.__k[0] }), t19.then(s2, s2);
}, Wt.prototype.componentWillUnmount = function() {
  this.o = [];
}, Wt.prototype.render = function(t19, e2) {
  if (this.__b) {
    if (this.__v.__k) {
      var n2 = document.createElement("div"), r2 = this.__v.__k[0].__c;
      this.__v.__k[0] = zt(this.__b, n2, r2.__O = r2.__P);
    }
    this.__b = null;
  }
  var i2 = e2.__a && y(w, null, t19.fallback);
  return i2 && (i2.__u &= -33), [y(w, null, e2.__a ? null : t19.children), i2];
};
var Xt = function(t19, e2, n2) {
  if (++n2[1] === n2[0] && t19.l.delete(e2), t19.props.revealOrder && ("t" !== t19.props.revealOrder[0] || !t19.l.size)) for (n2 = t19.i; n2; ) {
    for (; n2.length > 3; ) n2.pop()();
    if (n2[1] < n2[0]) break;
    t19.i = n2 = n2[2];
  }
};
function qt(t19) {
  return this.getChildContext = function() {
    return t19.context;
  }, t19.children;
}
function Gt(t19) {
  var e2 = this, n2 = t19.h;
  e2.componentWillUnmount = function() {
    F(null, e2.v), e2.v = null, e2.h = null;
  }, e2.h && e2.h !== n2 && e2.componentWillUnmount(), e2.v || (e2.h = n2, e2.v = { nodeType: 1, parentNode: n2, childNodes: [], contains: function() {
    return true;
  }, appendChild: function(t20) {
    this.childNodes.push(t20), e2.h.appendChild(t20);
  }, insertBefore: function(t20, n3) {
    this.childNodes.push(t20), e2.h.insertBefore(t20, n3);
  }, removeChild: function(t20) {
    this.childNodes.splice(this.childNodes.indexOf(t20) >>> 1, 1), e2.h.removeChild(t20);
  } }), F(y(qt, { context: e2.context }, t19.__v), e2.v);
}
function Kt(t19, e2) {
  var n2 = y(Gt, { __v: t19, h: e2 });
  return n2.containerInfo = e2, n2;
}
(Yt.prototype = new x()).__a = function(t19) {
  var e2 = this, n2 = Ht(e2.__v), r2 = e2.l.get(t19);
  return r2[0]++, function(i2) {
    var o2 = function() {
      e2.props.revealOrder ? (r2.push(i2), Xt(e2, t19, r2)) : i2();
    };
    n2 ? n2(o2) : o2();
  };
}, Yt.prototype.render = function(t19) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var e2 = k(t19.children);
  t19.revealOrder && "b" === t19.revealOrder[0] && e2.reverse();
  for (var n2 = e2.length; n2--; ) this.l.set(e2[n2], this.i = [1, 0, this.i]);
  return t19.children;
}, Yt.prototype.componentDidUpdate = Yt.prototype.componentDidMount = function() {
  var t19 = this;
  this.l.forEach(function(e2, n2) {
    Xt(t19, n2, e2);
  });
};
var Zt = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, Jt = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Qt = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, te = /[A-Z0-9]/g, ee = "undefined" != typeof document, ne = function(t19) {
  return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(t19);
};
function re(t19, e2, n2) {
  return null == e2.__k && (e2.textContent = ""), F(t19, e2), "function" == typeof n2 && n2(), t19 ? t19.__c : null;
}
function ie(t19, e2, n2) {
  return z(t19, e2), "function" == typeof n2 && n2(), t19 ? t19.__c : null;
}
x.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t19) {
  Object.defineProperty(x.prototype, t19, { configurable: true, get: function() {
    return this["UNSAFE_" + t19];
  }, set: function(e2) {
    Object.defineProperty(this, t19, { configurable: true, writable: true, value: e2 });
  } });
});
var oe = e.event;
function se() {
}
function ae() {
  return this.cancelBubble;
}
function ue() {
  return this.defaultPrevented;
}
e.event = function(t19) {
  return oe && (t19 = oe(t19)), t19.persist = se, t19.isPropagationStopped = ae, t19.isDefaultPrevented = ue, t19.nativeEvent = t19;
};
var le, ce = { enumerable: false, configurable: true, get: function() {
  return this.class;
} }, he = e.vnode;
e.vnode = function(t19) {
  "string" == typeof t19.type && function(t20) {
    var e2 = t20.props, n2 = t20.type, r2 = {}, i2 = -1 === n2.indexOf("-");
    for (var o2 in e2) {
      var s2 = e2[o2];
      if (!("value" === o2 && "defaultValue" in e2 && null == s2 || ee && "children" === o2 && "noscript" === n2 || "class" === o2 || "className" === o2)) {
        var a2 = o2.toLowerCase();
        "defaultValue" === o2 && "value" in e2 && null == e2.value ? o2 = "value" : "download" === o2 && true === s2 ? s2 = "" : "translate" === a2 && "no" === s2 ? s2 = false : "o" === a2[0] && "n" === a2[1] ? "ondoubleclick" === a2 ? o2 = "ondblclick" : "onchange" !== a2 || "input" !== n2 && "textarea" !== n2 || ne(e2.type) ? "onfocus" === a2 ? o2 = "onfocusin" : "onblur" === a2 ? o2 = "onfocusout" : Qt.test(o2) && (o2 = a2) : a2 = o2 = "oninput" : i2 && Jt.test(o2) ? o2 = o2.replace(te, "-$&").toLowerCase() : null === s2 && (s2 = void 0), "oninput" === a2 && r2[o2 = a2] && (o2 = "oninputCapture"), r2[o2] = s2;
      }
    }
    "select" == n2 && r2.multiple && Array.isArray(r2.value) && (r2.value = k(e2.children).forEach(function(t21) {
      t21.props.selected = -1 != r2.value.indexOf(t21.props.value);
    })), "select" == n2 && null != r2.defaultValue && (r2.value = k(e2.children).forEach(function(t21) {
      t21.props.selected = r2.multiple ? -1 != r2.defaultValue.indexOf(t21.props.value) : r2.defaultValue == t21.props.value;
    })), e2.class && !e2.className ? (r2.class = e2.class, Object.defineProperty(r2, "className", ce)) : (e2.className && !e2.class || e2.class && e2.className) && (r2.class = r2.className = e2.className), t20.props = r2;
  }(t19), t19.$$typeof = Zt, he && he(t19);
};
var fe = e.__r;
e.__r = function(t19) {
  fe && fe(t19), le = t19.__c;
};
var de = e.diffed;
e.diffed = function(t19) {
  de && de(t19);
  var e2 = t19.props, n2 = t19.__e;
  null != n2 && "textarea" === t19.type && "value" in e2 && e2.value !== n2.value && (n2.value = null == e2.value ? "" : e2.value), le = null;
};
var pe = { ReactCurrentDispatcher: { current: { readContext: function(t19) {
  return le.__n[t19.__c].props.value;
}, useCallback: dt, useContext: pt, useDebugValue: mt, useDeferredValue: kt, useEffect: ut, useId: vt, useImperativeHandle: ht, useInsertionEffect: At, useLayoutEffect: lt, useMemo: ft, useReducer: at, useRef: ct, useState: st, useSyncExternalStore: St, useTransition: Mt } } };
function me(t19) {
  return y.bind(null, t19);
}
function ve(t19) {
  return !!t19 && t19.$$typeof === Zt;
}
function ge(t19) {
  return ve(t19) && t19.type === w;
}
function ye(t19) {
  return !!t19 && !!t19.displayName && ("string" == typeof t19.displayName || t19.displayName instanceof String) && t19.displayName.startsWith("Memo(");
}
function _e(t19) {
  return ve(t19) ? U.apply(null, arguments) : t19;
}
function be(t19) {
  return !!t19.__k && (F(null, t19), true);
}
function we(t19) {
  return t19 && (t19.base || 1 === t19.nodeType && t19) || null;
}
var xe = function(t19, e2) {
  return t19(e2);
}, Te = function(t19, e2) {
  return t19(e2);
}, Ce = w, Pe = ve, Se = { useState: st, useId: vt, useReducer: at, useEffect: ut, useLayoutEffect: lt, useInsertionEffect: At, useTransition: Mt, useDeferredValue: kt, useSyncExternalStore: St, startTransition: Ot, useRef: ct, useImperativeHandle: ht, useMemo: ft, useCallback: dt, useContext: pt, useDebugValue: mt, version: "18.3.1", Children: Bt, render: re, hydrate: ie, unmountComponentAtNode: be, createPortal: Kt, createElement: y, createContext: W, createFactory: me, cloneElement: _e, createRef: b, Fragment: w, isValidElement: ve, isElement: Pe, isFragment: ge, isMemo: ye, findDOMNode: we, Component: x, PureComponent: Rt, memo: Dt, forwardRef: Nt, flushSync: Te, unstable_batchedUpdates: xe, StrictMode: Ce, Suspense: Wt, SuspenseList: Yt, lazy: $t, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: pe };
const Ee = Object.freeze(Object.defineProperty({ __proto__: null, Children: Bt, Component: x, Fragment: w, PureComponent: Rt, StrictMode: Ce, Suspense: Wt, SuspenseList: Yt, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: pe, cloneElement: _e, createContext: W, createElement: y, createFactory: me, createPortal: Kt, createRef: b, default: Se, findDOMNode: we, flushSync: Te, forwardRef: Nt, hydrate: ie, isElement: Pe, isFragment: ge, isMemo: ye, isValidElement: ve, lazy: $t, memo: Dt, render: re, startTransition: Ot, unmountComponentAtNode: be, unstable_batchedUpdates: xe, useCallback: dt, useContext: pt, useDebugValue: mt, useDeferredValue: kt, useEffect: ut, useErrorBoundary: function(t19) {
  var e2 = ot(Y++, 10), n2 = st();
  return e2.__ = t19, X.componentDidCatch || (X.componentDidCatch = function(t20, r2) {
    e2.__ && e2.__(t20, r2), n2[1](t20);
  }), [n2[0], function() {
    n2[1](void 0);
  }];
}, useId: vt, useImperativeHandle: ht, useInsertionEffect: At, useLayoutEffect: lt, useMemo: ft, useReducer: at, useRef: ct, useState: st, useSyncExternalStore: St, useTransition: Mt, version: "18.3.1" }, Symbol.toStringTag, { value: "Module" })), Oe = (t19) => y("svg", { width: 12, height: 12, viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t19 }, y("path", { d: "M5.99996 3.08333C5.4231 3.08333 4.85919 3.25439 4.37955 3.57488C3.8999 3.89537 3.52607 4.35089 3.30531 4.88384C3.08455 5.41679 3.0268 6.00324 3.13934 6.56901C3.25188 7.13479 3.52966 7.65449 3.93756 8.0624C4.34547 8.4703 4.86517 8.74809 5.43095 8.86063C5.99672 8.97317 6.58317 8.91541 7.11612 8.69465C7.64907 8.47389 8.10459 8.10006 8.42508 7.62041C8.74557 7.14077 8.91663 6.57686 8.91663 6C8.91663 5.22645 8.60933 4.48459 8.06235 3.93761C7.51537 3.39063 6.77351 3.08333 5.99996 3.08333ZM5.99996 7.75C5.65384 7.75 5.3155 7.64737 5.02771 7.45507C4.73992 7.26278 4.51562 6.98947 4.38317 6.6697C4.25072 6.34993 4.21606 5.99806 4.28358 5.65859C4.35111 5.31913 4.51778 5.00731 4.76252 4.76256C5.00726 4.51782 5.31908 4.35115 5.65855 4.28363C5.99802 4.2161 6.34988 4.25076 6.66966 4.38321C6.98943 4.51567 7.26274 4.73997 7.45503 5.02775C7.64732 5.31554 7.74996 5.65388 7.74996 6C7.74996 6.46413 7.56558 6.90925 7.2374 7.23744C6.90921 7.56563 6.46409 7.75 5.99996 7.75ZM8.91663 2.5C8.80125 2.5 8.68847 2.53421 8.59254 2.59831C8.49661 2.66241 8.42185 2.75351 8.3777 2.8601C8.33354 2.96669 8.32199 3.08398 8.3445 3.19714C8.36701 3.31029 8.42257 3.41423 8.50415 3.49581C8.58573 3.57739 8.68967 3.63295 8.80282 3.65546C8.91598 3.67797 9.03327 3.66642 9.13986 3.62226C9.24645 3.57811 9.33755 3.50335 9.40165 3.40742C9.46575 3.31149 9.49996 3.19871 9.49996 3.08333C9.49996 2.92862 9.4385 2.78025 9.32911 2.67086C9.21971 2.56146 9.07133 2.5 8.91663 2.5ZM11.7983 3.80667C11.7886 3.30816 11.6939 2.81497 11.5183 2.34833C11.3554 1.92371 11.1051 1.53808 10.7835 1.21649C10.4619 0.894904 10.0763 0.644544 9.65163 0.481668C9.18499 0.306026 8.6918 0.211332 8.19329 0.201668C7.62746 0.166668 7.44079 0.166668 5.99996 0.166668C4.55913 0.166668 4.37246 0.166668 3.80663 0.201668C3.30812 0.211332 2.81493 0.306026 2.34829 0.481668C1.92366 0.644544 1.53804 0.894904 1.21645 1.21649C0.894862 1.53808 0.644502 1.92371 0.481626 2.34833C0.305984 2.81497 0.21129 3.30816 0.201626 3.80667C0.166626 4.37833 0.166626 4.565 0.166626 6C0.166626 7.435 0.166626 7.62167 0.201626 8.19333C0.21129 8.69184 0.305984 9.18503 0.481626 9.65167C0.644502 10.0763 0.894862 10.4619 1.21645 10.7835C1.53804 11.1051 1.92366 11.3555 2.34829 11.5183C2.81493 11.694 3.30812 11.7887 3.80663 11.7983C4.38996 11.7983 4.55913 11.8333 5.99996 11.8333C7.44079 11.8333 7.62746 11.8333 8.19329 11.7983C8.6918 11.7887 9.18499 11.694 9.65163 11.5183C10.0763 11.3555 10.4619 11.1051 10.7835 10.7835C11.1051 10.4619 11.3554 10.0763 11.5183 9.65167C11.6939 9.18503 11.7886 8.69184 11.7983 8.19333C11.7983 7.61 11.8333 7.435 11.8333 6C11.8333 4.565 11.8333 4.37833 11.7983 3.80667ZM10.6316 8.14083C10.6214 8.51102 10.5525 8.87725 10.4275 9.22583C10.3241 9.50137 10.1607 9.75044 9.94913 9.955C9.74579 10.1667 9.49622 10.3284 9.21996 10.4275C8.87055 10.5576 8.50188 10.6286 8.12913 10.6375C7.58079 10.6375 7.41163 10.6667 5.99413 10.6667C4.57663 10.6667 4.41329 10.6667 3.86496 10.6667C3.4928 10.6571 3.12456 10.5881 2.77413 10.4625C2.49859 10.3591 2.24952 10.1957 2.04496 9.98417C1.8333 9.78083 1.67158 9.53126 1.57246 9.255C1.44285 8.90746 1.37188 8.5408 1.36246 8.17C1.36246 7.58667 1.36246 7.44083 1.36246 6.02917C1.36246 4.6175 1.36246 4.44833 1.36246 3.88833C1.37251 3.51571 1.44345 3.14723 1.57246 2.7975C1.67312 2.5237 1.83469 2.27636 2.04496 2.07417C2.24829 1.86251 2.49786 1.70079 2.77413 1.60167C3.12354 1.47152 3.4922 1.40055 3.86496 1.39167C4.41329 1.33333 4.58246 1.33333 5.99996 1.33333C7.41746 1.33333 7.58663 1.33333 8.13496 1.33333C8.50954 1.34286 8.88002 1.4138 9.23163 1.54333C9.50542 1.64399 9.75276 1.80556 9.95496 2.01583C10.1666 2.21917 10.3283 2.46874 10.4275 2.745C10.5703 3.1 10.6512 3.47684 10.6666 3.85917C10.6666 4.4425 10.6958 4.58833 10.6958 6C10.6958 7.41167 10.6666 7.58083 10.6666 8.14083H10.6316Z", fill: "#919191" })), ke = (t19) => y("svg", { width: 10, height: 14, viewBox: "0 0 10 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t19 }, y("path", { d: "M8.98413 5.50667C8.93062 5.42751 8.85848 5.3627 8.77406 5.31794C8.68963 5.27319 8.59551 5.24986 8.49996 5.25H6.74996V4.08334H8.03329C8.188 4.08334 8.33637 4.02188 8.44577 3.91248C8.55517 3.80309 8.61663 3.65471 8.61663 3.5V1.16667C8.61663 1.01196 8.55517 0.863586 8.44577 0.75419C8.33637 0.644794 8.188 0.583336 8.03329 0.583336H6.16663C5.26931 0.583336 4.40875 0.939793 3.77425 1.57429C3.13975 2.20879 2.78329 3.06935 2.78329 3.96667V5.25H1.49996C1.34525 5.25 1.19688 5.31146 1.08748 5.42086C0.978084 5.53025 0.916626 5.67863 0.916626 5.83334V8.16667C0.916626 8.32138 0.978084 8.46975 1.08748 8.57915C1.19688 8.68855 1.34525 8.75 1.49996 8.75H2.78329V12.8333C2.78329 12.988 2.84475 13.1364 2.95415 13.2458C3.06354 13.3552 3.21192 13.4167 3.36663 13.4167H6.16663C6.32133 13.4167 6.46971 13.3552 6.5791 13.2458C6.6885 13.1364 6.74996 12.988 6.74996 12.8333V8.75H7.56662C7.68345 8.75012 7.79763 8.71515 7.89435 8.64962C7.99108 8.5841 8.0659 8.49104 8.10913 8.3825L9.04246 6.04917C9.07769 5.96084 9.0908 5.86523 9.08063 5.77068C9.07046 5.67613 9.03733 5.58549 8.98413 5.50667ZM7.16996 7.58334H6.16663C6.01192 7.58334 5.86354 7.64479 5.75415 7.75419C5.64475 7.86359 5.58329 8.01196 5.58329 8.16667V12.25H3.94996V8.16667C3.94996 8.01196 3.8885 7.86359 3.7791 7.75419C3.66971 7.64479 3.52134 7.58334 3.36663 7.58334H2.08329V6.41667H3.36663C3.52134 6.41667 3.66971 6.35521 3.7791 6.24582C3.8885 6.13642 3.94996 5.98805 3.94996 5.83334V3.96667C3.9515 3.37925 4.18553 2.81632 4.60091 2.40095C5.01628 1.98558 5.5792 1.75154 6.16663 1.75H7.44996V2.91667H6.98329C6.78579 2.8879 6.58447 2.89997 6.39182 2.95215C6.19917 3.00432 6.01928 3.09549 5.86329 3.22C5.76863 3.31911 5.69502 3.43636 5.64689 3.56469C5.59877 3.69301 5.57714 3.82976 5.58329 3.96667V5.83334C5.58329 5.98805 5.64475 6.13642 5.75415 6.24582C5.86354 6.35521 6.01192 6.41667 6.16663 6.41667H7.63663L7.16996 7.58334Z", fill: "#919191" })), Me = (t19) => y("svg", { width: 14, height: 11, viewBox: "0 0 14 11", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t19 }, y("path", { d: "M13.4116 1.13969C13.4116 1.04402 13.3844 0.950032 13.3326 0.867312C13.2809 0.784592 13.2064 0.71609 13.1168 0.668784C13.0273 0.621477 12.9258 0.597055 12.8228 0.598006C12.7198 0.598956 12.6188 0.625245 12.5303 0.674194C12.1889 0.862903 11.8213 1.00742 11.4377 1.10374C10.89 0.667278 10.1913 0.428442 9.46956 0.430883C8.67773 0.431729 7.91724 0.718287 7.34869 1.23005C6.78013 1.74181 6.448 2.43871 6.42244 3.1736C4.86143 2.94245 3.44665 2.18589 2.44787 1.04818C2.38769 0.980379 2.31084 0.927014 2.22379 0.892581C2.13674 0.858149 2.04205 0.843659 1.94771 0.850333C1.85342 0.857543 1.76244 0.885971 1.68264 0.93316C1.60284 0.980349 1.53662 1.04488 1.4897 1.12117C1.24909 1.51107 1.1109 1.94816 1.08636 2.39696C1.06181 2.84576 1.15159 3.2936 1.34842 3.70413L1.34729 3.70519C1.25882 3.75578 1.18581 3.82661 1.13525 3.91088C1.08468 3.99516 1.05824 4.09008 1.05847 4.18656C1.0574 4.26614 1.06254 4.3457 1.07385 4.42459C1.13343 5.10615 1.45872 5.74412 1.98873 6.21886C1.95277 6.28247 1.93083 6.35209 1.92418 6.42366C1.91752 6.49522 1.9263 6.56731 1.94999 6.63569C2.18105 7.30419 2.67244 7.86856 3.328 8.21837C2.66197 8.45752 1.94283 8.54091 1.23392 8.46117C1.10271 8.44588 0.969805 8.47246 0.856999 8.53653C0.744193 8.60061 0.658187 8.69838 0.613088 8.81381C0.56799 8.92924 0.566477 9.05547 0.608798 9.1718C0.65112 9.28814 0.734762 9.38766 0.846005 9.45405C2.06523 10.1832 3.48482 10.5709 4.93504 10.5707C6.57961 10.5879 8.18418 10.0999 9.49918 9.18267C10.8142 8.26543 11.7658 6.97036 12.2062 5.49892C12.4121 4.85793 12.5173 4.19267 12.5184 3.52376C12.5184 3.48832 12.5184 3.45182 12.5178 3.41533C12.8224 3.11033 13.0583 2.75195 13.2118 2.36119C13.3652 1.97043 13.4332 1.55515 13.4116 1.13969ZM11.4827 2.87948C11.3864 2.98529 11.3376 3.12149 11.3466 3.25981C11.3523 3.34918 11.3517 3.4391 11.3517 3.52376C11.3505 4.08901 11.2613 4.65113 11.0868 5.19267C10.7272 6.44467 9.92547 7.5484 8.81009 8.32707C7.69471 9.10575 6.33018 9.51433 4.93504 9.48739C4.43388 9.48753 3.93446 9.43285 3.44708 9.32446C4.06857 9.13848 4.64968 8.85176 5.16347 8.47758C5.2581 8.40839 5.32736 8.31371 5.36174 8.20652C5.39612 8.09933 5.39393 7.98489 5.35549 7.8789C5.31704 7.77291 5.24422 7.68056 5.14701 7.61453C5.0498 7.5485 4.93296 7.51202 4.81254 7.51009C4.32769 7.50309 3.8647 7.3216 3.52111 7.00387C3.60827 6.98853 3.69486 6.96948 3.78088 6.94674C3.90689 6.91343 4.01716 6.84172 4.09394 6.74315C4.17071 6.64457 4.20953 6.52487 4.20413 6.40332C4.19874 6.28177 4.14945 6.16544 4.0642 6.07307C3.97895 5.9807 3.8627 5.91765 3.73417 5.89408C3.45273 5.84247 3.1879 5.73129 2.96027 5.56918C2.73264 5.40707 2.54833 5.1984 2.42167 4.95939C2.52709 4.97275 2.63319 4.98105 2.73954 4.98425C2.86588 4.98602 2.98955 4.95044 3.09268 4.88264C3.1958 4.81484 3.27303 4.71834 3.31319 4.60709C3.35168 4.49484 3.3497 4.374 3.30755 4.26288C3.2654 4.15177 3.18538 4.05645 3.07963 3.99137C2.82305 3.83265 2.61287 3.61731 2.46792 3.36464C2.32297 3.11197 2.24777 2.82986 2.24906 2.54358C2.24906 2.50762 2.2502 2.47164 2.25248 2.4362C3.55988 3.56842 5.25567 4.23586 7.04106 4.32093C7.13119 4.32422 7.22094 4.30846 7.30354 4.27483C7.38614 4.2412 7.45943 4.19058 7.51787 4.12679C7.57573 4.06239 7.61669 3.9864 7.63755 3.9048C7.6584 3.82319 7.65857 3.73821 7.63804 3.65654C7.60468 3.52728 7.58767 3.39485 7.58734 3.26193C7.58787 2.79855 7.78634 2.35429 8.13921 2.02664C8.49207 1.69898 8.9705 1.51469 9.46952 1.5142C9.72627 1.51356 9.98036 1.56235 10.2158 1.6575C10.4512 1.75264 10.6628 1.89207 10.8373 2.06698C10.9046 2.13419 10.9892 2.1843 11.0833 2.21254C11.1773 2.24078 11.2775 2.24622 11.3745 2.22833C11.6141 2.18503 11.8503 2.12671 12.0814 2.05378C11.9237 2.3533 11.7223 2.63116 11.4827 2.87948Z", fill: "#919191" })), Ae = (t19) => y("svg", { width: 14, height: 12, viewBox: "0 0 14 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t19 }, y("path", { d: "M12.9877 0.416174C12.8216 0.278002 12.6211 0.187446 12.4077 0.154144C12.1942 0.120841 11.9757 0.146037 11.7754 0.227052L1.32155 4.44767C1.09799 4.53965 0.907688 4.69745 0.775904 4.90012C0.644119 5.10278 0.577085 5.34073 0.583698 5.58239C0.590312 5.82404 0.67026 6.05797 0.812932 6.25313C0.955605 6.44828 1.15425 6.59543 1.38251 6.67505L3.49709 7.41048L4.67572 11.3081C4.69174 11.3602 4.71498 11.4097 4.74477 11.4553C4.7493 11.4623 4.75567 11.4675 4.76048 11.4743C4.7949 11.5224 4.83649 11.5648 4.88381 11.6002C4.89727 11.6105 4.91016 11.6201 4.92454 11.6292C4.97992 11.6659 5.04125 11.6928 5.1058 11.7086L5.11271 11.7092L5.11662 11.7108C5.15543 11.7187 5.19494 11.7227 5.23454 11.7228C5.23835 11.7228 5.24173 11.721 5.24551 11.7209C5.30528 11.7199 5.36453 11.7096 5.42114 11.6904C5.43432 11.6859 5.4456 11.6784 5.45838 11.673C5.5006 11.6555 5.54061 11.6331 5.57755 11.6062C5.60714 11.5812 5.63674 11.5563 5.66635 11.5314L7.24261 9.79108L9.5936 11.6123C9.80058 11.7734 10.0553 11.861 10.3176 11.8612C10.5925 11.8609 10.8589 11.766 11.0721 11.5926C11.2854 11.4192 11.4325 11.1778 11.4889 10.9087L13.3921 1.56575C13.4352 1.35547 13.4204 1.13742 13.3491 0.934931C13.2779 0.73244 13.153 0.553126 12.9877 0.416174ZM5.46585 7.59619C5.38496 7.67675 5.32967 7.77941 5.30691 7.89128L5.12636 8.76861L4.66899 7.25598L7.04039 6.0211L5.46585 7.59619ZM10.3085 10.69L7.5303 8.53782C7.41406 8.448 7.26826 8.40528 7.12193 8.41816C6.9756 8.43104 6.8395 8.49858 6.74074 8.60732L6.23592 9.16452L6.41433 8.29742L10.5461 4.16567C10.6447 4.06718 10.7048 3.93663 10.7155 3.79766C10.7261 3.65869 10.6867 3.5205 10.6042 3.40811C10.5218 3.29572 10.4018 3.21657 10.2661 3.18499C10.1303 3.15342 9.98776 3.17151 9.8642 3.23598L3.93445 6.32335L1.76191 5.52832L12.2494 1.33275L10.3085 10.69Z", fill: "#919191" })), Re = (t19) => y("svg", { width: 12, height: 10, viewBox: "0 0 12 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...t19 }, y("path", { d: "M7.68579 4.11333L5.93579 3.09833C5.78032 3.00647 5.60304 2.95802 5.42246 2.95802C5.24188 2.95802 5.0646 3.00647 4.90913 3.09833C4.75246 3.18665 4.62258 3.31568 4.53325 3.47176C4.44391 3.62785 4.39843 3.80518 4.40163 3.985V6.015C4.39843 6.19481 4.44391 6.37215 4.53325 6.52824C4.62258 6.68432 4.75246 6.81335 4.90913 6.90167C5.0646 6.99352 5.24188 7.04198 5.42246 7.04198C5.60304 7.04198 5.78032 6.99352 5.93579 6.90167L7.68579 5.88667C7.8354 5.79484 7.95897 5.66619 8.04468 5.513C8.1304 5.35981 8.17541 5.18721 8.17541 5.01167C8.17541 4.83613 8.1304 4.66352 8.04468 4.51033C7.95897 4.35714 7.8354 4.22849 7.68579 4.13667V4.11333ZM5.55663 5.77V4.23L6.88663 5L5.55663 5.77ZM10.0833 0.333332H1.91663C1.4525 0.333332 1.00738 0.517707 0.679189 0.845895C0.351001 1.17408 0.166626 1.6192 0.166626 2.08333V7.91667C0.166626 8.38079 0.351001 8.82591 0.679189 9.1541C1.00738 9.48229 1.4525 9.66667 1.91663 9.66667H10.0833C10.5474 9.66667 10.9925 9.48229 11.3207 9.1541C11.6489 8.82591 11.8333 8.38079 11.8333 7.91667V2.08333C11.8333 1.6192 11.6489 1.17408 11.3207 0.845895C10.9925 0.517707 10.5474 0.333332 10.0833 0.333332ZM10.6666 7.91667C10.6666 8.07138 10.6052 8.21975 10.4958 8.32915C10.3864 8.43854 10.238 8.5 10.0833 8.5H1.91663C1.76192 8.5 1.61354 8.43854 1.50415 8.32915C1.39475 8.21975 1.33329 8.07138 1.33329 7.91667V2.08333C1.33329 1.92862 1.39475 1.78025 1.50415 1.67085C1.61354 1.56146 1.76192 1.5 1.91663 1.5H10.0833C10.238 1.5 10.3864 1.56146 10.4958 1.67085C10.6052 1.78025 10.6666 1.92862 10.6666 2.08333V7.91667Z", fill: "#919191" }));
function De() {
  return $("ul", { className: "socials column center-x gap-40", children: [{ name: "facebook", icon: $(ke, {}) }, { name: "instagram", icon: $(Oe, {}) }, { name: "twitter", icon: $(Me, {}) }, { name: "youtube", icon: $(Re, {}) }, { name: "telegram", icon: $(Ae, {}) }].map((t19, e2) => $("li", { children: t19.icon }, e2)) });
}
function Le(t19) {
  if (void 0 === t19) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t19;
}
function je(t19, e2) {
  t19.prototype = Object.create(e2.prototype), t19.prototype.constructor = t19, t19.__proto__ = e2;
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
var Ne, Ve, Be, Ie, Fe, ze, Ue, We, He, $e, Ye, Xe = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } }, qe = { duration: 0.5, overwrite: false, delay: 0 }, Ge = 1e8, Ke = 1e-8, Ze = 2 * Math.PI, Je = Ze / 4, Qe = 0, tn = Math.sqrt, en = Math.cos, nn = Math.sin, rn = function(t19) {
  return "string" == typeof t19;
}, on = function(t19) {
  return "function" == typeof t19;
}, sn = function(t19) {
  return "number" == typeof t19;
}, an = function(t19) {
  return void 0 === t19;
}, un = function(t19) {
  return "object" == typeof t19;
}, ln = function(t19) {
  return false !== t19;
}, cn = function() {
  return "undefined" != typeof window;
}, hn = function(t19) {
  return on(t19) || rn(t19);
}, fn = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {
}, dn = Array.isArray, pn = /(?:-?\.?\d|\.)+/gi, mn = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, vn = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, gn = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, yn = /[+-]=-?[.\d]+/, _n = /[^,'"\[\]\s]+/gi, bn = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, wn = {}, xn = {}, Tn = function(t19) {
  return (xn = Jn(t19, wn)) && Qi;
}, Cn = function(t19, e2) {
  return console.warn("Invalid property", t19, "set to", e2, "Missing plugin? gsap.registerPlugin()");
}, Pn = function(t19, e2) {
  return !e2 && console.warn(t19);
}, Sn = function(t19, e2) {
  return t19 && (wn[t19] = e2) && xn && (xn[t19] = e2) || wn;
}, En = function() {
  return 0;
}, On = { suppressEvents: true, isStart: true, kill: false }, kn = { suppressEvents: true, kill: false }, Mn = { suppressEvents: true }, An = {}, Rn = [], Dn = {}, Ln = {}, jn = {}, Nn = 30, Vn = [], Bn = "", In = function(t19) {
  var e2, n2, r2 = t19[0];
  if (un(r2) || on(r2) || (t19 = [t19]), !(e2 = (r2._gsap || {}).harness)) {
    for (n2 = Vn.length; n2-- && !Vn[n2].targetTest(r2); ) ;
    e2 = Vn[n2];
  }
  for (n2 = t19.length; n2--; ) t19[n2] && (t19[n2]._gsap || (t19[n2]._gsap = new di(t19[n2], e2))) || t19.splice(n2, 1);
  return t19;
}, Fn = function(t19) {
  return t19._gsap || In(Mr(t19))[0]._gsap;
}, zn = function(t19, e2, n2) {
  return (n2 = t19[e2]) && on(n2) ? t19[e2]() : an(n2) && t19.getAttribute && t19.getAttribute(e2) || n2;
}, Un = function(t19, e2) {
  return (t19 = t19.split(",")).forEach(e2) || t19;
}, Wn = function(t19) {
  return Math.round(1e5 * t19) / 1e5 || 0;
}, Hn = function(t19) {
  return Math.round(1e7 * t19) / 1e7 || 0;
}, $n = function(t19, e2) {
  var n2 = e2.charAt(0), r2 = parseFloat(e2.substr(2));
  return t19 = parseFloat(t19), "+" === n2 ? t19 + r2 : "-" === n2 ? t19 - r2 : "*" === n2 ? t19 * r2 : t19 / r2;
}, Yn = function(t19, e2) {
  for (var n2 = e2.length, r2 = 0; t19.indexOf(e2[r2]) < 0 && ++r2 < n2; ) ;
  return r2 < n2;
}, Xn = function() {
  var t19, e2, n2 = Rn.length, r2 = Rn.slice(0);
  for (Dn = {}, Rn.length = 0, t19 = 0; t19 < n2; t19++) (e2 = r2[t19]) && e2._lazy && (e2.render(e2._lazy[0], e2._lazy[1], true)._lazy = 0);
}, qn = function(t19, e2, n2, r2) {
  Rn.length && !Ve && Xn(), t19.render(e2, n2, Ve && e2 < 0 && (t19._initted || t19._startAt)), Rn.length && !Ve && Xn();
}, Gn = function(t19) {
  var e2 = parseFloat(t19);
  return (e2 || 0 === e2) && (t19 + "").match(_n).length < 2 ? e2 : rn(t19) ? t19.trim() : t19;
}, Kn = function(t19) {
  return t19;
}, Zn = function(t19, e2) {
  for (var n2 in e2) n2 in t19 || (t19[n2] = e2[n2]);
  return t19;
}, Jn = function(t19, e2) {
  for (var n2 in e2) t19[n2] = e2[n2];
  return t19;
}, Qn = function t2(e2, n2) {
  for (var r2 in n2) "__proto__" !== r2 && "constructor" !== r2 && "prototype" !== r2 && (e2[r2] = un(n2[r2]) ? t2(e2[r2] || (e2[r2] = {}), n2[r2]) : n2[r2]);
  return e2;
}, tr = function(t19, e2) {
  var n2, r2 = {};
  for (n2 in t19) n2 in e2 || (r2[n2] = t19[n2]);
  return r2;
}, er = function(t19) {
  var e2, n2 = t19.parent || Ie, r2 = t19.keyframes ? (e2 = dn(t19.keyframes), function(t20, n3) {
    for (var r3 in n3) r3 in t20 || "duration" === r3 && e2 || "ease" === r3 || (t20[r3] = n3[r3]);
  }) : Zn;
  if (ln(t19.inherit)) for (; n2; ) r2(t19, n2.vars.defaults), n2 = n2.parent || n2._dp;
  return t19;
}, nr = function(t19, e2, n2, r2, i2) {
  var o2, s2 = t19[r2];
  if (i2) for (o2 = e2[i2]; s2 && s2[i2] > o2; ) s2 = s2._prev;
  return s2 ? (e2._next = s2._next, s2._next = e2) : (e2._next = t19[n2], t19[n2] = e2), e2._next ? e2._next._prev = e2 : t19[r2] = e2, e2._prev = s2, e2.parent = e2._dp = t19, e2;
}, rr = function(t19, e2, n2, r2) {
  void 0 === n2 && (n2 = "_first"), void 0 === r2 && (r2 = "_last");
  var i2 = e2._prev, o2 = e2._next;
  i2 ? i2._next = o2 : t19[n2] === e2 && (t19[n2] = o2), o2 ? o2._prev = i2 : t19[r2] === e2 && (t19[r2] = i2), e2._next = e2._prev = e2.parent = null;
}, ir = function(t19, e2) {
  t19.parent && (!e2 || t19.parent.autoRemoveChildren) && t19.parent.remove && t19.parent.remove(t19), t19._act = 0;
}, or = function(t19, e2) {
  if (t19 && (!e2 || e2._end > t19._dur || e2._start < 0)) for (var n2 = t19; n2; ) n2._dirty = 1, n2 = n2.parent;
  return t19;
}, sr = function(t19, e2, n2, r2) {
  return t19._startAt && (Ve ? t19._startAt.revert(kn) : t19.vars.immediateRender && !t19.vars.autoRevert || t19._startAt.render(e2, true, r2));
}, ar = function t3(e2) {
  return !e2 || e2._ts && t3(e2.parent);
}, ur = function(t19) {
  return t19._repeat ? lr(t19._tTime, t19 = t19.duration() + t19._rDelay) * t19 : 0;
}, lr = function(t19, e2) {
  var n2 = Math.floor(t19 = Hn(t19 / e2));
  return t19 && n2 === t19 ? n2 - 1 : n2;
}, cr = function(t19, e2) {
  return (t19 - e2._start) * e2._ts + (e2._ts >= 0 ? 0 : e2._dirty ? e2.totalDuration() : e2._tDur);
}, hr = function(t19) {
  return t19._end = Hn(t19._start + (t19._tDur / Math.abs(t19._ts || t19._rts || Ke) || 0));
}, fr = function(t19, e2) {
  var n2 = t19._dp;
  return n2 && n2.smoothChildTiming && t19._ts && (t19._start = Hn(n2._time - (t19._ts > 0 ? e2 / t19._ts : ((t19._dirty ? t19.totalDuration() : t19._tDur) - e2) / -t19._ts)), hr(t19), n2._dirty || or(n2, t19)), t19;
}, dr = function(t19, e2) {
  var n2;
  if ((e2._time || !e2._dur && e2._initted || e2._start < t19._time && (e2._dur || !e2.add)) && (n2 = cr(t19.rawTime(), e2), (!e2._dur || Pr(0, e2.totalDuration(), n2) - e2._tTime > Ke) && e2.render(n2, true)), or(t19, e2)._dp && t19._initted && t19._time >= t19._dur && t19._ts) {
    if (t19._dur < t19.duration()) for (n2 = t19; n2._dp; ) n2.rawTime() >= 0 && n2.totalTime(n2._tTime), n2 = n2._dp;
    t19._zTime = -1e-8;
  }
}, pr = function(t19, e2, n2, r2) {
  return e2.parent && ir(e2), e2._start = Hn((sn(n2) ? n2 : n2 || t19 !== Ie ? xr(t19, n2, e2) : t19._time) + e2._delay), e2._end = Hn(e2._start + (e2.totalDuration() / Math.abs(e2.timeScale()) || 0)), nr(t19, e2, "_first", "_last", t19._sort ? "_start" : 0), yr(e2) || (t19._recent = e2), r2 || dr(t19, e2), t19._ts < 0 && fr(t19, t19._tTime), t19;
}, mr = function(t19, e2) {
  return (wn.ScrollTrigger || Cn("scrollTrigger", e2)) && wn.ScrollTrigger.create(e2, t19);
}, vr = function(t19, e2, n2, r2, i2) {
  return wi(t19, e2, i2), t19._initted ? !n2 && t19._pt && !Ve && (t19._dur && false !== t19.vars.lazy || !t19._dur && t19.vars.lazy) && He !== ti.frame ? (Rn.push(t19), t19._lazy = [i2, r2], 1) : void 0 : 1;
}, gr = function t4(e2) {
  var n2 = e2.parent;
  return n2 && n2._ts && n2._initted && !n2._lock && (n2.rawTime() < 0 || t4(n2));
}, yr = function(t19) {
  var e2 = t19.data;
  return "isFromStart" === e2 || "isStart" === e2;
}, _r = function(t19, e2, n2, r2) {
  var i2 = t19._repeat, o2 = Hn(e2) || 0, s2 = t19._tTime / t19._tDur;
  return s2 && !r2 && (t19._time *= o2 / t19._dur), t19._dur = o2, t19._tDur = i2 ? i2 < 0 ? 1e10 : Hn(o2 * (i2 + 1) + t19._rDelay * i2) : o2, s2 > 0 && !r2 && fr(t19, t19._tTime = t19._tDur * s2), t19.parent && hr(t19), n2 || or(t19.parent, t19), t19;
}, br = function(t19) {
  return t19 instanceof mi ? or(t19) : _r(t19, t19._dur);
}, wr = { _start: 0, endTime: En, totalDuration: En }, xr = function t5(e2, n2, r2) {
  var i2, o2, s2, a2 = e2.labels, u2 = e2._recent || wr, l2 = e2.duration() >= Ge ? u2.endTime(false) : e2._dur;
  return rn(n2) && (isNaN(n2) || n2 in a2) ? (o2 = n2.charAt(0), s2 = "%" === n2.substr(-1), i2 = n2.indexOf("="), "<" === o2 || ">" === o2 ? (i2 >= 0 && (n2 = n2.replace(/=/, "")), ("<" === o2 ? u2._start : u2.endTime(u2._repeat >= 0)) + (parseFloat(n2.substr(1)) || 0) * (s2 ? (i2 < 0 ? u2 : r2).totalDuration() / 100 : 1)) : i2 < 0 ? (n2 in a2 || (a2[n2] = l2), a2[n2]) : (o2 = parseFloat(n2.charAt(i2 - 1) + n2.substr(i2 + 1)), s2 && r2 && (o2 = o2 / 100 * (dn(r2) ? r2[0] : r2).totalDuration()), i2 > 1 ? t5(e2, n2.substr(0, i2 - 1), r2) + o2 : l2 + o2)) : null == n2 ? l2 : +n2;
}, Tr = function(t19, e2, n2) {
  var r2, i2, o2 = sn(e2[1]), s2 = (o2 ? 2 : 1) + (t19 < 2 ? 0 : 1), a2 = e2[s2];
  if (o2 && (a2.duration = e2[1]), a2.parent = n2, t19) {
    for (r2 = a2, i2 = n2; i2 && !("immediateRender" in r2); ) r2 = i2.vars.defaults || {}, i2 = ln(i2.vars.inherit) && i2.parent;
    a2.immediateRender = ln(r2.immediateRender), t19 < 2 ? a2.runBackwards = 1 : a2.startAt = e2[s2 - 1];
  }
  return new Si(e2[0], a2, e2[s2 + 1]);
}, Cr = function(t19, e2) {
  return t19 || 0 === t19 ? e2(t19) : e2;
}, Pr = function(t19, e2, n2) {
  return n2 < t19 ? t19 : n2 > e2 ? e2 : n2;
}, Sr = function(t19, e2) {
  return rn(t19) && (e2 = bn.exec(t19)) ? e2[1] : "";
}, Er = [].slice, Or = function(t19, e2) {
  return t19 && un(t19) && "length" in t19 && (!e2 && !t19.length || t19.length - 1 in t19 && un(t19[0])) && !t19.nodeType && t19 !== Fe;
}, kr = function(t19, e2, n2) {
  return void 0 === n2 && (n2 = []), t19.forEach(function(t20) {
    var r2;
    return rn(t20) && !e2 || Or(t20, 1) ? (r2 = n2).push.apply(r2, Mr(t20)) : n2.push(t20);
  }) || n2;
}, Mr = function(t19, e2, n2) {
  return Be && !e2 && Be.selector ? Be.selector(t19) : !rn(t19) || n2 || !ze && ei() ? dn(t19) ? kr(t19, n2) : Or(t19) ? Er.call(t19, 0) : t19 ? [t19] : [] : Er.call((e2 || Ue).querySelectorAll(t19), 0);
}, Ar = function(t19) {
  return t19 = Mr(t19)[0] || Pn("Invalid scope") || {}, function(e2) {
    var n2 = t19.current || t19.nativeElement || t19;
    return Mr(e2, n2.querySelectorAll ? n2 : n2 === t19 ? Pn("Invalid scope") || Ue.createElement("div") : t19);
  };
}, Rr = function(t19) {
  return t19.sort(function() {
    return 0.5 - Math.random();
  });
}, Dr = function(t19) {
  if (on(t19)) return t19;
  var e2 = un(t19) ? t19 : { each: t19 }, n2 = ui(e2.ease), r2 = e2.from || 0, i2 = parseFloat(e2.base) || 0, o2 = {}, s2 = r2 > 0 && r2 < 1, a2 = isNaN(r2) || s2, u2 = e2.axis, l2 = r2, c2 = r2;
  return rn(r2) ? l2 = c2 = { center: 0.5, edges: 0.5, end: 1 }[r2] || 0 : !s2 && a2 && (l2 = r2[0], c2 = r2[1]), function(t20, s3, h2) {
    var f2, d2, p2, m2, v2, g2, y2, _2, b2, w2 = (h2 || e2).length, x2 = o2[w2];
    if (!x2) {
      if (!(b2 = "auto" === e2.grid ? 0 : (e2.grid || [1, Ge])[1])) {
        for (y2 = -1e8; y2 < (y2 = h2[b2++].getBoundingClientRect().left) && b2 < w2; ) ;
        b2 < w2 && b2--;
      }
      for (x2 = o2[w2] = [], f2 = a2 ? Math.min(b2, w2) * l2 - 0.5 : r2 % b2, d2 = b2 === Ge ? 0 : a2 ? w2 * c2 / b2 - 0.5 : r2 / b2 | 0, y2 = 0, _2 = Ge, g2 = 0; g2 < w2; g2++) p2 = g2 % b2 - f2, m2 = d2 - (g2 / b2 | 0), x2[g2] = v2 = u2 ? Math.abs("y" === u2 ? m2 : p2) : tn(p2 * p2 + m2 * m2), v2 > y2 && (y2 = v2), v2 < _2 && (_2 = v2);
      "random" === r2 && Rr(x2), x2.max = y2 - _2, x2.min = _2, x2.v = w2 = (parseFloat(e2.amount) || parseFloat(e2.each) * (b2 > w2 ? w2 - 1 : u2 ? "y" === u2 ? w2 / b2 : b2 : Math.max(b2, w2 / b2)) || 0) * ("edges" === r2 ? -1 : 1), x2.b = w2 < 0 ? i2 - w2 : i2, x2.u = Sr(e2.amount || e2.each) || 0, n2 = n2 && w2 < 0 ? si(n2) : n2;
    }
    return w2 = (x2[t20] - x2.min) / x2.max || 0, Hn(x2.b + (n2 ? n2(w2) : w2) * x2.v) + x2.u;
  };
}, Lr = function(t19) {
  var e2 = Math.pow(10, ((t19 + "").split(".")[1] || "").length);
  return function(n2) {
    var r2 = Hn(Math.round(parseFloat(n2) / t19) * t19 * e2);
    return (r2 - r2 % 1) / e2 + (sn(n2) ? 0 : Sr(n2));
  };
}, jr = function(t19, e2) {
  var n2, r2, i2 = dn(t19);
  return !i2 && un(t19) && (n2 = i2 = t19.radius || Ge, t19.values ? (t19 = Mr(t19.values), (r2 = !sn(t19[0])) && (n2 *= n2)) : t19 = Lr(t19.increment)), Cr(e2, i2 ? on(t19) ? function(e3) {
    return r2 = t19(e3), Math.abs(r2 - e3) <= n2 ? r2 : e3;
  } : function(e3) {
    for (var i3, o2, s2 = parseFloat(r2 ? e3.x : e3), a2 = parseFloat(r2 ? e3.y : 0), u2 = Ge, l2 = 0, c2 = t19.length; c2--; ) (i3 = r2 ? (i3 = t19[c2].x - s2) * i3 + (o2 = t19[c2].y - a2) * o2 : Math.abs(t19[c2] - s2)) < u2 && (u2 = i3, l2 = c2);
    return l2 = !n2 || u2 <= n2 ? t19[l2] : e3, r2 || l2 === e3 || sn(e3) ? l2 : l2 + Sr(e3);
  } : Lr(t19));
}, Nr = function(t19, e2, n2, r2) {
  return Cr(dn(t19) ? !e2 : true === n2 ? !!(n2 = 0) : !r2, function() {
    return dn(t19) ? t19[~~(Math.random() * t19.length)] : (n2 = n2 || 1e-5) && (r2 = n2 < 1 ? Math.pow(10, (n2 + "").length - 2) : 1) && Math.floor(Math.round((t19 - n2 / 2 + Math.random() * (e2 - t19 + 0.99 * n2)) / n2) * n2 * r2) / r2;
  });
}, Vr = function(t19, e2, n2) {
  return Cr(n2, function(n3) {
    return t19[~~e2(n3)];
  });
}, Br = function(t19) {
  for (var e2, n2, r2, i2, o2 = 0, s2 = ""; ~(e2 = t19.indexOf("random(", o2)); ) r2 = t19.indexOf(")", e2), i2 = "[" === t19.charAt(e2 + 7), n2 = t19.substr(e2 + 7, r2 - e2 - 7).match(i2 ? _n : pn), s2 += t19.substr(o2, e2 - o2) + Nr(i2 ? n2 : +n2[0], i2 ? 0 : +n2[1], +n2[2] || 1e-5), o2 = r2 + 1;
  return s2 + t19.substr(o2, t19.length - o2);
}, Ir = function(t19, e2, n2, r2, i2) {
  var o2 = e2 - t19, s2 = r2 - n2;
  return Cr(i2, function(e3) {
    return n2 + ((e3 - t19) / o2 * s2 || 0);
  });
}, Fr = function(t19, e2, n2) {
  var r2, i2, o2, s2 = t19.labels, a2 = Ge;
  for (r2 in s2) (i2 = s2[r2] - e2) < 0 == !!n2 && i2 && a2 > (i2 = Math.abs(i2)) && (o2 = r2, a2 = i2);
  return o2;
}, zr = function(t19, e2, n2) {
  var r2, i2, o2, s2 = t19.vars, a2 = s2[e2], u2 = Be, l2 = t19._ctx;
  if (a2) return r2 = s2[e2 + "Params"], i2 = s2.callbackScope || t19, n2 && Rn.length && Xn(), l2 && (Be = l2), o2 = r2 ? a2.apply(i2, r2) : a2.call(i2), Be = u2, o2;
}, Ur = function(t19) {
  return ir(t19), t19.scrollTrigger && t19.scrollTrigger.kill(!!Ve), t19.progress() < 1 && zr(t19, "onInterrupt"), t19;
}, Wr = [], Hr = function(t19) {
  if (t19) if (t19 = !t19.name && t19.default || t19, cn() || t19.headless) {
    var e2 = t19.name, n2 = on(t19), r2 = e2 && !n2 && t19.init ? function() {
      this._props = [];
    } : t19, i2 = { init: En, render: ji, add: _i, kill: Vi, modifier: Ni, rawVars: 0 }, o2 = { targetTest: 0, get: 0, getSetter: Ai, aliases: {}, register: 0 };
    if (ei(), t19 !== r2) {
      if (Ln[e2]) return;
      Zn(r2, Zn(tr(t19, i2), o2)), Jn(r2.prototype, Jn(i2, tr(t19, o2))), Ln[r2.prop = e2] = r2, t19.targetTest && (Vn.push(r2), An[e2] = 1), e2 = ("css" === e2 ? "CSS" : e2.charAt(0).toUpperCase() + e2.substr(1)) + "Plugin";
    }
    Sn(e2, r2), t19.register && t19.register(Qi, r2, Fi);
  } else Wr.push(t19);
}, $r = 255, Yr = { aqua: [0, $r, $r], lime: [0, $r, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, $r], navy: [0, 0, 128], white: [$r, $r, $r], olive: [128, 128, 0], yellow: [$r, $r, 0], orange: [$r, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [$r, 0, 0], pink: [$r, 192, 203], cyan: [0, $r, $r], transparent: [$r, $r, $r, 0] }, Xr = function(t19, e2, n2) {
  return (6 * (t19 += t19 < 0 ? 1 : t19 > 1 ? -1 : 0) < 1 ? e2 + (n2 - e2) * t19 * 6 : t19 < 0.5 ? n2 : 3 * t19 < 2 ? e2 + (n2 - e2) * (2 / 3 - t19) * 6 : e2) * $r + 0.5 | 0;
}, qr = function(t19, e2, n2) {
  var r2, i2, o2, s2, a2, u2, l2, c2, h2, f2, d2 = t19 ? sn(t19) ? [t19 >> 16, t19 >> 8 & $r, t19 & $r] : 0 : Yr.black;
  if (!d2) {
    if ("," === t19.substr(-1) && (t19 = t19.substr(0, t19.length - 1)), Yr[t19]) d2 = Yr[t19];
    else if ("#" === t19.charAt(0)) {
      if (t19.length < 6 && (r2 = t19.charAt(1), i2 = t19.charAt(2), o2 = t19.charAt(3), t19 = "#" + r2 + r2 + i2 + i2 + o2 + o2 + (5 === t19.length ? t19.charAt(4) + t19.charAt(4) : "")), 9 === t19.length) return [(d2 = parseInt(t19.substr(1, 6), 16)) >> 16, d2 >> 8 & $r, d2 & $r, parseInt(t19.substr(7), 16) / 255];
      d2 = [(t19 = parseInt(t19.substr(1), 16)) >> 16, t19 >> 8 & $r, t19 & $r];
    } else if ("hsl" === t19.substr(0, 3)) if (d2 = f2 = t19.match(pn), e2) {
      if (~t19.indexOf("=")) return d2 = t19.match(mn), n2 && d2.length < 4 && (d2[3] = 1), d2;
    } else s2 = +d2[0] % 360 / 360, a2 = +d2[1] / 100, r2 = 2 * (u2 = +d2[2] / 100) - (i2 = u2 <= 0.5 ? u2 * (a2 + 1) : u2 + a2 - u2 * a2), d2.length > 3 && (d2[3] *= 1), d2[0] = Xr(s2 + 1 / 3, r2, i2), d2[1] = Xr(s2, r2, i2), d2[2] = Xr(s2 - 1 / 3, r2, i2);
    else d2 = t19.match(pn) || Yr.transparent;
    d2 = d2.map(Number);
  }
  return e2 && !f2 && (r2 = d2[0] / $r, i2 = d2[1] / $r, o2 = d2[2] / $r, u2 = ((l2 = Math.max(r2, i2, o2)) + (c2 = Math.min(r2, i2, o2))) / 2, l2 === c2 ? s2 = a2 = 0 : (h2 = l2 - c2, a2 = u2 > 0.5 ? h2 / (2 - l2 - c2) : h2 / (l2 + c2), s2 = l2 === r2 ? (i2 - o2) / h2 + (i2 < o2 ? 6 : 0) : l2 === i2 ? (o2 - r2) / h2 + 2 : (r2 - i2) / h2 + 4, s2 *= 60), d2[0] = ~~(s2 + 0.5), d2[1] = ~~(100 * a2 + 0.5), d2[2] = ~~(100 * u2 + 0.5)), n2 && d2.length < 4 && (d2[3] = 1), d2;
}, Gr = function(t19) {
  var e2 = [], n2 = [], r2 = -1;
  return t19.split(Zr).forEach(function(t20) {
    var i2 = t20.match(vn) || [];
    e2.push.apply(e2, i2), n2.push(r2 += i2.length + 1);
  }), e2.c = n2, e2;
}, Kr = function(t19, e2, n2) {
  var r2, i2, o2, s2, a2 = "", u2 = (t19 + a2).match(Zr), l2 = e2 ? "hsla(" : "rgba(", c2 = 0;
  if (!u2) return t19;
  if (u2 = u2.map(function(t20) {
    return (t20 = qr(t20, e2, 1)) && l2 + (e2 ? t20[0] + "," + t20[1] + "%," + t20[2] + "%," + t20[3] : t20.join(",")) + ")";
  }), n2 && (o2 = Gr(t19), (r2 = n2.c).join(a2) !== o2.c.join(a2))) for (s2 = (i2 = t19.replace(Zr, "1").split(vn)).length - 1; c2 < s2; c2++) a2 += i2[c2] + (~r2.indexOf(c2) ? u2.shift() || l2 + "0,0,0,0)" : (o2.length ? o2 : u2.length ? u2 : n2).shift());
  if (!i2) for (s2 = (i2 = t19.split(Zr)).length - 1; c2 < s2; c2++) a2 += i2[c2] + u2[c2];
  return a2 + i2[s2];
}, Zr = function() {
  var t19, e2 = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
  for (t19 in Yr) e2 += "|" + t19 + "\\b";
  return new RegExp(e2 + ")", "gi");
}(), Jr = /hsl[a]?\(/, Qr = function(t19) {
  var e2, n2 = t19.join(" ");
  if (Zr.lastIndex = 0, Zr.test(n2)) return e2 = Jr.test(n2), t19[1] = Kr(t19[1], e2), t19[0] = Kr(t19[0], e2, Gr(t19[1])), true;
}, ti = function() {
  var t19, e2, n2, r2, i2, o2, s2 = Date.now, a2 = 500, u2 = 33, l2 = s2(), c2 = l2, h2 = 1e3 / 240, f2 = h2, d2 = [], p2 = function n3(p3) {
    var m2, v2, g2, y2, _2 = s2() - c2, b2 = true === p3;
    if ((_2 > a2 || _2 < 0) && (l2 += _2 - u2), ((m2 = (g2 = (c2 += _2) - l2) - f2) > 0 || b2) && (y2 = ++r2.frame, i2 = g2 - 1e3 * r2.time, r2.time = g2 /= 1e3, f2 += m2 + (m2 >= h2 ? 4 : h2 - m2), v2 = 1), b2 || (t19 = e2(n3)), v2) for (o2 = 0; o2 < d2.length; o2++) d2[o2](g2, i2, y2, p3);
  };
  return r2 = { time: 0, frame: 0, tick: function() {
    p2(true);
  }, deltaRatio: function(t20) {
    return i2 / (1e3 / (t20 || 60));
  }, wake: function() {
    We && (!ze && cn() && (Fe = ze = window, Ue = Fe.document || {}, wn.gsap = Qi, (Fe.gsapVersions || (Fe.gsapVersions = [])).push(Qi.version), Tn(xn || Fe.GreenSockGlobals || !Fe.gsap && Fe || {}), Wr.forEach(Hr)), n2 = "undefined" != typeof requestAnimationFrame && requestAnimationFrame, t19 && r2.sleep(), e2 = n2 || function(t20) {
      return setTimeout(t20, f2 - 1e3 * r2.time + 1 | 0);
    }, Ye = 1, p2(2));
  }, sleep: function() {
    (n2 ? cancelAnimationFrame : clearTimeout)(t19), Ye = 0, e2 = En;
  }, lagSmoothing: function(t20, e3) {
    a2 = t20 || 1 / 0, u2 = Math.min(e3 || 33, a2);
  }, fps: function(t20) {
    h2 = 1e3 / (t20 || 240), f2 = 1e3 * r2.time + h2;
  }, add: function(t20, e3, n3) {
    var i3 = e3 ? function(e4, n4, o3, s3) {
      t20(e4, n4, o3, s3), r2.remove(i3);
    } : t20;
    return r2.remove(t20), d2[n3 ? "unshift" : "push"](i3), ei(), i3;
  }, remove: function(t20, e3) {
    ~(e3 = d2.indexOf(t20)) && d2.splice(e3, 1) && o2 >= e3 && o2--;
  }, _listeners: d2 }, r2;
}(), ei = function() {
  return !Ye && ti.wake();
}, ni = {}, ri = /^[\d.\-M][\d.\-,\s]/, ii = /["']/g, oi = function(t19) {
  for (var e2, n2, r2, i2 = {}, o2 = t19.substr(1, t19.length - 3).split(":"), s2 = o2[0], a2 = 1, u2 = o2.length; a2 < u2; a2++) n2 = o2[a2], e2 = a2 !== u2 - 1 ? n2.lastIndexOf(",") : n2.length, r2 = n2.substr(0, e2), i2[s2] = isNaN(r2) ? r2.replace(ii, "").trim() : +r2, s2 = n2.substr(e2 + 1).trim();
  return i2;
}, si = function(t19) {
  return function(e2) {
    return 1 - t19(1 - e2);
  };
}, ai = function t6(e2, n2) {
  for (var r2, i2 = e2._first; i2; ) i2 instanceof mi ? t6(i2, n2) : !i2.vars.yoyoEase || i2._yoyo && i2._repeat || i2._yoyo === n2 || (i2.timeline ? t6(i2.timeline, n2) : (r2 = i2._ease, i2._ease = i2._yEase, i2._yEase = r2, i2._yoyo = n2)), i2 = i2._next;
}, ui = function(t19, e2) {
  return t19 && (on(t19) ? t19 : ni[t19] || function(t20) {
    var e3 = (t20 + "").split("("), n2 = ni[e3[0]];
    return n2 && e3.length > 1 && n2.config ? n2.config.apply(null, ~t20.indexOf("{") ? [oi(e3[1])] : function(t21) {
      var e4 = t21.indexOf("(") + 1, n3 = t21.indexOf(")"), r2 = t21.indexOf("(", e4);
      return t21.substring(e4, ~r2 && r2 < n3 ? t21.indexOf(")", n3 + 1) : n3);
    }(t20).split(",").map(Gn)) : ni._CE && ri.test(t20) ? ni._CE("", t20) : n2;
  }(t19)) || e2;
}, li = function(t19, e2, n2, r2) {
  void 0 === n2 && (n2 = function(t20) {
    return 1 - e2(1 - t20);
  }), void 0 === r2 && (r2 = function(t20) {
    return t20 < 0.5 ? e2(2 * t20) / 2 : 1 - e2(2 * (1 - t20)) / 2;
  });
  var i2, o2 = { easeIn: e2, easeOut: n2, easeInOut: r2 };
  return Un(t19, function(t20) {
    for (var e3 in ni[t20] = wn[t20] = o2, ni[i2 = t20.toLowerCase()] = n2, o2) ni[i2 + ("easeIn" === e3 ? ".in" : "easeOut" === e3 ? ".out" : ".inOut")] = ni[t20 + "." + e3] = o2[e3];
  }), o2;
}, ci = function(t19) {
  return function(e2) {
    return e2 < 0.5 ? (1 - t19(1 - 2 * e2)) / 2 : 0.5 + t19(2 * (e2 - 0.5)) / 2;
  };
}, hi = function t7(e2, n2, r2) {
  var i2 = n2 >= 1 ? n2 : 1, o2 = (r2 || (e2 ? 0.3 : 0.45)) / (n2 < 1 ? n2 : 1), s2 = o2 / Ze * (Math.asin(1 / i2) || 0), a2 = function(t19) {
    return 1 === t19 ? 1 : i2 * Math.pow(2, -10 * t19) * nn((t19 - s2) * o2) + 1;
  }, u2 = "out" === e2 ? a2 : "in" === e2 ? function(t19) {
    return 1 - a2(1 - t19);
  } : ci(a2);
  return o2 = Ze / o2, u2.config = function(n3, r3) {
    return t7(e2, n3, r3);
  }, u2;
}, fi = function t8(e2, n2) {
  void 0 === n2 && (n2 = 1.70158);
  var r2 = function(t19) {
    return t19 ? --t19 * t19 * ((n2 + 1) * t19 + n2) + 1 : 0;
  }, i2 = "out" === e2 ? r2 : "in" === e2 ? function(t19) {
    return 1 - r2(1 - t19);
  } : ci(r2);
  return i2.config = function(n3) {
    return t8(e2, n3);
  }, i2;
};
Un("Linear,Quad,Cubic,Quart,Quint,Strong", function(t19, e2) {
  var n2 = e2 < 5 ? e2 + 1 : e2;
  li(t19 + ",Power" + (n2 - 1), e2 ? function(t20) {
    return Math.pow(t20, n2);
  } : function(t20) {
    return t20;
  }, function(t20) {
    return 1 - Math.pow(1 - t20, n2);
  }, function(t20) {
    return t20 < 0.5 ? Math.pow(2 * t20, n2) / 2 : 1 - Math.pow(2 * (1 - t20), n2) / 2;
  });
}), ni.Linear.easeNone = ni.none = ni.Linear.easeIn, li("Elastic", hi("in"), hi("out"), hi()), function(t19, e2) {
  var n2 = 1 / e2, r2 = 2 * n2, i2 = 2.5 * n2, o2 = function(o3) {
    return o3 < n2 ? t19 * o3 * o3 : o3 < r2 ? t19 * Math.pow(o3 - 1.5 / e2, 2) + 0.75 : o3 < i2 ? t19 * (o3 -= 2.25 / e2) * o3 + 0.9375 : t19 * Math.pow(o3 - 2.625 / e2, 2) + 0.984375;
  };
  li("Bounce", function(t20) {
    return 1 - o2(1 - t20);
  }, o2);
}(7.5625, 2.75), li("Expo", function(t19) {
  return Math.pow(2, 10 * (t19 - 1)) * t19 + t19 * t19 * t19 * t19 * t19 * t19 * (1 - t19);
}), li("Circ", function(t19) {
  return -(tn(1 - t19 * t19) - 1);
}), li("Sine", function(t19) {
  return 1 === t19 ? 1 : 1 - en(t19 * Je);
}), li("Back", fi("in"), fi("out"), fi()), ni.SteppedEase = ni.steps = wn.SteppedEase = { config: function(t19, e2) {
  void 0 === t19 && (t19 = 1);
  var n2 = 1 / t19, r2 = t19 + (e2 ? 0 : 1), i2 = e2 ? 1 : 0;
  return function(t20) {
    return ((r2 * Pr(0, 0.99999999, t20) | 0) + i2) * n2;
  };
} }, qe.ease = ni["quad.out"], Un("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t19) {
  return Bn += t19 + "," + t19 + "Params,";
});
var di = function(t19, e2) {
  this.id = Qe++, t19._gsap = this, this.target = t19, this.harness = e2, this.get = e2 ? e2.get : zn, this.set = e2 ? e2.getSetter : Ai;
}, pi = function() {
  function t19(t20) {
    this.vars = t20, this._delay = +t20.delay || 0, (this._repeat = t20.repeat === 1 / 0 ? -2 : t20.repeat || 0) && (this._rDelay = t20.repeatDelay || 0, this._yoyo = !!t20.yoyo || !!t20.yoyoEase), this._ts = 1, _r(this, +t20.duration, 1, 1), this.data = t20.data, Be && (this._ctx = Be, Be.data.push(this)), Ye || ti.wake();
  }
  var e2 = t19.prototype;
  return e2.delay = function(t20) {
    return t20 || 0 === t20 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t20 - this._delay), this._delay = t20, this) : this._delay;
  }, e2.duration = function(t20) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? t20 + (t20 + this._rDelay) * this._repeat : t20) : this.totalDuration() && this._dur;
  }, e2.totalDuration = function(t20) {
    return arguments.length ? (this._dirty = 0, _r(this, this._repeat < 0 ? t20 : (t20 - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e2.totalTime = function(t20, e3) {
    if (ei(), !arguments.length) return this._tTime;
    var n2 = this._dp;
    if (n2 && n2.smoothChildTiming && this._ts) {
      for (fr(this, t20), !n2._dp || n2.parent || dr(n2, this); n2 && n2.parent; ) n2.parent._time !== n2._start + (n2._ts >= 0 ? n2._tTime / n2._ts : (n2.totalDuration() - n2._tTime) / -n2._ts) && n2.totalTime(n2._tTime, true), n2 = n2.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t20 < this._tDur || this._ts < 0 && t20 > 0 || !this._tDur && !t20) && pr(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== t20 || !this._dur && !e3 || this._initted && Math.abs(this._zTime) === Ke || !t20 && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t20), qn(this, t20, e3)), this;
  }, e2.time = function(t20, e3) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t20 + ur(this)) % (this._dur + this._rDelay) || (t20 ? this._dur : 0), e3) : this._time;
  }, e2.totalProgress = function(t20, e3) {
    return arguments.length ? this.totalTime(this.totalDuration() * t20, e3) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, e2.progress = function(t20, e3) {
    return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t20 : 1 - t20) + ur(this), e3) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, e2.iteration = function(t20, e3) {
    var n2 = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (t20 - 1) * n2, e3) : this._repeat ? lr(this._tTime, n2) + 1 : 1;
  }, e2.timeScale = function(t20, e3) {
    if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
    if (this._rts === t20) return this;
    var n2 = this.parent && this._ts ? cr(this.parent._time, this) : this._tTime;
    return this._rts = +t20 || 0, this._ts = this._ps || -1e-8 === t20 ? 0 : this._rts, this.totalTime(Pr(-Math.abs(this._delay), this._tDur, n2), false !== e3), hr(this), function(t21) {
      for (var e4 = t21.parent; e4 && e4.parent; ) e4._dirty = 1, e4.totalDuration(), e4 = e4.parent;
      return t21;
    }(this);
  }, e2.paused = function(t20) {
    return arguments.length ? (this._ps !== t20 && (this._ps = t20, t20 ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (ei(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== Ke && (this._tTime -= Ke)))), this) : this._ps;
  }, e2.startTime = function(t20) {
    if (arguments.length) {
      this._start = t20;
      var e3 = this.parent || this._dp;
      return e3 && (e3._sort || !this.parent) && pr(e3, this, t20 - this._delay), this;
    }
    return this._start;
  }, e2.endTime = function(t20) {
    return this._start + (ln(t20) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e2.rawTime = function(t20) {
    var e3 = this.parent || this._dp;
    return e3 ? t20 && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? cr(e3.rawTime(t20), this) : this._tTime : this._tTime;
  }, e2.revert = function(t20) {
    void 0 === t20 && (t20 = Mn);
    var e3 = Ve;
    return Ve = t20, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t20), this.totalTime(-0.01, t20.suppressEvents)), "nested" !== this.data && false !== t20.kill && this.kill(), Ve = e3, this;
  }, e2.globalTime = function(t20) {
    for (var e3 = this, n2 = arguments.length ? t20 : e3.rawTime(); e3; ) n2 = e3._start + n2 / (Math.abs(e3._ts) || 1), e3 = e3._dp;
    return !this.parent && this._sat ? this._sat.globalTime(t20) : n2;
  }, e2.repeat = function(t20) {
    return arguments.length ? (this._repeat = t20 === 1 / 0 ? -2 : t20, br(this)) : -2 === this._repeat ? 1 / 0 : this._repeat;
  }, e2.repeatDelay = function(t20) {
    if (arguments.length) {
      var e3 = this._time;
      return this._rDelay = t20, br(this), e3 ? this.time(e3) : this;
    }
    return this._rDelay;
  }, e2.yoyo = function(t20) {
    return arguments.length ? (this._yoyo = t20, this) : this._yoyo;
  }, e2.seek = function(t20, e3) {
    return this.totalTime(xr(this, t20), ln(e3));
  }, e2.restart = function(t20, e3) {
    return this.play().totalTime(t20 ? -this._delay : 0, ln(e3)), this._dur || (this._zTime = -1e-8), this;
  }, e2.play = function(t20, e3) {
    return null != t20 && this.seek(t20, e3), this.reversed(false).paused(false);
  }, e2.reverse = function(t20, e3) {
    return null != t20 && this.seek(t20 || this.totalDuration(), e3), this.reversed(true).paused(false);
  }, e2.pause = function(t20, e3) {
    return null != t20 && this.seek(t20, e3), this.paused(true);
  }, e2.resume = function() {
    return this.paused(false);
  }, e2.reversed = function(t20) {
    return arguments.length ? (!!t20 !== this.reversed() && this.timeScale(-this._rts || (t20 ? -1e-8 : 0)), this) : this._rts < 0;
  }, e2.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -1e-8, this;
  }, e2.isActive = function() {
    var t20, e3 = this.parent || this._dp, n2 = this._start;
    return !(e3 && !(this._ts && this._initted && e3.isActive() && (t20 = e3.rawTime(true)) >= n2 && t20 < this.endTime(true) - Ke));
  }, e2.eventCallback = function(t20, e3, n2) {
    var r2 = this.vars;
    return arguments.length > 1 ? (e3 ? (r2[t20] = e3, n2 && (r2[t20 + "Params"] = n2), "onUpdate" === t20 && (this._onUpdate = e3)) : delete r2[t20], this) : r2[t20];
  }, e2.then = function(t20) {
    var e3 = this;
    return new Promise(function(n2) {
      var r2 = on(t20) ? t20 : Kn, i2 = function() {
        var t21 = e3.then;
        e3.then = null, on(r2) && (r2 = r2(e3)) && (r2.then || r2 === e3) && (e3.then = t21), n2(r2), e3.then = t21;
      };
      e3._initted && 1 === e3.totalProgress() && e3._ts >= 0 || !e3._tTime && e3._ts < 0 ? i2() : e3._prom = i2;
    });
  }, e2.kill = function() {
    Ur(this);
  }, t19;
}();
Zn(pi.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: false, parent: null, _initted: false, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -1e-8, _prom: 0, _ps: false, _rts: 1 });
var mi = function(t19) {
  function e2(e3, n3) {
    var r2;
    return void 0 === e3 && (e3 = {}), (r2 = t19.call(this, e3) || this).labels = {}, r2.smoothChildTiming = !!e3.smoothChildTiming, r2.autoRemoveChildren = !!e3.autoRemoveChildren, r2._sort = ln(e3.sortChildren), Ie && pr(e3.parent || Ie, Le(r2), n3), e3.reversed && r2.reverse(), e3.paused && r2.paused(true), e3.scrollTrigger && mr(Le(r2), e3.scrollTrigger), r2;
  }
  je(e2, t19);
  var n2 = e2.prototype;
  return n2.to = function(t20, e3, n3) {
    return Tr(0, arguments, this), this;
  }, n2.from = function(t20, e3, n3) {
    return Tr(1, arguments, this), this;
  }, n2.fromTo = function(t20, e3, n3, r2) {
    return Tr(2, arguments, this), this;
  }, n2.set = function(t20, e3, n3) {
    return e3.duration = 0, e3.parent = this, er(e3).repeatDelay || (e3.repeat = 0), e3.immediateRender = !!e3.immediateRender, new Si(t20, e3, xr(this, n3), 1), this;
  }, n2.call = function(t20, e3, n3) {
    return pr(this, Si.delayedCall(0, t20, e3), n3);
  }, n2.staggerTo = function(t20, e3, n3, r2, i2, o2, s2) {
    return n3.duration = e3, n3.stagger = n3.stagger || r2, n3.onComplete = o2, n3.onCompleteParams = s2, n3.parent = this, new Si(t20, n3, xr(this, i2)), this;
  }, n2.staggerFrom = function(t20, e3, n3, r2, i2, o2, s2) {
    return n3.runBackwards = 1, er(n3).immediateRender = ln(n3.immediateRender), this.staggerTo(t20, e3, n3, r2, i2, o2, s2);
  }, n2.staggerFromTo = function(t20, e3, n3, r2, i2, o2, s2, a2) {
    return r2.startAt = n3, er(r2).immediateRender = ln(r2.immediateRender), this.staggerTo(t20, e3, r2, i2, o2, s2, a2);
  }, n2.render = function(t20, e3, n3) {
    var r2, i2, o2, s2, a2, u2, l2, c2, h2, f2, d2, p2, m2 = this._time, v2 = this._dirty ? this.totalDuration() : this._tDur, g2 = this._dur, y2 = t20 <= 0 ? 0 : Hn(t20), _2 = this._zTime < 0 != t20 < 0 && (this._initted || !g2);
    if (this !== Ie && y2 > v2 && t20 >= 0 && (y2 = v2), y2 !== this._tTime || n3 || _2) {
      if (m2 !== this._time && g2 && (y2 += this._time - m2, t20 += this._time - m2), r2 = y2, h2 = this._start, u2 = !(c2 = this._ts), _2 && (g2 || (m2 = this._zTime), (t20 || !e3) && (this._zTime = t20)), this._repeat) {
        if (d2 = this._yoyo, a2 = g2 + this._rDelay, this._repeat < -1 && t20 < 0) return this.totalTime(100 * a2 + t20, e3, n3);
        if (r2 = Hn(y2 % a2), y2 === v2 ? (s2 = this._repeat, r2 = g2) : ((s2 = ~~(f2 = Hn(y2 / a2))) && s2 === f2 && (r2 = g2, s2--), r2 > g2 && (r2 = g2)), f2 = lr(this._tTime, a2), !m2 && this._tTime && f2 !== s2 && this._tTime - f2 * a2 - this._dur <= 0 && (f2 = s2), d2 && 1 & s2 && (r2 = g2 - r2, p2 = 1), s2 !== f2 && !this._lock) {
          var b2 = d2 && 1 & f2, w2 = b2 === (d2 && 1 & s2);
          if (s2 < f2 && (b2 = !b2), m2 = b2 ? 0 : y2 % g2 ? g2 : y2, this._lock = 1, this.render(m2 || (p2 ? 0 : Hn(s2 * a2)), e3, !g2)._lock = 0, this._tTime = y2, !e3 && this.parent && zr(this, "onRepeat"), this.vars.repeatRefresh && !p2 && (this.invalidate()._lock = 1), m2 && m2 !== this._time || u2 !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
          if (g2 = this._dur, v2 = this._tDur, w2 && (this._lock = 2, m2 = b2 ? g2 : -1e-4, this.render(m2, true), this.vars.repeatRefresh && !p2 && this.invalidate()), this._lock = 0, !this._ts && !u2) return this;
          ai(this, p2);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (l2 = function(t21, e4, n4) {
        var r3;
        if (n4 > e4) for (r3 = t21._first; r3 && r3._start <= n4; ) {
          if ("isPause" === r3.data && r3._start > e4) return r3;
          r3 = r3._next;
        }
        else for (r3 = t21._last; r3 && r3._start >= n4; ) {
          if ("isPause" === r3.data && r3._start < e4) return r3;
          r3 = r3._prev;
        }
      }(this, Hn(m2), Hn(r2)), l2 && (y2 -= r2 - (r2 = l2._start))), this._tTime = y2, this._time = r2, this._act = !c2, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t20, m2 = 0), !m2 && r2 && !e3 && !s2 && (zr(this, "onStart"), this._tTime !== y2)) return this;
      if (r2 >= m2 && t20 >= 0) for (i2 = this._first; i2; ) {
        if (o2 = i2._next, (i2._act || r2 >= i2._start) && i2._ts && l2 !== i2) {
          if (i2.parent !== this) return this.render(t20, e3, n3);
          if (i2.render(i2._ts > 0 ? (r2 - i2._start) * i2._ts : (i2._dirty ? i2.totalDuration() : i2._tDur) + (r2 - i2._start) * i2._ts, e3, n3), r2 !== this._time || !this._ts && !u2) {
            l2 = 0, o2 && (y2 += this._zTime = -1e-8);
            break;
          }
        }
        i2 = o2;
      }
      else {
        i2 = this._last;
        for (var x2 = t20 < 0 ? t20 : r2; i2; ) {
          if (o2 = i2._prev, (i2._act || x2 <= i2._end) && i2._ts && l2 !== i2) {
            if (i2.parent !== this) return this.render(t20, e3, n3);
            if (i2.render(i2._ts > 0 ? (x2 - i2._start) * i2._ts : (i2._dirty ? i2.totalDuration() : i2._tDur) + (x2 - i2._start) * i2._ts, e3, n3 || Ve && (i2._initted || i2._startAt)), r2 !== this._time || !this._ts && !u2) {
              l2 = 0, o2 && (y2 += this._zTime = x2 ? -1e-8 : Ke);
              break;
            }
          }
          i2 = o2;
        }
      }
      if (l2 && !e3 && (this.pause(), l2.render(r2 >= m2 ? 0 : -1e-8)._zTime = r2 >= m2 ? 1 : -1, this._ts)) return this._start = h2, hr(this), this.render(t20, e3, n3);
      this._onUpdate && !e3 && zr(this, "onUpdate", true), (y2 === v2 && this._tTime >= this.totalDuration() || !y2 && m2) && (h2 !== this._start && Math.abs(c2) === Math.abs(this._ts) || this._lock || ((t20 || !g2) && (y2 === v2 && this._ts > 0 || !y2 && this._ts < 0) && ir(this, 1), e3 || t20 < 0 && !m2 || !y2 && !m2 && v2 || (zr(this, y2 === v2 && t20 >= 0 ? "onComplete" : "onReverseComplete", true), this._prom && !(y2 < v2 && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, n2.add = function(t20, e3) {
    var n3 = this;
    if (sn(e3) || (e3 = xr(this, e3, t20)), !(t20 instanceof pi)) {
      if (dn(t20)) return t20.forEach(function(t21) {
        return n3.add(t21, e3);
      }), this;
      if (rn(t20)) return this.addLabel(t20, e3);
      if (!on(t20)) return this;
      t20 = Si.delayedCall(0, t20);
    }
    return this !== t20 ? pr(this, t20, e3) : this;
  }, n2.getChildren = function(t20, e3, n3, r2) {
    void 0 === t20 && (t20 = true), void 0 === e3 && (e3 = true), void 0 === n3 && (n3 = true), void 0 === r2 && (r2 = -1e8);
    for (var i2 = [], o2 = this._first; o2; ) o2._start >= r2 && (o2 instanceof Si ? e3 && i2.push(o2) : (n3 && i2.push(o2), t20 && i2.push.apply(i2, o2.getChildren(true, e3, n3)))), o2 = o2._next;
    return i2;
  }, n2.getById = function(t20) {
    for (var e3 = this.getChildren(1, 1, 1), n3 = e3.length; n3--; ) if (e3[n3].vars.id === t20) return e3[n3];
  }, n2.remove = function(t20) {
    return rn(t20) ? this.removeLabel(t20) : on(t20) ? this.killTweensOf(t20) : (t20.parent === this && rr(this, t20), t20 === this._recent && (this._recent = this._last), or(this));
  }, n2.totalTime = function(e3, n3) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Hn(ti.time - (this._ts > 0 ? e3 / this._ts : (this.totalDuration() - e3) / -this._ts))), t19.prototype.totalTime.call(this, e3, n3), this._forcing = 0, this) : this._tTime;
  }, n2.addLabel = function(t20, e3) {
    return this.labels[t20] = xr(this, e3), this;
  }, n2.removeLabel = function(t20) {
    return delete this.labels[t20], this;
  }, n2.addPause = function(t20, e3, n3) {
    var r2 = Si.delayedCall(0, e3 || En, n3);
    return r2.data = "isPause", this._hasPause = 1, pr(this, r2, xr(this, t20));
  }, n2.removePause = function(t20) {
    var e3 = this._first;
    for (t20 = xr(this, t20); e3; ) e3._start === t20 && "isPause" === e3.data && ir(e3), e3 = e3._next;
  }, n2.killTweensOf = function(t20, e3, n3) {
    for (var r2 = this.getTweensOf(t20, n3), i2 = r2.length; i2--; ) vi !== r2[i2] && r2[i2].kill(t20, e3);
    return this;
  }, n2.getTweensOf = function(t20, e3) {
    for (var n3, r2 = [], i2 = Mr(t20), o2 = this._first, s2 = sn(e3); o2; ) o2 instanceof Si ? Yn(o2._targets, i2) && (s2 ? (!vi || o2._initted && o2._ts) && o2.globalTime(0) <= e3 && o2.globalTime(o2.totalDuration()) > e3 : !e3 || o2.isActive()) && r2.push(o2) : (n3 = o2.getTweensOf(i2, e3)).length && r2.push.apply(r2, n3), o2 = o2._next;
    return r2;
  }, n2.tweenTo = function(t20, e3) {
    e3 = e3 || {};
    var n3, r2 = this, i2 = xr(r2, t20), o2 = e3, s2 = o2.startAt, a2 = o2.onStart, u2 = o2.onStartParams, l2 = o2.immediateRender, c2 = Si.to(r2, Zn({ ease: e3.ease || "none", lazy: false, immediateRender: false, time: i2, overwrite: "auto", duration: e3.duration || Math.abs((i2 - (s2 && "time" in s2 ? s2.time : r2._time)) / r2.timeScale()) || Ke, onStart: function() {
      if (r2.pause(), !n3) {
        var t21 = e3.duration || Math.abs((i2 - (s2 && "time" in s2 ? s2.time : r2._time)) / r2.timeScale());
        c2._dur !== t21 && _r(c2, t21, 0, 1).render(c2._time, true, true), n3 = 1;
      }
      a2 && a2.apply(c2, u2 || []);
    } }, e3));
    return l2 ? c2.render(0) : c2;
  }, n2.tweenFromTo = function(t20, e3, n3) {
    return this.tweenTo(e3, Zn({ startAt: { time: xr(this, t20) } }, n3));
  }, n2.recent = function() {
    return this._recent;
  }, n2.nextLabel = function(t20) {
    return void 0 === t20 && (t20 = this._time), Fr(this, xr(this, t20));
  }, n2.previousLabel = function(t20) {
    return void 0 === t20 && (t20 = this._time), Fr(this, xr(this, t20), 1);
  }, n2.currentLabel = function(t20) {
    return arguments.length ? this.seek(t20, true) : this.previousLabel(this._time + Ke);
  }, n2.shiftChildren = function(t20, e3, n3) {
    void 0 === n3 && (n3 = 0);
    for (var r2, i2 = this._first, o2 = this.labels; i2; ) i2._start >= n3 && (i2._start += t20, i2._end += t20), i2 = i2._next;
    if (e3) for (r2 in o2) o2[r2] >= n3 && (o2[r2] += t20);
    return or(this);
  }, n2.invalidate = function(e3) {
    var n3 = this._first;
    for (this._lock = 0; n3; ) n3.invalidate(e3), n3 = n3._next;
    return t19.prototype.invalidate.call(this, e3);
  }, n2.clear = function(t20) {
    void 0 === t20 && (t20 = true);
    for (var e3, n3 = this._first; n3; ) e3 = n3._next, this.remove(n3), n3 = e3;
    return this._dp && (this._time = this._tTime = this._pTime = 0), t20 && (this.labels = {}), or(this);
  }, n2.totalDuration = function(t20) {
    var e3, n3, r2, i2 = 0, o2 = this, s2 = o2._last, a2 = Ge;
    if (arguments.length) return o2.timeScale((o2._repeat < 0 ? o2.duration() : o2.totalDuration()) / (o2.reversed() ? -t20 : t20));
    if (o2._dirty) {
      for (r2 = o2.parent; s2; ) e3 = s2._prev, s2._dirty && s2.totalDuration(), (n3 = s2._start) > a2 && o2._sort && s2._ts && !o2._lock ? (o2._lock = 1, pr(o2, s2, n3 - s2._delay, 1)._lock = 0) : a2 = n3, n3 < 0 && s2._ts && (i2 -= n3, (!r2 && !o2._dp || r2 && r2.smoothChildTiming) && (o2._start += n3 / o2._ts, o2._time -= n3, o2._tTime -= n3), o2.shiftChildren(-n3, false, -1 / 0), a2 = 0), s2._end > i2 && s2._ts && (i2 = s2._end), s2 = e3;
      _r(o2, o2 === Ie && o2._time > i2 ? o2._time : i2, 1, 1), o2._dirty = 0;
    }
    return o2._tDur;
  }, e2.updateRoot = function(t20) {
    if (Ie._ts && (qn(Ie, cr(t20, Ie)), He = ti.frame), ti.frame >= Nn) {
      Nn += Xe.autoSleep || 120;
      var e3 = Ie._first;
      if ((!e3 || !e3._ts) && Xe.autoSleep && ti._listeners.length < 2) {
        for (; e3 && !e3._ts; ) e3 = e3._next;
        e3 || ti.sleep();
      }
    }
  }, e2;
}(pi);
Zn(mi.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var vi, gi, yi = function(t19, e2, n2, r2, i2, o2, s2) {
  var a2, u2, l2, c2, h2, f2, d2, p2, m2 = new Fi(this._pt, t19, e2, 0, 1, Li, null, i2), v2 = 0, g2 = 0;
  for (m2.b = n2, m2.e = r2, n2 += "", (d2 = ~(r2 += "").indexOf("random(")) && (r2 = Br(r2)), o2 && (o2(p2 = [n2, r2], t19, e2), n2 = p2[0], r2 = p2[1]), u2 = n2.match(gn) || []; a2 = gn.exec(r2); ) c2 = a2[0], h2 = r2.substring(v2, a2.index), l2 ? l2 = (l2 + 1) % 5 : "rgba(" === h2.substr(-5) && (l2 = 1), c2 !== u2[g2++] && (f2 = parseFloat(u2[g2 - 1]) || 0, m2._pt = { _next: m2._pt, p: h2 || 1 === g2 ? h2 : ",", s: f2, c: "=" === c2.charAt(1) ? $n(f2, c2) - f2 : parseFloat(c2) - f2, m: l2 && l2 < 4 ? Math.round : 0 }, v2 = gn.lastIndex);
  return m2.c = v2 < r2.length ? r2.substring(v2, r2.length) : "", m2.fp = s2, (yn.test(r2) || d2) && (m2.e = 0), this._pt = m2, m2;
}, _i = function(t19, e2, n2, r2, i2, o2, s2, a2, u2, l2) {
  on(r2) && (r2 = r2(i2 || 0, t19, o2));
  var c2, h2 = t19[e2], f2 = "get" !== n2 ? n2 : on(h2) ? u2 ? t19[e2.indexOf("set") || !on(t19["get" + e2.substr(3)]) ? e2 : "get" + e2.substr(3)](u2) : t19[e2]() : h2, d2 = on(h2) ? u2 ? ki : Oi : Ei;
  if (rn(r2) && (~r2.indexOf("random(") && (r2 = Br(r2)), "=" === r2.charAt(1) && ((c2 = $n(f2, r2) + (Sr(f2) || 0)) || 0 === c2) && (r2 = c2)), !l2 || f2 !== r2 || gi) return isNaN(f2 * r2) || "" === r2 ? (!h2 && !(e2 in t19) && Cn(e2, r2), yi.call(this, t19, e2, f2, r2, d2, a2 || Xe.stringFilter, u2)) : (c2 = new Fi(this._pt, t19, e2, +f2 || 0, r2 - (f2 || 0), "boolean" == typeof h2 ? Di : Ri, 0, d2), u2 && (c2.fp = u2), s2 && c2.modifier(s2, this, t19), this._pt = c2);
}, bi = function(t19, e2, n2, r2, i2, o2) {
  var s2, a2, u2, l2;
  if (Ln[t19] && false !== (s2 = new Ln[t19]()).init(i2, s2.rawVars ? e2[t19] : function(t20, e3, n3, r3, i3) {
    if (on(t20) && (t20 = Ti(t20, i3, e3, n3, r3)), !un(t20) || t20.style && t20.nodeType || dn(t20) || fn(t20)) return rn(t20) ? Ti(t20, i3, e3, n3, r3) : t20;
    var o3, s3 = {};
    for (o3 in t20) s3[o3] = Ti(t20[o3], i3, e3, n3, r3);
    return s3;
  }(e2[t19], r2, i2, o2, n2), n2, r2, o2) && (n2._pt = a2 = new Fi(n2._pt, i2, t19, 0, 1, s2.render, s2, 0, s2.priority), n2 !== $e)) for (u2 = n2._ptLookup[n2._targets.indexOf(i2)], l2 = s2._props.length; l2--; ) u2[s2._props[l2]] = a2;
  return s2;
}, wi = function t9(e2, n2, r2) {
  var i2, o2, s2, a2, u2, l2, c2, h2, f2, d2, p2, m2, v2, g2 = e2.vars, y2 = g2.ease, _2 = g2.startAt, b2 = g2.immediateRender, w2 = g2.lazy, x2 = g2.onUpdate, T2 = g2.runBackwards, C2 = g2.yoyoEase, P2 = g2.keyframes, S2 = g2.autoRevert, E2 = e2._dur, O2 = e2._startAt, k2 = e2._targets, M2 = e2.parent, A2 = M2 && "nested" === M2.data ? M2.vars.targets : k2, R2 = "auto" === e2._overwrite && !Ne, D2 = e2.timeline;
  if (D2 && (!P2 || !y2) && (y2 = "none"), e2._ease = ui(y2, qe.ease), e2._yEase = C2 ? si(ui(true === C2 ? y2 : C2, qe.ease)) : 0, C2 && e2._yoyo && !e2._repeat && (C2 = e2._yEase, e2._yEase = e2._ease, e2._ease = C2), e2._from = !D2 && !!g2.runBackwards, !D2 || P2 && !g2.stagger) {
    if (m2 = (h2 = k2[0] ? Fn(k2[0]).harness : 0) && g2[h2.prop], i2 = tr(g2, An), O2 && (O2._zTime < 0 && O2.progress(1), n2 < 0 && T2 && b2 && !S2 ? O2.render(-1, true) : O2.revert(T2 && E2 ? kn : On), O2._lazy = 0), _2) {
      if (ir(e2._startAt = Si.set(k2, Zn({ data: "isStart", overwrite: false, parent: M2, immediateRender: true, lazy: !O2 && ln(w2), startAt: null, delay: 0, onUpdate: x2 && function() {
        return zr(e2, "onUpdate");
      }, stagger: 0 }, _2))), e2._startAt._dp = 0, e2._startAt._sat = e2, n2 < 0 && (Ve || !b2 && !S2) && e2._startAt.revert(kn), b2 && E2 && n2 <= 0 && r2 <= 0) return void (n2 && (e2._zTime = n2));
    } else if (T2 && E2 && !O2) if (n2 && (b2 = false), s2 = Zn({ overwrite: false, data: "isFromStart", lazy: b2 && !O2 && ln(w2), immediateRender: b2, stagger: 0, parent: M2 }, i2), m2 && (s2[h2.prop] = m2), ir(e2._startAt = Si.set(k2, s2)), e2._startAt._dp = 0, e2._startAt._sat = e2, n2 < 0 && (Ve ? e2._startAt.revert(kn) : e2._startAt.render(-1, true)), e2._zTime = n2, b2) {
      if (!n2) return;
    } else t9(e2._startAt, Ke, Ke);
    for (e2._pt = e2._ptCache = 0, w2 = E2 && ln(w2) || w2 && !E2, o2 = 0; o2 < k2.length; o2++) {
      if (c2 = (u2 = k2[o2])._gsap || In(k2)[o2]._gsap, e2._ptLookup[o2] = d2 = {}, Dn[c2.id] && Rn.length && Xn(), p2 = A2 === k2 ? o2 : A2.indexOf(u2), h2 && false !== (f2 = new h2()).init(u2, m2 || i2, e2, p2, A2) && (e2._pt = a2 = new Fi(e2._pt, u2, f2.name, 0, 1, f2.render, f2, 0, f2.priority), f2._props.forEach(function(t19) {
        d2[t19] = a2;
      }), f2.priority && (l2 = 1)), !h2 || m2) for (s2 in i2) Ln[s2] && (f2 = bi(s2, i2, e2, p2, u2, A2)) ? f2.priority && (l2 = 1) : d2[s2] = a2 = _i.call(e2, u2, s2, "get", i2[s2], p2, A2, 0, g2.stringFilter);
      e2._op && e2._op[o2] && e2.kill(u2, e2._op[o2]), R2 && e2._pt && (vi = e2, Ie.killTweensOf(u2, d2, e2.globalTime(n2)), v2 = !e2.parent, vi = 0), e2._pt && w2 && (Dn[c2.id] = 1);
    }
    l2 && Ii(e2), e2._onInit && e2._onInit(e2);
  }
  e2._onUpdate = x2, e2._initted = (!e2._op || e2._pt) && !v2, P2 && n2 <= 0 && D2.render(Ge, true, true);
}, xi = function(t19, e2, n2, r2) {
  var i2, o2, s2 = e2.ease || r2 || "power1.inOut";
  if (dn(e2)) o2 = n2[t19] || (n2[t19] = []), e2.forEach(function(t20, n3) {
    return o2.push({ t: n3 / (e2.length - 1) * 100, v: t20, e: s2 });
  });
  else for (i2 in e2) o2 = n2[i2] || (n2[i2] = []), "ease" === i2 || o2.push({ t: parseFloat(t19), v: e2[i2], e: s2 });
}, Ti = function(t19, e2, n2, r2, i2) {
  return on(t19) ? t19.call(e2, n2, r2, i2) : rn(t19) && ~t19.indexOf("random(") ? Br(t19) : t19;
}, Ci = Bn + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Pi = {};
Un(Ci + ",id,stagger,delay,duration,paused,scrollTrigger", function(t19) {
  return Pi[t19] = 1;
});
var Si = function(t19) {
  function e2(e3, n3, r2, i2) {
    var o2;
    "number" == typeof n3 && (r2.duration = n3, n3 = r2, r2 = null);
    var s2, a2, u2, l2, c2, h2, f2, d2, p2 = (o2 = t19.call(this, i2 ? n3 : er(n3)) || this).vars, m2 = p2.duration, v2 = p2.delay, g2 = p2.immediateRender, y2 = p2.stagger, _2 = p2.overwrite, b2 = p2.keyframes, w2 = p2.defaults, x2 = p2.scrollTrigger, T2 = p2.yoyoEase, C2 = n3.parent || Ie, P2 = (dn(e3) || fn(e3) ? sn(e3[0]) : "length" in n3) ? [e3] : Mr(e3);
    if (o2._targets = P2.length ? In(P2) : Pn("GSAP target " + e3 + " not found. https://gsap.com", !Xe.nullTargetWarn) || [], o2._ptLookup = [], o2._overwrite = _2, b2 || y2 || hn(m2) || hn(v2)) {
      if (n3 = o2.vars, (s2 = o2.timeline = new mi({ data: "nested", defaults: w2 || {}, targets: C2 && "nested" === C2.data ? C2.vars.targets : P2 })).kill(), s2.parent = s2._dp = Le(o2), s2._start = 0, y2 || hn(m2) || hn(v2)) {
        if (l2 = P2.length, f2 = y2 && Dr(y2), un(y2)) for (c2 in y2) ~Ci.indexOf(c2) && (d2 || (d2 = {}), d2[c2] = y2[c2]);
        for (a2 = 0; a2 < l2; a2++) (u2 = tr(n3, Pi)).stagger = 0, T2 && (u2.yoyoEase = T2), d2 && Jn(u2, d2), h2 = P2[a2], u2.duration = +Ti(m2, Le(o2), a2, h2, P2), u2.delay = (+Ti(v2, Le(o2), a2, h2, P2) || 0) - o2._delay, !y2 && 1 === l2 && u2.delay && (o2._delay = v2 = u2.delay, o2._start += v2, u2.delay = 0), s2.to(h2, u2, f2 ? f2(a2, h2, P2) : 0), s2._ease = ni.none;
        s2.duration() ? m2 = v2 = 0 : o2.timeline = 0;
      } else if (b2) {
        er(Zn(s2.vars.defaults, { ease: "none" })), s2._ease = ui(b2.ease || n3.ease || "none");
        var S2, E2, O2, k2 = 0;
        if (dn(b2)) b2.forEach(function(t20) {
          return s2.to(P2, t20, ">");
        }), s2.duration();
        else {
          for (c2 in u2 = {}, b2) "ease" === c2 || "easeEach" === c2 || xi(c2, b2[c2], u2, b2.easeEach);
          for (c2 in u2) for (S2 = u2[c2].sort(function(t20, e4) {
            return t20.t - e4.t;
          }), k2 = 0, a2 = 0; a2 < S2.length; a2++) (O2 = { ease: (E2 = S2[a2]).e, duration: (E2.t - (a2 ? S2[a2 - 1].t : 0)) / 100 * m2 })[c2] = E2.v, s2.to(P2, O2, k2), k2 += O2.duration;
          s2.duration() < m2 && s2.to({}, { duration: m2 - s2.duration() });
        }
      }
      m2 || o2.duration(m2 = s2.duration());
    } else o2.timeline = 0;
    return true !== _2 || Ne || (vi = Le(o2), Ie.killTweensOf(P2), vi = 0), pr(C2, Le(o2), r2), n3.reversed && o2.reverse(), n3.paused && o2.paused(true), (g2 || !m2 && !b2 && o2._start === Hn(C2._time) && ln(g2) && ar(Le(o2)) && "nested" !== C2.data) && (o2._tTime = -1e-8, o2.render(Math.max(0, -v2) || 0)), x2 && mr(Le(o2), x2), o2;
  }
  je(e2, t19);
  var n2 = e2.prototype;
  return n2.render = function(t20, e3, n3) {
    var r2, i2, o2, s2, a2, u2, l2, c2, h2, f2 = this._time, d2 = this._tDur, p2 = this._dur, m2 = t20 < 0, v2 = t20 > d2 - Ke && !m2 ? d2 : t20 < Ke ? 0 : t20;
    if (p2) {
      if (v2 !== this._tTime || !t20 || n3 || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== m2 || this._lazy) {
        if (r2 = v2, c2 = this.timeline, this._repeat) {
          if (s2 = p2 + this._rDelay, this._repeat < -1 && m2) return this.totalTime(100 * s2 + t20, e3, n3);
          if (r2 = Hn(v2 % s2), v2 === d2 ? (o2 = this._repeat, r2 = p2) : (o2 = ~~(a2 = Hn(v2 / s2))) && o2 === a2 ? (r2 = p2, o2--) : r2 > p2 && (r2 = p2), (u2 = this._yoyo && 1 & o2) && (h2 = this._yEase, r2 = p2 - r2), a2 = lr(this._tTime, s2), r2 === f2 && !n3 && this._initted && o2 === a2) return this._tTime = v2, this;
          o2 !== a2 && (c2 && this._yEase && ai(c2, u2), this.vars.repeatRefresh && !u2 && !this._lock && r2 !== s2 && this._initted && (this._lock = n3 = 1, this.render(Hn(s2 * o2), true).invalidate()._lock = 0));
        }
        if (!this._initted) {
          if (vr(this, m2 ? t20 : r2, n3, e3, v2)) return this._tTime = 0, this;
          if (!(f2 === this._time || n3 && this.vars.repeatRefresh && o2 !== a2)) return this;
          if (p2 !== this._dur) return this.render(t20, e3, n3);
        }
        if (this._tTime = v2, this._time = r2, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = l2 = (h2 || this._ease)(r2 / p2), this._from && (this.ratio = l2 = 1 - l2), r2 && !f2 && !e3 && !o2 && (zr(this, "onStart"), this._tTime !== v2)) return this;
        for (i2 = this._pt; i2; ) i2.r(l2, i2.d), i2 = i2._next;
        c2 && c2.render(t20 < 0 ? t20 : c2._dur * c2._ease(r2 / this._dur), e3, n3) || this._startAt && (this._zTime = t20), this._onUpdate && !e3 && (m2 && sr(this, t20, 0, n3), zr(this, "onUpdate")), this._repeat && o2 !== a2 && this.vars.onRepeat && !e3 && this.parent && zr(this, "onRepeat"), v2 !== this._tDur && v2 || this._tTime !== v2 || (m2 && !this._onUpdate && sr(this, t20, 0, true), (t20 || !p2) && (v2 === this._tDur && this._ts > 0 || !v2 && this._ts < 0) && ir(this, 1), e3 || m2 && !f2 || !(v2 || f2 || u2) || (zr(this, v2 === d2 ? "onComplete" : "onReverseComplete", true), this._prom && !(v2 < d2 && this.timeScale() > 0) && this._prom()));
      }
    } else !function(t21, e4, n4, r3) {
      var i3, o3, s3, a3 = t21.ratio, u3 = e4 < 0 || !e4 && (!t21._start && gr(t21) && (t21._initted || !yr(t21)) || (t21._ts < 0 || t21._dp._ts < 0) && !yr(t21)) ? 0 : 1, l3 = t21._rDelay, c3 = 0;
      if (l3 && t21._repeat && (c3 = Pr(0, t21._tDur, e4), o3 = lr(c3, l3), t21._yoyo && 1 & o3 && (u3 = 1 - u3), o3 !== lr(t21._tTime, l3) && (a3 = 1 - u3, t21.vars.repeatRefresh && t21._initted && t21.invalidate())), u3 !== a3 || Ve || r3 || t21._zTime === Ke || !e4 && t21._zTime) {
        if (!t21._initted && vr(t21, e4, r3, n4, c3)) return;
        for (s3 = t21._zTime, t21._zTime = e4 || (n4 ? Ke : 0), n4 || (n4 = e4 && !s3), t21.ratio = u3, t21._from && (u3 = 1 - u3), t21._time = 0, t21._tTime = c3, i3 = t21._pt; i3; ) i3.r(u3, i3.d), i3 = i3._next;
        e4 < 0 && sr(t21, e4, 0, true), t21._onUpdate && !n4 && zr(t21, "onUpdate"), c3 && t21._repeat && !n4 && t21.parent && zr(t21, "onRepeat"), (e4 >= t21._tDur || e4 < 0) && t21.ratio === u3 && (u3 && ir(t21, 1), n4 || Ve || (zr(t21, u3 ? "onComplete" : "onReverseComplete", true), t21._prom && t21._prom()));
      } else t21._zTime || (t21._zTime = e4);
    }(this, t20, e3, n3);
    return this;
  }, n2.targets = function() {
    return this._targets;
  }, n2.invalidate = function(e3) {
    return (!e3 || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(e3), t19.prototype.invalidate.call(this, e3);
  }, n2.resetTo = function(t20, e3, n3, r2, i2) {
    Ye || ti.wake(), this._ts || this.play();
    var o2 = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
    return this._initted || wi(this, o2), function(t21, e4, n4, r3, i3, o3, s2, a2) {
      var u2, l2, c2, h2, f2 = (t21._pt && t21._ptCache || (t21._ptCache = {}))[e4];
      if (!f2) for (f2 = t21._ptCache[e4] = [], c2 = t21._ptLookup, h2 = t21._targets.length; h2--; ) {
        if ((u2 = c2[h2][e4]) && u2.d && u2.d._pt) for (u2 = u2.d._pt; u2 && u2.p !== e4 && u2.fp !== e4; ) u2 = u2._next;
        if (!u2) return gi = 1, t21.vars[e4] = "+=0", wi(t21, s2), gi = 0, a2 ? Pn(e4 + " not eligible for reset") : 1;
        f2.push(u2);
      }
      for (h2 = f2.length; h2--; ) (u2 = (l2 = f2[h2])._pt || l2).s = !r3 && 0 !== r3 || i3 ? u2.s + (r3 || 0) + o3 * u2.c : r3, u2.c = n4 - u2.s, l2.e && (l2.e = Wn(n4) + Sr(l2.e)), l2.b && (l2.b = u2.s + Sr(l2.b));
    }(this, t20, e3, n3, r2, this._ease(o2 / this._dur), o2, i2) ? this.resetTo(t20, e3, n3, r2, 1) : (fr(this, 0), this.parent || nr(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, n2.kill = function(t20, e3) {
    if (void 0 === e3 && (e3 = "all"), !(t20 || e3 && "all" !== e3)) return this._lazy = this._pt = 0, this.parent ? Ur(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Ve), this;
    if (this.timeline) {
      var n3 = this.timeline.totalDuration();
      return this.timeline.killTweensOf(t20, e3, vi && true !== vi.vars.overwrite)._first || Ur(this), this.parent && n3 !== this.timeline.totalDuration() && _r(this, this._dur * this.timeline._tDur / n3, 0, 1), this;
    }
    var r2, i2, o2, s2, a2, u2, l2, c2 = this._targets, h2 = t20 ? Mr(t20) : c2, f2 = this._ptLookup, d2 = this._pt;
    if ((!e3 || "all" === e3) && function(t21, e4) {
      for (var n4 = t21.length, r3 = n4 === e4.length; r3 && n4-- && t21[n4] === e4[n4]; ) ;
      return n4 < 0;
    }(c2, h2)) return "all" === e3 && (this._pt = 0), Ur(this);
    for (r2 = this._op = this._op || [], "all" !== e3 && (rn(e3) && (a2 = {}, Un(e3, function(t21) {
      return a2[t21] = 1;
    }), e3 = a2), e3 = function(t21, e4) {
      var n4, r3, i3, o3, s3 = t21[0] ? Fn(t21[0]).harness : 0, a3 = s3 && s3.aliases;
      if (!a3) return e4;
      for (r3 in n4 = Jn({}, e4), a3) if (r3 in n4) for (i3 = (o3 = a3[r3].split(",")).length; i3--; ) n4[o3[i3]] = n4[r3];
      return n4;
    }(c2, e3)), l2 = c2.length; l2--; ) if (~h2.indexOf(c2[l2])) for (a2 in i2 = f2[l2], "all" === e3 ? (r2[l2] = e3, s2 = i2, o2 = {}) : (o2 = r2[l2] = r2[l2] || {}, s2 = e3), s2) (u2 = i2 && i2[a2]) && ("kill" in u2.d && true !== u2.d.kill(a2) || rr(this, u2, "_pt"), delete i2[a2]), "all" !== o2 && (o2[a2] = 1);
    return this._initted && !this._pt && d2 && Ur(this), this;
  }, e2.to = function(t20, n3) {
    return new e2(t20, n3, arguments[2]);
  }, e2.from = function(t20, e3) {
    return Tr(1, arguments);
  }, e2.delayedCall = function(t20, n3, r2, i2) {
    return new e2(n3, 0, { immediateRender: false, lazy: false, overwrite: false, delay: t20, onComplete: n3, onReverseComplete: n3, onCompleteParams: r2, onReverseCompleteParams: r2, callbackScope: i2 });
  }, e2.fromTo = function(t20, e3, n3) {
    return Tr(2, arguments);
  }, e2.set = function(t20, n3) {
    return n3.duration = 0, n3.repeatDelay || (n3.repeat = 0), new e2(t20, n3);
  }, e2.killTweensOf = function(t20, e3, n3) {
    return Ie.killTweensOf(t20, e3, n3);
  }, e2;
}(pi);
Zn(Si.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }), Un("staggerTo,staggerFrom,staggerFromTo", function(t19) {
  Si[t19] = function() {
    var e2 = new mi(), n2 = Er.call(arguments, 0);
    return n2.splice("staggerFromTo" === t19 ? 5 : 4, 0, 0), e2[t19].apply(e2, n2);
  };
});
var Ei = function(t19, e2, n2) {
  return t19[e2] = n2;
}, Oi = function(t19, e2, n2) {
  return t19[e2](n2);
}, ki = function(t19, e2, n2, r2) {
  return t19[e2](r2.fp, n2);
}, Mi = function(t19, e2, n2) {
  return t19.setAttribute(e2, n2);
}, Ai = function(t19, e2) {
  return on(t19[e2]) ? Oi : an(t19[e2]) && t19.setAttribute ? Mi : Ei;
}, Ri = function(t19, e2) {
  return e2.set(e2.t, e2.p, Math.round(1e6 * (e2.s + e2.c * t19)) / 1e6, e2);
}, Di = function(t19, e2) {
  return e2.set(e2.t, e2.p, !!(e2.s + e2.c * t19), e2);
}, Li = function(t19, e2) {
  var n2 = e2._pt, r2 = "";
  if (!t19 && e2.b) r2 = e2.b;
  else if (1 === t19 && e2.e) r2 = e2.e;
  else {
    for (; n2; ) r2 = n2.p + (n2.m ? n2.m(n2.s + n2.c * t19) : Math.round(1e4 * (n2.s + n2.c * t19)) / 1e4) + r2, n2 = n2._next;
    r2 += e2.c;
  }
  e2.set(e2.t, e2.p, r2, e2);
}, ji = function(t19, e2) {
  for (var n2 = e2._pt; n2; ) n2.r(t19, n2.d), n2 = n2._next;
}, Ni = function(t19, e2, n2, r2) {
  for (var i2, o2 = this._pt; o2; ) i2 = o2._next, o2.p === r2 && o2.modifier(t19, e2, n2), o2 = i2;
}, Vi = function(t19) {
  for (var e2, n2, r2 = this._pt; r2; ) n2 = r2._next, r2.p === t19 && !r2.op || r2.op === t19 ? rr(this, r2, "_pt") : r2.dep || (e2 = 1), r2 = n2;
  return !e2;
}, Bi = function(t19, e2, n2, r2) {
  r2.mSet(t19, e2, r2.m.call(r2.tween, n2, r2.mt), r2);
}, Ii = function(t19) {
  for (var e2, n2, r2, i2, o2 = t19._pt; o2; ) {
    for (e2 = o2._next, n2 = r2; n2 && n2.pr > o2.pr; ) n2 = n2._next;
    (o2._prev = n2 ? n2._prev : i2) ? o2._prev._next = o2 : r2 = o2, (o2._next = n2) ? n2._prev = o2 : i2 = o2, o2 = e2;
  }
  t19._pt = r2;
}, Fi = function() {
  function t19(t20, e2, n2, r2, i2, o2, s2, a2, u2) {
    this.t = e2, this.s = r2, this.c = i2, this.p = n2, this.r = o2 || Ri, this.d = s2 || this, this.set = a2 || Ei, this.pr = u2 || 0, this._next = t20, t20 && (t20._prev = this);
  }
  return t19.prototype.modifier = function(t20, e2, n2) {
    this.mSet = this.mSet || this.set, this.set = Bi, this.m = t20, this.mt = n2, this.tween = e2;
  }, t19;
}();
Un(Bn + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t19) {
  return An[t19] = 1;
}), wn.TweenMax = wn.TweenLite = Si, wn.TimelineLite = wn.TimelineMax = mi, Ie = new mi({ sortChildren: false, defaults: qe, autoRemoveChildren: true, id: "root", smoothChildTiming: true }), Xe.stringFilter = Qr;
var zi = [], Ui = {}, Wi = [], Hi = 0, $i = 0, Yi = function(t19) {
  return (Ui[t19] || Wi).map(function(t20) {
    return t20();
  });
}, Xi = function() {
  var t19 = Date.now(), e2 = [];
  t19 - Hi > 2 && (Yi("matchMediaInit"), zi.forEach(function(t20) {
    var n2, r2, i2, o2, s2 = t20.queries, a2 = t20.conditions;
    for (r2 in s2) (n2 = Fe.matchMedia(s2[r2]).matches) && (i2 = 1), n2 !== a2[r2] && (a2[r2] = n2, o2 = 1);
    o2 && (t20.revert(), i2 && e2.push(t20));
  }), Yi("matchMediaRevert"), e2.forEach(function(t20) {
    return t20.onMatch(t20, function(e3) {
      return t20.add(null, e3);
    });
  }), Hi = t19, Yi("matchMedia"));
}, qi = function() {
  function t19(t20, e3) {
    this.selector = e3 && Ar(e3), this.data = [], this._r = [], this.isReverted = false, this.id = $i++, t20 && this.add(t20);
  }
  var e2 = t19.prototype;
  return e2.add = function(t20, e3, n2) {
    on(t20) && (n2 = e3, e3 = t20, t20 = on);
    var r2 = this, i2 = function() {
      var t21, i3 = Be, o2 = r2.selector;
      return i3 && i3 !== r2 && i3.data.push(r2), n2 && (r2.selector = Ar(n2)), Be = r2, t21 = e3.apply(r2, arguments), on(t21) && r2._r.push(t21), Be = i3, r2.selector = o2, r2.isReverted = false, t21;
    };
    return r2.last = i2, t20 === on ? i2(r2, function(t21) {
      return r2.add(null, t21);
    }) : t20 ? r2[t20] = i2 : i2;
  }, e2.ignore = function(t20) {
    var e3 = Be;
    Be = null, t20(this), Be = e3;
  }, e2.getTweens = function() {
    var e3 = [];
    return this.data.forEach(function(n2) {
      return n2 instanceof t19 ? e3.push.apply(e3, n2.getTweens()) : n2 instanceof Si && !(n2.parent && "nested" === n2.parent.data) && e3.push(n2);
    }), e3;
  }, e2.clear = function() {
    this._r.length = this.data.length = 0;
  }, e2.kill = function(t20, e3) {
    var n2 = this;
    if (t20 ? function() {
      for (var e4, r3 = n2.getTweens(), i2 = n2.data.length; i2--; ) "isFlip" === (e4 = n2.data[i2]).data && (e4.revert(), e4.getChildren(true, true, false).forEach(function(t21) {
        return r3.splice(r3.indexOf(t21), 1);
      }));
      for (r3.map(function(t21) {
        return { g: t21._dur || t21._delay || t21._sat && !t21._sat.vars.immediateRender ? t21.globalTime(0) : -1 / 0, t: t21 };
      }).sort(function(t21, e5) {
        return e5.g - t21.g || -1 / 0;
      }).forEach(function(e5) {
        return e5.t.revert(t20);
      }), i2 = n2.data.length; i2--; ) (e4 = n2.data[i2]) instanceof mi ? "nested" !== e4.data && (e4.scrollTrigger && e4.scrollTrigger.revert(), e4.kill()) : !(e4 instanceof Si) && e4.revert && e4.revert(t20);
      n2._r.forEach(function(e5) {
        return e5(t20, n2);
      }), n2.isReverted = true;
    }() : this.data.forEach(function(t21) {
      return t21.kill && t21.kill();
    }), this.clear(), e3) for (var r2 = zi.length; r2--; ) zi[r2].id === this.id && zi.splice(r2, 1);
  }, e2.revert = function(t20) {
    this.kill(t20 || {});
  }, t19;
}(), Gi = function() {
  function t19(t20) {
    this.contexts = [], this.scope = t20, Be && Be.data.push(this);
  }
  var e2 = t19.prototype;
  return e2.add = function(t20, e3, n2) {
    un(t20) || (t20 = { matches: t20 });
    var r2, i2, o2, s2 = new qi(0, n2 || this.scope), a2 = s2.conditions = {};
    for (i2 in Be && !s2.selector && (s2.selector = Be.selector), this.contexts.push(s2), e3 = s2.add("onMatch", e3), s2.queries = t20, t20) "all" === i2 ? o2 = 1 : (r2 = Fe.matchMedia(t20[i2])) && (zi.indexOf(s2) < 0 && zi.push(s2), (a2[i2] = r2.matches) && (o2 = 1), r2.addListener ? r2.addListener(Xi) : r2.addEventListener("change", Xi));
    return o2 && e3(s2, function(t21) {
      return s2.add(null, t21);
    }), this;
  }, e2.revert = function(t20) {
    this.kill(t20 || {});
  }, e2.kill = function(t20) {
    this.contexts.forEach(function(e3) {
      return e3.kill(t20, true);
    });
  }, t19;
}(), Ki = { registerPlugin: function() {
  for (var t19 = arguments.length, e2 = new Array(t19), n2 = 0; n2 < t19; n2++) e2[n2] = arguments[n2];
  e2.forEach(function(t20) {
    return Hr(t20);
  });
}, timeline: function(t19) {
  return new mi(t19);
}, getTweensOf: function(t19, e2) {
  return Ie.getTweensOf(t19, e2);
}, getProperty: function(t19, e2, n2, r2) {
  rn(t19) && (t19 = Mr(t19)[0]);
  var i2 = Fn(t19 || {}).get, o2 = n2 ? Kn : Gn;
  return "native" === n2 && (n2 = ""), t19 ? e2 ? o2((Ln[e2] && Ln[e2].get || i2)(t19, e2, n2, r2)) : function(e3, n3, r3) {
    return o2((Ln[e3] && Ln[e3].get || i2)(t19, e3, n3, r3));
  } : t19;
}, quickSetter: function(t19, e2, n2) {
  if ((t19 = Mr(t19)).length > 1) {
    var r2 = t19.map(function(t20) {
      return Qi.quickSetter(t20, e2, n2);
    }), i2 = r2.length;
    return function(t20) {
      for (var e3 = i2; e3--; ) r2[e3](t20);
    };
  }
  t19 = t19[0] || {};
  var o2 = Ln[e2], s2 = Fn(t19), a2 = s2.harness && (s2.harness.aliases || {})[e2] || e2, u2 = o2 ? function(e3) {
    var r3 = new o2();
    $e._pt = 0, r3.init(t19, n2 ? e3 + n2 : e3, $e, 0, [t19]), r3.render(1, r3), $e._pt && ji(1, $e);
  } : s2.set(t19, a2);
  return o2 ? u2 : function(e3) {
    return u2(t19, a2, n2 ? e3 + n2 : e3, s2, 1);
  };
}, quickTo: function(t19, e2, n2) {
  var r2, i2 = Qi.to(t19, Zn(((r2 = {})[e2] = "+=0.1", r2.paused = true, r2.stagger = 0, r2), n2 || {})), o2 = function(t20, n3, r3) {
    return i2.resetTo(e2, t20, n3, r3);
  };
  return o2.tween = i2, o2;
}, isTweening: function(t19) {
  return Ie.getTweensOf(t19, true).length > 0;
}, defaults: function(t19) {
  return t19 && t19.ease && (t19.ease = ui(t19.ease, qe.ease)), Qn(qe, t19 || {});
}, config: function(t19) {
  return Qn(Xe, t19 || {});
}, registerEffect: function(t19) {
  var e2 = t19.name, n2 = t19.effect, r2 = t19.plugins, i2 = t19.defaults, o2 = t19.extendTimeline;
  (r2 || "").split(",").forEach(function(t20) {
    return t20 && !Ln[t20] && !wn[t20] && Pn(e2 + " effect requires " + t20 + " plugin.");
  }), jn[e2] = function(t20, e3, r3) {
    return n2(Mr(t20), Zn(e3 || {}, i2), r3);
  }, o2 && (mi.prototype[e2] = function(t20, n3, r3) {
    return this.add(jn[e2](t20, un(n3) ? n3 : (r3 = n3) && {}, this), r3);
  });
}, registerEase: function(t19, e2) {
  ni[t19] = ui(e2);
}, parseEase: function(t19, e2) {
  return arguments.length ? ui(t19, e2) : ni;
}, getById: function(t19) {
  return Ie.getById(t19);
}, exportRoot: function(t19, e2) {
  void 0 === t19 && (t19 = {});
  var n2, r2, i2 = new mi(t19);
  for (i2.smoothChildTiming = ln(t19.smoothChildTiming), Ie.remove(i2), i2._dp = 0, i2._time = i2._tTime = Ie._time, n2 = Ie._first; n2; ) r2 = n2._next, !e2 && !n2._dur && n2 instanceof Si && n2.vars.onComplete === n2._targets[0] || pr(i2, n2, n2._start - n2._delay), n2 = r2;
  return pr(Ie, i2, 0), i2;
}, context: function(t19, e2) {
  return t19 ? new qi(t19, e2) : Be;
}, matchMedia: function(t19) {
  return new Gi(t19);
}, matchMediaRefresh: function() {
  return zi.forEach(function(t19) {
    var e2, n2, r2 = t19.conditions;
    for (n2 in r2) r2[n2] && (r2[n2] = false, e2 = 1);
    e2 && t19.revert();
  }) || Xi();
}, addEventListener: function(t19, e2) {
  var n2 = Ui[t19] || (Ui[t19] = []);
  ~n2.indexOf(e2) || n2.push(e2);
}, removeEventListener: function(t19, e2) {
  var n2 = Ui[t19], r2 = n2 && n2.indexOf(e2);
  r2 >= 0 && n2.splice(r2, 1);
}, utils: { wrap: function t10(e2, n2, r2) {
  var i2 = n2 - e2;
  return dn(e2) ? Vr(e2, t10(0, e2.length), n2) : Cr(r2, function(t19) {
    return (i2 + (t19 - e2) % i2) % i2 + e2;
  });
}, wrapYoyo: function t11(e2, n2, r2) {
  var i2 = n2 - e2, o2 = 2 * i2;
  return dn(e2) ? Vr(e2, t11(0, e2.length - 1), n2) : Cr(r2, function(t19) {
    return e2 + ((t19 = (o2 + (t19 - e2) % o2) % o2 || 0) > i2 ? o2 - t19 : t19);
  });
}, distribute: Dr, random: Nr, snap: jr, normalize: function(t19, e2, n2) {
  return Ir(t19, e2, 0, 1, n2);
}, getUnit: Sr, clamp: function(t19, e2, n2) {
  return Cr(n2, function(n3) {
    return Pr(t19, e2, n3);
  });
}, splitColor: qr, toArray: Mr, selector: Ar, mapRange: Ir, pipe: function() {
  for (var t19 = arguments.length, e2 = new Array(t19), n2 = 0; n2 < t19; n2++) e2[n2] = arguments[n2];
  return function(t20) {
    return e2.reduce(function(t21, e3) {
      return e3(t21);
    }, t20);
  };
}, unitize: function(t19, e2) {
  return function(n2) {
    return t19(parseFloat(n2)) + (e2 || Sr(n2));
  };
}, interpolate: function t12(e2, n2, r2, i2) {
  var o2 = isNaN(e2 + n2) ? 0 : function(t19) {
    return (1 - t19) * e2 + t19 * n2;
  };
  if (!o2) {
    var s2, a2, u2, l2, c2, h2 = rn(e2), f2 = {};
    if (true === r2 && (i2 = 1) && (r2 = null), h2) e2 = { p: e2 }, n2 = { p: n2 };
    else if (dn(e2) && !dn(n2)) {
      for (u2 = [], l2 = e2.length, c2 = l2 - 2, a2 = 1; a2 < l2; a2++) u2.push(t12(e2[a2 - 1], e2[a2]));
      l2--, o2 = function(t19) {
        t19 *= l2;
        var e3 = Math.min(c2, ~~t19);
        return u2[e3](t19 - e3);
      }, r2 = n2;
    } else i2 || (e2 = Jn(dn(e2) ? [] : {}, e2));
    if (!u2) {
      for (s2 in n2) _i.call(f2, e2, s2, "get", n2[s2]);
      o2 = function(t19) {
        return ji(t19, f2) || (h2 ? e2.p : e2);
      };
    }
  }
  return Cr(r2, o2);
}, shuffle: Rr }, install: Tn, effects: jn, ticker: ti, updateRoot: mi.updateRoot, plugins: Ln, globalTimeline: Ie, core: { PropTween: Fi, globals: Sn, Tween: Si, Timeline: mi, Animation: pi, getCache: Fn, _removeLinkedListItem: rr, reverting: function() {
  return Ve;
}, context: function(t19) {
  return t19 && Be && (Be.data.push(t19), t19._ctx = Be), Be;
}, suppressOverwrites: function(t19) {
  return Ne = t19;
} } };
Un("to,from,fromTo,delayedCall,set,killTweensOf", function(t19) {
  return Ki[t19] = Si[t19];
}), ti.add(mi.updateRoot), $e = Ki.to({}, { duration: 0 });
var Zi = function(t19, e2) {
  for (var n2 = t19._pt; n2 && n2.p !== e2 && n2.op !== e2 && n2.fp !== e2; ) n2 = n2._next;
  return n2;
}, Ji = function(t19, e2) {
  return { name: t19, rawVars: 1, init: function(t20, n2, r2) {
    r2._onInit = function(t21) {
      var r3, i2;
      if (rn(n2) && (r3 = {}, Un(n2, function(t22) {
        return r3[t22] = 1;
      }), n2 = r3), e2) {
        for (i2 in r3 = {}, n2) r3[i2] = e2(n2[i2]);
        n2 = r3;
      }
      !function(t22, e3) {
        var n3, r4, i3, o2 = t22._targets;
        for (n3 in e3) for (r4 = o2.length; r4--; ) (i3 = t22._ptLookup[r4][n3]) && (i3 = i3.d) && (i3._pt && (i3 = Zi(i3, n3)), i3 && i3.modifier && i3.modifier(e3[n3], t22, o2[r4], n3));
      }(t21, n2);
    };
  } };
}, Qi = Ki.registerPlugin({ name: "attr", init: function(t19, e2, n2, r2, i2) {
  var o2, s2, a2;
  for (o2 in this.tween = n2, e2) a2 = t19.getAttribute(o2) || "", (s2 = this.add(t19, "setAttribute", (a2 || 0) + "", e2[o2], r2, i2, 0, 0, o2)).op = o2, s2.b = a2, this._props.push(o2);
}, render: function(t19, e2) {
  for (var n2 = e2._pt; n2; ) Ve ? n2.set(n2.t, n2.p, n2.b, n2) : n2.r(t19, n2.d), n2 = n2._next;
} }, { name: "endArray", init: function(t19, e2) {
  for (var n2 = e2.length; n2--; ) this.add(t19, n2, t19[n2] || 0, e2[n2], 0, 0, 0, 0, 0, 1);
} }, Ji("roundProps", Lr), Ji("modifiers"), Ji("snap", jr)) || Ki;
Si.version = mi.version = Qi.version = "3.12.7", We = 1, cn() && ei(), ni.Power0, ni.Power1, ni.Power2, ni.Power3, ni.Power4, ni.Linear, ni.Quad, ni.Cubic, ni.Quart, ni.Quint, ni.Strong, ni.Elastic, ni.Back, ni.SteppedEase, ni.Bounce, ni.Sine, ni.Expo, ni.Circ;
/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var to, eo, no, ro, io, oo, so, ao, uo = {}, lo = 180 / Math.PI, co = Math.PI / 180, ho = Math.atan2, fo = /([A-Z])/g, po = /(left|right|width|margin|padding|x)/i, mo = /[\s,\(]\S/, vo = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" }, go = function(t19, e2) {
  return e2.set(e2.t, e2.p, Math.round(1e4 * (e2.s + e2.c * t19)) / 1e4 + e2.u, e2);
}, yo = function(t19, e2) {
  return e2.set(e2.t, e2.p, 1 === t19 ? e2.e : Math.round(1e4 * (e2.s + e2.c * t19)) / 1e4 + e2.u, e2);
}, _o = function(t19, e2) {
  return e2.set(e2.t, e2.p, t19 ? Math.round(1e4 * (e2.s + e2.c * t19)) / 1e4 + e2.u : e2.b, e2);
}, bo = function(t19, e2) {
  var n2 = e2.s + e2.c * t19;
  e2.set(e2.t, e2.p, ~~(n2 + (n2 < 0 ? -0.5 : 0.5)) + e2.u, e2);
}, wo = function(t19, e2) {
  return e2.set(e2.t, e2.p, t19 ? e2.e : e2.b, e2);
}, xo = function(t19, e2) {
  return e2.set(e2.t, e2.p, 1 !== t19 ? e2.b : e2.e, e2);
}, To = function(t19, e2, n2) {
  return t19.style[e2] = n2;
}, Co = function(t19, e2, n2) {
  return t19.style.setProperty(e2, n2);
}, Po = function(t19, e2, n2) {
  return t19._gsap[e2] = n2;
}, So = function(t19, e2, n2) {
  return t19._gsap.scaleX = t19._gsap.scaleY = n2;
}, Eo = function(t19, e2, n2, r2, i2) {
  var o2 = t19._gsap;
  o2.scaleX = o2.scaleY = n2, o2.renderTransform(i2, o2);
}, Oo = function(t19, e2, n2, r2, i2) {
  var o2 = t19._gsap;
  o2[e2] = n2, o2.renderTransform(i2, o2);
}, ko = "transform", Mo = ko + "Origin", Ao = function t13(e2, n2) {
  var r2 = this, i2 = this.target, o2 = i2.style, s2 = i2._gsap;
  if (e2 in uo && o2) {
    if (this.tfm = this.tfm || {}, "transform" === e2) return vo.transform.split(",").forEach(function(e3) {
      return t13.call(r2, e3, n2);
    });
    if (~(e2 = vo[e2] || e2).indexOf(",") ? e2.split(",").forEach(function(t19) {
      return r2.tfm[t19] = Go(i2, t19);
    }) : this.tfm[e2] = s2.x ? s2[e2] : Go(i2, e2), e2 === Mo && (this.tfm.zOrigin = s2.zOrigin), this.props.indexOf(ko) >= 0) return;
    s2.svg && (this.svgo = i2.getAttribute("data-svg-origin"), this.props.push(Mo, n2, "")), e2 = ko;
  }
  (o2 || n2) && this.props.push(e2, n2, o2[e2]);
}, Ro = function(t19) {
  t19.translate && (t19.removeProperty("translate"), t19.removeProperty("scale"), t19.removeProperty("rotate"));
}, Do = function() {
  var t19, e2, n2 = this.props, r2 = this.target, i2 = r2.style, o2 = r2._gsap;
  for (t19 = 0; t19 < n2.length; t19 += 3) n2[t19 + 1] ? 2 === n2[t19 + 1] ? r2[n2[t19]](n2[t19 + 2]) : r2[n2[t19]] = n2[t19 + 2] : n2[t19 + 2] ? i2[n2[t19]] = n2[t19 + 2] : i2.removeProperty("--" === n2[t19].substr(0, 2) ? n2[t19] : n2[t19].replace(fo, "-$1").toLowerCase());
  if (this.tfm) {
    for (e2 in this.tfm) o2[e2] = this.tfm[e2];
    o2.svg && (o2.renderTransform(), r2.setAttribute("data-svg-origin", this.svgo || "")), (t19 = so()) && t19.isStart || i2[ko] || (Ro(i2), o2.zOrigin && i2[Mo] && (i2[Mo] += " " + o2.zOrigin + "px", o2.zOrigin = 0, o2.renderTransform()), o2.uncache = 1);
  }
}, Lo = function(t19, e2) {
  var n2 = { target: t19, props: [], revert: Do, save: Ao };
  return t19._gsap || Qi.core.getCache(t19), e2 && t19.style && t19.nodeType && e2.split(",").forEach(function(t20) {
    return n2.save(t20);
  }), n2;
}, jo = function(t19, e2) {
  var n2 = eo.createElementNS ? eo.createElementNS((e2 || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t19) : eo.createElement(t19);
  return n2 && n2.style ? n2 : eo.createElement(t19);
}, No = function t14(e2, n2, r2) {
  var i2 = getComputedStyle(e2);
  return i2[n2] || i2.getPropertyValue(n2.replace(fo, "-$1").toLowerCase()) || i2.getPropertyValue(n2) || !r2 && t14(e2, Bo(n2) || n2, 1) || "";
}, Vo = "O,Moz,ms,Ms,Webkit".split(","), Bo = function(t19, e2, n2) {
  var r2 = (e2 || io).style, i2 = 5;
  if (t19 in r2 && !n2) return t19;
  for (t19 = t19.charAt(0).toUpperCase() + t19.substr(1); i2-- && !(Vo[i2] + t19 in r2); ) ;
  return i2 < 0 ? null : (3 === i2 ? "ms" : i2 >= 0 ? Vo[i2] : "") + t19;
}, Io = function() {
  "undefined" != typeof window && window.document && (to = window, eo = to.document, no = eo.documentElement, io = jo("div") || { style: {} }, jo("div"), ko = Bo(ko), Mo = ko + "Origin", io.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", ao = !!Bo("perspective"), so = Qi.core.reverting, ro = 1);
}, Fo = function(t19) {
  var e2, n2 = t19.ownerSVGElement, r2 = jo("svg", n2 && n2.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i2 = t19.cloneNode(true);
  i2.style.display = "block", r2.appendChild(i2), no.appendChild(r2);
  try {
    e2 = i2.getBBox();
  } catch (t20) {
  }
  return r2.removeChild(i2), no.removeChild(r2), e2;
}, zo = function(t19, e2) {
  for (var n2 = e2.length; n2--; ) if (t19.hasAttribute(e2[n2])) return t19.getAttribute(e2[n2]);
}, Uo = function(t19) {
  var e2, n2;
  try {
    e2 = t19.getBBox();
  } catch (r2) {
    e2 = Fo(t19), n2 = 1;
  }
  return e2 && (e2.width || e2.height) || n2 || (e2 = Fo(t19)), !e2 || e2.width || e2.x || e2.y ? e2 : { x: +zo(t19, ["x", "cx", "x1"]) || 0, y: +zo(t19, ["y", "cy", "y1"]) || 0, width: 0, height: 0 };
}, Wo = function(t19) {
  return !(!t19.getCTM || t19.parentNode && !t19.ownerSVGElement || !Uo(t19));
}, Ho = function(t19, e2) {
  if (e2) {
    var n2, r2 = t19.style;
    e2 in uo && e2 !== Mo && (e2 = ko), r2.removeProperty ? ("ms" !== (n2 = e2.substr(0, 2)) && "webkit" !== e2.substr(0, 6) || (e2 = "-" + e2), r2.removeProperty("--" === n2 ? e2 : e2.replace(fo, "-$1").toLowerCase())) : r2.removeAttribute(e2);
  }
}, $o = function(t19, e2, n2, r2, i2, o2) {
  var s2 = new Fi(t19._pt, e2, n2, 0, 1, o2 ? xo : wo);
  return t19._pt = s2, s2.b = r2, s2.e = i2, t19._props.push(n2), s2;
}, Yo = { deg: 1, rad: 1, turn: 1 }, Xo = { grid: 1, flex: 1 }, qo = function t15(e2, n2, r2, i2) {
  var o2, s2, a2, u2, l2 = parseFloat(r2) || 0, c2 = (r2 + "").trim().substr((l2 + "").length) || "px", h2 = io.style, f2 = po.test(n2), d2 = "svg" === e2.tagName.toLowerCase(), p2 = (d2 ? "client" : "offset") + (f2 ? "Width" : "Height"), m2 = 100, v2 = "px" === i2, g2 = "%" === i2;
  if (i2 === c2 || !l2 || Yo[i2] || Yo[c2]) return l2;
  if ("px" !== c2 && !v2 && (l2 = t15(e2, n2, r2, "px")), u2 = e2.getCTM && Wo(e2), (g2 || "%" === c2) && (uo[n2] || ~n2.indexOf("adius"))) return o2 = u2 ? e2.getBBox()[f2 ? "width" : "height"] : e2[p2], Wn(g2 ? l2 / o2 * m2 : l2 / 100 * o2);
  if (h2[f2 ? "width" : "height"] = m2 + (v2 ? c2 : i2), s2 = "rem" !== i2 && ~n2.indexOf("adius") || "em" === i2 && e2.appendChild && !d2 ? e2 : e2.parentNode, u2 && (s2 = (e2.ownerSVGElement || {}).parentNode), s2 && s2 !== eo && s2.appendChild || (s2 = eo.body), (a2 = s2._gsap) && g2 && a2.width && f2 && a2.time === ti.time && !a2.uncache) return Wn(l2 / a2.width * m2);
  if (!g2 || "height" !== n2 && "width" !== n2) (g2 || "%" === c2) && !Xo[No(s2, "display")] && (h2.position = No(e2, "position")), s2 === e2 && (h2.position = "static"), s2.appendChild(io), o2 = io[p2], s2.removeChild(io), h2.position = "absolute";
  else {
    var y2 = e2.style[n2];
    e2.style[n2] = m2 + i2, o2 = e2[p2], y2 ? e2.style[n2] = y2 : Ho(e2, n2);
  }
  return f2 && g2 && ((a2 = Fn(s2)).time = ti.time, a2.width = s2[p2]), Wn(v2 ? o2 * l2 / m2 : o2 && l2 ? m2 / o2 * l2 : 0);
}, Go = function(t19, e2, n2, r2) {
  var i2;
  return ro || Io(), e2 in vo && "transform" !== e2 && ~(e2 = vo[e2]).indexOf(",") && (e2 = e2.split(",")[0]), uo[e2] && "transform" !== e2 ? (i2 = as(t19, r2), i2 = "transformOrigin" !== e2 ? i2[e2] : i2.svg ? i2.origin : us(No(t19, Mo)) + " " + i2.zOrigin + "px") : (!(i2 = t19.style[e2]) || "auto" === i2 || r2 || ~(i2 + "").indexOf("calc(")) && (i2 = ts[e2] && ts[e2](t19, e2, n2) || No(t19, e2) || zn(t19, e2) || ("opacity" === e2 ? 1 : 0)), n2 && !~(i2 + "").trim().indexOf(" ") ? qo(t19, e2, i2, n2) + n2 : i2;
}, Ko = function(t19, e2, n2, r2) {
  if (!n2 || "none" === n2) {
    var i2 = Bo(e2, t19, 1), o2 = i2 && No(t19, i2, 1);
    o2 && o2 !== n2 ? (e2 = i2, n2 = o2) : "borderColor" === e2 && (n2 = No(t19, "borderTopColor"));
  }
  var s2, a2, u2, l2, c2, h2, f2, d2, p2, m2, v2, g2 = new Fi(this._pt, t19.style, e2, 0, 1, Li), y2 = 0, _2 = 0;
  if (g2.b = n2, g2.e = r2, n2 += "", "auto" === (r2 += "") && (h2 = t19.style[e2], t19.style[e2] = r2, r2 = No(t19, e2) || r2, h2 ? t19.style[e2] = h2 : Ho(t19, e2)), Qr(s2 = [n2, r2]), r2 = s2[1], u2 = (n2 = s2[0]).match(vn) || [], (r2.match(vn) || []).length) {
    for (; a2 = vn.exec(r2); ) f2 = a2[0], p2 = r2.substring(y2, a2.index), c2 ? c2 = (c2 + 1) % 5 : "rgba(" !== p2.substr(-5) && "hsla(" !== p2.substr(-5) || (c2 = 1), f2 !== (h2 = u2[_2++] || "") && (l2 = parseFloat(h2) || 0, v2 = h2.substr((l2 + "").length), "=" === f2.charAt(1) && (f2 = $n(l2, f2) + v2), d2 = parseFloat(f2), m2 = f2.substr((d2 + "").length), y2 = vn.lastIndex - m2.length, m2 || (m2 = m2 || Xe.units[e2] || v2, y2 === r2.length && (r2 += m2, g2.e += m2)), v2 !== m2 && (l2 = qo(t19, e2, h2, m2) || 0), g2._pt = { _next: g2._pt, p: p2 || 1 === _2 ? p2 : ",", s: l2, c: d2 - l2, m: c2 && c2 < 4 || "zIndex" === e2 ? Math.round : 0 });
    g2.c = y2 < r2.length ? r2.substring(y2, r2.length) : "";
  } else g2.r = "display" === e2 && "none" === r2 ? xo : wo;
  return yn.test(r2) && (g2.e = 0), this._pt = g2, g2;
}, Zo = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" }, Jo = function(t19) {
  var e2 = t19.split(" "), n2 = e2[0], r2 = e2[1] || "50%";
  return "top" !== n2 && "bottom" !== n2 && "left" !== r2 && "right" !== r2 || (t19 = n2, n2 = r2, r2 = t19), e2[0] = Zo[n2] || n2, e2[1] = Zo[r2] || r2, e2.join(" ");
}, Qo = function(t19, e2) {
  if (e2.tween && e2.tween._time === e2.tween._dur) {
    var n2, r2, i2, o2 = e2.t, s2 = o2.style, a2 = e2.u, u2 = o2._gsap;
    if ("all" === a2 || true === a2) s2.cssText = "", r2 = 1;
    else for (i2 = (a2 = a2.split(",")).length; --i2 > -1; ) n2 = a2[i2], uo[n2] && (r2 = 1, n2 = "transformOrigin" === n2 ? Mo : ko), Ho(o2, n2);
    r2 && (Ho(o2, ko), u2 && (u2.svg && o2.removeAttribute("transform"), s2.scale = s2.rotate = s2.translate = "none", as(o2, 1), u2.uncache = 1, Ro(s2)));
  }
}, ts = { clearProps: function(t19, e2, n2, r2, i2) {
  if ("isFromStart" !== i2.data) {
    var o2 = t19._pt = new Fi(t19._pt, e2, n2, 0, 0, Qo);
    return o2.u = r2, o2.pr = -10, o2.tween = i2, t19._props.push(n2), 1;
  }
} }, es = [1, 0, 0, 1, 0, 0], ns = {}, rs = function(t19) {
  return "matrix(1, 0, 0, 1, 0, 0)" === t19 || "none" === t19 || !t19;
}, is = function(t19) {
  var e2 = No(t19, ko);
  return rs(e2) ? es : e2.substr(7).match(mn).map(Wn);
}, os = function(t19, e2) {
  var n2, r2, i2, o2, s2 = t19._gsap || Fn(t19), a2 = t19.style, u2 = is(t19);
  return s2.svg && t19.getAttribute("transform") ? "1,0,0,1,0,0" === (u2 = [(i2 = t19.transform.baseVal.consolidate().matrix).a, i2.b, i2.c, i2.d, i2.e, i2.f]).join(",") ? es : u2 : (u2 !== es || t19.offsetParent || t19 === no || s2.svg || (i2 = a2.display, a2.display = "block", (n2 = t19.parentNode) && (t19.offsetParent || t19.getBoundingClientRect().width) || (o2 = 1, r2 = t19.nextElementSibling, no.appendChild(t19)), u2 = is(t19), i2 ? a2.display = i2 : Ho(t19, "display"), o2 && (r2 ? n2.insertBefore(t19, r2) : n2 ? n2.appendChild(t19) : no.removeChild(t19))), e2 && u2.length > 6 ? [u2[0], u2[1], u2[4], u2[5], u2[12], u2[13]] : u2);
}, ss = function(t19, e2, n2, r2, i2, o2) {
  var s2, a2, u2, l2 = t19._gsap, c2 = i2 || os(t19, true), h2 = l2.xOrigin || 0, f2 = l2.yOrigin || 0, d2 = l2.xOffset || 0, p2 = l2.yOffset || 0, m2 = c2[0], v2 = c2[1], g2 = c2[2], y2 = c2[3], _2 = c2[4], b2 = c2[5], w2 = e2.split(" "), x2 = parseFloat(w2[0]) || 0, T2 = parseFloat(w2[1]) || 0;
  n2 ? c2 !== es && (a2 = m2 * y2 - v2 * g2) && (u2 = x2 * (-v2 / a2) + T2 * (m2 / a2) - (m2 * b2 - v2 * _2) / a2, x2 = x2 * (y2 / a2) + T2 * (-g2 / a2) + (g2 * b2 - y2 * _2) / a2, T2 = u2) : (x2 = (s2 = Uo(t19)).x + (~w2[0].indexOf("%") ? x2 / 100 * s2.width : x2), T2 = s2.y + (~(w2[1] || w2[0]).indexOf("%") ? T2 / 100 * s2.height : T2)), r2 || false !== r2 && l2.smooth ? (_2 = x2 - h2, b2 = T2 - f2, l2.xOffset = d2 + (_2 * m2 + b2 * g2) - _2, l2.yOffset = p2 + (_2 * v2 + b2 * y2) - b2) : l2.xOffset = l2.yOffset = 0, l2.xOrigin = x2, l2.yOrigin = T2, l2.smooth = !!r2, l2.origin = e2, l2.originIsAbsolute = !!n2, t19.style[Mo] = "0px 0px", o2 && ($o(o2, l2, "xOrigin", h2, x2), $o(o2, l2, "yOrigin", f2, T2), $o(o2, l2, "xOffset", d2, l2.xOffset), $o(o2, l2, "yOffset", p2, l2.yOffset)), t19.setAttribute("data-svg-origin", x2 + " " + T2);
}, as = function(t19, e2) {
  var n2 = t19._gsap || new di(t19);
  if ("x" in n2 && !e2 && !n2.uncache) return n2;
  var r2, i2, o2, s2, a2, u2, l2, c2, h2, f2, d2, p2, m2, v2, g2, y2, _2, b2, w2, x2, T2, C2, P2, S2, E2, O2, k2, M2, A2, R2, D2, L2, j2 = t19.style, N2 = n2.scaleX < 0, V2 = "px", B2 = "deg", I2 = getComputedStyle(t19), F2 = No(t19, Mo) || "0";
  return r2 = i2 = o2 = u2 = l2 = c2 = h2 = f2 = d2 = 0, s2 = a2 = 1, n2.svg = !(!t19.getCTM || !Wo(t19)), I2.translate && ("none" === I2.translate && "none" === I2.scale && "none" === I2.rotate || (j2[ko] = ("none" !== I2.translate ? "translate3d(" + (I2.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== I2.rotate ? "rotate(" + I2.rotate + ") " : "") + ("none" !== I2.scale ? "scale(" + I2.scale.split(" ").join(",") + ") " : "") + ("none" !== I2[ko] ? I2[ko] : "")), j2.scale = j2.rotate = j2.translate = "none"), v2 = os(t19, n2.svg), n2.svg && (n2.uncache ? (E2 = t19.getBBox(), F2 = n2.xOrigin - E2.x + "px " + (n2.yOrigin - E2.y) + "px", S2 = "") : S2 = !e2 && t19.getAttribute("data-svg-origin"), ss(t19, S2 || F2, !!S2 || n2.originIsAbsolute, false !== n2.smooth, v2)), p2 = n2.xOrigin || 0, m2 = n2.yOrigin || 0, v2 !== es && (b2 = v2[0], w2 = v2[1], x2 = v2[2], T2 = v2[3], r2 = C2 = v2[4], i2 = P2 = v2[5], 6 === v2.length ? (s2 = Math.sqrt(b2 * b2 + w2 * w2), a2 = Math.sqrt(T2 * T2 + x2 * x2), u2 = b2 || w2 ? ho(w2, b2) * lo : 0, (h2 = x2 || T2 ? ho(x2, T2) * lo + u2 : 0) && (a2 *= Math.abs(Math.cos(h2 * co))), n2.svg && (r2 -= p2 - (p2 * b2 + m2 * x2), i2 -= m2 - (p2 * w2 + m2 * T2))) : (L2 = v2[6], R2 = v2[7], k2 = v2[8], M2 = v2[9], A2 = v2[10], D2 = v2[11], r2 = v2[12], i2 = v2[13], o2 = v2[14], l2 = (g2 = ho(L2, A2)) * lo, g2 && (S2 = C2 * (y2 = Math.cos(-g2)) + k2 * (_2 = Math.sin(-g2)), E2 = P2 * y2 + M2 * _2, O2 = L2 * y2 + A2 * _2, k2 = C2 * -_2 + k2 * y2, M2 = P2 * -_2 + M2 * y2, A2 = L2 * -_2 + A2 * y2, D2 = R2 * -_2 + D2 * y2, C2 = S2, P2 = E2, L2 = O2), c2 = (g2 = ho(-x2, A2)) * lo, g2 && (y2 = Math.cos(-g2), D2 = T2 * (_2 = Math.sin(-g2)) + D2 * y2, b2 = S2 = b2 * y2 - k2 * _2, w2 = E2 = w2 * y2 - M2 * _2, x2 = O2 = x2 * y2 - A2 * _2), u2 = (g2 = ho(w2, b2)) * lo, g2 && (S2 = b2 * (y2 = Math.cos(g2)) + w2 * (_2 = Math.sin(g2)), E2 = C2 * y2 + P2 * _2, w2 = w2 * y2 - b2 * _2, P2 = P2 * y2 - C2 * _2, b2 = S2, C2 = E2), l2 && Math.abs(l2) + Math.abs(u2) > 359.9 && (l2 = u2 = 0, c2 = 180 - c2), s2 = Wn(Math.sqrt(b2 * b2 + w2 * w2 + x2 * x2)), a2 = Wn(Math.sqrt(P2 * P2 + L2 * L2)), g2 = ho(C2, P2), h2 = Math.abs(g2) > 2e-4 ? g2 * lo : 0, d2 = D2 ? 1 / (D2 < 0 ? -D2 : D2) : 0), n2.svg && (S2 = t19.getAttribute("transform"), n2.forceCSS = t19.setAttribute("transform", "") || !rs(No(t19, ko)), S2 && t19.setAttribute("transform", S2))), Math.abs(h2) > 90 && Math.abs(h2) < 270 && (N2 ? (s2 *= -1, h2 += u2 <= 0 ? 180 : -180, u2 += u2 <= 0 ? 180 : -180) : (a2 *= -1, h2 += h2 <= 0 ? 180 : -180)), e2 = e2 || n2.uncache, n2.x = r2 - ((n2.xPercent = r2 && (!e2 && n2.xPercent || (Math.round(t19.offsetWidth / 2) === Math.round(-r2) ? -50 : 0))) ? t19.offsetWidth * n2.xPercent / 100 : 0) + V2, n2.y = i2 - ((n2.yPercent = i2 && (!e2 && n2.yPercent || (Math.round(t19.offsetHeight / 2) === Math.round(-i2) ? -50 : 0))) ? t19.offsetHeight * n2.yPercent / 100 : 0) + V2, n2.z = o2 + V2, n2.scaleX = Wn(s2), n2.scaleY = Wn(a2), n2.rotation = Wn(u2) + B2, n2.rotationX = Wn(l2) + B2, n2.rotationY = Wn(c2) + B2, n2.skewX = h2 + B2, n2.skewY = f2 + B2, n2.transformPerspective = d2 + V2, (n2.zOrigin = parseFloat(F2.split(" ")[2]) || !e2 && n2.zOrigin || 0) && (j2[Mo] = us(F2)), n2.xOffset = n2.yOffset = 0, n2.force3D = Xe.force3D, n2.renderTransform = n2.svg ? ms : ao ? ps : cs, n2.uncache = 0, n2;
}, us = function(t19) {
  return (t19 = t19.split(" "))[0] + " " + t19[1];
}, ls = function(t19, e2, n2) {
  var r2 = Sr(e2);
  return Wn(parseFloat(e2) + parseFloat(qo(t19, "x", n2 + "px", r2))) + r2;
}, cs = function(t19, e2) {
  e2.z = "0px", e2.rotationY = e2.rotationX = "0deg", e2.force3D = 0, ps(t19, e2);
}, hs = "0deg", fs = "0px", ds = ") ", ps = function(t19, e2) {
  var n2 = e2 || this, r2 = n2.xPercent, i2 = n2.yPercent, o2 = n2.x, s2 = n2.y, a2 = n2.z, u2 = n2.rotation, l2 = n2.rotationY, c2 = n2.rotationX, h2 = n2.skewX, f2 = n2.skewY, d2 = n2.scaleX, p2 = n2.scaleY, m2 = n2.transformPerspective, v2 = n2.force3D, g2 = n2.target, y2 = n2.zOrigin, _2 = "", b2 = "auto" === v2 && t19 && 1 !== t19 || true === v2;
  if (y2 && (c2 !== hs || l2 !== hs)) {
    var w2, x2 = parseFloat(l2) * co, T2 = Math.sin(x2), C2 = Math.cos(x2);
    x2 = parseFloat(c2) * co, w2 = Math.cos(x2), o2 = ls(g2, o2, T2 * w2 * -y2), s2 = ls(g2, s2, -Math.sin(x2) * -y2), a2 = ls(g2, a2, C2 * w2 * -y2 + y2);
  }
  m2 !== fs && (_2 += "perspective(" + m2 + ds), (r2 || i2) && (_2 += "translate(" + r2 + "%, " + i2 + "%) "), (b2 || o2 !== fs || s2 !== fs || a2 !== fs) && (_2 += a2 !== fs || b2 ? "translate3d(" + o2 + ", " + s2 + ", " + a2 + ") " : "translate(" + o2 + ", " + s2 + ds), u2 !== hs && (_2 += "rotate(" + u2 + ds), l2 !== hs && (_2 += "rotateY(" + l2 + ds), c2 !== hs && (_2 += "rotateX(" + c2 + ds), h2 === hs && f2 === hs || (_2 += "skew(" + h2 + ", " + f2 + ds), 1 === d2 && 1 === p2 || (_2 += "scale(" + d2 + ", " + p2 + ds), g2.style[ko] = _2 || "translate(0, 0)";
}, ms = function(t19, e2) {
  var n2, r2, i2, o2, s2, a2 = e2 || this, u2 = a2.xPercent, l2 = a2.yPercent, c2 = a2.x, h2 = a2.y, f2 = a2.rotation, d2 = a2.skewX, p2 = a2.skewY, m2 = a2.scaleX, v2 = a2.scaleY, g2 = a2.target, y2 = a2.xOrigin, _2 = a2.yOrigin, b2 = a2.xOffset, w2 = a2.yOffset, x2 = a2.forceCSS, T2 = parseFloat(c2), C2 = parseFloat(h2);
  f2 = parseFloat(f2), d2 = parseFloat(d2), (p2 = parseFloat(p2)) && (d2 += p2 = parseFloat(p2), f2 += p2), f2 || d2 ? (f2 *= co, d2 *= co, n2 = Math.cos(f2) * m2, r2 = Math.sin(f2) * m2, i2 = Math.sin(f2 - d2) * -v2, o2 = Math.cos(f2 - d2) * v2, d2 && (p2 *= co, s2 = Math.tan(d2 - p2), i2 *= s2 = Math.sqrt(1 + s2 * s2), o2 *= s2, p2 && (s2 = Math.tan(p2), n2 *= s2 = Math.sqrt(1 + s2 * s2), r2 *= s2)), n2 = Wn(n2), r2 = Wn(r2), i2 = Wn(i2), o2 = Wn(o2)) : (n2 = m2, o2 = v2, r2 = i2 = 0), (T2 && !~(c2 + "").indexOf("px") || C2 && !~(h2 + "").indexOf("px")) && (T2 = qo(g2, "x", c2, "px"), C2 = qo(g2, "y", h2, "px")), (y2 || _2 || b2 || w2) && (T2 = Wn(T2 + y2 - (y2 * n2 + _2 * i2) + b2), C2 = Wn(C2 + _2 - (y2 * r2 + _2 * o2) + w2)), (u2 || l2) && (s2 = g2.getBBox(), T2 = Wn(T2 + u2 / 100 * s2.width), C2 = Wn(C2 + l2 / 100 * s2.height)), s2 = "matrix(" + n2 + "," + r2 + "," + i2 + "," + o2 + "," + T2 + "," + C2 + ")", g2.setAttribute("transform", s2), x2 && (g2.style[ko] = s2);
}, vs = function(t19, e2, n2, r2, i2) {
  var o2, s2, a2 = 360, u2 = rn(i2), l2 = parseFloat(i2) * (u2 && ~i2.indexOf("rad") ? lo : 1) - r2, c2 = r2 + l2 + "deg";
  return u2 && ("short" === (o2 = i2.split("_")[1]) && (l2 %= a2) !== l2 % 180 && (l2 += l2 < 0 ? a2 : -360), "cw" === o2 && l2 < 0 ? l2 = (l2 + 36e9) % a2 - ~~(l2 / a2) * a2 : "ccw" === o2 && l2 > 0 && (l2 = (l2 - 36e9) % a2 - ~~(l2 / a2) * a2)), t19._pt = s2 = new Fi(t19._pt, e2, n2, r2, l2, yo), s2.e = c2, s2.u = "deg", t19._props.push(n2), s2;
}, gs = function(t19, e2) {
  for (var n2 in e2) t19[n2] = e2[n2];
  return t19;
}, ys = function(t19, e2, n2) {
  var r2, i2, o2, s2, a2, u2, l2, c2 = gs({}, n2._gsap), h2 = n2.style;
  for (i2 in c2.svg ? (o2 = n2.getAttribute("transform"), n2.setAttribute("transform", ""), h2[ko] = e2, r2 = as(n2, 1), Ho(n2, ko), n2.setAttribute("transform", o2)) : (o2 = getComputedStyle(n2)[ko], h2[ko] = e2, r2 = as(n2, 1), h2[ko] = o2), uo) (o2 = c2[i2]) !== (s2 = r2[i2]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i2) < 0 && (a2 = Sr(o2) !== (l2 = Sr(s2)) ? qo(n2, i2, o2, l2) : parseFloat(o2), u2 = parseFloat(s2), t19._pt = new Fi(t19._pt, r2, i2, a2, u2 - a2, go), t19._pt.u = l2 || 0, t19._props.push(i2));
  gs(r2, c2);
};
Un("padding,margin,Width,Radius", function(t19, e2) {
  var n2 = "Top", r2 = "Right", i2 = "Bottom", o2 = "Left", s2 = (e2 < 3 ? [n2, r2, i2, o2] : [n2 + o2, n2 + r2, i2 + r2, i2 + o2]).map(function(n3) {
    return e2 < 2 ? t19 + n3 : "border" + n3 + t19;
  });
  ts[e2 > 1 ? "border" + t19 : t19] = function(t20, e3, n3, r3, i3) {
    var o3, a2;
    if (arguments.length < 4) return o3 = s2.map(function(e4) {
      return Go(t20, e4, n3);
    }), 5 === (a2 = o3.join(" ")).split(o3[0]).length ? o3[0] : a2;
    o3 = (r3 + "").split(" "), a2 = {}, s2.forEach(function(t21, e4) {
      return a2[t21] = o3[e4] = o3[e4] || o3[(e4 - 1) / 2 | 0];
    }), t20.init(e3, a2, i3);
  };
});
var _s, bs, ws, xs = { name: "css", register: Io, targetTest: function(t19) {
  return t19.style && t19.nodeType;
}, init: function(t19, e2, n2, r2, i2) {
  var o2, s2, a2, u2, l2, c2, h2, f2, d2, p2, m2, v2, g2, y2, _2, b2, w2 = this._props, x2 = t19.style, T2 = n2.vars.startAt;
  for (h2 in ro || Io(), this.styles = this.styles || Lo(t19), b2 = this.styles.props, this.tween = n2, e2) if ("autoRound" !== h2 && (s2 = e2[h2], !Ln[h2] || !bi(h2, e2, n2, r2, t19, i2))) {
    if (l2 = typeof s2, c2 = ts[h2], "function" === l2 && (l2 = typeof (s2 = s2.call(n2, r2, t19, i2))), "string" === l2 && ~s2.indexOf("random(") && (s2 = Br(s2)), c2) c2(this, t19, h2, s2, n2) && (_2 = 1);
    else if ("--" === h2.substr(0, 2)) o2 = (getComputedStyle(t19).getPropertyValue(h2) + "").trim(), s2 += "", Zr.lastIndex = 0, Zr.test(o2) || (f2 = Sr(o2), d2 = Sr(s2)), d2 ? f2 !== d2 && (o2 = qo(t19, h2, o2, d2) + d2) : f2 && (s2 += f2), this.add(x2, "setProperty", o2, s2, r2, i2, 0, 0, h2), w2.push(h2), b2.push(h2, 0, x2[h2]);
    else if ("undefined" !== l2) {
      if (T2 && h2 in T2 ? (o2 = "function" == typeof T2[h2] ? T2[h2].call(n2, r2, t19, i2) : T2[h2], rn(o2) && ~o2.indexOf("random(") && (o2 = Br(o2)), Sr(o2 + "") || "auto" === o2 || (o2 += Xe.units[h2] || Sr(Go(t19, h2)) || ""), "=" === (o2 + "").charAt(1) && (o2 = Go(t19, h2))) : o2 = Go(t19, h2), u2 = parseFloat(o2), (p2 = "string" === l2 && "=" === s2.charAt(1) && s2.substr(0, 2)) && (s2 = s2.substr(2)), a2 = parseFloat(s2), h2 in vo && ("autoAlpha" === h2 && (1 === u2 && "hidden" === Go(t19, "visibility") && a2 && (u2 = 0), b2.push("visibility", 0, x2.visibility), $o(this, x2, "visibility", u2 ? "inherit" : "hidden", a2 ? "inherit" : "hidden", !a2)), "scale" !== h2 && "transform" !== h2 && ~(h2 = vo[h2]).indexOf(",") && (h2 = h2.split(",")[0])), m2 = h2 in uo) if (this.styles.save(h2), v2 || ((g2 = t19._gsap).renderTransform && !e2.parseTransform || as(t19, e2.parseTransform), y2 = false !== e2.smoothOrigin && g2.smooth, (v2 = this._pt = new Fi(this._pt, x2, ko, 0, 1, g2.renderTransform, g2, 0, -1)).dep = 1), "scale" === h2) this._pt = new Fi(this._pt, g2, "scaleY", g2.scaleY, (p2 ? $n(g2.scaleY, p2 + a2) : a2) - g2.scaleY || 0, go), this._pt.u = 0, w2.push("scaleY", h2), h2 += "X";
      else {
        if ("transformOrigin" === h2) {
          b2.push(Mo, 0, x2[Mo]), s2 = Jo(s2), g2.svg ? ss(t19, s2, 0, y2, 0, this) : ((d2 = parseFloat(s2.split(" ")[2]) || 0) !== g2.zOrigin && $o(this, g2, "zOrigin", g2.zOrigin, d2), $o(this, x2, h2, us(o2), us(s2)));
          continue;
        }
        if ("svgOrigin" === h2) {
          ss(t19, s2, 1, y2, 0, this);
          continue;
        }
        if (h2 in ns) {
          vs(this, g2, h2, u2, p2 ? $n(u2, p2 + s2) : s2);
          continue;
        }
        if ("smoothOrigin" === h2) {
          $o(this, g2, "smooth", g2.smooth, s2);
          continue;
        }
        if ("force3D" === h2) {
          g2[h2] = s2;
          continue;
        }
        if ("transform" === h2) {
          ys(this, s2, t19);
          continue;
        }
      }
      else h2 in x2 || (h2 = Bo(h2) || h2);
      if (m2 || (a2 || 0 === a2) && (u2 || 0 === u2) && !mo.test(s2) && h2 in x2) a2 || (a2 = 0), (f2 = (o2 + "").substr((u2 + "").length)) !== (d2 = Sr(s2) || (h2 in Xe.units ? Xe.units[h2] : f2)) && (u2 = qo(t19, h2, o2, d2)), this._pt = new Fi(this._pt, m2 ? g2 : x2, h2, u2, (p2 ? $n(u2, p2 + a2) : a2) - u2, m2 || "px" !== d2 && "zIndex" !== h2 || false === e2.autoRound ? go : bo), this._pt.u = d2 || 0, f2 !== d2 && "%" !== d2 && (this._pt.b = o2, this._pt.r = _o);
      else if (h2 in x2) Ko.call(this, t19, h2, o2, p2 ? p2 + s2 : s2);
      else if (h2 in t19) this.add(t19, h2, o2 || t19[h2], p2 ? p2 + s2 : s2, r2, i2);
      else if ("parseTransform" !== h2) {
        Cn(h2, s2);
        continue;
      }
      m2 || (h2 in x2 ? b2.push(h2, 0, x2[h2]) : "function" == typeof t19[h2] ? b2.push(h2, 2, t19[h2]()) : b2.push(h2, 1, o2 || t19[h2])), w2.push(h2);
    }
  }
  _2 && Ii(this);
}, render: function(t19, e2) {
  if (e2.tween._time || !so()) for (var n2 = e2._pt; n2; ) n2.r(t19, n2.d), n2 = n2._next;
  else e2.styles.revert();
}, get: Go, aliases: vo, getSetter: function(t19, e2, n2) {
  var r2 = vo[e2];
  return r2 && r2.indexOf(",") < 0 && (e2 = r2), e2 in uo && e2 !== Mo && (t19._gsap.x || Go(t19, "x")) ? n2 && oo === n2 ? "scale" === e2 ? So : Po : (oo = n2 || {}) && ("scale" === e2 ? Eo : Oo) : t19.style && !an(t19.style[e2]) ? To : ~e2.indexOf("-") ? Co : Ai(t19, e2);
}, core: { _removeProperty: Ho, _getMatrix: os } };
Qi.utils.checkPrefix = Bo, Qi.core.getStyleSaver = Lo, ws = Un((_s = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (bs = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t19) {
  uo[t19] = 1;
}), Un(bs, function(t19) {
  Xe.units[t19] = "deg", ns[t19] = 1;
}), vo[ws[13]] = _s + "," + bs, Un("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t19) {
  var e2 = t19.split(":");
  vo[e2[1]] = ws[e2[0]];
}), Un("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t19) {
  Xe.units[t19] = "px";
}), Qi.registerPlugin(xs);
var Ts = Qi.registerPlugin(xs) || Qi;
Ts.core.Tween;
/*!
 * @gsap/react 2.1.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
let Cs = "undefined" != typeof document ? lt : ut, Ps = (t19) => t19 && !Array.isArray(t19) && "object" == typeof t19, Ss = [], Es = {}, Os = Ts;
const ks = (t19, e2 = Ss) => {
  let n2 = Es;
  Ps(t19) ? (n2 = t19, t19 = null, e2 = "dependencies" in n2 ? n2.dependencies : Ss) : Ps(e2) && (n2 = e2, e2 = "dependencies" in n2 ? n2.dependencies : Ss), t19 && "function" != typeof t19 && console.warn("First parameter must be a function or config object");
  const { scope: r2, revertOnUpdate: i2 } = n2, o2 = ct(false), s2 = ct(Os.context(() => {
  }, r2)), a2 = ct((t20) => s2.current.add(null, t20)), u2 = e2 && e2.length && !i2;
  return u2 && Cs(() => (o2.current = true, () => s2.current.revert()), Ss), Cs(() => {
    if (t19 && s2.current.add(t19, r2), !u2 || !o2.current) return () => s2.current.revert();
  }, e2), { context: s2.current, contextSafe: a2.current };
};
function Ms(t19) {
  const [e2, n2] = st(() => window.matchMedia(t19).matches);
  return ut(() => {
    const e3 = window.matchMedia(t19);
    function r2(t20) {
      n2(t20.matches);
    }
    return e3.addEventListener("change", r2), () => {
      e3.removeEventListener("change", r2);
    };
  }, [t19]), e2;
}
ks.register = (t19) => {
  Os = t19;
}, ks.headless = true;
const As = /* @__PURE__ */ new WeakMap(), Rs = {};
function Ds(t19) {
  !function() {
    const t20 = Ls();
    t20 && As.delete(Rs);
  }(), As.set(Rs, t19);
}
function Ls() {
  return As.get(Rs);
}
const js = /* @__PURE__ */ new WeakMap(), Ns = {};
function Vs() {
  return js.get(Ns);
}
const Bs = W();
function Is({ children: t19 }) {
  const [e2, n2] = st(false);
  return $(Bs.Provider, { value: { triggerInit: e2, setTriggerInit: n2 }, children: t19 });
}
function Fs(t19 = () => {
}, e2, n2 = () => {
}) {
  const r2 = Ms("(min-width: 1025px)"), i2 = Ms("(min-height: 695px)"), o2 = Ms("(min-height: 2200px) and (min-width: 1500px), (min-width: 3000px)"), { triggerInit: s2 } = pt(Bs), a2 = r2 && i2 || o2;
  return ks(() => (t19 && s2 && requestAnimationFrame(() => {
    const e3 = { scroller: a2 ? "#scroll-wrapper" : window };
    a2 && (e3.containerAnimation = Ls()), t19(e3);
  }), () => {
    n2 && n2();
  }), { dependencies: [r2, i2, o2, s2], revertOnUpdate: true, ...e2 }), { isLargeScreen: o2, width: r2, height: i2, scrollTo: function(t20, e3) {
    var _a3, _b2;
    a2 ? (_a3 = Vs()) == null ? void 0 : _a3.scrollIntoView(document.getElementById(t20), e3) : (_b2 = document.getElementById(t20)) == null ? void 0 : _b2.scrollIntoView({ behavior: "smooth" });
  } };
}
function zs() {
  const { scrollTo: t19 } = Fs();
  return $("div", { className: "center-flex", children: $("div", { className: "scroll-down center-gr", onClick: () => {
    t19("home-scroll");
  }, children: $("img", { className: "icon", src: "data:image/svg+xml,%3csvg%20width='10'%20height='16'%20viewBox='0%200%2010%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.29411%2010.29L6.00411%2012.59V1C6.00411%200.734784%205.89876%200.48043%205.71122%200.292893C5.52368%200.105357%205.26933%200%205.00411%200C4.7389%200%204.48454%200.105357%204.29701%200.292893C4.10947%200.48043%204.00411%200.734784%204.00411%201V12.59L1.71411%2010.29C1.52581%2010.1017%201.27041%209.99591%201.00411%209.99591C0.737811%209.99591%200.482416%2010.1017%200.294113%2010.29C0.105809%2010.4783%202.09808e-05%2010.7337%202.09808e-05%2011C2.09808e-05%2011.2663%200.105809%2011.5217%200.294113%2011.71L4.29411%2015.71C4.38922%2015.801%204.50136%2015.8724%204.62411%2015.92C4.74381%2015.9729%204.87324%2016.0002%205.00411%2016.0002C5.13498%2016.0002%205.26441%2015.9729%205.38411%2015.92C5.50686%2015.8724%205.61901%2015.801%205.71411%2015.71L9.71411%2011.71C9.90242%2011.5217%2010.0082%2011.2663%2010.0082%2011C10.0082%2010.7337%209.90242%2010.4783%209.71411%2010.29C9.62087%2010.1968%209.51018%2010.1228%209.38836%2010.0723C9.26654%2010.0219%209.13597%209.99591%209.00411%209.99591C8.73781%209.99591%208.48242%2010.1017%208.29411%2010.29Z'%20fill='white'%20fill-opacity='0.5'/%3e%3c/svg%3e", alt: "arrow" }) }) });
}
function Us() {
  const { width: t19, height: e2 } = Fs();
  return $("section", { id: "home", children: [t19 && e2 && $(De, {}), $("div", { className: "container", children: [$(zs, {}), $("div", { className: "text-wrapper", children: $("div", { className: "row center-y gap-50", children: [$("h1", { className: "capitalize", children: ["from idea", $("br", {}), " to life"] }), $("p", { className: "to-small text-white capitalize", children: ["Arhitecture modern technology", $("br", {}), " MasBo is an architectural group working in the field of architecture and", $("br", {}), " urban planning. For our customers, we are known as a reliable partner", $("br", {}), " with high standards of quality and responsibility."] })] }) })] })] });
}
function Ws() {
  const { width: t19, height: e2, isLargeScreen: n2 } = Fs((r2) => {
    (t19 && e2 || n2) && (Ts.set(".scroll-indicator div", { width: "0%" }), Ts.to(".scroll-indicator div", { ease: "power1.out", width: "100%", scrollTrigger: { scroller: r2.scroller, trigger: "#home-scroll", start: "top top", end: () => "+=" + window.innerHeight, scrub: true } }));
  });
  return t19 && e2 && Kt($("div", { className: "scroll-indicator", children: $("div", {}) }), document.getElementById("modal-root"));
}
function Hs({ arrow: t19 = true, ...e2 }) {
  return $("div", { className: "main-button", children: $("button", { className: "font-bold text-white", ...e2, children: $("div", { className: "row gap-10 center-y", children: [e2.children, t19 && $("img", { alt: "arrow", className: "icon", src: "data:image/svg+xml,%3csvg%20width='7'%20height='11'%20viewBox='0%200%207%2011'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.7103%2010.487L5.9503%206.19701C6.04402%206.10405%206.11842%205.99344%206.16919%205.87159C6.21996%205.74973%206.24609%205.61902%206.24609%205.48701C6.24609%205.355%206.21996%205.22429%206.16919%205.10243C6.11842%204.98057%206.04402%204.86997%205.9503%204.77701L1.7103%200.537009C1.61733%200.443281%201.50673%200.368886%201.38487%200.318117C1.26301%200.267349%201.13231%200.241211%201.0003%200.241211C0.868284%200.241211%200.737578%200.267349%200.615719%200.318117C0.49386%200.368886%200.383259%200.443281%200.290296%200.537009C0.104044%200.724371%20-0.000496897%200.977823%20-0.000496908%201.24201C-0.00049692%201.50619%200.104044%201.75965%200.290296%201.94701L3.8303%205.48701L0.290295%209.02701C0.105551%209.21327%200.00140007%209.46467%200.000295224%209.72701C-0.000465813%209.85862%200.0247589%209.98908%200.0745235%2010.1109C0.124288%2010.2328%200.197614%2010.3436%200.290295%2010.437C0.379913%2010.5341%200.487879%2010.6124%200.607955%2010.6675C0.72803%2010.7227%200.857835%2010.7534%200.989871%2010.7581C1.12191%2010.7627%201.25355%2010.7412%201.37721%2010.6946C1.50086%2010.6481%201.61407%2010.5775%201.7103%2010.487Z'%20fill='white'/%3e%3c/svg%3e" })] }) }) });
}
const $s = "/masbo_website/assets/img-2-BiZDErvq.jpg";
var Ys = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function Xs(t19) {
  if (t19.__esModule) return t19;
  var e2 = t19.default;
  if ("function" == typeof e2) {
    var n2 = function t20() {
      return this instanceof t20 ? Reflect.construct(e2, arguments, this.constructor) : e2.apply(this, arguments);
    };
    n2.prototype = e2.prototype;
  } else n2 = {};
  return Object.defineProperty(n2, "__esModule", { value: true }), Object.keys(t19).forEach(function(e3) {
    var r2 = Object.getOwnPropertyDescriptor(t19, e3);
    Object.defineProperty(n2, e3, r2.get ? r2 : { enumerable: true, get: function() {
      return t19[e3];
    } });
  }), n2;
}
var qs = { exports: {} };
const Gs = Xs(Ee);
var Ks;
var Zs = (Ks || (Ks = 1, (() => {
  var t19 = { 296: (t20, e3, n3) => {
    var r3 = /^\s+|\s+$/g, i2 = /^[-+]0x[0-9a-f]+$/i, o2 = /^0b[01]+$/i, s2 = /^0o[0-7]+$/i, a2 = parseInt, u2 = "object" == typeof n3.g && n3.g && n3.g.Object === Object && n3.g, l2 = "object" == typeof self && self && self.Object === Object && self, c2 = u2 || l2 || Function("return this")(), h2 = Object.prototype.toString, f2 = Math.max, d2 = Math.min, p2 = function() {
      return c2.Date.now();
    };
    function m2(t21) {
      var e4 = typeof t21;
      return !!t21 && ("object" == e4 || "function" == e4);
    }
    function v2(t21) {
      if ("number" == typeof t21) return t21;
      if (function(t22) {
        return "symbol" == typeof t22 || /* @__PURE__ */ function(t23) {
          return !!t23 && "object" == typeof t23;
        }(t22) && "[object Symbol]" == h2.call(t22);
      }(t21)) return NaN;
      if (m2(t21)) {
        var e4 = "function" == typeof t21.valueOf ? t21.valueOf() : t21;
        t21 = m2(e4) ? e4 + "" : e4;
      }
      if ("string" != typeof t21) return 0 === t21 ? t21 : +t21;
      t21 = t21.replace(r3, "");
      var n4 = o2.test(t21);
      return n4 || s2.test(t21) ? a2(t21.slice(2), n4 ? 2 : 8) : i2.test(t21) ? NaN : +t21;
    }
    t20.exports = function(t21, e4, n4) {
      var r4, i3, o3, s3, a3, u3, l3 = 0, c3 = false, h3 = false, g2 = true;
      if ("function" != typeof t21) throw new TypeError("Expected a function");
      function y2(e5) {
        var n5 = r4, o4 = i3;
        return r4 = i3 = void 0, l3 = e5, s3 = t21.apply(o4, n5);
      }
      function _2(t22) {
        var n5 = t22 - u3;
        return void 0 === u3 || n5 >= e4 || n5 < 0 || h3 && t22 - l3 >= o3;
      }
      function b2() {
        var t22 = p2();
        if (_2(t22)) return w2(t22);
        a3 = setTimeout(b2, function(t23) {
          var n5 = e4 - (t23 - u3);
          return h3 ? d2(n5, o3 - (t23 - l3)) : n5;
        }(t22));
      }
      function w2(t22) {
        return a3 = void 0, g2 && r4 ? y2(t22) : (r4 = i3 = void 0, s3);
      }
      function x2() {
        var t22 = p2(), n5 = _2(t22);
        if (r4 = arguments, i3 = this, u3 = t22, n5) {
          if (void 0 === a3) return function(t23) {
            return l3 = t23, a3 = setTimeout(b2, e4), c3 ? y2(t23) : s3;
          }(u3);
          if (h3) return a3 = setTimeout(b2, e4), y2(u3);
        }
        return void 0 === a3 && (a3 = setTimeout(b2, e4)), s3;
      }
      return e4 = v2(e4) || 0, m2(n4) && (c3 = !!n4.leading, o3 = (h3 = "maxWait" in n4) ? f2(v2(n4.maxWait) || 0, e4) : o3, g2 = "trailing" in n4 ? !!n4.trailing : g2), x2.cancel = function() {
        void 0 !== a3 && clearTimeout(a3), l3 = 0, r4 = u3 = i3 = a3 = void 0;
      }, x2.flush = function() {
        return void 0 === a3 ? s3 : w2(p2());
      }, x2;
    };
  }, 96: (t20, e3, n3) => {
    var r3 = "Expected a function", i2 = /^\s+|\s+$/g, o2 = /^[-+]0x[0-9a-f]+$/i, s2 = /^0b[01]+$/i, a2 = /^0o[0-7]+$/i, u2 = parseInt, l2 = "object" == typeof n3.g && n3.g && n3.g.Object === Object && n3.g, c2 = "object" == typeof self && self && self.Object === Object && self, h2 = l2 || c2 || Function("return this")(), f2 = Object.prototype.toString, d2 = Math.max, p2 = Math.min, m2 = function() {
      return h2.Date.now();
    };
    function v2(t21) {
      var e4 = typeof t21;
      return !!t21 && ("object" == e4 || "function" == e4);
    }
    function g2(t21) {
      if ("number" == typeof t21) return t21;
      if (function(t22) {
        return "symbol" == typeof t22 || /* @__PURE__ */ function(t23) {
          return !!t23 && "object" == typeof t23;
        }(t22) && "[object Symbol]" == f2.call(t22);
      }(t21)) return NaN;
      if (v2(t21)) {
        var e4 = "function" == typeof t21.valueOf ? t21.valueOf() : t21;
        t21 = v2(e4) ? e4 + "" : e4;
      }
      if ("string" != typeof t21) return 0 === t21 ? t21 : +t21;
      t21 = t21.replace(i2, "");
      var n4 = s2.test(t21);
      return n4 || a2.test(t21) ? u2(t21.slice(2), n4 ? 2 : 8) : o2.test(t21) ? NaN : +t21;
    }
    t20.exports = function(t21, e4, n4) {
      var i3 = true, o3 = true;
      if ("function" != typeof t21) throw new TypeError(r3);
      return v2(n4) && (i3 = "leading" in n4 ? !!n4.leading : i3, o3 = "trailing" in n4 ? !!n4.trailing : o3), function(t22, e5, n5) {
        var i4, o4, s3, a3, u3, l3, c3 = 0, h3 = false, f3 = false, y2 = true;
        if ("function" != typeof t22) throw new TypeError(r3);
        function _2(e6) {
          var n6 = i4, r4 = o4;
          return i4 = o4 = void 0, c3 = e6, a3 = t22.apply(r4, n6);
        }
        function b2(t23) {
          var n6 = t23 - l3;
          return void 0 === l3 || n6 >= e5 || n6 < 0 || f3 && t23 - c3 >= s3;
        }
        function w2() {
          var t23 = m2();
          if (b2(t23)) return x2(t23);
          u3 = setTimeout(w2, function(t24) {
            var n6 = e5 - (t24 - l3);
            return f3 ? p2(n6, s3 - (t24 - c3)) : n6;
          }(t23));
        }
        function x2(t23) {
          return u3 = void 0, y2 && i4 ? _2(t23) : (i4 = o4 = void 0, a3);
        }
        function T2() {
          var t23 = m2(), n6 = b2(t23);
          if (i4 = arguments, o4 = this, l3 = t23, n6) {
            if (void 0 === u3) return function(t24) {
              return c3 = t24, u3 = setTimeout(w2, e5), h3 ? _2(t24) : a3;
            }(l3);
            if (f3) return u3 = setTimeout(w2, e5), _2(l3);
          }
          return void 0 === u3 && (u3 = setTimeout(w2, e5)), a3;
        }
        return e5 = g2(e5) || 0, v2(n5) && (h3 = !!n5.leading, s3 = (f3 = "maxWait" in n5) ? d2(g2(n5.maxWait) || 0, e5) : s3, y2 = "trailing" in n5 ? !!n5.trailing : y2), T2.cancel = function() {
          void 0 !== u3 && clearTimeout(u3), c3 = 0, i4 = l3 = o4 = u3 = void 0;
        }, T2.flush = function() {
          return void 0 === u3 ? a3 : x2(m2());
        }, T2;
      }(t21, e4, { leading: i3, maxWait: e4, trailing: o3 });
    };
  }, 703: (t20, e3, n3) => {
    var r3 = n3(414);
    function i2() {
    }
    function o2() {
    }
    o2.resetWarningCache = i2, t20.exports = function() {
      function t21(t22, e5, n5, i3, o3, s2) {
        if (s2 !== r3) {
          var a2 = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw a2.name = "Invariant Violation", a2;
        }
      }
      function e4() {
        return t21;
      }
      t21.isRequired = t21;
      var n4 = { array: t21, bigint: t21, bool: t21, func: t21, number: t21, object: t21, string: t21, symbol: t21, any: t21, arrayOf: e4, element: t21, elementType: t21, instanceOf: e4, node: t21, objectOf: e4, oneOf: e4, oneOfType: e4, shape: e4, exact: e4, checkPropTypes: o2, resetWarningCache: i2 };
      return n4.PropTypes = n4, n4;
    };
  }, 697: (t20, e3, n3) => {
    t20.exports = n3(703)();
  }, 414: (t20) => {
    t20.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  } }, e2 = {};
  function n2(r3) {
    var i2 = e2[r3];
    if (void 0 !== i2) return i2.exports;
    var o2 = e2[r3] = { exports: {} };
    return t19[r3](o2, o2.exports, n2), o2.exports;
  }
  n2.n = (t20) => {
    var e3 = t20 && t20.__esModule ? () => t20.default : () => t20;
    return n2.d(e3, { a: e3 }), e3;
  }, n2.d = (t20, e3) => {
    for (var r3 in e3) n2.o(e3, r3) && !n2.o(t20, r3) && Object.defineProperty(t20, r3, { enumerable: true, get: e3[r3] });
  }, n2.g = function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (t20) {
      if ("object" == typeof window) return window;
    }
  }(), n2.o = (t20, e3) => Object.prototype.hasOwnProperty.call(t20, e3), n2.r = (t20) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t20, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t20, "__esModule", { value: true });
  };
  var r2 = {};
  (() => {
    n2.r(r2), n2.d(r2, { LazyLoadComponent: () => W2, LazyLoadImage: () => tt2, trackWindowScroll: () => R2 });
    const t20 = Gs;
    var e3 = n2.n(t20), i2 = n2(697);
    function o2() {
      return "undefined" != typeof window && "IntersectionObserver" in window && "isIntersecting" in window.IntersectionObserverEntry.prototype;
    }
    function s2(t21) {
      return s2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t22) {
        return typeof t22;
      } : function(t22) {
        return t22 && "function" == typeof Symbol && t22.constructor === Symbol && t22 !== Symbol.prototype ? "symbol" : typeof t22;
      }, s2(t21);
    }
    function a2(t21, e4) {
      var n3 = Object.keys(t21);
      if (Object.getOwnPropertySymbols) {
        var r3 = Object.getOwnPropertySymbols(t21);
        e4 && (r3 = r3.filter(function(e5) {
          return Object.getOwnPropertyDescriptor(t21, e5).enumerable;
        })), n3.push.apply(n3, r3);
      }
      return n3;
    }
    function u2(t21, e4, n3) {
      return (e4 = c2(e4)) in t21 ? Object.defineProperty(t21, e4, { value: n3, enumerable: true, configurable: true, writable: true }) : t21[e4] = n3, t21;
    }
    function l2(t21, e4) {
      for (var n3 = 0; n3 < e4.length; n3++) {
        var r3 = e4[n3];
        r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t21, c2(r3.key), r3);
      }
    }
    function c2(t21) {
      var e4 = function(t22) {
        if ("object" !== s2(t22) || null === t22) return t22;
        var e5 = t22[Symbol.toPrimitive];
        if (void 0 !== e5) {
          var n3 = e5.call(t22, "string");
          if ("object" !== s2(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t22);
      }(t21);
      return "symbol" === s2(e4) ? e4 : String(e4);
    }
    function h2(t21, e4) {
      return h2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t22, e5) {
        return t22.__proto__ = e5, t22;
      }, h2(t21, e4);
    }
    function f2(t21) {
      return f2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t22) {
        return t22.__proto__ || Object.getPrototypeOf(t22);
      }, f2(t21);
    }
    var d2 = function(t21) {
      t21.forEach(function(t22) {
        t22.isIntersecting && t22.target.onVisible();
      });
    }, p2 = {}, m2 = function(t21) {
      !function(t22, e4) {
        if ("function" != typeof e4 && null !== e4) throw new TypeError("Super expression must either be null or a function");
        t22.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t22, writable: true, configurable: true } }), Object.defineProperty(t22, "prototype", { writable: false }), e4 && h2(t22, e4);
      }(v3, t21);
      var n3, r3, i3, c3, m3 = (i3 = v3, c3 = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if ("function" == typeof Proxy) return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (t22) {
          return false;
        }
      }(), function() {
        var t22, e4 = f2(i3);
        if (c3) {
          var n4 = f2(this).constructor;
          t22 = Reflect.construct(e4, arguments, n4);
        } else t22 = e4.apply(this, arguments);
        return function(t23, e5) {
          if (e5 && ("object" === s2(e5) || "function" == typeof e5)) return e5;
          if (void 0 !== e5) throw new TypeError("Derived constructors may only return object or undefined");
          return function(t24) {
            if (void 0 === t24) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t24;
          }(t23);
        }(this, t22);
      });
      function v3(t22) {
        var e4;
        if (function(t23, e5) {
          if (!(t23 instanceof e5)) throw new TypeError("Cannot call a class as a function");
        }(this, v3), (e4 = m3.call(this, t22)).supportsObserver = !t22.scrollPosition && t22.useIntersectionObserver && o2(), e4.supportsObserver) {
          var n4 = t22.threshold;
          e4.observer = function(t23) {
            return p2[t23] = p2[t23] || new IntersectionObserver(d2, { rootMargin: t23 + "px" }), p2[t23];
          }(n4);
        }
        return e4;
      }
      return n3 = v3, r3 = [{ key: "componentDidMount", value: function() {
        this.placeholder && this.observer && (this.placeholder.onVisible = this.props.onVisible, this.observer.observe(this.placeholder)), this.supportsObserver || this.updateVisibility();
      } }, { key: "componentWillUnmount", value: function() {
        this.observer && this.placeholder && this.observer.unobserve(this.placeholder);
      } }, { key: "componentDidUpdate", value: function() {
        this.supportsObserver || this.updateVisibility();
      } }, { key: "getPlaceholderBoundingBox", value: function() {
        var t22 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props.scrollPosition, e4 = this.placeholder.getBoundingClientRect(), n4 = this.placeholder.style, r4 = parseInt(n4.getPropertyValue("margin-left"), 10) || 0, i4 = parseInt(n4.getPropertyValue("margin-top"), 10) || 0;
        return { bottom: t22.y + e4.bottom + i4, left: t22.x + e4.left + r4, right: t22.x + e4.right + r4, top: t22.y + e4.top + i4 };
      } }, { key: "isPlaceholderInViewport", value: function() {
        if ("undefined" == typeof window || !this.placeholder) return false;
        var t22 = this.props, e4 = t22.scrollPosition, n4 = t22.threshold, r4 = this.getPlaceholderBoundingBox(e4), i4 = e4.y + window.innerHeight, o3 = e4.x, s3 = e4.x + window.innerWidth, a3 = e4.y;
        return Boolean(a3 - n4 <= r4.bottom && i4 + n4 >= r4.top && o3 - n4 <= r4.right && s3 + n4 >= r4.left);
      } }, { key: "updateVisibility", value: function() {
        this.isPlaceholderInViewport() && this.props.onVisible();
      } }, { key: "render", value: function() {
        var t22 = this, n4 = this.props, r4 = n4.className, i4 = n4.height, o3 = n4.placeholder, s3 = n4.style, l3 = n4.width;
        if (o3 && "function" != typeof o3.type) return e3().cloneElement(o3, { ref: function(e4) {
          return t22.placeholder = e4;
        } });
        var c4 = function(t23) {
          for (var e4 = 1; e4 < arguments.length; e4++) {
            var n5 = null != arguments[e4] ? arguments[e4] : {};
            e4 % 2 ? a2(Object(n5), true).forEach(function(e5) {
              u2(t23, e5, n5[e5]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t23, Object.getOwnPropertyDescriptors(n5)) : a2(Object(n5)).forEach(function(e5) {
              Object.defineProperty(t23, e5, Object.getOwnPropertyDescriptor(n5, e5));
            });
          }
          return t23;
        }({ display: "inline-block" }, s3);
        return void 0 !== l3 && (c4.width = l3), void 0 !== i4 && (c4.height = i4), e3().createElement("span", { className: r4, ref: function(e4) {
          return t22.placeholder = e4;
        }, style: c4 }, o3);
      } }], r3 && l2(n3.prototype, r3), Object.defineProperty(n3, "prototype", { writable: false }), v3;
    }(e3().Component);
    m2.propTypes = { onVisible: i2.PropTypes.func.isRequired, className: i2.PropTypes.string, height: i2.PropTypes.oneOfType([i2.PropTypes.number, i2.PropTypes.string]), placeholder: i2.PropTypes.element, threshold: i2.PropTypes.number, useIntersectionObserver: i2.PropTypes.bool, scrollPosition: i2.PropTypes.shape({ x: i2.PropTypes.number.isRequired, y: i2.PropTypes.number.isRequired }), width: i2.PropTypes.oneOfType([i2.PropTypes.number, i2.PropTypes.string]) }, m2.defaultProps = { className: "", placeholder: null, threshold: 100, useIntersectionObserver: true };
    const v2 = m2;
    var g2 = n2(296), y2 = n2.n(g2), _2 = n2(96), b2 = n2.n(_2), w2 = function(t21) {
      var e4 = getComputedStyle(t21, null);
      return e4.getPropertyValue("overflow") + e4.getPropertyValue("overflow-y") + e4.getPropertyValue("overflow-x");
    };
    const x2 = function(t21) {
      if (!(t21 instanceof HTMLElement)) return window;
      for (var e4 = t21; e4 && e4 instanceof HTMLElement; ) {
        if (/(scroll|auto)/.test(w2(e4))) return e4;
        e4 = e4.parentNode;
      }
      return window;
    };
    function T2(t21) {
      return T2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t22) {
        return typeof t22;
      } : function(t22) {
        return t22 && "function" == typeof Symbol && t22.constructor === Symbol && t22 !== Symbol.prototype ? "symbol" : typeof t22;
      }, T2(t21);
    }
    var C2 = ["delayMethod", "delayTime"];
    function P2() {
      return P2 = Object.assign ? Object.assign.bind() : function(t21) {
        for (var e4 = 1; e4 < arguments.length; e4++) {
          var n3 = arguments[e4];
          for (var r3 in n3) Object.prototype.hasOwnProperty.call(n3, r3) && (t21[r3] = n3[r3]);
        }
        return t21;
      }, P2.apply(this, arguments);
    }
    function S2(t21, e4) {
      return S2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t22, e5) {
        return t22.__proto__ = e5, t22;
      }, S2(t21, e4);
    }
    function E2(t21, e4) {
      if (e4 && ("object" === T2(e4) || "function" == typeof e4)) return e4;
      if (void 0 !== e4) throw new TypeError("Derived constructors may only return object or undefined");
      return O2(t21);
    }
    function O2(t21) {
      if (void 0 === t21) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t21;
    }
    function k2(t21) {
      return k2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t22) {
        return t22.__proto__ || Object.getPrototypeOf(t22);
      }, k2(t21);
    }
    var M2 = function() {
      return "undefined" == typeof window ? 0 : window.scrollX || window.pageXOffset;
    }, A2 = function() {
      return "undefined" == typeof window ? 0 : window.scrollY || window.pageYOffset;
    };
    const R2 = function(t21) {
      var n3 = function(n4) {
        !function(t22, e4) {
          if ("function" != typeof e4 && null !== e4) throw new TypeError("Super expression must either be null or a function");
          t22.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t22, writable: true, configurable: true } }), Object.defineProperty(t22, "prototype", { writable: false }), e4 && S2(t22, e4);
        }(l3, n4);
        var r3, i3, s3, a3, u3 = (s3 = l3, a3 = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return false;
          if (Reflect.construct.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t22) {
            return false;
          }
        }(), function() {
          var t22, e4 = k2(s3);
          if (a3) {
            var n5 = k2(this).constructor;
            t22 = Reflect.construct(e4, arguments, n5);
          } else t22 = e4.apply(this, arguments);
          return E2(this, t22);
        });
        function l3(t22) {
          var n5;
          if (function(t23, e4) {
            if (!(t23 instanceof e4)) throw new TypeError("Cannot call a class as a function");
          }(this, l3), (n5 = u3.call(this, t22)).useIntersectionObserver = t22.useIntersectionObserver && o2(), n5.useIntersectionObserver) return E2(n5);
          var r4 = n5.onChangeScroll.bind(O2(n5));
          return "debounce" === t22.delayMethod ? n5.delayedScroll = y2()(r4, t22.delayTime) : "throttle" === t22.delayMethod && (n5.delayedScroll = b2()(r4, t22.delayTime)), n5.state = { scrollPosition: { x: M2(), y: A2() } }, n5.baseComponentRef = e3().createRef(), n5;
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
          this.useIntersectionObserver || this.setState({ scrollPosition: { x: M2(), y: A2() } });
        } }, { key: "render", value: function() {
          var n5 = this.props, r4 = (n5.delayMethod, n5.delayTime, function(t22, e4) {
            if (null == t22) return {};
            var n6, r5, i5 = function(t23, e5) {
              if (null == t23) return {};
              var n7, r6, i6 = {}, o4 = Object.keys(t23);
              for (r6 = 0; r6 < o4.length; r6++) n7 = o4[r6], e5.indexOf(n7) >= 0 || (i6[n7] = t23[n7]);
              return i6;
            }(t22, e4);
            if (Object.getOwnPropertySymbols) {
              var o3 = Object.getOwnPropertySymbols(t22);
              for (r5 = 0; r5 < o3.length; r5++) n6 = o3[r5], e4.indexOf(n6) >= 0 || Object.prototype.propertyIsEnumerable.call(t22, n6) && (i5[n6] = t22[n6]);
            }
            return i5;
          }(n5, C2)), i4 = this.useIntersectionObserver ? null : this.state.scrollPosition;
          return e3().createElement(t21, P2({ forwardRef: this.baseComponentRef, scrollPosition: i4 }, r4));
        } }]) && function(t22, e4) {
          for (var n5 = 0; n5 < e4.length; n5++) {
            var r4 = e4[n5];
            r4.enumerable = r4.enumerable || false, r4.configurable = true, "value" in r4 && (r4.writable = true), Object.defineProperty(t22, (i4 = function(t23) {
              if ("object" !== T2(t23) || null === t23) return t23;
              var e5 = t23[Symbol.toPrimitive];
              if (void 0 !== e5) {
                var n6 = e5.call(t23, "string");
                if ("object" !== T2(n6)) return n6;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t23);
            }(r4.key), "symbol" === T2(i4) ? i4 : String(i4)), r4);
          }
          var i4;
        }(r3.prototype, i3), Object.defineProperty(r3, "prototype", { writable: false }), l3;
      }(e3().Component);
      return n3.propTypes = { delayMethod: i2.PropTypes.oneOf(["debounce", "throttle"]), delayTime: i2.PropTypes.number, useIntersectionObserver: i2.PropTypes.bool }, n3.defaultProps = { delayMethod: "throttle", delayTime: 300, useIntersectionObserver: true }, n3;
    };
    function D2(t21) {
      return D2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t22) {
        return typeof t22;
      } : function(t22) {
        return t22 && "function" == typeof Symbol && t22.constructor === Symbol && t22 !== Symbol.prototype ? "symbol" : typeof t22;
      }, D2(t21);
    }
    function L2(t21, e4) {
      return L2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t22, e5) {
        return t22.__proto__ = e5, t22;
      }, L2(t21, e4);
    }
    function j2(t21) {
      return j2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t22) {
        return t22.__proto__ || Object.getPrototypeOf(t22);
      }, j2(t21);
    }
    var N2 = function(t21) {
      !function(t22, e4) {
        if ("function" != typeof e4 && null !== e4) throw new TypeError("Super expression must either be null or a function");
        t22.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t22, writable: true, configurable: true } }), Object.defineProperty(t22, "prototype", { writable: false }), e4 && L2(t22, e4);
      }(a3, t21);
      var n3, r3, i3, o3, s3 = (i3 = a3, o3 = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if ("function" == typeof Proxy) return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (t22) {
          return false;
        }
      }(), function() {
        var t22, e4 = j2(i3);
        if (o3) {
          var n4 = j2(this).constructor;
          t22 = Reflect.construct(e4, arguments, n4);
        } else t22 = e4.apply(this, arguments);
        return function(t23, e5) {
          if (e5 && ("object" === D2(e5) || "function" == typeof e5)) return e5;
          if (void 0 !== e5) throw new TypeError("Derived constructors may only return object or undefined");
          return function(t24) {
            if (void 0 === t24) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t24;
          }(t23);
        }(this, t22);
      });
      function a3(t22) {
        return function(t23, e4) {
          if (!(t23 instanceof e4)) throw new TypeError("Cannot call a class as a function");
        }(this, a3), s3.call(this, t22);
      }
      return n3 = a3, (r3 = [{ key: "render", value: function() {
        return e3().createElement(v2, this.props);
      } }]) && function(t22, e4) {
        for (var n4 = 0; n4 < e4.length; n4++) {
          var r4 = e4[n4];
          r4.enumerable = r4.enumerable || false, r4.configurable = true, "value" in r4 && (r4.writable = true), Object.defineProperty(t22, (i4 = function(t23) {
            if ("object" !== D2(t23) || null === t23) return t23;
            var e5 = t23[Symbol.toPrimitive];
            if (void 0 !== e5) {
              var n5 = e5.call(t23, "string");
              if ("object" !== D2(n5)) return n5;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t23);
          }(r4.key), "symbol" === D2(i4) ? i4 : String(i4)), r4);
        }
        var i4;
      }(n3.prototype, r3), Object.defineProperty(n3, "prototype", { writable: false }), a3;
    }(e3().Component);
    const V2 = R2(N2);
    function B2(t21) {
      return B2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t22) {
        return typeof t22;
      } : function(t22) {
        return t22 && "function" == typeof Symbol && t22.constructor === Symbol && t22 !== Symbol.prototype ? "symbol" : typeof t22;
      }, B2(t21);
    }
    function I2(t21, e4) {
      return I2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t22, e5) {
        return t22.__proto__ = e5, t22;
      }, I2(t21, e4);
    }
    function F2(t21) {
      if (void 0 === t21) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t21;
    }
    function z2(t21) {
      return z2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t22) {
        return t22.__proto__ || Object.getPrototypeOf(t22);
      }, z2(t21);
    }
    var U2 = function(t21) {
      !function(t22, e4) {
        if ("function" != typeof e4 && null !== e4) throw new TypeError("Super expression must either be null or a function");
        t22.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t22, writable: true, configurable: true } }), Object.defineProperty(t22, "prototype", { writable: false }), e4 && I2(t22, e4);
      }(u3, t21);
      var n3, r3, i3, s3, a3 = (i3 = u3, s3 = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if ("function" == typeof Proxy) return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (t22) {
          return false;
        }
      }(), function() {
        var t22, e4 = z2(i3);
        if (s3) {
          var n4 = z2(this).constructor;
          t22 = Reflect.construct(e4, arguments, n4);
        } else t22 = e4.apply(this, arguments);
        return function(t23, e5) {
          if (e5 && ("object" === B2(e5) || "function" == typeof e5)) return e5;
          if (void 0 !== e5) throw new TypeError("Derived constructors may only return object or undefined");
          return F2(t23);
        }(this, t22);
      });
      function u3(t22) {
        var e4;
        !function(t23, e5) {
          if (!(t23 instanceof e5)) throw new TypeError("Cannot call a class as a function");
        }(this, u3), e4 = a3.call(this, t22);
        var n4 = t22.afterLoad, r4 = t22.beforeLoad, i4 = t22.scrollPosition, o3 = t22.visibleByDefault;
        return e4.state = { visible: o3 }, o3 && (r4(), n4()), e4.onVisible = e4.onVisible.bind(F2(e4)), e4.isScrollTracked = Boolean(i4 && Number.isFinite(i4.x) && i4.x >= 0 && Number.isFinite(i4.y) && i4.y >= 0), e4;
      }
      return n3 = u3, (r3 = [{ key: "componentDidUpdate", value: function(t22, e4) {
        e4.visible !== this.state.visible && this.props.afterLoad();
      } }, { key: "onVisible", value: function() {
        this.props.beforeLoad(), this.setState({ visible: true });
      } }, { key: "render", value: function() {
        if (this.state.visible) return this.props.children;
        var t22 = this.props, n4 = t22.className, r4 = t22.delayMethod, i4 = t22.delayTime, s4 = t22.height, a4 = t22.placeholder, u4 = t22.scrollPosition, l3 = t22.style, c3 = t22.threshold, h3 = t22.useIntersectionObserver, f3 = t22.width;
        return this.isScrollTracked || h3 && o2() ? e3().createElement(v2, { className: n4, height: s4, onVisible: this.onVisible, placeholder: a4, scrollPosition: u4, style: l3, threshold: c3, useIntersectionObserver: h3, width: f3 }) : e3().createElement(V2, { className: n4, delayMethod: r4, delayTime: i4, height: s4, onVisible: this.onVisible, placeholder: a4, style: l3, threshold: c3, width: f3 });
      } }]) && function(t22, e4) {
        for (var n4 = 0; n4 < e4.length; n4++) {
          var r4 = e4[n4];
          r4.enumerable = r4.enumerable || false, r4.configurable = true, "value" in r4 && (r4.writable = true), Object.defineProperty(t22, (i4 = function(t23) {
            if ("object" !== B2(t23) || null === t23) return t23;
            var e5 = t23[Symbol.toPrimitive];
            if (void 0 !== e5) {
              var n5 = e5.call(t23, "string");
              if ("object" !== B2(n5)) return n5;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t23);
          }(r4.key), "symbol" === B2(i4) ? i4 : String(i4)), r4);
        }
        var i4;
      }(n3.prototype, r3), Object.defineProperty(n3, "prototype", { writable: false }), u3;
    }(e3().Component);
    U2.propTypes = { afterLoad: i2.PropTypes.func, beforeLoad: i2.PropTypes.func, useIntersectionObserver: i2.PropTypes.bool, visibleByDefault: i2.PropTypes.bool }, U2.defaultProps = { afterLoad: function() {
      return {};
    }, beforeLoad: function() {
      return {};
    }, useIntersectionObserver: true, visibleByDefault: false };
    const W2 = U2;
    function H2(t21) {
      return H2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t22) {
        return typeof t22;
      } : function(t22) {
        return t22 && "function" == typeof Symbol && t22.constructor === Symbol && t22 !== Symbol.prototype ? "symbol" : typeof t22;
      }, H2(t21);
    }
    var $2 = ["afterLoad", "beforeLoad", "delayMethod", "delayTime", "effect", "placeholder", "placeholderSrc", "scrollPosition", "threshold", "useIntersectionObserver", "visibleByDefault", "wrapperClassName", "wrapperProps"];
    function Y2(t21, e4) {
      var n3 = Object.keys(t21);
      if (Object.getOwnPropertySymbols) {
        var r3 = Object.getOwnPropertySymbols(t21);
        e4 && (r3 = r3.filter(function(e5) {
          return Object.getOwnPropertyDescriptor(t21, e5).enumerable;
        })), n3.push.apply(n3, r3);
      }
      return n3;
    }
    function X2(t21) {
      for (var e4 = 1; e4 < arguments.length; e4++) {
        var n3 = null != arguments[e4] ? arguments[e4] : {};
        e4 % 2 ? Y2(Object(n3), true).forEach(function(e5) {
          q2(t21, e5, n3[e5]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t21, Object.getOwnPropertyDescriptors(n3)) : Y2(Object(n3)).forEach(function(e5) {
          Object.defineProperty(t21, e5, Object.getOwnPropertyDescriptor(n3, e5));
        });
      }
      return t21;
    }
    function q2(t21, e4, n3) {
      return (e4 = K2(e4)) in t21 ? Object.defineProperty(t21, e4, { value: n3, enumerable: true, configurable: true, writable: true }) : t21[e4] = n3, t21;
    }
    function G2() {
      return G2 = Object.assign ? Object.assign.bind() : function(t21) {
        for (var e4 = 1; e4 < arguments.length; e4++) {
          var n3 = arguments[e4];
          for (var r3 in n3) Object.prototype.hasOwnProperty.call(n3, r3) && (t21[r3] = n3[r3]);
        }
        return t21;
      }, G2.apply(this, arguments);
    }
    function K2(t21) {
      var e4 = function(t22) {
        if ("object" !== H2(t22) || null === t22) return t22;
        var e5 = t22[Symbol.toPrimitive];
        if (void 0 !== e5) {
          var n3 = e5.call(t22, "string");
          if ("object" !== H2(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t22);
      }(t21);
      return "symbol" === H2(e4) ? e4 : String(e4);
    }
    function Z2(t21, e4) {
      return Z2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t22, e5) {
        return t22.__proto__ = e5, t22;
      }, Z2(t21, e4);
    }
    function J2(t21) {
      return J2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t22) {
        return t22.__proto__ || Object.getPrototypeOf(t22);
      }, J2(t21);
    }
    var Q2 = function(t21) {
      !function(t22, e4) {
        if ("function" != typeof e4 && null !== e4) throw new TypeError("Super expression must either be null or a function");
        t22.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t22, writable: true, configurable: true } }), Object.defineProperty(t22, "prototype", { writable: false }), e4 && Z2(t22, e4);
      }(a3, t21);
      var n3, r3, i3, o3, s3 = (i3 = a3, o3 = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if ("function" == typeof Proxy) return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (t22) {
          return false;
        }
      }(), function() {
        var t22, e4 = J2(i3);
        if (o3) {
          var n4 = J2(this).constructor;
          t22 = Reflect.construct(e4, arguments, n4);
        } else t22 = e4.apply(this, arguments);
        return function(t23, e5) {
          if (e5 && ("object" === H2(e5) || "function" == typeof e5)) return e5;
          if (void 0 !== e5) throw new TypeError("Derived constructors may only return object or undefined");
          return function(t24) {
            if (void 0 === t24) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t24;
          }(t23);
        }(this, t22);
      });
      function a3(t22) {
        var e4;
        return function(t23, e5) {
          if (!(t23 instanceof e5)) throw new TypeError("Cannot call a class as a function");
        }(this, a3), (e4 = s3.call(this, t22)).state = { loaded: false }, e4;
      }
      return n3 = a3, (r3 = [{ key: "onImageLoad", value: function() {
        var t22 = this;
        return this.state.loaded ? null : function(e4) {
          t22.props.onLoad(e4), t22.props.afterLoad(), t22.setState({ loaded: true });
        };
      } }, { key: "getImg", value: function() {
        var t22 = this.props, n4 = (t22.afterLoad, t22.beforeLoad, t22.delayMethod, t22.delayTime, t22.effect, t22.placeholder, t22.placeholderSrc, t22.scrollPosition, t22.threshold, t22.useIntersectionObserver, t22.visibleByDefault, t22.wrapperClassName, t22.wrapperProps, function(t23, e4) {
          if (null == t23) return {};
          var n5, r4, i4 = function(t24, e5) {
            if (null == t24) return {};
            var n6, r5, i5 = {}, o5 = Object.keys(t24);
            for (r5 = 0; r5 < o5.length; r5++) n6 = o5[r5], e5.indexOf(n6) >= 0 || (i5[n6] = t24[n6]);
            return i5;
          }(t23, e4);
          if (Object.getOwnPropertySymbols) {
            var o4 = Object.getOwnPropertySymbols(t23);
            for (r4 = 0; r4 < o4.length; r4++) n5 = o4[r4], e4.indexOf(n5) >= 0 || Object.prototype.propertyIsEnumerable.call(t23, n5) && (i4[n5] = t23[n5]);
          }
          return i4;
        }(t22, $2));
        return e3().createElement("img", G2({}, n4, { onLoad: this.onImageLoad() }));
      } }, { key: "getLazyLoadImage", value: function() {
        var t22 = this.props, n4 = t22.beforeLoad, r4 = t22.className, i4 = t22.delayMethod, o4 = t22.delayTime, s4 = t22.height, a4 = t22.placeholder, u3 = t22.scrollPosition, l3 = t22.style, c3 = t22.threshold, h3 = t22.useIntersectionObserver, f3 = t22.visibleByDefault, d3 = t22.width;
        return e3().createElement(W2, { beforeLoad: n4, className: r4, delayMethod: i4, delayTime: o4, height: s4, placeholder: a4, scrollPosition: u3, style: l3, threshold: c3, useIntersectionObserver: h3, visibleByDefault: f3, width: d3 }, this.getImg());
      } }, { key: "getWrappedLazyLoadImage", value: function(t22) {
        var n4 = this.props, r4 = n4.effect, i4 = n4.height, o4 = n4.placeholderSrc, s4 = n4.width, a4 = n4.wrapperClassName, u3 = n4.wrapperProps, l3 = this.state.loaded, c3 = l3 ? " lazy-load-image-loaded" : "", h3 = l3 || !o4 ? {} : { backgroundImage: "url(".concat(o4, ")"), backgroundSize: "100% 100%" };
        return e3().createElement("span", G2({ className: a4 + " lazy-load-image-background " + r4 + c3, style: X2(X2({}, h3), {}, { color: "transparent", display: "inline-block", height: i4, width: s4 }) }, u3), t22);
      } }, { key: "render", value: function() {
        var t22 = this.props, e4 = t22.effect, n4 = t22.placeholderSrc, r4 = t22.visibleByDefault, i4 = t22.wrapperClassName, o4 = t22.wrapperProps, s4 = this.getLazyLoadImage();
        return (e4 || n4) && !r4 || i4 || o4 ? this.getWrappedLazyLoadImage(s4) : s4;
      } }]) && function(t22, e4) {
        for (var n4 = 0; n4 < e4.length; n4++) {
          var r4 = e4[n4];
          r4.enumerable = r4.enumerable || false, r4.configurable = true, "value" in r4 && (r4.writable = true), Object.defineProperty(t22, K2(r4.key), r4);
        }
      }(n3.prototype, r3), Object.defineProperty(n3, "prototype", { writable: false }), a3;
    }(e3().Component);
    Q2.propTypes = { onLoad: i2.PropTypes.func, afterLoad: i2.PropTypes.func, beforeLoad: i2.PropTypes.func, delayMethod: i2.PropTypes.string, delayTime: i2.PropTypes.number, effect: i2.PropTypes.string, placeholderSrc: i2.PropTypes.string, threshold: i2.PropTypes.number, useIntersectionObserver: i2.PropTypes.bool, visibleByDefault: i2.PropTypes.bool, wrapperClassName: i2.PropTypes.string, wrapperProps: i2.PropTypes.object }, Q2.defaultProps = { onLoad: function() {
    }, afterLoad: function() {
      return {};
    }, beforeLoad: function() {
      return {};
    }, delayMethod: "throttle", delayTime: 300, effect: "", placeholderSrc: null, threshold: 100, useIntersectionObserver: true, visibleByDefault: false, wrapperClassName: "" };
    const tt2 = Q2;
  })(), qs.exports = r2;
})()), qs.exports);
function Js({ el: t19 }) {
  return $("li", { children: [$("div", { className: "placeholder-1", children: $(Zs.LazyLoadImage, { src: t19.img, width: "100%", height: "127px", effect: "opacity", alt: "project-image" }) }), $("span", { className: "up-case font-reg text-white", children: t19.date }), $("h5", { children: t19.title }), $("p", { className: "to-middle text-white capitalize", children: t19.description })] });
}
const Qs = [{ img: $s, title: "How the industrial zone turned into a colorful microdistrict", date: "25 september ", description: "We offer innovative engineering solutions that ensure the successful achievement of the client's goals. Because engineering is a result-oriented strategy in action." }, { img: "/masbo_website/assets/img-11-CrLJoGSl.jpg", title: "How the industrial zone turned into a colorful microdistrict", date: "25 september ", description: "We offer innovative engineering solutions that ensure the successful achievement of the client's goals. Because engineering is a result-oriented strategy in action." }, { img: "/masbo_website/assets/img-12-CMpzjhR5.jpg", title: "How the industrial zone turned into a colorful microdistrict", date: "25 september ", description: "We offer innovative engineering solutions that ensure the successful achievement of the client's goals. Because engineering is a result-oriented strategy in action." }];
function ta() {
  return Fs((t19) => {
    const e2 = Ts.utils.toArray(".projects-list .placeholder-1");
    Ts.set(e2, { clipPath: "inset(0 100% 0 0)" }), Ts.to(e2, { ease: "none", clipPath: "inset(0)", scrollTrigger: { trigger: ".projects-list", start: "left 30%", toggleActions: "play none none none", ...t19 } });
  }), $("ul", { className: "data row gap-85", children: Qs.map((t19, e2) => $(Js, { el: t19 }, e2)) });
}
function ea() {
  return $("section", { className: "projects-list", children: $("div", { className: "row center-y full-height", children: $("div", { className: "container", children: [$("div", { className: "text-wrapper row gap-50", children: [$("h1", { className: "capitalize", children: ["how we are", $("br", {}), " working"] }), $("div", { children: [$("p", { className: "to-middle text-white capitalize", children: "Arhitecture modern technology Collaboration is a priority at MasBo. We believe that the best result can only be achieved through constant dialogue between all stakeholders. Our practice brings together experts in the field of architecture, design, engineering and construction, to solve any tasks assigned to us." }), $(Hs, { type: "button", children: "learn more" })] })] }), $(ta, {})] }) }) });
}
const na = "/masbo_website/assets/img-16-BcCvOyYk.jpg", ra = "/masbo_website/assets/img-17-wiKgS99T.jpg", ia = "data:image/svg+xml,%3csvg%20width='64'%20height='68'%20viewBox='0%200%2064%2068'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.9167%2012.5556L1%2019.7778V42.8889M13.9167%2012.5556L38.4583%2019.7778M13.9167%2012.5556V35.6667M38.4583%2019.7778V9.66667L50.0833%201L63%209.66667V22.6667M38.4583%2019.7778V22.6667M38.4583%2047.2222L50.0833%2039.2778L63%2047.2222V22.6667M38.4583%2047.2222V66L13.9167%2058.0556M38.4583%2047.2222V42.8889M13.9167%2058.0556L1%2066V42.8889M13.9167%2058.0556V35.6667M1%2042.8889L13.9167%2035.6667M13.9167%2035.6667L38.4583%2042.8889M38.4583%2022.6667L50.0833%2014L63%2022.6667M38.4583%2022.6667V42.8889'%20stroke='white'%20stroke-width='1.5'/%3e%3c/svg%3e", oa = "data:image/svg+xml,%3csvg%20width='56'%20height='68'%20viewBox='0%200%2056%2068'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%2067L0.999998%2014.4748L23.6667%202L23.6667%2066.3367L12.3333%2066.3367L12.3333%2036.798L33.6667%2024.9798L55%2036.798L55%2056.4949L33.6667%2056.4949L33.6667%2066.3367L44.3333%2066.3367L44.3333%2030.8889'%20stroke='white'%20stroke-width='1.5'/%3e%3c/svg%3e", sa = "data:image/svg+xml,%3csvg%20width='42'%20height='68'%20viewBox='0%200%2042%2068'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.6667%2029.0833V13.5104L1%202V56.1667L23.6667%2067M23.6667%2029.0833L41%2037.2083M23.6667%2029.0833V43.9792M41%2037.2083V59.5521L23.6667%2067M41%2037.2083L23.6667%2043.9792M23.6667%2067V43.9792'%20stroke='white'%20stroke-width='1.5'/%3e%3c/svg%3e", aa = "data:image/svg+xml,%3csvg%20width='64'%20height='63'%20viewBox='0%200%2064%2063'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.0261%202L1%2011.732V61L22.0261%2051.268M22.0261%202L42.513%2012.3402M22.0261%202V51.268M42.513%2012.3402L63%202V51.5722L42.513%2061M42.513%2012.3402V61M42.513%2061L22.0261%2051.268'%20stroke='white'%20stroke-width='1.5'/%3e%3c/svg%3e", ua = "data:image/svg+xml,%3csvg%20width='65'%20height='65'%20viewBox='0%200%2065%2065'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M51.266%2031.5053L64%2036.8105V64H51.266M51.266%2031.5053V22.2211L38.5319%2016.9158M51.266%2031.5053L38.5319%2036.8105M51.266%2031.5053V64M38.5319%2016.9158V6.96842L25.7979%201M38.5319%2016.9158L25.7979%2022.2211M38.5319%2016.9158V36.8105M25.7979%201L13.0638%206.96842V40.7895M25.7979%201V22.2211M13.0638%2040.7895L1%2046.0947V64H25.7979M13.0638%2040.7895L25.7979%2046.0947M25.7979%2064H38.5319M25.7979%2064V46.0947M25.7979%2022.2211V46.0947M38.5319%2064V36.8105M38.5319%2064H51.266'%20stroke='white'%20stroke-width='1.5'/%3e%3c/svg%3e";
function la({ img: t19, icon: e2, title: n2, className: r2 }) {
  return $("div", { className: r2, children: [$(Zs.LazyLoadImage, { src: t19, width: "100%", height: "100%", effect: "opacity", alt: n2 }), $("div", { className: "column center-y center-x gap-10", children: [$("img", { className: "icon", alt: "icon", src: e2 }), $("h5", { children: n2 })] })] });
}
function ca() {
  return $("div", { className: "container", children: $("div", { className: "row center-x center-y full-height", children: $("div", { className: "text-wrapper row gap-50", children: [$("h1", { className: "capitalize", children: ["What we ", $("br", {}), " engage?"] }), $("div", { children: [$("p", { className: "to-middle text-white capitalize", children: "Our portfolio is a long-term experience, a variety of complex projects and the implementation of innovative solutions. We approach each client and his project as a unique challenge that we accept. Responsibly performing our work, we will confidently bring it to life." }), $(Hs, { arrow: true, type: "button", children: "Learn more" })] })] }) }) });
}
const ha = [{ img: "/masbo_website/assets/img-13-gvxAk8Ki.jpg", icon: aa, title: "Interior", className: "placeholder-2" }, { img: "/masbo_website/assets/img-14-D2ut6RlI.jpg", icon: ia, title: "Architecture", className: "placeholder-1" }, { img: "/masbo_website/assets/img-15-DrmZ1q9_.jpg", icon: oa, title: "Engineering", className: "placeholder-2" }, { img: na, icon: sa, title: "Construction", className: "placeholder-1" }, { img: ra, icon: "data:image/svg+xml,%3csvg%20width='80'%20height='58'%20viewBox='0%200%2080%2058'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M28.6923%201L1%2021.2062V57H12.0769M28.6923%201L55.1539%2021.7835M28.6923%201V57M55.1539%2021.7835V57M55.1539%2021.7835H12.0769V57M55.1539%2057H71.1539V40.2577M55.1539%2057H28.6923M71.1539%2040.2577V40.2577C66.1769%2039.6559%2062.9543%2034.7008%2064.4224%2029.9073L71.1539%207.92784L78.0143%2029.6498C79.5636%2034.5552%2076.2632%2039.6586%2071.1539%2040.2577V40.2577ZM28.6923%2057H12.0769'%20stroke='white'%20stroke-width='1.5'/%3e%3c/svg%3e", title: "Landscape Design", className: "placeholder-2" }, { img: $s, icon: ua, title: "Investment projects", className: "placeholder-1" }];
function fa() {
  return $("section", { className: "services", children: [$("div", { className: "row", children: ha.slice(0, 4).map((t19, e2) => $(la, { ...t19 }, e2)) }), $("div", { className: "row", children: [$(la, { ...ha[4] }), $(ca, {}), $(la, { ...ha[5] })] })] });
}
const da = ({ src: t19, alt: e2, className: n2 }) => $("div", { className: n2, children: $(Zs.LazyLoadImage, { src: t19, width: "100%", height: "100%", effect: "opacity", alt: e2 }) }), pa = ({ icon: t19, title: e2, text: n2 }) => $("div", { className: "column center-y center-x gap-10", children: [$("img", { className: "icon", alt: "icon", src: t19 }), $("h5", { children: e2 }), $("p", { className: "to-middle text-center text-white capitalize", dangerouslySetInnerHTML: { __html: n2 } })] });
function ma() {
  return $("section", { className: "investment-projects", children: $("div", { className: "row full-height", children: [$("div", { className: "section-block", children: [$(da, { src: ra, alt: "img-17", className: "placeholder-1 full-height" }), $("div", { className: "description", children: [$("h1", { className: "capitalize", children: ["Investment", $("br", {}), " projects"] }), $("p", { className: "to-middle text-white capitalize", children: "Our portfolio is a long-term experience, a variety of complex projects and the implementation of innovative solutions. We approach each client and his project as a unique challenge that we accept. Responsibly performing our work, we will confidently bring it to life." }), $(Hs, { arrow: false, type: "button", children: "Order The Project" })] })] }), $("div", { className: "section-block", children: [$(da, { src: "/masbo_website/assets/img-19-C2NWmUJ9.jpg", alt: "img-19", className: "placeholder-1" }), $(pa, { icon: ua, title: "Investment projects", text: "MasBo is an architectural group working in <br/> the field of architecture and urban planning." }), $(da, { src: "/masbo_website/assets/img-20-CzdFevMc.jpg", alt: "img-20", className: "placeholder-2" })] }), $("div", { className: "section-block", children: [$(da, { src: "/masbo_website/assets/img-18-Cerp6Fko.jpg", alt: "img-18", className: "placeholder-1" }), $(da, { src: na, alt: "img-16", className: "placeholder-2" })] })] }) });
}
const va = [{ num: 123, title: "successful projects" }, { num: 1235, title: "people who work with us" }, { num: 23, title: "urban planning projects" }, { num: 1012, title: "Modern interiors " }];
function ga() {
  return Fs((t19) => {
    Ts.utils.toArray("li h2").forEach((e2, n2) => {
      Ts.to(e2, { innerText: va[n2].num, duration: 2, ease: "power1.out", snap: { innerText: 1 }, scrollTrigger: { trigger: ".about .container", start: "top 20%", toggleActions: "play none none none", scroller: t19.scroller } });
    });
  }), $("ul", { className: "row wrap gap-150", children: va.map((t19, e2) => $("li", { children: [$("h2", { children: "0" }), $("span", { className: "fs-14 text-white capitalize", children: t19.title })] }, e2)) });
}
function ya() {
  const { width: t19, height: e2 } = Fs();
  return $("section", { className: "about", children: $("div", { className: "container column end-x", children: [$("div", { className: "row center-y", children: [$("div", { className: "text-wrapper  center-y row gap-50", children: [$("h1", { className: "capitalize", children: ["from idea", $("br", {}), " to life"] }), $("p", { className: "to-small text-white capitalize", children: ["Arhitecture modern technology", $("br", {}), " MasBo is an architectural group working in the field of", $("br", {}), " architecture and urban planning. For our customers, we are known", $("br", {}), "as a reliable partner with high standards of quality and", $("br", {}), " responsibility."] })] }), $("div", { className: "play self-center-y center-gr", children: $("img", { className: "icon", src: "data:image/svg+xml,%3csvg%20width='16'%20height='18'%20viewBox='0%200%2016%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.8658%205.99832L4.80958%200.458317C4.31953%200.156477%203.76332%20-0.00164499%203.19744%201.29041e-05C2.63157%200.0016708%202.07618%200.163049%201.5877%200.467756C1.09921%200.772464%200.695033%201.20964%200.416212%201.73489C0.137391%202.26014%20-0.00613872%202.85475%200.000201292%203.45832V14.5783C0.000201292%2015.4854%200.338002%2016.3552%200.93929%2016.9966C1.54058%2017.638%202.3561%2017.9983%203.20645%2017.9983C3.76936%2017.9973%204.32216%2017.8387%204.80958%2017.5383L13.8658%2011.9983C14.3524%2011.6979%2014.7564%2011.2663%2015.0373%2010.7468C15.3182%2010.2272%2015.466%209.63804%2015.466%209.03832C15.466%208.43859%2015.3182%207.84941%2015.0373%207.32988C14.7564%206.81035%2014.3524%206.37873%2013.8658%206.07832V5.99832ZM12.9283%2010.1883L3.87208%2015.8083C3.66909%2015.931%203.43976%2015.9955%203.20645%2015.9955C2.97314%2015.9955%202.74381%2015.931%202.54083%2015.8083C2.33842%2015.6837%202.17034%2015.5044%202.0535%2015.2885C1.93665%2015.0725%201.87516%2014.8276%201.8752%2014.5783V3.41832C1.87516%203.16901%201.93665%202.92409%202.0535%202.70818C2.17034%202.49226%202.33842%202.31297%202.54083%202.18832C2.74464%202.06747%202.97329%202.00221%203.20645%201.99832C3.43945%202.00342%203.66783%202.06861%203.87208%202.18832L12.9283%207.76832C13.1308%207.89292%2013.299%208.07219%2013.4159%208.28811C13.5328%208.50402%2013.5943%208.74897%2013.5943%208.99832C13.5943%209.24766%2013.5328%209.49261%2013.4159%209.70853C13.299%209.92445%2013.1308%2010.1037%2012.9283%2010.2283V10.1883Z'%20fill='%231C6BCF'/%3e%3c/svg%3e", alt: "arrow" }) })] }), $(ga, {}), t19 && e2 && $(De, {})] }) });
}
function _a() {
  return $("section", { className: "architecture", children: $("div", { className: "row full-height", children: [$("div", { className: "section-block full-height", children: [$(pa, { icon: ia, title: "Architecture", text: "MasBo is an architectural group working in  <br/> the field of architecture and urban planning." }), $(pa, { icon: oa, title: "Engineering", text: "Modern solutions for the modern city." }), $(da, { src: "/masbo_website/assets/img-1-BNwLU0Tj.jpg", alt: "img-1", className: "placeholder-2" })] }), $("div", { className: "section-block full-height", children: [$(da, { src: $s, alt: "img-2", className: "placeholder-1 full-height" }), $("div", { className: "description", children: [$("h1", { className: "capitalize", children: ["innovative ", $("br", {}), " engineering &", $("br", {}), " architecture", $("br", {}), " solutions"] }), $("p", { className: "to-middle text-white capitalize", children: "We offer innovative engineering solutions that ensure the successful achievement of the client's goals. Because engineering is a result-oriented strategy in action. An individual approach and attention to detail in the development of engineering systems allows us to obtain reliable, verified solutions. Simply put, we think over the operation of facilities based on practical experience and scientific knowledge." }), $(Hs, { arrow: false, type: "button", children: "Order The Project" })] })] }), $("div", { className: "section-block full-height", children: [$(da, { src: "/masbo_website/assets/img-3-B4znrZ0Z.jpg", alt: "img-3", className: "placeholder-2" }), $(da, { src: "/masbo_website/assets/img-4-C-U5Vtyg.jpg", alt: "img-4", className: "placeholder-1" })] })] }) });
}
function ba() {
  return $("section", { className: "construction", children: $("div", { className: "row full-height", children: [$("div", { className: "section-block", children: [$(da, { src: "/masbo_website/assets/img-5-BIAjnhja.jpg", alt: "img-5", className: "placeholder-1" }), $(pa, { icon: sa, title: "Construction", text: "MasBo is an architectural group working in <br/> the field of architecture and urban planning." })] }), $("div", { className: "section-block full-height", children: [$(da, { src: "/masbo_website/assets/img-6-Bbs3LRR4.jpg", alt: "img-6", className: "placeholder-2 full-height" }), $("div", { className: "description", children: [$("h1", { className: "capitalize", children: ["innovative ", $("br", {}), " engineering", $("br", {}), " solutions"] }), $("p", { className: "to-middle text-white capitalize", children: "We offer innovative engineering solutions that ensure the successful achievement of the client's goals. Because engineering is a result-oriented strategy in action. An individual approach and attention to detail in the development of engineering systems allows us to obtain reliable, verified solutions. Simply put, we think over the operation of facilities based on practical experience and scientific knowledge." }), $(Hs, { arrow: false, type: "button", children: "Order The Project" })] })] }), $("div", { className: "section-block", children: [$(pa, { icon: aa, title: "Interior", text: "MasBo is an architectural group working in <br/> the field of architecture and urban planning." }), $(da, { src: "/masbo_website/assets/img-7-BmamNXji.jpg", alt: "img-7", className: "placeholder-2" }), $(da, { src: "/masbo_website/assets/img-8-BtYqCmbC.jpg", alt: "img-8", className: "placeholder-1" })] }), $("div", { className: "section-block full-height ", children: [$(da, { src: "/masbo_website/assets/img-9-BxUptN8g.jpg", alt: "img-9", className: "placeholder-1 full-height" }), $("div", { className: "description", children: [$("h1", { className: "capitalize", children: ["interior & ", $("br", {}), " landscape", $("br", {}), " design"] }), $("p", { className: "to-middle text-white capitalize", children: "We create a comfortable space for living and working, entertainment and education. High-quality and thoughtful design not only pleases the eye, but creates a healthy environment for a comfortable and intuitive use of the room." }), $(Hs, { arrow: false, type: "button", children: "Order The Project" })] })] }), $("div", { className: "section-block", children: [$(da, { src: "/masbo_website/assets/img-10-CBSuR36R.jpg", alt: "img-10", className: "placeholder-2" }), $(pa, { icon: ia, title: "Landscape Design", text: "MasBo is an architectural group working in <br/> the field of architecture and urban planning." })] })] }) });
}
const wa = ["/masbo_website/assets/team-circle-DaJto7iH.jpg", "/masbo_website/assets/team-circle-1-C89-BzF6.jpg", "/masbo_website/assets/team-circle-2-B_7NMk-k.jpg", "/masbo_website/assets/team-circle-3-BSRnSoOJ.jpg", "/masbo_website/assets/team-circle-4-B3Mfvny-.jpg"];
function xa() {
  const t19 = ct(null), e2 = "Meeting our team".split("").map((t20, e3) => $("span", { children: " " === t20 ? " " : t20 }, e3));
  return Fs((e3) => {
    const n2 = Ts.utils.toArray(".team li"), r2 = t19.current.querySelectorAll("span");
    Ts.set(r2, { opacity: 0, y: 20 }), Ts.to(r2, { opacity: 1, y: 0, delay: 0.3, duration: 3, stagger: 0.05, ease: "expo.out", scrollTrigger: { trigger: ".team", start: "left 40%", toggleActions: "play none none none", ...e3 } }), Ts.set(n2, { opacity: 0, y: 25 }), Ts.to(n2, { opacity: 1, y: 0, delay: 0.3, duration: 3, stagger: 0.09, ease: "expo.out", scrollTrigger: { trigger: ".team", start: "left 40%", toggleActions: "play none none none", ...e3 } });
  }), $(w, { children: [$("h1", { ref: t19, children: e2 }), $("ul", { className: "row", children: wa.map((t20, e3) => $("li", { children: $("img", { src: t20, alt: `team-img-${e3 + 1}` }) }, e3)) })] });
}
function Ta() {
  return $("section", { className: "team", children: $("div", { className: "container full-height", children: $("div", { className: "column center-y center-x gap-25 full-height", children: [$("span", { className: "fs-14 text-white text-center up-case", children: "confidently to bring idea to life." }), $(xa, {}), $("p", { className: "to-middle text-white text-center capitalize", children: "MasBo is an architectural group working in the field of architecture and urban planning. The company was founded in 2006. We offer a full range of services from interior design, individual cottages to the design and construction of residential complexes." }), $(Hs, { arrow: true, children: "Let’s work together" })] }) }) });
}
function Ca() {
  const { width: t19, height: e2, isLargeScreen: n2 } = Fs(), { setTriggerInit: r2 } = pt(Bs);
  return ks(() => (requestAnimationFrame(() => {
    t19 && e2 && Ds(Ts.to("#home-scroll > .row", { x: n2 ? "-700vw" : () => -(5033 + 4 * window.innerWidth + window.innerWidth / 3 * 2), ease: "none", scrollTrigger: { id: "home_trigger", trigger: "#home-scroll", start: "top top", end: () => "+=" + window.innerHeight, pin: true, scrub: true, invalidateOnRefresh: true, force3D: true } })), r2(true);
  }), () => {
    r2(false);
  }), { dependencies: [t19, e2, n2], revertOnUpdate: true }), $("section", { id: "home-scroll", children: [$("div", { className: "row", children: [$(ya, {}), $(_a, {}), $(ba, {}), $(ea, {}), $(fa, {}), $(ma, {}), $(Ta, {})] }), $(Ws, {})] });
}
function Pa(t19, e2, n2) {
  return e2 && function(t20, e3) {
    for (var n3 = 0; n3 < e3.length; n3++) {
      var r2 = e3[n3];
      r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t20, r2.key, r2);
    }
  }(t19.prototype, e2), t19;
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
var Sa, Ea, Oa, ka, Ma, Aa, Ra, Da, La, ja, Na, Va, Ba, Ia = function() {
  return Sa || "undefined" != typeof window && (Sa = window.gsap) && Sa.registerPlugin && Sa;
}, Fa = 1, za = [], Ua = [], Wa = [], Ha = Date.now, $a = function(t19, e2) {
  return e2;
}, Ya = function(t19, e2) {
  return ~Wa.indexOf(t19) && Wa[Wa.indexOf(t19) + 1][e2];
}, Xa = function(t19) {
  return !!~ja.indexOf(t19);
}, qa = function(t19, e2, n2, r2, i2) {
  return t19.addEventListener(e2, n2, { passive: false !== r2, capture: !!i2 });
}, Ga = function(t19, e2, n2, r2) {
  return t19.removeEventListener(e2, n2, !!r2);
}, Ka = "scrollLeft", Za = "scrollTop", Ja = function() {
  return Na && Na.isPressed || Ua.cache++;
}, Qa = function(t19, e2) {
  var n2 = function n3(r2) {
    if (r2 || 0 === r2) {
      Fa && (Oa.history.scrollRestoration = "manual");
      var i2 = Na && Na.isPressed;
      r2 = n3.v = Math.round(r2) || (Na && Na.iOS ? 1 : 0), t19(r2), n3.cacheID = Ua.cache, i2 && $a("ss", r2);
    } else (e2 || Ua.cache !== n3.cacheID || $a("ref")) && (n3.cacheID = Ua.cache, n3.v = t19());
    return n3.v + n3.offset;
  };
  return n2.offset = 0, t19 && n2;
}, tu = { s: Ka, p: "left", p2: "Left", os: "right", os2: "Right", d: "width", d2: "Width", a: "x", sc: Qa(function(t19) {
  return arguments.length ? Oa.scrollTo(t19, eu.sc()) : Oa.pageXOffset || ka[Ka] || Ma[Ka] || Aa[Ka] || 0;
}) }, eu = { s: Za, p: "top", p2: "Top", os: "bottom", os2: "Bottom", d: "height", d2: "Height", a: "y", op: tu, sc: Qa(function(t19) {
  return arguments.length ? Oa.scrollTo(tu.sc(), t19) : Oa.pageYOffset || ka[Za] || Ma[Za] || Aa[Za] || 0;
}) }, nu = function(t19, e2) {
  return (e2 && e2._ctx && e2._ctx.selector || Sa.utils.toArray)(t19)[0] || ("string" == typeof t19 && false !== Sa.config().nullTargetWarn ? console.warn("Element not found:", t19) : null);
}, ru = function(t19, e2) {
  var n2 = e2.s, r2 = e2.sc;
  Xa(t19) && (t19 = ka.scrollingElement || Ma);
  var i2 = Ua.indexOf(t19), o2 = r2 === eu.sc ? 1 : 2;
  !~i2 && (i2 = Ua.push(t19) - 1), Ua[i2 + o2] || qa(t19, "scroll", Ja);
  var s2 = Ua[i2 + o2], a2 = s2 || (Ua[i2 + o2] = Qa(Ya(t19, n2), true) || (Xa(t19) ? r2 : Qa(function(e3) {
    return arguments.length ? t19[n2] = e3 : t19[n2];
  })));
  return a2.target = t19, s2 || (a2.smooth = "smooth" === Sa.getProperty(t19, "scrollBehavior")), a2;
}, iu = function(t19, e2, n2) {
  var r2 = t19, i2 = t19, o2 = Ha(), s2 = o2, a2 = e2 || 50, u2 = Math.max(500, 3 * a2), l2 = function(t20, e3) {
    var u3 = Ha();
    e3 || u3 - o2 > a2 ? (i2 = r2, r2 = t20, s2 = o2, o2 = u3) : n2 ? r2 += t20 : r2 = i2 + (t20 - i2) / (u3 - s2) * (o2 - s2);
  };
  return { update: l2, reset: function() {
    i2 = r2 = n2 ? 0 : r2, s2 = o2 = 0;
  }, getVelocity: function(t20) {
    var e3 = s2, a3 = i2, c2 = Ha();
    return (t20 || 0 === t20) && t20 !== r2 && l2(t20), o2 === s2 || c2 - s2 > u2 ? 0 : (r2 + (n2 ? a3 : -a3)) / ((n2 ? c2 : o2) - e3) * 1e3;
  } };
}, ou = function(t19, e2) {
  return e2 && !t19._gsapAllow && t19.preventDefault(), t19.changedTouches ? t19.changedTouches[0] : t19;
}, su = function(t19) {
  var e2 = Math.max.apply(Math, t19), n2 = Math.min.apply(Math, t19);
  return Math.abs(e2) >= Math.abs(n2) ? e2 : n2;
}, au = function() {
  (La = Sa.core.globals().ScrollTrigger) && La.core && function() {
    var t19 = La.core, e2 = t19.bridge || {}, n2 = t19._scrollers, r2 = t19._proxies;
    n2.push.apply(n2, Ua), r2.push.apply(r2, Wa), Ua = n2, Wa = r2, $a = function(t20, n3) {
      return e2[t20](n3);
    };
  }();
}, uu = function(t19) {
  return Sa = t19 || Ia(), !Ea && Sa && "undefined" != typeof document && document.body && (Oa = window, ka = document, Ma = ka.documentElement, Aa = ka.body, ja = [Oa, ka, Ma, Aa], Sa.utils.clamp, Ba = Sa.core.context || function() {
  }, Da = "onpointerenter" in Aa ? "pointer" : "mouse", Ra = lu.isTouch = Oa.matchMedia && Oa.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Oa || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Va = lu.eventTypes = ("ontouchstart" in Ma ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Ma ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
    return Fa = 0;
  }, 500), au(), Ea = 1), Ea;
};
tu.op = eu, Ua.cache = 0;
var lu = function() {
  function t19(t20) {
    this.init(t20);
  }
  return t19.prototype.init = function(t20) {
    Ea || uu(Sa) || console.warn("Please gsap.registerPlugin(Observer)"), La || au();
    var e2 = t20.tolerance, n2 = t20.dragMinimum, r2 = t20.type, i2 = t20.target, o2 = t20.lineHeight, s2 = t20.debounce, a2 = t20.preventDefault, u2 = t20.onStop, l2 = t20.onStopDelay, c2 = t20.ignore, h2 = t20.wheelSpeed, f2 = t20.event, d2 = t20.onDragStart, p2 = t20.onDragEnd, m2 = t20.onDrag, v2 = t20.onPress, g2 = t20.onRelease, y2 = t20.onRight, _2 = t20.onLeft, b2 = t20.onUp, w2 = t20.onDown, x2 = t20.onChangeX, T2 = t20.onChangeY, C2 = t20.onChange, P2 = t20.onToggleX, S2 = t20.onToggleY, E2 = t20.onHover, O2 = t20.onHoverEnd, k2 = t20.onMove, M2 = t20.ignoreCheck, A2 = t20.isNormalizer, R2 = t20.onGestureStart, D2 = t20.onGestureEnd, L2 = t20.onWheel, j2 = t20.onEnable, N2 = t20.onDisable, V2 = t20.onClick, B2 = t20.scrollSpeed, I2 = t20.capture, F2 = t20.allowClicks, z2 = t20.lockAxis, U2 = t20.onLockAxis;
    this.target = i2 = nu(i2) || Ma, this.vars = t20, c2 && (c2 = Sa.utils.toArray(c2)), e2 = e2 || 1e-9, n2 = n2 || 0, h2 = h2 || 1, B2 = B2 || 1, r2 = r2 || "wheel,touch,pointer", s2 = false !== s2, o2 || (o2 = parseFloat(Oa.getComputedStyle(Aa).lineHeight) || 22);
    var W2, H2, $2, Y2, X2, q2, G2, K2 = this, Z2 = 0, J2 = 0, Q2 = t20.passive || !a2 && false !== t20.passive, tt2 = ru(i2, tu), et2 = ru(i2, eu), nt2 = tt2(), rt2 = et2(), it2 = ~r2.indexOf("touch") && !~r2.indexOf("pointer") && "pointerdown" === Va[0], ot2 = Xa(i2), st2 = i2.ownerDocument || ka, at2 = [0, 0, 0], ut2 = [0, 0, 0], lt2 = 0, ct2 = function() {
      return lt2 = Ha();
    }, ht2 = function(t21, e3) {
      return (K2.event = t21) && c2 && ~c2.indexOf(t21.target) || e3 && it2 && "touch" !== t21.pointerType || M2 && M2(t21, e3);
    }, ft2 = function() {
      var t21 = K2.deltaX = su(at2), n3 = K2.deltaY = su(ut2), r3 = Math.abs(t21) >= e2, i3 = Math.abs(n3) >= e2;
      C2 && (r3 || i3) && C2(K2, t21, n3, at2, ut2), r3 && (y2 && K2.deltaX > 0 && y2(K2), _2 && K2.deltaX < 0 && _2(K2), x2 && x2(K2), P2 && K2.deltaX < 0 != Z2 < 0 && P2(K2), Z2 = K2.deltaX, at2[0] = at2[1] = at2[2] = 0), i3 && (w2 && K2.deltaY > 0 && w2(K2), b2 && K2.deltaY < 0 && b2(K2), T2 && T2(K2), S2 && K2.deltaY < 0 != J2 < 0 && S2(K2), J2 = K2.deltaY, ut2[0] = ut2[1] = ut2[2] = 0), (Y2 || $2) && (k2 && k2(K2), $2 && (d2 && 1 === $2 && d2(K2), m2 && m2(K2), $2 = 0), Y2 = false), q2 && !(q2 = false) && U2 && U2(K2), X2 && (L2(K2), X2 = false), W2 = 0;
    }, dt2 = function(t21, e3, n3) {
      at2[n3] += t21, ut2[n3] += e3, K2._vx.update(t21), K2._vy.update(e3), s2 ? W2 || (W2 = requestAnimationFrame(ft2)) : ft2();
    }, pt2 = function(t21, e3) {
      z2 && !G2 && (K2.axis = G2 = Math.abs(t21) > Math.abs(e3) ? "x" : "y", q2 = true), "y" !== G2 && (at2[2] += t21, K2._vx.update(t21, true)), "x" !== G2 && (ut2[2] += e3, K2._vy.update(e3, true)), s2 ? W2 || (W2 = requestAnimationFrame(ft2)) : ft2();
    }, mt2 = function(t21) {
      if (!ht2(t21, 1)) {
        var e3 = (t21 = ou(t21, a2)).clientX, r3 = t21.clientY, i3 = e3 - K2.x, o3 = r3 - K2.y, s3 = K2.isDragging;
        K2.x = e3, K2.y = r3, (s3 || (i3 || o3) && (Math.abs(K2.startX - e3) >= n2 || Math.abs(K2.startY - r3) >= n2)) && ($2 = s3 ? 2 : 1, s3 || (K2.isDragging = true), pt2(i3, o3));
      }
    }, vt2 = K2.onPress = function(t21) {
      ht2(t21, 1) || t21 && t21.button || (K2.axis = G2 = null, H2.pause(), K2.isPressed = true, t21 = ou(t21), Z2 = J2 = 0, K2.startX = K2.x = t21.clientX, K2.startY = K2.y = t21.clientY, K2._vx.reset(), K2._vy.reset(), qa(A2 ? i2 : st2, Va[1], mt2, Q2, true), K2.deltaX = K2.deltaY = 0, v2 && v2(K2));
    }, gt2 = K2.onRelease = function(t21) {
      if (!ht2(t21, 1)) {
        Ga(A2 ? i2 : st2, Va[1], mt2, true);
        var e3 = !isNaN(K2.y - K2.startY), n3 = K2.isDragging, r3 = n3 && (Math.abs(K2.x - K2.startX) > 3 || Math.abs(K2.y - K2.startY) > 3), o3 = ou(t21);
        !r3 && e3 && (K2._vx.reset(), K2._vy.reset(), a2 && F2 && Sa.delayedCall(0.08, function() {
          if (Ha() - lt2 > 300 && !t21.defaultPrevented) {
            if (t21.target.click) t21.target.click();
            else if (st2.createEvent) {
              var e4 = st2.createEvent("MouseEvents");
              e4.initMouseEvent("click", true, true, Oa, 1, o3.screenX, o3.screenY, o3.clientX, o3.clientY, false, false, false, false, 0, null), t21.target.dispatchEvent(e4);
            }
          }
        })), K2.isDragging = K2.isGesturing = K2.isPressed = false, u2 && n3 && !A2 && H2.restart(true), $2 && ft2(), p2 && n3 && p2(K2), g2 && g2(K2, r3);
      }
    }, yt2 = function(t21) {
      return t21.touches && t21.touches.length > 1 && (K2.isGesturing = true) && R2(t21, K2.isDragging);
    }, _t2 = function() {
      return (K2.isGesturing = false) || D2(K2);
    }, bt2 = function(t21) {
      if (!ht2(t21)) {
        var e3 = tt2(), n3 = et2();
        dt2((e3 - nt2) * B2, (n3 - rt2) * B2, 1), nt2 = e3, rt2 = n3, u2 && H2.restart(true);
      }
    }, wt2 = function(t21) {
      if (!ht2(t21)) {
        t21 = ou(t21, a2), L2 && (X2 = true);
        var e3 = (1 === t21.deltaMode ? o2 : 2 === t21.deltaMode ? Oa.innerHeight : 1) * h2;
        dt2(t21.deltaX * e3, t21.deltaY * e3, 0), u2 && !A2 && H2.restart(true);
      }
    }, xt2 = function(t21) {
      if (!ht2(t21)) {
        var e3 = t21.clientX, n3 = t21.clientY, r3 = e3 - K2.x, i3 = n3 - K2.y;
        K2.x = e3, K2.y = n3, Y2 = true, u2 && H2.restart(true), (r3 || i3) && pt2(r3, i3);
      }
    }, Tt2 = function(t21) {
      K2.event = t21, E2(K2);
    }, Ct2 = function(t21) {
      K2.event = t21, O2(K2);
    }, Pt2 = function(t21) {
      return ht2(t21) || ou(t21, a2) && V2(K2);
    };
    H2 = K2._dc = Sa.delayedCall(l2 || 0.25, function() {
      K2._vx.reset(), K2._vy.reset(), H2.pause(), u2 && u2(K2);
    }).pause(), K2.deltaX = K2.deltaY = 0, K2._vx = iu(0, 50, true), K2._vy = iu(0, 50, true), K2.scrollX = tt2, K2.scrollY = et2, K2.isDragging = K2.isGesturing = K2.isPressed = false, Ba(this), K2.enable = function(t21) {
      return K2.isEnabled || (qa(ot2 ? st2 : i2, "scroll", Ja), r2.indexOf("scroll") >= 0 && qa(ot2 ? st2 : i2, "scroll", bt2, Q2, I2), r2.indexOf("wheel") >= 0 && qa(i2, "wheel", wt2, Q2, I2), (r2.indexOf("touch") >= 0 && Ra || r2.indexOf("pointer") >= 0) && (qa(i2, Va[0], vt2, Q2, I2), qa(st2, Va[2], gt2), qa(st2, Va[3], gt2), F2 && qa(i2, "click", ct2, true, true), V2 && qa(i2, "click", Pt2), R2 && qa(st2, "gesturestart", yt2), D2 && qa(st2, "gestureend", _t2), E2 && qa(i2, Da + "enter", Tt2), O2 && qa(i2, Da + "leave", Ct2), k2 && qa(i2, Da + "move", xt2)), K2.isEnabled = true, K2.isDragging = K2.isGesturing = K2.isPressed = Y2 = $2 = false, K2._vx.reset(), K2._vy.reset(), nt2 = tt2(), rt2 = et2(), t21 && t21.type && vt2(t21), j2 && j2(K2)), K2;
    }, K2.disable = function() {
      K2.isEnabled && (za.filter(function(t21) {
        return t21 !== K2 && Xa(t21.target);
      }).length || Ga(ot2 ? st2 : i2, "scroll", Ja), K2.isPressed && (K2._vx.reset(), K2._vy.reset(), Ga(A2 ? i2 : st2, Va[1], mt2, true)), Ga(ot2 ? st2 : i2, "scroll", bt2, I2), Ga(i2, "wheel", wt2, I2), Ga(i2, Va[0], vt2, I2), Ga(st2, Va[2], gt2), Ga(st2, Va[3], gt2), Ga(i2, "click", ct2, true), Ga(i2, "click", Pt2), Ga(st2, "gesturestart", yt2), Ga(st2, "gestureend", _t2), Ga(i2, Da + "enter", Tt2), Ga(i2, Da + "leave", Ct2), Ga(i2, Da + "move", xt2), K2.isEnabled = K2.isPressed = K2.isDragging = false, N2 && N2(K2));
    }, K2.kill = K2.revert = function() {
      K2.disable();
      var t21 = za.indexOf(K2);
      t21 >= 0 && za.splice(t21, 1), Na === K2 && (Na = 0);
    }, za.push(K2), A2 && Xa(i2) && (Na = K2), K2.enable(f2);
  }, Pa(t19, [{ key: "velocityX", get: function() {
    return this._vx.getVelocity();
  } }, { key: "velocityY", get: function() {
    return this._vy.getVelocity();
  } }]), t19;
}();
lu.version = "3.12.7", lu.create = function(t19) {
  return new lu(t19);
}, lu.register = uu, lu.getAll = function() {
  return za.slice();
}, lu.getById = function(t19) {
  return za.filter(function(e2) {
    return e2.vars.id === t19;
  })[0];
}, Ia() && Sa.registerPlugin(lu);
/*!
 * ScrollTrigger 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var cu, hu, fu, du, pu, mu, vu, gu, yu, _u, bu, wu, xu, Tu, Cu, Pu, Su, Eu, Ou, ku, Mu, Au, Ru, Du, Lu, ju, Nu, Vu, Bu, Iu, Fu, zu, Uu, Wu, Hu, $u, Yu, Xu, qu = 1, Gu = Date.now, Ku = Gu(), Zu = 0, Ju = 0, Qu = function(t19, e2, n2) {
  var r2 = dl(t19) && ("clamp(" === t19.substr(0, 6) || t19.indexOf("max") > -1);
  return n2["_" + e2 + "Clamp"] = r2, r2 ? t19.substr(6, t19.length - 7) : t19;
}, tl = function(t19, e2) {
  return !e2 || dl(t19) && "clamp(" === t19.substr(0, 6) ? t19 : "clamp(" + t19 + ")";
}, el = function t16() {
  return Ju && requestAnimationFrame(t16);
}, nl = function() {
  return Tu = 1;
}, rl = function() {
  return Tu = 0;
}, il = function(t19) {
  return t19;
}, ol = function(t19) {
  return Math.round(1e5 * t19) / 1e5 || 0;
}, sl = function() {
  return "undefined" != typeof window;
}, al = function() {
  return cu || sl() && (cu = window.gsap) && cu.registerPlugin && cu;
}, ul = function(t19) {
  return !!~vu.indexOf(t19);
}, ll = function(t19) {
  return ("Height" === t19 ? Fu : fu["inner" + t19]) || pu["client" + t19] || mu["client" + t19];
}, cl = function(t19) {
  return Ya(t19, "getBoundingClientRect") || (ul(t19) ? function() {
    return Tc.width = fu.innerWidth, Tc.height = Fu, Tc;
  } : function() {
    return Nl(t19);
  });
}, hl = function(t19, e2) {
  var n2 = e2.s, r2 = e2.d2, i2 = e2.d, o2 = e2.a;
  return Math.max(0, (n2 = "scroll" + r2) && (o2 = Ya(t19, n2)) ? o2() - cl(t19)()[i2] : ul(t19) ? (pu[n2] || mu[n2]) - ll(r2) : t19[n2] - t19["offset" + r2]);
}, fl = function(t19, e2) {
  for (var n2 = 0; n2 < Ou.length; n2 += 3) (!e2 || ~e2.indexOf(Ou[n2 + 1])) && t19(Ou[n2], Ou[n2 + 1], Ou[n2 + 2]);
}, dl = function(t19) {
  return "string" == typeof t19;
}, pl = function(t19) {
  return "function" == typeof t19;
}, ml = function(t19) {
  return "number" == typeof t19;
}, vl = function(t19) {
  return "object" == typeof t19;
}, gl = function(t19, e2, n2) {
  return t19 && t19.progress(e2 ? 0 : 1) && n2 && t19.pause();
}, yl = function(t19, e2) {
  if (t19.enabled) {
    var n2 = t19._ctx ? t19._ctx.add(function() {
      return e2(t19);
    }) : e2(t19);
    n2 && n2.totalTime && (t19.callbackAnimation = n2);
  }
}, _l = Math.abs, bl = "left", wl = "right", xl = "bottom", Tl = "width", Cl = "height", Pl = "Right", Sl = "Left", El = "Top", Ol = "Bottom", kl = "padding", Ml = "margin", Al = "Width", Rl = "Height", Dl = "px", Ll = function(t19) {
  return fu.getComputedStyle(t19);
}, jl = function(t19, e2) {
  for (var n2 in e2) n2 in t19 || (t19[n2] = e2[n2]);
  return t19;
}, Nl = function(t19, e2) {
  var n2 = e2 && "matrix(1, 0, 0, 1, 0, 0)" !== Ll(t19)[Cu] && cu.to(t19, { x: 0, y: 0, xPercent: 0, yPercent: 0, rotation: 0, rotationX: 0, rotationY: 0, scale: 1, skewX: 0, skewY: 0 }).progress(1), r2 = t19.getBoundingClientRect();
  return n2 && n2.progress(0).kill(), r2;
}, Vl = function(t19, e2) {
  var n2 = e2.d2;
  return t19["offset" + n2] || t19["client" + n2] || 0;
}, Bl = function(t19) {
  var e2, n2 = [], r2 = t19.labels, i2 = t19.duration();
  for (e2 in r2) n2.push(r2[e2] / i2);
  return n2;
}, Il = function(t19) {
  var e2 = cu.utils.snap(t19), n2 = Array.isArray(t19) && t19.slice(0).sort(function(t20, e3) {
    return t20 - e3;
  });
  return n2 ? function(t20, r2, i2) {
    var o2;
    if (void 0 === i2 && (i2 = 1e-3), !r2) return e2(t20);
    if (r2 > 0) {
      for (t20 -= i2, o2 = 0; o2 < n2.length; o2++) if (n2[o2] >= t20) return n2[o2];
      return n2[o2 - 1];
    }
    for (o2 = n2.length, t20 += i2; o2--; ) if (n2[o2] <= t20) return n2[o2];
    return n2[0];
  } : function(n3, r2, i2) {
    void 0 === i2 && (i2 = 1e-3);
    var o2 = e2(n3);
    return !r2 || Math.abs(o2 - n3) < i2 || o2 - n3 < 0 == r2 < 0 ? o2 : e2(r2 < 0 ? n3 - t19 : n3 + t19);
  };
}, Fl = function(t19, e2, n2, r2) {
  return n2.split(",").forEach(function(n3) {
    return t19(e2, n3, r2);
  });
}, zl = function(t19, e2, n2, r2, i2) {
  return t19.addEventListener(e2, n2, { passive: !r2, capture: !!i2 });
}, Ul = function(t19, e2, n2, r2) {
  return t19.removeEventListener(e2, n2, !!r2);
}, Wl = function(t19, e2, n2) {
  (n2 = n2 && n2.wheelHandler) && (t19(e2, "wheel", n2), t19(e2, "touchmove", n2));
}, Hl = { startColor: "green", endColor: "red", indent: 0, fontSize: "16px", fontWeight: "normal" }, $l = { toggleActions: "play", anticipatePin: 0 }, Yl = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 }, Xl = function(t19, e2) {
  if (dl(t19)) {
    var n2 = t19.indexOf("="), r2 = ~n2 ? +(t19.charAt(n2 - 1) + 1) * parseFloat(t19.substr(n2 + 1)) : 0;
    ~n2 && (t19.indexOf("%") > n2 && (r2 *= e2 / 100), t19 = t19.substr(0, n2 - 1)), t19 = r2 + (t19 in Yl ? Yl[t19] * e2 : ~t19.indexOf("%") ? parseFloat(t19) * e2 / 100 : parseFloat(t19) || 0);
  }
  return t19;
}, ql = function(t19, e2, n2, r2, i2, o2, s2, a2) {
  var u2 = i2.startColor, l2 = i2.endColor, c2 = i2.fontSize, h2 = i2.indent, f2 = i2.fontWeight, d2 = du.createElement("div"), p2 = ul(n2) || "fixed" === Ya(n2, "pinType"), m2 = -1 !== t19.indexOf("scroller"), v2 = p2 ? mu : n2, g2 = -1 !== t19.indexOf("start"), y2 = g2 ? u2 : l2, _2 = "border-color:" + y2 + ";font-size:" + c2 + ";color:" + y2 + ";font-weight:" + f2 + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
  return _2 += "position:" + ((m2 || a2) && p2 ? "fixed;" : "absolute;"), (m2 || a2 || !p2) && (_2 += (r2 === eu ? wl : xl) + ":" + (o2 + parseFloat(h2)) + "px;"), s2 && (_2 += "box-sizing:border-box;text-align:left;width:" + s2.offsetWidth + "px;"), d2._isStart = g2, d2.setAttribute("class", "gsap-marker-" + t19 + (e2 ? " marker-" + e2 : "")), d2.style.cssText = _2, d2.innerText = e2 || 0 === e2 ? t19 + "-" + e2 : t19, v2.children[0] ? v2.insertBefore(d2, v2.children[0]) : v2.appendChild(d2), d2._offset = d2["offset" + r2.op.d2], Gl(d2, 0, r2, g2), d2;
}, Gl = function(t19, e2, n2, r2) {
  var i2 = { display: "block" }, o2 = n2[r2 ? "os2" : "p2"], s2 = n2[r2 ? "p2" : "os2"];
  t19._isFlipped = r2, i2[n2.a + "Percent"] = r2 ? -100 : 0, i2[n2.a] = r2 ? "1px" : 0, i2["border" + o2 + Al] = 1, i2["border" + s2 + Al] = 0, i2[n2.p] = e2 + "px", cu.set(t19, i2);
}, Kl = [], Zl = {}, Jl = function() {
  return Gu() - Zu > 34 && (Hu || (Hu = requestAnimationFrame(vc)));
}, Ql = function() {
  (!Ru || !Ru.isPressed || Ru.startX > mu.clientWidth) && (Ua.cache++, Ru ? Hu || (Hu = requestAnimationFrame(vc)) : vc(), Zu || oc("scrollStart"), Zu = Gu());
}, tc = function() {
  ju = fu.innerWidth, Lu = fu.innerHeight;
}, ec = function(t19) {
  Ua.cache++, (true === t19 || !xu && !Au && !du.fullscreenElement && !du.webkitFullscreenElement && (!Du || ju !== fu.innerWidth || Math.abs(fu.innerHeight - Lu) > 0.25 * fu.innerHeight)) && gu.restart(true);
}, nc = {}, rc = [], ic = function t17() {
  return Ul(Mc, "scrollEnd", t17) || dc(true);
}, oc = function(t19) {
  return nc[t19] && nc[t19].map(function(t20) {
    return t20();
  }) || rc;
}, sc = [], ac = function(t19) {
  for (var e2 = 0; e2 < sc.length; e2 += 5) (!t19 || sc[e2 + 4] && sc[e2 + 4].query === t19) && (sc[e2].style.cssText = sc[e2 + 1], sc[e2].getBBox && sc[e2].setAttribute("transform", sc[e2 + 2] || ""), sc[e2 + 3].uncache = 1);
}, uc = function(t19, e2) {
  var n2;
  for (Pu = 0; Pu < Kl.length; Pu++) !(n2 = Kl[Pu]) || e2 && n2._ctx !== e2 || (t19 ? n2.kill(1) : n2.revert(true, true));
  zu = true, e2 && ac(e2), e2 || oc("revert");
}, lc = function(t19, e2) {
  Ua.cache++, (e2 || !$u) && Ua.forEach(function(t20) {
    return pl(t20) && t20.cacheID++ && (t20.rec = 0);
  }), dl(t19) && (fu.history.scrollRestoration = Bu = t19);
}, cc = 0, hc = function() {
  mu.appendChild(Iu), Fu = !Ru && Iu.offsetHeight || fu.innerHeight, mu.removeChild(Iu);
}, fc = function(t19) {
  return yu(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e2) {
    return e2.style.display = t19 ? "none" : "block";
  });
}, dc = function(t19, e2) {
  if (pu = du.documentElement, mu = du.body, vu = [fu, du, pu, mu], !Zu || t19 || zu) {
    hc(), $u = Mc.isRefreshing = true, Ua.forEach(function(t20) {
      return pl(t20) && ++t20.cacheID && (t20.rec = t20());
    });
    var n2 = oc("refreshInit");
    ku && Mc.sort(), e2 || uc(), Ua.forEach(function(t20) {
      pl(t20) && (t20.smooth && (t20.target.style.scrollBehavior = "auto"), t20(0));
    }), Kl.slice(0).forEach(function(t20) {
      return t20.refresh();
    }), zu = false, Kl.forEach(function(t20) {
      if (t20._subPinOffset && t20.pin) {
        var e3 = t20.vars.horizontal ? "offsetWidth" : "offsetHeight", n3 = t20.pin[e3];
        t20.revert(true, 1), t20.adjustPinSpacing(t20.pin[e3] - n3), t20.refresh();
      }
    }), Uu = 1, fc(true), Kl.forEach(function(t20) {
      var e3 = hl(t20.scroller, t20._dir), n3 = "max" === t20.vars.end || t20._endClamp && t20.end > e3, r2 = t20._startClamp && t20.start >= e3;
      (n3 || r2) && t20.setPositions(r2 ? e3 - 1 : t20.start, n3 ? Math.max(r2 ? e3 : t20.start + 1, e3) : t20.end, true);
    }), fc(false), Uu = 0, n2.forEach(function(t20) {
      return t20 && t20.render && t20.render(-1);
    }), Ua.forEach(function(t20) {
      pl(t20) && (t20.smooth && requestAnimationFrame(function() {
        return t20.target.style.scrollBehavior = "smooth";
      }), t20.rec && t20(t20.rec));
    }), lc(Bu, 1), gu.pause(), cc++, $u = 2, vc(2), Kl.forEach(function(t20) {
      return pl(t20.vars.onRefresh) && t20.vars.onRefresh(t20);
    }), $u = Mc.isRefreshing = false, oc("refresh");
  } else zl(Mc, "scrollEnd", ic);
}, pc = 0, mc = 1, vc = function(t19) {
  if (2 === t19 || !$u && !zu) {
    Mc.isUpdating = true, Xu && Xu.update(0);
    var e2 = Kl.length, n2 = Gu(), r2 = n2 - Ku >= 50, i2 = e2 && Kl[0].scroll();
    if (mc = pc > i2 ? -1 : 1, $u || (pc = i2), r2 && (Zu && !Tu && n2 - Zu > 200 && (Zu = 0, oc("scrollEnd")), bu = Ku, Ku = n2), mc < 0) {
      for (Pu = e2; Pu-- > 0; ) Kl[Pu] && Kl[Pu].update(0, r2);
      mc = 1;
    } else for (Pu = 0; Pu < e2; Pu++) Kl[Pu] && Kl[Pu].update(0, r2);
    Mc.isUpdating = false;
  }
  Hu = 0;
}, gc = [bl, "top", xl, wl, Ml + Ol, Ml + Pl, Ml + El, Ml + Sl, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], yc = gc.concat([Tl, Cl, "boxSizing", "max" + Al, "max" + Rl, "position", Ml, kl, kl + El, kl + Pl, kl + Ol, kl + Sl]), _c = function(t19, e2, n2, r2) {
  if (!t19._gsap.swappedIn) {
    for (var i2, o2 = gc.length, s2 = e2.style, a2 = t19.style; o2--; ) s2[i2 = gc[o2]] = n2[i2];
    s2.position = "absolute" === n2.position ? "absolute" : "relative", "inline" === n2.display && (s2.display = "inline-block"), a2[xl] = a2[wl] = "auto", s2.flexBasis = n2.flexBasis || "auto", s2.overflow = "visible", s2.boxSizing = "border-box", s2[Tl] = Vl(t19, tu) + Dl, s2[Cl] = Vl(t19, eu) + Dl, s2[kl] = a2[Ml] = a2.top = a2[bl] = "0", wc(r2), a2[Tl] = a2["max" + Al] = n2[Tl], a2[Cl] = a2["max" + Rl] = n2[Cl], a2[kl] = n2[kl], t19.parentNode !== e2 && (t19.parentNode.insertBefore(e2, t19), e2.appendChild(t19)), t19._gsap.swappedIn = true;
  }
}, bc = /([A-Z])/g, wc = function(t19) {
  if (t19) {
    var e2, n2, r2 = t19.t.style, i2 = t19.length, o2 = 0;
    for ((t19.t._gsap || cu.core.getCache(t19.t)).uncache = 1; o2 < i2; o2 += 2) n2 = t19[o2 + 1], e2 = t19[o2], n2 ? r2[e2] = n2 : r2[e2] && r2.removeProperty(e2.replace(bc, "-$1").toLowerCase());
  }
}, xc = function(t19) {
  for (var e2 = yc.length, n2 = t19.style, r2 = [], i2 = 0; i2 < e2; i2++) r2.push(yc[i2], n2[yc[i2]]);
  return r2.t = t19, r2;
}, Tc = { left: 0, top: 0 }, Cc = function(t19, e2, n2, r2, i2, o2, s2, a2, u2, l2, c2, h2, f2, d2) {
  pl(t19) && (t19 = t19(a2)), dl(t19) && "max" === t19.substr(0, 3) && (t19 = h2 + ("=" === t19.charAt(4) ? Xl("0" + t19.substr(3), n2) : 0));
  var p2, m2, v2, g2 = f2 ? f2.time() : 0;
  if (f2 && f2.seek(0), isNaN(t19) || (t19 = +t19), ml(t19)) f2 && (t19 = cu.utils.mapRange(f2.scrollTrigger.start, f2.scrollTrigger.end, 0, h2, t19)), s2 && Gl(s2, n2, r2, true);
  else {
    pl(e2) && (e2 = e2(a2));
    var y2, _2, b2, w2, x2 = (t19 || "0").split(" ");
    v2 = nu(e2, a2) || mu, (y2 = Nl(v2) || {}) && (y2.left || y2.top) || "none" !== Ll(v2).display || (w2 = v2.style.display, v2.style.display = "block", y2 = Nl(v2), w2 ? v2.style.display = w2 : v2.style.removeProperty("display")), _2 = Xl(x2[0], y2[r2.d]), b2 = Xl(x2[1] || "0", n2), t19 = y2[r2.p] - u2[r2.p] - l2 + _2 + i2 - b2, s2 && Gl(s2, b2, r2, n2 - b2 < 20 || s2._isStart && b2 > 20), n2 -= n2 - b2;
  }
  if (d2 && (a2[d2] = t19 || -1e-3, t19 < 0 && (t19 = 0)), o2) {
    var T2 = t19 + n2, C2 = o2._isStart;
    p2 = "scroll" + r2.d2, Gl(o2, T2, r2, C2 && T2 > 20 || !C2 && (c2 ? Math.max(mu[p2], pu[p2]) : o2.parentNode[p2]) <= T2 + 1), c2 && (u2 = Nl(s2), c2 && (o2.style[r2.op.p] = u2[r2.op.p] - r2.op.m - o2._offset + Dl));
  }
  return f2 && v2 && (p2 = Nl(v2), f2.seek(h2), m2 = Nl(v2), f2._caScrollDist = p2[r2.p] - m2[r2.p], t19 = t19 / f2._caScrollDist * h2), f2 && f2.seek(g2), f2 ? t19 : Math.round(t19);
}, Pc = /(webkit|moz|length|cssText|inset)/i, Sc = function(t19, e2, n2, r2) {
  if (t19.parentNode !== e2) {
    var i2, o2, s2 = t19.style;
    if (e2 === mu) {
      for (i2 in t19._stOrig = s2.cssText, o2 = Ll(t19)) +i2 || Pc.test(i2) || !o2[i2] || "string" != typeof s2[i2] || "0" === i2 || (s2[i2] = o2[i2]);
      s2.top = n2, s2.left = r2;
    } else s2.cssText = t19._stOrig;
    cu.core.getCache(t19).uncache = 1, e2.appendChild(t19);
  }
}, Ec = function(t19, e2, n2) {
  var r2 = e2, i2 = r2;
  return function(e3) {
    var o2 = Math.round(t19());
    return o2 !== r2 && o2 !== i2 && Math.abs(o2 - r2) > 3 && Math.abs(o2 - i2) > 3 && (e3 = o2, n2 && n2()), i2 = r2, r2 = Math.round(e3);
  };
}, Oc = function(t19, e2, n2) {
  var r2 = {};
  r2[e2.p] = "+=" + n2, cu.set(t19, r2);
}, kc = function(t19, e2) {
  var n2 = ru(t19, e2), r2 = "_scroll" + e2.p2, i2 = function e3(i3, o2, s2, a2, u2) {
    var l2 = e3.tween, c2 = o2.onComplete, h2 = {};
    s2 = s2 || n2();
    var f2 = Ec(n2, s2, function() {
      l2.kill(), e3.tween = 0;
    });
    return u2 = a2 && u2 || 0, a2 = a2 || i3 - s2, l2 && l2.kill(), o2[r2] = i3, o2.inherit = false, o2.modifiers = h2, h2[r2] = function() {
      return f2(s2 + a2 * l2.ratio + u2 * l2.ratio * l2.ratio);
    }, o2.onUpdate = function() {
      Ua.cache++, e3.tween && vc();
    }, o2.onComplete = function() {
      e3.tween = 0, c2 && c2.call(l2);
    }, l2 = e3.tween = cu.to(t19, o2);
  };
  return t19[r2] = n2, n2.wheelHandler = function() {
    return i2.tween && i2.tween.kill() && (i2.tween = 0);
  }, zl(t19, "wheel", n2.wheelHandler), Mc.isTouch && zl(t19, "touchmove", n2.wheelHandler), i2;
}, Mc = function() {
  function t19(e2, n2) {
    hu || t19.register(cu) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Vu(this), this.init(e2, n2);
  }
  return t19.prototype.init = function(e2, n2) {
    if (this.progress = this.start = 0, this.vars && this.kill(true, true), Ju) {
      var r2, i2, o2, s2, a2, u2, l2, c2, h2, f2, d2, p2, m2, v2, g2, y2, _2, b2, w2, x2, T2, C2, P2, S2, E2, O2, k2, M2, A2, R2, D2, L2, j2, N2, V2, B2, I2, F2, z2, U2, W2, H2, $2 = e2 = jl(dl(e2) || ml(e2) || e2.nodeType ? { trigger: e2 } : e2, $l), Y2 = $2.onUpdate, X2 = $2.toggleClass, q2 = $2.id, G2 = $2.onToggle, K2 = $2.onRefresh, Z2 = $2.scrub, J2 = $2.trigger, Q2 = $2.pin, tt2 = $2.pinSpacing, et2 = $2.invalidateOnRefresh, nt2 = $2.anticipatePin, rt2 = $2.onScrubComplete, it2 = $2.onSnapComplete, ot2 = $2.once, st2 = $2.snap, at2 = $2.pinReparent, ut2 = $2.pinSpacer, lt2 = $2.containerAnimation, ct2 = $2.fastScrollEnd, ht2 = $2.preventOverlaps, ft2 = e2.horizontal || e2.containerAnimation && false !== e2.horizontal ? tu : eu, dt2 = !Z2 && 0 !== Z2, pt2 = nu(e2.scroller || fu), mt2 = cu.core.getCache(pt2), vt2 = ul(pt2), gt2 = "fixed" === ("pinType" in e2 ? e2.pinType : Ya(pt2, "pinType") || vt2 && "fixed"), yt2 = [e2.onEnter, e2.onLeave, e2.onEnterBack, e2.onLeaveBack], _t2 = dt2 && e2.toggleActions.split(" "), bt2 = "markers" in e2 ? e2.markers : $l.markers, wt2 = vt2 ? 0 : parseFloat(Ll(pt2)["border" + ft2.p2 + Al]) || 0, xt2 = this, Tt2 = e2.onRefreshInit && function() {
        return e2.onRefreshInit(xt2);
      }, Ct2 = function(t20, e3, n3) {
        var r3 = n3.d, i3 = n3.d2, o3 = n3.a;
        return (o3 = Ya(t20, "getBoundingClientRect")) ? function() {
          return o3()[r3];
        } : function() {
          return (e3 ? ll(i3) : t20["client" + i3]) || 0;
        };
      }(pt2, vt2, ft2), Pt2 = function(t20, e3) {
        return !e3 || ~Wa.indexOf(t20) ? cl(t20) : function() {
          return Tc;
        };
      }(pt2, vt2), St2 = 0, Et2 = 0, Ot2 = 0, kt2 = ru(pt2, ft2);
      if (xt2._startClamp = xt2._endClamp = false, xt2._dir = ft2, nt2 *= 45, xt2.scroller = pt2, xt2.scroll = lt2 ? lt2.time.bind(lt2) : kt2, s2 = kt2(), xt2.vars = e2, n2 = n2 || e2.animation, "refreshPriority" in e2 && (ku = 1, -9999 === e2.refreshPriority && (Xu = xt2)), mt2.tweenScroll = mt2.tweenScroll || { top: kc(pt2, eu), left: kc(pt2, tu) }, xt2.tweenTo = r2 = mt2.tweenScroll[ft2.p], xt2.scrubDuration = function(t20) {
        (j2 = ml(t20) && t20) ? L2 ? L2.duration(t20) : L2 = cu.to(n2, { ease: "expo", totalProgress: "+=0", inherit: false, duration: j2, paused: true, onComplete: function() {
          return rt2 && rt2(xt2);
        } }) : (L2 && L2.progress(1).kill(), L2 = 0);
      }, n2 && (n2.vars.lazy = false, n2._initted && !xt2.isReverted || false !== n2.vars.immediateRender && false !== e2.immediateRender && n2.duration() && n2.render(0, true, true), xt2.animation = n2.pause(), n2.scrollTrigger = xt2, xt2.scrubDuration(Z2), R2 = 0, q2 || (q2 = n2.vars.id)), st2 && (vl(st2) && !st2.push || (st2 = { snapTo: st2 }), "scrollBehavior" in mu.style && cu.set(vt2 ? [mu, pu] : pt2, { scrollBehavior: "auto" }), Ua.forEach(function(t20) {
        return pl(t20) && t20.target === (vt2 ? du.scrollingElement || pu : pt2) && (t20.smooth = false);
      }), o2 = pl(st2.snapTo) ? st2.snapTo : "labels" === st2.snapTo ? /* @__PURE__ */ function(t20) {
        return function(e3) {
          return cu.utils.snap(Bl(t20), e3);
        };
      }(n2) : "labelsDirectional" === st2.snapTo ? (U2 = n2, function(t20, e3) {
        return Il(Bl(U2))(t20, e3.direction);
      }) : false !== st2.directional ? function(t20, e3) {
        return Il(st2.snapTo)(t20, Gu() - Et2 < 500 ? 0 : e3.direction);
      } : cu.utils.snap(st2.snapTo), N2 = st2.duration || { min: 0.1, max: 2 }, N2 = vl(N2) ? _u(N2.min, N2.max) : _u(N2, N2), V2 = cu.delayedCall(st2.delay || j2 / 2 || 0.1, function() {
        var t20 = kt2(), e3 = Gu() - Et2 < 500, i3 = r2.tween;
        if (!(e3 || Math.abs(xt2.getVelocity()) < 10) || i3 || Tu || St2 === t20) xt2.isActive && St2 !== t20 && V2.restart(true);
        else {
          var s3, a3, c3 = (t20 - u2) / v2, h3 = n2 && !dt2 ? n2.totalProgress() : c3, f3 = e3 ? 0 : (h3 - D2) / (Gu() - bu) * 1e3 || 0, d3 = cu.utils.clamp(-c3, 1 - c3, _l(f3 / 2) * f3 / 0.185), p3 = c3 + (false === st2.inertia ? 0 : d3), m3 = st2, g3 = m3.onStart, y3 = m3.onInterrupt, _3 = m3.onComplete;
          if (s3 = o2(p3, xt2), ml(s3) || (s3 = p3), a3 = Math.max(0, Math.round(u2 + s3 * v2)), t20 <= l2 && t20 >= u2 && a3 !== t20) {
            if (i3 && !i3._initted && i3.data <= _l(a3 - t20)) return;
            false === st2.inertia && (d3 = s3 - c3), r2(a3, { duration: N2(_l(0.185 * Math.max(_l(p3 - h3), _l(s3 - h3)) / f3 / 0.05 || 0)), ease: st2.ease || "power3", data: _l(a3 - t20), onInterrupt: function() {
              return V2.restart(true) && y3 && y3(xt2);
            }, onComplete: function() {
              xt2.update(), St2 = kt2(), n2 && !dt2 && (L2 ? L2.resetTo("totalProgress", s3, n2._tTime / n2._tDur) : n2.progress(s3)), R2 = D2 = n2 && !dt2 ? n2.totalProgress() : xt2.progress, it2 && it2(xt2), _3 && _3(xt2);
            } }, t20, d3 * v2, a3 - t20 - d3 * v2), g3 && g3(xt2, r2.tween);
          }
        }
      }).pause()), q2 && (Zl[q2] = xt2), (z2 = (J2 = xt2.trigger = nu(J2 || true !== Q2 && Q2)) && J2._gsap && J2._gsap.stRevert) && (z2 = z2(xt2)), Q2 = true === Q2 ? J2 : nu(Q2), dl(X2) && (X2 = { targets: J2, className: X2 }), Q2 && (false === tt2 || tt2 === Ml || (tt2 = !(!tt2 && Q2.parentNode && Q2.parentNode.style && "flex" === Ll(Q2.parentNode).display) && kl), xt2.pin = Q2, (i2 = cu.core.getCache(Q2)).spacer ? g2 = i2.pinState : (ut2 && ((ut2 = nu(ut2)) && !ut2.nodeType && (ut2 = ut2.current || ut2.nativeElement), i2.spacerIsNative = !!ut2, ut2 && (i2.spacerState = xc(ut2))), i2.spacer = b2 = ut2 || du.createElement("div"), b2.classList.add("pin-spacer"), q2 && b2.classList.add("pin-spacer-" + q2), i2.pinState = g2 = xc(Q2)), false !== e2.force3D && cu.set(Q2, { force3D: true }), xt2.spacer = b2 = i2.spacer, A2 = Ll(Q2), S2 = A2[tt2 + ft2.os2], x2 = cu.getProperty(Q2), T2 = cu.quickSetter(Q2, ft2.a, Dl), _c(Q2, b2, A2), _2 = xc(Q2)), bt2) {
        p2 = vl(bt2) ? jl(bt2, Hl) : Hl, f2 = ql("scroller-start", q2, pt2, ft2, p2, 0), d2 = ql("scroller-end", q2, pt2, ft2, p2, 0, f2), w2 = f2["offset" + ft2.op.d2];
        var Mt2 = nu(Ya(pt2, "content") || pt2);
        c2 = this.markerStart = ql("start", q2, Mt2, ft2, p2, w2, 0, lt2), h2 = this.markerEnd = ql("end", q2, Mt2, ft2, p2, w2, 0, lt2), lt2 && (F2 = cu.quickSetter([c2, h2], ft2.a, Dl)), gt2 || Wa.length && true === Ya(pt2, "fixedMarkers") || (H2 = Ll(W2 = vt2 ? mu : pt2).position, W2.style.position = "absolute" === H2 || "fixed" === H2 ? H2 : "relative", cu.set([f2, d2], { force3D: true }), O2 = cu.quickSetter(f2, ft2.a, Dl), M2 = cu.quickSetter(d2, ft2.a, Dl));
      }
      if (lt2) {
        var At2 = lt2.vars.onUpdate, Rt2 = lt2.vars.onUpdateParams;
        lt2.eventCallback("onUpdate", function() {
          xt2.update(0, 0, 1), At2 && At2.apply(lt2, Rt2 || []);
        });
      }
      if (xt2.previous = function() {
        return Kl[Kl.indexOf(xt2) - 1];
      }, xt2.next = function() {
        return Kl[Kl.indexOf(xt2) + 1];
      }, xt2.revert = function(t20, e3) {
        if (!e3) return xt2.kill(true);
        var r3 = false !== t20 || !xt2.enabled, i3 = xu;
        r3 !== xt2.isReverted && (r3 && (B2 = Math.max(kt2(), xt2.scroll.rec || 0), Ot2 = xt2.progress, I2 = n2 && n2.progress()), c2 && [c2, h2, f2, d2].forEach(function(t21) {
          return t21.style.display = r3 ? "none" : "block";
        }), r3 && (xu = xt2, xt2.update(r3)), !Q2 || at2 && xt2.isActive || (r3 ? function(t21, e4, n3) {
          wc(n3);
          var r4 = t21._gsap;
          if (r4.spacerIsNative) wc(r4.spacerState);
          else if (t21._gsap.swappedIn) {
            var i4 = e4.parentNode;
            i4 && (i4.insertBefore(t21, e4), i4.removeChild(e4));
          }
          t21._gsap.swappedIn = false;
        }(Q2, b2, g2) : _c(Q2, b2, Ll(Q2), E2)), r3 || xt2.update(r3), xu = i3, xt2.isReverted = r3);
      }, xt2.refresh = function(i3, o3, p3, w3) {
        if (!xu && xt2.enabled || o3) if (Q2 && i3 && Zu) zl(t19, "scrollEnd", ic);
        else {
          !$u && Tt2 && Tt2(xt2), xu = xt2, r2.tween && !p3 && (r2.tween.kill(), r2.tween = 0), L2 && L2.pause(), et2 && n2 && n2.revert({ kill: false }).invalidate(), xt2.isReverted || xt2.revert(true, true), xt2._subPinOffset = false;
          var T3, S3, O3, M3, A3, R3, D3, j3, N3, F3, z3, U3, W3, H3 = Ct2(), $3 = Pt2(), Y3 = lt2 ? lt2.duration() : hl(pt2, ft2), X3 = v2 <= 0.01, q3 = 0, G3 = w3 || 0, Z3 = vl(p3) ? p3.end : e2.end, nt3 = e2.endTrigger || J2, rt3 = vl(p3) ? p3.start : e2.start || (0 !== e2.start && J2 ? Q2 ? "0 0" : "0 100%" : 0), it3 = xt2.pinnedContainer = e2.pinnedContainer && nu(e2.pinnedContainer, xt2), ot3 = J2 && Math.max(0, Kl.indexOf(xt2)) || 0, st3 = ot3;
          for (bt2 && vl(p3) && (U3 = cu.getProperty(f2, ft2.p), W3 = cu.getProperty(d2, ft2.p)); st3-- > 0; ) (R3 = Kl[st3]).end || R3.refresh(0, 1) || (xu = xt2), !(D3 = R3.pin) || D3 !== J2 && D3 !== Q2 && D3 !== it3 || R3.isReverted || (F3 || (F3 = []), F3.unshift(R3), R3.revert(true, true)), R3 !== Kl[st3] && (ot3--, st3--);
          for (pl(rt3) && (rt3 = rt3(xt2)), rt3 = Qu(rt3, "start", xt2), u2 = Cc(rt3, J2, H3, ft2, kt2(), c2, f2, xt2, $3, wt2, gt2, Y3, lt2, xt2._startClamp && "_startClamp") || (Q2 ? -1e-3 : 0), pl(Z3) && (Z3 = Z3(xt2)), dl(Z3) && !Z3.indexOf("+=") && (~Z3.indexOf(" ") ? Z3 = (dl(rt3) ? rt3.split(" ")[0] : "") + Z3 : (q3 = Xl(Z3.substr(2), H3), Z3 = dl(rt3) ? rt3 : (lt2 ? cu.utils.mapRange(0, lt2.duration(), lt2.scrollTrigger.start, lt2.scrollTrigger.end, u2) : u2) + q3, nt3 = J2)), Z3 = Qu(Z3, "end", xt2), l2 = Math.max(u2, Cc(Z3 || (nt3 ? "100% 0" : Y3), nt3, H3, ft2, kt2() + q3, h2, d2, xt2, $3, wt2, gt2, Y3, lt2, xt2._endClamp && "_endClamp")) || -1e-3, q3 = 0, st3 = ot3; st3--; ) (D3 = (R3 = Kl[st3]).pin) && R3.start - R3._pinPush <= u2 && !lt2 && R3.end > 0 && (T3 = R3.end - (xt2._startClamp ? Math.max(0, R3.start) : R3.start), (D3 === J2 && R3.start - R3._pinPush < u2 || D3 === it3) && isNaN(rt3) && (q3 += T3 * (1 - R3.progress)), D3 === Q2 && (G3 += T3));
          if (u2 += q3, l2 += q3, xt2._startClamp && (xt2._startClamp += q3), xt2._endClamp && !$u && (xt2._endClamp = l2 || -1e-3, l2 = Math.min(l2, hl(pt2, ft2))), v2 = l2 - u2 || (u2 -= 0.01) && 1e-3, X3 && (Ot2 = cu.utils.clamp(0, 1, cu.utils.normalize(u2, l2, B2))), xt2._pinPush = G3, c2 && q3 && ((T3 = {})[ft2.a] = "+=" + q3, it3 && (T3[ft2.p] = "-=" + kt2()), cu.set([c2, h2], T3)), !Q2 || Uu && xt2.end >= hl(pt2, ft2)) {
            if (J2 && kt2() && !lt2) for (S3 = J2.parentNode; S3 && S3 !== mu; ) S3._pinOffset && (u2 -= S3._pinOffset, l2 -= S3._pinOffset), S3 = S3.parentNode;
          } else T3 = Ll(Q2), M3 = ft2 === eu, O3 = kt2(), C2 = parseFloat(x2(ft2.a)) + G3, !Y3 && l2 > 1 && (z3 = { style: z3 = (vt2 ? du.scrollingElement || pu : pt2).style, value: z3["overflow" + ft2.a.toUpperCase()] }, vt2 && "scroll" !== Ll(mu)["overflow" + ft2.a.toUpperCase()] && (z3.style["overflow" + ft2.a.toUpperCase()] = "scroll")), _c(Q2, b2, T3), _2 = xc(Q2), S3 = Nl(Q2, true), j3 = gt2 && ru(pt2, M3 ? tu : eu)(), tt2 ? ((E2 = [tt2 + ft2.os2, v2 + G3 + Dl]).t = b2, (st3 = tt2 === kl ? Vl(Q2, ft2) + v2 + G3 : 0) && (E2.push(ft2.d, st3 + Dl), "auto" !== b2.style.flexBasis && (b2.style.flexBasis = st3 + Dl)), wc(E2), it3 && Kl.forEach(function(t20) {
            t20.pin === it3 && false !== t20.vars.pinSpacing && (t20._subPinOffset = true);
          }), gt2 && kt2(B2)) : (st3 = Vl(Q2, ft2)) && "auto" !== b2.style.flexBasis && (b2.style.flexBasis = st3 + Dl), gt2 && ((A3 = { top: S3.top + (M3 ? O3 - u2 : j3) + Dl, left: S3.left + (M3 ? j3 : O3 - u2) + Dl, boxSizing: "border-box", position: "fixed" })[Tl] = A3["max" + Al] = Math.ceil(S3.width) + Dl, A3[Cl] = A3["max" + Rl] = Math.ceil(S3.height) + Dl, A3[Ml] = A3[Ml + El] = A3[Ml + Pl] = A3[Ml + Ol] = A3[Ml + Sl] = "0", A3[kl] = T3[kl], A3[kl + El] = T3[kl + El], A3[kl + Pl] = T3[kl + Pl], A3[kl + Ol] = T3[kl + Ol], A3[kl + Sl] = T3[kl + Sl], y2 = function(t20, e3, n3) {
            for (var r3, i4 = [], o4 = t20.length, s3 = n3 ? 8 : 0; s3 < o4; s3 += 2) r3 = t20[s3], i4.push(r3, r3 in e3 ? e3[r3] : t20[s3 + 1]);
            return i4.t = t20.t, i4;
          }(g2, A3, at2), $u && kt2(0)), n2 ? (N3 = n2._initted, Mu(1), n2.render(n2.duration(), true, true), P2 = x2(ft2.a) - C2 + v2 + G3, k2 = Math.abs(v2 - P2) > 1, gt2 && k2 && y2.splice(y2.length - 2, 2), n2.render(0, true, true), N3 || n2.invalidate(true), n2.parent || n2.totalTime(n2.totalTime()), Mu(0)) : P2 = v2, z3 && (z3.value ? z3.style["overflow" + ft2.a.toUpperCase()] = z3.value : z3.style.removeProperty("overflow-" + ft2.a));
          F3 && F3.forEach(function(t20) {
            return t20.revert(false, true);
          }), xt2.start = u2, xt2.end = l2, s2 = a2 = $u ? B2 : kt2(), lt2 || $u || (s2 < B2 && kt2(B2), xt2.scroll.rec = 0), xt2.revert(false, true), Et2 = Gu(), V2 && (St2 = -1, V2.restart(true)), xu = 0, n2 && dt2 && (n2._initted || I2) && n2.progress() !== I2 && n2.progress(I2 || 0, true).render(n2.time(), true, true), (X3 || Ot2 !== xt2.progress || lt2 || et2 || n2 && !n2._initted) && (n2 && !dt2 && n2.totalProgress(lt2 && u2 < -1e-3 && !Ot2 ? cu.utils.normalize(u2, l2, 0) : Ot2, true), xt2.progress = X3 || (s2 - u2) / v2 === Ot2 ? 0 : Ot2), Q2 && tt2 && (b2._pinOffset = Math.round(xt2.progress * P2)), L2 && L2.invalidate(), isNaN(U3) || (U3 -= cu.getProperty(f2, ft2.p), W3 -= cu.getProperty(d2, ft2.p), Oc(f2, ft2, U3), Oc(c2, ft2, U3 - (w3 || 0)), Oc(d2, ft2, W3), Oc(h2, ft2, W3 - (w3 || 0))), X3 && !$u && xt2.update(), !K2 || $u || m2 || (m2 = true, K2(xt2), m2 = false);
        }
      }, xt2.getVelocity = function() {
        return (kt2() - a2) / (Gu() - bu) * 1e3 || 0;
      }, xt2.endAnimation = function() {
        gl(xt2.callbackAnimation), n2 && (L2 ? L2.progress(1) : n2.paused() ? dt2 || gl(n2, xt2.direction < 0, 1) : gl(n2, n2.reversed()));
      }, xt2.labelToScroll = function(t20) {
        return n2 && n2.labels && (u2 || xt2.refresh() || u2) + n2.labels[t20] / n2.duration() * v2 || 0;
      }, xt2.getTrailing = function(t20) {
        var e3 = Kl.indexOf(xt2), n3 = xt2.direction > 0 ? Kl.slice(0, e3).reverse() : Kl.slice(e3 + 1);
        return (dl(t20) ? n3.filter(function(e4) {
          return e4.vars.preventOverlaps === t20;
        }) : n3).filter(function(t21) {
          return xt2.direction > 0 ? t21.end <= u2 : t21.start >= l2;
        });
      }, xt2.update = function(t20, e3, i3) {
        if (!lt2 || i3 || t20) {
          var o3, c3, h3, d3, p3, m3, g3, w3 = true === $u ? B2 : xt2.scroll(), x3 = t20 ? 0 : (w3 - u2) / v2, E3 = x3 < 0 ? 0 : x3 > 1 ? 1 : x3 || 0, A3 = xt2.progress;
          if (e3 && (a2 = s2, s2 = lt2 ? kt2() : w3, st2 && (D2 = R2, R2 = n2 && !dt2 ? n2.totalProgress() : E3)), nt2 && Q2 && !xu && !qu && Zu && (!E3 && u2 < w3 + (w3 - a2) / (Gu() - bu) * nt2 ? E3 = 1e-4 : 1 === E3 && l2 > w3 + (w3 - a2) / (Gu() - bu) * nt2 && (E3 = 0.9999)), E3 !== A3 && xt2.enabled) {
            if (d3 = (p3 = (o3 = xt2.isActive = !!E3 && E3 < 1) !== (!!A3 && A3 < 1)) || !!E3 != !!A3, xt2.direction = E3 > A3 ? 1 : -1, xt2.progress = E3, d3 && !xu && (c3 = E3 && !A3 ? 0 : 1 === E3 ? 1 : 1 === A3 ? 2 : 3, dt2 && (h3 = !p3 && "none" !== _t2[c3 + 1] && _t2[c3 + 1] || _t2[c3], g3 = n2 && ("complete" === h3 || "reset" === h3 || h3 in n2))), ht2 && (p3 || g3) && (g3 || Z2 || !n2) && (pl(ht2) ? ht2(xt2) : xt2.getTrailing(ht2).forEach(function(t21) {
              return t21.endAnimation();
            })), dt2 || (!L2 || xu || qu ? n2 && n2.totalProgress(E3, !(!xu || !Et2 && !t20)) : (L2._dp._time - L2._start !== L2._time && L2.render(L2._dp._time - L2._start), L2.resetTo ? L2.resetTo("totalProgress", E3, n2._tTime / n2._tDur) : (L2.vars.totalProgress = E3, L2.invalidate().restart()))), Q2) if (t20 && tt2 && (b2.style[tt2 + ft2.os2] = S2), gt2) {
              if (d3) {
                if (m3 = !t20 && E3 > A3 && l2 + 1 > w3 && w3 + 1 >= hl(pt2, ft2), at2) if (t20 || !o3 && !m3) Sc(Q2, b2);
                else {
                  var j3 = Nl(Q2, true), N3 = w3 - u2;
                  Sc(Q2, mu, j3.top + (ft2 === eu ? N3 : 0) + Dl, j3.left + (ft2 === eu ? 0 : N3) + Dl);
                }
                wc(o3 || m3 ? y2 : _2), k2 && E3 < 1 && o3 || T2(C2 + (1 !== E3 || m3 ? 0 : P2));
              }
            } else T2(ol(C2 + P2 * E3));
            st2 && !r2.tween && !xu && !qu && V2.restart(true), X2 && (p3 || ot2 && E3 && (E3 < 1 || !Wu)) && yu(X2.targets).forEach(function(t21) {
              return t21.classList[o3 || ot2 ? "add" : "remove"](X2.className);
            }), Y2 && !dt2 && !t20 && Y2(xt2), d3 && !xu ? (dt2 && (g3 && ("complete" === h3 ? n2.pause().totalProgress(1) : "reset" === h3 ? n2.restart(true).pause() : "restart" === h3 ? n2.restart(true) : n2[h3]()), Y2 && Y2(xt2)), !p3 && Wu || (G2 && p3 && yl(xt2, G2), yt2[c3] && yl(xt2, yt2[c3]), ot2 && (1 === E3 ? xt2.kill(false, 1) : yt2[c3] = 0), p3 || yt2[c3 = 1 === E3 ? 1 : 3] && yl(xt2, yt2[c3])), ct2 && !o3 && Math.abs(xt2.getVelocity()) > (ml(ct2) ? ct2 : 2500) && (gl(xt2.callbackAnimation), L2 ? L2.progress(1) : gl(n2, "reverse" === h3 ? 1 : !E3, 1))) : dt2 && Y2 && !xu && Y2(xt2);
          }
          if (M2) {
            var I3 = lt2 ? w3 / lt2.duration() * (lt2._caScrollDist || 0) : w3;
            O2(I3 + (f2._isFlipped ? 1 : 0)), M2(I3);
          }
          F2 && F2(-w3 / lt2.duration() * (lt2._caScrollDist || 0));
        }
      }, xt2.enable = function(e3, n3) {
        xt2.enabled || (xt2.enabled = true, zl(pt2, "resize", ec), vt2 || zl(pt2, "scroll", Ql), Tt2 && zl(t19, "refreshInit", Tt2), false !== e3 && (xt2.progress = Ot2 = 0, s2 = a2 = St2 = kt2()), false !== n3 && xt2.refresh());
      }, xt2.getTween = function(t20) {
        return t20 && r2 ? r2.tween : L2;
      }, xt2.setPositions = function(t20, e3, n3, r3) {
        if (lt2) {
          var i3 = lt2.scrollTrigger, o3 = lt2.duration(), s3 = i3.end - i3.start;
          t20 = i3.start + s3 * t20 / o3, e3 = i3.start + s3 * e3 / o3;
        }
        xt2.refresh(false, false, { start: tl(t20, n3 && !!xt2._startClamp), end: tl(e3, n3 && !!xt2._endClamp) }, r3), xt2.update();
      }, xt2.adjustPinSpacing = function(t20) {
        if (E2 && t20) {
          var e3 = E2.indexOf(ft2.d) + 1;
          E2[e3] = parseFloat(E2[e3]) + t20 + Dl, E2[1] = parseFloat(E2[1]) + t20 + Dl, wc(E2);
        }
      }, xt2.disable = function(e3, n3) {
        if (xt2.enabled && (false !== e3 && xt2.revert(true, true), xt2.enabled = xt2.isActive = false, n3 || L2 && L2.pause(), B2 = 0, i2 && (i2.uncache = 1), Tt2 && Ul(t19, "refreshInit", Tt2), V2 && (V2.pause(), r2.tween && r2.tween.kill() && (r2.tween = 0)), !vt2)) {
          for (var o3 = Kl.length; o3--; ) if (Kl[o3].scroller === pt2 && Kl[o3] !== xt2) return;
          Ul(pt2, "resize", ec), vt2 || Ul(pt2, "scroll", Ql);
        }
      }, xt2.kill = function(t20, r3) {
        xt2.disable(t20, r3), L2 && !r3 && L2.kill(), q2 && delete Zl[q2];
        var o3 = Kl.indexOf(xt2);
        o3 >= 0 && Kl.splice(o3, 1), o3 === Pu && mc > 0 && Pu--, o3 = 0, Kl.forEach(function(t21) {
          return t21.scroller === xt2.scroller && (o3 = 1);
        }), o3 || $u || (xt2.scroll.rec = 0), n2 && (n2.scrollTrigger = null, t20 && n2.revert({ kill: false }), r3 || n2.kill()), c2 && [c2, h2, f2, d2].forEach(function(t21) {
          return t21.parentNode && t21.parentNode.removeChild(t21);
        }), Xu === xt2 && (Xu = 0), Q2 && (i2 && (i2.uncache = 1), o3 = 0, Kl.forEach(function(t21) {
          return t21.pin === Q2 && o3++;
        }), o3 || (i2.spacer = 0)), e2.onKill && e2.onKill(xt2);
      }, Kl.push(xt2), xt2.enable(false, false), z2 && z2(xt2), n2 && n2.add && !v2) {
        var Dt2 = xt2.update;
        xt2.update = function() {
          xt2.update = Dt2, Ua.cache++, u2 || l2 || xt2.refresh();
        }, cu.delayedCall(0.01, xt2.update), v2 = 0.01, u2 = l2 = 0;
      } else xt2.refresh();
      Q2 && function() {
        if (Yu !== cc) {
          var t20 = Yu = cc;
          requestAnimationFrame(function() {
            return t20 === cc && dc(true);
          });
        }
      }();
    } else this.update = this.refresh = this.kill = il;
  }, t19.register = function(e2) {
    return hu || (cu = e2 || al(), sl() && window.document && t19.enable(), hu = Ju), hu;
  }, t19.defaults = function(t20) {
    if (t20) for (var e2 in t20) $l[e2] = t20[e2];
    return $l;
  }, t19.disable = function(t20, e2) {
    Ju = 0, Kl.forEach(function(n3) {
      return n3[e2 ? "kill" : "disable"](t20);
    }), Ul(fu, "wheel", Ql), Ul(du, "scroll", Ql), clearInterval(wu), Ul(du, "touchcancel", il), Ul(mu, "touchstart", il), Fl(Ul, du, "pointerdown,touchstart,mousedown", nl), Fl(Ul, du, "pointerup,touchend,mouseup", rl), gu.kill(), fl(Ul);
    for (var n2 = 0; n2 < Ua.length; n2 += 3) Wl(Ul, Ua[n2], Ua[n2 + 1]), Wl(Ul, Ua[n2], Ua[n2 + 2]);
  }, t19.enable = function() {
    if (fu = window, du = document, pu = du.documentElement, mu = du.body, cu && (yu = cu.utils.toArray, _u = cu.utils.clamp, Vu = cu.core.context || il, Mu = cu.core.suppressOverwrites || il, Bu = fu.history.scrollRestoration || "auto", pc = fu.pageYOffset || 0, cu.core.globals("ScrollTrigger", t19), mu)) {
      Ju = 1, (Iu = document.createElement("div")).style.height = "100vh", Iu.style.position = "absolute", hc(), el(), lu.register(cu), t19.isTouch = lu.isTouch, Nu = lu.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Du = 1 === lu.isTouch, zl(fu, "wheel", Ql), vu = [fu, du, pu, mu], cu.matchMedia ? (t19.matchMedia = function(t20) {
        var e3, n3 = cu.matchMedia();
        for (e3 in t20) n3.add(e3, t20[e3]);
        return n3;
      }, cu.addEventListener("matchMediaInit", function() {
        return uc();
      }), cu.addEventListener("matchMediaRevert", function() {
        return ac();
      }), cu.addEventListener("matchMedia", function() {
        dc(0, 1), oc("matchMedia");
      }), cu.matchMedia().add("(orientation: portrait)", function() {
        return tc(), tc;
      })) : console.warn("Requires GSAP 3.11.0 or later"), tc(), zl(du, "scroll", Ql);
      var e2, n2, r2 = mu.hasAttribute("style"), i2 = mu.style, o2 = i2.borderTopStyle, s2 = cu.core.Animation.prototype;
      for (s2.revert || Object.defineProperty(s2, "revert", { value: function() {
        return this.time(-0.01, true);
      } }), i2.borderTopStyle = "solid", e2 = Nl(mu), eu.m = Math.round(e2.top + eu.sc()) || 0, tu.m = Math.round(e2.left + tu.sc()) || 0, o2 ? i2.borderTopStyle = o2 : i2.removeProperty("border-top-style"), r2 || (mu.setAttribute("style", ""), mu.removeAttribute("style")), wu = setInterval(Jl, 250), cu.delayedCall(0.5, function() {
        return qu = 0;
      }), zl(du, "touchcancel", il), zl(mu, "touchstart", il), Fl(zl, du, "pointerdown,touchstart,mousedown", nl), Fl(zl, du, "pointerup,touchend,mouseup", rl), Cu = cu.utils.checkPrefix("transform"), yc.push(Cu), hu = Gu(), gu = cu.delayedCall(0.2, dc).pause(), Ou = [du, "visibilitychange", function() {
        var t20 = fu.innerWidth, e3 = fu.innerHeight;
        du.hidden ? (Su = t20, Eu = e3) : Su === t20 && Eu === e3 || ec();
      }, du, "DOMContentLoaded", dc, fu, "load", dc, fu, "resize", ec], fl(zl), Kl.forEach(function(t20) {
        return t20.enable(0, 1);
      }), n2 = 0; n2 < Ua.length; n2 += 3) Wl(Ul, Ua[n2], Ua[n2 + 1]), Wl(Ul, Ua[n2], Ua[n2 + 2]);
    }
  }, t19.config = function(e2) {
    "limitCallbacks" in e2 && (Wu = !!e2.limitCallbacks);
    var n2 = e2.syncInterval;
    n2 && clearInterval(wu) || (wu = n2) && setInterval(Jl, n2), "ignoreMobileResize" in e2 && (Du = 1 === t19.isTouch && e2.ignoreMobileResize), "autoRefreshEvents" in e2 && (fl(Ul) || fl(zl, e2.autoRefreshEvents || "none"), Au = -1 === (e2.autoRefreshEvents + "").indexOf("resize"));
  }, t19.scrollerProxy = function(t20, e2) {
    var n2 = nu(t20), r2 = Ua.indexOf(n2), i2 = ul(n2);
    ~r2 && Ua.splice(r2, i2 ? 6 : 2), e2 && (i2 ? Wa.unshift(fu, e2, mu, e2, pu, e2) : Wa.unshift(n2, e2));
  }, t19.clearMatchMedia = function(t20) {
    Kl.forEach(function(e2) {
      return e2._ctx && e2._ctx.query === t20 && e2._ctx.kill(true, true);
    });
  }, t19.isInViewport = function(t20, e2, n2) {
    var r2 = (dl(t20) ? nu(t20) : t20).getBoundingClientRect(), i2 = r2[n2 ? Tl : Cl] * e2 || 0;
    return n2 ? r2.right - i2 > 0 && r2.left + i2 < fu.innerWidth : r2.bottom - i2 > 0 && r2.top + i2 < fu.innerHeight;
  }, t19.positionInViewport = function(t20, e2, n2) {
    dl(t20) && (t20 = nu(t20));
    var r2 = t20.getBoundingClientRect(), i2 = r2[n2 ? Tl : Cl], o2 = null == e2 ? i2 / 2 : e2 in Yl ? Yl[e2] * i2 : ~e2.indexOf("%") ? parseFloat(e2) * i2 / 100 : parseFloat(e2) || 0;
    return n2 ? (r2.left + o2) / fu.innerWidth : (r2.top + o2) / fu.innerHeight;
  }, t19.killAll = function(t20) {
    if (Kl.slice(0).forEach(function(t21) {
      return "ScrollSmoother" !== t21.vars.id && t21.kill();
    }), true !== t20) {
      var e2 = nc.killAll || [];
      nc = {}, e2.forEach(function(t21) {
        return t21();
      });
    }
  }, t19;
}();
Mc.version = "3.12.7", Mc.saveStyles = function(t19) {
  return t19 ? yu(t19).forEach(function(t20) {
    if (t20 && t20.style) {
      var e2 = sc.indexOf(t20);
      e2 >= 0 && sc.splice(e2, 5), sc.push(t20, t20.style.cssText, t20.getBBox && t20.getAttribute("transform"), cu.core.getCache(t20), Vu());
    }
  }) : sc;
}, Mc.revert = function(t19, e2) {
  return uc(!t19, e2);
}, Mc.create = function(t19, e2) {
  return new Mc(t19, e2);
}, Mc.refresh = function(t19) {
  return t19 ? ec(true) : (hu || Mc.register()) && dc(true);
}, Mc.update = function(t19) {
  return ++Ua.cache && vc(true === t19 ? 2 : 0);
}, Mc.clearScrollMemory = lc, Mc.maxScroll = function(t19, e2) {
  return hl(t19, e2 ? tu : eu);
}, Mc.getScrollFunc = function(t19, e2) {
  return ru(nu(t19), e2 ? tu : eu);
}, Mc.getById = function(t19) {
  return Zl[t19];
}, Mc.getAll = function() {
  return Kl.filter(function(t19) {
    return "ScrollSmoother" !== t19.vars.id;
  });
}, Mc.isScrolling = function() {
  return !!Zu;
}, Mc.snapDirectional = Il, Mc.addEventListener = function(t19, e2) {
  var n2 = nc[t19] || (nc[t19] = []);
  ~n2.indexOf(e2) || n2.push(e2);
}, Mc.removeEventListener = function(t19, e2) {
  var n2 = nc[t19], r2 = n2 && n2.indexOf(e2);
  r2 >= 0 && n2.splice(r2, 1);
}, Mc.batch = function(t19, e2) {
  var n2, r2 = [], i2 = {}, o2 = e2.interval || 0.016, s2 = e2.batchMax || 1e9, a2 = function(t20, e3) {
    var n3 = [], r3 = [], i3 = cu.delayedCall(o2, function() {
      e3(n3, r3), n3 = [], r3 = [];
    }).pause();
    return function(t21) {
      n3.length || i3.restart(true), n3.push(t21.trigger), r3.push(t21), s2 <= n3.length && i3.progress(1);
    };
  };
  for (n2 in e2) i2[n2] = "on" === n2.substr(0, 2) && pl(e2[n2]) && "onRefreshInit" !== n2 ? a2(0, e2[n2]) : e2[n2];
  return pl(s2) && (s2 = s2(), zl(Mc, "refresh", function() {
    return s2 = e2.batchMax();
  })), yu(t19).forEach(function(t20) {
    var e3 = {};
    for (n2 in i2) e3[n2] = i2[n2];
    e3.trigger = t20, r2.push(Mc.create(e3));
  }), r2;
};
var Ac, Rc = function(t19, e2, n2, r2) {
  return e2 > r2 ? t19(r2) : e2 < 0 && t19(0), n2 > r2 ? (r2 - e2) / (n2 - e2) : n2 < 0 ? e2 / (e2 - n2) : 1;
}, Dc = function t18(e2, n2) {
  true === n2 ? e2.style.removeProperty("touch-action") : e2.style.touchAction = true === n2 ? "auto" : n2 ? "pan-" + n2 + (lu.isTouch ? " pinch-zoom" : "") : "none", e2 === pu && t18(mu, n2);
}, Lc = { auto: 1, scroll: 1 }, jc = function(t19) {
  var e2, n2 = t19.event, r2 = t19.target, i2 = t19.axis, o2 = (n2.changedTouches ? n2.changedTouches[0] : n2).target, s2 = o2._gsap || cu.core.getCache(o2), a2 = Gu();
  if (!s2._isScrollT || a2 - s2._isScrollT > 2e3) {
    for (; o2 && o2 !== mu && (o2.scrollHeight <= o2.clientHeight && o2.scrollWidth <= o2.clientWidth || !Lc[(e2 = Ll(o2)).overflowY] && !Lc[e2.overflowX]); ) o2 = o2.parentNode;
    s2._isScroll = o2 && o2 !== r2 && !ul(o2) && (Lc[(e2 = Ll(o2)).overflowY] || Lc[e2.overflowX]), s2._isScrollT = a2;
  }
  (s2._isScroll || "x" === i2) && (n2.stopPropagation(), n2._gsapAllow = true);
}, Nc = function(t19, e2, n2, r2) {
  return lu.create({ target: t19, capture: true, debounce: false, lockAxis: true, type: e2, onWheel: r2 = r2 && jc, onPress: r2, onDrag: r2, onScroll: r2, onEnable: function() {
    return n2 && zl(du, lu.eventTypes[0], Bc, false, true);
  }, onDisable: function() {
    return Ul(du, lu.eventTypes[0], Bc, true);
  } });
}, Vc = /(input|label|select|textarea)/i, Bc = function(t19) {
  var e2 = Vc.test(t19.target.tagName);
  (e2 || Ac) && (t19._gsapAllow = true, Ac = e2);
}, Ic = function(t19) {
  vl(t19) || (t19 = {}), t19.preventDefault = t19.isNormalizer = t19.allowClicks = true, t19.type || (t19.type = "wheel,touch"), t19.debounce = !!t19.debounce, t19.id = t19.id || "normalizer";
  var e2, n2, r2, i2, o2, s2, a2, u2, l2 = t19, c2 = l2.normalizeScrollX, h2 = l2.momentum, f2 = l2.allowNestedScroll, d2 = l2.onRelease, p2 = nu(t19.target) || pu, m2 = cu.core.globals().ScrollSmoother, v2 = m2 && m2.get(), g2 = Nu && (t19.content && nu(t19.content) || v2 && false !== t19.content && !v2.smooth() && v2.content()), y2 = ru(p2, eu), _2 = ru(p2, tu), b2 = 1, w2 = (lu.isTouch && fu.visualViewport ? fu.visualViewport.scale * fu.visualViewport.width : fu.outerWidth) / fu.innerWidth, x2 = 0, T2 = pl(h2) ? function() {
    return h2(e2);
  } : function() {
    return h2 || 2.8;
  }, C2 = Nc(p2, t19.type, true, f2), P2 = function() {
    return i2 = false;
  }, S2 = il, E2 = il, O2 = function() {
    n2 = hl(p2, eu), E2 = _u(Nu ? 1 : 0, n2), c2 && (S2 = _u(0, hl(p2, tu))), r2 = cc;
  }, k2 = function() {
    g2._gsap.y = ol(parseFloat(g2._gsap.y) + y2.offset) + "px", g2.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(g2._gsap.y) + ", 0, 1)", y2.offset = y2.cacheID = 0;
  }, M2 = function() {
    O2(), o2.isActive() && o2.vars.scrollY > n2 && (y2() > n2 ? o2.progress(1) && y2(n2) : o2.resetTo("scrollY", n2));
  };
  return g2 && cu.set(g2, { y: "+=0" }), t19.ignoreCheck = function(t20) {
    return Nu && "touchmove" === t20.type && function() {
      if (i2) {
        requestAnimationFrame(P2);
        var t21 = ol(e2.deltaY / 2), n3 = E2(y2.v - t21);
        if (g2 && n3 !== y2.v + y2.offset) {
          y2.offset = n3 - y2.v;
          var r3 = ol((parseFloat(g2 && g2._gsap.y) || 0) - y2.offset);
          g2.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + r3 + ", 0, 1)", g2._gsap.y = r3 + "px", y2.cacheID = Ua.cache, vc();
        }
        return true;
      }
      y2.offset && k2(), i2 = true;
    }() || b2 > 1.05 && "touchstart" !== t20.type || e2.isGesturing || t20.touches && t20.touches.length > 1;
  }, t19.onPress = function() {
    i2 = false;
    var t20 = b2;
    b2 = ol((fu.visualViewport && fu.visualViewport.scale || 1) / w2), o2.pause(), t20 !== b2 && Dc(p2, b2 > 1.01 || !c2 && "x"), s2 = _2(), a2 = y2(), O2(), r2 = cc;
  }, t19.onRelease = t19.onGestureStart = function(t20, e3) {
    if (y2.offset && k2(), e3) {
      Ua.cache++;
      var r3, i3, s3 = T2();
      c2 && (i3 = (r3 = _2()) + 0.05 * s3 * -t20.velocityX / 0.227, s3 *= Rc(_2, r3, i3, hl(p2, tu)), o2.vars.scrollX = S2(i3)), i3 = (r3 = y2()) + 0.05 * s3 * -t20.velocityY / 0.227, s3 *= Rc(y2, r3, i3, hl(p2, eu)), o2.vars.scrollY = E2(i3), o2.invalidate().duration(s3).play(0.01), (Nu && o2.vars.scrollY >= n2 || r3 >= n2 - 1) && cu.to({}, { onUpdate: M2, duration: s3 });
    } else u2.restart(true);
    d2 && d2(t20);
  }, t19.onWheel = function() {
    o2._ts && o2.pause(), Gu() - x2 > 1e3 && (r2 = 0, x2 = Gu());
  }, t19.onChange = function(t20, e3, n3, i3, o3) {
    if (cc !== r2 && O2(), e3 && c2 && _2(S2(i3[2] === e3 ? s2 + (t20.startX - t20.x) : _2() + e3 - i3[1])), n3) {
      y2.offset && k2();
      var u3 = o3[2] === n3, l3 = u3 ? a2 + t20.startY - t20.y : y2() + n3 - o3[1], h3 = E2(l3);
      u3 && l3 !== h3 && (a2 += h3 - l3), y2(h3);
    }
    (n3 || e3) && vc();
  }, t19.onEnable = function() {
    Dc(p2, !c2 && "x"), Mc.addEventListener("refresh", M2), zl(fu, "resize", M2), y2.smooth && (y2.target.style.scrollBehavior = "auto", y2.smooth = _2.smooth = false), C2.enable();
  }, t19.onDisable = function() {
    Dc(p2, true), Ul(fu, "resize", M2), Mc.removeEventListener("refresh", M2), C2.kill();
  }, t19.lockAxis = false !== t19.lockAxis, (e2 = new lu(t19)).iOS = Nu, Nu && !y2() && y2(1), Nu && cu.ticker.add(il), u2 = e2._dc, o2 = cu.to(e2, { ease: "power4", paused: true, inherit: false, scrollX: c2 ? "+=0.1" : "+=0", scrollY: "+=0.1", modifiers: { scrollY: Ec(y2, y2(), function() {
    return o2.pause();
  }) }, onUpdate: vc, onComplete: u2.vars.onComplete }), e2;
};
Mc.sort = function(t19) {
  if (pl(t19)) return Kl.sort(t19);
  var e2 = fu.pageYOffset || 0;
  return Mc.getAll().forEach(function(t20) {
    return t20._sortY = t20.trigger ? e2 + t20.trigger.getBoundingClientRect().top : t20.start + fu.innerHeight;
  }), Kl.sort(t19 || function(t20, e3) {
    return -1e6 * (t20.vars.refreshPriority || 0) + (t20.vars.containerAnimation ? 1e6 : t20._sortY) - ((e3.vars.containerAnimation ? 1e6 : e3._sortY) + -1e6 * (e3.vars.refreshPriority || 0));
  });
}, Mc.observe = function(t19) {
  return new lu(t19);
}, Mc.normalizeScroll = function(t19) {
  if (void 0 === t19) return Ru;
  if (true === t19 && Ru) return Ru.enable();
  if (false === t19) return Ru && Ru.kill(), void (Ru = t19);
  var e2 = t19 instanceof lu ? t19 : Ic(t19);
  return Ru && Ru.target === e2.target && Ru.kill(), ul(e2.target) && (Ru = e2), e2;
}, Mc.core = { _getVelocityProp: iu, _inputObserver: Nc, _scrollers: Ua, _proxies: Wa, bridge: { ss: function() {
  Zu || oc("scrollStart"), Zu = Gu();
}, ref: function() {
  return xu;
} } }, al() && cu.registerPlugin(Mc);
const Fc = W({});
function zc(t19) {
  const e2 = ct(null);
  return null === e2.current && (e2.current = t19()), e2.current;
}
const Uc = W(null), Wc = W({ transformPagePoint: (t19) => t19, isStatic: false, reducedMotion: "never" });
class Hc extends x {
  getSnapshotBeforeUpdate(t19) {
    const e2 = this.props.childRef.current;
    if (e2 && t19.isPresent && !this.props.isPresent) {
      const t20 = e2.offsetParent, n2 = t20 instanceof HTMLElement && t20.offsetWidth || 0, r2 = this.props.sizeRef.current;
      r2.height = e2.offsetHeight || 0, r2.width = e2.offsetWidth || 0, r2.top = e2.offsetTop, r2.left = e2.offsetLeft, r2.right = n2 - r2.width - r2.left;
    }
    return null;
  }
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function $c({ children: t19, isPresent: e2, anchorX: n2 }) {
  const r2 = vt(), i2 = ct(null), o2 = ct({ width: 0, height: 0, top: 0, left: 0, right: 0 }), { nonce: s2 } = pt(Wc);
  return At(() => {
    const { width: t20, height: a2, top: u2, left: l2, right: c2 } = o2.current;
    if (e2 || !i2.current || !t20 || !a2) return;
    const h2 = "left" === n2 ? `left: ${l2}` : `right: ${c2}`;
    i2.current.dataset.motionPopId = r2;
    const f2 = document.createElement("style");
    return s2 && (f2.nonce = s2), document.head.appendChild(f2), f2.sheet && f2.sheet.insertRule(`
          [data-motion-pop-id="${r2}"] {
            position: absolute !important;
            width: ${t20}px !important;
            height: ${a2}px !important;
            ${h2}px !important;
            top: ${u2}px !important;
          }
        `), () => {
      document.head.removeChild(f2);
    };
  }, [e2]), $(Hc, { isPresent: e2, childRef: i2, sizeRef: o2, children: _e(t19, { ref: i2 }) });
}
const Yc = ({ children: t19, initial: e2, isPresent: n2, onExitComplete: r2, custom: i2, presenceAffectsLayout: o2, mode: s2, anchorX: a2 }) => {
  const u2 = zc(Xc), l2 = vt(), c2 = dt((t20) => {
    u2.set(t20, true);
    for (const t21 of u2.values()) if (!t21) return;
    r2 && r2();
  }, [u2, r2]), h2 = ft(() => ({ id: l2, initial: e2, isPresent: n2, custom: i2, onExitComplete: c2, register: (t20) => (u2.set(t20, false), () => u2.delete(t20)) }), o2 ? [Math.random(), c2] : [n2, c2]);
  return ft(() => {
    u2.forEach((t20, e3) => u2.set(e3, false));
  }, [n2]), ut(() => {
    !n2 && !u2.size && r2 && r2();
  }, [n2]), "popLayout" === s2 && (t19 = $($c, { isPresent: n2, anchorX: a2, children: t19 })), $(Uc.Provider, { value: h2, children: t19 });
};
function Xc() {
  return /* @__PURE__ */ new Map();
}
function qc(t19 = true) {
  const e2 = pt(Uc);
  if (null === e2) return [true, null];
  const { isPresent: n2, onExitComplete: r2, register: i2 } = e2, o2 = vt();
  ut(() => {
    t19 && i2(o2);
  }, [t19]);
  const s2 = dt(() => t19 && r2 && r2(o2), [o2, r2, t19]);
  return !n2 && r2 ? [false, s2] : [true];
}
const Gc = (t19) => t19.key || "";
function Kc(t19) {
  const e2 = [];
  return Bt.forEach(t19, (t20) => {
    ve(t20) && e2.push(t20);
  }), e2;
}
const Zc = "undefined" != typeof window, Jc = Zc ? lt : ut, Qc = ({ children: t19, custom: e2, initial: n2 = true, onExitComplete: r2, presenceAffectsLayout: i2 = true, mode: o2 = "sync", propagate: s2 = false, anchorX: a2 = "left" }) => {
  const [u2, l2] = qc(s2), c2 = ft(() => Kc(t19), [t19]), h2 = s2 && !u2 ? [] : c2.map(Gc), f2 = ct(true), d2 = ct(c2), p2 = zc(() => /* @__PURE__ */ new Map()), [m2, v2] = st(c2), [g2, y2] = st(c2);
  Jc(() => {
    f2.current = false, d2.current = c2;
    for (let t20 = 0; t20 < g2.length; t20++) {
      const e3 = Gc(g2[t20]);
      h2.includes(e3) ? p2.delete(e3) : true !== p2.get(e3) && p2.set(e3, false);
    }
  }, [g2, h2.length, h2.join("-")]);
  const _2 = [];
  if (c2 !== m2) {
    let t20 = [...c2];
    for (let e3 = 0; e3 < g2.length; e3++) {
      const n3 = g2[e3], r3 = Gc(n3);
      h2.includes(r3) || (t20.splice(e3, 0, n3), _2.push(n3));
    }
    return "wait" === o2 && _2.length && (t20 = _2), y2(Kc(t20)), v2(c2), null;
  }
  const { forceRender: b2 } = pt(Fc);
  return $(w, { children: g2.map((t20) => {
    const m3 = Gc(t20), v3 = !(s2 && !u2) && (c2 === g2 || h2.includes(m3));
    return $(Yc, { isPresent: v3, initial: !(f2.current && !n2) && void 0, custom: v3 ? void 0 : e2, presenceAffectsLayout: i2, mode: o2, onExitComplete: v3 ? void 0 : () => {
      if (!p2.has(m3)) return;
      p2.set(m3, true);
      let t21 = true;
      p2.forEach((e3) => {
        e3 || (t21 = false);
      }), t21 && (null == b2 || b2(), y2(d2.current), s2 && (null == l2 || l2()), r2 && r2());
    }, anchorX: a2, children: t20 }, m3);
  }) });
}, th = (t19) => t19;
let eh = th;
function nh(t19) {
  let e2;
  return () => (void 0 === e2 && (e2 = t19()), e2);
}
const rh = (t19, e2, n2) => {
  const r2 = e2 - t19;
  return 0 === r2 ? 1 : (n2 - t19) / r2;
}, ih = (t19) => 1e3 * t19, oh = (t19) => t19 / 1e3, sh = false;
const ah = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];
function uh(t19, e2) {
  let n2 = false, r2 = true;
  const i2 = { delta: 0, timestamp: 0, isProcessing: false }, o2 = () => n2 = true, s2 = ah.reduce((t20, e3) => (t20[e3] = /* @__PURE__ */ function(t21) {
    let e4 = /* @__PURE__ */ new Set(), n3 = /* @__PURE__ */ new Set(), r3 = false, i3 = false;
    const o3 = /* @__PURE__ */ new WeakSet();
    let s3 = { delta: 0, timestamp: 0, isProcessing: false };
    function a3(e5) {
      o3.has(e5) && (u3.schedule(e5), t21()), e5(s3);
    }
    const u3 = { schedule: (t22, i4 = false, s4 = false) => {
      const a4 = s4 && r3 ? e4 : n3;
      return i4 && o3.add(t22), a4.has(t22) || a4.add(t22), t22;
    }, cancel: (t22) => {
      n3.delete(t22), o3.delete(t22);
    }, process: (t22) => {
      s3 = t22, r3 ? i3 = true : (r3 = true, [e4, n3] = [n3, e4], e4.forEach(a3), e4.clear(), r3 = false, i3 && (i3 = false, u3.process(t22)));
    } };
    return u3;
  }(o2), t20), {}), { read: a2, resolveKeyframes: u2, update: l2, preRender: c2, render: h2, postRender: f2 } = s2, d2 = () => {
    const o3 = performance.now();
    n2 = false, i2.delta = r2 ? 1e3 / 60 : Math.max(Math.min(o3 - i2.timestamp, 40), 1), i2.timestamp = o3, i2.isProcessing = true, a2.process(i2), u2.process(i2), l2.process(i2), c2.process(i2), h2.process(i2), f2.process(i2), i2.isProcessing = false, n2 && e2 && (r2 = false, t19(d2));
  };
  return { schedule: ah.reduce((e3, o3) => {
    const a3 = s2[o3];
    return e3[o3] = (e4, o4 = false, s3 = false) => (n2 || (n2 = true, r2 = true, i2.isProcessing || t19(d2)), a3.schedule(e4, o4, s3)), e3;
  }, {}), cancel: (t20) => {
    for (let e3 = 0; e3 < ah.length; e3++) s2[ah[e3]].cancel(t20);
  }, state: i2, steps: s2 };
}
const { schedule: lh, cancel: ch, state: hh, steps: fh } = uh("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : th, true), dh = W({ strict: false }), ph = { animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"], exit: ["exit"], drag: ["drag", "dragControls"], focus: ["whileFocus"], hover: ["whileHover", "onHoverStart", "onHoverEnd"], tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"], pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"], inView: ["whileInView", "onViewportEnter", "onViewportLeave"], layout: ["layout", "layoutId"] }, mh = {};
for (const t19 in ph) mh[t19] = { isEnabled: (e2) => ph[t19].some((t20) => !!e2[t20]) };
const vh = /* @__PURE__ */ new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function gh(t19) {
  return t19.startsWith("while") || t19.startsWith("drag") && "draggable" !== t19 || t19.startsWith("layout") || t19.startsWith("onTap") || t19.startsWith("onPan") || t19.startsWith("onLayout") || vh.has(t19);
}
let yh = (t19) => !gh(t19);
try {
  (_h = require("@emotion/is-prop-valid").default) && (yh = (t19) => t19.startsWith("on") ? !gh(t19) : _h(t19));
} catch (t19) {
}
var _h;
function bh(t19) {
  if ("undefined" == typeof Proxy) return t19;
  const e2 = /* @__PURE__ */ new Map();
  return new Proxy((...e3) => t19(...e3), { get: (n2, r2) => "create" === r2 ? t19 : (e2.has(r2) || e2.set(r2, t19(r2)), e2.get(r2)) });
}
const wh = W({});
function xh(t19) {
  return null !== t19 && "object" == typeof t19 && "function" == typeof t19.start;
}
function Th(t19) {
  return "string" == typeof t19 || Array.isArray(t19);
}
const Ch = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"], Ph = ["initial", ...Ch];
function Sh(t19) {
  return xh(t19.animate) || Ph.some((e2) => Th(t19[e2]));
}
function Eh(t19) {
  return Boolean(Sh(t19) || t19.variants);
}
function Oh(t19) {
  const { initial: e2, animate: n2 } = function(t20, e3) {
    if (Sh(t20)) {
      const { initial: e4, animate: n3 } = t20;
      return { initial: false === e4 || Th(e4) ? e4 : void 0, animate: Th(n3) ? n3 : void 0 };
    }
    return false !== t20.inherit ? e3 : {};
  }(t19, pt(wh));
  return ft(() => ({ initial: e2, animate: n2 }), [kh(e2), kh(n2)]);
}
function kh(t19) {
  return Array.isArray(t19) ? t19.join(" ") : t19;
}
const Mh = Symbol.for("motionComponentSymbol");
function Ah(t19) {
  return t19 && "object" == typeof t19 && Object.prototype.hasOwnProperty.call(t19, "current");
}
function Rh(t19, e2, n2) {
  return dt((r2) => {
    r2 && t19.onMount && t19.onMount(r2), e2 && (r2 ? e2.mount(r2) : e2.unmount()), n2 && ("function" == typeof n2 ? n2(r2) : Ah(n2) && (n2.current = r2));
  }, [e2]);
}
const Dh = (t19) => t19.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Lh = "data-" + Dh("framerAppearId"), { schedule: jh } = uh(queueMicrotask, false), Nh = W({});
function Vh(t19, e2, n2, r2, i2) {
  var o2, s2;
  const { visualElement: a2 } = pt(wh), u2 = pt(dh), l2 = pt(Uc), c2 = pt(Wc).reducedMotion, h2 = ct(null);
  r2 = r2 || u2.renderer, !h2.current && r2 && (h2.current = r2(t19, { visualState: e2, parent: a2, props: n2, presenceContext: l2, blockInitialAnimation: !!l2 && false === l2.initial, reducedMotionConfig: c2 }));
  const f2 = h2.current, d2 = pt(Nh);
  !f2 || f2.projection || !i2 || "html" !== f2.type && "svg" !== f2.type || function(t20, e3, n3, r3) {
    const { layoutId: i3, layout: o3, drag: s3, dragConstraints: a3, layoutScroll: u3, layoutRoot: l3 } = e3;
    t20.projection = new n3(t20.latestValues, e3["data-framer-portal-id"] ? void 0 : Bh(t20.parent)), t20.projection.setOptions({ layoutId: i3, layout: o3, alwaysMeasureLayout: Boolean(s3) || a3 && Ah(a3), visualElement: t20, animationType: "string" == typeof o3 ? o3 : "both", initialPromotionConfig: r3, layoutScroll: u3, layoutRoot: l3 });
  }(h2.current, n2, i2, d2);
  const p2 = ct(false);
  At(() => {
    f2 && p2.current && f2.update(n2, l2);
  });
  const m2 = n2[Lh], v2 = ct(Boolean(m2) && !(null === (o2 = window.MotionHandoffIsComplete) || void 0 === o2 ? void 0 : o2.call(window, m2)) && (null === (s2 = window.MotionHasOptimisedAnimation) || void 0 === s2 ? void 0 : s2.call(window, m2)));
  return Jc(() => {
    f2 && (p2.current = true, window.MotionIsMounted = true, f2.updateFeatures(), jh.render(f2.render), v2.current && f2.animationState && f2.animationState.animateChanges());
  }), ut(() => {
    f2 && (!v2.current && f2.animationState && f2.animationState.animateChanges(), v2.current && (queueMicrotask(() => {
      var t20;
      null === (t20 = window.MotionHandoffMarkAsComplete) || void 0 === t20 || t20.call(window, m2);
    }), v2.current = false));
  }), f2;
}
function Bh(t19) {
  if (t19) return false !== t19.options.allowProjection ? t19.projection : Bh(t19.parent);
}
function Ih({ preloadedFeatures: t19, createVisualElement: e2, useRender: n2, useVisualState: r2, Component: i2 }) {
  var o2, s2;
  function a2(t20, o3) {
    let s3;
    const a3 = { ...pt(Wc), ...t20, layoutId: Fh(t20) }, { isStatic: u3 } = a3, l2 = Oh(t20), c2 = r2(t20, u3);
    if (!u3 && Zc) {
      pt(dh).strict;
      const t21 = function(t22) {
        const { drag: e3, layout: n3 } = mh;
        if (!e3 && !n3) return {};
        const r3 = { ...e3, ...n3 };
        return { MeasureLayout: (null == e3 ? void 0 : e3.isEnabled(t22)) || (null == n3 ? void 0 : n3.isEnabled(t22)) ? r3.MeasureLayout : void 0, ProjectionNode: r3.ProjectionNode };
      }(a3);
      s3 = t21.MeasureLayout, l2.visualElement = Vh(i2, c2, a3, e2, t21.ProjectionNode);
    }
    return $(wh.Provider, { value: l2, children: [s3 && l2.visualElement ? $(s3, { visualElement: l2.visualElement, ...a3 }) : null, n2(i2, t20, Rh(c2, l2.visualElement, o3), c2, u3, l2.visualElement)] });
  }
  t19 && function(t20) {
    for (const e3 in t20) mh[e3] = { ...mh[e3], ...t20[e3] };
  }(t19), a2.displayName = `motion.${"string" == typeof i2 ? i2 : `create(${null !== (s2 = null !== (o2 = i2.displayName) && void 0 !== o2 ? o2 : i2.name) && void 0 !== s2 ? s2 : ""})`}`;
  const u2 = Nt(a2);
  return u2[Mh] = i2, u2;
}
function Fh({ layoutId: t19 }) {
  const e2 = pt(Fc).id;
  return e2 && void 0 !== t19 ? e2 + "-" + t19 : t19;
}
const zh = (t19) => (e2) => "string" == typeof e2 && e2.startsWith(t19), Uh = zh("--"), Wh = zh("var(--"), Hh = (t19) => !!Wh(t19) && $h.test(t19.split("/*")[0].trim()), $h = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Yh = {};
const Xh = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"], qh = new Set(Xh);
function Gh(t19, { layout: e2, layoutId: n2 }) {
  return qh.has(t19) || t19.startsWith("origin") || (e2 || void 0 !== n2) && (!!Yh[t19] || "opacity" === t19);
}
const Kh = (t19) => Boolean(t19 && t19.getVelocity), Zh = (t19, e2) => e2 && "number" == typeof t19 ? e2.transform(t19) : t19, Jh = (t19, e2, n2) => n2 > e2 ? e2 : n2 < t19 ? t19 : n2, Qh = { test: (t19) => "number" == typeof t19, parse: parseFloat, transform: (t19) => t19 }, tf = { ...Qh, transform: (t19) => Jh(0, 1, t19) }, ef = { ...Qh, default: 1 }, nf = (t19) => ({ test: (e2) => "string" == typeof e2 && e2.endsWith(t19) && 1 === e2.split(" ").length, parse: parseFloat, transform: (e2) => `${e2}${t19}` }), rf = nf("deg"), of = nf("%"), sf = nf("px"), af = nf("vh"), uf = nf("vw"), lf = { ...of, parse: (t19) => of.parse(t19) / 100, transform: (t19) => of.transform(100 * t19) }, cf = { borderWidth: sf, borderTopWidth: sf, borderRightWidth: sf, borderBottomWidth: sf, borderLeftWidth: sf, borderRadius: sf, radius: sf, borderTopLeftRadius: sf, borderTopRightRadius: sf, borderBottomRightRadius: sf, borderBottomLeftRadius: sf, width: sf, maxWidth: sf, height: sf, maxHeight: sf, top: sf, right: sf, bottom: sf, left: sf, padding: sf, paddingTop: sf, paddingRight: sf, paddingBottom: sf, paddingLeft: sf, margin: sf, marginTop: sf, marginRight: sf, marginBottom: sf, marginLeft: sf, backgroundPositionX: sf, backgroundPositionY: sf }, hf = { rotate: rf, rotateX: rf, rotateY: rf, rotateZ: rf, scale: ef, scaleX: ef, scaleY: ef, scaleZ: ef, skew: rf, skewX: rf, skewY: rf, distance: sf, translateX: sf, translateY: sf, translateZ: sf, x: sf, y: sf, z: sf, perspective: sf, transformPerspective: sf, opacity: tf, originX: lf, originY: lf, originZ: sf }, ff = { ...Qh, transform: Math.round }, df = { ...cf, ...hf, zIndex: ff, size: sf, fillOpacity: tf, strokeOpacity: tf, numOctaves: ff }, pf = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" }, mf = Xh.length;
function vf(t19, e2, n2) {
  const { style: r2, vars: i2, transformOrigin: o2 } = t19;
  let s2 = false, a2 = false;
  for (const t20 in e2) {
    const n3 = e2[t20];
    if (qh.has(t20)) s2 = true;
    else if (Uh(t20)) i2[t20] = n3;
    else {
      const e3 = Zh(n3, df[t20]);
      t20.startsWith("origin") ? (a2 = true, o2[t20] = e3) : r2[t20] = e3;
    }
  }
  if (e2.transform || (s2 || n2 ? r2.transform = function(t20, e3, n3) {
    let r3 = "", i3 = true;
    for (let o3 = 0; o3 < mf; o3++) {
      const s3 = Xh[o3], a3 = t20[s3];
      if (void 0 === a3) continue;
      let u2 = true;
      if (u2 = "number" == typeof a3 ? a3 === (s3.startsWith("scale") ? 1 : 0) : 0 === parseFloat(a3), !u2 || n3) {
        const t21 = Zh(a3, df[s3]);
        u2 || (i3 = false, r3 += `${pf[s3] || s3}(${t21}) `), n3 && (e3[s3] = t21);
      }
    }
    return r3 = r3.trim(), n3 ? r3 = n3(e3, i3 ? "" : r3) : i3 && (r3 = "none"), r3;
  }(e2, t19.transform, n2) : r2.transform && (r2.transform = "none")), a2) {
    const { originX: t20 = "50%", originY: e3 = "50%", originZ: n3 = 0 } = o2;
    r2.transformOrigin = `${t20} ${e3} ${n3}`;
  }
}
const gf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function yf(t19, e2, n2) {
  for (const r2 in e2) Kh(e2[r2]) || Gh(r2, n2) || (t19[r2] = e2[r2]);
}
function _f(t19, e2) {
  const n2 = {};
  return yf(n2, t19.style || {}, t19), Object.assign(n2, function({ transformTemplate: t20 }, e3) {
    return ft(() => {
      const n3 = { style: {}, transform: {}, transformOrigin: {}, vars: {} };
      return vf(n3, e3, t20), Object.assign({}, n3.vars, n3.style);
    }, [e3]);
  }(t19, e2)), n2;
}
function bf(t19, e2) {
  const n2 = {}, r2 = _f(t19, e2);
  return t19.drag && false !== t19.dragListener && (n2.draggable = false, r2.userSelect = r2.WebkitUserSelect = r2.WebkitTouchCallout = "none", r2.touchAction = true === t19.drag ? "none" : "pan-" + ("x" === t19.drag ? "y" : "x")), void 0 === t19.tabIndex && (t19.onTap || t19.onTapStart || t19.whileTap) && (n2.tabIndex = 0), n2.style = r2, n2;
}
const wf = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function xf(t19) {
  return "string" == typeof t19 && !t19.includes("-") && !!(wf.indexOf(t19) > -1 || /[A-Z]/u.test(t19));
}
const Tf = { offset: "stroke-dashoffset", array: "stroke-dasharray" }, Cf = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Pf(t19, e2, n2) {
  return "string" == typeof t19 ? t19 : sf.transform(e2 + n2 * t19);
}
function Sf(t19, { attrX: e2, attrY: n2, attrScale: r2, originX: i2, originY: o2, pathLength: s2, pathSpacing: a2 = 1, pathOffset: u2 = 0, ...l2 }, c2, h2) {
  if (vf(t19, l2, h2), c2) return void (t19.style.viewBox && (t19.attrs.viewBox = t19.style.viewBox));
  t19.attrs = t19.style, t19.style = {};
  const { attrs: f2, style: d2, dimensions: p2 } = t19;
  f2.transform && (p2 && (d2.transform = f2.transform), delete f2.transform), p2 && (void 0 !== i2 || void 0 !== o2 || d2.transform) && (d2.transformOrigin = function(t20, e3, n3) {
    return `${Pf(e3, t20.x, t20.width)} ${Pf(n3, t20.y, t20.height)}`;
  }(p2, void 0 !== i2 ? i2 : 0.5, void 0 !== o2 ? o2 : 0.5)), void 0 !== e2 && (f2.x = e2), void 0 !== n2 && (f2.y = n2), void 0 !== r2 && (f2.scale = r2), void 0 !== s2 && function(t20, e3, n3 = 1, r3 = 0, i3 = true) {
    t20.pathLength = 1;
    const o3 = i3 ? Tf : Cf;
    t20[o3.offset] = sf.transform(-r3);
    const s3 = sf.transform(e3), a3 = sf.transform(n3);
    t20[o3.array] = `${s3} ${a3}`;
  }(f2, s2, a2, u2, false);
}
const Ef = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {}, attrs: {} }), Of = (t19) => "string" == typeof t19 && "svg" === t19.toLowerCase();
function kf(t19, e2, n2, r2) {
  const i2 = ft(() => {
    const n3 = { style: {}, transform: {}, transformOrigin: {}, vars: {}, attrs: {} };
    return Sf(n3, e2, Of(r2), t19.transformTemplate), { ...n3.attrs, style: { ...n3.style } };
  }, [e2]);
  if (t19.style) {
    const e3 = {};
    yf(e3, t19.style, t19), i2.style = { ...e3, ...i2.style };
  }
  return i2;
}
function Mf(t19 = false) {
  return (e2, n2, r2, { latestValues: i2 }, o2) => {
    const s2 = (xf(e2) ? kf : bf)(n2, i2, o2, e2), a2 = function(t20, e3, n3) {
      const r3 = {};
      for (const i3 in t20) "values" === i3 && "object" == typeof t20.values || (yh(i3) || true === n3 && gh(i3) || !e3 && !gh(i3) || t20.draggable && i3.startsWith("onDrag")) && (r3[i3] = t20[i3]);
      return r3;
    }(n2, "string" == typeof e2, t19), u2 = e2 !== w ? { ...a2, ...s2, ref: r2 } : {}, { children: l2 } = n2;
    return y(e2, { ...u2, children: ft(() => Kh(l2) ? l2.get() : l2, [l2]) });
  };
}
function Af(t19) {
  const e2 = [{}, {}];
  return null == t19 || t19.values.forEach((t20, n2) => {
    e2[0][n2] = t20.get(), e2[1][n2] = t20.getVelocity();
  }), e2;
}
function Rf(t19, e2, n2, r2) {
  if ("function" == typeof e2) {
    const [i2, o2] = Af(r2);
    e2 = e2(void 0 !== n2 ? n2 : t19.custom, i2, o2);
  }
  if ("string" == typeof e2 && (e2 = t19.variants && t19.variants[e2]), "function" == typeof e2) {
    const [i2, o2] = Af(r2);
    e2 = e2(void 0 !== n2 ? n2 : t19.custom, i2, o2);
  }
  return e2;
}
const Df = (t19) => Array.isArray(t19), Lf = (t19) => Df(t19) ? t19[t19.length - 1] || 0 : t19;
function jf(t19) {
  const e2 = Kh(t19) ? t19.get() : t19;
  return ((t20) => Boolean(t20 && "object" == typeof t20 && t20.mix && t20.toValue))(e2) ? e2.toValue() : e2;
}
const Nf = (t19) => (e2, n2) => {
  const r2 = pt(wh), i2 = pt(Uc), o2 = () => function({ scrapeMotionValuesFromProps: t20, createRenderState: e3, onUpdate: n3 }, r3, i3, o3) {
    const s2 = { latestValues: Vf(r3, i3, o3, t20), renderState: e3() };
    return n3 && (s2.onMount = (t21) => n3({ props: r3, current: t21, ...s2 }), s2.onUpdate = (t21) => n3(t21)), s2;
  }(t19, e2, r2, i2);
  return n2 ? o2() : zc(o2);
};
function Vf(t19, e2, n2, r2) {
  const i2 = {}, o2 = r2(t19, {});
  for (const t20 in o2) i2[t20] = jf(o2[t20]);
  let { initial: s2, animate: a2 } = t19;
  const u2 = Sh(t19), l2 = Eh(t19);
  e2 && l2 && !u2 && false !== t19.inherit && (void 0 === s2 && (s2 = e2.initial), void 0 === a2 && (a2 = e2.animate));
  let c2 = !!n2 && false === n2.initial;
  c2 = c2 || false === s2;
  const h2 = c2 ? a2 : s2;
  if (h2 && "boolean" != typeof h2 && !xh(h2)) {
    const e3 = Array.isArray(h2) ? h2 : [h2];
    for (let n3 = 0; n3 < e3.length; n3++) {
      const r3 = Rf(t19, e3[n3]);
      if (r3) {
        const { transitionEnd: t20, transition: e4, ...n4 } = r3;
        for (const t21 in n4) {
          let e5 = n4[t21];
          if (Array.isArray(e5)) {
            e5 = e5[c2 ? e5.length - 1 : 0];
          }
          null !== e5 && (i2[t21] = e5);
        }
        for (const e5 in t20) i2[e5] = t20[e5];
      }
    }
  }
  return i2;
}
function Bf(t19, e2, n2) {
  var r2;
  const { style: i2 } = t19, o2 = {};
  for (const s2 in i2) (Kh(i2[s2]) || e2.style && Kh(e2.style[s2]) || Gh(s2, t19) || void 0 !== (null === (r2 = null == n2 ? void 0 : n2.getValue(s2)) || void 0 === r2 ? void 0 : r2.liveStyle)) && (o2[s2] = i2[s2]);
  return o2;
}
const If = { useVisualState: Nf({ scrapeMotionValuesFromProps: Bf, createRenderState: gf }) };
function Ff(t19, e2) {
  try {
    e2.dimensions = "function" == typeof t19.getBBox ? t19.getBBox() : t19.getBoundingClientRect();
  } catch (t20) {
    e2.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
function zf(t19, { style: e2, vars: n2 }, r2, i2) {
  Object.assign(t19.style, e2, i2 && i2.getProjectionStyles(r2));
  for (const e3 in n2) t19.style.setProperty(e3, n2[e3]);
}
const Uf = /* @__PURE__ */ new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function Wf(t19, e2, n2, r2) {
  zf(t19, e2, void 0, r2);
  for (const n3 in e2.attrs) t19.setAttribute(Uf.has(n3) ? n3 : Dh(n3), e2.attrs[n3]);
}
function Hf(t19, e2, n2) {
  const r2 = Bf(t19, e2, n2);
  for (const n3 in t19) if (Kh(t19[n3]) || Kh(e2[n3])) {
    r2[-1 !== Xh.indexOf(n3) ? "attr" + n3.charAt(0).toUpperCase() + n3.substring(1) : n3] = t19[n3];
  }
  return r2;
}
const $f = ["x", "y", "width", "height", "cx", "cy", "r"], Yf = { useVisualState: Nf({ scrapeMotionValuesFromProps: Hf, createRenderState: Ef, onUpdate: ({ props: t19, prevProps: e2, current: n2, renderState: r2, latestValues: i2 }) => {
  if (!n2) return;
  let o2 = !!t19.drag;
  if (!o2) {
    for (const t20 in i2) if (qh.has(t20)) {
      o2 = true;
      break;
    }
  }
  if (!o2) return;
  let s2 = !e2;
  if (e2) for (let n3 = 0; n3 < $f.length; n3++) {
    const r3 = $f[n3];
    t19[r3] !== e2[r3] && (s2 = true);
  }
  s2 && lh.read(() => {
    Ff(n2, r2), lh.render(() => {
      Sf(r2, i2, Of(n2.tagName), t19.transformTemplate), Wf(n2, r2);
    });
  });
} }) };
function Xf(t19, e2) {
  return function(n2, { forwardMotionProps: r2 } = { forwardMotionProps: false }) {
    return Ih({ ...xf(n2) ? Yf : If, preloadedFeatures: t19, useRender: Mf(r2), createVisualElement: e2, Component: n2 });
  };
}
function qf(t19, e2) {
  if (!Array.isArray(e2)) return false;
  const n2 = e2.length;
  if (n2 !== t19.length) return false;
  for (let r2 = 0; r2 < n2; r2++) if (e2[r2] !== t19[r2]) return false;
  return true;
}
function Gf(t19, e2, n2) {
  const r2 = t19.getProps();
  return Rf(r2, e2, void 0 !== n2 ? n2 : r2.custom, t19);
}
const Kf = nh(() => void 0 !== window.ScrollTimeline);
class Zf {
  constructor(t19) {
    this.stop = () => this.runAll("stop"), this.animations = t19.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map((t19) => "finished" in t19 ? t19.finished : t19));
  }
  getAll(t19) {
    return this.animations[0][t19];
  }
  setAll(t19, e2) {
    for (let n2 = 0; n2 < this.animations.length; n2++) this.animations[n2][t19] = e2;
  }
  attachTimeline(t19, e2) {
    const n2 = this.animations.map((n3) => Kf() && n3.attachTimeline ? n3.attachTimeline(t19) : "function" == typeof e2 ? e2(n3) : void 0);
    return () => {
      n2.forEach((t20, e3) => {
        t20 && t20(), this.animations[e3].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t19) {
    this.setAll("time", t19);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t19) {
    this.setAll("speed", t19);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t19 = 0;
    for (let e2 = 0; e2 < this.animations.length; e2++) t19 = Math.max(t19, this.animations[e2].duration);
    return t19;
  }
  runAll(t19) {
    this.animations.forEach((e2) => e2[t19]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class Jf extends Zf {
  then(t19, e2) {
    return Promise.all(this.animations).then(t19).catch(e2);
  }
}
function Qf(t19, e2) {
  return t19 ? t19[e2] || t19.default || t19 : void 0;
}
const td = 2e4;
function ed(t19) {
  let e2 = 0;
  let n2 = t19.next(e2);
  for (; !n2.done && e2 < td; ) e2 += 50, n2 = t19.next(e2);
  return e2 >= td ? 1 / 0 : e2;
}
function nd(t19) {
  return "function" == typeof t19;
}
function rd(t19, e2) {
  t19.timeline = e2, t19.onfinish = null;
}
const id = (t19) => Array.isArray(t19) && "number" == typeof t19[0], od = { linearEasing: void 0 };
function sd(t19, e2) {
  const n2 = nh(t19);
  return () => {
    var t20;
    return null !== (t20 = od[e2]) && void 0 !== t20 ? t20 : n2();
  };
}
const ad = sd(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch (t19) {
    return false;
  }
  return true;
}, "linearEasing"), ud = (t19, e2, n2 = 10) => {
  let r2 = "";
  const i2 = Math.max(Math.round(e2 / n2), 2);
  for (let e3 = 0; e3 < i2; e3++) r2 += t19(rh(0, i2 - 1, e3)) + ", ";
  return `linear(${r2.substring(0, r2.length - 2)})`;
};
function ld(t19) {
  return Boolean("function" == typeof t19 && ad() || !t19 || "string" == typeof t19 && (t19 in hd || ad()) || id(t19) || Array.isArray(t19) && t19.every(ld));
}
const cd = ([t19, e2, n2, r2]) => `cubic-bezier(${t19}, ${e2}, ${n2}, ${r2})`, hd = { linear: "linear", ease: "ease", easeIn: "ease-in", easeOut: "ease-out", easeInOut: "ease-in-out", circIn: cd([0, 0.65, 0.55, 1]), circOut: cd([0.55, 0, 1, 0.45]), backIn: cd([0.31, 0.01, 0.66, -0.59]), backOut: cd([0.33, 1.53, 0.69, 0.99]) };
function fd(t19, e2) {
  return t19 ? "function" == typeof t19 && ad() ? ud(t19, e2) : id(t19) ? cd(t19) : Array.isArray(t19) ? t19.map((t20) => fd(t20, e2) || hd.easeOut) : hd[t19] : void 0;
}
const dd = { x: false, y: false };
function pd() {
  return dd.x || dd.y;
}
function md(t19, e2) {
  const n2 = function(t20) {
    if (t20 instanceof Element) return [t20];
    if ("string" == typeof t20) {
      const e3 = document.querySelectorAll(t20);
      return e3 ? Array.from(e3) : [];
    }
    return Array.from(t20);
  }(t19), r2 = new AbortController();
  return [n2, { passive: true, ...e2, signal: r2.signal }, () => r2.abort()];
}
function vd(t19) {
  return !("touch" === t19.pointerType || pd());
}
const gd = (t19, e2) => !!e2 && (t19 === e2 || gd(t19, e2.parentElement)), yd = (t19) => "mouse" === t19.pointerType ? "number" != typeof t19.button || t19.button <= 0 : false !== t19.isPrimary, _d = /* @__PURE__ */ new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
const bd = /* @__PURE__ */ new WeakSet();
function wd(t19) {
  return (e2) => {
    "Enter" === e2.key && t19(e2);
  };
}
function xd(t19, e2) {
  t19.dispatchEvent(new PointerEvent("pointer" + e2, { isPrimary: true, bubbles: true }));
}
function Td(t19) {
  return yd(t19) && !pd();
}
function Cd(t19, e2, n2 = {}) {
  const [r2, i2, o2] = md(t19, n2), s2 = (t20) => {
    const r3 = t20.currentTarget;
    if (!Td(t20) || bd.has(r3)) return;
    bd.add(r3);
    const o3 = e2(r3, t20), s3 = (t21, e3) => {
      window.removeEventListener("pointerup", a2), window.removeEventListener("pointercancel", u2), Td(t21) && bd.has(r3) && (bd.delete(r3), "function" == typeof o3 && o3(t21, { success: e3 }));
    }, a2 = (t21) => {
      s3(t21, n2.useGlobalTarget || gd(r3, t21.target));
    }, u2 = (t21) => {
      s3(t21, false);
    };
    window.addEventListener("pointerup", a2, i2), window.addEventListener("pointercancel", u2, i2);
  };
  return r2.forEach((t20) => {
    (function(t21) {
      return _d.has(t21.tagName) || -1 !== t21.tabIndex;
    })(t20) || null !== t20.getAttribute("tabindex") || (t20.tabIndex = 0);
    (n2.useGlobalTarget ? window : t20).addEventListener("pointerdown", s2, i2), t20.addEventListener("focus", (t21) => ((t22, e3) => {
      const n3 = t22.currentTarget;
      if (!n3) return;
      const r3 = wd(() => {
        if (bd.has(n3)) return;
        xd(n3, "down");
        const t23 = wd(() => {
          xd(n3, "up");
        });
        n3.addEventListener("keyup", t23, e3), n3.addEventListener("blur", () => xd(n3, "cancel"), e3);
      });
      n3.addEventListener("keydown", r3, e3), n3.addEventListener("blur", () => n3.removeEventListener("keydown", r3), e3);
    })(t21, i2), i2);
  }), o2;
}
const Pd = /* @__PURE__ */ new Set(["width", "height", "top", "left", "right", "bottom", ...Xh]);
let Sd;
function Ed() {
  Sd = void 0;
}
const Od = { now: () => (void 0 === Sd && Od.set(hh.isProcessing || sh ? hh.timestamp : performance.now()), Sd), set: (t19) => {
  Sd = t19, queueMicrotask(Ed);
} };
function kd(t19, e2) {
  -1 === t19.indexOf(e2) && t19.push(e2);
}
function Md(t19, e2) {
  const n2 = t19.indexOf(e2);
  n2 > -1 && t19.splice(n2, 1);
}
class Ad {
  constructor() {
    this.subscriptions = [];
  }
  add(t19) {
    return kd(this.subscriptions, t19), () => Md(this.subscriptions, t19);
  }
  notify(t19, e2, n2) {
    const r2 = this.subscriptions.length;
    if (r2) if (1 === r2) this.subscriptions[0](t19, e2, n2);
    else for (let i2 = 0; i2 < r2; i2++) {
      const r3 = this.subscriptions[i2];
      r3 && r3(t19, e2, n2);
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function Rd(t19, e2) {
  return e2 ? t19 * (1e3 / e2) : 0;
}
class Dd {
  constructor(t19, e2 = {}) {
    this.version = "12.0.11", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (t20, e3 = true) => {
      const n2 = Od.now();
      this.updatedAt !== n2 && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t20), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), e3 && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = false, this.setCurrent(t19), this.owner = e2.owner;
  }
  setCurrent(t19) {
    var e2;
    this.current = t19, this.updatedAt = Od.now(), null === this.canTrackVelocity && void 0 !== t19 && (this.canTrackVelocity = (e2 = this.current, !isNaN(parseFloat(e2))));
  }
  setPrevFrameValue(t19 = this.current) {
    this.prevFrameValue = t19, this.prevUpdatedAt = this.updatedAt;
  }
  onChange(t19) {
    return this.on("change", t19);
  }
  on(t19, e2) {
    this.events[t19] || (this.events[t19] = new Ad());
    const n2 = this.events[t19].add(e2);
    return "change" === t19 ? () => {
      n2(), lh.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : n2;
  }
  clearListeners() {
    for (const t19 in this.events) this.events[t19].clear();
  }
  attach(t19, e2) {
    this.passiveEffect = t19, this.stopPassiveEffect = e2;
  }
  set(t19, e2 = true) {
    e2 && this.passiveEffect ? this.passiveEffect(t19, this.updateAndNotify) : this.updateAndNotify(t19, e2);
  }
  setWithVelocity(t19, e2, n2) {
    this.set(e2), this.prev = void 0, this.prevFrameValue = t19, this.prevUpdatedAt = this.updatedAt - n2;
  }
  jump(t19, e2 = true) {
    this.updateAndNotify(t19), this.prev = t19, this.prevUpdatedAt = this.prevFrameValue = void 0, e2 && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t19 = Od.now();
    if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t19 - this.updatedAt > 30) return 0;
    const e2 = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
    return Rd(parseFloat(this.current) - parseFloat(this.prevFrameValue), e2);
  }
  start(t19) {
    return this.stop(), new Promise((e2) => {
      this.hasAnimated = true, this.animation = t19(e2), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Ld(t19, e2) {
  return new Dd(t19, e2);
}
function jd(t19, e2, n2) {
  t19.hasValue(e2) ? t19.getValue(e2).set(n2) : t19.addValue(e2, Ld(n2));
}
function Nd(t19, e2) {
  const n2 = t19.getValue("willChange");
  if (r2 = n2, Boolean(Kh(r2) && r2.add)) return n2.add(e2);
  var r2;
}
function Vd(t19) {
  return t19.props[Lh];
}
const Bd = (t19, e2, n2) => (((1 - 3 * n2 + 3 * e2) * t19 + (3 * n2 - 6 * e2)) * t19 + 3 * e2) * t19;
function Id(t19, e2, n2, r2) {
  if (t19 === e2 && n2 === r2) return th;
  const i2 = (e3) => function(t20, e4, n3, r3, i3) {
    let o2, s2, a2 = 0;
    do {
      s2 = e4 + (n3 - e4) / 2, o2 = Bd(s2, r3, i3) - t20, o2 > 0 ? n3 = s2 : e4 = s2;
    } while (Math.abs(o2) > 1e-7 && ++a2 < 12);
    return s2;
  }(e3, 0, 1, t19, n2);
  return (t20) => 0 === t20 || 1 === t20 ? t20 : Bd(i2(t20), e2, r2);
}
const Fd = (t19) => (e2) => e2 <= 0.5 ? t19(2 * e2) / 2 : (2 - t19(2 * (1 - e2))) / 2, zd = (t19) => (e2) => 1 - t19(1 - e2), Ud = Id(0.33, 1.53, 0.69, 0.99), Wd = zd(Ud), Hd = Fd(Wd), $d = (t19) => (t19 *= 2) < 1 ? 0.5 * Wd(t19) : 0.5 * (2 - Math.pow(2, -10 * (t19 - 1))), Yd = (t19) => 1 - Math.sin(Math.acos(t19)), Xd = zd(Yd), qd = Fd(Yd), Gd = (t19) => /^0[^.\s]+$/u.test(t19);
const Kd = (t19) => Math.round(1e5 * t19) / 1e5, Zd = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
const Jd = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Qd = (t19, e2) => (n2) => Boolean("string" == typeof n2 && Jd.test(n2) && n2.startsWith(t19) || e2 && !function(t20) {
  return null == t20;
}(n2) && Object.prototype.hasOwnProperty.call(n2, e2)), tp = (t19, e2, n2) => (r2) => {
  if ("string" != typeof r2) return r2;
  const [i2, o2, s2, a2] = r2.match(Zd);
  return { [t19]: parseFloat(i2), [e2]: parseFloat(o2), [n2]: parseFloat(s2), alpha: void 0 !== a2 ? parseFloat(a2) : 1 };
}, ep = { ...Qh, transform: (t19) => Math.round(((t20) => Jh(0, 255, t20))(t19)) }, np = { test: Qd("rgb", "red"), parse: tp("red", "green", "blue"), transform: ({ red: t19, green: e2, blue: n2, alpha: r2 = 1 }) => "rgba(" + ep.transform(t19) + ", " + ep.transform(e2) + ", " + ep.transform(n2) + ", " + Kd(tf.transform(r2)) + ")" };
const rp = { test: Qd("#"), parse: function(t19) {
  let e2 = "", n2 = "", r2 = "", i2 = "";
  return t19.length > 5 ? (e2 = t19.substring(1, 3), n2 = t19.substring(3, 5), r2 = t19.substring(5, 7), i2 = t19.substring(7, 9)) : (e2 = t19.substring(1, 2), n2 = t19.substring(2, 3), r2 = t19.substring(3, 4), i2 = t19.substring(4, 5), e2 += e2, n2 += n2, r2 += r2, i2 += i2), { red: parseInt(e2, 16), green: parseInt(n2, 16), blue: parseInt(r2, 16), alpha: i2 ? parseInt(i2, 16) / 255 : 1 };
}, transform: np.transform }, ip = { test: Qd("hsl", "hue"), parse: tp("hue", "saturation", "lightness"), transform: ({ hue: t19, saturation: e2, lightness: n2, alpha: r2 = 1 }) => "hsla(" + Math.round(t19) + ", " + of.transform(Kd(e2)) + ", " + of.transform(Kd(n2)) + ", " + Kd(tf.transform(r2)) + ")" }, op = { test: (t19) => np.test(t19) || rp.test(t19) || ip.test(t19), parse: (t19) => np.test(t19) ? np.parse(t19) : ip.test(t19) ? ip.parse(t19) : rp.parse(t19), transform: (t19) => "string" == typeof t19 ? t19 : t19.hasOwnProperty("red") ? np.transform(t19) : ip.transform(t19) }, sp = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
const ap = "number", up = "color", lp = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function cp(t19) {
  const e2 = t19.toString(), n2 = [], r2 = { color: [], number: [], var: [] }, i2 = [];
  let o2 = 0;
  const s2 = e2.replace(lp, (t20) => (op.test(t20) ? (r2.color.push(o2), i2.push(up), n2.push(op.parse(t20))) : t20.startsWith("var(") ? (r2.var.push(o2), i2.push("var"), n2.push(t20)) : (r2.number.push(o2), i2.push(ap), n2.push(parseFloat(t20))), ++o2, "${}")).split("${}");
  return { values: n2, split: s2, indexes: r2, types: i2 };
}
function hp(t19) {
  return cp(t19).values;
}
function fp(t19) {
  const { split: e2, types: n2 } = cp(t19), r2 = e2.length;
  return (t20) => {
    let i2 = "";
    for (let o2 = 0; o2 < r2; o2++) if (i2 += e2[o2], void 0 !== t20[o2]) {
      const e3 = n2[o2];
      i2 += e3 === ap ? Kd(t20[o2]) : e3 === up ? op.transform(t20[o2]) : t20[o2];
    }
    return i2;
  };
}
const dp = (t19) => "number" == typeof t19 ? 0 : t19;
const pp = { test: function(t19) {
  var e2, n2;
  return isNaN(t19) && "string" == typeof t19 && ((null === (e2 = t19.match(Zd)) || void 0 === e2 ? void 0 : e2.length) || 0) + ((null === (n2 = t19.match(sp)) || void 0 === n2 ? void 0 : n2.length) || 0) > 0;
}, parse: hp, createTransformer: fp, getAnimatableNone: function(t19) {
  const e2 = hp(t19);
  return fp(t19)(e2.map(dp));
} }, mp = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function vp(t19) {
  const [e2, n2] = t19.slice(0, -1).split("(");
  if ("drop-shadow" === e2) return t19;
  const [r2] = n2.match(Zd) || [];
  if (!r2) return t19;
  const i2 = n2.replace(r2, "");
  let o2 = mp.has(e2) ? 1 : 0;
  return r2 !== n2 && (o2 *= 100), e2 + "(" + o2 + i2 + ")";
}
const gp = /\b([a-z-]*)\(.*?\)/gu, yp = { ...pp, getAnimatableNone: (t19) => {
  const e2 = t19.match(gp);
  return e2 ? e2.map(vp).join(" ") : t19;
} }, _p = { ...df, color: op, backgroundColor: op, outlineColor: op, fill: op, stroke: op, borderColor: op, borderTopColor: op, borderRightColor: op, borderBottomColor: op, borderLeftColor: op, filter: yp, WebkitFilter: yp }, bp = (t19) => _p[t19];
function wp(t19, e2) {
  let n2 = bp(t19);
  return n2 !== yp && (n2 = pp), n2.getAnimatableNone ? n2.getAnimatableNone(e2) : void 0;
}
const xp = /* @__PURE__ */ new Set(["auto", "none", "0"]);
const Tp = (t19) => t19 === Qh || t19 === sf, Cp = (t19, e2) => parseFloat(t19.split(", ")[e2]), Pp = (t19, e2) => (n2, { transform: r2 }) => {
  if ("none" === r2 || !r2) return 0;
  const i2 = r2.match(/^matrix3d\((.+)\)$/u);
  if (i2) return Cp(i2[1], e2);
  {
    const e3 = r2.match(/^matrix\((.+)\)$/u);
    return e3 ? Cp(e3[1], t19) : 0;
  }
}, Sp = /* @__PURE__ */ new Set(["x", "y", "z"]), Ep = Xh.filter((t19) => !Sp.has(t19));
const Op = { width: ({ x: t19 }, { paddingLeft: e2 = "0", paddingRight: n2 = "0" }) => t19.max - t19.min - parseFloat(e2) - parseFloat(n2), height: ({ y: t19 }, { paddingTop: e2 = "0", paddingBottom: n2 = "0" }) => t19.max - t19.min - parseFloat(e2) - parseFloat(n2), top: (t19, { top: e2 }) => parseFloat(e2), left: (t19, { left: e2 }) => parseFloat(e2), bottom: ({ y: t19 }, { top: e2 }) => parseFloat(e2) + (t19.max - t19.min), right: ({ x: t19 }, { left: e2 }) => parseFloat(e2) + (t19.max - t19.min), x: Pp(4, 13), y: Pp(5, 14) };
Op.translateX = Op.x, Op.translateY = Op.y;
const kp = /* @__PURE__ */ new Set();
let Mp = false, Ap = false;
function Rp() {
  if (Ap) {
    const t19 = Array.from(kp).filter((t20) => t20.needsMeasurement), e2 = new Set(t19.map((t20) => t20.element)), n2 = /* @__PURE__ */ new Map();
    e2.forEach((t20) => {
      const e3 = function(t21) {
        const e4 = [];
        return Ep.forEach((n3) => {
          const r2 = t21.getValue(n3);
          void 0 !== r2 && (e4.push([n3, r2.get()]), r2.set(n3.startsWith("scale") ? 1 : 0));
        }), e4;
      }(t20);
      e3.length && (n2.set(t20, e3), t20.render());
    }), t19.forEach((t20) => t20.measureInitialState()), e2.forEach((t20) => {
      t20.render();
      const e3 = n2.get(t20);
      e3 && e3.forEach(([e4, n3]) => {
        var r2;
        null === (r2 = t20.getValue(e4)) || void 0 === r2 || r2.set(n3);
      });
    }), t19.forEach((t20) => t20.measureEndState()), t19.forEach((t20) => {
      void 0 !== t20.suspendedScrollY && window.scrollTo(0, t20.suspendedScrollY);
    });
  }
  Ap = false, Mp = false, kp.forEach((t19) => t19.complete()), kp.clear();
}
function Dp() {
  kp.forEach((t19) => {
    t19.readKeyframes(), t19.needsMeasurement && (Ap = true);
  });
}
class Lp {
  constructor(t19, e2, n2, r2, i2, o2 = false) {
    this.isComplete = false, this.isAsync = false, this.needsMeasurement = false, this.isScheduled = false, this.unresolvedKeyframes = [...t19], this.onComplete = e2, this.name = n2, this.motionValue = r2, this.element = i2, this.isAsync = o2;
  }
  scheduleResolve() {
    this.isScheduled = true, this.isAsync ? (kp.add(this), Mp || (Mp = true, lh.read(Dp), lh.resolveKeyframes(Rp))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t19, name: e2, element: n2, motionValue: r2 } = this;
    for (let i2 = 0; i2 < t19.length; i2++) if (null === t19[i2]) if (0 === i2) {
      const i3 = null == r2 ? void 0 : r2.get(), o2 = t19[t19.length - 1];
      if (void 0 !== i3) t19[0] = i3;
      else if (n2 && e2) {
        const r3 = n2.readValue(e2, o2);
        null != r3 && (t19[0] = r3);
      }
      void 0 === t19[0] && (t19[0] = o2), r2 && void 0 === i3 && r2.set(t19[0]);
    } else t19[i2] = t19[i2 - 1];
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete() {
    this.isComplete = true, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), kp.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = false, kp.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const jp = (t19) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t19), Np = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Vp(t19, e2, n2 = 1) {
  const [r2, i2] = function(t20) {
    const e3 = Np.exec(t20);
    if (!e3) return [,];
    const [, n3, r3, i3] = e3;
    return [`--${null != n3 ? n3 : r3}`, i3];
  }(t19);
  if (!r2) return;
  const o2 = window.getComputedStyle(e2).getPropertyValue(r2);
  if (o2) {
    const t20 = o2.trim();
    return jp(t20) ? parseFloat(t20) : t20;
  }
  return Hh(i2) ? Vp(i2, e2, n2 + 1) : i2;
}
const Bp = (t19) => (e2) => e2.test(t19), Ip = [Qh, sf, of, rf, uf, af, { test: (t19) => "auto" === t19, parse: (t19) => t19 }], Fp = (t19) => Ip.find(Bp(t19));
class zp extends Lp {
  constructor(t19, e2, n2, r2, i2) {
    super(t19, e2, n2, r2, i2, true);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t19, element: e2, name: n2 } = this;
    if (!e2 || !e2.current) return;
    super.readKeyframes();
    for (let n3 = 0; n3 < t19.length; n3++) {
      let r3 = t19[n3];
      if ("string" == typeof r3 && (r3 = r3.trim(), Hh(r3))) {
        const i3 = Vp(r3, e2.current);
        void 0 !== i3 && (t19[n3] = i3), n3 === t19.length - 1 && (this.finalKeyframe = r3);
      }
    }
    if (this.resolveNoneKeyframes(), !Pd.has(n2) || 2 !== t19.length) return;
    const [r2, i2] = t19, o2 = Fp(r2), s2 = Fp(i2);
    if (o2 !== s2) if (Tp(o2) && Tp(s2)) for (let e3 = 0; e3 < t19.length; e3++) {
      const n3 = t19[e3];
      "string" == typeof n3 && (t19[e3] = parseFloat(n3));
    }
    else this.needsMeasurement = true;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t19, name: e2 } = this, n2 = [];
    for (let e3 = 0; e3 < t19.length; e3++) ("number" == typeof (r2 = t19[e3]) ? 0 === r2 : null === r2 || "none" === r2 || "0" === r2 || Gd(r2)) && n2.push(e3);
    var r2;
    n2.length && function(t20, e3, n3) {
      let r3, i2 = 0;
      for (; i2 < t20.length && !r3; ) {
        const e4 = t20[i2];
        "string" == typeof e4 && !xp.has(e4) && cp(e4).values.length && (r3 = t20[i2]), i2++;
      }
      if (r3 && n3) for (const i3 of e3) t20[i3] = wp(n3, r3);
    }(t19, n2, e2);
  }
  measureInitialState() {
    const { element: t19, unresolvedKeyframes: e2, name: n2 } = this;
    if (!t19 || !t19.current) return;
    "height" === n2 && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Op[n2](t19.measureViewportBox(), window.getComputedStyle(t19.current)), e2[0] = this.measuredOrigin;
    const r2 = e2[e2.length - 1];
    void 0 !== r2 && t19.getValue(n2, r2).jump(r2, false);
  }
  measureEndState() {
    var t19;
    const { element: e2, name: n2, unresolvedKeyframes: r2 } = this;
    if (!e2 || !e2.current) return;
    const i2 = e2.getValue(n2);
    i2 && i2.jump(this.measuredOrigin, false);
    const o2 = r2.length - 1, s2 = r2[o2];
    r2[o2] = Op[n2](e2.measureViewportBox(), window.getComputedStyle(e2.current)), null !== s2 && void 0 === this.finalKeyframe && (this.finalKeyframe = s2), (null === (t19 = this.removedTransforms) || void 0 === t19 ? void 0 : t19.length) && this.removedTransforms.forEach(([t20, n3]) => {
      e2.getValue(t20).set(n3);
    }), this.resolveNoneKeyframes();
  }
}
const Up = (t19, e2) => "zIndex" !== e2 && (!("number" != typeof t19 && !Array.isArray(t19)) || !("string" != typeof t19 || !pp.test(t19) && "0" !== t19 || t19.startsWith("url(")));
function Wp(t19, e2, n2, r2) {
  const i2 = t19[0];
  if (null === i2) return false;
  if ("display" === e2 || "visibility" === e2) return true;
  const o2 = t19[t19.length - 1], s2 = Up(i2, e2), a2 = Up(o2, e2);
  return !(!s2 || !a2) && (function(t20) {
    const e3 = t20[0];
    if (1 === t20.length) return true;
    for (let n3 = 0; n3 < t20.length; n3++) if (t20[n3] !== e3) return true;
  }(t19) || ("spring" === n2 || nd(n2)) && r2);
}
const Hp = (t19) => null !== t19;
function $p(t19, { repeat: e2, repeatType: n2 = "loop" }, r2) {
  const i2 = t19.filter(Hp), o2 = e2 && "loop" !== n2 && e2 % 2 == 1 ? 0 : i2.length - 1;
  return o2 && void 0 !== r2 ? r2 : i2[o2];
}
class Yp {
  constructor({ autoplay: t19 = true, delay: e2 = 0, type: n2 = "keyframes", repeat: r2 = 0, repeatDelay: i2 = 0, repeatType: o2 = "loop", ...s2 }) {
    this.isStopped = false, this.hasAttemptedResolve = false, this.createdAt = Od.now(), this.options = { autoplay: t19, delay: e2, type: n2, repeat: r2, repeatDelay: i2, repeatType: o2, ...s2 }, this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt;
  }
  get resolved() {
    return this._resolved || this.hasAttemptedResolve || (Dp(), Rp()), this._resolved;
  }
  onKeyframesResolved(t19, e2) {
    this.resolvedAt = Od.now(), this.hasAttemptedResolve = true;
    const { name: n2, type: r2, velocity: i2, delay: o2, onComplete: s2, onUpdate: a2, isGenerator: u2 } = this.options;
    if (!u2 && !Wp(t19, n2, r2, i2)) {
      if (!o2) return a2 && a2($p(t19, this.options, e2)), s2 && s2(), void this.resolveFinishedPromise();
      this.options.duration = 0;
    }
    const l2 = this.initPlayback(t19, e2);
    false !== l2 && (this._resolved = { keyframes: t19, finalKeyframe: e2, ...l2 }, this.onPostResolved());
  }
  onPostResolved() {
  }
  then(t19, e2) {
    return this.currentFinishedPromise.then(t19, e2);
  }
  flatten() {
    this.options.type = "keyframes", this.options.ease = "linear";
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t19) => {
      this.resolveFinishedPromise = t19;
    });
  }
}
const Xp = (t19, e2, n2) => t19 + (e2 - t19) * n2;
function qp(t19, e2, n2) {
  return n2 < 0 && (n2 += 1), n2 > 1 && (n2 -= 1), n2 < 1 / 6 ? t19 + 6 * (e2 - t19) * n2 : n2 < 0.5 ? e2 : n2 < 2 / 3 ? t19 + (e2 - t19) * (2 / 3 - n2) * 6 : t19;
}
function Gp(t19, e2) {
  return (n2) => n2 > 0 ? e2 : t19;
}
const Kp = (t19, e2, n2) => {
  const r2 = t19 * t19, i2 = n2 * (e2 * e2 - r2) + r2;
  return i2 < 0 ? 0 : Math.sqrt(i2);
}, Zp = [rp, np, ip];
function Jp(t19) {
  const e2 = ((t20) => Zp.find((e3) => e3.test(t20)))(t19);
  if (!Boolean(e2)) return false;
  let n2 = e2.parse(t19);
  return e2 === ip && (n2 = function({ hue: t20, saturation: e3, lightness: n3, alpha: r2 }) {
    t20 /= 360, n3 /= 100;
    let i2 = 0, o2 = 0, s2 = 0;
    if (e3 /= 100) {
      const r3 = n3 < 0.5 ? n3 * (1 + e3) : n3 + e3 - n3 * e3, a2 = 2 * n3 - r3;
      i2 = qp(a2, r3, t20 + 1 / 3), o2 = qp(a2, r3, t20), s2 = qp(a2, r3, t20 - 1 / 3);
    } else i2 = o2 = s2 = n3;
    return { red: Math.round(255 * i2), green: Math.round(255 * o2), blue: Math.round(255 * s2), alpha: r2 };
  }(n2)), n2;
}
const Qp = (t19, e2) => {
  const n2 = Jp(t19), r2 = Jp(e2);
  if (!n2 || !r2) return Gp(t19, e2);
  const i2 = { ...n2 };
  return (t20) => (i2.red = Kp(n2.red, r2.red, t20), i2.green = Kp(n2.green, r2.green, t20), i2.blue = Kp(n2.blue, r2.blue, t20), i2.alpha = Xp(n2.alpha, r2.alpha, t20), np.transform(i2));
}, tm = (t19, e2) => (n2) => e2(t19(n2)), em = (...t19) => t19.reduce(tm), nm = /* @__PURE__ */ new Set(["none", "hidden"]);
function rm(t19, e2) {
  return (n2) => Xp(t19, e2, n2);
}
function im(t19) {
  return "number" == typeof t19 ? rm : "string" == typeof t19 ? Hh(t19) ? Gp : op.test(t19) ? Qp : am : Array.isArray(t19) ? om : "object" == typeof t19 ? op.test(t19) ? Qp : sm : Gp;
}
function om(t19, e2) {
  const n2 = [...t19], r2 = n2.length, i2 = t19.map((t20, n3) => im(t20)(t20, e2[n3]));
  return (t20) => {
    for (let e3 = 0; e3 < r2; e3++) n2[e3] = i2[e3](t20);
    return n2;
  };
}
function sm(t19, e2) {
  const n2 = { ...t19, ...e2 }, r2 = {};
  for (const i2 in n2) void 0 !== t19[i2] && void 0 !== e2[i2] && (r2[i2] = im(t19[i2])(t19[i2], e2[i2]));
  return (t20) => {
    for (const e3 in r2) n2[e3] = r2[e3](t20);
    return n2;
  };
}
const am = (t19, e2) => {
  const n2 = pp.createTransformer(e2), r2 = cp(t19), i2 = cp(e2);
  return r2.indexes.var.length === i2.indexes.var.length && r2.indexes.color.length === i2.indexes.color.length && r2.indexes.number.length >= i2.indexes.number.length ? nm.has(t19) && !i2.values.length || nm.has(e2) && !r2.values.length ? function(t20, e3) {
    return nm.has(t20) ? (n3) => n3 <= 0 ? t20 : e3 : (n3) => n3 >= 1 ? e3 : t20;
  }(t19, e2) : em(om(function(t20, e3) {
    var n3;
    const r3 = [], i3 = { color: 0, var: 0, number: 0 };
    for (let o2 = 0; o2 < e3.values.length; o2++) {
      const s2 = e3.types[o2], a2 = t20.indexes[s2][i3[s2]], u2 = null !== (n3 = t20.values[a2]) && void 0 !== n3 ? n3 : 0;
      r3[o2] = u2, i3[s2]++;
    }
    return r3;
  }(r2, i2), i2.values), n2) : Gp(t19, e2);
};
function um(t19, e2, n2) {
  if ("number" == typeof t19 && "number" == typeof e2 && "number" == typeof n2) return Xp(t19, e2, n2);
  return im(t19)(t19, e2);
}
function lm(t19, e2, n2) {
  const r2 = Math.max(e2 - 5, 0);
  return Rd(n2 - t19(r2), e2 - r2);
}
const cm = 100, hm = 10, fm = 1, dm = 0, pm = 800, mm = 0.3, vm = 0.3, gm = { granular: 0.01, default: 2 }, ym = { granular: 5e-3, default: 0.5 }, _m = 0.01, bm = 10, wm = 0.05, xm = 1;
function Tm({ duration: t19 = pm, bounce: e2 = mm, velocity: n2 = dm, mass: r2 = fm }) {
  let i2, o2, s2 = 1 - e2;
  s2 = Jh(wm, xm, s2), t19 = Jh(_m, bm, oh(t19)), s2 < 1 ? (i2 = (e3) => {
    const r3 = e3 * s2, i3 = r3 * t19;
    return 1e-3 - (r3 - n2) / Pm(e3, s2) * Math.exp(-i3);
  }, o2 = (e3) => {
    const r3 = e3 * s2 * t19, o3 = r3 * n2 + n2, a3 = Math.pow(s2, 2) * Math.pow(e3, 2) * t19, u2 = Math.exp(-r3), l2 = Pm(Math.pow(e3, 2), s2);
    return (1e-3 - i2(e3) > 0 ? -1 : 1) * ((o3 - a3) * u2) / l2;
  }) : (i2 = (e3) => Math.exp(-e3 * t19) * ((e3 - n2) * t19 + 1) - 1e-3, o2 = (e3) => Math.exp(-e3 * t19) * (t19 * t19 * (n2 - e3)));
  const a2 = function(t20, e3, n3) {
    let r3 = n3;
    for (let n4 = 1; n4 < Cm; n4++) r3 -= t20(r3) / e3(r3);
    return r3;
  }(i2, o2, 5 / t19);
  if (t19 = ih(t19), isNaN(a2)) return { stiffness: cm, damping: hm, duration: t19 };
  {
    const e3 = Math.pow(a2, 2) * r2;
    return { stiffness: e3, damping: 2 * s2 * Math.sqrt(r2 * e3), duration: t19 };
  }
}
const Cm = 12;
function Pm(t19, e2) {
  return t19 * Math.sqrt(1 - e2 * e2);
}
const Sm = ["duration", "bounce"], Em = ["stiffness", "damping", "mass"];
function Om(t19, e2) {
  return e2.some((e3) => void 0 !== t19[e3]);
}
function km(t19 = vm, e2 = mm) {
  const n2 = "object" != typeof t19 ? { visualDuration: t19, keyframes: [0, 1], bounce: e2 } : t19;
  let { restSpeed: r2, restDelta: i2 } = n2;
  const o2 = n2.keyframes[0], s2 = n2.keyframes[n2.keyframes.length - 1], a2 = { done: false, value: o2 }, { stiffness: u2, damping: l2, mass: c2, duration: h2, velocity: f2, isResolvedFromDuration: d2 } = function(t20) {
    let e3 = { velocity: dm, stiffness: cm, damping: hm, mass: fm, isResolvedFromDuration: false, ...t20 };
    if (!Om(t20, Em) && Om(t20, Sm)) if (t20.visualDuration) {
      const n3 = t20.visualDuration, r3 = 2 * Math.PI / (1.2 * n3), i3 = r3 * r3, o3 = 2 * Jh(0.05, 1, 1 - (t20.bounce || 0)) * Math.sqrt(i3);
      e3 = { ...e3, mass: fm, stiffness: i3, damping: o3 };
    } else {
      const n3 = Tm(t20);
      e3 = { ...e3, ...n3, mass: fm }, e3.isResolvedFromDuration = true;
    }
    return e3;
  }({ ...n2, velocity: -oh(n2.velocity || 0) }), p2 = f2 || 0, m2 = l2 / (2 * Math.sqrt(u2 * c2)), v2 = s2 - o2, g2 = oh(Math.sqrt(u2 / c2)), y2 = Math.abs(v2) < 5;
  let _2;
  if (r2 || (r2 = y2 ? gm.granular : gm.default), i2 || (i2 = y2 ? ym.granular : ym.default), m2 < 1) {
    const t20 = Pm(g2, m2);
    _2 = (e3) => {
      const n3 = Math.exp(-m2 * g2 * e3);
      return s2 - n3 * ((p2 + m2 * g2 * v2) / t20 * Math.sin(t20 * e3) + v2 * Math.cos(t20 * e3));
    };
  } else if (1 === m2) _2 = (t20) => s2 - Math.exp(-g2 * t20) * (v2 + (p2 + g2 * v2) * t20);
  else {
    const t20 = g2 * Math.sqrt(m2 * m2 - 1);
    _2 = (e3) => {
      const n3 = Math.exp(-m2 * g2 * e3), r3 = Math.min(t20 * e3, 300);
      return s2 - n3 * ((p2 + m2 * g2 * v2) * Math.sinh(r3) + t20 * v2 * Math.cosh(r3)) / t20;
    };
  }
  const b2 = { calculatedDuration: d2 && h2 || null, next: (t20) => {
    const e3 = _2(t20);
    if (d2) a2.done = t20 >= h2;
    else {
      let n3 = 0;
      m2 < 1 && (n3 = 0 === t20 ? ih(p2) : lm(_2, t20, e3));
      const o3 = Math.abs(n3) <= r2, u3 = Math.abs(s2 - e3) <= i2;
      a2.done = o3 && u3;
    }
    return a2.value = a2.done ? s2 : e3, a2;
  }, toString: () => {
    const t20 = Math.min(ed(b2), td), e3 = ud((e4) => b2.next(t20 * e4).value, t20, 30);
    return t20 + "ms " + e3;
  } };
  return b2;
}
function Mm({ keyframes: t19, velocity: e2 = 0, power: n2 = 0.8, timeConstant: r2 = 325, bounceDamping: i2 = 10, bounceStiffness: o2 = 500, modifyTarget: s2, min: a2, max: u2, restDelta: l2 = 0.5, restSpeed: c2 }) {
  const h2 = t19[0], f2 = { done: false, value: h2 }, d2 = (t20) => void 0 === a2 ? u2 : void 0 === u2 || Math.abs(a2 - t20) < Math.abs(u2 - t20) ? a2 : u2;
  let p2 = n2 * e2;
  const m2 = h2 + p2, v2 = void 0 === s2 ? m2 : s2(m2);
  v2 !== m2 && (p2 = v2 - h2);
  const g2 = (t20) => -p2 * Math.exp(-t20 / r2), y2 = (t20) => v2 + g2(t20), _2 = (t20) => {
    const e3 = g2(t20), n3 = y2(t20);
    f2.done = Math.abs(e3) <= l2, f2.value = f2.done ? v2 : n3;
  };
  let b2, w2;
  const x2 = (t20) => {
    ((t21) => void 0 !== a2 && t21 < a2 || void 0 !== u2 && t21 > u2)(f2.value) && (b2 = t20, w2 = km({ keyframes: [f2.value, d2(f2.value)], velocity: lm(y2, t20, f2.value), damping: i2, stiffness: o2, restDelta: l2, restSpeed: c2 }));
  };
  return x2(0), { calculatedDuration: null, next: (t20) => {
    let e3 = false;
    return w2 || void 0 !== b2 || (e3 = true, _2(t20), x2(t20)), void 0 !== b2 && t20 >= b2 ? w2.next(t20 - b2) : (!e3 && _2(t20), f2);
  } };
}
const Am = Id(0.42, 0, 1, 1), Rm = Id(0, 0, 0.58, 1), Dm = Id(0.42, 0, 0.58, 1), Lm = { linear: th, easeIn: Am, easeInOut: Dm, easeOut: Rm, circIn: Yd, circInOut: qd, circOut: Xd, backIn: Wd, backInOut: Hd, backOut: Ud, anticipate: $d }, jm = (t19) => {
  if (id(t19)) {
    eh(4 === t19.length);
    const [e2, n2, r2, i2] = t19;
    return Id(e2, n2, r2, i2);
  }
  return "string" == typeof t19 ? Lm[t19] : t19;
};
function Nm(t19, e2, { clamp: n2 = true, ease: r2, mixer: i2 } = {}) {
  const o2 = t19.length;
  if (eh(o2 === e2.length), 1 === o2) return () => e2[0];
  if (2 === o2 && e2[0] === e2[1]) return () => e2[1];
  const s2 = t19[0] === t19[1];
  t19[0] > t19[o2 - 1] && (t19 = [...t19].reverse(), e2 = [...e2].reverse());
  const a2 = function(t20, e3, n3) {
    const r3 = [], i3 = n3 || um, o3 = t20.length - 1;
    for (let n4 = 0; n4 < o3; n4++) {
      let o4 = i3(t20[n4], t20[n4 + 1]);
      if (e3) {
        const t21 = Array.isArray(e3) ? e3[n4] || th : e3;
        o4 = em(t21, o4);
      }
      r3.push(o4);
    }
    return r3;
  }(e2, r2, i2), u2 = a2.length, l2 = (n3) => {
    if (s2 && n3 < t19[0]) return e2[0];
    let r3 = 0;
    if (u2 > 1) for (; r3 < t19.length - 2 && !(n3 < t19[r3 + 1]); r3++) ;
    const i3 = rh(t19[r3], t19[r3 + 1], n3);
    return a2[r3](i3);
  };
  return n2 ? (e3) => l2(Jh(t19[0], t19[o2 - 1], e3)) : l2;
}
function Vm(t19) {
  const e2 = [0];
  return function(t20, e3) {
    const n2 = t20[t20.length - 1];
    for (let r2 = 1; r2 <= e3; r2++) {
      const i2 = rh(0, e3, r2);
      t20.push(Xp(n2, 1, i2));
    }
  }(e2, t19.length - 1), e2;
}
function Bm({ duration: t19 = 300, keyframes: e2, times: n2, ease: r2 = "easeInOut" }) {
  const i2 = ((t20) => Array.isArray(t20) && "number" != typeof t20[0])(r2) ? r2.map(jm) : jm(r2), o2 = { done: false, value: e2[0] }, s2 = function(t20, e3) {
    return t20.map((t21) => t21 * e3);
  }(n2 && n2.length === e2.length ? n2 : Vm(e2), t19), a2 = Nm(s2, e2, { ease: Array.isArray(i2) ? i2 : (u2 = e2, l2 = i2, u2.map(() => l2 || Dm).splice(0, u2.length - 1)) });
  var u2, l2;
  return { calculatedDuration: t19, next: (e3) => (o2.value = a2(e3), o2.done = e3 >= t19, o2) };
}
const Im = (t19) => {
  const e2 = ({ timestamp: e3 }) => t19(e3);
  return { start: () => lh.update(e2, true), stop: () => ch(e2), now: () => hh.isProcessing ? hh.timestamp : Od.now() };
}, Fm = { decay: Mm, inertia: Mm, tween: Bm, keyframes: Bm, spring: km }, zm = (t19) => t19 / 100;
class Um extends Yp {
  constructor(t19) {
    super(t19), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = true, "idle" === this.state) return;
      this.teardown();
      const { onStop: t20 } = this.options;
      t20 && t20();
    };
    const { name: e2, motionValue: n2, element: r2, keyframes: i2 } = this.options, o2 = (null == r2 ? void 0 : r2.KeyframeResolver) || Lp;
    this.resolver = new o2(i2, (t20, e3) => this.onKeyframesResolved(t20, e3), e2, n2, r2), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t19) {
    const { type: e2 = "keyframes", repeat: n2 = 0, repeatDelay: r2 = 0, repeatType: i2, velocity: o2 = 0 } = this.options, s2 = nd(e2) ? e2 : Fm[e2] || Bm;
    let a2, u2;
    s2 !== Bm && "number" != typeof t19[0] && (a2 = em(zm, um(t19[0], t19[1])), t19 = [0, 100]);
    const l2 = s2({ ...this.options, keyframes: t19 });
    "mirror" === i2 && (u2 = s2({ ...this.options, keyframes: [...t19].reverse(), velocity: -o2 })), null === l2.calculatedDuration && (l2.calculatedDuration = ed(l2));
    const { calculatedDuration: c2 } = l2, h2 = c2 + r2;
    return { generator: l2, mirroredGenerator: u2, mapPercentToKeyframes: a2, calculatedDuration: c2, resolvedDuration: h2, totalDuration: h2 * (n2 + 1) - r2 };
  }
  onPostResolved() {
    const { autoplay: t19 = true } = this.options;
    this.play(), "paused" !== this.pendingPlayState && t19 ? this.state = this.pendingPlayState : this.pause();
  }
  tick(t19, e2 = false) {
    const { resolved: n2 } = this;
    if (!n2) {
      const { keyframes: t20 } = this.options;
      return { done: true, value: t20[t20.length - 1] };
    }
    const { finalKeyframe: r2, generator: i2, mirroredGenerator: o2, mapPercentToKeyframes: s2, keyframes: a2, calculatedDuration: u2, totalDuration: l2, resolvedDuration: c2 } = n2;
    if (null === this.startTime) return i2.next(0);
    const { delay: h2, repeat: f2, repeatType: d2, repeatDelay: p2, onUpdate: m2 } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t19) : this.speed < 0 && (this.startTime = Math.min(t19 - l2 / this.speed, this.startTime)), e2 ? this.currentTime = t19 : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(t19 - this.startTime) * this.speed;
    const v2 = this.currentTime - h2 * (this.speed >= 0 ? 1 : -1), g2 = this.speed >= 0 ? v2 < 0 : v2 > l2;
    this.currentTime = Math.max(v2, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = l2);
    let y2 = this.currentTime, _2 = i2;
    if (f2) {
      const t20 = Math.min(this.currentTime, l2) / c2;
      let e3 = Math.floor(t20), n3 = t20 % 1;
      !n3 && t20 >= 1 && (n3 = 1), 1 === n3 && e3--, e3 = Math.min(e3, f2 + 1);
      Boolean(e3 % 2) && ("reverse" === d2 ? (n3 = 1 - n3, p2 && (n3 -= p2 / c2)) : "mirror" === d2 && (_2 = o2)), y2 = Jh(0, 1, n3) * c2;
    }
    const b2 = g2 ? { done: false, value: a2[0] } : _2.next(y2);
    s2 && (b2.value = s2(b2.value));
    let { done: w2 } = b2;
    g2 || null === u2 || (w2 = this.speed >= 0 ? this.currentTime >= l2 : this.currentTime <= 0);
    const x2 = null === this.holdTime && ("finished" === this.state || "running" === this.state && w2);
    return x2 && void 0 !== r2 && (b2.value = $p(a2, this.options, r2)), m2 && m2(b2.value), x2 && this.finish(), b2;
  }
  get duration() {
    const { resolved: t19 } = this;
    return t19 ? oh(t19.calculatedDuration) : 0;
  }
  get time() {
    return oh(this.currentTime);
  }
  set time(t19) {
    t19 = ih(t19), this.currentTime = t19, null !== this.holdTime || 0 === this.speed ? this.holdTime = t19 : this.driver && (this.startTime = this.driver.now() - t19 / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t19) {
    const e2 = this.playbackSpeed !== t19;
    this.playbackSpeed = t19, e2 && (this.time = oh(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) return void (this.pendingPlayState = "running");
    if (this.isStopped) return;
    const { driver: t19 = Im, onPlay: e2, startTime: n2 } = this.options;
    this.driver || (this.driver = t19((t20) => this.tick(t20))), e2 && e2();
    const r2 = this.driver.now();
    null !== this.holdTime ? this.startTime = r2 - this.holdTime : this.startTime ? "finished" === this.state && (this.startTime = r2) : this.startTime = null != n2 ? n2 : this.calcStartTime(), "finished" === this.state && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    var t19;
    this._resolved ? (this.state = "paused", this.holdTime = null !== (t19 = this.currentTime) && void 0 !== t19 ? t19 : 0) : this.pendingPlayState = "paused";
  }
  complete() {
    "running" !== this.state && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.teardown(), this.state = "finished";
    const { onComplete: t19 } = this.options;
    t19 && t19();
  }
  cancel() {
    null !== this.cancelTime && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t19) {
    return this.startTime = 0, this.tick(t19, true);
  }
}
const Wm = /* @__PURE__ */ new Set(["opacity", "clipPath", "filter", "transform"]);
function Hm(t19, e2, n2, { delay: r2 = 0, duration: i2 = 300, repeat: o2 = 0, repeatType: s2 = "loop", ease: a2 = "easeInOut", times: u2 } = {}) {
  const l2 = { [e2]: n2 };
  u2 && (l2.offset = u2);
  const c2 = fd(a2, i2);
  return Array.isArray(c2) && (l2.easing = c2), t19.animate(l2, { delay: r2, duration: i2, easing: Array.isArray(c2) ? "linear" : c2, fill: "both", iterations: o2 + 1, direction: "reverse" === s2 ? "alternate" : "normal" });
}
const $m = nh(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
const Ym = { anticipate: $d, backInOut: Hd, circInOut: qd };
class Xm extends Yp {
  constructor(t19) {
    super(t19);
    const { name: e2, motionValue: n2, element: r2, keyframes: i2 } = this.options;
    this.resolver = new zp(i2, (t20, e3) => this.onKeyframesResolved(t20, e3), e2, n2, r2), this.resolver.scheduleResolve();
  }
  initPlayback(t19, e2) {
    let { duration: n2 = 300, times: r2, ease: i2, type: o2, motionValue: s2, name: a2, startTime: u2 } = this.options;
    if (!s2.owner || !s2.owner.current) return false;
    var l2;
    if ("string" == typeof i2 && ad() && i2 in Ym && (i2 = Ym[i2]), nd((l2 = this.options).type) || "spring" === l2.type || !ld(l2.ease)) {
      const { onComplete: e3, onUpdate: s3, motionValue: a3, element: u3, ...l3 } = this.options, c3 = function(t20, e4) {
        const n3 = new Um({ ...e4, keyframes: t20, repeat: 0, delay: 0, isGenerator: true });
        let r3 = { done: false, value: t20[0] };
        const i3 = [];
        let o3 = 0;
        for (; !r3.done && o3 < 2e4; ) r3 = n3.sample(o3), i3.push(r3.value), o3 += 10;
        return { times: void 0, keyframes: i3, duration: o3 - 10, ease: "linear" };
      }(t19, l3);
      1 === (t19 = c3.keyframes).length && (t19[1] = t19[0]), n2 = c3.duration, r2 = c3.times, i2 = c3.ease, o2 = "keyframes";
    }
    const c2 = Hm(s2.owner.current, a2, t19, { ...this.options, duration: n2, times: r2, ease: i2 });
    return c2.startTime = null != u2 ? u2 : this.calcStartTime(), this.pendingTimeline ? (rd(c2, this.pendingTimeline), this.pendingTimeline = void 0) : c2.onfinish = () => {
      const { onComplete: n3 } = this.options;
      s2.set($p(t19, this.options, e2)), n3 && n3(), this.cancel(), this.resolveFinishedPromise();
    }, { animation: c2, duration: n2, times: r2, type: o2, ease: i2, keyframes: t19 };
  }
  get duration() {
    const { resolved: t19 } = this;
    if (!t19) return 0;
    const { duration: e2 } = t19;
    return oh(e2);
  }
  get time() {
    const { resolved: t19 } = this;
    if (!t19) return 0;
    const { animation: e2 } = t19;
    return oh(e2.currentTime || 0);
  }
  set time(t19) {
    const { resolved: e2 } = this;
    if (!e2) return;
    const { animation: n2 } = e2;
    n2.currentTime = ih(t19);
  }
  get speed() {
    const { resolved: t19 } = this;
    if (!t19) return 1;
    const { animation: e2 } = t19;
    return e2.playbackRate;
  }
  set speed(t19) {
    const { resolved: e2 } = this;
    if (!e2) return;
    const { animation: n2 } = e2;
    n2.playbackRate = t19;
  }
  get state() {
    const { resolved: t19 } = this;
    if (!t19) return "idle";
    const { animation: e2 } = t19;
    return e2.playState;
  }
  get startTime() {
    const { resolved: t19 } = this;
    if (!t19) return null;
    const { animation: e2 } = t19;
    return e2.startTime;
  }
  attachTimeline(t19) {
    if (this._resolved) {
      const { resolved: e2 } = this;
      if (!e2) return th;
      const { animation: n2 } = e2;
      rd(n2, t19);
    } else this.pendingTimeline = t19;
    return th;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t19 } = this;
    if (!t19) return;
    const { animation: e2 } = t19;
    "finished" === e2.playState && this.updateFinishedPromise(), e2.play();
  }
  pause() {
    const { resolved: t19 } = this;
    if (!t19) return;
    const { animation: e2 } = t19;
    e2.pause();
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = true, "idle" === this.state) return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t19 } = this;
    if (!t19) return;
    const { animation: e2, keyframes: n2, duration: r2, type: i2, ease: o2, times: s2 } = t19;
    if ("idle" === e2.playState || "finished" === e2.playState) return;
    if (this.time) {
      const { motionValue: t20, onUpdate: e3, onComplete: a3, element: u2, ...l2 } = this.options, c2 = new Um({ ...l2, keyframes: n2, duration: r2, type: i2, ease: o2, times: s2, isGenerator: true }), h2 = ih(this.time);
      t20.setWithVelocity(c2.sample(h2 - 10).value, c2.sample(h2).value, 10);
    }
    const { onStop: a2 } = this.options;
    a2 && a2(), this.cancel();
  }
  complete() {
    const { resolved: t19 } = this;
    t19 && t19.animation.finish();
  }
  cancel() {
    const { resolved: t19 } = this;
    t19 && t19.animation.cancel();
  }
  static supports(t19) {
    const { motionValue: e2, name: n2, repeatDelay: r2, repeatType: i2, damping: o2, type: s2 } = t19;
    if (!(e2 && e2.owner && e2.owner.current instanceof HTMLElement)) return false;
    const { onUpdate: a2, transformTemplate: u2 } = e2.owner.getProps();
    return $m() && n2 && Wm.has(n2) && !a2 && !u2 && !r2 && "mirror" !== i2 && 0 !== o2 && "inertia" !== s2;
  }
}
const qm = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 }, Gm = { type: "keyframes", duration: 0.8 }, Km = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 }, Zm = (t19, { keyframes: e2 }) => e2.length > 2 ? Gm : qh.has(t19) ? t19.startsWith("scale") ? { type: "spring", stiffness: 550, damping: 0 === e2[1] ? 2 * Math.sqrt(550) : 30, restSpeed: 10 } : qm : Km;
const Jm = (t19, e2, n2, r2 = {}, i2, o2) => (s2) => {
  const a2 = Qf(r2, t19) || {}, u2 = a2.delay || r2.delay || 0;
  let { elapsed: l2 = 0 } = r2;
  l2 -= ih(u2);
  let c2 = { keyframes: Array.isArray(n2) ? n2 : [null, n2], ease: "easeOut", velocity: e2.getVelocity(), ...a2, delay: -l2, onUpdate: (t20) => {
    e2.set(t20), a2.onUpdate && a2.onUpdate(t20);
  }, onComplete: () => {
    s2(), a2.onComplete && a2.onComplete();
  }, name: t19, motionValue: e2, element: o2 ? void 0 : i2 };
  (function({ when: t20, delay: e3, delayChildren: n3, staggerChildren: r3, staggerDirection: i3, repeat: o3, repeatType: s3, repeatDelay: a3, from: u3, elapsed: l3, ...c3 }) {
    return !!Object.keys(c3).length;
  })(a2) || (c2 = { ...c2, ...Zm(t19, c2) }), c2.duration && (c2.duration = ih(c2.duration)), c2.repeatDelay && (c2.repeatDelay = ih(c2.repeatDelay)), void 0 !== c2.from && (c2.keyframes[0] = c2.from);
  let h2 = false;
  if ((false === c2.type || 0 === c2.duration && !c2.repeatDelay) && (c2.duration = 0, 0 === c2.delay && (h2 = true)), h2 && !o2 && void 0 !== e2.get()) {
    const t20 = $p(c2.keyframes, a2);
    if (void 0 !== t20) return lh.update(() => {
      c2.onUpdate(t20), c2.onComplete();
    }), new Jf([]);
  }
  return !o2 && Xm.supports(c2) ? new Xm(c2) : new Um(c2);
};
function Qm({ protectedKeys: t19, needsAnimating: e2 }, n2) {
  const r2 = t19.hasOwnProperty(n2) && true !== e2[n2];
  return e2[n2] = false, r2;
}
function tv(t19, e2, { delay: n2 = 0, transitionOverride: r2, type: i2 } = {}) {
  var o2;
  let { transition: s2 = t19.getDefaultTransition(), transitionEnd: a2, ...u2 } = e2;
  r2 && (s2 = r2);
  const l2 = [], c2 = i2 && t19.animationState && t19.animationState.getState()[i2];
  for (const e3 in u2) {
    const r3 = t19.getValue(e3, null !== (o2 = t19.latestValues[e3]) && void 0 !== o2 ? o2 : null), i3 = u2[e3];
    if (void 0 === i3 || c2 && Qm(c2, e3)) continue;
    const a3 = { delay: n2, ...Qf(s2 || {}, e3) };
    let h2 = false;
    if (window.MotionHandoffAnimation) {
      const n3 = Vd(t19);
      if (n3) {
        const t20 = window.MotionHandoffAnimation(n3, e3, lh);
        null !== t20 && (a3.startTime = t20, h2 = true);
      }
    }
    Nd(t19, e3), r3.start(Jm(e3, r3, i3, t19.shouldReduceMotion && Pd.has(e3) ? { type: false } : a3, t19, h2));
    const f2 = r3.animation;
    f2 && l2.push(f2);
  }
  return a2 && Promise.all(l2).then(() => {
    lh.update(() => {
      a2 && function(t20, e3) {
        const n3 = Gf(t20, e3);
        let { transitionEnd: r3 = {}, transition: i3 = {}, ...o3 } = n3 || {};
        o3 = { ...o3, ...r3 };
        for (const e4 in o3) jd(t20, e4, Lf(o3[e4]));
      }(t19, a2);
    });
  }), l2;
}
function ev(t19, e2, n2 = {}) {
  var r2;
  const i2 = Gf(t19, e2, "exit" === n2.type ? null === (r2 = t19.presenceContext) || void 0 === r2 ? void 0 : r2.custom : void 0);
  let { transition: o2 = t19.getDefaultTransition() || {} } = i2 || {};
  n2.transitionOverride && (o2 = n2.transitionOverride);
  const s2 = i2 ? () => Promise.all(tv(t19, i2, n2)) : () => Promise.resolve(), a2 = t19.variantChildren && t19.variantChildren.size ? (r3 = 0) => {
    const { delayChildren: i3 = 0, staggerChildren: s3, staggerDirection: a3 } = o2;
    return function(t20, e3, n3 = 0, r4 = 0, i4 = 1, o3) {
      const s4 = [], a4 = (t20.variantChildren.size - 1) * r4, u3 = 1 === i4 ? (t21 = 0) => t21 * r4 : (t21 = 0) => a4 - t21 * r4;
      return Array.from(t20.variantChildren).sort(nv).forEach((t21, r5) => {
        t21.notify("AnimationStart", e3), s4.push(ev(t21, e3, { ...o3, delay: n3 + u3(r5) }).then(() => t21.notify("AnimationComplete", e3)));
      }), Promise.all(s4);
    }(t19, e2, i3 + r3, s3, a3, n2);
  } : () => Promise.resolve(), { when: u2 } = o2;
  if (u2) {
    const [t20, e3] = "beforeChildren" === u2 ? [s2, a2] : [a2, s2];
    return t20().then(() => e3());
  }
  return Promise.all([s2(), a2(n2.delay)]);
}
function nv(t19, e2) {
  return t19.sortNodePosition(e2);
}
const rv = Ph.length;
function iv(t19) {
  if (!t19) return;
  if (!t19.isControllingVariants) {
    const e3 = t19.parent && iv(t19.parent) || {};
    return void 0 !== t19.props.initial && (e3.initial = t19.props.initial), e3;
  }
  const e2 = {};
  for (let n2 = 0; n2 < rv; n2++) {
    const r2 = Ph[n2], i2 = t19.props[r2];
    (Th(i2) || false === i2) && (e2[r2] = i2);
  }
  return e2;
}
const ov = [...Ch].reverse(), sv = Ch.length;
function av(t19) {
  return (e2) => Promise.all(e2.map(({ animation: e3, options: n2 }) => function(t20, e4, n3 = {}) {
    let r2;
    if (t20.notify("AnimationStart", e4), Array.isArray(e4)) {
      const i2 = e4.map((e5) => ev(t20, e5, n3));
      r2 = Promise.all(i2);
    } else if ("string" == typeof e4) r2 = ev(t20, e4, n3);
    else {
      const i2 = "function" == typeof e4 ? Gf(t20, e4, n3.custom) : e4;
      r2 = Promise.all(tv(t20, i2, n3));
    }
    return r2.then(() => {
      t20.notify("AnimationComplete", e4);
    });
  }(t19, e3, n2)));
}
function uv(t19) {
  let e2 = av(t19), n2 = hv(), r2 = true;
  const i2 = (e3) => (n3, r3) => {
    var i3;
    const o3 = Gf(t19, r3, "exit" === e3 ? null === (i3 = t19.presenceContext) || void 0 === i3 ? void 0 : i3.custom : void 0);
    if (o3) {
      const { transition: t20, transitionEnd: e4, ...r4 } = o3;
      n3 = { ...n3, ...r4, ...e4 };
    }
    return n3;
  };
  function o2(o3) {
    const { props: s2 } = t19, a2 = iv(t19.parent) || {}, u2 = [], l2 = /* @__PURE__ */ new Set();
    let c2 = {}, h2 = 1 / 0;
    for (let e3 = 0; e3 < sv; e3++) {
      const f3 = ov[e3], d2 = n2[f3], p2 = void 0 !== s2[f3] ? s2[f3] : a2[f3], m2 = Th(p2), v2 = f3 === o3 ? d2.isActive : null;
      false === v2 && (h2 = e3);
      let g2 = p2 === a2[f3] && p2 !== s2[f3] && m2;
      if (g2 && r2 && t19.manuallyAnimateOnMount && (g2 = false), d2.protectedKeys = { ...c2 }, !d2.isActive && null === v2 || !p2 && !d2.prevProp || xh(p2) || "boolean" == typeof p2) continue;
      const y2 = lv(d2.prevProp, p2);
      let _2 = y2 || f3 === o3 && d2.isActive && !g2 && m2 || e3 > h2 && m2, b2 = false;
      const w2 = Array.isArray(p2) ? p2 : [p2];
      let x2 = w2.reduce(i2(f3), {});
      false === v2 && (x2 = {});
      const { prevResolvedValues: T2 = {} } = d2, C2 = { ...T2, ...x2 }, P2 = (e4) => {
        _2 = true, l2.has(e4) && (b2 = true, l2.delete(e4)), d2.needsAnimating[e4] = true;
        const n3 = t19.getValue(e4);
        n3 && (n3.liveStyle = false);
      };
      for (const t20 in C2) {
        const e4 = x2[t20], n3 = T2[t20];
        if (c2.hasOwnProperty(t20)) continue;
        let r3 = false;
        r3 = Df(e4) && Df(n3) ? !qf(e4, n3) : e4 !== n3, r3 ? null != e4 ? P2(t20) : l2.add(t20) : void 0 !== e4 && l2.has(t20) ? P2(t20) : d2.protectedKeys[t20] = true;
      }
      d2.prevProp = p2, d2.prevResolvedValues = x2, d2.isActive && (c2 = { ...c2, ...x2 }), r2 && t19.blockInitialAnimation && (_2 = false);
      _2 && (!(g2 && y2) || b2) && u2.push(...w2.map((t20) => ({ animation: t20, options: { type: f3 } })));
    }
    if (l2.size) {
      const e3 = {};
      l2.forEach((n3) => {
        const r3 = t19.getBaseTarget(n3), i3 = t19.getValue(n3);
        i3 && (i3.liveStyle = true), e3[n3] = null != r3 ? r3 : null;
      }), u2.push({ animation: e3 });
    }
    let f2 = Boolean(u2.length);
    return !r2 || false !== s2.initial && s2.initial !== s2.animate || t19.manuallyAnimateOnMount || (f2 = false), r2 = false, f2 ? e2(u2) : Promise.resolve();
  }
  return { animateChanges: o2, setActive: function(e3, r3) {
    var i3;
    if (n2[e3].isActive === r3) return Promise.resolve();
    null === (i3 = t19.variantChildren) || void 0 === i3 || i3.forEach((t20) => {
      var n3;
      return null === (n3 = t20.animationState) || void 0 === n3 ? void 0 : n3.setActive(e3, r3);
    }), n2[e3].isActive = r3;
    const s2 = o2(e3);
    for (const t20 in n2) n2[t20].protectedKeys = {};
    return s2;
  }, setAnimateFunction: function(n3) {
    e2 = n3(t19);
  }, getState: () => n2, reset: () => {
    n2 = hv(), r2 = true;
  } };
}
function lv(t19, e2) {
  return "string" == typeof e2 ? e2 !== t19 : !!Array.isArray(e2) && !qf(e2, t19);
}
function cv(t19 = false) {
  return { isActive: t19, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function hv() {
  return { animate: cv(true), whileInView: cv(), whileHover: cv(), whileTap: cv(), whileDrag: cv(), whileFocus: cv(), exit: cv() };
}
class fv {
  constructor(t19) {
    this.isMounted = false, this.node = t19;
  }
  update() {
  }
}
let dv = 0;
const pv = { animation: { Feature: class extends fv {
  constructor(t19) {
    super(t19), t19.animationState || (t19.animationState = uv(t19));
  }
  updateAnimationControlsSubscription() {
    const { animate: t19 } = this.node.getProps();
    xh(t19) && (this.unmountControls = t19.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t19 } = this.node.getProps(), { animate: e2 } = this.node.prevProps || {};
    t19 !== e2 && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t19;
    this.node.animationState.reset(), null === (t19 = this.unmountControls) || void 0 === t19 || t19.call(this);
  }
} }, exit: { Feature: class extends fv {
  constructor() {
    super(...arguments), this.id = dv++;
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t19, onExitComplete: e2 } = this.node.presenceContext, { isPresent: n2 } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t19 === n2) return;
    const r2 = this.node.animationState.setActive("exit", !t19);
    e2 && !t19 && r2.then(() => e2(this.id));
  }
  mount() {
    const { register: t19 } = this.node.presenceContext || {};
    t19 && (this.unmount = t19(this.id));
  }
  unmount() {
  }
} } };
function mv(t19, e2, n2, r2 = { passive: true }) {
  return t19.addEventListener(e2, n2, r2), () => t19.removeEventListener(e2, n2);
}
function vv(t19) {
  return { point: { x: t19.pageX, y: t19.pageY } };
}
function gv(t19, e2, n2, r2) {
  return mv(t19, e2, /* @__PURE__ */ ((t20) => (e3) => yd(e3) && t20(e3, vv(e3)))(n2), r2);
}
const yv = (t19, e2) => Math.abs(t19 - e2);
class _v {
  constructor(t19, e2, { transformPagePoint: n2, contextWindow: r2, dragSnapToOrigin: i2 = false } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
      const t20 = xv(this.lastMoveEventInfo, this.history), e3 = null !== this.startEvent, n3 = function(t21, e4) {
        const n4 = yv(t21.x, e4.x), r4 = yv(t21.y, e4.y);
        return Math.sqrt(n4 ** 2 + r4 ** 2);
      }(t20.offset, { x: 0, y: 0 }) >= 3;
      if (!e3 && !n3) return;
      const { point: r3 } = t20, { timestamp: i3 } = hh;
      this.history.push({ ...r3, timestamp: i3 });
      const { onStart: o3, onMove: s3 } = this.handlers;
      e3 || (o3 && o3(this.lastMoveEvent, t20), this.startEvent = this.lastMoveEvent), s3 && s3(this.lastMoveEvent, t20);
    }, this.handlePointerMove = (t20, e3) => {
      this.lastMoveEvent = t20, this.lastMoveEventInfo = bv(e3, this.transformPagePoint), lh.update(this.updatePoint, true);
    }, this.handlePointerUp = (t20, e3) => {
      this.end();
      const { onEnd: n3, onSessionEnd: r3, resumeAnimation: i3 } = this.handlers;
      if (this.dragSnapToOrigin && i3 && i3(), !this.lastMoveEvent || !this.lastMoveEventInfo) return;
      const o3 = xv("pointercancel" === t20.type ? this.lastMoveEventInfo : bv(e3, this.transformPagePoint), this.history);
      this.startEvent && n3 && n3(t20, o3), r3 && r3(t20, o3);
    }, !yd(t19)) return;
    this.dragSnapToOrigin = i2, this.handlers = e2, this.transformPagePoint = n2, this.contextWindow = r2 || window;
    const o2 = bv(vv(t19), this.transformPagePoint), { point: s2 } = o2, { timestamp: a2 } = hh;
    this.history = [{ ...s2, timestamp: a2 }];
    const { onSessionStart: u2 } = e2;
    u2 && u2(t19, xv(o2, this.history)), this.removeListeners = em(gv(this.contextWindow, "pointermove", this.handlePointerMove), gv(this.contextWindow, "pointerup", this.handlePointerUp), gv(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t19) {
    this.handlers = t19;
  }
  end() {
    this.removeListeners && this.removeListeners(), ch(this.updatePoint);
  }
}
function bv(t19, e2) {
  return e2 ? { point: e2(t19.point) } : t19;
}
function wv(t19, e2) {
  return { x: t19.x - e2.x, y: t19.y - e2.y };
}
function xv({ point: t19 }, e2) {
  return { point: t19, delta: wv(t19, Cv(e2)), offset: wv(t19, Tv(e2)), velocity: Pv(e2, 0.1) };
}
function Tv(t19) {
  return t19[0];
}
function Cv(t19) {
  return t19[t19.length - 1];
}
function Pv(t19, e2) {
  if (t19.length < 2) return { x: 0, y: 0 };
  let n2 = t19.length - 1, r2 = null;
  const i2 = Cv(t19);
  for (; n2 >= 0 && (r2 = t19[n2], !(i2.timestamp - r2.timestamp > ih(e2))); ) n2--;
  if (!r2) return { x: 0, y: 0 };
  const o2 = oh(i2.timestamp - r2.timestamp);
  if (0 === o2) return { x: 0, y: 0 };
  const s2 = { x: (i2.x - r2.x) / o2, y: (i2.y - r2.y) / o2 };
  return s2.x === 1 / 0 && (s2.x = 0), s2.y === 1 / 0 && (s2.y = 0), s2;
}
function Sv(t19) {
  return t19.max - t19.min;
}
function Ev(t19, e2, n2, r2 = 0.5) {
  t19.origin = r2, t19.originPoint = Xp(e2.min, e2.max, t19.origin), t19.scale = Sv(n2) / Sv(e2), t19.translate = Xp(n2.min, n2.max, t19.origin) - t19.originPoint, (t19.scale >= 0.9999 && t19.scale <= 1.0001 || isNaN(t19.scale)) && (t19.scale = 1), (t19.translate >= -0.01 && t19.translate <= 0.01 || isNaN(t19.translate)) && (t19.translate = 0);
}
function Ov(t19, e2, n2, r2) {
  Ev(t19.x, e2.x, n2.x, r2 ? r2.originX : void 0), Ev(t19.y, e2.y, n2.y, r2 ? r2.originY : void 0);
}
function kv(t19, e2, n2) {
  t19.min = n2.min + e2.min, t19.max = t19.min + Sv(e2);
}
function Mv(t19, e2, n2) {
  t19.min = e2.min - n2.min, t19.max = t19.min + Sv(e2);
}
function Av(t19, e2, n2) {
  Mv(t19.x, e2.x, n2.x), Mv(t19.y, e2.y, n2.y);
}
function Rv(t19, e2, n2) {
  return { min: void 0 !== e2 ? t19.min + e2 : void 0, max: void 0 !== n2 ? t19.max + n2 - (t19.max - t19.min) : void 0 };
}
function Dv(t19, e2) {
  let n2 = e2.min - t19.min, r2 = e2.max - t19.max;
  return e2.max - e2.min < t19.max - t19.min && ([n2, r2] = [r2, n2]), { min: n2, max: r2 };
}
const Lv = 0.35;
function jv(t19, e2, n2) {
  return { min: Nv(t19, e2), max: Nv(t19, n2) };
}
function Nv(t19, e2) {
  return "number" == typeof t19 ? t19 : t19[e2] || 0;
}
const Vv = () => ({ x: { min: 0, max: 0 }, y: { min: 0, max: 0 } });
function Bv(t19) {
  return [t19("x"), t19("y")];
}
function Iv({ top: t19, left: e2, right: n2, bottom: r2 }) {
  return { x: { min: e2, max: n2 }, y: { min: t19, max: r2 } };
}
function Fv(t19) {
  return void 0 === t19 || 1 === t19;
}
function zv({ scale: t19, scaleX: e2, scaleY: n2 }) {
  return !Fv(t19) || !Fv(e2) || !Fv(n2);
}
function Uv(t19) {
  return zv(t19) || Wv(t19) || t19.z || t19.rotate || t19.rotateX || t19.rotateY || t19.skewX || t19.skewY;
}
function Wv(t19) {
  return Hv(t19.x) || Hv(t19.y);
}
function Hv(t19) {
  return t19 && "0%" !== t19;
}
function $v(t19, e2, n2) {
  return n2 + e2 * (t19 - n2);
}
function Yv(t19, e2, n2, r2, i2) {
  return void 0 !== i2 && (t19 = $v(t19, i2, r2)), $v(t19, n2, r2) + e2;
}
function Xv(t19, e2 = 0, n2 = 1, r2, i2) {
  t19.min = Yv(t19.min, e2, n2, r2, i2), t19.max = Yv(t19.max, e2, n2, r2, i2);
}
function qv(t19, { x: e2, y: n2 }) {
  Xv(t19.x, e2.translate, e2.scale, e2.originPoint), Xv(t19.y, n2.translate, n2.scale, n2.originPoint);
}
const Gv = 0.999999999999, Kv = 1.0000000000001;
function Zv(t19, e2) {
  t19.min = t19.min + e2, t19.max = t19.max + e2;
}
function Jv(t19, e2, n2, r2, i2 = 0.5) {
  Xv(t19, e2, n2, Xp(t19.min, t19.max, i2), r2);
}
function Qv(t19, e2) {
  Jv(t19.x, e2.x, e2.scaleX, e2.scale, e2.originX), Jv(t19.y, e2.y, e2.scaleY, e2.scale, e2.originY);
}
function tg(t19, e2) {
  return Iv(function(t20, e3) {
    if (!e3) return t20;
    const n2 = e3({ x: t20.left, y: t20.top }), r2 = e3({ x: t20.right, y: t20.bottom });
    return { top: n2.y, left: n2.x, bottom: r2.y, right: r2.x };
  }(t19.getBoundingClientRect(), e2));
}
const eg = ({ current: t19 }) => t19 ? t19.ownerDocument.defaultView : null, ng = /* @__PURE__ */ new WeakMap();
class rg {
  constructor(t19) {
    this.openDragLock = null, this.isDragging = false, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = false, this.hasMutatedConstraints = false, this.elastic = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }, this.visualElement = t19;
  }
  start(t19, { snapToCursor: e2 = false } = {}) {
    const { presenceContext: n2 } = this.visualElement;
    if (n2 && false === n2.isPresent) return;
    const { dragSnapToOrigin: r2 } = this.getProps();
    this.panSession = new _v(t19, { onSessionStart: (t20) => {
      const { dragSnapToOrigin: n3 } = this.getProps();
      n3 ? this.pauseAnimation() : this.stopAnimation(), e2 && this.snapToCursor(vv(t20).point);
    }, onStart: (t20, e3) => {
      const { drag: n3, dragPropagation: r3, onDragStart: i2 } = this.getProps();
      if (n3 && !r3 && (this.openDragLock && this.openDragLock(), this.openDragLock = "x" === (o2 = n3) || "y" === o2 ? dd[o2] ? null : (dd[o2] = true, () => {
        dd[o2] = false;
      }) : dd.x || dd.y ? null : (dd.x = dd.y = true, () => {
        dd.x = dd.y = false;
      }), !this.openDragLock)) return;
      var o2;
      this.isDragging = true, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = true, this.visualElement.projection.target = void 0), Bv((t21) => {
        let e4 = this.getAxisMotionValue(t21).get() || 0;
        if (of.test(e4)) {
          const { projection: n4 } = this.visualElement;
          if (n4 && n4.layout) {
            const r4 = n4.layout.layoutBox[t21];
            if (r4) {
              e4 = Sv(r4) * (parseFloat(e4) / 100);
            }
          }
        }
        this.originPoint[t21] = e4;
      }), i2 && lh.postRender(() => i2(t20, e3)), Nd(this.visualElement, "transform");
      const { animationState: s2 } = this.visualElement;
      s2 && s2.setActive("whileDrag", true);
    }, onMove: (t20, e3) => {
      const { dragPropagation: n3, dragDirectionLock: r3, onDirectionLock: i2, onDrag: o2 } = this.getProps();
      if (!n3 && !this.openDragLock) return;
      const { offset: s2 } = e3;
      if (r3 && null === this.currentDirection) return this.currentDirection = function(t21, e4 = 10) {
        let n4 = null;
        Math.abs(t21.y) > e4 ? n4 = "y" : Math.abs(t21.x) > e4 && (n4 = "x");
        return n4;
      }(s2), void (null !== this.currentDirection && i2 && i2(this.currentDirection));
      this.updateAxis("x", e3.point, s2), this.updateAxis("y", e3.point, s2), this.visualElement.render(), o2 && o2(t20, e3);
    }, onSessionEnd: (t20, e3) => this.stop(t20, e3), resumeAnimation: () => Bv((t20) => {
      var e3;
      return "paused" === this.getAnimationState(t20) && (null === (e3 = this.getAxisMotionValue(t20).animation) || void 0 === e3 ? void 0 : e3.play());
    }) }, { transformPagePoint: this.visualElement.getTransformPagePoint(), dragSnapToOrigin: r2, contextWindow: eg(this.visualElement) });
  }
  stop(t19, e2) {
    const n2 = this.isDragging;
    if (this.cancel(), !n2) return;
    const { velocity: r2 } = e2;
    this.startAnimation(r2);
    const { onDragEnd: i2 } = this.getProps();
    i2 && lh.postRender(() => i2(t19, e2));
  }
  cancel() {
    this.isDragging = false;
    const { projection: t19, animationState: e2 } = this.visualElement;
    t19 && (t19.isAnimationBlocked = false), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: n2 } = this.getProps();
    !n2 && this.openDragLock && (this.openDragLock(), this.openDragLock = null), e2 && e2.setActive("whileDrag", false);
  }
  updateAxis(t19, e2, n2) {
    const { drag: r2 } = this.getProps();
    if (!n2 || !ig(t19, r2, this.currentDirection)) return;
    const i2 = this.getAxisMotionValue(t19);
    let o2 = this.originPoint[t19] + n2[t19];
    this.constraints && this.constraints[t19] && (o2 = function(t20, { min: e3, max: n3 }, r3) {
      return void 0 !== e3 && t20 < e3 ? t20 = r3 ? Xp(e3, t20, r3.min) : Math.max(t20, e3) : void 0 !== n3 && t20 > n3 && (t20 = r3 ? Xp(n3, t20, r3.max) : Math.min(t20, n3)), t20;
    }(o2, this.constraints[t19], this.elastic[t19])), i2.set(o2);
  }
  resolveConstraints() {
    var t19;
    const { dragConstraints: e2, dragElastic: n2 } = this.getProps(), r2 = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : null === (t19 = this.visualElement.projection) || void 0 === t19 ? void 0 : t19.layout, i2 = this.constraints;
    e2 && Ah(e2) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!e2 || !r2) && function(t20, { top: e3, left: n3, bottom: r3, right: i3 }) {
      return { x: Rv(t20.x, n3, i3), y: Rv(t20.y, e3, r3) };
    }(r2.layoutBox, e2), this.elastic = function(t20 = Lv) {
      return false === t20 ? t20 = 0 : true === t20 && (t20 = Lv), { x: jv(t20, "left", "right"), y: jv(t20, "top", "bottom") };
    }(n2), i2 !== this.constraints && r2 && this.constraints && !this.hasMutatedConstraints && Bv((t20) => {
      false !== this.constraints && this.getAxisMotionValue(t20) && (this.constraints[t20] = function(t21, e3) {
        const n3 = {};
        return void 0 !== e3.min && (n3.min = e3.min - t21.min), void 0 !== e3.max && (n3.max = e3.max - t21.min), n3;
      }(r2.layoutBox[t20], this.constraints[t20]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t19, onMeasureDragConstraints: e2 } = this.getProps();
    if (!t19 || !Ah(t19)) return false;
    const n2 = t19.current, { projection: r2 } = this.visualElement;
    if (!r2 || !r2.layout) return false;
    const i2 = function(t20, e3, n3) {
      const r3 = tg(t20, n3), { scroll: i3 } = e3;
      return i3 && (Zv(r3.x, i3.offset.x), Zv(r3.y, i3.offset.y)), r3;
    }(n2, r2.root, this.visualElement.getTransformPagePoint());
    let o2 = function(t20, e3) {
      return { x: Dv(t20.x, e3.x), y: Dv(t20.y, e3.y) };
    }(r2.layout.layoutBox, i2);
    if (e2) {
      const t20 = e2(function({ x: t21, y: e3 }) {
        return { top: e3.min, right: t21.max, bottom: e3.max, left: t21.min };
      }(o2));
      this.hasMutatedConstraints = !!t20, t20 && (o2 = Iv(t20));
    }
    return o2;
  }
  startAnimation(t19) {
    const { drag: e2, dragMomentum: n2, dragElastic: r2, dragTransition: i2, dragSnapToOrigin: o2, onDragTransitionEnd: s2 } = this.getProps(), a2 = this.constraints || {}, u2 = Bv((s3) => {
      if (!ig(s3, e2, this.currentDirection)) return;
      let u3 = a2 && a2[s3] || {};
      o2 && (u3 = { min: 0, max: 0 });
      const l2 = r2 ? 200 : 1e6, c2 = r2 ? 40 : 1e7, h2 = { type: "inertia", velocity: n2 ? t19[s3] : 0, bounceStiffness: l2, bounceDamping: c2, timeConstant: 750, restDelta: 1, restSpeed: 10, ...i2, ...u3 };
      return this.startAxisValueAnimation(s3, h2);
    });
    return Promise.all(u2).then(s2);
  }
  startAxisValueAnimation(t19, e2) {
    const n2 = this.getAxisMotionValue(t19);
    return Nd(this.visualElement, t19), n2.start(Jm(t19, n2, 0, e2, this.visualElement, false));
  }
  stopAnimation() {
    Bv((t19) => this.getAxisMotionValue(t19).stop());
  }
  pauseAnimation() {
    Bv((t19) => {
      var e2;
      return null === (e2 = this.getAxisMotionValue(t19).animation) || void 0 === e2 ? void 0 : e2.pause();
    });
  }
  getAnimationState(t19) {
    var e2;
    return null === (e2 = this.getAxisMotionValue(t19).animation) || void 0 === e2 ? void 0 : e2.state;
  }
  getAxisMotionValue(t19) {
    const e2 = `_drag${t19.toUpperCase()}`, n2 = this.visualElement.getProps(), r2 = n2[e2];
    return r2 || this.visualElement.getValue(t19, (n2.initial ? n2.initial[t19] : void 0) || 0);
  }
  snapToCursor(t19) {
    Bv((e2) => {
      const { drag: n2 } = this.getProps();
      if (!ig(e2, n2, this.currentDirection)) return;
      const { projection: r2 } = this.visualElement, i2 = this.getAxisMotionValue(e2);
      if (r2 && r2.layout) {
        const { min: n3, max: o2 } = r2.layout.layoutBox[e2];
        i2.set(t19[e2] - Xp(n3, o2, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t19, dragConstraints: e2 } = this.getProps(), { projection: n2 } = this.visualElement;
    if (!Ah(e2) || !n2 || !this.constraints) return;
    this.stopAnimation();
    const r2 = { x: 0, y: 0 };
    Bv((t20) => {
      const e3 = this.getAxisMotionValue(t20);
      if (e3 && false !== this.constraints) {
        const n3 = e3.get();
        r2[t20] = function(t21, e4) {
          let n4 = 0.5;
          const r3 = Sv(t21), i3 = Sv(e4);
          return i3 > r3 ? n4 = rh(e4.min, e4.max - r3, t21.min) : r3 > i3 && (n4 = rh(t21.min, t21.max - i3, e4.min)), Jh(0, 1, n4);
        }({ min: n3, max: n3 }, this.constraints[t20]);
      }
    });
    const { transformTemplate: i2 } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i2 ? i2({}, "") : "none", n2.root && n2.root.updateScroll(), n2.updateLayout(), this.resolveConstraints(), Bv((e3) => {
      if (!ig(e3, t19, null)) return;
      const n3 = this.getAxisMotionValue(e3), { min: i3, max: o2 } = this.constraints[e3];
      n3.set(Xp(i3, o2, r2[e3]));
    });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    ng.set(this.visualElement, this);
    const t19 = gv(this.visualElement.current, "pointerdown", (t20) => {
      const { drag: e3, dragListener: n3 = true } = this.getProps();
      e3 && n3 && this.start(t20);
    }), e2 = () => {
      const { dragConstraints: t20 } = this.getProps();
      Ah(t20) && t20.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: n2 } = this.visualElement, r2 = n2.addEventListener("measure", e2);
    n2 && !n2.layout && (n2.root && n2.root.updateScroll(), n2.updateLayout()), lh.read(e2);
    const i2 = mv(window, "resize", () => this.scalePositionWithinConstraints()), o2 = n2.addEventListener("didUpdate", ({ delta: t20, hasLayoutChanged: e3 }) => {
      this.isDragging && e3 && (Bv((e4) => {
        const n3 = this.getAxisMotionValue(e4);
        n3 && (this.originPoint[e4] += t20[e4].translate, n3.set(n3.get() + t20[e4].translate));
      }), this.visualElement.render());
    });
    return () => {
      i2(), t19(), r2(), o2 && o2();
    };
  }
  getProps() {
    const t19 = this.visualElement.getProps(), { drag: e2 = false, dragDirectionLock: n2 = false, dragPropagation: r2 = false, dragConstraints: i2 = false, dragElastic: o2 = Lv, dragMomentum: s2 = true } = t19;
    return { ...t19, drag: e2, dragDirectionLock: n2, dragPropagation: r2, dragConstraints: i2, dragElastic: o2, dragMomentum: s2 };
  }
}
function ig(t19, e2, n2) {
  return !(true !== e2 && e2 !== t19 || null !== n2 && n2 !== t19);
}
const og = (t19) => (e2, n2) => {
  t19 && lh.postRender(() => t19(e2, n2));
};
const sg = { hasAnimatedSinceResize: true, hasEverUpdated: false };
function ag(t19, e2) {
  return e2.max === e2.min ? 0 : t19 / (e2.max - e2.min) * 100;
}
const ug = { correct: (t19, e2) => {
  if (!e2.target) return t19;
  if ("string" == typeof t19) {
    if (!sf.test(t19)) return t19;
    t19 = parseFloat(t19);
  }
  return `${ag(t19, e2.target.x)}% ${ag(t19, e2.target.y)}%`;
} }, lg = { correct: (t19, { treeScale: e2, projectionDelta: n2 }) => {
  const r2 = t19, i2 = pp.parse(t19);
  if (i2.length > 5) return r2;
  const o2 = pp.createTransformer(t19), s2 = "number" != typeof i2[0] ? 1 : 0, a2 = n2.x.scale * e2.x, u2 = n2.y.scale * e2.y;
  i2[0 + s2] /= a2, i2[1 + s2] /= u2;
  const l2 = Xp(a2, u2, 0.5);
  return "number" == typeof i2[2 + s2] && (i2[2 + s2] /= l2), "number" == typeof i2[3 + s2] && (i2[3 + s2] /= l2), o2(i2);
} };
class cg extends x {
  componentDidMount() {
    const { visualElement: t19, layoutGroup: e2, switchLayoutGroup: n2, layoutId: r2 } = this.props, { projection: i2 } = t19;
    !function(t20) {
      for (const e3 in t20) Yh[e3] = t20[e3], Uh(e3) && (Yh[e3].isCSSVariable = true);
    }(fg), i2 && (e2.group && e2.group.add(i2), n2 && n2.register && r2 && n2.register(i2), i2.root.didUpdate(), i2.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i2.setOptions({ ...i2.options, onExitComplete: () => this.safeToRemove() })), sg.hasEverUpdated = true;
  }
  getSnapshotBeforeUpdate(t19) {
    const { layoutDependency: e2, visualElement: n2, drag: r2, isPresent: i2 } = this.props, o2 = n2.projection;
    return o2 ? (o2.isPresent = i2, r2 || t19.layoutDependency !== e2 || void 0 === e2 ? o2.willUpdate() : this.safeToRemove(), t19.isPresent !== i2 && (i2 ? o2.promote() : o2.relegate() || lh.postRender(() => {
      const t20 = o2.getStack();
      t20 && t20.members.length || this.safeToRemove();
    })), null) : null;
  }
  componentDidUpdate() {
    const { projection: t19 } = this.props.visualElement;
    t19 && (t19.root.didUpdate(), jh.postRender(() => {
      !t19.currentAnimation && t19.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t19, layoutGroup: e2, switchLayoutGroup: n2 } = this.props, { projection: r2 } = t19;
    r2 && (r2.scheduleCheckAfterUnmount(), e2 && e2.group && e2.group.remove(r2), n2 && n2.deregister && n2.deregister(r2));
  }
  safeToRemove() {
    const { safeToRemove: t19 } = this.props;
    t19 && t19();
  }
  render() {
    return null;
  }
}
function hg(t19) {
  const [e2, n2] = qc(), r2 = pt(Fc);
  return $(cg, { ...t19, layoutGroup: r2, switchLayoutGroup: pt(Nh), isPresent: e2, safeToRemove: n2 });
}
const fg = { borderRadius: { ...ug, applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"] }, borderTopLeftRadius: ug, borderTopRightRadius: ug, borderBottomLeftRadius: ug, borderBottomRightRadius: ug, boxShadow: lg };
const dg = (t19, e2) => t19.depth - e2.depth;
class pg {
  constructor() {
    this.children = [], this.isDirty = false;
  }
  add(t19) {
    kd(this.children, t19), this.isDirty = true;
  }
  remove(t19) {
    Md(this.children, t19), this.isDirty = true;
  }
  forEach(t19) {
    this.isDirty && this.children.sort(dg), this.isDirty = false, this.children.forEach(t19);
  }
}
const mg = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], vg = mg.length, gg = (t19) => "string" == typeof t19 ? parseFloat(t19) : t19, yg = (t19) => "number" == typeof t19 || sf.test(t19);
function _g(t19, e2) {
  return void 0 !== t19[e2] ? t19[e2] : t19.borderRadius;
}
const bg = xg(0, 0.5, Xd), wg = xg(0.5, 0.95, th);
function xg(t19, e2, n2) {
  return (r2) => r2 < t19 ? 0 : r2 > e2 ? 1 : n2(rh(t19, e2, r2));
}
function Tg(t19, e2) {
  t19.min = e2.min, t19.max = e2.max;
}
function Cg(t19, e2) {
  Tg(t19.x, e2.x), Tg(t19.y, e2.y);
}
function Pg(t19, e2) {
  t19.translate = e2.translate, t19.scale = e2.scale, t19.originPoint = e2.originPoint, t19.origin = e2.origin;
}
function Sg(t19, e2, n2, r2, i2) {
  return t19 = $v(t19 -= e2, 1 / n2, r2), void 0 !== i2 && (t19 = $v(t19, 1 / i2, r2)), t19;
}
function Eg(t19, e2, [n2, r2, i2], o2, s2) {
  !function(t20, e3 = 0, n3 = 1, r3 = 0.5, i3, o3 = t20, s3 = t20) {
    of.test(e3) && (e3 = parseFloat(e3), e3 = Xp(s3.min, s3.max, e3 / 100) - s3.min);
    if ("number" != typeof e3) return;
    let a2 = Xp(o3.min, o3.max, r3);
    t20 === o3 && (a2 -= e3), t20.min = Sg(t20.min, e3, n3, a2, i3), t20.max = Sg(t20.max, e3, n3, a2, i3);
  }(t19, e2[n2], e2[r2], e2[i2], e2.scale, o2, s2);
}
const Og = ["x", "scaleX", "originX"], kg = ["y", "scaleY", "originY"];
function Mg(t19, e2, n2, r2) {
  Eg(t19.x, e2, Og, n2 ? n2.x : void 0, r2 ? r2.x : void 0), Eg(t19.y, e2, kg, n2 ? n2.y : void 0, r2 ? r2.y : void 0);
}
function Ag(t19) {
  return 0 === t19.translate && 1 === t19.scale;
}
function Rg(t19) {
  return Ag(t19.x) && Ag(t19.y);
}
function Dg(t19, e2) {
  return t19.min === e2.min && t19.max === e2.max;
}
function Lg(t19, e2) {
  return Math.round(t19.min) === Math.round(e2.min) && Math.round(t19.max) === Math.round(e2.max);
}
function jg(t19, e2) {
  return Lg(t19.x, e2.x) && Lg(t19.y, e2.y);
}
function Ng(t19) {
  return Sv(t19.x) / Sv(t19.y);
}
function Vg(t19, e2) {
  return t19.translate === e2.translate && t19.scale === e2.scale && t19.originPoint === e2.originPoint;
}
class Bg {
  constructor() {
    this.members = [];
  }
  add(t19) {
    kd(this.members, t19), t19.scheduleRender();
  }
  remove(t19) {
    if (Md(this.members, t19), t19 === this.prevLead && (this.prevLead = void 0), t19 === this.lead) {
      const t20 = this.members[this.members.length - 1];
      t20 && this.promote(t20);
    }
  }
  relegate(t19) {
    const e2 = this.members.findIndex((e3) => t19 === e3);
    if (0 === e2) return false;
    let n2;
    for (let t20 = e2; t20 >= 0; t20--) {
      const e3 = this.members[t20];
      if (false !== e3.isPresent) {
        n2 = e3;
        break;
      }
    }
    return !!n2 && (this.promote(n2), true);
  }
  promote(t19, e2) {
    const n2 = this.lead;
    if (t19 !== n2 && (this.prevLead = n2, this.lead = t19, t19.show(), n2)) {
      n2.instance && n2.scheduleRender(), t19.scheduleRender(), t19.resumeFrom = n2, e2 && (t19.resumeFrom.preserveOpacity = true), n2.snapshot && (t19.snapshot = n2.snapshot, t19.snapshot.latestValues = n2.animationValues || n2.latestValues), t19.root && t19.root.isUpdating && (t19.isLayoutDirty = true);
      const { crossfade: r2 } = t19.options;
      false === r2 && n2.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t19) => {
      const { options: e2, resumingFrom: n2 } = t19;
      e2.onExitComplete && e2.onExitComplete(), n2 && n2.options.onExitComplete && n2.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t19) => {
      t19.instance && t19.scheduleRender(false);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
const Ig = { type: "projectionFrame", totalNodes: 0, resolvedTargetDeltas: 0, recalculatedProjection: 0 }, Fg = "undefined" != typeof window && void 0 !== window.MotionDebug, zg = ["", "X", "Y", "Z"], Ug = { visibility: "hidden" };
let Wg = 0;
function Hg(t19, e2, n2, r2) {
  const { latestValues: i2 } = e2;
  i2[t19] && (n2[t19] = i2[t19], e2.setStaticValue(t19, 0), r2 && (r2[t19] = 0));
}
function $g(t19) {
  if (t19.hasCheckedOptimisedAppear = true, t19.root === t19) return;
  const { visualElement: e2 } = t19.options;
  if (!e2) return;
  const n2 = Vd(e2);
  if (window.MotionHasOptimisedAnimation(n2, "transform")) {
    const { layout: e3, layoutId: r3 } = t19.options;
    window.MotionCancelOptimisedAnimation(n2, "transform", lh, !(e3 || r3));
  }
  const { parent: r2 } = t19;
  r2 && !r2.hasCheckedOptimisedAppear && $g(r2);
}
function Yg({ attachResizeListener: t19, defaultParent: e2, measureScroll: n2, checkIsScrollRoot: r2, resetTransform: i2 }) {
  return class {
    constructor(t20 = {}, n3 = null == e2 ? void 0 : e2()) {
      this.id = Wg++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = false, this.isAnimationBlocked = false, this.isLayoutDirty = false, this.isProjectionDirty = false, this.isSharedProjectionDirty = false, this.isTransformDirty = false, this.updateManuallyBlocked = false, this.updateBlockedByResize = false, this.isUpdating = false, this.isSVG = false, this.needsReset = false, this.shouldResetTransform = false, this.hasCheckedOptimisedAppear = false, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = false, this.updateScheduled = false, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = false, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = false, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = false, Fg && (Ig.totalNodes = Ig.resolvedTargetDeltas = Ig.recalculatedProjection = 0), this.nodes.forEach(Gg), this.nodes.forEach(ny), this.nodes.forEach(ry), this.nodes.forEach(Kg), Fg && window.MotionDebug.record(Ig);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = false, this.isVisible = true, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = t20, this.root = n3 ? n3.root || n3 : this, this.path = n3 ? [...n3.path, n3] : [], this.parent = n3, this.depth = n3 ? n3.depth + 1 : 0;
      for (let t21 = 0; t21 < this.path.length; t21++) this.path[t21].shouldResetTransform = true;
      this.root === this && (this.nodes = new pg());
    }
    addEventListener(t20, e3) {
      return this.eventHandlers.has(t20) || this.eventHandlers.set(t20, new Ad()), this.eventHandlers.get(t20).add(e3);
    }
    notifyListeners(t20, ...e3) {
      const n3 = this.eventHandlers.get(t20);
      n3 && n3.notify(...e3);
    }
    hasListeners(t20) {
      return this.eventHandlers.has(t20);
    }
    mount(e3, n3 = this.root.hasTreeAnimated) {
      if (this.instance) return;
      var r3;
      this.isSVG = (r3 = e3) instanceof SVGElement && "svg" !== r3.tagName, this.instance = e3;
      const { layoutId: i3, layout: o2, visualElement: s2 } = this.options;
      if (s2 && !s2.current && s2.mount(e3), this.root.nodes.add(this), this.parent && this.parent.children.add(this), n3 && (o2 || i3) && (this.isLayoutDirty = true), t19) {
        let n4;
        const r4 = () => this.root.updateBlockedByResize = false;
        t19(e3, () => {
          this.root.updateBlockedByResize = true, n4 && n4(), n4 = function(t20, e4) {
            const n5 = Od.now(), r5 = ({ timestamp: i4 }) => {
              const o3 = i4 - n5;
              o3 >= e4 && (ch(r5), t20(o3 - e4));
            };
            return lh.read(r5, true), () => ch(r5);
          }(r4, 250), sg.hasAnimatedSinceResize && (sg.hasAnimatedSinceResize = false, this.nodes.forEach(ey));
        });
      }
      i3 && this.root.registerSharedNode(i3, this), false !== this.options.animate && s2 && (i3 || o2) && this.addEventListener("didUpdate", ({ delta: t20, hasLayoutChanged: e4, hasRelativeLayoutChanged: n4, layout: r4 }) => {
        if (this.isTreeAnimationBlocked()) return this.target = void 0, void (this.relativeTarget = void 0);
        const i4 = this.options.transition || s2.getDefaultTransition() || ly, { onLayoutAnimationStart: o3, onLayoutAnimationComplete: a2 } = s2.getProps(), u2 = !this.targetLayout || !jg(this.targetLayout, r4), l2 = !e4 && n4;
        if (this.options.layoutRoot || this.resumeFrom || l2 || e4 && (u2 || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t20, l2);
          const e5 = { ...Qf(i4, "layout"), onPlay: o3, onComplete: a2 };
          (s2.shouldReduceMotion || this.options.layoutRoot) && (e5.delay = 0, e5.type = false), this.startAnimation(e5);
        } else e4 || ey(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = r4;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const t20 = this.getStack();
      t20 && t20.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, ch(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = true;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = false;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
    }
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = true, this.nodes && this.nodes.forEach(iy), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: t20 } = this.options;
      return t20 && t20.getProps().transformTemplate;
    }
    willUpdate(t20 = true) {
      if (this.root.hasTreeAnimated = true, this.root.isUpdateBlocked()) return void (this.options.onExitComplete && this.options.onExitComplete());
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && $g(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
      this.isLayoutDirty = true;
      for (let t21 = 0; t21 < this.path.length; t21++) {
        const e4 = this.path[t21];
        e4.shouldResetTransform = true, e4.updateScroll("snapshot"), e4.options.layoutRoot && e4.willUpdate(false);
      }
      const { layoutId: e3, layout: n3 } = this.options;
      if (void 0 === e3 && !n3) return;
      const r3 = this.getTransformTemplate();
      this.prevTransformTemplateValue = r3 ? r3(this.latestValues, "") : void 0, this.updateSnapshot(), t20 && this.notifyListeners("willUpdate");
    }
    update() {
      this.updateScheduled = false;
      if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(Jg);
      this.isUpdating || this.nodes.forEach(Qg), this.isUpdating = false, this.nodes.forEach(ty), this.nodes.forEach(Xg), this.nodes.forEach(qg), this.clearAllSnapshots();
      const t20 = Od.now();
      hh.delta = Jh(0, 1e3 / 60, t20 - hh.timestamp), hh.timestamp = t20, hh.isProcessing = true, fh.update.process(hh), fh.preRender.process(hh), fh.render.process(hh), hh.isProcessing = false;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = true, jh.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Zg), this.sharedNodes.forEach(oy);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = true, lh.preRender(this.updateProjection, false, true));
    }
    scheduleCheckAfterUnmount() {
      lh.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      !this.snapshot && this.instance && (this.snapshot = this.measure(), !this.snapshot || Sv(this.snapshot.measuredBox.x) || Sv(this.snapshot.measuredBox.y) || (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance) return;
      if (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty)) return;
      if (this.resumeFrom && !this.resumeFrom.instance) for (let t21 = 0; t21 < this.path.length; t21++) {
        this.path[t21].updateScroll();
      }
      const t20 = this.layout;
      this.layout = this.measure(false), this.layoutCorrected = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }, this.isLayoutDirty = false, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: e3 } = this.options;
      e3 && e3.notify("LayoutMeasure", this.layout.layoutBox, t20 ? t20.layoutBox : void 0);
    }
    updateScroll(t20 = "measure") {
      let e3 = Boolean(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t20 && (e3 = false), e3) {
        const e4 = r2(this.instance);
        this.scroll = { animationId: this.root.animationId, phase: t20, isRoot: e4, offset: n2(this.instance), wasRoot: this.scroll ? this.scroll.isRoot : e4 };
      }
    }
    resetTransform() {
      if (!i2) return;
      const t20 = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, e3 = this.projectionDelta && !Rg(this.projectionDelta), n3 = this.getTransformTemplate(), r3 = n3 ? n3(this.latestValues, "") : void 0, o2 = r3 !== this.prevTransformTemplateValue;
      t20 && (e3 || Uv(this.latestValues) || o2) && (i2(this.instance, r3), this.shouldResetTransform = false, this.scheduleRender());
    }
    measure(t20 = true) {
      const e3 = this.measurePageBox();
      let n3 = this.removeElementScroll(e3);
      var r3;
      return t20 && (n3 = this.removeTransform(n3)), fy((r3 = n3).x), fy(r3.y), { animationId: this.root.animationId, measuredBox: e3, layoutBox: n3, latestValues: {}, source: this.id };
    }
    measurePageBox() {
      var t20;
      const { visualElement: e3 } = this.options;
      if (!e3) return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
      const n3 = e3.measureViewportBox();
      if (!((null === (t20 = this.scroll) || void 0 === t20 ? void 0 : t20.wasRoot) || this.path.some(py))) {
        const { scroll: t21 } = this.root;
        t21 && (Zv(n3.x, t21.offset.x), Zv(n3.y, t21.offset.y));
      }
      return n3;
    }
    removeElementScroll(t20) {
      var e3;
      const n3 = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
      if (Cg(n3, t20), null === (e3 = this.scroll) || void 0 === e3 ? void 0 : e3.wasRoot) return n3;
      for (let e4 = 0; e4 < this.path.length; e4++) {
        const r3 = this.path[e4], { scroll: i3, options: o2 } = r3;
        r3 !== this.root && i3 && o2.layoutScroll && (i3.wasRoot && Cg(n3, t20), Zv(n3.x, i3.offset.x), Zv(n3.y, i3.offset.y));
      }
      return n3;
    }
    applyTransform(t20, e3 = false) {
      const n3 = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
      Cg(n3, t20);
      for (let t21 = 0; t21 < this.path.length; t21++) {
        const r3 = this.path[t21];
        !e3 && r3.options.layoutScroll && r3.scroll && r3 !== r3.root && Qv(n3, { x: -r3.scroll.offset.x, y: -r3.scroll.offset.y }), Uv(r3.latestValues) && Qv(n3, r3.latestValues);
      }
      return Uv(this.latestValues) && Qv(n3, this.latestValues), n3;
    }
    removeTransform(t20) {
      const e3 = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
      Cg(e3, t20);
      for (let t21 = 0; t21 < this.path.length; t21++) {
        const n3 = this.path[t21];
        if (!n3.instance) continue;
        if (!Uv(n3.latestValues)) continue;
        zv(n3.latestValues) && n3.updateSnapshot();
        const r3 = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
        Cg(r3, n3.measurePageBox()), Mg(e3, n3.latestValues, n3.snapshot ? n3.snapshot.layoutBox : void 0, r3);
      }
      return Uv(this.latestValues) && Mg(e3, this.latestValues), e3;
    }
    setTargetDelta(t20) {
      this.targetDelta = t20, this.root.scheduleUpdateProjection(), this.isProjectionDirty = true;
    }
    setOptions(t20) {
      this.options = { ...this.options, ...t20, crossfade: void 0 === t20.crossfade || t20.crossfade };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = false;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== hh.timestamp && this.relativeParent.resolveTargetDelta(true);
    }
    resolveTargetDelta(t20 = false) {
      var e3;
      const n3 = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = n3.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = n3.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = n3.isSharedProjectionDirty);
      const r3 = Boolean(this.resumingFrom) || this !== n3;
      if (!(t20 || r3 && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e3 = this.parent) || void 0 === e3 ? void 0 : e3.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
      const { layout: i3, layoutId: o2 } = this.options;
      if (this.layout && (i3 || o2)) {
        if (this.resolvedRelativeTargetAt = hh.timestamp, !this.targetDelta && !this.relativeTarget) {
          const t21 = this.getClosestProjectingParent();
          t21 && t21.layout && 1 !== this.animationProgress ? (this.relativeParent = t21, this.forceRelativeParentToResolveTarget(), this.relativeTarget = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }, this.relativeTargetOrigin = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }, Av(this.relativeTargetOrigin, this.layout.layoutBox, t21.layout.layoutBox), Cg(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (this.relativeTarget || this.targetDelta) {
          var s2, a2, u2;
          if (this.target || (this.target = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }, this.targetWithTransforms = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), s2 = this.target, a2 = this.relativeTarget, u2 = this.relativeParent.target, kv(s2.x, a2.x, u2.x), kv(s2.y, a2.y, u2.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : Cg(this.target, this.layout.layoutBox), qv(this.target, this.targetDelta)) : Cg(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = false;
            const t21 = this.getClosestProjectingParent();
            t21 && Boolean(t21.resumingFrom) === Boolean(this.resumingFrom) && !t21.options.layoutScroll && t21.target && 1 !== this.animationProgress ? (this.relativeParent = t21, this.forceRelativeParentToResolveTarget(), this.relativeTarget = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }, this.relativeTargetOrigin = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }, Av(this.relativeTargetOrigin, this.target, t21.target), Cg(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Fg && Ig.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (this.parent && !zv(this.parent.latestValues) && !Wv(this.parent.latestValues)) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var t20;
      const e3 = this.getLead(), n3 = Boolean(this.resumingFrom) || this !== e3;
      let r3 = true;
      if ((this.isProjectionDirty || (null === (t20 = this.parent) || void 0 === t20 ? void 0 : t20.isProjectionDirty)) && (r3 = false), n3 && (this.isSharedProjectionDirty || this.isTransformDirty) && (r3 = false), this.resolvedRelativeTargetAt === hh.timestamp && (r3 = false), r3) return;
      const { layout: i3, layoutId: o2 } = this.options;
      if (this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !i3 && !o2) return;
      Cg(this.layoutCorrected, this.layout.layoutBox);
      const s2 = this.treeScale.x, a2 = this.treeScale.y;
      !function(t21, e4, n4, r4 = false) {
        const i4 = n4.length;
        if (!i4) return;
        let o3, s3;
        e4.x = e4.y = 1;
        for (let a3 = 0; a3 < i4; a3++) {
          o3 = n4[a3], s3 = o3.projectionDelta;
          const { visualElement: i5 } = o3.options;
          i5 && i5.props.style && "contents" === i5.props.style.display || (r4 && o3.options.layoutScroll && o3.scroll && o3 !== o3.root && Qv(t21, { x: -o3.scroll.offset.x, y: -o3.scroll.offset.y }), s3 && (e4.x *= s3.x.scale, e4.y *= s3.y.scale, qv(t21, s3)), r4 && Uv(o3.latestValues) && Qv(t21, o3.latestValues));
        }
        e4.x < Kv && e4.x > Gv && (e4.x = 1), e4.y < Kv && e4.y > Gv && (e4.y = 1);
      }(this.layoutCorrected, this.treeScale, this.path, n3), !e3.layout || e3.target || 1 === this.treeScale.x && 1 === this.treeScale.y || (e3.target = e3.layout.layoutBox, e3.targetWithTransforms = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } });
      const { target: u2 } = e3;
      u2 ? (this.projectionDelta && this.prevProjectionDelta ? (Pg(this.prevProjectionDelta.x, this.projectionDelta.x), Pg(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), Ov(this.projectionDelta, this.layoutCorrected, u2, this.latestValues), this.treeScale.x === s2 && this.treeScale.y === a2 && Vg(this.projectionDelta.x, this.prevProjectionDelta.x) && Vg(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = true, this.scheduleRender(), this.notifyListeners("projectionUpdate", u2)), Fg && Ig.recalculatedProjection++) : this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
    }
    hide() {
      this.isVisible = false;
    }
    show() {
      this.isVisible = true;
    }
    scheduleRender(t20 = true) {
      var e3;
      if (null === (e3 = this.options.visualElement) || void 0 === e3 || e3.scheduleRender(), t20) {
        const t21 = this.getStack();
        t21 && t21.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = { x: { translate: 0, scale: 1, origin: 0, originPoint: 0 }, y: { translate: 0, scale: 1, origin: 0, originPoint: 0 } }, this.projectionDelta = { x: { translate: 0, scale: 1, origin: 0, originPoint: 0 }, y: { translate: 0, scale: 1, origin: 0, originPoint: 0 } }, this.projectionDeltaWithTransform = { x: { translate: 0, scale: 1, origin: 0, originPoint: 0 }, y: { translate: 0, scale: 1, origin: 0, originPoint: 0 } };
    }
    setAnimationOrigin(t20, e3 = false) {
      const n3 = this.snapshot, r3 = n3 ? n3.latestValues : {}, i3 = { ...this.latestValues }, o2 = { x: { translate: 0, scale: 1, origin: 0, originPoint: 0 }, y: { translate: 0, scale: 1, origin: 0, originPoint: 0 } };
      this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e3;
      const s2 = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }, a2 = (n3 ? n3.source : void 0) !== (this.layout ? this.layout.source : void 0), u2 = this.getStack(), l2 = !u2 || u2.members.length <= 1, c2 = Boolean(a2 && !l2 && true === this.options.crossfade && !this.path.some(uy));
      let h2;
      this.animationProgress = 0, this.mixTargetDelta = (e4) => {
        const n4 = e4 / 1e3;
        sy(o2.x, t20.x, n4), sy(o2.y, t20.y, n4), this.setTargetDelta(o2), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Av(s2, this.layout.layoutBox, this.relativeParent.layout.layoutBox), function(t21, e5, n5, r4) {
          ay(t21.x, e5.x, n5.x, r4), ay(t21.y, e5.y, n5.y, r4);
        }(this.relativeTarget, this.relativeTargetOrigin, s2, n4), h2 && function(t21, e5) {
          return Dg(t21.x, e5.x) && Dg(t21.y, e5.y);
        }(this.relativeTarget, h2) && (this.isProjectionDirty = false), h2 || (h2 = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }), Cg(h2, this.relativeTarget)), a2 && (this.animationValues = i3, function(t21, e5, n5, r4, i4, o3) {
          i4 ? (t21.opacity = Xp(0, void 0 !== n5.opacity ? n5.opacity : 1, bg(r4)), t21.opacityExit = Xp(void 0 !== e5.opacity ? e5.opacity : 1, 0, wg(r4))) : o3 && (t21.opacity = Xp(void 0 !== e5.opacity ? e5.opacity : 1, void 0 !== n5.opacity ? n5.opacity : 1, r4));
          for (let i5 = 0; i5 < vg; i5++) {
            const o4 = `border${mg[i5]}Radius`;
            let s3 = _g(e5, o4), a3 = _g(n5, o4);
            void 0 === s3 && void 0 === a3 || (s3 || (s3 = 0), a3 || (a3 = 0), 0 === s3 || 0 === a3 || yg(s3) === yg(a3) ? (t21[o4] = Math.max(Xp(gg(s3), gg(a3), r4), 0), (of.test(a3) || of.test(s3)) && (t21[o4] += "%")) : t21[o4] = a3);
          }
          (e5.rotate || n5.rotate) && (t21.rotate = Xp(e5.rotate || 0, n5.rotate || 0, r4));
        }(i3, r3, this.latestValues, n4, c2, l2)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n4;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(t20) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (ch(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = lh.update(() => {
        sg.hasAnimatedSinceResize = true, this.currentAnimation = function(t21, e3, n3) {
          const r3 = Kh(t21) ? t21 : Ld(t21);
          return r3.start(Jm("", r3, e3, n3)), r3.animation;
        }(0, 1e3, { ...t20, onUpdate: (e3) => {
          this.mixTargetDelta(e3), t20.onUpdate && t20.onUpdate(e3);
        }, onComplete: () => {
          t20.onComplete && t20.onComplete(), this.completeAnimation();
        } }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const t20 = this.getStack();
      t20 && t20.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const t20 = this.getLead();
      let { targetWithTransforms: e3, target: n3, layout: r3, latestValues: i3 } = t20;
      if (e3 && n3 && r3) {
        if (this !== t20 && this.layout && r3 && dy(this.options.animationType, this.layout.layoutBox, r3.layoutBox)) {
          n3 = this.target || { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
          const e4 = Sv(this.layout.layoutBox.x);
          n3.x.min = t20.target.x.min, n3.x.max = n3.x.min + e4;
          const r4 = Sv(this.layout.layoutBox.y);
          n3.y.min = t20.target.y.min, n3.y.max = n3.y.min + r4;
        }
        Cg(e3, n3), Qv(e3, i3), Ov(this.projectionDeltaWithTransform, this.layoutCorrected, e3, i3);
      }
    }
    registerSharedNode(t20, e3) {
      this.sharedNodes.has(t20) || this.sharedNodes.set(t20, new Bg());
      this.sharedNodes.get(t20).add(e3);
      const n3 = e3.options.initialPromotionConfig;
      e3.promote({ transition: n3 ? n3.transition : void 0, preserveFollowOpacity: n3 && n3.shouldPreserveFollowOpacity ? n3.shouldPreserveFollowOpacity(e3) : void 0 });
    }
    isLead() {
      const t20 = this.getStack();
      return !t20 || t20.lead === this;
    }
    getLead() {
      var t20;
      const { layoutId: e3 } = this.options;
      return e3 && (null === (t20 = this.getStack()) || void 0 === t20 ? void 0 : t20.lead) || this;
    }
    getPrevLead() {
      var t20;
      const { layoutId: e3 } = this.options;
      return e3 ? null === (t20 = this.getStack()) || void 0 === t20 ? void 0 : t20.prevLead : void 0;
    }
    getStack() {
      const { layoutId: t20 } = this.options;
      if (t20) return this.root.sharedNodes.get(t20);
    }
    promote({ needsReset: t20, transition: e3, preserveFollowOpacity: n3 } = {}) {
      const r3 = this.getStack();
      r3 && r3.promote(this, n3), t20 && (this.projectionDelta = void 0, this.needsReset = true), e3 && this.setOptions({ transition: e3 });
    }
    relegate() {
      const t20 = this.getStack();
      return !!t20 && t20.relegate(this);
    }
    resetSkewAndRotation() {
      const { visualElement: t20 } = this.options;
      if (!t20) return;
      let e3 = false;
      const { latestValues: n3 } = t20;
      if ((n3.z || n3.rotate || n3.rotateX || n3.rotateY || n3.rotateZ || n3.skewX || n3.skewY) && (e3 = true), !e3) return;
      const r3 = {};
      n3.z && Hg("z", t20, r3, this.animationValues);
      for (let e4 = 0; e4 < zg.length; e4++) Hg(`rotate${zg[e4]}`, t20, r3, this.animationValues), Hg(`skew${zg[e4]}`, t20, r3, this.animationValues);
      t20.render();
      for (const e4 in r3) t20.setStaticValue(e4, r3[e4]), this.animationValues && (this.animationValues[e4] = r3[e4]);
      t20.scheduleRender();
    }
    getProjectionStyles(t20) {
      var e3, n3;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return Ug;
      const r3 = { visibility: "" }, i3 = this.getTransformTemplate();
      if (this.needsReset) return this.needsReset = false, r3.opacity = "", r3.pointerEvents = jf(null == t20 ? void 0 : t20.pointerEvents) || "", r3.transform = i3 ? i3(this.latestValues, "") : "none", r3;
      const o2 = this.getLead();
      if (!this.projectionDelta || !this.layout || !o2.target) {
        const e4 = {};
        return this.options.layoutId && (e4.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e4.pointerEvents = jf(null == t20 ? void 0 : t20.pointerEvents) || ""), this.hasProjected && !Uv(this.latestValues) && (e4.transform = i3 ? i3({}, "") : "none", this.hasProjected = false), e4;
      }
      const s2 = o2.animationValues || o2.latestValues;
      this.applyTransformsToTarget(), r3.transform = function(t21, e4, n4) {
        let r4 = "";
        const i4 = t21.x.translate / e4.x, o3 = t21.y.translate / e4.y, s3 = (null == n4 ? void 0 : n4.z) || 0;
        if ((i4 || o3 || s3) && (r4 = `translate3d(${i4}px, ${o3}px, ${s3}px) `), 1 === e4.x && 1 === e4.y || (r4 += `scale(${1 / e4.x}, ${1 / e4.y}) `), n4) {
          const { transformPerspective: t22, rotate: e5, rotateX: i5, rotateY: o4, skewX: s4, skewY: a4 } = n4;
          t22 && (r4 = `perspective(${t22}px) ${r4}`), e5 && (r4 += `rotate(${e5}deg) `), i5 && (r4 += `rotateX(${i5}deg) `), o4 && (r4 += `rotateY(${o4}deg) `), s4 && (r4 += `skewX(${s4}deg) `), a4 && (r4 += `skewY(${a4}deg) `);
        }
        const a3 = t21.x.scale * e4.x, u3 = t21.y.scale * e4.y;
        return 1 === a3 && 1 === u3 || (r4 += `scale(${a3}, ${u3})`), r4 || "none";
      }(this.projectionDeltaWithTransform, this.treeScale, s2), i3 && (r3.transform = i3(s2, r3.transform));
      const { x: a2, y: u2 } = this.projectionDelta;
      r3.transformOrigin = `${100 * a2.origin}% ${100 * u2.origin}% 0`, o2.animationValues ? r3.opacity = o2 === this ? null !== (n3 = null !== (e3 = s2.opacity) && void 0 !== e3 ? e3 : this.latestValues.opacity) && void 0 !== n3 ? n3 : 1 : this.preserveOpacity ? this.latestValues.opacity : s2.opacityExit : r3.opacity = o2 === this ? void 0 !== s2.opacity ? s2.opacity : "" : void 0 !== s2.opacityExit ? s2.opacityExit : 0;
      for (const t21 in Yh) {
        if (void 0 === s2[t21]) continue;
        const { correct: e4, applyTo: n4, isCSSVariable: i4 } = Yh[t21], a3 = "none" === r3.transform ? s2[t21] : e4(s2[t21], o2);
        if (n4) {
          const t22 = n4.length;
          for (let e5 = 0; e5 < t22; e5++) r3[n4[e5]] = a3;
        } else i4 ? this.options.visualElement.renderState.vars[t21] = a3 : r3[t21] = a3;
      }
      return this.options.layoutId && (r3.pointerEvents = o2 === this ? jf(null == t20 ? void 0 : t20.pointerEvents) || "" : "none"), r3;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((t20) => {
        var e3;
        return null === (e3 = t20.currentAnimation) || void 0 === e3 ? void 0 : e3.stop();
      }), this.root.nodes.forEach(Jg), this.root.sharedNodes.clear();
    }
  };
}
function Xg(t19) {
  t19.updateLayout();
}
function qg(t19) {
  var e2;
  const n2 = (null === (e2 = t19.resumeFrom) || void 0 === e2 ? void 0 : e2.snapshot) || t19.snapshot;
  if (t19.isLead() && t19.layout && n2 && t19.hasListeners("didUpdate")) {
    const { layoutBox: e3, measuredBox: r2 } = t19.layout, { animationType: i2 } = t19.options, o2 = n2.source !== t19.layout.source;
    "size" === i2 ? Bv((t20) => {
      const r3 = o2 ? n2.measuredBox[t20] : n2.layoutBox[t20], i3 = Sv(r3);
      r3.min = e3[t20].min, r3.max = r3.min + i3;
    }) : dy(i2, n2.layoutBox, e3) && Bv((r3) => {
      const i3 = o2 ? n2.measuredBox[r3] : n2.layoutBox[r3], s3 = Sv(e3[r3]);
      i3.max = i3.min + s3, t19.relativeTarget && !t19.currentAnimation && (t19.isProjectionDirty = true, t19.relativeTarget[r3].max = t19.relativeTarget[r3].min + s3);
    });
    const s2 = { x: { translate: 0, scale: 1, origin: 0, originPoint: 0 }, y: { translate: 0, scale: 1, origin: 0, originPoint: 0 } };
    Ov(s2, e3, n2.layoutBox);
    const a2 = { x: { translate: 0, scale: 1, origin: 0, originPoint: 0 }, y: { translate: 0, scale: 1, origin: 0, originPoint: 0 } };
    o2 ? Ov(a2, t19.applyTransform(r2, true), n2.measuredBox) : Ov(a2, e3, n2.layoutBox);
    const u2 = !Rg(s2);
    let l2 = false;
    if (!t19.resumeFrom) {
      const r3 = t19.getClosestProjectingParent();
      if (r3 && !r3.resumeFrom) {
        const { snapshot: i3, layout: o3 } = r3;
        if (i3 && o3) {
          const s3 = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
          Av(s3, n2.layoutBox, i3.layoutBox);
          const a3 = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
          Av(a3, e3, o3.layoutBox), jg(s3, a3) || (l2 = true), r3.options.layoutRoot && (t19.relativeTarget = a3, t19.relativeTargetOrigin = s3, t19.relativeParent = r3);
        }
      }
    }
    t19.notifyListeners("didUpdate", { layout: e3, snapshot: n2, delta: a2, layoutDelta: s2, hasLayoutChanged: u2, hasRelativeLayoutChanged: l2 });
  } else if (t19.isLead()) {
    const { onExitComplete: e3 } = t19.options;
    e3 && e3();
  }
  t19.options.transition = void 0;
}
function Gg(t19) {
  Fg && Ig.totalNodes++, t19.parent && (t19.isProjecting() || (t19.isProjectionDirty = t19.parent.isProjectionDirty), t19.isSharedProjectionDirty || (t19.isSharedProjectionDirty = Boolean(t19.isProjectionDirty || t19.parent.isProjectionDirty || t19.parent.isSharedProjectionDirty)), t19.isTransformDirty || (t19.isTransformDirty = t19.parent.isTransformDirty));
}
function Kg(t19) {
  t19.isProjectionDirty = t19.isSharedProjectionDirty = t19.isTransformDirty = false;
}
function Zg(t19) {
  t19.clearSnapshot();
}
function Jg(t19) {
  t19.clearMeasurements();
}
function Qg(t19) {
  t19.isLayoutDirty = false;
}
function ty(t19) {
  const { visualElement: e2 } = t19.options;
  e2 && e2.getProps().onBeforeLayoutMeasure && e2.notify("BeforeLayoutMeasure"), t19.resetTransform();
}
function ey(t19) {
  t19.finishAnimation(), t19.targetDelta = t19.relativeTarget = t19.target = void 0, t19.isProjectionDirty = true;
}
function ny(t19) {
  t19.resolveTargetDelta();
}
function ry(t19) {
  t19.calcProjection();
}
function iy(t19) {
  t19.resetSkewAndRotation();
}
function oy(t19) {
  t19.removeLeadSnapshot();
}
function sy(t19, e2, n2) {
  t19.translate = Xp(e2.translate, 0, n2), t19.scale = Xp(e2.scale, 1, n2), t19.origin = e2.origin, t19.originPoint = e2.originPoint;
}
function ay(t19, e2, n2, r2) {
  t19.min = Xp(e2.min, n2.min, r2), t19.max = Xp(e2.max, n2.max, r2);
}
function uy(t19) {
  return t19.animationValues && void 0 !== t19.animationValues.opacityExit;
}
const ly = { duration: 0.45, ease: [0.4, 0, 0.1, 1] }, cy = (t19) => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t19), hy = cy("applewebkit/") && !cy("chrome/") ? Math.round : th;
function fy(t19) {
  t19.min = hy(t19.min), t19.max = hy(t19.max);
}
function dy(t19, e2, n2) {
  return "position" === t19 || "preserve-aspect" === t19 && (r2 = Ng(e2), i2 = Ng(n2), o2 = 0.2, !(Math.abs(r2 - i2) <= o2));
  var r2, i2, o2;
}
function py(t19) {
  var e2;
  return t19 !== t19.root && (null === (e2 = t19.scroll) || void 0 === e2 ? void 0 : e2.wasRoot);
}
const my = Yg({ attachResizeListener: (t19, e2) => mv(t19, "resize", e2), measureScroll: () => ({ x: document.documentElement.scrollLeft || document.body.scrollLeft, y: document.documentElement.scrollTop || document.body.scrollTop }), checkIsScrollRoot: () => true }), vy = { current: void 0 }, gy = Yg({ measureScroll: (t19) => ({ x: t19.scrollLeft, y: t19.scrollTop }), defaultParent: () => {
  if (!vy.current) {
    const t19 = new my({});
    t19.mount(window), t19.setOptions({ layoutScroll: true }), vy.current = t19;
  }
  return vy.current;
}, resetTransform: (t19, e2) => {
  t19.style.transform = void 0 !== e2 ? e2 : "none";
}, checkIsScrollRoot: (t19) => Boolean("fixed" === window.getComputedStyle(t19).position) }), yy = { pan: { Feature: class extends fv {
  constructor() {
    super(...arguments), this.removePointerDownListener = th;
  }
  onPointerDown(t19) {
    this.session = new _v(t19, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint(), contextWindow: eg(this.node) });
  }
  createPanHandlers() {
    const { onPanSessionStart: t19, onPanStart: e2, onPan: n2, onPanEnd: r2 } = this.node.getProps();
    return { onSessionStart: og(t19), onStart: og(e2), onMove: n2, onEnd: (t20, e3) => {
      delete this.session, r2 && lh.postRender(() => r2(t20, e3));
    } };
  }
  mount() {
    this.removePointerDownListener = gv(this.node.current, "pointerdown", (t19) => this.onPointerDown(t19));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
} }, drag: { Feature: class extends fv {
  constructor(t19) {
    super(t19), this.removeGroupControls = th, this.removeListeners = th, this.controls = new rg(t19);
  }
  mount() {
    const { dragControls: t19 } = this.node.getProps();
    t19 && (this.removeGroupControls = t19.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || th;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}, ProjectionNode: gy, MeasureLayout: hg } };
function _y(t19, e2, n2) {
  const { props: r2 } = t19;
  t19.animationState && r2.whileHover && t19.animationState.setActive("whileHover", "Start" === n2);
  const i2 = r2["onHover" + n2];
  i2 && lh.postRender(() => i2(e2, vv(e2)));
}
function by(t19, e2, n2) {
  const { props: r2 } = t19;
  t19.animationState && r2.whileTap && t19.animationState.setActive("whileTap", "Start" === n2);
  const i2 = r2["onTap" + ("End" === n2 ? "" : n2)];
  i2 && lh.postRender(() => i2(e2, vv(e2)));
}
const wy = /* @__PURE__ */ new WeakMap(), xy = /* @__PURE__ */ new WeakMap(), Ty = (t19) => {
  const e2 = wy.get(t19.target);
  e2 && e2(t19);
}, Cy = (t19) => {
  t19.forEach(Ty);
};
function Py(t19, e2, n2) {
  const r2 = function({ root: t20, ...e3 }) {
    const n3 = t20 || document;
    xy.has(n3) || xy.set(n3, {});
    const r3 = xy.get(n3), i2 = JSON.stringify(e3);
    return r3[i2] || (r3[i2] = new IntersectionObserver(Cy, { root: t20, ...e3 })), r3[i2];
  }(e2);
  return wy.set(t19, n2), r2.observe(t19), () => {
    wy.delete(t19), r2.unobserve(t19);
  };
}
const Sy = { some: 0, all: 1 };
const Ey = { inView: { Feature: class extends fv {
  constructor() {
    super(...arguments), this.hasEnteredView = false, this.isInView = false;
  }
  startObserver() {
    this.unmount();
    const { viewport: t19 = {} } = this.node.getProps(), { root: e2, margin: n2, amount: r2 = "some", once: i2 } = t19, o2 = { root: e2 ? e2.current : void 0, rootMargin: n2, threshold: "number" == typeof r2 ? r2 : Sy[r2] };
    return Py(this.node.current, o2, (t20) => {
      const { isIntersecting: e3 } = t20;
      if (this.isInView === e3) return;
      if (this.isInView = e3, i2 && !e3 && this.hasEnteredView) return;
      e3 && (this.hasEnteredView = true), this.node.animationState && this.node.animationState.setActive("whileInView", e3);
      const { onViewportEnter: n3, onViewportLeave: r3 } = this.node.getProps(), o3 = e3 ? n3 : r3;
      o3 && o3(t20);
    });
  }
  mount() {
    this.startObserver();
  }
  update() {
    if ("undefined" == typeof IntersectionObserver) return;
    const { props: t19, prevProps: e2 } = this.node;
    ["amount", "margin", "root"].some(function({ viewport: t20 = {} }, { viewport: e3 = {} } = {}) {
      return (n2) => t20[n2] !== e3[n2];
    }(t19, e2)) && this.startObserver();
  }
  unmount() {
  }
} }, tap: { Feature: class extends fv {
  mount() {
    const { current: t19 } = this.node;
    t19 && (this.unmount = Cd(t19, (t20, e2) => (by(this.node, e2, "Start"), (t21, { success: e3 }) => by(this.node, t21, e3 ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
} }, focus: { Feature: class extends fv {
  constructor() {
    super(...arguments), this.isActive = false;
  }
  onFocus() {
    let t19 = false;
    try {
      t19 = this.node.current.matches(":focus-visible");
    } catch (e2) {
      t19 = true;
    }
    t19 && this.node.animationState && (this.node.animationState.setActive("whileFocus", true), this.isActive = true);
  }
  onBlur() {
    this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", false), this.isActive = false);
  }
  mount() {
    this.unmount = em(mv(this.node.current, "focus", () => this.onFocus()), mv(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
} }, hover: { Feature: class extends fv {
  mount() {
    const { current: t19 } = this.node;
    t19 && (this.unmount = function(t20, e2, n2 = {}) {
      const [r2, i2, o2] = md(t20, n2), s2 = (t21) => {
        if (!vd(t21)) return;
        const { target: n3 } = t21, r3 = e2(n3, t21);
        if ("function" != typeof r3 || !n3) return;
        const o3 = (t22) => {
          vd(t22) && (r3(t22), n3.removeEventListener("pointerleave", o3));
        };
        n3.addEventListener("pointerleave", o3, i2);
      };
      return r2.forEach((t21) => {
        t21.addEventListener("pointerenter", s2, i2);
      }), o2;
    }(t19, (t20, e2) => (_y(this.node, e2, "Start"), (t21) => _y(this.node, t21, "End"))));
  }
  unmount() {
  }
} } }, Oy = { layout: { ProjectionNode: gy, MeasureLayout: hg } }, ky = { current: null }, My = { current: false };
const Ay = [...Ip, op, pp], Ry = /* @__PURE__ */ new WeakMap();
const Dy = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class Ly {
  scrapeMotionValuesFromProps(t19, e2, n2) {
    return {};
  }
  constructor({ parent: t19, props: e2, presenceContext: n2, reducedMotionConfig: r2, blockInitialAnimation: i2, visualState: o2 }, s2 = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = false, this.isControllingVariants = false, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Lp, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const t20 = Od.now();
      this.renderScheduledAt < t20 && (this.renderScheduledAt = t20, lh.render(this.render, false, true));
    };
    const { latestValues: a2, renderState: u2, onUpdate: l2 } = o2;
    this.onUpdate = l2, this.latestValues = a2, this.baseTarget = { ...a2 }, this.initialValues = e2.initial ? { ...a2 } : {}, this.renderState = u2, this.parent = t19, this.props = e2, this.presenceContext = n2, this.depth = t19 ? t19.depth + 1 : 0, this.reducedMotionConfig = r2, this.options = s2, this.blockInitialAnimation = Boolean(i2), this.isControllingVariants = Sh(e2), this.isVariantNode = Eh(e2), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = Boolean(t19 && t19.current);
    const { willChange: c2, ...h2 } = this.scrapeMotionValuesFromProps(e2, {}, this);
    for (const t20 in h2) {
      const e3 = h2[t20];
      void 0 !== a2[t20] && Kh(e3) && e3.set(a2[t20], false);
    }
  }
  mount(t19) {
    this.current = t19, Ry.set(t19, this), this.projection && !this.projection.instance && this.projection.mount(t19), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t20, e2) => this.bindToMotionValue(e2, t20)), My.current || function() {
      if (My.current = true, Zc) if (window.matchMedia) {
        const t20 = window.matchMedia("(prefers-reduced-motion)"), e2 = () => ky.current = t20.matches;
        t20.addListener(e2), e2();
      } else ky.current = false;
    }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || ky.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Ry.delete(this.current), this.projection && this.projection.unmount(), ch(this.notifyUpdate), ch(this.render), this.valueSubscriptions.forEach((t19) => t19()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t19 in this.events) this.events[t19].clear();
    for (const t19 in this.features) {
      const e2 = this.features[t19];
      e2 && (e2.unmount(), e2.isMounted = false);
    }
    this.current = null;
  }
  bindToMotionValue(t19, e2) {
    this.valueSubscriptions.has(t19) && this.valueSubscriptions.get(t19)();
    const n2 = qh.has(t19);
    n2 && this.onBindTransform && this.onBindTransform();
    const r2 = e2.on("change", (e3) => {
      this.latestValues[t19] = e3, this.props.onUpdate && lh.preRender(this.notifyUpdate), n2 && this.projection && (this.projection.isTransformDirty = true);
    }), i2 = e2.on("renderRequest", this.scheduleRender);
    let o2;
    window.MotionCheckAppearSync && (o2 = window.MotionCheckAppearSync(this, t19, e2)), this.valueSubscriptions.set(t19, () => {
      r2(), i2(), o2 && o2(), e2.owner && e2.stop();
    });
  }
  sortNodePosition(t19) {
    return this.current && this.sortInstanceNodePosition && this.type === t19.type ? this.sortInstanceNodePosition(this.current, t19.current) : 0;
  }
  updateFeatures() {
    let t19 = "animation";
    for (t19 in mh) {
      const e2 = mh[t19];
      if (!e2) continue;
      const { isEnabled: n2, Feature: r2 } = e2;
      if (!this.features[t19] && r2 && n2(this.props) && (this.features[t19] = new r2(this)), this.features[t19]) {
        const e3 = this.features[t19];
        e3.isMounted ? e3.update() : (e3.mount(), e3.isMounted = true);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
  }
  getStaticValue(t19) {
    return this.latestValues[t19];
  }
  setStaticValue(t19, e2) {
    this.latestValues[t19] = e2;
  }
  update(t19, e2) {
    (t19.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t19, this.prevPresenceContext = this.presenceContext, this.presenceContext = e2;
    for (let e3 = 0; e3 < Dy.length; e3++) {
      const n2 = Dy[e3];
      this.propEventSubscriptions[n2] && (this.propEventSubscriptions[n2](), delete this.propEventSubscriptions[n2]);
      const r2 = t19["on" + n2];
      r2 && (this.propEventSubscriptions[n2] = this.on(n2, r2));
    }
    this.prevMotionValues = function(t20, e3, n2) {
      for (const r2 in e3) {
        const i2 = e3[r2], o2 = n2[r2];
        if (Kh(i2)) t20.addValue(r2, i2);
        else if (Kh(o2)) t20.addValue(r2, Ld(i2, { owner: t20 }));
        else if (o2 !== i2) if (t20.hasValue(r2)) {
          const e4 = t20.getValue(r2);
          true === e4.liveStyle ? e4.jump(i2) : e4.hasAnimated || e4.set(i2);
        } else {
          const e4 = t20.getStaticValue(r2);
          t20.addValue(r2, Ld(void 0 !== e4 ? e4 : i2, { owner: t20 }));
        }
      }
      for (const r2 in n2) void 0 === e3[r2] && t20.removeValue(r2);
      return e3;
    }(this, this.scrapeMotionValuesFromProps(t19, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  getVariant(t19) {
    return this.props.variants ? this.props.variants[t19] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  addVariantChild(t19) {
    const e2 = this.getClosestVariantNode();
    if (e2) return e2.variantChildren && e2.variantChildren.add(t19), () => e2.variantChildren.delete(t19);
  }
  addValue(t19, e2) {
    const n2 = this.values.get(t19);
    e2 !== n2 && (n2 && this.removeValue(t19), this.bindToMotionValue(t19, e2), this.values.set(t19, e2), this.latestValues[t19] = e2.get());
  }
  removeValue(t19) {
    this.values.delete(t19);
    const e2 = this.valueSubscriptions.get(t19);
    e2 && (e2(), this.valueSubscriptions.delete(t19)), delete this.latestValues[t19], this.removeValueFromRenderState(t19, this.renderState);
  }
  hasValue(t19) {
    return this.values.has(t19);
  }
  getValue(t19, e2) {
    if (this.props.values && this.props.values[t19]) return this.props.values[t19];
    let n2 = this.values.get(t19);
    return void 0 === n2 && void 0 !== e2 && (n2 = Ld(null === e2 ? void 0 : e2, { owner: this }), this.addValue(t19, n2)), n2;
  }
  readValue(t19, e2) {
    var n2;
    let r2 = void 0 === this.latestValues[t19] && this.current ? null !== (n2 = this.getBaseTargetFromProps(this.props, t19)) && void 0 !== n2 ? n2 : this.readValueFromInstance(this.current, t19, this.options) : this.latestValues[t19];
    return null != r2 && ("string" == typeof r2 && (jp(r2) || Gd(r2)) ? r2 = parseFloat(r2) : !((t20) => Ay.find(Bp(t20)))(r2) && pp.test(e2) && (r2 = wp(t19, e2)), this.setBaseTarget(t19, Kh(r2) ? r2.get() : r2)), Kh(r2) ? r2.get() : r2;
  }
  setBaseTarget(t19, e2) {
    this.baseTarget[t19] = e2;
  }
  getBaseTarget(t19) {
    var e2;
    const { initial: n2 } = this.props;
    let r2;
    if ("string" == typeof n2 || "object" == typeof n2) {
      const i3 = Rf(this.props, n2, null === (e2 = this.presenceContext) || void 0 === e2 ? void 0 : e2.custom);
      i3 && (r2 = i3[t19]);
    }
    if (n2 && void 0 !== r2) return r2;
    const i2 = this.getBaseTargetFromProps(this.props, t19);
    return void 0 === i2 || Kh(i2) ? void 0 !== this.initialValues[t19] && void 0 === r2 ? void 0 : this.baseTarget[t19] : i2;
  }
  on(t19, e2) {
    return this.events[t19] || (this.events[t19] = new Ad()), this.events[t19].add(e2);
  }
  notify(t19, ...e2) {
    this.events[t19] && this.events[t19].notify(...e2);
  }
}
class jy extends Ly {
  constructor() {
    super(...arguments), this.KeyframeResolver = zp;
  }
  sortInstanceNodePosition(t19, e2) {
    return 2 & t19.compareDocumentPosition(e2) ? 1 : -1;
  }
  getBaseTargetFromProps(t19, e2) {
    return t19.style ? t19.style[e2] : void 0;
  }
  removeValueFromRenderState(t19, { vars: e2, style: n2 }) {
    delete e2[t19], delete n2[t19];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t19 } = this.props;
    Kh(t19) && (this.childSubscription = t19.on("change", (t20) => {
      this.current && (this.current.textContent = `${t20}`);
    }));
  }
}
class Ny extends jy {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = zf;
  }
  readValueFromInstance(t19, e2) {
    if (qh.has(e2)) {
      const t20 = bp(e2);
      return t20 && t20.default || 0;
    }
    {
      const r2 = (n2 = t19, window.getComputedStyle(n2)), i2 = (Uh(e2) ? r2.getPropertyValue(e2) : r2[e2]) || 0;
      return "string" == typeof i2 ? i2.trim() : i2;
    }
    var n2;
  }
  measureInstanceViewportBox(t19, { transformPagePoint: e2 }) {
    return tg(t19, e2);
  }
  build(t19, e2, n2) {
    vf(t19, e2, n2.transformTemplate);
  }
  scrapeMotionValuesFromProps(t19, e2, n2) {
    return Bf(t19, e2, n2);
  }
}
class Vy extends jy {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = false, this.measureInstanceViewportBox = Vv, this.updateDimensions = () => {
      this.current && !this.renderState.dimensions && Ff(this.current, this.renderState);
    };
  }
  getBaseTargetFromProps(t19, e2) {
    return t19[e2];
  }
  readValueFromInstance(t19, e2) {
    if (qh.has(e2)) {
      const t20 = bp(e2);
      return t20 && t20.default || 0;
    }
    return e2 = Uf.has(e2) ? e2 : Dh(e2), t19.getAttribute(e2);
  }
  scrapeMotionValuesFromProps(t19, e2, n2) {
    return Hf(t19, e2, n2);
  }
  onBindTransform() {
    this.current && !this.renderState.dimensions && lh.postRender(this.updateDimensions);
  }
  build(t19, e2, n2) {
    Sf(t19, e2, this.isSVGTag, n2.transformTemplate);
  }
  renderInstance(t19, e2, n2, r2) {
    Wf(t19, e2, 0, r2);
  }
  mount(t19) {
    this.isSVGTag = Of(t19.tagName), super.mount(t19);
  }
}
const By = bh(Xf({ ...pv, ...Ey, ...yy, ...Oy }, (t19, e2) => xf(t19) ? new Vy(e2) : new Ny(e2, { allowProjection: t19 !== w })));
function Iy({ children: t19, ...e2 }) {
  return ut(() => () => {
    var _a3;
    Vs() ? (_a3 = Vs()) == null ? void 0 : _a3.scrollTo(0, 0, 0) : window.scrollTo({ top: 0, left: 0, behavior: "auto" }), Mc.killAll();
  }, []), $(By.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 1 }, ...e2, children: t19 });
}
function Fy() {
  return $(Iy, { id: "home-page", children: [$(Us, {}), $(Ca, {})] });
}
function zy(t19) {
  return $("div", { onClick: t19.onClick, className: "close-menu", children: $("div", { className: "close-menu-wrapper", children: [$("div", {}), $("div", {})] }) });
}
var Uy, Wy = {};
!function() {
  if (Uy) return Wy;
  Uy = 1, Object.defineProperty(Wy, "__esModule", { value: true }), Wy.parse = function(t20, e3) {
    const n3 = new o2(), r3 = t20.length;
    if (r3 < 2) return n3;
    const i3 = (e3 == null ? void 0 : e3.decode) || u2;
    let l2 = 0;
    do {
      const e4 = t20.indexOf("=", l2);
      if (-1 === e4) break;
      const o3 = t20.indexOf(";", l2), u3 = -1 === o3 ? r3 : o3;
      if (e4 > u3) {
        l2 = t20.lastIndexOf(";", e4 - 1) + 1;
        continue;
      }
      const c2 = s2(t20, l2, e4), h2 = a2(t20, e4, c2), f2 = t20.slice(c2, h2);
      if (void 0 === n3[f2]) {
        let r4 = s2(t20, e4 + 1, u3), o4 = a2(t20, u3, r4);
        const l3 = i3(t20.slice(r4, o4));
        n3[f2] = l3;
      }
      l2 = u3 + 1;
    } while (l2 < r3);
    return n3;
  }, Wy.serialize = function(o3, s3, a3) {
    const u3 = (a3 == null ? void 0 : a3.encode) || encodeURIComponent;
    if (!t19.test(o3)) throw new TypeError(`argument name is invalid: ${o3}`);
    const l2 = u3(s3);
    if (!e2.test(l2)) throw new TypeError(`argument val is invalid: ${s3}`);
    let c2 = o3 + "=" + l2;
    if (!a3) return c2;
    if (void 0 !== a3.maxAge) {
      if (!Number.isInteger(a3.maxAge)) throw new TypeError(`option maxAge is invalid: ${a3.maxAge}`);
      c2 += "; Max-Age=" + a3.maxAge;
    }
    if (a3.domain) {
      if (!n2.test(a3.domain)) throw new TypeError(`option domain is invalid: ${a3.domain}`);
      c2 += "; Domain=" + a3.domain;
    }
    if (a3.path) {
      if (!r2.test(a3.path)) throw new TypeError(`option path is invalid: ${a3.path}`);
      c2 += "; Path=" + a3.path;
    }
    if (a3.expires) {
      if (!function(t20) {
        return "[object Date]" === i2.call(t20);
      }(a3.expires) || !Number.isFinite(a3.expires.valueOf())) throw new TypeError(`option expires is invalid: ${a3.expires}`);
      c2 += "; Expires=" + a3.expires.toUTCString();
    }
    a3.httpOnly && (c2 += "; HttpOnly");
    a3.secure && (c2 += "; Secure");
    a3.partitioned && (c2 += "; Partitioned");
    if (a3.priority) {
      switch ("string" == typeof a3.priority ? a3.priority.toLowerCase() : void 0) {
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
          throw new TypeError(`option priority is invalid: ${a3.priority}`);
      }
    }
    if (a3.sameSite) {
      switch ("string" == typeof a3.sameSite ? a3.sameSite.toLowerCase() : a3.sameSite) {
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
          throw new TypeError(`option sameSite is invalid: ${a3.sameSite}`);
      }
    }
    return c2;
  };
  const t19 = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, e2 = /^[\u0021-\u003A\u003C-\u007E]*$/, n2 = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, r2 = /^[\u0020-\u003A\u003D-\u007E]*$/, i2 = Object.prototype.toString, o2 = (() => {
    const t20 = function() {
    };
    return t20.prototype = /* @__PURE__ */ Object.create(null), t20;
  })();
  function s2(t20, e3, n3) {
    do {
      const n4 = t20.charCodeAt(e3);
      if (32 !== n4 && 9 !== n4) return e3;
    } while (++e3 < n3);
    return n3;
  }
  function a2(t20, e3, n3) {
    for (; e3 > n3; ) {
      const n4 = t20.charCodeAt(--e3);
      if (32 !== n4 && 9 !== n4) return e3 + 1;
    }
    return n3;
  }
  function u2(t20) {
    if (-1 === t20.indexOf("%")) return t20;
    try {
      return decodeURIComponent(t20);
    } catch (e3) {
      return t20;
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
var Hy = "popstate";
function $y(t19 = {}) {
  return function(t20, e2, n2, r2 = {}) {
    let { window: i2 = document.defaultView, v5Compat: o2 = false } = r2, s2 = i2.history, a2 = "POP", u2 = null, l2 = c2();
    null == l2 && (l2 = 0, s2.replaceState({ ...s2.state, idx: l2 }, ""));
    function c2() {
      return (s2.state || { idx: null }).idx;
    }
    function h2() {
      a2 = "POP";
      let t21 = c2(), e3 = null == t21 ? null : t21 - l2;
      l2 = t21, u2 && u2({ action: a2, location: m2.location, delta: e3 });
    }
    function f2(t21, e3) {
      a2 = "PUSH";
      let n3 = Gy(m2.location, t21, e3);
      l2 = c2() + 1;
      let r3 = qy(n3, l2), h3 = m2.createHref(n3);
      try {
        s2.pushState(r3, "", h3);
      } catch (t22) {
        if (t22 instanceof DOMException && "DataCloneError" === t22.name) throw t22;
        i2.location.assign(h3);
      }
      o2 && u2 && u2({ action: a2, location: m2.location, delta: 1 });
    }
    function d2(t21, e3) {
      a2 = "REPLACE";
      let n3 = Gy(m2.location, t21, e3);
      l2 = c2();
      let r3 = qy(n3, l2), i3 = m2.createHref(n3);
      s2.replaceState(r3, "", i3), o2 && u2 && u2({ action: a2, location: m2.location, delta: 0 });
    }
    function p2(t21) {
      let e3 = "null" !== i2.location.origin ? i2.location.origin : i2.location.href, n3 = "string" == typeof t21 ? t21 : Ky(t21);
      return n3 = n3.replace(/ $/, "%20"), Yy(e3, `No window.location.(origin|href) available to create URL for href: ${n3}`), new URL(n3, e3);
    }
    let m2 = { get action() {
      return a2;
    }, get location() {
      return t20(i2, s2);
    }, listen(t21) {
      if (u2) throw new Error("A history only accepts one active listener");
      return i2.addEventListener(Hy, h2), u2 = t21, () => {
        i2.removeEventListener(Hy, h2), u2 = null;
      };
    }, createHref: (t21) => e2(i2, t21), createURL: p2, encodeLocation(t21) {
      let e3 = p2(t21);
      return { pathname: e3.pathname, search: e3.search, hash: e3.hash };
    }, push: f2, replace: d2, go: (t21) => s2.go(t21) };
    return m2;
  }(function(t20, e2) {
    let { pathname: n2, search: r2, hash: i2 } = t20.location;
    return Gy("", { pathname: n2, search: r2, hash: i2 }, e2.state && e2.state.usr || null, e2.state && e2.state.key || "default");
  }, function(t20, e2) {
    return "string" == typeof e2 ? e2 : Ky(e2);
  }, 0, t19);
}
function Yy(t19, e2) {
  if (false === t19 || null == t19) throw new Error(e2);
}
function Xy(t19, e2) {
  if (!t19) {
    "undefined" != typeof console && console.warn(e2);
    try {
      throw new Error(e2);
    } catch (t20) {
    }
  }
}
function qy(t19, e2) {
  return { usr: t19.state, key: t19.key, idx: e2 };
}
function Gy(t19, e2, n2 = null, r2) {
  return { pathname: "string" == typeof t19 ? t19 : t19.pathname, search: "", hash: "", ..."string" == typeof e2 ? Zy(e2) : e2, state: n2, key: e2 && e2.key || r2 || Math.random().toString(36).substring(2, 10) };
}
function Ky({ pathname: t19 = "/", search: e2 = "", hash: n2 = "" }) {
  return e2 && "?" !== e2 && (t19 += "?" === e2.charAt(0) ? e2 : "?" + e2), n2 && "#" !== n2 && (t19 += "#" === n2.charAt(0) ? n2 : "#" + n2), t19;
}
function Zy(t19) {
  let e2 = {};
  if (t19) {
    let n2 = t19.indexOf("#");
    n2 >= 0 && (e2.hash = t19.substring(n2), t19 = t19.substring(0, n2));
    let r2 = t19.indexOf("?");
    r2 >= 0 && (e2.search = t19.substring(r2), t19 = t19.substring(0, r2)), t19 && (e2.pathname = t19);
  }
  return e2;
}
function Jy(t19, e2, n2 = "/") {
  return function(t20, e3, n3, r2) {
    let i2 = "string" == typeof e3 ? Zy(e3) : e3, o2 = f_(i2.pathname || "/", n3);
    if (null == o2) return null;
    let s2 = Qy(t20);
    !function(t21) {
      t21.sort((t22, e4) => t22.score !== e4.score ? e4.score - t22.score : function(t23, e5) {
        let n4 = t23.length === e5.length && t23.slice(0, -1).every((t24, n5) => t24 === e5[n5]);
        return n4 ? t23[t23.length - 1] - e5[e5.length - 1] : 0;
      }(t22.routesMeta.map((t23) => t23.childrenIndex), e4.routesMeta.map((t23) => t23.childrenIndex)));
    }(s2);
    let a2 = null;
    for (let t21 = 0; null == a2 && t21 < s2.length; ++t21) {
      let e4 = h_(o2);
      a2 = l_(s2[t21], e4, r2);
    }
    return a2;
  }(t19, e2, n2, false);
}
function Qy(t19, e2 = [], n2 = [], r2 = "") {
  let i2 = (t20, i3, o2) => {
    let s2 = { relativePath: void 0 === o2 ? t20.path || "" : o2, caseSensitive: true === t20.caseSensitive, childrenIndex: i3, route: t20 };
    s2.relativePath.startsWith("/") && (Yy(s2.relativePath.startsWith(r2), `Absolute route path "${s2.relativePath}" nested under path "${r2}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), s2.relativePath = s2.relativePath.slice(r2.length));
    let a2 = v_([r2, s2.relativePath]), u2 = n2.concat(s2);
    t20.children && t20.children.length > 0 && (Yy(true !== t20.index, `Index routes must not have child routes. Please remove all child routes from route path "${a2}".`), Qy(t20.children, e2, u2, a2)), (null != t20.path || t20.index) && e2.push({ path: a2, score: u_(a2, t20.index), routesMeta: u2 });
  };
  return t19.forEach((t20, e3) => {
    var _a3;
    if ("" !== t20.path && ((_a3 = t20.path) == null ? void 0 : _a3.includes("?"))) for (let n3 of t_(t20.path)) i2(t20, e3, n3);
    else i2(t20, e3);
  }), e2;
}
function t_(t19) {
  let e2 = t19.split("/");
  if (0 === e2.length) return [];
  let [n2, ...r2] = e2, i2 = n2.endsWith("?"), o2 = n2.replace(/\?$/, "");
  if (0 === r2.length) return i2 ? [o2, ""] : [o2];
  let s2 = t_(r2.join("/")), a2 = [];
  return a2.push(...s2.map((t20) => "" === t20 ? o2 : [o2, t20].join("/"))), i2 && a2.push(...s2), a2.map((e3) => t19.startsWith("/") && "" === e3 ? "/" : e3);
}
var e_ = /^:[\w-]+$/, n_ = 3, r_ = 2, i_ = 1, o_ = 10, s_ = -2, a_ = (t19) => "*" === t19;
function u_(t19, e2) {
  let n2 = t19.split("/"), r2 = n2.length;
  return n2.some(a_) && (r2 += s_), e2 && (r2 += r_), n2.filter((t20) => !a_(t20)).reduce((t20, e3) => t20 + (e_.test(e3) ? n_ : "" === e3 ? i_ : o_), r2);
}
function l_(t19, e2, n2 = false) {
  let { routesMeta: r2 } = t19, i2 = {}, o2 = "/", s2 = [];
  for (let t20 = 0; t20 < r2.length; ++t20) {
    let a2 = r2[t20], u2 = t20 === r2.length - 1, l2 = "/" === o2 ? e2 : e2.slice(o2.length) || "/", c2 = c_({ path: a2.relativePath, caseSensitive: a2.caseSensitive, end: u2 }, l2), h2 = a2.route;
    if (!c2 && u2 && n2 && !r2[r2.length - 1].route.index && (c2 = c_({ path: a2.relativePath, caseSensitive: a2.caseSensitive, end: false }, l2)), !c2) return null;
    Object.assign(i2, c2.params), s2.push({ params: i2, pathname: v_([o2, c2.pathname]), pathnameBase: g_(v_([o2, c2.pathnameBase])), route: h2 }), "/" !== c2.pathnameBase && (o2 = v_([o2, c2.pathnameBase]));
  }
  return s2;
}
function c_(t19, e2) {
  "string" == typeof t19 && (t19 = { path: t19, caseSensitive: false, end: true });
  let [n2, r2] = function(t20, e3 = false, n3 = true) {
    Xy("*" === t20 || !t20.endsWith("*") || t20.endsWith("/*"), `Route path "${t20}" will be treated as if it were "${t20.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t20.replace(/\*$/, "/*")}".`);
    let r3 = [], i3 = "^" + t20.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (t21, e4, n4) => (r3.push({ paramName: e4, isOptional: null != n4 }), n4 ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    t20.endsWith("*") ? (r3.push({ paramName: "*" }), i3 += "*" === t20 || "/*" === t20 ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n3 ? i3 += "\\/*$" : "" !== t20 && "/" !== t20 && (i3 += "(?:(?=\\/|$))");
    let o3 = new RegExp(i3, e3 ? void 0 : "i");
    return [o3, r3];
  }(t19.path, t19.caseSensitive, t19.end), i2 = e2.match(n2);
  if (!i2) return null;
  let o2 = i2[0], s2 = o2.replace(/(.)\/+$/, "$1"), a2 = i2.slice(1);
  return { params: r2.reduce((t20, { paramName: e3, isOptional: n3 }, r3) => {
    if ("*" === e3) {
      let t21 = a2[r3] || "";
      s2 = o2.slice(0, o2.length - t21.length).replace(/(.)\/+$/, "$1");
    }
    const i3 = a2[r3];
    return t20[e3] = n3 && !i3 ? void 0 : (i3 || "").replace(/%2F/g, "/"), t20;
  }, {}), pathname: o2, pathnameBase: s2, pattern: t19 };
}
function h_(t19) {
  try {
    return t19.split("/").map((t20) => decodeURIComponent(t20).replace(/\//g, "%2F")).join("/");
  } catch (e2) {
    return Xy(false, `The URL path "${t19}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e2}).`), t19;
  }
}
function f_(t19, e2) {
  if ("/" === e2) return t19;
  if (!t19.toLowerCase().startsWith(e2.toLowerCase())) return null;
  let n2 = e2.endsWith("/") ? e2.length - 1 : e2.length, r2 = t19.charAt(n2);
  return r2 && "/" !== r2 ? null : t19.slice(n2) || "/";
}
function d_(t19, e2, n2, r2) {
  return `Cannot include a '${t19}' character in a manually specified \`to.${e2}\` field [${JSON.stringify(r2)}].  Please separate it out to the \`to.${n2}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function p_(t19) {
  let e2 = function(t20) {
    return t20.filter((t21, e3) => 0 === e3 || t21.route.path && t21.route.path.length > 0);
  }(t19);
  return e2.map((t20, n2) => n2 === e2.length - 1 ? t20.pathname : t20.pathnameBase);
}
function m_(t19, e2, n2, r2 = false) {
  let i2;
  "string" == typeof t19 ? i2 = Zy(t19) : (i2 = { ...t19 }, Yy(!i2.pathname || !i2.pathname.includes("?"), d_("?", "pathname", "search", i2)), Yy(!i2.pathname || !i2.pathname.includes("#"), d_("#", "pathname", "hash", i2)), Yy(!i2.search || !i2.search.includes("#"), d_("#", "search", "hash", i2)));
  let o2, s2 = "" === t19 || "" === i2.pathname, a2 = s2 ? "/" : i2.pathname;
  if (null == a2) o2 = n2;
  else {
    let t20 = e2.length - 1;
    if (!r2 && a2.startsWith("..")) {
      let e3 = a2.split("/");
      for (; ".." === e3[0]; ) e3.shift(), t20 -= 1;
      i2.pathname = e3.join("/");
    }
    o2 = t20 >= 0 ? e2[t20] : "/";
  }
  let u2 = function(t20, e3 = "/") {
    let { pathname: n3, search: r3 = "", hash: i3 = "" } = "string" == typeof t20 ? Zy(t20) : t20, o3 = n3 ? n3.startsWith("/") ? n3 : function(t21, e4) {
      let n4 = e4.replace(/\/+$/, "").split("/");
      return t21.split("/").forEach((t22) => {
        ".." === t22 ? n4.length > 1 && n4.pop() : "." !== t22 && n4.push(t22);
      }), n4.length > 1 ? n4.join("/") : "/";
    }(n3, e3) : e3;
    return { pathname: o3, search: y_(r3), hash: __(i3) };
  }(i2, o2), l2 = a2 && "/" !== a2 && a2.endsWith("/"), c2 = (s2 || "." === a2) && n2.endsWith("/");
  return u2.pathname.endsWith("/") || !l2 && !c2 || (u2.pathname += "/"), u2;
}
var v_ = (t19) => t19.join("/").replace(/\/\/+/g, "/"), g_ = (t19) => t19.replace(/\/+$/, "").replace(/^\/*/, "/"), y_ = (t19) => t19 && "?" !== t19 ? t19.startsWith("?") ? t19 : "?" + t19 : "", __ = (t19) => t19 && "#" !== t19 ? t19.startsWith("#") ? t19 : "#" + t19 : "";
var b_ = ["POST", "PUT", "PATCH", "DELETE"];
new Set(b_);
var w_ = ["GET", ...b_];
new Set(w_);
var x_ = W(null);
x_.displayName = "DataRouter";
var T_ = W(null);
T_.displayName = "DataRouterState";
var C_ = W({ isTransitioning: false });
C_.displayName = "ViewTransition", W(/* @__PURE__ */ new Map()).displayName = "Fetchers", W(null).displayName = "Await";
var P_ = W(null);
P_.displayName = "Navigation";
var S_ = W(null);
S_.displayName = "Location";
var E_ = W({ outlet: null, matches: [], isDataRoute: false });
E_.displayName = "Route";
var O_ = W(null);
function k_() {
  return null != pt(S_);
}
function M_() {
  return Yy(k_(), "useLocation() may be used only in the context of a <Router> component."), pt(S_).location;
}
O_.displayName = "RouteError";
var A_ = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function R_(t19) {
  pt(P_).static || lt(t19);
}
function D_() {
  let { isDataRoute: t19 } = pt(E_);
  return t19 ? function() {
    let { router: t20 } = function(t21) {
      let e3 = pt(x_);
      return Yy(e3, F_(t21)), e3;
    }("useNavigate"), e2 = z_("useNavigate"), n2 = ct(false);
    R_(() => {
      n2.current = true;
    });
    let r2 = dt(async (r3, i2 = {}) => {
      Xy(n2.current, A_), n2.current && ("number" == typeof r3 ? t20.navigate(r3) : await t20.navigate(r3, { fromRouteId: e2, ...i2 }));
    }, [t20, e2]);
    return r2;
  }() : function() {
    Yy(k_(), "useNavigate() may be used only in the context of a <Router> component.");
    let t20 = pt(x_), { basename: e2, navigator: n2 } = pt(P_), { matches: r2 } = pt(E_), { pathname: i2 } = M_(), o2 = JSON.stringify(p_(r2)), s2 = ct(false);
    R_(() => {
      s2.current = true;
    });
    let a2 = dt((r3, a3 = {}) => {
      if (Xy(s2.current, A_), !s2.current) return;
      if ("number" == typeof r3) return void n2.go(r3);
      let u2 = m_(r3, JSON.parse(o2), i2, "path" === a3.relative);
      null == t20 && "/" !== e2 && (u2.pathname = "/" === u2.pathname ? e2 : v_([e2, u2.pathname])), (a3.replace ? n2.replace : n2.push)(u2, a3.state, a3);
    }, [e2, n2, o2, i2, t20]);
    return a2;
  }();
}
function L_(t19, { relative: e2 } = {}) {
  let { matches: n2 } = pt(E_), { pathname: r2 } = M_(), i2 = JSON.stringify(p_(n2));
  return ft(() => m_(t19, JSON.parse(i2), r2, "path" === e2), [t19, i2, r2, e2]);
}
function j_(t19, e2, n2, r2) {
  var _a3;
  Yy(k_(), "useRoutes() may be used only in the context of a <Router> component.");
  let { navigator: i2, static: o2 } = pt(P_), { matches: s2 } = pt(E_), a2 = s2[s2.length - 1], u2 = a2 ? a2.params : {}, l2 = a2 ? a2.pathname : "/", c2 = a2 ? a2.pathnameBase : "/", h2 = a2 && a2.route;
  {
    let t20 = h2 && h2.path || "";
    W_(l2, !h2 || t20.endsWith("*") || t20.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l2}" (under <Route path="${t20}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${t20}"> to <Route path="${"/" === t20 ? "*" : `${t20}/*`}">.`);
  }
  let f2, d2 = M_();
  if (e2) {
    let t20 = "string" == typeof e2 ? Zy(e2) : e2;
    Yy("/" === c2 || ((_a3 = t20.pathname) == null ? void 0 : _a3.startsWith(c2)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c2}" but pathname "${t20.pathname}" was given in the \`location\` prop.`), f2 = t20;
  } else f2 = d2;
  let p2 = f2.pathname || "/", m2 = p2;
  if ("/" !== c2) {
    let t20 = c2.replace(/^\//, "").split("/");
    m2 = "/" + p2.replace(/^\//, "").split("/").slice(t20.length).join("/");
  }
  let v2 = !o2 && n2 && n2.matches && n2.matches.length > 0 ? n2.matches : Jy(t19, { pathname: m2 });
  Xy(h2 || null != v2, `No routes matched location "${f2.pathname}${f2.search}${f2.hash}" `), Xy(null == v2 || void 0 !== v2[v2.length - 1].route.element || void 0 !== v2[v2.length - 1].route.Component || void 0 !== v2[v2.length - 1].route.lazy, `Matched leaf route at location "${f2.pathname}${f2.search}${f2.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
  let g2 = function(t20, e3 = [], n3 = null) {
    if (null == t20) {
      if (!n3) return null;
      if (n3.errors) t20 = n3.matches;
      else {
        if (0 !== e3.length || n3.initialized || !(n3.matches.length > 0)) return null;
        t20 = n3.matches;
      }
    }
    let r3 = t20, i3 = n3 == null ? void 0 : n3.errors;
    if (null != i3) {
      let t21 = r3.findIndex((t22) => t22.route.id && void 0 !== (i3 == null ? void 0 : i3[t22.route.id]));
      Yy(t21 >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(i3).join(",")}`), r3 = r3.slice(0, Math.min(r3.length, t21 + 1));
    }
    let o3 = false, s3 = -1;
    if (n3) for (let t21 = 0; t21 < r3.length; t21++) {
      let e4 = r3[t21];
      if ((e4.route.HydrateFallback || e4.route.hydrateFallbackElement) && (s3 = t21), e4.route.id) {
        let { loaderData: t22, errors: i4 } = n3, a3 = e4.route.loader && !t22.hasOwnProperty(e4.route.id) && (!i4 || void 0 === i4[e4.route.id]);
        if (e4.route.lazy || a3) {
          o3 = true, r3 = s3 >= 0 ? r3.slice(0, s3 + 1) : [r3[0]];
          break;
        }
      }
    }
    return r3.reduceRight((t21, a3, u3) => {
      let l3, c3 = false, h3 = null, f3 = null;
      n3 && (l3 = i3 && a3.route.id ? i3[a3.route.id] : void 0, h3 = a3.route.errorElement || V_, o3 && (s3 < 0 && 0 === u3 ? (W_("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration"), c3 = true, f3 = null) : s3 === u3 && (c3 = true, f3 = a3.route.hydrateFallbackElement || null)));
      let d3 = e3.concat(r3.slice(0, u3 + 1)), p3 = () => {
        let e4;
        return e4 = l3 ? h3 : c3 ? f3 : a3.route.Component ? y(a3.route.Component, null) : a3.route.element ? a3.route.element : t21, y(I_, { match: a3, routeContext: { outlet: t21, matches: d3, isDataRoute: null != n3 }, children: e4 });
      };
      return n3 && (a3.route.ErrorBoundary || a3.route.errorElement || 0 === u3) ? y(B_, { location: n3.location, revalidation: n3.revalidation, component: h3, error: l3, children: p3(), routeContext: { outlet: null, matches: d3, isDataRoute: true } }) : p3();
    }, null);
  }(v2 && v2.map((t20) => Object.assign({}, t20, { params: Object.assign({}, u2, t20.params), pathname: v_([c2, i2.encodeLocation ? i2.encodeLocation(t20.pathname).pathname : t20.pathname]), pathnameBase: "/" === t20.pathnameBase ? c2 : v_([c2, i2.encodeLocation ? i2.encodeLocation(t20.pathnameBase).pathname : t20.pathnameBase]) })), s2, n2, r2);
  return e2 && g2 ? y(S_.Provider, { value: { location: { pathname: "/", search: "", hash: "", state: null, key: "default", ...f2 }, navigationType: "POP" } }, g2) : g2;
}
function N_() {
  let t19 = function() {
    var _a3;
    let t20 = pt(O_), e3 = function(t21) {
      let e4 = pt(T_);
      return Yy(e4, F_(t21)), e4;
    }("useRouteError"), n3 = z_("useRouteError");
    if (void 0 !== t20) return t20;
    return (_a3 = e3.errors) == null ? void 0 : _a3[n3];
  }(), e2 = function(t20) {
    return null != t20 && "number" == typeof t20.status && "string" == typeof t20.statusText && "boolean" == typeof t20.internal && "data" in t20;
  }(t19) ? `${t19.status} ${t19.statusText}` : t19 instanceof Error ? t19.message : JSON.stringify(t19), n2 = t19 instanceof Error ? t19.stack : null, r2 = "rgba(200,200,200, 0.5)", i2 = { padding: "0.5rem", backgroundColor: r2 }, o2 = { padding: "2px 4px", backgroundColor: r2 }, s2 = null;
  return console.error("Error handled by React Router default ErrorBoundary:", t19), s2 = y(w, null, y("p", null, "💿 Hey developer 👋"), y("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", y("code", { style: o2 }, "ErrorBoundary"), " or", " ", y("code", { style: o2 }, "errorElement"), " prop on your route.")), y(w, null, y("h2", null, "Unexpected Application Error!"), y("h3", { style: { fontStyle: "italic" } }, e2), n2 ? y("pre", { style: i2 }, n2) : null, s2);
}
W(null);
var V_ = y(N_, null), B_ = class extends x {
  constructor(t19) {
    super(t19), this.state = { location: t19.location, revalidation: t19.revalidation, error: t19.error };
  }
  static getDerivedStateFromError(t19) {
    return { error: t19 };
  }
  static getDerivedStateFromProps(t19, e2) {
    return e2.location !== t19.location || "idle" !== e2.revalidation && "idle" === t19.revalidation ? { error: t19.error, location: t19.location, revalidation: t19.revalidation } : { error: void 0 !== t19.error ? t19.error : e2.error, location: e2.location, revalidation: t19.revalidation || e2.revalidation };
  }
  componentDidCatch(t19, e2) {
    console.error("React Router caught the following error during render", t19, e2);
  }
  render() {
    return void 0 !== this.state.error ? y(E_.Provider, { value: this.props.routeContext }, y(O_.Provider, { value: this.state.error, children: this.props.component })) : this.props.children;
  }
};
function I_({ routeContext: t19, match: e2, children: n2 }) {
  let r2 = pt(x_);
  return r2 && r2.static && r2.staticContext && (e2.route.errorElement || e2.route.ErrorBoundary) && (r2.staticContext._deepestRenderedBoundaryId = e2.route.id), y(E_.Provider, { value: t19 }, n2);
}
function F_(t19) {
  return `${t19} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function z_(t19) {
  let e2 = function(t20) {
    let e3 = pt(E_);
    return Yy(e3, F_(t20)), e3;
  }(t19), n2 = e2.matches[e2.matches.length - 1];
  return Yy(n2.route.id, `${t19} can only be used on routes that contain a unique "id"`), n2.route.id;
}
var U_ = {};
function W_(t19, e2, n2) {
  e2 || U_[t19] || (U_[t19] = true, Xy(false, n2));
}
function H_(t19) {
  Yy(false, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
}
function $_({ basename: t19 = "/", children: e2 = null, location: n2, navigationType: r2 = "POP", navigator: i2, static: o2 = false }) {
  Yy(!k_(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
  let s2 = t19.replace(/^\/*/, "/"), a2 = ft(() => ({ basename: s2, navigator: i2, static: o2, future: {} }), [s2, i2, o2]);
  "string" == typeof n2 && (n2 = Zy(n2));
  let { pathname: u2 = "/", search: l2 = "", hash: c2 = "", state: h2 = null, key: f2 = "default" } = n2, d2 = ft(() => {
    let t20 = f_(u2, s2);
    return null == t20 ? null : { location: { pathname: t20, search: l2, hash: c2, state: h2, key: f2 }, navigationType: r2 };
  }, [s2, u2, l2, c2, h2, f2, r2]);
  return Xy(null != d2, `<Router basename="${s2}"> is not able to match the URL "${u2}${l2}${c2}" because it does not start with the basename, so the <Router> won't render anything.`), null == d2 ? null : y(P_.Provider, { value: a2 }, y(S_.Provider, { children: e2, value: d2 }));
}
function Y_({ children: t19, location: e2 }) {
  return j_(X_(t19), e2);
}
function X_(t19, e2 = []) {
  let n2 = [];
  return Bt.forEach(t19, (t20, r2) => {
    if (!ve(t20)) return;
    let i2 = [...e2, r2];
    if (t20.type === w) return void n2.push.apply(n2, X_(t20.props.children, i2));
    Yy(t20.type === H_, `[${"string" == typeof t20.type ? t20.type : t20.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), Yy(!t20.props.index || !t20.props.children, "An index route cannot have child routes.");
    let o2 = { id: t20.props.id || i2.join("-"), caseSensitive: t20.props.caseSensitive, element: t20.props.element, Component: t20.props.Component, index: t20.props.index, path: t20.props.path, loader: t20.props.loader, action: t20.props.action, hydrateFallbackElement: t20.props.hydrateFallbackElement, HydrateFallback: t20.props.HydrateFallback, errorElement: t20.props.errorElement, ErrorBoundary: t20.props.ErrorBoundary, hasErrorBoundary: true === t20.props.hasErrorBoundary || null != t20.props.ErrorBoundary || null != t20.props.errorElement, shouldRevalidate: t20.props.shouldRevalidate, handle: t20.props.handle, lazy: t20.props.lazy };
    t20.props.children && (o2.children = X_(t20.props.children, i2)), n2.push(o2);
  }), n2;
}
Dt(function({ routes: t19, future: e2, state: n2 }) {
  return j_(t19, void 0, n2, e2);
});
var q_ = "get", G_ = "application/x-www-form-urlencoded";
function K_(t19) {
  return null != t19 && "string" == typeof t19.tagName;
}
var Z_ = null;
var J_ = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function Q_(t19) {
  return null == t19 || J_.has(t19) ? t19 : (Xy(false, `"${t19}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${G_}"`), null);
}
function tb(t19, e2) {
  let n2, r2, i2, o2, s2;
  if (K_(a2 = t19) && "form" === a2.tagName.toLowerCase()) {
    let s3 = t19.getAttribute("action");
    r2 = s3 ? f_(s3, e2) : null, n2 = t19.getAttribute("method") || q_, i2 = Q_(t19.getAttribute("enctype")) || G_, o2 = new FormData(t19);
  } else if (function(t20) {
    return K_(t20) && "button" === t20.tagName.toLowerCase();
  }(t19) || function(t20) {
    return K_(t20) && "input" === t20.tagName.toLowerCase();
  }(t19) && ("submit" === t19.type || "image" === t19.type)) {
    let s3 = t19.form;
    if (null == s3) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let a3 = t19.getAttribute("formaction") || s3.getAttribute("action");
    if (r2 = a3 ? f_(a3, e2) : null, n2 = t19.getAttribute("formmethod") || s3.getAttribute("method") || q_, i2 = Q_(t19.getAttribute("formenctype")) || Q_(s3.getAttribute("enctype")) || G_, o2 = new FormData(s3, t19), !function() {
      if (null === Z_) try {
        new FormData(document.createElement("form"), 0), Z_ = false;
      } catch (t20) {
        Z_ = true;
      }
      return Z_;
    }()) {
      let { name: e3, type: n3, value: r3 } = t19;
      if ("image" === n3) {
        let t20 = e3 ? `${e3}.` : "";
        o2.append(`${t20}x`, "0"), o2.append(`${t20}y`, "0");
      } else e3 && o2.append(e3, r3);
    }
  } else {
    if (K_(t19)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    n2 = q_, r2 = null, i2 = G_, s2 = t19;
  }
  var a2;
  return o2 && "text/plain" === i2 && (s2 = o2, o2 = void 0), { action: r2, method: n2.toLowerCase(), encType: i2, formData: o2, body: s2 };
}
function eb(t19, e2) {
  if (false === t19 || null == t19) throw new Error(e2);
}
function nb(t19) {
  return null != t19 && (null == t19.href ? "preload" === t19.rel && "string" == typeof t19.imageSrcSet && "string" == typeof t19.imageSizes : "string" == typeof t19.rel && "string" == typeof t19.href);
}
async function rb(t19, e2, n2) {
  return function(t20, e3) {
    let n3 = /* @__PURE__ */ new Set();
    return new Set(e3), t20.reduce((t21, e4) => {
      let r2 = JSON.stringify(function(t22) {
        let e5 = {}, n4 = Object.keys(t22).sort();
        for (let r3 of n4) e5[r3] = t22[r3];
        return e5;
      }(e4));
      return n3.has(r2) || (n3.add(r2), t21.push({ key: r2, link: e4 })), t21;
    }, []);
  }((await Promise.all(t19.map(async (t20) => {
    let r2 = e2.routes[t20.route.id];
    if (r2) {
      let t21 = await async function(t22, e3) {
        if (t22.id in e3) return e3[t22.id];
        try {
          let n3 = await import(t22.module);
          return e3[t22.id] = n3, n3;
        } catch (e4) {
          return console.error(`Error loading route module \`${t22.module}\`, reloading page...`), console.error(e4), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
          });
        }
      }(r2, n2);
      return t21.links ? t21.links() : [];
    }
    return [];
  }))).flat(1).filter(nb).filter((t20) => "stylesheet" === t20.rel || "preload" === t20.rel).map((t20) => "stylesheet" === t20.rel ? { ...t20, rel: "prefetch", as: "style" } : { ...t20, rel: "prefetch" }));
}
function ib(t19, e2, n2, r2, i2, o2) {
  let s2 = (t20, e3) => !n2[e3] || t20.route.id !== n2[e3].route.id, a2 = (t20, e3) => {
    var _a3;
    return n2[e3].pathname !== t20.pathname || ((_a3 = n2[e3].route.path) == null ? void 0 : _a3.endsWith("*")) && n2[e3].params["*"] !== t20.params["*"];
  };
  return "assets" === o2 ? e2.filter((t20, e3) => s2(t20, e3) || a2(t20, e3)) : "data" === o2 ? e2.filter((e3, o3) => {
    var _a3;
    let u2 = r2.routes[e3.route.id];
    if (!u2 || !u2.hasLoader) return false;
    if (s2(e3, o3) || a2(e3, o3)) return true;
    if (e3.route.shouldRevalidate) {
      let r3 = e3.route.shouldRevalidate({ currentUrl: new URL(i2.pathname + i2.search + i2.hash, window.origin), currentParams: ((_a3 = n2[0]) == null ? void 0 : _a3.params) || {}, nextUrl: new URL(t19, window.origin), nextParams: e3.params, defaultShouldRevalidate: true });
      if ("boolean" == typeof r3) return r3;
    }
    return true;
  }) : [];
}
function ob(t19, e2) {
  return n2 = t19.map((t20) => {
    let n3 = e2.routes[t20.route.id];
    if (!n3) return [];
    let r2 = [n3.module];
    return n3.imports && (r2 = r2.concat(n3.imports)), r2;
  }).flat(1), [...new Set(n2)];
  var n2;
}
var sb = W(void 0);
function ab() {
  let t19 = pt(sb);
  return eb(t19, "You must render this element inside a <HydratedRouter> element"), t19;
}
function ub(t19, e2) {
  return (n2) => {
    t19 && t19(n2), n2.defaultPrevented || e2(n2);
  };
}
function lb({ page: t19, ...e2 }) {
  let { router: n2 } = function() {
    let t20 = pt(x_);
    return eb(t20, "You must render this element inside a <DataRouterContext.Provider> element"), t20;
  }(), r2 = ft(() => Jy(n2.routes, t19, n2.basename), [n2.routes, t19, n2.basename]);
  return r2 ? y(cb, { page: t19, matches: r2, ...e2 }) : null;
}
function cb({ page: t19, matches: e2, ...n2 }) {
  let r2 = M_(), { manifest: i2, routeModules: o2 } = ab(), { loaderData: s2, matches: a2 } = function() {
    let t20 = pt(T_);
    return eb(t20, "You must render this element inside a <DataRouterStateContext.Provider> element"), t20;
  }(), u2 = ft(() => ib(t19, e2, a2, i2, r2, "data"), [t19, e2, a2, i2, r2]), l2 = ft(() => ib(t19, e2, a2, i2, r2, "assets"), [t19, e2, a2, i2, r2]), c2 = ft(() => {
    if (t19 === r2.pathname + r2.search + r2.hash) return [];
    let n3 = /* @__PURE__ */ new Set(), a3 = false;
    if (e2.forEach((t20) => {
      var _a3;
      let e3 = i2.routes[t20.route.id];
      e3 && e3.hasLoader && (!u2.some((e4) => e4.route.id === t20.route.id) && t20.route.id in s2 && ((_a3 = o2[t20.route.id]) == null ? void 0 : _a3.shouldRevalidate) || e3.hasClientLoader ? a3 = true : n3.add(t20.route.id));
    }), 0 === n3.size) return [];
    let l3 = function(t20) {
      let e3 = "string" == typeof t20 ? new URL(t20, "undefined" == typeof window ? "server://singlefetch/" : window.location.origin) : t20;
      return "/" === e3.pathname ? e3.pathname = "_root.data" : e3.pathname = `${e3.pathname.replace(/\/$/, "")}.data`, e3;
    }(t19);
    return a3 && n3.size > 0 && l3.searchParams.set("_routes", e2.filter((t20) => n3.has(t20.route.id)).map((t20) => t20.route.id).join(",")), [l3.pathname + l3.search];
  }, [s2, r2, i2, u2, e2, t19, o2]), h2 = ft(() => ob(l2, i2), [l2, i2]), f2 = function(t20) {
    let { manifest: e3, routeModules: n3 } = ab(), [r3, i3] = st([]);
    return ut(() => {
      let r4 = false;
      return rb(t20, e3, n3).then((t21) => {
        r4 || i3(t21);
      }), () => {
        r4 = true;
      };
    }, [t20, e3, n3]), r3;
  }(l2);
  return y(w, null, c2.map((t20) => y("link", { key: t20, rel: "prefetch", as: "fetch", href: t20, ...n2 })), h2.map((t20) => y("link", { key: t20, rel: "modulepreload", href: t20, ...n2 })), f2.map(({ key: t20, link: e3 }) => y("link", { key: t20, ...e3 })));
}
function hb(...t19) {
  return (e2) => {
    t19.forEach((t20) => {
      "function" == typeof t20 ? t20(e2) : null != t20 && (t20.current = e2);
    });
  };
}
sb.displayName = "FrameworkContext";
var fb = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement;
try {
  fb && (window.__reactRouterVersion = "7.1.5");
} catch (Q2) {
}
function db({ basename: t19, children: e2, window: n2 }) {
  let r2 = ct();
  null == r2.current && (r2.current = $y({ window: n2, v5Compat: true }));
  let i2 = r2.current, [o2, s2] = st({ action: i2.action, location: i2.location }), a2 = dt((t20) => {
    Ot(() => s2(t20));
  }, [s2]);
  return lt(() => i2.listen(a2), [i2, a2]), y($_, { basename: t19, children: e2, location: o2.location, navigationType: o2.action, navigator: i2 });
}
var pb = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, mb = Nt(function({ onClick: t19, discover: e2 = "render", prefetch: n2 = "none", relative: r2, reloadDocument: i2, replace: o2, state: s2, target: a2, to: u2, preventScrollReset: l2, viewTransition: c2, ...h2 }, f2) {
  let d2, { basename: p2 } = pt(P_), m2 = "string" == typeof u2 && pb.test(u2), v2 = false;
  if ("string" == typeof u2 && m2 && (d2 = u2, fb)) try {
    let t20 = new URL(window.location.href), e3 = u2.startsWith("//") ? new URL(t20.protocol + u2) : new URL(u2), n3 = f_(e3.pathname, p2);
    e3.origin === t20.origin && null != n3 ? u2 = n3 + e3.search + e3.hash : v2 = true;
  } catch (t20) {
    Xy(false, `<Link to="${u2}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
  }
  let g2 = function(t20, { relative: e3 } = {}) {
    Yy(k_(), "useHref() may be used only in the context of a <Router> component.");
    let { basename: n3, navigator: r3 } = pt(P_), { hash: i3, pathname: o3, search: s3 } = L_(t20, { relative: e3 }), a3 = o3;
    return "/" !== n3 && (a3 = "/" === o3 ? n3 : v_([n3, o3])), r3.createHref({ pathname: a3, search: s3, hash: i3 });
  }(u2, { relative: r2 }), [_2, b2, x2] = function(t20, e3) {
    let n3 = pt(sb), [r3, i3] = st(false), [o3, s3] = st(false), { onFocus: a3, onBlur: u3, onMouseEnter: l3, onMouseLeave: c3, onTouchStart: h3 } = e3, f3 = ct(null);
    ut(() => {
      if ("render" === t20 && s3(true), "viewport" === t20) {
        let t21 = new IntersectionObserver((t22) => {
          t22.forEach((t23) => {
            s3(t23.isIntersecting);
          });
        }, { threshold: 0.5 });
        return f3.current && t21.observe(f3.current), () => {
          t21.disconnect();
        };
      }
    }, [t20]), ut(() => {
      if (r3) {
        let t21 = setTimeout(() => {
          s3(true);
        }, 100);
        return () => {
          clearTimeout(t21);
        };
      }
    }, [r3]);
    let d3 = () => {
      i3(true);
    }, p3 = () => {
      i3(false), s3(false);
    };
    return n3 ? "intent" !== t20 ? [o3, f3, {}] : [o3, f3, { onFocus: ub(a3, d3), onBlur: ub(u3, p3), onMouseEnter: ub(l3, d3), onMouseLeave: ub(c3, p3), onTouchStart: ub(h3, d3) }] : [false, f3, {}];
  }(n2, h2), T2 = function(t20, { target: e3, replace: n3, state: r3, preventScrollReset: i3, relative: o3, viewTransition: s3 } = {}) {
    let a3 = D_(), u3 = M_(), l3 = L_(t20, { relative: o3 });
    return dt((c3) => {
      if (function(t21, e4) {
        return !(0 !== t21.button || e4 && "_self" !== e4 || function(t22) {
          return !!(t22.metaKey || t22.altKey || t22.ctrlKey || t22.shiftKey);
        }(t21));
      }(c3, e3)) {
        c3.preventDefault();
        let e4 = void 0 !== n3 ? n3 : Ky(u3) === Ky(l3);
        a3(t20, { replace: e4, state: r3, preventScrollReset: i3, relative: o3, viewTransition: s3 });
      }
    }, [u3, a3, l3, n3, r3, e3, t20, i3, o3, s3]);
  }(u2, { replace: o2, state: s2, target: a2, preventScrollReset: l2, relative: r2, viewTransition: c2 });
  let C2 = y("a", { ...h2, ...x2, href: d2 || g2, onClick: v2 || i2 ? t19 : function(e3) {
    t19 && t19(e3), e3.defaultPrevented || T2(e3);
  }, ref: hb(f2, b2), target: a2, "data-discover": m2 || "render" !== e2 ? void 0 : "true" });
  return _2 && !m2 ? y(w, null, C2, y(lb, { page: g2 })) : C2;
});
mb.displayName = "Link";
var vb = Nt(function({ "aria-current": t19 = "page", caseSensitive: e2 = false, className: n2 = "", end: r2 = false, style: i2, to: o2, viewTransition: s2, children: a2, ...u2 }, l2) {
  let c2 = L_(o2, { relative: u2.relative }), h2 = M_(), f2 = pt(T_), { navigator: d2, basename: p2 } = pt(P_), m2 = null != f2 && function(t20, e3 = {}) {
    let n3 = pt(C_);
    Yy(null != n3, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let { basename: r3 } = yb("useViewTransitionState"), i3 = L_(t20, { relative: e3.relative });
    if (!n3.isTransitioning) return false;
    let o3 = f_(n3.currentLocation.pathname, r3) || n3.currentLocation.pathname, s3 = f_(n3.nextLocation.pathname, r3) || n3.nextLocation.pathname;
    return null != c_(i3.pathname, s3) || null != c_(i3.pathname, o3);
  }(c2) && true === s2, v2 = d2.encodeLocation ? d2.encodeLocation(c2).pathname : c2.pathname, g2 = h2.pathname, _2 = f2 && f2.navigation && f2.navigation.location ? f2.navigation.location.pathname : null;
  e2 || (g2 = g2.toLowerCase(), _2 = _2 ? _2.toLowerCase() : null, v2 = v2.toLowerCase()), _2 && p2 && (_2 = f_(_2, p2) || _2);
  const b2 = "/" !== v2 && v2.endsWith("/") ? v2.length - 1 : v2.length;
  let w2, x2 = g2 === v2 || !r2 && g2.startsWith(v2) && "/" === g2.charAt(b2), T2 = null != _2 && (_2 === v2 || !r2 && _2.startsWith(v2) && "/" === _2.charAt(v2.length)), C2 = { isActive: x2, isPending: T2, isTransitioning: m2 }, P2 = x2 ? t19 : void 0;
  w2 = "function" == typeof n2 ? n2(C2) : [n2, x2 ? "active" : null, T2 ? "pending" : null, m2 ? "transitioning" : null].filter(Boolean).join(" ");
  let S2 = "function" == typeof i2 ? i2(C2) : i2;
  return y(mb, { ...u2, "aria-current": P2, className: w2, ref: l2, style: S2, to: o2, viewTransition: s2 }, "function" == typeof a2 ? a2(C2) : a2);
});
vb.displayName = "NavLink";
var gb = Nt(({ discover: t19 = "render", fetcherKey: e2, navigate: n2, reloadDocument: r2, replace: i2, state: o2, method: s2 = q_, action: a2, onSubmit: u2, relative: l2, preventScrollReset: c2, viewTransition: h2, ...f2 }, d2) => {
  let p2 = function() {
    let { router: t20 } = yb("useSubmit"), { basename: e3 } = pt(P_), n3 = z_("useRouteId");
    return dt(async (r3, i3 = {}) => {
      let { action: o3, method: s3, encType: a3, formData: u3, body: l3 } = tb(r3, e3);
      if (false === i3.navigate) {
        let e4 = i3.fetcherKey || bb();
        await t20.fetch(e4, n3, i3.action || o3, { preventScrollReset: i3.preventScrollReset, formData: u3, body: l3, formMethod: i3.method || s3, formEncType: i3.encType || a3, flushSync: i3.flushSync });
      } else await t20.navigate(i3.action || o3, { preventScrollReset: i3.preventScrollReset, formData: u3, body: l3, formMethod: i3.method || s3, formEncType: i3.encType || a3, replace: i3.replace, state: i3.state, fromRouteId: n3, flushSync: i3.flushSync, viewTransition: i3.viewTransition });
    }, [t20, e3, n3]);
  }(), m2 = function(t20, { relative: e3 } = {}) {
    let { basename: n3 } = pt(P_), r3 = pt(E_);
    Yy(r3, "useFormAction must be used inside a RouteContext");
    let [i3] = r3.matches.slice(-1), o3 = { ...L_(t20 || ".", { relative: e3 }) }, s3 = M_();
    if (null == t20) {
      o3.search = s3.search;
      let t21 = new URLSearchParams(o3.search), e4 = t21.getAll("index"), n4 = e4.some((t22) => "" === t22);
      if (n4) {
        t21.delete("index"), e4.filter((t22) => t22).forEach((e5) => t21.append("index", e5));
        let n5 = t21.toString();
        o3.search = n5 ? `?${n5}` : "";
      }
    }
    t20 && "." !== t20 || !i3.route.index || (o3.search = o3.search ? o3.search.replace(/^\?/, "?index&") : "?index");
    "/" !== n3 && (o3.pathname = "/" === o3.pathname ? n3 : v_([n3, o3.pathname]));
    return Ky(o3);
  }(a2, { relative: l2 }), v2 = "get" === s2.toLowerCase() ? "get" : "post", g2 = "string" == typeof a2 && pb.test(a2);
  return y("form", { ref: d2, method: v2, action: m2, onSubmit: r2 ? u2 : (t20) => {
    if (u2 && u2(t20), t20.defaultPrevented) return;
    t20.preventDefault();
    let r3 = t20.nativeEvent.submitter, a3 = (r3 == null ? void 0 : r3.getAttribute("formmethod")) || s2;
    p2(r3 || t20.currentTarget, { fetcherKey: e2, method: a3, navigate: n2, replace: i2, state: o2, relative: l2, preventScrollReset: c2, viewTransition: h2 });
  }, ...f2, "data-discover": g2 || "render" !== t19 ? void 0 : "true" });
});
function yb(t19) {
  let e2 = pt(x_);
  return Yy(e2, function(t20) {
    return `${t20} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }(t19)), e2;
}
gb.displayName = "Form";
var _b = 0, bb = () => `__${String(++_b)}__`;
new TextEncoder();
const wb = "/masbo_website/assets/MASBO_Logo%202-CZaHQsdR.svg";
function xb() {
  return $(mb, { className: "logo", to: "/", children: $("img", { className: "icon", src: wb, alt: "logo" }) });
}
function Tb() {
  return $("ul", { className: "mobile-socials gap-15 s-between", children: [{ name: "facebook", icon: $(ke, {}) }, { name: "instagram", icon: $(Oe, {}) }, { name: "twitter", icon: $(Me, {}) }, { name: "youtube", icon: $(Re, {}) }, { name: "telegram", icon: $(Ae, {}) }].map((t19, e2) => $("li", { children: $("a", { href: "#", className: "center-gr", children: t19.icon }) }, e2)) });
}
const Cb = [["/about", "About Us"], ["/portfolio", "Portfolio"], ["/team", "Team"], ["/services", "Services"], ["/news", "News"], ["/contact", "Contact"]], Pb = [["/technologies", "Technologies"], ["/approach", "Our approach"], ["/projects", "Last projects"], ["/team", "Become a part of team"], ["/investment", "For investors"]];
function Sb() {
  return $(w, { children: [$("h5", { className: "static capitalize", children: "hot links:" }), $("ul", { className: "hot-links row wrap gap-10", children: Pb.map(([t19, e2]) => $("li", { className: "center-gr", children: $(mb, { to: t19, children: e2 }) }, t19)) })] });
}
function Eb() {
  return $("div", { className: "mobile-footer", children: [$("div", { className: "lang row center-x end-y gap-10", children: [$("span", { className: "fs-14 text-white font-bold up-case", children: "eng" }), $("div", { className: "line" }), $("span", { className: "fs-14 text-white font-bold up-case", children: "ukr" })] }), $(Sb, {}), $("div", { className: "row s-between gap-20", children: [$("p", { className: "to-small text-white capitalize", children: [$("span", { className: "font-bold", children: " Address: " }), " Ukraine, Kyiv region, 08200 Irpen,", $("br", {}), " Stelmakh street 9a, office 206"] }), $("p", { className: "to-small text-white capitalize", children: [$("span", { className: "font-bold", children: "Tel:" }), " +3 (096) 029-81-18, +3 (063) 023-81-18", $("br", {}), $("span", { className: "font-bold", children: "Email:" }), " office@masbo.com.ua"] })] }), $(Tb, {})] });
}
function Ob() {
  return $("div", { className: "column s-between", children: [$("ul", { className: "column gap-20", children: Pb.map(([t19, e2]) => $("li", { children: $(mb, { to: t19, children: e2 }) }, t19)) }), $("p", { className: "to-middle text-white capitalize", children: [$("span", { className: "font-bold", children: "Tel:" }), " +3 (096) 029-81-18, +3 (063) 023-81-18", $("br", {}), $("span", { className: "font-bold", children: "Email:" }), " office@masbo.com.ua"] })] });
}
function kb({ isMobile: t19, onClick: e2 }) {
  return $("div", { className: "column s-between", children: [$("ul", { className: "column gap-20", children: Cb.map(([t20, n2]) => $("li", { children: $(mb, { onClick: e2, to: t20, children: n2 }) }, t20)) }), !t19 && $("p", { className: "to-middle text-white capitalize", children: [$("span", { className: "font-bold", children: " Address: " }), " Ukraine, Kyiv region, 08200 Irpen,", $("br", {}), " Stelmakh street 9a, office 206"] })] });
}
const Mb = [{ scheme: "/masbo_website/assets/scheme-1-CvbvJQS8.png", title: "private houses" }, { scheme: "/masbo_website/assets/scheme-2-BlV3S1Bv.png", title: "interiors" }, { scheme: "/masbo_website/assets/scheme-3-LDANCKLm.png", title: $(w, { children: ["commercial ", $("br", {}), " real estate"] }) }, { scheme: "/masbo_website/assets/scheme-4-DEwb1c8-.png", title: $(w, { children: ["urban ", $("br", {}), " development"] }) }];
function Ab() {
  return $("ul", { className: "schemes", children: Mb.map(({ scheme: t19, title: e2 }, n2) => $("li", { className: "column s-between", children: [$("img", { alt: "scheme", src: t19 }), $("h5", { className: "static capitalize", children: e2 })] }, n2)) });
}
function Rb() {
  return $("svg", { className: "transition", viewBox: "0 0 3988 3185", preserveAspectRatio: "none", children: $("path", { className: "path", fill: "#E9E9E9", d: "M0 8026.8V3957.5C1307.5 2957.72 2532 2922.72 3988 3960V8026.8C3988 8026.8 3089.5 7146.72 2003 7146.72C916.5 7146.72 0 8026.8 0 8026.8Z", vectorEffect: "non-scaling-stroke" }) });
}
const Db = "M0 4069V-8C2516.76 -7.99976 1409.21 -8.00024 3990 -5.49619V4069C3990 4069 3091.05 3187.25 2004 3187.25C916.96 3187.25 0 4069 0 4069Z", Lb = "M0 8026.8V3957.5C1307.5 2957.72 2532 2922.72 3988 3960V8026.8C3988 8026.8 3089.5 7146.72 2003 7146.72C916.5 7146.72 0 8026.8 0 8026.8Z";
function jb({ openTl: t19, closeTl: e2 }) {
  const n2 = Ms("(max-width: 600px)");
  return ks(() => (t19.current = Ts.timeline({ paused: true }).to(".transition path", { duration: 1, ease: "power3.in", attr: { d: Db, fill: "#1D1D20" }, onStart: () => {
    var _a3;
    document.body.classList.add("overlay-opened"), (_a3 = Vs()) == null ? void 0 : _a3.updatePluginOptions("overflow", { open: true });
  } }).to(".transition path", { duration: 0.4, ease: "power3.out", attr: { d: Db } }).from([".menu-overlay .logo", ".close-menu", ".lang", ".menu-overlay p", ".mobile-footer h5"], { opacity: 0, y: -20, duration: 0.5, stagger: 0.2 }, "-=0.5").from(".menu-overlay ul li", { opacity: 0, x: -30, duration: 0.4, stagger: 0.05, onComplete: () => {
    Ts.set(".close-menu", { pointerEvents: "all" });
  } }, "-=1.2"), e2.current = Ts.timeline({ paused: true }).to(".menu-overlay ul li", { opacity: 0, x: 30, duration: 0.3, stagger: 0.05, onStart: () => {
    Ts.set(".close-menu", { pointerEvents: "none" });
  } }, "-=0,7").to([".menu-overlay  .logo", ".close-menu", ".lang", ".menu-overlay p", ".mobile-footer h5"], { opacity: 0, y: -20, duration: 0.3, stagger: 0.1 }, "-=0.4").to(".transition path", { duration: 0.5, ease: "power3.in", attr: { d: "M0 2015.3V-2054C1307.5 -3053.78 2532 -3088.78 3988 -2051.5V2015.3C3988 2015.3 3089.5 1135.22 2003 1135.22C916.5 1135.22 0 2015.3 0 2015.3Z", fill: "#E9E9E9" } }, n2 ? "-=0.6" : "-=0.4").to(".transition path", { duration: 0.3, ease: "power3.out", attr: { d: "M0 0.0825195V-3665.86C1499.5 -3667 2271 -3665.86 3989 -3667V0.0825195C3989 0.0825195 2773.81 0.0825195 1979 0.0825195C1129 0.0825195 0 0.0825195 0 0.0825195Z" }, onComplete: () => {
    var _a3;
    Ts.set(".transition path", { attr: { d: Lb } }), Ts.set(".close-menu", { clearProps: "pointerEvents" }), (_a3 = Vs()) == null ? void 0 : _a3.updatePluginOptions("overflow", { open: false }), document.body.removeAttribute("class");
  } }), () => {
    var _a3, _b2, _c2;
    (_a3 = t19.current) == null ? void 0 : _a3.kill(), (_b2 = e2.current) == null ? void 0 : _b2.kill(), Ts.set(".transition path", { attr: { d: Lb, fill: "#E9E9E9" } }), Ts.set(".close-menu", { clearProps: "pointerEvents" }), (_c2 = Vs()) == null ? void 0 : _c2.updatePluginOptions("overflow", { open: false }), document.body.removeAttribute("class");
  }), { dependencies: [n2, open], revertOnUpdate: true }), Kt($("div", { className: "menu-overlay row center-y", children: [$(Rb, {}), $(xb, {}), $("div", { className: "row s-between gap-50", children: [$(kb, { onClick: () => e2.current.restart(), isMobile: n2 }), !n2 && $(Ob, {}), $("div", { className: "column s-between", children: [$(Ab, {}), !n2 && $("p", { className: "to-middle text-white capitalize", children: "We offer a full range of services from interior design, individual cottages to the design and construction of residential complexes. For our customers, we are known as a reliable partner with high standards of quality and responsibility." })] }), n2 && $(Eb, {})] }), $(zy, { onClick: () => e2.current.restart() })] }), document.querySelector("#transition-root"));
}
function Nb() {
  const t19 = ct(null), e2 = ct(null);
  return $("div", { className: "menu-bars column gap-5 end-y", onClick: () => {
    t19.current.restart();
  }, children: [$("div", {}), $("div", {}), $("div", {}), $(jb, { openTl: t19, closeTl: e2 })] });
}
function Vb() {
  return Ms("(min-width: 920px)") && $("nav", { children: $("ul", { className: "row", children: Cb.map(([t19, e2]) => $("li", { children: $(mb, { to: t19, className: "text-white fs-14 capitalize", children: e2 }) }, t19)) }) });
}
function Bb() {
  const { width: t19, height: e2, isLargeScreen: n2 } = Fs((r2) => {
    Ts.to("header", { scrollTrigger: { id: "header_trigger_1", scroller: r2.scroller, trigger: "main", start: "3px top", onEnter: () => Ts.set("header", { className: "scrolled", clearProps: "backgroundColor" }), onLeaveBack: () => Ts.set("header", { className: "static", clearProps: "backgroundColor" }) } }), (t19 && e2 || n2) && Ts.to("header", { scrollTrigger: { id: "header_trigger_2", trigger: ".about", start: "left 0%", end: "right 0%", onEnter: () => {
      Ts.set("header", { backgroundColor: "transparent" });
    }, onEnterBack: () => {
      Ts.set("header", { backgroundColor: "transparent" });
    }, onLeaveBack: () => {
      Ts.set("header", { clearProps: "backgroundColor" });
    }, onLeave: () => {
      Ts.set("header", { clearProps: "backgroundColor" });
    } } });
  });
  return $("header", { children: $("div", { className: "container", children: $("div", { className: "row s-between", children: [$("div", { className: "row center-y", children: [$(xb, {}), $(Vb, {})] }), $("div", { className: "row center-y", children: [$("div", { className: "order-project", children: $("span", { className: "fs-14 text-white capitalize", children: "Order the project" }) }), $(Nb, {})] })] }) }) });
}
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
var Ib = function(t19, e2) {
  return Ib = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t20, e3) {
    t20.__proto__ = e3;
  } || function(t20, e3) {
    for (var n2 in e3) e3.hasOwnProperty(n2) && (t20[n2] = e3[n2]);
  }, Ib(t19, e2);
};
var Fb, zb, Ub, Wb, Hb, $b, Yb, Xb, qb, Gb, Kb, Zb, Jb, Qb, tw, ew, nw, rw, iw = function() {
  return iw = Object.assign || function(t19) {
    for (var e2, n2 = 1, r2 = arguments.length; n2 < r2; n2++) for (var i2 in e2 = arguments[n2]) Object.prototype.hasOwnProperty.call(e2, i2) && (t19[i2] = e2[i2]);
    return t19;
  }, iw.apply(this, arguments);
};
function ow(t19, e2, n2, r2) {
  var i2, o2 = arguments.length, s2 = o2 < 3 ? e2 : null === r2 ? r2 = Object.getOwnPropertyDescriptor(e2, n2) : r2;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s2 = Reflect.decorate(t19, e2, n2, r2);
  else for (var a2 = t19.length - 1; a2 >= 0; a2--) (i2 = t19[a2]) && (s2 = (o2 < 3 ? i2(s2) : o2 > 3 ? i2(e2, n2, s2) : i2(e2, n2)) || s2);
  return o2 > 3 && s2 && Object.defineProperty(e2, n2, s2), s2;
}
function sw() {
  for (var t19 = 0, e2 = 0, n2 = arguments.length; e2 < n2; e2++) t19 += arguments[e2].length;
  var r2 = Array(t19), i2 = 0;
  for (e2 = 0; e2 < n2; e2++) for (var o2 = arguments[e2], s2 = 0, a2 = o2.length; s2 < a2; s2++, i2++) r2[i2] = o2[s2];
  return r2;
}
function aw() {
  return zb ? Fb : (zb = 1, Fb = function(t19) {
    try {
      return !!t19();
    } catch (t20) {
      return true;
    }
  });
}
function uw() {
  if (Wb) return Ub;
  Wb = 1;
  var t19 = aw();
  return Ub = !t19(function() {
    var t20 = (function() {
    }).bind();
    return "function" != typeof t20 || t20.hasOwnProperty("prototype");
  }), Ub;
}
function lw() {
  if ($b) return Hb;
  $b = 1;
  var t19 = uw(), e2 = Function.prototype, n2 = e2.call, r2 = t19 && e2.bind.bind(n2, n2);
  return Hb = t19 ? r2 : function(t20) {
    return function() {
      return n2.apply(t20, arguments);
    };
  }, Hb;
}
function cw() {
  if (Xb) return Yb;
  Xb = 1;
  var t19 = lw(), e2 = t19({}.toString), n2 = t19("".slice);
  return Yb = function(t20) {
    return n2(e2(t20), 8, -1);
  };
}
function hw() {
  if (Gb) return qb;
  Gb = 1;
  var t19 = lw(), e2 = aw(), n2 = cw(), r2 = Object, i2 = t19("".split);
  return qb = e2(function() {
    return !r2("z").propertyIsEnumerable(0);
  }) ? function(t20) {
    return "String" === n2(t20) ? i2(t20, "") : r2(t20);
  } : r2;
}
function fw() {
  return Zb ? Kb : (Zb = 1, Kb = function(t19) {
    return null == t19;
  });
}
function dw() {
  if (Qb) return Jb;
  Qb = 1;
  var t19 = fw(), e2 = TypeError;
  return Jb = function(n2) {
    if (t19(n2)) throw new e2("Can't call method on " + n2);
    return n2;
  };
}
function pw() {
  if (ew) return tw;
  ew = 1;
  var t19 = hw(), e2 = dw();
  return tw = function(n2) {
    return t19(e2(n2));
  };
}
function mw() {
  if (rw) return nw;
  rw = 1;
  var t19 = function(t20) {
    return t20 && t20.Math === Math && t20;
  };
  return nw = t19("object" == typeof globalThis && globalThis) || t19("object" == typeof window && window) || t19("object" == typeof self && self) || t19("object" == typeof Ys && Ys) || t19("object" == typeof nw && nw) || /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")();
}
var vw, gw, yw, _w, bw, ww, xw, Tw, Cw, Pw, Sw, Ew, Ow, kw, Mw, Aw, Rw, Dw, Lw, jw, Nw, Vw, Bw, Iw, Fw, zw, Uw, Ww, Hw, $w = { exports: {} };
function Yw() {
  return gw ? vw : (gw = 1, vw = false);
}
function Xw() {
  if (_w) return yw;
  _w = 1;
  var t19 = mw(), e2 = Object.defineProperty;
  return yw = function(n2, r2) {
    try {
      e2(t19, n2, { value: r2, configurable: true, writable: true });
    } catch (e3) {
      t19[n2] = r2;
    }
    return r2;
  };
}
function qw() {
  if (bw) return $w.exports;
  bw = 1;
  var t19 = Yw(), e2 = mw(), n2 = Xw(), r2 = "__core-js_shared__", i2 = $w.exports = e2[r2] || n2(r2, {});
  return (i2.versions || (i2.versions = [])).push({ version: "3.40.0", mode: t19 ? "pure" : "global", copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.40.0/LICENSE", source: "https://github.com/zloirock/core-js" }), $w.exports;
}
function Gw() {
  if (xw) return ww;
  xw = 1;
  var t19 = qw();
  return ww = function(e2, n2) {
    return t19[e2] || (t19[e2] = n2 || {});
  };
}
function Kw() {
  if (Cw) return Tw;
  Cw = 1;
  var t19 = dw(), e2 = Object;
  return Tw = function(n2) {
    return e2(t19(n2));
  };
}
function Zw() {
  if (Sw) return Pw;
  Sw = 1;
  var t19 = lw(), e2 = Kw(), n2 = t19({}.hasOwnProperty);
  return Pw = Object.hasOwn || function(t20, r2) {
    return n2(e2(t20), r2);
  };
}
function Jw() {
  if (Ow) return Ew;
  Ow = 1;
  var t19 = lw(), e2 = 0, n2 = Math.random(), r2 = t19(1 .toString);
  return Ew = function(t20) {
    return "Symbol(" + (void 0 === t20 ? "" : t20) + ")_" + r2(++e2 + n2, 36);
  };
}
function Qw() {
  if (Rw) return Aw;
  Rw = 1;
  var t19, e2, n2 = mw(), r2 = function() {
    if (Mw) return kw;
    Mw = 1;
    var t20 = mw().navigator, e3 = t20 && t20.userAgent;
    return kw = e3 ? String(e3) : "";
  }(), i2 = n2.process, o2 = n2.Deno, s2 = i2 && i2.versions || o2 && o2.version, a2 = s2 && s2.v8;
  return a2 && (e2 = (t19 = a2.split("."))[0] > 0 && t19[0] < 4 ? 1 : +(t19[0] + t19[1])), !e2 && r2 && (!(t19 = r2.match(/Edge\/(\d+)/)) || t19[1] >= 74) && (t19 = r2.match(/Chrome\/(\d+)/)) && (e2 = +t19[1]), Aw = e2;
}
function tx() {
  if (Lw) return Dw;
  Lw = 1;
  var t19 = Qw(), e2 = aw(), n2 = mw().String;
  return Dw = !!Object.getOwnPropertySymbols && !e2(function() {
    var e3 = Symbol("symbol detection");
    return !n2(e3) || !(Object(e3) instanceof Symbol) || !Symbol.sham && t19 && t19 < 41;
  });
}
function ex() {
  if (Nw) return jw;
  Nw = 1;
  var t19 = tx();
  return jw = t19 && !Symbol.sham && "symbol" == typeof Symbol.iterator;
}
function nx() {
  if (Bw) return Vw;
  Bw = 1;
  var t19 = mw(), e2 = Gw(), n2 = Zw(), r2 = Jw(), i2 = tx(), o2 = ex(), s2 = t19.Symbol, a2 = e2("wks"), u2 = o2 ? s2.for || s2 : s2 && s2.withoutSetter || r2;
  return Vw = function(t20) {
    return n2(a2, t20) || (a2[t20] = i2 && n2(s2, t20) ? s2[t20] : u2("Symbol." + t20)), a2[t20];
  };
}
function rx() {
  if (Fw) return Iw;
  Fw = 1;
  var t19 = "object" == typeof document && document.all;
  return Iw = void 0 === t19 && void 0 !== t19 ? function(e2) {
    return "function" == typeof e2 || e2 === t19;
  } : function(t20) {
    return "function" == typeof t20;
  };
}
function ix() {
  if (Uw) return zw;
  Uw = 1;
  var t19 = rx();
  return zw = function(e2) {
    return "object" == typeof e2 ? null !== e2 : t19(e2);
  };
}
function ox() {
  if (Hw) return Ww;
  Hw = 1;
  var t19 = ix(), e2 = String, n2 = TypeError;
  return Ww = function(r2) {
    if (t19(r2)) return r2;
    throw new n2(e2(r2) + " is not an object");
  };
}
var sx, ax, ux, lx, cx = {};
function hx() {
  if (ax) return sx;
  ax = 1;
  var t19 = aw();
  return sx = !t19(function() {
    return 7 !== Object.defineProperty({}, 1, { get: function() {
      return 7;
    } })[1];
  });
}
function fx() {
  if (lx) return ux;
  lx = 1;
  var t19 = hx(), e2 = aw();
  return ux = t19 && e2(function() {
    return 42 !== Object.defineProperty(function() {
    }, "prototype", { value: 42, writable: false }).prototype;
  });
}
var dx, px, mx, vx, gx, yx, _x, bx, wx, xx, Tx, Cx, Px, Sx, Ex, Ox, kx, Mx, Ax, Rx, Dx, Lx, jx, Nx, Vx, Bx, Ix, Fx, zx, Ux, Wx, Hx, $x, Yx, Xx, qx, Gx, Kx, Zx, Jx, Qx, tT, eT, nT, rT, iT, oT, sT, aT, uT, lT, cT, hT, fT, dT, pT, mT, vT, gT, yT, _T, bT, wT, xT, TT = {};
function CT() {
  if (px) return dx;
  px = 1;
  var t19 = mw(), e2 = ix(), n2 = t19.document, r2 = e2(n2) && e2(n2.createElement);
  return dx = function(t20) {
    return r2 ? n2.createElement(t20) : {};
  };
}
function PT() {
  if (vx) return mx;
  vx = 1;
  var t19 = hx(), e2 = aw(), n2 = CT();
  return mx = !t19 && !e2(function() {
    return 7 !== Object.defineProperty(n2("div"), "a", { get: function() {
      return 7;
    } }).a;
  });
}
function ST() {
  if (yx) return gx;
  yx = 1;
  var t19 = uw(), e2 = Function.prototype.call;
  return gx = t19 ? e2.bind(e2) : function() {
    return e2.apply(e2, arguments);
  }, gx;
}
function ET() {
  if (bx) return _x;
  bx = 1;
  var t19 = mw(), e2 = rx();
  return _x = function(n2, r2) {
    return arguments.length < 2 ? (i2 = t19[n2], e2(i2) ? i2 : void 0) : t19[n2] && t19[n2][r2];
    var i2;
  }, _x;
}
function OT() {
  if (xx) return wx;
  xx = 1;
  var t19 = lw();
  return wx = t19({}.isPrototypeOf);
}
function kT() {
  if (Cx) return Tx;
  Cx = 1;
  var t19 = ET(), e2 = rx(), n2 = OT(), r2 = ex(), i2 = Object;
  return Tx = r2 ? function(t20) {
    return "symbol" == typeof t20;
  } : function(r3) {
    var o2 = t19("Symbol");
    return e2(o2) && n2(o2.prototype, i2(r3));
  };
}
function MT() {
  if (Sx) return Px;
  Sx = 1;
  var t19 = String;
  return Px = function(e2) {
    try {
      return t19(e2);
    } catch (t20) {
      return "Object";
    }
  };
}
function AT() {
  if (Ox) return Ex;
  Ox = 1;
  var t19 = rx(), e2 = MT(), n2 = TypeError;
  return Ex = function(r2) {
    if (t19(r2)) return r2;
    throw new n2(e2(r2) + " is not a function");
  };
}
function RT() {
  if (Mx) return kx;
  Mx = 1;
  var t19 = AT(), e2 = fw();
  return kx = function(n2, r2) {
    var i2 = n2[r2];
    return e2(i2) ? void 0 : t19(i2);
  }, kx;
}
function DT() {
  if (Rx) return Ax;
  Rx = 1;
  var t19 = ST(), e2 = rx(), n2 = ix(), r2 = TypeError;
  return Ax = function(i2, o2) {
    var s2, a2;
    if ("string" === o2 && e2(s2 = i2.toString) && !n2(a2 = t19(s2, i2))) return a2;
    if (e2(s2 = i2.valueOf) && !n2(a2 = t19(s2, i2))) return a2;
    if ("string" !== o2 && e2(s2 = i2.toString) && !n2(a2 = t19(s2, i2))) return a2;
    throw new r2("Can't convert object to primitive value");
  }, Ax;
}
function LT() {
  if (Lx) return Dx;
  Lx = 1;
  var t19 = ST(), e2 = ix(), n2 = kT(), r2 = RT(), i2 = DT(), o2 = nx(), s2 = TypeError, a2 = o2("toPrimitive");
  return Dx = function(o3, u2) {
    if (!e2(o3) || n2(o3)) return o3;
    var l2, c2 = r2(o3, a2);
    if (c2) {
      if (void 0 === u2 && (u2 = "default"), l2 = t19(c2, o3, u2), !e2(l2) || n2(l2)) return l2;
      throw new s2("Can't convert object to primitive value");
    }
    return void 0 === u2 && (u2 = "number"), i2(o3, u2);
  };
}
function jT() {
  if (Nx) return jx;
  Nx = 1;
  var t19 = LT(), e2 = kT();
  return jx = function(n2) {
    var r2 = t19(n2, "string");
    return e2(r2) ? r2 : r2 + "";
  };
}
function NT() {
  if (Vx) return TT;
  Vx = 1;
  var t19 = hx(), e2 = PT(), n2 = fx(), r2 = ox(), i2 = jT(), o2 = TypeError, s2 = Object.defineProperty, a2 = Object.getOwnPropertyDescriptor, u2 = "enumerable", l2 = "configurable", c2 = "writable";
  return TT.f = t19 ? n2 ? function(t20, e3, n3) {
    if (r2(t20), e3 = i2(e3), r2(n3), "function" == typeof t20 && "prototype" === e3 && "value" in n3 && c2 in n3 && !n3[c2]) {
      var o3 = a2(t20, e3);
      o3 && o3[c2] && (t20[e3] = n3.value, n3 = { configurable: l2 in n3 ? n3[l2] : o3[l2], enumerable: u2 in n3 ? n3[u2] : o3[u2], writable: false });
    }
    return s2(t20, e3, n3);
  } : s2 : function(t20, n3, a3) {
    if (r2(t20), n3 = i2(n3), r2(a3), e2) try {
      return s2(t20, n3, a3);
    } catch (t21) {
    }
    if ("get" in a3 || "set" in a3) throw new o2("Accessors not supported");
    return "value" in a3 && (t20[n3] = a3.value), t20;
  }, TT;
}
function VT() {
  if (zx) return Fx;
  zx = 1;
  var t19 = function() {
    if (Ix) return Bx;
    Ix = 1;
    var t20 = Math.ceil, e2 = Math.floor;
    return Bx = Math.trunc || function(n2) {
      var r2 = +n2;
      return (r2 > 0 ? e2 : t20)(r2);
    }, Bx;
  }();
  return Fx = function(e2) {
    var n2 = +e2;
    return n2 != n2 || 0 === n2 ? 0 : t19(n2);
  }, Fx;
}
function BT() {
  if (Wx) return Ux;
  Wx = 1;
  var t19 = VT(), e2 = Math.max, n2 = Math.min;
  return Ux = function(r2, i2) {
    var o2 = t19(r2);
    return o2 < 0 ? e2(o2 + i2, 0) : n2(o2, i2);
  };
}
function IT() {
  if ($x) return Hx;
  $x = 1;
  var t19 = VT(), e2 = Math.min;
  return Hx = function(n2) {
    var r2 = t19(n2);
    return r2 > 0 ? e2(r2, 9007199254740991) : 0;
  };
}
function FT() {
  if (Xx) return Yx;
  Xx = 1;
  var t19 = IT();
  return Yx = function(e2) {
    return t19(e2.length);
  };
}
function zT() {
  return Zx ? Kx : (Zx = 1, Kx = {});
}
function UT() {
  if (Qx) return Jx;
  Qx = 1;
  var t19 = lw(), e2 = Zw(), n2 = pw(), r2 = function() {
    if (Gx) return qx;
    Gx = 1;
    var t20 = pw(), e3 = BT(), n3 = FT(), r3 = function(r4) {
      return function(i3, o3, s2) {
        var a2 = t20(i3), u2 = n3(a2);
        if (0 === u2) return !r4 && -1;
        var l2, c2 = e3(s2, u2);
        if (r4 && o3 != o3) {
          for (; u2 > c2; ) if ((l2 = a2[c2++]) != l2) return true;
        } else for (; u2 > c2; c2++) if ((r4 || c2 in a2) && a2[c2] === o3) return r4 || c2 || 0;
        return !r4 && -1;
      };
    };
    return qx = { includes: r3(true), indexOf: r3(false) };
  }().indexOf, i2 = zT(), o2 = t19([].push);
  return Jx = function(t20, s2) {
    var a2, u2 = n2(t20), l2 = 0, c2 = [];
    for (a2 in u2) !e2(i2, a2) && e2(u2, a2) && o2(c2, a2);
    for (; s2.length > l2; ) e2(u2, a2 = s2[l2++]) && (~r2(c2, a2) || o2(c2, a2));
    return c2;
  }, Jx;
}
function WT() {
  return eT ? tT : (eT = 1, tT = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]);
}
function HT() {
  if (rT) return nT;
  rT = 1;
  var t19 = UT(), e2 = WT();
  return nT = Object.keys || function(n2) {
    return t19(n2, e2);
  }, nT;
}
function $T() {
  if (sT) return oT;
  sT = 1;
  var t19 = ET();
  return oT = t19("document", "documentElement");
}
function YT() {
  if (uT) return aT;
  uT = 1;
  var t19 = Gw(), e2 = Jw(), n2 = t19("keys");
  return aT = function(t20) {
    return n2[t20] || (n2[t20] = e2(t20));
  };
}
function XT() {
  if (cT) return lT;
  cT = 1;
  var t19, e2 = ox(), n2 = function() {
    if (iT) return cx;
    iT = 1;
    var t20 = hx(), e3 = fx(), n3 = NT(), r3 = ox(), i3 = pw(), o3 = HT();
    return cx.f = t20 && !e3 ? Object.defineProperties : function(t21, e4) {
      r3(t21);
      for (var s3, a3 = i3(e4), u3 = o3(e4), l3 = u3.length, c3 = 0; l3 > c3; ) n3.f(t21, s3 = u3[c3++], a3[s3]);
      return t21;
    }, cx;
  }(), r2 = WT(), i2 = zT(), o2 = $T(), s2 = CT(), a2 = YT(), u2 = "prototype", l2 = "script", c2 = a2("IE_PROTO"), h2 = function() {
  }, f2 = function(t20) {
    return "<" + l2 + ">" + t20 + "</" + l2 + ">";
  }, d2 = function(t20) {
    t20.write(f2("")), t20.close();
    var e3 = t20.parentWindow.Object;
    return t20 = null, e3;
  }, p2 = function() {
    try {
      t19 = new ActiveXObject("htmlfile");
    } catch (t20) {
    }
    var e3, n3, i3;
    p2 = "undefined" != typeof document ? document.domain && t19 ? d2(t19) : (n3 = s2("iframe"), i3 = "java" + l2 + ":", n3.style.display = "none", o2.appendChild(n3), n3.src = String(i3), (e3 = n3.contentWindow.document).open(), e3.write(f2("document.F=Object")), e3.close(), e3.F) : d2(t19);
    for (var a3 = r2.length; a3--; ) delete p2[u2][r2[a3]];
    return p2();
  };
  return i2[c2] = true, lT = Object.create || function(t20, r3) {
    var i3;
    return null !== t20 ? (h2[u2] = e2(t20), i3 = new h2(), h2[u2] = null, i3[c2] = t20) : i3 = p2(), void 0 === r3 ? i3 : n2.f(i3, r3);
  }, lT;
}
function qT() {
  if (fT) return hT;
  fT = 1;
  var t19 = nx(), e2 = XT(), n2 = NT().f, r2 = t19("unscopables"), i2 = Array.prototype;
  return void 0 === i2[r2] && n2(i2, r2, { configurable: true, value: e2(null) }), hT = function(t20) {
    i2[r2][t20] = true;
  };
}
function GT() {
  return pT ? dT : (pT = 1, dT = {});
}
function KT() {
  if (vT) return mT;
  vT = 1;
  var t19 = mw(), e2 = rx(), n2 = t19.WeakMap;
  return mT = e2(n2) && /native code/.test(String(n2));
}
function ZT() {
  return yT ? gT : (yT = 1, gT = function(t19, e2) {
    return { enumerable: !(1 & t19), configurable: !(2 & t19), writable: !(4 & t19), value: e2 };
  });
}
function JT() {
  if (bT) return _T;
  bT = 1;
  var t19 = hx(), e2 = NT(), n2 = ZT();
  return _T = t19 ? function(t20, r2, i2) {
    return e2.f(t20, r2, n2(1, i2));
  } : function(t20, e3, n3) {
    return t20[e3] = n3, t20;
  };
}
function QT() {
  if (xT) return wT;
  xT = 1;
  var t19, e2, n2, r2 = KT(), i2 = mw(), o2 = ix(), s2 = JT(), a2 = Zw(), u2 = qw(), l2 = YT(), c2 = zT(), h2 = "Object already initialized", f2 = i2.TypeError, d2 = i2.WeakMap;
  if (r2 || u2.state) {
    var p2 = u2.state || (u2.state = new d2());
    p2.get = p2.get, p2.has = p2.has, p2.set = p2.set, t19 = function(t20, e3) {
      if (p2.has(t20)) throw new f2(h2);
      return e3.facade = t20, p2.set(t20, e3), e3;
    }, e2 = function(t20) {
      return p2.get(t20) || {};
    }, n2 = function(t20) {
      return p2.has(t20);
    };
  } else {
    var m2 = l2("state");
    c2[m2] = true, t19 = function(t20, e3) {
      if (a2(t20, m2)) throw new f2(h2);
      return e3.facade = t20, s2(t20, m2, e3), e3;
    }, e2 = function(t20) {
      return a2(t20, m2) ? t20[m2] : {};
    }, n2 = function(t20) {
      return a2(t20, m2);
    };
  }
  return wT = { set: t19, get: e2, has: n2, enforce: function(r3) {
    return n2(r3) ? e2(r3) : t19(r3, {});
  }, getterFor: function(t20) {
    return function(n3) {
      var r3;
      if (!o2(n3) || (r3 = e2(n3)).type !== t20) throw new f2("Incompatible receiver, " + t20 + " required");
      return r3;
    };
  } };
}
var tC, eC, nC = {}, rC = {};
function iC() {
  if (tC) return rC;
  tC = 1;
  var t19 = {}.propertyIsEnumerable, e2 = Object.getOwnPropertyDescriptor, n2 = e2 && !t19.call({ 1: 2 }, 1);
  return rC.f = n2 ? function(t20) {
    var n3 = e2(this, t20);
    return !!n3 && n3.enumerable;
  } : t19, rC;
}
function oC() {
  if (eC) return nC;
  eC = 1;
  var t19 = hx(), e2 = ST(), n2 = iC(), r2 = ZT(), i2 = pw(), o2 = jT(), s2 = Zw(), a2 = PT(), u2 = Object.getOwnPropertyDescriptor;
  return nC.f = t19 ? u2 : function(t20, l2) {
    if (t20 = i2(t20), l2 = o2(l2), a2) try {
      return u2(t20, l2);
    } catch (t21) {
    }
    if (s2(t20, l2)) return r2(!e2(n2.f, t20, l2), t20[l2]);
  }, nC;
}
var sC, aC, uC, lC, cC, hC, fC, dC = { exports: {} };
function pC() {
  if (aC) return sC;
  aC = 1;
  var t19 = hx(), e2 = Zw(), n2 = Function.prototype, r2 = t19 && Object.getOwnPropertyDescriptor, i2 = e2(n2, "name"), o2 = i2 && "something" === (function() {
  }).name, s2 = i2 && (!t19 || t19 && r2(n2, "name").configurable);
  return sC = { EXISTS: i2, PROPER: o2, CONFIGURABLE: s2 };
}
function mC() {
  if (lC) return uC;
  lC = 1;
  var t19 = lw(), e2 = rx(), n2 = qw(), r2 = t19(Function.toString);
  return e2(n2.inspectSource) || (n2.inspectSource = function(t20) {
    return r2(t20);
  }), uC = n2.inspectSource;
}
function vC() {
  if (cC) return dC.exports;
  cC = 1;
  var t19 = lw(), e2 = aw(), n2 = rx(), r2 = Zw(), i2 = hx(), o2 = pC().CONFIGURABLE, s2 = mC(), a2 = QT(), u2 = a2.enforce, l2 = a2.get, c2 = String, h2 = Object.defineProperty, f2 = t19("".slice), d2 = t19("".replace), p2 = t19([].join), m2 = i2 && !e2(function() {
    return 8 !== h2(function() {
    }, "length", { value: 8 }).length;
  }), v2 = String(String).split("String"), g2 = dC.exports = function(t20, e3, n3) {
    "Symbol(" === f2(c2(e3), 0, 7) && (e3 = "[" + d2(c2(e3), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), n3 && n3.getter && (e3 = "get " + e3), n3 && n3.setter && (e3 = "set " + e3), (!r2(t20, "name") || o2 && t20.name !== e3) && (i2 ? h2(t20, "name", { value: e3, configurable: true }) : t20.name = e3), m2 && n3 && r2(n3, "arity") && t20.length !== n3.arity && h2(t20, "length", { value: n3.arity });
    try {
      n3 && r2(n3, "constructor") && n3.constructor ? i2 && h2(t20, "prototype", { writable: false }) : t20.prototype && (t20.prototype = void 0);
    } catch (t21) {
    }
    var s3 = u2(t20);
    return r2(s3, "source") || (s3.source = p2(v2, "string" == typeof e3 ? e3 : "")), t20;
  };
  return Function.prototype.toString = g2(function() {
    return n2(this) && l2(this).source || s2(this);
  }, "toString"), dC.exports;
}
function gC() {
  if (fC) return hC;
  fC = 1;
  var t19 = rx(), e2 = NT(), n2 = vC(), r2 = Xw();
  return hC = function(i2, o2, s2, a2) {
    a2 || (a2 = {});
    var u2 = a2.enumerable, l2 = void 0 !== a2.name ? a2.name : o2;
    if (t19(s2) && n2(s2, l2, a2), a2.global) u2 ? i2[o2] = s2 : r2(o2, s2);
    else {
      try {
        a2.unsafe ? i2[o2] && (u2 = true) : delete i2[o2];
      } catch (t20) {
      }
      u2 ? i2[o2] = s2 : e2.f(i2, o2, { value: s2, enumerable: false, configurable: !a2.nonConfigurable, writable: !a2.nonWritable });
    }
    return i2;
  }, hC;
}
var yC, _C = {};
function bC() {
  if (yC) return _C;
  yC = 1;
  var t19 = UT(), e2 = WT().concat("length", "prototype");
  return _C.f = Object.getOwnPropertyNames || function(n2) {
    return t19(n2, e2);
  }, _C;
}
var wC, xC, TC, CC, PC, SC, EC, OC, kC, MC, AC, RC, DC, LC, jC, NC, VC, BC, IC, FC, zC, UC, WC, HC, $C, YC, XC, qC, GC, KC, ZC, JC, QC, tP = {};
function eP() {
  return wC || (wC = 1, tP.f = Object.getOwnPropertySymbols), tP;
}
function nP() {
  if (TC) return xC;
  TC = 1;
  var t19 = ET(), e2 = lw(), n2 = bC(), r2 = eP(), i2 = ox(), o2 = e2([].concat);
  return xC = t19("Reflect", "ownKeys") || function(t20) {
    var e3 = n2.f(i2(t20)), s2 = r2.f;
    return s2 ? o2(e3, s2(t20)) : e3;
  };
}
function rP() {
  if (PC) return CC;
  PC = 1;
  var t19 = Zw(), e2 = nP(), n2 = oC(), r2 = NT();
  return CC = function(i2, o2, s2) {
    for (var a2 = e2(o2), u2 = r2.f, l2 = n2.f, c2 = 0; c2 < a2.length; c2++) {
      var h2 = a2[c2];
      t19(i2, h2) || s2 && t19(s2, h2) || u2(i2, h2, l2(o2, h2));
    }
  }, CC;
}
function iP() {
  if (EC) return SC;
  EC = 1;
  var t19 = aw(), e2 = rx(), n2 = /#|\.prototype\./, r2 = function(n3, r3) {
    var u2 = o2[i2(n3)];
    return u2 === a2 || u2 !== s2 && (e2(r3) ? t19(r3) : !!r3);
  }, i2 = r2.normalize = function(t20) {
    return String(t20).replace(n2, ".").toLowerCase();
  }, o2 = r2.data = {}, s2 = r2.NATIVE = "N", a2 = r2.POLYFILL = "P";
  return SC = r2;
}
function oP() {
  if (kC) return OC;
  kC = 1;
  var t19 = mw(), e2 = oC().f, n2 = JT(), r2 = gC(), i2 = Xw(), o2 = rP(), s2 = iP();
  return OC = function(a2, u2) {
    var l2, c2, h2, f2, d2, p2 = a2.target, m2 = a2.global, v2 = a2.stat;
    if (l2 = m2 ? t19 : v2 ? t19[p2] || i2(p2, {}) : t19[p2] && t19[p2].prototype) for (c2 in u2) {
      if (f2 = u2[c2], h2 = a2.dontCallGetSet ? (d2 = e2(l2, c2)) && d2.value : l2[c2], !s2(m2 ? c2 : p2 + (v2 ? "." : "#") + c2, a2.forced) && void 0 !== h2) {
        if (typeof f2 == typeof h2) continue;
        o2(f2, h2);
      }
      (a2.sham || h2 && h2.sham) && n2(f2, "sham", true), r2(l2, c2, f2, a2);
    }
  };
}
function sP() {
  if (DC) return RC;
  DC = 1;
  var t19 = Zw(), e2 = rx(), n2 = Kw(), r2 = YT(), i2 = function() {
    if (AC) return MC;
    AC = 1;
    var t20 = aw();
    return MC = !t20(function() {
      function t21() {
      }
      return t21.prototype.constructor = null, Object.getPrototypeOf(new t21()) !== t21.prototype;
    }), MC;
  }(), o2 = r2("IE_PROTO"), s2 = Object, a2 = s2.prototype;
  return RC = i2 ? s2.getPrototypeOf : function(r3) {
    var i3 = n2(r3);
    if (t19(i3, o2)) return i3[o2];
    var u2 = i3.constructor;
    return e2(u2) && i3 instanceof u2 ? u2.prototype : i3 instanceof s2 ? a2 : null;
  }, RC;
}
function aP() {
  if (jC) return LC;
  jC = 1;
  var t19, e2, n2, r2 = aw(), i2 = rx(), o2 = ix(), s2 = XT(), a2 = sP(), u2 = gC(), l2 = nx(), c2 = Yw(), h2 = l2("iterator"), f2 = false;
  [].keys && ("next" in (n2 = [].keys()) ? (e2 = a2(a2(n2))) !== Object.prototype && (t19 = e2) : f2 = true);
  var d2 = !o2(t19) || r2(function() {
    var e3 = {};
    return t19[h2].call(e3) !== e3;
  });
  return d2 ? t19 = {} : c2 && (t19 = s2(t19)), i2(t19[h2]) || u2(t19, h2, function() {
    return this;
  }), LC = { IteratorPrototype: t19, BUGGY_SAFARI_ITERATORS: f2 };
}
function uP() {
  if (VC) return NC;
  VC = 1;
  var t19 = NT().f, e2 = Zw(), n2 = nx()("toStringTag");
  return NC = function(r2, i2, o2) {
    r2 && !o2 && (r2 = r2.prototype), r2 && !e2(r2, n2) && t19(r2, n2, { configurable: true, value: i2 });
  };
}
function lP() {
  if (zC) return FC;
  zC = 1;
  var t19 = lw(), e2 = AT();
  return FC = function(n2, r2, i2) {
    try {
      return t19(e2(Object.getOwnPropertyDescriptor(n2, r2)[i2]));
    } catch (t20) {
    }
  };
}
function cP() {
  if (WC) return UC;
  WC = 1;
  var t19 = ix();
  return UC = function(e2) {
    return t19(e2) || null === e2;
  };
}
function hP() {
  if ($C) return HC;
  $C = 1;
  var t19 = cP(), e2 = String, n2 = TypeError;
  return HC = function(r2) {
    if (t19(r2)) return r2;
    throw new n2("Can't set " + e2(r2) + " as a prototype");
  };
}
function fP() {
  if (XC) return YC;
  XC = 1;
  var t19 = lP(), e2 = ix(), n2 = dw(), r2 = hP();
  return YC = Object.setPrototypeOf || ("__proto__" in {} ? function() {
    var i2, o2 = false, s2 = {};
    try {
      (i2 = t19(Object.prototype, "__proto__", "set"))(s2, []), o2 = s2 instanceof Array;
    } catch (t20) {
    }
    return function(t20, s3) {
      return n2(t20), r2(s3), e2(t20) ? (o2 ? i2(t20, s3) : t20.__proto__ = s3, t20) : t20;
    };
  }() : void 0), YC;
}
function dP() {
  if (GC) return qC;
  GC = 1;
  var t19 = oP(), e2 = ST(), n2 = Yw(), r2 = pC(), i2 = rx(), o2 = function() {
    if (IC) return BC;
    IC = 1;
    var t20 = aP().IteratorPrototype, e3 = XT(), n3 = ZT(), r3 = uP(), i3 = GT(), o3 = function() {
      return this;
    };
    return BC = function(s3, a3, u3, l3) {
      var c3 = a3 + " Iterator";
      return s3.prototype = e3(t20, { next: n3(+!l3, u3) }), r3(s3, c3, false, true), i3[c3] = o3, s3;
    };
  }(), s2 = sP(), a2 = fP(), u2 = uP(), l2 = JT(), c2 = gC(), h2 = nx(), f2 = GT(), d2 = aP(), p2 = r2.PROPER, m2 = r2.CONFIGURABLE, v2 = d2.IteratorPrototype, g2 = d2.BUGGY_SAFARI_ITERATORS, y2 = h2("iterator"), _2 = "keys", b2 = "values", w2 = "entries", x2 = function() {
    return this;
  };
  return qC = function(r3, h3, d3, T2, C2, P2, S2) {
    o2(d3, h3, T2);
    var E2, O2, k2, M2 = function(t20) {
      if (t20 === C2 && j2) return j2;
      if (!g2 && t20 && t20 in D2) return D2[t20];
      switch (t20) {
        case _2:
        case b2:
        case w2:
          return function() {
            return new d3(this, t20);
          };
      }
      return function() {
        return new d3(this);
      };
    }, A2 = h3 + " Iterator", R2 = false, D2 = r3.prototype, L2 = D2[y2] || D2["@@iterator"] || C2 && D2[C2], j2 = !g2 && L2 || M2(C2), N2 = "Array" === h3 && D2.entries || L2;
    if (N2 && (E2 = s2(N2.call(new r3()))) !== Object.prototype && E2.next && (n2 || s2(E2) === v2 || (a2 ? a2(E2, v2) : i2(E2[y2]) || c2(E2, y2, x2)), u2(E2, A2, true, true), n2 && (f2[A2] = x2)), p2 && C2 === b2 && L2 && L2.name !== b2 && (!n2 && m2 ? l2(D2, "name", b2) : (R2 = true, j2 = function() {
      return e2(L2, this);
    })), C2) if (O2 = { values: M2(b2), keys: P2 ? j2 : M2(_2), entries: M2(w2) }, S2) for (k2 in O2) (g2 || R2 || !(k2 in D2)) && c2(D2, k2, O2[k2]);
    else t19({ target: h3, proto: true, forced: g2 || R2 }, O2);
    return n2 && !S2 || D2[y2] === j2 || c2(D2, y2, j2, { name: C2 }), f2[h3] = j2, O2;
  };
}
function pP() {
  return ZC ? KC : (ZC = 1, KC = function(t19, e2) {
    return { value: t19, done: e2 };
  });
}
function mP() {
  if (QC) return JC;
  QC = 1;
  var t19 = pw(), e2 = qT(), n2 = GT(), r2 = QT(), i2 = NT().f, o2 = dP(), s2 = pP(), a2 = Yw(), u2 = hx(), l2 = "Array Iterator", c2 = r2.set, h2 = r2.getterFor(l2);
  JC = o2(Array, "Array", function(e3, n3) {
    c2(this, { type: l2, target: t19(e3), index: 0, kind: n3 });
  }, function() {
    var t20 = h2(this), e3 = t20.target, n3 = t20.index++;
    if (!e3 || n3 >= e3.length) return t20.target = null, s2(void 0, true);
    switch (t20.kind) {
      case "keys":
        return s2(n3, false);
      case "values":
        return s2(e3[n3], false);
    }
    return s2([n3, e3[n3]], false);
  }, "values");
  var f2 = n2.Arguments = n2.Array;
  if (e2("keys"), e2("values"), e2("entries"), !a2 && u2 && "values" !== f2.name) try {
    i2(f2, "name", { value: "values" });
  } catch (t20) {
  }
  return JC;
}
var vP, gP, yP, _P, bP, wP, xP, TP, CP, PP, SP, EP, OP, kP, MP, AP, RP, DP, LP, jP, NP, VP, BP, IP, FP, zP, UP, WP, HP, $P, YP, XP, qP, GP, KP, ZP, JP, QP, tS, eS, nS, rS, iS, oS, sS, aS, uS = {}, lS = { exports: {} }, cS = {};
function hS() {
  if (gP) return vP;
  gP = 1;
  var t19 = lw();
  return vP = t19([].slice);
}
function fS() {
  if (yP) return cS;
  yP = 1;
  var t19 = cw(), e2 = pw(), n2 = bC().f, r2 = hS(), i2 = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
  return cS.f = function(o2) {
    return i2 && "Window" === t19(o2) ? function(t20) {
      try {
        return n2(t20);
      } catch (t21) {
        return r2(i2);
      }
    }(o2) : n2(e2(o2));
  }, cS;
}
function dS() {
  if (xP) return wP;
  xP = 1;
  var t19 = aw(), e2 = ix(), n2 = cw(), r2 = function() {
    if (bP) return _P;
    bP = 1;
    var t20 = aw();
    return _P = t20(function() {
      if ("function" == typeof ArrayBuffer) {
        var t21 = new ArrayBuffer(8);
        Object.isExtensible(t21) && Object.defineProperty(t21, "a", { value: 8 });
      }
    });
  }(), i2 = Object.isExtensible, o2 = t19(function() {
  });
  return wP = o2 || r2 ? function(t20) {
    return !!e2(t20) && ((!r2 || "ArrayBuffer" !== n2(t20)) && (!i2 || i2(t20)));
  } : i2;
}
function pS() {
  if (CP) return TP;
  CP = 1;
  var t19 = aw();
  return TP = !t19(function() {
    return Object.isExtensible(Object.preventExtensions({}));
  });
}
function mS() {
  if (PP) return lS.exports;
  PP = 1;
  var t19 = oP(), e2 = lw(), n2 = zT(), r2 = ix(), i2 = Zw(), o2 = NT().f, s2 = bC(), a2 = fS(), u2 = dS(), l2 = Jw(), c2 = pS(), h2 = false, f2 = l2("meta"), d2 = 0, p2 = function(t20) {
    o2(t20, f2, { value: { objectID: "O" + d2++, weakData: {} } });
  }, m2 = lS.exports = { enable: function() {
    m2.enable = function() {
    }, h2 = true;
    var n3 = s2.f, r3 = e2([].splice), i3 = {};
    i3[f2] = 1, n3(i3).length && (s2.f = function(t20) {
      for (var e3 = n3(t20), i4 = 0, o3 = e3.length; i4 < o3; i4++) if (e3[i4] === f2) {
        r3(e3, i4, 1);
        break;
      }
      return e3;
    }, t19({ target: "Object", stat: true, forced: true }, { getOwnPropertyNames: a2.f }));
  }, fastKey: function(t20, e3) {
    if (!r2(t20)) return "symbol" == typeof t20 ? t20 : ("string" == typeof t20 ? "S" : "P") + t20;
    if (!i2(t20, f2)) {
      if (!u2(t20)) return "F";
      if (!e3) return "E";
      p2(t20);
    }
    return t20[f2].objectID;
  }, getWeakData: function(t20, e3) {
    if (!i2(t20, f2)) {
      if (!u2(t20)) return true;
      if (!e3) return false;
      p2(t20);
    }
    return t20[f2].weakData;
  }, onFreeze: function(t20) {
    return c2 && h2 && u2(t20) && !i2(t20, f2) && p2(t20), t20;
  } };
  return n2[f2] = true, lS.exports;
}
function vS() {
  if (kP) return OP;
  kP = 1;
  var t19 = function() {
    if (EP) return SP;
    EP = 1;
    var t20 = cw(), e3 = lw();
    return SP = function(n3) {
      if ("Function" === t20(n3)) return e3(n3);
    }, SP;
  }(), e2 = AT(), n2 = uw(), r2 = t19(t19.bind);
  return OP = function(t20, i2) {
    return e2(t20), void 0 === i2 ? t20 : n2 ? r2(t20, i2) : function() {
      return t20.apply(i2, arguments);
    };
  }, OP;
}
function gS() {
  if (AP) return MP;
  AP = 1;
  var t19 = nx(), e2 = GT(), n2 = t19("iterator"), r2 = Array.prototype;
  return MP = function(t20) {
    return void 0 !== t20 && (e2.Array === t20 || r2[n2] === t20);
  };
}
function yS() {
  if (DP) return RP;
  DP = 1;
  var t19 = {};
  return t19[nx()("toStringTag")] = "z", RP = "[object z]" === String(t19);
}
function _S() {
  if (jP) return LP;
  jP = 1;
  var t19 = yS(), e2 = rx(), n2 = cw(), r2 = nx()("toStringTag"), i2 = Object, o2 = "Arguments" === n2(/* @__PURE__ */ function() {
    return arguments;
  }());
  return LP = t19 ? n2 : function(t20) {
    var s2, a2, u2;
    return void 0 === t20 ? "Undefined" : null === t20 ? "Null" : "string" == typeof (a2 = function(t21, e3) {
      try {
        return t21[e3];
      } catch (t22) {
      }
    }(s2 = i2(t20), r2)) ? a2 : o2 ? n2(s2) : "Object" === (u2 = n2(s2)) && e2(s2.callee) ? "Arguments" : u2;
  }, LP;
}
function bS() {
  if (VP) return NP;
  VP = 1;
  var t19 = _S(), e2 = RT(), n2 = fw(), r2 = GT(), i2 = nx()("iterator");
  return NP = function(o2) {
    if (!n2(o2)) return e2(o2, i2) || e2(o2, "@@iterator") || r2[t19(o2)];
  };
}
function wS() {
  if (IP) return BP;
  IP = 1;
  var t19 = ST(), e2 = AT(), n2 = ox(), r2 = MT(), i2 = bS(), o2 = TypeError;
  return BP = function(s2, a2) {
    var u2 = arguments.length < 2 ? i2(s2) : a2;
    if (e2(u2)) return n2(t19(u2, s2));
    throw new o2(r2(s2) + " is not iterable");
  }, BP;
}
function xS() {
  if (zP) return FP;
  zP = 1;
  var t19 = ST(), e2 = ox(), n2 = RT();
  return FP = function(r2, i2, o2) {
    var s2, a2;
    e2(r2);
    try {
      if (!(s2 = n2(r2, "return"))) {
        if ("throw" === i2) throw o2;
        return o2;
      }
      s2 = t19(s2, r2);
    } catch (t20) {
      a2 = true, s2 = t20;
    }
    if ("throw" === i2) throw o2;
    if (a2) throw s2;
    return e2(s2), o2;
  };
}
function TS() {
  if (WP) return UP;
  WP = 1;
  var t19 = vS(), e2 = ST(), n2 = ox(), r2 = MT(), i2 = gS(), o2 = FT(), s2 = OT(), a2 = wS(), u2 = bS(), l2 = xS(), c2 = TypeError, h2 = function(t20, e3) {
    this.stopped = t20, this.result = e3;
  }, f2 = h2.prototype;
  return UP = function(d2, p2, m2) {
    var v2, g2, y2, _2, b2, w2, x2, T2 = m2 && m2.that, C2 = !(!m2 || !m2.AS_ENTRIES), P2 = !(!m2 || !m2.IS_RECORD), S2 = !(!m2 || !m2.IS_ITERATOR), E2 = !(!m2 || !m2.INTERRUPTED), O2 = t19(p2, T2), k2 = function(t20) {
      return v2 && l2(v2, "normal", t20), new h2(true, t20);
    }, M2 = function(t20) {
      return C2 ? (n2(t20), E2 ? O2(t20[0], t20[1], k2) : O2(t20[0], t20[1])) : E2 ? O2(t20, k2) : O2(t20);
    };
    if (P2) v2 = d2.iterator;
    else if (S2) v2 = d2;
    else {
      if (!(g2 = u2(d2))) throw new c2(r2(d2) + " is not iterable");
      if (i2(g2)) {
        for (y2 = 0, _2 = o2(d2); _2 > y2; y2++) if ((b2 = M2(d2[y2])) && s2(f2, b2)) return b2;
        return new h2(false);
      }
      v2 = a2(d2, g2);
    }
    for (w2 = P2 ? d2.next : v2.next; !(x2 = e2(w2, v2)).done; ) {
      try {
        b2 = M2(x2.value);
      } catch (t20) {
        l2(v2, "throw", t20);
      }
      if ("object" == typeof b2 && b2 && s2(f2, b2)) return b2;
    }
    return new h2(false);
  }, UP;
}
function CS() {
  if ($P) return HP;
  $P = 1;
  var t19 = OT(), e2 = TypeError;
  return HP = function(n2, r2) {
    if (t19(r2, n2)) return n2;
    throw new e2("Incorrect invocation");
  };
}
function PS() {
  if (XP) return YP;
  XP = 1;
  var t19 = nx()("iterator"), e2 = false;
  try {
    var n2 = 0, r2 = { next: function() {
      return { done: !!n2++ };
    }, return: function() {
      e2 = true;
    } };
    r2[t19] = function() {
      return this;
    }, Array.from(r2, function() {
      throw 2;
    });
  } catch (t20) {
  }
  return YP = function(n3, r3) {
    try {
      if (!r3 && !e2) return false;
    } catch (t20) {
      return false;
    }
    var i2 = false;
    try {
      var o2 = {};
      o2[t19] = function() {
        return { next: function() {
          return { done: i2 = true };
        } };
      }, n3(o2);
    } catch (t20) {
    }
    return i2;
  };
}
function SS() {
  if (GP) return qP;
  GP = 1;
  var t19 = rx(), e2 = ix(), n2 = fP();
  return qP = function(r2, i2, o2) {
    var s2, a2;
    return n2 && t19(s2 = i2.constructor) && s2 !== o2 && e2(a2 = s2.prototype) && a2 !== o2.prototype && n2(r2, a2), r2;
  };
}
function ES() {
  if (ZP) return KP;
  ZP = 1;
  var t19 = oP(), e2 = mw(), n2 = lw(), r2 = iP(), i2 = gC(), o2 = mS(), s2 = TS(), a2 = CS(), u2 = rx(), l2 = fw(), c2 = ix(), h2 = aw(), f2 = PS(), d2 = uP(), p2 = SS();
  return KP = function(m2, v2, g2) {
    var y2 = -1 !== m2.indexOf("Map"), _2 = -1 !== m2.indexOf("Weak"), b2 = y2 ? "set" : "add", w2 = e2[m2], x2 = w2 && w2.prototype, T2 = w2, C2 = {}, P2 = function(t20) {
      var e3 = n2(x2[t20]);
      i2(x2, t20, "add" === t20 ? function(t21) {
        return e3(this, 0 === t21 ? 0 : t21), this;
      } : "delete" === t20 ? function(t21) {
        return !(_2 && !c2(t21)) && e3(this, 0 === t21 ? 0 : t21);
      } : "get" === t20 ? function(t21) {
        return _2 && !c2(t21) ? void 0 : e3(this, 0 === t21 ? 0 : t21);
      } : "has" === t20 ? function(t21) {
        return !(_2 && !c2(t21)) && e3(this, 0 === t21 ? 0 : t21);
      } : function(t21, n3) {
        return e3(this, 0 === t21 ? 0 : t21, n3), this;
      });
    };
    if (r2(m2, !u2(w2) || !(_2 || x2.forEach && !h2(function() {
      new w2().entries().next();
    })))) T2 = g2.getConstructor(v2, m2, y2, b2), o2.enable();
    else if (r2(m2, true)) {
      var S2 = new T2(), E2 = S2[b2](_2 ? {} : -0, 1) !== S2, O2 = h2(function() {
        S2.has(1);
      }), k2 = f2(function(t20) {
        new w2(t20);
      }), M2 = !_2 && h2(function() {
        for (var t20 = new w2(), e3 = 5; e3--; ) t20[b2](e3, e3);
        return !t20.has(-0);
      });
      k2 || ((T2 = v2(function(t20, e3) {
        a2(t20, x2);
        var n3 = p2(new w2(), t20, T2);
        return l2(e3) || s2(e3, n3[b2], { that: n3, AS_ENTRIES: y2 }), n3;
      })).prototype = x2, x2.constructor = T2), (O2 || M2) && (P2("delete"), P2("has"), y2 && P2("get")), (M2 || E2) && P2(b2), _2 && x2.clear && delete x2.clear;
    }
    return C2[m2] = T2, t19({ global: true, constructor: true, forced: T2 !== w2 }, C2), d2(T2, m2), _2 || g2.setStrong(T2, m2, y2), T2;
  };
}
function OS() {
  if (QP) return JP;
  QP = 1;
  var t19 = vC(), e2 = NT();
  return JP = function(n2, r2, i2) {
    return i2.get && t19(i2.get, r2, { getter: true }), i2.set && t19(i2.set, r2, { setter: true }), e2.f(n2, r2, i2);
  };
}
function kS() {
  if (eS) return tS;
  eS = 1;
  var t19 = gC();
  return tS = function(e2, n2, r2) {
    for (var i2 in n2) t19(e2, i2, n2[i2], r2);
    return e2;
  };
}
function MS() {
  if (rS) return nS;
  rS = 1;
  var t19 = ET(), e2 = OS(), n2 = nx(), r2 = hx(), i2 = n2("species");
  return nS = function(n3) {
    var o2 = t19(n3);
    r2 && o2 && !o2[i2] && e2(o2, i2, { configurable: true, get: function() {
      return this;
    } });
  };
}
function AS() {
  if (oS) return iS;
  oS = 1;
  var t19 = XT(), e2 = OS(), n2 = kS(), r2 = vS(), i2 = CS(), o2 = fw(), s2 = TS(), a2 = dP(), u2 = pP(), l2 = MS(), c2 = hx(), h2 = mS().fastKey, f2 = QT(), d2 = f2.set, p2 = f2.getterFor;
  return iS = { getConstructor: function(a3, u3, l3, f3) {
    var m2 = a3(function(e3, n3) {
      i2(e3, v2), d2(e3, { type: u3, index: t19(null), first: null, last: null, size: 0 }), c2 || (e3.size = 0), o2(n3) || s2(n3, e3[f3], { that: e3, AS_ENTRIES: l3 });
    }), v2 = m2.prototype, g2 = p2(u3), y2 = function(t20, e3, n3) {
      var r3, i3, o3 = g2(t20), s3 = _2(t20, e3);
      return s3 ? s3.value = n3 : (o3.last = s3 = { index: i3 = h2(e3, true), key: e3, value: n3, previous: r3 = o3.last, next: null, removed: false }, o3.first || (o3.first = s3), r3 && (r3.next = s3), c2 ? o3.size++ : t20.size++, "F" !== i3 && (o3.index[i3] = s3)), t20;
    }, _2 = function(t20, e3) {
      var n3, r3 = g2(t20), i3 = h2(e3);
      if ("F" !== i3) return r3.index[i3];
      for (n3 = r3.first; n3; n3 = n3.next) if (n3.key === e3) return n3;
    };
    return n2(v2, { clear: function() {
      for (var e3 = g2(this), n3 = e3.first; n3; ) n3.removed = true, n3.previous && (n3.previous = n3.previous.next = null), n3 = n3.next;
      e3.first = e3.last = null, e3.index = t19(null), c2 ? e3.size = 0 : this.size = 0;
    }, delete: function(t20) {
      var e3 = this, n3 = g2(e3), r3 = _2(e3, t20);
      if (r3) {
        var i3 = r3.next, o3 = r3.previous;
        delete n3.index[r3.index], r3.removed = true, o3 && (o3.next = i3), i3 && (i3.previous = o3), n3.first === r3 && (n3.first = i3), n3.last === r3 && (n3.last = o3), c2 ? n3.size-- : e3.size--;
      }
      return !!r3;
    }, forEach: function(t20) {
      for (var e3, n3 = g2(this), i3 = r2(t20, arguments.length > 1 ? arguments[1] : void 0); e3 = e3 ? e3.next : n3.first; ) for (i3(e3.value, e3.key, this); e3 && e3.removed; ) e3 = e3.previous;
    }, has: function(t20) {
      return !!_2(this, t20);
    } }), n2(v2, l3 ? { get: function(t20) {
      var e3 = _2(this, t20);
      return e3 && e3.value;
    }, set: function(t20, e3) {
      return y2(this, 0 === t20 ? 0 : t20, e3);
    } } : { add: function(t20) {
      return y2(this, t20 = 0 === t20 ? 0 : t20, t20);
    } }), c2 && e2(v2, "size", { configurable: true, get: function() {
      return g2(this).size;
    } }), m2;
  }, setStrong: function(t20, e3, n3) {
    var r3 = e3 + " Iterator", i3 = p2(e3), o3 = p2(r3);
    a2(t20, e3, function(t21, e4) {
      d2(this, { type: r3, target: t21, state: i3(t21), kind: e4, last: null });
    }, function() {
      for (var t21 = o3(this), e4 = t21.kind, n4 = t21.last; n4 && n4.removed; ) n4 = n4.previous;
      return t21.target && (t21.last = n4 = n4 ? n4.next : t21.state.first) ? u2("keys" === e4 ? n4.key : "values" === e4 ? n4.value : [n4.key, n4.value], false) : (t21.target = null, u2(void 0, true));
    }, n3 ? "entries" : "values", !n3, true), l2(e3);
  } }, iS;
}
function RS() {
  return aS || (aS = 1, sS || (sS = 1, ES()("Map", function(t19) {
    return function() {
      return t19(this, arguments.length ? arguments[0] : void 0);
    };
  }, AS()))), uS;
}
var DS, LS, jS, NS = {};
function VS() {
  if (LS) return DS;
  LS = 1;
  var t19 = lw(), e2 = Map.prototype;
  return DS = { Map, set: t19(e2.set), get: t19(e2.get), has: t19(e2.has), remove: t19(e2.delete), proto: e2 };
}
var BS, IS, FS, zS = {};
function US() {
  if (FS) return zS;
  FS = 1;
  var t19 = yS(), e2 = gC(), n2 = function() {
    if (IS) return BS;
    IS = 1;
    var t20 = yS(), e3 = _S();
    return BS = t20 ? {}.toString : function() {
      return "[object " + e3(this) + "]";
    };
  }();
  return t19 || e2(Object.prototype, "toString", n2, { unsafe: true }), zS;
}
var WS, HS, $S, YS, XS, qS, GS, KS, ZS, JS = {};
function QS() {
  if (HS) return WS;
  HS = 1;
  var t19 = _S(), e2 = String;
  return WS = function(n2) {
    if ("Symbol" === t19(n2)) throw new TypeError("Cannot convert a Symbol value to a string");
    return e2(n2);
  };
}
function tE() {
  if (XS) return JS;
  XS = 1;
  var t19 = function() {
    if (YS) return $S;
    YS = 1;
    var t20 = lw(), e3 = VT(), n3 = QS(), r3 = dw(), i3 = t20("".charAt), o3 = t20("".charCodeAt), s3 = t20("".slice), a3 = function(t21) {
      return function(a4, u2) {
        var l2, c2, h2 = n3(r3(a4)), f2 = e3(u2), d2 = h2.length;
        return f2 < 0 || f2 >= d2 ? t21 ? "" : void 0 : (l2 = o3(h2, f2)) < 55296 || l2 > 56319 || f2 + 1 === d2 || (c2 = o3(h2, f2 + 1)) < 56320 || c2 > 57343 ? t21 ? i3(h2, f2) : l2 : t21 ? s3(h2, f2, f2 + 2) : c2 - 56320 + (l2 - 55296 << 10) + 65536;
      };
    };
    return $S = { codeAt: a3(false), charAt: a3(true) };
  }().charAt, e2 = QS(), n2 = QT(), r2 = dP(), i2 = pP(), o2 = "String Iterator", s2 = n2.set, a2 = n2.getterFor(o2);
  return r2(String, "String", function(t20) {
    s2(this, { type: o2, string: e2(t20), index: 0 });
  }, function() {
    var e3, n3 = a2(this), r3 = n3.string, o3 = n3.index;
    return o3 >= r3.length ? i2(void 0, true) : (e3 = t19(r3, o3), n3.index += e3.length, i2(e3, false));
  }), JS;
}
function eE() {
  if (GS) return qS;
  GS = 1;
  var t19 = mw();
  return qS = t19;
}
!function() {
  if (ZS) return KS;
  ZS = 1, mP(), RS(), function() {
    if (jS) return NS;
    jS = 1;
    var t20 = oP(), e2 = lw(), n2 = AT(), r2 = dw(), i2 = TS(), o2 = VS(), s2 = Yw(), a2 = aw(), u2 = o2.Map, l2 = o2.has, c2 = o2.get, h2 = o2.set, f2 = e2([].push), d2 = s2 || a2(function() {
      return 1 !== u2.groupBy("ab", function(t21) {
        return t21;
      }).get("a").length;
    });
    t20({ target: "Map", stat: true, forced: s2 || d2 }, { groupBy: function(t21, e3) {
      r2(t21), n2(e3);
      var o3 = new u2(), s3 = 0;
      return i2(t21, function(t22) {
        var n3 = e3(t22, s3++);
        l2(o3, n3) ? f2(c2(o3, n3), t22) : h2(o3, n3, [t22]);
      }), o3;
    } });
  }(), US(), tE();
  var t19 = eE();
  KS = t19.Map;
}();
var nE, rE, iE = {};
function oE() {
  return rE || (rE = 1, nE || (nE = 1, ES()("Set", function(t19) {
    return function() {
      return t19(this, arguments.length ? arguments[0] : void 0);
    };
  }, AS()))), iE;
}
var sE, aE, uE, lE, cE, hE, fE, dE, pE, mE, vE, gE, yE, _E, bE, wE, xE, TE, CE, PE, SE, EE = {};
function OE() {
  if (aE) return sE;
  aE = 1;
  var t19 = lw(), e2 = Set.prototype;
  return sE = { Set, add: t19(e2.add), has: t19(e2.has), remove: t19(e2.delete), proto: e2 };
}
function kE() {
  if (lE) return uE;
  lE = 1;
  var t19 = OE().has;
  return uE = function(e2) {
    return t19(e2), e2;
  };
}
function ME() {
  if (hE) return cE;
  hE = 1;
  var t19 = ST();
  return cE = function(e2, n2, r2) {
    for (var i2, o2, s2 = r2 ? e2 : e2.iterator, a2 = e2.next; !(i2 = t19(a2, s2)).done; ) if (void 0 !== (o2 = n2(i2.value))) return o2;
  }, cE;
}
function AE() {
  if (dE) return fE;
  dE = 1;
  var t19 = lw(), e2 = ME(), n2 = OE(), r2 = n2.Set, i2 = n2.proto, o2 = t19(i2.forEach), s2 = t19(i2.keys), a2 = s2(new r2()).next;
  return fE = function(t20, n3, r3) {
    return r3 ? e2({ iterator: s2(t20), next: a2 }, n3) : o2(t20, n3);
  }, fE;
}
function RE() {
  if (mE) return pE;
  mE = 1;
  var t19 = OE(), e2 = AE(), n2 = t19.Set, r2 = t19.add;
  return pE = function(t20) {
    var i2 = new n2();
    return e2(t20, function(t21) {
      r2(i2, t21);
    }), i2;
  }, pE;
}
function DE() {
  if (gE) return vE;
  gE = 1;
  var t19 = lP(), e2 = OE();
  return vE = t19(e2.proto, "size", "get") || function(t20) {
    return t20.size;
  }, vE;
}
function LE() {
  return _E ? yE : (_E = 1, yE = function(t19) {
    return { iterator: t19, next: t19.next, done: false };
  });
}
function jE() {
  if (wE) return bE;
  wE = 1;
  var t19 = AT(), e2 = ox(), n2 = ST(), r2 = VT(), i2 = LE(), o2 = "Invalid size", s2 = RangeError, a2 = TypeError, u2 = Math.max, l2 = function(e3, n3) {
    this.set = e3, this.size = u2(n3, 0), this.has = t19(e3.has), this.keys = t19(e3.keys);
  };
  return l2.prototype = { getIterator: function() {
    return i2(e2(n2(this.keys, this.set)));
  }, includes: function(t20) {
    return n2(this.has, this.set, t20);
  } }, bE = function(t20) {
    e2(t20);
    var n3 = +t20.size;
    if (n3 != n3) throw new a2(o2);
    var i3 = r2(n3);
    if (i3 < 0) throw new s2(o2);
    return new l2(t20, i3);
  };
}
function NE() {
  if (PE) return CE;
  PE = 1;
  var t19 = ET(), e2 = function(t20) {
    return { size: t20, has: function() {
      return false;
    }, keys: function() {
      return { next: function() {
        return { done: true };
      } };
    } };
  }, n2 = function(t20) {
    return { size: t20, has: function() {
      return true;
    }, keys: function() {
      throw new Error("e");
    } };
  };
  return CE = function(r2, i2) {
    var o2 = t19("Set");
    try {
      new o2()[r2](e2(0));
      try {
        return new o2()[r2](e2(-1)), false;
      } catch (t20) {
        if (!i2) return true;
        try {
          return new o2()[r2](n2(-1 / 0)), false;
        } catch (t21) {
          var s2 = new o2();
          return s2.add(1), s2.add(2), i2(s2[r2](n2(1 / 0)));
        }
      }
    } catch (t20) {
      return false;
    }
  }, CE;
}
function VE() {
  if (SE) return EE;
  SE = 1;
  var t19 = oP(), e2 = function() {
    if (TE) return xE;
    TE = 1;
    var t20 = kE(), e3 = OE(), n2 = RE(), r2 = DE(), i2 = jE(), o2 = AE(), s2 = ME(), a2 = e3.has, u2 = e3.remove;
    return xE = function(e4) {
      var l2 = t20(this), c2 = i2(e4), h2 = n2(l2);
      return r2(l2) <= c2.size ? o2(l2, function(t21) {
        c2.includes(t21) && u2(h2, t21);
      }) : s2(c2.getIterator(), function(t21) {
        a2(l2, t21) && u2(h2, t21);
      }), h2;
    }, xE;
  }();
  return t19({ target: "Set", proto: true, real: true, forced: !NE()("difference", function(t20) {
    return 0 === t20.size;
  }) }, { difference: e2 }), EE;
}
var BE, IE, FE, zE = {};
function UE() {
  if (FE) return zE;
  FE = 1;
  var t19 = oP(), e2 = aw(), n2 = function() {
    if (IE) return BE;
    IE = 1;
    var t20 = kE(), e3 = OE(), n3 = DE(), r2 = jE(), i2 = AE(), o2 = ME(), s2 = e3.Set, a2 = e3.add, u2 = e3.has;
    return BE = function(e4) {
      var l2 = t20(this), c2 = r2(e4), h2 = new s2();
      return n3(l2) > c2.size ? o2(c2.getIterator(), function(t21) {
        u2(l2, t21) && a2(h2, t21);
      }) : i2(l2, function(t21) {
        c2.includes(t21) && a2(h2, t21);
      }), h2;
    }, BE;
  }();
  return t19({ target: "Set", proto: true, real: true, forced: !NE()("intersection", function(t20) {
    return 2 === t20.size && t20.has(1) && t20.has(2);
  }) || e2(function() {
    return "3,2" !== String(Array.from((/* @__PURE__ */ new Set([1, 2, 3])).intersection(/* @__PURE__ */ new Set([3, 2]))));
  }) }, { intersection: n2 }), zE;
}
var WE, HE, $E, YE = {};
function XE() {
  if ($E) return YE;
  $E = 1;
  var t19 = oP(), e2 = function() {
    if (HE) return WE;
    HE = 1;
    var t20 = kE(), e3 = OE().has, n2 = DE(), r2 = jE(), i2 = AE(), o2 = ME(), s2 = xS();
    return WE = function(a2) {
      var u2 = t20(this), l2 = r2(a2);
      if (n2(u2) <= l2.size) return false !== i2(u2, function(t21) {
        if (l2.includes(t21)) return false;
      }, true);
      var c2 = l2.getIterator();
      return false !== o2(c2, function(t21) {
        if (e3(u2, t21)) return s2(c2, "normal", false);
      });
    }, WE;
  }();
  return t19({ target: "Set", proto: true, real: true, forced: !NE()("isDisjointFrom", function(t20) {
    return !t20;
  }) }, { isDisjointFrom: e2 }), YE;
}
var qE, GE, KE, ZE = {};
function JE() {
  if (KE) return ZE;
  KE = 1;
  var t19 = oP(), e2 = function() {
    if (GE) return qE;
    GE = 1;
    var t20 = kE(), e3 = DE(), n2 = AE(), r2 = jE();
    return qE = function(i2) {
      var o2 = t20(this), s2 = r2(i2);
      return !(e3(o2) > s2.size) && false !== n2(o2, function(t21) {
        if (!s2.includes(t21)) return false;
      }, true);
    }, qE;
  }();
  return t19({ target: "Set", proto: true, real: true, forced: !NE()("isSubsetOf", function(t20) {
    return t20;
  }) }, { isSubsetOf: e2 }), ZE;
}
var QE, tO, eO, nO = {};
function rO() {
  if (eO) return nO;
  eO = 1;
  var t19 = oP(), e2 = function() {
    if (tO) return QE;
    tO = 1;
    var t20 = kE(), e3 = OE().has, n2 = DE(), r2 = jE(), i2 = ME(), o2 = xS();
    return QE = function(s2) {
      var a2 = t20(this), u2 = r2(s2);
      if (n2(a2) < u2.size) return false;
      var l2 = u2.getIterator();
      return false !== i2(l2, function(t21) {
        if (!e3(a2, t21)) return o2(l2, "normal", false);
      });
    }, QE;
  }();
  return t19({ target: "Set", proto: true, real: true, forced: !NE()("isSupersetOf", function(t20) {
    return !t20;
  }) }, { isSupersetOf: e2 }), nO;
}
var iO, oO, sO, aO = {};
function uO() {
  if (sO) return aO;
  sO = 1;
  var t19 = oP(), e2 = function() {
    if (oO) return iO;
    oO = 1;
    var t20 = kE(), e3 = OE(), n2 = RE(), r2 = jE(), i2 = ME(), o2 = e3.add, s2 = e3.has, a2 = e3.remove;
    return iO = function(e4) {
      var u2 = t20(this), l2 = r2(e4).getIterator(), c2 = n2(u2);
      return i2(l2, function(t21) {
        s2(u2, t21) ? a2(c2, t21) : o2(c2, t21);
      }), c2;
    }, iO;
  }();
  return t19({ target: "Set", proto: true, real: true, forced: !NE()("symmetricDifference") }, { symmetricDifference: e2 }), aO;
}
var lO, cO, hO, fO, dO, pO = {};
function mO() {
  if (hO) return pO;
  hO = 1;
  var t19 = oP(), e2 = function() {
    if (cO) return lO;
    cO = 1;
    var t20 = kE(), e3 = OE().add, n2 = RE(), r2 = jE(), i2 = ME();
    return lO = function(o2) {
      var s2 = t20(this), a2 = r2(o2).getIterator(), u2 = n2(s2);
      return i2(a2, function(t21) {
        e3(u2, t21);
      }), u2;
    }, lO;
  }();
  return t19({ target: "Set", proto: true, real: true, forced: !NE()("union") }, { union: e2 }), pO;
}
!function() {
  if (dO) return fO;
  dO = 1, mP(), US(), oE(), VE(), UE(), XE(), JE(), rO(), uO(), mO(), tE();
  var t19 = eE();
  fO = t19.Set;
}();
var vO, gO, yO, _O, bO, wO, xO, TO, CO, PO, SO, EO, OO, kO, MO, AO, RO = {}, DO = {};
function LO() {
  if (gO) return vO;
  gO = 1;
  var t19 = cw();
  return vO = Array.isArray || function(e2) {
    return "Array" === t19(e2);
  };
}
function jO() {
  if (_O) return yO;
  _O = 1;
  var t19 = lw(), e2 = aw(), n2 = rx(), r2 = _S(), i2 = ET(), o2 = mC(), s2 = function() {
  }, a2 = i2("Reflect", "construct"), u2 = /^\s*(?:class|function)\b/, l2 = t19(u2.exec), c2 = !u2.test(s2), h2 = function(t20) {
    if (!n2(t20)) return false;
    try {
      return a2(s2, [], t20), true;
    } catch (t21) {
      return false;
    }
  }, f2 = function(t20) {
    if (!n2(t20)) return false;
    switch (r2(t20)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        return false;
    }
    try {
      return c2 || !!l2(u2, o2(t20));
    } catch (t21) {
      return true;
    }
  };
  return f2.sham = true, yO = !a2 || e2(function() {
    var t20;
    return h2(h2.call) || !h2(Object) || !h2(function() {
      t20 = true;
    }) || t20;
  }) ? f2 : h2;
}
function NO() {
  if (wO) return bO;
  wO = 1;
  var t19 = LO(), e2 = jO(), n2 = ix(), r2 = nx()("species"), i2 = Array;
  return bO = function(o2) {
    var s2;
    return t19(o2) && (s2 = o2.constructor, (e2(s2) && (s2 === i2 || t19(s2.prototype)) || n2(s2) && null === (s2 = s2[r2])) && (s2 = void 0)), void 0 === s2 ? i2 : s2;
  }, bO;
}
function VO() {
  if (TO) return xO;
  TO = 1;
  var t19 = NO();
  return xO = function(e2, n2) {
    return new (t19(e2))(0 === n2 ? 0 : n2);
  };
}
function BO() {
  if (EO) return SO;
  EO = 1;
  var t19 = lw(), e2 = kS(), n2 = mS().getWeakData, r2 = CS(), i2 = ox(), o2 = fw(), s2 = ix(), a2 = TS(), u2 = function() {
    if (PO) return CO;
    PO = 1;
    var t20 = vS(), e3 = lw(), n3 = hw(), r3 = Kw(), i3 = FT(), o3 = VO(), s3 = e3([].push), a3 = function(e4) {
      var a4 = 1 === e4, u3 = 2 === e4, l3 = 3 === e4, c3 = 4 === e4, h3 = 6 === e4, f3 = 7 === e4, d3 = 5 === e4 || h3;
      return function(p3, m3, v3, g3) {
        for (var y3, _3, b2 = r3(p3), w2 = n3(b2), x2 = i3(w2), T2 = t20(m3, v3), C2 = 0, P2 = g3 || o3, S2 = a4 ? P2(p3, x2) : u3 || f3 ? P2(p3, 0) : void 0; x2 > C2; C2++) if ((d3 || C2 in w2) && (_3 = T2(y3 = w2[C2], C2, b2), e4)) if (a4) S2[C2] = _3;
        else if (_3) switch (e4) {
          case 3:
            return true;
          case 5:
            return y3;
          case 6:
            return C2;
          case 2:
            s3(S2, y3);
        }
        else switch (e4) {
          case 4:
            return false;
          case 7:
            s3(S2, y3);
        }
        return h3 ? -1 : l3 || c3 ? c3 : S2;
      };
    };
    return CO = { forEach: a3(0), map: a3(1), filter: a3(2), some: a3(3), every: a3(4), find: a3(5), findIndex: a3(6), filterReject: a3(7) };
  }(), l2 = Zw(), c2 = QT(), h2 = c2.set, f2 = c2.getterFor, d2 = u2.find, p2 = u2.findIndex, m2 = t19([].splice), v2 = 0, g2 = function(t20) {
    return t20.frozen || (t20.frozen = new y2());
  }, y2 = function() {
    this.entries = [];
  }, _2 = function(t20, e3) {
    return d2(t20.entries, function(t21) {
      return t21[0] === e3;
    });
  };
  return y2.prototype = { get: function(t20) {
    var e3 = _2(this, t20);
    if (e3) return e3[1];
  }, has: function(t20) {
    return !!_2(this, t20);
  }, set: function(t20, e3) {
    var n3 = _2(this, t20);
    n3 ? n3[1] = e3 : this.entries.push([t20, e3]);
  }, delete: function(t20) {
    var e3 = p2(this.entries, function(e4) {
      return e4[0] === t20;
    });
    return ~e3 && m2(this.entries, e3, 1), !!~e3;
  } }, SO = { getConstructor: function(t20, u3, c3, d3) {
    var p3 = t20(function(t21, e3) {
      r2(t21, m3), h2(t21, { type: u3, id: v2++, frozen: null }), o2(e3) || a2(e3, t21[d3], { that: t21, AS_ENTRIES: c3 });
    }), m3 = p3.prototype, y3 = f2(u3), _3 = function(t21, e3, r3) {
      var o3 = y3(t21), s3 = n2(i2(e3), true);
      return true === s3 ? g2(o3).set(e3, r3) : s3[o3.id] = r3, t21;
    };
    return e2(m3, { delete: function(t21) {
      var e3 = y3(this);
      if (!s2(t21)) return false;
      var r3 = n2(t21);
      return true === r3 ? g2(e3).delete(t21) : r3 && l2(r3, e3.id) && delete r3[e3.id];
    }, has: function(t21) {
      var e3 = y3(this);
      if (!s2(t21)) return false;
      var r3 = n2(t21);
      return true === r3 ? g2(e3).has(t21) : r3 && l2(r3, e3.id);
    } }), e2(m3, c3 ? { get: function(t21) {
      var e3 = y3(this);
      if (s2(t21)) {
        var r3 = n2(t21);
        if (true === r3) return g2(e3).get(t21);
        if (r3) return r3[e3.id];
      }
    }, set: function(t21, e3) {
      return _3(this, t21, e3);
    } } : { add: function(t21) {
      return _3(this, t21, true);
    } }), p3;
  } }, SO;
}
function IO() {
  return kO || (kO = 1, function() {
    if (OO) return DO;
    OO = 1;
    var t19, e2 = pS(), n2 = mw(), r2 = lw(), i2 = kS(), o2 = mS(), s2 = ES(), a2 = BO(), u2 = ix(), l2 = QT().enforce, c2 = aw(), h2 = KT(), f2 = Object, d2 = Array.isArray, p2 = f2.isExtensible, m2 = f2.isFrozen, v2 = f2.isSealed, g2 = f2.freeze, y2 = f2.seal, _2 = !n2.ActiveXObject && "ActiveXObject" in n2, b2 = function(t20) {
      return function() {
        return t20(this, arguments.length ? arguments[0] : void 0);
      };
    }, w2 = s2("WeakMap", b2, a2), x2 = w2.prototype, T2 = r2(x2.set);
    if (h2) if (_2) {
      t19 = a2.getConstructor(b2, "WeakMap", true), o2.enable();
      var C2 = r2(x2.delete), P2 = r2(x2.has), S2 = r2(x2.get);
      i2(x2, { delete: function(e3) {
        if (u2(e3) && !p2(e3)) {
          var n3 = l2(this);
          return n3.frozen || (n3.frozen = new t19()), C2(this, e3) || n3.frozen.delete(e3);
        }
        return C2(this, e3);
      }, has: function(e3) {
        if (u2(e3) && !p2(e3)) {
          var n3 = l2(this);
          return n3.frozen || (n3.frozen = new t19()), P2(this, e3) || n3.frozen.has(e3);
        }
        return P2(this, e3);
      }, get: function(e3) {
        if (u2(e3) && !p2(e3)) {
          var n3 = l2(this);
          return n3.frozen || (n3.frozen = new t19()), P2(this, e3) ? S2(this, e3) : n3.frozen.get(e3);
        }
        return S2(this, e3);
      }, set: function(e3, n3) {
        if (u2(e3) && !p2(e3)) {
          var r3 = l2(this);
          r3.frozen || (r3.frozen = new t19()), P2(this, e3) ? T2(this, e3, n3) : r3.frozen.set(e3, n3);
        } else T2(this, e3, n3);
        return this;
      } });
    } else e2 && c2(function() {
      var t20 = g2([]);
      return T2(new w2(), t20, 1), !m2(t20);
    }) && i2(x2, { set: function(t20, e3) {
      var n3;
      return d2(t20) && (m2(t20) ? n3 = g2 : v2(t20) && (n3 = y2)), T2(this, t20, e3), n3 && n3(t20), this;
    } });
  }()), RO;
}
!function() {
  if (AO) return MO;
  AO = 1, mP(), US(), IO();
  var t19 = eE();
  MO = t19.WeakMap;
}();
var FO, zO, UO, WO, HO, $O, YO, XO, qO, GO = {};
function KO() {
  if (zO) return FO;
  zO = 1;
  var t19 = ox(), e2 = xS();
  return FO = function(n2, r2, i2, o2) {
    try {
      return o2 ? r2(t19(i2)[0], i2[1]) : r2(i2);
    } catch (t20) {
      e2(n2, "throw", t20);
    }
  }, FO;
}
function ZO() {
  if (WO) return UO;
  WO = 1;
  var t19 = hx(), e2 = NT(), n2 = ZT();
  return UO = function(r2, i2, o2) {
    t19 ? e2.f(r2, i2, n2(0, o2)) : r2[i2] = o2;
  };
}
function JO() {
  if (YO) return GO;
  YO = 1;
  var t19 = oP(), e2 = function() {
    if ($O) return HO;
    $O = 1;
    var t20 = vS(), e3 = ST(), n2 = Kw(), r2 = KO(), i2 = gS(), o2 = jO(), s2 = FT(), a2 = ZO(), u2 = wS(), l2 = bS(), c2 = Array;
    return HO = function(h2) {
      var f2 = n2(h2), d2 = o2(this), p2 = arguments.length, m2 = p2 > 1 ? arguments[1] : void 0, v2 = void 0 !== m2;
      v2 && (m2 = t20(m2, p2 > 2 ? arguments[2] : void 0));
      var g2, y2, _2, b2, w2, x2, T2 = l2(f2), C2 = 0;
      if (!T2 || this === c2 && i2(T2)) for (g2 = s2(f2), y2 = d2 ? new this(g2) : c2(g2); g2 > C2; C2++) x2 = v2 ? m2(f2[C2], C2) : f2[C2], a2(y2, C2, x2);
      else for (y2 = d2 ? new this() : [], w2 = (b2 = u2(f2, T2)).next; !(_2 = e3(w2, b2)).done; C2++) x2 = v2 ? r2(b2, m2, [_2.value, C2], true) : _2.value, a2(y2, C2, x2);
      return y2.length = C2, y2;
    }, HO;
  }();
  return t19({ target: "Array", stat: true, forced: !PS()(function(t20) {
    Array.from(t20);
  }) }, { from: e2 }), GO;
}
!function() {
  if (qO) return XO;
  qO = 1, tE(), JO();
  var t19 = eE();
  XO = t19.Array.from;
}();
var QO, tk, ek, nk, rk, ik, ok = {};
function sk() {
  if (ek) return ok;
  ek = 1;
  var t19 = oP(), e2 = function() {
    if (tk) return QO;
    tk = 1;
    var t20 = hx(), e3 = lw(), n2 = ST(), r2 = aw(), i2 = HT(), o2 = eP(), s2 = iC(), a2 = Kw(), u2 = hw(), l2 = Object.assign, c2 = Object.defineProperty, h2 = e3([].concat);
    return QO = !l2 || r2(function() {
      if (t20 && 1 !== l2({ b: 1 }, l2(c2({}, "a", { enumerable: true, get: function() {
        c2(this, "b", { value: 3, enumerable: false });
      } }), { b: 2 })).b) return true;
      var e4 = {}, n3 = {}, r3 = Symbol("assign detection"), o3 = "abcdefghijklmnopqrst";
      return e4[r3] = 7, o3.split("").forEach(function(t21) {
        n3[t21] = t21;
      }), 7 !== l2({}, e4)[r3] || i2(l2({}, n3)).join("") !== o3;
    }) ? function(e4, r3) {
      for (var l3 = a2(e4), c3 = arguments.length, f2 = 1, d2 = o2.f, p2 = s2.f; c3 > f2; ) for (var m2, v2 = u2(arguments[f2++]), g2 = d2 ? h2(i2(v2), d2(v2)) : i2(v2), y2 = g2.length, _2 = 0; y2 > _2; ) m2 = g2[_2++], t20 && !n2(p2, v2, m2) || (l3[m2] = v2[m2]);
      return l3;
    } : l2, QO;
  }();
  return t19({ target: "Object", stat: true, arity: 2, forced: Object.assign !== e2 }, { assign: e2 }), ok;
}
!function() {
  if (rk) return nk;
  rk = 1, sk();
  var t19 = eE();
  nk = t19.Object.assign;
}();
var ak = /* @__PURE__ */ new WeakMap();
function uk() {
  if (void 0 !== ik) return ik;
  var t19 = false;
  try {
    var e2 = function() {
    }, n2 = Object.defineProperty({}, "passive", { enumerable: true, get: function() {
      return t19 = true, true;
    } });
    window.addEventListener("testPassive", e2, n2), window.removeEventListener("testPassive", e2, n2);
  } catch (t20) {
  }
  return ik = !!t19 && { passive: false };
}
function lk(t19) {
  var e2 = ak.get(t19) || [];
  return ak.set(t19, e2), function(t20, n2, r2) {
    function i2(t21) {
      t21.defaultPrevented || r2(t21);
    }
    n2.split(/\s+/g).forEach(function(n3) {
      e2.push({ elem: t20, eventName: n3, handler: i2 }), t20.addEventListener(n3, i2, uk());
    });
  };
}
function ck(t19) {
  var e2 = function(t20) {
    return t20.touches ? t20.touches[t20.touches.length - 1] : t20;
  }(t19);
  return { x: e2.clientX, y: e2.clientY };
}
function hk(t19, e2) {
  return void 0 === e2 && (e2 = []), e2.some(function(e3) {
    return t19 === e3;
  });
}
var fk = ["webkit", "moz", "ms", "o"], dk = new RegExp("^-(?!(?:" + fk.join("|") + ")-)");
function pk(t19, e2) {
  e2 = function(t20) {
    var e3 = {};
    return Object.keys(t20).forEach(function(n2) {
      if (dk.test(n2)) {
        var r2 = t20[n2];
        n2 = n2.replace(/^-/, ""), e3[n2] = r2, fk.forEach(function(t21) {
          e3["-" + t21 + "-" + n2] = r2;
        });
      } else e3[n2] = t20[n2];
    }), e3;
  }(e2), Object.keys(e2).forEach(function(n2) {
    var r2 = n2.replace(/^-/, "").replace(/-([a-z])/g, function(t20, e3) {
      return e3.toUpperCase();
    });
    t19.style[r2] = e2[n2];
  });
}
var mk = function() {
  function t19(t20) {
    this.velocityMultiplier = window.devicePixelRatio, this.updateTime = Date.now(), this.delta = { x: 0, y: 0 }, this.velocity = { x: 0, y: 0 }, this.lastPosition = { x: 0, y: 0 }, this.lastPosition = ck(t20);
  }
  return t19.prototype.update = function(t20) {
    var e2 = this, n2 = e2.velocity, r2 = e2.updateTime, i2 = e2.lastPosition, o2 = Date.now(), s2 = ck(t20), a2 = { x: -(s2.x - i2.x), y: -(s2.y - i2.y) }, u2 = o2 - r2 || 16.7, l2 = a2.x / u2 * 16.7, c2 = a2.y / u2 * 16.7;
    n2.x = l2 * this.velocityMultiplier, n2.y = c2 * this.velocityMultiplier, this.delta = a2, this.updateTime = o2, this.lastPosition = s2;
  }, t19;
}(), vk = function() {
  function t19() {
    this._touchList = {};
  }
  return Object.defineProperty(t19.prototype, "_primitiveValue", { get: function() {
    return { x: 0, y: 0 };
  }, enumerable: true, configurable: true }), t19.prototype.isActive = function() {
    return void 0 !== this._activeTouchID;
  }, t19.prototype.getDelta = function() {
    var t20 = this._getActiveTracker();
    return t20 ? iw({}, t20.delta) : this._primitiveValue;
  }, t19.prototype.getVelocity = function() {
    var t20 = this._getActiveTracker();
    return t20 ? iw({}, t20.velocity) : this._primitiveValue;
  }, t19.prototype.getEasingDistance = function(t20) {
    var e2 = 1 - t20, n2 = { x: 0, y: 0 }, r2 = this.getVelocity();
    return Object.keys(r2).forEach(function(t21) {
      for (var i2 = Math.abs(r2[t21]) <= 10 ? 0 : r2[t21]; 0 !== i2; ) n2[t21] += i2, i2 = i2 * e2 | 0;
    }), n2;
  }, t19.prototype.track = function(t20) {
    var e2 = this, n2 = t20.targetTouches;
    return Array.from(n2).forEach(function(t21) {
      e2._add(t21);
    }), this._touchList;
  }, t19.prototype.update = function(t20) {
    var e2 = this, n2 = t20.touches, r2 = t20.changedTouches;
    return Array.from(n2).forEach(function(t21) {
      e2._renew(t21);
    }), this._setActiveID(r2), this._touchList;
  }, t19.prototype.release = function(t20) {
    var e2 = this;
    delete this._activeTouchID, Array.from(t20.changedTouches).forEach(function(t21) {
      e2._delete(t21);
    });
  }, t19.prototype._add = function(t20) {
    this._has(t20) && this._delete(t20);
    var e2 = new mk(t20);
    this._touchList[t20.identifier] = e2;
  }, t19.prototype._renew = function(t20) {
    this._has(t20) && this._touchList[t20.identifier].update(t20);
  }, t19.prototype._delete = function(t20) {
    delete this._touchList[t20.identifier];
  }, t19.prototype._has = function(t20) {
    return this._touchList.hasOwnProperty(t20.identifier);
  }, t19.prototype._setActiveID = function(t20) {
    this._activeTouchID = t20[t20.length - 1].identifier;
  }, t19.prototype._getActiveTracker = function() {
    return this._touchList[this._activeTouchID];
  }, t19;
}();
function gk(t19, e2, n2) {
  return Math.max(e2, Math.min(n2, t19));
}
function yk(t19, e2, n2) {
  var r2;
  void 0 === e2 && (e2 = 0);
  var i2 = -1 / 0;
  return function() {
    for (var o2 = this, s2 = [], a2 = 0; a2 < arguments.length; a2++) s2[a2] = arguments[a2];
    if (n2) {
      var u2 = Date.now(), l2 = u2 - i2;
      i2 = u2, l2 >= e2 && t19.apply(this, s2);
    }
    clearTimeout(r2), r2 = setTimeout(function() {
      t19.apply(o2, s2);
    }, e2);
  };
}
function _k(t19, e2) {
  return void 0 === e2 && (e2 = 1 / 0), function(n2, r2) {
    var i2 = "_" + r2;
    Object.defineProperty(n2, r2, { get: function() {
      return this[i2];
    }, set: function(n3) {
      Object.defineProperty(this, i2, { value: gk(n3, t19, e2), enumerable: false, writable: true, configurable: true });
    }, enumerable: true, configurable: true });
  };
}
function bk(t19, e2) {
  var n2 = "_" + e2;
  Object.defineProperty(t19, e2, { get: function() {
    return this[n2];
  }, set: function(t20) {
    Object.defineProperty(this, n2, { value: !!t20, enumerable: false, writable: true, configurable: true });
  }, enumerable: true, configurable: true });
}
function wk() {
  for (var t19 = [], e2 = 0; e2 < arguments.length; e2++) t19[e2] = arguments[e2];
  return function(e3, n2, r2) {
    var i2 = r2.value;
    return { get: function() {
      return this.hasOwnProperty(n2) || Object.defineProperty(this, n2, { value: yk.apply(void 0, sw([i2], t19)) }), this[n2];
    } };
  };
}
var xk, Tk = function() {
  function t19(t20) {
    var e2 = this;
    void 0 === t20 && (t20 = {}), this.damping = 0.1, this.thumbMinSize = 20, this.renderByPixels = true, this.alwaysShowTracks = false, this.continuousScrolling = true, this.delegateTo = null, this.plugins = {}, Object.keys(t20).forEach(function(n2) {
      e2[n2] = t20[n2];
    });
  }
  return Object.defineProperty(t19.prototype, "wheelEventTarget", { get: function() {
    return this.delegateTo;
  }, set: function(t20) {
    console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."), this.delegateTo = t20;
  }, enumerable: true, configurable: true }), ow([_k(0, 1)], t19.prototype, "damping", void 0), ow([_k(0, 1 / 0)], t19.prototype, "thumbMinSize", void 0), ow([bk], t19.prototype, "renderByPixels", void 0), ow([bk], t19.prototype, "alwaysShowTracks", void 0), ow([bk], t19.prototype, "continuousScrolling", void 0), t19;
}();
!function(t19) {
  t19.X = "x", t19.Y = "y";
}(xk || (xk = {}));
var Ck = function() {
  function t19(t20, e2) {
    void 0 === e2 && (e2 = 0), this._direction = t20, this._minSize = e2, this.element = document.createElement("div"), this.displaySize = 0, this.realSize = 0, this.offset = 0, this.element.className = "scrollbar-thumb scrollbar-thumb-" + t20;
  }
  return t19.prototype.attachTo = function(t20) {
    t20.appendChild(this.element);
  }, t19.prototype.update = function(t20, e2, n2) {
    this.realSize = Math.min(e2 / n2, 1) * e2, this.displaySize = Math.max(this.realSize, this._minSize), this.offset = t20 / n2 * (e2 + (this.realSize - this.displaySize)), pk(this.element, this._getStyle());
  }, t19.prototype._getStyle = function() {
    switch (this._direction) {
      case xk.X:
        return { width: this.displaySize + "px", "-transform": "translate3d(" + this.offset + "px, 0, 0)" };
      case xk.Y:
        return { height: this.displaySize + "px", "-transform": "translate3d(0, " + this.offset + "px, 0)" };
      default:
        return null;
    }
  }, t19;
}(), Pk = function() {
  function t19(t20, e2) {
    void 0 === e2 && (e2 = 0), this.element = document.createElement("div"), this._isShown = false, this.element.className = "scrollbar-track scrollbar-track-" + t20, this.thumb = new Ck(t20, e2), this.thumb.attachTo(this.element);
  }
  return t19.prototype.attachTo = function(t20) {
    t20.appendChild(this.element);
  }, t19.prototype.show = function() {
    this._isShown || (this._isShown = true, this.element.classList.add("show"));
  }, t19.prototype.hide = function() {
    this._isShown && (this._isShown = false, this.element.classList.remove("show"));
  }, t19.prototype.update = function(t20, e2, n2) {
    pk(this.element, { display: n2 <= e2 ? "none" : "block" }), this.thumb.update(t20, e2, n2);
  }, t19;
}(), Sk = function() {
  function t19(t20) {
    this._scrollbar = t20;
    var e2 = t20.options.thumbMinSize;
    this.xAxis = new Pk(xk.X, e2), this.yAxis = new Pk(xk.Y, e2), this.xAxis.attachTo(t20.containerEl), this.yAxis.attachTo(t20.containerEl), t20.options.alwaysShowTracks && (this.xAxis.show(), this.yAxis.show());
  }
  return t19.prototype.update = function() {
    var t20 = this._scrollbar, e2 = t20.size, n2 = t20.offset;
    this.xAxis.update(n2.x, e2.container.width, e2.content.width), this.yAxis.update(n2.y, e2.container.height, e2.content.height);
  }, t19.prototype.autoHideOnIdle = function() {
    this._scrollbar.options.alwaysShowTracks || (this.xAxis.hide(), this.yAxis.hide());
  }, ow([wk(300)], t19.prototype, "autoHideOnIdle", null), t19;
}();
var Ek = /* @__PURE__ */ new WeakMap();
function Ok(t19) {
  return Math.pow(t19 - 1, 3) + 1;
}
var kk, Mk, Ak, Rk = function() {
  function t19(t20, e2) {
    var n2 = this.constructor;
    this.scrollbar = t20, this.name = n2.pluginName, this.options = iw(iw({}, n2.defaultOptions), e2);
  }
  return t19.prototype.onInit = function() {
  }, t19.prototype.onDestroy = function() {
  }, t19.prototype.onUpdate = function() {
  }, t19.prototype.onRender = function(t20) {
  }, t19.prototype.transformDelta = function(t20, e2) {
    return iw({}, t20);
  }, t19.pluginName = "", t19.defaultOptions = {}, t19;
}(), Dk = { order: /* @__PURE__ */ new Set(), constructors: {} };
function Lk() {
  for (var t19 = [], e2 = 0; e2 < arguments.length; e2++) t19[e2] = arguments[e2];
  t19.forEach(function(t20) {
    var e3 = t20.pluginName;
    if (!e3) throw new TypeError("plugin name is required");
    Dk.order.add(e3), Dk.constructors[e3] = t20;
  });
}
!function(t19) {
  t19[t19.TAB = 9] = "TAB", t19[t19.SPACE = 32] = "SPACE", t19[t19.PAGE_UP = 33] = "PAGE_UP", t19[t19.PAGE_DOWN = 34] = "PAGE_DOWN", t19[t19.END = 35] = "END", t19[t19.HOME = 36] = "HOME", t19[t19.LEFT = 37] = "LEFT", t19[t19.UP = 38] = "UP", t19[t19.RIGHT = 39] = "RIGHT", t19[t19.DOWN = 40] = "DOWN";
}(kk || (kk = {})), function(t19) {
  t19[t19.X = 0] = "X", t19[t19.Y = 1] = "Y";
}(Mk || (Mk = {}));
var jk = { STANDARD: 1, OTHERS: -3 }, Nk = [1, 28, 500], Vk = function(t19) {
  return Nk[t19] || Nk[0];
};
const Bk = Object.freeze(Object.defineProperty({ __proto__: null, keyboardHandler: function(t19) {
  var e2 = lk(t19), n2 = t19.containerEl;
  e2(n2, "keydown", function(e3) {
    var r2 = document.activeElement;
    if ((r2 === n2 || n2.contains(r2)) && !function(t20) {
      if ("INPUT" === t20.tagName || "SELECT" === t20.tagName || "TEXTAREA" === t20.tagName || t20.isContentEditable) return !t20.disabled;
      return false;
    }(r2)) {
      var i2 = function(t20, e4) {
        var n3 = t20.size, r3 = t20.limit, i3 = t20.offset;
        switch (e4) {
          case kk.TAB:
            return function(t21) {
              requestAnimationFrame(function() {
                t21.scrollIntoView(document.activeElement, { offsetTop: t21.size.container.height / 2, offsetLeft: t21.size.container.width / 2, onlyScrollIfNeeded: true });
              });
            }(t20);
          case kk.SPACE:
            return [0, 200];
          case kk.PAGE_UP:
            return [0, 40 - n3.container.height];
          case kk.PAGE_DOWN:
            return [0, n3.container.height - 40];
          case kk.END:
            return [0, r3.y - i3.y];
          case kk.HOME:
            return [0, -i3.y];
          case kk.LEFT:
            return [-40, 0];
          case kk.UP:
            return [0, -40];
          case kk.RIGHT:
            return [40, 0];
          case kk.DOWN:
            return [0, 40];
          default:
            return null;
        }
      }(t19, e3.keyCode || e3.which);
      if (i2) {
        var o2 = i2[0], s2 = i2[1];
        t19.addTransformableMomentum(o2, s2, e3, function(n3) {
          n3 ? e3.preventDefault() : (t19.containerEl.blur(), t19.parent && t19.parent.containerEl.focus());
        });
      }
    }
  });
}, mouseHandler: function(t19) {
  var e2, n2, r2, i2, o2, s2 = lk(t19), a2 = t19.containerEl, u2 = t19.track, l2 = u2.xAxis, c2 = u2.yAxis;
  function h2(e3, n3) {
    var r3 = t19.size, i3 = t19.limit, o3 = t19.offset;
    return e3 === Mk.X ? gk(n3 / (r3.container.width + (l2.thumb.realSize - l2.thumb.displaySize)) * r3.content.width, 0, i3.x) - o3.x : e3 === Mk.Y ? gk(n3 / (r3.container.height + (c2.thumb.realSize - c2.thumb.displaySize)) * r3.content.height, 0, i3.y) - o3.y : 0;
  }
  function f2(t20) {
    return hk(t20, [l2.element, l2.thumb.element]) ? Mk.X : hk(t20, [c2.element, c2.thumb.element]) ? Mk.Y : void 0;
  }
  s2(a2, "click", function(e3) {
    if (!n2 && hk(e3.target, [l2.element, c2.element])) {
      var r3 = e3.target, i3 = f2(r3), o3 = r3.getBoundingClientRect(), s3 = ck(e3);
      if (i3 === Mk.X) {
        var a3 = s3.x - o3.left - l2.thumb.displaySize / 2;
        t19.setMomentum(h2(i3, a3), 0);
      }
      if (i3 === Mk.Y) {
        a3 = s3.y - o3.top - c2.thumb.displaySize / 2;
        t19.setMomentum(0, h2(i3, a3));
      }
    }
  }), s2(a2, "mousedown", function(n3) {
    if (hk(n3.target, [l2.thumb.element, c2.thumb.element])) {
      e2 = true;
      var s3 = n3.target, u3 = ck(n3), h3 = s3.getBoundingClientRect();
      i2 = f2(s3), r2 = { x: u3.x - h3.left, y: u3.y - h3.top }, o2 = a2.getBoundingClientRect(), pk(t19.containerEl, { "-user-select": "none" });
    }
  }), s2(window, "mousemove", function(s3) {
    if (e2) {
      n2 = true;
      var a3 = ck(s3);
      if (i2 === Mk.X) {
        var u3 = a3.x - r2.x - o2.left;
        t19.setMomentum(h2(i2, u3), 0);
      }
      if (i2 === Mk.Y) {
        u3 = a3.y - r2.y - o2.top;
        t19.setMomentum(0, h2(i2, u3));
      }
    }
  }), s2(window, "mouseup blur", function() {
    e2 = n2 = false, pk(t19.containerEl, { "-user-select": "" });
  });
}, resizeHandler: function(t19) {
  lk(t19)(window, "resize", yk(t19.update.bind(t19), 300));
}, selectHandler: function(t19) {
  var e2, n2 = lk(t19), r2 = t19.containerEl, i2 = t19.contentEl, o2 = false, s2 = false;
  function a2(n3) {
    var r3 = n3.x, i3 = n3.y;
    if (r3 || i3) {
      var o3 = t19.offset, s3 = t19.limit;
      t19.setMomentum(gk(o3.x + r3, 0, s3.x) - o3.x, gk(o3.y + i3, 0, s3.y) - o3.y), e2 = requestAnimationFrame(function() {
        a2({ x: r3, y: i3 });
      });
    }
  }
  n2(window, "mousemove", function(n3) {
    if (o2) {
      cancelAnimationFrame(e2);
      var r3 = function(t20, e3) {
        var n4 = t20.bounding, r4 = n4.top, i3 = n4.right, o3 = n4.bottom, s3 = n4.left, a3 = ck(e3), u2 = a3.x, l2 = a3.y, c2 = { x: 0, y: 0 }, h2 = 20;
        if (0 === u2 && 0 === l2) return c2;
        u2 > i3 - h2 ? c2.x = u2 - i3 + h2 : u2 < s3 + h2 && (c2.x = u2 - s3 - h2);
        l2 > o3 - h2 ? c2.y = l2 - o3 + h2 : l2 < r4 + h2 && (c2.y = l2 - r4 - h2);
        return c2.x *= 2, c2.y *= 2, c2;
      }(t19, n3);
      a2(r3);
    }
  }), n2(i2, "contextmenu", function() {
    s2 = true, cancelAnimationFrame(e2), o2 = false;
  }), n2(i2, "mousedown", function() {
    s2 = false;
  }), n2(i2, "selectstart", function() {
    s2 || (cancelAnimationFrame(e2), o2 = true);
  }), n2(window, "mouseup blur", function() {
    cancelAnimationFrame(e2), o2 = false, s2 = false;
  }), n2(r2, "scroll", function(t20) {
    t20.preventDefault(), r2.scrollTop = r2.scrollLeft = 0;
  });
}, touchHandler: function(t19) {
  var e2, n2 = t19.options.delegateTo || t19.containerEl, r2 = new vk(), i2 = lk(t19), o2 = 0;
  i2(n2, "touchstart", function(n3) {
    r2.track(n3), t19.setMomentum(0, 0), 0 === o2 && (e2 = t19.options.damping, t19.options.damping = Math.max(e2, 0.5)), o2++;
  }), i2(n2, "touchmove", function(e3) {
    if (!Ak || Ak === t19) {
      r2.update(e3);
      var n3 = r2.getDelta(), i3 = n3.x, o3 = n3.y;
      t19.addTransformableMomentum(i3, o3, e3, function(n4) {
        n4 && e3.cancelable && (e3.preventDefault(), Ak = t19);
      });
    }
  }), i2(n2, "touchcancel touchend", function(n3) {
    var i3 = r2.getEasingDistance(e2);
    t19.addTransformableMomentum(i3.x, i3.y, n3), 0 === --o2 && (t19.options.damping = e2), r2.release(n3), Ak = null;
  });
}, wheelHandler: function(t19) {
  lk(t19)(t19.options.delegateTo || t19.containerEl, "onwheel" in window || document.implementation.hasFeature("Events.wheel", "3.0") ? "wheel" : "mousewheel", function(e2) {
    var n2 = function(t20) {
      if ("deltaX" in t20) {
        var e3 = Vk(t20.deltaMode);
        return { x: t20.deltaX / jk.STANDARD * e3, y: t20.deltaY / jk.STANDARD * e3 };
      }
      if ("wheelDeltaX" in t20) return { x: t20.wheelDeltaX / jk.OTHERS, y: t20.wheelDeltaY / jk.OTHERS };
      return { x: 0, y: t20.wheelDelta / jk.OTHERS };
    }(e2), r2 = n2.x, i2 = n2.y;
    t19.addTransformableMomentum(r2, i2, e2, function(t20) {
      t20 && e2.preventDefault();
    });
  });
} }, Symbol.toStringTag, { value: "Module" }));
var Ik = /* @__PURE__ */ new Map(), Fk = function() {
  function t19(t20, e2) {
    var n2 = this;
    this.offset = { x: 0, y: 0 }, this.limit = { x: 1 / 0, y: 1 / 0 }, this.bounding = { top: 0, right: 0, bottom: 0, left: 0 }, this._plugins = [], this._momentum = { x: 0, y: 0 }, this._listeners = /* @__PURE__ */ new Set(), this.containerEl = t20;
    var r2 = this.contentEl = document.createElement("div");
    this.options = new Tk(e2), t20.setAttribute("data-scrollbar", "true"), t20.setAttribute("tabindex", "-1"), pk(t20, { overflow: "hidden", outline: "none" }), window.navigator.msPointerEnabled && (t20.style.msTouchAction = "none"), r2.className = "scroll-content", Array.from(t20.childNodes).forEach(function(t21) {
      r2.appendChild(t21);
    }), t20.appendChild(r2), this.track = new Sk(this), this.size = this.getSize(), this._plugins = function(t21, e3) {
      return Array.from(Dk.order).filter(function(t22) {
        return false !== e3[t22];
      }).map(function(n3) {
        var r3 = new (0, Dk.constructors[n3])(t21, e3[n3]);
        return e3[n3] = r3.options, r3;
      });
    }(this, this.options.plugins);
    var i2 = t20.scrollLeft, o2 = t20.scrollTop;
    t20.scrollLeft = t20.scrollTop = 0, this.setPosition(i2, o2, { withoutCallbacks: true });
    var s2 = window.ResizeObserver;
    "function" == typeof s2 && (this._observer = new s2(function() {
      n2.update();
    }), this._observer.observe(r2)), Ik.set(t20, this), requestAnimationFrame(function() {
      n2._init();
    });
  }
  return Object.defineProperty(t19.prototype, "parent", { get: function() {
    for (var t20 = this.containerEl.parentElement; t20; ) {
      var e2 = Ik.get(t20);
      if (e2) return e2;
      t20 = t20.parentElement;
    }
    return null;
  }, enumerable: true, configurable: true }), Object.defineProperty(t19.prototype, "scrollTop", { get: function() {
    return this.offset.y;
  }, set: function(t20) {
    this.setPosition(this.scrollLeft, t20);
  }, enumerable: true, configurable: true }), Object.defineProperty(t19.prototype, "scrollLeft", { get: function() {
    return this.offset.x;
  }, set: function(t20) {
    this.setPosition(t20, this.scrollTop);
  }, enumerable: true, configurable: true }), t19.prototype.getSize = function() {
    return e2 = (t20 = this).containerEl, n2 = t20.contentEl, r2 = getComputedStyle(e2), i2 = ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"].map(function(t21) {
      return r2[t21] ? parseFloat(r2[t21]) : 0;
    }), o2 = i2[0] + i2[1], s2 = i2[2] + i2[3], { container: { width: e2.clientWidth, height: e2.clientHeight }, content: { width: n2.offsetWidth - n2.clientWidth + n2.scrollWidth + s2, height: n2.offsetHeight - n2.clientHeight + n2.scrollHeight + o2 } };
    var t20, e2, n2, r2, i2, o2, s2;
  }, t19.prototype.update = function() {
    var t20, e2, n2, r2, i2;
    e2 = (t20 = this).getSize(), n2 = { x: Math.max(e2.content.width - e2.container.width, 0), y: Math.max(e2.content.height - e2.container.height, 0) }, r2 = t20.containerEl.getBoundingClientRect(), i2 = { top: Math.max(r2.top, 0), right: Math.min(r2.right, window.innerWidth), bottom: Math.min(r2.bottom, window.innerHeight), left: Math.max(r2.left, 0) }, t20.size = e2, t20.limit = n2, t20.bounding = i2, t20.track.update(), t20.setPosition(), this._plugins.forEach(function(t21) {
      t21.onUpdate();
    });
  }, t19.prototype.isVisible = function(t20) {
    return function(t21, e2) {
      var n2 = t21.bounding, r2 = e2.getBoundingClientRect(), i2 = Math.max(n2.top, r2.top), o2 = Math.max(n2.left, r2.left), s2 = Math.min(n2.right, r2.right);
      return i2 < Math.min(n2.bottom, r2.bottom) && o2 < s2;
    }(this, t20);
  }, t19.prototype.setPosition = function(t20, e2, n2) {
    var r2 = this;
    void 0 === t20 && (t20 = this.offset.x), void 0 === e2 && (e2 = this.offset.y), void 0 === n2 && (n2 = {});
    var i2 = function(t21, e3, n3) {
      var r3 = t21.options, i3 = t21.offset, o2 = t21.limit, s2 = t21.track, a2 = t21.contentEl;
      return r3.renderByPixels && (e3 = Math.round(e3), n3 = Math.round(n3)), e3 = gk(e3, 0, o2.x), n3 = gk(n3, 0, o2.y), e3 !== i3.x && s2.xAxis.show(), n3 !== i3.y && s2.yAxis.show(), r3.alwaysShowTracks || s2.autoHideOnIdle(), e3 === i3.x && n3 === i3.y ? null : (i3.x = e3, i3.y = n3, pk(a2, { "-transform": "translate3d(" + -e3 + "px, " + -n3 + "px, 0)" }), s2.update(), { offset: iw({}, i3), limit: iw({}, o2) });
    }(this, t20, e2);
    i2 && !n2.withoutCallbacks && this._listeners.forEach(function(t21) {
      t21.call(r2, i2);
    });
  }, t19.prototype.scrollTo = function(t20, e2, n2, r2) {
    void 0 === t20 && (t20 = this.offset.x), void 0 === e2 && (e2 = this.offset.y), void 0 === n2 && (n2 = 0), void 0 === r2 && (r2 = {}), function(t21, e3, n3, r3, i2) {
      void 0 === r3 && (r3 = 0);
      var o2 = void 0 === i2 ? {} : i2, s2 = o2.easing, a2 = void 0 === s2 ? Ok : s2, u2 = o2.callback, l2 = t21.options, c2 = t21.offset, h2 = t21.limit;
      l2.renderByPixels && (e3 = Math.round(e3), n3 = Math.round(n3));
      var f2 = c2.x, d2 = c2.y, p2 = gk(e3, 0, h2.x) - f2, m2 = gk(n3, 0, h2.y) - d2, v2 = Date.now();
      cancelAnimationFrame(Ek.get(t21)), function e4() {
        var n4 = Date.now() - v2, i3 = r3 ? a2(Math.min(n4 / r3, 1)) : 1;
        if (t21.setPosition(f2 + p2 * i3, d2 + m2 * i3), n4 >= r3) "function" == typeof u2 && u2.call(t21);
        else {
          var o3 = requestAnimationFrame(e4);
          Ek.set(t21, o3);
        }
      }();
    }(this, t20, e2, n2, r2);
  }, t19.prototype.scrollIntoView = function(t20, e2) {
    void 0 === e2 && (e2 = {}), function(t21, e3, n2) {
      var r2 = void 0 === n2 ? {} : n2, i2 = r2.alignToTop, o2 = void 0 === i2 || i2, s2 = r2.onlyScrollIfNeeded, a2 = void 0 !== s2 && s2, u2 = r2.offsetTop, l2 = void 0 === u2 ? 0 : u2, c2 = r2.offsetLeft, h2 = void 0 === c2 ? 0 : c2, f2 = r2.offsetBottom, d2 = void 0 === f2 ? 0 : f2, p2 = t21.containerEl, m2 = t21.bounding, v2 = t21.offset, g2 = t21.limit;
      if (e3 && p2.contains(e3)) {
        var y2 = e3.getBoundingClientRect();
        if (!a2 || !t21.isVisible(e3)) {
          var _2 = o2 ? y2.top - m2.top - l2 : y2.bottom - m2.bottom + d2;
          t21.setMomentum(y2.left - m2.left - h2, gk(_2, -v2.y, g2.y - v2.y));
        }
      }
    }(this, t20, e2);
  }, t19.prototype.addListener = function(t20) {
    if ("function" != typeof t20) throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");
    this._listeners.add(t20);
  }, t19.prototype.removeListener = function(t20) {
    this._listeners.delete(t20);
  }, t19.prototype.addTransformableMomentum = function(t20, e2, n2, r2) {
    this._updateDebounced();
    var i2 = this._plugins.reduce(function(t21, e3) {
      return e3.transformDelta(t21, n2) || t21;
    }, { x: t20, y: e2 }), o2 = !this._shouldPropagateMomentum(i2.x, i2.y);
    o2 && this.addMomentum(i2.x, i2.y), r2 && r2.call(this, o2);
  }, t19.prototype.addMomentum = function(t20, e2) {
    this.setMomentum(this._momentum.x + t20, this._momentum.y + e2);
  }, t19.prototype.setMomentum = function(t20, e2) {
    0 === this.limit.x && (t20 = 0), 0 === this.limit.y && (e2 = 0), this.options.renderByPixels && (t20 = Math.round(t20), e2 = Math.round(e2)), this._momentum.x = t20, this._momentum.y = e2;
  }, t19.prototype.updatePluginOptions = function(t20, e2) {
    this._plugins.forEach(function(n2) {
      n2.name === t20 && Object.assign(n2.options, e2);
    });
  }, t19.prototype.destroy = function() {
    var t20, e2, n2 = this.containerEl, r2 = this.contentEl;
    t20 = this, (e2 = ak.get(t20)) && (e2.forEach(function(t21) {
      var e3 = t21.elem, n3 = t21.eventName, r3 = t21.handler;
      e3.removeEventListener(n3, r3, uk());
    }), ak.delete(t20)), this._listeners.clear(), this.setMomentum(0, 0), cancelAnimationFrame(this._renderID), this._observer && this._observer.disconnect(), Ik.delete(this.containerEl);
    for (var i2 = Array.from(r2.childNodes); n2.firstChild; ) n2.removeChild(n2.firstChild);
    i2.forEach(function(t21) {
      n2.appendChild(t21);
    }), pk(n2, { overflow: "" }), n2.scrollTop = this.scrollTop, n2.scrollLeft = this.scrollLeft, this._plugins.forEach(function(t21) {
      t21.onDestroy();
    }), this._plugins.length = 0;
  }, t19.prototype._init = function() {
    var t20 = this;
    this.update(), Object.keys(Bk).forEach(function(e2) {
      Bk[e2](t20);
    }), this._plugins.forEach(function(t21) {
      t21.onInit();
    }), this._render();
  }, t19.prototype._updateDebounced = function() {
    this.update();
  }, t19.prototype._shouldPropagateMomentum = function(t20, e2) {
    void 0 === t20 && (t20 = 0), void 0 === e2 && (e2 = 0);
    var n2 = this, r2 = n2.options, i2 = n2.offset, o2 = n2.limit;
    if (!r2.continuousScrolling) return false;
    0 === o2.x && 0 === o2.y && this._updateDebounced();
    var s2 = gk(t20 + i2.x, 0, o2.x), a2 = gk(e2 + i2.y, 0, o2.y), u2 = true;
    return u2 = (u2 = (u2 = u2 && s2 === i2.x) && a2 === i2.y) && (i2.x === o2.x || 0 === i2.x || i2.y === o2.y || 0 === i2.y);
  }, t19.prototype._render = function() {
    var t20 = this._momentum;
    if (t20.x || t20.y) {
      var e2 = this._nextTick("x"), n2 = this._nextTick("y");
      t20.x = e2.momentum, t20.y = n2.momentum, this.setPosition(e2.position, n2.position);
    }
    var r2 = iw({}, this._momentum);
    this._plugins.forEach(function(t21) {
      t21.onRender(r2);
    }), this._renderID = requestAnimationFrame(this._render.bind(this));
  }, t19.prototype._nextTick = function(t20) {
    var e2 = this, n2 = e2.options, r2 = e2.offset, i2 = e2._momentum, o2 = r2[t20], s2 = i2[t20];
    if (Math.abs(s2) <= 0.1) return { momentum: 0, position: o2 + s2 };
    var a2 = s2 * (1 - n2.damping);
    return n2.renderByPixels && (a2 |= 0), { momentum: a2, position: o2 + s2 - a2 };
  }, ow([wk(100, true)], t19.prototype, "_updateDebounced", null), t19;
}(), zk = "smooth-scrollbar-style", Uk = false;
function Wk() {
  if (!Uk && "undefined" != typeof window) {
    var t19 = document.createElement("style");
    t19.id = zk, t19.textContent = "\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  display: flow-root;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: rgba(222, 222, 222, .75);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: rgba(0, 0, 0, .5);\n  border-radius: 4px;\n}\n", document.head && document.head.appendChild(t19), Uk = true;
  }
}
var Hk = function(t19) {
  function e2() {
    return null !== t19 && t19.apply(this, arguments) || this;
  }
  return function(t20, e3) {
    function n2() {
      this.constructor = t20;
    }
    Ib(t20, e3), t20.prototype = null === e3 ? Object.create(e3) : (n2.prototype = e3.prototype, new n2());
  }(e2, t19), e2.init = function(t20, e3) {
    if (!t20 || 1 !== t20.nodeType) throw new TypeError("expect element to be DOM Element, but got " + t20);
    return Wk(), Ik.has(t20) ? Ik.get(t20) : new Fk(t20, e3);
  }, e2.initAll = function(t20) {
    return Array.from(document.querySelectorAll("[data-scrollbar]"), function(n2) {
      return e2.init(n2, t20);
    });
  }, e2.has = function(t20) {
    return Ik.has(t20);
  }, e2.get = function(t20) {
    return Ik.get(t20);
  }, e2.getAll = function() {
    return Array.from(Ik.values());
  }, e2.destroy = function(t20) {
    var e3 = Ik.get(t20);
    e3 && e3.destroy();
  }, e2.destroyAll = function() {
    Ik.forEach(function(t20) {
      t20.destroy();
    });
  }, e2.use = function() {
    for (var t20 = [], e3 = 0; e3 < arguments.length; e3++) t20[e3] = arguments[e3];
    return Lk.apply(void 0, t20);
  }, e2.attachStyle = function() {
    return Wk();
  }, e2.detachStyle = function() {
    return function() {
      if (Uk && "undefined" != typeof window) {
        var t20 = document.getElementById(zk);
        t20 && t20.parentNode && (t20.parentNode.removeChild(t20), Uk = false);
      }
    }();
  }, e2.version = "8.8.4", e2.ScrollbarPlugin = Rk, e2;
}(Fk), $k = Qi.registerPlugin(xs) || Qi;
function Yk({ children: t19 }) {
  const e2 = ct(null), { width: n2, height: r2, isLargeScreen: i2 } = Fs();
  return ks(() => {
    var _a3;
    let t20, o2;
    "scrollRestoration" in window.history && (window.history.scrollRestoration = "manual");
    const s2 = () => {
      var n3;
      e2.current && (t20 = Hk.init(e2.current, { damping: 0.06, alwaysShowTrack: true, renderByPixels: true, delegateTo: document }), n3 = t20, js.set(Ns, n3), Mc.scrollerProxy(e2.current, { scrollTop(e3) {
        return arguments.length && (t20.scrollTop = e3), t20.scrollTop;
      }, getBoundingClientRect: () => ({ top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }) }), t20.addListener(Mc.update), Mc.defaults({ scroller: e2.current }), Mc.refresh());
    };
    return o2 = new ResizeObserver(() => {
      Mc.refresh();
    }), e2.current && o2.observe(e2.current), (n2 && r2 || i2) && s2(), document.body.classList.contains("overlay-opened") && ((_a3 = Vs()) == null ? void 0 : _a3.updatePluginOptions("overflow", { open: true })), () => {
      Vs() && (Vs().destroy(), js.delete(Ns)), Mc.killAll(), o2 && o2.disconnect();
    };
  }, { dependencies: [n2, r2, i2], scope: e2, revertOnUpdate: true }), $("div", { id: "scroll-wrapper", style: { position: n2 && r2 ? "fixed" : "static", height: "100%" }, ref: e2, children: t19 });
}
$k.core.Tween, $k.registerPlugin(Mc, ks);
function Xk() {
  return $("footer", { children: [$("div", { className: "container", children: $("div", { className: "row gap-75 s-between", children: [$("div", { children: [$(mb, { className: "logo", children: $("img", { className: "icon", src: wb, alt: "logo" }) }), $("h5", { className: "static capitalize", children: "About the company" }), $("p", { className: "to-middle text-white capitalize", children: "MasBo is an architectural group working in the field of architecture and urban planning. The company was founded in 2006. We offer a full range of services from interior design, individual cottages to the design and construction of residential complexes." }), $("div", { className: "row gap-25 wrap", children: [$("p", { className: "to-middle text-white capitalize", children: [$("span", { className: "font-bold", children: " Address: " }), " Ukraine, Kyiv region, 08200 Irpen,", $("br", {}), " Stelmakh street 9a, office 206"] }), $("p", { className: "to-middle text-white capitalize", children: [$("span", { className: "font-bold", children: "Tel:" }), " +3 (096) 029-81-18, +3 (063) 023-81-18", $("br", {}), $("span", { className: "font-bold", children: "Email:" }), " office@masbo.com.ua"] })] })] }), $("div", { className: "line" }), $("div", { className: "row wrap s-between gap-50", children: [$("div", { children: [$("h5", { children: "Popular" }), $("ul", { children: [$("li", { children: [" ", $(mb, { children: "  Arhitexture" }), " "] }), $("li", { children: ["   ", $(mb, { children: "Modern design" }), " "] }), $("li", { children: ["   ", $(mb, { children: "Our Services" }), " "] }), $("li", { children: ["   ", $(mb, { children: "How we work" }), " "] }), $("li", { children: ["   ", $(mb, { children: "Order the project" }), " "] })] })] }), $("div", { children: [$("h5", { children: "Hot links" }), $("ul", { children: [$("li", { children: ["   ", $(mb, { children: "       Our team" }), " "] }), $("li", { children: ["   ", $(mb, { children: "Our Services" }), " "] }), $("li", { children: ["   ", $(mb, { children: "   How to order " }), " "] }), $("li", { children: ["   ", $(mb, { children: "Last project" }), " "] })] })] }), $("div", { className: "footer-socials", children: [$("h5", { children: "Social" }), $("ul", { children: [$("li", { className: "row center-y gap-15", children: [$("a", { href: "#", children: $(ke, {}) }), $("h4", { children: "  Facebook" })] }), $("li", { className: "row center-y gap-15", children: [$("a", { href: "#", children: $(Oe, {}) }), $("h4", { children: "   Instagram" })] }), $("li", { className: "row center-y gap-15", children: [$("a", { href: "#", children: [" ", $(Me, {})] }), $("h4", { children: "  Twiter" })] }), $("li", { className: "row center-y gap-15", children: [$("a", { href: "#", children: $(Re, {}) }), $("h4", { children: "   Youtube" })] }), $("li", { className: "row center-y gap-15", children: [$("a", { href: "#", children: [" ", $(Ae, {})] }), $("h4", { children: "    Telegram" })] })] })] })] })] }) }), $("div", { className: "container", children: $(Tb, {}) }), $("div", { className: "label center-gr", children: $("span", { className: "fs-12 text-white text-center", children: ["© ", (/* @__PURE__ */ new Date()).getFullYear(), " .All Rioghts Reserved."] }) })] });
}
function qk() {
  return $(Iy, { id: "about-page" });
}
function Gk() {
  const t19 = M_();
  return $(w, { children: [$(Bb, {}), $(Is, { children: $(Yk, { children: [$("main", { children: $(Qc, { mode: "wait", initial: false, children: $(Y_, { location: t19, children: [$(H_, { path: "/", element: $(Fy, {}) }), $(H_, { path: "about", element: $(qk, {}) })] }, t19.pathname) }) }), $(Xk, {})] }) })] });
}
Hk.use((_a2 = class extends Rk {
  transformDelta(t19) {
    return this.options.open ? { x: 0, y: 0 } : t19;
  }
}, __publicField(_a2, "pluginName", "overflow"), __publicField(_a2, "defaultOptions", { open: false }), _a2)), F($(db, { basename: "/masbo_website", children: $(Gk, {}) }), document.getElementById("app"));
