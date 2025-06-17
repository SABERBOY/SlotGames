System.register(
  "chunks:///_virtual/AvatarSpine.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BaseSpine.ts",
    "./SpineKit.ts",
  ],
  function (t) {
    "use strict";
    var n, e, i, r, a, s, o, c, u, l, p, m;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (r = t.assertThisInitialized),
            (a = t.asyncToGenerator),
            (s = t.regeneratorRuntime);
        },
        function (t) {
          (o = t.cclegacy), (c = t._decorator), (u = t.sp), (l = t.tween);
        },
        function (t) {
          p = t.BaseSpine;
        },
        function (t) {
          m = t.default;
        },
      ],
      execute: function () {
        var h, f, _, d, y, S;
        t("AnimState", void 0),
          o._RF.push({}, "b3d95gsozRH5JPdXuCwTbqL", "AvatarSpine", void 0),
          (function (t) {
            (t.eEnterBG = "BG_Declare_Start"),
              (t.eBGIdle = "BG_Idle"),
              (t.eBGStart = "BG_Start"),
              (t.eBGOolong = "BG_Oolong"),
              (t.eBGSpecialEnd = "BG_Special_End"),
              (t.eBGSpecialLoop = "BG_Special_Loop"),
              (t.eBGSpecialStart = "BG_Special_Start"),
              (t.eBigWinEnd = "BigWin_End"),
              (t.eBigWinLoop = "BigWin_Loop"),
              (t.eBigWinStart = "BigWin_Start"),
              (t.eIdle2 = "Idle2"),
              (t.eLock = "Lock"),
              (t.eSpecialEnd = "MG_Special_End"),
              (t.eSpecialLoop = "MG_Special_Loop"),
              (t.eSpecialStart = "MG_Special_Start"),
              (t.eWin = "Win");
          })(S || (S = t("AnimState", {})));
        var B = [2, 3, 5, 10],
          A = c.ccclass,
          v = c.property;
        t(
          "AvatarSpine",
          ((h = A("AvatarSpine")),
          (f = v({ type: u.Skeleton, tooltip: "Collect Effect FX" })),
          h(
            ((y = n(
              (d = (function (t) {
                function n() {
                  for (
                    var n, e = arguments.length, a = new Array(e), s = 0;
                    s < e;
                    s++
                  )
                    a[s] = arguments[s];
                  return (
                    (n = t.call.apply(t, [this].concat(a)) || this),
                    i(n, "m_CollectEffectFX", y, r(n)),
                    (n.m_gameView = void 0),
                    (n.m_CurrentAnim = void 0),
                    n
                  );
                }
                e(n, t);
                var o = n.prototype;
                return (
                  (o.Init = function (t) {
                    (this.m_gameView = t), this.SetAllMix();
                  }),
                  (o.SetAllMix = function () {
                    this.m_spine.setMix(S.eBGIdle, S.eIdle2, 0.5),
                      this.m_spine.setMix(S.eBigWinEnd, S.eIdle2, 0.5),
                      this.m_spine.setMix(S.eIdle2, S.eBGStart, 0.5);
                  }),
                  (o.PlayIdle = function (t) {
                    void 0 === t && (t = !1),
                      this.m_gameView.IsBonusGame
                        ? this.PlayBGIdle()
                        : this.PlayMGIdle(t);
                  }),
                  (o.PlayMGIdle = (function () {
                    var t = a(
                      s().mark(function t(n) {
                        var e,
                          i,
                          r = this;
                        return s().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    (void 0 === n && (n = !1),
                                    this.m_CurrentAnim != S.eIdle2 || n)
                                  ) {
                                    t.next = 3;
                                    break;
                                  }
                                  return t.abrupt("return");
                                case 3:
                                  (this.m_CurrentAnim = S.eIdle2),
                                    (e = function (t) {
                                      if ("Change" == t) {
                                        var n = Math.floor(
                                          Math.random() * B.length
                                        );
                                        r.SetAvatarSkin(B[n]);
                                      }
                                    }),
                                    (i = this.m_spine.setAnimation(
                                      0,
                                      this.m_CurrentAnim,
                                      !0
                                    )),
                                    this.m_spine.setTrackEventListener(
                                      i,
                                      function (t, n) {
                                        i &&
                                          i.animation.name ==
                                            t.animation.name &&
                                          (null == e || e(n.data.name));
                                      }
                                    );
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
                    return function (n) {
                      return t.apply(this, arguments);
                    };
                  })()),
                  (o.PlayBGIdle = function () {
                    this.m_CurrentAnim != S.eBGIdle &&
                      ((this.m_CurrentAnim = S.eBGIdle),
                      m.PlayAnimation(this.m_spine, S.eBGIdle, !0));
                  }),
                  (o.PlayWin = (function () {
                    var t = a(
                      s().mark(function t() {
                        return s().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (this.m_CurrentAnim = S.eWin),
                                    (t.next = 3),
                                    m.PlayAnimation(this.m_spine, S.eWin, !1)
                                  );
                                case 3:
                                  this.PlayIdle();
                                case 4:
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
                  (o.PlaySpecialStart = (function () {
                    var t = a(
                      s().mark(function t() {
                        return s().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (this.m_CurrentAnim = S.eSpecialStart),
                                    (t.next = 3),
                                    this.PlayAnimation(
                                      this.m_CurrentAnim,
                                      this.m_spine
                                    )
                                  );
                                case 3:
                                  (this.m_gameView.CurAvatarLevel = 0),
                                    this.PlayAnimation(
                                      S.eSpecialLoop,
                                      this.m_spine,
                                      !0
                                    );
                                case 5:
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
                  (o.PlaySpecialEnd = (function () {
                    var t = a(
                      s().mark(function t() {
                        return s().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (this.m_CurrentAnim = S.eSpecialEnd),
                                    (t.next = 3),
                                    this.PlayAnimation(
                                      this.m_CurrentAnim,
                                      this.m_spine
                                    )
                                  );
                                case 3:
                                  this.PlayIdle();
                                case 4:
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
                  (o.PlaySpecialStart_BG = (function () {
                    var t = a(
                      s().mark(function t(n) {
                        return s().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (this.m_CurrentAnim = S.eBGSpecialStart),
                                    this.SetAvatarSkin(n),
                                    (t.next = 4),
                                    this.PlayAnimation(
                                      this.m_CurrentAnim,
                                      this.m_spine,
                                      !1,
                                      0
                                    )
                                  );
                                case 4:
                                  this.PlayAnimation(
                                    S.eBGSpecialLoop,
                                    this.m_spine,
                                    !0
                                  );
                                case 5:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                    return function (n) {
                      return t.apply(this, arguments);
                    };
                  })()),
                  (o.PlaySpecialEnd_BG = (function () {
                    var t = a(
                      s().mark(function t() {
                        return s().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (this.m_CurrentAnim = S.eBGSpecialEnd),
                                    (t.next = 3),
                                    this.PlayAnimation(
                                      this.m_CurrentAnim,
                                      this.m_spine
                                    )
                                  );
                                case 3:
                                  this.PlayMGIdle();
                                case 4:
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
                  (o.PlayBgNoFullPlate = (function () {
                    var t = a(
                      s().mark(function t() {
                        return s().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (this.m_CurrentAnim = S.eBGOolong),
                                    (t.next = 3),
                                    this.PlayAnimation(
                                      this.m_CurrentAnim,
                                      this.m_spine
                                    )
                                  );
                                case 3:
                                  this.PlayMGIdle();
                                case 4:
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
                  (o.ReadyEnterBG = function () {
                    (this.m_CurrentAnim = S.eBGStart),
                      m.PlayAnimation(this.m_spine, S.eBGStart, !0);
                  }),
                  (o.PlayEnterBG = (function () {
                    var t = a(
                      s().mark(function t() {
                        return s().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (this.m_CurrentAnim = S.eEnterBG),
                                    this.SetAvatarSkin(0),
                                    (t.next = 4),
                                    m.PlayAnimation(
                                      this.m_spine,
                                      S.eEnterBG,
                                      !1
                                    )
                                  );
                                case 4:
                                  this.PlayBGIdle();
                                case 5:
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
                  (o.PlayLock = (function () {
                    var t = a(
                      s().mark(function t() {
                        return s().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    this.SetNodeActivity(!0),
                                    (this.m_CurrentAnim = S.eLock),
                                    (t.next = 4),
                                    m.PlayAnimation(this.m_spine, S.eLock, !1)
                                  );
                                case 4:
                                  this.PlayBGIdle();
                                case 5:
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
                  (o.PlayBigWinStart = (function () {
                    var t = a(
                      s().mark(function t() {
                        return s().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (this.m_CurrentAnim = S.eBigWinStart),
                                    (t.next = 3),
                                    m.PlayAnimation(
                                      this.m_spine,
                                      S.eBigWinStart,
                                      !1
                                    )
                                  );
                                case 3:
                                  this.PlayBigWinLoop();
                                case 4:
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
                  (o.PlayBigWinLoop = function () {
                    (this.m_CurrentAnim = S.eBigWinLoop),
                      m.PlayAnimation(this.m_spine, S.eBigWinLoop, !0);
                  }),
                  (o.PlayBigWinEnd = (function () {
                    var t = a(
                      s().mark(function t() {
                        return s().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  (this.m_CurrentAnim = S.eBigWinEnd),
                                    m.PlayAnimation(
                                      this.m_spine,
                                      S.eBigWinEnd,
                                      !1
                                    ),
                                    this.PlayMGIdle();
                                case 3:
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
                  (o.SetAvatarSkin = function (t) {
                    var n = this,
                      e = "Track_X" + t;
                    l(this.m_spine.node)
                      .delay(0.016)
                      .call(function () {
                        n.m_spine.setAnimation(2, e, !0);
                      })
                      .start();
                  }),
                  n
                );
              })(p)).prototype,
              "m_CollectEffectFX",
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
            (_ = d))
          ) || _)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/AwardState.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./index.ts",
    "./index2.ts",
    "./Game_Define.ts",
    "./LicenseSetting.ts",
    "./StateManager.ts",
    "./SoundAudioManager.ts",
    "./Tools.ts",
    "./NewBottomBarManager.ts",
  ],
  function (e) {
    "use strict";
    var t, i, a, n, s, r, o, l, m, u, c;
    return {
      setters: [
        function (e) {
          (t = e.inheritsLoose),
            (i = e.asyncToGenerator),
            (a = e.regeneratorRuntime);
        },
        function (e) {
          n = e.cclegacy;
        },
        null,
        null,
        function (e) {
          s = e.default;
        },
        function (e) {
          r = e.SwitchOffKeyDefine;
        },
        function (e) {
          (o = e.stateManager), (l = e.BaseState);
        },
        function (e) {
          m = e.soundAudioManager;
        },
        function (e) {
          u = e.tools;
        },
        function (e) {
          c = e.newBottombarManager;
        },
      ],
      execute: function () {
        n._RF.push({}, "59f33aXHj1KwoEPi5S0MCNp", "AwardState", void 0);
        e(
          "AwardState",
          (function (e) {
            function n(t) {
              var i;
              return (
                ((i = e.call(this) || this).m_gameView = null),
                (i.m_awardEnd = !1),
                (i.m_hasWildMult = !1),
                (i.m_gameView = t),
                i
              );
            }
            t(n, e);
            var l = n.prototype;
            return (
              (l.OnEnter = (function () {
                var e = i(
                  a().mark(function e() {
                    var t, i, n, s, r, o, l, m, d, _, h;
                    return a().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (t = this.m_gameView.GetMgBgDataIdx()),
                                (i = this.m_gameView.SpinAckQue.GameWin[t]),
                                (n = this.m_gameView.SpinAckQue.WildWin[t]),
                                (s = c.GetNowBetValue()),
                                (o = (r = i - n) / s),
                                (l = this.m_gameView.SpinAckQue),
                                (m = this.m_gameView.SpinAckQue.BigMult[t]),
                                (d = this.m_gameView.SpinAckQue.WildOdd[t].WO),
                                (_ =
                                  this.m_gameView.SpinAckQue.WildOddDone[t].WO),
                                (this.m_gameView.IsSpined = !1),
                                -1 !== this.m_gameView.SlotReels.BgNearWinPos &&
                                  (this.m_gameView.BgNearWinSpineManager.HideNearWin(
                                    this.m_gameView.SlotReels.BgNearWinPos
                                  ),
                                  (this.m_gameView.SlotReels.BgNearWinPos =
                                    -1)),
                                this.m_gameView.IsBonusGame ||
                                  this.m_gameView.EffectPlate.Reset(),
                                (h = 0);
                            case 14:
                              if (!(h < d.length)) {
                                e.next = 21;
                                break;
                              }
                              if (d[h] == _[h]) {
                                e.next = 18;
                                break;
                              }
                              return (
                                (this.m_hasWildMult = !0), e.abrupt("break", 21)
                              );
                            case 18:
                              h++, (e.next = 14);
                              break;
                            case 21:
                              if (!(l.AwardDataVec[t].ADV.length > 0)) {
                                e.next = 36;
                                break;
                              }
                              if (!(n <= 0)) {
                                e.next = 32;
                                break;
                              }
                              return (
                                this.PlayLineWinSound(o, t),
                                this.m_gameView.IsBonusGame &&
                                  this.m_gameView.AvatarSpine.PlayBgNoFullPlate(),
                                this.m_gameView.AvatarSpine.PlayWin(),
                                (r = u.strip(u.divide(r, m))),
                                this.m_gameView.WinBoardMgr.ShowScore(r, 0),
                                (e.next = 30),
                                this.m_gameView.EffectPlate.ShowSymbolEffect(
                                  l.AwardDataVec[t].ADV
                                )
                              );
                            case 30:
                              e.next = 33;
                              break;
                            case 32:
                              this.m_gameView.EffectPlate.ShowSymbolEffect(
                                l.AwardDataVec[t].ADV,
                                0
                              );
                            case 33:
                              (this.m_awardEnd = !0), (e.next = 37);
                              break;
                            case 36:
                              this.m_awardEnd = !0;
                            case 37:
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
              (l.OnProcess = function () {
                this.m_awardEnd &&
                  ((this.m_awardEnd = !1),
                  this.m_hasWildMult
                    ? o.NextState(s.GAMEVIEW_STATE.WILD_MULT)
                    : o.NextState(s.GAMEVIEW_STATE.EFFECTSTART));
              }),
              (l.PlayLineWinSound = function (e, t) {
                this.m_gameView.SpinAckQue.WildWin[t] > 0
                  ? m.Play(s.AudioClips.Link)
                  : e < s.WIN_ODDS[0]
                  ? (e > 1 || !u.CheckSwitchOff(r.NoSoundUnder1)) &&
                    m.Play(s.AudioClips.Small_Win_01)
                  : e < s.WIN_ODDS[1]
                  ? m.Play(s.AudioClips.Small_Win_02)
                  : e < s.WIN_ODDS[2]
                  ? m.Play(s.AudioClips.Small_Win_03)
                  : m.Play(s.AudioClips.Small_Win_04);
              }),
              (l.OnLeave = function () {}),
              n
            );
          })(l)
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BackGroundView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    "use strict";
    var i, e, n, o, a, r, s, c, _, m, l, u, G;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (o = t.assertThisInitialized),
            (a = t.createClass);
        },
        function (t) {
          (r = t.cclegacy),
            (s = t._decorator),
            (c = t.Node),
            (_ = t.log),
            (m = t.UIOpacity),
            (l = t.error),
            (u = t.tween),
            (G = t.Component);
        },
      ],
      execute: function () {
        var h, p, E, L, f, b, v, d, g, y, S;
        r._RF.push({}, "9f952uBkv9GpK8em+lo/+WM", "BackGroundView", void 0);
        var I = s.ccclass,
          T = s.property;
        t(
          "BackGroundView",
          ((h = I("BackGroundView")),
          (p = T({ type: c, tooltip: "BG_L" })),
          (E = T({ type: c, tooltip: "BG_S" })),
          (L = T({ type: c, tooltip: "MG_L" })),
          (f = T({ type: c, tooltip: "MG_S" })),
          h(
            ((d = i(
              (v = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, a = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    (i = t.call.apply(t, [this].concat(a)) || this),
                    n(i, "m_bGL", d, o(i)),
                    n(i, "m_bGS", g, o(i)),
                    n(i, "m_mGL", y, o(i)),
                    n(i, "m_mGS", S, o(i)),
                    (i.m_isLandscape = void 0),
                    (i.m_isOolong = void 0),
                    (i.ENTER_DELAY_TIME = 2.4),
                    (i.EXIT_DELAY_TIME = 0),
                    (i.FADE_TIME_LONG = 1),
                    (i.FADE_TIME_SHORT = 0.3),
                    (i.m_gameView = void 0),
                    i
                  );
                }
                e(i, t);
                var r = i.prototype;
                return (
                  (r.Init = function (t) {
                    this.m_gameView = t;
                  }),
                  (r.Rotate = function (t) {
                    this.m_isLandscape = t;
                  }),
                  (r.EnterBG = function (t) {
                    var i = this;
                    if (
                      (void 0 === t && (t = null), !this.m_gameView.IsBonusGame)
                    ) {
                      this.m_gameView.IsLandscape
                        ? ((this.m_bGL.active = !0), (this.m_bGS.active = !1))
                        : ((this.m_bGL.active = !1), (this.m_bGS.active = !0)),
                        this.DoFade(
                          this.m_bGL,
                          255,
                          this.ENTER_DELAY_TIME,
                          this.FADE_TIME_LONG,
                          function () {
                            t &&
                              (t(),
                              (i.m_mGL.active = !1),
                              (i.m_mGS.active = !1));
                          }
                        ),
                        this.DoFade(
                          this.m_bGS,
                          255,
                          this.ENTER_DELAY_TIME,
                          this.FADE_TIME_LONG,
                          null
                        );
                    }
                  }),
                  (r.EnterMG = function (t) {
                    var i = this;
                    void 0 === t && (t = null);
                    this.m_gameView.IsLandscape
                      ? ((this.m_mGL.active = !0), (this.m_mGS.active = !1))
                      : ((this.m_mGL.active = !1), (this.m_mGS.active = !0));
                    var e = this.m_isOolong
                      ? this.FADE_TIME_SHORT
                      : this.FADE_TIME_LONG;
                    this.DoFade(
                      this.m_bGL,
                      0,
                      this.EXIT_DELAY_TIME,
                      e,
                      function () {
                        (i.m_gameView.SetRotationLock = !1),
                          t &&
                            (t(), (i.m_bGL.active = !1), (i.m_bGS.active = !1));
                      }
                    ),
                      this.DoFade(this.m_bGS, 0, this.EXIT_DELAY_TIME, e, null);
                  }),
                  (r.SetIsOolong = function (t) {
                    this.m_isOolong = t;
                  }),
                  (r.DoFade = function (t, i, e, n, o) {
                    void 0 === o && (o = null),
                      _(
                        "Starting fade on " +
                          t.name +
                          " to " +
                          i +
                          " over " +
                          n +
                          "s after " +
                          e +
                          "s delay."
                      );
                    var a = t.getComponent(m);
                    a
                      ? u(a)
                          .delay(e)
                          .to(n, { opacity: i })
                          .call(function () {
                            _("Fade complete, executing callback."), o && o();
                          })
                          .start()
                      : l("UIOpacity component not found on target object.");
                  }),
                  a(i, [
                    {
                      key: "BGL",
                      get: function () {
                        return this.m_bGL;
                      },
                    },
                    {
                      key: "BGS",
                      get: function () {
                        return this.m_bGS;
                      },
                    },
                    {
                      key: "MGL",
                      get: function () {
                        return this.m_mGL;
                      },
                    },
                    {
                      key: "MGS",
                      get: function () {
                        return this.m_mGS;
                      },
                    },
                  ]),
                  i
                );
              })(G)).prototype,
              "m_bGL",
              [p],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (g = i(v.prototype, "m_bGS", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (y = i(v.prototype, "m_mGL", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = i(v.prototype, "m_mGS", [f], {
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
  "chunks:///_virtual/BaseSpine.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SpineKit.ts"],
  function (e) {
    "use strict";
    var i, t, n, o, r, s, a, c, p;
    return {
      setters: [
        function (e) {
          (i = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (r = e.cclegacy), (s = e._decorator), (a = e.sp), (c = e.Component);
        },
        function (e) {
          p = e.default;
        },
      ],
      execute: function () {
        var u, l, f, S, v;
        r._RF.push({}, "011ad9/AYVJy4oLmnc+2X6v", "BaseSpine", void 0);
        var y = s.ccclass,
          d = s.property;
        e(
          "BaseSpine",
          ((u = y("BaseSpine")),
          (l = d({ type: a.Skeleton, tooltip: "Spine" })),
          u(
            ((v = i(
              (S = (function (e) {
                function i() {
                  for (
                    var i, t = arguments.length, r = new Array(t), s = 0;
                    s < t;
                    s++
                  )
                    r[s] = arguments[s];
                  return (
                    (i = e.call.apply(e, [this].concat(r)) || this),
                    n(i, "m_spine", v, o(i)),
                    i
                  );
                }
                t(i, e);
                var r = i.prototype;
                return (
                  (r.Stop = function () {
                    this.m_spine.clearTrack(0);
                  }),
                  (r.SetSkin = function (e, i) {
                    void 0 === i && (i = this.m_spine), i.setSkin(e);
                  }),
                  (r.SetNodeActivity = function (e) {
                    this.node.active = e;
                  }),
                  (r.PlayAnimation = function (e, i, t, n, o) {
                    return (
                      void 0 === i && (i = this.m_spine),
                      void 0 === t && (t = !1),
                      void 0 === n && (n = 0),
                      p.PlayAnimation(i, e, t, n, o)
                    );
                  }),
                  (r.StopSpine = function () {
                    this.m_spine.clearTrack(0);
                  }),
                  i
                );
              })(c)).prototype,
              "m_spine",
              [l],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (f = S))
          ) || f)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BgNearWinSpineManager.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./index3.ts",
    "./index2.ts",
    "./Game_Define.ts",
    "./SoundAudioManager.ts",
    "./NearWinEffectComponent.ts",
  ],
  function (e) {
    "use strict";
    var n, i, t, r, a, o, s, c, u, p, l;
    return {
      setters: [
        function (e) {
          (n = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (t = e.initializerDefineProperty),
            (r = e.assertThisInitialized);
        },
        function (e) {
          (a = e.cclegacy), (o = e._decorator), (s = e.Node), (c = e.Component);
        },
        null,
        null,
        function (e) {
          u = e.default;
        },
        function (e) {
          p = e.soundAudioManager;
        },
        function (e) {
          l = e.NearWinEffectComponent;
        },
      ],
      execute: function () {
        var d, f, g, N, W;
        a._RF.push(
          {},
          "31efdOSA65F5qGtnDJZniKk",
          "BgNearWinSpineManager",
          void 0
        );
        var m = o.ccclass,
          h = o.property;
        e(
          "BgNearWinSpineManager",
          ((d = m("BgNearWinSpineManager")),
          (f = h({ type: s })),
          d(
            ((W = n(
              (N = (function (e) {
                function n() {
                  for (
                    var n, i = arguments.length, a = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    a[o] = arguments[o];
                  return (
                    (n = e.call.apply(e, [this].concat(a)) || this),
                    t(n, "m_nearWinNodes", W, r(n)),
                    n
                  );
                }
                i(n, e);
                var a = n.prototype;
                return (
                  (a.ShowNearWin = function (e) {
                    p.Play(u.AudioClips.Near_Win),
                      (this.m_nearWinNodes[e].active = !0),
                      this.m_nearWinNodes[e].getComponent(l).FadeIn();
                  }),
                  (a.HideNearWin = function (e) {
                    this.m_nearWinNodes[e].active = !1;
                  }),
                  n
                );
              })(c)).prototype,
              "m_nearWinNodes",
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
            (g = N))
          ) || g)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BigBottomSpine.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseSpine.ts"],
  function (t) {
    "use strict";
    var e, n, i, r, o, c;
    return {
      setters: [
        function (t) {
          (e = t.inheritsLoose),
            (n = t.asyncToGenerator),
            (i = t.regeneratorRuntime);
        },
        function (t) {
          (r = t.cclegacy), (o = t._decorator);
        },
        function (t) {
          c = t.BaseSpine;
        },
      ],
      execute: function () {
        var s;
        r._RF.push({}, "d11a2PM//BNPYARd+j5k4KB", "BigBottomSpine", void 0);
        var a = o.ccclass;
        t(
          "BigBottomSpine",
          a("BigBottomSpine")(
            (s = (function (t) {
              function r() {
                return t.apply(this, arguments) || this;
              }
              return (
                e(r, t),
                (r.prototype.PlayBigEffect = (function () {
                  var t = n(
                    i().mark(function t() {
                      return i().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  this.SetNodeActivity(!0),
                                  (t.next = 3),
                                  this.PlayAnimation("Start")
                                );
                              case 3:
                                this.SetNodeActivity(!1);
                              case 4:
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
                r
              );
            })(c))
          ) || s
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BigTopSpine.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseSpine.ts"],
  function (t) {
    "use strict";
    var e, n, i, r, o, c;
    return {
      setters: [
        function (t) {
          (e = t.inheritsLoose),
            (n = t.asyncToGenerator),
            (i = t.regeneratorRuntime);
        },
        function (t) {
          (r = t.cclegacy), (o = t._decorator);
        },
        function (t) {
          c = t.BaseSpine;
        },
      ],
      execute: function () {
        var s;
        r._RF.push({}, "ff4f7Fb33hHd52L9sc3C86y", "BigTopSpine", void 0);
        var u = o.ccclass;
        t(
          "BigTopSpine",
          u("BigTopSpine")(
            (s = (function (t) {
              function r() {
                return t.apply(this, arguments) || this;
              }
              return (
                e(r, t),
                (r.prototype.PlayBigEffect = (function () {
                  var t = n(
                    i().mark(function t() {
                      return i().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  this.SetNodeActivity(!0),
                                  (t.next = 3),
                                  this.PlayAnimation("Start")
                                );
                              case 3:
                                this.SetNodeActivity(!1);
                              case 4:
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
                r
              );
            })(c))
          ) || s
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BlowFlyEffect.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./index2.ts",
    "./Game_Define.ts",
    "./Tools.ts",
    "./Define.ts",
    "./SoundAudioManager.ts",
  ],
  function (e) {
    "use strict";
    var t, n, r, i, o, a, l, s, c, u, f, m, y;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (r = e.initializerDefineProperty),
            (i = e.assertThisInitialized),
            (o = e.asyncToGenerator),
            (a = e.regeneratorRuntime);
        },
        function (e) {
          (l = e.cclegacy), (s = e._decorator), (c = e.Component);
        },
        null,
        function (e) {
          u = e.default;
        },
        function (e) {
          f = e.tools;
        },
        function (e) {
          m = e.Define;
        },
        function (e) {
          y = e.soundAudioManager;
        },
      ],
      execute: function () {
        var h, d, _, p, g;
        l._RF.push({}, "0cad2iaXgpLyYSRyk0eKwA7", "BlowFlyEffect", void 0);
        var w = s.ccclass,
          S = s.property;
        e(
          "BlowFlyEffect",
          ((h = w("BlowFlyEffect")),
          (d = S({ type: c })),
          h(
            ((g = t(
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
                    r(t, "m_FlyEffectPos", g, i(t)),
                    (t.m_gameView = void 0),
                    (t.m_CreateEffectNodeFunc = void 0),
                    t
                  );
                }
                n(t, e);
                var l = t.prototype;
                return (
                  (l.init = function (e, t) {
                    (this.m_gameView = e), (this.m_CreateEffectNodeFunc = t);
                  }),
                  (l.PlayBlowAnim = (function () {
                    var e = o(
                      a().mark(function e(t) {
                        var n,
                          r,
                          i,
                          l,
                          s,
                          c,
                          h,
                          d = this;
                        return a().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (n = this.GetNeedBlowWildArray()),
                                    (r = []),
                                    (i = !1),
                                    (l = a().mark(function e(l) {
                                      var s, c, f;
                                      return a().wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              for (
                                                s = [],
                                                  c = function (e) {
                                                    if (n[l][e]) {
                                                      d.m_gameView.SlotReels.Columns[
                                                        l
                                                      ].HideSymbolByRow(e);
                                                      var r =
                                                          u.SYMBOL_SPINE_SIZE,
                                                        c =
                                                          d.m_CreateEffectNodeFunc(
                                                            l,
                                                            e,
                                                            u.LAYERS.NORMAL,
                                                            u.Symbol.WILD,
                                                            r
                                                          ),
                                                        f = d.m_gameView
                                                          .IsLandscape
                                                          ? d.m_FlyEffectPos[0]
                                                          : d.m_FlyEffectPos[1],
                                                        m = d.GetFlySymbol(
                                                          l,
                                                          e
                                                        );
                                                      m.SetNum(c.Prize, t),
                                                        m.ChangeNumParent(!0),
                                                        s.push(
                                                          c.ShowWildAddPoint()
                                                        );
                                                      var y = (function () {
                                                        var t = o(
                                                          a().mark(
                                                            function t() {
                                                              return a().wrap(
                                                                function (t) {
                                                                  for (;;)
                                                                    switch (
                                                                      (t.prev =
                                                                        t.next)
                                                                    ) {
                                                                      case 0:
                                                                        d.m_gameView.SlotReels.Columns[
                                                                          l
                                                                        ].ShowSymbolByRow(
                                                                          e
                                                                        );
                                                                      case 1:
                                                                      case "end":
                                                                        return t.stop();
                                                                    }
                                                                },
                                                                t
                                                              );
                                                            }
                                                          )
                                                        );
                                                        return function () {
                                                          return t.apply(
                                                            this,
                                                            arguments
                                                          );
                                                        };
                                                      })();
                                                      s.push(
                                                        m.PlayFlyAnim(
                                                          f.node,
                                                          y,
                                                          u.ACTION_DELAY_TIME
                                                            .WILD_FLY_EFFECT_START,
                                                          u.ACTION_DELAY_TIME
                                                            .WILD_FLY_EFFECT_END
                                                        )
                                                      ),
                                                        (i = !0);
                                                    }
                                                  },
                                                  f = n[l].length - 1;
                                                f >= 0;
                                                f--
                                              )
                                                c(f);
                                              if (
                                                (r.push(Promise.all(s)),
                                                !(l < u.COL_LENGTH - 1))
                                              ) {
                                                e.next = 7;
                                                break;
                                              }
                                              return (
                                                (e.next = 7), m.Wait(d, 0.1)
                                              );
                                            case 7:
                                            case "end":
                                              return e.stop();
                                          }
                                      }, e);
                                    })),
                                    (s = 0);
                                case 5:
                                  if (!(s < n.length)) {
                                    e.next = 10;
                                    break;
                                  }
                                  return e.delegateYield(l(s), "t0", 7);
                                case 7:
                                  ++s, (e.next = 5);
                                  break;
                                case 10:
                                  return (
                                    i && y.Play(u.AudioClips.Wild_Bonus),
                                    (e.next = 13),
                                    Promise.all(r)
                                  );
                                case 13:
                                  if (!i) {
                                    e.next = 18;
                                    break;
                                  }
                                  return (
                                    (c = this.m_gameView.GetMgBgDataIdx()),
                                    (h = f.divide(
                                      this.m_gameView.SpinAckQue.WildWin[c],
                                      this.m_gameView.SpinAckQue.BigMult[c]
                                    )),
                                    (e.next = 18),
                                    this.m_gameView.WinBoardMgr.ShowScore(
                                      h,
                                      0.5
                                    )
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (l.GetNeedBlowWildArray = function () {
                    var e = Array.from({ length: u.COL_LENGTH }, function () {
                        return new Array(u.ROW_LENGTH).fill(!1);
                      }),
                      t = this.m_gameView.GetMgBgDataIdx(),
                      n = this.m_gameView.SpinAckQue.AwardDataVec[t].ADV;
                    if (null == n || 0 == n.length) return e;
                    for (var r = u.SYMBOL_LINE_VEC, i = 0; i < n.length; i++)
                      for (var o = 0; o < r[n[i].Line].length; o++) {
                        var a = r[n[i].Line][o].x,
                          l = r[n[i].Line][o].y,
                          s = this.CheckIsWild(a, l);
                        e[a][l] = s;
                      }
                    return e;
                  }),
                  (l.CheckIsWild = function (e, t) {
                    return (
                      this.m_gameView.SlotReels.PlateInfo[e].Row[t] ===
                      u.Symbol.WILD
                    );
                  }),
                  (l.GetFlySymbol = function (e, t) {
                    return this.m_gameView.SlotReels.Columns[e].GetSymbol(t);
                  }),
                  (l.ResetSymbolNum = function (e) {
                    for (var t = 0; t < e.length; ++t)
                      for (var n = 0; n < e[t].length; ++n) {
                        if (e[t][n]) this.GetFlySymbol(t, n).Reset();
                      }
                  }),
                  (l.RecoverFlyedNumber = function () {
                    for (
                      var e = this.GetNeedBlowWildArray(), t = 0;
                      t < e.length;
                      ++t
                    )
                      for (var n = e[t].length - 1; n >= 0; n--) {
                        if (e[t][n]) this.GetFlySymbol(t, n).SetNumActive(!0);
                      }
                  }),
                  t
                );
              })(c)).prototype,
              "m_FlyEffectPos",
              [d],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (_ = p))
          ) || _)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/CheckBgState.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./index.ts",
    "./index2.ts",
    "./Game_Define.ts",
    "./NewBottomBarManager.ts",
    "./StateManager.ts",
    "./Define.ts",
  ],
  function (e) {
    "use strict";
    var t, n, a, i, r, s, o, u, c, m;
    return {
      setters: [
        function (e) {
          (t = e.inheritsLoose),
            (n = e.asyncToGenerator),
            (a = e.regeneratorRuntime);
        },
        function (e) {
          i = e.cclegacy;
        },
        null,
        null,
        function (e) {
          r = e.default;
        },
        function (e) {
          s = e.newBottombarManager;
        },
        function (e) {
          (o = e.stateManager), (u = e.BaseState);
        },
        function (e) {
          (c = e.CommonState), (m = e.Define);
        },
      ],
      execute: function () {
        i._RF.push({}, "bc7e40DAHpKP7Ev+veRimY6", "CheckBgState", void 0);
        e(
          "CheckBgState",
          (function (e) {
            function i(t) {
              var n;
              return (
                ((n = e.call(this) || this).m_gameView = null),
                (n.m_showEnd = !1),
                (n.m_gameView = t),
                n
              );
            }
            t(i, e);
            var u = i.prototype;
            return (
              (u.OnEnter = (function () {
                var e = n(
                  a().mark(function e() {
                    var t;
                    return a().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                !(
                                  0 ==
                                    (t = this.m_gameView.SpinAckQue).TotalWin ||
                                  t.GetBonus > 0
                                ) ||
                                !this.m_gameView.Pot.PlayedNearwin
                              ) {
                                e.next = 4;
                                break;
                              }
                              return (
                                (e.next = 4),
                                m.Wait(
                                  this.m_gameView,
                                  r.ACTION_DELAY_TIME.NEAR_WIN_TIME
                                )
                              );
                            case 4:
                              if (
                                (this.m_gameView.Pot.EndNearWin(),
                                !(t.GetBonus > 0))
                              ) {
                                e.next = 14;
                                break;
                              }
                              return (
                                (e.next = 8), this.m_gameView.Pot.ChangeLevel(2)
                              );
                            case 8:
                              return (
                                this.m_gameView.AvatarSpine.ReadyEnterBG(),
                                (e.next = 11),
                                this.m_gameView.Pot.PlayWin()
                              );
                            case 11:
                              s.IsAutoSpin &&
                                this.m_gameView.AutoplayInfos.isCheckFree &&
                                s.ShowAutoPlayState(!1),
                                (e.next = 17);
                              break;
                            case 14:
                              if (!this.m_gameView.NeedUpgrade) {
                                e.next = 17;
                                break;
                              }
                              return (
                                (e.next = 17),
                                this.m_gameView.Pot.ChangeLevel(1)
                              );
                            case 17:
                              (this.m_gameView.NeedUpgrade = !1),
                                (this.m_showEnd = !0);
                            case 19:
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
              (u.OnProcess = function () {
                this.m_showEnd &&
                  ((this.m_showEnd = !1),
                  this.m_gameView.SpinAckQue.GetBonus > 0
                    ? (s.SetEnterFree(),
                      (this.m_gameView.IsEnterBg = !0),
                      o.NextState(c.SPIN))
                    : o.NextState(r.GAMEVIEW_STATE.ROUND_SHOW_END));
              }),
              (u.OnLeave = function () {}),
              i
            );
          })(u)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/CheckState.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./index2.ts",
    "./Game_Define.ts",
    "./StateManager.ts",
  ],
  function (t) {
    "use strict";
    var e, n, c, i, a;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          n = t.cclegacy;
        },
        null,
        function (t) {
          c = t.default;
        },
        function (t) {
          (i = t.stateManager), (a = t.BaseState);
        },
      ],
      execute: function () {
        n._RF.push({}, "3ccb6iijhBHAaB0v8CErxTz", "CheckState", void 0);
        t(
          "CheckState",
          (function (t) {
            function n(e) {
              var n;
              return (
                ((n = t.call(this) || this).m_gameView = null),
                (n.m_gameView = e),
                n
              );
            }
            e(n, t);
            var a = n.prototype;
            return (
              (a.OnEnter = function () {
                i.NextState(c.GAMEVIEW_STATE.ROUND_END);
              }),
              (a.OnProcess = function () {}),
              (a.OnLeave = function () {}),
              n
            );
          })(a)
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/CollectFlyEffect.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./index2.ts",
    "./Game_Define.ts",
    "./Define.ts",
    "./CommonEffect2.ts",
    "./NodePool.ts",
    "./SoundAudioManager.ts",
    "./NewExtraManager.ts",
  ],
  function (t) {
    "use strict";
    var e, n, o, i, r, a, s, c, l, u, f, p, h, m, _, d, y, g, E, w, F;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (o = t.initializerDefineProperty),
            (i = t.assertThisInitialized),
            (r = t.asyncToGenerator),
            (a = t.regeneratorRuntime);
        },
        function (t) {
          (s = t.cclegacy),
            (c = t.v3),
            (l = t._decorator),
            (u = t.Node),
            (f = t.Component),
            (p = t.UITransform),
            (h = t.Animation),
            (m = t.Vec3),
            (_ = t.tween);
        },
        null,
        function (t) {
          d = t.default;
        },
        function (t) {
          y = t.Define;
        },
        function (t) {
          g = t.CommonEffect;
        },
        function (t) {
          E = t.default;
        },
        function (t) {
          w = t.soundAudioManager;
        },
        function (t) {
          F = t.newExtraManager;
        },
      ],
      execute: function () {
        var C, L, x, I, v, T, P;
        s._RF.push({}, "d5f61L4QUhLaI+gtxtOyqJZ", "CollectFlyEffect", void 0);
        var A = [
            [c(-200, 163.3), c(-200, 0), c(-200, -163.3)],
            [c(0, 163.3), c(0, 0), c(0, -163.3)],
            [c(200, 163.3), c(200, 0), c(200, -163.3)],
          ],
          D = l.ccclass,
          N = l.property;
        t(
          "CollectFlyEffect",
          ((C = D("CollectFlyEffect")),
          (L = N({ type: u, tooltip: "飛行根節點" })),
          (x = N({ type: f })),
          C(
            ((T = e(
              (v = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, r = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(r)) || this),
                    o(e, "m_flyEffectRoot", T, i(e)),
                    o(e, "m_FlyEndPos", P, i(e)),
                    (e.m_gameView = null),
                    e
                  );
                }
                n(e, t);
                var s = e.prototype;
                return (
                  (s.init = function (t) {
                    this.m_gameView = t;
                  }),
                  (s.ShowWildStop = (function () {
                    var t = r(
                      a().mark(function t(e) {
                        var n,
                          o,
                          i,
                          s,
                          l,
                          u,
                          p,
                          m,
                          _,
                          g,
                          F = this;
                        return a().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  for (
                                    n = this.m_gameView.SlotReels.PlateInfo,
                                      o = [],
                                      i = [],
                                      s = 0;
                                    s < n[e].Row.length;
                                    ++s
                                  )
                                    (n[e].Row[s] !== d.Symbol.WILD &&
                                      n[e].Row[s] !== d.Symbol.WILD_M) ||
                                      (this.CheckUpgrade(),
                                      (l = this.m_gameView.IsLandscape
                                        ? this.m_FlyEndPos[0]
                                        : this.m_FlyEndPos[1]),
                                      (u = this.GetWorldLocation(l)),
                                      (p = E.getInstance().GetFlyEffect()),
                                      this.m_flyEffectRoot.addChild(p),
                                      p.setPosition(A[e][s]),
                                      o.push(p),
                                      (m = this.GetWorldLocation(
                                        p
                                          .getChildByName("FX_MotionStreak")
                                          .getComponent(f)
                                      )),
                                      (_ = (function () {
                                        var t = r(
                                          a().mark(function t() {
                                            return a().wrap(function (t) {
                                              for (;;)
                                                switch ((t.prev = t.next)) {
                                                  case 0:
                                                    return (
                                                      (t.next = 2),
                                                      y.Wait(F, 0.35)
                                                    );
                                                  case 2:
                                                    F.m_gameView.Pot.PlayCollect();
                                                  case 3:
                                                  case "end":
                                                    return t.stop();
                                                }
                                            }, t);
                                          })
                                        );
                                        return function () {
                                          return t.apply(this, arguments);
                                        };
                                      })()),
                                      (p.active = !0),
                                      p
                                        .getChildByName("Node_Glow")
                                        .getComponent(h)
                                        .play("WildGlow"),
                                      i.push(
                                        this.ShowQuadraticBez(
                                          p.getChildByName("FX_MotionStreak"),
                                          m,
                                          u,
                                          _,
                                          d.ACTION_DELAY_TIME
                                            .WILD_FLY_EFFECT_START,
                                          d.ACTION_DELAY_TIME
                                            .WILD_FLY_EFFECT_END
                                        )
                                      ),
                                      i.push(
                                        p.getComponent(h).play("FX_Fly_N")
                                      ));
                                  return (
                                    w.Play(d.AudioClips.Collect_Fly),
                                    (t.next = 7),
                                    Promise.all(i)
                                  );
                                case 7:
                                  for (g = 0; g < o.length; ++g)
                                    (o[g].active = !1),
                                      o[g]
                                        .getChildByName("FX_MotionStreak")
                                        .setPosition(c(0, 0, 0)),
                                      E.getInstance().ReturnFlyEffect(o[g]),
                                      o[g].removeFromParent();
                                  o = [];
                                case 9:
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
                  (s.ShowAllWildStop = (function () {
                    var t = r(
                      a().mark(function t() {
                        var e,
                          n,
                          o,
                          i,
                          s,
                          l,
                          u,
                          p,
                          m,
                          _,
                          g,
                          F = this;
                        return a().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  for (
                                    e = this.m_gameView.SlotReels.PlateInfo,
                                      n = [],
                                      o = [],
                                      i = 0;
                                    i < d.COL_LENGTH;
                                    ++i
                                  )
                                    for (s = 0; s < e[i].Row.length; ++s)
                                      (e[i].Row[s] !== d.Symbol.WILD &&
                                        e[i].Row[s] !== d.Symbol.WILD_M) ||
                                        (this.CheckUpgrade(),
                                        (l = this.m_gameView.IsLandscape
                                          ? this.m_FlyEndPos[0]
                                          : this.m_FlyEndPos[1]),
                                        (u = this.GetWorldLocation(l)),
                                        (p = E.getInstance().GetFlyEffect()),
                                        this.m_flyEffectRoot.addChild(p),
                                        p.setPosition(A[i][s]),
                                        n.push(p),
                                        (m = this.GetWorldLocation(
                                          p
                                            .getChildByName("FX_MotionStreak")
                                            .getComponent(f)
                                        )),
                                        (_ = (function () {
                                          var t = r(
                                            a().mark(function t() {
                                              return a().wrap(function (t) {
                                                for (;;)
                                                  switch ((t.prev = t.next)) {
                                                    case 0:
                                                      return (
                                                        (t.next = 2),
                                                        y.Wait(F, 0.35)
                                                      );
                                                    case 2:
                                                      F.m_gameView.Pot.PlayCollect();
                                                    case 3:
                                                    case "end":
                                                      return t.stop();
                                                  }
                                              }, t);
                                            })
                                          );
                                          return function () {
                                            return t.apply(this, arguments);
                                          };
                                        })()),
                                        (p.active = !0),
                                        p
                                          .getChildByName("Node_Glow")
                                          .getComponent(h)
                                          .play("WildGlow"),
                                        o.push(
                                          this.ShowQuadraticBez(
                                            p.getChildByName("FX_MotionStreak"),
                                            m,
                                            u,
                                            _,
                                            d.ACTION_DELAY_TIME
                                              .WILD_FLY_EFFECT_START,
                                            d.ACTION_DELAY_TIME
                                              .WILD_FLY_EFFECT_END
                                          )
                                        ),
                                        o.push(
                                          p.getComponent(h).play("FX_Fly_N")
                                        ));
                                  return (
                                    w.Play(d.AudioClips.Collect_Fly),
                                    (t.next = 7),
                                    Promise.all(o)
                                  );
                                case 7:
                                  for (g = 0; g < n.length; ++g)
                                    (n[g].active = !1),
                                      n[g]
                                        .getChildByName("FX_MotionStreak")
                                        .setPosition(c(0, 0, 0)),
                                      E.getInstance().ReturnFlyEffect(n[g]),
                                      n[g].removeFromParent();
                                  n = [];
                                case 9:
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
                  (s.CheckUpgrade = (function () {
                    var t = r(
                      a().mark(function t() {
                        return a().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    !(
                                      this.m_gameView.IsBonusGame ||
                                      Math.random() > d.AVATAR_UPGRADE_ODDS ||
                                      this.m_gameView.Pot.NowLv >=
                                        d.POT_MAX_LEVEL ||
                                      this.m_gameView.NeedUpgrade ||
                                      F.IsFeaturesDemoMode
                                    )
                                  ) {
                                    t.next = 2;
                                    break;
                                  }
                                  return t.abrupt("return");
                                case 2:
                                  this.m_gameView.NeedUpgrade = !0;
                                case 3:
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
                  (s.GetWorldLocation = function (t) {
                    return t.getComponent(p).convertToWorldSpaceAR(c(0, 0, 0));
                  }),
                  (s.ShowQuadraticBez = (function () {
                    var t = r(
                      a().mark(function t(e, n, o, i, r, s, c) {
                        var l, u, f, p, h;
                        return a().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    (void 0 === r && (r = 0),
                                    void 0 === s && (s = 0),
                                    !(s > 0))
                                  ) {
                                    t.next = 5;
                                    break;
                                  }
                                  return (t.next = 5), y.Wait(this, s);
                                case 5:
                                  return (
                                    c && c(),
                                    (l = e.position.clone()),
                                    ((u = new m()).x =
                                      o.x - n.x + e.position.x),
                                    (u.y = o.y - n.y + e.position.y),
                                    (u.z = o.z - n.z + e.position.z),
                                    (f = this.GetMiddlePos(l, u)),
                                    (p = [l, f, u]),
                                    (h = new g.Bezier(p)),
                                    _(e)
                                      .to(
                                        d.ACTION_DELAY_TIME
                                          .WILD_FLY_EFFECT_START,
                                        { position: u },
                                        {
                                          onUpdate: function (t, n) {
                                            e.position = h.GetPosition(n);
                                          },
                                        }
                                      )
                                      .start(),
                                    (t.next = 17),
                                    y.Wait(
                                      this,
                                      d.ACTION_DELAY_TIME.WILD_FLY_EFFECT_START
                                    )
                                  );
                                case 17:
                                  if (!i) {
                                    t.next = 20;
                                    break;
                                  }
                                  return (t.next = 20), i();
                                case 20:
                                  return (t.next = 22), y.Wait(this, r);
                                case 22:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                    return function (e, n, o, i, r, a, s) {
                      return t.apply(this, arguments);
                    };
                  })()),
                  (s.GetMiddlePos = function (t, e) {
                    var n = e.x - t.x,
                      o = e.y - t.y,
                      i = c((t.x + e.x) / 2, (t.y + e.y) / 2);
                    this.m_gameView.IsLandscape
                      ? ((i.x = -200), (i.y = 50))
                      : ((i.x = 150), (i.y = 350));
                    var r = c();
                    (r.x = i.x + o / 2), (r.y = i.y - n / 2);
                    return (
                      (r.x > 300 || r.x < -300) &&
                        ((r.x = i.x + o / 2), (r.y = i.y + n / 2)),
                      r
                    );
                  }),
                  e
                );
              })(f)).prototype,
              "m_flyEffectRoot",
              [L],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (P = e(v.prototype, "m_FlyEndPos", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (I = v))
          ) || I)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ColumnSymbol.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Game_Define.ts",
    "./ReelSymbolUnit.ts",
    "./index.ts",
    "./index2.ts",
    "./NewBottomBarManager.ts",
    "./Tools.ts",
  ],
  function (t) {
    "use strict";
    var i, n, o, e, s, m, l, r, a, h, b;
    return {
      setters: [
        function (t) {
          i = t.createClass;
        },
        function (t) {
          (n = t.cclegacy),
            (o = t._decorator),
            (e = t.v3),
            (s = t.color),
            (m = t.log),
            (l = t.instantiate);
        },
        function (t) {
          r = t.default;
        },
        function (t) {
          a = t.ReelSymbolUnit;
        },
        null,
        null,
        function (t) {
          h = t.newBottombarManager;
        },
        function (t) {
          b = t.tools;
        },
      ],
      execute: function () {
        var y;
        n._RF.push({}, "24093KseUVOGKCENpO3LB1b", "ColumnSymbol", void 0);
        var u = o.ccclass;
        t(
          "ColumnSymbol",
          u("ColumnSymbol")(
            (y = (function () {
              function t(t, i, n, o, s) {
                (this.m_parentNode = null),
                  (this.m_symbolUnit = new Array()),
                  (this.m_symbols = []),
                  (this.m_funcGetSymbolSpriteFrame = void 0),
                  (this.m_name = ""),
                  (this.m_currentOddData = []),
                  (this.m_basePos = e(0, 0, 0)),
                  (this.m_parentNode = t),
                  (this.m_funcGetSymbolSpriteFrame = i),
                  m("");
                for (var r = s - 1; r >= 0; r--) {
                  var h = l(n),
                    b = h.getComponent(a);
                  b.Init(o),
                    this.m_parentNode.addChild(h),
                    (this.m_symbolUnit[r] = b);
                }
              }
              var n = t.prototype;
              return (
                (n.SetSymbols = function (t) {
                  this.m_symbols = t;
                  for (
                    var i = this.GetSiblingIdxData(t), n = 0;
                    n < this.m_symbolUnit.length;
                    ++n
                  )
                    if (n < t.length) {
                      this.m_symbolUnit[n].SetActive(!0);
                      var o = i[n],
                        e = 0;
                      t[n] == r.Symbol.WILD
                        ? (e = r.Symbol.WILD)
                        : t[n] == r.Symbol.WILD_M && (e = r.Symbol.WILD_M),
                        this.m_symbolUnit[n].SetSibling(o),
                        this.m_symbolUnit[n].SetIsWild(e),
                        this.m_symbolUnit[n].SetSprite(
                          this.m_funcGetSymbolSpriteFrame(t[n])
                        ),
                        this.m_symbolUnit[n].SetPosition(this.CalPosY(n));
                    } else this.m_symbolUnit[n].SetActive(!1);
                }),
                (n.GetSiblingIdxData = function (t) {
                  var i = new Array(t.length).fill(0),
                    n = 0,
                    o = [];
                  t.forEach(function (t, e) {
                    t !== r.Symbol.WILD && t !== r.Symbol.WILD_M
                      ? (i[e] = n++)
                      : o.push(e);
                  });
                  var e = t.length - 1;
                  return (
                    o.forEach(function (t) {
                      i[t] = e--;
                    }),
                    i
                  );
                }),
                (n.SetWildOdds = function (t) {
                  for (var i = 0; i < this.m_symbolUnit.length; ++i) {
                    var n = h.GetNowBetValue();
                    if (i < t.length) {
                      var o = b.times(t[i], h.GetNowBetValue());
                      this.m_symbolUnit[i].IsWild == r.Symbol.WILD_M &&
                        (o = t[i]),
                        this.m_symbolUnit[i].SetActive(!0),
                        this.m_symbolUnit[i].SetNum(o, n),
                        this.m_symbolUnit[i].SetPosition(this.CalPosY(i)),
                        (this.m_currentOddData[i] = t[i]);
                    } else this.m_symbolUnit[i].SetActive(!1);
                  }
                }),
                (n.UpdateWildOdds = function (t) {
                  for (var i = 0; i < this.m_symbolUnit.length; ++i) {
                    var n = h.GetNowBetValue(),
                      o = b.times(t[i], h.GetNowBetValue());
                    this.m_symbolUnit[i].IsWild == r.Symbol.WILD_M &&
                      (o = t[i]),
                      this.m_symbolUnit[i].SetNum(o, n),
                      (this.m_currentOddData[i] = t[i]);
                  }
                }),
                (n.ChangeSymbol = function (t, i) {
                  this.m_symbolUnit[i].SetSprite(
                    this.m_funcGetSymbolSpriteFrame(t)
                  ),
                    this.m_symbolUnit[i].SetActive(!0);
                }),
                (n.SetPosition = function (t) {
                  this.m_basePos = t;
                  for (var i = 0; i < this.m_symbols.length; ++i) {
                    var n = this.CalPosY(i);
                    this.m_symbolUnit[i].SetPosition(n);
                  }
                }),
                (n.CalPosY = function (t) {
                  var i = this.m_basePos.clone();
                  return (
                    (i.y +=
                      0.5 *
                      (this.m_symbolUnit.length - 1 - 2 * t) *
                      r.SymbolHeight),
                    i
                  );
                }),
                (n.CalStopPosY = function (t) {
                  var i = e(0, 0, 0);
                  return (
                    (i.y +=
                      0.5 *
                      (this.m_symbolUnit.length - 1 - 2 * t) *
                      r.SymbolHeight),
                    i
                  );
                }),
                (n.HideSymbolByRow = function (t) {
                  this.m_symbolUnit[t] && this.m_symbolUnit[t].SetActive(!1);
                }),
                (n.ShowSymbolByRow = function (t) {
                  this.m_symbolUnit[t] && this.m_symbolUnit[t].SetActive(!0);
                }),
                (n.SetColumnVisiable = function (t) {
                  for (var i = 0; i < this.m_symbolUnit.length; ++i)
                    this.m_symbolUnit[i].SetActive(t);
                }),
                (n.SetSymbolDark = function (t) {
                  for (
                    var i = t ? s(96, 96, 96) : s(255, 255, 255), n = 0;
                    n < this.m_symbolUnit.length;
                    ++n
                  )
                    this.m_symbolUnit[n].SetColor(i);
                }),
                (n.GetSymbol = function (t) {
                  return this.m_symbolUnit[t];
                }),
                (n.GetCurrentOdd = function (t) {
                  return this.m_currentOddData[t];
                }),
                i(t, [
                  {
                    key: "Name",
                    get: function () {
                      return this.m_name;
                    },
                    set: function (t) {
                      this.m_name = t;
                    },
                  },
                ]),
                t
              );
            })())
          ) || y
        );
        n._RF.pop();
      },
    };
  }
);

System.register("chunks:///_virtual/CommonEffect2.ts", ["cc"], function (t) {
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
        s._RF.push({}, "d425clw7pRD7ovKzxig6ls9", "CommonEffect", void 0),
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
  "chunks:///_virtual/DataStructure.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./index2.ts",
    "./CommonGameManager.ts",
  ],
  function (t) {
    "use strict";
    var e, n, u, o;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          n = t.cclegacy;
        },
        null,
        function (t) {
          (u = t.RequestMethod), (o = t.ProtocolData);
        },
      ],
      execute: function () {
        n._RF.push({}, "8462bJnOS5IGolTvJKgHdJW", "DataStructure", void 0);
        t(
          "SetGemInfoReq",
          (function (t) {
            function n() {
              var e;
              return (
                ((e = t.call(this) || this).method = u.Post),
                (e.url = "/setgem"),
                (e.info = null),
                (e.reqData = null),
                e
              );
            }
            return e(n, t), n;
          })(o)
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/EffectPlate.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./NodePool.ts",
    "./Game_Define.ts",
    "./index.ts",
    "./CollectFlyEffect.ts",
    "./BlowFlyEffect.ts",
    "./index2.ts",
    "./NewBottomBarManager.ts",
    "./Tools.ts",
    "./Define.ts",
    "./SoundAudioManager.ts",
  ],
  function (e) {
    "use strict";
    var t,
      n,
      i,
      o,
      r,
      s,
      l,
      a,
      c,
      f,
      u,
      m,
      h,
      p,
      S,
      y,
      _,
      d,
      w,
      b,
      L,
      E,
      v,
      g,
      A;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (o = e.assertThisInitialized),
            (r = e.createClass),
            (s = e.asyncToGenerator),
            (l = e.regeneratorRuntime);
        },
        function (e) {
          (a = e.cclegacy),
            (c = e._decorator),
            (f = e.Prefab),
            (u = e.Node),
            (m = e.log),
            (h = e.v3),
            (p = e.error),
            (S = e.tween),
            (y = e.Component),
            (_ = e.Vec3);
        },
        function (e) {
          d = e.default;
        },
        function (e) {
          w = e.default;
        },
        null,
        function (e) {
          b = e.CollectFlyEffect;
        },
        function (e) {
          L = e.BlowFlyEffect;
        },
        null,
        function (e) {
          E = e.newBottombarManager;
        },
        function (e) {
          v = e.tools;
        },
        function (e) {
          g = e.Define;
        },
        function (e) {
          A = e.soundAudioManager;
        },
      ],
      execute: function () {
        var N, C, R, x, P, M, O, I, B, F, V, W, T;
        a._RF.push({}, "e1344ROpsBCvoUzXXqSE5hd", "EffectPlate", void 0);
        e("SPINE_TYPES", { Symbol: 0 });
        var k = c.ccclass,
          Y = c.property;
        e(
          "EffectPlate",
          ((N = k("EffectPlate")),
          (C = Y({ type: f, tooltip: "symbol動態Prefabs New" })),
          (R = Y({ type: f, tooltip: "飛行prefab" })),
          (x = Y({ type: u, tooltip: "symbol相關表演的節點們" })),
          (P = Y({ type: b, tooltip: "蒐集特效相關" })),
          (M = Y({ type: L, tooltip: "吹氣特效相關" })),
          N(
            ((B = t(
              (I = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, r = new Array(n), s = 0;
                    s < n;
                    s++
                  )
                    r[s] = arguments[s];
                  return (
                    (t = e.call.apply(e, [this].concat(r)) || this),
                    i(t, "m_symbolEffectPrefabs", B, o(t)),
                    i(t, "m_flyEffectPrefab", F, o(t)),
                    i(t, "m_effectNode", V, o(t)),
                    i(t, "m_CollectFlyEffect", W, o(t)),
                    i(t, "m_BlowFlyEffect", T, o(t)),
                    (t.m_singleLineAni = null),
                    (t.m_curAwardLines = []),
                    (t.m_symbolSpines = new Array()),
                    (t.m_gameView = null),
                    t
                  );
                }
                n(t, e);
                var a = t.prototype;
                return (
                  (a.onLoad = function () {
                    m("");
                    for (var e = 0; e < w.COL_LENGTH; e++) {
                      for (var t = [], n = 0; n < w.ROW_LENGTH; n++)
                        t.push(Array());
                      this.m_symbolSpines.push(t);
                    }
                  }),
                  (a.Init = function (e) {
                    var t = this;
                    (this.m_gameView = e),
                      d
                        .getInstance()
                        .SetEffectPrefabs(
                          this.m_symbolEffectPrefabs,
                          this.m_flyEffectPrefab
                        ),
                      this.m_CollectFlyEffect.init(e),
                      this.m_BlowFlyEffect.init(e, function (e, n, i, o, r) {
                        return t.CreateSymbolNode(e, n, i, o, r);
                      });
                  }),
                  (a.CleanSymbolAnim = function (e, t, n) {
                    if (this.m_symbolSpines[e][t][n]) {
                      var i = this.m_symbolSpines[e][t][n];
                      d.getInstance().ReturnEffect(i),
                        i.node.removeFromParent(),
                        (this.m_symbolSpines[e][t][n] = null);
                    }
                  }),
                  (a.ClearAllSymbolAnim = function () {
                    for (var e = 0; e < this.m_symbolSpines.length; ++e)
                      for (
                        var t = 0;
                        t < this.m_symbolSpines[w.LAYERS.NORMAL].length;
                        ++t
                      )
                        for (var n = 0; n < this.m_effectNode.length; ++n)
                          this.CleanSymbolAnim(e, t, n);
                  }),
                  (a.Reset = function () {
                    for (var e = 0; e < this.m_symbolSpines.length; ++e)
                      for (var t = 0; t < this.m_symbolSpines[e].length; ++t)
                        for (var n = 0; n < this.m_effectNode.length; ++n)
                          this.CleanSymbolAnim(e, t, n);
                    for (var i = 0; i < w.SYMBOL_LINE_VEC.length; ++i)
                      this.m_gameView.LineSpines[i].SetNodeActivity(!1);
                  }),
                  (a.CreateSymbolNode = function (e, t, n, i, o) {
                    void 0 === o && (o = h(1, 1, 1));
                    var r = this.m_symbolSpines[e][t][n];
                    r ||
                      ((r = d.getInstance().GetEffectNode(i)),
                      this.m_effectNode[n].addChild(r.node),
                      (this.m_symbolSpines[e][t][n] = r));
                    var s = this.m_gameView.SlotReels.Columns[e],
                      l = this.m_gameView.SlotReels.ReelXPos[e],
                      a =
                        t >= w.ROW_LENGTH
                          ? s.CalStopPosY((w.ROW_LENGTH - 1) / 2).y
                          : s.CalStopPosY(t).y,
                      c = s.GetCurrentOdd(t),
                      f = E.GetNowBetValue(),
                      u = 0,
                      m = 1;
                    return (
                      i == w.Symbol.WILD
                        ? ((u = v.times(c, E.GetNowBetValue())), (m = 10))
                        : i == w.Symbol.WILD_M && ((u = c), (m = 10)),
                      r.SetNum(u, f),
                      r.node.setScale(o),
                      r.node.setPosition(l, a),
                      (r.node.active = !0),
                      v.SetZIndex(r.node, (10 * (e + 1) - t) * m),
                      r
                    );
                  }),
                  (a.UpdateAliveSymbolNodeSibling = function (e, t, n, i, o) {
                    var r = this.m_symbolSpines[e][t][n];
                    if (r) {
                      var s = o ? 10 : 1;
                      v.SetZIndex(r.node, (10 * (e + 1) - t) * s);
                    } else
                      p(
                        "錯誤!!!!! 找不到已存在的Symbol Node  col:" +
                          e +
                          " row:" +
                          t +
                          " layer:" +
                          n
                      );
                  }),
                  (a.ShowLockThenLoop = (function () {
                    var e = s(
                      l().mark(function e(t, n, i, o) {
                        var r, s;
                        return l().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (r = w.SYMBOL_SPINE_SIZE),
                                    (s = this.CreateSymbolNode(t, n, o, i, r)),
                                    (this.m_symbolSpines[t][n][o].node.active =
                                      !0),
                                    (e.next = 5),
                                    s.ShowLock()
                                  );
                                case 5:
                                  s.ShowLockLoop();
                                case 6:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (t, n, i, o) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (a.ShowLargeStartThenWin = (function () {
                    var e = s(
                      l().mark(function e(t, n) {
                        var i;
                        return l().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === n && (n = 0),
                                    (e.next = 3),
                                    g.Wait(this, n)
                                  );
                                case 3:
                                  return (
                                    (i = this.CreateSymbolNode(
                                      w.MiddleCol,
                                      w.MiddleRow,
                                      w.LAYERS.FOUR,
                                      t
                                    )).node.setScale(1, 1),
                                    (e.next = 7),
                                    i.ShowBig()
                                  );
                                case 7:
                                  i.ShowWin(!0);
                                case 8:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (a.ShowSymbolEffect = (function () {
                    var e = s(
                      l().mark(function e(t, n) {
                        var i, o, r, s, a, c, f, u;
                        return l().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if ((void 0 === n && (n = 1), t)) {
                                    e.next = 3;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 3:
                                  for (
                                    i = new Set(), o = [], r = 0;
                                    r < t.length;
                                    ++r
                                  ) {
                                    for (
                                      s = w.SYMBOL_LINE_VEC[t[r].Line || 0],
                                        a = new Set(),
                                        c = 0;
                                      c < w.ROW_LENGTH;
                                      ++c
                                    )
                                      (f =
                                        this.m_gameView.SlotReels.PlateInfo[
                                          s[c].x
                                        ].Row[s[c].y]),
                                        (u = 100 * s[c].x + 10 * s[c].y + f),
                                        a.add(u),
                                        i.add(u);
                                    a.add(1e3 * (t[r].Line + 1)),
                                      i.add(1e3 * (t[r].Line + 1)),
                                      o.push(a),
                                      this.CurAwardLines.push(a);
                                  }
                                  if (0 != n) {
                                    e.next = 10;
                                    break;
                                  }
                                  this.PrepareSymbolSpine(i), (e.next = 17);
                                  break;
                                case 10:
                                  this.m_gameView.SlotReels.SetColumnDark(
                                    !0,
                                    -1
                                  );
                                case 11:
                                  if (!(n > 0)) {
                                    e.next = 17;
                                    break;
                                  }
                                  return (
                                    --n, (e.next = 15), this.ShowSymbolSpine(i)
                                  );
                                case 15:
                                  e.next = 11;
                                  break;
                                case 17:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (a.PrepareSymbolSpine = function (e) {
                    for (
                      var t = Array.from(e).sort(function (e, t) {
                          return e - t;
                        }),
                        n = t.length - 1,
                        i = [];
                      t[n] >= 1e3;

                    )
                      i.push(v.divide(t[n], 1e3) - 1), t.splice(-1, 1), --n;
                    for (var o = t.length - 1; o >= 0; o--) {
                      var r = t[o],
                        s = Math.floor(r / 100),
                        l = Math.floor((r % 100) / 10),
                        a = r % 10,
                        c = w.SYMBOL_SPINE_SIZE,
                        f = this.CreateSymbolNode(s, l, w.LAYERS.NORMAL, a, c);
                      f.node.active = !1;
                      var u = f.node.getChildByName("Fly_Num");
                      u && (u.active = !0);
                    }
                  }),
                  (a.ShowSymbolSpine = (function () {
                    var e = s(
                      l().mark(function e(t) {
                        var n, i, o, r, s, a, c, f, u, m, h, p, S;
                        return l().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    n = [],
                                      i = Array.from(t).sort(function (e, t) {
                                        return e - t;
                                      }),
                                      o = i.length - 1,
                                      r = [];
                                    i[o] >= 1e3;

                                  )
                                    r.push(v.divide(i[o], 1e3) - 1),
                                      i.splice(-1, 1),
                                      --o;
                                  for (s = 0; s < r.length; ++s)
                                    this.m_gameView.LineSpines[r[s]].ShowLine();
                                  for (a = i.length - 1; a >= 0; a--)
                                    (c = i[a]),
                                      (f = Math.floor(c / 100)),
                                      (u = Math.floor((c % 100) / 10)),
                                      (m = c % 10),
                                      (h = w.SYMBOL_SPINE_SIZE),
                                      (p = this.CreateSymbolNode(
                                        f,
                                        u,
                                        w.LAYERS.NORMAL,
                                        m,
                                        h
                                      )),
                                      (S = p.node.getChildByName("Fly_Num")) &&
                                        (S.active = !0),
                                      this.m_gameView.SlotReels.Columns[
                                        f
                                      ].HideSymbolByRow(u),
                                      n.push(p.ShowWin());
                                  return (e.next = 9), Promise.all(n);
                                case 9:
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
                  (a.ShowSingleLineEffect = function () {
                    var e = this;
                    if (
                      !this.m_singleLineAni &&
                      this.CurAwardLines &&
                      0 !== this.CurAwardLines.length
                    ) {
                      var t = this.CurAwardLines.length;
                      this.m_gameView.SlotReels.SetColumnDark(!0, -1);
                      var n = 0;
                      this.m_singleLineAni = S(this.node)
                        .repeatForever(
                          S()
                            .call(function () {
                              e.m_gameView.SlotReels.ShowPlate(),
                                e.Reset(),
                                e.ShowSymbolSpine(e.CurAwardLines[n]),
                                ++n === t && (n = 0);
                            })
                            .delay(
                              w.ACTION_DELAY_TIME.TIME_FOR_AWARD_LINE_EFFECT
                            )
                        )
                        .start();
                    }
                  }),
                  (a.StopOneLineShow = function () {
                    this.m_singleLineAni &&
                      (this.m_gameView.SlotReels.ShowPlate(),
                      this.m_gameView.SlotReels.SetColumnDark(!1, -1),
                      this.m_singleLineAni.stop(),
                      (this.m_singleLineAni = null),
                      (this.CurAwardLines = []));
                  }),
                  (a.CloseAllNormalSymbol = function () {
                    for (var e = 0; e < this.m_symbolSpines.length; ++e)
                      for (var t = 0; t < this.m_symbolSpines[e].length; ++t)
                        this.m_symbolSpines[e][t][w.LAYERS.NORMAL] &&
                          (this.m_symbolSpines[e][t][
                            w.LAYERS.NORMAL
                          ].node.active = !1);
                    this.m_gameView.SlotReels.ShowPlate();
                  }),
                  (a.OpenLineNormalSymbol = function (e) {
                    for (var t = 0; t < w.SYMBOL_LINE_VEC[e].length; t++) {
                      var n = w.SYMBOL_LINE_VEC[e][t];
                      this.m_symbolSpines[n.x][n.y][w.LAYERS.NORMAL] &&
                        ((this.m_symbolSpines[n.x][n.y][
                          w.LAYERS.NORMAL
                        ].node.active = !0),
                        this.m_gameView.SlotReels.Columns[n.x].HideSymbolByRow(
                          n.y
                        ));
                    }
                  }),
                  (a.ShowWildMult = (function () {
                    var e = s(
                      l().mark(function e(t, n) {
                        var i, o, r, s, a, c, f, u;
                        return l().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (i = w.LAYERS.NORMAL),
                                    (o = w.WILD_MULT_COL),
                                    (r = []),
                                    (s = E.GetNowBetValue()),
                                    A.Play(w.AudioClips.Wild_Multiplier),
                                    (e.next = 7),
                                    this.m_symbolSpines[o][t][i].ShowNumAnim()
                                  );
                                case 7:
                                  return (
                                    (e.next = 9),
                                    g.Wait(
                                      this,
                                      w.ACTION_DELAY_TIME.WILD_MULT_EFFECT
                                    )
                                  );
                                case 9:
                                  for (
                                    A.Play(w.AudioClips.Wild_Multiplier2),
                                      a = 0;
                                    a < w.COL_LENGTH;
                                    a += 2
                                  )
                                    for (c = 0; c < w.ROW_LENGTH; c++)
                                      this.m_gameView.SlotReels.PlateInfo[a]
                                        .Row[c] == w.Symbol.WILD &&
                                        this.m_symbolSpines[a][c][i] &&
                                        this.m_symbolSpines[a][c][i].node
                                          .active &&
                                        ((f =
                                          this.m_symbolSpines[a][c][i].Prize),
                                        (u = v.strip(v.times(f, n))),
                                        r.push(
                                          this.m_symbolSpines[a][c][
                                            i
                                          ].ShowNumAnim(u, s)
                                        ),
                                        this.m_gameView.SlotReels.Columns[a]
                                          .GetSymbol(c)
                                          .SetNum(u, s));
                                  return (e.next = 13), Promise.all(r);
                                case 13:
                                  return (
                                    (e.next = 15),
                                    g.Wait(
                                      this,
                                      w.ACTION_DELAY_TIME.WILD_MULT_EFFECT
                                    )
                                  );
                                case 15:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (a.FlyANode = (function () {
                    var e = s(
                      l().mark(function e(t, n, i, o, r) {
                        var s, a;
                        return l().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((s = i.position.clone()),
                                    ((a = new _()).x =
                                      n.x - t.x + i.position.x),
                                    (a.y = n.y - t.y + i.position.y),
                                    (a.z = n.z - t.z + i.position.z),
                                    S(i)
                                      .to(o, { position: a })
                                      .delay(1)
                                      .call(function () {
                                        i.setPosition(s);
                                      })
                                      .start(),
                                    !r)
                                  ) {
                                    e.next = 9;
                                    break;
                                  }
                                  return (e.next = 9), g.Wait(this, r);
                                case 9:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (t, n, i, o, r) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (a.PlayBlowAnim = (function () {
                    var e = s(
                      l().mark(function e() {
                        var t, n, i, o, r, s, a;
                        return l().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    t = this.m_gameView.SpinAckQue.WildOddDone,
                                      i = this.m_gameView.GetMgBgDataIdx(),
                                      o = 0;
                                    o < w.COL_LENGTH;
                                    o++
                                  ) {
                                    for (
                                      n = [],
                                        r =
                                          this.m_gameView.SlotReels.Columns[o],
                                        s = 0;
                                      s < w.ROW_LENGTH;
                                      s++
                                    )
                                      n.push(t[i].WO[o * w.ROW_LENGTH + s]);
                                    r.UpdateWildOdds(n);
                                  }
                                  return (
                                    (a = E.GetNowBetValue()),
                                    (this.m_gameView.SetRotationLock = !0),
                                    (e.next = 7),
                                    this.m_BlowFlyEffect.PlayBlowAnim(a)
                                  );
                                case 7:
                                  (this.m_gameView.SetRotationLock = !1),
                                    this.Reset();
                                case 9:
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
                  (a.RecoverFlyedNumber = function () {
                    this.m_BlowFlyEffect.RecoverFlyedNumber();
                  }),
                  (a.ShowWildStop = (function () {
                    var e = s(
                      l().mark(function e(t) {
                        return l().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.m_CollectFlyEffect.ShowWildStop(t)
                                  );
                                case 2:
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
                  (a.ShowAllWildStop = (function () {
                    var e = s(
                      l().mark(function e() {
                        return l().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.m_CollectFlyEffect.ShowAllWildStop()
                                  );
                                case 2:
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
                  r(t, [
                    {
                      key: "BlowFlyEffect",
                      get: function () {
                        return this.m_BlowFlyEffect;
                      },
                    },
                    {
                      key: "CurAwardLines",
                      get: function () {
                        return this.m_curAwardLines;
                      },
                      set: function (e) {
                        this.m_curAwardLines = e;
                      },
                    },
                  ]),
                  t
                );
              })(y)).prototype,
              "m_symbolEffectPrefabs",
              [C],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (F = t(I.prototype, "m_flyEffectPrefab", [R], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = t(I.prototype, "m_effectNode", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (W = t(I.prototype, "m_CollectFlyEffect", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (T = t(I.prototype, "m_BlowFlyEffect", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (O = I))
          ) || O)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/EffectStartState.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./index2.ts",
    "./index.ts",
    "./Game_Define.ts",
    "./LicenseSetting.ts",
    "./MsgBoxManager.ts",
    "./Define.ts",
    "./NewBottomBarManager.ts",
    "./StateManager.ts",
    "./SoundAudioManager.ts",
    "./Tools.ts",
  ],
  function (e) {
    "use strict";
    var i, t, a, n, l, s, r, m, o, c, S, u, _, h;
    return {
      setters: [
        function (e) {
          (i = e.inheritsLoose),
            (t = e.asyncToGenerator),
            (a = e.regeneratorRuntime);
        },
        function (e) {
          n = e.cclegacy;
        },
        null,
        null,
        function (e) {
          l = e.default;
        },
        function (e) {
          s = e.SwitchOffKeyDefine;
        },
        function (e) {
          r = e.msgBoxManager;
        },
        function (e) {
          m = e.Define;
        },
        function (e) {
          (o = e.newBottombarManager), (c = e.SlotBottomBarState);
        },
        function (e) {
          (S = e.stateManager), (u = e.BaseState);
        },
        function (e) {
          _ = e.soundAudioManager;
        },
        function (e) {
          h = e.tools;
        },
      ],
      execute: function () {
        var g;
        e("CharacterSoundLevel", void 0),
          n._RF.push({}, "4f4a69vHvhClqz7/cQSEju4", "EffectStartState", void 0),
          (function (e) {
            (e[(e.eLevel1 = 0)] = "eLevel1"),
              (e[(e.eLevel2 = 1)] = "eLevel2"),
              (e[(e.eLevel3 = 2)] = "eLevel3"),
              (e[(e.eLevel4 = 3)] = "eLevel4"),
              (e[(e.eLevel5 = 4)] = "eLevel5");
          })(g || (g = e("CharacterSoundLevel", {})));
        e(
          "EffectStartState",
          (function (e) {
            function n(i) {
              var t;
              return (
                ((t = e.call(this) || this).m_gameView = null),
                (t.m_effectEnd = !1),
                (t.m_gameView = i),
                t
              );
            }
            i(n, e);
            var u = n.prototype;
            return (
              (u.OnEnter = (function () {
                var e = t(
                  a().mark(function e() {
                    var i, t, n, s, r, m, S, u, g, p, w, f, V, E, y;
                    return a().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                (this.m_gameView.SlotReels.SetNumLayerHigher(),
                                (i = this.m_gameView.SpinAckQue),
                                (t = this.m_gameView.GetMgBgDataIdx()),
                                (n = i.MaxFlag),
                                (s = i.TotalWin),
                                (r = i.GameWin[t]),
                                (m = o.GetNowBetValue()),
                                (S = r / m),
                                (u =
                                  this.m_gameView.SlotReels.GetSpecialGameSymbol()),
                                (g = i.BigMult[t]),
                                (p = i.WildWin[t] > 0),
                                S >= l.WIN_ODDS[2] &&
                                  (this.m_gameView.BigWin.IsEnd = !1),
                                !p)
                              ) {
                                e.next = 15;
                                break;
                              }
                              return (e.next = 15), this.WinShow(i, u);
                            case 15:
                              if (
                                ((w =
                                  this.m_gameView.IsBonusGame &&
                                  1 !== i.BigMult[1] &&
                                  -1 !== u),
                                (f =
                                  !this.m_gameView.IsBonusGame &&
                                  1 !== i.BigMult[0] &&
                                  -1 !== u),
                                (V =
                                  !this.m_gameView.IsBonusGame &&
                                  1 !== i.BigMult[0]),
                                (E = i.BigMult[t]),
                                (this.m_gameView.SetRotationLock = !0),
                                this.m_gameView.EffectPlate.BlowFlyEffect.ResetSymbolNum(
                                  this.m_gameView.EffectPlate.BlowFlyEffect.GetNeedBlowWildArray()
                                ),
                                E > 1 && _.Play(l.AudioClips.Symbol_Change),
                                !w)
                              ) {
                                e.next = 27;
                                break;
                              }
                              return (
                                (e.next = 25), this.ShowBonusSpecialWin(u, g)
                              );
                            case 25:
                              e.next = 35;
                              break;
                            case 27:
                              if (!f) {
                                e.next = 32;
                                break;
                              }
                              return (
                                (e.next = 30), this.ShowMGSpecialWIn(u, g, r)
                              );
                            case 30:
                              e.next = 35;
                              break;
                            case 32:
                              if (!V) {
                                e.next = 35;
                                break;
                              }
                              return (
                                (e.next = 35),
                                this.ShowMGSpecialWinHasWild(i, g)
                              );
                            case 35:
                              (this.m_effectEnd = !0),
                                this.m_gameView.BigWin.IsEnd ||
                                  ((y = t > 0 ? r : s),
                                  n &&
                                    t > 0 &&
                                    (y = h.strip(h.minus(s, i.GameWin[0]))),
                                  o.SetSpinState(c.GET_AWARD_NO_AUTO),
                                  this.m_gameView.ShowBigWin(y, S)),
                                this.m_gameView.WinBoardMgr.CloseScore();
                            case 38:
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
              (u.OnProcess = function () {
                var e = this;
                this.m_gameView.BigWin.IsEnd &&
                  this.m_effectEnd &&
                  ((this.m_gameView.BigWin.node.active = !1),
                  (this.m_effectEnd = !1),
                  (this.m_gameView.SetRotationLock = !1),
                  this.m_gameView.HasSpecialAllEffect &&
                    (this.m_gameView.FxResetSpine.PlayReset(),
                    (this.m_gameView.HasSpecialAllEffect = !1),
                    this.m_gameView.SlotReels.ShowPlate(),
                    this.m_gameView.EffectPlate.Reset(),
                    this.m_gameView.DoLogoFade(255)),
                  this.m_gameView.IsBonusGame
                    ? this.m_gameView.SpinAckQue.MaxFlag
                      ? r.ShowMessageBox(
                          m.StringKey.MSGBOX_MAX_REWARD,
                          m.StringKey.MSGBOX_TITLE_SYSTEM_INFO,
                          function () {
                            o.SetWinValue(e.m_gameView.SpinAckQue.TotalWin),
                              S.NextState(l.GAMEVIEW_STATE.ROUND_SHOW_END);
                          }
                        )
                      : (o.SetWinValue(this.m_gameView.SpinAckQue.TotalWin),
                        S.NextState(l.GAMEVIEW_STATE.ROUND_SHOW_END))
                    : this.m_gameView.SpinAckQue.MaxFlag &&
                      this.m_gameView.SpinAckQue.GetBonus <= 0
                    ? r.ShowMessageBox(
                        m.StringKey.MSGBOX_MAX_REWARD,
                        m.StringKey.MSGBOX_TITLE_SYSTEM_INFO,
                        function () {
                          o.SetWinValue(e.m_gameView.SpinAckQue.TotalWin),
                            S.NextState(l.GAMEVIEW_STATE.CHECK_BG);
                        }
                      )
                    : (o.SetWinValue(this.m_gameView.SpinAckQue.GameWin[0]),
                      S.NextState(l.GAMEVIEW_STATE.CHECK_BG)));
              }),
              (u.WinShow = (function () {
                var e = t(
                  a().mark(function e(i, t) {
                    var n, r, m, o, c, S;
                    return a().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = this.m_gameView.SpinAckQue.TotalWin),
                                (r = this.m_gameView.GetMgBgDataIdx()),
                                (m = i.BigMult[r]),
                                (o = this.m_gameView.GetNowBetValue()),
                                (c = n / o),
                                this.m_gameView.SlotReels.ShowPlate(),
                                (e.next = 8),
                                Promise.all([
                                  this.m_gameView.EffectPlate.PlayBlowAnim(),
                                ])
                              );
                            case 8:
                              return (
                                c < l.WIN_ODDS[0]
                                  ? ((c > 1 ||
                                      !h.CheckSwitchOff(s.NoSoundUnder1)) &&
                                      _.Play(l.AudioClips.Small_Win_01),
                                    this.PlayCharacterSound(g.eLevel1))
                                  : c < l.WIN_ODDS[1]
                                  ? (_.Play(l.AudioClips.Small_Win_02),
                                    this.PlayCharacterSound(g.eLevel2))
                                  : c < l.WIN_ODDS[2]
                                  ? (_.Play(l.AudioClips.Small_Win_03),
                                    this.PlayCharacterSound(g.eLevel3))
                                  : (_.Play(l.AudioClips.Small_Win_04),
                                    this.PlayCharacterSound(g.eLevel4)),
                                (c < l.WIN_ODDS[2] || m > 1) &&
                                  ((S = h.divide(n, m)),
                                  this.m_gameView.WinBoardMgr.RunScore(
                                    S,
                                    l.ANI_ACTION_TIME.WIN_LABEL_RUNNING_TIME
                                  )),
                                this.m_gameView.IsBonusGame &&
                                  m <= 1 &&
                                  this.m_gameView.AvatarSpine.PlayBgNoFullPlate(),
                                this.m_gameView.AvatarSpine.PlayWin(),
                                (e.next = 14),
                                this.m_gameView.EffectPlate.ShowSymbolEffect(
                                  i.AwardDataVec[r].ADV
                                )
                              );
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (i, t) {
                  return e.apply(this, arguments);
                };
              })()),
              (u.ShowBonusSpecialWin = (function () {
                var e = t(
                  a().mark(function e(i, t) {
                    return a().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (this.m_gameView.HasSpecialAllEffect = !0),
                                this.m_gameView.EffectPlate.ShowLargeStartThenWin(
                                  i,
                                  l.ANI_ACTION_TIME.LARGE_START
                                ),
                                this.m_gameView.EffectPlate.Reset(),
                                this.m_gameView.AvatarSpine.PlaySpecialStart_BG(
                                  t
                                ),
                                this.m_gameView.DoLogoFade(0),
                                (e.next = 7),
                                Promise.all([
                                  this.m_gameView.SlotReels.HidePlate(
                                    l.ANI_ACTION_TIME.HIDE_PLATE,
                                    !0
                                  ),
                                  this.m_gameView.BigBottomSpine.PlayBigEffect(),
                                  this.m_gameView.BigTopSpine.PlayBigEffect(),
                                  this.m_gameView.MultiplySpine.PlaySpecialStart(
                                    t
                                  ),
                                ])
                              );
                            case 7:
                              return (
                                this.PlayCharacterSound(g.eLevel5),
                                (e.next = 10),
                                this.m_gameView.MultiplySpine.PlaySpecialLoop()
                              );
                            case 10:
                              if (
                                (_.Play(l.AudioClips.Multiplier_Fly),
                                !this.m_gameView.IsLandscape)
                              ) {
                                e.next = 17;
                                break;
                              }
                              return (
                                this.m_gameView.AvatarSpine.PlaySpecialEnd_BG(),
                                (e.next = 15),
                                this.m_gameView.MultiplySpine.PlaySpecialEndL()
                              );
                            case 15:
                              e.next = 20;
                              break;
                            case 17:
                              return (
                                this.m_gameView.AvatarSpine.PlaySpecialEnd_BG(),
                                (e.next = 20),
                                this.m_gameView.MultiplySpine.PlaySpecialEndS()
                              );
                            case 20:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (i, t) {
                  return e.apply(this, arguments);
                };
              })()),
              (u.ShowMGSpecialWIn = (function () {
                var e = t(
                  a().mark(function e(i, t, n) {
                    return a().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (this.m_gameView.HasSpecialAllEffect = !0),
                                this.m_gameView.EffectPlate.ShowLargeStartThenWin(
                                  i,
                                  l.ANI_ACTION_TIME.LARGE_START
                                ),
                                this.m_gameView.EffectPlate.Reset(),
                                this.m_gameView.AvatarSpine.SetAvatarSkin(t),
                                this.m_gameView.AvatarSpine.PlaySpecialStart(),
                                this.m_gameView.DoLogoFade(0),
                                (e.next = 8),
                                Promise.all([
                                  this.m_gameView.SlotReels.HidePlate(
                                    l.ANI_ACTION_TIME.HIDE_PLATE,
                                    !1
                                  ),
                                  this.m_gameView.BigBottomSpine.PlayBigEffect(),
                                  this.m_gameView.BigTopSpine.PlayBigEffect(),
                                  this.m_gameView.MultiplySpine.PlaySpecialStart(
                                    t
                                  ),
                                ])
                              );
                            case 8:
                              return (
                                this.PlayCharacterSound(g.eLevel5),
                                (e.next = 11),
                                this.m_gameView.MultiplySpine.PlaySpecialLoop()
                              );
                            case 11:
                              if (
                                (_.Play(l.AudioClips.Multiplier_Fly),
                                !this.m_gameView.IsLandscape)
                              ) {
                                e.next = 18;
                                break;
                              }
                              return (
                                this.m_gameView.AvatarSpine.PlaySpecialEnd(),
                                (e.next = 16),
                                this.m_gameView.MultiplySpine.PlaySpecialEndL()
                              );
                            case 16:
                              e.next = 21;
                              break;
                            case 18:
                              return (
                                this.m_gameView.AvatarSpine.PlaySpecialEnd(),
                                (e.next = 21),
                                this.m_gameView.MultiplySpine.PlaySpecialEndS()
                              );
                            case 21:
                              if (!this.m_gameView.BigWin.IsEnd) {
                                e.next = 25;
                                break;
                              }
                              return (
                                this.m_gameView.WinBoardMgr.RunScore(
                                  n,
                                  l.ANI_ACTION_TIME.WIN_LABEL_RUNNING_TIME_SPEED
                                ),
                                (e.next = 25),
                                m.Wait(
                                  this.m_gameView,
                                  l.ACTION_DELAY_TIME.SMALL_WIN_TIME
                                )
                              );
                            case 25:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (i, t, a) {
                  return e.apply(this, arguments);
                };
              })()),
              (u.ShowMGSpecialWinHasWild = (function () {
                var e = t(
                  a().mark(function e(i, t) {
                    return a().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                this.m_gameView.AvatarSpine.SetAvatarSkin(t),
                                this.m_gameView.AvatarSpine.PlaySpecialStart(),
                                5,
                                this.m_gameView.EffectPlate.ShowSymbolEffect(
                                  i.AwardDataVec[0].ADV,
                                  5
                                ),
                                (e.next = 6),
                                this.m_gameView.MultiplySpine.PlaySpecialStart(
                                  t
                                )
                              );
                            case 6:
                              return (
                                this.PlayCharacterSound(g.eLevel5),
                                (e.next = 9),
                                this.m_gameView.MultiplySpine.PlaySpecialLoop()
                              );
                            case 9:
                              if (
                                (_.Play(l.AudioClips.Multiplier_Fly),
                                !this.m_gameView.IsLandscape)
                              ) {
                                e.next = 16;
                                break;
                              }
                              return (
                                this.m_gameView.AvatarSpine.PlaySpecialEnd(),
                                (e.next = 14),
                                this.m_gameView.MultiplySpine.PlaySpecialEndL()
                              );
                            case 14:
                              e.next = 19;
                              break;
                            case 16:
                              return (
                                this.m_gameView.AvatarSpine.PlaySpecialEnd(),
                                (e.next = 19),
                                this.m_gameView.MultiplySpine.PlaySpecialEndS()
                              );
                            case 19:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (i, t) {
                  return e.apply(this, arguments);
                };
              })()),
              (u.PlayCharacterSound = function (e, i) {
                switch ((void 0 === i && (i = null), e)) {
                  case g.eLevel1:
                    _.Play(l.AudioClips.Voice_01, !1, i);
                    break;
                  case g.eLevel2:
                    _.Play(l.AudioClips.Voice_02, !1, i);
                    break;
                  case g.eLevel3:
                    _.Play(l.AudioClips.Voice_03, !1, i);
                    break;
                  case g.eLevel4:
                    _.Play(l.AudioClips.Voice_04, !1, i);
                    break;
                  case g.eLevel5:
                    _.Play(l.AudioClips.Voice_05, !1, i);
                }
              }),
              (u.OnLeave = function () {}),
              n
            );
          })(u)
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/EnterBGBottomSpine.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseSpine.ts"],
  function (t) {
    "use strict";
    var e, n, i, r, o, a, s, c, l, u;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (r = t.assertThisInitialized),
            (o = t.asyncToGenerator),
            (a = t.regeneratorRuntime);
        },
        function (t) {
          (s = t.cclegacy), (c = t._decorator), (l = t.sp);
        },
        function (t) {
          u = t.BaseSpine;
        },
      ],
      execute: function () {
        var p, y, m, h, S;
        s._RF.push({}, "6175387ugNNTqmocTQUwY8N", "EnterBGBottomSpine", void 0);
        var f = [
            "Symbol_00",
            "Symbol_01",
            "Symbol_02",
            "Symbol_03",
            "Symbol_04",
            "Symbol_05",
            "Symbol_06",
          ],
          _ = c.ccclass,
          v = c.property;
        t(
          "BGDeclareSpine",
          ((p = _("EnterBGBottomSpine")),
          (y = v({ type: l.Skeleton, tooltip: "Declare Fly" })),
          p(
            ((S = e(
              (h = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, o = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(o)) || this),
                    i(e, "m_DeclareFly", S, r(e)),
                    (e.m_isLandscape = void 0),
                    e
                  );
                }
                n(e, t);
                var s = e.prototype;
                return (
                  (s.SetRotate = function (t) {
                    this.m_isLandscape = t;
                  }),
                  (s.PlayBGIn = (function () {
                    var t = o(
                      a().mark(function t(e) {
                        return a().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    this.SetNodeActivity(!0),
                                    this.m_spine.setSkin(f[e]),
                                    this.PlayFlyAnim(),
                                    (t.next = 5),
                                    this.PlayAnimation("Start")
                                  );
                                case 5:
                                  this.SetNodeActivity(!1);
                                case 6:
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
                  (s.PlayBGInOolong = (function () {
                    var t = o(
                      a().mark(function t() {
                        return a().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    this.SetNodeActivity(!0),
                                    this.m_spine.setSkin("default"),
                                    this.PlayFlyAnim(),
                                    (t.next = 5),
                                    this.PlayAnimation("Start_Oolong")
                                  );
                                case 5:
                                  this.SetNodeActivity(!1);
                                case 6:
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
                  (s.PlayFlyAnim = function () {
                    var t = this.m_isLandscape ? "Declare_L" : "Declare_S";
                    this.PlayAnimation(t, this.m_DeclareFly);
                  }),
                  e
                );
              })(u)).prototype,
              "m_DeclareFly",
              [y],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (m = h))
          ) || m)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ExitBonusState.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Game_Define.ts",
    "./index2.ts",
    "./index.ts",
    "./NewBottomBarManager.ts",
    "./StateManager.ts",
    "./Define.ts",
    "./SoundAudioManager.ts",
  ],
  function (t) {
    "use strict";
    var e, n, a, i, o, r, u, s, c, m, l, f;
    return {
      setters: [
        function (t) {
          (e = t.inheritsLoose),
            (n = t.asyncToGenerator),
            (a = t.regeneratorRuntime);
        },
        function (t) {
          (i = t.cclegacy), (o = t._decorator);
        },
        function (t) {
          r = t.default;
        },
        null,
        null,
        function (t) {
          u = t.newBottombarManager;
        },
        function (t) {
          (s = t.stateManager), (c = t.BaseState);
        },
        function (t) {
          (m = t.CommonState), (l = t.Define);
        },
        function (t) {
          f = t.soundAudioManager;
        },
      ],
      execute: function () {
        var g;
        i._RF.push({}, "fbc22lPw/tNL5M2wnUUqq16", "ExitBonusState", void 0);
        var d = o.ccclass;
        t(
          "ExitBonusState",
          d("ExitBonusState")(
            (g = (function (t) {
              function i(e) {
                var n;
                return (
                  ((n = t.call(this) || this).m_gameView = null),
                  (n.m_gameView = e),
                  n
                );
              }
              e(i, t);
              var o = i.prototype;
              return (
                (o.OnEnter = function () {
                  var t = this;
                  (this.m_gameView.SetRotationLock = !0),
                    this.m_gameView.BackGroundView.EnterMG(function () {
                      (t.m_gameView.SetRotationLock = !1),
                        u.SetLeaveFree(),
                        t.m_gameView.HandleExitBonus(),
                        t.m_gameView.AvatarSpine.PlayIdle(),
                        s.NextState(m.COMMON_SHOW);
                    }),
                    this.ChangeBackGroundAudio();
                }),
                (o.ChangeBackGroundAudio = (function () {
                  var t = n(
                    a().mark(function t() {
                      return a().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (this.m_gameView.MGBgmId = f.Play(
                                    r.AudioClips.BGM_MG,
                                    !0,
                                    null,
                                    0
                                  )),
                                  (t.next = 3),
                                  l.Wait(this.m_gameView, 1)
                                );
                              case 3:
                                f.Stop(this.m_gameView.BonusBgmId);
                              case 4:
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
                (o.OnProcess = function () {}),
                (o.OnLeave = function () {}),
                i
              );
            })(c))
          ) || g
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ExtraBet.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Game_Define.ts",
    "./index2.ts",
    "./index.ts",
    "./Define.ts",
    "./MsgBoxManager.ts",
    "./LocaleStringManager.ts",
    "./NewBottomBarManager.ts",
    "./SoundAudioManager.ts",
    "./StateManager.ts",
    "./NewExtraManager.ts",
    "./EventManager.ts",
    "./BuyBonusManager.ts",
  ],
  function (t) {
    "use strict";
    var i,
      e,
      n,
      a,
      m,
      o,
      l,
      _,
      r,
      u,
      s,
      B,
      c,
      S,
      h,
      p,
      E,
      f,
      g,
      x,
      d,
      y,
      A,
      C,
      I,
      w,
      T,
      v,
      M;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (a = t.assertThisInitialized),
            (m = t.createClass),
            (o = t.asyncToGenerator),
            (l = t.regeneratorRuntime);
        },
        function (t) {
          (_ = t.cclegacy),
            (r = t._decorator),
            (u = t.Node),
            (s = t.Button),
            (B = t.Animation),
            (c = t.Label),
            (S = t.log),
            (h = t.tween),
            (p = t.Sprite),
            (E = t.Component);
        },
        function (t) {
          f = t.default;
        },
        null,
        null,
        function (t) {
          (g = t.CommonState), (x = t.Define);
        },
        function (t) {
          d = t.msgBoxManager;
        },
        function (t) {
          y = t.localeStringManager;
        },
        function (t) {
          (A = t.newBottombarManager), (C = t.SlotBottomBarState);
        },
        function (t) {
          I = t.soundAudioManager;
        },
        function (t) {
          w = t.stateManager;
        },
        function (t) {
          T = t.newExtraManager;
        },
        function (t) {
          v = t.CommonEventName;
        },
        function (t) {
          M = t.buyBonusManager;
        },
      ],
      execute: function () {
        var b, N, L, D, F, G, O, P, k, H, R, V, X, z, K, U, W, Y, Q, j, q, J, Z;
        _._RF.push({}, "e2e51NfRxlGzLaIpoHPkmYF", "ExtraBet", void 0);
        var $ = r.property,
          tt = r.ccclass;
        t(
          "default",
          ((b = tt("ExtraBet")),
          (N = $({ type: u, tooltip: "EX 加倍按鈕最頂層節點(整顆node)" })),
          (L = $({ type: s, tooltip: "EX 加倍按鈕" })),
          (D = $({ type: u, tooltip: "額外押注文字" })),
          (F = $({ type: B, tooltip: "EX 加倍按鈕ani" })),
          (G = $({ type: s, tooltip: "EX 加倍按鈕ON" })),
          (O = $({ type: s, tooltip: "EX 加倍按鈕OFF" })),
          (P = $({ type: s, tooltip: "EX 加倍按鈕提示問號" })),
          (k = $({ type: u, tooltip: "EX 加倍按鈕提示文字tip" })),
          (H = $({ type: c, tooltip: "EX 加倍功能說明文字串Label" })),
          (R = $({ type: u, tooltip: "EX 加倍按鈕" })),
          b(
            ((z = i(
              (X = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, m = new Array(e), o = 0;
                    o < e;
                    o++
                  )
                    m[o] = arguments[o];
                  return (
                    (i = t.call.apply(t, [this].concat(m)) || this),
                    n(i, "m_multiExtraBetNode", z, a(i)),
                    n(i, "m_multiBtn", K, a(i)),
                    n(i, "m_extraBarTxt", U, a(i)),
                    n(i, "m_multiBtn_Ani", W, a(i)),
                    (i.m_multiBtn_animationState = null),
                    n(i, "m_multiBtn_on", Y, a(i)),
                    n(i, "m_multiBtn_off", Q, a(i)),
                    n(i, "m_multiBtn_TipQuesMark", j, a(i)),
                    n(i, "m_multiBtn_Tip", q, a(i)),
                    n(i, "m_multiBtn_Description", J, a(i)),
                    n(i, "m_HP_EXBET_P0", Z, a(i)),
                    (i.m_isMulti = !1),
                    (i.m_isExtendShowBar = !0),
                    (i.m_firstIdle = !0),
                    (i.m_isforceExtraBetOnEnd = !0),
                    (i.m_gameView = null),
                    i
                  );
                }
                e(i, t);
                var _ = i.prototype;
                return (
                  (_.Init = function (t) {
                    var i = this;
                    S("ExtraBet Init"),
                      (this.m_gameView = t),
                      this.m_multiBtn.node.on(
                        u.EventType.TOUCH_END,
                        function () {
                          i.IsExAnimationTouchable() &&
                            (i.m_gameView.GetCurrentState() == g.IDLE
                              ? i.ExtendShowBar(
                                  !i.m_isExtendShowBar,
                                  i.CheckState()
                                )
                              : d.ShowMessageBox(
                                  y.GetString(x.StringKey.FREEWINCASH_PLAYING1)
                                ));
                        }
                      ),
                      this.m_multiBtn_on.node.on(
                        u.EventType.TOUCH_END,
                        function () {
                          i.IsExAnimationTouchable() &&
                            (x.IsUsingItem ||
                            i.m_gameView.GetCurrentState() != g.IDLE
                              ? d.ShowMessageBox(
                                  y.GetString(x.StringKey.FREEWINCASH_PLAYING1)
                                )
                              : i.ChangeBetMode(!0));
                        }
                      ),
                      this.m_multiBtn_off.node.on(
                        u.EventType.TOUCH_END,
                        function (t) {
                          i.IsExAnimationTouchable() &&
                            (x.IsUsingItem ||
                              i.m_gameView.GetCurrentState() != g.IDLE ||
                              i.ChangeBetMode(!0));
                        }
                      ),
                      this.m_multiBtn_TipQuesMark.node.on(
                        u.EventType.TOUCH_END,
                        function (t) {
                          i.IsExAnimationTouchable() &&
                            !x.IsUsingItem &&
                            (i.m_gameView.GetCurrentState() == g.IDLE
                              ? i.m_isExtendShowBar
                                ? (i.m_multiBtn_Tip.active =
                                    !i.m_multiBtn_Tip.active)
                                : h(i.node)
                                    .call(function () {
                                      i.ExtendShowBar(!0, i.CheckState());
                                    })
                                    .delay(0.3)
                                    .call(function () {
                                      i.m_multiBtn_Tip.active ||
                                        (i.m_multiBtn_Tip.active = !0);
                                    })
                                    .start()
                              : d.ShowMessageBox(
                                  y.GetString(x.StringKey.FREEWINCASH_PLAYING1)
                                ));
                        }
                      );
                  }),
                  (_.start = function () {
                    S("ExtraBet start"),
                      this.ExtendShowBar(!1, this.CheckState());
                  }),
                  (_.OnSpin = function () {
                    this.ExtendShowBar(!1, this.CheckState());
                  }),
                  (_.ShowExtra = function (t) {
                    this.m_multiExtraBetNode.active = t;
                  }),
                  (_.GoToFeatures = function () {
                    var t = this;
                    h(this.node)
                      .call(function () {
                        t.ExtendShowBar(!1, t.CheckState());
                      })
                      .delay(0.2)
                      .call(function () {
                        (t.m_isMulti = !0), t.ChangeBetMode();
                      })
                      .start();
                  }),
                  (_.SetTxt = function () {
                    var t = y.GetGameAtlas();
                    S(" localeStringManager.CurrLang : " + y.CurrLang),
                      y.CurrLang != x.Lang.CN &&
                        (this.m_multiBtn_Description.string = y.GetString(
                          f.StringKey.GAME_EX_DESCRIPTION
                        )),
                      (this.m_extraBarTxt.getComponent(p).spriteFrame =
                        t.getSpriteFrame("Txt_ExtraBets")),
                      (this.m_multiBtn_Description.getComponent(c).string =
                        y.GetString("EX_DESCRIPTION"));
                  }),
                  (_.Clear = function () {}),
                  (_.ExtendShowBar = function (t, i) {
                    var e = this;
                    this.m_gameView &&
                      A &&
                      (I.Stop(f.AudioClips.Common_BTN),
                      t
                        ? this.m_gameView.IsBonusGame ||
                          A.IsAutoSpin ||
                          x.IsUsingItem
                          ? T.IsFeaturesDemo ||
                            d.ShowMessageBox(
                              y.GetString(x.StringKey.FREEWINCASH_PLAYING1)
                            )
                          : this.m_isExtendShowBar ||
                            ((this.m_isExtendShowBar = !0),
                            h(this.node)
                              .call(function () {
                                w.Current() == g.IDLE &&
                                  A.SetSpinState(C.CLICK_SPIN),
                                  e.m_multiBtn_Ani.play("ExtraBet_Show"),
                                  (e.m_multiBtn_animationState =
                                    e.m_multiBtn_Ani.getState("ExtraBet_Show")),
                                  e.m_multiBtn_animationState.setTime(0),
                                  e.m_multiBtn_animationState.sample();
                              })
                              .delay(0.2)
                              .call(function () {
                                i && A.SetSpinState(C.IDLE),
                                  e.m_isMulti &&
                                    (e.m_multiBtn_Ani.play("ExtraBet_Active"),
                                    (e.m_multiBtn_animationState =
                                      e.m_multiBtn_Ani.getState(
                                        "ExtraBet_Active"
                                      )),
                                    e.m_multiBtn_animationState.setTime(0),
                                    e.m_multiBtn_animationState.sample());
                              })
                              .start())
                        : this.m_isExtendShowBar &&
                          ((this.m_isExtendShowBar = !1),
                          h(this.node)
                            .call(function () {
                              w.Current() == g.IDLE &&
                                A.SetSpinState(C.CLICK_SPIN),
                                (e.m_multiBtn_Tip.active = !1),
                                e.m_multiBtn_Ani.play("ExtraBet_Close"),
                                (e.m_multiBtn_animationState =
                                  e.m_multiBtn_Ani.getState("ExtraBet_Close")),
                                e.m_multiBtn_animationState.setTime(0),
                                e.m_multiBtn_animationState.sample();
                            })
                            .delay(0.2)
                            .call(function () {
                              i && A.SetSpinState(C.IDLE),
                                e.m_isMulti &&
                                  (e.m_multiBtn_Ani.play("ExtraBet_Active"),
                                  (e.m_multiBtn_animationState =
                                    e.m_multiBtn_Ani.getState(
                                      "ExtraBet_Active"
                                    )),
                                  e.m_multiBtn_animationState.setTime(0),
                                  e.m_multiBtn_animationState.sample());
                            })
                            .start()));
                  }),
                  (_.ForceExtraBetOn = function () {
                    (this.m_isforceExtraBetOnEnd = !1),
                      this.m_multiBtn_Ani.play("ExtraBet_ON"),
                      (this.m_multiBtn_animationState =
                        this.m_multiBtn_Ani.getState("ExtraBet_ON")),
                      this.m_multiBtn_animationState.setTime(0),
                      this.m_multiBtn_animationState.sample(),
                      this.m_multiBtn_Ani.play("ExtraBet_Active"),
                      (this.m_multiBtn_animationState =
                        this.m_multiBtn_Ani.getState("ExtraBet_Active")),
                      this.m_multiBtn_animationState.setTime(0),
                      this.m_multiBtn_animationState.sample(),
                      this.m_multiBtn_Ani.play("ExtraBet_Close"),
                      (this.m_multiBtn_on.node.active = !0),
                      (this.m_multiBtn_off.node.active = !1),
                      (this.m_isMulti = !0),
                      A.ChangeMultiBet(f.SpecialType.Special),
                      (this.m_isforceExtraBetOnEnd = !0);
                  }),
                  (_.ChangeBetMode = (function () {
                    var t = o(
                      l().mark(function t(i, e) {
                        var n = this;
                        return l().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  S(
                                    "ChangeBetMode stateManager.Current() : ",
                                    this.m_gameView.GetCurrentState()
                                  ),
                                    !A ||
                                    this.m_gameView.IsBonusGame ||
                                    (this.m_gameView.GetCurrentState() !==
                                      g.IDLE &&
                                      !this.m_isMulti) ||
                                    (!this.m_isMulti && M.IsBuyBonus)
                                      ? (this.m_gameView.GetCurrentState() !==
                                          g.IDLE ||
                                          this.m_gameView.IsBonusGame) &&
                                        (S("TRIAL_REFUSED_REASON 1 "),
                                        d.ShowMessageBox(
                                          y.GetString(
                                            x.StringKey.FREEWINCASH_PLAYING1
                                          )
                                        ))
                                      : ((this.m_isMulti = !this.m_isMulti),
                                        this.m_isMulti
                                          ? A.ChangeMultiBet(
                                              f.SpecialType.Special
                                            )
                                          : A.ChangeMultiBet(
                                              f.SpecialType.Normal
                                            ),
                                        this.m_isMulti
                                          ? (h(this.node)
                                              .call(function () {
                                                A &&
                                                  A.SetSpinState(C.CLICK_SPIN),
                                                  n.m_multiBtn_Ani.play(
                                                    "ExtraBet_ON"
                                                  ),
                                                  (n.m_multiBtn_animationState =
                                                    n.m_multiBtn_Ani.getState(
                                                      "ExtraBet_ON"
                                                    )),
                                                  n.m_multiBtn_animationState.setTime(
                                                    0
                                                  ),
                                                  n.m_multiBtn_animationState.sample();
                                              })
                                              .delay(1)
                                              .call(function () {
                                                A && A.SetSpinState(C.IDLE),
                                                  n.m_multiBtn_Ani.play(
                                                    "ExtraBet_Active"
                                                  ),
                                                  (n.m_multiBtn_animationState =
                                                    n.m_multiBtn_Ani.getState(
                                                      "ExtraBet_Active"
                                                    )),
                                                  n.m_multiBtn_animationState.setTime(
                                                    0
                                                  ),
                                                  n.m_multiBtn_animationState.sample();
                                              })
                                              .start(),
                                            h(this.node)
                                              .call(function () {})
                                              .delay(1.35)
                                              .call(function () {})
                                              .start(),
                                            (this.m_multiBtn_on.node.active =
                                              !0),
                                            (this.m_multiBtn_off.node.active =
                                              !1))
                                          : (h(this.node)
                                              .call(function () {
                                                A &&
                                                  A.SetSpinState(C.CLICK_SPIN),
                                                  n.m_multiBtn_Ani.play(
                                                    "ExtraBet_OFF"
                                                  ),
                                                  (n.m_multiBtn_animationState =
                                                    n.m_multiBtn_Ani.getState(
                                                      "ExtraBet_OFF"
                                                    )),
                                                  n.m_multiBtn_animationState.setTime(
                                                    0
                                                  ),
                                                  n.m_multiBtn_animationState.sample(),
                                                  e &&
                                                    n.m_multiBtn_animationState.setTime(
                                                      n
                                                        .m_multiBtn_animationState
                                                        .duration
                                                    );
                                              })
                                              .delay(0.25)
                                              .call(function () {
                                                A && A.SetSpinState(C.IDLE);
                                              })
                                              .start(),
                                            (this.m_multiBtn_on.node.active =
                                              !1),
                                            (this.m_multiBtn_off.node.active =
                                              !0)),
                                        this.m_gameView.ShowExtraBetEffect(
                                          this.m_isMulti
                                        ),
                                        i && I.Play(x.AudioClips.COMMON_BTN));
                                case 2:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                    return function (i, e) {
                      return t.apply(this, arguments);
                    };
                  })()),
                  (_.ForceCloseExtra = function () {
                    this.m_multiBtn_Ani.play("ExtraBet_OFF"),
                      (this.m_multiBtn_animationState =
                        this.m_multiBtn_Ani.getState("ExtraBet_OFF")),
                      this.m_multiBtn_animationState.setTime(0),
                      this.m_multiBtn_animationState.sample(),
                      (this.m_multiBtn_on.node.active = !1),
                      (this.m_multiBtn_off.node.active = !0);
                  }),
                  (_.ForceOpenExtra = function () {
                    this.m_multiBtn_Ani.play("ExtraBet_Active"),
                      (this.m_multiBtn_animationState =
                        this.m_multiBtn_Ani.getState("ExtraBet_Active")),
                      this.m_multiBtn_animationState.setTime(0),
                      this.m_multiBtn_animationState.sample(),
                      (this.m_multiBtn_on.node.active = !0),
                      (this.m_multiBtn_off.node.active = !1);
                  }),
                  (_.OnRotation = function () {
                    this.m_isMulti
                      ? (this.m_multiBtn_Ani.play("ExtraBet_Active"),
                        (this.m_multiBtn_animationState =
                          this.m_multiBtn_Ani.getState("ExtraBet_Active")),
                        this.m_multiBtn_animationState.setTime(0),
                        this.m_multiBtn_animationState.sample())
                      : (this.m_multiBtn_Ani.play("ExtraBet_Stop"),
                        (this.m_multiBtn_animationState =
                          this.m_multiBtn_Ani.getState("ExtraBet_Stop")),
                        this.m_multiBtn_animationState.setTime(0),
                        this.m_multiBtn_animationState.sample()),
                      (this.m_multiBtn_Tip.active = !1),
                      this.ExtendShowBar(!1, this.CheckState());
                  }),
                  (_.IsExAnimationTouchable = function () {
                    return (
                      S(
                        " this.m_multiBtn_animationState:",
                        this.m_multiBtn_animationState
                      ),
                      null == this.m_multiBtn_animationState ||
                        !this.m_multiBtn_animationState.isPlaying ||
                        "ExtraBet_Active" ==
                          this.m_multiBtn_animationState.name ||
                        "ExtraBet_Stop" == this.m_multiBtn_animationState.name
                    );
                  }),
                  (_.FirstShow = function () {
                    var t = this;
                    this.m_firstIdle &&
                      ((this.m_firstIdle = !1),
                      h(this.node)
                        .call(function () {
                          t.ExtendShowBar(!0, t.CheckState());
                        })
                        .delay(0.3)
                        .call(function () {})
                        .delay(7)
                        .call(function () {
                          t.ExtendShowBar(!1, t.CheckState());
                        })
                        .start());
                  }),
                  (_.CheckState = function () {
                    return !this.m_gameView || !A || A.BtnState === C.IDLE;
                  }),
                  (_.OnEvent = function (t) {
                    var i = this;
                    switch (t) {
                      case v.TriggerFreeSpin:
                        this.m_isMulti && this.ChangeBetMode(),
                          h(this.node)
                            .delay(0.5)
                            .call(function () {
                              i.node.active = !1;
                            })
                            .start();
                        break;
                      case v.FreeSpinTotalWinEnd:
                        this.node.active = !0;
                    }
                  }),
                  m(i, [
                    {
                      key: "HP_EXBET_P0",
                      get: function () {
                        return this.m_HP_EXBET_P0;
                      },
                    },
                    {
                      key: "IsMulti",
                      get: function () {
                        return this.m_isMulti;
                      },
                    },
                    {
                      key: "IsForceExtraBetOnEnd",
                      get: function () {
                        return this.m_isforceExtraBetOnEnd;
                      },
                    },
                  ]),
                  i
                );
              })(E)).prototype,
              "m_multiExtraBetNode",
              [N],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (K = i(X.prototype, "m_multiBtn", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (U = i(X.prototype, "m_extraBarTxt", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (W = i(X.prototype, "m_multiBtn_Ani", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Y = i(X.prototype, "m_multiBtn_on", [G], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Q = i(X.prototype, "m_multiBtn_off", [O], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (j = i(X.prototype, "m_multiBtn_TipQuesMark", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (q = i(X.prototype, "m_multiBtn_Tip", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (J = i(X.prototype, "m_multiBtn_Description", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Z = i(X.prototype, "m_HP_EXBET_P0", [R], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = X))
          ) || V)
        );
        _._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ExtraBetSpine.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BaseSpine.ts",
    "./index2.ts",
    "./Game_Define.ts",
    "./SoundAudioManager.ts",
  ],
  function (t) {
    "use strict";
    var e, n, r, i, a, o, s, c;
    return {
      setters: [
        function (t) {
          (e = t.inheritsLoose),
            (n = t.asyncToGenerator),
            (r = t.regeneratorRuntime);
        },
        function (t) {
          (i = t.cclegacy), (a = t._decorator);
        },
        function (t) {
          o = t.BaseSpine;
        },
        null,
        function (t) {
          s = t.default;
        },
        function (t) {
          c = t.soundAudioManager;
        },
      ],
      execute: function () {
        var u;
        i._RF.push({}, "1bc3aFxPn9HwZTR4Di7fB+i", "ExtraBetSpine", void 0);
        var p = a.ccclass;
        t(
          "ExtraBetSpine",
          p("ExtraBetSpine")(
            (u = (function (t) {
              function i() {
                return t.apply(this, arguments) || this;
              }
              return (
                e(i, t),
                (i.prototype.ShowDeclare = (function () {
                  var t = n(
                    r().mark(function t() {
                      return r().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  c.Play(s.AudioClips.Extrabet_Show),
                                  this.SetNodeActivity(!0),
                                  (t.next = 4),
                                  this.PlayAnimation("ExtraBet_Declare")
                                );
                              case 4:
                                this.SetNodeActivity(!1);
                              case 5:
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
                i
              );
            })(o))
          ) || u
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FakeReelDataProvider.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, a, i, r;
    return {
      setters: [
        function (e) {
          t = e.createForOfIteratorHelperLoose;
        },
        function (e) {
          (a = e.cclegacy), (i = e._decorator), (r = e.error);
        },
      ],
      execute: function () {
        var l;
        a._RF.push(
          {},
          "a14b74UKMlIC4U0IeAJ8cad",
          "FakeReelDataProvider",
          void 0
        );
        var n = i.ccclass;
        e(
          "FakeReelDataProvider",
          n("FakeReelDataProvider")(
            (l = (function () {
              function e(e, t, a) {
                (this.m_ReelCurrentIdx = void 0),
                  (this.m_ReelFakeData = void 0),
                  (this.m_FakeWildWeight = void 0),
                  (this.m_FakeWildMultWeight = void 0),
                  (this.m_ReelFakeData = e),
                  (this.m_FakeWildWeight = t),
                  (this.m_FakeWildMultWeight = a),
                  (this.m_ReelCurrentIdx = new Array(
                    this.m_ReelFakeData.length
                  ).fill(0));
              }
              var a = e.prototype;
              return (
                (a.SetReelFakeData = function (e) {
                  (this.m_ReelFakeData = e),
                    (this.m_ReelCurrentIdx = new Array(
                      this.m_ReelFakeData.length
                    ).fill(0));
                }),
                (a.GetRandomReelSymbol = function (e) {
                  if (e < 0 || e >= this.m_ReelFakeData.length)
                    return r("Invalid column index"), -1;
                  var t = this.m_ReelFakeData[e][this.m_ReelCurrentIdx[e]];
                  return (
                    (this.m_ReelCurrentIdx[e] =
                      (this.m_ReelCurrentIdx[e] + 1) %
                      this.m_ReelFakeData[e].length),
                    t
                  );
                }),
                (a.GetRandomWildOdd = function () {
                  for (
                    var e,
                      a = 100 * Math.random(),
                      i = t(this.m_FakeWildWeight);
                    !(e = i()).done;

                  ) {
                    var r = e.value,
                      l = r[0];
                    if ((a -= r[1]) < 0) return l;
                  }
                  return this.m_FakeWildWeight[
                    this.m_FakeWildWeight.length - 1
                  ][0];
                }),
                (a.GetRandomWildMultOdd = function () {
                  for (
                    var e,
                      a = 31 * Math.random(),
                      i = t(this.m_FakeWildMultWeight);
                    !(e = i()).done;

                  ) {
                    var r = e.value,
                      l = r[0];
                    if ((a -= r[1]) < 0) return l;
                  }
                  return this.m_FakeWildMultWeight[
                    this.m_FakeWildMultWeight.length - 1
                  ][0];
                }),
                e
              );
            })())
          ) || l
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FeatrueShowState.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./index2.ts",
    "./NewBottomBarManager.ts",
    "./NewExtraManager.ts",
    "./StateManager.ts",
  ],
  function (e) {
    "use strict";
    var t, a, n, r, o, i;
    return {
      setters: [
        function (e) {
          t = e.inheritsLoose;
        },
        function (e) {
          (a = e.cclegacy), (n = e._decorator);
        },
        null,
        function (e) {
          r = e.newBottombarManager;
        },
        function (e) {
          o = e.newExtraManager;
        },
        function (e) {
          i = e.BaseState;
        },
      ],
      execute: function () {
        var u;
        a._RF.push({}, "91be0q6xo5G6K1cP+HMvfAA", "FeatrueShowState", void 0);
        var s = n.ccclass;
        e(
          "FeatrueShowState",
          s("FeatrueShowState")(
            (u = (function (e) {
              function a(t) {
                var a;
                return (
                  ((a = e.call(this) || this).m_gameView = null),
                  (a.m_gameView = t),
                  a
                );
              }
              t(a, e);
              var n = a.prototype;
              return (
                (n.OnEnter = function () {
                  this.m_gameView.IntroSpine[0].SetNodeActivity(!1),
                    r.CanPlayFeaturesDemo(!0),
                    (this.m_gameView.IsAutoShowFeatures = !0),
                    r.SetBarNodeVisiable(!0),
                    o.AutoShowFeatures();
                }),
                (n.OnProcess = function () {}),
                (n.OnLeave = function () {}),
                a
              );
            })(i))
          ) || u
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FxResetSpine.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseSpine.ts"],
  function (e) {
    "use strict";
    var t, n, r, i, s, c;
    return {
      setters: [
        function (e) {
          (t = e.inheritsLoose),
            (n = e.asyncToGenerator),
            (r = e.regeneratorRuntime);
        },
        function (e) {
          (i = e.cclegacy), (s = e._decorator);
        },
        function (e) {
          c = e.BaseSpine;
        },
      ],
      execute: function () {
        var o;
        i._RF.push({}, "356afbtGPZLQoM8Oh550UlW", "FxResetSpine", void 0);
        var u = s.ccclass;
        e(
          "FxResetSpine",
          u("FxResetSpine")(
            (o = (function (e) {
              function i() {
                return e.apply(this, arguments) || this;
              }
              return (
                t(i, e),
                (i.prototype.PlayReset = (function () {
                  var e = n(
                    r().mark(function e() {
                      return r().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  this.SetNodeActivity(!0),
                                  (e.next = 3),
                                  this.PlayAnimation("Reset")
                                );
                              case 3:
                                this.SetNodeActivity(!1);
                              case 4:
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
                i
              );
            })(c))
          ) || o
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/game",
  [
    "./BackGroundView.ts",
    "./ColumnSymbol.ts",
    "./CommonEffect2.ts",
    "./DataStructure.ts",
    "./BlowFlyEffect.ts",
    "./CollectFlyEffect.ts",
    "./EffectPlate.ts",
    "./ExtraBet.ts",
    "./EnterBGBottomSpine.ts",
    "./GameView.ts",
    "./Game_Define.ts",
    "./RecoverSpinAck.ts",
    "./SlotReel.ts",
    "./BaseSpine.ts",
    "./BgNearWinSpineManager.ts",
    "./BigBottomSpine.ts",
    "./BigTopSpine.ts",
    "./AvatarSpine.ts",
    "./MultiplySpine.ts",
    "./ExtraBetSpine.ts",
    "./FxResetSpine.ts",
    "./IntroSpine.ts",
    "./LineSpine.ts",
    "./NodePool.ts",
    "./PotSpine.ts",
    "./SymbolSpine.ts",
    "./WinBoardMgr.ts",
    "./AwardState.ts",
    "./CheckBgState.ts",
    "./CheckState.ts",
    "./EffectStartState.ts",
    "./ExitBonusState.ts",
    "./FeatrueShowState.ts",
    "./IdleState.ts",
    "./ReSpinState.ts",
    "./RoundEndState.ts",
    "./RoundShowEndState.ts",
    "./ShowIntroState.ts",
    "./SpinState.ts",
    "./UnshowPrepare.ts",
    "./WaitReadyState.ts",
    "./WaitResState.ts",
    "./WildMultState.ts",
    "./ReelSymbolUnit.ts",
    "./WildNumDecimalPlacesProvider.ts",
    "./FakeReelDataProvider.ts",
    "./NodeFadeTool.ts",
    "./RotateParentControl.ts",
    "./RotateParentControlData.ts",
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
      ],
      execute: function () {},
    };
  }
);

System.register(
  "chunks:///_virtual/Game_Define.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./index.ts", "./Tools.ts"],
  function (_) {
    "use strict";
    var l, e, E, i, n, o, t, L;
    return {
      setters: [
        function (_) {
          l = _.inheritsLoose;
        },
        function (_) {
          (e = _.cclegacy),
            (E = _._decorator),
            (i = _.v3),
            (n = _.Enum),
            (o = _.Component);
        },
        null,
        function (_) {
          (t = _.tools), (L = _.FORMAT_NUMBER_TYPE);
        },
      ],
      execute: function () {
        var T, R;
        _({
          LV: void 0,
          eGameType: void 0,
          eSymbolState: void 0,
          eSymbolType: void 0,
        }),
          e._RF.push({}, "9544bnjfYhL2bNVUGjJgIHL", "Game_Define", void 0);
        var S,
          W,
          N,
          u,
          a,
          A,
          O = E.ccclass;
        !(function (_) {
          (_[(_.FEATURE_SHOW = 0)] = "FEATURE_SHOW"),
            (_[(_.WAIT_READY = 1)] = "WAIT_READY"),
            (_[(_.SHOW_INTRO = 2)] = "SHOW_INTRO"),
            (_[(_.AWARD = 3)] = "AWARD"),
            (_[(_.WILD_MULT = 4)] = "WILD_MULT"),
            (_[(_.EFFECTSTART = 5)] = "EFFECTSTART"),
            (_[(_.CHECK_BG = 6)] = "CHECK_BG"),
            (_[(_.ROUND_END = 7)] = "ROUND_END"),
            (_[(_.RESPIN = 8)] = "RESPIN"),
            (_[(_.UNSHOW_PREPARE = 9)] = "UNSHOW_PREPARE"),
            (_[(_.LEVEL_UP = 10)] = "LEVEL_UP"),
            (_[(_.ROUND_SHOW_END = 11)] = "ROUND_SHOW_END"),
            (_[(_.EXIT_BONUS = 12)] = "EXIT_BONUS");
        })(S || (S = {})),
          (function (_) {
            (_[(_.LEAF = 0)] = "LEAF"),
              (_[(_.MUSHROOM = 1)] = "MUSHROOM"),
              (_[(_.TOMATO = 2)] = "TOMATO"),
              (_[(_.GREEN = 3)] = "GREEN"),
              (_[(_.BLUE = 4)] = "BLUE"),
              (_[(_.RED = 5)] = "RED"),
              (_[(_.WILD = 6)] = "WILD"),
              (_[(_.WILD_M = 7)] = "WILD_M"),
              (_[(_.NULL = 8)] = "NULL");
          })(W || (W = {})),
          (function (_) {
            (_[(_.NORMAL = 0)] = "NORMAL"),
              (_[(_.WILD_BLOW = 1)] = "WILD_BLOW"),
              (_[(_.WINSHOW = 2)] = "WINSHOW");
          })(N || (N = _("eSymbolState", {}))),
          (function (_) {
            (_[(_.LEAF = 0)] = "LEAF"),
              (_[(_.MUSHROOM = 1)] = "MUSHROOM"),
              (_[(_.TOMATO = 2)] = "TOMATO"),
              (_[(_.GREEN = 3)] = "GREEN"),
              (_[(_.BLUE = 4)] = "BLUE"),
              (_[(_.RED = 5)] = "RED"),
              (_[(_.WILD = 6)] = "WILD"),
              (_[(_.WILD_M = 7)] = "WILD_M");
          })(u || (u = _("eSymbolType", {}))),
          (function (_) {
            (_[(_.NORMAL = 0)] = "NORMAL"),
              (_[(_.BONUS = 1)] = "BONUS"),
              (_[(_.SUPERBONUS = 2)] = "SUPERBONUS");
          })(a || (a = _("eGameType", {}))),
          (function (_) {
            (_[(_.LV0 = 0)] = "LV0"),
              (_[(_.LV1 = 1)] = "LV1"),
              (_[(_.LV2 = 2)] = "LV2"),
              (_[(_.LV3 = 3)] = "LV3"),
              (_[(_.LV4 = 4)] = "LV4");
          })(A || (A = _("LV", {})));
        var I = 1e3,
          D = 1e6;
        _(
          "default",
          O("Game_Define")(
            (((R = (function (_) {
              function e() {
                return _.apply(this, arguments) || this;
              }
              return (
                l(e, _),
                (e.NumberFormatKM = function (_) {
                  var l = _;
                  return _ >= D
                    ? ((l = t.strip(t.divide(_, D))),
                      t.FormatNumberThousands(l, L.DEFINE_DOT_NONE_ZERO),
                      t.FormatNumberThousands(l, L.DEFINE_DOT_NONE_ZERO) + "M")
                    : _ >= I
                    ? ((l = t.strip(t.divide(_, I))),
                      t.FormatNumberThousands(l, L.DEFINE_DOT_NONE_ZERO),
                      t.FormatNumberThousands(l, L.DEFINE_DOT_NONE_ZERO) + "K")
                    : t.FormatNumberThousands(l, L.DEFINE_DOT_NONE_ZERO);
                }),
                e
              );
            })(o)).Ver = "9"),
            (R.CHILI_SPICY_HOT = 3),
            (R.GameId = 421),
            (R.ShortGameName = "lj"),
            (R.COL_LENGTH = 3),
            (R.ROW_LENGTH = 3),
            (R.FAKE_ROW_LENGTH = 2),
            (R.SYMBOL_SPINE_SIZE = i(0.41, 0.41, 0.41)),
            (R.LAYERS = { BOTTOM: 0, NORMAL: 1, TOP: 2, FOUR: 3 }),
            (R.WILD_MULT_COL = 1),
            (R.REEL_SHOW_PLATES_AMOUNT = 3),
            (R.REEL_MIDDLE_PLATE_INDEX = 1),
            (R.REEL_UP_PLATE_INDEX = 2),
            (R.REEL_DOWN_PLATE_INDEX = 0),
            (R.SeparateLineWidth = 7),
            (R.SymbolWidth = 196),
            (R.SymbolHeight = 163),
            (R.Symbol = n(W)),
            (R.MiddleRow = 1),
            (R.MiddleCol = 1),
            (R.BG_NEAR_WIN_COUNT = 8),
            (R.SpecialType = n({ Normal: 0, Special: 1 })),
            (R.introSpineName = {
              LANDSCAPE: "GameIntro_L",
              PORTRAIT: "GameIntro_S",
            }),
            (R.introSpineAnimationNumber = 1),
            (R.ANI_ACTION_TIME = {
              LARGE_START: 1.5,
              HIDE_PLATE: 1.45,
              WILD_NUMBER_FLY: 0.3,
              WIN_LABEL_RUNNING_TIME: 0.3,
              WIN_LABEL_RUNNING_TIME_SPEED: 0.1,
            }),
            (R.ACTION_DELAY_TIME = {
              TIME_FOR_AWARD_LINE_EFFECT: 1.5,
              WILD_FLY_EFFECT_START: 0.4,
              WILD_FLY_EFFECT_END: 0,
              WILD_MULT_EFFECT: 0.3,
              NEAR_WIN_TIME: 1,
              SMALL_WIN_TIME: 0.4,
            }),
            (R.AudioClips = {
              Debut: null,
              BGM_MG: null,
              BGM_BG: null,
              Symbol_Change: null,
              Wild_Bonus: null,
              Wild_Multiplier: null,
              Wild_Multiplier2: null,
              Multiplier_Fly: null,
              Wild_Stop: null,
              Extrabet_Show: null,
              Link: null,
              Small_Win_01: null,
              Small_Win_02: null,
              Small_Win_03: null,
              Small_Win_04: null,
              Big_win: null,
              ChangeWin: null,
              ChangeWin2: null,
              Big_win_end: null,
              BG_Start: null,
              BG_Symbol_Lock: null,
              Voice_01: null,
              Voice_02: null,
              Voice_03: null,
              Voice_04: null,
              Voice_05: null,
              Near_Win: null,
              Level_Up: null,
              Common_BTN: null,
              ReelSpin: null,
              ReelStop: null,
              Collect_Fly: null,
              Pot_BG: null,
              Pot_Near_Win: null,
            }),
            (R.AudioFileRoot = "Sound/"),
            (R.AudioFilePath = {
              Debut: "Debut",
              BGM_MG: "BGM_MG",
              BGM_BG: "BGM_BG",
              Symbol_Change: "Symbol_Change",
              Wild_Bonus: "Wild_Bonus",
              Wild_Multiplier: "Wild_Multiplier",
              Wild_Multiplier2: "Wild_Multiplier2",
              Multiplier_Fly: "Multiplier_Fly",
              Wild_Stop: "Wild_Stop",
              Extrabet_Show: "Extrabet_Show",
              Link: "Link",
              Small_Win_01: "Small_Win_01",
              Small_Win_02: "Small_Win_02",
              Small_Win_03: "Small_Win_03",
              Small_Win_04: "Small_Win_04",
              Big_win: "Big_Win",
              ChangeWin: "Big_Win_Change_01",
              ChangeWin2: "Big_Win_Change_02",
              Big_win_end: "Big_Win_End",
              BG_Start: "BG_Start",
              BG_Symbol_Lock: "BG_Symbol_Lock",
              Voice_01: "Voice_01",
              Voice_02: "Voice_02",
              Voice_03: "Voice_03",
              Voice_04: "Voice_04",
              Voice_05: "Voice_05",
              Near_Win: "Near_Win",
              Level_Up: "Level_Up",
              Common_BTN: "Common_BTN",
              ReelSpin: "Reel_Spin",
              ReelStop: "Reel_Stop",
              Collect_Fly: "Collect_Fly",
              Pot_BG: "Pot_BG",
              Pot_Near_Win: "Pot_Near_Win",
            }),
            (R.SYMBOL_LINE_VEC = [
              [i(0, 0), i(1, 0), i(2, 0)],
              [i(0, 1), i(1, 1), i(2, 1)],
              [i(0, 2), i(1, 2), i(2, 2)],
              [i(0, 0), i(1, 1), i(2, 2)],
              [i(0, 2), i(1, 1), i(2, 0)],
            ]),
            (R.EXTRABET_TXT = "Txt_ExtraPay"),
            (R.EXTRABET_TXT_02 = "Txt_ExtraPay01"),
            (R.FG_DECLARE_TXT = ["Txt_BG_Declare_01", "Txt_BG_Declare_02"]),
            (R.MANUAL_STRING = [
              "String_01",
              "String_02",
              "String_03",
              "String_04",
            ]),
            (R.MANUAL_TITLE_STRING = "String_00"),
            (R.FeatrurePageL = "features/left/spriteFrame"),
            (R.FeatrurePageR = "features/right/spriteFrame"),
            (R.StringKey = {
              GAME_FEATURES_LEFT: "FEATURE_LEFT",
              GAME_FEATURES_RIGHT: "FEATURE_RIGHT",
              GAME_EX_DESCRIPTION: "EX_DESCRIPTION",
            }),
            (R.INDEX_BIGWIN = 2),
            (R.INDEX_MEGAWIN = 3),
            (R.INDEX_SUPERWIN = 4),
            (R.WIN_ODDS = [2, 4, 6, 15, 30]),
            (R.WIN_BOARD_SCORE_ALIVE_TIME_NORMAL_WIN = 1),
            (R.WIN_BOARD_SCORE_ALIVE_TIME_BIG_WIN = 6.2),
            (R.FAKE_BG_ODDS = 0.01),
            (R.HIGH_WILD_ODDS = 20),
            (R.AVATAR_UPGRADE_ODDS = 0.05),
            (R.POT_MAX_LEVEL = 4),
            (R.AVATAR_UPGRADE_WAIT_ROUND = 1),
            (R.IDLE_TIME = 8),
            (R.IDLE2_RATE = 0.8),
            (R.GAMEVIEW_STATE = n(S)),
            (R.USE_ITEM_REASON = { NORMAL: 0, USING: 1 }),
            (R.FAKE_REEL_DATA = [
              [
                1, 1, 1, 2, 2, 2, 6, 6, 0, 0, 0, 5, 5, 5, 6, 6, 4, 4, 4, 2, 2,
                2, 6, 6, 6, 3, 3, 3, 4, 4, 4, 6, 6, 0, 0, 0, 2, 2, 2, 6, 6, 6,
                1, 1, 1, 5, 5, 5, 6, 6, 6, 3, 3, 3, 4, 4, 4, 2, 2, 2, 6, 6, 6,
                3, 3, 3, 4, 4, 4, 6, 6, 6,
              ],
              [
                4, 4, 4, 7, 7, 7, 0, 0, 0, 2, 2, 2, 7, 7, 7, 1, 1, 1, 7, 7, 7,
                5, 5, 5, 3, 3, 3, 7, 7, 7, 1, 1, 1, 4, 4, 4, 7, 7, 0, 0, 0, 2,
                2, 2, 7, 7, 7, 1, 1, 1, 5, 5, 5, 3, 3, 3, 7, 7, 7, 1, 1, 1,
              ],
              [
                3, 3, 3, 0, 0, 0, 6, 6, 6, 1, 1, 1, 5, 5, 5, 6, 6, 6, 4, 4, 4,
                2, 2, 2, 6, 6, 6, 0, 0, 0, 5, 5, 5, 6, 6, 6, 2, 2, 2, 6, 6, 6,
                4, 4, 4, 6, 6, 6, 3, 3, 3, 5, 5, 5, 6, 6, 6,
              ],
            ]),
            (R.FAKE_WILD_ODDS_DATA = [
              [0.5, 2],
              [1, 5],
              [2, 8],
              [3, 10],
              [5, 16],
              [8, 20],
              [10, 16],
              [15, 10],
              [20, 8],
              [50, 5],
            ]),
            (R.FAKE_WILD_MULT_ODDS_DATA = [
              [2, 15],
              [3, 10],
              [5, 6],
            ]),
            (R.FeatureBetValue = 10),
            (R.FeaturesSpinAck = [
              {
                PlateSymbol: [
                  {
                    Col: [
                      { Row: [0, 0, 0] },
                      { Row: [0, 7, 0] },
                      { Row: [6, 0, 0] },
                    ],
                  },
                ],
                AwardDataVec: [
                  {
                    ADV: [
                      { Win: 0.8, Mult: 1 },
                      { Line: 1, Win: 2.4, Mult: 3 },
                      { Line: 2, Win: 0.8, Mult: 1 },
                      { Line: 3, Win: 2.4, Mult: 3 },
                      { Line: 4, Win: 2.4, Mult: 3 },
                    ],
                  },
                  {},
                ],
                WildOdd: [
                  { WO: [0, 0, 0, 0, 3, 0, 10, 0, 0] },
                  { WO: [0, 0, 0, 0, 0, 0, 0, 0, 0] },
                ],
                WildOddDone: [
                  { WO: [0, 0, 0, 0, 3, 0, 30, 0, 0] },
                  { WO: [0, 0, 0, 0, 0, 0, 0, 0, 0] },
                ],
                WildWin: [60, 0],
                BigMult: [2, 0],
                GameWin: [68.8, 0],
                AwardTypeFlag: 1,
                TotalWin: 68.8,
                RTP: 0.973,
              },
              {
                PlateSymbol: [
                  {
                    Col: [
                      { Row: [5, 2, 2] },
                      { Row: [7, 7, 7] },
                      { Row: [1, 1, 1] },
                    ],
                  },
                  {
                    Col: [
                      { Row: [6, 8, 6] },
                      { Row: [8, 8, 7] },
                      { Row: [8, 8, 8] },
                    ],
                  },
                  {
                    Col: [
                      { Row: [6, 6, 6] },
                      { Row: [8, 7, 7] },
                      { Row: [8, 6, 8] },
                    ],
                  },
                  {
                    Col: [
                      { Row: [6, 6, 6] },
                      { Row: [7, 7, 7] },
                      { Row: [6, 6, 6] },
                    ],
                  },
                  {
                    Col: [
                      { Row: [6, 6, 6] },
                      { Row: [7, 7, 7] },
                      { Row: [6, 6, 6] },
                    ],
                  },
                ],
                AwardDataVec: [
                  {},
                  {
                    ADV: [
                      { Symbol: 6, Mult: 5 },
                      { Symbol: 6, Line: 1, Mult: 5 },
                      { Symbol: 6, Line: 2, Mult: 2 },
                      { Symbol: 6, Line: 3, Mult: 5 },
                      { Symbol: 6, Line: 4, Mult: 5 },
                    ],
                  },
                ],
                WildOdd: [
                  { WO: [0, 0, 0, 5, 5, 5, 0, 0, 0] },
                  { WO: [8, 10, 3, 5, 5, 2, 8, 2, 3] },
                ],
                WildOddDone: [
                  { WO: [0, 0, 0, 5, 5, 5, 0, 0, 0] },
                  { WO: [200, 50, 30, 5, 5, 2, 200, 10, 30] },
                ],
                WildWin: [0, 2600],
                BigMult: [1, 5],
                GameWin: [0, 2600],
                GetBonus: 2,
                BonusSymbol: 6,
                AwardTypeFlag: 1,
                TotalWin: 2600,
                RTP: 0.973,
              },
            ]),
            (T = R))
          ) || T
        );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/GameView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./index2.ts",
    "./ConnectionManager.ts",
    "./index.ts",
    "./ManualComponent.ts",
    "./Game_Define.ts",
    "./lj2Proto.mjs_cjs=&original=.js",
    "./IntroSpine.ts",
    "./WaitReadyState.ts",
    "./WaitResState.ts",
    "./IdleState.ts",
    "./SpinState.ts",
    "./ShowIntroState.ts",
    "./EffectPlate.ts",
    "./WildMultState.ts",
    "./EffectStartState.ts",
    "./AvatarSpine.ts",
    "./RoundEndState.ts",
    "./AwardState.ts",
    "./CheckBgState.ts",
    "./ReSpinState.ts",
    "./FeatrueShowState.ts",
    "./UnshowPrepare.ts",
    "./RecoverSpinAck.ts",
    "./MultiplySpine.ts",
    "./EnterBGBottomSpine.ts",
    "./BigBottomSpine.ts",
    "./BigTopSpine.ts",
    "./LineSpine.ts",
    "./ExtraBetSpine.ts",
    "./FxResetSpine.ts",
    "./BgNearWinSpineManager.ts",
    "./RoundShowEndState.ts",
    "./CheckState.ts",
    "./index.js",
    "./index.mjs_cjs=&original=.js",
    "./index5.ts",
    "./LicenseSetting.ts",
    "./WinBoardMgr.ts",
    "./RotateParentControl.ts",
    "./BackGroundView.ts",
    "./ExitBonusState.ts",
    "./SlotReel.ts",
    "./NodeFadeTool.ts",
    "./WildNumDecimalPlacesProvider.ts",
    "./BigWinComponent.ts",
    "./PotSpine.ts",
    "./ExtraBetComponent.ts",
    "./StateManager.ts",
    "./index2.js",
    "./Define.ts",
    "./Tools.ts",
    "./IframeCommandManager.ts",
    "./NewBottomBarManager.ts",
    "./CommonGameManager.ts",
    "./MsgBoxManager.ts",
    "./NewExtraManager.ts",
    "./LocaleStringManager.ts",
    "./SoundAudioManager.ts",
    "./BackpackManager.ts",
    "./GaiaManager.ts",
    "./DailyMissionManager.ts",
    "./GiftCodeManager.ts",
    "./BuyBonusManager.ts",
    "./DebrisManager.ts",
    "./lj2Proto.js",
    "./EventManager.ts",
    "./RoundController.ts",
    "./AutoShowManager.ts",
  ],
  function (t) {
    "use strict";
    var e,
      n,
      i,
      o,
      a,
      r,
      s,
      u,
      l,
      c,
      S,
      m,
      p,
      h,
      _,
      f,
      d,
      g,
      I,
      A,
      E,
      B,
      y,
      k,
      C,
      w,
      T,
      P,
      G,
      R,
      b,
      M,
      N,
      v,
      W,
      L,
      x,
      O,
      F,
      D,
      V,
      H,
      U,
      z,
      K,
      X,
      Q,
      Y,
      j,
      J,
      q,
      Z,
      $,
      tt,
      et,
      nt,
      it,
      ot,
      at,
      rt,
      st,
      ut,
      lt,
      ct,
      St,
      mt,
      pt,
      ht,
      _t,
      ft,
      dt,
      gt,
      It,
      At,
      Et,
      Bt,
      yt,
      kt,
      Ct,
      wt,
      Tt,
      Pt,
      Gt,
      Rt,
      bt,
      Mt,
      Nt,
      vt,
      Wt,
      Lt,
      xt,
      Ot;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (o = t.assertThisInitialized),
            (a = t.createClass),
            (r = t.asyncToGenerator),
            (s = t.regeneratorRuntime);
        },
        function (t) {
          (u = t.cclegacy),
            (l = t._decorator),
            (c = t.JsonAsset),
            (S = t.Node),
            (m = t.Sprite),
            (p = t.SpriteAtlas),
            (h = t.Button),
            (_ = t.input),
            (f = t.Input),
            (d = t.KeyCode),
            (g = t.error),
            (I = t.screen),
            (A = t.view),
            (E = t.ResolutionPolicy),
            (B = t.Animation),
            (y = t.v3),
            (k = t.Component);
        },
        null,
        function (t) {
          C = t.ConnectionManager;
        },
        null,
        function (t) {
          w = t.default;
        },
        function (t) {
          T = t.default;
        },
        null,
        function (t) {
          P = t.IntroSpine;
        },
        function (t) {
          G = t.WaitReadyState;
        },
        function (t) {
          R = t.WaitResState;
        },
        function (t) {
          b = t.IdleState;
        },
        function (t) {
          M = t.SpinState;
        },
        function (t) {
          N = t.ShowIntroState;
        },
        function (t) {
          v = t.EffectPlate;
        },
        function (t) {
          W = t.WildMultState;
        },
        function (t) {
          L = t.EffectStartState;
        },
        function (t) {
          x = t.AvatarSpine;
        },
        function (t) {
          O = t.RoundEndState;
        },
        function (t) {
          F = t.AwardState;
        },
        function (t) {
          D = t.CheckBgState;
        },
        function (t) {
          V = t.ReSpinState;
        },
        function (t) {
          H = t.FeatrueShowState;
        },
        function (t) {
          U = t.UnshowPrepareState;
        },
        function (t) {
          z = t.RecoverSpinAck;
        },
        function (t) {
          K = t.MultiplySpine;
        },
        function (t) {
          X = t.BGDeclareSpine;
        },
        function (t) {
          Q = t.BigBottomSpine;
        },
        function (t) {
          Y = t.BigTopSpine;
        },
        function (t) {
          j = t.LineSpine;
        },
        function (t) {
          J = t.ExtraBetSpine;
        },
        function (t) {
          q = t.FxResetSpine;
        },
        function (t) {
          Z = t.BgNearWinSpineManager;
        },
        function (t) {
          $ = t.RoundShowEndState;
        },
        function (t) {
          tt = t.CheckState;
        },
        function (t) {
          et = t.default;
        },
        null,
        function (t) {
          nt = t.AstarteInit;
        },
        function (t) {
          it = t.SwitchOffKeyDefine;
        },
        function (t) {
          ot = t.WinBoardMgr;
        },
        function (t) {
          at = t.RotateParentControl;
        },
        function (t) {
          rt = t.BackGroundView;
        },
        function (t) {
          st = t.ExitBonusState;
        },
        function (t) {
          ut = t.SlotReel;
        },
        function (t) {
          lt = t.NodeFadeTool;
        },
        function (t) {
          ct = t.WildNumDecimalPlacesProvider;
        },
        function (t) {
          St = t.default;
        },
        function (t) {
          mt = t.PotSpine;
        },
        function (t) {
          pt = t.default;
        },
        function (t) {
          ht = t.stateManager;
        },
        function (t) {
          _t = t.default;
        },
        function (t) {
          (ft = t.Define), (dt = t.CommonState);
        },
        function (t) {
          gt = t.tools;
        },
        function (t) {
          It = t.iframeCommandManager;
        },
        function (t) {
          (At = t.newBottombarManager),
            (Et = t.SlotBottomBarState),
            (Bt = t.BottomBar_UIName);
        },
        function (t) {
          yt = t.commonGameManager;
        },
        function (t) {
          kt = t.msgBoxManager;
        },
        function (t) {
          Ct = t.newExtraManager;
        },
        function (t) {
          wt = t.localeStringManager;
        },
        function (t) {
          Tt = t.soundAudioManager;
        },
        function (t) {
          Pt = t.backpackManager;
        },
        function (t) {
          Gt = t.gaiaManager;
        },
        function (t) {
          Rt = t.missionManager;
        },
        function (t) {
          bt = t.giftCodeManager;
        },
        function (t) {
          Mt = t.buyBonusManager;
        },
        function (t) {
          Nt = t.debrisManager;
        },
        function (t) {
          vt = t.default;
        },
        function (t) {
          (Wt = t.eventManager), (Lt = t.CommonEventName);
        },
        function (t) {
          xt = t.roundController;
        },
        function (t) {
          Ot = t.autoShowManager;
        },
      ],
      execute: function () {
        var Ft,
          Dt,
          Vt,
          Ht,
          Ut,
          zt,
          Kt,
          Xt,
          Qt,
          Yt,
          jt,
          Jt,
          qt,
          Zt,
          $t,
          te,
          ee,
          ne,
          ie,
          oe,
          ae,
          re,
          se,
          ue,
          le,
          ce,
          Se,
          me,
          pe,
          he,
          _e,
          fe,
          de,
          ge,
          Ie,
          Ae,
          Ee,
          Be,
          ye,
          ke,
          Ce,
          we,
          Te,
          Pe,
          Ge,
          Re,
          be,
          Me,
          Ne,
          ve,
          We,
          Le,
          xe,
          Oe,
          Fe;
        u._RF.push({}, "8205evKEE1KVZ3OOuJluYol", "GameView", void 0);
        var De = 1136,
          Ve = 640,
          He = l.ccclass,
          Ue = l.property;
        t(
          "default",
          ((Ft = He("GameView")),
          (Dt = Ue({ type: c, tooltip: "音效設定" })),
          (Vt = Ue({ type: Z })),
          (Ht = Ue({ type: S, tooltip: "地bar根節點" })),
          (Ut = Ue({ type: ut, tooltip: "SlotReel" })),
          (zt = Ue({ type: v, tooltip: "EffectPlate" })),
          (Kt = Ue({ type: P, tooltip: "前導動畫" })),
          (Xt = Ue({ type: m, tooltip: "一般LOGO圖" })),
          (Qt = Ue({ type: p, tooltip: "LOGO合圖" })),
          (Yt = Ue({ type: w, tooltip: "ManualComponent" })),
          (jt = Ue({ type: St })),
          (Jt = Ue({ type: x, tooltip: "角色Spine" })),
          (qt = Ue({ type: ot, tooltip: "WinBoard" })),
          (Zt = Ue({ type: K, tooltip: "乘倍表演" })),
          ($t = Ue({ type: X, tooltip: "BG in 表演" })),
          (te = Ue({ type: pt, tooltip: "ExtraBet" })),
          (ee = Ue({ type: j, tooltip: "Plate MG Bottom" })),
          (ne = Ue({ type: Q, tooltip: "Bottom 3X3 大表演" })),
          (ie = Ue({ type: Y, tooltip: "Top 3X3 大表演" })),
          (oe = Ue({ type: J, tooltip: "Plate FG Middle" })),
          (ae = Ue({ type: m, tooltip: "Bg宣告多語系" })),
          (re = Ue({ type: m, tooltip: "ExtraBet動畫多語系" })),
          (se = Ue({ type: m, tooltip: "ExtraBet動畫多語系2" })),
          (ue = Ue({ type: q })),
          (le = Ue({ type: at, tooltip: "ExtraBet動畫多語系2" })),
          (ce = Ue({ type: rt, tooltip: "背景控制" })),
          (Se = Ue({ type: mt, tooltip: "Pot" })),
          Ft(
            ((he = e(
              (pe = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, a = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    i(e, "m_audioSetting", he, o(e)),
                    i(e, "m_bgNearWinSpineManager", _e, o(e)),
                    i(e, "m_barNode", fe, o(e)),
                    i(e, "m_slotReels", de, o(e)),
                    i(e, "m_effectPlate", ge, o(e)),
                    i(e, "m_introSpine", Ie, o(e)),
                    i(e, "m_logo", Ae, o(e)),
                    i(e, "m_titleSpriteAtlas", Ee, o(e)),
                    i(e, "m_manual", Be, o(e)),
                    i(e, "m_bigWin", ye, o(e)),
                    i(e, "m_avatarSpine", ke, o(e)),
                    i(e, "m_WinBoardMgr", Ce, o(e)),
                    i(e, "m_multiplySpine", we, o(e)),
                    i(e, "m_BGDeclareManager", Te, o(e)),
                    i(e, "m_extraBet", Pe, o(e)),
                    (e.m_BetMulti = [1, 1.5]),
                    i(e, "m_lineSpines", Ge, o(e)),
                    i(e, "m_bigBottomSpine", Re, o(e)),
                    i(e, "m_bigTopSpine", be, o(e)),
                    i(e, "m_extraBetSpine", Me, o(e)),
                    i(e, "m_textsDeclare", Ne, o(e)),
                    i(e, "m_textsExtraBet", ve, o(e)),
                    i(e, "m_textsExtraBet2", We, o(e)),
                    i(e, "m_fxResetSpine", Le, o(e)),
                    i(e, "m_RotateParentControl", xe, o(e)),
                    i(e, "m_BackGroundView", Oe, o(e)),
                    i(e, "m_pot", Fe, o(e)),
                    (e.m_isProto = void 0),
                    (e.m_aId = -1),
                    (e.m_token = ""),
                    (e.m_isLandscape = !1),
                    (e.m_isChange = !1),
                    (e.m_rotationLock = !1),
                    (e.m_isLogin = !1),
                    (e.m_autoplayInfos = null),
                    (e.m_isEnterBg = !1),
                    (e.m_isBonusGame = !1),
                    (e.m_spinAckQue = null),
                    (e.m_unshowSpinAckQue = null),
                    (e.m_isTwice = !1),
                    (e.m_isSendSpinEnd = !1),
                    (e.m_getUnshowAck = !1),
                    (e.m_roundInfo = null),
                    (e.m_isCheckChips = !1),
                    (e.m_canSpaceStop = !1),
                    (e.m_canPlateStop = !1),
                    (e.m_isManualHardStop = !1),
                    (e.m_oldRealPlate = new Array()),
                    (e.m_oldOdds = [0, 0, 0, 0, 0, 0, 0, 0, 0]),
                    (e.m_originPlate = new Array()),
                    (e.m_isGoingToFree = !1),
                    (e.m_isBottombarFinished = !1),
                    (e.m_hasGotGameInfo = !1),
                    (e.m_isHardStop = !1),
                    (e.m_isFirstPlateSpin = !0),
                    (e.m_win = 0),
                    (e.m_isSpined = !1),
                    (e.m_spinClickEvent = 0),
                    (e.m_freeSpinAward = 0),
                    (e.m_exchangeValidStamp = ""),
                    (e.m_totalTimesOfFreeGame = 0),
                    (e.m_curPlateIndex = -1),
                    (e.m_MGBgmId = -1),
                    (e.m_BonusBgmId = -1),
                    (e.m_reelRotatingSoundId = -1),
                    (e.m_bigWinSoundId = null),
                    (e.m_megaWinSoundId = null),
                    (e.m_usingItemRemainTimes = 0),
                    (e.m_itemAward = 0),
                    (e.m_curAvatarLevel = 0),
                    (e.m_realFeatureSpinAck = null),
                    (e.m_isAutoShowFeatures = !1),
                    (e.m_isFirstRound = !0),
                    (e.m_isRespin = void 0),
                    (e.m_hasSpecialAllEffect = !1),
                    (e.m_plateSpinBtn = null),
                    (e.m_NodeFadeTool = new lt()),
                    (e.m_WildNumDecimalPlacesProvider = new ct()),
                    (e.m_needUpgrade = !1),
                    e
                  );
                }
                n(e, t);
                var u = e.prototype;
                return (
                  (u.GetCurrentState = function () {
                    return ht.Current();
                  }),
                  (u.onLoad = function () {
                    var t = this;
                    (_t.util.Long = et),
                      _t.configure(),
                      nt(),
                      (ft.CURRENCY_CHANGE_ENABLE = !0),
                      gt.AddOnRotationCb(function () {
                        t.OnRotation();
                      }),
                      It.AddCb({
                        StopAutoCb: function () {
                          At.ShowAutoPlayState(!1);
                        },
                      }),
                      (ft.IsInMG = function () {
                        return !t.IsBonusGame;
                      });
                  }),
                  (u.start = function () {
                    var t = this;
                    this.m_BackGroundView.Init(this),
                      this.m_slotReels.Init(this),
                      this.m_effectPlate.Init(this),
                      this.m_avatarSpine.Init(this),
                      (this.m_plateSpinBtn = this.m_slotReels.getComponent(h)),
                      this.initKeyBoardEvent();
                    this.m_extraBet.Init(
                      function (e, n) {
                        return new Promise(function (i) {
                          e
                            ? n
                              ? i()
                              : t.ShowExtraBetEffect(e).then(function () {
                                  i();
                                })
                            : (t.ShowExtraBetEffect(e), i());
                        });
                      },
                      "EX_DESCRIPTION",
                      "Txt_ExtraBets"
                    ),
                      this.initGameState(),
                      gt.CheckSwitchOff(it.CloseManual) &&
                        (this.m_manual.node.active = !1),
                      yt.SetGameCb(this),
                      this.m_avatarSpine.PlayIdle(),
                      this.InitBigWin();
                  }),
                  (u.initKeyBoardEvent = function () {
                    var t = this;
                    gt.CheckSwitchOff(it.NoQuickSpin) ||
                      _.on(f.EventType.KEY_DOWN, function (e) {
                        switch (e.keyCode) {
                          case d.SPACE:
                            kt.IsShow() ||
                              !At ||
                              Ct.IsShowBackpack() ||
                              ((t.m_spinClickEvent =
                                ft.BTN_CLICK_EVENT.SPACE_SPIN),
                              t.ClickSpin(),
                              t.ClickStop());
                        }
                      });
                  }),
                  (u.initGameState = function () {
                    var t = {};
                    (t[T.GAMEVIEW_STATE.FEATURE_SHOW] = new H(this)),
                      (t[dt.WAIT_RES] = new R(this)),
                      (t[T.GAMEVIEW_STATE.WAIT_READY] = new G(this)),
                      (t[T.GAMEVIEW_STATE.SHOW_INTRO] = new N(this)),
                      (t[dt.IDLE] = new b(this)),
                      (t[dt.SPIN] = new M(this)),
                      (t[T.GAMEVIEW_STATE.WILD_MULT] = new W(this)),
                      (t[T.GAMEVIEW_STATE.EFFECTSTART] = new L(this)),
                      (t[T.GAMEVIEW_STATE.AWARD] = new F(this)),
                      (t[T.GAMEVIEW_STATE.CHECK_BG] = new D(this)),
                      (t[T.GAMEVIEW_STATE.ROUND_END] = new O(this)),
                      (t[T.GAMEVIEW_STATE.RESPIN] = new V(this)),
                      (t[T.GAMEVIEW_STATE.ROUND_SHOW_END] = new $(this)),
                      (t[dt.CHECK_STATE] = new tt(this)),
                      (t[T.GAMEVIEW_STATE.UNSHOW_PREPARE] = new U(this)),
                      (t[T.GAMEVIEW_STATE.EXIT_BONUS] = new st(this)),
                      ht.Init(t),
                      ht.NextState(dt.LOGIN);
                  }),
                  (u.SetTxt = function () {
                    var t = this.m_titleSpriteAtlas.getSpriteFrame(
                      "logo_" + wt.CurrLang
                    );
                    t ||
                      (t = this.m_titleSpriteAtlas.getSpriteFrame(
                        "logo_" + ft.Lang.EN
                      )),
                      (this.m_logo.spriteFrame = t);
                    for (
                      var e = wt.GetGameAtlas(), n = T.FG_DECLARE_TXT, i = 0;
                      i < n.length;
                      ++i
                    )
                      this.m_textsDeclare[i].spriteFrame = e.getSpriteFrame(
                        n[i]
                      );
                    (this.m_textsExtraBet.spriteFrame = e.getSpriteFrame(
                      T.EXTRABET_TXT
                    )),
                      (this.m_textsExtraBet2.spriteFrame = e.getSpriteFrame(
                        T.EXTRABET_TXT_02
                      )),
                      this.m_manual.SetTxt(
                        T.MANUAL_STRING,
                        T.MANUAL_TITLE_STRING
                      );
                  }),
                  (u.LoginSuccess = function () {
                    var t = this;
                    this.SetTxt(),
                      At.SetTxt(),
                      Ct.SetTxt(),
                      this.OnRotation(),
                      At.SetAutoPlayPanelTxt(),
                      Ct.SetCanAutoShowRankboardUI(),
                      Tt.SetSettingJson(this.m_audioSetting);
                    var e = function (e) {
                      if (T.AudioFilePath.hasOwnProperty(e)) {
                        var n = T.AudioFilePath[e];
                        t.Load(T.AudioFileRoot + n, function (t) {
                          T.AudioClips[e] = t;
                        });
                      }
                    };
                    for (var n in T.AudioFilePath) e(n);
                  }),
                  (u.InitExtra = function () {
                    var t = this;
                    Pt.NewInit(function () {
                      ft.SetCanUseItemCard(!1, T.USE_ITEM_REASON.USING),
                        t.ExtraBet.IsExtra && t.ExtraBet.ForceSetExtraBet(!1);
                    }),
                      Gt.JpManagerInit(),
                      Rt.NewInit(),
                      Ct.RecommendNewInit(),
                      Gt.MhbManagerInit(),
                      bt.Init();
                    Mt.NewInit(
                      function () {
                        At.SetSpinState(Et.CLICK_SPIN),
                          Wt.Dispatch(Lt.SpinReqNotify),
                          Tt.Play(T.AudioClips.ReelSpin, !1, null, 0.5);
                      },
                      function () {
                        At.ShowAutoPlayState(!1);
                      }
                    ),
                      Nt.NewInit(),
                      Ct.RankingInit(
                        [ft.APP.GetAccount(), ft.APP.GetNickName()],
                        ft.APP.GetAToken(),
                        gt.ConvertLanguageToFull(wt.CurrLang),
                        null,
                        null,
                        function () {
                          C.SendMailReq();
                        }
                      );
                  }),
                  (u.SyncPlate = function () {
                    var t = this.ConvertPlate(
                      this.OldRealPlate ||
                        this.m_roundInfo.PlateSymbol[this.CurPlateIndex].Col ||
                        this.GetBeginPlate()
                    );
                    this.m_slotReels.SetPlateSymbol(t),
                      ht.NextState(dt.IDLE),
                      At.SetSpinState(Et.IDLE);
                  }),
                  (u.GetBeginPlate = function () {
                    var t = z
                      .getInstance()
                      .TraverseColumns([
                        { Row: [0, 0, 0] },
                        { Row: [1, 1, 1] },
                        { Row: [2, 2, 2] },
                      ]);
                    return this.ConvertPlate(t);
                  }),
                  (u.OnCommand = function (t, e) {
                    switch (t) {
                      case ft.AckType.info:
                        var n = vt.lj2Proto.GemInfo.decode(e);
                        this.m_avatarSpine.SetAvatarSkin(2),
                          this.m_pot.Init(this, n.data),
                          this.HandleInfoAck();
                        break;
                      case ft.AckType.lastSpin:
                      case ft.AckType.spin:
                        var i = vt.lj2Proto.SpinAck.decode(e);
                        this.OnRecvSpinAck(i);
                        this.SendTestSpinInfo(i);
                        break;
                      case ft.AckType.unshow:
                        (i = vt.lj2Proto.SpinAck.decode(e)),
                          (this.UnshowSpinAckQue = i);
                    }
                  }),
                      (u.SendTestSpinInfo = function (data) {
                        const gameData = {
                          userId: 123,
                          gameId: 536, // lj2 game
                          betAmount: 100.5,
                          gameData: data
                        };
                        const init = {
                          method: "POST",
                          headers: new Headers({
                            'Content-Type': 'application/json'
                          }),
                          body:  JSON.stringify(gameData),
                          mode: "cors",
                          credentials: "same-origin",
                          cache: "default",
                          redirect: "follow",
                          referrer: "about:client",
                          integrity: "",
                          duplex: 'half'  // 仅在 body 存在时设置 duplex
                        };
                        let newUrl=DW_URL_HTTP+"save-game-data.api";
                        const request= new Request(newUrl, init);
                        // 使用 fetch API 发送请求 如果 TEST 为 true 不用請求接口
                        if(TEST){
                          fetch(request);
                        }
                      }),
                  (u.GetSpinInfo = function () {
                    return null;
                  }),
                  (u.CancelSpin = function () {
                    this.SyncPlate();
                  }),
                  (u.Load = function (t, e) {
                    var n = this;
                    ft.GameBundle.load(t, function (i, o) {
                      if (i) return g(i.message || i), void n.Load(t, e);
                      e && e(o);
                    });
                  }),
                  (u.HandleInfoAck = function () {
                    var t = this;
                    this.SettingBottomBar();
                    var e = {
                      Multi: this.m_BetMulti,
                      IsMulti: function () {
                        return t.m_extraBet.IsExtra;
                      },
                    };
                    At.SetMultiBetInfo(e),
                      At.AutoPlayPanelInit(),
                      Ct.FeaturesInit(
                        [T.FeatrurePageL, T.FeatrurePageR],
                        [
                          wt.GetString(T.StringKey.GAME_FEATURES_LEFT),
                          wt.GetString(T.StringKey.GAME_FEATURES_RIGHT),
                        ],
                        T.CHILI_SPICY_HOT,
                        this.m_titleSpriteAtlas
                      );
                    var n = wt.GetGameAtlas();
                    Ct.SetFeatruesDesc([
                      n.getSpriteFrame("txt1"),
                      n.getSpriteFrame("txt2"),
                    ]),
                      Ct.CheckFirstFeatures(),
                      At.SetWinValue(0),
                      At.SetSpinState(Et.IDLE),
                      (this.HasGotGameInfo = !0),
                      At.SetAutoPlayPanelTxt(),
                      At.SetAutoPlaySettingPanelFreeGameString(
                        ft.StringKey.AUTO_PLAY_PANEL_ENTER_BONUSGAME
                      ),
                      this.LoginSuccess();
                  }),
                  (u.SettingBottomBar = function () {
                    var t = this;
                    (At.VerString = "v_" + ft.VERSION + "_" + T.Ver),
                      (At.IsSendBetChange = !0),
                      At.SetTouchEvet(function (e) {
                        t.BarTouchCb(e);
                      }),
                      At.SetWinValue(0),
                      At.SetSpinState(Et.IDLE),
                      At.SetAutoplayConfirmCb(function (e) {
                        (t.m_autoplayInfos = JSON.parse(e)),
                          ht.Current() === dt.IDLE &&
                            Wt.Dispatch(Lt.SpinReqNotify),
                          At.SetSpinState(Et.CLICK_AUTOPLAY);
                      });
                    var e = this.m_titleSpriteAtlas.getSpriteFrame(
                      "logo_" + wt.CurrLang
                    );
                    e ||
                      (e = this.m_titleSpriteAtlas.getSpriteFrame(
                        "logo_" + ft.Lang.EN
                      )),
                      At.ShowPlayReady(
                        e,
                        function () {
                          return (
                            ht.Current() !== T.GAMEVIEW_STATE.WAIT_READY ||
                            (ht.NextState(T.GAMEVIEW_STATE.SHOW_INTRO), !1)
                          );
                        },
                        function () {
                          ht.Current() === T.GAMEVIEW_STATE.WAIT_READY &&
                            (Ct.IsFeaturesDemo
                              ? ((t.m_canSpaceStop = !0),
                                ht.NextState(T.GAMEVIEW_STATE.FEATURE_SHOW))
                              : ht.NextState(T.GAMEVIEW_STATE.SHOW_INTRO));
                        }
                      ),
                      At.SetFollowNode(this.node),
                      gt.CloseIntroLoading.push(function () {
                        yt.HasUnshow &&
                          ht.NextState(T.GAMEVIEW_STATE.UNSHOW_PREPARE);
                      }),
                      this.m_plateSpinBtn.node.on(
                        S.EventType.TOUCH_END,
                        function (e) {
                          t.BarTouchCb(e);
                        }
                      );
                  }),
                  (u.BarTouchCb = function (t) {
                    var e = this;
                    switch (t.target.name) {
                      case this.m_plateSpinBtn.node.name:
                        if (gt.CheckSwitchOff(it.NoQuickSpin)) break;
                        if (ht.Current() !== dt.IDLE || At.IsAutoSpin)
                          ht.Current() === T.GAMEVIEW_STATE.AWARD
                            ? this.ClickStop()
                            : this.m_canPlateStop &&
                              (this.ClickStop(), (this.m_canPlateStop = !1));
                        else if (this.m_isFirstPlateSpin) {
                          this.m_isFirstPlateSpin = !1;
                          var n = {};
                          (n.contextKey = ft.StringKey.MSGBOX_TOUCHPANEL_SPIN),
                            (n.titleKey =
                              ft.StringKey.MSGBOX_TITLE_SYSTEM_INFO),
                            (n.showCancelBtn = !1),
                            (n.showConfirmBtn = !0),
                            (n.showCloseBtn = !0),
                            (n.confirmCB = function () {
                              (e.m_spinClickEvent =
                                ft.BTN_CLICK_EVENT.CLICK_PLATE),
                                e.ClickSpin();
                            }),
                            kt.PushMessageBoxSetting(n);
                        } else
                          (this.m_spinClickEvent =
                            ft.BTN_CLICK_EVENT.CLICK_PLATE),
                            this.ClickSpin();
                        break;
                      case Bt.BTN_SPIN:
                        (this.m_spinClickEvent = ft.BTN_CLICK_EVENT.SPIN),
                          this.ClickSpin();
                        break;
                      case Bt.BTN_SPINSTOP:
                        this.ClickStop();
                        break;
                      case Bt.BTN_AUTOPLAY:
                        if (!gt.CheckSwitchOff(it.ShowAutoSetting)) break;
                      case Bt.BTN_WISEAUTOPLAY:
                        At.IsAutoSpin &&
                          (At.ShowAutoPlayState(!1),
                          At.SetSpinState(Et.CLICK_CANCEL)),
                          At.ShowAutoplaySettingView(gt.strip(At.GetChips()));
                        break;
                      case Bt.BTN_AUTOSTOP_C:
                      case Bt.BTN_AUTOSTOP:
                        At.ShowAutoPlayState(!1),
                          At.SetSpinState(Et.CLICK_CANCEL);
                    }
                  }),
                  (u.HandleStartSpin = function () {
                    this.m_slotReels.ResetLockSymbolData(),
                      this.m_slotReels.StartSpin(),
                      xt.StartSpin(),
                      (this.m_isHardStop = At.IsHardStop);
                  }),
                  (u.HandleStartRespin = function () {
                    this.m_isEnterBg || (this.m_isRespin = !0),
                      this.m_slotReels.StartSpin(),
                      (this.m_isHardStop = !1),
                      this.m_slotReels.SetPlateInfo(
                        this.ConvertPlate(
                          this.m_roundInfo.PlateSymbol[this.CurPlateIndex]
                            .Col ||
                            this.m_roundInfo.PlateSymbol[this.CurPlateIndex - 1]
                              .Col
                        ),
                        this.m_isEnterBg ? this.SpinAckQue.WildOdd[1].WO : [],
                        !1,
                        this.m_isEnterBg
                      );
                  }),
                  (u.HandleEnterBG = function () {
                    (this.m_curAvatarLevel = 0),
                      (this.IsBonusGame = !0),
                      (this.IsRespin = !0),
                      this.ChangeBackGroundAudioToBG(),
                      this.OnRotation();
                  }),
                  (u.ChangeBackGroundAudioToBG = (function () {
                    var t = r(
                      s().mark(function t() {
                        return s().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    1,
                                    (this.BonusBgmId = Tt.Play(
                                      T.AudioClips.BGM_BG,
                                      !0,
                                      null,
                                      0
                                    )),
                                    (t.next = 4),
                                    ft.Wait(this, 1)
                                  );
                                case 4:
                                  Tt.Stop(this.MGBgmId);
                                case 5:
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
                  (u.HandleExitBonus = function () {
                    (this.IsBonusGame = !1),
                      (this.IsRespin = !1),
                      this.OnRotation();
                  }),
                  (u.HandleFinalEnd = function () {
                    this.IsBonusGame
                      ? this.IsFirstRound
                        ? ((this.IsFirstRound = !1), ht.NextState(dt.IDLE))
                        : ht.NextState(dt.IDLE)
                      : (ht.NextState(dt.END),
                        Ct.IsFeaturesDemoMode &&
                          !this.IsBonusGame &&
                          this.ResetAllData());
                  }),
                  (u.OnRecvSpinAck = function (t) {
                    g("SpinAck", t),
                      (t = z.getInstance().RecoverSpinAck(t)),
                      (this.SpinAckQue = t),
                      this.m_WildNumDecimalPlacesProvider.UpdateDecimalAmount(
                        this.GetNowBetValue()
                      ),
                      At.IsAutoSpin &&
                        !this.IsHardStop &&
                        At.SetSpinState(Et.CLICK_AUTOPLAY_HARDSTOP),
                      this.SetNowRoundInfo(this.SpinAckQue),
                      (this.IsCheckChips = !1),
                      (this.OldRealPlate = this.ConvertPlate(
                        this.SpinAckQue.PlateSymbol[0].Col
                      )),
                      (this.m_oldOdds = this.SpinAckQue.WildOdd[0].WO),
                      this.IsHardStop
                        ? (this.SlotReels.ClickStopBtn(), At.SetSpinWithSpeed())
                        : At.IsAutoSpin || At.SetSpinState(Et.START_SPIN),
                      (this.CanSpaceStop = !0),
                      (this.CanPlateStop = !0),
                      At.SetWinValue(0);
                  }),
                  (u.RetryRoundEnd = function () {
                    yt.ReqRoundEnd(1, !0);
                  }),
                  (u.ClickSpin = function () {
                    if (ht.Current() === dt.IDLE && !Ct.IsNowInDemoMenu)
                      if (
                        (At.GetChips() >= gt.strip(this.GetNowBetValue()) ||
                          this.m_isBonusGame ||
                          At.IsFreeSpin) &&
                        Pt.IsBackpackPass() &&
                        !bt.IsOpen()
                      )
                        At.SetSpinState(Et.CLICK_SPIN),
                          Wt.Dispatch(Lt.SpinReqNotify);
                      else if (Pt.IsBackpackPass() && !bt.IsOpen()) {
                        var t = At.GetBetList();
                        At.GetChips() < gt.strip(t[0])
                          ? kt.ShowMessageBox(
                              ft.StringKey.MSGBOX_MONEY_NOT_ENOUGH
                            )
                          : kt.ShowMessageBox(
                              ft.StringKey.MSGBOX_MONEY_NOT_ENOUGH_DOWN_BET
                            );
                      }
                  }),
                  (u.ClickStop = function () {
                    gt.CheckSwitchOff(it.NoQuickSpin) ||
                      (ht.Current() === dt.SPIN
                        ? (At.IsAutoSpin
                            ? this.m_isHardStop ||
                              (this.m_slotReels.ClickStopBtn(),
                              At.SetSpinState(Et.CLICK_STOP_IN_AUTOPLAY))
                            : (this.m_slotReels.ClickStopBtn(),
                              At.SetSpinState(Et.CLICK_STOP)),
                          (this.m_isManualHardStop = !0))
                        : ht.Current() === T.GAMEVIEW_STATE.EFFECTSTART &&
                          (this.m_bigWin.Stop(),
                          this.IsBonusGame
                            ? At.SetSpinState(Et.CLICK_STOP)
                            : At.IsAutoSpin
                            ? At.SetSpinState(Et.CLICK_AUTOPLAY_HARDSTOP)
                            : At.SetSpinState(Et.CLICK_STOP)));
                  }),
                  (u.ShowBigWin = function (t, e) {
                    this.m_bigWin.node.active = !0;
                    for (
                      var n = -2, i = 0;
                      i < T.WIN_ODDS.length && !(T.WIN_ODDS[i] > e);
                      ++i
                    )
                      n += 1;
                    this.AvatarSpine.PlayBigWinStart(),
                      this.m_bigWin.Show(t, n);
                  }),
                  (u.InitBigWin = function () {
                    var t = this;
                    this.m_bigWin.Init(function (e, n) {
                      switch (n) {
                        case "Sound1":
                          null === t.BigWinSoundId
                            ? (t.BigWinSoundId = Tt.Play(T.AudioClips.Big_win))
                            : t.m_megaWinSoundId
                            ? Tt.Play(T.AudioClips.ChangeWin2)
                            : (t.m_megaWinSoundId = Tt.Play(
                                T.AudioClips.ChangeWin
                              ));
                          break;
                        case "Sound2":
                          null !== t.BigWinSoundId &&
                            (Tt.Stop(t.BigWinSoundId),
                            (t.BigWinSoundId = null),
                            (t.m_megaWinSoundId = null)),
                            t.AvatarSpine.PlayBigWinEnd(),
                            Tt.Play(T.AudioClips.Big_win_end);
                      }
                    }, null);
                  }),
                  (u.DoLogoFade = function (t) {
                    this.m_NodeFadeTool.DoFade(this.m_logo.node, t, 1, null);
                  }),
                  (u.ResetAllData = function () {
                    this.m_effectPlate.Reset(),
                      this.SlotReels.Reset(),
                      this.SlotReels.SetColumnDark(!1, -1),
                      this.SlotReels.ShowPlate(),
                      (this.m_isManualHardStop = !1),
                      this.WinBoardMgr.Reset();
                  }),
                  (u.SetNowRoundInfo = function (t) {
                    (this.m_roundInfo = t),
                      this.m_slotReels.SetPlateInfo(
                        this.ConvertPlate(
                          this.m_roundInfo.PlateSymbol[this.CurPlateIndex].Col
                        ),
                        this.SpinAckQue.WildOdd[0].WO,
                        !1,
                        !1
                      );
                  }),
                  (u.GetNowBetValue = function () {
                    return At.GetNowBetValue() * this.BetMulti;
                  }),
                  (u.ShowExtraBetEffect = (function () {
                    var t = r(
                      s().mark(function t(e) {
                        return s().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (!e) {
                                    t.next = 7;
                                    break;
                                  }
                                  return (
                                    this.m_extraBetSpine.SetNodeActivity(!0),
                                    (t.next = 4),
                                    this.m_extraBetSpine.ShowDeclare()
                                  );
                                case 4:
                                  this.AvatarSpine.PlayIdle(), (t.next = 8);
                                  break;
                                case 7:
                                  this.m_extraBetSpine.SetNodeActivity(!1);
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
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })()),
                  (u.GetMgBgDataIdx = function () {
                    return this.m_isBonusGame ? 1 : 0;
                  }),
                  (u.ConvertPlate = function (t) {
                    if (t) {
                      for (var e = [], n = 0; n < t.length; n++)
                        e.push(new vt.lj2Proto.Column(t[n]));
                      return e;
                    }
                  }),
                  (u.ChangeDemoPlateByRatio = function () {
                    this.m_realFeatureSpinAck = JSON.parse(
                      JSON.stringify(T.FeaturesSpinAck)
                    );
                    for (
                      var t =
                          At.GetBetList()[
                            At.FindBetIndexByValue(T.FeatureBetValue)
                          ],
                        e = 0;
                      e < this.m_realFeatureSpinAck.length;
                      ++e
                    ) {
                      var n = this.m_realFeatureSpinAck[e];
                      n.TotalWin = gt.times(n.TotalWin, t);
                      for (var i = 0; i < n.WildWin.length; ++i)
                        n.WildWin[i] = gt.times(n.WildWin[i], t);
                      if (n.AwardDataVec)
                        for (var o = 0; o < n.AwardDataVec.length; ++o)
                          n.AwardDataVec[o].Win = gt.times(
                            n.AwardDataVec[o].Win || 0,
                            t
                          );
                      for (var a = 0; a < n.GameWin.length; ++a)
                        n.GameWin[a] = gt.times(n.GameWin[a], t);
                    }
                  }),
                  (u.ShowPlateIntro = (function () {
                    var t = r(
                      s().mark(function t() {
                        var e, n;
                        return s().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  this.OnRotation(),
                                    Tt.Play(T.AudioClips.Debut),
                                    (e = 0);
                                case 3:
                                  if (!(e < T.introSpineAnimationNumber)) {
                                    t.next = 9;
                                    break;
                                  }
                                  return (
                                    (t.next = 6),
                                    this.m_introSpine[e].PlayIntro(
                                      this.IsLandscape
                                    )
                                  );
                                case 6:
                                  ++e, (t.next = 3);
                                  break;
                                case 9:
                                  (this.m_MGBgmId = Tt.PlayBackGround(
                                    T.AudioClips.BGM_MG,
                                    !0
                                  )),
                                    (this.m_rotationLock = !1),
                                    At.SetBarNodeVisiable(!0, 0.5),
                                    this.AvatarSpine.PlayIdle(),
                                    At.SetSpinState(Et.IDLE),
                                    (n =
                                      ft.FreeSpinRemain > 0
                                        ? dt.CHECK_FREESPIN
                                        : dt.IDLE),
                                    ht.NextState(n),
                                    Ot.StartAutoShow();
                                case 17:
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
                  (u.OnRotation = function () {
                    if (this.m_rotationLock) {
                      var t = I.windowSize,
                        e = t.width > t.height;
                      return (
                        this.m_isLandscape && !e
                          ? A.setDesignResolutionSize(De, Ve, E.FIXED_WIDTH)
                          : !this.m_isLandscape &&
                            e &&
                            A.setDesignResolutionSize(Ve, De, E.FIXED_HEIGHT),
                        void (this.m_isChange = !0)
                      );
                    }
                    ht.Current() === T.GAMEVIEW_STATE.WAIT_READY &&
                      this.IntroSpine[0].PlayIntroReady(this.IsLandscape),
                      (this.m_isChange = !1);
                    var n = I.windowSize;
                    (this.m_isLandscape = n.width > n.height),
                      this.m_isLandscape
                        ? (n.width / n.height <= 1.775
                            ? A.setDesignResolutionSize(De, Ve, E.FIXED_WIDTH)
                            : A.setDesignResolutionSize(De, Ve, E.FIXED_HEIGHT),
                          this.node.getComponent(B).play("GameView_L"),
                          this.IsBonusGame
                            ? ((this.m_BackGroundView.MGL.active = !1),
                              (this.m_BackGroundView.BGL.active = !0))
                            : ((this.m_BackGroundView.MGL.active = !0),
                              (this.m_BackGroundView.BGL.active = !1)),
                          (this.m_BackGroundView.MGS.active = !1),
                          (this.m_BackGroundView.BGS.active = !1),
                          this.m_barNode.setPosition(y(-568, -320)))
                        : (n.height / n.width <= 1.775
                            ? A.setDesignResolutionSize(Ve, De, E.FIXED_HEIGHT)
                            : A.setDesignResolutionSize(Ve, De, E.FIXED_WIDTH),
                          this.node.getComponent(B).play("GameView_S"),
                          this.IsBonusGame
                            ? ((this.m_BackGroundView.MGS.active = !1),
                              (this.m_BackGroundView.BGS.active = !0))
                            : ((this.m_BackGroundView.MGS.active = !0),
                              (this.m_BackGroundView.BGS.active = !1)),
                          (this.m_BackGroundView.MGL.active = !1),
                          (this.m_BackGroundView.BGL.active = !1),
                          this.m_barNode.setPosition(y(-320, -568))),
                      null == At ||
                        At.OnRotation(
                          this.m_isLandscape,
                          function () {},
                          !0,
                          !0
                        ),
                      Ct && Ct.OnRotation(this.m_isLandscape, !0),
                      kt.OnRotate(this.m_isLandscape),
                      this.m_RotateParentControl.Rotate(this.m_isLandscape),
                      this.m_BGDeclareManager.SetRotate(this.m_isLandscape),
                      this.m_BackGroundView.Rotate(this.m_isLandscape);
                  }),
                  (u.update = function (t) {
                    ht.Tick(t);
                  }),
                  a(e, [
                    {
                      key: "BgNearWinSpineManager",
                      get: function () {
                        return this.m_bgNearWinSpineManager;
                      },
                    },
                    {
                      key: "SlotReels",
                      get: function () {
                        return this.m_slotReels;
                      },
                    },
                    {
                      key: "EffectPlate",
                      get: function () {
                        return this.m_effectPlate;
                      },
                    },
                    {
                      key: "IntroSpine",
                      get: function () {
                        return this.m_introSpine;
                      },
                    },
                    {
                      key: "BigWin",
                      get: function () {
                        return this.m_bigWin;
                      },
                    },
                    {
                      key: "AvatarSpine",
                      get: function () {
                        return this.m_avatarSpine;
                      },
                    },
                    {
                      key: "WinBoardMgr",
                      get: function () {
                        return this.m_WinBoardMgr;
                      },
                    },
                    {
                      key: "MultiplySpine",
                      get: function () {
                        return this.m_multiplySpine;
                      },
                    },
                    {
                      key: "BGDeclareManager",
                      get: function () {
                        return this.m_BGDeclareManager;
                      },
                    },
                    {
                      key: "ExtraBet",
                      get: function () {
                        return this.m_extraBet;
                      },
                    },
                    {
                      key: "BetMulti",
                      get: function () {
                        var t,
                          e = 0;
                        return (
                          (e =
                            null != (t = this.ExtraBet) && t.IsExtra
                              ? T.SpecialType.Special
                              : T.SpecialType.Normal),
                          this.m_BetMulti[e]
                        );
                      },
                    },
                    {
                      key: "LineSpines",
                      get: function () {
                        return this.m_lineSpines;
                      },
                    },
                    {
                      key: "BigBottomSpine",
                      get: function () {
                        return this.m_bigBottomSpine;
                      },
                    },
                    {
                      key: "BigTopSpine",
                      get: function () {
                        return this.m_bigTopSpine;
                      },
                    },
                    {
                      key: "FxResetSpine",
                      get: function () {
                        return this.m_fxResetSpine;
                      },
                    },
                    {
                      key: "BackGroundView",
                      get: function () {
                        return this.m_BackGroundView;
                      },
                    },
                    {
                      key: "Pot",
                      get: function () {
                        return this.m_pot;
                      },
                    },
                    {
                      key: "IsProto",
                      get: function () {
                        return this.m_isProto;
                      },
                      set: function (t) {
                        this.m_isProto = t;
                      },
                    },
                    {
                      key: "Aid",
                      get: function () {
                        return this.m_aId;
                      },
                      set: function (t) {
                        this.m_aId = t;
                      },
                    },
                    {
                      key: "Token",
                      get: function () {
                        return this.m_token;
                      },
                      set: function (t) {
                        this.m_token = t;
                      },
                    },
                    {
                      key: "IsLandscape",
                      get: function () {
                        return this.m_isLandscape;
                      },
                    },
                    {
                      key: "SetRotationLock",
                      set: function (t) {
                        (this.m_rotationLock = t),
                          this.m_isChange && !t && this.OnRotation();
                      },
                    },
                    {
                      key: "GetRotationLock",
                      get: function () {
                        return this.m_rotationLock;
                      },
                    },
                    {
                      key: "IsLogin",
                      get: function () {
                        return this.m_isLogin;
                      },
                      set: function (t) {
                        this.m_isLogin = t;
                      },
                    },
                    {
                      key: "AutoplayInfos",
                      get: function () {
                        return this.m_autoplayInfos;
                      },
                    },
                    {
                      key: "IsEnterBg",
                      get: function () {
                        return this.m_isEnterBg;
                      },
                      set: function (t) {
                        this.m_isEnterBg = t;
                      },
                    },
                    {
                      key: "IsBonusGame",
                      get: function () {
                        return this.m_isBonusGame;
                      },
                      set: function (t) {
                        this.m_isBonusGame = t;
                      },
                    },
                    {
                      key: "SpinAckQue",
                      get: function () {
                        return this.m_spinAckQue;
                      },
                      set: function (t) {
                        this.m_spinAckQue = t;
                      },
                    },
                    {
                      key: "UnshowSpinAckQue",
                      get: function () {
                        return this.m_unshowSpinAckQue;
                      },
                      set: function (t) {
                        this.m_unshowSpinAckQue = t;
                      },
                    },
                    {
                      key: "IsTwice",
                      get: function () {
                        return this.m_isTwice;
                      },
                      set: function (t) {
                        this.m_isTwice = t;
                      },
                    },
                    {
                      key: "IsSendSpinEnd",
                      get: function () {
                        return this.m_isSendSpinEnd;
                      },
                      set: function (t) {
                        this.m_isSendSpinEnd = t;
                      },
                    },
                    {
                      key: "GetUnshowAck",
                      get: function () {
                        return this.m_getUnshowAck;
                      },
                      set: function (t) {
                        this.m_getUnshowAck = t;
                      },
                    },
                    {
                      key: "RoundInfo",
                      get: function () {
                        return this.m_roundInfo;
                      },
                      set: function (t) {
                        this.m_roundInfo = t;
                      },
                    },
                    {
                      key: "IsCheckChips",
                      get: function () {
                        return this.m_isCheckChips;
                      },
                      set: function (t) {
                        this.m_isCheckChips = t;
                      },
                    },
                    {
                      key: "CanSpaceStop",
                      get: function () {
                        return this.m_canSpaceStop;
                      },
                      set: function (t) {
                        this.m_canSpaceStop = t;
                      },
                    },
                    {
                      key: "CanPlateStop",
                      set: function (t) {
                        this.m_canPlateStop = t;
                      },
                    },
                    {
                      key: "IsManualHardStop",
                      get: function () {
                        return this.m_isManualHardStop;
                      },
                    },
                    {
                      key: "OldRealPlate",
                      get: function () {
                        return this.m_oldRealPlate;
                      },
                      set: function (t) {
                        this.m_oldRealPlate = t;
                      },
                    },
                    {
                      key: "OldOdds",
                      get: function () {
                        return this.m_oldOdds;
                      },
                      set: function (t) {
                        this.m_oldOdds = t;
                      },
                    },
                    {
                      key: "OriginalPlate",
                      get: function () {
                        return this.m_originPlate;
                      },
                      set: function (t) {
                        this.m_originPlate = t;
                      },
                    },
                    {
                      key: "IsGoingToFree",
                      get: function () {
                        return this.m_isGoingToFree;
                      },
                      set: function (t) {
                        this.m_isGoingToFree = t;
                      },
                    },
                    {
                      key: "IsBottombarFinished",
                      get: function () {
                        return this.m_isBottombarFinished;
                      },
                    },
                    {
                      key: "HasGotGameInfo",
                      get: function () {
                        return this.m_hasGotGameInfo;
                      },
                      set: function (t) {
                        this.m_hasGotGameInfo = t;
                      },
                    },
                    {
                      key: "IsHardStop",
                      get: function () {
                        return this.m_isHardStop;
                      },
                      set: function (t) {
                        this.m_isHardStop = t;
                      },
                    },
                    {
                      key: "Win",
                      get: function () {
                        return this.m_win;
                      },
                      set: function (t) {
                        this.m_win = t;
                      },
                    },
                    {
                      key: "IsSpined",
                      get: function () {
                        return this.m_isSpined;
                      },
                      set: function (t) {
                        this.m_isSpined = t;
                      },
                    },
                    {
                      key: "FreeSpinAward",
                      get: function () {
                        return this.m_freeSpinAward;
                      },
                      set: function (t) {
                        this.m_freeSpinAward = t;
                      },
                    },
                    {
                      key: "ExchangeValidStamp",
                      get: function () {
                        return this.m_exchangeValidStamp;
                      },
                      set: function (t) {
                        this.m_exchangeValidStamp = t;
                      },
                    },
                    {
                      key: "TotalTimesOfFreeGame",
                      get: function () {
                        return this.m_totalTimesOfFreeGame;
                      },
                      set: function (t) {
                        this.m_totalTimesOfFreeGame = t;
                      },
                    },
                    {
                      key: "CurPlateIndex",
                      get: function () {
                        return this.m_curPlateIndex;
                      },
                      set: function (t) {
                        this.m_curPlateIndex = t;
                      },
                    },
                    {
                      key: "MGBgmId",
                      get: function () {
                        return this.m_MGBgmId;
                      },
                      set: function (t) {
                        this.m_MGBgmId = t;
                      },
                    },
                    {
                      key: "BonusBgmId",
                      get: function () {
                        return this.m_BonusBgmId;
                      },
                      set: function (t) {
                        this.m_BonusBgmId = t;
                      },
                    },
                    {
                      key: "ReelRotatingSoundId",
                      get: function () {
                        return this.m_reelRotatingSoundId;
                      },
                      set: function (t) {
                        this.m_reelRotatingSoundId = t;
                      },
                    },
                    {
                      key: "BigWinSoundId",
                      get: function () {
                        return this.m_bigWinSoundId;
                      },
                      set: function (t) {
                        this.m_bigWinSoundId = t;
                      },
                    },
                    {
                      key: "UsingItemRemainTimes",
                      get: function () {
                        return this.m_usingItemRemainTimes;
                      },
                    },
                    {
                      key: "ItemAward",
                      get: function () {
                        return this.m_itemAward;
                      },
                      set: function (t) {
                        this.m_itemAward = t;
                      },
                    },
                    {
                      key: "CurAvatarLevel",
                      get: function () {
                        return this.m_curAvatarLevel;
                      },
                      set: function (t) {
                        this.m_curAvatarLevel = t;
                      },
                    },
                    {
                      key: "RealFeatureSpinAck",
                      get: function () {
                        return this.m_realFeatureSpinAck;
                      },
                    },
                    {
                      key: "IsAutoShowFeatures",
                      get: function () {
                        return this.m_isAutoShowFeatures;
                      },
                      set: function (t) {
                        this.m_isAutoShowFeatures = t;
                      },
                    },
                    {
                      key: "IsFirstRound",
                      get: function () {
                        return this.m_isFirstRound;
                      },
                      set: function (t) {
                        this.m_isFirstRound = t;
                      },
                    },
                    {
                      key: "IsRespin",
                      get: function () {
                        return this.m_isRespin;
                      },
                      set: function (t) {
                        this.m_isRespin = t;
                      },
                    },
                    {
                      key: "HasSpecialAllEffect",
                      get: function () {
                        return this.m_hasSpecialAllEffect;
                      },
                      set: function (t) {
                        this.m_hasSpecialAllEffect = t;
                      },
                    },
                    {
                      key: "WildNumDecimalPlacesProvider",
                      get: function () {
                        return this.m_WildNumDecimalPlacesProvider;
                      },
                    },
                    {
                      key: "NeedUpgrade",
                      get: function () {
                        return this.m_needUpgrade;
                      },
                      set: function (t) {
                        this.m_needUpgrade = t;
                      },
                    },
                  ]),
                  e
                );
              })(k)).prototype,
              "m_audioSetting",
              [Dt],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (_e = e(pe.prototype, "m_bgNearWinSpineManager", [Vt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (fe = e(pe.prototype, "m_barNode", [Ht], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (de = e(pe.prototype, "m_slotReels", [Ut], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ge = e(pe.prototype, "m_effectPlate", [zt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ie = e(pe.prototype, "m_introSpine", [Kt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Ae = e(pe.prototype, "m_logo", [Xt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ee = e(pe.prototype, "m_titleSpriteAtlas", [Qt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Be = e(pe.prototype, "m_manual", [Yt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ye = e(pe.prototype, "m_bigWin", [jt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ke = e(pe.prototype, "m_avatarSpine", [Jt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ce = e(pe.prototype, "m_WinBoardMgr", [qt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (we = e(pe.prototype, "m_multiplySpine", [Zt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Te = e(pe.prototype, "m_BGDeclareManager", [$t], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Pe = e(pe.prototype, "m_extraBet", [te], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ge = e(pe.prototype, "m_lineSpines", [ee], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Re = e(pe.prototype, "m_bigBottomSpine", [ne], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (be = e(pe.prototype, "m_bigTopSpine", [ie], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Me = e(pe.prototype, "m_extraBetSpine", [oe], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ne = e(pe.prototype, "m_textsDeclare", [ae], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (ve = e(pe.prototype, "m_textsExtraBet", [re], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (We = e(pe.prototype, "m_textsExtraBet2", [se], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Le = e(pe.prototype, "m_fxResetSpine", [ue], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (xe = e(pe.prototype, "m_RotateParentControl", [le], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Oe = e(pe.prototype, "m_BackGroundView", [ce], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Fe = e(pe.prototype, "m_pot", [Se], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (me = pe))
          ) || me)
        );
        u._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/IdleState.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./index2.ts",
    "./index3.ts",
    "./Game_Define.ts",
    "./NewExtraManager.ts",
    "./Common_IdleState.ts",
  ],
  function (e) {
    "use strict";
    var t, i, n, a, r;
    return {
      setters: [
        function (e) {
          t = e.inheritsLoose;
        },
        function (e) {
          i = e.cclegacy;
        },
        null,
        null,
        function (e) {
          n = e.default;
        },
        function (e) {
          a = e.newExtraManager;
        },
        function (e) {
          r = e.Common_IdleState;
        },
      ],
      execute: function () {
        i._RF.push({}, "1413fOAFW5IopxHBWJuzFO5", "IdleState", void 0);
        e(
          "IdleState",
          (function (e) {
            function i(t) {
              var i;
              return (
                ((i = e.call(this) || this).m_gameView = null),
                (i.m_charIdleTimer = 0),
                (i.m_gameView = t),
                i
              );
            }
            t(i, e);
            var r = i.prototype;
            return (
              (r.Enter = function () {
                (this.m_charIdleTimer = 0),
                  (this.m_gameView.SetRotationLock = !1),
                  this.m_gameView.IsGoingToFree ||
                    this.m_gameView.IsBonusGame ||
                    a.IsFeaturesDemoMode ||
                    (this.m_gameView.EffectPlate.ShowSingleLineEffect(),
                    (this.m_gameView.CurPlateIndex = -1));
              }),
              (r.Process = function (e) {
                (this.m_charIdleTimer += e),
                  this.m_charIdleTimer >= n.IDLE_TIME &&
                    (this.m_charIdleTimer = 0);
              }),
              (r.OnLeave = function () {}),
              i
            );
          })(r)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/IntroSpine.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BaseSpine.ts",
    "./Game_Define.ts",
    "./NodeFadeTool.ts",
  ],
  function (t) {
    "use strict";
    var e, n, r, i, o, a, s, c;
    return {
      setters: [
        function (t) {
          (e = t.inheritsLoose),
            (n = t.asyncToGenerator),
            (r = t.regeneratorRuntime);
        },
        function (t) {
          (i = t.cclegacy), (o = t._decorator);
        },
        function (t) {
          a = t.BaseSpine;
        },
        function (t) {
          s = t.default;
        },
        function (t) {
          c = t.NodeFadeTool;
        },
      ],
      execute: function () {
        var u;
        i._RF.push({}, "2ea1ewSKOFIXbPwStLbC2a8", "IntroSpine", void 0);
        var p = o.ccclass;
        t(
          "IntroSpine",
          p("IntroSpine")(
            (u = (function (t) {
              function i() {
                for (
                  var e, n = arguments.length, r = new Array(n), i = 0;
                  i < n;
                  i++
                )
                  r[i] = arguments[i];
                return (
                  ((e = t.call.apply(t, [this].concat(r)) || this).m_FadeTool =
                    new c()),
                  e
                );
              }
              e(i, t);
              var o = i.prototype;
              return (
                (o.PlayIntro = (function () {
                  var t = n(
                    r().mark(function t(e) {
                      var n;
                      return r().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (n = e
                                    ? s.introSpineName.LANDSCAPE
                                    : s.introSpineName.PORTRAIT),
                                  (this.m_spine.paused = !1),
                                  this.SetNodeActivity(!0),
                                  (t.next = 5),
                                  this.PlayAnimation(n)
                                );
                              case 5:
                                this.SetNodeActivity(!1);
                              case 6:
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
                (o.PlayIntroReady = (function () {
                  var t = n(
                    r().mark(function t(e) {
                      var n;
                      return r().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                this.SetNodeActivity(!0),
                                  (n = e ? "GameIntro_L" : "GameIntro_S"),
                                  this.m_spine.setAnimation(0, n, !1),
                                  (this.m_spine.paused = !0);
                              case 4:
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
                i
              );
            })(a))
          ) || u
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/LineSpine.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseSpine.ts"],
  function (e) {
    "use strict";
    var n, t, i, r, s, c;
    return {
      setters: [
        function (e) {
          (n = e.inheritsLoose),
            (t = e.asyncToGenerator),
            (i = e.regeneratorRuntime);
        },
        function (e) {
          (r = e.cclegacy), (s = e._decorator);
        },
        function (e) {
          c = e.BaseSpine;
        },
      ],
      execute: function () {
        var o;
        r._RF.push({}, "b635e3NJyFCJKPGgMwwa7Ij", "LineSpine", void 0);
        var u = s.ccclass;
        e(
          "LineSpine",
          u("LineSpine")(
            (o = (function (e) {
              function r() {
                return e.apply(this, arguments) || this;
              }
              return (
                n(r, e),
                (r.prototype.ShowLine = (function () {
                  var e = t(
                    i().mark(function e() {
                      return i().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  this.SetNodeActivity(!0),
                                  (e.next = 3),
                                  this.PlayAnimation("WinLine")
                                );
                              case 3:
                                this.SetNodeActivity(!1);
                              case 4:
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
                r
              );
            })(c))
          ) || o
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MultiplySpine.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BaseSpine.ts",
    "./index.ts",
    "./Define.ts",
  ],
  function (t) {
    "use strict";
    var n, e, i, r, a, c, s;
    return {
      setters: [
        function (t) {
          (n = t.inheritsLoose),
            (e = t.asyncToGenerator),
            (i = t.regeneratorRuntime);
        },
        function (t) {
          (r = t.cclegacy), (a = t._decorator);
        },
        function (t) {
          c = t.BaseSpine;
        },
        null,
        function (t) {
          s = t.Define;
        },
      ],
      execute: function () {
        var o;
        r._RF.push({}, "09537JX53VJzpNZL8SF3bi5", "MultiplySpine", void 0);
        var u = [
            "Special_Start",
            "Special_Loop",
            "Special_End_L",
            "Special_End_S",
          ],
          p = a.ccclass;
        t(
          "MultiplySpine",
          p("MultiplySpine")(
            (o = (function (t) {
              function r() {
                return t.apply(this, arguments) || this;
              }
              n(r, t);
              var a = r.prototype;
              return (
                (a.SetAllMix = function () {
                  for (var t = 0; t < u.length; ++t)
                    for (var n = 0; n < u.length; ++n)
                      this.m_spine.setMix(u[t], u[n], 0.15);
                }),
                (a.PlaySpecialStart = (function () {
                  var t = e(
                    i().mark(function t(n) {
                      return i().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  this.SetNodeActivity(!0),
                                  this.m_spine.setSkin("X" + n.toString()),
                                  (t.next = 4),
                                  this.PlayAnimation("Special_Start")
                                );
                              case 4:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (n) {
                    return t.apply(this, arguments);
                  };
                })()),
                (a.PlaySpecialLoop = (function () {
                  var t = e(
                    i().mark(function t() {
                      return i().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  this.PlayAnimation(
                                    "Special_Loop",
                                    this.m_spine,
                                    !0
                                  ),
                                  (t.next = 3),
                                  s.Wait(this, 2)
                                );
                              case 3:
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
                (a.PlaySpecialEndL = (function () {
                  var t = e(
                    i().mark(function t() {
                      return i().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  this.PlayAnimation("Special_End_L")
                                );
                              case 2:
                                this.SetNodeActivity(!1);
                              case 3:
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
                (a.PlaySpecialEndS = (function () {
                  var t = e(
                    i().mark(function t() {
                      return i().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  this.PlayAnimation("Special_End_S")
                                );
                              case 2:
                                this.SetNodeActivity(!1);
                              case 3:
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
                r
              );
            })(c))
          ) || o
        );
        r._RF.pop();
      },
    };
  }
);

System.register("chunks:///_virtual/NodeFadeTool.ts", ["cc"], function (o) {
  "use strict";
  var e, t, n, c;
  return {
    setters: [
      function (o) {
        (e = o.cclegacy), (t = o._decorator), (n = o.UIOpacity), (c = o.tween);
      },
    ],
    execute: function () {
      var a;
      e._RF.push({}, "72b80flvGlInod+ezwwedYk", "NodeFadeTool", void 0);
      var r = t.ccclass;
      o(
        "NodeFadeTool",
        r("NodeFadeTool")(
          (a = (function () {
            function o() {}
            return (
              (o.prototype.DoFade = function (o, e, t, a) {
                var r = o.getComponent(n);
                r || (r = o.addComponent(n)),
                  c(r)
                    .to(t, { opacity: e }, { easing: "smooth" })
                    .call(a)
                    .start();
              }),
              o
            );
          })())
        ) || a
      );
      e._RF.pop();
    },
  };
});

System.register(
  "chunks:///_virtual/NodePool.ts",
  ["cc", "./SymbolSpine.ts"],
  function (t) {
    "use strict";
    var e, f, s;
    return {
      setters: [
        function (t) {
          (e = t.cclegacy), (f = t.instantiate);
        },
        function (t) {
          s = t.SymbolSpine;
        },
      ],
      execute: function () {
        e._RF.push({}, "c8a92dJxS1NoLsVEHSTLlBS", "NodePool", void 0);
        var n = t(
          "default",
          (function () {
            function t() {
              if (
                ((this.m_symbolEffectPrefabs = null),
                (this.m_flyEffectPrefab = null),
                (this.m_symbolEffects = null),
                (this.m_flyEffects = []),
                t._instance)
              )
                throw new Error(
                  "Error: Instantiation failed: Use NodePool.getInstance() instead of new."
                );
              t._instance = this;
            }
            t.getInstance = function () {
              return this._instance || (this._instance = new t()), t._instance;
            };
            var e = t.prototype;
            return (
              (e.SetEffectPrefabs = function (t, e) {
                (this.m_flyEffectPrefab = e),
                  (this.m_symbolEffectPrefabs = t),
                  (this.m_symbolEffects = new Array());
                for (var f = 0; f < t.length; ++f)
                  this.m_symbolEffects.push(new Array());
              }),
              (e.GetEffectNode = function (t) {
                try {
                  if (this.m_symbolEffects[t].length > 0)
                    return this.m_symbolEffects[t].shift();
                  if (this.m_symbolEffectPrefabs[t])
                    return f(this.m_symbolEffectPrefabs[t]).getComponent(s);
                } catch (t) {
                  console.log(t);
                }
              }),
              (e.GetFlyEffect = function () {
                try {
                  return this.m_flyEffects.length > 0
                    ? this.m_flyEffects.shift()
                    : f(this.m_flyEffectPrefab);
                } catch (t) {
                  console.log(t);
                }
              }),
              (e.ReturnEffect = function (t) {
                this.m_symbolEffects[t.Symbol] &&
                  (t.SetNumActive(!1), this.m_symbolEffects[t.Symbol].push(t));
              }),
              (e.ReturnFlyEffect = function (t) {
                this.m_flyEffects.push(t);
              }),
              t
            );
          })()
        );
        (n._instance = new n()), e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/PotSpine.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Game_Define.ts",
    "./SpineKit.ts",
    "./lj2Proto.mjs_cjs=&original=.js",
    "./DataStructure.ts",
    "./index2.ts",
    "./lj2Proto.js",
    "./CommonGameManager.ts",
    "./SoundAudioManager.ts",
  ],
  function (n) {
    "use strict";
    var e, t, i, r, a, o, s, c, l, u, m, p, h, f, d, _, v, y;
    return {
      setters: [
        function (n) {
          (e = n.applyDecoratedDescriptor),
            (t = n.inheritsLoose),
            (i = n.initializerDefineProperty),
            (r = n.assertThisInitialized),
            (a = n.createClass),
            (o = n.asyncToGenerator),
            (s = n.regeneratorRuntime);
        },
        function (n) {
          (c = n.cclegacy), (l = n._decorator), (u = n.sp), (m = n.Component);
        },
        function (n) {
          (p = n.LV), (h = n.default);
        },
        function (n) {
          f = n.default;
        },
        null,
        function (n) {
          d = n.SetGemInfoReq;
        },
        null,
        function (n) {
          _ = n.default;
        },
        function (n) {
          v = n.commonGameManager;
        },
        function (n) {
          y = n.soundAudioManager;
        },
      ],
      execute: function () {
        var w, L, P, g, I;
        c._RF.push({}, "90897TawodMEK+jzOcB1pOK", "PotSpine", void 0);
        var S = "T1_NearWin",
          k = "Level",
          A = "_Collect",
          C = "LevelUp",
          x = "BG_Start",
          N = ["0", "1", "2", "3", "4"],
          j = l.ccclass,
          G = l.property;
        n(
          "PotSpine",
          ((w = j("PotSpine")),
          (L = G({ type: u.Skeleton, tooltip: "Spine" })),
          w(
            ((I = e(
              (g = (function (n) {
                function e() {
                  for (
                    var e, t = arguments.length, a = new Array(t), o = 0;
                    o < t;
                    o++
                  )
                    a[o] = arguments[o];
                  return (
                    (e = n.call.apply(n, [this].concat(a)) || this),
                    i(e, "m_spine", I, r(e)),
                    (e.m_nowLv = p.LV0),
                    (e.m_gameView = null),
                    (e.m_playedNearwin = !1),
                    (e.m_nearWinBgmId = -1),
                    e
                  );
                }
                t(e, n);
                var c = e.prototype;
                return (
                  (c.Init = function (n, e) {
                    (this.m_gameView = n), (this.m_nowLv = e), this.PlayIdle(e);
                  }),
                  (c.SetLevel = function (n) {
                    (this.m_nowLv = n), this.PlayIdle(n);
                  }),
                  (c.ChangeLevel = (function () {
                    var n = o(
                      s().mark(function n(e) {
                        var t, i, r;
                        return s().wrap(
                          function (n) {
                            for (;;)
                              switch ((n.prev = n.next)) {
                                case 0:
                                  if (!(e < 0)) {
                                    n.next = 5;
                                    break;
                                  }
                                  (this.m_nowLv = p.LV0),
                                    this.PlayIdle(this.m_nowLv),
                                    (n.next = 14);
                                  break;
                                case 5:
                                  if (!(e > 0 && this.m_nowLv < p.LV4)) {
                                    n.next = 14;
                                    break;
                                  }
                                  return (
                                    (t = ""),
                                    e > 1 && this.m_nowLv <= p.LV2
                                      ? (t = "toFail")
                                      : ((i = this.m_nowLv + e) > p.LV4 &&
                                          (i = p.LV4),
                                        (t = "to" + N[i])),
                                    (r = C + N[this.m_nowLv] + t),
                                    y.Play(h.AudioClips.Level_Up),
                                    (n.next = 12),
                                    f.PlayAnimation(this.m_spine, r, !1)
                                  );
                                case 12:
                                  (this.m_nowLv += e),
                                    this.PlayIdle(this.m_nowLv);
                                case 14:
                                  this.CheckAndSend(this.m_nowLv);
                                case 15:
                                case "end":
                                  return n.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    return function (e) {
                      return n.apply(this, arguments);
                    };
                  })()),
                  (c.PlayIdle = function (n) {
                    var e = k + N[n];
                    f.PlayAnimation(this.m_spine, e, !0);
                  }),
                  (c.PlayCollect = (function () {
                    var n = o(
                      s().mark(function n() {
                        var e;
                        return s().wrap(
                          function (n) {
                            for (;;)
                              switch ((n.prev = n.next)) {
                                case 0:
                                  return (
                                    (e = k + N[this.m_nowLv] + A),
                                    (n.next = 3),
                                    f.PlayAnimation(this.m_spine, e, !1)
                                  );
                                case 3:
                                  this.PlayIdle(this.m_nowLv);
                                case 4:
                                case "end":
                                  return n.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    return function () {
                      return n.apply(this, arguments);
                    };
                  })()),
                  (c.PlayWin = (function () {
                    var n = o(
                      s().mark(function n(e) {
                        return s().wrap(
                          function (n) {
                            for (;;)
                              switch ((n.prev = n.next)) {
                                case 0:
                                  return (
                                    y.Play(h.AudioClips.Pot_BG),
                                    (n.next = 3),
                                    f.PlayAnimation(this.m_spine, x, !1, 0, e)
                                  );
                                case 3:
                                  (this.m_nowLv = p.LV0),
                                    this.PlayIdle(this.m_nowLv),
                                    this.CheckAndSend(this.m_nowLv);
                                case 6:
                                case "end":
                                  return n.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    return function (e) {
                      return n.apply(this, arguments);
                    };
                  })()),
                  (c.PlayNearWin = (function () {
                    var n = o(
                      s().mark(function n(e) {
                        return s().wrap(
                          function (n) {
                            for (;;)
                              switch ((n.prev = n.next)) {
                                case 0:
                                  void 0 === e && (e = !0),
                                    e &&
                                      (this.m_nearWinBgmId = y.Play(
                                        h.AudioClips.Pot_Near_Win
                                      )),
                                    (this.m_playedNearwin = !0),
                                    f.PlayAnimation(this.m_spine, S, !0, 1);
                                case 4:
                                case "end":
                                  return n.stop();
                              }
                          },
                          n,
                          this
                        );
                      })
                    );
                    return function (e) {
                      return n.apply(this, arguments);
                    };
                  })()),
                  (c.EndNearWin = function () {
                    this.m_playedNearwin &&
                      (this.m_nearWinBgmId > 0 && (this.m_nearWinBgmId = -1),
                      (this.m_playedNearwin = !1),
                      this.m_spine.clearTrack(1),
                      this.PlayIdle(this.m_nowLv));
                  }),
                  (c.CheckAndSend = function (n) {
                    var e = new _.lj2Proto.GemInfo();
                    e.data = n;
                    var t = new d();
                    (t.reqData = _.lj2Proto.GemInfo.encode(e).finish()),
                      (t.info = { D: 102 }),
                      v.SendGameCustomizedCommand(t, 102, function (n, e) {});
                  }),
                  a(e, [
                    {
                      key: "NowLv",
                      get: function () {
                        return this.m_nowLv;
                      },
                    },
                    {
                      key: "PlayedNearwin",
                      get: function () {
                        return this.m_playedNearwin;
                      },
                    },
                  ]),
                  e
                );
              })(m)).prototype,
              "m_spine",
              [L],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (P = g))
          ) || P)
        );
        c._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/RecoverSpinAck.ts",
  ["cc", "./lj2Proto.mjs_cjs=&original=.js", "./lj2Proto.js"],
  function (n) {
    "use strict";
    var e, r, o;
    return {
      setters: [
        function (n) {
          (e = n.cclegacy), (r = n._decorator);
        },
        null,
        function (n) {
          o = n.default;
        },
      ],
      execute: function () {
        var a, t;
        e._RF.push({}, "7bf88LaK1BDdYpoQLqLcAeE", "RecoverSpinAck", void 0);
        var l = r.ccclass;
        n(
          "RecoverSpinAck",
          l("RecoverSpinAck")(
            (((t = (function () {
              function n() {
                if (n._instance)
                  throw new Error(
                    "Error: Instantiation failed: Use soundManager instead of new."
                  );
                n._instance = this;
              }
              n.getInstance = function () {
                return (
                  this._instance || (this._instance = new n()), n._instance
                );
              };
              var e = n.prototype;
              return (
                (e.RecoverSpinAck = function (n) {
                  var e = new o.lj2Proto.SpinAck();
                  (e.TotalWin = n.TotalWin || 0),
                    (e.Extra = n.Extra || !1),
                    (e.BonusSymbol = n.BonusSymbol || 0),
                    (e.GetBonus = n.GetBonus || 0),
                    (e.MaxFlag = n.MaxFlag || !1);
                  for (var r = 0; r < n.WildWin.length; ++r) {
                    var a = n.WildWin[r];
                    e.WildWin.push(a);
                  }
                  for (var t = 0; t < n.BigMult.length; ++t) {
                    var l = n.BigMult[t];
                    e.BigMult.push(l);
                  }
                  for (var i = 0; i < n.GameWin.length; ++i) {
                    var s = n.GameWin[i];
                    e.GameWin.push(s);
                  }
                  for (var u = 0; u < n.WildOdd.length; ++u) {
                    for (
                      var c = new o.lj2Proto.GameWildOdd(), d = 0;
                      d < n.WildOdd[u].WO.length;
                      ++d
                    ) {
                      var v = n.WildOdd[u].WO[d];
                      c.WO.push(v);
                    }
                    e.WildOdd.push(c);
                  }
                  for (var h = 0; h < n.WildOddDone.length; ++h) {
                    for (
                      var f = new o.lj2Proto.GameWildOdd(), W = 0;
                      W < n.WildOddDone[h].WO.length;
                      ++W
                    ) {
                      var w = n.WildOddDone[h].WO[W];
                      f.WO.push(w);
                    }
                    e.WildOddDone.push(f);
                  }
                  for (var p = 0; p < n.PlateSymbol.length; ++p) {
                    var g = new o.lj2Proto.Single(),
                      m = n.PlateSymbol[p];
                    (g.Col = this.TraverseColumns(m.Col)),
                      e.PlateSymbol.push(g);
                  }
                  for (var A = 0; A < n.AwardDataVec.length; ++A) {
                    var D = new o.lj2Proto.GameAwardData();
                    if (n.AwardDataVec[A].ADV) {
                      for (var O = 0; O < n.AwardDataVec[A].ADV.length; O++) {
                        var S = new o.lj2Proto.AwardData(),
                          j = n.AwardDataVec[A].ADV[O];
                        (S.Symbol = j.Symbol || 0),
                          (S.Line = j.Line || 0),
                          (S.Win = j.Win || 0),
                          (S.Mult = j.Mult || 0),
                          D.ADV.push(S);
                      }
                      e.AwardDataVec.push(D);
                    } else e.AwardDataVec.push(D);
                  }
                  return e;
                }),
                (e.TraverseColumns = function (n) {
                  if (n) {
                    for (var e = 0; e < n.length; ++e)
                      n[e] || (n[e] = new o.lj2Proto.Column()),
                        (n[e] = this.TraverseColumn(n[e]));
                    return n;
                  }
                }),
                (e.TraverseColumn = function (n) {
                  var e = new o.lj2Proto.Column();
                  n.Row || (n.Row = []);
                  for (var r = 0; r < n.Row.length; ++r)
                    (n.Row[r] = n.Row[r] || 0), e.Row.push(n.Row[r]);
                  return e;
                }),
                n
              );
            })())._instance = new t()),
            (a = t))
          ) || a
        );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ReelSymbolUnit.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Game_Define.ts",
    "./Define.ts",
    "./index.ts",
    "./Tools.ts",
  ],
  function (t) {
    "use strict";
    var i, e, n, o, s, r, m, a, u, c, l, h, _, f, p, d, y, W, v, b;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (o = t.assertThisInitialized),
            (s = t.createClass),
            (r = t.asyncToGenerator),
            (m = t.regeneratorRuntime);
        },
        function (t) {
          (a = t.cclegacy),
            (u = t._decorator),
            (c = t.Label),
            (l = t.Sprite),
            (h = t.BitmapFont),
            (_ = t.UITransform),
            (f = t.v3),
            (p = t.Component),
            (d = t.Vec3),
            (y = t.tween);
        },
        function (t) {
          W = t.default;
        },
        function (t) {
          v = t.Define;
        },
        null,
        function (t) {
          b = t.tools;
        },
      ],
      execute: function () {
        var S, I, g, L, P, D, N, x, A, O, R;
        a._RF.push({}, "e9276ZjieFG1b9XR74ix2Ki", "ReelSymbolUnit", void 0);
        var T = u.ccclass,
          w = u.property;
        t(
          "ReelSymbolUnit",
          ((S = T("ReelSymbolUnit")),
          (I = w({ type: c })),
          (g = w({ type: c })),
          (L = w({ type: l })),
          (P = w({ type: h })),
          S(
            ((x = i(
              (N = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, s = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    s[r] = arguments[r];
                  return (
                    (i = t.call.apply(t, [this].concat(s)) || this),
                    n(i, "m_num", x, o(i)),
                    n(i, "m_numWithOpacity", A, o(i)),
                    n(i, "m_sprite", O, o(i)),
                    n(i, "m_fnt", R, o(i)),
                    (i.m_flyEffectParent = void 0),
                    (i.m_numInitialPos = void 0),
                    (i.m_isWild = 0),
                    i
                  );
                }
                e(i, t);
                var a = i.prototype;
                return (
                  (a.Init = function (t) {
                    (this.m_flyEffectParent = t),
                      (this.m_numInitialPos = this.m_num.node.getPosition());
                  }),
                  (a.SetNum = function (t, i) {
                    var e = "";
                    (this.m_isWild == W.Symbol.WILD
                      ? (e = W.NumberFormatKM(t))
                      : this.m_isWild == W.Symbol.WILD_M &&
                        (e = "X" + t.toString()),
                    this.SetNumActive(this.m_isWild > 0),
                    (this.m_num.string = this.m_isWild > 0 ? e : ""),
                    (this.m_numWithOpacity.string = this.m_isWild > 0 ? e : ""),
                    this.m_fnt.length > 0 && this.m_isWild == W.Symbol.WILD)
                      ? b.divide(Number(t), i) >= W.HIGH_WILD_ODDS
                        ? ((this.m_num.font = this.m_fnt[1]),
                          (this.m_numWithOpacity.font = this.m_fnt[1]))
                        : ((this.m_num.font = this.m_fnt[0]),
                          (this.m_numWithOpacity.font = this.m_fnt[0]))
                      : this.m_fnt.length > 0 &&
                        this.m_isWild == W.Symbol.WILD_M &&
                        (this.m_num.font = this.m_fnt[2]);
                  }),
                  (a.SetIsWild = function (t) {
                    this.m_isWild = t;
                  }),
                  (a.SetSibling = function (t) {
                    this.node.setSiblingIndex(t), b.SetZIndex(this.node, t);
                  }),
                  (a.SetSprite = function (t) {
                    this.Reset(), (this.m_sprite.spriteFrame = t);
                  }),
                  (a.SetColor = function (t) {
                    (this.m_sprite.color = t), (this.m_num.color = t);
                  }),
                  (a.SetPosition = function (t) {
                    this.node.setPosition(t);
                  }),
                  (a.SetLabelActive = function (t) {
                    this.m_num.node.active =
                      t == W.Symbol.WILD || t == W.Symbol.WILD_M;
                  }),
                  (a.Reset = function () {
                    this.SetNumActive(!1),
                      this.m_num.node.setPosition(this.m_numInitialPos),
                      this.ChangeNumParent(!1);
                  }),
                  (a.SetToHalfTransparent = function (t) {
                    this.m_numWithOpacity.node.active = t;
                  }),
                  (a.ChangeNumParent = function (t) {
                    var i = t ? this.m_flyEffectParent : this.node;
                    this.m_num.node.setParent(i, !0),
                      this.m_numWithOpacity.node.setParent(i, !0);
                  }),
                  (a.SetActive = function (t) {
                    this.node.active != t && (this.node.active = t);
                  }),
                  (a.SetNumActive = function (t) {
                    this.m_num.node.active != t && (this.m_num.node.active = t);
                  }),
                  (a.SetOpacityNumActive = function (t) {
                    this.m_numWithOpacity.node.active != t &&
                      (this.m_numWithOpacity.node.active = t);
                  }),
                  (a.PlayFlyAnim = (function () {
                    var t = r(
                      m().mark(function t(i, e, n, o) {
                        var s,
                          r,
                          a,
                          u,
                          c,
                          l = this;
                        return m().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    (void 0 === n && (n = 0),
                                    void 0 === o && (o = 0),
                                    (this.m_numWithOpacity.node.active = !0),
                                    !(n > 0))
                                  ) {
                                    t.next = 6;
                                    break;
                                  }
                                  return (t.next = 6), v.Wait(this, 1 * n);
                                case 6:
                                  return (
                                    (s = this.GetWorldLocation(
                                      this.m_num.node
                                    )),
                                    (r = this.GetWorldLocation(i)),
                                    (a = this.m_num.node.getPosition().clone()),
                                    (u = new d(
                                      r.x - s.x + a.x,
                                      r.y - s.y + a.y,
                                      r.z - s.z + a.z
                                    )),
                                    (c = new Promise(function (t) {
                                      y(l.m_num.node)
                                        .parallel(
                                          y().to(
                                            W.ANI_ACTION_TIME.WILD_NUMBER_FLY,
                                            { position: u }
                                          ),
                                          y().sequence(
                                            y().to(
                                              W.ANI_ACTION_TIME
                                                .WILD_NUMBER_FLY / 2,
                                              { scale: new d(1.5, 1.5, 1.5) }
                                            ),
                                            y().to(
                                              W.ANI_ACTION_TIME
                                                .WILD_NUMBER_FLY / 2,
                                              { scale: new d(1, 1, 1) }
                                            )
                                          )
                                        )
                                        .call(t)
                                        .start();
                                    })),
                                    (t.next = 13),
                                    c
                                  );
                                case 13:
                                  if (
                                    ((this.m_num.node.active = !1), !(o > 0))
                                  ) {
                                    t.next = 17;
                                    break;
                                  }
                                  return (t.next = 17), v.Wait(this, 1 * o);
                                case 17:
                                  if (!e) {
                                    t.next = 20;
                                    break;
                                  }
                                  return (t.next = 20), e();
                                case 20:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                    return function (i, e, n, o) {
                      return t.apply(this, arguments);
                    };
                  })()),
                  (a.GetWorldLocation = function (t) {
                    return t.getComponent(_).convertToWorldSpaceAR(f(0, 0, 0));
                  }),
                  s(i, [
                    {
                      key: "IsWild",
                      get: function () {
                        return this.m_isWild;
                      },
                    },
                  ]),
                  i
                );
              })(p)).prototype,
              "m_num",
              [I],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (A = i(N.prototype, "m_numWithOpacity", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (O = i(N.prototype, "m_sprite", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (R = i(N.prototype, "m_fnt", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (D = N))
          ) || D)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ReSpinState.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./index.ts",
    "./index2.ts",
    "./Game_Define.ts",
    "./SoundAudioManager.ts",
    "./NewBottomBarManager.ts",
    "./StateManager.ts",
    "./Define.ts",
  ],
  function (e) {
    "use strict";
    var t, n, i, a, s, r, o, u, m, c, l, S;
    return {
      setters: [
        function (e) {
          (t = e.inheritsLoose),
            (n = e.asyncToGenerator),
            (i = e.regeneratorRuntime);
        },
        function (e) {
          (a = e.cclegacy), (s = e._decorator);
        },
        null,
        null,
        function (e) {
          r = e.default;
        },
        function (e) {
          o = e.soundAudioManager;
        },
        function (e) {
          (u = e.newBottombarManager), (m = e.SlotBottomBarState);
        },
        function (e) {
          (c = e.stateManager), (l = e.BaseState);
        },
        function (e) {
          S = e.Define;
        },
      ],
      execute: function () {
        var g;
        a._RF.push({}, "fc4b7x74klOGZisVgcpMIeK", "ReSpinState", void 0);
        var p = s.ccclass;
        e(
          "ReSpinState",
          p("ReSpinState")(
            (g = (function (e) {
              function a(t) {
                var n;
                return (
                  ((n = e.call(this) || this).m_gameView = null),
                  (n.m_gameView = t),
                  n
                );
              }
              t(a, e);
              var s = a.prototype;
              return (
                (s.OnEnter = (function () {
                  var e = n(
                    i().mark(function e() {
                      var t;
                      return i().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  null == (t = this.m_gameView.ExtraBet) ||
                                    t.OnSpin(),
                                  this.m_gameView.AvatarSpine.PlayLock(),
                                  o.Play(r.AudioClips.BG_Symbol_Lock),
                                  (e.next = 5),
                                  S.Wait(this.m_gameView, 0.5)
                                );
                              case 5:
                                this.m_gameView.CurPlateIndex + 1 <
                                  this.m_gameView.SpinAckQue.PlateSymbol
                                    .length &&
                                  ((this.m_gameView.CurPlateIndex =
                                    this.m_gameView.CurPlateIndex + 1),
                                  this.m_gameView.HandleStartRespin()),
                                  (this.m_gameView.IsSpined = !0);
                              case 7:
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
                (s.OnProcess = function (e) {
                  this.m_gameView.SlotReels.Spin(e),
                    this.m_gameView.IsSpined &&
                      this.m_gameView.SlotReels.IsShowBGEffectEnd &&
                      this.m_gameView.SlotReels.IsStop &&
                      ((this.m_gameView.IsSpined = !1),
                      o.Stop(this.m_gameView.ReelRotatingSoundId),
                      u.IsAutoSpin || u.SetSpinState(m.CLICK_SPIN),
                      this.m_gameView.CurPlateIndex + 1 <
                      this.m_gameView.SpinAckQue.PlateSymbol.length
                        ? c.NextState(r.GAMEVIEW_STATE.RESPIN)
                        : c.NextState(r.GAMEVIEW_STATE.AWARD));
                }),
                (s.OnLeave = function () {}),
                a
              );
            })(l))
          ) || g
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/RotateParentControl.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./RotateParentControlData.ts"],
  function (t) {
    "use strict";
    var e, n, a, r, i, o, s, c;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (a = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (i = t.cclegacy), (o = t._decorator), (s = t.Component);
        },
        function (t) {
          c = t.RotateParentControlData;
        },
      ],
      execute: function () {
        var l, p, u, _, h;
        i._RF.push(
          {},
          "449dbOe95VEE6hI6HNVc+X9",
          "RotateParentControl",
          void 0
        );
        var m = o.ccclass,
          f = o.property;
        t(
          "RotateParentControl",
          ((l = m("RotateParentControl")),
          (p = f({ type: [c], displayName: "UnitData" })),
          l(
            ((h = e(
              (_ = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (e = t.call.apply(t, [this].concat(i)) || this),
                    a(e, "m_Unit", h, r(e)),
                    (e.m_isLandscape = void 0),
                    e
                  );
                }
                n(e, t);
                var i = e.prototype;
                return (
                  (i.Rotate = function (t) {
                    if (this.m_isLandscape != t) {
                      this.m_isLandscape = t;
                      for (var e = 0; e < this.m_Unit.length; e++)
                        this.ChangeParent(this.m_Unit[e]);
                    }
                  }),
                  (i.ChangeParent = function (t) {
                    for (
                      var e = this.m_isLandscape ? t.m_Parent_S : t.m_Parent_L,
                        n = this.m_isLandscape ? t.m_Parent_L : t.m_Parent_S,
                        a = e.children,
                        r = a.length,
                        i = 0;
                      i < r;
                      i++
                    )
                      a[0].setParent(n);
                  }),
                  e
                );
              })(s)).prototype,
              "m_Unit",
              [p],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (u = _))
          ) || u)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/RotateParentControlData.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    "use strict";
    var e, r, a, n, o;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor), (r = t.initializerDefineProperty);
        },
        function (t) {
          (a = t.cclegacy), (n = t._decorator), (o = t.Node);
        },
      ],
      execute: function () {
        var i, l, c, u, s, p, P;
        a._RF.push(
          {},
          "cfd0e/GxgxF57N81o5stUSI",
          "RotateParentControlData",
          void 0
        );
        var _ = n.ccclass,
          f = n.property;
        t(
          "RotateParentControlData",
          ((i = _("RotateParentControlData")),
          (l = f({ type: o, displayName: "Parent L " })),
          (c = f({ type: o, displayName: "Parent S " })),
          i(
            ((p = e(
              (s = function () {
                r(this, "m_Parent_L", p, this), r(this, "m_Parent_S", P, this);
              }).prototype,
              "m_Parent_L",
              [l],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (P = e(s.prototype, "m_Parent_S", [c], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (u = s))
          ) || u)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/RoundEndState.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./index2.ts",
    "./index.ts",
    "./NewExtraManager.ts",
    "./NewBottomBarManager.ts",
    "./TempoSetting.ts",
    "./Tools.ts",
    "./RoundController.ts",
    "./CommonGameManager.ts",
    "./StateManager.ts",
  ],
  function (t) {
    "use strict";
    var e, n, o, i, s, a, r, u, c, m;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          n = t.cclegacy;
        },
        null,
        null,
        function (t) {
          o = t.newExtraManager;
        },
        function (t) {
          (i = t.newBottombarManager), (s = t.SlotBottomBarState);
        },
        function (t) {
          a = t.tempoSetting;
        },
        function (t) {
          r = t.tools;
        },
        function (t) {
          u = t.roundController;
        },
        function (t) {
          c = t.commonGameManager;
        },
        function (t) {
          m = t.BaseState;
        },
      ],
      execute: function () {
        n._RF.push({}, "7430fE0eIROT6ySkWFGCIKd", "RoundEndState", void 0);
        t(
          "RoundEndState",
          (function (t) {
            function n(e) {
              var n;
              return (
                ((n = t.call(this) || this).m_gameView = null),
                (n.m_processTick = 0),
                (n.m_gameView = e),
                n
              );
            }
            e(n, t);
            var m = n.prototype;
            return (
              (m.OnEnter = function () {
                (this.m_gameView.Win = 0),
                  o.IsFeaturesDemoMode && o.CheckBuyBonusOverAni(),
                  (this.m_gameView.CanSpaceStop = !1),
                  (this.m_gameView.CanPlateStop = !1),
                  (this.m_gameView.CurPlateIndex = -1),
                  i.IsAutoSpin
                    ? (this.m_processTick =
                        a.TempoSetting.FortuneGems.AUTO_DELAY_TIME)
                    : (this.m_processTick = 0),
                  this.m_gameView.RetryRoundEnd();
              }),
              (m.OnProcess = function (t) {
                (this.m_processTick = r.strip(this.m_processTick - t)),
                  this.m_processTick > 0 ||
                    !u.CanToNextRound() ||
                    (c.IsTwice && !c.IsGetRoundEndAck) ||
                    (o.IsFeaturesDemoMode &&
                      ((this.m_gameView.EffectPlate.CurAwardLines = []),
                      i.IsAutoSpin && i.ShowAutoPlayState(!1)),
                    i.IsAutoSpin &&
                      i.IsAutoPlayByTimes() &&
                      i.SetSpinState(s.CLICK_STOP_IN_AUTOPLAY),
                    this.m_gameView.HandleFinalEnd());
              }),
              (m.OnLeave = function () {}),
              n
            );
          })(m)
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/RoundShowEndState.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./index.ts",
    "./index2.ts",
    "./Game_Define.ts",
    "./StateManager.ts",
    "./Define.ts",
  ],
  function (t) {
    "use strict";
    var e, n, o, u, i, a;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          n = t.cclegacy;
        },
        null,
        null,
        function (t) {
          o = t.default;
        },
        function (t) {
          (u = t.stateManager), (i = t.BaseState);
        },
        function (t) {
          a = t.CommonState;
        },
      ],
      execute: function () {
        n._RF.push({}, "0ee9eCt3P1GxJ1+g/21+NEB", "RoundShowEndState", void 0);
        t(
          "RoundShowEndState",
          (function (t) {
            function n(e) {
              var n;
              return (
                ((n = t.call(this) || this).m_gameView = null),
                (n.m_gameView = e),
                n
              );
            }
            e(n, t);
            var i = n.prototype;
            return (
              (i.OnEnter = function () {
                this.m_gameView.IsBonusGame
                  ? u.NextState(o.GAMEVIEW_STATE.EXIT_BONUS)
                  : u.NextState(a.COMMON_SHOW);
              }),
              (i.OnProcess = function () {}),
              (i.OnLeave = function () {}),
              n
            );
          })(i)
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ShowIntroState.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./index2.ts",
    "./StateManager.ts",
  ],
  function (t) {
    "use strict";
    var e, n, o;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          n = t.cclegacy;
        },
        null,
        function (t) {
          o = t.BaseState;
        },
      ],
      execute: function () {
        n._RF.push({}, "bf8c2JouaBCfKJLvHTkkcvR", "ShowIntroState", void 0);
        t(
          "ShowIntroState",
          (function (t) {
            function n(e) {
              var n;
              return (
                ((n = t.call(this) || this).m_gameView = null),
                (n.m_gameView = e),
                n
              );
            }
            e(n, t);
            var o = n.prototype;
            return (
              (o.OnEnter = function () {
                this.m_gameView.OnRotation(),
                  (this.m_gameView.SetRotationLock = !0),
                  this.m_gameView.ShowPlateIntro();
              }),
              (o.OnProcess = function () {}),
              (o.OnLeave = function () {}),
              n
            );
          })(o)
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotReel.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Game_Define.ts",
    "./index.ts",
    "./lj2Proto.mjs_cjs=&original=.js",
    "./FakeReelDataProvider.ts",
    "./ColumnSymbol.ts",
    "./index2.ts",
    "./TempoSetting.ts",
    "./Define.ts",
    "./Tools.ts",
    "./SoundAudioManager.ts",
    "./lj2Proto.js",
  ],
  function (e) {
    "use strict";
    var t,
      i,
      s,
      o,
      n,
      m,
      r,
      a,
      l,
      h,
      _,
      u,
      f,
      S,
      p,
      c,
      d,
      y,
      L,
      T,
      E,
      P,
      b,
      g,
      w;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (s = e.initializerDefineProperty),
            (o = e.assertThisInitialized),
            (n = e.createClass),
            (m = e.asyncToGenerator),
            (r = e.regeneratorRuntime);
        },
        function (e) {
          (a = e.cclegacy),
            (l = e._decorator),
            (h = e.Prefab),
            (_ = e.Node),
            (u = e.v3),
            (f = e.log),
            (S = e.UITransform),
            (p = e.Size),
            (c = e.SpriteFrame),
            (d = e.Component);
        },
        function (e) {
          y = e.default;
        },
        null,
        null,
        function (e) {
          L = e.FakeReelDataProvider;
        },
        function (e) {
          T = e.ColumnSymbol;
        },
        null,
        function (e) {
          E = e.tempoSetting;
        },
        function (e) {
          P = e.Define;
        },
        function (e) {
          b = e.tools;
        },
        function (e) {
          g = e.soundAudioManager;
        },
        function (e) {
          w = e.default;
        },
      ],
      execute: function () {
        var R, C, N, v, I, G, O, W, k, A, D, B, H, M, F;
        a._RF.push({}, "61215eapx1B075yblG/xwIi", "SlotReel", void 0);
        var V = [0, 1, 2],
          x = l.ccclass,
          z = l.property;
        e(
          "SlotReel",
          ((R = x("SlotReel")),
          (C = z({ type: h, tooltip: "滾輪Symbol" })),
          (N = z({ type: _, tooltip: "數字飛行時的Parent" })),
          (v = z({ type: _, tooltip: "High Layers" })),
          (I = z({ type: _, tooltip: "low Layers" })),
          (G = z({ type: _, tooltip: "主輪Parent" })),
          (O = z({ type: _, tooltip: "其他輪Parent" })),
          R(
            ((A = t(
              (k = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, n = new Array(i), m = 0;
                    m < i;
                    m++
                  )
                    n[m] = arguments[m];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    s(t, "m_ReelSymbolPrefab", A, o(t)),
                    s(t, "m_flyEffectParent", D, o(t)),
                    s(t, "m_highLayer", B, o(t)),
                    s(t, "m_lowLayer", H, o(t)),
                    s(t, "m_MainReelParentNode", M, o(t)),
                    s(t, "m_NormalReelParentNode", F, o(t)),
                    (t.m_totalLength = null),
                    (t.m_spinBufferTime01 = 0.1),
                    (t.m_spinBufferTime02 = 0.1),
                    (t.m_riseTime = 0),
                    (t.m_upLength = 0),
                    (t.m_downLength = 15),
                    (t.m_columns = []),
                    (t.m_upperColumns = []),
                    (t.m_lowerColumns = []),
                    (t.m_spinTime = 0.25),
                    (t.m_spinDelayTime = 0.1),
                    (t.m_currentSpinTime = 0),
                    (t.m_stopTime = 0),
                    (t.m_reelStopTime = new Array()),
                    (t.m_reelPreTime = new Array()),
                    (t.m_isClickStopBtn = !1),
                    (t.m_lockColumn = new Array()),
                    (t.m_comparePos = []),
                    (t.m_reelXPos = []),
                    (t.m_reelYPos = []),
                    (t.m_isStop = !1),
                    (t.m_isShowBGEffectEnd = !0),
                    (t.m_isEffectEnd = !0),
                    (t.m_plateInfo = new Array()),
                    (t.m_hasAlreadyShowLock = [
                      [!1, !1, !1],
                      [!1, !1, !1],
                      [!1, !1, !1],
                    ]),
                    (t.m_hasAlreadyPlayLockSound = [
                      [!1, !1, !1],
                      [!1, !1, !1],
                      [!1, !1, !1],
                    ]),
                    (t.m_bgNearWinPos = -1),
                    (t.m_finalWildOdds = new Array()),
                    (t.m_timesOfBaseSpin = 2),
                    (t.m_spinIntervalTimes = 1),
                    (t.m_waitEnterBGEndAddSpinAmount = 42),
                    (t.m_waitOolongEndAddSpinAmount = 30),
                    (t.m_bgNearWinMoreSpin = 8),
                    (t.m_isLoadingComplete = !1),
                    (t.m_fakeReelDataProvider = void 0),
                    (t.m_reelPositionOffset = [
                      u(0, 0),
                      u(0, 0),
                      u(0, 0),
                      u(0, 0),
                      u(0, 0),
                    ]),
                    (t.m_viewSize = null),
                    (t.m_symbolSize = null),
                    (t.m_symbolSpriteFrames = []),
                    (t.m_hasPlayLockThisRound = !1),
                    (t.m_hasChangeSymbolThisRound = {}),
                    (t.m_lockCount = 0),
                    (t.m_isChangeToFinalSymbol = new Array()),
                    (t.m_gameView = void 0),
                    (t.m_isPlayStopSound = [!1, !1, !1, !1, !1]),
                    (t.m_isPlayStopEffect = [!1, !1, !1, !1, !1]),
                    (t.m_reelSoundId = null),
                    (t.m_ColWildColletFinishedCount = 0),
                    (t.m_isAlreadyPlayStopAllEffect = !1),
                    t
                  );
                }
                i(t, e);
                var a = t.prototype;
                return (
                  (a.onLoad = function () {
                    var e = this;
                    f(""),
                      (this.m_viewSize = this.node.getComponent(S).contentSize),
                      (this.m_symbolSize = new p(
                        (this.m_viewSize.width -
                          y.SeparateLineWidth * (y.COL_LENGTH - 1)) /
                          y.COL_LENGTH,
                        this.m_viewSize.height / y.ROW_LENGTH
                      )),
                      (this.m_comparePos = [
                        0,
                        this.m_viewSize.height,
                        this.m_viewSize.height +
                          this.m_symbolSize.height * y.FAKE_ROW_LENGTH,
                      ]),
                      (this.m_reelYPos = [
                        0.5 * -this.m_viewSize.height -
                          this.m_symbolSize.height * y.FAKE_ROW_LENGTH * 0.5,
                        0,
                        0.5 * this.m_viewSize.height +
                          this.m_symbolSize.height * y.FAKE_ROW_LENGTH * 0.5,
                      ]);
                    for (var t = 0; t < y.COL_LENGTH; ++t)
                      this.m_reelXPos.push(
                        this.m_symbolSize.width * (t + 0.5) -
                          0.5 * this.m_viewSize.width +
                          y.SeparateLineWidth * t +
                          this.m_reelPositionOffset[t].x
                      );
                    this.m_totalLength =
                      this.m_viewSize.height +
                      this.m_symbolSize.height * y.FAKE_ROW_LENGTH * 2;
                    var i = function () {
                      var t = E.TempoSetting.FortuneGems;
                      (e.m_riseTime = t.BASE.RISE_TIME),
                        (e.m_upLength = t.BASE.UP_LENGTH),
                        (e.m_spinBufferTime01 = t.BASE.SPIN_BUFFER_TIME_01),
                        (e.m_spinBufferTime02 = t.BASE.SPIN_BUFFER_TIME_02),
                        (e.m_downLength = t.BASE.DOWN_LENGTH),
                        (e.m_spinTime = t.BASE.SPIN_SPEED),
                        (e.m_timesOfBaseSpin = t.BASE.TIMES_OF_BASE_SPIN),
                        (e.m_spinIntervalTimes = t.BASE.SPIN_INTERVAL_TIMES),
                        (e.m_spinDelayTime = t.BASE.SPIN_DELAY_TIME);
                    };
                    i(), E.AddCb(i);
                  }),
                  (a.Init = function (e) {
                    (this.m_gameView = e),
                      (this.m_fakeReelDataProvider = new L(
                        y.FAKE_REEL_DATA,
                        y.FAKE_WILD_ODDS_DATA,
                        y.FAKE_WILD_MULT_ODDS_DATA
                      )),
                      this.LoadSymbol();
                  }),
                  (a.SetFakeReelData = function (e) {
                    this.m_fakeReelDataProvider.SetReelFakeData(e);
                  }),
                  (a.LoadSymbol = function () {
                    var e = this;
                    P.GameBundle.loadDir("Img/Symbol", c, function (t, i) {
                      t
                        ? e.LoadSymbol()
                        : (i.sort(function (t, i) {
                            var s = e.GetIdx(t.name),
                              o = e.GetIdx(i.name);
                            return s[0] < o[0] ? -1 : s[0] > o[0] ? 1 : 0;
                          }),
                          (e.m_symbolSpriteFrames = i),
                          e.m_symbolSpriteFrames.push(null),
                          e.CreateFirstPlate(function (t) {
                            return e.GetSymbolSpriteFrame(t);
                          }),
                          (e.m_isLoadingComplete = !0));
                    });
                  }),
                  (a.GetIdx = function (e) {
                    for (
                      var t = [], i = /Symbol_(\d{2})/g.exec(e), s = 0;
                      s < i.length;
                      ++s
                    ) {
                      var o = Number(i[s]);
                      isNaN(o) || t.push(o);
                    }
                    return t;
                  }),
                  (a.Reset = function () {
                    this.m_lockCount = 0;
                  }),
                  (a.Spin = function (e) {
                    this.m_isStop ||
                      ((this.m_currentSpinTime = b.strip(
                        this.m_currentSpinTime + e
                      )),
                      this.SpinAll(V),
                      0 === this.m_stopTime ||
                        this.m_currentSpinTime < this.m_stopTime ||
                        this.m_ColWildColletFinishedCount < y.COL_LENGTH ||
                        (this.m_isEffectEnd &&
                          this.m_isShowBGEffectEnd &&
                          ((this.m_isStop = !0),
                          this.m_reelSoundId &&
                            (g.Stop(this.m_reelSoundId),
                            (this.m_reelSoundId = null)))));
                  }),
                  (a.StartSpin = function () {
                    (this.m_currentSpinTime = 0),
                      (this.m_stopTime = 0),
                      (this.m_isStop = !1),
                      (this.m_hasPlayLockThisRound = !1),
                      this.m_gameView.IsBonusGame &&
                        (this.m_isShowBGEffectEnd = !1),
                      (this.m_isClickStopBtn = !1),
                      (this.m_isPlayStopSound = [!1, !1, !1]),
                      (this.m_isPlayStopEffect = [!1, !1, !1]),
                      (this.m_isAlreadyPlayStopAllEffect = !1),
                      (this.m_ColWildColletFinishedCount = 0);
                    for (var e = 0; e < y.COL_LENGTH; ++e)
                      this.m_reelStopTime[e] = this.m_reelPreTime[e] = null;
                    for (
                      var t = 0;
                      t < this.m_isChangeToFinalSymbol.length;
                      ++t
                    )
                      this.m_isChangeToFinalSymbol[t] = this.m_lockColumn[t] =
                        !1;
                    for (var i in this.m_hasChangeSymbolThisRound)
                      this.m_hasChangeSymbolThisRound[i] = !1;
                    if (this.m_lockCount === y.BG_NEAR_WIN_COUNT) {
                      for (var s = 0; s < y.COL_LENGTH; ++s)
                        for (var o = 0; o < y.ROW_LENGTH; ++o)
                          if (!this.m_hasAlreadyShowLock[s][o]) {
                            this.m_bgNearWinPos = s * y.ROW_LENGTH + o;
                            break;
                          }
                      -1 !== this.m_bgNearWinPos &&
                        this.m_gameView.BgNearWinSpineManager.ShowNearWin(
                          this.m_bgNearWinPos
                        );
                    }
                  }),
                  (a.SpinAll = function (e) {
                    for (var t = 0; t < e.length; ++t) {
                      var i = this.m_spinTime,
                        s =
                          (((this.m_currentSpinTime -
                            this.m_riseTime * y.COL_LENGTH) %
                            i) /
                            i) *
                          this.m_totalLength,
                        o = e[t];
                      this.Spin_RealSpinMultiPle(o, this.m_columns[o], 1, s),
                        this.Spin_RealSpinMultiPle(
                          o,
                          this.m_upperColumns[o],
                          2,
                          s
                        ),
                        this.Spin_RealSpinMultiPle(
                          o,
                          this.m_lowerColumns[o],
                          0,
                          s
                        );
                    }
                  }),
                  (a.Spin_RealSpinMultiPle = function (e, t, i, s) {
                    var o = this.m_currentSpinTime,
                      n = this.m_reelStopTime[e],
                      m = this.m_riseTime * y.COL_LENGTH,
                      r = this.m_reelXPos[e],
                      a = this.m_reelYPos[i];
                    if (
                      (i === y.REEL_MIDDLE_PLATE_INDEX &&
                        o >
                          n +
                            m +
                            this.m_spinBufferTime01 +
                            this.m_spinBufferTime02 &&
                        ((a = this.m_reelYPos[i]), t.SetPosition(u(r, a))),
                      !(o < this.m_riseTime * e))
                    ) {
                      if (o < this.m_riseTime * (e + 1)) {
                        var l =
                          ((o - this.m_riseTime * e) / this.m_riseTime) *
                          this.m_upLength;
                        t.SetPosition(u(r, a + l));
                      } else if (o < m)
                        t.SetPosition(u(r, a + this.m_upLength));
                      else if (null === n || o < n + m) {
                        var h = this.CheckMoveLength(s, i, e, t);
                        t.SetPosition(u(r, a - h));
                      } else if (o < n + m + this.m_spinBufferTime01) {
                        var _ =
                          ((o - n - m) / this.m_spinBufferTime01) *
                          this.m_downLength;
                        t.SetPosition(u(r, a - _)),
                          this.CheckChangeToFinalSymbol(e, t, i),
                          this.TryPlayReelStopSound(e);
                      } else if (
                        o <
                        n +
                          m +
                          this.m_spinBufferTime01 +
                          this.m_spinBufferTime02
                      ) {
                        var f =
                          ((o - n - m - this.m_spinBufferTime01) /
                            this.m_spinBufferTime02) *
                          this.m_downLength;
                        t.SetPosition(u(r, a - this.m_downLength + f)),
                          this.CheckChangeToFinalSymbol(e, t, i);
                      } else
                        this.CheckChangeToFinalSymbol(e, t, i),
                          t.SetPosition(u(r, a));
                      null != n &&
                        o >= n + m + this.m_spinBufferTime01 &&
                        (this.ShowStopSymbolEffectBG(e),
                        this.ShowMGWildCollectEffect(this.m_isClickStopBtn, e));
                    }
                  }),
                  (a.CheckChangeToFinalSymbol = function (e, t, i) {
                    if (i === y.REEL_MIDDLE_PLATE_INDEX) {
                      var s = t.Name;
                      this.m_isChangeToFinalSymbol[s] ||
                        ((this.m_isChangeToFinalSymbol[s] = !0),
                        this.ChangeSymbol(e, t, i));
                    }
                  }),
                  (a.CheckMoveLength = function (e, t, i, s) {
                    var o = s.Name,
                      n = this.m_comparePos[t];
                    return e < n
                      ? ((this.m_hasChangeSymbolThisRound[o] = !1), e)
                      : (!this.m_hasChangeSymbolThisRound[o] &&
                          e - n < this.m_viewSize.height &&
                          ((this.m_hasChangeSymbolThisRound[o] = !0),
                          this.ChangeSymbol(i, s, t)),
                        e - this.m_totalLength);
                  }),
                  (a.ChangeSymbol = function (e, t, i) {
                    var s = Number(t.Name),
                      o =
                        i === y.REEL_MIDDLE_PLATE_INDEX
                          ? y.ROW_LENGTH
                          : y.FAKE_ROW_LENGTH;
                    if (s >= 0)
                      if (
                        (t.SetSymbols(this.m_plateInfo[s].Row),
                        this.m_finalWildOdds[e])
                      )
                        t.SetWildOdds(this.m_finalWildOdds[e]);
                      else {
                        var n = this.GetRandomOdds(o);
                        e == y.WILD_MULT_COL && (n = this.GetRandomMultOdds(o)),
                          t.SetWildOdds(n);
                      }
                    else {
                      var m = this.SetRandomSymbols(e, o);
                      t.SetSymbols(m);
                      var r = this.GetRandomOdds(o);
                      e == y.WILD_MULT_COL && (r = this.GetRandomMultOdds(o)),
                        t.SetWildOdds(r);
                    }
                  }),
                  (a.TryPlayReelStopSound = function (e) {
                    this.m_isPlayStopSound[e] ||
                      ((this.m_isPlayStopSound[e] = !0),
                      this.m_gameView.IsHardStop &&
                        (this.m_isPlayStopSound = [!0, !0, !0]),
                      this.PlayReelSound(this.m_gameView.IsHardStop, e));
                  }),
                  (a.SetRandomSymbols = function (e, t) {
                    var i = [];
                    if (this.m_gameView.IsBonusGame) {
                      for (
                        var s = this.m_gameView.SpinAckQue.BonusSymbol,
                          o = y.Symbol.NULL,
                          n = 0;
                        n < t;
                        ++n
                      )
                        i.push(o);
                      for (var m = 0; m < t; ++m) {
                        var r = -1 !== this.m_bgNearWinPos ? 0.4 : 0.15,
                          a = Math.random();
                        if (a < r) {
                          var l = 0.3 * r;
                          i[m] =
                            a < l
                              ? e == y.WILD_MULT_COL
                                ? y.Symbol.WILD_M
                                : y.Symbol.WILD
                              : s;
                        } else i[m] = o;
                      }
                    } else
                      for (var h = 0; h < t; ++h)
                        i.unshift(this.GetRandomSymbol(e));
                    return i;
                  }),
                  (a.ShowMGWildCollectEffect = (function () {
                    var e = m(
                      r().mark(function e(t, i) {
                        return r().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (!this.m_gameView.IsBonusGame) {
                                    e.next = 2;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 2:
                                  if (!this.m_isPlayStopEffect[i]) {
                                    e.next = 4;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 4:
                                  if (
                                    ((this.m_isPlayStopEffect[i] = !0),
                                    this.CheckHasWild(i))
                                  ) {
                                    e.next = 8;
                                    break;
                                  }
                                  return (
                                    this.m_ColWildColletFinishedCount++,
                                    e.abrupt("return")
                                  );
                                case 8:
                                  (this.m_gameView.SetRotationLock = !0),
                                    t && !this.m_isAlreadyPlayStopAllEffect
                                      ? ((this.m_isAlreadyPlayStopAllEffect =
                                          !0),
                                        this.m_gameView.EffectPlate.ShowAllWildStop(),
                                        (this.m_ColWildColletFinishedCount =
                                          y.COL_LENGTH))
                                      : this.m_isAlreadyPlayStopAllEffect ||
                                        (this.m_gameView.EffectPlate.ShowWildStop(
                                          i
                                        ),
                                        this.m_ColWildColletFinishedCount++),
                                    (this.m_gameView.SetRotationLock = !1);
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
                    return function (t, i) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (a.ShowStopSymbolEffectBG = (function () {
                    var e = m(
                      r().mark(function e(t) {
                        var i, s, o, n, m, a, l, h;
                        return r().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((i =
                                      this.m_gameView.SpinAckQue.BonusSymbol),
                                    !isNaN(i) && this.m_gameView.IsBonusGame)
                                  ) {
                                    e.next = 4;
                                    break;
                                  }
                                  return (
                                    (this.m_isShowBGEffectEnd = !0),
                                    e.abrupt("return")
                                  );
                                case 4:
                                  (s = []),
                                    (o = this.GetSiblingIdxData(
                                      this.m_plateInfo[t].Row
                                    )),
                                    (n = 0);
                                case 7:
                                  if (!(n < this.m_plateInfo[t].Row.length)) {
                                    e.next = 38;
                                    break;
                                  }
                                  if (
                                    ((m = -1),
                                    this.m_plateInfo[t].Row[n] == y.Symbol.WILD
                                      ? (m = y.Symbol.WILD)
                                      : this.m_plateInfo[t].Row[n] ==
                                          y.Symbol.WILD_M &&
                                        (m = y.Symbol.WILD_M),
                                    !(
                                      i === this.m_plateInfo[t].Row[n] || m > 0
                                    ))
                                  ) {
                                    e.next = 34;
                                    break;
                                  }
                                  if (!1 !== this.m_hasAlreadyShowLock[t][n]) {
                                    e.next = 33;
                                    break;
                                  }
                                  if (
                                    ((this.m_hasAlreadyShowLock[t][n] = !0),
                                    (this.m_lockCount = this.m_lockCount + 1),
                                    this.m_lockCount !== y.BG_NEAR_WIN_COUNT)
                                  ) {
                                    e.next = 28;
                                    break;
                                  }
                                  a = 0;
                                case 16:
                                  if (!(a < y.COL_LENGTH)) {
                                    e.next = 28;
                                    break;
                                  }
                                  l = 0;
                                case 18:
                                  if (!(l < y.ROW_LENGTH)) {
                                    e.next = 25;
                                    break;
                                  }
                                  if (
                                    this.m_hasAlreadyShowLock[a][l] ||
                                    a === t
                                  ) {
                                    e.next = 22;
                                    break;
                                  }
                                  return (
                                    (this.m_bgNearWinPos =
                                      a * y.ROW_LENGTH + l),
                                    e.abrupt("break", 25)
                                  );
                                case 22:
                                  ++l, (e.next = 18);
                                  break;
                                case 25:
                                  ++a, (e.next = 16);
                                  break;
                                case 28:
                                  (h = m > 0 ? m : i),
                                    this.m_hasPlayLockThisRound ||
                                      (this.m_hasPlayLockThisRound = !0),
                                    s.push(
                                      this.m_gameView.EffectPlate.ShowLockThenLoop(
                                        t,
                                        n,
                                        h,
                                        y.LAYERS.NORMAL
                                      )
                                    ),
                                    (e.next = 34);
                                  break;
                                case 33:
                                  this.m_gameView.EffectPlate.UpdateAliveSymbolNodeSibling(
                                    t,
                                    n,
                                    y.LAYERS.NORMAL,
                                    o[n],
                                    m > 0
                                  );
                                case 34:
                                  this.HideNormalSymbol(t, n);
                                case 35:
                                  ++n, (e.next = 7);
                                  break;
                                case 38:
                                  return (e.next = 40), Promise.all(s);
                                case 40:
                                  this.m_ColWildColletFinishedCount++,
                                    t === y.COL_LENGTH - 1 &&
                                      (this.m_isShowBGEffectEnd = !0);
                                case 42:
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
                  (a.HideNormalSymbol = function (e, t) {
                    this.m_hasAlreadyShowLock[e][t] &&
                      this.m_gameView.SlotReels.Columns[e].HideSymbolByRow(t);
                  }),
                  (a.GetSiblingIdxData = function (e) {
                    var t = new Array(e.length).fill(0),
                      i = 0,
                      s = [];
                    e.forEach(function (e, o) {
                      e !== y.Symbol.WILD && e !== y.Symbol.WILD_M
                        ? (t[o] = i++)
                        : s.push(o);
                    });
                    var o = e.length - 1;
                    return (
                      s.forEach(function (e) {
                        t[e] = o--;
                      }),
                      t
                    );
                  }),
                  (a.CheckHasWild = function (e) {
                    for (
                      var t = !1, i = 0;
                      i < this.m_plateInfo[e].Row.length;
                      ++i
                    )
                      (this.m_plateInfo[e].Row[i] !== y.Symbol.WILD &&
                        this.m_plateInfo[e].Row[i] !== y.Symbol.WILD_M) ||
                        (t = !0);
                    return t;
                  }),
                  (a.PlayReelSound = function (e, t) {
                    if (e) {
                      for (var i = !1, s = 0; s < this.m_plateInfo.length; ++s)
                        for (var o = 0; o < this.m_plateInfo[s].Row.length; ++o)
                          (this.m_plateInfo[s].Row[o] !== y.Symbol.WILD &&
                            this.m_plateInfo[s].Row[o] !== y.Symbol.WILD_M) ||
                            (i = !0);
                      i
                        ? g.Play(y.AudioClips.Wild_Stop)
                        : g.Play(y.AudioClips.ReelStop);
                    } else {
                      for (
                        var n = !1, m = 0;
                        m < this.m_plateInfo[t].Row.length;
                        ++m
                      )
                        this.m_gameView.IsBonusGame ||
                        (this.m_plateInfo[t].Row[m] !== y.Symbol.WILD &&
                          this.m_plateInfo[t].Row[m] !== y.Symbol.WILD_M)
                          ? this.m_hasAlreadyPlayLockSound[t][m] ||
                            (this.m_plateInfo[t].Row[m] !== y.Symbol.WILD &&
                              this.m_plateInfo[t].Row[m] !== y.Symbol.WILD) ||
                            ((this.m_hasAlreadyPlayLockSound[t][m] = !0),
                            (n = !0))
                          : (n = !0);
                      n
                        ? g.Play(y.AudioClips.Wild_Stop)
                        : g.Play(y.AudioClips.ReelStop);
                    }
                  }),
                  (a.SetPlateSymbol = function (e, t) {
                    void 0 === t && (t = !1),
                      (0 === e.length || e.length < y.COL_LENGTH) &&
                        (e = this.m_gameView.OldRealPlate);
                    for (var i = 0; i < y.COL_LENGTH; ++i) {
                      (this.m_reelStopTime[i] = null),
                        (this.m_reelPreTime[i] = null),
                        this.m_columns[i].SetSymbols(e[i].Row),
                        this.m_columns[i].SetPosition(
                          u(this.m_reelXPos[i], this.m_reelYPos[1])
                        );
                      var s = this.m_gameView.OldOdds.splice(0, y.ROW_LENGTH);
                      0 === s.length && (s = [0, 0, 0]),
                        this.m_columns[i].SetWildOdds(s);
                    }
                    for (var o = 0; o < y.COL_LENGTH; ++o)
                      if (
                        (this.m_upperColumns[o].SetPosition(
                          u(this.m_reelXPos[o], this.m_reelYPos[2])
                        ),
                        this.m_lowerColumns[o].SetPosition(
                          u(this.m_reelXPos[o], this.m_reelYPos[0])
                        ),
                        t)
                      ) {
                        this.m_upperColumns[o].SetSymbols(e[o].Row),
                          this.m_lowerColumns[o].SetSymbols(e[o].Row);
                        var n = this.GetRandomOdds(3);
                        o == y.WILD_MULT_COL && (n = this.GetRandomMultOdds(3)),
                          this.m_upperColumns[o].SetWildOdds(n),
                          this.m_lowerColumns[o].SetWildOdds(n);
                      }
                  }),
                  (a.SetPlateInfo = (function () {
                    var e = m(
                      r().mark(function e(t, i, s, o) {
                        var n;
                        return r().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  void 0 === o && (o = !1),
                                    (this.m_plateInfo = t),
                                    this.m_gameView.IsBonusGame ||
                                      this.SetFinalWildOddsData(i),
                                    s ||
                                      this.m_gameView.IsBonusGame ||
                                      (this.m_gameView.OldRealPlate =
                                        JSON.parse(
                                          JSON.stringify(this.m_plateInfo)
                                        )),
                                    (n =
                                      this.m_gameView.IsBonusGame || o
                                        ? 0
                                        : 15),
                                    (this.m_downLength = n),
                                    o
                                      ? this.SetEnterBonusPlateInfo()
                                      : this.SetReelStopTime(),
                                    this.m_gameView.IsBonusGame &&
                                      this.SetBonusLockData();
                                case 8:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (t, i, s, o) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (a.SetColumnDark = function (e, t) {
                    for (
                      var i = -1 !== t ? t : y.COL_LENGTH, s = 0;
                      s < y.COL_LENGTH;
                      ++s
                    )
                      s !== i &&
                        (this.m_columns[s].SetSymbolDark(e),
                        this.m_lowerColumns[s].SetSymbolDark(e),
                        this.m_upperColumns[s].SetSymbolDark(e));
                  }),
                  (a.CreateFirstPlate = function (e) {
                    for (var t = 0; t < y.COL_LENGTH; ++t) {
                      var i = new T(
                        this.m_NormalReelParentNode,
                        e,
                        this.m_ReelSymbolPrefab,
                        this.m_flyEffectParent,
                        y.FAKE_ROW_LENGTH
                      );
                      (i.Name = "low" + t.toString()),
                        i.SetPosition(
                          u(
                            this.m_reelXPos[t],
                            this.m_reelYPos[y.REEL_DOWN_PLATE_INDEX]
                          )
                        );
                      for (var s = [], o = 0; o < y.FAKE_ROW_LENGTH; ++o)
                        s.unshift(this.GetRandomSymbol(t));
                      i.SetSymbols(s), this.m_lowerColumns.push(i);
                    }
                    for (var n = 0; n < y.COL_LENGTH; ++n) {
                      var m = new T(
                        this.m_MainReelParentNode,
                        e,
                        this.m_ReelSymbolPrefab,
                        this.m_flyEffectParent,
                        y.ROW_LENGTH
                      );
                      (m.Name = n.toString()),
                        m.SetPosition(
                          u(
                            this.m_reelXPos[n],
                            this.m_reelYPos[y.REEL_MIDDLE_PLATE_INDEX]
                          )
                        );
                      for (
                        var r = new w.lj2Proto.Column(), a = 0;
                        a < y.ROW_LENGTH;
                        ++a
                      )
                        n == y.WILD_MULT_COL
                          ? r.Row.push(y.Symbol.WILD_M)
                          : r.Row.push(y.Symbol.GREEN + n);
                      m.SetSymbols(r.Row),
                        n == y.WILD_MULT_COL && m.SetWildOdds([2, 5, 3]),
                        this.m_plateInfo.push(r),
                        this.m_columns.push(m);
                    }
                    this.m_gameView.OldRealPlate = JSON.parse(
                      JSON.stringify(this.m_plateInfo)
                    );
                    for (var l = 0; l < y.COL_LENGTH; ++l) {
                      var h = new T(
                        this.m_NormalReelParentNode,
                        e,
                        this.m_ReelSymbolPrefab,
                        this.m_flyEffectParent,
                        y.FAKE_ROW_LENGTH
                      );
                      (h.Name = "up" + l.toString()),
                        h.SetPosition(
                          u(
                            this.m_reelXPos[l],
                            this.m_reelYPos[y.REEL_UP_PLATE_INDEX]
                          )
                        );
                      for (var _ = [], f = 0; f < y.FAKE_ROW_LENGTH; ++f)
                        _.unshift(this.GetRandomSymbol(l));
                      h.SetSymbols(_), this.m_upperColumns.push(h);
                    }
                  }),
                  (a.SetFinalWildOddsData = function (e) {
                    for (var t = 0; t < y.COL_LENGTH; t++) {
                      this.m_finalWildOdds[t] = new Array();
                      for (var i = 0; i < y.ROW_LENGTH; i++)
                        this.m_finalWildOdds[t][i] = e[t * y.COL_LENGTH + i];
                    }
                  }),
                  (a.SetReelStopTime = function () {
                    var e = this.m_riseTime * y.COL_LENGTH,
                      t = Math.ceil(
                        (this.m_currentSpinTime - e) / this.m_spinTime
                      );
                    t = 0 !== t ? t : 1;
                    var i = 0;
                    this.m_stopTime = b.strip(
                      this.m_spinTime *
                        (t +
                          this.m_timesOfBaseSpin +
                          this.m_spinIntervalTimes * (y.COL_LENGTH - 1)) +
                        this.m_spinDelayTime +
                        e +
                        this.m_spinBufferTime01 +
                        this.m_spinBufferTime02
                    );
                    for (var s = 0; s < y.COL_LENGTH; ++s)
                      this.m_lockColumn[s] && ++i,
                        (this.m_reelStopTime[s] = b.strip(
                          this.m_spinTime * (t + this.m_timesOfBaseSpin) +
                            this.m_spinIntervalTimes * this.m_spinTime * (s - i)
                        )),
                        (this.m_reelPreTime[s] = b.strip(
                          this.m_spinTime * (t + this.m_timesOfBaseSpin) +
                            this.m_spinIntervalTimes *
                              this.m_spinTime *
                              (s - 1 - i)
                        ));
                    if (-1 !== this.m_bgNearWinPos) {
                      for (var o = 0; o < y.COL_LENGTH; ++o)
                        (this.m_reelStopTime[o] = b.strip(
                          this.m_reelStopTime[o] +
                            this.m_bgNearWinMoreSpin * this.m_spinTime
                        )),
                          (this.m_reelPreTime[o] = b.strip(
                            this.m_reelPreTime[o] +
                              this.m_bgNearWinMoreSpin * this.m_spinTime
                          ));
                      (this.m_stopTime = b.strip(
                        this.m_stopTime +
                          this.m_bgNearWinMoreSpin * this.m_spinTime
                      )),
                        this.m_gameView.BgNearWinSpineManager.ShowNearWin(
                          this.m_bgNearWinPos
                        );
                    }
                  }),
                  (a.SetEnterBonusPlateInfo = (function () {
                    var e = m(
                      r().mark(function e() {
                        return r().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.m_isEffectEnd = !1),
                                    g.Play(y.AudioClips.BG_Start),
                                    (this.m_gameView.SetRotationLock = !0),
                                    this.m_gameView.AvatarSpine.PlayEnterBG(),
                                    (e.next = 6),
                                    Promise.all([
                                      this.m_gameView.BackGroundView.EnterBG(),
                                      this.m_gameView.BGDeclareManager.PlayBGIn(
                                        this.m_gameView.SpinAckQue.BonusSymbol
                                      ),
                                    ])
                                  );
                                case 6:
                                  this.SetReelStopTime(),
                                    (this.m_gameView.SetRotationLock = !1),
                                    this.m_gameView.HandleEnterBG(),
                                    (this.m_isEffectEnd = !0);
                                case 10:
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
                  (a.SetBonusLockData = function () {
                    for (var e = 0; e < y.COL_LENGTH; ++e) {
                      for (var t = !0, i = 0; i < y.ROW_LENGTH; ++i)
                        this.m_hasAlreadyShowLock[e][i] || (t = !1);
                      t && (this.m_reelStopTime[e] = this.m_reelPreTime[e] = 0);
                    }
                  }),
                  (a.ResetLockSymbolData = function () {
                    (this.m_hasAlreadyShowLock = [
                      [!1, !1, !1],
                      [!1, !1, !1],
                      [!1, !1, !1],
                    ]),
                      (this.m_hasAlreadyPlayLockSound = [
                        [!1, !1, !1],
                        [!1, !1, !1],
                        [!1, !1, !1],
                      ]);
                  }),
                  (a.ClickStopBtn = function () {
                    if (
                      0 !== this.m_stopTime &&
                      this.m_isEffectEnd &&
                      !this.m_gameView.IsRespin &&
                      !this.m_gameView.IsBonusGame
                    ) {
                      this.m_isClickStopBtn = !0;
                      for (
                        var e = Math.ceil(
                            this.m_currentSpinTime / this.m_spinTime
                          ),
                          t = ((e = e > 0 ? e : 1) - 1) * this.m_spinTime,
                          i = b.strip(t + this.m_spinTime),
                          s = 0;
                        s < y.COL_LENGTH;
                        ++s
                      )
                        this.m_reelStopTime[s] > i &&
                          ((this.m_reelStopTime[s] = i),
                          (this.m_reelPreTime[s] = t));
                      var o =
                        E.TempoSetting.TripleCoinTreasure.SPEED_UP_STOP_TIME(
                          0,
                          this.m_currentSpinTime
                        );
                      o < this.m_stopTime && (this.m_stopTime = b.strip(o));
                    }
                  }),
                  (a.GetSymbolSpriteFrame = function (e) {
                    return this.m_symbolSpriteFrames[e];
                  }),
                  (a.ShowPlate = function () {
                    for (var e = 0; e < y.COL_LENGTH; ++e)
                      this.Columns[e].SetColumnVisiable(!0);
                  }),
                  (a.HidePlate = (function () {
                    var e = m(
                      r().mark(function e(t, i) {
                        var s;
                        return r().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === t && (t = 0),
                                    void 0 === i && (i = !1),
                                    (e.next = 4),
                                    P.Wait(this, t)
                                  );
                                case 4:
                                  for (f(i), s = 0; s < y.COL_LENGTH; ++s)
                                    this.Columns[s].SetColumnVisiable(!1);
                                case 6:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (t, i) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (a.GetSpecialGameSymbol = function (e) {
                    void 0 === e && (e = this.m_plateInfo);
                    for (var t = y.Symbol.WILD, i = 0; i < y.COL_LENGTH; ++i)
                      for (var s = 0; s < y.ROW_LENGTH; ++s)
                        if (
                          e[i] &&
                          void 0 !== e[i].Row[s] &&
                          e[i].Row[s] !== y.Symbol.WILD &&
                          e[i].Row[s] !== y.Symbol.WILD_M &&
                          e[i].Row[s] !== y.Symbol.NULL
                        )
                          if (t === y.Symbol.WILD) t = e[i].Row[s];
                          else if (t !== e[i].Row[s]) return -1;
                    return t;
                  }),
                  (a.SetNumLayerHigher = function () {
                    this.m_flyEffectParent.removeFromParent(),
                      this.m_highLayer.addChild(this.m_flyEffectParent);
                  }),
                  (a.SetNumLayerLower = function () {
                    this.m_flyEffectParent.removeFromParent(),
                      this.m_lowLayer.addChild(this.m_flyEffectParent);
                  }),
                  (a.GetRandomOdds = function (e) {
                    for (var t = [], i = 0; i < e; ++i) {
                      var s = this.m_fakeReelDataProvider.GetRandomWildOdd();
                      t.push(s);
                    }
                    return t;
                  }),
                  (a.GetRandomMultOdds = function (e) {
                    for (var t = [], i = 0; i < e; ++i) {
                      var s =
                        this.m_fakeReelDataProvider.GetRandomWildMultOdd();
                      t.push(s);
                    }
                    return t;
                  }),
                  (a.GetRandomSymbol = function (e) {
                    return this.m_fakeReelDataProvider.GetRandomReelSymbol(e);
                  }),
                  n(t, [
                    {
                      key: "IsLoadingComplete",
                      get: function () {
                        return this.m_isLoadingComplete;
                      },
                    },
                    {
                      key: "Columns",
                      get: function () {
                        return this.m_columns;
                      },
                    },
                    {
                      key: "ReelXPos",
                      get: function () {
                        return this.m_reelXPos;
                      },
                    },
                    {
                      key: "IsStop",
                      get: function () {
                        return this.m_isStop;
                      },
                    },
                    {
                      key: "IsShowBGEffectEnd",
                      get: function () {
                        return this.m_isShowBGEffectEnd;
                      },
                    },
                    {
                      key: "PlateInfo",
                      get: function () {
                        return this.m_plateInfo;
                      },
                    },
                    {
                      key: "BgNearWinPos",
                      get: function () {
                        return this.m_bgNearWinPos;
                      },
                      set: function (e) {
                        this.m_bgNearWinPos = e;
                      },
                    },
                  ]),
                  t
                );
              })(d)).prototype,
              "m_ReelSymbolPrefab",
              [C],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (D = t(k.prototype, "m_flyEffectParent", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (B = t(k.prototype, "m_highLayer", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (H = t(k.prototype, "m_lowLayer", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = t(k.prototype, "m_MainReelParentNode", [G], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (F = t(k.prototype, "m_NormalReelParentNode", [O], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (W = k))
          ) || W)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SpinState.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./index.ts",
    "./index2.ts",
    "./Game_Define.ts",
    "./SoundAudioManager.ts",
    "./RoundController.ts",
    "./NewExtraManager.ts",
    "./NewBottomBarManager.ts",
    "./CommonGameManager.ts",
    "./StateManager.ts",
  ],
  function (e) {
    "use strict";
    var t, i, n, a, s, o, m, l, r, u, S;
    return {
      setters: [
        function (e) {
          t = e.inheritsLoose;
        },
        function (e) {
          i = e.cclegacy;
        },
        null,
        null,
        function (e) {
          n = e.default;
        },
        function (e) {
          a = e.soundAudioManager;
        },
        function (e) {
          s = e.roundController;
        },
        function (e) {
          o = e.newExtraManager;
        },
        function (e) {
          (m = e.newBottombarManager), (l = e.SlotBottomBarState);
        },
        function (e) {
          r = e.commonGameManager;
        },
        function (e) {
          (u = e.stateManager), (S = e.BaseState);
        },
      ],
      execute: function () {
        i._RF.push({}, "a5f63zYewFDTZvKP9uvXeRA", "SpinState", void 0);
        e(
          "SpinState",
          (function (e) {
            function i(t) {
              var i;
              return (
                ((i = e.call(this) || this).m_gameView = null),
                (i.m_gameView = t),
                i
              );
            }
            t(i, e);
            var S = i.prototype;
            return (
              (S.OnEnter = function () {
                var e;
                null == (e = this.m_gameView.ExtraBet) || e.OnSpin(),
                  a.Play(n.AudioClips.ReelSpin),
                  s.StartSpin(),
                  o.SetBuyBonusState(!1),
                  m.CanPlayFeaturesDemo(!1),
                  (m.IsGameIdle = !1),
                  (this.m_gameView.EffectPlate.CurAwardLines = []),
                  this.m_gameView.EffectPlate.StopOneLineShow(),
                  this.m_gameView.EffectPlate.Reset(),
                  this.m_gameView.ResetAllData(),
                  (this.m_gameView.CurPlateIndex =
                    this.m_gameView.CurPlateIndex + 1),
                  r.HasUnshow
                    ? ((this.m_gameView.IsHardStop = m.IsHardStop),
                      this.m_gameView.OnRecvSpinAck(
                        this.m_gameView.UnshowSpinAckQue
                      ),
                      (this.m_gameView.UnshowSpinAckQue = null),
                      (r.HasUnshow = !1))
                    : this.m_gameView.IsEnterBg
                    ? this.m_gameView.HandleStartRespin()
                    : this.m_gameView.HandleStartSpin();
              }),
              (S.OnProcess = function (e) {
                if (
                  (this.m_gameView.SlotReels.Spin(e),
                  this.m_gameView.SlotReels.IsStop)
                )
                  if (
                    (a.Stop(this.m_gameView.ReelRotatingSoundId),
                    m.IsAutoSpin || m.SetSpinState(l.CLICK_SPIN),
                    this.m_gameView.IsEnterBg)
                  )
                    (this.m_gameView.IsEnterBg = !1),
                      this.CheckPlateIsFullPlate() && this.RemoveFinalPlate(),
                      u.NextState(n.GAMEVIEW_STATE.RESPIN);
                  else {
                    if (
                      this.m_gameView.NeedUpgrade ||
                      this.m_gameView.SpinAckQue.GetBonus > 0
                    ) {
                      var t = !0;
                      this.m_gameView.SpinAckQue.WildWin[0] <= 0 &&
                        this.m_gameView.SpinAckQue.GameWin[0] > 0 &&
                        (t = !1),
                        this.m_gameView.Pot.PlayNearWin(t);
                    }
                    u.NextState(n.GAMEVIEW_STATE.AWARD);
                  }
              }),
              (S.OnLeave = function () {}),
              (S.CheckPlateIsFullPlate = function () {
                for (
                  var e = this.m_gameView.SpinAckQue.PlateSymbol.length,
                    t = this.m_gameView.SpinAckQue.PlateSymbol[e - 1],
                    i = 0;
                  i < t.Col.length;
                  i++
                )
                  for (var a = 0; a < t.Col[i].Row.length; a++)
                    if (t.Col[i].Row[a] == n.Symbol.NULL) return !1;
                return !0;
              }),
              (S.RemoveFinalPlate = function () {
                this.m_gameView.SpinAckQue.PlateSymbol.pop();
              }),
              i
            );
          })(S)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SymbolSpine.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Game_Define.ts",
    "./BaseSpine.ts",
    "./index.ts",
    "./Tools.ts",
    "./Define.ts",
  ],
  function (t) {
    "use strict";
    var n, i, e, r, o, s, u, a, c, m, l, h, p, _, f, y, A, d;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (e = t.initializerDefineProperty),
            (r = t.assertThisInitialized),
            (o = t.createClass),
            (s = t.asyncToGenerator),
            (u = t.regeneratorRuntime);
        },
        function (t) {
          (a = t.cclegacy),
            (c = t._decorator),
            (m = t.Enum),
            (l = t.BitmapFont),
            (h = t.Label),
            (p = t.Animation);
        },
        function (t) {
          (_ = t.eSymbolType), (f = t.default);
        },
        function (t) {
          y = t.BaseSpine;
        },
        null,
        function (t) {
          A = t.tools;
        },
        function (t) {
          d = t.Define;
        },
      ],
      execute: function () {
        var b, S, L, v, I, N, g, w, D, W, x;
        a._RF.push({}, "e64e4Hchl9NtbL25QdmqOut", "SymbolSpine", void 0);
        var M = c.ccclass,
          P = c.property;
        t(
          "SymbolSpine",
          ((b = M("SymbolSpine")),
          (S = P({ type: m(_), tooltip: "編號" })),
          (L = P({
            type: l,
            tooltip: "數字字型",
            visible: function () {
              return this.m_symbol == _.WILD || this.m_symbol == _.WILD_M;
            },
          })),
          (v = P({
            type: h,
            visible: function () {
              return this.m_symbol == _.WILD || this.m_symbol == _.WILD_M;
            },
          })),
          (I = P({
            type: p,
            visible: function () {
              return this.m_symbol == _.WILD || this.m_symbol == _.WILD_M;
            },
          })),
          b(
            ((w = n(
              (g = (function (t) {
                function n() {
                  for (
                    var n, i = arguments.length, o = new Array(i), s = 0;
                    s < i;
                    s++
                  )
                    o[s] = arguments[s];
                  return (
                    (n = t.call.apply(t, [this].concat(o)) || this),
                    e(n, "m_symbol", w, r(n)),
                    e(n, "m_fnt", D, r(n)),
                    e(n, "m_num", W, r(n)),
                    e(n, "m_numAnim", x, r(n)),
                    (n.ANIM_WIN = "Large_Win"),
                    (n.ANIM_LARGE_START = "Large_Start"),
                    (n.ANIM_LARGE_LOCK = "Large_Lock"),
                    (n.ANIM_LARGE_LOOP = "Large_LockLoop"),
                    (n.ANIM_LARGE_ADD_POINT = "Large_AddPoint"),
                    (n.m_prize = 0),
                    (n.m_isWild = void 0),
                    n
                  );
                }
                i(n, t);
                var a = n.prototype;
                return (
                  (a.Stop = function () {
                    this.m_spine.clearTrack(0);
                  }),
                  (a.ShowWin = (function () {
                    var t = s(
                      u().mark(function t(n) {
                        return u().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    void 0 === n && (n = !1),
                                    this.SetNodeActivity(!0),
                                    (t.next = 4),
                                    this.PlayAnimation(this.ANIM_WIN)
                                  );
                                case 4:
                                  return (t.next = 6), d.Wait(this, 0.3);
                                case 6:
                                  n &&
                                    this.PlayAnimation(
                                      this.ANIM_LARGE_LOOP,
                                      this.m_spine,
                                      !0
                                    );
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
                    return function (n) {
                      return t.apply(this, arguments);
                    };
                  })()),
                  (a.ShowBig = (function () {
                    var t = s(
                      u().mark(function t() {
                        return u().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    this.SetNodeActivity(!0),
                                    (t.next = 3),
                                    this.PlayAnimation(this.ANIM_LARGE_START)
                                  );
                                case 3:
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
                  (a.ShowLock = (function () {
                    var t = s(
                      u().mark(function t() {
                        return u().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    this.SetNumActive(!0),
                                    this.SetNodeActivity(!0),
                                    (t.next = 4),
                                    this.PlayAnimation(this.ANIM_LARGE_LOCK)
                                  );
                                case 4:
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
                  (a.ShowLockLoop = (function () {
                    var t = s(
                      u().mark(function t() {
                        return u().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    this.SetNodeActivity(!0),
                                    (t.next = 3),
                                    this.PlayAnimation(
                                      this.ANIM_LARGE_LOOP,
                                      this.m_spine,
                                      !0
                                    )
                                  );
                                case 3:
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
                  (a.ShowWildAddPoint = (function () {
                    var t = s(
                      u().mark(function t() {
                        return u().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    this.SetNodeActivity(!0),
                                    (t.next = 3),
                                    this.PlayAnimation(
                                      this.ANIM_LARGE_ADD_POINT
                                    )
                                  );
                                case 3:
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
                  (a.ShowNumAnim = (function () {
                    var t = s(
                      u().mark(function t(n, i) {
                        var e;
                        return u().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    (void 0 === n && (n = null),
                                    void 0 === i && (i = null),
                                    !this.m_numAnim)
                                  ) {
                                    t.next = 8;
                                    break;
                                  }
                                  return (
                                    this.m_numAnim.play("Num"),
                                    (e = this.m_numAnim.getState("Num")),
                                    n && this.SetNum(n, i),
                                    (t.next = 8),
                                    d.Wait(this, e.duration)
                                  );
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
                    return function (n, i) {
                      return t.apply(this, arguments);
                    };
                  })()),
                  (a.SetNum = function (t, n) {
                    if (this.m_num) {
                      var i = "";
                      if (
                        (this.m_symbol == _.WILD
                          ? ((this.m_prize = t), (i = f.NumberFormatKM(t)))
                          : this.m_symbol == _.WILD_M &&
                            (i = "X" + t.toString()),
                        (this.m_num.string = i),
                        this.m_fnt.length > 0 && this.m_symbol == _.WILD)
                      )
                        A.divide(this.m_prize, n) >= f.HIGH_WILD_ODDS
                          ? (this.m_num.font = this.m_fnt[1])
                          : (this.m_num.font = this.m_fnt[0]);
                    }
                  }),
                  (a.SetNumActive = function (t) {
                    this.m_num &&
                      this.m_num.node.active != t &&
                      (this.m_num.node.active = t);
                  }),
                  (a.SetIsWild = function (t) {
                    this.m_isWild = t;
                  }),
                  (a.SetSibling = function (t) {
                    this.node.getSiblingIndex() != t &&
                      ((this.node.name = t.toFixed()),
                      A.SetZIndex(this.node, t));
                  }),
                  o(n, [
                    {
                      key: "Prize",
                      get: function () {
                        return this.m_prize;
                      },
                    },
                    {
                      key: "Symbol",
                      get: function () {
                        return this.m_symbol;
                      },
                    },
                  ]),
                  n
                );
              })(y)).prototype,
              "m_symbol",
              [S],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (D = n(g.prototype, "m_fnt", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (W = n(g.prototype, "m_num", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (x = n(g.prototype, "m_numAnim", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = g))
          ) || N)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/UnshowPrepare.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./index.ts",
    "./index2.ts",
    "./StateManager.ts",
    "./NewExtraManager.ts",
    "./NewBottomBarManager.ts",
    "./MsgBoxManager.ts",
    "./Define.ts",
    "./CommonGameManager.ts",
  ],
  function (e) {
    "use strict";
    var t, n, a, r, o, i, s, c, u, m, g, h, S, f;
    return {
      setters: [
        function (e) {
          (t = e.inheritsLoose),
            (n = e.asyncToGenerator),
            (a = e.regeneratorRuntime);
        },
        function (e) {
          (r = e.cclegacy), (o = e._decorator), (i = e.log);
        },
        null,
        null,
        function (e) {
          (s = e.BaseState), (c = e.stateManager);
        },
        function (e) {
          u = e.newExtraManager;
        },
        function (e) {
          m = e.newBottombarManager;
        },
        function (e) {
          g = e.msgBoxManager;
        },
        function (e) {
          (h = e.Define), (S = e.CommonState);
        },
        function (e) {
          f = e.commonGameManager;
        },
      ],
      execute: function () {
        var w;
        r._RF.push({}, "3ae85mB14pMhLGqoa4QGp45", "UnshowPrepare", void 0);
        var p = o.ccclass;
        e(
          "UnshowPrepareState",
          p("UnshowPrepareState")(
            (w = (function (e) {
              function r(t) {
                var n;
                return (
                  ((n = e.call(this) || this).m_gameView = null),
                  (n.m_gameView = t),
                  n
                );
              }
              t(r, e);
              var o = r.prototype;
              return (
                (o.OnEnter = (function () {
                  var e = n(
                    a().mark(function e() {
                      return a().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (f.HasUnshow) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt("return");
                              case 2:
                                i("OnEnter State : UNSHOW_PREPARE"),
                                  (u.HasUnshow = !1),
                                  m.SetBarNodeVisiable(!0),
                                  (this.m_gameView.IntroSpine[0].node.active =
                                    !1),
                                  this.m_gameView.UnshowSpinAckQue.Extra &&
                                    this.m_gameView.ExtraBet.ForceSetExtraBet(
                                      !0
                                    ),
                                  (this.m_gameView.SetRotationLock = !1),
                                  this.m_gameView.OnRotation(),
                                  (this.m_gameView.SetRotationLock = !0),
                                  (u.HasUnshow = !1),
                                  g.ShowMessageBox(
                                    h.StringKey.MSGBOX_UNSHOW_BACK,
                                    h.StringKey.MSGBOX_TITLE_SYSTEM_INFO,
                                    function () {
                                      c.NextState(S.SPIN);
                                    }
                                  );
                              case 12:
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
                (o.OnProcess = function () {}),
                (o.OnLeave = function () {}),
                r
              );
            })(s))
          ) || w
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/WaitReadyState.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./index2.ts",
    "./NewBottomBarManager.ts",
    "./AppManager.ts",
    "./StateManager.ts",
  ],
  function (e) {
    "use strict";
    var t, a, n, i, o;
    return {
      setters: [
        function (e) {
          t = e.inheritsLoose;
        },
        function (e) {
          a = e.cclegacy;
        },
        null,
        function (e) {
          n = e.newBottombarManager;
        },
        function (e) {
          i = e.appManager;
        },
        function (e) {
          o = e.BaseState;
        },
      ],
      execute: function () {
        a._RF.push({}, "e5f07zX3Z9JkaP8eawwDW9K", "WaitReadyState", void 0);
        e(
          "WaitReadyState",
          (function (e) {
            function a(t) {
              var a;
              return (
                ((a = e.call(this) || this).m_gameView = null),
                (a.m_gameView = t),
                a
              );
            }
            t(a, e);
            var o = a.prototype;
            return (
              (o.OnEnter = function () {
                this.m_gameView.IntroSpine[0].PlayIntroReady(
                  this.m_gameView.IsLandscape
                ),
                  n.ShowGameScene(),
                  n.ShowPlayReady(),
                  n.SetBarNodeVisiable(!1),
                  i.LoadingComplete(),
                  this.m_gameView.InitExtra();
              }),
              (o.OnProcess = function () {}),
              (o.OnLeave = function () {}),
              a
            );
          })(o)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/WaitResState.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./index2.ts",
    "./Game_Define.ts",
    "./index.ts",
    "./Define.ts",
    "./NewBottomBarManager.ts",
    "./StateManager.ts",
  ],
  function (e) {
    "use strict";
    var t, a, n, i, o, s, u, r, m, l;
    return {
      setters: [
        function (e) {
          t = e.inheritsLoose;
        },
        function (e) {
          (a = e.cclegacy), (n = e.tween);
        },
        null,
        function (e) {
          i = e.default;
        },
        null,
        function (e) {
          (o = e.Define), (s = e.CommonState);
        },
        function (e) {
          (u = e.newBottombarManager), (r = e.SlotBottomBarState);
        },
        function (e) {
          (m = e.stateManager), (l = e.BaseState);
        },
      ],
      execute: function () {
        a._RF.push({}, "47eb7Mz2TNCHIrYnIYPV3ET", "WaitResState", void 0);
        e(
          "WaitResState",
          (function (e) {
            function a(t) {
              var a;
              return (
                ((a = e.call(this) || this).m_gameView = null),
                (a.m_gameView = t),
                a
              );
            }
            t(a, e);
            var l = a.prototype;
            return (
              (l.OnEnter = function () {
                var e = this;
                o.REPLAY_EXTRA > 0 &&
                  this.m_gameView.ExtraBet.ForceSetExtraBet(!0),
                  this.m_gameView.ChangeDemoPlateByRatio(),
                  u.FeaturesDemoInit(
                    function (t) {
                      n(e.m_gameView.node)
                        .call(function () {
                          e.m_gameView.ExtraBet.GoToFeatures(),
                            u.SetSpinState(r.CLICK_SPIN),
                            m.NextState(s.SPIN);
                        })
                        .delay(0.5)
                        .call(function () {
                          e.m_gameView.OnRecvSpinAck(
                            e.m_gameView.RealFeatureSpinAck[t]
                          );
                        })
                        .start();
                    },
                    this.m_gameView.RealFeatureSpinAck.length,
                    u.FindBetIndexByValue(i.FeatureBetValue),
                    function () {
                      u.SetSpinState(r.IDLE),
                        (e.m_gameView.OldRealPlate =
                          e.m_gameView.GetBeginPlate()),
                        e.m_gameView.SyncPlate(),
                        e.m_gameView.IsAutoShowFeatures &&
                          ((e.m_gameView.IsAutoShowFeatures = !1),
                          m.NextState(i.GAMEVIEW_STATE.WAIT_READY));
                    }
                  );
              }),
              (l.OnProcess = function () {
                u.IsFeaturesDemoLoaded() &&
                  this.m_gameView.SlotReels.IsLoadingComplete &&
                  (0 == o.REPLAY_EXTRA || o.REPLAY_EXTRA > 0) &&
                  m.NextState(i.GAMEVIEW_STATE.WAIT_READY);
              }),
              (l.OnLeave = function () {}),
              a
            );
          })(l)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/WildMultState.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./index2.ts",
    "./Game_Define.ts",
    "./StateManager.ts",
  ],
  function (e) {
    "use strict";
    var t, n, a, i, r, s, u;
    return {
      setters: [
        function (e) {
          (t = e.inheritsLoose),
            (n = e.asyncToGenerator),
            (a = e.regeneratorRuntime);
        },
        function (e) {
          i = e.cclegacy;
        },
        null,
        function (e) {
          r = e.default;
        },
        function (e) {
          (s = e.stateManager), (u = e.BaseState);
        },
      ],
      execute: function () {
        i._RF.push({}, "f7f8es/yplE25vi5EnS1Ree", "WildMultState", void 0);
        e(
          "WildMultState",
          (function (e) {
            function i(t) {
              var n;
              return (
                ((n = e.call(this) || this).m_gameView = null),
                (n.m_multEnd = !1),
                (n.m_gameView = t),
                n
              );
            }
            t(i, e);
            var u = i.prototype;
            return (
              (u.OnEnter = (function () {
                var e = n(
                  a().mark(function e() {
                    var t, n, i, s, u, l, c, o, m, f;
                    return a().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (t = this.m_gameView.SpinAckQue),
                                (n = this.m_gameView.GetMgBgDataIdx()),
                                (i = this.m_gameView.SpinAckQue.WildOdd[n].WO),
                                (s = t.AwardDataVec[n].ADV),
                                (u = [[], [], []]),
                                this.m_gameView.SlotReels.SetColumnDark(!0, -1),
                                (l = 0);
                            case 7:
                              if (!(l < s.length)) {
                                e.next = 21;
                                break;
                              }
                              if (
                                !(
                                  s[l].Mult > 1 &&
                                  this.CheckLineHasPrizeWild(s[l].Line)
                                )
                              ) {
                                e.next = 18;
                                break;
                              }
                              (e.t0 = s[l].Line),
                                (e.next =
                                  0 === e.t0
                                    ? 12
                                    : 1 === e.t0 || 3 === e.t0 || 4 === e.t0
                                    ? 14
                                    : 2 === e.t0
                                    ? 16
                                    : 18);
                              break;
                            case 12:
                              return (
                                u[0].push(s[l].Line), e.abrupt("break", 18)
                              );
                            case 14:
                              return (
                                u[1].push(s[l].Line), e.abrupt("break", 18)
                              );
                            case 16:
                              return (
                                u[2].push(s[l].Line), e.abrupt("break", 18)
                              );
                            case 18:
                              l++, (e.next = 7);
                              break;
                            case 21:
                              c = 0;
                            case 22:
                              if (!(c < u.length)) {
                                e.next = 32;
                                break;
                              }
                              if (!(u[c].length > 0)) {
                                e.next = 29;
                                break;
                              }
                              for (
                                o = r.ROW_LENGTH + c,
                                  this.m_gameView.EffectPlate.CloseAllNormalSymbol(),
                                  m = 0;
                                m < u[c].length;
                                m++
                              )
                                (f = u[c][m]),
                                  this.m_gameView.EffectPlate.OpenLineNormalSymbol(
                                    f
                                  );
                              return (
                                (e.next = 29),
                                this.m_gameView.EffectPlate.ShowWildMult(
                                  c,
                                  i[o]
                                )
                              );
                            case 29:
                              c++, (e.next = 22);
                              break;
                            case 32:
                              this.m_gameView.SlotReels.SetColumnDark(!1, -1),
                                (this.m_multEnd = !0);
                            case 34:
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
              (u.OnProcess = function () {
                this.m_multEnd &&
                  ((this.m_multEnd = !1),
                  s.NextState(r.GAMEVIEW_STATE.EFFECTSTART));
              }),
              (u.CheckLineHasPrizeWild = function (e) {
                for (var t = 0; t < r.SYMBOL_LINE_VEC[e].length; t += 2) {
                  var n = r.SYMBOL_LINE_VEC[e][t].x,
                    a = r.SYMBOL_LINE_VEC[e][t].y;
                  if (
                    this.m_gameView.SlotReels.PlateInfo[n].Row[a] ==
                    r.Symbol.WILD
                  )
                    return !0;
                }
                return !1;
              }),
              (u.OnLeave = function () {}),
              i
            );
          })(u)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/WildNumDecimalPlacesProvider.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var i, c, t;
    return {
      setters: [
        function (e) {
          i = e.createClass;
        },
        function (e) {
          (c = e.cclegacy), (t = e._decorator);
        },
      ],
      execute: function () {
        var l;
        c._RF.push(
          {},
          "084e4M9s8BOib8zanbSy1hN",
          "WildNumDecimalPlacesProvider",
          void 0
        );
        var s = t.ccclass;
        e(
          "WildNumDecimalPlacesProvider",
          s("WildNumDecimalAmountProvider")(
            (l = (function () {
              function e() {
                (this.m_WildNumShowDecimalPlaces = void 0),
                  (this.NEED_DECIMAL_BET_THRESHOLD_1 = 10),
                  (this.SHOW_DECIMAL_PLACE_2 = 2);
              }
              return (
                (e.prototype.UpdateDecimalAmount = function (e) {
                  e >= this.NEED_DECIMAL_BET_THRESHOLD_1
                    ? (this.m_WildNumShowDecimalPlaces = 0)
                    : (this.m_WildNumShowDecimalPlaces =
                        this.SHOW_DECIMAL_PLACE_2);
                }),
                i(e, [
                  {
                    key: "DecimalAmount",
                    get: function () {
                      return this.m_WildNumShowDecimalPlaces;
                    },
                  },
                ]),
                e
              );
            })())
          ) || l
        );
        c._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/WinBoardMgr.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BaseSpine.ts",
    "./index.ts",
    "./index2.ts",
    "./Define.ts",
    "./Tools.ts",
    "./NewBottomBarManager.ts",
  ],
  function (t) {
    "use strict";
    var n, e, i, o, a, r, s, c, l, u, p, m, f, d, h, w, _;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (o = t.assertThisInitialized),
            (a = t.asyncToGenerator),
            (r = t.regeneratorRuntime);
        },
        function (t) {
          (s = t.cclegacy),
            (c = t._decorator),
            (l = t.Label),
            (u = t.tween),
            (p = t.UIOpacity),
            (m = t.v3),
            (f = t.Tween);
        },
        function (t) {
          d = t.BaseSpine;
        },
        null,
        null,
        function (t) {
          h = t.Define;
        },
        function (t) {
          w = t.tools;
        },
        function (t) {
          _ = t.newBottombarManager;
        },
      ],
      execute: function () {
        var b, g, y, v, L;
        s._RF.push({}, "e8094rRlKNOTqYBFE5dZCcZ", "WinBoardMgr", void 0);
        var T = c.ccclass,
          B = c.property;
        t(
          "WinBoardMgr",
          ((b = T("WinBoardMgr")),
          (g = B({ type: l, tooltip: "跑小贏分LABEL" })),
          b(
            ((L = n(
              (v = (function (t) {
                function n() {
                  for (
                    var n, e = arguments.length, a = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    (n = t.call.apply(t, [this].concat(a)) || this),
                    i(n, "m_winLabel", L, o(n)),
                    (n.m_win = 0),
                    n
                  );
                }
                e(n, t);
                var s = n.prototype;
                return (
                  (s.onLoad = function () {
                    this.m_winLabel.string = "0";
                  }),
                  (s.SetActive = function (t) {
                    this.node.active != t && (this.node.active = t);
                  }),
                  (s.ShowScore = (function () {
                    var t = a(
                      r().mark(function t(n, e) {
                        var i,
                          o,
                          a,
                          s = this;
                        return r().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    void 0 === e && (e = 0),
                                    (this.node.active = !0),
                                    (this.m_winLabel.string =
                                      w.FormatNumberThousands(
                                        _.GetDisplayValue(n),
                                        w.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                                      )),
                                    (this.m_win = n),
                                    (i = new Promise(function (t) {
                                      u(s.m_winLabel.node.getComponent(p))
                                        .to(0.2, { opacity: 255 })
                                        .call(t)
                                        .start();
                                    })),
                                    (o = new Promise(function (t) {
                                      u(s.node.getComponent(p))
                                        .to(0.2, { opacity: 255 })
                                        .call(t)
                                        .start();
                                    })),
                                    (a = new Promise(function (t) {
                                      u(s.node)
                                        .to(0.2, { scale: m(1.2, 1.2) })
                                        .call(t)
                                        .start();
                                    })),
                                    (t.next = 9),
                                    Promise.all([i, o, a])
                                  );
                                case 9:
                                  if (!(e > 0)) {
                                    t.next = 12;
                                    break;
                                  }
                                  return (t.next = 12), h.Wait(this, 1 * e);
                                case 12:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                    return function (n, e) {
                      return t.apply(this, arguments);
                    };
                  })()),
                  (s.RunScore = (function () {
                    var t = a(
                      r().mark(function t(n, e) {
                        var i,
                          o,
                          a,
                          s = this;
                        return r().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (!(n <= 0)) {
                                    t.next = 2;
                                    break;
                                  }
                                  return t.abrupt("return");
                                case 2:
                                  (i = w.divide(e, 0.02)),
                                    (o = this.m_win),
                                    (a = w.divide(w.strip(n - o), i)),
                                    f.stopAllByTarget(this.m_winLabel.node),
                                    u(this.m_winLabel.node)
                                      .parallel(
                                        u().repeat(
                                          i,
                                          u()
                                            .call(function () {
                                              (o += a),
                                                (s.m_winLabel.string =
                                                  w.FormatNumberThousands(
                                                    _.GetDisplayValue(o),
                                                    w.FORMAT_NUMBER_TYPE
                                                      .PERMANENT_DOT
                                                  ));
                                            })
                                            .delay(0.02)
                                        ),
                                        u().call(function () {
                                          u(s.m_winLabel.node.getComponent(p))
                                            .to(0.2, { opacity: 255 })
                                            .start();
                                        }),
                                        u().call(function () {
                                          u(s.node.getComponent(p))
                                            .to(0.2, { opacity: 255 })
                                            .start();
                                        }),
                                        u().to(e, { scale: m(1.2, 1.2) })
                                      )
                                      .call(function () {
                                        s.m_winLabel.string =
                                          w.FormatNumberThousands(
                                            _.GetDisplayValue(n),
                                            w.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                                          );
                                      })
                                      .start();
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
                    return function (n, e) {
                      return t.apply(this, arguments);
                    };
                  })()),
                  (s.CloseScore = function () {
                    var t = this;
                    u(this.m_winLabel.node)
                      .parallel(
                        u().call(function () {
                          u(t.m_winLabel.node.getComponent(p))
                            .to(0.01, { opacity: 0.1 })
                            .start();
                        }),
                        u().call(function () {
                          u(t.node.getComponent(p))
                            .to(0.01, { opacity: 0.1 })
                            .start();
                        }),
                        u().to(0.3, { scale: m(1, 1) })
                      )
                      .call(function () {
                        (t.m_winLabel.string = "0"),
                          (t.m_win = 0),
                          (t.node.active = !1);
                      })
                      .start();
                  }),
                  (s.Reset = function () {
                    (this.m_winLabel.string = "0"),
                      (this.m_win = 0),
                      (this.m_winLabel.node.getComponent(p).opacity = 0.1),
                      (this.node.getComponent(p).opacity = 0.1);
                  }),
                  n
                );
              })(d)).prototype,
              "m_winLabel",
              [g],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (y = v))
          ) || y)
        );
        s._RF.pop();
      },
    };
  }
);

(function (r) {
  r("virtual:///prerequisite-imports/game", "chunks:///_virtual/game");
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
