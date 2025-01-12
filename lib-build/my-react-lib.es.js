import fr from "react";
function Dr(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var Te = { exports: {} }, me = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xe;
function Mr() {
  if (Xe) return me;
  Xe = 1;
  var u = fr, D = Symbol.for("react.element"), I = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, C = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(d, b, S) {
    var c, E = {}, k = null, F = null;
    S !== void 0 && (k = "" + S), b.key !== void 0 && (k = "" + b.key), b.ref !== void 0 && (F = b.ref);
    for (c in b) l.call(b, c) && !f.hasOwnProperty(c) && (E[c] = b[c]);
    if (d && d.defaultProps) for (c in b = d.defaultProps, b) E[c] === void 0 && (E[c] = b[c]);
    return { $$typeof: D, type: d, key: k, ref: F, props: E, _owner: C.current };
  }
  return me.Fragment = I, me.jsx = w, me.jsxs = w, me;
}
var Ee = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He;
function Fr() {
  return He || (He = 1, process.env.NODE_ENV !== "production" && function() {
    var u = fr, D = Symbol.for("react.element"), I = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), d = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), z = Symbol.iterator, M = "@@iterator";
    function N(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = z && e[z] || e[M];
      return typeof r == "function" ? r : null;
    }
    var U = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Y(e) {
      {
        for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
          a[s - 1] = arguments[s];
        V("error", e, a);
      }
    }
    function V(e, r, a) {
      {
        var s = U.ReactDebugCurrentFrame, x = s.getStackAddendum();
        x !== "" && (r += "%s", a = a.concat([x]));
        var $ = a.map(function(O) {
          return String(O);
        });
        $.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, $);
      }
    }
    var q = !1, o = !1, re = !1, pe = !1, ye = !1, ie;
    ie = Symbol.for("react.module.reference");
    function be(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === f || ye || e === C || e === S || e === c || pe || e === F || q || o || re || typeof e == "object" && e !== null && (e.$$typeof === k || e.$$typeof === E || e.$$typeof === w || e.$$typeof === d || e.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function ue(e, r, a) {
      var s = e.displayName;
      if (s)
        return s;
      var x = r.displayName || r.name || "";
      return x !== "" ? a + "(" + x + ")" : a;
    }
    function se(e) {
      return e.displayName || "Context";
    }
    function H(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && Y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case l:
          return "Fragment";
        case I:
          return "Portal";
        case f:
          return "Profiler";
        case C:
          return "StrictMode";
        case S:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            var r = e;
            return se(r) + ".Consumer";
          case w:
            var a = e;
            return se(a._context) + ".Provider";
          case b:
            return ue(e, e.render, "ForwardRef");
          case E:
            var s = e.displayName || null;
            return s !== null ? s : H(e.type) || "Memo";
          case k: {
            var x = e, $ = x._payload, O = x._init;
            try {
              return H(O($));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, te = 0, X, ee, ne, fe, t, i, m;
    function h() {
    }
    h.__reactDisabledLog = !0;
    function v() {
      {
        if (te === 0) {
          X = console.log, ee = console.info, ne = console.warn, fe = console.error, t = console.group, i = console.groupCollapsed, m = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: h,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        te++;
      }
    }
    function R() {
      {
        if (te--, te === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, e, {
              value: X
            }),
            info: K({}, e, {
              value: ee
            }),
            warn: K({}, e, {
              value: ne
            }),
            error: K({}, e, {
              value: fe
            }),
            group: K({}, e, {
              value: t
            }),
            groupCollapsed: K({}, e, {
              value: i
            }),
            groupEnd: K({}, e, {
              value: m
            })
          });
        }
        te < 0 && Y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var p = U.ReactCurrentDispatcher, y;
    function g(e, r, a) {
      {
        if (y === void 0)
          try {
            throw Error();
          } catch (x) {
            var s = x.stack.trim().match(/\n( *(at )?)/);
            y = s && s[1] || "";
          }
        return `
` + y + e;
      }
    }
    var P = !1, T;
    {
      var B = typeof WeakMap == "function" ? WeakMap : Map;
      T = new B();
    }
    function n(e, r) {
      if (!e || P)
        return "";
      {
        var a = T.get(e);
        if (a !== void 0)
          return a;
      }
      var s;
      P = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $;
      $ = p.current, p.current = null, v();
      try {
        if (r) {
          var O = function() {
            throw Error();
          };
          if (Object.defineProperty(O.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(O, []);
            } catch (G) {
              s = G;
            }
            Reflect.construct(e, [], O);
          } else {
            try {
              O.call();
            } catch (G) {
              s = G;
            }
            e.call(O.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (G) {
            s = G;
          }
          e();
        }
      } catch (G) {
        if (G && s && typeof G.stack == "string") {
          for (var _ = G.stack.split(`
`), J = s.stack.split(`
`), W = _.length - 1, L = J.length - 1; W >= 1 && L >= 0 && _[W] !== J[L]; )
            L--;
          for (; W >= 1 && L >= 0; W--, L--)
            if (_[W] !== J[L]) {
              if (W !== 1 || L !== 1)
                do
                  if (W--, L--, L < 0 || _[W] !== J[L]) {
                    var Q = `
` + _[W].replace(" at new ", " at ");
                    return e.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", e.displayName)), typeof e == "function" && T.set(e, Q), Q;
                  }
                while (W >= 1 && L >= 0);
              break;
            }
        }
      } finally {
        P = !1, p.current = $, R(), Error.prepareStackTrace = x;
      }
      var de = e ? e.displayName || e.name : "", oe = de ? g(de) : "";
      return typeof e == "function" && T.set(e, oe), oe;
    }
    function Z(e, r, a) {
      return n(e, !1);
    }
    function ce(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ae(e, r, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return n(e, ce(e));
      if (typeof e == "string")
        return g(e);
      switch (e) {
        case S:
          return g("Suspense");
        case c:
          return g("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return Z(e.render);
          case E:
            return ae(e.type, r, a);
          case k: {
            var s = e, x = s._payload, $ = s._init;
            try {
              return ae($(x), r, a);
            } catch {
            }
          }
        }
      return "";
    }
    var he = Object.prototype.hasOwnProperty, Me = {}, Fe = U.ReactDebugCurrentFrame;
    function ge(e) {
      if (e) {
        var r = e._owner, a = ae(e.type, e._source, r ? r.type : null);
        Fe.setExtraStackFrame(a);
      } else
        Fe.setExtraStackFrame(null);
    }
    function vr(e, r, a, s, x) {
      {
        var $ = Function.call.bind(he);
        for (var O in e)
          if ($(e, O)) {
            var _ = void 0;
            try {
              if (typeof e[O] != "function") {
                var J = Error((s || "React class") + ": " + a + " type `" + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[O] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw J.name = "Invariant Violation", J;
              }
              _ = e[O](r, O, s, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (W) {
              _ = W;
            }
            _ && !(_ instanceof Error) && (ge(x), Y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", a, O, typeof _), ge(null)), _ instanceof Error && !(_.message in Me) && (Me[_.message] = !0, ge(x), Y("Failed %s type: %s", a, _.message), ge(null));
          }
      }
    }
    var pr = Array.isArray;
    function Oe(e) {
      return pr(e);
    }
    function yr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function br(e) {
      try {
        return Ye(e), !1;
      } catch {
        return !0;
      }
    }
    function Ye(e) {
      return "" + e;
    }
    function We(e) {
      if (br(e))
        return Y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", yr(e)), Ye(e);
    }
    var qe = U.ReactCurrentOwner, hr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Le, Ue;
    function mr(e) {
      if (he.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Er(e) {
      if (he.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function gr(e, r) {
      typeof e.ref == "string" && qe.current;
    }
    function Tr(e, r) {
      {
        var a = function() {
          Le || (Le = !0, Y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function _r(e, r) {
      {
        var a = function() {
          Ue || (Ue = !0, Y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var Rr = function(e, r, a, s, x, $, O) {
      var _ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: D,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: a,
        props: O,
        // Record the component responsible for creating this element.
        _owner: $
      };
      return _._store = {}, Object.defineProperty(_._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(_, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.defineProperty(_, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.freeze && (Object.freeze(_.props), Object.freeze(_)), _;
    };
    function Or(e, r, a, s, x) {
      {
        var $, O = {}, _ = null, J = null;
        a !== void 0 && (We(a), _ = "" + a), Er(r) && (We(r.key), _ = "" + r.key), mr(r) && (J = r.ref, gr(r, x));
        for ($ in r)
          he.call(r, $) && !hr.hasOwnProperty($) && (O[$] = r[$]);
        if (e && e.defaultProps) {
          var W = e.defaultProps;
          for ($ in W)
            O[$] === void 0 && (O[$] = W[$]);
        }
        if (_ || J) {
          var L = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          _ && Tr(O, L), J && _r(O, L);
        }
        return Rr(e, _, J, x, s, qe.current, O);
      }
    }
    var Se = U.ReactCurrentOwner, Ve = U.ReactDebugCurrentFrame;
    function le(e) {
      if (e) {
        var r = e._owner, a = ae(e.type, e._source, r ? r.type : null);
        Ve.setExtraStackFrame(a);
      } else
        Ve.setExtraStackFrame(null);
    }
    var Pe;
    Pe = !1;
    function Ce(e) {
      return typeof e == "object" && e !== null && e.$$typeof === D;
    }
    function Ne() {
      {
        if (Se.current) {
          var e = H(Se.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Sr(e) {
      return "";
    }
    var ze = {};
    function Pr(e) {
      {
        var r = Ne();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
    }
    function Be(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = Pr(r);
        if (ze[a])
          return;
        ze[a] = !0;
        var s = "";
        e && e._owner && e._owner !== Se.current && (s = " It was passed a child from " + H(e._owner.type) + "."), le(e), Y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, s), le(null);
      }
    }
    function Je(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Oe(e))
          for (var a = 0; a < e.length; a++) {
            var s = e[a];
            Ce(s) && Be(s, r);
          }
        else if (Ce(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var x = N(e);
          if (typeof x == "function" && x !== e.entries)
            for (var $ = x.call(e), O; !(O = $.next()).done; )
              Ce(O.value) && Be(O.value, r);
        }
      }
    }
    function Cr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var a;
        if (typeof r == "function")
          a = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          a = r.propTypes;
        else
          return;
        if (a) {
          var s = H(r);
          vr(a, e.props, "prop", s, e);
        } else if (r.PropTypes !== void 0 && !Pe) {
          Pe = !0;
          var x = H(r);
          Y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && Y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function wr(e) {
      {
        for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
          var s = r[a];
          if (s !== "children" && s !== "key") {
            le(e), Y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), le(null);
            break;
          }
        }
        e.ref !== null && (le(e), Y("Invalid attribute `ref` supplied to `React.Fragment`."), le(null));
      }
    }
    var Ke = {};
    function Ge(e, r, a, s, x, $) {
      {
        var O = be(e);
        if (!O) {
          var _ = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var J = Sr();
          J ? _ += J : _ += Ne();
          var W;
          e === null ? W = "null" : Oe(e) ? W = "array" : e !== void 0 && e.$$typeof === D ? (W = "<" + (H(e.type) || "Unknown") + " />", _ = " Did you accidentally export a JSX literal instead of a component?") : W = typeof e, Y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", W, _);
        }
        var L = Or(e, r, a, x, $);
        if (L == null)
          return L;
        if (O) {
          var Q = r.children;
          if (Q !== void 0)
            if (s)
              if (Oe(Q)) {
                for (var de = 0; de < Q.length; de++)
                  Je(Q[de], e);
                Object.freeze && Object.freeze(Q);
              } else
                Y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Je(Q, e);
        }
        if (he.call(r, "key")) {
          var oe = H(e), G = Object.keys(r).filter(function($r) {
            return $r !== "key";
          }), we = G.length > 0 ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ke[oe + we]) {
            var kr = G.length > 0 ? "{" + G.join(": ..., ") + ": ...}" : "{}";
            Y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, we, oe, kr, oe), Ke[oe + we] = !0;
          }
        }
        return e === l ? wr(L) : Cr(L), L;
      }
    }
    function xr(e, r, a) {
      return Ge(e, r, a, !0);
    }
    function jr(e, r, a) {
      return Ge(e, r, a, !1);
    }
    var Ar = jr, Ir = xr;
    Ee.Fragment = l, Ee.jsx = Ar, Ee.jsxs = Ir;
  }()), Ee;
}
var Ze;
function Yr() {
  return Ze || (Ze = 1, process.env.NODE_ENV === "production" ? Te.exports = Mr() : Te.exports = Fr()), Te.exports;
}
var Wr = Yr(), _e = { exports: {} }, Re = { exports: {} }, j = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qe;
function qr() {
  if (Qe) return j;
  Qe = 1;
  var u = typeof Symbol == "function" && Symbol.for, D = u ? Symbol.for("react.element") : 60103, I = u ? Symbol.for("react.portal") : 60106, l = u ? Symbol.for("react.fragment") : 60107, C = u ? Symbol.for("react.strict_mode") : 60108, f = u ? Symbol.for("react.profiler") : 60114, w = u ? Symbol.for("react.provider") : 60109, d = u ? Symbol.for("react.context") : 60110, b = u ? Symbol.for("react.async_mode") : 60111, S = u ? Symbol.for("react.concurrent_mode") : 60111, c = u ? Symbol.for("react.forward_ref") : 60112, E = u ? Symbol.for("react.suspense") : 60113, k = u ? Symbol.for("react.suspense_list") : 60120, F = u ? Symbol.for("react.memo") : 60115, z = u ? Symbol.for("react.lazy") : 60116, M = u ? Symbol.for("react.block") : 60121, N = u ? Symbol.for("react.fundamental") : 60117, U = u ? Symbol.for("react.responder") : 60118, Y = u ? Symbol.for("react.scope") : 60119;
  function V(o) {
    if (typeof o == "object" && o !== null) {
      var re = o.$$typeof;
      switch (re) {
        case D:
          switch (o = o.type, o) {
            case b:
            case S:
            case l:
            case f:
            case C:
            case E:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case d:
                case c:
                case z:
                case F:
                case w:
                  return o;
                default:
                  return re;
              }
          }
        case I:
          return re;
      }
    }
  }
  function q(o) {
    return V(o) === S;
  }
  return j.AsyncMode = b, j.ConcurrentMode = S, j.ContextConsumer = d, j.ContextProvider = w, j.Element = D, j.ForwardRef = c, j.Fragment = l, j.Lazy = z, j.Memo = F, j.Portal = I, j.Profiler = f, j.StrictMode = C, j.Suspense = E, j.isAsyncMode = function(o) {
    return q(o) || V(o) === b;
  }, j.isConcurrentMode = q, j.isContextConsumer = function(o) {
    return V(o) === d;
  }, j.isContextProvider = function(o) {
    return V(o) === w;
  }, j.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === D;
  }, j.isForwardRef = function(o) {
    return V(o) === c;
  }, j.isFragment = function(o) {
    return V(o) === l;
  }, j.isLazy = function(o) {
    return V(o) === z;
  }, j.isMemo = function(o) {
    return V(o) === F;
  }, j.isPortal = function(o) {
    return V(o) === I;
  }, j.isProfiler = function(o) {
    return V(o) === f;
  }, j.isStrictMode = function(o) {
    return V(o) === C;
  }, j.isSuspense = function(o) {
    return V(o) === E;
  }, j.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === l || o === S || o === f || o === C || o === E || o === k || typeof o == "object" && o !== null && (o.$$typeof === z || o.$$typeof === F || o.$$typeof === w || o.$$typeof === d || o.$$typeof === c || o.$$typeof === N || o.$$typeof === U || o.$$typeof === Y || o.$$typeof === M);
  }, j.typeOf = V, j;
}
var A = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var er;
function Lr() {
  return er || (er = 1, process.env.NODE_ENV !== "production" && function() {
    var u = typeof Symbol == "function" && Symbol.for, D = u ? Symbol.for("react.element") : 60103, I = u ? Symbol.for("react.portal") : 60106, l = u ? Symbol.for("react.fragment") : 60107, C = u ? Symbol.for("react.strict_mode") : 60108, f = u ? Symbol.for("react.profiler") : 60114, w = u ? Symbol.for("react.provider") : 60109, d = u ? Symbol.for("react.context") : 60110, b = u ? Symbol.for("react.async_mode") : 60111, S = u ? Symbol.for("react.concurrent_mode") : 60111, c = u ? Symbol.for("react.forward_ref") : 60112, E = u ? Symbol.for("react.suspense") : 60113, k = u ? Symbol.for("react.suspense_list") : 60120, F = u ? Symbol.for("react.memo") : 60115, z = u ? Symbol.for("react.lazy") : 60116, M = u ? Symbol.for("react.block") : 60121, N = u ? Symbol.for("react.fundamental") : 60117, U = u ? Symbol.for("react.responder") : 60118, Y = u ? Symbol.for("react.scope") : 60119;
    function V(n) {
      return typeof n == "string" || typeof n == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      n === l || n === S || n === f || n === C || n === E || n === k || typeof n == "object" && n !== null && (n.$$typeof === z || n.$$typeof === F || n.$$typeof === w || n.$$typeof === d || n.$$typeof === c || n.$$typeof === N || n.$$typeof === U || n.$$typeof === Y || n.$$typeof === M);
    }
    function q(n) {
      if (typeof n == "object" && n !== null) {
        var Z = n.$$typeof;
        switch (Z) {
          case D:
            var ce = n.type;
            switch (ce) {
              case b:
              case S:
              case l:
              case f:
              case C:
              case E:
                return ce;
              default:
                var ae = ce && ce.$$typeof;
                switch (ae) {
                  case d:
                  case c:
                  case z:
                  case F:
                  case w:
                    return ae;
                  default:
                    return Z;
                }
            }
          case I:
            return Z;
        }
      }
    }
    var o = b, re = S, pe = d, ye = w, ie = D, be = c, ue = l, se = z, H = F, K = I, te = f, X = C, ee = E, ne = !1;
    function fe(n) {
      return ne || (ne = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), t(n) || q(n) === b;
    }
    function t(n) {
      return q(n) === S;
    }
    function i(n) {
      return q(n) === d;
    }
    function m(n) {
      return q(n) === w;
    }
    function h(n) {
      return typeof n == "object" && n !== null && n.$$typeof === D;
    }
    function v(n) {
      return q(n) === c;
    }
    function R(n) {
      return q(n) === l;
    }
    function p(n) {
      return q(n) === z;
    }
    function y(n) {
      return q(n) === F;
    }
    function g(n) {
      return q(n) === I;
    }
    function P(n) {
      return q(n) === f;
    }
    function T(n) {
      return q(n) === C;
    }
    function B(n) {
      return q(n) === E;
    }
    A.AsyncMode = o, A.ConcurrentMode = re, A.ContextConsumer = pe, A.ContextProvider = ye, A.Element = ie, A.ForwardRef = be, A.Fragment = ue, A.Lazy = se, A.Memo = H, A.Portal = K, A.Profiler = te, A.StrictMode = X, A.Suspense = ee, A.isAsyncMode = fe, A.isConcurrentMode = t, A.isContextConsumer = i, A.isContextProvider = m, A.isElement = h, A.isForwardRef = v, A.isFragment = R, A.isLazy = p, A.isMemo = y, A.isPortal = g, A.isProfiler = P, A.isStrictMode = T, A.isSuspense = B, A.isValidElementType = V, A.typeOf = q;
  }()), A;
}
var rr;
function cr() {
  return rr || (rr = 1, process.env.NODE_ENV === "production" ? Re.exports = qr() : Re.exports = Lr()), Re.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var xe, tr;
function Ur() {
  if (tr) return xe;
  tr = 1;
  var u = Object.getOwnPropertySymbols, D = Object.prototype.hasOwnProperty, I = Object.prototype.propertyIsEnumerable;
  function l(f) {
    if (f == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(f);
  }
  function C() {
    try {
      if (!Object.assign)
        return !1;
      var f = new String("abc");
      if (f[5] = "de", Object.getOwnPropertyNames(f)[0] === "5")
        return !1;
      for (var w = {}, d = 0; d < 10; d++)
        w["_" + String.fromCharCode(d)] = d;
      var b = Object.getOwnPropertyNames(w).map(function(c) {
        return w[c];
      });
      if (b.join("") !== "0123456789")
        return !1;
      var S = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        S[c] = c;
      }), Object.keys(Object.assign({}, S)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return xe = C() ? Object.assign : function(f, w) {
    for (var d, b = l(f), S, c = 1; c < arguments.length; c++) {
      d = Object(arguments[c]);
      for (var E in d)
        D.call(d, E) && (b[E] = d[E]);
      if (u) {
        S = u(d);
        for (var k = 0; k < S.length; k++)
          I.call(d, S[k]) && (b[S[k]] = d[S[k]]);
      }
    }
    return b;
  }, xe;
}
var je, nr;
function De() {
  if (nr) return je;
  nr = 1;
  var u = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return je = u, je;
}
var Ae, ar;
function lr() {
  return ar || (ar = 1, Ae = Function.call.bind(Object.prototype.hasOwnProperty)), Ae;
}
var Ie, or;
function Vr() {
  if (or) return Ie;
  or = 1;
  var u = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var D = /* @__PURE__ */ De(), I = {}, l = /* @__PURE__ */ lr();
    u = function(f) {
      var w = "Warning: " + f;
      typeof console < "u" && console.error(w);
      try {
        throw new Error(w);
      } catch {
      }
    };
  }
  function C(f, w, d, b, S) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in f)
        if (l(f, c)) {
          var E;
          try {
            if (typeof f[c] != "function") {
              var k = Error(
                (b || "React class") + ": " + d + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw k.name = "Invariant Violation", k;
            }
            E = f[c](w, c, b, d, null, D);
          } catch (z) {
            E = z;
          }
          if (E && !(E instanceof Error) && u(
            (b || "React class") + ": type specification of " + d + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof E + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), E instanceof Error && !(E.message in I)) {
            I[E.message] = !0;
            var F = S ? S() : "";
            u(
              "Failed " + d + " type: " + E.message + (F ?? "")
            );
          }
        }
    }
  }
  return C.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (I = {});
  }, Ie = C, Ie;
}
var ke, ir;
function Nr() {
  if (ir) return ke;
  ir = 1;
  var u = cr(), D = Ur(), I = /* @__PURE__ */ De(), l = /* @__PURE__ */ lr(), C = /* @__PURE__ */ Vr(), f = function() {
  };
  process.env.NODE_ENV !== "production" && (f = function(d) {
    var b = "Warning: " + d;
    typeof console < "u" && console.error(b);
    try {
      throw new Error(b);
    } catch {
    }
  });
  function w() {
    return null;
  }
  return ke = function(d, b) {
    var S = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function E(t) {
      var i = t && (S && t[S] || t[c]);
      if (typeof i == "function")
        return i;
    }
    var k = "<<anonymous>>", F = {
      array: U("array"),
      bigint: U("bigint"),
      bool: U("boolean"),
      func: U("function"),
      number: U("number"),
      object: U("object"),
      string: U("string"),
      symbol: U("symbol"),
      any: Y(),
      arrayOf: V,
      element: q(),
      elementType: o(),
      instanceOf: re,
      node: be(),
      objectOf: ye,
      oneOf: pe,
      oneOfType: ie,
      shape: se,
      exact: H
    };
    function z(t, i) {
      return t === i ? t !== 0 || 1 / t === 1 / i : t !== t && i !== i;
    }
    function M(t, i) {
      this.message = t, this.data = i && typeof i == "object" ? i : {}, this.stack = "";
    }
    M.prototype = Error.prototype;
    function N(t) {
      if (process.env.NODE_ENV !== "production")
        var i = {}, m = 0;
      function h(R, p, y, g, P, T, B) {
        if (g = g || k, T = T || y, B !== I) {
          if (b) {
            var n = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw n.name = "Invariant Violation", n;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Z = g + ":" + y;
            !i[Z] && // Avoid spamming the console because they are often not actionable except for lib authors
            m < 3 && (f(
              "You are manually calling a React.PropTypes validation function for the `" + T + "` prop on `" + g + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), i[Z] = !0, m++);
          }
        }
        return p[y] == null ? R ? p[y] === null ? new M("The " + P + " `" + T + "` is marked as required " + ("in `" + g + "`, but its value is `null`.")) : new M("The " + P + " `" + T + "` is marked as required in " + ("`" + g + "`, but its value is `undefined`.")) : null : t(p, y, g, P, T);
      }
      var v = h.bind(null, !1);
      return v.isRequired = h.bind(null, !0), v;
    }
    function U(t) {
      function i(m, h, v, R, p, y) {
        var g = m[h], P = X(g);
        if (P !== t) {
          var T = ee(g);
          return new M(
            "Invalid " + R + " `" + p + "` of type " + ("`" + T + "` supplied to `" + v + "`, expected ") + ("`" + t + "`."),
            { expectedType: t }
          );
        }
        return null;
      }
      return N(i);
    }
    function Y() {
      return N(w);
    }
    function V(t) {
      function i(m, h, v, R, p) {
        if (typeof t != "function")
          return new M("Property `" + p + "` of component `" + v + "` has invalid PropType notation inside arrayOf.");
        var y = m[h];
        if (!Array.isArray(y)) {
          var g = X(y);
          return new M("Invalid " + R + " `" + p + "` of type " + ("`" + g + "` supplied to `" + v + "`, expected an array."));
        }
        for (var P = 0; P < y.length; P++) {
          var T = t(y, P, v, R, p + "[" + P + "]", I);
          if (T instanceof Error)
            return T;
        }
        return null;
      }
      return N(i);
    }
    function q() {
      function t(i, m, h, v, R) {
        var p = i[m];
        if (!d(p)) {
          var y = X(p);
          return new M("Invalid " + v + " `" + R + "` of type " + ("`" + y + "` supplied to `" + h + "`, expected a single ReactElement."));
        }
        return null;
      }
      return N(t);
    }
    function o() {
      function t(i, m, h, v, R) {
        var p = i[m];
        if (!u.isValidElementType(p)) {
          var y = X(p);
          return new M("Invalid " + v + " `" + R + "` of type " + ("`" + y + "` supplied to `" + h + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return N(t);
    }
    function re(t) {
      function i(m, h, v, R, p) {
        if (!(m[h] instanceof t)) {
          var y = t.name || k, g = fe(m[h]);
          return new M("Invalid " + R + " `" + p + "` of type " + ("`" + g + "` supplied to `" + v + "`, expected ") + ("instance of `" + y + "`."));
        }
        return null;
      }
      return N(i);
    }
    function pe(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? f(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : f("Invalid argument supplied to oneOf, expected an array.")), w;
      function i(m, h, v, R, p) {
        for (var y = m[h], g = 0; g < t.length; g++)
          if (z(y, t[g]))
            return null;
        var P = JSON.stringify(t, function(B, n) {
          var Z = ee(n);
          return Z === "symbol" ? String(n) : n;
        });
        return new M("Invalid " + R + " `" + p + "` of value `" + String(y) + "` " + ("supplied to `" + v + "`, expected one of " + P + "."));
      }
      return N(i);
    }
    function ye(t) {
      function i(m, h, v, R, p) {
        if (typeof t != "function")
          return new M("Property `" + p + "` of component `" + v + "` has invalid PropType notation inside objectOf.");
        var y = m[h], g = X(y);
        if (g !== "object")
          return new M("Invalid " + R + " `" + p + "` of type " + ("`" + g + "` supplied to `" + v + "`, expected an object."));
        for (var P in y)
          if (l(y, P)) {
            var T = t(y, P, v, R, p + "." + P, I);
            if (T instanceof Error)
              return T;
          }
        return null;
      }
      return N(i);
    }
    function ie(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && f("Invalid argument supplied to oneOfType, expected an instance of array."), w;
      for (var i = 0; i < t.length; i++) {
        var m = t[i];
        if (typeof m != "function")
          return f(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ne(m) + " at index " + i + "."
          ), w;
      }
      function h(v, R, p, y, g) {
        for (var P = [], T = 0; T < t.length; T++) {
          var B = t[T], n = B(v, R, p, y, g, I);
          if (n == null)
            return null;
          n.data && l(n.data, "expectedType") && P.push(n.data.expectedType);
        }
        var Z = P.length > 0 ? ", expected one of type [" + P.join(", ") + "]" : "";
        return new M("Invalid " + y + " `" + g + "` supplied to " + ("`" + p + "`" + Z + "."));
      }
      return N(h);
    }
    function be() {
      function t(i, m, h, v, R) {
        return K(i[m]) ? null : new M("Invalid " + v + " `" + R + "` supplied to " + ("`" + h + "`, expected a ReactNode."));
      }
      return N(t);
    }
    function ue(t, i, m, h, v) {
      return new M(
        (t || "React class") + ": " + i + " type `" + m + "." + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + v + "`."
      );
    }
    function se(t) {
      function i(m, h, v, R, p) {
        var y = m[h], g = X(y);
        if (g !== "object")
          return new M("Invalid " + R + " `" + p + "` of type `" + g + "` " + ("supplied to `" + v + "`, expected `object`."));
        for (var P in t) {
          var T = t[P];
          if (typeof T != "function")
            return ue(v, R, p, P, ee(T));
          var B = T(y, P, v, R, p + "." + P, I);
          if (B)
            return B;
        }
        return null;
      }
      return N(i);
    }
    function H(t) {
      function i(m, h, v, R, p) {
        var y = m[h], g = X(y);
        if (g !== "object")
          return new M("Invalid " + R + " `" + p + "` of type `" + g + "` " + ("supplied to `" + v + "`, expected `object`."));
        var P = D({}, m[h], t);
        for (var T in P) {
          var B = t[T];
          if (l(t, T) && typeof B != "function")
            return ue(v, R, p, T, ee(B));
          if (!B)
            return new M(
              "Invalid " + R + " `" + p + "` key `" + T + "` supplied to `" + v + "`.\nBad object: " + JSON.stringify(m[h], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(t), null, "  ")
            );
          var n = B(y, T, v, R, p + "." + T, I);
          if (n)
            return n;
        }
        return null;
      }
      return N(i);
    }
    function K(t) {
      switch (typeof t) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !t;
        case "object":
          if (Array.isArray(t))
            return t.every(K);
          if (t === null || d(t))
            return !0;
          var i = E(t);
          if (i) {
            var m = i.call(t), h;
            if (i !== t.entries) {
              for (; !(h = m.next()).done; )
                if (!K(h.value))
                  return !1;
            } else
              for (; !(h = m.next()).done; ) {
                var v = h.value;
                if (v && !K(v[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function te(t, i) {
      return t === "symbol" ? !0 : i ? i["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && i instanceof Symbol : !1;
    }
    function X(t) {
      var i = typeof t;
      return Array.isArray(t) ? "array" : t instanceof RegExp ? "object" : te(i, t) ? "symbol" : i;
    }
    function ee(t) {
      if (typeof t > "u" || t === null)
        return "" + t;
      var i = X(t);
      if (i === "object") {
        if (t instanceof Date)
          return "date";
        if (t instanceof RegExp)
          return "regexp";
      }
      return i;
    }
    function ne(t) {
      var i = ee(t);
      switch (i) {
        case "array":
        case "object":
          return "an " + i;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + i;
        default:
          return i;
      }
    }
    function fe(t) {
      return !t.constructor || !t.constructor.name ? k : t.constructor.name;
    }
    return F.checkPropTypes = C, F.resetWarningCache = C.resetWarningCache, F.PropTypes = F, F;
  }, ke;
}
var $e, ur;
function zr() {
  if (ur) return $e;
  ur = 1;
  var u = /* @__PURE__ */ De();
  function D() {
  }
  function I() {
  }
  return I.resetWarningCache = D, $e = function() {
    function l(w, d, b, S, c, E) {
      if (E !== u) {
        var k = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw k.name = "Invariant Violation", k;
      }
    }
    l.isRequired = l;
    function C() {
      return l;
    }
    var f = {
      array: l,
      bigint: l,
      bool: l,
      func: l,
      number: l,
      object: l,
      string: l,
      symbol: l,
      any: l,
      arrayOf: C,
      element: l,
      elementType: l,
      instanceOf: C,
      node: l,
      objectOf: C,
      oneOf: C,
      oneOfType: C,
      shape: C,
      exact: C,
      checkPropTypes: I,
      resetWarningCache: D
    };
    return f.PropTypes = f, f;
  }, $e;
}
var sr;
function Br() {
  if (sr) return _e.exports;
  if (sr = 1, process.env.NODE_ENV !== "production") {
    var u = cr(), D = !0;
    _e.exports = /* @__PURE__ */ Nr()(u.isElement, D);
  } else
    _e.exports = /* @__PURE__ */ zr()();
  return _e.exports;
}
var Jr = /* @__PURE__ */ Br();
const ve = /* @__PURE__ */ Dr(Jr), dr = ({ label: u, onClick: D, type: I = "button", disabled: l = !1, theme: C = "primary", className: f = "" }) => /* @__PURE__ */ Wr.jsx(
  "button",
  {
    type: I,
    onClick: D,
    disabled: l,
    className: `btn btn-${C} ${f}`,
    children: u
  }
);
dr.propTypes = {
  label: ve.string.isRequired,
  onClick: ve.func,
  type: ve.oneOf(["button", "submit", "reset"]),
  disabled: ve.bool,
  theme: ve.oneOf(["primary", "secondary", "danger"]),
  className: ve.string
};
dr.defaultProps = {
  onClick: () => {
  },
  disabled: !1,
  theme: "primary",
  className: ""
};
export {
  dr as Button
};
