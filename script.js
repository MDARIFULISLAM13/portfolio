(function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) i(u);
  new MutationObserver((u) => {
    for (const o of u)
      if (o.type === "childList")
        for (const d of o.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && i(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(u) {
    const o = {};
    return (
      u.integrity && (o.integrity = u.integrity),
      u.referrerPolicy && (o.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : u.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function i(u) {
    if (u.ep) return;
    u.ep = !0;
    const o = r(u);
    fetch(u.href, o);
  }
})();
var Ad = { exports: {} },
  Yu = {};
var Cg;
function pb() {
  if (Cg) return Yu;
  Cg = 1;
  var f = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.fragment");
  function r(i, u, o) {
    var d = null;
    if (
      (o !== void 0 && (d = "" + o),
      u.key !== void 0 && (d = "" + u.key),
      "key" in u)
    ) {
      o = {};
      for (var h in u) h !== "key" && (o[h] = u[h]);
    } else o = u;
    return (
      (u = o.ref),
      { $$typeof: f, type: i, key: d, ref: u !== void 0 ? u : null, props: o }
    );
  }
  return ((Yu.Fragment = l), (Yu.jsx = r), (Yu.jsxs = r), Yu);
}
var jg;
function gb() {
  return (jg || ((jg = 1), (Ad.exports = pb())), Ad.exports);
}
var y = gb(),
  kd = { exports: {} },
  Lu = {},
  Md = { exports: {} },
  Od = {};
var Dg;
function yb() {
  return (
    Dg ||
      ((Dg = 1),
      (function (f) {
        function l(z, V) {
          var ae = z.length;
          z.push(V);
          e: for (; 0 < ae;) {
            var de = (ae - 1) >>> 1,
              k = z[de];
            if (0 < u(k, V)) ((z[de] = V), (z[ae] = k), (ae = de));
            else break e;
          }
        }
        function r(z) {
          return z.length === 0 ? null : z[0];
        }
        function i(z) {
          if (z.length === 0) return null;
          var V = z[0],
            ae = z.pop();
          if (ae !== V) {
            z[0] = ae;
            e: for (var de = 0, k = z.length, E = k >>> 1; de < E;) {
              var H = 2 * (de + 1) - 1,
                I = z[H],
                ee = H + 1,
                ue = z[ee];
              if (0 > u(I, ae))
                ee < k && 0 > u(ue, I)
                  ? ((z[de] = ue), (z[ee] = ae), (de = ee))
                  : ((z[de] = I), (z[H] = ae), (de = H));
              else if (ee < k && 0 > u(ue, ae))
                ((z[de] = ue), (z[ee] = ae), (de = ee));
              else break e;
            }
          }
          return V;
        }
        function u(z, V) {
          var ae = z.sortIndex - V.sortIndex;
          return ae !== 0 ? ae : z.id - V.id;
        }
        if (
          ((f.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var o = performance;
          f.unstable_now = function () {
            return o.now();
          };
        } else {
          var d = Date,
            h = d.now();
          f.unstable_now = function () {
            return d.now() - h;
          };
        }
        var g = [],
          p = [],
          _ = 1,
          b = null,
          S = 3,
          x = !1,
          A = !1,
          T = !1,
          O = !1,
          L = typeof setTimeout == "function" ? setTimeout : null,
          X = typeof clearTimeout == "function" ? clearTimeout : null,
          Z = typeof setImmediate < "u" ? setImmediate : null;
        function q(z) {
          for (var V = r(p); V !== null;) {
            if (V.callback === null) i(p);
            else if (V.startTime <= z)
              (i(p), (V.sortIndex = V.expirationTime), l(g, V));
            else break;
            V = r(p);
          }
        }
        function G(z) {
          if (((T = !1), q(z), !A))
            if (r(g) !== null) ((A = !0), W || ((W = !0), P()));
            else {
              var V = r(p);
              V !== null && _e(G, V.startTime - z);
            }
        }
        var W = !1,
          D = -1,
          F = 5,
          J = -1;
        function $() {
          return O ? !0 : !(f.unstable_now() - J < F);
        }
        function fe() {
          if (((O = !1), W)) {
            var z = f.unstable_now();
            J = z;
            var V = !0;
            try {
              e: {
                ((A = !1), T && ((T = !1), X(D), (D = -1)), (x = !0));
                var ae = S;
                try {
                  t: {
                    for (
                      q(z), b = r(g);
                      b !== null && !(b.expirationTime > z && $());
                    ) {
                      var de = b.callback;
                      if (typeof de == "function") {
                        ((b.callback = null), (S = b.priorityLevel));
                        var k = de(b.expirationTime <= z);
                        if (((z = f.unstable_now()), typeof k == "function")) {
                          ((b.callback = k), q(z), (V = !0));
                          break t;
                        }
                        (b === r(g) && i(g), q(z));
                      } else i(g);
                      b = r(g);
                    }
                    if (b !== null) V = !0;
                    else {
                      var E = r(p);
                      (E !== null && _e(G, E.startTime - z), (V = !1));
                    }
                  }
                  break e;
                } finally {
                  ((b = null), (S = ae), (x = !1));
                }
                V = void 0;
              }
            } finally {
              V ? P() : (W = !1);
            }
          }
        }
        var P;
        if (typeof Z == "function")
          P = function () {
            Z(fe);
          };
        else if (typeof MessageChannel < "u") {
          var xe = new MessageChannel(),
            ge = xe.port2;
          ((xe.port1.onmessage = fe),
            (P = function () {
              ge.postMessage(null);
            }));
        } else
          P = function () {
            L(fe, 0);
          };
        function _e(z, V) {
          D = L(function () {
            z(f.unstable_now());
          }, V);
        }
        ((f.unstable_IdlePriority = 5),
          (f.unstable_ImmediatePriority = 1),
          (f.unstable_LowPriority = 4),
          (f.unstable_NormalPriority = 3),
          (f.unstable_Profiling = null),
          (f.unstable_UserBlockingPriority = 2),
          (f.unstable_cancelCallback = function (z) {
            z.callback = null;
          }),
          (f.unstable_forceFrameRate = function (z) {
            0 > z || 125 < z
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (F = 0 < z ? Math.floor(1e3 / z) : 5);
          }),
          (f.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (f.unstable_next = function (z) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var V = 3;
                break;
              default:
                V = S;
            }
            var ae = S;
            S = V;
            try {
              return z();
            } finally {
              S = ae;
            }
          }),
          (f.unstable_requestPaint = function () {
            O = !0;
          }),
          (f.unstable_runWithPriority = function (z, V) {
            switch (z) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                z = 3;
            }
            var ae = S;
            S = z;
            try {
              return V();
            } finally {
              S = ae;
            }
          }),
          (f.unstable_scheduleCallback = function (z, V, ae) {
            var de = f.unstable_now();
            switch (
              (typeof ae == "object" && ae !== null
                ? ((ae = ae.delay),
                  (ae = typeof ae == "number" && 0 < ae ? de + ae : de))
                : (ae = de),
              z)
            ) {
              case 1:
                var k = -1;
                break;
              case 2:
                k = 250;
                break;
              case 5:
                k = 1073741823;
                break;
              case 4:
                k = 1e4;
                break;
              default:
                k = 5e3;
            }
            return (
              (k = ae + k),
              (z = {
                id: _++,
                callback: V,
                priorityLevel: z,
                startTime: ae,
                expirationTime: k,
                sortIndex: -1,
              }),
              ae > de
                ? ((z.sortIndex = ae),
                  l(p, z),
                  r(g) === null &&
                    z === r(p) &&
                    (T ? (X(D), (D = -1)) : (T = !0), _e(G, ae - de)))
                : ((z.sortIndex = k),
                  l(g, z),
                  A || x || ((A = !0), W || ((W = !0), P()))),
              z
            );
          }),
          (f.unstable_shouldYield = $),
          (f.unstable_wrapCallback = function (z) {
            var V = S;
            return function () {
              var ae = S;
              S = V;
              try {
                return z.apply(this, arguments);
              } finally {
                S = ae;
              }
            };
          }));
      })(Od)),
    Od
  );
}
var Rg;
function _b() {
  return (Rg || ((Rg = 1), (Md.exports = yb())), Md.exports);
}
var zd = { exports: {} },
  Se = {};
var Ug;
function vb() {
  if (Ug) return Se;
  Ug = 1;
  var f = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    u = Symbol.for("react.profiler"),
    o = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    g = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    _ = Symbol.for("react.lazy"),
    b = Symbol.for("react.activity"),
    S = Symbol.iterator;
  function x(E) {
    return E === null || typeof E != "object"
      ? null
      : ((E = (S && E[S]) || E["@@iterator"]),
        typeof E == "function" ? E : null);
  }
  var A = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    T = Object.assign,
    O = {};
  function L(E, H, I) {
    ((this.props = E),
      (this.context = H),
      (this.refs = O),
      (this.updater = I || A));
  }
  ((L.prototype.isReactComponent = {}),
    (L.prototype.setState = function (E, H) {
      if (typeof E != "object" && typeof E != "function" && E != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, E, H, "setState");
    }),
    (L.prototype.forceUpdate = function (E) {
      this.updater.enqueueForceUpdate(this, E, "forceUpdate");
    }));
  function X() {}
  X.prototype = L.prototype;
  function Z(E, H, I) {
    ((this.props = E),
      (this.context = H),
      (this.refs = O),
      (this.updater = I || A));
  }
  var q = (Z.prototype = new X());
  ((q.constructor = Z), T(q, L.prototype), (q.isPureReactComponent = !0));
  var G = Array.isArray;
  function W() {}
  var D = { H: null, A: null, T: null, S: null },
    F = Object.prototype.hasOwnProperty;
  function J(E, H, I) {
    var ee = I.ref;
    return {
      $$typeof: f,
      type: E,
      key: H,
      ref: ee !== void 0 ? ee : null,
      props: I,
    };
  }
  function $(E, H) {
    return J(E.type, H, E.props);
  }
  function fe(E) {
    return typeof E == "object" && E !== null && E.$$typeof === f;
  }
  function P(E) {
    var H = { "=": "=0", ":": "=2" };
    return (
      "$" +
      E.replace(/[=:]/g, function (I) {
        return H[I];
      })
    );
  }
  var xe = /\/+/g;
  function ge(E, H) {
    return typeof E == "object" && E !== null && E.key != null
      ? P("" + E.key)
      : H.toString(36);
  }
  function _e(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (
          (typeof E.status == "string"
            ? E.then(W, W)
            : ((E.status = "pending"),
              E.then(
                function (H) {
                  E.status === "pending" &&
                    ((E.status = "fulfilled"), (E.value = H));
                },
                function (H) {
                  E.status === "pending" &&
                    ((E.status = "rejected"), (E.reason = H));
                },
              )),
          E.status)
        ) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function z(E, H, I, ee, ue) {
    var he = typeof E;
    (he === "undefined" || he === "boolean") && (E = null);
    var me = !1;
    if (E === null) me = !0;
    else
      switch (he) {
        case "bigint":
        case "string":
        case "number":
          me = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case f:
            case l:
              me = !0;
              break;
            case _:
              return ((me = E._init), z(me(E._payload), H, I, ee, ue));
          }
      }
    if (me)
      return (
        (ue = ue(E)),
        (me = ee === "" ? "." + ge(E, 0) : ee),
        G(ue)
          ? ((I = ""),
            me != null && (I = me.replace(xe, "$&/") + "/"),
            z(ue, H, I, "", function (ka) {
              return ka;
            }))
          : ue != null &&
            (fe(ue) &&
              (ue = $(
                ue,
                I +
                  (ue.key == null || (E && E.key === ue.key)
                    ? ""
                    : ("" + ue.key).replace(xe, "$&/") + "/") +
                  me,
              )),
            H.push(ue)),
        1
      );
    me = 0;
    var Ke = ee === "" ? "." : ee + ":";
    if (G(E))
      for (var Oe = 0; Oe < E.length; Oe++)
        ((ee = E[Oe]), (he = Ke + ge(ee, Oe)), (me += z(ee, H, I, he, ue)));
    else if (((Oe = x(E)), typeof Oe == "function"))
      for (E = Oe.call(E), Oe = 0; !(ee = E.next()).done;)
        ((ee = ee.value),
          (he = Ke + ge(ee, Oe++)),
          (me += z(ee, H, I, he, ue)));
    else if (he === "object") {
      if (typeof E.then == "function") return z(_e(E), H, I, ee, ue);
      throw (
        (H = String(E)),
        Error(
          "Objects are not valid as a React child (found: " +
            (H === "[object Object]"
              ? "object with keys {" + Object.keys(E).join(", ") + "}"
              : H) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return me;
  }
  function V(E, H, I) {
    if (E == null) return E;
    var ee = [],
      ue = 0;
    return (
      z(E, ee, "", "", function (he) {
        return H.call(I, he, ue++);
      }),
      ee
    );
  }
  function ae(E) {
    if (E._status === -1) {
      var H = E._result;
      ((H = H()),
        H.then(
          function (I) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 1), (E._result = I));
          },
          function (I) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 2), (E._result = I));
          },
        ),
        E._status === -1 && ((E._status = 0), (E._result = H)));
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var de =
      typeof reportError == "function"
        ? reportError
        : function (E) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var H = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof E == "object" &&
                  E !== null &&
                  typeof E.message == "string"
                    ? String(E.message)
                    : String(E),
                error: E,
              });
              if (!window.dispatchEvent(H)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", E);
              return;
            }
            console.error(E);
          },
    k = {
      map: V,
      forEach: function (E, H, I) {
        V(
          E,
          function () {
            H.apply(this, arguments);
          },
          I,
        );
      },
      count: function (E) {
        var H = 0;
        return (
          V(E, function () {
            H++;
          }),
          H
        );
      },
      toArray: function (E) {
        return (
          V(E, function (H) {
            return H;
          }) || []
        );
      },
      only: function (E) {
        if (!fe(E))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return E;
      },
    };
  return (
    (Se.Activity = b),
    (Se.Children = k),
    (Se.Component = L),
    (Se.Fragment = r),
    (Se.Profiler = u),
    (Se.PureComponent = Z),
    (Se.StrictMode = i),
    (Se.Suspense = g),
    (Se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = D),
    (Se.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (E) {
        return D.H.useMemoCache(E);
      },
    }),
    (Se.cache = function (E) {
      return function () {
        return E.apply(null, arguments);
      };
    }),
    (Se.cacheSignal = function () {
      return null;
    }),
    (Se.cloneElement = function (E, H, I) {
      if (E == null)
        throw Error(
          "The argument must be a React element, but you passed " + E + ".",
        );
      var ee = T({}, E.props),
        ue = E.key;
      if (H != null)
        for (he in (H.key !== void 0 && (ue = "" + H.key), H))
          !F.call(H, he) ||
            he === "key" ||
            he === "__self" ||
            he === "__source" ||
            (he === "ref" && H.ref === void 0) ||
            (ee[he] = H[he]);
      var he = arguments.length - 2;
      if (he === 1) ee.children = I;
      else if (1 < he) {
        for (var me = Array(he), Ke = 0; Ke < he; Ke++)
          me[Ke] = arguments[Ke + 2];
        ee.children = me;
      }
      return J(E.type, ue, ee);
    }),
    (Se.createContext = function (E) {
      return (
        (E = {
          $$typeof: d,
          _currentValue: E,
          _currentValue2: E,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (E.Provider = E),
        (E.Consumer = { $$typeof: o, _context: E }),
        E
      );
    }),
    (Se.createElement = function (E, H, I) {
      var ee,
        ue = {},
        he = null;
      if (H != null)
        for (ee in (H.key !== void 0 && (he = "" + H.key), H))
          F.call(H, ee) &&
            ee !== "key" &&
            ee !== "__self" &&
            ee !== "__source" &&
            (ue[ee] = H[ee]);
      var me = arguments.length - 2;
      if (me === 1) ue.children = I;
      else if (1 < me) {
        for (var Ke = Array(me), Oe = 0; Oe < me; Oe++)
          Ke[Oe] = arguments[Oe + 2];
        ue.children = Ke;
      }
      if (E && E.defaultProps)
        for (ee in ((me = E.defaultProps), me))
          ue[ee] === void 0 && (ue[ee] = me[ee]);
      return J(E, he, ue);
    }),
    (Se.createRef = function () {
      return { current: null };
    }),
    (Se.forwardRef = function (E) {
      return { $$typeof: h, render: E };
    }),
    (Se.isValidElement = fe),
    (Se.lazy = function (E) {
      return { $$typeof: _, _payload: { _status: -1, _result: E }, _init: ae };
    }),
    (Se.memo = function (E, H) {
      return { $$typeof: p, type: E, compare: H === void 0 ? null : H };
    }),
    (Se.startTransition = function (E) {
      var H = D.T,
        I = {};
      D.T = I;
      try {
        var ee = E(),
          ue = D.S;
        (ue !== null && ue(I, ee),
          typeof ee == "object" &&
            ee !== null &&
            typeof ee.then == "function" &&
            ee.then(W, de));
      } catch (he) {
        de(he);
      } finally {
        (H !== null && I.types !== null && (H.types = I.types), (D.T = H));
      }
    }),
    (Se.unstable_useCacheRefresh = function () {
      return D.H.useCacheRefresh();
    }),
    (Se.use = function (E) {
      return D.H.use(E);
    }),
    (Se.useActionState = function (E, H, I) {
      return D.H.useActionState(E, H, I);
    }),
    (Se.useCallback = function (E, H) {
      return D.H.useCallback(E, H);
    }),
    (Se.useContext = function (E) {
      return D.H.useContext(E);
    }),
    (Se.useDebugValue = function () {}),
    (Se.useDeferredValue = function (E, H) {
      return D.H.useDeferredValue(E, H);
    }),
    (Se.useEffect = function (E, H) {
      return D.H.useEffect(E, H);
    }),
    (Se.useEffectEvent = function (E) {
      return D.H.useEffectEvent(E);
    }),
    (Se.useId = function () {
      return D.H.useId();
    }),
    (Se.useImperativeHandle = function (E, H, I) {
      return D.H.useImperativeHandle(E, H, I);
    }),
    (Se.useInsertionEffect = function (E, H) {
      return D.H.useInsertionEffect(E, H);
    }),
    (Se.useLayoutEffect = function (E, H) {
      return D.H.useLayoutEffect(E, H);
    }),
    (Se.useMemo = function (E, H) {
      return D.H.useMemo(E, H);
    }),
    (Se.useOptimistic = function (E, H) {
      return D.H.useOptimistic(E, H);
    }),
    (Se.useReducer = function (E, H, I) {
      return D.H.useReducer(E, H, I);
    }),
    (Se.useRef = function (E) {
      return D.H.useRef(E);
    }),
    (Se.useState = function (E) {
      return D.H.useState(E);
    }),
    (Se.useSyncExternalStore = function (E, H, I) {
      return D.H.useSyncExternalStore(E, H, I);
    }),
    (Se.useTransition = function () {
      return D.H.useTransition();
    }),
    (Se.version = "19.2.3"),
    Se
  );
}
var qg;
function bh() {
  return (qg || ((qg = 1), (zd.exports = vb())), zd.exports);
}
var Cd = { exports: {} },
  oa = {};
var Bg;
function bb() {
  if (Bg) return oa;
  Bg = 1;
  var f = bh();
  function l(g) {
    var p = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var _ = 2; _ < arguments.length; _++)
        p += "&args[]=" + encodeURIComponent(arguments[_]);
    }
    return (
      "Minified React error #" +
      g +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r() {}
  var i = {
      d: {
        f: r,
        r: function () {
          throw Error(l(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    u = Symbol.for("react.portal");
  function o(g, p, _) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: u,
      key: b == null ? null : "" + b,
      children: g,
      containerInfo: p,
      implementation: _,
    };
  }
  var d = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(g, p) {
    if (g === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (oa.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
    (oa.createPortal = function (g, p) {
      var _ =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(l(299));
      return o(g, p, null, _);
    }),
    (oa.flushSync = function (g) {
      var p = d.T,
        _ = i.p;
      try {
        if (((d.T = null), (i.p = 2), g)) return g();
      } finally {
        ((d.T = p), (i.p = _), i.d.f());
      }
    }),
    (oa.preconnect = function (g, p) {
      typeof g == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == "string"
                ? p === "use-credentials"
                  ? p
                  : ""
                : void 0))
          : (p = null),
        i.d.C(g, p));
    }),
    (oa.prefetchDNS = function (g) {
      typeof g == "string" && i.d.D(g);
    }),
    (oa.preinit = function (g, p) {
      if (typeof g == "string" && p && typeof p.as == "string") {
        var _ = p.as,
          b = h(_, p.crossOrigin),
          S = typeof p.integrity == "string" ? p.integrity : void 0,
          x = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        _ === "style"
          ? i.d.S(g, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: b,
              integrity: S,
              fetchPriority: x,
            })
          : _ === "script" &&
            i.d.X(g, {
              crossOrigin: b,
              integrity: S,
              fetchPriority: x,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    (oa.preinitModule = function (g, p) {
      if (typeof g == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var _ = h(p.as, p.crossOrigin);
            i.d.M(g, {
              crossOrigin: _,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
          }
        } else p == null && i.d.M(g);
    }),
    (oa.preload = function (g, p) {
      if (
        typeof g == "string" &&
        typeof p == "object" &&
        p !== null &&
        typeof p.as == "string"
      ) {
        var _ = p.as,
          b = h(_, p.crossOrigin);
        i.d.L(g, _, {
          crossOrigin: b,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    (oa.preloadModule = function (g, p) {
      if (typeof g == "string")
        if (p) {
          var _ = h(p.as, p.crossOrigin);
          i.d.m(g, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: _,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          });
        } else i.d.m(g);
    }),
    (oa.requestFormReset = function (g) {
      i.d.r(g);
    }),
    (oa.unstable_batchedUpdates = function (g, p) {
      return g(p);
    }),
    (oa.useFormState = function (g, p, _) {
      return d.H.useFormState(g, p, _);
    }),
    (oa.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (oa.version = "19.2.3"),
    oa
  );
}
var Hg;
function xb() {
  if (Hg) return Cd.exports;
  Hg = 1;
  function f() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (l) {
        console.error(l);
      }
  }
  return (f(), (Cd.exports = bb()), Cd.exports);
}
var Yg;
function Sb() {
  if (Yg) return Lu;
  Yg = 1;
  var f = _b(),
    l = bh(),
    r = xb();
  function i(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function u(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function o(e) {
    var t = e,
      a = e;
    if (e.alternate) for (; t.return;) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (a = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? a : null;
  }
  function d(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function g(e) {
    if (o(e) !== e) throw Error(i(188));
  }
  function p(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = o(e)), t === null)) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var a = e, n = t; ;) {
      var s = a.return;
      if (s === null) break;
      var c = s.alternate;
      if (c === null) {
        if (((n = s.return), n !== null)) {
          a = n;
          continue;
        }
        break;
      }
      if (s.child === c.child) {
        for (c = s.child; c;) {
          if (c === a) return (g(s), e);
          if (c === n) return (g(s), t);
          c = c.sibling;
        }
        throw Error(i(188));
      }
      if (a.return !== n.return) ((a = s), (n = c));
      else {
        for (var m = !1, v = s.child; v;) {
          if (v === a) {
            ((m = !0), (a = s), (n = c));
            break;
          }
          if (v === n) {
            ((m = !0), (n = s), (a = c));
            break;
          }
          v = v.sibling;
        }
        if (!m) {
          for (v = c.child; v;) {
            if (v === a) {
              ((m = !0), (a = c), (n = s));
              break;
            }
            if (v === n) {
              ((m = !0), (n = c), (a = s));
              break;
            }
            v = v.sibling;
          }
          if (!m) throw Error(i(189));
        }
      }
      if (a.alternate !== n) throw Error(i(190));
    }
    if (a.tag !== 3) throw Error(i(188));
    return a.stateNode.current === a ? e : t;
  }
  function _(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null;) {
      if (((t = _(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var b = Object.assign,
    S = Symbol.for("react.element"),
    x = Symbol.for("react.transitional.element"),
    A = Symbol.for("react.portal"),
    T = Symbol.for("react.fragment"),
    O = Symbol.for("react.strict_mode"),
    L = Symbol.for("react.profiler"),
    X = Symbol.for("react.consumer"),
    Z = Symbol.for("react.context"),
    q = Symbol.for("react.forward_ref"),
    G = Symbol.for("react.suspense"),
    W = Symbol.for("react.suspense_list"),
    D = Symbol.for("react.memo"),
    F = Symbol.for("react.lazy"),
    J = Symbol.for("react.activity"),
    $ = Symbol.for("react.memo_cache_sentinel"),
    fe = Symbol.iterator;
  function P(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (fe && e[fe]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var xe = Symbol.for("react.client.reference");
  function ge(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === xe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case T:
        return "Fragment";
      case L:
        return "Profiler";
      case O:
        return "StrictMode";
      case G:
        return "Suspense";
      case W:
        return "SuspenseList";
      case J:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case A:
          return "Portal";
        case Z:
          return e.displayName || "Context";
        case X:
          return (e._context.displayName || "Context") + ".Consumer";
        case q:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case D:
          return (
            (t = e.displayName || null),
            t !== null ? t : ge(e.type) || "Memo"
          );
        case F:
          ((t = e._payload), (e = e._init));
          try {
            return ge(e(t));
          } catch {}
      }
    return null;
  }
  var _e = Array.isArray,
    z = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    V = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ae = { pending: !1, data: null, method: null, action: null },
    de = [],
    k = -1;
  function E(e) {
    return { current: e };
  }
  function H(e) {
    0 > k || ((e.current = de[k]), (de[k] = null), k--);
  }
  function I(e, t) {
    (k++, (de[k] = e.current), (e.current = t));
  }
  var ee = E(null),
    ue = E(null),
    he = E(null),
    me = E(null);
  function Ke(e, t) {
    switch ((I(he, t), I(ue, e), I(ee, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? tg(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = tg(t)), (e = ag(t, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (H(ee), I(ee, e));
  }
  function Oe() {
    (H(ee), H(ue), H(he));
  }
  function ka(e) {
    e.memoizedState !== null && I(me, e);
    var t = ee.current,
      a = ag(t, e.type);
    t !== a && (I(ue, e), I(ee, a));
  }
  function jt(e) {
    (ue.current === e && (H(ee), H(ue)),
      me.current === e && (H(me), (Uu._currentValue = ae)));
  }
  var Xt, Be;
  function Fe(e) {
    if (Xt === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ((Xt = (t && t[1]) || ""),
          (Be =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Xt +
      e +
      Be
    );
  }
  var Jt = !1;
  function It(e, t) {
    if (!e || Jt) return "";
    Jt = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var K = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(K.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(K, []);
                } catch (U) {
                  var R = U;
                }
                Reflect.construct(e, [], K);
              } else {
                try {
                  K.call();
                } catch (U) {
                  R = U;
                }
                e.call(K.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (U) {
                R = U;
              }
              (K = e()) &&
                typeof K.catch == "function" &&
                K.catch(function () {});
            }
          } catch (U) {
            if (U && R && typeof U.stack == "string") return [U.stack, R.stack];
          }
          return [null, null];
        },
      };
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        "name",
      );
      s &&
        s.configurable &&
        Object.defineProperty(n.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var c = n.DetermineComponentFrameRoot(),
        m = c[0],
        v = c[1];
      if (m && v) {
        var w = m.split(`
`),
          j = v.split(`
`);
        for (
          s = n = 0;
          n < w.length && !w[n].includes("DetermineComponentFrameRoot");
        )
          n++;
        for (; s < j.length && !j[s].includes("DetermineComponentFrameRoot");)
          s++;
        if (n === w.length || s === j.length)
          for (
            n = w.length - 1, s = j.length - 1;
            1 <= n && 0 <= s && w[n] !== j[s];
          )
            s--;
        for (; 1 <= n && 0 <= s; n--, s--)
          if (w[n] !== j[s]) {
            if (n !== 1 || s !== 1)
              do
                if ((n--, s--, 0 > s || w[n] !== j[s])) {
                  var Y =
                    `
` + w[n].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      Y.includes("<anonymous>") &&
                      (Y = Y.replace("<anonymous>", e.displayName)),
                    Y
                  );
                }
              while (1 <= n && 0 <= s);
            break;
          }
      }
    } finally {
      ((Jt = !1), (Error.prepareStackTrace = a));
    }
    return (a = e ? e.displayName || e.name : "") ? Fe(a) : "";
  }
  function B(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Fe(e.type);
      case 16:
        return Fe("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? Fe("Suspense Fallback")
          : Fe("Suspense");
      case 19:
        return Fe("SuspenseList");
      case 0:
      case 15:
        return It(e.type, !1);
      case 11:
        return It(e.type.render, !1);
      case 1:
        return It(e.type, !0);
      case 31:
        return Fe("Activity");
      default:
        return "";
    }
  }
  function ra(e) {
    try {
      var t = "",
        a = null;
      do ((t += B(e, a)), (a = e), (e = e.return));
      while (e);
      return t;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  var Va = Object.prototype.hasOwnProperty,
    fl = f.unstable_scheduleCallback,
    it = f.unstable_cancelCallback,
    Dl = f.unstable_shouldYield,
    Ll = f.unstable_requestPaint,
    At = f.unstable_now,
    Dt = f.unstable_getCurrentPriorityLevel,
    Rl = f.unstable_ImmediatePriority,
    ft = f.unstable_UserBlockingPriority,
    ua = f.unstable_NormalPriority,
    Ma = f.unstable_LowPriority,
    dl = f.unstable_IdlePriority,
    gi = f.log,
    St = f.unstable_setDisableYieldValue,
    Xl = null,
    pt = null;
  function ga(e) {
    if (
      (typeof gi == "function" && St(e),
      pt && typeof pt.setStrictMode == "function")
    )
      try {
        pt.setStrictMode(Xl, e);
      } catch {}
  }
  var Rt = Math.clz32 ? Math.clz32 : Ae,
    Gl = Math.log,
    nn = Math.LN2;
  function Ae(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Gl(e) / nn) | 0)) | 0);
  }
  var hl = 256,
    sa = 262144,
    ca = 4194304;
  function Gt(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function ml(e, t, a) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var s = 0,
      c = e.suspendedLanes,
      m = e.pingedLanes;
    e = e.warmLanes;
    var v = n & 134217727;
    return (
      v !== 0
        ? ((n = v & ~c),
          n !== 0
            ? (s = Gt(n))
            : ((m &= v),
              m !== 0
                ? (s = Gt(m))
                : a || ((a = v & ~e), a !== 0 && (s = Gt(a)))))
        : ((v = n & ~c),
          v !== 0
            ? (s = Gt(v))
            : m !== 0
              ? (s = Gt(m))
              : a || ((a = n & ~e), a !== 0 && (s = Gt(a)))),
      s === 0
        ? 0
        : t !== 0 &&
            t !== s &&
            (t & c) === 0 &&
            ((c = s & -s),
            (a = t & -t),
            c >= a || (c === 32 && (a & 4194048) !== 0))
          ? t
          : s
    );
  }
  function pl(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Ul(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function zn() {
    var e = ca;
    return ((ca <<= 1), (ca & 62914560) === 0 && (ca = 4194304), e);
  }
  function ve(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function se(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Ve(e, t, a, n, s, c) {
    var m = e.pendingLanes;
    ((e.pendingLanes = a),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= a),
      (e.entangledLanes &= a),
      (e.errorRecoveryDisabledLanes &= a),
      (e.shellSuspendCounter = 0));
    var v = e.entanglements,
      w = e.expirationTimes,
      j = e.hiddenUpdates;
    for (a = m & ~a; 0 < a;) {
      var Y = 31 - Rt(a),
        K = 1 << Y;
      ((v[Y] = 0), (w[Y] = -1));
      var R = j[Y];
      if (R !== null)
        for (j[Y] = null, Y = 0; Y < R.length; Y++) {
          var U = R[Y];
          U !== null && (U.lane &= -536870913);
        }
      a &= ~K;
    }
    (n !== 0 && le(e, n, 0),
      c !== 0 && s === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(m & ~t)));
  }
  function le(e, t, a) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var n = 31 - Rt(t);
    ((e.entangledLanes |= t),
      (e.entanglements[n] = e.entanglements[n] | 1073741824 | (a & 261930)));
  }
  function be(e, t) {
    var a = (e.entangledLanes |= t);
    for (e = e.entanglements; a;) {
      var n = 31 - Rt(a),
        s = 1 << n;
      ((s & t) | (e[n] & t) && (e[n] |= t), (a &= ~s));
    }
  }
  function ce(e, t) {
    var a = t & -t;
    return (
      (a = (a & 42) !== 0 ? 1 : ye(a)),
      (a & (e.suspendedLanes | t)) !== 0 ? 0 : a
    );
  }
  function ye(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Tt(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function ze() {
    var e = V.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Eg(e.type));
  }
  function dt(e, t) {
    var a = V.p;
    try {
      return ((V.p = e), t());
    } finally {
      V.p = a;
    }
  }
  var ut = Math.random().toString(36).slice(2),
    Ne = "__reactFiber$" + ut,
    ke = "__reactProps$" + ut,
    Ge = "__reactContainer$" + ut,
    ya = "__reactEvents$" + ut,
    st = "__reactListeners$" + ut,
    _a = "__reactHandles$" + ut,
    Qa = "__reactResources$" + ut,
    gt = "__reactMarker$" + ut;
  function kt(e) {
    (delete e[Ne], delete e[ke], delete e[ya], delete e[st], delete e[_a]);
  }
  function yt(e) {
    var t = e[Ne];
    if (t) return t;
    for (var a = e.parentNode; a;) {
      if ((t = a[Ge] || a[Ne])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (e = cg(e); e !== null;) {
            if ((a = e[Ne])) return a;
            e = cg(e);
          }
        return t;
      }
      ((e = a), (a = e.parentNode));
    }
    return null;
  }
  function Oa(e) {
    if ((e = e[Ne] || e[Ge])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function Vl(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(i(33));
  }
  function _t(e) {
    var t = e[Qa];
    return (
      t ||
        (t = e[Qa] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Ce(e) {
    e[gt] = !0;
  }
  var Za = new Set(),
    Pi = {};
  function Ql(e, t) {
    (gl(e, t), gl(e + "Capture", t));
  }
  function gl(e, t) {
    for (Pi[e] = t, e = 0; e < t.length; e++) Za.add(t[e]);
  }
  var yl = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Cn = {},
    yi = {};
  function Zl(e) {
    return Va.call(yi, e)
      ? !0
      : Va.call(Cn, e)
        ? !1
        : yl.test(e)
          ? (yi[e] = !0)
          : ((Cn[e] = !0), !1);
  }
  function xs(e, t, a) {
    if (Zl(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var n = t.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + a);
      }
  }
  function Ss(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + a);
    }
  }
  function rn(e, t, a, n) {
    if (n === null) e.removeAttribute(a);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + n);
    }
  }
  function _l(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Kh(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function s_(e, t, a) {
    var n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var s = n.get,
        c = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (m) {
            ((a = "" + m), c.call(this, m));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (m) {
            a = "" + m;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function vo(e) {
    if (!e._valueTracker) {
      var t = Kh(e) ? "checked" : "value";
      e._valueTracker = s_(e, t, "" + e[t]);
    }
  }
  function Jh(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      n = "";
    return (
      e && (n = Kh(e) ? (e.checked ? "true" : "false") : e.value),
      (e = n),
      e !== a ? (t.setValue(e), !0) : !1
    );
  }
  function Ts(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var c_ = /[\n"\\]/g;
  function vl(e) {
    return e.replace(c_, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function bo(e, t, a, n, s, c, m, v) {
    ((e.name = ""),
      m != null &&
      typeof m != "function" &&
      typeof m != "symbol" &&
      typeof m != "boolean"
        ? (e.type = m)
        : e.removeAttribute("type"),
      t != null
        ? m === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + _l(t))
          : e.value !== "" + _l(t) && (e.value = "" + _l(t))
        : (m !== "submit" && m !== "reset") || e.removeAttribute("value"),
      t != null
        ? xo(e, m, _l(t))
        : a != null
          ? xo(e, m, _l(a))
          : n != null && e.removeAttribute("value"),
      s == null && c != null && (e.defaultChecked = !!c),
      s != null &&
        (e.checked = s && typeof s != "function" && typeof s != "symbol"),
      v != null &&
      typeof v != "function" &&
      typeof v != "symbol" &&
      typeof v != "boolean"
        ? (e.name = "" + _l(v))
        : e.removeAttribute("name"));
  }
  function Wh(e, t, a, n, s, c, m, v) {
    if (
      (c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (e.type = c),
      t != null || a != null)
    ) {
      if (!((c !== "submit" && c !== "reset") || t != null)) {
        vo(e);
        return;
      }
      ((a = a != null ? "" + _l(a) : ""),
        (t = t != null ? "" + _l(t) : a),
        v || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = n ?? s),
      (n = typeof n != "function" && typeof n != "symbol" && !!n),
      (e.checked = v ? e.checked : !!n),
      (e.defaultChecked = !!n),
      m != null &&
        typeof m != "function" &&
        typeof m != "symbol" &&
        typeof m != "boolean" &&
        (e.name = m),
      vo(e));
  }
  function xo(e, t, a) {
    (t === "number" && Ts(e.ownerDocument) === e) ||
      e.defaultValue === "" + a ||
      (e.defaultValue = "" + a);
  }
  function Ii(e, t, a, n) {
    if (((e = e.options), t)) {
      t = {};
      for (var s = 0; s < a.length; s++) t["$" + a[s]] = !0;
      for (a = 0; a < e.length; a++)
        ((s = t.hasOwnProperty("$" + e[a].value)),
          e[a].selected !== s && (e[a].selected = s),
          s && n && (e[a].defaultSelected = !0));
    } else {
      for (a = "" + _l(a), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === a) {
          ((e[s].selected = !0), n && (e[s].defaultSelected = !0));
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Fh(e, t, a) {
    if (
      t != null &&
      ((t = "" + _l(t)), t !== e.value && (e.value = t), a == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + _l(a) : "";
  }
  function $h(e, t, a, n) {
    if (t == null) {
      if (n != null) {
        if (a != null) throw Error(i(92));
        if (_e(n)) {
          if (1 < n.length) throw Error(i(93));
          n = n[0];
        }
        a = n;
      }
      (a == null && (a = ""), (t = a));
    }
    ((a = _l(t)),
      (e.defaultValue = a),
      (n = e.textContent),
      n === a && n !== "" && n !== null && (e.value = n),
      vo(e));
  }
  function er(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var o_ = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Ph(e, t, a) {
    var n = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? n
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : n
        ? e.setProperty(t, a)
        : typeof a != "number" || a === 0 || o_.has(t)
          ? t === "float"
            ? (e.cssFloat = a)
            : (e[t] = ("" + a).trim())
          : (e[t] = a + "px");
  }
  function Ih(e, t, a) {
    if (t != null && typeof t != "object") throw Error(i(62));
    if (((e = e.style), a != null)) {
      for (var n in a)
        !a.hasOwnProperty(n) ||
          (t != null && t.hasOwnProperty(n)) ||
          (n.indexOf("--") === 0
            ? e.setProperty(n, "")
            : n === "float"
              ? (e.cssFloat = "")
              : (e[n] = ""));
      for (var s in t)
        ((n = t[s]), t.hasOwnProperty(s) && a[s] !== n && Ph(e, s, n));
    } else for (var c in t) t.hasOwnProperty(c) && Ph(e, c, t[c]);
  }
  function So(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var f_ = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    d_ =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ws(e) {
    return d_.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function un() {}
  var To = null;
  function wo(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var tr = null,
    ar = null;
  function e0(e) {
    var t = Oa(e);
    if (t && (e = t.stateNode)) {
      var a = e[ke] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (bo(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = e; a.parentNode;) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + vl("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var n = a[t];
              if (n !== e && n.form === e.form) {
                var s = n[ke] || null;
                if (!s) throw Error(i(90));
                bo(
                  n,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name,
                );
              }
            }
            for (t = 0; t < a.length; t++)
              ((n = a[t]), n.form === e.form && Jh(n));
          }
          break e;
        case "textarea":
          Fh(e, a.value, a.defaultValue);
          break e;
        case "select":
          ((t = a.value), t != null && Ii(e, !!a.multiple, t, !1));
      }
    }
  }
  var Eo = !1;
  function t0(e, t, a) {
    if (Eo) return e(t, a);
    Eo = !0;
    try {
      var n = e(t);
      return n;
    } finally {
      if (
        ((Eo = !1),
        (tr !== null || ar !== null) &&
          (fc(), tr && ((t = tr), (e = ar), (ar = tr = null), e0(t), e)))
      )
        for (t = 0; t < e.length; t++) e0(e[t]);
    }
  }
  function Ir(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var n = a[ke] || null;
    if (n === null) return null;
    a = n[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((n = !n.disabled) ||
          ((e = e.type),
          (n = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !n));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function") throw Error(i(231, t, typeof a));
    return a;
  }
  var sn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    No = !1;
  if (sn)
    try {
      var eu = {};
      (Object.defineProperty(eu, "passive", {
        get: function () {
          No = !0;
        },
      }),
        window.addEventListener("test", eu, eu),
        window.removeEventListener("test", eu, eu));
    } catch {
      No = !1;
    }
  var jn = null,
    Ao = null,
    Es = null;
  function a0() {
    if (Es) return Es;
    var e,
      t = Ao,
      a = t.length,
      n,
      s = "value" in jn ? jn.value : jn.textContent,
      c = s.length;
    for (e = 0; e < a && t[e] === s[e]; e++);
    var m = a - e;
    for (n = 1; n <= m && t[a - n] === s[c - n]; n++);
    return (Es = s.slice(e, 1 < n ? 1 - n : void 0));
  }
  function Ns(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function As() {
    return !0;
  }
  function l0() {
    return !1;
  }
  function za(e) {
    function t(a, n, s, c, m) {
      ((this._reactName = a),
        (this._targetInst = s),
        (this.type = n),
        (this.nativeEvent = c),
        (this.target = m),
        (this.currentTarget = null));
      for (var v in e)
        e.hasOwnProperty(v) && ((a = e[v]), (this[v] = a ? a(c) : c[v]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? As
          : l0),
        (this.isPropagationStopped = l0),
        this
      );
    }
    return (
      b(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = As));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = As));
        },
        persist: function () {},
        isPersistent: As,
      }),
      t
    );
  }
  var _i = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ks = za(_i),
    tu = b({}, _i, { view: 0, detail: 0 }),
    h_ = za(tu),
    ko,
    Mo,
    au,
    Ms = b({}, tu, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: zo,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== au &&
              (au && e.type === "mousemove"
                ? ((ko = e.screenX - au.screenX), (Mo = e.screenY - au.screenY))
                : (Mo = ko = 0),
              (au = e)),
            ko);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Mo;
      },
    }),
    n0 = za(Ms),
    m_ = b({}, Ms, { dataTransfer: 0 }),
    p_ = za(m_),
    g_ = b({}, tu, { relatedTarget: 0 }),
    Oo = za(g_),
    y_ = b({}, _i, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    __ = za(y_),
    v_ = b({}, _i, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    b_ = za(v_),
    x_ = b({}, _i, { data: 0 }),
    i0 = za(x_),
    S_ = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    T_ = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    w_ = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function E_(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = w_[e])
        ? !!t[e]
        : !1;
  }
  function zo() {
    return E_;
  }
  var N_ = b({}, tu, {
      key: function (e) {
        if (e.key) {
          var t = S_[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ns(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? T_[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: zo,
      charCode: function (e) {
        return e.type === "keypress" ? Ns(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ns(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    A_ = za(N_),
    k_ = b({}, Ms, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    r0 = za(k_),
    M_ = b({}, tu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: zo,
    }),
    O_ = za(M_),
    z_ = b({}, _i, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    C_ = za(z_),
    j_ = b({}, Ms, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    D_ = za(j_),
    R_ = b({}, _i, { newState: 0, oldState: 0 }),
    U_ = za(R_),
    q_ = [9, 13, 27, 32],
    Co = sn && "CompositionEvent" in window,
    lu = null;
  sn && "documentMode" in document && (lu = document.documentMode);
  var B_ = sn && "TextEvent" in window && !lu,
    u0 = sn && (!Co || (lu && 8 < lu && 11 >= lu)),
    s0 = " ",
    c0 = !1;
  function o0(e, t) {
    switch (e) {
      case "keyup":
        return q_.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function f0(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var lr = !1;
  function H_(e, t) {
    switch (e) {
      case "compositionend":
        return f0(t);
      case "keypress":
        return t.which !== 32 ? null : ((c0 = !0), s0);
      case "textInput":
        return ((e = t.data), e === s0 && c0 ? null : e);
      default:
        return null;
    }
  }
  function Y_(e, t) {
    if (lr)
      return e === "compositionend" || (!Co && o0(e, t))
        ? ((e = a0()), (Es = Ao = jn = null), (lr = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return u0 && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var L_ = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function d0(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!L_[e.type] : t === "textarea";
  }
  function h0(e, t, a, n) {
    (tr ? (ar ? ar.push(n) : (ar = [n])) : (tr = n),
      (t = _c(t, "onChange")),
      0 < t.length &&
        ((a = new ks("onChange", "change", null, a, n)),
        e.push({ event: a, listeners: t })));
  }
  var nu = null,
    iu = null;
  function X_(e) {
    Wp(e, 0);
  }
  function Os(e) {
    var t = Vl(e);
    if (Jh(t)) return e;
  }
  function m0(e, t) {
    if (e === "change") return t;
  }
  var p0 = !1;
  if (sn) {
    var jo;
    if (sn) {
      var Do = "oninput" in document;
      if (!Do) {
        var g0 = document.createElement("div");
        (g0.setAttribute("oninput", "return;"),
          (Do = typeof g0.oninput == "function"));
      }
      jo = Do;
    } else jo = !1;
    p0 = jo && (!document.documentMode || 9 < document.documentMode);
  }
  function y0() {
    nu && (nu.detachEvent("onpropertychange", _0), (iu = nu = null));
  }
  function _0(e) {
    if (e.propertyName === "value" && Os(iu)) {
      var t = [];
      (h0(t, iu, e, wo(e)), t0(X_, t));
    }
  }
  function G_(e, t, a) {
    e === "focusin"
      ? (y0(), (nu = t), (iu = a), nu.attachEvent("onpropertychange", _0))
      : e === "focusout" && y0();
  }
  function V_(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Os(iu);
  }
  function Q_(e, t) {
    if (e === "click") return Os(t);
  }
  function Z_(e, t) {
    if (e === "input" || e === "change") return Os(t);
  }
  function K_(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Ka = typeof Object.is == "function" ? Object.is : K_;
  function ru(e, t) {
    if (Ka(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(e),
      n = Object.keys(t);
    if (a.length !== n.length) return !1;
    for (n = 0; n < a.length; n++) {
      var s = a[n];
      if (!Va.call(t, s) || !Ka(e[s], t[s])) return !1;
    }
    return !0;
  }
  function v0(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function b0(e, t) {
    var a = v0(e);
    e = 0;
    for (var n; a;) {
      if (a.nodeType === 3) {
        if (((n = e + a.textContent.length), e <= t && n >= t))
          return { node: a, offset: t - e };
        e = n;
      }
      e: {
        for (; a;) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = v0(a);
    }
  }
  function x0(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? x0(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function S0(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Ts(e.document); t instanceof e.HTMLIFrameElement;) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Ts(e.document);
    }
    return t;
  }
  function Ro(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var J_ = sn && "documentMode" in document && 11 >= document.documentMode,
    nr = null,
    Uo = null,
    uu = null,
    qo = !1;
  function T0(e, t, a) {
    var n =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    qo ||
      nr == null ||
      nr !== Ts(n) ||
      ((n = nr),
      "selectionStart" in n && Ro(n)
        ? (n = { start: n.selectionStart, end: n.selectionEnd })
        : ((n = (
            (n.ownerDocument && n.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset,
          })),
      (uu && ru(uu, n)) ||
        ((uu = n),
        (n = _c(Uo, "onSelect")),
        0 < n.length &&
          ((t = new ks("onSelect", "select", null, t, a)),
          e.push({ event: t, listeners: n }),
          (t.target = nr))));
  }
  function vi(e, t) {
    var a = {};
    return (
      (a[e.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + e] = "webkit" + t),
      (a["Moz" + e] = "moz" + t),
      a
    );
  }
  var ir = {
      animationend: vi("Animation", "AnimationEnd"),
      animationiteration: vi("Animation", "AnimationIteration"),
      animationstart: vi("Animation", "AnimationStart"),
      transitionrun: vi("Transition", "TransitionRun"),
      transitionstart: vi("Transition", "TransitionStart"),
      transitioncancel: vi("Transition", "TransitionCancel"),
      transitionend: vi("Transition", "TransitionEnd"),
    },
    Bo = {},
    w0 = {};
  sn &&
    ((w0 = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ir.animationend.animation,
      delete ir.animationiteration.animation,
      delete ir.animationstart.animation),
    "TransitionEvent" in window || delete ir.transitionend.transition);
  function bi(e) {
    if (Bo[e]) return Bo[e];
    if (!ir[e]) return e;
    var t = ir[e],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in w0) return (Bo[e] = t[a]);
    return e;
  }
  var E0 = bi("animationend"),
    N0 = bi("animationiteration"),
    A0 = bi("animationstart"),
    W_ = bi("transitionrun"),
    F_ = bi("transitionstart"),
    $_ = bi("transitioncancel"),
    k0 = bi("transitionend"),
    M0 = new Map(),
    Ho =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Ho.push("scrollEnd");
  function ql(e, t) {
    (M0.set(e, t), Ql(t, [e]));
  }
  var zs =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    bl = [],
    rr = 0,
    Yo = 0;
  function Cs() {
    for (var e = rr, t = (Yo = rr = 0); t < e;) {
      var a = bl[t];
      bl[t++] = null;
      var n = bl[t];
      bl[t++] = null;
      var s = bl[t];
      bl[t++] = null;
      var c = bl[t];
      if (((bl[t++] = null), n !== null && s !== null)) {
        var m = n.pending;
        (m === null ? (s.next = s) : ((s.next = m.next), (m.next = s)),
          (n.pending = s));
      }
      c !== 0 && O0(a, s, c);
    }
  }
  function js(e, t, a, n) {
    ((bl[rr++] = e),
      (bl[rr++] = t),
      (bl[rr++] = a),
      (bl[rr++] = n),
      (Yo |= n),
      (e.lanes |= n),
      (e = e.alternate),
      e !== null && (e.lanes |= n));
  }
  function Lo(e, t, a, n) {
    return (js(e, t, a, n), Ds(e));
  }
  function xi(e, t) {
    return (js(e, null, null, t), Ds(e));
  }
  function O0(e, t, a) {
    e.lanes |= a;
    var n = e.alternate;
    n !== null && (n.lanes |= a);
    for (var s = !1, c = e.return; c !== null;)
      ((c.childLanes |= a),
        (n = c.alternate),
        n !== null && (n.childLanes |= a),
        c.tag === 22 &&
          ((e = c.stateNode), e === null || e._visibility & 1 || (s = !0)),
        (e = c),
        (c = c.return));
    return e.tag === 3
      ? ((c = e.stateNode),
        s &&
          t !== null &&
          ((s = 31 - Rt(a)),
          (e = c.hiddenUpdates),
          (n = e[s]),
          n === null ? (e[s] = [t]) : n.push(t),
          (t.lane = a | 536870912)),
        c)
      : null;
  }
  function Ds(e) {
    if (50 < Mu) throw ((Mu = 0), ($f = null), Error(i(185)));
    for (var t = e.return; t !== null;) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var ur = {};
  function P_(e, t, a, n) {
    ((this.tag = e),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = n),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Ja(e, t, a, n) {
    return new P_(e, t, a, n);
  }
  function Xo(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function cn(e, t) {
    var a = e.alternate;
    return (
      a === null
        ? ((a = Ja(e.tag, t, e.key, e.mode)),
          (a.elementType = e.elementType),
          (a.type = e.type),
          (a.stateNode = e.stateNode),
          (a.alternate = e),
          (e.alternate = a))
        : ((a.pendingProps = t),
          (a.type = e.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = e.flags & 65011712),
      (a.childLanes = e.childLanes),
      (a.lanes = e.lanes),
      (a.child = e.child),
      (a.memoizedProps = e.memoizedProps),
      (a.memoizedState = e.memoizedState),
      (a.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = e.sibling),
      (a.index = e.index),
      (a.ref = e.ref),
      (a.refCleanup = e.refCleanup),
      a
    );
  }
  function z0(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return (
      a === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = a.childLanes),
          (e.lanes = a.lanes),
          (e.child = a.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = a.memoizedProps),
          (e.memoizedState = a.memoizedState),
          (e.updateQueue = a.updateQueue),
          (e.type = a.type),
          (t = a.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Rs(e, t, a, n, s, c) {
    var m = 0;
    if (((n = e), typeof e == "function")) Xo(e) && (m = 1);
    else if (typeof e == "string")
      m = lb(e, a, ee.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case J:
          return ((e = Ja(31, a, t, s)), (e.elementType = J), (e.lanes = c), e);
        case T:
          return Si(a.children, s, c, t);
        case O:
          ((m = 8), (s |= 24));
          break;
        case L:
          return (
            (e = Ja(12, a, t, s | 2)),
            (e.elementType = L),
            (e.lanes = c),
            e
          );
        case G:
          return ((e = Ja(13, a, t, s)), (e.elementType = G), (e.lanes = c), e);
        case W:
          return ((e = Ja(19, a, t, s)), (e.elementType = W), (e.lanes = c), e);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Z:
                m = 10;
                break e;
              case X:
                m = 9;
                break e;
              case q:
                m = 11;
                break e;
              case D:
                m = 14;
                break e;
              case F:
                ((m = 16), (n = null));
                break e;
            }
          ((m = 29),
            (a = Error(i(130, e === null ? "null" : typeof e, ""))),
            (n = null));
      }
    return (
      (t = Ja(m, a, t, s)),
      (t.elementType = e),
      (t.type = n),
      (t.lanes = c),
      t
    );
  }
  function Si(e, t, a, n) {
    return ((e = Ja(7, e, n, t)), (e.lanes = a), e);
  }
  function Go(e, t, a) {
    return ((e = Ja(6, e, null, t)), (e.lanes = a), e);
  }
  function C0(e) {
    var t = Ja(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function Vo(e, t, a) {
    return (
      (t = Ja(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var j0 = new WeakMap();
  function xl(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = j0.get(e);
      return a !== void 0
        ? a
        : ((t = { value: e, source: t, stack: ra(t) }), j0.set(e, t), t);
    }
    return { value: e, source: t, stack: ra(t) };
  }
  var sr = [],
    cr = 0,
    Us = null,
    su = 0,
    Sl = [],
    Tl = 0,
    Dn = null,
    Kl = 1,
    Jl = "";
  function on(e, t) {
    ((sr[cr++] = su), (sr[cr++] = Us), (Us = e), (su = t));
  }
  function D0(e, t, a) {
    ((Sl[Tl++] = Kl), (Sl[Tl++] = Jl), (Sl[Tl++] = Dn), (Dn = e));
    var n = Kl;
    e = Jl;
    var s = 32 - Rt(n) - 1;
    ((n &= ~(1 << s)), (a += 1));
    var c = 32 - Rt(t) + s;
    if (30 < c) {
      var m = s - (s % 5);
      ((c = (n & ((1 << m) - 1)).toString(32)),
        (n >>= m),
        (s -= m),
        (Kl = (1 << (32 - Rt(t) + s)) | (a << s) | n),
        (Jl = c + e));
    } else ((Kl = (1 << c) | (a << s) | n), (Jl = e));
  }
  function Qo(e) {
    e.return !== null && (on(e, 1), D0(e, 1, 0));
  }
  function Zo(e) {
    for (; e === Us;)
      ((Us = sr[--cr]), (sr[cr] = null), (su = sr[--cr]), (sr[cr] = null));
    for (; e === Dn;)
      ((Dn = Sl[--Tl]),
        (Sl[Tl] = null),
        (Jl = Sl[--Tl]),
        (Sl[Tl] = null),
        (Kl = Sl[--Tl]),
        (Sl[Tl] = null));
  }
  function R0(e, t) {
    ((Sl[Tl++] = Kl),
      (Sl[Tl++] = Jl),
      (Sl[Tl++] = Dn),
      (Kl = t.id),
      (Jl = t.overflow),
      (Dn = e));
  }
  var ea = null,
    ct = null,
    Le = !1,
    Rn = null,
    wl = !1,
    Ko = Error(i(519));
  function Un(e) {
    var t = Error(
      i(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (cu(xl(t, e)), Ko);
  }
  function U0(e) {
    var t = e.stateNode,
      a = e.type,
      n = e.memoizedProps;
    switch (((t[Ne] = e), (t[ke] = n), a)) {
      case "dialog":
        (Ue("cancel", t), Ue("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        Ue("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < zu.length; a++) Ue(zu[a], t);
        break;
      case "source":
        Ue("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (Ue("error", t), Ue("load", t));
        break;
      case "details":
        Ue("toggle", t);
        break;
      case "input":
        (Ue("invalid", t),
          Wh(
            t,
            n.value,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name,
            !0,
          ));
        break;
      case "select":
        Ue("invalid", t);
        break;
      case "textarea":
        (Ue("invalid", t), $h(t, n.value, n.defaultValue, n.children));
    }
    ((a = n.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      n.suppressHydrationWarning === !0 ||
      Ip(t.textContent, a)
        ? (n.popover != null && (Ue("beforetoggle", t), Ue("toggle", t)),
          n.onScroll != null && Ue("scroll", t),
          n.onScrollEnd != null && Ue("scrollend", t),
          n.onClick != null && (t.onclick = un),
          (t = !0))
        : (t = !1),
      t || Un(e, !0));
  }
  function q0(e) {
    for (ea = e.return; ea;)
      switch (ea.tag) {
        case 5:
        case 31:
        case 13:
          wl = !1;
          return;
        case 27:
        case 3:
          wl = !0;
          return;
        default:
          ea = ea.return;
      }
  }
  function or(e) {
    if (e !== ea) return !1;
    if (!Le) return (q0(e), (Le = !0), !1);
    var t = e.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = e.type),
          (a =
            !(a !== "form" && a !== "button") || dd(e.type, e.memoizedProps))),
        (a = !a)),
      a && ct && Un(e),
      q0(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(i(317));
      ct = sg(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(i(317));
      ct = sg(e);
    } else
      t === 27
        ? ((t = ct), Fn(e.type) ? ((e = yd), (yd = null), (ct = e)) : (ct = t))
        : (ct = ea ? Nl(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Ti() {
    ((ct = ea = null), (Le = !1));
  }
  function Jo() {
    var e = Rn;
    return (
      e !== null &&
        (Ra === null ? (Ra = e) : Ra.push.apply(Ra, e), (Rn = null)),
      e
    );
  }
  function cu(e) {
    Rn === null ? (Rn = [e]) : Rn.push(e);
  }
  var Wo = E(null),
    wi = null,
    fn = null;
  function qn(e, t, a) {
    (I(Wo, t._currentValue), (t._currentValue = a));
  }
  function dn(e) {
    ((e._currentValue = Wo.current), H(Wo));
  }
  function Fo(e, t, a) {
    for (; e !== null;) {
      var n = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
          : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
        e === a)
      )
        break;
      e = e.return;
    }
  }
  function $o(e, t, a, n) {
    var s = e.child;
    for (s !== null && (s.return = e); s !== null;) {
      var c = s.dependencies;
      if (c !== null) {
        var m = s.child;
        c = c.firstContext;
        e: for (; c !== null;) {
          var v = c;
          c = s;
          for (var w = 0; w < t.length; w++)
            if (v.context === t[w]) {
              ((c.lanes |= a),
                (v = c.alternate),
                v !== null && (v.lanes |= a),
                Fo(c.return, a, e),
                n || (m = null));
              break e;
            }
          c = v.next;
        }
      } else if (s.tag === 18) {
        if (((m = s.return), m === null)) throw Error(i(341));
        ((m.lanes |= a),
          (c = m.alternate),
          c !== null && (c.lanes |= a),
          Fo(m, a, e),
          (m = null));
      } else m = s.child;
      if (m !== null) m.return = s;
      else
        for (m = s; m !== null;) {
          if (m === e) {
            m = null;
            break;
          }
          if (((s = m.sibling), s !== null)) {
            ((s.return = m.return), (m = s));
            break;
          }
          m = m.return;
        }
      s = m;
    }
  }
  function fr(e, t, a, n) {
    e = null;
    for (var s = t, c = !1; s !== null;) {
      if (!c) {
        if ((s.flags & 524288) !== 0) c = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var m = s.alternate;
        if (m === null) throw Error(i(387));
        if (((m = m.memoizedProps), m !== null)) {
          var v = s.type;
          Ka(s.pendingProps.value, m.value) ||
            (e !== null ? e.push(v) : (e = [v]));
        }
      } else if (s === me.current) {
        if (((m = s.alternate), m === null)) throw Error(i(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (e !== null ? e.push(Uu) : (e = [Uu]));
      }
      s = s.return;
    }
    (e !== null && $o(t, e, a, n), (t.flags |= 262144));
  }
  function qs(e) {
    for (e = e.firstContext; e !== null;) {
      if (!Ka(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Ei(e) {
    ((wi = e),
      (fn = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function ta(e) {
    return B0(wi, e);
  }
  function Bs(e, t) {
    return (wi === null && Ei(e), B0(e, t));
  }
  function B0(e, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), fn === null)) {
      if (e === null) throw Error(i(308));
      ((fn = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else fn = fn.next = t;
    return a;
  }
  var I_ =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, n) {
                  e.push(n);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (a) {
                  return a();
                }));
            };
          },
    ev = f.unstable_scheduleCallback,
    tv = f.unstable_NormalPriority,
    Ut = {
      $$typeof: Z,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Po() {
    return { controller: new I_(), data: new Map(), refCount: 0 };
  }
  function ou(e) {
    (e.refCount--,
      e.refCount === 0 &&
        ev(tv, function () {
          e.controller.abort();
        }));
  }
  var fu = null,
    Io = 0,
    dr = 0,
    hr = null;
  function av(e, t) {
    if (fu === null) {
      var a = (fu = []);
      ((Io = 0),
        (dr = ld()),
        (hr = {
          status: "pending",
          value: void 0,
          then: function (n) {
            a.push(n);
          },
        }));
    }
    return (Io++, t.then(H0, H0), t);
  }
  function H0() {
    if (--Io === 0 && fu !== null) {
      hr !== null && (hr.status = "fulfilled");
      var e = fu;
      ((fu = null), (dr = 0), (hr = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function lv(e, t) {
    var a = [],
      n = {
        status: "pending",
        value: null,
        reason: null,
        then: function (s) {
          a.push(s);
        },
      };
    return (
      e.then(
        function () {
          ((n.status = "fulfilled"), (n.value = t));
          for (var s = 0; s < a.length; s++) (0, a[s])(t);
        },
        function (s) {
          for (n.status = "rejected", n.reason = s, s = 0; s < a.length; s++)
            (0, a[s])(void 0);
        },
      ),
      n
    );
  }
  var Y0 = z.S;
  z.S = function (e, t) {
    ((Tp = At()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        av(e, t),
      Y0 !== null && Y0(e, t));
  };
  var Ni = E(null);
  function ef() {
    var e = Ni.current;
    return e !== null ? e : at.pooledCache;
  }
  function Hs(e, t) {
    t === null ? I(Ni, Ni.current) : I(Ni, t.pool);
  }
  function L0() {
    var e = ef();
    return e === null ? null : { parent: Ut._currentValue, pool: e };
  }
  var mr = Error(i(460)),
    tf = Error(i(474)),
    Ys = Error(i(542)),
    Ls = { then: function () {} };
  function X0(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function G0(e, t, a) {
    switch (
      ((a = e[a]),
      a === void 0 ? e.push(t) : a !== t && (t.then(un, un), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), Q0(e), e);
      default:
        if (typeof t.status == "string") t.then(un, un);
        else {
          if (((e = at), e !== null && 100 < e.shellSuspendCounter))
            throw Error(i(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (n) {
                if (t.status === "pending") {
                  var s = t;
                  ((s.status = "fulfilled"), (s.value = n));
                }
              },
              function (n) {
                if (t.status === "pending") {
                  var s = t;
                  ((s.status = "rejected"), (s.reason = n));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), Q0(e), e);
        }
        throw ((ki = t), mr);
    }
  }
  function Ai(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function"
        ? ((ki = a), mr)
        : a;
    }
  }
  var ki = null;
  function V0() {
    if (ki === null) throw Error(i(459));
    var e = ki;
    return ((ki = null), e);
  }
  function Q0(e) {
    if (e === mr || e === Ys) throw Error(i(483));
  }
  var pr = null,
    du = 0;
  function Xs(e) {
    var t = du;
    return ((du += 1), pr === null && (pr = []), G0(pr, e, t));
  }
  function hu(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function Gs(e, t) {
    throw t.$$typeof === S
      ? Error(i(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          i(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function Z0(e) {
    function t(M, N) {
      if (e) {
        var C = M.deletions;
        C === null ? ((M.deletions = [N]), (M.flags |= 16)) : C.push(N);
      }
    }
    function a(M, N) {
      if (!e) return null;
      for (; N !== null;) (t(M, N), (N = N.sibling));
      return null;
    }
    function n(M) {
      for (var N = new Map(); M !== null;)
        (M.key !== null ? N.set(M.key, M) : N.set(M.index, M), (M = M.sibling));
      return N;
    }
    function s(M, N) {
      return ((M = cn(M, N)), (M.index = 0), (M.sibling = null), M);
    }
    function c(M, N, C) {
      return (
        (M.index = C),
        e
          ? ((C = M.alternate),
            C !== null
              ? ((C = C.index), C < N ? ((M.flags |= 67108866), N) : C)
              : ((M.flags |= 67108866), N))
          : ((M.flags |= 1048576), N)
      );
    }
    function m(M) {
      return (e && M.alternate === null && (M.flags |= 67108866), M);
    }
    function v(M, N, C, Q) {
      return N === null || N.tag !== 6
        ? ((N = Go(C, M.mode, Q)), (N.return = M), N)
        : ((N = s(N, C)), (N.return = M), N);
    }
    function w(M, N, C, Q) {
      var oe = C.type;
      return oe === T
        ? Y(M, N, C.props.children, Q, C.key)
        : N !== null &&
            (N.elementType === oe ||
              (typeof oe == "object" &&
                oe !== null &&
                oe.$$typeof === F &&
                Ai(oe) === N.type))
          ? ((N = s(N, C.props)), hu(N, C), (N.return = M), N)
          : ((N = Rs(C.type, C.key, C.props, null, M.mode, Q)),
            hu(N, C),
            (N.return = M),
            N);
    }
    function j(M, N, C, Q) {
      return N === null ||
        N.tag !== 4 ||
        N.stateNode.containerInfo !== C.containerInfo ||
        N.stateNode.implementation !== C.implementation
        ? ((N = Vo(C, M.mode, Q)), (N.return = M), N)
        : ((N = s(N, C.children || [])), (N.return = M), N);
    }
    function Y(M, N, C, Q, oe) {
      return N === null || N.tag !== 7
        ? ((N = Si(C, M.mode, Q, oe)), (N.return = M), N)
        : ((N = s(N, C)), (N.return = M), N);
    }
    function K(M, N, C) {
      if (
        (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
      )
        return ((N = Go("" + N, M.mode, C)), (N.return = M), N);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case x:
            return (
              (C = Rs(N.type, N.key, N.props, null, M.mode, C)),
              hu(C, N),
              (C.return = M),
              C
            );
          case A:
            return ((N = Vo(N, M.mode, C)), (N.return = M), N);
          case F:
            return ((N = Ai(N)), K(M, N, C));
        }
        if (_e(N) || P(N))
          return ((N = Si(N, M.mode, C, null)), (N.return = M), N);
        if (typeof N.then == "function") return K(M, Xs(N), C);
        if (N.$$typeof === Z) return K(M, Bs(M, N), C);
        Gs(M, N);
      }
      return null;
    }
    function R(M, N, C, Q) {
      var oe = N !== null ? N.key : null;
      if (
        (typeof C == "string" && C !== "") ||
        typeof C == "number" ||
        typeof C == "bigint"
      )
        return oe !== null ? null : v(M, N, "" + C, Q);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case x:
            return C.key === oe ? w(M, N, C, Q) : null;
          case A:
            return C.key === oe ? j(M, N, C, Q) : null;
          case F:
            return ((C = Ai(C)), R(M, N, C, Q));
        }
        if (_e(C) || P(C)) return oe !== null ? null : Y(M, N, C, Q, null);
        if (typeof C.then == "function") return R(M, N, Xs(C), Q);
        if (C.$$typeof === Z) return R(M, N, Bs(M, C), Q);
        Gs(M, C);
      }
      return null;
    }
    function U(M, N, C, Q, oe) {
      if (
        (typeof Q == "string" && Q !== "") ||
        typeof Q == "number" ||
        typeof Q == "bigint"
      )
        return ((M = M.get(C) || null), v(N, M, "" + Q, oe));
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case x:
            return (
              (M = M.get(Q.key === null ? C : Q.key) || null),
              w(N, M, Q, oe)
            );
          case A:
            return (
              (M = M.get(Q.key === null ? C : Q.key) || null),
              j(N, M, Q, oe)
            );
          case F:
            return ((Q = Ai(Q)), U(M, N, C, Q, oe));
        }
        if (_e(Q) || P(Q))
          return ((M = M.get(C) || null), Y(N, M, Q, oe, null));
        if (typeof Q.then == "function") return U(M, N, C, Xs(Q), oe);
        if (Q.$$typeof === Z) return U(M, N, C, Bs(N, Q), oe);
        Gs(N, Q);
      }
      return null;
    }
    function ne(M, N, C, Q) {
      for (
        var oe = null, Qe = null, re = N, Ee = (N = 0), Ye = null;
        re !== null && Ee < C.length;
        Ee++
      ) {
        re.index > Ee ? ((Ye = re), (re = null)) : (Ye = re.sibling);
        var Ze = R(M, re, C[Ee], Q);
        if (Ze === null) {
          re === null && (re = Ye);
          break;
        }
        (e && re && Ze.alternate === null && t(M, re),
          (N = c(Ze, N, Ee)),
          Qe === null ? (oe = Ze) : (Qe.sibling = Ze),
          (Qe = Ze),
          (re = Ye));
      }
      if (Ee === C.length) return (a(M, re), Le && on(M, Ee), oe);
      if (re === null) {
        for (; Ee < C.length; Ee++)
          ((re = K(M, C[Ee], Q)),
            re !== null &&
              ((N = c(re, N, Ee)),
              Qe === null ? (oe = re) : (Qe.sibling = re),
              (Qe = re)));
        return (Le && on(M, Ee), oe);
      }
      for (re = n(re); Ee < C.length; Ee++)
        ((Ye = U(re, M, Ee, C[Ee], Q)),
          Ye !== null &&
            (e &&
              Ye.alternate !== null &&
              re.delete(Ye.key === null ? Ee : Ye.key),
            (N = c(Ye, N, Ee)),
            Qe === null ? (oe = Ye) : (Qe.sibling = Ye),
            (Qe = Ye)));
      return (
        e &&
          re.forEach(function (ti) {
            return t(M, ti);
          }),
        Le && on(M, Ee),
        oe
      );
    }
    function pe(M, N, C, Q) {
      if (C == null) throw Error(i(151));
      for (
        var oe = null,
          Qe = null,
          re = N,
          Ee = (N = 0),
          Ye = null,
          Ze = C.next();
        re !== null && !Ze.done;
        Ee++, Ze = C.next()
      ) {
        re.index > Ee ? ((Ye = re), (re = null)) : (Ye = re.sibling);
        var ti = R(M, re, Ze.value, Q);
        if (ti === null) {
          re === null && (re = Ye);
          break;
        }
        (e && re && ti.alternate === null && t(M, re),
          (N = c(ti, N, Ee)),
          Qe === null ? (oe = ti) : (Qe.sibling = ti),
          (Qe = ti),
          (re = Ye));
      }
      if (Ze.done) return (a(M, re), Le && on(M, Ee), oe);
      if (re === null) {
        for (; !Ze.done; Ee++, Ze = C.next())
          ((Ze = K(M, Ze.value, Q)),
            Ze !== null &&
              ((N = c(Ze, N, Ee)),
              Qe === null ? (oe = Ze) : (Qe.sibling = Ze),
              (Qe = Ze)));
        return (Le && on(M, Ee), oe);
      }
      for (re = n(re); !Ze.done; Ee++, Ze = C.next())
        ((Ze = U(re, M, Ee, Ze.value, Q)),
          Ze !== null &&
            (e &&
              Ze.alternate !== null &&
              re.delete(Ze.key === null ? Ee : Ze.key),
            (N = c(Ze, N, Ee)),
            Qe === null ? (oe = Ze) : (Qe.sibling = Ze),
            (Qe = Ze)));
      return (
        e &&
          re.forEach(function (mb) {
            return t(M, mb);
          }),
        Le && on(M, Ee),
        oe
      );
    }
    function tt(M, N, C, Q) {
      if (
        (typeof C == "object" &&
          C !== null &&
          C.type === T &&
          C.key === null &&
          (C = C.props.children),
        typeof C == "object" && C !== null)
      ) {
        switch (C.$$typeof) {
          case x:
            e: {
              for (var oe = C.key; N !== null;) {
                if (N.key === oe) {
                  if (((oe = C.type), oe === T)) {
                    if (N.tag === 7) {
                      (a(M, N.sibling),
                        (Q = s(N, C.props.children)),
                        (Q.return = M),
                        (M = Q));
                      break e;
                    }
                  } else if (
                    N.elementType === oe ||
                    (typeof oe == "object" &&
                      oe !== null &&
                      oe.$$typeof === F &&
                      Ai(oe) === N.type)
                  ) {
                    (a(M, N.sibling),
                      (Q = s(N, C.props)),
                      hu(Q, C),
                      (Q.return = M),
                      (M = Q));
                    break e;
                  }
                  a(M, N);
                  break;
                } else t(M, N);
                N = N.sibling;
              }
              C.type === T
                ? ((Q = Si(C.props.children, M.mode, Q, C.key)),
                  (Q.return = M),
                  (M = Q))
                : ((Q = Rs(C.type, C.key, C.props, null, M.mode, Q)),
                  hu(Q, C),
                  (Q.return = M),
                  (M = Q));
            }
            return m(M);
          case A:
            e: {
              for (oe = C.key; N !== null;) {
                if (N.key === oe)
                  if (
                    N.tag === 4 &&
                    N.stateNode.containerInfo === C.containerInfo &&
                    N.stateNode.implementation === C.implementation
                  ) {
                    (a(M, N.sibling),
                      (Q = s(N, C.children || [])),
                      (Q.return = M),
                      (M = Q));
                    break e;
                  } else {
                    a(M, N);
                    break;
                  }
                else t(M, N);
                N = N.sibling;
              }
              ((Q = Vo(C, M.mode, Q)), (Q.return = M), (M = Q));
            }
            return m(M);
          case F:
            return ((C = Ai(C)), tt(M, N, C, Q));
        }
        if (_e(C)) return ne(M, N, C, Q);
        if (P(C)) {
          if (((oe = P(C)), typeof oe != "function")) throw Error(i(150));
          return ((C = oe.call(C)), pe(M, N, C, Q));
        }
        if (typeof C.then == "function") return tt(M, N, Xs(C), Q);
        if (C.$$typeof === Z) return tt(M, N, Bs(M, C), Q);
        Gs(M, C);
      }
      return (typeof C == "string" && C !== "") ||
        typeof C == "number" ||
        typeof C == "bigint"
        ? ((C = "" + C),
          N !== null && N.tag === 6
            ? (a(M, N.sibling), (Q = s(N, C)), (Q.return = M), (M = Q))
            : (a(M, N), (Q = Go(C, M.mode, Q)), (Q.return = M), (M = Q)),
          m(M))
        : a(M, N);
    }
    return function (M, N, C, Q) {
      try {
        du = 0;
        var oe = tt(M, N, C, Q);
        return ((pr = null), oe);
      } catch (re) {
        if (re === mr || re === Ys) throw re;
        var Qe = Ja(29, re, null, M.mode);
        return ((Qe.lanes = Q), (Qe.return = M), Qe);
      }
    };
  }
  var Mi = Z0(!0),
    K0 = Z0(!1),
    Bn = !1;
  function af(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function lf(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function Hn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Yn(e, t, a) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (((n = n.shared), (Je & 2) !== 0)) {
      var s = n.pending;
      return (
        s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
        (n.pending = t),
        (t = Ds(e)),
        O0(e, null, a),
        t
      );
    }
    return (js(e, n, t, a), Ds(e));
  }
  function mu(e, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var n = t.lanes;
      ((n &= e.pendingLanes), (a |= n), (t.lanes = a), be(e, a));
    }
  }
  function nf(e, t) {
    var a = e.updateQueue,
      n = e.alternate;
    if (n !== null && ((n = n.updateQueue), a === n)) {
      var s = null,
        c = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var m = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          (c === null ? (s = c = m) : (c = c.next = m), (a = a.next));
        } while (a !== null);
        c === null ? (s = c = t) : (c = c.next = t);
      } else s = c = t;
      ((a = {
        baseState: n.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: c,
        shared: n.shared,
        callbacks: n.callbacks,
      }),
        (e.updateQueue = a));
      return;
    }
    ((e = a.lastBaseUpdate),
      e === null ? (a.firstBaseUpdate = t) : (e.next = t),
      (a.lastBaseUpdate = t));
  }
  var rf = !1;
  function pu() {
    if (rf) {
      var e = hr;
      if (e !== null) throw e;
    }
  }
  function gu(e, t, a, n) {
    rf = !1;
    var s = e.updateQueue;
    Bn = !1;
    var c = s.firstBaseUpdate,
      m = s.lastBaseUpdate,
      v = s.shared.pending;
    if (v !== null) {
      s.shared.pending = null;
      var w = v,
        j = w.next;
      ((w.next = null), m === null ? (c = j) : (m.next = j), (m = w));
      var Y = e.alternate;
      Y !== null &&
        ((Y = Y.updateQueue),
        (v = Y.lastBaseUpdate),
        v !== m &&
          (v === null ? (Y.firstBaseUpdate = j) : (v.next = j),
          (Y.lastBaseUpdate = w)));
    }
    if (c !== null) {
      var K = s.baseState;
      ((m = 0), (Y = j = w = null), (v = c));
      do {
        var R = v.lane & -536870913,
          U = R !== v.lane;
        if (U ? (He & R) === R : (n & R) === R) {
          (R !== 0 && R === dr && (rf = !0),
            Y !== null &&
              (Y = Y.next =
                {
                  lane: 0,
                  tag: v.tag,
                  payload: v.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var ne = e,
              pe = v;
            R = t;
            var tt = a;
            switch (pe.tag) {
              case 1:
                if (((ne = pe.payload), typeof ne == "function")) {
                  K = ne.call(tt, K, R);
                  break e;
                }
                K = ne;
                break e;
              case 3:
                ne.flags = (ne.flags & -65537) | 128;
              case 0:
                if (
                  ((ne = pe.payload),
                  (R = typeof ne == "function" ? ne.call(tt, K, R) : ne),
                  R == null)
                )
                  break e;
                K = b({}, K, R);
                break e;
              case 2:
                Bn = !0;
            }
          }
          ((R = v.callback),
            R !== null &&
              ((e.flags |= 64),
              U && (e.flags |= 8192),
              (U = s.callbacks),
              U === null ? (s.callbacks = [R]) : U.push(R)));
        } else
          ((U = {
            lane: R,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            Y === null ? ((j = Y = U), (w = K)) : (Y = Y.next = U),
            (m |= R));
        if (((v = v.next), v === null)) {
          if (((v = s.shared.pending), v === null)) break;
          ((U = v),
            (v = U.next),
            (U.next = null),
            (s.lastBaseUpdate = U),
            (s.shared.pending = null));
        }
      } while (!0);
      (Y === null && (w = K),
        (s.baseState = w),
        (s.firstBaseUpdate = j),
        (s.lastBaseUpdate = Y),
        c === null && (s.shared.lanes = 0),
        (Qn |= m),
        (e.lanes = m),
        (e.memoizedState = K));
    }
  }
  function J0(e, t) {
    if (typeof e != "function") throw Error(i(191, e));
    e.call(t);
  }
  function W0(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++) J0(a[e], t);
  }
  var gr = E(null),
    Vs = E(0);
  function F0(e, t) {
    ((e = xn), I(Vs, e), I(gr, t), (xn = e | t.baseLanes));
  }
  function uf() {
    (I(Vs, xn), I(gr, gr.current));
  }
  function sf() {
    ((xn = Vs.current), H(gr), H(Vs));
  }
  var Wa = E(null),
    El = null;
  function Ln(e) {
    var t = e.alternate;
    (I(Mt, Mt.current & 1),
      I(Wa, e),
      El === null &&
        (t === null || gr.current !== null || t.memoizedState !== null) &&
        (El = e));
  }
  function cf(e) {
    (I(Mt, Mt.current), I(Wa, e), El === null && (El = e));
  }
  function $0(e) {
    e.tag === 22
      ? (I(Mt, Mt.current), I(Wa, e), El === null && (El = e))
      : Xn();
  }
  function Xn() {
    (I(Mt, Mt.current), I(Wa, Wa.current));
  }
  function Fa(e) {
    (H(Wa), El === e && (El = null), H(Mt));
  }
  var Mt = E(0);
  function Qs(e) {
    for (var t = e; t !== null;) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || pd(a) || gd(a)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var hn = 0,
    we = null,
    Ie = null,
    qt = null,
    Zs = !1,
    yr = !1,
    Oi = !1,
    Ks = 0,
    yu = 0,
    _r = null,
    nv = 0;
  function wt() {
    throw Error(i(321));
  }
  function of(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!Ka(e[a], t[a])) return !1;
    return !0;
  }
  function ff(e, t, a, n, s, c) {
    return (
      (hn = c),
      (we = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (z.H = e === null || e.memoizedState === null ? Dm : Nf),
      (Oi = !1),
      (c = a(n, s)),
      (Oi = !1),
      yr && (c = I0(t, a, n, s)),
      P0(e),
      c
    );
  }
  function P0(e) {
    z.H = bu;
    var t = Ie !== null && Ie.next !== null;
    if (((hn = 0), (qt = Ie = we = null), (Zs = !1), (yu = 0), (_r = null), t))
      throw Error(i(300));
    e === null ||
      Bt ||
      ((e = e.dependencies), e !== null && qs(e) && (Bt = !0));
  }
  function I0(e, t, a, n) {
    we = e;
    var s = 0;
    do {
      if ((yr && (_r = null), (yu = 0), (yr = !1), 25 <= s))
        throw Error(i(301));
      if (((s += 1), (qt = Ie = null), e.updateQueue != null)) {
        var c = e.updateQueue;
        ((c.lastEffect = null),
          (c.events = null),
          (c.stores = null),
          c.memoCache != null && (c.memoCache.index = 0));
      }
      ((z.H = Rm), (c = t(a, n)));
    } while (yr);
    return c;
  }
  function iv() {
    var e = z.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? _u(t) : t),
      (e = e.useState()[0]),
      (Ie !== null ? Ie.memoizedState : null) !== e && (we.flags |= 1024),
      t
    );
  }
  function df() {
    var e = Ks !== 0;
    return ((Ks = 0), e);
  }
  function hf(e, t, a) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a));
  }
  function mf(e) {
    if (Zs) {
      for (e = e.memoizedState; e !== null;) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      Zs = !1;
    }
    ((hn = 0), (qt = Ie = we = null), (yr = !1), (yu = Ks = 0), (_r = null));
  }
  function va() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (qt === null ? (we.memoizedState = qt = e) : (qt = qt.next = e), qt);
  }
  function Ot() {
    if (Ie === null) {
      var e = we.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ie.next;
    var t = qt === null ? we.memoizedState : qt.next;
    if (t !== null) ((qt = t), (Ie = e));
    else {
      if (e === null)
        throw we.alternate === null ? Error(i(467)) : Error(i(310));
      ((Ie = e),
        (e = {
          memoizedState: Ie.memoizedState,
          baseState: Ie.baseState,
          baseQueue: Ie.baseQueue,
          queue: Ie.queue,
          next: null,
        }),
        qt === null ? (we.memoizedState = qt = e) : (qt = qt.next = e));
    }
    return qt;
  }
  function Js() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function _u(e) {
    var t = yu;
    return (
      (yu += 1),
      _r === null && (_r = []),
      (e = G0(_r, e, t)),
      (t = we),
      (qt === null ? t.memoizedState : qt.next) === null &&
        ((t = t.alternate),
        (z.H = t === null || t.memoizedState === null ? Dm : Nf)),
      e
    );
  }
  function Ws(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return _u(e);
      if (e.$$typeof === Z) return ta(e);
    }
    throw Error(i(438, String(e)));
  }
  function pf(e) {
    var t = null,
      a = we.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var n = we.alternate;
      n !== null &&
        ((n = n.updateQueue),
        n !== null &&
          ((n = n.memoCache),
          n != null &&
            (t = {
              data: n.data.map(function (s) {
                return s.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = Js()), (we.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(e), n = 0; n < e; n++) a[n] = $;
    return (t.index++, a);
  }
  function mn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Fs(e) {
    var t = Ot();
    return gf(t, Ie, e);
  }
  function gf(e, t, a) {
    var n = e.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = a;
    var s = e.baseQueue,
      c = n.pending;
    if (c !== null) {
      if (s !== null) {
        var m = s.next;
        ((s.next = c.next), (c.next = m));
      }
      ((t.baseQueue = s = c), (n.pending = null));
    }
    if (((c = e.baseState), s === null)) e.memoizedState = c;
    else {
      t = s.next;
      var v = (m = null),
        w = null,
        j = t,
        Y = !1;
      do {
        var K = j.lane & -536870913;
        if (K !== j.lane ? (He & K) === K : (hn & K) === K) {
          var R = j.revertLane;
          if (R === 0)
            (w !== null &&
              (w = w.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: j.action,
                  hasEagerState: j.hasEagerState,
                  eagerState: j.eagerState,
                  next: null,
                }),
              K === dr && (Y = !0));
          else if ((hn & R) === R) {
            ((j = j.next), R === dr && (Y = !0));
            continue;
          } else
            ((K = {
              lane: 0,
              revertLane: j.revertLane,
              gesture: null,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null,
            }),
              w === null ? ((v = w = K), (m = c)) : (w = w.next = K),
              (we.lanes |= R),
              (Qn |= R));
          ((K = j.action),
            Oi && a(c, K),
            (c = j.hasEagerState ? j.eagerState : a(c, K)));
        } else
          ((R = {
            lane: K,
            revertLane: j.revertLane,
            gesture: j.gesture,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null,
          }),
            w === null ? ((v = w = R), (m = c)) : (w = w.next = R),
            (we.lanes |= K),
            (Qn |= K));
        j = j.next;
      } while (j !== null && j !== t);
      if (
        (w === null ? (m = c) : (w.next = v),
        !Ka(c, e.memoizedState) && ((Bt = !0), Y && ((a = hr), a !== null)))
      )
        throw a;
      ((e.memoizedState = c),
        (e.baseState = m),
        (e.baseQueue = w),
        (n.lastRenderedState = c));
    }
    return (s === null && (n.lanes = 0), [e.memoizedState, n.dispatch]);
  }
  function yf(e) {
    var t = Ot(),
      a = t.queue;
    if (a === null) throw Error(i(311));
    a.lastRenderedReducer = e;
    var n = a.dispatch,
      s = a.pending,
      c = t.memoizedState;
    if (s !== null) {
      a.pending = null;
      var m = (s = s.next);
      do ((c = e(c, m.action)), (m = m.next));
      while (m !== s);
      (Ka(c, t.memoizedState) || (Bt = !0),
        (t.memoizedState = c),
        t.baseQueue === null && (t.baseState = c),
        (a.lastRenderedState = c));
    }
    return [c, n];
  }
  function em(e, t, a) {
    var n = we,
      s = Ot(),
      c = Le;
    if (c) {
      if (a === void 0) throw Error(i(407));
      a = a();
    } else a = t();
    var m = !Ka((Ie || s).memoizedState, a);
    if (
      (m && ((s.memoizedState = a), (Bt = !0)),
      (s = s.queue),
      bf(lm.bind(null, n, s, e), [e]),
      s.getSnapshot !== t || m || (qt !== null && qt.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        vr(9, { destroy: void 0 }, am.bind(null, n, s, a, t), null),
        at === null)
      )
        throw Error(i(349));
      c || (hn & 127) !== 0 || tm(n, t, a);
    }
    return a;
  }
  function tm(e, t, a) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: a }),
      (t = we.updateQueue),
      t === null
        ? ((t = Js()), (we.updateQueue = t), (t.stores = [e]))
        : ((a = t.stores), a === null ? (t.stores = [e]) : a.push(e)));
  }
  function am(e, t, a, n) {
    ((t.value = a), (t.getSnapshot = n), nm(t) && im(e));
  }
  function lm(e, t, a) {
    return a(function () {
      nm(t) && im(e);
    });
  }
  function nm(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !Ka(e, a);
    } catch {
      return !0;
    }
  }
  function im(e) {
    var t = xi(e, 2);
    t !== null && Ua(t, e, 2);
  }
  function _f(e) {
    var t = va();
    if (typeof e == "function") {
      var a = e;
      if (((e = a()), Oi)) {
        ga(!0);
        try {
          a();
        } finally {
          ga(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: mn,
        lastRenderedState: e,
      }),
      t
    );
  }
  function rm(e, t, a, n) {
    return ((e.baseState = a), gf(e, Ie, typeof n == "function" ? n : mn));
  }
  function rv(e, t, a, n, s) {
    if (Is(e)) throw Error(i(485));
    if (((e = t.action), e !== null)) {
      var c = {
        payload: s,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (m) {
          c.listeners.push(m);
        },
      };
      (z.T !== null ? a(!0) : (c.isTransition = !1),
        n(c),
        (a = t.pending),
        a === null
          ? ((c.next = t.pending = c), um(t, c))
          : ((c.next = a.next), (t.pending = a.next = c)));
    }
  }
  function um(e, t) {
    var a = t.action,
      n = t.payload,
      s = e.state;
    if (t.isTransition) {
      var c = z.T,
        m = {};
      z.T = m;
      try {
        var v = a(s, n),
          w = z.S;
        (w !== null && w(m, v), sm(e, t, v));
      } catch (j) {
        vf(e, t, j);
      } finally {
        (c !== null && m.types !== null && (c.types = m.types), (z.T = c));
      }
    } else
      try {
        ((c = a(s, n)), sm(e, t, c));
      } catch (j) {
        vf(e, t, j);
      }
  }
  function sm(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (n) {
            cm(e, t, n);
          },
          function (n) {
            return vf(e, t, n);
          },
        )
      : cm(e, t, a);
  }
  function cm(e, t, a) {
    ((t.status = "fulfilled"),
      (t.value = a),
      om(t),
      (e.state = a),
      (t = e.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (e.pending = null) : ((a = a.next), (t.next = a), um(e, a))));
  }
  function vf(e, t, a) {
    var n = e.pending;
    if (((e.pending = null), n !== null)) {
      n = n.next;
      do ((t.status = "rejected"), (t.reason = a), om(t), (t = t.next));
      while (t !== n);
    }
    e.action = null;
  }
  function om(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function fm(e, t) {
    return t;
  }
  function dm(e, t) {
    if (Le) {
      var a = at.formState;
      if (a !== null) {
        e: {
          var n = we;
          if (Le) {
            if (ct) {
              t: {
                for (var s = ct, c = wl; s.nodeType !== 8;) {
                  if (!c) {
                    s = null;
                    break t;
                  }
                  if (((s = Nl(s.nextSibling)), s === null)) {
                    s = null;
                    break t;
                  }
                }
                ((c = s.data), (s = c === "F!" || c === "F" ? s : null));
              }
              if (s) {
                ((ct = Nl(s.nextSibling)), (n = s.data === "F!"));
                break e;
              }
            }
            Un(n);
          }
          n = !1;
        }
        n && (t = a[0]);
      }
    }
    return (
      (a = va()),
      (a.memoizedState = a.baseState = t),
      (n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fm,
        lastRenderedState: t,
      }),
      (a.queue = n),
      (a = zm.bind(null, we, n)),
      (n.dispatch = a),
      (n = _f(!1)),
      (c = Ef.bind(null, we, !1, n.queue)),
      (n = va()),
      (s = { state: t, dispatch: null, action: e, pending: null }),
      (n.queue = s),
      (a = rv.bind(null, we, s, c, a)),
      (s.dispatch = a),
      (n.memoizedState = e),
      [t, a, !1]
    );
  }
  function hm(e) {
    var t = Ot();
    return mm(t, Ie, e);
  }
  function mm(e, t, a) {
    if (
      ((t = gf(e, t, fm)[0]),
      (e = Fs(mn)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var n = _u(t);
      } catch (m) {
        throw m === mr ? Ys : m;
      }
    else n = t;
    t = Ot();
    var s = t.queue,
      c = s.dispatch;
    return (
      a !== t.memoizedState &&
        ((we.flags |= 2048),
        vr(9, { destroy: void 0 }, uv.bind(null, s, a), null)),
      [n, c, e]
    );
  }
  function uv(e, t) {
    e.action = t;
  }
  function pm(e) {
    var t = Ot(),
      a = Ie;
    if (a !== null) return mm(t, a, e);
    (Ot(), (t = t.memoizedState), (a = Ot()));
    var n = a.queue.dispatch;
    return ((a.memoizedState = e), [t, n, !1]);
  }
  function vr(e, t, a, n) {
    return (
      (e = { tag: e, create: a, deps: n, inst: t, next: null }),
      (t = we.updateQueue),
      t === null && ((t = Js()), (we.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = e.next = e)
        : ((n = a.next), (a.next = e), (e.next = n), (t.lastEffect = e)),
      e
    );
  }
  function gm() {
    return Ot().memoizedState;
  }
  function $s(e, t, a, n) {
    var s = va();
    ((we.flags |= e),
      (s.memoizedState = vr(
        1 | t,
        { destroy: void 0 },
        a,
        n === void 0 ? null : n,
      )));
  }
  function Ps(e, t, a, n) {
    var s = Ot();
    n = n === void 0 ? null : n;
    var c = s.memoizedState.inst;
    Ie !== null && n !== null && of(n, Ie.memoizedState.deps)
      ? (s.memoizedState = vr(t, c, a, n))
      : ((we.flags |= e), (s.memoizedState = vr(1 | t, c, a, n)));
  }
  function ym(e, t) {
    $s(8390656, 8, e, t);
  }
  function bf(e, t) {
    Ps(2048, 8, e, t);
  }
  function sv(e) {
    we.flags |= 4;
    var t = we.updateQueue;
    if (t === null) ((t = Js()), (we.updateQueue = t), (t.events = [e]));
    else {
      var a = t.events;
      a === null ? (t.events = [e]) : a.push(e);
    }
  }
  function _m(e) {
    var t = Ot().memoizedState;
    return (
      sv({ ref: t, nextImpl: e }),
      function () {
        if ((Je & 2) !== 0) throw Error(i(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function vm(e, t) {
    return Ps(4, 2, e, t);
  }
  function bm(e, t) {
    return Ps(4, 4, e, t);
  }
  function xm(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Sm(e, t, a) {
    ((a = a != null ? a.concat([e]) : null), Ps(4, 4, xm.bind(null, t, e), a));
  }
  function xf() {}
  function Tm(e, t) {
    var a = Ot();
    t = t === void 0 ? null : t;
    var n = a.memoizedState;
    return t !== null && of(t, n[1]) ? n[0] : ((a.memoizedState = [e, t]), e);
  }
  function wm(e, t) {
    var a = Ot();
    t = t === void 0 ? null : t;
    var n = a.memoizedState;
    if (t !== null && of(t, n[1])) return n[0];
    if (((n = e()), Oi)) {
      ga(!0);
      try {
        e();
      } finally {
        ga(!1);
      }
    }
    return ((a.memoizedState = [n, t]), n);
  }
  function Sf(e, t, a) {
    return a === void 0 || ((hn & 1073741824) !== 0 && (He & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = a), (e = Ep()), (we.lanes |= e), (Qn |= e), a);
  }
  function Em(e, t, a, n) {
    return Ka(a, t)
      ? a
      : gr.current !== null
        ? ((e = Sf(e, a, n)), Ka(e, t) || (Bt = !0), e)
        : (hn & 42) === 0 || ((hn & 1073741824) !== 0 && (He & 261930) === 0)
          ? ((Bt = !0), (e.memoizedState = a))
          : ((e = Ep()), (we.lanes |= e), (Qn |= e), t);
  }
  function Nm(e, t, a, n, s) {
    var c = V.p;
    V.p = c !== 0 && 8 > c ? c : 8;
    var m = z.T,
      v = {};
    ((z.T = v), Ef(e, !1, t, a));
    try {
      var w = s(),
        j = z.S;
      if (
        (j !== null && j(v, w),
        w !== null && typeof w == "object" && typeof w.then == "function")
      ) {
        var Y = lv(w, n);
        vu(e, t, Y, Ia(e));
      } else vu(e, t, n, Ia(e));
    } catch (K) {
      vu(e, t, { then: function () {}, status: "rejected", reason: K }, Ia());
    } finally {
      ((V.p = c),
        m !== null && v.types !== null && (m.types = v.types),
        (z.T = m));
    }
  }
  function cv() {}
  function Tf(e, t, a, n) {
    if (e.tag !== 5) throw Error(i(476));
    var s = Am(e).queue;
    Nm(
      e,
      s,
      t,
      ae,
      a === null
        ? cv
        : function () {
            return (km(e), a(n));
          },
    );
  }
  function Am(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ae,
      baseState: ae,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: mn,
        lastRenderedState: ae,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: mn,
          lastRenderedState: a,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function km(e) {
    var t = Am(e);
    (t.next === null && (t = e.alternate.memoizedState),
      vu(e, t.next.queue, {}, Ia()));
  }
  function wf() {
    return ta(Uu);
  }
  function Mm() {
    return Ot().memoizedState;
  }
  function Om() {
    return Ot().memoizedState;
  }
  function ov(e) {
    for (var t = e.return; t !== null;) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Ia();
          e = Hn(a);
          var n = Yn(t, e, a);
          (n !== null && (Ua(n, t, a), mu(n, t, a)),
            (t = { cache: Po() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function fv(e, t, a) {
    var n = Ia();
    ((a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Is(e)
        ? Cm(t, a)
        : ((a = Lo(e, t, a, n)), a !== null && (Ua(a, e, n), jm(a, t, n))));
  }
  function zm(e, t, a) {
    var n = Ia();
    vu(e, t, a, n);
  }
  function vu(e, t, a, n) {
    var s = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Is(e)) Cm(t, s);
    else {
      var c = e.alternate;
      if (
        e.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = t.lastRenderedReducer), c !== null)
      )
        try {
          var m = t.lastRenderedState,
            v = c(m, a);
          if (((s.hasEagerState = !0), (s.eagerState = v), Ka(v, m)))
            return (js(e, t, s, 0), at === null && Cs(), !1);
        } catch {}
      if (((a = Lo(e, t, s, n)), a !== null))
        return (Ua(a, e, n), jm(a, t, n), !0);
    }
    return !1;
  }
  function Ef(e, t, a, n) {
    if (
      ((n = {
        lane: 2,
        revertLane: ld(),
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Is(e))
    ) {
      if (t) throw Error(i(479));
    } else ((t = Lo(e, a, n, 2)), t !== null && Ua(t, e, 2));
  }
  function Is(e) {
    var t = e.alternate;
    return e === we || (t !== null && t === we);
  }
  function Cm(e, t) {
    yr = Zs = !0;
    var a = e.pending;
    (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (e.pending = t));
  }
  function jm(e, t, a) {
    if ((a & 4194048) !== 0) {
      var n = t.lanes;
      ((n &= e.pendingLanes), (a |= n), (t.lanes = a), be(e, a));
    }
  }
  var bu = {
    readContext: ta,
    use: Ws,
    useCallback: wt,
    useContext: wt,
    useEffect: wt,
    useImperativeHandle: wt,
    useLayoutEffect: wt,
    useInsertionEffect: wt,
    useMemo: wt,
    useReducer: wt,
    useRef: wt,
    useState: wt,
    useDebugValue: wt,
    useDeferredValue: wt,
    useTransition: wt,
    useSyncExternalStore: wt,
    useId: wt,
    useHostTransitionStatus: wt,
    useFormState: wt,
    useActionState: wt,
    useOptimistic: wt,
    useMemoCache: wt,
    useCacheRefresh: wt,
  };
  bu.useEffectEvent = wt;
  var Dm = {
      readContext: ta,
      use: Ws,
      useCallback: function (e, t) {
        return ((va().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: ta,
      useEffect: ym,
      useImperativeHandle: function (e, t, a) {
        ((a = a != null ? a.concat([e]) : null),
          $s(4194308, 4, xm.bind(null, t, e), a));
      },
      useLayoutEffect: function (e, t) {
        return $s(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        $s(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var a = va();
        t = t === void 0 ? null : t;
        var n = e();
        if (Oi) {
          ga(!0);
          try {
            e();
          } finally {
            ga(!1);
          }
        }
        return ((a.memoizedState = [n, t]), n);
      },
      useReducer: function (e, t, a) {
        var n = va();
        if (a !== void 0) {
          var s = a(t);
          if (Oi) {
            ga(!0);
            try {
              a(t);
            } finally {
              ga(!1);
            }
          }
        } else s = t;
        return (
          (n.memoizedState = n.baseState = s),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: s,
          }),
          (n.queue = e),
          (e = e.dispatch = fv.bind(null, we, e)),
          [n.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = va();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = _f(e);
        var t = e.queue,
          a = zm.bind(null, we, t);
        return ((t.dispatch = a), [e.memoizedState, a]);
      },
      useDebugValue: xf,
      useDeferredValue: function (e, t) {
        var a = va();
        return Sf(a, e, t);
      },
      useTransition: function () {
        var e = _f(!1);
        return (
          (e = Nm.bind(null, we, e.queue, !0, !1)),
          (va().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, a) {
        var n = we,
          s = va();
        if (Le) {
          if (a === void 0) throw Error(i(407));
          a = a();
        } else {
          if (((a = t()), at === null)) throw Error(i(349));
          (He & 127) !== 0 || tm(n, t, a);
        }
        s.memoizedState = a;
        var c = { value: a, getSnapshot: t };
        return (
          (s.queue = c),
          ym(lm.bind(null, n, c, e), [e]),
          (n.flags |= 2048),
          vr(9, { destroy: void 0 }, am.bind(null, n, c, a, t), null),
          a
        );
      },
      useId: function () {
        var e = va(),
          t = at.identifierPrefix;
        if (Le) {
          var a = Jl,
            n = Kl;
          ((a = (n & ~(1 << (32 - Rt(n) - 1))).toString(32) + a),
            (t = "_" + t + "R_" + a),
            (a = Ks++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "_"));
        } else ((a = nv++), (t = "_" + t + "r_" + a.toString(32) + "_"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: wf,
      useFormState: dm,
      useActionState: dm,
      useOptimistic: function (e) {
        var t = va();
        t.memoizedState = t.baseState = e;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a),
          (t = Ef.bind(null, we, !0, a)),
          (a.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: pf,
      useCacheRefresh: function () {
        return (va().memoizedState = ov.bind(null, we));
      },
      useEffectEvent: function (e) {
        var t = va(),
          a = { impl: e };
        return (
          (t.memoizedState = a),
          function () {
            if ((Je & 2) !== 0) throw Error(i(440));
            return a.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Nf = {
      readContext: ta,
      use: Ws,
      useCallback: Tm,
      useContext: ta,
      useEffect: bf,
      useImperativeHandle: Sm,
      useInsertionEffect: vm,
      useLayoutEffect: bm,
      useMemo: wm,
      useReducer: Fs,
      useRef: gm,
      useState: function () {
        return Fs(mn);
      },
      useDebugValue: xf,
      useDeferredValue: function (e, t) {
        var a = Ot();
        return Em(a, Ie.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Fs(mn)[0],
          t = Ot().memoizedState;
        return [typeof e == "boolean" ? e : _u(e), t];
      },
      useSyncExternalStore: em,
      useId: Mm,
      useHostTransitionStatus: wf,
      useFormState: hm,
      useActionState: hm,
      useOptimistic: function (e, t) {
        var a = Ot();
        return rm(a, Ie, e, t);
      },
      useMemoCache: pf,
      useCacheRefresh: Om,
    };
  Nf.useEffectEvent = _m;
  var Rm = {
    readContext: ta,
    use: Ws,
    useCallback: Tm,
    useContext: ta,
    useEffect: bf,
    useImperativeHandle: Sm,
    useInsertionEffect: vm,
    useLayoutEffect: bm,
    useMemo: wm,
    useReducer: yf,
    useRef: gm,
    useState: function () {
      return yf(mn);
    },
    useDebugValue: xf,
    useDeferredValue: function (e, t) {
      var a = Ot();
      return Ie === null ? Sf(a, e, t) : Em(a, Ie.memoizedState, e, t);
    },
    useTransition: function () {
      var e = yf(mn)[0],
        t = Ot().memoizedState;
      return [typeof e == "boolean" ? e : _u(e), t];
    },
    useSyncExternalStore: em,
    useId: Mm,
    useHostTransitionStatus: wf,
    useFormState: pm,
    useActionState: pm,
    useOptimistic: function (e, t) {
      var a = Ot();
      return Ie !== null
        ? rm(a, Ie, e, t)
        : ((a.baseState = e), [e, a.queue.dispatch]);
    },
    useMemoCache: pf,
    useCacheRefresh: Om,
  };
  Rm.useEffectEvent = _m;
  function Af(e, t, a, n) {
    ((t = e.memoizedState),
      (a = a(n, t)),
      (a = a == null ? t : b({}, t, a)),
      (e.memoizedState = a),
      e.lanes === 0 && (e.updateQueue.baseState = a));
  }
  var kf = {
    enqueueSetState: function (e, t, a) {
      e = e._reactInternals;
      var n = Ia(),
        s = Hn(n);
      ((s.payload = t),
        a != null && (s.callback = a),
        (t = Yn(e, s, n)),
        t !== null && (Ua(t, e, n), mu(t, e, n)));
    },
    enqueueReplaceState: function (e, t, a) {
      e = e._reactInternals;
      var n = Ia(),
        s = Hn(n);
      ((s.tag = 1),
        (s.payload = t),
        a != null && (s.callback = a),
        (t = Yn(e, s, n)),
        t !== null && (Ua(t, e, n), mu(t, e, n)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var a = Ia(),
        n = Hn(a);
      ((n.tag = 2),
        t != null && (n.callback = t),
        (t = Yn(e, n, a)),
        t !== null && (Ua(t, e, a), mu(t, e, a)));
    },
  };
  function Um(e, t, a, n, s, c, m) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(n, c, m)
        : t.prototype && t.prototype.isPureReactComponent
          ? !ru(a, n) || !ru(s, c)
          : !0
    );
  }
  function qm(e, t, a, n) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, n),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, n),
      t.state !== e && kf.enqueueReplaceState(t, t.state, null));
  }
  function zi(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var n in t) n !== "ref" && (a[n] = t[n]);
    }
    if ((e = e.defaultProps)) {
      a === t && (a = b({}, a));
      for (var s in e) a[s] === void 0 && (a[s] = e[s]);
    }
    return a;
  }
  function Bm(e) {
    zs(e);
  }
  function Hm(e) {
    console.error(e);
  }
  function Ym(e) {
    zs(e);
  }
  function ec(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function Lm(e, t, a) {
    try {
      var n = e.onCaughtError;
      n(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function Mf(e, t, a) {
    return (
      (a = Hn(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        ec(e, t);
      }),
      a
    );
  }
  function Xm(e) {
    return ((e = Hn(e)), (e.tag = 3), e);
  }
  function Gm(e, t, a, n) {
    var s = a.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var c = n.value;
      ((e.payload = function () {
        return s(c);
      }),
        (e.callback = function () {
          Lm(t, a, n);
        }));
    }
    var m = a.stateNode;
    m !== null &&
      typeof m.componentDidCatch == "function" &&
      (e.callback = function () {
        (Lm(t, a, n),
          typeof s != "function" &&
            (Zn === null ? (Zn = new Set([this])) : Zn.add(this)));
        var v = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: v !== null ? v : "",
        });
      });
  }
  function dv(e, t, a, n, s) {
    if (
      ((a.flags |= 32768),
      n !== null && typeof n == "object" && typeof n.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && fr(t, a, s, !0),
        (a = Wa.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 31:
          case 13:
            return (
              El === null ? dc() : a.alternate === null && Et === 0 && (Et = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = s),
              n === Ls
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([n])) : t.add(n),
                  ed(e, n, s)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              n === Ls
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([n]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([n])) : a.add(n)),
                  ed(e, n, s)),
              !1
            );
        }
        throw Error(i(435, a.tag));
      }
      return (ed(e, n, s), dc(), !1);
    }
    if (Le)
      return (
        (t = Wa.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = s),
            n !== Ko && ((e = Error(i(422), { cause: n })), cu(xl(e, a))))
          : (n !== Ko && ((t = Error(i(423), { cause: n })), cu(xl(t, a))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (s &= -s),
            (e.lanes |= s),
            (n = xl(n, a)),
            (s = Mf(e.stateNode, n, s)),
            nf(e, s),
            Et !== 4 && (Et = 2)),
        !1
      );
    var c = Error(i(520), { cause: n });
    if (
      ((c = xl(c, a)),
      ku === null ? (ku = [c]) : ku.push(c),
      Et !== 4 && (Et = 2),
      t === null)
    )
      return !0;
    ((n = xl(n, a)), (a = t));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (e = s & -s),
            (a.lanes |= e),
            (e = Mf(a.stateNode, n, e)),
            nf(a, e),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (c = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (c !== null &&
                  typeof c.componentDidCatch == "function" &&
                  (Zn === null || !Zn.has(c)))))
          )
            return (
              (a.flags |= 65536),
              (s &= -s),
              (a.lanes |= s),
              (s = Xm(s)),
              Gm(s, e, a, n),
              nf(a, s),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Of = Error(i(461)),
    Bt = !1;
  function aa(e, t, a, n) {
    t.child = e === null ? K0(t, null, a, n) : Mi(t, e.child, a, n);
  }
  function Vm(e, t, a, n, s) {
    a = a.render;
    var c = t.ref;
    if ("ref" in n) {
      var m = {};
      for (var v in n) v !== "ref" && (m[v] = n[v]);
    } else m = n;
    return (
      Ei(t),
      (n = ff(e, t, a, m, c, s)),
      (v = df()),
      e !== null && !Bt
        ? (hf(e, t, s), pn(e, t, s))
        : (Le && v && Qo(t), (t.flags |= 1), aa(e, t, n, s), t.child)
    );
  }
  function Qm(e, t, a, n, s) {
    if (e === null) {
      var c = a.type;
      return typeof c == "function" &&
        !Xo(c) &&
        c.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = c), Zm(e, t, c, n, s))
        : ((e = Rs(a.type, null, n, t, t.mode, s)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((c = e.child), !Bf(e, s))) {
      var m = c.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : ru), a(m, n) && e.ref === t.ref)
      )
        return pn(e, t, s);
    }
    return (
      (t.flags |= 1),
      (e = cn(c, n)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Zm(e, t, a, n, s) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (ru(c, n) && e.ref === t.ref)
        if (((Bt = !1), (t.pendingProps = n = c), Bf(e, s)))
          (e.flags & 131072) !== 0 && (Bt = !0);
        else return ((t.lanes = e.lanes), pn(e, t, s));
    }
    return zf(e, t, a, n, s);
  }
  function Km(e, t, a, n) {
    var s = n.children,
      c = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      n.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((c = c !== null ? c.baseLanes | a : a), e !== null)) {
          for (n = t.child = e.child, s = 0; n !== null;)
            ((s = s | n.lanes | n.childLanes), (n = n.sibling));
          n = s & ~c;
        } else ((n = 0), (t.child = null));
        return Jm(e, t, c, a, n);
      }
      if ((a & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Hs(t, c !== null ? c.cachePool : null),
          c !== null ? F0(t, c) : uf(),
          $0(t));
      else
        return (
          (n = t.lanes = 536870912),
          Jm(e, t, c !== null ? c.baseLanes | a : a, a, n)
        );
    } else
      c !== null
        ? (Hs(t, c.cachePool), F0(t, c), Xn(), (t.memoizedState = null))
        : (e !== null && Hs(t, null), uf(), Xn());
    return (aa(e, t, s, a), t.child);
  }
  function xu(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function Jm(e, t, a, n, s) {
    var c = ef();
    return (
      (c = c === null ? null : { parent: Ut._currentValue, pool: c }),
      (t.memoizedState = { baseLanes: a, cachePool: c }),
      e !== null && Hs(t, null),
      uf(),
      $0(t),
      e !== null && fr(e, t, n, !0),
      (t.childLanes = s),
      null
    );
  }
  function tc(e, t) {
    return (
      (t = lc({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Wm(e, t, a) {
    return (
      Mi(t, e.child, null, a),
      (e = tc(t, t.pendingProps)),
      (e.flags |= 2),
      Fa(t),
      (t.memoizedState = null),
      e
    );
  }
  function hv(e, t, a) {
    var n = t.pendingProps,
      s = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Le) {
        if (n.mode === "hidden")
          return ((e = tc(t, n)), (t.lanes = 536870912), xu(null, e));
        if (
          (cf(t),
          (e = ct)
            ? ((e = ug(e, wl)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Dn !== null ? { id: Kl, overflow: Jl } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = C0(e)),
                (a.return = t),
                (t.child = a),
                (ea = t),
                (ct = null)))
            : (e = null),
          e === null)
        )
          throw Un(t);
        return ((t.lanes = 536870912), null);
      }
      return tc(t, n);
    }
    var c = e.memoizedState;
    if (c !== null) {
      var m = c.dehydrated;
      if ((cf(t), s))
        if (t.flags & 256) ((t.flags &= -257), (t = Wm(e, t, a)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(i(558));
      else if (
        (Bt || fr(e, t, a, !1), (s = (a & e.childLanes) !== 0), Bt || s)
      ) {
        if (
          ((n = at),
          n !== null && ((m = ce(n, a)), m !== 0 && m !== c.retryLane))
        )
          throw ((c.retryLane = m), xi(e, m), Ua(n, e, m), Of);
        (dc(), (t = Wm(e, t, a)));
      } else
        ((e = c.treeContext),
          (ct = Nl(m.nextSibling)),
          (ea = t),
          (Le = !0),
          (Rn = null),
          (wl = !1),
          e !== null && R0(t, e),
          (t = tc(t, n)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = cn(e.child, { mode: n.mode, children: n.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function ac(e, t) {
    var a = t.ref;
    if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(i(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function zf(e, t, a, n, s) {
    return (
      Ei(t),
      (a = ff(e, t, a, n, void 0, s)),
      (n = df()),
      e !== null && !Bt
        ? (hf(e, t, s), pn(e, t, s))
        : (Le && n && Qo(t), (t.flags |= 1), aa(e, t, a, s), t.child)
    );
  }
  function Fm(e, t, a, n, s, c) {
    return (
      Ei(t),
      (t.updateQueue = null),
      (a = I0(t, n, a, s)),
      P0(e),
      (n = df()),
      e !== null && !Bt
        ? (hf(e, t, c), pn(e, t, c))
        : (Le && n && Qo(t), (t.flags |= 1), aa(e, t, a, c), t.child)
    );
  }
  function $m(e, t, a, n, s) {
    if ((Ei(t), t.stateNode === null)) {
      var c = ur,
        m = a.contextType;
      (typeof m == "object" && m !== null && (c = ta(m)),
        (c = new a(n, c)),
        (t.memoizedState =
          c.state !== null && c.state !== void 0 ? c.state : null),
        (c.updater = kf),
        (t.stateNode = c),
        (c._reactInternals = t),
        (c = t.stateNode),
        (c.props = n),
        (c.state = t.memoizedState),
        (c.refs = {}),
        af(t),
        (m = a.contextType),
        (c.context = typeof m == "object" && m !== null ? ta(m) : ur),
        (c.state = t.memoizedState),
        (m = a.getDerivedStateFromProps),
        typeof m == "function" && (Af(t, a, m, n), (c.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function" ||
          (typeof c.UNSAFE_componentWillMount != "function" &&
            typeof c.componentWillMount != "function") ||
          ((m = c.state),
          typeof c.componentWillMount == "function" && c.componentWillMount(),
          typeof c.UNSAFE_componentWillMount == "function" &&
            c.UNSAFE_componentWillMount(),
          m !== c.state && kf.enqueueReplaceState(c, c.state, null),
          gu(t, n, c, s),
          pu(),
          (c.state = t.memoizedState)),
        typeof c.componentDidMount == "function" && (t.flags |= 4194308),
        (n = !0));
    } else if (e === null) {
      c = t.stateNode;
      var v = t.memoizedProps,
        w = zi(a, v);
      c.props = w;
      var j = c.context,
        Y = a.contextType;
      ((m = ur), typeof Y == "object" && Y !== null && (m = ta(Y)));
      var K = a.getDerivedStateFromProps;
      ((Y =
        typeof K == "function" ||
        typeof c.getSnapshotBeforeUpdate == "function"),
        (v = t.pendingProps !== v),
        Y ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((v || j !== m) && qm(t, c, n, m)),
        (Bn = !1));
      var R = t.memoizedState;
      ((c.state = R),
        gu(t, n, c, s),
        pu(),
        (j = t.memoizedState),
        v || R !== j || Bn
          ? (typeof K == "function" && (Af(t, a, K, n), (j = t.memoizedState)),
            (w = Bn || Um(t, a, w, n, R, j, m))
              ? (Y ||
                  (typeof c.UNSAFE_componentWillMount != "function" &&
                    typeof c.componentWillMount != "function") ||
                  (typeof c.componentWillMount == "function" &&
                    c.componentWillMount(),
                  typeof c.UNSAFE_componentWillMount == "function" &&
                    c.UNSAFE_componentWillMount()),
                typeof c.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof c.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = n),
                (t.memoizedState = j)),
            (c.props = n),
            (c.state = j),
            (c.context = m),
            (n = w))
          : (typeof c.componentDidMount == "function" && (t.flags |= 4194308),
            (n = !1)));
    } else {
      ((c = t.stateNode),
        lf(e, t),
        (m = t.memoizedProps),
        (Y = zi(a, m)),
        (c.props = Y),
        (K = t.pendingProps),
        (R = c.context),
        (j = a.contextType),
        (w = ur),
        typeof j == "object" && j !== null && (w = ta(j)),
        (v = a.getDerivedStateFromProps),
        (j =
          typeof v == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function") ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((m !== K || R !== w) && qm(t, c, n, w)),
        (Bn = !1),
        (R = t.memoizedState),
        (c.state = R),
        gu(t, n, c, s),
        pu());
      var U = t.memoizedState;
      m !== K ||
      R !== U ||
      Bn ||
      (e !== null && e.dependencies !== null && qs(e.dependencies))
        ? (typeof v == "function" && (Af(t, a, v, n), (U = t.memoizedState)),
          (Y =
            Bn ||
            Um(t, a, Y, n, R, U, w) ||
            (e !== null && e.dependencies !== null && qs(e.dependencies)))
            ? (j ||
                (typeof c.UNSAFE_componentWillUpdate != "function" &&
                  typeof c.componentWillUpdate != "function") ||
                (typeof c.componentWillUpdate == "function" &&
                  c.componentWillUpdate(n, U, w),
                typeof c.UNSAFE_componentWillUpdate == "function" &&
                  c.UNSAFE_componentWillUpdate(n, U, w)),
              typeof c.componentDidUpdate == "function" && (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof c.componentDidUpdate != "function" ||
                (m === e.memoizedProps && R === e.memoizedState) ||
                (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate != "function" ||
                (m === e.memoizedProps && R === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = n),
              (t.memoizedState = U)),
          (c.props = n),
          (c.state = U),
          (c.context = w),
          (n = Y))
        : (typeof c.componentDidUpdate != "function" ||
            (m === e.memoizedProps && R === e.memoizedState) ||
            (t.flags |= 4),
          typeof c.getSnapshotBeforeUpdate != "function" ||
            (m === e.memoizedProps && R === e.memoizedState) ||
            (t.flags |= 1024),
          (n = !1));
    }
    return (
      (c = n),
      ac(e, t),
      (n = (t.flags & 128) !== 0),
      c || n
        ? ((c = t.stateNode),
          (a =
            n && typeof a.getDerivedStateFromError != "function"
              ? null
              : c.render()),
          (t.flags |= 1),
          e !== null && n
            ? ((t.child = Mi(t, e.child, null, s)),
              (t.child = Mi(t, null, a, s)))
            : aa(e, t, a, s),
          (t.memoizedState = c.state),
          (e = t.child))
        : (e = pn(e, t, s)),
      e
    );
  }
  function Pm(e, t, a, n) {
    return (Ti(), (t.flags |= 256), aa(e, t, a, n), t.child);
  }
  var Cf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function jf(e) {
    return { baseLanes: e, cachePool: L0() };
  }
  function Df(e, t, a) {
    return ((e = e !== null ? e.childLanes & ~a : 0), t && (e |= Pa), e);
  }
  function Im(e, t, a) {
    var n = t.pendingProps,
      s = !1,
      c = (t.flags & 128) !== 0,
      m;
    if (
      ((m = c) ||
        (m =
          e !== null && e.memoizedState === null ? !1 : (Mt.current & 2) !== 0),
      m && ((s = !0), (t.flags &= -129)),
      (m = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Le) {
        if (
          (s ? Ln(t) : Xn(),
          (e = ct)
            ? ((e = ug(e, wl)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Dn !== null ? { id: Kl, overflow: Jl } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = C0(e)),
                (a.return = t),
                (t.child = a),
                (ea = t),
                (ct = null)))
            : (e = null),
          e === null)
        )
          throw Un(t);
        return (gd(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var v = n.children;
      return (
        (n = n.fallback),
        s
          ? (Xn(),
            (s = t.mode),
            (v = lc({ mode: "hidden", children: v }, s)),
            (n = Si(n, s, a, null)),
            (v.return = t),
            (n.return = t),
            (v.sibling = n),
            (t.child = v),
            (n = t.child),
            (n.memoizedState = jf(a)),
            (n.childLanes = Df(e, m, a)),
            (t.memoizedState = Cf),
            xu(null, n))
          : (Ln(t), Rf(t, v))
      );
    }
    var w = e.memoizedState;
    if (w !== null && ((v = w.dehydrated), v !== null)) {
      if (c)
        t.flags & 256
          ? (Ln(t), (t.flags &= -257), (t = Uf(e, t, a)))
          : t.memoizedState !== null
            ? (Xn(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (Xn(),
              (v = n.fallback),
              (s = t.mode),
              (n = lc({ mode: "visible", children: n.children }, s)),
              (v = Si(v, s, a, null)),
              (v.flags |= 2),
              (n.return = t),
              (v.return = t),
              (n.sibling = v),
              (t.child = n),
              Mi(t, e.child, null, a),
              (n = t.child),
              (n.memoizedState = jf(a)),
              (n.childLanes = Df(e, m, a)),
              (t.memoizedState = Cf),
              (t = xu(null, n)));
      else if ((Ln(t), gd(v))) {
        if (((m = v.nextSibling && v.nextSibling.dataset), m)) var j = m.dgst;
        ((m = j),
          (n = Error(i(419))),
          (n.stack = ""),
          (n.digest = m),
          cu({ value: n, source: null, stack: null }),
          (t = Uf(e, t, a)));
      } else if (
        (Bt || fr(e, t, a, !1), (m = (a & e.childLanes) !== 0), Bt || m)
      ) {
        if (
          ((m = at),
          m !== null && ((n = ce(m, a)), n !== 0 && n !== w.retryLane))
        )
          throw ((w.retryLane = n), xi(e, n), Ua(m, e, n), Of);
        (pd(v) || dc(), (t = Uf(e, t, a)));
      } else
        pd(v)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = w.treeContext),
            (ct = Nl(v.nextSibling)),
            (ea = t),
            (Le = !0),
            (Rn = null),
            (wl = !1),
            e !== null && R0(t, e),
            (t = Rf(t, n.children)),
            (t.flags |= 4096));
      return t;
    }
    return s
      ? (Xn(),
        (v = n.fallback),
        (s = t.mode),
        (w = e.child),
        (j = w.sibling),
        (n = cn(w, { mode: "hidden", children: n.children })),
        (n.subtreeFlags = w.subtreeFlags & 65011712),
        j !== null ? (v = cn(j, v)) : ((v = Si(v, s, a, null)), (v.flags |= 2)),
        (v.return = t),
        (n.return = t),
        (n.sibling = v),
        (t.child = n),
        xu(null, n),
        (n = t.child),
        (v = e.child.memoizedState),
        v === null
          ? (v = jf(a))
          : ((s = v.cachePool),
            s !== null
              ? ((w = Ut._currentValue),
                (s = s.parent !== w ? { parent: w, pool: w } : s))
              : (s = L0()),
            (v = { baseLanes: v.baseLanes | a, cachePool: s })),
        (n.memoizedState = v),
        (n.childLanes = Df(e, m, a)),
        (t.memoizedState = Cf),
        xu(e.child, n))
      : (Ln(t),
        (a = e.child),
        (e = a.sibling),
        (a = cn(a, { mode: "visible", children: n.children })),
        (a.return = t),
        (a.sibling = null),
        e !== null &&
          ((m = t.deletions),
          m === null ? ((t.deletions = [e]), (t.flags |= 16)) : m.push(e)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function Rf(e, t) {
    return (
      (t = lc({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function lc(e, t) {
    return ((e = Ja(22, e, null, t)), (e.lanes = 0), e);
  }
  function Uf(e, t, a) {
    return (
      Mi(t, e.child, null, a),
      (e = Rf(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function ep(e, t, a) {
    e.lanes |= t;
    var n = e.alternate;
    (n !== null && (n.lanes |= t), Fo(e.return, t, a));
  }
  function qf(e, t, a, n, s, c) {
    var m = e.memoizedState;
    m === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: n,
          tail: a,
          tailMode: s,
          treeForkCount: c,
        })
      : ((m.isBackwards = t),
        (m.rendering = null),
        (m.renderingStartTime = 0),
        (m.last = n),
        (m.tail = a),
        (m.tailMode = s),
        (m.treeForkCount = c));
  }
  function tp(e, t, a) {
    var n = t.pendingProps,
      s = n.revealOrder,
      c = n.tail;
    n = n.children;
    var m = Mt.current,
      v = (m & 2) !== 0;
    if (
      (v ? ((m = (m & 1) | 2), (t.flags |= 128)) : (m &= 1),
      I(Mt, m),
      aa(e, t, n, a),
      (n = Le ? su : 0),
      !v && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null;) {
        if (e.tag === 13) e.memoizedState !== null && ep(e, a, t);
        else if (e.tag === 19) ep(e, a, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (s) {
      case "forwards":
        for (a = t.child, s = null; a !== null;)
          ((e = a.alternate),
            e !== null && Qs(e) === null && (s = a),
            (a = a.sibling));
        ((a = s),
          a === null
            ? ((s = t.child), (t.child = null))
            : ((s = a.sibling), (a.sibling = null)),
          qf(t, !1, s, a, c, n));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, s = t.child, t.child = null; s !== null;) {
          if (((e = s.alternate), e !== null && Qs(e) === null)) {
            t.child = s;
            break;
          }
          ((e = s.sibling), (s.sibling = a), (a = s), (s = e));
        }
        qf(t, !0, a, null, c, n);
        break;
      case "together":
        qf(t, !1, null, null, void 0, n);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function pn(e, t, a) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Qn |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((fr(e, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (
        e = t.child, a = cn(e, e.pendingProps), t.child = a, a.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (a = a.sibling = cn(e, e.pendingProps)),
          (a.return = t));
      a.sibling = null;
    }
    return t.child;
  }
  function Bf(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && qs(e)));
  }
  function mv(e, t, a) {
    switch (t.tag) {
      case 3:
        (Ke(t, t.stateNode.containerInfo),
          qn(t, Ut, e.memoizedState.cache),
          Ti());
        break;
      case 27:
      case 5:
        ka(t);
        break;
      case 4:
        Ke(t, t.stateNode.containerInfo);
        break;
      case 10:
        qn(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), cf(t), null);
        break;
      case 13:
        var n = t.memoizedState;
        if (n !== null)
          return n.dehydrated !== null
            ? (Ln(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
              ? Im(e, t, a)
              : (Ln(t), (e = pn(e, t, a)), e !== null ? e.sibling : null);
        Ln(t);
        break;
      case 19:
        var s = (e.flags & 128) !== 0;
        if (
          ((n = (a & t.childLanes) !== 0),
          n || (fr(e, t, a, !1), (n = (a & t.childLanes) !== 0)),
          s)
        ) {
          if (n) return tp(e, t, a);
          t.flags |= 128;
        }
        if (
          ((s = t.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          I(Mt, Mt.current),
          n)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Km(e, t, a, t.pendingProps));
      case 24:
        qn(t, Ut, e.memoizedState.cache);
    }
    return pn(e, t, a);
  }
  function ap(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Bt = !0;
      else {
        if (!Bf(e, a) && (t.flags & 128) === 0) return ((Bt = !1), mv(e, t, a));
        Bt = (e.flags & 131072) !== 0;
      }
    else ((Bt = !1), Le && (t.flags & 1048576) !== 0 && D0(t, su, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var n = t.pendingProps;
          if (((e = Ai(t.elementType)), (t.type = e), typeof e == "function"))
            Xo(e)
              ? ((n = zi(e, n)), (t.tag = 1), (t = $m(null, t, e, n, a)))
              : ((t.tag = 0), (t = zf(null, t, e, n, a)));
          else {
            if (e != null) {
              var s = e.$$typeof;
              if (s === q) {
                ((t.tag = 11), (t = Vm(null, t, e, n, a)));
                break e;
              } else if (s === D) {
                ((t.tag = 14), (t = Qm(null, t, e, n, a)));
                break e;
              }
            }
            throw ((t = ge(e) || e), Error(i(306, t, "")));
          }
        }
        return t;
      case 0:
        return zf(e, t, t.type, t.pendingProps, a);
      case 1:
        return ((n = t.type), (s = zi(n, t.pendingProps)), $m(e, t, n, s, a));
      case 3:
        e: {
          if ((Ke(t, t.stateNode.containerInfo), e === null))
            throw Error(i(387));
          n = t.pendingProps;
          var c = t.memoizedState;
          ((s = c.element), lf(e, t), gu(t, n, null, a));
          var m = t.memoizedState;
          if (
            ((n = m.cache),
            qn(t, Ut, n),
            n !== c.cache && $o(t, [Ut], a, !0),
            pu(),
            (n = m.element),
            c.isDehydrated)
          )
            if (
              ((c = { element: n, isDehydrated: !1, cache: m.cache }),
              (t.updateQueue.baseState = c),
              (t.memoizedState = c),
              t.flags & 256)
            ) {
              t = Pm(e, t, n, a);
              break e;
            } else if (n !== s) {
              ((s = xl(Error(i(424)), t)), cu(s), (t = Pm(e, t, n, a)));
              break e;
            } else
              for (
                e = t.stateNode.containerInfo,
                  e.nodeType === 9
                    ? (e = e.body)
                    : (e = e.nodeName === "HTML" ? e.ownerDocument.body : e),
                  ct = Nl(e.firstChild),
                  ea = t,
                  Le = !0,
                  Rn = null,
                  wl = !0,
                  a = K0(t, null, n, a),
                  t.child = a;
                a;
              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
          else {
            if ((Ti(), n === s)) {
              t = pn(e, t, a);
              break e;
            }
            aa(e, t, n, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          ac(e, t),
          e === null
            ? (a = hg(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : Le ||
                ((a = t.type),
                (e = t.pendingProps),
                (n = vc(he.current).createElement(a)),
                (n[Ne] = t),
                (n[ke] = e),
                la(n, a, e),
                Ce(n),
                (t.stateNode = n))
            : (t.memoizedState = hg(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          ka(t),
          e === null &&
            Le &&
            ((n = t.stateNode = og(t.type, t.pendingProps, he.current)),
            (ea = t),
            (wl = !0),
            (s = ct),
            Fn(t.type) ? ((yd = s), (ct = Nl(n.firstChild))) : (ct = s)),
          aa(e, t, t.pendingProps.children, a),
          ac(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Le &&
            ((s = n = ct) &&
              ((n = Vv(n, t.type, t.pendingProps, wl)),
              n !== null
                ? ((t.stateNode = n),
                  (ea = t),
                  (ct = Nl(n.firstChild)),
                  (wl = !1),
                  (s = !0))
                : (s = !1)),
            s || Un(t)),
          ka(t),
          (s = t.type),
          (c = t.pendingProps),
          (m = e !== null ? e.memoizedProps : null),
          (n = c.children),
          dd(s, c) ? (n = null) : m !== null && dd(s, m) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((s = ff(e, t, iv, null, null, a)), (Uu._currentValue = s)),
          ac(e, t),
          aa(e, t, n, a),
          t.child
        );
      case 6:
        return (
          e === null &&
            Le &&
            ((e = a = ct) &&
              ((a = Qv(a, t.pendingProps, wl)),
              a !== null
                ? ((t.stateNode = a), (ea = t), (ct = null), (e = !0))
                : (e = !1)),
            e || Un(t)),
          null
        );
      case 13:
        return Im(e, t, a);
      case 4:
        return (
          Ke(t, t.stateNode.containerInfo),
          (n = t.pendingProps),
          e === null ? (t.child = Mi(t, null, n, a)) : aa(e, t, n, a),
          t.child
        );
      case 11:
        return Vm(e, t, t.type, t.pendingProps, a);
      case 7:
        return (aa(e, t, t.pendingProps, a), t.child);
      case 8:
        return (aa(e, t, t.pendingProps.children, a), t.child);
      case 12:
        return (aa(e, t, t.pendingProps.children, a), t.child);
      case 10:
        return (
          (n = t.pendingProps),
          qn(t, t.type, n.value),
          aa(e, t, n.children, a),
          t.child
        );
      case 9:
        return (
          (s = t.type._context),
          (n = t.pendingProps.children),
          Ei(t),
          (s = ta(s)),
          (n = n(s)),
          (t.flags |= 1),
          aa(e, t, n, a),
          t.child
        );
      case 14:
        return Qm(e, t, t.type, t.pendingProps, a);
      case 15:
        return Zm(e, t, t.type, t.pendingProps, a);
      case 19:
        return tp(e, t, a);
      case 31:
        return hv(e, t, a);
      case 22:
        return Km(e, t, a, t.pendingProps);
      case 24:
        return (
          Ei(t),
          (n = ta(Ut)),
          e === null
            ? ((s = ef()),
              s === null &&
                ((s = at),
                (c = Po()),
                (s.pooledCache = c),
                c.refCount++,
                c !== null && (s.pooledCacheLanes |= a),
                (s = c)),
              (t.memoizedState = { parent: n, cache: s }),
              af(t),
              qn(t, Ut, s))
            : ((e.lanes & a) !== 0 && (lf(e, t), gu(t, null, null, a), pu()),
              (s = e.memoizedState),
              (c = t.memoizedState),
              s.parent !== n
                ? ((s = { parent: n, cache: n }),
                  (t.memoizedState = s),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = s),
                  qn(t, Ut, n))
                : ((n = c.cache),
                  qn(t, Ut, n),
                  n !== s.cache && $o(t, [Ut], a, !0))),
          aa(e, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(i(156, t.tag));
  }
  function gn(e) {
    e.flags |= 4;
  }
  function Hf(e, t, a, n, s) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (s & 335544128) === s))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Mp()) e.flags |= 8192;
        else throw ((ki = Ls), tf);
    } else e.flags &= -16777217;
  }
  function lp(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !_g(t)))
      if (Mp()) e.flags |= 8192;
      else throw ((ki = Ls), tf);
  }
  function nc(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? zn() : 536870912), (e.lanes |= t), (Tr |= t)));
  }
  function Su(e, t) {
    if (!Le)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null;)
            (t.alternate !== null && (a = t), (t = t.sibling));
          a === null ? (e.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = e.tail;
          for (var n = null; a !== null;)
            (a.alternate !== null && (n = a), (a = a.sibling));
          n === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (n.sibling = null);
      }
  }
  function ot(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      a = 0,
      n = 0;
    if (t)
      for (var s = e.child; s !== null;)
        ((a |= s.lanes | s.childLanes),
          (n |= s.subtreeFlags & 65011712),
          (n |= s.flags & 65011712),
          (s.return = e),
          (s = s.sibling));
    else
      for (s = e.child; s !== null;)
        ((a |= s.lanes | s.childLanes),
          (n |= s.subtreeFlags),
          (n |= s.flags),
          (s.return = e),
          (s = s.sibling));
    return ((e.subtreeFlags |= n), (e.childLanes = a), t);
  }
  function pv(e, t, a) {
    var n = t.pendingProps;
    switch ((Zo(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (ot(t), null);
      case 1:
        return (ot(t), null);
      case 3:
        return (
          (a = t.stateNode),
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          dn(Ut),
          Oe(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (or(t)
              ? gn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Jo())),
          ot(t),
          null
        );
      case 26:
        var s = t.type,
          c = t.memoizedState;
        return (
          e === null
            ? (gn(t),
              c !== null ? (ot(t), lp(t, c)) : (ot(t), Hf(t, s, null, n, a)))
            : c
              ? c !== e.memoizedState
                ? (gn(t), ot(t), lp(t, c))
                : (ot(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== n && gn(t),
                ot(t),
                Hf(t, s, e, n, a)),
          null
        );
      case 27:
        if (
          (jt(t),
          (a = he.current),
          (s = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== n && gn(t);
        else {
          if (!n) {
            if (t.stateNode === null) throw Error(i(166));
            return (ot(t), null);
          }
          ((e = ee.current),
            or(t) ? U0(t) : ((e = og(s, n, a)), (t.stateNode = e), gn(t)));
        }
        return (ot(t), null);
      case 5:
        if ((jt(t), (s = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== n && gn(t);
        else {
          if (!n) {
            if (t.stateNode === null) throw Error(i(166));
            return (ot(t), null);
          }
          if (((c = ee.current), or(t))) U0(t);
          else {
            var m = vc(he.current);
            switch (c) {
              case 1:
                c = m.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                c = m.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    c = m.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    c = m.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s,
                    );
                    break;
                  case "script":
                    ((c = m.createElement("div")),
                      (c.innerHTML = "<script><\/script>"),
                      (c = c.removeChild(c.firstChild)));
                    break;
                  case "select":
                    ((c =
                      typeof n.is == "string"
                        ? m.createElement("select", { is: n.is })
                        : m.createElement("select")),
                      n.multiple
                        ? (c.multiple = !0)
                        : n.size && (c.size = n.size));
                    break;
                  default:
                    c =
                      typeof n.is == "string"
                        ? m.createElement(s, { is: n.is })
                        : m.createElement(s);
                }
            }
            ((c[Ne] = t), (c[ke] = n));
            e: for (m = t.child; m !== null;) {
              if (m.tag === 5 || m.tag === 6) c.appendChild(m.stateNode);
              else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                ((m.child.return = m), (m = m.child));
                continue;
              }
              if (m === t) break e;
              for (; m.sibling === null;) {
                if (m.return === null || m.return === t) break e;
                m = m.return;
              }
              ((m.sibling.return = m.return), (m = m.sibling));
            }
            t.stateNode = c;
            e: switch ((la(c, s, n), s)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
            n && gn(t);
          }
        }
        return (
          ot(t),
          Hf(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, a),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== n && gn(t);
        else {
          if (typeof n != "string" && t.stateNode === null) throw Error(i(166));
          if (((e = he.current), or(t))) {
            if (
              ((e = t.stateNode),
              (a = t.memoizedProps),
              (n = null),
              (s = ea),
              s !== null)
            )
              switch (s.tag) {
                case 27:
                case 5:
                  n = s.memoizedProps;
              }
            ((e[Ne] = t),
              (e = !!(
                e.nodeValue === a ||
                (n !== null && n.suppressHydrationWarning === !0) ||
                Ip(e.nodeValue, a)
              )),
              e || Un(t, !0));
          } else
            ((e = vc(e).createTextNode(n)), (e[Ne] = t), (t.stateNode = e));
        }
        return (ot(t), null);
      case 31:
        if (((a = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((n = or(t)), a !== null)) {
            if (e === null) {
              if (!n) throw Error(i(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(i(557));
              e[Ne] = t;
            } else
              (Ti(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (ot(t), (e = !1));
          } else
            ((a = Jo()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = a),
              (e = !0));
          if (!e) return t.flags & 256 ? (Fa(t), t) : (Fa(t), null);
          if ((t.flags & 128) !== 0) throw Error(i(558));
        }
        return (ot(t), null);
      case 13:
        if (
          ((n = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((s = or(t)), n !== null && n.dehydrated !== null)) {
            if (e === null) {
              if (!s) throw Error(i(318));
              if (
                ((s = t.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(i(317));
              s[Ne] = t;
            } else
              (Ti(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (ot(t), (s = !1));
          } else
            ((s = Jo()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = s),
              (s = !0));
          if (!s) return t.flags & 256 ? (Fa(t), t) : (Fa(t), null);
        }
        return (
          Fa(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = a), t)
            : ((a = n !== null),
              (e = e !== null && e.memoizedState !== null),
              a &&
                ((n = t.child),
                (s = null),
                n.alternate !== null &&
                  n.alternate.memoizedState !== null &&
                  n.alternate.memoizedState.cachePool !== null &&
                  (s = n.alternate.memoizedState.cachePool.pool),
                (c = null),
                n.memoizedState !== null &&
                  n.memoizedState.cachePool !== null &&
                  (c = n.memoizedState.cachePool.pool),
                c !== s && (n.flags |= 2048)),
              a !== e && a && (t.child.flags |= 8192),
              nc(t, t.updateQueue),
              ot(t),
              null)
        );
      case 4:
        return (Oe(), e === null && ud(t.stateNode.containerInfo), ot(t), null);
      case 10:
        return (dn(t.type), ot(t), null);
      case 19:
        if ((H(Mt), (n = t.memoizedState), n === null)) return (ot(t), null);
        if (((s = (t.flags & 128) !== 0), (c = n.rendering), c === null))
          if (s) Su(n, !1);
          else {
            if (Et !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((c = Qs(e)), c !== null)) {
                  for (
                    t.flags |= 128,
                      Su(n, !1),
                      e = c.updateQueue,
                      t.updateQueue = e,
                      nc(t, e),
                      t.subtreeFlags = 0,
                      e = a,
                      a = t.child;
                    a !== null;
                  )
                    (z0(a, e), (a = a.sibling));
                  return (
                    I(Mt, (Mt.current & 1) | 2),
                    Le && on(t, n.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            n.tail !== null &&
              At() > cc &&
              ((t.flags |= 128), (s = !0), Su(n, !1), (t.lanes = 4194304));
          }
        else {
          if (!s)
            if (((e = Qs(c)), e !== null)) {
              if (
                ((t.flags |= 128),
                (s = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                nc(t, e),
                Su(n, !0),
                n.tail === null &&
                  n.tailMode === "hidden" &&
                  !c.alternate &&
                  !Le)
              )
                return (ot(t), null);
            } else
              2 * At() - n.renderingStartTime > cc &&
                a !== 536870912 &&
                ((t.flags |= 128), (s = !0), Su(n, !1), (t.lanes = 4194304));
          n.isBackwards
            ? ((c.sibling = t.child), (t.child = c))
            : ((e = n.last),
              e !== null ? (e.sibling = c) : (t.child = c),
              (n.last = c));
        }
        return n.tail !== null
          ? ((e = n.tail),
            (n.rendering = e),
            (n.tail = e.sibling),
            (n.renderingStartTime = At()),
            (e.sibling = null),
            (a = Mt.current),
            I(Mt, s ? (a & 1) | 2 : a & 1),
            Le && on(t, n.treeForkCount),
            e)
          : (ot(t), null);
      case 22:
      case 23:
        return (
          Fa(t),
          sf(),
          (n = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== n && (t.flags |= 8192)
            : n && (t.flags |= 8192),
          n
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (ot(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : ot(t),
          (a = t.updateQueue),
          a !== null && nc(t, a.retryQueue),
          (a = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          (n = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          n !== a && (t.flags |= 2048),
          e !== null && H(Ni),
          null
        );
      case 24:
        return (
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          dn(Ut),
          ot(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function gv(e, t) {
    switch ((Zo(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          dn(Ut),
          Oe(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (jt(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((Fa(t), t.alternate === null)) throw Error(i(340));
          Ti();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (Fa(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(i(340));
          Ti();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (H(Mt), null);
      case 4:
        return (Oe(), null);
      case 10:
        return (dn(t.type), null);
      case 22:
      case 23:
        return (
          Fa(t),
          sf(),
          e !== null && H(Ni),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (dn(Ut), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function np(e, t) {
    switch ((Zo(t), t.tag)) {
      case 3:
        (dn(Ut), Oe());
        break;
      case 26:
      case 27:
      case 5:
        jt(t);
        break;
      case 4:
        Oe();
        break;
      case 31:
        t.memoizedState !== null && Fa(t);
        break;
      case 13:
        Fa(t);
        break;
      case 19:
        H(Mt);
        break;
      case 10:
        dn(t.type);
        break;
      case 22:
      case 23:
        (Fa(t), sf(), e !== null && H(Ni));
        break;
      case 24:
        dn(Ut);
    }
  }
  function Tu(e, t) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var s = n.next;
        a = s;
        do {
          if ((a.tag & e) === e) {
            n = void 0;
            var c = a.create,
              m = a.inst;
            ((n = c()), (m.destroy = n));
          }
          a = a.next;
        } while (a !== s);
      }
    } catch (v) {
      Pe(t, t.return, v);
    }
  }
  function Gn(e, t, a) {
    try {
      var n = t.updateQueue,
        s = n !== null ? n.lastEffect : null;
      if (s !== null) {
        var c = s.next;
        n = c;
        do {
          if ((n.tag & e) === e) {
            var m = n.inst,
              v = m.destroy;
            if (v !== void 0) {
              ((m.destroy = void 0), (s = t));
              var w = a,
                j = v;
              try {
                j();
              } catch (Y) {
                Pe(s, w, Y);
              }
            }
          }
          n = n.next;
        } while (n !== c);
      }
    } catch (Y) {
      Pe(t, t.return, Y);
    }
  }
  function ip(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        W0(t, a);
      } catch (n) {
        Pe(e, e.return, n);
      }
    }
  }
  function rp(e, t, a) {
    ((a.props = zi(e.type, e.memoizedProps)), (a.state = e.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (n) {
      Pe(e, t, n);
    }
  }
  function wu(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var n = e.stateNode;
            break;
          case 30:
            n = e.stateNode;
            break;
          default:
            n = e.stateNode;
        }
        typeof a == "function" ? (e.refCleanup = a(n)) : (a.current = n);
      }
    } catch (s) {
      Pe(e, t, s);
    }
  }
  function Wl(e, t) {
    var a = e.ref,
      n = e.refCleanup;
    if (a !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (s) {
          Pe(e, t, s);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (s) {
          Pe(e, t, s);
        }
      else a.current = null;
  }
  function up(e) {
    var t = e.type,
      a = e.memoizedProps,
      n = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && n.focus();
          break e;
        case "img":
          a.src ? (n.src = a.src) : a.srcSet && (n.srcset = a.srcSet);
      }
    } catch (s) {
      Pe(e, e.return, s);
    }
  }
  function Yf(e, t, a) {
    try {
      var n = e.stateNode;
      (Bv(n, e.type, a, t), (n[ke] = t));
    } catch (s) {
      Pe(e, e.return, s);
    }
  }
  function sp(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Fn(e.type)) ||
      e.tag === 4
    );
  }
  function Lf(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || sp(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && Fn(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Xf(e, t, a) {
    var n = e.tag;
    if (n === 5 || n === 6)
      ((e = e.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(e, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a),
            t.appendChild(e),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = un)));
    else if (
      n !== 4 &&
      (n === 27 && Fn(e.type) && ((a = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (Xf(e, t, a), e = e.sibling; e !== null;)
        (Xf(e, t, a), (e = e.sibling));
  }
  function ic(e, t, a) {
    var n = e.tag;
    if (n === 5 || n === 6)
      ((e = e.stateNode), t ? a.insertBefore(e, t) : a.appendChild(e));
    else if (
      n !== 4 &&
      (n === 27 && Fn(e.type) && (a = e.stateNode), (e = e.child), e !== null)
    )
      for (ic(e, t, a), e = e.sibling; e !== null;)
        (ic(e, t, a), (e = e.sibling));
  }
  function cp(e) {
    var t = e.stateNode,
      a = e.memoizedProps;
    try {
      for (var n = e.type, s = t.attributes; s.length;)
        t.removeAttributeNode(s[0]);
      (la(t, n, a), (t[Ne] = e), (t[ke] = a));
    } catch (c) {
      Pe(e, e.return, c);
    }
  }
  var yn = !1,
    Ht = !1,
    Gf = !1,
    op = typeof WeakSet == "function" ? WeakSet : Set,
    Wt = null;
  function yv(e, t) {
    if (((e = e.containerInfo), (od = Nc), (e = S0(e)), Ro(e))) {
      if ("selectionStart" in e)
        var a = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          a = ((a = e.ownerDocument) && a.defaultView) || window;
          var n = a.getSelection && a.getSelection();
          if (n && n.rangeCount !== 0) {
            a = n.anchorNode;
            var s = n.anchorOffset,
              c = n.focusNode;
            n = n.focusOffset;
            try {
              (a.nodeType, c.nodeType);
            } catch {
              a = null;
              break e;
            }
            var m = 0,
              v = -1,
              w = -1,
              j = 0,
              Y = 0,
              K = e,
              R = null;
            t: for (;;) {
              for (
                var U;
                K !== a || (s !== 0 && K.nodeType !== 3) || (v = m + s),
                  K !== c || (n !== 0 && K.nodeType !== 3) || (w = m + n),
                  K.nodeType === 3 && (m += K.nodeValue.length),
                  (U = K.firstChild) !== null;
              )
                ((R = K), (K = U));
              for (;;) {
                if (K === e) break t;
                if (
                  (R === a && ++j === s && (v = m),
                  R === c && ++Y === n && (w = m),
                  (U = K.nextSibling) !== null)
                )
                  break;
                ((K = R), (R = K.parentNode));
              }
              K = U;
            }
            a = v === -1 || w === -1 ? null : { start: v, end: w };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      fd = { focusedElem: e, selectionRange: a }, Nc = !1, Wt = t;
      Wt !== null;
    )
      if (
        ((t = Wt), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), (Wt = e));
      else
        for (; Wt !== null;) {
          switch (((t = Wt), (c = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (a = 0; a < e.length; a++)
                  ((s = e[a]), (s.ref.impl = s.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && c !== null) {
                ((e = void 0),
                  (a = t),
                  (s = c.memoizedProps),
                  (c = c.memoizedState),
                  (n = a.stateNode));
                try {
                  var ne = zi(a.type, s);
                  ((e = n.getSnapshotBeforeUpdate(ne, c)),
                    (n.__reactInternalSnapshotBeforeUpdate = e));
                } catch (pe) {
                  Pe(a, a.return, pe);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (a = e.nodeType), a === 9)
                )
                  md(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      md(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(i(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (Wt = e));
            break;
          }
          Wt = t.return;
        }
  }
  function fp(e, t, a) {
    var n = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (vn(e, a), n & 4 && Tu(5, a));
        break;
      case 1:
        if ((vn(e, a), n & 4))
          if (((e = a.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (m) {
              Pe(a, a.return, m);
            }
          else {
            var s = zi(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(s, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (m) {
              Pe(a, a.return, m);
            }
          }
        (n & 64 && ip(a), n & 512 && wu(a, a.return));
        break;
      case 3:
        if ((vn(e, a), n & 64 && ((e = a.updateQueue), e !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            W0(e, t);
          } catch (m) {
            Pe(a, a.return, m);
          }
        }
        break;
      case 27:
        t === null && n & 4 && cp(a);
      case 26:
      case 5:
        (vn(e, a), t === null && n & 4 && up(a), n & 512 && wu(a, a.return));
        break;
      case 12:
        vn(e, a);
        break;
      case 31:
        (vn(e, a), n & 4 && mp(e, a));
        break;
      case 13:
        (vn(e, a),
          n & 4 && pp(e, a),
          n & 64 &&
            ((e = a.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((a = Nv.bind(null, a)), Zv(e, a)))));
        break;
      case 22:
        if (((n = a.memoizedState !== null || yn), !n)) {
          ((t = (t !== null && t.memoizedState !== null) || Ht), (s = yn));
          var c = Ht;
          ((yn = n),
            (Ht = t) && !c ? bn(e, a, (a.subtreeFlags & 8772) !== 0) : vn(e, a),
            (yn = s),
            (Ht = c));
        }
        break;
      case 30:
        break;
      default:
        vn(e, a);
    }
  }
  function dp(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), dp(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && kt(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var ht = null,
    Ca = !1;
  function _n(e, t, a) {
    for (a = a.child; a !== null;) (hp(e, t, a), (a = a.sibling));
  }
  function hp(e, t, a) {
    if (pt && typeof pt.onCommitFiberUnmount == "function")
      try {
        pt.onCommitFiberUnmount(Xl, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (Ht || Wl(a, t),
          _n(e, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        Ht || Wl(a, t);
        var n = ht,
          s = Ca;
        (Fn(a.type) && ((ht = a.stateNode), (Ca = !1)),
          _n(e, t, a),
          ju(a.stateNode),
          (ht = n),
          (Ca = s));
        break;
      case 5:
        Ht || Wl(a, t);
      case 6:
        if (
          ((n = ht),
          (s = Ca),
          (ht = null),
          _n(e, t, a),
          (ht = n),
          (Ca = s),
          ht !== null)
        )
          if (Ca)
            try {
              (ht.nodeType === 9
                ? ht.body
                : ht.nodeName === "HTML"
                  ? ht.ownerDocument.body
                  : ht
              ).removeChild(a.stateNode);
            } catch (c) {
              Pe(a, t, c);
            }
          else
            try {
              ht.removeChild(a.stateNode);
            } catch (c) {
              Pe(a, t, c);
            }
        break;
      case 18:
        ht !== null &&
          (Ca
            ? ((e = ht),
              ig(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                a.stateNode,
              ),
              zr(e))
            : ig(ht, a.stateNode));
        break;
      case 4:
        ((n = ht),
          (s = Ca),
          (ht = a.stateNode.containerInfo),
          (Ca = !0),
          _n(e, t, a),
          (ht = n),
          (Ca = s));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Gn(2, a, t), Ht || Gn(4, a, t), _n(e, t, a));
        break;
      case 1:
        (Ht ||
          (Wl(a, t),
          (n = a.stateNode),
          typeof n.componentWillUnmount == "function" && rp(a, t, n)),
          _n(e, t, a));
        break;
      case 21:
        _n(e, t, a);
        break;
      case 22:
        ((Ht = (n = Ht) || a.memoizedState !== null), _n(e, t, a), (Ht = n));
        break;
      default:
        _n(e, t, a);
    }
  }
  function mp(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        zr(e);
      } catch (a) {
        Pe(t, t.return, a);
      }
    }
  }
  function pp(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        zr(e);
      } catch (a) {
        Pe(t, t.return, a);
      }
  }
  function _v(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new op()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new op()),
          t
        );
      default:
        throw Error(i(435, e.tag));
    }
  }
  function rc(e, t) {
    var a = _v(e);
    t.forEach(function (n) {
      if (!a.has(n)) {
        a.add(n);
        var s = Av.bind(null, e, n);
        n.then(s, s);
      }
    });
  }
  function ja(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var n = 0; n < a.length; n++) {
        var s = a[n],
          c = e,
          m = t,
          v = m;
        e: for (; v !== null;) {
          switch (v.tag) {
            case 27:
              if (Fn(v.type)) {
                ((ht = v.stateNode), (Ca = !1));
                break e;
              }
              break;
            case 5:
              ((ht = v.stateNode), (Ca = !1));
              break e;
            case 3:
            case 4:
              ((ht = v.stateNode.containerInfo), (Ca = !0));
              break e;
          }
          v = v.return;
        }
        if (ht === null) throw Error(i(160));
        (hp(c, m, s),
          (ht = null),
          (Ca = !1),
          (c = s.alternate),
          c !== null && (c.return = null),
          (s.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null;) (gp(t, e), (t = t.sibling));
  }
  var Bl = null;
  function gp(e, t) {
    var a = e.alternate,
      n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (ja(t, e),
          Da(e),
          n & 4 && (Gn(3, e, e.return), Tu(3, e), Gn(5, e, e.return)));
        break;
      case 1:
        (ja(t, e),
          Da(e),
          n & 512 && (Ht || a === null || Wl(a, a.return)),
          n & 64 &&
            yn &&
            ((e = e.updateQueue),
            e !== null &&
              ((n = e.callbacks),
              n !== null &&
                ((a = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = a === null ? n : a.concat(n))))));
        break;
      case 26:
        var s = Bl;
        if (
          (ja(t, e),
          Da(e),
          n & 512 && (Ht || a === null || Wl(a, a.return)),
          n & 4)
        ) {
          var c = a !== null ? a.memoizedState : null;
          if (((n = e.memoizedState), a === null))
            if (n === null)
              if (e.stateNode === null) {
                e: {
                  ((n = e.type),
                    (a = e.memoizedProps),
                    (s = s.ownerDocument || s));
                  t: switch (n) {
                    case "title":
                      ((c = s.getElementsByTagName("title")[0]),
                        (!c ||
                          c[gt] ||
                          c[Ne] ||
                          c.namespaceURI === "http://www.w3.org/2000/svg" ||
                          c.hasAttribute("itemprop")) &&
                          ((c = s.createElement(n)),
                          s.head.insertBefore(
                            c,
                            s.querySelector("head > title"),
                          )),
                        la(c, n, a),
                        (c[Ne] = e),
                        Ce(c),
                        (n = c));
                      break e;
                    case "link":
                      var m = gg("link", "href", s).get(n + (a.href || ""));
                      if (m) {
                        for (var v = 0; v < m.length; v++)
                          if (
                            ((c = m[v]),
                            c.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              c.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              c.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              c.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            m.splice(v, 1);
                            break t;
                          }
                      }
                      ((c = s.createElement(n)),
                        la(c, n, a),
                        s.head.appendChild(c));
                      break;
                    case "meta":
                      if (
                        (m = gg("meta", "content", s).get(
                          n + (a.content || ""),
                        ))
                      ) {
                        for (v = 0; v < m.length; v++)
                          if (
                            ((c = m[v]),
                            c.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              c.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              c.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              c.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              c.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            m.splice(v, 1);
                            break t;
                          }
                      }
                      ((c = s.createElement(n)),
                        la(c, n, a),
                        s.head.appendChild(c));
                      break;
                    default:
                      throw Error(i(468, n));
                  }
                  ((c[Ne] = e), Ce(c), (n = c));
                }
                e.stateNode = n;
              } else yg(s, e.type, e.stateNode);
            else e.stateNode = pg(s, n, e.memoizedProps);
          else
            c !== n
              ? (c === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : c.count--,
                n === null
                  ? yg(s, e.type, e.stateNode)
                  : pg(s, n, e.memoizedProps))
              : n === null &&
                e.stateNode !== null &&
                Yf(e, e.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (ja(t, e),
          Da(e),
          n & 512 && (Ht || a === null || Wl(a, a.return)),
          a !== null && n & 4 && Yf(e, e.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          (ja(t, e),
          Da(e),
          n & 512 && (Ht || a === null || Wl(a, a.return)),
          e.flags & 32)
        ) {
          s = e.stateNode;
          try {
            er(s, "");
          } catch (ne) {
            Pe(e, e.return, ne);
          }
        }
        (n & 4 &&
          e.stateNode != null &&
          ((s = e.memoizedProps), Yf(e, s, a !== null ? a.memoizedProps : s)),
          n & 1024 && (Gf = !0));
        break;
      case 6:
        if ((ja(t, e), Da(e), n & 4)) {
          if (e.stateNode === null) throw Error(i(162));
          ((n = e.memoizedProps), (a = e.stateNode));
          try {
            a.nodeValue = n;
          } catch (ne) {
            Pe(e, e.return, ne);
          }
        }
        break;
      case 3:
        if (
          ((Sc = null),
          (s = Bl),
          (Bl = bc(t.containerInfo)),
          ja(t, e),
          (Bl = s),
          Da(e),
          n & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            zr(t.containerInfo);
          } catch (ne) {
            Pe(e, e.return, ne);
          }
        Gf && ((Gf = !1), yp(e));
        break;
      case 4:
        ((n = Bl),
          (Bl = bc(e.stateNode.containerInfo)),
          ja(t, e),
          Da(e),
          (Bl = n));
        break;
      case 12:
        (ja(t, e), Da(e));
        break;
      case 31:
        (ja(t, e),
          Da(e),
          n & 4 &&
            ((n = e.updateQueue),
            n !== null && ((e.updateQueue = null), rc(e, n))));
        break;
      case 13:
        (ja(t, e),
          Da(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (sc = At()),
          n & 4 &&
            ((n = e.updateQueue),
            n !== null && ((e.updateQueue = null), rc(e, n))));
        break;
      case 22:
        s = e.memoizedState !== null;
        var w = a !== null && a.memoizedState !== null,
          j = yn,
          Y = Ht;
        if (
          ((yn = j || s),
          (Ht = Y || w),
          ja(t, e),
          (Ht = Y),
          (yn = j),
          Da(e),
          n & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = s ? t._visibility & -2 : t._visibility | 1,
              s && (a === null || w || yn || Ht || Ci(e)),
              a = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                w = a = t;
                try {
                  if (((c = w.stateNode), s))
                    ((m = c.style),
                      typeof m.setProperty == "function"
                        ? m.setProperty("display", "none", "important")
                        : (m.display = "none"));
                  else {
                    v = w.stateNode;
                    var K = w.memoizedProps.style,
                      R =
                        K != null && K.hasOwnProperty("display")
                          ? K.display
                          : null;
                    v.style.display =
                      R == null || typeof R == "boolean" ? "" : ("" + R).trim();
                  }
                } catch (ne) {
                  Pe(w, w.return, ne);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                w = t;
                try {
                  w.stateNode.nodeValue = s ? "" : w.memoizedProps;
                } catch (ne) {
                  Pe(w, w.return, ne);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                w = t;
                try {
                  var U = w.stateNode;
                  s ? rg(U, !0) : rg(w.stateNode, !1);
                } catch (ne) {
                  Pe(w, w.return, ne);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null;) {
              if (t.return === null || t.return === e) break e;
              (a === t && (a = null), (t = t.return));
            }
            (a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        n & 4 &&
          ((n = e.updateQueue),
          n !== null &&
            ((a = n.retryQueue),
            a !== null && ((n.retryQueue = null), rc(e, a))));
        break;
      case 19:
        (ja(t, e),
          Da(e),
          n & 4 &&
            ((n = e.updateQueue),
            n !== null && ((e.updateQueue = null), rc(e, n))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (ja(t, e), Da(e));
    }
  }
  function Da(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, n = e.return; n !== null;) {
          if (sp(n)) {
            a = n;
            break;
          }
          n = n.return;
        }
        if (a == null) throw Error(i(160));
        switch (a.tag) {
          case 27:
            var s = a.stateNode,
              c = Lf(e);
            ic(e, c, s);
            break;
          case 5:
            var m = a.stateNode;
            a.flags & 32 && (er(m, ""), (a.flags &= -33));
            var v = Lf(e);
            ic(e, v, m);
            break;
          case 3:
          case 4:
            var w = a.stateNode.containerInfo,
              j = Lf(e);
            Xf(e, j, w);
            break;
          default:
            throw Error(i(161));
        }
      } catch (Y) {
        Pe(e, e.return, Y);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function yp(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null;) {
        var t = e;
        (yp(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function vn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null;) (fp(e, t.alternate, t), (t = t.sibling));
  }
  function Ci(e) {
    for (e = e.child; e !== null;) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Gn(4, t, t.return), Ci(t));
          break;
        case 1:
          Wl(t, t.return);
          var a = t.stateNode;
          (typeof a.componentWillUnmount == "function" && rp(t, t.return, a),
            Ci(t));
          break;
        case 27:
          ju(t.stateNode);
        case 26:
        case 5:
          (Wl(t, t.return), Ci(t));
          break;
        case 22:
          t.memoizedState === null && Ci(t);
          break;
        case 30:
          Ci(t);
          break;
        default:
          Ci(t);
      }
      e = e.sibling;
    }
  }
  function bn(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
      var n = t.alternate,
        s = e,
        c = t,
        m = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          (bn(s, c, a), Tu(4, c));
          break;
        case 1:
          if (
            (bn(s, c, a),
            (n = c),
            (s = n.stateNode),
            typeof s.componentDidMount == "function")
          )
            try {
              s.componentDidMount();
            } catch (j) {
              Pe(n, n.return, j);
            }
          if (((n = c), (s = n.updateQueue), s !== null)) {
            var v = n.stateNode;
            try {
              var w = s.shared.hiddenCallbacks;
              if (w !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < w.length; s++)
                  J0(w[s], v);
            } catch (j) {
              Pe(n, n.return, j);
            }
          }
          (a && m & 64 && ip(c), wu(c, c.return));
          break;
        case 27:
          cp(c);
        case 26:
        case 5:
          (bn(s, c, a), a && n === null && m & 4 && up(c), wu(c, c.return));
          break;
        case 12:
          bn(s, c, a);
          break;
        case 31:
          (bn(s, c, a), a && m & 4 && mp(s, c));
          break;
        case 13:
          (bn(s, c, a), a && m & 4 && pp(s, c));
          break;
        case 22:
          (c.memoizedState === null && bn(s, c, a), wu(c, c.return));
          break;
        case 30:
          break;
        default:
          bn(s, c, a);
      }
      t = t.sibling;
    }
  }
  function Vf(e, t) {
    var a = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (a = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== a && (e != null && e.refCount++, a != null && ou(a)));
  }
  function Qf(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && ou(e)));
  }
  function Hl(e, t, a, n) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) (_p(e, t, a, n), (t = t.sibling));
  }
  function _p(e, t, a, n) {
    var s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Hl(e, t, a, n), s & 2048 && Tu(9, t));
        break;
      case 1:
        Hl(e, t, a, n);
        break;
      case 3:
        (Hl(e, t, a, n),
          s & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && ou(e))));
        break;
      case 12:
        if (s & 2048) {
          (Hl(e, t, a, n), (e = t.stateNode));
          try {
            var c = t.memoizedProps,
              m = c.id,
              v = c.onPostCommit;
            typeof v == "function" &&
              v(
                m,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (w) {
            Pe(t, t.return, w);
          }
        } else Hl(e, t, a, n);
        break;
      case 31:
        Hl(e, t, a, n);
        break;
      case 13:
        Hl(e, t, a, n);
        break;
      case 23:
        break;
      case 22:
        ((c = t.stateNode),
          (m = t.alternate),
          t.memoizedState !== null
            ? c._visibility & 2
              ? Hl(e, t, a, n)
              : Eu(e, t)
            : c._visibility & 2
              ? Hl(e, t, a, n)
              : ((c._visibility |= 2),
                br(e, t, a, n, (t.subtreeFlags & 10256) !== 0 || !1)),
          s & 2048 && Vf(m, t));
        break;
      case 24:
        (Hl(e, t, a, n), s & 2048 && Qf(t.alternate, t));
        break;
      default:
        Hl(e, t, a, n);
    }
  }
  function br(e, t, a, n, s) {
    for (
      s = s && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var c = e,
        m = t,
        v = a,
        w = n,
        j = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          (br(c, m, v, w, s), Tu(8, m));
          break;
        case 23:
          break;
        case 22:
          var Y = m.stateNode;
          (m.memoizedState !== null
            ? Y._visibility & 2
              ? br(c, m, v, w, s)
              : Eu(c, m)
            : ((Y._visibility |= 2), br(c, m, v, w, s)),
            s && j & 2048 && Vf(m.alternate, m));
          break;
        case 24:
          (br(c, m, v, w, s), s && j & 2048 && Qf(m.alternate, m));
          break;
        default:
          br(c, m, v, w, s);
      }
      t = t.sibling;
    }
  }
  function Eu(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) {
        var a = e,
          n = t,
          s = n.flags;
        switch (n.tag) {
          case 22:
            (Eu(a, n), s & 2048 && Vf(n.alternate, n));
            break;
          case 24:
            (Eu(a, n), s & 2048 && Qf(n.alternate, n));
            break;
          default:
            Eu(a, n);
        }
        t = t.sibling;
      }
  }
  var Nu = 8192;
  function xr(e, t, a) {
    if (e.subtreeFlags & Nu)
      for (e = e.child; e !== null;) (vp(e, t, a), (e = e.sibling));
  }
  function vp(e, t, a) {
    switch (e.tag) {
      case 26:
        (xr(e, t, a),
          e.flags & Nu &&
            e.memoizedState !== null &&
            nb(a, Bl, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        xr(e, t, a);
        break;
      case 3:
      case 4:
        var n = Bl;
        ((Bl = bc(e.stateNode.containerInfo)), xr(e, t, a), (Bl = n));
        break;
      case 22:
        e.memoizedState === null &&
          ((n = e.alternate),
          n !== null && n.memoizedState !== null
            ? ((n = Nu), (Nu = 16777216), xr(e, t, a), (Nu = n))
            : xr(e, t, a));
        break;
      default:
        xr(e, t, a);
    }
  }
  function bp(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function Au(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var n = t[a];
          ((Wt = n), Sp(n, e));
        }
      bp(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null;) (xp(e), (e = e.sibling));
  }
  function xp(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Au(e), e.flags & 2048 && Gn(9, e, e.return));
        break;
      case 3:
        Au(e);
        break;
      case 12:
        Au(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), uc(e))
          : Au(e);
        break;
      default:
        Au(e);
    }
  }
  function uc(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var n = t[a];
          ((Wt = n), Sp(n, e));
        }
      bp(e);
    }
    for (e = e.child; e !== null;) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (Gn(8, t, t.return), uc(t));
          break;
        case 22:
          ((a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), uc(t)));
          break;
        default:
          uc(t);
      }
      e = e.sibling;
    }
  }
  function Sp(e, t) {
    for (; Wt !== null;) {
      var a = Wt;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Gn(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var n = a.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          ou(a.memoizedState.cache);
      }
      if (((n = a.child), n !== null)) ((n.return = a), (Wt = n));
      else
        e: for (a = e; Wt !== null;) {
          n = Wt;
          var s = n.sibling,
            c = n.return;
          if ((dp(n), n === a)) {
            Wt = null;
            break e;
          }
          if (s !== null) {
            ((s.return = c), (Wt = s));
            break e;
          }
          Wt = c;
        }
    }
  }
  var vv = {
      getCacheForType: function (e) {
        var t = ta(Ut),
          a = t.data.get(e);
        return (a === void 0 && ((a = e()), t.data.set(e, a)), a);
      },
      cacheSignal: function () {
        return ta(Ut).controller.signal;
      },
    },
    bv = typeof WeakMap == "function" ? WeakMap : Map,
    Je = 0,
    at = null,
    Re = null,
    He = 0,
    $e = 0,
    $a = null,
    Vn = !1,
    Sr = !1,
    Zf = !1,
    xn = 0,
    Et = 0,
    Qn = 0,
    ji = 0,
    Kf = 0,
    Pa = 0,
    Tr = 0,
    ku = null,
    Ra = null,
    Jf = !1,
    sc = 0,
    Tp = 0,
    cc = 1 / 0,
    oc = null,
    Zn = null,
    Vt = 0,
    Kn = null,
    wr = null,
    Sn = 0,
    Wf = 0,
    Ff = null,
    wp = null,
    Mu = 0,
    $f = null;
  function Ia() {
    return (Je & 2) !== 0 && He !== 0 ? He & -He : z.T !== null ? ld() : ze();
  }
  function Ep() {
    if (Pa === 0)
      if ((He & 536870912) === 0 || Le) {
        var e = sa;
        ((sa <<= 1), (sa & 3932160) === 0 && (sa = 262144), (Pa = e));
      } else Pa = 536870912;
    return ((e = Wa.current), e !== null && (e.flags |= 32), Pa);
  }
  function Ua(e, t, a) {
    (((e === at && ($e === 2 || $e === 9)) || e.cancelPendingCommit !== null) &&
      (Er(e, 0), Jn(e, He, Pa, !1)),
      se(e, a),
      ((Je & 2) === 0 || e !== at) &&
        (e === at &&
          ((Je & 2) === 0 && (ji |= a), Et === 4 && Jn(e, He, Pa, !1)),
        Fl(e)));
  }
  function Np(e, t, a) {
    if ((Je & 6) !== 0) throw Error(i(327));
    var n = (!a && (t & 127) === 0 && (t & e.expiredLanes) === 0) || pl(e, t),
      s = n ? Tv(e, t) : If(e, t, !0),
      c = n;
    do {
      if (s === 0) {
        Sr && !n && Jn(e, t, 0, !1);
        break;
      } else {
        if (((a = e.current.alternate), c && !xv(a))) {
          ((s = If(e, t, !1)), (c = !1));
          continue;
        }
        if (s === 2) {
          if (((c = t), e.errorRecoveryDisabledLanes & c)) var m = 0;
          else
            ((m = e.pendingLanes & -536870913),
              (m = m !== 0 ? m : m & 536870912 ? 536870912 : 0));
          if (m !== 0) {
            t = m;
            e: {
              var v = e;
              s = ku;
              var w = v.current.memoizedState.isDehydrated;
              if ((w && (Er(v, m).flags |= 256), (m = If(v, m, !1)), m !== 2)) {
                if (Zf && !w) {
                  ((v.errorRecoveryDisabledLanes |= c), (ji |= c), (s = 4));
                  break e;
                }
                ((c = Ra),
                  (Ra = s),
                  c !== null &&
                    (Ra === null ? (Ra = c) : Ra.push.apply(Ra, c)));
              }
              s = m;
            }
            if (((c = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          (Er(e, 0), Jn(e, t, 0, !0));
          break;
        }
        e: {
          switch (((n = e), (c = s), c)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Jn(n, t, Pa, !Vn);
              break e;
            case 2:
              Ra = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((t & 62914560) === t && ((s = sc + 300 - At()), 10 < s)) {
            if ((Jn(n, t, Pa, !Vn), ml(n, 0, !0) !== 0)) break e;
            ((Sn = t),
              (n.timeoutHandle = lg(
                Ap.bind(
                  null,
                  n,
                  a,
                  Ra,
                  oc,
                  Jf,
                  t,
                  Pa,
                  ji,
                  Tr,
                  Vn,
                  c,
                  "Throttled",
                  -0,
                  0,
                ),
                s,
              )));
            break e;
          }
          Ap(n, a, Ra, oc, Jf, t, Pa, ji, Tr, Vn, c, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Fl(e);
  }
  function Ap(e, t, a, n, s, c, m, v, w, j, Y, K, R, U) {
    if (
      ((e.timeoutHandle = -1),
      (K = t.subtreeFlags),
      K & 8192 || (K & 16785408) === 16785408)
    ) {
      ((K = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: un,
      }),
        vp(t, c, K));
      var ne =
        (c & 62914560) === c ? sc - At() : (c & 4194048) === c ? Tp - At() : 0;
      if (((ne = ib(K, ne)), ne !== null)) {
        ((Sn = c),
          (e.cancelPendingCommit = ne(
            Rp.bind(null, e, t, c, a, n, s, m, v, w, Y, K, null, R, U),
          )),
          Jn(e, c, m, !j));
        return;
      }
    }
    Rp(e, t, c, a, n, s, m, v, w);
  }
  function xv(e) {
    for (var t = e; ;) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var n = 0; n < a.length; n++) {
          var s = a[n],
            c = s.getSnapshot;
          s = s.value;
          try {
            if (!Ka(c(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        ((a.return = t), (t = a));
      else {
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Jn(e, t, a, n) {
    ((t &= ~Kf),
      (t &= ~ji),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      n && (e.warmLanes |= t),
      (n = e.expirationTimes));
    for (var s = t; 0 < s;) {
      var c = 31 - Rt(s),
        m = 1 << c;
      ((n[c] = -1), (s &= ~m));
    }
    a !== 0 && le(e, a, t);
  }
  function fc() {
    return (Je & 6) === 0 ? (Ou(0), !1) : !0;
  }
  function Pf() {
    if (Re !== null) {
      if ($e === 0) var e = Re.return;
      else ((e = Re), (fn = wi = null), mf(e), (pr = null), (du = 0), (e = Re));
      for (; e !== null;) (np(e.alternate, e), (e = e.return));
      Re = null;
    }
  }
  function Er(e, t) {
    var a = e.timeoutHandle;
    (a !== -1 && ((e.timeoutHandle = -1), Lv(a)),
      (a = e.cancelPendingCommit),
      a !== null && ((e.cancelPendingCommit = null), a()),
      (Sn = 0),
      Pf(),
      (at = e),
      (Re = a = cn(e.current, null)),
      (He = t),
      ($e = 0),
      ($a = null),
      (Vn = !1),
      (Sr = pl(e, t)),
      (Zf = !1),
      (Tr = Pa = Kf = ji = Qn = Et = 0),
      (Ra = ku = null),
      (Jf = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n;) {
        var s = 31 - Rt(n),
          c = 1 << s;
        ((t |= e[s]), (n &= ~c));
      }
    return ((xn = t), Cs(), a);
  }
  function kp(e, t) {
    ((we = null),
      (z.H = bu),
      t === mr || t === Ys
        ? ((t = V0()), ($e = 3))
        : t === tf
          ? ((t = V0()), ($e = 4))
          : ($e =
              t === Of
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      ($a = t),
      Re === null && ((Et = 1), ec(e, xl(t, e.current))));
  }
  function Mp() {
    var e = Wa.current;
    return e === null
      ? !0
      : (He & 4194048) === He
        ? El === null
        : (He & 62914560) === He || (He & 536870912) !== 0
          ? e === El
          : !1;
  }
  function Op() {
    var e = z.H;
    return ((z.H = bu), e === null ? bu : e);
  }
  function zp() {
    var e = z.A;
    return ((z.A = vv), e);
  }
  function dc() {
    ((Et = 4),
      Vn || ((He & 4194048) !== He && Wa.current !== null) || (Sr = !0),
      ((Qn & 134217727) === 0 && (ji & 134217727) === 0) ||
        at === null ||
        Jn(at, He, Pa, !1));
  }
  function If(e, t, a) {
    var n = Je;
    Je |= 2;
    var s = Op(),
      c = zp();
    ((at !== e || He !== t) && ((oc = null), Er(e, t)), (t = !1));
    var m = Et;
    e: do
      try {
        if ($e !== 0 && Re !== null) {
          var v = Re,
            w = $a;
          switch ($e) {
            case 8:
              (Pf(), (m = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Wa.current === null && (t = !0);
              var j = $e;
              if ((($e = 0), ($a = null), Nr(e, v, w, j), a && Sr)) {
                m = 0;
                break e;
              }
              break;
            default:
              ((j = $e), ($e = 0), ($a = null), Nr(e, v, w, j));
          }
        }
        (Sv(), (m = Et));
        break;
      } catch (Y) {
        kp(e, Y);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (fn = wi = null),
      (Je = n),
      (z.H = s),
      (z.A = c),
      Re === null && ((at = null), (He = 0), Cs()),
      m
    );
  }
  function Sv() {
    for (; Re !== null;) Cp(Re);
  }
  function Tv(e, t) {
    var a = Je;
    Je |= 2;
    var n = Op(),
      s = zp();
    at !== e || He !== t
      ? ((oc = null), (cc = At() + 500), Er(e, t))
      : (Sr = pl(e, t));
    e: do
      try {
        if ($e !== 0 && Re !== null) {
          t = Re;
          var c = $a;
          t: switch ($e) {
            case 1:
              (($e = 0), ($a = null), Nr(e, t, c, 1));
              break;
            case 2:
            case 9:
              if (X0(c)) {
                (($e = 0), ($a = null), jp(t));
                break;
              }
              ((t = function () {
                (($e !== 2 && $e !== 9) || at !== e || ($e = 7), Fl(e));
              }),
                c.then(t, t));
              break e;
            case 3:
              $e = 7;
              break e;
            case 4:
              $e = 5;
              break e;
            case 7:
              X0(c)
                ? (($e = 0), ($a = null), jp(t))
                : (($e = 0), ($a = null), Nr(e, t, c, 7));
              break;
            case 5:
              var m = null;
              switch (Re.tag) {
                case 26:
                  m = Re.memoizedState;
                case 5:
                case 27:
                  var v = Re;
                  if (m ? _g(m) : v.stateNode.complete) {
                    (($e = 0), ($a = null));
                    var w = v.sibling;
                    if (w !== null) Re = w;
                    else {
                      var j = v.return;
                      j !== null ? ((Re = j), hc(j)) : (Re = null);
                    }
                    break t;
                  }
              }
              (($e = 0), ($a = null), Nr(e, t, c, 5));
              break;
            case 6:
              (($e = 0), ($a = null), Nr(e, t, c, 6));
              break;
            case 8:
              (Pf(), (Et = 6));
              break e;
            default:
              throw Error(i(462));
          }
        }
        wv();
        break;
      } catch (Y) {
        kp(e, Y);
      }
    while (!0);
    return (
      (fn = wi = null),
      (z.H = n),
      (z.A = s),
      (Je = a),
      Re !== null ? 0 : ((at = null), (He = 0), Cs(), Et)
    );
  }
  function wv() {
    for (; Re !== null && !Dl();) Cp(Re);
  }
  function Cp(e) {
    var t = ap(e.alternate, e, xn);
    ((e.memoizedProps = e.pendingProps), t === null ? hc(e) : (Re = t));
  }
  function jp(e) {
    var t = e,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Fm(a, t, t.pendingProps, t.type, void 0, He);
        break;
      case 11:
        t = Fm(a, t, t.pendingProps, t.type.render, t.ref, He);
        break;
      case 5:
        mf(t);
      default:
        (np(a, t), (t = Re = z0(t, xn)), (t = ap(a, t, xn)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? hc(e) : (Re = t));
  }
  function Nr(e, t, a, n) {
    ((fn = wi = null), mf(t), (pr = null), (du = 0));
    var s = t.return;
    try {
      if (dv(e, s, t, a, He)) {
        ((Et = 1), ec(e, xl(a, e.current)), (Re = null));
        return;
      }
    } catch (c) {
      if (s !== null) throw ((Re = s), c);
      ((Et = 1), ec(e, xl(a, e.current)), (Re = null));
      return;
    }
    t.flags & 32768
      ? (Le || n === 1
          ? (e = !0)
          : Sr || (He & 536870912) !== 0
            ? (e = !1)
            : ((Vn = e = !0),
              (n === 2 || n === 9 || n === 3 || n === 6) &&
                ((n = Wa.current),
                n !== null && n.tag === 13 && (n.flags |= 16384))),
        Dp(t, e))
      : hc(t);
  }
  function hc(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Dp(t, Vn);
        return;
      }
      e = t.return;
      var a = pv(t.alternate, t, xn);
      if (a !== null) {
        Re = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Re = t;
        return;
      }
      Re = t = e;
    } while (t !== null);
    Et === 0 && (Et = 5);
  }
  function Dp(e, t) {
    do {
      var a = gv(e.alternate, e);
      if (a !== null) {
        ((a.flags &= 32767), (Re = a));
        return;
      }
      if (
        ((a = e.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Re = e;
        return;
      }
      Re = e = a;
    } while (e !== null);
    ((Et = 6), (Re = null));
  }
  function Rp(e, t, a, n, s, c, m, v, w) {
    e.cancelPendingCommit = null;
    do mc();
    while (Vt !== 0);
    if ((Je & 6) !== 0) throw Error(i(327));
    if (t !== null) {
      if (t === e.current) throw Error(i(177));
      if (
        ((c = t.lanes | t.childLanes),
        (c |= Yo),
        Ve(e, a, c, m, v, w),
        e === at && ((Re = at = null), (He = 0)),
        (wr = t),
        (Kn = e),
        (Sn = a),
        (Wf = c),
        (Ff = s),
        (wp = n),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            kv(ua, function () {
              return (Yp(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (n = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || n)
      ) {
        ((n = z.T), (z.T = null), (s = V.p), (V.p = 2), (m = Je), (Je |= 4));
        try {
          yv(e, t, a);
        } finally {
          ((Je = m), (V.p = s), (z.T = n));
        }
      }
      ((Vt = 1), Up(), qp(), Bp());
    }
  }
  function Up() {
    if (Vt === 1) {
      Vt = 0;
      var e = Kn,
        t = wr,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = z.T), (z.T = null));
        var n = V.p;
        V.p = 2;
        var s = Je;
        Je |= 4;
        try {
          gp(t, e);
          var c = fd,
            m = S0(e.containerInfo),
            v = c.focusedElem,
            w = c.selectionRange;
          if (
            m !== v &&
            v &&
            v.ownerDocument &&
            x0(v.ownerDocument.documentElement, v)
          ) {
            if (w !== null && Ro(v)) {
              var j = w.start,
                Y = w.end;
              if ((Y === void 0 && (Y = j), "selectionStart" in v))
                ((v.selectionStart = j),
                  (v.selectionEnd = Math.min(Y, v.value.length)));
              else {
                var K = v.ownerDocument || document,
                  R = (K && K.defaultView) || window;
                if (R.getSelection) {
                  var U = R.getSelection(),
                    ne = v.textContent.length,
                    pe = Math.min(w.start, ne),
                    tt = w.end === void 0 ? pe : Math.min(w.end, ne);
                  !U.extend && pe > tt && ((m = tt), (tt = pe), (pe = m));
                  var M = b0(v, pe),
                    N = b0(v, tt);
                  if (
                    M &&
                    N &&
                    (U.rangeCount !== 1 ||
                      U.anchorNode !== M.node ||
                      U.anchorOffset !== M.offset ||
                      U.focusNode !== N.node ||
                      U.focusOffset !== N.offset)
                  ) {
                    var C = K.createRange();
                    (C.setStart(M.node, M.offset),
                      U.removeAllRanges(),
                      pe > tt
                        ? (U.addRange(C), U.extend(N.node, N.offset))
                        : (C.setEnd(N.node, N.offset), U.addRange(C)));
                  }
                }
              }
            }
            for (K = [], U = v; (U = U.parentNode);)
              U.nodeType === 1 &&
                K.push({ element: U, left: U.scrollLeft, top: U.scrollTop });
            for (
              typeof v.focus == "function" && v.focus(), v = 0;
              v < K.length;
              v++
            ) {
              var Q = K[v];
              ((Q.element.scrollLeft = Q.left), (Q.element.scrollTop = Q.top));
            }
          }
          ((Nc = !!od), (fd = od = null));
        } finally {
          ((Je = s), (V.p = n), (z.T = a));
        }
      }
      ((e.current = t), (Vt = 2));
    }
  }
  function qp() {
    if (Vt === 2) {
      Vt = 0;
      var e = Kn,
        t = wr,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        ((a = z.T), (z.T = null));
        var n = V.p;
        V.p = 2;
        var s = Je;
        Je |= 4;
        try {
          fp(e, t.alternate, t);
        } finally {
          ((Je = s), (V.p = n), (z.T = a));
        }
      }
      Vt = 3;
    }
  }
  function Bp() {
    if (Vt === 4 || Vt === 3) {
      ((Vt = 0), Ll());
      var e = Kn,
        t = wr,
        a = Sn,
        n = wp;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Vt = 5)
        : ((Vt = 0), (wr = Kn = null), Hp(e, e.pendingLanes));
      var s = e.pendingLanes;
      if (
        (s === 0 && (Zn = null),
        Tt(a),
        (t = t.stateNode),
        pt && typeof pt.onCommitFiberRoot == "function")
      )
        try {
          pt.onCommitFiberRoot(Xl, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (n !== null) {
        ((t = z.T), (s = V.p), (V.p = 2), (z.T = null));
        try {
          for (var c = e.onRecoverableError, m = 0; m < n.length; m++) {
            var v = n[m];
            c(v.value, { componentStack: v.stack });
          }
        } finally {
          ((z.T = t), (V.p = s));
        }
      }
      ((Sn & 3) !== 0 && mc(),
        Fl(e),
        (s = e.pendingLanes),
        (a & 261930) !== 0 && (s & 42) !== 0
          ? e === $f
            ? Mu++
            : ((Mu = 0), ($f = e))
          : (Mu = 0),
        Ou(0));
    }
  }
  function Hp(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), ou(t)));
  }
  function mc() {
    return (Up(), qp(), Bp(), Yp());
  }
  function Yp() {
    if (Vt !== 5) return !1;
    var e = Kn,
      t = Wf;
    Wf = 0;
    var a = Tt(Sn),
      n = z.T,
      s = V.p;
    try {
      ((V.p = 32 > a ? 32 : a), (z.T = null), (a = Ff), (Ff = null));
      var c = Kn,
        m = Sn;
      if (((Vt = 0), (wr = Kn = null), (Sn = 0), (Je & 6) !== 0))
        throw Error(i(331));
      var v = Je;
      if (
        ((Je |= 4),
        xp(c.current),
        _p(c, c.current, m, a),
        (Je = v),
        Ou(0, !1),
        pt && typeof pt.onPostCommitFiberRoot == "function")
      )
        try {
          pt.onPostCommitFiberRoot(Xl, c);
        } catch {}
      return !0;
    } finally {
      ((V.p = s), (z.T = n), Hp(e, t));
    }
  }
  function Lp(e, t, a) {
    ((t = xl(a, t)),
      (t = Mf(e.stateNode, t, 2)),
      (e = Yn(e, t, 2)),
      e !== null && (se(e, 2), Fl(e)));
  }
  function Pe(e, t, a) {
    if (e.tag === 3) Lp(e, e, a);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          Lp(t, e, a);
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof n.componentDidCatch == "function" &&
              (Zn === null || !Zn.has(n)))
          ) {
            ((e = xl(a, e)),
              (a = Xm(2)),
              (n = Yn(t, a, 2)),
              n !== null && (Gm(a, n, t, e), se(n, 2), Fl(n)));
            break;
          }
        }
        t = t.return;
      }
  }
  function ed(e, t, a) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new bv();
      var s = new Set();
      n.set(t, s);
    } else ((s = n.get(t)), s === void 0 && ((s = new Set()), n.set(t, s)));
    s.has(a) ||
      ((Zf = !0), s.add(a), (e = Ev.bind(null, e, t, a)), t.then(e, e));
  }
  function Ev(e, t, a) {
    var n = e.pingCache;
    (n !== null && n.delete(t),
      (e.pingedLanes |= e.suspendedLanes & a),
      (e.warmLanes &= ~a),
      at === e &&
        (He & a) === a &&
        (Et === 4 || (Et === 3 && (He & 62914560) === He && 300 > At() - sc)
          ? (Je & 2) === 0 && Er(e, 0)
          : (Kf |= a),
        Tr === He && (Tr = 0)),
      Fl(e));
  }
  function Xp(e, t) {
    (t === 0 && (t = zn()), (e = xi(e, t)), e !== null && (se(e, t), Fl(e)));
  }
  function Nv(e) {
    var t = e.memoizedState,
      a = 0;
    (t !== null && (a = t.retryLane), Xp(e, a));
  }
  function Av(e, t) {
    var a = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var n = e.stateNode,
          s = e.memoizedState;
        s !== null && (a = s.retryLane);
        break;
      case 19:
        n = e.stateNode;
        break;
      case 22:
        n = e.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    (n !== null && n.delete(t), Xp(e, a));
  }
  function kv(e, t) {
    return fl(e, t);
  }
  var pc = null,
    Ar = null,
    td = !1,
    gc = !1,
    ad = !1,
    Wn = 0;
  function Fl(e) {
    (e !== Ar &&
      e.next === null &&
      (Ar === null ? (pc = Ar = e) : (Ar = Ar.next = e)),
      (gc = !0),
      td || ((td = !0), Ov()));
  }
  function Ou(e, t) {
    if (!ad && gc) {
      ad = !0;
      do
        for (var a = !1, n = pc; n !== null;) {
          if (e !== 0) {
            var s = n.pendingLanes;
            if (s === 0) var c = 0;
            else {
              var m = n.suspendedLanes,
                v = n.pingedLanes;
              ((c = (1 << (31 - Rt(42 | e) + 1)) - 1),
                (c &= s & ~(m & ~v)),
                (c = c & 201326741 ? (c & 201326741) | 1 : c ? c | 2 : 0));
            }
            c !== 0 && ((a = !0), Zp(n, c));
          } else
            ((c = He),
              (c = ml(
                n,
                n === at ? c : 0,
                n.cancelPendingCommit !== null || n.timeoutHandle !== -1,
              )),
              (c & 3) === 0 || pl(n, c) || ((a = !0), Zp(n, c)));
          n = n.next;
        }
      while (a);
      ad = !1;
    }
  }
  function Mv() {
    Gp();
  }
  function Gp() {
    gc = td = !1;
    var e = 0;
    Wn !== 0 && Yv() && (e = Wn);
    for (var t = At(), a = null, n = pc; n !== null;) {
      var s = n.next,
        c = Vp(n, t);
      (c === 0
        ? ((n.next = null),
          a === null ? (pc = s) : (a.next = s),
          s === null && (Ar = a))
        : ((a = n), (e !== 0 || (c & 3) !== 0) && (gc = !0)),
        (n = s));
    }
    ((Vt !== 0 && Vt !== 5) || Ou(e), Wn !== 0 && (Wn = 0));
  }
  function Vp(e, t) {
    for (
      var a = e.suspendedLanes,
        n = e.pingedLanes,
        s = e.expirationTimes,
        c = e.pendingLanes & -62914561;
      0 < c;
    ) {
      var m = 31 - Rt(c),
        v = 1 << m,
        w = s[m];
      (w === -1
        ? ((v & a) === 0 || (v & n) !== 0) && (s[m] = Ul(v, t))
        : w <= t && (e.expiredLanes |= v),
        (c &= ~v));
    }
    if (
      ((t = at),
      (a = He),
      (a = ml(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (n = e.callbackNode),
      a === 0 ||
        (e === t && ($e === 2 || $e === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        n !== null && n !== null && it(n),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((a & 3) === 0 || pl(e, a)) {
      if (((t = a & -a), t === e.callbackPriority)) return t;
      switch ((n !== null && it(n), Tt(a))) {
        case 2:
        case 8:
          a = ft;
          break;
        case 32:
          a = ua;
          break;
        case 268435456:
          a = dl;
          break;
        default:
          a = ua;
      }
      return (
        (n = Qp.bind(null, e)),
        (a = fl(a, n)),
        (e.callbackPriority = t),
        (e.callbackNode = a),
        t
      );
    }
    return (
      n !== null && n !== null && it(n),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Qp(e, t) {
    if (Vt !== 0 && Vt !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var a = e.callbackNode;
    if (mc() && e.callbackNode !== a) return null;
    var n = He;
    return (
      (n = ml(
        e,
        e === at ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      n === 0
        ? null
        : (Np(e, n, t),
          Vp(e, At()),
          e.callbackNode != null && e.callbackNode === a
            ? Qp.bind(null, e)
            : null)
    );
  }
  function Zp(e, t) {
    if (mc()) return null;
    Np(e, t, !0);
  }
  function Ov() {
    Xv(function () {
      (Je & 6) !== 0 ? fl(Rl, Mv) : Gp();
    });
  }
  function ld() {
    if (Wn === 0) {
      var e = dr;
      (e === 0 && ((e = hl), (hl <<= 1), (hl & 261888) === 0 && (hl = 256)),
        (Wn = e));
    }
    return Wn;
  }
  function Kp(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : ws("" + e);
  }
  function Jp(e, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      e.id && a.setAttribute("form", e.id),
      t.parentNode.insertBefore(a, t),
      (e = new FormData(e)),
      a.parentNode.removeChild(a),
      e
    );
  }
  function zv(e, t, a, n, s) {
    if (t === "submit" && a && a.stateNode === s) {
      var c = Kp((s[ke] || null).action),
        m = n.submitter;
      m &&
        ((t = (t = m[ke] || null)
          ? Kp(t.formAction)
          : m.getAttribute("formAction")),
        t !== null && ((c = t), (m = null)));
      var v = new ks("action", "action", null, n, s);
      e.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (n.defaultPrevented) {
                if (Wn !== 0) {
                  var w = m ? Jp(s, m) : new FormData(s);
                  Tf(
                    a,
                    { pending: !0, data: w, method: s.method, action: c },
                    null,
                    w,
                  );
                }
              } else
                typeof c == "function" &&
                  (v.preventDefault(),
                  (w = m ? Jp(s, m) : new FormData(s)),
                  Tf(
                    a,
                    { pending: !0, data: w, method: s.method, action: c },
                    c,
                    w,
                  ));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var nd = 0; nd < Ho.length; nd++) {
    var id = Ho[nd],
      Cv = id.toLowerCase(),
      jv = id[0].toUpperCase() + id.slice(1);
    ql(Cv, "on" + jv);
  }
  (ql(E0, "onAnimationEnd"),
    ql(N0, "onAnimationIteration"),
    ql(A0, "onAnimationStart"),
    ql("dblclick", "onDoubleClick"),
    ql("focusin", "onFocus"),
    ql("focusout", "onBlur"),
    ql(W_, "onTransitionRun"),
    ql(F_, "onTransitionStart"),
    ql($_, "onTransitionCancel"),
    ql(k0, "onTransitionEnd"),
    gl("onMouseEnter", ["mouseout", "mouseover"]),
    gl("onMouseLeave", ["mouseout", "mouseover"]),
    gl("onPointerEnter", ["pointerout", "pointerover"]),
    gl("onPointerLeave", ["pointerout", "pointerover"]),
    Ql(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Ql(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Ql("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ql(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ql(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ql(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var zu =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Dv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(zu),
    );
  function Wp(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var n = e[a],
        s = n.event;
      n = n.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var m = n.length - 1; 0 <= m; m--) {
            var v = n[m],
              w = v.instance,
              j = v.currentTarget;
            if (((v = v.listener), w !== c && s.isPropagationStopped()))
              break e;
            ((c = v), (s.currentTarget = j));
            try {
              c(s);
            } catch (Y) {
              zs(Y);
            }
            ((s.currentTarget = null), (c = w));
          }
        else
          for (m = 0; m < n.length; m++) {
            if (
              ((v = n[m]),
              (w = v.instance),
              (j = v.currentTarget),
              (v = v.listener),
              w !== c && s.isPropagationStopped())
            )
              break e;
            ((c = v), (s.currentTarget = j));
            try {
              c(s);
            } catch (Y) {
              zs(Y);
            }
            ((s.currentTarget = null), (c = w));
          }
      }
    }
  }
  function Ue(e, t) {
    var a = t[ya];
    a === void 0 && (a = t[ya] = new Set());
    var n = e + "__bubble";
    a.has(n) || (Fp(t, e, 2, !1), a.add(n));
  }
  function rd(e, t, a) {
    var n = 0;
    (t && (n |= 4), Fp(a, e, n, t));
  }
  var yc = "_reactListening" + Math.random().toString(36).slice(2);
  function ud(e) {
    if (!e[yc]) {
      ((e[yc] = !0),
        Za.forEach(function (a) {
          a !== "selectionchange" && (Dv.has(a) || rd(a, !1, e), rd(a, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[yc] || ((t[yc] = !0), rd("selectionchange", !1, t));
    }
  }
  function Fp(e, t, a, n) {
    switch (Eg(t)) {
      case 2:
        var s = sb;
        break;
      case 8:
        s = cb;
        break;
      default:
        s = Sd;
    }
    ((a = s.bind(null, t, a, e)),
      (s = void 0),
      !No ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (s = !0),
      n
        ? s !== void 0
          ? e.addEventListener(t, a, { capture: !0, passive: s })
          : e.addEventListener(t, a, !0)
        : s !== void 0
          ? e.addEventListener(t, a, { passive: s })
          : e.addEventListener(t, a, !1));
  }
  function sd(e, t, a, n, s) {
    var c = n;
    if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
      e: for (;;) {
        if (n === null) return;
        var m = n.tag;
        if (m === 3 || m === 4) {
          var v = n.stateNode.containerInfo;
          if (v === s) break;
          if (m === 4)
            for (m = n.return; m !== null;) {
              var w = m.tag;
              if ((w === 3 || w === 4) && m.stateNode.containerInfo === s)
                return;
              m = m.return;
            }
          for (; v !== null;) {
            if (((m = yt(v)), m === null)) return;
            if (((w = m.tag), w === 5 || w === 6 || w === 26 || w === 27)) {
              n = c = m;
              continue e;
            }
            v = v.parentNode;
          }
        }
        n = n.return;
      }
    t0(function () {
      var j = c,
        Y = wo(a),
        K = [];
      e: {
        var R = M0.get(e);
        if (R !== void 0) {
          var U = ks,
            ne = e;
          switch (e) {
            case "keypress":
              if (Ns(a) === 0) break e;
            case "keydown":
            case "keyup":
              U = A_;
              break;
            case "focusin":
              ((ne = "focus"), (U = Oo));
              break;
            case "focusout":
              ((ne = "blur"), (U = Oo));
              break;
            case "beforeblur":
            case "afterblur":
              U = Oo;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              U = n0;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = p_;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = O_;
              break;
            case E0:
            case N0:
            case A0:
              U = __;
              break;
            case k0:
              U = C_;
              break;
            case "scroll":
            case "scrollend":
              U = h_;
              break;
            case "wheel":
              U = D_;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = b_;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = r0;
              break;
            case "toggle":
            case "beforetoggle":
              U = U_;
          }
          var pe = (t & 4) !== 0,
            tt = !pe && (e === "scroll" || e === "scrollend"),
            M = pe ? (R !== null ? R + "Capture" : null) : R;
          pe = [];
          for (var N = j, C; N !== null;) {
            var Q = N;
            if (
              ((C = Q.stateNode),
              (Q = Q.tag),
              (Q !== 5 && Q !== 26 && Q !== 27) ||
                C === null ||
                M === null ||
                ((Q = Ir(N, M)), Q != null && pe.push(Cu(N, Q, C))),
              tt)
            )
              break;
            N = N.return;
          }
          0 < pe.length &&
            ((R = new U(R, ne, null, a, Y)),
            K.push({ event: R, listeners: pe }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((R = e === "mouseover" || e === "pointerover"),
            (U = e === "mouseout" || e === "pointerout"),
            R &&
              a !== To &&
              (ne = a.relatedTarget || a.fromElement) &&
              (yt(ne) || ne[Ge]))
          )
            break e;
          if (
            (U || R) &&
            ((R =
              Y.window === Y
                ? Y
                : (R = Y.ownerDocument)
                  ? R.defaultView || R.parentWindow
                  : window),
            U
              ? ((ne = a.relatedTarget || a.toElement),
                (U = j),
                (ne = ne ? yt(ne) : null),
                ne !== null &&
                  ((tt = o(ne)),
                  (pe = ne.tag),
                  ne !== tt || (pe !== 5 && pe !== 27 && pe !== 6)) &&
                  (ne = null))
              : ((U = null), (ne = j)),
            U !== ne)
          ) {
            if (
              ((pe = n0),
              (Q = "onMouseLeave"),
              (M = "onMouseEnter"),
              (N = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((pe = r0),
                (Q = "onPointerLeave"),
                (M = "onPointerEnter"),
                (N = "pointer")),
              (tt = U == null ? R : Vl(U)),
              (C = ne == null ? R : Vl(ne)),
              (R = new pe(Q, N + "leave", U, a, Y)),
              (R.target = tt),
              (R.relatedTarget = C),
              (Q = null),
              yt(Y) === j &&
                ((pe = new pe(M, N + "enter", ne, a, Y)),
                (pe.target = C),
                (pe.relatedTarget = tt),
                (Q = pe)),
              (tt = Q),
              U && ne)
            )
              t: {
                for (pe = Rv, M = U, N = ne, C = 0, Q = M; Q; Q = pe(Q)) C++;
                Q = 0;
                for (var oe = N; oe; oe = pe(oe)) Q++;
                for (; 0 < C - Q;) ((M = pe(M)), C--);
                for (; 0 < Q - C;) ((N = pe(N)), Q--);
                for (; C--;) {
                  if (M === N || (N !== null && M === N.alternate)) {
                    pe = M;
                    break t;
                  }
                  ((M = pe(M)), (N = pe(N)));
                }
                pe = null;
              }
            else pe = null;
            (U !== null && $p(K, R, U, pe, !1),
              ne !== null && tt !== null && $p(K, tt, ne, pe, !0));
          }
        }
        e: {
          if (
            ((R = j ? Vl(j) : window),
            (U = R.nodeName && R.nodeName.toLowerCase()),
            U === "select" || (U === "input" && R.type === "file"))
          )
            var Qe = m0;
          else if (d0(R))
            if (p0) Qe = Z_;
            else {
              Qe = V_;
              var re = G_;
            }
          else
            ((U = R.nodeName),
              !U ||
              U.toLowerCase() !== "input" ||
              (R.type !== "checkbox" && R.type !== "radio")
                ? j && So(j.elementType) && (Qe = m0)
                : (Qe = Q_));
          if (Qe && (Qe = Qe(e, j))) {
            h0(K, Qe, a, Y);
            break e;
          }
          (re && re(e, R, j),
            e === "focusout" &&
              j &&
              R.type === "number" &&
              j.memoizedProps.value != null &&
              xo(R, "number", R.value));
        }
        switch (((re = j ? Vl(j) : window), e)) {
          case "focusin":
            (d0(re) || re.contentEditable === "true") &&
              ((nr = re), (Uo = j), (uu = null));
            break;
          case "focusout":
            uu = Uo = nr = null;
            break;
          case "mousedown":
            qo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((qo = !1), T0(K, a, Y));
            break;
          case "selectionchange":
            if (J_) break;
          case "keydown":
          case "keyup":
            T0(K, a, Y);
        }
        var Ee;
        if (Co)
          e: {
            switch (e) {
              case "compositionstart":
                var Ye = "onCompositionStart";
                break e;
              case "compositionend":
                Ye = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ye = "onCompositionUpdate";
                break e;
            }
            Ye = void 0;
          }
        else
          lr
            ? o0(e, a) && (Ye = "onCompositionEnd")
            : e === "keydown" &&
              a.keyCode === 229 &&
              (Ye = "onCompositionStart");
        (Ye &&
          (u0 &&
            a.locale !== "ko" &&
            (lr || Ye !== "onCompositionStart"
              ? Ye === "onCompositionEnd" && lr && (Ee = a0())
              : ((jn = Y),
                (Ao = "value" in jn ? jn.value : jn.textContent),
                (lr = !0))),
          (re = _c(j, Ye)),
          0 < re.length &&
            ((Ye = new i0(Ye, e, null, a, Y)),
            K.push({ event: Ye, listeners: re }),
            Ee
              ? (Ye.data = Ee)
              : ((Ee = f0(a)), Ee !== null && (Ye.data = Ee)))),
          (Ee = B_ ? H_(e, a) : Y_(e, a)) &&
            ((Ye = _c(j, "onBeforeInput")),
            0 < Ye.length &&
              ((re = new i0("onBeforeInput", "beforeinput", null, a, Y)),
              K.push({ event: re, listeners: Ye }),
              (re.data = Ee))),
          zv(K, e, j, a, Y));
      }
      Wp(K, t);
    });
  }
  function Cu(e, t, a) {
    return { instance: e, listener: t, currentTarget: a };
  }
  function _c(e, t) {
    for (var a = t + "Capture", n = []; e !== null;) {
      var s = e,
        c = s.stateNode;
      if (
        ((s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          c === null ||
          ((s = Ir(e, a)),
          s != null && n.unshift(Cu(e, s, c)),
          (s = Ir(e, t)),
          s != null && n.push(Cu(e, s, c))),
        e.tag === 3)
      )
        return n;
      e = e.return;
    }
    return [];
  }
  function Rv(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function $p(e, t, a, n, s) {
    for (var c = t._reactName, m = []; a !== null && a !== n;) {
      var v = a,
        w = v.alternate,
        j = v.stateNode;
      if (((v = v.tag), w !== null && w === n)) break;
      ((v !== 5 && v !== 26 && v !== 27) ||
        j === null ||
        ((w = j),
        s
          ? ((j = Ir(a, c)), j != null && m.unshift(Cu(a, j, w)))
          : s || ((j = Ir(a, c)), j != null && m.push(Cu(a, j, w)))),
        (a = a.return));
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var Uv = /\r\n?/g,
    qv = /\u0000|\uFFFD/g;
  function Pp(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Uv,
        `
`,
      )
      .replace(qv, "");
  }
  function Ip(e, t) {
    return ((t = Pp(t)), Pp(e) === t);
  }
  function et(e, t, a, n, s, c) {
    switch (a) {
      case "children":
        typeof n == "string"
          ? t === "body" || (t === "textarea" && n === "") || er(e, n)
          : (typeof n == "number" || typeof n == "bigint") &&
            t !== "body" &&
            er(e, "" + n);
        break;
      case "className":
        Ss(e, "class", n);
        break;
      case "tabIndex":
        Ss(e, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ss(e, a, n);
        break;
      case "style":
        Ih(e, n, c);
        break;
      case "data":
        if (t !== "object") {
          Ss(e, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (
          n == null ||
          typeof n == "function" ||
          typeof n == "symbol" ||
          typeof n == "boolean"
        ) {
          e.removeAttribute(a);
          break;
        }
        ((n = ws("" + n)), e.setAttribute(a, n));
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof c == "function" &&
            (a === "formAction"
              ? (t !== "input" && et(e, t, "name", s.name, s, null),
                et(e, t, "formEncType", s.formEncType, s, null),
                et(e, t, "formMethod", s.formMethod, s, null),
                et(e, t, "formTarget", s.formTarget, s, null))
              : (et(e, t, "encType", s.encType, s, null),
                et(e, t, "method", s.method, s, null),
                et(e, t, "target", s.target, s, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(a);
          break;
        }
        ((n = ws("" + n)), e.setAttribute(a, n));
        break;
      case "onClick":
        n != null && (e.onclick = un);
        break;
      case "onScroll":
        n != null && Ue("scroll", e);
        break;
      case "onScrollEnd":
        n != null && Ue("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n)) throw Error(i(61));
          if (((a = n.__html), a != null)) {
            if (s.children != null) throw Error(i(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        e.muted = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          n == null ||
          typeof n == "function" ||
          typeof n == "boolean" ||
          typeof n == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((a = ws("" + n)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        n != null && typeof n != "function" && typeof n != "symbol"
          ? e.setAttribute(a, "" + n)
          : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        n && typeof n != "function" && typeof n != "symbol"
          ? e.setAttribute(a, "")
          : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        n === !0
          ? e.setAttribute(a, "")
          : n !== !1 &&
              n != null &&
              typeof n != "function" &&
              typeof n != "symbol"
            ? e.setAttribute(a, n)
            : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        !isNaN(n) &&
        1 <= n
          ? e.setAttribute(a, n)
          : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n)
          ? e.removeAttribute(a)
          : e.setAttribute(a, n);
        break;
      case "popover":
        (Ue("beforetoggle", e), Ue("toggle", e), xs(e, "popover", n));
        break;
      case "xlinkActuate":
        rn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
        break;
      case "xlinkArcrole":
        rn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
        break;
      case "xlinkRole":
        rn(e, "http://www.w3.org/1999/xlink", "xlink:role", n);
        break;
      case "xlinkShow":
        rn(e, "http://www.w3.org/1999/xlink", "xlink:show", n);
        break;
      case "xlinkTitle":
        rn(e, "http://www.w3.org/1999/xlink", "xlink:title", n);
        break;
      case "xlinkType":
        rn(e, "http://www.w3.org/1999/xlink", "xlink:type", n);
        break;
      case "xmlBase":
        rn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
        break;
      case "xmlLang":
        rn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
        break;
      case "xmlSpace":
        rn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
        break;
      case "is":
        xs(e, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = f_.get(a) || a), xs(e, a, n));
    }
  }
  function cd(e, t, a, n, s, c) {
    switch (a) {
      case "style":
        Ih(e, n, c);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n)) throw Error(i(61));
          if (((a = n.__html), a != null)) {
            if (s.children != null) throw Error(i(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof n == "string"
          ? er(e, n)
          : (typeof n == "number" || typeof n == "bigint") && er(e, "" + n);
        break;
      case "onScroll":
        n != null && Ue("scroll", e);
        break;
      case "onScrollEnd":
        n != null && Ue("scrollend", e);
        break;
      case "onClick":
        n != null && (e.onclick = un);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Pi.hasOwnProperty(a))
          e: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((s = a.endsWith("Capture")),
              (t = a.slice(2, s ? a.length - 7 : void 0)),
              (c = e[ke] || null),
              (c = c != null ? c[a] : null),
              typeof c == "function" && e.removeEventListener(t, c, s),
              typeof n == "function")
            ) {
              (typeof c != "function" &&
                c !== null &&
                (a in e
                  ? (e[a] = null)
                  : e.hasAttribute(a) && e.removeAttribute(a)),
                e.addEventListener(t, n, s));
              break e;
            }
            a in e
              ? (e[a] = n)
              : n === !0
                ? e.setAttribute(a, "")
                : xs(e, a, n);
          }
    }
  }
  function la(e, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (Ue("error", e), Ue("load", e));
        var n = !1,
          s = !1,
          c;
        for (c in a)
          if (a.hasOwnProperty(c)) {
            var m = a[c];
            if (m != null)
              switch (c) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, t));
                default:
                  et(e, t, c, m, a, null);
              }
          }
        (s && et(e, t, "srcSet", a.srcSet, a, null),
          n && et(e, t, "src", a.src, a, null));
        return;
      case "input":
        Ue("invalid", e);
        var v = (c = m = s = null),
          w = null,
          j = null;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var Y = a[n];
            if (Y != null)
              switch (n) {
                case "name":
                  s = Y;
                  break;
                case "type":
                  m = Y;
                  break;
                case "checked":
                  w = Y;
                  break;
                case "defaultChecked":
                  j = Y;
                  break;
                case "value":
                  c = Y;
                  break;
                case "defaultValue":
                  v = Y;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Y != null) throw Error(i(137, t));
                  break;
                default:
                  et(e, t, n, Y, a, null);
              }
          }
        Wh(e, c, v, w, j, m, s, !1);
        return;
      case "select":
        (Ue("invalid", e), (n = m = c = null));
        for (s in a)
          if (a.hasOwnProperty(s) && ((v = a[s]), v != null))
            switch (s) {
              case "value":
                c = v;
                break;
              case "defaultValue":
                m = v;
                break;
              case "multiple":
                n = v;
              default:
                et(e, t, s, v, a, null);
            }
        ((t = c),
          (a = m),
          (e.multiple = !!n),
          t != null ? Ii(e, !!n, t, !1) : a != null && Ii(e, !!n, a, !0));
        return;
      case "textarea":
        (Ue("invalid", e), (c = s = n = null));
        for (m in a)
          if (a.hasOwnProperty(m) && ((v = a[m]), v != null))
            switch (m) {
              case "value":
                n = v;
                break;
              case "defaultValue":
                s = v;
                break;
              case "children":
                c = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(i(91));
                break;
              default:
                et(e, t, m, v, a, null);
            }
        $h(e, n, s, c);
        return;
      case "option":
        for (w in a)
          a.hasOwnProperty(w) &&
            ((n = a[w]), n != null) &&
            (w === "selected"
              ? (e.selected =
                  n && typeof n != "function" && typeof n != "symbol")
              : et(e, t, w, n, a, null));
        return;
      case "dialog":
        (Ue("beforetoggle", e),
          Ue("toggle", e),
          Ue("cancel", e),
          Ue("close", e));
        break;
      case "iframe":
      case "object":
        Ue("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < zu.length; n++) Ue(zu[n], e);
        break;
      case "image":
        (Ue("error", e), Ue("load", e));
        break;
      case "details":
        Ue("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (Ue("error", e), Ue("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (j in a)
          if (a.hasOwnProperty(j) && ((n = a[j]), n != null))
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, t));
              default:
                et(e, t, j, n, a, null);
            }
        return;
      default:
        if (So(t)) {
          for (Y in a)
            a.hasOwnProperty(Y) &&
              ((n = a[Y]), n !== void 0 && cd(e, t, Y, n, a, void 0));
          return;
        }
    }
    for (v in a)
      a.hasOwnProperty(v) && ((n = a[v]), n != null && et(e, t, v, n, a, null));
  }
  function Bv(e, t, a, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null,
          c = null,
          m = null,
          v = null,
          w = null,
          j = null,
          Y = null;
        for (U in a) {
          var K = a[U];
          if (a.hasOwnProperty(U) && K != null)
            switch (U) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                w = K;
              default:
                n.hasOwnProperty(U) || et(e, t, U, null, n, K);
            }
        }
        for (var R in n) {
          var U = n[R];
          if (((K = a[R]), n.hasOwnProperty(R) && (U != null || K != null)))
            switch (R) {
              case "type":
                c = U;
                break;
              case "name":
                s = U;
                break;
              case "checked":
                j = U;
                break;
              case "defaultChecked":
                Y = U;
                break;
              case "value":
                m = U;
                break;
              case "defaultValue":
                v = U;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null) throw Error(i(137, t));
                break;
              default:
                U !== K && et(e, t, R, U, n, K);
            }
        }
        bo(e, m, v, w, j, Y, c, s);
        return;
      case "select":
        U = m = v = R = null;
        for (c in a)
          if (((w = a[c]), a.hasOwnProperty(c) && w != null))
            switch (c) {
              case "value":
                break;
              case "multiple":
                U = w;
              default:
                n.hasOwnProperty(c) || et(e, t, c, null, n, w);
            }
        for (s in n)
          if (
            ((c = n[s]),
            (w = a[s]),
            n.hasOwnProperty(s) && (c != null || w != null))
          )
            switch (s) {
              case "value":
                R = c;
                break;
              case "defaultValue":
                v = c;
                break;
              case "multiple":
                m = c;
              default:
                c !== w && et(e, t, s, c, n, w);
            }
        ((t = v),
          (a = m),
          (n = U),
          R != null
            ? Ii(e, !!a, R, !1)
            : !!n != !!a &&
              (t != null ? Ii(e, !!a, t, !0) : Ii(e, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        U = R = null;
        for (v in a)
          if (
            ((s = a[v]),
            a.hasOwnProperty(v) && s != null && !n.hasOwnProperty(v))
          )
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                et(e, t, v, null, n, s);
            }
        for (m in n)
          if (
            ((s = n[m]),
            (c = a[m]),
            n.hasOwnProperty(m) && (s != null || c != null))
          )
            switch (m) {
              case "value":
                R = s;
                break;
              case "defaultValue":
                U = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(i(91));
                break;
              default:
                s !== c && et(e, t, m, s, n, c);
            }
        Fh(e, R, U);
        return;
      case "option":
        for (var ne in a)
          ((R = a[ne]),
            a.hasOwnProperty(ne) &&
              R != null &&
              !n.hasOwnProperty(ne) &&
              (ne === "selected"
                ? (e.selected = !1)
                : et(e, t, ne, null, n, R)));
        for (w in n)
          ((R = n[w]),
            (U = a[w]),
            n.hasOwnProperty(w) &&
              R !== U &&
              (R != null || U != null) &&
              (w === "selected"
                ? (e.selected =
                    R && typeof R != "function" && typeof R != "symbol")
                : et(e, t, w, R, n, U)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var pe in a)
          ((R = a[pe]),
            a.hasOwnProperty(pe) &&
              R != null &&
              !n.hasOwnProperty(pe) &&
              et(e, t, pe, null, n, R));
        for (j in n)
          if (
            ((R = n[j]),
            (U = a[j]),
            n.hasOwnProperty(j) && R !== U && (R != null || U != null))
          )
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (R != null) throw Error(i(137, t));
                break;
              default:
                et(e, t, j, R, n, U);
            }
        return;
      default:
        if (So(t)) {
          for (var tt in a)
            ((R = a[tt]),
              a.hasOwnProperty(tt) &&
                R !== void 0 &&
                !n.hasOwnProperty(tt) &&
                cd(e, t, tt, void 0, n, R));
          for (Y in n)
            ((R = n[Y]),
              (U = a[Y]),
              !n.hasOwnProperty(Y) ||
                R === U ||
                (R === void 0 && U === void 0) ||
                cd(e, t, Y, R, n, U));
          return;
        }
    }
    for (var M in a)
      ((R = a[M]),
        a.hasOwnProperty(M) &&
          R != null &&
          !n.hasOwnProperty(M) &&
          et(e, t, M, null, n, R));
    for (K in n)
      ((R = n[K]),
        (U = a[K]),
        !n.hasOwnProperty(K) ||
          R === U ||
          (R == null && U == null) ||
          et(e, t, K, R, n, U));
  }
  function eg(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Hv() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, a = performance.getEntriesByType("resource"), n = 0;
        n < a.length;
        n++
      ) {
        var s = a[n],
          c = s.transferSize,
          m = s.initiatorType,
          v = s.duration;
        if (c && v && eg(m)) {
          for (m = 0, v = s.responseEnd, n += 1; n < a.length; n++) {
            var w = a[n],
              j = w.startTime;
            if (j > v) break;
            var Y = w.transferSize,
              K = w.initiatorType;
            Y &&
              eg(K) &&
              ((w = w.responseEnd), (m += Y * (w < v ? 1 : (v - j) / (w - j))));
          }
          if ((--n, (t += (8 * (c + m)) / (s.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var od = null,
    fd = null;
  function vc(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function tg(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function ag(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function dd(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var hd = null;
  function Yv() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === hd
        ? !1
        : ((hd = e), !0)
      : ((hd = null), !1);
  }
  var lg = typeof setTimeout == "function" ? setTimeout : void 0,
    Lv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ng = typeof Promise == "function" ? Promise : void 0,
    Xv =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof ng < "u"
          ? function (e) {
              return ng.resolve(null).then(e).catch(Gv);
            }
          : lg;
  function Gv(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Fn(e) {
    return e === "head";
  }
  function ig(e, t) {
    var a = t,
      n = 0;
    do {
      var s = a.nextSibling;
      if ((e.removeChild(a), s && s.nodeType === 8))
        if (((a = s.data), a === "/$" || a === "/&")) {
          if (n === 0) {
            (e.removeChild(s), zr(t));
            return;
          }
          n--;
        } else if (
          a === "$" ||
          a === "$?" ||
          a === "$~" ||
          a === "$!" ||
          a === "&"
        )
          n++;
        else if (a === "html") ju(e.ownerDocument.documentElement);
        else if (a === "head") {
          ((a = e.ownerDocument.head), ju(a));
          for (var c = a.firstChild; c;) {
            var m = c.nextSibling,
              v = c.nodeName;
            (c[gt] ||
              v === "SCRIPT" ||
              v === "STYLE" ||
              (v === "LINK" && c.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(c),
              (c = m));
          }
        } else a === "body" && ju(e.ownerDocument.body);
      a = s;
    } while (a);
    zr(t);
  }
  function rg(e, t) {
    var a = e;
    e = 0;
    do {
      var n = a.nextSibling;
      if (
        (a.nodeType === 1
          ? t
            ? ((a._stashedDisplay = a.style.display),
              (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""),
              a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 &&
            (t
              ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
              : (a.nodeValue = a._stashedText || "")),
        n && n.nodeType === 8)
      )
        if (((a = n.data), a === "/$")) {
          if (e === 0) break;
          e--;
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || e++;
      a = n;
    } while (a);
  }
  function md(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (md(a), kt(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function Vv(e, t, a, n) {
    for (; e.nodeType === 1;) {
      var s = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (n) {
        if (!e[gt])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((c = e.getAttribute("rel")),
                c === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                c !== s.rel ||
                e.getAttribute("href") !==
                  (s.href == null || s.href === "" ? null : s.href) ||
                e.getAttribute("crossorigin") !==
                  (s.crossOrigin == null ? null : s.crossOrigin) ||
                e.getAttribute("title") !== (s.title == null ? null : s.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((c = e.getAttribute("src")),
                (c !== (s.src == null ? null : s.src) ||
                  e.getAttribute("type") !== (s.type == null ? null : s.type) ||
                  e.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
                  c &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var c = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && e.getAttribute("name") === c) return e;
      } else return e;
      if (((e = Nl(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Qv(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3;)
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !a) ||
        ((e = Nl(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function ug(e, t) {
    for (; e.nodeType !== 8;)
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = Nl(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function pd(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function gd(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function Zv(e, t) {
    var a = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || a.readyState !== "loading") t();
    else {
      var n = function () {
        (t(), a.removeEventListener("DOMContentLoaded", n));
      };
      (a.addEventListener("DOMContentLoaded", n), (e._reactRetry = n));
    }
  }
  function Nl(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var yd = null;
  function sg(e) {
    e = e.nextSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return Nl(e.nextSibling);
          t--;
        } else
          (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function cg(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return e;
          t--;
        } else (a !== "/$" && a !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function og(e, t, a) {
    switch (((t = vc(a)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(i(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(i(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(i(454));
        return e;
      default:
        throw Error(i(451));
    }
  }
  function ju(e) {
    for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
    kt(e);
  }
  var Al = new Map(),
    fg = new Set();
  function bc(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Tn = V.d;
  V.d = { f: Kv, r: Jv, D: Wv, C: Fv, L: $v, m: Pv, X: eb, S: Iv, M: tb };
  function Kv() {
    var e = Tn.f(),
      t = fc();
    return e || t;
  }
  function Jv(e) {
    var t = Oa(e);
    t !== null && t.tag === 5 && t.type === "form" ? km(t) : Tn.r(e);
  }
  var kr = typeof document > "u" ? null : document;
  function dg(e, t, a) {
    var n = kr;
    if (n && typeof t == "string" && t) {
      var s = vl(t);
      ((s = 'link[rel="' + e + '"][href="' + s + '"]'),
        typeof a == "string" && (s += '[crossorigin="' + a + '"]'),
        fg.has(s) ||
          (fg.add(s),
          (e = { rel: e, crossOrigin: a, href: t }),
          n.querySelector(s) === null &&
            ((t = n.createElement("link")),
            la(t, "link", e),
            Ce(t),
            n.head.appendChild(t))));
    }
  }
  function Wv(e) {
    (Tn.D(e), dg("dns-prefetch", e, null));
  }
  function Fv(e, t) {
    (Tn.C(e, t), dg("preconnect", e, t));
  }
  function $v(e, t, a) {
    Tn.L(e, t, a);
    var n = kr;
    if (n && e && t) {
      var s = 'link[rel="preload"][as="' + vl(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((s += '[imagesrcset="' + vl(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (s += '[imagesizes="' + vl(a.imageSizes) + '"]'))
        : (s += '[href="' + vl(e) + '"]');
      var c = s;
      switch (t) {
        case "style":
          c = Mr(e);
          break;
        case "script":
          c = Or(e);
      }
      Al.has(c) ||
        ((e = b(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : e,
            as: t,
          },
          a,
        )),
        Al.set(c, e),
        n.querySelector(s) !== null ||
          (t === "style" && n.querySelector(Du(c))) ||
          (t === "script" && n.querySelector(Ru(c))) ||
          ((t = n.createElement("link")),
          la(t, "link", e),
          Ce(t),
          n.head.appendChild(t)));
    }
  }
  function Pv(e, t) {
    Tn.m(e, t);
    var a = kr;
    if (a && e) {
      var n = t && typeof t.as == "string" ? t.as : "script",
        s =
          'link[rel="modulepreload"][as="' + vl(n) + '"][href="' + vl(e) + '"]',
        c = s;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = Or(e);
      }
      if (
        !Al.has(c) &&
        ((e = b({ rel: "modulepreload", href: e }, t)),
        Al.set(c, e),
        a.querySelector(s) === null)
      ) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Ru(c))) return;
        }
        ((n = a.createElement("link")),
          la(n, "link", e),
          Ce(n),
          a.head.appendChild(n));
      }
    }
  }
  function Iv(e, t, a) {
    Tn.S(e, t, a);
    var n = kr;
    if (n && e) {
      var s = _t(n).hoistableStyles,
        c = Mr(e);
      t = t || "default";
      var m = s.get(c);
      if (!m) {
        var v = { loading: 0, preload: null };
        if ((m = n.querySelector(Du(c)))) v.loading = 5;
        else {
          ((e = b({ rel: "stylesheet", href: e, "data-precedence": t }, a)),
            (a = Al.get(c)) && _d(e, a));
          var w = (m = n.createElement("link"));
          (Ce(w),
            la(w, "link", e),
            (w._p = new Promise(function (j, Y) {
              ((w.onload = j), (w.onerror = Y));
            })),
            w.addEventListener("load", function () {
              v.loading |= 1;
            }),
            w.addEventListener("error", function () {
              v.loading |= 2;
            }),
            (v.loading |= 4),
            xc(m, t, n));
        }
        ((m = { type: "stylesheet", instance: m, count: 1, state: v }),
          s.set(c, m));
      }
    }
  }
  function eb(e, t) {
    Tn.X(e, t);
    var a = kr;
    if (a && e) {
      var n = _t(a).hoistableScripts,
        s = Or(e),
        c = n.get(s);
      c ||
        ((c = a.querySelector(Ru(s))),
        c ||
          ((e = b({ src: e, async: !0 }, t)),
          (t = Al.get(s)) && vd(e, t),
          (c = a.createElement("script")),
          Ce(c),
          la(c, "link", e),
          a.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        n.set(s, c));
    }
  }
  function tb(e, t) {
    Tn.M(e, t);
    var a = kr;
    if (a && e) {
      var n = _t(a).hoistableScripts,
        s = Or(e),
        c = n.get(s);
      c ||
        ((c = a.querySelector(Ru(s))),
        c ||
          ((e = b({ src: e, async: !0, type: "module" }, t)),
          (t = Al.get(s)) && vd(e, t),
          (c = a.createElement("script")),
          Ce(c),
          la(c, "link", e),
          a.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        n.set(s, c));
    }
  }
  function hg(e, t, a, n) {
    var s = (s = he.current) ? bc(s) : null;
    if (!s) throw Error(i(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = Mr(a.href)),
            (a = _t(s).hoistableStyles),
            (n = a.get(t)),
            n ||
              ((n = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, n)),
            n)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          e = Mr(a.href);
          var c = _t(s).hoistableStyles,
            m = c.get(e);
          if (
            (m ||
              ((s = s.ownerDocument || s),
              (m = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              c.set(e, m),
              (c = s.querySelector(Du(e))) &&
                !c._p &&
                ((m.instance = c), (m.state.loading = 5)),
              Al.has(e) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                Al.set(e, a),
                c || ab(s, e, a, m.state))),
            t && n === null)
          )
            throw Error(i(528, ""));
          return m;
        }
        if (t && n !== null) throw Error(i(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Or(a)),
              (a = _t(s).hoistableScripts),
              (n = a.get(t)),
              n ||
                ((n = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, n)),
              n)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(i(444, e));
    }
  }
  function Mr(e) {
    return 'href="' + vl(e) + '"';
  }
  function Du(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function mg(e) {
    return b({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function ab(e, t, a, n) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (n.loading = 1)
      : ((t = e.createElement("link")),
        (n.preload = t),
        t.addEventListener("load", function () {
          return (n.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (n.loading |= 2);
        }),
        la(t, "link", a),
        Ce(t),
        e.head.appendChild(t));
  }
  function Or(e) {
    return '[src="' + vl(e) + '"]';
  }
  function Ru(e) {
    return "script[async]" + e;
  }
  function pg(e, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var n = e.querySelector('style[data-href~="' + vl(a.href) + '"]');
          if (n) return ((t.instance = n), Ce(n), n);
          var s = b({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (n = (e.ownerDocument || e).createElement("style")),
            Ce(n),
            la(n, "style", s),
            xc(n, a.precedence, e),
            (t.instance = n)
          );
        case "stylesheet":
          s = Mr(a.href);
          var c = e.querySelector(Du(s));
          if (c) return ((t.state.loading |= 4), (t.instance = c), Ce(c), c);
          ((n = mg(a)),
            (s = Al.get(s)) && _d(n, s),
            (c = (e.ownerDocument || e).createElement("link")),
            Ce(c));
          var m = c;
          return (
            (m._p = new Promise(function (v, w) {
              ((m.onload = v), (m.onerror = w));
            })),
            la(c, "link", n),
            (t.state.loading |= 4),
            xc(c, a.precedence, e),
            (t.instance = c)
          );
        case "script":
          return (
            (c = Or(a.src)),
            (s = e.querySelector(Ru(c)))
              ? ((t.instance = s), Ce(s), s)
              : ((n = a),
                (s = Al.get(c)) && ((n = b({}, a)), vd(n, s)),
                (e = e.ownerDocument || e),
                (s = e.createElement("script")),
                Ce(s),
                la(s, "link", n),
                e.head.appendChild(s),
                (t.instance = s))
          );
        case "void":
          return null;
        default:
          throw Error(i(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((n = t.instance), (t.state.loading |= 4), xc(n, a.precedence, e));
    return t.instance;
  }
  function xc(e, t, a) {
    for (
      var n = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        s = n.length ? n[n.length - 1] : null,
        c = s,
        m = 0;
      m < n.length;
      m++
    ) {
      var v = n[m];
      if (v.dataset.precedence === t) c = v;
      else if (c !== s) break;
    }
    c
      ? c.parentNode.insertBefore(e, c.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(e, t.firstChild));
  }
  function _d(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function vd(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Sc = null;
  function gg(e, t, a) {
    if (Sc === null) {
      var n = new Map(),
        s = (Sc = new Map());
      s.set(a, n);
    } else ((s = Sc), (n = s.get(a)), n || ((n = new Map()), s.set(a, n)));
    if (n.has(e)) return n;
    for (
      n.set(e, null), a = a.getElementsByTagName(e), s = 0;
      s < a.length;
      s++
    ) {
      var c = a[s];
      if (
        !(
          c[gt] ||
          c[Ne] ||
          (e === "link" && c.getAttribute("rel") === "stylesheet")
        ) &&
        c.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var m = c.getAttribute(t) || "";
        m = e + m;
        var v = n.get(m);
        v ? v.push(c) : n.set(m, [c]);
      }
    }
    return n;
  }
  function yg(e, t, a) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null,
      ));
  }
  function lb(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        return t.rel === "stylesheet"
          ? ((e = t.disabled), typeof t.precedence == "string" && e == null)
          : !0;
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function _g(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function nb(e, t, a, n) {
    if (
      a.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var s = Mr(n.href),
          c = t.querySelector(Du(s));
        if (c) {
          ((t = c._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = Tc.bind(e)), t.then(e, e)),
            (a.state.loading |= 4),
            (a.instance = c),
            Ce(c));
          return;
        }
        ((c = t.ownerDocument || t),
          (n = mg(n)),
          (s = Al.get(s)) && _d(n, s),
          (c = c.createElement("link")),
          Ce(c));
        var m = c;
        ((m._p = new Promise(function (v, w) {
          ((m.onload = v), (m.onerror = w));
        })),
          la(c, "link", n),
          (a.instance = c));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(a, t),
        (t = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (e.count++,
          (a = Tc.bind(e)),
          t.addEventListener("load", a),
          t.addEventListener("error", a)));
    }
  }
  var bd = 0;
  function ib(e, t) {
    return (
      e.stylesheets && e.count === 0 && Ec(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (a) {
            var n = setTimeout(function () {
              if ((e.stylesheets && Ec(e, e.stylesheets), e.unsuspend)) {
                var c = e.unsuspend;
                ((e.unsuspend = null), c());
              }
            }, 6e4 + t);
            0 < e.imgBytes && bd === 0 && (bd = 62500 * Hv());
            var s = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && Ec(e, e.stylesheets), e.unsuspend))
                ) {
                  var c = e.unsuspend;
                  ((e.unsuspend = null), c());
                }
              },
              (e.imgBytes > bd ? 50 : 800) + t,
            );
            return (
              (e.unsuspend = a),
              function () {
                ((e.unsuspend = null), clearTimeout(n), clearTimeout(s));
              }
            );
          }
        : null
    );
  }
  function Tc() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Ec(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var wc = null;
  function Ec(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (wc = new Map()),
        t.forEach(rb, e),
        (wc = null),
        Tc.call(e)));
  }
  function rb(e, t) {
    if (!(t.state.loading & 4)) {
      var a = wc.get(e);
      if (a) var n = a.get(null);
      else {
        ((a = new Map()), wc.set(e, a));
        for (
          var s = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            c = 0;
          c < s.length;
          c++
        ) {
          var m = s[c];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") &&
            (a.set(m.dataset.precedence, m), (n = m));
        }
        n && a.set(null, n);
      }
      ((s = t.instance),
        (m = s.getAttribute("data-precedence")),
        (c = a.get(m) || n),
        c === n && a.set(null, s),
        a.set(m, s),
        this.count++,
        (n = Tc.bind(this)),
        s.addEventListener("load", n),
        s.addEventListener("error", n),
        c
          ? c.parentNode.insertBefore(s, c.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(s, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Uu = {
    $$typeof: Z,
    Provider: null,
    Consumer: null,
    _currentValue: ae,
    _currentValue2: ae,
    _threadCount: 0,
  };
  function ub(e, t, a, n, s, c, m, v, w) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = ve(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ve(0)),
      (this.hiddenUpdates = ve(null)),
      (this.identifierPrefix = n),
      (this.onUncaughtError = s),
      (this.onCaughtError = c),
      (this.onRecoverableError = m),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = w),
      (this.incompleteTransitions = new Map()));
  }
  function vg(e, t, a, n, s, c, m, v, w, j, Y, K) {
    return (
      (e = new ub(e, t, a, m, w, j, Y, K, v)),
      (t = 1),
      c === !0 && (t |= 24),
      (c = Ja(3, null, null, t)),
      (e.current = c),
      (c.stateNode = e),
      (t = Po()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (c.memoizedState = { element: n, isDehydrated: a, cache: t }),
      af(c),
      e
    );
  }
  function bg(e) {
    return e ? ((e = ur), e) : ur;
  }
  function xg(e, t, a, n, s, c) {
    ((s = bg(s)),
      n.context === null ? (n.context = s) : (n.pendingContext = s),
      (n = Hn(t)),
      (n.payload = { element: a }),
      (c = c === void 0 ? null : c),
      c !== null && (n.callback = c),
      (a = Yn(e, n, t)),
      a !== null && (Ua(a, e, t), mu(a, e, t)));
  }
  function Sg(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function xd(e, t) {
    (Sg(e, t), (e = e.alternate) && Sg(e, t));
  }
  function Tg(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = xi(e, 67108864);
      (t !== null && Ua(t, e, 67108864), xd(e, 67108864));
    }
  }
  function wg(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ia();
      t = ye(t);
      var a = xi(e, t);
      (a !== null && Ua(a, e, t), xd(e, t));
    }
  }
  var Nc = !0;
  function sb(e, t, a, n) {
    var s = z.T;
    z.T = null;
    var c = V.p;
    try {
      ((V.p = 2), Sd(e, t, a, n));
    } finally {
      ((V.p = c), (z.T = s));
    }
  }
  function cb(e, t, a, n) {
    var s = z.T;
    z.T = null;
    var c = V.p;
    try {
      ((V.p = 8), Sd(e, t, a, n));
    } finally {
      ((V.p = c), (z.T = s));
    }
  }
  function Sd(e, t, a, n) {
    if (Nc) {
      var s = Td(n);
      if (s === null) (sd(e, t, n, Ac, a), Ng(e, n));
      else if (fb(s, e, t, a, n)) n.stopPropagation();
      else if ((Ng(e, n), t & 4 && -1 < ob.indexOf(e))) {
        for (; s !== null;) {
          var c = Oa(s);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (((c = c.stateNode), c.current.memoizedState.isDehydrated)) {
                  var m = Gt(c.pendingLanes);
                  if (m !== 0) {
                    var v = c;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; m;) {
                      var w = 1 << (31 - Rt(m));
                      ((v.entanglements[1] |= w), (m &= ~w));
                    }
                    (Fl(c), (Je & 6) === 0 && ((cc = At() + 500), Ou(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((v = xi(c, 2)), v !== null && Ua(v, c, 2), fc(), xd(c, 2));
            }
          if (((c = Td(n)), c === null && sd(e, t, n, Ac, a), c === s)) break;
          s = c;
        }
        s !== null && n.stopPropagation();
      } else sd(e, t, n, null, a);
    }
  }
  function Td(e) {
    return ((e = wo(e)), wd(e));
  }
  var Ac = null;
  function wd(e) {
    if (((Ac = null), (e = yt(e)), e !== null)) {
      var t = o(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((e = d(t)), e !== null)) return e;
          e = null;
        } else if (a === 31) {
          if (((e = h(t)), e !== null)) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((Ac = e), null);
  }
  function Eg(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Dt()) {
          case Rl:
            return 2;
          case ft:
            return 8;
          case ua:
          case Ma:
            return 32;
          case dl:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ed = !1,
    $n = null,
    Pn = null,
    In = null,
    qu = new Map(),
    Bu = new Map(),
    ei = [],
    ob =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Ng(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        $n = null;
        break;
      case "dragenter":
      case "dragleave":
        Pn = null;
        break;
      case "mouseover":
      case "mouseout":
        In = null;
        break;
      case "pointerover":
      case "pointerout":
        qu.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Bu.delete(t.pointerId);
    }
  }
  function Hu(e, t, a, n, s, c) {
    return e === null || e.nativeEvent !== c
      ? ((e = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: n,
          nativeEvent: c,
          targetContainers: [s],
        }),
        t !== null && ((t = Oa(t)), t !== null && Tg(t)),
        e)
      : ((e.eventSystemFlags |= n),
        (t = e.targetContainers),
        s !== null && t.indexOf(s) === -1 && t.push(s),
        e);
  }
  function fb(e, t, a, n, s) {
    switch (t) {
      case "focusin":
        return (($n = Hu($n, e, t, a, n, s)), !0);
      case "dragenter":
        return ((Pn = Hu(Pn, e, t, a, n, s)), !0);
      case "mouseover":
        return ((In = Hu(In, e, t, a, n, s)), !0);
      case "pointerover":
        var c = s.pointerId;
        return (qu.set(c, Hu(qu.get(c) || null, e, t, a, n, s)), !0);
      case "gotpointercapture":
        return (
          (c = s.pointerId),
          Bu.set(c, Hu(Bu.get(c) || null, e, t, a, n, s)),
          !0
        );
    }
    return !1;
  }
  function Ag(e) {
    var t = yt(e.target);
    if (t !== null) {
      var a = o(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = d(a)), t !== null)) {
            ((e.blockedOn = t),
              dt(e.priority, function () {
                wg(a);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = h(a)), t !== null)) {
            ((e.blockedOn = t),
              dt(e.priority, function () {
                wg(a);
              }));
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function kc(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var a = Td(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var n = new a.constructor(a.type, a);
        ((To = n), a.target.dispatchEvent(n), (To = null));
      } else return ((t = Oa(a)), t !== null && Tg(t), (e.blockedOn = a), !1);
      t.shift();
    }
    return !0;
  }
  function kg(e, t, a) {
    kc(e) && a.delete(t);
  }
  function db() {
    ((Ed = !1),
      $n !== null && kc($n) && ($n = null),
      Pn !== null && kc(Pn) && (Pn = null),
      In !== null && kc(In) && (In = null),
      qu.forEach(kg),
      Bu.forEach(kg));
  }
  function Mc(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Ed ||
        ((Ed = !0),
        f.unstable_scheduleCallback(f.unstable_NormalPriority, db)));
  }
  var Oc = null;
  function Mg(e) {
    Oc !== e &&
      ((Oc = e),
      f.unstable_scheduleCallback(f.unstable_NormalPriority, function () {
        Oc === e && (Oc = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t],
            n = e[t + 1],
            s = e[t + 2];
          if (typeof n != "function") {
            if (wd(n || a) === null) continue;
            break;
          }
          var c = Oa(a);
          c !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Tf(c, { pending: !0, data: s, method: a.method, action: n }, n, s));
        }
      }));
  }
  function zr(e) {
    function t(w) {
      return Mc(w, e);
    }
    ($n !== null && Mc($n, e),
      Pn !== null && Mc(Pn, e),
      In !== null && Mc(In, e),
      qu.forEach(t),
      Bu.forEach(t));
    for (var a = 0; a < ei.length; a++) {
      var n = ei[a];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < ei.length && ((a = ei[0]), a.blockedOn === null);)
      (Ag(a), a.blockedOn === null && ei.shift());
    if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
      for (n = 0; n < a.length; n += 3) {
        var s = a[n],
          c = a[n + 1],
          m = s[ke] || null;
        if (typeof c == "function") m || Mg(a);
        else if (m) {
          var v = null;
          if (c && c.hasAttribute("formAction")) {
            if (((s = c), (m = c[ke] || null))) v = m.formAction;
            else if (wd(s) !== null) continue;
          } else v = m.action;
          (typeof v == "function" ? (a[n + 1] = v) : (a.splice(n, 3), (n -= 3)),
            Mg(a));
        }
      }
  }
  function Og() {
    function e(c) {
      c.canIntercept &&
        c.info === "react-transition" &&
        c.intercept({
          handler: function () {
            return new Promise(function (m) {
              return (s = m);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (s !== null && (s(), (s = null)), n || setTimeout(a, 20));
    }
    function a() {
      if (!n && !navigation.transition) {
        var c = navigation.currentEntry;
        c &&
          c.url != null &&
          navigation.navigate(c.url, {
            state: c.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var n = !1,
        s = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(a, 100),
        function () {
          ((n = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            s !== null && (s(), (s = null)));
        }
      );
    }
  }
  function Nd(e) {
    this._internalRoot = e;
  }
  ((zc.prototype.render = Nd.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(i(409));
      var a = t.current,
        n = Ia();
      xg(a, n, e, t, null, null);
    }),
    (zc.prototype.unmount = Nd.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (xg(e.current, 2, null, e, null, null), fc(), (t[Ge] = null));
        }
      }));
  function zc(e) {
    this._internalRoot = e;
  }
  zc.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ze();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < ei.length && t !== 0 && t < ei[a].priority; a++);
      (ei.splice(a, 0, e), a === 0 && Ag(e));
    }
  };
  var zg = l.version;
  if (zg !== "19.2.3") throw Error(i(527, zg, "19.2.3"));
  V.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(i(188))
        : ((e = Object.keys(e).join(",")), Error(i(268, e)));
    return (
      (e = p(t)),
      (e = e !== null ? _(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var hb = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.2.3",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Cc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Cc.isDisabled && Cc.supportsFiber)
      try {
        ((Xl = Cc.inject(hb)), (pt = Cc));
      } catch {}
  }
  return (
    (Lu.createRoot = function (e, t) {
      if (!u(e)) throw Error(i(299));
      var a = !1,
        n = "",
        s = Bm,
        c = Hm,
        m = Ym;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (s = t.onUncaughtError),
          t.onCaughtError !== void 0 && (c = t.onCaughtError),
          t.onRecoverableError !== void 0 && (m = t.onRecoverableError)),
        (t = vg(e, 1, !1, null, null, a, n, null, s, c, m, Og)),
        (e[Ge] = t.current),
        ud(e),
        new Nd(t)
      );
    }),
    (Lu.hydrateRoot = function (e, t, a) {
      if (!u(e)) throw Error(i(299));
      var n = !1,
        s = "",
        c = Bm,
        m = Hm,
        v = Ym,
        w = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (n = !0),
          a.identifierPrefix !== void 0 && (s = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (c = a.onUncaughtError),
          a.onCaughtError !== void 0 && (m = a.onCaughtError),
          a.onRecoverableError !== void 0 && (v = a.onRecoverableError),
          a.formState !== void 0 && (w = a.formState)),
        (t = vg(e, 1, !0, t, a ?? null, n, s, w, c, m, v, Og)),
        (t.context = bg(null)),
        (a = t.current),
        (n = Ia()),
        (n = ye(n)),
        (s = Hn(n)),
        (s.callback = null),
        Yn(a, s, n),
        (a = n),
        (t.current.lanes = a),
        se(t, a),
        Fl(t),
        (e[Ge] = t.current),
        ud(e),
        new zc(t)
      );
    }),
    (Lu.version = "19.2.3"),
    Lu
  );
}
var Lg;
function Tb() {
  if (Lg) return kd.exports;
  Lg = 1;
  function f() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (l) {
        console.error(l);
      }
  }
  return (f(), (kd.exports = Sb()), kd.exports);
}
var wb = Tb();
function wn(f) {
  if (f === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return f;
}
function z1(f, l) {
  ((f.prototype = Object.create(l.prototype)),
    (f.prototype.constructor = f),
    (f.__proto__ = l));
}
var sl = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  Zr = { duration: 0.5, overwrite: !1, delay: 0 },
  xh,
  ia,
  mt,
  zl = 1e8,
  nt = 1 / zl,
  Fd = Math.PI * 2,
  Eb = Fd / 4,
  Nb = 0,
  C1 = Math.sqrt,
  Ab = Math.cos,
  kb = Math.sin,
  Pt = function (l) {
    return typeof l == "string";
  },
  Nt = function (l) {
    return typeof l == "function";
  },
  Mn = function (l) {
    return typeof l == "number";
  },
  Sh = function (l) {
    return typeof l > "u";
  },
  ln = function (l) {
    return typeof l == "object";
  },
  Ba = function (l) {
    return l !== !1;
  },
  Th = function () {
    return typeof window < "u";
  },
  jc = function (l) {
    return Nt(l) || Pt(l);
  },
  j1 =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  pa = Array.isArray,
  Mb = /random\([^)]+\)/g,
  Ob = /,\s*/g,
  Xg = /(?:-?\.?\d|\.)+/gi,
  D1 = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  qr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  jd = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  R1 = /[+-]=-?[.\d]+/,
  zb = /[^,'"\[\]\s]+/gi,
  Cb = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  bt,
  $l,
  $d,
  wh,
  cl = {},
  ao = {},
  U1,
  q1 = function (l) {
    return (ao = Kr(l, cl)) && Ga;
  },
  Eh = function (l, r) {
    return console.warn(
      "Invalid property",
      l,
      "set to",
      r,
      "Missing plugin? gsap.registerPlugin()",
    );
  },
  fs = function (l, r) {
    return !r && console.warn(l);
  },
  B1 = function (l, r) {
    return (l && (cl[l] = r) && ao && (ao[l] = r)) || cl;
  },
  ds = function () {
    return 0;
  },
  jb = { suppressEvents: !0, isStart: !0, kill: !1 },
  Kc = { suppressEvents: !0, kill: !1 },
  Db = { suppressEvents: !0 },
  Nh = {},
  si = [],
  Pd = {},
  H1,
  al = {},
  Dd = {},
  Gg = 30,
  Jc = [],
  Ah = "",
  kh = function (l) {
    var r = l[0],
      i,
      u;
    if ((ln(r) || Nt(r) || (l = [l]), !(i = (r._gsap || {}).harness))) {
      for (u = Jc.length; u-- && !Jc[u].targetTest(r););
      i = Jc[u];
    }
    for (u = l.length; u--;)
      (l[u] && (l[u]._gsap || (l[u]._gsap = new cy(l[u], i)))) ||
        l.splice(u, 1);
    return l;
  },
  Li = function (l) {
    return l._gsap || kh(Cl(l))[0]._gsap;
  },
  Y1 = function (l, r, i) {
    return (i = l[r]) && Nt(i)
      ? l[r]()
      : (Sh(i) && l.getAttribute && l.getAttribute(r)) || i;
  },
  Ha = function (l, r) {
    return (l = l.split(",")).forEach(r) || l;
  },
  zt = function (l) {
    return Math.round(l * 1e5) / 1e5 || 0;
  },
  vt = function (l) {
    return Math.round(l * 1e7) / 1e7 || 0;
  },
  Yr = function (l, r) {
    var i = r.charAt(0),
      u = parseFloat(r.substr(2));
    return (
      (l = parseFloat(l)),
      i === "+" ? l + u : i === "-" ? l - u : i === "*" ? l * u : l / u
    );
  },
  Rb = function (l, r) {
    for (var i = r.length, u = 0; l.indexOf(r[u]) < 0 && ++u < i;);
    return u < i;
  },
  lo = function () {
    var l = si.length,
      r = si.slice(0),
      i,
      u;
    for (Pd = {}, si.length = 0, i = 0; i < l; i++)
      ((u = r[i]),
        u && u._lazy && (u.render(u._lazy[0], u._lazy[1], !0)._lazy = 0));
  },
  Mh = function (l) {
    return !!(l._initted || l._startAt || l.add);
  },
  L1 = function (l, r, i, u) {
    (si.length && !ia && lo(),
      l.render(r, i, !!(ia && r < 0 && Mh(l))),
      si.length && !ia && lo());
  },
  X1 = function (l) {
    var r = parseFloat(l);
    return (r || r === 0) && (l + "").match(zb).length < 2
      ? r
      : Pt(l)
        ? l.trim()
        : l;
  },
  G1 = function (l) {
    return l;
  },
  ol = function (l, r) {
    for (var i in r) i in l || (l[i] = r[i]);
    return l;
  },
  Ub = function (l) {
    return function (r, i) {
      for (var u in i)
        u in r || (u === "duration" && l) || u === "ease" || (r[u] = i[u]);
    };
  },
  Kr = function (l, r) {
    for (var i in r) l[i] = r[i];
    return l;
  },
  Vg = function f(l, r) {
    for (var i in r)
      i !== "__proto__" &&
        i !== "constructor" &&
        i !== "prototype" &&
        (l[i] = ln(r[i]) ? f(l[i] || (l[i] = {}), r[i]) : r[i]);
    return l;
  },
  no = function (l, r) {
    var i = {},
      u;
    for (u in l) u in r || (i[u] = l[u]);
    return i;
  },
  Pu = function (l) {
    var r = l.parent || bt,
      i = l.keyframes ? Ub(pa(l.keyframes)) : ol;
    if (Ba(l.inherit))
      for (; r;) (i(l, r.vars.defaults), (r = r.parent || r._dp));
    return l;
  },
  qb = function (l, r) {
    for (var i = l.length, u = i === r.length; u && i-- && l[i] === r[i];);
    return i < 0;
  },
  V1 = function (l, r, i, u, o) {
    var d = l[u],
      h;
    if (o) for (h = r[o]; d && d[o] > h;) d = d._prev;
    return (
      d ? ((r._next = d._next), (d._next = r)) : ((r._next = l[i]), (l[i] = r)),
      r._next ? (r._next._prev = r) : (l[u] = r),
      (r._prev = d),
      (r.parent = r._dp = l),
      r
    );
  },
  mo = function (l, r, i, u) {
    (i === void 0 && (i = "_first"), u === void 0 && (u = "_last"));
    var o = r._prev,
      d = r._next;
    (o ? (o._next = d) : l[i] === r && (l[i] = d),
      d ? (d._prev = o) : l[u] === r && (l[u] = o),
      (r._next = r._prev = r.parent = null));
  },
  fi = function (l, r) {
    (l.parent &&
      (!r || l.parent.autoRemoveChildren) &&
      l.parent.remove &&
      l.parent.remove(l),
      (l._act = 0));
  },
  Xi = function (l, r) {
    if (l && (!r || r._end > l._dur || r._start < 0))
      for (var i = l; i;) ((i._dirty = 1), (i = i.parent));
    return l;
  },
  Bb = function (l) {
    for (var r = l.parent; r && r.parent;)
      ((r._dirty = 1), r.totalDuration(), (r = r.parent));
    return l;
  },
  Id = function (l, r, i, u) {
    return (
      l._startAt &&
      (ia
        ? l._startAt.revert(Kc)
        : (l.vars.immediateRender && !l.vars.autoRevert) ||
          l._startAt.render(r, !0, u))
    );
  },
  Hb = function f(l) {
    return !l || (l._ts && f(l.parent));
  },
  Qg = function (l) {
    return l._repeat ? Jr(l._tTime, (l = l.duration() + l._rDelay)) * l : 0;
  },
  Jr = function (l, r) {
    var i = Math.floor((l = vt(l / r)));
    return l && i === l ? i - 1 : i;
  },
  io = function (l, r) {
    return (
      (l - r._start) * r._ts +
      (r._ts >= 0 ? 0 : r._dirty ? r.totalDuration() : r._tDur)
    );
  },
  po = function (l) {
    return (l._end = vt(
      l._start + (l._tDur / Math.abs(l._ts || l._rts || nt) || 0),
    ));
  },
  go = function (l, r) {
    var i = l._dp;
    return (
      i &&
        i.smoothChildTiming &&
        l._ts &&
        ((l._start = vt(
          i._time -
            (l._ts > 0
              ? r / l._ts
              : ((l._dirty ? l.totalDuration() : l._tDur) - r) / -l._ts),
        )),
        po(l),
        i._dirty || Xi(i, l)),
      l
    );
  },
  Q1 = function (l, r) {
    var i;
    if (
      ((r._time ||
        (!r._dur && r._initted) ||
        (r._start < l._time && (r._dur || !r.add))) &&
        ((i = io(l.rawTime(), r)),
        (!r._dur || bs(0, r.totalDuration(), i) - r._tTime > nt) &&
          r.render(i, !0)),
      Xi(l, r)._dp && l._initted && l._time >= l._dur && l._ts)
    ) {
      if (l._dur < l.duration())
        for (i = l; i._dp;)
          (i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp));
      l._zTime = -nt;
    }
  },
  Il = function (l, r, i, u) {
    return (
      r.parent && fi(r),
      (r._start = vt(
        (Mn(i) ? i : i || l !== bt ? kl(l, i, r) : l._time) + r._delay,
      )),
      (r._end = vt(
        r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0),
      )),
      V1(l, r, "_first", "_last", l._sort ? "_start" : 0),
      eh(r) || (l._recent = r),
      u || Q1(l, r),
      l._ts < 0 && go(l, l._tTime),
      l
    );
  },
  Z1 = function (l, r) {
    return (
      (cl.ScrollTrigger || Eh("scrollTrigger", r)) &&
      cl.ScrollTrigger.create(r, l)
    );
  },
  K1 = function (l, r, i, u, o) {
    if ((zh(l, r, o), !l._initted)) return 1;
    if (
      !i &&
      l._pt &&
      !ia &&
      ((l._dur && l.vars.lazy !== !1) || (!l._dur && l.vars.lazy)) &&
      H1 !== nl.frame
    )
      return (si.push(l), (l._lazy = [o, u]), 1);
  },
  Yb = function f(l) {
    var r = l.parent;
    return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || f(r));
  },
  eh = function (l) {
    var r = l.data;
    return r === "isFromStart" || r === "isStart";
  },
  Lb = function (l, r, i, u) {
    var o = l.ratio,
      d =
        r < 0 ||
        (!r &&
          ((!l._start && Yb(l) && !(!l._initted && eh(l))) ||
            ((l._ts < 0 || l._dp._ts < 0) && !eh(l))))
          ? 0
          : 1,
      h = l._rDelay,
      g = 0,
      p,
      _,
      b;
    if (
      (h &&
        l._repeat &&
        ((g = bs(0, l._tDur, r)),
        (_ = Jr(g, h)),
        l._yoyo && _ & 1 && (d = 1 - d),
        _ !== Jr(l._tTime, h) &&
          ((o = 1 - d), l.vars.repeatRefresh && l._initted && l.invalidate())),
      d !== o || ia || u || l._zTime === nt || (!r && l._zTime))
    ) {
      if (!l._initted && K1(l, r, u, i, g)) return;
      for (
        b = l._zTime,
          l._zTime = r || (i ? nt : 0),
          i || (i = r && !b),
          l.ratio = d,
          l._from && (d = 1 - d),
          l._time = 0,
          l._tTime = g,
          p = l._pt;
        p;
      )
        (p.r(d, p.d), (p = p._next));
      (r < 0 && Id(l, r, i, !0),
        l._onUpdate && !i && rl(l, "onUpdate"),
        g && l._repeat && !i && l.parent && rl(l, "onRepeat"),
        (r >= l._tDur || r < 0) &&
          l.ratio === d &&
          (d && fi(l, 1),
          !i &&
            !ia &&
            (rl(l, d ? "onComplete" : "onReverseComplete", !0),
            l._prom && l._prom())));
    } else l._zTime || (l._zTime = r);
  },
  Xb = function (l, r, i) {
    var u;
    if (i > r)
      for (u = l._first; u && u._start <= i;) {
        if (u.data === "isPause" && u._start > r) return u;
        u = u._next;
      }
    else
      for (u = l._last; u && u._start >= i;) {
        if (u.data === "isPause" && u._start < r) return u;
        u = u._prev;
      }
  },
  Wr = function (l, r, i, u) {
    var o = l._repeat,
      d = vt(r) || 0,
      h = l._tTime / l._tDur;
    return (
      h && !u && (l._time *= d / l._dur),
      (l._dur = d),
      (l._tDur = o ? (o < 0 ? 1e10 : vt(d * (o + 1) + l._rDelay * o)) : d),
      h > 0 && !u && go(l, (l._tTime = l._tDur * h)),
      l.parent && po(l),
      i || Xi(l.parent, l),
      l
    );
  },
  Zg = function (l) {
    return l instanceof Ea ? Xi(l) : Wr(l, l._dur);
  },
  Gb = { _start: 0, endTime: ds, totalDuration: ds },
  kl = function f(l, r, i) {
    var u = l.labels,
      o = l._recent || Gb,
      d = l.duration() >= zl ? o.endTime(!1) : l._dur,
      h,
      g,
      p;
    return Pt(r) && (isNaN(r) || r in u)
      ? ((g = r.charAt(0)),
        (p = r.substr(-1) === "%"),
        (h = r.indexOf("=")),
        g === "<" || g === ">"
          ? (h >= 0 && (r = r.replace(/=/, "")),
            (g === "<" ? o._start : o.endTime(o._repeat >= 0)) +
              (parseFloat(r.substr(1)) || 0) *
                (p ? (h < 0 ? o : i).totalDuration() / 100 : 1))
          : h < 0
            ? (r in u || (u[r] = d), u[r])
            : ((g = parseFloat(r.charAt(h - 1) + r.substr(h + 1))),
              p && i && (g = (g / 100) * (pa(i) ? i[0] : i).totalDuration()),
              h > 1 ? f(l, r.substr(0, h - 1), i) + g : d + g))
      : r == null
        ? d
        : +r;
  },
  Iu = function (l, r, i) {
    var u = Mn(r[1]),
      o = (u ? 2 : 1) + (l < 2 ? 0 : 1),
      d = r[o],
      h,
      g;
    if ((u && (d.duration = r[1]), (d.parent = i), l)) {
      for (h = d, g = i; g && !("immediateRender" in h);)
        ((h = g.vars.defaults || {}), (g = Ba(g.vars.inherit) && g.parent));
      ((d.immediateRender = Ba(h.immediateRender)),
        l < 2 ? (d.runBackwards = 1) : (d.startAt = r[o - 1]));
    }
    return new Lt(r[0], d, r[o + 1]);
  },
  pi = function (l, r) {
    return l || l === 0 ? r(l) : r;
  },
  bs = function (l, r, i) {
    return i < l ? l : i > r ? r : i;
  },
  ha = function (l, r) {
    return !Pt(l) || !(r = Cb.exec(l)) ? "" : r[1];
  },
  Vb = function (l, r, i) {
    return pi(i, function (u) {
      return bs(l, r, u);
    });
  },
  th = [].slice,
  J1 = function (l, r) {
    return (
      l &&
      ln(l) &&
      "length" in l &&
      ((!r && !l.length) || (l.length - 1 in l && ln(l[0]))) &&
      !l.nodeType &&
      l !== $l
    );
  },
  Qb = function (l, r, i) {
    return (
      i === void 0 && (i = []),
      l.forEach(function (u) {
        var o;
        return (Pt(u) && !r) || J1(u, 1)
          ? (o = i).push.apply(o, Cl(u))
          : i.push(u);
      }) || i
    );
  },
  Cl = function (l, r, i) {
    return mt && !r && mt.selector
      ? mt.selector(l)
      : Pt(l) && !i && ($d || !Fr())
        ? th.call((r || wh).querySelectorAll(l), 0)
        : pa(l)
          ? Qb(l, i)
          : J1(l)
            ? th.call(l, 0)
            : l
              ? [l]
              : [];
  },
  ah = function (l) {
    return (
      (l = Cl(l)[0] || fs("Invalid scope") || {}),
      function (r) {
        var i = l.current || l.nativeElement || l;
        return Cl(
          r,
          i.querySelectorAll
            ? i
            : i === l
              ? fs("Invalid scope") || wh.createElement("div")
              : l,
        );
      }
    );
  },
  W1 = function (l) {
    return l.sort(function () {
      return 0.5 - Math.random();
    });
  },
  F1 = function (l) {
    if (Nt(l)) return l;
    var r = ln(l) ? l : { each: l },
      i = Gi(r.ease),
      u = r.from || 0,
      o = parseFloat(r.base) || 0,
      d = {},
      h = u > 0 && u < 1,
      g = isNaN(u) || h,
      p = r.axis,
      _ = u,
      b = u;
    return (
      Pt(u)
        ? (_ = b = { center: 0.5, edges: 0.5, end: 1 }[u] || 0)
        : !h && g && ((_ = u[0]), (b = u[1])),
      function (S, x, A) {
        var T = (A || r).length,
          O = d[T],
          L,
          X,
          Z,
          q,
          G,
          W,
          D,
          F,
          J;
        if (!O) {
          if (((J = r.grid === "auto" ? 0 : (r.grid || [1, zl])[1]), !J)) {
            for (
              D = -zl;
              D < (D = A[J++].getBoundingClientRect().left) && J < T;
            );
            J < T && J--;
          }
          for (
            O = d[T] = [],
              L = g ? Math.min(J, T) * _ - 0.5 : u % J,
              X = J === zl ? 0 : g ? (T * b) / J - 0.5 : (u / J) | 0,
              D = 0,
              F = zl,
              W = 0;
            W < T;
            W++
          )
            ((Z = (W % J) - L),
              (q = X - ((W / J) | 0)),
              (O[W] = G = p ? Math.abs(p === "y" ? q : Z) : C1(Z * Z + q * q)),
              G > D && (D = G),
              G < F && (F = G));
          (u === "random" && W1(O),
            (O.max = D - F),
            (O.min = F),
            (O.v = T =
              (parseFloat(r.amount) ||
                parseFloat(r.each) *
                  (J > T
                    ? T - 1
                    : p
                      ? p === "y"
                        ? T / J
                        : J
                      : Math.max(J, T / J)) ||
                0) * (u === "edges" ? -1 : 1)),
            (O.b = T < 0 ? o - T : o),
            (O.u = ha(r.amount || r.each) || 0),
            (i = i && T < 0 ? ry(i) : i));
        }
        return (
          (T = (O[S] - O.min) / O.max || 0),
          vt(O.b + (i ? i(T) : T) * O.v) + O.u
        );
      }
    );
  },
  lh = function (l) {
    var r = Math.pow(10, ((l + "").split(".")[1] || "").length);
    return function (i) {
      var u = vt(Math.round(parseFloat(i) / l) * l * r);
      return (u - (u % 1)) / r + (Mn(i) ? 0 : ha(i));
    };
  },
  $1 = function (l, r) {
    var i = pa(l),
      u,
      o;
    return (
      !i &&
        ln(l) &&
        ((u = i = l.radius || zl),
        l.values
          ? ((l = Cl(l.values)), (o = !Mn(l[0])) && (u *= u))
          : (l = lh(l.increment))),
      pi(
        r,
        i
          ? Nt(l)
            ? function (d) {
                return ((o = l(d)), Math.abs(o - d) <= u ? o : d);
              }
            : function (d) {
                for (
                  var h = parseFloat(o ? d.x : d),
                    g = parseFloat(o ? d.y : 0),
                    p = zl,
                    _ = 0,
                    b = l.length,
                    S,
                    x;
                  b--;
                )
                  (o
                    ? ((S = l[b].x - h), (x = l[b].y - g), (S = S * S + x * x))
                    : (S = Math.abs(l[b] - h)),
                    S < p && ((p = S), (_ = b)));
                return (
                  (_ = !u || p <= u ? l[_] : d),
                  o || _ === d || Mn(d) ? _ : _ + ha(d)
                );
              }
          : lh(l),
      )
    );
  },
  P1 = function (l, r, i, u) {
    return pi(pa(l) ? !r : i === !0 ? !!(i = 0) : !u, function () {
      return pa(l)
        ? l[~~(Math.random() * l.length)]
        : (i = i || 1e-5) &&
            (u = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
            Math.floor(
              Math.round((l - i / 2 + Math.random() * (r - l + i * 0.99)) / i) *
                i *
                u,
            ) / u;
    });
  },
  Zb = function () {
    for (var l = arguments.length, r = new Array(l), i = 0; i < l; i++)
      r[i] = arguments[i];
    return function (u) {
      return r.reduce(function (o, d) {
        return d(o);
      }, u);
    };
  },
  Kb = function (l, r) {
    return function (i) {
      return l(parseFloat(i)) + (r || ha(i));
    };
  },
  Jb = function (l, r, i) {
    return ey(l, r, 0, 1, i);
  },
  I1 = function (l, r, i) {
    return pi(i, function (u) {
      return l[~~r(u)];
    });
  },
  Wb = function f(l, r, i) {
    var u = r - l;
    return pa(l)
      ? I1(l, f(0, l.length), r)
      : pi(i, function (o) {
          return ((u + ((o - l) % u)) % u) + l;
        });
  },
  Fb = function f(l, r, i) {
    var u = r - l,
      o = u * 2;
    return pa(l)
      ? I1(l, f(0, l.length - 1), r)
      : pi(i, function (d) {
          return ((d = (o + ((d - l) % o)) % o || 0), l + (d > u ? o - d : d));
        });
  },
  hs = function (l) {
    return l.replace(Mb, function (r) {
      var i = r.indexOf("[") + 1,
        u = r.substring(i || 7, i ? r.indexOf("]") : r.length - 1).split(Ob);
      return P1(i ? u : +u[0], i ? 0 : +u[1], +u[2] || 1e-5);
    });
  },
  ey = function (l, r, i, u, o) {
    var d = r - l,
      h = u - i;
    return pi(o, function (g) {
      return i + (((g - l) / d) * h || 0);
    });
  },
  $b = function f(l, r, i, u) {
    var o = isNaN(l + r)
      ? 0
      : function (x) {
          return (1 - x) * l + x * r;
        };
    if (!o) {
      var d = Pt(l),
        h = {},
        g,
        p,
        _,
        b,
        S;
      if ((i === !0 && (u = 1) && (i = null), d))
        ((l = { p: l }), (r = { p: r }));
      else if (pa(l) && !pa(r)) {
        for (_ = [], b = l.length, S = b - 2, p = 1; p < b; p++)
          _.push(f(l[p - 1], l[p]));
        (b--,
          (o = function (A) {
            A *= b;
            var T = Math.min(S, ~~A);
            return _[T](A - T);
          }),
          (i = r));
      } else u || (l = Kr(pa(l) ? [] : {}, l));
      if (!_) {
        for (g in r) Oh.call(h, l, g, "get", r[g]);
        o = function (A) {
          return Dh(A, h) || (d ? l.p : l);
        };
      }
    }
    return pi(i, o);
  },
  Kg = function (l, r, i) {
    var u = l.labels,
      o = zl,
      d,
      h,
      g;
    for (d in u)
      ((h = u[d] - r),
        h < 0 == !!i && h && o > (h = Math.abs(h)) && ((g = d), (o = h)));
    return g;
  },
  rl = function (l, r, i) {
    var u = l.vars,
      o = u[r],
      d = mt,
      h = l._ctx,
      g,
      p,
      _;
    if (o)
      return (
        (g = u[r + "Params"]),
        (p = u.callbackScope || l),
        i && si.length && lo(),
        h && (mt = h),
        (_ = g ? o.apply(p, g) : o.call(p)),
        (mt = d),
        _
      );
  },
  Qu = function (l) {
    return (
      fi(l),
      l.scrollTrigger && l.scrollTrigger.kill(!!ia),
      l.progress() < 1 && rl(l, "onInterrupt"),
      l
    );
  },
  Br,
  ty = [],
  ay = function (l) {
    if (l)
      if (((l = (!l.name && l.default) || l), Th() || l.headless)) {
        var r = l.name,
          i = Nt(l),
          u =
            r && !i && l.init
              ? function () {
                  this._props = [];
                }
              : l,
          o = {
            init: ds,
            render: Dh,
            add: Oh,
            kill: hx,
            modifier: dx,
            rawVars: 0,
          },
          d = {
            targetTest: 0,
            get: 0,
            getSetter: jh,
            aliases: {},
            register: 0,
          };
        if ((Fr(), l !== u)) {
          if (al[r]) return;
          (ol(u, ol(no(l, o), d)),
            Kr(u.prototype, Kr(o, no(l, d))),
            (al[(u.prop = r)] = u),
            l.targetTest && (Jc.push(u), (Nh[r] = 1)),
            (r =
              (r === "css" ? "CSS" : r.charAt(0).toUpperCase() + r.substr(1)) +
              "Plugin"));
        }
        (B1(r, u), l.register && l.register(Ga, u, Ya));
      } else ty.push(l);
  },
  lt = 255,
  Zu = {
    aqua: [0, lt, lt],
    lime: [0, lt, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, lt],
    navy: [0, 0, 128],
    white: [lt, lt, lt],
    olive: [128, 128, 0],
    yellow: [lt, lt, 0],
    orange: [lt, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [lt, 0, 0],
    pink: [lt, 192, 203],
    cyan: [0, lt, lt],
    transparent: [lt, lt, lt, 0],
  },
  Rd = function (l, r, i) {
    return (
      (l += l < 0 ? 1 : l > 1 ? -1 : 0),
      ((l * 6 < 1
        ? r + (i - r) * l * 6
        : l < 0.5
          ? i
          : l * 3 < 2
            ? r + (i - r) * (2 / 3 - l) * 6
            : r) *
        lt +
        0.5) |
        0
    );
  },
  ly = function (l, r, i) {
    var u = l ? (Mn(l) ? [l >> 16, (l >> 8) & lt, l & lt] : 0) : Zu.black,
      o,
      d,
      h,
      g,
      p,
      _,
      b,
      S,
      x,
      A;
    if (!u) {
      if ((l.substr(-1) === "," && (l = l.substr(0, l.length - 1)), Zu[l]))
        u = Zu[l];
      else if (l.charAt(0) === "#") {
        if (
          (l.length < 6 &&
            ((o = l.charAt(1)),
            (d = l.charAt(2)),
            (h = l.charAt(3)),
            (l =
              "#" +
              o +
              o +
              d +
              d +
              h +
              h +
              (l.length === 5 ? l.charAt(4) + l.charAt(4) : ""))),
          l.length === 9)
        )
          return (
            (u = parseInt(l.substr(1, 6), 16)),
            [u >> 16, (u >> 8) & lt, u & lt, parseInt(l.substr(7), 16) / 255]
          );
        ((l = parseInt(l.substr(1), 16)),
          (u = [l >> 16, (l >> 8) & lt, l & lt]));
      } else if (l.substr(0, 3) === "hsl") {
        if (((u = A = l.match(Xg)), !r))
          ((g = (+u[0] % 360) / 360),
            (p = +u[1] / 100),
            (_ = +u[2] / 100),
            (d = _ <= 0.5 ? _ * (p + 1) : _ + p - _ * p),
            (o = _ * 2 - d),
            u.length > 3 && (u[3] *= 1),
            (u[0] = Rd(g + 1 / 3, o, d)),
            (u[1] = Rd(g, o, d)),
            (u[2] = Rd(g - 1 / 3, o, d)));
        else if (~l.indexOf("="))
          return ((u = l.match(D1)), i && u.length < 4 && (u[3] = 1), u);
      } else u = l.match(Xg) || Zu.transparent;
      u = u.map(Number);
    }
    return (
      r &&
        !A &&
        ((o = u[0] / lt),
        (d = u[1] / lt),
        (h = u[2] / lt),
        (b = Math.max(o, d, h)),
        (S = Math.min(o, d, h)),
        (_ = (b + S) / 2),
        b === S
          ? (g = p = 0)
          : ((x = b - S),
            (p = _ > 0.5 ? x / (2 - b - S) : x / (b + S)),
            (g =
              b === o
                ? (d - h) / x + (d < h ? 6 : 0)
                : b === d
                  ? (h - o) / x + 2
                  : (o - d) / x + 4),
            (g *= 60)),
        (u[0] = ~~(g + 0.5)),
        (u[1] = ~~(p * 100 + 0.5)),
        (u[2] = ~~(_ * 100 + 0.5))),
      i && u.length < 4 && (u[3] = 1),
      u
    );
  },
  ny = function (l) {
    var r = [],
      i = [],
      u = -1;
    return (
      l.split(ci).forEach(function (o) {
        var d = o.match(qr) || [];
        (r.push.apply(r, d), i.push((u += d.length + 1)));
      }),
      (r.c = i),
      r
    );
  },
  Jg = function (l, r, i) {
    var u = "",
      o = (l + u).match(ci),
      d = r ? "hsla(" : "rgba(",
      h = 0,
      g,
      p,
      _,
      b;
    if (!o) return l;
    if (
      ((o = o.map(function (S) {
        return (
          (S = ly(S, r, 1)) &&
          d +
            (r ? S[0] + "," + S[1] + "%," + S[2] + "%," + S[3] : S.join(",")) +
            ")"
        );
      })),
      i && ((_ = ny(l)), (g = i.c), g.join(u) !== _.c.join(u)))
    )
      for (p = l.replace(ci, "1").split(qr), b = p.length - 1; h < b; h++)
        u +=
          p[h] +
          (~g.indexOf(h)
            ? o.shift() || d + "0,0,0,0)"
            : (_.length ? _ : o.length ? o : i).shift());
    if (!p)
      for (p = l.split(ci), b = p.length - 1; h < b; h++) u += p[h] + o[h];
    return u + p[b];
  },
  ci = (function () {
    var f =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      l;
    for (l in Zu) f += "|" + l + "\\b";
    return new RegExp(f + ")", "gi");
  })(),
  Pb = /hsl[a]?\(/,
  iy = function (l) {
    var r = l.join(" "),
      i;
    if (((ci.lastIndex = 0), ci.test(r)))
      return (
        (i = Pb.test(r)),
        (l[1] = Jg(l[1], i)),
        (l[0] = Jg(l[0], i, ny(l[1]))),
        !0
      );
  },
  ms,
  nl = (function () {
    var f = Date.now,
      l = 500,
      r = 33,
      i = f(),
      u = i,
      o = 1e3 / 240,
      d = o,
      h = [],
      g,
      p,
      _,
      b,
      S,
      x,
      A = function T(O) {
        var L = f() - u,
          X = O === !0,
          Z,
          q,
          G,
          W;
        if (
          ((L > l || L < 0) && (i += L - r),
          (u += L),
          (G = u - i),
          (Z = G - d),
          (Z > 0 || X) &&
            ((W = ++b.frame),
            (S = G - b.time * 1e3),
            (b.time = G = G / 1e3),
            (d += Z + (Z >= o ? 4 : o - Z)),
            (q = 1)),
          X || (g = p(T)),
          q)
        )
          for (x = 0; x < h.length; x++) h[x](G, S, W, O);
      };
    return (
      (b = {
        time: 0,
        frame: 0,
        tick: function () {
          A(!0);
        },
        deltaRatio: function (O) {
          return S / (1e3 / (O || 60));
        },
        wake: function () {
          U1 &&
            (!$d &&
              Th() &&
              (($l = $d = window),
              (wh = $l.document || {}),
              (cl.gsap = Ga),
              ($l.gsapVersions || ($l.gsapVersions = [])).push(Ga.version),
              q1(ao || $l.GreenSockGlobals || (!$l.gsap && $l) || {}),
              ty.forEach(ay)),
            (_ = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            g && b.sleep(),
            (p =
              _ ||
              function (O) {
                return setTimeout(O, (d - b.time * 1e3 + 1) | 0);
              }),
            (ms = 1),
            A(2));
        },
        sleep: function () {
          ((_ ? cancelAnimationFrame : clearTimeout)(g), (ms = 0), (p = ds));
        },
        lagSmoothing: function (O, L) {
          ((l = O || 1 / 0), (r = Math.min(L || 33, l)));
        },
        fps: function (O) {
          ((o = 1e3 / (O || 240)), (d = b.time * 1e3 + o));
        },
        add: function (O, L, X) {
          var Z = L
            ? function (q, G, W, D) {
                (O(q, G, W, D), b.remove(Z));
              }
            : O;
          return (b.remove(O), h[X ? "unshift" : "push"](Z), Fr(), Z);
        },
        remove: function (O, L) {
          ~(L = h.indexOf(O)) && h.splice(L, 1) && x >= L && x--;
        },
        _listeners: h,
      }),
      b
    );
  })(),
  Fr = function () {
    return !ms && nl.wake();
  },
  Xe = {},
  Ib = /^[\d.\-M][\d.\-,\s]/,
  ex = /["']/g,
  tx = function (l) {
    for (
      var r = {},
        i = l.substr(1, l.length - 3).split(":"),
        u = i[0],
        o = 1,
        d = i.length,
        h,
        g,
        p;
      o < d;
      o++
    )
      ((g = i[o]),
        (h = o !== d - 1 ? g.lastIndexOf(",") : g.length),
        (p = g.substr(0, h)),
        (r[u] = isNaN(p) ? p.replace(ex, "").trim() : +p),
        (u = g.substr(h + 1).trim()));
    return r;
  },
  ax = function (l) {
    var r = l.indexOf("(") + 1,
      i = l.indexOf(")"),
      u = l.indexOf("(", r);
    return l.substring(r, ~u && u < i ? l.indexOf(")", i + 1) : i);
  },
  lx = function (l) {
    var r = (l + "").split("("),
      i = Xe[r[0]];
    return i && r.length > 1 && i.config
      ? i.config.apply(
          null,
          ~l.indexOf("{") ? [tx(r[1])] : ax(l).split(",").map(X1),
        )
      : Xe._CE && Ib.test(l)
        ? Xe._CE("", l)
        : i;
  },
  ry = function (l) {
    return function (r) {
      return 1 - l(1 - r);
    };
  },
  uy = function f(l, r) {
    for (var i = l._first, u; i;)
      (i instanceof Ea
        ? f(i, r)
        : i.vars.yoyoEase &&
          (!i._yoyo || !i._repeat) &&
          i._yoyo !== r &&
          (i.timeline
            ? f(i.timeline, r)
            : ((u = i._ease),
              (i._ease = i._yEase),
              (i._yEase = u),
              (i._yoyo = r))),
        (i = i._next));
  },
  Gi = function (l, r) {
    return (l && (Nt(l) ? l : Xe[l] || lx(l))) || r;
  },
  $i = function (l, r, i, u) {
    (i === void 0 &&
      (i = function (g) {
        return 1 - r(1 - g);
      }),
      u === void 0 &&
        (u = function (g) {
          return g < 0.5 ? r(g * 2) / 2 : 1 - r((1 - g) * 2) / 2;
        }));
    var o = { easeIn: r, easeOut: i, easeInOut: u },
      d;
    return (
      Ha(l, function (h) {
        ((Xe[h] = cl[h] = o), (Xe[(d = h.toLowerCase())] = i));
        for (var g in o)
          Xe[
            d + (g === "easeIn" ? ".in" : g === "easeOut" ? ".out" : ".inOut")
          ] = Xe[h + "." + g] = o[g];
      }),
      o
    );
  },
  sy = function (l) {
    return function (r) {
      return r < 0.5 ? (1 - l(1 - r * 2)) / 2 : 0.5 + l((r - 0.5) * 2) / 2;
    };
  },
  Ud = function f(l, r, i) {
    var u = r >= 1 ? r : 1,
      o = (i || (l ? 0.3 : 0.45)) / (r < 1 ? r : 1),
      d = (o / Fd) * (Math.asin(1 / u) || 0),
      h = function (_) {
        return _ === 1 ? 1 : u * Math.pow(2, -10 * _) * kb((_ - d) * o) + 1;
      },
      g =
        l === "out"
          ? h
          : l === "in"
            ? function (p) {
                return 1 - h(1 - p);
              }
            : sy(h);
    return (
      (o = Fd / o),
      (g.config = function (p, _) {
        return f(l, p, _);
      }),
      g
    );
  },
  qd = function f(l, r) {
    r === void 0 && (r = 1.70158);
    var i = function (d) {
        return d ? --d * d * ((r + 1) * d + r) + 1 : 0;
      },
      u =
        l === "out"
          ? i
          : l === "in"
            ? function (o) {
                return 1 - i(1 - o);
              }
            : sy(i);
    return (
      (u.config = function (o) {
        return f(l, o);
      }),
      u
    );
  };
Ha("Linear,Quad,Cubic,Quart,Quint,Strong", function (f, l) {
  var r = l < 5 ? l + 1 : l;
  $i(
    f + ",Power" + (r - 1),
    l
      ? function (i) {
          return Math.pow(i, r);
        }
      : function (i) {
          return i;
        },
    function (i) {
      return 1 - Math.pow(1 - i, r);
    },
    function (i) {
      return i < 0.5
        ? Math.pow(i * 2, r) / 2
        : 1 - Math.pow((1 - i) * 2, r) / 2;
    },
  );
});
Xe.Linear.easeNone = Xe.none = Xe.Linear.easeIn;
$i("Elastic", Ud("in"), Ud("out"), Ud());
(function (f, l) {
  var r = 1 / l,
    i = 2 * r,
    u = 2.5 * r,
    o = function (h) {
      return h < r
        ? f * h * h
        : h < i
          ? f * Math.pow(h - 1.5 / l, 2) + 0.75
          : h < u
            ? f * (h -= 2.25 / l) * h + 0.9375
            : f * Math.pow(h - 2.625 / l, 2) + 0.984375;
    };
  $i(
    "Bounce",
    function (d) {
      return 1 - o(1 - d);
    },
    o,
  );
})(7.5625, 2.75);
$i("Expo", function (f) {
  return Math.pow(2, 10 * (f - 1)) * f + f * f * f * f * f * f * (1 - f);
});
$i("Circ", function (f) {
  return -(C1(1 - f * f) - 1);
});
$i("Sine", function (f) {
  return f === 1 ? 1 : -Ab(f * Eb) + 1;
});
$i("Back", qd("in"), qd("out"), qd());
Xe.SteppedEase =
  Xe.steps =
  cl.SteppedEase =
    {
      config: function (l, r) {
        l === void 0 && (l = 1);
        var i = 1 / l,
          u = l + (r ? 0 : 1),
          o = r ? 1 : 0,
          d = 1 - nt;
        return function (h) {
          return (((u * bs(0, d, h)) | 0) + o) * i;
        };
      },
    };
Zr.ease = Xe["quad.out"];
Ha(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (f) {
    return (Ah += f + "," + f + "Params,");
  },
);
var cy = function (l, r) {
    ((this.id = Nb++),
      (l._gsap = this),
      (this.target = l),
      (this.harness = r),
      (this.get = r ? r.get : Y1),
      (this.set = r ? r.getSetter : jh));
  },
  ps = (function () {
    function f(r) {
      ((this.vars = r),
        (this._delay = +r.delay || 0),
        (this._repeat = r.repeat === 1 / 0 ? -2 : r.repeat || 0) &&
          ((this._rDelay = r.repeatDelay || 0),
          (this._yoyo = !!r.yoyo || !!r.yoyoEase)),
        (this._ts = 1),
        Wr(this, +r.duration, 1, 1),
        (this.data = r.data),
        mt && ((this._ctx = mt), mt.data.push(this)),
        ms || nl.wake());
    }
    var l = f.prototype;
    return (
      (l.delay = function (i) {
        return i || i === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + i - this._delay),
            (this._delay = i),
            this)
          : this._delay;
      }),
      (l.duration = function (i) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i,
            )
          : this.totalDuration() && this._dur;
      }),
      (l.totalDuration = function (i) {
        return arguments.length
          ? ((this._dirty = 0),
            Wr(
              this,
              this._repeat < 0
                ? i
                : (i - this._repeat * this._rDelay) / (this._repeat + 1),
            ))
          : this._tDur;
      }),
      (l.totalTime = function (i, u) {
        if ((Fr(), !arguments.length)) return this._tTime;
        var o = this._dp;
        if (o && o.smoothChildTiming && this._ts) {
          for (go(this, i), !o._dp || o.parent || Q1(o, this); o && o.parent;)
            (o.parent._time !==
              o._start +
                (o._ts >= 0
                  ? o._tTime / o._ts
                  : (o.totalDuration() - o._tTime) / -o._ts) &&
              o.totalTime(o._tTime, !0),
              (o = o.parent));
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && i < this._tDur) ||
              (this._ts < 0 && i > 0) ||
              (!this._tDur && !i)) &&
            Il(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== i ||
            (!this._dur && !u) ||
            (this._initted && Math.abs(this._zTime) === nt) ||
            (!this._initted && this._dur && i) ||
            (!i && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = i), L1(this, i, u)),
          this
        );
      }),
      (l.time = function (i, u) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), i + Qg(this)) %
                (this._dur + this._rDelay) || (i ? this._dur : 0),
              u,
            )
          : this._time;
      }),
      (l.totalProgress = function (i, u) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * i, u)
          : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
              ? 1
              : 0;
      }),
      (l.progress = function (i, u) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                Qg(this),
              u,
            )
          : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
              ? 1
              : 0;
      }),
      (l.iteration = function (i, u) {
        var o = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (i - 1) * o, u)
          : this._repeat
            ? Jr(this._tTime, o) + 1
            : 1;
      }),
      (l.timeScale = function (i, u) {
        if (!arguments.length) return this._rts === -nt ? 0 : this._rts;
        if (this._rts === i) return this;
        var o =
          this.parent && this._ts ? io(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +i || 0),
          (this._ts = this._ps || i === -nt ? 0 : this._rts),
          this.totalTime(
            bs(-Math.abs(this._delay), this.totalDuration(), o),
            u !== !1,
          ),
          po(this),
          Bb(this)
        );
      }),
      (l.paused = function (i) {
        return arguments.length
          ? (this._ps !== i &&
              ((this._ps = i),
              i
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Fr(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== nt &&
                      (this._tTime -= nt),
                  ))),
            this)
          : this._ps;
      }),
      (l.startTime = function (i) {
        if (arguments.length) {
          this._start = vt(i);
          var u = this.parent || this._dp;
          return (
            u &&
              (u._sort || !this.parent) &&
              Il(u, this, this._start - this._delay),
            this
          );
        }
        return this._start;
      }),
      (l.endTime = function (i) {
        return (
          this._start +
          (Ba(i) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (l.rawTime = function (i) {
        var u = this.parent || this._dp;
        return u
          ? i &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
              ? io(u.rawTime(i), this)
              : this._tTime
          : this._tTime;
      }),
      (l.revert = function (i) {
        i === void 0 && (i = Db);
        var u = ia;
        return (
          (ia = i),
          Mh(this) &&
            (this.timeline && this.timeline.revert(i),
            this.totalTime(-0.01, i.suppressEvents)),
          this.data !== "nested" && i.kill !== !1 && this.kill(),
          (ia = u),
          this
        );
      }),
      (l.globalTime = function (i) {
        for (var u = this, o = arguments.length ? i : u.rawTime(); u;)
          ((o = u._start + o / (Math.abs(u._ts) || 1)), (u = u._dp));
        return !this.parent && this._sat ? this._sat.globalTime(i) : o;
      }),
      (l.repeat = function (i) {
        return arguments.length
          ? ((this._repeat = i === 1 / 0 ? -2 : i), Zg(this))
          : this._repeat === -2
            ? 1 / 0
            : this._repeat;
      }),
      (l.repeatDelay = function (i) {
        if (arguments.length) {
          var u = this._time;
          return ((this._rDelay = i), Zg(this), u ? this.time(u) : this);
        }
        return this._rDelay;
      }),
      (l.yoyo = function (i) {
        return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
      }),
      (l.seek = function (i, u) {
        return this.totalTime(kl(this, i), Ba(u));
      }),
      (l.restart = function (i, u) {
        return (
          this.play().totalTime(i ? -this._delay : 0, Ba(u)),
          this._dur || (this._zTime = -nt),
          this
        );
      }),
      (l.play = function (i, u) {
        return (i != null && this.seek(i, u), this.reversed(!1).paused(!1));
      }),
      (l.reverse = function (i, u) {
        return (
          i != null && this.seek(i || this.totalDuration(), u),
          this.reversed(!0).paused(!1)
        );
      }),
      (l.pause = function (i, u) {
        return (i != null && this.seek(i, u), this.paused(!0));
      }),
      (l.resume = function () {
        return this.paused(!1);
      }),
      (l.reversed = function (i) {
        return arguments.length
          ? (!!i !== this.reversed() &&
              this.timeScale(-this._rts || (i ? -nt : 0)),
            this)
          : this._rts < 0;
      }),
      (l.invalidate = function () {
        return ((this._initted = this._act = 0), (this._zTime = -nt), this);
      }),
      (l.isActive = function () {
        var i = this.parent || this._dp,
          u = this._start,
          o;
        return !!(
          !i ||
          (this._ts &&
            this._initted &&
            i.isActive() &&
            (o = i.rawTime(!0)) >= u &&
            o < this.endTime(!0) - nt)
        );
      }),
      (l.eventCallback = function (i, u, o) {
        var d = this.vars;
        return arguments.length > 1
          ? (u
              ? ((d[i] = u),
                o && (d[i + "Params"] = o),
                i === "onUpdate" && (this._onUpdate = u))
              : delete d[i],
            this)
          : d[i];
      }),
      (l.then = function (i) {
        var u = this,
          o = u._prom;
        return new Promise(function (d) {
          var h = Nt(i) ? i : G1,
            g = function () {
              var _ = u.then;
              ((u.then = null),
                o && o(),
                Nt(h) && (h = h(u)) && (h.then || h === u) && (u.then = _),
                d(h),
                (u.then = _));
            };
          (u._initted && u.totalProgress() === 1 && u._ts >= 0) ||
          (!u._tTime && u._ts < 0)
            ? g()
            : (u._prom = g);
        });
      }),
      (l.kill = function () {
        Qu(this);
      }),
      f
    );
  })();
ol(ps.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -nt,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var Ea = (function (f) {
  z1(l, f);
  function l(i, u) {
    var o;
    return (
      i === void 0 && (i = {}),
      (o = f.call(this, i) || this),
      (o.labels = {}),
      (o.smoothChildTiming = !!i.smoothChildTiming),
      (o.autoRemoveChildren = !!i.autoRemoveChildren),
      (o._sort = Ba(i.sortChildren)),
      bt && Il(i.parent || bt, wn(o), u),
      i.reversed && o.reverse(),
      i.paused && o.paused(!0),
      i.scrollTrigger && Z1(wn(o), i.scrollTrigger),
      o
    );
  }
  var r = l.prototype;
  return (
    (r.to = function (u, o, d) {
      return (Iu(0, arguments, this), this);
    }),
    (r.from = function (u, o, d) {
      return (Iu(1, arguments, this), this);
    }),
    (r.fromTo = function (u, o, d, h) {
      return (Iu(2, arguments, this), this);
    }),
    (r.set = function (u, o, d) {
      return (
        (o.duration = 0),
        (o.parent = this),
        Pu(o).repeatDelay || (o.repeat = 0),
        (o.immediateRender = !!o.immediateRender),
        new Lt(u, o, kl(this, d), 1),
        this
      );
    }),
    (r.call = function (u, o, d) {
      return Il(this, Lt.delayedCall(0, u, o), d);
    }),
    (r.staggerTo = function (u, o, d, h, g, p, _) {
      return (
        (d.duration = o),
        (d.stagger = d.stagger || h),
        (d.onComplete = p),
        (d.onCompleteParams = _),
        (d.parent = this),
        new Lt(u, d, kl(this, g)),
        this
      );
    }),
    (r.staggerFrom = function (u, o, d, h, g, p, _) {
      return (
        (d.runBackwards = 1),
        (Pu(d).immediateRender = Ba(d.immediateRender)),
        this.staggerTo(u, o, d, h, g, p, _)
      );
    }),
    (r.staggerFromTo = function (u, o, d, h, g, p, _, b) {
      return (
        (h.startAt = d),
        (Pu(h).immediateRender = Ba(h.immediateRender)),
        this.staggerTo(u, o, h, g, p, _, b)
      );
    }),
    (r.render = function (u, o, d) {
      var h = this._time,
        g = this._dirty ? this.totalDuration() : this._tDur,
        p = this._dur,
        _ = u <= 0 ? 0 : vt(u),
        b = this._zTime < 0 != u < 0 && (this._initted || !p),
        S,
        x,
        A,
        T,
        O,
        L,
        X,
        Z,
        q,
        G,
        W,
        D;
      if (
        (this !== bt && _ > g && u >= 0 && (_ = g), _ !== this._tTime || d || b)
      ) {
        if (
          (h !== this._time &&
            p &&
            ((_ += this._time - h), (u += this._time - h)),
          (S = _),
          (q = this._start),
          (Z = this._ts),
          (L = !Z),
          b && (p || (h = this._zTime), (u || !o) && (this._zTime = u)),
          this._repeat)
        ) {
          if (
            ((W = this._yoyo),
            (O = p + this._rDelay),
            this._repeat < -1 && u < 0)
          )
            return this.totalTime(O * 100 + u, o, d);
          if (
            ((S = vt(_ % O)),
            _ === g
              ? ((T = this._repeat), (S = p))
              : ((G = vt(_ / O)),
                (T = ~~G),
                T && T === G && ((S = p), T--),
                S > p && (S = p)),
            (G = Jr(this._tTime, O)),
            !h &&
              this._tTime &&
              G !== T &&
              this._tTime - G * O - this._dur <= 0 &&
              (G = T),
            W && T & 1 && ((S = p - S), (D = 1)),
            T !== G && !this._lock)
          ) {
            var F = W && G & 1,
              J = F === (W && T & 1);
            if (
              (T < G && (F = !F),
              (h = F ? 0 : _ % p ? p : _),
              (this._lock = 1),
              (this.render(h || (D ? 0 : vt(T * O)), o, !p)._lock = 0),
              (this._tTime = _),
              !o && this.parent && rl(this, "onRepeat"),
              this.vars.repeatRefresh &&
                !D &&
                ((this.invalidate()._lock = 1), (G = T)),
              (h && h !== this._time) ||
                L !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((p = this._dur),
              (g = this._tDur),
              J &&
                ((this._lock = 2),
                (h = F ? p : -1e-4),
                this.render(h, !0),
                this.vars.repeatRefresh && !D && this.invalidate()),
              (this._lock = 0),
              !this._ts && !L)
            )
              return this;
            uy(this, D);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((X = Xb(this, vt(h), vt(S))), X && (_ -= S - (S = X._start))),
          (this._tTime = _),
          (this._time = S),
          (this._act = !Z),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = u),
            (h = 0)),
          !h && _ && p && !o && !G && (rl(this, "onStart"), this._tTime !== _))
        )
          return this;
        if (S >= h && u >= 0)
          for (x = this._first; x;) {
            if (
              ((A = x._next), (x._act || S >= x._start) && x._ts && X !== x)
            ) {
              if (x.parent !== this) return this.render(u, o, d);
              if (
                (x.render(
                  x._ts > 0
                    ? (S - x._start) * x._ts
                    : (x._dirty ? x.totalDuration() : x._tDur) +
                        (S - x._start) * x._ts,
                  o,
                  d,
                ),
                S !== this._time || (!this._ts && !L))
              ) {
                ((X = 0), A && (_ += this._zTime = -nt));
                break;
              }
            }
            x = A;
          }
        else {
          x = this._last;
          for (var $ = u < 0 ? u : S; x;) {
            if (((A = x._prev), (x._act || $ <= x._end) && x._ts && X !== x)) {
              if (x.parent !== this) return this.render(u, o, d);
              if (
                (x.render(
                  x._ts > 0
                    ? ($ - x._start) * x._ts
                    : (x._dirty ? x.totalDuration() : x._tDur) +
                        ($ - x._start) * x._ts,
                  o,
                  d || (ia && Mh(x)),
                ),
                S !== this._time || (!this._ts && !L))
              ) {
                ((X = 0), A && (_ += this._zTime = $ ? -nt : nt));
                break;
              }
            }
            x = A;
          }
        }
        if (
          X &&
          !o &&
          (this.pause(),
          (X.render(S >= h ? 0 : -nt)._zTime = S >= h ? 1 : -1),
          this._ts)
        )
          return ((this._start = q), po(this), this.render(u, o, d));
        (this._onUpdate && !o && rl(this, "onUpdate", !0),
          ((_ === g && this._tTime >= this.totalDuration()) || (!_ && h)) &&
            (q === this._start || Math.abs(Z) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((u || !p) &&
                ((_ === g && this._ts > 0) || (!_ && this._ts < 0)) &&
                fi(this, 1),
              !o &&
                !(u < 0 && !h) &&
                (_ || h || !g) &&
                (rl(
                  this,
                  _ === g && u >= 0 ? "onComplete" : "onReverseComplete",
                  !0,
                ),
                this._prom &&
                  !(_ < g && this.timeScale() > 0) &&
                  this._prom()))));
      }
      return this;
    }),
    (r.add = function (u, o) {
      var d = this;
      if ((Mn(o) || (o = kl(this, o, u)), !(u instanceof ps))) {
        if (pa(u))
          return (
            u.forEach(function (h) {
              return d.add(h, o);
            }),
            this
          );
        if (Pt(u)) return this.addLabel(u, o);
        if (Nt(u)) u = Lt.delayedCall(0, u);
        else return this;
      }
      return this !== u ? Il(this, u, o) : this;
    }),
    (r.getChildren = function (u, o, d, h) {
      (u === void 0 && (u = !0),
        o === void 0 && (o = !0),
        d === void 0 && (d = !0),
        h === void 0 && (h = -zl));
      for (var g = [], p = this._first; p;)
        (p._start >= h &&
          (p instanceof Lt
            ? o && g.push(p)
            : (d && g.push(p), u && g.push.apply(g, p.getChildren(!0, o, d)))),
          (p = p._next));
      return g;
    }),
    (r.getById = function (u) {
      for (var o = this.getChildren(1, 1, 1), d = o.length; d--;)
        if (o[d].vars.id === u) return o[d];
    }),
    (r.remove = function (u) {
      return Pt(u)
        ? this.removeLabel(u)
        : Nt(u)
          ? this.killTweensOf(u)
          : (u.parent === this && mo(this, u),
            u === this._recent && (this._recent = this._last),
            Xi(this));
    }),
    (r.totalTime = function (u, o) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = vt(
              nl.time -
                (this._ts > 0
                  ? u / this._ts
                  : (this.totalDuration() - u) / -this._ts),
            )),
          f.prototype.totalTime.call(this, u, o),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (r.addLabel = function (u, o) {
      return ((this.labels[u] = kl(this, o)), this);
    }),
    (r.removeLabel = function (u) {
      return (delete this.labels[u], this);
    }),
    (r.addPause = function (u, o, d) {
      var h = Lt.delayedCall(0, o || ds, d);
      return (
        (h.data = "isPause"),
        (this._hasPause = 1),
        Il(this, h, kl(this, u))
      );
    }),
    (r.removePause = function (u) {
      var o = this._first;
      for (u = kl(this, u); o;)
        (o._start === u && o.data === "isPause" && fi(o), (o = o._next));
    }),
    (r.killTweensOf = function (u, o, d) {
      for (var h = this.getTweensOf(u, d), g = h.length; g--;)
        li !== h[g] && h[g].kill(u, o);
      return this;
    }),
    (r.getTweensOf = function (u, o) {
      for (var d = [], h = Cl(u), g = this._first, p = Mn(o), _; g;)
        (g instanceof Lt
          ? Rb(g._targets, h) &&
            (p
              ? (!li || (g._initted && g._ts)) &&
                g.globalTime(0) <= o &&
                g.globalTime(g.totalDuration()) > o
              : !o || g.isActive()) &&
            d.push(g)
          : (_ = g.getTweensOf(h, o)).length && d.push.apply(d, _),
          (g = g._next));
      return d;
    }),
    (r.tweenTo = function (u, o) {
      o = o || {};
      var d = this,
        h = kl(d, u),
        g = o,
        p = g.startAt,
        _ = g.onStart,
        b = g.onStartParams,
        S = g.immediateRender,
        x,
        A = Lt.to(
          d,
          ol(
            {
              ease: o.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: h,
              overwrite: "auto",
              duration:
                o.duration ||
                Math.abs(
                  (h - (p && "time" in p ? p.time : d._time)) / d.timeScale(),
                ) ||
                nt,
              onStart: function () {
                if ((d.pause(), !x)) {
                  var O =
                    o.duration ||
                    Math.abs(
                      (h - (p && "time" in p ? p.time : d._time)) /
                        d.timeScale(),
                    );
                  (A._dur !== O && Wr(A, O, 0, 1).render(A._time, !0, !0),
                    (x = 1));
                }
                _ && _.apply(A, b || []);
              },
            },
            o,
          ),
        );
      return S ? A.render(0) : A;
    }),
    (r.tweenFromTo = function (u, o, d) {
      return this.tweenTo(o, ol({ startAt: { time: kl(this, u) } }, d));
    }),
    (r.recent = function () {
      return this._recent;
    }),
    (r.nextLabel = function (u) {
      return (u === void 0 && (u = this._time), Kg(this, kl(this, u)));
    }),
    (r.previousLabel = function (u) {
      return (u === void 0 && (u = this._time), Kg(this, kl(this, u), 1));
    }),
    (r.currentLabel = function (u) {
      return arguments.length
        ? this.seek(u, !0)
        : this.previousLabel(this._time + nt);
    }),
    (r.shiftChildren = function (u, o, d) {
      d === void 0 && (d = 0);
      var h = this._first,
        g = this.labels,
        p;
      for (u = vt(u); h;)
        (h._start >= d && ((h._start += u), (h._end += u)), (h = h._next));
      if (o) for (p in g) g[p] >= d && (g[p] += u);
      return Xi(this);
    }),
    (r.invalidate = function (u) {
      var o = this._first;
      for (this._lock = 0; o;) (o.invalidate(u), (o = o._next));
      return f.prototype.invalidate.call(this, u);
    }),
    (r.clear = function (u) {
      u === void 0 && (u = !0);
      for (var o = this._first, d; o;) ((d = o._next), this.remove(o), (o = d));
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        u && (this.labels = {}),
        Xi(this)
      );
    }),
    (r.totalDuration = function (u) {
      var o = 0,
        d = this,
        h = d._last,
        g = zl,
        p,
        _,
        b;
      if (arguments.length)
        return d.timeScale(
          (d._repeat < 0 ? d.duration() : d.totalDuration()) /
            (d.reversed() ? -u : u),
        );
      if (d._dirty) {
        for (b = d.parent; h;)
          ((p = h._prev),
            h._dirty && h.totalDuration(),
            (_ = h._start),
            _ > g && d._sort && h._ts && !d._lock
              ? ((d._lock = 1), (Il(d, h, _ - h._delay, 1)._lock = 0))
              : (g = _),
            _ < 0 &&
              h._ts &&
              ((o -= _),
              ((!b && !d._dp) || (b && b.smoothChildTiming)) &&
                ((d._start += vt(_ / d._ts)), (d._time -= _), (d._tTime -= _)),
              d.shiftChildren(-_, !1, -1 / 0),
              (g = 0)),
            h._end > o && h._ts && (o = h._end),
            (h = p));
        (Wr(d, d === bt && d._time > o ? d._time : o, 1, 1), (d._dirty = 0));
      }
      return d._tDur;
    }),
    (l.updateRoot = function (u) {
      if ((bt._ts && (L1(bt, io(u, bt)), (H1 = nl.frame)), nl.frame >= Gg)) {
        Gg += sl.autoSleep || 120;
        var o = bt._first;
        if ((!o || !o._ts) && sl.autoSleep && nl._listeners.length < 2) {
          for (; o && !o._ts;) o = o._next;
          o || nl.sleep();
        }
      }
    }),
    l
  );
})(ps);
ol(Ea.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var nx = function (l, r, i, u, o, d, h) {
    var g = new Ya(this._pt, l, r, 0, 1, py, null, o),
      p = 0,
      _ = 0,
      b,
      S,
      x,
      A,
      T,
      O,
      L,
      X;
    for (
      g.b = i,
        g.e = u,
        i += "",
        u += "",
        (L = ~u.indexOf("random(")) && (u = hs(u)),
        d && ((X = [i, u]), d(X, l, r), (i = X[0]), (u = X[1])),
        S = i.match(jd) || [];
      (b = jd.exec(u));
    )
      ((A = b[0]),
        (T = u.substring(p, b.index)),
        x ? (x = (x + 1) % 5) : T.substr(-5) === "rgba(" && (x = 1),
        A !== S[_++] &&
          ((O = parseFloat(S[_ - 1]) || 0),
          (g._pt = {
            _next: g._pt,
            p: T || _ === 1 ? T : ",",
            s: O,
            c: A.charAt(1) === "=" ? Yr(O, A) - O : parseFloat(A) - O,
            m: x && x < 4 ? Math.round : 0,
          }),
          (p = jd.lastIndex)));
    return (
      (g.c = p < u.length ? u.substring(p, u.length) : ""),
      (g.fp = h),
      (R1.test(u) || L) && (g.e = 0),
      (this._pt = g),
      g
    );
  },
  Oh = function (l, r, i, u, o, d, h, g, p, _) {
    Nt(u) && (u = u(o || 0, l, d));
    var b = l[r],
      S =
        i !== "get"
          ? i
          : Nt(b)
            ? p
              ? l[
                  r.indexOf("set") || !Nt(l["get" + r.substr(3)])
                    ? r
                    : "get" + r.substr(3)
                ](p)
              : l[r]()
            : b,
      x = Nt(b) ? (p ? cx : hy) : Ch,
      A;
    if (
      (Pt(u) &&
        (~u.indexOf("random(") && (u = hs(u)),
        u.charAt(1) === "=" &&
          ((A = Yr(S, u) + (ha(S) || 0)), (A || A === 0) && (u = A))),
      !_ || S !== u || nh)
    )
      return !isNaN(S * u) && u !== ""
        ? ((A = new Ya(
            this._pt,
            l,
            r,
            +S || 0,
            u - (S || 0),
            typeof b == "boolean" ? fx : my,
            0,
            x,
          )),
          p && (A.fp = p),
          h && A.modifier(h, this, l),
          (this._pt = A))
        : (!b && !(r in l) && Eh(r, u),
          nx.call(this, l, r, S, u, x, g || sl.stringFilter, p));
  },
  ix = function (l, r, i, u, o) {
    if (
      (Nt(l) && (l = es(l, o, r, i, u)),
      !ln(l) || (l.style && l.nodeType) || pa(l) || j1(l))
    )
      return Pt(l) ? es(l, o, r, i, u) : l;
    var d = {},
      h;
    for (h in l) d[h] = es(l[h], o, r, i, u);
    return d;
  },
  oy = function (l, r, i, u, o, d) {
    var h, g, p, _;
    if (
      al[l] &&
      (h = new al[l]()).init(
        o,
        h.rawVars ? r[l] : ix(r[l], u, o, d, i),
        i,
        u,
        d,
      ) !== !1 &&
      ((i._pt = g = new Ya(i._pt, o, l, 0, 1, h.render, h, 0, h.priority)),
      i !== Br)
    )
      for (p = i._ptLookup[i._targets.indexOf(o)], _ = h._props.length; _--;)
        p[h._props[_]] = g;
    return h;
  },
  li,
  nh,
  zh = function f(l, r, i) {
    var u = l.vars,
      o = u.ease,
      d = u.startAt,
      h = u.immediateRender,
      g = u.lazy,
      p = u.onUpdate,
      _ = u.runBackwards,
      b = u.yoyoEase,
      S = u.keyframes,
      x = u.autoRevert,
      A = l._dur,
      T = l._startAt,
      O = l._targets,
      L = l.parent,
      X = L && L.data === "nested" ? L.vars.targets : O,
      Z = l._overwrite === "auto" && !xh,
      q = l.timeline,
      G,
      W,
      D,
      F,
      J,
      $,
      fe,
      P,
      xe,
      ge,
      _e,
      z,
      V;
    if (
      (q && (!S || !o) && (o = "none"),
      (l._ease = Gi(o, Zr.ease)),
      (l._yEase = b ? ry(Gi(b === !0 ? o : b, Zr.ease)) : 0),
      b &&
        l._yoyo &&
        !l._repeat &&
        ((b = l._yEase), (l._yEase = l._ease), (l._ease = b)),
      (l._from = !q && !!u.runBackwards),
      !q || (S && !u.stagger))
    ) {
      if (
        ((P = O[0] ? Li(O[0]).harness : 0),
        (z = P && u[P.prop]),
        (G = no(u, Nh)),
        T &&
          (T._zTime < 0 && T.progress(1),
          r < 0 && _ && h && !x ? T.render(-1, !0) : T.revert(_ && A ? Kc : jb),
          (T._lazy = 0)),
        d)
      ) {
        if (
          (fi(
            (l._startAt = Lt.set(
              O,
              ol(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: L,
                  immediateRender: !0,
                  lazy: !T && Ba(g),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    p &&
                    function () {
                      return rl(l, "onUpdate");
                    },
                  stagger: 0,
                },
                d,
              ),
            )),
          ),
          (l._startAt._dp = 0),
          (l._startAt._sat = l),
          r < 0 && (ia || (!h && !x)) && l._startAt.revert(Kc),
          h && A && r <= 0 && i <= 0)
        ) {
          r && (l._zTime = r);
          return;
        }
      } else if (_ && A && !T) {
        if (
          (r && (h = !1),
          (D = ol(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: h && !T && Ba(g),
              immediateRender: h,
              stagger: 0,
              parent: L,
            },
            G,
          )),
          z && (D[P.prop] = z),
          fi((l._startAt = Lt.set(O, D))),
          (l._startAt._dp = 0),
          (l._startAt._sat = l),
          r < 0 && (ia ? l._startAt.revert(Kc) : l._startAt.render(-1, !0)),
          (l._zTime = r),
          !h)
        )
          f(l._startAt, nt, nt);
        else if (!r) return;
      }
      for (
        l._pt = l._ptCache = 0, g = (A && Ba(g)) || (g && !A), W = 0;
        W < O.length;
        W++
      ) {
        if (
          ((J = O[W]),
          (fe = J._gsap || kh(O)[W]._gsap),
          (l._ptLookup[W] = ge = {}),
          Pd[fe.id] && si.length && lo(),
          (_e = X === O ? W : X.indexOf(J)),
          P &&
            (xe = new P()).init(J, z || G, l, _e, X) !== !1 &&
            ((l._pt = F =
              new Ya(l._pt, J, xe.name, 0, 1, xe.render, xe, 0, xe.priority)),
            xe._props.forEach(function (ae) {
              ge[ae] = F;
            }),
            xe.priority && ($ = 1)),
          !P || z)
        )
          for (D in G)
            al[D] && (xe = oy(D, G, l, _e, J, X))
              ? xe.priority && ($ = 1)
              : (ge[D] = F =
                  Oh.call(l, J, D, "get", G[D], _e, X, 0, u.stringFilter));
        (l._op && l._op[W] && l.kill(J, l._op[W]),
          Z &&
            l._pt &&
            ((li = l),
            bt.killTweensOf(J, ge, l.globalTime(r)),
            (V = !l.parent),
            (li = 0)),
          l._pt && g && (Pd[fe.id] = 1));
      }
      ($ && gy(l), l._onInit && l._onInit(l));
    }
    ((l._onUpdate = p),
      (l._initted = (!l._op || l._pt) && !V),
      S && r <= 0 && q.render(zl, !0, !0));
  },
  rx = function (l, r, i, u, o, d, h, g) {
    var p = ((l._pt && l._ptCache) || (l._ptCache = {}))[r],
      _,
      b,
      S,
      x;
    if (!p)
      for (
        p = l._ptCache[r] = [], S = l._ptLookup, x = l._targets.length;
        x--;
      ) {
        if (((_ = S[x][r]), _ && _.d && _.d._pt))
          for (_ = _.d._pt; _ && _.p !== r && _.fp !== r;) _ = _._next;
        if (!_)
          return (
            (nh = 1),
            (l.vars[r] = "+=0"),
            zh(l, h),
            (nh = 0),
            g ? fs(r + " not eligible for reset") : 1
          );
        p.push(_);
      }
    for (x = p.length; x--;)
      ((b = p[x]),
        (_ = b._pt || b),
        (_.s = (u || u === 0) && !o ? u : _.s + (u || 0) + d * _.c),
        (_.c = i - _.s),
        b.e && (b.e = zt(i) + ha(b.e)),
        b.b && (b.b = _.s + ha(b.b)));
  },
  ux = function (l, r) {
    var i = l[0] ? Li(l[0]).harness : 0,
      u = i && i.aliases,
      o,
      d,
      h,
      g;
    if (!u) return r;
    o = Kr({}, r);
    for (d in u)
      if (d in o) for (g = u[d].split(","), h = g.length; h--;) o[g[h]] = o[d];
    return o;
  },
  sx = function (l, r, i, u) {
    var o = r.ease || u || "power1.inOut",
      d,
      h;
    if (pa(r))
      ((h = i[l] || (i[l] = [])),
        r.forEach(function (g, p) {
          return h.push({ t: (p / (r.length - 1)) * 100, v: g, e: o });
        }));
    else
      for (d in r)
        ((h = i[d] || (i[d] = [])),
          d === "ease" || h.push({ t: parseFloat(l), v: r[d], e: o }));
  },
  es = function (l, r, i, u, o) {
    return Nt(l)
      ? l.call(r, i, u, o)
      : Pt(l) && ~l.indexOf("random(")
        ? hs(l)
        : l;
  },
  fy = Ah + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  dy = {};
Ha(fy + ",id,stagger,delay,duration,paused,scrollTrigger", function (f) {
  return (dy[f] = 1);
});
var Lt = (function (f) {
  z1(l, f);
  function l(i, u, o, d) {
    var h;
    (typeof u == "number" && ((o.duration = u), (u = o), (o = null)),
      (h = f.call(this, d ? u : Pu(u)) || this));
    var g = h.vars,
      p = g.duration,
      _ = g.delay,
      b = g.immediateRender,
      S = g.stagger,
      x = g.overwrite,
      A = g.keyframes,
      T = g.defaults,
      O = g.scrollTrigger,
      L = g.yoyoEase,
      X = u.parent || bt,
      Z = (pa(i) || j1(i) ? Mn(i[0]) : "length" in u) ? [i] : Cl(i),
      q,
      G,
      W,
      D,
      F,
      J,
      $,
      fe;
    if (
      ((h._targets = Z.length
        ? kh(Z)
        : fs(
            "GSAP target " + i + " not found. https://gsap.com",
            !sl.nullTargetWarn,
          ) || []),
      (h._ptLookup = []),
      (h._overwrite = x),
      A || S || jc(p) || jc(_))
    ) {
      if (
        ((u = h.vars),
        (q = h.timeline =
          new Ea({
            data: "nested",
            defaults: T || {},
            targets: X && X.data === "nested" ? X.vars.targets : Z,
          })),
        q.kill(),
        (q.parent = q._dp = wn(h)),
        (q._start = 0),
        S || jc(p) || jc(_))
      ) {
        if (((D = Z.length), ($ = S && F1(S)), ln(S)))
          for (F in S) ~fy.indexOf(F) && (fe || (fe = {}), (fe[F] = S[F]));
        for (G = 0; G < D; G++)
          ((W = no(u, dy)),
            (W.stagger = 0),
            L && (W.yoyoEase = L),
            fe && Kr(W, fe),
            (J = Z[G]),
            (W.duration = +es(p, wn(h), G, J, Z)),
            (W.delay = (+es(_, wn(h), G, J, Z) || 0) - h._delay),
            !S &&
              D === 1 &&
              W.delay &&
              ((h._delay = _ = W.delay), (h._start += _), (W.delay = 0)),
            q.to(J, W, $ ? $(G, J, Z) : 0),
            (q._ease = Xe.none));
        q.duration() ? (p = _ = 0) : (h.timeline = 0);
      } else if (A) {
        (Pu(ol(q.vars.defaults, { ease: "none" })),
          (q._ease = Gi(A.ease || u.ease || "none")));
        var P = 0,
          xe,
          ge,
          _e;
        if (pa(A))
          (A.forEach(function (z) {
            return q.to(Z, z, ">");
          }),
            q.duration());
        else {
          W = {};
          for (F in A)
            F === "ease" || F === "easeEach" || sx(F, A[F], W, A.easeEach);
          for (F in W)
            for (
              xe = W[F].sort(function (z, V) {
                return z.t - V.t;
              }),
                P = 0,
                G = 0;
              G < xe.length;
              G++
            )
              ((ge = xe[G]),
                (_e = {
                  ease: ge.e,
                  duration: ((ge.t - (G ? xe[G - 1].t : 0)) / 100) * p,
                }),
                (_e[F] = ge.v),
                q.to(Z, _e, P),
                (P += _e.duration));
          q.duration() < p && q.to({}, { duration: p - q.duration() });
        }
      }
      p || h.duration((p = q.duration()));
    } else h.timeline = 0;
    return (
      x === !0 && !xh && ((li = wn(h)), bt.killTweensOf(Z), (li = 0)),
      Il(X, wn(h), o),
      u.reversed && h.reverse(),
      u.paused && h.paused(!0),
      (b ||
        (!p &&
          !A &&
          h._start === vt(X._time) &&
          Ba(b) &&
          Hb(wn(h)) &&
          X.data !== "nested")) &&
        ((h._tTime = -nt), h.render(Math.max(0, -_) || 0)),
      O && Z1(wn(h), O),
      h
    );
  }
  var r = l.prototype;
  return (
    (r.render = function (u, o, d) {
      var h = this._time,
        g = this._tDur,
        p = this._dur,
        _ = u < 0,
        b = u > g - nt && !_ ? g : u < nt ? 0 : u,
        S,
        x,
        A,
        T,
        O,
        L,
        X,
        Z,
        q;
      if (!p) Lb(this, u, o, d);
      else if (
        b !== this._tTime ||
        !u ||
        d ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== _) ||
        this._lazy
      ) {
        if (((S = b), (Z = this.timeline), this._repeat)) {
          if (((T = p + this._rDelay), this._repeat < -1 && _))
            return this.totalTime(T * 100 + u, o, d);
          if (
            ((S = vt(b % T)),
            b === g
              ? ((A = this._repeat), (S = p))
              : ((O = vt(b / T)),
                (A = ~~O),
                A && A === O ? ((S = p), A--) : S > p && (S = p)),
            (L = this._yoyo && A & 1),
            L && ((q = this._yEase), (S = p - S)),
            (O = Jr(this._tTime, T)),
            S === h && !d && this._initted && A === O)
          )
            return ((this._tTime = b), this);
          A !== O &&
            (Z && this._yEase && uy(Z, L),
            this.vars.repeatRefresh &&
              !L &&
              !this._lock &&
              S !== T &&
              this._initted &&
              ((this._lock = d = 1),
              (this.render(vt(T * A), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (K1(this, _ ? u : S, d, o, b)) return ((this._tTime = 0), this);
          if (h !== this._time && !(d && this.vars.repeatRefresh && A !== O))
            return this;
          if (p !== this._dur) return this.render(u, o, d);
        }
        if (
          ((this._tTime = b),
          (this._time = S),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = X = (q || this._ease)(S / p)),
          this._from && (this.ratio = X = 1 - X),
          !h && b && !o && !O && (rl(this, "onStart"), this._tTime !== b))
        )
          return this;
        for (x = this._pt; x;) (x.r(X, x.d), (x = x._next));
        ((Z && Z.render(u < 0 ? u : Z._dur * Z._ease(S / this._dur), o, d)) ||
          (this._startAt && (this._zTime = u)),
          this._onUpdate &&
            !o &&
            (_ && Id(this, u, o, d), rl(this, "onUpdate")),
          this._repeat &&
            A !== O &&
            this.vars.onRepeat &&
            !o &&
            this.parent &&
            rl(this, "onRepeat"),
          (b === this._tDur || !b) &&
            this._tTime === b &&
            (_ && !this._onUpdate && Id(this, u, !0, !0),
            (u || !p) &&
              ((b === this._tDur && this._ts > 0) || (!b && this._ts < 0)) &&
              fi(this, 1),
            !o &&
              !(_ && !h) &&
              (b || h || L) &&
              (rl(this, b === g ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(b < g && this.timeScale() > 0) && this._prom())));
      }
      return this;
    }),
    (r.targets = function () {
      return this._targets;
    }),
    (r.invalidate = function (u) {
      return (
        (!u || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(u),
        f.prototype.invalidate.call(this, u)
      );
    }),
    (r.resetTo = function (u, o, d, h, g) {
      (ms || nl.wake(), this._ts || this.play());
      var p = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        _;
      return (
        this._initted || zh(this, p),
        (_ = this._ease(p / this._dur)),
        rx(this, u, o, d, h, _, p, g)
          ? this.resetTo(u, o, d, h, 1)
          : (go(this, 0),
            this.parent ||
              V1(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0,
              ),
            this.render(0))
      );
    }),
    (r.kill = function (u, o) {
      if ((o === void 0 && (o = "all"), !u && (!o || o === "all")))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? Qu(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!ia),
          this
        );
      if (this.timeline) {
        var d = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(u, o, li && li.vars.overwrite !== !0)
            ._first || Qu(this),
          this.parent &&
            d !== this.timeline.totalDuration() &&
            Wr(this, (this._dur * this.timeline._tDur) / d, 0, 1),
          this
        );
      }
      var h = this._targets,
        g = u ? Cl(u) : h,
        p = this._ptLookup,
        _ = this._pt,
        b,
        S,
        x,
        A,
        T,
        O,
        L;
      if ((!o || o === "all") && qb(h, g))
        return (o === "all" && (this._pt = 0), Qu(this));
      for (
        b = this._op = this._op || [],
          o !== "all" &&
            (Pt(o) &&
              ((T = {}),
              Ha(o, function (X) {
                return (T[X] = 1);
              }),
              (o = T)),
            (o = ux(h, o))),
          L = h.length;
        L--;
      )
        if (~g.indexOf(h[L])) {
          ((S = p[L]),
            o === "all"
              ? ((b[L] = o), (A = S), (x = {}))
              : ((x = b[L] = b[L] || {}), (A = o)));
          for (T in A)
            ((O = S && S[T]),
              O &&
                ((!("kill" in O.d) || O.d.kill(T) === !0) && mo(this, O, "_pt"),
                delete S[T]),
              x !== "all" && (x[T] = 1));
        }
      return (this._initted && !this._pt && _ && Qu(this), this);
    }),
    (l.to = function (u, o) {
      return new l(u, o, arguments[2]);
    }),
    (l.from = function (u, o) {
      return Iu(1, arguments);
    }),
    (l.delayedCall = function (u, o, d, h) {
      return new l(o, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: u,
        onComplete: o,
        onReverseComplete: o,
        onCompleteParams: d,
        onReverseCompleteParams: d,
        callbackScope: h,
      });
    }),
    (l.fromTo = function (u, o, d) {
      return Iu(2, arguments);
    }),
    (l.set = function (u, o) {
      return ((o.duration = 0), o.repeatDelay || (o.repeat = 0), new l(u, o));
    }),
    (l.killTweensOf = function (u, o, d) {
      return bt.killTweensOf(u, o, d);
    }),
    l
  );
})(ps);
ol(Lt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Ha("staggerTo,staggerFrom,staggerFromTo", function (f) {
  Lt[f] = function () {
    var l = new Ea(),
      r = th.call(arguments, 0);
    return (r.splice(f === "staggerFromTo" ? 5 : 4, 0, 0), l[f].apply(l, r));
  };
});
var Ch = function (l, r, i) {
    return (l[r] = i);
  },
  hy = function (l, r, i) {
    return l[r](i);
  },
  cx = function (l, r, i, u) {
    return l[r](u.fp, i);
  },
  ox = function (l, r, i) {
    return l.setAttribute(r, i);
  },
  jh = function (l, r) {
    return Nt(l[r]) ? hy : Sh(l[r]) && l.setAttribute ? ox : Ch;
  },
  my = function (l, r) {
    return r.set(r.t, r.p, Math.round((r.s + r.c * l) * 1e6) / 1e6, r);
  },
  fx = function (l, r) {
    return r.set(r.t, r.p, !!(r.s + r.c * l), r);
  },
  py = function (l, r) {
    var i = r._pt,
      u = "";
    if (!l && r.b) u = r.b;
    else if (l === 1 && r.e) u = r.e;
    else {
      for (; i;)
        ((u =
          i.p +
          (i.m ? i.m(i.s + i.c * l) : Math.round((i.s + i.c * l) * 1e4) / 1e4) +
          u),
          (i = i._next));
      u += r.c;
    }
    r.set(r.t, r.p, u, r);
  },
  Dh = function (l, r) {
    for (var i = r._pt; i;) (i.r(l, i.d), (i = i._next));
  },
  dx = function (l, r, i, u) {
    for (var o = this._pt, d; o;)
      ((d = o._next), o.p === u && o.modifier(l, r, i), (o = d));
  },
  hx = function (l) {
    for (var r = this._pt, i, u; r;)
      ((u = r._next),
        (r.p === l && !r.op) || r.op === l
          ? mo(this, r, "_pt")
          : r.dep || (i = 1),
        (r = u));
    return !i;
  },
  mx = function (l, r, i, u) {
    u.mSet(l, r, u.m.call(u.tween, i, u.mt), u);
  },
  gy = function (l) {
    for (var r = l._pt, i, u, o, d; r;) {
      for (i = r._next, u = o; u && u.pr > r.pr;) u = u._next;
      ((r._prev = u ? u._prev : d) ? (r._prev._next = r) : (o = r),
        (r._next = u) ? (u._prev = r) : (d = r),
        (r = i));
    }
    l._pt = o;
  },
  Ya = (function () {
    function f(r, i, u, o, d, h, g, p, _) {
      ((this.t = i),
        (this.s = o),
        (this.c = d),
        (this.p = u),
        (this.r = h || my),
        (this.d = g || this),
        (this.set = p || Ch),
        (this.pr = _ || 0),
        (this._next = r),
        r && (r._prev = this));
    }
    var l = f.prototype;
    return (
      (l.modifier = function (i, u, o) {
        ((this.mSet = this.mSet || this.set),
          (this.set = mx),
          (this.m = i),
          (this.mt = o),
          (this.tween = u));
      }),
      f
    );
  })();
Ha(
  Ah +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (f) {
    return (Nh[f] = 1);
  },
);
cl.TweenMax = cl.TweenLite = Lt;
cl.TimelineLite = cl.TimelineMax = Ea;
bt = new Ea({
  sortChildren: !1,
  defaults: Zr,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
sl.stringFilter = iy;
var Vi = [],
  Wc = {},
  px = [],
  Wg = 0,
  gx = 0,
  Bd = function (l) {
    return (Wc[l] || px).map(function (r) {
      return r();
    });
  },
  ih = function () {
    var l = Date.now(),
      r = [];
    l - Wg > 2 &&
      (Bd("matchMediaInit"),
      Vi.forEach(function (i) {
        var u = i.queries,
          o = i.conditions,
          d,
          h,
          g,
          p;
        for (h in u)
          ((d = $l.matchMedia(u[h]).matches),
            d && (g = 1),
            d !== o[h] && ((o[h] = d), (p = 1)));
        p && (i.revert(), g && r.push(i));
      }),
      Bd("matchMediaRevert"),
      r.forEach(function (i) {
        return i.onMatch(i, function (u) {
          return i.add(null, u);
        });
      }),
      (Wg = l),
      Bd("matchMedia"));
  },
  yy = (function () {
    function f(r, i) {
      ((this.selector = i && ah(i)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = gx++),
        r && this.add(r));
    }
    var l = f.prototype;
    return (
      (l.add = function (i, u, o) {
        Nt(i) && ((o = u), (u = i), (i = Nt));
        var d = this,
          h = function () {
            var p = mt,
              _ = d.selector,
              b;
            return (
              p && p !== d && p.data.push(d),
              o && (d.selector = ah(o)),
              (mt = d),
              (b = u.apply(d, arguments)),
              Nt(b) && d._r.push(b),
              (mt = p),
              (d.selector = _),
              (d.isReverted = !1),
              b
            );
          };
        return (
          (d.last = h),
          i === Nt
            ? h(d, function (g) {
                return d.add(null, g);
              })
            : i
              ? (d[i] = h)
              : h
        );
      }),
      (l.ignore = function (i) {
        var u = mt;
        ((mt = null), i(this), (mt = u));
      }),
      (l.getTweens = function () {
        var i = [];
        return (
          this.data.forEach(function (u) {
            return u instanceof f
              ? i.push.apply(i, u.getTweens())
              : u instanceof Lt &&
                  !(u.parent && u.parent.data === "nested") &&
                  i.push(u);
          }),
          i
        );
      }),
      (l.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (l.kill = function (i, u) {
        var o = this;
        if (
          (i
            ? (function () {
                for (var h = o.getTweens(), g = o.data.length, p; g--;)
                  ((p = o.data[g]),
                    p.data === "isFlip" &&
                      (p.revert(),
                      p.getChildren(!0, !0, !1).forEach(function (_) {
                        return h.splice(h.indexOf(_), 1);
                      })));
                for (
                  h
                    .map(function (_) {
                      return {
                        g:
                          _._dur ||
                          _._delay ||
                          (_._sat && !_._sat.vars.immediateRender)
                            ? _.globalTime(0)
                            : -1 / 0,
                        t: _,
                      };
                    })
                    .sort(function (_, b) {
                      return b.g - _.g || -1 / 0;
                    })
                    .forEach(function (_) {
                      return _.t.revert(i);
                    }),
                    g = o.data.length;
                  g--;
                )
                  ((p = o.data[g]),
                    p instanceof Ea
                      ? p.data !== "nested" &&
                        (p.scrollTrigger && p.scrollTrigger.revert(), p.kill())
                      : !(p instanceof Lt) && p.revert && p.revert(i));
                (o._r.forEach(function (_) {
                  return _(i, o);
                }),
                  (o.isReverted = !0));
              })()
            : this.data.forEach(function (h) {
                return h.kill && h.kill();
              }),
          this.clear(),
          u)
        )
          for (var d = Vi.length; d--;) Vi[d].id === this.id && Vi.splice(d, 1);
      }),
      (l.revert = function (i) {
        this.kill(i || {});
      }),
      f
    );
  })(),
  yx = (function () {
    function f(r) {
      ((this.contexts = []), (this.scope = r), mt && mt.data.push(this));
    }
    var l = f.prototype;
    return (
      (l.add = function (i, u, o) {
        ln(i) || (i = { matches: i });
        var d = new yy(0, o || this.scope),
          h = (d.conditions = {}),
          g,
          p,
          _;
        (mt && !d.selector && (d.selector = mt.selector),
          this.contexts.push(d),
          (u = d.add("onMatch", u)),
          (d.queries = i));
        for (p in i)
          p === "all"
            ? (_ = 1)
            : ((g = $l.matchMedia(i[p])),
              g &&
                (Vi.indexOf(d) < 0 && Vi.push(d),
                (h[p] = g.matches) && (_ = 1),
                g.addListener
                  ? g.addListener(ih)
                  : g.addEventListener("change", ih)));
        return (
          _ &&
            u(d, function (b) {
              return d.add(null, b);
            }),
          this
        );
      }),
      (l.revert = function (i) {
        this.kill(i || {});
      }),
      (l.kill = function (i) {
        this.contexts.forEach(function (u) {
          return u.kill(i, !0);
        });
      }),
      f
    );
  })(),
  ro = {
    registerPlugin: function () {
      for (var l = arguments.length, r = new Array(l), i = 0; i < l; i++)
        r[i] = arguments[i];
      r.forEach(function (u) {
        return ay(u);
      });
    },
    timeline: function (l) {
      return new Ea(l);
    },
    getTweensOf: function (l, r) {
      return bt.getTweensOf(l, r);
    },
    getProperty: function (l, r, i, u) {
      Pt(l) && (l = Cl(l)[0]);
      var o = Li(l || {}).get,
        d = i ? G1 : X1;
      return (
        i === "native" && (i = ""),
        l &&
          (r
            ? d(((al[r] && al[r].get) || o)(l, r, i, u))
            : function (h, g, p) {
                return d(((al[h] && al[h].get) || o)(l, h, g, p));
              })
      );
    },
    quickSetter: function (l, r, i) {
      if (((l = Cl(l)), l.length > 1)) {
        var u = l.map(function (_) {
            return Ga.quickSetter(_, r, i);
          }),
          o = u.length;
        return function (_) {
          for (var b = o; b--;) u[b](_);
        };
      }
      l = l[0] || {};
      var d = al[r],
        h = Li(l),
        g = (h.harness && (h.harness.aliases || {})[r]) || r,
        p = d
          ? function (_) {
              var b = new d();
              ((Br._pt = 0),
                b.init(l, i ? _ + i : _, Br, 0, [l]),
                b.render(1, b),
                Br._pt && Dh(1, Br));
            }
          : h.set(l, g);
      return d
        ? p
        : function (_) {
            return p(l, g, i ? _ + i : _, h, 1);
          };
    },
    quickTo: function (l, r, i) {
      var u,
        o = Ga.to(
          l,
          ol(
            ((u = {}), (u[r] = "+=0.1"), (u.paused = !0), (u.stagger = 0), u),
            i || {},
          ),
        ),
        d = function (g, p, _) {
          return o.resetTo(r, g, p, _);
        };
      return ((d.tween = o), d);
    },
    isTweening: function (l) {
      return bt.getTweensOf(l, !0).length > 0;
    },
    defaults: function (l) {
      return (l && l.ease && (l.ease = Gi(l.ease, Zr.ease)), Vg(Zr, l || {}));
    },
    config: function (l) {
      return Vg(sl, l || {});
    },
    registerEffect: function (l) {
      var r = l.name,
        i = l.effect,
        u = l.plugins,
        o = l.defaults,
        d = l.extendTimeline;
      ((u || "").split(",").forEach(function (h) {
        return (
          h && !al[h] && !cl[h] && fs(r + " effect requires " + h + " plugin.")
        );
      }),
        (Dd[r] = function (h, g, p) {
          return i(Cl(h), ol(g || {}, o), p);
        }),
        d &&
          (Ea.prototype[r] = function (h, g, p) {
            return this.add(Dd[r](h, ln(g) ? g : (p = g) && {}, this), p);
          }));
    },
    registerEase: function (l, r) {
      Xe[l] = Gi(r);
    },
    parseEase: function (l, r) {
      return arguments.length ? Gi(l, r) : Xe;
    },
    getById: function (l) {
      return bt.getById(l);
    },
    exportRoot: function (l, r) {
      l === void 0 && (l = {});
      var i = new Ea(l),
        u,
        o;
      for (
        i.smoothChildTiming = Ba(l.smoothChildTiming),
          bt.remove(i),
          i._dp = 0,
          i._time = i._tTime = bt._time,
          u = bt._first;
        u;
      )
        ((o = u._next),
          (r ||
            !(
              !u._dur &&
              u instanceof Lt &&
              u.vars.onComplete === u._targets[0]
            )) &&
            Il(i, u, u._start - u._delay),
          (u = o));
      return (Il(bt, i, 0), i);
    },
    context: function (l, r) {
      return l ? new yy(l, r) : mt;
    },
    matchMedia: function (l) {
      return new yx(l);
    },
    matchMediaRefresh: function () {
      return (
        Vi.forEach(function (l) {
          var r = l.conditions,
            i,
            u;
          for (u in r) r[u] && ((r[u] = !1), (i = 1));
          i && l.revert();
        }) || ih()
      );
    },
    addEventListener: function (l, r) {
      var i = Wc[l] || (Wc[l] = []);
      ~i.indexOf(r) || i.push(r);
    },
    removeEventListener: function (l, r) {
      var i = Wc[l],
        u = i && i.indexOf(r);
      u >= 0 && i.splice(u, 1);
    },
    utils: {
      wrap: Wb,
      wrapYoyo: Fb,
      distribute: F1,
      random: P1,
      snap: $1,
      normalize: Jb,
      getUnit: ha,
      clamp: Vb,
      splitColor: ly,
      toArray: Cl,
      selector: ah,
      mapRange: ey,
      pipe: Zb,
      unitize: Kb,
      interpolate: $b,
      shuffle: W1,
    },
    install: q1,
    effects: Dd,
    ticker: nl,
    updateRoot: Ea.updateRoot,
    plugins: al,
    globalTimeline: bt,
    core: {
      PropTween: Ya,
      globals: B1,
      Tween: Lt,
      Timeline: Ea,
      Animation: ps,
      getCache: Li,
      _removeLinkedListItem: mo,
      reverting: function () {
        return ia;
      },
      context: function (l) {
        return (l && mt && (mt.data.push(l), (l._ctx = mt)), mt);
      },
      suppressOverwrites: function (l) {
        return (xh = l);
      },
    },
  };
Ha("to,from,fromTo,delayedCall,set,killTweensOf", function (f) {
  return (ro[f] = Lt[f]);
});
nl.add(Ea.updateRoot);
Br = ro.to({}, { duration: 0 });
var _x = function (l, r) {
    for (var i = l._pt; i && i.p !== r && i.op !== r && i.fp !== r;)
      i = i._next;
    return i;
  },
  vx = function (l, r) {
    var i = l._targets,
      u,
      o,
      d;
    for (u in r)
      for (o = i.length; o--;)
        ((d = l._ptLookup[o][u]),
          d &&
            (d = d.d) &&
            (d._pt && (d = _x(d, u)),
            d && d.modifier && d.modifier(r[u], l, i[o], u)));
  },
  Hd = function (l, r) {
    return {
      name: l,
      headless: 1,
      rawVars: 1,
      init: function (u, o, d) {
        d._onInit = function (h) {
          var g, p;
          if (
            (Pt(o) &&
              ((g = {}),
              Ha(o, function (_) {
                return (g[_] = 1);
              }),
              (o = g)),
            r)
          ) {
            g = {};
            for (p in o) g[p] = r(o[p]);
            o = g;
          }
          vx(h, o);
        };
      },
    };
  },
  Ga =
    ro.registerPlugin(
      {
        name: "attr",
        init: function (l, r, i, u, o) {
          var d, h, g;
          this.tween = i;
          for (d in r)
            ((g = l.getAttribute(d) || ""),
              (h = this.add(
                l,
                "setAttribute",
                (g || 0) + "",
                r[d],
                u,
                o,
                0,
                0,
                d,
              )),
              (h.op = d),
              (h.b = g),
              this._props.push(d));
        },
        render: function (l, r) {
          for (var i = r._pt; i;)
            (ia ? i.set(i.t, i.p, i.b, i) : i.r(l, i.d), (i = i._next));
        },
      },
      {
        name: "endArray",
        headless: 1,
        init: function (l, r) {
          for (var i = r.length; i--;)
            this.add(l, i, l[i] || 0, r[i], 0, 0, 0, 0, 0, 1);
        },
      },
      Hd("roundProps", lh),
      Hd("modifiers"),
      Hd("snap", $1),
    ) || ro;
Lt.version = Ea.version = Ga.version = "3.14.2";
U1 = 1;
Th() && Fr();
Xe.Power0;
Xe.Power1;
Xe.Power2;
Xe.Power3;
Xe.Power4;
Xe.Linear;
Xe.Quad;
Xe.Cubic;
Xe.Quart;
Xe.Quint;
Xe.Strong;
Xe.Elastic;
Xe.Back;
Xe.SteppedEase;
Xe.Bounce;
Xe.Sine;
Xe.Expo;
Xe.Circ;
var Fg,
  ni,
  Lr,
  Rh,
  Hi,
  $g,
  Uh,
  bx = function () {
    return typeof window < "u";
  },
  On = {},
  Ui = 180 / Math.PI,
  Xr = Math.PI / 180,
  Cr = Math.atan2,
  Pg = 1e8,
  qh = /([A-Z])/g,
  xx = /(left|right|width|margin|padding|x)/i,
  Sx = /[\s,\(]\S/,
  en = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  rh = function (l, r) {
    return r.set(r.t, r.p, Math.round((r.s + r.c * l) * 1e4) / 1e4 + r.u, r);
  },
  Tx = function (l, r) {
    return r.set(
      r.t,
      r.p,
      l === 1 ? r.e : Math.round((r.s + r.c * l) * 1e4) / 1e4 + r.u,
      r,
    );
  },
  wx = function (l, r) {
    return r.set(
      r.t,
      r.p,
      l ? Math.round((r.s + r.c * l) * 1e4) / 1e4 + r.u : r.b,
      r,
    );
  },
  Ex = function (l, r) {
    return r.set(
      r.t,
      r.p,
      l === 1 ? r.e : l ? Math.round((r.s + r.c * l) * 1e4) / 1e4 + r.u : r.b,
      r,
    );
  },
  Nx = function (l, r) {
    var i = r.s + r.c * l;
    r.set(r.t, r.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + r.u, r);
  },
  _y = function (l, r) {
    return r.set(r.t, r.p, l ? r.e : r.b, r);
  },
  vy = function (l, r) {
    return r.set(r.t, r.p, l !== 1 ? r.b : r.e, r);
  },
  Ax = function (l, r, i) {
    return (l.style[r] = i);
  },
  kx = function (l, r, i) {
    return l.style.setProperty(r, i);
  },
  Mx = function (l, r, i) {
    return (l._gsap[r] = i);
  },
  Ox = function (l, r, i) {
    return (l._gsap.scaleX = l._gsap.scaleY = i);
  },
  zx = function (l, r, i, u, o) {
    var d = l._gsap;
    ((d.scaleX = d.scaleY = i), d.renderTransform(o, d));
  },
  Cx = function (l, r, i, u, o) {
    var d = l._gsap;
    ((d[r] = i), d.renderTransform(o, d));
  },
  xt = "transform",
  La = xt + "Origin",
  jx = function f(l, r) {
    var i = this,
      u = this.target,
      o = u.style,
      d = u._gsap;
    if (l in On && o) {
      if (((this.tfm = this.tfm || {}), l !== "transform"))
        ((l = en[l] || l),
          ~l.indexOf(",")
            ? l.split(",").forEach(function (h) {
                return (i.tfm[h] = En(u, h));
              })
            : (this.tfm[l] = d.x ? d[l] : En(u, l)),
          l === La && (this.tfm.zOrigin = d.zOrigin));
      else
        return en.transform.split(",").forEach(function (h) {
          return f.call(i, h, r);
        });
      if (this.props.indexOf(xt) >= 0) return;
      (d.svg &&
        ((this.svgo = u.getAttribute("data-svg-origin")),
        this.props.push(La, r, "")),
        (l = xt));
    }
    (o || r) && this.props.push(l, r, o[l]);
  },
  by = function (l) {
    l.translate &&
      (l.removeProperty("translate"),
      l.removeProperty("scale"),
      l.removeProperty("rotate"));
  },
  Dx = function () {
    var l = this.props,
      r = this.target,
      i = r.style,
      u = r._gsap,
      o,
      d;
    for (o = 0; o < l.length; o += 3)
      l[o + 1]
        ? l[o + 1] === 2
          ? r[l[o]](l[o + 2])
          : (r[l[o]] = l[o + 2])
        : l[o + 2]
          ? (i[l[o]] = l[o + 2])
          : i.removeProperty(
              l[o].substr(0, 2) === "--"
                ? l[o]
                : l[o].replace(qh, "-$1").toLowerCase(),
            );
    if (this.tfm) {
      for (d in this.tfm) u[d] = this.tfm[d];
      (u.svg &&
        (u.renderTransform(),
        r.setAttribute("data-svg-origin", this.svgo || "")),
        (o = Uh()),
        (!o || !o.isStart) &&
          !i[xt] &&
          (by(i),
          u.zOrigin &&
            i[La] &&
            ((i[La] += " " + u.zOrigin + "px"),
            (u.zOrigin = 0),
            u.renderTransform()),
          (u.uncache = 1)));
    }
  },
  xy = function (l, r) {
    var i = { target: l, props: [], revert: Dx, save: jx };
    return (
      l._gsap || Ga.core.getCache(l),
      r &&
        l.style &&
        l.nodeType &&
        r.split(",").forEach(function (u) {
          return i.save(u);
        }),
      i
    );
  },
  Sy,
  uh = function (l, r) {
    var i = ni.createElementNS
      ? ni.createElementNS(
          (r || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          l,
        )
      : ni.createElement(l);
    return i && i.style ? i : ni.createElement(l);
  },
  ul = function f(l, r, i) {
    var u = getComputedStyle(l);
    return (
      u[r] ||
      u.getPropertyValue(r.replace(qh, "-$1").toLowerCase()) ||
      u.getPropertyValue(r) ||
      (!i && f(l, $r(r) || r, 1)) ||
      ""
    );
  },
  Ig = "O,Moz,ms,Ms,Webkit".split(","),
  $r = function (l, r, i) {
    var u = r || Hi,
      o = u.style,
      d = 5;
    if (l in o && !i) return l;
    for (
      l = l.charAt(0).toUpperCase() + l.substr(1);
      d-- && !(Ig[d] + l in o);
    );
    return d < 0 ? null : (d === 3 ? "ms" : d >= 0 ? Ig[d] : "") + l;
  },
  sh = function () {
    bx() &&
      window.document &&
      ((Fg = window),
      (ni = Fg.document),
      (Lr = ni.documentElement),
      (Hi = uh("div") || { style: {} }),
      uh("div"),
      (xt = $r(xt)),
      (La = xt + "Origin"),
      (Hi.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Sy = !!$r("perspective")),
      (Uh = Ga.core.reverting),
      (Rh = 1));
  },
  e1 = function (l) {
    var r = l.ownerSVGElement,
      i = uh(
        "svg",
        (r && r.getAttribute("xmlns")) || "http://www.w3.org/2000/svg",
      ),
      u = l.cloneNode(!0),
      o;
    ((u.style.display = "block"), i.appendChild(u), Lr.appendChild(i));
    try {
      o = u.getBBox();
    } catch {}
    return (i.removeChild(u), Lr.removeChild(i), o);
  },
  t1 = function (l, r) {
    for (var i = r.length; i--;)
      if (l.hasAttribute(r[i])) return l.getAttribute(r[i]);
  },
  Ty = function (l) {
    var r, i;
    try {
      r = l.getBBox();
    } catch {
      ((r = e1(l)), (i = 1));
    }
    return (
      (r && (r.width || r.height)) || i || (r = e1(l)),
      r && !r.width && !r.x && !r.y
        ? {
            x: +t1(l, ["x", "cx", "x1"]) || 0,
            y: +t1(l, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : r
    );
  },
  wy = function (l) {
    return !!(l.getCTM && (!l.parentNode || l.ownerSVGElement) && Ty(l));
  },
  di = function (l, r) {
    if (r) {
      var i = l.style,
        u;
      (r in On && r !== La && (r = xt),
        i.removeProperty
          ? ((u = r.substr(0, 2)),
            (u === "ms" || r.substr(0, 6) === "webkit") && (r = "-" + r),
            i.removeProperty(
              u === "--" ? r : r.replace(qh, "-$1").toLowerCase(),
            ))
          : i.removeAttribute(r));
    }
  },
  ii = function (l, r, i, u, o, d) {
    var h = new Ya(l._pt, r, i, 0, 1, d ? vy : _y);
    return ((l._pt = h), (h.b = u), (h.e = o), l._props.push(i), h);
  },
  a1 = { deg: 1, rad: 1, turn: 1 },
  Rx = { grid: 1, flex: 1 },
  hi = function f(l, r, i, u) {
    var o = parseFloat(i) || 0,
      d = (i + "").trim().substr((o + "").length) || "px",
      h = Hi.style,
      g = xx.test(r),
      p = l.tagName.toLowerCase() === "svg",
      _ = (p ? "client" : "offset") + (g ? "Width" : "Height"),
      b = 100,
      S = u === "px",
      x = u === "%",
      A,
      T,
      O,
      L;
    if (u === d || !o || a1[u] || a1[d]) return o;
    if (
      (d !== "px" && !S && (o = f(l, r, i, "px")),
      (L = l.getCTM && wy(l)),
      (x || d === "%") && (On[r] || ~r.indexOf("adius")))
    )
      return (
        (A = L ? l.getBBox()[g ? "width" : "height"] : l[_]),
        zt(x ? (o / A) * b : (o / 100) * A)
      );
    if (
      ((h[g ? "width" : "height"] = b + (S ? d : u)),
      (T =
        (u !== "rem" && ~r.indexOf("adius")) ||
        (u === "em" && l.appendChild && !p)
          ? l
          : l.parentNode),
      L && (T = (l.ownerSVGElement || {}).parentNode),
      (!T || T === ni || !T.appendChild) && (T = ni.body),
      (O = T._gsap),
      O && x && O.width && g && O.time === nl.time && !O.uncache)
    )
      return zt((o / O.width) * b);
    if (x && (r === "height" || r === "width")) {
      var X = l.style[r];
      ((l.style[r] = b + u), (A = l[_]), X ? (l.style[r] = X) : di(l, r));
    } else
      ((x || d === "%") &&
        !Rx[ul(T, "display")] &&
        (h.position = ul(l, "position")),
        T === l && (h.position = "static"),
        T.appendChild(Hi),
        (A = Hi[_]),
        T.removeChild(Hi),
        (h.position = "absolute"));
    return (
      g && x && ((O = Li(T)), (O.time = nl.time), (O.width = T[_])),
      zt(S ? (A * o) / b : A && o ? (b / A) * o : 0)
    );
  },
  En = function (l, r, i, u) {
    var o;
    return (
      Rh || sh(),
      r in en &&
        r !== "transform" &&
        ((r = en[r]), ~r.indexOf(",") && (r = r.split(",")[0])),
      On[r] && r !== "transform"
        ? ((o = ys(l, u)),
          (o =
            r !== "transformOrigin"
              ? o[r]
              : o.svg
                ? o.origin
                : so(ul(l, La)) + " " + o.zOrigin + "px"))
        : ((o = l.style[r]),
          (!o || o === "auto" || u || ~(o + "").indexOf("calc(")) &&
            (o =
              (uo[r] && uo[r](l, r, i)) ||
              ul(l, r) ||
              Y1(l, r) ||
              (r === "opacity" ? 1 : 0))),
      i && !~(o + "").trim().indexOf(" ") ? hi(l, r, o, i) + i : o
    );
  },
  Ux = function (l, r, i, u) {
    if (!i || i === "none") {
      var o = $r(r, l, 1),
        d = o && ul(l, o, 1);
      d && d !== i
        ? ((r = o), (i = d))
        : r === "borderColor" && (i = ul(l, "borderTopColor"));
    }
    var h = new Ya(this._pt, l.style, r, 0, 1, py),
      g = 0,
      p = 0,
      _,
      b,
      S,
      x,
      A,
      T,
      O,
      L,
      X,
      Z,
      q,
      G;
    if (
      ((h.b = i),
      (h.e = u),
      (i += ""),
      (u += ""),
      u.substring(0, 6) === "var(--" &&
        (u = ul(l, u.substring(4, u.indexOf(")")))),
      u === "auto" &&
        ((T = l.style[r]),
        (l.style[r] = u),
        (u = ul(l, r) || u),
        T ? (l.style[r] = T) : di(l, r)),
      (_ = [i, u]),
      iy(_),
      (i = _[0]),
      (u = _[1]),
      (S = i.match(qr) || []),
      (G = u.match(qr) || []),
      G.length)
    ) {
      for (; (b = qr.exec(u));)
        ((O = b[0]),
          (X = u.substring(g, b.index)),
          A
            ? (A = (A + 1) % 5)
            : (X.substr(-5) === "rgba(" || X.substr(-5) === "hsla(") && (A = 1),
          O !== (T = S[p++] || "") &&
            ((x = parseFloat(T) || 0),
            (q = T.substr((x + "").length)),
            O.charAt(1) === "=" && (O = Yr(x, O) + q),
            (L = parseFloat(O)),
            (Z = O.substr((L + "").length)),
            (g = qr.lastIndex - Z.length),
            Z ||
              ((Z = Z || sl.units[r] || q),
              g === u.length && ((u += Z), (h.e += Z))),
            q !== Z && (x = hi(l, r, T, Z) || 0),
            (h._pt = {
              _next: h._pt,
              p: X || p === 1 ? X : ",",
              s: x,
              c: L - x,
              m: (A && A < 4) || r === "zIndex" ? Math.round : 0,
            })));
      h.c = g < u.length ? u.substring(g, u.length) : "";
    } else h.r = r === "display" && u === "none" ? vy : _y;
    return (R1.test(u) && (h.e = 0), (this._pt = h), h);
  },
  l1 = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  qx = function (l) {
    var r = l.split(" "),
      i = r[0],
      u = r[1] || "50%";
    return (
      (i === "top" || i === "bottom" || u === "left" || u === "right") &&
        ((l = i), (i = u), (u = l)),
      (r[0] = l1[i] || i),
      (r[1] = l1[u] || u),
      r.join(" ")
    );
  },
  Bx = function (l, r) {
    if (r.tween && r.tween._time === r.tween._dur) {
      var i = r.t,
        u = i.style,
        o = r.u,
        d = i._gsap,
        h,
        g,
        p;
      if (o === "all" || o === !0) ((u.cssText = ""), (g = 1));
      else
        for (o = o.split(","), p = o.length; --p > -1;)
          ((h = o[p]),
            On[h] && ((g = 1), (h = h === "transformOrigin" ? La : xt)),
            di(i, h));
      g &&
        (di(i, xt),
        d &&
          (d.svg && i.removeAttribute("transform"),
          (u.scale = u.rotate = u.translate = "none"),
          ys(i, 1),
          (d.uncache = 1),
          by(u)));
    }
  },
  uo = {
    clearProps: function (l, r, i, u, o) {
      if (o.data !== "isFromStart") {
        var d = (l._pt = new Ya(l._pt, r, i, 0, 0, Bx));
        return ((d.u = u), (d.pr = -10), (d.tween = o), l._props.push(i), 1);
      }
    },
  },
  gs = [1, 0, 0, 1, 0, 0],
  Ey = {},
  Ny = function (l) {
    return l === "matrix(1, 0, 0, 1, 0, 0)" || l === "none" || !l;
  },
  n1 = function (l) {
    var r = ul(l, xt);
    return Ny(r) ? gs : r.substr(7).match(D1).map(zt);
  },
  Bh = function (l, r) {
    var i = l._gsap || Li(l),
      u = l.style,
      o = n1(l),
      d,
      h,
      g,
      p;
    return i.svg && l.getAttribute("transform")
      ? ((g = l.transform.baseVal.consolidate().matrix),
        (o = [g.a, g.b, g.c, g.d, g.e, g.f]),
        o.join(",") === "1,0,0,1,0,0" ? gs : o)
      : (o === gs &&
          !l.offsetParent &&
          l !== Lr &&
          !i.svg &&
          ((g = u.display),
          (u.display = "block"),
          (d = l.parentNode),
          (!d || (!l.offsetParent && !l.getBoundingClientRect().width)) &&
            ((p = 1), (h = l.nextElementSibling), Lr.appendChild(l)),
          (o = n1(l)),
          g ? (u.display = g) : di(l, "display"),
          p &&
            (h
              ? d.insertBefore(l, h)
              : d
                ? d.appendChild(l)
                : Lr.removeChild(l))),
        r && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o);
  },
  ch = function (l, r, i, u, o, d) {
    var h = l._gsap,
      g = o || Bh(l, !0),
      p = h.xOrigin || 0,
      _ = h.yOrigin || 0,
      b = h.xOffset || 0,
      S = h.yOffset || 0,
      x = g[0],
      A = g[1],
      T = g[2],
      O = g[3],
      L = g[4],
      X = g[5],
      Z = r.split(" "),
      q = parseFloat(Z[0]) || 0,
      G = parseFloat(Z[1]) || 0,
      W,
      D,
      F,
      J;
    (i
      ? g !== gs &&
        (D = x * O - A * T) &&
        ((F = q * (O / D) + G * (-T / D) + (T * X - O * L) / D),
        (J = q * (-A / D) + G * (x / D) - (x * X - A * L) / D),
        (q = F),
        (G = J))
      : ((W = Ty(l)),
        (q = W.x + (~Z[0].indexOf("%") ? (q / 100) * W.width : q)),
        (G = W.y + (~(Z[1] || Z[0]).indexOf("%") ? (G / 100) * W.height : G))),
      u || (u !== !1 && h.smooth)
        ? ((L = q - p),
          (X = G - _),
          (h.xOffset = b + (L * x + X * T) - L),
          (h.yOffset = S + (L * A + X * O) - X))
        : (h.xOffset = h.yOffset = 0),
      (h.xOrigin = q),
      (h.yOrigin = G),
      (h.smooth = !!u),
      (h.origin = r),
      (h.originIsAbsolute = !!i),
      (l.style[La] = "0px 0px"),
      d &&
        (ii(d, h, "xOrigin", p, q),
        ii(d, h, "yOrigin", _, G),
        ii(d, h, "xOffset", b, h.xOffset),
        ii(d, h, "yOffset", S, h.yOffset)),
      l.setAttribute("data-svg-origin", q + " " + G));
  },
  ys = function (l, r) {
    var i = l._gsap || new cy(l);
    if ("x" in i && !r && !i.uncache) return i;
    var u = l.style,
      o = i.scaleX < 0,
      d = "px",
      h = "deg",
      g = getComputedStyle(l),
      p = ul(l, La) || "0",
      _,
      b,
      S,
      x,
      A,
      T,
      O,
      L,
      X,
      Z,
      q,
      G,
      W,
      D,
      F,
      J,
      $,
      fe,
      P,
      xe,
      ge,
      _e,
      z,
      V,
      ae,
      de,
      k,
      E,
      H,
      I,
      ee,
      ue;
    return (
      (_ = b = S = T = O = L = X = Z = q = 0),
      (x = A = 1),
      (i.svg = !!(l.getCTM && wy(l))),
      g.translate &&
        ((g.translate !== "none" ||
          g.scale !== "none" ||
          g.rotate !== "none") &&
          (u[xt] =
            (g.translate !== "none"
              ? "translate3d(" +
                (g.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (g.rotate !== "none" ? "rotate(" + g.rotate + ") " : "") +
            (g.scale !== "none"
              ? "scale(" + g.scale.split(" ").join(",") + ") "
              : "") +
            (g[xt] !== "none" ? g[xt] : "")),
        (u.scale = u.rotate = u.translate = "none")),
      (D = Bh(l, i.svg)),
      i.svg &&
        (i.uncache
          ? ((ae = l.getBBox()),
            (p = i.xOrigin - ae.x + "px " + (i.yOrigin - ae.y) + "px"),
            (V = ""))
          : (V = !r && l.getAttribute("data-svg-origin")),
        ch(l, V || p, !!V || i.originIsAbsolute, i.smooth !== !1, D)),
      (G = i.xOrigin || 0),
      (W = i.yOrigin || 0),
      D !== gs &&
        ((fe = D[0]),
        (P = D[1]),
        (xe = D[2]),
        (ge = D[3]),
        (_ = _e = D[4]),
        (b = z = D[5]),
        D.length === 6
          ? ((x = Math.sqrt(fe * fe + P * P)),
            (A = Math.sqrt(ge * ge + xe * xe)),
            (T = fe || P ? Cr(P, fe) * Ui : 0),
            (X = xe || ge ? Cr(xe, ge) * Ui + T : 0),
            X && (A *= Math.abs(Math.cos(X * Xr))),
            i.svg &&
              ((_ -= G - (G * fe + W * xe)), (b -= W - (G * P + W * ge))))
          : ((ue = D[6]),
            (I = D[7]),
            (k = D[8]),
            (E = D[9]),
            (H = D[10]),
            (ee = D[11]),
            (_ = D[12]),
            (b = D[13]),
            (S = D[14]),
            (F = Cr(ue, H)),
            (O = F * Ui),
            F &&
              ((J = Math.cos(-F)),
              ($ = Math.sin(-F)),
              (V = _e * J + k * $),
              (ae = z * J + E * $),
              (de = ue * J + H * $),
              (k = _e * -$ + k * J),
              (E = z * -$ + E * J),
              (H = ue * -$ + H * J),
              (ee = I * -$ + ee * J),
              (_e = V),
              (z = ae),
              (ue = de)),
            (F = Cr(-xe, H)),
            (L = F * Ui),
            F &&
              ((J = Math.cos(-F)),
              ($ = Math.sin(-F)),
              (V = fe * J - k * $),
              (ae = P * J - E * $),
              (de = xe * J - H * $),
              (ee = ge * $ + ee * J),
              (fe = V),
              (P = ae),
              (xe = de)),
            (F = Cr(P, fe)),
            (T = F * Ui),
            F &&
              ((J = Math.cos(F)),
              ($ = Math.sin(F)),
              (V = fe * J + P * $),
              (ae = _e * J + z * $),
              (P = P * J - fe * $),
              (z = z * J - _e * $),
              (fe = V),
              (_e = ae)),
            O &&
              Math.abs(O) + Math.abs(T) > 359.9 &&
              ((O = T = 0), (L = 180 - L)),
            (x = zt(Math.sqrt(fe * fe + P * P + xe * xe))),
            (A = zt(Math.sqrt(z * z + ue * ue))),
            (F = Cr(_e, z)),
            (X = Math.abs(F) > 2e-4 ? F * Ui : 0),
            (q = ee ? 1 / (ee < 0 ? -ee : ee) : 0)),
        i.svg &&
          ((V = l.getAttribute("transform")),
          (i.forceCSS = l.setAttribute("transform", "") || !Ny(ul(l, xt))),
          V && l.setAttribute("transform", V))),
      Math.abs(X) > 90 &&
        Math.abs(X) < 270 &&
        (o
          ? ((x *= -1), (X += T <= 0 ? 180 : -180), (T += T <= 0 ? 180 : -180))
          : ((A *= -1), (X += X <= 0 ? 180 : -180))),
      (r = r || i.uncache),
      (i.x =
        _ -
        ((i.xPercent =
          _ &&
          ((!r && i.xPercent) ||
            (Math.round(l.offsetWidth / 2) === Math.round(-_) ? -50 : 0)))
          ? (l.offsetWidth * i.xPercent) / 100
          : 0) +
        d),
      (i.y =
        b -
        ((i.yPercent =
          b &&
          ((!r && i.yPercent) ||
            (Math.round(l.offsetHeight / 2) === Math.round(-b) ? -50 : 0)))
          ? (l.offsetHeight * i.yPercent) / 100
          : 0) +
        d),
      (i.z = S + d),
      (i.scaleX = zt(x)),
      (i.scaleY = zt(A)),
      (i.rotation = zt(T) + h),
      (i.rotationX = zt(O) + h),
      (i.rotationY = zt(L) + h),
      (i.skewX = X + h),
      (i.skewY = Z + h),
      (i.transformPerspective = q + d),
      (i.zOrigin = parseFloat(p.split(" ")[2]) || (!r && i.zOrigin) || 0) &&
        (u[La] = so(p)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = sl.force3D),
      (i.renderTransform = i.svg ? Yx : Sy ? Ay : Hx),
      (i.uncache = 0),
      i
    );
  },
  so = function (l) {
    return (l = l.split(" "))[0] + " " + l[1];
  },
  Yd = function (l, r, i) {
    var u = ha(r);
    return zt(parseFloat(r) + parseFloat(hi(l, "x", i + "px", u))) + u;
  },
  Hx = function (l, r) {
    ((r.z = "0px"),
      (r.rotationY = r.rotationX = "0deg"),
      (r.force3D = 0),
      Ay(l, r));
  },
  Di = "0deg",
  Xu = "0px",
  Ri = ") ",
  Ay = function (l, r) {
    var i = r || this,
      u = i.xPercent,
      o = i.yPercent,
      d = i.x,
      h = i.y,
      g = i.z,
      p = i.rotation,
      _ = i.rotationY,
      b = i.rotationX,
      S = i.skewX,
      x = i.skewY,
      A = i.scaleX,
      T = i.scaleY,
      O = i.transformPerspective,
      L = i.force3D,
      X = i.target,
      Z = i.zOrigin,
      q = "",
      G = (L === "auto" && l && l !== 1) || L === !0;
    if (Z && (b !== Di || _ !== Di)) {
      var W = parseFloat(_) * Xr,
        D = Math.sin(W),
        F = Math.cos(W),
        J;
      ((W = parseFloat(b) * Xr),
        (J = Math.cos(W)),
        (d = Yd(X, d, D * J * -Z)),
        (h = Yd(X, h, -Math.sin(W) * -Z)),
        (g = Yd(X, g, F * J * -Z + Z)));
    }
    (O !== Xu && (q += "perspective(" + O + Ri),
      (u || o) && (q += "translate(" + u + "%, " + o + "%) "),
      (G || d !== Xu || h !== Xu || g !== Xu) &&
        (q +=
          g !== Xu || G
            ? "translate3d(" + d + ", " + h + ", " + g + ") "
            : "translate(" + d + ", " + h + Ri),
      p !== Di && (q += "rotate(" + p + Ri),
      _ !== Di && (q += "rotateY(" + _ + Ri),
      b !== Di && (q += "rotateX(" + b + Ri),
      (S !== Di || x !== Di) && (q += "skew(" + S + ", " + x + Ri),
      (A !== 1 || T !== 1) && (q += "scale(" + A + ", " + T + Ri),
      (X.style[xt] = q || "translate(0, 0)"));
  },
  Yx = function (l, r) {
    var i = r || this,
      u = i.xPercent,
      o = i.yPercent,
      d = i.x,
      h = i.y,
      g = i.rotation,
      p = i.skewX,
      _ = i.skewY,
      b = i.scaleX,
      S = i.scaleY,
      x = i.target,
      A = i.xOrigin,
      T = i.yOrigin,
      O = i.xOffset,
      L = i.yOffset,
      X = i.forceCSS,
      Z = parseFloat(d),
      q = parseFloat(h),
      G,
      W,
      D,
      F,
      J;
    ((g = parseFloat(g)),
      (p = parseFloat(p)),
      (_ = parseFloat(_)),
      _ && ((_ = parseFloat(_)), (p += _), (g += _)),
      g || p
        ? ((g *= Xr),
          (p *= Xr),
          (G = Math.cos(g) * b),
          (W = Math.sin(g) * b),
          (D = Math.sin(g - p) * -S),
          (F = Math.cos(g - p) * S),
          p &&
            ((_ *= Xr),
            (J = Math.tan(p - _)),
            (J = Math.sqrt(1 + J * J)),
            (D *= J),
            (F *= J),
            _ &&
              ((J = Math.tan(_)),
              (J = Math.sqrt(1 + J * J)),
              (G *= J),
              (W *= J))),
          (G = zt(G)),
          (W = zt(W)),
          (D = zt(D)),
          (F = zt(F)))
        : ((G = b), (F = S), (W = D = 0)),
      ((Z && !~(d + "").indexOf("px")) || (q && !~(h + "").indexOf("px"))) &&
        ((Z = hi(x, "x", d, "px")), (q = hi(x, "y", h, "px"))),
      (A || T || O || L) &&
        ((Z = zt(Z + A - (A * G + T * D) + O)),
        (q = zt(q + T - (A * W + T * F) + L))),
      (u || o) &&
        ((J = x.getBBox()),
        (Z = zt(Z + (u / 100) * J.width)),
        (q = zt(q + (o / 100) * J.height))),
      (J =
        "matrix(" + G + "," + W + "," + D + "," + F + "," + Z + "," + q + ")"),
      x.setAttribute("transform", J),
      X && (x.style[xt] = J));
  },
  Lx = function (l, r, i, u, o) {
    var d = 360,
      h = Pt(o),
      g = parseFloat(o) * (h && ~o.indexOf("rad") ? Ui : 1),
      p = g - u,
      _ = u + p + "deg",
      b,
      S;
    return (
      h &&
        ((b = o.split("_")[1]),
        b === "short" && ((p %= d), p !== p % (d / 2) && (p += p < 0 ? d : -d)),
        b === "cw" && p < 0
          ? (p = ((p + d * Pg) % d) - ~~(p / d) * d)
          : b === "ccw" && p > 0 && (p = ((p - d * Pg) % d) - ~~(p / d) * d)),
      (l._pt = S = new Ya(l._pt, r, i, u, p, Tx)),
      (S.e = _),
      (S.u = "deg"),
      l._props.push(i),
      S
    );
  },
  i1 = function (l, r) {
    for (var i in r) l[i] = r[i];
    return l;
  },
  Xx = function (l, r, i) {
    var u = i1({}, i._gsap),
      o = "perspective,force3D,transformOrigin,svgOrigin",
      d = i.style,
      h,
      g,
      p,
      _,
      b,
      S,
      x,
      A;
    u.svg
      ? ((p = i.getAttribute("transform")),
        i.setAttribute("transform", ""),
        (d[xt] = r),
        (h = ys(i, 1)),
        di(i, xt),
        i.setAttribute("transform", p))
      : ((p = getComputedStyle(i)[xt]),
        (d[xt] = r),
        (h = ys(i, 1)),
        (d[xt] = p));
    for (g in On)
      ((p = u[g]),
        (_ = h[g]),
        p !== _ &&
          o.indexOf(g) < 0 &&
          ((x = ha(p)),
          (A = ha(_)),
          (b = x !== A ? hi(i, g, p, A) : parseFloat(p)),
          (S = parseFloat(_)),
          (l._pt = new Ya(l._pt, h, g, b, S - b, rh)),
          (l._pt.u = A || 0),
          l._props.push(g)));
    i1(h, u);
  };
Ha("padding,margin,Width,Radius", function (f, l) {
  var r = "Top",
    i = "Right",
    u = "Bottom",
    o = "Left",
    d = (l < 3 ? [r, i, u, o] : [r + o, r + i, u + i, u + o]).map(function (h) {
      return l < 2 ? f + h : "border" + h + f;
    });
  uo[l > 1 ? "border" + f : f] = function (h, g, p, _, b) {
    var S, x;
    if (arguments.length < 4)
      return (
        (S = d.map(function (A) {
          return En(h, A, p);
        })),
        (x = S.join(" ")),
        x.split(S[0]).length === 5 ? S[0] : x
      );
    ((S = (_ + "").split(" ")),
      (x = {}),
      d.forEach(function (A, T) {
        return (x[A] = S[T] = S[T] || S[((T - 1) / 2) | 0]);
      }),
      h.init(g, x, b));
  };
});
var ky = {
  name: "css",
  register: sh,
  targetTest: function (l) {
    return l.style && l.nodeType;
  },
  init: function (l, r, i, u, o) {
    var d = this._props,
      h = l.style,
      g = i.vars.startAt,
      p,
      _,
      b,
      S,
      x,
      A,
      T,
      O,
      L,
      X,
      Z,
      q,
      G,
      W,
      D,
      F,
      J;
    (Rh || sh(),
      (this.styles = this.styles || xy(l)),
      (F = this.styles.props),
      (this.tween = i));
    for (T in r)
      if (T !== "autoRound" && ((_ = r[T]), !(al[T] && oy(T, r, i, u, l, o)))) {
        if (
          ((x = typeof _),
          (A = uo[T]),
          x === "function" && ((_ = _.call(i, u, l, o)), (x = typeof _)),
          x === "string" && ~_.indexOf("random(") && (_ = hs(_)),
          A)
        )
          A(this, l, T, _, i) && (D = 1);
        else if (T.substr(0, 2) === "--")
          ((p = (getComputedStyle(l).getPropertyValue(T) + "").trim()),
            (_ += ""),
            (ci.lastIndex = 0),
            ci.test(p) ||
              ((O = ha(p)),
              (L = ha(_)),
              L ? O !== L && (p = hi(l, T, p, L) + L) : O && (_ += O)),
            this.add(h, "setProperty", p, _, u, o, 0, 0, T),
            d.push(T),
            F.push(T, 0, h[T]));
        else if (x !== "undefined") {
          if (
            (g && T in g
              ? ((p = typeof g[T] == "function" ? g[T].call(i, u, l, o) : g[T]),
                Pt(p) && ~p.indexOf("random(") && (p = hs(p)),
                ha(p + "") ||
                  p === "auto" ||
                  (p += sl.units[T] || ha(En(l, T)) || ""),
                (p + "").charAt(1) === "=" && (p = En(l, T)))
              : (p = En(l, T)),
            (S = parseFloat(p)),
            (X = x === "string" && _.charAt(1) === "=" && _.substr(0, 2)),
            X && (_ = _.substr(2)),
            (b = parseFloat(_)),
            T in en &&
              (T === "autoAlpha" &&
                (S === 1 && En(l, "visibility") === "hidden" && b && (S = 0),
                F.push("visibility", 0, h.visibility),
                ii(
                  this,
                  h,
                  "visibility",
                  S ? "inherit" : "hidden",
                  b ? "inherit" : "hidden",
                  !b,
                )),
              T !== "scale" &&
                T !== "transform" &&
                ((T = en[T]), ~T.indexOf(",") && (T = T.split(",")[0]))),
            (Z = T in On),
            Z)
          ) {
            if (
              (this.styles.save(T),
              (J = _),
              x === "string" && _.substring(0, 6) === "var(--")
            ) {
              if (
                ((_ = ul(l, _.substring(4, _.indexOf(")")))),
                _.substring(0, 5) === "calc(")
              ) {
                var $ = l.style.perspective;
                ((l.style.perspective = _),
                  (_ = ul(l, "perspective")),
                  $ ? (l.style.perspective = $) : di(l, "perspective"));
              }
              b = parseFloat(_);
            }
            if (
              (q ||
                ((G = l._gsap),
                (G.renderTransform && !r.parseTransform) ||
                  ys(l, r.parseTransform),
                (W = r.smoothOrigin !== !1 && G.smooth),
                (q = this._pt =
                  new Ya(this._pt, h, xt, 0, 1, G.renderTransform, G, 0, -1)),
                (q.dep = 1)),
              T === "scale")
            )
              ((this._pt = new Ya(
                this._pt,
                G,
                "scaleY",
                G.scaleY,
                (X ? Yr(G.scaleY, X + b) : b) - G.scaleY || 0,
                rh,
              )),
                (this._pt.u = 0),
                d.push("scaleY", T),
                (T += "X"));
            else if (T === "transformOrigin") {
              (F.push(La, 0, h[La]),
                (_ = qx(_)),
                G.svg
                  ? ch(l, _, 0, W, 0, this)
                  : ((L = parseFloat(_.split(" ")[2]) || 0),
                    L !== G.zOrigin && ii(this, G, "zOrigin", G.zOrigin, L),
                    ii(this, h, T, so(p), so(_))));
              continue;
            } else if (T === "svgOrigin") {
              ch(l, _, 1, W, 0, this);
              continue;
            } else if (T in Ey) {
              Lx(this, G, T, S, X ? Yr(S, X + _) : _);
              continue;
            } else if (T === "smoothOrigin") {
              ii(this, G, "smooth", G.smooth, _);
              continue;
            } else if (T === "force3D") {
              G[T] = _;
              continue;
            } else if (T === "transform") {
              Xx(this, _, l);
              continue;
            }
          } else T in h || (T = $r(T) || T);
          if (Z || ((b || b === 0) && (S || S === 0) && !Sx.test(_) && T in h))
            ((O = (p + "").substr((S + "").length)),
              b || (b = 0),
              (L = ha(_) || (T in sl.units ? sl.units[T] : O)),
              O !== L && (S = hi(l, T, p, L)),
              (this._pt = new Ya(
                this._pt,
                Z ? G : h,
                T,
                S,
                (X ? Yr(S, X + b) : b) - S,
                !Z && (L === "px" || T === "zIndex") && r.autoRound !== !1
                  ? Nx
                  : rh,
              )),
              (this._pt.u = L || 0),
              Z && J !== _
                ? ((this._pt.b = p), (this._pt.e = J), (this._pt.r = Ex))
                : O !== L &&
                  L !== "%" &&
                  ((this._pt.b = p), (this._pt.r = wx)));
          else if (T in h) Ux.call(this, l, T, p, X ? X + _ : _);
          else if (T in l) this.add(l, T, p || l[T], X ? X + _ : _, u, o);
          else if (T !== "parseTransform") {
            Eh(T, _);
            continue;
          }
          (Z ||
            (T in h
              ? F.push(T, 0, h[T])
              : typeof l[T] == "function"
                ? F.push(T, 2, l[T]())
                : F.push(T, 1, p || l[T])),
            d.push(T));
        }
      }
    D && gy(this);
  },
  render: function (l, r) {
    if (r.tween._time || !Uh())
      for (var i = r._pt; i;) (i.r(l, i.d), (i = i._next));
    else r.styles.revert();
  },
  get: En,
  aliases: en,
  getSetter: function (l, r, i) {
    var u = en[r];
    return (
      u && u.indexOf(",") < 0 && (r = u),
      r in On && r !== La && (l._gsap.x || En(l, "x"))
        ? i && $g === i
          ? r === "scale"
            ? Ox
            : Mx
          : ($g = i || {}) && (r === "scale" ? zx : Cx)
        : l.style && !Sh(l.style[r])
          ? Ax
          : ~r.indexOf("-")
            ? kx
            : jh(l, r)
    );
  },
  core: { _removeProperty: di, _getMatrix: Bh },
};
Ga.utils.checkPrefix = $r;
Ga.core.getStyleSaver = xy;
(function (f, l, r, i) {
  var u = Ha(f + "," + l + "," + r, function (o) {
    On[o] = 1;
  });
  (Ha(l, function (o) {
    ((sl.units[o] = "deg"), (Ey[o] = 1));
  }),
    (en[u[13]] = f + "," + l),
    Ha(i, function (o) {
      var d = o.split(":");
      en[d[1]] = u[d[0]];
    }));
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
);
Ha(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (f) {
    sl.units[f] = "px";
  },
);
Ga.registerPlugin(ky);
var te = Ga.registerPlugin(ky) || Ga;
te.core.Tween;
function Gx(f, l) {
  for (var r = 0; r < l.length; r++) {
    var i = l[r];
    ((i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(f, i.key, i));
  }
}
function Vx(f, l, r) {
  return (l && Gx(f.prototype, l), f);
}
var na,
  Fc,
  il,
  ri,
  ui,
  Gr,
  My,
  qi,
  ts,
  Oy,
  An,
  Yl,
  zy,
  Cy = function () {
    return (
      na ||
      (typeof window < "u" && (na = window.gsap) && na.registerPlugin && na)
    );
  },
  jy = 1,
  Hr = [],
  De = [],
  an = [],
  as = Date.now,
  oh = function (l, r) {
    return r;
  },
  Qx = function () {
    var l = ts.core,
      r = l.bridge || {},
      i = l._scrollers,
      u = l._proxies;
    (i.push.apply(i, De),
      u.push.apply(u, an),
      (De = i),
      (an = u),
      (oh = function (d, h) {
        return r[d](h);
      }));
  },
  oi = function (l, r) {
    return ~an.indexOf(l) && an[an.indexOf(l) + 1][r];
  },
  ls = function (l) {
    return !!~Oy.indexOf(l);
  },
  xa = function (l, r, i, u, o) {
    return l.addEventListener(r, i, { passive: u !== !1, capture: !!o });
  },
  ba = function (l, r, i, u) {
    return l.removeEventListener(r, i, !!u);
  },
  Dc = "scrollLeft",
  Rc = "scrollTop",
  fh = function () {
    return (An && An.isPressed) || De.cache++;
  },
  co = function (l, r) {
    var i = function u(o) {
      if (o || o === 0) {
        jy && (il.history.scrollRestoration = "manual");
        var d = An && An.isPressed;
        ((o = u.v = Math.round(o) || (An && An.iOS ? 1 : 0)),
          l(o),
          (u.cacheID = De.cache),
          d && oh("ss", o));
      } else
        (r || De.cache !== u.cacheID || oh("ref")) &&
          ((u.cacheID = De.cache), (u.v = l()));
      return u.v + u.offset;
    };
    return ((i.offset = 0), l && i);
  },
  Na = {
    s: Dc,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: co(function (f) {
      return arguments.length
        ? il.scrollTo(f, Zt.sc())
        : il.pageXOffset || ri[Dc] || ui[Dc] || Gr[Dc] || 0;
    }),
  },
  Zt = {
    s: Rc,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Na,
    sc: co(function (f) {
      return arguments.length
        ? il.scrollTo(Na.sc(), f)
        : il.pageYOffset || ri[Rc] || ui[Rc] || Gr[Rc] || 0;
    }),
  },
  qa = function (l, r) {
    return (
      ((r && r._ctx && r._ctx.selector) || na.utils.toArray)(l)[0] ||
      (typeof l == "string" && na.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", l)
        : null)
    );
  },
  Zx = function (l, r) {
    for (var i = r.length; i--;) if (r[i] === l || r[i].contains(l)) return !0;
    return !1;
  },
  mi = function (l, r) {
    var i = r.s,
      u = r.sc;
    ls(l) && (l = ri.scrollingElement || ui);
    var o = De.indexOf(l),
      d = u === Zt.sc ? 1 : 2;
    (!~o && (o = De.push(l) - 1), De[o + d] || xa(l, "scroll", fh));
    var h = De[o + d],
      g =
        h ||
        (De[o + d] =
          co(oi(l, i), !0) ||
          (ls(l)
            ? u
            : co(function (p) {
                return arguments.length ? (l[i] = p) : l[i];
              })));
    return (
      (g.target = l),
      h || (g.smooth = na.getProperty(l, "scrollBehavior") === "smooth"),
      g
    );
  },
  dh = function (l, r, i) {
    var u = l,
      o = l,
      d = as(),
      h = d,
      g = r || 50,
      p = Math.max(500, g * 3),
      _ = function (A, T) {
        var O = as();
        T || O - d > g
          ? ((o = u), (u = A), (h = d), (d = O))
          : i
            ? (u += A)
            : (u = o + ((A - o) / (O - h)) * (d - h));
      },
      b = function () {
        ((o = u = i ? 0 : u), (h = d = 0));
      },
      S = function (A) {
        var T = h,
          O = o,
          L = as();
        return (
          (A || A === 0) && A !== u && _(A),
          d === h || L - h > p
            ? 0
            : ((u + (i ? O : -O)) / ((i ? L : d) - T)) * 1e3
        );
      };
    return { update: _, reset: b, getVelocity: S };
  },
  Gu = function (l, r) {
    return (
      r && !l._gsapAllow && l.preventDefault(),
      l.changedTouches ? l.changedTouches[0] : l
    );
  },
  r1 = function (l) {
    var r = Math.max.apply(Math, l),
      i = Math.min.apply(Math, l);
    return Math.abs(r) >= Math.abs(i) ? r : i;
  },
  Dy = function () {
    ((ts = na.core.globals().ScrollTrigger), ts && ts.core && Qx());
  },
  Ry = function (l) {
    return (
      (na = l || Cy()),
      !Fc &&
        na &&
        typeof document < "u" &&
        document.body &&
        ((il = window),
        (ri = document),
        (ui = ri.documentElement),
        (Gr = ri.body),
        (Oy = [il, ri, ui, Gr]),
        na.utils.clamp,
        (zy = na.core.context || function () {}),
        (qi = "onpointerenter" in Gr ? "pointer" : "mouse"),
        (My = Ct.isTouch =
          il.matchMedia &&
          il.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in il ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
        (Yl = Ct.eventTypes =
          (
            "ontouchstart" in ui
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in ui
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (jy = 0);
        }, 500),
        Dy(),
        (Fc = 1)),
      Fc
    );
  };
Na.op = Zt;
De.cache = 0;
var Ct = (function () {
  function f(r) {
    this.init(r);
  }
  var l = f.prototype;
  return (
    (l.init = function (i) {
      (Fc || Ry(na) || console.warn("Please gsap.registerPlugin(Observer)"),
        ts || Dy());
      var u = i.tolerance,
        o = i.dragMinimum,
        d = i.type,
        h = i.target,
        g = i.lineHeight,
        p = i.debounce,
        _ = i.preventDefault,
        b = i.onStop,
        S = i.onStopDelay,
        x = i.ignore,
        A = i.wheelSpeed,
        T = i.event,
        O = i.onDragStart,
        L = i.onDragEnd,
        X = i.onDrag,
        Z = i.onPress,
        q = i.onRelease,
        G = i.onRight,
        W = i.onLeft,
        D = i.onUp,
        F = i.onDown,
        J = i.onChangeX,
        $ = i.onChangeY,
        fe = i.onChange,
        P = i.onToggleX,
        xe = i.onToggleY,
        ge = i.onHover,
        _e = i.onHoverEnd,
        z = i.onMove,
        V = i.ignoreCheck,
        ae = i.isNormalizer,
        de = i.onGestureStart,
        k = i.onGestureEnd,
        E = i.onWheel,
        H = i.onEnable,
        I = i.onDisable,
        ee = i.onClick,
        ue = i.scrollSpeed,
        he = i.capture,
        me = i.allowClicks,
        Ke = i.lockAxis,
        Oe = i.onLockAxis;
      ((this.target = h = qa(h) || ui),
        (this.vars = i),
        x && (x = na.utils.toArray(x)),
        (u = u || 1e-9),
        (o = o || 0),
        (A = A || 1),
        (ue = ue || 1),
        (d = d || "wheel,touch,pointer"),
        (p = p !== !1),
        g || (g = parseFloat(il.getComputedStyle(Gr).lineHeight) || 22));
      var ka,
        jt,
        Xt,
        Be,
        Fe,
        Jt,
        It,
        B = this,
        ra = 0,
        Va = 0,
        fl = i.passive || (!_ && i.passive !== !1),
        it = mi(h, Na),
        Dl = mi(h, Zt),
        Ll = it(),
        At = Dl(),
        Dt =
          ~d.indexOf("touch") &&
          !~d.indexOf("pointer") &&
          Yl[0] === "pointerdown",
        Rl = ls(h),
        ft = h.ownerDocument || ri,
        ua = [0, 0, 0],
        Ma = [0, 0, 0],
        dl = 0,
        gi = function () {
          return (dl = as());
        },
        St = function (se, Ve) {
          return (
            ((B.event = se) && x && Zx(se.target, x)) ||
            (Ve && Dt && se.pointerType !== "touch") ||
            (V && V(se, Ve))
          );
        },
        Xl = function () {
          (B._vx.reset(), B._vy.reset(), jt.pause(), b && b(B));
        },
        pt = function () {
          var se = (B.deltaX = r1(ua)),
            Ve = (B.deltaY = r1(Ma)),
            le = Math.abs(se) >= u,
            be = Math.abs(Ve) >= u;
          (fe && (le || be) && fe(B, se, Ve, ua, Ma),
            le &&
              (G && B.deltaX > 0 && G(B),
              W && B.deltaX < 0 && W(B),
              J && J(B),
              P && B.deltaX < 0 != ra < 0 && P(B),
              (ra = B.deltaX),
              (ua[0] = ua[1] = ua[2] = 0)),
            be &&
              (F && B.deltaY > 0 && F(B),
              D && B.deltaY < 0 && D(B),
              $ && $(B),
              xe && B.deltaY < 0 != Va < 0 && xe(B),
              (Va = B.deltaY),
              (Ma[0] = Ma[1] = Ma[2] = 0)),
            (Be || Xt) &&
              (z && z(B),
              Xt && (O && Xt === 1 && O(B), X && X(B), (Xt = 0)),
              (Be = !1)),
            Jt && !(Jt = !1) && Oe && Oe(B),
            Fe && (E(B), (Fe = !1)),
            (ka = 0));
        },
        ga = function (se, Ve, le) {
          ((ua[le] += se),
            (Ma[le] += Ve),
            B._vx.update(se),
            B._vy.update(Ve),
            p ? ka || (ka = requestAnimationFrame(pt)) : pt());
        },
        Rt = function (se, Ve) {
          (Ke &&
            !It &&
            ((B.axis = It = Math.abs(se) > Math.abs(Ve) ? "x" : "y"),
            (Jt = !0)),
            It !== "y" && ((ua[2] += se), B._vx.update(se, !0)),
            It !== "x" && ((Ma[2] += Ve), B._vy.update(Ve, !0)),
            p ? ka || (ka = requestAnimationFrame(pt)) : pt());
        },
        Gl = function (se) {
          if (!St(se, 1)) {
            se = Gu(se, _);
            var Ve = se.clientX,
              le = se.clientY,
              be = Ve - B.x,
              ce = le - B.y,
              ye = B.isDragging;
            ((B.x = Ve),
              (B.y = le),
              (ye ||
                ((be || ce) &&
                  (Math.abs(B.startX - Ve) >= o ||
                    Math.abs(B.startY - le) >= o))) &&
                (Xt || (Xt = ye ? 2 : 1),
                ye || (B.isDragging = !0),
                Rt(be, ce)));
          }
        },
        nn = (B.onPress = function (ve) {
          St(ve, 1) ||
            (ve && ve.button) ||
            ((B.axis = It = null),
            jt.pause(),
            (B.isPressed = !0),
            (ve = Gu(ve)),
            (ra = Va = 0),
            (B.startX = B.x = ve.clientX),
            (B.startY = B.y = ve.clientY),
            B._vx.reset(),
            B._vy.reset(),
            xa(ae ? h : ft, Yl[1], Gl, fl, !0),
            (B.deltaX = B.deltaY = 0),
            Z && Z(B));
        }),
        Ae = (B.onRelease = function (ve) {
          if (!St(ve, 1)) {
            ba(ae ? h : ft, Yl[1], Gl, !0);
            var se = !isNaN(B.y - B.startY),
              Ve = B.isDragging,
              le =
                Ve &&
                (Math.abs(B.x - B.startX) > 3 || Math.abs(B.y - B.startY) > 3),
              be = Gu(ve);
            (!le &&
              se &&
              (B._vx.reset(),
              B._vy.reset(),
              _ &&
                me &&
                na.delayedCall(0.08, function () {
                  if (as() - dl > 300 && !ve.defaultPrevented) {
                    if (ve.target.click) ve.target.click();
                    else if (ft.createEvent) {
                      var ce = ft.createEvent("MouseEvents");
                      (ce.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        il,
                        1,
                        be.screenX,
                        be.screenY,
                        be.clientX,
                        be.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null,
                      ),
                        ve.target.dispatchEvent(ce));
                    }
                  }
                })),
              (B.isDragging = B.isGesturing = B.isPressed = !1),
              b && Ve && !ae && jt.restart(!0),
              Xt && pt(),
              L && Ve && L(B),
              q && q(B, le));
          }
        }),
        hl = function (se) {
          return (
            se.touches &&
            se.touches.length > 1 &&
            (B.isGesturing = !0) &&
            de(se, B.isDragging)
          );
        },
        sa = function () {
          return (B.isGesturing = !1) || k(B);
        },
        ca = function (se) {
          if (!St(se)) {
            var Ve = it(),
              le = Dl();
            (ga((Ve - Ll) * ue, (le - At) * ue, 1),
              (Ll = Ve),
              (At = le),
              b && jt.restart(!0));
          }
        },
        Gt = function (se) {
          if (!St(se)) {
            ((se = Gu(se, _)), E && (Fe = !0));
            var Ve =
              (se.deltaMode === 1
                ? g
                : se.deltaMode === 2
                  ? il.innerHeight
                  : 1) * A;
            (ga(se.deltaX * Ve, se.deltaY * Ve, 0), b && !ae && jt.restart(!0));
          }
        },
        ml = function (se) {
          if (!St(se)) {
            var Ve = se.clientX,
              le = se.clientY,
              be = Ve - B.x,
              ce = le - B.y;
            ((B.x = Ve),
              (B.y = le),
              (Be = !0),
              b && jt.restart(!0),
              (be || ce) && Rt(be, ce));
          }
        },
        pl = function (se) {
          ((B.event = se), ge(B));
        },
        Ul = function (se) {
          ((B.event = se), _e(B));
        },
        zn = function (se) {
          return St(se) || (Gu(se, _) && ee(B));
        };
      ((jt = B._dc = na.delayedCall(S || 0.25, Xl).pause()),
        (B.deltaX = B.deltaY = 0),
        (B._vx = dh(0, 50, !0)),
        (B._vy = dh(0, 50, !0)),
        (B.scrollX = it),
        (B.scrollY = Dl),
        (B.isDragging = B.isGesturing = B.isPressed = !1),
        zy(this),
        (B.enable = function (ve) {
          return (
            B.isEnabled ||
              (xa(Rl ? ft : h, "scroll", fh),
              d.indexOf("scroll") >= 0 && xa(Rl ? ft : h, "scroll", ca, fl, he),
              d.indexOf("wheel") >= 0 && xa(h, "wheel", Gt, fl, he),
              ((d.indexOf("touch") >= 0 && My) || d.indexOf("pointer") >= 0) &&
                (xa(h, Yl[0], nn, fl, he),
                xa(ft, Yl[2], Ae),
                xa(ft, Yl[3], Ae),
                me && xa(h, "click", gi, !0, !0),
                ee && xa(h, "click", zn),
                de && xa(ft, "gesturestart", hl),
                k && xa(ft, "gestureend", sa),
                ge && xa(h, qi + "enter", pl),
                _e && xa(h, qi + "leave", Ul),
                z && xa(h, qi + "move", ml)),
              (B.isEnabled = !0),
              (B.isDragging = B.isGesturing = B.isPressed = Be = Xt = !1),
              B._vx.reset(),
              B._vy.reset(),
              (Ll = it()),
              (At = Dl()),
              ve && ve.type && nn(ve),
              H && H(B)),
            B
          );
        }),
        (B.disable = function () {
          B.isEnabled &&
            (Hr.filter(function (ve) {
              return ve !== B && ls(ve.target);
            }).length || ba(Rl ? ft : h, "scroll", fh),
            B.isPressed &&
              (B._vx.reset(), B._vy.reset(), ba(ae ? h : ft, Yl[1], Gl, !0)),
            ba(Rl ? ft : h, "scroll", ca, he),
            ba(h, "wheel", Gt, he),
            ba(h, Yl[0], nn, he),
            ba(ft, Yl[2], Ae),
            ba(ft, Yl[3], Ae),
            ba(h, "click", gi, !0),
            ba(h, "click", zn),
            ba(ft, "gesturestart", hl),
            ba(ft, "gestureend", sa),
            ba(h, qi + "enter", pl),
            ba(h, qi + "leave", Ul),
            ba(h, qi + "move", ml),
            (B.isEnabled = B.isPressed = B.isDragging = !1),
            I && I(B));
        }),
        (B.kill = B.revert =
          function () {
            B.disable();
            var ve = Hr.indexOf(B);
            (ve >= 0 && Hr.splice(ve, 1), An === B && (An = 0));
          }),
        Hr.push(B),
        ae && ls(h) && (An = B),
        B.enable(T));
    }),
    Vx(f, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    f
  );
})();
Ct.version = "3.14.2";
Ct.create = function (f) {
  return new Ct(f);
};
Ct.register = Ry;
Ct.getAll = function () {
  return Hr.slice();
};
Ct.getById = function (f) {
  return Hr.filter(function (l) {
    return l.vars.id === f;
  })[0];
};
Cy() && na.registerPlugin(Ct);
var ie,
  Rr,
  je,
  rt,
  ll,
  We,
  Hh,
  oo,
  _s,
  ns,
  Ku,
  Uc,
  fa,
  yo,
  hh,
  Ta,
  u1,
  s1,
  Ur,
  Uy,
  Ld,
  qy,
  Sa,
  mh,
  By,
  Hy,
  ai,
  ph,
  Yh,
  Vr,
  Lh,
  is,
  gh,
  Xd,
  qc = 1,
  da = Date.now,
  Gd = da(),
  jl = 0,
  Ju = 0,
  c1 = function (l, r, i) {
    var u = tl(l) && (l.substr(0, 6) === "clamp(" || l.indexOf("max") > -1);
    return ((i["_" + r + "Clamp"] = u), u ? l.substr(6, l.length - 7) : l);
  },
  o1 = function (l, r) {
    return r && (!tl(l) || l.substr(0, 6) !== "clamp(")
      ? "clamp(" + l + ")"
      : l;
  },
  Kx = function f() {
    return Ju && requestAnimationFrame(f);
  },
  f1 = function () {
    return (yo = 1);
  },
  d1 = function () {
    return (yo = 0);
  },
  Pl = function (l) {
    return l;
  },
  Wu = function (l) {
    return Math.round(l * 1e5) / 1e5 || 0;
  },
  Yy = function () {
    return typeof window < "u";
  },
  Ly = function () {
    return ie || (Yy() && (ie = window.gsap) && ie.registerPlugin && ie);
  },
  Ji = function (l) {
    return !!~Hh.indexOf(l);
  },
  Xy = function (l) {
    return (
      (l === "Height" ? Lh : je["inner" + l]) ||
      ll["client" + l] ||
      We["client" + l]
    );
  },
  Gy = function (l) {
    return (
      oi(l, "getBoundingClientRect") ||
      (Ji(l)
        ? function () {
            return ((to.width = je.innerWidth), (to.height = Lh), to);
          }
        : function () {
            return Nn(l);
          })
    );
  },
  Jx = function (l, r, i) {
    var u = i.d,
      o = i.d2,
      d = i.a;
    return (d = oi(l, "getBoundingClientRect"))
      ? function () {
          return d()[u];
        }
      : function () {
          return (r ? Xy(o) : l["client" + o]) || 0;
        };
  },
  Wx = function (l, r) {
    return !r || ~an.indexOf(l)
      ? Gy(l)
      : function () {
          return to;
        };
  },
  tn = function (l, r) {
    var i = r.s,
      u = r.d2,
      o = r.d,
      d = r.a;
    return Math.max(
      0,
      (i = "scroll" + u) && (d = oi(l, i))
        ? d() - Gy(l)()[o]
        : Ji(l)
          ? (ll[i] || We[i]) - Xy(u)
          : l[i] - l["offset" + u],
    );
  },
  Bc = function (l, r) {
    for (var i = 0; i < Ur.length; i += 3)
      (!r || ~r.indexOf(Ur[i + 1])) && l(Ur[i], Ur[i + 1], Ur[i + 2]);
  },
  tl = function (l) {
    return typeof l == "string";
  },
  ma = function (l) {
    return typeof l == "function";
  },
  Fu = function (l) {
    return typeof l == "number";
  },
  Bi = function (l) {
    return typeof l == "object";
  },
  Vu = function (l, r, i) {
    return l && l.progress(r ? 0 : 1) && i && l.pause();
  },
  Vd = function (l, r) {
    if (l.enabled) {
      var i = l._ctx
        ? l._ctx.add(function () {
            return r(l);
          })
        : r(l);
      i && i.totalTime && (l.callbackAnimation = i);
    }
  },
  jr = Math.abs,
  Vy = "left",
  Qy = "top",
  Xh = "right",
  Gh = "bottom",
  Qi = "width",
  Zi = "height",
  rs = "Right",
  us = "Left",
  ss = "Top",
  cs = "Bottom",
  Yt = "padding",
  Ml = "margin",
  Pr = "Width",
  Vh = "Height",
  Qt = "px",
  Ol = function (l) {
    return je.getComputedStyle(l);
  },
  Fx = function (l) {
    var r = Ol(l).position;
    l.style.position = r === "absolute" || r === "fixed" ? r : "relative";
  },
  h1 = function (l, r) {
    for (var i in r) i in l || (l[i] = r[i]);
    return l;
  },
  Nn = function (l, r) {
    var i =
        r &&
        Ol(l)[hh] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        ie
          .to(l, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          })
          .progress(1),
      u = l.getBoundingClientRect();
    return (i && i.progress(0).kill(), u);
  },
  fo = function (l, r) {
    var i = r.d2;
    return l["offset" + i] || l["client" + i] || 0;
  },
  Zy = function (l) {
    var r = [],
      i = l.labels,
      u = l.duration(),
      o;
    for (o in i) r.push(i[o] / u);
    return r;
  },
  $x = function (l) {
    return function (r) {
      return ie.utils.snap(Zy(l), r);
    };
  },
  Qh = function (l) {
    var r = ie.utils.snap(l),
      i =
        Array.isArray(l) &&
        l.slice(0).sort(function (u, o) {
          return u - o;
        });
    return i
      ? function (u, o, d) {
          d === void 0 && (d = 0.001);
          var h;
          if (!o) return r(u);
          if (o > 0) {
            for (u -= d, h = 0; h < i.length; h++) if (i[h] >= u) return i[h];
            return i[h - 1];
          } else for (h = i.length, u += d; h--;) if (i[h] <= u) return i[h];
          return i[0];
        }
      : function (u, o, d) {
          d === void 0 && (d = 0.001);
          var h = r(u);
          return !o || Math.abs(h - u) < d || h - u < 0 == o < 0
            ? h
            : r(o < 0 ? u - l : u + l);
        };
  },
  Px = function (l) {
    return function (r, i) {
      return Qh(Zy(l))(r, i.direction);
    };
  },
  Hc = function (l, r, i, u) {
    return i.split(",").forEach(function (o) {
      return l(r, o, u);
    });
  },
  $t = function (l, r, i, u, o) {
    return l.addEventListener(r, i, { passive: !u, capture: !!o });
  },
  Ft = function (l, r, i, u) {
    return l.removeEventListener(r, i, !!u);
  },
  Yc = function (l, r, i) {
    ((i = i && i.wheelHandler), i && (l(r, "wheel", i), l(r, "touchmove", i)));
  },
  m1 = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  Lc = { toggleActions: "play", anticipatePin: 0 },
  ho = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  $c = function (l, r) {
    if (tl(l)) {
      var i = l.indexOf("="),
        u = ~i ? +(l.charAt(i - 1) + 1) * parseFloat(l.substr(i + 1)) : 0;
      (~i && (l.indexOf("%") > i && (u *= r / 100), (l = l.substr(0, i - 1))),
        (l =
          u +
          (l in ho
            ? ho[l] * r
            : ~l.indexOf("%")
              ? (parseFloat(l) * r) / 100
              : parseFloat(l) || 0)));
    }
    return l;
  },
  Xc = function (l, r, i, u, o, d, h, g) {
    var p = o.startColor,
      _ = o.endColor,
      b = o.fontSize,
      S = o.indent,
      x = o.fontWeight,
      A = rt.createElement("div"),
      T = Ji(i) || oi(i, "pinType") === "fixed",
      O = l.indexOf("scroller") !== -1,
      L = T ? We : i,
      X = l.indexOf("start") !== -1,
      Z = X ? p : _,
      q =
        "border-color:" +
        Z +
        ";font-size:" +
        b +
        ";color:" +
        Z +
        ";font-weight:" +
        x +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (q += "position:" + ((O || g) && T ? "fixed;" : "absolute;")),
      (O || g || !T) &&
        (q += (u === Zt ? Xh : Gh) + ":" + (d + parseFloat(S)) + "px;"),
      h &&
        (q +=
          "box-sizing:border-box;text-align:left;width:" +
          h.offsetWidth +
          "px;"),
      (A._isStart = X),
      A.setAttribute("class", "gsap-marker-" + l + (r ? " marker-" + r : "")),
      (A.style.cssText = q),
      (A.innerText = r || r === 0 ? l + "-" + r : l),
      L.children[0] ? L.insertBefore(A, L.children[0]) : L.appendChild(A),
      (A._offset = A["offset" + u.op.d2]),
      Pc(A, 0, u, X),
      A
    );
  },
  Pc = function (l, r, i, u) {
    var o = { display: "block" },
      d = i[u ? "os2" : "p2"],
      h = i[u ? "p2" : "os2"];
    ((l._isFlipped = u),
      (o[i.a + "Percent"] = u ? -100 : 0),
      (o[i.a] = u ? "1px" : 0),
      (o["border" + d + Pr] = 1),
      (o["border" + h + Pr] = 0),
      (o[i.p] = r + "px"),
      ie.set(l, o));
  },
  Me = [],
  yh = {},
  vs,
  p1 = function () {
    return da() - jl > 34 && (vs || (vs = requestAnimationFrame(kn)));
  },
  Dr = function () {
    (!Sa || !Sa.isPressed || Sa.startX > We.clientWidth) &&
      (De.cache++,
      Sa ? vs || (vs = requestAnimationFrame(kn)) : kn(),
      jl || Fi("scrollStart"),
      (jl = da()));
  },
  Qd = function () {
    ((Hy = je.innerWidth), (By = je.innerHeight));
  },
  $u = function (l) {
    (De.cache++,
      (l === !0 ||
        (!fa &&
          !qy &&
          !rt.fullscreenElement &&
          !rt.webkitFullscreenElement &&
          (!mh ||
            Hy !== je.innerWidth ||
            Math.abs(je.innerHeight - By) > je.innerHeight * 0.25))) &&
        oo.restart(!0));
  },
  Wi = {},
  Ix = [],
  Ky = function f() {
    return Ft(qe, "scrollEnd", f) || Yi(!0);
  },
  Fi = function (l) {
    return (
      (Wi[l] &&
        Wi[l].map(function (r) {
          return r();
        })) ||
      Ix
    );
  },
  el = [],
  Jy = function (l) {
    for (var r = 0; r < el.length; r += 5)
      (!l || (el[r + 4] && el[r + 4].query === l)) &&
        ((el[r].style.cssText = el[r + 1]),
        el[r].getBBox && el[r].setAttribute("transform", el[r + 2] || ""),
        (el[r + 3].uncache = 1));
  },
  Wy = function () {
    return De.forEach(function (l) {
      return ma(l) && ++l.cacheID && (l.rec = l());
    });
  },
  Zh = function (l, r) {
    var i;
    for (Ta = 0; Ta < Me.length; Ta++)
      ((i = Me[Ta]),
        i && (!r || i._ctx === r) && (l ? i.kill(1) : i.revert(!0, !0)));
    ((is = !0), r && Jy(r), r || Fi("revert"));
  },
  Fy = function (l, r) {
    (De.cache++,
      (r || !wa) &&
        De.forEach(function (i) {
          return ma(i) && i.cacheID++ && (i.rec = 0);
        }),
      tl(l) && (je.history.scrollRestoration = Yh = l));
  },
  wa,
  Ki = 0,
  g1,
  e2 = function () {
    if (g1 !== Ki) {
      var l = (g1 = Ki);
      requestAnimationFrame(function () {
        return l === Ki && Yi(!0);
      });
    }
  },
  $y = function () {
    (We.appendChild(Vr),
      (Lh = (!Sa && Vr.offsetHeight) || je.innerHeight),
      We.removeChild(Vr));
  },
  y1 = function (l) {
    return _s(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end",
    ).forEach(function (r) {
      return (r.style.display = l ? "none" : "block");
    });
  },
  Yi = function (l, r) {
    if (
      ((ll = rt.documentElement),
      (We = rt.body),
      (Hh = [je, rt, ll, We]),
      jl && !l && !is)
    ) {
      $t(qe, "scrollEnd", Ky);
      return;
    }
    ($y(), (wa = qe.isRefreshing = !0), is || Wy());
    var i = Fi("refreshInit");
    (Uy && qe.sort(),
      r || Zh(),
      De.forEach(function (u) {
        ma(u) && (u.smooth && (u.target.style.scrollBehavior = "auto"), u(0));
      }),
      Me.slice(0).forEach(function (u) {
        return u.refresh();
      }),
      (is = !1),
      Me.forEach(function (u) {
        if (u._subPinOffset && u.pin) {
          var o = u.vars.horizontal ? "offsetWidth" : "offsetHeight",
            d = u.pin[o];
          (u.revert(!0, 1), u.adjustPinSpacing(u.pin[o] - d), u.refresh());
        }
      }),
      (gh = 1),
      y1(!0),
      Me.forEach(function (u) {
        var o = tn(u.scroller, u._dir),
          d = u.vars.end === "max" || (u._endClamp && u.end > o),
          h = u._startClamp && u.start >= o;
        (d || h) &&
          u.setPositions(
            h ? o - 1 : u.start,
            d ? Math.max(h ? o : u.start + 1, o) : u.end,
            !0,
          );
      }),
      y1(!1),
      (gh = 0),
      i.forEach(function (u) {
        return u && u.render && u.render(-1);
      }),
      De.forEach(function (u) {
        ma(u) &&
          (u.smooth &&
            requestAnimationFrame(function () {
              return (u.target.style.scrollBehavior = "smooth");
            }),
          u.rec && u(u.rec));
      }),
      Fy(Yh, 1),
      oo.pause(),
      Ki++,
      (wa = 2),
      kn(2),
      Me.forEach(function (u) {
        return ma(u.vars.onRefresh) && u.vars.onRefresh(u);
      }),
      (wa = qe.isRefreshing = !1),
      Fi("refresh"));
  },
  _h = 0,
  Ic = 1,
  os,
  kn = function (l) {
    if (l === 2 || (!wa && !is)) {
      ((qe.isUpdating = !0), os && os.update(0));
      var r = Me.length,
        i = da(),
        u = i - Gd >= 50,
        o = r && Me[0].scroll();
      if (
        ((Ic = _h > o ? -1 : 1),
        wa || (_h = o),
        u &&
          (jl && !yo && i - jl > 200 && ((jl = 0), Fi("scrollEnd")),
          (Ku = Gd),
          (Gd = i)),
        Ic < 0)
      ) {
        for (Ta = r; Ta-- > 0;) Me[Ta] && Me[Ta].update(0, u);
        Ic = 1;
      } else for (Ta = 0; Ta < r; Ta++) Me[Ta] && Me[Ta].update(0, u);
      qe.isUpdating = !1;
    }
    vs = 0;
  },
  vh = [
    Vy,
    Qy,
    Gh,
    Xh,
    Ml + cs,
    Ml + rs,
    Ml + ss,
    Ml + us,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  eo = vh.concat([
    Qi,
    Zi,
    "boxSizing",
    "max" + Pr,
    "max" + Vh,
    "position",
    Ml,
    Yt,
    Yt + ss,
    Yt + rs,
    Yt + cs,
    Yt + us,
  ]),
  t2 = function (l, r, i) {
    Qr(i);
    var u = l._gsap;
    if (u.spacerIsNative) Qr(u.spacerState);
    else if (l._gsap.swappedIn) {
      var o = r.parentNode;
      o && (o.insertBefore(l, r), o.removeChild(r));
    }
    l._gsap.swappedIn = !1;
  },
  Zd = function (l, r, i, u) {
    if (!l._gsap.swappedIn) {
      for (var o = vh.length, d = r.style, h = l.style, g; o--;)
        ((g = vh[o]), (d[g] = i[g]));
      ((d.position = i.position === "absolute" ? "absolute" : "relative"),
        i.display === "inline" && (d.display = "inline-block"),
        (h[Gh] = h[Xh] = "auto"),
        (d.flexBasis = i.flexBasis || "auto"),
        (d.overflow = "visible"),
        (d.boxSizing = "border-box"),
        (d[Qi] = fo(l, Na) + Qt),
        (d[Zi] = fo(l, Zt) + Qt),
        (d[Yt] = h[Ml] = h[Qy] = h[Vy] = "0"),
        Qr(u),
        (h[Qi] = h["max" + Pr] = i[Qi]),
        (h[Zi] = h["max" + Vh] = i[Zi]),
        (h[Yt] = i[Yt]),
        l.parentNode !== r &&
          (l.parentNode.insertBefore(r, l), r.appendChild(l)),
        (l._gsap.swappedIn = !0));
    }
  },
  a2 = /([A-Z])/g,
  Qr = function (l) {
    if (l) {
      var r = l.t.style,
        i = l.length,
        u = 0,
        o,
        d;
      for ((l.t._gsap || ie.core.getCache(l.t)).uncache = 1; u < i; u += 2)
        ((d = l[u + 1]),
          (o = l[u]),
          d
            ? (r[o] = d)
            : r[o] && r.removeProperty(o.replace(a2, "-$1").toLowerCase()));
    }
  },
  Gc = function (l) {
    for (var r = eo.length, i = l.style, u = [], o = 0; o < r; o++)
      u.push(eo[o], i[eo[o]]);
    return ((u.t = l), u);
  },
  l2 = function (l, r, i) {
    for (var u = [], o = l.length, d = i ? 8 : 0, h; d < o; d += 2)
      ((h = l[d]), u.push(h, h in r ? r[h] : l[d + 1]));
    return ((u.t = l.t), u);
  },
  to = { left: 0, top: 0 },
  _1 = function (l, r, i, u, o, d, h, g, p, _, b, S, x, A) {
    (ma(l) && (l = l(g)),
      tl(l) &&
        l.substr(0, 3) === "max" &&
        (l = S + (l.charAt(4) === "=" ? $c("0" + l.substr(3), i) : 0)));
    var T = x ? x.time() : 0,
      O,
      L,
      X;
    if ((x && x.seek(0), isNaN(l) || (l = +l), Fu(l)))
      (x &&
        (l = ie.utils.mapRange(
          x.scrollTrigger.start,
          x.scrollTrigger.end,
          0,
          S,
          l,
        )),
        h && Pc(h, i, u, !0));
    else {
      ma(r) && (r = r(g));
      var Z = (l || "0").split(" "),
        q,
        G,
        W,
        D;
      ((X = qa(r, g) || We),
        (q = Nn(X) || {}),
        (!q || (!q.left && !q.top)) &&
          Ol(X).display === "none" &&
          ((D = X.style.display),
          (X.style.display = "block"),
          (q = Nn(X)),
          D ? (X.style.display = D) : X.style.removeProperty("display")),
        (G = $c(Z[0], q[u.d])),
        (W = $c(Z[1] || "0", i)),
        (l = q[u.p] - p[u.p] - _ + G + o - W),
        h && Pc(h, W, u, i - W < 20 || (h._isStart && W > 20)),
        (i -= i - W));
    }
    if ((A && ((g[A] = l || -0.001), l < 0 && (l = 0)), d)) {
      var F = l + i,
        J = d._isStart;
      ((O = "scroll" + u.d2),
        Pc(
          d,
          F,
          u,
          (J && F > 20) ||
            (!J && (b ? Math.max(We[O], ll[O]) : d.parentNode[O]) <= F + 1),
        ),
        b &&
          ((p = Nn(h)),
          b && (d.style[u.op.p] = p[u.op.p] - u.op.m - d._offset + Qt)));
    }
    return (
      x &&
        X &&
        ((O = Nn(X)),
        x.seek(S),
        (L = Nn(X)),
        (x._caScrollDist = O[u.p] - L[u.p]),
        (l = (l / x._caScrollDist) * S)),
      x && x.seek(T),
      x ? l : Math.round(l)
    );
  },
  n2 = /(webkit|moz|length|cssText|inset)/i,
  v1 = function (l, r, i, u) {
    if (l.parentNode !== r) {
      var o = l.style,
        d,
        h;
      if (r === We) {
        ((l._stOrig = o.cssText), (h = Ol(l)));
        for (d in h)
          !+d &&
            !n2.test(d) &&
            h[d] &&
            typeof o[d] == "string" &&
            d !== "0" &&
            (o[d] = h[d]);
        ((o.top = i), (o.left = u));
      } else o.cssText = l._stOrig;
      ((ie.core.getCache(l).uncache = 1), r.appendChild(l));
    }
  },
  Py = function (l, r, i) {
    var u = r,
      o = u;
    return function (d) {
      var h = Math.round(l());
      return (
        h !== u &&
          h !== o &&
          Math.abs(h - u) > 3 &&
          Math.abs(h - o) > 3 &&
          ((d = h), i && i()),
        (o = u),
        (u = Math.round(d)),
        u
      );
    };
  },
  Vc = function (l, r, i) {
    var u = {};
    ((u[r.p] = "+=" + i), ie.set(l, u));
  },
  b1 = function (l, r) {
    var i = mi(l, r),
      u = "_scroll" + r.p2,
      o = function d(h, g, p, _, b) {
        var S = d.tween,
          x = g.onComplete,
          A = {};
        p = p || i();
        var T = Py(i, p, function () {
          (S.kill(), (d.tween = 0));
        });
        return (
          (b = (_ && b) || 0),
          (_ = _ || h - p),
          S && S.kill(),
          (g[u] = h),
          (g.inherit = !1),
          (g.modifiers = A),
          (A[u] = function () {
            return T(p + _ * S.ratio + b * S.ratio * S.ratio);
          }),
          (g.onUpdate = function () {
            (De.cache++, d.tween && kn());
          }),
          (g.onComplete = function () {
            ((d.tween = 0), x && x.call(S));
          }),
          (S = d.tween = ie.to(l, g)),
          S
        );
      };
    return (
      (l[u] = i),
      (i.wheelHandler = function () {
        return o.tween && o.tween.kill() && (o.tween = 0);
      }),
      $t(l, "wheel", i.wheelHandler),
      qe.isTouch && $t(l, "touchmove", i.wheelHandler),
      o
    );
  },
  qe = (function () {
    function f(r, i) {
      (Rr ||
        f.register(ie) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        ph(this),
        this.init(r, i));
    }
    var l = f.prototype;
    return (
      (l.init = function (i, u) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !Ju)
        ) {
          this.update = this.refresh = this.kill = Pl;
          return;
        }
        i = h1(tl(i) || Fu(i) || i.nodeType ? { trigger: i } : i, Lc);
        var o = i,
          d = o.onUpdate,
          h = o.toggleClass,
          g = o.id,
          p = o.onToggle,
          _ = o.onRefresh,
          b = o.scrub,
          S = o.trigger,
          x = o.pin,
          A = o.pinSpacing,
          T = o.invalidateOnRefresh,
          O = o.anticipatePin,
          L = o.onScrubComplete,
          X = o.onSnapComplete,
          Z = o.once,
          q = o.snap,
          G = o.pinReparent,
          W = o.pinSpacer,
          D = o.containerAnimation,
          F = o.fastScrollEnd,
          J = o.preventOverlaps,
          $ =
            i.horizontal || (i.containerAnimation && i.horizontal !== !1)
              ? Na
              : Zt,
          fe = !b && b !== 0,
          P = qa(i.scroller || je),
          xe = ie.core.getCache(P),
          ge = Ji(P),
          _e =
            ("pinType" in i
              ? i.pinType
              : oi(P, "pinType") || (ge && "fixed")) === "fixed",
          z = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
          V = fe && i.toggleActions.split(" "),
          ae = "markers" in i ? i.markers : Lc.markers,
          de = ge ? 0 : parseFloat(Ol(P)["border" + $.p2 + Pr]) || 0,
          k = this,
          E =
            i.onRefreshInit &&
            function () {
              return i.onRefreshInit(k);
            },
          H = Jx(P, ge, $),
          I = Wx(P, ge),
          ee = 0,
          ue = 0,
          he = 0,
          me = mi(P, $),
          Ke,
          Oe,
          ka,
          jt,
          Xt,
          Be,
          Fe,
          Jt,
          It,
          B,
          ra,
          Va,
          fl,
          it,
          Dl,
          Ll,
          At,
          Dt,
          Rl,
          ft,
          ua,
          Ma,
          dl,
          gi,
          St,
          Xl,
          pt,
          ga,
          Rt,
          Gl,
          nn,
          Ae,
          hl,
          sa,
          ca,
          Gt,
          ml,
          pl,
          Ul;
        if (
          ((k._startClamp = k._endClamp = !1),
          (k._dir = $),
          (O *= 45),
          (k.scroller = P),
          (k.scroll = D ? D.time.bind(D) : me),
          (jt = me()),
          (k.vars = i),
          (u = u || i.animation),
          "refreshPriority" in i &&
            ((Uy = 1), i.refreshPriority === -9999 && (os = k)),
          (xe.tweenScroll = xe.tweenScroll || {
            top: b1(P, Zt),
            left: b1(P, Na),
          }),
          (k.tweenTo = Ke = xe.tweenScroll[$.p]),
          (k.scrubDuration = function (le) {
            ((hl = Fu(le) && le),
              hl
                ? Ae
                  ? Ae.duration(le)
                  : (Ae = ie.to(u, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: hl,
                      paused: !0,
                      onComplete: function () {
                        return L && L(k);
                      },
                    }))
                : (Ae && Ae.progress(1).kill(), (Ae = 0)));
          }),
          u &&
            ((u.vars.lazy = !1),
            (u._initted && !k.isReverted) ||
              (u.vars.immediateRender !== !1 &&
                i.immediateRender !== !1 &&
                u.duration() &&
                u.render(0, !0, !0)),
            (k.animation = u.pause()),
            (u.scrollTrigger = k),
            k.scrubDuration(b),
            (Gl = 0),
            g || (g = u.vars.id)),
          q &&
            ((!Bi(q) || q.push) && (q = { snapTo: q }),
            "scrollBehavior" in We.style &&
              ie.set(ge ? [We, ll] : P, { scrollBehavior: "auto" }),
            De.forEach(function (le) {
              return (
                ma(le) &&
                le.target === (ge ? rt.scrollingElement || ll : P) &&
                (le.smooth = !1)
              );
            }),
            (ka = ma(q.snapTo)
              ? q.snapTo
              : q.snapTo === "labels"
                ? $x(u)
                : q.snapTo === "labelsDirectional"
                  ? Px(u)
                  : q.directional !== !1
                    ? function (le, be) {
                        return Qh(q.snapTo)(
                          le,
                          da() - ue < 500 ? 0 : be.direction,
                        );
                      }
                    : ie.utils.snap(q.snapTo)),
            (sa = q.duration || { min: 0.1, max: 2 }),
            (sa = Bi(sa) ? ns(sa.min, sa.max) : ns(sa, sa)),
            (ca = ie
              .delayedCall(q.delay || hl / 2 || 0.1, function () {
                var le = me(),
                  be = da() - ue < 500,
                  ce = Ke.tween;
                if (
                  (be || Math.abs(k.getVelocity()) < 10) &&
                  !ce &&
                  !yo &&
                  ee !== le
                ) {
                  var ye = (le - Be) / it,
                    Tt = u && !fe ? u.totalProgress() : ye,
                    ze = be ? 0 : ((Tt - nn) / (da() - Ku)) * 1e3 || 0,
                    dt = ie.utils.clamp(-ye, 1 - ye, (jr(ze / 2) * ze) / 0.185),
                    ut = ye + (q.inertia === !1 ? 0 : dt),
                    Ne,
                    ke,
                    Ge = q,
                    ya = Ge.onStart,
                    st = Ge.onInterrupt,
                    _a = Ge.onComplete;
                  if (
                    ((Ne = ka(ut, k)),
                    Fu(Ne) || (Ne = ut),
                    (ke = Math.max(0, Math.round(Be + Ne * it))),
                    le <= Fe && le >= Be && ke !== le)
                  ) {
                    if (ce && !ce._initted && ce.data <= jr(ke - le)) return;
                    (q.inertia === !1 && (dt = Ne - ye),
                      Ke(
                        ke,
                        {
                          duration: sa(
                            jr(
                              (Math.max(jr(ut - Tt), jr(Ne - Tt)) * 0.185) /
                                ze /
                                0.05 || 0,
                            ),
                          ),
                          ease: q.ease || "power3",
                          data: jr(ke - le),
                          onInterrupt: function () {
                            return ca.restart(!0) && st && st(k);
                          },
                          onComplete: function () {
                            (k.update(),
                              (ee = me()),
                              u &&
                                !fe &&
                                (Ae
                                  ? Ae.resetTo(
                                      "totalProgress",
                                      Ne,
                                      u._tTime / u._tDur,
                                    )
                                  : u.progress(Ne)),
                              (Gl = nn =
                                u && !fe ? u.totalProgress() : k.progress),
                              X && X(k),
                              _a && _a(k));
                          },
                        },
                        le,
                        dt * it,
                        ke - le - dt * it,
                      ),
                      ya && ya(k, Ke.tween));
                  }
                } else k.isActive && ee !== le && ca.restart(!0);
              })
              .pause())),
          g && (yh[g] = k),
          (S = k.trigger = qa(S || (x !== !0 && x))),
          (Ul = S && S._gsap && S._gsap.stRevert),
          Ul && (Ul = Ul(k)),
          (x = x === !0 ? S : qa(x)),
          tl(h) && (h = { targets: S, className: h }),
          x &&
            (A === !1 ||
              A === Ml ||
              (A =
                !A &&
                x.parentNode &&
                x.parentNode.style &&
                Ol(x.parentNode).display === "flex"
                  ? !1
                  : Yt),
            (k.pin = x),
            (Oe = ie.core.getCache(x)),
            Oe.spacer
              ? (Dl = Oe.pinState)
              : (W &&
                  ((W = qa(W)),
                  W && !W.nodeType && (W = W.current || W.nativeElement),
                  (Oe.spacerIsNative = !!W),
                  W && (Oe.spacerState = Gc(W))),
                (Oe.spacer = Dt = W || rt.createElement("div")),
                Dt.classList.add("pin-spacer"),
                g && Dt.classList.add("pin-spacer-" + g),
                (Oe.pinState = Dl = Gc(x))),
            i.force3D !== !1 && ie.set(x, { force3D: !0 }),
            (k.spacer = Dt = Oe.spacer),
            (Rt = Ol(x)),
            (gi = Rt[A + $.os2]),
            (ft = ie.getProperty(x)),
            (ua = ie.quickSetter(x, $.a, Qt)),
            Zd(x, Dt, Rt),
            (At = Gc(x))),
          ae)
        ) {
          ((Va = Bi(ae) ? h1(ae, m1) : m1),
            (B = Xc("scroller-start", g, P, $, Va, 0)),
            (ra = Xc("scroller-end", g, P, $, Va, 0, B)),
            (Rl = B["offset" + $.op.d2]));
          var zn = qa(oi(P, "content") || P);
          ((Jt = this.markerStart = Xc("start", g, zn, $, Va, Rl, 0, D)),
            (It = this.markerEnd = Xc("end", g, zn, $, Va, Rl, 0, D)),
            D && (pl = ie.quickSetter([Jt, It], $.a, Qt)),
            !_e &&
              !(an.length && oi(P, "fixedMarkers") === !0) &&
              (Fx(ge ? We : P),
              ie.set([B, ra], { force3D: !0 }),
              (Xl = ie.quickSetter(B, $.a, Qt)),
              (ga = ie.quickSetter(ra, $.a, Qt))));
        }
        if (D) {
          var ve = D.vars.onUpdate,
            se = D.vars.onUpdateParams;
          D.eventCallback("onUpdate", function () {
            (k.update(0, 0, 1), ve && ve.apply(D, se || []));
          });
        }
        if (
          ((k.previous = function () {
            return Me[Me.indexOf(k) - 1];
          }),
          (k.next = function () {
            return Me[Me.indexOf(k) + 1];
          }),
          (k.revert = function (le, be) {
            if (!be) return k.kill(!0);
            var ce = le !== !1 || !k.enabled,
              ye = fa;
            ce !== k.isReverted &&
              (ce &&
                ((Gt = Math.max(me(), k.scroll.rec || 0)),
                (he = k.progress),
                (ml = u && u.progress())),
              Jt &&
                [Jt, It, B, ra].forEach(function (Tt) {
                  return (Tt.style.display = ce ? "none" : "block");
                }),
              ce && ((fa = k), k.update(ce)),
              x &&
                (!G || !k.isActive) &&
                (ce ? t2(x, Dt, Dl) : Zd(x, Dt, Ol(x), St)),
              ce || k.update(ce),
              (fa = ye),
              (k.isReverted = ce));
          }),
          (k.refresh = function (le, be, ce, ye) {
            if (!((fa || !k.enabled) && !be)) {
              if (x && le && jl) {
                $t(f, "scrollEnd", Ky);
                return;
              }
              (!wa && E && E(k),
                (fa = k),
                Ke.tween && !ce && (Ke.tween.kill(), (Ke.tween = 0)),
                Ae && Ae.pause(),
                T &&
                  u &&
                  (u.revert({ kill: !1 }).invalidate(),
                  u.getChildren
                    ? u.getChildren(!0, !0, !1).forEach(function (Zl) {
                        return Zl.vars.immediateRender && Zl.render(0, !0, !0);
                      })
                    : u.vars.immediateRender && u.render(0, !0, !0)),
                k.isReverted || k.revert(!0, !0),
                (k._subPinOffset = !1));
              var Tt = H(),
                ze = I(),
                dt = D ? D.duration() : tn(P, $),
                ut = it <= 0.01 || !it,
                Ne = 0,
                ke = ye || 0,
                Ge = Bi(ce) ? ce.end : i.end,
                ya = i.endTrigger || S,
                st = Bi(ce)
                  ? ce.start
                  : i.start || (i.start === 0 || !S ? 0 : x ? "0 0" : "0 100%"),
                _a = (k.pinnedContainer =
                  i.pinnedContainer && qa(i.pinnedContainer, k)),
                Qa = (S && Math.max(0, Me.indexOf(k))) || 0,
                gt = Qa,
                kt,
                yt,
                Oa,
                Vl,
                _t,
                Ce,
                Za,
                Pi,
                Ql,
                gl,
                yl,
                Cn,
                yi;
              for (
                ae &&
                Bi(ce) &&
                ((Cn = ie.getProperty(B, $.p)), (yi = ie.getProperty(ra, $.p)));
                gt-- > 0;
              )
                ((Ce = Me[gt]),
                  Ce.end || Ce.refresh(0, 1) || (fa = k),
                  (Za = Ce.pin),
                  Za &&
                    (Za === S || Za === x || Za === _a) &&
                    !Ce.isReverted &&
                    (gl || (gl = []), gl.unshift(Ce), Ce.revert(!0, !0)),
                  Ce !== Me[gt] && (Qa--, gt--));
              for (
                ma(st) && (st = st(k)),
                  st = c1(st, "start", k),
                  Be =
                    _1(
                      st,
                      S,
                      Tt,
                      $,
                      me(),
                      Jt,
                      B,
                      k,
                      ze,
                      de,
                      _e,
                      dt,
                      D,
                      k._startClamp && "_startClamp",
                    ) || (x ? -0.001 : 0),
                  ma(Ge) && (Ge = Ge(k)),
                  tl(Ge) &&
                    !Ge.indexOf("+=") &&
                    (~Ge.indexOf(" ")
                      ? (Ge = (tl(st) ? st.split(" ")[0] : "") + Ge)
                      : ((Ne = $c(Ge.substr(2), Tt)),
                        (Ge = tl(st)
                          ? st
                          : (D
                              ? ie.utils.mapRange(
                                  0,
                                  D.duration(),
                                  D.scrollTrigger.start,
                                  D.scrollTrigger.end,
                                  Be,
                                )
                              : Be) + Ne),
                        (ya = S))),
                  Ge = c1(Ge, "end", k),
                  Fe =
                    Math.max(
                      Be,
                      _1(
                        Ge || (ya ? "100% 0" : dt),
                        ya,
                        Tt,
                        $,
                        me() + Ne,
                        It,
                        ra,
                        k,
                        ze,
                        de,
                        _e,
                        dt,
                        D,
                        k._endClamp && "_endClamp",
                      ),
                    ) || -0.001,
                  Ne = 0,
                  gt = Qa;
                gt--;
              )
                ((Ce = Me[gt] || {}),
                  (Za = Ce.pin),
                  Za &&
                    Ce.start - Ce._pinPush <= Be &&
                    !D &&
                    Ce.end > 0 &&
                    ((kt =
                      Ce.end -
                      (k._startClamp ? Math.max(0, Ce.start) : Ce.start)),
                    ((Za === S && Ce.start - Ce._pinPush < Be) || Za === _a) &&
                      isNaN(st) &&
                      (Ne += kt * (1 - Ce.progress)),
                    Za === x && (ke += kt)));
              if (
                ((Be += Ne),
                (Fe += Ne),
                k._startClamp && (k._startClamp += Ne),
                k._endClamp &&
                  !wa &&
                  ((k._endClamp = Fe || -0.001), (Fe = Math.min(Fe, tn(P, $)))),
                (it = Fe - Be || ((Be -= 0.01) && 0.001)),
                ut &&
                  (he = ie.utils.clamp(0, 1, ie.utils.normalize(Be, Fe, Gt))),
                (k._pinPush = ke),
                Jt &&
                  Ne &&
                  ((kt = {}),
                  (kt[$.a] = "+=" + Ne),
                  _a && (kt[$.p] = "-=" + me()),
                  ie.set([Jt, It], kt)),
                x && !(gh && k.end >= tn(P, $)))
              )
                ((kt = Ol(x)),
                  (Vl = $ === Zt),
                  (Oa = me()),
                  (Ma = parseFloat(ft($.a)) + ke),
                  !dt &&
                    Fe > 1 &&
                    ((yl = (ge ? rt.scrollingElement || ll : P).style),
                    (yl = {
                      style: yl,
                      value: yl["overflow" + $.a.toUpperCase()],
                    }),
                    ge &&
                      Ol(We)["overflow" + $.a.toUpperCase()] !== "scroll" &&
                      (yl.style["overflow" + $.a.toUpperCase()] = "scroll")),
                  Zd(x, Dt, kt),
                  (At = Gc(x)),
                  (yt = Nn(x, !0)),
                  (Pi = _e && mi(P, Vl ? Na : Zt)()),
                  A
                    ? ((St = [A + $.os2, it + ke + Qt]),
                      (St.t = Dt),
                      (gt = A === Yt ? fo(x, $) + it + ke : 0),
                      gt &&
                        (St.push($.d, gt + Qt),
                        Dt.style.flexBasis !== "auto" &&
                          (Dt.style.flexBasis = gt + Qt)),
                      Qr(St),
                      _a &&
                        Me.forEach(function (Zl) {
                          Zl.pin === _a &&
                            Zl.vars.pinSpacing !== !1 &&
                            (Zl._subPinOffset = !0);
                        }),
                      _e && me(Gt))
                    : ((gt = fo(x, $)),
                      gt &&
                        Dt.style.flexBasis !== "auto" &&
                        (Dt.style.flexBasis = gt + Qt)),
                  _e &&
                    ((_t = {
                      top: yt.top + (Vl ? Oa - Be : Pi) + Qt,
                      left: yt.left + (Vl ? Pi : Oa - Be) + Qt,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (_t[Qi] = _t["max" + Pr] = Math.ceil(yt.width) + Qt),
                    (_t[Zi] = _t["max" + Vh] = Math.ceil(yt.height) + Qt),
                    (_t[Ml] =
                      _t[Ml + ss] =
                      _t[Ml + rs] =
                      _t[Ml + cs] =
                      _t[Ml + us] =
                        "0"),
                    (_t[Yt] = kt[Yt]),
                    (_t[Yt + ss] = kt[Yt + ss]),
                    (_t[Yt + rs] = kt[Yt + rs]),
                    (_t[Yt + cs] = kt[Yt + cs]),
                    (_t[Yt + us] = kt[Yt + us]),
                    (Ll = l2(Dl, _t, G)),
                    wa && me(0)),
                  u
                    ? ((Ql = u._initted),
                      Ld(1),
                      u.render(u.duration(), !0, !0),
                      (dl = ft($.a) - Ma + it + ke),
                      (pt = Math.abs(it - dl) > 1),
                      _e && pt && Ll.splice(Ll.length - 2, 2),
                      u.render(0, !0, !0),
                      Ql || u.invalidate(!0),
                      u.parent || u.totalTime(u.totalTime()),
                      Ld(0))
                    : (dl = it),
                  yl &&
                    (yl.value
                      ? (yl.style["overflow" + $.a.toUpperCase()] = yl.value)
                      : yl.style.removeProperty("overflow-" + $.a)));
              else if (S && me() && !D)
                for (yt = S.parentNode; yt && yt !== We;)
                  (yt._pinOffset &&
                    ((Be -= yt._pinOffset), (Fe -= yt._pinOffset)),
                    (yt = yt.parentNode));
              (gl &&
                gl.forEach(function (Zl) {
                  return Zl.revert(!1, !0);
                }),
                (k.start = Be),
                (k.end = Fe),
                (jt = Xt = wa ? Gt : me()),
                !D && !wa && (jt < Gt && me(Gt), (k.scroll.rec = 0)),
                k.revert(!1, !0),
                (ue = da()),
                ca && ((ee = -1), ca.restart(!0)),
                (fa = 0),
                u &&
                  fe &&
                  (u._initted || ml) &&
                  u.progress() !== ml &&
                  u.progress(ml || 0, !0).render(u.time(), !0, !0),
                (ut || he !== k.progress || D || T || (u && !u._initted)) &&
                  (u &&
                    !fe &&
                    (u._initted || he || u.vars.immediateRender !== !1) &&
                    u.totalProgress(
                      D && Be < -0.001 && !he
                        ? ie.utils.normalize(Be, Fe, 0)
                        : he,
                      !0,
                    ),
                  (k.progress = ut || (jt - Be) / it === he ? 0 : he)),
                x && A && (Dt._pinOffset = Math.round(k.progress * dl)),
                Ae && Ae.invalidate(),
                isNaN(Cn) ||
                  ((Cn -= ie.getProperty(B, $.p)),
                  (yi -= ie.getProperty(ra, $.p)),
                  Vc(B, $, Cn),
                  Vc(Jt, $, Cn - (ye || 0)),
                  Vc(ra, $, yi),
                  Vc(It, $, yi - (ye || 0))),
                ut && !wa && k.update(),
                _ && !wa && !fl && ((fl = !0), _(k), (fl = !1)));
            }
          }),
          (k.getVelocity = function () {
            return ((me() - Xt) / (da() - Ku)) * 1e3 || 0;
          }),
          (k.endAnimation = function () {
            (Vu(k.callbackAnimation),
              u &&
                (Ae
                  ? Ae.progress(1)
                  : u.paused()
                    ? fe || Vu(u, k.direction < 0, 1)
                    : Vu(u, u.reversed())));
          }),
          (k.labelToScroll = function (le) {
            return (
              (u &&
                u.labels &&
                (Be || k.refresh() || Be) +
                  (u.labels[le] / u.duration()) * it) ||
              0
            );
          }),
          (k.getTrailing = function (le) {
            var be = Me.indexOf(k),
              ce =
                k.direction > 0 ? Me.slice(0, be).reverse() : Me.slice(be + 1);
            return (
              tl(le)
                ? ce.filter(function (ye) {
                    return ye.vars.preventOverlaps === le;
                  })
                : ce
            ).filter(function (ye) {
              return k.direction > 0 ? ye.end <= Be : ye.start >= Fe;
            });
          }),
          (k.update = function (le, be, ce) {
            if (!(D && !ce && !le)) {
              var ye = wa === !0 ? Gt : k.scroll(),
                Tt = le ? 0 : (ye - Be) / it,
                ze = Tt < 0 ? 0 : Tt > 1 ? 1 : Tt || 0,
                dt = k.progress,
                ut,
                Ne,
                ke,
                Ge,
                ya,
                st,
                _a,
                Qa;
              if (
                (be &&
                  ((Xt = jt),
                  (jt = D ? me() : ye),
                  q && ((nn = Gl), (Gl = u && !fe ? u.totalProgress() : ze))),
                O &&
                  x &&
                  !fa &&
                  !qc &&
                  jl &&
                  (!ze && Be < ye + ((ye - Xt) / (da() - Ku)) * O
                    ? (ze = 1e-4)
                    : ze === 1 &&
                      Fe > ye + ((ye - Xt) / (da() - Ku)) * O &&
                      (ze = 0.9999)),
                ze !== dt && k.enabled)
              ) {
                if (
                  ((ut = k.isActive = !!ze && ze < 1),
                  (Ne = !!dt && dt < 1),
                  (st = ut !== Ne),
                  (ya = st || !!ze != !!dt),
                  (k.direction = ze > dt ? 1 : -1),
                  (k.progress = ze),
                  ya &&
                    !fa &&
                    ((ke = ze && !dt ? 0 : ze === 1 ? 1 : dt === 1 ? 2 : 3),
                    fe &&
                      ((Ge =
                        (!st && V[ke + 1] !== "none" && V[ke + 1]) || V[ke]),
                      (Qa =
                        u &&
                        (Ge === "complete" || Ge === "reset" || Ge in u)))),
                  J &&
                    (st || Qa) &&
                    (Qa || b || !u) &&
                    (ma(J)
                      ? J(k)
                      : k.getTrailing(J).forEach(function (Oa) {
                          return Oa.endAnimation();
                        })),
                  fe ||
                    (Ae && !fa && !qc
                      ? (Ae._dp._time - Ae._start !== Ae._time &&
                          Ae.render(Ae._dp._time - Ae._start),
                        Ae.resetTo
                          ? Ae.resetTo("totalProgress", ze, u._tTime / u._tDur)
                          : ((Ae.vars.totalProgress = ze),
                            Ae.invalidate().restart()))
                      : u && u.totalProgress(ze, !!(fa && (ue || le)))),
                  x)
                ) {
                  if ((le && A && (Dt.style[A + $.os2] = gi), !_e))
                    ua(Wu(Ma + dl * ze));
                  else if (ya) {
                    if (
                      ((_a =
                        !le && ze > dt && Fe + 1 > ye && ye + 1 >= tn(P, $)),
                      G)
                    )
                      if (!le && (ut || _a)) {
                        var gt = Nn(x, !0),
                          kt = ye - Be;
                        v1(
                          x,
                          We,
                          gt.top + ($ === Zt ? kt : 0) + Qt,
                          gt.left + ($ === Zt ? 0 : kt) + Qt,
                        );
                      } else v1(x, Dt);
                    (Qr(ut || _a ? Ll : At),
                      (pt && ze < 1 && ut) ||
                        ua(Ma + (ze === 1 && !_a ? dl : 0)));
                  }
                }
                (q && !Ke.tween && !fa && !qc && ca.restart(!0),
                  h &&
                    (st || (Z && ze && (ze < 1 || !Xd))) &&
                    _s(h.targets).forEach(function (Oa) {
                      return Oa.classList[ut || Z ? "add" : "remove"](
                        h.className,
                      );
                    }),
                  d && !fe && !le && d(k),
                  ya && !fa
                    ? (fe &&
                        (Qa &&
                          (Ge === "complete"
                            ? u.pause().totalProgress(1)
                            : Ge === "reset"
                              ? u.restart(!0).pause()
                              : Ge === "restart"
                                ? u.restart(!0)
                                : u[Ge]()),
                        d && d(k)),
                      (st || !Xd) &&
                        (p && st && Vd(k, p),
                        z[ke] && Vd(k, z[ke]),
                        Z && (ze === 1 ? k.kill(!1, 1) : (z[ke] = 0)),
                        st || ((ke = ze === 1 ? 1 : 3), z[ke] && Vd(k, z[ke]))),
                      F &&
                        !ut &&
                        Math.abs(k.getVelocity()) > (Fu(F) ? F : 2500) &&
                        (Vu(k.callbackAnimation),
                        Ae
                          ? Ae.progress(1)
                          : Vu(u, Ge === "reverse" ? 1 : !ze, 1)))
                    : fe && d && !fa && d(k));
              }
              if (ga) {
                var yt = D ? (ye / D.duration()) * (D._caScrollDist || 0) : ye;
                (Xl(yt + (B._isFlipped ? 1 : 0)), ga(yt));
              }
              pl && pl((-ye / D.duration()) * (D._caScrollDist || 0));
            }
          }),
          (k.enable = function (le, be) {
            k.enabled ||
              ((k.enabled = !0),
              $t(P, "resize", $u),
              ge || $t(P, "scroll", Dr),
              E && $t(f, "refreshInit", E),
              le !== !1 && ((k.progress = he = 0), (jt = Xt = ee = me())),
              be !== !1 && k.refresh());
          }),
          (k.getTween = function (le) {
            return le && Ke ? Ke.tween : Ae;
          }),
          (k.setPositions = function (le, be, ce, ye) {
            if (D) {
              var Tt = D.scrollTrigger,
                ze = D.duration(),
                dt = Tt.end - Tt.start;
              ((le = Tt.start + (dt * le) / ze),
                (be = Tt.start + (dt * be) / ze));
            }
            (k.refresh(
              !1,
              !1,
              {
                start: o1(le, ce && !!k._startClamp),
                end: o1(be, ce && !!k._endClamp),
              },
              ye,
            ),
              k.update());
          }),
          (k.adjustPinSpacing = function (le) {
            if (St && le) {
              var be = St.indexOf($.d) + 1;
              ((St[be] = parseFloat(St[be]) + le + Qt),
                (St[1] = parseFloat(St[1]) + le + Qt),
                Qr(St));
            }
          }),
          (k.disable = function (le, be) {
            if (
              (le !== !1 && k.revert(!0, !0),
              k.enabled &&
                ((k.enabled = k.isActive = !1),
                be || (Ae && Ae.pause()),
                (Gt = 0),
                Oe && (Oe.uncache = 1),
                E && Ft(f, "refreshInit", E),
                ca &&
                  (ca.pause(), Ke.tween && Ke.tween.kill() && (Ke.tween = 0)),
                !ge))
            ) {
              for (var ce = Me.length; ce--;)
                if (Me[ce].scroller === P && Me[ce] !== k) return;
              (Ft(P, "resize", $u), ge || Ft(P, "scroll", Dr));
            }
          }),
          (k.kill = function (le, be) {
            (k.disable(le, be), Ae && !be && Ae.kill(), g && delete yh[g]);
            var ce = Me.indexOf(k);
            (ce >= 0 && Me.splice(ce, 1),
              ce === Ta && Ic > 0 && Ta--,
              (ce = 0),
              Me.forEach(function (ye) {
                return ye.scroller === k.scroller && (ce = 1);
              }),
              ce || wa || (k.scroll.rec = 0),
              u &&
                ((u.scrollTrigger = null),
                le && u.revert({ kill: !1 }),
                be || u.kill()),
              Jt &&
                [Jt, It, B, ra].forEach(function (ye) {
                  return ye.parentNode && ye.parentNode.removeChild(ye);
                }),
              os === k && (os = 0),
              x &&
                (Oe && (Oe.uncache = 1),
                (ce = 0),
                Me.forEach(function (ye) {
                  return ye.pin === x && ce++;
                }),
                ce || (Oe.spacer = 0)),
              i.onKill && i.onKill(k));
          }),
          Me.push(k),
          k.enable(!1, !1),
          Ul && Ul(k),
          u && u.add && !it)
        ) {
          var Ve = k.update;
          ((k.update = function () {
            ((k.update = Ve), De.cache++, Be || Fe || k.refresh());
          }),
            ie.delayedCall(0.01, k.update),
            (it = 0.01),
            (Be = Fe = 0));
        } else k.refresh();
        x && e2();
      }),
      (f.register = function (i) {
        return (
          Rr ||
            ((ie = i || Ly()),
            Yy() && window.document && f.enable(),
            (Rr = Ju)),
          Rr
        );
      }),
      (f.defaults = function (i) {
        if (i) for (var u in i) Lc[u] = i[u];
        return Lc;
      }),
      (f.disable = function (i, u) {
        ((Ju = 0),
          Me.forEach(function (d) {
            return d[u ? "kill" : "disable"](i);
          }),
          Ft(je, "wheel", Dr),
          Ft(rt, "scroll", Dr),
          clearInterval(Uc),
          Ft(rt, "touchcancel", Pl),
          Ft(We, "touchstart", Pl),
          Hc(Ft, rt, "pointerdown,touchstart,mousedown", f1),
          Hc(Ft, rt, "pointerup,touchend,mouseup", d1),
          oo.kill(),
          Bc(Ft));
        for (var o = 0; o < De.length; o += 3)
          (Yc(Ft, De[o], De[o + 1]), Yc(Ft, De[o], De[o + 2]));
      }),
      (f.enable = function () {
        if (
          ((je = window),
          (rt = document),
          (ll = rt.documentElement),
          (We = rt.body),
          ie &&
            ((_s = ie.utils.toArray),
            (ns = ie.utils.clamp),
            (ph = ie.core.context || Pl),
            (Ld = ie.core.suppressOverwrites || Pl),
            (Yh = je.history.scrollRestoration || "auto"),
            (_h = je.pageYOffset || 0),
            ie.core.globals("ScrollTrigger", f),
            We))
        ) {
          ((Ju = 1),
            (Vr = document.createElement("div")),
            (Vr.style.height = "100vh"),
            (Vr.style.position = "absolute"),
            $y(),
            Kx(),
            Ct.register(ie),
            (f.isTouch = Ct.isTouch),
            (ai =
              Ct.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (mh = Ct.isTouch === 1),
            $t(je, "wheel", Dr),
            (Hh = [je, rt, ll, We]),
            ie.matchMedia
              ? ((f.matchMedia = function (p) {
                  var _ = ie.matchMedia(),
                    b;
                  for (b in p) _.add(b, p[b]);
                  return _;
                }),
                ie.addEventListener("matchMediaInit", function () {
                  (Wy(), Zh());
                }),
                ie.addEventListener("matchMediaRevert", function () {
                  return Jy();
                }),
                ie.addEventListener("matchMedia", function () {
                  (Yi(0, 1), Fi("matchMedia"));
                }),
                ie.matchMedia().add("(orientation: portrait)", function () {
                  return (Qd(), Qd);
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            Qd(),
            $t(rt, "scroll", Dr));
          var i = We.hasAttribute("style"),
            u = We.style,
            o = u.borderTopStyle,
            d = ie.core.Animation.prototype,
            h,
            g;
          for (
            d.revert ||
              Object.defineProperty(d, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              u.borderTopStyle = "solid",
              h = Nn(We),
              Zt.m = Math.round(h.top + Zt.sc()) || 0,
              Na.m = Math.round(h.left + Na.sc()) || 0,
              o ? (u.borderTopStyle = o) : u.removeProperty("border-top-style"),
              i || (We.setAttribute("style", ""), We.removeAttribute("style")),
              Uc = setInterval(p1, 250),
              ie.delayedCall(0.5, function () {
                return (qc = 0);
              }),
              $t(rt, "touchcancel", Pl),
              $t(We, "touchstart", Pl),
              Hc($t, rt, "pointerdown,touchstart,mousedown", f1),
              Hc($t, rt, "pointerup,touchend,mouseup", d1),
              hh = ie.utils.checkPrefix("transform"),
              eo.push(hh),
              Rr = da(),
              oo = ie.delayedCall(0.2, Yi).pause(),
              Ur = [
                rt,
                "visibilitychange",
                function () {
                  var p = je.innerWidth,
                    _ = je.innerHeight;
                  rt.hidden
                    ? ((u1 = p), (s1 = _))
                    : (u1 !== p || s1 !== _) && $u();
                },
                rt,
                "DOMContentLoaded",
                Yi,
                je,
                "load",
                Yi,
                je,
                "resize",
                $u,
              ],
              Bc($t),
              Me.forEach(function (p) {
                return p.enable(0, 1);
              }),
              g = 0;
            g < De.length;
            g += 3
          )
            (Yc(Ft, De[g], De[g + 1]), Yc(Ft, De[g], De[g + 2]));
        }
      }),
      (f.config = function (i) {
        "limitCallbacks" in i && (Xd = !!i.limitCallbacks);
        var u = i.syncInterval;
        ((u && clearInterval(Uc)) || ((Uc = u) && setInterval(p1, u)),
          "ignoreMobileResize" in i &&
            (mh = f.isTouch === 1 && i.ignoreMobileResize),
          "autoRefreshEvents" in i &&
            (Bc(Ft) || Bc($t, i.autoRefreshEvents || "none"),
            (qy = (i.autoRefreshEvents + "").indexOf("resize") === -1)));
      }),
      (f.scrollerProxy = function (i, u) {
        var o = qa(i),
          d = De.indexOf(o),
          h = Ji(o);
        (~d && De.splice(d, h ? 6 : 2),
          u && (h ? an.unshift(je, u, We, u, ll, u) : an.unshift(o, u)));
      }),
      (f.clearMatchMedia = function (i) {
        Me.forEach(function (u) {
          return u._ctx && u._ctx.query === i && u._ctx.kill(!0, !0);
        });
      }),
      (f.isInViewport = function (i, u, o) {
        var d = (tl(i) ? qa(i) : i).getBoundingClientRect(),
          h = d[o ? Qi : Zi] * u || 0;
        return o
          ? d.right - h > 0 && d.left + h < je.innerWidth
          : d.bottom - h > 0 && d.top + h < je.innerHeight;
      }),
      (f.positionInViewport = function (i, u, o) {
        tl(i) && (i = qa(i));
        var d = i.getBoundingClientRect(),
          h = d[o ? Qi : Zi],
          g =
            u == null
              ? h / 2
              : u in ho
                ? ho[u] * h
                : ~u.indexOf("%")
                  ? (parseFloat(u) * h) / 100
                  : parseFloat(u) || 0;
        return o ? (d.left + g) / je.innerWidth : (d.top + g) / je.innerHeight;
      }),
      (f.killAll = function (i) {
        if (
          (Me.slice(0).forEach(function (o) {
            return o.vars.id !== "ScrollSmoother" && o.kill();
          }),
          i !== !0)
        ) {
          var u = Wi.killAll || [];
          ((Wi = {}),
            u.forEach(function (o) {
              return o();
            }));
        }
      }),
      f
    );
  })();
qe.version = "3.14.2";
qe.saveStyles = function (f) {
  return f
    ? _s(f).forEach(function (l) {
        if (l && l.style) {
          var r = el.indexOf(l);
          (r >= 0 && el.splice(r, 5),
            el.push(
              l,
              l.style.cssText,
              l.getBBox && l.getAttribute("transform"),
              ie.core.getCache(l),
              ph(),
            ));
        }
      })
    : el;
};
qe.revert = function (f, l) {
  return Zh(!f, l);
};
qe.create = function (f, l) {
  return new qe(f, l);
};
qe.refresh = function (f) {
  return f ? $u(!0) : (Rr || qe.register()) && Yi(!0);
};
qe.update = function (f) {
  return ++De.cache && kn(f === !0 ? 2 : 0);
};
qe.clearScrollMemory = Fy;
qe.maxScroll = function (f, l) {
  return tn(f, l ? Na : Zt);
};
qe.getScrollFunc = function (f, l) {
  return mi(qa(f), l ? Na : Zt);
};
qe.getById = function (f) {
  return yh[f];
};
qe.getAll = function () {
  return Me.filter(function (f) {
    return f.vars.id !== "ScrollSmoother";
  });
};
qe.isScrolling = function () {
  return !!jl;
};
qe.snapDirectional = Qh;
qe.addEventListener = function (f, l) {
  var r = Wi[f] || (Wi[f] = []);
  ~r.indexOf(l) || r.push(l);
};
qe.removeEventListener = function (f, l) {
  var r = Wi[f],
    i = r && r.indexOf(l);
  i >= 0 && r.splice(i, 1);
};
qe.batch = function (f, l) {
  var r = [],
    i = {},
    u = l.interval || 0.016,
    o = l.batchMax || 1e9,
    d = function (p, _) {
      var b = [],
        S = [],
        x = ie
          .delayedCall(u, function () {
            (_(b, S), (b = []), (S = []));
          })
          .pause();
      return function (A) {
        (b.length || x.restart(!0),
          b.push(A.trigger),
          S.push(A),
          o <= b.length && x.progress(1));
      };
    },
    h;
  for (h in l)
    i[h] =
      h.substr(0, 2) === "on" && ma(l[h]) && h !== "onRefreshInit"
        ? d(h, l[h])
        : l[h];
  return (
    ma(o) &&
      ((o = o()),
      $t(qe, "refresh", function () {
        return (o = l.batchMax());
      })),
    _s(f).forEach(function (g) {
      var p = {};
      for (h in i) p[h] = i[h];
      ((p.trigger = g), r.push(qe.create(p)));
    }),
    r
  );
};
var x1 = function (l, r, i, u) {
    return (
      r > u ? l(u) : r < 0 && l(0),
      i > u ? (u - r) / (i - r) : i < 0 ? r / (r - i) : 1
    );
  },
  Kd = function f(l, r) {
    (r === !0
      ? l.style.removeProperty("touch-action")
      : (l.style.touchAction =
          r === !0
            ? "auto"
            : r
              ? "pan-" + r + (Ct.isTouch ? " pinch-zoom" : "")
              : "none"),
      l === ll && f(We, r));
  },
  Qc = { auto: 1, scroll: 1 },
  i2 = function (l) {
    var r = l.event,
      i = l.target,
      u = l.axis,
      o = (r.changedTouches ? r.changedTouches[0] : r).target,
      d = o._gsap || ie.core.getCache(o),
      h = da(),
      g;
    if (!d._isScrollT || h - d._isScrollT > 2e3) {
      for (
        ;
        o &&
        o !== We &&
        ((o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth) ||
          !(Qc[(g = Ol(o)).overflowY] || Qc[g.overflowX]));
      )
        o = o.parentNode;
      ((d._isScroll =
        o &&
        o !== i &&
        !Ji(o) &&
        (Qc[(g = Ol(o)).overflowY] || Qc[g.overflowX])),
        (d._isScrollT = h));
    }
    (d._isScroll || u === "x") && (r.stopPropagation(), (r._gsapAllow = !0));
  },
  Iy = function (l, r, i, u) {
    return Ct.create({
      target: l,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: r,
      onWheel: (u = u && i2),
      onPress: u,
      onDrag: u,
      onScroll: u,
      onEnable: function () {
        return i && $t(rt, Ct.eventTypes[0], T1, !1, !0);
      },
      onDisable: function () {
        return Ft(rt, Ct.eventTypes[0], T1, !0);
      },
    });
  },
  r2 = /(input|label|select|textarea)/i,
  S1,
  T1 = function (l) {
    var r = r2.test(l.target.tagName);
    (r || S1) && ((l._gsapAllow = !0), (S1 = r));
  },
  u2 = function (l) {
    (Bi(l) || (l = {}),
      (l.preventDefault = l.isNormalizer = l.allowClicks = !0),
      l.type || (l.type = "wheel,touch"),
      (l.debounce = !!l.debounce),
      (l.id = l.id || "normalizer"));
    var r = l,
      i = r.normalizeScrollX,
      u = r.momentum,
      o = r.allowNestedScroll,
      d = r.onRelease,
      h,
      g,
      p = qa(l.target) || ll,
      _ = ie.core.globals().ScrollSmoother,
      b = _ && _.get(),
      S =
        ai &&
        ((l.content && qa(l.content)) ||
          (b && l.content !== !1 && !b.smooth() && b.content())),
      x = mi(p, Zt),
      A = mi(p, Na),
      T = 1,
      O =
        (Ct.isTouch && je.visualViewport
          ? je.visualViewport.scale * je.visualViewport.width
          : je.outerWidth) / je.innerWidth,
      L = 0,
      X = ma(u)
        ? function () {
            return u(h);
          }
        : function () {
            return u || 2.8;
          },
      Z,
      q,
      G = Iy(p, l.type, !0, o),
      W = function () {
        return (q = !1);
      },
      D = Pl,
      F = Pl,
      J = function () {
        ((g = tn(p, Zt)),
          (F = ns(ai ? 1 : 0, g)),
          i && (D = ns(0, tn(p, Na))),
          (Z = Ki));
      },
      $ = function () {
        ((S._gsap.y = Wu(parseFloat(S._gsap.y) + x.offset) + "px"),
          (S.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(S._gsap.y) +
            ", 0, 1)"),
          (x.offset = x.cacheID = 0));
      },
      fe = function () {
        if (q) {
          requestAnimationFrame(W);
          var ae = Wu(h.deltaY / 2),
            de = F(x.v - ae);
          if (S && de !== x.v + x.offset) {
            x.offset = de - x.v;
            var k = Wu((parseFloat(S && S._gsap.y) || 0) - x.offset);
            ((S.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              k +
              ", 0, 1)"),
              (S._gsap.y = k + "px"),
              (x.cacheID = De.cache),
              kn());
          }
          return !0;
        }
        (x.offset && $(), (q = !0));
      },
      P,
      xe,
      ge,
      _e,
      z = function () {
        (J(),
          P.isActive() &&
            P.vars.scrollY > g &&
            (x() > g ? P.progress(1) && x(g) : P.resetTo("scrollY", g)));
      };
    return (
      S && ie.set(S, { y: "+=0" }),
      (l.ignoreCheck = function (V) {
        return (
          (ai && V.type === "touchmove" && fe()) ||
          (T > 1.05 && V.type !== "touchstart") ||
          h.isGesturing ||
          (V.touches && V.touches.length > 1)
        );
      }),
      (l.onPress = function () {
        q = !1;
        var V = T;
        ((T = Wu(((je.visualViewport && je.visualViewport.scale) || 1) / O)),
          P.pause(),
          V !== T && Kd(p, T > 1.01 ? !0 : i ? !1 : "x"),
          (xe = A()),
          (ge = x()),
          J(),
          (Z = Ki));
      }),
      (l.onRelease = l.onGestureStart =
        function (V, ae) {
          if ((x.offset && $(), !ae)) _e.restart(!0);
          else {
            De.cache++;
            var de = X(),
              k,
              E;
            (i &&
              ((k = A()),
              (E = k + (de * 0.05 * -V.velocityX) / 0.227),
              (de *= x1(A, k, E, tn(p, Na))),
              (P.vars.scrollX = D(E))),
              (k = x()),
              (E = k + (de * 0.05 * -V.velocityY) / 0.227),
              (de *= x1(x, k, E, tn(p, Zt))),
              (P.vars.scrollY = F(E)),
              P.invalidate().duration(de).play(0.01),
              ((ai && P.vars.scrollY >= g) || k >= g - 1) &&
                ie.to({}, { onUpdate: z, duration: de }));
          }
          d && d(V);
        }),
      (l.onWheel = function () {
        (P._ts && P.pause(), da() - L > 1e3 && ((Z = 0), (L = da())));
      }),
      (l.onChange = function (V, ae, de, k, E) {
        if (
          (Ki !== Z && J(),
          ae &&
            i &&
            A(D(k[2] === ae ? xe + (V.startX - V.x) : A() + ae - k[1])),
          de)
        ) {
          x.offset && $();
          var H = E[2] === de,
            I = H ? ge + V.startY - V.y : x() + de - E[1],
            ee = F(I);
          (H && I !== ee && (ge += ee - I), x(ee));
        }
        (de || ae) && kn();
      }),
      (l.onEnable = function () {
        (Kd(p, i ? !1 : "x"),
          qe.addEventListener("refresh", z),
          $t(je, "resize", z),
          x.smooth &&
            ((x.target.style.scrollBehavior = "auto"),
            (x.smooth = A.smooth = !1)),
          G.enable());
      }),
      (l.onDisable = function () {
        (Kd(p, !0),
          Ft(je, "resize", z),
          qe.removeEventListener("refresh", z),
          G.kill());
      }),
      (l.lockAxis = l.lockAxis !== !1),
      (h = new Ct(l)),
      (h.iOS = ai),
      ai && !x() && x(1),
      ai && ie.ticker.add(Pl),
      (_e = h._dc),
      (P = ie.to(h, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: i ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: Py(x, x(), function () {
            return P.pause();
          }),
        },
        onUpdate: kn,
        onComplete: _e.vars.onComplete,
      })),
      h
    );
  };
qe.sort = function (f) {
  if (ma(f)) return Me.sort(f);
  var l = je.pageYOffset || 0;
  return (
    qe.getAll().forEach(function (r) {
      return (r._sortY = r.trigger
        ? l + r.trigger.getBoundingClientRect().top
        : r.start + je.innerHeight);
    }),
    Me.sort(
      f ||
        function (r, i) {
          return (
            (r.vars.refreshPriority || 0) * -1e6 +
            (r.vars.containerAnimation ? 1e6 : r._sortY) -
            ((i.vars.containerAnimation ? 1e6 : i._sortY) +
              (i.vars.refreshPriority || 0) * -1e6)
          );
        },
    )
  );
};
qe.observe = function (f) {
  return new Ct(f);
};
qe.normalizeScroll = function (f) {
  if (typeof f > "u") return Sa;
  if (f === !0 && Sa) return Sa.enable();
  if (f === !1) {
    (Sa && Sa.kill(), (Sa = f));
    return;
  }
  var l = f instanceof Ct ? f : u2(f);
  return (
    Sa && Sa.target === l.target && Sa.kill(),
    Ji(l.target) && (Sa = l),
    l
  );
};
qe.core = {
  _getVelocityProp: dh,
  _inputObserver: Iy,
  _scrollers: De,
  _proxies: an,
  bridge: {
    ss: function () {
      (jl || Fi("scrollStart"), (jl = da()));
    },
    ref: function () {
      return fa;
    },
  },
};
Ly() && ie.registerPlugin(qe);
var Te = bh();
const s2 = (f) => f.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  c2 = (f) =>
    f.replace(/^([A-Z])|[\s-_]+(\w)/g, (l, r, i) =>
      i ? i.toUpperCase() : r.toLowerCase(),
    ),
  w1 = (f) => {
    const l = c2(f);
    return l.charAt(0).toUpperCase() + l.slice(1);
  },
  e_ = (...f) =>
    f
      .filter((l, r, i) => !!l && l.trim() !== "" && i.indexOf(l) === r)
      .join(" ")
      .trim(),
  o2 = (f) => {
    for (const l in f)
      if (l.startsWith("aria-") || l === "role" || l === "title") return !0;
  };
var f2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const d2 = Te.forwardRef(
  (
    {
      color: f = "currentColor",
      size: l = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: i,
      className: u = "",
      children: o,
      iconNode: d,
      ...h
    },
    g,
  ) =>
    Te.createElement(
      "svg",
      {
        ref: g,
        ...f2,
        width: l,
        height: l,
        stroke: f,
        strokeWidth: i ? (Number(r) * 24) / Number(l) : r,
        className: e_("lucide", u),
        ...(!o && !o2(h) && { "aria-hidden": "true" }),
        ...h,
      },
      [
        ...d.map(([p, _]) => Te.createElement(p, _)),
        ...(Array.isArray(o) ? o : [o]),
      ],
    ),
);
const Kt = (f, l) => {
  const r = Te.forwardRef(({ className: i, ...u }, o) =>
    Te.createElement(d2, {
      ref: o,
      iconNode: l,
      className: e_(`lucide-${s2(w1(f))}`, `lucide-${f}`, i),
      ...u,
    }),
  );
  return ((r.displayName = w1(f)), r);
};
const h2 = [
    ["path", { d: "M7 7h10v10", key: "1tivn9" }],
    ["path", { d: "M7 17 17 7", key: "1vkiza" }],
  ],
  Xa = Kt("arrow-up-right", h2);
const m2 = [
    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ],
  t_ = Kt("circle-check-big", m2);
const p2 = [
    ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
    ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
    ["path", { d: "m14.5 4-5 16", key: "e7oirm" }],
  ],
  g2 = Kt("code-xml", p2);
const y2 = [
    ["path", { d: "M12 15V3", key: "m9g1x1" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }],
  ],
  _2 = Kt("download", y2);
const v2 = [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    [
      "path",
      {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        key: "a6xqqp",
      },
    ],
  ],
  a_ = Kt("external-link", v2);
const b2 = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    [
      "rect",
      { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
    ],
  ],
  x2 = Kt("mail", b2);
const S2 = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  T2 = Kt("map-pin", S2);
const w2 = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  E2 = Kt("menu", w2);
const N2 = [
    [
      "path",
      {
        d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
        key: "1sd12s",
      },
    ],
  ],
  l_ = Kt("message-circle", N2);
const A2 = [
    [
      "path",
      {
        d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
        key: "18887p",
      },
    ],
  ],
  k2 = Kt("message-square", A2);
const M2 = [
    [
      "rect",
      { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" },
    ],
    ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
    ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }],
  ],
  O2 = Kt("monitor", M2);
const z2 = [
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
    ],
    ["path", { d: "M3 9h18", key: "1pudct" }],
    ["path", { d: "M9 21V9", key: "1oto5p" }],
  ],
  C2 = Kt("panels-top-left", z2);
const j2 = [
    [
      "path",
      {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
        key: "1a8usu",
      },
    ],
    ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
  ],
  D2 = Kt("pencil", j2);
const R2 = [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v",
      },
    ],
  ],
  U2 = Kt("phone", R2);
const q2 = [
    [
      "path",
      {
        d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
        key: "rib7q0",
      },
    ],
    [
      "path",
      {
        d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
        key: "1ymkrd",
      },
    ],
  ],
  B2 = Kt("quote", q2);
const H2 = [
    [
      "path",
      {
        d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
        key: "m3kijz",
      },
    ],
    [
      "path",
      {
        d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
        key: "1fmvmk",
      },
    ],
    ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }],
    ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
  ],
  n_ = Kt("rocket", H2);
const Y2 = [
    [
      "path",
      {
        d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
        key: "1ffxy3",
      },
    ],
    ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
  ],
  L2 = Kt("send", Y2);
const X2 = [
    ["path", { d: "M16 7h6v6", key: "box55l" }],
    ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }],
  ],
  G2 = Kt("trending-up", X2);
const V2 = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  i_ = Kt("x", V2);
let E1 = typeof document < "u" ? Te.useLayoutEffect : Te.useEffect,
  N1 = (f) => f && !Array.isArray(f) && typeof f == "object",
  Zc = [],
  Q2 = {},
  r_ = te;
const Aa = (f, l = Zc) => {
  let r = Q2;
  (N1(f)
    ? ((r = f), (f = null), (l = "dependencies" in r ? r.dependencies : Zc))
    : N1(l) && ((r = l), (l = "dependencies" in r ? r.dependencies : Zc)),
    f &&
      typeof f != "function" &&
      console.warn("First parameter must be a function or config object"));
  const { scope: i, revertOnUpdate: u } = r,
    o = Te.useRef(!1),
    d = Te.useRef(r_.context(() => {}, i)),
    h = Te.useRef((p) => d.current.add(null, p)),
    g = l && l.length && !u;
  return (
    g && E1(() => ((o.current = !0), () => d.current.revert()), Zc),
    E1(() => {
      if ((f && d.current.add(f, i), !g || !o.current))
        return () => d.current.revert();
    }, l),
    { context: d.current, contextSafe: h.current }
  );
};
Aa.register = (f) => {
  r_ = f;
};
Aa.headless = !0;
const A1 = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ],
  Z2 = () => {
    const [f, l] = Te.useState(!1),
      [r, i] = Te.useState(!1),
      u = Te.useRef(null),
      o = Te.useRef(null),
      d = "mobile-nav-menu";
    return (
      Te.useEffect(() => {
        const h = () => i(window.scrollY > 50);
        return (
          window.addEventListener("scroll", h),
          () => window.removeEventListener("scroll", h)
        );
      }, []),
      Te.useEffect(() => {
        const h = (g) => {
          g.key === "Escape" && f && l(!1);
        };
        return (
          window.addEventListener("keydown", h),
          () => window.removeEventListener("keydown", h)
        );
      }, [f]),
      Aa(
        () => {
          const h = te.timeline({ defaults: { ease: "power3.out" } });
          (h.fromTo(
            ".anim-nav-bar",
            { y: -60, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
          ),
            h.fromTo(
              ".anim-nav-logo",
              { opacity: 0, x: -20 },
              { opacity: 1, x: 0, duration: 0.6 },
              "-=0.4",
            ),
            h.fromTo(
              ".anim-nav-link",
              { y: -15, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 },
              "-=0.3",
            ),
            h.fromTo(
              ".anim-nav-cta",
              { opacity: 0, x: 20 },
              { opacity: 1, x: 0, duration: 0.5 },
              "-=0.4",
            ),
            document.querySelectorAll(".anim-nav-link").forEach((g) => {
              const p = g.querySelector(".nav-underline");
              (g.addEventListener("mouseenter", () =>
                te.to(p, { scaleX: 1, duration: 0.25, ease: "power2.out" }),
              ),
                g.addEventListener("mouseleave", () =>
                  te.to(p, { scaleX: 0, duration: 0.2, ease: "power2.in" }),
                ));
            }));
        },
        { scope: u },
      ),
      Aa(
        () => {
          te.to(".anim-nav-bar", {
            borderBottomColor: r ? "rgba(0,0,0,0.12)" : "rgba(0,0,0,0)",
            backdropFilter: r ? "blur(16px)" : "blur(0px)",
            backgroundColor: r
              ? "rgba(255,255,255,0.92)"
              : "rgba(255,255,255,0)",
            duration: 0.35,
            ease: "power2.out",
          });
        },
        { dependencies: [r], scope: u },
      ),
      Aa(
        () => {
          f &&
            o.current &&
            (te.fromTo(
              o.current,
              { opacity: 0, y: -12, clipPath: "inset(0 0 100% 0)" },
              {
                opacity: 1,
                y: 0,
                clipPath: "inset(0 0 0% 0)",
                duration: 0.4,
                ease: "power3.out",
              },
            ),
            te.fromTo(
              o.current.querySelectorAll(".mobile-link"),
              { x: -24, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: 0.35,
                stagger: 0.07,
                ease: "power2.out",
                delay: 0.1,
              },
            ));
        },
        { dependencies: [f] },
      ),
      y.jsxs("header", {
        ref: u,
        className: "fixed top-0 left-0 right-0 z-50",
        children: [
          y.jsxs("div", {
            className:
              "anim-nav-bar flex items-center justify-between px-5 sm:px-8 md:px-14 py-5 border-b border-transparent",
            style: { transition: "none" },
            children: [
              y.jsxs("a", {
                href: "#home",
                className: "anim-nav-logo flex items-center gap-2 group",
                children: [
                  y.jsx("span", {
                    className:
                      "w-7 h-7 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-transform duration-200",
                    children: y.jsx("span", {
                      className: "text-white font-black text-[11px]",
                      "aria-hidden": "true",
                      children: "A",
                    }),
                  }),
                  y.jsx("span", {
                    className:
                      "text-xs font-semibold tracking-[0.25em] uppercase text-black",
                    children: "Md. Ariful Islam",
                  }),
                ],
              }),
              y.jsx("ul", {
                className: "hidden md:flex items-center gap-8",
                role: "list",
                children: A1.map((h) =>
                  y.jsx(
                    "li",
                    {
                      children: y.jsxs("a", {
                        href: h.href,
                        className:
                          "anim-nav-link relative flex flex-col text-xs font-medium tracking-[0.2em] uppercase text-black/50 hover:text-black transition-colors duration-200 pb-0.5",
                        children: [
                          h.label,
                          y.jsx("span", {
                            className:
                              "nav-underline absolute -bottom-0.5 left-0 w-full h-px bg-black origin-left",
                            style: { transform: "scaleX(0)" },
                            "aria-hidden": "true",
                          }),
                        ],
                      }),
                    },
                    h.href,
                  ),
                ),
              }),
              y.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  y.jsxs("a", {
                    href: "#contact",
                    className:
                      "anim-nav-cta group hidden md:flex items-center gap-2 bg-black text-white text-xs font-bold tracking-[0.2em] uppercase px-5 py-2.5 hover:bg-black/80 transition-colors",
                    children: [
                      "Let's Talk",
                      y.jsx(Xa, {
                        className:
                          "h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform",
                        "aria-hidden": "true",
                      }),
                    ],
                  }),
                  y.jsx("button", {
                    className:
                      "anim-nav-cta md:hidden p-2 border border-black/15 hover:border-black hover:bg-black hover:text-white transition-all duration-200 text-black",
                    onClick: () => l(!f),
                    "aria-label": "Toggle navigation menu",
                    "aria-expanded": f,
                    "aria-controls": d,
                    children: f
                      ? y.jsx(i_, {
                          className: "h-4 w-4",
                          "aria-hidden": "true",
                        })
                      : y.jsx(E2, {
                          className: "h-4 w-4",
                          "aria-hidden": "true",
                        }),
                  }),
                ],
              }),
            ],
          }),
          f &&
            y.jsx("div", {
              id: d,
              ref: o,
              className: "md:hidden bg-white border-b border-black/10",
              role: "navigation",
              "aria-label": "Mobile navigation",
              children: y.jsxs("ul", {
                className: "flex flex-col px-8 py-4",
                role: "list",
                children: [
                  A1.map((h) =>
                    y.jsx(
                      "li",
                      {
                        className: "border-b border-black/5 last:border-0",
                        children: y.jsxs("a", {
                          href: h.href,
                          className:
                            "mobile-link flex items-center justify-between py-4 text-xs font-semibold tracking-[0.25em] uppercase text-black/50 hover:text-black transition-colors",
                          onClick: () => l(!1),
                          children: [
                            h.label,
                            y.jsx(Xa, {
                              className: "h-3.5 w-3.5 opacity-30",
                              "aria-hidden": "true",
                            }),
                          ],
                        }),
                      },
                      h.href,
                    ),
                  ),
                  y.jsx("li", {
                    className: "pt-4",
                    children: y.jsxs("a", {
                      href: "#contact",
                      className:
                        "mobile-link flex items-center justify-center gap-2 bg-black text-white text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 w-full hover:bg-black/80 transition-colors",
                      onClick: () => l(!1),
                      children: [
                        "Let's Talk",
                        y.jsx(Xa, {
                          className: "h-3 w-3",
                          "aria-hidden": "true",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
        ],
      })
    );
  },
  _o = ({ className: f = "h-5 w-5", ...l }) =>
    y.jsx("svg", {
      className: f,
      fill: "currentColor",
      viewBox: "0 0 24 24",
      ...l,
      children: y.jsx("path", {
        d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
      }),
    }),
  u_ = ({ className: f = "h-5 w-5", ...l }) =>
    y.jsx("svg", {
      className: f,
      fill: "currentColor",
      viewBox: "0 0 24 24",
      ...l,
      children: y.jsx("path", {
        d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
      }),
    }),
  K2 = () => {
    const f = Te.useRef();
    return (
      Aa(
        () => {
          const l = te.timeline({ defaults: { ease: "power4.out" } });
          (l.fromTo(
            ".anim-eyebrow",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6 },
          ),
            l.fromTo(
              ".anim-word",
              { yPercent: 110, opacity: 0, rotationZ: 2 },
              {
                yPercent: 0,
                opacity: 1,
                rotationZ: 0,
                duration: 0.9,
                stagger: 0.12,
              },
              "-=0.2",
            ),
            l.fromTo(
              ".anim-body",
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7 },
              "-=0.4",
            ),
            l.fromTo(
              ".anim-cta",
              { y: 30, opacity: 0, scale: 0.95 },
              { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1 },
              "-=0.4",
            ),
            l.fromTo(
              ".anim-image-wrap",
              { clipPath: "inset(0 100% 0 0)" },
              {
                clipPath: "inset(0 0% 0 0)",
                duration: 1.1,
                ease: "power3.inOut",
              },
              "-=0.8",
            ),
            l.fromTo(
              ".anim-stat",
              { y: 40, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 },
              "-=0.5",
            ),
            l.fromTo(
              ".anim-ticker",
              { opacity: 0 },
              { opacity: 1, duration: 0.6 },
              "-=0.2",
            ),
            l.fromTo(
              ".anim-scroll-line",
              { scaleY: 0, transformOrigin: "top center" },
              { scaleY: 1, duration: 0.8, ease: "power2.out" },
              "-=0.4",
            ),
            te.to(".anim-image-wrap img", {
              y: -10,
              duration: 4,
              repeat: -1,
              yoyo: !0,
              ease: "sine.inOut",
              delay: 1.5,
            }));
          const r = document.querySelector(".anim-right-panel");
          if (r) {
            const i = (o) => {
                const d = r.getBoundingClientRect(),
                  h = (o.clientX - d.left) / d.width - 0.5,
                  g = (o.clientY - d.top) / d.height - 0.5;
                te.to(r, {
                  rotationY: h * 6,
                  rotationX: -g * 4,
                  transformPerspective: 900,
                  duration: 0.6,
                  ease: "power2.out",
                });
              },
              u = () =>
                te.to(r, {
                  rotationY: 0,
                  rotationX: 0,
                  duration: 0.8,
                  ease: "power3.out",
                });
            return (
              r.addEventListener("mousemove", i),
              r.addEventListener("mouseleave", u),
              () => {
                (r.removeEventListener("mousemove", i),
                  r.removeEventListener("mouseleave", u));
              }
            );
          }
        },
        { scope: f },
      ),
      y.jsxs("section", {
        id: "home",
        ref: f,
        className:
          "min-h-screen bg-white text-black font-sans overflow-hidden flex flex-col",
        children: [
          y.jsxs("div", {
            className:
              "flex-1 grid grid-cols-1 xl:grid-cols-[1fr_440px] min-h-0 px-5 pt-28 pb-8 sm:px-8 sm:pt-32 sm:pb-12 md:px-14 md:pt-36 md:pb-16 lg:px-20 lg:py-20 xl:px-24 xl:py-24 gap-8 xl:gap-12 items-center",
            children: [
              y.jsxs("div", {
                className:
                  "flex flex-col justify-between xl:border-r border-black/10 xl:pr-10",
                children: [
                  y.jsxs("div", {
                    className:
                      "space-y-6 sm:space-y-8 text-center xl:text-left flex flex-col items-center xl:items-start",
                    children: [
                      y.jsxs("div", {
                        className:
                          "anim-eyebrow hidden sm:flex items-center gap-3",
                        children: [
                          y.jsx("span", {
                            className: "w-6 h-px bg-black hidden xl:block",
                            "aria-hidden": "true",
                          }),
                          y.jsx("span", {
                            className:
                              "text-[9px] sm:text-[10px] font-semibold tracking-[0.3em] sm:tracking-[0.35em] uppercase text-black/40",
                            children: "Wix · Squarespace · Custom Code",
                          }),
                          y.jsx("span", {
                            className: "w-6 h-px bg-black xl:hidden",
                            "aria-hidden": "true",
                          }),
                        ],
                      }),
                      y.jsx("h1", {
                        className:
                          "space-y-0.5 overflow-hidden w-full text-left",
                        "aria-label": "Web Developer For Modern Businesses",
                        children: [
                          "Web Developer",
                          "For Modern",
                          "Businesses.",
                        ].map((l, r) =>
                          y.jsx(
                            "div",
                            {
                              className: "overflow-hidden",
                              children: y.jsx("span", {
                                className: `anim-word block text-[clamp(2.6rem,8vw,8.5rem)] font-black leading-[0.88] tracking-tight uppercase
                      ${r === 1 ? "text-white [-webkit-text-stroke:2px_black]" : "text-black"}`,
                                children: l,
                              }),
                            },
                            l,
                          ),
                        ),
                      }),
                      y.jsx("p", {
                        className:
                          "anim-body text-sm sm:text-base md:text-lg text-black/50 max-w-md sm:max-w-lg leading-relaxed",
                        children:
                          "I build high-converting websites on Wix, Squarespace, and custom code — designed to grow your business, attract clients, and make your brand look professional from day one.",
                      }),
                      y.jsxs("div", {
                        className:
                          "flex flex-wrap items-center justify-center xl:justify-start gap-4",
                        children: [
                          y.jsxs("a", {
                            href: "#projects",
                            className:
                              "anim-cta group flex items-center gap-3 bg-black text-white font-bold text-xs tracking-[0.2em] uppercase px-6 sm:px-8 py-3.5 sm:py-4 hover:bg-black/80 transition-colors",
                            children: [
                              "View Projects",
                              y.jsx(Xa, {
                                className:
                                  "h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform",
                                "aria-hidden": "true",
                              }),
                            ],
                          }),
                          y.jsxs("a", {
                            href: "/pritom-das-resume.pdf",
                            download: "Pritom_Das_Resume.pdf",
                            className:
                              "anim-cta group flex items-center gap-2 border border-black/20 hover:border-black hover:bg-black hover:text-white text-black text-xs font-semibold tracking-[0.2em] uppercase px-6 sm:px-8 py-3.5 sm:py-4 transition-all duration-200",
                            children: [
                              y.jsx(_2, {
                                className: "h-3.5 w-3.5",
                                "aria-hidden": "true",
                              }),
                              "Download CV",
                            ],
                          }),
                          y.jsxs("a", {
                            href: "#contact",
                            className:
                              "anim-cta flex items-center gap-2 text-black/50 hover:text-black text-xs font-semibold tracking-[0.2em] uppercase transition-colors py-3.5 sm:py-4",
                            children: [
                              "Contact Me",
                              y.jsx(Xa, {
                                className: "h-3.5 w-3.5",
                                "aria-hidden": "true",
                              }),
                            ],
                          }),
                        ],
                      }),
                      y.jsxs("div", {
                        className:
                          "anim-cta flex items-center gap-3 flex-wrap justify-center xl:justify-start",
                        children: [
                          y.jsx("a", {
                            href: "https://github.com/Pritom678",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "aria-label": "GitHub profile",
                            className:
                              "p-2.5 border border-black/15 hover:border-black hover:bg-black hover:text-white transition-all duration-200 text-black/50",
                            children: y.jsx(_o, {
                              className: "h-4 w-4",
                              "aria-hidden": "true",
                            }),
                          }),
                          y.jsx("a", {
                            href: "https://www.linkedin.com/in/pritom1722002",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "aria-label": "LinkedIn profile",
                            className:
                              "p-2.5 border border-black/15 hover:border-black hover:bg-black hover:text-white transition-all duration-200 text-black/50",
                            children: y.jsx(u_, {
                              className: "h-4 w-4",
                              "aria-hidden": "true",
                            }),
                          }),
                          y.jsx("span", {
                            className:
                              "text-[9px] text-black/30 tracking-[0.3em] uppercase ml-1",
                            children: "Based in Dhaka, BD",
                          }),
                        ],
                      }),
                    ],
                  }),
                  y.jsx("div", {
                    className:
                      "anim-cta hidden xl:flex items-center gap-0 mt-10",
                    children: [
                      "Wix",
                      "Squarespace",
                      "React",
                      "HTML/CSS",
                      "JavaScript",
                    ].map((l) =>
                      y.jsx(
                        "span",
                        {
                          className:
                            "text-[10px] font-semibold tracking-[0.2em] uppercase px-4 py-2 border-r border-black/10 first:border-l text-black/30 hover:text-black hover:bg-black/5 transition-colors cursor-default",
                          children: l,
                        },
                        l,
                      ),
                    ),
                  }),
                ],
              }),
              y.jsxs("div", {
                className:
                  "anim-right-panel flex flex-col border-t xl:border-t-0 w-full",
                style: { transformStyle: "preserve-3d" },
                children: [
                  y.jsxs("div", {
                    className:
                      "anim-image-wrap relative overflow-hidden bg-black/5",
                    style: {
                      minHeight: "280px",
                      maxHeight: "480px",
                      height: "45vw",
                    },
                    children: [
                      y.jsx("img", {
                        src: "https://res.cloudinary.com/do3iu9q7d/image/upload/w_880,f_auto,q_auto/v1767634713/profile_wnzqr0.jpg",
                        alt: "Pritom Das — Freelance Web Developer",
                        width: "440",
                        height: "560",
                        loading: "eager",
                        className:
                          "w-full h-full object-cover object-top grayscale",
                      }),
                      y.jsxs("div", {
                        className: "absolute top-4 right-4 text-right",
                        "aria-hidden": "true",
                        children: [
                          y.jsx("p", {
                            className:
                              "text-[8px] sm:text-[9px] font-semibold tracking-[0.3em] uppercase text-white/70",
                            children: "Available for projects",
                          }),
                          y.jsx("p", {
                            className:
                              "text-[8px] sm:text-[9px] font-semibold tracking-[0.3em] uppercase text-white/70 mt-0.5",
                            children: "Based in Dhaka",
                          }),
                        ],
                      }),
                      y.jsxs("div", {
                        className:
                          "absolute top-4 left-4 flex items-center gap-2",
                        "aria-hidden": "true",
                        children: [
                          y.jsxs("span", {
                            className: "relative flex h-2 w-2",
                            children: [
                              y.jsx("span", {
                                className:
                                  "animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60",
                              }),
                              y.jsx("span", {
                                className:
                                  "relative inline-flex rounded-full h-2 w-2 bg-white",
                              }),
                            ],
                          }),
                          y.jsx("span", {
                            className:
                              "text-[8px] sm:text-[9px] font-semibold tracking-widest uppercase text-white/70",
                            children: "Open to work",
                          }),
                        ],
                      }),
                      y.jsx("div", {
                        className:
                          "absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent",
                        "aria-hidden": "true",
                      }),
                    ],
                  }),
                  y.jsx("div", {
                    className: "grid grid-cols-2 border-t border-black/10",
                    children: [
                      { value: "7+", label: "Projects Built" },
                      { value: "24hr", label: "Response Time" },
                      { value: "3", label: "Platforms" },
                      { value: "100%", label: "On-Time Delivery" },
                    ].map((l, r) =>
                      y.jsxs(
                        "div",
                        {
                          className: `anim-stat p-4 sm:p-6 border-black/10 hover:bg-black hover:text-white transition-colors duration-300 group
                  ${r % 2 === 0 ? "border-r" : ""} ${r < 2 ? "border-b" : ""}`,
                          children: [
                            y.jsx("p", {
                              className:
                                "text-xl sm:text-2xl font-black leading-none group-hover:scale-110 transition-transform duration-300 origin-left",
                              children: l.value,
                            }),
                            y.jsx("p", {
                              className:
                                "text-[9px] sm:text-[10px] font-medium tracking-[0.2em] sm:tracking-[0.25em] uppercase text-black/40 group-hover:text-white/50 mt-1.5 transition-colors",
                              children: l.label,
                            }),
                          ],
                        },
                        l.label,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
          y.jsx("div", {
            className: "anim-ticker border-t border-black/10 overflow-hidden",
            "aria-hidden": "true",
            children: y.jsx("div", {
              className:
                "flex items-center py-3 whitespace-nowrap ticker-track",
              children: Array(4)
                .fill([
                  "Wix Development",
                  "Squarespace Development",
                  "Custom Code",
                  "React",
                  "High-Converting Websites",
                  "Freelance Available",
                ])
                .flat()
                .map((l, r) =>
                  y.jsx(
                    "span",
                    {
                      className:
                        "text-[9px] sm:text-[10px] font-semibold tracking-[0.3em] uppercase text-black/30 px-5 sm:px-8 border-r border-black/10 shrink-0",
                      children: l,
                    },
                    r,
                  ),
                ),
            }),
          }),
          y.jsxs("div", {
            className:
              "absolute bottom-28 left-10 hidden xl:flex flex-col items-center gap-3",
            "aria-hidden": "true",
            children: [
              y.jsx("div", {
                className: "anim-scroll-line w-px h-14 bg-black/25",
              }),
              y.jsx("span", {
                className:
                  "text-[9px] tracking-[0.4em] uppercase text-black/25",
                style: { writingMode: "vertical-rl" },
                children: "Scroll",
              }),
            ],
          }),
        ],
      })
    );
  },
  J2 = [
    {
      icon: C2,
      label: "Custom Code",
      description:
        "React, HTML & JS sites built for performance and conversion",
    },
    {
      icon: O2,
      label: "Wix Expert",
      description:
        "Professional Wix builds with SEO, speed, and clean structure",
    },
    {
      icon: G2,
      label: "Squarespace",
      description: "Polished Squarespace sites for brands that value design",
    },
    {
      icon: t_,
      label: "Results-Driven",
      description: "Every site built to attract clients and grow your business",
    },
  ],
  k1 = [
    { value: "4+", label: "Sites Built" },
    { value: "3", label: "Platforms" },
    { value: "∞", label: "Dedication" },
  ],
  W2 = () => {
    const f = Te.useRef(null);
    return (
      Aa(
        () => {
          (te.fromTo(
            ".about-eyebrow",
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".about-header",
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          ),
            te.fromTo(
              ".about-headline-word",
              { yPercent: 110, opacity: 0, rotationZ: 1.5 },
              {
                yPercent: 0,
                opacity: 1,
                rotationZ: 0,
                duration: 0.9,
                stagger: 0.1,
                ease: "power4.out",
                scrollTrigger: {
                  trigger: ".about-header",
                  start: "top 80%",
                  toggleActions: "play none none reverse",
                },
              },
            ),
            te.fromTo(
              ".about-divider",
              { scaleX: 0, transformOrigin: "left center" },
              {
                scaleX: 1,
                duration: 1,
                ease: "power3.inOut",
                scrollTrigger: {
                  trigger: ".about-header",
                  start: "top 75%",
                  toggleActions: "play none none reverse",
                },
              },
            ),
            te.fromTo(
              ".about-para",
              { x: -40, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: ".about-text",
                  start: "top 85%",
                  toggleActions: "play none none reverse",
                },
              },
            ),
            te.fromTo(
              ".about-stat",
              { y: 40, opacity: 0, scale: 0.88 },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "back.out(1.7)",
                scrollTrigger: {
                  trigger: ".about-stats",
                  start: "top 88%",
                  toggleActions: "play none none reverse",
                },
              },
            ),
            te.fromTo(
              ".about-card",
              { clipPath: "inset(0 100% 0 0)", opacity: 0 },
              {
                clipPath: "inset(0 0% 0 0)",
                opacity: 1,
                duration: 0.75,
                stagger: 0.12,
                ease: "power3.inOut",
                scrollTrigger: {
                  trigger: ".about-cards",
                  start: "top 85%",
                  toggleActions: "play none none reverse",
                },
              },
            ),
            document.querySelectorAll(".about-card").forEach((l) => {
              const r = l.querySelector(".card-icon"),
                i = l.querySelector(".card-label"),
                u = l.querySelector(".card-desc");
              (l.addEventListener("mouseenter", () => {
                (te.to(l, {
                  backgroundColor: "#000",
                  borderColor: "#000",
                  duration: 0.25,
                  ease: "power2.out",
                }),
                  te.to([i, u], { color: "#fff", duration: 0.2 }),
                  te.to(r, {
                    backgroundColor: "rgba(255,255,255,0.1)",
                    color: "#fff",
                    scale: 1.1,
                    duration: 0.25,
                  }));
              }),
                l.addEventListener("mouseleave", () => {
                  (te.to(l, {
                    backgroundColor: "#fff",
                    borderColor: "rgba(0,0,0,0.1)",
                    duration: 0.25,
                    ease: "power2.out",
                  }),
                    te.to([i, u], { color: "", duration: 0.2 }),
                    te.to(r, {
                      backgroundColor: "rgba(0,0,0,0.05)",
                      color: "#000",
                      scale: 1,
                      duration: 0.25,
                    }));
                }));
            }),
            document.querySelectorAll(".about-stat").forEach((l) => {
              (l.addEventListener("mouseenter", () =>
                te.to(l, {
                  backgroundColor: "#000",
                  borderColor: "#000",
                  duration: 0.22,
                  ease: "power2.out",
                }),
              ),
                l.addEventListener("mouseleave", () =>
                  te.to(l, {
                    backgroundColor: "#fff",
                    borderColor: "rgba(0,0,0,0.1)",
                    duration: 0.22,
                  }),
                ));
            }),
            document.querySelectorAll(".about-card").forEach((l, r) => {
              te.to(l, {
                y: "+=6",
                duration: 2.8 + r * 0.3,
                repeat: -1,
                yoyo: !0,
                ease: "sine.inOut",
                delay: r * 0.35,
              });
            }));
        },
        { scope: f },
      ),
      y.jsx("section", {
        id: "about",
        ref: f,
        className:
          "py-16 sm:py-20 md:py-28 bg-white text-black overflow-hidden",
        children: y.jsxs("div", {
          className: "max-w-[1200px] mx-auto px-5 sm:px-8 md:px-14",
          children: [
            y.jsxs("div", {
              className: "about-header mb-10 sm:mb-14 md:mb-20",
              children: [
                y.jsxs("div", {
                  className: "about-eyebrow flex items-center gap-3 mb-5",
                  children: [
                    y.jsx("span", { className: "w-5 h-px bg-black" }),
                    y.jsx("span", {
                      className:
                        "text-[10px] font-semibold tracking-[0.35em] uppercase text-black/40",
                      children: "About Me",
                    }),
                  ],
                }),
                y.jsx("div", {
                  className: "space-y-0.5 mb-6 sm:mb-8",
                  children: [
                    "Professional Websites",
                    "That Work For",
                    "Your Business.",
                  ].map((l, r) =>
                    y.jsx(
                      "div",
                      {
                        className: "overflow-hidden",
                        children: y.jsx("h2", {
                          className: `about-headline-word text-[clamp(2rem,6vw,6.5rem)] font-black leading-[0.88] tracking-tight uppercase
                  ${r === 1 ? "text-white [-webkit-text-stroke:2px_black]" : "text-black"}`,
                          children: l,
                        }),
                      },
                      l,
                    ),
                  ),
                }),
                y.jsx("div", {
                  className: "about-divider w-full h-px bg-black/10",
                }),
              ],
            }),
            y.jsxs("div", {
              className:
                "grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-10 sm:gap-14 xl:gap-20 items-start",
              children: [
                y.jsxs("div", {
                  className: "about-text space-y-5 sm:space-y-7",
                  children: [
                    y.jsx("p", {
                      className:
                        "about-para text-base sm:text-lg xl:text-xl text-black/50 leading-relaxed",
                      children:
                        "I specialise in building professional websites on Wix, Squarespace, and custom code — designed to attract the right clients, establish credibility, and convert visitors into customers.",
                    }),
                    y.jsxs("div", {
                      className: "about-para flex items-center gap-3",
                      children: [
                        y.jsx("span", { className: "w-5 h-px bg-black" }),
                        y.jsx("span", {
                          className:
                            "text-[10px] font-semibold tracking-[0.3em] uppercase text-black/40",
                          children: "Platform + Custom Development",
                        }),
                      ],
                    }),
                    y.jsx("p", {
                      className:
                        "about-para text-base sm:text-lg xl:text-xl text-black/50 leading-relaxed",
                      children:
                        "Whether you need a fast Wix or Squarespace site, or a fully custom-coded React build — I deliver clean, modern websites focused on real business outcomes: more leads, better brand perception, and a site you're proud to share.",
                    }),
                    y.jsx("p", {
                      className:
                        "about-para text-base sm:text-lg xl:text-xl text-black/50 leading-relaxed",
                      children:
                        "I work with businesses, personal brands, and entrepreneurs who want a website that doesn't just look good — but actively grows their business.",
                    }),
                    y.jsx("div", {
                      className:
                        "about-stats grid grid-cols-3 gap-0 border border-black/10 mt-8",
                      children: k1.map((l, r) =>
                        y.jsxs(
                          "div",
                          {
                            className: `about-stat group py-5 sm:py-7 px-3 sm:px-5 border-black/10 text-center cursor-default
                    ${r < k1.length - 1 ? "border-r" : ""}`,
                            children: [
                              y.jsx("p", {
                                className:
                                  "text-[clamp(1.5rem,4vw,3rem)] font-black leading-none group-hover:text-white transition-colors duration-200",
                                children: l.value,
                              }),
                              y.jsx("p", {
                                className:
                                  "text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase text-black/40 group-hover:text-white/50 mt-1.5 transition-colors duration-200",
                                children: l.label,
                              }),
                            ],
                          },
                          l.label,
                        ),
                      ),
                    }),
                  ],
                }),
                y.jsx("div", {
                  className: "about-cards grid grid-cols-2 gap-2 sm:gap-3",
                  children: J2.map((l) =>
                    y.jsxs(
                      "div",
                      {
                        className:
                          "about-card border border-black/10 p-4 sm:p-6 cursor-default",
                        children: [
                          y.jsx("div", {
                            className:
                              "card-icon w-10 h-10 sm:w-12 sm:h-12 bg-black/5 flex items-center justify-center mb-4 sm:mb-5 text-black",
                            children: y.jsx(l.icon, {
                              className: "h-4 w-4 sm:h-5 sm:w-5",
                            }),
                          }),
                          y.jsx("h3", {
                            className:
                              "card-label font-black text-xs sm:text-sm tracking-[0.15em] uppercase text-black mb-1.5 sm:mb-2",
                            children: l.label,
                          }),
                          y.jsx("p", {
                            className:
                              "card-desc text-[11px] sm:text-xs text-black/40 leading-relaxed",
                            children: l.description,
                          }),
                        ],
                      },
                      l.label,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  F2 = [
    {
      id: "01",
      name: "Wix Website Development",
      category: "Platform",
      description:
        "Fast, professional Wix websites built with SEO best practices, mobile responsiveness, and conversion-focused layouts. Perfect for businesses that need a reliable, easy-to-manage online presence without the complexity of custom code.",
    },
    {
      id: "02",
      name: "Squarespace Website Development",
      category: "Platform",
      description:
        "Elegant, design-forward Squarespace sites built for personal brands, creatives, and businesses. Every site is structured for clean navigation, fast load times, and a polished visual identity that builds client trust instantly.",
    },
    {
      id: "03",
      name: "Custom Coded Websites",
      category: "Custom",
      description:
        "Fully custom React, HTML, and JavaScript websites built from scratch for maximum performance, flexibility, and scalability. Ideal for businesses that need unique functionality, advanced animations, or a competitive edge beyond template limitations.",
    },
  ],
  M1 = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "JavaScript", category: "Language" },
    { name: "TypeScript", category: "Language" },
  ],
  $2 = [
    "Wix Editor X",
    "Wix Studio",
    "Squarespace 7.1",
    "Git",
    "GitHub",
    "Firebase",
    "TanStack Query",
    "REST APIs",
    "Responsive Design",
    "GSAP Animation",
    "Framer Motion",
    "SEO Optimisation",
  ],
  P2 = ["All", "Frontend", "Backend", "Database", "Language"],
  I2 = { Frontend: "01", Backend: "02", Database: "03", Language: "04" },
  eS = () => {
    const [f, l] = Te.useState("All"),
      r = Te.useRef(null),
      i = Te.useRef(null),
      u = Te.useRef(null),
      o = Te.useRef(null),
      d = Te.useRef(null);
    (Aa(
      () => {
        (te
          .timeline({
            scrollTrigger: {
              trigger: r.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          })
          .fromTo(
            ".skills-eyebrow",
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          )
          .fromTo(
            ".skills-title-word",
            { yPercent: 110, opacity: 0 },
            {
              yPercent: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.08,
              ease: "power4.out",
            },
            "-=0.4",
          )
          .fromTo(
            ".skills-divider",
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, duration: 0.9, ease: "power3.inOut" },
            "-=0.5",
          ),
          te.fromTo(
            d.current.children,
            { y: 50, opacity: 0, clipPath: "inset(100% 0 0 0)" },
            {
              y: 0,
              opacity: 1,
              clipPath: "inset(0% 0 0 0)",
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.1,
              scrollTrigger: {
                trigger: d.current,
                start: "top 82%",
                toggleActions: "play none none reverse",
              },
            },
          ),
          te.fromTo(
            i.current.children,
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power3.out",
              stagger: 0.07,
              scrollTrigger: {
                trigger: i.current,
                start: "top 88%",
                toggleActions: "play none none reverse",
              },
            },
          ),
          te.fromTo(
            u.current.children,
            { y: 50, opacity: 0, clipPath: "inset(100% 0 0 0)" },
            {
              y: 0,
              opacity: 1,
              clipPath: "inset(0% 0 0 0)",
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.1,
              scrollTrigger: {
                trigger: u.current,
                start: "top 82%",
                toggleActions: "play none none reverse",
              },
            },
          ),
          te.fromTo(
            o.current.children,
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power2.out",
              stagger: 0.05,
              scrollTrigger: {
                trigger: o.current,
                start: "top 88%",
                toggleActions: "play none none reverse",
              },
            },
          ),
          Array.from(o.current.children).forEach((p) => {
            (p.addEventListener("mouseenter", () =>
              te.to(p, {
                backgroundColor: "#000",
                color: "#fff",
                borderColor: "#000",
                duration: 0.18,
              }),
            ),
              p.addEventListener("mouseleave", () =>
                te.to(p, {
                  backgroundColor: "transparent",
                  color: "rgba(0,0,0,0.5)",
                  borderColor: "rgba(0,0,0,0.12)",
                  duration: 0.18,
                }),
              ));
          }));
      },
      { scope: r },
    ),
      Aa(
        () => {
          te.fromTo(
            u.current.children,
            { opacity: 0, y: 24, clipPath: "inset(100% 0 0 0)" },
            {
              opacity: 1,
              y: 0,
              clipPath: "inset(0% 0 0 0)",
              duration: 0.5,
              ease: "power3.out",
              stagger: 0.07,
            },
          );
        },
        { dependencies: [f], scope: u },
      ));
    const h = f === "All" ? M1 : M1.filter((g) => g.category === f);
    return y.jsx("section", {
      id: "skills",
      ref: r,
      className: "py-16 sm:py-20 md:py-28 relative",
      children: y.jsxs("div", {
        className: "max-w-6xl mx-auto px-5 sm:px-8 md:px-10",
        children: [
          y.jsxs("div", {
            className: "mb-10 sm:mb-14",
            children: [
              y.jsxs("div", {
                className:
                  "skills-eyebrow flex items-center gap-3 mb-4 sm:mb-5",
                children: [
                  y.jsx("span", { className: "w-4 h-px bg-black/30" }),
                  y.jsx("p", {
                    className:
                      "text-[10px] font-semibold tracking-[0.35em] uppercase text-black/40",
                    children: "Services",
                  }),
                ],
              }),
              y.jsx("div", {
                className:
                  "flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-0 mb-5 sm:mb-6",
                children: ["What I", "Offer"].map((g, p) =>
                  y.jsx(
                    "div",
                    {
                      className: "overflow-hidden",
                      children: y.jsx("h2", {
                        className: `skills-title-word text-[clamp(2.5rem,6vw,5.5rem)] font-black uppercase tracking-tight leading-[0.88]
                  ${p === 1 ? "text-white [-webkit-text-stroke:2.5px_black]" : "text-black"}`,
                        children: g,
                      }),
                    },
                    p,
                  ),
                ),
              }),
              y.jsx("div", {
                className: "skills-divider w-full h-px bg-black/10",
              }),
            ],
          }),
          y.jsx("div", {
            className:
              "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 border border-black/10",
            style: { gap: "1px", background: "rgba(0,0,0,0.1)" },
            ref: d,
            children: F2.map((g) =>
              y.jsxs(
                "div",
                {
                  className:
                    "bg-white px-5 sm:px-7 py-8 sm:py-10 flex flex-col gap-4 sm:gap-5",
                  children: [
                    y.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        y.jsx("span", { className: "w-4 h-px bg-black/20" }),
                        y.jsx("span", {
                          className:
                            "text-[9px] font-semibold tracking-[0.35em] uppercase text-black/30",
                          children: g.id,
                        }),
                      ],
                    }),
                    y.jsx("h3", {
                      className:
                        "text-lg sm:text-xl font-black uppercase tracking-tight leading-tight text-black",
                      children: g.name,
                    }),
                    y.jsx("div", { className: "w-full h-px bg-black/8" }),
                    y.jsx("p", {
                      className: "text-xs text-black/50 leading-relaxed flex-1",
                      children: g.description,
                    }),
                    y.jsx("span", {
                      className:
                        "self-start text-[10px] font-semibold tracking-[0.25em] uppercase px-3 py-1.5 border border-black/12 text-black/50",
                      children: g.category,
                    }),
                  ],
                },
                g.name,
              ),
            ),
          }),
          y.jsxs("div", {
            className: "mt-14 sm:mt-20",
            children: [
              y.jsxs("div", {
                className: "flex items-center gap-4 mb-8 sm:mb-10",
                children: [
                  y.jsx("span", { className: "w-4 h-px bg-black/30" }),
                  y.jsx("p", {
                    className:
                      "text-[10px] font-semibold tracking-[0.35em] uppercase text-black/40",
                    children: "Core Skills",
                  }),
                  y.jsx("div", { className: "flex-1 h-px bg-black/10" }),
                ],
              }),
              y.jsx("div", {
                className: "flex flex-wrap gap-2 mb-8 sm:mb-12",
                ref: i,
                children: P2.map((g) =>
                  y.jsx(
                    "button",
                    {
                      onClick: () => l(g),
                      className: `text-[10px] font-bold tracking-[0.25em] uppercase px-4 sm:px-5 py-2 sm:py-2.5 border transition-none
                  ${f === g ? "bg-black text-white border-black" : "bg-transparent text-black/50 border-black/12 hover:border-black/30"}`,
                      children: g,
                    },
                    g,
                  ),
                ),
              }),
              y.jsx("div", {
                className:
                  "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 border border-black/10",
                style: { gap: "1px", background: "rgba(0,0,0,0.1)" },
                ref: u,
                children: h.map((g, p) =>
                  y.jsxs(
                    "div",
                    {
                      className:
                        "bg-white px-5 sm:px-7 py-6 sm:py-8 flex flex-col gap-4 sm:gap-5 group",
                      children: [
                        y.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            y.jsx("span", {
                              className: "w-4 h-px bg-black/20",
                            }),
                            y.jsx("span", {
                              className:
                                "text-[9px] font-semibold tracking-[0.35em] uppercase text-black/30",
                              children:
                                I2[g.category] ??
                                String(p + 1).padStart(2, "0"),
                            }),
                          ],
                        }),
                        y.jsx("h3", {
                          className:
                            "text-base sm:text-xl font-black uppercase tracking-tight leading-none text-black",
                          children: g.name,
                        }),
                        y.jsx("div", { className: "w-full h-px bg-black/8" }),
                        y.jsx("span", {
                          className:
                            "self-start text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase px-2.5 sm:px-3 py-1 sm:py-1.5 border border-black/12 text-black/50",
                          children: g.category,
                        }),
                      ],
                    },
                    g.name,
                  ),
                ),
              }),
            ],
          }),
          y.jsxs("div", {
            className: "mt-14 sm:mt-20",
            children: [
              y.jsxs("div", {
                className: "flex items-center gap-4 mb-6 sm:mb-8",
                children: [
                  y.jsx("span", { className: "w-4 h-px bg-black/30" }),
                  y.jsx("p", {
                    className:
                      "text-[10px] font-semibold tracking-[0.35em] uppercase text-black/40",
                    children: "Other Tools & Technologies",
                  }),
                  y.jsx("div", { className: "flex-1 h-px bg-black/10" }),
                ],
              }),
              y.jsx("div", {
                className: "flex flex-wrap gap-2",
                ref: o,
                children: $2.map((g) =>
                  y.jsx(
                    "span",
                    {
                      className:
                        "text-[10px] font-semibold tracking-[0.2em] uppercase px-3 sm:px-4 py-1.5 sm:py-2 border border-black/12 text-black/50 cursor-default",
                      children: g,
                    },
                    g,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
    });
  },
  O1 =
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
  tS = ({ project: f, isOpen: l, onClose: r }) => {
    const i = Te.useRef(null),
      u = Te.useRef(null),
      o = Te.useRef(null),
      d = "modal-title",
      h = Te.useCallback((p) => {
        if (!o.current) return;
        const _ = Array.from(o.current.querySelectorAll(O1)),
          b = _[0],
          S = _[_.length - 1];
        p.key === "Tab" &&
          (p.shiftKey
            ? document.activeElement === b && (p.preventDefault(), S?.focus())
            : document.activeElement === S && (p.preventDefault(), b?.focus()));
      }, []);
    if (
      (Te.useEffect(() => {
        if (l) {
          const p = o.current?.querySelector(O1);
          (setTimeout(() => p?.focus(), 50),
            document.addEventListener("keydown", h));
        }
        return () => document.removeEventListener("keydown", h);
      }, [l, h]),
      Te.useEffect(() => {
        const p = (_) => {
          _.key === "Escape" && r();
        };
        return (
          l && window.addEventListener("keydown", p),
          () => window.removeEventListener("keydown", p)
        );
      }, [l, r]),
      Te.useEffect(
        () => (
          (document.body.style.overflow = l ? "hidden" : ""),
          () => {
            document.body.style.overflow = "";
          }
        ),
        [l],
      ),
      Aa(
        () => {
          if (!l || !i.current) return;
          const p = te.timeline({ defaults: { ease: "power3.out" } });
          (p.fromTo(u.current, { opacity: 0 }, { opacity: 1, duration: 0.35 }),
            p.fromTo(
              o.current,
              { y: 80, clipPath: "inset(100% 0 0 0)" },
              { y: 0, clipPath: "inset(0% 0 0 0)", duration: 0.6 },
              "-=0.2",
            ),
            p.fromTo(
              ".modal-image",
              { scale: 1.06, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.7 },
              "-=0.4",
            ),
            p.fromTo(
              ".modal-divider",
              { scaleX: 0, transformOrigin: "left center" },
              { scaleX: 1, duration: 0.8, ease: "power3.inOut" },
              "-=0.3",
            ),
            p.fromTo(
              ".modal-title-word",
              { yPercent: 110, opacity: 0 },
              {
                yPercent: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.08,
                ease: "power4.out",
              },
              "-=0.5",
            ),
            p.fromTo(
              ".modal-item",
              { y: 20, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.5, stagger: 0.07 },
              "-=0.4",
            ));
        },
        { scope: i, dependencies: [l] },
      ),
      !l || !f)
    )
      return null;
    const g = f.name.split(" ");
    return y.jsxs("div", {
      ref: i,
      className:
        "fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": d,
      children: [
        y.jsx("div", {
          ref: u,
          className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
          onClick: r,
          "aria-hidden": "true",
        }),
        y.jsxs("div", {
          ref: o,
          className:
            "relative w-full md:max-w-2xl max-h-[92vh] overflow-y-auto bg-white text-black border-t md:border border-black/10 shadow-2xl flex flex-col",
          children: [
            y.jsx("button", {
              onClick: r,
              className:
                "absolute top-5 right-5 z-10 p-2 border border-black/15 text-black hover:bg-black hover:text-white hover:border-black transition-all duration-200",
              "aria-label": "Close project details",
              children: y.jsx(i_, {
                className: "h-4 w-4",
                "aria-hidden": "true",
              }),
            }),
            y.jsxs("div", {
              className:
                "relative h-48 sm:h-56 md:h-64 overflow-hidden shrink-0 bg-black/5",
              children: [
                y.jsx("img", {
                  src: f.image,
                  alt: `Screenshot of ${f.name}`,
                  width: "672",
                  height: "256",
                  loading: "lazy",
                  className: "modal-image w-full h-full object-cover grayscale",
                }),
                y.jsxs("div", {
                  className: "absolute top-5 left-5 flex items-center gap-2",
                  "aria-hidden": "true",
                  children: [
                    y.jsx("span", { className: "w-4 h-px bg-white/60" }),
                    y.jsx("span", {
                      className:
                        "text-[9px] font-semibold tracking-[0.35em] uppercase text-white/60",
                      children: f.platform,
                    }),
                  ],
                }),
                y.jsx("div", {
                  className:
                    "absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent",
                  "aria-hidden": "true",
                }),
              ],
            }),
            y.jsxs("div", {
              className:
                "px-6 sm:px-7 md:px-10 pb-10 pt-2 space-y-6 sm:space-y-7",
              children: [
                y.jsx("h2", {
                  id: d,
                  className: "flex flex-wrap gap-x-3 gap-y-0",
                  "aria-label": f.name,
                  children: g.map((p, _) =>
                    y.jsx(
                      "div",
                      {
                        className: "overflow-hidden",
                        children: y.jsx("span", {
                          className: `modal-title-word block text-[clamp(1.8rem,5vw,3.2rem)] font-black leading-[0.9] tracking-tight uppercase
                    ${_ === 1 ? "text-white [-webkit-text-stroke:2px_black]" : "text-black"}`,
                          children: p,
                        }),
                      },
                      _,
                    ),
                  ),
                }),
                y.jsx("div", {
                  className: "modal-divider w-full h-px bg-black/10",
                }),
                y.jsxs("div", {
                  className: "modal-item space-y-3",
                  children: [
                    y.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        y.jsx("span", {
                          className: "w-4 h-px bg-black/30",
                          "aria-hidden": "true",
                        }),
                        y.jsx("p", {
                          className:
                            "text-[10px] font-semibold tracking-[0.35em] uppercase text-black/40",
                          children: "Tech Stack",
                        }),
                      ],
                    }),
                    y.jsx("div", {
                      className: "flex flex-wrap gap-2",
                      children: f.techStack.map((p) =>
                        y.jsx(
                          "span",
                          {
                            className:
                              "modal-tech-tag text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1.5 border border-black/12 text-black/60 cursor-default",
                            children: p,
                          },
                          p,
                        ),
                      ),
                    }),
                  ],
                }),
                y.jsxs("div", {
                  className: "modal-item space-y-3",
                  children: [
                    y.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        y.jsx("span", {
                          className: "w-4 h-px bg-black/30",
                          "aria-hidden": "true",
                        }),
                        y.jsx("p", {
                          className:
                            "text-[10px] font-semibold tracking-[0.35em] uppercase text-black/40",
                          children: "About This Project",
                        }),
                      ],
                    }),
                    y.jsx("p", {
                      className: "text-sm text-black/55 leading-relaxed",
                      children: f.description,
                    }),
                  ],
                }),
                y.jsxs("div", {
                  className: "modal-item space-y-3",
                  children: [
                    y.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        y.jsx(n_, {
                          className: "h-3 w-3 text-black/30",
                          "aria-hidden": "true",
                        }),
                        y.jsx("p", {
                          className:
                            "text-[10px] font-semibold tracking-[0.35em] uppercase text-black/40",
                          children:
                            f.platform === "Custom"
                              ? "Future Plans"
                              : "Key Deliverables",
                        }),
                      ],
                    }),
                    y.jsx("p", {
                      className: "text-sm text-black/55 leading-relaxed",
                      children: f.futureImprovements,
                    }),
                  ],
                }),
                y.jsx("div", {
                  className: "modal-item w-full h-px bg-black/10",
                }),
                y.jsxs("div", {
                  className: "modal-item flex flex-col sm:flex-row gap-3",
                  children: [
                    y.jsxs("a", {
                      href: f.liveLink,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "group flex-1 flex items-center justify-center gap-2 bg-black text-white font-bold text-xs tracking-[0.2em] uppercase px-6 py-4 hover:bg-black/80 transition-colors",
                      children: [
                        y.jsx(a_, {
                          className: "h-3.5 w-3.5",
                          "aria-hidden": "true",
                        }),
                        f.platform === "Custom"
                          ? "Live Demo"
                          : "View Live Site",
                        y.jsx(Xa, {
                          className:
                            "h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ml-auto",
                          "aria-hidden": "true",
                        }),
                      ],
                    }),
                    f.platform === "Custom" &&
                      f.githubLink !== "#" &&
                      y.jsxs("a", {
                        href: f.githubLink,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "group flex-1 flex items-center justify-center gap-2 border border-black/15 hover:border-black hover:bg-black hover:text-white text-black font-bold text-xs tracking-[0.2em] uppercase px-6 py-4 transition-all duration-200",
                        children: [
                          y.jsx(_o, {
                            className: "h-3.5 w-3.5",
                            "aria-hidden": "true",
                          }),
                          "View Code",
                          y.jsx(Xa, {
                            className:
                              "h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ml-auto",
                            "aria-hidden": "true",
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Jd = [
    {
      id: 1,
      name: "Fivestone Realty",
      description:
        "Built a full Squarespace website for Fivestone Realty, a flat-fee home selling agency. The site communicates a clear value proposition, guides visitors through the pricing model, and converts traffic into qualified seller leads — all with a premium, trust-first design.",
      image: "/firestone.png",
      techStack: [
        "Squarespace",
        "SEO",
        "Responsive Design",
        "Conversion Focused",
      ],
      liveLink: "https://www.fivestonerealty.com",
      githubLink: "#",
      platform: "Squarespace",
      year: "2025",
      futureImprovements:
        "SEO-optimised layout across all pages, mobile-first structure, clear CTAs that funnel visitors to the contact and pricing sections, and a clean visual hierarchy that reflects a modern real estate brand.",
    },
    {
      id: 2,
      name: "SERESDC",
      description:
        "Designed and built a Squarespace site for SERESDC, a data centre training and certification organisation operating across 50+ countries. The site needed to communicate authority, handle event registrations, and serve a global professional audience.",
      image: "/seresdc.png",
      techStack: ["Squarespace", "SEO", "Mobile Responsive", "Brand Design"],
      liveLink: "https://www.seresdc.com",
      githubLink: "#",
      platform: "Squarespace",
      year: "2025",
      futureImprovements:
        "Multi-section layout covering training programmes, certification tracks, and regional events. Clear navigation for a global audience, integrated blog for organic traffic, and a store for direct course enrolment.",
    },
    {
      id: 3,
      name: "Italia Foods",
      description:
        "Created a Wix website for Italia Foods, an authentic Italian food brand. The goal was to elevate their online presence, showcase their product range, and build the kind of premium brand feel that turns first-time visitors into loyal customers.",
      image: "/italiafoods.png",
      techStack: ["Wix", "SEO", "E-Commerce", "Responsive Design"],
      liveLink: "https://www.italiafoods.com",
      githubLink: "#",
      platform: "Wix",
      year: "2025",
      futureImprovements:
        "Full product catalogue with category filtering, SEO-optimised product pages, an integrated Wix store checkout, and a brand story section that communicates the authentic Italian quality behind every product.",
    },
    {
      id: 4,
      name: "Inspire Me Korea",
      description:
        "Built a vibrant Wix website for Inspire Me Korea, a travel and lifestyle brand focused on curated Korean experiences. The site needed to inspire at first glance, build credibility for tour packages, and make it easy for visitors to book or enquire.",
      image: "/inspiremekorea.png",
      techStack: ["Wix", "SEO", "Booking Integration", "Mobile Responsive"],
      liveLink: "https://www.inspiremekorea.com",
      githubLink: "#",
      platform: "Wix",
      year: "2025",
      futureImprovements:
        "Visually engaging hero sections, curated destination showcases, a Wix Bookings integration for tour enquiries, and SEO-structured travel guides that drive organic discovery from search.",
    },
    {
      id: 5,
      name: "Care.xyz",
      description:
        "A real-world care service booking platform that connects families with verified caregivers. Users can book in-home services for children, elderly individuals, and general home care, manage bookings, and track service history — built with trust, safety, and compassion at the core.",
      image:
        "https://res.cloudinary.com/do3iu9q7d/image/upload/w_800,f_auto,q_auto/v1766650849/Screenshot_2025-12-25_142016_be74ic.png",
      techStack: ["Next.js", "NextAuth.js", "MongoDB", "Tailwind CSS", "GSAP"],
      liveLink: "https://carexyz-ten.vercel.app/",
      githubLink: "https://github.com/Pritom678/Care.xyz",
      platform: "Custom",
      year: "2025",
      futureImprovements:
        "Role-based dashboards for caregivers and families, GSAP-powered page transitions, in-app messaging, and a review system to build caregiver trust profiles.",
    },
    {
      id: 6,
      name: "LoanLink",
      description:
        "A full-stack MERN application that streamlines loan applications, approvals, repayments, and administrative operations. Features specialised dashboards for borrowers, managers, and admins — each with role-appropriate controls and data visibility.",
      image:
        "https://res.cloudinary.com/do3iu9q7d/image/upload/w_800,f_auto,q_auto/v1771430527/Screenshot_2026-01-13_140200_oncbzt.png",
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TanStack Query",
      ],
      liveLink: "https://loanlinkph.netlify.app/",
      githubLink: "https://github.com/Pritom678/loan-link",
      platform: "Custom",
      year: "2026",
      futureImprovements:
        "Stripe payment integration for repayments, automated email reminders, exportable repayment reports, and an analytics dashboard for admin users.",
    },
    {
      id: 7,
      name: "AudioPulse",
      description:
        "A production-ready, full-stack e-commerce platform for audio equipment. Built with TypeScript across the entire stack for type safety and maintainability. Features secure authentication, a dynamic cart, admin management, and GSAP-powered animations throughout.",
      image:
        "https://res.cloudinary.com/do3iu9q7d/image/upload/w_800,f_auto,q_auto/v1771430923/Screenshot_2026-02-18_220823_tlc6df.png",
      techStack: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Mongoose",
        "Express.js",
        "GSAP",
      ],
      liveLink: "https://audiopluse.vercel.app/",
      githubLink: "https://github.com/Pritom678/audioPulse",
      platform: "Custom",
      year: "2026",
      futureImprovements:
        "Stripe checkout integration, inventory management for admins, product reviews, and a wishlist feature for returning customers.",
    },
  ],
  aS = () => {
    const [f, l] = Te.useState(null),
      r = Te.useRef(null),
      i = Te.useRef(null),
      u = Te.useRef([]),
      o = Jd.filter((g) => g.platform === "Squarespace"),
      d = Jd.filter((g) => g.platform === "Wix"),
      h = Jd.filter((g) => g.platform === "Custom");
    return (
      Aa(
        () => {
          (te
            .timeline({
              scrollTrigger: {
                trigger: r.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            })
            .fromTo(
              ".projects-eyebrow",
              { y: 20, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
            )
            .fromTo(
              ".projects-title-word",
              { yPercent: 110, opacity: 0 },
              {
                yPercent: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.08,
                ease: "power4.out",
              },
              "-=0.4",
            )
            .fromTo(
              ".projects-divider",
              { scaleX: 0, transformOrigin: "left center" },
              { scaleX: 1, duration: 0.9, ease: "power3.inOut" },
              "-=0.5",
            ),
            te.fromTo(
              u.current.filter(Boolean),
              { y: 60, opacity: 0, clipPath: "inset(100% 0 0 0)" },
              {
                y: 0,
                opacity: 1,
                clipPath: "inset(0% 0 0 0)",
                duration: 0.9,
                ease: "power3.out",
                stagger: 0.12,
                scrollTrigger: {
                  trigger: r.current,
                  start: "top 70%",
                  toggleActions: "play none none reverse",
                },
              },
            ),
            u.current.forEach((p) => {
              if (!p) return;
              const _ = p.querySelector("img"),
                b = p.querySelectorAll(".proj-tag"),
                S = p.querySelector(".details-btn");
              (p.addEventListener("mouseenter", () => {
                (te.to(_, { scale: 1.07, duration: 0.6, ease: "power2.out" }),
                  te.to(b, {
                    backgroundColor: "#000",
                    color: "#fff",
                    borderColor: "#000",
                    duration: 0.18,
                    stagger: 0.04,
                  }),
                  te.to(S, { x: 4, duration: 0.2, ease: "power2.out" }));
              }),
                p.addEventListener("mouseleave", () => {
                  (te.to(_, { scale: 1, duration: 0.6, ease: "power2.out" }),
                    te.to(b, {
                      backgroundColor: "transparent",
                      color: "rgba(0,0,0,0.5)",
                      borderColor: "rgba(0,0,0,0.12)",
                      duration: 0.18,
                      stagger: 0.04,
                    }),
                    te.to(S, { x: 0, duration: 0.2, ease: "power2.out" }));
                }));
            }));
        },
        { scope: r },
      ),
      y.jsxs("section", {
        id: "projects",
        className: "py-16 sm:py-20 md:py-28 relative",
        ref: r,
        children: [
          y.jsxs("div", {
            className: "max-w-6xl mx-auto px-5 sm:px-8 md:px-10",
            children: [
              y.jsxs("div", {
                className: "mb-10 sm:mb-14",
                ref: i,
                children: [
                  y.jsxs("div", {
                    className:
                      "projects-eyebrow flex items-center gap-3 mb-4 sm:mb-5",
                    children: [
                      y.jsx("span", { className: "w-4 h-px bg-black/30" }),
                      y.jsx("p", {
                        className:
                          "text-[10px] font-semibold tracking-[0.35em] uppercase text-black/40",
                        children: "Portfolio",
                      }),
                    ],
                  }),
                  y.jsx("div", {
                    className:
                      "flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-0 mb-5 sm:mb-6",
                    children: ["My", "Projects"].map((g, p) =>
                      y.jsx(
                        "div",
                        {
                          className: "overflow-hidden",
                          children: y.jsx("h2", {
                            className: `projects-title-word text-[clamp(2.5rem,6vw,5.5rem)] font-black uppercase tracking-tight leading-[0.88]
                  ${p === 1 ? "text-white [-webkit-text-stroke:2.5px_black]" : "text-black"}`,
                            children: g,
                          }),
                        },
                        p,
                      ),
                    ),
                  }),
                  y.jsx("div", {
                    className: "projects-divider w-full h-px bg-black/10",
                  }),
                ],
              }),
              y.jsx(Wd, {
                label: "Squarespace Projects",
                projects: o,
                startIndex: 0,
                cardsRef: u,
                onOpen: l,
              }),
              y.jsx(Wd, {
                label: "Wix Projects",
                projects: d,
                startIndex: o.length,
                cardsRef: u,
                onOpen: l,
              }),
              y.jsx(Wd, {
                label: "Custom Coded Projects",
                projects: h,
                startIndex: o.length + d.length,
                cardsRef: u,
                onOpen: l,
              }),
              y.jsx("div", {
                className: "flex justify-center pt-4",
                children: y.jsxs("a", {
                  href: "#contact",
                  className:
                    "group flex items-center gap-3 border border-black/15 hover:border-black hover:bg-black hover:text-white text-black font-bold text-xs tracking-[0.2em] uppercase px-6 sm:px-8 py-3.5 sm:py-4 transition-all duration-200",
                  children: [
                    "Discuss a Project",
                    y.jsx(Xa, {
                      className:
                        "h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform",
                    }),
                  ],
                }),
              }),
            ],
          }),
          y.jsx(tS, { project: f, isOpen: !!f, onClose: () => l(null) }),
        ],
      })
    );
  },
  Wd = ({ label: f, projects: l, startIndex: r, cardsRef: i, onOpen: u }) =>
    y.jsxs("div", {
      className: "mb-10 sm:mb-14",
      children: [
        y.jsxs("div", {
          className: "flex items-center gap-4 mb-6 sm:mb-8",
          children: [
            y.jsx("span", { className: "w-4 h-px bg-black/30" }),
            y.jsx("p", {
              className:
                "text-[10px] font-semibold tracking-[0.35em] uppercase text-black/40",
              children: f,
            }),
            y.jsx("div", { className: "flex-1 h-px bg-black/10" }),
          ],
        }),
        y.jsx("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 border border-black/10",
          style: { gap: "1px", background: "rgba(0,0,0,0.1)" },
          children: l.map((o, d) =>
            y.jsx(
              lS,
              {
                project: o,
                index: r + d,
                cardRef: (h) => (i.current[r + d] = h),
                onOpen: u,
              },
              o.id,
            ),
          ),
        }),
      ],
    }),
  lS = ({ project: f, index: l, cardRef: r, onOpen: i }) =>
    y.jsxs("div", {
      ref: r,
      className: "bg-white flex flex-col overflow-hidden cursor-pointer",
      children: [
        y.jsxs("div", {
          className: "relative overflow-hidden bg-black/5 shrink-0",
          style: { height: "clamp(180px, 30vw, 240px)" },
          children: [
            y.jsx("img", {
              src: f.image,
              alt: f.name,
              className: "w-full h-full object-cover grayscale",
            }),
            y.jsx("div", {
              className:
                "absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent",
            }),
            y.jsxs("div", {
              className: "absolute top-4 left-4 flex items-center gap-2",
              children: [
                y.jsx("span", { className: "w-4 h-px bg-white/50" }),
                y.jsx("span", {
                  className:
                    "text-[9px] font-semibold tracking-[0.35em] uppercase text-white/55",
                  children: String(l + 1).padStart(2, "0"),
                }),
              ],
            }),
            y.jsx("div", {
              className: "absolute top-3 right-3 sm:top-4 sm:right-4",
              children: y.jsx("span", {
                className:
                  "text-[9px] font-semibold tracking-[0.25em] uppercase px-2 sm:px-2.5 py-1 bg-black/75 text-white border border-white/15",
                children: f.platform,
              }),
            }),
          ],
        }),
        y.jsxs("div", {
          className:
            "px-5 sm:px-7 pt-4 sm:pt-5 pb-5 sm:pb-7 flex flex-col gap-3 sm:gap-4 flex-1",
          children: [
            y.jsx("h3", {
              className:
                "text-[clamp(1.1rem,2.5vw,1.75rem)] font-black uppercase tracking-tight leading-tight",
              children: f.name,
            }),
            y.jsx("p", {
              className: "text-xs sm:text-sm text-black/50 leading-relaxed",
              style: {
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              },
              children: f.description,
            }),
            y.jsxs("div", {
              className: "flex flex-wrap gap-1.5 sm:gap-2",
              children: [
                f.techStack
                  .slice(0, 3)
                  .map((u) =>
                    y.jsx(
                      "span",
                      {
                        className:
                          "proj-tag text-[9px] sm:text-[10px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase px-2 sm:px-3 py-1 sm:py-1.5 border border-black/12 text-black/50",
                        children: u,
                      },
                      u,
                    ),
                  ),
                f.techStack.length > 3 &&
                  y.jsxs("span", {
                    className:
                      "proj-tag text-[9px] sm:text-[10px] font-semibold tracking-[0.15em] uppercase px-2 sm:px-3 py-1 sm:py-1.5 border border-black/12 text-black/50",
                    children: ["+", f.techStack.length - 3],
                  }),
              ],
            }),
            y.jsxs("div", {
              className:
                "mt-auto pt-4 border-t border-black/8 flex items-center justify-between gap-2",
              children: [
                y.jsxs("div", {
                  className: "flex items-center gap-2 sm:gap-3 min-w-0",
                  children: [
                    y.jsxs("button", {
                      className:
                        "details-btn flex items-center gap-1.5 sm:gap-2 text-[10px] font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-black shrink-0",
                      onClick: () => i(f),
                      children: [
                        "View Details",
                        y.jsx(Xa, { className: "h-3 w-3 sm:h-3.5 sm:w-3.5" }),
                      ],
                    }),
                    f.platform === "Custom" && f.githubLink !== "#"
                      ? y.jsxs("a", {
                          href: f.githubLink,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          onClick: (u) => u.stopPropagation(),
                          className:
                            "flex items-center gap-1 sm:gap-1.5 text-[10px] font-semibold tracking-[0.15em] uppercase text-black/40 hover:text-black transition-colors shrink-0",
                          children: [
                            y.jsx(_o, { className: "h-3 w-3" }),
                            y.jsx("span", {
                              className: "hidden xs:inline",
                              children: "GitHub",
                            }),
                          ],
                        })
                      : y.jsxs("a", {
                          href: f.liveLink,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          onClick: (u) => u.stopPropagation(),
                          className:
                            "flex items-center gap-1 sm:gap-1.5 text-[10px] font-semibold tracking-[0.15em] uppercase text-black/40 hover:text-black transition-colors shrink-0",
                          children: [
                            y.jsx(a_, { className: "h-3 w-3" }),
                            y.jsx("span", {
                              className: "hidden xs:inline",
                              children: "Visit Site",
                            }),
                          ],
                        }),
                  ],
                }),
                y.jsx("span", {
                  className:
                    "text-[10px] font-medium tracking-[0.15em] uppercase text-black/25 shrink-0",
                  children: f.year ?? "2025",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  nS = [
    {
      id: 1,
      quote:
        "Pritom delivered our Squarespace site ahead of schedule and it looked exactly how we envisioned. The attention to detail was outstanding — every section was clean, fast, and easy to manage.",
      name: "Sarah Mitchell",
      role: "Founder, Fivestone Realty",
      platform: "Squarespace",
    },
    {
      id: 2,
      quote:
        "Our Wix website went from a template mess to a professional brand showcase. Pritom understood our industry and built a site that actually brings in inquiries. Highly recommend.",
      name: "Marco Rossi",
      role: "Owner, Italia Foods",
      platform: "Wix",
    },
    {
      id: 3,
      quote:
        "The custom-coded site Pritom built for us performs incredibly well. Fast load times, smooth animations, and a design that stands out. Communication throughout was excellent.",
      name: "Ji-yeon Park",
      role: "Director, Inspire Me Korea",
      platform: "Custom Code",
    },
  ],
  iS = () => {
    const f = Te.useRef(null);
    return (
      Aa(
        () => {
          (te.fromTo(
            ".testi-eyebrow",
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: f.current,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          ),
            te.fromTo(
              ".testi-title-word",
              { yPercent: 110, opacity: 0 },
              {
                yPercent: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.08,
                ease: "power4.out",
                scrollTrigger: {
                  trigger: f.current,
                  start: "top 82%",
                  toggleActions: "play none none reverse",
                },
              },
            ),
            te.fromTo(
              ".testi-card",
              { y: 50, opacity: 0, clipPath: "inset(100% 0 0 0)" },
              {
                y: 0,
                opacity: 1,
                clipPath: "inset(0% 0 0 0)",
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: ".testi-grid",
                  start: "top 82%",
                  toggleActions: "play none none reverse",
                },
              },
            ),
            document.querySelectorAll(".testi-card").forEach((l) => {
              (l.addEventListener("mouseenter", () =>
                te.to(l, {
                  backgroundColor: "#000",
                  borderColor: "#000",
                  color: "#fff",
                  duration: 0.25,
                  ease: "power2.out",
                }),
              ),
                l.addEventListener("mouseleave", () =>
                  te.to(l, {
                    backgroundColor: "#fff",
                    borderColor: "rgba(0,0,0,0.1)",
                    color: "#000",
                    duration: 0.25,
                  }),
                ));
            }));
        },
        { scope: f },
      ),
      y.jsx("section", {
        id: "testimonials",
        ref: f,
        className:
          "py-16 sm:py-20 md:py-28 bg-white text-black overflow-hidden",
        children: y.jsxs("div", {
          className: "max-w-6xl mx-auto px-5 sm:px-8 md:px-10",
          children: [
            y.jsxs("div", {
              className: "mb-10 sm:mb-14",
              children: [
                y.jsxs("div", {
                  className:
                    "testi-eyebrow flex items-center gap-3 mb-4 sm:mb-5",
                  children: [
                    y.jsx("span", {
                      className: "w-4 h-px bg-black/30",
                      "aria-hidden": "true",
                    }),
                    y.jsx("p", {
                      className:
                        "text-[10px] font-semibold tracking-[0.35em] uppercase text-black/40",
                      children: "Client Feedback",
                    }),
                  ],
                }),
                y.jsx("div", {
                  className:
                    "flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-0 mb-5 sm:mb-6",
                  children: ["What Clients", "Say."].map((l, r) =>
                    y.jsx(
                      "div",
                      {
                        className: "overflow-hidden",
                        children: y.jsx("h2", {
                          className: `testi-title-word text-[clamp(2.5rem,6vw,5.5rem)] font-black uppercase tracking-tight leading-[0.88]
                  ${r === 1 ? "text-white [-webkit-text-stroke:2.5px_black]" : "text-black"}`,
                          children: l,
                        }),
                      },
                      r,
                    ),
                  ),
                }),
                y.jsx("div", { className: "w-full h-px bg-black/10" }),
              ],
            }),
            y.jsx("div", {
              className:
                "testi-grid grid grid-cols-1 md:grid-cols-3 border border-black/10",
              style: { gap: "1px", background: "rgba(0,0,0,0.1)" },
              children: nS.map((l) =>
                y.jsxs(
                  "article",
                  {
                    className:
                      "testi-card bg-white px-6 sm:px-8 py-8 sm:py-10 flex flex-col gap-6 cursor-default transition-colors duration-250",
                    children: [
                      y.jsx(B2, {
                        className: "h-6 w-6 opacity-20 shrink-0",
                        "aria-hidden": "true",
                      }),
                      y.jsxs("blockquote", {
                        className:
                          "text-sm leading-relaxed text-black/60 flex-1 italic",
                        children: ["“", l.quote, "”"],
                      }),
                      y.jsxs("div", {
                        className:
                          "border-t border-black/10 pt-5 flex items-center justify-between gap-4",
                        children: [
                          y.jsxs("div", {
                            children: [
                              y.jsx("p", {
                                className:
                                  "text-sm font-black uppercase tracking-tight",
                                children: l.name,
                              }),
                              y.jsx("p", {
                                className:
                                  "text-[10px] font-medium tracking-[0.2em] uppercase text-black/40 mt-0.5",
                                children: l.role,
                              }),
                            ],
                          }),
                          y.jsx("span", {
                            className:
                              "text-[9px] font-semibold tracking-[0.25em] uppercase px-2.5 py-1 border border-black/15 text-black/50 shrink-0",
                            children: l.platform,
                          }),
                        ],
                      }),
                    ],
                  },
                  l.id,
                ),
              ),
            }),
          ],
        }),
      })
    );
  },
  rS = [
    {
      number: "01",
      icon: k2,
      title: "Discovery",
      description:
        "We kick off with a focused conversation about your goals, audience, and brand. I ask the right questions so the build starts with a clear direction — no guesswork.",
    },
    {
      number: "02",
      icon: D2,
      title: "Design & Plan",
      description:
        "I map out the structure, content layout, and visual direction. You'll know exactly what's being built before a single line of code is written.",
    },
    {
      number: "03",
      icon: g2,
      title: "Build",
      description:
        "Your site is built with clean structure, fast performance, and mobile-first design. You'll see regular progress and can give feedback at every stage.",
    },
    {
      number: "04",
      icon: n_,
      title: "Launch & Handoff",
      description:
        "Once you're happy, we go live. I handle the technical side and hand over everything you need to manage your site with confidence going forward.",
    },
  ],
  uS = () => {
    const f = Te.useRef(null);
    return (
      Aa(
        () => {
          (te.fromTo(
            ".process-eyebrow",
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: f.current,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          ),
            te.fromTo(
              ".process-title-word",
              { yPercent: 110, opacity: 0 },
              {
                yPercent: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.08,
                ease: "power4.out",
                scrollTrigger: {
                  trigger: f.current,
                  start: "top 82%",
                  toggleActions: "play none none reverse",
                },
              },
            ),
            te.fromTo(
              ".process-step",
              { y: 50, opacity: 0, clipPath: "inset(100% 0 0 0)" },
              {
                y: 0,
                opacity: 1,
                clipPath: "inset(0% 0 0 0)",
                duration: 0.75,
                stagger: 0.12,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: ".process-grid",
                  start: "top 82%",
                  toggleActions: "play none none reverse",
                },
              },
            ),
            document.querySelectorAll(".process-step").forEach((l) => {
              const r = l.querySelector(".step-icon"),
                i = l.querySelector(".step-num");
              (l.addEventListener("mouseenter", () => {
                (te.to(l, {
                  backgroundColor: "#000",
                  borderColor: "#000",
                  duration: 0.25,
                  ease: "power2.out",
                }),
                  te.to([r, i], { color: "#fff", duration: 0.2 }),
                  te.to(l.querySelectorAll("p, h3"), {
                    color: "#fff",
                    duration: 0.2,
                  }),
                  te.to(r, {
                    backgroundColor: "rgba(255,255,255,0.1)",
                    duration: 0.2,
                  }));
              }),
                l.addEventListener("mouseleave", () => {
                  (te.to(l, {
                    backgroundColor: "#fff",
                    borderColor: "rgba(0,0,0,0.1)",
                    duration: 0.25,
                  }),
                    te.to([r, i], { color: "", duration: 0.2 }),
                    te.to(l.querySelectorAll("p, h3"), {
                      color: "",
                      duration: 0.2,
                    }),
                    te.to(r, {
                      backgroundColor: "rgba(0,0,0,0.05)",
                      duration: 0.2,
                    }));
                }));
            }));
        },
        { scope: f },
      ),
      y.jsx("section", {
        id: "process",
        ref: f,
        className: "py-16 sm:py-20 md:py-28 bg-white overflow-hidden",
        children: y.jsxs("div", {
          className: "max-w-6xl mx-auto px-5 sm:px-8 md:px-10",
          children: [
            y.jsxs("div", {
              className: "mb-10 sm:mb-14",
              children: [
                y.jsxs("div", {
                  className:
                    "process-eyebrow flex items-center gap-3 mb-4 sm:mb-5",
                  children: [
                    y.jsx("span", {
                      className: "w-4 h-px bg-black/30",
                      "aria-hidden": "true",
                    }),
                    y.jsx("p", {
                      className:
                        "text-[10px] font-semibold tracking-[0.35em] uppercase text-black/40",
                      children: "How I Work",
                    }),
                  ],
                }),
                y.jsx("div", {
                  className:
                    "flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-0 mb-5 sm:mb-6",
                  children: ["The", "Process."].map((l, r) =>
                    y.jsx(
                      "div",
                      {
                        className: "overflow-hidden",
                        children: y.jsx("h2", {
                          className: `process-title-word text-[clamp(2.5rem,6vw,5.5rem)] font-black uppercase tracking-tight leading-[0.88]
                  ${r === 1 ? "text-white [-webkit-text-stroke:2.5px_black]" : "text-black"}`,
                          children: l,
                        }),
                      },
                      r,
                    ),
                  ),
                }),
                y.jsx("div", { className: "w-full h-px bg-black/10" }),
              ],
            }),
            y.jsx("div", {
              className:
                "process-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-black/10",
              style: { gap: "1px", background: "rgba(0,0,0,0.1)" },
              children: rS.map((l) =>
                y.jsxs(
                  "div",
                  {
                    className:
                      "process-step bg-white px-6 sm:px-7 py-8 sm:py-10 flex flex-col gap-5 cursor-default",
                    children: [
                      y.jsxs("div", {
                        className: "flex items-start justify-between",
                        children: [
                          y.jsx("div", {
                            className:
                              "step-icon w-11 h-11 bg-black/5 flex items-center justify-center text-black shrink-0",
                            children: y.jsx(l.icon, {
                              className: "h-4 w-4",
                              "aria-hidden": "true",
                            }),
                          }),
                          y.jsx("span", {
                            className:
                              "step-num text-[10px] font-semibold tracking-[0.35em] uppercase text-black/25",
                            children: l.number,
                          }),
                        ],
                      }),
                      y.jsx("div", { className: "w-full h-px bg-black/8" }),
                      y.jsx("h3", {
                        className:
                          "text-lg font-black uppercase tracking-tight leading-none text-black",
                        children: l.title,
                      }),
                      y.jsx("p", {
                        className:
                          "text-xs text-black/50 leading-relaxed flex-1",
                        children: l.description,
                      }),
                    ],
                  },
                  l.number,
                ),
              ),
            }),
          ],
        }),
      })
    );
  },
  sS = [
    {
      icon: x2,
      label: "Email",
      value: "pritomdas6783@gmail.com",
      href: "mailto:pritomdas6783@gmail.com",
    },
    {
      icon: U2,
      label: "Phone",
      value: "+880 1608944818",
      href: "tel:+8801608944818",
    },
    {
      icon: l_,
      label: "WhatsApp",
      value: "+880 1889557719",
      href: "https://wa.me/8801889557719",
    },
  ],
  cS = () => {
    const f = Te.useRef(null),
      [l, r] = Te.useState({
        name: "",
        email: "",
        projectType: "",
        message: "",
      }),
      [i, u] = Te.useState(!1),
      [o, d] = Te.useState(!1),
      [h, g] = Te.useState(""),
      p = (S) => r((x) => ({ ...x, [S.target.name]: S.target.value })),
      _ = async (S) => {
        (S.preventDefault(), d(!0), g(""));
        try {
          (
            await fetch("https://formspree.io/f/xpwzljwd", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify(l),
            })
          ).ok
            ? (u(!0), r({ name: "", email: "", projectType: "", message: "" }))
            : g("Something went wrong. Please try emailing me directly.");
        } catch {
          g("Network error. Please try emailing me directly.");
        } finally {
          d(!1);
        }
      };
    Aa(
      () => {
        (te.fromTo(
          ".contact-eyebrow",
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".contact-header",
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        ),
          te.fromTo(
            ".contact-headline-word",
            { yPercent: 110, opacity: 0, rotationZ: 1.5 },
            {
              yPercent: 0,
              opacity: 1,
              rotationZ: 0,
              duration: 0.9,
              stagger: 0.1,
              ease: "power4.out",
              scrollTrigger: {
                trigger: ".contact-header",
                start: "top 82%",
                toggleActions: "play none none reverse",
              },
            },
          ),
          te.fromTo(
            ".contact-subtext",
            { y: 25, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".contact-header",
                start: "top 78%",
                toggleActions: "play none none reverse",
              },
            },
          ),
          te.fromTo(
            ".contact-divider",
            { scaleX: 0, transformOrigin: "left center" },
            {
              scaleX: 1,
              duration: 1,
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: ".contact-header",
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            },
          ),
          te.fromTo(
            ".contact-card",
            { clipPath: "inset(0 100% 0 0)", opacity: 0 },
            {
              clipPath: "inset(0 0% 0 0)",
              opacity: 1,
              duration: 0.75,
              stagger: 0.12,
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: ".contact-cards",
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          ),
          te.fromTo(
            ".contact-form-wrap",
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".contact-form-wrap",
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          ),
          document.querySelectorAll(".contact-card").forEach((S) => {
            const x = S.querySelector(".card-icon"),
              A = S.querySelector(".card-label"),
              T = S.querySelector(".card-value"),
              O = S.querySelector(".card-arrow");
            (S.addEventListener("mouseenter", () => {
              (te.to(S, {
                backgroundColor: "#000",
                borderColor: "#000",
                duration: 0.22,
                ease: "power2.out",
              }),
                te.to([A, T], { color: "#fff", duration: 0.18 }),
                te.to(x, {
                  backgroundColor: "rgba(255,255,255,0.12)",
                  color: "#fff",
                  scale: 1.1,
                  duration: 0.22,
                }),
                te.to(O, { opacity: 1, x: 2, y: -2, duration: 0.2 }));
            }),
              S.addEventListener("mouseleave", () => {
                (te.to(S, {
                  backgroundColor: "#fff",
                  borderColor: "rgba(0,0,0,0.1)",
                  duration: 0.22,
                }),
                  te.to([A, T], { color: "", duration: 0.18 }),
                  te.to(x, {
                    backgroundColor: "rgba(0,0,0,0.05)",
                    color: "#000",
                    scale: 1,
                    duration: 0.22,
                  }),
                  te.to(O, { opacity: 0, x: 0, y: 0, duration: 0.2 }));
              }));
          }));
      },
      { scope: f },
    );
    const b =
      "w-full border border-black/15 bg-white px-4 py-3 text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-black transition-colors duration-200";
    return y.jsx("section", {
      id: "contact",
      ref: f,
      className:
        "py-16 sm:py-20 md:py-28 pb-20 sm:pb-28 md:pb-36 bg-white text-black overflow-hidden",
      children: y.jsxs("div", {
        className: "max-w-[1200px] mx-auto px-5 sm:px-8 md:px-14",
        children: [
          y.jsxs("div", {
            className: "contact-header mb-10 sm:mb-14 md:mb-20",
            children: [
              y.jsxs("div", {
                className: "contact-eyebrow flex items-center gap-3 mb-5",
                children: [
                  y.jsx("span", {
                    className: "w-4 h-px bg-black/30",
                    "aria-hidden": "true",
                  }),
                  y.jsx("span", {
                    className:
                      "text-[10px] font-semibold tracking-[0.35em] uppercase text-black/40",
                    children: "Get In Touch",
                  }),
                ],
              }),
              y.jsx("div", {
                className: "space-y-0.5 mb-6 sm:mb-8",
                children: [
                  "Let's Build a",
                  "Website That",
                  "Grows Your Business.",
                ].map((S, x) =>
                  y.jsx(
                    "div",
                    {
                      className: "overflow-hidden",
                      children: y.jsx("h2", {
                        className: `contact-headline-word text-[clamp(1.9rem,6vw,6.5rem)] font-black leading-[0.88] tracking-tight uppercase
                  ${x === 1 ? "text-white [-webkit-text-stroke:2px_black]" : "text-black"}`,
                        children: S,
                      }),
                    },
                    S,
                  ),
                ),
              }),
              y.jsx("p", {
                className:
                  "contact-subtext text-sm text-black/50 max-w-xl leading-relaxed mb-6 sm:mb-8",
                children:
                  "Whether you need a Wix site, a Squarespace build, or a fully custom-coded website — fill in the form below and I'll get back to you within 24 hours.",
              }),
              y.jsx("div", {
                className: "contact-divider w-full h-px bg-black/10",
              }),
            ],
          }),
          y.jsx("div", {
            className:
              "contact-cards grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-8 sm:mb-10",
            children: sS.map((S) =>
              y.jsxs(
                "a",
                {
                  href: S.href,
                  target: S.label === "WhatsApp" ? "_blank" : void 0,
                  rel: S.label === "WhatsApp" ? "noopener noreferrer" : void 0,
                  className:
                    "contact-card border border-black/10 p-5 sm:p-7 flex flex-col gap-4 sm:gap-5 bg-white",
                  children: [
                    y.jsxs("div", {
                      className: "flex items-start justify-between",
                      children: [
                        y.jsx("div", {
                          className:
                            "card-icon w-10 h-10 sm:w-11 sm:h-11 bg-black/5 flex items-center justify-center text-black",
                          children: y.jsx(S.icon, {
                            className: "h-4 w-4",
                            "aria-hidden": "true",
                          }),
                        }),
                        y.jsx(Xa, {
                          className: "card-arrow h-4 w-4 text-white opacity-0",
                          "aria-hidden": "true",
                        }),
                      ],
                    }),
                    y.jsxs("div", {
                      children: [
                        y.jsx("p", {
                          className:
                            "card-label text-[10px] font-semibold tracking-[0.3em] uppercase text-black/40 mb-1",
                          children: S.label,
                        }),
                        y.jsx("p", {
                          className:
                            "card-value text-sm font-medium text-black break-words",
                          children: S.value,
                        }),
                      ],
                    }),
                  ],
                },
                S.label,
              ),
            ),
          }),
          y.jsxs("div", {
            className:
              "grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 sm:gap-8 items-start",
            children: [
              y.jsx("div", {
                className:
                  "contact-form-wrap border border-black/10 p-6 sm:p-10",
                children: i
                  ? y.jsxs("div", {
                      className:
                        "flex flex-col items-center gap-4 py-10 text-center",
                      children: [
                        y.jsx(t_, {
                          className: "h-10 w-10 text-black",
                          "aria-hidden": "true",
                        }),
                        y.jsx("h3", {
                          className:
                            "text-xl font-black uppercase tracking-tight",
                          children: "Message Sent!",
                        }),
                        y.jsx("p", {
                          className:
                            "text-sm text-black/50 max-w-sm leading-relaxed",
                          children:
                            "Thanks for reaching out. I'll be in touch within 24 hours.",
                        }),
                        y.jsx("button", {
                          onClick: () => u(!1),
                          className:
                            "mt-2 text-[10px] font-bold tracking-[0.25em] uppercase border border-black/15 px-6 py-2.5 hover:bg-black hover:text-white transition-colors",
                          children: "Send Another",
                        }),
                      ],
                    })
                  : y.jsxs("form", {
                      onSubmit: _,
                      noValidate: !0,
                      "aria-label": "Contact form",
                      children: [
                        y.jsxs("div", {
                          className: "mb-6",
                          children: [
                            y.jsx("h3", {
                              className:
                                "text-lg font-black uppercase tracking-tight mb-1",
                              children: "Start a Conversation",
                            }),
                            y.jsx("p", {
                              className: "text-xs text-black/40",
                              children:
                                "I respond to every message within 24 hours.",
                            }),
                          ],
                        }),
                        y.jsxs("div", {
                          className:
                            "grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3",
                          children: [
                            y.jsxs("div", {
                              children: [
                                y.jsxs("label", {
                                  htmlFor: "contact-name",
                                  className:
                                    "block text-[10px] font-semibold tracking-[0.25em] uppercase text-black/40 mb-1.5",
                                  children: [
                                    "Your Name ",
                                    y.jsx("span", {
                                      "aria-hidden": "true",
                                      children: "*",
                                    }),
                                  ],
                                }),
                                y.jsx("input", {
                                  id: "contact-name",
                                  name: "name",
                                  type: "text",
                                  required: !0,
                                  autoComplete: "name",
                                  value: l.name,
                                  onChange: p,
                                  placeholder: "Jane Smith",
                                  className: b,
                                }),
                              ],
                            }),
                            y.jsxs("div", {
                              children: [
                                y.jsxs("label", {
                                  htmlFor: "contact-email",
                                  className:
                                    "block text-[10px] font-semibold tracking-[0.25em] uppercase text-black/40 mb-1.5",
                                  children: [
                                    "Email Address ",
                                    y.jsx("span", {
                                      "aria-hidden": "true",
                                      children: "*",
                                    }),
                                  ],
                                }),
                                y.jsx("input", {
                                  id: "contact-email",
                                  name: "email",
                                  type: "email",
                                  required: !0,
                                  autoComplete: "email",
                                  value: l.email,
                                  onChange: p,
                                  placeholder: "jane@example.com",
                                  className: b,
                                }),
                              ],
                            }),
                          ],
                        }),
                        y.jsxs("div", {
                          className: "mb-3",
                          children: [
                            y.jsx("label", {
                              htmlFor: "contact-project",
                              className:
                                "block text-[10px] font-semibold tracking-[0.25em] uppercase text-black/40 mb-1.5",
                              children: "Project Type",
                            }),
                            y.jsxs("select", {
                              id: "contact-project",
                              name: "projectType",
                              value: l.projectType,
                              onChange: p,
                              className: `${b} cursor-pointer`,
                              children: [
                                y.jsx("option", {
                                  value: "",
                                  children: "Select a service...",
                                }),
                                y.jsx("option", {
                                  value: "Wix Website",
                                  children: "Wix Website",
                                }),
                                y.jsx("option", {
                                  value: "Squarespace Website",
                                  children: "Squarespace Website",
                                }),
                                y.jsx("option", {
                                  value: "Custom Coded Website",
                                  children:
                                    "Custom Coded Website (React / HTML)",
                                }),
                                y.jsx("option", {
                                  value: "Website Redesign",
                                  children: "Website Redesign",
                                }),
                                y.jsx("option", {
                                  value: "Other",
                                  children: "Other / Not Sure Yet",
                                }),
                              ],
                            }),
                          ],
                        }),
                        y.jsxs("div", {
                          className: "mb-5",
                          children: [
                            y.jsxs("label", {
                              htmlFor: "contact-message",
                              className:
                                "block text-[10px] font-semibold tracking-[0.25em] uppercase text-black/40 mb-1.5",
                              children: [
                                "Tell Me About Your Project ",
                                y.jsx("span", {
                                  "aria-hidden": "true",
                                  children: "*",
                                }),
                              ],
                            }),
                            y.jsx("textarea", {
                              id: "contact-message",
                              name: "message",
                              required: !0,
                              rows: 5,
                              value: l.message,
                              onChange: p,
                              placeholder:
                                "What do you need? What's your timeline? Any details help...",
                              className: `${b} resize-none`,
                            }),
                          ],
                        }),
                        h &&
                          y.jsx("p", {
                            role: "alert",
                            className: "text-xs text-red-600 mb-4",
                            children: h,
                          }),
                        y.jsxs("button", {
                          type: "submit",
                          disabled: o,
                          className:
                            "group flex items-center gap-3 bg-black text-white font-bold text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-black/80 transition-colors disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto justify-center",
                          children: [
                            y.jsx(L2, {
                              className: "h-3.5 w-3.5",
                              "aria-hidden": "true",
                            }),
                            o ? "Sending..." : "Send Message",
                            !o &&
                              y.jsx(Xa, {
                                className:
                                  "h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ml-auto sm:ml-0",
                                "aria-hidden": "true",
                              }),
                          ],
                        }),
                      ],
                    }),
              }),
              y.jsxs("div", {
                className:
                  "border border-black/10 p-6 sm:p-10 flex flex-col gap-5 lg:max-w-xs",
                children: [
                  y.jsxs("div", {
                    className: "flex items-center gap-2 text-black/40",
                    children: [
                      y.jsx(T2, {
                        className: "h-3.5 w-3.5",
                        "aria-hidden": "true",
                      }),
                      y.jsx("span", {
                        className:
                          "text-[10px] font-semibold tracking-[0.3em] uppercase",
                        children: "Based in Bangladesh",
                      }),
                    ],
                  }),
                  y.jsxs("h3", {
                    className:
                      "text-[clamp(1.4rem,3vw,2rem)] font-black leading-[0.95] tracking-tight uppercase",
                    children: [
                      "Ready to Start",
                      y.jsx("br", {}),
                      "Your Project?",
                    ],
                  }),
                  y.jsx("p", {
                    className: "text-sm text-black/50 leading-relaxed",
                    children:
                      "Let's build a professional website that grows your business, attracts the right clients, and makes your brand look its best online.",
                  }),
                  y.jsxs("div", {
                    className: "border-t border-black/10 pt-5 space-y-3",
                    children: [
                      y.jsxs("div", {
                        className:
                          "flex items-center gap-3 text-xs text-black/50",
                        children: [
                          y.jsx("span", {
                            className:
                              "w-1.5 h-1.5 rounded-full bg-black shrink-0",
                            "aria-hidden": "true",
                          }),
                          "24-hour response time",
                        ],
                      }),
                      y.jsxs("div", {
                        className:
                          "flex items-center gap-3 text-xs text-black/50",
                        children: [
                          y.jsx("span", {
                            className:
                              "w-1.5 h-1.5 rounded-full bg-black shrink-0",
                            "aria-hidden": "true",
                          }),
                          "Free initial consultation",
                        ],
                      }),
                      y.jsxs("div", {
                        className:
                          "flex items-center gap-3 text-xs text-black/50",
                        children: [
                          y.jsx("span", {
                            className:
                              "w-1.5 h-1.5 rounded-full bg-black shrink-0",
                            "aria-hidden": "true",
                          }),
                          "Wix, Squarespace & custom builds",
                        ],
                      }),
                      y.jsxs("div", {
                        className:
                          "flex items-center gap-3 text-xs text-black/50",
                        children: [
                          y.jsx("span", {
                            className:
                              "w-1.5 h-1.5 rounded-full bg-black shrink-0",
                            "aria-hidden": "true",
                          }),
                          y.jsxs("span", {
                            className: "relative flex items-center gap-1.5",
                            children: [
                              y.jsxs("span", {
                                className: "relative flex h-1.5 w-1.5",
                                children: [
                                  y.jsx("span", {
                                    className:
                                      "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75",
                                  }),
                                  y.jsx("span", {
                                    className:
                                      "relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500",
                                  }),
                                ],
                              }),
                              "Available now — next slot: Aug 2025",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  y.jsxs("a", {
                    href: "https://wa.me/8801889557719",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "group flex items-center gap-3 border border-black/15 hover:border-black text-black font-bold text-xs tracking-[0.2em] uppercase px-6 sm:px-8 py-4 transition-colors hover:bg-black hover:text-white justify-center",
                    children: [
                      y.jsx(l_, {
                        className: "h-3.5 w-3.5",
                        "aria-hidden": "true",
                      }),
                      "WhatsApp Me",
                      y.jsx(Xa, {
                        className:
                          "h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ml-auto",
                        "aria-hidden": "true",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  oS = () => {
    const f = Te.useRef(null),
      l = new Date().getFullYear();
    return (
      Aa(
        () => {
          (te.fromTo(
            ".footer-divider",
            { scaleX: 0, transformOrigin: "left center" },
            {
              scaleX: 1,
              duration: 1.2,
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: f.current,
                start: "top 95%",
                toggleActions: "play none none reverse",
              },
            },
          ),
            te.fromTo(
              ".footer-cta-word",
              { yPercent: 110, opacity: 0 },
              {
                yPercent: 0,
                opacity: 1,
                duration: 0.9,
                stagger: 0.1,
                ease: "power4.out",
                scrollTrigger: {
                  trigger: ".footer-cta",
                  start: "top 90%",
                  toggleActions: "play none none reverse",
                },
              },
            ),
            te.fromTo(
              ".footer-bottom-item",
              { y: 20, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: ".footer-bottom",
                  start: "top 98%",
                  toggleActions: "play none none reverse",
                },
              },
            ),
            document.querySelectorAll(".footer-social").forEach((i) => {
              (i.addEventListener("mouseenter", () =>
                te.to(i, {
                  backgroundColor: "#000",
                  color: "#fff",
                  borderColor: "#000",
                  duration: 0.2,
                }),
              ),
                i.addEventListener("mouseleave", () =>
                  te.to(i, {
                    backgroundColor: "#fff",
                    color: "#000",
                    borderColor: "rgba(0,0,0,0.15)",
                    duration: 0.2,
                  }),
                ));
            }));
          const r = document.querySelector(".footer-top-btn");
          r &&
            (r.addEventListener("mouseenter", () =>
              te.to(r, {
                backgroundColor: "#000",
                color: "#fff",
                borderColor: "#000",
                duration: 0.2,
              }),
            ),
            r.addEventListener("mouseleave", () =>
              te.to(r, {
                backgroundColor: "#fff",
                color: "#000",
                borderColor: "rgba(0,0,0,0.15)",
                duration: 0.2,
              }),
            ));
        },
        { scope: f },
      ),
      y.jsxs("footer", {
        ref: f,
        className: "bg-white text-black overflow-hidden",
        children: [
          y.jsx("div", { className: "footer-divider w-full h-px bg-black/10" }),
          y.jsx("div", {
            className:
              "footer-cta max-w-[1200px] mx-auto px-5 sm:px-8 md:px-14 pt-10 sm:pt-14 md:pt-16 pb-8 sm:pb-10 md:pb-12 border-b border-black/10",
            children: y.jsxs("div", {
              className:
                "flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 sm:gap-8",
              children: [
                y.jsx("div", {
                  className: "space-y-0",
                  children: ["Start Your", "Next Project."].map((r, i) =>
                    y.jsx(
                      "div",
                      {
                        className: "overflow-hidden",
                        children: y.jsx("p", {
                          className: `footer-cta-word text-[clamp(2rem,6vw,5.5rem)] font-black leading-[0.92] tracking-tight uppercase
                  ${i === 1 ? "text-white [-webkit-text-stroke:2px_black]" : "text-black"}`,
                          children: r,
                        }),
                      },
                      r,
                    ),
                  ),
                }),
                y.jsxs("a", {
                  href: "mailto:pritomdas6783@gmail.com",
                  className:
                    "group flex items-center gap-3 bg-black text-white font-bold text-xs tracking-[0.2em] uppercase px-6 sm:px-8 py-3.5 sm:py-4 hover:bg-black/80 transition-colors shrink-0 w-full sm:w-auto justify-center sm:justify-start",
                  children: [
                    "Contact Me",
                    y.jsx(Xa, {
                      className:
                        "h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform",
                    }),
                  ],
                }),
              ],
            }),
          }),
          y.jsxs("div", {
            className:
              "footer-bottom max-w-[1200px] mx-auto px-5 sm:px-8 md:px-14 py-6 sm:py-7 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-5",
            children: [
              y.jsxs("a", {
                href: "#home",
                className: "footer-bottom-item flex items-center gap-2 group",
                children: [
                  y.jsx("span", {
                    className:
                      "w-6 h-6 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-transform duration-200",
                    children: y.jsx("span", {
                      className: "text-white font-black text-[10px]",
                      children: "P",
                    }),
                  }),
                  y.jsx("span", {
                    className:
                      "text-xs font-semibold tracking-[0.25em] uppercase text-black",
                    children: "Pritom Das",
                  }),
                ],
              }),
              y.jsxs("p", {
                className:
                  "footer-bottom-item text-[10px] font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-black/35 text-center",
                children: [
                  "© ",
                  l,
                  " Pritom Das — Built with a minimal, client-ready approach.",
                ],
              }),
              y.jsxs("div", {
                className:
                  "footer-bottom-item flex items-center gap-2 sm:gap-3 flex-wrap justify-center",
                children: [
                  y.jsx("a", {
                    href: "https://github.com/Pritom678",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "footer-social p-2.5 border border-black/15 text-black transition-none",
                    children: y.jsx(_o, { className: "h-3.5 w-3.5" }),
                  }),
                  y.jsx("a", {
                    href: "https://www.linkedin.com/in/pritom1722002",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "footer-social p-2.5 border border-black/15 text-black transition-none",
                    children: y.jsx(u_, { className: "h-3.5 w-3.5" }),
                  }),
                  y.jsxs("a", {
                    href: "#home",
                    className:
                      "footer-top-btn flex items-center gap-2 border border-black/15 text-black text-[10px] font-semibold tracking-[0.2em] uppercase px-3 sm:px-4 py-2.5 transition-none ml-1",
                    children: [
                      "Back to Top",
                      y.jsx(Xa, { className: "h-3 w-3 -rotate-45" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  fS = () =>
    y.jsxs("div", {
      className: "min-h-screen text-foreground",
      children: [
        y.jsx(Z2, {}),
        y.jsx(K2, {}),
        y.jsxs("main", {
          id: "main-content",
          children: [
            y.jsx(W2, {}),
            y.jsx(eS, {}),
            y.jsx(aS, {}),
            y.jsx(iS, {}),
            y.jsx(uS, {}),
            y.jsx(cS, {}),
          ],
        }),
        y.jsx(oS, {}),
      ],
    }),
  dS = () => y.jsx(fS, {});
te.registerPlugin(qe);
wb.createRoot(document.getElementById("root")).render(y.jsx(dS, {}));
