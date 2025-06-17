System.register(
  "chunks:///_virtual/AppManager.ts",
  ["cc", "./index4.ts"],
  function (e) {
    "use strict";
    var a, n;
    return {
      setters: [
        function (e) {
          a = e.cclegacy;
        },
        function (e) {
          n = e.Astarte;
        },
      ],
      execute: function () {
        e({
          UpdateAppManager: function () {
            e("appManager", n.AppManager);
          },
          appManager: void 0,
        }),
          a._RF.push({}, "2c465urF+5E6a8SAy0Y1679", "AppManager", void 0);
        e("Lobby2Game", { GameClose: "onLobbyCloseSubGame" });
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/AutoShowManager.ts",
  ["cc", "./index4.ts"],
  function (t) {
    "use strict";
    var o, e;
    return {
      setters: [
        function (t) {
          o = t.cclegacy;
        },
        function (t) {
          e = t.Astarte;
        },
      ],
      execute: function () {
        var u;
        t({
          AutoShowOrder: void 0,
          UpdateAutoShow: function () {
            t("autoShowManager", e.AutoShow);
          },
          autoShowManager: void 0,
        }),
          o._RF.push({}, "c7e3d4LY9dOUokI+wu7YgCQ", "AutoShowManager", void 0),
          (function (t) {
            (t[(t.SKY_BAR = 0)] = "SKY_BAR"),
              (t[(t.PAYTABLE = 1)] = "PAYTABLE"),
              (t[(t.LANDING = 2)] = "LANDING"),
              (t[(t.DISCOUNT = 3)] = "DISCOUNT"),
              (t[(t.EXTRA_BET = 4)] = "EXTRA_BET"),
              (t[(t.ICONBOX = 5)] = "ICONBOX");
          })(u || (u = t("AutoShowOrder", {}))),
          o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BackpackManager.ts",
  ["cc", "./index4.ts"],
  function (a) {
    "use strict";
    var c, t;
    return {
      setters: [
        function (a) {
          c = a.cclegacy;
        },
        function (a) {
          t = a.Astarte;
        },
      ],
      execute: function () {
        a({
          UpdateBackpack: function () {
            a("backpackManager", t.Backpack);
          },
          backpackManager: void 0,
        }),
          c._RF.push({}, "01a4bCeOlRFS4PxU4ftD5wn", "BackpackManager", void 0),
          c._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BigWinComponent.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./index.ts",
    "./Tools.ts",
    "./Define.ts",
  ],
  function (t) {
    "use strict";
    var e, n, i, r, a, s, o, m, h, l, u, c, p, _, S;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (r = t.assertThisInitialized),
            (a = t.createClass),
            (s = t.asyncToGenerator),
            (o = t.regeneratorRuntime);
        },
        function (t) {
          (m = t.cclegacy),
            (h = t._decorator),
            (l = t.sp),
            (u = t.Label),
            (c = t.CCFloat),
            (p = t.Component);
        },
        null,
        function (t) {
          _ = t.tools;
        },
        function (t) {
          S = t.Define;
        },
      ],
      execute: function () {
        var w, d, E, f, b, v, k, x, g, y, L, C, A;
        m._RF.push({}, "77acaFcNgVDULwRQEtO5wYa", "BigWinComponent", void 0);
        var P = t("ExtraAniName", { Start: "Start", Loop: "Loop", End: "End" }),
          B = t("BigWinAnimName", {
            Big: { Start: "BigWin_Start", End: "BigWin_End" },
            Mega: { Start: "MegaWin_Start", End: "MegaWin_End" },
            Super: { Start: "SuperWin_Start", End: "SuperWin_End" },
          }),
          T = h.ccclass,
          W = h.property;
        t(
          "default",
          ((w = W({ type: l.Skeleton, tooltip: "spine" })),
          (d = W({ type: l.Skeleton, tooltip: "遮罩" })),
          (E = W({ type: l.Skeleton, tooltip: "Extra Spine" })),
          (f = W({ type: u, tooltip: "贏分" })),
          (b = W({ type: c, tooltip: "End extra effect delay time" })),
          T(
            (((A = (function (t) {
              function e() {
                for (
                  var e, n = arguments.length, a = new Array(n), s = 0;
                  s < n;
                  s++
                )
                  a[s] = arguments[s];
                return (
                  (e = t.call.apply(t, [this].concat(a)) || this),
                  i(e, "m_spine", x, r(e)),
                  i(e, "m_maskSpine", g, r(e)),
                  i(e, "m_extraSpine", y, r(e)),
                  i(e, "m_winLabel", L, r(e)),
                  i(e, "m_endExtraDelayTime", C, r(e)),
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
              n(e, t);
              var m = e.prototype;
              return (
                (m.update = function (t) {
                  this.m_isShowAward &&
                    ((this.m_showWin += this.m_step * t),
                    this.m_showWin >= this.m_win &&
                      ((this.m_showWin = this.m_win),
                      (this.m_isShowAward = !1)),
                    (this.m_winLabel.string = _.FormatNumberThousands(
                      _.strip(
                        this.m_showValueCb
                          ? this.m_showValueCb(this.m_showWin)
                          : this.m_showWin
                      ),
                      _.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                    )));
                }),
                (m.Init = function (t, e) {
                  (this.m_eventCb = t),
                    (this.m_showValueCb = e),
                    this.m_maskSpine && (this.m_maskSpine.node.active = !1);
                }),
                (m.Show = function (t, n, i) {
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
                      var r = 0, a = i ? e.Level.BIG : this.m_lvl;
                      a <= this.m_lvl;
                      a++
                    ) {
                      var s = "",
                        o = "";
                      switch (a) {
                        case e.Level.BIG:
                          (s = B.Big.Start), (o = B.Big.End);
                          break;
                        case e.Level.MEGA:
                          (s = B.Mega.Start), (o = B.Mega.End);
                          break;
                        case e.Level.SUPER:
                          (s = B.Super.Start), (o = B.Super.End);
                      }
                      if ("" !== s && "" !== o) {
                        var m = this.m_spine.findAnimation(s);
                        m && (r += m.duration);
                      }
                    }
                    (this.m_step = _.divide(this.m_win, r || 5)),
                      (this.m_isShowAward = !0),
                      this.m_maskSpine &&
                        ((this.m_maskSpine.node.active = !0),
                        this.PlayAnimation(this.m_maskSpine, "BigWin_Start")),
                      this.ShowNext();
                  }
                }),
                (m.Stop = function () {
                  this.m_isShowEnd ||
                    (this.m_cancelCb && this.m_cancelCb(), this.ShowEnd());
                }),
                (m.SetSkin = function (t) {
                  this.m_spine.setSkin(t);
                }),
                (m.ShowNext = (function () {
                  var t = s(
                    o().mark(function t() {
                      var n;
                      return o().wrap(
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
                                  this.PlayAnimation(this.m_spine, B.Big.Start)
                                );
                              case 12:
                                return (n = t.sent), t.abrupt("break", 22);
                              case 14:
                                return (
                                  (t.next = 16),
                                  this.PlayAnimation(this.m_spine, B.Mega.Start)
                                );
                              case 16:
                                return (n = t.sent), t.abrupt("break", 22);
                              case 18:
                                return (
                                  (t.next = 20),
                                  this.PlayAnimation(
                                    this.m_spine,
                                    B.Super.Start
                                  )
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
                (m.ShowEnd = (function () {
                  var t = s(
                    o().mark(function t() {
                      var n;
                      return o().wrap(
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
                                    _.FormatNumberThousands(
                                      _.strip(
                                        this.m_showValueCb
                                          ? this.m_showValueCb(this.m_win)
                                          : this.m_win
                                      ),
                                      _.FORMAT_NUMBER_TYPE.PERMANENT_DOT
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
                                return (n = B.Big.End), t.abrupt("break", 16);
                              case 12:
                                return (n = B.Mega.End), t.abrupt("break", 16);
                              case 14:
                                return (n = B.Super.End), t.abrupt("break", 16);
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
                (m.CheckExtraSpineStart = function () {
                  var t = this;
                  this.m_extraSpine &&
                    ((this.m_extraSpine.node.active = !0),
                    this.PlayAnimation(this.m_extraSpine, P.Start).then(
                      function () {
                        t.m_isShowingExtraEnd ||
                          t.PlayAnimation(t.m_extraSpine, P.Loop, !0);
                      }
                    ));
                }),
                (m.CheckExtraSpineEnd = (function () {
                  var t = s(
                    o().mark(function t() {
                      return o().wrap(
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
                                  S.Wait(this, this.m_endExtraDelayTime)
                                );
                              case 5:
                                return (
                                  (t.next = 7),
                                  this.PlayAnimation(this.m_extraSpine, P.End)
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
                (m.PlayAnimation = function (t, e, n, i) {
                  var r = this;
                  return (
                    void 0 === n && (n = !1),
                    void 0 === i && (i = 0),
                    new Promise(function (a) {
                      var s = !1;
                      (r.m_cancelCb = function () {
                        a((s = !0));
                      }),
                        t.clearTrack(i),
                        t.setToSetupPose();
                      var o = t.setAnimation(i, e, n),
                        m = function () {
                          (r.m_cancelCb = null), a(s);
                        };
                      o
                        ? (t.setTrackEventListener(o, function (t, n) {
                            var i = n.data.name,
                              a = n.stringValue;
                            r.m_eventCb && r.m_eventCb(i, a, e);
                          }),
                          t.setTrackCompleteListener(o, function () {
                            t.setTrackCompleteListener(o, function () {}), m();
                          }))
                        : t.setCompleteListener(function () {
                            t.setCompleteListener(null), m();
                          });
                    })
                  );
                }),
                a(e, [
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
            })(p)).Level = { NONE: 0, BIG: 1, MEGA: 2, SUPER: 3 }),
            (x = e((k = A).prototype, "m_spine", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (g = e(k.prototype, "m_maskSpine", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (y = e(k.prototype, "m_extraSpine", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = e(k.prototype, "m_winLabel", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = e(k.prototype, "m_endExtraDelayTime", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 1.5;
              },
            })),
            (v = k))
          ) || v)
        );
        m._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BoneFollow.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var i, t, o, n, l, a, r, s, c, u, h, _, p, m, d;
    return {
      setters: [
        function (e) {
          (i = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (o = e.initializerDefineProperty),
            (n = e.assertThisInitialized);
        },
        function (e) {
          (l = e.cclegacy),
            (a = e._decorator),
            (r = e.Enum),
            (s = e.sp),
            (c = e.Vec2),
            (u = e.isValid),
            (h = e.UITransform),
            (_ = e.v3),
            (p = e.instantiate),
            (m = e.Component),
            (d = e.v2);
        },
      ],
      execute: function () {
        var f,
          b,
          w,
          S,
          y,
          F,
          g,
          v,
          z,
          R,
          C,
          N,
          A,
          L,
          x,
          B,
          P,
          X,
          k,
          Y,
          I,
          D,
          O,
          E,
          M,
          T,
          U,
          W,
          V,
          j,
          q,
          H,
          G,
          J,
          K;
        l._RF.push({}, "18f47v83XtI64h+ISwRgq3A", "BoneFollow", void 0);
        var Q = a.ccclass,
          Z = a.property,
          $ = a.menu,
          ee = { None: 0 },
          ie = r(ee),
          te = 3.1415927,
          oe = te / 180;
        function ne(e, i, t, o, n) {
          var l,
            a = ((l = n), Math.sin(l * oe)),
            r = (function (e) {
              return Math.cos(e * oe);
            })(n);
          return 57.29577866666166 * Math.atan2(r * t + a * o, r * e + a * i);
        }
        e(
          "default",
          ((f = Q("BoneFollow")),
          (b = $("Chiron/Spine/BoneFollow")),
          (w = Z({ type: s.Skeleton, tooltip: "目標 Spine 骨架" })),
          (S = Z({ tooltip: "目標同步骨骼名稱" })),
          (y = Z({
            tooltip:
              "是否快取旋轉及縮放的上層資料，預設開啟。如果父層以上會有動態調整旋轉及縮放則需取消勾選此選項，或是維持啟用狀態但於需要的時刻呼叫 CacheUpdate 方法",
          })),
          (F = Z({ tooltip: "是否同步位置" })),
          (g = Z({ tooltip: "是否同步旋轉" })),
          (v = Z({ tooltip: "是否將目標旋轉角度轉換成區域旋轉角度" })),
          (z = Z({ tooltip: "是否同步縮放" })),
          (R = Z({ tooltip: "是否將目標縮放量轉換成區域縮放量" })),
          (C = Z({ visible: !1 })),
          (N = Z({ type: ie, visible: !0, displayName: "Bone" })),
          (A = Z({ visible: !0, displayName: "Preview" })),
          (L = Z({
            displayName: "Cache Ancestors",
            tooltip:
              "是否快取旋轉及縮放的上層資料，預設開啟。如果父層以上會有動態調整旋轉及縮放則需取消勾選此選項，或是維持啟用狀態但於需要的時刻呼叫 CacheUpdate 方法",
          })),
          (x = Z({
            displayName: "Scale Factor",
            tooltip: "額外本體大小縮放",
            visible: function () {
              return this.m_isFollowScale;
            },
          })),
          (B = Z({
            type: c,
            displayName: "Position Offset",
            tooltip: "額外本體位置偏移",
            visible: function () {
              return this.m_isFollowPosition;
            },
          })),
          (P = Z({
            displayName: "Rotation Factor",
            tooltip: "額外本體旋轉",
            visible: function () {
              return this.m_isFollowRotation;
            },
          })),
          f(
            (X =
              b(
                (((K = (function (e) {
                  function i() {
                    for (
                      var i, t = arguments.length, l = new Array(t), a = 0;
                      a < t;
                      a++
                    )
                      l[a] = arguments[a];
                    return (
                      ((i = e.call.apply(e, [this].concat(l)) || this).editor =
                        void 0),
                      o(i, "m_spineSkeleton", Y, n(i)),
                      o(i, "m_boneName", I, n(i)),
                      o(i, "m_isCacheData", D, n(i)),
                      o(i, "m_isFollowPosition", O, n(i)),
                      o(i, "m_isFollowRotation", E, n(i)),
                      o(i, "m_isRotationLocalization", M, n(i)),
                      o(i, "m_isFollowScale", T, n(i)),
                      o(i, "m_isScaleLocalization", U, n(i)),
                      o(i, "__boneIndex", W, n(i)),
                      o(i, "_boneIndex", V, n(i)),
                      o(i, "m_preview", j, n(i)),
                      o(i, "m_cacheAncestors", q, n(i)),
                      o(i, "m_scaleFactor", H, n(i)),
                      o(i, "m_positionOffset", G, n(i)),
                      o(i, "m_rotationFactor", J, n(i)),
                      (i._oldAngle = 0),
                      (i._oldScaleX = 1),
                      (i._oldScaleY = 1),
                      (i._isCached = !1),
                      (i._cachedRotation = 0),
                      (i._cachedScaleX = 1),
                      (i._cachedScaleY = 1),
                      i
                    );
                  }
                  t(i, e);
                  var l = i.prototype;
                  return (
                    (l.__preload = function () {}),
                    (l.onLoad = function () {
                      (this._oldAngle = this.node.angle),
                        (this._oldScaleX = this.node.scale.x),
                        (this._oldScaleY = this.node.scale.y);
                    }),
                    (l.update = function () {
                      if (
                        this.m_spineSkeleton &&
                        "" != this.m_boneName &&
                        (this.m_isFollowPosition ||
                          this.m_isFollowRotation ||
                          this.m_isFollowScale)
                      ) {
                        var e = null;
                        if (
                          (e = this.m_spineSkeleton.findBone(this.m_boneName))
                        ) {
                          var i, t, o;
                          if (!this.m_cacheAncestors || !this._isCached) {
                            for (
                              var n = 0,
                                l = 0,
                                a = 1,
                                r = 1,
                                s = 1,
                                c = 1,
                                p = this.m_spineSkeleton.node;
                              p;

                            )
                              (a *= p.scale.x),
                                (r *= p.scale.y),
                                (n += p.angle),
                                (p = p.parent);
                            for (p = this.node.parent; p; )
                              (s *= p.scale.x),
                                (c *= p.scale.y),
                                (l -= p.angle),
                                (p = p.parent);
                            (this._cachedRotation = n + l),
                              (this._cachedScaleX = a / s),
                              (this._cachedScaleY = r / c),
                              (this._isCached = !0);
                          }
                          if (
                            ((i = this.m_isRotationLocalization
                              ? this._cachedRotation
                              : this._oldAngle),
                            (t = this.m_isScaleLocalization
                              ? this._cachedScaleX
                              : this._oldScaleX),
                            (o = this.m_isScaleLocalization
                              ? this._cachedScaleY
                              : this._oldScaleY),
                            this.m_isFollowRotation)
                          ) {
                            var m = e.parent,
                              d = e.arotation;
                            this.node.angle =
                              i +
                              (u(m) ? ne(m.a, m.b, m.c, m.d, d) : e.arotation) +
                              this.m_rotationFactor;
                          }
                          if (
                            (this.m_isFollowScale &&
                              this.node.setScale(
                                t * e.getWorldScaleX() * this.m_scaleFactor.x,
                                o * e.getWorldScaleY() * this.m_scaleFactor.y
                              ),
                            this.m_isFollowPosition)
                          ) {
                            var f = this.m_spineSkeleton.node
                                .getComponent(h)
                                .convertToWorldSpaceAR(
                                  _(e.worldX, e.worldY, 0)
                                ),
                              b = this.node.parent
                                .getComponent(h)
                                .convertToNodeSpaceAR(f);
                            this.node.setPosition(
                              _(
                                b.x + this.m_positionOffset.x,
                                b.y + this.m_positionOffset.y
                              )
                            );
                          }
                        }
                      }
                    }),
                    (l.onDestroy = function () {
                      (this._oldAngle = null),
                        (this._oldScaleX = null),
                        (this._oldScaleY = null),
                        (this._isCached = null),
                        (this._cachedRotation = null),
                        (this._cachedScaleX = null),
                        (this._cachedScaleY = null),
                        (this.m_spineSkeleton = null),
                        (this.m_boneName = null),
                        (this.m_cacheAncestors = null),
                        (this.m_isFollowPosition = null),
                        (this.m_isFollowRotation = null),
                        (this.m_isRotationLocalization = null),
                        (this.m_isFollowScale = null),
                        (this.m_isScaleLocalization = null);
                    }),
                    (l.CacheUpdate = function () {
                      this._isCached = !1;
                    }),
                    (l._refreshInspector = function () {
                      this._updateBoneEnum();
                    }),
                    (l._boneEnum = function () {
                      var e = p(ee);
                      return this.m_spineSkeleton, e;
                    }),
                    (l._updateBoneEnum = function () {}),
                    i
                  );
                })(m)).BoneFollow = "BoneFollow"),
                (Y = i((k = K).prototype, "m_spineSkeleton", [w], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                })),
                (I = i(k.prototype, "m_boneName", [S], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return "";
                  },
                })),
                (D = i(k.prototype, "m_isCacheData", [y], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return !1;
                  },
                })),
                (O = i(k.prototype, "m_isFollowPosition", [F], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return !1;
                  },
                })),
                (E = i(k.prototype, "m_isFollowRotation", [g], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return !1;
                  },
                })),
                (M = i(k.prototype, "m_isRotationLocalization", [v], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return !1;
                  },
                })),
                (T = i(k.prototype, "m_isFollowScale", [z], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return !1;
                  },
                })),
                (U = i(k.prototype, "m_isScaleLocalization", [R], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return !1;
                  },
                })),
                (W = i(k.prototype, "__boneIndex", [C], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return 0;
                  },
                })),
                (V = i(k.prototype, "_boneIndex", [N], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return ie.None;
                  },
                })),
                (j = i(k.prototype, "m_preview", [A], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return !0;
                  },
                })),
                (q = i(k.prototype, "m_cacheAncestors", [L], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return !0;
                  },
                })),
                (H = i(k.prototype, "m_scaleFactor", [x], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return d(1, 1);
                  },
                })),
                (G = i(k.prototype, "m_positionOffset", [B], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return d(0, 0);
                  },
                })),
                (J = i(k.prototype, "m_rotationFactor", [P], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return 0;
                  },
                })),
                (X = k))
              ) || X)
          ) || X)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ButtonPro.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    "use strict";
    var e, i, r, o, n, s, a, l, p, h, _, c, u, d, S, g, f, b, y, C, m, O, E;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (r = t.initializerDefineProperty),
            (o = t.assertThisInitialized),
            (n = t.createClass);
        },
        function (t) {
          (s = t.cclegacy),
            (a = t._decorator),
            (l = t.Color),
            (p = t.ccenum),
            (h = t.UITransform),
            (_ = t.Node),
            (c = t.SpriteFrame),
            (u = t.EventHandler),
            (d = t.Vec3),
            (S = t.Sprite),
            (g = t.math),
            (f = t.assetManager),
            (b = t.Label),
            (y = t.lerp),
            (C = t.UIRenderer),
            (m = t.NodeEventType),
            (O = t.TransformBit),
            (E = t.Component);
        },
      ],
      execute: function () {
        var v,
          T,
          L,
          R,
          z,
          P,
          w,
          A,
          I,
          M,
          D,
          N,
          k,
          H,
          B,
          F,
          U,
          j,
          x,
          V,
          K,
          G,
          W,
          q,
          J,
          X,
          Q,
          Y,
          Z,
          $,
          tt,
          et,
          it,
          rt,
          ot,
          nt,
          st,
          at,
          lt,
          pt,
          ht,
          _t,
          ct,
          ut,
          dt,
          St,
          gt,
          ft;
        t("EventType", void 0),
          s._RF.push({}, "84c5byXmKBEJIwVBTwOs7ly", "ButtonPro", void 0);
        var bt,
          yt,
          Ct,
          mt = a.ccclass,
          Ot = a.executionOrder,
          Et = a.requireComponent,
          vt = a.type,
          Tt = a.executeInEditMode,
          Lt = a.property,
          Rt = new l();
        !(function (t) {
          (t[(t.NONE = 0)] = "NONE"),
            (t[(t.COLOR = 1)] = "COLOR"),
            (t[(t.SPRITE = 2)] = "SPRITE"),
            (t[(t.SCALE = 4)] = "SCALE"),
            (t[(t.COLOR_SPRITE = 3)] = "COLOR_SPRITE"),
            (t[(t.COLOR_SCALE = 5)] = "COLOR_SCALE"),
            (t[(t.SPRITE_SCALE = 6)] = "SPRITE_SCALE"),
            (t[(t.ALL = 7)] = "ALL");
        })(bt || (bt = {})),
          p(bt),
          (function (t) {
            (t.NORMAL = "normal"),
              (t.HOVER = "hover"),
              (t.PRESSED = "pressed"),
              (t.DISABLED = "disabled");
          })(yt || (yt = {})),
          (function (t) {
            t.CLICK = "click";
          })(Ct || (Ct = t("EventType", {})));
        t(
          "ButtonPro",
          ((v = mt("ButtonPro")),
          (T = Ot(110)),
          (L = Et(h)),
          (R = Lt({ type: _, displayOrder: 0, tooltip: "i18n:button.target" })),
          (z = Lt({ displayOrder: 1, tooltip: "i18n:button.interactable" })),
          (P = Lt({
            type: bt,
            displayOrder: 2,
            tooltip: "i18n:button.transition",
          })),
          (w = Lt({
            group: { name: "COLOR" },
            displayOrder: 3,
            tooltip: "i18n:button.normal_color",
          })),
          (A = Lt({
            group: { name: "COLOR" },
            displayOrder: 3,
            tooltip: "i18n:button.pressed_color",
          })),
          (I = Lt({
            group: { name: "COLOR" },
            displayOrder: 3,
            tooltip: "i18n:button.hover_color",
          })),
          (M = Lt({
            group: { name: "COLOR" },
            displayOrder: 3,
            tooltip: "i18n:button.disabled_color",
          })),
          (D = Lt({
            group: { name: "SCALE" },
            displayOrder: 4,
            tooltip: "i18n:button.duration",
            min: 0,
            max: 10,
          })),
          (N = Lt({
            group: { name: "SCALE" },
            displayOrder: 4,
            tooltip: "i18n:button.zoom_scale",
          })),
          (k = Lt({
            group: { name: "SPRITE" },
            type: c,
            displayOrder: 3,
            tooltip: "i18n:button.normal_sprite",
          })),
          (H = Lt({
            group: { name: "SPRITE" },
            type: c,
            displayOrder: 3,
            tooltip: "i18n:button.pressed_sprite",
          })),
          (B = Lt({
            group: { name: "SPRITE" },
            type: c,
            displayOrder: 3,
            tooltip: "i18n:button.hover_sprite",
          })),
          (F = Lt({
            group: { name: "SPRITE" },
            type: c,
            displayOrder: 3,
            tooltip: "i18n:button.disabled_sprite",
          })),
          (U = vt([u])),
          (j = Lt({
            serializable: !0,
            displayOrder: 20,
            tooltip: "i18n:button.click_events",
          })),
          (x = Lt({ serializable: !0 })),
          (V = Lt({ serializable: !0 })),
          (K = Lt({ serializable: !0 })),
          (G = Lt({ serializable: !0 })),
          (W = Lt({ serializable: !0 })),
          (q = Lt({ serializable: !0 })),
          (J = Lt({ serializable: !0 })),
          (X = Lt({ serializable: !0 })),
          (Q = Lt({ serializable: !0 })),
          (Y = Lt({ serializable: !0 })),
          (Z = Lt({ serializable: !0 })),
          ($ = Lt({ serializable: !0 })),
          (tt = Lt({ serializable: !0 })),
          v(
            (et =
              T(
                (et =
                  L(
                    (et =
                      Tt(
                        (((ft = (function (t) {
                          function e() {
                            for (
                              var e,
                                i = arguments.length,
                                n = new Array(i),
                                s = 0;
                              s < i;
                              s++
                            )
                              n[s] = arguments[s];
                            return (
                              (e = t.call.apply(t, [this].concat(n)) || this),
                              r(e, "clickEvents", rt, o(e)),
                              r(e, "_interactable", ot, o(e)),
                              r(e, "_transition", nt, o(e)),
                              r(e, "_normalColor", st, o(e)),
                              r(e, "_hoverColor", at, o(e)),
                              r(e, "_pressedColor", lt, o(e)),
                              r(e, "_disabledColor", pt, o(e)),
                              r(e, "_normalSprite", ht, o(e)),
                              r(e, "_hoverSprite", _t, o(e)),
                              r(e, "_pressedSprite", ct, o(e)),
                              r(e, "_disabledSprite", ut, o(e)),
                              r(e, "_duration", dt, o(e)),
                              r(e, "_zoomScale", St, o(e)),
                              r(e, "_target", gt, o(e)),
                              (e._pressed = !1),
                              (e._hovered = !1),
                              (e._fromColor = new l()),
                              (e._toColor = new l()),
                              (e._time = 0),
                              (e._transitionFinished = !0),
                              (e._fromScale = new d()),
                              (e._toScale = new d()),
                              (e._originalScale = null),
                              (e._sprite = null),
                              (e._targetScale = new d()),
                              e
                            );
                          }
                          i(e, t);
                          var s = e.prototype;
                          return (
                            (s.onLoad = function () {
                              if (!this.getComponent(S)) {
                                var t = this.addComponent(S);
                                if (t) {
                                  (t.sizeMode = S.SizeMode.CUSTOM),
                                    (t.type = S.Type.SLICED);
                                  var e = this.node.getComponent(h);
                                  e && (e.contentSize = g.size(120, 40));
                                }
                                var i = f.assets.get(
                                  "20835ba4-6145-4fbc-a58a-051ce700aa3e@f9941"
                                );
                                i &&
                                  (t && !t.spriteFrame && (t.spriteFrame = i),
                                  this._normalSprite ||
                                    (this._normalSprite = i),
                                  this._hoverSprite || (this._hoverSprite = i));
                                var r = f.assets.get(
                                  "544e49d6-3f05-4fa8-9a9e-091f98fc2ce8@f9941"
                                );
                                r &&
                                  (this._pressedSprite ||
                                    (this._pressedSprite = r));
                                var o = f.assets.get(
                                  "951249e0-9f16-456d-8b85-a6ca954da16b@f9941"
                                );
                                o &&
                                  (this._disabledSprite ||
                                    (this._disabledSprite = o));
                              }
                              if (!this.node.getChildByName("Label")) {
                                var n = new _("Label"),
                                  s = n.addComponent(b);
                                (s.node.layer = this.node.layer),
                                  (s.string = "ButtonPro"),
                                  (n.parent = this.node),
                                  (s.color = l.BLACK),
                                  (s.fontSize = 20);
                              }
                            }),
                            (s.__preload = function () {
                              this.target || (this.target = this.node);
                              var t = this.node.getComponent(S);
                              t && (this._normalSprite = t.spriteFrame),
                                this._applyTarget(),
                                this._resetState();
                            }),
                            (s.onEnable = function () {
                              this._registerNodeEvent();
                            }),
                            (s.onDisable = function () {
                              this._resetState(), this._unregisterNodeEvent();
                            }),
                            (s.onDestroy = function () {
                              this.target.isValid &&
                                this._unregisterTargetEvent(this.target);
                            }),
                            (s.update = function (t) {
                              var e = this.target;
                              if (
                                !this._transitionFinished &&
                                e &&
                                (this._transition & bt.COLOR ||
                                  this._transition & bt.SCALE)
                              ) {
                                this._time += t;
                                var i = 1;
                                if (
                                  (this._duration > 0 &&
                                    (i = this._time / this._duration),
                                  i >= 1 && (i = 1),
                                  this._transition & bt.COLOR)
                                ) {
                                  var r = e._uiProps.uiComp;
                                  l.lerp(Rt, this._fromColor, this._toColor, i),
                                    r && (r.color = Rt);
                                }
                                this.transition & bt.SCALE &&
                                  (e.getScale(this._targetScale),
                                  (this._targetScale.x = y(
                                    this._fromScale.x,
                                    this._toScale.x,
                                    i
                                  )),
                                  (this._targetScale.y = y(
                                    this._fromScale.y,
                                    this._toScale.y,
                                    i
                                  )),
                                  e.setScale(this._targetScale)),
                                  1 === i && (this._transitionFinished = !0);
                              }
                            }),
                            (s._resizeNodeToTargetNode = function () {
                              if (this.target)
                                this.target._uiProps.uiTransformComp;
                            }),
                            (s._resetState = function () {
                              (this._pressed = !1), (this._hovered = !1);
                              var t = this.target;
                              if (t) {
                                var e = this._transition;
                                if (e & bt.COLOR && this._interactable) {
                                  var i = t.getComponent(C);
                                  i && (i.color = this._normalColor);
                                }
                                e & bt.SCALE &&
                                  this._originalScale &&
                                  t.setScale(this._originalScale),
                                  (this._transitionFinished = !0);
                              }
                            }),
                            (s._registerNodeEvent = function () {
                              this.node.on(
                                m.TOUCH_START,
                                this._onTouchBegan,
                                this
                              ),
                                this.node.on(
                                  m.TOUCH_MOVE,
                                  this._onTouchMove,
                                  this
                                ),
                                this.node.on(
                                  m.TOUCH_END,
                                  this._onTouchEnded,
                                  this
                                ),
                                this.node.on(
                                  m.TOUCH_CANCEL,
                                  this._onTouchCancel,
                                  this
                                ),
                                this.node.on(
                                  m.MOUSE_ENTER,
                                  this._onMouseMoveIn,
                                  this
                                ),
                                this.node.on(
                                  m.MOUSE_LEAVE,
                                  this._onMouseMoveOut,
                                  this
                                );
                            }),
                            (s._registerTargetEvent = function (t) {
                              t.on(
                                m.TRANSFORM_CHANGED,
                                this._onTargetTransformChanged,
                                this
                              );
                            }),
                            (s._unregisterNodeEvent = function () {
                              this.node.off(
                                m.TOUCH_START,
                                this._onTouchBegan,
                                this
                              ),
                                this.node.off(
                                  m.TOUCH_MOVE,
                                  this._onTouchMove,
                                  this
                                ),
                                this.node.off(
                                  m.TOUCH_END,
                                  this._onTouchEnded,
                                  this
                                ),
                                this.node.off(
                                  m.TOUCH_CANCEL,
                                  this._onTouchCancel,
                                  this
                                ),
                                this.node.off(
                                  m.MOUSE_ENTER,
                                  this._onMouseMoveIn,
                                  this
                                ),
                                this.node.off(
                                  m.MOUSE_LEAVE,
                                  this._onMouseMoveOut,
                                  this
                                );
                            }),
                            (s._unregisterTargetEvent = function (t) {
                              t.off(m.TRANSFORM_CHANGED);
                            }),
                            (s._getTargetSprite = function (t) {
                              var e = null;
                              return t && (e = t.getComponent(S)), e;
                            }),
                            (s._applyTarget = function () {
                              this.target &&
                                ((this._sprite = this._getTargetSprite(
                                  this.target
                                )),
                                this._originalScale ||
                                  (this._originalScale = new d()),
                                d.copy(
                                  this._originalScale,
                                  this.target.getScale()
                                ),
                                this._registerTargetEvent(this.target));
                            }),
                            (s._onTargetSpriteFrameChanged = function (t) {
                              this._transition & bt.SPRITE &&
                                this._setCurrentStateSpriteFrame(t.spriteFrame);
                            }),
                            (s._setCurrentStateSpriteFrame = function (t) {
                              if (t)
                                switch (this._getButtonState()) {
                                  case yt.NORMAL:
                                    this._normalSprite = t;
                                    break;
                                  case yt.HOVER:
                                    this._hoverSprite = t;
                                    break;
                                  case yt.PRESSED:
                                    this._pressedSprite = t;
                                    break;
                                  case yt.DISABLED:
                                    this._disabledSprite = t;
                                }
                            }),
                            (s._onTargetColorChanged = function (t) {
                              this._transition & bt.COLOR &&
                                this._setCurrentStateColor(t);
                            }),
                            (s._setCurrentStateColor = function (t) {
                              switch (this._getButtonState()) {
                                case yt.NORMAL:
                                  this._normalColor = t;
                                  break;
                                case yt.HOVER:
                                  this._hoverColor = t;
                                  break;
                                case yt.PRESSED:
                                  this._pressedColor = t;
                                  break;
                                case yt.DISABLED:
                                  this._disabledColor = t;
                              }
                            }),
                            (s._onTargetTransformChanged = function (t) {
                              t & O.SCALE &&
                                this._originalScale &&
                                this._transition & bt.SCALE &&
                                this._transitionFinished &&
                                d.copy(
                                  this._originalScale,
                                  this.target.getScale()
                                );
                            }),
                            (s._onTouchBegan = function (t) {
                              this._interactable &&
                                this.enabledInHierarchy &&
                                ((this._pressed = !0),
                                this._updateState(),
                                t && (t.propagationStopped = !0));
                            }),
                            (s._onTouchMove = function (t) {
                              if (
                                this._interactable &&
                                this.enabledInHierarchy &&
                                this._pressed &&
                                t
                              ) {
                                var e = t.touch;
                                if (e) {
                                  var i,
                                    r =
                                      this.node._uiProps.uiTransformComp.hitTest(
                                        e.getLocation()
                                      );
                                  if (
                                    this._transition & bt.SCALE &&
                                    this.target &&
                                    this._originalScale
                                  )
                                    r
                                      ? (d.copy(
                                          this._fromScale,
                                          this._originalScale
                                        ),
                                        d.multiplyScalar(
                                          this._toScale,
                                          this._originalScale,
                                          this._zoomScale
                                        ),
                                        (this._transitionFinished = !1))
                                      : ((this._time = 0),
                                        (this._transitionFinished = !0),
                                        this.target.setScale(
                                          this._originalScale
                                        ));
                                  else
                                    (i = r ? yt.PRESSED : yt.NORMAL),
                                      this._applyTransition(i);
                                  t && (t.propagationStopped = !0);
                                }
                              }
                            }),
                            (s._onTouchEnded = function (t) {
                              this._interactable &&
                                this.enabledInHierarchy &&
                                (this._pressed &&
                                  (u.emitEvents(this.clickEvents, t),
                                  this.node.emit(Ct.CLICK, this)),
                                (this._pressed = !1),
                                this._updateState(),
                                t && (t.propagationStopped = !0));
                            }),
                            (s._onTouchCancel = function () {
                              this._interactable &&
                                this.enabledInHierarchy &&
                                ((this._pressed = !1), this._updateState());
                            }),
                            (s._onMouseMoveIn = function () {
                              !this._pressed &&
                                this.interactable &&
                                this.enabledInHierarchy &&
                                ((this._transition & bt.SPRITE &&
                                  !this._hoverSprite) ||
                                  this._hovered ||
                                  ((this._hovered = !0), this._updateState()));
                            }),
                            (s._onMouseMoveOut = function () {
                              this._hovered &&
                                ((this._hovered = !1), this._updateState());
                            }),
                            (s._updateState = function () {
                              var t = this._getButtonState();
                              this._applyTransition(t);
                            }),
                            (s._getButtonState = function () {
                              var t = yt.NORMAL;
                              return (
                                this._interactable
                                  ? this._pressed
                                    ? (t = yt.PRESSED)
                                    : this._hovered && (t = yt.HOVER)
                                  : (t = yt.DISABLED),
                                t.toString()
                              );
                            }),
                            (s._updateColorTransition = function (t) {
                              var e,
                                i = this[t + "Color"],
                                r =
                                  null == (e = this.target)
                                    ? void 0
                                    : e.getComponent(C);
                              r &&
                                (t === yt.DISABLED
                                  ? ((r.color = i),
                                    (this._transitionFinished = !0))
                                  : ((this._fromColor = r.color.clone()),
                                    (this._toColor = i),
                                    (this._time = 0),
                                    (this._transitionFinished = !1)));
                            }),
                            (s._updateSpriteTransition = function (t) {
                              var e = this[t + "Sprite"];
                              this._sprite &&
                                e &&
                                (this._sprite.spriteFrame = e);
                            }),
                            (s._updateScaleTransition = function (t) {
                              this._interactable &&
                                (t === yt.PRESSED
                                  ? this._zoomUp()
                                  : this._zoomBack());
                            }),
                            (s._zoomUp = function () {
                              this._originalScale &&
                                (d.copy(this._fromScale, this._originalScale),
                                d.multiplyScalar(
                                  this._toScale,
                                  this._originalScale,
                                  this._zoomScale
                                ),
                                (this._time = 0),
                                (this._transitionFinished = !1));
                            }),
                            (s._zoomBack = function () {
                              this.target &&
                                this._originalScale &&
                                (d.copy(
                                  this._fromScale,
                                  this.target.getScale()
                                ),
                                d.copy(this._toScale, this._originalScale),
                                (this._time = 0),
                                (this._transitionFinished = !1));
                            }),
                            (s._applyTransition = function (t) {
                              var e = this._transition;
                              e & bt.COLOR && this._updateColorTransition(t),
                                e & bt.SPRITE &&
                                  this._updateSpriteTransition(t),
                                e & bt.SCALE && this._updateScaleTransition(t);
                            }),
                            (s._xrHoverEnter = function () {
                              this._onMouseMoveIn(), this._updateState();
                            }),
                            (s._xrHoverExit = function () {
                              this._onMouseMoveOut(),
                                this._pressed &&
                                  ((this._pressed = !1), this._updateState());
                            }),
                            (s._xrClick = function () {
                              this._interactable &&
                                this.enabledInHierarchy &&
                                ((this._pressed = !0), this._updateState());
                            }),
                            (s._xrUnClick = function () {
                              this._interactable &&
                                this.enabledInHierarchy &&
                                (this._pressed &&
                                  (u.emitEvents(this.clickEvents, this),
                                  this.node.emit(Ct.CLICK, this)),
                                (this._pressed = !1),
                                this._updateState());
                            }),
                            n(e, [
                              {
                                key: "target",
                                get: function () {
                                  return this._target || this.node;
                                },
                                set: function (t) {
                                  this._target !== t &&
                                    (this._target &&
                                      this._unregisterTargetEvent(this._target),
                                    (this._target = t),
                                    this._applyTarget());
                                },
                              },
                              {
                                key: "interactable",
                                get: function () {
                                  return this._interactable;
                                },
                                set: function (t) {
                                  this._interactable !== t &&
                                    ((this._interactable = t),
                                    this._updateState(),
                                    this._interactable || this._resetState());
                                },
                              },
                              {
                                key: "_resizeToTarget",
                                set: function (t) {
                                  t && this._resizeNodeToTargetNode();
                                },
                              },
                              {
                                key: "transition",
                                get: function () {
                                  return this._transition;
                                },
                                set: function (t) {
                                  this._transition !== t &&
                                    (this._transition & bt.COLOR &&
                                      this._updateColorTransition(yt.NORMAL),
                                    this._transition & bt.SPRITE &&
                                      this._updateSpriteTransition(yt.NORMAL),
                                    (this._transition = t),
                                    this._updateState());
                                },
                              },
                              {
                                key: "normalColor",
                                get: function () {
                                  return this._normalColor;
                                },
                                set: function (t) {
                                  this._normalColor !== t &&
                                    (this._normalColor.set(t),
                                    this._updateState());
                                },
                              },
                              {
                                key: "pressedColor",
                                get: function () {
                                  return this._pressedColor;
                                },
                                set: function (t) {
                                  this._pressedColor !== t &&
                                    this._pressedColor.set(t);
                                },
                              },
                              {
                                key: "hoverColor",
                                get: function () {
                                  return this._hoverColor;
                                },
                                set: function (t) {
                                  this._hoverColor !== t &&
                                    this._hoverColor.set(t);
                                },
                              },
                              {
                                key: "disabledColor",
                                get: function () {
                                  return this._disabledColor;
                                },
                                set: function (t) {
                                  this._disabledColor !== t &&
                                    (this._disabledColor.set(t),
                                    this._updateState());
                                },
                              },
                              {
                                key: "duration",
                                get: function () {
                                  return this._duration;
                                },
                                set: function (t) {
                                  this._duration !== t && (this._duration = t);
                                },
                              },
                              {
                                key: "zoomScale",
                                get: function () {
                                  return this._zoomScale;
                                },
                                set: function (t) {
                                  this._zoomScale !== t &&
                                    (this._zoomScale = t);
                                },
                              },
                              {
                                key: "normalSprite",
                                get: function () {
                                  return this._normalSprite;
                                },
                                set: function (t) {
                                  if (this._normalSprite !== t) {
                                    this._normalSprite = t;
                                    var e = this.node.getComponent(S);
                                    e && (e.spriteFrame = t),
                                      this._updateState();
                                  }
                                },
                              },
                              {
                                key: "pressedSprite",
                                get: function () {
                                  return this._pressedSprite;
                                },
                                set: function (t) {
                                  this._pressedSprite !== t &&
                                    ((this._pressedSprite = t),
                                    this._updateState());
                                },
                              },
                              {
                                key: "hoverSprite",
                                get: function () {
                                  return this._hoverSprite;
                                },
                                set: function (t) {
                                  this._hoverSprite !== t &&
                                    ((this._hoverSprite = t),
                                    this._updateState());
                                },
                              },
                              {
                                key: "disabledSprite",
                                get: function () {
                                  return this._disabledSprite;
                                },
                                set: function (t) {
                                  this._disabledSprite !== t &&
                                    ((this._disabledSprite = t),
                                    this._updateState());
                                },
                              },
                            ]),
                            e
                          );
                        })(E)).Transition = bt),
                        (ft.EventType = Ct),
                        e(
                          (it = ft).prototype,
                          "target",
                          [R],
                          Object.getOwnPropertyDescriptor(
                            it.prototype,
                            "target"
                          ),
                          it.prototype
                        ),
                        e(
                          it.prototype,
                          "interactable",
                          [z],
                          Object.getOwnPropertyDescriptor(
                            it.prototype,
                            "interactable"
                          ),
                          it.prototype
                        ),
                        e(
                          it.prototype,
                          "transition",
                          [P],
                          Object.getOwnPropertyDescriptor(
                            it.prototype,
                            "transition"
                          ),
                          it.prototype
                        ),
                        e(
                          it.prototype,
                          "normalColor",
                          [w],
                          Object.getOwnPropertyDescriptor(
                            it.prototype,
                            "normalColor"
                          ),
                          it.prototype
                        ),
                        e(
                          it.prototype,
                          "pressedColor",
                          [A],
                          Object.getOwnPropertyDescriptor(
                            it.prototype,
                            "pressedColor"
                          ),
                          it.prototype
                        ),
                        e(
                          it.prototype,
                          "hoverColor",
                          [I],
                          Object.getOwnPropertyDescriptor(
                            it.prototype,
                            "hoverColor"
                          ),
                          it.prototype
                        ),
                        e(
                          it.prototype,
                          "disabledColor",
                          [M],
                          Object.getOwnPropertyDescriptor(
                            it.prototype,
                            "disabledColor"
                          ),
                          it.prototype
                        ),
                        e(
                          it.prototype,
                          "duration",
                          [D],
                          Object.getOwnPropertyDescriptor(
                            it.prototype,
                            "duration"
                          ),
                          it.prototype
                        ),
                        e(
                          it.prototype,
                          "zoomScale",
                          [N],
                          Object.getOwnPropertyDescriptor(
                            it.prototype,
                            "zoomScale"
                          ),
                          it.prototype
                        ),
                        e(
                          it.prototype,
                          "normalSprite",
                          [k],
                          Object.getOwnPropertyDescriptor(
                            it.prototype,
                            "normalSprite"
                          ),
                          it.prototype
                        ),
                        e(
                          it.prototype,
                          "pressedSprite",
                          [H],
                          Object.getOwnPropertyDescriptor(
                            it.prototype,
                            "pressedSprite"
                          ),
                          it.prototype
                        ),
                        e(
                          it.prototype,
                          "hoverSprite",
                          [B],
                          Object.getOwnPropertyDescriptor(
                            it.prototype,
                            "hoverSprite"
                          ),
                          it.prototype
                        ),
                        e(
                          it.prototype,
                          "disabledSprite",
                          [F],
                          Object.getOwnPropertyDescriptor(
                            it.prototype,
                            "disabledSprite"
                          ),
                          it.prototype
                        ),
                        (rt = e(it.prototype, "clickEvents", [U, j], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return [];
                          },
                        })),
                        (ot = e(it.prototype, "_interactable", [x], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return !0;
                          },
                        })),
                        (nt = e(it.prototype, "_transition", [V], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return bt.NONE;
                          },
                        })),
                        (st = e(it.prototype, "_normalColor", [K], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return l.WHITE.clone();
                          },
                        })),
                        (at = e(it.prototype, "_hoverColor", [G], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return new l(211, 211, 211, 255);
                          },
                        })),
                        (lt = e(it.prototype, "_pressedColor", [W], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return l.WHITE.clone();
                          },
                        })),
                        (pt = e(it.prototype, "_disabledColor", [q], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return new l(124, 124, 124, 255);
                          },
                        })),
                        (ht = e(it.prototype, "_normalSprite", [J], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return null;
                          },
                        })),
                        (_t = e(it.prototype, "_hoverSprite", [X], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return null;
                          },
                        })),
                        (ct = e(it.prototype, "_pressedSprite", [Q], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return null;
                          },
                        })),
                        (ut = e(it.prototype, "_disabledSprite", [Y], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return null;
                          },
                        })),
                        (dt = e(it.prototype, "_duration", [Z], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return 0.1;
                          },
                        })),
                        (St = e(it.prototype, "_zoomScale", [$], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return 1.2;
                          },
                        })),
                        (gt = e(it.prototype, "_target", [tt], {
                          configurable: !0,
                          enumerable: !0,
                          writable: !0,
                          initializer: function () {
                            return null;
                          },
                        })),
                        (et = it))
                      ) || et)
                  ) || et)
              ) || et)
          ) || et)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BuyBonusManager.ts",
  ["cc", "./index4.ts"],
  function (n) {
    "use strict";
    var u, e;
    return {
      setters: [
        function (n) {
          u = n.cclegacy;
        },
        function (n) {
          e = n.Astarte;
        },
      ],
      execute: function () {
        n({
          UpdateBuyBonus: function () {
            n("buyBonusManager", e.BuyBonus);
          },
          buyBonusManager: void 0,
        }),
          u._RF.push({}, "e98d6g3Sn5F/phbS0JGqk6v", "BuyBonusManager", void 0),
          u._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ColorFadingUI.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, r, i, n, o, a, s, p, u, c, l, d, h, m, f, _, g, x, y;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (r = e.inheritsLoose),
            (i = e.createClass);
        },
        function (e) {
          (n = e.cclegacy),
            (o = e._decorator),
            (a = e.EffectAsset),
            (s = e.CCInteger),
            (p = e.CCBoolean),
            (u = e.CCFloat),
            (c = e.Gradient),
            (l = e.Texture2D),
            (d = e.Material),
            (h = e.log),
            (m = e.Color),
            (f = e.ImageAsset),
            (_ = e.Sprite),
            (g = e.sp),
            (x = e.Label),
            (y = e.Component);
        },
      ],
      execute: function () {
        var C, T, G, R, v, E, M, S;
        n._RF.push({}, "ccb69RBfI5KBKNPuwywfE10", "ColorFadingUI", void 0);
        var A = o.ccclass,
          F = o.property,
          w = o.executeInEditMode;
        e(
          "ColorFadingUI",
          ((C = A("ColorFadingUI")),
          (T = F({ type: a, tooltip: "Color Fading 預設 shader" })),
          (G = F({ type: s, tooltip: "Gradient Texture Size" })),
          (R = F({ type: p, tooltip: "是否使用alpha test, Spine建議開啟" })),
          (v = F({ type: u, tooltip: "混合比例，0~1之間" })),
          (E = F({ type: c, tooltip: "當前Gradient" })),
          C(
            (M =
              w(
                (t(
                  (S = (function (e) {
                    function t() {
                      for (
                        var t, r = arguments.length, i = new Array(r), n = 0;
                        n < r;
                        n++
                      )
                        i[n] = arguments[n];
                      return (
                        ((t =
                          e.call.apply(e, [this].concat(i)) ||
                          this).m_colorFadingEffect = null),
                        (t.m_gradientTextureSize = 64),
                        (t.m_currGradient = new c()),
                        (t.m_mixRate = 0),
                        (t.m_useAlphaTest = !1),
                        (t.m_tex = new l()),
                        (t.m_use_colorfading = !0),
                        (t.m_renderComponent = null),
                        (t.m_copyEffect = null),
                        t
                      );
                    }
                    r(t, e);
                    var n = t.prototype;
                    return (
                      (n.start = function () {
                        this.GenerateMat();
                      }),
                      (n.onDestroy = function () {
                        this.m_use_colorfading = !1;
                      }),
                      (n.Init = function (e, t, r, i, n, o) {
                        void 0 === r && (r = 0),
                          void 0 === i && (i = 64),
                          void 0 === n && (n = !0),
                          void 0 === o && (o = !1),
                          (this.ColorFadingEffect = e),
                          (this.CurrentGradient = t),
                          (this.UseAlphaTest = o),
                          (this.MixRate = r),
                          (this.GradientTextureSize = i),
                          this.UseColorFadingAPI(n),
                          this.GenerateMat();
                      }),
                      (n.UseColorFadingAPI = function (e) {
                        (this.m_use_colorfading = e), this.GenerateMat();
                      }),
                      (n.ResetGradient = function () {
                        (this.m_mixRate = 1),
                          (this.m_currGradient = new c()),
                          this.LoadTexture();
                      }),
                      (n.GenerateMat = function () {
                        var e = this.GetRenderComponent();
                        if (null != e && null != this.m_colorFadingEffect) {
                          var t = new d();
                          t.initialize({
                            effectAsset: this.m_colorFadingEffect,
                            technique: 0,
                            defines: {
                              USE_COLOR_FADING: this.m_use_colorfading,
                              USE_ALPHA_TEST: this.m_useAlphaTest,
                            },
                          }),
                            (e.customMaterial = t),
                            this.LoadTexture();
                        }
                      }),
                      (n.LoadTexture = function () {
                        if (null == this.m_colorFadingEffect)
                          h("Warning! No effect asset loaded!");
                        else {
                          h("loadTexture", this.m_currGradient),
                            this.m_gradientTextureSize <= 0 &&
                              (this.m_gradientTextureSize = 1);
                          for (
                            var e = [],
                              t = 1 / this.m_gradientTextureSize,
                              r = 0;
                            r <= 1;
                            r++
                          )
                            for (
                              var i = 0;
                              i <= this.m_gradientTextureSize;
                              i += t
                            ) {
                              var n = new m();
                              (n = this.m_currGradient.evaluate(i)),
                                e.push(n.r),
                                e.push(n.g),
                                e.push(n.b),
                                e.push(n.a);
                            }
                          this.CreateTexture(e);
                        }
                      }),
                      (n.CreateTexture = function (e) {
                        var t = new Uint8Array(e),
                          r = new f();
                        this.m_gradientTextureSize <= 0 &&
                          (this.m_gradientTextureSize = 1),
                          r.reset({
                            _data: t,
                            width: this.m_gradientTextureSize,
                            height: 1,
                            format: l.PixelFormat.RGBA8888,
                            _compressed: !1,
                          }),
                          (this.m_tex.image = r),
                          this.m_tex.setWrapMode(
                            l.WrapMode.CLAMP_TO_EDGE,
                            l.WrapMode.CLAMP_TO_EDGE
                          ),
                          this.UpdateMaterial();
                      }),
                      (n.UpdateMaterial = function () {
                        var e = this.GetRenderComponent();
                        if (null != e) {
                          var t = e.customMaterial;
                          t &&
                            (t.setProperty("gradient", this.m_tex),
                            t.setProperty("mixRate", this.m_mixRate));
                        }
                      }),
                      (n.GetRenderComponent = function () {
                        return (
                          null == this.m_renderComponent &&
                            (this.m_renderComponent =
                              this.node.getComponent(_)),
                          null == this.m_renderComponent &&
                            (this.m_renderComponent = this.node.getComponent(
                              g.Skeleton
                            )),
                          null == this.m_renderComponent &&
                            (this.m_renderComponent =
                              this.node.getComponent(x)),
                          this.m_renderComponent
                        );
                      }),
                      i(t, [
                        {
                          key: "ColorFadingEffect",
                          get: function () {
                            return this.m_copyEffect;
                          },
                          set: function (e) {
                            null != e && (this.m_colorFadingEffect = e),
                              (this.m_copyEffect = e);
                          },
                        },
                        {
                          key: "GradientTextureSize",
                          get: function () {
                            return this.m_gradientTextureSize;
                          },
                          set: function (e) {
                            (this.m_gradientTextureSize = e),
                              null != this.m_tex && this.LoadTexture();
                          },
                        },
                        {
                          key: "UseAlphaTest",
                          get: function () {
                            return this.m_useAlphaTest;
                          },
                          set: function (e) {
                            this.m_useAlphaTest = e;
                          },
                        },
                        {
                          key: "MixRate",
                          get: function () {
                            return this.m_mixRate;
                          },
                          set: function (e) {
                            if (e > 1) this.m_mixRate = 1;
                            else if (e < 0) this.m_mixRate = 0;
                            else {
                              this.m_mixRate = e;
                              var t = this.GetRenderComponent();
                              if (null != t) {
                                var r = t.customMaterial;
                                r
                                  ? r.setProperty("mixRate", this.m_mixRate)
                                  : this.GenerateMat();
                              }
                            }
                          },
                        },
                        {
                          key: "CurrentGradient",
                          get: function () {
                            return this.m_currGradient;
                          },
                          set: function (e) {
                            (this.m_currGradient = e), this.LoadTexture();
                          },
                        },
                      ]),
                      t
                    );
                  })(y)).prototype,
                  "ColorFadingEffect",
                  [T],
                  Object.getOwnPropertyDescriptor(
                    S.prototype,
                    "ColorFadingEffect"
                  ),
                  S.prototype
                ),
                t(
                  S.prototype,
                  "GradientTextureSize",
                  [G],
                  Object.getOwnPropertyDescriptor(
                    S.prototype,
                    "GradientTextureSize"
                  ),
                  S.prototype
                ),
                t(
                  S.prototype,
                  "UseAlphaTest",
                  [R],
                  Object.getOwnPropertyDescriptor(S.prototype, "UseAlphaTest"),
                  S.prototype
                ),
                t(
                  S.prototype,
                  "MixRate",
                  [v],
                  Object.getOwnPropertyDescriptor(S.prototype, "MixRate"),
                  S.prototype
                ),
                t(
                  S.prototype,
                  "CurrentGradient",
                  [E],
                  Object.getOwnPropertyDescriptor(
                    S.prototype,
                    "CurrentGradient"
                  ),
                  S.prototype
                ),
                (M = S))
              ) || M)
          ) || M)
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ColorText.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    "use strict";
    var e, r, i, o, n, a, l, p, s, h, u, c, d, y, g, w, _;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (r = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (o = t.assertThisInitialized),
            (n = t.createClass);
        },
        function (t) {
          (a = t.cclegacy),
            (l = t._decorator),
            (p = t.Label),
            (s = t.Material),
            (h = t.Gradient),
            (u = t.Color),
            (c = t.UITransform),
            (d = t.v4),
            (y = t.Texture2D),
            (g = t.clamp01),
            (w = t.Component),
            (_ = t.color);
        },
      ],
      execute: function () {
        var f,
          S,
          b,
          C,
          x,
          m,
          M,
          P,
          O,
          T,
          k,
          R,
          v,
          D,
          H,
          z,
          j,
          E,
          V,
          L,
          A,
          G,
          I,
          F,
          N,
          W,
          B,
          U,
          q;
        a._RF.push({}, "da7972YP9VAta/rfkmC0gmE", "ColorText", void 0);
        var Y = l.ccclass,
          J = l.property,
          K = l.requireComponent,
          Q = l.executeInEditMode;
        t(
          "ColorText",
          ((f = Y("ColorText")),
          (S = K(p)),
          (b = J(s)),
          (C = J(h)),
          (x = J(u)),
          (m = J({ tooltip: "使用該元件的自定義材質", type: s })),
          (M = J({ tooltip: "顏色漸變元件", type: h })),
          (P = J({ tooltip: "正片疊底顏色", type: u })),
          (O = J({
            tooltip: "顏色漸變貼圖的範圍",
            range: [0, 1, 0.01],
            slide: !0,
          })),
          (T = J({ tooltip: "是否垂直漸變顏色" })),
          (k = J({ tooltip: "上內陰影顏色", type: u })),
          (R = J({ tooltip: "下內陰影顏色", type: u })),
          (v = J({ tooltip: "上內陰影顏色高度 (Pixel)" })),
          (D = J({ tooltip: "下內陰影顏色高度 (Pixel)" })),
          (H = J({
            tooltip: "上內陰影插值比例 (0 ~ 1)",
            range: [0, 1, 0.01],
            slide: !0,
          })),
          (z = J({
            tooltip: "下內陰影插值比例 (0 ~ 1)",
            range: [0, 1, 0.01],
            slide: !0,
          })),
          f(
            (j =
              S(
                (j =
                  Q(
                    ((V = e(
                      (E = (function (t) {
                        function e() {
                          for (
                            var e,
                              r = arguments.length,
                              n = new Array(r),
                              a = 0;
                            a < r;
                            a++
                          )
                            n[a] = arguments[a];
                          return (
                            (e = t.call.apply(t, [this].concat(n)) || this),
                            i(e, "_textMaterial", V, o(e)),
                            i(e, "_gradient", L, o(e)),
                            i(e, "_gradientMultiply", A, o(e)),
                            i(e, "_gradientShrink", G, o(e)),
                            i(e, "_isVertical", I, o(e)),
                            i(e, "_innerShadowColor1", F, o(e)),
                            i(e, "_innerShadowColor2", N, o(e)),
                            i(e, "_innerShadowHeight1", W, o(e)),
                            i(e, "_innerShadowHeight2", B, o(e)),
                            i(e, "_innerShadowRate1", U, o(e)),
                            i(e, "_innerShadowRate2", q, o(e)),
                            (e.pixelNum = 128),
                            (e.colorTexture = null),
                            (e.isGradientChanged = !0),
                            e
                          );
                        }
                        r(e, t);
                        var a = e.prototype;
                        return (
                          (a.onLoad = function () {
                            var t = this.node.getComponent(p);
                            null !== t.customMaterial &&
                              (t.customMaterial !== t.sharedMaterial &&
                                t.customMaterial.destroy(),
                              (t.customMaterial = null)),
                              (t.color = u.WHITE),
                              null === this._textMaterial &&
                                console.warn(
                                  "ColorText.textMaterial should be not null."
                                );
                          }),
                          (a.onEnable = function () {
                            this.reset();
                          }),
                          (a.onDestroy = function () {
                            var t;
                            null == (t = this.colorTexture) || t.destroy(),
                              (this.colorTexture = null);
                          }),
                          (a.reset = function () {
                            null === this.colorTexture &&
                              (this.colorTexture = this.createColorTexture()),
                              !0 === this.isGradientChanged &&
                                ((this.isGradientChanged = !1),
                                this.updateColorTexture());
                            var t = this.node.getComponent(p),
                              e = t.customMaterial;
                            if (
                              (!e &&
                                this._textMaterial &&
                                ((e = new s()).copy(this._textMaterial),
                                (t.customMaterial = e)),
                              e)
                            ) {
                              e.setProperty("gradientMap", this.colorTexture),
                                e.setProperty(
                                  "gradientMultiply",
                                  this._gradientMultiply
                                ),
                                e.setProperty(
                                  "gradientShrink",
                                  this._gradientShrink
                                ),
                                e.setProperty(
                                  "innerShadow1",
                                  this._innerShadowColor1
                                ),
                                e.setProperty(
                                  "innerShadow2",
                                  this._innerShadowColor2
                                );
                              var r = 0,
                                i = 0,
                                o = this.node.getComponent(c).contentSize;
                              o.height > 0 &&
                                ((r = this._innerShadowHeight1 / o.height),
                                (i = this._innerShadowHeight2 / o.height));
                              var n = d(
                                r,
                                i,
                                this._innerShadowRate1,
                                this._innerShadowRate2
                              );
                              e.setProperty("innerShadowParam", n);
                            }
                          }),
                          (a.createColorTexture = function () {
                            var t = new y(),
                              e = this.pixelNum,
                              r = 1;
                            return (
                              !0 === this._isVertical && ((r = e), (e = 1)),
                              t.reset({
                                width: e,
                                height: r,
                                format: y.PixelFormat.RGBA8888,
                                mipmapLevel: 0,
                              }),
                              t.setWrapMode(
                                y.WrapMode.CLAMP_TO_EDGE,
                                y.WrapMode.CLAMP_TO_EDGE
                              ),
                              t.setFilters(y.Filter.LINEAR, y.Filter.LINEAR),
                              t
                            );
                          }),
                          (a.updateColorTexture = function () {
                            for (
                              var t = this.pixelNum,
                                e = new Uint8ClampedArray(4 * t),
                                r = 0,
                                i = this._gradient,
                                o = 0;
                              o < t;
                              ++o
                            ) {
                              var n = i.evaluate(o / t);
                              (e[r++] = n.r),
                                (e[r++] = n.g),
                                (e[r++] = n.b),
                                (e[r++] = n.a);
                            }
                            var a = this.colorTexture;
                            a.uploadData(e, 0, 0), a.updateImage();
                          }),
                          n(e, [
                            {
                              key: "textMaterial",
                              get: function () {
                                return this._textMaterial;
                              },
                              set: function (t) {
                                (this._textMaterial = t), this.reset();
                              },
                            },
                            {
                              key: "gradient",
                              get: function () {
                                return this._gradient;
                              },
                              set: function (t) {
                                (this.isGradientChanged = !0),
                                  (this._gradient = t),
                                  this.reset();
                              },
                            },
                            {
                              key: "gradientMultiply",
                              get: function () {
                                return this._gradientMultiply;
                              },
                              set: function (t) {
                                (this._gradientMultiply = t), this.reset();
                              },
                            },
                            {
                              key: "gradientShrink",
                              get: function () {
                                return this._gradientShrink;
                              },
                              set: function (t) {
                                (this._gradientShrink = t), this.reset();
                              },
                            },
                            {
                              key: "isVertical",
                              get: function () {
                                return this._isVertical;
                              },
                              set: function (t) {
                                var e;
                                this._isVertical !== t &&
                                  (null == (e = this.colorTexture) ||
                                    e.destroy(),
                                  (this.colorTexture = null));
                                (this._isVertical = t), this.reset();
                              },
                            },
                            {
                              key: "innerShadowColor1",
                              get: function () {
                                return this._innerShadowColor1;
                              },
                              set: function (t) {
                                this._innerShadowColor1.set(t), this.reset();
                              },
                            },
                            {
                              key: "innerShadowColor2",
                              get: function () {
                                return this._innerShadowColor2;
                              },
                              set: function (t) {
                                this._innerShadowColor2.set(t), this.reset();
                              },
                            },
                            {
                              key: "innerShadowHeight1",
                              get: function () {
                                return this._innerShadowHeight1;
                              },
                              set: function (t) {
                                (this._innerShadowHeight1 = t), this.reset();
                              },
                            },
                            {
                              key: "innerShadowHeight2",
                              get: function () {
                                return this._innerShadowHeight2;
                              },
                              set: function (t) {
                                (this._innerShadowHeight2 = t), this.reset();
                              },
                            },
                            {
                              key: "innerShadowRate1",
                              get: function () {
                                return this._innerShadowRate1;
                              },
                              set: function (t) {
                                (this._innerShadowRate1 = g(t)), this.reset();
                              },
                            },
                            {
                              key: "innerShadowRate2",
                              get: function () {
                                return this._innerShadowRate2;
                              },
                              set: function (t) {
                                (this._innerShadowRate2 = t), this.reset();
                              },
                            },
                          ]),
                          e
                        );
                      })(w)).prototype,
                      "_textMaterial",
                      [b],
                      {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                          return null;
                        },
                      }
                    )),
                    (L = e(E.prototype, "_gradient", [C], {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      initializer: function () {
                        return new h();
                      },
                    })),
                    (A = e(E.prototype, "_gradientMultiply", [x], {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      initializer: function () {
                        return _(255, 255, 255, 255);
                      },
                    })),
                    (G = e(E.prototype, "_gradientShrink", [J], {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      initializer: function () {
                        return 0.15;
                      },
                    })),
                    (I = e(E.prototype, "_isVertical", [J], {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      initializer: function () {
                        return !0;
                      },
                    })),
                    e(
                      E.prototype,
                      "textMaterial",
                      [m],
                      Object.getOwnPropertyDescriptor(
                        E.prototype,
                        "textMaterial"
                      ),
                      E.prototype
                    ),
                    e(
                      E.prototype,
                      "gradient",
                      [M],
                      Object.getOwnPropertyDescriptor(E.prototype, "gradient"),
                      E.prototype
                    ),
                    e(
                      E.prototype,
                      "gradientMultiply",
                      [P],
                      Object.getOwnPropertyDescriptor(
                        E.prototype,
                        "gradientMultiply"
                      ),
                      E.prototype
                    ),
                    e(
                      E.prototype,
                      "gradientShrink",
                      [O],
                      Object.getOwnPropertyDescriptor(
                        E.prototype,
                        "gradientShrink"
                      ),
                      E.prototype
                    ),
                    e(
                      E.prototype,
                      "isVertical",
                      [T],
                      Object.getOwnPropertyDescriptor(
                        E.prototype,
                        "isVertical"
                      ),
                      E.prototype
                    ),
                    (F = e(E.prototype, "_innerShadowColor1", [J], {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      initializer: function () {
                        return _(255, 255, 255, 255);
                      },
                    })),
                    (N = e(E.prototype, "_innerShadowColor2", [J], {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      initializer: function () {
                        return _(255, 255, 255, 255);
                      },
                    })),
                    (W = e(E.prototype, "_innerShadowHeight1", [J], {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      initializer: function () {
                        return 1;
                      },
                    })),
                    (B = e(E.prototype, "_innerShadowHeight2", [J], {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      initializer: function () {
                        return 2;
                      },
                    })),
                    (U = e(E.prototype, "_innerShadowRate1", [J], {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      initializer: function () {
                        return 0;
                      },
                    })),
                    (q = e(E.prototype, "_innerShadowRate2", [J], {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      initializer: function () {
                        return 0;
                      },
                    })),
                    e(
                      E.prototype,
                      "innerShadowColor1",
                      [k],
                      Object.getOwnPropertyDescriptor(
                        E.prototype,
                        "innerShadowColor1"
                      ),
                      E.prototype
                    ),
                    e(
                      E.prototype,
                      "innerShadowColor2",
                      [R],
                      Object.getOwnPropertyDescriptor(
                        E.prototype,
                        "innerShadowColor2"
                      ),
                      E.prototype
                    ),
                    e(
                      E.prototype,
                      "innerShadowHeight1",
                      [v],
                      Object.getOwnPropertyDescriptor(
                        E.prototype,
                        "innerShadowHeight1"
                      ),
                      E.prototype
                    ),
                    e(
                      E.prototype,
                      "innerShadowHeight2",
                      [D],
                      Object.getOwnPropertyDescriptor(
                        E.prototype,
                        "innerShadowHeight2"
                      ),
                      E.prototype
                    ),
                    e(
                      E.prototype,
                      "innerShadowRate1",
                      [H],
                      Object.getOwnPropertyDescriptor(
                        E.prototype,
                        "innerShadowRate1"
                      ),
                      E.prototype
                    ),
                    e(
                      E.prototype,
                      "innerShadowRate2",
                      [z],
                      Object.getOwnPropertyDescriptor(
                        E.prototype,
                        "innerShadowRate2"
                      ),
                      E.prototype
                    ),
                    (j = E))
                  ) || j)
              ) || j)
          ) || j)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Common_IdleState.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./ConnectionManager.ts",
    "./index.ts",
    "./TimeBool.ts",
    "./index2.ts",
    "./NewBottomBarManager.ts",
    "./Define.ts",
    "./StateManager.ts",
    "./NewExtraManager.ts",
    "./NotificationManager.ts",
    "./CommonGameManager.ts",
    "./BuyBonusManager.ts",
    "./EventManager.ts",
  ],
  function (e) {
    "use strict";
    var t, n, i, o, a, s, r, m, c, u, h, S, l, f, I, _, g, B, M;
    return {
      setters: [
        function (e) {
          (t = e.inheritsLoose), (n = e.assertThisInitialized);
        },
        function (e) {
          (i = e.cclegacy), (o = e._decorator), (a = e.log);
        },
        function (e) {
          s = e.ConnectionManager;
        },
        null,
        function (e) {
          r = e.default;
        },
        null,
        function (e) {
          (m = e.newBottombarManager), (c = e.SlotBottomBarState);
        },
        function (e) {
          (u = e.Define), (h = e.CommonState);
        },
        function (e) {
          (S = e.stateManager), (l = e.BaseState);
        },
        function (e) {
          f = e.newExtraManager;
        },
        function (e) {
          I = e.notificationManager;
        },
        function (e) {
          _ = e.commonGameManager;
        },
        function (e) {
          g = e.buyBonusManager;
        },
        function (e) {
          (B = e.CommonEventName), (M = e.eventManager);
        },
      ],
      execute: function () {
        var C;
        i._RF.push({}, "5cd11K4+Y1DBJ0WZfuiBSee", "Common_IdleState", void 0);
        var p = 1,
          d = 10,
          T = o.ccclass;
        e(
          "Common_IdleState",
          T("Common_IdleState")(
            (C = (function (e) {
              function i() {
                var t;
                return (
                  ((t = e.call(this) || this).m_exchangeTimer = null),
                  (t.m_isFirst = !0),
                  (t.m_initReqNoticeTimes = 0),
                  (t.m_hintShowed = !1),
                  M.Register(B.SpinReqNotify, n(t)),
                  (t.m_exchangeTimer = new r()),
                  t.m_exchangeTimer.UseDT(!0),
                  t
                );
              }
              t(i, e);
              var o = i.prototype;
              return (
                (o.OnEnter = function () {
                  a("Common State IDLE"),
                    m.ShowSkipBtn && m.ShowSkipBtn(!1),
                    u.HAS_REPLAY
                      ? u.IsInMG() &&
                        (this.m_isFirst
                          ? ((this.m_isFirst = !1), S.NextState(h.SPIN_REQ))
                          : f.OpenReplayView())
                      : (!u.IsInMG() || u.IsUsingItem || m.IsFreeSpin
                          ? (m.IsGameIdle = !1)
                          : (m.GetChips() < m.GetBetList()[0] &&
                              I.ShowBankruptNotify(),
                            this.SetIsIdle(!0)),
                        this.m_exchangeTimer.Clear(),
                        this.m_exchangeTimer.Start(
                          1e3 * (this.m_isFirst ? p : d)
                        ),
                        I.CountDownAfk()),
                    m.SetSpinState(c.IDLE),
                    this.Enter();
                }),
                (o.OnProcess = function (e) {
                  if (!u.HAS_REPLAY) {
                    if (s.HasMail && u.IsInMG() && m.CheckCommonWebPageClose())
                      for (; s.HasMail; ) s.ShowMailInfo();
                    this.m_exchangeTimer &&
                      (this.m_exchangeTimer.Update(1e3 * e),
                      this.m_exchangeTimer.ToBool() &&
                        (this.m_exchangeTimer.Clear(),
                        this.m_exchangeTimer.Start(
                          1e3 *
                            (this.m_isFirst && this.m_initReqNoticeTimes < 20
                              ? p
                              : d)
                        ),
                        S.Current() == h.IDLE &&
                          u.IsInMG() &&
                          (_.ReqNotice(), this.m_initReqNoticeTimes++))),
                      null == this || this.Process(e);
                  }
                }),
                (o.OnLeave = function () {
                  u.HAS_REPLAY || I.StopAfk();
                }),
                (o.SetIsIdle = function (e) {
                  e ? f.OpenTurboIcon() : f.CloseTurboIcon(),
                    u.SetCanUseItemCard(e),
                    g.IsBuyBonus || (g.CanBuyBonus = e),
                    m.LockBetEnable(!e),
                    (m.IsGameIdle = e),
                    m.CanPlayFeaturesDemo(e),
                    f.SetBuyBonusState(e);
                }),
                (o.OnEvent = function (e) {
                  if (S.Current() === h.IDLE)
                    switch (e) {
                      case B.SpinReqNotify:
                        u.HAS_REPLAY ||
                          (u.IsInMG()
                            ? S.NextState(h.SPIN_REQ)
                            : S.NextState(h.SPIN)),
                          (this.m_isFirst = !1);
                    }
                }),
                (o.Process = function (e) {}),
                i
              );
            })(l))
          ) || C
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/CommonBuyBonus.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CommonBuyBonusCell.ts",
    "./index2.ts",
    "./index.ts",
    "./LicenseSetting.ts",
    "./LocaleStringManager.ts",
    "./Define.ts",
    "./EventManager.ts",
    "./Tools.ts",
    "./NewBottomBarManager.ts",
    "./NewExtraManager.ts",
    "./StateManager.ts",
    "./SoundManager.ts",
    "./ExtraBetController.ts",
  ],
  function (t) {
    "use strict";
    var e,
      i,
      n,
      o,
      r,
      s,
      a,
      l,
      u,
      m,
      _,
      c,
      p,
      h,
      b,
      y,
      B,
      d,
      g,
      f,
      N,
      S,
      v,
      T,
      C,
      w,
      M,
      P,
      L,
      A;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (o = t.assertThisInitialized),
            (r = t.createClass),
            (s = t.asyncToGenerator),
            (a = t.regeneratorRuntime);
        },
        function (t) {
          (l = t.cclegacy),
            (u = t._decorator),
            (m = t.Node),
            (_ = t.Animation),
            (c = t.Sprite),
            (p = t.Label),
            (h = t.Tween),
            (b = t.tween),
            (y = t.Component),
            (B = t.Button);
        },
        function (t) {
          d = t.CommonBuyBonusCell;
        },
        null,
        null,
        function (t) {
          g = t.SwitchOffKeyDefine;
        },
        function (t) {
          f = t.localeStringManager;
        },
        function (t) {
          (N = t.Define), (S = t.CommonState);
        },
        function (t) {
          (v = t.eventManager), (T = t.CommonEventName);
        },
        function (t) {
          C = t.tools;
        },
        function (t) {
          w = t.newBottombarManager;
        },
        function (t) {
          M = t.newExtraManager;
        },
        function (t) {
          P = t.stateManager;
        },
        function (t) {
          L = t.soundManager;
        },
        function (t) {
          A = t.extraBetController;
        },
      ],
      execute: function () {
        var x, E, O, F, I, D, G, R, V, z, k, H, W, U, Y, J, K, j, X, Z, q;
        l._RF.push({}, "deede8s0zBMX57ZpiWkWMfR", "CommonBuyBonus", void 0);
        var Q = "Buy_Feature_Open",
          $ = "Buy_Feature_Close",
          tt = u.ccclass,
          et = u.property;
        t(
          "CommonBuyBonus",
          ((x = tt("CommonBuyBonus")),
          (E = et({ type: m, tooltip: "介面" })),
          (O = et({ type: _, tooltip: "介面開關動畫" })),
          (F = et({ type: m, tooltip: "開啟按鈕節點" })),
          (I = et({ type: c, tooltip: "開啟按鈕標題" })),
          (D = et({ type: p, tooltip: "押注金額" })),
          (G = et({ type: d, tooltip: "購買項目" })),
          (R = et({ type: c, tooltip: "標題" })),
          (V = et({ type: c, tooltip: "押注" })),
          (z = et({ type: p, tooltip: "幣別符號" })),
          x(
            ((W = e(
              (H = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, r = new Array(i), s = 0;
                    s < i;
                    s++
                  )
                    r[s] = arguments[s];
                  return (
                    (e = t.call.apply(t, [this].concat(r)) || this),
                    n(e, "m_viewNode", W, o(e)),
                    n(e, "m_anim", U, o(e)),
                    n(e, "m_openBtnNode", Y, o(e)),
                    n(e, "m_openBtnTitle", J, o(e)),
                    n(e, "m_betLabel", K, o(e)),
                    n(e, "m_buyBonusCells", j, o(e)),
                    n(e, "m_titleSprite", X, o(e)),
                    n(e, "m_betSprite", Z, o(e)),
                    n(e, "m_currencyLabel", q, o(e)),
                    (e.m_iGameView = null),
                    (e.m_setting = null),
                    (e.m_betList = null),
                    (e.m_betIdx = 0),
                    (e.m_bonusType = null),
                    (e.m_isPlayingAnim = !1),
                    e
                  );
                }
                i(e, t);
                var l = e.prototype;
                return (
                  (l.start = function () {
                    this.m_viewNode.active = !0;
                    var t = f.GetGameAtlas();
                    f.CurrLang !== N.Lang.EN &&
                      ((this.m_betSprite.spriteFrame = t.getSpriteFrame(
                        "Txt_Buy_Feature_Bet"
                      )),
                      (this.m_titleSprite.spriteFrame = t.getSpriteFrame(
                        "Txt_Buy_Feature_Title"
                      )),
                      this.m_openBtnTitle &&
                        (this.m_openBtnTitle.spriteFrame =
                          t.getSpriteFrame("BuyBonus_IconName"))),
                      v.Register(T.TriggerFreeSpin, this),
                      v.Register(T.FreeSpinTotalWinEnd, this);
                  }),
                  (l.Init = function (t, e, i, n) {
                    var o = this;
                    if (
                      (void 0 === i && (i = !1),
                      void 0 === n && (n = null),
                      (this.m_viewNode.active = !1),
                      t && !C.CheckSwitchOff(g.ShopingMall))
                    ) {
                      (this.m_setting = t),
                        (this.m_iGameView = e),
                        (this.m_betList = JSON.parse(
                          JSON.stringify(w.GetBetList())
                        ));
                      for (
                        var r = this.m_betList.length - 1;
                        r >= 0 && this.m_betList[r] > this.m_setting.MaxBet;
                        r--
                      )
                        this.m_betList.splice(r);
                      (this.m_betIdx = w.GetNowBetIndex()),
                        (!this.m_betList[this.m_betIdx] ||
                          this.m_betList[this.m_betIdx] >
                            this.m_betList[this.m_betList.length - 1]) &&
                          (this.m_betIdx = this.m_betList.length - 1),
                        this.SetPrice();
                      for (
                        var s = function (t) {
                            o.m_buyBonusCells[t]
                              .getComponent(B)
                              .node.on(m.EventType.TOUCH_END, function () {
                                M.IsFeaturesDemoMode
                                  ? o.Hide()
                                  : (null == n || n(),
                                    L.Play(N.AudioClips.COMMON_BTN),
                                    o.m_isPlayingAnim ||
                                      (A.ForceChangeExtraBetMode(!1),
                                      (o.m_bonusType = t),
                                      o.Hide(),
                                      w.SetNowBet(o.m_betList[o.m_betIdx]),
                                      o.m_iGameView.ClickSpin()));
                              });
                          },
                          a = 0;
                        a < this.m_buyBonusCells.length;
                        a++
                      )
                        s(a);
                      (this.m_viewNode.active = !1),
                        i &&
                          this.m_openBtnNode &&
                          (this.m_openBtnNode.removeFromParent(),
                          M.SetGameBuyBonus(this.m_openBtnNode));
                    } else this.SetBuyBtnVisible(!1);
                  }),
                  (l.OnEvent = function (t) {
                    t === T.TriggerFreeSpin
                      ? (this.Hide(), this.SetBuyBtnVisible(!1))
                      : t === T.FreeSpinTotalWinEnd &&
                        this.SetBuyBtnVisible(!0);
                  }),
                  (l.SetPrice = function () {
                    var t = this.m_betList[this.m_betIdx];
                    this.m_currencyLabel &&
                      (N.DollarSymbol
                        ? (this.m_currencyLabel.string =
                            "(" + N.DollarSymbol + ")")
                        : (this.m_currencyLabel.node.active = !1)),
                      (this.m_betLabel.string =
                        "" +
                        N.DollarSymbol +
                        C.FormatNumberThousands(
                          t,
                          C.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                        ));
                    for (var e = 0; e < this.m_buyBonusCells.length; e++) {
                      var i = C.times(t, this.m_setting.PriceOdd[e]);
                      this.m_buyBonusCells[e].SetPrice(
                        "" +
                          N.DollarSymbol +
                          C.FormatNumberThousands(
                            i,
                            C.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                          )
                      );
                    }
                  }),
                  (l.SetBuyBtnVisible = function (t) {
                    this.m_openBtnNode.active = !!this.m_setting && t;
                  }),
                  (l.GetBuyBtnVisible = function () {
                    return this.m_openBtnNode.active;
                  }),
                  (l.GetBuyBonusBet = function () {
                    return this.m_setting && null !== this.m_bonusType
                      ? C.times(
                          this.m_setting.PriceOdd[this.m_bonusType],
                          w.GetNowBetValue()
                        )
                      : C.strip(w.GetNowBetValue());
                  }),
                  (l.CleanInfo = function () {
                    this.m_bonusType = null;
                  }),
                  (l.IsOpen = function () {
                    return this.m_viewNode.active;
                  }),
                  (l.Show = function () {
                    var t = this;
                    if (
                      !(P.Current() !== S.IDLE || N.FreeSpinRemain > 0) &&
                      !this.m_anim.getState($).isPlaying &&
                      !this.m_viewNode.active
                    ) {
                      h.stopAllByTarget(this.node),
                        (this.m_isPlayingAnim = !0),
                        L.Play(N.AudioClips.COMMON_BTN),
                        (this.m_viewNode.active = !0),
                        this.m_anim.play(Q);
                      var e = this.m_anim.getState(Q);
                      b(this.node)
                        .delay(e.duration)
                        .call(function () {
                          t.m_isPlayingAnim = !1;
                        })
                        .start();
                      var i = "-1",
                        n = 0;
                      N.APP &&
                        ((i = N.APP.GetAID()), (n = Number(N.APP.GetApiID()))),
                        N.SendBtnClickEvent(
                          Number(i),
                          n,
                          Number(N.NOW_GAME_ID),
                          this.m_iGameView.Version,
                          N.BTN_CLICK_EVENT.INGAME_BUY_BONUS,
                          0,
                          !1
                        );
                    }
                  }),
                  (l.Hide = (function () {
                    var t = s(
                      a().mark(function t() {
                        var e,
                          i,
                          n,
                          o = this;
                        return a().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    ((e = this.m_anim.getState($)),
                                    this.m_viewNode.active && !e.isPlaying)
                                  ) {
                                    t.next = 3;
                                    break;
                                  }
                                  return t.abrupt("return");
                                case 3:
                                  return (
                                    (i = this.m_anim.getState(Q)).isPlaying &&
                                      i.stop(),
                                    h.stopAllByTarget(this.node),
                                    (this.m_isPlayingAnim = !0),
                                    L.Play(N.AudioClips.COMMON_BTN),
                                    this.m_anim.play($),
                                    (e = this.m_anim.getState($)),
                                    b(this.node)
                                      .delay(i.duration)
                                      .call(function () {
                                        o.m_isPlayingAnim = !1;
                                      })
                                      .start(),
                                    (n = this.m_anim.getState($)),
                                    (t.next = 14),
                                    N.Wait(this, n.duration)
                                  );
                                case 14:
                                  this.m_viewNode.active = !1;
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
                    return function () {
                      return t.apply(this, arguments);
                    };
                  })()),
                  (l.AddBet = function () {
                    this.m_betIdx + 1 > this.m_betList.length - 1 ||
                      (L.Play(N.AudioClips.COMMON_BTN),
                      this.m_betIdx++,
                      this.SetPrice());
                  }),
                  (l.SubBet = function () {
                    this.m_betIdx - 1 < 0 ||
                      (L.Play(N.AudioClips.COMMON_BTN),
                      this.m_betIdx--,
                      this.SetPrice());
                  }),
                  r(e, [
                    {
                      key: "BonusType",
                      get: function () {
                        return this.m_bonusType;
                      },
                    },
                  ]),
                  e
                );
              })(y)).prototype,
              "m_viewNode",
              [E],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (U = e(H.prototype, "m_anim", [O], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Y = e(H.prototype, "m_openBtnNode", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (J = e(H.prototype, "m_openBtnTitle", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (K = e(H.prototype, "m_betLabel", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (j = e(H.prototype, "m_buyBonusCells", [G], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (X = e(H.prototype, "m_titleSprite", [R], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Z = e(H.prototype, "m_betSprite", [V], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (q = e(H.prototype, "m_currencyLabel", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = H))
          ) || k)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/CommonBuyBonusCell.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./index2.ts",
    "./index.ts",
    "./LocaleStringManager.ts",
    "./Define.ts",
  ],
  function (e) {
    "use strict";
    var t, i, r, n, o, l, a, u, p, c, s, m;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (r = e.initializerDefineProperty),
            (n = e.assertThisInitialized);
        },
        function (e) {
          (o = e.cclegacy),
            (l = e._decorator),
            (a = e.Sprite),
            (u = e.CCString),
            (p = e.Label),
            (c = e.Component);
        },
        null,
        null,
        function (e) {
          s = e.localeStringManager;
        },
        function (e) {
          m = e.Define;
        },
      ],
      execute: function () {
        var y, f, b, g, _, S, C, h, B, v, L;
        o._RF.push({}, "58afbgi72RCYrg3eW8ahovc", "CommonBuyBonusCell", void 0);
        var d = l.ccclass,
          F = l.property;
        e(
          "CommonBuyBonusCell",
          ((y = d("CommonBuyBonusCell")),
          (f = F({ type: a, tooltip: "購買文字" })),
          (b = F({ type: a, tooltip: "項目標題" })),
          (g = F({ type: u, tooltip: "標題圖片名稱" })),
          (_ = F({ type: p, tooltip: "金額" })),
          y(
            ((h = t(
              (C = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, o = new Array(i), l = 0;
                    l < i;
                    l++
                  )
                    o[l] = arguments[l];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    r(t, "m_buyHintSprite", h, n(t)),
                    r(t, "m_titleSprite", B, n(t)),
                    r(t, "m_titlePicName", v, n(t)),
                    r(t, "m_priceLabel", L, n(t)),
                    t
                  );
                }
                i(t, e);
                var o = t.prototype;
                return (
                  (o.start = function () {
                    var e = s.GetGameAtlas();
                    s.CurrLang !== m.Lang.EN &&
                      ((this.m_buyHintSprite.spriteFrame = e.getSpriteFrame(
                        "Txt_Buy_Feature_Buy"
                      )),
                      (this.m_titleSprite.spriteFrame = e.getSpriteFrame(
                        this.m_titlePicName
                      )));
                  }),
                  (o.SetPrice = function (e) {
                    this.m_priceLabel.string = e;
                  }),
                  t
                );
              })(c)).prototype,
              "m_buyHintSprite",
              [f],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (B = t(C.prototype, "m_titleSprite", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (v = t(C.prototype, "m_titlePicName", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "";
              },
            })),
            (L = t(C.prototype, "m_priceLabel", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = C))
          ) || S)
        );
        o._RF.pop();
      },
    };
  }
);

System.register("chunks:///_virtual/CommonEffect.ts", ["cc"], function (t) {
  "use strict";
  var s, i, e, h;
  return {
    setters: [
      function (t) {
        (s = t.cclegacy), (i = t.v3), (e = t.v2), (h = t.macro);
      },
    ],
    execute: function () {
      var n;
      t("CommonEffect", void 0),
        s._RF.push({}, "6f779uo//FP8owPSb4jjuXE", "CommonEffect", void 0),
        (function (t) {
          var s = (function () {
            function t() {}
            return (
              (t.PascalTriangleLine = function (t) {
                for (var s = [1], i = 1; i < t; i++)
                  s[i] = (s[i - 1] * (t - i)) / i;
                return s;
              }),
              (t.RangedRandom = function (t, s) {
                return (s - t) * Math.random() + t;
              }),
              (t.GetRandomRectPos = function (t, s, i) {
                var n = e(
                  (this.RangedRandom(-s.x, s.x) / 2) | 0,
                  (this.RangedRandom(-s.x, s.x) / 2) | 0
                ).rotate(i * h.RAD);
                return t.add(n);
              }),
              (t.GetRandomOvalPos = function (t, s, i) {
                var n = s.y / Math.max(1, s.x),
                  r = Math.random() * s.x * 0.5,
                  a = Math.random() * Math.PI * 2,
                  p = e(r * Math.cos(a), r * Math.sin(a) * n).rotate(i * h.RAD);
                return t.add(p);
              }),
              (t.ZoomAndFlip = function (t, s, i, h) {
                var n = Math.sin(h * Math.PI) * (s - t) + t,
                  r = Math.cos(h * Math.PI * i);
                return e(n * r, n);
              }),
              t
            );
          })();
          t.ExtendsMath = s;
          var n = (function () {
            function t(t) {
              switch (
                ((this.pts = null),
                (this.len = 0),
                (this.ptl = null),
                (this.bez = null),
                (this.len = t.length),
                0 == this.len
                  ? (t.push(i(0, 0)), t.push(i(0, 0)))
                  : 1 == this.len && t.push(i(t[0].x, t[0].y)),
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
                  (this.ptl = s.PascalTriangleLine(this.len)),
                    (this.bez = this.BezierN);
              }
            }
            var e = t.prototype;
            return (
              (e.GetPosition = function (t) {
                return this.bez.apply(this, [t]);
              }),
              (e.Bezier2 = function (t) {
                var s = 1 - t;
                return i(
                  s * this.pts[0].x + t * this.pts[1].x,
                  s * this.pts[0].y + t * this.pts[1].y
                );
              }),
              (e.Bezier3 = function (t) {
                var s = 1 - t,
                  e = [s * s, 2 * s * t, t * t];
                return i(
                  e[0] * this.pts[0].x +
                    e[1] * this.pts[1].x +
                    e[2] * this.pts[2].x,
                  e[0] * this.pts[0].y +
                    e[1] * this.pts[1].y +
                    e[2] * this.pts[2].y
                );
              }),
              (e.Bezier4 = function (t) {
                var s = 1 - t,
                  e = [s * s * s, 3 * s * s * t, 3 * s * t * t, t * t * t];
                return i(
                  e[0] * this.pts[0].x +
                    e[1] * this.pts[1].x +
                    e[2] * this.pts[2].x +
                    e[3] * this.pts[3].x,
                  e[0] * this.pts[0].y +
                    e[1] * this.pts[1].y +
                    e[2] * this.pts[2].y +
                    e[3] * this.pts[3].y
                );
              }),
              (e.Bezier5 = function (t) {
                var s = 1 - t,
                  e = [
                    s * s * s * s,
                    4 * s * s * s * t,
                    6 * s * s * t * t,
                    4 * s * t * t * t,
                    t * t * t * t,
                  ];
                return i(
                  e[0] * this.pts[0].x +
                    e[1] * this.pts[1].x +
                    e[2] * this.pts[2].x +
                    e[3] * this.pts[3].x +
                    e[4] * this.pts[4].x,
                  e[0] * this.pts[0].y +
                    e[1] * this.pts[1].y +
                    e[2] * this.pts[2].y +
                    e[3] * this.pts[3].y +
                    e[4] * this.pts[4].y
                );
              }),
              (e.Bezier6 = function (t) {
                var s = 1 - t,
                  e = [
                    s * s * s * s * s,
                    5 * s * s * s * s * t,
                    10 * s * s * s * t * t,
                    10 * s * s * t * t * t,
                    5 * s * t * t * t * t,
                    t * t * t * t * t,
                  ];
                return i(
                  e[0] * this.pts[0].x +
                    e[1] * this.pts[1].x +
                    e[2] * this.pts[2].x +
                    e[3] * this.pts[3].x +
                    e[4] * this.pts[4].x +
                    e[5] * this.pts[5].x,
                  e[0] * this.pts[0].y +
                    e[1] * this.pts[1].y +
                    e[2] * this.pts[2].y +
                    e[3] * this.pts[3].y +
                    e[4] * this.pts[4].y +
                    e[5] * this.pts[5].y
                );
              }),
              (e.BezierN = function (t) {
                for (var s = 1 - t, e = i(0, 0), h = 0; h < this.len; h++) {
                  for (var n = 1, r = 0; r < this.len - h - 1; r++) n *= s;
                  for (var a = 0; a < h; a++) n *= t;
                  (e.x += n * this.ptl[h] * this.pts[h].x),
                    (e.y += n * this.ptl[h] * this.pts[h].y);
                }
                return e;
              }),
              t
            );
          })();
          t.Bezier = n;
        })(n || (n = t("CommonEffect", {}))),
        s._RF.pop();
    },
  };
});

System.register(
  "chunks:///_virtual/CommonGameManager.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./index4.ts"],
  function (e) {
    "use strict";
    var t, n, o;
    return {
      setters: [
        function (e) {
          t = e.createClass;
        },
        function (e) {
          n = e.cclegacy;
        },
        function (e) {
          o = e.Astarte;
        },
      ],
      execute: function () {
        var r, u;
        e({
          ErrorHandleType: void 0,
          RequestMethod: void 0,
          UpdateCommonGame: function () {
            e("commonGameManager", o.CommonGame);
          },
          commonGameManager: void 0,
        }),
          n._RF.push(
            {},
            "810fcmXyb9Bu4OzTZmIkoz9",
            "CommonGameManager",
            void 0
          ),
          (function (e) {
            (e[(e.Get = 0)] = "Get"), (e[(e.Post = 1)] = "Post");
          })(r || (r = e("RequestMethod", {}))),
          (function (e) {
            (e[(e.Ignore = 0)] = "Ignore"), (e[(e.Handle = 1)] = "Handle");
          })(u || (u = e("ErrorHandleType", {})));
        e(
          "ProtocolData",
          (function () {
            function e() {
              (this.method = r.Post),
                (this.url = ""),
                (this.type = u.Ignore),
                (this.reqData = null),
                (this.info = null);
            }
            return (
              t(e, [
                {
                  key: "Type",
                  get: function () {
                    return this.type;
                  },
                },
                {
                  key: "Method",
                  get: function () {
                    return this.method;
                  },
                },
                {
                  key: "URL",
                  get: function () {
                    return this.url;
                  },
                },
              ]),
              e
            );
          })()
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ConnectionManager.ts",
  ["cc", "./index4.ts"],
  function (n) {
    "use strict";
    var t, e;
    return {
      setters: [
        function (n) {
          t = n.cclegacy;
        },
        function (n) {
          e = n.Astarte;
        },
      ],
      execute: function () {
        var o, T;
        n({
          CONNECT_TYPE: void 0,
          ConnectionManager: void 0,
          HTTP_METHOD: void 0,
          UpdateConnectionManager: function () {
            n("ConnectionManager", e.ConnectionManager);
          },
        }),
          t._RF.push(
            {},
            "74f7dljUZhO+6o0Pu2tNSAk",
            "ConnectionManager",
            void 0
          ),
          (function (n) {
            (n[(n.TYPE_HTTP = 1)] = "TYPE_HTTP"),
              (n[(n.TYPE_WEBSOCKET = 2)] = "TYPE_WEBSOCKET"),
              (n[(n.MAX = 3)] = "MAX");
          })(o || (o = n("CONNECT_TYPE", {}))),
          (function (n) {
            (n.TYPE_GET = "get"), (n.TYPE_POST = "post");
          })(T || (T = n("HTTP_METHOD", {}))),
          t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DailyMissionManager.ts",
  ["cc", "./index4.ts"],
  function (i) {
    "use strict";
    var n, s;
    return {
      setters: [
        function (i) {
          n = i.cclegacy;
        },
        function (i) {
          s = i.Astarte;
        },
      ],
      execute: function () {
        i({
          UpdateDailyMission: function () {
            i("missionManager", s.DailyMission);
          },
          missionManager: void 0,
        }),
          n._RF.push(
            {},
            "0e324Erw0JDW6aCYO5d0i2g",
            "DailyMissionManager",
            void 0
          ),
          n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DebrisManager.ts",
  ["cc", "./index4.ts"],
  function (e) {
    "use strict";
    var r, t;
    return {
      setters: [
        function (e) {
          r = e.cclegacy;
        },
        function (e) {
          t = e.Astarte;
        },
      ],
      execute: function () {
        e({
          UpdateDebris: function () {
            e("debrisManager", t.Debris);
          },
          debrisManager: void 0,
        }),
          r._RF.push({}, "dd020H2ox5CQ70Z9VNWXYpK", "DebrisManager", void 0),
          r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Define.ts",
  ["cc", "./index4.ts"],
  function (E) {
    "use strict";
    var _, S;
    return {
      setters: [
        function (E) {
          _ = E.cclegacy;
        },
        function (E) {
          S = E.Astarte;
        },
      ],
      execute: function () {
        var e, C;
        E({
          CommonState: void 0,
          Define: void 0,
          UpdateDefine: function () {
            E("Define", S.Define);
          },
        }),
          _._RF.push({}, "de32cbzFmBN4rL/N8DkMkAD", "Define", void 0),
          (function (E) {
            (E[(E.NORMAL = 0)] = "NORMAL"), (E[(E.USING = 1)] = "USING");
          })(e || (e = {})),
          (function (E) {
            (E[(E.GAME_CLOSE = 1e3)] = "GAME_CLOSE"),
              (E[(E.LOGIN = 1001)] = "LOGIN"),
              (E[(E.WAIT_RES = 1002)] = "WAIT_RES"),
              (E[(E.CHECK_UNSHOW = 1003)] = "CHECK_UNSHOW"),
              (E[(E.CHECK_FREESPIN = 1004)] = "CHECK_FREESPIN"),
              (E[(E.IDLE = 1005)] = "IDLE"),
              (E[(E.SPIN_REQ = 1006)] = "SPIN_REQ"),
              (E[(E.SPIN = 1007)] = "SPIN"),
              (E[(E.COMMON_SHOW = 1008)] = "COMMON_SHOW"),
              (E[(E.MHB_SHOW = 1009)] = "MHB_SHOW"),
              (E[(E.JP_SHOW = 1010)] = "JP_SHOW"),
              (E[(E.CHECK_STATE = 1011)] = "CHECK_STATE"),
              (E[(E.END = 1012)] = "END"),
              (E[(E.FREESPIN_WAIT_RES = 1013)] = "FREESPIN_WAIT_RES"),
              (E[(E.TURBO = 1014)] = "TURBO"),
              (E[(E.FIRST_IN_GAME = 1015)] = "FIRST_IN_GAME"),
              (E[(E.CHECK_APP_REWARD = 1016)] = "CHECK_APP_REWARD"),
              (E[(E.CHECK_BUFF = 1017)] = "CHECK_BUFF"),
              (E[(E.ACTIVATE_BUFF = 1018)] = "ACTIVATE_BUFF"),
              (E[(E.END_BUFF = 1019)] = "END_BUFF"),
              (E[(E.GRAND_JP = 1020)] = "GRAND_JP");
          })(C || (C = E("CommonState", {}))),
          _._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/EffectView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./EvtReceiver.ts",
    "./index.ts",
    "./index2.ts",
    "./LoadPrefabManager.ts",
    "./Define.ts",
    "./Tools.ts",
    "./NewBottomBarManager.ts",
    "./SoundManager.ts",
  ],
  function (e) {
    "use strict";
    var i, n, t, o, _, a, l, m, s, c, d, E, f, u, r, T, N, h, C, O, F, A;
    return {
      setters: [
        function (e) {
          (i = e.inheritsLoose), (n = e.createClass);
        },
        function (e) {
          (t = e.cclegacy),
            (o = e.error),
            (_ = e.instantiate),
            (a = e.Animation),
            (l = e.AnimationClip),
            (m = e.tween),
            (s = e.v3),
            (c = e.log),
            (d = e.Label),
            (E = e.ParticleSystem2D),
            (f = e.Vec2),
            (u = e.TweenSystem),
            (r = e.Enum),
            (T = e.Node);
        },
        function (e) {
          N = e.default;
        },
        null,
        null,
        function (e) {
          h = e.LoadPrefabManager;
        },
        function (e) {
          C = e.Define;
        },
        function (e) {
          O = e.tools;
        },
        function (e) {
          F = e.newBottombarManager;
        },
        function (e) {
          A = e.soundManager;
        },
      ],
      execute: function () {
        var I;
        t._RF.push({}, "bc3c97zP8pM2I5NAob2S72W", "EffectView", void 0);
        var R = e(
          "default",
          (function (e) {
            function t() {
              var i;
              return (
                ((i = e.call(this) || this).m_awardBoardFile =
                  t.EFFECT_ROOT + "win/awardBoard"),
                (i.m_effectList = {}),
                (i.m_timeLineList = {}),
                (i.m_winEffCbFunc = null),
                (i.m_currentWinEffect = null),
                (i.m_currentWinEffectTimeline = null),
                (i.m_awardBoard = null),
                (i.m_awardBoardTimeline = null),
                (i.m_txtWinValue = null),
                (i.m_durRollMoneyTick = t.MONEY_ROLL_TIME),
                (i.m_moneyRealValue = 0),
                (i.m_moneyRollValue = 0),
                (i.m_bgMaskNode = null),
                (i.m_commonGetCoinCbFunc = null),
                (i.m_commonGetCoinMidCbFunc = null),
                (i.m_commonGetCoinEff = null),
                (i.m_commonGetCoinTline = null),
                (i.m_updateMoneyEff = null),
                (i.m_updateMoneyTline = null),
                (i.m_getCoinParticle = null),
                (i.m_odds = [3, 5, 10, 20, 30]),
                (i.m_winEffectFiles = [
                  null,
                  null,
                  t.EFFECT_ROOT + t.FILE_PATH.BIG_WIN,
                  t.EFFECT_ROOT + t.FILE_PATH.MEGA_WIN,
                  t.EFFECT_ROOT + t.FILE_PATH.SUPER_WIN,
                ]),
                (i.m_coinEffects = [2, 3, 5, 5, 5]),
                (i.m_coinTimes = [2, 2, 5, 5, 5]),
                (i.m_soundNameByOdds = []),
                (i.m_isAutoCheckFloat = !1),
                (i.m_rotateCoins = {}),
                (i.m_coinEffectNode = void 0),
                (i.m_loadedSound = void 0),
                (i.m_isLandscape = !1),
                (i.m_LandscapeRate = 1),
                (i.m_winType = void 0),
                (i.m_nowPlaySoundID = null),
                (i.m_loadedSound = !1),
                i
              );
            }
            i(t, e);
            var r = t.prototype;
            return (
              (r.LoadSound = function () {
                this.m_loadedSound = !0;
              }),
              (r.OnUpdate = function (e) {
                this.RollWinMoney(e);
              }),
              (r.ShowWinAndCoinEffect = function (e, i, n) {
                void 0 === n && (n = null), (n = n || null);
                var t = h.GetManagerId(n);
                this.ShowWinEffect(e, t),
                  (void 0 !== e.playCoinAtWinEffect &&
                    !0 !== e.playCoinAtWinEffect) ||
                    this.playCoinEffect(i, t),
                  h.StartLoad(t);
              }),
              (r.ShowWinEffect = function (e, i) {
                var n = this;
                void 0 === i && (i = -1);
                var d = e.effectFile,
                  E = e.winValue,
                  f = e.cbFunc,
                  u = e.yPos,
                  r = e.deltaY,
                  T = e.cbFuncBtoM,
                  F = e.cbFuncMtoS,
                  A = e.cbFuncPlaying,
                  I = e.isLoop || !1,
                  R = e.rollTime;
                if (null != E) {
                  var M = function () {
                      n.m_bgMaskNode && (n.m_bgMaskNode.active = !0),
                        c("LoadPrefabManager CB", E),
                        (u = (null != u && u) || t.DEFAULT_Y),
                        n.m_effectList[d].setPosition(
                          s(t.DesignSize.width / 2, u)
                        ),
                        (n.m_effectList[d].active = !0),
                        n.m_timeLineList[d].play(t.ANI_LABEL.ACT),
                        (n.m_currentWinEffect = n.m_effectList[d]),
                        (n.m_currentWinEffectTimeline = n.m_timeLineList[d]),
                        (n.m_currentWinEffectTimeline.name = d),
                        (r =
                          d == t.FILE_PATH.JACKPOT ? 180 : null != r ? r : 230),
                        n.m_awardBoard.setPosition(
                          s(t.DesignSize.width / 2, u - r)
                        ),
                        (n.m_awardBoard.active = !0),
                        n.m_awardBoardTimeline.play(t.ANI_LABEL.ACT),
                        n.SetWinValue(E, R),
                        null == A || A();
                    },
                    L = i;
                  -1 == i && (L = h.GetManagerId(M)),
                    (this.m_winEffCbFunc = f),
                    null == this.m_effectList[d]
                      ? (h.AddLoad(L),
                        C.GameBundle.load(d, function (e, i) {
                          if (e) o(e.message || e);
                          else {
                            var E = _(i);
                            (E.active = !1),
                              n.addChild(E),
                              O.SetZIndex(E, t.EFF_ZORDER.WIN_EFFECT);
                            var f = E.getComponent(a);
                            N.Pack(E, function (e) {
                              if (e == t.ANI_FRAME_EVENT.ENDING)
                                n.m_awardBoard &&
                                  n.m_awardBoard.active &&
                                  n.m_awardBoardTimeline.play(
                                    t.ANI_LABEL.ENDING
                                  );
                              else if (e == t.ANI_FRAME_EVENT.LOOP) {
                                if (I)
                                  f.play(t.ANI_LABEL.LOOP),
                                    (f.getState(t.ANI_LABEL.LOOP).wrapMode =
                                      l.WrapMode.Loop);
                              } else
                                e == t.ANI_FRAME_EVENT.B_TO_M
                                  ? (n.m_awardBoard &&
                                      n.m_awardBoard.active &&
                                      m(n.m_txtWinValue)
                                        .by(0.25, { scale: s(1.5, 1.5, 1.5) })
                                        .by(0.1, { scale: s(0.9, 0.9, 0.9) })
                                        .start(),
                                    T && T())
                                  : e == t.ANI_FRAME_EVENT.M_TO_S
                                  ? (n.m_awardBoard &&
                                      n.m_awardBoard.active &&
                                      m(n.m_txtWinValue)
                                        .by(0.25, { scale: s(1.5, 1.5, 1.5) })
                                        .by(0.1, { scale: s(0.9, 0.9, 0.9) })
                                        .start(),
                                    null == F || F())
                                  : e == t.ANI_FRAME_EVENT.END &&
                                    (c("ANI_FRAME_EVENT.END"),
                                    n.OnAnimationEnd(),
                                    n.m_winEffCbFunc && n.m_winEffCbFunc());
                            }),
                              (E.active = !1),
                              (n.m_effectList[d] = E),
                              (n.m_timeLineList[d] = f),
                              h.OnLoaded(L);
                          }
                        }),
                        null == this.m_awardBoard &&
                          (h.AddLoad(L),
                          C.GameBundle.load(
                            this.m_awardBoardFile,
                            function (e, i) {
                              e
                                ? o(e.message || e)
                                : ((n.m_awardBoard = _(i)),
                                  n.addChild(n.m_awardBoard),
                                  O.SetZIndex(
                                    n.m_awardBoard,
                                    t.EFF_ZORDER.AWARD_BOARD
                                  ),
                                  (n.m_awardBoard.active = !1),
                                  (n.m_awardBoardTimeline =
                                    n.m_awardBoard.getComponent(a)),
                                  (n.m_txtWinValue =
                                    n.m_awardBoard.getChildByName(
                                      "win_value_label"
                                    )),
                                  h.OnLoaded(L));
                            }
                          )),
                        -1 == i ? h.StartLoad(L) : h.AddOnLoadedCallback(L, M))
                      : -1 == i
                      ? M()
                      : h.AddOnLoadedCallback(L, M);
                } else
                  this.m_awardBoard &&
                    ((this.m_awardBoard.active = !1),
                    this.m_awardBoardTimeline.stop());
              }),
              (r.WinEffect = function () {
                this.m_currentWinEffectTimeline &&
                  this.m_currentWinEffectTimeline.play(t.ANI_LABEL.ENDING, !1);
              }),
              (r.SetWinValue = function (e, i, n) {
                void 0 === i && (i = null),
                  void 0 === n && (n = 0),
                  (this.m_moneyRealValue = O.strip(e)),
                  (this.m_moneyRollValue = n),
                  (i = (null == i && t.MONEY_ROLL_TIME) || i),
                  (this.m_durRollMoneyTick = O.strip(i));
              }),
              (r.RollWinMoney = function (e) {
                if (
                  ((this.m_moneyRealValue = O.strip(this.m_moneyRealValue)),
                  (this.m_moneyRollValue = O.strip(this.m_moneyRollValue)),
                  this.m_moneyRollValue < this.m_moneyRealValue)
                ) {
                  var i = O.divide(this.m_durRollMoneyTick, O.strip(e)),
                    n = O.divide(
                      O.strip(this.m_moneyRealValue - this.m_moneyRollValue),
                      i
                    ),
                    t = O.FORMAT_NUMBER_TYPE.DEFINE_DOT;
                  this.m_isAutoCheckFloat &&
                    (t =
                      this.m_moneyRealValue.toString().indexOf(".") > -1
                        ? O.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                        : O.FORMAT_NUMBER_TYPE.NONE_DOT),
                    (this.m_moneyRollValue = O.strip(
                      this.m_moneyRollValue + n
                    )),
                    this.m_moneyRollValue > this.m_moneyRealValue &&
                      (this.m_moneyRollValue = this.m_moneyRealValue),
                    this.SetLabelString(
                      this.m_txtWinValue,
                      this.m_moneyRollValue,
                      t
                    ),
                    (this.m_durRollMoneyTick = O.strip(
                      this.m_durRollMoneyTick - e
                    ));
                }
              }),
              (r.SetLabelString = function (e, i, n) {
                void 0 === n && (n = null);
                var t = e.getComponent(d);
                if (null != t && null != t) {
                  if (null == n || null == n) t.string = i.toString();
                  else {
                    var o;
                    if ("number" == typeof i) o = i;
                    else {
                      var _ = i.replace(/,/g, "");
                      o = isNaN(Number(_)) ? 0 : Number(_);
                    }
                    t.string = O.FormatNumberThousands(o, n);
                  }
                  O.SetFont(t);
                } else c("Warning!!!!!!!!!! SetLabelString: ", e);
              }),
              (r.SetWinMoneyToMax = function () {}),
              (r.IsRollMoneyEnd = function () {
                return this.m_moneyRollValue == this.m_moneyRealValue;
              }),
              (r.StopAnimation = function (e) {
                this.m_currentWinEffectTimeline &&
                  this.m_currentWinEffectTimeline.stop(),
                  this.m_awardBoard &&
                    ((this.m_awardBoard.active = !1),
                    this.m_awardBoardTimeline.stop()),
                  1 != e && this.m_winEffCbFunc && this.m_winEffCbFunc(),
                  (this.m_winEffCbFunc = null),
                  this.OnAnimationEnd();
              }),
              (r.OnAnimationEnd = function () {
                this.m_currentWinEffect &&
                  (this.m_currentWinEffect.active = !1),
                  this.m_bgMaskNode && (this.m_bgMaskNode.active = !1),
                  (this.m_moneyRealValue = 0),
                  (this.m_moneyRollValue = 0);
              }),
              (r.playCoinEffect = function (e, i) {
                var n = this;
                if ((void 0 === i && (i = -1), C.CommonBundle)) {
                  var a = e.level,
                    l = e.position,
                    d = e.time;
                  null == d && (d = 0);
                  var E = e.zOrder;
                  null == E && (E = 0);
                  var f = e.parent;
                  this.stopCoinEffectImmly();
                  var u = t.COIN_EFFECT_LIST[a];
                  if ((u = O.GetFilePath(u))) {
                    c("~~~~~~~~~~~~~~~~~~~~~~", e, d, E);
                    var r = function () {
                      n.m_coinEffectNode.setPosition(s(l.x, l.y)),
                        null == f || null == f
                          ? (n.addChild(n.m_coinEffectNode),
                            O.SetZIndex(n.m_coinEffectNode, 0))
                          : (f.addChild(n.m_coinEffectNode),
                            O.SetZIndex(n.m_coinEffectNode, E)),
                        0 != d &&
                          m(n)
                            .delay(d)
                            .call(function () {
                              n.stopCoinEffect();
                            })
                            .start();
                    };
                    -1 != i && (h.AddOnLoadedCallback(i, r), h.AddLoad(i)),
                      C.CommonBundle.load(u, function (e, t) {
                        c("LoadRes ", u),
                          e
                            ? o(e.message || e)
                            : ((n.m_coinEffectNode = _(t)),
                              n.m_coinEffectNode
                                ? -1 == i
                                  ? r()
                                  : h.OnLoaded(i)
                                : c(
                                    "SlotBottomBarView.playCoinEffect m_coinEffect is null"
                                  ));
                      });
                  }
                }
              }),
              (r.stopCoinEffectImmly = function () {
                null != this.m_coinEffectNode &&
                  this.m_coinEffectNode.removeFromParent &&
                  (this.m_coinEffectNode.removeFromParent(),
                  (this.m_coinEffectNode = null));
              }),
              (r.stopCoinEffect = function () {
                if (null != this.m_coinEffectNode && this.m_coinEffectNode) {
                  var e = this.m_coinEffectNode
                      .getChildByName("Particle_1")
                      .getComponent(E),
                    i = this.m_coinEffectNode
                      .getChildByName("Particle_2")
                      .getComponent(E);
                  e && e.stopSystem(), i && i.stopSystem();
                }
              }),
              (r.ShowCommonEffect = function (e, i, n, o) {
                void 0 === n && (n = null),
                  void 0 === o && (o = null),
                  (n = n || {}),
                  (o = o || {});
                var _ = new f(t.DesignSize.width / 2, t.DesignSize.height),
                  a = new f(t.DesignSize.width / 2 - 10, 145),
                  l = void 0,
                  m = e / i;
                F && (e = F.GetDisplayValue(e));
                for (var s = this.m_odds.length - 1; s >= 0; s--)
                  if (m >= this.m_odds[s]) {
                    (o.level = this.m_coinEffects[s]),
                      5 == this.m_coinEffects[s]
                        ? (o.position = o.position ? o.position : _)
                        : (o.position = o.smallPosition
                            ? o.smallPosition
                            : o.position
                            ? o.position
                            : a),
                      (null == o.time || o.time <= 0) &&
                        (o.time = this.m_coinTimes[s]),
                      5 == this.m_coinEffects[s]
                        ? ((n.effectFile = this.m_winEffectFiles[s]),
                          (n.winValue = e),
                          this.SetWinType(s),
                          this.ShowWinAndCoinEffect(n, o))
                        : this.playCoinEffect(o),
                      (l = this.m_soundNameByOdds[s]);
                    break;
                  }
                return (
                  null != l && (this.m_nowPlaySoundID = A.Play(l, !1)),
                  null == o.time && (o.time = 0),
                  o.time
                );
              }),
              (r.SkipEffect = function () {
                if (
                  (this.stopCoinEffect(),
                  u.instance.ActionManager.removeAllActionsFromTarget(this),
                  this.m_currentWinEffectTimeline)
                ) {
                  var e = this.m_currentWinEffectTimeline.name,
                    i = O.FORMAT_NUMBER_TYPE.DEFINE_DOT;
                  (e != t.FILE_PATH.BIG_WIN &&
                    e != t.FILE_PATH.MEGA_WIN &&
                    e != t.FILE_PATH.SUPER_WIN) ||
                    ((this.m_moneyRollValue = O.strip(this.m_moneyRollValue)),
                    (this.m_moneyRealValue = O.strip(this.m_moneyRealValue)),
                    this.m_moneyRollValue == this.m_moneyRealValue
                      ? (this.m_awardBoardTimeline.play(t.ANI_LABEL.ENDING),
                        this.m_currentWinEffectTimeline.setCurrentTime(5))
                      : (this.m_isAutoCheckFloat &&
                          (i =
                            this.m_moneyRealValue.toString().indexOf(".") > -1
                              ? O.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                              : O.FORMAT_NUMBER_TYPE.NONE_DOT),
                        this.SetLabelString(
                          this.m_txtWinValue,
                          this.m_moneyRealValue,
                          i
                        ),
                        this.m_currentWinEffectTimeline.setCurrentTime(3.8)),
                    (this.m_currentWinEffectTimeline = null)),
                    (this.m_moneyRollValue = this.m_moneyRealValue);
                }
              }),
              (r.SkipEffectSound = function () {
                this.m_nowPlaySoundID &&
                  (A.Stop(this.m_nowPlaySoundID),
                  (this.m_nowPlaySoundID = null));
              }),
              (r.SetAutoCheckFloat = function (e) {
                this.m_isAutoCheckFloat = e;
              }),
              (r.SetOdds = function (e) {
                this.m_odds = e;
              }),
              (r.SetWinEffectFiles = function (e) {
                this.m_winEffectFiles = e;
              }),
              (r.SetAwardBoardFile = function (e) {
                this.m_awardBoardFile = e;
              }),
              (r.SetEffectLevels = function (e) {
                this.m_coinEffects = e;
              }),
              (r.SetEffectTimes = function (e) {
                this.m_coinTimes = e;
              }),
              (r.SetSoundNameByOdds = function (e) {
                this.m_soundNameByOdds = e;
              }),
              (r.SetBGMaskNode = function (e) {
                null != e && (this.m_bgMaskNode = e);
              }),
              (r.SetWinTextFontSize = function (e) {
                this.m_txtWinValue &&
                  (this.m_txtWinValue.getComponent(d).fontSize = e);
              }),
              (r.SetWinType = function (e) {
                this.m_winType = e;
              }),
              n(t, [
                {
                  key: "CoinEffectNode",
                  set: function (e) {
                    this.m_coinEffectNode = e;
                  },
                },
              ]),
              t
            );
          })(T)
        );
        (R.DesignSize = { width: 1136, height: 640 }),
          (R.SOUND_FILE = {
            COMMON_SUPER_WIN: null,
            COMMON_MEGA_WIN: null,
            COMMON_COIN_SMALL: null,
            COMMON_COIN_MEDIUM: null,
            COMMON_BIG_WIN: null,
          }),
          (R.EFFECT_ROOT = "Astt/%s/effect/GameCommonEffect/"),
          (R.FILE_PATH = {
            BIG_WIN: "win/big_anim",
            MEGA_WIN: "win/mega_anim",
            SUPER_WIN: "win/super_anim",
            JACKPOT: "win/effect_Jackpot",
            BIG_TO_MEGA_WIN: "win/bigToMega_anim",
            BIG_TO_SUPER_WIN: "win/bigToSuper_anim",
            FIVE_OF_A_KIND: "win/5ofa_anim",
          }),
          (R.WIN_EFFECT_SOUND_NAME =
            (((I = {})[R.FILE_PATH.BIG_WIN] = "Common_big_win"),
            (I[R.FILE_PATH.MEGA_WIN] = "Common_mega_win"),
            (I[R.FILE_PATH.SUPER_WIN] = "Common_super_win"),
            (I[R.FILE_PATH.JACKPOT] = "Common_JP_win"),
            (I[R.FILE_PATH.BIG_TO_MEGA_WIN] = "Common_big_win"),
            (I[R.FILE_PATH.BIG_TO_SUPER_WIN] = "Common_big_win"),
            (I[R.FILE_PATH.FIVE_OF_A_KIND] = "Common_big_win"),
            I)),
          (R.EffectViewUIName = r({
            TXT_WIN_MONEY: "label_final_value",
            PARTICLE: "Particle_",
          })),
          (R.DEFAULT_Y = 400),
          (R.PARTICLE_AMOUNT_MAX = 2),
          (R.MONEY_ROLL_TIME = 3),
          (R.UPDATE_MONEY_CSB =
            R.EFFECT_ROOT + "common_get_coin/Node_GetCoin01.csb"),
          (R.COMMON_GET_COIN_CSB =
            R.EFFECT_ROOT + "common_get_coin/Node_GetCoin02.csb"),
          (R.GET_COIN_PARTICLE_CSB =
            R.EFFECT_ROOT + "common_get_coin/Particle/_V3_GetCoin02.plist"),
          (R.ROTATE_COIN_CSB =
            R.EFFECT_ROOT + "common_get_coin/Node_CoinRotation01.csb"),
          (R.TRIAL_COIN_CSB =
            R.EFFECT_ROOT + "common_get_coin/Node_GetTrialCoin.csb"),
          (R.COIN_APPEAR_PARTICLE_CSB =
            R.EFFECT_ROOT + "common_get_coin/Particle/New_CoinShine03.plist"),
          (R.COMMON_COIN_AMOUNT = 8),
          (R.ANI_LABEL = { ACT: "main", LOOP: "loop", ENDING: "ending" }),
          (R.ANI_FRAME_EVENT = {
            MID: "AniMid",
            B_TO_M: "AniBtoM",
            M_TO_S: "AniMtoS",
            ENDING: "AniEnding",
            END: "AniEnd",
            LOOP: "AniLoop",
          }),
          (R.EFF_ZORDER = {
            COIN_FALL: 1,
            WIN_EFFECT: 2,
            AWARD_BOARD: 3,
            COMMON_GET_COIN: 4,
            GET_TRIAL_COIN: 5,
          }),
          (R.COIN_EFFECT_LIST = {
            1: R.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_1",
            2: R.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_2",
            3: R.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_3",
            4: R.EFFECT_ROOT + "coin/2_BigGoldCoinFX_1",
            5: R.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_1",
            6: R.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_2",
            7: R.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_3",
          }),
          (R.WIN_TYPE = { BIG: 2, MEGA: 3, SUPER: 4 }),
          t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/EventManager.ts",
  ["cc", "./index4.ts"],
  function (e) {
    "use strict";
    var t, n;
    return {
      setters: [
        function (e) {
          t = e.cclegacy;
        },
        function (e) {
          n = e.Astarte;
        },
      ],
      execute: function () {
        e({
          UpdateEventManager: function () {
            e("eventManager", n.EventManager);
          },
          eventManager: void 0,
        }),
          t._RF.push({}, "50f8dtxxuFDo6qJW6FBFBaO", "EventManager", void 0);
        e("CommonEventName", {
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
        t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/EvtReceiver.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    "use strict";
    var c, e, n, a, o;
    return {
      setters: [
        function (t) {
          c = t.inheritsLoose;
        },
        function (t) {
          (e = t.cclegacy), (n = t._decorator), (a = t.log), (o = t.Component);
        },
      ],
      execute: function () {
        var i;
        e._RF.push({}, "9cd57oopkhBmZJ5o4EZK1tk", "EvtReceiver", void 0);
        var l = n.ccclass;
        t(
          "default",
          l(
            (i = (function (t) {
              function e() {
                for (
                  var c, e = arguments.length, n = new Array(e), a = 0;
                  a < e;
                  a++
                )
                  n[a] = arguments[a];
                return (
                  ((c = t.call.apply(t, [this].concat(n)) || this).m_callback =
                    void 0),
                  c
                );
              }
              c(e, t),
                (e.Pack = function (t, c) {
                  t.addComponent(e), t.getComponent(e).SetCallback(c);
                });
              var n = e.prototype;
              return (
                (n.EvtReciever = function (t) {
                  a("AnimEvtReciever: ", t),
                    this.m_callback
                      ? this.m_callback(t)
                      : a("callback沒有設定，無法處理event: ", t);
                }),
                (n.triggerAnimationEvent = function (t) {
                  a("triggerAnimationEvent: ", t),
                    this.m_callback
                      ? this.m_callback(t)
                      : a("callback沒有設定，無法處理event: ", t);
                }),
                (n.SetCallback = function (t) {
                  this.m_callback = t;
                }),
                (n.onDestroy = function () {
                  this.m_callback = null;
                }),
                e
              );
            })(o))
          ) || i
        );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ExtraBetComponent.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./index2.ts",
    "./index.ts",
    "./LocaleStringManager.ts",
    "./ExtraBetController.ts",
    "./SoundManager.ts",
    "./Define.ts",
    "./MsgBoxManager.ts",
    "./StateManager.ts",
    "./BuyBonusManager.ts",
    "./NewExtraManager.ts",
    "./NewBottomBarManager.ts",
  ],
  function (t) {
    "use strict";
    var e,
      n,
      i,
      a,
      r,
      o,
      s,
      u,
      m,
      l,
      _,
      h,
      B,
      c,
      x,
      p,
      E,
      f,
      g,
      S,
      d,
      y,
      C,
      b,
      N,
      w,
      v,
      A;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (a = t.assertThisInitialized),
            (r = t.asyncToGenerator),
            (o = t.createClass),
            (s = t.regeneratorRuntime);
        },
        function (t) {
          (u = t.cclegacy),
            (m = t._decorator),
            (l = t.Node),
            (_ = t.Button),
            (h = t.Label),
            (B = t.Sprite),
            (c = t.log),
            (x = t.Animation),
            (p = t.AnimationClip),
            (E = t.Component);
        },
        null,
        null,
        function (t) {
          f = t.localeStringManager;
        },
        function (t) {
          g = t.extraBetController;
        },
        function (t) {
          S = t.soundManager;
        },
        function (t) {
          (d = t.Define), (y = t.CommonState);
        },
        function (t) {
          C = t.msgBoxManager;
        },
        function (t) {
          b = t.stateManager;
        },
        function (t) {
          N = t.buyBonusManager;
        },
        function (t) {
          w = t.newExtraManager;
        },
        function (t) {
          (v = t.newBottombarManager), (A = t.SlotBottomBarState);
        },
      ],
      execute: function () {
        var I, M, T, P, k, F, L, D, O, H, R, z, G, U, K, W, Q, Y;
        u._RF.push({}, "a4b83idlNlHcZQFqX6vJhFz", "ExtraBetComponent", void 0);
        var X = m.ccclass,
          j = m.property,
          q = 0,
          J = 1;
        t(
          "default",
          ((I = j({ type: l, tooltip: "EX 按鈕最頂層節點(整顆node)" })),
          (M = j({ type: _, tooltip: "EX 按鈕" })),
          (T = j({ type: _, tooltip: "按鈕ON" })),
          (P = j({ type: _, tooltip: "按鈕OFF" })),
          (k = j({ type: _, tooltip: "提示問號按鈕" })),
          (F = j({ type: l, tooltip: "提示文字tip面板" })),
          (L = j({ type: h, tooltip: "功能說明文字串Label" })),
          (D = j({ type: B, tooltip: "本體ExtraBet文字圖片" })),
          X(
            ((R = e(
              (H = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, r = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    r[o] = arguments[o];
                  return (
                    (e = t.call.apply(t, [this].concat(r)) || this),
                    i(e, "m_multiExtraBetNode", R, a(e)),
                    i(e, "m_multiBtn", z, a(e)),
                    i(e, "m_multiBtn_on", G, a(e)),
                    i(e, "m_multiBtn_off", U, a(e)),
                    i(e, "m_multiBtn_TipQuesMark", K, a(e)),
                    i(e, "m_multiBtn_Tip", W, a(e)),
                    i(e, "m_multiBtn_Description", Q, a(e)),
                    i(e, "m_Txt_Extra_Bet", Y, a(e)),
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
                n(e, t);
                var u = e.prototype;
                return (
                  (u.Init = function (t, e, n, i, a) {
                    void 0 === i && (i = !1),
                      void 0 === a && (a = !1),
                      (this.m_triggerCb = t),
                      (this.m_isTwoStep = i),
                      this.m_multiBtn_Description &&
                        this.m_Txt_Extra_Bet &&
                        (c(" localeStringManager.CurrLang : " + f.CurrLang),
                        (this.m_multiBtn_Description.string = f.GetString(e)),
                        (this.m_Txt_Extra_Bet.spriteFrame = f
                          .GetGameAtlas()
                          .getSpriteFrame(n))),
                      g.Init(
                        a ? null : this.node,
                        this.ForceSetExtraBet.bind(this)
                      );
                  }),
                  (u.onLoad = function () {
                    var t = this;
                    c("ExtraBet onLoad"),
                      this.m_multiBtn &&
                        this.m_multiBtn.node.on(
                          l.EventType.TOUCH_END,
                          function () {
                            t.m_ExtraBetAniPlaying ||
                              (S.Play(d.AudioClips.COMMON_BTN),
                              t.CheckCanUseBtn()
                                ? t.ExtendShowBar(!t.m_isExtendShowBar)
                                : C.ShowMessageBox(
                                    d.StringKey.FREEWINCASH_PLAYING1
                                  ));
                          }
                        );
                    for (var e = 0; e < this.m_multiBtn_on.length; e++)
                      this.m_multiBtn_on[e].node.on(
                        l.EventType.TOUCH_END,
                        function () {
                          t.m_ExtraBetAniPlaying ||
                            (t.CheckCanUseBtn()
                              ? t.ChangeBetMode()
                              : C.ShowMessageBox(
                                  d.StringKey.FREEWINCASH_PLAYING1
                                ));
                        }
                      ),
                        this.m_multiBtn_off[e] &&
                          this.m_multiBtn_off[e].node.on(
                            l.EventType.TOUCH_END,
                            function () {
                              t.m_ExtraBetAniPlaying ||
                                (S.Play(d.AudioClips.COMMON_BTN),
                                t.CheckCanUseBtn() && t.ChangeBetMode());
                            }
                          );
                    this.m_multiBtn_TipQuesMark &&
                      this.m_multiBtn_TipQuesMark.node.on(
                        l.EventType.TOUCH_END,
                        r(
                          s().mark(function e() {
                            return s().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (t.m_ExtraBetAniPlaying) {
                                      e.next = 13;
                                      break;
                                    }
                                    if (
                                      (S.Play(d.AudioClips.COMMON_BTN),
                                      b.Current() != y.IDLE || N.IsBuyBonus)
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
                                    return (e.next = 9), t.ExtendShowBar(!0);
                                  case 9:
                                    !t.m_multiBtn_Tip.active &&
                                      t.m_isExtendShowBar &&
                                      (t.m_multiBtn_Tip.active = !0);
                                  case 10:
                                    e.next = 13;
                                    break;
                                  case 12:
                                    C.ShowMessageBox(
                                      d.StringKey.FREEWINCASH_PLAYING1
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
                  }),
                  (u.start = function () {
                    c("ExtraBet start");
                  }),
                  (u.CheckCanUseBtn = function () {
                    return (
                      d.IsInMG() &&
                      b.Current() == y.IDLE &&
                      !d.IsUsingItem &&
                      !N.IsBuyBonus &&
                      !w.IsFeaturesDemoMode
                    );
                  }),
                  (u.OnSpin = function () {
                    this.ExtendShowBar(!1);
                  }),
                  (u.ShowExtra = function (t) {
                    this.m_multiExtraBetNode &&
                      (this.m_multiExtraBetNode.active = t);
                  }),
                  (u.GoToFeatures = function () {}),
                  (u.ExtendShowBar = (function () {
                    var t = r(
                      s().mark(function t(e) {
                        var n;
                        return s().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (this.m_canExtend) {
                                    t.next = 2;
                                    break;
                                  }
                                  return t.abrupt("return");
                                case 2:
                                  if (!v || this.m_ExtraBetAniPlaying) {
                                    t.next = 31;
                                    break;
                                  }
                                  if (!e) {
                                    t.next = 20;
                                    break;
                                  }
                                  if (
                                    v.IsAutoSpin ||
                                    d.IsUsingItem ||
                                    N.IsBuyBonus
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
                                    v.SetSpinState(A.CLICK_SPIN),
                                    (this.m_ExtraBetAniPlaying = !0),
                                    !this.m_multiExtraBetNode)
                                  ) {
                                    t.next = 12;
                                    break;
                                  }
                                  return (
                                    (t.next = 12),
                                    this.PlayAnimation(
                                      this.m_multiExtraBetNode.getComponent(x),
                                      "ExtraBet_Show"
                                    )
                                  );
                                case 12:
                                  (this.m_ExtraBetAniPlaying = !1),
                                    v.SetSpinState(A.IDLE),
                                    this.m_isExtra &&
                                      this.m_multiExtraBetNode &&
                                      this.m_multiExtraBetNode
                                        .getComponent(x)
                                        .play("ExtraBet_Active");
                                case 15:
                                  t.next = 18;
                                  break;
                                case 17:
                                  C.ShowMessageBox(
                                    d.StringKey.FREEWINCASH_PLAYING1
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
                                    (v.IsAutoSpin ||
                                      v.SetSpinState(A.CLICK_SPIN),
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
                                      this.m_multiExtraBetNode.getComponent(x),
                                      "ExtraBet_Close"
                                    )
                                  );
                                case 27:
                                  (this.m_ExtraBetAniPlaying = !1),
                                    v.IsAutoSpin || v.SetSpinState(A.IDLE),
                                    this.m_multiExtraBetNode &&
                                      (this.m_isExtra
                                        ? this.m_multiExtraBetNode
                                            .getComponent(x)
                                            .play("ExtraBet_Active")
                                        : (this.m_multiExtraBetNode
                                            .getComponent(x)
                                            .play("ExtraBet_OFF"),
                                          (n = this.m_multiExtraBetNode
                                            .getComponent(x)
                                            .getState("ExtraBet_OFF")).setTime(
                                            n.duration
                                          ))),
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
                  (u.ChangeBetMode = (function () {
                    var t = r(
                      s().mark(function t() {
                        var e;
                        return s().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    (c(
                                      "ChangeBetMode stateManager.Current() : ",
                                      b.Current()
                                    ),
                                    !v ||
                                      N.IsBuyBonus ||
                                      (b.Current() !== y.IDLE &&
                                        !this.m_isExtra))
                                  ) {
                                    t.next = 34;
                                    break;
                                  }
                                  if (
                                    ((this.m_isExtra = !this.m_isExtra),
                                    (e = []),
                                    !this.m_isExtra)
                                  ) {
                                    t.next = 22;
                                    break;
                                  }
                                  return (
                                    this.m_isTwoStep
                                      ? (this.m_toStepTwo = !0)
                                      : v.ChangeMultiBet(J),
                                    1 == this.m_multiBtn_on.length &&
                                      ((this.m_multiBtn_on[0].node.active = !0),
                                      (this.m_multiBtn_off[0].node.active =
                                        !1)),
                                    (this.m_ExtraBetAniPlaying = !0),
                                    null == v || v.SetSpinState(A.CLICK_SPIN),
                                    null == w || w.SetBuyBonusState(!1),
                                    this.m_multiExtraBetNode &&
                                      e.push(
                                        this.PlayAnimation(
                                          this.m_multiExtraBetNode.getComponent(
                                            x
                                          ),
                                          "ExtraBet_ON"
                                        )
                                      ),
                                    e.push(
                                      this.m_triggerCb(this.m_isExtra, !1)
                                    ),
                                    (t.next = 14),
                                    Promise.all(e)
                                  );
                                case 14:
                                  return (
                                    (this.m_ExtraBetAniPlaying = !1),
                                    null == v || v.SetSpinState(A.IDLE),
                                    this.m_multiExtraBetNode &&
                                      this.m_multiExtraBetNode
                                        .getComponent(x)
                                        .play("ExtraBet_Active"),
                                    (t.next = 19),
                                    d.Wait(this, 0.2)
                                  );
                                case 19:
                                  null == w || w.SetBuyBonusState(!0),
                                    (t.next = 32);
                                  break;
                                case 22:
                                  return (
                                    v.ChangeMultiBet(q),
                                    1 == this.m_multiBtn_on.length &&
                                      ((this.m_multiBtn_on[0].node.active = !1),
                                      (this.m_multiBtn_off[0].node.active =
                                        !0)),
                                    (this.m_ExtraBetAniPlaying = !0),
                                    null == v || v.SetSpinState(A.CLICK_SPIN),
                                    this.m_multiExtraBetNode &&
                                      e.push(
                                        this.PlayAnimation(
                                          this.m_multiExtraBetNode.getComponent(
                                            x
                                          ),
                                          "ExtraBet_OFF"
                                        )
                                      ),
                                    e.push(
                                      this.m_triggerCb(this.m_isExtra, !1)
                                    ),
                                    (t.next = 30),
                                    Promise.all(e)
                                  );
                                case 30:
                                  (this.m_ExtraBetAniPlaying = !1),
                                    null == v || v.SetSpinState(A.IDLE);
                                case 32:
                                  t.next = 35;
                                  break;
                                case 34:
                                  b.Current() !== y.IDLE &&
                                    (c("TRIAL_REFUSED_REASON 1 "),
                                    C.ShowMessageBox(
                                      d.StringKey.FREEWINCASH_PLAYING1
                                    ));
                                case 35:
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
                  (u.SetTwoStepMulti = (function () {
                    var t = r(
                      s().mark(function t(e, n) {
                        return s().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (!this.m_isTwoStep || !this.m_toStepTwo) {
                                    t.next = 13;
                                    break;
                                  }
                                  if (!e) {
                                    t.next = 5;
                                    break;
                                  }
                                  v.ChangeMultiBet(n), (t.next = 13);
                                  break;
                                case 5:
                                  if (
                                    ((this.m_isExtra = !1),
                                    1 == this.m_multiBtn_on.length &&
                                      ((this.m_multiBtn_on[0].node.active = !1),
                                      (this.m_multiBtn_off[0].node.active =
                                        !0)),
                                    (this.m_ExtraBetAniPlaying = !0),
                                    v && v.SetSpinState(A.CLICK_SPIN),
                                    !this.m_multiExtraBetNode)
                                  ) {
                                    t.next = 12;
                                    break;
                                  }
                                  return (
                                    (t.next = 12),
                                    this.PlayAnimation(
                                      this.m_multiExtraBetNode.getComponent(x),
                                      "ExtraBet_OFF"
                                    )
                                  );
                                case 12:
                                  this.m_ExtraBetAniPlaying = !1;
                                case 13:
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
                  (u.ForceSetExtraBet = (function () {
                    var t = r(
                      s().mark(function t(e, n) {
                        var i;
                        return s().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if ((void 0 === n && (n = J), !e)) {
                                    t.next = 10;
                                    break;
                                  }
                                  return (
                                    (this.m_isExtra = !0),
                                    1 == this.m_multiBtn_on.length &&
                                      ((this.m_multiBtn_on[0].node.active = !0),
                                      (this.m_multiBtn_off[0].node.active =
                                        !1)),
                                    this.m_multiExtraBetNode &&
                                      this.m_multiExtraBetNode
                                        .getComponent(x)
                                        .play("ExtraBet_Active"),
                                    this.m_isTwoStep
                                      ? ((this.m_toStepTwo = !0),
                                        this.SetTwoStepMulti(e, n))
                                      : v.ChangeMultiBet(n),
                                    (t.next = 8),
                                    this.m_triggerCb(e, !0)
                                  );
                                case 8:
                                  t.next = 19;
                                  break;
                                case 10:
                                  if (!this.m_isExtra) {
                                    t.next = 19;
                                    break;
                                  }
                                  return (
                                    (i = []),
                                    (this.m_isExtra = !1),
                                    1 == this.m_multiBtn_on.length &&
                                      ((this.m_multiBtn_on[0].node.active = !1),
                                      (this.m_multiBtn_off[0].node.active =
                                        !0)),
                                    v.ChangeMultiBet(q),
                                    this.m_multiExtraBetNode &&
                                      (this.m_isExtendShowBar
                                        ? i.push(this.ExtendShowBar(!1))
                                        : i.push(
                                            this.PlayAnimation(
                                              this.m_multiExtraBetNode.getComponent(
                                                x
                                              ),
                                              "ExtraBet_OFF"
                                            )
                                          )),
                                    i.push(this.m_triggerCb(e, !0)),
                                    (t.next = 19),
                                    Promise.all(i)
                                  );
                                case 19:
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
                  (u.OnRotation = function () {
                    this.m_multiExtraBetNode &&
                      (this.m_isExtra
                        ? this.m_multiExtraBetNode
                            .getComponent(x)
                            .play("ExtraBet_Active")
                        : this.m_multiExtraBetNode
                            .getComponent(x)
                            .play("ExtraBet_Stop")),
                      this.m_multiBtn_Tip && (this.m_multiBtn_Tip.active = !1);
                  }),
                  (u.IsExAnimationTouchable = function () {
                    return !this.m_ExtraBetAniPlaying;
                  }),
                  (u.FirstShowBar = function () {}),
                  (u.PlayAnimation = function (t, e, n) {
                    return (
                      void 0 === n && (n = !1),
                      new Promise(function (i) {
                        if ((t.play(e), n)) {
                          var a = t.getState(e);
                          a && (a.wrapMode = p.WrapMode.Loop);
                        }
                        t.once(x.EventType.FINISHED, function () {
                          i(!0);
                        });
                      })
                    );
                  }),
                  o(e, [
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
              })(E)).prototype,
              "m_multiExtraBetNode",
              [I],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (z = e(H.prototype, "m_multiBtn", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (G = e(H.prototype, "m_multiBtn_on", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (U = e(H.prototype, "m_multiBtn_off", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (K = e(H.prototype, "m_multiBtn_TipQuesMark", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (W = e(H.prototype, "m_multiBtn_Tip", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Q = e(H.prototype, "m_multiBtn_Description", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Y = e(H.prototype, "m_Txt_Extra_Bet", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (O = H))
          ) || O)
        );
        u._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ExtraBetController.ts",
  ["cc", "./index4.ts"],
  function (t) {
    "use strict";
    var e, r;
    return {
      setters: [
        function (t) {
          e = t.cclegacy;
        },
        function (t) {
          r = t.Astarte;
        },
      ],
      execute: function () {
        t({
          UpdateExtraBetController: function () {
            t("extraBetController", r.ExtraBetController);
          },
          extraBetController: void 0,
        }),
          e._RF.push(
            {},
            "1d5a8ODImpC9qtSki10xwQQ",
            "ExtraBetController",
            void 0
          ),
          e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FakeServer.ts",
  ["cc", "./index4.ts"],
  function (e) {
    "use strict";
    var r, t;
    return {
      setters: [
        function (e) {
          r = e.cclegacy;
        },
        function (e) {
          t = e.Astarte;
        },
      ],
      execute: function () {
        e({
          UpdateFakeServer: function () {
            e("fakeServer", t.FakeServer);
          },
          fakeServer: void 0,
        }),
          r._RF.push({}, "cd534oKcOFFap8T54HqFCAE", "FakeServer", void 0),
          r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FeatureManagerComponent.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./ZipBundleLoader.ts"],
  function (e) {
    "use strict";
    var t,
      n,
      i,
      a,
      o,
      r,
      s,
      l,
      m,
      u,
      c,
      h,
      p,
      d,
      f,
      g,
      _,
      L,
      y,
      S,
      b,
      w,
      P,
      B,
      N;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.initializerDefineProperty),
            (i = e.inheritsLoose),
            (a = e.assertThisInitialized),
            (o = e.asyncToGenerator),
            (r = e.regeneratorRuntime);
        },
        function (e) {
          (s = e.cclegacy),
            (l = e._decorator),
            (m = e.CCBoolean),
            (u = e.Enum),
            (c = e.CCString),
            (h = e.SpriteFrame),
            (p = e.SpriteAtlas),
            (d = e.assetManager),
            (f = e.UIRenderer),
            (g = e.js),
            (_ = e.Prefab),
            (L = e.instantiate),
            (y = e.sys),
            (S = e.error),
            (b = e.Component),
            (w = e.settings),
            (P = e.Settings),
            (B = e.VERSION);
        },
        function (e) {
          N = e.ZipBundleLoader;
        },
      ],
      execute: function () {
        var R,
          I,
          C,
          T,
          v,
          D,
          A,
          k,
          x,
          F,
          O,
          G,
          M,
          E,
          z,
          V,
          H,
          j,
          U,
          K,
          J,
          Z,
          W,
          q,
          X,
          $,
          Y,
          Q,
          ee,
          te,
          ne,
          ie,
          ae,
          oe,
          re,
          se,
          le,
          me,
          ue,
          ce,
          he,
          pe,
          de,
          fe,
          ge,
          _e,
          Le,
          ye,
          Se,
          be,
          we,
          Pe,
          Be,
          Ne,
          Re,
          Ie,
          Ce,
          Te,
          ve,
          De,
          Ae,
          ke,
          xe,
          Fe,
          Oe,
          Ge,
          Me,
          Ee,
          ze,
          Ve,
          He,
          je;
        e({ AutoplayPanelNo: void 0, SeriesNo: void 0 }),
          s._RF.push(
            {},
            "c933866GvpLKaZlVxLlOz0C",
            "FeatureManagerComponent",
            void 0
          );
        var Ue,
          Ke = ["game"],
          Je = l.ccclass,
          Ze = l.property;
        !(function (e) {
          (e[(e.CommonMainBundle = 0)] = "CommonMainBundle"),
            (e[(e.CommonBundle = 1)] = "CommonBundle"),
            (e[(e.OtherBundle = 2)] = "OtherBundle"),
            (e[(e.DefaultLangBundle = 3)] = "DefaultLangBundle"),
            (e[(e.LangTextBundle = 4)] = "LangTextBundle"),
            (e[(e.GameBundle = 5)] = "GameBundle");
        })(Ue || (Ue = {}));
        var We,
          qe,
          Xe = {
            CN: "zh-CN",
            EN: "en-US",
            TH: "th-TH",
            VN: "vi-VN",
            ID: "id-ID",
            HI: "hi-IN",
            TA: "ta-IN",
            MM: "my-MM",
            JP: "ja-JP",
            MS: "ms-MY",
            KO: "ko-KR",
            BN: "bn-IN",
            ES: "es-AR",
            PT: "pt-BR",
            IT: "it-IT",
            SE: "sv-SE",
            DE: "de-DE",
            DADK: "da-DK",
            RORO: "ro-RO",
            NLNL: "nl-NL",
            TRTR: "tr-TR",
            RURU: "ru-RU",
            GRGR: "gr-GR",
            FRFR: "fr-FR",
          },
          $e = {
            CN: "cn",
            EN: "en",
            TH: "th",
            VN: "vn",
            ID: "id",
            HI: "hi",
            TA: "ta",
            MM: "mm",
            JP: "jp",
            MS: "ms",
            KO: "ko",
            BN: "bn",
            ES: "es",
            PT: "pt",
            IT: "it",
            SE: "se",
            DE: "de",
            DADK: "da",
            RORO: "ro",
            NLNL: "nl",
            TRTR: "trTR",
            RURU: "ruRU",
            GRGR: "grGR",
            FRFR: "frFR",
          },
          Ye = $e.EN,
          Qe = [10263],
          et = [3],
          tt = e("SkinType", {
            JILI: 0,
            TADA: 1,
            ACE_ROYALE: 2,
            JILI_START: 3,
            TADA_CASINO: 4,
            NONE: 5,
            UFA: 6,
          });
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.AutoPlaySettingPanel = 1)] = "AutoPlaySettingPanel"),
            (e[(e.AutoPlaySettingPanel_DFI = 2)] = "AutoPlaySettingPanel_DFI"),
            (e[(e.AutoPlaySettingPanel_DFIII = 3)] =
              "AutoPlaySettingPanel_DFIII"),
            (e[(e.AutoPlaySettingPanel_BS = 4)] = "AutoPlaySettingPanel_BS"),
            (e[(e.AutoPlaySetting_AG2 = 5)] = "AutoPlaySetting_AG2"),
            (e[(e.AutoPlaySetting_FD = 6)] = "AutoPlaySetting_FD"),
            (e[(e.AutoPlaySettingPanel_MS = 7)] = "AutoPlaySettingPanel_MS");
        })(We || (We = e("AutoplayPanelNo", {}))),
          (function (e) {
            (e[(e.None = 0)] = "None"), (e[(e.Dark = 1)] = "Dark");
          })(qe || (qe = e("SeriesNo", {})));
        var nt = e(
            "StyleSetting",
            ((R = Je("StyleSetting")),
            (I = Ze({ type: m, tooltip: "是否有骰子造型" })),
            (C = Ze({ type: m, tooltip: "是否有萬聖造型" })),
            (T = Ze({ type: m, tooltip: "是否有聖誕造型" })),
            (v = Ze({ type: m, tooltip: "是否有OKBET廠商造型" })),
            (D = Ze({ type: u(qe), tooltip: "系列" })),
            R(
              ((x = t(
                (k = function () {
                  n(this, "HasDice", x, this),
                    n(this, "HasHolloween", F, this),
                    n(this, "HasXmas", O, this),
                    n(this, "HasOkbet", G, this),
                    n(this, "Series", M, this);
                }).prototype,
                "HasDice",
                [I],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return !1;
                  },
                }
              )),
              (F = t(k.prototype, "HasHolloween", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return !1;
                },
              })),
              (O = t(k.prototype, "HasXmas", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return !1;
                },
              })),
              (G = t(k.prototype, "HasOkbet", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return !1;
                },
              })),
              (M = t(k.prototype, "Series", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return qe.None;
                },
              })),
              (A = k))
            ) || A)
          ),
          it = e(
            "PlayTypeSetting",
            ((E = Je("PlayTypeSetting")),
            (z = Ze({ type: m, tooltip: "Match" })),
            (V = Ze({ type: m, tooltip: "Break" })),
            E(
              ((U = t(
                (j = function () {
                  n(this, "Match", U, this), n(this, "Break", K, this);
                }).prototype,
                "Match",
                [z],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return !1;
                  },
                }
              )),
              (K = t(j.prototype, "Break", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return !1;
                },
              })),
              (H = j))
            ) || H)
          );
        e(
          "default",
          ((J = Ze({ type: c, tooltip: "遊戲縮寫(server位置)" })),
          (Z = Ze({ type: String, tooltip: "遊戲主場prefab路徑" })),
          (W = Ze({ type: String, tooltip: "遊戲多語系圖片路徑" })),
          (q = Ze({ type: String, tooltip: "遊戲ID" })),
          (X = Ze({ type: String, tooltip: "Logo名稱，只要給到底線之前" })),
          ($ = Ze({ type: Boolean, tooltip: "鎖定橫版" })),
          (Y = Ze({ type: Boolean, tooltip: "鎖定直版" })),
          (Q = Ze({ type: Boolean, tooltip: "是否為街機" })),
          (ee = Ze({ type: h, tooltip: "不分語系LOGO" })),
          (te = Ze({ type: p, tooltip: "遊戲Logo合圖" })),
          (ne = Ze({ type: c, tooltip: "展示頁" })),
          (ie = Ze({ type: String, tooltip: "敘述圖名稱" })),
          (ae = Ze({ type: h, tooltip: "特色圖" })),
          (oe = Ze({ type: h, tooltip: "背景圖，0:直,1:橫" })),
          (re = Ze({ type: h, tooltip: "腳色" })),
          (se = Ze({ type: Number, tooltip: "辣椒數" })),
          (le = Ze({ type: Number, tooltip: "最大贏分倍率" })),
          (me = Ze({ type: u(We), tooltip: "自動玩介面" })),
          (ue = Ze({ type: m, tooltip: "是否開啟晚3秒ShowGameScene進入遊戲" })),
          (ce = Ze({ type: m, tooltip: "可以跳過前導動畫" })),
          (he = Ze({ type: nt, tooltip: "是否有其他特色樣式" })),
          (pe = Ze({ type: it, tooltip: "是否有其他特色樣式" })),
          (de = Ze({ type: m, tooltip: "是否為遠程包" })),
          (fe = Ze({ type: m, tooltip: "是否是SSS版" })),
          (ge = Ze({ type: c, tooltip: "使用哪個遠程包版本" })),
          Je(
            ((ye = t(
              (Le = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, o = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    o[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    n(t, "m_gameShortName", ye, a(t)),
                    n(t, "m_scenePrefabPath", Se, a(t)),
                    n(t, "m_gameImgPath", be, a(t)),
                    n(t, "m_gameId", we, a(t)),
                    n(t, "m_logoName", Pe, a(t)),
                    n(t, "m_isLockLandScope", Be, a(t)),
                    n(t, "m_isLockPortrait", Ne, a(t)),
                    n(t, "m_isStreet", Re, a(t)),
                    n(t, "m_singleLogo", Ie, a(t)),
                    n(t, "m_logoSpriteAtlas", Ce, a(t)),
                    n(t, "m_pagePrefabPaths", Te, a(t)),
                    n(t, "m_infoNames", ve, a(t)),
                    n(t, "m_featureSpriteFrames", De, a(t)),
                    n(t, "m_bgSpriteFrames", Ae, a(t)),
                    n(t, "m_characterSpriteFrame", ke, a(t)),
                    n(t, "m_chilliNum", xe, a(t)),
                    n(t, "m_maxWinNum", Fe, a(t)),
                    n(t, "m_autoplayPanelNo", Oe, a(t)),
                    n(t, "m_isWatting", Ge, a(t)),
                    n(t, "m_skipIntro", Me, a(t)),
                    n(t, "m_styleSetting", Ee, a(t)),
                    n(t, "m_playTypeSetting", ze, a(t)),
                    n(t, "m_isRemote", Ve, a(t)),
                    n(t, "m_isSSS", He, a(t)),
                    n(t, "m_ReomveVersion", je, a(t)),
                    (t.m_startSceneTime = -1),
                    (t.m_otherBundle = null),
                    (t.m_commonBundle = null),
                    (t.m_commonPath = ""),
                    (t.m_commonVersion = ""),
                    (t.m_langTextBundle = null),
                    (t.m_defaultLangPath = ""),
                    (t.m_defaultLangVersion = ""),
                    (t.m_commonMainBundle = null),
                    (t.m_gameBundle = null),
                    (t.m_pagePrefabs = []),
                    (t.m_apiId = 0),
                    (t.m_isTaDa = !1),
                    (t.m_viewNode = null),
                    (t.m_lang = "en"),
                    (t.m_loadOldType = !0),
                    (t.m_isForceLite = !1),
                    t
                  );
                }
                i(t, e);
                var s = t.prototype;
                return (
                  (s.onLoad = function () {
                    (this.m_isTaDa = this.IsTada()),
                      this.Config(),
                      this.Log(100),
                      null == window.SetProgressInterval ||
                        window.SetProgressInterval(60),
                      "109" === this.m_gameId &&
                        ((d.downloader.maxConcurrency = 12),
                        (d.downloader.maxRequestsPerFrame = 12));
                  }),
                  (s.start = (function () {
                    var e = o(
                      r().mark(function e() {
                        return r().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.m_startSceneTime = this.m_isWatting
                                      ? Date.now()
                                      : -1),
                                    (e.next = 3),
                                    this.LoadVersion("game")
                                  );
                                case 3:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (s.Config = function () {
                    f.prototype.fillBuffers = function (e) {
                      this._renderFlag && e._pOpacity > 0 && this._render(e);
                    };
                  }),
                  (s.update = function () {}),
                  (s.LoadZip = (function () {
                    var e = o(
                      r().mark(function e(t, n, i, a) {
                        var o, s, l;
                        return r().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  (void 0 === i && (i = ""),
                                  void 0 === a && (a = ""),
                                  N)
                                ) {
                                  e.next = 4;
                                  break;
                                }
                                return e.abrupt("return");
                              case 4:
                                if (!(N.loadedZipNames.indexOf(t) >= 0)) {
                                  e.next = 6;
                                  break;
                                }
                                return e.abrupt("return");
                              case 6:
                                if (n || -1 !== Ke.indexOf(t)) {
                                  e.next = 8;
                                  break;
                                }
                                return e.abrupt("return");
                              case 8:
                                return (
                                  (o = i),
                                  (s = a),
                                  n ||
                                    ((l = w.querySettings(
                                      P.Category.ASSETS,
                                      "bundleVers"
                                    )),
                                    (o = "./assets/" + t),
                                    (s = l[t])),
                                  N.loadedZipNames.push(t),
                                  (e.next = 13),
                                  N.loadZip(o, s)
                                );
                              case 13:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t, n, i, a) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (s.LoadVersion = (function () {
                    var e = o(
                      r().mark(function e(t) {
                        var n,
                          i,
                          a,
                          s,
                          l,
                          m,
                          u,
                          c,
                          h,
                          p,
                          f,
                          g,
                          _,
                          L,
                          S,
                          b,
                          w,
                          P,
                          N,
                          R,
                          I,
                          C,
                          T,
                          v;
                        return r().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (n = globalThis.LobbyData),
                                    (i = this.m_isTaDa ? "tada" : "jili"),
                                    (this.m_commonPath =
                                      "assets/common/Astt/" + i),
                                    (a = "assets/common/Astt/" + i + "Main"),
                                    (s = "assets/common/Astt/other"),
                                    (l = "AsttText/AsttText/en"),
                                    (this.m_defaultLangPath =
                                      "AsttText/AsttText/en"),
                                    (m = "assets/" + t),
                                    (this.m_commonVersion = ""),
                                    (u = ""),
                                    (c = ""),
                                    (this.m_defaultLangVersion = ""),
                                    (h = ""),
                                    (p = ""),
                                    (f = ""),
                                    (g = "");
                                  try {
                                    void 0 !== n &&
                                      (console.error(
                                        "lobbyData",
                                        JSON.stringify(n)
                                      ),
                                      (m = n.bundleDomin + t),
                                      (p = n.versionJson[t]),
                                      (this.m_commonPath = n.bundleDomin + i),
                                      (this.m_commonVersion = n.versionJson[i]),
                                      (s = n.bundleDomin + "other"),
                                      (h = n.versionJson.other));
                                  } catch (e) {}
                                  if (!this.m_isRemote) {
                                    e.next = 55;
                                    break;
                                  }
                                  return (
                                    (_ = /(\d+)\.(\d+)/),
                                    (L = B.match(_)),
                                    (S = L[1] + "." + L[2]),
                                    (b =
                                      "https://" + window.location.host + "/"),
                                    (w = "astarte2"),
                                    (P = "web-mobile"),
                                    y.isNative &&
                                      ((P = "android"), (S = "app" + S)),
                                    this.m_ReomveVersion.length > 0 &&
                                      (P = P + "-" + this.m_ReomveVersion),
                                    n && (b = n.cdnHost),
                                    this.m_isSSS && (w = "astarte3"),
                                    (N =
                                      this.GetLinkParameterByName(
                                        "remoteVersion"
                                      )) &&
                                      N.length > 0 &&
                                      (S = "" + N + L[1] + "." + L[2]),
                                    (e.next = 33),
                                    new Promise(function (e) {
                                      d.loadRemote(
                                        "" +
                                          b +
                                          w +
                                          "/" +
                                          S +
                                          "/" +
                                          P +
                                          "/assets/versions.json?" +
                                          (Date.now() / 600).toFixed(0),
                                        {
                                          reload: !0,
                                          cacheAsset: !1,
                                          cacheEnabled: !1,
                                        },
                                        o(
                                          r().mark(function t(n, i) {
                                            return r().wrap(function (t) {
                                              for (;;)
                                                switch ((t.prev = t.next)) {
                                                  case 0:
                                                    e(i);
                                                  case 1:
                                                  case "end":
                                                    return t.stop();
                                                }
                                            }, t);
                                          })
                                        )
                                      );
                                    })
                                  );
                                case 33:
                                  if (
                                    ((R = e.sent),
                                    (I =
                                      "" +
                                      b +
                                      w +
                                      "/" +
                                      S +
                                      "/" +
                                      P +
                                      "/src/chunks/bundle." +
                                      R.json["bundle.js"] +
                                      ".js"),
                                    !y.isNative)
                                  ) {
                                    e.next = 40;
                                    break;
                                  }
                                  return (
                                    (e.next = 38),
                                    new Promise(function (e, t) {
                                      d.downloader.downloadScript(
                                        I,
                                        { systemJs: !0 },
                                        function (n) {
                                          n
                                            ? (console.error(
                                                "load bundle error",
                                                n
                                              ),
                                              t(n))
                                            : e();
                                        }
                                      );
                                    })
                                  );
                                case 38:
                                  e.next = 42;
                                  break;
                                case 40:
                                  return (e.next = 42), System.import(I);
                                case 42:
                                  (s =
                                    "" +
                                    b +
                                    w +
                                    "/" +
                                    S +
                                    "/" +
                                    P +
                                    "/assets/other"),
                                    (h = R.json.other),
                                    (this.m_commonPath =
                                      "" +
                                      b +
                                      w +
                                      "/" +
                                      S +
                                      "/" +
                                      P +
                                      "/assets/" +
                                      i),
                                    (this.m_commonVersion = R.json[i]),
                                    (a =
                                      "" +
                                      b +
                                      w +
                                      "/" +
                                      S +
                                      "/" +
                                      P +
                                      "/assets/" +
                                      i +
                                      "Main"),
                                    (u = R.json[i + "Main"]),
                                    (this.m_lang = this.GetLanguage()),
                                    (l =
                                      "" +
                                      b +
                                      w +
                                      "/" +
                                      S +
                                      "/" +
                                      P +
                                      "/assets/" +
                                      this.m_lang),
                                    (c = R.json[this.m_lang]),
                                    (this.m_defaultLangPath =
                                      "" +
                                      b +
                                      w +
                                      "/" +
                                      S +
                                      "/" +
                                      P +
                                      "/assets/en"),
                                    (this.m_defaultLangVersion = R.json.en),
                                    (f =
                                      "" +
                                      b +
                                      w +
                                      "/" +
                                      S +
                                      "/" +
                                      P +
                                      "/assets/extra"),
                                    (g = R.json.extra);
                                case 55:
                                  if (
                                    ((("" != u && null != u) ||
                                      !this.m_isRemote) &&
                                      (this.m_loadOldType = !1),
                                    !this.m_loadOldType)
                                  ) {
                                    e.next = 71;
                                    break;
                                  }
                                  return (
                                    (e.next = 59),
                                    Promise.all([
                                      this.LoadZip(
                                        i,
                                        this.m_isRemote,
                                        this.m_commonPath,
                                        this.m_commonVersion
                                      ),
                                      this.LoadZip(t, !1),
                                    ])
                                  );
                                case 59:
                                  return (
                                    (C = [
                                      this.LoadBundleSync(s, h),
                                      this.LoadBundleSync(m, p, void 0, {
                                        bundleName:
                                          void 0 !== n
                                            ? this.m_gameShortName + t
                                            : void 0,
                                      }),
                                    ]).push(
                                      this.LoadBundleSync(a, u),
                                      this.LoadBundleSync(l, c)
                                    ),
                                    (e.next = 63),
                                    Promise.all(C)
                                  );
                                case 63:
                                  (T = e.sent),
                                    (this.m_otherBundle = T[0]),
                                    (this.m_gameBundle = T[1]),
                                    (this.m_commonMainBundle = T[2]),
                                    (this.m_langTextBundle = T[3]),
                                    this.CheckBundles(),
                                    (e.next = 76);
                                  break;
                                case 71:
                                  return (
                                    (v = [
                                      this.LoadBundleSync(f, g),
                                      this.LoadBundleSync(
                                        a,
                                        u,
                                        Ue.CommonMainBundle
                                      ),
                                      this.LoadBundleSync(s, h, Ue.OtherBundle),
                                      this.LoadBundleSync(
                                        l,
                                        c,
                                        Ue.LangTextBundle
                                      ),
                                      this.LoadZip(
                                        i + "Main",
                                        this.m_isRemote,
                                        a,
                                        u
                                      ),
                                      this.LoadBundleSync(
                                        this.m_commonPath,
                                        this.m_commonVersion,
                                        Ue.CommonBundle
                                      ),
                                    ]),
                                    this.m_isForceLite
                                      ? v.push(
                                          this.LoadBundleSync(
                                            "assets/gameLite",
                                            "",
                                            Ue.GameBundle
                                          )
                                        )
                                      : this.m_isTaDa ||
                                        v.push(
                                          this.LoadBundleSync(
                                            "assets/game",
                                            "",
                                            Ue.GameBundle
                                          )
                                        ),
                                    (e.next = 75),
                                    Promise.all(v)
                                  );
                                case 75:
                                  this.CheckBundles();
                                case 76:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (s.CheckBundles = function () {
                    this.m_loadOldType
                      ? this.m_otherBundle &&
                        this.m_gameBundle &&
                        this.m_commonBundle &&
                        this.LoadIntroResources()
                      : this.m_commonMainBundle &&
                        this.m_otherBundle &&
                        this.m_langTextBundle &&
                        (!this.m_isForceLite ||
                          (this.m_isForceLite && this.m_gameBundle)) &&
                        this.LoadIntroResources();
                  }),
                  (s.LoadBundle = function (e, t, n, i) {
                    var a = this;
                    i || (i = {}),
                      (i.version = t),
                      d.loadBundle(e, i, function (i, o) {
                        i ? a.LoadBundle(e, t, n) : n(o);
                      });
                  }),
                  (s.LoadBundleSync = function (e, t, n, i) {
                    var a = this;
                    return new Promise(function (o) {
                      a.LoadBundle(
                        e,
                        t,
                        function (e) {
                          if (void 0 !== n)
                            switch (n) {
                              case Ue.CommonMainBundle:
                                a.m_commonMainBundle = e;
                                break;
                              case Ue.CommonBundle:
                                a.m_commonBundle = e;
                                break;
                              case Ue.OtherBundle:
                                a.m_otherBundle = e;
                                break;
                              case Ue.LangTextBundle:
                                a.m_langTextBundle = e;
                                break;
                              case Ue.GameBundle:
                                a.m_gameBundle = e;
                            }
                          o(e);
                        },
                        i
                      );
                    });
                  }),
                  (s.LoadIntroResources = function () {
                    if (
                      ("109" == this.m_gameId &&
                        (window.DiffTime961 = Date.now() - window.StartTime),
                      this.LoadIntroView(),
                      this.m_gameBundle && this.m_pagePrefabPaths.length > 0)
                    )
                      for (var e = 0; e < this.m_pagePrefabPaths.length; e++)
                        this.LoadIntroCell(e);
                  }),
                  (s.LoadIntroView = function () {
                    var e = this,
                      t = "Astt/%s/Intro/Prefab/IntroView";
                    t = this.m_isTaDa
                      ? g.formatStr(t, "framework_americas")
                      : g.formatStr(t, "framework");
                    var n = this.m_commonMainBundle;
                    this.m_loadOldType && (n = this.m_commonBundle),
                      n.load(
                        t,
                        _,
                        function (e, t) {
                          null == window.SetProgressInterval ||
                            window.SetProgressInterval((e / t) * 40 + 60);
                        },
                        function (t, n) {
                          if (t)
                            return (
                              console.error("LoadIntroView ERROR", t),
                              void e.LoadIntroView()
                            );
                          (e.m_viewNode = L(n)),
                            e.node.addChild(e.m_viewNode),
                            e.CheckIntroResources();
                        }
                      );
                  }),
                  (s.LoadIntroCell = function (e) {
                    var t = this;
                    this.m_gameBundle.load(
                      this.m_pagePrefabPaths[e],
                      _,
                      function (n, i) {
                        n
                          ? t.LoadIntroCell(e)
                          : ((t.m_pagePrefabs[e] = i), t.CheckIntroResources());
                      }
                    );
                  }),
                  (s.CheckIntroResources = function () {
                    if (this.m_viewNode) {
                      if (
                        this.m_gameBundle &&
                        this.m_pagePrefabPaths.length > 0
                      )
                        for (var e = 0; e < this.m_pagePrefabPaths.length; e++)
                          if (!this.m_pagePrefabs[e]) return;
                      this.Complete();
                    }
                  }),
                  (s.Complete = function () {
                    "109" == this.m_gameId &&
                      (window.DiffTime962 = Date.now() - window.StartTime),
                      this.m_viewNode.emit("Init", {
                        ScenePrefabPath: this.m_scenePrefabPath,
                        GameImgPath: this.m_gameImgPath,
                        GameId: this.m_gameId,
                        LogoName: this.m_logoName,
                        PagePrefabs: this.m_pagePrefabs,
                        PagePrefabPaths: this.m_pagePrefabPaths,
                        FeatureSpriteFrames: this.m_featureSpriteFrames,
                        IsLockLandScope: this.m_isLockLandScope,
                        IsLockPortrait: this.m_isLockPortrait,
                        LogoSpriteAtlas: this.m_logoSpriteAtlas,
                        BgSpriteFrames: this.m_bgSpriteFrames,
                        CharacterSpriteFrame: this.m_characterSpriteFrame,
                        InfoNames: this.m_infoNames,
                        ChilliNum: this.m_chilliNum,
                        MaxWinNum: this.m_maxWinNum,
                        SingleLogo: this.m_singleLogo,
                        IsStreet: this.m_isStreet,
                        StartSceneTime: this.m_startSceneTime,
                        OtherBundle: this.m_otherBundle,
                        CommonBundle: this.m_commonBundle,
                        CommonPath: this.m_commonPath,
                        CommonVersion: this.m_commonVersion,
                        CommonMainBundle: this.m_commonMainBundle,
                        LangTextBundle: this.m_langTextBundle,
                        DefaultLangPath: this.m_defaultLangPath,
                        DefaultLangVersion: this.m_defaultLangVersion,
                        GameBundle: this.m_gameBundle,
                        ApiID: this.m_apiId.toString(),
                        IsTaDa: this.m_isTaDa,
                        GameShortName: this.m_gameShortName,
                        AutoplayPanelNo: this.m_autoplayPanelNo,
                        StyleSetting: this.m_styleSetting,
                        PlayTypeSetting: this.m_playTypeSetting,
                        lstZipBundleName: Ke,
                        IsRemote: this.m_isRemote,
                        LoadLessRes: !1,
                        SkipIntro: this.m_skipIntro,
                        IsSSS: this.m_isSSS,
                      });
                  }),
                  (s.GetLanguage = function () {
                    var e,
                      t,
                      n,
                      i =
                        this.GetLinkParameterByName("lang") ||
                        this.GetLinkParameterByName("ln");
                    if (
                      (null != (e = window) &&
                        null != (t = e.location) &&
                        null != (n = t.href) &&
                        n.includes("/sss-") &&
                        (i = Xe.EN),
                      i)
                    ) {
                      var a = this.FormatLang(i);
                      if ("" !== a) return a;
                    }
                    if (!y.isNative) {
                      var o = this.FormatLang(navigator.language);
                      if ("" !== o && null != o) return o;
                    }
                    return Ye;
                  }),
                  (s.IsTada = function () {
                    var e = (this.GetLinkParameterByName("gs") || "gnidnawcs")
                        .split("")
                        .reverse()
                        .join(""),
                      t = Number(this.GetLinkParameterByName("apiId")),
                      n = -1 !== e.search("tada");
                    if (!isNaN(t)) {
                      (this.m_apiId = Number(t)),
                        (this.m_isForceLite =
                          -1 !== Ke.indexOf("gameLite") &&
                          Qe.includes(this.m_apiId));
                      for (var i = 0; i < et.length; i++)
                        if (t === et[i]) {
                          n = !0;
                          break;
                        }
                    }
                    var a = this.GetLinkParameterByName("tadaSkin");
                    a && "1" === a && (n = !0);
                    var o = this.GetLinkParameterByName("skin");
                    return (
                      !o ||
                        (o != tt.TADA.toString() &&
                          o != tt.TADA_CASINO.toString()) ||
                        (n = !0),
                      n
                    );
                  }),
                  (s.GetLinkParameterByName = function (e, t) {
                    if ((void 0 === t && (t = null), !t))
                      if ("undefined" != typeof LobbyData)
                        try {
                          "" === (t = LobbyData.url) && S("No URL!");
                        } catch (e) {
                          e(JSON.stringify(e));
                        }
                      else t = this.CheckReplayUrlAndDecode();
                    e = e.replace(/[[\]]/g, "\\$&");
                    var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(
                      t
                    );
                    return n
                      ? n[2]
                        ? decodeURIComponent(n[2].replace(/\+/g, " "))
                        : ""
                      : null;
                  }),
                  (s.CheckReplayUrlAndDecode = function () {
                    var e = window.location.href,
                      t = this.GetLinkParameterByName("replaydata", e);
                    if (!t) return e;
                    for (
                      var n = "0".charCodeAt(0),
                        i = "9".charCodeAt(0),
                        a = "a".charCodeAt(0),
                        o = "z".charCodeAt(0),
                        r = "A".charCodeAt(0),
                        s = "Z".charCodeAt(0),
                        l = "",
                        m = 0;
                      m < t.length;
                      m++
                    ) {
                      var u = t.charCodeAt(m);
                      u >= n && u <= i
                        ? ((u = i - (u - n)), (l += String.fromCharCode(u)))
                        : u >= a && u <= o && m % 2 == 0
                        ? ((u = o - (u - a)), (l += String.fromCharCode(u)))
                        : u >= r && u <= s && m % 3 == 0
                        ? ((u = s - (u - r)), (l += String.fromCharCode(u)))
                        : (l += String.fromCharCode(u));
                    }
                    var c = e.split("replaydata=" + t);
                    return c.join(""), c + atob(l);
                  }),
                  (s.Log = function (e) {
                    if (!y.isNative) {
                      var t = "https://" + window.location.host + "/";
                      if (
                        -1 == t.indexOf("localhost") &&
                        1 !=
                          /^http(s)?:\/\/([0-9]{1,3}\.){3}[0-9]{1,3}(:[0-9]+)?\/.*?$/.test(
                            t
                          )
                      ) {
                        var n = this.GetLinkParameterByName("apiId"),
                          i = this.GetLinkParameterByName("ssoKey"),
                          a =
                            "https://" +
                            (
                              this.GetLinkParameterByName("domain_platform") ||
                              this.GetLinkParameterByName("gs") ||
                              "gnidnawcs"
                            )
                              .split("")
                              .reverse()
                              .join("") +
                            "/webservice/event/trigger?";
                        (a +=
                          "AccountID=-1&BrowserSystem=-1&DeviceSystem=-1&GameID=" +
                          this.m_gameId +
                          "&GameVersion=" +
                          new Date().getTime() +
                          "&EventID=" +
                          e +
                          "&EventStatus=0&SSOKey=" +
                          i +
                          "&CreateTime=" +
                          new Date().toISOString() +
                          "&ApiId=" +
                          n),
                          this.Send(a),
                          (window.DiffTime960 = Date.now() - window.StartTime);
                      }
                    }
                  }),
                  (s.Send = function (e) {
                    var t = {
                        Accept: "application/json, text/javascript, text/plain",
                      },
                      n = new XMLHttpRequest();
                    n.open("GET", e, !0),
                      t &&
                        Object.keys(t).forEach(function (e) {
                          return n.setRequestHeader(e, t[e]);
                        }),
                      (n.timeout = 5e3),
                      (n.onload = function () {}),
                      (n.onerror = function () {}),
                      (n.ontimeout = function () {}),
                      n.send();
                  }),
                  (s.FormatLang = function (e) {
                    return (e = e.toLocaleLowerCase()) == $e.CN ||
                      e == Xe.CN.toLocaleLowerCase()
                      ? $e.CN
                      : e == $e.EN || e == Xe.EN.toLocaleLowerCase()
                      ? $e.EN
                      : e == $e.TH || e == Xe.TH.toLocaleLowerCase()
                      ? $e.TH
                      : e == $e.VN || e == Xe.VN.toLocaleLowerCase()
                      ? $e.VN
                      : e == $e.ID || e == Xe.ID.toLocaleLowerCase()
                      ? $e.ID
                      : e == $e.HI || e == Xe.HI.toLocaleLowerCase()
                      ? $e.HI
                      : e == $e.TA || e == Xe.TA.toLocaleLowerCase()
                      ? $e.TA
                      : e == $e.MM || e == Xe.MM.toLocaleLowerCase()
                      ? $e.MM
                      : e == $e.JP || e == Xe.JP.toLocaleLowerCase()
                      ? $e.JP
                      : e == $e.MS || e == Xe.MS.toLocaleLowerCase()
                      ? $e.MS
                      : e == $e.KO || e == Xe.KO.toLocaleLowerCase()
                      ? $e.KO
                      : e == $e.BN || e == Xe.BN.toLocaleLowerCase()
                      ? $e.BN
                      : e == $e.ES || e == Xe.ES.toLocaleLowerCase()
                      ? $e.ES
                      : e == $e.PT || e == Xe.PT.toLocaleLowerCase()
                      ? $e.PT
                      : e == $e.IT || e == Xe.IT.toLocaleLowerCase()
                      ? $e.IT
                      : e == $e.SE || e == Xe.SE.toLocaleLowerCase()
                      ? $e.SE
                      : e == $e.DE || e == Xe.DE.toLocaleLowerCase()
                      ? $e.DE
                      : e == $e.DADK || e == Xe.DADK.toLocaleLowerCase()
                      ? $e.DADK
                      : e == $e.RORO || e == Xe.RORO.toLocaleLowerCase()
                      ? $e.RORO
                      : e == $e.NLNL || e == Xe.NLNL.toLocaleLowerCase()
                      ? $e.NLNL
                      : e == $e.TRTR.toLocaleLowerCase() ||
                        e == Xe.TRTR.toLocaleLowerCase()
                      ? $e.TRTR
                      : e == $e.RURU.toLocaleLowerCase() ||
                        e == Xe.RURU.toLocaleLowerCase()
                      ? $e.RURU
                      : e == $e.GRGR.toLocaleLowerCase() ||
                        e == Xe.GRGR.toLocaleLowerCase()
                      ? $e.GRGR
                      : e == $e.FRFR.toLocaleLowerCase() ||
                        e == Xe.FRFR.toLocaleLowerCase()
                      ? $e.FRFR
                      : "";
                  }),
                  t
                );
              })(b)).prototype,
              "m_gameShortName",
              [J],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return "";
                },
              }
            )),
            (Se = t(Le.prototype, "m_scenePrefabPath", [Z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "";
              },
            })),
            (be = t(Le.prototype, "m_gameImgPath", [W], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "";
              },
            })),
            (we = t(Le.prototype, "m_gameId", [q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "";
              },
            })),
            (Pe = t(Le.prototype, "m_logoName", [X], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "";
              },
            })),
            (Be = t(Le.prototype, "m_isLockLandScope", [$], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (Ne = t(Le.prototype, "m_isLockPortrait", [Y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (Re = t(Le.prototype, "m_isStreet", [Q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (Ie = t(Le.prototype, "m_singleLogo", [ee], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ce = t(Le.prototype, "m_logoSpriteAtlas", [te], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Te = t(Le.prototype, "m_pagePrefabPaths", [ne], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (ve = t(Le.prototype, "m_infoNames", [ie], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (De = t(Le.prototype, "m_featureSpriteFrames", [ae], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Ae = t(Le.prototype, "m_bgSpriteFrames", [oe], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (ke = t(Le.prototype, "m_characterSpriteFrame", [re], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (xe = t(Le.prototype, "m_chilliNum", [se], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (Fe = t(Le.prototype, "m_maxWinNum", [le], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (Oe = t(Le.prototype, "m_autoplayPanelNo", [me], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return We.None;
              },
            })),
            (Ge = t(Le.prototype, "m_isWatting", [ue], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (Me = t(Le.prototype, "m_skipIntro", [ce], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (Ee = t(Le.prototype, "m_styleSetting", [he], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return new nt();
              },
            })),
            (ze = t(Le.prototype, "m_playTypeSetting", [pe], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return new it();
              },
            })),
            (Ve = t(Le.prototype, "m_isRemote", [de], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (He = t(Le.prototype, "m_isSSS", [fe], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (je = t(Le.prototype, "m_ReomveVersion", [ge], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "";
              },
            })),
            (_e = Le))
          ) || _e)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FeaturePageComponent.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./index2.ts",
    "./LocaleStringManager.ts",
  ],
  function (t) {
    "use strict";
    var e, i, r, n, a, o, l, p, s, u;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (r = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (o = t._decorator),
            (l = t.Sprite),
            (p = t.CCString),
            (s = t.Component);
        },
        null,
        function (t) {
          u = t.localeStringManager;
        },
      ],
      execute: function () {
        var c, m, f, g, _, h, y, b, S, A;
        a._RF.push(
          {},
          "5cf68x6BTZHP5QWXU3HRb/c",
          "FeaturePageComponent",
          void 0
        );
        var D = o.ccclass,
          d = o.property;
        t(
          "default",
          ((c = d({ type: l, tooltip: "說明文字" })),
          (m = d({ type: p, tooltip: "圖片名稱" })),
          (f = d({ type: Boolean, tooltip: "圖片名稱" })),
          (g = d({ type: l, tooltip: "圖片名稱" })),
          D(
            ((y = e(
              (h = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, a = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    a[o] = arguments[o];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    r(e, "m_hintSprite", y, n(e)),
                    r(e, "m_imgName", b, n(e)),
                    r(e, "m_isAD", S, n(e)),
                    r(e, "m_ADsprite", A, n(e)),
                    e
                  );
                }
                i(e, t);
                var a = e.prototype;
                return (
                  (a.start = function () {
                    var t = this;
                    if (!this.m_isAD) {
                      var e = u.GetGameAtlas();
                      e
                        ? (this.m_hintSprite.spriteFrame = e.getSpriteFrame(
                            this.m_imgName
                          ))
                        : u.RegisterOnGameAltasLoadedCb(function () {
                            t.m_hintSprite.spriteFrame = u
                              .GetGameAtlas()
                              .getSpriteFrame(t.m_imgName);
                          });
                    }
                  }),
                  (a.SetADSprites = function (t) {
                    this.m_ADsprite && (this.m_ADsprite.spriteFrame = t);
                  }),
                  e
                );
              })(s)).prototype,
              "m_hintSprite",
              [c],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (b = e(h.prototype, "m_imgName", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "";
              },
            })),
            (S = e(h.prototype, "m_isAD", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (A = e(h.prototype, "m_ADsprite", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_ = h))
          ) || _)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FunctionControlManager.ts",
  ["cc", "./index4.ts"],
  function (n) {
    "use strict";
    var t, r;
    return {
      setters: [
        function (n) {
          t = n.cclegacy;
        },
        function (n) {
          r = n.Astarte;
        },
      ],
      execute: function () {
        n({
          UpdateFunctionControlManager: function () {
            n("funcCtrlManagernager", r.FuncCtrlManager);
          },
          funcCtrlManagernager: void 0,
        }),
          t._RF.push(
            {},
            "81438uBGiNJXoDkKAmuxEJu",
            "FunctionControlManager",
            void 0
          ),
          t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/GaiaManager.ts",
  ["cc", "./index4.ts"],
  function (a) {
    "use strict";
    var e, n;
    return {
      setters: [
        function (a) {
          e = a.cclegacy;
        },
        function (a) {
          n = a.Astarte;
        },
      ],
      execute: function () {
        a({
          UpdateGaiaManager: function () {
            a("gaiaManager", n.GaiaManager);
          },
          gaiaManager: void 0,
        }),
          e._RF.push({}, "1fcfdTjgMdDr4mh99NzZ29B", "GaiaManager", void 0),
          e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/GiftCodeManager.ts",
  ["cc", "./index4.ts"],
  function (t) {
    "use strict";
    var e, i;
    return {
      setters: [
        function (t) {
          e = t.cclegacy;
        },
        function (t) {
          i = t.Astarte;
        },
      ],
      execute: function () {
        t({
          UpdateGiftCode: function () {
            t("giftCodeManager", i.GiftCode);
          },
          giftCodeManager: void 0,
        }),
          e._RF.push({}, "a3f63TygSlA6KwEkLDlQIoJ", "GiftCodeManager", void 0),
          e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/GroupNode.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (i) {
    "use strict";
    var e, t, o, n, s, a, r, c, l, h, d, p, u, y, m, f, _, S, v;
    return {
      setters: [
        function (i) {
          (e = i.applyDecoratedDescriptor),
            (t = i.inheritsLoose),
            (o = i.initializerDefineProperty),
            (n = i.assertThisInitialized),
            (s = i.createForOfIteratorHelperLoose),
            (a = i.createClass);
        },
        function (i) {
          (r = i.cclegacy),
            (c = i._decorator),
            (l = i.Node),
            (h = i.Enum),
            (d = i.v2),
            (p = i.director),
            (u = i.Director),
            (y = i.Vec3),
            (m = i.UIRenderer),
            (f = i.UIOpacity),
            (_ = i.v3),
            (S = i.UITransform),
            (v = i.Component);
        },
      ],
      execute: function () {
        var A,
          C,
          b,
          g,
          O,
          N,
          w,
          R,
          E,
          G,
          z,
          T,
          H,
          D,
          M,
          B,
          P,
          I,
          F,
          V,
          x,
          k,
          L,
          W,
          X,
          Y,
          U,
          Z,
          j,
          q,
          J;
        r._RF.push({}, "9099fuoIOdA/qc/GkvbZ7rH", "GroupNode", void 0);
        var K,
          Q,
          $,
          ii,
          ei = c.ccclass,
          ti = c.property,
          oi = c.menu,
          ni = c.executeInEditMode,
          si = "active-in-hierarchy-changed";
        !(function (i) {
          (i[(i.WIDTH = 1)] = "WIDTH"),
            (i[(i.HEIGHT = 2)] = "HEIGHT"),
            (i[(i.BOTH = 3)] = "BOTH");
        })(K || (K = {})),
          (function (i) {
            (i[(i.X = 1)] = "X"),
              (i[(i.Y = 2)] = "Y"),
              (i[(i.BOTH = 3)] = "BOTH");
          })(Q || (Q = {})),
          (function (i) {
            (i[(i.X = 1)] = "X"),
              (i[(i.Y = 2)] = "Y"),
              (i[(i.BOTH = 3)] = "BOTH");
          })($ || ($ = {})),
          (function (i) {
            (i[(i.R = 1)] = "R"),
              (i[(i.G = 2)] = "G"),
              (i[(i.B = 4)] = "B"),
              (i[(i.RGB = 7)] = "RGB"),
              (i[(i.A = 8)] = "A"),
              (i[(i.RGBA = 15)] = "RGBA");
          })(ii || (ii = {}));
        i(
          "default",
          ((A = oi("Chiron/GroupNode/GroupNode")),
          (C = ti({
            displayName: "Sync OnEnable",
            tooltip:
              "當 Node 啟用時同步一次所有選定的狀態至屬性 Group Nodes 中",
          })),
          (b = ti({
            displayName: "Sync OnDisable",
            tooltip:
              "當 Node 啟用時同步一次所有選定的狀態至屬性 Group Nodes 中",
          })),
          (g = ti({
            displayName: "Sync Recursive",
            tooltip: "是否遞迴同步屬性 Group Nodes 中帶有 GroupNode 元件的節點",
          })),
          (O = ti({ type: [l], displayName: "Group Nodes" })),
          (N = ti({
            displayName: "Active Aware",
            tooltip: "當啓閉狀態改變時是否讓群組裡的 Node 跟著啓閉調整",
          })),
          (w = ti({
            displayName: "Position Aware",
            tooltip: "當位置改變時是否讓群組裡的 Node 跟著調整相對位置",
          })),
          (R = ti({
            type: h(Q),
            displayName: "Position Mode",
            tooltip: "當座標改變時子元件跟著調動的參數",
            visible: function () {
              return this.m_positionAware;
            },
          })),
          (E = ti({
            displayName: "Rotation Aware",
            tooltip: "當旋轉改變時是否讓群組裡的 Node 跟著調整轉角",
          })),
          (G = ti({
            displayName: "Scale Aware",
            tooltip: "當縮放比例改變時是否讓群組裡的 Node 跟著改變縮放比例",
          })),
          (z = ti({
            type: h($),
            displayName: "Scale Mode",
            tooltip: "當縮放改變時子元件跟著調動的參數",
            visible: function () {
              return this.m_scaleAware;
            },
          })),
          (T = ti({
            displayName: "Color Aware",
            tooltip: "當顏色改變時是否讓群組裡的 Node 跟著改變顏色",
          })),
          (H = ti({
            type: h(ii),
            displayName: "Color Mode",
            tooltip: "當顏色改變時子元件跟著調動的參數",
            visible: function () {
              return this.m_colorAware;
            },
          })),
          (D = ti({
            displayName: "Size Aware",
            tooltip: "當大小改變時是否讓群組裡的 Node 跟著改變大小",
          })),
          (M = ti({
            type: h(K),
            displayName: "Size Mode",
            tooltip: "當大小改變時子元件跟著調動的參數",
            visible: function () {
              return this.m_sizeAware;
            },
          })),
          ei(
            (B =
              ni(
                (B =
                  A(
                    ((I = e(
                      (P = (function (i) {
                        function e() {
                          for (
                            var e,
                              t = arguments.length,
                              s = new Array(t),
                              a = 0;
                            a < t;
                            a++
                          )
                            s[a] = arguments[a];
                          return (
                            ((e =
                              i.call.apply(i, [this].concat(s)) ||
                              this).m_lastPos = void 0),
                            (e.m_lastRotation = void 0),
                            o(e, "m_syncOnEnable", I, n(e)),
                            o(e, "m_syncOnDisable", F, n(e)),
                            o(e, "m_syncRecursive", V, n(e)),
                            o(e, "m_nodes", x, n(e)),
                            o(e, "m_activeAware", k, n(e)),
                            o(e, "m_positionAware", L, n(e)),
                            o(e, "m_positionMode", W, n(e)),
                            o(e, "m_rotationAware", X, n(e)),
                            o(e, "m_scaleAware", Y, n(e)),
                            o(e, "m_scaleMode", U, n(e)),
                            o(e, "m_colorAware", Z, n(e)),
                            o(e, "m_colorMode", j, n(e)),
                            o(e, "m_sizeAware", q, n(e)),
                            o(e, "m_sizeMode", J, n(e)),
                            (e.m_isRegisted = !1),
                            e
                          );
                        }
                        t(e, i);
                        var r = e.prototype;
                        return (
                          (r.__preload = function () {
                            this.m_isRegisted ||
                              ((this.m_isRegisted = !0),
                              (this.m_lastPos = d(
                                this.node.position.x,
                                this.node.position.y
                              )),
                              (this.m_lastRotation = this.node.angle),
                              this.node.on(si, this.OnActiveChanged, this),
                              this.node.on(
                                l.EventType.COLOR_CHANGED,
                                this.OnColorChanged,
                                this
                              ),
                              this.node.on(
                                l.EventType.TRANSFORM_CHANGED,
                                this.OnRotationChanged,
                                this
                              ),
                              this.node.on(
                                l.EventType.TRANSFORM_CHANGED,
                                this.OnPositionChanged,
                                this
                              ),
                              this.node.on(
                                l.EventType.TRANSFORM_CHANGED,
                                this.OnScaleChanged,
                                this
                              ),
                              this.node.on(
                                l.EventType.SIZE_CHANGED,
                                this.OnSizeChanged,
                                this
                              ),
                              p.on(u.EVENT_BEFORE_DRAW, this.StateCheck, this));
                          }),
                          (r.ForceInit = function () {
                            this.__preload();
                          }),
                          (r.onDestroy = function () {
                            i.prototype.onDestroy &&
                              i.prototype.onDestroy.call(this),
                              this.node.off(si, this.OnActiveChanged, this),
                              this.node.off(
                                l.EventType.TRANSFORM_CHANGED,
                                this.OnPositionChanged,
                                this
                              ),
                              this.node.off(
                                l.EventType.COLOR_CHANGED,
                                this.OnColorChanged,
                                this
                              ),
                              this.node.off(
                                l.EventType.TRANSFORM_CHANGED,
                                this.OnRotationChanged,
                                this
                              ),
                              this.node.off(
                                l.EventType.TRANSFORM_CHANGED,
                                this.OnScaleChanged,
                                this
                              ),
                              this.node.off(
                                l.EventType.SIZE_CHANGED,
                                this.OnSizeChanged,
                                this
                              ),
                              p.off(u.EVENT_BEFORE_DRAW, this.StateCheck, this);
                          }),
                          (r.onEnable = function () {
                            i.prototype.onEnable &&
                              i.prototype.onEnable.call(this),
                              this.m_syncOnEnable && this.SyncAware();
                          }),
                          (r.onDisable = function () {
                            i.prototype.onDisable &&
                              i.prototype.onDisable.call(this),
                              this.m_syncOnDisable && this.SyncAware();
                          }),
                          (r.SyncAware = function () {
                            this.SyncActive(),
                              this.SyncSize(),
                              this.SyncPosition(),
                              this.SyncRotation(),
                              this.SyncOpacity(),
                              this.SyncColor(),
                              this.SyncScale();
                          }),
                          (r.StateCheck = function () {
                            this.node.isValid &&
                              this.node._renderFlag &&
                              this.OnOpacityChanged();
                          }),
                          (r.SyncGroupChild = function (i, t) {
                            var o = t.getComponent(e);
                            this.m_syncRecursive && o && i.call(o);
                          }),
                          (r.SyncScale = function () {
                            if (this.m_scaleAware)
                              for (
                                var i, e = s(this.m_nodes);
                                !(i = e()).done;

                              ) {
                                var t = i.value;
                                t &&
                                  t.isValid &&
                                  ((t.scale = new y(
                                    this.node.scale.x,
                                    this.node.scale.y,
                                    this.node.scale.z
                                  )),
                                  this.SyncGroupChild(this.SyncScale, t));
                              }
                          }),
                          (r.OnScaleChanged = function () {
                            this.SyncScale();
                          }),
                          (r.SyncColor = function () {
                            if (this.m_colorAware)
                              for (
                                var i,
                                  e = this.node.getComponent(m).color,
                                  t = s(this.m_nodes);
                                !(i = t()).done;

                              ) {
                                var o = i.value;
                                o &&
                                  o.isValid &&
                                  ((o.getComponent(m).color = e),
                                  this.SyncGroupChild(this.SyncColor, o));
                              }
                          }),
                          (r.OnColorChanged = function () {
                            this.SyncColor();
                          }),
                          (r.SyncOpacity = function () {
                            if (this.m_colorAware && this.m_colorMode & ii.A)
                              for (
                                var i, e = s(this.m_nodes);
                                !(i = e()).done;

                              ) {
                                var t = i.value;
                                t &&
                                  t.isValid &&
                                  ((t.getComponent(f).opacity =
                                    this.node.getComponent(f).opacity),
                                  this.SyncGroupChild(this.SyncOpacity, t));
                              }
                          }),
                          (r.OnOpacityChanged = function () {
                            this.SyncOpacity();
                          }),
                          (r.SyncRotation = function () {
                            if (this.m_rotationAware) {
                              var i = this.node.angle - this.m_lastRotation;
                              this.m_lastRotation = this.node.angle;
                              for (
                                var e, t = s(this.m_nodes);
                                !(e = t()).done;

                              ) {
                                var o = e.value;
                                o &&
                                  o.isValid &&
                                  ((o.angle = o.angle + i),
                                  this.SyncGroupChild(this.SyncRotation, o));
                              }
                            }
                          }),
                          (r.OnRotationChanged = function () {
                            this.SyncRotation();
                          }),
                          (r.SyncActive = function () {
                            if (this.m_activeAware)
                              for (
                                var i,
                                  e = this.node.active,
                                  t = s(this.m_nodes);
                                !(i = t()).done;

                              ) {
                                var o = i.value;
                                o &&
                                  o.isValid &&
                                  ((o.active = e),
                                  this.SyncGroupChild(this.SyncActive, o));
                              }
                          }),
                          (r.OnActiveChanged = function () {
                            this.SyncActive();
                          }),
                          (r.SyncPosition = function () {
                            if (this.m_positionAware) {
                              var i = this.node.position.x - this.m_lastPos.x,
                                e = this.node.position.y - this.m_lastPos.y;
                              (this.m_lastPos.x = this.node.position.x),
                                (this.m_lastPos.y = this.node.position.y);
                              for (
                                var t, o = s(this.m_nodes);
                                !(t = o()).done;

                              ) {
                                var n = t.value;
                                n &&
                                  n.isValid &&
                                  (n.setPosition(
                                    _(
                                      n.position.x + i,
                                      n.position.y + e,
                                      n.position.z
                                    )
                                  ),
                                  this.SyncGroupChild(this.SyncPosition, n));
                              }
                            }
                          }),
                          (r.OnPositionChanged = function () {
                            this.SyncPosition();
                          }),
                          (r.SyncSize = function () {
                            if (this.m_sizeAware)
                              for (
                                var i, e = s(this.m_nodes);
                                !(i = e()).done;

                              ) {
                                var t = i.value;
                                t &&
                                  t.isValid &&
                                  (this.m_sizeMode & K.WIDTH &&
                                    (t.getComponent(S).width =
                                      this.node.getComponent(S).width),
                                  this.m_sizeMode & K.HEIGHT &&
                                    (t.getComponent(S).height =
                                      this.node.getComponent(S).height),
                                  this.SyncGroupChild(this.SyncSize, t));
                              }
                          }),
                          (r.OnSizeChanged = function () {
                            this.SyncSize();
                          }),
                          a(e, [
                            {
                              key: "Nodes",
                              get: function () {
                                return this.m_nodes;
                              },
                            },
                          ]),
                          e
                        );
                      })(v)).prototype,
                      "m_syncOnEnable",
                      [C],
                      {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                          return !1;
                        },
                      }
                    )),
                    (F = e(P.prototype, "m_syncOnDisable", [b], {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      initializer: function () {
                        return !1;
                      },
                    })),
                    (V = e(P.prototype, "m_syncRecursive", [g], {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      initializer: function () {
                        return !1;
                      },
                    })),
                    (x = e(P.prototype, "m_nodes", [O], {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      initializer: function () {
                        return [];
                      },
                    })),
                    (k = e(P.prototype, "m_activeAware", [N], {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      initializer: function () {
                        return !0;
                      },
                    })),
                    (L = e(P.prototype, "m_positionAware", [w], {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      initializer: function () {
                        return !1;
                      },
                    })),
                    (W = e(P.prototype, "m_positionMode", [R], {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      initializer: function () {
                        return Q.BOTH;
                      },
                    })),
                    (X = e(P.prototype, "m_rotationAware", [E], {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      initializer: function () {
                        return !1;
                      },
                    })),
                    (Y = e(P.prototype, "m_scaleAware", [G], {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      initializer: function () {
                        return !1;
                      },
                    })),
                    (U = e(P.prototype, "m_scaleMode", [z], {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      initializer: function () {
                        return $.BOTH;
                      },
                    })),
                    (Z = e(P.prototype, "m_colorAware", [T], {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      initializer: function () {
                        return !1;
                      },
                    })),
                    (j = e(P.prototype, "m_colorMode", [H], {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      initializer: function () {
                        return ii.RGBA;
                      },
                    })),
                    (q = e(P.prototype, "m_sizeAware", [D], {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      initializer: function () {
                        return !1;
                      },
                    })),
                    (J = e(P.prototype, "m_sizeMode", [M], {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      initializer: function () {
                        return K.BOTH;
                      },
                    })),
                    (B = P))
                  ) || B)
              ) || B)
          ) || B)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/IframeCommandManager.ts",
  ["cc", "./index4.ts"],
  function (a) {
    "use strict";
    var e, n;
    return {
      setters: [
        function (a) {
          e = a.cclegacy;
        },
        function (a) {
          n = a.Astarte;
        },
      ],
      execute: function () {
        a({
          UpdateIframeCommand: function () {
            a("iframeCommandManager", n.IframeCommand);
          },
          iframeCommandManager: void 0,
        }),
          e._RF.push(
            {},
            "9692fSvI0xNR5GVPmbcEfzq",
            "IframeCommandManager",
            void 0
          ),
          e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/index.ts",
  [
    "cc",
    "./Tools.ts",
    "./Define.ts",
    "./RoundController.ts",
    "./ExtraBetController.ts",
    "./FakeServer.ts",
    "./TempoSetting.ts",
    "./CommonEffect.ts",
  ],
  function (e) {
    "use strict";
    var t;
    return {
      setters: [
        function (e) {
          t = e.cclegacy;
        },
        function (t) {
          var o = {};
          (o.FORMAT_NUMBER_TYPE = t.FORMAT_NUMBER_TYPE),
            (o.UpdateTools = t.UpdateTools),
            (o.tools = t.tools),
            e(o);
        },
        function (t) {
          var o = {};
          (o.CommonState = t.CommonState),
            (o.Define = t.Define),
            (o.UpdateDefine = t.UpdateDefine),
            e(o);
        },
        function (t) {
          var o = {};
          (o.UpdateRoundController = t.UpdateRoundController),
            (o.roundController = t.roundController),
            e(o);
        },
        function (t) {
          var o = {};
          (o.UpdateExtraBetController = t.UpdateExtraBetController),
            (o.extraBetController = t.extraBetController),
            e(o);
        },
        function (t) {
          var o = {};
          (o.UpdateFakeServer = t.UpdateFakeServer),
            (o.fakeServer = t.fakeServer),
            e(o);
        },
        function (t) {
          var o = {};
          (o.UpdateTempoSetting = t.UpdateTempoSetting),
            (o.tempoSetting = t.tempoSetting),
            e(o);
        },
        function (t) {
          e("CommonEffect", t.CommonEffect);
        },
      ],
      execute: function () {
        t._RF.push({}, "391b6CLPVhBEqeFr1f7nxDE", "index", void 0), t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/index2.ts",
  [
    "cc",
    "./AppManager.ts",
    "./BackpackManager.ts",
    "./BuyBonusManager.ts",
    "./CommonGameManager.ts",
    "./DailyMissionManager.ts",
    "./DebrisManager.ts",
    "./GaiaManager.ts",
    "./GiftCodeManager.ts",
    "./IframeCommandManager.ts",
    "./NewBottomBarManager.ts",
    "./NewExtraManager.ts",
    "./TrialManager.ts",
    "./MsgBoxManager.ts",
    "./StateManager.ts",
    "./AutoShowManager.ts",
    "./LocaleStringManager.ts",
    "./LocalStorageManager.ts",
    "./SoundManager.ts",
    "./EventManager.ts",
    "./LoadPrefabManager.ts",
    "./NotificationManager.ts",
    "./FunctionControlManager.ts",
    "./SoundAudioManager.ts",
  ],
  function (a) {
    "use strict";
    var e;
    return {
      setters: [
        function (a) {
          e = a.cclegacy;
        },
        function (e) {
          var t = {};
          (t.Lobby2Game = e.Lobby2Game),
            (t.UpdateAppManager = e.UpdateAppManager),
            (t.appManager = e.appManager),
            a(t);
        },
        function (e) {
          var t = {};
          (t.UpdateBackpack = e.UpdateBackpack),
            (t.backpackManager = e.backpackManager),
            a(t);
        },
        function (e) {
          var t = {};
          (t.UpdateBuyBonus = e.UpdateBuyBonus),
            (t.buyBonusManager = e.buyBonusManager),
            a(t);
        },
        function (e) {
          var t = {};
          (t.ErrorHandleType = e.ErrorHandleType),
            (t.ProtocolData = e.ProtocolData),
            (t.RequestMethod = e.RequestMethod),
            (t.UpdateCommonGame = e.UpdateCommonGame),
            (t.commonGameManager = e.commonGameManager),
            a(t);
        },
        function (e) {
          var t = {};
          (t.UpdateDailyMission = e.UpdateDailyMission),
            (t.missionManager = e.missionManager),
            a(t);
        },
        function (e) {
          var t = {};
          (t.UpdateDebris = e.UpdateDebris),
            (t.debrisManager = e.debrisManager),
            a(t);
        },
        function (e) {
          var t = {};
          (t.UpdateGaiaManager = e.UpdateGaiaManager),
            (t.gaiaManager = e.gaiaManager),
            a(t);
        },
        function (e) {
          var t = {};
          (t.UpdateGiftCode = e.UpdateGiftCode),
            (t.giftCodeManager = e.giftCodeManager),
            a(t);
        },
        function (e) {
          var t = {};
          (t.UpdateIframeCommand = e.UpdateIframeCommand),
            (t.iframeCommandManager = e.iframeCommandManager),
            a(t);
        },
        function (e) {
          var t = {};
          (t.AutoplayType_BS = e.AutoplayType_BS),
            (t.AutoplayType_DFI = e.AutoplayType_DFI),
            (t.AutoplayType_DFIII = e.AutoplayType_DFIII),
            (t.AutoplayType_FD = e.AutoplayType_FD),
            (t.AutoplayType_MS = e.AutoplayType_MS),
            (t.AutoplayType_ORG = e.AutoplayType_ORG),
            (t.BarManager = e.BarManager),
            (t.BetValueChange = e.BetValueChange),
            (t.BetViewState = e.BetViewState),
            (t.BottomBar_UIName = e.BottomBar_UIName),
            (t.CLICK_BUFFER_TYPE = e.CLICK_BUFFER_TYPE),
            (t.SlotBottomBarState = e.SlotBottomBarState),
            (t.UpdateNewBottombar = e.UpdateNewBottombar),
            (t.newBottombarManager = e.newBottombarManager),
            a(t);
        },
        function (e) {
          var t = {};
          (t.IconBoxSeat = e.IconBoxSeat),
            (t.UpdateNewExtra = e.UpdateNewExtra),
            (t.newExtraManager = e.newExtraManager),
            a(t);
        },
        function (e) {
          var t = {};
          (t.RefusedReason = e.RefusedReason),
            (t.UpdateTrial = e.UpdateTrial),
            (t.trialManager = e.trialManager),
            a(t);
        },
        function (e) {
          var t = {};
          (t.DEFAULT_TITLE_KEY = e.DEFAULT_TITLE_KEY),
            (t.UpdateMsgBox = e.UpdateMsgBox),
            (t.msgBoxManager = e.msgBoxManager),
            a(t);
        },
        function (e) {
          var t = {};
          (t.BaseState = e.BaseState),
            (t.UpdateStateManager = e.UpdateStateManager),
            (t.stateManager = e.stateManager),
            a(t);
        },
        function (e) {
          var t = {};
          (t.AutoShowOrder = e.AutoShowOrder),
            (t.UpdateAutoShow = e.UpdateAutoShow),
            (t.autoShowManager = e.autoShowManager),
            a(t);
        },
        function (e) {
          var t = {};
          (t.UpdateLocaleString = e.UpdateLocaleString),
            (t.localeStringManager = e.localeStringManager),
            a(t);
        },
        function (e) {
          var t = {};
          (t.UpdatelocalStorage = e.UpdatelocalStorage),
            (t.localStorageManager = e.localStorageManager),
            a(t);
        },
        function (e) {
          var t = {};
          (t.UpdateSoundManager = e.UpdateSoundManager),
            (t.soundManager = e.soundManager),
            a(t);
        },
        function (e) {
          var t = {};
          (t.CommonEventName = e.CommonEventName),
            (t.UpdateEventManager = e.UpdateEventManager),
            (t.eventManager = e.eventManager),
            a(t);
        },
        function (e) {
          var t = {};
          (t.LoadPrefabManager = e.LoadPrefabManager),
            (t.UpdateLoadPrefabManager = e.UpdateLoadPrefabManager),
            a(t);
        },
        function (e) {
          var t = {};
          (t.UpdateNotificationManager = e.UpdateNotificationManager),
            (t.notificationManager = e.notificationManager),
            a(t);
        },
        function (e) {
          var t = {};
          (t.UpdateFunctionControlManager = e.UpdateFunctionControlManager),
            (t.funcCtrlManagernager = e.funcCtrlManagernager),
            a(t);
        },
        function (e) {
          var t = {};
          (t.UpdateSoundAudioManager = e.UpdateSoundAudioManager),
            (t.soundAudioManager = e.soundAudioManager),
            a(t);
        },
      ],
      execute: function () {
        e._RF.push({}, "858d45NBqBLW5W3J41WER1G", "index", void 0), e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/index3.ts",
  [
    "cc",
    "./BigWinComponent.ts",
    "./Common_IdleState.ts",
    "./GroupNode.ts",
    "./ManualComponent.ts",
    "./MarqueeComponent.ts",
    "./NearWinEffectComponent.ts",
    "./ShakeComponent.ts",
    "./SloganComponent.ts",
    "./TimeBool.ts",
  ],
  function (n) {
    "use strict";
    var e;
    return {
      setters: [
        function (n) {
          e = n.cclegacy;
        },
        function (e) {
          var t = {};
          (t.BigWinAnimName = e.BigWinAnimName),
            (t.ExtraAniName = e.ExtraAniName),
            n(t);
        },
        function (e) {
          n("Common_IdleState", e.Common_IdleState);
        },
        null,
        function (e) {
          n("State", e.State);
        },
        null,
        function (e) {
          n("NearWinEffectComponent", e.NearWinEffectComponent);
        },
        function (e) {
          var t = {};
          (t.Shake = e.Shake), (t._TweenInfo = e._TweenInfo), n(t);
        },
        null,
        null,
      ],
      execute: function () {
        e._RF.push({}, "c6e0eKOKjtNwJBDq/hJOYgn", "index", void 0), e._RF.pop();
      },
    };
  }
);

System.register("chunks:///_virtual/index4.ts", ["cc"], function (t) {
  "use strict";
  var e;
  return {
    setters: [
      function (t) {
        e = t.cclegacy;
      },
    ],
    execute: function () {
      e._RF.push({}, "db4337zK39CwpvA3Bh+gyjl", "index", void 0),
        globalThis.Astarte || (globalThis.Astarte = {});
      t("Astarte", globalThis.Astarte);
      e._RF.pop();
    },
  };
});

System.register(
  "chunks:///_virtual/index5.ts",
  [
    "cc",
    "./index2.ts",
    "./LoadPrefabManager.ts",
    "./ConnectionManager.ts",
    "./index.ts",
    "./AppManager.ts",
    "./AutoShowManager.ts",
    "./BackpackManager.ts",
    "./DailyMissionManager.ts",
    "./GaiaManager.ts",
    "./StateManager.ts",
    "./IframeCommandManager.ts",
    "./LocaleStringManager.ts",
    "./TrialManager.ts",
    "./BuyBonusManager.ts",
    "./CommonGameManager.ts",
    "./LocalStorageManager.ts",
    "./SoundManager.ts",
    "./SoundAudioManager.ts",
    "./DebrisManager.ts",
    "./NewExtraManager.ts",
    "./GiftCodeManager.ts",
    "./MsgBoxManager.ts",
    "./NewBottomBarManager.ts",
    "./EventManager.ts",
    "./FunctionControlManager.ts",
    "./NotificationManager.ts",
    "./Define.ts",
    "./Tools.ts",
    "./RoundController.ts",
    "./ExtraBetController.ts",
    "./FakeServer.ts",
    "./TempoSetting.ts",
  ],
  function (t) {
    "use strict";
    var n,
      a,
      e,
      o,
      i,
      r,
      u,
      c,
      s,
      d,
      f,
      g,
      p,
      M,
      U,
      l,
      m,
      S,
      C,
      B,
      x,
      k,
      v,
      w,
      A,
      E,
      N,
      y,
      D,
      F,
      G;
    return {
      setters: [
        function (t) {
          n = t.cclegacy;
        },
        null,
        function (t) {
          a = t.UpdateLoadPrefabManager;
        },
        function (t) {
          e = t.UpdateConnectionManager;
        },
        null,
        function (t) {
          o = t.UpdateAppManager;
        },
        function (t) {
          i = t.UpdateAutoShow;
        },
        function (t) {
          r = t.UpdateBackpack;
        },
        function (t) {
          u = t.UpdateDailyMission;
        },
        function (t) {
          c = t.UpdateGaiaManager;
        },
        function (t) {
          s = t.UpdateStateManager;
        },
        function (t) {
          d = t.UpdateIframeCommand;
        },
        function (t) {
          f = t.UpdateLocaleString;
        },
        function (t) {
          g = t.UpdateTrial;
        },
        function (t) {
          p = t.UpdateBuyBonus;
        },
        function (t) {
          M = t.UpdateCommonGame;
        },
        function (t) {
          U = t.UpdatelocalStorage;
        },
        function (t) {
          l = t.UpdateSoundManager;
        },
        function (t) {
          m = t.UpdateSoundAudioManager;
        },
        function (t) {
          S = t.UpdateDebris;
        },
        function (t) {
          C = t.UpdateNewExtra;
        },
        function (t) {
          B = t.UpdateGiftCode;
        },
        function (t) {
          x = t.UpdateMsgBox;
        },
        function (t) {
          k = t.UpdateNewBottombar;
        },
        function (t) {
          v = t.UpdateEventManager;
        },
        function (t) {
          w = t.UpdateFunctionControlManager;
        },
        function (t) {
          A = t.UpdateNotificationManager;
        },
        function (t) {
          E = t.UpdateDefine;
        },
        function (t) {
          N = t.UpdateTools;
        },
        function (t) {
          y = t.UpdateRoundController;
        },
        function (t) {
          D = t.UpdateExtraBetController;
        },
        function (t) {
          F = t.UpdateFakeServer;
        },
        function (t) {
          G = t.UpdateTempoSetting;
        },
      ],
      execute: function () {
        t("AstarteInit", function () {
          o(),
            i(),
            r(),
            u(),
            c(),
            s(),
            d(),
            f(),
            g(),
            p(),
            M(),
            U(),
            l(),
            m(),
            S(),
            C(),
            B(),
            x(),
            k(),
            v(),
            a(),
            w(),
            e(),
            A(),
            E(),
            N(),
            y(),
            D(),
            F(),
            G();
        }),
          n._RF.push({}, "f34139liEtOX7eeljN8Cz8w", "index", void 0),
          n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/LabelSpacingX.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, n, i, r, a, c, o, p, s;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (r = e.assertThisInitialized),
            (a = e.createClass);
        },
        function (e) {
          (c = e.cclegacy),
            (o = e._decorator),
            (p = e.Label),
            (s = e.Component);
        },
      ],
      execute: function () {
        var u, l, g;
        c._RF.push({}, "e33faPhWqxMHa92Db40WLqj", "LabelSpacingX", void 0);
        var h = o.ccclass,
          X = o.property,
          f = o.executeInEditMode,
          y = o.requireComponent;
        e(
          "LabelSpacingX",
          h("LabelSpacingX")(
            (u =
              y(p)(
                (u =
                  f(
                    ((g = t(
                      (l = (function (e) {
                        function t() {
                          for (
                            var t,
                              n = arguments.length,
                              a = new Array(n),
                              c = 0;
                            c < n;
                            c++
                          )
                            a[c] = arguments[c];
                          return (
                            (t = e.call.apply(e, [this].concat(a)) || this),
                            i(t, "_spacingX", g, r(t)),
                            t
                          );
                        }
                        n(t, e);
                        var c = t.prototype;
                        return (
                          (c.onEnable = function () {
                            this.resetSpacingX();
                          }),
                          (c.resetSpacingX = function () {
                            var e = this.node.getComponent(p);
                            e &&
                              e.cacheMode === p.CacheMode.CHAR &&
                              (e.spacingX = this._spacingX);
                          }),
                          a(t, [
                            {
                              key: "spacingX",
                              get: function () {
                                return this._spacingX;
                              },
                              set: function (e) {
                                (this._spacingX = e), this.resetSpacingX();
                              },
                            },
                          ]),
                          t
                        );
                      })(s)).prototype,
                      "_spacingX",
                      [X],
                      {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                          return 0;
                        },
                      }
                    )),
                    t(
                      l.prototype,
                      "spacingX",
                      [X],
                      Object.getOwnPropertyDescriptor(l.prototype, "spacingX"),
                      l.prototype
                    ),
                    (u = l))
                  ) || u)
              ) || u)
          ) || u
        );
        c._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/LangImg.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./index2.ts",
    "./LocaleStringManager.ts",
  ],
  function (e) {
    "use strict";
    var t, r, n, i, o, a, s, u, m, p, c, l, g, f, d, h;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (r = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (i = e.assertThisInitialized),
            (o = e.asyncToGenerator),
            (a = e.regeneratorRuntime);
        },
        function (e) {
          (s = e.cclegacy),
            (u = e._decorator),
            (m = e.CCString),
            (p = e.Enum),
            (c = e.CCBoolean),
            (l = e.Sprite),
            (g = e.Component),
            (f = e.assetManager),
            (d = e.error);
        },
        null,
        function (e) {
          h = e.localeStringManager;
        },
      ],
      execute: function () {
        var y, b, _, S, v, C, x, I, P, G, T, A, N;
        s._RF.push({}, "a6f15DRaTNJEaqvyk6QuIo3", "LangImg", void 0);
        var w,
          z = u.ccclass,
          F = u.executeInEditMode,
          L = u.property,
          O = "db://assets/game/Text/en/",
          R = "db://assets/otherAsttText/AsttText/en/";
        !(function (e) {
          (e[(e.PNG = 0)] = "PNG"), (e[(e.JPG = 1)] = "JPG");
        })(w || (w = {}));
        var M = { PNG: ".png", JPG: ".jpg" };
        e(
          "LangImg",
          ((y = z("LangImg")),
          (b = L({ type: m, tooltip: "圖片路徑" })),
          (_ = L({
            type: m,
            tooltip:
              "額外路徑，如果不是在game/Text/en/或otherAsttText/AsttText/en/下，請填入後續路徑",
          })),
          (S = L({ type: p(w), tooltip: "圖片類型" })),
          (v = L({ type: c, tooltip: "是否為通用圖片" })),
          (C = L({ type: c, tooltip: "是否由這個組件來設定多語系圖片" })),
          y(
            (x =
              F(
                ((P = t(
                  (I = (function (e) {
                    function t() {
                      for (
                        var t, r = arguments.length, o = new Array(r), a = 0;
                        a < r;
                        a++
                      )
                        o[a] = arguments[a];
                      return (
                        (t = e.call.apply(e, [this].concat(o)) || this),
                        n(t, "m_path", P, i(t)),
                        n(t, "m_extraPath", G, i(t)),
                        n(t, "m_imgTypeNo", T, i(t)),
                        n(t, "m_isCommon", A, i(t)),
                        n(t, "m_isUsingSetImage", N, i(t)),
                        t
                      );
                    }
                    r(t, e);
                    var s = t.prototype;
                    return (
                      (s.start = function () {
                        this.SetImg();
                      }),
                      (s.SetImg = function () {
                        var e = this;
                        if (this.m_isUsingSetImage) {
                          var t = null;
                          if (this.m_isCommon) {
                            if (!(t = h.GetCommonAtlas()))
                              return void h.RegisterOnCommonAltasLoadedCb(
                                function () {
                                  e.SetImg();
                                }
                              );
                          } else if (!(t = h.GetGameAtlas()))
                            return void h.RegisterOnGameAltasLoadedCb(
                              function () {
                                e.SetImg();
                              }
                            );
                          var r = this.node.getComponent(l);
                          r || (r = this.node.addComponent(l)),
                            (r.spriteFrame = t.getSpriteFrame(this.m_path));
                        }
                      }),
                      (s.SetPreviewImg = function () {
                        this.AdjustComponentOrdering(),
                          this.ReadSpriteFrame(),
                          (t.prototype._onBeforeSerialize = function () {
                            return this.OnBeforeSerialize(), !1;
                          });
                      }),
                      (s.AdjustComponentOrdering = function () {}),
                      (s.ReadSpriteFrame = (function () {
                        var e = o(
                          a().mark(function e() {
                            var t,
                              r,
                              n,
                              i,
                              o,
                              s,
                              u = this;
                            return a().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (this.m_path) {
                                        e.next = 2;
                                        break;
                                      }
                                      return e.abrupt("return");
                                    case 2:
                                      return (
                                        (t =
                                          (this.m_isCommon ? R : O) +
                                          this.m_extraPath +
                                          this.m_path),
                                        (r = M.PNG),
                                        (n = w[this.m_imgTypeNo]),
                                        Object.prototype.hasOwnProperty.call(
                                          w,
                                          n
                                        ) &&
                                          ((i = w[n]),
                                          Number(i) === this.m_imgTypeNo &&
                                            (r = M[n])),
                                        (e.next = 8),
                                        Editor.Message.request(
                                          "asset-db",
                                          "query-assets",
                                          {
                                            importer: "sprite-frame",
                                            pattern: t + r,
                                          }
                                        )
                                      );
                                    case 8:
                                      (o = e.sent),
                                        (s = { uuid: o[0].uuid }),
                                        f.loadAny(s, function (e, t) {
                                          if (e)
                                            d(
                                              "Failed to load cc.SpriteFrame resources:",
                                              e
                                            );
                                          else {
                                            var r = u.node.getComponent(l);
                                            r || (r = u.node.addComponent(l)),
                                              (r.spriteFrame = t);
                                          }
                                        });
                                    case 11:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this
                            );
                          })
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })()),
                      (s.OnBeforeSerialize = function () {}),
                      t
                    );
                  })(g)).prototype,
                  "m_path",
                  [b],
                  {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                      return "";
                    },
                  }
                )),
                (G = t(I.prototype, "m_extraPath", [_], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return "";
                  },
                })),
                (T = t(I.prototype, "m_imgTypeNo", [S], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return w.PNG;
                  },
                })),
                (A = t(I.prototype, "m_isCommon", [v], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return !1;
                  },
                })),
                (N = t(I.prototype, "m_isUsingSetImage", [C], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return !0;
                  },
                })),
                (x = I))
              ) || x)
          ) || x)
        );
        s._RF.pop();
      },
    };
  }
);

System.register("chunks:///_virtual/LicenseSetting.ts", ["cc"], function (e) {
  "use strict";
  var n;
  return {
    setters: [
      function (e) {
        n = e.cclegacy;
      },
    ],
    execute: function () {
      var t;
      e("SwitchOffKeyDefine", void 0),
        n._RF.push({}, "1d854+nhA1JgLXZLaNHz9eU", "LicenseSetting", void 0),
        (function (e) {
          (e[(e.ShopingMall = 1)] = "ShopingMall"),
            (e[(e.ShowAutoSetting = 16)] = "ShowAutoSetting"),
            (e[(e.NoSoundUnder1 = 17)] = "NoSoundUnder1"),
            (e[(e.NoQuickSpin = 18)] = "NoQuickSpin"),
            (e[(e.CloseManual = 39)] = "CloseManual");
        })(t || (t = e("SwitchOffKeyDefine", {}))),
        n._RF.pop();
    },
  };
});

System.register(
  "chunks:///_virtual/LoadPrefabManager.ts",
  ["cc", "./index4.ts"],
  function (a) {
    "use strict";
    var e, r;
    return {
      setters: [
        function (a) {
          e = a.cclegacy;
        },
        function (a) {
          r = a.Astarte;
        },
      ],
      execute: function () {
        a({
          LoadPrefabManager: void 0,
          UpdateLoadPrefabManager: function () {
            a("LoadPrefabManager", r.LoadPrefabManager);
          },
        }),
          e._RF.push(
            {},
            "18947v7ICNDlYz3G5vE642k",
            "LoadPrefabManager",
            void 0
          ),
          e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/LocaleStringManager.ts",
  ["cc", "./index4.ts"],
  function (t) {
    "use strict";
    var e, n;
    return {
      setters: [
        function (t) {
          e = t.cclegacy;
        },
        function (t) {
          n = t.Astarte;
        },
      ],
      execute: function () {
        t({
          UpdateLocaleString: function () {
            t("localeStringManager", n.LocaleString);
          },
          localeStringManager: void 0,
        }),
          e._RF.push(
            {},
            "d388f5XkRRFcYXg5usnXTa/",
            "LocaleStringManager",
            void 0
          ),
          e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/LocalStorageManager.ts",
  ["cc", "./index4.ts"],
  function (t) {
    "use strict";
    var a, e;
    return {
      setters: [
        function (t) {
          a = t.cclegacy;
        },
        function (t) {
          e = t.Astarte;
        },
      ],
      execute: function () {
        t({
          UpdatelocalStorage: function () {
            t("localStorageManager", e.localStorage);
          },
          localStorageManager: void 0,
        }),
          a._RF.push(
            {},
            "077a5gmYEpIQqr+YOtt+g08",
            "LocalStorageManager",
            void 0
          ),
          a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/main",
  [
    "./BigWinComponent.ts",
    "./ButtonPro.ts",
    "./CommonBuyBonus.ts",
    "./CommonBuyBonusCell.ts",
    "./ColorText.ts",
    "./Common_IdleState.ts",
    "./ColorFadingUI.ts",
    "./EffectView.ts",
    "./EvtReceiver.ts",
    "./ExtraBetComponent.ts",
    "./FeaturePageComponent.ts",
    "./GroupNode.ts",
    "./LabelSpacingX.ts",
    "./LangImg.ts",
    "./ManualComponent.ts",
    "./MarqueeComponent.ts",
    "./NearWinEffectComponent.ts",
    "./RenderDataBump.ts",
    "./ScrollEventHandler.ts",
    "./SeriesComponent.ts",
    "./ShakeComponent.ts",
    "./SloganComponent.ts",
    "./BoneFollow.ts",
    "./NewBoneFollow.ts",
    "./NewSlotColorFollow.ts",
    "./SkeletonSync.ts",
    "./SlotActivator.ts",
    "./SlotColorFollow.ts",
    "./SlotCulling.ts",
    "./SpineKit.ts",
    "./TimeBool.ts",
    "./index3.ts",
    "./LicenseSetting.ts",
    "./AppManager.ts",
    "./AutoShowManager.ts",
    "./BackpackManager.ts",
    "./BuyBonusManager.ts",
    "./CommonGameManager.ts",
    "./DailyMissionManager.ts",
    "./DebrisManager.ts",
    "./EventManager.ts",
    "./FunctionControlManager.ts",
    "./GaiaManager.ts",
    "./GiftCodeManager.ts",
    "./IframeCommandManager.ts",
    "./LoadPrefabManager.ts",
    "./LocalStorageManager.ts",
    "./LocaleStringManager.ts",
    "./MsgBoxManager.ts",
    "./NewBottomBarManager.ts",
    "./NewExtraManager.ts",
    "./NotificationManager.ts",
    "./SoundAudioManager.ts",
    "./SoundManager.ts",
    "./StateManager.ts",
    "./TrialManager.ts",
    "./index2.ts",
    "./index5.ts",
    "./FeatureManagerComponent.ts",
    "./SwipeScreen.ts",
    "./ZipBundleLoader.ts",
    "./index4.ts",
    "./ConnectionManager.ts",
    "./Define.ts",
    "./CommonEffect.ts",
    "./ExtraBetController.ts",
    "./FakeServer.ts",
    "./RoundController.ts",
    "./TempoSetting.ts",
    "./Tools.ts",
    "./index.ts",
  ],
  function () {
    "use strict";
    return {
      setters: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ],
      execute: function () {},
    };
  }
);

System.register(
  "chunks:///_virtual/ManualComponent.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./index2.ts",
    "./Tools.ts",
    "./LicenseSetting.ts",
    "./SoundManager.ts",
    "./MsgBoxManager.ts",
    "./LocaleStringManager.ts",
  ],
  function (e) {
    "use strict";
    var t, n, o, a, i, r, l, u, f, s, p, c, m, _, h, g, y;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (o = e.initializerDefineProperty),
            (a = e.assertThisInitialized),
            (i = e.createClass);
        },
        function (e) {
          (r = e.cclegacy),
            (l = e._decorator),
            (u = e.Node),
            (f = e.Sprite),
            (s = e.tween),
            (p = e.Animation),
            (c = e.Component);
        },
        null,
        function (e) {
          m = e.tools;
        },
        function (e) {
          _ = e.SwitchOffKeyDefine;
        },
        function (e) {
          h = e.soundManager;
        },
        function (e) {
          g = e.msgBoxManager;
        },
        function (e) {
          y = e.localeStringManager;
        },
      ],
      execute: function () {
        var C, S, d, I, B, M, O, b, v, T, w, D, L, k, x;
        r._RF.push({}, "0c18bO40hVJB4/zzDByb8vr", "ManualComponent", void 0);
        var z = l.ccclass,
          A = l.property,
          N = "Manual_Open",
          F = "Manual_Close",
          E = e("State", {
            Open: "Open",
            Opening: "Opening",
            Close: "Close",
            Closing: "Closing",
          });
        e(
          "default",
          ((C = z("ManualComponent")),
          (S = A({ type: u, tooltip: "特色說明按鈕(新版跑馬燈)" })),
          (d = A({ type: u, tooltip: "特色說明本體(新版跑馬燈)" })),
          (I = A({ type: u, tooltip: "特色說明關閉按鈕(新版跑馬燈)" })),
          (B = A({ type: u, tooltip: "特色說明周圍關閉按鈕(新版跑馬燈)" })),
          (M = A({ type: f, tooltip: "特色說明內容(新版跑馬燈)" })),
          (O = A({ type: f, tooltip: "標題" })),
          C(
            ((T = t(
              (v = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    i[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(i)) || this),
                    o(t, "m_featureInfoBtn", T, a(t)),
                    o(t, "m_featureInfoBoard", w, a(t)),
                    o(t, "m_featureInfoCloseBtn", D, a(t)),
                    o(t, "m_featureInfoSideBtn", L, a(t)),
                    o(t, "m_featureInfoTxt", k, a(t)),
                    o(t, "m_titleSprite", x, a(t)),
                    (t.m_manulState = E.Close),
                    (t.m_manulOpenLock = !1),
                    t
                  );
                }
                n(t, e);
                var r = t.prototype;
                return (
                  (r.onLoad = function () {
                    var e = this;
                    m.CheckSwitchOff(_.CloseManual)
                      ? (this.node.active = !1)
                      : (this.m_featureInfoBtn &&
                          this.m_featureInfoBtn.on(
                            u.EventType.TOUCH_END,
                            function () {
                              e.OpenManul(),
                                h.Play(Astarte.Define.AudioClips.COMMON_BTN);
                            }
                          ),
                        this.m_featureInfoCloseBtn &&
                          this.m_featureInfoCloseBtn.on(
                            u.EventType.TOUCH_END,
                            function () {
                              e.CloseManul(),
                                h.Play(Astarte.Define.AudioClips.COMMON_BTN);
                            }
                          ),
                        this.m_featureInfoSideBtn &&
                          this.m_featureInfoSideBtn.on(
                            u.EventType.TOUCH_END,
                            function () {
                              e.CloseManul();
                            }
                          ));
                  }),
                  (r.OpenManul = function () {
                    var e = this;
                    this.m_manulOpenLock
                      ? g.ShowMessageBox(
                          Astarte.Define.StringKey.FREEWINCASH_PLAYING1
                        )
                      : this.m_manulState == E.Close &&
                        ((this.m_featureInfoBoard.active = !0),
                        s(this.m_featureInfoBoard)
                          .call(function () {
                            (e.m_manulState = E.Opening),
                              e.m_featureInfoBoard
                                .getComponentInChildren(p)
                                .play(N);
                          })
                          .delay(0.5)
                          .call(function () {
                            e.m_manulState = E.Open;
                          })
                          .start());
                  }),
                  (r.CloseManul = function () {
                    var e = this;
                    this.m_manulState == E.Open &&
                      s(this.m_featureInfoBoard)
                        .call(function () {
                          (e.m_manulState = E.Closing),
                            e.m_featureInfoBoard
                              .getComponentInChildren(p)
                              .play(F);
                        })
                        .delay(0.5)
                        .call(function () {
                          (e.m_manulState = E.Close),
                            (e.m_featureInfoBoard.active = !1);
                        })
                        .start();
                  }),
                  (r.SetTxt = function (e, t) {
                    void 0 === t && (t = null);
                    for (
                      var n = y.GetGameAtlas(), o = 0;
                      o < this.m_featureInfoTxt.length;
                      o++
                    ) {
                      n.getSpriteFrame(e[o]) &&
                        (this.m_featureInfoTxt[o].spriteFrame =
                          n.getSpriteFrame(e[o]));
                    }
                    this.m_titleSprite &&
                      t &&
                      (this.m_titleSprite.spriteFrame = n.getSpriteFrame(t));
                  }),
                  i(t, [
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
                      set: function (e) {
                        this.m_manulOpenLock = e;
                      },
                    },
                  ]),
                  t
                );
              })(c)).prototype,
              "m_featureInfoBtn",
              [S],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (w = t(v.prototype, "m_featureInfoBoard", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = t(v.prototype, "m_featureInfoCloseBtn", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = t(v.prototype, "m_featureInfoSideBtn", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = t(v.prototype, "m_featureInfoTxt", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (x = t(v.prototype, "m_titleSprite", [O], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (b = v))
          ) || b)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MarqueeComponent.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./index.ts",
    "./Tools.ts",
    "./Define.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, r, s, o, a, m, h, p, c, l, u, _, d, f, g, S, v, y;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (r = t.assertThisInitialized),
            (s = t.asyncToGenerator),
            (o = t.regeneratorRuntime);
        },
        function (t) {
          (a = t.cclegacy),
            (m = t._decorator),
            (h = t.CCFloat),
            (p = t.Node),
            (c = t.UITransform),
            (l = t.Sprite),
            (u = t.v2),
            (_ = t.Component),
            (d = t.v3),
            (f = t.tween),
            (g = t.error),
            (S = t.RichText);
        },
        null,
        function (t) {
          v = t.tools;
        },
        function (t) {
          y = t.Define;
        },
      ],
      execute: function () {
        var b, w, x, T, C, k, W, z, D, I, M, L, F, R;
        a._RF.push({}, "1d950BFoN5LhJJ79uyt+/E+", "MarqueeComponent", void 0);
        var P = m.ccclass,
          E = m.property;
        t(
          "default",
          ((b = E({ type: h, tooltip: "每秒的位移量" })),
          (w = E({ type: h, tooltip: "循環播放的間隔" })),
          (x = E({ type: h, tooltip: "未超出的停留時間" })),
          (T = E({ type: h, tooltip: "超出時的停留時間" })),
          (C = E({ type: h, tooltip: "尾部保留的空間" })),
          (k = E({ type: p, tooltip: "跑馬燈內容節點" })),
          P(
            ((D = e(
              (z = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, s = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    s[o] = arguments[o];
                  return (
                    (e = t.call.apply(t, [this].concat(s)) || this),
                    n(e, "m_moveSpeed", D, r(e)),
                    n(e, "m_delayTime", I, r(e)),
                    n(e, "m_waitTime", M, r(e)),
                    n(e, "m_moveDelayTime", L, r(e)),
                    n(e, "m_tailLeftSpace", F, r(e)),
                    n(e, "m_content", R, r(e)),
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
                i(e, t);
                var a = e.prototype;
                return (
                  (a.Init = function (t) {
                    (this.m_imgs = t),
                      (this.m_viewWidth =
                        this.node.getComponent(c).contentSize.width);
                    var e = this.m_content
                      ? this.m_content
                      : this.node.children[0];
                    t &&
                      t.length > 0 &&
                      (e ||
                        ((e = new p()).addComponent(c), this.node.addChild(e)),
                      (this.m_stringSprite = e.getComponent(l)),
                      this.m_stringSprite ||
                        (this.m_stringSprite = e.addComponent(l)),
                      (this.m_stringSprite.type = l.Type.SIMPLE),
                      (this.m_stringSprite.sizeMode = l.SizeMode.TRIMMED)),
                      e.getComponent(c).setAnchorPoint(u(0, 0.5)),
                      (this.m_scale = e.scale.x);
                  }),
                  (a.ShowOnce = (function () {
                    var t = s(
                      o().mark(function t(e) {
                        var i, n, r, s, a, m, h, p, l, u;
                        return o().wrap(
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
                                  if (!(i = this.m_content.getComponent(S))) {
                                    t.next = 19;
                                    break;
                                  }
                                  return (
                                    (i.string = e),
                                    (n = v.times(
                                      i.node.getComponent(c).width +
                                        this.m_tailLeftSpace,
                                      this.m_scale
                                    )),
                                    (i.node.active = !0),
                                    (r = n + this.m_viewWidth),
                                    (s = v.divide(r, this.m_moveSpeed)),
                                    (a = i.node.position.x),
                                    f(i.node)
                                      .to(s, { position: d(a - r, 0) })
                                      .start(),
                                    (t.next = 15),
                                    y.Wait(this, s)
                                  );
                                case 15:
                                  (i.node.active = !1),
                                    i.node.setPosition(d(this.m_viewWidth, 0)),
                                    (t.next = 22);
                                  break;
                                case 19:
                                  return (
                                    g("RichText doesn't exist"),
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
                                        this.m_imgIndex >= this.m_imgs.length &&
                                          (this.m_imgIndex = 0),
                                        (m = this.m_imgs[this.m_imgIndex]))
                                      : (m =
                                          this.m_imgs[
                                            Math.floor(
                                              Math.random() * this.m_imgs.length
                                            )
                                          ]),
                                    (this.m_stringSprite.spriteFrame = m),
                                    (h = v.times(
                                      this.m_stringSprite.spriteFrame.rect
                                        .width + this.m_tailLeftSpace,
                                      this.m_scale
                                    )),
                                    (this.m_stringSprite.node.active = !0),
                                    !(h > this.m_viewWidth))
                                  ) {
                                    t.next = 39;
                                    break;
                                  }
                                  return (
                                    (this.m_stringSprite.node.position = d(
                                      0,
                                      0
                                    )),
                                    (t.next = 32),
                                    y.Wait(this, this.m_moveDelayTime)
                                  );
                                case 32:
                                  return (
                                    (p = h + this.m_viewWidth),
                                    (l = v.divide(p, this.m_moveSpeed)),
                                    f(this.m_stringSprite.node)
                                      .to(l, { position: d(-h, 0) })
                                      .start(),
                                    (t.next = 37),
                                    y.Wait(this, l)
                                  );
                                case 37:
                                  t.next = 43;
                                  break;
                                case 39:
                                  return (
                                    (u = v.minus(this.m_viewWidth, h)),
                                    (this.m_stringSprite.node.position = d(
                                      v.divide(u, 2),
                                      0
                                    )),
                                    (t.next = 43),
                                    y.Wait(this, this.m_waitTime)
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
                  (a.ShowForever = (function () {
                    var t = s(
                      o().mark(function t(e) {
                        return o().wrap(
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
                                    !(this.m_delayTime && this.m_delayTime > 0)
                                  ) {
                                    t.next = 7;
                                    break;
                                  }
                                  return (
                                    (t.next = 7), y.Wait(this, this.m_delayTime)
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
                  (a.Stop = function () {
                    this.m_isStop = !0;
                  }),
                  (a.ChangeTimeSetting = function (t, e, i, n, r) {
                    (this.m_moveSpeed = t),
                      (this.m_delayTime = e),
                      (this.m_waitTime = i),
                      (this.m_moveDelayTime = n),
                      (this.m_tailLeftSpace = r);
                  }),
                  e
                );
              })(_)).prototype,
              "m_moveSpeed",
              [b],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return 0;
                },
              }
            )),
            (I = e(z.prototype, "m_delayTime", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (M = e(z.prototype, "m_waitTime", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (L = e(z.prototype, "m_moveDelayTime", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (F = e(z.prototype, "m_tailLeftSpace", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (R = e(z.prototype, "m_content", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (W = z))
          ) || W)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MsgBoxManager.ts",
  ["cc", "./index4.ts"],
  function (t) {
    "use strict";
    var e, n;
    return {
      setters: [
        function (t) {
          e = t.cclegacy;
        },
        function (t) {
          n = t.Astarte;
        },
      ],
      execute: function () {
        t({
          UpdateMsgBox: function () {
            t("msgBoxManager", n.MsgBox);
          },
          msgBoxManager: void 0,
        }),
          e._RF.push({}, "0f3df9al6NIJJ1/5ZP5aShG", "MsgBoxManager", void 0);
        t("DEFAULT_TITLE_KEY", "MSGBOX_TITLE_SYSTEM_INFO");
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/NearWinEffectComponent.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SpineKit.ts"],
  function (e) {
    "use strict";
    var n, t, i, r, a, o, s, c, l, u, p, m, f, h, _;
    return {
      setters: [
        function (e) {
          (n = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (r = e.assertThisInitialized),
            (a = e.asyncToGenerator),
            (o = e.regeneratorRuntime);
        },
        function (e) {
          (s = e.cclegacy),
            (c = e._decorator),
            (l = e.CCBoolean),
            (u = e.sp),
            (p = e.Component),
            (m = e.Tween),
            (f = e.Color),
            (h = e.tween);
        },
        function (e) {
          _ = e.default;
        },
      ],
      execute: function () {
        var b, y, d, C, v, k, w, x, g;
        s._RF.push(
          {},
          "93417uqlh9Fm6TH2poz4GO4",
          "NearWinEffectComponent",
          void 0
        );
        var P = "FadeIn",
          S = "FadeOut",
          T = "NearWin",
          F = c.ccclass,
          N = c.property;
        e(
          "NearWinEffectComponent",
          ((b = F("NearWinEffectComponent")),
          (y = N({ type: Number, tooltip: "淡入時間" })),
          (d = N({ type: Number, tooltip: "淡出時間" })),
          (C = N({ type: l, tooltip: "是否使用spine動畫" })),
          b(
            ((w = n(
              (k = (function (e) {
                function n() {
                  for (
                    var n, t = arguments.length, a = new Array(t), o = 0;
                    o < t;
                    o++
                  )
                    a[o] = arguments[o];
                  return (
                    (n = e.call.apply(e, [this].concat(a)) || this),
                    i(n, "m_fadeInTime", w, r(n)),
                    i(n, "m_fadeOutTime", x, r(n)),
                    i(n, "m_isPlaySpine", g, r(n)),
                    (n.m_cancelCb = null),
                    (n.m_spine = null),
                    n
                  );
                }
                t(n, e);
                var s = n.prototype;
                return (
                  (s.start = function () {
                    this.m_spine || (this.node.active = !1);
                  }),
                  (s.FadeIn = (function () {
                    var e = a(
                      o().mark(function e(n) {
                        var t,
                          i = this;
                        return o().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    (this.CheckSpine(),
                                    (this.node.active = !0),
                                    !this.m_isPlaySpine)
                                  ) {
                                    e.next = 9;
                                    break;
                                  }
                                  return (
                                    (e.next = 5),
                                    _.PlayAnimation(this.m_spine, P)
                                  );
                                case 5:
                                  e.sent ||
                                    _.PlayAnimation(this.m_spine, T, !0),
                                    (e.next = 16);
                                  break;
                                case 9:
                                  return (
                                    m.stopAllByTarget(this.m_spine.color),
                                    null == (t = this.m_cancelCb) ||
                                      t.call(this),
                                    (this.node.active = !0),
                                    (this.m_spine.color = new f(
                                      this.m_spine.color.r,
                                      this.m_spine.color.g,
                                      this.m_spine.color.b,
                                      0
                                    )),
                                    null == n || n(),
                                    (e.next = 16),
                                    new Promise(function (e) {
                                      (i.m_cancelCb = function () {
                                        e();
                                      }),
                                        h(i.m_spine.color)
                                          .to(i.m_fadeInTime, { a: 255 })
                                          .call(function () {
                                            e(), (i.m_cancelCb = null);
                                          })
                                          .start();
                                    })
                                  );
                                case 16:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (s.FadeOut = (function () {
                    var e = a(
                      o().mark(function e() {
                        var n,
                          t,
                          i = this;
                        return o().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    (this.CheckSpine(), !this.m_isPlaySpine)
                                  ) {
                                    e.next = 12;
                                    break;
                                  }
                                  if (this.node.active) {
                                    e.next = 4;
                                    break;
                                  }
                                  return e.abrupt("return", !0);
                                case 4:
                                  return (
                                    this.CheckSpine(),
                                    (e.next = 7),
                                    _.PlayAnimation(this.m_spine, S)
                                  );
                                case 7:
                                  return (
                                    (n = e.sent) || (this.node.active = !1),
                                    e.abrupt("return", !n)
                                  );
                                case 12:
                                  if (!(this.m_spine.color.a <= 0)) {
                                    e.next = 14;
                                    break;
                                  }
                                  return e.abrupt("return", !1);
                                case 14:
                                  return (
                                    m.stopAllByTarget(this.m_spine.color),
                                    null == (t = this.m_cancelCb) ||
                                      t.call(this),
                                    (e.next = 18),
                                    new Promise(function (e) {
                                      (i.m_cancelCb = function () {
                                        e(!1);
                                      }),
                                        h(i.m_spine.color)
                                          .to(i.m_fadeOutTime, { a: 0 })
                                          .call(function () {
                                            e(!0),
                                              (i.m_cancelCb = null),
                                              (i.node.active = !1);
                                          })
                                          .start();
                                    })
                                  );
                                case 18:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (s.CheckSpine = function () {
                    this.m_spine ||
                      ((this.m_spine = this.node.getComponent(u.Skeleton)),
                      this.m_isPlaySpine && this.m_spine.setMix(P, S, 0.05));
                  }),
                  n
                );
              })(p)).prototype,
              "m_fadeInTime",
              [y],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return 0.1;
                },
              }
            )),
            (x = n(k.prototype, "m_fadeOutTime", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0.2;
              },
            })),
            (g = n(k.prototype, "m_isPlaySpine", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (v = k))
          ) || v)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/NewBoneFollow.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    "use strict";
    var o, e, i, n, l, a, r, s, c, p, u, _, h, m, f, y;
    return {
      setters: [
        function (t) {
          (o = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (n = t.assertThisInitialized),
            (l = t.createClass);
        },
        function (t) {
          (a = t.cclegacy),
            (r = t._decorator),
            (s = t.Enum),
            (c = t.sp),
            (p = t.director),
            (u = t.Director),
            (_ = t.isValid),
            (h = t.v3),
            (m = t.UITransform),
            (f = t.Component),
            (y = t.v2);
        },
      ],
      execute: function () {
        var b,
          d,
          w,
          S,
          g,
          v,
          N,
          z,
          F,
          k,
          R,
          L,
          O,
          P,
          D,
          B,
          E,
          x,
          A,
          C,
          I,
          j,
          X,
          Y,
          T,
          M,
          W,
          U,
          V,
          H,
          q,
          G,
          J,
          K,
          Q,
          Z,
          $,
          tt,
          ot,
          et;
        a._RF.push({}, "44834DdFVNM2reoglp7HL82", "NewBoneFollow", void 0);
        var it,
          nt = r.ccclass,
          lt = r.property,
          at = r.executeInEditMode;
        !(function (t) {
          t[(t.default = 1)] = "default";
        })(it || (it = {}));
        var rt = s({}),
          st = 3.1415927,
          ct = st / 180;
        function pt(t, o, e, i, n) {
          var l,
            a = ((l = n), Math.sin(l * ct)),
            r = (function (t) {
              return Math.cos(t * ct);
            })(n);
          return 57.29577866666166 * Math.atan2(r * e + a * i, r * t + a * o);
        }
        t(
          "NewBoneFollow",
          ((b = nt("NewBoneFollow")),
          (d = lt({ visible: !1, tooltip: "目標 Spine 骨架" })),
          (w = lt({
            visible: !1,
            tooltip:
              "是否快取旋轉及縮放的上層資料，預設開啟。如果父層以上會有動態調整旋轉及縮放則需取消勾選此選項，或是維持啟用狀態但於需要的時刻呼叫 CacheUpdate 方法",
          })),
          (S = lt({ visible: !1, tooltip: "是否同步位置" })),
          (g = lt({ visible: !1, tooltip: "是否同步旋轉" })),
          (v = lt({
            visible: !1,
            tooltip: "是否將目標旋轉角度轉換成區域旋轉角度",
          })),
          (N = lt({ visible: !1, tooltip: "是否同步縮放" })),
          (z = lt({
            visible: !1,
            tooltip: "是否將目標縮放量轉換成區域縮放量",
          })),
          (F = lt({ visible: !0, displayName: "Preview" })),
          (k = lt({ type: c.Skeleton, visible: !1 })),
          (R = lt({
            visible: !0,
            type: c.Skeleton,
            displayName: "Skeleton",
            tooltip: "目標 Spine 骨架",
          })),
          (L = lt({ visible: !1 })),
          (O = lt({
            visible: !0,
            displayName: "BoneName",
            tooltip: "請輸入要跟隨的 Spine 骨頭名稱或從下拉選單選擇",
          })),
          (P = lt({ type: rt, visible: !1 })),
          (D = lt({
            type: rt,
            visible: !0,
            displayName: "SelectFromList",
            tooltip: "可從此下拉選單選擇骨頭",
          })),
          (B = lt({
            displayName: "Cache Ancestors",
            tooltip:
              "是否快取旋轉及縮放的上層資料，預設開啟。如果父層以上會有動態調整旋轉及縮放則需取消勾選此選項，或是維持啟用狀態但於需要的時刻呼叫 CacheUpdate 方法",
          })),
          (E = lt({ displayName: "Position", tooltip: "是否同步位置" })),
          (x = lt({
            displayName: "Position Offset",
            tooltip: "額外本體位置偏移",
            visible: function () {
              return this.m_followPosition;
            },
          })),
          (A = lt({ displayName: "Rotation", tooltip: "是否同步旋轉" })),
          (C = lt({
            displayName: "Rotation Localization",
            tooltip: "是否將目標旋轉角度轉換成區域旋轉角度",
            visible: function () {
              return this.m_followRotation;
            },
          })),
          (I = lt({
            displayName: "Rotation Factor",
            tooltip: "額外本體旋轉",
            visible: function () {
              return this.m_followRotation;
            },
          })),
          (j = lt({ displayName: "Scale", tooltip: "是否同步縮放" })),
          (X = lt({
            displayName: "Scale Localization",
            tooltip: "是否將目標縮放量轉換成區域縮放量",
            visible: function () {
              return this.m_followScale;
            },
          })),
          (Y = lt({
            displayName: "Scale Factor",
            tooltip: "額外本體大小縮放",
            visible: function () {
              return this.m_followScale;
            },
          })),
          b(
            (T =
              at(
                (((et = (function (t) {
                  function o() {
                    for (
                      var o, e = arguments.length, l = new Array(e), a = 0;
                      a < e;
                      a++
                    )
                      l[a] = arguments[a];
                    return (
                      ((o =
                        t.call.apply(t, [this].concat(l)) ||
                        this)._oldAngle = 0),
                      (o._oldScaleX = 1),
                      (o._oldScaleY = 1),
                      (o._isCached = !1),
                      (o._cachedRotation = 0),
                      (o._cachedScaleX = 1),
                      (o._cachedScaleY = 1),
                      (o._BoneEnumList = []),
                      i(o, "m_preview", W, n(o)),
                      i(o, "m_spineSkeleton", U, n(o)),
                      i(o, "m_boneName", V, n(o)),
                      i(o, "__boneIndex", H, n(o)),
                      i(o, "m_cacheAncestors", q, n(o)),
                      i(o, "m_followPosition", G, n(o)),
                      i(o, "m_positionOffset", J, n(o)),
                      i(o, "m_followRotation", K, n(o)),
                      i(o, "m_rotationLocalization", Q, n(o)),
                      i(o, "m_rotationFactor", Z, n(o)),
                      i(o, "m_followScale", $, n(o)),
                      i(o, "m_scaleLocalization", tt, n(o)),
                      i(o, "m_scaleFactor", ot, n(o)),
                      (o.m_isFirstActive = !0),
                      o
                    );
                  }
                  e(o, t);
                  var a = o.prototype;
                  return (
                    (a.CacheUpdate = function () {
                      this._isCached = !1;
                    }),
                    (a.__preload = function () {}),
                    (a.onLoad = function () {
                      (this._oldAngle = this.node.angle),
                        (this._oldScaleX = this.node.scale.x),
                        (this._oldScaleY = this.node.scale.y);
                    }),
                    (a.start = function () {}),
                    (a.onEnable = function () {
                      p.on(u.EVENT_BEFORE_DRAW, this.BoneSync, this);
                    }),
                    (a.onDisable = function () {
                      p.off(u.EVENT_BEFORE_DRAW, this.BoneSync, this);
                    }),
                    (a.onDestroy = function () {
                      (this._oldAngle = null),
                        (this._oldScaleX = null),
                        (this._oldScaleY = null),
                        (this._isCached = null),
                        (this._cachedRotation = null),
                        (this._cachedScaleX = null),
                        (this._cachedScaleY = null),
                        (this.m_spineSkeleton = null),
                        (this.m_boneName = null),
                        (this.m_cacheAncestors = null),
                        (this.m_followPosition = null),
                        (this.m_followRotation = null),
                        (this.m_rotationLocalization = null),
                        (this.m_followScale = null),
                        (this.m_scaleLocalization = null);
                    }),
                    (a.BoneSync = function () {
                      if (
                        (this.m_isFirstActive &&
                          ((this.m_isFirstActive = !1),
                          this.m_spineSkeleton._skeleton.updateWorldTransform()),
                        this.m_spineSkeleton &&
                          "" != this.m_boneName &&
                          (this.m_followPosition ||
                            this.m_followRotation ||
                            this.m_followScale))
                      ) {
                        var t = this.m_spineSkeleton.findBone(this.m_boneName);
                        if (t) {
                          var o, e, i;
                          if (!this.m_cacheAncestors || !this._isCached) {
                            for (
                              var n = 0,
                                l = 0,
                                a = 1,
                                r = 1,
                                s = 1,
                                c = 1,
                                p = this.m_spineSkeleton.node;
                              p;

                            )
                              (a *= p.scale.x),
                                (r *= p.scale.y),
                                p.angle && (n += p.angle),
                                (p = p.parent);
                            for (p = this.node.parent; p; )
                              (s *= p.scale.x),
                                (c *= p.scale.y),
                                p.angle && (l -= p.angle),
                                (p = p.parent);
                            (this._cachedRotation = n + l),
                              (this._cachedScaleX = a / s),
                              (this._cachedScaleY = r / c),
                              (this._isCached = !0);
                          }
                          if (
                            ((o = this.m_rotationLocalization
                              ? this._cachedRotation
                              : this._oldAngle),
                            (e = this.m_scaleLocalization
                              ? this._cachedScaleX
                              : this._oldScaleX),
                            (i = this.m_scaleLocalization
                              ? this._cachedScaleY
                              : this._oldScaleY),
                            this.m_followRotation)
                          ) {
                            var u = t.parent,
                              f = t.arotation,
                              y =
                                o +
                                (_(u)
                                  ? pt(u.a, u.b, u.c, u.d, f)
                                  : t.arotation) +
                                this.m_rotationFactor;
                            this.node.setRotationFromEuler(h(0, 0, y));
                          }
                          if (
                            (this.m_followScale &&
                              this.node.setScale(
                                e * t.getWorldScaleX() * this.m_scaleFactor.x,
                                i * t.getWorldScaleY() * this.m_scaleFactor.y
                              ),
                            this.m_followPosition)
                          ) {
                            var b = this.m_spineSkeleton.node
                                .getComponent(m)
                                .convertToWorldSpaceAR(
                                  h(
                                    t.worldX + this.m_positionOffset.x,
                                    t.worldY + this.m_positionOffset.y,
                                    0
                                  )
                                ),
                              d = this.node.parent
                                .getComponent(m)
                                .convertToNodeSpaceAR(b);
                            this.node.setPosition(h(d.x, d.y));
                          }
                        }
                      }
                    }),
                    (a._refreshInspector = function () {}),
                    (a._updateBoneEnum = function () {}),
                    l(o, [
                      {
                        key: "Skeleton",
                        get: function () {
                          return this.m_spineSkeleton;
                        },
                        set: function (t) {
                          this.m_spineSkeleton = t;
                        },
                      },
                      {
                        key: "CacheData",
                        get: function () {
                          return this.m_cacheData;
                        },
                        set: function (t) {
                          this.m_cacheData = t;
                        },
                      },
                      {
                        key: "FollowPosition",
                        get: function () {
                          return this.m_followPosition;
                        },
                        set: function (t) {
                          this.m_followPosition = t;
                        },
                      },
                      {
                        key: "FollowRotation",
                        get: function () {
                          return this.m_followRotation;
                        },
                        set: function (t) {
                          this.m_followRotation = t;
                        },
                      },
                      {
                        key: "RotationLocalization",
                        get: function () {
                          return this.m_rotationLocalization;
                        },
                        set: function (t) {
                          this.m_rotationLocalization = t;
                        },
                      },
                      {
                        key: "FollowScale",
                        get: function () {
                          return this.m_followScale;
                        },
                        set: function (t) {
                          this.m_followScale = t;
                        },
                      },
                      {
                        key: "ScaleLocalization",
                        get: function () {
                          return this.m_scaleLocalization;
                        },
                        set: function (t) {
                          this.m_scaleLocalization = t;
                        },
                      },
                      {
                        key: "_spineSkeleton",
                        get: function () {
                          return this.m_spineSkeleton;
                        },
                        set: function (t) {
                          console.log(
                            "set _spineSkeleton ",
                            this.m_spineSkeleton,
                            "value",
                            t
                          ),
                            (this.m_spineSkeleton = t),
                            this._refreshInspector();
                        },
                      },
                      {
                        key: "BoneName",
                        get: function () {
                          return this.m_boneName;
                        },
                        set: function (t) {
                          this.m_boneName = t;
                          var o = !1;
                          this._BoneEnumList.forEach(function (e) {
                            e.name != t || (o = !0);
                          }),
                            0 == o
                              ? console.log(
                                  "[spBoneFollow] 輸入的骨頭",
                                  t,
                                  "並不存在！請檢查名稱是否正確！"
                                )
                              : console.log(
                                  "[spBoneFollow] 輸入的骨頭",
                                  t,
                                  "已找到！"
                                );
                        },
                      },
                      {
                        key: "_boneIndex",
                        get: function () {
                          return this.__boneIndex;
                        },
                        set: function (t) {
                          var o = this;
                          (this.__boneIndex = t),
                            this._BoneEnumList.forEach(function (e) {
                              e.value == t && (o.m_boneName = e.name);
                            }),
                            (this.__boneIndex = 0),
                            console.log(
                              "set __boneIndex ",
                              t,
                              "m_boneName:",
                              this.m_boneName
                            );
                        },
                      },
                    ]),
                    o
                  );
                })(f)).NewBoneFollow = "NewBoneFollow"),
                o(
                  (M = et).prototype,
                  "Skeleton",
                  [d],
                  Object.getOwnPropertyDescriptor(M.prototype, "Skeleton"),
                  M.prototype
                ),
                o(
                  M.prototype,
                  "CacheData",
                  [w],
                  Object.getOwnPropertyDescriptor(M.prototype, "CacheData"),
                  M.prototype
                ),
                o(
                  M.prototype,
                  "FollowPosition",
                  [S],
                  Object.getOwnPropertyDescriptor(
                    M.prototype,
                    "FollowPosition"
                  ),
                  M.prototype
                ),
                o(
                  M.prototype,
                  "FollowRotation",
                  [g],
                  Object.getOwnPropertyDescriptor(
                    M.prototype,
                    "FollowRotation"
                  ),
                  M.prototype
                ),
                o(
                  M.prototype,
                  "RotationLocalization",
                  [v],
                  Object.getOwnPropertyDescriptor(
                    M.prototype,
                    "RotationLocalization"
                  ),
                  M.prototype
                ),
                o(
                  M.prototype,
                  "FollowScale",
                  [N],
                  Object.getOwnPropertyDescriptor(M.prototype, "FollowScale"),
                  M.prototype
                ),
                o(
                  M.prototype,
                  "ScaleLocalization",
                  [z],
                  Object.getOwnPropertyDescriptor(
                    M.prototype,
                    "ScaleLocalization"
                  ),
                  M.prototype
                ),
                (W = o(M.prototype, "m_preview", [F], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return !0;
                  },
                })),
                (U = o(M.prototype, "m_spineSkeleton", [k], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                })),
                o(
                  M.prototype,
                  "_spineSkeleton",
                  [R],
                  Object.getOwnPropertyDescriptor(
                    M.prototype,
                    "_spineSkeleton"
                  ),
                  M.prototype
                ),
                (V = o(M.prototype, "m_boneName", [L], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return "";
                  },
                })),
                o(
                  M.prototype,
                  "BoneName",
                  [O],
                  Object.getOwnPropertyDescriptor(M.prototype, "BoneName"),
                  M.prototype
                ),
                (H = o(M.prototype, "__boneIndex", [P], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return it.default;
                  },
                })),
                o(
                  M.prototype,
                  "_boneIndex",
                  [D],
                  Object.getOwnPropertyDescriptor(M.prototype, "_boneIndex"),
                  M.prototype
                ),
                (q = o(M.prototype, "m_cacheAncestors", [B], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return !0;
                  },
                })),
                (G = o(M.prototype, "m_followPosition", [E], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return !1;
                  },
                })),
                (J = o(M.prototype, "m_positionOffset", [x], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return y(0, 0);
                  },
                })),
                (K = o(M.prototype, "m_followRotation", [A], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return !1;
                  },
                })),
                (Q = o(M.prototype, "m_rotationLocalization", [C], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return !0;
                  },
                })),
                (Z = o(M.prototype, "m_rotationFactor", [I], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return 0;
                  },
                })),
                ($ = o(M.prototype, "m_followScale", [j], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return !1;
                  },
                })),
                (tt = o(M.prototype, "m_scaleLocalization", [X], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return !0;
                  },
                })),
                (ot = o(M.prototype, "m_scaleFactor", [Y], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return y(1, 1);
                  },
                })),
                (T = M))
              ) || T)
          ) || T)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/NewBottomBarManager.ts",
  ["cc", "./index4.ts"],
  function (_) {
    "use strict";
    var t, e;
    return {
      setters: [
        function (_) {
          t = _.cclegacy;
        },
        function (_) {
          e = _.Astarte;
        },
      ],
      execute: function () {
        _({
          BarManager: void 0,
          UpdateNewBottombar: function () {
            _("newBottombarManager", e.NewBottombar);
          },
          newBottombarManager: void 0,
        }),
          t._RF.push(
            {},
            "d8221PEwlRBep+hz+x7w5Ot",
            "NewBottomBarManager",
            void 0
          );
        var T;
        _("AutoplayType_BS", function () {
          (this.isCheckFree = !1),
            (this.isCheckTatget = !1),
            (this.targetType = []);
        }),
          _("AutoplayType_DFI", function () {
            (this.isCheckFree = !1), (this.isCheckJp = !1);
          }),
          _("AutoplayType_DFIII", function () {
            (this.isCheckFree = !1), (this.isCheckJp = !1), (this.freeType = 0);
          }),
          _("AutoplayType_FD", function () {
            (this.isCheckFree = !1), (this.isCheckJp = !1), (this.freeType = 0);
          }),
          _("AutoplayType_MS", function () {
            (this.isCheckFree = !1), (this.isCheckJp = !1), (this.freeType = 1);
          }),
          _("AutoplayType_ORG", function () {
            (this.isCheckFree = !1), (this.isCheckJp = !1);
          });
        T || (T = _("BarManager", {}));
        _("BetViewState", { Open: "BetViewOpen", Close: "BetViewClose" }),
          _("BetValueChange", "BetValueChange"),
          _("SlotBottomBarState", {
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
          }),
          _("CLICK_BUFFER_TYPE", {
            FEATURES: 0,
            RATIO: 1,
            HISTORY: 2,
            WISEAUTO: 3,
            BACKPACK: 4,
            BACKPACK_GAME: 5,
            BACKPACK_ALL: 6,
            BACKPACK_MSG: 7,
            RANKING: 8,
            DAILY_MISSION: 9,
            DEBRIS: 10,
            GIFT_CODE: 11,
          }),
          _("BottomBar_UIName", {
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
        t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/NewExtraManager.ts",
  ["cc", "./index4.ts"],
  function (t) {
    "use strict";
    var e, a;
    return {
      setters: [
        function (t) {
          e = t.cclegacy;
        },
        function (t) {
          a = t.Astarte;
        },
      ],
      execute: function () {
        t({
          UpdateNewExtra: function () {
            t("newExtraManager", a.NewExtra);
          },
          newExtraManager: void 0,
        }),
          e._RF.push({}, "28748R+s5pCY7kwYZ0zkqKk", "NewExtraManager", void 0);
        t("IconBoxSeat", {
          Backpack: 0,
          JackPot: 1,
          MustHitBy: 2,
          DailyMission: 3,
          WinMore: 4,
          RankBoard: 5,
          Debris: 6,
          BuyBonus: 7,
          Trial: 8,
          FreeSpin: 9,
          Custom1: 10,
        });
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/NewSlotColorFollow.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (o) {
    "use strict";
    var e, t, n, l, i, r, c, s, p, a, u, h, _, m, f, y, C;
    return {
      setters: [
        function (o) {
          (e = o.applyDecoratedDescriptor),
            (t = o.inheritsLoose),
            (n = o.initializerDefineProperty),
            (l = o.assertThisInitialized),
            (i = o.createClass);
        },
        function (o) {
          (r = o.cclegacy),
            (c = o._decorator),
            (s = o.Enum),
            (p = o.sp),
            (a = o.director),
            (u = o.Director),
            (h = o.math),
            (_ = o.Sprite),
            (m = o.color),
            (f = o.Label),
            (y = o.UIOpacity),
            (C = o.Component);
        },
      ],
      execute: function () {
        var S, b, d, g, w, N, k, v, E, D, F, I, O, x, L, z, P, R;
        r._RF.push({}, "2da2cEqApNLm7hZxNo+Lfkx", "NewSlotColorFollow", void 0);
        var j,
          T = c.ccclass,
          A = c.property,
          W = c.executeInEditMode;
        !(function (o) {
          o[(o.default = 1)] = "default";
        })(j || (j = {}));
        var B = s({});
        o(
          "default",
          ((S = T("NewSlotColorFollow")),
          (b = A({ visible: !1, tooltip: "目標 Spine 骨架" })),
          (d = A({ visible: !0, displayName: "Preview" })),
          (g = A({ visible: !1 })),
          (w = A({ type: p.Skeleton, visible: !1 })),
          (N = A({
            visible: !0,
            type: p.Skeleton,
            displayName: "Skeleton",
            tooltip: "目標 Spine 骨架",
          })),
          (k = A({ visible: !1 })),
          (v = A({
            visible: !0,
            displayName: "SlotName",
            tooltip: "請輸入要跟隨的 Spine 插槽名稱或從下拉選單選擇",
          })),
          (E = A({ type: B, visible: !1 })),
          (D = A({
            visible: !0,
            displayName: "SelectFromList",
            type: B,
            tooltip: "可從此下拉選單選擇插槽",
          })),
          S(
            (F =
              W(
                (((R = (function (o) {
                  function e() {
                    for (
                      var e, t = arguments.length, i = new Array(t), r = 0;
                      r < t;
                      r++
                    )
                      i[r] = arguments[r];
                    return (
                      (e = o.call.apply(o, [this].concat(i)) || this),
                      n(e, "m_preview", O, l(e)),
                      n(e, "_colorCache", x, l(e)),
                      n(e, "m_spineSkeleton", L, l(e)),
                      n(e, "m_slotName", z, l(e)),
                      n(e, "__slotIndex", P, l(e)),
                      (e._SlotEnumList = []),
                      e
                    );
                  }
                  t(e, o);
                  var r = e.prototype;
                  return (
                    (r.__preload = function () {}),
                    (r.onLoad = function () {
                      this._colorCache = null;
                    }),
                    (r.start = function () {}),
                    (r.onEnable = function () {
                      this.ColorSync(),
                        a.on(u.EVENT_BEFORE_DRAW, this.ColorSync, this);
                    }),
                    (r.onDisable = function () {
                      a.off(u.EVENT_BEFORE_DRAW, this.ColorSync, this);
                    }),
                    (r.onDestroy = function () {
                      (this._colorCache = null),
                        (this.m_spineSkeleton = null),
                        (this.m_slotName = null);
                    }),
                    (r.ColorSync = function () {
                      if (this.m_spineSkeleton && "" != this.m_slotName) {
                        var o = this.m_spineSkeleton.findSlot(this.m_slotName),
                          e = o ? 255 * o.color.r : this._colorCache.r,
                          t = o ? 255 * o.color.g : this._colorCache.g,
                          n = o ? 255 * o.color.b : this._colorCache.b,
                          l = o ? 255 * o.color.a : this._colorCache.a;
                        (null != this._colorCache &&
                          o.color.r == this._colorCache.r &&
                          o.color.g == this._colorCache.g &&
                          o.color.b == this._colorCache.b &&
                          o.color.a == this._colorCache.a) ||
                          ((this._colorCache =
                            this._colorCache || new h.Color(h.Color.WHITE)),
                          this.node.getComponent(_)
                            ? ((this.node.getComponent(_).color = m(
                                e,
                                t,
                                n,
                                l
                              )),
                              this._colorCache.set(
                                this.node.getComponent(_).color
                              ))
                            : this.node.getComponent(f) &&
                              ((this.node.getComponent(f).color = m(
                                e,
                                t,
                                n,
                                l
                              )),
                              this._colorCache.set(
                                this.node.getComponent(f).color
                              )),
                          this.node.getComponent(y) &&
                            (this.node.getComponent(y).opacity = l),
                          (this._colorCache.a = l));
                      }
                    }),
                    (r._refreshInspector = function () {}),
                    (r._updateSlotEnum = function () {}),
                    i(e, [
                      {
                        key: "Skeleton",
                        get: function () {
                          return this.m_spineSkeleton;
                        },
                        set: function (o) {
                          this.m_spineSkeleton = o;
                        },
                      },
                      {
                        key: "_spineSkeleton",
                        get: function () {
                          return this.m_spineSkeleton;
                        },
                        set: function (o) {},
                      },
                      {
                        key: "SlotName",
                        get: function () {
                          return this.m_slotName;
                        },
                        set: function (o) {
                          this.m_slotName = o;
                          var e = !1;
                          this._SlotEnumList.forEach(function (t) {
                            t.name != o || (e = !0);
                          }),
                            0 == e
                              ? console.log(
                                  "[spSlotColorFollow] 輸入的插槽",
                                  o,
                                  "並不存在！請檢查名稱是否正確！"
                                )
                              : console.log(
                                  "[spSlotColorFollow] 輸入的插槽",
                                  o,
                                  "已找到！"
                                );
                        },
                      },
                      {
                        key: "_slotIndex",
                        get: function () {},
                        set: function (o) {},
                      },
                    ]),
                    e
                  );
                })(C)).NewSlotColorFollow = "NewSlotColorFollow"),
                e(
                  (I = R).prototype,
                  "Skeleton",
                  [b],
                  Object.getOwnPropertyDescriptor(I.prototype, "Skeleton"),
                  I.prototype
                ),
                (O = e(I.prototype, "m_preview", [d], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return !0;
                  },
                })),
                (x = e(I.prototype, "_colorCache", [g], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return new h.Color(h.Color.WHITE);
                  },
                })),
                (L = e(I.prototype, "m_spineSkeleton", [w], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                })),
                e(
                  I.prototype,
                  "_spineSkeleton",
                  [N],
                  Object.getOwnPropertyDescriptor(
                    I.prototype,
                    "_spineSkeleton"
                  ),
                  I.prototype
                ),
                (z = e(I.prototype, "m_slotName", [k], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return "";
                  },
                })),
                e(
                  I.prototype,
                  "SlotName",
                  [v],
                  Object.getOwnPropertyDescriptor(I.prototype, "SlotName"),
                  I.prototype
                ),
                (P = e(I.prototype, "__slotIndex", [E], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return j.default;
                  },
                })),
                e(
                  I.prototype,
                  "_slotIndex",
                  [D],
                  Object.getOwnPropertyDescriptor(I.prototype, "_slotIndex"),
                  I.prototype
                ),
                (F = I))
              ) || F)
          ) || F)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/NotificationManager.ts",
  ["cc", "./index4.ts"],
  function (t) {
    "use strict";
    var i, n;
    return {
      setters: [
        function (t) {
          i = t.cclegacy;
        },
        function (t) {
          n = t.Astarte;
        },
      ],
      execute: function () {
        t({
          UpdateNotificationManager: function () {
            t("notificationManager", n.NotificationManager);
          },
          notificationManager: void 0,
        }),
          i._RF.push(
            {},
            "de7f6JwfsBHBYba0UlqLoFI",
            "NotificationManager",
            void 0
          ),
          i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/RenderDataBump.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, n, r, s, o, a, i, c, l, u;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (r = e.initializerDefineProperty),
            (s = e.assertThisInitialized),
            (o = e.createForOfIteratorHelperLoose);
        },
        function (e) {
          (a = e.cclegacy),
            (i = e._decorator),
            (c = e.Node),
            (l = e.UIRenderer),
            (u = e.Component);
        },
      ],
      execute: function () {
        var d, h, f, p, v;
        a._RF.push({}, "3638c7rYSpEjZ7x8wtqusdg", "RenderDataBump", void 0);
        var y = 0,
          D = 1,
          R = 2,
          m = i.ccclass,
          C = i.property;
        e(
          "RenderDataBump",
          ((d = m("RenderDataBump")),
          (h = C({ tooltip: "是否一同影響子節點" })),
          d(
            ((v = t(
              (p = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, o = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    r(t, "affectsChildren", v, s(t)),
                    (t.states = y),
                    t
                  );
                }
                n(t, e);
                var a = t.prototype;
                return (
                  (a.onLoad = function () {
                    this.node.on(
                      c.EventType.PARENT_CHANGED,
                      this.checkStates,
                      this
                    );
                  }),
                  (a.onDestroy = function () {
                    this.node.off(
                      c.EventType.PARENT_CHANGED,
                      this.checkStates,
                      this
                    );
                  }),
                  (a.checkStates = function () {
                    this.node.parent
                      ? this.states === D && this.requestRenderData()
                      : (this.states !== R && this.states !== y) ||
                        this.destroyRenderData();
                  }),
                  (a.destroyRenderData = function () {
                    var e = this.node.getComponent(l);
                    if (
                      (null == e || e.destroyRenderData(), this.affectsChildren)
                    )
                      for (
                        var t,
                          n = this.node.getComponentsInChildren(l),
                          r = o(n);
                        !(t = r()).done;

                      ) {
                        var s = t.value;
                        null == s || s.destroyRenderData();
                      }
                    this.states = D;
                  }),
                  (a.requestRenderData = function () {
                    var e = this.node.getComponent(l);
                    if (
                      (null == e || e._flushAssembler(), this.affectsChildren)
                    )
                      for (
                        var t,
                          n = this.node.getComponentsInChildren(l),
                          r = o(n);
                        !(t = r()).done;

                      ) {
                        var s = t.value;
                        null == s || s._flushAssembler();
                      }
                    this.states = R;
                  }),
                  t
                );
              })(u)).prototype,
              "affectsChildren",
              [h],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return !1;
                },
              }
            )),
            (f = p))
          ) || f)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/RoundController.ts",
  ["cc", "./index4.ts"],
  function (n) {
    "use strict";
    var o, t;
    return {
      setters: [
        function (n) {
          o = n.cclegacy;
        },
        function (n) {
          t = n.Astarte;
        },
      ],
      execute: function () {
        n({
          UpdateRoundController: function () {
            n("roundController", t.RoundController);
          },
          roundController: void 0,
        }),
          o._RF.push({}, "813162EnmlPD6ZkP+n93pP2", "RoundController", void 0),
          o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ScrollEventHandler.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    "use strict";
    var e, n, o, i, r, l, c, s, a, h, p, d, u, m;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (o = t.initializerDefineProperty),
            (i = t.assertThisInitialized),
            (r = t.createClass);
        },
        function (t) {
          (l = t.cclegacy),
            (c = t._decorator),
            (s = t.Node),
            (a = t.ScrollView),
            (h = t.error),
            (p = t.UIOpacity),
            (d = t.UITransform),
            (u = t.Vec3),
            (m = t.Component);
        },
      ],
      execute: function () {
        var _, f, v, g, y;
        l._RF.push({}, "75a969XvAFPfax+l1fDcqo9", "ScrollEventHandler", void 0);
        var w = c.ccclass,
          S = c.property;
        t(
          "ScrollEventHandler",
          ((_ = w("ScrollEventHandler")),
          (f = S({
            type: s,
            tooltip: "真實放置內容的節點，有自行分層請把每一層的根節點放進去",
          })),
          _(
            ((y = e(
              (g = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, r = new Array(n), l = 0;
                    l < n;
                    l++
                  )
                    r[l] = arguments[l];
                  return (
                    (e = t.call.apply(t, [this].concat(r)) || this),
                    o(e, "m_contents", y, i(e)),
                    (e.m_scrollView = null),
                    (e.m_redundantSpace_Y = 0),
                    e
                  );
                }
                n(e, t);
                var l = e.prototype;
                return (
                  (l.start = function () {
                    var t = this;
                    (this.m_scrollView = this.node.getComponent(a)),
                      this.m_scrollView
                        ? this.m_scrollView.node.on(
                            a.EventType.SCROLLING,
                            function () {
                              t.CheckCellVisible();
                            }
                          )
                        : h("ScrollView is null"),
                      0 === this.m_contents.length &&
                        this.m_contents.push(this.m_scrollView.content);
                  }),
                  (l.CheckCellVisible = function () {
                    if (this.m_scrollView && this.m_scrollView.view)
                      for (var t = 0; t < this.m_contents.length; t++)
                        for (
                          var e = this.m_contents[t].children,
                            n = this.GetTopLeftWorld(
                              this.m_scrollView.view.node
                            ),
                            o = this.GetBottomRightWorld(
                              this.m_scrollView.view.node
                            ),
                            i = 0;
                          i < e.length;
                          i++
                        ) {
                          var r = e[i],
                            l = r.getComponent(p);
                          l || (l = r.addComponent(p));
                          var c = this.GetTopLeftWorld(r),
                            s = this.GetBottomRightWorld(r);
                          this.IsInside(c, n, o) || this.IsInside(s, n, o)
                            ? (l.opacity = 255)
                            : (l.opacity = 0);
                        }
                  }),
                  (l.GetTopLeftWorld = function (t) {
                    var e = t.getPosition(),
                      n = t.getComponent(d).contentSize,
                      o = t.getComponent(d).anchorPoint,
                      i = new u(e.x - n.width * o.x, e.y - n.height * o.y, e.z);
                    return t.parent.getComponent(d).convertToWorldSpaceAR(i);
                  }),
                  (l.GetBottomRightWorld = function (t) {
                    var e = t.getPosition(),
                      n = t.getComponent(d).contentSize,
                      o = t.getComponent(d).anchorPoint,
                      i = new u(
                        e.x + n.width * (1 - o.x),
                        e.y + n.height * (1 - o.y),
                        e.z
                      );
                    return t.parent.getComponent(d).convertToWorldSpaceAR(i);
                  }),
                  (l.IsInside = function (t, e, n) {
                    return (
                      t.x >= e.x &&
                      t.y >= e.y - this.m_redundantSpace_Y &&
                      t.x <= n.x &&
                      t.y <= n.y + this.m_redundantSpace_Y
                    );
                  }),
                  r(e, [
                    {
                      key: "RedundantSpace_Y",
                      set: function (t) {
                        this.m_redundantSpace_Y = t;
                      },
                    },
                  ]),
                  e
                );
              })(m)).prototype,
              "m_contents",
              [f],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (v = g))
          ) || v)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SeriesComponent.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SpineKit.ts"],
  function (t) {
    "use strict";
    var e, n, i, r, a, s, o, c, p, u, _;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (r = t.assertThisInitialized),
            (a = t.asyncToGenerator),
            (s = t.regeneratorRuntime);
        },
        function (t) {
          (o = t.cclegacy), (c = t._decorator), (p = t.sp), (u = t.Component);
        },
        function (t) {
          _ = t.default;
        },
      ],
      execute: function () {
        var m, l, h, S;
        o._RF.push({}, "eb577rwRR5ASa6OivNuPgEY", "SeriesComponent", void 0);
        var f = t("SeriesAnimName", {
            GameIntro_L: "GameIntro_L",
            GameIntro_S: "GameIntro_S",
            FG_Declare_Start_L: "FG_Declare_Start_L",
            FG_Declare_Start_S: "FG_Declare_Start_S",
            FG_Compliment_Start_L: "FG_Compliment_Start_L",
            FG_Compliment_Start_S: "FG_Compliment_Start_S",
          }),
          v = c.ccclass,
          G = c.property;
        t(
          "default",
          ((m = G({ type: p.Skeleton, tooltip: "spine" })),
          v(
            ((S = e(
              (h = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, a = new Array(n), s = 0;
                    s < n;
                    s++
                  )
                    a[s] = arguments[s];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    i(e, "m_spine", S, r(e)),
                    e
                  );
                }
                n(e, t);
                var o = e.prototype;
                return (
                  (o.ShowGameIntro = (function () {
                    var t = a(
                      s().mark(function t(e, n) {
                        var i, r;
                        return s().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (i = e ? f.GameIntro_L : f.GameIntro_S),
                                    (this.node.active = !0),
                                    (this.m_spine.paused = !1),
                                    (r = function (t) {
                                      "AnimationEvent" === t &&
                                        (null == n || n());
                                    }),
                                    (t.next = 6),
                                    _.PlayAnimation(this.m_spine, i, !1, 0, r)
                                  );
                                case 6:
                                  this.node.active = !1;
                                case 7:
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
                  (o.ShowFGDeclare = (function () {
                    var t = a(
                      s().mark(function t(e, n) {
                        var i, r;
                        return s().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (i = e
                                      ? f.FG_Declare_Start_L
                                      : f.FG_Declare_Start_S),
                                    (this.node.active = !0),
                                    (this.m_spine.paused = !1),
                                    (r = function (t) {
                                      "AnimationEvent" === t &&
                                        (null == n || n());
                                    }),
                                    (t.next = 6),
                                    _.PlayAnimation(this.m_spine, i, !1, 0, r)
                                  );
                                case 6:
                                  this.node.active = !1;
                                case 7:
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
                  (o.ShowFGCompliment = (function () {
                    var t = a(
                      s().mark(function t(e, n) {
                        var i, r;
                        return s().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (i = e
                                      ? f.FG_Compliment_Start_L
                                      : f.FG_Compliment_Start_S),
                                    (this.node.active = !0),
                                    (this.m_spine.paused = !1),
                                    (r = function (t) {
                                      "AnimationEvent" === t &&
                                        (null == n || n());
                                    }),
                                    (t.next = 6),
                                    _.PlayAnimation(this.m_spine, i, !1, 0, r)
                                  );
                                case 6:
                                  this.node.active = !1;
                                case 7:
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
                  (o.Prepare = function (t) {
                    (this.node.active = !0),
                      (this.m_spine.paused = !1),
                      this.m_spine.clearTracks(),
                      this.m_spine.setToSetupPose(),
                      _.PlayAnimation(
                        this.m_spine,
                        t ? f.GameIntro_L : f.GameIntro_S
                      ),
                      (this.m_spine.paused = !0);
                  }),
                  (o.Rotation = function (t) {
                    if (this.node.active) {
                      var e = t ? f.GameIntro_L : f.GameIntro_S;
                      (this.m_spine.paused = !1),
                        this.m_spine.clearTracks(),
                        this.m_spine.setToSetupPose(),
                        _.PlayAnimation(this.m_spine, e),
                        (this.m_spine.paused = !0);
                    }
                  }),
                  e
                );
              })(u)).prototype,
              "m_spine",
              [m],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (l = h))
          ) || l)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ShakeComponent.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, n, i, a, s, o, r, u, c, h, l, p, m, d, f;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.createClass),
            (i = e.inheritsLoose),
            (a = e.initializerDefineProperty),
            (s = e.assertThisInitialized),
            (o = e.asyncToGenerator),
            (r = e.regeneratorRuntime);
        },
        function (e) {
          (u = e.cclegacy),
            (c = e._decorator),
            (h = e.Enum),
            (l = e.JsonAsset),
            (p = e.Vec3),
            (m = e.math),
            (d = e.tween),
            (f = e.Component);
        },
      ],
      execute: function () {
        var y,
          g,
          k,
          b,
          _,
          w,
          v,
          I,
          O,
          E,
          T,
          J,
          x,
          N,
          S,
          L,
          j,
          z,
          D,
          q,
          P,
          F,
          C,
          A,
          B,
          W,
          R,
          U,
          G,
          M,
          V,
          H,
          Q,
          K,
          X,
          Y,
          Z,
          $;
        u._RF.push({}, "02e880GcB9Jw7QDr8UUWxEV", "ShakeComponent", void 0);
        var ee,
          te = c.ccclass,
          ne = c.property,
          ie = c.executeInEditMode,
          ae = c.help,
          se = [
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
            { name: "expoInOut", desc: "指數曲線緩入和緩出 由慢到很快再到慢" },
            { name: "expoOut", desc: "指數曲線緩出 由快到慢" },
            { name: "expoOutIn", desc: "指數曲線緩出緩入和 由慢到很快再到慢" },
            { name: "fade", desc: "漸褪效果" },
            { name: "linear", desc: "線性" },
            { name: "quadIn", desc: "平方曲線緩入 由慢到快" },
            { name: "quadInOut", desc: "平方曲線緩入緩出 由慢到快再到慢" },
            { name: "quadOut", desc: "平方曲線緩出 由快到慢" },
            { name: "quadOutIn", desc: "平方曲線緩出緩入 由慢到快再到慢" },
            { name: "quartIn", desc: "四次方曲線緩入 由慢到快" },
            { name: "quartInOut", desc: "四次方曲線緩入緩出 由慢到快再到慢" },
            { name: "quartOut", desc: "四次方曲線緩出 由快到慢" },
            { name: "quartOutIn", desc: "四次方曲線緩出緩入 由慢到快再到慢" },
            { name: "quintIn", desc: "五次方曲線緩入 由慢到快" },
            { name: "quintInOut", desc: "五次方曲線緩入緩出 由慢到快再到慢" },
            { name: "quintOut", desc: "五次方曲線緩出 由慢到快" },
            { name: "quintOutIn", desc: "五次方曲線緩出緩入 由慢到快再到慢" },
            { name: "sineIn", desc: "正弦曲線緩入 由慢到快" },
            { name: "sineInOut", desc: "正弦曲線緩入緩出 由慢到快再到慢" },
            { name: "sineOut", desc: "正弦曲線緩出 由快到慢" },
            { name: "sineOutIn", desc: "正弦曲線緩出緩入 由慢到快再到慢" },
            { name: "smooth", desc: "平滑效果" },
          ],
          oe = h({}),
          re = h({});
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.FadeIn = 1)] = "FadeIn"),
            (e[(e.FadeOut = 2)] = "FadeOut");
        })(ee || (ee = {}));
        var ue = h({ None: ee.None, FadeIn: ee.FadeIn, FadeOut: ee.FadeOut }),
          ce = function (e) {
            var t,
              n = 0;
            if (0 === e.length) return n;
            for (t = 0; t < e.length; t++)
              (n = (n << 5) - n + e.charCodeAt(t)), (n |= 0);
            return n;
          },
          he = e(
            "_TweenInfo",
            ((y = te("_TweenInfo")),
            (g = ne({ visible: !1, tooltip: "Easing" })),
            (k = ne({ type: oe, visible: !1 })),
            (b = ne({ visible: !0, displayName: "緩動效果", type: oe })),
            (_ = ne({ type: ue, visible: !1 })),
            (w = ne({ visible: !0, displayName: "fade type", type: ue })),
            (v = ne({ min: 0, visible: !0, displayName: "時間" })),
            y(
              ((E = t(
                (O = (function () {
                  function e() {
                    a(this, "m_EasingName", E, this),
                      a(this, "__easingIdx", T, this),
                      a(this, "__fadeType", J, this),
                      (this._EasingEnumList = []),
                      a(this, "duration", x, this);
                  }
                  return (
                    n(e, [
                      {
                        key: "_easingIdx",
                        get: function () {},
                        set: function (e) {},
                      },
                      {
                        key: "_fadeType",
                        get: function () {
                          return this.__fadeType;
                        },
                        set: function (e) {},
                      },
                    ]),
                    e
                  );
                })()).prototype,
                "m_EasingName",
                [g],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return "";
                  },
                }
              )),
              (T = t(O.prototype, "__easingIdx", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              })),
              t(
                O.prototype,
                "_easingIdx",
                [b],
                Object.getOwnPropertyDescriptor(O.prototype, "_easingIdx"),
                O.prototype
              ),
              (J = t(O.prototype, "__fadeType", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              })),
              t(
                O.prototype,
                "_fadeType",
                [w],
                Object.getOwnPropertyDescriptor(O.prototype, "_fadeType"),
                O.prototype
              ),
              (x = t(O.prototype, "duration", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return 1;
                },
              })),
              (I = O))
            ) || I)
          );
        e(
          "Shake",
          ((N = te("Shake")),
          (S = ae(
            "https://docs.cocos.com/creator/3.6/manual/zh/tween/tween-function.html#%E5%86%85%E7%BD%AE%E7%BC%93%E5%8A%A8%E5%87%BD%E6%95%B0"
          )),
          (L = ne({
            visible: !1,
            displayName: "正負交替",
            tooltip: "重複次數>1時, 正負交替",
          })),
          (j = ne({
            type: l,
            displayName: "預先定義shake.json",
            visible: function () {
              return (
                this.shakeJson &&
                  this._updateShakeEnum(this.shakeJson.json.shakelist),
                !0
              );
            },
          })),
          (z = ne({ visible: !0, tooltip: "自定義的shake name" })),
          (D = ne({ type: re, visible: !1 })),
          (q = ne({
            visible: !0,
            displayName: "儲存到預先定義.json",
            tooltip: "若Shakename不為:custom,才會儲存",
          })),
          (P = ne({
            visible: !0,
            displayName: "預先定義",
            tooltip: "切換後會以預先定義的數值直接覆蓋所有設定值",
            type: re,
          })),
          (F = ne({ readonly: !0, displayName: "總震動時間" })),
          (C = ne({ visible: !0, displayName: "振幅" })),
          (A = ne({
            min: 1,
            step: 1,
            visible: !0,
            displayName: "震動頻率/秒",
          })),
          (B = ne({ step: 1, visible: !0, displayName: "振幅x/y/z權重:%" })),
          (W = ne({ visible: !1, type: [he] })),
          (R = ne({
            type: [he],
            tooltip: "輸入更改 緩動效果 數量",
            displayName: "緩動效果",
          })),
          N(
            (U =
              ie(
                (U =
                  S(
                    ((M = t(
                      (G = (function (e) {
                        function t() {
                          for (
                            var t,
                              n = arguments.length,
                              i = new Array(n),
                              o = 0;
                            o < n;
                            o++
                          )
                            i[o] = arguments[o];
                          return (
                            (t = e.call.apply(e, [this].concat(i)) || this),
                            a(t, "alternately", M, s(t)),
                            a(t, "shakeJson", V, s(t)),
                            a(t, "shakename", H, s(t)),
                            a(t, "__ShakeIdx", Q, s(t)),
                            a(t, "Duration", K, s(t)),
                            a(t, "magnitude", X, s(t)),
                            a(t, "frequency", Y, s(t)),
                            a(t, "weight", Z, s(t)),
                            a(t, "_TweenList", $, s(t)),
                            (t._EasingEnumList = []),
                            (t._ShakeEnumList = []),
                            (t.originPos = new p()),
                            (t._TestShakeCnt = 0),
                            t
                          );
                        }
                        i(t, e);
                        var u = t.prototype;
                        return (
                          (u.updateDuration = function () {
                            for (
                              var e = 0, t = 0;
                              t < this._TweenList.length;
                              t++
                            )
                              e += this._TweenList[t].duration;
                            this.Duration = e;
                          }),
                          (u.setTweenJson = function (e) {
                            var t = this.shakeJson.json.shakelist;
                            if ("custom" != e) t[e];
                            else console.warn("custom 不會儲存到預先定義.json");
                          }),
                          (u.getTweenJson = function () {
                            for (
                              var e = {
                                  magnitude: this.magnitude,
                                  frequency: this.frequency,
                                  weight: {
                                    x: this.weight.x,
                                    y: this.weight.y,
                                    z: this.weight.z,
                                  },
                                },
                                t = [],
                                n = 0;
                              n < this._TweenList.length;
                              n++
                            ) {
                              var i = this._TweenList[n];
                              t.push({
                                m_EasingName: i.m_EasingName,
                                _easingIdx: i._easingIdx,
                                _fadeType: i._fadeType,
                                duration: i.duration,
                              });
                            }
                            return (e._TweenList = t), e;
                          }),
                          (u.getJsonData = (function () {
                            var e = o(
                              r().mark(function e() {
                                var t, n, i;
                                return r().wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if (
                                            ((t = {}),
                                            this.shakeJson &&
                                              this.shakeJson.json &&
                                              (t = this.shakeJson.json),
                                            "custom" == this.shakename)
                                          ) {
                                            e.next = 19;
                                            break;
                                          }
                                          ((n = t.shakelist)[this.shakename] =
                                            this.getTweenJson()),
                                            (t.shakelist = n),
                                            (e.next = 17);
                                          break;
                                        case 11:
                                          (i = e.sent),
                                            console.log(
                                              "path",
                                              i,
                                              "outJson",
                                              JSON.stringify(t, null, 2)
                                            ),
                                            undefined.writeFileSync(
                                              i,
                                              JSON.stringify(t, null, 2),
                                              "utf-8"
                                            ),
                                            (e.next = 17);
                                          break;
                                        case 16:
                                          console.log(
                                            "請先指定 '預先定義shake.json'"
                                          );
                                        case 17:
                                          e.next = 20;
                                          break;
                                        case 19:
                                          console.warn(
                                            "custom 不會儲存到預先定義.json"
                                          );
                                        case 20:
                                          return e.abrupt("return", t);
                                        case 21:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  this
                                );
                              })
                            );
                            return function () {
                              return e.apply(this, arguments);
                            };
                          })()),
                          (u.onLoad = function () {
                            this.shakeJson && this.shakeJson.json
                              ? (this._updateShakeEnum(
                                  this.shakeJson.json.shakelist
                                ),
                                this.shakeJson.json)
                              : this.getJsonData();
                            for (var e = [], t = 0; t < se.length; ++t) {
                              var n = se[t];
                              e.push({
                                name: n.desc,
                                easingName: n.name,
                                value: ce(n.name),
                              });
                            }
                            e.sort(function (e, t) {
                              return e.name < t.name
                                ? -1
                                : e.name > t.name
                                ? 1
                                : 0;
                            }),
                              (this._EasingEnumList = e),
                              this._updateEasingEnum(),
                              this.updateDuration();
                          }),
                          (u._updateShakeEnum = function (e) {
                            var t = [];
                            e &&
                              (Object.keys(e).forEach(function (e) {
                                t.push({ name: e, value: ce(e) });
                              }),
                              t.sort(function (e, t) {
                                return e.name < t.name
                                  ? -1
                                  : e.name > t.name
                                  ? 1
                                  : 0;
                              })),
                              (this._ShakeEnumList = t);
                          }),
                          (u._updateEasingEnum = function () {
                            for (var e = 0; e < this._TweenList.length; e++)
                              this._TweenList[e]._EasingEnumList =
                                this._EasingEnumList;
                          }),
                          (u.start = function () {}),
                          (u.fade = function (e, t, n, i, a, s, o) {
                            this.originPos = this.node.getPosition();
                            for (var r = 1 / n, u = t / r, c = 1; c <= u; c++) {
                              var h = i;
                              a == ee.FadeIn
                                ? (h *= c / u)
                                : a == ee.FadeOut && (h *= (u - c) / u);
                              var l = this.originPos.clone(),
                                d = new p(
                                  m.random() - 0.5,
                                  m.random() - 0.5,
                                  m.random() - 0.5
                                ),
                                f = new p(
                                  (2 * h * s.x) / 100,
                                  (2 * h * s.y) / 100,
                                  (2 * h * s.z) / 100
                                );
                              (f = f.multiply(d)),
                                (l = l.add(f)),
                                (e = e.to(
                                  r,
                                  { position: l },
                                  {
                                    easing: o,
                                    onStart: function (e) {},
                                    onUpdate: function (e, t) {},
                                    onComplete: function (e) {},
                                  }
                                ));
                            }
                            return e;
                          }),
                          (u.shake = function () {
                            this._shake(
                              this._TweenList,
                              this.frequency,
                              this.magnitude,
                              this.weight
                            );
                          }),
                          (u.testShake = function () {
                            if (
                              this.shakeJson &&
                              this.shakeJson.json.shakelist
                            ) {
                              var e = this.shakeJson.json.shakelist;
                              if (e) {
                                var t = Object.keys(e);
                                t.push("ErrorTest");
                                var n = t[this._TestShakeCnt++ % t.length];
                                this.ShakeWithName(n);
                              }
                            } else
                              console.log(
                                "ShakeWithName shakeJson not assign!"
                              );
                          }),
                          (u.ShakeWithName = function (e) {
                            if (
                              this.shakeJson &&
                              this.shakeJson.json.shakelist
                            ) {
                              var t = this.shakeJson.json.shakelist;
                              if (!t[e])
                                return void console.log(
                                  "ShakeWithName shakename:" + e + " not found!"
                                );
                              var n = t[e],
                                i = n._TweenList,
                                a = n.weight;
                              this._shake(
                                i,
                                n.frequency,
                                n.magnitude,
                                new p(a.x, a.y, a.z)
                              );
                            } else
                              console.log(
                                "ShakeWithName shakeJson not assign!"
                              );
                          }),
                          (u._shake = function (e, t, n, i) {
                            this.originPos = this.node.getPosition();
                            for (
                              var a = d(this.node), s = 0;
                              s < e.length;
                              s++
                            ) {
                              var o = e[s];
                              a = this.fade(
                                a,
                                o.duration,
                                t,
                                n,
                                o._fadeType,
                                i,
                                o.m_EasingName
                              );
                            }
                            (a = a.to(0, { position: this.originPos })).start();
                          }),
                          n(t, [
                            {
                              key: "saveshake",
                              get: function () {
                                return !1;
                              },
                              set: function (e) {
                                this.getJsonData();
                              },
                            },
                            {
                              key: "_ShakeIdx",
                              get: function () {
                                return this.__ShakeIdx;
                              },
                              set: function (e) {},
                            },
                            {
                              key: "TweenList",
                              get: function () {
                                return this._TweenList;
                              },
                              set: function (e) {
                                (this._TweenList = e),
                                  this.updateDuration(),
                                  this._updateEasingEnum();
                              },
                            },
                          ]),
                          t
                        );
                      })(f)).prototype,
                      "alternately",
                      [L],
                      {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                          return !0;
                        },
                      }
                    )),
                    (V = t(G.prototype, "shakeJson", [j], {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      initializer: function () {
                        return null;
                      },
                    })),
                    (H = t(G.prototype, "shakename", [z], {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      initializer: function () {
                        return "custom";
                      },
                    })),
                    (Q = t(G.prototype, "__ShakeIdx", [D], {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      initializer: function () {
                        return null;
                      },
                    })),
                    t(
                      G.prototype,
                      "saveshake",
                      [q],
                      Object.getOwnPropertyDescriptor(G.prototype, "saveshake"),
                      G.prototype
                    ),
                    t(
                      G.prototype,
                      "_ShakeIdx",
                      [P],
                      Object.getOwnPropertyDescriptor(G.prototype, "_ShakeIdx"),
                      G.prototype
                    ),
                    (K = t(G.prototype, "Duration", [F], {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      initializer: function () {
                        return 0;
                      },
                    })),
                    (X = t(G.prototype, "magnitude", [C], {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      initializer: function () {
                        return 20;
                      },
                    })),
                    (Y = t(G.prototype, "frequency", [A], {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      initializer: function () {
                        return 1;
                      },
                    })),
                    (Z = t(G.prototype, "weight", [B], {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      initializer: function () {
                        return new p(0, 0, 0);
                      },
                    })),
                    ($ = t(G.prototype, "_TweenList", [W], {
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                      initializer: function () {
                        return [];
                      },
                    })),
                    t(
                      G.prototype,
                      "TweenList",
                      [R],
                      Object.getOwnPropertyDescriptor(G.prototype, "TweenList"),
                      G.prototype
                    ),
                    (U = G))
                  ) || U)
              ) || U)
          ) || U)
        );
        u._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SkeletonSync.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, n, o, r, i, a, l, s, c, p, u;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (o = e.initializerDefineProperty),
            (r = e.assertThisInitialized),
            (i = e.createClass);
        },
        function (e) {
          (a = e.cclegacy),
            (l = e._decorator),
            (s = e.sp),
            (c = e.v3),
            (p = e.UITransform),
            (u = e.Component);
        },
      ],
      execute: function () {
        var f, h, y, v, m, S;
        a._RF.push({}, "866f1RjwMhFfapt6JLtipxM", "SkeletonSync", void 0);
        var d = l.ccclass,
          _ = l.property,
          g = l.menu;
        e(
          "default",
          ((f = d("SkeletonSync")),
          (h = g("Chiron/Spine/SkeletonSync")),
          (y = _({
            displayName: "Overlap",
            tooltip: "是否交疊並同步座標、旋轉及縮放",
          })),
          f(
            (v =
              h(
                ((S = t(
                  (m = (function (e) {
                    function t() {
                      for (
                        var t, n = arguments.length, i = new Array(n), a = 0;
                        a < n;
                        a++
                      )
                        i[a] = arguments[a];
                      return (
                        ((t =
                          e.call.apply(e, [this].concat(i)) ||
                          this).m_skeleton = null),
                        o(t, "m_overlap", S, r(t)),
                        t
                      );
                    }
                    n(t, e);
                    var a = t.prototype;
                    return (
                      (a.__preload = function () {
                        this.m_skeleton = this.getComponent(s.Skeleton);
                      }),
                      (a.Sync = function (e) {
                        if (e && this.m_overlap) {
                          for (var t = 0, n = 1, o = 1, r = e; r; )
                            (n *= r.scale.x),
                              (o *= r.scale.y),
                              (t += r.angle),
                              (r = r.parent);
                          (this.node.angle = t), (this.node.scale = c(n, o, 0));
                          var i = e.parent
                              .getComponent(p)
                              .convertToWorldSpaceAR(e.position),
                            a = this.node.parent
                              .getComponent(p)
                              .convertToNodeSpaceAR(i);
                          this.node.setPosition(a);
                        }
                      }),
                      i(t, [
                        {
                          key: "Skeleton",
                          get: function () {
                            return this.m_skeleton;
                          },
                        },
                      ]),
                      t
                    );
                  })(u)).prototype,
                  "m_overlap",
                  [y],
                  {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function () {
                      return !0;
                    },
                  }
                )),
                (v = m))
              ) || v)
          ) || v)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SloganComponent.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./index2.ts",
    "./LocaleStringManager.ts",
  ],
  function (t) {
    "use strict";
    var e, o, i, n, m, r, c, a, s;
    return {
      setters: [
        function (t) {
          (e = t.inheritsLoose), (o = t.createClass);
        },
        function (t) {
          (i = t.cclegacy),
            (n = t._decorator),
            (m = t.log),
            (r = t.Animation),
            (c = t.SpriteFrame),
            (a = t.Component);
        },
        null,
        function (t) {
          s = t.localeStringManager;
        },
      ],
      execute: function () {
        var l;
        i._RF.push({}, "b57cahiKlxMZL7TyWc1iHaf", "SloganComponent", void 0);
        var _ = n.ccclass,
          u = 0,
          p = 1;
        t(
          "default",
          _(
            (l = (function (t) {
              function i() {
                for (
                  var e, o = arguments.length, n = new Array(o), m = 0;
                  m < o;
                  m++
                )
                  n[m] = arguments[m];
                return (
                  ((e =
                    t.call.apply(t, [this].concat(n)) ||
                    this).m_promotePictures = [[], []]),
                  (e.m_promoteAni = null),
                  (e.m_promotePic = void 0),
                  (e.m_promoteLock = !1),
                  (e.m_promoteIdx = -1),
                  (e.m_adNums = 0),
                  (e.m_isLandscape = void 0),
                  (e.m_curAniName = ""),
                  (e.m_changePictureCallback = void 0),
                  (e.m_revertPictureCallback = void 0),
                  (e.m_cycle = [
                    [8, 12],
                    [8, 8],
                  ]),
                  (e.m_promoting = !1),
                  (e.m_animationName = {
                    start: "AdSlogan_Start",
                    loop: "AdSlogan_Loop",
                    end: "AdSlogan_End",
                  }),
                  (e.ChangePic = function () {
                    var t, o;
                    if (!e.m_promoteLock) {
                      (e.m_promoting = !0),
                        e.m_changePictureCallback &&
                          e.m_changePictureCallback(),
                        e.m_promoteIdx++,
                        e.m_promoteIdx >= e.m_adNums && (e.m_promoteIdx = 0),
                        (e.m_promotePic.spriteFrame =
                          e.m_promotePictures[e.m_isLandscape ? u : p][
                            e.m_promoteIdx
                          ]);
                      var n = s
                        .GetGameAtlas()
                        .getSpriteFrame(
                          null == (t = e.m_promotePic) ||
                            null == (o = t.spriteFrame)
                            ? void 0
                            : o.name
                        );
                      n && (e.m_promotePic.spriteFrame = n),
                        e.PlayAni(e.m_animationName.start),
                        e.m_promoteAni.once(r.EventType.FINISHED, function () {
                          e.m_promoteLock || e.PlayAni(e.m_animationName.loop);
                        }),
                        e.scheduleOnce(
                          e.RevertPic,
                          e.m_cycle[1][0] == e.m_cycle[1][1]
                            ? e.m_cycle[1][0]
                            : i.GetRandomInt(
                                e.m_cycle[1][0],
                                e.m_cycle[1][1] + 1
                              )
                        );
                    }
                  }),
                  (e.RevertPic = function () {
                    e.m_revertPictureCallback && e.m_revertPictureCallback(),
                      e.PlayAni(e.m_animationName.end),
                      e.m_promoteAni.once(r.EventType.FINISHED, function () {
                        e.m_curAniName = "";
                      }),
                      (e.m_promoting = !1),
                      e.scheduleOnce(
                        e.ChangePic,
                        e.m_cycle[0][0] == e.m_cycle[0][1]
                          ? e.m_cycle[0][0]
                          : i.GetRandomInt(e.m_cycle[0][0], e.m_cycle[0][1] + 1)
                      );
                  }),
                  e
                );
              }
              e(i, t),
                (i.GetRandomInt = function (t, e) {
                  return Math.floor(Math.random() * (e - t) + t);
                });
              var n = i.prototype;
              return (
                (n.Init = function (t, e, o, i) {
                  void 0 === i && (i = Astarte.Define.GameBundle);
                  var n = this.LoadSlogans(t[0], t[1], i);
                  return (this.m_promoteAni = e), (this.m_promotePic = o), n;
                }),
                (n.LoadSlogans = function (t, e, o) {
                  var i = this,
                    n = t.length;
                  this.m_adNums = n;
                  for (
                    var r = [],
                      a = function (n) {
                        r.push(
                          new Promise(function (e) {
                            o.load(t[n], c, function (t, o) {
                              t || (i.m_promotePictures[u][n] = o), e();
                            });
                          })
                        ),
                          e &&
                            e[n] &&
                            r.push(
                              new Promise(function (t) {
                                o.load(e[n], c, function (e, o) {
                                  e || (i.m_promotePictures[p][n] = o), t();
                                });
                              })
                            );
                      },
                      s = 0;
                    s < n;
                    s++
                  )
                    a(s);
                  return Promise.all(r).then(function () {
                    for (var t = 0; t < n; t++)
                      i.m_promotePictures[p][t] ||
                        (i.m_promotePictures[p][t] = i.m_promotePictures[u][t]);
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
                        : i.GetRandomInt(
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
                    this.m_promoteAni.once(r.EventType.FINISHED, function () {
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
                  var e, o;
                  if (this.m_isLandscape != t) {
                    (this.m_isLandscape = t),
                      (this.m_promotePic.spriteFrame =
                        this.m_promotePictures[this.m_isLandscape ? u : p][
                          this.m_promoteIdx >= this.m_adNums
                            ? (this.m_promoteIdx = 0)
                            : this.m_promoteIdx
                        ]);
                    var i = s
                      .GetGameAtlas()
                      .getSpriteFrame(
                        null == (e = this.m_promotePic) ||
                          null == (o = e.spriteFrame)
                          ? void 0
                          : o.name
                      );
                    i && (this.m_promotePic.spriteFrame = i);
                  }
                }),
                o(i, [
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
                i
              );
            })(a))
          ) || l
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotActivator.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    "use strict";
    var e, i, n, o, r;
    return {
      setters: [
        function (t) {
          (e = t.inheritsLoose), (i = t.createClass);
        },
        function (t) {
          (n = t.cclegacy), (o = t._decorator), (r = t.Component);
        },
      ],
      execute: function () {
        var c, s;
        n._RF.push({}, "e2171n/i+xGsoWeQMXewobE", "SlotActivator", void 0);
        var u = o.ccclass,
          a = (o.property, o.menu);
        t(
          "default",
          u("SlotActivator")(
            (c =
              a("Chiron/Spine/SlotActivator")(
                (((s = (function (t) {
                  function n() {
                    return t.apply(this, arguments) || this;
                  }
                  return (
                    e(n, t),
                    i(n, [
                      {
                        key: "Identifier",
                        get: function () {
                          return this.identifier;
                        },
                        set: function (t) {
                          this.identifier = t;
                        },
                      },
                      {
                        key: "Active",
                        get: function () {
                          return this.active;
                        },
                        set: function (t) {
                          this.active = t;
                        },
                      },
                    ]),
                    n
                  );
                })(r)).SlotActivator = "SlotActivator"),
                (c = s))
              ) || c)
          ) || c
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotColorFollow.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (o) {
    "use strict";
    var t, e, n, i, l, r, s, p, c, a, u, h, m, _, y, C;
    return {
      setters: [
        function (o) {
          (t = o.applyDecoratedDescriptor),
            (e = o.inheritsLoose),
            (n = o.initializerDefineProperty),
            (i = o.assertThisInitialized),
            (l = o.createClass);
        },
        function (o) {
          (r = o.cclegacy),
            (s = o._decorator),
            (p = o.Enum),
            (c = o.math),
            (a = o.sp),
            (u = o.Sprite),
            (h = o.Label),
            (m = o.color),
            (_ = o.UIOpacity),
            (y = o.Component),
            (C = o.CCClass);
        },
      ],
      execute: function () {
        var f, d, g, S, b, v, k, w, N, I, D, O, F, L, x, z, P, j, E;
        r._RF.push({}, "e23desmKVBLjKgDg5KLcySp", "SlotColorFollow", void 0);
        var A = s.ccclass,
          K = s.property,
          B = s.menu,
          H = (s.inspector, p({ None: 0 }));
        o(
          "default",
          ((f = A("SlotColorFollow")),
          (d = B("Chiron/Spine/SlotColorFollow")),
          (g = K({ visible: !1, tooltip: "目標 Spine 骨架" })),
          (S = K({ visible: !1, tooltip: "目標同步 slot 名稱" })),
          (b = K({ visible: !0, displayName: "Preview" })),
          (v = K({ visible: !1, type: c.Color })),
          (k = K({ visible: !1, type: a.Skeleton })),
          (w = K({
            visible: !0,
            displayName: "Skeleton",
            tooltip: "目標 Spine 骨架",
            type: a.Skeleton,
          })),
          (N = K({ visible: !1, tooltip: "目標同步 slot 名稱" })),
          (I = K({ visible: !1 })),
          (D = K({ visible: !0, displayName: "Slot", type: H })),
          f(
            (O =
              d(
                (((E = (function (o) {
                  function t() {
                    for (
                      var t, e = arguments.length, l = new Array(e), r = 0;
                      r < e;
                      r++
                    )
                      l[r] = arguments[r];
                    return (
                      ((t = o.call.apply(o, [this].concat(l)) || this).editor =
                        void 0),
                      n(t, "m_preview", L, i(t)),
                      n(t, "_colorCache", x, i(t)),
                      n(t, "m_spineSkeleton", z, i(t)),
                      n(t, "m_slotName", P, i(t)),
                      n(t, "__slotIndex", j, i(t)),
                      t
                    );
                  }
                  e(t, o);
                  var r = t.prototype;
                  return (
                    (r.__preload = function () {}),
                    (r.onLoad = function () {
                      this.node.getComponent(u)
                        ? (this._colorCache = this.node.getComponent(u).color)
                        : this.node.getComponent(h) &&
                          (this._colorCache = this.node.getComponent(h).color);
                    }),
                    (r.update = function () {
                      if (this.m_spineSkeleton && "" != this.m_slotName) {
                        var o = this.m_spineSkeleton.findSlot(this.m_slotName),
                          t = o ? 255 * o.color.r : this._colorCache.r,
                          e = o ? 255 * o.color.g : this._colorCache.g,
                          n = o ? 255 * o.color.b : this._colorCache.b,
                          i = o ? 255 * o.color.a : this._colorCache.a;
                        (t == this._colorCache.r &&
                          e == this._colorCache.g &&
                          n == this._colorCache.b &&
                          i == this._colorCache.a) ||
                          (this.node.getComponent(u)
                            ? ((this.node.getComponent(u).color = m(
                                t,
                                e,
                                n,
                                i
                              )),
                              this._colorCache.set(
                                this.node.getComponent(u).color
                              ))
                            : this.node.getComponent(h) &&
                              ((this.node.getComponent(h).color = m(
                                t,
                                e,
                                n,
                                i
                              )),
                              this._colorCache.set(
                                this.node.getComponent(h).color
                              )),
                          this.node.getComponent(_) &&
                            (this.node.getComponent(_).opacity = i),
                          (this._colorCache.a = i));
                      }
                    }),
                    (r.onDestroy = function () {
                      (this._colorCache = null),
                        (this.m_spineSkeleton = null),
                        (this.m_slotName = null);
                    }),
                    (r._refreshInspector = function () {}),
                    (r._slotEnum = function () {}),
                    (r._updateSlotEnum = function () {
                      var o,
                        t,
                        e,
                        n,
                        i = this._slotEnum();
                      (o = this),
                        (t = "_slotIndex"),
                        (e = i || H),
                        (n = p.getList(p(e))),
                        C.Attr.setClassAttr(o, t, "type", "Enum"),
                        C.Attr.setClassAttr(o, t, "enumList", n);
                    }),
                    (r.notify = function () {}),
                    l(t, [
                      {
                        key: "Skeleton",
                        get: function () {
                          return this.m_spineSkeleton;
                        },
                        set: function (o) {
                          this.m_spineSkeleton = o;
                        },
                      },
                      {
                        key: "SlotName",
                        get: function () {
                          return this.m_slotName;
                        },
                        set: function (o) {
                          this.m_slotName = o;
                        },
                      },
                      {
                        key: "_spineSkeleton",
                        get: function () {},
                        set: function (o) {},
                      },
                      {
                        key: "_slotIndex",
                        get: function () {},
                        set: function (o) {},
                      },
                    ]),
                    t
                  );
                })(y)).SlotColorFollow = "SlotColorFollow"),
                t(
                  (F = E).prototype,
                  "Skeleton",
                  [g],
                  Object.getOwnPropertyDescriptor(F.prototype, "Skeleton"),
                  F.prototype
                ),
                t(
                  F.prototype,
                  "SlotName",
                  [S],
                  Object.getOwnPropertyDescriptor(F.prototype, "SlotName"),
                  F.prototype
                ),
                (L = t(F.prototype, "m_preview", [b], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return !0;
                  },
                })),
                (x = t(F.prototype, "_colorCache", [v], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return new c.Color(c.Color.WHITE);
                  },
                })),
                (z = t(F.prototype, "m_spineSkeleton", [k], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                })),
                t(
                  F.prototype,
                  "_spineSkeleton",
                  [w],
                  Object.getOwnPropertyDescriptor(
                    F.prototype,
                    "_spineSkeleton"
                  ),
                  F.prototype
                ),
                (P = t(F.prototype, "m_slotName", [N], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return "";
                  },
                })),
                (j = t(F.prototype, "__slotIndex", [I], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return 0;
                  },
                })),
                t(
                  F.prototype,
                  "_slotIndex",
                  [D],
                  Object.getOwnPropertyDescriptor(F.prototype, "_slotIndex"),
                  F.prototype
                ),
                (O = F))
              ) || O)
          ) || O)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotCulling.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    "use strict";
    var e, o, n, i, r, l;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (o = t.inheritsLoose),
            (n = t.createClass);
        },
        function (t) {
          (i = t.cclegacy), (r = t._decorator), (l = t.Component);
        },
      ],
      execute: function () {
        var p, s, u, c, g, y, S, a;
        i._RF.push({}, "ff032nME8lBJKBpMlK8O/1z", "SlotCulling", void 0);
        var f = r.ccclass,
          v = r.property,
          C = r.menu;
        t(
          "default",
          ((p = f("SlotCulling")),
          (s = C("Chiron/Spine/SlotCulling")),
          (u = v({ visible: !1, tooltip: "目標 Spine 骨架" })),
          (c = v({
            visible: !1,
            tooltip: "反向剔除 Slot 項目(勾選的不會被剔除，未勾選的將被剔除)",
          })),
          (g = v({ visible: !1, tooltip: "遭剔除的 Slot 項目名稱" })),
          p(
            (y =
              s(
                (((a = (function (t) {
                  function e() {
                    return t.apply(this, arguments) || this;
                  }
                  return (
                    o(e, t),
                    n(
                      e,
                      [
                        {
                          key: "Skeleton",
                          get: function () {
                            return this.m_spineSkeleton;
                          },
                          set: function (t) {
                            this.m_spineSkeleton = t;
                          },
                        },
                        {
                          key: "Invert",
                          get: function () {
                            return this.m_invert;
                          },
                          set: function (t) {
                            this.m_invert = t;
                          },
                        },
                        {
                          key: "CullingList",
                          get: function () {
                            return this._cullingSlotNames;
                          },
                        },
                      ],
                      [
                        {
                          key: "Name",
                          get: function () {
                            return e.SlotCulling;
                          },
                        },
                      ]
                    ),
                    e
                  );
                })(l)).SlotCulling = "SlotCulling"),
                e(
                  (S = a).prototype,
                  "Skeleton",
                  [u],
                  Object.getOwnPropertyDescriptor(S.prototype, "Skeleton"),
                  S.prototype
                ),
                e(
                  S.prototype,
                  "Invert",
                  [c],
                  Object.getOwnPropertyDescriptor(S.prototype, "Invert"),
                  S.prototype
                ),
                e(
                  S.prototype,
                  "CullingList",
                  [g],
                  Object.getOwnPropertyDescriptor(S.prototype, "CullingList"),
                  S.prototype
                ),
                (y = S))
              ) || y)
          ) || y)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SoundAudioManager.ts",
  ["cc", "./index4.ts"],
  function (n) {
    "use strict";
    var o, u, e;
    return {
      setters: [
        function (n) {
          (o = n.cclegacy), (u = n.warn);
        },
        function (n) {
          e = n.Astarte;
        },
      ],
      execute: function () {
        var t;
        n({
          UpdateSoundAudioManager: function () {
            null == e.SoundAudioManager
              ? (u("SoundAudioManager not found"),
                (t = n("soundAudioManager", e.SoundManager)).SetSettingJson ||
                  (t.SetSettingJson = function (n) {}),
                t.AddAudioClips || (t.AddAudioClips = function (n) {}),
                t.ClearSetting || (t.ClearSetting = function () {}))
              : (t = n("soundAudioManager", e.SoundAudioManager));
          },
          soundAudioManager: void 0,
        }),
          o._RF.push(
            {},
            "3e41doUMVNLQbg53Jn6N9ch",
            "SoundAudioManager",
            void 0
          ),
          o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SoundManager.ts",
  ["cc", "./index4.ts"],
  function (n) {
    "use strict";
    var e, t;
    return {
      setters: [
        function (n) {
          e = n.cclegacy;
        },
        function (n) {
          t = n.Astarte;
        },
      ],
      execute: function () {
        n({
          UpdateSoundManager: function () {
            n("soundManager", t.SoundManager);
          },
          soundManager: void 0,
        }),
          e._RF.push({}, "8c0f7IX3HNLY6BaWiL8u0j4", "SoundManager", void 0),
          e._RF.pop();
      },
    };
  }
);

System.register("chunks:///_virtual/SpineKit.ts", ["cc"], function (n) {
  "use strict";
  var e;
  return {
    setters: [
      function (n) {
        e = n.cclegacy;
      },
    ],
    execute: function () {
      e._RF.push({}, "eb033pmYDhAjadYFiwbi8gp", "SpineKit", void 0),
        (n(
          "default",
          (function () {
            function n() {}
            return (
              (n.ForceCancel = function (n, e) {
                var t, a, i;
                null == (t = this.m_cancelCbs) ||
                  null == (a = (i = t[n])[e]) ||
                  a.call(i);
              }),
              (n.PlayAnimation = function (n, e, t, a, i, c) {
                var m = this;
                return (
                  void 0 === t && (t = !1),
                  void 0 === a && (a = 0),
                  void 0 === c && (c = !0),
                  new Promise(function (s) {
                    (m.m_cancelCbs[n.name] = {}),
                      (m.m_cancelCbs[n.name][e] = function () {
                        s(!0);
                      });
                    var r = !0,
                      l = n.getState();
                    if (l) {
                      var o = l.expandToIndex(a);
                      if (o) {
                        var u = o.animation.name + "." + e;
                        r = void 0 === l.data.animationToMixTime[u];
                      }
                    }
                    r && (n.clearTrack(a), c && n.setToSetupPose());
                    var C = n.setAnimation(a, e, t);
                    C
                      ? (n.setTrackEventListener(C, function (n, e) {
                          C &&
                            C.animation.name == n.animation.name &&
                            (null == i || i(e.data.name));
                        }),
                        n.setTrackCompleteListener(C, function (t) {
                          C &&
                            C.animation.name == t.animation.name &&
                            (n.setTrackCompleteListener(C, function () {}),
                            n.setTrackInterruptListener(C, function () {}),
                            m.m_cancelCbs[n.name] &&
                              m.m_cancelCbs[n.name][e] &&
                              (m.m_cancelCbs[n.name][e] = null),
                            s(!1));
                        }),
                        n.setTrackInterruptListener(C, function (t) {
                          C &&
                            C.animation.name == t.animation.name &&
                            (n.setTrackCompleteListener(C, function () {}),
                            n.setTrackInterruptListener(C, function () {}),
                            m.m_cancelCbs[n.name] &&
                              m.m_cancelCbs[n.name][e] &&
                              (m.m_cancelCbs[n.name][e] = null),
                            s(!0));
                        }))
                      : (n.setCompleteListener(function () {
                          n.setCompleteListener(null),
                            n.setInterruptListener(null),
                            m.m_cancelCbs[n.name] &&
                              m.m_cancelCbs[n.name][e] &&
                              (m.m_cancelCbs[n.name][e] = null),
                            s(!1);
                        }),
                        n.setInterruptListener(function () {
                          n.setCompleteListener(null),
                            n.setInterruptListener(null),
                            m.m_cancelCbs[n.name] &&
                              m.m_cancelCbs[n.name][e] &&
                              (m.m_cancelCbs[n.name][e] = null),
                            s(!0);
                        }));
                  })
                );
              }),
              n
            );
          })()
        ).m_cancelCbs = {}),
        e._RF.pop();
    },
  };
});

System.register(
  "chunks:///_virtual/StateManager.ts",
  ["cc", "./index4.ts"],
  function (t) {
    "use strict";
    var e, a;
    return {
      setters: [
        function (t) {
          e = t.cclegacy;
        },
        function (t) {
          a = t.Astarte;
        },
      ],
      execute: function () {
        t({
          UpdateStateManager: function () {
            t("stateManager", a.StateManager);
          },
          stateManager: void 0,
        }),
          e._RF.push({}, "8de065l1yBCNoeRGxK2yzaD", "StateManager", void 0);
        t("BaseState", function () {});
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SwipeScreen.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, i, n, s, o, r, l, a, c, d, u, h, m, v, p;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (s = e.assertThisInitialized),
            (o = e.createForOfIteratorHelperLoose);
        },
        function (e) {
          (r = e.cclegacy),
            (l = e._decorator),
            (a = e.sys),
            (c = e.director),
            (d = e.find),
            (u = e.Node),
            (h = e.UITransform),
            (m = e.Size),
            (v = e.Button),
            (p = e.Component);
        },
      ],
      execute: function () {
        var y, f, w, b, g, k, I, S, _, O, E, C;
        r._RF.push({}, "89025dALbBFj7AFo+6o3xYM", "SwipeScreen", void 0);
        var F = l.ccclass,
          P = l.property,
          x = function (e, t, i, n, s, o) {
            (this.name = e),
              (this.height = t),
              (this.width = i),
              (this.ratio = n),
              (this.statusHeight = s),
              (this.homeHeight = o);
          },
          A = [
            new x("iPhone 6.5-inch", 896, 414, 3, 44, 34),
            new x("iPhone 6.1-inch", 896, 414, 2, 44, 34),
            new x("iPhone 5.8-inch", 812, 375, 3, 44, 34),
            new x("iPhone 5.5-inch", 736, 414, 3, 18, 0),
            new x("iPhone 4.7-inch", 667, 375, 2, 20, 0),
            new x("iPhone 4-inch", 568, 320, 2, 20, 0),
            new x("iPhone 3.5-inch", 480, 320, 2, 20, 0),
            new x("iPhone(Legacy) & iPod Touch", 480, 320, 1, 20, 0),
            new x("iPad Pro 12.9-inch", 1366, 1024, 2, 20, 0),
            new x("iPad Pro 10.5-inch", 1112, 834, 2, 20, 0),
            new x("iPad 9.7-inch Retina", 1024, 768, 2, 20, 0),
            new x("iPad", 1024, 768, 1, 20, 0),
            new x("iPad Mini Retina", 1024, 768, 2, 20, 0),
            new x("iPad Mini", 1024, 768, 1, 20, 0),
          ],
          L = "mask",
          G = "mask_close_tip",
          H = "mask_close",
          z = "bar",
          M = {
            tw: [
              "滑動無效時, 請點擊此處進入遊戲. ❎",
              "請解除豎排方向鎖定, 並將手機水平放置.",
            ],
            cn: [
              "滑动无效时, 请点击此处进入游戏. ❎",
              "请解除竖排方向锁定, 并将手机水平放置.",
            ],
            th: [
              "เมื่อสไลด์ไม่ถูกต้อง กรุณาคลิกที่นี่เพื่อเข้าสู่เกม ❎",
              "โปรดทำการปลดล็อกรูปแบบทิศทาง เพื่อสามารถเปลี่ยนรูปแบบทิศทางตามระดับโทรศัพท์ได้",
            ],
            vn: [
              "Nếu không thể lthao tác, hãy chạm vào đây để vào game. ❎",
              "Hãy mở khóa xoay hướng, đồng thời xoay ngang màn hình.",
            ],
            id: [
              "Klik di sini untuk masuk ke permainan, ketika tidak bisa di scroll. ❎",
              "Silakan buka kunci posisi vertikal, dan letakkan telepon seluler secara horizontal.",
            ],
            mm: [
              "When the slide is invalid, please click here. ❎",
              "Please unlock the vertical direction and place the phone horizontally.",
            ],
            jp: [
              "スライドで入れない場合は、ここをタップしてください。 ❎",
              "垂直固定を解除し、端末を水平方向に置いてください。",
            ],
            en: [
              "If swiping does not work, please tap here. ❎",
              "Please unlock screen rotation and hold the phone horizontally.",
            ],
          },
          T = ["tw", "zh-TW"],
          B = ["cn", "zh-CN"],
          N = ["en", "en-US"],
          V = ["th", "th-TH"],
          D = ["vn", "vi-VN"],
          R = ["id", "id-ID"],
          W = ["hi", "hi-IN"],
          j = ["ta", "ta-IN"],
          U = ["mm", "my-MM"],
          q = ["jp", "ja-JP"],
          Q = [1131],
          $ = [1864, 1002];
        e(
          "default",
          ((y = P(Boolean)),
          (f = P(Boolean)),
          (w = P(Boolean)),
          (b = P(Boolean)),
          (g = P(Number)),
          F(
            ((S = t(
              (I = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, o = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    o[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    n(t, "isLandscape", S, s(t)),
                    n(t, "isPortrait", _, s(t)),
                    n(t, "isIOS", O, s(t)),
                    n(t, "isAndroid", E, s(t)),
                    n(t, "android_Apiid", C, s(t)),
                    (t.m_mask = null),
                    (t.m_isScrolling = !1),
                    (t.m_isblock = !1),
                    (t.m_scrollInterval = void 0),
                    (t.m_scrollTimeOut = void 0),
                    (t.m_backGround = null),
                    (t.m_isLandscape = !0),
                    t
                  );
                }
                i(t, e);
                var r = t.prototype;
                return (
                  (r.onLoad = function () {
                    a.isNative || this.Init();
                  }),
                  (r.GetDeviceName = function () {
                    if (a.os === a.OS.IOS) {
                      var e = this.GetiOSDevice();
                      if (e) return e.name;
                    } else if (a.os === a.OS.ANDROID) {
                      var t =
                        /Mozilla\/5.0\s*\([^()]*?(Android[^()]*?);\s*([^()]*?)\)/g.exec(
                          navigator.userAgent
                        );
                      if (t && t.length > 2) return t[2].split(" Build")[0];
                    }
                    return "unknown";
                  }),
                  (r.CreateHtmlTag = function () {
                    if (!this.m_backGround) {
                      this.node.active = !0;
                      var e = document.body;
                      e.style.overflow = "visible";
                      var t = document.getElementById("Cocos3dGameContainer");
                      (t.style.overflow = "hidden"),
                        (t.style.position = "fixed");
                      var i = document.createElement("div");
                      (i.id = z),
                        (i.style.position = "absolute"),
                        (i.style.height = "100vh");
                      var n = document.createElement("div");
                      (n.id = L),
                        (n.style.backgroundColor = "rgba(0, 0, 0, 0.7)"),
                        (n.style.height = "150vh"),
                        (n.style.width = "100vw"),
                        (n.style.zIndex = "99"),
                        (n.style.display = "none"),
                        (n.style.position = "absolute"),
                        (n.style.top = "0%"),
                        (n.style.left = "0%"),
                        (this.m_backGround = n);
                      var s = document.createElement("div");
                      (s.id = G),
                        (s.style.width = "70vw"),
                        (s.style.top = "28vh"),
                        (s.style.left = "50vw"),
                        (s.style.transform = "translate(-50%, -50%)"),
                        (s.style.fontSize = "18px"),
                        (s.style.fontWeight = "bold"),
                        (s.style.color = "#FFFFFF"),
                        (s.style.position = "fixed");
                      var o = document.createElement("div");
                      (o.style.top = "16vh"),
                        (o.style.left = "50vw"),
                        (o.style.transform = "translate(-50%, -50%)"),
                        (o.style.position = "fixed");
                      var r = document.createElement("div");
                      (r.id = H),
                        (r.style.width = "90vw"),
                        (r.style.fontSize = "24px"),
                        (r.style.fontWeight = "bold"),
                        (r.style.color = "#EEE8AA"),
                        (r.style.wordWrap = "break-word");
                      var l = document.createElement("div");
                      (l.style.fontSize = "48px"),
                        (l.style.fontWeight = "bold"),
                        (l.style.color = "#EEE8AA");
                      var a = document.createElementNS(
                        "http://www.w3.org/2000/svg",
                        "svg"
                      );
                      (a.style.width = "150px"),
                        (a.style.height = "150px"),
                        (a.style.position = "fixed"),
                        (a.style.top = "75vh"),
                        (a.style.left = "50vw"),
                        (a.style.transform = "translate(-50%, -50%)"),
                        (a.style.animationDuration = "2s"),
                        (a.style.animationName = "fullscreen-swipe"),
                        (a.style.animationIterationCount = "infinite");
                      var c = document.createElement("style"),
                        d = document.createTextNode(
                          "@keyframes fullscreen-swipe {from { top:80% }to { top:50% }}"
                        );
                      c.appendChild(d),
                        a.appendChild(c),
                        a.setAttribute("viewBox", "0 0 547.371 547.371");
                      var u = document.createElementNS(
                        "http://www.w3.org/2000/svg",
                        "path"
                      );
                      u.setAttribute("fill", "#FFFFFF"),
                        u.setAttribute(
                          "d",
                          "M136.623,52.13v164.027l-23.875,23.877c-54.503,54.479-54.503,143.151,0,197.627l57.317,57.292c33.806,33.808,78.743,52.416,126.521,52.416c98.658,0,178.912-80.254,178.912-178.911V208.522c0-28.752-23.381-52.131-52.156-52.131c-10.713,0-20.695,3.258-28.984,8.836c-7.143-20.308-26.51-34.902-49.211-34.902c-10.713,0-20.695,3.26-28.984,8.838c-7.141-20.307-26.509-34.901-49.21-34.901c-9.487,0-18.402,2.555-26.065,7.012V52.132c0-28.75-23.38-52.131-52.131-52.131C160.003,0.001,136.623,23.38,136.623,52.13z M214.845,52.13v169.425c0,7.192,5.839,13.032,13.033,13.032s13.033-5.84,13.033-13.032v-65.162c0-14.39,11.703-26.066,26.064-26.066c14.362,0,26.063,11.678,26.063,26.066v39.098c0,7.193,5.84,13.033,13.033,13.033s13.033-5.84,13.033-13.033v-13.033c0-14.389,11.703-26.063,26.064-26.063c14.363,0,26.064,11.676,26.064,26.063v26.064c0,7.192,5.84,13.033,13.033,13.033s13.033-5.841,13.033-13.033c0-14.39,11.703-26.064,26.064-26.064c14.359,0,26.064,11.676,26.064,26.064v159.938c0,84.27-68.578,152.848-152.848,152.848c-40.819,0-79.188-15.899-108.066-44.78l-57.317-57.292c-22.155-22.183-33.233-51.271-33.233-80.385c0-29.115,11.078-58.203,33.233-80.387l5.448-5.446v72.8c0,7.192,5.839,13.033,13.032,13.033c7.194,0,13.033-5.841,13.033-13.033V52.13c0-14.389,11.704-26.065,26.065-26.065C203.141,26.063,214.845,37.743,214.845,52.13z"
                        ),
                        e.appendChild(n),
                        n.appendChild(s),
                        n.appendChild(o),
                        a.appendChild(u),
                        n.appendChild(a),
                        o.appendChild(r),
                        o.appendChild(l),
                        e.appendChild(i);
                    }
                  }),
                  (r.Init = function () {
                    var e = this,
                      t = !1;
                    "undefined" != typeof LobbyData && (t = LobbyData.pwa);
                    var i = Math.floor(
                      Number(this.GetLinkParameterByName("apiId"))
                    );
                    if (
                      (this.isPortrait
                        ? (this.m_isblock = Q.indexOf(i) >= 0)
                        : this.isAndroid &&
                          this.android_Apiid.length > 0 &&
                          this.android_Apiid.indexOf(i) >= 0 &&
                          (this.isAndroid = !1),
                      this.m_isblock || (this.m_isblock = $.indexOf(i) >= 0),
                      !t && !this.m_isblock)
                    )
                      if (
                        (this.AddGameViewMask(),
                        (this.isIOS = !1),
                        a.os == a.OS.IOS && 0 == this.IsWebview() && this.isIOS)
                      )
                        if (
                          (this.CreateHtmlTag(),
                          this.SetCloseContent(),
                          (this.m_backGround.style.display = "inline"),
                          this.SetShowMask(),
                          1 == this.IsChrome())
                        ) {
                          var n = this.GetiOSDevice();
                          if (null != n) {
                            var s =
                                0.99 *
                                (screen.height -
                                  n.statusHeight -
                                  n.homeHeight -
                                  20),
                              o = 0.99 * (screen.width - n.statusHeight - 20);
                            (document.body.onresize = function () {
                              (window.innerHeight >= window.innerWidth
                                ? s
                                : o) <= window.innerHeight
                                ? e.HideMask()
                                : e.ShowMask();
                            }),
                              window.addEventListener(
                                "scroll",
                                function () {
                                  return (e.m_isScrolling = !0);
                                },
                                { capture: !1, passive: !0 }
                              ),
                              this.m_backGround.addEventListener(
                                "touchend",
                                function () {
                                  return e.ScrollReset();
                                }
                              );
                          } else this.HideMask();
                        } else {
                          var r = document.body.onresize;
                          document.body.onresize = function () {
                            r && r(null, null);
                            var t = document.documentElement.scrollWidth,
                              i = document.documentElement.scrollHeight,
                              n = t > i;
                            document.getElementById(z).clientHeight ==
                            window.innerHeight
                              ? e.HideMask()
                              : e.SetShowMask(n),
                              window.addEventListener(
                                "scroll",
                                function () {
                                  return (e.m_isScrolling = !0);
                                },
                                { capture: !1, passive: !0 }
                              ),
                              e.m_backGround.addEventListener(
                                "touchend",
                                function () {
                                  return e.ScrollReset();
                                }
                              ),
                              (e.m_isLandscape = t > i);
                          };
                        }
                      else if (
                        a.os == a.OS.ANDROID &&
                        0 == this.IsWebview() &&
                        this.isAndroid
                      )
                        if (
                          a.browserType == a.BrowserType.MOBILE_QQ ||
                          a.browserType == a.BrowserType.UC
                        );
                        else {
                          var l = function () {
                            e.HasFullscreen() &&
                              !e.IsFullscreen() &&
                              (e.m_mask.active = !0);
                          };
                          (document.body.onresize = l), l();
                        }
                  }),
                  (r.SetShowMask = function (e) {
                    if ((void 0 === e && (e = void 0), this.IsIOS15orOver()))
                      if (void 0 === e) {
                        var t = document.documentElement.scrollWidth,
                          i = document.documentElement.scrollHeight;
                        (this.m_isLandscape = t > i),
                          this.m_isLandscape
                            ? this.IsIOS15Version(0) ||
                              this.IsIOS15Version(1) ||
                              this.IsIOS15Version(2) ||
                              this.IsIOS15Version(3)
                              ? (this.m_backGround.style.visibility = "hidden")
                              : (this.m_backGround.style.visibility = "visible")
                            : this.IsIOS15Version(0) ||
                              this.IsIOS15Version(1) ||
                              this.IsIOS15Version(2) ||
                              this.IsIOS15Version(3)
                            ? (this.m_backGround.style.visibility = "visible")
                            : (this.m_backGround.style.visibility = "hidden");
                      } else
                        document.getElementById(z).clientHeight,
                          window.innerHeight,
                          (e === this.m_isLandscape &&
                            document.getElementById(z).clientHeight ===
                              window.innerHeight) ||
                            (e
                              ? this.IsIOS15Version(0) ||
                                this.IsIOS15Version(1) ||
                                this.IsIOS15Version(2) ||
                                this.IsIOS15Version(3)
                                ? (this.m_backGround.style.visibility =
                                    "hidden")
                                : (this.m_backGround.style.visibility =
                                    "visible")
                              : this.IsIOS15Version(0) ||
                                this.IsIOS15Version(1) ||
                                this.IsIOS15Version(2) ||
                                this.IsIOS15Version(3)
                              ? (this.m_backGround.style.visibility = "visible")
                              : (this.m_backGround.style.visibility =
                                  "hidden"));
                    else this.ShowMask();
                  }),
                  (r.SetCloseContent = function () {
                    var e = this,
                      t = this.GetLang("lang");
                    t = this.ChangeLang(t);
                    var i = document.getElementById(H),
                      n = this.isLandscape ? document.getElementById(G) : null;
                    M[t]
                      ? ((i.textContent = M[t][0]),
                        n && (n.textContent = M[t][1]))
                      : ((i.textContent = M[N[0]][0]),
                        n && (n.textContent = M[N[0]][1])),
                      i.onclick ||
                        (i.onclick = function () {
                          e.HideMask();
                        });
                  }),
                  (r.GetLang = function (e) {
                    var t = a.localStorage.getItem("LobbyLanguage");
                    if (!t || "" == t) {
                      if (
                        -1 !=
                        (t =
                          "undefined" != typeof LobbyData
                            ? LobbyData.url
                            : window.location.href).indexOf("?")
                      )
                        for (
                          var i = t.split("?")[1].split("&"), n = 0;
                          n < i.length;
                          n++
                        )
                          if (i[n].split("=")[0] == e)
                            return i[n].split("=")[1];
                      return N[0];
                    }
                    return t;
                  }),
                  (r.ChangeLang = function (e) {
                    switch (e) {
                      case T[1]:
                        return T[0];
                      case B[1]:
                        return B[0];
                      case V[1]:
                        return V[0];
                      case D[1]:
                        return D[0];
                      case R[1]:
                        return R[0];
                      case W[1]:
                        return W[0];
                      case j[1]:
                        return j[0];
                      case U[1]:
                        return U[0];
                      case q[1]:
                        return q[0];
                      default:
                        return N[0];
                    }
                  }),
                  (r.ShowMask = function () {
                    for (
                      var e = this,
                        t = document
                          .getElementById("Cocos3dGameContainer")
                          .getElementsByTagName("div"),
                        i = 0,
                        n = 0;
                      n < t.length;
                      n++
                    ) {
                      var s = t[n].getElementsByTagName("iframe");
                      if (s && s.length > 0) {
                        i = n;
                        break;
                      }
                    }
                    var o = t[i];
                    (o && "hidden" !== o.style.visibility) ||
                      ((this.m_backGround.style.visibility = "visible"),
                      this.m_mask && (this.m_mask.active = !0),
                      window.scrollTo(0, 0),
                      this.m_scrollInterval &&
                        clearInterval(this.m_scrollInterval),
                      (this.m_scrollInterval = setInterval(function () {
                        e.m_isScrolling &&
                          ((e.m_isScrolling = !1), e.ScrollReset());
                      }, 250)));
                  }),
                  (r.ScrollReset = function () {
                    var e = this;
                    window.scrollTo(0, 0),
                      this.m_scrollTimeOut &&
                        clearTimeout(this.m_scrollTimeOut),
                      (this.m_scrollTimeOut = setTimeout(function () {
                        window.scrollTo(0, 0),
                          clearInterval(e.m_scrollInterval),
                          (e.m_scrollInterval = null);
                      }, 250));
                  }),
                  (r.HideMask = function () {
                    var e = this;
                    window.scrollTo(0, 0),
                      this.m_backGround &&
                        (this.m_backGround.style.visibility = "hidden"),
                      this.scheduleOnce(function () {
                        e.m_mask && (e.m_mask.active = !1);
                      }, 0);
                  }),
                  (r.AddGameViewMask = function () {
                    var e = this,
                      t = c.getScene();
                    this.m_mask ||
                    t.getChildByName("ScrollForMask") ||
                    a.browserType == a.BrowserType.FIREFOX
                      ? !this.m_mask &&
                        t.getChildByName("ScrollForMask") &&
                        (this.m_mask = d("ScrollForMask"))
                      : ((this.m_mask = new u()),
                        (this.m_mask.name = "ScrollForMask"),
                        this.m_mask
                          .addComponent(h)
                          .setContentSize(new m(2e3, 2e3)),
                        this.m_mask.addComponent(v),
                        (this.m_mask.active = !1),
                        t.addChild(this.m_mask),
                        this.m_mask.setSiblingIndex(t.children.length),
                        this.m_mask.on(u.EventType.TOUCH_END, function () {
                          if (a.os == a.OS.IOS && 0 == e.IsWebview()) {
                            var t = e.m_backGround;
                            t &&
                              "hidden" == t.style.visibility &&
                              (e.m_mask.active = !1);
                          } else a.os == a.OS.ANDROID && 0 == e.IsWebview() && e.Fullscreen();
                        }));
                  }),
                  (r.IsWebview = function () {
                    var e = navigator.userAgent,
                      t = new RegExp(
                        "(" +
                          [
                            "WebView",
                            "(iPhone|iPod|iPad)(?!.*Safari/)",
                            "Android.*(wv|.0.0.0)",
                          ].join("|") +
                          ")",
                        "ig"
                      );
                    return Boolean(e.match(t));
                  }),
                  (r.IsChrome = function () {
                    return /CriOS/.test(navigator.userAgent);
                  }),
                  (r.GetiOSDevice = function () {
                    for (var e, t = o(A); !(e = t()).done; ) {
                      var i = e.value;
                      if (
                        screen.height === i.height &&
                        screen.width === i.width &&
                        window.devicePixelRatio === i.ratio
                      )
                        return i;
                    }
                    return null;
                  }),
                  (r.HasFullscreen = function () {
                    return (
                      null !=
                      (document.fullscreenEnabled ||
                        document.mozFullScreenEnabled ||
                        document.webkitFullscreenEnabled ||
                        document.msFullscreenEnabled)
                    );
                  }),
                  (r.IsFullscreen = function () {
                    return (
                      null !=
                      (document.fullscreenElement ||
                        document.webkitFullscreenElement ||
                        document.mozFullScreenElement ||
                        document.msFullscreenElement)
                    );
                  }),
                  (r.Fullscreen = function () {
                    try {
                      var e =
                          document.documentElement.requestFullscreen ||
                          document.documentElement.webkitRequestFullscreen ||
                          document.documentElement.mozRequestFullScreen ||
                          document.documentElement.msRequestFullscreen,
                        t =
                          document.exitFullscreen ||
                          document.webkitExitFullscreen ||
                          document.mozCancelFullScreen ||
                          document.msExitFullscreen;
                      if (this.HasFullscreen())
                        if (this.IsFullscreen()) t.call(document);
                        else
                          try {
                            var i = e.call(document.documentElement);
                            i instanceof Promise && i.catch(function () {});
                          } catch (e) {}
                      else console.log("not support fullscreen.");
                      this.m_mask.active = !1;
                    } catch (e) {
                      this.m_mask.active = !1;
                    }
                  }),
                  (r.GetLinkParameterByName = function (e) {
                    var t = window.location.href;
                    e = e.replace(/[[]]/g, "\\$&");
                    var i = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(
                      t
                    );
                    return i
                      ? i[2]
                        ? decodeURIComponent(i[2].replace(/\+/g, " "))
                        : ""
                      : null;
                  }),
                  (r.IsIOS15orOver = function () {
                    return (
                      a.os == a.OS.IOS &&
                      /iPhone OS 15/.test(window.navigator.userAgent)
                    );
                  }),
                  (r.IsIOS15Version = function (e) {
                    return (
                      a.os == a.OS.IOS &&
                      -1 !==
                        window.navigator.userAgent.search("iPhone OS 15_" + e)
                    );
                  }),
                  t
                );
              })(p)).prototype,
              "isLandscape",
              [y],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return !1;
                },
              }
            )),
            (_ = t(I.prototype, "isPortrait", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (O = t(I.prototype, "isIOS", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !0;
              },
            })),
            (E = t(I.prototype, "isAndroid", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !0;
              },
            })),
            (C = t(I.prototype, "android_Apiid", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (k = I))
          ) || k)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TempoSetting.ts",
  ["cc", "./index4.ts"],
  function (t) {
    "use strict";
    var e, n;
    return {
      setters: [
        function (t) {
          e = t.cclegacy;
        },
        function (t) {
          n = t.Astarte;
        },
      ],
      execute: function () {
        t({
          UpdateTempoSetting: function () {
            t("tempoSetting", n.TempoSetting);
          },
          tempoSetting: void 0,
        }),
          e._RF.push({}, "3ec76bGz5NECbh3RNjc2SdI", "TempoSetting", void 0),
          e._RF.pop();
      },
    };
  }
);

System.register("chunks:///_virtual/TimeBool.ts", ["cc"], function (t) {
  "use strict";
  var i;
  return {
    setters: [
      function (t) {
        i = t.cclegacy;
      },
    ],
    execute: function () {
      var e;
      i._RF.push({}, "34d81gQVlJAaJJHg6IUTjH6", "TimeBool", void 0),
        (function (t) {
          (t[(t.MAX_UINT = 4294967295)] = "MAX_UINT"),
            (t[(t.MAX_UINT64 = 0x10000000000000000)] = "MAX_UINT64"),
            (t[(t.MAX_INT = -1)] = "MAX_INT"),
            (t[(t.MIN_INT = 0)] = "MIN_INT");
        })(e || (e = {}));
      t(
        "default",
        (function () {
          function t() {
            (this.m_duration = e.MAX_UINT),
              (this.m_deadline = e.MAX_UINT64),
              (this.m_useDT = !1),
              (this.m_dt = void 0),
              (this.m_duration = e.MAX_UINT),
              (this.m_deadline = e.MAX_UINT64);
          }
          var i = t.prototype;
          return (
            (i.IsStarted = function () {
              return e.MAX_UINT != this.m_duration;
            }),
            (i.Duration = function () {
              return this.m_duration;
            }),
            (i.TicksUntilTrue = function () {
              if (!this.IsStarted()) return e.MAX_INT;
              var t = new Date().getTime();
              return this.m_deadline <= t ? 0 : this.m_deadline - t;
            }),
            (i.TicksSinceTrue = function () {
              var t = new Date().getTime();
              return this.m_deadline >= t ? 0 : t - this.m_deadline;
            }),
            (i.TicksSinceStart = function () {
              return this.IsStarted()
                ? new Date().getTime() - (this.m_deadline - this.m_duration)
                : 0;
            }),
            (i.Start = function (t) {
              this.m_duration = t;
              var i = new Date().getTime();
              (this.m_deadline = i + t), (this.m_dt = 0);
            }),
            (i.Restart = function () {
              this.m_deadline = new Date().getTime() + this.m_duration;
            }),
            (i.Continue = function () {
              this.m_deadline += this.m_duration;
            }),
            (i.ExpireNow = function () {
              this.m_deadline = new Date().getTime();
            }),
            (i.Clear = function () {
              (this.m_duration = e.MAX_UINT),
                (this.m_deadline = e.MAX_UINT64),
                (this.m_dt = 0);
            }),
            (i.StartWithFirstDue = function (t, i) {
              (this.m_duration = t),
                e.MAX_UINT == i
                  ? (this.m_deadline = e.MAX_UINT64)
                  : (this.m_deadline = new Date().getTime() + i);
            }),
            (i.ToBool = function () {
              return this.m_useDT
                ? this.m_dt >= this.m_duration
                : new Date().getTime() >= this.m_deadline;
            }),
            (i.TakeAndContinue = function () {
              return !!this.ToBool() && (this.Continue(), !0);
            }),
            (i.TakeAndRestart = function () {
              return !!this.ToBool() && (this.Restart(), !0);
            }),
            (i.UseDT = function (t) {
              this.m_useDT = t;
            }),
            (i.Update = function (t) {
              this.m_dt = this.m_dt + t;
            }),
            t
          );
        })()
      );
      i._RF.pop();
    },
  };
});

System.register(
  "chunks:///_virtual/Tools.ts",
  ["cc", "./index4.ts"],
  function (t) {
    "use strict";
    var o, s;
    return {
      setters: [
        function (t) {
          o = t.cclegacy;
        },
        function (t) {
          s = t.Astarte;
        },
      ],
      execute: function () {
        t({
          UpdateTools: function () {
            t("tools", s.Tools);
          },
          tools: void 0,
        }),
          o._RF.push({}, "4c480cU1LpMo4WqCcvtd0ph", "Tools", void 0);
        t("FORMAT_NUMBER_TYPE", {
          NONE_DOT: 0,
          DEFINE_DOT: 1,
          PERMANENT_DOT: 2,
          DEFINE_DOT_NONE_ZERO: 3,
          ALL_DIGITS: 4,
          SPECIFY_DOT: 5,
        });
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TrialManager.ts",
  ["cc", "./index4.ts"],
  function (e) {
    "use strict";
    var n, a;
    return {
      setters: [
        function (e) {
          n = e.cclegacy;
        },
        function (e) {
          a = e.Astarte;
        },
      ],
      execute: function () {
        var t;
        e({
          RefusedReason: void 0,
          UpdateTrial: function () {
            e("trialManager", a.Trial);
          },
          trialManager: void 0,
        }),
          n._RF.push({}, "861e1J/bwRGlI4J13TOOh4y", "TrialManager", void 0),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.Playing = 1)] = "Playing"),
              (e[(e.Item = 2)] = "Item");
          })(t || (t = e("RefusedReason", {}))),
          n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ZipBundleLoader.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, r, n, a;
    return {
      setters: [
        function (e) {
          (t = e.asyncToGenerator), (r = e.regeneratorRuntime);
        },
        function (e) {
          (n = e.cclegacy), (a = e.assetManager);
        },
      ],
      execute: function () {
        n._RF.push({}, "f8b5e4BLTJNX7FPcFOEaBkq", "ZipBundleLoader", void 0);
        var s = new Map(),
          i = new Map(),
          o = new Map(),
          p = (function () {
            function e() {
              this.loadedZipNames = new Array();
            }
            var n = e.prototype;
            return (
              (n.downloadZip = function (e, t) {
                return new Promise(function (r) {
                  var n = e.match(/[^/]+$/);
                  if (null !== n) {
                    var s = "" + n[0] + t + ".zip";
                    a.downloader.downloadFile(
                      e + "/" + s,
                      { xhrResponseType: "arraybuffer" },
                      null,
                      function (e, t) {
                        r(t);
                      }
                    );
                  } else r(null);
                });
              }),
              (n.loadZip = (function () {
                var e = t(
                  r().mark(function e(t, n) {
                    var a, i, o;
                    return r().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (a = n ? "." + n : ""),
                                (e.next = 3),
                                this.downloadZip(t, a)
                              );
                            case 3:
                              null !== (i = e.sent) &&
                                ((o = t.replace(/(.*?)\/assets\//, "assets/")),
                                globalThis.fflate.unzip(
                                  new Uint8Array(i),
                                  function (e, r) {
                                    e
                                      ? console.warn("Unzip failed:", e.message)
                                      : Object.keys(r).forEach(function (e) {
                                          s.set(t + "/" + e, r[e]),
                                            s.set(o + "/" + e, r[e]);
                                        });
                                  }
                                ));
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.init = function () {
                if (globalThis.fflate) {
                  var e = Object.getOwnPropertyDescriptor(
                    XMLHttpRequest.prototype,
                    "response"
                  );
                  Object.defineProperty(XMLHttpRequest.prototype, "response", {
                    get: function () {
                      return this.ZipCacheUrl
                        ? i.get(this.ZipCacheUrl)
                        : e.get.call(this);
                    },
                    set: function (e) {},
                    configurable: !0,
                  });
                  var n = XMLHttpRequest.prototype.open;
                  XMLHttpRequest.prototype.open = function (e, t, r, a, i) {
                    return (
                      s.has(t) && (this.ZipCacheUrl = t),
                      n.apply(this, arguments)
                    );
                  };
                  var a = XMLHttpRequest.prototype.send;
                  XMLHttpRequest.prototype.send = t(
                    r().mark(function e(t) {
                      var n,
                        p,
                        c,
                        u,
                        l,
                        h,
                        f,
                        d,
                        b = arguments;
                      return r().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!this.ZipCacheUrl) {
                                  e.next = 26;
                                  break;
                                }
                                if (i.has(this.ZipCacheUrl)) {
                                  e.next = 24;
                                  break;
                                }
                                (n = this.responseType),
                                  (p = s.get(this.ZipCacheUrl)),
                                  (c = null),
                                  (e.t0 = n),
                                  (e.next =
                                    "arraybuffer" === e.t0
                                      ? 8
                                      : "json" === e.t0
                                      ? 10
                                      : "text" === e.t0
                                      ? 14
                                      : 17);
                                break;
                              case 8:
                                return (
                                  (c = p.buffer ? p.buffer : p),
                                  e.abrupt("break", 18)
                                );
                              case 10:
                                return (
                                  (u = new TextDecoder()),
                                  (l = u.decode(p)),
                                  (c = JSON.parse(l)),
                                  e.abrupt("break", 18)
                                );
                              case 14:
                                return (
                                  (h = new TextDecoder()),
                                  (c = h.decode(p)),
                                  e.abrupt("break", 18)
                                );
                              case 17:
                                console.error("Unknown type in zipCache:", n);
                              case 18:
                                (f = o.get(this.ZipCacheUrl)) &&
                                  (i.delete(this.ZipCacheUrl + "@version" + f),
                                  o.delete(this.ZipCacheUrl)),
                                  (d = performance.now()),
                                  o.set(this.ZipCacheUrl, d),
                                  (this.ZipCacheUrl =
                                    this.ZipCacheUrl + "@version" + d),
                                  i.set(this.ZipCacheUrl, c);
                              case 24:
                                return this.onload(), e.abrupt("return");
                              case 26:
                                return e.abrupt("return", a.apply(this, b));
                              case 27:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                } else console.error("fflate is not found.");
              }),
              e
            );
          })(),
          c = e("ZipBundleLoader", globalThis.__zipBundleLoader);
        globalThis.fflate &&
          !c &&
          ((c = e("ZipBundleLoader", new p())),
          (globalThis.__zipBundleLoader = c),
          c.init()),
          n._RF.pop();
      },
    };
  }
);

(function (r) {
  r("virtual:///prerequisite-imports/main", "chunks:///_virtual/main");
})(function (mid, cid) {
  System.register(mid, [cid], function (_export, _context) {
    return {
      setters: [
        function (_m) {
          var _exportObj = {};

          for (var _key in _m) {
            if (_key !== "default" && _key !== "__esModule")
              _exportObj[_key] = _m[_key];
          }

          _export(_exportObj);
        },
      ],
      execute: function () {},
    };
  });
});
