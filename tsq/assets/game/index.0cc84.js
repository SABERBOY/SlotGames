System.register(
  "chunks:///game.js",
  ["./index-29f2de7f.js", "cc"],
  function (exports, module) {
    "use strict";
    var BigWinComponent,
      _inheritsLoose,
      node,
      BigWinAnimName,
      node$1,
      _applyDecoratedDescriptor,
      _initializerDefineProperty,
      _assertThisInitialized,
      node$2,
      SwitchOffKeyDefine,
      node$3,
      node$4,
      node$5,
      CommonState,
      node$6,
      _createClass,
      _asyncToGenerator,
      _regeneratorRuntime,
      SpineKit,
      Shake,
      ManualComponent,
      node$7,
      BaseState,
      node$8,
      SlotBottomBarState,
      node$9,
      node$a,
      node$b,
      node$c,
      Common_IdleState,
      AstarteInit,
      node$d,
      node$e,
      CommonEventName,
      node$f,
      BottomBar_UIName,
      DEFAULT_TITLE_KEY,
      node$g,
      node$h,
      node$i,
      node$j,
      node$k,
      node$l,
      cclegacy,
      Enum,
      v2,
      _decorator,
      Sprite,
      CCString,
      Label,
      Component,
      Node,
      Animation,
      instantiate,
      sp,
      tween,
      UITransform,
      Tween,
      log,
      Prefab,
      UIOpacity,
      SpriteFrame,
      Vec2,
      Size,
      UIRenderer,
      color,
      v3,
      Mask,
      SpriteAtlas,
      sys,
      screen,
      view,
      ResolutionPolicy,
      input,
      Input,
      KeyCode,
      error;
    return {
      setters: [
        function (e) {
          (BigWinComponent = e.B),
            (_inheritsLoose = e.a),
            (node = e.g),
            (BigWinAnimName = e.w),
            (node$1 = e.l),
            (_applyDecoratedDescriptor = e._),
            (_initializerDefineProperty = e.b),
            (_assertThisInitialized = e.c),
            (node$2 = e.n),
            (SwitchOffKeyDefine = e.S),
            (node$3 = e.h),
            (node$4 = e.e),
            (node$5 = e.j),
            (CommonState = e.k),
            (node$6 = e.r),
            (_createClass = e.d),
            (_asyncToGenerator = e.o),
            (_regeneratorRuntime = e.p),
            (SpineKit = e.v),
            (Shake = e.x),
            (ManualComponent = e.M),
            (node$7 = e.y),
            (BaseState = e.z),
            (node$8 = e.A),
            (SlotBottomBarState = e.t),
            (node$9 = e.D),
            (node$a = e.i),
            (node$b = e.E),
            (node$c = e.F),
            (Common_IdleState = e.G),
            (AstarteInit = e.H),
            (node$d = e.I),
            (node$e = e.f),
            (CommonEventName = e.C),
            (node$f = e.J),
            (BottomBar_UIName = e.K),
            (DEFAULT_TITLE_KEY = e.L),
            (node$g = e.N),
            (node$h = e.O),
            (node$i = e.P),
            (node$j = e.Q),
            (node$k = e.s),
            (node$l = e.R);
        },
        function (e) {
          (cclegacy = e.cclegacy),
            (Enum = e.Enum),
            (v2 = e.v2),
            (_decorator = e._decorator),
            (Sprite = e.Sprite),
            (CCString = e.CCString),
            (Label = e.Label),
            (Component = e.Component),
            (Node = e.Node),
            (Animation = e.Animation),
            (instantiate = e.instantiate),
            (sp = e.sp),
            (tween = e.tween),
            (UITransform = e.UITransform),
            (Tween = e.Tween),
            (log = e.log),
            (Prefab = e.Prefab),
            (UIOpacity = e.UIOpacity),
            (SpriteFrame = e.SpriteFrame),
            (Vec2 = e.Vec2),
            (Size = e.Size),
            (UIRenderer = e.UIRenderer),
            (color = e.color),
            (v3 = e.v3),
            (Mask = e.Mask),
            (SpriteAtlas = e.SpriteAtlas),
            (sys = e.sys),
            (screen = e.screen),
            (view = e.view),
            (ResolutionPolicy = e.ResolutionPolicy),
            (input = e.input),
            (Input = e.Input),
            (KeyCode = e.KeyCode),
            (error = e.error);
        },
      ],
      execute: function () {
        var GAMEVIEW_STATE,
          DelayType,
          Symbol,
          PolicySet,
          LIGHT_TYPE,
          BG_TYPE,
          EFFECT_Z_INDEX;
        cclegacy._RF.push({}, "fb526zcdrBLKJs78RIAN2pR", "TSQ_Define", void 0),
          (function (e) {
            (e[(e.WAIT_READY = 0)] = "WAIT_READY"),
              (e[(e.PLATE_SHOW = 1)] = "PLATE_SHOW"),
              (e[(e.FEATURE_SHOW = 2)] = "FEATURE_SHOW"),
              (e[(e.UNSHOW_PREPARE = 3)] = "UNSHOW_PREPARE"),
              (e[(e.FIRST_PLATE = 4)] = "FIRST_PLATE"),
              (e[(e.EXPLODE = 5)] = "EXPLODE"),
              (e[(e.LIGHT_BALL_CYAN = 6)] = "LIGHT_BALL_CYAN"),
              (e[(e.LIGHT_BALL_PURPLE = 7)] = "LIGHT_BALL_PURPLE"),
              (e[(e.LIGHT_BALL_GREEN = 8)] = "LIGHT_BALL_GREEN"),
              (e[(e.LIGHT_BALL_ORANGE = 9)] = "LIGHT_BALL_ORANGE"),
              (e[(e.LIGHT_BALL_BLUE = 10)] = "LIGHT_BALL_BLUE"),
              (e[(e.COLLECT_LIGHT_POINT = 11)] = "COLLECT_LIGHT_POINT"),
              (e[(e.MATCHING_PATCH_UP = 12)] = "MATCHING_PATCH_UP"),
              (e[(e.AWARD = 13)] = "AWARD"),
              (e[(e.ENTER_FREE = 14)] = "ENTER_FREE"),
              (e[(e.FREE_GAME_LEVEL_UP = 15)] = "FREE_GAME_LEVEL_UP"),
              (e[(e.LEAVE_FREE = 16)] = "LEAVE_FREE"),
              (e[(e.ROUND_END = 17)] = "ROUND_END");
          })(GAMEVIEW_STATE || (GAMEVIEW_STATE = {})),
          (function (e) {
            (e[(e.Normal = 0)] = "Normal"),
              (e[(e.Get = 1)] = "Get"),
              (e[(e.NotGet = 2)] = "NotGet");
          })(DelayType || (DelayType = {})),
          (function (e) {
            (e[(e.GREEN = 0)] = "GREEN"),
              (e[(e.PURPLE = 1)] = "PURPLE"),
              (e[(e.RED = 2)] = "RED"),
              (e[(e.TOTEM_BLUE = 3)] = "TOTEM_BLUE"),
              (e[(e.TOTEM_GREEN = 4)] = "TOTEM_GREEN"),
              (e[(e.TOTEM_PURPLE = 5)] = "TOTEM_PURPLE"),
              (e[(e.TOTEM_RED = 6)] = "TOTEM_RED"),
              (e[(e.WILD = 7)] = "WILD"),
              (e[(e.SYMBOL_MAX = 8)] = "SYMBOL_MAX");
          })(Symbol || (Symbol = {})),
          (function (e) {
            (e[(e.POLICY_DEFAULT = 0)] = "POLICY_DEFAULT"),
              (e[(e.POLICY_COMBO1 = 1)] = "POLICY_COMBO1"),
              (e[(e.POLICY_COMBO2 = 2)] = "POLICY_COMBO2"),
              (e[(e.POLICY_COMBO3 = 3)] = "POLICY_COMBO3"),
              (e[(e.POLICY_COMBO4 = 4)] = "POLICY_COMBO4"),
              (e[(e.POLICY_COMBO5 = 5)] = "POLICY_COMBO5"),
              (e[(e.POLICY_COMBO6 = 6)] = "POLICY_COMBO6"),
              (e[(e.POLICY_MAX = 7)] = "POLICY_MAX");
          })(PolicySet || (PolicySet = {})),
          (function (e) {
            (e[(e.DEFAULT = 0)] = "DEFAULT"),
              (e[(e.CYAN = 1)] = "CYAN"),
              (e[(e.PURPLE = 2)] = "PURPLE"),
              (e[(e.GREEN = 3)] = "GREEN"),
              (e[(e.ORANGE = 4)] = "ORANGE"),
              (e[(e.BLUE = 5)] = "BLUE");
          })(LIGHT_TYPE || (LIGHT_TYPE = {})),
          (function (e) {
            (e[(e.PIG = 0)] = "PIG"),
              (e[(e.PIG2 = 1)] = "PIG2"),
              (e[(e.LION = 2)] = "LION");
          })(BG_TYPE || (BG_TYPE = {})),
          (function (e) {
            (e[(e.Back = 0)] = "Back"),
              (e[(e.Anim = 1)] = "Anim"),
              (e[(e.Wild = 2)] = "Wild"),
              (e[(e.Front = 3)] = "Front"),
              (e[(e.Eft = 4)] = "Eft"),
              (e[(e.NearWin = 5)] = "NearWin"),
              (e[(e.BigWin = 6)] = "BigWin");
          })(EFFECT_Z_INDEX || (EFFECT_Z_INDEX = {}));
        var TSQ_Define = (function () {
            function e() {}
            return (
              (e.ConvertIndex2ColRow = function (t) {
                if (t >= 0 && t < e.COL * e.ROW) {
                  var o = v2(-1, -1);
                  return (o.y = t % e.ROW), (o.x = (t - o.y) / e.ROW), o;
                }
                return null;
              }),
              (e.OnExit = function () {
                this.AudioClips = {
                  Reel_Spin: null,
                  Reel_Stop: null,
                  Debut: null,
                  BGM_MG: null,
                  BGM_BF_Appear: null,
                  BGM_BF: null,
                  BF_End: null,
                  BF_LevelUp_01: null,
                  BF_LevelUp_02: null,
                  Multiplier_Up: null,
                  Small_Win_01: null,
                  Small_Win_02: null,
                  Small_Win_03: null,
                  Big_Win: null,
                  Big_Win_Change: null,
                  Big_Win_End: null,
                  Light_Get: null,
                  Light_Trigger: null,
                  Light_Executive01: null,
                  Light_Executive02: null,
                  Light_Executive03: null,
                  Light_Executive04: null,
                  Light_Executive05: null,
                  Light_Executive01_s: null,
                  Light_Executive02_s: null,
                  Light_Executive03_s: null,
                  Light_Executive04_s: null,
                  Light_Executive05_s: null,
                  Light_Fly: null,
                  Light_Point: null,
                  Eliminat: null,
                  Eliminat_s: null,
                };
              }),
              e
            );
          })(),
          _class,
          WinType;
        (TSQ_Define.Ver = "39"),
          (TSQ_Define.GameState = Enum(GAMEVIEW_STATE)),
          (TSQ_Define.COL = 8),
          (TSQ_Define.ROW = 8),
          (TSQ_Define.PolicySet = Enum(PolicySet)),
          (TSQ_Define.Symbol = Enum(Symbol)),
          (TSQ_Define.MinCombo = 4),
          (TSQ_Define.Combo2Round = [4, 5, 10, 20]),
          (TSQ_Define.BG_TYPE = Enum(BG_TYPE)),
          (TSQ_Define.LIGHT_TYPE = Enum(LIGHT_TYPE)),
          (TSQ_Define.EFFECT_Z_INDEX = Enum(EFFECT_Z_INDEX)),
          (TSQ_Define.GEN_MIN_SIZE = 1),
          (TSQ_Define.GEN_MAX_SIZE = 5),
          (TSQ_Define.MAX_LEVEL_COUNT = 999),
          (TSQ_Define.HP_BAR_NEAR_WIN_PERCENT = 80),
          (TSQ_Define.Drop_Sound_Effect_Interval = 50),
          (TSQ_Define.DropSoundVol = [
            1, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6,
          ]),
          (TSQ_Define.FEATURE_BET_VALUE = 10),
          (TSQ_Define.FG_DELAY_EXPLODE = 1),
          (TSQ_Define.HARD_STOP_SPEED = 2.5),
          (TSQ_Define.LIGHT_POINT_INTERVAL = 0.5),
          (TSQ_Define.SKY_DROP_DELAY_AFTER_LIGHT_POINT_MOVE = 0.1),
          (TSQ_Define.LIGHT_POINT_FLY_SPEED = 1.7),
          (TSQ_Define.COLOR_EFFECT_SPEED = 1),
          (TSQ_Define.IsInFG = !1),
          (TSQ_Define.IsBuyBonus = !1),
          (TSQ_Define.EliminateTotalCount = 0),
          (TSQ_Define.Level = 1),
          (TSQ_Define.Round = -1),
          (TSQ_Define.PlateIdx = -1),
          (TSQ_Define.TotalWin = 0),
          (TSQ_Define.IsBgAuto = !1),
          (TSQ_Define.IsCheckChips = !1),
          (TSQ_Define.SPIN_ACK_TYPE = {
            AT_SUCCESS: 0,
            AT_MONEY_NOT_ENOUGH: 302,
            AT_MONEY_ABNORMAL: 301,
            AT_MONEY_NOT_ENOUGH_SINGLE: 305,
          }),
          (TSQ_Define.AudioPathPre = "Sound/"),
          (TSQ_Define.AudioClips = {
            Reel_Spin: null,
            Reel_Stop: null,
            Debut: null,
            BGM_MG: null,
            BGM_BF_Appear: null,
            BGM_BF: null,
            BF_End: null,
            BF_LevelUp_01: null,
            BF_LevelUp_02: null,
            Multiplier_Up: null,
            Small_Win_01: null,
            Small_Win_02: null,
            Small_Win_03: null,
            Big_Win: null,
            Big_Win_Change: null,
            Big_Win_End: null,
            Light_Get: null,
            Light_Trigger: null,
            Light_Executive01: null,
            Light_Executive02: null,
            Light_Executive03: null,
            Light_Executive04: null,
            Light_Executive05: null,
            Light_Executive01_s: null,
            Light_Executive02_s: null,
            Light_Executive03_s: null,
            Light_Executive04_s: null,
            Light_Executive05_s: null,
            Light_Fly: null,
            Light_Point: null,
            Eliminat: null,
            Eliminat_s: null,
          }),
          (TSQ_Define.AckType = {
            login: 0,
            exchangeChips: 2,
            info: 11,
            spin: 12,
            buyBonus: 36,
            heartBeat: 98,
            serverMsg: 99,
          }),
          (TSQ_Define.SERVER_RET_TYPE = {
            SERVER_SUCCESS: 0,
            SERVER_ERROR_SEATE: 799,
            SERVER_NOUSE: 899,
            SERVER_MAINTAIN: 231,
            SERVER_SHUTDOWN: 232,
            SERVER_NEED_UID: 233,
            SERVER_NEED_LOGIN: 234,
            SERVER_TOKEN_ERROR: 235,
          }),
          (TSQ_Define.LOGIN_RESULT_TYPE = {
            LOGIN_SUCCESS: 0,
            LOGIN_FAIL: 1,
            API_VERIFY_FAIL: 235,
            API_LOGIN_REPEAT_FAIL: 2002,
          }),
          (TSQ_Define.StringKey = {
            BONUS_GAME_TXT: "BONUS_GAME_TXT",
            FEATURE_LEFT: "FEATURE_LEFT",
            FEATURE_RIGHT: "FEATURE_RIGHT",
          }),
          (TSQ_Define.SmallAward = [1, 3, 6]),
          (TSQ_Define.LINE_AWARD_SETTING = [
            { betRate: 10, soundName: "Common_big_win", runScoreTime: 5 },
            { betRate: 15, soundName: "Common_mega_win", runScoreTime: 5 },
            { betRate: 40, soundName: "Common_super_win", runScoreTime: 5 },
          ]),
          (TSQ_Define.ShowDisplayValue = null),
          cclegacy._RF.pop(),
          cclegacy._RF.push({}, "ae466QAuBxH2ZhPJSjvIe84", "BigWin", void 0),
          (function (e) {
            (e[(e.BIGWIN = 0)] = "BIGWIN"),
              (e[(e.MEGAWIN = 1)] = "MEGAWIN"),
              (e[(e.SUPERWIN = 2)] = "SUPERWIN");
          })(WinType || (WinType = {}));
        var AWARD_SETTING = [
            { betRate: 0, winType: BigWinComponent.Level.NONE },
            { betRate: 6, winType: BigWinComponent.Level.BIG },
            { betRate: 15, winType: BigWinComponent.Level.MEGA },
            { betRate: 30, winType: BigWinComponent.Level.SUPER },
          ],
          ccclass = _decorator.ccclass,
          BigWin =
            ccclass(
              (_class = (function (e) {
                function t() {
                  for (
                    var t, o = arguments.length, n = new Array(o), i = 0;
                    i < o;
                    i++
                  )
                    n[i] = arguments[i];
                  return (
                    ((t = e.call.apply(e, [this].concat(n)) || this).m_endCb =
                      null),
                    (t.m_isShow = !1),
                    (t.m_bigWinAduioId = void 0),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.SetInit = function () {
                    var t = this;
                    e.prototype.Init.call(
                      this,
                      function (e, o, n) {
                        return t.EventCallback(n);
                      },
                      null
                    );
                  }),
                  (o.ShowWin = function (t, o, n) {
                    var i = this.CheckAward(t, o);
                    i > 0 &&
                      (n && (this.m_endCb = n),
                      (this.node.active = !0),
                      (this.m_isShow = !0),
                      e.prototype.Show.call(this, t, i));
                  }),
                  (o.CheckSetting = function (e, t) {
                    for (
                      var o = node.divide(e, t), n = AWARD_SETTING.length - 1;
                      n > 0;
                      n--
                    )
                      if (o >= AWARD_SETTING[n].betRate) return !0;
                    return !1;
                  }),
                  (o.EndFunction = function () {
                    this.m_endCb && (this.m_endCb(), (this.m_endCb = null)),
                      (this.node.active = !1);
                  }),
                  (o.CheckAward = function (e, t) {
                    for (
                      var o = -1,
                        n = node.divide(e, t),
                        i = AWARD_SETTING.length - 1;
                      i > 0;
                      i--
                    ) {
                      var r = AWARD_SETTING[i];
                      if (n >= r.betRate) {
                        o = r.winType;
                        break;
                      }
                    }
                    return o;
                  }),
                  (o.EventCallback = function (e) {
                    var t;
                    switch (e) {
                      case BigWinAnimName.Big.Start:
                        (t = TSQ_Define.AudioClips.Big_Win),
                          (this.m_bigWinAduioId = node$1.Play(t));
                        break;
                      case BigWinAnimName.Big.End:
                        (t = TSQ_Define.AudioClips.Big_Win_End),
                          this.PlayEnd(t);
                        break;
                      case BigWinAnimName.Mega.Start:
                        (t = TSQ_Define.AudioClips.Big_Win_Change),
                          node$1.Play(t);
                        break;
                      case BigWinAnimName.Mega.End:
                        (t = TSQ_Define.AudioClips.Big_Win_End),
                          this.PlayEnd(t);
                        break;
                      case BigWinAnimName.Super.Start:
                        (t = TSQ_Define.AudioClips.Big_Win_Change),
                          node$1.Play(t);
                        break;
                      case BigWinAnimName.Super.End:
                        (t = TSQ_Define.AudioClips.Big_Win_End),
                          this.PlayEnd(t);
                    }
                  }),
                  (o.PlayEnd = function (e) {
                    node$1.Play(e), node$1.Stop(this.m_bigWinAduioId);
                  }),
                  (o.update = function (t) {
                    e.prototype.update.call(this, t),
                      this.m_isShow &&
                        this.IsEnd &&
                        ((this.m_isShow = !1), this.EndFunction());
                  }),
                  t
                );
              })(BigWinComponent))
            ) || _class,
          _dec,
          _dec2,
          _dec3,
          _dec4,
          _dec5,
          _class$1,
          _class2,
          _descriptor,
          _descriptor2,
          _descriptor3,
          _descriptor4;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "980fcMhoT1HAZTIvnyz7jr6",
            "BuyBonusCell",
            void 0
          );
        var ccclass$1 = _decorator.ccclass,
          property = _decorator.property,
          BuyBonusCell =
            ((_dec = ccclass$1("BuyBonusCell")),
            (_dec2 = property({ type: Sprite, tooltip: "購買文字" })),
            (_dec3 = property({ type: Sprite, tooltip: "項目標題" })),
            (_dec4 = property({ type: CCString, tooltip: "標題圖片名稱" })),
            (_dec5 = property({ type: Label, tooltip: "金額" })),
            _dec(
              ((_class2 = (function (e) {
                function t() {
                  for (
                    var t, o = arguments.length, n = new Array(o), i = 0;
                    i < o;
                    i++
                  )
                    n[i] = arguments[i];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_buyHintSprite",
                      _descriptor,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_titleSprite",
                      _descriptor2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_titlePicName",
                      _descriptor3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_priceLabel",
                      _descriptor4,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.SetTxt = function (e, t) {
                    (this.m_buyHintSprite.spriteFrame = t),
                      (this.m_titleSprite.spriteFrame = e);
                  }),
                  (o.SetPrice = function (e) {
                    this.m_priceLabel.string = e;
                  }),
                  t
                );
              })(Component)),
              (_descriptor = _applyDecoratedDescriptor(
                _class2.prototype,
                "m_buyHintSprite",
                [_dec2],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor2 = _applyDecoratedDescriptor(
                _class2.prototype,
                "m_titleSprite",
                [_dec3],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor3 = _applyDecoratedDescriptor(
                _class2.prototype,
                "m_titlePicName",
                [_dec4],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return "";
                  },
                }
              )),
              (_descriptor4 = _applyDecoratedDescriptor(
                _class2.prototype,
                "m_priceLabel",
                [_dec5],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_class$1 = _class2))
            ) || _class$1),
          _dec$1,
          _dec2$1,
          _dec3$1,
          _dec4$1,
          _dec5$1,
          _dec6,
          _dec7,
          _dec8,
          _class$2,
          _class2$1,
          _descriptor$1,
          _descriptor2$1,
          _descriptor3$1,
          _descriptor4$1,
          _descriptor5,
          _descriptor6,
          _descriptor7;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "3470eGCxU1Iz5Rha5V+Gnqf", "BuyBonus", void 0);
        var AnimName = { Show: "Buy_Feature_Open", Hide: "Buy_Feature_Close" },
          CellTitleSprite = [
            "Txt_Buy_Feature_01",
            "Txt_Buy_Feature_02",
            "Txt_Buy_Feature_03",
          ],
          ccclass$2 = _decorator.ccclass,
          property$1 = _decorator.property,
          BuyBonus =
            ((_dec$1 = ccclass$2("BuyBonus")),
            (_dec2$1 = property$1({ type: Node, tooltip: "介面" })),
            (_dec3$1 = property$1({
              type: Animation,
              tooltip: "介面開關動畫",
            })),
            (_dec4$1 = property$1({ type: Node, tooltip: "開啟按鈕節點" })),
            (_dec5$1 = property$1({ type: Label, tooltip: "押注金額" })),
            (_dec6 = property$1({ type: BuyBonusCell, tooltip: "購買項目" })),
            (_dec7 = property$1({ type: Sprite, tooltip: "標題" })),
            (_dec8 = property$1({ type: Sprite, tooltip: "押注" })),
            _dec$1(
              ((_class2$1 = (function (e) {
                function t() {
                  for (
                    var t, o = arguments.length, n = new Array(o), i = 0;
                    i < o;
                    i++
                  )
                    n[i] = arguments[i];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_viewNode",
                      _descriptor$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_anim",
                      _descriptor2$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_openBtnNode",
                      _descriptor3$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_betLabel",
                      _descriptor4$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_buyBonusCells",
                      _descriptor5,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_titleSprite",
                      _descriptor6,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_betSprite",
                      _descriptor7,
                      _assertThisInitialized(t)
                    ),
                    (t.m_gameView = null),
                    (t.m_setting = null),
                    (t.m_betList = null),
                    (t.m_betIdx = 0),
                    (t.m_bonusType = null),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.SetTxt = function () {
                    var e = node$2.GetGameAtlas();
                    (this.m_betSprite.spriteFrame = e.getSpriteFrame(
                      "Txt_Buy_Feature_Bet"
                    )),
                      (this.m_titleSprite.spriteFrame = e.getSpriteFrame(
                        "Txt_Buy_Feature_Title"
                      ));
                    for (
                      var t = e.getSpriteFrame("Txt_Buy_Feature_Buy"), o = 0;
                      o < this.m_buyBonusCells.length;
                      o++
                    ) {
                      var n = e.getSpriteFrame(CellTitleSprite[o]);
                      this.m_buyBonusCells[o].SetTxt(n, t);
                    }
                  }),
                  (o.Init = function (e, t) {
                    var o = this;
                    if (
                      !e ||
                      node.CheckSwitchOff(SwitchOffKeyDefine.ShopingMall)
                    )
                      return (
                        (this.m_viewNode.active = !1),
                        void this.SetBuyBtnVisible(!1)
                      );
                    (this.m_setting = e),
                      (this.m_gameView = t),
                      (this.m_betList = JSON.parse(
                        JSON.stringify(node$3.GetBetList())
                      ));
                    for (
                      var n = this.m_betList.length - 1;
                      n >= 0 && this.m_betList[n] > this.m_setting.MaxBet;
                      n--
                    )
                      this.m_betList.splice(n);
                    (this.m_betIdx = node$3.GetNowBetIndex()),
                      (!this.m_betList[this.m_betIdx] ||
                        this.m_betList[this.m_betIdx] >
                          this.m_betList[this.m_betList.length - 1]) &&
                        (this.m_betIdx = this.m_betList.length - 1),
                      this.SetPrice();
                    for (
                      var i = function (e) {
                          o.m_buyBonusCells[e].node.on(
                            Node.EventType.TOUCH_END,
                            function () {
                              node$1.Play(node$4.AudioClips.COMMON_BTN),
                                (o.m_bonusType = e),
                                o.Hide(),
                                node$3.SetNowBet(o.m_betList[o.m_betIdx]),
                                o.m_gameView.ClickSpin();
                            }
                          );
                        },
                        r = 0;
                      r < this.m_buyBonusCells.length;
                      r++
                    )
                      i(r);
                    this.m_viewNode.active = !1;
                  }),
                  (o.SetPrice = function () {
                    var e = this.m_betList[this.m_betIdx];
                    this.m_betLabel.string =
                      "" +
                      node$4.DollarSymbol +
                      node.FormatNumberThousands(
                        e,
                        node.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                      );
                    for (var t = 0; t < this.m_buyBonusCells.length; t++) {
                      var o = node.times(e, this.m_setting.PriceOdd[t]);
                      this.m_buyBonusCells[t].SetPrice(
                        "" +
                          node$4.DollarSymbol +
                          node.FormatNumberThousands(
                            o,
                            node.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                          )
                      );
                    }
                  }),
                  (o.SetBuyBtnVisible = function (e) {
                    this.m_openBtnNode.active = !!this.m_setting && e;
                  }),
                  (o.GetBuyBtnVisible = function () {
                    return this.m_openBtnNode.active;
                  }),
                  (o.GetBuyBonusBet = function () {
                    return this.m_setting && null !== this.m_bonusType
                      ? node.times(
                          this.m_setting.PriceOdd[this.m_bonusType],
                          node$3.GetNowBetValue()
                        )
                      : node.strip(node$3.GetNowBetValue());
                  }),
                  (o.CleanInfo = function () {
                    this.m_bonusType = null;
                  }),
                  (o.Show = function () {
                    if (node$5.Current() === CommonState.IDLE) {
                      if (this.m_anim.getState(AnimName.Hide).isPlaying) return;
                      node$1.Play(node$4.AudioClips.COMMON_BTN),
                        (this.m_viewNode.active = !0),
                        this.m_anim.play(AnimName.Show);
                    } else
                      node$6.ShowMessageBox(
                        node$4.StringKey.FREEWINCASH_PLAYING1
                      );
                  }),
                  (o.Hide = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, o, n;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (!1 !== this.GetBuyBtnVisible()) {
                                    e.next = 3;
                                    break;
                                  }
                                  return (
                                    (this.m_viewNode.active = !1),
                                    e.abrupt("return")
                                  );
                                case 3:
                                  if (
                                    ((t = this.m_anim.getState(AnimName.Show)),
                                    (o = this.m_anim.getState(AnimName.Hide)),
                                    !t.isPlaying && !o.isPlaying)
                                  ) {
                                    e.next = 7;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 7:
                                  return (
                                    node$1.Play(node$4.AudioClips.COMMON_BTN),
                                    this.m_anim.play(AnimName.Hide),
                                    (n = this.m_anim.getState(AnimName.Hide)),
                                    (e.next = 12),
                                    node$4.Wait(this, n.duration)
                                  );
                                case 12:
                                  this.m_viewNode.active = !1;
                                case 13:
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
                  (o.AddBet = function () {
                    this.m_betIdx + 1 > this.m_betList.length - 1 ||
                      (node$1.Play(node$4.AudioClips.COMMON_BTN),
                      this.m_betIdx++,
                      this.SetPrice());
                  }),
                  (o.SubBet = function () {
                    this.m_betIdx - 1 < 0 ||
                      (node$1.Play(node$4.AudioClips.COMMON_BTN),
                      this.m_betIdx--,
                      this.SetPrice());
                  }),
                  _createClass(t, [
                    {
                      key: "BonusType",
                      get: function () {
                        return this.m_bonusType;
                      },
                    },
                  ]),
                  t
                );
              })(Component)),
              (_descriptor$1 = _applyDecoratedDescriptor(
                _class2$1.prototype,
                "m_viewNode",
                [_dec2$1],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor2$1 = _applyDecoratedDescriptor(
                _class2$1.prototype,
                "m_anim",
                [_dec3$1],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor3$1 = _applyDecoratedDescriptor(
                _class2$1.prototype,
                "m_openBtnNode",
                [_dec4$1],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor4$1 = _applyDecoratedDescriptor(
                _class2$1.prototype,
                "m_betLabel",
                [_dec5$1],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor5 = _applyDecoratedDescriptor(
                _class2$1.prototype,
                "m_buyBonusCells",
                [_dec6],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor6 = _applyDecoratedDescriptor(
                _class2$1.prototype,
                "m_titleSprite",
                [_dec7],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor7 = _applyDecoratedDescriptor(
                _class2$1.prototype,
                "m_betSprite",
                [_dec8],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_class$2 = _class2$1))
            ) || _class$2),
          LightType;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "57134AHFeJBZocwRqhsSrOP",
            "DataStructure",
            void 0
          ),
          (function (e) {
            (e[(e.LightTypeNone = 0)] = "LightTypeNone"),
              (e[(e.LightTypeOne = 1)] = "LightTypeOne"),
              (e[(e.LightTypeTwo = 2)] = "LightTypeTwo"),
              (e[(e.LightTypeThree = 3)] = "LightTypeThree"),
              (e[(e.LightTypeFour = 4)] = "LightTypeFour"),
              (e[(e.LightTypeFive = 5)] = "LightTypeFive");
          })(LightType || (LightType = {})),
          cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "dae60yC6cxHPIn0tsTJ4RoS",
            "SymbolSpine",
            void 0
          );
        var SymbolSpine = (function () {
            function e(e) {
              (this.m_size = void 0),
                (this.m_symbol = void 0),
                (this.m_zIndex = void 0),
                (this.m_eftNode = void 0),
                (this.m_frontEftNode = void 0),
                (this.m_backEftNode = void 0),
                (this.m_winFrontEftNode = void 0),
                (this.m_winBackEftNode = void 0),
                (this.m_spine = null),
                (this.m_frontSpine = null),
                (this.m_backSpine = null),
                (this.m_winFrontSpine = null),
                (this.m_winBackSpine = null),
                (this.m_eftNode = instantiate(e.Prefab)),
                (this.m_frontEftNode = instantiate(e.FrontPrefab)),
                (this.m_backEftNode = instantiate(e.BackPrefab)),
                (this.m_winFrontEftNode = instantiate(e.WinFrontPrefab)),
                (this.m_winBackEftNode = instantiate(e.WinBackPrefab)),
                (this.m_spine = this.m_eftNode.getComponentInChildren(
                  sp.Skeleton
                )),
                (this.m_frontSpine = this.m_frontEftNode.getComponentInChildren(
                  sp.Skeleton
                )),
                (this.m_backSpine = this.m_backEftNode.getComponentInChildren(
                  sp.Skeleton
                )),
                (this.m_winFrontSpine =
                  this.m_winFrontEftNode.getComponentInChildren(sp.Skeleton)),
                (this.m_winBackSpine =
                  this.m_winBackEftNode.getComponentInChildren(sp.Skeleton)),
                (this.m_symbol = e.Symbol),
                (this.m_zIndex =
                  this.m_symbol === TSQ_Define.Symbol.WILD
                    ? TSQ_Define.EFFECT_Z_INDEX.Wild
                    : TSQ_Define.EFFECT_Z_INDEX.Anim);
              var t = e.Size;
              (this.m_size = t),
                t > TSQ_Define.GEN_MIN_SIZE &&
                  t < TSQ_Define.GEN_MAX_SIZE &&
                  (this.m_spine.animation = "Win_" + t + "x" + t);
            }
            var t = e.prototype;
            return (
              (t.Reset = function () {
                (this.m_spine.timeScale = 1),
                  (this.m_winBackSpine.timeScale = 1),
                  (this.m_winFrontSpine.timeScale = 1),
                  (this.m_frontSpine.timeScale = 1),
                  (this.m_backSpine.timeScale = 1),
                  this.m_spine.clearTrack(0),
                  this.m_winBackSpine.clearTrack(0),
                  this.m_winFrontSpine.clearTrack(0),
                  this.m_frontSpine.clearTrack(0),
                  this.m_backSpine.clearTrack(0),
                  this.m_spine.setToSetupPose(),
                  this.m_winBackSpine.setToSetupPose(),
                  this.m_winFrontSpine.setToSetupPose(),
                  this.m_frontSpine.setToSetupPose(),
                  this.m_backSpine.setToSetupPose(),
                  this.m_winFrontSpine.setSkin("default"),
                  this.m_eftNode.removeFromParent(),
                  this.m_frontEftNode.removeFromParent(),
                  this.m_backEftNode.removeFromParent(),
                  this.m_winFrontEftNode.removeFromParent(),
                  this.m_winBackEftNode.removeFromParent();
              }),
              (t.PlayWin = (function () {
                var e = _asyncToGenerator(
                  _regeneratorRuntime().mark(function e(t, o, n) {
                    var i, r;
                    return _regeneratorRuntime().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                void 0 === n && (n = 1),
                                t.addChild(this.m_eftNode),
                                t.addChild(this.m_winFrontEftNode),
                                t.addChild(this.m_winBackEftNode),
                                node.SetZIndex(this.m_eftNode, this.m_zIndex),
                                node.SetZIndex(
                                  this.m_winFrontEftNode,
                                  TSQ_Define.EFFECT_Z_INDEX.Front
                                ),
                                node.SetZIndex(
                                  this.m_winBackEftNode,
                                  TSQ_Define.EFFECT_Z_INDEX.Back
                                ),
                                (this.m_eftNode.position = o),
                                (this.m_winFrontEftNode.position = o),
                                (this.m_winBackEftNode.position = o),
                                (this.m_spine.timeScale = n),
                                (this.m_winBackSpine.timeScale = n),
                                (this.m_winFrontSpine.timeScale = n),
                                this.m_winFrontSpine.setSkin(
                                  "Symbol_0" + this.m_symbol
                                ),
                                (i = []),
                                (r =
                                  AnimName$1.WIN +
                                  "_" +
                                  this.m_size +
                                  "x" +
                                  this.m_size),
                                i.push(SpineKit.PlayAnimation(this.m_spine, r)),
                                i.push(
                                  SpineKit.PlayAnimation(this.m_winBackSpine, r)
                                ),
                                i.push(
                                  SpineKit.PlayAnimation(
                                    this.m_winFrontSpine,
                                    r
                                  )
                                ),
                                (e.next = 21),
                                Promise.all(i)
                              );
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
                return function (t, o, n) {
                  return e.apply(this, arguments);
                };
              })()),
              (t.PlayBreak = (function () {
                var e = _asyncToGenerator(
                  _regeneratorRuntime().mark(function e(t, o) {
                    return _regeneratorRuntime().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                t.addChild(this.m_eftNode),
                                node.SetZIndex(this.m_eftNode, this.m_zIndex),
                                (this.m_eftNode.position = o),
                                (e.next = 5),
                                SpineKit.PlayAnimation(
                                  this.m_spine,
                                  AnimName$1.BREAK
                                )
                              );
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
                return function (t, o) {
                  return e.apply(this, arguments);
                };
              })()),
              (t.PlayCyan = (function () {
                var e = _asyncToGenerator(
                  _regeneratorRuntime().mark(function e(t, o, n) {
                    var i,
                      r = this;
                    return _regeneratorRuntime().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                t.addChild(this.m_eftNode),
                                t.addChild(this.m_frontEftNode),
                                t.addChild(this.m_backEftNode),
                                node.SetZIndex(this.m_eftNode, this.m_zIndex),
                                node.SetZIndex(
                                  this.m_frontEftNode,
                                  TSQ_Define.EFFECT_Z_INDEX.Front
                                ),
                                node.SetZIndex(
                                  this.m_backEftNode,
                                  TSQ_Define.EFFECT_Z_INDEX.Back
                                ),
                                (this.m_eftNode.position = o),
                                (this.m_frontEftNode.position = o),
                                (this.m_backEftNode.position = o),
                                (i = []).push(
                                  SpineKit.PlayAnimation(
                                    this.m_spine,
                                    AnimName$1.FEATURE_01_START
                                  ).then(
                                    _asyncToGenerator(
                                      _regeneratorRuntime().mark(function e() {
                                        return _regeneratorRuntime().wrap(
                                          function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return (
                                                    (e.next = 2),
                                                    SpineKit.PlayAnimation(
                                                      r.m_spine,
                                                      AnimName$1.FEATURE_01_LOOP,
                                                      !0
                                                    )
                                                  );
                                                case 2:
                                                  return (e.next = 4), n;
                                                case 4:
                                                  return (
                                                    (e.next = 6),
                                                    SpineKit.PlayAnimation(
                                                      r.m_spine,
                                                      AnimName$1.FEATURE_01_END
                                                    )
                                                  );
                                                case 6:
                                                case "end":
                                                  return e.stop();
                                              }
                                          },
                                          e
                                        );
                                      })
                                    )
                                  )
                                ),
                                i.push(
                                  SpineKit.PlayAnimation(
                                    this.m_frontSpine,
                                    AnimName$1.FEATURE_01_START
                                  ).then(
                                    _asyncToGenerator(
                                      _regeneratorRuntime().mark(function e() {
                                        return _regeneratorRuntime().wrap(
                                          function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return (
                                                    (e.next = 2),
                                                    SpineKit.PlayAnimation(
                                                      r.m_frontSpine,
                                                      AnimName$1.FEATURE_01_LOOP
                                                    )
                                                  );
                                                case 2:
                                                  return (e.next = 4), n;
                                                case 4:
                                                  return (
                                                    (e.next = 6),
                                                    SpineKit.PlayAnimation(
                                                      r.m_frontSpine,
                                                      AnimName$1.FEATURE_01_END
                                                    )
                                                  );
                                                case 6:
                                                case "end":
                                                  return e.stop();
                                              }
                                          },
                                          e
                                        );
                                      })
                                    )
                                  )
                                ),
                                (e.next = 14),
                                Promise.all(i)
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
                return function (t, o, n) {
                  return e.apply(this, arguments);
                };
              })()),
              (t.PlayPurple = (function () {
                var e = _asyncToGenerator(
                  _regeneratorRuntime().mark(function e(t, o) {
                    var n;
                    return _regeneratorRuntime().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                t.addChild(this.m_eftNode),
                                t.addChild(this.m_frontEftNode),
                                t.addChild(this.m_backEftNode),
                                node.SetZIndex(this.m_eftNode, this.m_zIndex),
                                node.SetZIndex(
                                  this.m_frontEftNode,
                                  TSQ_Define.EFFECT_Z_INDEX.Front
                                ),
                                node.SetZIndex(
                                  this.m_backEftNode,
                                  TSQ_Define.EFFECT_Z_INDEX.Back
                                ),
                                (this.m_eftNode.position = o),
                                (this.m_frontEftNode.position = o),
                                (this.m_backEftNode.position = o),
                                (n = []).push(
                                  SpineKit.PlayAnimation(
                                    this.m_spine,
                                    AnimName$1.FEATURE_02_END
                                  )
                                ),
                                n.push(
                                  SpineKit.PlayAnimation(
                                    this.m_backSpine,
                                    AnimName$1.FEATURE_02_END
                                  )
                                ),
                                n.push(
                                  SpineKit.PlayAnimation(
                                    this.m_frontSpine,
                                    AnimName$1.FEATURE_02_END
                                  )
                                ),
                                (e.next = 15),
                                Promise.all(n)
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
                return function (t, o) {
                  return e.apply(this, arguments);
                };
              })()),
              (t.PlayBlueStart = (function () {
                var e = _asyncToGenerator(
                  _regeneratorRuntime().mark(function e(t, o, n) {
                    var i,
                      r = this;
                    return _regeneratorRuntime().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                t.addChild(this.m_eftNode),
                                t.addChild(this.m_frontEftNode),
                                t.addChild(this.m_backEftNode),
                                node.SetZIndex(this.m_eftNode, this.m_zIndex),
                                node.SetZIndex(
                                  this.m_frontEftNode,
                                  TSQ_Define.EFFECT_Z_INDEX.Front
                                ),
                                node.SetZIndex(
                                  this.m_backEftNode,
                                  TSQ_Define.EFFECT_Z_INDEX.Back
                                ),
                                this.m_backSpine.setSkin(
                                  "" + SkinName.SYMBLE + n
                                ),
                                this.m_frontSpine.setSkin(
                                  "" + SkinName.SYMBLE + n
                                ),
                                (this.m_eftNode.position = o),
                                (this.m_frontEftNode.position = o),
                                (this.m_backEftNode.position = o),
                                (i = []).push(
                                  SpineKit.PlayAnimation(
                                    this.m_spine,
                                    AnimName$1.FEATURE_05_START
                                  ).then(
                                    _asyncToGenerator(
                                      _regeneratorRuntime().mark(function e() {
                                        return _regeneratorRuntime().wrap(
                                          function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  SpineKit.PlayAnimation(
                                                    r.m_spine,
                                                    AnimName$1.FEATURE_05_LOOP,
                                                    !0
                                                  );
                                                case 1:
                                                case "end":
                                                  return e.stop();
                                              }
                                          },
                                          e
                                        );
                                      })
                                    )
                                  )
                                ),
                                i.push(
                                  SpineKit.PlayAnimation(
                                    this.m_backSpine,
                                    AnimName$1.FEATURE_05_START
                                  ).then(
                                    _asyncToGenerator(
                                      _regeneratorRuntime().mark(function e() {
                                        return _regeneratorRuntime().wrap(
                                          function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  SpineKit.PlayAnimation(
                                                    r.m_backSpine,
                                                    AnimName$1.FEATURE_05_LOOP,
                                                    !0
                                                  );
                                                case 1:
                                                case "end":
                                                  return e.stop();
                                              }
                                          },
                                          e
                                        );
                                      })
                                    )
                                  )
                                ),
                                i.push(
                                  SpineKit.PlayAnimation(
                                    this.m_frontSpine,
                                    AnimName$1.FEATURE_05_START
                                  ).then(
                                    _asyncToGenerator(
                                      _regeneratorRuntime().mark(function e() {
                                        return _regeneratorRuntime().wrap(
                                          function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  SpineKit.PlayAnimation(
                                                    r.m_frontSpine,
                                                    AnimName$1.FEATURE_05_LOOP,
                                                    !0
                                                  );
                                                case 1:
                                                case "end":
                                                  return e.stop();
                                              }
                                          },
                                          e
                                        );
                                      })
                                    )
                                  )
                                ),
                                (e.next = 17),
                                Promise.all(i)
                              );
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
                return function (t, o, n) {
                  return e.apply(this, arguments);
                };
              })()),
              (t.PlayBlueEnd = (function () {
                var e = _asyncToGenerator(
                  _regeneratorRuntime().mark(function e() {
                    var t;
                    return _regeneratorRuntime().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = []).push(
                                  SpineKit.PlayAnimation(
                                    this.m_spine,
                                    AnimName$1.FEATURE_05_END
                                  )
                                ),
                                t.push(
                                  SpineKit.PlayAnimation(
                                    this.m_backSpine,
                                    AnimName$1.FEATURE_05_END
                                  )
                                ),
                                t.push(
                                  SpineKit.PlayAnimation(
                                    this.m_frontSpine,
                                    AnimName$1.FEATURE_05_END
                                  )
                                ),
                                (e.next = 6),
                                Promise.all(t)
                              );
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
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (t.PlayDetach = (function () {
                var e = _asyncToGenerator(
                  _regeneratorRuntime().mark(function e(t, o, n) {
                    return _regeneratorRuntime().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                t.addChild(this.m_eftNode),
                                node.SetZIndex(this.m_eftNode, this.m_zIndex),
                                (this.m_eftNode.position = o),
                                (this.m_spine.timeScale = n),
                                (e.next = 6),
                                SpineKit.PlayAnimation(
                                  this.m_spine,
                                  AnimName$1.DETACH
                                )
                              );
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
                return function (t, o, n) {
                  return e.apply(this, arguments);
                };
              })()),
              _createClass(e, [
                {
                  key: "Size",
                  get: function () {
                    return this.m_size;
                  },
                },
                {
                  key: "Symbol",
                  get: function () {
                    return this.m_symbol;
                  },
                },
              ]),
              e
            );
          })(),
          AnimName$1 = {
            WIN: "Win",
            BREAK: "Break",
            FEATURE_05_START: "Feature_05_Start",
            FEATURE_05_LOOP: "Feature_05_Loop",
            FEATURE_05_END: "Feature_05_End",
            FEATURE_01_START: "Feature_01_Start",
            FEATURE_01_LOOP: "Feature_01_Loop",
            FEATURE_01_END: "Feature_01_End",
            FEATURE_02_END: "Feature_02_End",
            DETACH: "Detach",
          },
          SkinName = { DEFAULT: "default", SYMBLE: "Symbol_0" },
          _class$3;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "06016Zcxl5HmZpr+F2w9lFx",
            "FeatureFrameSpine",
            void 0
          );
        var ccclass$3 = _decorator.ccclass,
          FeatureFrameSpine =
            ccclass$3(
              (_class$3 = (function () {
                function e(e) {
                  (this.m_eftNode = void 0),
                    (this.m_frontEftNode = void 0),
                    (this.m_backEftNode = void 0),
                    (this.m_spine = null),
                    (this.m_frontSpine = null),
                    (this.m_backSpine = null),
                    (this.m_eftNode = instantiate(e.Prefab)),
                    (this.m_frontEftNode = instantiate(e.FrontPrefab)),
                    (this.m_backEftNode = instantiate(e.BackPrefab)),
                    (this.m_spine = this.m_eftNode.getComponentInChildren(
                      sp.Skeleton
                    )),
                    (this.m_frontSpine =
                      this.m_frontEftNode.getComponentInChildren(sp.Skeleton)),
                    (this.m_backSpine =
                      this.m_backEftNode.getComponentInChildren(sp.Skeleton)),
                    (this.m_backSpine.loop = !1);
                }
                var t = e.prototype;
                return (
                  (t.Reset = function () {
                    this.m_spine.clearTrack(0),
                      this.m_spine.clearTrack(1),
                      this.m_spine.setToSetupPose(),
                      (this.m_spine.timeScale = 1),
                      this.m_frontSpine.clearTrack(0),
                      this.m_frontSpine.clearTrack(1),
                      this.m_frontSpine.setToSetupPose(),
                      (this.m_frontSpine.timeScale = 1),
                      this.m_backSpine.clearTrack(0),
                      this.m_backSpine.clearTrack(1),
                      this.m_backSpine.setToSetupPose(),
                      (this.m_backSpine.timeScale = 1),
                      this.RemoveNode();
                  }),
                  (t.PlayFinial = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o, n, i, r, a) {
                        var s, l;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  o || 0 === o || (o = 0),
                                    (this.m_eftNode.active = !0),
                                    (this.m_frontEftNode.active = !0),
                                    (this.m_backEftNode.active = !0),
                                    this.m_eftNode.parent !== t &&
                                      (t.addChild(this.m_eftNode),
                                      t.addChild(this.m_frontEftNode),
                                      t.addChild(this.m_backEftNode)),
                                    node.SetZIndex(
                                      this.m_eftNode,
                                      TSQ_Define.EFFECT_Z_INDEX.Anim
                                    ),
                                    node.SetZIndex(
                                      this.m_frontEftNode,
                                      TSQ_Define.EFFECT_Z_INDEX.Front
                                    ),
                                    node.SetZIndex(
                                      this.m_backEftNode,
                                      TSQ_Define.EFFECT_Z_INDEX.Back
                                    ),
                                    (this.m_eftNode.position = n),
                                    (this.m_frontEftNode.position = n),
                                    (this.m_backEftNode.position = n),
                                    (s = this.GetTrackAnimName(r, o)),
                                    this.m_spine.setSkin(
                                      "" + SkinName$1.SYMBLE + o
                                    ),
                                    this.m_frontSpine.setSkin(
                                      "" + SkinName$1.SYMBLE + o
                                    ),
                                    this.m_backSpine.setSkin(
                                      "" + SkinName$1.SYMBLE + o
                                    ),
                                    this.m_spine.setAnimation(1, s, !1),
                                    this.m_frontSpine.setAnimation(1, s, !1),
                                    this.m_backSpine.setAnimation(1, s, !1),
                                    (l =
                                      i === LIGHT_TYPE.GREEN
                                        ? AnimName$2.FEATURE_03_FRAME_2
                                        : AnimName$2.FEATURE_04_FRAME_2),
                                    SpineKit.PlayAnimation(
                                      this.m_spine,
                                      l,
                                      !1,
                                      0,
                                      a
                                    ),
                                    SpineKit.PlayAnimation(
                                      this.m_frontSpine,
                                      l
                                    ),
                                    SpineKit.PlayAnimation(this.m_backSpine, l);
                                case 22:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (t, o, n, i, r, a) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (t.PlayRandom = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o) {
                        var n, i;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    t.addChild(this.m_backEftNode),
                                    node.SetZIndex(
                                      this.m_backEftNode,
                                      TSQ_Define.EFFECT_Z_INDEX.Back
                                    ),
                                    (this.m_backEftNode.position = o.Position),
                                    (n = this.GetTrackAnimName(o.Size)),
                                    this.m_backSpine.setAnimation(1, n, !1),
                                    (i =
                                      o.Type === LIGHT_TYPE.GREEN
                                        ? AnimName$2.FEATURE_03_FRAME_1
                                        : AnimName$2.FEATURE_04_FRAME_1),
                                    (e.next = 8),
                                    SpineKit.PlayAnimation(this.m_backSpine, i)
                                  );
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
                    return function (t, o) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (t.PlayDetach = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.m_spine.timeScale = t),
                                    (e.next = 3),
                                    SpineKit.PlayAnimation(
                                      this.m_spine,
                                      AnimName$2.DETACH
                                    )
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (t.GetTrackAnimName = function (e, t) {
                    return (
                      void 0 === t && (t = 0),
                      t <= TSQ_Define.Symbol.RED
                        ? AnimName$2.TRACK_LOW + "_" + e + "x" + e
                        : AnimName$2.TRACK_HIGH + "_" + e + "x" + e
                    );
                  }),
                  (t.RemoveNode = function () {
                    this.m_eftNode.removeFromParent(),
                      this.m_frontEftNode.removeFromParent(),
                      this.m_backEftNode.removeFromParent();
                  }),
                  e
                );
              })())
            ) || _class$3,
          AnimName$2 = {
            FEATURE_04_FRAME_1: "Feature_04_Frame_1",
            FEATURE_04_FRAME_2: "Feature_04_Frame_2",
            FEATURE_03_FRAME_1: "Feature_03_Frame_1",
            FEATURE_03_FRAME_2: "Feature_03_Frame_2",
            TRACK_HIGH: "Track_High",
            TRACK_LOW: "Track_Low",
            DETACH: "Detach",
          },
          SkinName$1 = { DEFAULT: "default", SYMBLE: "Symbol_0" };
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "221fc0G8dNEx68XvBp0gMma", "NodePool", void 0);
        var NodePool = (function () {
            function e() {
              (this.m_symbolSprites = new Array()),
                (this.m_symbolEftPrefabs = null),
                (this.m_frontSymbolEftPrefabs = null),
                (this.m_backSymbolEftPrefabs = null),
                (this.m_winFrontSymbolEftPrefabs = null),
                (this.m_winBackSymbolEftPrefabs = null),
                (this.m_symbolSpines = null),
                (this.m_featureFrameSpines = []),
                (this.m_featureFramePrefab = void 0),
                (this.m_backFeatureFramePrefab = void 0),
                (this.m_frontFeatureFramePrefab = void 0),
                (e._instance = this);
              for (var t = 0; t < TSQ_Define.COL; t++)
                for (var o = 0; o < TSQ_Define.ROW; o++) {
                  var n = new Node().addComponent(Sprite);
                  this.m_symbolSprites.push(n),
                    (n.sizeMode = Sprite.SizeMode.RAW);
                }
            }
            e.GetInstance = function () {
              return e._instance;
            };
            var t = e.prototype;
            return (
              (t.GetSymbolSprite = function () {
                return this.m_symbolSprites.length > 0
                  ? this.m_symbolSprites.shift()
                  : new Node().addComponent(Sprite);
              }),
              (t.ReturnSymbolSprite = function (e) {
                e && this.m_symbolSprites.push(e);
              }),
              (t.SetSymbolPrefab = function (e, t, o, n, i) {
                (this.m_symbolEftPrefabs = e),
                  (this.m_frontSymbolEftPrefabs = t),
                  (this.m_backSymbolEftPrefabs = o),
                  (this.m_winFrontSymbolEftPrefabs = n),
                  (this.m_winBackSymbolEftPrefabs = i),
                  (this.m_symbolSpines = Array.from(
                    { length: TSQ_Define.GEN_MAX_SIZE },
                    function () {
                      return Array.from({ length: e.length }, function () {
                        return [];
                      });
                    }
                  ));
              }),
              (t.GetSymbolSpine = function (e, t) {
                var o, n, i;
                if (
                  (void 0 === t && (t = TSQ_Define.GEN_MIN_SIZE),
                  (null == (o = this.m_symbolSpines) ||
                  null == (n = o[t]) ||
                  null == (i = n[e])
                    ? void 0
                    : i.length) > 0)
                )
                  return this.m_symbolSpines[t][e].shift();
                var r = {
                  Symbol: e,
                  Prefab: this.m_symbolEftPrefabs[e],
                  FrontPrefab: this.m_frontSymbolEftPrefabs,
                  BackPrefab: this.m_backSymbolEftPrefabs,
                  WinFrontPrefab: this.m_winFrontSymbolEftPrefabs,
                  WinBackPrefab: this.m_winBackSymbolEftPrefabs,
                  Size: t,
                };
                return new SymbolSpine(r);
              }),
              (t.ReturnSymbolSpine = function (e) {
                var t,
                  o,
                  n,
                  i = e.Symbol,
                  r = e.Size;
                e.Reset(),
                  null == (t = this.m_symbolSpines) ||
                    null == (o = t[r]) ||
                    null == (n = o[i]) ||
                    n.push(e);
              }),
              (t.SetFeatureFramePrefab = function (e, t, o) {
                (this.m_featureFramePrefab = e),
                  (this.m_backFeatureFramePrefab = t),
                  (this.m_frontFeatureFramePrefab = o);
              }),
              (t.GetFeatureFrameSpine = function () {
                if (this.m_featureFrameSpines.length > 0)
                  return this.m_featureFrameSpines.shift();
                var e = {
                  Prefab: this.m_featureFramePrefab,
                  BackPrefab: this.m_backFeatureFramePrefab,
                  FrontPrefab: this.m_frontFeatureFramePrefab,
                };
                return new FeatureFrameSpine(e);
              }),
              (t.ReturnFeatureFrameSpine = function (e) {
                e.Reset(), this.m_featureFrameSpines.push(e);
              }),
              e
            );
          })(),
          _dec$2,
          _dec2$2,
          _dec3$2,
          _dec4$2,
          _dec5$2,
          _dec6$1,
          _dec7$1,
          _dec8$1,
          _dec9,
          _class$4,
          _class2$2,
          _descriptor$2,
          _descriptor2$2,
          _descriptor3$2,
          _descriptor4$2,
          _descriptor5$1,
          _descriptor6$1,
          _descriptor7$1,
          _descriptor8,
          _descriptor9;
        (NodePool._instance = new NodePool()),
          cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "a48172D94BHALnxe370NDDs",
            "AltarSpine",
            void 0
          );
        var ccclass$4 = _decorator.ccclass,
          property$2 = _decorator.property,
          AltarSpine =
            ((_dec$2 = property$2({
              type: sp.Skeleton,
              tooltip: "進度條介面效果下層",
            })),
            (_dec2$2 = property$2({
              type: sp.Skeleton,
              tooltip: "進度條介面效果",
            })),
            (_dec3$2 = property$2({
              type: sp.Skeleton,
              tooltip: "進度條介面效果上層",
            })),
            (_dec4$2 = property$2({ type: sp.Skeleton, tooltip: "裝飾火焰" })),
            (_dec5$2 = property$2({ type: Node, tooltip: "能量條" })),
            (_dec6$1 = property$2({ type: Node, tooltip: "倍率面板" })),
            (_dec7$1 = property$2({ type: Label, tooltip: "倍率面板Label" })),
            (_dec8$1 = property$2({
              type: sp.Skeleton,
              tooltip: "倍率面板Spine",
            })),
            (_dec9 = property$2({ type: Label, tooltip: "消除進度Label" })),
            ccclass$4(
              ((_class2$2 = (function (e) {
                function t() {
                  for (
                    var t, o = arguments.length, n = new Array(o), i = 0;
                    i < o;
                    i++
                  )
                    n[i] = arguments[i];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_collectBarUiBack",
                      _descriptor$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_collectBarUi",
                      _descriptor2$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_collectBarUiFront",
                      _descriptor3$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fire",
                      _descriptor4$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_hpBar",
                      _descriptor5$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_multiplePanel",
                      _descriptor6$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_multiplePanelLabel",
                      _descriptor7$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_multiplePanelSpine",
                      _descriptor8,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_processLabel",
                      _descriptor9,
                      _assertThisInitialized(t)
                    ),
                    (t.m_hpBarTweenInfo = {
                      tween: null,
                      angle: null,
                      percent: null,
                    }),
                    (t.m_currentPercent = 0),
                    (t.m_isFull = !1),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.SetProcessLabel = function (e, t) {
                    void 0 === e && (e = -1),
                      void 0 === t && (t = -1),
                      e >= TSQ_Define.MAX_LEVEL_COUNT
                        ? (this.m_processLabel.node.active = !1)
                        : (this.m_processLabel.node.active = !0),
                      (this.m_processLabel.string = t + "/" + e);
                  }),
                  (o.SetHpBar = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o, n, i) {
                        var r, a;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    (void 0 === o && (o = !0),
                                    void 0 === n && (n = -1),
                                    void 0 === i && (i = -1),
                                    n >= 0 &&
                                      i >= 0 &&
                                      (i > n && (i = n),
                                      this.SetProcessLabel(n, i)),
                                    (r = 150 - (150 * t) / 100),
                                    this.StopBeforeTween(),
                                    (a =
                                      this.m_currentPercent >= 100 && t >= 100),
                                    (this.m_collectBarUi.node.active = a),
                                    (this.m_collectBarUiFront.node.active = a),
                                    (this.m_collectBarUiBack.node.active = !0),
                                    !t &&
                                      !this.m_currentPercent &&
                                      (this.m_collectBarUiBack.node.active =
                                        !1),
                                    n == TSQ_Define.MAX_LEVEL_COUNT)
                                  ) {
                                    e.next = 15;
                                    break;
                                  }
                                  return (
                                    (e.next = 15), this.PlayHpBarTween(o, t, r)
                                  );
                                case 15:
                                  this.PlaySpine();
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
                    return function (t, o, n, i) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.ShowMultiple = function (e) {
                    (this.m_multiplePanel.active = !0),
                      (this.m_multiplePanelLabel.string = "" + e);
                  }),
                  (o.HideMultiple = function () {
                    this.m_multiplePanel.active = !1;
                  }),
                  (o.StopBeforeTween = function () {
                    this.m_hpBarTweenInfo.tween &&
                      (this.m_hpBarTweenInfo.tween.stop(),
                      (this.m_hpBar.angle = this.m_hpBarTweenInfo.angle),
                      (this.m_currentPercent = this.m_hpBarTweenInfo.percent),
                      (this.m_hpBarTweenInfo.tween = null),
                      (this.m_hpBarTweenInfo.angle = null),
                      (this.m_hpBarTweenInfo.percent = null));
                  }),
                  (o.PlayHpBarTween = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o, n) {
                        var i = this;
                        return _regeneratorRuntime().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  new Promise(function (e) {
                                    if (t && i.m_currentPercent != o) {
                                      var r =
                                        i.m_currentPercent >=
                                          TSQ_Define.HP_BAR_NEAR_WIN_PERCENT &&
                                        i.m_currentPercent < 100
                                          ? AnimName$3.NearWin
                                          : AnimName$3.Collect;
                                      i.m_currentPercent >= 100 &&
                                        0 == o &&
                                        (r = AnimName$3.Win_Loop2),
                                        SpineKit.PlayAnimation(
                                          i.m_collectBarUiBack,
                                          r,
                                          !0
                                        ),
                                        (i.m_hpBarTweenInfo.angle = n),
                                        (i.m_hpBarTweenInfo.percent = o),
                                        (i.m_hpBarTweenInfo.tween = tween(
                                          i.m_hpBar
                                        )
                                          .to(
                                            0.5,
                                            { angle: n },
                                            { easing: "circIn" }
                                          )
                                          .delay(0.01)
                                          .call(function () {
                                            (i.m_hpBarTweenInfo.tween = null),
                                              (i.m_hpBarTweenInfo.angle = null),
                                              (i.m_currentPercent = o),
                                              e();
                                          })
                                          .start());
                                    } else
                                      (i.m_currentPercent = o),
                                        (i.m_hpBar.angle = n),
                                        e();
                                  })
                                );
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t, o, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.PlaySpine = function () {
                    var e = this;
                    if (this.m_currentPercent >= 100) {
                      (this.m_collectBarUi.node.active = !0),
                        (this.m_collectBarUiFront.node.active = !0);
                      this.m_isFull ||
                        ((this.m_isFull = !0),
                        SpineKit.PlayAnimation(
                          this.m_collectBarUi,
                          AnimName$3.Win_FX,
                          !1,
                          0,
                          function () {
                            e.m_collectBarUiBack.node.active = !1;
                          }
                        ).then(
                          _asyncToGenerator(
                            _regeneratorRuntime().mark(function t() {
                              return _regeneratorRuntime().wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (
                                        (t.next = 2),
                                        SpineKit.PlayAnimation(
                                          e.m_collectBarUi,
                                          AnimName$3.Win_Loop1,
                                          !0
                                        )
                                      );
                                    case 2:
                                    case "end":
                                      return t.stop();
                                  }
                              }, t);
                            })
                          )
                        ),
                        SpineKit.PlayAnimation(
                          this.m_collectBarUiFront,
                          AnimName$3.Win_FX
                        ).then(
                          _asyncToGenerator(
                            _regeneratorRuntime().mark(function t() {
                              return _regeneratorRuntime().wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (
                                        (t.next = 2),
                                        SpineKit.PlayAnimation(
                                          e.m_collectBarUiFront,
                                          AnimName$3.Win_Loop1,
                                          !0
                                        )
                                      );
                                    case 2:
                                    case "end":
                                      return t.stop();
                                  }
                              }, t);
                            })
                          )
                        ));
                    } else
                      this.m_currentPercent >=
                      TSQ_Define.HP_BAR_NEAR_WIN_PERCENT
                        ? (SpineKit.PlayAnimation(
                            this.m_collectBarUiBack,
                            AnimName$3.NearWin,
                            !0
                          ),
                          (this.m_isFull = !1))
                        : this.m_currentPercent
                        ? (SpineKit.PlayAnimation(
                            this.m_collectBarUiBack,
                            AnimName$3.Idle,
                            !0
                          ),
                          (this.m_isFull = !1))
                        : ((this.m_collectBarUiBack.node.active = !1),
                          (this.m_isFull = !1));
                  }),
                  t
                );
              })(Component)),
              (_descriptor$2 = _applyDecoratedDescriptor(
                _class2$2.prototype,
                "m_collectBarUiBack",
                [_dec$2],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor2$2 = _applyDecoratedDescriptor(
                _class2$2.prototype,
                "m_collectBarUi",
                [_dec2$2],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor3$2 = _applyDecoratedDescriptor(
                _class2$2.prototype,
                "m_collectBarUiFront",
                [_dec3$2],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor4$2 = _applyDecoratedDescriptor(
                _class2$2.prototype,
                "m_fire",
                [_dec4$2],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor5$1 = _applyDecoratedDescriptor(
                _class2$2.prototype,
                "m_hpBar",
                [_dec5$2],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor6$1 = _applyDecoratedDescriptor(
                _class2$2.prototype,
                "m_multiplePanel",
                [_dec6$1],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor7$1 = _applyDecoratedDescriptor(
                _class2$2.prototype,
                "m_multiplePanelLabel",
                [_dec7$1],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor8 = _applyDecoratedDescriptor(
                _class2$2.prototype,
                "m_multiplePanelSpine",
                [_dec8$1],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor9 = _applyDecoratedDescriptor(
                _class2$2.prototype,
                "m_processLabel",
                [_dec9],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_class$4 = _class2$2))
            ) || _class$4),
          AnimName$3 = {
            Idle: "Idle",
            Collect: "Collect",
            NearWin: "NearWin",
            Win_FX: "Win_FX",
            Win_Loop1: "Win_Loop1",
            Win_Loop2: "Win_Loop2",
          },
          _class$5;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "94958lHyaZCiZcMczn9q2o1",
            "LightPointSpine",
            void 0
          );
        var AnimName$4 = {
            IDLE: "Idle",
            START: "Start",
            WIN: "Win",
            END: "End",
            PATH: "Path",
          },
          ccclass$5 = _decorator.ccclass,
          LightPointSpine =
            ccclass$5(
              (_class$5 = (function (e) {
                function t() {
                  for (
                    var t, o = arguments.length, n = new Array(o), i = 0;
                    i < o;
                    i++
                  )
                    n[i] = arguments[i];
                  return (
                    ((t = e.call.apply(e, [this].concat(n)) || this).m_spine =
                      void 0),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.Init = function () {
                    this.m_spine = this.node.children[0].getComponent(
                      sp.Skeleton
                    );
                  }),
                  (o.Show = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.node.active = !0),
                                    (e.next = 3),
                                    SpineKit.PlayAnimation(
                                      this.m_spine,
                                      AnimName$4.START,
                                      !1
                                    )
                                  );
                                case 3:
                                  return (
                                    (e.next = 5),
                                    SpineKit.PlayAnimation(
                                      this.m_spine,
                                      AnimName$4.IDLE,
                                      !0
                                    )
                                  );
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
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.Hide = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    SpineKit.PlayAnimation(
                                      this.m_spine,
                                      AnimName$4.END,
                                      !1
                                    )
                                  );
                                case 2:
                                  this.node.active = !1;
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
                  (o.Collect = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o, n, i) {
                        var r,
                          a,
                          s,
                          l = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    (Tween.stopAllByTarget(this.node),
                                    node$1.Play(
                                      TSQ_Define.AudioClips.Light_Fly
                                    ),
                                    !(n > 0))
                                  ) {
                                    e.next = 5;
                                    break;
                                  }
                                  return (e.next = 5), node$4.Wait(this, n);
                                case 5:
                                  return (
                                    (this.m_spine.timeScale =
                                      TSQ_Define.LIGHT_POINT_FLY_SPEED),
                                    (e.next = 8),
                                    SpineKit.PlayAnimation(
                                      this.m_spine,
                                      AnimName$4.WIN,
                                      !1
                                    )
                                  );
                                case 8:
                                  return (
                                    (r = o ? "L" : "S"),
                                    (a = Math.random() > 0.5 ? "1" : "2"),
                                    (s = AnimName$4.PATH + "_" + r + a),
                                    tween(this.node)
                                      .delay(0.01)
                                      .call(function () {
                                        var e = l.m_spine.findBone("End_Point"),
                                          o = l.m_spine.node
                                            .getComponent(UITransform)
                                            .convertToNodeSpaceAR(
                                              t.worldPosition
                                            );
                                        (e.x = o.x), (e.y = o.y);
                                      })
                                      .start(),
                                    tween(this.node)
                                      .delay(
                                        TSQ_Define.SKY_DROP_DELAY_AFTER_LIGHT_POINT_MOVE
                                      )
                                      .call(function () {
                                        return i();
                                      })
                                      .start(),
                                    (e.next = 15),
                                    new Promise(function (e) {
                                      return SpineKit.PlayAnimation(
                                        l.m_spine,
                                        s,
                                        !1,
                                        0,
                                        e
                                      );
                                    })
                                  );
                                case 15:
                                  this.node.active = !1;
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
                    return function (t, o, n, i) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.OnRotate = function () {
                    var e,
                      t = this.m_spine.getCurrent(0);
                    null != t &&
                      null != (e = t.animation) &&
                      e.name.includes(AnimName$4.PATH) &&
                      (t.trackTime = 10);
                  }),
                  t
                );
              })(Component))
            ) || _class$5,
          _dec$3,
          _class$6,
          _class2$3,
          _descriptor$3;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "2c44cRSY6dHyZQbURMQSc0N",
            "FeatureSpine",
            void 0
          );
        var ccclass$6 = _decorator.ccclass,
          property$3 = _decorator.property,
          FeatureSpine =
            ((_dec$3 = property$3({
              type: [sp.Skeleton],
              tooltip: "光球(空、青、紫、綠、橘、藍)",
            })),
            ccclass$6(
              ((_class2$3 = (function (e) {
                function t() {
                  for (
                    var t, o = arguments.length, n = new Array(o), i = 0;
                    i < o;
                    i++
                  )
                    n[i] = arguments[i];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_ballSpine",
                      _descriptor$3,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.Init = function () {
                    this.m_ballSpine.forEach(function (e) {
                      e &&
                        (node.SetZIndex(
                          e.node.parent,
                          TSQ_Define.EFFECT_Z_INDEX.Anim
                        ),
                        (e.node.active = !1));
                    });
                  }),
                  (o.Reset = function () {
                    this.m_ballSpine.forEach(function (e) {
                      e && (e.node.active = !1);
                    });
                  }),
                  (o.OnRotate = function (e) {
                    this.m_ballSpine.forEach(function (t) {
                      if (t) {
                        var o =
                            t.getCurrent(0).animation.name.split("_")[0] +
                            "_" +
                            (e ? "L" : "S"),
                          n = t.getCurrent(0).loop;
                        t.setAnimation(0, o, n);
                      }
                    });
                  }),
                  (o.TriggerFgAll = function (e) {
                    var t = this;
                    this.m_ballSpine.forEach(function (o, n) {
                      n && t.Collect(n, e, !0);
                    });
                  }),
                  (o.Collect = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o, n, i) {
                        var r, a;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === n && (n = !1),
                                    ((r = this.m_ballSpine[t]).node.active =
                                      !0),
                                    node.SetZIndex(
                                      r.node.parent,
                                      TSQ_Define.EFFECT_Z_INDEX.Eft
                                    ),
                                    (a = n
                                      ? AnimName$5.COLLECT_FG
                                      : AnimName$5.COLLECT),
                                    node$1.Play(
                                      TSQ_Define.AudioClips.Light_Get
                                    ),
                                    (e.next = 8),
                                    SpineKit.PlayAnimation(
                                      r,
                                      this.GetAnimName(a, o)
                                    )
                                  );
                                case 8:
                                  SpineKit.PlayAnimation(
                                    r,
                                    this.GetAnimName(AnimName$5.LOOP, o),
                                    !0
                                  ),
                                    node.SetZIndex(
                                      r.node.parent,
                                      TSQ_Define.EFFECT_Z_INDEX.Anim
                                    ),
                                    null == i || i();
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
                    return function (t, o, n, i) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.CyanHit = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o) {
                        var n;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    ((n =
                                      this.m_ballSpine[
                                        LIGHT_TYPE.CYAN
                                      ]).node.active = !0),
                                    (n.timeScale =
                                      TSQ_Define.COLOR_EFFECT_SPEED),
                                    node.SetZIndex(
                                      n.node.parent,
                                      TSQ_Define.EFFECT_Z_INDEX.Eft
                                    ),
                                    (e.next = 6),
                                    SpineKit.PlayAnimation(
                                      n,
                                      this.GetAnimName(AnimName$5.HIT, t),
                                      !1,
                                      0,
                                      o
                                    )
                                  );
                                case 6:
                                  SpineKit.PlayAnimation(
                                    n,
                                    this.GetAnimName(AnimName$5.LOOP2, t)
                                  ),
                                    node.SetZIndex(
                                      n.node.parent,
                                      TSQ_Define.EFFECT_Z_INDEX.Anim
                                    );
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
                    return function (t, o) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.PurpleHitStart = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o) {
                        var n;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    ((n =
                                      this.m_ballSpine[
                                        LIGHT_TYPE.PURPLE
                                      ]).node.active = !0),
                                    node.SetZIndex(
                                      n.node.parent,
                                      TSQ_Define.EFFECT_Z_INDEX.Eft
                                    ),
                                    (e.next = 5),
                                    SpineKit.PlayAnimation(
                                      n,
                                      this.GetAnimName(AnimName$5.HIT_START, t),
                                      !1,
                                      0,
                                      o
                                    )
                                  );
                                case 5:
                                  return (
                                    (e.next = 7),
                                    SpineKit.PlayAnimation(
                                      n,
                                      this.GetAnimName(AnimName$5.HIT_LOOP, t),
                                      !0
                                    )
                                  );
                                case 7:
                                  node.SetZIndex(
                                    n.node.parent,
                                    TSQ_Define.EFFECT_Z_INDEX.Anim
                                  );
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
                    return function (t, o) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.PurpleHitEnd = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o) {
                        var n,
                          i = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    ((n =
                                      this.m_ballSpine[
                                        LIGHT_TYPE.PURPLE
                                      ]).node.active = !0),
                                    node.SetZIndex(
                                      n.node.parent,
                                      TSQ_Define.EFFECT_Z_INDEX.Eft
                                    ),
                                    (e.next = 5),
                                    new Promise(function (e) {
                                      SpineKit.PlayAnimation(
                                        n,
                                        i.GetAnimName(AnimName$5.HIT_END, t),
                                        !1,
                                        0,
                                        function (t) {
                                          "AnimationEvent1" === t
                                            ? e()
                                            : "AnimationEvent2" === t &&
                                              (null == o || o());
                                        }
                                      ).then(function () {
                                        SpineKit.PlayAnimation(
                                          n,
                                          i.GetAnimName(AnimName$5.LOOP2, t)
                                        ),
                                          node.SetZIndex(
                                            n.node.parent,
                                            TSQ_Define.EFFECT_Z_INDEX.Anim
                                          );
                                      });
                                    })
                                  );
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
                    return function (t, o) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.HitStart = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o) {
                        var n;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    ((n = this.m_ballSpine[t]).node.active =
                                      !0),
                                    (n.timeScale =
                                      TSQ_Define.COLOR_EFFECT_SPEED),
                                    node.SetZIndex(
                                      n.node.parent,
                                      TSQ_Define.EFFECT_Z_INDEX.Eft
                                    ),
                                    (e.next = 6),
                                    SpineKit.PlayAnimation(
                                      n,
                                      this.GetAnimName(AnimName$5.HIT_START, o)
                                    )
                                  );
                                case 6:
                                  SpineKit.PlayAnimation(
                                    n,
                                    this.GetAnimName(AnimName$5.HIT_LOOP, o),
                                    !0
                                  ),
                                    node.SetZIndex(
                                      n.node.parent,
                                      TSQ_Define.EFFECT_Z_INDEX.Anim
                                    );
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
                    return function (t, o) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.HitEnd = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o) {
                        var n;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    ((n = this.m_ballSpine[t]).node.active =
                                      !0),
                                    node.SetZIndex(
                                      n.node.parent,
                                      TSQ_Define.EFFECT_Z_INDEX.Eft
                                    ),
                                    (e.next = 5),
                                    SpineKit.PlayAnimation(
                                      n,
                                      this.GetAnimName(AnimName$5.HIT_END, o)
                                    )
                                  );
                                case 5:
                                  SpineKit.PlayAnimation(
                                    n,
                                    this.GetAnimName(AnimName$5.LOOP2, o)
                                  ),
                                    node.SetZIndex(
                                      n.node.parent,
                                      TSQ_Define.EFFECT_Z_INDEX.Anim
                                    );
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
                    return function (t, o) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.BlueHit = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o) {
                        var n;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    ((n =
                                      this.m_ballSpine[
                                        LIGHT_TYPE.BLUE
                                      ]).node.active = !0),
                                    (n.timeScale =
                                      TSQ_Define.COLOR_EFFECT_SPEED),
                                    node.SetZIndex(
                                      n.node.parent,
                                      TSQ_Define.EFFECT_Z_INDEX.Eft
                                    ),
                                    (e.next = 6),
                                    SpineKit.PlayAnimation(
                                      n,
                                      this.GetAnimName(AnimName$5.HIT, t),
                                      !1,
                                      0,
                                      o
                                    )
                                  );
                                case 6:
                                  SpineKit.PlayAnimation(
                                    n,
                                    this.GetAnimName(AnimName$5.LOOP2, t)
                                  ),
                                    node.SetZIndex(
                                      n.node.parent,
                                      TSQ_Define.EFFECT_Z_INDEX.Anim
                                    );
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
                    return function (t, o) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.GetAnimName = function (e, t) {
                    return e + "_" + (t ? "L" : "S");
                  }),
                  t
                );
              })(Component)),
              (_descriptor$3 = _applyDecoratedDescriptor(
                _class2$3.prototype,
                "m_ballSpine",
                [_dec$3],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_class$6 = _class2$3))
            ) || _class$6),
          AnimName$5 = {
            COLLECT: "Collect",
            COLLECT_FG: "Collect_FG",
            END: "End",
            HIT: "Hit",
            HIT_END: "Hit_End",
            HIT_LOOP: "Hit_Loop",
            HIT_START: "Hit_Start",
            LOOP2: "Loop2",
            LOOP: "Loop",
          },
          _dec$4,
          _class$7,
          _class2$4,
          _descriptor$4;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "10515eh+HJAO7vnxw9yh1jD",
            "FgDeclareSpine",
            void 0
          );
        var AnimName$6 = { END: "End", START: "Start" },
          ccclass$7 = _decorator.ccclass,
          property$4 = _decorator.property,
          FgDeclareSpine =
            ((_dec$4 = property$4({ type: sp.Skeleton, tooltip: "宣告動畫" })),
            ccclass$7(
              ((_class2$4 = (function (e) {
                function t() {
                  for (
                    var t, o = arguments.length, n = new Array(o), i = 0;
                    i < o;
                    i++
                  )
                    n[i] = arguments[i];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_spine",
                      _descriptor$4,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                return (
                  _inheritsLoose(t, e),
                  (t.prototype.Play = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o) {
                        var n;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.node.active = !0),
                                    (n = t ? "L" : "S"),
                                    node$1.Play(
                                      TSQ_Define.AudioClips.BGM_BF_Appear
                                    ),
                                    (e.next = 5),
                                    SpineKit.PlayAnimation(
                                      this.m_spine,
                                      AnimName$6.START + "_" + n
                                    )
                                  );
                                case 5:
                                  return (
                                    (e.next = 7),
                                    SpineKit.PlayAnimation(
                                      this.m_spine,
                                      AnimName$6.END + "_" + n,
                                      !1,
                                      0,
                                      o
                                    )
                                  );
                                case 7:
                                  this.node.active = !1;
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
                    return function (t, o) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  t
                );
              })(Component)),
              (_descriptor$4 = _applyDecoratedDescriptor(
                _class2$4.prototype,
                "m_spine",
                [_dec$4],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_class$7 = _class2$4))
            ) || _class$7),
          _dec$5,
          _dec2$3,
          _class$8,
          _class2$5,
          _descriptor$5,
          _descriptor2$3;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "966299vAhBAOqimx+O1u2vt",
            "FgDeclareLevelUpSpine",
            void 0
          );
        var AnimName$7 = { AGLIN: "_Aglin", DECLARE: "Declare" },
          ccclass$8 = _decorator.ccclass,
          property$5 = _decorator.property,
          FgDeclareLevelUpSpine =
            ((_dec$5 = property$5({
              type: sp.Skeleton,
              tooltip: "宣告升級動畫",
            })),
            (_dec2$3 = property$5({ type: Label, tooltip: "等級" })),
            ccclass$8(
              ((_class2$5 = (function (e) {
                function t() {
                  for (
                    var t, o = arguments.length, n = new Array(o), i = 0;
                    i < o;
                    i++
                  )
                    n[i] = arguments[i];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_spine",
                      _descriptor$5,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_lavelLabel",
                      _descriptor2$3,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                return (
                  _inheritsLoose(t, e),
                  (t.prototype.Play = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o, n) {
                        var i;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.node.active = !0),
                                    (i = t ? "L" : "S"),
                                    (this.m_lavelLabel.string = "" + o),
                                    (e.next = 5),
                                    SpineKit.PlayAnimation(
                                      this.m_spine,
                                      AnimName$7.DECLARE + "_" + i,
                                      !1,
                                      0,
                                      n
                                    )
                                  );
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
                    return function (t, o, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  t
                );
              })(Component)),
              (_descriptor$5 = _applyDecoratedDescriptor(
                _class2$5.prototype,
                "m_spine",
                [_dec$5],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor2$3 = _applyDecoratedDescriptor(
                _class2$5.prototype,
                "m_lavelLabel",
                [_dec2$3],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_class$8 = _class2$5))
            ) || _class$8),
          _dec$6,
          _dec2$4,
          _class$9,
          _class2$6,
          _descriptor$6,
          _descriptor2$4;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "d1885d6wOhO0JGkrH812hJB",
            "FgComplimentSpine",
            void 0
          );
        var AnimName$8 = { END: "End", START: "Start" },
          ccclass$9 = _decorator.ccclass,
          property$6 = _decorator.property,
          FgComplimentSpine =
            ((_dec$6 = property$6({ type: sp.Skeleton, tooltip: "宣告動畫" })),
            (_dec2$4 = property$6({ type: Label, tooltip: "贏分" })),
            ccclass$9(
              ((_class2$6 = (function (e) {
                function t() {
                  for (
                    var t, o = arguments.length, n = new Array(o), i = 0;
                    i < o;
                    i++
                  )
                    n[i] = arguments[i];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_spine",
                      _descriptor$6,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_winLabel",
                      _descriptor2$4,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                return (
                  _inheritsLoose(t, e),
                  (t.prototype.Play = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o, n) {
                        var i,
                          r,
                          a,
                          s,
                          l = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.node.active = !0),
                                    (i = t ? "L" : "S"),
                                    5,
                                    (r = 0),
                                    (a = node.divide(5, 0.02)),
                                    (s = node.divide(o, a)),
                                    tween(this.node)
                                      .repeat(
                                        a,
                                        tween()
                                          .call(function () {
                                            (r += s) >= o && (r = o);
                                            var e = TSQ_Define.ShowDisplayValue
                                              ? TSQ_Define.ShowDisplayValue(r)
                                              : r;
                                            l.m_winLabel.string =
                                              node.FormatNumberThousands(
                                                e,
                                                node.FORMAT_NUMBER_TYPE
                                                  .PERMANENT_DOT
                                              );
                                          })
                                          .delay(0.02)
                                      )
                                      .call(function () {
                                        var e = TSQ_Define.ShowDisplayValue
                                          ? TSQ_Define.ShowDisplayValue(o)
                                          : o;
                                        l.m_winLabel.string =
                                          node.FormatNumberThousands(
                                            e,
                                            node.FORMAT_NUMBER_TYPE
                                              .PERMANENT_DOT
                                          );
                                      })
                                      .start(),
                                    (e.next = 9),
                                    SpineKit.PlayAnimation(
                                      this.m_spine,
                                      AnimName$8.START + "_" + i
                                    )
                                  );
                                case 9:
                                  return (
                                    (e.next = 11),
                                    SpineKit.PlayAnimation(
                                      this.m_spine,
                                      AnimName$8.END + "_" + i,
                                      !1,
                                      0,
                                      n
                                    )
                                  );
                                case 11:
                                  this.node.active = !1;
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
                    return function (t, o, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  t
                );
              })(Component)),
              (_descriptor$6 = _applyDecoratedDescriptor(
                _class2$6.prototype,
                "m_spine",
                [_dec$6],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor2$4 = _applyDecoratedDescriptor(
                _class2$6.prototype,
                "m_winLabel",
                [_dec2$4],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_class$9 = _class2$6))
            ) || _class$9),
          _dec$7,
          _dec2$5,
          _class$a,
          _class2$7,
          _descriptor$7,
          _descriptor2$5;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "0fa681+xw9FL5e7AwvgM7EN",
            "GameIntroSpine",
            void 0
          );
        var ccclass$a = _decorator.ccclass,
          property$7 = _decorator.property,
          GameIntroSpine =
            ((_dec$7 = property$7({ type: sp.Skeleton, tooltip: "前導動畫" })),
            (_dec2$5 = property$7({
              type: sp.Skeleton,
              tooltip: "輪帶控制動畫",
            })),
            ccclass$a(
              ((_class2$7 = (function (e) {
                function t() {
                  for (
                    var t, o = arguments.length, n = new Array(o), i = 0;
                    i < o;
                    i++
                  )
                    n[i] = arguments[i];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_gameIntro",
                      _descriptor$7,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_gameIntroReelFollow",
                      _descriptor2$5,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.Pause = function (e) {
                    log("Pause", e);
                    var t = e ? AnimName$9.L : AnimName$9.S;
                    this.m_gameIntro.setAnimation(0, t, !1),
                      (this.m_gameIntro.timeScale = 0);
                  }),
                  (o.Show = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o) {
                        var n, i;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (n = t ? AnimName$9.L : AnimName$9.S),
                                    (this.node.active = !0),
                                    (i = []),
                                    node$1.Play(TSQ_Define.AudioClips.Debut),
                                    (this.m_gameIntro.timeScale = 1),
                                    i.push(
                                      SpineKit.PlayAnimation(
                                        this.m_gameIntro,
                                        n,
                                        !1,
                                        0,
                                        function (e) {
                                          null == o || o(e);
                                        }
                                      )
                                    ),
                                    i.push(
                                      SpineKit.PlayAnimation(
                                        this.m_gameIntroReelFollow,
                                        n
                                      )
                                    ),
                                    (e.next = 9),
                                    Promise.all(i)
                                  );
                                case 9:
                                  this.node.active = !1;
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
                    return function (t, o) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.OnRotate = function (e) {
                    var t = e ? AnimName$9.L : AnimName$9.S;
                    this.m_gameIntro.setAnimation(0, t, !1),
                      (this.m_gameIntro.timeScale = 0);
                  }),
                  t
                );
              })(Component)),
              (_descriptor$7 = _applyDecoratedDescriptor(
                _class2$7.prototype,
                "m_gameIntro",
                [_dec$7],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor2$5 = _applyDecoratedDescriptor(
                _class2$7.prototype,
                "m_gameIntroReelFollow",
                [_dec2$5],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_class$a = _class2$7))
            ) || _class$a),
          AnimName$9 = {
            L: "Gamelntro_L",
            S: "Gamelntro_S",
            IDLE_L: "Idle_L",
            IDLE_S: "Idle_S",
          },
          _dec$8,
          _dec2$6,
          _dec3$3,
          _dec4$3,
          _dec5$3,
          _dec6$2,
          _dec7$2,
          _dec8$2,
          _dec9$1,
          _dec10,
          _dec11,
          _dec12,
          _dec13,
          _dec14,
          _dec15,
          _dec16,
          _dec17,
          _dec18,
          _dec19,
          _dec20,
          _class$b,
          _class2$8,
          _descriptor$8,
          _descriptor2$6,
          _descriptor3$3,
          _descriptor4$3,
          _descriptor5$2,
          _descriptor6$2,
          _descriptor7$2,
          _descriptor8$1,
          _descriptor9$1,
          _descriptor10,
          _descriptor11,
          _descriptor12,
          _descriptor13,
          _descriptor14,
          _descriptor15,
          _descriptor16,
          _descriptor17,
          _descriptor18,
          _descriptor19,
          _descriptor20;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "105041C+ylOu7HxqK9QZqD9",
            "EffectPlate",
            void 0
          );
        var ccclass$b = _decorator.ccclass,
          property$8 = _decorator.property,
          EffectPlate =
            ((_dec$8 = property$8({
              type: GameIntroSpine,
              tooltip: "前導動畫",
            })),
            (_dec2$6 = property$8({ type: Shake, tooltip: "震動組件" })),
            (_dec3$3 = property$8({
              type: Prefab,
              tooltip: "符號特色遊戲表演下層特效",
            })),
            (_dec4$3 = property$8({
              type: Prefab,
              tooltip: "符號特色遊戲表演上層特效",
            })),
            (_dec5$3 = property$8({
              type: Prefab,
              tooltip: "符號下層中獎特效",
            })),
            (_dec6$2 = property$8({
              type: Prefab,
              tooltip: "符號上層中獎特效",
            })),
            (_dec7$2 = property$8({ type: Prefab, tooltip: "symbol動畫" })),
            (_dec8$2 = property$8({
              type: Prefab,
              tooltip: "印記&光球(青紫綠橘藍)",
            })),
            (_dec9$1 = property$8({
              type: Prefab,
              tooltip: "特色遊戲框(中後前)",
            })),
            (_dec10 = property$8({ type: Node, tooltip: "Symbol底層動畫區" })),
            (_dec11 = property$8({
              type: AltarSpine,
              tooltip: "Node_Altar component AltarSpine 祭壇動畫",
            })),
            (_dec12 = property$8({ type: [Node], tooltip: "光球位置節點" })),
            (_dec13 = property$8({
              type: FeatureSpine,
              tooltip: "特色遊戲光球動畫",
            })),
            (_dec14 = property$8({ type: Node, tooltip: "贏分面板node" })),
            (_dec15 = property$8({ type: Label, tooltip: "贏分面板label" })),
            (_dec16 = property$8({
              type: FgComplimentSpine,
              tooltip: "結算節點",
            })),
            (_dec17 = property$8({
              type: FgDeclareSpine,
              tooltip: "宣告節點",
            })),
            (_dec18 = property$8({
              type: FgDeclareLevelUpSpine,
              tooltip: "宣告升級",
            })),
            (_dec19 = property$8({ type: BigWin, tooltip: "大獎贏分" })),
            (_dec20 = property$8({
              type: ManualComponent,
              tooltip: "大獎贏分",
            })),
            ccclass$b(
              ((_class2$8 = (function (e) {
                function t() {
                  for (
                    var t, o = arguments.length, n = new Array(o), i = 0;
                    i < o;
                    i++
                  )
                    n[i] = arguments[i];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_gameIntro",
                      _descriptor$8,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_shakeComp",
                      _descriptor2$6,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_symbolBackPrefab",
                      _descriptor3$3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_symbolFrontPrefab",
                      _descriptor4$3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_winSymbolBackPrefab",
                      _descriptor5$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_winSymbolFrontPrefab",
                      _descriptor6$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_symbolEftPrefabs",
                      _descriptor7$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_collectObjectPrefabs",
                      _descriptor8$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_FeatureFramePrefabs",
                      _descriptor9$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_reelBgSymbolFxNode",
                      _descriptor10,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_altarSpine",
                      _descriptor11,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_featurePosNode",
                      _descriptor12,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_featureSpine",
                      _descriptor13,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_nodeWin",
                      _descriptor14,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_nodeWinLabel",
                      _descriptor15,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_complimentSpine",
                      _descriptor16,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fgDeclareSpine",
                      _descriptor17,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fgDeclareLevelUpSpine",
                      _descriptor18,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_bigWin",
                      _descriptor19,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_manualComponent",
                      _descriptor20,
                      _assertThisInitialized(t)
                    ),
                    (t.m_slotReels = null),
                    (t.m_gameView = null),
                    (t.m_lightPointSpines = [null]),
                    (t.m_symbolSpine = void 0),
                    (t.m_collectLightPointWaitPromises = Array.from(
                      { length: 6 },
                      function () {
                        return null;
                      }
                    )),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.Init = function (e, t) {
                    (this.m_gameView = e), (this.m_slotReels = t);
                    for (
                      var o = 0;
                      o < Object.keys(TSQ_Define.LIGHT_TYPE).length - 1;
                      o++
                    ) {
                      var n = instantiate(this.m_collectObjectPrefabs[o]),
                        i = n.addComponent(LightPointSpine);
                      i.Init(),
                        this.m_reelBgSymbolFxNode.addChild(n),
                        (n.active = !1),
                        this.m_lightPointSpines.push(i);
                    }
                    NodePool.GetInstance().SetSymbolPrefab(
                      this.m_symbolEftPrefabs,
                      this.m_symbolFrontPrefab,
                      this.m_symbolBackPrefab,
                      this.m_winSymbolFrontPrefab,
                      this.m_winSymbolBackPrefab
                    ),
                      (this.m_symbolSpine = Array.from(
                        { length: TSQ_Define.COL },
                        function () {
                          return Array.from({ length: TSQ_Define.ROW });
                        }
                      )),
                      NodePool.GetInstance().SetFeatureFramePrefab(
                        this.m_FeatureFramePrefabs[0],
                        this.m_FeatureFramePrefabs[1],
                        this.m_FeatureFramePrefabs[2]
                      ),
                      this.m_featureSpine.Init(),
                      this.m_altarSpine.SetHpBar(0),
                      this.BigWin.SetInit();
                  }),
                  (o.OnRotate = function (e) {
                    this.m_featureSpine.OnRotate(e),
                      this.m_lightPointSpines.forEach(function (e) {
                        e && e.OnRotate();
                      });
                  }),
                  (o.SetManualActive = function () {
                    TSQ_Define.IsInFG
                      ? (this.m_manualComponent.CloseManul(),
                        (this.m_manualComponent.node.active = !1))
                      : (this.m_manualComponent.node.active = !0);
                  }),
                  (o.EliminateAwardSymbol = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o) {
                        var n, i, r, a, s, l, c, u, m, p, h, _;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    n = [],
                                      i = TSQ_Define.HARD_STOP_SPEED,
                                      r = 0,
                                      a = 0;
                                    a < (null == t ? void 0 : t.length);
                                    a++
                                  )
                                    for (
                                      r = node.plus(r, t[a].Win), s = 0;
                                      s < t[a].Count;
                                      s++
                                    )
                                      (l = t[a].PosVec[s]),
                                        (c = TSQ_Define.ConvertIndex2ColRow(l)),
                                        this.m_symbolSpine[c.x][c.y] ||
                                          ((u = this.m_slotReels.GetSymbol(
                                            c.x,
                                            c.y
                                          )),
                                          (this.m_slotReels.GetSymbolNode(
                                            c.x,
                                            c.y
                                          ).active = !1),
                                          (m =
                                            NodePool.GetInstance().GetSymbolSpine(
                                              u
                                            )),
                                          (p =
                                            this.m_slotReels.GetSymbolPosition(
                                              c.x,
                                              c.y
                                            )),
                                          (this.m_symbolSpine[c.x][c.y] = m),
                                          n.push(m.PlayWin(this.node, p, i)));
                                  return (
                                    null != t &&
                                      t.length &&
                                      node$1.Play(
                                        TSQ_Define.AudioClips.Eliminat_s
                                      ),
                                    (e.next = 7),
                                    Promise.all(n)
                                  );
                                case 7:
                                  this.ShowWin(r),
                                    (h = TSQ_Define.IsInFG
                                      ? this.m_gameView.SpinAck.RoundQueue[
                                          TSQ_Define.Round
                                        ].LevelCount
                                      : -1),
                                    (_ = TSQ_Define.IsInFG
                                      ? TSQ_Define.EliminateTotalCount
                                      : -1),
                                    this.m_altarSpine.SetHpBar(o, !0, h, _),
                                    this.CleanAllSymbolSpine();
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
                    return function (t, o) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.CyanPower = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var o, n, i, r, a, s;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    node$1.Play(
                                      TSQ_Define.AudioClips.Light_Executive01_s
                                    ),
                                    node$1.Play(
                                      TSQ_Define.AudioClips.Light_Executive01
                                    ),
                                    (o = this.CyanHitStart()),
                                    (n = o.eventPromise),
                                    (i = o.endPromise),
                                    (e.next = 5),
                                    this.PlayCyanAll(t, n)
                                  );
                                case 5:
                                  return (
                                    (r = this.m_gameView.GetHpBarPercent()),
                                    (a = TSQ_Define.IsInFG
                                      ? this.m_gameView.SpinAck.RoundQueue[
                                          TSQ_Define.Round
                                        ].LevelCount
                                      : -1),
                                    (s = TSQ_Define.IsInFG
                                      ? TSQ_Define.EliminateTotalCount
                                      : -1),
                                    this.m_altarSpine.SetHpBar(r, !0, a, s),
                                    this.CleanAllSymbolSpine(),
                                    (e.next = 12),
                                    i
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.PurplePower = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o, n) {
                        var i,
                          r,
                          a,
                          s,
                          l,
                          c = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (i = []),
                                    (r = this.m_slotReels.Plate),
                                    node$1.Play(
                                      TSQ_Define.AudioClips.Light_Executive02_s
                                    ),
                                    (e.next = 5),
                                    this.m_featureSpine.PurpleHitStart(
                                      this.m_gameView.IsLandscape,
                                      function () {
                                        return c.PurpleHitStartCallback();
                                      }
                                    )
                                  );
                                case 5:
                                  return (
                                    this.m_gameView.SlotReels.SetSymbolLightOtherDark(
                                      o
                                    ),
                                    (e.next = 8),
                                    node$4.Wait(this, 1)
                                  );
                                case 8:
                                  return (
                                    (e.next = 10),
                                    this.m_featureSpine.PurpleHitEnd(
                                      this.m_gameView.IsLandscape,
                                      function () {
                                        return c.PurpleHitEndCallback(r, o, i);
                                      }
                                    )
                                  );
                                case 10:
                                  return (
                                    this.m_shakeComp.enabled &&
                                      this.m_shakeComp.ShakeWithName(
                                        ShakeName.FEATURE_02B
                                      ),
                                    (e.next = 13),
                                    Promise.all(i)
                                  );
                                case 13:
                                  return (e.next = 15), node$4.Wait(this, 0.5);
                                case 15:
                                  return (
                                    this.PurpleSetSlotPlate(r, o),
                                    (a = this.m_gameView.GetHpBarPercent()),
                                    (s = TSQ_Define.IsInFG
                                      ? this.m_gameView.SpinAck.RoundQueue[
                                          TSQ_Define.Round
                                        ].LevelCount
                                      : -1),
                                    (l = TSQ_Define.IsInFG
                                      ? TSQ_Define.EliminateTotalCount
                                      : -1),
                                    this.m_altarSpine.SetHpBar(a, !0, s, l),
                                    this.CleanAllSymbolSpine(),
                                    this.m_gameView.SlotReels.ShowDarkOrLightSymbol(
                                      !0
                                    ),
                                    (e.next = 24),
                                    this.EliminateAwardSymbol(t, n)
                                  );
                                case 24:
                                  this.m_gameView.SlotReels.ShowDarkOrLightSymbol(
                                    !1
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
                    return function (t, o, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.GreenPower = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o, n) {
                        var i, r, a, s, l, c, u, m;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    node$1.Play(
                                      TSQ_Define.AudioClips.Light_Executive03_s
                                    ),
                                    (e.next = 3),
                                    this.m_featureSpine.HitStart(
                                      LIGHT_TYPE.GREEN,
                                      this.m_gameView.IsLandscape
                                    )
                                  );
                                case 3:
                                  return (e.next = 5), this.PlayGreenFrame(o);
                                case 5:
                                  return (
                                    (i = e.sent),
                                    this.m_shakeComp.enabled &&
                                      this.m_shakeComp.ShakeWithName(
                                        ShakeName.FEATURE_03
                                      ),
                                    this.m_featureSpine.HitEnd(
                                      LIGHT_TYPE.GREEN,
                                      this.m_gameView.IsLandscape
                                    ),
                                    (e.next = 10),
                                    this.PlayGreenBreakAndSetSlotPlate(o)
                                  );
                                case 10:
                                  return (
                                    (r = e.sent),
                                    (a = this.GreenEliminateSymbol(o, n, i, r)),
                                    (e.next = 14),
                                    this.GreenBigGemToSmallGem(i, a)
                                  );
                                case 14:
                                  for (
                                    s = 0, l = 0;
                                    l < (null == t ? void 0 : t.length);
                                    l++
                                  )
                                    s = node.plus(s, t[l].Win);
                                  this.ShowWin(s),
                                    (c = this.m_gameView.GetHpBarPercent()),
                                    (u = TSQ_Define.IsInFG
                                      ? this.m_gameView.SpinAck.RoundQueue[
                                          TSQ_Define.Round
                                        ].LevelCount
                                      : -1),
                                    (m = TSQ_Define.IsInFG
                                      ? TSQ_Define.EliminateTotalCount
                                      : -1),
                                    this.m_altarSpine.SetHpBar(c, !0, u, m),
                                    this.GreenPlateRecovery(n);
                                case 22:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (t, o, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.OrangePower = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o, n) {
                        var i,
                          r,
                          a,
                          s,
                          l,
                          c,
                          u,
                          m,
                          p,
                          h,
                          _,
                          f,
                          d,
                          C = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    node$1.Play(
                                      TSQ_Define.AudioClips.Light_Executive04_s
                                    ),
                                    (i =
                                      NodePool.GetInstance().GetFeatureFrameSpine()),
                                    this.GetOrangeRandomFrameShowInfo(),
                                    (r = TSQ_Define.ConvertIndex2ColRow(
                                      o.PosVec[0]
                                    )),
                                    (a = r.x),
                                    (s = r.y),
                                    (l = o.Size),
                                    (c = this.m_slotReels.GetBigSymbolPosition(
                                      a,
                                      s,
                                      l
                                    )),
                                    (e.next = 10),
                                    this.m_featureSpine.HitStart(
                                      LIGHT_TYPE.ORANGE,
                                      this.m_gameView.IsLandscape
                                    )
                                  );
                                case 10:
                                  return (
                                    (u = new Promise(function (e) {
                                      i.PlayFinial(
                                        C.node,
                                        o.Symbol,
                                        c,
                                        LIGHT_TYPE.ORANGE,
                                        l,
                                        e
                                      );
                                    })),
                                    this.m_featureSpine.HitEnd(
                                      LIGHT_TYPE.ORANGE,
                                      this.m_gameView.IsLandscape
                                    ),
                                    (e.next = 14),
                                    u
                                  );
                                case 14:
                                  return (
                                    this.m_shakeComp.enabled &&
                                      this.m_shakeComp.ShakeWithName(
                                        ShakeName.FEATURE_04
                                      ),
                                    (e.next = 17),
                                    this.PlayOrangeBreakAndSetSlotPlate(o)
                                  );
                                case 17:
                                  return (
                                    (m = e.sent),
                                    (e.next = 20),
                                    this.OrangeEliminateSymbol(
                                      n,
                                      a,
                                      s,
                                      o,
                                      c,
                                      i,
                                      m
                                    )
                                  );
                                case 20:
                                  for (
                                    p = 0, h = 0;
                                    h < (null == t ? void 0 : t.length);
                                    h++
                                  )
                                    p = node.plus(p, t[h].Win);
                                  this.ShowWin(p),
                                    (_ = this.m_gameView.GetHpBarPercent()),
                                    (f = TSQ_Define.IsInFG
                                      ? this.m_gameView.SpinAck.RoundQueue[
                                          TSQ_Define.Round
                                        ].LevelCount
                                      : -1),
                                    (d = TSQ_Define.IsInFG
                                      ? TSQ_Define.EliminateTotalCount
                                      : -1),
                                    this.m_altarSpine.SetHpBar(_, !0, f, d),
                                    this.m_gameView.SlotReels.ShowDarkOrLightSymbol(
                                      !1
                                    ),
                                    this.CleanAllSymbolSpine();
                                case 29:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (t, o, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.BluePower = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o, n) {
                        var i,
                          r,
                          a = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    node$1.Play(
                                      TSQ_Define.AudioClips.Light_Executive05_s
                                    ),
                                    (i = new Promise(function (e) {
                                      a.m_featureSpine.BlueHit(
                                        a.m_gameView.IsLandscape,
                                        e
                                      );
                                    })),
                                    (e.next = 4),
                                    i
                                  );
                                case 4:
                                  return (
                                    (e.next = 6),
                                    this.PlayBlueStartAndSetSlotPlate(o)
                                  );
                                case 6:
                                  return (
                                    (r = e.sent),
                                    (e.next = 9),
                                    this.PlayBlueEnd(r)
                                  );
                                case 9:
                                  return (
                                    this.m_slotReels.ShowAllSymbolNode(),
                                    this.CleanAllSymbolSpine(),
                                    this.m_gameView.SlotReels.ShowDarkOrLightSymbol(
                                      !0
                                    ),
                                    (e.next = 14),
                                    this.EliminateAwardSymbol(t, n)
                                  );
                                case 14:
                                  this.m_gameView.SlotReels.ShowDarkOrLightSymbol(
                                    !1
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
                    return function (t, o, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.ShowLightPoint = function (e) {
                    e.length > 0 &&
                      node$1.Play(TSQ_Define.AudioClips.Light_Point);
                    for (var t = LIGHT_TYPE.CYAN; t < e.length; t++) {
                      var o = this.m_lightPointSpines[t];
                      if (-1 != e[t]) {
                        var n = TSQ_Define.ConvertIndex2ColRow(e[t]),
                          i = this.m_slotReels.GetSymbolPosition(n.x, n.y);
                        o.node.setPosition(i), o.Show();
                      } else o.node.active = !1;
                    }
                  }),
                  (o.HideAllLightPoint = function () {
                    for (var e = LIGHT_TYPE.CYAN; e <= LIGHT_TYPE.BLUE; e++) {
                      var t = this.m_lightPointSpines[e];
                      t && t.node.active && t.Hide();
                    }
                  }),
                  (o.CollectLightPoint = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o) {
                        var n,
                          i,
                          r,
                          a,
                          s = this;
                        return _regeneratorRuntime().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                for (
                                  n = [],
                                    i = [],
                                    r = function (e) {
                                      var o = t[e],
                                        r = s.m_lightPointSpines[o],
                                        a = s.m_featurePosNode[o - 1];
                                      r &&
                                        r.node.active &&
                                        i.push(
                                          new Promise(function (t) {
                                            r.node.setParent(s.node),
                                              (s.m_collectLightPointWaitPromises[
                                                o
                                              ] = new Promise(function (i) {
                                                n.push(
                                                  s.CollectLightPointAction(
                                                    r,
                                                    a,
                                                    TSQ_Define.LIGHT_POINT_INTERVAL *
                                                      e,
                                                    o,
                                                    t,
                                                    i
                                                  )
                                                );
                                              }));
                                          })
                                        );
                                    },
                                    a = 0;
                                  a < t.length;
                                  a++
                                )
                                  r(a);
                                return (
                                  Promise.all(i).then(function () {
                                    return o();
                                  }),
                                  (e.next = 7),
                                  Promise.all(n)
                                );
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t, o) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.ResetAltar = function (e) {
                    if ((void 0 === e && (e = !1), !e)) {
                      this.m_altarSpine.HideMultiple();
                      var t = TSQ_Define.IsInFG
                        ? this.m_gameView.SpinAck.RoundQueue[TSQ_Define.Round]
                            .LevelCount
                        : -1;
                      this.m_altarSpine.SetHpBar(0, !0, t, 0);
                    }
                    this.m_featureSpine.Reset();
                  }),
                  (o.TriggerAltar = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.next = 2), node$4.Wait(this, 0.2);
                                case 2:
                                  return (
                                    this.m_featureSpine.Collect(
                                      LightType.LightTypeOne,
                                      this.m_gameView.IsLandscape,
                                      !0
                                    ),
                                    (e.next = 5),
                                    node$4.Wait(this, 0.2)
                                  );
                                case 5:
                                  return (
                                    this.m_featureSpine.Collect(
                                      LightType.LightTypeTwo,
                                      this.m_gameView.IsLandscape,
                                      !0
                                    ),
                                    (e.next = 8),
                                    node$4.Wait(this, 0.2)
                                  );
                                case 8:
                                  return (
                                    this.m_featureSpine.Collect(
                                      LightType.LightTypeThree,
                                      this.m_gameView.IsLandscape,
                                      !0
                                    ),
                                    (e.next = 11),
                                    node$4.Wait(this, 0.2)
                                  );
                                case 11:
                                  return (
                                    this.m_featureSpine.Collect(
                                      LightType.LightTypeFour,
                                      this.m_gameView.IsLandscape,
                                      !0
                                    ),
                                    (e.next = 14),
                                    node$4.Wait(this, 0.2)
                                  );
                                case 14:
                                  return (
                                    this.m_featureSpine.Collect(
                                      LightType.LightTypeFive,
                                      this.m_gameView.IsLandscape,
                                      !0
                                    ),
                                    (e.next = 17),
                                    node$4.Wait(this, 0.2)
                                  );
                                case 17:
                                  this.m_altarSpine.SetHpBar(0, !0);
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
                  (o.TriggerAltarById = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  t[LightType.LightTypeOne] &&
                                    this.m_featureSpine.Collect(
                                      LightType.LightTypeOne,
                                      this.m_gameView.IsLandscape,
                                      !0
                                    ),
                                    t[LightType.LightTypeTwo] &&
                                      this.m_featureSpine.Collect(
                                        LightType.LightTypeTwo,
                                        this.m_gameView.IsLandscape,
                                        !0
                                      ),
                                    t[LightType.LightTypeThree] &&
                                      this.m_featureSpine.Collect(
                                        LightType.LightTypeThree,
                                        this.m_gameView.IsLandscape,
                                        !0
                                      ),
                                    t[LightType.LightTypeFour] &&
                                      this.m_featureSpine.Collect(
                                        LightType.LightTypeFour,
                                        this.m_gameView.IsLandscape,
                                        !0
                                      ),
                                    t[LightType.LightTypeFive] &&
                                      this.m_featureSpine.Collect(
                                        LightType.LightTypeFive,
                                        this.m_gameView.IsLandscape,
                                        !0
                                      ),
                                    this.m_altarSpine.SetHpBar(0, !0);
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.SetFgAltar = function (e) {
                    this.m_featureSpine.TriggerFgAll(
                      this.m_gameView.IsLandscape
                    ),
                      this.m_altarSpine.ShowMultiple(e);
                    var t = TSQ_Define.IsInFG
                      ? this.m_gameView.SpinAck.RoundQueue[TSQ_Define.Round]
                          .LevelCount
                      : -1;
                    this.m_altarSpine.SetHpBar(0, !0, t, 0);
                  }),
                  (o.EnterFree = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.m_fgDeclareSpine.Play(t, o)
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
                    return function (t, o) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.FgLevelUp = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o, n) {
                        var i,
                          r = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (i = function (e) {
                                      switch (e) {
                                        case "AnimationEvent1":
                                          r.m_altarSpine.ShowMultiple(n),
                                            node$1.Play(
                                              TSQ_Define.AudioClips
                                                .Multiplier_Up
                                            );
                                          var o = Number(
                                            r.m_gameView.LevelNum.string
                                          );
                                          (o += 1),
                                            (r.m_gameView.LevelNum.string =
                                              o.toString());
                                          break;
                                        case "AnimationEvent2":
                                          r.m_featureSpine.Collect(
                                            LightType.LightTypeOne,
                                            t,
                                            !0
                                          );
                                          break;
                                        case "AnimationEvent3":
                                          r.m_featureSpine.Collect(
                                            LightType.LightTypeTwo,
                                            t,
                                            !0
                                          );
                                          break;
                                        case "AnimationEvent4":
                                          r.m_featureSpine.Collect(
                                            LightType.LightTypeThree,
                                            t,
                                            !0
                                          );
                                          break;
                                        case "AnimationEvent5":
                                          r.m_featureSpine.Collect(
                                            LightType.LightTypeFour,
                                            t,
                                            !0
                                          );
                                          break;
                                        case "AnimationEvent6":
                                          r.m_featureSpine.Collect(
                                            LightType.LightTypeFive,
                                            t,
                                            !0
                                          );
                                          break;
                                        case "AnimationEvent7":
                                          node$1.Play(
                                            TSQ_Define.AudioClips.BF_LevelUp_02
                                          );
                                          var i = TSQ_Define.IsInFG
                                            ? r.m_gameView.SpinAck.RoundQueue[
                                                TSQ_Define.Round + 1
                                              ].LevelCount
                                            : -1;
                                          r.m_altarSpine.SetHpBar(0, !0, i, 0);
                                      }
                                    }),
                                    (e.next = 3),
                                    this.m_fgDeclareLevelUpSpine.Play(t, o, i)
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
                    return function (t, o, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.LeaveFree = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o, n) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.m_complimentSpine.Play(t, o, n)
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
                    return function (t, o, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.CollectLightPointAction = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o, n, i, r, a) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    t.Collect(
                                      o,
                                      this.m_gameView.IsLandscape,
                                      n,
                                      r
                                    )
                                  );
                                case 2:
                                  return (
                                    t.node.setParent(this.m_reelBgSymbolFxNode),
                                    (e.next = 5),
                                    this.m_featureSpine.Collect(
                                      i,
                                      this.m_gameView.IsLandscape,
                                      !1,
                                      a
                                    )
                                  );
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
                    return function (t, o, n, i, r, a) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.PlayCyanAll = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o) {
                        var n, i, r;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (n = [], i = 0; i < t.length; i++)
                                    for (r = 0; r < t[i].Col.length; r++)
                                      t[i].Col[r] &&
                                        n.push(this.PlayCyan(i, r, o));
                                  return (e.next = 4), Promise.all(n);
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
                    return function (t, o) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.PlayCyan = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o, n) {
                        var i, r, a, s, l;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (i = this.m_slotReels.GetSymbol(t, o)),
                                    (r = this.m_slotReels.GetSymbolNode(t, o)),
                                    (a =
                                      NodePool.GetInstance().GetSymbolSpine(i)),
                                    (s = this.m_slotReels.GetSymbolPosition(
                                      t,
                                      o
                                    )),
                                    (this.m_symbolSpine[t][o] = a),
                                    (l = Math.random()),
                                    (e.next = 8),
                                    node$4.Wait(this, l)
                                  );
                                case 8:
                                  return (
                                    (r.active = !1),
                                    (e.next = 11),
                                    a.PlayCyan(this.node, s, n)
                                  );
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
                    return function (t, o, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.CyanHitStart = function () {
                    var e,
                      t = this;
                    return {
                      eventPromise: new Promise(function (o) {
                        e = t.m_featureSpine.CyanHit(
                          t.m_gameView.IsLandscape,
                          o
                        );
                      }).then(function () {
                        t.m_shakeComp.enabled &&
                          t.m_shakeComp.ShakeWithName(ShakeName.FEATURE_01);
                      }),
                      endPromise: e,
                    };
                  }),
                  (o.PurpleHitStartCallback = function () {
                    this.m_shakeComp.enabled &&
                      this.m_shakeComp.ShakeWithName(ShakeName.FEATURE_02A);
                  }),
                  (o.PurpleHitEndCallback = function (e, t, o) {
                    var n = this;
                    e.forEach(function (i, r) {
                      return i.Col.forEach(function (i, a) {
                        if (e[r].Col[a] === t) {
                          n.m_slotReels.GetSymbolNode(r, a).active = !1;
                          var s = n.m_slotReels.GetSymbol(r, a),
                            l = NodePool.GetInstance().GetSymbolSpine(s),
                            c = n.m_slotReels.GetSymbolPosition(r, a);
                          (n.m_symbolSpine[r][a] = l),
                            o.push(l.PlayPurple(n.node, c));
                        }
                      });
                    });
                  }),
                  (o.PurpleSetSlotPlate = function (e, t) {
                    var o = this;
                    e.forEach(function (n, i) {
                      return n.Col.forEach(function (n, r) {
                        e[i].Col[r] === t &&
                          ((o.m_slotReels.GetSymbolNode(i, r).active = !0),
                          o.m_slotReels.SetPlateOneSymbol(
                            i,
                            r,
                            TSQ_Define.Symbol.WILD
                          ));
                      });
                    });
                  }),
                  (o.GetGreenRandomFrameShowInfo = function () {
                    for (
                      var e = [],
                        t = Array.from({ length: 6 }, function (e, t) {
                          return Array.from({ length: 6 }, function (e, o) {
                            return 6 * t + o;
                          });
                        }),
                        o = 0;
                      o < 10;
                      o++
                    ) {
                      for (
                        var n = [],
                          i = void 0,
                          r = Array.from({ length: 36 }, function (e, t) {
                            return t;
                          }),
                          a = Math.floor(5 * Math.random() + 1),
                          s = 0;
                        s < a;
                        s++
                      )
                        if (
                          (i = r.splice(
                            Math.floor(Math.random() * r.length),
                            1
                          )).length
                        ) {
                          for (
                            var l = i[0] % 6, c = (i[0] - l) / 6, u = -1;
                            u < 2;
                            u++
                          ) {
                            var m = c + u;
                            if (m >= 0 && m < 6)
                              for (var p = -1; p < 2; p++) {
                                var h = l + p;
                                if (h >= 0 && h < 6 && (u || p)) {
                                  var _ = t[m][h],
                                    f = r.indexOf(_);
                                  r.splice(f, 1);
                                }
                              }
                          }
                          var d = this.m_slotReels.GetBigSymbolPosition(
                              c,
                              l,
                              2
                            ),
                            C = {
                              Type: LIGHT_TYPE.GREEN,
                              Position: d,
                              Size: 2,
                            };
                          n.push(C);
                        }
                      e.push(n);
                    }
                    return e;
                  }),
                  (o.PlayGreenRandomFrame = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t,
                          o,
                          n,
                          i,
                          r = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (t = []),
                                    (o = this.GetGreenRandomFrameShowInfo()),
                                    (n = _regeneratorRuntime().mark(function e(
                                      n
                                    ) {
                                      var i;
                                      return _regeneratorRuntime().wrap(
                                        function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return (
                                                  (i = []),
                                                  o[n].forEach(function (e) {
                                                    var o =
                                                      NodePool.GetInstance().GetFeatureFrameSpine();
                                                    i.push(o),
                                                      t.push(
                                                        o.PlayRandom(r.node, e)
                                                      );
                                                  }),
                                                  (e.next = 4),
                                                  Promise.all(t)
                                                );
                                              case 4:
                                                i.forEach(function (e) {
                                                  return NodePool.GetInstance().ReturnFeatureFrameSpine(
                                                    e
                                                  );
                                                }),
                                                  (t = []);
                                              case 6:
                                              case "end":
                                                return e.stop();
                                            }
                                        },
                                        e
                                      );
                                    })),
                                    (i = 0);
                                case 4:
                                  if (!(i < o.length)) {
                                    e.next = 9;
                                    break;
                                  }
                                  return e.delegateYield(n(i), "t0", 6);
                                case 6:
                                  i++, (e.next = 4);
                                  break;
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
                  (o.PlayGreenFrame = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var o,
                          n,
                          i,
                          r,
                          a = this;
                        return _regeneratorRuntime().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                for (
                                  o = [],
                                    n = [],
                                    i = function (e) {
                                      var i = t[e].PosVec[0],
                                        r = TSQ_Define.ConvertIndex2ColRow(i),
                                        s = r.x,
                                        l = r.y,
                                        c = a.m_slotReels.GetBigSymbolPosition(
                                          s,
                                          l,
                                          2
                                        );
                                      o.push(
                                        new Promise(function (o) {
                                          var i =
                                            NodePool.GetInstance().GetFeatureFrameSpine();
                                          i.PlayFinial(
                                            a.node,
                                            t[e].Symbol,
                                            c,
                                            LIGHT_TYPE.GREEN,
                                            2,
                                            o
                                          );
                                          var r = {
                                            Col: s,
                                            Row: l,
                                            Spine: i,
                                            Position: c,
                                            Size: 2,
                                            SmallGenPosVec: t[e].PosVec.slice(),
                                          };
                                          n.push(r);
                                        })
                                      );
                                    },
                                    r = 0;
                                  r < t.length;
                                  r++
                                )
                                  i(r);
                                return (e.next = 6), Promise.all(o);
                              case 6:
                                return e.abrupt("return", n);
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.PlayGreenBreakAndSetSlotPlate = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var o, n, i, r, a, s, l, c, u, m, p;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    o = [],
                                      n = Array.from(
                                        { length: TSQ_Define.COL },
                                        function () {
                                          return Array.from({
                                            length: TSQ_Define.ROW,
                                          });
                                        }
                                      ),
                                      i = 0;
                                    i < t.length;
                                    i++
                                  )
                                    for (r = 0; r < t[i].PosVec.length; r++)
                                      (a = t[i].PosVec[r]),
                                        (s = TSQ_Define.ConvertIndex2ColRow(a)),
                                        (l = s.x),
                                        (c = s.y),
                                        (this.m_slotReels.GetSymbolNode(
                                          l,
                                          c
                                        ).active = !1),
                                        (u = this.m_slotReels.GetSymbol(l, c)),
                                        (m =
                                          NodePool.GetInstance().GetSymbolSpine(
                                            u
                                          )),
                                        (p = this.m_slotReels.GetSymbolPosition(
                                          l,
                                          c
                                        )),
                                        (this.m_symbolSpine[l][c] = m),
                                        (n[l][c] = !0),
                                        o.push(m.PlayBreak(this.node, p)),
                                        this.m_slotReels.SetPlateOneSymbol(
                                          l,
                                          c,
                                          t[i].Symbol
                                        );
                                  return (e.next = 5), Promise.all(o);
                                case 5:
                                  return (e.next = 7), node$4.Wait(this, 1);
                                case 7:
                                  return e.abrupt("return", n);
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.GreenEliminateSymbol = function (e, t, o, n) {
                    var i = this;
                    this.CleanAllSymbolSpine();
                    for (
                      var r = [],
                        a = this.m_slotReels.IsHardStop
                          ? TSQ_Define.HARD_STOP_SPEED
                          : 1,
                        s = function (n) {
                          var s = e[n].PosVec[0],
                            l = TSQ_Define.ConvertIndex2ColRow(s),
                            c = l.x,
                            u = l.y;
                          if (t[c].Col[u]) {
                            var m,
                              p,
                              h = i.m_slotReels.GetSymbol(c, u),
                              _ = NodePool.GetInstance().GetSymbolSpine(h, 2),
                              f = i.m_slotReels.GetBigSymbolPosition(c, u, 2);
                            (i.m_symbolSpine[c][u] = _),
                              r.push(_.PlayWin(i.node, f, a));
                            var d = o.findIndex(function (e) {
                                return e.Col === c && e.Row === u;
                              }),
                              C =
                                null == (m = o.splice(d, 1)) ||
                                null == (p = m[0])
                                  ? void 0
                                  : p.Spine;
                            NodePool.GetInstance().ReturnFeatureFrameSpine(C);
                          }
                        },
                        l = 0;
                      l < e.length;
                      l++
                    )
                      s(l);
                    for (var c = 0; c < t.length; c++)
                      for (var u = 0; u < t[c].Col.length; u++)
                        if (t[c].Col[u] && !n[c][u]) {
                          var m = this.m_slotReels.GetSymbol(c, u);
                          this.m_slotReels.GetSymbolNode(c, u).active = !1;
                          var p = NodePool.GetInstance().GetSymbolSpine(m),
                            h = this.m_slotReels.GetSymbolPosition(c, u);
                          (this.m_symbolSpine[c][u] = p),
                            r.push(p.PlayWin(this.node, h, a));
                        }
                    return (
                      r.length &&
                        (this.m_gameView.SlotReels.ShowDarkOrLightSymbol(!0),
                        node$1.Play(TSQ_Define.AudioClips.Eliminat_s)),
                      r
                    );
                  }),
                  (o.GreenBigGemToSmallGem = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o) {
                        var n,
                          i = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (!(t.length > 0)) {
                                    e.next = 5;
                                    break;
                                  }
                                  return (
                                    (n = this.m_slotReels.IsHardStop
                                      ? TSQ_Define.HARD_STOP_SPEED
                                      : 1),
                                    (e.next = 4),
                                    node$4.Wait(this, 1)
                                  );
                                case 4:
                                  t.forEach(function (e) {
                                    e.SmallGenPosVec.forEach(function (e) {
                                      var t = TSQ_Define.ConvertIndex2ColRow(e),
                                        r = t.x,
                                        a = t.y,
                                        s = i.m_slotReels.GetSymbol(r, a),
                                        l =
                                          NodePool.GetInstance().GetSymbolSpine(
                                            s
                                          ),
                                        c = i.m_slotReels.GetSymbolPosition(
                                          r,
                                          a
                                        );
                                      (i.m_symbolSpine[r][a] = l),
                                        o.push(l.PlayDetach(i.node, c, n));
                                    }),
                                      o.push(e.Spine.PlayDetach(n));
                                  });
                                case 5:
                                  return (e.next = 7), Promise.all(o);
                                case 7:
                                  this.m_gameView.SlotReels.ShowDarkOrLightSymbol(
                                    !1
                                  ),
                                    t.forEach(function (e) {
                                      NodePool.GetInstance().ReturnFeatureFrameSpine(
                                        e.Spine
                                      );
                                    });
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
                    return function (t, o) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.GreenPlateRecovery = function (e) {
                    for (var t = 0; t < e.length; t++)
                      for (var o = 0; o < e[t].Col.length; o++) {
                        if (!e[t].Col[o])
                          this.m_slotReels.GetSymbolNode(t, o).active = !0;
                      }
                    this.CleanAllSymbolSpine();
                  }),
                  (o.GetOrangeRandomFrameShowInfo = function () {
                    for (var e, t, o, n = [], i = 0; i < 10; i++) {
                      o = 8 - (e = Math.floor(2 * Math.random() + 3));
                      var r = (t = Math.floor(Math.random() * o * o)) % o,
                        a = (t - r) / o,
                        s = this.m_slotReels.GetBigSymbolPosition(a, r, e),
                        l = { Type: LIGHT_TYPE.ORANGE, Position: s, Size: e };
                      n.push(l);
                    }
                    return n;
                  }),
                  (o.PlayOrangeBreakAndSetSlotPlate = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var o, n, i, r, a, s, l, c, u, m;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    o = [],
                                      n = Array.from(
                                        { length: TSQ_Define.COL },
                                        function () {
                                          return Array.from({
                                            length: TSQ_Define.ROW,
                                          });
                                        }
                                      ),
                                      i = 0;
                                    i < t.PosVec.length;
                                    i++
                                  )
                                    (r = t.PosVec[i]),
                                      (a = TSQ_Define.ConvertIndex2ColRow(r)),
                                      (s = a.x),
                                      (l = a.y),
                                      (n[s][l] = !0),
                                      (this.m_slotReels.GetSymbolNode(
                                        s,
                                        l
                                      ).active = !1),
                                      (c = this.m_slotReels.GetSymbol(s, l)),
                                      (u =
                                        NodePool.GetInstance().GetSymbolSpine(
                                          c
                                        )),
                                      (m = this.m_slotReels.GetSymbolPosition(
                                        s,
                                        l
                                      )),
                                      (this.m_symbolSpine[s][l] = u),
                                      o.push(u.PlayBreak(this.node, m)),
                                      this.m_slotReels.SetPlateOneSymbol(
                                        s,
                                        l,
                                        t.Symbol
                                      );
                                  return (e.next = 5), Promise.all(o);
                                case 5:
                                  return (e.next = 7), node$4.Wait(this, 1);
                                case 7:
                                  return (
                                    this.CleanAllSymbolSpine(),
                                    e.abrupt("return", n)
                                  );
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
                  (o.OrangeEliminateSymbol = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(
                        t,
                        o,
                        n,
                        i,
                        r,
                        a,
                        s
                      ) {
                        var l, c, u, m, p, h, _, f;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    l = [],
                                      c = this.m_slotReels.IsHardStop
                                        ? TSQ_Define.HARD_STOP_SPEED
                                        : 1,
                                      t[o].Col[n] &&
                                        ((u =
                                          NodePool.GetInstance().GetSymbolSpine(
                                            i.Symbol,
                                            i.Size
                                          )),
                                        (this.m_symbolSpine[o][n] = u),
                                        l.push(u.PlayWin(this.node, r, c)),
                                        NodePool.GetInstance().ReturnFeatureFrameSpine(
                                          a
                                        )),
                                      m = 0;
                                    m < t.length;
                                    m++
                                  )
                                    for (p = 0; p < t[m].Col.length; p++)
                                      t[m].Col[p] &&
                                        !s[m][p] &&
                                        ((h = this.m_slotReels.GetSymbol(m, p)),
                                        (this.m_slotReels.GetSymbolNode(
                                          m,
                                          p
                                        ).active = !1),
                                        (_ =
                                          NodePool.GetInstance().GetSymbolSpine(
                                            h
                                          )),
                                        (f = this.m_slotReels.GetSymbolPosition(
                                          m,
                                          p
                                        )),
                                        (this.m_symbolSpine[m][p] = _),
                                        l.push(_.PlayWin(this.node, f, c)));
                                  return (
                                    this.m_gameView.SlotReels.ShowDarkOrLightSymbol(
                                      !0
                                    ),
                                    l.length &&
                                      node$1.Play(
                                        TSQ_Define.AudioClips.Eliminat_s
                                      ),
                                    (e.next = 8),
                                    Promise.all(l)
                                  );
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
                    return function (t, o, n, i, r, a, s) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.PlayBlueStartAndSetSlotPlate = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var o,
                          n,
                          i,
                          r,
                          a = this;
                        return _regeneratorRuntime().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                for (
                                  o = [],
                                    n = [],
                                    i = function (e) {
                                      var i = TSQ_Define.ConvertIndex2ColRow(
                                          t[e]
                                        ),
                                        r = i.x,
                                        s = i.y,
                                        l = 0.5 + 0.04 * r - 0.01 * s,
                                        c = a.m_slotReels.GetSymbol(r, s),
                                        u = a.m_slotReels.GetSymbolNode(r, s),
                                        m =
                                          NodePool.GetInstance().GetSymbolSpine(
                                            c
                                          );
                                      n.push(m);
                                      var p = a.m_slotReels.GetSymbolPosition(
                                        r,
                                        s
                                      );
                                      (a.m_symbolSpine[r][s] = m),
                                        o.push(
                                          node$4.Wait(a, l).then(
                                            _asyncToGenerator(
                                              _regeneratorRuntime().mark(
                                                function e() {
                                                  return _regeneratorRuntime().wrap(
                                                    function (e) {
                                                      for (;;)
                                                        switch (
                                                          (e.prev = e.next)
                                                        ) {
                                                          case 0:
                                                            return (
                                                              (u.active = !1),
                                                              (e.next = 3),
                                                              m.PlayBlueStart(
                                                                a.node,
                                                                p,
                                                                c
                                                              )
                                                            );
                                                          case 3:
                                                            a.m_slotReels.SetPlateOneSymbol(
                                                              r,
                                                              s,
                                                              TSQ_Define.Symbol
                                                                .WILD
                                                            );
                                                          case 4:
                                                          case "end":
                                                            return e.stop();
                                                        }
                                                    },
                                                    e
                                                  );
                                                }
                                              )
                                            )
                                          )
                                        );
                                    },
                                    r = 0;
                                  r < t.length;
                                  r++
                                )
                                  i(r);
                                return (e.next = 6), Promise.all(o);
                              case 6:
                                return e.abrupt("return", n);
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.PlayBlueEnd = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var o;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (o = []),
                                    t.forEach(function (e) {
                                      return o.push(e.PlayBlueEnd());
                                    }),
                                    (e.next = 4),
                                    Promise.all(o)
                                  );
                                case 4:
                                  return (e.next = 6), node$4.Wait(this, 1);
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.ShowWin = function (e) {
                    var t = this;
                    if (e) {
                      this.m_nodeWin.active = !0;
                      var o = this.m_nodeWin.getComponent(UIOpacity);
                      Tween.stopAllByTarget(o),
                        (o.opacity = 255),
                        (this.m_nodeWinLabel.string =
                          node.FormatNumberThousands(
                            e,
                            node.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                          )),
                        tween(o)
                          .delay(1)
                          .to(0.5, { opacity: 0 })
                          .call(function () {
                            return (t.m_nodeWin.active = !1);
                          })
                          .start();
                    }
                  }),
                  (o.CleanSymbolSpine = function (e, t) {
                    if (this.m_symbolSpine[e][t]) {
                      var o = this.m_symbolSpine[e][t];
                      NodePool.GetInstance().ReturnSymbolSpine(o),
                        (this.m_symbolSpine[e][t] = null);
                    }
                  }),
                  (o.CleanAllSymbolSpine = function () {
                    for (var e = 0; e < TSQ_Define.COL; e++)
                      for (var t = 0; t < TSQ_Define.ROW; t++)
                        this.CleanSymbolSpine(e, t);
                  }),
                  (o.ShowRandomSymbolLight = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, o, n, i;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (t = 15),
                                    (o = [
                                      0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.1, 0.1,
                                      0.1, 0.1, 0.1, 0.1, 0.1, 0.3, 0.5,
                                    ]),
                                    (n = Math.floor(
                                      Math.random() * TSQ_Define.Symbol.WILD
                                    )),
                                    (i = 0);
                                case 4:
                                  if (!(i < t)) {
                                    e.next = 13;
                                    break;
                                  }
                                  return (
                                    this.m_gameView.SlotReels.SetSymbolLightOtherDark(
                                      n
                                    ),
                                    (e.next = 8),
                                    node$4.Wait(this, o[i])
                                  );
                                case 8:
                                  (n += 1) >= TSQ_Define.Symbol.WILD &&
                                    (n = TSQ_Define.Symbol.GREEN);
                                case 10:
                                  i++, (e.next = 4);
                                  break;
                                case 13:
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
                  _createClass(t, [
                    {
                      key: "GameIntro",
                      get: function () {
                        return this.m_gameIntro;
                      },
                    },
                    {
                      key: "AltarSpine",
                      get: function () {
                        return this.m_altarSpine;
                      },
                    },
                    {
                      key: "BigWin",
                      get: function () {
                        return this.m_bigWin;
                      },
                    },
                    {
                      key: "ManualComponent",
                      get: function () {
                        return this.m_manualComponent;
                      },
                    },
                    {
                      key: "CollectLightPointWaitPromises",
                      get: function () {
                        return this.m_collectLightPointWaitPromises;
                      },
                    },
                  ]),
                  t
                );
              })(Component)),
              (_descriptor$8 = _applyDecoratedDescriptor(
                _class2$8.prototype,
                "m_gameIntro",
                [_dec$8],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor2$6 = _applyDecoratedDescriptor(
                _class2$8.prototype,
                "m_shakeComp",
                [_dec2$6],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor3$3 = _applyDecoratedDescriptor(
                _class2$8.prototype,
                "m_symbolBackPrefab",
                [_dec3$3],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor4$3 = _applyDecoratedDescriptor(
                _class2$8.prototype,
                "m_symbolFrontPrefab",
                [_dec4$3],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor5$2 = _applyDecoratedDescriptor(
                _class2$8.prototype,
                "m_winSymbolBackPrefab",
                [_dec5$3],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor6$2 = _applyDecoratedDescriptor(
                _class2$8.prototype,
                "m_winSymbolFrontPrefab",
                [_dec6$2],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor7$2 = _applyDecoratedDescriptor(
                _class2$8.prototype,
                "m_symbolEftPrefabs",
                [_dec7$2],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor8$1 = _applyDecoratedDescriptor(
                _class2$8.prototype,
                "m_collectObjectPrefabs",
                [_dec8$2],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor9$1 = _applyDecoratedDescriptor(
                _class2$8.prototype,
                "m_FeatureFramePrefabs",
                [_dec9$1],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor10 = _applyDecoratedDescriptor(
                _class2$8.prototype,
                "m_reelBgSymbolFxNode",
                [_dec10],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor11 = _applyDecoratedDescriptor(
                _class2$8.prototype,
                "m_altarSpine",
                [_dec11],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor12 = _applyDecoratedDescriptor(
                _class2$8.prototype,
                "m_featurePosNode",
                [_dec12],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor13 = _applyDecoratedDescriptor(
                _class2$8.prototype,
                "m_featureSpine",
                [_dec13],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor14 = _applyDecoratedDescriptor(
                _class2$8.prototype,
                "m_nodeWin",
                [_dec14],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor15 = _applyDecoratedDescriptor(
                _class2$8.prototype,
                "m_nodeWinLabel",
                [_dec15],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: null,
                }
              )),
              (_descriptor16 = _applyDecoratedDescriptor(
                _class2$8.prototype,
                "m_complimentSpine",
                [_dec16],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor17 = _applyDecoratedDescriptor(
                _class2$8.prototype,
                "m_fgDeclareSpine",
                [_dec17],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor18 = _applyDecoratedDescriptor(
                _class2$8.prototype,
                "m_fgDeclareLevelUpSpine",
                [_dec18],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor19 = _applyDecoratedDescriptor(
                _class2$8.prototype,
                "m_bigWin",
                [_dec19],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor20 = _applyDecoratedDescriptor(
                _class2$8.prototype,
                "m_manualComponent",
                [_dec20],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_class$b = _class2$8))
            ) || _class$b),
          ShakeName = {
            FEATURE_01: "Fearure_01",
            FEATURE_02A: "Fearure_02a",
            FEATURE_02B: "Fearure_02b",
            FEATURE_03: "Fearure_03",
            FEATURE_04: "Fearure_04",
          };
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "ea9c5Z3aypIz7Q2KebK+NN/",
            "FeaturesAck",
            void 0
          );
        var FeaturesAck = function () {};
        (FeaturesAck.MG = {
          RoundQueue: [
            {
              ComboStageData: [
                {
                  ComboStageSymbol: [
                    { Col: [1, 2, 3, 4, 5, 6, 7, 0] },
                    { Col: [2, 3, 4, 5, 6, 7, 0, 1] },
                    { Col: [1, 2, 3, 4, 5, 6, 7, 0] },
                    { Col: [6, 7, 0, 1, 2, 3, 4, 5] },
                    { Col: [6, 7, 0, 1, 2, 3, 4, 5] },
                    { Col: [2, 3, 4, 5, 6, 7, 0, 1] },
                    { Col: [3, 4, 5, 6, 7, 0, 1, 2] },
                    { Col: [7, 0, 1, 2, 3, 4, 5, 6] },
                  ],
                  AwardDataVec: [
                    {
                      PosVec: [5, 13, 12, 21, 22, 6],
                      Symbol: 6,
                      Count: 6,
                      OddCount: 6,
                      Win: 4.5,
                    },
                    {
                      PosVec: [6, 14, 13, 22, 23, 7],
                      Count: 6,
                      OddCount: 6,
                      Win: 0.45,
                    },
                  ],
                  FillSymbols: [
                    { Col: [5, 5, 5] },
                    { Col: [5, 4, 5] },
                    { Col: [0, 4, 4] },
                    { Col: [] },
                    { Col: [] },
                    { Col: [] },
                    { Col: [] },
                    { Col: [] },
                  ],
                  Eliminate: [
                    { Col: [0, 0, 0, 0, 0, 1, 1, 1] },
                    { Col: [0, 0, 0, 0, 1, 1, 1, 0] },
                    { Col: [0, 0, 0, 0, 0, 1, 1, 1] },
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                  ],
                  LightGet: [!1, !1, !1, !0, !0, !1],
                  LightShow: [!1, !1, !1, !0, !0, !1],
                  ComboStageWin: 4.95,
                  NeedEliminate: !0,
                  EliminateCount: 9,
                },
                {
                  ComboStageSymbol: [
                    { Col: [1, 2, 3, 4, 5, 5, 5, 5] },
                    { Col: [2, 3, 4, 5, 1, 5, 4, 5] },
                    { Col: [1, 2, 3, 4, 5, 0, 4, 4] },
                    { Col: [6, 7, 0, 1, 2, 3, 4, 5] },
                    { Col: [6, 7, 0, 1, 2, 3, 4, 5] },
                    { Col: [2, 3, 4, 5, 6, 7, 0, 1] },
                    { Col: [3, 4, 5, 6, 7, 0, 1, 2] },
                    { Col: [7, 0, 1, 2, 3, 4, 5, 6] },
                  ],
                  AwardDataVec: [
                    {
                      PosVec: [4, 5, 13, 6, 7, 15],
                      Symbol: 5,
                      Count: 6,
                      OddCount: 6,
                      Win: 2.25,
                    },
                    {
                      PosVec: [14, 22, 30, 38, 23],
                      Symbol: 4,
                      Count: 5,
                      OddCount: 5,
                      Win: 0.9,
                    },
                  ],
                  FillSymbols: [
                    { Col: [4, 0, 0, 0] },
                    { Col: [1, 0, 5] },
                    { Col: [1, 5] },
                    { Col: [0] },
                    { Col: [3] },
                    { Col: [] },
                    { Col: [] },
                    { Col: [] },
                  ],
                  Eliminate: [
                    { Col: [0, 0, 0, 0, 1, 1, 1, 1] },
                    { Col: [0, 0, 0, 0, 0, 1, 1, 1] },
                    { Col: [0, 0, 0, 0, 0, 0, 1, 1] },
                    { Col: [0, 0, 0, 0, 0, 0, 1, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 1, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                  ],
                  LightGet: [!1, !1, !1, !1, !1, !1],
                  LightShow: [!1, !1, !1, !0, !0, !1],
                  ComboStageWin: 3.15,
                  NeedEliminate: !0,
                  EliminateCount: 11,
                },
                {
                  ComboStageSymbol: [
                    { Col: [1, 2, 3, 4, 4, 0, 0, 0] },
                    { Col: [2, 3, 4, 5, 1, 1, 0, 5] },
                    { Col: [1, 2, 3, 4, 5, 0, 1, 5] },
                    { Col: [6, 7, 0, 1, 2, 3, 5, 0] },
                    { Col: [6, 7, 0, 1, 2, 3, 5, 3] },
                    { Col: [2, 3, 4, 5, 6, 7, 0, 1] },
                    { Col: [3, 4, 5, 6, 7, 0, 1, 2] },
                    { Col: [7, 0, 1, 2, 3, 4, 5, 6] },
                  ],
                  AwardDataVec: [
                    {
                      PosVec: [37, 45, 44, 52, 51, 46, 38],
                      Symbol: 6,
                      Count: 7,
                      OddCount: 7,
                      Win: 7.5,
                    },
                  ],
                  FillSymbols: [
                    { Col: [] },
                    { Col: [] },
                    { Col: [] },
                    { Col: [] },
                    { Col: [0, 0] },
                    { Col: [5, 5, 6] },
                    { Col: [3, 2] },
                    { Col: [] },
                  ],
                  Eliminate: [
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 1, 1, 0] },
                    { Col: [0, 0, 0, 0, 1, 1, 1, 0] },
                    { Col: [0, 0, 0, 1, 1, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                  ],
                  LightGet: [!1, !1, !1, !1, !1, !1],
                  LightShow: [!1, !1, !1, !1, !0, !1],
                  ComboStageWin: 7.5,
                  NeedEliminate: !0,
                  EliminateCount: 7,
                  LightInfo: {
                    ThreeInfo: [
                      { PosVec: [37, 38, 45, 46], Symbol: 6, Size: 2 },
                      { PosVec: [1, 2, 9, 10], Symbol: 6, Size: 2 },
                    ],
                    FiveInfo: [],
                    LightSymbol: [
                      { Col: [1, 6, 6, 4, 4, 0, 0, 0] },
                      { Col: [2, 6, 6, 5, 1, 1, 0, 5] },
                      { Col: [1, 2, 3, 4, 5, 0, 1, 5] },
                      { Col: [6, 7, 0, 1, 2, 3, 5, 0] },
                      { Col: [6, 7, 0, 1, 2, 6, 6, 3] },
                      { Col: [2, 3, 4, 5, 6, 6, 6, 1] },
                      { Col: [3, 4, 5, 6, 7, 0, 1, 2] },
                      { Col: [7, 0, 1, 2, 3, 4, 5, 6] },
                    ],
                    LightType: 3,
                  },
                },
                {
                  ComboStageSymbol: [
                    { Col: [1, 6, 6, 4, 4, 0, 0, 0] },
                    { Col: [2, 6, 6, 5, 1, 1, 0, 5] },
                    { Col: [1, 2, 3, 4, 5, 0, 1, 5] },
                    { Col: [6, 7, 0, 1, 2, 3, 5, 0] },
                    { Col: [6, 7, 0, 1, 2, 3, 0, 0] },
                    { Col: [2, 3, 4, 5, 1, 5, 5, 6] },
                    { Col: [3, 4, 5, 0, 1, 2, 3, 2] },
                    { Col: [7, 0, 1, 2, 3, 4, 5, 6] },
                  ],
                  AwardDataVec: [
                    {
                      PosVec: [
                        24, 32, 40, 48, 56, 57, 49, 41, 33, 25, 26, 34, 42, 50,
                        58, 59, 51, 43, 35, 27, 28, 36, 44, 52, 60,
                      ],
                      Count: 25,
                      OddCount: 25,
                      Win: 150,
                    },
                  ],
                  FillSymbols: [
                    { Col: [] },
                    { Col: [] },
                    { Col: [] },
                    { Col: [1, 1, 0, 3, 3] },
                    { Col: [6, 6, 2, 6, 6] },
                    { Col: [2, 4, 3, 3, 2] },
                    { Col: [4, 3, 3, 4, 5] },
                    { Col: [3, 3, 3, 4, 4] },
                  ],
                  Eliminate: [
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    { Col: [1, 1, 1, 1, 1, 0, 0, 0] },
                    { Col: [1, 1, 1, 1, 1, 0, 0, 0] },
                    { Col: [1, 1, 1, 1, 1, 0, 0, 0] },
                    { Col: [1, 1, 1, 1, 1, 0, 0, 0] },
                    { Col: [1, 1, 1, 1, 1, 0, 0, 0] },
                  ],
                  LightGet: [!1, !0, !1, !1, !1, !1],
                  LightShow: [!1, !0, !1, !1, !1, !1],
                  ComboStageWin: 150,
                  NeedEliminate: !0,
                  EliminateCount: 25,
                  LightInfo: {
                    ThreeInfo: [],
                    FiveInfo: [],
                    LightSymbol: [
                      { Col: [1, 6, 6, 4, 4, 0, 0, 0] },
                      { Col: [2, 6, 6, 5, 1, 1, 0, 5] },
                      { Col: [1, 2, 3, 4, 5, 0, 1, 5] },
                      { Col: [0, 0, 0, 0, 0, 3, 5, 0] },
                      { Col: [0, 0, 0, 0, 0, 3, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 5, 5, 6] },
                      { Col: [0, 0, 0, 0, 0, 2, 3, 2] },
                      { Col: [0, 0, 0, 0, 0, 4, 5, 6] },
                    ],
                    LightType: 4,
                    FourInfo: {
                      PosVec: [
                        24, 25, 26, 27, 28, 32, 33, 34, 35, 36, 40, 41, 42, 43,
                        44, 48, 49, 50, 51, 52, 56, 57, 58, 59, 60,
                      ],
                      Size: 5,
                    },
                  },
                },
                {
                  ComboStageSymbol: [
                    { Col: [1, 6, 6, 4, 4, 0, 0, 0] },
                    { Col: [2, 6, 6, 5, 1, 1, 0, 5] },
                    { Col: [1, 2, 3, 4, 5, 0, 1, 5] },
                    { Col: [3, 5, 0, 1, 1, 0, 3, 3] },
                    { Col: [3, 0, 0, 6, 6, 2, 6, 6] },
                    { Col: [5, 5, 6, 2, 4, 3, 3, 2] },
                    { Col: [2, 3, 2, 4, 3, 3, 4, 5] },
                    { Col: [4, 5, 6, 3, 3, 3, 4, 4] },
                  ],
                  AwardDataVec: [
                    {
                      PosVec: [45, 53, 52, 60, 59, 61, 46],
                      Symbol: 3,
                      Count: 7,
                      OddCount: 7,
                      Win: 1.2,
                    },
                  ],
                  FillSymbols: [
                    { Col: [] },
                    { Col: [] },
                    { Col: [] },
                    { Col: [] },
                    { Col: [] },
                    { Col: [6, 3] },
                    { Col: [6, 3] },
                    { Col: [3, 2, 0] },
                  ],
                  Eliminate: [
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 1, 1, 0] },
                    { Col: [0, 0, 0, 0, 1, 1, 0, 0] },
                    { Col: [0, 0, 0, 1, 1, 1, 0, 0] },
                  ],
                  LightGet: [!1, !1, !1, !1, !1, !1],
                  LightShow: [!1, !0, !1, !1, !1, !1],
                  ComboStageWin: 1.2,
                  NeedEliminate: !0,
                  EliminateCount: 7,
                },
                {
                  ComboStageSymbol: [
                    { Col: [1, 6, 6, 4, 4, 0, 0, 0] },
                    { Col: [2, 6, 6, 5, 1, 1, 0, 5] },
                    { Col: [1, 2, 3, 4, 5, 0, 1, 5] },
                    { Col: [3, 5, 0, 1, 1, 0, 3, 3] },
                    { Col: [3, 0, 0, 6, 6, 2, 6, 6] },
                    { Col: [5, 5, 6, 2, 4, 2, 6, 3] },
                    { Col: [2, 3, 2, 4, 4, 5, 6, 3] },
                    { Col: [4, 5, 6, 4, 4, 3, 2, 0] },
                  ],
                  AwardDataVec: [
                    {
                      PosVec: [44, 52, 51, 59, 60],
                      Symbol: 4,
                      Count: 5,
                      OddCount: 5,
                      Win: 0.9,
                    },
                  ],
                  FillSymbols: [
                    { Col: [] },
                    { Col: [] },
                    { Col: [] },
                    { Col: [] },
                    { Col: [] },
                    { Col: [3] },
                    { Col: [1, 1] },
                    { Col: [6, 6] },
                  ],
                  Eliminate: [
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 1, 0, 0, 0] },
                    { Col: [0, 0, 0, 1, 1, 0, 0, 0] },
                    { Col: [0, 0, 0, 1, 1, 0, 0, 0] },
                  ],
                  LightGet: [!1, !1, !1, !1, !1, !1],
                  LightShow: [!1, !0, !1, !1, !1, !1],
                  ComboStageWin: 0.9,
                  NeedEliminate: !0,
                  EliminateCount: 5,
                },
                {
                  ComboStageSymbol: [
                    { Col: [1, 6, 6, 4, 4, 0, 0, 0] },
                    { Col: [2, 6, 6, 5, 1, 1, 0, 5] },
                    { Col: [1, 2, 3, 4, 5, 0, 1, 5] },
                    { Col: [3, 5, 0, 1, 1, 0, 3, 3] },
                    { Col: [3, 0, 0, 6, 6, 2, 6, 6] },
                    { Col: [5, 5, 6, 2, 2, 6, 3, 3] },
                    { Col: [2, 3, 2, 5, 6, 3, 1, 1] },
                    { Col: [4, 5, 6, 3, 2, 0, 6, 6] },
                  ],
                  AwardDataVec: [],
                  FillSymbols: [
                    { Col: [6, 6, 6, 6] },
                    { Col: [1, 6, 0, 0] },
                    { Col: [6, 6, 4, 3] },
                    { Col: [0, 0, 3, 3] },
                    { Col: [3, 6, 6] },
                    { Col: [1, 0] },
                    { Col: [0, 3, 1, 3] },
                    { Col: [1, 1] },
                  ],
                  Eliminate: [
                    { Col: [1, 0, 0, 0, 0, 1, 1, 1] },
                    { Col: [1, 0, 0, 0, 1, 1, 1, 0] },
                    { Col: [1, 1, 0, 0, 0, 1, 1, 0] },
                    { Col: [0, 0, 1, 1, 1, 1, 0, 0] },
                    { Col: [0, 1, 1, 0, 0, 1, 0, 0] },
                    { Col: [0, 0, 0, 1, 1, 0, 0, 0] },
                    { Col: [1, 0, 1, 0, 0, 0, 1, 1] },
                    { Col: [0, 0, 0, 0, 1, 1, 0, 0] },
                  ],
                  LightGet: [!1, !1, !1, !1, !1, !1],
                  LightShow: [!1, !1, !1, !1, !1, !1],
                  NeedEliminate: !0,
                  EliminateCount: 27,
                  LightInfo: {
                    ThreeInfo: [],
                    FiveInfo: [],
                    LightSymbol: [
                      { Col: [8, 6, 6, 4, 4, 8, 8, 8] },
                      { Col: [8, 6, 6, 5, 8, 8, 8, 5] },
                      { Col: [8, 8, 3, 4, 5, 8, 8, 5] },
                      { Col: [3, 5, 8, 8, 8, 8, 3, 3] },
                      { Col: [3, 8, 8, 6, 6, 8, 6, 6] },
                      { Col: [5, 5, 6, 8, 8, 6, 3, 3] },
                      { Col: [8, 3, 8, 5, 6, 3, 8, 8] },
                      { Col: [4, 5, 6, 3, 8, 8, 6, 6] },
                    ],
                    LightType: 1,
                  },
                },
                {
                  ComboStageSymbol: [
                    { Col: [6, 6, 4, 4, 6, 6, 6, 6] },
                    { Col: [6, 6, 5, 5, 1, 6, 0, 0] },
                    { Col: [3, 4, 5, 5, 6, 6, 4, 3] },
                    { Col: [3, 5, 3, 3, 0, 0, 3, 3] },
                    { Col: [3, 6, 6, 6, 6, 3, 6, 6] },
                    { Col: [5, 5, 6, 6, 3, 3, 1, 0] },
                    { Col: [3, 5, 6, 3, 0, 3, 1, 3] },
                    { Col: [4, 5, 6, 3, 6, 6, 1, 1] },
                  ],
                  AwardDataVec: [
                    {
                      PosVec: [4, 5, 13, 21, 20, 6, 7],
                      Symbol: 6,
                      Count: 7,
                      OddCount: 7,
                      Win: 7.5,
                    },
                    {
                      PosVec: [33, 34, 42, 50, 58, 43, 35, 36],
                      Symbol: 6,
                      Count: 8,
                      OddCount: 8,
                      Win: 15,
                    },
                  ],
                  FillSymbols: [
                    { Col: [5, 5, 1, 1] },
                    { Col: [1] },
                    { Col: [0, 0] },
                    { Col: [] },
                    { Col: [5, 5, 5, 5] },
                    { Col: [3, 3] },
                    { Col: [5] },
                    { Col: [3] },
                  ],
                  Eliminate: [
                    { Col: [0, 0, 0, 0, 1, 1, 1, 1] },
                    { Col: [0, 0, 0, 0, 0, 1, 0, 0] },
                    { Col: [0, 0, 0, 0, 1, 1, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 1, 1, 1, 1, 0, 0, 0] },
                    { Col: [0, 0, 1, 1, 0, 0, 0, 0] },
                    { Col: [0, 0, 1, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 1, 0, 0, 0, 0, 0] },
                  ],
                  LightGet: [!1, !1, !1, !1, !1, !1],
                  LightShow: [!1, !1, !1, !1, !1, !1],
                  ComboStageWin: 22.5,
                  NeedEliminate: !0,
                  EliminateCount: 15,
                },
                {
                  ComboStageSymbol: [
                    { Col: [6, 6, 4, 4, 5, 5, 1, 1] },
                    { Col: [6, 6, 5, 5, 1, 0, 0, 1] },
                    { Col: [3, 4, 5, 5, 4, 3, 0, 0] },
                    { Col: [3, 5, 3, 3, 0, 0, 3, 3] },
                    { Col: [3, 3, 6, 6, 5, 5, 5, 5] },
                    { Col: [5, 5, 3, 3, 1, 0, 3, 3] },
                    { Col: [3, 5, 3, 0, 3, 1, 3, 5] },
                    { Col: [4, 5, 3, 6, 6, 1, 1, 3] },
                  ],
                  AwardDataVec: [],
                  FillSymbols: [
                    { Col: [] },
                    { Col: [] },
                    { Col: [] },
                    { Col: [] },
                    { Col: [] },
                    { Col: [] },
                    { Col: [] },
                    { Col: [] },
                  ],
                  Eliminate: [
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                  ],
                  LightGet: [!1, !1, !1, !1, !1, !1],
                  LightShow: [!1, !1, !1, !1, !1, !1],
                },
              ],
              LightPos: [-1, 32, -1, 5, 6, -1],
              RoundWin: 190.2,
              Mult: 1,
              TotalEliminateCount: 106,
              LevelCount: 114,
              AwardTypeFlag: 1,
            },
          ],
          TotalWin: 190.2,
          RTP: 0.9653,
        }),
          (FeaturesAck.FG = {
            RoundQueue: [
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [3, 2, 2, 6, 1, 2, 4, 5] },
                      { Col: [3, 6, 1, 3, 1, 6, 1, 3] },
                      { Col: [0, 2, 2, 0, 1, 1, 2, 2] },
                      { Col: [1, 3, 2, 1, 4, 1, 3, 6] },
                      { Col: [1, 5, 2, 1, 4, 0, 5, 1] },
                      { Col: [5, 0, 3, 4, 0, 1, 2, 0] },
                      { Col: [1, 1, 3, 3, 1, 2, 2, 1] },
                      { Col: [3, 5, 1, 1, 0, 6, 2, 1] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [4, 12, 20, 21, 29],
                        Symbol: 1,
                        Count: 5,
                        OddCount: 5,
                        Win: 0.45,
                      },
                    ],
                    FillSymbols: [
                      { Col: [0] },
                      { Col: [4] },
                      { Col: [1, 1] },
                      { Col: [6] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 1, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 1, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 1, 1, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 1, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !0, !1, !1, !1, !1],
                    LightShow: [!1, !0, !1, !1, !1, !1],
                    ComboStageWin: 0.45,
                    NeedEliminate: !0,
                    EliminateCount: 5,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [3, 2, 2, 6, 2, 4, 5, 0] },
                      { Col: [3, 6, 1, 3, 6, 1, 3, 4] },
                      { Col: [0, 2, 2, 0, 2, 2, 1, 1] },
                      { Col: [1, 3, 2, 1, 4, 3, 6, 6] },
                      { Col: [1, 5, 2, 1, 4, 0, 5, 1] },
                      { Col: [5, 0, 3, 4, 0, 1, 2, 0] },
                      { Col: [1, 1, 3, 3, 1, 2, 2, 1] },
                      { Col: [3, 5, 1, 1, 0, 6, 2, 1] },
                    ],
                    AwardDataVec: [],
                    FillSymbols: [
                      { Col: [3, 5, 0, 0] },
                      { Col: [5, 4] },
                      { Col: [6, 6, 2, 2, 2, 0, 2, 2] },
                      { Col: [2, 2, 2] },
                      { Col: [6, 6, 1, 1, 1] },
                      { Col: [6, 3, 2, 1, 2] },
                      { Col: [2, 2, 2, 3, 3, 5] },
                      { Col: [1, 1, 1, 6, 6] },
                    ],
                    Eliminate: [
                      { Col: [0, 1, 1, 0, 1, 0, 0, 1] },
                      { Col: [0, 0, 1, 0, 0, 1, 0, 0] },
                      { Col: [1, 1, 1, 1, 1, 1, 1, 1] },
                      { Col: [1, 0, 1, 1, 0, 0, 0, 0] },
                      { Col: [1, 0, 1, 1, 0, 1, 0, 1] },
                      { Col: [0, 1, 0, 0, 1, 1, 1, 1] },
                      { Col: [1, 1, 0, 0, 1, 1, 1, 1] },
                      { Col: [0, 0, 1, 1, 1, 0, 1, 1] },
                    ],
                    LightGet: [!1, !1, !0, !0, !0, !1],
                    LightShow: [!1, !1, !0, !0, !0, !1],
                    NeedEliminate: !0,
                    EliminateCount: 38,
                    LightInfo: {
                      ThreeInfo: [],
                      FiveInfo: [],
                      LightSymbol: [
                        { Col: [3, 8, 8, 6, 8, 4, 5, 8] },
                        { Col: [3, 6, 8, 3, 6, 8, 3, 4] },
                        { Col: [8, 8, 8, 8, 8, 8, 8, 8] },
                        { Col: [8, 3, 8, 8, 4, 3, 6, 6] },
                        { Col: [8, 5, 8, 8, 4, 8, 5, 8] },
                        { Col: [5, 8, 3, 4, 8, 8, 8, 8] },
                        { Col: [8, 8, 3, 3, 8, 8, 8, 8] },
                        { Col: [3, 5, 8, 8, 8, 6, 8, 8] },
                      ],
                      LightType: 1,
                      TwoInfo: 0,
                    },
                    ComboStageWin: 0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [3, 6, 4, 5, 3, 5, 0, 0] },
                      { Col: [3, 6, 3, 6, 3, 4, 5, 4] },
                      { Col: [6, 6, 2, 2, 2, 0, 2, 2] },
                      { Col: [3, 4, 3, 6, 6, 2, 2, 2] },
                      { Col: [5, 4, 5, 6, 6, 1, 1, 1] },
                      { Col: [5, 3, 4, 6, 3, 2, 1, 2] },
                      { Col: [3, 3, 2, 2, 2, 3, 3, 5] },
                      { Col: [3, 5, 6, 1, 1, 1, 6, 6] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [22, 30, 29, 31, 23],
                        Symbol: 2,
                        Count: 5,
                        OddCount: 5,
                        Win: 0.6,
                      },
                      {
                        PosVec: [27, 35, 43, 36, 28],
                        Symbol: 6,
                        Count: 5,
                        OddCount: 5,
                        Win: 1.5,
                      },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [2, 4] },
                      { Col: [5, 4, 4, 0, 0] },
                      { Col: [4, 4] },
                      { Col: [1] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 1, 1] },
                      { Col: [0, 0, 0, 1, 1, 1, 1, 1] },
                      { Col: [0, 0, 0, 1, 1, 0, 0, 0] },
                      { Col: [0, 0, 0, 1, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !0, !0, !0, !1],
                    ComboStageWin: 2.1,
                    NeedEliminate: !0,
                    EliminateCount: 10,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [3, 6, 4, 5, 3, 5, 0, 0] },
                      { Col: [3, 6, 3, 6, 3, 4, 5, 4] },
                      { Col: [6, 6, 2, 2, 2, 0, 2, 4] },
                      { Col: [3, 4, 3, 5, 4, 4, 0, 0] },
                      { Col: [5, 4, 5, 1, 1, 1, 4, 4] },
                      { Col: [5, 3, 4, 3, 2, 1, 2, 1] },
                      { Col: [3, 3, 2, 2, 2, 3, 3, 5] },
                      { Col: [3, 5, 6, 1, 1, 1, 6, 6] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [0, 8, 16, 24, 17, 9, 1, 10, 11, 12, 4],
                        Symbol: 3,
                        Count: 11,
                        OddCount: 11,
                        Win: 4.8,
                      },
                      {
                        PosVec: [1, 9, 17, 16, 25, 33, 2],
                        Symbol: 4,
                        Count: 7,
                        OddCount: 7,
                        Win: 1.8,
                      },
                      {
                        PosVec: [9, 1, 17, 16, 18, 19, 11, 20],
                        Symbol: 2,
                        Count: 8,
                        OddCount: 8,
                        Win: 1.8,
                      },
                      {
                        PosVec: [44, 52, 51, 50, 58],
                        Symbol: 2,
                        Count: 5,
                        OddCount: 5,
                        Win: 0.6,
                      },
                      {
                        PosVec: [58, 59, 60, 61, 62, 63],
                        Symbol: 1,
                        Count: 6,
                        OddCount: 6,
                        Win: 0.6,
                      },
                    ],
                    FillSymbols: [
                      { Col: [1, 2, 6, 6] },
                      { Col: [0, 4, 1, 1, 4] },
                      { Col: [3, 3, 6, 5, 6] },
                      { Col: [1, 2] },
                      { Col: [1] },
                      { Col: [4] },
                      { Col: [4, 6, 2] },
                      { Col: [0, 0, 5, 2, 2, 2] },
                    ],
                    Eliminate: [
                      { Col: [1, 1, 1, 0, 1, 0, 0, 0] },
                      { Col: [1, 1, 1, 1, 1, 0, 0, 0] },
                      { Col: [1, 1, 1, 1, 1, 0, 0, 0] },
                      { Col: [1, 1, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 1, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 1, 0, 0, 0] },
                      { Col: [0, 0, 1, 1, 1, 0, 0, 0] },
                      { Col: [0, 0, 1, 1, 1, 1, 1, 1] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !0, !0, !1],
                    ComboStageWin: 9.6,
                    NeedEliminate: !0,
                    EliminateCount: 27,
                    LightInfo: {
                      ThreeInfo: [],
                      FiveInfo: [],
                      LightSymbol: [
                        { Col: [3, 7, 4, 5, 3, 5, 0, 0] },
                        { Col: [3, 7, 3, 7, 3, 4, 5, 4] },
                        { Col: [7, 7, 2, 2, 2, 0, 2, 4] },
                        { Col: [3, 4, 3, 5, 4, 4, 0, 0] },
                        { Col: [5, 4, 5, 1, 1, 1, 4, 4] },
                        { Col: [5, 3, 4, 3, 2, 1, 2, 1] },
                        { Col: [3, 3, 2, 2, 2, 3, 3, 5] },
                        { Col: [3, 5, 7, 1, 1, 1, 7, 7] },
                      ],
                      LightType: 2,
                      TwoInfo: 6,
                    },
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [5, 5, 0, 0, 1, 2, 6, 6] },
                      { Col: [4, 5, 4, 0, 4, 1, 1, 4] },
                      { Col: [0, 2, 4, 3, 3, 6, 5, 6] },
                      { Col: [3, 5, 4, 4, 0, 0, 1, 2] },
                      { Col: [5, 5, 1, 1, 1, 4, 4, 1] },
                      { Col: [5, 3, 4, 3, 1, 2, 1, 4] },
                      { Col: [3, 3, 3, 3, 5, 4, 6, 2] },
                      { Col: [3, 5, 0, 0, 5, 2, 2, 2] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [41, 49, 48, 56, 50, 51, 43],
                        Symbol: 3,
                        Count: 7,
                        OddCount: 7,
                        Win: 1.5,
                      },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [3, 3] },
                      { Col: [6, 0, 0, 0] },
                      { Col: [6] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 1, 0, 1, 0, 0, 0, 0] },
                      { Col: [1, 1, 1, 1, 0, 0, 0, 0] },
                      { Col: [1, 0, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !0, !0, !1],
                    ComboStageWin: 1.5,
                    NeedEliminate: !0,
                    EliminateCount: 7,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [5, 5, 0, 0, 1, 2, 6, 6] },
                      { Col: [4, 5, 4, 0, 4, 1, 1, 4] },
                      { Col: [0, 2, 4, 3, 3, 6, 5, 6] },
                      { Col: [3, 5, 4, 4, 0, 0, 1, 2] },
                      { Col: [5, 5, 1, 1, 1, 4, 4, 1] },
                      { Col: [5, 4, 1, 2, 1, 4, 3, 3] },
                      { Col: [5, 4, 6, 2, 6, 0, 0, 0] },
                      { Col: [5, 0, 0, 5, 2, 2, 2, 6] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [25, 33, 32, 40, 48, 56],
                        Symbol: 5,
                        Count: 6,
                        OddCount: 6,
                        Win: 1.5,
                      },
                      {
                        PosVec: [34, 42, 35, 36, 44],
                        Symbol: 1,
                        Count: 5,
                        OddCount: 5,
                        Win: 0.45,
                      },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [0] },
                      { Col: [2, 4, 5, 5, 5] },
                      { Col: [0, 0, 3] },
                      { Col: [0] },
                      { Col: [6] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 1, 0, 0, 0, 0, 0, 0] },
                      { Col: [1, 1, 1, 1, 1, 0, 0, 0] },
                      { Col: [1, 0, 1, 0, 1, 0, 0, 0] },
                      { Col: [1, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [1, 0, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !0, !0, !1],
                    ComboStageWin: 1.95,
                    NeedEliminate: !0,
                    EliminateCount: 11,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [5, 5, 0, 0, 1, 2, 6, 6] },
                      { Col: [4, 5, 4, 0, 4, 1, 1, 4] },
                      { Col: [0, 2, 4, 3, 3, 6, 5, 6] },
                      { Col: [3, 4, 4, 0, 0, 1, 2, 0] },
                      { Col: [4, 4, 1, 2, 4, 5, 5, 5] },
                      { Col: [4, 2, 4, 3, 3, 0, 0, 3] },
                      { Col: [4, 6, 2, 6, 0, 0, 0, 0] },
                      { Col: [0, 0, 5, 2, 2, 2, 6, 6] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [10, 18, 26, 25, 33, 32, 40, 48],
                        Symbol: 4,
                        Count: 8,
                        OddCount: 8,
                        Win: 3,
                      },
                      {
                        PosVec: [45, 53, 52, 54, 46, 55],
                        Count: 6,
                        OddCount: 6,
                        Win: 0.45,
                      },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [2] },
                      { Col: [2] },
                      { Col: [5, 4] },
                      { Col: [0, 6] },
                      { Col: [0, 4, 0] },
                      { Col: [3, 2, 0, 0, 2] },
                      { Col: [] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 1, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 1, 0, 0, 0, 0, 0] },
                      { Col: [0, 1, 1, 0, 0, 0, 0, 0] },
                      { Col: [1, 1, 0, 0, 0, 0, 0, 0] },
                      { Col: [1, 0, 0, 0, 0, 1, 1, 0] },
                      { Col: [1, 0, 0, 0, 1, 1, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !0, !0, !1],
                    ComboStageWin: 3.45,
                    NeedEliminate: !0,
                    EliminateCount: 14,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [5, 5, 0, 0, 1, 2, 6, 6] },
                      { Col: [4, 5, 0, 4, 1, 1, 4, 2] },
                      { Col: [0, 2, 3, 3, 6, 5, 6, 2] },
                      { Col: [3, 0, 0, 1, 2, 0, 5, 4] },
                      { Col: [1, 2, 4, 5, 5, 5, 0, 6] },
                      { Col: [2, 4, 3, 3, 3, 0, 4, 0] },
                      { Col: [6, 2, 6, 3, 2, 0, 0, 2] },
                      { Col: [0, 0, 5, 2, 2, 2, 6, 6] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [11, 19, 27, 28, 20],
                        Symbol: 4,
                        Count: 5,
                        OddCount: 5,
                        Win: 0.9,
                      },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [0] },
                      { Col: [0, 0] },
                      { Col: [6, 6] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 1, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 1, 1, 0, 0, 0] },
                      { Col: [0, 0, 0, 1, 1, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !1, !0, !1],
                    ComboStageWin: 0.9,
                    NeedEliminate: !0,
                    EliminateCount: 5,
                    LightInfo: {
                      ThreeInfo: [
                        { PosVec: [46, 47, 54, 55], Symbol: 4, Size: 2 },
                        { PosVec: [19, 20, 27, 28], Symbol: 4, Size: 2 },
                        { PosVec: [5, 6, 13, 14], Symbol: 4, Size: 2 },
                      ],
                      FiveInfo: [],
                      LightSymbol: [
                        { Col: [5, 5, 0, 0, 1, 4, 4, 6] },
                        { Col: [4, 5, 0, 4, 1, 4, 4, 2] },
                        { Col: [0, 2, 3, 4, 4, 5, 6, 2] },
                        { Col: [3, 0, 0, 4, 4, 0, 5, 4] },
                        { Col: [1, 2, 4, 5, 5, 5, 0, 6] },
                        { Col: [2, 4, 3, 3, 3, 0, 4, 4] },
                        { Col: [6, 2, 6, 3, 2, 0, 4, 4] },
                        { Col: [0, 0, 5, 2, 2, 2, 6, 6] },
                      ],
                      LightType: 3,
                      TwoInfo: 0,
                    },
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [5, 5, 0, 0, 1, 4, 4, 6] },
                      { Col: [4, 5, 0, 1, 4, 4, 2, 0] },
                      { Col: [0, 2, 3, 5, 6, 2, 0, 0] },
                      { Col: [3, 0, 0, 0, 5, 4, 6, 6] },
                      { Col: [1, 2, 4, 5, 5, 5, 0, 6] },
                      { Col: [2, 4, 3, 3, 3, 0, 4, 4] },
                      { Col: [6, 2, 6, 3, 2, 0, 4, 4] },
                      { Col: [0, 0, 5, 2, 2, 2, 6, 6] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [35, 43, 51, 50, 52, 44, 36, 37, 45, 53],
                        Symbol: 6,
                        Count: 10,
                        OddCount: 10,
                        Win: 12,
                      },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [3, 3, 3] },
                      { Col: [3, 2, 5] },
                      { Col: [1, 6, 5, 5] },
                      { Col: [] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 1, 1, 1, 0, 0] },
                      { Col: [0, 0, 0, 1, 1, 1, 0, 0] },
                      { Col: [0, 0, 1, 1, 1, 1, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !1, !1, !1],
                    ComboStageWin: 12,
                    NeedEliminate: !0,
                    EliminateCount: 10,
                    LightInfo: {
                      ThreeInfo: [],
                      FiveInfo: [],
                      LightSymbol: [
                        { Col: [5, 5, 0, 0, 1, 4, 4, 6] },
                        { Col: [4, 5, 0, 1, 4, 4, 2, 0] },
                        { Col: [0, 2, 3, 5, 6, 2, 0, 0] },
                        { Col: [3, 0, 0, 0, 5, 4, 6, 6] },
                        { Col: [1, 2, 4, 6, 6, 6, 0, 6] },
                        { Col: [2, 4, 3, 6, 6, 6, 4, 4] },
                        { Col: [6, 2, 6, 6, 6, 6, 4, 4] },
                        { Col: [0, 0, 5, 2, 2, 2, 6, 6] },
                      ],
                      LightType: 4,
                      FourInfo: {
                        PosVec: [35, 36, 37, 43, 44, 45, 51, 52, 53],
                        Symbol: 6,
                        Size: 3,
                      },
                      TwoInfo: 0,
                    },
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [5, 5, 0, 0, 1, 4, 4, 6] },
                      { Col: [4, 5, 0, 1, 4, 4, 2, 0] },
                      { Col: [0, 2, 3, 5, 6, 2, 0, 0] },
                      { Col: [3, 0, 0, 0, 5, 4, 6, 6] },
                      { Col: [1, 2, 4, 0, 6, 3, 3, 3] },
                      { Col: [2, 4, 3, 4, 4, 3, 2, 5] },
                      { Col: [6, 2, 4, 4, 1, 6, 5, 5] },
                      { Col: [0, 0, 5, 2, 2, 2, 6, 6] },
                    ],
                    AwardDataVec: [],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !1, !1, !1],
                    EliminateCount: 0,
                    ComboStageWin: 0,
                  },
                ],
                LightPos: [-1, 12, 49, 35, 18, 14],
                RoundWin: 31.95,
                Mult: 1,
                TotalEliminateCount: 127,
                LevelCount: 85,
                AwardTypeFlag: 3,
              },
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [1, 1, 0, 1, 0, 0, 2, 6] },
                      { Col: [1, 0, 0, 2, 1, 3, 2, 5] },
                      { Col: [1, 3, 4, 1, 4, 6, 6, 3] },
                      { Col: [0, 3, 4, 2, 1, 0, 2, 1] },
                      { Col: [0, 2, 1, 1, 2, 0, 5, 2] },
                      { Col: [6, 0, 1, 3, 5, 1, 0, 3] },
                      { Col: [0, 2, 6, 0, 3, 5, 1, 4] },
                      { Col: [2, 3, 3, 1, 2, 0, 5, 2] },
                    ],
                    AwardDataVec: [],
                    FillSymbols: [
                      { Col: [3, 3, 3, 3, 3, 3, 1] },
                      { Col: [3, 3, 5, 3, 3, 3] },
                      { Col: [5, 4] },
                      { Col: [3, 5, 1, 3, 5, 5] },
                      { Col: [3, 6, 6, 0, 4, 4, 1] },
                      { Col: [5, 5, 5, 4] },
                      { Col: [5, 5, 5, 4] },
                      { Col: [2, 2, 6, 6, 4] },
                    ],
                    Eliminate: [
                      { Col: [1, 1, 1, 1, 1, 1, 1, 0] },
                      { Col: [1, 1, 1, 1, 1, 0, 1, 0] },
                      { Col: [1, 0, 0, 1, 0, 0, 0, 0] },
                      { Col: [1, 0, 0, 1, 1, 1, 1, 1] },
                      { Col: [1, 1, 1, 1, 1, 1, 0, 1] },
                      { Col: [0, 1, 1, 0, 0, 1, 1, 0] },
                      { Col: [1, 1, 0, 1, 0, 0, 1, 0] },
                      { Col: [1, 0, 0, 1, 1, 1, 0, 1] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !0, !0, !0, !0],
                    NeedEliminate: !0,
                    EliminateCount: 41,
                    LightInfo: {
                      ThreeInfo: [],
                      FiveInfo: [],
                      LightSymbol: [
                        { Col: [8, 8, 8, 8, 8, 8, 8, 6] },
                        { Col: [8, 8, 8, 8, 8, 3, 8, 5] },
                        { Col: [8, 3, 4, 8, 4, 6, 6, 3] },
                        { Col: [8, 3, 4, 8, 8, 8, 8, 8] },
                        { Col: [8, 8, 8, 8, 8, 8, 5, 8] },
                        { Col: [6, 8, 8, 3, 5, 8, 8, 3] },
                        { Col: [8, 8, 6, 8, 3, 5, 8, 4] },
                        { Col: [8, 3, 3, 8, 8, 8, 5, 8] },
                      ],
                      LightType: 1,
                      TwoInfo: 0,
                    },
                    ComboStageWin: 0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [6, 3, 3, 3, 3, 3, 3, 1] },
                      { Col: [3, 5, 3, 3, 5, 3, 3, 3] },
                      { Col: [3, 4, 4, 6, 6, 3, 5, 4] },
                      { Col: [3, 4, 3, 5, 1, 3, 5, 5] },
                      { Col: [5, 3, 6, 6, 0, 4, 4, 1] },
                      { Col: [6, 3, 5, 3, 5, 5, 5, 4] },
                      { Col: [6, 3, 5, 4, 5, 5, 5, 4] },
                      { Col: [3, 3, 5, 2, 2, 6, 6, 4] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [1, 2, 10, 11, 3, 4, 5, 13, 21, 29, 14, 6, 15],
                        Symbol: 3,
                        Count: 13,
                        OddCount: 13,
                        Win: 18,
                      },
                      {
                        PosVec: [33, 41, 49, 57, 56],
                        Symbol: 3,
                        Count: 5,
                        OddCount: 5,
                        Win: 1.5,
                      },
                      {
                        PosVec: [44, 52, 53, 45, 46, 54],
                        Symbol: 5,
                        Count: 6,
                        OddCount: 6,
                        Win: 3,
                      },
                    ],
                    FillSymbols: [
                      { Col: [2, 2, 5, 4, 4, 4] },
                      { Col: [3, 6, 6, 4, 4] },
                      { Col: [2] },
                      { Col: [0] },
                      { Col: [2] },
                      { Col: [1, 3, 1, 1] },
                      { Col: [1, 1, 2, 0] },
                      { Col: [2, 2] },
                    ],
                    Eliminate: [
                      { Col: [0, 1, 1, 1, 1, 1, 1, 0] },
                      { Col: [0, 0, 1, 1, 0, 1, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 1, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 1, 0, 0] },
                      { Col: [0, 1, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 1, 0, 0, 1, 1, 1, 0] },
                      { Col: [0, 1, 0, 0, 1, 1, 1, 0] },
                      { Col: [1, 1, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !0, !0, !0, !0],
                    ComboStageWin: 22.5,
                    NeedEliminate: !0,
                    EliminateCount: 24,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [6, 1, 2, 2, 5, 4, 4, 4] },
                      { Col: [3, 5, 5, 3, 6, 6, 4, 4] },
                      { Col: [3, 4, 4, 6, 6, 5, 4, 2] },
                      { Col: [3, 4, 3, 5, 1, 5, 5, 0] },
                      { Col: [5, 6, 6, 0, 4, 4, 1, 2] },
                      { Col: [6, 5, 3, 4, 1, 3, 1, 1] },
                      { Col: [6, 5, 4, 4, 1, 1, 2, 0] },
                      { Col: [5, 2, 2, 6, 6, 4, 2, 2] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [5, 6, 14, 22, 15, 7],
                        Symbol: 4,
                        Count: 6,
                        OddCount: 6,
                        Win: 2.4,
                      },
                    ],
                    FillSymbols: [
                      { Col: [6, 4, 4] },
                      { Col: [3, 3] },
                      { Col: [3] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 0, 1, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 1, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !0, !0, !0, !0],
                    ComboStageWin: 2.4,
                    NeedEliminate: !0,
                    EliminateCount: 6,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [6, 1, 2, 2, 5, 6, 4, 4] },
                      { Col: [3, 5, 5, 3, 6, 6, 3, 3] },
                      { Col: [3, 4, 4, 6, 6, 5, 2, 3] },
                      { Col: [3, 4, 3, 5, 1, 5, 5, 0] },
                      { Col: [5, 6, 6, 0, 4, 4, 1, 2] },
                      { Col: [6, 5, 3, 4, 1, 3, 1, 1] },
                      { Col: [6, 5, 4, 4, 1, 1, 2, 0] },
                      { Col: [5, 2, 2, 6, 6, 4, 2, 2] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [5, 13, 12, 20, 19],
                        Symbol: 6,
                        Count: 5,
                        OddCount: 5,
                        Win: 3,
                      },
                    ],
                    FillSymbols: [
                      { Col: [5] },
                      { Col: [5, 5] },
                      { Col: [6, 1] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 0, 1, 0, 0] },
                      { Col: [0, 0, 0, 0, 1, 1, 0, 0] },
                      { Col: [0, 0, 0, 1, 1, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !0, !0, !0, !0],
                    ComboStageWin: 3,
                    NeedEliminate: !0,
                    EliminateCount: 5,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [6, 1, 2, 2, 5, 4, 4, 5] },
                      { Col: [3, 5, 5, 3, 3, 3, 5, 5] },
                      { Col: [3, 4, 4, 5, 2, 3, 6, 1] },
                      { Col: [3, 4, 3, 5, 1, 5, 5, 0] },
                      { Col: [5, 6, 6, 0, 4, 4, 1, 2] },
                      { Col: [6, 5, 3, 4, 1, 3, 1, 1] },
                      { Col: [6, 5, 4, 4, 1, 1, 2, 0] },
                      { Col: [5, 2, 2, 6, 6, 4, 2, 2] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [7, 15, 14, 22, 30, 29],
                        Symbol: 5,
                        Count: 6,
                        OddCount: 6,
                        Win: 3,
                      },
                      {
                        PosVec: [11, 12, 13, 21, 22],
                        Symbol: 3,
                        Count: 5,
                        OddCount: 5,
                        Win: 1.5,
                      },
                      {
                        PosVec: [17, 25, 33, 34, 18],
                        Symbol: 4,
                        Count: 5,
                        OddCount: 5,
                        Win: 1.8,
                      },
                      {
                        PosVec: [32, 40, 48, 56, 49, 41, 33, 34],
                        Symbol: 5,
                        Count: 8,
                        OddCount: 8,
                        Win: 9,
                      },
                      {
                        PosVec: [43, 51, 50, 59, 60, 61],
                        Symbol: 4,
                        Count: 6,
                        OddCount: 6,
                        Win: 2.4,
                      },
                      {
                        PosVec: [44, 52, 60, 59, 53],
                        Symbol: 1,
                        Count: 5,
                        OddCount: 5,
                        Win: 0.9,
                      },
                    ],
                    FillSymbols: [
                      { Col: [1] },
                      { Col: [0, 4, 4, 4, 3] },
                      { Col: [6, 3, 4, 4] },
                      { Col: [6, 6, 1] },
                      { Col: [0, 0, 1] },
                      { Col: [2, 2, 5, 5] },
                      { Col: [4, 6, 5, 5, 1, 5] },
                      { Col: [1, 6, 0, 0] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 0, 0, 0, 1] },
                      { Col: [0, 0, 0, 1, 1, 1, 1, 1] },
                      { Col: [0, 1, 1, 0, 0, 1, 1, 0] },
                      { Col: [0, 1, 0, 0, 0, 1, 1, 0] },
                      { Col: [1, 1, 1, 0, 0, 0, 0, 0] },
                      { Col: [1, 1, 0, 1, 1, 0, 0, 0] },
                      { Col: [1, 1, 1, 1, 1, 1, 0, 0] },
                      { Col: [1, 0, 0, 1, 1, 1, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !0, !0, !0],
                    ComboStageWin: 18.6,
                    NeedEliminate: !0,
                    EliminateCount: 30,
                    LightInfo: {
                      ThreeInfo: [],
                      FiveInfo: [],
                      LightSymbol: [
                        { Col: [7, 1, 2, 2, 5, 4, 4, 5] },
                        { Col: [3, 5, 5, 3, 3, 3, 5, 5] },
                        { Col: [3, 4, 4, 5, 2, 3, 7, 1] },
                        { Col: [3, 4, 3, 5, 1, 5, 5, 0] },
                        { Col: [5, 7, 7, 0, 4, 4, 1, 2] },
                        { Col: [7, 5, 3, 4, 1, 3, 1, 1] },
                        { Col: [7, 5, 4, 4, 1, 1, 2, 0] },
                        { Col: [5, 2, 2, 7, 7, 4, 2, 2] },
                      ],
                      LightType: 2,
                      TwoInfo: 6,
                    },
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [7, 1, 2, 2, 5, 4, 4, 1] },
                      { Col: [3, 5, 5, 0, 4, 4, 4, 3] },
                      { Col: [3, 5, 2, 1, 6, 3, 4, 4] },
                      { Col: [3, 3, 5, 1, 0, 6, 6, 1] },
                      { Col: [0, 4, 4, 1, 2, 0, 0, 1] },
                      { Col: [3, 3, 1, 1, 2, 2, 5, 5] },
                      { Col: [2, 0, 4, 6, 5, 5, 1, 5] },
                      { Col: [2, 2, 2, 2, 1, 6, 0, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [0, 8, 16, 24, 25],
                        Symbol: 3,
                        Count: 5,
                        OddCount: 5,
                        Win: 1.5,
                      },
                      {
                        PosVec: [5, 13, 12, 14, 6, 22, 23],
                        Symbol: 4,
                        Count: 7,
                        OddCount: 7,
                        Win: 3.6,
                      },
                      {
                        PosVec: [19, 27, 35, 43, 42],
                        Symbol: 1,
                        Count: 5,
                        OddCount: 5,
                        Win: 0.9,
                      },
                      {
                        PosVec: [48, 56, 57, 58, 59],
                        Symbol: 2,
                        Count: 5,
                        OddCount: 5,
                        Win: 1.2,
                      },
                    ],
                    FillSymbols: [
                      { Col: [1, 1, 1] },
                      { Col: [4, 1, 1, 4] },
                      { Col: [5, 2, 3, 4] },
                      { Col: [3, 5, 6] },
                      { Col: [4] },
                      { Col: [3, 3] },
                      { Col: [0] },
                      { Col: [3, 3, 0, 0] },
                    ],
                    Eliminate: [
                      { Col: [1, 0, 0, 0, 0, 1, 1, 0] },
                      { Col: [1, 0, 0, 0, 1, 1, 1, 0] },
                      { Col: [1, 0, 0, 1, 0, 0, 1, 1] },
                      { Col: [1, 1, 0, 1, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 1, 0, 0, 0, 0] },
                      { Col: [0, 0, 1, 1, 0, 0, 0, 0] },
                      { Col: [1, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [1, 1, 1, 1, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !0, !0, !0],
                    ComboStageWin: 7.2,
                    NeedEliminate: !0,
                    EliminateCount: 22,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [1, 2, 2, 5, 1, 1, 1, 1] },
                      { Col: [5, 5, 0, 3, 4, 1, 1, 4] },
                      { Col: [5, 2, 6, 3, 5, 2, 3, 4] },
                      { Col: [5, 0, 6, 6, 1, 3, 5, 6] },
                      { Col: [0, 4, 4, 2, 0, 0, 1, 4] },
                      { Col: [3, 3, 2, 2, 5, 5, 3, 3] },
                      { Col: [0, 4, 6, 5, 5, 1, 5, 0] },
                      { Col: [1, 6, 0, 0, 3, 3, 0, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [4, 5, 13, 14, 6, 7],
                        Symbol: 1,
                        Count: 6,
                        OddCount: 6,
                        Win: 1.2,
                      },
                    ],
                    FillSymbols: [
                      { Col: [5, 0, 5, 5] },
                      { Col: [6, 6] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 1, 1, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 1, 1, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !0, !0, !0],
                    ComboStageWin: 1.2,
                    NeedEliminate: !0,
                    EliminateCount: 6,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [1, 2, 2, 5, 5, 0, 5, 5] },
                      { Col: [5, 5, 0, 3, 4, 4, 6, 6] },
                      { Col: [5, 2, 6, 3, 5, 2, 3, 4] },
                      { Col: [5, 0, 6, 6, 1, 3, 5, 6] },
                      { Col: [0, 4, 4, 2, 0, 0, 1, 4] },
                      { Col: [3, 3, 2, 2, 5, 5, 3, 3] },
                      { Col: [0, 4, 6, 5, 5, 1, 5, 0] },
                      { Col: [1, 6, 0, 0, 3, 3, 0, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [5, 13, 14, 6, 15],
                        Symbol: 6,
                        Count: 5,
                        OddCount: 5,
                        Win: 3,
                      },
                    ],
                    FillSymbols: [
                      { Col: [1, 1] },
                      { Col: [5, 1, 1] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 0, 1, 1, 0] },
                      { Col: [0, 0, 0, 0, 0, 1, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !1, !0, !0],
                    ComboStageWin: 3,
                    NeedEliminate: !0,
                    EliminateCount: 5,
                    LightInfo: {
                      ThreeInfo: [
                        { PosVec: [5, 6, 13, 14], Symbol: 6, Size: 2 },
                        { PosVec: [32, 33, 40, 41], Symbol: 6, Size: 2 },
                      ],
                      FiveInfo: [],
                      LightSymbol: [
                        { Col: [1, 2, 2, 5, 5, 6, 6, 5] },
                        { Col: [5, 5, 0, 3, 4, 6, 6, 6] },
                        { Col: [5, 2, 6, 3, 5, 2, 3, 4] },
                        { Col: [5, 0, 6, 6, 1, 3, 5, 6] },
                        { Col: [6, 6, 4, 2, 0, 0, 1, 4] },
                        { Col: [6, 6, 2, 2, 5, 5, 3, 3] },
                        { Col: [0, 4, 6, 5, 5, 1, 5, 0] },
                        { Col: [1, 6, 0, 0, 3, 3, 0, 0] },
                      ],
                      LightType: 3,
                      TwoInfo: 0,
                    },
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [1, 2, 2, 5, 5, 5, 1, 1] },
                      { Col: [5, 5, 0, 3, 4, 5, 1, 1] },
                      { Col: [5, 2, 6, 3, 5, 2, 3, 4] },
                      { Col: [5, 0, 6, 6, 1, 3, 5, 6] },
                      { Col: [6, 6, 4, 2, 0, 0, 1, 4] },
                      { Col: [6, 6, 2, 2, 5, 5, 3, 3] },
                      { Col: [0, 4, 6, 5, 5, 1, 5, 0] },
                      { Col: [1, 6, 0, 0, 3, 3, 0, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [0, 1, 9, 17, 18, 10, 2, 3, 11, 19],
                        Symbol: 1,
                        Count: 10,
                        OddCount: 10,
                        Win: 6,
                      },
                    ],
                    FillSymbols: [
                      { Col: [2, 4, 4, 1] },
                      { Col: [4, 2, 2] },
                      { Col: [5, 1, 1] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    Eliminate: [
                      { Col: [1, 1, 1, 1, 0, 0, 0, 0] },
                      { Col: [0, 1, 1, 1, 0, 0, 0, 0] },
                      { Col: [0, 1, 1, 1, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !1, !1, !0],
                    ComboStageWin: 6,
                    NeedEliminate: !0,
                    EliminateCount: 10,
                    LightInfo: {
                      ThreeInfo: [],
                      FiveInfo: [],
                      LightSymbol: [
                        { Col: [1, 1, 1, 1, 5, 5, 1, 1] },
                        { Col: [5, 1, 1, 1, 4, 5, 1, 1] },
                        { Col: [5, 1, 1, 1, 5, 2, 3, 4] },
                        { Col: [5, 0, 6, 6, 1, 3, 5, 6] },
                        { Col: [6, 6, 4, 2, 0, 0, 1, 4] },
                        { Col: [6, 6, 2, 2, 5, 5, 3, 3] },
                        { Col: [0, 4, 6, 5, 5, 1, 5, 0] },
                        { Col: [1, 6, 0, 0, 3, 3, 0, 0] },
                      ],
                      LightType: 4,
                      FourInfo: {
                        PosVec: [1, 2, 3, 9, 10, 11, 17, 18, 19],
                        Symbol: 1,
                        Size: 3,
                      },
                      TwoInfo: 0,
                    },
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [5, 5, 1, 1, 2, 4, 4, 1] },
                      { Col: [5, 4, 5, 1, 1, 4, 2, 2] },
                      { Col: [5, 5, 2, 3, 4, 5, 1, 1] },
                      { Col: [5, 0, 6, 6, 1, 3, 5, 6] },
                      { Col: [6, 6, 4, 2, 0, 0, 1, 4] },
                      { Col: [6, 6, 2, 2, 5, 5, 3, 3] },
                      { Col: [0, 4, 6, 5, 5, 1, 5, 0] },
                      { Col: [1, 6, 0, 0, 3, 3, 0, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [0, 8, 16, 24, 17, 1],
                        Symbol: 5,
                        Count: 6,
                        OddCount: 6,
                        Win: 3,
                      },
                    ],
                    FillSymbols: [
                      { Col: [0, 0] },
                      { Col: [4] },
                      { Col: [2, 2] },
                      { Col: [5] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    Eliminate: [
                      { Col: [1, 1, 0, 0, 0, 0, 0, 0] },
                      { Col: [1, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [1, 1, 0, 0, 0, 0, 0, 0] },
                      { Col: [1, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !1, !1, !0],
                    ComboStageWin: 3,
                    NeedEliminate: !0,
                    EliminateCount: 6,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [1, 1, 2, 4, 4, 1, 0, 0] },
                      { Col: [4, 5, 1, 1, 4, 2, 2, 4] },
                      { Col: [2, 3, 4, 5, 1, 1, 2, 2] },
                      { Col: [0, 6, 6, 1, 3, 5, 6, 5] },
                      { Col: [6, 6, 4, 2, 0, 0, 1, 4] },
                      { Col: [6, 6, 2, 2, 5, 5, 3, 3] },
                      { Col: [0, 4, 6, 5, 5, 1, 5, 0] },
                      { Col: [1, 6, 0, 0, 3, 3, 0, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [25, 33, 32, 40, 41, 26],
                        Symbol: 6,
                        Count: 6,
                        OddCount: 6,
                        Win: 3.6,
                      },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [5, 3] },
                      { Col: [5, 5] },
                      { Col: [0, 5] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 1, 1, 0, 0, 0, 0, 0] },
                      { Col: [1, 1, 0, 0, 0, 0, 0, 0] },
                      { Col: [1, 1, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !1, !1, !0],
                    ComboStageWin: 3.6,
                    NeedEliminate: !0,
                    EliminateCount: 6,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [1, 1, 2, 4, 4, 1, 0, 0] },
                      { Col: [4, 5, 1, 1, 4, 2, 2, 4] },
                      { Col: [2, 3, 4, 5, 1, 1, 2, 2] },
                      { Col: [0, 1, 3, 5, 6, 5, 5, 3] },
                      { Col: [4, 2, 0, 0, 1, 4, 5, 5] },
                      { Col: [2, 2, 5, 5, 3, 3, 0, 5] },
                      { Col: [0, 4, 6, 5, 5, 1, 5, 0] },
                      { Col: [1, 6, 0, 0, 3, 3, 0, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [29, 30, 38, 39, 47],
                        Symbol: 5,
                        Count: 5,
                        OddCount: 5,
                        Win: 2.4,
                      },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [0, 0] },
                      { Col: [5, 5] },
                      { Col: [0] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 1, 1, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !1, !1, !0],
                    ComboStageWin: 2.4,
                    NeedEliminate: !0,
                    EliminateCount: 5,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [1, 1, 2, 4, 4, 1, 0, 0] },
                      { Col: [4, 5, 1, 1, 4, 2, 2, 4] },
                      { Col: [2, 3, 4, 5, 1, 1, 2, 2] },
                      { Col: [0, 1, 3, 5, 6, 3, 0, 0] },
                      { Col: [4, 2, 0, 0, 1, 4, 5, 5] },
                      { Col: [2, 2, 5, 5, 3, 3, 0, 0] },
                      { Col: [0, 4, 6, 5, 5, 1, 5, 0] },
                      { Col: [1, 6, 0, 0, 3, 3, 0, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [46, 47, 55, 63, 62],
                        Count: 5,
                        OddCount: 5,
                        Win: 0.6,
                      },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [1, 6] },
                      { Col: [3] },
                      { Col: [1, 6] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 1, 1] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !1, !1, !0],
                    ComboStageWin: 0.6,
                    NeedEliminate: !0,
                    EliminateCount: 5,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [1, 1, 2, 4, 4, 1, 0, 0] },
                      { Col: [4, 5, 1, 1, 4, 2, 2, 4] },
                      { Col: [2, 3, 4, 5, 1, 1, 2, 2] },
                      { Col: [0, 1, 3, 5, 6, 3, 0, 0] },
                      { Col: [4, 2, 0, 0, 1, 4, 5, 5] },
                      { Col: [2, 2, 5, 5, 3, 3, 1, 6] },
                      { Col: [0, 4, 6, 5, 5, 1, 5, 3] },
                      { Col: [1, 6, 0, 0, 3, 3, 1, 6] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [42, 43, 51, 52, 53, 54, 55],
                        Symbol: 5,
                        Count: 7,
                        OddCount: 7,
                        Win: 4.8,
                      },
                      {
                        PosVec: [44, 45, 53, 61, 60],
                        Symbol: 3,
                        Count: 5,
                        OddCount: 5,
                        Win: 1.5,
                      },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [5, 5, 3, 3] },
                      { Col: [6, 6, 6, 6, 3] },
                      { Col: [5, 4] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 1, 1, 1, 1, 0, 0] },
                      { Col: [0, 0, 0, 1, 1, 1, 1, 1] },
                      { Col: [0, 0, 0, 0, 1, 1, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !1, !1, !1],
                    ComboStageWin: 6.3,
                    NeedEliminate: !0,
                    EliminateCount: 11,
                    LightInfo: {
                      ThreeInfo: [],
                      FiveInfo: [55, 10, 53, 40, 1],
                      LightSymbol: [
                        { Col: [1, 7, 2, 4, 4, 1, 0, 0] },
                        { Col: [4, 5, 7, 1, 4, 2, 2, 4] },
                        { Col: [2, 3, 4, 5, 1, 1, 2, 2] },
                        { Col: [0, 1, 3, 5, 6, 3, 0, 0] },
                        { Col: [4, 2, 0, 0, 1, 4, 5, 5] },
                        { Col: [7, 2, 5, 5, 3, 3, 1, 6] },
                        { Col: [0, 4, 6, 5, 5, 7, 5, 7] },
                        { Col: [1, 6, 0, 0, 3, 3, 1, 6] },
                      ],
                      LightType: 5,
                      TwoInfo: 0,
                    },
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [1, 7, 2, 4, 4, 1, 0, 0] },
                      { Col: [4, 5, 7, 1, 4, 2, 2, 4] },
                      { Col: [2, 3, 4, 5, 1, 1, 2, 2] },
                      { Col: [0, 1, 3, 5, 6, 3, 0, 0] },
                      { Col: [4, 2, 0, 0, 1, 4, 5, 5] },
                      { Col: [7, 2, 1, 6, 5, 5, 3, 3] },
                      { Col: [0, 4, 6, 6, 6, 6, 6, 3] },
                      { Col: [1, 6, 0, 0, 1, 6, 5, 4] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [43, 51, 50, 52, 53, 61, 54],
                        Symbol: 6,
                        Count: 7,
                        OddCount: 7,
                        Win: 6,
                      },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [1] },
                      { Col: [4, 2, 2, 4, 4] },
                      { Col: [1] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 1, 0, 0, 0, 0] },
                      { Col: [0, 0, 1, 1, 1, 1, 1, 0] },
                      { Col: [0, 0, 0, 0, 0, 1, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !1, !1, !1],
                    ComboStageWin: 6,
                    NeedEliminate: !0,
                    EliminateCount: 7,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [1, 7, 2, 4, 4, 1, 0, 0] },
                      { Col: [4, 5, 7, 1, 4, 2, 2, 4] },
                      { Col: [2, 3, 4, 5, 1, 1, 2, 2] },
                      { Col: [0, 1, 3, 5, 6, 3, 0, 0] },
                      { Col: [4, 2, 0, 0, 1, 4, 5, 5] },
                      { Col: [7, 2, 1, 5, 5, 3, 3, 1] },
                      { Col: [0, 4, 3, 4, 2, 2, 4, 4] },
                      { Col: [1, 6, 0, 0, 1, 5, 4, 1] },
                    ],
                    AwardDataVec: [],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !1, !1, !1],
                    EliminateCount: 0,
                    ComboStageWin: 0,
                  },
                ],
                LightPos: [-1, -1, -1, -1, -1, -1],
                RoundWin: 85.8,
                Mult: 2,
                TotalEliminateCount: 189,
                LevelCount: 160,
                Level: 1,
                FreeTotalRound: 1,
                AwardTypeFlag: 5,
              },
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [1, 7, 2, 4, 4, 1, 0, 0] },
                      { Col: [4, 5, 7, 1, 4, 2, 2, 4] },
                      { Col: [2, 3, 4, 5, 1, 1, 2, 2] },
                      { Col: [0, 1, 3, 5, 6, 3, 0, 0] },
                      { Col: [4, 2, 0, 0, 1, 4, 5, 5] },
                      { Col: [7, 2, 1, 5, 5, 3, 3, 1] },
                      { Col: [0, 4, 3, 4, 2, 2, 4, 4] },
                      { Col: [1, 6, 0, 0, 1, 5, 4, 1] },
                    ],
                    AwardDataVec: [],
                    FillSymbols: [
                      { Col: [4, 5, 6, 6, 6] },
                      { Col: [6, 6, 6] },
                      { Col: [5, 5, 0, 3, 1] },
                      { Col: [4, 5, 5, 5] },
                      { Col: [5, 5, 4, 4] },
                      { Col: [4, 5, 5] },
                      { Col: [3, 2, 3] },
                      { Col: [3, 3, 1, 1, 1] },
                    ],
                    Eliminate: [
                      { Col: [1, 0, 1, 0, 0, 1, 1, 1] },
                      { Col: [0, 0, 0, 1, 0, 1, 1, 0] },
                      { Col: [1, 0, 0, 0, 1, 1, 1, 1] },
                      { Col: [1, 1, 0, 0, 0, 0, 1, 1] },
                      { Col: [0, 1, 1, 1, 1, 0, 0, 0] },
                      { Col: [0, 1, 1, 0, 0, 0, 0, 1] },
                      { Col: [1, 0, 0, 0, 1, 1, 0, 0] },
                      { Col: [1, 0, 1, 1, 1, 0, 0, 1] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !0, !0, !0, !0],
                    NeedEliminate: !0,
                    EliminateCount: 32,
                    LightInfo: {
                      ThreeInfo: [],
                      FiveInfo: [],
                      LightSymbol: [
                        { Col: [8, 7, 8, 4, 4, 8, 8, 8] },
                        { Col: [4, 5, 7, 8, 4, 8, 8, 4] },
                        { Col: [8, 3, 4, 5, 8, 8, 8, 8] },
                        { Col: [8, 8, 3, 5, 6, 3, 8, 8] },
                        { Col: [4, 8, 8, 8, 8, 4, 5, 5] },
                        { Col: [7, 8, 8, 5, 5, 3, 3, 8] },
                        { Col: [8, 4, 3, 4, 8, 8, 4, 4] },
                        { Col: [8, 6, 8, 8, 8, 5, 4, 8] },
                      ],
                      LightType: 1,
                      TwoInfo: 0,
                    },
                    ComboStageWin: 0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [7, 4, 4, 4, 5, 6, 6, 6] },
                      { Col: [4, 5, 7, 4, 4, 6, 6, 6] },
                      { Col: [3, 4, 5, 5, 5, 0, 3, 1] },
                      { Col: [3, 5, 6, 3, 4, 5, 5, 5] },
                      { Col: [4, 4, 5, 5, 5, 5, 4, 4] },
                      { Col: [7, 5, 5, 3, 3, 4, 5, 5] },
                      { Col: [4, 3, 4, 4, 4, 3, 2, 3] },
                      { Col: [6, 5, 4, 3, 3, 1, 1, 1] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [0, 8, 1, 2, 10, 11, 3, 12],
                        Symbol: 4,
                        Count: 8,
                        OddCount: 8,
                        Win: 12,
                      },
                      {
                        PosVec: [5, 13, 14, 6, 7, 15],
                        Symbol: 6,
                        Count: 6,
                        OddCount: 6,
                        Win: 7.2,
                      },
                      {
                        PosVec: [9, 10, 18, 19, 20],
                        Symbol: 5,
                        Count: 5,
                        OddCount: 5,
                        Win: 4.8,
                      },
                      {
                        PosVec: [29, 37, 36, 35, 34, 42, 41, 40, 30, 31],
                        Symbol: 5,
                        Count: 10,
                        OddCount: 10,
                        Win: 36,
                      },
                    ],
                    FillSymbols: [
                      { Col: [2, 4, 2, 4, 4, 1, 5] },
                      { Col: [3, 4, 4, 4, 3, 4, 4, 4] },
                      { Col: [1, 6, 6] },
                      { Col: [5, 6, 2] },
                      { Col: [0, 0, 3, 1] },
                      { Col: [4, 4, 6] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    Eliminate: [
                      { Col: [1, 1, 1, 1, 0, 1, 1, 1] },
                      { Col: [1, 1, 1, 1, 1, 1, 1, 1] },
                      { Col: [0, 0, 1, 1, 1, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 1, 1, 1] },
                      { Col: [0, 0, 1, 1, 1, 1, 0, 0] },
                      { Col: [1, 1, 1, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !0, !0, !0, !0],
                    ComboStageWin: 60,
                    NeedEliminate: !0,
                    EliminateCount: 28,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [5, 2, 4, 2, 4, 4, 1, 5] },
                      { Col: [3, 4, 4, 4, 3, 4, 4, 4] },
                      { Col: [3, 4, 0, 3, 1, 1, 6, 6] },
                      { Col: [3, 5, 6, 3, 4, 5, 6, 2] },
                      { Col: [4, 4, 4, 4, 0, 0, 3, 1] },
                      { Col: [3, 3, 4, 5, 5, 4, 4, 6] },
                      { Col: [4, 3, 4, 4, 4, 3, 2, 3] },
                      { Col: [6, 5, 4, 3, 3, 1, 1, 1] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [2, 10, 9, 17, 11],
                        Symbol: 4,
                        Count: 5,
                        OddCount: 5,
                        Win: 3.6,
                      },
                      {
                        PosVec: [4, 5, 13, 14, 15],
                        Symbol: 4,
                        Count: 5,
                        OddCount: 5,
                        Win: 3.6,
                      },
                      {
                        PosVec: [32, 33, 34, 42, 50, 58, 51, 52, 35],
                        Symbol: 4,
                        Count: 9,
                        OddCount: 9,
                        Win: 24,
                      },
                    ],
                    FillSymbols: [
                      { Col: [2, 2, 2] },
                      { Col: [6, 0, 4, 4, 4, 4] },
                      { Col: [3] },
                      { Col: [] },
                      { Col: [1, 1, 1, 0] },
                      { Col: [4] },
                      { Col: [0, 6, 0] },
                      { Col: [1] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 1, 0, 1, 1, 0, 0] },
                      { Col: [0, 1, 1, 1, 0, 1, 1, 1] },
                      { Col: [0, 1, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [1, 1, 1, 1, 0, 0, 0, 0] },
                      { Col: [0, 0, 1, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 1, 1, 1, 0, 0, 0] },
                      { Col: [0, 0, 1, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !0, !0, !0, !0],
                    ComboStageWin: 31.2,
                    NeedEliminate: !0,
                    EliminateCount: 19,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [5, 2, 2, 1, 5, 2, 2, 2] },
                      { Col: [3, 3, 6, 0, 4, 4, 4, 4] },
                      { Col: [3, 0, 3, 1, 1, 6, 6, 3] },
                      { Col: [3, 5, 6, 3, 4, 5, 6, 2] },
                      { Col: [0, 0, 3, 1, 1, 1, 1, 0] },
                      { Col: [3, 3, 5, 5, 4, 4, 6, 4] },
                      { Col: [4, 3, 3, 2, 3, 0, 6, 0] },
                      { Col: [6, 5, 3, 3, 1, 1, 1, 1] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [40, 41, 49, 50, 58, 59],
                        Symbol: 3,
                        Count: 6,
                        OddCount: 6,
                        Win: 3.6,
                      },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [6, 6] },
                      { Col: [0, 0] },
                      { Col: [2, 2] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [1, 1, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 1, 1, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 1, 1, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !0, !0, !0, !0],
                    ComboStageWin: 3.6,
                    NeedEliminate: !0,
                    EliminateCount: 6,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [5, 2, 2, 1, 5, 2, 2, 2] },
                      { Col: [3, 3, 6, 0, 4, 4, 4, 4] },
                      { Col: [3, 0, 3, 1, 1, 6, 6, 3] },
                      { Col: [3, 5, 6, 3, 4, 5, 6, 2] },
                      { Col: [0, 0, 3, 1, 1, 1, 1, 0] },
                      { Col: [5, 5, 4, 4, 6, 4, 6, 6] },
                      { Col: [4, 2, 3, 0, 6, 0, 0, 0] },
                      { Col: [6, 5, 1, 1, 1, 1, 2, 2] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [0, 8, 16, 24, 25, 9],
                        Symbol: 3,
                        Count: 6,
                        OddCount: 6,
                        Win: 3.6,
                      },
                      {
                        PosVec: [4, 12, 13, 14, 15],
                        Symbol: 4,
                        Count: 5,
                        OddCount: 5,
                        Win: 3.6,
                      },
                      {
                        PosVec: [17, 25, 33, 32, 40, 41],
                        Count: 6,
                        OddCount: 6,
                        Win: 1.8,
                      },
                      {
                        PosVec: [29, 37, 36, 35, 38],
                        Symbol: 1,
                        Count: 5,
                        OddCount: 5,
                        Win: 1.8,
                      },
                      {
                        PosVec: [40, 48, 41, 42, 43],
                        Symbol: 4,
                        Count: 5,
                        OddCount: 5,
                        Win: 3.6,
                      },
                      {
                        PosVec: [57, 58, 59, 60, 61],
                        Symbol: 1,
                        Count: 5,
                        OddCount: 5,
                        Win: 1.8,
                      },
                    ],
                    FillSymbols: [
                      { Col: [0, 3] },
                      { Col: [6, 2, 1, 4, 4, 3] },
                      { Col: [1, 1] },
                      { Col: [2, 0, 0] },
                      { Col: [3, 3, 3, 6, 0, 3] },
                      { Col: [6, 6, 6, 1] },
                      { Col: [2] },
                      { Col: [3, 5, 4, 4, 4] },
                    ],
                    Eliminate: [
                      { Col: [1, 0, 0, 0, 1, 0, 0, 0] },
                      { Col: [1, 1, 0, 0, 1, 1, 1, 1] },
                      { Col: [1, 1, 0, 0, 0, 0, 0, 0] },
                      { Col: [1, 1, 0, 0, 0, 1, 0, 0] },
                      { Col: [1, 1, 0, 1, 1, 1, 1, 0] },
                      { Col: [1, 1, 1, 1, 0, 0, 0, 0] },
                      { Col: [1, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 1, 1, 1, 1, 1, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !0, !0, !0],
                    ComboStageWin: 16.2,
                    NeedEliminate: !0,
                    EliminateCount: 29,
                    LightInfo: {
                      ThreeInfo: [],
                      FiveInfo: [],
                      LightSymbol: [
                        { Col: [7, 2, 2, 1, 7, 2, 2, 2] },
                        { Col: [3, 3, 6, 0, 4, 4, 4, 4] },
                        { Col: [3, 0, 3, 1, 1, 6, 6, 3] },
                        { Col: [3, 7, 6, 3, 4, 7, 6, 2] },
                        { Col: [0, 0, 3, 1, 1, 1, 1, 0] },
                        { Col: [7, 7, 4, 4, 6, 4, 6, 6] },
                        { Col: [4, 2, 3, 0, 6, 0, 0, 0] },
                        { Col: [6, 7, 1, 1, 1, 1, 2, 2] },
                      ],
                      LightType: 2,
                      TwoInfo: 5,
                    },
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [2, 2, 1, 2, 2, 2, 0, 3] },
                      { Col: [6, 0, 6, 2, 1, 4, 4, 3] },
                      { Col: [3, 1, 1, 6, 6, 3, 1, 1] },
                      { Col: [6, 3, 4, 6, 2, 2, 0, 0] },
                      { Col: [3, 0, 3, 3, 3, 6, 0, 3] },
                      { Col: [6, 4, 6, 6, 6, 6, 6, 1] },
                      { Col: [2, 3, 0, 6, 0, 0, 0, 2] },
                      { Col: [6, 2, 2, 3, 5, 4, 4, 4] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [37, 45, 44, 43, 42, 51, 46],
                        Symbol: 6,
                        Count: 7,
                        OddCount: 7,
                        Win: 12,
                      },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [1] },
                      { Col: [6, 1, 1, 0, 6] },
                      { Col: [4] },
                      { Col: [] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 1, 0, 0] },
                      { Col: [0, 0, 1, 1, 1, 1, 1, 0] },
                      { Col: [0, 0, 0, 1, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !0, !0, !0],
                    ComboStageWin: 12,
                    NeedEliminate: !0,
                    EliminateCount: 7,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [2, 2, 1, 2, 2, 2, 0, 3] },
                      { Col: [6, 0, 6, 2, 1, 4, 4, 3] },
                      { Col: [3, 1, 1, 6, 6, 3, 1, 1] },
                      { Col: [6, 3, 4, 6, 2, 2, 0, 0] },
                      { Col: [3, 0, 3, 3, 3, 0, 3, 1] },
                      { Col: [6, 4, 1, 6, 1, 1, 0, 6] },
                      { Col: [2, 3, 0, 0, 0, 0, 2, 4] },
                      { Col: [6, 2, 2, 3, 5, 4, 4, 4] },
                    ],
                    AwardDataVec: [],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !1, !0, !0],
                    LightInfo: {
                      ThreeInfo: [
                        { PosVec: [18, 19, 26, 27], Symbol: 4, Size: 2 },
                        { PosVec: [29, 30, 37, 38], Symbol: 4, Size: 2 },
                      ],
                      FiveInfo: [],
                      LightSymbol: [
                        { Col: [2, 2, 1, 2, 2, 2, 0, 3] },
                        { Col: [6, 0, 6, 2, 1, 4, 4, 3] },
                        { Col: [3, 1, 4, 4, 6, 3, 1, 1] },
                        { Col: [6, 3, 4, 4, 2, 4, 4, 0] },
                        { Col: [3, 0, 3, 3, 3, 4, 4, 1] },
                        { Col: [6, 4, 1, 6, 1, 1, 0, 6] },
                        { Col: [2, 3, 0, 0, 0, 0, 2, 4] },
                        { Col: [6, 2, 2, 3, 5, 4, 4, 4] },
                      ],
                      LightType: 3,
                      TwoInfo: 0,
                    },
                    EliminateCount: 0,
                    ComboStageWin: 0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [2, 2, 1, 2, 2, 2, 0, 3] },
                      { Col: [6, 0, 6, 2, 1, 4, 4, 3] },
                      { Col: [3, 1, 4, 4, 6, 3, 1, 1] },
                      { Col: [6, 3, 4, 4, 2, 4, 4, 0] },
                      { Col: [3, 0, 3, 3, 3, 4, 4, 1] },
                      { Col: [6, 4, 1, 6, 1, 1, 0, 6] },
                      { Col: [2, 3, 0, 0, 0, 0, 2, 4] },
                      { Col: [6, 2, 2, 3, 5, 4, 4, 4] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [9, 17, 25, 33, 34, 26, 18, 19, 27, 35],
                        Count: 10,
                        OddCount: 10,
                        Win: 7.2,
                      },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [6] },
                      { Col: [1, 1, 2] },
                      { Col: [3, 1, 4] },
                      { Col: [0, 2, 5] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 1, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 1, 1, 1, 0, 0, 0, 0] },
                      { Col: [0, 1, 1, 1, 0, 0, 0, 0] },
                      { Col: [0, 1, 1, 1, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !1, !1, !0],
                    ComboStageWin: 7.2,
                    NeedEliminate: !0,
                    EliminateCount: 10,
                    LightInfo: {
                      ThreeInfo: [],
                      FiveInfo: [],
                      LightSymbol: [
                        { Col: [2, 2, 1, 2, 2, 2, 0, 3] },
                        { Col: [6, 0, 6, 2, 1, 4, 4, 3] },
                        { Col: [3, 0, 0, 0, 6, 3, 1, 1] },
                        { Col: [6, 0, 0, 0, 2, 4, 4, 0] },
                        { Col: [3, 0, 0, 0, 3, 4, 4, 1] },
                        { Col: [6, 4, 1, 6, 1, 1, 0, 6] },
                        { Col: [2, 3, 0, 0, 0, 0, 2, 4] },
                        { Col: [6, 2, 2, 3, 5, 4, 4, 4] },
                      ],
                      LightType: 4,
                      FourInfo: {
                        PosVec: [17, 18, 19, 25, 26, 27, 33, 34, 35],
                        Size: 3,
                        Symbol: 0,
                      },
                      TwoInfo: 0,
                    },
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [2, 2, 1, 2, 2, 2, 0, 3] },
                      { Col: [6, 6, 2, 1, 4, 4, 3, 6] },
                      { Col: [3, 6, 3, 1, 1, 1, 1, 2] },
                      { Col: [6, 2, 4, 4, 0, 3, 1, 4] },
                      { Col: [3, 3, 4, 4, 1, 0, 2, 5] },
                      { Col: [6, 4, 1, 6, 1, 1, 0, 6] },
                      { Col: [2, 3, 0, 0, 0, 0, 2, 4] },
                      { Col: [6, 2, 2, 3, 5, 4, 4, 4] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [11, 19, 20, 21, 22, 30],
                        Symbol: 1,
                        Count: 6,
                        OddCount: 6,
                        Win: 2.4,
                      },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [0] },
                      { Col: [0, 6, 3, 0] },
                      { Col: [4] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 1, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 1, 1, 1, 1, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 1, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !1, !1, !0],
                    ComboStageWin: 2.4,
                    NeedEliminate: !0,
                    EliminateCount: 6,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [2, 2, 1, 2, 2, 2, 0, 3] },
                      { Col: [6, 6, 2, 4, 4, 3, 6, 0] },
                      { Col: [3, 6, 3, 2, 0, 6, 3, 0] },
                      { Col: [6, 2, 4, 4, 0, 3, 4, 4] },
                      { Col: [3, 3, 4, 4, 1, 0, 2, 5] },
                      { Col: [6, 4, 1, 6, 1, 1, 0, 6] },
                      { Col: [2, 3, 0, 0, 0, 0, 2, 4] },
                      { Col: [6, 2, 2, 3, 5, 4, 4, 4] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [0, 1, 9, 10, 2, 3, 4, 5],
                        Symbol: 2,
                        Count: 8,
                        OddCount: 8,
                        Win: 7.2,
                      },
                      {
                        PosVec: [11, 19, 27, 26, 34, 35, 36, 37, 12],
                        Symbol: 4,
                        Count: 9,
                        OddCount: 9,
                        Win: 24,
                      },
                      {
                        PosVec: [19, 20, 28, 36, 37],
                        Count: 5,
                        OddCount: 5,
                        Win: 1.2,
                      },
                    ],
                    FillSymbols: [
                      { Col: [5, 1, 3, 3, 3, 5] },
                      { Col: [3, 1, 1, 1] },
                      { Col: [2, 2] },
                      { Col: [0, 4, 6] },
                      { Col: [0, 4, 4, 1] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    Eliminate: [
                      { Col: [1, 1, 1, 1, 1, 1, 0, 0] },
                      { Col: [0, 1, 1, 1, 1, 0, 0, 0] },
                      { Col: [0, 0, 0, 1, 1, 0, 0, 0] },
                      { Col: [0, 0, 1, 1, 1, 0, 0, 0] },
                      { Col: [0, 0, 1, 1, 1, 1, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !1, !1, !1],
                    ComboStageWin: 32.4,
                    NeedEliminate: !0,
                    EliminateCount: 19,
                    LightInfo: {
                      ThreeInfo: [],
                      FiveInfo: [2, 36, 41, 37, 9, 19],
                      LightSymbol: [
                        { Col: [2, 2, 7, 2, 2, 2, 0, 3] },
                        { Col: [6, 7, 2, 4, 4, 3, 6, 0] },
                        { Col: [3, 6, 3, 7, 0, 6, 3, 0] },
                        { Col: [6, 2, 4, 4, 0, 3, 4, 4] },
                        { Col: [3, 3, 4, 4, 7, 7, 2, 5] },
                        { Col: [6, 7, 1, 6, 1, 1, 0, 6] },
                        { Col: [2, 3, 0, 0, 0, 0, 2, 4] },
                        { Col: [6, 2, 2, 3, 5, 4, 4, 4] },
                      ],
                      LightType: 5,
                      TwoInfo: 0,
                    },
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [0, 3, 5, 1, 3, 3, 3, 5] },
                      { Col: [6, 3, 6, 0, 3, 1, 1, 1] },
                      { Col: [3, 6, 3, 6, 3, 0, 2, 2] },
                      { Col: [6, 2, 3, 4, 4, 0, 4, 6] },
                      { Col: [3, 3, 2, 5, 0, 4, 4, 1] },
                      { Col: [6, 7, 1, 6, 1, 1, 0, 6] },
                      { Col: [2, 3, 0, 0, 0, 0, 2, 4] },
                      { Col: [6, 2, 2, 3, 5, 4, 4, 4] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [4, 12, 20, 5, 6],
                        Symbol: 3,
                        Count: 5,
                        OddCount: 5,
                        Win: 3,
                      },
                    ],
                    FillSymbols: [
                      { Col: [1, 1, 1] },
                      { Col: [5] },
                      { Col: [1] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 1, 1, 1, 0] },
                      { Col: [0, 0, 0, 0, 1, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 1, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !1, !1, !1],
                    ComboStageWin: 3,
                    NeedEliminate: !0,
                    EliminateCount: 5,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [0, 3, 5, 1, 5, 1, 1, 1] },
                      { Col: [6, 3, 6, 0, 1, 1, 1, 5] },
                      { Col: [3, 6, 3, 6, 0, 2, 2, 1] },
                      { Col: [6, 2, 3, 4, 4, 0, 4, 6] },
                      { Col: [3, 3, 2, 5, 0, 4, 4, 1] },
                      { Col: [6, 7, 1, 6, 1, 1, 0, 6] },
                      { Col: [2, 3, 0, 0, 0, 0, 2, 4] },
                      { Col: [6, 2, 2, 3, 5, 4, 4, 4] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [5, 13, 12, 14, 6, 7],
                        Symbol: 1,
                        Count: 6,
                        OddCount: 6,
                        Win: 2.4,
                      },
                    ],
                    FillSymbols: [
                      { Col: [5, 1, 1] },
                      { Col: [1, 5, 6] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 0, 1, 1, 1] },
                      { Col: [0, 0, 0, 0, 1, 1, 1, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !1, !1, !1],
                    ComboStageWin: 2.4,
                    NeedEliminate: !0,
                    EliminateCount: 6,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [0, 3, 5, 1, 5, 5, 1, 1] },
                      { Col: [6, 3, 6, 0, 5, 1, 5, 6] },
                      { Col: [3, 6, 3, 6, 0, 2, 2, 1] },
                      { Col: [6, 2, 3, 4, 4, 0, 4, 6] },
                      { Col: [3, 3, 2, 5, 0, 4, 4, 1] },
                      { Col: [6, 7, 1, 6, 1, 1, 0, 6] },
                      { Col: [2, 3, 0, 0, 0, 0, 2, 4] },
                      { Col: [6, 2, 2, 3, 5, 4, 4, 4] },
                    ],
                    AwardDataVec: [],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !1, !1, !1],
                    EliminateCount: 0,
                    ComboStageWin: 0,
                  },
                ],
                LightPos: [-1, -1, -1, -1, -1, -1],
                RoundWin: 170.4,
                Mult: 4,
                TotalEliminateCount: 167,
                LevelCount: 165,
                Level: 2,
                FreeTotalRound: 2,
                AwardTypeFlag: 5,
              },
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [0, 3, 5, 1, 5, 5, 1, 1] },
                      { Col: [6, 3, 6, 0, 5, 1, 5, 6] },
                      { Col: [3, 6, 3, 6, 0, 2, 2, 1] },
                      { Col: [6, 2, 3, 4, 4, 0, 4, 6] },
                      { Col: [3, 3, 2, 5, 0, 4, 4, 1] },
                      { Col: [6, 7, 1, 6, 1, 1, 0, 6] },
                      { Col: [2, 3, 0, 0, 0, 0, 2, 4] },
                      { Col: [6, 2, 2, 3, 5, 4, 4, 4] },
                    ],
                    AwardDataVec: [],
                    FillSymbols: [
                      { Col: [3, 3, 0, 6] },
                      { Col: [0, 0] },
                      { Col: [0, 0, 4, 6] },
                      { Col: [4, 2] },
                      { Col: [5, 5, 5] },
                      { Col: [6, 6, 6, 5] },
                      { Col: [3, 6, 2, 6, 5, 4] },
                      { Col: [2, 0] },
                    ],
                    Eliminate: [
                      { Col: [1, 0, 0, 1, 0, 0, 1, 1] },
                      { Col: [0, 0, 0, 1, 0, 1, 0, 0] },
                      { Col: [0, 0, 0, 0, 1, 1, 1, 1] },
                      { Col: [0, 1, 0, 0, 0, 1, 0, 0] },
                      { Col: [0, 0, 1, 0, 1, 0, 0, 1] },
                      { Col: [0, 0, 1, 0, 1, 1, 1, 0] },
                      { Col: [1, 0, 1, 1, 1, 1, 1, 0] },
                      { Col: [0, 1, 1, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !0, !0, !0, !0],
                    NeedEliminate: !0,
                    EliminateCount: 27,
                    LightInfo: {
                      ThreeInfo: [],
                      FiveInfo: [],
                      LightSymbol: [
                        { Col: [8, 3, 5, 8, 5, 5, 8, 8] },
                        { Col: [6, 3, 6, 8, 5, 8, 5, 6] },
                        { Col: [3, 6, 3, 6, 8, 8, 8, 8] },
                        { Col: [6, 8, 3, 4, 4, 8, 4, 6] },
                        { Col: [3, 3, 8, 5, 8, 4, 4, 8] },
                        { Col: [6, 7, 8, 6, 8, 8, 8, 6] },
                        { Col: [8, 3, 8, 8, 8, 8, 8, 4] },
                        { Col: [6, 8, 8, 3, 5, 4, 4, 4] },
                      ],
                      LightType: 1,
                      TwoInfo: 0,
                    },
                    ComboStageWin: 0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [3, 5, 5, 5, 3, 3, 0, 6] },
                      { Col: [6, 3, 6, 5, 5, 6, 0, 0] },
                      { Col: [3, 6, 3, 6, 0, 0, 4, 6] },
                      { Col: [6, 3, 4, 4, 4, 6, 4, 2] },
                      { Col: [3, 3, 5, 4, 4, 5, 5, 5] },
                      { Col: [6, 7, 6, 6, 6, 6, 6, 5] },
                      { Col: [3, 4, 3, 6, 2, 6, 5, 4] },
                      { Col: [6, 3, 5, 4, 4, 4, 2, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [1, 2, 3, 11, 12],
                        Symbol: 5,
                        Count: 5,
                        OddCount: 5,
                        Win: 7.2,
                      },
                      {
                        PosVec: [26, 27, 35, 36, 28],
                        Symbol: 4,
                        Count: 5,
                        OddCount: 5,
                        Win: 5.4,
                      },
                      {
                        PosVec: [40, 41, 42, 43, 51, 44, 45, 53, 46],
                        Symbol: 6,
                        Count: 9,
                        OddCount: 9,
                        Win: 72,
                      },
                    ],
                    FillSymbols: [
                      { Col: [2, 6, 0] },
                      { Col: [5, 5] },
                      { Col: [] },
                      { Col: [2, 2, 6] },
                      { Col: [6, 6] },
                      { Col: [0, 0, 0, 0, 3, 3, 3] },
                      { Col: [3, 3] },
                      { Col: [] },
                    ],
                    Eliminate: [
                      { Col: [0, 1, 1, 1, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 1, 1, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 1, 1, 1, 0, 0, 0] },
                      { Col: [0, 0, 0, 1, 1, 0, 0, 0] },
                      { Col: [1, 1, 1, 1, 1, 1, 1, 0] },
                      { Col: [0, 0, 0, 1, 0, 1, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !0, !0, !0, !0],
                    ComboStageWin: 84.6,
                    NeedEliminate: !0,
                    EliminateCount: 19,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [3, 3, 3, 0, 6, 2, 6, 0] },
                      { Col: [6, 3, 6, 6, 0, 0, 5, 5] },
                      { Col: [3, 6, 3, 6, 0, 0, 4, 6] },
                      { Col: [6, 3, 6, 4, 2, 2, 2, 6] },
                      { Col: [3, 3, 5, 5, 5, 5, 6, 6] },
                      { Col: [5, 0, 0, 0, 0, 3, 3, 3] },
                      { Col: [3, 4, 3, 2, 5, 4, 3, 3] },
                      { Col: [6, 3, 5, 4, 4, 4, 2, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [45, 46, 54, 55, 47],
                        Symbol: 3,
                        Count: 5,
                        OddCount: 5,
                        Win: 4.5,
                      },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [3, 1, 1] },
                      { Col: [6, 2] },
                      { Col: [] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 1, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !0, !0, !0, !0],
                    ComboStageWin: 4.5,
                    NeedEliminate: !0,
                    EliminateCount: 5,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [3, 3, 3, 0, 6, 2, 6, 0] },
                      { Col: [6, 3, 6, 6, 0, 0, 5, 5] },
                      { Col: [3, 6, 3, 6, 0, 0, 4, 6] },
                      { Col: [6, 3, 6, 4, 2, 2, 2, 6] },
                      { Col: [3, 3, 5, 5, 5, 5, 6, 6] },
                      { Col: [5, 0, 0, 0, 0, 3, 1, 1] },
                      { Col: [3, 4, 3, 2, 5, 4, 6, 2] },
                      { Col: [6, 3, 5, 4, 4, 4, 2, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [23, 31, 39, 38, 46, 54, 47],
                        Symbol: 6,
                        Count: 7,
                        OddCount: 7,
                        Win: 18,
                      },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [3] },
                      { Col: [1] },
                      { Col: [0, 6] },
                      { Col: [4, 3] },
                      { Col: [2] },
                      { Col: [] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 1, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !0, !0, !0],
                    ComboStageWin: 18,
                    NeedEliminate: !0,
                    EliminateCount: 7,
                    LightInfo: {
                      ThreeInfo: [],
                      FiveInfo: [],
                      LightSymbol: [
                        { Col: [3, 3, 3, 0, 6, 2, 6, 0] },
                        { Col: [6, 3, 6, 6, 0, 0, 5, 5] },
                        { Col: [3, 6, 3, 6, 0, 0, 4, 6] },
                        { Col: [6, 3, 6, 4, 2, 2, 2, 6] },
                        { Col: [3, 3, 5, 5, 5, 5, 6, 6] },
                        { Col: [5, 0, 0, 0, 0, 3, 7, 7] },
                        { Col: [3, 4, 3, 2, 5, 4, 6, 2] },
                        { Col: [6, 3, 5, 4, 4, 4, 2, 0] },
                      ],
                      LightType: 2,
                      TwoInfo: 1,
                    },
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [3, 3, 3, 0, 6, 2, 6, 0] },
                      { Col: [6, 3, 6, 6, 0, 0, 5, 5] },
                      { Col: [3, 6, 3, 6, 0, 0, 4, 3] },
                      { Col: [6, 3, 6, 4, 2, 2, 2, 1] },
                      { Col: [3, 3, 5, 5, 5, 5, 0, 6] },
                      { Col: [5, 0, 0, 0, 0, 3, 4, 3] },
                      { Col: [3, 4, 3, 2, 5, 4, 2, 2] },
                      { Col: [6, 3, 5, 4, 4, 4, 2, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [0, 1, 9, 2, 3, 11, 12, 4],
                        Symbol: 3,
                        Count: 8,
                        OddCount: 8,
                        Win: 14.4,
                      },
                      {
                        PosVec: [48, 56, 57, 49, 50],
                        Symbol: 3,
                        Count: 5,
                        OddCount: 5,
                        Win: 4.5,
                      },
                    ],
                    FillSymbols: [
                      { Col: [2, 4, 3, 3, 3] },
                      { Col: [1, 5, 5] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [0, 1, 1] },
                      { Col: [4, 2] },
                    ],
                    Eliminate: [
                      { Col: [1, 1, 1, 1, 1, 0, 0, 0] },
                      { Col: [0, 1, 0, 1, 1, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [1, 1, 1, 0, 0, 0, 0, 0] },
                      { Col: [1, 1, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !1, !0, !0],
                    ComboStageWin: 18.9,
                    NeedEliminate: !0,
                    EliminateCount: 13,
                    LightInfo: {
                      ThreeInfo: [
                        { PosVec: [3, 4, 11, 12], Symbol: 3, Size: 2 },
                        { PosVec: [48, 49, 56, 57], Symbol: 3, Size: 2 },
                      ],
                      FiveInfo: [],
                      LightSymbol: [
                        { Col: [3, 3, 3, 3, 3, 2, 6, 0] },
                        { Col: [6, 3, 6, 3, 3, 0, 5, 5] },
                        { Col: [3, 6, 3, 6, 0, 0, 4, 3] },
                        { Col: [6, 3, 6, 4, 2, 2, 2, 1] },
                        { Col: [3, 3, 5, 5, 5, 5, 0, 6] },
                        { Col: [5, 0, 0, 0, 0, 3, 4, 3] },
                        { Col: [3, 3, 3, 2, 5, 4, 2, 2] },
                        { Col: [3, 3, 5, 4, 4, 4, 2, 0] },
                      ],
                      LightType: 3,
                      TwoInfo: 0,
                    },
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [2, 6, 0, 2, 4, 3, 3, 3] },
                      { Col: [6, 6, 0, 5, 5, 1, 5, 5] },
                      { Col: [3, 6, 3, 6, 0, 0, 4, 3] },
                      { Col: [6, 3, 6, 4, 2, 2, 2, 1] },
                      { Col: [3, 3, 5, 5, 5, 5, 0, 6] },
                      { Col: [5, 0, 0, 0, 0, 3, 4, 3] },
                      { Col: [2, 5, 4, 2, 2, 0, 1, 1] },
                      { Col: [5, 4, 4, 4, 2, 0, 4, 2] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [31, 39, 38, 37, 45, 53, 54, 46, 47, 55],
                        Symbol: 1,
                        Count: 10,
                        OddCount: 10,
                        Win: 18,
                      },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [1] },
                      { Col: [3, 0, 0] },
                      { Col: [5, 3, 6] },
                      { Col: [2, 0, 2] },
                      { Col: [] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 1] },
                      { Col: [0, 0, 0, 0, 0, 1, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 1, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 1, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !1, !1, !0],
                    ComboStageWin: 18,
                    NeedEliminate: !0,
                    EliminateCount: 10,
                    LightInfo: {
                      ThreeInfo: [],
                      FiveInfo: [],
                      LightSymbol: [
                        { Col: [2, 6, 0, 2, 4, 3, 3, 3] },
                        { Col: [6, 6, 0, 5, 5, 1, 5, 5] },
                        { Col: [3, 6, 3, 6, 0, 0, 4, 3] },
                        { Col: [6, 3, 6, 4, 2, 2, 2, 1] },
                        { Col: [3, 3, 5, 5, 5, 1, 1, 1] },
                        { Col: [5, 0, 0, 0, 0, 1, 1, 1] },
                        { Col: [2, 5, 4, 2, 2, 1, 1, 1] },
                        { Col: [5, 4, 4, 4, 2, 0, 4, 2] },
                      ],
                      LightType: 4,
                      FourInfo: {
                        PosVec: [37, 38, 39, 45, 46, 47, 53, 54, 55],
                        Symbol: 1,
                        Size: 3,
                      },
                      TwoInfo: 0,
                    },
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [2, 6, 0, 2, 4, 3, 3, 3] },
                      { Col: [6, 6, 0, 5, 5, 1, 5, 5] },
                      { Col: [3, 6, 3, 6, 0, 0, 4, 3] },
                      { Col: [6, 3, 6, 4, 2, 2, 2, 1] },
                      { Col: [3, 3, 5, 5, 5, 3, 0, 0] },
                      { Col: [5, 0, 0, 0, 0, 5, 3, 6] },
                      { Col: [2, 5, 4, 2, 2, 2, 0, 2] },
                      { Col: [5, 4, 4, 4, 2, 0, 4, 2] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [43, 51, 52, 60, 53],
                        Symbol: 2,
                        Count: 5,
                        OddCount: 5,
                        Win: 3.6,
                      },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [3] },
                      { Col: [2, 2, 2] },
                      { Col: [5] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 1, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 1, 1, 1, 0, 0] },
                      { Col: [0, 0, 0, 0, 1, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !1, !1, !1],
                    ComboStageWin: 3.6,
                    NeedEliminate: !0,
                    EliminateCount: 5,
                    LightInfo: {
                      ThreeInfo: [],
                      FiveInfo: [47, 48, 39, 43, 5],
                      LightSymbol: [
                        { Col: [2, 6, 0, 2, 4, 7, 3, 3] },
                        { Col: [6, 6, 0, 5, 5, 1, 5, 5] },
                        { Col: [3, 6, 3, 6, 0, 0, 4, 3] },
                        { Col: [6, 3, 6, 4, 2, 2, 2, 1] },
                        { Col: [3, 3, 5, 5, 5, 3, 0, 7] },
                        { Col: [5, 0, 0, 7, 0, 5, 3, 7] },
                        { Col: [7, 5, 4, 2, 2, 2, 0, 2] },
                        { Col: [5, 4, 4, 4, 2, 0, 4, 2] },
                      ],
                      LightType: 5,
                      TwoInfo: 0,
                    },
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [2, 6, 0, 2, 4, 7, 3, 3] },
                      { Col: [6, 6, 0, 5, 5, 1, 5, 5] },
                      { Col: [3, 6, 3, 6, 0, 0, 4, 3] },
                      { Col: [6, 3, 6, 4, 2, 2, 2, 1] },
                      { Col: [3, 3, 5, 5, 5, 3, 0, 7] },
                      { Col: [5, 0, 0, 0, 5, 3, 7, 3] },
                      { Col: [7, 5, 4, 0, 2, 2, 2, 2] },
                      { Col: [5, 4, 4, 4, 0, 4, 2, 5] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [37, 45, 46, 47, 39],
                        Symbol: 3,
                        Count: 5,
                        OddCount: 5,
                        Win: 4.5,
                      },
                      {
                        PosVec: [46, 54, 53, 52, 62, 55],
                        Symbol: 2,
                        Count: 6,
                        OddCount: 6,
                        Win: 4.5,
                      },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [5, 5] },
                      { Col: [5, 3, 0] },
                      { Col: [1, 1, 1, 6] },
                      { Col: [3] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 1, 0, 1] },
                      { Col: [0, 0, 0, 0, 0, 1, 1, 1] },
                      { Col: [0, 0, 0, 0, 1, 1, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 1, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !1, !1, !1],
                    ComboStageWin: 9,
                    NeedEliminate: !0,
                    EliminateCount: 10,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [2, 6, 0, 2, 4, 7, 3, 3] },
                      { Col: [6, 6, 0, 5, 5, 1, 5, 5] },
                      { Col: [3, 6, 3, 6, 0, 0, 4, 3] },
                      { Col: [6, 3, 6, 4, 2, 2, 2, 1] },
                      { Col: [3, 3, 5, 5, 5, 0, 5, 5] },
                      { Col: [5, 0, 0, 0, 5, 5, 3, 0] },
                      { Col: [7, 5, 4, 0, 1, 1, 1, 6] },
                      { Col: [5, 4, 4, 4, 0, 4, 5, 3] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [34, 35, 36, 44, 45],
                        Symbol: 5,
                        Count: 5,
                        OddCount: 5,
                        Win: 7.2,
                      },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [3, 1, 3] },
                      { Col: [0, 3] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 1, 1, 1, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 1, 1, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !1, !1, !1],
                    ComboStageWin: 7.2,
                    NeedEliminate: !0,
                    EliminateCount: 5,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [2, 6, 0, 2, 4, 7, 3, 3] },
                      { Col: [6, 6, 0, 5, 5, 1, 5, 5] },
                      { Col: [3, 6, 3, 6, 0, 0, 4, 3] },
                      { Col: [6, 3, 6, 4, 2, 2, 2, 1] },
                      { Col: [3, 3, 0, 5, 5, 3, 1, 3] },
                      { Col: [5, 0, 0, 0, 3, 0, 0, 3] },
                      { Col: [7, 5, 4, 0, 1, 1, 1, 6] },
                      { Col: [5, 4, 4, 4, 0, 4, 5, 3] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [34, 42, 41, 43, 51],
                        Count: 5,
                        OddCount: 5,
                        Win: 1.8,
                      },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [4] },
                      { Col: [1, 1, 2] },
                      { Col: [1] },
                      { Col: [] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 1, 0, 0, 0, 0, 0] },
                      { Col: [0, 1, 1, 1, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 1, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !1, !1, !1],
                    ComboStageWin: 1.8,
                    NeedEliminate: !0,
                    EliminateCount: 5,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [2, 6, 0, 2, 4, 7, 3, 3] },
                      { Col: [6, 6, 0, 5, 5, 1, 5, 5] },
                      { Col: [3, 6, 3, 6, 0, 0, 4, 3] },
                      { Col: [6, 3, 6, 4, 2, 2, 2, 1] },
                      { Col: [3, 3, 5, 5, 3, 1, 3, 4] },
                      { Col: [5, 3, 0, 0, 3, 1, 1, 2] },
                      { Col: [7, 5, 4, 1, 1, 1, 6, 1] },
                      { Col: [5, 4, 4, 4, 0, 4, 5, 3] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [37, 45, 53, 52, 51, 46],
                        Symbol: 1,
                        Count: 6,
                        OddCount: 6,
                        Win: 3.6,
                      },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [5] },
                      { Col: [3, 4] },
                      { Col: [5, 2, 5] },
                      { Col: [] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 1, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 1, 1, 0] },
                      { Col: [0, 0, 0, 1, 1, 1, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !1, !1, !1],
                    ComboStageWin: 3.6,
                    NeedEliminate: !0,
                    EliminateCount: 6,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [2, 6, 0, 2, 4, 7, 3, 3] },
                      { Col: [6, 6, 0, 5, 5, 1, 5, 5] },
                      { Col: [3, 6, 3, 6, 0, 0, 4, 3] },
                      { Col: [6, 3, 6, 4, 2, 2, 2, 1] },
                      { Col: [3, 3, 5, 5, 3, 3, 4, 5] },
                      { Col: [5, 3, 0, 0, 3, 2, 3, 4] },
                      { Col: [7, 5, 4, 6, 1, 5, 2, 5] },
                      { Col: [5, 4, 4, 4, 0, 4, 5, 3] },
                    ],
                    AwardDataVec: [],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    Eliminate: [
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0, 0] },
                    ],
                    LightGet: [!1, !1, !1, !1, !1, !1],
                    LightShow: [!1, !1, !1, !1, !1, !1],
                    EliminateCount: 0,
                    ComboStageWin: 0,
                  },
                ],
                LightPos: [-1, -1, -1, -1, -1, -1],
                RoundWin: 169.2,
                Mult: 6,
                TotalEliminateCount: 112,
                LevelCount: 170,
                Level: 3,
                FreeTotalRound: 3,
                AwardTypeFlag: 13,
              },
            ],
            FreeTotalWin: 425.4,
            TotalWin: 457.35,
            RTP: 0.973,
          }),
          (FeaturesAck.TEST = void 0),
          cclegacy._RF.pop();
        var CjsLoader = (function () {
            function e() {
              (this._registry = {}), (this._moduleCache = {});
            }
            var t = e.prototype;
            return (
              (t.define = function (e, t, o) {
                this._registry[e] = { factory: t, resolveMap: o };
              }),
              (t.require = function (e) {
                return this._require(e);
              }),
              (t.throwInvalidWrapper = function (e, t) {
                throw new Error(
                  "Module '" +
                    e +
                    "' imported from '" +
                    t +
                    "' is expected be an ESM-wrapped CommonJS module but it doesn't."
                );
              }),
              (t._require = function (e, t) {
                var o = this._moduleCache[e];
                if (o) return o.exports;
                var n = { id: e, exports: {} };
                return (
                  (this._moduleCache[e] = n),
                  this._tryModuleLoad(n, e),
                  n.exports
                );
              }),
              (t._resolve = function (e, t) {
                return (
                  this._resolveFromInfos(e, t) || this._throwUnresolved(e, t)
                );
              }),
              (t._resolveFromInfos = function (e, t) {
                var o, n;
                return e in cjsInfos
                  ? e
                  : t &&
                    null !=
                      (o =
                        null == (n = cjsInfos[t]) ? void 0 : n.resolveCache[e])
                  ? o
                  : void 0;
              }),
              (t._tryModuleLoad = function (e, t) {
                var o = !0;
                try {
                  this._load(e, t), (o = !1);
                } finally {
                  o && delete this._moduleCache[t];
                }
              }),
              (t._load = function (e, t) {
                var o = this._loadWrapper(t),
                  n = o.factory,
                  i = o.resolveMap,
                  r = this._createRequire(e),
                  a = i
                    ? this._createRequireWithResolveMap(
                        "function" == typeof i ? i() : i,
                        r
                      )
                    : r;
                n(e.exports, a, e);
              }),
              (t._loadWrapper = function (e) {
                return e in this._registry
                  ? this._registry[e]
                  : this._loadHostProvidedModules(e);
              }),
              (t._loadHostProvidedModules = function (e) {
                return {
                  factory: function (t, o, n) {
                    if ("undefined" == typeof require)
                      throw new Error(
                        "Current environment does not provide a require() for requiring '" +
                          e +
                          "'."
                      );
                    try {
                      n.exports = require(e);
                    } catch (t) {
                      throw new Error(
                        "Exception thrown when calling host defined require('" +
                          e +
                          "').",
                        { cause: t }
                      );
                    }
                  },
                };
              }),
              (t._createRequire = function (e) {
                var t = this;
                return function (o) {
                  return t._require(o, e);
                };
              }),
              (t._createRequireWithResolveMap = function (e, t) {
                return function (o) {
                  var n = e[o];
                  if (n) return t(n);
                  throw new Error("Unresolved specifier " + o);
                };
              }),
              (t._throwUnresolved = function (e, t) {
                throw new Error(
                  "Unable to resolve " + e + " from " + parent + "."
                );
              }),
              e
            );
          })(),
          loader = new CjsLoader(),
          __cjsMetaURL =
            "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js";
        loader.define(
          __cjsMetaURL,
          function (e, t, o, n, i) {
            (o.exports = function (e, t) {
              var o = new Array(arguments.length - 1),
                n = 0,
                i = 2,
                r = !0;
              for (; i < arguments.length; ) o[n++] = arguments[i++];
              return new Promise(function (i, a) {
                o[n] = function (e) {
                  if (r)
                    if (((r = !1), e)) a(e);
                    else {
                      for (
                        var t = new Array(arguments.length - 1), o = 0;
                        o < t.length;

                      )
                        t[o++] = arguments[o];
                      i.apply(null, t);
                    }
                };
                try {
                  e.apply(t || null, o);
                } catch (e) {
                  r && ((r = !1), a(e));
                }
              });
            }),
              o.exports;
          },
          {}
        );
        var __cjsMetaURL$1 =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js";
        loader.define(
          __cjsMetaURL$1,
          function (e, t, o, n, i) {
            var r = e;
            r.length = function (e) {
              var t = e.length;
              if (!t) return 0;
              for (var o = 0; --t % 4 > 1 && "=" === e.charAt(t); ) ++o;
              return Math.ceil(3 * e.length) / 4 - o;
            };
            for (var a = new Array(64), s = new Array(123), l = 0; l < 64; )
              s[
                (a[l] =
                  l < 26
                    ? l + 65
                    : l < 52
                    ? l + 71
                    : l < 62
                    ? l - 4
                    : (l - 59) | 43)
              ] = l++;
            r.encode = function (e, t, o) {
              for (var n, i = null, r = [], s = 0, l = 0; t < o; ) {
                var c = e[t++];
                switch (l) {
                  case 0:
                    (r[s++] = a[c >> 2]), (n = (3 & c) << 4), (l = 1);
                    break;
                  case 1:
                    (r[s++] = a[n | (c >> 4)]), (n = (15 & c) << 2), (l = 2);
                    break;
                  case 2:
                    (r[s++] = a[n | (c >> 6)]), (r[s++] = a[63 & c]), (l = 0);
                }
                s > 8191 &&
                  ((i || (i = [])).push(String.fromCharCode.apply(String, r)),
                  (s = 0));
              }
              return (
                l && ((r[s++] = a[n]), (r[s++] = 61), 1 === l && (r[s++] = 61)),
                i
                  ? (s &&
                      i.push(String.fromCharCode.apply(String, r.slice(0, s))),
                    i.join(""))
                  : String.fromCharCode.apply(String, r.slice(0, s))
              );
            };
            var c = "invalid encoding";
            (r.decode = function (e, t, o) {
              for (var n, i = o, r = 0, a = 0; a < e.length; ) {
                var l = e.charCodeAt(a++);
                if (61 === l && r > 1) break;
                if (void 0 === (l = s[l])) throw Error(c);
                switch (r) {
                  case 0:
                    (n = l), (r = 1);
                    break;
                  case 1:
                    (t[o++] = (n << 2) | ((48 & l) >> 4)), (n = l), (r = 2);
                    break;
                  case 2:
                    (t[o++] = ((15 & n) << 4) | ((60 & l) >> 2)),
                      (n = l),
                      (r = 3);
                    break;
                  case 3:
                    (t[o++] = ((3 & n) << 6) | l), (r = 0);
                }
              }
              if (1 === r) throw Error(c);
              return o - i;
            }),
              (r.test = function (e) {
                return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(
                  e
                );
              }),
              o.exports;
          },
          {}
        );
        var __cjsMetaURL$2 =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js";
        loader.define(
          __cjsMetaURL$2,
          function (e, t, o, n, i) {
            function r() {
              this._listeners = {};
            }
            (o.exports = r),
              (r.prototype.on = function (e, t, o) {
                return (
                  (this._listeners[e] || (this._listeners[e] = [])).push({
                    fn: t,
                    ctx: o || this,
                  }),
                  this
                );
              }),
              (r.prototype.off = function (e, t) {
                if (void 0 === e) this._listeners = {};
                else if (void 0 === t) this._listeners[e] = [];
                else
                  for (var o = this._listeners[e], n = 0; n < o.length; )
                    o[n].fn === t ? o.splice(n, 1) : ++n;
                return this;
              }),
              (r.prototype.emit = function (e) {
                var t = this._listeners[e];
                if (t) {
                  for (var o = [], n = 1; n < arguments.length; )
                    o.push(arguments[n++]);
                  for (n = 0; n < t.length; ) t[n].fn.apply(t[n++].ctx, o);
                }
                return this;
              }),
              o.exports;
          },
          {}
        );
        var __cjsMetaURL$3 =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/@protobufjs/float/index.js";
        loader.define(
          __cjsMetaURL$3,
          function (e, t, o, n, i) {
            function r(e) {
              return (
                "undefined" != typeof Float32Array
                  ? (function () {
                      var t = new Float32Array([-0]),
                        o = new Uint8Array(t.buffer),
                        n = 128 === o[3];
                      function i(e, n, i) {
                        (t[0] = e),
                          (n[i] = o[0]),
                          (n[i + 1] = o[1]),
                          (n[i + 2] = o[2]),
                          (n[i + 3] = o[3]);
                      }
                      function r(e, n, i) {
                        (t[0] = e),
                          (n[i] = o[3]),
                          (n[i + 1] = o[2]),
                          (n[i + 2] = o[1]),
                          (n[i + 3] = o[0]);
                      }
                      function a(e, n) {
                        return (
                          (o[0] = e[n]),
                          (o[1] = e[n + 1]),
                          (o[2] = e[n + 2]),
                          (o[3] = e[n + 3]),
                          t[0]
                        );
                      }
                      function s(e, n) {
                        return (
                          (o[3] = e[n]),
                          (o[2] = e[n + 1]),
                          (o[1] = e[n + 2]),
                          (o[0] = e[n + 3]),
                          t[0]
                        );
                      }
                      (e.writeFloatLE = n ? i : r),
                        (e.writeFloatBE = n ? r : i),
                        (e.readFloatLE = n ? a : s),
                        (e.readFloatBE = n ? s : a);
                    })()
                  : (function () {
                      function t(e, t, o, n) {
                        var i = t < 0 ? 1 : 0;
                        if ((i && (t = -t), 0 === t))
                          e(1 / t > 0 ? 0 : 2147483648, o, n);
                        else if (isNaN(t)) e(2143289344, o, n);
                        else if (t > 34028234663852886e22)
                          e(((i << 31) | 2139095040) >>> 0, o, n);
                        else if (t < 11754943508222875e-54)
                          e(
                            ((i << 31) |
                              Math.round(t / 1401298464324817e-60)) >>>
                              0,
                            o,
                            n
                          );
                        else {
                          var r = Math.floor(Math.log(t) / Math.LN2);
                          e(
                            ((i << 31) |
                              ((r + 127) << 23) |
                              (8388607 &
                                Math.round(t * Math.pow(2, -r) * 8388608))) >>>
                              0,
                            o,
                            n
                          );
                        }
                      }
                      function o(e, t, o) {
                        var n = e(t, o),
                          i = 2 * (n >> 31) + 1,
                          r = (n >>> 23) & 255,
                          a = 8388607 & n;
                        return 255 === r
                          ? a
                            ? NaN
                            : i * (1 / 0)
                          : 0 === r
                          ? 1401298464324817e-60 * i * a
                          : i * Math.pow(2, r - 150) * (a + 8388608);
                      }
                      (e.writeFloatLE = t.bind(null, a)),
                        (e.writeFloatBE = t.bind(null, s)),
                        (e.readFloatLE = o.bind(null, l)),
                        (e.readFloatBE = o.bind(null, c));
                    })(),
                "undefined" != typeof Float64Array
                  ? (function () {
                      var t = new Float64Array([-0]),
                        o = new Uint8Array(t.buffer),
                        n = 128 === o[7];
                      function i(e, n, i) {
                        (t[0] = e),
                          (n[i] = o[0]),
                          (n[i + 1] = o[1]),
                          (n[i + 2] = o[2]),
                          (n[i + 3] = o[3]),
                          (n[i + 4] = o[4]),
                          (n[i + 5] = o[5]),
                          (n[i + 6] = o[6]),
                          (n[i + 7] = o[7]);
                      }
                      function r(e, n, i) {
                        (t[0] = e),
                          (n[i] = o[7]),
                          (n[i + 1] = o[6]),
                          (n[i + 2] = o[5]),
                          (n[i + 3] = o[4]),
                          (n[i + 4] = o[3]),
                          (n[i + 5] = o[2]),
                          (n[i + 6] = o[1]),
                          (n[i + 7] = o[0]);
                      }
                      function a(e, n) {
                        return (
                          (o[0] = e[n]),
                          (o[1] = e[n + 1]),
                          (o[2] = e[n + 2]),
                          (o[3] = e[n + 3]),
                          (o[4] = e[n + 4]),
                          (o[5] = e[n + 5]),
                          (o[6] = e[n + 6]),
                          (o[7] = e[n + 7]),
                          t[0]
                        );
                      }
                      function s(e, n) {
                        return (
                          (o[7] = e[n]),
                          (o[6] = e[n + 1]),
                          (o[5] = e[n + 2]),
                          (o[4] = e[n + 3]),
                          (o[3] = e[n + 4]),
                          (o[2] = e[n + 5]),
                          (o[1] = e[n + 6]),
                          (o[0] = e[n + 7]),
                          t[0]
                        );
                      }
                      (e.writeDoubleLE = n ? i : r),
                        (e.writeDoubleBE = n ? r : i),
                        (e.readDoubleLE = n ? a : s),
                        (e.readDoubleBE = n ? s : a);
                    })()
                  : (function () {
                      function t(e, t, o, n, i, r) {
                        var a = n < 0 ? 1 : 0;
                        if ((a && (n = -n), 0 === n))
                          e(0, i, r + t),
                            e(1 / n > 0 ? 0 : 2147483648, i, r + o);
                        else if (isNaN(n))
                          e(0, i, r + t), e(2146959360, i, r + o);
                        else if (n > 17976931348623157e292)
                          e(0, i, r + t),
                            e(((a << 31) | 2146435072) >>> 0, i, r + o);
                        else {
                          var s;
                          if (n < 22250738585072014e-324)
                            e((s = n / 5e-324) >>> 0, i, r + t),
                              e(((a << 31) | (s / 4294967296)) >>> 0, i, r + o);
                          else {
                            var l = Math.floor(Math.log(n) / Math.LN2);
                            1024 === l && (l = 1023),
                              e(
                                (4503599627370496 *
                                  (s = n * Math.pow(2, -l))) >>>
                                  0,
                                i,
                                r + t
                              ),
                              e(
                                ((a << 31) |
                                  ((l + 1023) << 20) |
                                  ((1048576 * s) & 1048575)) >>>
                                  0,
                                i,
                                r + o
                              );
                          }
                        }
                      }
                      function o(e, t, o, n, i) {
                        var r = e(n, i + t),
                          a = e(n, i + o),
                          s = 2 * (a >> 31) + 1,
                          l = (a >>> 20) & 2047,
                          c = 4294967296 * (1048575 & a) + r;
                        return 2047 === l
                          ? c
                            ? NaN
                            : s * (1 / 0)
                          : 0 === l
                          ? 5e-324 * s * c
                          : s * Math.pow(2, l - 1075) * (c + 4503599627370496);
                      }
                      (e.writeDoubleLE = t.bind(null, a, 0, 4)),
                        (e.writeDoubleBE = t.bind(null, s, 4, 0)),
                        (e.readDoubleLE = o.bind(null, l, 0, 4)),
                        (e.readDoubleBE = o.bind(null, c, 4, 0));
                    })(),
                e
              );
            }
            function a(e, t, o) {
              (t[o] = 255 & e),
                (t[o + 1] = (e >>> 8) & 255),
                (t[o + 2] = (e >>> 16) & 255),
                (t[o + 3] = e >>> 24);
            }
            function s(e, t, o) {
              (t[o] = e >>> 24),
                (t[o + 1] = (e >>> 16) & 255),
                (t[o + 2] = (e >>> 8) & 255),
                (t[o + 3] = 255 & e);
            }
            function l(e, t) {
              return (
                (e[t] |
                  (e[t + 1] << 8) |
                  (e[t + 2] << 16) |
                  (e[t + 3] << 24)) >>>
                0
              );
            }
            function c(e, t) {
              return (
                ((e[t] << 24) |
                  (e[t + 1] << 16) |
                  (e[t + 2] << 8) |
                  e[t + 3]) >>>
                0
              );
            }
            (o.exports = r(r)),
              o.exports,
              o.exports.writeFloatLE,
              o.exports.writeFloatBE,
              o.exports.readFloatLE,
              o.exports.readFloatBE,
              o.exports.writeDoubleLE,
              o.exports.writeDoubleBE,
              o.exports.readDoubleLE,
              o.exports.readDoubleBE;
          },
          {}
        );
        var __cjsMetaURL$4 =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js";
        loader.define(
          __cjsMetaURL$4,
          function (exports, require, module, __filename, __dirname) {
            function inquire(moduleName) {
              try {
                var mod = eval("quire".replace(/^/, "re"))(moduleName);
                if (mod && (mod.length || Object.keys(mod).length)) return mod;
              } catch (e) {}
              return null;
            }
            (module.exports = inquire), module.exports;
          },
          {}
        );
        var __cjsMetaURL$5 =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js";
        loader.define(
          __cjsMetaURL$5,
          function (e, t, o, n, i) {
            var r = e;
            (r.length = function (e) {
              for (var t = 0, o = 0, n = 0; n < e.length; ++n)
                (o = e.charCodeAt(n)) < 128
                  ? (t += 1)
                  : o < 2048
                  ? (t += 2)
                  : 55296 == (64512 & o) &&
                    56320 == (64512 & e.charCodeAt(n + 1))
                  ? (++n, (t += 4))
                  : (t += 3);
              return t;
            }),
              (r.read = function (e, t, o) {
                if (o - t < 1) return "";
                for (var n, i = null, r = [], a = 0; t < o; )
                  (n = e[t++]) < 128
                    ? (r[a++] = n)
                    : n > 191 && n < 224
                    ? (r[a++] = ((31 & n) << 6) | (63 & e[t++]))
                    : n > 239 && n < 365
                    ? ((n =
                        (((7 & n) << 18) |
                          ((63 & e[t++]) << 12) |
                          ((63 & e[t++]) << 6) |
                          (63 & e[t++])) -
                        65536),
                      (r[a++] = 55296 + (n >> 10)),
                      (r[a++] = 56320 + (1023 & n)))
                    : (r[a++] =
                        ((15 & n) << 12) |
                        ((63 & e[t++]) << 6) |
                        (63 & e[t++])),
                    a > 8191 &&
                      ((i || (i = [])).push(
                        String.fromCharCode.apply(String, r)
                      ),
                      (a = 0));
                return i
                  ? (a &&
                      i.push(String.fromCharCode.apply(String, r.slice(0, a))),
                    i.join(""))
                  : String.fromCharCode.apply(String, r.slice(0, a));
              }),
              (r.write = function (e, t, o) {
                for (var n, i, r = o, a = 0; a < e.length; ++a)
                  (n = e.charCodeAt(a)) < 128
                    ? (t[o++] = n)
                    : n < 2048
                    ? ((t[o++] = (n >> 6) | 192), (t[o++] = (63 & n) | 128))
                    : 55296 == (64512 & n) &&
                      56320 == (64512 & (i = e.charCodeAt(a + 1)))
                    ? ((n = 65536 + ((1023 & n) << 10) + (1023 & i)),
                      ++a,
                      (t[o++] = (n >> 18) | 240),
                      (t[o++] = ((n >> 12) & 63) | 128),
                      (t[o++] = ((n >> 6) & 63) | 128),
                      (t[o++] = (63 & n) | 128))
                    : ((t[o++] = (n >> 12) | 224),
                      (t[o++] = ((n >> 6) & 63) | 128),
                      (t[o++] = (63 & n) | 128));
                return o - r;
              }),
              o.exports;
          },
          {}
        );
        var __cjsMetaURL$6 =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js";
        loader.define(
          __cjsMetaURL$6,
          function (e, t, o, n, i) {
            (o.exports = function (e, t, o) {
              var n = o || 8192,
                i = n >>> 1,
                r = null,
                a = n;
              return function (o) {
                if (o < 1 || o > i) return e(o);
                a + o > n && ((r = e(n)), (a = 0));
                var s = t.call(r, a, (a += o));
                return 7 & a && (a = 1 + (7 | a)), s;
              };
            }),
              o.exports;
          },
          {}
        );
        var __cjsMetaURL$7 =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js";
        loader.define(
          __cjsMetaURL$7,
          function (e, t, o, n, i) {
            o.exports = a;
            var r = t("../util/minimal");
            function a(e, t) {
              (this.lo = e >>> 0), (this.hi = t >>> 0);
            }
            var s = (a.zero = new a(0, 0));
            (s.toNumber = function () {
              return 0;
            }),
              (s.zzEncode = s.zzDecode =
                function () {
                  return this;
                }),
              (s.length = function () {
                return 1;
              });
            var l = (a.zeroHash = "\0\0\0\0\0\0\0\0");
            (a.fromNumber = function (e) {
              if (0 === e) return s;
              var t = e < 0;
              t && (e = -e);
              var o = e >>> 0,
                n = ((e - o) / 4294967296) >>> 0;
              return (
                t &&
                  ((n = ~n >>> 0),
                  (o = ~o >>> 0),
                  ++o > 4294967295 && ((o = 0), ++n > 4294967295 && (n = 0))),
                new a(o, n)
              );
            }),
              (a.from = function (e) {
                if ("number" == typeof e) return a.fromNumber(e);
                if (r.isString(e)) {
                  if (!r.Long) return a.fromNumber(parseInt(e, 10));
                  e = r.Long.fromString(e);
                }
                return e.low || e.high ? new a(e.low >>> 0, e.high >>> 0) : s;
              }),
              (a.prototype.toNumber = function (e) {
                if (!e && this.hi >>> 31) {
                  var t = (1 + ~this.lo) >>> 0,
                    o = ~this.hi >>> 0;
                  return t || (o = (o + 1) >>> 0), -(t + 4294967296 * o);
                }
                return this.lo + 4294967296 * this.hi;
              }),
              (a.prototype.toLong = function (e) {
                return r.Long
                  ? new r.Long(0 | this.lo, 0 | this.hi, Boolean(e))
                  : {
                      low: 0 | this.lo,
                      high: 0 | this.hi,
                      unsigned: Boolean(e),
                    };
              });
            var c = String.prototype.charCodeAt;
            (a.fromHash = function (e) {
              return e === l
                ? s
                : new a(
                    (c.call(e, 0) |
                      (c.call(e, 1) << 8) |
                      (c.call(e, 2) << 16) |
                      (c.call(e, 3) << 24)) >>>
                      0,
                    (c.call(e, 4) |
                      (c.call(e, 5) << 8) |
                      (c.call(e, 6) << 16) |
                      (c.call(e, 7) << 24)) >>>
                      0
                  );
            }),
              (a.prototype.toHash = function () {
                return String.fromCharCode(
                  255 & this.lo,
                  (this.lo >>> 8) & 255,
                  (this.lo >>> 16) & 255,
                  this.lo >>> 24,
                  255 & this.hi,
                  (this.hi >>> 8) & 255,
                  (this.hi >>> 16) & 255,
                  this.hi >>> 24
                );
              }),
              (a.prototype.zzEncode = function () {
                var e = this.hi >> 31;
                return (
                  (this.hi = (((this.hi << 1) | (this.lo >>> 31)) ^ e) >>> 0),
                  (this.lo = ((this.lo << 1) ^ e) >>> 0),
                  this
                );
              }),
              (a.prototype.zzDecode = function () {
                var e = -(1 & this.lo);
                return (
                  (this.lo = (((this.lo >>> 1) | (this.hi << 31)) ^ e) >>> 0),
                  (this.hi = ((this.hi >>> 1) ^ e) >>> 0),
                  this
                );
              }),
              (a.prototype.length = function () {
                var e = this.lo,
                  t = ((this.lo >>> 28) | (this.hi << 4)) >>> 0,
                  o = this.hi >>> 24;
                return 0 === o
                  ? 0 === t
                    ? e < 16384
                      ? e < 128
                        ? 1
                        : 2
                      : e < 2097152
                      ? 3
                      : 4
                    : t < 16384
                    ? t < 128
                      ? 5
                      : 6
                    : t < 2097152
                    ? 7
                    : 8
                  : o < 128
                  ? 9
                  : 10;
              }),
              o.exports;
          },
          function () {
            return { "../util/minimal": __cjsMetaURL$8 };
          }
        );
        var __cjsMetaURL$8 =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js";
        loader.define(
          __cjsMetaURL$8,
          function (e, t, o, n, i) {
            var r = e;
            function a(e, t, o) {
              for (var n = Object.keys(t), i = 0; i < n.length; ++i)
                (void 0 !== e[n[i]] && o) || (e[n[i]] = t[n[i]]);
              return e;
            }
            function s(e) {
              function t(e, o) {
                if (!(this instanceof t)) return new t(e, o);
                Object.defineProperty(this, "message", {
                  get: function () {
                    return e;
                  },
                }),
                  Error.captureStackTrace
                    ? Error.captureStackTrace(this, t)
                    : Object.defineProperty(this, "stack", {
                        value: new Error().stack || "",
                      }),
                  o && a(this, o);
              }
              return (
                ((t.prototype = Object.create(Error.prototype)).constructor =
                  t),
                Object.defineProperty(t.prototype, "name", {
                  get: function () {
                    return e;
                  },
                }),
                (t.prototype.toString = function () {
                  return this.name + ": " + this.message;
                }),
                t
              );
            }
            (r.asPromise = t("@protobufjs/aspromise")),
              (r.base64 = t("@protobufjs/base64")),
              (r.EventEmitter = t("@protobufjs/eventemitter")),
              (r.float = t("@protobufjs/float")),
              (r.inquire = t("@protobufjs/inquire")),
              (r.utf8 = t("@protobufjs/utf8")),
              (r.pool = t("@protobufjs/pool")),
              (r.LongBits = t("./longbits")),
              (r.isNode = Boolean(
                "undefined" != typeof global &&
                  global &&
                  global.process &&
                  global.process.versions &&
                  global.process.versions.node
              )),
              (r.global =
                (r.isNode && global) ||
                ("undefined" != typeof window && window) ||
                ("undefined" != typeof self && self) ||
                this),
              (r.emptyArray = Object.freeze ? Object.freeze([]) : []),
              (r.emptyObject = Object.freeze ? Object.freeze({}) : {}),
              (r.isInteger =
                Number.isInteger ||
                function (e) {
                  return (
                    "number" == typeof e && isFinite(e) && Math.floor(e) === e
                  );
                }),
              (r.isString = function (e) {
                return "string" == typeof e || e instanceof String;
              }),
              (r.isObject = function (e) {
                return e && "object" == typeof e;
              }),
              (r.isset = r.isSet =
                function (e, t) {
                  var o = e[t];
                  return (
                    !(null == o || !e.hasOwnProperty(t)) &&
                    ("object" != typeof o ||
                      (Array.isArray(o) ? o.length : Object.keys(o).length) > 0)
                  );
                }),
              (r.Buffer = (function () {
                try {
                  var e = r.inquire("buffer").Buffer;
                  return e.prototype.utf8Write ? e : null;
                } catch (e) {
                  return null;
                }
              })()),
              (r._Buffer_from = null),
              (r._Buffer_allocUnsafe = null),
              (r.newBuffer = function (e) {
                return "number" == typeof e
                  ? r.Buffer
                    ? r._Buffer_allocUnsafe(e)
                    : new r.Array(e)
                  : r.Buffer
                  ? r._Buffer_from(e)
                  : "undefined" == typeof Uint8Array
                  ? e
                  : new Uint8Array(e);
              }),
              (r.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array),
              (r.Long =
                (r.global.dcodeIO && r.global.dcodeIO.Long) ||
                r.global.Long ||
                r.inquire("long")),
              (r.key2Re = /^true|false|0|1$/),
              (r.key32Re = /^-?(?:0|[1-9][0-9]*)$/),
              (r.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/),
              (r.longToHash = function (e) {
                return e ? r.LongBits.from(e).toHash() : r.LongBits.zeroHash;
              }),
              (r.longFromHash = function (e, t) {
                var o = r.LongBits.fromHash(e);
                return r.Long
                  ? r.Long.fromBits(o.lo, o.hi, t)
                  : o.toNumber(Boolean(t));
              }),
              (r.merge = a),
              (r.lcFirst = function (e) {
                return e.charAt(0).toLowerCase() + e.substring(1);
              }),
              (r.newError = s),
              (r.ProtocolError = s("ProtocolError")),
              (r.oneOfGetter = function (e) {
                for (var t = {}, o = 0; o < e.length; ++o) t[e[o]] = 1;
                return function () {
                  for (var e = Object.keys(this), o = e.length - 1; o > -1; --o)
                    if (
                      1 === t[e[o]] &&
                      void 0 !== this[e[o]] &&
                      null !== this[e[o]]
                    )
                      return e[o];
                };
              }),
              (r.oneOfSetter = function (e) {
                return function (t) {
                  for (var o = 0; o < e.length; ++o)
                    e[o] !== t && delete this[e[o]];
                };
              }),
              (r.toJSONOptions = {
                longs: String,
                enums: String,
                bytes: String,
                json: !0,
              }),
              (r._configure = function () {
                var e = r.Buffer;
                e
                  ? ((r._Buffer_from =
                      (e.from !== Uint8Array.from && e.from) ||
                      function (t, o) {
                        return new e(t, o);
                      }),
                    (r._Buffer_allocUnsafe =
                      e.allocUnsafe ||
                      function (t) {
                        return new e(t);
                      }))
                  : (r._Buffer_from = r._Buffer_allocUnsafe = null);
              }),
              o.exports;
          },
          function () {
            return {
              "@protobufjs/aspromise": __cjsMetaURL,
              "@protobufjs/base64": __cjsMetaURL$1,
              "@protobufjs/eventemitter": __cjsMetaURL$2,
              "@protobufjs/float": __cjsMetaURL$3,
              "@protobufjs/inquire": __cjsMetaURL$4,
              "@protobufjs/utf8": __cjsMetaURL$5,
              "@protobufjs/pool": __cjsMetaURL$6,
              "./longbits": __cjsMetaURL$7,
            };
          }
        );
        var __cjsMetaURL$9 =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/src/writer.js";
        loader.define(
          __cjsMetaURL$9,
          function (e, t, o, n, i) {
            o.exports = h;
            var r,
              a = t("./util/minimal"),
              s = a.LongBits,
              l = a.base64,
              c = a.utf8;
            function u(e, t, o) {
              (this.fn = e),
                (this.len = t),
                (this.next = void 0),
                (this.val = o);
            }
            function m() {}
            function p(e) {
              (this.head = e.head),
                (this.tail = e.tail),
                (this.len = e.len),
                (this.next = e.states);
            }
            function h() {
              (this.len = 0),
                (this.head = new u(m, 0, 0)),
                (this.tail = this.head),
                (this.states = null);
            }
            var _ = function () {
              return a.Buffer
                ? function () {
                    return (h.create = function () {
                      return new r();
                    })();
                  }
                : function () {
                    return new h();
                  };
            };
            function f(e, t, o) {
              t[o] = 255 & e;
            }
            function d(e, t) {
              (this.len = e), (this.next = void 0), (this.val = t);
            }
            function C(e, t, o) {
              for (; e.hi; )
                (t[o++] = (127 & e.lo) | 128),
                  (e.lo = ((e.lo >>> 7) | (e.hi << 25)) >>> 0),
                  (e.hi >>>= 7);
              for (; e.lo > 127; )
                (t[o++] = (127 & e.lo) | 128), (e.lo = e.lo >>> 7);
              t[o++] = e.lo;
            }
            function S(e, t, o) {
              (t[o] = 255 & e),
                (t[o + 1] = (e >>> 8) & 255),
                (t[o + 2] = (e >>> 16) & 255),
                (t[o + 3] = e >>> 24);
            }
            (h.create = _()),
              (h.alloc = function (e) {
                return new a.Array(e);
              }),
              a.Array !== Array &&
                (h.alloc = a.pool(h.alloc, a.Array.prototype.subarray)),
              (h.prototype._push = function (e, t, o) {
                return (
                  (this.tail = this.tail.next = new u(e, t, o)),
                  (this.len += t),
                  this
                );
              }),
              (d.prototype = Object.create(u.prototype)),
              (d.prototype.fn = function (e, t, o) {
                for (; e > 127; ) (t[o++] = (127 & e) | 128), (e >>>= 7);
                t[o] = e;
              }),
              (h.prototype.uint32 = function (e) {
                return (
                  (this.len += (this.tail = this.tail.next =
                    new d(
                      (e >>>= 0) < 128
                        ? 1
                        : e < 16384
                        ? 2
                        : e < 2097152
                        ? 3
                        : e < 268435456
                        ? 4
                        : 5,
                      e
                    )).len),
                  this
                );
              }),
              (h.prototype.int32 = function (e) {
                return e < 0
                  ? this._push(C, 10, s.fromNumber(e))
                  : this.uint32(e);
              }),
              (h.prototype.sint32 = function (e) {
                return this.uint32(((e << 1) ^ (e >> 31)) >>> 0);
              }),
              (h.prototype.uint64 = function (e) {
                var t = s.from(e);
                return this._push(C, t.length(), t);
              }),
              (h.prototype.int64 = h.prototype.uint64),
              (h.prototype.sint64 = function (e) {
                var t = s.from(e).zzEncode();
                return this._push(C, t.length(), t);
              }),
              (h.prototype.bool = function (e) {
                return this._push(f, 1, e ? 1 : 0);
              }),
              (h.prototype.fixed32 = function (e) {
                return this._push(S, 4, e >>> 0);
              }),
              (h.prototype.sfixed32 = h.prototype.fixed32),
              (h.prototype.fixed64 = function (e) {
                var t = s.from(e);
                return this._push(S, 4, t.lo)._push(S, 4, t.hi);
              }),
              (h.prototype.sfixed64 = h.prototype.fixed64),
              (h.prototype.float = function (e) {
                return this._push(a.float.writeFloatLE, 4, e);
              }),
              (h.prototype.double = function (e) {
                return this._push(a.float.writeDoubleLE, 8, e);
              });
            var y = a.Array.prototype.set
              ? function (e, t, o) {
                  t.set(e, o);
                }
              : function (e, t, o) {
                  for (var n = 0; n < e.length; ++n) t[o + n] = e[n];
                };
            (h.prototype.bytes = function (e) {
              var t = e.length >>> 0;
              if (!t) return this._push(f, 1, 0);
              if (a.isString(e)) {
                var o = h.alloc((t = l.length(e)));
                l.decode(e, o, 0), (e = o);
              }
              return this.uint32(t)._push(y, t, e);
            }),
              (h.prototype.string = function (e) {
                var t = c.length(e);
                return t
                  ? this.uint32(t)._push(c.write, t, e)
                  : this._push(f, 1, 0);
              }),
              (h.prototype.fork = function () {
                return (
                  (this.states = new p(this)),
                  (this.head = this.tail = new u(m, 0, 0)),
                  (this.len = 0),
                  this
                );
              }),
              (h.prototype.reset = function () {
                return (
                  this.states
                    ? ((this.head = this.states.head),
                      (this.tail = this.states.tail),
                      (this.len = this.states.len),
                      (this.states = this.states.next))
                    : ((this.head = this.tail = new u(m, 0, 0)),
                      (this.len = 0)),
                  this
                );
              }),
              (h.prototype.ldelim = function () {
                var e = this.head,
                  t = this.tail,
                  o = this.len;
                return (
                  this.reset().uint32(o),
                  o &&
                    ((this.tail.next = e.next),
                    (this.tail = t),
                    (this.len += o)),
                  this
                );
              }),
              (h.prototype.finish = function () {
                for (
                  var e = this.head.next,
                    t = this.constructor.alloc(this.len),
                    o = 0;
                  e;

                )
                  e.fn(e.val, t, o), (o += e.len), (e = e.next);
                return t;
              }),
              (h._configure = function (e) {
                (r = e), (h.create = _()), r._configure();
              }),
              o.exports;
          },
          function () {
            return { "./util/minimal": __cjsMetaURL$8 };
          }
        );
        var __cjsMetaURL$a =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js";
        loader.define(
          __cjsMetaURL$a,
          function (e, t, o, n, i) {
            o.exports = s;
            var r = t("./writer");
            (s.prototype = Object.create(r.prototype)).constructor = s;
            var a = t("./util/minimal");
            function s() {
              r.call(this);
            }
            function l(e, t, o) {
              e.length < 40
                ? a.utf8.write(e, t, o)
                : t.utf8Write
                ? t.utf8Write(e, o)
                : t.write(e, o);
            }
            (s._configure = function () {
              (s.alloc = a._Buffer_allocUnsafe),
                (s.writeBytesBuffer =
                  a.Buffer &&
                  a.Buffer.prototype instanceof Uint8Array &&
                  "set" === a.Buffer.prototype.set.name
                    ? function (e, t, o) {
                        t.set(e, o);
                      }
                    : function (e, t, o) {
                        if (e.copy) e.copy(t, o, 0, e.length);
                        else for (var n = 0; n < e.length; ) t[o++] = e[n++];
                      });
            }),
              (s.prototype.bytes = function (e) {
                a.isString(e) && (e = a._Buffer_from(e, "base64"));
                var t = e.length >>> 0;
                return (
                  this.uint32(t),
                  t && this._push(s.writeBytesBuffer, t, e),
                  this
                );
              }),
              (s.prototype.string = function (e) {
                var t = a.Buffer.byteLength(e);
                return this.uint32(t), t && this._push(l, t, e), this;
              }),
              s._configure(),
              o.exports;
          },
          function () {
            return {
              "./writer": __cjsMetaURL$9,
              "./util/minimal": __cjsMetaURL$8,
            };
          }
        );
        var __cjsMetaURL$b =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/src/reader.js";
        loader.define(
          __cjsMetaURL$b,
          function (e, t, o, n, i) {
            o.exports = u;
            var r,
              a = t("./util/minimal"),
              s = a.LongBits,
              l = a.utf8;
            function c(e, t) {
              return RangeError(
                "index out of range: " +
                  e.pos +
                  " + " +
                  (t || 1) +
                  " > " +
                  e.len
              );
            }
            function u(e) {
              (this.buf = e), (this.pos = 0), (this.len = e.length);
            }
            var m,
              p =
                "undefined" != typeof Uint8Array
                  ? function (e) {
                      if (e instanceof Uint8Array || Array.isArray(e))
                        return new u(e);
                      throw Error("illegal buffer");
                    }
                  : function (e) {
                      if (Array.isArray(e)) return new u(e);
                      throw Error("illegal buffer");
                    },
              h = function () {
                return a.Buffer
                  ? function (e) {
                      return (u.create = function (e) {
                        return a.Buffer.isBuffer(e) ? new r(e) : p(e);
                      })(e);
                    }
                  : p;
              };
            function _() {
              var e = new s(0, 0),
                t = 0;
              if (!(this.len - this.pos > 4)) {
                for (; t < 3; ++t) {
                  if (this.pos >= this.len) throw c(this);
                  if (
                    ((e.lo =
                      (e.lo | ((127 & this.buf[this.pos]) << (7 * t))) >>> 0),
                    this.buf[this.pos++] < 128)
                  )
                    return e;
                }
                return (
                  (e.lo =
                    (e.lo | ((127 & this.buf[this.pos++]) << (7 * t))) >>> 0),
                  e
                );
              }
              for (; t < 4; ++t)
                if (
                  ((e.lo =
                    (e.lo | ((127 & this.buf[this.pos]) << (7 * t))) >>> 0),
                  this.buf[this.pos++] < 128)
                )
                  return e;
              if (
                ((e.lo = (e.lo | ((127 & this.buf[this.pos]) << 28)) >>> 0),
                (e.hi = (e.hi | ((127 & this.buf[this.pos]) >> 4)) >>> 0),
                this.buf[this.pos++] < 128)
              )
                return e;
              if (((t = 0), this.len - this.pos > 4)) {
                for (; t < 5; ++t)
                  if (
                    ((e.hi =
                      (e.hi | ((127 & this.buf[this.pos]) << (7 * t + 3))) >>>
                      0),
                    this.buf[this.pos++] < 128)
                  )
                    return e;
              } else
                for (; t < 5; ++t) {
                  if (this.pos >= this.len) throw c(this);
                  if (
                    ((e.hi =
                      (e.hi | ((127 & this.buf[this.pos]) << (7 * t + 3))) >>>
                      0),
                    this.buf[this.pos++] < 128)
                  )
                    return e;
                }
              throw Error("invalid varint encoding");
            }
            function f(e, t) {
              return (
                (e[t - 4] |
                  (e[t - 3] << 8) |
                  (e[t - 2] << 16) |
                  (e[t - 1] << 24)) >>>
                0
              );
            }
            function d() {
              if (this.pos + 8 > this.len) throw c(this, 8);
              return new s(
                f(this.buf, (this.pos += 4)),
                f(this.buf, (this.pos += 4))
              );
            }
            (u.create = h()),
              (u.prototype._slice =
                a.Array.prototype.subarray || a.Array.prototype.slice),
              (u.prototype.uint32 =
                ((m = 4294967295),
                function () {
                  if (
                    ((m = (127 & this.buf[this.pos]) >>> 0),
                    this.buf[this.pos++] < 128)
                  )
                    return m;
                  if (
                    ((m = (m | ((127 & this.buf[this.pos]) << 7)) >>> 0),
                    this.buf[this.pos++] < 128)
                  )
                    return m;
                  if (
                    ((m = (m | ((127 & this.buf[this.pos]) << 14)) >>> 0),
                    this.buf[this.pos++] < 128)
                  )
                    return m;
                  if (
                    ((m = (m | ((127 & this.buf[this.pos]) << 21)) >>> 0),
                    this.buf[this.pos++] < 128)
                  )
                    return m;
                  if (
                    ((m = (m | ((15 & this.buf[this.pos]) << 28)) >>> 0),
                    this.buf[this.pos++] < 128)
                  )
                    return m;
                  if ((this.pos += 5) > this.len)
                    throw ((this.pos = this.len), c(this, 10));
                  return m;
                })),
              (u.prototype.int32 = function () {
                return 0 | this.uint32();
              }),
              (u.prototype.sint32 = function () {
                var e = this.uint32();
                return ((e >>> 1) ^ -(1 & e)) | 0;
              }),
              (u.prototype.bool = function () {
                return 0 !== this.uint32();
              }),
              (u.prototype.fixed32 = function () {
                if (this.pos + 4 > this.len) throw c(this, 4);
                return f(this.buf, (this.pos += 4));
              }),
              (u.prototype.sfixed32 = function () {
                if (this.pos + 4 > this.len) throw c(this, 4);
                return 0 | f(this.buf, (this.pos += 4));
              }),
              (u.prototype.float = function () {
                if (this.pos + 4 > this.len) throw c(this, 4);
                var e = a.float.readFloatLE(this.buf, this.pos);
                return (this.pos += 4), e;
              }),
              (u.prototype.double = function () {
                if (this.pos + 8 > this.len) throw c(this, 4);
                var e = a.float.readDoubleLE(this.buf, this.pos);
                return (this.pos += 8), e;
              }),
              (u.prototype.bytes = function () {
                var e = this.uint32(),
                  t = this.pos,
                  o = this.pos + e;
                if (o > this.len) throw c(this, e);
                return (
                  (this.pos += e),
                  Array.isArray(this.buf)
                    ? this.buf.slice(t, o)
                    : t === o
                    ? new this.buf.constructor(0)
                    : this._slice.call(this.buf, t, o)
                );
              }),
              (u.prototype.string = function () {
                var e = this.bytes();
                return l.read(e, 0, e.length);
              }),
              (u.prototype.skip = function (e) {
                if ("number" == typeof e) {
                  if (this.pos + e > this.len) throw c(this, e);
                  this.pos += e;
                } else
                  do {
                    if (this.pos >= this.len) throw c(this);
                  } while (128 & this.buf[this.pos++]);
                return this;
              }),
              (u.prototype.skipType = function (e) {
                switch (e) {
                  case 0:
                    this.skip();
                    break;
                  case 1:
                    this.skip(8);
                    break;
                  case 2:
                    this.skip(this.uint32());
                    break;
                  case 3:
                    for (; 4 != (e = 7 & this.uint32()); ) this.skipType(e);
                    break;
                  case 5:
                    this.skip(4);
                    break;
                  default:
                    throw Error(
                      "invalid wire type " + e + " at offset " + this.pos
                    );
                }
                return this;
              }),
              (u._configure = function (e) {
                (r = e), (u.create = h()), r._configure();
                var t = a.Long ? "toLong" : "toNumber";
                a.merge(u.prototype, {
                  int64: function () {
                    return _.call(this)[t](!1);
                  },
                  uint64: function () {
                    return _.call(this)[t](!0);
                  },
                  sint64: function () {
                    return _.call(this).zzDecode()[t](!1);
                  },
                  fixed64: function () {
                    return d.call(this)[t](!0);
                  },
                  sfixed64: function () {
                    return d.call(this)[t](!1);
                  },
                });
              }),
              o.exports;
          },
          function () {
            return { "./util/minimal": __cjsMetaURL$8 };
          }
        );
        var __cjsMetaURL$c =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js";
        loader.define(
          __cjsMetaURL$c,
          function (e, t, o, n, i) {
            o.exports = s;
            var r = t("./reader");
            (s.prototype = Object.create(r.prototype)).constructor = s;
            var a = t("./util/minimal");
            function s(e) {
              r.call(this, e);
            }
            (s._configure = function () {
              a.Buffer && (s.prototype._slice = a.Buffer.prototype.slice);
            }),
              (s.prototype.string = function () {
                var e = this.uint32();
                return this.buf.utf8Slice
                  ? this.buf.utf8Slice(
                      this.pos,
                      (this.pos = Math.min(this.pos + e, this.len))
                    )
                  : this.buf.toString(
                      "utf-8",
                      this.pos,
                      (this.pos = Math.min(this.pos + e, this.len))
                    );
              }),
              s._configure(),
              o.exports;
          },
          function () {
            return {
              "./reader": __cjsMetaURL$b,
              "./util/minimal": __cjsMetaURL$8,
            };
          }
        );
        var __cjsMetaURL$d =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js";
        loader.define(
          __cjsMetaURL$d,
          function (e, t, o, n, i) {
            o.exports = a;
            var r = t("../util/minimal");
            function a(e, t, o) {
              if ("function" != typeof e)
                throw TypeError("rpcImpl must be a function");
              r.EventEmitter.call(this),
                (this.rpcImpl = e),
                (this.requestDelimited = Boolean(t)),
                (this.responseDelimited = Boolean(o));
            }
            ((a.prototype = Object.create(
              r.EventEmitter.prototype
            )).constructor = a),
              (a.prototype.rpcCall = function e(t, o, n, i, a) {
                if (!i) throw TypeError("request must be specified");
                var s = this;
                if (!a) return r.asPromise(e, s, t, o, n, i);
                if (s.rpcImpl)
                  try {
                    return s.rpcImpl(
                      t,
                      o[s.requestDelimited ? "encodeDelimited" : "encode"](
                        i
                      ).finish(),
                      function (e, o) {
                        if (e) return s.emit("error", e, t), a(e);
                        if (null !== o) {
                          if (!(o instanceof n))
                            try {
                              o =
                                n[
                                  s.responseDelimited
                                    ? "decodeDelimited"
                                    : "decode"
                                ](o);
                            } catch (e) {
                              return s.emit("error", e, t), a(e);
                            }
                          return s.emit("data", o, t), a(null, o);
                        }
                        s.end(!0);
                      }
                    );
                  } catch (e) {
                    return (
                      s.emit("error", e, t),
                      void setTimeout(function () {
                        a(e);
                      }, 0)
                    );
                  }
                else
                  setTimeout(function () {
                    a(Error("already ended"));
                  }, 0);
              }),
              (a.prototype.end = function (e) {
                return (
                  this.rpcImpl &&
                    (e || this.rpcImpl(null, null, null),
                    (this.rpcImpl = null),
                    this.emit("end").off()),
                  this
                );
              }),
              o.exports;
          },
          function () {
            return { "../util/minimal": __cjsMetaURL$8 };
          }
        );
        var __cjsMetaURL$e =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js";
        loader.define(
          __cjsMetaURL$e,
          function (e, t, o, n, i) {
            (e.Service = t("./rpc/service")), o.exports;
          },
          function () {
            return { "./rpc/service": __cjsMetaURL$d };
          }
        );
        var __cjsMetaURL$f =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/src/roots.js";
        loader.define(
          __cjsMetaURL$f,
          function (e, t, o, n, i) {
            (o.exports = {}), o.exports;
          },
          {}
        );
        var __cjsMetaURL$g =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js";
        loader.define(
          __cjsMetaURL$g,
          function (e, t, o, n, i) {
            var r = e;
            function a() {
              r.util._configure(),
                r.Writer._configure(r.BufferWriter),
                r.Reader._configure(r.BufferReader);
            }
            (r.build = "minimal"),
              (r.Writer = t("./writer")),
              (r.BufferWriter = t("./writer_buffer")),
              (r.Reader = t("./reader")),
              (r.BufferReader = t("./reader_buffer")),
              (r.util = t("./util/minimal")),
              (r.rpc = t("./rpc")),
              (r.roots = t("./roots")),
              (r.configure = a),
              a(),
              o.exports;
          },
          function () {
            return {
              "./writer": __cjsMetaURL$9,
              "./writer_buffer": __cjsMetaURL$a,
              "./reader": __cjsMetaURL$b,
              "./reader_buffer": __cjsMetaURL$c,
              "./util/minimal": __cjsMetaURL$8,
              "./rpc": __cjsMetaURL$e,
              "./roots": __cjsMetaURL$f,
            };
          }
        );
        var __cjsMetaURL$h =
            "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/minimal.js",
          _cjsExports;
        loader.define(
          __cjsMetaURL$h,
          function (e, t, o, n, i) {
            (o.exports = t("./src/index-minimal")), o.exports;
          },
          function () {
            return { "./src/index-minimal": __cjsMetaURL$g };
          }
        );
        var __cjsMetaURL$i =
            "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/assets/game/Script/Proto/tsqProto.js",
          _dec$9,
          _class$c,
          _class2$9,
          _descriptor$9;
        loader.define(
          __cjsMetaURL$i,
          function (e, t, o, n, i) {
            var r,
              a = t("protobufjs/minimal"),
              s = a.Reader,
              l = a.Writer,
              c = a.util,
              u = a.roots.default || (a.roots.default = {});
            (u.tsqProto =
              (((r = {}).Column = (function () {
                function e(e) {
                  if (((this.Col = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.Col = c.emptyArray),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = l.create()), null != e.Col && e.Col.length)
                    ) {
                      t.uint32(10).fork();
                      for (var o = 0; o < e.Col.length; ++o) t.int32(e.Col[o]);
                      t.ldelim();
                    }
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof s || (e = s.create(e));
                    for (
                      var o = void 0 === t ? e.len : e.pos + t,
                        n = new u.tsqProto.Column();
                      e.pos < o;

                    ) {
                      var i = e.uint32();
                      switch (i >>> 3) {
                        case 1:
                          if (
                            ((n.Col && n.Col.length) || (n.Col = []),
                            2 == (7 & i))
                          )
                            for (var r = e.uint32() + e.pos; e.pos < r; )
                              n.Col.push(e.int32());
                          else n.Col.push(e.int32());
                          break;
                        default:
                          e.skipType(7 & i);
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/tsqProto.Column"
                    );
                  }),
                  e
                );
              })()),
              (r.AwardData = (function () {
                function e(e) {
                  if (((this.PosVec = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.Symbol = 0),
                  (e.prototype.Count = 0),
                  (e.prototype.OddCount = 0),
                  (e.prototype.PosVec = c.emptyArray),
                  (e.prototype.Win = 0),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = l.create()),
                      null != e.Symbol &&
                        Object.hasOwnProperty.call(e, "Symbol") &&
                        t.uint32(8).int32(e.Symbol),
                      null != e.Count &&
                        Object.hasOwnProperty.call(e, "Count") &&
                        t.uint32(16).int32(e.Count),
                      null != e.OddCount &&
                        Object.hasOwnProperty.call(e, "OddCount") &&
                        t.uint32(24).int32(e.OddCount),
                      null != e.PosVec && e.PosVec.length)
                    ) {
                      t.uint32(34).fork();
                      for (var o = 0; o < e.PosVec.length; ++o)
                        t.int32(e.PosVec[o]);
                      t.ldelim();
                    }
                    return (
                      null != e.Win &&
                        Object.hasOwnProperty.call(e, "Win") &&
                        t.uint32(41).double(e.Win),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof s || (e = s.create(e));
                    for (
                      var o = void 0 === t ? e.len : e.pos + t,
                        n = new u.tsqProto.AwardData();
                      e.pos < o;

                    ) {
                      var i = e.uint32();
                      switch (i >>> 3) {
                        case 1:
                          n.Symbol = e.int32();
                          break;
                        case 2:
                          n.Count = e.int32();
                          break;
                        case 3:
                          n.OddCount = e.int32();
                          break;
                        case 4:
                          if (
                            ((n.PosVec && n.PosVec.length) || (n.PosVec = []),
                            2 == (7 & i))
                          )
                            for (var r = e.uint32() + e.pos; e.pos < r; )
                              n.PosVec.push(e.int32());
                          else n.PosVec.push(e.int32());
                          break;
                        case 5:
                          n.Win = e.double();
                          break;
                        default:
                          e.skipType(7 & i);
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/tsqProto.AwardData"
                    );
                  }),
                  e
                );
              })()),
              (r.BigGem = (function () {
                function e(e) {
                  if (((this.PosVec = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.Symbol = 0),
                  (e.prototype.Size = 0),
                  (e.prototype.PosVec = c.emptyArray),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = l.create()),
                      null != e.Symbol &&
                        Object.hasOwnProperty.call(e, "Symbol") &&
                        t.uint32(8).int32(e.Symbol),
                      null != e.Size &&
                        Object.hasOwnProperty.call(e, "Size") &&
                        t.uint32(16).int32(e.Size),
                      null != e.PosVec && e.PosVec.length)
                    ) {
                      t.uint32(26).fork();
                      for (var o = 0; o < e.PosVec.length; ++o)
                        t.int32(e.PosVec[o]);
                      t.ldelim();
                    }
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof s || (e = s.create(e));
                    for (
                      var o = void 0 === t ? e.len : e.pos + t,
                        n = new u.tsqProto.BigGem();
                      e.pos < o;

                    ) {
                      var i = e.uint32();
                      switch (i >>> 3) {
                        case 1:
                          n.Symbol = e.int32();
                          break;
                        case 2:
                          n.Size = e.int32();
                          break;
                        case 3:
                          if (
                            ((n.PosVec && n.PosVec.length) || (n.PosVec = []),
                            2 == (7 & i))
                          )
                            for (var r = e.uint32() + e.pos; e.pos < r; )
                              n.PosVec.push(e.int32());
                          else n.PosVec.push(e.int32());
                          break;
                        default:
                          e.skipType(7 & i);
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/tsqProto.BigGem"
                    );
                  }),
                  e
                );
              })()),
              (r.LightData = (function () {
                function e(e) {
                  if (
                    ((this.ThreeInfo = []),
                    (this.FiveInfo = []),
                    (this.LightSymbol = []),
                    e)
                  )
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.LightType = 0),
                  (e.prototype.TwoInfo = 0),
                  (e.prototype.ThreeInfo = c.emptyArray),
                  (e.prototype.FourInfo = null),
                  (e.prototype.FiveInfo = c.emptyArray),
                  (e.prototype.LightSymbol = c.emptyArray),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = l.create()),
                      null != e.LightType &&
                        Object.hasOwnProperty.call(e, "LightType") &&
                        t.uint32(8).int32(e.LightType),
                      null != e.TwoInfo &&
                        Object.hasOwnProperty.call(e, "TwoInfo") &&
                        t.uint32(16).int32(e.TwoInfo),
                      null != e.ThreeInfo && e.ThreeInfo.length)
                    )
                      for (var o = 0; o < e.ThreeInfo.length; ++o)
                        u.tsqProto.BigGem.encode(
                          e.ThreeInfo[o],
                          t.uint32(26).fork()
                        ).ldelim();
                    if (
                      (null != e.FourInfo &&
                        Object.hasOwnProperty.call(e, "FourInfo") &&
                        u.tsqProto.BigGem.encode(
                          e.FourInfo,
                          t.uint32(34).fork()
                        ).ldelim(),
                      null != e.FiveInfo && e.FiveInfo.length)
                    ) {
                      for (
                        t.uint32(42).fork(), o = 0;
                        o < e.FiveInfo.length;
                        ++o
                      )
                        t.int32(e.FiveInfo[o]);
                      t.ldelim();
                    }
                    if (null != e.LightSymbol && e.LightSymbol.length)
                      for (o = 0; o < e.LightSymbol.length; ++o)
                        u.tsqProto.Column.encode(
                          e.LightSymbol[o],
                          t.uint32(50).fork()
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof s || (e = s.create(e));
                    for (
                      var o = void 0 === t ? e.len : e.pos + t,
                        n = new u.tsqProto.LightData();
                      e.pos < o;

                    ) {
                      var i = e.uint32();
                      switch (i >>> 3) {
                        case 1:
                          n.LightType = e.int32();
                          break;
                        case 2:
                          n.TwoInfo = e.int32();
                          break;
                        case 3:
                          (n.ThreeInfo && n.ThreeInfo.length) ||
                            (n.ThreeInfo = []),
                            n.ThreeInfo.push(
                              u.tsqProto.BigGem.decode(e, e.uint32())
                            );
                          break;
                        case 4:
                          n.FourInfo = u.tsqProto.BigGem.decode(e, e.uint32());
                          break;
                        case 5:
                          if (
                            ((n.FiveInfo && n.FiveInfo.length) ||
                              (n.FiveInfo = []),
                            2 == (7 & i))
                          )
                            for (var r = e.uint32() + e.pos; e.pos < r; )
                              n.FiveInfo.push(e.int32());
                          else n.FiveInfo.push(e.int32());
                          break;
                        case 6:
                          (n.LightSymbol && n.LightSymbol.length) ||
                            (n.LightSymbol = []),
                            n.LightSymbol.push(
                              u.tsqProto.Column.decode(e, e.uint32())
                            );
                          break;
                        default:
                          e.skipType(7 & i);
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/tsqProto.LightData"
                    );
                  }),
                  e
                );
              })()),
              (r.ComboStageInfo = (function () {
                function e(e) {
                  if (
                    ((this.ComboStageSymbol = []),
                    (this.AwardDataVec = []),
                    (this.FillSymbols = []),
                    (this.Eliminate = []),
                    (this.LightGet = []),
                    (this.LightShow = []),
                    e)
                  )
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.ComboStageSymbol = c.emptyArray),
                  (e.prototype.ComboStageWin = 0),
                  (e.prototype.AwardDataVec = c.emptyArray),
                  (e.prototype.FillSymbols = c.emptyArray),
                  (e.prototype.NeedEliminate = !1),
                  (e.prototype.Eliminate = c.emptyArray),
                  (e.prototype.EliminateCount = 0),
                  (e.prototype.LightGet = c.emptyArray),
                  (e.prototype.LightShow = c.emptyArray),
                  (e.prototype.LightInfo = null),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = l.create()),
                      null != e.ComboStageSymbol && e.ComboStageSymbol.length)
                    )
                      for (var o = 0; o < e.ComboStageSymbol.length; ++o)
                        u.tsqProto.Column.encode(
                          e.ComboStageSymbol[o],
                          t.uint32(10).fork()
                        ).ldelim();
                    if (
                      (null != e.ComboStageWin &&
                        Object.hasOwnProperty.call(e, "ComboStageWin") &&
                        t.uint32(17).double(e.ComboStageWin),
                      null != e.AwardDataVec && e.AwardDataVec.length)
                    )
                      for (o = 0; o < e.AwardDataVec.length; ++o)
                        u.tsqProto.AwardData.encode(
                          e.AwardDataVec[o],
                          t.uint32(26).fork()
                        ).ldelim();
                    if (null != e.FillSymbols && e.FillSymbols.length)
                      for (o = 0; o < e.FillSymbols.length; ++o)
                        u.tsqProto.Column.encode(
                          e.FillSymbols[o],
                          t.uint32(34).fork()
                        ).ldelim();
                    if (
                      (null != e.NeedEliminate &&
                        Object.hasOwnProperty.call(e, "NeedEliminate") &&
                        t.uint32(40).bool(e.NeedEliminate),
                      null != e.Eliminate && e.Eliminate.length)
                    )
                      for (o = 0; o < e.Eliminate.length; ++o)
                        u.tsqProto.Column.encode(
                          e.Eliminate[o],
                          t.uint32(50).fork()
                        ).ldelim();
                    if (
                      (null != e.EliminateCount &&
                        Object.hasOwnProperty.call(e, "EliminateCount") &&
                        t.uint32(56).int32(e.EliminateCount),
                      null != e.LightGet && e.LightGet.length)
                    ) {
                      for (
                        t.uint32(66).fork(), o = 0;
                        o < e.LightGet.length;
                        ++o
                      )
                        t.bool(e.LightGet[o]);
                      t.ldelim();
                    }
                    if (null != e.LightShow && e.LightShow.length) {
                      for (
                        t.uint32(74).fork(), o = 0;
                        o < e.LightShow.length;
                        ++o
                      )
                        t.bool(e.LightShow[o]);
                      t.ldelim();
                    }
                    return (
                      null != e.LightInfo &&
                        Object.hasOwnProperty.call(e, "LightInfo") &&
                        u.tsqProto.LightData.encode(
                          e.LightInfo,
                          t.uint32(82).fork()
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof s || (e = s.create(e));
                    for (
                      var o = void 0 === t ? e.len : e.pos + t,
                        n = new u.tsqProto.ComboStageInfo();
                      e.pos < o;

                    ) {
                      var i = e.uint32();
                      switch (i >>> 3) {
                        case 1:
                          (n.ComboStageSymbol && n.ComboStageSymbol.length) ||
                            (n.ComboStageSymbol = []),
                            n.ComboStageSymbol.push(
                              u.tsqProto.Column.decode(e, e.uint32())
                            );
                          break;
                        case 2:
                          n.ComboStageWin = e.double();
                          break;
                        case 3:
                          (n.AwardDataVec && n.AwardDataVec.length) ||
                            (n.AwardDataVec = []),
                            n.AwardDataVec.push(
                              u.tsqProto.AwardData.decode(e, e.uint32())
                            );
                          break;
                        case 4:
                          (n.FillSymbols && n.FillSymbols.length) ||
                            (n.FillSymbols = []),
                            n.FillSymbols.push(
                              u.tsqProto.Column.decode(e, e.uint32())
                            );
                          break;
                        case 5:
                          n.NeedEliminate = e.bool();
                          break;
                        case 6:
                          (n.Eliminate && n.Eliminate.length) ||
                            (n.Eliminate = []),
                            n.Eliminate.push(
                              u.tsqProto.Column.decode(e, e.uint32())
                            );
                          break;
                        case 7:
                          n.EliminateCount = e.int32();
                          break;
                        case 8:
                          if (
                            ((n.LightGet && n.LightGet.length) ||
                              (n.LightGet = []),
                            2 == (7 & i))
                          )
                            for (var r = e.uint32() + e.pos; e.pos < r; )
                              n.LightGet.push(e.bool());
                          else n.LightGet.push(e.bool());
                          break;
                        case 9:
                          if (
                            ((n.LightShow && n.LightShow.length) ||
                              (n.LightShow = []),
                            2 == (7 & i))
                          )
                            for (r = e.uint32() + e.pos; e.pos < r; )
                              n.LightShow.push(e.bool());
                          else n.LightShow.push(e.bool());
                          break;
                        case 10:
                          n.LightInfo = u.tsqProto.LightData.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        default:
                          e.skipType(7 & i);
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/tsqProto.ComboStageInfo"
                    );
                  }),
                  e
                );
              })()),
              (r.RoundInfo = (function () {
                function e(e) {
                  if (((this.ComboStageData = []), (this.LightPos = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.ComboStageData = c.emptyArray),
                  (e.prototype.RoundWin = 0),
                  (e.prototype.Mult = 0),
                  (e.prototype.LightPos = c.emptyArray),
                  (e.prototype.TotalEliminateCount = 0),
                  (e.prototype.LevelCount = 0),
                  (e.prototype.Level = 0),
                  (e.prototype.FreeTotalRound = 0),
                  (e.prototype.AwardTypeFlag = 0),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = l.create()),
                      null != e.ComboStageData && e.ComboStageData.length)
                    )
                      for (var o = 0; o < e.ComboStageData.length; ++o)
                        u.tsqProto.ComboStageInfo.encode(
                          e.ComboStageData[o],
                          t.uint32(10).fork()
                        ).ldelim();
                    if (
                      (null != e.RoundWin &&
                        Object.hasOwnProperty.call(e, "RoundWin") &&
                        t.uint32(17).double(e.RoundWin),
                      null != e.Mult &&
                        Object.hasOwnProperty.call(e, "Mult") &&
                        t.uint32(25).double(e.Mult),
                      null != e.LightPos && e.LightPos.length)
                    ) {
                      for (
                        t.uint32(34).fork(), o = 0;
                        o < e.LightPos.length;
                        ++o
                      )
                        t.int32(e.LightPos[o]);
                      t.ldelim();
                    }
                    return (
                      null != e.TotalEliminateCount &&
                        Object.hasOwnProperty.call(e, "TotalEliminateCount") &&
                        t.uint32(40).int32(e.TotalEliminateCount),
                      null != e.LevelCount &&
                        Object.hasOwnProperty.call(e, "LevelCount") &&
                        t.uint32(48).int32(e.LevelCount),
                      null != e.Level &&
                        Object.hasOwnProperty.call(e, "Level") &&
                        t.uint32(56).int32(e.Level),
                      null != e.FreeTotalRound &&
                        Object.hasOwnProperty.call(e, "FreeTotalRound") &&
                        t.uint32(64).int32(e.FreeTotalRound),
                      null != e.AwardTypeFlag &&
                        Object.hasOwnProperty.call(e, "AwardTypeFlag") &&
                        t.uint32(72).int32(e.AwardTypeFlag),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof s || (e = s.create(e));
                    for (
                      var o = void 0 === t ? e.len : e.pos + t,
                        n = new u.tsqProto.RoundInfo();
                      e.pos < o;

                    ) {
                      var i = e.uint32();
                      switch (i >>> 3) {
                        case 1:
                          (n.ComboStageData && n.ComboStageData.length) ||
                            (n.ComboStageData = []),
                            n.ComboStageData.push(
                              u.tsqProto.ComboStageInfo.decode(e, e.uint32())
                            );
                          break;
                        case 2:
                          n.RoundWin = e.double();
                          break;
                        case 3:
                          n.Mult = e.double();
                          break;
                        case 4:
                          if (
                            ((n.LightPos && n.LightPos.length) ||
                              (n.LightPos = []),
                            2 == (7 & i))
                          )
                            for (var r = e.uint32() + e.pos; e.pos < r; )
                              n.LightPos.push(e.int32());
                          else n.LightPos.push(e.int32());
                          break;
                        case 5:
                          n.TotalEliminateCount = e.int32();
                          break;
                        case 6:
                          n.LevelCount = e.int32();
                          break;
                        case 7:
                          n.Level = e.int32();
                          break;
                        case 8:
                          n.FreeTotalRound = e.int32();
                          break;
                        case 9:
                          n.AwardTypeFlag = e.int32();
                          break;
                        default:
                          e.skipType(7 & i);
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/tsqProto.RoundInfo"
                    );
                  }),
                  e
                );
              })()),
              (r.SpinAck = (function () {
                function e(e) {
                  if (((this.RoundQueue = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.RoundQueue = c.emptyArray),
                  (e.prototype.FreeTotalWin = 0),
                  (e.prototype.IsBuy = !1),
                  (e.prototype.TotalWin = 0),
                  (e.prototype.AckType = 0),
                  (e.prototype.RTP = 0),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = l.create()),
                      null != e.RoundQueue && e.RoundQueue.length)
                    )
                      for (var o = 0; o < e.RoundQueue.length; ++o)
                        u.tsqProto.RoundInfo.encode(
                          e.RoundQueue[o],
                          t.uint32(10).fork()
                        ).ldelim();
                    return (
                      null != e.FreeTotalWin &&
                        Object.hasOwnProperty.call(e, "FreeTotalWin") &&
                        t.uint32(17).double(e.FreeTotalWin),
                      null != e.IsBuy &&
                        Object.hasOwnProperty.call(e, "IsBuy") &&
                        t.uint32(24).bool(e.IsBuy),
                      null != e.TotalWin &&
                        Object.hasOwnProperty.call(e, "TotalWin") &&
                        t.uint32(33).double(e.TotalWin),
                      null != e.AckType &&
                        Object.hasOwnProperty.call(e, "AckType") &&
                        t.uint32(40).int32(e.AckType),
                      null != e.RTP &&
                        Object.hasOwnProperty.call(e, "RTP") &&
                        t.uint32(49).double(e.RTP),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof s || (e = s.create(e));
                    for (
                      var o = void 0 === t ? e.len : e.pos + t,
                        n = new u.tsqProto.SpinAck();
                      e.pos < o;

                    ) {
                      var i = e.uint32();
                      switch (i >>> 3) {
                        case 1:
                          (n.RoundQueue && n.RoundQueue.length) ||
                            (n.RoundQueue = []),
                            n.RoundQueue.push(
                              u.tsqProto.RoundInfo.decode(e, e.uint32())
                            );
                          break;
                        case 2:
                          n.FreeTotalWin = e.double();
                          break;
                        case 3:
                          n.IsBuy = e.bool();
                          break;
                        case 4:
                          n.TotalWin = e.double();
                          break;
                        case 5:
                          n.AckType = e.int32();
                          break;
                        case 6:
                          n.RTP = e.double();
                          break;
                        default:
                          e.skipType(7 & i);
                      }
                    }
                    return n;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/tsqProto.SpinAck"
                    );
                  }),
                  e
                );
              })()),
              r)),
              (o.exports = u),
              (_cjsExports = o.exports);
          },
          function () {
            return { "protobufjs/minimal": __cjsMetaURL$h };
          }
        ),
          __cjsMetaURL$i ||
            loader.throwInvalidWrapper(
              "./tsqProto.js",
              "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/assets/game/Script/Proto/tsqProto.mjs?cjs=&original=.js"
            ),
          loader.require(__cjsMetaURL$i),
          cclegacy._RF.push({}, "8b812WCDP5KiZlMGMSFg3zr", "SlotReels", void 0);
        var Z_INDEX = { SYMBOL: 1, WILD: 2, EFFECT: 3 },
          SYMBOL_ENTER_MOVE_TIME = 0.3,
          SYMBOL_LEVEL_MOVE_TIME = 0.3,
          SYMBOL_MOVE_DISTANCE = 550,
          FALL_OVER_DISTANCE = 0,
          BOUNCE_DISTANCE = 15,
          BOUNCE_TIME = 0.05,
          BOUNCE_BACK_TIME = 0.03,
          ccclass$c = _decorator.ccclass,
          property$9 = _decorator.property,
          SlotReels =
            ((_dec$9 = property$9({
              type: SpriteFrame,
              tooltip: "symbol的SpriteFrame",
            })),
            ccclass$c(
              ((_class2$9 = (function (e) {
                function t() {
                  for (
                    var t, o = arguments.length, n = new Array(o), i = 0;
                    i < o;
                    i++
                  )
                    n[i] = arguments[i];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_symbolSpriteFrames",
                      _descriptor$9,
                      _assertThisInitialized(t)
                    ),
                    (t.m_viewSize = null),
                    (t.m_symbolSize = null),
                    (t.m_reelPositionOffset = [
                      new Vec2(1.5, 0),
                      new Vec2(1, 0),
                      new Vec2(0.5, 0),
                      new Vec2(0, 0),
                      new Vec2(0, 0),
                      new Vec2(-0.5, 0),
                      new Vec2(-1, 0),
                      new Vec2(-1.5, 0),
                    ]),
                    (t.m_symbol = new Array()),
                    (t.m_isInitStop = !0),
                    (t.m_isPatchUpFinished = !1),
                    (t.m_plate = Array.from({ length: 8 }, function () {
                      return new _cjsExports.tsqProto.Column();
                    })),
                    (t.m_gameView = null),
                    (t.m_isHardStop = !1),
                    (t.m_isMatchingFinished = !1),
                    (t.m_isPlateCleaned = !1),
                    (t.m_orgPos = null),
                    (t.m_dropSoundTime = Date.now()),
                    (t.m_isDropSounds = Array.from({ length: 8 }, function () {
                      return !1;
                    })),
                    (t.m_isNewDropSounds = Array.from(
                      { length: 8 },
                      function () {
                        return !1;
                      }
                    )),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.onLoad = function () {
                    var e = function () {
                      var e = node$7.TempoSetting.SweetLand;
                      e.DELAY_TIME_FOR_X.NORMAL,
                        e.DELAY_TIME_FOR_Y.NORMAL,
                        (SYMBOL_ENTER_MOVE_TIME = e.SYMBOL_MOVE_TIME),
                        (SYMBOL_MOVE_DISTANCE = e.SYMBOL_MOVE_DISTANCE),
                        (BOUNCE_DISTANCE = e.BOUNCE_DISTANCE);
                    };
                    e(), node$7.AddCb(e);
                  }),
                  (o.start = function () {
                    (this.m_viewSize =
                      this.node.getComponent(UITransform).contentSize),
                      (this.m_symbolSize = new Size(
                        this.m_viewSize.width / TSQ_Define.COL,
                        this.m_viewSize.height / TSQ_Define.ROW
                      )),
                      (this.m_orgPos = new Array());
                    for (var e = 0; e < TSQ_Define.COL; e++) {
                      for (
                        var t = new Array(), o = new Array(), n = 0;
                        n < TSQ_Define.ROW;
                        n++
                      ) {
                        var i = NodePool.GetInstance().GetSymbolSprite(),
                          r = (e + n) % TSQ_Define.Symbol.WILD;
                        (this.m_plate[e].Col[n] = r),
                          (i.spriteFrame = this.m_symbolSpriteFrames[r]),
                          (i.type = Sprite.Type.SIMPLE),
                          (i.sizeMode = Sprite.SizeMode.RAW),
                          (i.trim = !1),
                          this.node.addChild(i.node),
                          node.SetZIndex(i.node, Z_INDEX.SYMBOL),
                          t.push(i.node);
                        var a = this.GetSymbolPosition(e, n);
                        i.node.setPosition(a), o.push(a);
                      }
                      this.m_symbol.push(t), this.m_orgPos.push(o);
                    }
                  }),
                  (o.Init = function (e) {
                    this.m_gameView = e;
                  }),
                  (o.RecoverPlate = function () {
                    for (var e = 0; e < TSQ_Define.COL; e++)
                      for (var t = 0; t < TSQ_Define.ROW; t++)
                        Tween.stopAllByTarget(this.m_symbol[e][t]),
                          this.m_symbol[e][t].setPosition(this.m_orgPos[e][t]);
                  }),
                  (o.SetPlateSymbol = function (e) {
                    this.m_plate = e;
                    for (var t = 0; t < TSQ_Define.COL; t++)
                      for (var o = 0; o < TSQ_Define.ROW; o++) {
                        Tween.stopAllByTarget(this.m_symbol[t][o]);
                        var n = this.m_symbol[t][o].getComponent(Sprite),
                          i = this.m_plate[t].Col[o];
                        (n.spriteFrame = this.m_symbolSpriteFrames[i]),
                          this.m_symbol[t][o].setPosition(this.m_orgPos[t][o]);
                        var r =
                          i === TSQ_Define.Symbol.WILD
                            ? Z_INDEX.WILD
                            : Z_INDEX.SYMBOL;
                        node.SetZIndex(n.node, r);
                      }
                  }),
                  (o.SetPlateOneSymbol = function (e, t, o) {
                    this.m_plate[e].Col[t] = o;
                    var n = this.m_symbol[e][t].getComponent(Sprite);
                    n.spriteFrame = this.m_symbolSpriteFrames[o];
                    var i =
                      o === TSQ_Define.Symbol.WILD
                        ? Z_INDEX.WILD
                        : Z_INDEX.SYMBOL;
                    node.SetZIndex(n.node, i);
                  }),
                  (o.SetPlateInfo = function (e) {
                    this.m_plate = e;
                  }),
                  (o.StartSpin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var o, n, i, r, a;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    this.m_plate = null,
                                      this.m_isHardStop = t,
                                      this.m_isInitStop = !1,
                                      this.m_isPlateCleaned = !1,
                                      o = 0;
                                    o < this.m_symbol.length;
                                    o++
                                  )
                                    for (
                                      n = 0;
                                      n < this.m_symbol[o].length;
                                      n++
                                    )
                                      this.m_symbol[o][n].active = !0;
                                  for (
                                    i = new Array(), r = 0;
                                    r < TSQ_Define.COL;
                                    r++
                                  )
                                    for (a = 0; a < TSQ_Define.ROW; a++)
                                      i.push(
                                        this.LeavePlate(r, a, this.m_isHardStop)
                                      );
                                  return (e.next = 9), Promise.all(i);
                                case 9:
                                  (this.m_isPlateCleaned = !0),
                                    null !== this.m_plate &&
                                      this.ShowNewPlate();
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.ShowNewPlate = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t,
                          o,
                          n,
                          i = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    this.node.getComponent(Mask).enabled = !0,
                                      t = new Array(),
                                      this.m_isNewDropSounds.forEach(function (
                                        e,
                                        t
                                      ) {
                                        return (i.m_isNewDropSounds[t] = !0);
                                      }),
                                      o = 0;
                                    o < TSQ_Define.COL;
                                    o++
                                  )
                                    for (n = 0; n < TSQ_Define.ROW; n++)
                                      t.push(
                                        this.EnterPlate(
                                          o,
                                          n,
                                          this.m_plate[o].Col[n]
                                        )
                                      );
                                  return (
                                    (this.node.getComponent(
                                      UIOpacity
                                    ).opacity = 255),
                                    (e.next = 7),
                                    Promise.all(t)
                                  );
                                case 7:
                                  this.m_isInitStop = !0;
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
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.SpinNewFgPlate = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o) {
                        var n,
                          i,
                          r,
                          a,
                          s,
                          l,
                          c,
                          u = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    void 0 === o && (o = !1),
                                      this.m_isHardStop = node$3.IsHardStop,
                                      this.m_isInitStop = !1,
                                      this.m_isPlateCleaned = !1,
                                      n = 0;
                                    n < this.m_symbol.length;
                                    n++
                                  )
                                    for (
                                      i = 0;
                                      i < this.m_symbol[n].length;
                                      i++
                                    )
                                      this.m_symbol[n][i].active = !0;
                                  if (((r = new Array()), o)) {
                                    e.next = 10;
                                    break;
                                  }
                                  for (a = 0; a < TSQ_Define.COL; a++)
                                    for (s = 0; s < TSQ_Define.ROW; s++)
                                      r.push(
                                        this.LeavePlate(a, s, this.m_isHardStop)
                                      );
                                  return (e.next = 10), Promise.all(r);
                                case 10:
                                  if (
                                    ((this.m_isPlateCleaned = !0),
                                    (this.node.getComponent(Mask).enabled = !0),
                                    o)
                                  ) {
                                    e.next = 17;
                                    break;
                                  }
                                  for (
                                    this.m_isNewDropSounds.forEach(function (
                                      e,
                                      t
                                    ) {
                                      return (u.m_isNewDropSounds[t] = !0);
                                    }),
                                      l = 0;
                                    l < TSQ_Define.COL;
                                    l++
                                  )
                                    for (c = 0; c < TSQ_Define.ROW; c++)
                                      r.push(
                                        this.EnterPlate(l, c, t[l].Col[c])
                                      );
                                  return (e.next = 17), Promise.all(r);
                                case 17:
                                  (this.node.getComponent(
                                    UIOpacity
                                  ).opacity = 255),
                                    (this.m_isInitStop = !0);
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
                    return function (t, o) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.TileMatchingAndPatchUp = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var o,
                          n,
                          i,
                          r,
                          a = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    o = new Array(),
                                      this.m_isDropSounds.forEach(function (
                                        e,
                                        t
                                      ) {
                                        return (a.m_isDropSounds[t] = !0);
                                      }),
                                      this.m_isNewDropSounds.forEach(function (
                                        e,
                                        t
                                      ) {
                                        return (a.m_isNewDropSounds[t] = !0);
                                      }),
                                      n = 0,
                                      i = function (e) {
                                        for (
                                          var i = !1,
                                            r = 0,
                                            s = 0,
                                            l = TSQ_Define.ROW - 1;
                                          l >= 0;
                                          l--
                                        )
                                          if (!a.m_symbol[e][l].active) {
                                            s++;
                                            var c = a.m_symbol[e][l];
                                            a.m_symbol[e].splice(l, 1),
                                              c.removeFromParent();
                                            var u = c.getComponent(Sprite);
                                            NodePool.GetInstance().ReturnSymbolSprite(
                                              u
                                            );
                                          }
                                        for (
                                          var m = function (l) {
                                              if (
                                                a.m_symbol[e][l] &&
                                                a.m_symbol[e][l].active
                                              ) {
                                                var c =
                                                    a.m_symbol[e][l].position,
                                                  u = a.GetSymbolPosition(e, l),
                                                  m = Math.floor(u.y - c.y);
                                                if (0 != m) {
                                                  var p =
                                                    Math.abs(m) /
                                                    a.m_symbolSize.height;
                                                  o.push(
                                                    new Promise(function (t) {
                                                      tween(a.m_symbol[e][l])
                                                        .by(
                                                          (SYMBOL_ENTER_MOVE_TIME *
                                                            p) /
                                                            TSQ_Define.ROW,
                                                          {
                                                            position: v3(0, m),
                                                          },
                                                          { easing: "sineIn" }
                                                        )
                                                        .by(BOUNCE_TIME, {
                                                          position: v3(
                                                            0,
                                                            BOUNCE_DISTANCE
                                                          ),
                                                        })
                                                        .by(BOUNCE_BACK_TIME, {
                                                          position: v3(
                                                            0,
                                                            FALL_OVER_DISTANCE -
                                                              BOUNCE_DISTANCE
                                                          ),
                                                        })
                                                        .call(function () {
                                                          a.m_symbol[e][
                                                            l
                                                          ].setPosition(u),
                                                            a.PlayDropSound(
                                                              e,
                                                              l
                                                            ),
                                                            t();
                                                        })
                                                        .start();
                                                    })
                                                  );
                                                }
                                              } else {
                                                i || ((i = !0), n++);
                                                var h = t[e].Col[r];
                                                r++,
                                                  o.push(
                                                    a.EnterPlate(e, l, h, s, n)
                                                  );
                                              }
                                            },
                                            p = 0;
                                          p < TSQ_Define.ROW;
                                          p++
                                        )
                                          m(p);
                                      },
                                      r = 0;
                                    r < TSQ_Define.COL;
                                    r++
                                  )
                                    i(r);
                                  return (e.next = 8), Promise.all(o);
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.TileMatching = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t,
                          o,
                          n,
                          i = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    t = new Array(),
                                      this.m_isDropSounds.forEach(function (
                                        e,
                                        t
                                      ) {
                                        return (i.m_isDropSounds[t] = !0);
                                      }),
                                      o = function (e) {
                                        for (
                                          var o = TSQ_Define.ROW - 1;
                                          o >= 0;
                                          o--
                                        )
                                          if (!i.m_symbol[e][o].active) {
                                            var n = i.m_symbol[e][o];
                                            i.m_symbol[e].splice(o, 1),
                                              n.removeFromParent();
                                            var r = n.getComponent(Sprite);
                                            NodePool.GetInstance().ReturnSymbolSprite(
                                              r
                                            );
                                          }
                                        for (
                                          var a = function (o) {
                                              if (
                                                i.m_symbol[e][o] &&
                                                i.m_symbol[e][o].active
                                              ) {
                                                var n =
                                                    i.m_symbol[e][o].position,
                                                  r = i.GetSymbolPosition(e, o),
                                                  a = Math.floor(r.y - n.y);
                                                if (0 != a) {
                                                  var s =
                                                    Math.abs(a) /
                                                    i.m_symbolSize.height;
                                                  t.push(
                                                    new Promise(function (t) {
                                                      tween(i.m_symbol[e][o])
                                                        .by(
                                                          (SYMBOL_ENTER_MOVE_TIME *
                                                            s) /
                                                            TSQ_Define.ROW,
                                                          {
                                                            position: v3(0, a),
                                                          },
                                                          { easing: "sineIn" }
                                                        )
                                                        .by(BOUNCE_TIME, {
                                                          position: v3(
                                                            0,
                                                            BOUNCE_DISTANCE
                                                          ),
                                                        })
                                                        .by(BOUNCE_BACK_TIME, {
                                                          position: v3(
                                                            0,
                                                            FALL_OVER_DISTANCE -
                                                              BOUNCE_DISTANCE
                                                          ),
                                                        })
                                                        .call(function () {
                                                          i.m_symbol[e][
                                                            o
                                                          ].setPosition(r),
                                                            i.PlayDropSound(
                                                              e,
                                                              o
                                                            ),
                                                            t();
                                                        })
                                                        .start();
                                                    })
                                                  );
                                                }
                                              }
                                            },
                                            s = 0;
                                          s < TSQ_Define.ROW;
                                          s++
                                        )
                                          a(s);
                                      },
                                      n = 0;
                                    n < TSQ_Define.COL;
                                    n++
                                  )
                                    o(n);
                                  return (e.next = 6), Promise.all(t);
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
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.PatchUp = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o) {
                        var n,
                          i,
                          r,
                          a,
                          s,
                          l,
                          c = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (n = []),
                                    this.m_isDropSounds.forEach(function (
                                      e,
                                      t
                                    ) {
                                      return (c.m_isDropSounds[t] = !0);
                                    }),
                                    (i = 0);
                                case 3:
                                  if (!(i < TSQ_Define.COL)) {
                                    e.next = 25;
                                    break;
                                  }
                                  (r = 0),
                                    (a = node.minus(
                                      TSQ_Define.ROW,
                                      this.m_symbol[i].length
                                    )),
                                    (s = 0);
                                case 7:
                                  if (!(s < TSQ_Define.ROW)) {
                                    e.next = 22;
                                    break;
                                  }
                                  if (
                                    this.m_symbol[i][s] &&
                                    this.m_symbol[i][s].active
                                  ) {
                                    e.next = 19;
                                    break;
                                  }
                                  if (((l = t[i][r]), r++, !(o || i <= 1))) {
                                    e.next = 18;
                                    break;
                                  }
                                  return (
                                    (e.next = 14), this.EnterPlate(i, s, l, a)
                                  );
                                case 14:
                                  return (e.next = 16), node$4.Wait(this, 0.3);
                                case 16:
                                  e.next = 19;
                                  break;
                                case 18:
                                  n.push(this.EnterPlate(i, s, l, a));
                                case 19:
                                  s++, (e.next = 7);
                                  break;
                                case 22:
                                  i++, (e.next = 3);
                                  break;
                                case 25:
                                  if (!(n.length > 0)) {
                                    e.next = 28;
                                    break;
                                  }
                                  return (e.next = 28), Promise.all(n);
                                case 28:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (t, o) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.ShowDarkOrLightSymbol = function (e) {
                    for (var t = 0; t < this.m_symbol.length; t++)
                      for (var o = 0; o < this.m_symbol[t].length; o++) {
                        var n = this.m_symbol[t][o];
                        n.getComponent(UIRenderer).color = e
                          ? color(144, 144, 144)
                          : color(255, 255, 255);
                      }
                  }),
                  (o.SetSymbolLightOtherDark = function (e) {
                    for (var t = 0; t < this.m_symbol.length; t++)
                      for (var o = 0; o < this.m_symbol[t].length; o++) {
                        var n = this.m_symbol[t][o];
                        e == this.m_plate[t].Col[o]
                          ? (n.getComponent(UIRenderer).color = color(
                              255,
                              255,
                              255
                            ))
                          : (n.getComponent(UIRenderer).color = color(
                              144,
                              144,
                              144
                            ));
                      }
                  }),
                  (o.ShowAllSymbolNode = function () {
                    this.m_symbol.forEach(function (e) {
                      return e.forEach(function (e) {
                        return (e.active = !0);
                      });
                    });
                  }),
                  (o.GetSymbol = function (e, t) {
                    return this.m_plate[e].Col[t];
                  }),
                  (o.GetSymbolNode = function (e, t) {
                    return e >= 0 &&
                      e < TSQ_Define.COL &&
                      t >= 0 &&
                      t < TSQ_Define.ROW
                      ? this.m_symbol[e][t]
                      : null;
                  }),
                  (o.GetSymbolPosition = function (e, t) {
                    var o =
                        this.m_symbolSize.width * (e + 0.5) +
                        this.m_reelPositionOffset[e].x -
                        this.m_viewSize.width / 2,
                      n =
                        this.m_symbolSize.height * (t + 0.5) +
                        this.m_reelPositionOffset[e].y -
                        this.m_viewSize.height / 2;
                    return v3(o, n);
                  }),
                  (o.GetBigSymbolPosition = function (e, t, o) {
                    var n =
                        this.m_symbolSize.width * (e + 0.5) +
                        this.m_reelPositionOffset[e].x -
                        this.m_viewSize.width / 2 +
                        this.m_symbolSize.width * (0.5 * (o - 1)),
                      i =
                        this.m_symbolSize.height * (t + 0.5) +
                        this.m_reelPositionOffset[e].y -
                        this.m_viewSize.height / 2 +
                        this.m_symbolSize.height * (0.5 * (o - 1));
                    return v3(n, i);
                  }),
                  (o.PlayDropSound = function (e, t, o) {
                    void 0 === o && (o = !1),
                      o
                        ? this.m_isNewDropSounds[e] &&
                          (this.PlayDropSoundAvoidOverdubbing(t),
                          (this.m_isNewDropSounds[e] = !1))
                        : this.m_isDropSounds[e] &&
                          (this.PlayDropSoundAvoidOverdubbing(t),
                          (this.m_isDropSounds[e] = !1));
                  }),
                  (o.PlayDropSoundAvoidOverdubbing = function (e) {
                    if (Date.now() > this.m_dropSoundTime) {
                      var t = TSQ_Define.DropSoundVol[e];
                      node$1.Play(TSQ_Define.AudioClips.Reel_Stop, !1, null, t),
                        (this.m_dropSoundTime =
                          Date.now() + TSQ_Define.Drop_Sound_Effect_Interval);
                    }
                  }),
                  (o.EnterPlate = function (e, t, o, n, i) {
                    var r = this;
                    void 0 === n && (n = TSQ_Define.ROW),
                      void 0 === i && (i = -1);
                    var a =
                      this.m_symbolSize.height * (TSQ_Define.ROW - 0.5) -
                      this.m_viewSize.height / 2;
                    return new Promise(function (s) {
                      r.m_plate[e].Col[t] = o;
                      var l = null,
                        c =
                          o === TSQ_Define.Symbol.WILD
                            ? Z_INDEX.WILD
                            : Z_INDEX.SYMBOL;
                      r.m_symbol[e][t]
                        ? ((r.m_symbol[e][t].active = !0),
                          (l = r.m_symbol[e][t].getComponent(Sprite)))
                        : ((l = NodePool.GetInstance().GetSymbolSprite()),
                          (r.m_symbol[e][t] = l.node),
                          r.node.addChild(r.m_symbol[e][t])),
                        node.SetZIndex(r.m_symbol[e][t], c),
                        (l.spriteFrame = r.m_symbolSpriteFrames[o]);
                      var u = r.m_symbol[e][t];
                      u.active = !0;
                      var m = r.GetSymbolPosition(e, t),
                        p =
                          a +
                          r.m_reelPositionOffset[e].y +
                          r.m_symbolSize.height *
                            (t - (TSQ_Define.ROW - n) + 1);
                      u.setPosition(m.x, p + 20), -1 === i && (i = e);
                      tween(u)
                        .delay(r.GetDelayTime(i, t, r.m_isHardStop))
                        .to(
                          (SYMBOL_ENTER_MOVE_TIME * n) / TSQ_Define.ROW,
                          { position: v3(m.x, m.y - FALL_OVER_DISTANCE) },
                          { easing: "sineIn" }
                        )
                        .by(BOUNCE_TIME, { position: v3(0, BOUNCE_DISTANCE) })
                        .by(BOUNCE_BACK_TIME, {
                          position: v3(0, FALL_OVER_DISTANCE - BOUNCE_DISTANCE),
                        })
                        .call(function () {
                          u.setPosition(m), r.PlayDropSound(e, t, !0), s();
                        })
                        .start();
                    });
                  }),
                  (o.LeavePlate = function (e, t, o) {
                    var n = this;
                    return (
                      !0,
                      new Promise(function (o) {
                        tween(n.m_symbol[e][t])
                          .delay(n.GetDelayTime(e, t, true, !0))
                          .by(
                            SYMBOL_LEVEL_MOVE_TIME,
                            { position: v3(0, -SYMBOL_MOVE_DISTANCE) },
                            { easing: "sineIn" }
                          )
                          .call(function () {
                            o();
                          })
                          .start();
                      })
                    );
                  }),
                  (o.GetDelayTime = function (e, t, o, n) {
                    return node$7.TempoSetting.SweetLand.GET_DELAY_TIME(
                      e,
                      t,
                      o
                    );
                  }),
                  (o.CheckPlate = function (e) {
                    for (var t = 0; t < TSQ_Define.COL; t++)
                      for (var o = 0; o < TSQ_Define.ROW; o++) {
                        var n = this.m_symbolSpriteFrames[e[t].Col[o]].name;
                        if (
                          this.m_symbol[t][o].getComponent(Sprite).spriteFrame
                            .name !== n
                        )
                          return !1;
                      }
                    return !0;
                  }),
                  _createClass(t, [
                    {
                      key: "Plate",
                      get: function () {
                        return this.m_plate;
                      },
                    },
                    {
                      key: "IsHardStop",
                      get: function () {
                        return this.m_isHardStop;
                      },
                    },
                    {
                      key: "IsPlateCleaned",
                      get: function () {
                        return this.m_isPlateCleaned;
                      },
                    },
                    {
                      key: "IsPatchUpFinished",
                      get: function () {
                        return this.m_isPatchUpFinished;
                      },
                    },
                    {
                      key: "IsMatchingFinished",
                      get: function () {
                        return this.m_isMatchingFinished;
                      },
                    },
                    {
                      key: "IsInitStop",
                      get: function () {
                        return this.m_isInitStop;
                      },
                    },
                  ]),
                  t
                );
              })(Component)),
              (_descriptor$9 = _applyDecoratedDescriptor(
                _class2$9.prototype,
                "m_symbolSpriteFrames",
                [_dec$9],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_class$c = _class2$9))
            ) || _class$c),
          _dec$a,
          _class$d;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "66481dwBnRLKYsCjBm42igT",
            "WaitResState",
            void 0
          );
        var ccclass$d = _decorator.ccclass,
          WaitResState =
            ((_dec$a = ccclass$d("WaitResState")),
            _dec$a(
              (_class$d = (function (e) {
                function t(t) {
                  var o;
                  return (
                    ((o = e.call(this) || this).m_gameView = null),
                    (o.m_gameView = t),
                    o
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.OnEnter = function () {
                    log("game state WAIT_RES"),
                      (this.m_gameView.EffectPlate.GameIntro.node.active = !0),
                      this.m_gameView.EffectPlate.GameIntro.Pause(
                        this.m_gameView.IsLandscape
                      );
                  }),
                  (o.OnProcess = function () {
                    node$3.IsFeaturesDemoLoaded() &&
                      node$5.NextState(TSQ_Define.GameState.WAIT_READY);
                  }),
                  (o.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$d),
          _dec$b,
          _class$e;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "bb574VeYyNIMIa/Ftc/2pJF",
            "WaitReadyState",
            void 0
          );
        var ccclass$e = _decorator.ccclass,
          WaitReadyState =
            ((_dec$b = ccclass$e("WaitReadyState")),
            _dec$b(
              (_class$e = (function (e) {
                function t(t) {
                  var o;
                  return (
                    ((o = e.call(this) || this).m_gameView = null),
                    (o.m_gameView = t),
                    o
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.OnEnter = function () {
                    log("game state WAIT_READY"),
                      this.m_gameView.BuyBonus.SetBuyBtnVisible(!1),
                      node$3.ShowGameScene(),
                      node$3.ShowPlayReady(),
                      node$3.SetBarNodeVisiable(!1),
                      node$8.LoadingComplete(),
                      (this.m_gameView.EffectPlate.GameIntro.node.active = !0),
                      this.m_gameView.InitExtra();
                  }),
                  (o.OnProcess = function () {}),
                  (o.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$e),
          _dec$c,
          _class$f;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "95c04M9FP1CHYFvOXMvAa5r",
            "PlateShowState",
            void 0
          );
        var ccclass$f = _decorator.ccclass,
          PlateShowState =
            ((_dec$c = ccclass$f("PlateShowState")),
            _dec$c(
              (_class$f = (function (e) {
                function t(t) {
                  var o;
                  return (
                    ((o = e.call(this) || this).m_gameView = null),
                    (o.m_gameView = t),
                    o
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.OnEnter = function () {
                    var e = this;
                    log("game state PLATE_SHOW"),
                      (this.m_gameView.IsLock = !0),
                      this.m_gameView.EffectPlate.GameIntro.Show(
                        this.m_gameView.IsLandscape,
                        function (t) {
                          "Gamelntro_ShowBar" == t &&
                            (node$3.SetBarNodeVisiable(!0, 0.3),
                            e.m_gameView.BuyBonus.SetBuyBtnVisible(!0));
                        }
                      ).then(function () {
                        node$3.SetSpinState(SlotBottomBarState.IDLE),
                          node$4.FreeSpinRemain > 0
                            ? node$5.NextState(CommonState.CHECK_FREESPIN)
                            : node$5.NextState(CommonState.IDLE),
                          node$9.StartAutoShow(),
                          e.m_gameView.lockEnd();
                      });
                  }),
                  (o.OnProcess = function () {}),
                  (o.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$f),
          _dec$d,
          _class$g;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "e25fa5gS2tC+6NZlen69Gw0",
            "FeatureShowState",
            void 0
          );
        var ccclass$g = _decorator.ccclass,
          FeatureShowState =
            ((_dec$d = ccclass$g("FeatureShowState")),
            _dec$d(
              (_class$g = (function (e) {
                function t(t) {
                  var o;
                  return (
                    ((o = e.call(this) || this).m_gameView = null),
                    (o.m_gameView = t),
                    o
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.OnEnter = function () {
                    log("Game_Define.GAMEVIEW_STATE.FEATURE_SHOW"),
                      node$3.CanPlayFeaturesDemo(!0),
                      (this.m_gameView.IsAutoShowFeatures = !0),
                      node$3.SetBarNodeVisiable(!0),
                      this.m_gameView.BuyBonus.SetBuyBtnVisible(!0),
                      node$a.AutoShowFeatures(),
                      this.m_gameView.ResumeBgm(),
                      (this.m_gameView.EffectPlate.GameIntro.node.active = !1);
                  }),
                  (o.OnProcess = function () {}),
                  (o.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$g),
          _dec$e,
          _class$h;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "76eac/rOg5Nq44XzcfG72Sd",
            "FirstPlateState",
            void 0
          );
        var ccclass$h = _decorator.ccclass,
          FirstPlateState =
            ((_dec$e = ccclass$h("FirstPlateState")),
            _dec$e(
              (_class$h = (function (e) {
                function t(t) {
                  var o;
                  return (
                    ((o = e.call(this) || this).m_gameView = null),
                    (o.m_isShowLightPoint = !1),
                    (o.m_waiting = !1),
                    (o.m_gameView = t),
                    o
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.OnEnter = function () {
                    var e = this;
                    if (
                      (log("game state FIRST_PLATE"),
                      (this.m_isShowLightPoint = !0),
                      this.m_gameView.SlotReels.IsPlateCleaned &&
                        this.m_gameView.SlotReels.ShowNewPlate(),
                      0 == this.m_gameView.GetBuyBonusIndex())
                    ) {
                      this.m_gameView.BuyBonus.CleanInfo();
                      var t =
                        this.m_gameView.SpinAck.RoundQueue[TSQ_Define.Round]
                          .ComboStageData[TSQ_Define.PlateIdx];
                      this.m_gameView.EffectPlate.TriggerAltarById(t.LightGet),
                        node$3.IsHardStop &&
                          ((this.m_waiting = !0),
                          tween(this.m_gameView.node)
                            .delay(1)
                            .call(function () {
                              e.m_waiting = !1;
                            })
                            .start());
                    }
                  }),
                  (o.OnProcess = function () {
                    this.m_gameView.SlotReels.IsPlateCleaned &&
                    this.m_isShowLightPoint
                      ? ((this.m_isShowLightPoint = !1),
                        this.m_gameView.EffectPlate.ShowLightPoint(
                          this.m_gameView.SpinAck.RoundQueue[TSQ_Define.Round]
                            .LightPos
                        ))
                      : this.m_gameView.SlotReels.IsInitStop &&
                        !this.m_waiting &&
                        node$5.NextState(TSQ_Define.GameState.EXPLODE);
                  }),
                  (o.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$h),
          _dec$f,
          _class$i;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "984e6a9LhpHDZH6OIpInc0z",
            "ExplodeState",
            void 0
          );
        var ccclass$i = _decorator.ccclass,
          ExplodeState =
            ((_dec$f = ccclass$i("ExplodeState")),
            _dec$f(
              (_class$i = (function (e) {
                function t(t) {
                  var o;
                  return (
                    ((o = e.call(this) || this).m_gameView = null),
                    (o.m_gameView = t),
                    o
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.OnEnter = function () {
                    var e = this;
                    log("game state EXPLODE");
                    var t = this.m_gameView.SpinAck.RoundQueue,
                      o =
                        t[TSQ_Define.Round].ComboStageData[TSQ_Define.PlateIdx];
                    if (
                      (this.m_gameView.SlotReels.SetPlateInfo(
                        o.ComboStageSymbol
                      ),
                      this.m_gameView.SlotReels.CheckPlate(o.ComboStageSymbol))
                    ) {
                      var n = o.AwardDataVec;
                      TSQ_Define.EliminateTotalCount += o.EliminateCount;
                      var i = o.LightInfo;
                      if (i)
                        switch (((this.m_gameView.IsLock = !0), i.LightType)) {
                          case LightType.LightTypeOne:
                            node$5.NextState(
                              TSQ_Define.GameState.LIGHT_BALL_CYAN
                            );
                            break;
                          case LightType.LightTypeTwo:
                            node$5.NextState(
                              TSQ_Define.GameState.LIGHT_BALL_PURPLE
                            );
                            break;
                          case LightType.LightTypeThree:
                            node$5.NextState(
                              TSQ_Define.GameState.LIGHT_BALL_GREEN
                            );
                            break;
                          case LightType.LightTypeFour:
                            node$5.NextState(
                              TSQ_Define.GameState.LIGHT_BALL_ORANGE
                            );
                            break;
                          case LightType.LightTypeFive:
                            node$5.NextState(
                              TSQ_Define.GameState.LIGHT_BALL_BLUE
                            );
                        }
                      else if (n.length) {
                        var r = this.m_gameView.GetHpBarPercent();
                        this.m_gameView.SlotReels.ShowDarkOrLightSymbol(!0),
                          this.m_gameView.EffectPlate.EliminateAwardSymbol(
                            n,
                            r
                          ).then(function () {
                            e.m_gameView.SlotReels.ShowDarkOrLightSymbol(!1),
                              (TSQ_Define.TotalWin +=
                                t[TSQ_Define.Round].ComboStageData[
                                  TSQ_Define.PlateIdx
                                ].ComboStageWin),
                              e.m_gameView.SetWin(),
                              e.m_gameView.IsChange &&
                                e.m_gameView.OnRotation(),
                              node$5.NextState(
                                TSQ_Define.GameState.COLLECT_LIGHT_POINT
                              );
                          });
                      } else
                        node$5.NextState(
                          TSQ_Define.GameState.COLLECT_LIGHT_POINT
                        );
                    } else
                      node$6.ShowMessageBox(
                        node$4.StringKey.MSGBOX_CONNECT_FAIL,
                        node$4.StringKey.MSGBOX_TITLE_SYSTEM_INFO,
                        node.CloseGameTab,
                        node.GetErrorCode(
                          node$4.ErrorStatus.Game,
                          node$4.ClientErrorCode.PlateError
                        )
                      );
                  }),
                  (o.OnProcess = function () {}),
                  (o.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$i),
          _dec$g,
          _class$j;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "4a742MTMRhByJMbDsAKYEOY",
            "MatchPatchingUpState",
            void 0
          );
        var ccclass$j = _decorator.ccclass,
          MatchPatchingUpState =
            ((_dec$g = ccclass$j("MatchPatchingUpState")),
            _dec$g(
              (_class$j = (function (e) {
                function t(t) {
                  var o;
                  return (
                    ((o = e.call(this) || this).m_gameView = null),
                    (o.m_gameView = t),
                    o
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.OnEnter = function () {
                    log("game state MATCHING_PATCH_UP");
                    var e = this.m_gameView.SpinAck.RoundQueue,
                      t = e[TSQ_Define.Round].ComboStageData;
                    if (t.length > TSQ_Define.PlateIdx + 1) {
                      var o = t[TSQ_Define.PlateIdx].FillSymbols;
                      this.m_gameView.SlotReels.TileMatchingAndPatchUp(o).then(
                        function () {
                          TSQ_Define.PlateIdx++,
                            node$5.NextState(TSQ_Define.GameState.EXPLODE);
                        }
                      );
                    } else
                      TSQ_Define.IsInFG
                        ? e.length > TSQ_Define.Round + 1
                          ? node$5.NextState(
                              TSQ_Define.GameState.FREE_GAME_LEVEL_UP
                            )
                          : node$5.NextState(TSQ_Define.GameState.LEAVE_FREE)
                        : node$5.NextState(TSQ_Define.GameState.AWARD);
                  }),
                  (o.OnProcess = function () {}),
                  (o.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$j),
          _dec$h,
          _class$k;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "5a8b10DWDZFKJaOsKqBDjCL", "SpinState", void 0);
        var ccclass$k = _decorator.ccclass,
          SpinState =
            ((_dec$h = ccclass$k("SpinState")),
            _dec$h(
              (_class$k = (function (e) {
                function t(t) {
                  var o;
                  return (
                    ((o = e.call(this) || this).m_gameView = null),
                    (o.m_gameView = t),
                    o
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.OnEnter = function () {
                    if (
                      (log("game state SPIN"),
                      node$b.StartSpin(),
                      node$1.GetVolume(this.m_gameView.BgAudioId) < 1 &&
                        this.m_gameView.ChangeFadeType(FADE_TYPE.IN),
                      Tween.stopAllByTarget(this.m_gameView.node),
                      (TSQ_Define.EliminateTotalCount = 0),
                      TSQ_Define.IsInFG)
                    )
                      if (node$c.HasUnshow) {
                        (node$c.HasUnshow = !1), (TSQ_Define.PlateIdx = 0);
                        var e =
                          this.m_gameView.SpinAck.RoundQueue[TSQ_Define.Round]
                            .ComboStageData[TSQ_Define.PlateIdx]
                            .ComboStageSymbol;
                        this.m_gameView.SlotReels.SetPlateSymbol(e),
                          node$5.NextState(TSQ_Define.GameState.EXPLODE);
                      } else {
                        var t =
                          this.m_gameView.SpinAck.RoundQueue[
                            TSQ_Define.Round + 1
                          ].ComboStageData[TSQ_Define.PlateIdx];
                        this.m_gameView.SlotReels.SpinNewFgPlate(
                          t.ComboStageSymbol
                        ).then(function () {
                          TSQ_Define.Round++,
                            node$5.NextState(TSQ_Define.GameState.EXPLODE);
                        });
                      }
                    else
                      node$a.IsFeaturesDemoMode
                        ? this.m_gameView.EffectPlate.ResetAltar()
                        : (this.m_gameView.StartSpin(),
                          node$c.HasUnshow &&
                            (this.m_gameView.OnRecvSpinAck(
                              this.m_gameView.UnshowSpinAck
                            ),
                            (node$c.HasUnshow = !1),
                            (this.m_gameView.UnshowSpinAck = null)));
                  }),
                  (o.OnProcess = function () {}),
                  (o.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$k),
          _dec$i,
          _class$l;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "63848tofPdJI6kEsDoII5pm", "IdleState", void 0);
        var ccclass$l = _decorator.ccclass,
          IdleState =
            ((_dec$i = ccclass$l("IdleState")),
            _dec$i(
              (_class$l = (function (e) {
                function t(t) {
                  var o;
                  return (
                    ((o = e.call(this) || this).m_gameView = null),
                    (o.m_gameView = t),
                    o
                  );
                }
                return (
                  _inheritsLoose(t, e), (t.prototype.Enter = function () {}), t
                );
              })(Common_IdleState))
            ) || _class$l),
          _cjsExports$1;
        cclegacy._RF.pop();
        var __cjsMetaURL$j =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/long/src/long.js";
        loader.define(
          __cjsMetaURL$j,
          function (e, t, o, n, i) {
            o.exports = a;
            var r = null;
            try {
              r = new WebAssembly.Instance(
                new WebAssembly.Module(
                  new Uint8Array([
                    0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4,
                    127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6,
                    1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5,
                    100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0,
                    3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95,
                    117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0,
                    10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173,
                    32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66,
                    32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4,
                    167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134,
                    132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4,
                    66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32,
                    0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3,
                    173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0,
                    32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66,
                    32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129,
                    34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1,
                    126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173,
                    32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167,
                    36, 0, 32, 4, 167, 11,
                  ])
                ),
                {}
              ).exports;
            } catch (e) {}
            function a(e, t, o) {
              (this.low = 0 | e), (this.high = 0 | t), (this.unsigned = !!o);
            }
            function s(e) {
              return !0 === (e && e.__isLong__);
            }
            a.prototype.__isLong__,
              Object.defineProperty(a.prototype, "__isLong__", { value: !0 }),
              (a.isLong = s);
            var l = {},
              c = {};
            function u(e, t) {
              var o, n, i;
              return t
                ? (i = 0 <= (e >>>= 0) && e < 256) && (n = c[e])
                  ? n
                  : ((o = p(e, (0 | e) < 0 ? -1 : 0, !0)), i && (c[e] = o), o)
                : (i = -128 <= (e |= 0) && e < 128) && (n = l[e])
                ? n
                : ((o = p(e, e < 0 ? -1 : 0, !1)), i && (l[e] = o), o);
            }
            function m(e, t) {
              if (isNaN(e)) return t ? b : g;
              if (t) {
                if (e < 0) return b;
                if (e >= C) return L;
              } else {
                if (e <= -S) return A;
                if (e + 1 >= S) return w;
              }
              return e < 0 ? m(-e, t).neg() : p(e % d | 0, (e / d) | 0, t);
            }
            function p(e, t, o) {
              return new a(e, t, o);
            }
            (a.fromInt = u), (a.fromNumber = m), (a.fromBits = p);
            var h = Math.pow;
            function _(e, t, o) {
              if (0 === e.length) throw Error("empty string");
              if (
                "NaN" === e ||
                "Infinity" === e ||
                "+Infinity" === e ||
                "-Infinity" === e
              )
                return g;
              if (
                ("number" == typeof t ? ((o = t), (t = !1)) : (t = !!t),
                (o = o || 10) < 2 || 36 < o)
              )
                throw RangeError("radix");
              var n;
              if ((n = e.indexOf("-")) > 0) throw Error("interior hyphen");
              if (0 === n) return _(e.substring(1), t, o).neg();
              for (var i = m(h(o, 8)), r = g, a = 0; a < e.length; a += 8) {
                var s = Math.min(8, e.length - a),
                  l = parseInt(e.substring(a, a + s), o);
                if (s < 8) {
                  var c = m(h(o, s));
                  r = r.mul(c).add(m(l));
                } else r = (r = r.mul(i)).add(m(l));
              }
              return (r.unsigned = t), r;
            }
            function f(e, t) {
              return "number" == typeof e
                ? m(e, t)
                : "string" == typeof e
                ? _(e, t)
                : p(e.low, e.high, "boolean" == typeof t ? t : e.unsigned);
            }
            (a.fromString = _), (a.fromValue = f);
            var d = 4294967296,
              C = d * d,
              S = C / 2,
              y = u(1 << 24),
              g = u(0);
            a.ZERO = g;
            var b = u(0, !0);
            a.UZERO = b;
            var T = u(1);
            a.ONE = T;
            var v = u(1, !0);
            a.UONE = v;
            var E = u(-1);
            a.NEG_ONE = E;
            var w = p(-1, 2147483647, !1);
            a.MAX_VALUE = w;
            var L = p(-1, -1, !0);
            a.MAX_UNSIGNED_VALUE = L;
            var A = p(0, -2147483648, !1);
            a.MIN_VALUE = A;
            var $ = a.prototype;
            ($.toInt = function () {
              return this.unsigned ? this.low >>> 0 : this.low;
            }),
              ($.toNumber = function () {
                return this.unsigned
                  ? (this.high >>> 0) * d + (this.low >>> 0)
                  : this.high * d + (this.low >>> 0);
              }),
              ($.toString = function (e) {
                if ((e = e || 10) < 2 || 36 < e) throw RangeError("radix");
                if (this.isZero()) return "0";
                if (this.isNegative()) {
                  if (this.eq(A)) {
                    var t = m(e),
                      o = this.div(t),
                      n = o.mul(t).sub(this);
                    return o.toString(e) + n.toInt().toString(e);
                  }
                  return "-" + this.neg().toString(e);
                }
                for (var i = m(h(e, 6), this.unsigned), r = this, a = ""; ; ) {
                  var s = r.div(i),
                    l = (r.sub(s.mul(i)).toInt() >>> 0).toString(e);
                  if ((r = s).isZero()) return l + a;
                  for (; l.length < 6; ) l = "0" + l;
                  a = "" + l + a;
                }
              }),
              ($.getHighBits = function () {
                return this.high;
              }),
              ($.getHighBitsUnsigned = function () {
                return this.high >>> 0;
              }),
              ($.getLowBits = function () {
                return this.low;
              }),
              ($.getLowBitsUnsigned = function () {
                return this.low >>> 0;
              }),
              ($.getNumBitsAbs = function () {
                if (this.isNegative())
                  return this.eq(A) ? 64 : this.neg().getNumBitsAbs();
                for (
                  var e = 0 != this.high ? this.high : this.low, t = 31;
                  t > 0 && 0 == (e & (1 << t));
                  t--
                );
                return 0 != this.high ? t + 33 : t + 1;
              }),
              ($.isZero = function () {
                return 0 === this.high && 0 === this.low;
              }),
              ($.eqz = $.isZero),
              ($.isNegative = function () {
                return !this.unsigned && this.high < 0;
              }),
              ($.isPositive = function () {
                return this.unsigned || this.high >= 0;
              }),
              ($.isOdd = function () {
                return 1 == (1 & this.low);
              }),
              ($.isEven = function () {
                return 0 == (1 & this.low);
              }),
              ($.equals = function (e) {
                return (
                  s(e) || (e = f(e)),
                  (this.unsigned === e.unsigned ||
                    this.high >>> 31 != 1 ||
                    e.high >>> 31 != 1) &&
                    this.high === e.high &&
                    this.low === e.low
                );
              }),
              ($.eq = $.equals),
              ($.notEquals = function (e) {
                return !this.eq(e);
              }),
              ($.neq = $.notEquals),
              ($.ne = $.notEquals),
              ($.lessThan = function (e) {
                return this.comp(e) < 0;
              }),
              ($.lt = $.lessThan),
              ($.lessThanOrEqual = function (e) {
                return this.comp(e) <= 0;
              }),
              ($.lte = $.lessThanOrEqual),
              ($.le = $.lessThanOrEqual),
              ($.greaterThan = function (e) {
                return this.comp(e) > 0;
              }),
              ($.gt = $.greaterThan),
              ($.greaterThanOrEqual = function (e) {
                return this.comp(e) >= 0;
              }),
              ($.gte = $.greaterThanOrEqual),
              ($.ge = $.greaterThanOrEqual),
              ($.compare = function (e) {
                if ((s(e) || (e = f(e)), this.eq(e))) return 0;
                var t = this.isNegative(),
                  o = e.isNegative();
                return t && !o
                  ? -1
                  : !t && o
                  ? 1
                  : this.unsigned
                  ? e.high >>> 0 > this.high >>> 0 ||
                    (e.high === this.high && e.low >>> 0 > this.low >>> 0)
                    ? -1
                    : 1
                  : this.sub(e).isNegative()
                  ? -1
                  : 1;
              }),
              ($.comp = $.compare),
              ($.negate = function () {
                return !this.unsigned && this.eq(A) ? A : this.not().add(T);
              }),
              ($.neg = $.negate),
              ($.add = function (e) {
                s(e) || (e = f(e));
                var t = this.high >>> 16,
                  o = 65535 & this.high,
                  n = this.low >>> 16,
                  i = 65535 & this.low,
                  r = e.high >>> 16,
                  a = 65535 & e.high,
                  l = e.low >>> 16,
                  c = 0,
                  u = 0,
                  m = 0,
                  h = 0;
                return (
                  (m += (h += i + (65535 & e.low)) >>> 16),
                  (u += (m += n + l) >>> 16),
                  (c += (u += o + a) >>> 16),
                  (c += t + r),
                  p(
                    ((m &= 65535) << 16) | (h &= 65535),
                    ((c &= 65535) << 16) | (u &= 65535),
                    this.unsigned
                  )
                );
              }),
              ($.subtract = function (e) {
                return s(e) || (e = f(e)), this.add(e.neg());
              }),
              ($.sub = $.subtract),
              ($.multiply = function (e) {
                if (this.isZero()) return g;
                if ((s(e) || (e = f(e)), r))
                  return p(
                    r.mul(this.low, this.high, e.low, e.high),
                    r.get_high(),
                    this.unsigned
                  );
                if (e.isZero()) return g;
                if (this.eq(A)) return e.isOdd() ? A : g;
                if (e.eq(A)) return this.isOdd() ? A : g;
                if (this.isNegative())
                  return e.isNegative()
                    ? this.neg().mul(e.neg())
                    : this.neg().mul(e).neg();
                if (e.isNegative()) return this.mul(e.neg()).neg();
                if (this.lt(y) && e.lt(y))
                  return m(this.toNumber() * e.toNumber(), this.unsigned);
                var t = this.high >>> 16,
                  o = 65535 & this.high,
                  n = this.low >>> 16,
                  i = 65535 & this.low,
                  a = e.high >>> 16,
                  l = 65535 & e.high,
                  c = e.low >>> 16,
                  u = 65535 & e.low,
                  h = 0,
                  _ = 0,
                  d = 0,
                  C = 0;
                return (
                  (d += (C += i * u) >>> 16),
                  (_ += (d += n * u) >>> 16),
                  (d &= 65535),
                  (_ += (d += i * c) >>> 16),
                  (h += (_ += o * u) >>> 16),
                  (_ &= 65535),
                  (h += (_ += n * c) >>> 16),
                  (_ &= 65535),
                  (h += (_ += i * l) >>> 16),
                  (h += t * u + o * c + n * l + i * a),
                  p(
                    ((d &= 65535) << 16) | (C &= 65535),
                    ((h &= 65535) << 16) | (_ &= 65535),
                    this.unsigned
                  )
                );
              }),
              ($.mul = $.multiply),
              ($.divide = function (e) {
                if ((s(e) || (e = f(e)), e.isZero()))
                  throw Error("division by zero");
                var t, o, n;
                if (r)
                  return this.unsigned ||
                    -2147483648 !== this.high ||
                    -1 !== e.low ||
                    -1 !== e.high
                    ? p(
                        (this.unsigned ? r.div_u : r.div_s)(
                          this.low,
                          this.high,
                          e.low,
                          e.high
                        ),
                        r.get_high(),
                        this.unsigned
                      )
                    : this;
                if (this.isZero()) return this.unsigned ? b : g;
                if (this.unsigned) {
                  if ((e.unsigned || (e = e.toUnsigned()), e.gt(this)))
                    return b;
                  if (e.gt(this.shru(1))) return v;
                  n = b;
                } else {
                  if (this.eq(A))
                    return e.eq(T) || e.eq(E)
                      ? A
                      : e.eq(A)
                      ? T
                      : (t = this.shr(1).div(e).shl(1)).eq(g)
                      ? e.isNegative()
                        ? T
                        : E
                      : ((o = this.sub(e.mul(t))), (n = t.add(o.div(e))));
                  if (e.eq(A)) return this.unsigned ? b : g;
                  if (this.isNegative())
                    return e.isNegative()
                      ? this.neg().div(e.neg())
                      : this.neg().div(e).neg();
                  if (e.isNegative()) return this.div(e.neg()).neg();
                  n = g;
                }
                for (o = this; o.gte(e); ) {
                  t = Math.max(1, Math.floor(o.toNumber() / e.toNumber()));
                  for (
                    var i = Math.ceil(Math.log(t) / Math.LN2),
                      a = i <= 48 ? 1 : h(2, i - 48),
                      l = m(t),
                      c = l.mul(e);
                    c.isNegative() || c.gt(o);

                  )
                    c = (l = m((t -= a), this.unsigned)).mul(e);
                  l.isZero() && (l = T), (n = n.add(l)), (o = o.sub(c));
                }
                return n;
              }),
              ($.div = $.divide),
              ($.modulo = function (e) {
                return (
                  s(e) || (e = f(e)),
                  r
                    ? p(
                        (this.unsigned ? r.rem_u : r.rem_s)(
                          this.low,
                          this.high,
                          e.low,
                          e.high
                        ),
                        r.get_high(),
                        this.unsigned
                      )
                    : this.sub(this.div(e).mul(e))
                );
              }),
              ($.mod = $.modulo),
              ($.rem = $.modulo),
              ($.not = function () {
                return p(~this.low, ~this.high, this.unsigned);
              }),
              ($.and = function (e) {
                return (
                  s(e) || (e = f(e)),
                  p(this.low & e.low, this.high & e.high, this.unsigned)
                );
              }),
              ($.or = function (e) {
                return (
                  s(e) || (e = f(e)),
                  p(this.low | e.low, this.high | e.high, this.unsigned)
                );
              }),
              ($.xor = function (e) {
                return (
                  s(e) || (e = f(e)),
                  p(this.low ^ e.low, this.high ^ e.high, this.unsigned)
                );
              }),
              ($.shiftLeft = function (e) {
                return (
                  s(e) && (e = e.toInt()),
                  0 == (e &= 63)
                    ? this
                    : e < 32
                    ? p(
                        this.low << e,
                        (this.high << e) | (this.low >>> (32 - e)),
                        this.unsigned
                      )
                    : p(0, this.low << (e - 32), this.unsigned)
                );
              }),
              ($.shl = $.shiftLeft),
              ($.shiftRight = function (e) {
                return (
                  s(e) && (e = e.toInt()),
                  0 == (e &= 63)
                    ? this
                    : e < 32
                    ? p(
                        (this.low >>> e) | (this.high << (32 - e)),
                        this.high >> e,
                        this.unsigned
                      )
                    : p(
                        this.high >> (e - 32),
                        this.high >= 0 ? 0 : -1,
                        this.unsigned
                      )
                );
              }),
              ($.shr = $.shiftRight),
              ($.shiftRightUnsigned = function (e) {
                if ((s(e) && (e = e.toInt()), 0 === (e &= 63))) return this;
                var t = this.high;
                return e < 32
                  ? p(
                      (this.low >>> e) | (t << (32 - e)),
                      t >>> e,
                      this.unsigned
                    )
                  : p(32 === e ? t : t >>> (e - 32), 0, this.unsigned);
              }),
              ($.shru = $.shiftRightUnsigned),
              ($.shr_u = $.shiftRightUnsigned),
              ($.toSigned = function () {
                return this.unsigned ? p(this.low, this.high, !1) : this;
              }),
              ($.toUnsigned = function () {
                return this.unsigned ? this : p(this.low, this.high, !0);
              }),
              ($.toBytes = function (e) {
                return e ? this.toBytesLE() : this.toBytesBE();
              }),
              ($.toBytesLE = function () {
                var e = this.high,
                  t = this.low;
                return [
                  255 & t,
                  (t >>> 8) & 255,
                  (t >>> 16) & 255,
                  t >>> 24,
                  255 & e,
                  (e >>> 8) & 255,
                  (e >>> 16) & 255,
                  e >>> 24,
                ];
              }),
              ($.toBytesBE = function () {
                var e = this.high,
                  t = this.low;
                return [
                  e >>> 24,
                  (e >>> 16) & 255,
                  (e >>> 8) & 255,
                  255 & e,
                  t >>> 24,
                  (t >>> 16) & 255,
                  (t >>> 8) & 255,
                  255 & t,
                ];
              }),
              (a.fromBytes = function (e, t, o) {
                return o ? a.fromBytesLE(e, t) : a.fromBytesBE(e, t);
              }),
              (a.fromBytesLE = function (e, t) {
                return new a(
                  e[0] | (e[1] << 8) | (e[2] << 16) | (e[3] << 24),
                  e[4] | (e[5] << 8) | (e[6] << 16) | (e[7] << 24),
                  t
                );
              }),
              (a.fromBytesBE = function (e, t) {
                return new a(
                  (e[4] << 24) | (e[5] << 16) | (e[6] << 8) | e[7],
                  (e[0] << 24) | (e[1] << 16) | (e[2] << 8) | e[3],
                  t
                );
              }),
              (_cjsExports$1 = o.exports);
          },
          {}
        ),
          __cjsMetaURL$j ||
            loader.throwInvalidWrapper(
              "./long.js",
              "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/long/src/long.mjs?cjs=&original=.js"
            ),
          loader.require(__cjsMetaURL$j);
        var __cjsMetaURL$k =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js";
        loader.define(
          __cjsMetaURL$k,
          function (e, t, o, n, i) {
            function r(e, t) {
              "string" == typeof e && ((t = e), (e = void 0));
              var o = [];
              function n(e) {
                if ("string" != typeof e) {
                  var t = i();
                  if (
                    (r.verbose && console.log("codegen: " + t),
                    (t = "return " + t),
                    e)
                  ) {
                    for (
                      var a = Object.keys(e),
                        s = new Array(a.length + 1),
                        l = new Array(a.length),
                        c = 0;
                      c < a.length;

                    )
                      (s[c] = a[c]), (l[c] = e[a[c++]]);
                    return (s[c] = t), Function.apply(null, s).apply(null, l);
                  }
                  return Function(t)();
                }
                for (
                  var u = new Array(arguments.length - 1), m = 0;
                  m < u.length;

                )
                  u[m] = arguments[++m];
                if (
                  ((m = 0),
                  (e = e.replace(/%([%dfijs])/g, function (e, t) {
                    var o = u[m++];
                    switch (t) {
                      case "d":
                      case "f":
                        return String(Number(o));
                      case "i":
                        return String(Math.floor(o));
                      case "j":
                        return JSON.stringify(o);
                      case "s":
                        return String(o);
                    }
                    return "%";
                  })),
                  m !== u.length)
                )
                  throw Error("parameter count mismatch");
                return o.push(e), n;
              }
              function i(n) {
                return (
                  "function " +
                  (n || t || "") +
                  "(" +
                  ((e && e.join(",")) || "") +
                  "){\n  " +
                  o.join("\n  ") +
                  "\n}"
                );
              }
              return (n.toString = i), n;
            }
            (o.exports = r), (r.verbose = !1), o.exports;
          },
          {}
        );
        var __cjsMetaURL$l =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js";
        loader.define(
          __cjsMetaURL$l,
          function (e, t, o, n, i) {
            o.exports = s;
            var r = t("@protobufjs/aspromise"),
              a = t("@protobufjs/inquire")("fs");
            function s(e, t, o) {
              return (
                "function" == typeof t ? ((o = t), (t = {})) : t || (t = {}),
                o
                  ? !t.xhr && a && a.readFile
                    ? a.readFile(e, function (n, i) {
                        return n && "undefined" != typeof XMLHttpRequest
                          ? s.xhr(e, t, o)
                          : n
                          ? o(n)
                          : o(null, t.binary ? i : i.toString("utf8"));
                      })
                    : s.xhr(e, t, o)
                  : r(s, this, e, t)
              );
            }
            (s.xhr = function (e, t, o) {
              var n = new XMLHttpRequest();
              (n.onreadystatechange = function () {
                if (4 === n.readyState) {
                  if (0 !== n.status && 200 !== n.status)
                    return o(Error("status " + n.status));
                  if (t.binary) {
                    var e = n.response;
                    if (!e) {
                      e = [];
                      for (var i = 0; i < n.responseText.length; ++i)
                        e.push(255 & n.responseText.charCodeAt(i));
                    }
                    return o(
                      null,
                      "undefined" != typeof Uint8Array ? new Uint8Array(e) : e
                    );
                  }
                  return o(null, n.responseText);
                }
              }),
                t.binary &&
                  ("overrideMimeType" in n &&
                    n.overrideMimeType("text/plain; charset=x-user-defined"),
                  (n.responseType = "arraybuffer")),
                n.open("GET", e),
                n.send();
            }),
              o.exports;
          },
          function () {
            return {
              "@protobufjs/aspromise": __cjsMetaURL,
              "@protobufjs/inquire": __cjsMetaURL$4,
            };
          }
        );
        var __cjsMetaURL$m =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/@protobufjs/path/index.js";
        loader.define(
          __cjsMetaURL$m,
          function (e, t, o, n, i) {
            var r = e,
              a = (r.isAbsolute = function (e) {
                return /^(?:\/|\w+:)/.test(e);
              }),
              s = (r.normalize = function (e) {
                var t = (e = e
                    .replace(/\\/g, "/")
                    .replace(/\/{2,}/g, "/")).split("/"),
                  o = a(e),
                  n = "";
                o && (n = t.shift() + "/");
                for (var i = 0; i < t.length; )
                  ".." === t[i]
                    ? i > 0 && ".." !== t[i - 1]
                      ? t.splice(--i, 2)
                      : o
                      ? t.splice(i, 1)
                      : ++i
                    : "." === t[i]
                    ? t.splice(i, 1)
                    : ++i;
                return n + t.join("/");
              });
            (r.resolve = function (e, t, o) {
              return (
                o || (t = s(t)),
                a(t)
                  ? t
                  : (o || (e = s(e)),
                    (e = e.replace(/(?:\/|^)[^/]+$/, "")).length
                      ? s(e + "/" + t)
                      : t)
              );
            }),
              o.exports;
          },
          {}
        );
        var __cjsMetaURL$n =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/src/types.js";
        loader.define(
          __cjsMetaURL$n,
          function (e, t, o, n, i) {
            var r = e,
              a = t("./util"),
              s = [
                "double",
                "float",
                "int32",
                "uint32",
                "sint32",
                "fixed32",
                "sfixed32",
                "int64",
                "uint64",
                "sint64",
                "fixed64",
                "sfixed64",
                "bool",
                "string",
                "bytes",
              ];
            function l(e, t) {
              var o = 0,
                n = {};
              for (t |= 0; o < e.length; ) n[s[o + t]] = e[o++];
              return n;
            }
            (r.basic = l([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2])),
              (r.defaults = l([
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                !1,
                "",
                a.emptyArray,
                null,
              ])),
              (r.long = l([0, 0, 0, 1, 1], 7)),
              (r.mapKey = l([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2)),
              (r.packed = l([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0])),
              o.exports;
          },
          function () {
            return { "./util": __cjsMetaURL$B };
          }
        );
        var __cjsMetaURL$o =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/src/field.js";
        loader.define(
          __cjsMetaURL$o,
          function (e, t, o, n, i) {
            o.exports = m;
            var r = t("./object");
            ((m.prototype = Object.create(r.prototype)).constructor =
              m).className = "Field";
            var a,
              s = t("./enum"),
              l = t("./types"),
              c = t("./util"),
              u = /^required|optional|repeated$/;
            function m(e, t, o, n, i, a, s) {
              if (
                (c.isObject(n)
                  ? ((s = i), (a = n), (n = i = void 0))
                  : c.isObject(i) && ((s = a), (a = i), (i = void 0)),
                r.call(this, e, a),
                !c.isInteger(t) || t < 0)
              )
                throw TypeError("id must be a non-negative integer");
              if (!c.isString(o)) throw TypeError("type must be a string");
              if (void 0 !== n && !u.test((n = n.toString().toLowerCase())))
                throw TypeError("rule must be a string rule");
              if (void 0 !== i && !c.isString(i))
                throw TypeError("extend must be a string");
              "proto3_optional" === n && (n = "optional"),
                (this.rule = n && "optional" !== n ? n : void 0),
                (this.type = o),
                (this.id = t),
                (this.extend = i || void 0),
                (this.required = "required" === n),
                (this.optional = !this.required),
                (this.repeated = "repeated" === n),
                (this.map = !1),
                (this.message = null),
                (this.partOf = null),
                (this.typeDefault = null),
                (this.defaultValue = null),
                (this.long = !!c.Long && void 0 !== l.long[o]),
                (this.bytes = "bytes" === o),
                (this.resolvedType = null),
                (this.extensionField = null),
                (this.declaringField = null),
                (this._packed = null),
                (this.comment = s);
            }
            (m.fromJSON = function (e, t) {
              return new m(
                e,
                t.id,
                t.type,
                t.rule,
                t.extend,
                t.options,
                t.comment
              );
            }),
              Object.defineProperty(m.prototype, "packed", {
                get: function () {
                  return (
                    null === this._packed &&
                      (this._packed = !1 !== this.getOption("packed")),
                    this._packed
                  );
                },
              }),
              (m.prototype.setOption = function (e, t, o) {
                return (
                  "packed" === e && (this._packed = null),
                  r.prototype.setOption.call(this, e, t, o)
                );
              }),
              (m.prototype.toJSON = function (e) {
                var t = !!e && Boolean(e.keepComments);
                return c.toObject([
                  "rule",
                  ("optional" !== this.rule && this.rule) || void 0,
                  "type",
                  this.type,
                  "id",
                  this.id,
                  "extend",
                  this.extend,
                  "options",
                  this.options,
                  "comment",
                  t ? this.comment : void 0,
                ]);
              }),
              (m.prototype.resolve = function () {
                if (this.resolved) return this;
                if (
                  (void 0 === (this.typeDefault = l.defaults[this.type]) &&
                    ((this.resolvedType = (
                      this.declaringField
                        ? this.declaringField.parent
                        : this.parent
                    ).lookupTypeOrEnum(this.type)),
                    this.resolvedType instanceof a
                      ? (this.typeDefault = null)
                      : (this.typeDefault =
                          this.resolvedType.values[
                            Object.keys(this.resolvedType.values)[0]
                          ])),
                  this.options &&
                    null != this.options.default &&
                    ((this.typeDefault = this.options.default),
                    this.resolvedType instanceof s &&
                      "string" == typeof this.typeDefault &&
                      (this.typeDefault =
                        this.resolvedType.values[this.typeDefault])),
                  this.options &&
                    ((!0 !== this.options.packed &&
                      (void 0 === this.options.packed ||
                        !this.resolvedType ||
                        this.resolvedType instanceof s)) ||
                      delete this.options.packed,
                    Object.keys(this.options).length ||
                      (this.options = void 0)),
                  this.long)
                )
                  (this.typeDefault = c.Long.fromNumber(
                    this.typeDefault,
                    "u" === this.type.charAt(0)
                  )),
                    Object.freeze && Object.freeze(this.typeDefault);
                else if (this.bytes && "string" == typeof this.typeDefault) {
                  var e;
                  c.base64.test(this.typeDefault)
                    ? c.base64.decode(
                        this.typeDefault,
                        (e = c.newBuffer(c.base64.length(this.typeDefault))),
                        0
                      )
                    : c.utf8.write(
                        this.typeDefault,
                        (e = c.newBuffer(c.utf8.length(this.typeDefault))),
                        0
                      ),
                    (this.typeDefault = e);
                }
                return (
                  this.map
                    ? (this.defaultValue = c.emptyObject)
                    : this.repeated
                    ? (this.defaultValue = c.emptyArray)
                    : (this.defaultValue = this.typeDefault),
                  this.parent instanceof a &&
                    (this.parent.ctor.prototype[this.name] = this.defaultValue),
                  r.prototype.resolve.call(this)
                );
              }),
              (m.d = function (e, t, o, n) {
                return (
                  "function" == typeof t
                    ? (t = c.decorateType(t).name)
                    : t && "object" == typeof t && (t = c.decorateEnum(t).name),
                  function (i, r) {
                    c.decorateType(i.constructor).add(
                      new m(r, e, t, o, { default: n })
                    );
                  }
                );
              }),
              (m._configure = function (e) {
                a = e;
              }),
              o.exports;
          },
          function () {
            return {
              "./object": __cjsMetaURL$C,
              "./enum": __cjsMetaURL$D,
              "./types": __cjsMetaURL$n,
              "./util": __cjsMetaURL$B,
            };
          }
        );
        var __cjsMetaURL$p =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js";
        loader.define(
          __cjsMetaURL$p,
          function (e, t, o, n, i) {
            o.exports = l;
            var r = t("./object");
            ((l.prototype = Object.create(r.prototype)).constructor =
              l).className = "OneOf";
            var a = t("./field"),
              s = t("./util");
            function l(e, t, o, n) {
              if (
                (Array.isArray(t) || ((o = t), (t = void 0)),
                r.call(this, e, o),
                void 0 !== t && !Array.isArray(t))
              )
                throw TypeError("fieldNames must be an Array");
              (this.oneof = t || []),
                (this.fieldsArray = []),
                (this.comment = n);
            }
            function c(e) {
              if (e.parent)
                for (var t = 0; t < e.fieldsArray.length; ++t)
                  e.fieldsArray[t].parent || e.parent.add(e.fieldsArray[t]);
            }
            (l.fromJSON = function (e, t) {
              return new l(e, t.oneof, t.options, t.comment);
            }),
              (l.prototype.toJSON = function (e) {
                var t = !!e && Boolean(e.keepComments);
                return s.toObject([
                  "options",
                  this.options,
                  "oneof",
                  this.oneof,
                  "comment",
                  t ? this.comment : void 0,
                ]);
              }),
              (l.prototype.add = function (e) {
                if (!(e instanceof a)) throw TypeError("field must be a Field");
                return (
                  e.parent && e.parent !== this.parent && e.parent.remove(e),
                  this.oneof.push(e.name),
                  this.fieldsArray.push(e),
                  (e.partOf = this),
                  c(this),
                  this
                );
              }),
              (l.prototype.remove = function (e) {
                if (!(e instanceof a)) throw TypeError("field must be a Field");
                var t = this.fieldsArray.indexOf(e);
                if (t < 0) throw Error(e + " is not a member of " + this);
                return (
                  this.fieldsArray.splice(t, 1),
                  (t = this.oneof.indexOf(e.name)) > -1 &&
                    this.oneof.splice(t, 1),
                  (e.partOf = null),
                  this
                );
              }),
              (l.prototype.onAdd = function (e) {
                r.prototype.onAdd.call(this, e);
                for (var t = 0; t < this.oneof.length; ++t) {
                  var o = e.get(this.oneof[t]);
                  o &&
                    !o.partOf &&
                    ((o.partOf = this), this.fieldsArray.push(o));
                }
                c(this);
              }),
              (l.prototype.onRemove = function (e) {
                for (var t, o = 0; o < this.fieldsArray.length; ++o)
                  (t = this.fieldsArray[o]).parent && t.parent.remove(t);
                r.prototype.onRemove.call(this, e);
              }),
              (l.d = function () {
                for (
                  var e = new Array(arguments.length), t = 0;
                  t < arguments.length;

                )
                  e[t] = arguments[t++];
                return function (t, o) {
                  s.decorateType(t.constructor).add(new l(o, e)),
                    Object.defineProperty(t, o, {
                      get: s.oneOfGetter(e),
                      set: s.oneOfSetter(e),
                    });
                };
              }),
              o.exports;
          },
          function () {
            return {
              "./object": __cjsMetaURL$C,
              "./field": __cjsMetaURL$o,
              "./util": __cjsMetaURL$B,
            };
          }
        );
        var __cjsMetaURL$q =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js";
        loader.define(
          __cjsMetaURL$q,
          function (e, t, o, n, i) {
            o.exports = h;
            var r = t("./object");
            ((h.prototype = Object.create(r.prototype)).constructor =
              h).className = "Namespace";
            var a,
              s,
              l,
              c = t("./field"),
              u = t("./oneof"),
              m = t("./util");
            function p(e, t) {
              if (e && e.length) {
                for (var o = {}, n = 0; n < e.length; ++n)
                  o[e[n].name] = e[n].toJSON(t);
                return o;
              }
            }
            function h(e, t) {
              r.call(this, e, t),
                (this.nested = void 0),
                (this._nestedArray = null);
            }
            function _(e) {
              return (e._nestedArray = null), e;
            }
            (h.fromJSON = function (e, t) {
              return new h(e, t.options).addJSON(t.nested);
            }),
              (h.arrayToJSON = p),
              (h.isReservedId = function (e, t) {
                if (e)
                  for (var o = 0; o < e.length; ++o)
                    if ("string" != typeof e[o] && e[o][0] <= t && e[o][1] > t)
                      return !0;
                return !1;
              }),
              (h.isReservedName = function (e, t) {
                if (e)
                  for (var o = 0; o < e.length; ++o) if (e[o] === t) return !0;
                return !1;
              }),
              Object.defineProperty(h.prototype, "nestedArray", {
                get: function () {
                  return (
                    this._nestedArray ||
                    (this._nestedArray = m.toArray(this.nested))
                  );
                },
              }),
              (h.prototype.toJSON = function (e) {
                return m.toObject([
                  "options",
                  this.options,
                  "nested",
                  p(this.nestedArray, e),
                ]);
              }),
              (h.prototype.addJSON = function (e) {
                if (e)
                  for (var t, o = Object.keys(e), n = 0; n < o.length; ++n)
                    (t = e[o[n]]),
                      this.add(
                        (void 0 !== t.fields
                          ? a.fromJSON
                          : void 0 !== t.values
                          ? l.fromJSON
                          : void 0 !== t.methods
                          ? s.fromJSON
                          : void 0 !== t.id
                          ? c.fromJSON
                          : h.fromJSON)(o[n], t)
                      );
                return this;
              }),
              (h.prototype.get = function (e) {
                return (this.nested && this.nested[e]) || null;
              }),
              (h.prototype.getEnum = function (e) {
                if (this.nested && this.nested[e] instanceof l)
                  return this.nested[e].values;
                throw Error("no such enum: " + e);
              }),
              (h.prototype.add = function (e) {
                if (
                  !(
                    (e instanceof c && void 0 !== e.extend) ||
                    e instanceof a ||
                    e instanceof l ||
                    e instanceof s ||
                    e instanceof h ||
                    e instanceof u
                  )
                )
                  throw TypeError("object must be a valid nested object");
                if (this.nested) {
                  var t = this.get(e.name);
                  if (t) {
                    if (
                      !(t instanceof h && e instanceof h) ||
                      t instanceof a ||
                      t instanceof s
                    )
                      throw Error("duplicate name '" + e.name + "' in " + this);
                    for (var o = t.nestedArray, n = 0; n < o.length; ++n)
                      e.add(o[n]);
                    this.remove(t),
                      this.nested || (this.nested = {}),
                      e.setOptions(t.options, !0);
                  }
                } else this.nested = {};
                return (this.nested[e.name] = e), e.onAdd(this), _(this);
              }),
              (h.prototype.remove = function (e) {
                if (!(e instanceof r))
                  throw TypeError("object must be a ReflectionObject");
                if (e.parent !== this)
                  throw Error(e + " is not a member of " + this);
                return (
                  delete this.nested[e.name],
                  Object.keys(this.nested).length || (this.nested = void 0),
                  e.onRemove(this),
                  _(this)
                );
              }),
              (h.prototype.define = function (e, t) {
                if (m.isString(e)) e = e.split(".");
                else if (!Array.isArray(e)) throw TypeError("illegal path");
                if (e && e.length && "" === e[0])
                  throw Error("path must be relative");
                for (var o = this; e.length > 0; ) {
                  var n = e.shift();
                  if (o.nested && o.nested[n]) {
                    if (!((o = o.nested[n]) instanceof h))
                      throw Error("path conflicts with non-namespace objects");
                  } else o.add((o = new h(n)));
                }
                return t && o.addJSON(t), o;
              }),
              (h.prototype.resolveAll = function () {
                for (var e = this.nestedArray, t = 0; t < e.length; )
                  e[t] instanceof h ? e[t++].resolveAll() : e[t++].resolve();
                return this.resolve();
              }),
              (h.prototype.lookup = function (e, t, o) {
                if (
                  ("boolean" == typeof t
                    ? ((o = t), (t = void 0))
                    : t && !Array.isArray(t) && (t = [t]),
                  m.isString(e) && e.length)
                ) {
                  if ("." === e) return this.root;
                  e = e.split(".");
                } else if (!e.length) return this;
                if ("" === e[0]) return this.root.lookup(e.slice(1), t);
                var n = this.get(e[0]);
                if (n) {
                  if (1 === e.length) {
                    if (!t || t.indexOf(n.constructor) > -1) return n;
                  } else if (
                    n instanceof h &&
                    (n = n.lookup(e.slice(1), t, !0))
                  )
                    return n;
                } else
                  for (var i = 0; i < this.nestedArray.length; ++i)
                    if (
                      this._nestedArray[i] instanceof h &&
                      (n = this._nestedArray[i].lookup(e, t, !0))
                    )
                      return n;
                return null === this.parent || o
                  ? null
                  : this.parent.lookup(e, t);
              }),
              (h.prototype.lookupType = function (e) {
                var t = this.lookup(e, [a]);
                if (!t) throw Error("no such type: " + e);
                return t;
              }),
              (h.prototype.lookupEnum = function (e) {
                var t = this.lookup(e, [l]);
                if (!t) throw Error("no such Enum '" + e + "' in " + this);
                return t;
              }),
              (h.prototype.lookupTypeOrEnum = function (e) {
                var t = this.lookup(e, [a, l]);
                if (!t)
                  throw Error("no such Type or Enum '" + e + "' in " + this);
                return t;
              }),
              (h.prototype.lookupService = function (e) {
                var t = this.lookup(e, [s]);
                if (!t) throw Error("no such Service '" + e + "' in " + this);
                return t;
              }),
              (h._configure = function (e, t, o) {
                (a = e), (s = t), (l = o);
              }),
              o.exports;
          },
          function () {
            return {
              "./object": __cjsMetaURL$C,
              "./field": __cjsMetaURL$o,
              "./oneof": __cjsMetaURL$p,
              "./util": __cjsMetaURL$B,
            };
          }
        );
        var __cjsMetaURL$r =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js";
        loader.define(
          __cjsMetaURL$r,
          function (e, t, o, n, i) {
            o.exports = l;
            var r = t("./field");
            ((l.prototype = Object.create(r.prototype)).constructor =
              l).className = "MapField";
            var a = t("./types"),
              s = t("./util");
            function l(e, t, o, n, i, a) {
              if ((r.call(this, e, t, n, void 0, void 0, i, a), !s.isString(o)))
                throw TypeError("keyType must be a string");
              (this.keyType = o),
                (this.resolvedKeyType = null),
                (this.map = !0);
            }
            (l.fromJSON = function (e, t) {
              return new l(e, t.id, t.keyType, t.type, t.options, t.comment);
            }),
              (l.prototype.toJSON = function (e) {
                var t = !!e && Boolean(e.keepComments);
                return s.toObject([
                  "keyType",
                  this.keyType,
                  "type",
                  this.type,
                  "id",
                  this.id,
                  "extend",
                  this.extend,
                  "options",
                  this.options,
                  "comment",
                  t ? this.comment : void 0,
                ]);
              }),
              (l.prototype.resolve = function () {
                if (this.resolved) return this;
                if (void 0 === a.mapKey[this.keyType])
                  throw Error("invalid key type: " + this.keyType);
                return r.prototype.resolve.call(this);
              }),
              (l.d = function (e, t, o) {
                return (
                  "function" == typeof o
                    ? (o = s.decorateType(o).name)
                    : o && "object" == typeof o && (o = s.decorateEnum(o).name),
                  function (n, i) {
                    s.decorateType(n.constructor).add(new l(i, e, t, o));
                  }
                );
              }),
              o.exports;
          },
          function () {
            return {
              "./field": __cjsMetaURL$o,
              "./types": __cjsMetaURL$n,
              "./util": __cjsMetaURL$B,
            };
          }
        );
        var __cjsMetaURL$s =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/src/method.js";
        loader.define(
          __cjsMetaURL$s,
          function (e, t, o, n, i) {
            o.exports = s;
            var r = t("./object");
            ((s.prototype = Object.create(r.prototype)).constructor =
              s).className = "Method";
            var a = t("./util");
            function s(e, t, o, n, i, s, l, c, u) {
              if (
                (a.isObject(i)
                  ? ((l = i), (i = s = void 0))
                  : a.isObject(s) && ((l = s), (s = void 0)),
                void 0 !== t && !a.isString(t))
              )
                throw TypeError("type must be a string");
              if (!a.isString(o))
                throw TypeError("requestType must be a string");
              if (!a.isString(n))
                throw TypeError("responseType must be a string");
              r.call(this, e, l),
                (this.type = t || "rpc"),
                (this.requestType = o),
                (this.requestStream = !!i || void 0),
                (this.responseType = n),
                (this.responseStream = !!s || void 0),
                (this.resolvedRequestType = null),
                (this.resolvedResponseType = null),
                (this.comment = c),
                (this.parsedOptions = u);
            }
            (s.fromJSON = function (e, t) {
              return new s(
                e,
                t.type,
                t.requestType,
                t.responseType,
                t.requestStream,
                t.responseStream,
                t.options,
                t.comment,
                t.parsedOptions
              );
            }),
              (s.prototype.toJSON = function (e) {
                var t = !!e && Boolean(e.keepComments);
                return a.toObject([
                  "type",
                  ("rpc" !== this.type && this.type) || void 0,
                  "requestType",
                  this.requestType,
                  "requestStream",
                  this.requestStream,
                  "responseType",
                  this.responseType,
                  "responseStream",
                  this.responseStream,
                  "options",
                  this.options,
                  "comment",
                  t ? this.comment : void 0,
                  "parsedOptions",
                  this.parsedOptions,
                ]);
              }),
              (s.prototype.resolve = function () {
                return this.resolved
                  ? this
                  : ((this.resolvedRequestType = this.parent.lookupType(
                      this.requestType
                    )),
                    (this.resolvedResponseType = this.parent.lookupType(
                      this.responseType
                    )),
                    r.prototype.resolve.call(this));
              }),
              o.exports;
          },
          function () {
            return { "./object": __cjsMetaURL$C, "./util": __cjsMetaURL$B };
          }
        );
        var __cjsMetaURL$t =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/src/service.js";
        loader.define(
          __cjsMetaURL$t,
          function (e, t, o, n, i) {
            o.exports = c;
            var r = t("./namespace");
            ((c.prototype = Object.create(r.prototype)).constructor =
              c).className = "Service";
            var a = t("./method"),
              s = t("./util"),
              l = t("./rpc");
            function c(e, t) {
              r.call(this, e, t),
                (this.methods = {}),
                (this._methodsArray = null);
            }
            function u(e) {
              return (e._methodsArray = null), e;
            }
            (c.fromJSON = function (e, t) {
              var o = new c(e, t.options);
              if (t.methods)
                for (var n = Object.keys(t.methods), i = 0; i < n.length; ++i)
                  o.add(a.fromJSON(n[i], t.methods[n[i]]));
              return (
                t.nested && o.addJSON(t.nested), (o.comment = t.comment), o
              );
            }),
              (c.prototype.toJSON = function (e) {
                var t = r.prototype.toJSON.call(this, e),
                  o = !!e && Boolean(e.keepComments);
                return s.toObject([
                  "options",
                  (t && t.options) || void 0,
                  "methods",
                  r.arrayToJSON(this.methodsArray, e) || {},
                  "nested",
                  (t && t.nested) || void 0,
                  "comment",
                  o ? this.comment : void 0,
                ]);
              }),
              Object.defineProperty(c.prototype, "methodsArray", {
                get: function () {
                  return (
                    this._methodsArray ||
                    (this._methodsArray = s.toArray(this.methods))
                  );
                },
              }),
              (c.prototype.get = function (e) {
                return this.methods[e] || r.prototype.get.call(this, e);
              }),
              (c.prototype.resolveAll = function () {
                for (var e = this.methodsArray, t = 0; t < e.length; ++t)
                  e[t].resolve();
                return r.prototype.resolve.call(this);
              }),
              (c.prototype.add = function (e) {
                if (this.get(e.name))
                  throw Error("duplicate name '" + e.name + "' in " + this);
                return e instanceof a
                  ? ((this.methods[e.name] = e), (e.parent = this), u(this))
                  : r.prototype.add.call(this, e);
              }),
              (c.prototype.remove = function (e) {
                if (e instanceof a) {
                  if (this.methods[e.name] !== e)
                    throw Error(e + " is not a member of " + this);
                  return (
                    delete this.methods[e.name], (e.parent = null), u(this)
                  );
                }
                return r.prototype.remove.call(this, e);
              }),
              (c.prototype.create = function (e, t, o) {
                for (
                  var n, i = new l.Service(e, t, o), r = 0;
                  r < this.methodsArray.length;
                  ++r
                ) {
                  var a = s
                    .lcFirst((n = this._methodsArray[r]).resolve().name)
                    .replace(/[^$\w_]/g, "");
                  i[a] = s.codegen(
                    ["r", "c"],
                    s.isReserved(a) ? a + "_" : a
                  )("return this.rpcCall(m,q,s,r,c)")({
                    m: n,
                    q: n.resolvedRequestType.ctor,
                    s: n.resolvedResponseType.ctor,
                  });
                }
                return i;
              }),
              o.exports;
          },
          function () {
            return {
              "./namespace": __cjsMetaURL$q,
              "./method": __cjsMetaURL$s,
              "./util": __cjsMetaURL$B,
              "./rpc": __cjsMetaURL$e,
            };
          }
        );
        var __cjsMetaURL$u =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/src/message.js";
        loader.define(
          __cjsMetaURL$u,
          function (e, t, o, n, i) {
            o.exports = a;
            var r = t("./util/minimal");
            function a(e) {
              if (e)
                for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                  this[t[o]] = e[t[o]];
            }
            (a.create = function (e) {
              return this.$type.create(e);
            }),
              (a.encode = function (e, t) {
                return this.$type.encode(e, t);
              }),
              (a.encodeDelimited = function (e, t) {
                return this.$type.encodeDelimited(e, t);
              }),
              (a.decode = function (e) {
                return this.$type.decode(e);
              }),
              (a.decodeDelimited = function (e) {
                return this.$type.decodeDelimited(e);
              }),
              (a.verify = function (e) {
                return this.$type.verify(e);
              }),
              (a.fromObject = function (e) {
                return this.$type.fromObject(e);
              }),
              (a.toObject = function (e, t) {
                return this.$type.toObject(e, t);
              }),
              (a.prototype.toJSON = function () {
                return this.$type.toObject(this, r.toJSONOptions);
              }),
              o.exports;
          },
          function () {
            return { "./util/minimal": __cjsMetaURL$8 };
          }
        );
        var __cjsMetaURL$v =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js";
        loader.define(
          __cjsMetaURL$v,
          function (e, t, o, n, i) {
            o.exports = function (e) {
              var t = s.codegen(
                ["r", "l"],
                e.name + "$decode"
              )("if(!(r instanceof Reader))")("r=Reader.create(r)")(
                "var c=l===undefined?r.len:r.pos+l,m=new this.ctor" +
                  (e.fieldsArray.filter(function (e) {
                    return e.map;
                  }).length
                    ? ",k,value"
                    : "")
              )("while(r.pos<c){")("var t=r.uint32()");
              e.group && t("if((t&7)===4)")("break");
              t("switch(t>>>3){");
              for (var o = 0; o < e.fieldsArray.length; ++o) {
                var n = e._fieldsArray[o].resolve(),
                  i = n.resolvedType instanceof r ? "int32" : n.type,
                  c = "m" + s.safeProp(n.name);
                t("case %i:", n.id),
                  n.map
                    ? (t("if(%s===util.emptyObject)", c)("%s={}", c)(
                        "var c2 = r.uint32()+r.pos"
                      ),
                      void 0 !== a.defaults[n.keyType]
                        ? t("k=%j", a.defaults[n.keyType])
                        : t("k=null"),
                      void 0 !== a.defaults[i]
                        ? t("value=%j", a.defaults[i])
                        : t("value=null"),
                      t("while(r.pos<c2){")("var tag2=r.uint32()")(
                        "switch(tag2>>>3){"
                      )(
                        "case 1: k=r.%s(); break",
                        n.keyType
                      )("case 2:"),
                      void 0 === a.basic[i]
                        ? t("value=types[%i].decode(r,r.uint32())", o)
                        : t("value=r.%s()", i),
                      t("break")("default:")("r.skipType(tag2&7)")("break")(
                        "}"
                      )("}"),
                      void 0 !== a.long[n.keyType]
                        ? t(
                            '%s[typeof k==="object"?util.longToHash(k):k]=value',
                            c
                          )
                        : t("%s[k]=value", c))
                    : n.repeated
                    ? (t("if(!(%s&&%s.length))", c, c)("%s=[]", c),
                      void 0 !== a.packed[i] &&
                        t("if((t&7)===2){")("var c2=r.uint32()+r.pos")(
                          "while(r.pos<c2)"
                        )(
                          "%s.push(r.%s())",
                          c,
                          i
                        )("}else"),
                      void 0 === a.basic[i]
                        ? t(
                            n.resolvedType.group
                              ? "%s.push(types[%i].decode(r))"
                              : "%s.push(types[%i].decode(r,r.uint32()))",
                            c,
                            o
                          )
                        : t("%s.push(r.%s())", c, i))
                    : void 0 === a.basic[i]
                    ? t(
                        n.resolvedType.group
                          ? "%s=types[%i].decode(r)"
                          : "%s=types[%i].decode(r,r.uint32())",
                        c,
                        o
                      )
                    : t("%s=r.%s()", c, i),
                  t("break");
              }
              for (
                t("default:")("r.skipType(t&7)")("break")("}")("}"), o = 0;
                o < e._fieldsArray.length;
                ++o
              ) {
                var u = e._fieldsArray[o];
                u.required &&
                  t("if(!m.hasOwnProperty(%j))", u.name)(
                    "throw util.ProtocolError(%j,{instance:m})",
                    l(u)
                  );
              }
              return t("return m");
            };
            var r = t("./enum"),
              a = t("./types"),
              s = t("./util");
            function l(e) {
              return "missing required '" + e.name + "'";
            }
            o.exports;
          },
          function () {
            return {
              "./enum": __cjsMetaURL$D,
              "./types": __cjsMetaURL$n,
              "./util": __cjsMetaURL$B,
            };
          }
        );
        var __cjsMetaURL$w =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js";
        loader.define(
          __cjsMetaURL$w,
          function (e, t, o, n, i) {
            o.exports = function (e) {
              var t = a.codegen(
                  ["m"],
                  e.name + "$verify"
                )('if(typeof m!=="object"||m===null)')(
                  "return%j",
                  "object expected"
                ),
                o = e.oneofsArray,
                n = {};
              o.length && t("var p={}");
              for (var i = 0; i < e.fieldsArray.length; ++i) {
                var r = e._fieldsArray[i].resolve(),
                  u = "m" + a.safeProp(r.name);
                if (
                  (r.optional &&
                    t("if(%s!=null&&m.hasOwnProperty(%j)){", u, r.name),
                  r.map)
                )
                  t("if(!util.isObject(%s))", u)("return%j", s(r, "object"))(
                    "var k=Object.keys(%s)",
                    u
                  )("for(var i=0;i<k.length;++i){"),
                    c(t, r, "k[i]"),
                    l(t, r, i, u + "[k[i]]")("}");
                else if (r.repeated)
                  t("if(!Array.isArray(%s))", u)("return%j", s(r, "array"))(
                    "for(var i=0;i<%s.length;++i){",
                    u
                  ),
                    l(t, r, i, u + "[i]")("}");
                else {
                  if (r.partOf) {
                    var m = a.safeProp(r.partOf.name);
                    1 === n[r.partOf.name] &&
                      t("if(p%s===1)", m)(
                        "return%j",
                        r.partOf.name + ": multiple values"
                      ),
                      (n[r.partOf.name] = 1),
                      t("p%s=1", m);
                  }
                  l(t, r, i, u);
                }
                r.optional && t("}");
              }
              return t("return null");
            };
            var r = t("./enum"),
              a = t("./util");
            function s(e, t) {
              return (
                e.name +
                ": " +
                t +
                (e.repeated && "array" !== t
                  ? "[]"
                  : e.map && "object" !== t
                  ? "{k:" + e.keyType + "}"
                  : "") +
                " expected"
              );
            }
            function l(e, t, o, n) {
              if (t.resolvedType)
                if (t.resolvedType instanceof r) {
                  e("switch(%s){", n)("default:")(
                    "return%j",
                    s(t, "enum value")
                  );
                  for (
                    var i = Object.keys(t.resolvedType.values), a = 0;
                    a < i.length;
                    ++a
                  )
                    e("case %i:", t.resolvedType.values[i[a]]);
                  e("break")("}");
                } else
                  e("{")("var e=types[%i].verify(%s);", o, n)("if(e)")(
                    "return%j+e",
                    t.name + "."
                  )("}");
              else
                switch (t.type) {
                  case "int32":
                  case "uint32":
                  case "sint32":
                  case "fixed32":
                  case "sfixed32":
                    e("if(!util.isInteger(%s))", n)(
                      "return%j",
                      s(t, "integer")
                    );
                    break;
                  case "int64":
                  case "uint64":
                  case "sint64":
                  case "fixed64":
                  case "sfixed64":
                    e(
                      "if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))",
                      n,
                      n,
                      n,
                      n
                    )("return%j", s(t, "integer|Long"));
                    break;
                  case "float":
                  case "double":
                    e('if(typeof %s!=="number")', n)(
                      "return%j",
                      s(t, "number")
                    );
                    break;
                  case "bool":
                    e('if(typeof %s!=="boolean")', n)(
                      "return%j",
                      s(t, "boolean")
                    );
                    break;
                  case "string":
                    e("if(!util.isString(%s))", n)("return%j", s(t, "string"));
                    break;
                  case "bytes":
                    e(
                      'if(!(%s&&typeof %s.length==="number"||util.isString(%s)))',
                      n,
                      n,
                      n
                    )("return%j", s(t, "buffer"));
                }
              return e;
            }
            function c(e, t, o) {
              switch (t.keyType) {
                case "int32":
                case "uint32":
                case "sint32":
                case "fixed32":
                case "sfixed32":
                  e("if(!util.key32Re.test(%s))", o)(
                    "return%j",
                    s(t, "integer key")
                  );
                  break;
                case "int64":
                case "uint64":
                case "sint64":
                case "fixed64":
                case "sfixed64":
                  e("if(!util.key64Re.test(%s))", o)(
                    "return%j",
                    s(t, "integer|Long key")
                  );
                  break;
                case "bool":
                  e("if(!util.key2Re.test(%s))", o)(
                    "return%j",
                    s(t, "boolean key")
                  );
              }
              return e;
            }
            o.exports;
          },
          function () {
            return { "./enum": __cjsMetaURL$D, "./util": __cjsMetaURL$B };
          }
        );
        var __cjsMetaURL$x =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/src/converter.js";
        loader.define(
          __cjsMetaURL$x,
          function (e, t, o, n, i) {
            var r = e,
              a = t("./enum"),
              s = t("./util");
            function l(e, t, o, n) {
              if (t.resolvedType)
                if (t.resolvedType instanceof a) {
                  e("switch(d%s){", n);
                  for (
                    var i = t.resolvedType.values, r = Object.keys(i), s = 0;
                    s < r.length;
                    ++s
                  )
                    t.repeated && i[r[s]] === t.typeDefault && e("default:"),
                      e("case%j:", r[s])("case %i:", i[r[s]])(
                        "m%s=%j",
                        n,
                        i[r[s]]
                      )("break");
                  e("}");
                } else
                  e('if(typeof d%s!=="object")', n)(
                    "throw TypeError(%j)",
                    t.fullName + ": object expected"
                  )("m%s=types[%i].fromObject(d%s)", n, o, n);
              else {
                var l = !1;
                switch (t.type) {
                  case "double":
                  case "float":
                    e("m%s=Number(d%s)", n, n);
                    break;
                  case "uint32":
                  case "fixed32":
                    e("m%s=d%s>>>0", n, n);
                    break;
                  case "int32":
                  case "sint32":
                  case "sfixed32":
                    e("m%s=d%s|0", n, n);
                    break;
                  case "uint64":
                    l = !0;
                  case "int64":
                  case "sint64":
                  case "fixed64":
                  case "sfixed64":
                    e("if(util.Long)")(
                      "(m%s=util.Long.fromValue(d%s)).unsigned=%j",
                      n,
                      n,
                      l
                    )('else if(typeof d%s==="string")', n)(
                      "m%s=parseInt(d%s,10)",
                      n,
                      n
                    )('else if(typeof d%s==="number")', n)(
                      "m%s=d%s",
                      n,
                      n
                    )('else if(typeof d%s==="object")', n)(
                      "m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)",
                      n,
                      n,
                      n,
                      l ? "true" : ""
                    );
                    break;
                  case "bytes":
                    e('if(typeof d%s==="string")', n)(
                      "util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)",
                      n,
                      n,
                      n
                    )("else if(d%s.length)", n)("m%s=d%s", n, n);
                    break;
                  case "string":
                    e("m%s=String(d%s)", n, n);
                    break;
                  case "bool":
                    e("m%s=Boolean(d%s)", n, n);
                }
              }
              return e;
            }
            function c(e, t, o, n) {
              if (t.resolvedType)
                t.resolvedType instanceof a
                  ? e(
                      "d%s=o.enums===String?types[%i].values[m%s]:m%s",
                      n,
                      o,
                      n,
                      n
                    )
                  : e("d%s=types[%i].toObject(m%s,o)", n, o, n);
              else {
                var i = !1;
                switch (t.type) {
                  case "double":
                  case "float":
                    e("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", n, n, n, n);
                    break;
                  case "uint64":
                    i = !0;
                  case "int64":
                  case "sint64":
                  case "fixed64":
                  case "sfixed64":
                    e('if(typeof m%s==="number")', n)(
                      "d%s=o.longs===String?String(m%s):m%s",
                      n,
                      n,
                      n
                    )("else")(
                      "d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s",
                      n,
                      n,
                      n,
                      n,
                      i ? "true" : "",
                      n
                    );
                    break;
                  case "bytes":
                    e(
                      "d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s",
                      n,
                      n,
                      n,
                      n,
                      n
                    );
                    break;
                  default:
                    e("d%s=m%s", n, n);
                }
              }
              return e;
            }
            (r.fromObject = function (e) {
              var t = e.fieldsArray,
                o = s.codegen(
                  ["d"],
                  e.name + "$fromObject"
                )("if(d instanceof this.ctor)")("return d");
              if (!t.length) return o("return new this.ctor");
              o("var m=new this.ctor");
              for (var n = 0; n < t.length; ++n) {
                var i = t[n].resolve(),
                  r = s.safeProp(i.name);
                i.map
                  ? (o("if(d%s){", r)('if(typeof d%s!=="object")', r)(
                      "throw TypeError(%j)",
                      i.fullName + ": object expected"
                    )("m%s={}", r)(
                      "for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){",
                      r
                    ),
                    l(o, i, n, r + "[ks[i]]")("}")("}"))
                  : i.repeated
                  ? (o("if(d%s){", r)("if(!Array.isArray(d%s))", r)(
                      "throw TypeError(%j)",
                      i.fullName + ": array expected"
                    )("m%s=[]", r)("for(var i=0;i<d%s.length;++i){", r),
                    l(o, i, n, r + "[i]")("}")("}"))
                  : (i.resolvedType instanceof a || o("if(d%s!=null){", r),
                    l(o, i, n, r),
                    i.resolvedType instanceof a || o("}"));
              }
              return o("return m");
            }),
              (r.toObject = function (e) {
                var t = e.fieldsArray.slice().sort(s.compareFieldsById);
                if (!t.length) return s.codegen()("return {}");
                for (
                  var o = s.codegen(["m", "o"], e.name + "$toObject")("if(!o)")(
                      "o={}"
                    )("var d={}"),
                    n = [],
                    i = [],
                    r = [],
                    l = 0;
                  l < t.length;
                  ++l
                )
                  t[l].partOf ||
                    (t[l].resolve().repeated ? n : t[l].map ? i : r).push(t[l]);
                if (n.length) {
                  for (o("if(o.arrays||o.defaults){"), l = 0; l < n.length; ++l)
                    o("d%s=[]", s.safeProp(n[l].name));
                  o("}");
                }
                if (i.length) {
                  for (
                    o("if(o.objects||o.defaults){"), l = 0;
                    l < i.length;
                    ++l
                  )
                    o("d%s={}", s.safeProp(i[l].name));
                  o("}");
                }
                if (r.length) {
                  for (o("if(o.defaults){"), l = 0; l < r.length; ++l) {
                    var u = r[l],
                      m = s.safeProp(u.name);
                    if (u.resolvedType instanceof a)
                      o(
                        "d%s=o.enums===String?%j:%j",
                        m,
                        u.resolvedType.valuesById[u.typeDefault],
                        u.typeDefault
                      );
                    else if (u.long)
                      o("if(util.Long){")(
                        "var n=new util.Long(%i,%i,%j)",
                        u.typeDefault.low,
                        u.typeDefault.high,
                        u.typeDefault.unsigned
                      )(
                        "d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n",
                        m
                      )("}else")(
                        "d%s=o.longs===String?%j:%i",
                        m,
                        u.typeDefault.toString(),
                        u.typeDefault.toNumber()
                      );
                    else if (u.bytes) {
                      var p =
                        "[" +
                        Array.prototype.slice.call(u.typeDefault).join(",") +
                        "]";
                      o(
                        "if(o.bytes===String)d%s=%j",
                        m,
                        String.fromCharCode.apply(String, u.typeDefault)
                      )("else{")("d%s=%s", m, p)(
                        "if(o.bytes!==Array)d%s=util.newBuffer(d%s)",
                        m,
                        m
                      )("}");
                    } else o("d%s=%j", m, u.typeDefault);
                  }
                  o("}");
                }
                var h = !1;
                for (l = 0; l < t.length; ++l) {
                  u = t[l];
                  var _ = e._fieldsArray.indexOf(u);
                  m = s.safeProp(u.name);
                  u.map
                    ? (h || ((h = !0), o("var ks2")),
                      o(
                        "if(m%s&&(ks2=Object.keys(m%s)).length){",
                        m,
                        m
                      )(
                        "d%s={}",
                        m
                      )("for(var j=0;j<ks2.length;++j){"),
                      c(o, u, _, m + "[ks2[j]]")("}"))
                    : u.repeated
                    ? (o("if(m%s&&m%s.length){", m, m)("d%s=[]", m)(
                        "for(var j=0;j<m%s.length;++j){",
                        m
                      ),
                      c(o, u, _, m + "[j]")("}"))
                    : (o("if(m%s!=null&&m.hasOwnProperty(%j)){", m, u.name),
                      c(o, u, _, m),
                      u.partOf &&
                        o("if(o.oneofs)")(
                          "d%s=%j",
                          s.safeProp(u.partOf.name),
                          u.name
                        )),
                    o("}");
                }
                return o("return d");
              }),
              o.exports;
          },
          function () {
            return { "./enum": __cjsMetaURL$D, "./util": __cjsMetaURL$B };
          }
        );
        var __cjsMetaURL$y =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js";
        loader.define(
          __cjsMetaURL$y,
          function (e, t, o, n, i) {
            var r = e,
              a = t("./message");
            (r[".google.protobuf.Any"] = {
              fromObject: function (e) {
                if (e && e["@type"]) {
                  var t = e["@type"].substring(e["@type"].lastIndexOf("/") + 1),
                    o = this.lookup(t);
                  if (o) {
                    var n =
                      "." === e["@type"].charAt(0)
                        ? e["@type"].substr(1)
                        : e["@type"];
                    return (
                      -1 === n.indexOf("/") && (n = "/" + n),
                      this.create({
                        type_url: n,
                        value: o.encode(o.fromObject(e)).finish(),
                      })
                    );
                  }
                }
                return this.fromObject(e);
              },
              toObject: function (e, t) {
                var o = "",
                  n = "";
                if (t && t.json && e.type_url && e.value) {
                  (n = e.type_url.substring(e.type_url.lastIndexOf("/") + 1)),
                    (o = e.type_url.substring(
                      0,
                      e.type_url.lastIndexOf("/") + 1
                    ));
                  var i = this.lookup(n);
                  i && (e = i.decode(e.value));
                }
                if (!(e instanceof this.ctor) && e instanceof a) {
                  var r = e.$type.toObject(e, t);
                  return (
                    "" === o && (o = "type.googleapis.com/"),
                    (n =
                      o +
                      ("." === e.$type.fullName[0]
                        ? e.$type.fullName.substr(1)
                        : e.$type.fullName)),
                    (r["@type"] = n),
                    r
                  );
                }
                return this.toObject(e, t);
              },
            }),
              o.exports;
          },
          function () {
            return { "./message": __cjsMetaURL$u };
          }
        );
        var __cjsMetaURL$z =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/src/type.js";
        loader.define(
          __cjsMetaURL$z,
          function (e, t, o, n, i) {
            o.exports = g;
            var r = t("./namespace");
            ((g.prototype = Object.create(r.prototype)).constructor =
              g).className = "Type";
            var a = t("./enum"),
              s = t("./oneof"),
              l = t("./field"),
              c = t("./mapfield"),
              u = t("./service"),
              m = t("./message"),
              p = t("./reader"),
              h = t("./writer"),
              _ = t("./util"),
              f = t("./encoder"),
              d = t("./decoder"),
              C = t("./verifier"),
              S = t("./converter"),
              y = t("./wrappers");
            function g(e, t) {
              r.call(this, e, t),
                (this.fields = {}),
                (this.oneofs = void 0),
                (this.extensions = void 0),
                (this.reserved = void 0),
                (this.group = void 0),
                (this._fieldsById = null),
                (this._fieldsArray = null),
                (this._oneofsArray = null),
                (this._ctor = null);
            }
            function b(e) {
              return (
                (e._fieldsById = e._fieldsArray = e._oneofsArray = null),
                delete e.encode,
                delete e.decode,
                delete e.verify,
                e
              );
            }
            Object.defineProperties(g.prototype, {
              fieldsById: {
                get: function () {
                  if (this._fieldsById) return this._fieldsById;
                  this._fieldsById = {};
                  for (
                    var e = Object.keys(this.fields), t = 0;
                    t < e.length;
                    ++t
                  ) {
                    var o = this.fields[e[t]],
                      n = o.id;
                    if (this._fieldsById[n])
                      throw Error("duplicate id " + n + " in " + this);
                    this._fieldsById[n] = o;
                  }
                  return this._fieldsById;
                },
              },
              fieldsArray: {
                get: function () {
                  return (
                    this._fieldsArray ||
                    (this._fieldsArray = _.toArray(this.fields))
                  );
                },
              },
              oneofsArray: {
                get: function () {
                  return (
                    this._oneofsArray ||
                    (this._oneofsArray = _.toArray(this.oneofs))
                  );
                },
              },
              ctor: {
                get: function () {
                  return (
                    this._ctor || (this.ctor = g.generateConstructor(this)())
                  );
                },
                set: function (e) {
                  var t = e.prototype;
                  t instanceof m ||
                    (((e.prototype = new m()).constructor = e),
                    _.merge(e.prototype, t)),
                    (e.$type = e.prototype.$type = this),
                    _.merge(e, m, !0),
                    (this._ctor = e);
                  for (var o = 0; o < this.fieldsArray.length; ++o)
                    this._fieldsArray[o].resolve();
                  var n = {};
                  for (o = 0; o < this.oneofsArray.length; ++o)
                    n[this._oneofsArray[o].resolve().name] = {
                      get: _.oneOfGetter(this._oneofsArray[o].oneof),
                      set: _.oneOfSetter(this._oneofsArray[o].oneof),
                    };
                  o && Object.defineProperties(e.prototype, n);
                },
              },
            }),
              (g.generateConstructor = function (e) {
                for (
                  var t, o = _.codegen(["p"], e.name), n = 0;
                  n < e.fieldsArray.length;
                  ++n
                )
                  (t = e._fieldsArray[n]).map
                    ? o("this%s={}", _.safeProp(t.name))
                    : t.repeated && o("this%s=[]", _.safeProp(t.name));
                return o(
                  "if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)"
                )("this[ks[i]]=p[ks[i]]");
              }),
              (g.fromJSON = function (e, t) {
                var o = new g(e, t.options);
                (o.extensions = t.extensions), (o.reserved = t.reserved);
                for (var n = Object.keys(t.fields), i = 0; i < n.length; ++i)
                  o.add(
                    (void 0 !== t.fields[n[i]].keyType
                      ? c.fromJSON
                      : l.fromJSON)(n[i], t.fields[n[i]])
                  );
                if (t.oneofs)
                  for (n = Object.keys(t.oneofs), i = 0; i < n.length; ++i)
                    o.add(s.fromJSON(n[i], t.oneofs[n[i]]));
                if (t.nested)
                  for (n = Object.keys(t.nested), i = 0; i < n.length; ++i) {
                    var m = t.nested[n[i]];
                    o.add(
                      (void 0 !== m.id
                        ? l.fromJSON
                        : void 0 !== m.fields
                        ? g.fromJSON
                        : void 0 !== m.values
                        ? a.fromJSON
                        : void 0 !== m.methods
                        ? u.fromJSON
                        : r.fromJSON)(n[i], m)
                    );
                  }
                return (
                  t.extensions &&
                    t.extensions.length &&
                    (o.extensions = t.extensions),
                  t.reserved && t.reserved.length && (o.reserved = t.reserved),
                  t.group && (o.group = !0),
                  t.comment && (o.comment = t.comment),
                  o
                );
              }),
              (g.prototype.toJSON = function (e) {
                var t = r.prototype.toJSON.call(this, e),
                  o = !!e && Boolean(e.keepComments);
                return _.toObject([
                  "options",
                  (t && t.options) || void 0,
                  "oneofs",
                  r.arrayToJSON(this.oneofsArray, e),
                  "fields",
                  r.arrayToJSON(
                    this.fieldsArray.filter(function (e) {
                      return !e.declaringField;
                    }),
                    e
                  ) || {},
                  "extensions",
                  this.extensions && this.extensions.length
                    ? this.extensions
                    : void 0,
                  "reserved",
                  this.reserved && this.reserved.length
                    ? this.reserved
                    : void 0,
                  "group",
                  this.group || void 0,
                  "nested",
                  (t && t.nested) || void 0,
                  "comment",
                  o ? this.comment : void 0,
                ]);
              }),
              (g.prototype.resolveAll = function () {
                for (var e = this.fieldsArray, t = 0; t < e.length; )
                  e[t++].resolve();
                var o = this.oneofsArray;
                for (t = 0; t < o.length; ) o[t++].resolve();
                return r.prototype.resolveAll.call(this);
              }),
              (g.prototype.get = function (e) {
                return (
                  this.fields[e] ||
                  (this.oneofs && this.oneofs[e]) ||
                  (this.nested && this.nested[e]) ||
                  null
                );
              }),
              (g.prototype.add = function (e) {
                if (this.get(e.name))
                  throw Error("duplicate name '" + e.name + "' in " + this);
                if (e instanceof l && void 0 === e.extend) {
                  if (
                    this._fieldsById
                      ? this._fieldsById[e.id]
                      : this.fieldsById[e.id]
                  )
                    throw Error("duplicate id " + e.id + " in " + this);
                  if (this.isReservedId(e.id))
                    throw Error("id " + e.id + " is reserved in " + this);
                  if (this.isReservedName(e.name))
                    throw Error("name '" + e.name + "' is reserved in " + this);
                  return (
                    e.parent && e.parent.remove(e),
                    (this.fields[e.name] = e),
                    (e.message = this),
                    e.onAdd(this),
                    b(this)
                  );
                }
                return e instanceof s
                  ? (this.oneofs || (this.oneofs = {}),
                    (this.oneofs[e.name] = e),
                    e.onAdd(this),
                    b(this))
                  : r.prototype.add.call(this, e);
              }),
              (g.prototype.remove = function (e) {
                if (e instanceof l && void 0 === e.extend) {
                  if (!this.fields || this.fields[e.name] !== e)
                    throw Error(e + " is not a member of " + this);
                  return (
                    delete this.fields[e.name],
                    (e.parent = null),
                    e.onRemove(this),
                    b(this)
                  );
                }
                if (e instanceof s) {
                  if (!this.oneofs || this.oneofs[e.name] !== e)
                    throw Error(e + " is not a member of " + this);
                  return (
                    delete this.oneofs[e.name],
                    (e.parent = null),
                    e.onRemove(this),
                    b(this)
                  );
                }
                return r.prototype.remove.call(this, e);
              }),
              (g.prototype.isReservedId = function (e) {
                return r.isReservedId(this.reserved, e);
              }),
              (g.prototype.isReservedName = function (e) {
                return r.isReservedName(this.reserved, e);
              }),
              (g.prototype.create = function (e) {
                return new this.ctor(e);
              }),
              (g.prototype.setup = function () {
                for (
                  var e = this.fullName, t = [], o = 0;
                  o < this.fieldsArray.length;
                  ++o
                )
                  t.push(this._fieldsArray[o].resolve().resolvedType);
                (this.encode = f(this)({ Writer: h, types: t, util: _ })),
                  (this.decode = d(this)({ Reader: p, types: t, util: _ })),
                  (this.verify = C(this)({ types: t, util: _ })),
                  (this.fromObject = S.fromObject(this)({ types: t, util: _ })),
                  (this.toObject = S.toObject(this)({ types: t, util: _ }));
                var n = y[e];
                if (n) {
                  var i = Object.create(this);
                  (i.fromObject = this.fromObject),
                    (this.fromObject = n.fromObject.bind(i)),
                    (i.toObject = this.toObject),
                    (this.toObject = n.toObject.bind(i));
                }
                return this;
              }),
              (g.prototype.encode = function (e, t) {
                return this.setup().encode(e, t);
              }),
              (g.prototype.encodeDelimited = function (e, t) {
                return this.encode(e, t && t.len ? t.fork() : t).ldelim();
              }),
              (g.prototype.decode = function (e, t) {
                return this.setup().decode(e, t);
              }),
              (g.prototype.decodeDelimited = function (e) {
                return (
                  e instanceof p || (e = p.create(e)),
                  this.decode(e, e.uint32())
                );
              }),
              (g.prototype.verify = function (e) {
                return this.setup().verify(e);
              }),
              (g.prototype.fromObject = function (e) {
                return this.setup().fromObject(e);
              }),
              (g.prototype.toObject = function (e, t) {
                return this.setup().toObject(e, t);
              }),
              (g.d = function (e) {
                return function (t) {
                  _.decorateType(t, e);
                };
              }),
              o.exports;
          },
          function () {
            return {
              "./namespace": __cjsMetaURL$q,
              "./enum": __cjsMetaURL$D,
              "./oneof": __cjsMetaURL$p,
              "./field": __cjsMetaURL$o,
              "./mapfield": __cjsMetaURL$r,
              "./service": __cjsMetaURL$t,
              "./message": __cjsMetaURL$u,
              "./reader": __cjsMetaURL$b,
              "./writer": __cjsMetaURL$9,
              "./util": __cjsMetaURL$B,
              "./encoder": __cjsMetaURL$E,
              "./decoder": __cjsMetaURL$v,
              "./verifier": __cjsMetaURL$w,
              "./converter": __cjsMetaURL$x,
              "./wrappers": __cjsMetaURL$y,
            };
          }
        );
        var __cjsMetaURL$A =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/src/root.js";
        loader.define(
          __cjsMetaURL$A,
          function (e, t, o, n, i) {
            o.exports = h;
            var r = t("./namespace");
            ((h.prototype = Object.create(r.prototype)).constructor =
              h).className = "Root";
            var a,
              s,
              l,
              c = t("./field"),
              u = t("./enum"),
              m = t("./oneof"),
              p = t("./util");
            function h(e) {
              r.call(this, "", e), (this.deferred = []), (this.files = []);
            }
            function _() {}
            (h.fromJSON = function (e, t) {
              return (
                t || (t = new h()),
                e.options && t.setOptions(e.options),
                t.addJSON(e.nested)
              );
            }),
              (h.prototype.resolvePath = p.path.resolve),
              (h.prototype.fetch = p.fetch),
              (h.prototype.load = function e(t, o, n) {
                "function" == typeof o && ((n = o), (o = void 0));
                var i = this;
                if (!n) return p.asPromise(e, i, t, o);
                var r = n === _;
                function a(e, t) {
                  if (n) {
                    var o = n;
                    if (((n = null), r)) throw e;
                    o(e, t);
                  }
                }
                function c(e) {
                  var t = e.lastIndexOf("google/protobuf/");
                  if (t > -1) {
                    var o = e.substring(t);
                    if (o in l) return o;
                  }
                  return null;
                }
                function u(e, t) {
                  try {
                    if (
                      (p.isString(t) &&
                        "{" === t.charAt(0) &&
                        (t = JSON.parse(t)),
                      p.isString(t))
                    ) {
                      s.filename = e;
                      var n,
                        l = s(t, i, o),
                        u = 0;
                      if (l.imports)
                        for (; u < l.imports.length; ++u)
                          (n =
                            c(l.imports[u]) ||
                            i.resolvePath(e, l.imports[u])) && m(n);
                      if (l.weakImports)
                        for (u = 0; u < l.weakImports.length; ++u)
                          (n =
                            c(l.weakImports[u]) ||
                            i.resolvePath(e, l.weakImports[u])) && m(n, !0);
                    } else i.setOptions(t.options).addJSON(t.nested);
                  } catch (e) {
                    a(e);
                  }
                  r || h || a(null, i);
                }
                function m(e, t) {
                  if (!(i.files.indexOf(e) > -1))
                    if ((i.files.push(e), e in l))
                      r
                        ? u(e, l[e])
                        : (++h,
                          setTimeout(function () {
                            --h, u(e, l[e]);
                          }));
                    else if (r) {
                      var o;
                      try {
                        o = p.fs.readFileSync(e).toString("utf8");
                      } catch (e) {
                        return void (t || a(e));
                      }
                      u(e, o);
                    } else
                      ++h,
                        i.fetch(e, function (o, r) {
                          --h,
                            n && (o ? (t ? h || a(null, i) : a(o)) : u(e, r));
                        });
                }
                var h = 0;
                p.isString(t) && (t = [t]);
                for (var f, d = 0; d < t.length; ++d)
                  (f = i.resolvePath("", t[d])) && m(f);
                if (r) return i;
                h || a(null, i);
              }),
              (h.prototype.loadSync = function (e, t) {
                if (!p.isNode) throw Error("not supported");
                return this.load(e, t, _);
              }),
              (h.prototype.resolveAll = function () {
                if (this.deferred.length)
                  throw Error(
                    "unresolvable extensions: " +
                      this.deferred
                        .map(function (e) {
                          return (
                            "'extend " + e.extend + "' in " + e.parent.fullName
                          );
                        })
                        .join(", ")
                  );
                return r.prototype.resolveAll.call(this);
              });
            var f = /^[A-Z]/;
            function d(e, t) {
              var o = t.parent.lookup(t.extend);
              if (o) {
                var n = new c(
                  t.fullName,
                  t.id,
                  t.type,
                  t.rule,
                  void 0,
                  t.options
                );
                return (
                  (n.declaringField = t), (t.extensionField = n), o.add(n), !0
                );
              }
              return !1;
            }
            (h.prototype._handleAdd = function (e) {
              if (e instanceof c)
                void 0 === e.extend ||
                  e.extensionField ||
                  d(0, e) ||
                  this.deferred.push(e);
              else if (e instanceof u)
                f.test(e.name) && (e.parent[e.name] = e.values);
              else if (!(e instanceof m)) {
                if (e instanceof a)
                  for (var t = 0; t < this.deferred.length; )
                    d(0, this.deferred[t]) ? this.deferred.splice(t, 1) : ++t;
                for (var o = 0; o < e.nestedArray.length; ++o)
                  this._handleAdd(e._nestedArray[o]);
                f.test(e.name) && (e.parent[e.name] = e);
              }
            }),
              (h.prototype._handleRemove = function (e) {
                if (e instanceof c) {
                  if (void 0 !== e.extend)
                    if (e.extensionField)
                      e.extensionField.parent.remove(e.extensionField),
                        (e.extensionField = null);
                    else {
                      var t = this.deferred.indexOf(e);
                      t > -1 && this.deferred.splice(t, 1);
                    }
                } else if (e instanceof u)
                  f.test(e.name) && delete e.parent[e.name];
                else if (e instanceof r) {
                  for (var o = 0; o < e.nestedArray.length; ++o)
                    this._handleRemove(e._nestedArray[o]);
                  f.test(e.name) && delete e.parent[e.name];
                }
              }),
              (h._configure = function (e, t, o) {
                (a = e), (s = t), (l = o);
              }),
              o.exports;
          },
          function () {
            return {
              "./namespace": __cjsMetaURL$q,
              "./field": __cjsMetaURL$o,
              "./enum": __cjsMetaURL$D,
              "./oneof": __cjsMetaURL$p,
              "./util": __cjsMetaURL$B,
            };
          }
        );
        var __cjsMetaURL$B =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/src/util.js";
        loader.define(
          __cjsMetaURL$B,
          function (e, t, o, n, i) {
            var r,
              a,
              s = (o.exports = t("./util/minimal")),
              l = t("./roots");
            (s.codegen = t("@protobufjs/codegen")),
              (s.fetch = t("@protobufjs/fetch")),
              (s.path = t("@protobufjs/path")),
              (s.fs = s.inquire("fs")),
              (s.toArray = function (e) {
                if (e) {
                  for (
                    var t = Object.keys(e), o = new Array(t.length), n = 0;
                    n < t.length;

                  )
                    o[n] = e[t[n++]];
                  return o;
                }
                return [];
              }),
              (s.toObject = function (e) {
                for (var t = {}, o = 0; o < e.length; ) {
                  var n = e[o++],
                    i = e[o++];
                  void 0 !== i && (t[n] = i);
                }
                return t;
              });
            var c = /\\/g,
              u = /"/g;
            (s.isReserved = function (e) {
              return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(
                e
              );
            }),
              (s.safeProp = function (e) {
                return !/^[$\w_]+$/.test(e) || s.isReserved(e)
                  ? '["' + e.replace(c, "\\\\").replace(u, '\\"') + '"]'
                  : "." + e;
              }),
              (s.ucFirst = function (e) {
                return e.charAt(0).toUpperCase() + e.substring(1);
              });
            var m = /_([a-z])/g;
            (s.camelCase = function (e) {
              return (
                e.substring(0, 1) +
                e.substring(1).replace(m, function (e, t) {
                  return t.toUpperCase();
                })
              );
            }),
              (s.compareFieldsById = function (e, t) {
                return e.id - t.id;
              }),
              (s.decorateType = function (e, o) {
                if (e.$type)
                  return (
                    o &&
                      e.$type.name !== o &&
                      (s.decorateRoot.remove(e.$type),
                      (e.$type.name = o),
                      s.decorateRoot.add(e.$type)),
                    e.$type
                  );
                r || (r = t("./type"));
                var n = new r(o || e.name);
                return (
                  s.decorateRoot.add(n),
                  (n.ctor = e),
                  Object.defineProperty(e, "$type", {
                    value: n,
                    enumerable: !1,
                  }),
                  Object.defineProperty(e.prototype, "$type", {
                    value: n,
                    enumerable: !1,
                  }),
                  n
                );
              });
            var p = 0;
            (s.decorateEnum = function (e) {
              if (e.$type) return e.$type;
              a || (a = t("./enum"));
              var o = new a("Enum" + p++, e);
              return (
                s.decorateRoot.add(o),
                Object.defineProperty(e, "$type", { value: o, enumerable: !1 }),
                o
              );
            }),
              (s.setProperty = function (e, t, o) {
                if ("object" != typeof e)
                  throw TypeError("dst must be an object");
                if (!t) throw TypeError("path must be specified");
                return (function e(t, o, n) {
                  var i = o.shift();
                  if ("__proto__" === i || "prototype" === i) return t;
                  if (o.length > 0) t[i] = e(t[i] || {}, o, n);
                  else {
                    var r = t[i];
                    r && (n = [].concat(r).concat(n)), (t[i] = n);
                  }
                  return t;
                })(e, (t = t.split(".")), o);
              }),
              Object.defineProperty(s, "decorateRoot", {
                get: function () {
                  return l.decorated || (l.decorated = new (t("./root"))());
                },
              }),
              o.exports;
          },
          function () {
            return {
              "./util/minimal": __cjsMetaURL$8,
              "./roots": __cjsMetaURL$f,
              "@protobufjs/codegen": __cjsMetaURL$k,
              "@protobufjs/fetch": __cjsMetaURL$l,
              "@protobufjs/path": __cjsMetaURL$m,
              "./type": __cjsMetaURL$z,
              "./enum": __cjsMetaURL$D,
              "./root": __cjsMetaURL$A,
            };
          }
        );
        var __cjsMetaURL$C =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/src/object.js";
        loader.define(
          __cjsMetaURL$C,
          function (e, t, o, n, i) {
            (o.exports = s), (s.className = "ReflectionObject");
            var r,
              a = t("./util");
            function s(e, t) {
              if (!a.isString(e)) throw TypeError("name must be a string");
              if (t && !a.isObject(t))
                throw TypeError("options must be an object");
              (this.options = t),
                (this.parsedOptions = null),
                (this.name = e),
                (this.parent = null),
                (this.resolved = !1),
                (this.comment = null),
                (this.filename = null);
            }
            Object.defineProperties(s.prototype, {
              root: {
                get: function () {
                  for (var e = this; null !== e.parent; ) e = e.parent;
                  return e;
                },
              },
              fullName: {
                get: function () {
                  for (var e = [this.name], t = this.parent; t; )
                    e.unshift(t.name), (t = t.parent);
                  return e.join(".");
                },
              },
            }),
              (s.prototype.toJSON = function () {
                throw Error();
              }),
              (s.prototype.onAdd = function (e) {
                this.parent && this.parent !== e && this.parent.remove(this),
                  (this.parent = e),
                  (this.resolved = !1);
                var t = e.root;
                t instanceof r && t._handleAdd(this);
              }),
              (s.prototype.onRemove = function (e) {
                var t = e.root;
                t instanceof r && t._handleRemove(this),
                  (this.parent = null),
                  (this.resolved = !1);
              }),
              (s.prototype.resolve = function () {
                return (
                  this.resolved ||
                    (this.root instanceof r && (this.resolved = !0)),
                  this
                );
              }),
              (s.prototype.getOption = function (e) {
                if (this.options) return this.options[e];
              }),
              (s.prototype.setOption = function (e, t, o) {
                return (
                  (o && this.options && void 0 !== this.options[e]) ||
                    ((this.options || (this.options = {}))[e] = t),
                  this
                );
              }),
              (s.prototype.setParsedOption = function (e, t, o) {
                this.parsedOptions || (this.parsedOptions = []);
                var n = this.parsedOptions;
                if (o) {
                  var i = n.find(function (t) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                  });
                  if (i) {
                    var r = i[e];
                    a.setProperty(r, o, t);
                  } else ((i = {})[e] = a.setProperty({}, o, t)), n.push(i);
                } else {
                  var s = {};
                  (s[e] = t), n.push(s);
                }
                return this;
              }),
              (s.prototype.setOptions = function (e, t) {
                if (e)
                  for (var o = Object.keys(e), n = 0; n < o.length; ++n)
                    this.setOption(o[n], e[o[n]], t);
                return this;
              }),
              (s.prototype.toString = function () {
                var e = this.constructor.className,
                  t = this.fullName;
                return t.length ? e + " " + t : e;
              }),
              (s._configure = function (e) {
                r = e;
              }),
              o.exports;
          },
          function () {
            return { "./util": __cjsMetaURL$B };
          }
        );
        var __cjsMetaURL$D =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/src/enum.js";
        loader.define(
          __cjsMetaURL$D,
          function (e, t, o, n, i) {
            o.exports = l;
            var r = t("./object");
            ((l.prototype = Object.create(r.prototype)).constructor =
              l).className = "Enum";
            var a = t("./namespace"),
              s = t("./util");
            function l(e, t, o, n, i) {
              if ((r.call(this, e, o), t && "object" != typeof t))
                throw TypeError("values must be an object");
              if (
                ((this.valuesById = {}),
                (this.values = Object.create(this.valuesById)),
                (this.comment = n),
                (this.comments = i || {}),
                (this.reserved = void 0),
                t)
              )
                for (var a = Object.keys(t), s = 0; s < a.length; ++s)
                  "number" == typeof t[a[s]] &&
                    (this.valuesById[(this.values[a[s]] = t[a[s]])] = a[s]);
            }
            (l.fromJSON = function (e, t) {
              var o = new l(e, t.values, t.options, t.comment, t.comments);
              return (o.reserved = t.reserved), o;
            }),
              (l.prototype.toJSON = function (e) {
                var t = !!e && Boolean(e.keepComments);
                return s.toObject([
                  "options",
                  this.options,
                  "values",
                  this.values,
                  "reserved",
                  this.reserved && this.reserved.length
                    ? this.reserved
                    : void 0,
                  "comment",
                  t ? this.comment : void 0,
                  "comments",
                  t ? this.comments : void 0,
                ]);
              }),
              (l.prototype.add = function (e, t, o) {
                if (!s.isString(e)) throw TypeError("name must be a string");
                if (!s.isInteger(t)) throw TypeError("id must be an integer");
                if (void 0 !== this.values[e])
                  throw Error("duplicate name '" + e + "' in " + this);
                if (this.isReservedId(t))
                  throw Error("id " + t + " is reserved in " + this);
                if (this.isReservedName(e))
                  throw Error("name '" + e + "' is reserved in " + this);
                if (void 0 !== this.valuesById[t]) {
                  if (!this.options || !this.options.allow_alias)
                    throw Error("duplicate id " + t + " in " + this);
                  this.values[e] = t;
                } else this.valuesById[(this.values[e] = t)] = e;
                return (this.comments[e] = o || null), this;
              }),
              (l.prototype.remove = function (e) {
                if (!s.isString(e)) throw TypeError("name must be a string");
                var t = this.values[e];
                if (null == t)
                  throw Error("name '" + e + "' does not exist in " + this);
                return (
                  delete this.valuesById[t],
                  delete this.values[e],
                  delete this.comments[e],
                  this
                );
              }),
              (l.prototype.isReservedId = function (e) {
                return a.isReservedId(this.reserved, e);
              }),
              (l.prototype.isReservedName = function (e) {
                return a.isReservedName(this.reserved, e);
              }),
              o.exports;
          },
          function () {
            return {
              "./object": __cjsMetaURL$C,
              "./namespace": __cjsMetaURL$q,
              "./util": __cjsMetaURL$B,
            };
          }
        );
        var __cjsMetaURL$E =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js";
        loader.define(
          __cjsMetaURL$E,
          function (e, t, o, n, i) {
            o.exports = function (e) {
              for (
                var t,
                  o = s.codegen(["m", "w"], e.name + "$encode")("if(!w)")(
                    "w=Writer.create()"
                  ),
                  n = e.fieldsArray.slice().sort(s.compareFieldsById),
                  i = 0;
                i < n.length;
                ++i
              ) {
                var c = n[i].resolve(),
                  u = e._fieldsArray.indexOf(c),
                  m = c.resolvedType instanceof r ? "int32" : c.type,
                  p = a.basic[m];
                (t = "m" + s.safeProp(c.name)),
                  c.map
                    ? (o(
                        "if(%s!=null&&Object.hasOwnProperty.call(m,%j)){",
                        t,
                        c.name
                      )("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", t)(
                        "w.uint32(%i).fork().uint32(%i).%s(ks[i])",
                        ((c.id << 3) | 2) >>> 0,
                        8 | a.mapKey[c.keyType],
                        c.keyType
                      ),
                      void 0 === p
                        ? o(
                            "types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()",
                            u,
                            t
                          )
                        : o(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | p, m, t),
                      o("}")("}"))
                    : c.repeated
                    ? (o("if(%s!=null&&%s.length){", t, t),
                      c.packed && void 0 !== a.packed[m]
                        ? o("w.uint32(%i).fork()", ((c.id << 3) | 2) >>> 0)(
                            "for(var i=0;i<%s.length;++i)",
                            t
                          )(
                            "w.%s(%s[i])",
                            m,
                            t
                          )("w.ldelim()")
                        : (o("for(var i=0;i<%s.length;++i)", t),
                          void 0 === p
                            ? l(o, c, u, t + "[i]")
                            : o(
                                "w.uint32(%i).%s(%s[i])",
                                ((c.id << 3) | p) >>> 0,
                                m,
                                t
                              )),
                      o("}"))
                    : (c.optional &&
                        o(
                          "if(%s!=null&&Object.hasOwnProperty.call(m,%j))",
                          t,
                          c.name
                        ),
                      void 0 === p
                        ? l(o, c, u, t)
                        : o(
                            "w.uint32(%i).%s(%s)",
                            ((c.id << 3) | p) >>> 0,
                            m,
                            t
                          ));
              }
              return o("return w");
            };
            var r = t("./enum"),
              a = t("./types"),
              s = t("./util");
            function l(e, t, o, n) {
              return t.resolvedType.group
                ? e(
                    "types[%i].encode(%s,w.uint32(%i)).uint32(%i)",
                    o,
                    n,
                    ((t.id << 3) | 3) >>> 0,
                    ((t.id << 3) | 4) >>> 0
                  )
                : e(
                    "types[%i].encode(%s,w.uint32(%i).fork()).ldelim()",
                    o,
                    n,
                    ((t.id << 3) | 2) >>> 0
                  );
            }
            o.exports;
          },
          function () {
            return {
              "./enum": __cjsMetaURL$D,
              "./types": __cjsMetaURL$n,
              "./util": __cjsMetaURL$B,
            };
          }
        );
        var __cjsMetaURL$F =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js";
        loader.define(
          __cjsMetaURL$F,
          function (e, t, o, n, i) {
            var r = (o.exports = t("./index-minimal"));
            (r.build = "light"),
              (r.load = function (e, t, o) {
                return (
                  "function" == typeof t
                    ? ((o = t), (t = new r.Root()))
                    : t || (t = new r.Root()),
                  t.load(e, o)
                );
              }),
              (r.loadSync = function (e, t) {
                return t || (t = new r.Root()), t.loadSync(e);
              }),
              (r.encoder = t("./encoder")),
              (r.decoder = t("./decoder")),
              (r.verifier = t("./verifier")),
              (r.converter = t("./converter")),
              (r.ReflectionObject = t("./object")),
              (r.Namespace = t("./namespace")),
              (r.Root = t("./root")),
              (r.Enum = t("./enum")),
              (r.Type = t("./type")),
              (r.Field = t("./field")),
              (r.OneOf = t("./oneof")),
              (r.MapField = t("./mapfield")),
              (r.Service = t("./service")),
              (r.Method = t("./method")),
              (r.Message = t("./message")),
              (r.wrappers = t("./wrappers")),
              (r.types = t("./types")),
              (r.util = t("./util")),
              r.ReflectionObject._configure(r.Root),
              r.Namespace._configure(r.Type, r.Service, r.Enum),
              r.Root._configure(r.Type),
              r.Field._configure(r.Type),
              o.exports;
          },
          function () {
            return {
              "./index-minimal": __cjsMetaURL$g,
              "./encoder": __cjsMetaURL$E,
              "./decoder": __cjsMetaURL$v,
              "./verifier": __cjsMetaURL$w,
              "./converter": __cjsMetaURL$x,
              "./object": __cjsMetaURL$C,
              "./namespace": __cjsMetaURL$q,
              "./root": __cjsMetaURL$A,
              "./enum": __cjsMetaURL$D,
              "./type": __cjsMetaURL$z,
              "./field": __cjsMetaURL$o,
              "./oneof": __cjsMetaURL$p,
              "./mapfield": __cjsMetaURL$r,
              "./service": __cjsMetaURL$t,
              "./method": __cjsMetaURL$s,
              "./message": __cjsMetaURL$u,
              "./wrappers": __cjsMetaURL$y,
              "./types": __cjsMetaURL$n,
              "./util": __cjsMetaURL$B,
            };
          }
        );
        var __cjsMetaURL$G =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js";
        loader.define(
          __cjsMetaURL$G,
          function (e, t, o, n, i) {
            o.exports = f;
            var r = /[\s{}=;:[\],'"()<>]/g,
              a = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
              s = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
              l = /^ *[*/]+ */,
              c = /^\s*\*?\/*/,
              u = /\n/g,
              m = /\s/,
              p = /\\(.?)/g,
              h = { 0: "\0", r: "\r", n: "\n", t: "\t" };
            function _(e) {
              return e.replace(p, function (e, t) {
                switch (t) {
                  case "\\":
                  case "":
                    return t;
                  default:
                    return h[t] || "";
                }
              });
            }
            function f(e, t) {
              e = e.toString();
              var o = 0,
                n = e.length,
                i = 1,
                p = null,
                h = null,
                f = 0,
                d = !1,
                C = !1,
                S = [],
                y = null;
              function g(e) {
                return Error("illegal " + e + " (line " + i + ")");
              }
              function b(t) {
                return e.charAt(t);
              }
              function T(o, n, r) {
                (p = e.charAt(o++)), (f = i), (d = !1), (C = r);
                var a,
                  s = o - (t ? 2 : 3);
                do {
                  if (--s < 0 || "\n" === (a = e.charAt(s))) {
                    d = !0;
                    break;
                  }
                } while (" " === a || "\t" === a);
                for (
                  var m = e.substring(o, n).split(u), _ = 0;
                  _ < m.length;
                  ++_
                )
                  m[_] = m[_].replace(t ? c : l, "").trim();
                h = m.join("\n").trim();
              }
              function v(t) {
                var o = E(t),
                  n = e.substring(t, o);
                return /^\s*\/{1,2}/.test(n);
              }
              function E(e) {
                for (var t = e; t < n && "\n" !== b(t); ) t++;
                return t;
              }
              function w() {
                if (S.length > 0) return S.shift();
                if (y)
                  return (function () {
                    var t = "'" === y ? s : a;
                    t.lastIndex = o - 1;
                    var n = t.exec(e);
                    if (!n) throw g("string");
                    return (o = t.lastIndex), L(y), (y = null), _(n[1]);
                  })();
                var l,
                  c,
                  u,
                  p,
                  h,
                  f = 0 === o;
                do {
                  if (o === n) return null;
                  for (l = !1; m.test((u = b(o))); )
                    if (("\n" === u && ((f = !0), ++i), ++o === n)) return null;
                  if ("/" === b(o)) {
                    if (++o === n) throw g("comment");
                    if ("/" === b(o))
                      if (t) {
                        if (((p = o), (h = !1), v(o))) {
                          h = !0;
                          do {
                            if ((o = E(o)) === n) break;
                            o++;
                          } while (v(o));
                        } else o = Math.min(n, E(o) + 1);
                        h && T(p, o, f), i++, (l = !0);
                      } else {
                        for (h = "/" === b((p = o + 1)); "\n" !== b(++o); )
                          if (o === n) return null;
                        ++o, h && T(p, o - 1, f), ++i, (l = !0);
                      }
                    else {
                      if ("*" !== (u = b(o))) return "/";
                      (p = o + 1), (h = t || "*" === b(p));
                      do {
                        if (("\n" === u && ++i, ++o === n)) throw g("comment");
                        (c = u), (u = b(o));
                      } while ("*" !== c || "/" !== u);
                      ++o, h && T(p, o - 2, f), (l = !0);
                    }
                  }
                } while (l);
                var d = o;
                if (((r.lastIndex = 0), !r.test(b(d++))))
                  for (; d < n && !r.test(b(d)); ) ++d;
                var C = e.substring(o, (o = d));
                return ('"' !== C && "'" !== C) || (y = C), C;
              }
              function L(e) {
                S.push(e);
              }
              function A() {
                if (!S.length) {
                  var e = w();
                  if (null === e) return null;
                  L(e);
                }
                return S[0];
              }
              return Object.defineProperty(
                {
                  next: w,
                  peek: A,
                  push: L,
                  skip: function (e, t) {
                    var o = A();
                    if (o === e) return w(), !0;
                    if (!t) throw g("token '" + o + "', '" + e + "' expected");
                    return !1;
                  },
                  cmnt: function (e) {
                    var o = null;
                    return (
                      void 0 === e
                        ? f === i - 1 &&
                          (t || "*" === p || d) &&
                          (o = C ? h : null)
                        : (f < e && A(),
                          f !== e ||
                            d ||
                            (!t && "/" !== p) ||
                            (o = C ? null : h)),
                      o
                    );
                  },
                },
                "line",
                {
                  get: function () {
                    return i;
                  },
                }
              );
            }
            (f.unescape = _), o.exports;
          },
          {}
        );
        var __cjsMetaURL$H =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/src/parse.js";
        loader.define(
          __cjsMetaURL$H,
          function (e, t, o, n, i) {
            (o.exports = L),
              (L.filename = null),
              (L.defaults = { keepCase: !1 });
            var r = t("./tokenize"),
              a = t("./root"),
              s = t("./type"),
              l = t("./field"),
              c = t("./mapfield"),
              u = t("./oneof"),
              m = t("./enum"),
              p = t("./service"),
              h = t("./method"),
              _ = t("./types"),
              f = t("./util"),
              d = /^[1-9][0-9]*$/,
              C = /^-?[1-9][0-9]*$/,
              S = /^0[x][0-9a-fA-F]+$/,
              y = /^-?0[x][0-9a-fA-F]+$/,
              g = /^0[0-7]+$/,
              b = /^-?0[0-7]+$/,
              T = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/,
              v = /^[a-zA-Z_][a-zA-Z_0-9]*$/,
              E =
                /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/,
              w = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
            function L(e, t, o) {
              t instanceof a || ((o = t), (t = new a())), o || (o = L.defaults);
              var n,
                i,
                A,
                $,
                P,
                R = o.preferTrailingComment || !1,
                I = r(e, o.alternateCommentMode || !1),
                D = I.next,
                N = I.push,
                O = I.peek,
                k = I.skip,
                F = I.cmnt,
                B = !0,
                x = !1,
                G = t,
                j = o.keepCase
                  ? function (e) {
                      return e;
                    }
                  : f.camelCase;
              function U(e, t, o) {
                var n = L.filename;
                return (
                  o || (L.filename = null),
                  Error(
                    "illegal " +
                      (t || "token") +
                      " '" +
                      e +
                      "' (" +
                      (n ? n + ", " : "") +
                      "line " +
                      I.line +
                      ")"
                  )
                );
              }
              function V() {
                var e,
                  t = [];
                do {
                  if ('"' !== (e = D()) && "'" !== e) throw U(e);
                  t.push(D()), k(e), (e = O());
                } while ('"' === e || "'" === e);
                return t.join("");
              }
              function M(e) {
                var t = D();
                switch (t) {
                  case "'":
                  case '"':
                    return N(t), V();
                  case "true":
                  case "TRUE":
                    return !0;
                  case "false":
                  case "FALSE":
                    return !1;
                }
                try {
                  return (function (e, t) {
                    var o = 1;
                    "-" === e.charAt(0) && ((o = -1), (e = e.substring(1)));
                    switch (e) {
                      case "inf":
                      case "INF":
                      case "Inf":
                        return o * (1 / 0);
                      case "nan":
                      case "NAN":
                      case "Nan":
                      case "NaN":
                        return NaN;
                      case "0":
                        return 0;
                    }
                    if (d.test(e)) return o * parseInt(e, 10);
                    if (S.test(e)) return o * parseInt(e, 16);
                    if (g.test(e)) return o * parseInt(e, 8);
                    if (T.test(e)) return o * parseFloat(e);
                    throw U(e, "number", t);
                  })(t, !0);
                } catch (o) {
                  if (e && E.test(t)) return t;
                  throw U(t, "value");
                }
              }
              function W(e, t) {
                var o, n;
                do {
                  !t || ('"' !== (o = O()) && "'" !== o)
                    ? e.push([(n = Q(D())), k("to", !0) ? Q(D()) : n])
                    : e.push(V());
                } while (k(",", !0));
                k(";");
              }
              function Q(e, t) {
                switch (e) {
                  case "max":
                  case "MAX":
                  case "Max":
                    return 536870911;
                  case "0":
                    return 0;
                }
                if (!t && "-" === e.charAt(0)) throw U(e, "id");
                if (C.test(e)) return parseInt(e, 10);
                if (y.test(e)) return parseInt(e, 16);
                if (b.test(e)) return parseInt(e, 8);
                throw U(e, "id");
              }
              function H() {
                if (void 0 !== n) throw U("package");
                if (((n = D()), !E.test(n))) throw U(n, "name");
                (G = G.define(n)), k(";");
              }
              function z() {
                var e,
                  t = O();
                switch (t) {
                  case "weak":
                    (e = A || (A = [])), D();
                    break;
                  case "public":
                    D();
                  default:
                    e = i || (i = []);
                }
                (t = V()), k(";"), e.push(t);
              }
              function q() {
                if (
                  (k("="), ($ = V()), !(x = "proto3" === $) && "proto2" !== $)
                )
                  throw U($, "syntax");
                k(";");
              }
              function Y(e, t) {
                switch (t) {
                  case "option":
                    return X(e, t), k(";"), !0;
                  case "message":
                    return (
                      (function (e, t) {
                        if (!v.test((t = D()))) throw U(t, "type name");
                        var o = new s(t);
                        K(o, function (e) {
                          if (!Y(o, e))
                            switch (e) {
                              case "map":
                                !(function (e) {
                                  k("<");
                                  var t = D();
                                  if (void 0 === _.mapKey[t])
                                    throw U(t, "type");
                                  k(",");
                                  var o = D();
                                  if (!E.test(o)) throw U(o, "type");
                                  k(">");
                                  var n = D();
                                  if (!v.test(n)) throw U(n, "name");
                                  k("=");
                                  var i = new c(j(n), Q(D()), t, o);
                                  K(
                                    i,
                                    function (e) {
                                      if ("option" !== e) throw U(e);
                                      X(i, e), k(";");
                                    },
                                    function () {
                                      te(i);
                                    }
                                  ),
                                    e.add(i);
                                })(o);
                                break;
                              case "required":
                              case "repeated":
                                Z(o, e);
                                break;
                              case "optional":
                                Z(o, x ? "proto3_optional" : "optional");
                                break;
                              case "oneof":
                                !(function (e, t) {
                                  if (!v.test((t = D()))) throw U(t, "name");
                                  var o = new u(j(t));
                                  K(o, function (e) {
                                    "option" === e
                                      ? (X(o, e), k(";"))
                                      : (N(e), Z(o, "optional"));
                                  }),
                                    e.add(o);
                                })(o, e);
                                break;
                              case "extensions":
                                W(o.extensions || (o.extensions = []));
                                break;
                              case "reserved":
                                W(o.reserved || (o.reserved = []), !0);
                                break;
                              default:
                                if (!x || !E.test(e)) throw U(e);
                                N(e), Z(o, "optional");
                            }
                        }),
                          e.add(o);
                      })(e, t),
                      !0
                    );
                  case "enum":
                    return (
                      (function (e, t) {
                        if (!v.test((t = D()))) throw U(t, "name");
                        var o = new m(t);
                        K(o, function (e) {
                          switch (e) {
                            case "option":
                              X(o, e), k(";");
                              break;
                            case "reserved":
                              W(o.reserved || (o.reserved = []), !0);
                              break;
                            default:
                              !(function (e, t) {
                                if (!v.test(t)) throw U(t, "name");
                                k("=");
                                var o = Q(D(), !0),
                                  n = {};
                                K(
                                  n,
                                  function (e) {
                                    if ("option" !== e) throw U(e);
                                    X(n, e), k(";");
                                  },
                                  function () {
                                    te(n);
                                  }
                                ),
                                  e.add(t, o, n.comment);
                              })(o, e);
                          }
                        }),
                          e.add(o);
                      })(e, t),
                      !0
                    );
                  case "service":
                    return (
                      (function (e, t) {
                        if (!v.test((t = D()))) throw U(t, "service name");
                        var o = new p(t);
                        K(o, function (e) {
                          if (!Y(o, e)) {
                            if ("rpc" !== e) throw U(e);
                            !(function (e, t) {
                              var o = F(),
                                n = t;
                              if (!v.test((t = D()))) throw U(t, "name");
                              var i,
                                r,
                                a,
                                s,
                                l = t;
                              k("("), k("stream", !0) && (r = !0);
                              if (!E.test((t = D()))) throw U(t);
                              (i = t),
                                k(")"),
                                k("returns"),
                                k("("),
                                k("stream", !0) && (s = !0);
                              if (!E.test((t = D()))) throw U(t);
                              (a = t), k(")");
                              var c = new h(l, n, i, a, r, s);
                              (c.comment = o),
                                K(c, function (e) {
                                  if ("option" !== e) throw U(e);
                                  X(c, e), k(";");
                                }),
                                e.add(c);
                            })(o, e);
                          }
                        }),
                          e.add(o);
                      })(e, t),
                      !0
                    );
                  case "extend":
                    return (
                      (function (e, t) {
                        if (!E.test((t = D()))) throw U(t, "reference");
                        var o = t;
                        K(null, function (t) {
                          switch (t) {
                            case "required":
                            case "repeated":
                              Z(e, t, o);
                              break;
                            case "optional":
                              Z(e, x ? "proto3_optional" : "optional", o);
                              break;
                            default:
                              if (!x || !E.test(t)) throw U(t);
                              N(t), Z(e, "optional", o);
                          }
                        });
                      })(e, t),
                      !0
                    );
                }
                return !1;
              }
              function K(e, t, o) {
                var n = I.line;
                if (
                  (e &&
                    ("string" != typeof e.comment && (e.comment = F()),
                    (e.filename = L.filename)),
                  k("{", !0))
                ) {
                  for (var i; "}" !== (i = D()); ) t(i);
                  k(";", !0);
                } else
                  o && o(),
                    k(";"),
                    e &&
                      ("string" != typeof e.comment || R) &&
                      (e.comment = F(n) || e.comment);
              }
              function Z(e, t, o) {
                var n = D();
                if ("group" !== n) {
                  if (!E.test(n)) throw U(n, "type");
                  var i = D();
                  if (!v.test(i)) throw U(i, "name");
                  (i = j(i)), k("=");
                  var r = new l(i, Q(D()), n, t, o);
                  if (
                    (K(
                      r,
                      function (e) {
                        if ("option" !== e) throw U(e);
                        X(r, e), k(";");
                      },
                      function () {
                        te(r);
                      }
                    ),
                    "proto3_optional" === t)
                  ) {
                    var a = new u("_" + i);
                    r.setOption("proto3_optional", !0), a.add(r), e.add(a);
                  } else e.add(r);
                  x ||
                    !r.repeated ||
                    (void 0 === _.packed[n] && void 0 !== _.basic[n]) ||
                    r.setOption("packed", !1, !0);
                } else
                  !(function (e, t) {
                    var o = D();
                    if (!v.test(o)) throw U(o, "name");
                    var n = f.lcFirst(o);
                    o === n && (o = f.ucFirst(o));
                    k("=");
                    var i = Q(D()),
                      r = new s(o);
                    r.group = !0;
                    var a = new l(n, i, o, t);
                    (a.filename = L.filename),
                      K(r, function (e) {
                        switch (e) {
                          case "option":
                            X(r, e), k(";");
                            break;
                          case "required":
                          case "repeated":
                            Z(r, e);
                            break;
                          case "optional":
                            Z(r, x ? "proto3_optional" : "optional");
                            break;
                          default:
                            throw U(e);
                        }
                      }),
                      e.add(r).add(a);
                  })(e, t);
              }
              function X(e, t) {
                var o = k("(", !0);
                if (!E.test((t = D()))) throw U(t, "name");
                var n,
                  i = t,
                  r = i;
                o &&
                  (k(")"),
                  (r = i = "(" + i + ")"),
                  (t = O()),
                  w.test(t) && ((n = t.substr(1)), (i += t), D())),
                  k("="),
                  (function (e, t, o, n) {
                    e.setParsedOption && e.setParsedOption(t, o, n);
                  })(e, r, J(e, i), n);
              }
              function J(e, t) {
                if (k("{", !0)) {
                  for (var o = {}; !k("}", !0); ) {
                    if (!v.test((P = D()))) throw U(P, "name");
                    var n,
                      i = P;
                    "{" === O()
                      ? (n = J(e, t + "." + P))
                      : (k(":"),
                        "{" === O()
                          ? (n = J(e, t + "." + P))
                          : ((n = M(!0)), ee(e, t + "." + P, n)));
                    var r = o[i];
                    r && (n = [].concat(r).concat(n)), (o[i] = n), k(",", !0);
                  }
                  return o;
                }
                var a = M(!0);
                return ee(e, t, a), a;
              }
              function ee(e, t, o) {
                e.setOption && e.setOption(t, o);
              }
              function te(e) {
                if (k("[", !0)) {
                  do {
                    X(e, "option");
                  } while (k(",", !0));
                  k("]");
                }
                return e;
              }
              for (; null !== (P = D()); )
                switch (P) {
                  case "package":
                    if (!B) throw U(P);
                    H();
                    break;
                  case "import":
                    if (!B) throw U(P);
                    z();
                    break;
                  case "syntax":
                    if (!B) throw U(P);
                    q();
                    break;
                  case "option":
                    X(G, P), k(";");
                    break;
                  default:
                    if (Y(G, P)) {
                      B = !1;
                      continue;
                    }
                    throw U(P);
                }
              return (
                (L.filename = null),
                { package: n, imports: i, weakImports: A, syntax: $, root: t }
              );
            }
            o.exports;
          },
          function () {
            return {
              "./tokenize": __cjsMetaURL$G,
              "./root": __cjsMetaURL$A,
              "./type": __cjsMetaURL$z,
              "./field": __cjsMetaURL$o,
              "./mapfield": __cjsMetaURL$r,
              "./oneof": __cjsMetaURL$p,
              "./enum": __cjsMetaURL$D,
              "./service": __cjsMetaURL$t,
              "./method": __cjsMetaURL$s,
              "./types": __cjsMetaURL$n,
              "./util": __cjsMetaURL$B,
            };
          }
        );
        var __cjsMetaURL$I =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/src/common.js";
        loader.define(
          __cjsMetaURL$I,
          function (e, t, o, n, i) {
            o.exports = s;
            var r,
              a = /\/|\./;
            function s(e, t) {
              a.test(e) ||
                ((e = "google/protobuf/" + e + ".proto"),
                (t = {
                  nested: { google: { nested: { protobuf: { nested: t } } } },
                })),
                (s[e] = t);
            }
            s("any", {
              Any: {
                fields: {
                  type_url: { type: "string", id: 1 },
                  value: { type: "bytes", id: 2 },
                },
              },
            }),
              s("duration", {
                Duration: (r = {
                  fields: {
                    seconds: { type: "int64", id: 1 },
                    nanos: { type: "int32", id: 2 },
                  },
                }),
              }),
              s("timestamp", { Timestamp: r }),
              s("empty", { Empty: { fields: {} } }),
              s("struct", {
                Struct: {
                  fields: {
                    fields: { keyType: "string", type: "Value", id: 1 },
                  },
                },
                Value: {
                  oneofs: {
                    kind: {
                      oneof: [
                        "nullValue",
                        "numberValue",
                        "stringValue",
                        "boolValue",
                        "structValue",
                        "listValue",
                      ],
                    },
                  },
                  fields: {
                    nullValue: { type: "NullValue", id: 1 },
                    numberValue: { type: "double", id: 2 },
                    stringValue: { type: "string", id: 3 },
                    boolValue: { type: "bool", id: 4 },
                    structValue: { type: "Struct", id: 5 },
                    listValue: { type: "ListValue", id: 6 },
                  },
                },
                NullValue: { values: { NULL_VALUE: 0 } },
                ListValue: {
                  fields: {
                    values: { rule: "repeated", type: "Value", id: 1 },
                  },
                },
              }),
              s("wrappers", {
                DoubleValue: { fields: { value: { type: "double", id: 1 } } },
                FloatValue: { fields: { value: { type: "float", id: 1 } } },
                Int64Value: { fields: { value: { type: "int64", id: 1 } } },
                UInt64Value: { fields: { value: { type: "uint64", id: 1 } } },
                Int32Value: { fields: { value: { type: "int32", id: 1 } } },
                UInt32Value: { fields: { value: { type: "uint32", id: 1 } } },
                BoolValue: { fields: { value: { type: "bool", id: 1 } } },
                StringValue: { fields: { value: { type: "string", id: 1 } } },
                BytesValue: { fields: { value: { type: "bytes", id: 1 } } },
              }),
              s("field_mask", {
                FieldMask: {
                  fields: {
                    paths: { rule: "repeated", type: "string", id: 1 },
                  },
                },
              }),
              (s.get = function (e) {
                return s[e] || null;
              }),
              o.exports;
          },
          {}
        );
        var __cjsMetaURL$J =
            "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/src/index.js",
          _cjsExports$2;
        loader.define(
          __cjsMetaURL$J,
          function (e, t, o, n, i) {
            var r = (o.exports = t("./index-light"));
            (r.build = "full"),
              (r.tokenize = t("./tokenize")),
              (r.parse = t("./parse")),
              (r.common = t("./common")),
              r.Root._configure(r.Type, r.parse, r.common),
              o.exports;
          },
          function () {
            return {
              "./index-light": __cjsMetaURL$F,
              "./tokenize": __cjsMetaURL$G,
              "./parse": __cjsMetaURL$H,
              "./common": __cjsMetaURL$I,
            };
          }
        );
        var __cjsMetaURL$K =
            "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/index.js",
          _dec$j,
          _class$m;
        loader.define(
          __cjsMetaURL$K,
          function (e, t, o, n, i) {
            (o.exports = t("./src/index")), (_cjsExports$2 = o.exports);
          },
          function () {
            return { "./src/index": __cjsMetaURL$J };
          }
        ),
          __cjsMetaURL$K ||
            loader.throwInvalidWrapper(
              "./index.js",
              "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/TreasureQuest/Client/Thai_UAT/node_modules/protobufjs/index.mjs?cjs=&original=.js"
            ),
          loader.require(__cjsMetaURL$K),
          cclegacy._RF.push(
            {},
            "4b272jrDS5HjL+CcEoRpKLG",
            "UnshowPerpareState",
            void 0
          );
        var ccclass$m = _decorator.ccclass,
          UnshowPerpareState =
            ((_dec$j = ccclass$m("UnshowPerpareState")),
            _dec$j(
              (_class$m = (function (e) {
                function t(t) {
                  var o;
                  return (
                    ((o = e.call(this) || this).m_gameView = null),
                    (o.m_gameView = t),
                    o
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.OnEnter = function () {
                    if (
                      (log("Game_Define.GAMEVIEW_STATE.UNSHOW_PERPARE"),
                      this.m_gameView.UnshowSpinAck)
                    ) {
                      if (
                        ((this.m_gameView.EffectPlate.GameIntro.node.active =
                          !1),
                        node$3.SetBarNodeVisiable(!0),
                        (TSQ_Define.TotalWin = 0),
                        this.m_gameView.OnRotation(),
                        node$c.UnshowStartRound >= 1)
                      ) {
                        this.m_gameView.BuyBonus.SetBuyBtnVisible(!1),
                          (TSQ_Define.IsInFG = !0),
                          (TSQ_Define.Round = node$c.UnshowStartRound),
                          (this.m_gameView.SpinAck =
                            this.m_gameView.UnshowSpinAck);
                        for (var e = 0; e < node$c.UnshowStartRound; e++) {
                          var t = this.m_gameView.SpinAck.RoundQueue,
                            o = t[e].RoundWin ? t[e].RoundWin : 0;
                          TSQ_Define.TotalWin = node.plus(
                            TSQ_Define.TotalWin,
                            o
                          );
                        }
                        node$3.SetWinValue(TSQ_Define.TotalWin);
                        var n =
                          this.m_gameView.SpinAck.RoundQueue[TSQ_Define.Round];
                        this.m_gameView.SlotReels.SetPlateSymbol(
                          n.ComboStageData[0].ComboStageSymbol
                        ),
                          this.m_gameView.EffectPlate.SetFgAltar(n.Mult),
                          node$3.SetEnterFree(),
                          this.m_gameView.SetBackground(),
                          this.m_gameView.EffectPlate.SetManualActive();
                      } else {
                        var i;
                        null == (i = this.m_gameView.BuyBonus) ||
                          i.SetBuyBtnVisible(!0);
                      }
                      this.m_gameView.ResumeBgm(),
                        (node$a.HasUnshow = !1),
                        node$6.ShowMessageBox(
                          node$4.StringKey.MSGBOX_UNSHOW_BACK,
                          node$4.StringKey.MSGBOX_TITLE_SYSTEM_INFO,
                          function () {
                            node$5.NextState(CommonState.SPIN);
                          }
                        );
                    }
                  }),
                  (o.OnProcess = function () {}),
                  (o.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$m),
          _dec$k,
          _class$n;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "e6302m0/S1Cl6FpCss3n1ex",
            "LightBallPurpleState",
            void 0
          );
        var ccclass$n = _decorator.ccclass,
          LightBallPurpleState =
            ((_dec$k = ccclass$n("LightBallPurpleState")),
            _dec$k(
              (_class$n = (function (e) {
                function t(t) {
                  var o;
                  return (
                    ((o = e.call(this) || this).m_gameView = null),
                    (o.m_gameView = t),
                    o
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.OnEnter = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, o, n, i;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    log("game state LIGHT_BALL_PURPLE_STATE"),
                                    (t =
                                      this.m_gameView.SpinAck.RoundQueue[
                                        TSQ_Define.Round
                                      ].ComboStageData[TSQ_Define.PlateIdx]),
                                    (o = t.AwardDataVec),
                                    (n = t.LightInfo.TwoInfo),
                                    (i = this.m_gameView.GetHpBarPercent()),
                                    (this.m_gameView.IsLock = !0),
                                    (e.next = 8),
                                    this.m_gameView.EffectPlate
                                      .CollectLightPointWaitPromises[
                                      LIGHT_TYPE.PURPLE
                                    ]
                                  );
                                case 8:
                                  return (
                                    (e.next = 10),
                                    this.m_gameView.EffectPlate.PurplePower(
                                      o,
                                      n,
                                      i
                                    )
                                  );
                                case 10:
                                  (TSQ_Define.TotalWin +=
                                    this.m_gameView.SpinAck.RoundQueue[
                                      TSQ_Define.Round
                                    ].ComboStageData[
                                      TSQ_Define.PlateIdx
                                    ].ComboStageWin),
                                    this.m_gameView.SetWin(),
                                    this.m_gameView.lockEnd(),
                                    node$5.NextState(
                                      TSQ_Define.GameState.COLLECT_LIGHT_POINT
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
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.OnProcess = function () {}),
                  (o.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$n),
          _dec$l,
          _class$o;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "973e0oeGLRBRrhfBv0ie5IV",
            "LightBallBlueState",
            void 0
          );
        var ccclass$o = _decorator.ccclass,
          LightBallBlueState =
            ((_dec$l = ccclass$o("LightBallPinkState")),
            _dec$l(
              (_class$o = (function (e) {
                function t(t) {
                  var o;
                  return (
                    ((o = e.call(this) || this).m_gameView = null),
                    (o.m_gameView = t),
                    o
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.OnEnter = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, o, n, i;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    log("game state LIGHT_BALL_BLUE_STATE"),
                                    (t =
                                      this.m_gameView.SpinAck.RoundQueue[
                                        TSQ_Define.Round
                                      ].ComboStageData[TSQ_Define.PlateIdx]),
                                    (o = t.LightInfo.FiveInfo),
                                    (n = t.AwardDataVec),
                                    (i = this.m_gameView.GetHpBarPercent()),
                                    (this.m_gameView.IsLock = !0),
                                    (e.next = 8),
                                    this.m_gameView.EffectPlate
                                      .CollectLightPointWaitPromises[
                                      LIGHT_TYPE.BLUE
                                    ]
                                  );
                                case 8:
                                  return (
                                    (e.next = 10),
                                    this.m_gameView.EffectPlate.BluePower(
                                      n,
                                      o,
                                      i
                                    )
                                  );
                                case 10:
                                  (TSQ_Define.TotalWin +=
                                    this.m_gameView.SpinAck.RoundQueue[
                                      TSQ_Define.Round
                                    ].ComboStageData[
                                      TSQ_Define.PlateIdx
                                    ].ComboStageWin),
                                    this.m_gameView.SetWin(),
                                    this.m_gameView.lockEnd(),
                                    node$5.NextState(
                                      TSQ_Define.GameState.COLLECT_LIGHT_POINT
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
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.OnProcess = function () {}),
                  (o.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$o),
          _dec$m,
          _class$p;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "9a4fbYPoV5CTIZb4Mdmtx18",
            "LightBallGreenState",
            void 0
          );
        var ccclass$p = _decorator.ccclass,
          LightBallGreenState =
            ((_dec$m = ccclass$p("LightBallGreenState")),
            _dec$m(
              (_class$p = (function (e) {
                function t(t) {
                  var o;
                  return (
                    ((o = e.call(this) || this).m_gameView = null),
                    (o.m_gameView = t),
                    o
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.OnEnter = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, o, n, i;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    log("game state LIGHT_BALL_GREEN_STATE"),
                                    (t =
                                      this.m_gameView.SpinAck.RoundQueue[
                                        TSQ_Define.Round
                                      ].ComboStageData[TSQ_Define.PlateIdx]),
                                    (o = t.LightInfo.ThreeInfo),
                                    (n = t.Eliminate),
                                    (i = t.AwardDataVec),
                                    (this.m_gameView.IsLock = !0),
                                    (e.next = 8),
                                    this.m_gameView.EffectPlate
                                      .CollectLightPointWaitPromises[
                                      LIGHT_TYPE.GREEN
                                    ]
                                  );
                                case 8:
                                  return (
                                    (e.next = 10),
                                    this.m_gameView.EffectPlate.GreenPower(
                                      i,
                                      o,
                                      n
                                    )
                                  );
                                case 10:
                                  (TSQ_Define.TotalWin += t.ComboStageWin),
                                    this.m_gameView.SetWin(),
                                    this.m_gameView.lockEnd(),
                                    node$5.NextState(
                                      TSQ_Define.GameState.COLLECT_LIGHT_POINT
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
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.OnProcess = function () {}),
                  (o.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$p),
          _dec$n,
          _class$q;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "e9304efwUlBWr946vFL0uQp",
            "LightBallCyanState",
            void 0
          );
        var ccclass$q = _decorator.ccclass,
          LightBallCyanState =
            ((_dec$n = ccclass$q("LightBallCyanState")),
            _dec$n(
              (_class$q = (function (e) {
                function t(t) {
                  var o;
                  return (
                    ((o = e.call(this) || this).m_gameView = null),
                    (o.m_gameView = t),
                    o
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.OnEnter = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, o;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    log("game state LIGHT_BALL_CYAN_STATE"),
                                    (t =
                                      this.m_gameView.SpinAck.RoundQueue[
                                        TSQ_Define.Round
                                      ].ComboStageData[TSQ_Define.PlateIdx]),
                                    (o = t.Eliminate),
                                    (this.m_gameView.IsLock = !0),
                                    (e.next = 6),
                                    this.m_gameView.EffectPlate
                                      .CollectLightPointWaitPromises[
                                      LIGHT_TYPE.CYAN
                                    ]
                                  );
                                case 6:
                                  return (
                                    (e.next = 8),
                                    this.m_gameView.EffectPlate.CyanPower(o)
                                  );
                                case 8:
                                  this.m_gameView.lockEnd(),
                                    (TSQ_Define.TotalWin += t.ComboStageWin),
                                    this.m_gameView.SetWin(),
                                    node$5.NextState(
                                      TSQ_Define.GameState.COLLECT_LIGHT_POINT
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
                  t
                );
              })(BaseState))
            ) || _class$q),
          _dec$o,
          _class$r;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "e7b07YtHxBBoLm4kIN6Ut3z",
            "LightBallOrangeState",
            void 0
          );
        var ccclass$r = _decorator.ccclass,
          LightBallOrangeState =
            ((_dec$o = ccclass$r("LightBallOrangeState")),
            _dec$o(
              (_class$r = (function (e) {
                function t(t) {
                  var o;
                  return (
                    ((o = e.call(this) || this).m_gameView = null),
                    (o.m_gameView = t),
                    o
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.OnEnter = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, o, n, i;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    log("game state LIGHT_BALL_ORANGE_STATE"),
                                    (t =
                                      this.m_gameView.SpinAck.RoundQueue[
                                        TSQ_Define.Round
                                      ].ComboStageData[TSQ_Define.PlateIdx]),
                                    (o = t.Eliminate),
                                    (n = t.LightInfo.FourInfo),
                                    (i = t.AwardDataVec),
                                    (this.m_gameView.IsLock = !0),
                                    (e.next = 8),
                                    this.m_gameView.EffectPlate
                                      .CollectLightPointWaitPromises[
                                      LIGHT_TYPE.ORANGE
                                    ]
                                  );
                                case 8:
                                  return (
                                    (e.next = 10),
                                    this.m_gameView.EffectPlate.OrangePower(
                                      i,
                                      n,
                                      o
                                    )
                                  );
                                case 10:
                                  (TSQ_Define.TotalWin +=
                                    this.m_gameView.SpinAck.RoundQueue[
                                      TSQ_Define.Round
                                    ].ComboStageData[
                                      TSQ_Define.PlateIdx
                                    ].ComboStageWin),
                                    this.m_gameView.SetWin(),
                                    this.m_gameView.lockEnd(),
                                    node$5.NextState(
                                      TSQ_Define.GameState.COLLECT_LIGHT_POINT
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
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.OnProcess = function () {}),
                  (o.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$r),
          _dec$p,
          _class$s;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "ba0b8sFx0lA2Iut5nHzlpW9",
            "EnterFreeState",
            void 0
          );
        var ccclass$s = _decorator.ccclass,
          EnterFreeState =
            ((_dec$p = ccclass$s("EnterFreeState")),
            _dec$p(
              (_class$s = (function (e) {
                function t(t) {
                  var o;
                  return (
                    ((o = e.call(this) || this).m_gameView = null),
                    (o.m_gameView = t),
                    o
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.OnEnter = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t,
                          o,
                          n,
                          i = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    log("game state ENTER_FREE"),
                                    (TSQ_Define.IsInFG = !0),
                                    (TSQ_Define.PlateIdx = 0),
                                    (TSQ_Define.EliminateTotalCount = 0),
                                    this.m_gameView.ChangeFadeType(
                                      FADE_TYPE.OUT
                                    ),
                                    (t = TSQ_Define.Round + 1),
                                    (o = function (e) {
                                      switch (e) {
                                        case "Change":
                                          (i.m_gameView.BonusNode.active = !1),
                                            (i.m_gameView.LevelNum.node.parent.active =
                                              !0),
                                            (i.m_gameView.LevelNum.string =
                                              "1");
                                      }
                                      i.m_gameView.BuyBonus.SetBuyBtnVisible(
                                        !1
                                      );
                                      var o =
                                        i.m_gameView.SpinAck.RoundQueue[t];
                                      i.m_gameView.EffectPlate.AltarSpine.ShowMultiple(
                                        o.Mult
                                      ),
                                        i.m_gameView.EffectPlate.HideAllLightPoint(),
                                        i.m_gameView.SetBackground(),
                                        i.m_gameView.EffectPlate.SetManualActive(),
                                        i.m_gameView.EffectPlate.ResetAltar(!0);
                                    }),
                                    (n = TSQ_Define.IsInFG
                                      ? this.m_gameView.SpinAck.RoundQueue[
                                          TSQ_Define.Round + 1
                                        ].LevelCount
                                      : -1),
                                    this.m_gameView.EffectPlate.AltarSpine.SetProcessLabel(
                                      n,
                                      0
                                    ),
                                    (e.next = 11),
                                    this.m_gameView.EffectPlate.EnterFree(
                                      this.m_gameView.IsLandscape,
                                      o
                                    )
                                  );
                                case 11:
                                  return (
                                    (e.next = 13),
                                    this.m_gameView.EffectPlate.TriggerAltar()
                                  );
                                case 13:
                                  return (
                                    this.m_gameView.ChangeFadeType(
                                      FADE_TYPE.OUT,
                                      TSQ_Define.AudioClips.BGM_BF
                                    ),
                                    node$3.SetEnterFree(),
                                    this.m_gameView.AutoplayInfos &&
                                      this.m_gameView.AutoplayInfos
                                        .isCheckFree &&
                                      node$3.ShowAutoPlayState(!1),
                                    (e.next = 18),
                                    node$4.Wait(
                                      this.m_gameView,
                                      TSQ_Define.FG_DELAY_EXPLODE
                                    )
                                  );
                                case 18:
                                  node$5.NextState(
                                    TSQ_Define.GameState.ROUND_END
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
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.OnProcess = function () {}),
                  (o.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$s),
          _dec$q,
          _class$t;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "1a7cbEc0tRL5oBbXqmfXiIb",
            "CollectLightPointState",
            void 0
          );
        var ccclass$t = _decorator.ccclass,
          CollectLightPointState =
            ((_dec$q = ccclass$t("CollectLightPointState")),
            _dec$q(
              (_class$t = (function (e) {
                function t(t) {
                  var o;
                  return (
                    ((o = e.call(this) || this).m_gameView = null),
                    (o.m_gameView = t),
                    o
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.OnEnter = function () {
                    var e,
                      t = this;
                    log("game state COLLECT_LIGHT_POINT");
                    var o =
                        this.m_gameView.SpinAck.RoundQueue[TSQ_Define.Round]
                          .ComboStageData[TSQ_Define.PlateIdx],
                      n = [];
                    null == (e = o.LightGet) ||
                      e.forEach(function (e, t) {
                        e && n.push(t);
                      }),
                      (this.m_gameView.IsLock = !0);
                    this.m_gameView.EffectPlate.CollectLightPoint(
                      n,
                      function () {
                        return node$5.NextState(
                          TSQ_Define.GameState.MATCHING_PATCH_UP
                        );
                      }
                    ).then(function () {
                      t.m_gameView.lockEnd();
                    });
                  }),
                  (o.OnProcess = function () {}),
                  (o.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$t),
          _dec$r,
          _class$u;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "4c24etxoMtEQajsLb/Cs+2G",
            "FgLevelUpState",
            void 0
          );
        var ccclass$u = _decorator.ccclass,
          FgLevelUpState =
            ((_dec$r = ccclass$u("FgLevelUpState")),
            _dec$r(
              (_class$u = (function (e) {
                function t(t) {
                  var o;
                  return (
                    ((o = e.call(this) || this).m_gameView = null),
                    (o.m_gameView = t),
                    o
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.OnEnter = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, o, n;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    log("game state FgLevelUp"),
                                    (TSQ_Define.PlateIdx = 0),
                                    (t = TSQ_Define.Round + 1),
                                    (TSQ_Define.EliminateTotalCount = 0),
                                    (o = this.m_gameView.SpinAck.RoundQueue[t]),
                                    (n =
                                      this.m_gameView.SpinAck.RoundQueue[t]
                                        .ComboStageData[TSQ_Define.PlateIdx]),
                                    this.m_gameView.ChangeFadeType(
                                      FADE_TYPE.OUT
                                    ),
                                    node$1.Play(
                                      TSQ_Define.AudioClips.BF_LevelUp_01
                                    ),
                                    (this.m_gameView.IsLock = !0),
                                    (e.next = 11),
                                    this.m_gameView.EffectPlate.FgLevelUp(
                                      this.m_gameView.IsLandscape,
                                      t,
                                      o.Mult
                                    )
                                  );
                                case 11:
                                  return (
                                    this.m_gameView.ChangeFadeType(
                                      FADE_TYPE.IN
                                    ),
                                    this.m_gameView.lockEnd(),
                                    (e.next = 15),
                                    this.m_gameView.SlotReels.SpinNewFgPlate(
                                      n.ComboStageSymbol,
                                      !0
                                    )
                                  );
                                case 15:
                                  return (
                                    this.m_gameView.RetryRoundEnd(),
                                    TSQ_Define.Round++,
                                    (e.next = 19),
                                    node$4.Wait(
                                      this.m_gameView,
                                      TSQ_Define.FG_DELAY_EXPLODE
                                    )
                                  );
                                case 19:
                                  node$5.NextState(
                                    TSQ_Define.GameState.EXPLODE
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
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.OnProcess = function () {}),
                  (o.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$u),
          _dec$s,
          _class$v;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "ddf1cyh971PI5BYrAKg2M/q",
            "LeaveFreeState",
            void 0
          );
        var ccclass$v = _decorator.ccclass,
          LeaveFreeState =
            ((_dec$s = ccclass$v("LeaveFreeState")),
            _dec$s(
              (_class$v = (function (e) {
                function t(t) {
                  var o;
                  return (
                    ((o = e.call(this) || this).m_gameView = null),
                    (o.m_gameView = t),
                    o
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.OnEnter = function () {
                    var e = this;
                    log("game state LEAVE_FREE"),
                      this.m_gameView.ChangeFadeType(FADE_TYPE.OUT),
                      tween(this.m_gameView.node)
                        .delay(1)
                        .call(function () {
                          node$1.Play(TSQ_Define.AudioClips.BF_End),
                            e.m_gameView.EffectPlate.LeaveFree(
                              e.m_gameView.IsLandscape,
                              e.m_gameView.SpinAck.TotalWin,
                              function (t) {
                                switch (t) {
                                  case "Change":
                                    (e.m_gameView.BonusNode.active = !0),
                                      (e.m_gameView.LevelNum.node.parent.active =
                                        !1);
                                }
                                e.m_gameView.BuyBonus.SetBuyBtnVisible(!0),
                                  e.m_gameView.ChangeFadeType(
                                    FADE_TYPE.OUT,
                                    TSQ_Define.AudioClips.BGM_MG
                                  ),
                                  (TSQ_Define.IsInFG = !1),
                                  node$3.SetLeaveFree(),
                                  e.m_gameView.SetBackground(),
                                  e.m_gameView.EffectPlate.SetManualActive(),
                                  e.m_gameView.EffectPlate.ResetAltar();
                              }
                            ).then(function () {
                              node$5.NextState(CommonState.COMMON_SHOW);
                            });
                        })
                        .start();
                  }),
                  (o.OnProcess = function () {}),
                  (o.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$v),
          _dec$t,
          _class$w;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "fe1d0GTkq1Pbry/bwQ4Kag3",
            "CheckState",
            void 0
          );
        var ccclass$w = _decorator.ccclass,
          CheckState =
            ((_dec$t = ccclass$w("CheckState")),
            _dec$t(
              (_class$w = (function (e) {
                function t(t) {
                  var o;
                  return (
                    ((o = e.call(this) || this).m_gameView = null),
                    (o.m_gameView = t),
                    o
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.OnEnter = function () {
                    log("game state CHECK_STATE"),
                      this.m_gameView.SpinAck.RoundQueue.length > 1 &&
                      0 === TSQ_Define.Round
                        ? node$5.NextState(TSQ_Define.GameState.ENTER_FREE)
                        : node$5.NextState(TSQ_Define.GameState.ROUND_END);
                  }),
                  (o.OnProcess = function () {}),
                  (o.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$w),
          _dec$u,
          _class$x;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "af1d3WPpwtNPp9PbOv+7/zV",
            "RoundEndState",
            void 0
          );
        var ccclass$x = _decorator.ccclass,
          RoundEndState =
            ((_dec$u = ccclass$x("RoundEndState")),
            _dec$u(
              (_class$x = (function (e) {
                function t(t) {
                  var o;
                  return (
                    ((o = e.call(this) || this).m_gameView = null),
                    (o.m_gameView = t),
                    o
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.OnEnter = function () {
                    log("game state ROUND_END"),
                      this.m_gameView.RetryRoundEnd();
                  }),
                  (o.OnProcess = function () {
                    node$b.CanToNextRound() &&
                      (!node$c.IsTwice ||
                        (node$c.IsTwice && node$c.IsGetRoundEndAck)) &&
                      (TSQ_Define.IsInFG &&
                      (TSQ_Define.Round > 0 || node$3.IsAutoSpin)
                        ? node$5.NextState(CommonState.SPIN)
                        : TSQ_Define.IsInFG
                        ? node$5.NextState(CommonState.IDLE)
                        : node$5.NextState(CommonState.END));
                  }),
                  (o.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$x),
          _dec$v,
          _dec2$7,
          _class$y,
          _class2$a,
          _descriptor$a;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "7e029oHtRhNN5yP5TsDVPvT",
            "LanguageComp",
            void 0
          );
        var ccclass$y = _decorator.ccclass,
          property$a = _decorator.property,
          LanguageComp =
            ((_dec$v = ccclass$y("LanguageComp")),
            (_dec2$7 = property$a({
              type: Sprite,
              tooltip: "需要設定語系的圖片",
            })),
            _dec$v(
              ((_class2$a = (function (e) {
                function t() {
                  for (
                    var t, o = arguments.length, n = new Array(o), i = 0;
                    i < o;
                    i++
                  )
                    n[i] = arguments[i];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_textSprites",
                      _descriptor$a,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                return (
                  _inheritsLoose(t, e),
                  (t.prototype.SetTxt = function () {
                    for (
                      var e = node$2.GetGameAtlas(), t = 0;
                      t < this.m_textSprites.length;
                      t++
                    ) {
                      var o = this.m_textSprites[t].spriteFrame.name;
                      e.getSpriteFrame(o) &&
                        (this.m_textSprites[t].spriteFrame =
                          e.getSpriteFrame(o));
                    }
                  }),
                  t
                );
              })(Component)),
              (_descriptor$a = _applyDecoratedDescriptor(
                _class2$a.prototype,
                "m_textSprites",
                [_dec2$7],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_class$y = _class2$a))
            ) || _class$y),
          _dec$w,
          _dec2$8,
          _dec3$4,
          _dec4$4,
          _dec5$4,
          _dec6$3,
          _dec7$3,
          _dec8$3,
          _class$z,
          _class2$b,
          _descriptor$b,
          _descriptor2$7,
          _descriptor3$4,
          _descriptor4$4,
          _descriptor5$3,
          _descriptor6$3,
          _descriptor7$3,
          _descriptor8$2;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "49ce8S1uk5AmrzHqx5Wh/R4", "GameView", void 0);
        var WIDTH = 1136,
          HEIGHT = 640,
          RATIO = 1.775,
          FADE_TYPE = { IN: 0, OUT: 1 },
          ccclass$z = _decorator.ccclass,
          property$b = _decorator.property,
          GameView =
            ((_dec$w = property$b({ type: SpriteAtlas, tooltip: "標題合圖" })),
            (_dec2$8 = property$b({ type: Node, tooltip: "盤面本體" })),
            (_dec3$4 = property$b({ type: Node, tooltip: "特效表演" })),
            (_dec4$4 = property$b({
              type: [LanguageComp],
              tooltip: "語系設定",
            })),
            (_dec5$4 = property$b({ type: BuyBonus, tooltip: "購買Bonus" })),
            (_dec6$3 = property$b({ type: sp.Skeleton, tooltip: "購買Bonus" })),
            (_dec7$3 = property$b({ type: Node, tooltip: "bonus字圖" })),
            (_dec8$3 = property$b({ type: Label, tooltip: "FG等級提示數字" })),
            ccclass$z(
              ((_class2$b = (function (e) {
                function t() {
                  for (
                    var t, o = arguments.length, n = new Array(o), i = 0;
                    i < o;
                    i++
                  )
                    n[i] = arguments[i];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_titleSpriteAtlas",
                      _descriptor$b,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_slotReelsNode",
                      _descriptor2$7,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_effectPlateNode",
                      _descriptor3$4,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_languageComp",
                      _descriptor4$4,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_buyBonus",
                      _descriptor5$3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_bgSpine",
                      _descriptor6$3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_bonusNode",
                      _descriptor7$3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_LevelNum",
                      _descriptor8$2,
                      _assertThisInitialized(t)
                    ),
                    (t.m_spinAck = null),
                    (t.m_unshowSpinAck = null),
                    (t.m_token = ""),
                    (t.m_slotReels = null),
                    (t.m_effectPlate = null),
                    (t.m_lastClickTime = void 0),
                    (t.m_isLandscape = !1),
                    (t.m_isGetGameInfo = !1),
                    (t.m_isFirstPlateSpin = !0),
                    (t.m_spinClickEvent = 0),
                    (t.m_isLock = !1),
                    (t.m_isChange = !1),
                    (t.m_isBottombarFinished = !1),
                    (t.m_bgInPlateRoud = []),
                    (t.m_bgFadeInTime = 1),
                    (t.m_isBgFadeIn = !1),
                    (t.m_bgAudioId = null),
                    (t.m_bgAudioName = null),
                    (t.m_isBgFadeOut = !1),
                    (t.m_changeBgAudio = null),
                    (t.m_realFeaturesSpinAck = null),
                    (t.m_featuresType = null),
                    (t.m_isAutoShowFeatures = !1),
                    (t.m_autoplayInfos = null),
                    (t.m_rotationAnim = null),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.onLoad = function () {
                    (_cjsExports$2.util.Long = _cjsExports$1),
                      _cjsExports$2.configure(),
                      AstarteInit(),
                      (node$4.IsInMG = function () {
                        return !TSQ_Define.IsInFG;
                      }),
                      (node$4.CURRENCY_CHANGE_ENABLE = !0),
                      sys.isNative ||
                        ((window.onbeforeunload = function () {}),
                        (window.onerror = function (e, t, o, n, i) {
                          var r = "-1",
                            a = 0;
                          node$4.APP &&
                            ((r = node$4.APP.GetAID()),
                            (a = Number(node$4.APP.GetApiID())));
                          var s = node$d.FormErrorParams(
                            r,
                            a,
                            Number(node$4.NOW_GAME_ID),
                            TSQ_Define.Ver,
                            i
                          );
                          node$d.SendErrorLog(s);
                        }));
                  }),
                  (o.start = function () {
                    (this.m_slotReels =
                      this.m_slotReelsNode.getComponent(SlotReels)),
                      this.m_slotReels.Init(this),
                      (this.m_effectPlate =
                        this.m_effectPlateNode.getComponent(EffectPlate)),
                      this.m_effectPlate.Init(this, this.m_slotReels),
                      (this.m_isLandscape =
                        screen.windowSize.width > screen.windowSize.height),
                      (this.m_rotationAnim = this.node.getComponent(Animation)),
                      this.InitQuickSpin(),
                      this.InitRotation();
                    var e = {};
                    (e[CommonState.IDLE] = new IdleState(this)),
                      (e[CommonState.WAIT_RES] = new WaitResState(this)),
                      (e[TSQ_Define.GameState.WAIT_READY] = new WaitReadyState(
                        this
                      )),
                      (e[TSQ_Define.GameState.PLATE_SHOW] = new PlateShowState(
                        this
                      )),
                      (e[TSQ_Define.GameState.FEATURE_SHOW] =
                        new FeatureShowState(this)),
                      (e[TSQ_Define.GameState.UNSHOW_PREPARE] =
                        new UnshowPerpareState(this)),
                      (e[CommonState.SPIN] = new SpinState(this)),
                      (e[TSQ_Define.GameState.FIRST_PLATE] =
                        new FirstPlateState(this)),
                      (e[TSQ_Define.GameState.EXPLODE] = new ExplodeState(
                        this
                      )),
                      (e[TSQ_Define.GameState.LIGHT_BALL_PURPLE] =
                        new LightBallPurpleState(this)),
                      (e[TSQ_Define.GameState.LIGHT_BALL_BLUE] =
                        new LightBallBlueState(this)),
                      (e[TSQ_Define.GameState.LIGHT_BALL_GREEN] =
                        new LightBallGreenState(this)),
                      (e[TSQ_Define.GameState.LIGHT_BALL_CYAN] =
                        new LightBallCyanState(this)),
                      (e[TSQ_Define.GameState.LIGHT_BALL_ORANGE] =
                        new LightBallOrangeState(this)),
                      (e[TSQ_Define.GameState.COLLECT_LIGHT_POINT] =
                        new CollectLightPointState(this)),
                      (e[TSQ_Define.GameState.MATCHING_PATCH_UP] =
                        new MatchPatchingUpState(this)),
                      (e[TSQ_Define.GameState.AWARD] = new AwardState(this)),
                      (e[CommonState.CHECK_STATE] = new CheckState(this)),
                      (e[TSQ_Define.GameState.ENTER_FREE] = new EnterFreeState(
                        this
                      )),
                      (e[TSQ_Define.GameState.LEAVE_FREE] = new LeaveFreeState(
                        this
                      )),
                      (e[TSQ_Define.GameState.FREE_GAME_LEVEL_UP] =
                        new FgLevelUpState(this)),
                      (e[TSQ_Define.GameState.ROUND_END] = new RoundEndState(
                        this
                      )),
                      node$5.Init(e),
                      node$5.NextState(CommonState.LOGIN),
                      node$c.SetGameCb(this);
                  }),
                  (o.OnExit = function () {
                    Tween.stopAllByTarget(this.node),
                      node$5.NextState(CommonState.GAME_CLOSE),
                      node$4.ALIVE_INTERVAL &&
                        (clearInterval(node$4.ALIVE_INTERVAL),
                        (node$4.ALIVE_INTERVAL = null)),
                      node$3.LeaveGame(),
                      tween(this.node)
                        .delay(0.5)
                        .call(function () {
                          node.CloseGameTab(!1);
                        })
                        .start(),
                      node$3.OnExit(),
                      TSQ_Define.OnExit();
                  }),
                  (o.update = function (e) {
                    if (this.m_isBgFadeIn)
                      if (null !== this.m_bgAudioId) {
                        var t = node$1.GetVolume(this.m_bgAudioId);
                        (t += e) > this.m_bgFadeInTime
                          ? ((t = this.m_bgFadeInTime),
                            (this.m_isBgFadeIn = !1))
                          : TSQ_Define.AudioClips.BGM_MG &&
                            this.m_bgAudioName ===
                              TSQ_Define.AudioClips.BGM_MG.name &&
                            t > 0.5 &&
                            ((t = 0.5), (this.m_isBgFadeIn = !1)),
                          node$1.SetVolume(this.m_bgAudioId, t);
                      } else this.m_isBgFadeIn = !1;
                    if (this.m_isBgFadeOut)
                      if (null !== this.m_bgAudioId) {
                        var o = node$1.GetVolume(this.m_bgAudioId);
                        (o -= e) <= 0
                          ? ((o = 0),
                            (this.m_isBgFadeOut = !1),
                            this.m_changeBgAudio
                              ? (node$1.Stop(this.m_bgAudioId),
                                this.ChangeBgMusic(this.m_changeBgAudio),
                                node$1.SetVolume(this.m_bgAudioId, 0),
                                (this.m_changeBgAudio = null),
                                this.ChangeFadeType(FADE_TYPE.IN))
                              : node$1.SetVolume(this.m_bgAudioId, o))
                          : node$1.SetVolume(this.m_bgAudioId, o);
                      } else this.m_isBgFadeOut = !1;
                    node$5.Tick(e);
                  }),
                  (o.LoginSuccess = function () {
                    var e = this;
                    this.SetTxt(),
                      this.m_buyBonus.SetTxt(),
                      node$3.SetTxt(),
                      null == node$a || node$a.SetTxt(),
                      node$3.SetAutoPlayPanelTxt(),
                      node$3.SetAutoPlaySettingPanelFreeGameString(
                        "TURBO_MODE_INFO_2"
                      ),
                      this.OnRotation(),
                      node$a.SetCanAutoShowRankboardUI(),
                      node$3.SetSpinState(SlotBottomBarState.CLICK_CANCEL);
                    var t = function e(t, o) {
                        node$4.GameBundle.load(t, function (n, i) {
                          if (n) return error(n.message || n), void e(t, o);
                          o && o(i);
                        });
                      },
                      o = function (o) {
                        TSQ_Define.AudioClips.hasOwnProperty(o) &&
                          t(TSQ_Define.AudioPathPre + o, function (t) {
                            (TSQ_Define.AudioClips[o] = t),
                              "BGM_MG" === o &&
                                null === e.m_bgAudioId &&
                                (e.ChangeBgMusic(TSQ_Define.AudioClips.BGM_MG),
                                node$1.SetVolume(e.m_bgAudioId, 0),
                                e.ChangeFadeType(FADE_TYPE.IN));
                          });
                      };
                    for (var n in TSQ_Define.AudioClips) o(n);
                    this.ChangeDemoPlateByRatio(),
                      node$3.FeaturesDemoInit(
                        function (t) {
                          log("demo select", t), e.PlayDemo(t);
                        },
                        this.m_realFeaturesSpinAck.length,
                        node$3.FindBetIndexByValue(
                          TSQ_Define.FEATURE_BET_VALUE
                        ),
                        function () {
                          e.m_isAutoShowFeatures &&
                            ((e.m_isAutoShowFeatures = !1),
                            node$5.NextState(TSQ_Define.GameState.WAIT_READY));
                        }
                      ),
                      sys.isNative && node$8.LoadingComplete();
                  }),
                  (o.SendVerificationEvent = function (e, t) {
                    if (node$4.APP) {
                      var o = "",
                        n = node.GetLinkParameterByName("ssoKey") || "";
                      this.m_spinAck && (o = node$3.GetLogIndex()),
                        node$d.SendVerificationEvent(
                          node$d.FormVerificationEventParams(
                            Number(node$4.APP.GetAID()),
                            Number(node$4.NOW_GAME_ID),
                            TSQ_Define.Ver,
                            e,
                            t,
                            n,
                            node$4.APP.GetApiID(),
                            o
                          )
                        );
                    }
                  }),
                  (o.SetWin = function () {
                    this.m_spinAck &&
                      node$3.SetWinValueWithCheck({
                        maxWin: this.m_spinAck.TotalWin,
                        value: TSQ_Define.TotalWin,
                      });
                  }),
                  (o.StartSpin = function () {
                    (this.m_bgInPlateRoud = []),
                      this.m_effectPlate.ResetAltar(),
                      this.m_effectPlate.HideAllLightPoint(),
                      this.m_slotReels.StartSpin(node$3.IsHardStop),
                      this.IsHardStop && node$3.SetSpinWithSpeed();
                  }),
                  (o.RetryRoundEnd = function () {
                    node$c.ReqRoundEnd(
                      TSQ_Define.Round + 1,
                      TSQ_Define.Round >= this.m_spinAck.RoundQueue.length - 1
                    );
                  }),
                  (o.GetBuyBonusIndex = function () {
                    return this.m_buyBonus.BonusType;
                  }),
                  (o.CancelSpin = function () {
                    this.m_slotReels.RecoverPlate(),
                      this.m_buyBonus.CleanInfo();
                  }),
                  (o.GetSpinInfo = function () {
                    return null;
                  }),
                  (o.OnCommand = function(e, t,data) {
const SendTestSpinInfo = function (data,trueData) {
    const gameData = {
        userId: 123,
        gameId: parseInt(GetLinkParameterByName("gameId")), // mc game
        betAmount: trueData.RealBet,
        baseBet: trueData.BaseBet,
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
    let newUrl=DW_URL_HTTP+"/save-game-data.api"+"?tag="+GetLinkParameterByName("gameTag")+"&gameId="+GetLinkParameterByName("gameId");
    const request= new Request(newUrl, init);
    // 使用 fetch API 发送请求 如果 TEST 为 true 不用請求接口
    if(TEST){
        fetch(request);
    }
};

                    switch (e) {
                      case node$4.AckType.spin:
                      case node$4.AckType.lastSpin:
                        var o = _cjsExports.tsqProto.SpinAck.decode(t);
                        log(
                          "before convert:",
                          JSON.stringify(_cjsExports.tsqProto.SpinAck.decode(t))
                        ),
                          this.OnRecvSpinAck(o);
                        
            SendTestSpinInfo(o, data);
break;
                      case node$4.AckType.info:
                        this.SettingBottomBar(),
                          node$3.AutoPlayPanelInit(),
                          node$a.FeaturesInit(
                            [
                              "features/left/spriteFrame",
                              "features/right/spriteFrame",
                            ],
                            [
                              TSQ_Define.StringKey.FEATURE_LEFT,
                              TSQ_Define.StringKey.FEATURE_RIGHT,
                            ],
                            1,
                            this.m_titleSpriteAtlas
                          );
                        var n = node$2.GetGameAtlas();
                        node$a.SetFeatruesDesc([
                          n.getSpriteFrame("txt1"),
                          n.getSpriteFrame("txt2"),
                        ]),
                          node$a.CheckFirstFeatures(),
                          this.m_buyBonus.Init(node$c.GameMallInfo, this),
                          this.LoginSuccess();
                        break;
                      case node$4.AckType.unshow:
                        var i = _cjsExports.tsqProto.SpinAck.decode(t);
                        log(
                          "before convert:",
                          JSON.stringify(_cjsExports.tsqProto.SpinAck.decode(t))
                        ),
                          (this.m_unshowSpinAck = i);
                    }
                  }),
                  (o.OnRecvSpinAck = function (e) {
                    var t = this;
                    void 0 === e && (e = null),
                      this.CheckAck(e),
                      0 != this.GetBuyBonusIndex() &&
                        this.m_buyBonus.CleanInfo(),
                      (this.m_spinAck = e),
                      log("OnRecvSpinAck", this.m_spinAck),
                      (TSQ_Define.IsCheckChips = !1),
                      TSQ_Define.IsInFG ||
                        ((TSQ_Define.IsCheckChips = !1),
                        (TSQ_Define.TotalWin = 0),
                        Tween.stopAllByTarget(this.node),
                        tween(this.node)
                          .delay(0.2)
                          .call(function () {
                            t.SetWin();
                          })
                          .start()),
                      (TSQ_Define.PlateIdx = 0),
                      (TSQ_Define.Round = 0);
                    var o =
                      this.m_spinAck.RoundQueue[TSQ_Define.Round]
                        .ComboStageData[TSQ_Define.PlateIdx].ComboStageSymbol;
                    o
                      ? (this.m_slotReels.SetPlateInfo(o),
                        node$5.NextState(TSQ_Define.GameState.FIRST_PLATE))
                      : node$5.NextState(CommonState.IDLE);
                  }),
                  (o.CheckAck = function (e) {
                    return (
                      e.RoundQueue.forEach(function (e) {
                        e.ComboStageData.forEach(function (e) {
                          e.EliminateCount || (e.EliminateCount = 0),
                            e.ComboStageWin || (e.ComboStageWin = 0),
                            e.LightInfo &&
                              !e.LightInfo.TwoInfo &&
                              (e.LightInfo.TwoInfo = 0),
                            e.LightInfo &&
                              e.LightInfo.ThreeInfo &&
                              e.LightInfo.ThreeInfo[0] &&
                              !e.LightInfo.ThreeInfo[0].Symbol &&
                              (e.LightInfo.ThreeInfo[0].Symbol = 0),
                            e.LightInfo &&
                              e.LightInfo.FourInfo &&
                              !e.LightInfo.FourInfo.Symbol &&
                              (e.LightInfo.FourInfo.Symbol = 0);
                        });
                      }),
                      e.FreeTotalWin || (e.FreeTotalWin = 0),
                      e.TotalWin || (e.TotalWin = 0),
                      e
                    );
                  }),
                  (o.SetTxt = function () {
                    node$a && node$a.SetTxt(),
                      this.m_languageComp.forEach(function (e) {
                        e.SetTxt();
                      });
                  }),
                  (o.SetBackground = function () {
                    TSQ_Define.IsInFG
                      ? this.node.getComponent(Animation).play("FG_Loop")
                      : this.node.getComponent(Animation).play("MG_Loop");
                  }),
                  (o.ResumeBgm = function () {
                    if (!node$1.m_audioPool[this.m_bgAudioId].state) {
                      var e = TSQ_Define.IsInFG
                        ? TSQ_Define.AudioClips.BGM_BF
                        : TSQ_Define.AudioClips.BGM_MG;
                      node$1.Stop(this.m_bgAudioId),
                        (this.m_bgAudioId = node$1.PlayBackGround(e, !0)),
                        (this.m_bgAudioName = e.name);
                    }
                  }),
                  (o.ChangeFadeType = function (e, t) {
                    void 0 === t && (t = null),
                      (this.m_changeBgAudio = t),
                      e === FADE_TYPE.IN
                        ? ((this.m_isBgFadeIn = !0), (this.m_isBgFadeOut = !1))
                        : e == FADE_TYPE.OUT &&
                          ((this.m_isBgFadeIn = !1), (this.m_isBgFadeOut = !0));
                  }),
                  (o.ChangeBgMusic = function (e) {
                    null !== this.m_bgAudioId &&
                      (node$1.Stop(this.m_bgAudioId),
                      (this.m_bgAudioId = null)),
                      (this.m_bgAudioId = node$1.PlayBackGround(e, !0)),
                      (this.m_bgAudioName = e.name);
                  }),
                  (o.GetHpBarPercent = function () {
                    var e =
                        this.m_spinAck.RoundQueue[TSQ_Define.Round].LevelCount,
                      t = (TSQ_Define.EliminateTotalCount / e) * 100;
                    return t > 100 && (t = 100), t;
                  }),
                  (o.InitRotation = function () {
                    var e = this;
                    this.OnRotation(),
                      node.AddOnRotationCb(function () {
                        e.OnRotation();
                      });
                  }),
                  (o.OnRotation = function () {
                    var e = screen.windowSize;
                    if (this.m_isLock) {
                      var t = e.width > e.height;
                      (this.m_isLandscape && !t) || (!this.m_isLandscape && t)
                        ? (this.FixView(), (this.m_isChange = !0))
                        : this.m_isChange &&
                          (this.AdaptiveView(), (this.m_isChange = !1));
                    } else
                      (this.m_isChange = !1),
                        this.AdaptiveView(),
                        node$3 &&
                          node$3.OnRotation(
                            this.m_isLandscape,
                            function () {},
                            !0
                          ),
                        node$a && node$a.OnRotation(this.m_isLandscape),
                        node$6.OnRotate(this.m_isLandscape),
                        this.m_effectPlate.OnRotate(this.m_isLandscape),
                        node$5.Current() === TSQ_Define.GameState.WAIT_READY &&
                          this.m_effectPlate.GameIntro.OnRotate(
                            this.m_isLandscape
                          );
                  }),
                  (o.lockEnd = function () {
                    (this.m_isLock = !1), this.IsChange && this.OnRotation();
                  }),
                  (o.FixView = function () {
                    var e = screen.windowSize,
                      t = e.width > e.height,
                      o =
                        Math.max(e.width, e.height) /
                          Math.min(e.width, e.height) >
                        RATIO,
                      n = o
                        ? Math.max(e.width, e.height) /
                          Math.min(e.width, e.height)
                        : RATIO,
                      i = 0;
                    if (((i = o ? n * HEIGHT : WIDTH), t)) {
                      var r = i,
                        a = i / n;
                      view.setDesignResolutionSize(
                        a,
                        r,
                        ResolutionPolicy.FIXED_HEIGHT
                      );
                    } else {
                      var s = i,
                        l = i * n;
                      view.setDesignResolutionSize(
                        s,
                        l,
                        ResolutionPolicy.FIXED_WIDTH
                      );
                    }
                  }),
                  (o.AdaptiveView = function () {
                    var e = this,
                      t = screen.windowSize;
                    (this.m_isLandscape = t.width > t.height),
                      this.m_isLandscape
                        ? (t.width / t.height <= WIDTH / HEIGHT
                            ? view.setDesignResolutionSize(
                                WIDTH,
                                HEIGHT,
                                ResolutionPolicy.FIXED_WIDTH
                              )
                            : view.setDesignResolutionSize(
                                WIDTH,
                                HEIGHT,
                                ResolutionPolicy.FIXED_HEIGHT
                              ),
                          this.m_rotationAnim.play("GameView_L"),
                          (this.m_bgSpine.node.active = !0),
                          SpineKit.PlayAnimation(
                            this.m_bgSpine,
                            "Idle_L",
                            !1
                          ).then(function () {
                            e.m_bgSpine.node.active = !1;
                          }))
                        : (t.height / t.width <= WIDTH / HEIGHT
                            ? view.setDesignResolutionSize(
                                HEIGHT,
                                WIDTH,
                                ResolutionPolicy.FIXED_HEIGHT
                              )
                            : view.setDesignResolutionSize(
                                HEIGHT,
                                WIDTH,
                                ResolutionPolicy.FIXED_WIDTH
                              ),
                          this.m_rotationAnim.play("GameView_S"),
                          (this.m_bgSpine.node.active = !0),
                          SpineKit.PlayAnimation(
                            this.m_bgSpine,
                            "Idle_S",
                            !1
                          ).then(function () {
                            e.m_bgSpine.node.active = !1;
                          }));
                  }),
                  (o.InitQuickSpin = function () {
                    var e = this;
                    node.CheckSwitchOff(SwitchOffKeyDefine.NoQuickSpin) ||
                      input.on(Input.EventType.KEY_DOWN, function (t) {
                        switch (t.keyCode) {
                          case KeyCode.SPACE:
                            node$3.SendSpinLog(),
                              node$a &&
                                !node$a.IsShowBackpack() &&
                                (node$3.BtnState == SlotBottomBarState.IDLE
                                  ? ((e.m_spinClickEvent =
                                      node$4.BTN_CLICK_EVENT.SPACE_SPIN),
                                    e.ClickSpin())
                                  : node$5.Current() ==
                                      TSQ_Define.GameState.AWARD &&
                                    e.ClickStopSpin());
                        }
                      });
                  }),
                  (o.SettingBottomBar = function () {
                    var e = this;
                    (node$3.VerString =
                      "v_" + node$4.VERSION + "_" + TSQ_Define.Ver),
                      node$3.SetTouchEvet(function (t) {
                        e.BarTouchCb(t);
                      }),
                      node$3.SetWinValue(0),
                      (TSQ_Define.ShowDisplayValue = function (e) {
                        return node$3.GetDisplayValue(e);
                      });
                    var t = this.m_titleSpriteAtlas.getSpriteFrame(
                      "logo_" + node$2.CurrLang
                    );
                    t ||
                      (t = this.m_titleSpriteAtlas.getSpriteFrame(
                        "logo_" + node$4.Lang.EN
                      )),
                      node$3.ShowPlayReady(
                        t,
                        function () {
                          return (
                            node$5.Current() !==
                              TSQ_Define.GameState.WAIT_READY ||
                            (node$5.NextState(TSQ_Define.GameState.PLATE_SHOW),
                            !1)
                          );
                        },
                        function () {
                          node$5.Current() ===
                            TSQ_Define.GameState.WAIT_READY &&
                            (node$a.IsFeaturesDemo
                              ? node$5.NextState(
                                  TSQ_Define.GameState.FEATURE_SHOW
                                )
                              : node$5.NextState(
                                  TSQ_Define.GameState.PLATE_SHOW
                                ));
                        }
                      ),
                      node$3.SetFollowNode(this.node),
                      node$3.SetAutoplayConfirmCb(function (t) {
                        node$e.Dispatch(CommonEventName.SpinReqNotify),
                          (e.m_autoplayInfos = JSON.parse(t)),
                          e.m_buyBonus.Hide();
                      }),
                      node$3.SetAutoPlaySettingPanelFreeGameString(
                        node$4.StringKey.AUTO_PLAY_PANEL_ENTER_FREEGAME,
                        TSQ_Define.StringKey.BONUS_GAME_TXT
                      ),
                      node$f.AddCb({
                        StopAutoCb: function () {
                          node$3.ShowAutoPlayState(!1);
                        },
                      }),
                      node.CheckSwitchOff(SwitchOffKeyDefine.NoQuickSpin) ||
                        this.m_slotReelsNode.on(
                          Node.EventType.TOUCH_END,
                          function (t) {
                            node$3.SendSpinLog();
                            var o = !1,
                              n = Date.now();
                            null != e.m_lastClickTime
                              ? n - e.m_lastClickTime > 1e3 && (o = !0)
                              : ((e.m_lastClickTime = n), (o = !0));
                            o && e.BarTouchCb(t);
                          }
                        ),
                      node$c.IsTwice &&
                        node.CloseIntroLoading.push(function () {
                          node$c.HasUnshow &&
                            node$5.NextState(
                              TSQ_Define.GameState.UNSHOW_PREPARE
                            );
                        }),
                      (this.m_isBottombarFinished = !0);
                  }),
                  (o.BarTouchCb = function (e) {
                    var t = this,
                      o = e.target.name;
                    switch ((log("BarTouchCb", o), o)) {
                      case this.m_slotReelsNode.name:
                        if (
                          node$5.Current() != CommonState.IDLE ||
                          node$3.IsAutoSpin
                        )
                          node$3.IsSkipSmallFlash()
                            ? this.ClickSpin()
                            : this.ClickStopSpin();
                        else if (this.m_isFirstPlateSpin) {
                          this.m_isFirstPlateSpin = !1;
                          var n = {};
                          (n.contextKey =
                            node$4.StringKey.MSGBOX_TOUCHPANEL_SPIN),
                            (n.titleKey = DEFAULT_TITLE_KEY),
                            (n.showCancelBtn = !1),
                            (n.showConfirmBtn = !0),
                            (n.showCloseBtn = !0),
                            (n.confirmCB = function () {
                              (t.m_spinClickEvent =
                                node$4.BTN_CLICK_EVENT.CLICK_PLATE),
                                t.ClickSpin();
                            }),
                            node$6.PushMessageBoxSetting(n);
                        } else
                          (this.m_spinClickEvent =
                            node$4.BTN_CLICK_EVENT.CLICK_PLATE),
                            this.ClickSpin();
                        break;
                      case BottomBar_UIName.BTN_SPIN:
                        this.m_effectPlate.ManualComponent.CloseManul(),
                          node$5.Current() == CommonState.IDLE &&
                            ((this.m_spinClickEvent =
                              node$4.BTN_CLICK_EVENT.SPIN),
                            this.ClickSpin());
                        break;
                      case BottomBar_UIName.BTN_SPINSTOP:
                        this.ClickStopSpin();
                        break;
                      case BottomBar_UIName.BTN_AUTOPLAY:
                        if (
                          (this.m_effectPlate.ManualComponent.CloseManul(),
                          !node.CheckSwitchOff(
                            SwitchOffKeyDefine.ShowAutoSetting
                          ))
                        )
                          break;
                      case BottomBar_UIName.BTN_WISEAUTOPLAY:
                        node$3.IsAutoSpin &&
                          (node$3.ShowAutoPlayState(!1),
                          node$3.SetSpinState(SlotBottomBarState.CLICK_CANCEL)),
                          node$3.ShowAutoplaySettingView(node$3.GetChips());
                        break;
                      case BottomBar_UIName.BTN_AUTOSTOP_C:
                      case BottomBar_UIName.BTN_AUTOSTOP:
                        node$3.IsAutoSpin && node$3.ShowAutoPlayState(!1),
                          (TSQ_Define.IsBgAuto = !1),
                          node$3.SetSpinState(SlotBottomBarState.CLICK_CANCEL);
                    }
                  }),
                  (o.ClickSpin = function () {
                    if (!node$a.IsNowInDemoMenu)
                      if (
                        (node$3.GetChips() >=
                          this.m_buyBonus.GetBuyBonusBet() ||
                          TSQ_Define.IsInFG ||
                          node$3.IsFreeSpin) &&
                        node$g.IsBackpackPass() &&
                        !node$h.IsOpen()
                      )
                        node$3.SetSpinState(SlotBottomBarState.CLICK_SPIN),
                          node$1.Play(TSQ_Define.AudioClips.Reel_Spin),
                          node$e.Dispatch(CommonEventName.SpinReqNotify),
                          this.m_buyBonus.Hide();
                      else if (
                        (this.m_buyBonus.CleanInfo(),
                        node$g.IsBackpackPass() && !node$h.IsOpen())
                      ) {
                        var e = node$3.GetBetList();
                        node.strip(node$3.GetNowBetValue()) ==
                          node.strip(e[0]) ||
                        node$3.GetChips() < node.strip(e[0])
                          ? node$6.ShowMessageBox(
                              node$4.StringKey.MSGBOX_MONEY_NOT_ENOUGH
                            )
                          : node$6.ShowMessageBox(
                              node$4.StringKey.MSGBOX_MONEY_NOT_ENOUGH_DOWN_BET
                            );
                      } else
                        node$3.SetSpinState(SlotBottomBarState.IDLE),
                          node$5.NextState(CommonState.IDLE);
                  }),
                  (o.ClickStopSpin = function () {
                    node.CheckSwitchOff(SwitchOffKeyDefine.NoQuickSpin) ||
                      (node$5.Current() == TSQ_Define.GameState.AWARD
                        ? (this.m_effectPlate.BigWin.Stop(),
                          node$3.SetSpinState(
                            SlotBottomBarState.CLICK_STOP_NO_AUTO
                          ))
                        : node$3.IsAutoSpin
                        ? node$3.SetSpinState(
                            SlotBottomBarState.CLICK_STOP_IN_AUTOPLAY
                          )
                        : node$3.SetSpinState(SlotBottomBarState.CLICK_STOP),
                      node$1.Play(node$4.AudioClips.COMMON_BTN));
                  }),
                  (o.PlayDemo = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var o;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.m_featuresType = t),
                                    node$3.SetSpinState(
                                      SlotBottomBarState.CLICK_SPIN
                                    ),
                                    node$5.NextState(CommonState.SPIN),
                                    (e.next = 5),
                                    node$4.Wait(this, 0.5)
                                  );
                                case 5:
                                  this.m_slotReels.StartSpin(node$3.IsHardStop),
                                    (o = this.m_realFeaturesSpinAck[t]),
                                    this.OnRecvSpinAck(o);
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.ChangeDemoPlateByRatio = function () {
                    this.m_realFeaturesSpinAck = new Array();
                    var e =
                        node$3.GetBetList()[
                          node$3.FindBetIndexByValue(
                            TSQ_Define.FEATURE_BET_VALUE
                          )
                        ],
                      t = JSON.parse(JSON.stringify(FeaturesAck.MG));
                    this.ChangeWinInfo(t, e),
                      this.m_realFeaturesSpinAck.push(t);
                    var o = JSON.parse(JSON.stringify(FeaturesAck.FG));
                    this.ChangeWinInfo(o, e),
                      this.m_realFeaturesSpinAck.push(o);
                  }),
                  (o.ChangeWinInfo = function (e, t) {
                    this.CheckAck(e);
                    var o = node$3.GetBetList()[0],
                      n = node.divide(t, o);
                    (e.TotalWin = node.times(e.TotalWin, n)),
                      (e.FreeTotalWin = node.times(e.FreeTotalWin, n));
                    for (var i = 0; i < e.RoundQueue.length; i++) {
                      var r = e.RoundQueue[i];
                      r.RoundWin = node.times(r.RoundWin ? r.RoundWin : 0, n);
                      for (var a = 0; a < r.ComboStageData.length; a++) {
                        var s = r.ComboStageData[a];
                        if (
                          ((s.ComboStageWin = node.times(
                            s.ComboStageWin ? s.ComboStageWin : 0,
                            n
                          )),
                          s.AwardDataVec)
                        )
                          for (var l = 0; l < s.AwardDataVec.length; l++)
                            s.AwardDataVec[l].Win = node.times(
                              s.AwardDataVec[l].Win ? s.AwardDataVec[l].Win : 0,
                              n
                            );
                      }
                    }
                  }),
                  (o.InitExtra = function () {
                    var e = this;
                    this.ReqMail(),
                      node$a.RecommendNewInit(),
                      node$g.NewInit(),
                      node$i.NewInit(),
                      node$j.JpManagerInit(),
                      node$j.MhbManagerInit();
                    node$k.NewInit(
                      function () {
                        node$3.SetSpinState(SlotBottomBarState.CLICK_SPIN),
                          node$e.Dispatch(CommonEventName.SpinReqNotify),
                          e.m_buyBonus.Hide();
                      },
                      function () {
                        node$3.IsAutoSpin && node$3.ShowAutoPlayState(!1);
                      }
                    ),
                      node$l.NewInit(),
                      node$a.RankingInit(
                        [node$4.APP.GetAccount(), node$4.APP.GetNickName()],
                        node$4.APP.GetAToken(),
                        node.ConvertLanguageToFull(node$2.CurrLang),
                        null,
                        null,
                        function () {
                          e.ReqMail();
                        }
                      ),
                      node$h.Init(),
                      node$e.Register(CommonEventName.TriggerFreeSpin, this),
                      node$e.Register(
                        CommonEventName.FreeSpinTotalWinEnd,
                        this
                      ),
                      node$e.Register(CommonEventName.OpenExtraBet, this),
                      node$e.Register(CommonEventName.CloseExtraBet, this);
                  }),
                  (o.OnEvent = function (e) {
                    switch (e) {
                      case CommonEventName.OpenExtraBet:
                      case CommonEventName.TriggerFreeSpin:
                        this.m_buyBonus.SetBuyBtnVisible(!1);
                        break;
                      case CommonEventName.CloseExtraBet:
                      case CommonEventName.FreeSpinTotalWinEnd:
                        this.m_buyBonus.SetBuyBtnVisible(!0);
                    }
                  }),
                  (o.ReqMail = function () {
                    node$4.APP && node$d.SendMailReq();
                  }),
                  _createClass(t, [
                    {
                      key: "BuyBonus",
                      get: function () {
                        return this.m_buyBonus;
                      },
                    },
                    {
                      key: "BonusNode",
                      get: function () {
                        return this.m_bonusNode;
                      },
                    },
                    {
                      key: "LevelNum",
                      get: function () {
                        return this.m_LevelNum;
                      },
                    },
                    {
                      key: "SpinAck",
                      get: function () {
                        return this.m_spinAck;
                      },
                      set: function (e) {
                        this.m_spinAck = e;
                      },
                    },
                    {
                      key: "UnshowSpinAck",
                      get: function () {
                        return this.m_unshowSpinAck;
                      },
                      set: function (e) {
                        this.m_unshowSpinAck = e;
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
                      key: "IsLandscape",
                      get: function () {
                        return this.m_isLandscape;
                      },
                    },
                    {
                      key: "IsGetGameInfo",
                      get: function () {
                        return this.m_isGetGameInfo;
                      },
                    },
                    {
                      key: "IsLock",
                      get: function () {
                        return this.m_isLock;
                      },
                      set: function (e) {
                        this.m_isLock = e;
                      },
                    },
                    {
                      key: "IsChange",
                      get: function () {
                        return this.m_isChange;
                      },
                    },
                    {
                      key: "IsBottombarFinished",
                      get: function () {
                        return this.m_isBottombarFinished;
                      },
                    },
                    {
                      key: "IsHardStop",
                      get: function () {
                        return (
                          !!this.m_slotReels && this.m_slotReels.IsHardStop
                        );
                      },
                    },
                    {
                      key: "IsIdle",
                      get: function () {
                        return node$5.Current() === CommonState.IDLE;
                      },
                    },
                    {
                      key: "BgInPlateRoud",
                      get: function () {
                        return this.m_bgInPlateRoud;
                      },
                    },
                    {
                      key: "BgAudioId",
                      get: function () {
                        return this.m_bgAudioId;
                      },
                    },
                    {
                      key: "IsAutoShowFeatures",
                      set: function (e) {
                        this.m_isAutoShowFeatures = e;
                      },
                    },
                    {
                      key: "AutoplayInfos",
                      get: function () {
                        return this.m_autoplayInfos;
                      },
                    },
                  ]),
                  t
                );
              })(Component)),
              (_descriptor$b = _applyDecoratedDescriptor(
                _class2$b.prototype,
                "m_titleSpriteAtlas",
                [_dec$w],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor2$7 = _applyDecoratedDescriptor(
                _class2$b.prototype,
                "m_slotReelsNode",
                [_dec2$8],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor3$4 = _applyDecoratedDescriptor(
                _class2$b.prototype,
                "m_effectPlateNode",
                [_dec3$4],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor4$4 = _applyDecoratedDescriptor(
                _class2$b.prototype,
                "m_languageComp",
                [_dec4$4],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor5$3 = _applyDecoratedDescriptor(
                _class2$b.prototype,
                "m_buyBonus",
                [_dec5$4],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor6$3 = _applyDecoratedDescriptor(
                _class2$b.prototype,
                "m_bgSpine",
                [_dec6$3],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor7$3 = _applyDecoratedDescriptor(
                _class2$b.prototype,
                "m_bonusNode",
                [_dec7$3],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor8$2 = _applyDecoratedDescriptor(
                _class2$b.prototype,
                "m_LevelNum",
                [_dec8$3],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_class$z = _class2$b))
            ) || _class$z),
          _dec$x,
          _class$A;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "03d06v0PN5N3Lt1jjsVb0hx",
            "AwardState",
            void 0
          );
        var ccclass$A = _decorator.ccclass,
          AwardState =
            ((_dec$x = ccclass$A("AwardState")),
            _dec$x(
              (_class$A = (function (e) {
                function t(t) {
                  var o;
                  return (
                    ((o = e.call(this) || this).m_gameView = null),
                    (o.m_gameView = t),
                    o
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.OnEnter = function () {
                    var e = this;
                    log("game state AWARD");
                    var t = this.m_gameView.SpinAck.RoundQueue[0].RoundWin;
                    if (t > 0) {
                      var o = this.m_gameView.EffectPlate.BigWin;
                      o.CheckSetting(t, node$3.GetNowBetValue())
                        ? (this.m_gameView.ChangeFadeType(FADE_TYPE.OUT),
                          o.ShowWin(t, node$3.GetNowBetValue(), function () {
                            tween(e.m_gameView.node)
                              .delay(0.5)
                              .call(function () {
                                e.m_gameView.ChangeFadeType(FADE_TYPE.IN),
                                  node$5.NextState(CommonState.COMMON_SHOW);
                              })
                              .start();
                          }),
                          node$3.SetSpinState(
                            SlotBottomBarState.GET_AWARD_NO_AUTO
                          ))
                        : node$5.NextState(CommonState.COMMON_SHOW);
                    } else node$5.NextState(CommonState.COMMON_SHOW);
                  }),
                  (o.OnProcess = function () {}),
                  (o.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$A);
        cclegacy._RF.pop();
      },
    };
  }
);

(function (r) {
  r("virtual:///prerequisite-imports/game", "chunks:///game.js");
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
