System.register([], function (_export, _context) {
  return {
    execute: function () {
      System.register("chunks:///index-39c2baff.js", ["cc"], function (t) {
        "use strict";
        var e,
          n,
          i,
          o,
          r,
          a,
          s,
          u,
          c,
          l,
          m,
          h,
          p,
          _,
          d,
          f,
          y,
          S,
          g,
          v,
          E,
          b,
          C,
          x,
          w,
          T,
          B,
          I,
          A,
          N,
          k,
          O,
          P;
        return {
          setters: [
            function (t) {
              (e = t.cclegacy),
                (n = t.v3),
                (i = t.v2),
                (o = t.macro),
                (r = t._decorator),
                (a = t.sp),
                (s = t.Label),
                (u = t.CCFloat),
                (c = t.Component),
                (l = t.warn),
                (m = t.log),
                (h = t.Node),
                (p = t.Button),
                (_ = t.Sprite),
                (d = t.NodeEventType),
                (f = t.Animation),
                (y = t.AnimationClip),
                (S = t.Enum),
                (g = t.director),
                (v = t.Director),
                (E = t.Vec3),
                (b = t.UIRenderer),
                (C = t.UIOpacity),
                (x = t.UITransform),
                (w = t.tween),
                (T = t.error),
                (B = t.RichText),
                (I = t.CCBoolean),
                (A = t.Tween),
                (N = t.Color),
                (k = t.JsonAsset),
                (O = t.math),
                (P = t.SpriteFrame);
            },
          ],
          execute: function () {
            function R() {
              /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
              R = t("p", function () {
                return e;
              });
              var e = {},
                n = Object.prototype,
                i = n.hasOwnProperty,
                o = "function" == typeof Symbol ? Symbol : {},
                r = o.iterator || "@@iterator",
                a = o.asyncIterator || "@@asyncIterator",
                s = o.toStringTag || "@@toStringTag";
              function u(t, e, n) {
                return (
                  Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  }),
                  t[e]
                );
              }
              try {
                u({}, "");
              } catch (t) {
                u = function (t, e, n) {
                  return (t[e] = n);
                };
              }
              function c(t, e, n, i) {
                var o = e && e.prototype instanceof h ? e : h,
                  r = Object.create(o.prototype),
                  a = new x(i || []);
                return (
                  (r._invoke = (function (t, e, n) {
                    var i = "suspendedStart";
                    return function (o, r) {
                      if ("executing" === i)
                        throw new Error("Generator is already running");
                      if ("completed" === i) {
                        if ("throw" === o) throw r;
                        return T();
                      }
                      for (n.method = o, n.arg = r; ; ) {
                        var a = n.delegate;
                        if (a) {
                          var s = E(a, n);
                          if (s) {
                            if (s === m) continue;
                            return s;
                          }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                          if ("suspendedStart" === i)
                            throw ((i = "completed"), n.arg);
                          n.dispatchException(n.arg);
                        } else
                          "return" === n.method && n.abrupt("return", n.arg);
                        i = "executing";
                        var u = l(t, e, n);
                        if ("normal" === u.type) {
                          if (
                            ((i = n.done ? "completed" : "suspendedYield"),
                            u.arg === m)
                          )
                            continue;
                          return { value: u.arg, done: n.done };
                        }
                        "throw" === u.type &&
                          ((i = "completed"),
                          (n.method = "throw"),
                          (n.arg = u.arg));
                      }
                    };
                  })(t, n, a)),
                  r
                );
              }
              function l(t, e, n) {
                try {
                  return { type: "normal", arg: t.call(e, n) };
                } catch (t) {
                  return { type: "throw", arg: t };
                }
              }
              e.wrap = c;
              var m = {};
              function h() {}
              function p() {}
              function _() {}
              var d = {};
              u(d, r, function () {
                return this;
              });
              var f = Object.getPrototypeOf,
                y = f && f(f(w([])));
              y && y !== n && i.call(y, r) && (d = y);
              var S = (_.prototype = h.prototype = Object.create(d));
              function g(t) {
                ["next", "throw", "return"].forEach(function (e) {
                  u(t, e, function (t) {
                    return this._invoke(e, t);
                  });
                });
              }
              function v(t, e) {
                function n(o, r, a, s) {
                  var u = l(t[o], t, r);
                  if ("throw" !== u.type) {
                    var c = u.arg,
                      m = c.value;
                    return m && "object" == typeof m && i.call(m, "__await")
                      ? e.resolve(m.__await).then(
                          function (t) {
                            n("next", t, a, s);
                          },
                          function (t) {
                            n("throw", t, a, s);
                          }
                        )
                      : e.resolve(m).then(
                          function (t) {
                            (c.value = t), a(c);
                          },
                          function (t) {
                            return n("throw", t, a, s);
                          }
                        );
                  }
                  s(u.arg);
                }
                var o;
                this._invoke = function (t, i) {
                  function r() {
                    return new e(function (e, o) {
                      n(t, i, e, o);
                    });
                  }
                  return (o = o ? o.then(r, r) : r());
                };
              }
              function E(t, e) {
                var n = t.iterator[e.method];
                if (void 0 === n) {
                  if (((e.delegate = null), "throw" === e.method)) {
                    if (
                      t.iterator.return &&
                      ((e.method = "return"),
                      (e.arg = void 0),
                      E(t, e),
                      "throw" === e.method)
                    )
                      return m;
                    (e.method = "throw"),
                      (e.arg = new TypeError(
                        "The iterator does not provide a 'throw' method"
                      ));
                  }
                  return m;
                }
                var i = l(n, t.iterator, e.arg);
                if ("throw" === i.type)
                  return (
                    (e.method = "throw"),
                    (e.arg = i.arg),
                    (e.delegate = null),
                    m
                  );
                var o = i.arg;
                return o
                  ? o.done
                    ? ((e[t.resultName] = o.value),
                      (e.next = t.nextLoc),
                      "return" !== e.method &&
                        ((e.method = "next"), (e.arg = void 0)),
                      (e.delegate = null),
                      m)
                    : o
                  : ((e.method = "throw"),
                    (e.arg = new TypeError("iterator result is not an object")),
                    (e.delegate = null),
                    m);
              }
              function b(t) {
                var e = { tryLoc: t[0] };
                1 in t && (e.catchLoc = t[1]),
                  2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
                  this.tryEntries.push(e);
              }
              function C(t) {
                var e = t.completion || {};
                (e.type = "normal"), delete e.arg, (t.completion = e);
              }
              function x(t) {
                (this.tryEntries = [{ tryLoc: "root" }]),
                  t.forEach(b, this),
                  this.reset(!0);
              }
              function w(t) {
                if (t) {
                  var e = t[r];
                  if (e) return e.call(t);
                  if ("function" == typeof t.next) return t;
                  if (!isNaN(t.length)) {
                    var n = -1,
                      o = function e() {
                        for (; ++n < t.length; )
                          if (i.call(t, n))
                            return (e.value = t[n]), (e.done = !1), e;
                        return (e.value = void 0), (e.done = !0), e;
                      };
                    return (o.next = o);
                  }
                }
                return { next: T };
              }
              function T() {
                return { value: void 0, done: !0 };
              }
              return (
                (p.prototype = _),
                u(S, "constructor", _),
                u(_, "constructor", p),
                (p.displayName = u(_, s, "GeneratorFunction")),
                (e.isGeneratorFunction = function (t) {
                  var e = "function" == typeof t && t.constructor;
                  return (
                    !!e &&
                    (e === p ||
                      "GeneratorFunction" === (e.displayName || e.name))
                  );
                }),
                (e.mark = function (t) {
                  return (
                    Object.setPrototypeOf
                      ? Object.setPrototypeOf(t, _)
                      : ((t.__proto__ = _), u(t, s, "GeneratorFunction")),
                    (t.prototype = Object.create(S)),
                    t
                  );
                }),
                (e.awrap = function (t) {
                  return { __await: t };
                }),
                g(v.prototype),
                u(v.prototype, a, function () {
                  return this;
                }),
                (e.AsyncIterator = v),
                (e.async = function (t, n, i, o, r) {
                  void 0 === r && (r = Promise);
                  var a = new v(c(t, n, i, o), r);
                  return e.isGeneratorFunction(n)
                    ? a
                    : a.next().then(function (t) {
                        return t.done ? t.value : a.next();
                      });
                }),
                g(S),
                u(S, s, "Generator"),
                u(S, r, function () {
                  return this;
                }),
                u(S, "toString", function () {
                  return "[object Generator]";
                }),
                (e.keys = function (t) {
                  var e = [];
                  for (var n in t) e.push(n);
                  return (
                    e.reverse(),
                    function n() {
                      for (; e.length; ) {
                        var i = e.pop();
                        if (i in t) return (n.value = i), (n.done = !1), n;
                      }
                      return (n.done = !0), n;
                    }
                  );
                }),
                (e.values = w),
                (x.prototype = {
                  constructor: x,
                  reset: function (t) {
                    if (
                      ((this.prev = 0),
                      (this.next = 0),
                      (this.sent = this._sent = void 0),
                      (this.done = !1),
                      (this.delegate = null),
                      (this.method = "next"),
                      (this.arg = void 0),
                      this.tryEntries.forEach(C),
                      !t)
                    )
                      for (var e in this)
                        "t" === e.charAt(0) &&
                          i.call(this, e) &&
                          !isNaN(+e.slice(1)) &&
                          (this[e] = void 0);
                  },
                  stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval;
                  },
                  dispatchException: function (t) {
                    if (this.done) throw t;
                    var e = this;
                    function n(n, i) {
                      return (
                        (a.type = "throw"),
                        (a.arg = t),
                        (e.next = n),
                        i && ((e.method = "next"), (e.arg = void 0)),
                        !!i
                      );
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                      var r = this.tryEntries[o],
                        a = r.completion;
                      if ("root" === r.tryLoc) return n("end");
                      if (r.tryLoc <= this.prev) {
                        var s = i.call(r, "catchLoc"),
                          u = i.call(r, "finallyLoc");
                        if (s && u) {
                          if (this.prev < r.catchLoc) return n(r.catchLoc, !0);
                          if (this.prev < r.finallyLoc) return n(r.finallyLoc);
                        } else if (s) {
                          if (this.prev < r.catchLoc) return n(r.catchLoc, !0);
                        } else {
                          if (!u)
                            throw new Error(
                              "try statement without catch or finally"
                            );
                          if (this.prev < r.finallyLoc) return n(r.finallyLoc);
                        }
                      }
                    }
                  },
                  abrupt: function (t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                      var o = this.tryEntries[n];
                      if (
                        o.tryLoc <= this.prev &&
                        i.call(o, "finallyLoc") &&
                        this.prev < o.finallyLoc
                      ) {
                        var r = o;
                        break;
                      }
                    }
                    r &&
                      ("break" === t || "continue" === t) &&
                      r.tryLoc <= e &&
                      e <= r.finallyLoc &&
                      (r = null);
                    var a = r ? r.completion : {};
                    return (
                      (a.type = t),
                      (a.arg = e),
                      r
                        ? ((this.method = "next"),
                          (this.next = r.finallyLoc),
                          m)
                        : this.complete(a)
                    );
                  },
                  complete: function (t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return (
                      "break" === t.type || "continue" === t.type
                        ? (this.next = t.arg)
                        : "return" === t.type
                        ? ((this.rval = this.arg = t.arg),
                          (this.method = "return"),
                          (this.next = "end"))
                        : "normal" === t.type && e && (this.next = e),
                      m
                    );
                  },
                  finish: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                      var n = this.tryEntries[e];
                      if (n.finallyLoc === t)
                        return this.complete(n.completion, n.afterLoc), C(n), m;
                    }
                  },
                  catch: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                      var n = this.tryEntries[e];
                      if (n.tryLoc === t) {
                        var i = n.completion;
                        if ("throw" === i.type) {
                          var o = i.arg;
                          C(n);
                        }
                        return o;
                      }
                    }
                    throw new Error("illegal catch attempt");
                  },
                  delegateYield: function (t, e, n) {
                    return (
                      (this.delegate = {
                        iterator: w(t),
                        resultName: e,
                        nextLoc: n,
                      }),
                      "next" === this.method && (this.arg = void 0),
                      m
                    );
                  },
                }),
                e
              );
            }
            function F(t, e, n, i, o, r, a) {
              try {
                var s = t[r](a),
                  u = s.value;
              } catch (t) {
                return void n(t);
              }
              s.done ? e(u) : Promise.resolve(u).then(i, o);
            }
            function L(t) {
              return function () {
                var e = this,
                  n = arguments;
                return new Promise(function (i, o) {
                  var r = t.apply(e, n);
                  function a(t) {
                    F(r, i, o, a, s, "next", t);
                  }
                  function s(t) {
                    F(r, i, o, a, s, "throw", t);
                  }
                  a(void 0);
                });
              };
            }
            function M(t, e) {
              for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(t, i.key, i);
              }
            }
            function D(t, e, n) {
              return (
                e && M(t.prototype, e),
                n && M(t, n),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                t
              );
            }
            function G(t, e) {
              (t.prototype = Object.create(e.prototype)),
                (t.prototype.constructor = t),
                z(t, e);
            }
            function z(t, e) {
              return (z = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                    return (t.__proto__ = e), t;
                  })(t, e);
            }
            function U(t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            }
            function W(t, e) {
              (null == e || e > t.length) && (e = t.length);
              for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
              return i;
            }
            function H(t, e) {
              var n =
                ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                t["@@iterator"];
              if (n) return (n = n.call(t)).next.bind(n);
              if (
                Array.isArray(t) ||
                (n = (function (t, e) {
                  if (t) {
                    if ("string" == typeof t) return W(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return (
                      "Object" === n &&
                        t.constructor &&
                        (n = t.constructor.name),
                      "Map" === n || "Set" === n
                        ? Array.from(t)
                        : "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? W(t, e)
                        : void 0
                    );
                  }
                })(t)) ||
                (e && t && "number" == typeof t.length)
              ) {
                n && (t = n);
                var i = 0;
                return function () {
                  return i >= t.length
                    ? { done: !0 }
                    : { done: !1, value: t[i++] };
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            function J(t, e, n, i) {
              n &&
                Object.defineProperty(t, e, {
                  enumerable: n.enumerable,
                  configurable: n.configurable,
                  writable: n.writable,
                  value: n.initializer ? n.initializer.call(i) : void 0,
                });
            }
            function j(t, e, n, i, o) {
              var r = {};
              return (
                Object.keys(i).forEach(function (t) {
                  r[t] = i[t];
                }),
                (r.enumerable = !!r.enumerable),
                (r.configurable = !!r.configurable),
                ("value" in r || r.initializer) && (r.writable = !0),
                (r = n
                  .slice()
                  .reverse()
                  .reduce(function (n, i) {
                    return i(t, e, n) || n;
                  }, r)),
                o &&
                  void 0 !== r.initializer &&
                  ((r.value = r.initializer ? r.initializer.call(o) : void 0),
                  (r.initializer = void 0)),
                void 0 === r.initializer &&
                  (Object.defineProperty(t, e, r), (r = null)),
                r
              );
            }
            t({
              A: void 0,
              D: void 0,
              E: void 0,
              G: function () {
                t("E", mt.AppManager),
                  t("y", mt.AutoShow),
                  t("L", mt.Backpack),
                  t("P", mt.DailyMission),
                  t("O", mt.GaiaManager),
                  (At = t("j", mt.StateManager)),
                  t("I", mt.IframeCommand),
                  (kt = t("n", mt.LocaleString)),
                  mt.Trial,
                  (ht = t("u", mt.BuyBonus)),
                  (dt = t("A", mt.CommonGame)),
                  mt.localStorage,
                  (Ot = t("l", mt.SoundManager)),
                  null == mt.SoundAudioManager
                    ? (l("SoundAudioManager not found"),
                      (Lt = mt.SoundManager).SetSettingJson ||
                        (Lt.SetSettingJson = function (t) {}),
                      Lt.AddAudioClips || (Lt.AddAudioClips = function (t) {}),
                      Lt.ClearSetting || (Lt.ClearSetting = function () {}))
                    : (Lt = mt.SoundAudioManager),
                  t("Q", mt.Debris),
                  (wt = t("i", mt.NewExtra)),
                  t("K", mt.GiftCode),
                  (Bt = t("D", mt.MsgBox)),
                  (xt = t("h", mt.NewBottombar)),
                  (Rt = t("f", mt.EventManager)),
                  t("q", mt.LoadPrefabManager),
                  mt.FuncCtrlManager,
                  (zt = t("H", mt.ConnectionManager)),
                  (Ft = mt.NotificationManager),
                  (X = t("e", mt.Define)),
                  (K = t("g", mt.Tools)),
                  t("z", mt.RoundController),
                  (V = t("m", mt.ExtraBetController)),
                  t("N", mt.FakeServer),
                  t("v", mt.TempoSetting);
              },
              H: void 0,
              I: void 0,
              K: void 0,
              L: void 0,
              N: void 0,
              O: void 0,
              P: void 0,
              Q: void 0,
              S: void 0,
              _: j,
              a: G,
              b: J,
              c: U,
              d: D,
              e: void 0,
              f: void 0,
              g: void 0,
              h: void 0,
              i: void 0,
              j: void 0,
              k: void 0,
              l: void 0,
              m: void 0,
              n: void 0,
              o: L,
              p: R,
              q: void 0,
              r: H,
              u: void 0,
              v: void 0,
              y: void 0,
              z: void 0,
            }),
              e._RF.push({}, "db4337zK39CwpvA3Bh+gyjl", "index", void 0),
              globalThis.Astarte || (globalThis.Astarte = {});
            var K,
              Y,
              q,
              X,
              V,
              Q,
              Z,
              $,
              tt,
              et,
              nt,
              it,
              ot,
              rt,
              at,
              st,
              ut,
              ct,
              lt,
              mt = globalThis.Astarte;
            e._RF.pop(),
              e._RF.push({}, "4c480cU1LpMo4WqCcvtd0ph", "Tools", void 0),
              e._RF.pop(),
              e._RF.push({}, "de32cbzFmBN4rL/N8DkMkAD", "Define", void 0),
              (function (t) {
                (t[(t.NORMAL = 0)] = "NORMAL"), (t[(t.USING = 1)] = "USING");
              })(Y || (Y = {})),
              (function (t) {
                (t[(t.GAME_CLOSE = 1e3)] = "GAME_CLOSE"),
                  (t[(t.LOGIN = 1001)] = "LOGIN"),
                  (t[(t.WAIT_RES = 1002)] = "WAIT_RES"),
                  (t[(t.CHECK_UNSHOW = 1003)] = "CHECK_UNSHOW"),
                  (t[(t.CHECK_FREESPIN = 1004)] = "CHECK_FREESPIN"),
                  (t[(t.IDLE = 1005)] = "IDLE"),
                  (t[(t.SPIN_REQ = 1006)] = "SPIN_REQ"),
                  (t[(t.SPIN = 1007)] = "SPIN"),
                  (t[(t.COMMON_SHOW = 1008)] = "COMMON_SHOW"),
                  (t[(t.MHB_SHOW = 1009)] = "MHB_SHOW"),
                  (t[(t.JP_SHOW = 1010)] = "JP_SHOW"),
                  (t[(t.CHECK_STATE = 1011)] = "CHECK_STATE"),
                  (t[(t.END = 1012)] = "END"),
                  (t[(t.FREESPIN_WAIT_RES = 1013)] = "FREESPIN_WAIT_RES"),
                  (t[(t.TURBO = 1014)] = "TURBO"),
                  (t[(t.FIRST_IN_GAME = 1015)] = "FIRST_IN_GAME"),
                  (t[(t.CHECK_APP_REWARD = 1016)] = "CHECK_APP_REWARD"),
                  (t[(t.CHECK_BUFF = 1017)] = "CHECK_BUFF"),
                  (t[(t.ACTIVATE_BUFF = 1018)] = "ACTIVATE_BUFF"),
                  (t[(t.END_BUFF = 1019)] = "END_BUFF"),
                  (t[(t.GRAND_JP = 1020)] = "GRAND_JP");
              })(q || (q = t("k", {}))),
              e._RF.pop(),
              e._RF.push(
                {},
                "813162EnmlPD6ZkP+n93pP2",
                "RoundController",
                void 0
              ),
              e._RF.pop(),
              e._RF.push(
                {},
                "1d5a8ODImpC9qtSki10xwQQ",
                "ExtraBetController",
                void 0
              ),
              e._RF.pop(),
              e._RF.push({}, "cd534oKcOFFap8T54HqFCAE", "FakeServer", void 0),
              e._RF.pop(),
              e._RF.push({}, "3ec76bGz5NECbh3RNjc2SdI", "TempoSetting", void 0),
              e._RF.pop(),
              e._RF.push({}, "6f779uo//FP8owPSb4jjuXE", "CommonEffect", void 0),
              (function (t) {
                var e = (function () {
                  function t() {}
                  return (
                    (t.PascalTriangleLine = function (t) {
                      for (var e = [1], n = 1; n < t; n++)
                        e[n] = (e[n - 1] * (t - n)) / n;
                      return e;
                    }),
                    (t.RangedRandom = function (t, e) {
                      return (e - t) * Math.random() + t;
                    }),
                    (t.GetRandomRectPos = function (t, e, n) {
                      var r = i(
                        (this.RangedRandom(-e.x, e.x) / 2) | 0,
                        (this.RangedRandom(-e.x, e.x) / 2) | 0
                      ).rotate(n * o.RAD);
                      return t.add(r);
                    }),
                    (t.GetRandomOvalPos = function (t, e, n) {
                      var r = e.y / Math.max(1, e.x),
                        a = Math.random() * e.x * 0.5,
                        s = Math.random() * Math.PI * 2,
                        u = i(a * Math.cos(s), a * Math.sin(s) * r).rotate(
                          n * o.RAD
                        );
                      return t.add(u);
                    }),
                    (t.ZoomAndFlip = function (t, e, n, o) {
                      var r = Math.sin(o * Math.PI) * (e - t) + t,
                        a = Math.cos(o * Math.PI * n);
                      return i(r * a, r);
                    }),
                    t
                  );
                })();
                t.ExtendsMath = e;
                var r = (function () {
                  function t(t) {
                    switch (
                      ((this.pts = null),
                      (this.len = 0),
                      (this.ptl = null),
                      (this.bez = null),
                      (this.len = t.length),
                      0 == this.len
                        ? (t.push(n(0, 0)), t.push(n(0, 0)))
                        : 1 == this.len && t.push(n(t[0].x, t[0].y)),
                      (this.pts = t),
                      this.len)
                    ) {
                      case 2:
                        this.bez = this.Bezier2;
                        break;
                      case 3:
                        this.bez = this.Bezier3;
                        break;
                      case 4:
                        this.bez = this.Bezier4;
                        break;
                      case 5:
                        this.bez = this.Bezier5;
                        break;
                      case 6:
                        this.bez = this.Bezier6;
                        break;
                      default:
                        (this.ptl = e.PascalTriangleLine(this.len)),
                          (this.bez = this.BezierN);
                    }
                  }
                  var i = t.prototype;
                  return (
                    (i.GetPosition = function (t) {
                      return this.bez.apply(this, [t]);
                    }),
                    (i.Bezier2 = function (t) {
                      var e = 1 - t;
                      return n(
                        e * this.pts[0].x + t * this.pts[1].x,
                        e * this.pts[0].y + t * this.pts[1].y
                      );
                    }),
                    (i.Bezier3 = function (t) {
                      var e = 1 - t,
                        i = [e * e, 2 * e * t, t * t];
                      return n(
                        i[0] * this.pts[0].x +
                          i[1] * this.pts[1].x +
                          i[2] * this.pts[2].x,
                        i[0] * this.pts[0].y +
                          i[1] * this.pts[1].y +
                          i[2] * this.pts[2].y
                      );
                    }),
                    (i.Bezier4 = function (t) {
                      var e = 1 - t,
                        i = [
                          e * e * e,
                          3 * e * e * t,
                          3 * e * t * t,
                          t * t * t,
                        ];
                      return n(
                        i[0] * this.pts[0].x +
                          i[1] * this.pts[1].x +
                          i[2] * this.pts[2].x +
                          i[3] * this.pts[3].x,
                        i[0] * this.pts[0].y +
                          i[1] * this.pts[1].y +
                          i[2] * this.pts[2].y +
                          i[3] * this.pts[3].y
                      );
                    }),
                    (i.Bezier5 = function (t) {
                      var e = 1 - t,
                        i = [
                          e * e * e * e,
                          4 * e * e * e * t,
                          6 * e * e * t * t,
                          4 * e * t * t * t,
                          t * t * t * t,
                        ];
                      return n(
                        i[0] * this.pts[0].x +
                          i[1] * this.pts[1].x +
                          i[2] * this.pts[2].x +
                          i[3] * this.pts[3].x +
                          i[4] * this.pts[4].x,
                        i[0] * this.pts[0].y +
                          i[1] * this.pts[1].y +
                          i[2] * this.pts[2].y +
                          i[3] * this.pts[3].y +
                          i[4] * this.pts[4].y
                      );
                    }),
                    (i.Bezier6 = function (t) {
                      var e = 1 - t,
                        i = [
                          e * e * e * e * e,
                          5 * e * e * e * e * t,
                          10 * e * e * e * t * t,
                          10 * e * e * t * t * t,
                          5 * e * t * t * t * t,
                          t * t * t * t * t,
                        ];
                      return n(
                        i[0] * this.pts[0].x +
                          i[1] * this.pts[1].x +
                          i[2] * this.pts[2].x +
                          i[3] * this.pts[3].x +
                          i[4] * this.pts[4].x +
                          i[5] * this.pts[5].x,
                        i[0] * this.pts[0].y +
                          i[1] * this.pts[1].y +
                          i[2] * this.pts[2].y +
                          i[3] * this.pts[3].y +
                          i[4] * this.pts[4].y +
                          i[5] * this.pts[5].y
                      );
                    }),
                    (i.BezierN = function (t) {
                      for (
                        var e = 1 - t, i = n(0, 0), o = 0;
                        o < this.len;
                        o++
                      ) {
                        for (var r = 1, a = 0; a < this.len - o - 1; a++)
                          r *= e;
                        for (var s = 0; s < o; s++) r *= t;
                        (i.x += r * this.ptl[o] * this.pts[o].x),
                          (i.y += r * this.ptl[o] * this.pts[o].y);
                      }
                      return i;
                    }),
                    t
                  );
                })();
                t.Bezier = r;
              })(Q || (Q = {})),
              e._RF.pop(),
              e._RF.push({}, "391b6CLPVhBEqeFr1f7nxDE", "index", void 0),
              e._RF.pop(),
              e._RF.push(
                {},
                "77acaFcNgVDULwRQEtO5wYa",
                "BigWinComponent",
                void 0
              );
            var ht,
              pt,
              _t,
              dt,
              ft = "Start",
              yt = "Loop",
              St = "End",
              gt = { Start: "BigWin_Start", End: "BigWin_End" },
              vt = { Start: "MegaWin_Start", End: "MegaWin_End" },
              Et = { Start: "SuperWin_Start", End: "SuperWin_End" },
              bt = r.ccclass,
              Ct = r.property;
            t(
              "B",
              ((Z = Ct({ type: a.Skeleton, tooltip: "spine" })),
              ($ = Ct({ type: a.Skeleton, tooltip: "遮罩" })),
              (tt = Ct({ type: a.Skeleton, tooltip: "Extra Spine" })),
              (et = Ct({ type: s, tooltip: "贏分" })),
              (nt = Ct({ type: u, tooltip: "End extra effect delay time" })),
              bt(
                (((lt = (function (t) {
                  function e() {
                    for (
                      var e, n = arguments.length, i = new Array(n), o = 0;
                      o < n;
                      o++
                    )
                      i[o] = arguments[o];
                    return (
                      J(
                        (e = t.call.apply(t, [this].concat(i)) || this),
                        "m_spine",
                        rt,
                        U(e)
                      ),
                      J(e, "m_maskSpine", at, U(e)),
                      J(e, "m_extraSpine", st, U(e)),
                      J(e, "m_winLabel", ut, U(e)),
                      J(e, "m_endExtraDelayTime", ct, U(e)),
                      (e.m_isEnd = !0),
                      (e.m_isShowEnd = !0),
                      (e.m_isShowAward = !1),
                      (e.m_eventCb = null),
                      (e.m_showValueCb = null),
                      (e.m_cancelCb = null),
                      (e.m_lvl = 0),
                      (e.m_nowLvl = 0),
                      (e.m_win = 0),
                      (e.m_showWin = 0),
                      (e.m_step = 0),
                      (e.m_isShowingExtraEnd = !1),
                      e
                    );
                  }
                  G(e, t);
                  var n = e.prototype;
                  return (
                    (n.update = function (t) {
                      this.m_isShowAward &&
                        ((this.m_showWin += this.m_step * t),
                        this.m_showWin >= this.m_win &&
                          ((this.m_showWin = this.m_win),
                          (this.m_isShowAward = !1)),
                        (this.m_winLabel.string = K.FormatNumberThousands(
                          K.strip(
                            this.m_showValueCb
                              ? this.m_showValueCb(this.m_showWin)
                              : this.m_showWin
                          ),
                          K.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                        )));
                    }),
                    (n.Init = function (t, e) {
                      (this.m_eventCb = t),
                        (this.m_showValueCb = e),
                        this.m_maskSpine && (this.m_maskSpine.node.active = !1);
                    }),
                    (n.Show = function (t, n, i) {
                      if (
                        (void 0 === i && (i = !0),
                        t > 0 && n > e.Level.NONE && n <= e.Level.SUPER)
                      ) {
                        (this.m_isEnd = !1),
                          (this.m_lvl = n),
                          (this.m_nowLvl = i ? 0 : n - 1),
                          (this.m_win = t),
                          (this.m_showWin = 0),
                          (this.m_winLabel.string = "0"),
                          (this.m_isShowEnd = !1);
                        for (
                          var o = 0, r = i ? e.Level.BIG : this.m_lvl;
                          r <= this.m_lvl;
                          r++
                        ) {
                          var a = "",
                            s = "";
                          switch (r) {
                            case e.Level.BIG:
                              (a = gt.Start), (s = gt.End);
                              break;
                            case e.Level.MEGA:
                              (a = vt.Start), (s = vt.End);
                              break;
                            case e.Level.SUPER:
                              (a = Et.Start), (s = Et.End);
                          }
                          if ("" !== a && "" !== s) {
                            var u = this.m_spine.findAnimation(a);
                            u && (o += u.duration);
                          }
                        }
                        (this.m_step = K.divide(this.m_win, o || 5)),
                          (this.m_isShowAward = !0),
                          this.m_maskSpine &&
                            ((this.m_maskSpine.node.active = !0),
                            this.PlayAnimation(
                              this.m_maskSpine,
                              "BigWin_Start"
                            )),
                          this.ShowNext();
                      }
                    }),
                    (n.Stop = function () {
                      this.m_isShowEnd ||
                        (this.m_cancelCb && this.m_cancelCb(), this.ShowEnd());
                    }),
                    (n.SetSkin = function (t) {
                      this.m_spine.setSkin(t);
                    }),
                    (n.ShowNext = (function () {
                      var t = L(
                        R().mark(function t() {
                          var n;
                          return R().wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    if (this.m_nowLvl !== this.m_lvl) {
                                      t.next = 4;
                                      break;
                                    }
                                    this.ShowEnd(), (t.next = 23);
                                    break;
                                  case 4:
                                    this.m_nowLvl++,
                                      (n = !1),
                                      (t.t0 = this.m_nowLvl),
                                      (t.next =
                                        t.t0 === e.Level.BIG
                                          ? 9
                                          : t.t0 === e.Level.MEGA
                                          ? 14
                                          : t.t0 === e.Level.SUPER
                                          ? 18
                                          : 22);
                                    break;
                                  case 9:
                                    return (
                                      this.CheckExtraSpineStart(),
                                      (t.next = 12),
                                      this.PlayAnimation(this.m_spine, gt.Start)
                                    );
                                  case 12:
                                    return (n = t.sent), t.abrupt("break", 22);
                                  case 14:
                                    return (
                                      (t.next = 16),
                                      this.PlayAnimation(this.m_spine, vt.Start)
                                    );
                                  case 16:
                                    return (n = t.sent), t.abrupt("break", 22);
                                  case 18:
                                    return (
                                      (t.next = 20),
                                      this.PlayAnimation(this.m_spine, Et.Start)
                                    );
                                  case 20:
                                    return (n = t.sent), t.abrupt("break", 22);
                                  case 22:
                                    n || this.ShowNext();
                                  case 23:
                                  case "end":
                                    return t.stop();
                                }
                            },
                            t,
                            this
                          );
                        })
                      );
                      return function () {
                        return t.apply(this, arguments);
                      };
                    })()),
                    (n.ShowEnd = (function () {
                      var t = L(
                        R().mark(function t() {
                          var n;
                          return R().wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    if (!this.m_isShowEnd) {
                                      t.next = 2;
                                      break;
                                    }
                                    return t.abrupt("return");
                                  case 2:
                                    (this.m_isShowEnd = !0),
                                      (this.m_isShowAward = !1),
                                      (this.m_winLabel.string =
                                        K.FormatNumberThousands(
                                          K.strip(
                                            this.m_showValueCb
                                              ? this.m_showValueCb(this.m_win)
                                              : this.m_win
                                          ),
                                          K.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                                        )),
                                      this.m_maskSpine &&
                                        this.PlayAnimation(
                                          this.m_maskSpine,
                                          "BigWin_End"
                                        ),
                                      (n = ""),
                                      (t.t0 = this.m_lvl),
                                      (t.next =
                                        t.t0 === e.Level.BIG
                                          ? 10
                                          : t.t0 === e.Level.MEGA
                                          ? 12
                                          : t.t0 === e.Level.SUPER
                                          ? 14
                                          : 16);
                                    break;
                                  case 10:
                                    return (n = gt.End), t.abrupt("break", 16);
                                  case 12:
                                    return (n = vt.End), t.abrupt("break", 16);
                                  case 14:
                                    return (n = Et.End), t.abrupt("break", 16);
                                  case 16:
                                    if ("" === n) {
                                      t.next = 21;
                                      break;
                                    }
                                    return (
                                      (t.next = 19),
                                      Promise.all([
                                        this.CheckExtraSpineEnd(),
                                        this.PlayAnimation(this.m_spine, n),
                                      ])
                                    );
                                  case 19:
                                    t.next = 22;
                                    break;
                                  case 21:
                                    console.error(
                                      "BigWinComponent ShowEnd animName is empty!",
                                      this.m_lvl
                                    );
                                  case 22:
                                    this.m_maskSpine &&
                                      (this.m_maskSpine.node.active = !1),
                                      (this.m_isEnd = !0);
                                  case 24:
                                  case "end":
                                    return t.stop();
                                }
                            },
                            t,
                            this
                          );
                        })
                      );
                      return function () {
                        return t.apply(this, arguments);
                      };
                    })()),
                    (n.CheckExtraSpineStart = function () {
                      var t = this;
                      this.m_extraSpine &&
                        ((this.m_extraSpine.node.active = !0),
                        this.PlayAnimation(this.m_extraSpine, ft).then(
                          function () {
                            t.m_isShowingExtraEnd ||
                              t.PlayAnimation(t.m_extraSpine, yt, !0);
                          }
                        ));
                    }),
                    (n.CheckExtraSpineEnd = (function () {
                      var t = L(
                        R().mark(function t() {
                          return R().wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    if (this.m_extraSpine) {
                                      t.next = 2;
                                      break;
                                    }
                                    return t.abrupt("return");
                                  case 2:
                                    return (
                                      (this.m_isShowingExtraEnd = !0),
                                      (t.next = 5),
                                      X.Wait(this, this.m_endExtraDelayTime)
                                    );
                                  case 5:
                                    return (
                                      (t.next = 7),
                                      this.PlayAnimation(this.m_extraSpine, St)
                                    );
                                  case 7:
                                    this.m_isShowingExtraEnd = !1;
                                  case 8:
                                  case "end":
                                    return t.stop();
                                }
                            },
                            t,
                            this
                          );
                        })
                      );
                      return function () {
                        return t.apply(this, arguments);
                      };
                    })()),
                    (n.PlayAnimation = function (t, e, n, i) {
                      var o = this;
                      return (
                        void 0 === n && (n = !1),
                        void 0 === i && (i = 0),
                        new Promise(function (r) {
                          var a = !1;
                          (o.m_cancelCb = function () {
                            r((a = !0));
                          }),
                            t.clearTrack(i),
                            t.setToSetupPose();
                          var s = t.setAnimation(i, e, n),
                            u = function () {
                              (o.m_cancelCb = null), r(a);
                            };
                          s
                            ? (t.setTrackEventListener(s, function (t, n) {
                                var i = n.data.name,
                                  r = n.stringValue;
                                o.m_eventCb && o.m_eventCb(i, r, e);
                              }),
                              t.setTrackCompleteListener(s, function () {
                                t.setTrackCompleteListener(s, function () {}),
                                  u();
                              }))
                            : t.setCompleteListener(function () {
                                t.setCompleteListener(null), u();
                              });
                        })
                      );
                    }),
                    D(e, [
                      {
                        key: "IsEnd",
                        get: function () {
                          return this.m_isEnd;
                        },
                        set: function (t) {
                          this.m_isEnd = t;
                        },
                      },
                    ]),
                    e
                  );
                })(c)).Level = { NONE: 0, BIG: 1, MEGA: 2, SUPER: 3 }),
                (rt = j((ot = lt).prototype, "m_spine", [Z], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                })),
                (at = j(ot.prototype, "m_maskSpine", [$], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                })),
                (st = j(ot.prototype, "m_extraSpine", [tt], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                })),
                (ut = j(ot.prototype, "m_winLabel", [et], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                })),
                (ct = j(ot.prototype, "m_endExtraDelayTime", [nt], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return 1.5;
                  },
                })),
                (it = ot))
              ) || it)
            );
            e._RF.pop(),
              e._RF.push({}, "2c465urF+5E6a8SAy0Y1679", "AppManager", void 0),
              e._RF.pop(),
              e._RF.push(
                {},
                "01a4bCeOlRFS4PxU4ftD5wn",
                "BackpackManager",
                void 0
              ),
              e._RF.pop(),
              e._RF.push(
                {},
                "e98d6g3Sn5F/phbS0JGqk6v",
                "BuyBonusManager",
                void 0
              ),
              e._RF.pop(),
              e._RF.push(
                {},
                "810fcmXyb9Bu4OzTZmIkoz9",
                "CommonGameManager",
                void 0
              ),
              (function (t) {
                (t[(t.Get = 0)] = "Get"), (t[(t.Post = 1)] = "Post");
              })(pt || (pt = {})),
              (function (t) {
                (t[(t.Ignore = 0)] = "Ignore"), (t[(t.Handle = 1)] = "Handle");
              })(_t || (_t = {})),
              e._RF.pop(),
              e._RF.push(
                {},
                "0e324Erw0JDW6aCYO5d0i2g",
                "DailyMissionManager",
                void 0
              ),
              e._RF.pop(),
              e._RF.push(
                {},
                "dd020H2ox5CQ70Z9VNWXYpK",
                "DebrisManager",
                void 0
              ),
              e._RF.pop(),
              e._RF.push({}, "1fcfdTjgMdDr4mh99NzZ29B", "GaiaManager", void 0),
              e._RF.pop(),
              e._RF.push(
                {},
                "a3f63TygSlA6KwEkLDlQIoJ",
                "GiftCodeManager",
                void 0
              ),
              e._RF.pop(),
              e._RF.push(
                {},
                "9692fSvI0xNR5GVPmbcEfzq",
                "IframeCommandManager",
                void 0
              ),
              e._RF.pop(),
              e._RF.push(
                {},
                "d8221PEwlRBep+hz+x7w5Ot",
                "NewBottomBarManager",
                void 0
              );
            var xt,
              wt,
              Tt,
              Bt,
              It = t("t", {
                IDLE: 0,
                CLICK_SPIN: 1,
                START_SPIN: 2,
                CLICK_STOP: 3,
                GET_AWARD: 4,
                CLICK_GET: 5,
                CLICK_AUTOPLAY: 6,
                CLICK_CANCEL: 7,
                IDLE_AGAIN: 8,
                SPIN_DISABLE: 9,
                CLICK_STOP_IN_AUTOPLAY: 10,
                SKIP_SMALL_FLASH: 11,
                SKIP_SMALL_FLASH_AUTOPLAY: 12,
                SKIP_BIG_FLASH: 13,
                CLICK_STOP_NO_AUTO: 14,
                GET_AWARD_NO_AUTO: 15,
                CLICK_STOP_IN_AUTOPLAY_NO_AUTO: 16,
                SPIN_DISABLE_DISABLE_STOP: 17,
                AUTO_UNABLE: 18,
                AUTO_ABLE: 19,
                CLICK_AUTOPLAY_HARDSTOP: 20,
              });
            t("J", {
              IMG_BAR_DN: "img_bar_dn",
              IMG_WIN: "img_win",
              IMG_BLANCE: "img_blance",
              TXT_BLANCE: "txt_blance",
              COMM_MENU: "comm_menu",
              BTN_INFO: "btn_info",
              BTN_SOUND: "btn_sound",
              BTN_WISEAUTOPLAY: "btn_wiseautoplay",
              BTN_HISTORY: "btn_history",
              BTN_COMM: "btn_comm",
              IMG_BTN_COMM: "img_btn_comm",
              TXT_WIN: "txt_win",
              BETVIEW: "betView",
              BET_MENU: "bet_menu",
              BTN_BETS: "btn_bet",
              BET_VALUE: "bet_value",
              SELECTED: "selected",
              BTN_BET: "btn_bet",
              IMG_BET: "img_bet",
              TXT_BET_VALUE: "txt_bet_value",
              BTN_FEATURES: "btn_features",
              IMG_SPEED: "img_speed",
              BTN_SPEED: "btn_speed",
              BTN_BACKPACK: "btn_backpack",
              IMG_BACKPACKNODE: "img_backpackNode",
              IMG_BACKPACK: "img_backpack",
              USINGCARD: "usingCard",
              USINGCARDNUM: "usingCardNum",
              BTN_AUTOSTOP_C: "btn_autostop_c",
              IMG_AUTOTOP: "img_autotop",
              TXT_AUTO_COUNT: "txt_auto_count",
              BTN_AUTOSTOP: "btn_autostop",
              IMG_AUTOTOP_1: "img_autotop_1",
              BTN_AUTOPLAY: "btn_autoplay",
              IMG_AUTOPLAY: "img_autoplay",
              BTN_SPINSTOP: "btn_spinstop",
              IMG_STOP_LABEL: "img_stop_label",
              BTN_SPIN: "btn_spin",
              IMG_SPIN_LABEL: "img_spin_label",
              AUTOPLAY: "Autoplay",
              IMG_BAR_SUB_BG: "img_bar_sub_bg",
              WEBVIEW: "webview",
              BTN_CLOSE: "btn_close",
              BTN_TRIAL: "btn_Trial",
              TRAILWINPROGRESSBAR: "TrailWinProgressBar",
              BTN_HOLD_SPIN: "btn_hold_spin",
              BTN_RELEASE_SPIN: "btn_release_spin",
              BTN_INCBET: "btn_IncBet",
              BTN_DECBET: "btn_DecBet",
            });
            e._RF.pop(),
              e._RF.push(
                {},
                "28748R+s5pCY7kwYZ0zkqKk",
                "NewExtraManager",
                void 0
              ),
              e._RF.pop(),
              e._RF.push({}, "861e1J/bwRGlI4J13TOOh4y", "TrialManager", void 0),
              (function (t) {
                (t[(t.None = 0)] = "None"),
                  (t[(t.Playing = 1)] = "Playing"),
                  (t[(t.Item = 2)] = "Item");
              })(Tt || (Tt = {})),
              e._RF.pop(),
              e._RF.push(
                {},
                "0f3df9al6NIJJ1/5ZP5aShG",
                "MsgBoxManager",
                void 0
              ),
              e._RF.pop(),
              e._RF.push({}, "8de065l1yBCNoeRGxK2yzaD", "StateManager", void 0);
            var At,
              Nt,
              kt,
              Ot,
              Pt = t("w", function () {});
            e._RF.pop(),
              e._RF.push(
                {},
                "c7e3d4LY9dOUokI+wu7YgCQ",
                "AutoShowManager",
                void 0
              ),
              (function (t) {
                (t[(t.SKY_BAR = 0)] = "SKY_BAR"),
                  (t[(t.PAYTABLE = 1)] = "PAYTABLE"),
                  (t[(t.LANDING = 2)] = "LANDING"),
                  (t[(t.DISCOUNT = 3)] = "DISCOUNT"),
                  (t[(t.EXTRA_BET = 4)] = "EXTRA_BET"),
                  (t[(t.ICONBOX = 5)] = "ICONBOX");
              })(Nt || (Nt = {})),
              e._RF.pop(),
              e._RF.push(
                {},
                "d388f5XkRRFcYXg5usnXTa/",
                "LocaleStringManager",
                void 0
              ),
              e._RF.pop(),
              e._RF.push(
                {},
                "077a5gmYEpIQqr+YOtt+g08",
                "LocalStorageManager",
                void 0
              ),
              e._RF.pop(),
              e._RF.push({}, "8c0f7IX3HNLY6BaWiL8u0j4", "SoundManager", void 0),
              e._RF.pop(),
              e._RF.push({}, "50f8dtxxuFDo6qJW6FBFBaO", "EventManager", void 0);
            var Rt,
              Ft,
              Lt,
              Mt,
              Dt,
              Gt,
              zt,
              Ut,
              Wt = t("C", {
                TriggerFreeSpin: "TriggerFreeSpin",
                ShowGetFreeSpinEnd: "ShowGetFreeSpinEnd",
                FreeSpinTotalWinStart: "FreeSpinTotalWinStart",
                FreeSpinTotalWinEnd: "FreeSpinTotalWinEnd",
                OpenExtraBet: "OpenExtraBet",
                CloseExtraBet: "CloseExtraBet",
                ItemTotalWinStart: "ItemTotalWinStart",
                ItemTotalWinEnd: "ItemTotalWinEnd",
                SpinReqNotify: "SpinReqNotify",
                TriggerExtraBet: "TriggerExtraBet",
                SkipIntro: "SkipIntro",
              });
            e._RF.pop(),
              e._RF.push(
                {},
                "18947v7ICNDlYz3G5vE642k",
                "LoadPrefabManager",
                void 0
              ),
              e._RF.pop(),
              e._RF.push(
                {},
                "de7f6JwfsBHBYba0UlqLoFI",
                "NotificationManager",
                void 0
              ),
              e._RF.pop(),
              e._RF.push(
                {},
                "81438uBGiNJXoDkKAmuxEJu",
                "FunctionControlManager",
                void 0
              ),
              e._RF.pop(),
              e._RF.push(
                {},
                "3e41doUMVNLQbg53Jn6N9ch",
                "SoundAudioManager",
                void 0
              ),
              e._RF.pop(),
              e._RF.push({}, "858d45NBqBLW5W3J41WER1G", "index", void 0),
              e._RF.pop(),
              e._RF.push(
                {},
                "1d854+nhA1JgLXZLaNHz9eU",
                "LicenseSetting",
                void 0
              ),
              (function (t) {
                (t[(t.ShopingMall = 1)] = "ShopingMall"),
                  (t[(t.ShowAutoSetting = 16)] = "ShowAutoSetting"),
                  (t[(t.NoSoundUnder1 = 17)] = "NoSoundUnder1"),
                  (t[(t.NoQuickSpin = 18)] = "NoQuickSpin"),
                  (t[(t.CloseManual = 39)] = "CloseManual"),
                  (t[(t.CloseExtraBet = 61)] = "CloseExtraBet");
              })(Mt || (Mt = t("S", {}))),
              e._RF.pop(),
              e._RF.push(
                {},
                "74f7dljUZhO+6o0Pu2tNSAk",
                "ConnectionManager",
                void 0
              ),
              (function (t) {
                (t[(t.TYPE_HTTP = 1)] = "TYPE_HTTP"),
                  (t[(t.TYPE_WEBSOCKET = 2)] = "TYPE_WEBSOCKET"),
                  (t[(t.MAX = 3)] = "MAX");
              })(Dt || (Dt = {})),
              (function (t) {
                (t.TYPE_GET = "get"), (t.TYPE_POST = "post");
              })(Gt || (Gt = {})),
              e._RF.pop(),
              e._RF.push({}, "34d81gQVlJAaJJHg6IUTjH6", "TimeBool", void 0),
              (function (t) {
                (t[(t.MAX_UINT = 4294967295)] = "MAX_UINT"),
                  (t[(t.MAX_UINT64 = 0x10000000000000000)] = "MAX_UINT64"),
                  (t[(t.MAX_INT = -1)] = "MAX_INT"),
                  (t[(t.MIN_INT = 0)] = "MIN_INT");
              })(Ut || (Ut = {}));
            var Ht,
              Jt = (function () {
                function t() {
                  (this.m_duration = Ut.MAX_UINT),
                    (this.m_deadline = Ut.MAX_UINT64),
                    (this.m_useDT = !1),
                    (this.m_dt = void 0),
                    (this.m_duration = Ut.MAX_UINT),
                    (this.m_deadline = Ut.MAX_UINT64);
                }
                var e = t.prototype;
                return (
                  (e.IsStarted = function () {
                    return Ut.MAX_UINT != this.m_duration;
                  }),
                  (e.Duration = function () {
                    return this.m_duration;
                  }),
                  (e.TicksUntilTrue = function () {
                    if (!this.IsStarted()) return Ut.MAX_INT;
                    var t = new Date().getTime();
                    return this.m_deadline <= t ? 0 : this.m_deadline - t;
                  }),
                  (e.TicksSinceTrue = function () {
                    var t = new Date().getTime();
                    return this.m_deadline >= t ? 0 : t - this.m_deadline;
                  }),
                  (e.TicksSinceStart = function () {
                    return this.IsStarted()
                      ? new Date().getTime() -
                          (this.m_deadline - this.m_duration)
                      : 0;
                  }),
                  (e.Start = function (t) {
                    this.m_duration = t;
                    var e = new Date().getTime();
                    (this.m_deadline = e + t), (this.m_dt = 0);
                  }),
                  (e.Restart = function () {
                    this.m_deadline = new Date().getTime() + this.m_duration;
                  }),
                  (e.Continue = function () {
                    this.m_deadline += this.m_duration;
                  }),
                  (e.ExpireNow = function () {
                    this.m_deadline = new Date().getTime();
                  }),
                  (e.Clear = function () {
                    (this.m_duration = Ut.MAX_UINT),
                      (this.m_deadline = Ut.MAX_UINT64),
                      (this.m_dt = 0);
                  }),
                  (e.StartWithFirstDue = function (t, e) {
                    (this.m_duration = t),
                      Ut.MAX_UINT == e
                        ? (this.m_deadline = Ut.MAX_UINT64)
                        : (this.m_deadline = new Date().getTime() + e);
                  }),
                  (e.ToBool = function () {
                    return this.m_useDT
                      ? this.m_dt >= this.m_duration
                      : new Date().getTime() >= this.m_deadline;
                  }),
                  (e.TakeAndContinue = function () {
                    return !!this.ToBool() && (this.Continue(), !0);
                  }),
                  (e.TakeAndRestart = function () {
                    return !!this.ToBool() && (this.Restart(), !0);
                  }),
                  (e.UseDT = function (t) {
                    this.m_useDT = t;
                  }),
                  (e.Update = function (t) {
                    this.m_dt = this.m_dt + t;
                  }),
                  t
                );
              })();
            e._RF.pop(),
              e._RF.push(
                {},
                "5cd11K4+Y1DBJ0WZfuiBSee",
                "Common_IdleState",
                void 0
              );
            var jt,
              Kt,
              Yt,
              qt,
              Xt,
              Vt,
              Qt,
              Zt,
              $t,
              te,
              ee,
              ne,
              ie,
              oe,
              re,
              ae,
              se,
              ue,
              ce = 1,
              le = 10,
              me = r.ccclass;
            t(
              "x",
              me("Common_IdleState")(
                (Ht = (function (t) {
                  function e() {
                    var e;
                    return (
                      ((e = t.call(this) || this).m_exchangeTimer = null),
                      (e.m_isFirst = !0),
                      (e.m_initReqNoticeTimes = 0),
                      (e.m_hintShowed = !1),
                      Rt.Register(Wt.SpinReqNotify, U(e)),
                      (e.m_exchangeTimer = new Jt()),
                      e.m_exchangeTimer.UseDT(!0),
                      e
                    );
                  }
                  G(e, t);
                  var n = e.prototype;
                  return (
                    (n.OnEnter = function () {
                      m("Common State IDLE"),
                        xt.ShowSkipBtn && xt.ShowSkipBtn(!1),
                        X.HAS_REPLAY
                          ? X.IsInMG() &&
                            (this.m_isFirst
                              ? ((this.m_isFirst = !1),
                                At.NextState(q.SPIN_REQ))
                              : wt.OpenReplayView())
                          : (!X.IsInMG() || X.IsUsingItem || xt.IsFreeSpin
                              ? (xt.IsGameIdle = !1)
                              : (xt.GetChips() < xt.GetBetList()[0] &&
                                  Ft.ShowBankruptNotify(),
                                this.SetIsIdle(!0)),
                            this.m_exchangeTimer.Clear(),
                            this.m_exchangeTimer.Start(
                              1e3 * (this.m_isFirst ? ce : le)
                            ),
                            Ft.CountDownAfk()),
                        xt.SetSpinState(It.IDLE),
                        this.Enter();
                    }),
                    (n.OnProcess = function (t) {
                      if (!X.HAS_REPLAY) {
                        if (
                          zt.HasMail &&
                          X.IsInMG() &&
                          xt.CheckCommonWebPageClose()
                        )
                          for (; zt.HasMail; ) zt.ShowMailInfo();
                        this.m_exchangeTimer &&
                          (this.m_exchangeTimer.Update(1e3 * t),
                          this.m_exchangeTimer.ToBool() &&
                            (this.m_exchangeTimer.Clear(),
                            this.m_exchangeTimer.Start(
                              1e3 *
                                (this.m_isFirst &&
                                this.m_initReqNoticeTimes < 20
                                  ? ce
                                  : le)
                            ),
                            At.Current() == q.IDLE &&
                              X.IsInMG() &&
                              (dt.ReqNotice(), this.m_initReqNoticeTimes++))),
                          null == this || this.Process(t);
                      }
                    }),
                    (n.OnLeave = function () {
                      X.HAS_REPLAY || Ft.StopAfk();
                    }),
                    (n.SetIsIdle = function (t) {
                      t ? wt.OpenTurboIcon() : wt.CloseTurboIcon(),
                        X.SetCanUseItemCard(t),
                        ht.IsBuyBonus || (ht.CanBuyBonus = t),
                        xt.LockBetEnable(!t),
                        (xt.IsGameIdle = t),
                        xt.CanPlayFeaturesDemo(t),
                        wt.SetBuyBonusState(t);
                    }),
                    (n.OnEvent = function (t) {
                      if (At.Current() === q.IDLE)
                        switch (t) {
                          case Wt.SpinReqNotify:
                            X.HAS_REPLAY ||
                              (X.IsInMG()
                                ? At.NextState(q.SPIN_REQ)
                                : At.NextState(q.SPIN)),
                              (this.m_isFirst = !1);
                        }
                    }),
                    (n.Process = function (t) {}),
                    e
                  );
                })(Pt))
              ) || Ht
            );
            e._RF.pop(),
              e._RF.push(
                {},
                "a4b83idlNlHcZQFqX6vJhFz",
                "ExtraBetComponent",
                void 0
              );
            var he,
              pe,
              _e,
              de,
              fe,
              ye,
              Se,
              ge,
              ve,
              Ee,
              be,
              Ce,
              xe,
              we,
              Te,
              Be,
              Ie,
              Ae,
              Ne,
              ke,
              Oe,
              Pe,
              Re,
              Fe,
              Le,
              Me,
              De,
              Ge,
              ze,
              Ue,
              We,
              He = r.ccclass,
              Je = r.property,
              je = 0,
              Ke = 1;
            t(
              "F",
              ((jt = Je({ type: h, tooltip: "EX 按鈕最頂層節點(整顆node)" })),
              (Kt = Je({ type: p, tooltip: "EX 按鈕" })),
              (Yt = Je({ type: p, tooltip: "按鈕ON" })),
              (qt = Je({ type: p, tooltip: "按鈕OFF" })),
              (Xt = Je({ type: p, tooltip: "提示問號按鈕" })),
              (Vt = Je({ type: h, tooltip: "提示文字tip面板" })),
              (Qt = Je({ type: s, tooltip: "功能說明文字串Label" })),
              (Zt = Je({ type: _, tooltip: "本體ExtraBet文字圖片" })),
              He(
                ((ee = j(
                  (te = (function (t) {
                    function e() {
                      for (
                        var e, n = arguments.length, i = new Array(n), o = 0;
                        o < n;
                        o++
                      )
                        i[o] = arguments[o];
                      return (
                        J(
                          (e = t.call.apply(t, [this].concat(i)) || this),
                          "m_multiExtraBetNode",
                          ee,
                          U(e)
                        ),
                        J(e, "m_multiBtn", ne, U(e)),
                        J(e, "m_multiBtn_on", ie, U(e)),
                        J(e, "m_multiBtn_off", oe, U(e)),
                        J(e, "m_multiBtn_TipQuesMark", re, U(e)),
                        J(e, "m_multiBtn_Tip", ae, U(e)),
                        J(e, "m_multiBtn_Description", se, U(e)),
                        J(e, "m_Txt_Extra_Bet", ue, U(e)),
                        (e.m_isExtendShowBar = !1),
                        (e.m_ExtraBetAniPlaying = null),
                        (e.m_isExtra = !1),
                        (e.m_isForceExtraOnEnd = !1),
                        (e.m_isTwoStep = !1),
                        (e.m_toStepTwo = !1),
                        (e.m_triggerCb = null),
                        (e.m_canExtend = !0),
                        e
                      );
                    }
                    G(e, t);
                    var n = e.prototype;
                    return (
                      (n.Init = function (t, e, n, i, o) {
                        var r = this;
                        if (
                          (void 0 === i && (i = !1),
                          void 0 === o && (o = !1),
                          K.CheckSwitchOff(Mt.CloseExtraBet))
                        )
                          return (
                            (this.node.active = !1),
                            void this.node.on(
                              d.ACTIVE_IN_HIERARCHY_CHANGED,
                              function () {
                                r.node.active = !1;
                              }
                            )
                          );
                        (this.m_triggerCb = t),
                          (this.m_isTwoStep = i),
                          this.m_multiBtn_Description &&
                            this.m_Txt_Extra_Bet &&
                            (m(
                              " localeStringManager.CurrLang : " + kt.CurrLang
                            ),
                            (this.m_multiBtn_Description.string =
                              kt.GetString(e)),
                            (this.m_Txt_Extra_Bet.spriteFrame = kt
                              .GetGameAtlas()
                              .getSpriteFrame(n))),
                          V.Init(
                            o ? null : this.node,
                            this.ForceSetExtraBet.bind(this)
                          );
                      }),
                      (n.onLoad = function () {
                        var t = this;
                        if (!K.CheckSwitchOff(Mt.CloseExtraBet)) {
                          m("ExtraBet onLoad"),
                            this.m_multiBtn &&
                              this.m_multiBtn.node.on(
                                h.EventType.TOUCH_END,
                                function () {
                                  t.m_ExtraBetAniPlaying ||
                                    (Ot.Play(X.AudioClips.COMMON_BTN),
                                    t.CheckCanUseBtn()
                                      ? t.ExtendShowBar(!t.m_isExtendShowBar)
                                      : Bt.ShowMessageBox(
                                          X.StringKey.FREEWINCASH_PLAYING1
                                        ));
                                }
                              );
                          for (var e = 0; e < this.m_multiBtn_on.length; e++)
                            this.m_multiBtn_on[e].node.on(
                              h.EventType.TOUCH_END,
                              function () {
                                t.m_ExtraBetAniPlaying ||
                                  (t.CheckCanUseBtn()
                                    ? t.ChangeBetMode()
                                    : Bt.ShowMessageBox(
                                        X.StringKey.FREEWINCASH_PLAYING1
                                      ));
                              }
                            ),
                              this.m_multiBtn_off[e] &&
                                this.m_multiBtn_off[e].node.on(
                                  h.EventType.TOUCH_END,
                                  function () {
                                    t.m_ExtraBetAniPlaying ||
                                      (Ot.Play(X.AudioClips.COMMON_BTN),
                                      t.CheckCanUseBtn() && t.ChangeBetMode());
                                  }
                                );
                          this.m_multiBtn_TipQuesMark &&
                            this.m_multiBtn_TipQuesMark.node.on(
                              h.EventType.TOUCH_END,
                              L(
                                R().mark(function e() {
                                  return R().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if (t.m_ExtraBetAniPlaying) {
                                            e.next = 13;
                                            break;
                                          }
                                          if (
                                            (Ot.Play(X.AudioClips.COMMON_BTN),
                                            At.Current() != q.IDLE ||
                                              ht.IsBuyBonus)
                                          ) {
                                            e.next = 12;
                                            break;
                                          }
                                          if (!t.m_isExtendShowBar) {
                                            e.next = 7;
                                            break;
                                          }
                                          (t.m_multiBtn_Tip.active =
                                            !t.m_multiBtn_Tip.active),
                                            (e.next = 10);
                                          break;
                                        case 7:
                                          return (
                                            (e.next = 9), t.ExtendShowBar(!0)
                                          );
                                        case 9:
                                          !t.m_multiBtn_Tip.active &&
                                            t.m_isExtendShowBar &&
                                            (t.m_multiBtn_Tip.active = !0);
                                        case 10:
                                          e.next = 13;
                                          break;
                                        case 12:
                                          Bt.ShowMessageBox(
                                            X.StringKey.FREEWINCASH_PLAYING1
                                          );
                                        case 13:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                })
                              )
                            ),
                            this.ExtendShowBar(!1);
                        }
                      }),
                      (n.start = function () {
                        m("ExtraBet start");
                      }),
                      (n.CheckCanUseBtn = function () {
                        return (
                          X.IsInMG() &&
                          At.Current() == q.IDLE &&
                          !X.IsUsingItem &&
                          !ht.IsBuyBonus &&
                          !wt.IsFeaturesDemoMode &&
                          !K.CheckSwitchOff(Mt.CloseExtraBet)
                        );
                      }),
                      (n.OnSpin = function () {
                        this.ExtendShowBar(!1);
                      }),
                      (n.ShowExtra = function (t) {
                        this.m_multiExtraBetNode &&
                          !K.CheckSwitchOff(Mt.CloseExtraBet) &&
                          (this.m_multiExtraBetNode.active = t);
                      }),
                      (n.GoToFeatures = function () {}),
                      (n.ExtendShowBar = (function () {
                        var t = L(
                          R().mark(function t(e) {
                            var n;
                            return R().wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      if (
                                        this.m_canExtend &&
                                        !K.CheckSwitchOff(Mt.CloseExtraBet)
                                      ) {
                                        t.next = 2;
                                        break;
                                      }
                                      return t.abrupt("return");
                                    case 2:
                                      if (!xt || this.m_ExtraBetAniPlaying) {
                                        t.next = 31;
                                        break;
                                      }
                                      if (!e) {
                                        t.next = 20;
                                        break;
                                      }
                                      if (
                                        xt.IsAutoSpin ||
                                        X.IsUsingItem ||
                                        ht.IsBuyBonus
                                      ) {
                                        t.next = 17;
                                        break;
                                      }
                                      if (this.m_isExtendShowBar) {
                                        t.next = 15;
                                        break;
                                      }
                                      if (
                                        ((this.m_isExtendShowBar = !0),
                                        xt.SetSpinState(It.CLICK_SPIN),
                                        (this.m_ExtraBetAniPlaying = !0),
                                        !this.m_multiExtraBetNode)
                                      ) {
                                        t.next = 12;
                                        break;
                                      }
                                      return (
                                        (t.next = 12),
                                        this.PlayAnimation(
                                          this.m_multiExtraBetNode.getComponent(
                                            f
                                          ),
                                          "ExtraBet_Show"
                                        )
                                      );
                                    case 12:
                                      (this.m_ExtraBetAniPlaying = !1),
                                        xt.SetSpinState(It.IDLE),
                                        this.m_isExtra &&
                                          this.m_multiExtraBetNode &&
                                          this.m_multiExtraBetNode
                                            .getComponent(f)
                                            .play("ExtraBet_Active");
                                    case 15:
                                      t.next = 18;
                                      break;
                                    case 17:
                                      Bt.ShowMessageBox(
                                        X.StringKey.FREEWINCASH_PLAYING1
                                      );
                                    case 18:
                                      t.next = 31;
                                      break;
                                    case 20:
                                      if (!this.m_isExtendShowBar) {
                                        t.next = 31;
                                        break;
                                      }
                                      if (
                                        (xt.IsAutoSpin ||
                                          xt.SetSpinState(It.CLICK_SPIN),
                                        this.m_multiBtn_Tip &&
                                          (this.m_multiBtn_Tip.active = !1),
                                        (this.m_ExtraBetAniPlaying = !0),
                                        !this.m_multiExtraBetNode)
                                      ) {
                                        t.next = 27;
                                        break;
                                      }
                                      return (
                                        (t.next = 27),
                                        this.PlayAnimation(
                                          this.m_multiExtraBetNode.getComponent(
                                            f
                                          ),
                                          "ExtraBet_Close"
                                        )
                                      );
                                    case 27:
                                      (this.m_ExtraBetAniPlaying = !1),
                                        xt.IsAutoSpin ||
                                          xt.SetSpinState(It.IDLE),
                                        this.m_multiExtraBetNode &&
                                          (this.m_isExtra
                                            ? this.m_multiExtraBetNode
                                                .getComponent(f)
                                                .play("ExtraBet_Active")
                                            : (this.m_multiExtraBetNode
                                                .getComponent(f)
                                                .play("ExtraBet_OFF"),
                                              (n = this.m_multiExtraBetNode
                                                .getComponent(f)
                                                .getState(
                                                  "ExtraBet_OFF"
                                                )).setTime(n.duration))),
                                        (this.m_isExtendShowBar = !1);
                                    case 31:
                                    case "end":
                                      return t.stop();
                                  }
                              },
                              t,
                              this
                            );
                          })
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })()),
                      (n.ChangeBetMode = (function () {
                        var t = L(
                          R().mark(function t() {
                            var e;
                            return R().wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      if (!K.CheckSwitchOff(Mt.CloseExtraBet)) {
                                        t.next = 2;
                                        break;
                                      }
                                      return t.abrupt("return");
                                    case 2:
                                      if (
                                        (m(
                                          "ChangeBetMode stateManager.Current() : ",
                                          At.Current()
                                        ),
                                        !xt ||
                                          ht.IsBuyBonus ||
                                          (At.Current() !== q.IDLE &&
                                            !this.m_isExtra))
                                      ) {
                                        t.next = 36;
                                        break;
                                      }
                                      if (
                                        ((this.m_isExtra = !this.m_isExtra),
                                        (e = []),
                                        !this.m_isExtra)
                                      ) {
                                        t.next = 24;
                                        break;
                                      }
                                      return (
                                        this.m_isTwoStep
                                          ? (this.m_toStepTwo = !0)
                                          : xt.ChangeMultiBet(Ke),
                                        1 == this.m_multiBtn_on.length &&
                                          ((this.m_multiBtn_on[0].node.active =
                                            !0),
                                          (this.m_multiBtn_off[0].node.active =
                                            !1)),
                                        (this.m_ExtraBetAniPlaying = !0),
                                        null == xt ||
                                          xt.SetSpinState(It.CLICK_SPIN),
                                        null == wt || wt.SetBuyBonusState(!1),
                                        this.m_multiExtraBetNode &&
                                          e.push(
                                            this.PlayAnimation(
                                              this.m_multiExtraBetNode.getComponent(
                                                f
                                              ),
                                              "ExtraBet_ON"
                                            )
                                          ),
                                        e.push(
                                          this.m_triggerCb(this.m_isExtra, !1)
                                        ),
                                        (t.next = 16),
                                        Promise.all(e)
                                      );
                                    case 16:
                                      return (
                                        (this.m_ExtraBetAniPlaying = !1),
                                        null == xt || xt.SetSpinState(It.IDLE),
                                        this.m_multiExtraBetNode &&
                                          this.m_multiExtraBetNode
                                            .getComponent(f)
                                            .play("ExtraBet_Active"),
                                        (t.next = 21),
                                        X.Wait(this, 0.2)
                                      );
                                    case 21:
                                      null == wt || wt.SetBuyBonusState(!0),
                                        (t.next = 34);
                                      break;
                                    case 24:
                                      return (
                                        xt.ChangeMultiBet(je),
                                        1 == this.m_multiBtn_on.length &&
                                          ((this.m_multiBtn_on[0].node.active =
                                            !1),
                                          (this.m_multiBtn_off[0].node.active =
                                            !0)),
                                        (this.m_ExtraBetAniPlaying = !0),
                                        null == xt ||
                                          xt.SetSpinState(It.CLICK_SPIN),
                                        this.m_multiExtraBetNode &&
                                          e.push(
                                            this.PlayAnimation(
                                              this.m_multiExtraBetNode.getComponent(
                                                f
                                              ),
                                              "ExtraBet_OFF"
                                            )
                                          ),
                                        e.push(
                                          this.m_triggerCb(this.m_isExtra, !1)
                                        ),
                                        (t.next = 32),
                                        Promise.all(e)
                                      );
                                    case 32:
                                      (this.m_ExtraBetAniPlaying = !1),
                                        null == xt || xt.SetSpinState(It.IDLE);
                                    case 34:
                                      t.next = 37;
                                      break;
                                    case 36:
                                      At.Current() !== q.IDLE &&
                                        (m("TRIAL_REFUSED_REASON 1 "),
                                        Bt.ShowMessageBox(
                                          X.StringKey.FREEWINCASH_PLAYING1
                                        ));
                                    case 37:
                                    case "end":
                                      return t.stop();
                                  }
                              },
                              t,
                              this
                            );
                          })
                        );
                        return function () {
                          return t.apply(this, arguments);
                        };
                      })()),
                      (n.SetTwoStepMulti = (function () {
                        var t = L(
                          R().mark(function t(e, n) {
                            return R().wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      if (!K.CheckSwitchOff(Mt.CloseExtraBet)) {
                                        t.next = 2;
                                        break;
                                      }
                                      return t.abrupt("return");
                                    case 2:
                                      if (
                                        !this.m_isTwoStep ||
                                        !this.m_toStepTwo
                                      ) {
                                        t.next = 15;
                                        break;
                                      }
                                      if (!e) {
                                        t.next = 7;
                                        break;
                                      }
                                      xt.ChangeMultiBet(n), (t.next = 15);
                                      break;
                                    case 7:
                                      if (
                                        ((this.m_isExtra = !1),
                                        1 == this.m_multiBtn_on.length &&
                                          ((this.m_multiBtn_on[0].node.active =
                                            !1),
                                          (this.m_multiBtn_off[0].node.active =
                                            !0)),
                                        (this.m_ExtraBetAniPlaying = !0),
                                        xt && xt.SetSpinState(It.CLICK_SPIN),
                                        !this.m_multiExtraBetNode)
                                      ) {
                                        t.next = 14;
                                        break;
                                      }
                                      return (
                                        (t.next = 14),
                                        this.PlayAnimation(
                                          this.m_multiExtraBetNode.getComponent(
                                            f
                                          ),
                                          "ExtraBet_OFF"
                                        )
                                      );
                                    case 14:
                                      this.m_ExtraBetAniPlaying = !1;
                                    case 15:
                                    case "end":
                                      return t.stop();
                                  }
                              },
                              t,
                              this
                            );
                          })
                        );
                        return function (e, n) {
                          return t.apply(this, arguments);
                        };
                      })()),
                      (n.ForceSetExtraBet = (function () {
                        var t = L(
                          R().mark(function t(e, n) {
                            var i;
                            return R().wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      if (
                                        (void 0 === n && (n = Ke),
                                        !K.CheckSwitchOff(Mt.CloseExtraBet))
                                      ) {
                                        t.next = 3;
                                        break;
                                      }
                                      return t.abrupt("return");
                                    case 3:
                                      if (!e) {
                                        t.next = 12;
                                        break;
                                      }
                                      return (
                                        (this.m_isExtra = !0),
                                        1 == this.m_multiBtn_on.length &&
                                          ((this.m_multiBtn_on[0].node.active =
                                            !0),
                                          (this.m_multiBtn_off[0].node.active =
                                            !1)),
                                        this.m_multiExtraBetNode &&
                                          this.m_multiExtraBetNode
                                            .getComponent(f)
                                            .play("ExtraBet_Active"),
                                        this.m_isTwoStep
                                          ? ((this.m_toStepTwo = !0),
                                            this.SetTwoStepMulti(e, n))
                                          : xt.ChangeMultiBet(n),
                                        (t.next = 10),
                                        this.m_triggerCb(e, !0)
                                      );
                                    case 10:
                                      t.next = 21;
                                      break;
                                    case 12:
                                      if (!this.m_isExtra) {
                                        t.next = 21;
                                        break;
                                      }
                                      return (
                                        (i = []),
                                        (this.m_isExtra = !1),
                                        1 == this.m_multiBtn_on.length &&
                                          ((this.m_multiBtn_on[0].node.active =
                                            !1),
                                          (this.m_multiBtn_off[0].node.active =
                                            !0)),
                                        xt.ChangeMultiBet(je),
                                        this.m_multiExtraBetNode &&
                                          (this.m_isExtendShowBar
                                            ? i.push(this.ExtendShowBar(!1))
                                            : i.push(
                                                this.PlayAnimation(
                                                  this.m_multiExtraBetNode.getComponent(
                                                    f
                                                  ),
                                                  "ExtraBet_OFF"
                                                )
                                              )),
                                        i.push(this.m_triggerCb(e, !0)),
                                        (t.next = 21),
                                        Promise.all(i)
                                      );
                                    case 21:
                                    case "end":
                                      return t.stop();
                                  }
                              },
                              t,
                              this
                            );
                          })
                        );
                        return function (e, n) {
                          return t.apply(this, arguments);
                        };
                      })()),
                      (n.OnRotation = function () {
                        K.CheckSwitchOff(Mt.CloseExtraBet) ||
                          (this.m_multiExtraBetNode &&
                            (this.m_isExtra
                              ? this.m_multiExtraBetNode
                                  .getComponent(f)
                                  .play("ExtraBet_Active")
                              : this.m_multiExtraBetNode
                                  .getComponent(f)
                                  .play("ExtraBet_Stop")),
                          this.m_multiBtn_Tip &&
                            (this.m_multiBtn_Tip.active = !1));
                      }),
                      (n.IsExAnimationTouchable = function () {
                        return !this.m_ExtraBetAniPlaying;
                      }),
                      (n.FirstShowBar = function () {}),
                      (n.PlayAnimation = function (t, e, n) {
                        return (
                          void 0 === n && (n = !1),
                          new Promise(function (i) {
                            if ((t.play(e), n)) {
                              var o = t.getState(e);
                              o && (o.wrapMode = y.WrapMode.Loop);
                            }
                            t.once(f.EventType.FINISHED, function () {
                              i(!0);
                            });
                          })
                        );
                      }),
                      D(e, [
                        {
                          key: "ExtraBetAniPlaying",
                          set: function (t) {
                            this.m_ExtraBetAniPlaying = t;
                          },
                        },
                        {
                          key: "IsExtra",
                          get: function () {
                            return this.m_isExtra;
                          },
                        },
                        {
                          key: "IsForceExtraOnEnd",
                          get: function () {
                            return this.m_isForceExtraOnEnd;
                          },
                        },
                        {
                          key: "CanExtend",
                          set: function (t) {
                            this.m_canExtend = t;
                          },
                        },
                      ]),
                      e
                    );
                  })(c)).prototype,
                  "m_multiExtraBetNode",
                  [jt],
                  {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                      return null;
                    },
                  }
                )),
                (ne = j(te.prototype, "m_multiBtn", [Kt], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                })),
                (ie = j(te.prototype, "m_multiBtn_on", [Yt], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                })),
                (oe = j(te.prototype, "m_multiBtn_off", [qt], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                })),
                (re = j(te.prototype, "m_multiBtn_TipQuesMark", [Xt], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                })),
                (ae = j(te.prototype, "m_multiBtn_Tip", [Vt], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                })),
                (se = j(te.prototype, "m_multiBtn_Description", [Qt], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                })),
                (ue = j(te.prototype, "m_Txt_Extra_Bet", [Zt], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                })),
                ($t = te))
              ) || $t)
            );
            e._RF.pop(),
              e._RF.push({}, "9099fuoIOdA/qc/GkvbZ7rH", "GroupNode", void 0);
            var Ye,
              qe,
              Xe,
              Ve,
              Qe = r.ccclass,
              Ze = r.property,
              $e = r.menu,
              tn = r.executeInEditMode,
              en = "active-in-hierarchy-changed";
            !(function (t) {
              (t[(t.WIDTH = 1)] = "WIDTH"),
                (t[(t.HEIGHT = 2)] = "HEIGHT"),
                (t[(t.BOTH = 3)] = "BOTH");
            })(Ye || (Ye = {})),
              (function (t) {
                (t[(t.X = 1)] = "X"),
                  (t[(t.Y = 2)] = "Y"),
                  (t[(t.BOTH = 3)] = "BOTH");
              })(qe || (qe = {})),
              (function (t) {
                (t[(t.X = 1)] = "X"),
                  (t[(t.Y = 2)] = "Y"),
                  (t[(t.BOTH = 3)] = "BOTH");
              })(Xe || (Xe = {})),
              (function (t) {
                (t[(t.R = 1)] = "R"),
                  (t[(t.G = 2)] = "G"),
                  (t[(t.B = 4)] = "B"),
                  (t[(t.RGB = 7)] = "RGB"),
                  (t[(t.A = 8)] = "A"),
                  (t[(t.RGBA = 15)] = "RGBA");
              })(Ve || (Ve = {}));
            var nn, on, rn, an, sn, un, cn, ln, mn, hn, pn, _n, dn, fn, yn;
            (he = $e("Chiron/GroupNode/GroupNode")),
              (pe = Ze({
                displayName: "Sync OnEnable",
                tooltip:
                  "當 Node 啟用時同步一次所有選定的狀態至屬性 Group Nodes 中",
              })),
              (_e = Ze({
                displayName: "Sync OnDisable",
                tooltip:
                  "當 Node 啟用時同步一次所有選定的狀態至屬性 Group Nodes 中",
              })),
              (de = Ze({
                displayName: "Sync Recursive",
                tooltip:
                  "是否遞迴同步屬性 Group Nodes 中帶有 GroupNode 元件的節點",
              })),
              (fe = Ze({ type: [h], displayName: "Group Nodes" })),
              (ye = Ze({
                displayName: "Active Aware",
                tooltip: "當啓閉狀態改變時是否讓群組裡的 Node 跟著啓閉調整",
              })),
              (Se = Ze({
                displayName: "Position Aware",
                tooltip: "當位置改變時是否讓群組裡的 Node 跟著調整相對位置",
              })),
              (ge = Ze({
                type: S(qe),
                displayName: "Position Mode",
                tooltip: "當座標改變時子元件跟著調動的參數",
                visible: function () {
                  return this.m_positionAware;
                },
              })),
              (ve = Ze({
                displayName: "Rotation Aware",
                tooltip: "當旋轉改變時是否讓群組裡的 Node 跟著調整轉角",
              })),
              (Ee = Ze({
                displayName: "Scale Aware",
                tooltip: "當縮放比例改變時是否讓群組裡的 Node 跟著改變縮放比例",
              })),
              (be = Ze({
                type: S(Xe),
                displayName: "Scale Mode",
                tooltip: "當縮放改變時子元件跟著調動的參數",
                visible: function () {
                  return this.m_scaleAware;
                },
              })),
              (Ce = Ze({
                displayName: "Color Aware",
                tooltip: "當顏色改變時是否讓群組裡的 Node 跟著改變顏色",
              })),
              (xe = Ze({
                type: S(Ve),
                displayName: "Color Mode",
                tooltip: "當顏色改變時子元件跟著調動的參數",
                visible: function () {
                  return this.m_colorAware;
                },
              })),
              (we = Ze({
                displayName: "Size Aware",
                tooltip: "當大小改變時是否讓群組裡的 Node 跟著改變大小",
              })),
              (Te = Ze({
                type: S(Ye),
                displayName: "Size Mode",
                tooltip: "當大小改變時子元件跟著調動的參數",
                visible: function () {
                  return this.m_sizeAware;
                },
              })),
              Qe(
                (Be =
                  tn(
                    (Be =
                      he(
                        ((Ae = j(
                          (Ie = (function (t) {
                            function e() {
                              for (
                                var e,
                                  n = arguments.length,
                                  i = new Array(n),
                                  o = 0;
                                o < n;
                                o++
                              )
                                i[o] = arguments[o];
                              return (
                                ((e =
                                  t.call.apply(t, [this].concat(i)) ||
                                  this).m_lastPos = void 0),
                                (e.m_lastRotation = void 0),
                                J(e, "m_syncOnEnable", Ae, U(e)),
                                J(e, "m_syncOnDisable", Ne, U(e)),
                                J(e, "m_syncRecursive", ke, U(e)),
                                J(e, "m_nodes", Oe, U(e)),
                                J(e, "m_activeAware", Pe, U(e)),
                                J(e, "m_positionAware", Re, U(e)),
                                J(e, "m_positionMode", Fe, U(e)),
                                J(e, "m_rotationAware", Le, U(e)),
                                J(e, "m_scaleAware", Me, U(e)),
                                J(e, "m_scaleMode", De, U(e)),
                                J(e, "m_colorAware", Ge, U(e)),
                                J(e, "m_colorMode", ze, U(e)),
                                J(e, "m_sizeAware", Ue, U(e)),
                                J(e, "m_sizeMode", We, U(e)),
                                (e.m_isRegisted = !1),
                                e
                              );
                            }
                            G(e, t);
                            var o = e.prototype;
                            return (
                              (o.__preload = function () {
                                this.m_isRegisted ||
                                  ((this.m_isRegisted = !0),
                                  (this.m_lastPos = i(
                                    this.node.position.x,
                                    this.node.position.y
                                  )),
                                  (this.m_lastRotation = this.node.angle),
                                  this.node.on(en, this.OnActiveChanged, this),
                                  this.node.on(
                                    h.EventType.COLOR_CHANGED,
                                    this.OnColorChanged,
                                    this
                                  ),
                                  this.node.on(
                                    h.EventType.TRANSFORM_CHANGED,
                                    this.OnRotationChanged,
                                    this
                                  ),
                                  this.node.on(
                                    h.EventType.TRANSFORM_CHANGED,
                                    this.OnPositionChanged,
                                    this
                                  ),
                                  this.node.on(
                                    h.EventType.TRANSFORM_CHANGED,
                                    this.OnScaleChanged,
                                    this
                                  ),
                                  this.node.on(
                                    h.EventType.SIZE_CHANGED,
                                    this.OnSizeChanged,
                                    this
                                  ),
                                  g.on(
                                    v.EVENT_BEFORE_DRAW,
                                    this.StateCheck,
                                    this
                                  ));
                              }),
                              (o.ForceInit = function () {
                                this.__preload();
                              }),
                              (o.onDestroy = function () {
                                t.prototype.onDestroy &&
                                  t.prototype.onDestroy.call(this),
                                  this.node.off(en, this.OnActiveChanged, this),
                                  this.node.off(
                                    h.EventType.TRANSFORM_CHANGED,
                                    this.OnPositionChanged,
                                    this
                                  ),
                                  this.node.off(
                                    h.EventType.COLOR_CHANGED,
                                    this.OnColorChanged,
                                    this
                                  ),
                                  this.node.off(
                                    h.EventType.TRANSFORM_CHANGED,
                                    this.OnRotationChanged,
                                    this
                                  ),
                                  this.node.off(
                                    h.EventType.TRANSFORM_CHANGED,
                                    this.OnScaleChanged,
                                    this
                                  ),
                                  this.node.off(
                                    h.EventType.SIZE_CHANGED,
                                    this.OnSizeChanged,
                                    this
                                  ),
                                  g.off(
                                    v.EVENT_BEFORE_DRAW,
                                    this.StateCheck,
                                    this
                                  );
                              }),
                              (o.onEnable = function () {
                                t.prototype.onEnable &&
                                  t.prototype.onEnable.call(this),
                                  this.m_syncOnEnable && this.SyncAware();
                              }),
                              (o.onDisable = function () {
                                t.prototype.onDisable &&
                                  t.prototype.onDisable.call(this),
                                  this.m_syncOnDisable && this.SyncAware();
                              }),
                              (o.SyncAware = function () {
                                this.SyncActive(),
                                  this.SyncSize(),
                                  this.SyncPosition(),
                                  this.SyncRotation(),
                                  this.SyncOpacity(),
                                  this.SyncColor(),
                                  this.SyncScale();
                              }),
                              (o.StateCheck = function () {
                                this.node.isValid &&
                                  this.node._renderFlag &&
                                  this.OnOpacityChanged();
                              }),
                              (o.SyncGroupChild = function (t, n) {
                                var i = n.getComponent(e);
                                this.m_syncRecursive && i && t.call(i);
                              }),
                              (o.SyncScale = function () {
                                if (this.m_scaleAware)
                                  for (
                                    var t, e = H(this.m_nodes);
                                    !(t = e()).done;

                                  ) {
                                    var n = t.value;
                                    n &&
                                      n.isValid &&
                                      ((n.scale = new E(
                                        this.node.scale.x,
                                        this.node.scale.y,
                                        this.node.scale.z
                                      )),
                                      this.SyncGroupChild(this.SyncScale, n));
                                  }
                              }),
                              (o.OnScaleChanged = function () {
                                this.SyncScale();
                              }),
                              (o.SyncColor = function () {
                                if (this.m_colorAware)
                                  for (
                                    var t,
                                      e = this.node.getComponent(b).color,
                                      n = H(this.m_nodes);
                                    !(t = n()).done;

                                  ) {
                                    var i = t.value;
                                    i &&
                                      i.isValid &&
                                      ((i.getComponent(b).color = e),
                                      this.SyncGroupChild(this.SyncColor, i));
                                  }
                              }),
                              (o.OnColorChanged = function () {
                                this.SyncColor();
                              }),
                              (o.SyncOpacity = function () {
                                if (
                                  this.m_colorAware &&
                                  this.m_colorMode & Ve.A
                                )
                                  for (
                                    var t, e = H(this.m_nodes);
                                    !(t = e()).done;

                                  ) {
                                    var n = t.value;
                                    n &&
                                      n.isValid &&
                                      ((n.getComponent(C).opacity =
                                        this.node.getComponent(C).opacity),
                                      this.SyncGroupChild(this.SyncOpacity, n));
                                  }
                              }),
                              (o.OnOpacityChanged = function () {
                                this.SyncOpacity();
                              }),
                              (o.SyncRotation = function () {
                                if (this.m_rotationAware) {
                                  var t = this.node.angle - this.m_lastRotation;
                                  this.m_lastRotation = this.node.angle;
                                  for (
                                    var e, n = H(this.m_nodes);
                                    !(e = n()).done;

                                  ) {
                                    var i = e.value;
                                    i &&
                                      i.isValid &&
                                      ((i.angle = i.angle + t),
                                      this.SyncGroupChild(
                                        this.SyncRotation,
                                        i
                                      ));
                                  }
                                }
                              }),
                              (o.OnRotationChanged = function () {
                                this.SyncRotation();
                              }),
                              (o.SyncActive = function () {
                                if (this.m_activeAware)
                                  for (
                                    var t,
                                      e = this.node.active,
                                      n = H(this.m_nodes);
                                    !(t = n()).done;

                                  ) {
                                    var i = t.value;
                                    i &&
                                      i.isValid &&
                                      ((i.active = e),
                                      this.SyncGroupChild(this.SyncActive, i));
                                  }
                              }),
                              (o.OnActiveChanged = function () {
                                this.SyncActive();
                              }),
                              (o.SyncPosition = function () {
                                if (this.m_positionAware) {
                                  var t =
                                      this.node.position.x - this.m_lastPos.x,
                                    e = this.node.position.y - this.m_lastPos.y;
                                  (this.m_lastPos.x = this.node.position.x),
                                    (this.m_lastPos.y = this.node.position.y);
                                  for (
                                    var i, o = H(this.m_nodes);
                                    !(i = o()).done;

                                  ) {
                                    var r = i.value;
                                    r &&
                                      r.isValid &&
                                      (r.setPosition(
                                        n(
                                          r.position.x + t,
                                          r.position.y + e,
                                          r.position.z
                                        )
                                      ),
                                      this.SyncGroupChild(
                                        this.SyncPosition,
                                        r
                                      ));
                                  }
                                }
                              }),
                              (o.OnPositionChanged = function () {
                                this.SyncPosition();
                              }),
                              (o.SyncSize = function () {
                                if (this.m_sizeAware)
                                  for (
                                    var t, e = H(this.m_nodes);
                                    !(t = e()).done;

                                  ) {
                                    var n = t.value;
                                    n &&
                                      n.isValid &&
                                      (this.m_sizeMode & Ye.WIDTH &&
                                        (n.getComponent(x).width =
                                          this.node.getComponent(x).width),
                                      this.m_sizeMode & Ye.HEIGHT &&
                                        (n.getComponent(x).height =
                                          this.node.getComponent(x).height),
                                      this.SyncGroupChild(this.SyncSize, n));
                                  }
                              }),
                              (o.OnSizeChanged = function () {
                                this.SyncSize();
                              }),
                              D(e, [
                                {
                                  key: "Nodes",
                                  get: function () {
                                    return this.m_nodes;
                                  },
                                },
                              ]),
                              e
                            );
                          })(c)).prototype,
                          "m_syncOnEnable",
                          [pe],
                          {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return !1;
                            },
                          }
                        )),
                        (Ne = j(Ie.prototype, "m_syncOnDisable", [_e], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return !1;
                          },
                        })),
                        (ke = j(Ie.prototype, "m_syncRecursive", [de], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return !1;
                          },
                        })),
                        (Oe = j(Ie.prototype, "m_nodes", [fe], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return [];
                          },
                        })),
                        (Pe = j(Ie.prototype, "m_activeAware", [ye], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return !0;
                          },
                        })),
                        (Re = j(Ie.prototype, "m_positionAware", [Se], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return !1;
                          },
                        })),
                        (Fe = j(Ie.prototype, "m_positionMode", [ge], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return qe.BOTH;
                          },
                        })),
                        (Le = j(Ie.prototype, "m_rotationAware", [ve], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return !1;
                          },
                        })),
                        (Me = j(Ie.prototype, "m_scaleAware", [Ee], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return !1;
                          },
                        })),
                        (De = j(Ie.prototype, "m_scaleMode", [be], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return Xe.BOTH;
                          },
                        })),
                        (Ge = j(Ie.prototype, "m_colorAware", [Ce], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return !1;
                          },
                        })),
                        (ze = j(Ie.prototype, "m_colorMode", [xe], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return Ve.RGBA;
                          },
                        })),
                        (Ue = j(Ie.prototype, "m_sizeAware", [we], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return !1;
                          },
                        })),
                        (We = j(Ie.prototype, "m_sizeMode", [Te], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return Ye.BOTH;
                          },
                        })),
                        (Be = Ie))
                      ) || Be)
                  ) || Be)
              );
            e._RF.pop(),
              e._RF.push(
                {},
                "0c18bO40hVJB4/zzDByb8vr",
                "ManualComponent",
                void 0
              );
            var Sn,
              gn,
              vn,
              En,
              bn,
              Cn,
              xn,
              wn,
              Tn,
              Bn,
              In,
              An,
              Nn,
              kn,
              On = r.ccclass,
              Pn = r.property,
              Rn = "Manual_Open",
              Fn = "Manual_Close",
              Ln = "Open",
              Mn = "Opening",
              Dn = "Close",
              Gn = "Closing";
            t(
              "M",
              ((nn = On("ManualComponent")),
              (on = Pn({ type: h, tooltip: "特色說明按鈕(新版跑馬燈)" })),
              (rn = Pn({ type: h, tooltip: "特色說明本體(新版跑馬燈)" })),
              (an = Pn({ type: h, tooltip: "特色說明關閉按鈕(新版跑馬燈)" })),
              (sn = Pn({
                type: h,
                tooltip: "特色說明周圍關閉按鈕(新版跑馬燈)",
              })),
              (un = Pn({ type: _, tooltip: "特色說明內容(新版跑馬燈)" })),
              (cn = Pn({ type: _, tooltip: "標題" })),
              nn(
                ((hn = j(
                  (mn = (function (t) {
                    function e() {
                      for (
                        var e, n = arguments.length, i = new Array(n), o = 0;
                        o < n;
                        o++
                      )
                        i[o] = arguments[o];
                      return (
                        J(
                          (e = t.call.apply(t, [this].concat(i)) || this),
                          "m_featureInfoBtn",
                          hn,
                          U(e)
                        ),
                        J(e, "m_featureInfoBoard", pn, U(e)),
                        J(e, "m_featureInfoCloseBtn", _n, U(e)),
                        J(e, "m_featureInfoSideBtn", dn, U(e)),
                        J(e, "m_featureInfoTxt", fn, U(e)),
                        J(e, "m_titleSprite", yn, U(e)),
                        (e.m_manulState = Dn),
                        (e.m_manulOpenLock = !1),
                        e
                      );
                    }
                    G(e, t);
                    var n = e.prototype;
                    return (
                      (n.onLoad = function () {
                        var t = this;
                        K.CheckSwitchOff(Mt.CloseManual)
                          ? (this.node.active = !1)
                          : (this.m_featureInfoBtn &&
                              this.m_featureInfoBtn.on(
                                h.EventType.TOUCH_END,
                                function () {
                                  t.OpenManul(),
                                    Ot.Play(
                                      Astarte.Define.AudioClips.COMMON_BTN
                                    );
                                }
                              ),
                            this.m_featureInfoCloseBtn &&
                              this.m_featureInfoCloseBtn.on(
                                h.EventType.TOUCH_END,
                                function () {
                                  t.CloseManul(),
                                    Ot.Play(
                                      Astarte.Define.AudioClips.COMMON_BTN
                                    );
                                }
                              ),
                            this.m_featureInfoSideBtn &&
                              this.m_featureInfoSideBtn.on(
                                h.EventType.TOUCH_END,
                                function () {
                                  t.CloseManul();
                                }
                              ));
                      }),
                      (n.OpenManul = function () {
                        var t = this;
                        this.m_manulOpenLock
                          ? Bt.ShowMessageBox(
                              Astarte.Define.StringKey.FREEWINCASH_PLAYING1
                            )
                          : this.m_manulState == Dn &&
                            ((this.m_featureInfoBoard.active = !0),
                            w(this.m_featureInfoBoard)
                              .call(function () {
                                (t.m_manulState = Mn),
                                  t.m_featureInfoBoard
                                    .getComponentInChildren(f)
                                    .play(Rn);
                              })
                              .delay(0.5)
                              .call(function () {
                                t.m_manulState = Ln;
                              })
                              .start());
                      }),
                      (n.CloseManul = function () {
                        var t = this;
                        this.m_manulState == Ln &&
                          w(this.m_featureInfoBoard)
                            .call(function () {
                              (t.m_manulState = Gn),
                                t.m_featureInfoBoard
                                  .getComponentInChildren(f)
                                  .play(Fn);
                            })
                            .delay(0.5)
                            .call(function () {
                              (t.m_manulState = Dn),
                                (t.m_featureInfoBoard.active = !1);
                            })
                            .start();
                      }),
                      (n.SetTxt = function (t, e) {
                        void 0 === e && (e = null);
                        for (
                          var n = kt.GetGameAtlas(), i = 0;
                          i < this.m_featureInfoTxt.length;
                          i++
                        ) {
                          n.getSpriteFrame(t[i]) &&
                            (this.m_featureInfoTxt[i].spriteFrame =
                              n.getSpriteFrame(t[i]));
                        }
                        this.m_titleSprite &&
                          e &&
                          (this.m_titleSprite.spriteFrame =
                            n.getSpriteFrame(e));
                      }),
                      D(e, [
                        {
                          key: "FeatureInfoBtn",
                          get: function () {
                            return this.m_featureInfoBtn;
                          },
                        },
                        {
                          key: "ManulState",
                          get: function () {
                            return this.m_manulState;
                          },
                        },
                        {
                          key: "ManulOpenLock",
                          get: function () {
                            return this.m_manulOpenLock;
                          },
                          set: function (t) {
                            this.m_manulOpenLock = t;
                          },
                        },
                      ]),
                      e
                    );
                  })(c)).prototype,
                  "m_featureInfoBtn",
                  [on],
                  {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                      return null;
                    },
                  }
                )),
                (pn = j(mn.prototype, "m_featureInfoBoard", [rn], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                })),
                (_n = j(mn.prototype, "m_featureInfoCloseBtn", [an], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                })),
                (dn = j(mn.prototype, "m_featureInfoSideBtn", [sn], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                })),
                (fn = j(mn.prototype, "m_featureInfoTxt", [un], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                })),
                (yn = j(mn.prototype, "m_titleSprite", [cn], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                })),
                (ln = mn))
              ) || ln)
            );
            e._RF.pop(),
              e._RF.push(
                {},
                "1d950BFoN5LhJJ79uyt+/E+",
                "MarqueeComponent",
                void 0
              );
            var zn = r.ccclass,
              Un = r.property;
            (Sn = Un({ type: u, tooltip: "每秒的位移量" })),
              (gn = Un({ type: u, tooltip: "循環播放的間隔" })),
              (vn = Un({ type: u, tooltip: "未超出的停留時間" })),
              (En = Un({ type: u, tooltip: "超出時的停留時間" })),
              (bn = Un({ type: u, tooltip: "尾部保留的空間" })),
              (Cn = Un({ type: h, tooltip: "跑馬燈內容節點" })),
              zn(
                ((Tn = j(
                  (wn = (function (t) {
                    function e() {
                      for (
                        var e, n = arguments.length, i = new Array(n), o = 0;
                        o < n;
                        o++
                      )
                        i[o] = arguments[o];
                      return (
                        J(
                          (e = t.call.apply(t, [this].concat(i)) || this),
                          "m_moveSpeed",
                          Tn,
                          U(e)
                        ),
                        J(e, "m_delayTime", Bn, U(e)),
                        J(e, "m_waitTime", In, U(e)),
                        J(e, "m_moveDelayTime", An, U(e)),
                        J(e, "m_tailLeftSpace", Nn, U(e)),
                        J(e, "m_content", kn, U(e)),
                        (e.m_imgs = null),
                        (e.m_viewWidth = null),
                        (e.m_stringSprite = null),
                        (e.m_isStart = !1),
                        (e.m_isStop = !1),
                        (e.m_scale = 1),
                        (e.m_imgIndex = -1),
                        e
                      );
                    }
                    G(e, t);
                    var o = e.prototype;
                    return (
                      (o.Init = function (t) {
                        (this.m_imgs = t),
                          (this.m_viewWidth =
                            this.node.getComponent(x).contentSize.width);
                        var e = this.m_content
                          ? this.m_content
                          : this.node.children[0];
                        t &&
                          t.length > 0 &&
                          (e ||
                            ((e = new h()).addComponent(x),
                            this.node.addChild(e)),
                          (this.m_stringSprite = e.getComponent(_)),
                          this.m_stringSprite ||
                            (this.m_stringSprite = e.addComponent(_)),
                          (this.m_stringSprite.type = _.Type.SIMPLE),
                          (this.m_stringSprite.sizeMode = _.SizeMode.TRIMMED)),
                          e.getComponent(x).setAnchorPoint(i(0, 0.5)),
                          (this.m_scale = e.scale.x);
                      }),
                      (o.ShowOnce = (function () {
                        var t = L(
                          R().mark(function t(e) {
                            var i, o, r, a, s, u, c, l, m, h;
                            return R().wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      if (!this.m_isStart) {
                                        t.next = 2;
                                        break;
                                      }
                                      return t.abrupt("return");
                                    case 2:
                                      if (
                                        ((this.m_isStart = !0),
                                        "string" != typeof e)
                                      ) {
                                        t.next = 24;
                                        break;
                                      }
                                      if (
                                        !(i = this.m_content.getComponent(B))
                                      ) {
                                        t.next = 19;
                                        break;
                                      }
                                      return (
                                        (i.string = e),
                                        (o = K.times(
                                          i.node.getComponent(x).width +
                                            this.m_tailLeftSpace,
                                          this.m_scale
                                        )),
                                        (i.node.active = !0),
                                        (r = o + this.m_viewWidth),
                                        (a = K.divide(r, this.m_moveSpeed)),
                                        (s = i.node.position.x),
                                        w(i.node)
                                          .to(a, { position: n(s - r, 0) })
                                          .start(),
                                        (t.next = 15),
                                        X.Wait(this, a)
                                      );
                                    case 15:
                                      (i.node.active = !1),
                                        i.node.setPosition(
                                          n(this.m_viewWidth, 0)
                                        ),
                                        (t.next = 22);
                                      break;
                                    case 19:
                                      return (
                                        T("RichText doesn't exist"),
                                        (this.m_isStart = !1),
                                        t.abrupt("return")
                                      );
                                    case 22:
                                      t.next = 44;
                                      break;
                                    case 24:
                                      if (
                                        (e
                                          ? (this.m_imgIndex++,
                                            this.m_imgIndex >=
                                              this.m_imgs.length &&
                                              (this.m_imgIndex = 0),
                                            (u = this.m_imgs[this.m_imgIndex]))
                                          : (u =
                                              this.m_imgs[
                                                Math.floor(
                                                  Math.random() *
                                                    this.m_imgs.length
                                                )
                                              ]),
                                        (this.m_stringSprite.spriteFrame = u),
                                        (c = K.times(
                                          this.m_stringSprite.spriteFrame.rect
                                            .width + this.m_tailLeftSpace,
                                          this.m_scale
                                        )),
                                        (this.m_stringSprite.node.active = !0),
                                        !(c > this.m_viewWidth))
                                      ) {
                                        t.next = 39;
                                        break;
                                      }
                                      return (
                                        (this.m_stringSprite.node.position = n(
                                          0,
                                          0
                                        )),
                                        (t.next = 32),
                                        X.Wait(this, this.m_moveDelayTime)
                                      );
                                    case 32:
                                      return (
                                        (l = c + this.m_viewWidth),
                                        (m = K.divide(l, this.m_moveSpeed)),
                                        w(this.m_stringSprite.node)
                                          .to(m, { position: n(-c, 0) })
                                          .start(),
                                        (t.next = 37),
                                        X.Wait(this, m)
                                      );
                                    case 37:
                                      t.next = 43;
                                      break;
                                    case 39:
                                      return (
                                        (h = K.minus(this.m_viewWidth, c)),
                                        (this.m_stringSprite.node.position = n(
                                          K.divide(h, 2),
                                          0
                                        )),
                                        (t.next = 43),
                                        X.Wait(this, this.m_waitTime)
                                      );
                                    case 43:
                                      this.m_stringSprite.node.active = !1;
                                    case 44:
                                      this.m_isStart = !1;
                                    case 45:
                                    case "end":
                                      return t.stop();
                                  }
                              },
                              t,
                              this
                            );
                          })
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })()),
                      (o.ShowForever = (function () {
                        var t = L(
                          R().mark(function t(e) {
                            return R().wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      void 0 === e && (e = !1);
                                    case 1:
                                      if (this.m_isStop) {
                                        t.next = 9;
                                        break;
                                      }
                                      return (t.next = 4), this.ShowOnce(e);
                                    case 4:
                                      if (
                                        !(
                                          this.m_delayTime &&
                                          this.m_delayTime > 0
                                        )
                                      ) {
                                        t.next = 7;
                                        break;
                                      }
                                      return (
                                        (t.next = 7),
                                        X.Wait(this, this.m_delayTime)
                                      );
                                    case 7:
                                      t.next = 1;
                                      break;
                                    case 9:
                                      this.m_isStop = !1;
                                    case 10:
                                    case "end":
                                      return t.stop();
                                  }
                              },
                              t,
                              this
                            );
                          })
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })()),
                      (o.Stop = function () {
                        this.m_isStop = !0;
                      }),
                      (o.ChangeTimeSetting = function (t, e, n, i, o) {
                        (this.m_moveSpeed = t),
                          (this.m_delayTime = e),
                          (this.m_waitTime = n),
                          (this.m_moveDelayTime = i),
                          (this.m_tailLeftSpace = o);
                      }),
                      e
                    );
                  })(c)).prototype,
                  "m_moveSpeed",
                  [Sn],
                  {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                      return 0;
                    },
                  }
                )),
                (Bn = j(wn.prototype, "m_delayTime", [gn], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return 0;
                  },
                })),
                (In = j(wn.prototype, "m_waitTime", [vn], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return 0;
                  },
                })),
                (An = j(wn.prototype, "m_moveDelayTime", [En], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return 0;
                  },
                })),
                (Nn = j(wn.prototype, "m_tailLeftSpace", [bn], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return 0;
                  },
                })),
                (kn = j(wn.prototype, "m_content", [Cn], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                })),
                (xn = wn))
              );
            e._RF.pop(),
              e._RF.push({}, "eb033pmYDhAjadYFiwbi8gp", "SpineKit", void 0);
            var Wn,
              Hn,
              Jn,
              jn,
              Kn,
              Yn,
              qn,
              Xn,
              Vn,
              Qn = t(
                "s",
                (function () {
                  function t() {}
                  return (
                    (t.ForceCancel = function (t, e) {
                      var n, i, o;
                      null == (n = this.m_cancelCbs) ||
                        null == (i = (o = n[t])[e]) ||
                        i.call(o);
                    }),
                    (t.PlayAnimation = function (t, e, n, i, o, r) {
                      var a = this;
                      return (
                        void 0 === n && (n = !1),
                        void 0 === i && (i = 0),
                        void 0 === r && (r = !0),
                        new Promise(function (s) {
                          (a.m_cancelCbs[t.name] = {}),
                            (a.m_cancelCbs[t.name][e] = function () {
                              s(!0);
                            });
                          var u = !0,
                            c = t.getState();
                          if (c) {
                            var l = c.expandToIndex(i);
                            if (l) {
                              var m = l.animation.name + "." + e;
                              u = void 0 === c.data.animationToMixTime[m];
                            }
                          }
                          u && (t.clearTrack(i), r && t.setToSetupPose());
                          var h = t.setAnimation(i, e, n);
                          h
                            ? (t.setTrackEventListener(h, function (t, e) {
                                h &&
                                  h.animation.name == t.animation.name &&
                                  (null == o || o(e.data.name));
                              }),
                              t.setTrackCompleteListener(h, function (n) {
                                h &&
                                  h.animation.name == n.animation.name &&
                                  (t.setTrackCompleteListener(
                                    h,
                                    function () {}
                                  ),
                                  t.setTrackInterruptListener(
                                    h,
                                    function () {}
                                  ),
                                  a.m_cancelCbs[t.name] &&
                                    a.m_cancelCbs[t.name][e] &&
                                    (a.m_cancelCbs[t.name][e] = null),
                                  s(!1));
                              }),
                              t.setTrackInterruptListener(h, function (n) {
                                h &&
                                  h.animation.name == n.animation.name &&
                                  (t.setTrackCompleteListener(
                                    h,
                                    function () {}
                                  ),
                                  t.setTrackInterruptListener(
                                    h,
                                    function () {}
                                  ),
                                  a.m_cancelCbs[t.name] &&
                                    a.m_cancelCbs[t.name][e] &&
                                    (a.m_cancelCbs[t.name][e] = null),
                                  s(!0));
                              }))
                            : (t.setCompleteListener(function () {
                                t.setCompleteListener(null),
                                  t.setInterruptListener(null),
                                  a.m_cancelCbs[t.name] &&
                                    a.m_cancelCbs[t.name][e] &&
                                    (a.m_cancelCbs[t.name][e] = null),
                                  s(!1);
                              }),
                              t.setInterruptListener(function () {
                                t.setCompleteListener(null),
                                  t.setInterruptListener(null),
                                  a.m_cancelCbs[t.name] &&
                                    a.m_cancelCbs[t.name][e] &&
                                    (a.m_cancelCbs[t.name][e] = null),
                                  s(!0);
                              }));
                        })
                      );
                    }),
                    t
                  );
                })()
              );
            (Qn.m_cancelCbs = {}),
              e._RF.pop(),
              e._RF.push(
                {},
                "93417uqlh9Fm6TH2poz4GO4",
                "NearWinEffectComponent",
                void 0
              );
            var Zn,
              $n,
              ti,
              ei,
              ni,
              ii,
              oi,
              ri,
              ai,
              si,
              ui,
              ci,
              li,
              mi,
              hi,
              pi,
              _i,
              di,
              fi,
              yi,
              Si,
              gi,
              vi,
              Ei,
              bi,
              Ci,
              xi,
              wi,
              Ti,
              Bi,
              Ii,
              Ai,
              Ni,
              ki,
              Oi,
              Pi,
              Ri,
              Fi,
              Li = "FadeIn",
              Mi = "FadeOut",
              Di = "NearWin",
              Gi = r.ccclass,
              zi = r.property;
            (Wn = Gi("NearWinEffectComponent")),
              (Hn = zi({ type: Number, tooltip: "淡入時間" })),
              (Jn = zi({ type: Number, tooltip: "淡出時間" })),
              (jn = zi({ type: I, tooltip: "是否使用spine動畫" })),
              Wn(
                ((qn = j(
                  (Yn = (function (t) {
                    function e() {
                      for (
                        var e, n = arguments.length, i = new Array(n), o = 0;
                        o < n;
                        o++
                      )
                        i[o] = arguments[o];
                      return (
                        J(
                          (e = t.call.apply(t, [this].concat(i)) || this),
                          "m_fadeInTime",
                          qn,
                          U(e)
                        ),
                        J(e, "m_fadeOutTime", Xn, U(e)),
                        J(e, "m_isPlaySpine", Vn, U(e)),
                        (e.m_cancelCb = null),
                        (e.m_spine = null),
                        e
                      );
                    }
                    G(e, t);
                    var n = e.prototype;
                    return (
                      (n.start = function () {
                        this.m_spine || (this.node.active = !1);
                      }),
                      (n.FadeIn = (function () {
                        var t = L(
                          R().mark(function t(e) {
                            var n,
                              i = this;
                            return R().wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      if (
                                        (this.CheckSpine(),
                                        (this.node.active = !0),
                                        !this.m_isPlaySpine)
                                      ) {
                                        t.next = 9;
                                        break;
                                      }
                                      return (
                                        (t.next = 5),
                                        Qn.PlayAnimation(this.m_spine, Li)
                                      );
                                    case 5:
                                      t.sent ||
                                        Qn.PlayAnimation(this.m_spine, Di, !0),
                                        (t.next = 16);
                                      break;
                                    case 9:
                                      return (
                                        A.stopAllByTarget(this.m_spine.color),
                                        null == (n = this.m_cancelCb) ||
                                          n.call(this),
                                        (this.node.active = !0),
                                        (this.m_spine.color = new N(
                                          this.m_spine.color.r,
                                          this.m_spine.color.g,
                                          this.m_spine.color.b,
                                          0
                                        )),
                                        null == e || e(),
                                        (t.next = 16),
                                        new Promise(function (t) {
                                          (i.m_cancelCb = function () {
                                            t();
                                          }),
                                            w(i.m_spine.color)
                                              .to(i.m_fadeInTime, { a: 255 })
                                              .call(function () {
                                                t(), (i.m_cancelCb = null);
                                              })
                                              .start();
                                        })
                                      );
                                    case 16:
                                    case "end":
                                      return t.stop();
                                  }
                              },
                              t,
                              this
                            );
                          })
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })()),
                      (n.FadeOut = (function () {
                        var t = L(
                          R().mark(function t() {
                            var e,
                              n,
                              i = this;
                            return R().wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      if (
                                        (this.CheckSpine(), !this.m_isPlaySpine)
                                      ) {
                                        t.next = 12;
                                        break;
                                      }
                                      if (this.node.active) {
                                        t.next = 4;
                                        break;
                                      }
                                      return t.abrupt("return", !0);
                                    case 4:
                                      return (
                                        this.CheckSpine(),
                                        (t.next = 7),
                                        Qn.PlayAnimation(this.m_spine, Mi)
                                      );
                                    case 7:
                                      return (
                                        (e = t.sent) || (this.node.active = !1),
                                        t.abrupt("return", !e)
                                      );
                                    case 12:
                                      if (!(this.m_spine.color.a <= 0)) {
                                        t.next = 14;
                                        break;
                                      }
                                      return t.abrupt("return", !1);
                                    case 14:
                                      return (
                                        A.stopAllByTarget(this.m_spine.color),
                                        null == (n = this.m_cancelCb) ||
                                          n.call(this),
                                        (t.next = 18),
                                        new Promise(function (t) {
                                          (i.m_cancelCb = function () {
                                            t(!1);
                                          }),
                                            w(i.m_spine.color)
                                              .to(i.m_fadeOutTime, { a: 0 })
                                              .call(function () {
                                                t(!0),
                                                  (i.m_cancelCb = null),
                                                  (i.node.active = !1);
                                              })
                                              .start();
                                        })
                                      );
                                    case 18:
                                    case "end":
                                      return t.stop();
                                  }
                              },
                              t,
                              this
                            );
                          })
                        );
                        return function () {
                          return t.apply(this, arguments);
                        };
                      })()),
                      (n.CheckSpine = function () {
                        this.m_spine ||
                          ((this.m_spine = this.node.getComponent(a.Skeleton)),
                          this.m_isPlaySpine &&
                            this.m_spine.setMix(Li, Mi, 0.05));
                      }),
                      e
                    );
                  })(c)).prototype,
                  "m_fadeInTime",
                  [Hn],
                  {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                      return 0.1;
                    },
                  }
                )),
                (Xn = j(Yn.prototype, "m_fadeOutTime", [Jn], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return 0.2;
                  },
                })),
                (Vn = j(Yn.prototype, "m_isPlaySpine", [jn], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return !1;
                  },
                })),
                (Kn = Yn))
              );
            e._RF.pop(),
              e._RF.push(
                {},
                "02e880GcB9Jw7QDr8UUWxEV",
                "ShakeComponent",
                void 0
              );
            var Ui,
              Wi = r.ccclass,
              Hi = r.property,
              Ji = r.executeInEditMode,
              ji = r.help,
              Ki = [
                { name: "backIn", desc: "回退:緩入" },
                { name: "backInOut", desc: "回退:緩入緩出" },
                { name: "backOut", desc: "回退:緩出" },
                { name: "backOutIn", desc: "回退:緩出緩入" },
                { name: "bounceIn", desc: "彈跳:緩入" },
                { name: "bounceInOut", desc: "彈跳:緩入緩出" },
                { name: "bounceOut", desc: "彈跳:緩出" },
                { name: "bounceOutIn", desc: "彈跳:緩出緩入" },
                { name: "circIn", desc: "迴圈:緩入 由慢到快" },
                { name: "circInOut", desc: "迴圈:緩入緩出 由慢到很快再到慢" },
                { name: "circOut", desc: "迴圈:緩出 由快到慢" },
                { name: "circOutIn", desc: "迴圈:緩出緩入 由慢到很快再到慢" },
                { name: "constant", desc: "constant" },
                { name: "cubicIn", desc: "立方曲線緩入 由慢到快" },
                { name: "cubicInOut", desc: "立方曲線緩入緩出 由慢到快再到慢" },
                { name: "cubicOut", desc: "立方曲線緩出 由快到慢" },
                { name: "cubicOutIn", desc: "立方曲線緩出緩入 由慢到快再到慢" },
                { name: "elasticIn", desc: "彈簧回震:緩入" },
                { name: "elasticInOut", desc: "彈簧回震:緩入緩出" },
                { name: "elasticOut", desc: "彈簧回震:緩出" },
                { name: "elasticOutIn", desc: "彈簧回震:緩出緩入" },
                { name: "expoIn", desc: "指數曲線緩入 由慢到快" },
                {
                  name: "expoInOut",
                  desc: "指數曲線緩入和緩出 由慢到很快再到慢",
                },
                { name: "expoOut", desc: "指數曲線緩出 由快到慢" },
                {
                  name: "expoOutIn",
                  desc: "指數曲線緩出緩入和 由慢到很快再到慢",
                },
                { name: "fade", desc: "漸褪效果" },
                { name: "linear", desc: "線性" },
                { name: "quadIn", desc: "平方曲線緩入 由慢到快" },
                { name: "quadInOut", desc: "平方曲線緩入緩出 由慢到快再到慢" },
                { name: "quadOut", desc: "平方曲線緩出 由快到慢" },
                { name: "quadOutIn", desc: "平方曲線緩出緩入 由慢到快再到慢" },
                { name: "quartIn", desc: "四次方曲線緩入 由慢到快" },
                {
                  name: "quartInOut",
                  desc: "四次方曲線緩入緩出 由慢到快再到慢",
                },
                { name: "quartOut", desc: "四次方曲線緩出 由快到慢" },
                {
                  name: "quartOutIn",
                  desc: "四次方曲線緩出緩入 由慢到快再到慢",
                },
                { name: "quintIn", desc: "五次方曲線緩入 由慢到快" },
                {
                  name: "quintInOut",
                  desc: "五次方曲線緩入緩出 由慢到快再到慢",
                },
                { name: "quintOut", desc: "五次方曲線緩出 由慢到快" },
                {
                  name: "quintOutIn",
                  desc: "五次方曲線緩出緩入 由慢到快再到慢",
                },
                { name: "sineIn", desc: "正弦曲線緩入 由慢到快" },
                { name: "sineInOut", desc: "正弦曲線緩入緩出 由慢到快再到慢" },
                { name: "sineOut", desc: "正弦曲線緩出 由快到慢" },
                { name: "sineOutIn", desc: "正弦曲線緩出緩入 由慢到快再到慢" },
                { name: "smooth", desc: "平滑效果" },
              ],
              Yi = S({}),
              qi = S({});
            !(function (t) {
              (t[(t.None = 0)] = "None"),
                (t[(t.FadeIn = 1)] = "FadeIn"),
                (t[(t.FadeOut = 2)] = "FadeOut");
            })(Ui || (Ui = {}));
            var Xi,
              Vi = S({ None: Ui.None, FadeIn: Ui.FadeIn, FadeOut: Ui.FadeOut }),
              Qi = function (t) {
                var e,
                  n = 0;
                if (0 === t.length) return n;
                for (e = 0; e < t.length; e++)
                  (n = (n << 5) - n + t.charCodeAt(e)), (n |= 0);
                return n;
              },
              Zi =
                ((Zn = Wi("_TweenInfo")),
                ($n = Hi({ visible: !1, tooltip: "Easing" })),
                (ti = Hi({ type: Yi, visible: !1 })),
                (ei = Hi({ visible: !0, displayName: "緩動效果", type: Yi })),
                (ni = Hi({ type: Vi, visible: !1 })),
                (ii = Hi({ visible: !0, displayName: "fade type", type: Vi })),
                (oi = Hi({ min: 0, visible: !0, displayName: "時間" })),
                Zn(
                  ((si = j(
                    (ai = (function () {
                      function t() {
                        J(this, "m_EasingName", si, this),
                          J(this, "__easingIdx", ui, this),
                          J(this, "__fadeType", ci, this),
                          (this._EasingEnumList = []),
                          J(this, "duration", li, this);
                      }
                      return (
                        D(t, [
                          {
                            key: "_easingIdx",
                            get: function () {},
                            set: function (t) {},
                          },
                          {
                            key: "_fadeType",
                            get: function () {
                              return this.__fadeType;
                            },
                            set: function (t) {},
                          },
                        ]),
                        t
                      );
                    })()).prototype,
                    "m_EasingName",
                    [$n],
                    {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      initializer: function () {
                        return "";
                      },
                    }
                  )),
                  (ui = j(ai.prototype, "__easingIdx", [ti], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                      return null;
                    },
                  })),
                  j(
                    ai.prototype,
                    "_easingIdx",
                    [ei],
                    Object.getOwnPropertyDescriptor(ai.prototype, "_easingIdx"),
                    ai.prototype
                  ),
                  (ci = j(ai.prototype, "__fadeType", [ni], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                      return null;
                    },
                  })),
                  j(
                    ai.prototype,
                    "_fadeType",
                    [ii],
                    Object.getOwnPropertyDescriptor(ai.prototype, "_fadeType"),
                    ai.prototype
                  ),
                  (li = j(ai.prototype, "duration", [oi], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                      return 1;
                    },
                  })),
                  (ri = ai))
                ) || ri);
            (mi = Wi("Shake")),
              (hi = ji(
                "https://docs.cocos.com/creator/3.6/manual/zh/tween/tween-function.html#%E5%86%85%E7%BD%AE%E7%BC%93%E5%8A%A8%E5%87%BD%E6%95%B0"
              )),
              (pi = Hi({
                visible: !1,
                displayName: "正負交替",
                tooltip: "重複次數>1時, 正負交替",
              })),
              (_i = Hi({
                type: k,
                displayName: "預先定義shake.json",
                visible: function () {
                  return (
                    this.shakeJson &&
                      this._updateShakeEnum(this.shakeJson.json.shakelist),
                    !0
                  );
                },
              })),
              (di = Hi({ visible: !0, tooltip: "自定義的shake name" })),
              (fi = Hi({ type: qi, visible: !1 })),
              (yi = Hi({
                visible: !0,
                displayName: "儲存到預先定義.json",
                tooltip: "若Shakename不為:custom,才會儲存",
              })),
              (Si = Hi({
                visible: !0,
                displayName: "預先定義",
                tooltip: "切換後會以預先定義的數值直接覆蓋所有設定值",
                type: qi,
              })),
              (gi = Hi({ readonly: !0, displayName: "總震動時間" })),
              (vi = Hi({ visible: !0, displayName: "振幅" })),
              (Ei = Hi({
                min: 1,
                step: 1,
                visible: !0,
                displayName: "震動頻率/秒",
              })),
              (bi = Hi({
                step: 1,
                visible: !0,
                displayName: "振幅x/y/z權重:%",
              })),
              (Ci = Hi({ visible: !1, type: [Zi] })),
              (xi = Hi({
                type: [Zi],
                tooltip: "輸入更改 緩動效果 數量",
                displayName: "緩動效果",
              })),
              mi(
                (wi =
                  Ji(
                    (wi =
                      hi(
                        ((Bi = j(
                          (Ti = (function (t) {
                            function e() {
                              for (
                                var e,
                                  n = arguments.length,
                                  i = new Array(n),
                                  o = 0;
                                o < n;
                                o++
                              )
                                i[o] = arguments[o];
                              return (
                                J(
                                  (e =
                                    t.call.apply(t, [this].concat(i)) || this),
                                  "alternately",
                                  Bi,
                                  U(e)
                                ),
                                J(e, "shakeJson", Ii, U(e)),
                                J(e, "shakename", Ai, U(e)),
                                J(e, "__ShakeIdx", Ni, U(e)),
                                J(e, "Duration", ki, U(e)),
                                J(e, "magnitude", Oi, U(e)),
                                J(e, "frequency", Pi, U(e)),
                                J(e, "weight", Ri, U(e)),
                                J(e, "_TweenList", Fi, U(e)),
                                (e._EasingEnumList = []),
                                (e._ShakeEnumList = []),
                                (e.originPos = new E()),
                                (e._TestShakeCnt = 0),
                                e
                              );
                            }
                            G(e, t);
                            var n = e.prototype;
                            return (
                              (n.updateDuration = function () {
                                for (
                                  var t = 0, e = 0;
                                  e < this._TweenList.length;
                                  e++
                                )
                                  t += this._TweenList[e].duration;
                                this.Duration = t;
                              }),
                              (n.setTweenJson = function (t) {
                                var e = this.shakeJson.json.shakelist;
                                if ("custom" != t) e[t];
                                else
                                  console.warn(
                                    "custom 不會儲存到預先定義.json"
                                  );
                              }),
                              (n.getTweenJson = function () {
                                for (
                                  var t = {
                                      magnitude: this.magnitude,
                                      frequency: this.frequency,
                                      weight: {
                                        x: this.weight.x,
                                        y: this.weight.y,
                                        z: this.weight.z,
                                      },
                                    },
                                    e = [],
                                    n = 0;
                                  n < this._TweenList.length;
                                  n++
                                ) {
                                  var i = this._TweenList[n];
                                  e.push({
                                    m_EasingName: i.m_EasingName,
                                    _easingIdx: i._easingIdx,
                                    _fadeType: i._fadeType,
                                    duration: i.duration,
                                  });
                                }
                                return (t._TweenList = e), t;
                              }),
                              (n.getJsonData = (function () {
                                var t = L(
                                  R().mark(function t() {
                                    var e, n, i;
                                    return R().wrap(
                                      function (t) {
                                        for (;;)
                                          switch ((t.prev = t.next)) {
                                            case 0:
                                              if (
                                                ((e = {}),
                                                this.shakeJson &&
                                                  this.shakeJson.json &&
                                                  (e = this.shakeJson.json),
                                                "custom" == this.shakename)
                                              ) {
                                                t.next = 19;
                                                break;
                                              }
                                              ((n = e.shakelist)[
                                                this.shakename
                                              ] = this.getTweenJson()),
                                                (e.shakelist = n),
                                                (t.next = 17);
                                              break;
                                            case 11:
                                              (i = t.sent),
                                                console.log(
                                                  "path",
                                                  i,
                                                  "outJson",
                                                  JSON.stringify(e, null, 2)
                                                ),
                                                undefined.writeFileSync(
                                                  i,
                                                  JSON.stringify(e, null, 2),
                                                  "utf-8"
                                                ),
                                                (t.next = 17);
                                              break;
                                            case 16:
                                              console.log(
                                                "請先指定 '預先定義shake.json'"
                                              );
                                            case 17:
                                              t.next = 20;
                                              break;
                                            case 19:
                                              console.warn(
                                                "custom 不會儲存到預先定義.json"
                                              );
                                            case 20:
                                              return t.abrupt("return", e);
                                            case 21:
                                            case "end":
                                              return t.stop();
                                          }
                                      },
                                      t,
                                      this
                                    );
                                  })
                                );
                                return function () {
                                  return t.apply(this, arguments);
                                };
                              })()),
                              (n.onLoad = function () {
                                this.shakeJson && this.shakeJson.json
                                  ? (this._updateShakeEnum(
                                      this.shakeJson.json.shakelist
                                    ),
                                    this.shakeJson.json)
                                  : this.getJsonData();
                                for (var t = [], e = 0; e < Ki.length; ++e) {
                                  var n = Ki[e];
                                  t.push({
                                    name: n.desc,
                                    easingName: n.name,
                                    value: Qi(n.name),
                                  });
                                }
                                t.sort(function (t, e) {
                                  return t.name < e.name
                                    ? -1
                                    : t.name > e.name
                                    ? 1
                                    : 0;
                                }),
                                  (this._EasingEnumList = t),
                                  this._updateEasingEnum(),
                                  this.updateDuration();
                              }),
                              (n._updateShakeEnum = function (t) {
                                var e = [];
                                t &&
                                  (Object.keys(t).forEach(function (t) {
                                    e.push({ name: t, value: Qi(t) });
                                  }),
                                  e.sort(function (t, e) {
                                    return t.name < e.name
                                      ? -1
                                      : t.name > e.name
                                      ? 1
                                      : 0;
                                  })),
                                  (this._ShakeEnumList = e);
                              }),
                              (n._updateEasingEnum = function () {
                                for (var t = 0; t < this._TweenList.length; t++)
                                  this._TweenList[t]._EasingEnumList =
                                    this._EasingEnumList;
                              }),
                              (n.start = function () {}),
                              (n.fade = function (t, e, n, i, o, r, a) {
                                this.originPos = this.node.getPosition();
                                for (
                                  var s = 1 / n, u = e / s, c = 1;
                                  c <= u;
                                  c++
                                ) {
                                  var l = i;
                                  o == Ui.FadeIn
                                    ? (l *= c / u)
                                    : o == Ui.FadeOut && (l *= (u - c) / u);
                                  var m = this.originPos.clone(),
                                    h = new E(
                                      O.random() - 0.5,
                                      O.random() - 0.5,
                                      O.random() - 0.5
                                    ),
                                    p = new E(
                                      (2 * l * r.x) / 100,
                                      (2 * l * r.y) / 100,
                                      (2 * l * r.z) / 100
                                    );
                                  (p = p.multiply(h)),
                                    (m = m.add(p)),
                                    (t = t.to(
                                      s,
                                      { position: m },
                                      {
                                        easing: a,
                                        onStart: function (t) {},
                                        onUpdate: function (t, e) {},
                                        onComplete: function (t) {},
                                      }
                                    ));
                                }
                                return t;
                              }),
                              (n.shake = function () {
                                this._shake(
                                  this._TweenList,
                                  this.frequency,
                                  this.magnitude,
                                  this.weight
                                );
                              }),
                              (n.testShake = function () {
                                if (
                                  this.shakeJson &&
                                  this.shakeJson.json.shakelist
                                ) {
                                  var t = this.shakeJson.json.shakelist;
                                  if (t) {
                                    var e = Object.keys(t);
                                    e.push("ErrorTest");
                                    var n = e[this._TestShakeCnt++ % e.length];
                                    this.ShakeWithName(n);
                                  }
                                } else
                                  console.log(
                                    "ShakeWithName shakeJson not assign!"
                                  );
                              }),
                              (n.ShakeWithName = function (t) {
                                if (
                                  this.shakeJson &&
                                  this.shakeJson.json.shakelist
                                ) {
                                  var e = this.shakeJson.json.shakelist;
                                  if (!e[t])
                                    return void console.log(
                                      "ShakeWithName shakename:" +
                                        t +
                                        " not found!"
                                    );
                                  var n = e[t],
                                    i = n._TweenList,
                                    o = n.weight;
                                  this._shake(
                                    i,
                                    n.frequency,
                                    n.magnitude,
                                    new E(o.x, o.y, o.z)
                                  );
                                } else
                                  console.log(
                                    "ShakeWithName shakeJson not assign!"
                                  );
                              }),
                              (n._shake = function (t, e, n, i) {
                                this.originPos = this.node.getPosition();
                                for (
                                  var o = w(this.node), r = 0;
                                  r < t.length;
                                  r++
                                ) {
                                  var a = t[r];
                                  o = this.fade(
                                    o,
                                    a.duration,
                                    e,
                                    n,
                                    a._fadeType,
                                    i,
                                    a.m_EasingName
                                  );
                                }
                                (o = o.to(0, {
                                  position: this.originPos,
                                })).start();
                              }),
                              D(e, [
                                {
                                  key: "saveshake",
                                  get: function () {
                                    return !1;
                                  },
                                  set: function (t) {
                                    this.getJsonData();
                                  },
                                },
                                {
                                  key: "_ShakeIdx",
                                  get: function () {
                                    return this.__ShakeIdx;
                                  },
                                  set: function (t) {},
                                },
                                {
                                  key: "TweenList",
                                  get: function () {
                                    return this._TweenList;
                                  },
                                  set: function (t) {
                                    (this._TweenList = t),
                                      this.updateDuration(),
                                      this._updateEasingEnum();
                                  },
                                },
                              ]),
                              e
                            );
                          })(c)).prototype,
                          "alternately",
                          [pi],
                          {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                              return !0;
                            },
                          }
                        )),
                        (Ii = j(Ti.prototype, "shakeJson", [_i], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return null;
                          },
                        })),
                        (Ai = j(Ti.prototype, "shakename", [di], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return "custom";
                          },
                        })),
                        (Ni = j(Ti.prototype, "__ShakeIdx", [fi], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return null;
                          },
                        })),
                        j(
                          Ti.prototype,
                          "saveshake",
                          [yi],
                          Object.getOwnPropertyDescriptor(
                            Ti.prototype,
                            "saveshake"
                          ),
                          Ti.prototype
                        ),
                        j(
                          Ti.prototype,
                          "_ShakeIdx",
                          [Si],
                          Object.getOwnPropertyDescriptor(
                            Ti.prototype,
                            "_ShakeIdx"
                          ),
                          Ti.prototype
                        ),
                        (ki = j(Ti.prototype, "Duration", [gi], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return 0;
                          },
                        })),
                        (Oi = j(Ti.prototype, "magnitude", [vi], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return 20;
                          },
                        })),
                        (Pi = j(Ti.prototype, "frequency", [Ei], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return 1;
                          },
                        })),
                        (Ri = j(Ti.prototype, "weight", [bi], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return new E(0, 0, 0);
                          },
                        })),
                        (Fi = j(Ti.prototype, "_TweenList", [Ci], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return [];
                          },
                        })),
                        j(
                          Ti.prototype,
                          "TweenList",
                          [xi],
                          Object.getOwnPropertyDescriptor(
                            Ti.prototype,
                            "TweenList"
                          ),
                          Ti.prototype
                        ),
                        (wi = Ti))
                      ) || wi)
                  ) || wi)
              );
            e._RF.pop(),
              e._RF.push(
                {},
                "b57cahiKlxMZL7TyWc1iHaf",
                "SloganComponent",
                void 0
              );
            var $i = r.ccclass,
              to = 0,
              eo = 1;
            $i(
              (Xi = (function (t) {
                function e() {
                  for (
                    var n, i = arguments.length, o = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    o[r] = arguments[r];
                  return (
                    ((n =
                      t.call.apply(t, [this].concat(o)) ||
                      this).m_promotePictures = [[], []]),
                    (n.m_promoteAni = null),
                    (n.m_promotePic = void 0),
                    (n.m_promoteLock = !1),
                    (n.m_promoteIdx = -1),
                    (n.m_adNums = 0),
                    (n.m_isLandscape = void 0),
                    (n.m_curAniName = ""),
                    (n.m_changePictureCallback = void 0),
                    (n.m_revertPictureCallback = void 0),
                    (n.m_cycle = [
                      [8, 12],
                      [8, 8],
                    ]),
                    (n.m_promoting = !1),
                    (n.m_animationName = {
                      start: "AdSlogan_Start",
                      loop: "AdSlogan_Loop",
                      end: "AdSlogan_End",
                    }),
                    (n.ChangePic = function () {
                      var t, i;
                      if (!n.m_promoteLock) {
                        (n.m_promoting = !0),
                          n.m_changePictureCallback &&
                            n.m_changePictureCallback(),
                          n.m_promoteIdx++,
                          n.m_promoteIdx >= n.m_adNums && (n.m_promoteIdx = 0),
                          (n.m_promotePic.spriteFrame =
                            n.m_promotePictures[n.m_isLandscape ? to : eo][
                              n.m_promoteIdx
                            ]);
                        var o = kt
                          .GetGameAtlas()
                          .getSpriteFrame(
                            null == (t = n.m_promotePic) ||
                              null == (i = t.spriteFrame)
                              ? void 0
                              : i.name
                          );
                        o && (n.m_promotePic.spriteFrame = o),
                          n.PlayAni(n.m_animationName.start),
                          n.m_promoteAni.once(
                            f.EventType.FINISHED,
                            function () {
                              n.m_promoteLock ||
                                n.PlayAni(n.m_animationName.loop);
                            }
                          ),
                          n.scheduleOnce(
                            n.RevertPic,
                            n.m_cycle[1][0] == n.m_cycle[1][1]
                              ? n.m_cycle[1][0]
                              : e.GetRandomInt(
                                  n.m_cycle[1][0],
                                  n.m_cycle[1][1] + 1
                                )
                          );
                      }
                    }),
                    (n.RevertPic = function () {
                      n.m_revertPictureCallback && n.m_revertPictureCallback(),
                        n.PlayAni(n.m_animationName.end),
                        n.m_promoteAni.once(f.EventType.FINISHED, function () {
                          n.m_curAniName = "";
                        }),
                        (n.m_promoting = !1),
                        n.scheduleOnce(
                          n.ChangePic,
                          n.m_cycle[0][0] == n.m_cycle[0][1]
                            ? n.m_cycle[0][0]
                            : e.GetRandomInt(
                                n.m_cycle[0][0],
                                n.m_cycle[0][1] + 1
                              )
                        );
                    }),
                    n
                  );
                }
                G(e, t),
                  (e.GetRandomInt = function (t, e) {
                    return Math.floor(Math.random() * (e - t) + t);
                  });
                var n = e.prototype;
                return (
                  (n.Init = function (t, e, n, i) {
                    void 0 === i && (i = Astarte.Define.GameBundle);
                    var o = this.LoadSlogans(t[0], t[1], i);
                    return (this.m_promoteAni = e), (this.m_promotePic = n), o;
                  }),
                  (n.LoadSlogans = function (t, e, n) {
                    var i = this,
                      o = t.length;
                    this.m_adNums = o;
                    for (
                      var r = [],
                        a = function (o) {
                          r.push(
                            new Promise(function (e) {
                              n.load(t[o], P, function (t, n) {
                                t || (i.m_promotePictures[to][o] = n), e();
                              });
                            })
                          ),
                            e &&
                              e[o] &&
                              r.push(
                                new Promise(function (t) {
                                  n.load(e[o], P, function (e, n) {
                                    e || (i.m_promotePictures[eo][o] = n), t();
                                  });
                                })
                              );
                        },
                        s = 0;
                      s < o;
                      s++
                    )
                      a(s);
                    return Promise.all(r).then(function () {
                      for (var t = 0; t < o; t++)
                        i.m_promotePictures[eo][t] ||
                          (i.m_promotePictures[eo][t] =
                            i.m_promotePictures[to][t]);
                      m("loadSlogans", i.m_promotePictures);
                    });
                  }),
                  (n.PlayAni = function (t) {
                    this.m_promoteAni &&
                      (this.m_promoteAni.play(t), (this.m_curAniName = t));
                  }),
                  (n.StartPromote = function () {
                    (this.m_promoteLock = !1),
                      this.scheduleOnce(
                        this.ChangePic,
                        this.m_cycle[0][0] == this.m_cycle[0][1]
                          ? this.m_cycle[0][0]
                          : e.GetRandomInt(
                              this.m_cycle[0][0],
                              this.m_cycle[0][1] + 1
                            )
                      );
                  }),
                  (n.StopPromote = function () {
                    (this.m_promoteLock = !0),
                      this.unschedule(this.RevertPic),
                      this.unschedule(this.ChangePic),
                      this.EndPromote();
                  }),
                  (n.EndPromote = function () {
                    var t = this;
                    this.m_promoting &&
                      ((this.m_promoting = !1),
                      this.PlayAni(this.m_animationName.end),
                      this.m_promoteAni.once(f.EventType.FINISHED, function () {
                        t.m_curAniName = "";
                      }));
                  }),
                  (n.SetAnimationName = function (t) {
                    this.m_animationName = t;
                  }),
                  (n.SetPromoteCycle = function (t) {
                    this.m_cycle = t;
                  }),
                  (n.GetAniState = function () {
                    return this.m_promoteAni.getState(this.m_curAniName);
                  }),
                  (n.OnRotation = function (t) {
                    var e, n;
                    if (this.m_isLandscape != t) {
                      (this.m_isLandscape = t),
                        (this.m_promotePic.spriteFrame =
                          this.m_promotePictures[this.m_isLandscape ? to : eo][
                            this.m_promoteIdx >= this.m_adNums
                              ? (this.m_promoteIdx = 0)
                              : this.m_promoteIdx
                          ]);
                      var i = kt
                        .GetGameAtlas()
                        .getSpriteFrame(
                          null == (e = this.m_promotePic) ||
                            null == (n = e.spriteFrame)
                            ? void 0
                            : n.name
                        );
                      i && (this.m_promotePic.spriteFrame = i);
                    }
                  }),
                  D(e, [
                    {
                      key: "CurAniName",
                      get: function () {
                        return this.m_curAniName;
                      },
                    },
                    {
                      key: "ChangePictureCallback",
                      set: function (t) {
                        this.m_changePictureCallback = t;
                      },
                    },
                    {
                      key: "RevertPictureCallback",
                      set: function (t) {
                        this.m_revertPictureCallback = t;
                      },
                    },
                    {
                      key: "Promoting",
                      get: function () {
                        return this.m_promoting;
                      },
                    },
                  ]),
                  e
                );
              })(c))
            );
            e._RF.pop(),
              e._RF.push({}, "c6e0eKOKjtNwJBDq/hJOYgn", "index", void 0),
              e._RF.pop(),
              e._RF.push({}, "f34139liEtOX7eeljN8Cz8w", "index", void 0),
              e._RF.pop();
          },
        };
      });
    },
  };
});
