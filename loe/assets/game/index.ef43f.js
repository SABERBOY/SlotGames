System.register(
  "chunks:///game.js",
  ["./index-9babc86a.js", "cc"],
  function (exports, module) {
    "use strict";
    var _inheritsLoose,
      _applyDecoratedDescriptor,
      _initializerDefineProperty,
      _assertThisInitialized,
      node,
      _createClass,
      _asyncToGenerator,
      _regeneratorRuntime,
      node$1,
      node$2,
      node$3,
      node$4,
      node$5,
      BigWinComponent,
      node$6,
      SlotBottomBarState,
      SwitchOffKeyDefine,
      node$7,
      BaseState,
      node$8,
      Common_IdleState,
      CommonState,
      node$9,
      node$a,
      node$b,
      node$c,
      ManualComponent,
      AstarteInit,
      node$d,
      node$e,
      CommonEventName,
      BottomBar_UIName,
      node$f,
      node$g,
      node$h,
      node$i,
      node$j,
      node$k,
      node$l,
      cclegacy,
      _decorator,
      Enum,
      v3,
      Component,
      sp,
      Label,
      SpriteFrame,
      UITransform,
      Size,
      Node,
      Sprite,
      log,
      color,
      Prefab,
      instantiate,
      UIOpacity,
      Animation,
      tween,
      Tween,
      v2,
      Vec3,
      error,
      Button,
      SpriteAtlas,
      sys,
      input,
      Input,
      KeyCode,
      screen,
      view,
      ResolutionPolicy;
    return {
      setters: [
        function (e) {
          (_inheritsLoose = e.a),
            (_applyDecoratedDescriptor = e._),
            (_initializerDefineProperty = e.b),
            (_assertThisInitialized = e.c),
            (node = e.g),
            (_createClass = e.d),
            (_asyncToGenerator = e.o),
            (_regeneratorRuntime = e.p),
            (node$1 = e.l),
            (node$2 = e.w),
            (node$3 = e.e),
            (node$4 = e.h),
            (node$5 = e.n),
            (BigWinComponent = e.B),
            (node$6 = e.r),
            (SlotBottomBarState = e.t),
            (SwitchOffKeyDefine = e.S),
            (node$7 = e.j),
            (BaseState = e.x),
            (node$8 = e.i),
            (Common_IdleState = e.y),
            (CommonState = e.k),
            (node$9 = e.z),
            (node$a = e.A),
            (node$b = e.D),
            (node$c = e.E),
            (ManualComponent = e.M),
            (AstarteInit = e.F),
            (node$d = e.G),
            (node$e = e.f),
            (CommonEventName = e.C),
            (BottomBar_UIName = e.H),
            (node$f = e.I),
            (node$g = e.s),
            (node$h = e.J),
            (node$i = e.K),
            (node$j = e.L),
            (node$k = e.N),
            (node$l = e.O);
        },
        function (e) {
          (cclegacy = e.cclegacy),
            (_decorator = e._decorator),
            (Enum = e.Enum),
            (v3 = e.v3),
            (Component = e.Component),
            (sp = e.sp),
            (Label = e.Label),
            (SpriteFrame = e.SpriteFrame),
            (UITransform = e.UITransform),
            (Size = e.Size),
            (Node = e.Node),
            (Sprite = e.Sprite),
            (log = e.log),
            (color = e.color),
            (Prefab = e.Prefab),
            (instantiate = e.instantiate),
            (UIOpacity = e.UIOpacity),
            (Animation = e.Animation),
            (tween = e.tween),
            (Tween = e.Tween),
            (v2 = e.v2),
            (Vec3 = e.Vec3),
            (error = e.error),
            (Button = e.Button),
            (SpriteAtlas = e.SpriteAtlas),
            (sys = e.sys),
            (input = e.input),
            (Input = e.Input),
            (KeyCode = e.KeyCode),
            (screen = e.screen),
            (view = e.view),
            (ResolutionPolicy = e.ResolutionPolicy);
        },
      ],
      execute: function () {
        var _class, _class2, GameState, Symbol, NudgeSprite, JackPotType;
        cclegacy._RF.push({}, "5d7fdjNbQ5H/pwriMDYd6Pd", "Game_Define", void 0),
          (function (e) {
            (e[(e.WAIT_READY = 0)] = "WAIT_READY"),
              (e[(e.PLATE_SHOW = 1)] = "PLATE_SHOW"),
              (e[(e.FEATURE_SHOW = 2)] = "FEATURE_SHOW"),
              (e[(e.UNSHOW_PREPARE = 3)] = "UNSHOW_PREPARE"),
              (e[(e.CHECK_NUDGE = 4)] = "CHECK_NUDGE"),
              (e[(e.MULTI_SPIN = 5)] = "MULTI_SPIN"),
              (e[(e.NUDGE = 6)] = "NUDGE"),
              (e[(e.NUDGE_AWARD_STATE = 7)] = "NUDGE_AWARD_STATE"),
              (e[(e.AWARD = 8)] = "AWARD"),
              (e[(e.SCATTER = 9)] = "SCATTER"),
              (e[(e.ENTER_FREE = 10)] = "ENTER_FREE"),
              (e[(e.LEAVE_FREE = 11)] = "LEAVE_FREE"),
              (e[(e.ROUND_SHOW_END = 12)] = "ROUND_SHOW_END"),
              (e[(e.ROUND_END = 13)] = "ROUND_END");
          })(GameState || (GameState = {})),
          (function (e) {
            (e[(e.Symbol10 = 0)] = "Symbol10"),
              (e[(e.SymbolJ = 1)] = "SymbolJ"),
              (e[(e.SymbolQ = 2)] = "SymbolQ"),
              (e[(e.SymbolK = 3)] = "SymbolK"),
              (e[(e.SymbolA = 4)] = "SymbolA"),
              (e[(e.SymbolJar = 5)] = "SymbolJar"),
              (e[(e.SymbolEye = 6)] = "SymbolEye"),
              (e[(e.SymbolCross = 7)] = "SymbolCross"),
              (e[(e.SymbolRing = 8)] = "SymbolRing"),
              (e[(e.SymbolChest = 9)] = "SymbolChest"),
              (e[(e.SymbolWild = 10)] = "SymbolWild"),
              (e[(e.SymbolScatter = 11)] = "SymbolScatter"),
              (e[(e.SymbolNudge = 12)] = "SymbolNudge");
          })(Symbol || (Symbol = {})),
          (function (e) {
            (e[(e.Nudge = 12)] = "Nudge"),
              (e[(e.Nudge1 = 13)] = "Nudge1"),
              (e[(e.Nudge2 = 14)] = "Nudge2"),
              (e[(e.Nudge3 = 15)] = "Nudge3"),
              (e[(e.Nudge4 = 16)] = "Nudge4"),
              (e[(e.Nudge5 = 17)] = "Nudge5"),
              (e[(e.Nudge10 = 18)] = "Nudge10"),
              (e[(e.Nudge25 = 19)] = "Nudge25"),
              (e[(e.Nudge50 = 20)] = "Nudge50");
          })(NudgeSprite || (NudgeSprite = {})),
          (function (e) {
            (e[(e.MINI = 0)] = "MINI"),
              (e[(e.MINOR = 1)] = "MINOR"),
              (e[(e.MAJOR = 2)] = "MAJOR"),
              (e[(e.GRAND = 3)] = "GRAND");
          })(JackPotType || (JackPotType = {}));
        var ccclass = _decorator.ccclass,
          Game_Define =
            ccclass(
              ((_class2 = (function (e) {
                function t() {
                  return e.apply(this, arguments) || this;
                }
                return (
                  _inheritsLoose(t, e),
                  (t.OnExit = function () {
                    this.AudioClips = {
                      Debut: null,
                      BGM_MG: null,
                      Reel_Spin: null,
                      Reel_Run: null,
                      Reel_Stop: null,
                      Scatter1: null,
                      Scatter2: null,
                      Scatter3: null,
                      Scatter4: null,
                      Scatter5: null,
                      Nudge_Appear: null,
                      Nudge_Push: null,
                      Nudge_Touch: null,
                      Multiplier_Open: null,
                      Multiplier: null,
                      Near_Win: null,
                      Small_Win1: null,
                      Small_Win2: null,
                      Small_Win3: null,
                      Big_Win: null,
                      Big_Win_Change: null,
                      Big_Win_End: null,
                      Trigger_FG_Bell: null,
                      FG_Cutscene: null,
                      BGM_FG: null,
                      FG_End: null,
                      Free_Spin_Get: null,
                    };
                  }),
                  t
                );
              })(Component)),
              (_class2.MARQUEE_NAMES = [
                "String_01",
                "String_02",
                "String_03",
                "String_04",
              ]),
              (_class2.Ver = "86"),
              (_class2.NORMAL_SYMBOL_NUMBER = 18),
              (_class2.SCATTER_BASE = 3),
              (_class2.SLOT_REEL_MASK_OPACITY = 200),
              (_class2.CHILLI_NUM = 2),
              (_class2.BIG_WIN_BETRATE = [0, 6, 15, 30]),
              (_class2.GAMEVIEW_STATE = Enum(GameState)),
              (_class2.Symbol = Enum(Symbol)),
              (_class2.JackPotType = Enum(JackPotType)),
              (_class2.NudgeSprite = Enum(NudgeSprite)),
              (_class2.JPTopAwardToName = [
                "JP_TopAward_lv4",
                "JP_TopAward_lv3",
                "JP_TopAward_lv2",
                "JP_TopAward_lv1",
              ]),
              (_class2.JPTopAwardBGToName = [
                "JP_TopAward_lv4BGFX",
                "JP_TopAward_lv3BGFX",
              ]),
              (_class2.DELAYTIME = {
                NORMAL_SPIN_ACK: 0.1,
                AWARD_ALL_TO_SINGLE: 2,
                SHOW_SMALL_WIN: 0.25,
                SMALL_WIN_STAY: 1.5,
                NUDGE_SHOW_WIN: 1.7,
                RUN_SMALL_WIN: 0.5,
                NUDGE_FLY_TO_MULTI: 0.7,
                MULTI_FLY_TO_WIN: 0.7,
                FG_WIN_RUNNING_START: 0.417,
                FG_WIN_RUNNING_END: 5.067,
                FG_COMPLIMENT_START: 6.5,
                FG_WIN_STAY: 1,
                NUDGE_PUSH: 0.1,
                NUDGE_COMEBACK: 0.15,
                NUDGE_DELAY: 0.3,
                ACCELERATION: 0.01,
                NUDGE_MIN_DELAY: 0.005,
                MEDIUM_DELAY: 1.5,
                HIGH_DELAY: 1.5,
                NEARWIN: [2, 2, 2, 2, 2],
                READY_TO_FLY: 0.1,
                READY_TO_NUDGE: 0.5,
              }),
              (_class2.SPEED = {
                NUDGE_FLY_TO_MULTI_L: 1e3,
                NUDGE_FLY_TO_MULTI_S: 700,
                MULTI_FLY_TO_WIN: 800,
              }),
              (_class2.EffectNodeZIndex = {
                NORMAL: 0,
                WILD: 50,
                NUDGE: 100,
                SCATTER: 150,
              }),
              (_class2.SymbolZIndex = { SYMBOL: 0, NUDGETIMES: 100 }),
              (_class2.ShakeWorld = { SPEED: 0.06, DELTA: 3, TIMES: 2 }),
              (_class2.MultiReels = { ONE_ROUND_TIME: 0.3, TOTAL_ROUND: 5 }),
              (_class2.MultiLevel = { MEDIUM: 5, HIGH: 10 }),
              (_class2.FeatureBetValue = 10),
              (_class2.NudgeTimesArray = [0, 1, 2, 3, 4, 5, 10, 25, 50]),
              (_class2.NudgeSpriteIndex = [12, 13, 14, 15, 16, 17, 18, 19, 20]),
              (_class2.NudgeSpriteIndexWithWeights = [
                12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13,
                13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14,
                14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17,
                17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19,
                19, 19, 20, 20,
              ]),
              (_class2.AnimalRoarSoundPath = "Sound/Symbol"),
              (_class2.SPIN_ACK_TYPE = {
                AT_SUCCESS: 0,
                AT_MONEY_NOT_ENOUGH: 302,
                AT_MONEY_ABNORMAL: 301,
                TRIAL_END: 8,
                AT_MONEY_NOT_ENOUGH_SINGLE: 305,
                API_BETONCE_FAIL: 2003,
              }),
              (_class2.AWARD_TYPE = {
                AWARD_TYPE_NON: 0,
                AWARD_TYPE_LINE: 1,
                AWARD_TYPE_ALL_PLATE: 2,
                AWARD_TYPE_MAX: 32767,
              }),
              (_class2.AckType = {
                login: 0,
                exchangeChips: 2,
                info: 11,
                spin: 12,
                buyBonus: 36,
                heartBeat: 98,
                serverMsg: 99,
              }),
              (_class2.StringKey = {
                KK_FEATURES_LEFT: "KK_FEATURES_TXT_1",
                KK_FEATURES_RIGHT: "KK_FEATURES_TXT_2",
              }),
              (_class2.SERVER_RET_TYPE = {
                SERVER_SUCCESS: 0,
                SERVER_ERROR_SEATE: 799,
                SERVER_NOUSE: 899,
                SERVER_MAINTAIN: 231,
                SERVER_SHUTDOWN: 232,
                SERVER_NEED_UID: 233,
                SERVER_NEED_LOGIN: 234,
                SERVER_TOKEN_ERROR: 235,
              }),
              (_class2.LOGIN_RESULT_TYPE = {
                LOGIN_SUCCESS: 0,
                LOGIN_FAIL: 241,
                API_VERIFY_FAIL: 211,
                API_LOGIN_REPEAT_FAIL: 2002,
              }),
              (_class2.HEART_BEAT_STATE = {
                NOTIFY: 97,
                MAINTAIN: 98,
                CLOSE: 99,
              }),
              (_class2.SYMBOL_POS = {
                0: v3(0, 0),
                4: v3(1, 0),
                8: v3(2, 0),
                12: v3(3, 0),
                16: v3(4, 0),
                1: v3(0, 1),
                5: v3(1, 1),
                9: v3(2, 1),
                13: v3(3, 1),
                17: v3(4, 1),
                2: v3(0, 2),
                6: v3(1, 2),
                10: v3(2, 2),
                14: v3(3, 2),
                18: v3(4, 2),
                3: v3(0, 3),
                7: v3(1, 3),
                11: v3(2, 3),
                15: v3(3, 3),
                19: v3(4, 3),
              }),
              (_class2.SYMBOL_LINE_VEC = [
                [0, 4, 8, 12, 16],
                [1, 5, 9, 13, 17],
                [2, 6, 10, 14, 18],
                [3, 7, 11, 15, 19],
                [0, 5, 8, 13, 16],
                [1, 4, 9, 12, 17],
                [1, 6, 9, 14, 17],
                [2, 5, 10, 13, 18],
                [2, 7, 10, 15, 18],
                [3, 6, 11, 14, 19],
                [0, 5, 10, 13, 16],
                [1, 6, 11, 14, 17],
                [2, 5, 8, 13, 18],
                [3, 6, 9, 14, 19],
                [0, 4, 9, 12, 16],
                [1, 5, 8, 13, 17],
                [1, 5, 10, 13, 17],
                [2, 6, 9, 14, 18],
                [2, 6, 11, 14, 18],
                [3, 7, 10, 15, 19],
              ]),
              (_class2.DelayType = { Normal: 0, Get: 1, NotGet: 2 }),
              (_class2.TimeoutType = { Ignore: 0, Handle: 1 }),
              (_class2.USE_ITEM_REASON = { NORMAL: 0, USING: 1 }),
              (_class2.ShowDisplayValue = null),
              (_class2.SYMBOL_SCALE_IN_FG = 1),
              (_class2.RAND_LIST_MG = [
                [
                  0, 0, 4, 9, 9, 9, 9, 1, 10, 2, 4, 7, 7, 7, 7, 3, 11, 11, 11,
                  11, 11, 11, 11, 6, 4, 10, 0, 9, 1, 8, 2, 7, 3, 6, 4, 5, 2, 9,
                  0, 0, 0, 0, 8, 7, 2, 2, 2, 2, 7, 10, 4, 4, 4, 4, 6, 9, 1, 1,
                  1, 1, 9, 10, 7, 2, 3, 3, 3, 3, 2, 8, 8, 8, 8, 1, 3, 11, 11,
                  11, 11, 11, 11, 11, 11, 2, 1, 6, 6, 6, 6, 8, 0, 9, 1, 8, 2, 7,
                  3, 6, 4, 5,
                ],
                [
                  1, 4, 2, 8, 8, 8, 8, 2, 10, 1, 0, 9, 9, 9, 9, 1, 11, 11, 11,
                  11, 11, 11, 11, 7, 3, 10, 0, 9, 1, 8, 2, 7, 3, 6, 4, 5, 0, 8,
                  1, 1, 1, 1, 6, 9, 4, 4, 4, 4, 9, 10, 3, 3, 3, 3, 7, 8, 0, 0,
                  0, 0, 8, 10, 9, 3, 2, 2, 2, 2, 1, 6, 6, 6, 6, 3, 0, 11, 11,
                  11, 11, 11, 11, 11, 11, 4, 3, 7, 7, 7, 7, 6, 0, 9, 1, 8, 2, 7,
                  3, 6, 4, 5,
                ],
                [
                  3, 2, 1, 7, 7, 7, 7, 0, 10, 0, 1, 6, 6, 6, 6, 2, 11, 11, 11,
                  11, 11, 11, 11, 8, 2, 10, 0, 9, 1, 8, 2, 7, 3, 6, 4, 5, 1, 7,
                  3, 3, 3, 3, 9, 6, 0, 0, 0, 0, 6, 10, 2, 2, 2, 2, 8, 7, 1, 1,
                  1, 1, 7, 10, 6, 4, 4, 4, 4, 4, 4, 9, 9, 9, 9, 0, 2, 11, 11,
                  11, 11, 11, 11, 11, 11, 0, 4, 8, 8, 8, 8, 9, 0, 9, 1, 8, 2, 7,
                  3, 6, 4, 5,
                ],
                [
                  2, 1, 3, 6, 6, 6, 6, 3, 10, 3, 3, 8, 8, 8, 8, 4, 11, 11, 11,
                  11, 11, 11, 11, 9, 4, 10, 0, 9, 1, 8, 2, 7, 3, 6, 4, 5, 4, 6,
                  2, 2, 2, 2, 7, 8, 1, 1, 1, 1, 8, 10, 4, 4, 4, 4, 9, 6, 3, 3,
                  3, 3, 6, 10, 8, 1, 0, 0, 0, 0, 3, 7, 7, 7, 7, 2, 1, 11, 11,
                  11, 11, 11, 11, 11, 11, 1, 0, 9, 9, 9, 9, 7, 0, 9, 1, 8, 2, 7,
                  3, 6, 4, 5,
                ],
                [
                  4, 3, 0, 9, 9, 9, 9, 4, 10, 4, 2, 7, 7, 7, 7, 0, 11, 11, 11,
                  11, 11, 11, 11, 6, 0, 10, 0, 9, 1, 8, 2, 7, 3, 6, 4, 5, 3, 9,
                  4, 4, 4, 4, 8, 7, 3, 3, 3, 3, 7, 10, 0, 0, 0, 0, 6, 9, 2, 2,
                  2, 2, 9, 10, 7, 0, 1, 1, 1, 1, 0, 8, 8, 8, 8, 4, 4, 11, 11,
                  11, 11, 11, 11, 11, 11, 3, 2, 6, 6, 6, 6, 8, 0, 9, 1, 8, 2, 7,
                  3, 6, 4, 5,
                ],
              ]),
              (_class2.RAND_LIST_FG = [
                [
                  12, 0, 4, 9, 9, 9, 9, 1, 10, 2, 4, 7, 7, 7, 7, 3, 11, 11, 11,
                  11, 11, 11, 11, 6, 4, 10, 0, 9, 1, 8, 2, 12, 3, 6, 4, 12, 2,
                  9, 0, 0, 0, 0, 8, 7, 2, 2, 2, 2, 7, 10, 4, 4, 4, 4, 12, 9, 1,
                  1, 1, 1, 9, 10, 7, 2, 3, 3, 3, 3, 2, 8, 8, 8, 8, 1, 3, 11, 11,
                  11, 11, 11, 11, 11, 11, 2, 1, 6, 6, 6, 6, 8, 0, 9, 1, 12, 2,
                  7, 3, 6, 12, 5,
                ],
                [
                  12, 4, 2, 8, 8, 8, 8, 2, 10, 1, 0, 9, 9, 9, 9, 1, 11, 11, 11,
                  11, 11, 11, 11, 7, 3, 10, 0, 9, 1, 8, 2, 12, 3, 6, 4, 12, 0,
                  8, 1, 1, 1, 1, 6, 9, 4, 4, 4, 4, 9, 10, 3, 3, 3, 3, 12, 8, 0,
                  0, 0, 0, 8, 10, 9, 3, 2, 2, 2, 2, 1, 6, 6, 6, 6, 3, 0, 11, 11,
                  11, 11, 11, 11, 11, 11, 4, 3, 7, 7, 7, 7, 6, 0, 9, 1, 12, 2,
                  7, 3, 6, 12, 5,
                ],
                [
                  12, 2, 1, 7, 7, 7, 7, 0, 10, 0, 1, 6, 6, 6, 6, 2, 11, 11, 11,
                  11, 11, 11, 11, 8, 2, 10, 0, 9, 1, 8, 2, 12, 3, 6, 4, 12, 1,
                  7, 3, 3, 3, 3, 9, 6, 0, 0, 0, 0, 6, 10, 2, 2, 2, 2, 12, 7, 1,
                  1, 1, 1, 7, 10, 6, 4, 4, 4, 4, 4, 4, 9, 9, 9, 9, 0, 2, 11, 11,
                  11, 11, 11, 11, 11, 11, 0, 4, 8, 8, 8, 8, 9, 0, 9, 1, 12, 2,
                  7, 3, 6, 12, 5,
                ],
                [
                  12, 1, 3, 6, 6, 6, 6, 3, 10, 3, 3, 8, 8, 8, 8, 4, 11, 11, 11,
                  11, 11, 11, 11, 9, 4, 10, 0, 9, 1, 8, 2, 12, 3, 6, 4, 12, 4,
                  6, 2, 2, 2, 2, 7, 8, 1, 1, 1, 1, 8, 10, 4, 4, 4, 4, 12, 6, 3,
                  3, 3, 3, 6, 10, 8, 1, 0, 0, 0, 0, 3, 7, 7, 7, 7, 2, 1, 11, 11,
                  11, 11, 11, 11, 11, 11, 1, 0, 9, 9, 9, 9, 7, 0, 9, 1, 12, 2,
                  7, 3, 6, 12, 5,
                ],
                [
                  12, 3, 0, 9, 9, 9, 9, 4, 10, 4, 2, 7, 7, 7, 7, 0, 11, 11, 11,
                  11, 11, 11, 11, 6, 0, 10, 0, 9, 1, 8, 2, 12, 3, 6, 4, 12, 3,
                  9, 4, 4, 4, 4, 8, 7, 3, 3, 3, 3, 7, 10, 0, 0, 0, 0, 12, 9, 2,
                  2, 2, 2, 9, 10, 7, 0, 1, 1, 1, 1, 0, 8, 8, 8, 8, 4, 4, 11, 11,
                  11, 11, 11, 11, 11, 11, 3, 2, 6, 6, 6, 6, 8, 0, 9, 1, 12, 2,
                  7, 3, 6, 12, 5,
                ],
              ]),
              (_class2.RAND_LIST_JP = [
                1, 0, 2, 3, 3, 0, 2, 0, 3, 1, 0, 2, 3, 3, 1, 2, 0, 2, 0, 3, 1,
                2, 3, 1, 0, 2, 3, 0, 1, 3, 3, 0, 1, 2, 0, 3, 1, 2, 0, 1, 3, 1,
                2, 2, 1, 3, 0, 1, 1, 2, 3, 1, 0, 2, 3, 1, 1, 0, 0, 3, 2, 1, 2,
                0, 3, 2, 1, 3, 1, 0, 2, 1, 1, 3, 0, 1, 2, 0, 3, 3, 2, 1, 2, 0,
                3, 0, 2, 1, 2, 3, 0, 3, 1, 0, 0, 3, 2, 1, 3, 0,
              ]),
              (_class2.RAND_LIST_FG_MUTI = [
                1, 3, 4, 8, 9, 7, 9, 1, 10, 2, 4, 7, 1, 6, 5, 3, 7, 8, 1, 2, 5,
                6, 3, 6, 4, 10, 2, 9, 1, 8, 2, 6, 3, 6, 4, 5, 2, 9, 8, 4, 5, 1,
                8, 7, 2, 1, 5, 2, 7, 10, 4, 3, 4, 8, 6, 9, 1, 3, 6, 1, 9, 10, 7,
                2, 3, 8, 1, 10, 2, 8, 4, 2, 8, 1, 3, 10, 5, 9, 8, 1, 4, 7, 5,
                10, 1, 6, 5, 9, 6, 8, 1, 9, 1, 8, 2, 10, 3, 6, 4, 5,
              ]),
              (_class2.MULTI_NUMBER = [2, 3, 4, 5, 10, 15, 20, 25, 50, 100]),
              (_class2.INIT_MULTI_NUMBER = [3, 2, 5, 2, 4, 10, 3]),
              (_class2.MULTI_NUMBER_WITH_WEIGHTS = [
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
                3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
                4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 10,
                10, 10, 10, 15, 15, 15, 15, 20, 20, 20, 25, 25, 25, 50, 50, 100,
              ]),
              (_class2.EVENT_ID = {
                NUDGE_REEL_RESULT: 2e3,
                MULTI_CENTER_L: 2001,
                MULTI_CENTER_S: 2002,
              }),
              (_class2.AudioClips = {
                Debut: null,
                BGM_MG: null,
                Reel_Spin: null,
                Reel_Run: null,
                Reel_Stop: null,
                Scatter1: null,
                Scatter2: null,
                Scatter3: null,
                Scatter4: null,
                Scatter5: null,
                Nudge_Appear: null,
                Nudge_Push: null,
                Nudge_Touch: null,
                Multiplier_Open: null,
                Multiplier: null,
                Near_Win: null,
                Small_Win1: null,
                Small_Win2: null,
                Small_Win3: null,
                Big_Win: null,
                Big_Win_Change: null,
                Big_Win_End: null,
                Trigger_FG_Bell: null,
                FG_Cutscene: null,
                BGM_FG: null,
                FG_End: null,
                Free_Spin_Get: null,
              }),
              (_class = _class2))
            ) || _class,
          _dec,
          _dec2,
          _dec3,
          _class$1,
          _class2$1,
          _descriptor,
          _descriptor2,
          _descriptor3,
          _class3;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "ac8f3IfC3JN06jnRk8QDsJC", "BigWin", void 0);
        var BigWinAnimName = {
            Big: { Start: "BigWin_Start", End: "BigWin_End" },
            Mega: { Start: "MegaWin_Start", End: "MegaWin_End" },
            Super: { Start: "SuperWin_Start", End: "SuperWin_End" },
          },
          ccclass$1 = _decorator.ccclass,
          property = _decorator.property,
          BigWin =
            ((_dec = property({ type: sp.Skeleton, tooltip: "spine" })),
            (_dec2 = property({ type: sp.Skeleton, tooltip: "遮罩" })),
            (_dec3 = property({ type: Label, tooltip: "贏分" })),
            ccclass$1(
              ((_class3 = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, n = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    n[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_spine",
                      _descriptor,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_maskSpine",
                      _descriptor2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_winLabel",
                      _descriptor3,
                      _assertThisInitialized(t)
                    ),
                    (t.m_isEnd = !0),
                    (t.m_isShowEnd = !0),
                    (t.m_isShowAward = !1),
                    (t.m_eventCb = null),
                    (t.m_showValueCb = null),
                    (t.m_lvl = 0),
                    (t.m_cancelCb = null),
                    (t.m_nowLvl = 0),
                    (t.m_win = 0),
                    (t.m_showWin = 0),
                    (t.m_step = 0),
                    (t.m_gameView = null),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.update = function (e) {
                    this.m_isShowAward &&
                      ((this.m_showWin += this.m_step * e),
                      this.m_showWin >= this.m_win &&
                        ((this.m_showWin = this.m_win),
                        (this.m_isShowAward = !1)),
                      (this.m_winLabel.string = node.FormatNumberThousands(
                        node.strip(
                          this.m_showValueCb
                            ? this.m_showValueCb(this.m_showWin)
                            : this.m_showWin
                        ),
                        node.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                      )));
                  }),
                  (i.Init = function (e) {
                    this.m_gameView = e;
                  }),
                  (i.Show = function (e, i) {
                    if (e > 0 && i > t.Level.NONE && i <= t.Level.SUPER) {
                      (this.m_isEnd = !1),
                        (this.m_lvl = i),
                        (this.m_nowLvl = 0),
                        (this.m_win = e),
                        (this.m_showWin = 0),
                        (this.m_winLabel.string = "0"),
                        (this.m_isShowEnd = !1);
                      for (var n = 0, r = t.Level.BIG; r <= this.m_lvl; r++) {
                        var o = "",
                          s = "";
                        switch (r) {
                          case t.Level.BIG:
                            (o = BigWinAnimName.Big.Start),
                              (s = BigWinAnimName.Big.End);
                            break;
                          case t.Level.MEGA:
                            (o = BigWinAnimName.Mega.Start),
                              (s = BigWinAnimName.Mega.End);
                            break;
                          case t.Level.SUPER:
                            (o = BigWinAnimName.Super.Start),
                              (s = BigWinAnimName.Super.End);
                        }
                        if ("" !== o && "" !== s) {
                          var a = this.m_spine.findAnimation(o);
                          a && (n += a.duration);
                        }
                      }
                      (this.m_step = node.divide(this.m_win, n || 5)),
                        (this.m_isShowAward = !0),
                        this.m_maskSpine &&
                          ((this.m_maskSpine.node.active = !0),
                          this.PlayAnimation(this.m_maskSpine, "BigWin_Start")),
                        this.ShowNext();
                    }
                  }),
                  (i.Stop = function () {
                    this.m_isShowEnd ||
                      (this.m_cancelCb && this.m_cancelCb(), this.ShowEnd());
                  }),
                  (i.SetSkin = function (e) {
                    this.m_spine.setSkin(e);
                  }),
                  (i.ShowNext = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var i;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (this.m_nowLvl !== this.m_lvl) {
                                    e.next = 4;
                                    break;
                                  }
                                  this.ShowEnd(), (e.next = 24);
                                  break;
                                case 4:
                                  this.m_nowLvl++,
                                    (i = !1),
                                    (e.t0 = this.m_nowLvl),
                                    (e.next =
                                      e.t0 === t.Level.BIG
                                        ? 9
                                        : e.t0 === t.Level.MEGA
                                        ? 13
                                        : e.t0 === t.Level.SUPER
                                        ? 18
                                        : 23);
                                  break;
                                case 9:
                                  return (
                                    (e.next = 11),
                                    this.PlayAnimation(
                                      this.m_spine,
                                      BigWinAnimName.Big.Start
                                    )
                                  );
                                case 11:
                                  return (i = e.sent), e.abrupt("break", 23);
                                case 13:
                                  return (
                                    node$1.Play(
                                      Game_Define.AudioClips.Big_Win_Change
                                    ),
                                    (e.next = 16),
                                    this.PlayAnimation(
                                      this.m_spine,
                                      BigWinAnimName.Mega.Start
                                    )
                                  );
                                case 16:
                                  return (i = e.sent), e.abrupt("break", 23);
                                case 18:
                                  return (
                                    node$1.Play(
                                      Game_Define.AudioClips.Big_Win_Change
                                    ),
                                    (e.next = 21),
                                    this.PlayAnimation(
                                      this.m_spine,
                                      BigWinAnimName.Super.Start
                                    )
                                  );
                                case 21:
                                  return (i = e.sent), e.abrupt("break", 23);
                                case 23:
                                  i || this.ShowNext();
                                case 24:
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
                  (i.ShowEnd = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (!this.m_isShowEnd) {
                                    e.next = 2;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 2:
                                  (this.m_isShowEnd = !0),
                                    (this.m_isShowAward = !1),
                                    (this.m_winLabel.string =
                                      node.FormatNumberThousands(
                                        node.strip(
                                          this.m_showValueCb
                                            ? this.m_showValueCb(this.m_win)
                                            : this.m_win
                                        ),
                                        node.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                                      )),
                                    this.m_gameView.Pharaoh.HideBigWin(
                                      this.m_gameView.IsInFG
                                    ),
                                    this.m_maskSpine &&
                                      this.PlayAnimation(
                                        this.m_maskSpine,
                                        "BigWin_End"
                                      ),
                                    (e.t0 = this.m_lvl),
                                    (e.next =
                                      e.t0 === t.Level.BIG
                                        ? 10
                                        : e.t0 === t.Level.MEGA
                                        ? 13
                                        : e.t0 === t.Level.SUPER
                                        ? 16
                                        : 19);
                                  break;
                                case 10:
                                  return (
                                    (e.next = 12),
                                    this.PlayAnimation(
                                      this.m_spine,
                                      BigWinAnimName.Big.End
                                    )
                                  );
                                case 12:
                                  return e.abrupt("break", 19);
                                case 13:
                                  return (
                                    (e.next = 15),
                                    this.PlayAnimation(
                                      this.m_spine,
                                      BigWinAnimName.Mega.End
                                    )
                                  );
                                case 15:
                                  return e.abrupt("break", 19);
                                case 16:
                                  return (
                                    (e.next = 18),
                                    this.PlayAnimation(
                                      this.m_spine,
                                      BigWinAnimName.Super.End
                                    )
                                  );
                                case 18:
                                  return e.abrupt("break", 19);
                                case 19:
                                  this.m_maskSpine &&
                                    (this.m_maskSpine.node.active = !1),
                                    (this.m_isEnd = !0);
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
                  (i.PlayAnimation = function (e, t, i, n) {
                    var r = this;
                    return (
                      void 0 === i && (i = !1),
                      void 0 === n && (n = 0),
                      new Promise(function (o) {
                        var s = !1;
                        (r.m_cancelCb = function () {
                          o((s = !0));
                        }),
                          e.clearTrack(n),
                          e.setToSetupPose();
                        var a = e.setAnimation(n, t, i),
                          l = function () {
                            (r.m_cancelCb = null), o(s);
                          };
                        a
                          ? (e.setTrackEventListener(a, function (e, i) {
                              var n = i.data.name,
                                o = i.stringValue;
                              r.m_eventCb && r.m_eventCb(n, o, t);
                            }),
                            e.setTrackCompleteListener(a, function () {
                              e.setTrackCompleteListener(a, function () {}),
                                l();
                            }))
                          : e.setCompleteListener(function () {
                              e.setCompleteListener(null), l();
                            });
                      })
                    );
                  }),
                  _createClass(t, [
                    {
                      key: "IsEnd",
                      get: function () {
                        return this.m_isEnd;
                      },
                      set: function (e) {
                        this.m_isEnd = e;
                      },
                    },
                  ]),
                  t
                );
              })(Component)),
              (_class3.Level = { NONE: 0, BIG: 1, MEGA: 2, SUPER: 3 }),
              (_class2$1 = _class3),
              (_descriptor = _applyDecoratedDescriptor(
                _class2$1.prototype,
                "m_spine",
                [_dec],
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
                _class2$1.prototype,
                "m_maskSpine",
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
              (_descriptor3 = _applyDecoratedDescriptor(
                _class2$1.prototype,
                "m_winLabel",
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
              (_class$1 = _class2$1))
            ) || _class$1),
          _dec$1,
          _dec2$1,
          _class$2,
          _class2$2,
          _descriptor$1,
          _descriptor2$1;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "890cfFyI9pAfpY9heJGbFIt",
            "DataStructure",
            void 0
          ),
          cclegacy._RF.pop(),
          cclegacy._RF.push({}, "6586fGSjRVLRoZiKHvdUsVo", "SlotReels", void 0);
        var ccclass$2 = _decorator.ccclass,
          property$1 = _decorator.property,
          COL = 5,
          ROW = 4,
          SlotReels =
            ((_dec$1 = property$1(SpriteFrame)),
            (_dec2$1 = property$1({ type: Label, tooltip: "靜態Nudge次數" })),
            ccclass$2(
              ((_class2$2 = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, n = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    n[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_symbolSpriteFrames",
                      _descriptor$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_nudgeTimes",
                      _descriptor2$1,
                      _assertThisInitialized(t)
                    ),
                    (t.m_isFG = !1),
                    (t.m_symbolSize = null),
                    (t.m_viewSize = null),
                    (t.m_gameView = null),
                    (t.m_reelPositionOffset = [
                      v3(0, 0),
                      v3(0, 0),
                      v3(0, 0),
                      v3(0, 0),
                      v3(0, 0),
                    ]),
                    (t.m_symbol = new Array()),
                    (t.m_plateInfo = [
                      [1, 1, 1, 1],
                      [1, 1, 1, 1],
                      [1, 1, 1, 1],
                      [1, 1, 1, 1],
                      [1, 1, 1, 1],
                    ]),
                    (t.m_lastPlateInfo = [
                      [1, 1, 1, 1],
                      [1, 1, 1, 1],
                      [1, 1, 1, 1],
                      [1, 1, 1, 1],
                      [1, 1, 1, 1],
                    ]),
                    (t.m_upperSymbol = new Array()),
                    (t.m_lowerSymbol = new Array()),
                    (t.m_reelStopTime = new Array()),
                    (t.m_reelPreTime = new Array()),
                    (t.m_isChangeSymbol = new Array()),
                    (t.m_isChangeToFinalSymbol = new Array()),
                    (t.m_time = 0),
                    (t.m_stopTime = 0),
                    (t.m_riseTime = 0),
                    (t.m_spinBufferTime01 = 0.15),
                    (t.m_spinBufferTime02 = 0.15),
                    (t.m_spinSpeed = 0.14),
                    (t.m_upLength = 20),
                    (t.m_downLength = 30),
                    (t.m_numberOfSymbol = 0),
                    (t.m_timesOfBaseSpin = 2),
                    (t.m_timesOfNearWinSpin = Game_Define.DELAYTIME.NEARWIN),
                    (t.m_spinIntervalTimes = 1),
                    (t.m_spinDelayTime = 0),
                    (t.m_isStop = !1),
                    (t.m_isClickStopBtn = !1),
                    (t.m_playStopSound = null),
                    (t.m_isPlaySound = [!1, !1, !1, !1, !1]),
                    (t.m_reelSoundId = null),
                    (t.m_lockColumn = new Array()),
                    (t.m_nearWinStartFunc = null),
                    (t.m_nearWinEndFunc = null),
                    (t.m_isShowNearWin = [!0, !0, !0, !0, !0, !0]),
                    (t.m_isNearWinCols = [!1, !1, !1, !1, !1, !1]),
                    (t.m_symbolPos = [
                      [v3(0, 0), v3(0, 0), v3(0, 0), v3(0, 0)],
                      [v3(0, 0), v3(0, 0), v3(0, 0), v3(0, 0)],
                      [v3(0, 0), v3(0, 0), v3(0, 0), v3(0, 0)],
                      [v3(0, 0), v3(0, 0), v3(0, 0), v3(0, 0)],
                      [v3(0, 0), v3(0, 0), v3(0, 0), v3(0, 0)],
                    ]),
                    (t.m_isaddStopTime = !1),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.onLoad = function () {
                    var e = this;
                    (this.m_viewSize =
                      this.node.getComponent(UITransform).contentSize),
                      (this.m_symbolSize = new Size(
                        this.m_viewSize.width / COL,
                        this.m_viewSize.height / ROW
                      ));
                    for (var t = 0; t < COL; t++) {
                      this.m_lockColumn.push(!1),
                        this.m_reelStopTime.push(null),
                        this.m_reelPreTime.push(null);
                      for (var i = new Array(), n = 0; n < ROW; n++) {
                        var r = new Node();
                        r.addComponent(Sprite), r.setScale(v3(1, 1));
                        var o = r.getComponent(Sprite);
                        (o.type = Sprite.Type.SIMPLE),
                          (o.sizeMode = Sprite.SizeMode.RAW),
                          (o.trim = !1),
                          this.node.addChild(r),
                          (r.name = String(this.m_numberOfSymbol)),
                          (this.m_numberOfSymbol += 1),
                          this.m_isChangeToFinalSymbol.push(!1),
                          (r.getComponent(Sprite).spriteFrame =
                            this.m_symbolSpriteFrames[t + 6]),
                          (this.m_plateInfo[t][n] = t + 6),
                          i.push(r);
                        var s =
                            this.m_symbolSize.width * (t + 0.5) +
                            this.m_reelPositionOffset[t].x -
                            this.m_viewSize.width / 2,
                          a =
                            this.m_symbolSize.height * (ROW - n - 0.5) +
                            this.m_reelPositionOffset[t].y -
                            this.m_viewSize.height / 2;
                        r.setPosition(v3(s, a)),
                          (this.m_symbolPos[t][n] = v3(s, a)),
                          node.SetZIndex(r, Game_Define.SymbolZIndex.SYMBOL);
                      }
                      this.m_symbol.push(i);
                    }
                    for (var l = 0; l < COL; l++) {
                      var u =
                          this.m_symbolSize.width * (l + 0.5) +
                          this.m_reelPositionOffset[l].x -
                          this.m_viewSize.width / 2,
                        c =
                          this.m_symbolSize.height * (ROW + 0.5) +
                          this.m_reelPositionOffset[l].y -
                          this.m_viewSize.height / 2,
                        m = new Node();
                      m.addComponent(Sprite);
                      var _ = m.getComponent(Sprite);
                      (_.type = Sprite.Type.SIMPLE),
                        (_.sizeMode = Sprite.SizeMode.RAW),
                        (_.trim = !1),
                        this.node.addChild(m),
                        (m.name = String(this.m_numberOfSymbol + l)),
                        (m.getComponent(Sprite).spriteFrame =
                          this.m_symbolSpriteFrames[l]),
                        m.setPosition(v3(u, c)),
                        this.m_upperSymbol.push(m),
                        node.SetZIndex(m, Game_Define.SymbolZIndex.SYMBOL),
                        (c =
                          -0.5 * this.m_symbolSize.height +
                          this.m_reelPositionOffset[l].y -
                          this.m_viewSize.height / 2);
                      var p = new Node();
                      p.addComponent(Sprite);
                      var d = m.getComponent(Sprite);
                      (d.type = Sprite.Type.SIMPLE),
                        (d.sizeMode = Sprite.SizeMode.RAW),
                        (d.trim = !1),
                        this.node.addChild(p),
                        (p.name = String(-(l + 1))),
                        (p.getComponent(Sprite).spriteFrame =
                          this.m_symbolSpriteFrames[l]),
                        p.setPosition(v3(u, c)),
                        this.m_lowerSymbol.push(p),
                        node.SetZIndex(p, Game_Define.SymbolZIndex.SYMBOL);
                    }
                    node.SetZIndex(
                      this.m_nudgeTimes.node,
                      Game_Define.SymbolZIndex.NUDGETIMES
                    );
                    var h = function () {
                      var t = node$2.TempoSetting.TripleCoinTreasure;
                      (e.m_riseTime = t.BASE.RISE_TIME),
                        (e.m_upLength = t.BASE.UP_LENGTH),
                        (e.m_spinBufferTime01 = t.BASE.SPIN_BUFFER_TIME_01),
                        (e.m_spinBufferTime02 = t.BASE.SPIN_BUFFER_TIME_02),
                        (e.m_downLength = t.BASE.DOWN_LENGTH),
                        (e.m_spinSpeed = t.BASE.SPIN_SPEED),
                        (e.m_timesOfBaseSpin = t.BASE.TIMES_OF_BASE_SPIN),
                        (e.m_spinIntervalTimes = t.BASE.SPIN_INTERVAL_TIMES),
                        (e.m_spinDelayTime = t.BASE.SPIN_DELAY_TIME);
                    };
                    h(), node$2.AddCb(h);
                  }),
                  (i.Init = function (e, t) {
                    void 0 === t && (t = !1),
                      (this.m_gameView = e),
                      (this.m_isFG = t);
                  }),
                  (i.start = function () {
                    if (this.m_isFG)
                      for (var e = 0; e < COL; e++) {
                        for (var t = 0; t < ROW; t++)
                          this.m_symbol[e][t].setScale(
                            v3(
                              Game_Define.SYMBOL_SCALE_IN_FG,
                              Game_Define.SYMBOL_SCALE_IN_FG
                            )
                          );
                        this.m_upperSymbol[e].setScale(
                          v3(
                            Game_Define.SYMBOL_SCALE_IN_FG,
                            Game_Define.SYMBOL_SCALE_IN_FG
                          )
                        ),
                          this.m_lowerSymbol[e].setScale(
                            v3(
                              Game_Define.SYMBOL_SCALE_IN_FG,
                              Game_Define.SYMBOL_SCALE_IN_FG
                            )
                          );
                      }
                  }),
                  (i.StartSpin = function (e) {
                    if (
                      (void 0 === e && (e = !0),
                      (this.m_time = 0),
                      (this.m_stopTime = 0),
                      (this.m_isStop = !1),
                      (this.m_isClickStopBtn = !1),
                      (this.m_isPlaySound = [!1, !1, !1, !1, !1]),
                      (this.m_isNearWinCols = [!1, !1, !1, !1, !1]),
                      (this.m_plateInfo = null),
                      (this.m_isaddStopTime = !1),
                      e)
                    )
                      for (var t = 0; t < COL; t++) this.m_lockColumn[t] = !1;
                    for (var i = 0; i < COL; i++)
                      (this.m_reelStopTime[i] = null),
                        (this.m_reelPreTime[i] = null);
                    for (var n = 0; n < COL; n++)
                      if (!this.m_lockColumn[n])
                        for (var r = 0; r < ROW; r++)
                          this.m_symbol[n][r].active = !0;
                    for (
                      var o = 0;
                      o < this.m_isChangeToFinalSymbol.length;
                      o++
                    )
                      this.m_isChangeToFinalSymbol[o] = !1;
                  }),
                  (i.SetIsClickStopBtn = function () {
                    if (((this.m_isClickStopBtn = !0), 0 != this.m_stopTime)) {
                      var e = Math.ceil(this.m_time / this.m_spinSpeed);
                      e = 0 !== e ? e : 1;
                      var t =
                        node$2.TempoSetting.TripleCoinTreasure.SPEED_UP_STOP_TIME(
                          0,
                          this.m_time
                        );
                      t < this.m_stopTime && (this.m_stopTime = node.strip(t));
                      for (var i = e * this.m_spinSpeed, n = 0; n < COL; n++)
                        this.m_reelStopTime[n] > i &&
                          ((this.m_reelStopTime[n] = node.strip(i)),
                          (this.m_reelPreTime[n] = (e - 1) * this.m_spinSpeed)),
                          (this.m_isShowNearWin[n] = !0);
                      var r =
                        this.m_gameView.SpinAck.RoundQueue[
                          this.m_gameView.RoundIdx
                        ];
                      this.m_gameView.HasNudge &&
                        r.RoundWin > 0 &&
                        !this.m_isaddStopTime &&
                        ((this.m_stopTime = node.strip(t + 0.5)),
                        (this.m_isaddStopTime = !0));
                    }
                  }),
                  (i.Spin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (this.m_time = node.strip(this.m_time + t)),
                                    this.m_isStop ||
                                      (this.Spin_RealSpinMultiple(),
                                      this.m_time > this.m_stopTime &&
                                        0 != this.m_stopTime &&
                                        ((this.m_isStop = !0),
                                        this.m_nearWinEndFunc &&
                                          (this.m_nearWinEndFunc(),
                                          (this.m_nearWinEndFunc = null),
                                          (this.m_nearWinStartFunc = null)),
                                        this.m_reelSoundId &&
                                          (node$1.Stop(this.m_reelSoundId),
                                          (this.m_reelSoundId = null))));
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
                  (i.SetNearWinCb = function (e, t) {
                    (this.m_nearWinStartFunc = e), (this.m_nearWinEndFunc = t);
                  }),
                  (i.Spin_RealSpinMultiple = function () {
                    for (var e = 0; e < COL; e++) {
                      var t = this.m_spinSpeed,
                        i = this.m_time,
                        n = this.m_reelStopTime[e],
                        r = this.m_reelPreTime[e],
                        o = this.m_riseTime * COL,
                        s = this.m_gameView.StartNearWinCol;
                      s >= 0 &&
                        e >= s &&
                        this.m_reelStopTime[e] &&
                        this.m_time > this.m_reelStopTime[e - 1] &&
                        this.m_nearWinStartFunc &&
                        !this.m_isShowNearWin[e] &&
                        ((this.m_isShowNearWin[e] = !0),
                        e < COL
                          ? ((t = this.m_spinSpeed / 2),
                            this.m_nearWinStartFunc(e))
                          : this.m_nearWinEndFunc());
                      for (var a = 0; a < ROW; a++) {
                        var l =
                            this.m_symbolSize.width * (e + 0.5) +
                            this.m_reelPositionOffset[e].x -
                            this.m_viewSize.width / 2,
                          u =
                            this.m_symbolSize.height * (ROW - a - 0.5) +
                            this.m_reelPositionOffset[e].y -
                            this.m_viewSize.height / 2;
                        if (i < this.m_riseTime * e);
                        else if (i < this.m_riseTime * (e + 1)) {
                          var c =
                            ((i - this.m_riseTime * e) / this.m_riseTime) *
                            this.m_upLength;
                          this.m_symbol[e][a].setPosition(v3(l, u + c));
                        } else if (i < o)
                          this.m_symbol[e][a].setPosition(
                            v3(l, u + this.m_upLength)
                          );
                        else if (null == n || i < r + o) {
                          var m =
                              (((i - o) % t) / t) *
                              this.m_symbolSize.height *
                              (ROW + 2),
                            _ = this.GetMovelength(
                              m,
                              this.m_symbolSize.height * (ROW - a + 0.5),
                              this.m_symbolSize.height * (ROW + 2),
                              e,
                              this.m_symbol[e][a].name,
                              this.m_symbol[e][a],
                              !1
                            );
                          this.m_symbol[e][a].setPosition(v3(l, u - _));
                        } else if (i < n + o) {
                          var p =
                              (((i - o) % t) / t) *
                              this.m_symbolSize.height *
                              (ROW + 2),
                            d = this.GetMovelength(
                              p,
                              this.m_symbolSize.height * (ROW - a + 0.5),
                              this.m_symbolSize.height * (ROW + 2),
                              e,
                              this.m_symbol[e][a].name,
                              this.m_symbol[e][a],
                              !1
                            );
                          this.m_symbol[e][a].setPosition(v3(l, u - d));
                        } else if (i < n + o + this.m_spinBufferTime01) {
                          var h =
                            ((i - n - o) / this.m_spinBufferTime01) *
                            this.m_downLength;
                          this.m_symbol[e][a].setPosition(v3(l, u - h)),
                            this.CheckChangeToFinalSymbol(
                              e,
                              this.m_symbol[e][a].name,
                              this.m_symbol[e][a],
                              !0
                            );
                        } else if (
                          i <
                          n +
                            o +
                            this.m_spinBufferTime01 +
                            this.m_spinBufferTime02
                        ) {
                          var f =
                            ((i - n - o - this.m_spinBufferTime01) /
                              this.m_spinBufferTime02) *
                            this.m_downLength;
                          this.m_symbol[e][a].setPosition(
                            v3(l, u - this.m_downLength + f)
                          ),
                            this.CheckChangeToFinalSymbol(
                              e,
                              this.m_symbol[e][a].name,
                              this.m_symbol[e][a],
                              !0
                            );
                        } else
                          this.CheckChangeToFinalSymbol(
                            e,
                            this.m_symbol[e][a].name,
                            this.m_symbol[e][a],
                            !0
                          ),
                            this.m_symbol[e][a].setPosition(v3(l, u)),
                            this.CheckPlayStopSound(e, a);
                      }
                      var y =
                          this.m_symbolSize.width * (e + 0.5) +
                          this.m_reelPositionOffset[e].x -
                          this.m_viewSize.width / 2,
                        g =
                          this.m_symbolSize.height * (ROW + 0.5) +
                          this.m_reelPositionOffset[e].y -
                          this.m_viewSize.height / 2;
                      if (i < this.m_riseTime * e);
                      else if (i < this.m_riseTime * (e + 1)) {
                        var S =
                          ((i - this.m_riseTime * e) / this.m_riseTime) *
                          this.m_upLength;
                        this.m_upperSymbol[e].setPosition(v3(y, g + S));
                      } else if (i < o)
                        this.m_upperSymbol[e].setPosition(
                          v3(y, g + this.m_upLength)
                        );
                      else if (null == n || i < n + o) {
                        var w =
                            (((i - o) % t) / t) *
                            this.m_symbolSize.height *
                            (ROW + 2),
                          b = this.GetMovelength(
                            w,
                            this.m_symbolSize.height * (ROW + 1),
                            this.m_symbolSize.height * (ROW + 2),
                            e,
                            this.m_numberOfSymbol + e,
                            this.m_upperSymbol[e],
                            !1
                          );
                        this.m_upperSymbol[e].setPosition(v3(y, g - b));
                      } else if (i < n + o + this.m_spinBufferTime01) {
                        var v =
                          ((i - n - o) / this.m_spinBufferTime01) *
                          this.m_downLength;
                        this.m_upperSymbol[e].setPosition(v3(y, g - v)),
                          this.CheckChangeToFinalSymbol(
                            e,
                            this.m_upperSymbol[e].name,
                            this.m_upperSymbol[e],
                            !0
                          );
                      } else if (
                        i <
                        n +
                          o +
                          this.m_spinBufferTime01 +
                          this.m_spinBufferTime02
                      ) {
                        var $ =
                          ((i - n - o - this.m_spinBufferTime01) /
                            this.m_spinBufferTime02) *
                          this.m_downLength;
                        this.m_upperSymbol[e].setPosition(
                          v3(y, g - this.m_downLength + $)
                        ),
                          this.CheckChangeToFinalSymbol(
                            e,
                            this.m_upperSymbol[e].name,
                            this.m_upperSymbol[e],
                            !0
                          );
                      } else
                        this.CheckChangeToFinalSymbol(
                          e,
                          this.m_numberOfSymbol + e,
                          this.m_upperSymbol[e]
                        ),
                          this.m_upperSymbol[e].setPosition(v3(y, g));
                      if (
                        ((y =
                          this.m_symbolSize.width * (e + 0.5) +
                          this.m_reelPositionOffset[e].x -
                          this.m_viewSize.width / 2),
                        (g =
                          -0.5 * this.m_symbolSize.height +
                          this.m_reelPositionOffset[e].y -
                          this.m_viewSize.height / 2),
                        i < this.m_riseTime * e)
                      );
                      else if (i < this.m_riseTime * (e + 1)) {
                        var R =
                          ((i - this.m_riseTime * e) / this.m_riseTime) *
                          this.m_upLength;
                        this.m_lowerSymbol[e].setPosition(v3(y, g + R));
                      } else if (i < o)
                        this.m_lowerSymbol[e].setPosition(
                          v3(y, g + this.m_upLength)
                        );
                      else if (null == n || i < n + o) {
                        var T =
                            (((i - o) % t) / t) *
                            this.m_symbolSize.height *
                            (ROW + 2),
                          A = this.GetMovelength(
                            T,
                            0.5 * this.m_symbolSize.height,
                            this.m_symbolSize.height * (ROW + 2),
                            e,
                            -(e + 1),
                            this.m_lowerSymbol[e],
                            !1
                          );
                        this.m_lowerSymbol[e].setPosition(v3(y, g - A));
                      } else if (i < n + o + this.m_spinBufferTime01) {
                        var E =
                          ((i - n - o) / this.m_spinBufferTime01) *
                          this.m_downLength;
                        this.m_lowerSymbol[e].setPosition(v3(y, g - E)),
                          this.CheckChangeToFinalSymbol(
                            e,
                            this.m_lowerSymbol[e].name,
                            this.m_lowerSymbol[e],
                            !0
                          );
                      } else if (
                        i <
                        n +
                          o +
                          this.m_spinBufferTime01 +
                          this.m_spinBufferTime02
                      ) {
                        var N =
                          ((i - n - o - this.m_spinBufferTime01) /
                            this.m_spinBufferTime02) *
                          this.m_downLength;
                        this.m_lowerSymbol[e].setPosition(
                          v3(y, g - this.m_downLength + N)
                        ),
                          this.CheckChangeToFinalSymbol(
                            e,
                            this.m_lowerSymbol[e].name,
                            this.m_lowerSymbol[e],
                            !0
                          );
                      } else
                        this.CheckChangeToFinalSymbol(
                          e,
                          -(e + 1),
                          this.m_lowerSymbol[e]
                        ),
                          this.m_lowerSymbol[e].setPosition(v3(y, g));
                    }
                  }),
                  (i.GetMovelength = function (e, t, i, n, r, o, s) {
                    return (
                      e >= t
                        ? ((e -= i),
                          this.m_isChangeSymbol[r] &&
                            (this.ChangeSymbol(n, o, s),
                            (this.m_isChangeSymbol[r] = !1)))
                        : (this.m_isChangeSymbol[r] = !0),
                      e
                    );
                  }),
                  (i.ChangeSymbol = function (e, t, i) {
                    var n,
                      r = t.name,
                      o = this.m_reelStopTime[e],
                      s = 0,
                      a = r >= 0 ? r % ROW : (Math.abs(r) - 1) % ROW,
                      l = this.m_riseTime * (ROW + 2);
                    o && (s = o / this.m_spinSpeed);
                    for (
                      var u = [], c = 0;
                      c < Object.keys(Game_Define.Symbol).length;
                      c++
                    ) {
                      var m = Game_Define.Symbol[c];
                      u.push(Game_Define.Symbol[m]);
                    }
                    if (
                      (o && this.m_time - l > (s - 1) * this.m_spinSpeed) ||
                      i
                    )
                      if (
                        r >= 0 &&
                        r < this.m_numberOfSymbol &&
                        null != this.m_plateInfo
                      ) {
                        var _ = t.getComponent(Sprite);
                        if (
                          (n = this.m_plateInfo[e][a]) ==
                          Game_Define.Symbol.SymbolNudge
                        ) {
                          var p =
                              this.m_gameView.SpinAck.RoundQueue[
                                this.m_gameView.RoundIdx
                              ],
                            d = p.Nudge ? p.Nudge : 0;
                          n =
                            Game_Define.NudgeSpriteIndex[
                              Game_Define.NudgeTimesArray.indexOf(d)
                            ];
                          var h = this.m_symbolSpriteFrames[n];
                          _.spriteFrame = h;
                        } else {
                          var f = this.m_symbolSpriteFrames[n];
                          _.spriteFrame = f;
                        }
                      } else {
                        for (var y = 0; y < u.length; y++)
                          u[y] === Game_Define.Symbol.SymbolNudge &&
                            u.splice(y, 1);
                        var g =
                          u[Math.floor(Math.random() * (u.length - 1)) + 1];
                        t.getComponent(Sprite).spriteFrame =
                          this.m_symbolSpriteFrames[g];
                      }
                    else {
                      var S = t.getComponent(Sprite),
                        w = Math.floor(Math.random() * (u.length - 1)) + 1;
                      if (w == Game_Define.Symbol.SymbolNudge) {
                        var b =
                          Game_Define.NudgeSpriteIndexWithWeights[
                            Math.floor(
                              Math.random() *
                                Game_Define.NudgeSpriteIndexWithWeights.length
                            )
                          ];
                        S.spriteFrame = this.m_symbolSpriteFrames[b];
                      } else S.spriteFrame = this.m_symbolSpriteFrames[w];
                    }
                  }),
                  (i.CheckChangeToFinalSymbol = function (e, t, i, n) {
                    void 0 === n && (n = !1),
                      this.m_isChangeToFinalSymbol[t] ||
                        ((this.m_isChangeToFinalSymbol[t] = !0),
                        this.ChangeSymbol(e, i, n));
                  }),
                  (i.GetAwardSymbolPosition = function (e, t) {
                    return this.m_symbolPos[e][t];
                  }),
                  (i.SetPlateInfo = function (e) {
                    this.m_plateInfo = e;
                    var t = 5 * this.m_riseTime,
                      i = Math.ceil((this.m_time - t) / this.m_spinSpeed);
                    i = 0 !== i ? i : 1;
                    var n = 0;
                    if (this.m_isClickStopBtn) {
                      this.m_stopTime = node.strip(
                        this.m_spinSpeed * i + this.m_spinDelayTime + t
                      );
                      for (var r = 0; r < COL; r++)
                        (this.m_reelStopTime[r] = node.strip(
                          this.m_spinSpeed * i
                        )),
                          (this.m_reelPreTime[r] = node.strip(
                            this.m_spinSpeed * (i - 1)
                          ));
                    } else {
                      this.m_stopTime = node.strip(
                        this.m_spinSpeed * (i + this.m_timesOfBaseSpin) +
                          this.m_spinIntervalTimes *
                            this.m_spinSpeed *
                            (COL - 1) +
                          +this.m_spinDelayTime +
                          t +
                          this.m_spinBufferTime01 +
                          this.m_spinBufferTime02
                      );
                      for (var o = 0; o < COL; o++)
                        this.m_lockColumn[o] && (n += 1),
                          (this.m_reelStopTime[o] = node.strip(
                            this.m_spinSpeed * (i + this.m_timesOfBaseSpin) +
                              this.m_spinIntervalTimes *
                                this.m_spinSpeed *
                                (o - n)
                          )),
                          (this.m_reelPreTime[o] = node.strip(
                            this.m_spinSpeed * (i + this.m_timesOfBaseSpin) +
                              this.m_spinIntervalTimes *
                                this.m_spinSpeed *
                                (o - n - 1)
                          ));
                      if (this.m_gameView.StartNearWinCol >= 2) {
                        var s = this.m_gameView.StartNearWinCol;
                        this.m_stopTime =
                          this.m_stopTime +
                          this.m_timesOfNearWinSpin[s] * (COL - s);
                        for (var a = 0; a < this.m_isShowNearWin.length; a++)
                          a >= s && (this.m_isShowNearWin[a] = !1);
                        for (var l = 0; l < COL; l++)
                          l >= s &&
                            (this.m_reelStopTime[l] = node.strip(
                              this.m_reelStopTime[l] +
                                this.m_timesOfNearWinSpin[s] * (l - s + 1)
                            ));
                      }
                    }
                    for (var u = 0; u < e.length; u++)
                      for (var c = 0; c < e[u].length; c++)
                        e[u][c] === Game_Define.Symbol.SymbolScatter &&
                          (this.m_gameView.HasScatterCol[u] = !0),
                          e[u][c] === Game_Define.Symbol.SymbolNudge &&
                            ((this.m_gameView.HasNudge = !0),
                            (this.m_gameView.HasNudgeCol[u] = !0));
                    var m =
                      this.m_gameView.SpinAck.RoundQueue[
                        this.m_gameView.RoundIdx
                      ];
                    this.m_gameView.HasNudge &&
                      m.RoundWin > 0 &&
                      !this.m_isaddStopTime &&
                      ((this.m_stopTime = node.strip(this.m_stopTime + 0.5)),
                      (this.m_isaddStopTime = !0));
                  }),
                  (i.IsPlateStop = function () {
                    return this.m_isStop;
                  }),
                  (i.GetSymbolByIndex = function (e) {
                    return this.m_symbol[e.x][e.y];
                  }),
                  (i.SetPlayStopSoundFunction = function (e) {
                    this.m_playStopSound = e;
                  }),
                  (i.CheckPlayStopSound = function (e, t) {
                    this.m_playStopSound &&
                      !this.m_isPlaySound[e] &&
                      3 == t &&
                      (log("column:", e),
                      (this.m_isPlaySound[e] = !0),
                      this.m_playStopSound(e));
                  }),
                  (i.SetPlateSymbol = function (e) {
                    if (e && 0 != e.length)
                      for (var t = 0; t < COL; t++) {
                        (this.m_lockColumn[t] = !1),
                          (this.m_reelStopTime[t] = null),
                          (this.m_reelPreTime[t] = null);
                        for (var i = 0; i < ROW; i++) {
                          var n = this.m_symbolSpriteFrames[e[t][i]];
                          this.m_symbol[t][i].getComponent(Sprite).spriteFrame =
                            n;
                          var r =
                              this.m_symbolSize.width * (t + 0.5) +
                              this.m_reelPositionOffset[t].x -
                              this.m_viewSize.width / 2,
                            o =
                              this.m_symbolSize.height * (ROW - i - 0.5) +
                              this.m_reelPositionOffset[t].y -
                              this.m_viewSize.height / 2;
                          this.m_symbol[t][i].setPosition(v3(r, o));
                        }
                      }
                    else
                      for (var s = 0; s < COL; s++) {
                        (this.m_lockColumn[s] = !1),
                          (this.m_reelStopTime[s] = null),
                          (this.m_reelPreTime[s] = null);
                        for (var a = 0; a < ROW; a++) {
                          this.m_symbol[s][a].getComponent(Sprite).spriteFrame =
                            this.m_symbolSpriteFrames[s + 6];
                          var l =
                              this.m_symbolSize.width * (s + 0.5) +
                              this.m_reelPositionOffset[s].x -
                              this.m_viewSize.width / 2,
                            u =
                              this.m_symbolSize.height * (ROW - a - 0.5) +
                              this.m_reelPositionOffset[s].y -
                              this.m_viewSize.height / 2;
                          this.m_symbol[s][a].setPosition(v3(l, u));
                        }
                      }
                    for (var c = 0; c < COL; c++) {
                      var m =
                          this.m_symbolSize.width * (c + 0.5) +
                          this.m_reelPositionOffset[c].x -
                          this.m_viewSize.width / 2,
                        _ =
                          this.m_symbolSize.height * (ROW + 0.5) +
                          this.m_reelPositionOffset[c].y -
                          this.m_viewSize.height / 2;
                      this.m_upperSymbol[c].setPosition(v3(m, _)),
                        (_ =
                          -0.5 * this.m_symbolSize.height +
                          this.m_reelPositionOffset[c].y -
                          this.m_viewSize.height / 2),
                        this.m_lowerSymbol[c].setPosition(v3(m, _));
                    }
                  }),
                  (i.ShowDarkOrLightSymbol = function (e) {
                    for (
                      var t = e
                          ? color(101.25, 94.5, 73.5)
                          : color(255, 255, 255),
                        i = 0;
                      i < this.m_symbol.length;
                      i++
                    ) {
                      for (var n = 0; n < this.m_symbol[i].length; n++) {
                        if (e)
                          this.m_symbol[i][n].getComponent(Sprite).color = t;
                        else
                          this.m_symbol[i][n].getComponent(Sprite).color =
                            color(255, 255, 255);
                      }
                      var r = this.m_upperSymbol[i].getComponent(Sprite);
                      (r.color = t),
                        ((r =
                          this.m_lowerSymbol[i].getComponent(Sprite)).color =
                          t);
                    }
                  }),
                  (i.ShowNearWinLightCol = function (e) {
                    for (var t = 0; t < this.m_symbol.length; t++) {
                      for (
                        var i =
                            t == e
                              ? color(255, 255, 255)
                              : color(101.25, 94.5, 73.5),
                          n = 0;
                        n < this.m_symbol[t].length;
                        n++
                      ) {
                        this.m_symbol[t][n].getComponent(Sprite).color = i;
                      }
                      var r = this.m_upperSymbol[t].getComponent(Sprite);
                      (r.color = i),
                        ((r =
                          this.m_lowerSymbol[t].getComponent(Sprite)).color =
                          i);
                    }
                  }),
                  _createClass(t, [
                    {
                      key: "NudgeTimes",
                      get: function () {
                        return this.m_nudgeTimes;
                      },
                      set: function (e) {
                        this.m_nudgeTimes.string = e;
                      },
                    },
                    {
                      key: "Symbol",
                      get: function () {
                        return this.m_symbol;
                      },
                    },
                    {
                      key: "PlateInfo",
                      get: function () {
                        return this.m_plateInfo;
                      },
                    },
                    {
                      key: "IsClickStopBtn",
                      get: function () {
                        return this.m_isClickStopBtn;
                      },
                    },
                  ]),
                  t
                );
              })(Component)),
              (_descriptor$1 = _applyDecoratedDescriptor(
                _class2$2.prototype,
                "m_symbolSpriteFrames",
                [_dec$1],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor2$1 = _applyDecoratedDescriptor(
                _class2$2.prototype,
                "m_nudgeTimes",
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
              (_class$2 = _class2$2))
            ) || _class$2),
          _dec$2,
          _dec2$2,
          _class$3,
          _class2$3,
          _descriptor$2;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "0a277k7GL9BBbjmm6CwuKAj",
            "SymbolSpine",
            void 0
          );
        var ccclass$3 = _decorator.ccclass,
          property$2 = _decorator.property,
          AnimName = { Win: "Win", Collect: "Collect", Stop: "Stop" },
          SymbolSpine =
            ((_dec$2 = ccclass$3("SymbolSpine")),
            (_dec2$2 = property$2({ type: sp.Skeleton, tooltip: "Spine" })),
            _dec$2(
              ((_class2$3 = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, n = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    n[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_spine",
                      _descriptor$2,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.ShowWin = function (e) {
                    this.PlayAnimation(AnimName.Win, e);
                  }),
                  (i.ShowWinOnce = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName.Win, !1)
                                  );
                                case 2:
                                  this.PlayAnimation(AnimName.Win, !1, 0);
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
                  (i.Hide = function () {
                    this.m_spine.clearTrack(0);
                  }),
                  (i.PlayAnimation = function (e, t, i) {
                    var n = this;
                    return (
                      void 0 === t && (t = !1),
                      void 0 === i && (i = 1),
                      new Promise(function (r) {
                        (n.m_spine.timeScale = i), n.m_spine.setToSetupPose();
                        var o = n.m_spine.setAnimation(0, e, t);
                        o
                          ? (n.m_spine.setTrackEventListener(o, function () {}),
                            n.m_spine.setTrackCompleteListener(o, function () {
                              r();
                            }))
                          : n.m_spine.setCompleteListener(function () {
                              r();
                            });
                      })
                    );
                  }),
                  t
                );
              })(Component)),
              (_descriptor$2 = _applyDecoratedDescriptor(
                _class2$3.prototype,
                "m_spine",
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
              (_class$3 = _class2$3))
            ) || _class$3),
          _dec$3,
          _dec2$3,
          _dec3$1,
          _class$4,
          _class2$4,
          _descriptor$3,
          _descriptor2$2;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "909d5KFAgVKPpHucWjrJ5PW",
            "Symbol12Spine",
            void 0
          );
        var AnimName$1 = {
            Win: "Win",
            Collect: "Collect",
            Stop: "Stop",
            Open: "Open",
          },
          ccclass$4 = _decorator.ccclass,
          property$3 = _decorator.property,
          Symbol12Spine =
            ((_dec$3 = ccclass$4("Symbol12Spine")),
            (_dec2$3 = property$3({ type: Label, tooltip: "Nudge次數" })),
            (_dec3$1 = property$3({
              type: Prefab,
              tooltip: "飛到MultiBar的亮光",
            })),
            _dec$3(
              ((_class2$4 = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, n = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    n[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_nudgeTimes",
                      _descriptor$3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_FxBall",
                      _descriptor2$2,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.SetNudgeTimes = function (e) {
                    var t = e ? String(e) : "";
                    this.m_nudgeTimes.string = t;
                  }),
                  (i.ShowCollect = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$1.Collect)
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
                  (i.ShowStop = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$1.Stop)
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
                  (i.ShowOpen = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$1.Open)
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
                  t
                );
              })(SymbolSpine)),
              (_descriptor$3 = _applyDecoratedDescriptor(
                _class2$4.prototype,
                "m_nudgeTimes",
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
              (_descriptor2$2 = _applyDecoratedDescriptor(
                _class2$4.prototype,
                "m_FxBall",
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
              (_class$4 = _class2$4))
            ) || _class$4),
          _dec$4,
          _class$5;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "7d237BOU51DSp7yOgfXS4jg",
            "ScatterSpine",
            void 0
          );
        var AnimName$2 = {
            Idle: "Idle",
            NearWin: "NearWin",
            Stop: "Stop",
            Win: "Win",
          },
          ccclass$5 = _decorator.ccclass,
          property$4 = _decorator.property,
          ScatterSpine =
            ((_dec$4 = ccclass$5("ScatterSpine")),
            _dec$4(
              (_class$5 = (function (e) {
                function t() {
                  return e.apply(this, arguments) || this;
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.ShowStop = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$2.Stop)
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
                  (i.ShowIdle = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$2.Idle)
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
                  (i.ShowNearWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$2.NearWin, !0)
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
                  t
                );
              })(SymbolSpine))
            ) || _class$5),
          _dec$5,
          _dec2$4,
          _dec3$2,
          _dec4,
          _dec5,
          _dec6,
          _dec7,
          _class$6,
          _class2$5,
          _descriptor$4,
          _descriptor2$3,
          _descriptor3$1,
          _descriptor4,
          _descriptor5,
          _descriptor6,
          _descriptor7;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "148cf/p/slH44hKEZO41KHU",
            "EffectPlate",
            void 0
          );
        var ccclass$6 = _decorator.ccclass,
          property$5 = _decorator.property,
          EffectPlate =
            ((_dec$5 = property$5({ type: SlotReels, tooltip: "轉輪" })),
            (_dec2$4 = property$5({
              type: Node,
              tooltip: "symbol相關表演的節點",
            })),
            (_dec3$2 = property$5({ type: Prefab, tooltip: "NearWin特效" })),
            (_dec4 = property$5({ type: Prefab, tooltip: "動態Symbol特效" })),
            (_dec5 = property$5({ type: Prefab, tooltip: "Symbol外框特效" })),
            (_dec6 = property$5({
              type: Prefab,
              tooltip: "飛到MultiBar的亮光",
            })),
            (_dec7 = property$5({
              type: Node,
              tooltip: "甲蟲飛行終點(中間桿)",
            })),
            ccclass$6(
              ((_class2$5 = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, n = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    n[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_slotReels",
                      _descriptor$4,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_effectNode",
                      _descriptor2$3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_nearWinPrefab",
                      _descriptor3$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_symbolPrefabs",
                      _descriptor4,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_symbolWinPrefab",
                      _descriptor5,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_FxBallPrefab",
                      _descriptor6,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_flyTargetNode",
                      _descriptor7,
                      _assertThisInitialized(t)
                    ),
                    (t.m_fxBallNode = null),
                    (t.m_isFG = !1),
                    (t.m_gameView = null),
                    (t.m_symbolEffectNodes = new Array()),
                    (t.m_nearWinEffectNodes = [null, null, null]),
                    (t.m_singleLineAni = null),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.onLoad = function () {
                    for (var e = 0; e < Game_Define.NORMAL_SYMBOL_NUMBER; e++) {
                      for (var t = new Array(), i = 0; i < COL; i++) {
                        for (var n = new Array(), r = 0; r < ROW; r++)
                          n.push(null);
                        t.push(n);
                      }
                      this.m_symbolEffectNodes.push(t);
                    }
                  }),
                  (i.Init = function (e, t) {
                    void 0 === t && (t = !1),
                      (this.m_gameView = e),
                      (this.m_isFG = t);
                  }),
                  (i.Prepare = function () {
                    for (var e = 0; e < this.m_nearWinEffectNodes.length; e++) {
                      (this.m_nearWinEffectNodes[e] = instantiate(
                        this.m_nearWinPrefab
                      )),
                        this.m_effectNode.addChild(
                          this.m_nearWinEffectNodes[e]
                        ),
                        (this.m_nearWinEffectNodes[e].active = !1);
                      var t = this.m_slotReels.GetAwardSymbolPosition(
                        e + 2,
                        0
                      ).x;
                      this.m_nearWinEffectNodes[e].setPosition(v3(t, 0));
                    }
                    (this.m_fxBallNode = instantiate(this.m_FxBallPrefab)),
                      this.m_gameView.node.addChild(this.m_fxBallNode),
                      (this.m_fxBallNode.getComponent(UIOpacity).opacity = 0);
                  }),
                  (i.ShowScatterSymbolEffect = function (e) {
                    for (var t = !0, i = 0; i < e.length; i++)
                      for (var n = 0; n < e[i].length; n++) {
                        var r = e[i][n];
                        if (r === Game_Define.Symbol.SymbolScatter) {
                          t &&
                            ((t = !1),
                            this.m_slotReels.ShowDarkOrLightSymbol(!0));
                          var o = this.m_slotReels.GetSymbolByIndex(v3(i, n));
                          o.active = !1;
                          var s = this.m_symbolEffectNodes[r][i][n];
                          s
                            ? (s.active = !0)
                            : this.m_symbolPrefabs[r] &&
                              ((s = instantiate(this.m_symbolPrefabs[r])),
                              this.m_effectNode.addChild(s),
                              this.SetEffectNodeZIndex(s, r, n, i),
                              s.setPosition(o.position),
                              (this.m_symbolEffectNodes[r][i][n] = s)),
                            s &&
                              (this.SetEffectNodeZIndex(s, r, n, i),
                              s.getComponent(ScatterSpine).ShowWin(!0));
                        }
                      }
                  }),
                  (i.ShowScatterNearWin = function (e, t) {
                    for (var i = 0; i < e.length; i++)
                      for (var n = 0; n < e[i].length; n++) {
                        var r = e[i][n];
                        if (r === Game_Define.Symbol.SymbolScatter && i < t) {
                          var o = this.m_slotReels.GetSymbolByIndex(v3(i, n));
                          log("symbolNode:", o), log(o.name), (o.active = !1);
                          var s = this.m_symbolEffectNodes[r][i][n];
                          if (s) s.active = !0;
                          else if (this.m_symbolPrefabs[r]) {
                            (s = instantiate(this.m_symbolPrefabs[r])),
                              this.m_effectNode.addChild(s),
                              this.SetEffectNodeZIndex(s, r, n, i);
                            var a =
                              this.m_gameView.SlotReels.GetAwardSymbolPosition(
                                i,
                                n
                              );
                            s.setPosition(a),
                              (this.m_symbolEffectNodes[r][i][n] = s);
                          }
                          s &&
                            (this.SetEffectNodeZIndex(s, r, n, i),
                            s.getComponent(ScatterSpine).ShowNearWin());
                        }
                      }
                  }),
                  (i.ShowAllSymbolEffect = function (e, t) {
                    var i = !0;
                    if (t.length > 0)
                      for (var n = 0; n < t.length; n++)
                        if (
                          (null == t[n].Line && (t[n].Line = 0),
                          t[n].Symbol != Game_Define.Symbol.SymbolScatter)
                        )
                          for (
                            var r = Game_Define.SYMBOL_LINE_VEC[t[n].Line],
                              o = this.PosNumToVec3(r),
                              s = 0;
                            s < t[n].Count;
                            s++
                          ) {
                            i &&
                              ((i = !1),
                              this.m_slotReels.ShowDarkOrLightSymbol(!0));
                            var a = e[o[s].x][o[s].y],
                              l = this.m_slotReels.GetSymbolByIndex(o[s]);
                            l.active = !1;
                            var u = this.m_symbolEffectNodes[a][o[s].x][o[s].y];
                            if (
                              (u
                                ? (u.active = !0)
                                : this.m_symbolPrefabs[a] &&
                                  ((u = instantiate(this.m_symbolPrefabs[a])),
                                  this.m_effectNode.addChild(u),
                                  this.SetEffectNodeZIndex(
                                    u,
                                    a,
                                    o[s].y,
                                    o[s].x
                                  ),
                                  u.setPosition(l.position),
                                  (this.m_symbolEffectNodes[a][o[s].x][o[s].y] =
                                    u)),
                              u)
                            ) {
                              this.SetEffectNodeZIndex(u, a, o[s].y, o[s].x),
                                this.m_isFG &&
                                  u.setScale(
                                    v3(
                                      Game_Define.SYMBOL_SCALE_IN_FG,
                                      Game_Define.SYMBOL_SCALE_IN_FG
                                    )
                                  );
                              var c = u.getComponent(Animation);
                              if (c) c.play();
                              else u.getComponent(SymbolSpine).ShowWin(!1);
                            }
                          }
                  }),
                  (i.ShowSingleLineEffect = function (e, t) {
                    var i = this,
                      n = t.length,
                      r = 0;
                    this.m_singleLineAni = tween(this.node)
                      .repeatForever(
                        tween()
                          .call(function () {
                            for (var o = 0; o < e.length; o++)
                              for (var s = 0; s < e[o].length; s++) {
                                var a = e[o][s];
                                i.m_slotReels.GetSymbolByIndex(
                                  v3(o, s)
                                ).active = !0;
                                var l = i.m_symbolEffectNodes[a][o][s];
                                l && (l.active = !1);
                              }
                            var u = t[r];
                            11 == u.Symbol && (u.Count = 0);
                            for (
                              var c = Game_Define.SYMBOL_LINE_VEC[u.Line],
                                m = i.PosNumToVec3(c),
                                _ = 0;
                              _ < u.Count;
                              _++
                            ) {
                              var p = m[_].x,
                                d = m[_].y,
                                h = i.m_symbolEffectNodes[e[p][d]][p][d],
                                f = i.m_slotReels.GetSymbolByIndex(v3(p, d));
                              if (!h) break;
                              !(function () {
                                (f.active = !1),
                                  (h.active = !0),
                                  h.setPosition(
                                    i.m_slotReels.GetAwardSymbolPosition(p, d)
                                  );
                                var e = h.getComponent(Animation),
                                  t = h.getComponent(SymbolSpine);
                                e
                                  ? (e.play(),
                                    tween(i.node)
                                      .delay(1)
                                      .call(function () {
                                        e.play();
                                      })
                                      .start())
                                  : t && t.ShowWin(!0);
                              })();
                            }
                            r < n - 1 ? r++ : (r = 0);
                          })
                          .delay(Game_Define.DELAYTIME.AWARD_ALL_TO_SINGLE)
                      )
                      .start();
                  }),
                  (i.HideSymbolEffect = function (e) {
                    if ((void 0 === e && (e = !1), this.m_gameView.SpinAck))
                      for (
                        var t =
                            this.m_gameView.SpinAck.RoundQueue[
                              this.m_gameView.RoundIdx
                            ],
                          i = this.m_gameView.PlateInfoTo2DArray(t.PlateSymbol),
                          n = 0;
                        n < this.m_symbolEffectNodes.length;
                        n++
                      )
                        if (this.m_symbolEffectNodes[n])
                          for (
                            var r = 0;
                            r < this.m_symbolEffectNodes[n].length;
                            r++
                          )
                            if (this.m_symbolEffectNodes[n][r])
                              for (
                                var o = 0;
                                o < this.m_symbolEffectNodes[n][r].length;
                                o++
                              )
                                if (
                                  this.m_symbolEffectNodes[n][r][o] &&
                                  this.m_symbolEffectNodes[n][r][o].active
                                ) {
                                  var s = this.m_symbolEffectNodes[n][r][o],
                                    a = s.getComponent(Animation);
                                  if (a)
                                    if (e) {
                                      var l = a.getState("Nearwin");
                                      l.setTime(0), a.stop(), l.sample();
                                    } else {
                                      var u = void 0;
                                      (u =
                                        i[r][o] >=
                                          Game_Define.Symbol.SymbolJar &&
                                        i[r][o] <= Game_Define.Symbol.SymbolRing
                                          ? a.getState("Symbol_05_08_action")
                                          : i[r][o] ==
                                            Game_Define.Symbol.SymbolChest
                                          ? a.getState("Symbol_09_action")
                                          : a.getState("Win")).setTime(0),
                                        a.stop(),
                                        u.sample();
                                    }
                                  else s.getComponent(SymbolSpine).Hide();
                                  (this.m_symbolEffectNodes[n][r][o].active =
                                    !1),
                                    (this.m_slotReels.GetSymbolByIndex(
                                      v3(r, o)
                                    ).active = !0);
                                }
                  }),
                  (i.StopSingleLineEffect = function () {
                    this.m_singleLineAni &&
                      (this.m_singleLineAni.stop(),
                      (this.m_singleLineAni = null)),
                      Tween.stopAllByTarget(this.node);
                  }),
                  (i.ShowNearWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var i,
                          n = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  this.m_nearWinEffectNodes &&
                                    ((i = t - 2),
                                    (this.m_nearWinEffectNodes[i].active = !0),
                                    this.m_nearWinEffectNodes[i]
                                      .getComponent(Animation)
                                      .play(),
                                    tween(
                                      this.m_nearWinEffectNodes[i].getComponent(
                                        UIOpacity
                                      )
                                    )
                                      .to(0.1, { opacity: 255 })
                                      .delay(
                                        Game_Define.DELAYTIME.NEARWIN[0] + 0.2
                                      )
                                      .to(0.2, { opacity: 0.1 })
                                      .call(function () {
                                        n.m_nearWinEffectNodes[i].active = !1;
                                      })
                                      .start());
                                case 1:
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
                  (i.HideNearWin = function () {
                    if (this.m_nearWinEffectNodes)
                      for (var e = 0; e < this.m_nearWinEffectNodes.length; e++)
                        this.m_nearWinEffectNodes[e].active = !1;
                  }),
                  (i.PosNumToVec3 = function (e) {
                    void 0 === e && (e = [0, 4, 8, 12, 16]);
                    for (var t = new Array(), i = 0; i < COL; i++)
                      t[i] = Game_Define.SYMBOL_POS[e[i]];
                    return t;
                  }),
                  (i.ShowNudgeSymbolEffectOpen = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, i) {
                        var n, r, o, s, a, l, u, c;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  n = 0;
                                case 1:
                                  if (!(n < t.length)) {
                                    e.next = 26;
                                    break;
                                  }
                                  r = 0;
                                case 3:
                                  if (!(r < t[n].length)) {
                                    e.next = 23;
                                    break;
                                  }
                                  if (
                                    (o = t[n][r]) !==
                                    Game_Define.Symbol.SymbolNudge
                                  ) {
                                    e.next = 20;
                                    break;
                                  }
                                  if (
                                    (((s = this.m_slotReels.GetSymbolByIndex(
                                      v3(n, r)
                                    )).active = !1),
                                    (a = this.m_symbolEffectNodes[o][n][r])
                                      ? (a.active = !0)
                                      : this.m_symbolPrefabs[o] &&
                                        ((a = instantiate(
                                          this.m_symbolPrefabs[o]
                                        )),
                                        this.m_effectNode.addChild(a),
                                        this.SetEffectNodeZIndex(a, o, r, n),
                                        a.setPosition(s.position),
                                        (this.m_symbolEffectNodes[o][n][r] =
                                          a)),
                                    !a)
                                  ) {
                                    e.next = 20;
                                    break;
                                  }
                                  return (
                                    this.SetEffectNodeZIndex(a, o, r, n),
                                    (l = s
                                      .getComponent(UITransform)
                                      .convertToWorldSpaceAR(v3(0, 0, 0))),
                                    (u = this.m_gameView.node
                                      .getComponent(UITransform)
                                      .convertToNodeSpaceAR(l)),
                                    this.m_fxBallNode.setPosition(u),
                                    (c =
                                      a.getComponent(
                                        Symbol12Spine
                                      )).SetNudgeTimes(i),
                                    node$1.Play(
                                      Game_Define.AudioClips.Nudge_Touch
                                    ),
                                    (e.next = 20),
                                    c.ShowOpen()
                                  );
                                case 20:
                                  r++, (e.next = 3);
                                  break;
                                case 23:
                                  n++, (e.next = 1);
                                  break;
                                case 26:
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
                  (i.GetNudgeFlyDuration = function () {
                    var e = this.m_fxBallNode.getPosition(),
                      t = this.m_flyTargetNode
                        .getComponent(UITransform)
                        .convertToWorldSpaceAR(v3(0, 0, 0)),
                      i = this.m_gameView.node
                        .getComponent(UITransform)
                        .convertToNodeSpaceAR(t),
                      n = this.m_gameView.IsLandscape
                        ? Game_Define.SPEED.NUDGE_FLY_TO_MULTI_L
                        : Game_Define.SPEED.NUDGE_FLY_TO_MULTI_S;
                    return this.GetDistance(e, i) / n;
                  }),
                  (i.FlyNudgeSymbolToMultiBar = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var i,
                          n,
                          r,
                          o,
                          s,
                          a,
                          l,
                          u,
                          c,
                          m,
                          _,
                          p,
                          d = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (n = 0; n < t.length; n++)
                                    for (r = 0; r < t[n].length; r++)
                                      (o = t[n][r]) ===
                                        Game_Define.Symbol.SymbolNudge &&
                                        ((this.m_slotReels.GetSymbolByIndex(
                                          v3(n, r)
                                        ).active = !1),
                                        (this.m_fxBallNode.getComponent(
                                          UIOpacity
                                        ).opacity = 255),
                                        (s = this.m_flyTargetNode),
                                        (a = s
                                          .getComponent(UITransform)
                                          .convertToWorldSpaceAR(v3(0, 0, 0))),
                                        (l = this.m_gameView.node
                                          .getComponent(UITransform)
                                          .convertToNodeSpaceAR(a)),
                                        (u = this.m_fxBallNode.getPosition()),
                                        (c = this.m_gameView.IsLandscape
                                          ? Game_Define.SPEED
                                              .NUDGE_FLY_TO_MULTI_L
                                          : Game_Define.SPEED
                                              .NUDGE_FLY_TO_MULTI_S),
                                        (i = this.GetDistance(u, l) / c),
                                        (m = this.GetBezierPos(u, l)),
                                        (_ = this.BezierTo(
                                          this.m_fxBallNode,
                                          i,
                                          u,
                                          m,
                                          l,
                                          "backIn"
                                        )),
                                        (p = this.m_symbolEffectNodes[o][n][r]),
                                        p
                                          .getComponent(Symbol12Spine)
                                          .ShowCollect(),
                                        tween(this.m_fxBallNode)
                                          .then(_)
                                          .call(function () {
                                            tween(
                                              d.m_fxBallNode.getComponent(
                                                UIOpacity
                                              )
                                            )
                                              .to(0.2, { opacity: 0 })
                                              .start();
                                          })
                                          .start());
                                  return (e.next = 3), node$3.Wait(this, i);
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
                  (i.ShowNudgeSymbolEffectStop = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, i) {
                        var n, r, o, s, a, l;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  n = 0;
                                case 1:
                                  if (!(n < t.length)) {
                                    e.next = 21;
                                    break;
                                  }
                                  r = 0;
                                case 3:
                                  if (!(r < t[n].length)) {
                                    e.next = 18;
                                    break;
                                  }
                                  if (
                                    (o = t[n][r]) !==
                                    Game_Define.Symbol.SymbolNudge
                                  ) {
                                    e.next = 15;
                                    break;
                                  }
                                  if (
                                    (((s = this.m_slotReels.GetSymbolByIndex(
                                      v3(n, r)
                                    )).active = !1),
                                    (a = this.m_symbolEffectNodes[o][n][r])
                                      ? (a.active = !0)
                                      : this.m_symbolPrefabs[o] &&
                                        ((a = instantiate(
                                          this.m_symbolPrefabs[o]
                                        )),
                                        this.m_effectNode.addChild(a),
                                        a.setPosition(s.position),
                                        (this.m_symbolEffectNodes[o][n][r] =
                                          a)),
                                    !a)
                                  ) {
                                    e.next = 15;
                                    break;
                                  }
                                  return (
                                    (l =
                                      a.getComponent(
                                        Symbol12Spine
                                      )).SetNudgeTimes(i),
                                    (e.next = 15),
                                    l.ShowStop()
                                  );
                                case 15:
                                  r++, (e.next = 3);
                                  break;
                                case 18:
                                  n++, (e.next = 1);
                                  break;
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
                    return function (t, i) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (i.FlyMultiToWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var i, n, r, o;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.m_gameView.MultiReels.FlyMultiLabel.string =
                                      this.m_gameView.MultiReels.TotalMultiLabel.string),
                                    (this.m_gameView.MultiReelsS.FlyMultiLabel.string =
                                      this.m_gameView.MultiReelsS.TotalMultiLabel.string),
                                    this.m_gameView.IsLandscape
                                      ? ((n =
                                          this.m_gameView.MultiReels
                                            .FlyMultiNode),
                                        (i = n
                                          .getComponent(UITransform)
                                          .convertToWorldSpaceAR(v3(0, 0, 0))))
                                      : ((n =
                                          this.m_gameView.MultiReelsS
                                            .FlyMultiNode),
                                        (i = n
                                          .getComponent(UITransform)
                                          .convertToWorldSpaceAR(v3(0, 0, 0)))),
                                    (r = this.m_gameView.WinValueLabel.node
                                      .getComponent(UITransform)
                                      .convertToWorldSpaceAR(v3(0, 0, 0))),
                                    (n.getComponent(UIOpacity).opacity = 255),
                                    (o =
                                      this.GetDistance(i, r) /
                                      Game_Define.SPEED.MULTI_FLY_TO_WIN),
                                    this.FlyNode(i, r, n, o),
                                    (e.next = 9),
                                    node$3.Wait(this.m_gameView, o)
                                  );
                                case 9:
                                  this.m_gameView.PlaySamllWinSound(t),
                                    this.m_gameView.WinFxShowSpine.MultiWin(),
                                    (this.m_gameView.WinValueLabel.string =
                                      node.FormatNumberThousands(
                                        node$4.GetDisplayValue(t),
                                        node.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                                      )),
                                    this.ZoomNode(
                                      this.m_gameView.WinValueLabel.node
                                    );
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (i.ZoomNode = function (e) {
                    tween(e)
                      .to(0.1, { scale: v3(1.3, 1.3) }, { easing: "cubicOut" })
                      .to(0.1, { scale: v3(1, 1) }, { easing: "cubicIn" })
                      .start();
                  }),
                  (i.ZoomFgCountNode = function (e, t, i) {
                    tween(e)
                      .to(0.1, { scale: t }, { easing: "cubicOut" })
                      .to(0.1, { scale: i }, { easing: "cubicIn" })
                      .start();
                  }),
                  (i.FlyNode = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, i, n, r) {
                        var o,
                          s,
                          a = this;
                        return _regeneratorRuntime().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (o = n.position.clone()),
                                  ((s = new Vec3()).x =
                                    i.x - t.x + n.position.x),
                                  (s.y = i.y - t.y + n.position.y),
                                  (s.z = i.z - t.z + n.position.z),
                                  tween(n)
                                    .to(
                                      r,
                                      { position: s },
                                      { easing: "quintIn" }
                                    )
                                    .call(function () {
                                      (n.getComponent(UIOpacity).opacity = 0),
                                        tween(
                                          a.m_fxBallNode.getComponent(UIOpacity)
                                        )
                                          .to(0.1, { opacity: 0 })
                                          .call(function () {
                                            n.setPosition(o);
                                          })
                                          .start();
                                    })
                                    .start();
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t, i, n, r) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (i.GetDistance = function (e, t) {
                    var i = v2(t.x - e.x, t.y - e.y);
                    return Math.sqrt(i.x * i.x + i.y * i.y);
                  }),
                  (i.GetMidPos = function (e, t) {
                    return v3((e.x + t.x) / 2, (e.y + t.y) / 2, 0);
                  }),
                  (i.GetBezierPos = function (e, t) {
                    var i = e.x,
                      n = e.y,
                      r = t.x,
                      o = t.y,
                      s = v3((i + n + r - o) / 2, (n + r + o - i) / 2),
                      a = s.x,
                      l = s.y,
                      u = this.GetDistance(s, t),
                      c = this.GetDistance(e, s),
                      m = this.GetDistance(e, t);
                    return v3(
                      (u * i + c * r + m * a) / (u + c + m),
                      (u * n + c * o + m * l) / (u + c + m)
                    );
                  }),
                  (i.BezierTo = function (e, t, i, n, r, o) {
                    return tween(e).to(
                      t,
                      { position: n },
                      {
                        onUpdate: function (t, o) {
                          var s, a, l, u, c, m, _;
                          e.position =
                            ((l = n),
                            (u = r),
                            (c =
                              (1 - (s = o)) * (1 - s) * (a = i).x +
                              2 * s * (1 - s) * l.x +
                              s * s * u.x),
                            (m =
                              (1 - s) * (1 - s) * a.y +
                              2 * s * (1 - s) * l.y +
                              s * s * u.y),
                            (_ =
                              (1 - s) * (1 - s) * a.z +
                              2 * s * (1 - s) * l.z +
                              s * s * u.z),
                            v3(c, m, _));
                        },
                        easing: o,
                      }
                    );
                  }),
                  (i.ShakeWorld = function () {
                    var e = this.m_gameView.node,
                      t = Game_Define.ShakeWorld.SPEED,
                      i = Game_Define.ShakeWorld.DELTA,
                      n = Game_Define.ShakeWorld.TIMES,
                      r = e.position.x,
                      o = e.position.y;
                    return (
                      tween(e)
                        .repeat(
                          n,
                          tween()
                            .to(t, { position: v3(r + i, o + i) })
                            .to(t, { position: v3(r - i, o - i) })
                            .to(t, { position: v3(r - i, o + i) })
                            .to(t, { position: v3(r, o) })
                        )
                        .start(),
                      4 * t * n
                    );
                  }),
                  (i.SetEffectNodeZIndex = function (e, t, i, n) {
                    var r = 0;
                    switch (
                      ((r =
                        t == Game_Define.Symbol.SymbolScatter
                          ? Game_Define.EffectNodeZIndex.SCATTER
                          : t == Game_Define.Symbol.SymbolNudge
                          ? Game_Define.EffectNodeZIndex.NUDGE
                          : t == Game_Define.Symbol.SymbolWild
                          ? Game_Define.EffectNodeZIndex.WILD
                          : Game_Define.EffectNodeZIndex.NORMAL),
                      i)
                    ) {
                      case 1:
                        r += 10;
                        break;
                      case 2:
                        r += 20;
                        break;
                      case 3:
                        r += 30;
                    }
                    switch (n) {
                      case 1:
                        r += 1;
                        break;
                      case 2:
                        r += 2;
                        break;
                      case 3:
                        r += 3;
                        break;
                      case 4:
                        r += 4;
                    }
                    node.SetOrderedZindex(e, r);
                  }),
                  t
                );
              })(Component)),
              (_descriptor$4 = _applyDecoratedDescriptor(
                _class2$5.prototype,
                "m_slotReels",
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
                "m_effectNode",
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
              (_descriptor3$1 = _applyDecoratedDescriptor(
                _class2$5.prototype,
                "m_nearWinPrefab",
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
              (_descriptor4 = _applyDecoratedDescriptor(
                _class2$5.prototype,
                "m_symbolPrefabs",
                [_dec4],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor5 = _applyDecoratedDescriptor(
                _class2$5.prototype,
                "m_symbolWinPrefab",
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
              (_descriptor6 = _applyDecoratedDescriptor(
                _class2$5.prototype,
                "m_FxBallPrefab",
                [_dec6],
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
                _class2$5.prototype,
                "m_flyTargetNode",
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
              (_class$6 = _class2$5))
            ) || _class$6),
          _dec$6,
          _dec2$5,
          _class$7,
          _class2$6,
          _descriptor$5,
          _descriptor2$4;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "e0ecfODTplHyK6BW/6cqLce", "FGWin", void 0);
        var AnimName$3 = {
            Start: "FG_result_start",
            Loop: "FG_result_loop",
            Congrats: "FG_Congrats",
          },
          ccclass$7 = _decorator.ccclass,
          property$6 = _decorator.property,
          FGWin =
            ((_dec$6 = property$6({ type: Label, tooltip: "贏分" })),
            (_dec2$5 = property$6({ type: Animation, tooltip: "動畫" })),
            ccclass$7(
              ((_class2$6 = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, n = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    n[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_winLabel",
                      _descriptor$5,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_anim",
                      _descriptor2$4,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.Show = function (e, t) {
                    var i = this;
                    (this.node.active = !0),
                      (this.node.getComponent(UIOpacity).opacity = 255),
                      this.ShowAnim();
                    var n = node.divide(
                        Game_Define.DELAYTIME.FG_WIN_RUNNING,
                        0.05
                      ),
                      r = node.divide(e, n),
                      o = 0;
                    tween(this.m_winLabel.node)
                      .repeat(
                        n,
                        tween().sequence(
                          tween().call(function () {
                            (o += r) >= e && (o = e),
                              (i.m_winLabel.string = node.FormatNumberThousands(
                                Game_Define.ShowDisplayValue
                                  ? Game_Define.ShowDisplayValue(o)
                                  : o,
                                node.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                              ));
                          }),
                          tween().delay(0.05)
                        )
                      )
                      .call(function () {
                        i.m_winLabel.string = node.FormatNumberThousands(
                          Game_Define.ShowDisplayValue
                            ? Game_Define.ShowDisplayValue(e)
                            : e,
                          node.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                        );
                      })
                      .delay(Game_Define.DELAYTIME.FG_WIN_STAY)
                      .call(function () {
                        tween(i.node.getComponent(UIOpacity))
                          .to(0.5, { opacity: 0.1 })
                          .call(function () {
                            (i.node.active = !1), t && t();
                          })
                          .start();
                      })
                      .start();
                  }),
                  (i.ShowAnim = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  this.m_anim.play(AnimName$3.Congrats);
                                case 1:
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
                  t
                );
              })(Component)),
              (_descriptor$5 = _applyDecoratedDescriptor(
                _class2$6.prototype,
                "m_winLabel",
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
                "m_anim",
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
              (_class$7 = _class2$6))
            ) || _class$7);
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "c2f87iUzPlP3qq1dOt+hrU4",
            "FeaturesAck",
            void 0
          );
        var FeaturesAck = function () {},
          _dec$7,
          _dec2$6,
          _dec3$3,
          _class$8,
          _class2$7,
          _descriptor$6,
          _descriptor2$5,
          _descriptor3$2;
        (FeaturesAck.MG = {
          RoundQueue: [
            {
              PlateSymbol: [
                { Col: [8, 1, 10, 0] },
                { Col: [0, 10, 1, 8] },
                { Col: [5, 6, 3, 8] },
                { Col: [8, 3, 6, 5] },
                { Col: [8, 12, 10, 0] },
              ],
              AwardDataVec: [
                { Symbol: 3, Count: 5, Line: 7, Win: 84, Mult: 84 },
                { Symbol: 5, Count: 3, Line: 12, Win: 84, Mult: 84 },
              ],
              AwardTypeFlag: 17,
              RoundWin: 168,
              NudgeMult: 84,
              Nudge: 25,
              NudgeReelResult: [
                2, 2, 4, 2, 2, 3, 2, 2, 3, 2, 2, 4, 2, 2, 3, 20, 2, 2, 3, 2, 2,
                4, 2, 2, 3, 2, 2, 5, 2, 2,
              ],
            },
          ],
          TotalWin: 168,
          ShowIndex: "16950-242690-15297180",
          NowMoney: 5000673.8,
          FreeTotalWin: 0,
          AckType: 0,
        }),
          (FeaturesAck.FG = {
            RoundQueue: [
              {
                PlateSymbol: [
                  { Col: [0, 11, 2, 7] },
                  { Col: [12, 9, 11, 0] },
                  { Col: [10, 0, 11, 2] },
                  { Col: [5, 4, 11, 2] },
                  { Col: [7, 11, 5, 6] },
                ],
                AwardDataVec: [
                  { Count: 3, Win: 3.2, Mult: 16, Line: 0 },
                  { Count: 3, Line: 14, Win: 3.2, Mult: 16 },
                  { Symbol: 11, Count: 5, Win: 20, Mult: 1, Line: 0 },
                ],
                FreeTotalRound: 10,
                AwardTypeFlag: 19,
                FreeRemainRound: 10,
                RoundWin: 26.4,
                NudgeMult: 16,
                Nudge: 5,
                NudgeReelResult: [4, 2, 2, 3, 2, 2, 5, 2, 2, 4],
              },
              {
                PlateSymbol: [
                  { Col: [10, 0, 9, 2] },
                  { Col: [10, 1, 8, 3] },
                  { Col: [4, 5, 6, 3] },
                  { Col: [8, 3, 12, 5] },
                  { Col: [0, 9, 2, 7] },
                ],
                AwardDataVec: [
                  { Symbol: 4, Count: 3, Win: 3.6, Mult: 18, Line: 0 },
                  { Symbol: 5, Count: 3, Line: 14, Win: 18, Mult: 18 },
                ],
                FreeTotalRound: 10,
                AwardTypeFlag: 21,
                FreeRemainRound: 9,
                RoundWin: 21.6,
                NudgeMult: 18,
                NudgeReelResult: [4, 2, 2, 3, 2],
              },
              {
                PlateSymbol: [
                  { Col: [0, 9, 2, 7] },
                  { Col: [3, 6, 12, 4] },
                  { Col: [2, 7, 4, 5] },
                  { Col: [4, 7, 2, 9] },
                  { Col: [7, 4, 5, 6] },
                ],
                AwardDataVec: [
                  { Symbol: 7, Count: 3, Line: 13, Win: 30, Mult: 20 },
                ],
                FreeTotalRound: 10,
                AwardTypeFlag: 21,
                FreeRemainRound: 8,
                RoundWin: 30,
                NudgeMult: 20,
                NudgeReelResult: [10, 2, 2, 3, 2],
              },
              {
                PlateSymbol: [
                  { Col: [4, 5, 6, 12] },
                  { Col: [5, 4, 7, 2] },
                  { Col: [3, 8, 1, 10] },
                  { Col: [10, 1, 8, 3] },
                  { Col: [0, 9, 2, 7] },
                ],
                AwardDataVec: [
                  { Symbol: 2, Count: 3, Line: 3, Win: 6.2, Mult: 31 },
                  { Symbol: 7, Count: 3, Line: 9, Win: 46.5, Mult: 31 },
                ],
                FreeTotalRound: 10,
                AwardTypeFlag: 21,
                FreeRemainRound: 7,
                RoundWin: 52.7,
                NudgeMult: 31,
                Nudge: 3,
                NudgeReelResult: [2, 2, 4, 2, 2, 3, 2, 2],
              },
              {
                PlateSymbol: [
                  { Col: [0, 9, 2, 7] },
                  { Col: [12, 10, 1, 8] },
                  { Col: [0, 9, 2, 7] },
                  { Col: [11, 1, 8, 3] },
                  { Col: [7, 4, 5, 6] },
                ],
                AwardDataVec: [
                  { Count: 3, Win: 12.2, Mult: 61, Line: 0 },
                  { Symbol: 9, Count: 3, Line: 1, Win: 122, Mult: 61 },
                  { Count: 3, Line: 4, Win: 12.2, Mult: 61 },
                  { Symbol: 9, Count: 3, Line: 5, Win: 122, Mult: 61 },
                  { Symbol: 2, Count: 3, Line: 7, Win: 12.2, Mult: 61 },
                ],
                FreeTotalRound: 10,
                AwardTypeFlag: 21,
                FreeRemainRound: 6,
                RoundWin: 280.6,
                NudgeMult: 61,
                Nudge: 10,
                NudgeReelResult: [3, 2, 2, 4, 2, 2, 3, 2, 2, 5, 2, 2, 4, 2, 2],
              },
              {
                PlateSymbol: [
                  { Col: [5, 6, 3, 8] },
                  { Col: [5, 4, 12, 2] },
                  { Col: [6, 3, 8, 1] },
                  { Col: [9, 0, 10, 1] },
                  { Col: [7, 4, 5, 6] },
                ],
                AwardDataVec: [
                  { Symbol: 3, Count: 4, Line: 17, Win: 34.5, Mult: 69 },
                ],
                FreeTotalRound: 10,
                AwardTypeFlag: 21,
                FreeRemainRound: 5,
                RoundWin: 34.5,
                NudgeMult: 69,
                Nudge: 2,
                NudgeReelResult: [2, 2, 4, 2, 2, 3, 15],
              },
              {
                PlateSymbol: [
                  { Col: [4, 5, 6, 3] },
                  { Col: [10, 1, 8, 3] },
                  { Col: [5, 6, 12, 8] },
                  { Col: [7, 2, 9, 0] },
                  { Col: [5, 6, 3, 8] },
                ],
                AwardDataVec: [
                  { Symbol: 3, Count: 3, Line: 19, Win: 14.8, Mult: 74 },
                ],
                FreeTotalRound: 10,
                AwardTypeFlag: 21,
                FreeRemainRound: 4,
                RoundWin: 14.8,
                NudgeMult: 74,
                NudgeReelResult: [2, 2, 5, 2, 2],
              },
              {
                PlateSymbol: [
                  { Col: [1, 10, 0, 9] },
                  { Col: [11, 1, 8, 3] },
                  { Col: [3, 8, 12, 11] },
                  { Col: [9, 0, 10, 1] },
                  { Col: [1, 10, 0, 9] },
                ],
                AwardDataVec: [
                  { Symbol: 8, Count: 5, Line: 6, Win: 1275, Mult: 85 },
                  { Symbol: 1, Count: 3, Line: 10, Win: 17, Mult: 85 },
                  { Symbol: 1, Count: 3, Line: 16, Win: 17, Mult: 85 },
                ],
                FreeTotalRound: 10,
                AwardTypeFlag: 21,
                FreeRemainRound: 3,
                RoundWin: 1309,
                NudgeMult: 85,
                Nudge: 3,
                NudgeReelResult: [2, 2, 4, 2, 2, 3, 2, 2],
              },
              {
                PlateSymbol: [
                  { Col: [7, 4, 5, 6] },
                  { Col: [0, 10, 1, 12] },
                  { Col: [7, 4, 5, 6] },
                  { Col: [8, 3, 6, 5] },
                  { Col: [1, 10, 0, 9] },
                ],
                AwardDataVec: [
                  { Symbol: 4, Count: 3, Line: 1, Win: 17.4, Mult: 87 },
                  { Symbol: 6, Count: 3, Line: 3, Win: 87, Mult: 87 },
                  { Symbol: 7, Count: 3, Line: 4, Win: 130.5, Mult: 87 },
                  { Symbol: 5, Count: 3, Line: 7, Win: 87, Mult: 87 },
                  { Symbol: 5, Count: 4, Line: 8, Win: 174, Mult: 87 },
                ],
                FreeTotalRound: 10,
                AwardTypeFlag: 21,
                FreeRemainRound: 2,
                RoundWin: 495.9,
                NudgeMult: 87,
                NudgeReelResult: [2, 3, 2, 2, 4],
              },
              {
                PlateSymbol: [
                  { Col: [2, 12, 4, 5] },
                  { Col: [2, 9, 0, 11] },
                  { Col: [6, 3, 8, 1] },
                  { Col: [9, 0, 10, 1] },
                  { Col: [7, 4, 5, 6] },
                ],
                FreeTotalRound: 10,
                AwardTypeFlag: 4,
                FreeRemainRound: 1,
                NudgeMult: 87,
              },
              {
                PlateSymbol: [
                  { Col: [5, 6, 3, 8] },
                  { Col: [0, 10, 1, 8] },
                  { Col: [6, 12, 8, 1] },
                  { Col: [6, 5, 4, 7] },
                  { Col: [7, 4, 5, 6] },
                ],
                AwardDataVec: [
                  { Symbol: 6, Count: 3, Line: 1, Win: 96, Mult: 96 },
                  { Symbol: 6, Count: 3, Line: 15, Win: 96, Mult: 96 },
                  { Symbol: 8, Count: 3, Line: 19, Win: 144, Mult: 96 },
                ],
                FreeTotalRound: 10,
                AwardTypeFlag: 29,
                RoundWin: 336,
                NudgeMult: 96,
                Nudge: 3,
                NudgeReelResult: [2, 4, 2, 2, 3, 2, 2, 5],
              },
            ],
            FreeTotalRound: 10,
            FreeTotalWin: 2575.1,
            TotalWin: 2601.5,
            ShowIndex: "16950-242690-16837180",
            NowMoney: 5002865.5,
            AckType: 0,
          }),
          cclegacy._RF.pop(),
          cclegacy._RF.push({}, "d9acdSO3wVLmrSrBpujy3Vc", "FgCounter", void 0);
        var ccclass$8 = _decorator.ccclass,
          property$7 = _decorator.property,
          FgCounter =
            ((_dec$7 = property$7({ type: Label, tooltip: "FG剩餘次數" })),
            (_dec2$6 = property$7({ type: Label, tooltip: "FG總次數" })),
            (_dec3$3 = property$7({
              type: Sprite,
              tooltip: "FGEE SPINS 多語系文字",
            })),
            ccclass$8(
              ((_class2$7 = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, n = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    n[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_fgRemainRoundLabel",
                      _descriptor$6,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fgTotalRoundLabel",
                      _descriptor2$5,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fgTxtSprite",
                      _descriptor3$2,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.SetTxt = function (e) {
                    var t = node$5.GetGameAtlas();
                    this.m_fgTxtSprite.spriteFrame = e
                      ? t.getSpriteFrame("FG_multiply_txt")
                      : t.getSpriteFrame("FG_multiply_txtV");
                  }),
                  (i.SetEnterFree = function () {
                    (this.node.active = !0),
                      (this.m_fgRemainRoundLabel.string = "10"),
                      (this.m_fgTotalRoundLabel.string = "10");
                  }),
                  (i.SetLeaveFree = function () {
                    this.node.active = !1;
                  }),
                  _createClass(t, [
                    {
                      key: "FgRemainRoundLabel",
                      get: function () {
                        return this.m_fgRemainRoundLabel;
                      },
                    },
                    {
                      key: "FgTotalRoundLabel",
                      get: function () {
                        return this.m_fgTotalRoundLabel;
                      },
                    },
                  ]),
                  t
                );
              })(Component)),
              (_descriptor$6 = _applyDecoratedDescriptor(
                _class2$7.prototype,
                "m_fgRemainRoundLabel",
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
                "m_fgTotalRoundLabel",
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
              (_descriptor3$2 = _applyDecoratedDescriptor(
                _class2$7.prototype,
                "m_fgTxtSprite",
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
              (_class$8 = _class2$7))
            ) || _class$8),
          _dec$8,
          _dec2$7,
          _dec3$4,
          _dec4$1,
          _dec5$1,
          _dec6$1,
          _dec7$1,
          _class$9,
          _class2$8,
          _descriptor$7,
          _descriptor2$6,
          _descriptor3$3,
          _descriptor4$1,
          _descriptor5$1,
          _descriptor6$1;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "aeb63Fwu2JEubREG2rqG2S3",
            "FG_DeclareSpine",
            void 0
          );
        var ccclass$9 = _decorator.ccclass,
          property$8 = _decorator.property,
          AnimName$4 = {
            Declare_Start: "Declare_Start",
            Declare_Loop: "Declare_Loop",
            Declare_End: "Declare_End",
            Compliment_Start: "Compliment_Start",
            Compliment_Loop: "Compliment_Loop",
            Compliment_End: "Compliment_End",
          },
          FG_DeclareSpine =
            ((_dec$8 = ccclass$9("FG_DeclareSpine")),
            (_dec2$7 = property$8({ type: sp.Skeleton, tooltip: "Spine" })),
            (_dec3$4 = property$8({ type: Label, tooltip: "FG贏分" })),
            (_dec4$1 = property$8({ type: Label, tooltip: "FG局數" })),
            (_dec5$1 = property$8({
              type: Sprite,
              tooltip: "CONGRATS 多語系文字",
            })),
            (_dec6$1 = property$8({
              type: Sprite,
              tooltip: "YOU WON 多語系文字",
            })),
            (_dec7$1 = property$8({
              type: Sprite,
              tooltip: "FREE SPINS 多語系文字",
            })),
            _dec$8(
              ((_class2$8 = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, n = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    n[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_spine",
                      _descriptor$7,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_winLabel",
                      _descriptor2$6,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_totalRoundLabel",
                      _descriptor3$3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_hpText1Sprite",
                      _descriptor4$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_hpText2Sprite",
                      _descriptor5$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_hpText4Sprite",
                      _descriptor6$1,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.SetTxt = function (e) {
                    void 0 === e && (e = !0);
                    var t = node$5.GetGameAtlas();
                    e
                      ? ((this.m_hpText1Sprite.spriteFrame =
                          t.getSpriteFrame("TXT_Declare_01")),
                        (this.m_hpText2Sprite.spriteFrame =
                          t.getSpriteFrame("TXT_Declare_02")))
                      : ((this.m_hpText1Sprite.spriteFrame =
                          t.getSpriteFrame("TXT_Declare_01")),
                        (this.m_hpText2Sprite.spriteFrame = t.getSpriteFrame(
                          "TXT_FG_Compliment_02"
                        )),
                        (this.m_hpText4Sprite.spriteFrame =
                          t.getSpriteFrame("TXT_Declare_02")));
                  }),
                  (i.ShowDeclare = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.node.active = !0),
                                    (e.next = 3),
                                    this.PlayAnimation(AnimName$4.Declare_Start)
                                  );
                                case 3:
                                  return (
                                    t && t(),
                                    (e.next = 6),
                                    this.PlayAnimation(AnimName$4.Declare_Loop)
                                  );
                                case 6:
                                  return (
                                    (e.next = 8),
                                    this.PlayAnimation(AnimName$4.Declare_End)
                                  );
                                case 8:
                                  this.node.active = !1;
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
                  (i.ShowCompliment = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, i, n) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.node.active = !0),
                                    this.PlayAnimation(
                                      AnimName$4.Compliment_Start
                                    ),
                                    (e.next = 4),
                                    node$3.Wait(
                                      this,
                                      Game_Define.DELAYTIME.FG_WIN_RUNNING_START
                                    )
                                  );
                                case 4:
                                  return (
                                    (this.m_totalRoundLabel.string =
                                      i.toString()),
                                    this.RunningScore(t),
                                    (e.next = 8),
                                    node$3.Wait(
                                      this,
                                      Game_Define.DELAYTIME
                                        .FG_COMPLIMENT_START -
                                        Game_Define.DELAYTIME
                                          .FG_WIN_RUNNING_START
                                    )
                                  );
                                case 8:
                                  return (
                                    n && n(),
                                    this.PlayAnimation(
                                      AnimName$4.Compliment_Loop
                                    ),
                                    (e.next = 12),
                                    node$3.Wait(this, 0.5)
                                  );
                                case 12:
                                  return (
                                    (e.next = 14),
                                    this.PlayAnimation(
                                      AnimName$4.Compliment_End
                                    )
                                  );
                                case 14:
                                  return (e.next = 16), node$3.Wait(this, 0.5);
                                case 16:
                                  (this.m_winLabel.string = ""),
                                    (this.node.active = !1);
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
                    return function (t, i, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (i.RunningScore = function (e) {
                    var t = this;
                    this.node.active = !0;
                    var i = node.divide(
                        Game_Define.DELAYTIME.FG_WIN_RUNNING_END,
                        0.05
                      ),
                      n = node.divide(e, i),
                      r = 0;
                    tween(this.m_winLabel.node)
                      .repeat(
                        i,
                        tween().sequence(
                          tween().call(function () {
                            (r += n) >= e && (r = e),
                              (t.m_winLabel.string = node.FormatNumberThousands(
                                Game_Define.ShowDisplayValue
                                  ? Game_Define.ShowDisplayValue(r)
                                  : r,
                                node.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                              ));
                          }),
                          tween().delay(0.05)
                        )
                      )
                      .call(function () {
                        t.m_winLabel.string = node.FormatNumberThousands(
                          Game_Define.ShowDisplayValue
                            ? Game_Define.ShowDisplayValue(e)
                            : e,
                          node.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                        );
                      })
                      .delay(Game_Define.DELAYTIME.FG_WIN_STAY)
                      .start();
                  }),
                  (i.PlayAnimation = function (e, t) {
                    var i = this;
                    return (
                      void 0 === t && (t = !1),
                      new Promise(function (n) {
                        i.m_spine.setToSetupPose();
                        var r = i.m_spine.setAnimation(0, e, t);
                        r
                          ? i.m_spine.setTrackCompleteListener(r, function () {
                              n();
                            })
                          : i.m_spine.setCompleteListener(function () {
                              n();
                            });
                      })
                    );
                  }),
                  t
                );
              })(Component)),
              (_descriptor$7 = _applyDecoratedDescriptor(
                _class2$8.prototype,
                "m_spine",
                [_dec2$7],
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
                "m_winLabel",
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
              (_descriptor3$3 = _applyDecoratedDescriptor(
                _class2$8.prototype,
                "m_totalRoundLabel",
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
                _class2$8.prototype,
                "m_hpText1Sprite",
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
              (_descriptor5$1 = _applyDecoratedDescriptor(
                _class2$8.prototype,
                "m_hpText2Sprite",
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
              (_descriptor6$1 = _applyDecoratedDescriptor(
                _class2$8.prototype,
                "m_hpText4Sprite",
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
              (_class$9 = _class2$8))
            ) || _class$9),
          _dec$9,
          _dec2$8,
          _dec3$5,
          _class$a,
          _class2$9,
          _descriptor$8,
          _descriptor2$7;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "018f5JcIJBDVr3ovnaDeIj2",
            "FG_MoreSpinSpine",
            void 0
          );
        var ccclass$a = _decorator.ccclass,
          property$9 = _decorator.property,
          AnimName$5 = { FG_MoreSpins: "FG_MoreSpins" },
          FG_MoreSpinSpine =
            ((_dec$9 = ccclass$a("FG_MoreSpinSpine")),
            (_dec2$8 = property$9({ type: sp.Skeleton, tooltip: "Spine" })),
            (_dec3$5 = property$9({
              type: Sprite,
              tooltip: "FREE SPINS 多語系文字",
            })),
            _dec$9(
              ((_class2$9 = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, n = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    n[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_spine",
                      _descriptor$8,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_hpText1Sprite",
                      _descriptor2$7,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.SetTxt = function () {
                    var e = node$5.GetGameAtlas();
                    this.m_hpText1Sprite.spriteFrame =
                      e.getSpriteFrame("TXT_Declare_02");
                  }),
                  (i.Show = (function () {
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
                                    this.PlayAnimation(AnimName$5.FG_MoreSpins)
                                  );
                                case 3:
                                  this.node.active = !1;
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
                  (i.PlayAnimation = function (e, t) {
                    var i = this;
                    return (
                      void 0 === t && (t = !1),
                      new Promise(function (n) {
                        i.m_spine.setToSetupPose();
                        var r = i.m_spine.setAnimation(0, e, t);
                        r
                          ? i.m_spine.setTrackCompleteListener(r, function () {
                              n();
                            })
                          : i.m_spine.setCompleteListener(function () {
                              n();
                            });
                      })
                    );
                  }),
                  t
                );
              })(Component)),
              (_descriptor$8 = _applyDecoratedDescriptor(
                _class2$9.prototype,
                "m_spine",
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
              (_descriptor2$7 = _applyDecoratedDescriptor(
                _class2$9.prototype,
                "m_hpText1Sprite",
                [_dec3$5],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_class$a = _class2$9))
            ) || _class$a),
          _dec$a,
          _dec2$9,
          _dec3$6,
          _dec4$2,
          _dec5$2,
          _dec6$2,
          _dec7$2,
          _dec8,
          _dec9,
          _dec10,
          _dec11,
          _dec12,
          _dec13,
          _class$b,
          _class2$a,
          _descriptor$9,
          _descriptor2$8,
          _descriptor3$4,
          _descriptor4$2,
          _descriptor5$2,
          _descriptor6$2,
          _descriptor7$1,
          _descriptor8,
          _descriptor9,
          _descriptor10,
          _descriptor11,
          _descriptor12;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "9ebd80CwC1Aha7+nQz48FcK", "FreeGame", void 0);
        var ccclass$b = _decorator.ccclass,
          property$a = _decorator.property,
          FreeGame =
            ((_dec$a = ccclass$b("FreeGame")),
            (_dec2$9 = property$a({ type: Animation, tooltip: "進FG動畫" })),
            (_dec3$6 = property$a({
              type: Animation,
              tooltip: "結束FG的贏分表演",
            })),
            (_dec4$2 = property$a({ type: Node, tooltip: "背景火焰" })),
            (_dec5$2 = property$a({ type: Node, tooltip: "直版背景火焰" })),
            (_dec6$2 = property$a({ type: Node, tooltip: "FG剩餘次數" })),
            (_dec7$2 = property$a({
              type: Label,
              tooltip: "FG剩餘次數的數值",
            })),
            (_dec8 = property$a({ type: FG_DeclareSpine, tooltip: "FG宣告" })),
            (_dec9 = property$a({ type: FG_MoreSpinSpine, tooltip: "FG加局" })),
            (_dec10 = property$a({ type: Sprite, tooltip: "免費遊戲" })),
            (_dec11 = property$a({ type: Sprite, tooltip: "免費加局" })),
            (_dec12 = property$a({ type: Sprite, tooltip: "免費局數" })),
            (_dec13 = property$a({ type: Sprite, tooltip: "恭喜獲得" })),
            _dec$a(
              ((_class2$a = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, n = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    n[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_enterFGAnim",
                      _descriptor$9,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_congratAnim",
                      _descriptor2$8,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fireTower",
                      _descriptor3$4,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fireTowerS",
                      _descriptor4$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_FGTimesNode",
                      _descriptor5$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_FGTimesLabel",
                      _descriptor6$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fgDeclareSpine",
                      _descriptor7$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fgMoreSpin",
                      _descriptor8,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_freeSpinSprite",
                      _descriptor9,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_moreSpinSprite",
                      _descriptor10,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fgTimesSprite",
                      _descriptor11,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_congratsSprite",
                      _descriptor12,
                      _assertThisInitialized(t)
                    ),
                    (t.m_idleSoundId = null),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.StopIdleSound = function () {
                    null !== this.m_idleSoundId &&
                      node$1.Pause(this.m_idleSoundId);
                  }),
                  (i.SetTxt = function () {
                    var e = node$5.GetGameAtlas();
                    (this.m_freeSpinSprite.spriteFrame =
                      e.getSpriteFrame("FREE GAME_MG")),
                      (this.m_moreSpinSprite.spriteFrame =
                        e.getSpriteFrame("FREE GAME_MG")),
                      (this.m_fgTimesSprite.spriteFrame =
                        e.getSpriteFrame("FG_multiply_txt")),
                      (this.m_congratsSprite.spriteFrame =
                        e.getSpriteFrame("Congrats_txt"));
                  }),
                  (i.PreEnterFree = function (e) {
                    (this.node.active = !0),
                      (this.m_FGTimesNode.active = !0),
                      this.FGRotation(e),
                      (this.m_FGTimesLabel.string = "10");
                  }),
                  (i.EnterFree = function () {
                    (this.m_fireTower.active = !0),
                      (this.m_fireTowerS.active = !0),
                      (this.Congrat.node.active = !1);
                  }),
                  (i.LeaveFree = function (e, t) {
                    var i = this;
                    this.m_congratAnim.node
                      .getComponent(FGWin)
                      .Show(e, function () {
                        i.StopIdleSound(), t && t();
                      });
                  }),
                  (i.LeaveFreeSet = function () {
                    (this.m_FGTimesNode.active = !1),
                      (this.node.active = !1),
                      (this.m_FGTimesLabel.string = ""),
                      (this.m_fireTowerS.active = !1);
                  }),
                  (i.ShowEnterAnim = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, i) {
                        var n,
                          r,
                          o = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (this.m_enterFGAnim.node.active = !0),
                                    (n =
                                      this.m_enterFGAnim.getState(
                                        "start"
                                      )).play(),
                                    n.setTime(0),
                                    n.stop(),
                                    (r =
                                      this.m_enterFGAnim.getComponent(
                                        Animation
                                      )) &&
                                      (r.play(),
                                      tween(this.node)
                                        .delay(0.5)
                                        .call(function () {
                                          t && t();
                                        })
                                        .delay(n.duration - 0.5)
                                        .call(function () {
                                          (o.m_enterFGAnim.node.active = !1),
                                            i && i();
                                        })
                                        .start());
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
                    return function (t, i) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (i.ShowMoreSpin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.next = 2), this.m_fgMoreSpin.Show();
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
                  (i.FGRotation = function (e) {
                    e
                      ? this.m_FGTimesNode
                          .getComponent(Animation)
                          .play("L_show")
                      : this.m_FGTimesNode
                          .getComponent(Animation)
                          .play("S_show");
                  }),
                  _createClass(t, [
                    {
                      key: "Congrat",
                      get: function () {
                        return this.m_congratAnim;
                      },
                    },
                    {
                      key: "FGTimesLabel",
                      get: function () {
                        return this.m_FGTimesLabel;
                      },
                    },
                    {
                      key: "FgDeclareSpine",
                      get: function () {
                        return this.m_fgDeclareSpine;
                      },
                    },
                  ]),
                  t
                );
              })(Component)),
              (_descriptor$9 = _applyDecoratedDescriptor(
                _class2$a.prototype,
                "m_enterFGAnim",
                [_dec2$9],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor2$8 = _applyDecoratedDescriptor(
                _class2$a.prototype,
                "m_congratAnim",
                [_dec3$6],
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
                _class2$a.prototype,
                "m_fireTower",
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
              (_descriptor4$2 = _applyDecoratedDescriptor(
                _class2$a.prototype,
                "m_fireTowerS",
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
              (_descriptor5$2 = _applyDecoratedDescriptor(
                _class2$a.prototype,
                "m_FGTimesNode",
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
              (_descriptor6$2 = _applyDecoratedDescriptor(
                _class2$a.prototype,
                "m_FGTimesLabel",
                [_dec7$2],
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
                _class2$a.prototype,
                "m_fgDeclareSpine",
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
              (_descriptor8 = _applyDecoratedDescriptor(
                _class2$a.prototype,
                "m_fgMoreSpin",
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
              (_descriptor9 = _applyDecoratedDescriptor(
                _class2$a.prototype,
                "m_freeSpinSprite",
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
              (_descriptor10 = _applyDecoratedDescriptor(
                _class2$a.prototype,
                "m_moreSpinSprite",
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
              (_descriptor11 = _applyDecoratedDescriptor(
                _class2$a.prototype,
                "m_fgTimesSprite",
                [_dec12],
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
                _class2$a.prototype,
                "m_congratsSprite",
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
              (_class$b = _class2$a))
            ) || _class$b),
          _dec$b,
          _class$c;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "2aa0c/ytN1AdLv4raENfpkD",
            "AwardState",
            void 0
          );
        var bigWinDelay = 1,
          ccclass$c = _decorator.ccclass,
          AwardState =
            ((_dec$b = ccclass$c("AwardState")),
            _dec$b(
              (_class$c = (function (e) {
                function t(t) {
                  var i;
                  return (
                    ((i = e.call(this) || this).m_gameView = null),
                    (i.m_isSmallWinRunning = !1),
                    (i.m_isBigWinRunning = !1),
                    (i.m_lvl = BigWinComponent.Level.NONE),
                    (i.m_bigwinSoundId = void 0),
                    (i.m_isBigWin = !1),
                    (i.m_isFirstBigWinEnd = !1),
                    (i.m_gameView = t),
                    i
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.OnEnter = function () {
                    var e = this;
                    log("GAMEVIEW_STATE.AWARD"), (this.m_isFirstBigWinEnd = !1);
                    var t =
                        this.m_gameView.SpinAck.RoundQueue[
                          this.m_gameView.RoundIdx
                        ],
                      i = this.m_gameView.PlateInfoTo2DArray(t.PlateSymbol),
                      n = t.RoundWin,
                      r = t.AwardDataVec;
                    if (n && n > 0) {
                      this.m_lvl = BigWinComponent.Level.NONE;
                      var o = node.divide(n, node$4.GetNowBetValue());
                      (this.m_isBigWin =
                        o >=
                        Game_Define.BIG_WIN_BETRATE[BigWinComponent.Level.BIG]),
                        r &&
                          r.length > 0 &&
                          this.m_gameView.EffectPlate.ShowAllSymbolEffect(i, r),
                        t.MaxFlag &&
                          node$6.ShowMessageBox(
                            node$3.StringKey.MSGBOX_MAX_REWARD,
                            node$3.StringKey.MSGBOX_TITLE_SYSTEM_INFO
                          ),
                        (this.m_gameView.Win += n),
                        this.m_isBigWin && this.m_gameView.BigWin
                          ? (node$4.SetSpinState(
                              SlotBottomBarState.GET_AWARD_NO_AUTO
                            ),
                            o >=
                              Game_Define.BIG_WIN_BETRATE[
                                BigWinComponent.Level.BIG
                              ] &&
                            o <
                              Game_Define.BIG_WIN_BETRATE[
                                BigWinComponent.Level.MEGA
                              ]
                              ? (this.m_lvl = BigWinComponent.Level.BIG)
                              : o >=
                                  Game_Define.BIG_WIN_BETRATE[
                                    BigWinComponent.Level.MEGA
                                  ] &&
                                o <
                                  Game_Define.BIG_WIN_BETRATE[
                                    BigWinComponent.Level.SUPER
                                  ]
                              ? (this.m_lvl = BigWinComponent.Level.MEGA)
                              : o >=
                                  Game_Define.BIG_WIN_BETRATE[
                                    BigWinComponent.Level.SUPER
                                  ] &&
                                (this.m_lvl = BigWinComponent.Level.SUPER),
                            null !== this.m_gameView.BgmId &&
                              (node$1.Stop(this.m_gameView.BgmId),
                              (this.m_gameView.BgmId = null)),
                            this.m_gameView.PlaySamllWinSound(n),
                            tween(this.m_gameView.node)
                              .delay(bigWinDelay)
                              .call(function () {
                                node$4.SetSpinState(
                                  SlotBottomBarState.GET_AWARD_NO_AUTO
                                ),
                                  (e.m_gameView.BigWin.node.active = !0),
                                  e.m_gameView.BigWin.Show(n, e.m_lvl),
                                  e.m_gameView.Pharaoh.PlayBigWin(
                                    e.m_gameView.IsInFG
                                  ),
                                  (e.m_isBigWinRunning = !0),
                                  (e.m_bigwinSoundId = node$1.Play(
                                    Game_Define.AudioClips.Big_Win,
                                    !1
                                  ));
                              })
                              .start())
                          : ((this.m_isSmallWinRunning = !0),
                            (!node.CheckSwitchOff(
                              SwitchOffKeyDefine.NoSoundUnder1
                            ) ||
                              (node.CheckSwitchOff(
                                SwitchOffKeyDefine.NoSoundUnder1
                              ) &&
                                o > 1)) &&
                              this.m_gameView.PlaySamllWinSound(n),
                            this.m_gameView.WinFxShowSpine.ShowWin(),
                            this.m_gameView.ShowSmallWin(n),
                            this.m_gameView.Pharaoh.PlaySmallWin(
                              this.m_gameView.IsInFG
                            ),
                            node$4.SetWinValueWithCheck({
                              maxWin: this.m_gameView.SpinAck.TotalWin,
                              value: this.m_gameView.Win,
                              stopAction: !0,
                            }),
                            tween(this.m_gameView.node)
                              .delay(1)
                              .call(function () {
                                (e.m_isSmallWinRunning = !1),
                                  node$7.NextState(
                                    Game_Define.GAMEVIEW_STATE.ROUND_SHOW_END
                                  );
                              })
                              .start());
                    } else
                      node$7.NextState(
                        Game_Define.GAMEVIEW_STATE.ROUND_SHOW_END
                      );
                  }),
                  (i.OnProcess = function () {
                    if (this.m_isBigWinRunning) {
                      var e = this.m_gameView.BigWin.node.children[0]
                          .getComponent(sp.Skeleton)
                          .getCurrent(0),
                        t =
                          "BigWin_End" == e.animation.name ||
                          "MegaWin_End" == e.animation.name ||
                          "SuperWin_End" == e.animation.name;
                      this.m_lvl != BigWinComponent.Level.NONE &&
                        !this.m_isFirstBigWinEnd &&
                        this.m_isBigWinRunning &&
                        t &&
                        (node$1.Stop(this.m_bigwinSoundId),
                        node$1.Play(Game_Define.AudioClips.Big_Win_End, !1),
                        (this.m_isBigWinRunning = !1),
                        (this.m_isFirstBigWinEnd = !0));
                    }
                    this.m_gameView.BigWin.IsEnd &&
                      !this.m_isSmallWinRunning &&
                      this.m_isFirstBigWinEnd &&
                      (this.m_isBigWin &&
                        this.m_gameView.BigWin &&
                        (node$1.Stop(this.m_bigwinSoundId),
                        (this.m_gameView.BigWin.node.active = !1),
                        node$4.SetWinValueWithCheck({
                          maxWin: this.m_gameView.SpinAck.TotalWin,
                          value: this.m_gameView.Win,
                          stopAction: !0,
                        }),
                        this.m_gameView.IsInFG
                          ? (this.m_gameView.BgmId = node$1.Play(
                              Game_Define.AudioClips.BGM_FG,
                              !0,
                              null,
                              0.5
                            ))
                          : (this.m_gameView.BgmId = node$1.Play(
                              Game_Define.AudioClips.BGM_MG,
                              !0,
                              null,
                              0.5
                            )),
                        node$4.IsAutoSpin
                          ? node$4.SetSpinState(
                              SlotBottomBarState.CLICK_AUTOPLAY_HARDSTOP
                            )
                          : node$4.SetSpinState(
                              SlotBottomBarState.GET_AWARD_NO_AUTO
                            )),
                      this.m_gameView.IsChange && this.m_gameView.OnRotation(),
                      node$7.NextState(
                        Game_Define.GAMEVIEW_STATE.ROUND_SHOW_END
                      ));
                  }),
                  (i.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$c),
          _dec$c,
          _class$d;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "3ed9eEXUV5LDIJOuFLYy43h",
            "CheckState",
            void 0
          );
        var ccclass$d = _decorator.ccclass,
          CheckState =
            ((_dec$c = ccclass$d("CheckState")),
            _dec$c(
              (_class$d = (function (e) {
                function t(t) {
                  var i;
                  return (
                    ((i = e.call(this) || this).m_gameView = null),
                    (i.m_gameView = t),
                    i
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.OnEnter = function () {
                    log("GAMEVIEW_STATE.CheckState"),
                      node$7.NextState(Game_Define.GAMEVIEW_STATE.SCATTER);
                  }),
                  (i.OnProcess = function () {}),
                  (i.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$d),
          _dec$d,
          _class$e;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "7777cSEm/5CCbHGch3qQkZ8",
            "EnterFreeState",
            void 0
          );
        var ccclass$e = _decorator.ccclass,
          EnterFreeState =
            ((_dec$d = ccclass$e("EnterFreeState")),
            _dec$d(
              (_class$e = (function (e) {
                function t(t) {
                  var i;
                  return (
                    ((i = e.call(this) || this).m_gameView = null),
                    (i.m_gameView = t),
                    i
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.OnEnter = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    log("GAMEVIEW_STATE.ENTER_FREE"),
                                    (this.m_gameView.IsInFG = !0),
                                    this.m_gameView.CloseManual(),
                                    (this.m_gameView.ManualInfoActive = !1),
                                    (this.m_gameView.IsRotationLock = !0),
                                    node$4.IsAutoSpin &&
                                      this.m_gameView.AutoplayInfos &&
                                      this.m_gameView.AutoplayInfos
                                        .isCheckFree &&
                                      node$4.ShowAutoPlayState(!1),
                                    node$4.SetEnterFree(),
                                    node$4.SetBarNodeVisiable(!1),
                                    this.m_gameView.SetPlateBtnAvailble(!1),
                                    null !== this.m_gameView.BgmId &&
                                      node$1.Stop(this.m_gameView.BgmId),
                                    (this.m_gameView.BgmId = node$1.Play(
                                      Game_Define.AudioClips.FG_Cutscene
                                    )),
                                    tween(
                                      this.m_gameView.TitleNodeS.node.getComponent(
                                        UIOpacity
                                      )
                                    )
                                      .to(0.2, { opacity: 0.1 })
                                      .start(),
                                    this.m_gameView.Pharaoh.PlayFgDeclare(),
                                    (e.next = 15),
                                    this.m_gameView.FgDeclareSpine.ShowDeclare(
                                      function () {
                                        t.m_gameView.EffectPlate.HideSymbolEffect(),
                                          t.m_gameView.SlotReels.ShowDarkOrLightSymbol(
                                            !1
                                          ),
                                          t.m_gameView.ChangeBackGround(),
                                          tween(
                                            t.m_gameView.MultiReelsS.MultiBarSpine.getComponent(
                                              UIOpacity
                                            )
                                          )
                                            .to(0.2, { opacity: 255 })
                                            .start(),
                                          t.m_gameView.FgCounter.SetEnterFree(),
                                          t.m_gameView.FgCounterS.SetEnterFree(),
                                          t.m_gameView.FgCounterOnrotation();
                                      }
                                    )
                                  );
                                case 15:
                                  tween(
                                    this.m_gameView.TitleNodeS.node.getComponent(
                                      UIOpacity
                                    )
                                  )
                                    .to(0.2, { opacity: 255 })
                                    .start(),
                                    (this.m_gameView.IsRotationLock = !1),
                                    this.m_gameView.IsChange &&
                                      this.m_gameView.OnRotation(),
                                    (this.m_gameView.FgLastRound =
                                      this.m_gameView.SpinAck.RoundQueue[0].FreeRemainRound),
                                    node$4.SetBarNodeVisiable(!0, 1),
                                    this.m_gameView.SetPlateBtnAvailble(!0),
                                    (this.m_gameView.BgmId = node$1.Play(
                                      Game_Define.AudioClips.BGM_FG,
                                      !0,
                                      null,
                                      0.5
                                    )),
                                    node$7.NextState(
                                      Game_Define.GAMEVIEW_STATE.ROUND_END
                                    );
                                case 23:
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
                  (i.OnProcess = function () {}),
                  (i.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$e),
          _dec$e,
          _class$f;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "55329HMqidJW4WZHtlBfIcX",
            "FeatureShowState",
            void 0
          );
        var ccclass$f = _decorator.ccclass,
          FeatureShowState =
            ((_dec$e = ccclass$f("FeatureShowState")),
            _dec$e(
              (_class$f = (function (e) {
                function t(t) {
                  var i;
                  return (
                    ((i = e.call(this) || this).m_gameView = null),
                    (i.m_gameView = t),
                    i
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.OnEnter = function () {
                    log("GAMEVIEW_STATE.FEATURE_SHOW"),
                      node$4.CanPlayFeaturesDemo(!0),
                      (this.m_gameView.IsAutoShowFeatures = !0),
                      node$4.SetBarNodeVisiable(!0),
                      (this.m_gameView.IntroNode.active = !1),
                      node$8.AutoShowFeatures();
                  }),
                  (i.OnProcess = function () {}),
                  (i.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$f),
          _dec$f,
          _class$g;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "74c12OprnNDBbi0ZRXvSRPY", "IdleState", void 0);
        var ccclass$g = _decorator.ccclass,
          IdleState =
            ((_dec$f = ccclass$g("IdleState")),
            _dec$f(
              (_class$g = (function (e) {
                function t(t) {
                  var i;
                  return (
                    ((i = e.call(this) || this).m_gameView = null),
                    (i.m_gameView = t),
                    i
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.Enter = function () {
                    if (
                      (log("GAMEVIEW_STATE.IDLE"),
                      (node$4.IsGameIdle = !0),
                      node$4.CanPlayFeaturesDemo(!0),
                      node$8.SetBuyBonusState(!0),
                      this.m_gameView.SpinAck)
                    ) {
                      var e =
                        this.m_gameView.SpinAck.RoundQueue[
                          this.m_gameView.RoundIdx
                        ];
                      if (this.m_gameView.SpinAck.RoundQueue.length > 1)
                        this.m_gameView.ClearAll();
                      else if (e.AwardDataVec && e.AwardDataVec.length > 0) {
                        var t = this.m_gameView.PlateInfoTo2DArray(
                            e.PlateSymbol
                          ),
                          i = e.AwardDataVec;
                        this.m_gameView.EffectPlate.ShowSingleLineEffect(t, i);
                      }
                    }
                  }),
                  (i.Process = function (e) {
                    this.m_gameView.IsChange && this.m_gameView.OnRotation();
                  }),
                  (i.OnLeave = function () {}),
                  t
                );
              })(Common_IdleState))
            ) || _class$g),
          _dec$g,
          _class$h;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "8ec83x/SAlAkYt80AKDBeVP",
            "LeaveFreeState",
            void 0
          );
        var ccclass$h = _decorator.ccclass,
          LeaveFreeState =
            ((_dec$g = ccclass$h("LeaveFreeState")),
            _dec$g(
              (_class$h = (function (e) {
                function t(t) {
                  var i;
                  return (
                    ((i = e.call(this) || this).m_gameView = null),
                    (i.m_gameView = t),
                    i
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.OnEnter = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t,
                          i = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    log("GAMEVIEW_STATE.LEAVE_FREE"),
                                    (e.next = 3),
                                    node$3.Wait(this.m_gameView, 1)
                                  );
                                case 3:
                                  return (
                                    null !== this.m_gameView.BgmId &&
                                      node$1.Stop(this.m_gameView.BgmId),
                                    node$1.Play(Game_Define.AudioClips.FG_End),
                                    (this.m_gameView.IsInFG = !1),
                                    (this.m_gameView.MultiReels.IsHold = !1),
                                    (this.m_gameView.MultiReelsS.IsHold = !1),
                                    this.m_gameView.MultiReels.LeaveFree(),
                                    this.m_gameView.MultiReelsS.LeaveFree(),
                                    (t = this.m_gameView.SpinAck.RoundQueue[
                                      this.m_gameView.RoundIdx
                                    ].FreeTotalRound
                                      ? this.m_gameView.SpinAck.RoundQueue[
                                          this.m_gameView.RoundIdx
                                        ].FreeTotalRound
                                      : 10),
                                    tween(
                                      this.m_gameView.TitleNodeS.node.getComponent(
                                        UIOpacity
                                      )
                                    )
                                      .to(0.2, { opacity: 0.1 })
                                      .start(),
                                    node$4.SetBarNodeVisiable(!1),
                                    (e.next = 15),
                                    this.m_gameView.FgCompliment.ShowCompliment(
                                      this.m_gameView.Win,
                                      t,
                                      function () {
                                        i.m_gameView.FgCounter.SetLeaveFree(),
                                          i.m_gameView.FgCounterS.SetLeaveFree(),
                                          i.m_gameView.ChangeBackGround();
                                      }
                                    )
                                  );
                                case 15:
                                  tween(
                                    this.m_gameView.TitleNodeS.node.getComponent(
                                      UIOpacity
                                    )
                                  )
                                    .to(0.2, { opacity: 255 })
                                    .start(),
                                    node$4.SetBarNodeVisiable(!0, 1),
                                    this.m_gameView.Pharaoh.PlayFgToMg(),
                                    (this.m_gameView.MultiReels.CurrentMulti = 0),
                                    (this.m_gameView.MultiReelsS.CurrentMulti = 0),
                                    (this.m_gameView.MultiReels.TotalMultiLabel.string =
                                      ""),
                                    (this.m_gameView.MultiReelsS.TotalMultiLabel.string =
                                      ""),
                                    node$8.CheckBuyBonusOverAni(),
                                    node$3.IsUsingItem ||
                                      (node$4.SetLeaveFree(),
                                      node$4.IsAutoSpin &&
                                        node$4.SetEnableBetButtons(!1)),
                                    this.m_gameView.SlotReels.ShowDarkOrLightSymbol(
                                      !1
                                    ),
                                    null !== this.m_gameView.BgmId &&
                                      node$1.Stop(this.m_gameView.BgmId),
                                    (this.m_gameView.BgmId = node$1.Play(
                                      Game_Define.AudioClips.BGM_MG,
                                      !0,
                                      null,
                                      0.5
                                    )),
                                    (this.m_gameView.ManualInfoActive = !0),
                                    node$7.NextState(
                                      Game_Define.GAMEVIEW_STATE.ROUND_END
                                    );
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
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (i.OnProcess = function () {}),
                  (i.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$h),
          _dec$h,
          _class$i;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "e6746a96E1F+YIJbASilG4f",
            "MultiSpinState",
            void 0
          );
        var ccclass$i = _decorator.ccclass,
          MultiSpinState =
            ((_dec$h = ccclass$i("MultiSpinState")),
            _dec$h(
              (_class$i = (function (e) {
                function t(t) {
                  var i;
                  return (
                    ((i = e.call(this) || this).m_gameView = null),
                    (i.m_isNudge = !1),
                    (i.m_nudgeTimes = 0),
                    (i.m_isOK = !1),
                    (i.m_gameView = t),
                    i
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.OnEnter = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, i, n, r, o, s, a;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    (log("GAMEVIEW_STATE.MULTISPINSTATE"),
                                    (t =
                                      this.m_gameView.SpinAck.RoundQueue[
                                        this.m_gameView.RoundIdx
                                      ]),
                                    log("round: ", this.m_gameView.RoundIdx, t),
                                    (i = t.ScatterWin ? t.ScatterWin : 0),
                                    (n = (t.RoundWin - i) / t.NudgeMult),
                                    (r = t.NudgeReelResult) || (r = []),
                                    !(
                                      this.m_gameView.HasNudge &&
                                      t.RoundWin &&
                                      r.length > 0
                                    ))
                                  ) {
                                    e.next = 33;
                                    break;
                                  }
                                  return (
                                    log("NudgeReelResult:", t.NudgeReelResult),
                                    (this.m_isNudge = !0),
                                    (this.m_nudgeTimes = t.Nudge ? t.Nudge : 0),
                                    (o = this.m_gameView.PlateInfoTo2DArray(
                                      t.PlateSymbol
                                    )),
                                    (s = t.AwardDataVec) &&
                                      s.length > 0 &&
                                      this.m_gameView.EffectPlate.ShowAllSymbolEffect(
                                        o,
                                        s
                                      ),
                                    this.m_gameView.ShowSmallWin(n, !0),
                                    this.m_gameView.WinFxShowSpine.ShowWin(),
                                    (e.next = 18),
                                    node$3.Wait(this.m_gameView, 1)
                                  );
                                case 18:
                                  return (
                                    this.m_gameView.Pharaoh.PlaySmallWin(
                                      this.m_gameView.IsInFG
                                    ),
                                    this.m_gameView.EffectPlate.ShowNudgeSymbolEffectOpen(
                                      o,
                                      this.m_nudgeTimes
                                    ),
                                    (a =
                                      this.m_gameView.EffectPlate.ShakeWorld()),
                                    (e.next = 23),
                                    node$3.Wait(this.m_gameView, a - 0.5)
                                  );
                                case 23:
                                  return (
                                    (this.m_gameView.ManualInfoActive = !1),
                                    this.m_gameView.MultiReels.ShowMultiBar(),
                                    (e.next = 27),
                                    this.m_gameView.MultiReelsS.ShowMultiBar()
                                  );
                                case 27:
                                  node$1.Play(
                                    Game_Define.AudioClips.Multiplier_Open
                                  ),
                                    this.m_gameView.MultiReels.MultiStart(
                                      t.NudgeReelResult
                                    ),
                                    this.m_gameView.MultiReelsS.MultiStart(
                                      t.NudgeReelResult
                                    ),
                                    (this.m_isOK = !0),
                                    (e.next = 34);
                                  break;
                                case 33:
                                  this.m_isOK = !0;
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
                  (i.OnProcess = function (e) {
                    if (this.m_isOK)
                      if (this.m_isNudge) {
                        var t;
                        this.m_gameView.MultiReels.MultiSpin(e),
                          (t = this.m_gameView.MultiReels.IsStop),
                          this.m_gameView.MultiReelsS.MultiSpin(e),
                          t &&
                            (this.m_gameView.IsChange &&
                              this.m_gameView.OnRotation(),
                            (this.m_gameView.IsSpined = !1),
                            node$4.IsAutoSpin ||
                              node$4.SetSpinState(
                                SlotBottomBarState.CLICK_SPIN
                              ),
                            (this.m_isNudge = !1),
                            (this.m_isOK = !1),
                            node$7.NextState(Game_Define.GAMEVIEW_STATE.NUDGE));
                      } else
                        (this.m_isOK = !1),
                          node$7.NextState(Game_Define.GAMEVIEW_STATE.AWARD);
                  }),
                  (i.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$i),
          _dec$i,
          _class$j;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "4735fBUQSNMTKABGH22rDr+",
            "NudgeAwardState",
            void 0
          );
        var ccclass$j = _decorator.ccclass,
          NudgeAwardState =
            ((_dec$i = ccclass$j("NudgeAwardState")),
            _dec$i(
              (_class$j = (function (e) {
                function t(t) {
                  var i;
                  return (
                    ((i = e.call(this) || this).m_gameView = null),
                    (i.m_isSmallWinRunning = !1),
                    (i.m_isBigWinRunning = !1),
                    (i.m_lvl = BigWinComponent.Level.NONE),
                    (i.m_bigwinSoundId = void 0),
                    (i.m_isBigWin = !1),
                    (i.m_isFirstBigWinEnd = !1),
                    (i.m_gameView = t),
                    i
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.OnEnter = function () {
                    var e = this;
                    log("GAMEVIEW_STATE.NUDGEAWARD"),
                      (this.m_isFirstBigWinEnd = !1);
                    var t =
                        this.m_gameView.SpinAck.RoundQueue[
                          this.m_gameView.RoundIdx
                        ],
                      i = t.RoundWin;
                    this.m_lvl = BigWinComponent.Level.NONE;
                    var n = node.divide(i, node$4.GetNowBetValue());
                    (this.m_isBigWin =
                      n >=
                      Game_Define.BIG_WIN_BETRATE[BigWinComponent.Level.BIG]),
                      (this.m_gameView.Win += i),
                      t.MaxFlag &&
                        node$6.ShowMessageBox(
                          node$3.StringKey.MSGBOX_MAX_REWARD,
                          node$3.StringKey.MSGBOX_TITLE_SYSTEM_INFO
                        ),
                      this.m_isBigWin && this.m_gameView.BigWin
                        ? (node$4.SetSpinState(
                            SlotBottomBarState.GET_AWARD_NO_AUTO
                          ),
                          n >=
                            Game_Define.BIG_WIN_BETRATE[
                              BigWinComponent.Level.BIG
                            ] &&
                          n <
                            Game_Define.BIG_WIN_BETRATE[
                              BigWinComponent.Level.MEGA
                            ]
                            ? (this.m_lvl = BigWinComponent.Level.BIG)
                            : n >=
                                Game_Define.BIG_WIN_BETRATE[
                                  BigWinComponent.Level.MEGA
                                ] &&
                              n <
                                Game_Define.BIG_WIN_BETRATE[
                                  BigWinComponent.Level.SUPER
                                ]
                            ? (this.m_lvl = BigWinComponent.Level.MEGA)
                            : n >=
                                Game_Define.BIG_WIN_BETRATE[
                                  BigWinComponent.Level.SUPER
                                ] && (this.m_lvl = BigWinComponent.Level.SUPER),
                          this.m_gameView.EffectPlate.FlyMultiToWin(i),
                          tween(this.m_gameView.node)
                            .delay(Game_Define.DELAYTIME.NUDGE_SHOW_WIN)
                            .call(function () {
                              null !== e.m_gameView.BgmId &&
                                (node$1.Stop(e.m_gameView.BgmId),
                                (e.m_gameView.BgmId = null)),
                                e.m_gameView.RemoveSmallWin(),
                                node$4.SetSpinState(
                                  SlotBottomBarState.GET_AWARD_NO_AUTO
                                ),
                                (e.m_gameView.BigWin.node.active = !0),
                                e.m_gameView.BigWin.Show(i, e.m_lvl),
                                e.m_gameView.Pharaoh.PlayBigWin(
                                  e.m_gameView.IsInFG
                                ),
                                (e.m_isBigWinRunning = !0),
                                (e.m_bigwinSoundId = node$1.Play(
                                  Game_Define.AudioClips.Big_Win,
                                  !1
                                ));
                            })
                            .start())
                        : ((this.m_isSmallWinRunning = !0),
                          this.m_gameView.Pharaoh.PlaySmallWin(
                            this.m_gameView.IsInFG
                          ),
                          this.m_gameView.EffectPlate.FlyMultiToWin(i),
                          tween(this.m_gameView.node)
                            .delay(Game_Define.DELAYTIME.NUDGE_SHOW_WIN)
                            .call(function () {
                              e.m_gameView.RemoveSmallWin(),
                                (e.m_isSmallWinRunning = !1),
                                node$4.SetWinValueWithCheck({
                                  maxWin: e.m_gameView.SpinAck.TotalWin,
                                  value: e.m_gameView.Win,
                                  stopAction: !0,
                                }),
                                node$7.NextState(
                                  Game_Define.GAMEVIEW_STATE.ROUND_SHOW_END
                                );
                            })
                            .start());
                  }),
                  (i.OnProcess = function () {
                    if (this.m_isBigWinRunning) {
                      var e = this.m_gameView.BigWin.node.children[0]
                          .getComponent(sp.Skeleton)
                          .getCurrent(0),
                        t =
                          "BigWin_End" == e.animation.name ||
                          "MegaWin_End" == e.animation.name ||
                          "SuperWin_End" == e.animation.name;
                      this.m_lvl != BigWinComponent.Level.NONE &&
                        !this.m_isFirstBigWinEnd &&
                        this.m_isBigWinRunning &&
                        t &&
                        (node$1.Stop(this.m_bigwinSoundId),
                        node$1.Play(Game_Define.AudioClips.Big_Win_End, !1),
                        (this.m_isBigWinRunning = !1),
                        (this.m_isFirstBigWinEnd = !0));
                    }
                    this.m_gameView.BigWin.IsEnd &&
                      !this.m_isSmallWinRunning &&
                      this.m_isFirstBigWinEnd &&
                      (this.m_isBigWin &&
                        this.m_gameView.BigWin &&
                        (node$1.Stop(this.m_bigwinSoundId),
                        (this.m_gameView.BigWin.node.active = !1),
                        node$4.SetWinValueWithCheck({
                          maxWin: this.m_gameView.SpinAck.TotalWin,
                          value: this.m_gameView.Win,
                          stopAction: !0,
                        }),
                        this.m_gameView.IsInFG
                          ? (this.m_gameView.BgmId = node$1.Play(
                              Game_Define.AudioClips.BGM_FG,
                              !0,
                              null,
                              0.5
                            ))
                          : (this.m_gameView.BgmId = node$1.Play(
                              Game_Define.AudioClips.BGM_MG,
                              !0,
                              null,
                              0.5
                            )),
                        node$4.IsAutoSpin
                          ? node$4.SetSpinState(
                              SlotBottomBarState.CLICK_AUTOPLAY_HARDSTOP
                            )
                          : node$4.SetSpinState(
                              SlotBottomBarState.GET_AWARD_NO_AUTO
                            )),
                      this.m_gameView.IsChange && this.m_gameView.OnRotation(),
                      node$7.NextState(
                        Game_Define.GAMEVIEW_STATE.ROUND_SHOW_END
                      ));
                  }),
                  (i.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$j),
          _dec$j,
          _class$k;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "78cbehkvTxEH4H/FR1cMmGP",
            "NudgeState",
            void 0
          );
        var ccclass$k = _decorator.ccclass,
          NudgeState =
            ((_dec$j = ccclass$k("NudgeState")),
            _dec$j(
              (_class$k = (function (e) {
                function t(t) {
                  var i;
                  return (
                    ((i = e.call(this) || this).m_gameView = null),
                    (i.m_gameView = t),
                    i
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.OnEnter = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, i;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    (log("GAMEVIEW_STATE.NUDGESTATE"),
                                    (t =
                                      this.m_gameView.SpinAck.RoundQueue[
                                        this.m_gameView.RoundIdx
                                      ]),
                                    !(i = t.Nudge ? t.Nudge : 0))
                                  ) {
                                    e.next = 19;
                                    break;
                                  }
                                  return (
                                    this.m_gameView.MultiReels.ShowNudgeCount(
                                      i
                                    ),
                                    (e.next = 7),
                                    node$3.Wait(this.m_gameView, 0.5)
                                  );
                                case 7:
                                  return (
                                    this.m_gameView.MultiReels.Nudge(i),
                                    (e.next = 10),
                                    this.m_gameView.MultiReelsS.Nudge(i)
                                  );
                                case 10:
                                  return (
                                    (e.next = 12),
                                    node$3.Wait(this.m_gameView, 0.5)
                                  );
                                case 12:
                                  this.m_gameView.MultiReels.CurrentMulti !=
                                    t.NudgeMult &&
                                    (error("橫版倍率加總錯誤！！！"),
                                    log(
                                      "current:",
                                      this.m_gameView.MultiReels.CurrentMulti,
                                      "NudgeMult:",
                                      t.NudgeMult
                                    )),
                                    this.m_gameView.MultiReelsS.CurrentMulti !=
                                      t.NudgeMult &&
                                      (error("直版倍率加總錯誤！！！"),
                                      log(
                                        "current:",
                                        this.m_gameView.MultiReelsS
                                          .CurrentMulti,
                                        "NudgeMult:",
                                        t.NudgeMult
                                      )),
                                    this.m_gameView.MultiReels.HideNudgeCount(),
                                    this.m_gameView.MultiReelsS.HideNudgeCount(),
                                    node$7.NextState(
                                      Game_Define.GAMEVIEW_STATE
                                        .NUDGE_AWARD_STATE
                                    ),
                                    (e.next = 20);
                                  break;
                                case 19:
                                  node$7.NextState(
                                    Game_Define.GAMEVIEW_STATE.NUDGE_AWARD_STATE
                                  );
                                case 20:
                                  this.m_gameView.MultiReels.LogMultiLabels(),
                                    this.m_gameView.MultiReelsS.LogMultiLabels();
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
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (i.OnProcess = function () {}),
                  (i.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$k),
          _dec$k,
          _class$l;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "7c92dmffwZMO6yM7BmmRFop",
            "PlateShowState",
            void 0
          );
        var ccclass$l = _decorator.ccclass,
          PlateShowState =
            ((_dec$k = ccclass$l("PlateShowState")),
            _dec$k(
              (_class$l = (function (e) {
                function t(t) {
                  var i;
                  return (
                    ((i = e.call(this) || this).m_gameView = null),
                    (i.m_gameView = t),
                    i
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.OnEnter = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    log("GAMEVIEW_STATE.PLATE_SHOW"),
                                    node$1.Play(Game_Define.AudioClips.Debut),
                                    (this.m_gameView.IsRotationLock = !0),
                                    this.m_gameView.SetBGMVolumeByFade(0.5, 0),
                                    (e.next = 6),
                                    this.m_gameView.ShowIntro()
                                  );
                                case 6:
                                  (this.m_gameView.IsRotationLock = !1),
                                    this.m_gameView.OnRotation(),
                                    node$4.SetSpinState(
                                      SlotBottomBarState.IDLE
                                    ),
                                    node$3.FreeSpinRemain > 0
                                      ? node$7.NextState(
                                          CommonState.CHECK_FREESPIN
                                        )
                                      : node$7.NextState(CommonState.IDLE),
                                    node$4.SetBarNodeVisiable(!0, 0.5),
                                    this.m_gameView.SetBGMVolumeByFade(0, 0.5),
                                    node$9.StartAutoShow();
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
                  (i.OnProcess = function () {}),
                  (i.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$l),
          _dec$l,
          _class$m;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "d727dQflgxC6qaFo984+Zmf",
            "RoundEndState",
            void 0
          );
        var ccclass$m = _decorator.ccclass,
          RoundEndState =
            ((_dec$l = ccclass$m("RoundEndState")),
            _dec$l(
              (_class$m = (function (e) {
                function t(t) {
                  var i;
                  return (
                    ((i = e.call(this) || this).m_gameView = null),
                    (i.m_processTick = 0),
                    (i.m_gameView = t),
                    i
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.OnEnter = function () {
                    log("GAMEVIEW_STATE.RoundEndState"),
                      (this.m_gameView.CanSpaceStop = !1),
                      (this.m_gameView.CanPlateStop = !1),
                      (this.m_processTick = 0),
                      this.m_gameView.IsInFG
                        ? this.m_gameView.SpinAck.RoundQueue[
                            this.m_gameView.RoundIdx
                          ].RoundWin > 0
                          ? (this.m_processTick = 1.2)
                          : (this.m_processTick = 0.2)
                        : (node$4.IsAutoSpin &&
                            (this.m_processTick =
                              node$2.TempoSetting.TripleCoinTreasure.AUTO_DELAY_TIME),
                          (this.m_gameView.Win = 0)),
                      node$8.IsFeaturesDemoMode && (this.m_processTick = 0),
                      this.m_gameView.RetryRoundEnd();
                  }),
                  (i.OnProcess = function (e) {
                    (this.m_processTick = node.strip(this.m_processTick - e)),
                      this.m_processTick > 0 ||
                        (node$a.CanToNextRound() &&
                          (!node$b.IsTwice ||
                            (node$b.IsTwice && node$b.IsGetRoundEndAck)) &&
                          (this.m_gameView.IsInFG &&
                          (this.m_gameView.RoundIdx > 0 || node$4.IsAutoSpin)
                            ? node$7.NextState(CommonState.SPIN)
                            : this.m_gameView.IsInFG
                            ? node$7.NextState(CommonState.IDLE)
                            : node$7.NextState(CommonState.END),
                          !this.m_gameView.IsInFG &&
                            node$8.IsFeaturesDemoMode &&
                            (log(
                              "離開特色展示................................"
                            ),
                            node$4.IsAutoSpin && this.m_gameView.StopAutoPlay(),
                            this.m_gameView.ClearAll(),
                            this.m_gameView.SlotReels.ShowDarkOrLightSymbol(!1),
                            this.m_gameView.SlotReels.SetPlateSymbol(
                              this.m_gameView.OldRealPlate
                            ),
                            (this.m_gameView.SpinAck = null))));
                  }),
                  (i.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$m),
          _dec$m,
          _class$n;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "e856eLuJGZJ9qYd6CK5Okbn",
            "RoundShowEndState",
            void 0
          );
        var ccclass$n = _decorator.ccclass,
          RoundShowEndState =
            ((_dec$m = ccclass$n("RoundShowEndState")),
            _dec$m(
              (_class$n = (function (e) {
                function t(t) {
                  var i;
                  return (
                    ((i = e.call(this) || this).m_gameView = null),
                    (i.m_gameView = t),
                    i
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.OnEnter = function () {
                    log("GAMEVIEW_STATE.RoundShowEnd"),
                      node$7.NextState(CommonState.COMMON_SHOW);
                  }),
                  (i.OnProcess = function () {}),
                  (i.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$n),
          _dec$n,
          _class$o;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "d178e+XlwtDopwTIQE7oiid",
            "ScatterState",
            void 0
          );
        var ccclass$o = _decorator.ccclass,
          ScatterState =
            ((_dec$n = ccclass$o("ScatterState")),
            _dec$n(
              (_class$o = (function (e) {
                function t(t) {
                  var i;
                  return (
                    ((i = e.call(this) || this).m_gameView = null),
                    (i.m_gameView = t),
                    i
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.OnEnter = function () {
                    var e = this;
                    log("GAMEVIEW_STATE.SCATTER");
                    var t =
                        this.m_gameView.SpinAck.RoundQueue[
                          this.m_gameView.RoundIdx
                        ],
                      i = function () {
                        var i = !!t.MaxFlag && t.MaxFlag;
                        e.m_gameView.SpinAck.RoundQueue[0].FreeRemainRound >
                          0 &&
                        !e.m_gameView.IsInFG &&
                        !i
                          ? node$7.NextState(
                              Game_Define.GAMEVIEW_STATE.ENTER_FREE
                            )
                          : !e.m_gameView.IsInFG || (t.FreeRemainRound && !i)
                          ? node$7.NextState(
                              Game_Define.GAMEVIEW_STATE.ROUND_END
                            )
                          : node$7.NextState(
                              Game_Define.GAMEVIEW_STATE.LEAVE_FREE
                            );
                      },
                      n = this.m_gameView.PlateInfoTo2DArray(
                        this.m_gameView.SpinAck.RoundQueue[
                          this.m_gameView.RoundIdx
                        ].PlateSymbol
                      );
                    if (
                      this.m_gameView.CheckScatter(n) >=
                      Game_Define.SCATTER_BASE
                    )
                      if (this.m_gameView.IsInFG) {
                        this.m_gameView.EffectPlate.HideSymbolEffect();
                        var r = this.m_gameView.PlateInfoTo2DArray(
                          this.m_gameView.SpinAck.RoundQueue[
                            this.m_gameView.RoundIdx
                          ].PlateSymbol
                        );
                        this.m_gameView.EffectPlate.ShowScatterSymbolEffect(r),
                          (this.m_gameView.IsRotationLock = !0),
                          node$1.Play(Game_Define.AudioClips.Trigger_FG_Bell);
                        var o = Game_Define.AudioClips.Trigger_FG_Bell
                          ? Game_Define.AudioClips.Trigger_FG_Bell.getDuration()
                          : 2;
                        tween(this.m_gameView.node)
                          .delay(o)
                          .call(function () {
                            e.m_gameView.MoreFgSpine.Show(),
                              node$1.Play(Game_Define.AudioClips.Free_Spin_Get);
                          })
                          .delay(2.5)
                          .call(function () {
                            (e.m_gameView.IsRotationLock = !1),
                              e.m_gameView.IsChange &&
                                e.m_gameView.OnRotation(),
                              i(),
                              e.m_gameView.UpdateFgCounter();
                          })
                          .delay(1)
                          .start();
                      } else {
                        this.m_gameView.EffectPlate.HideSymbolEffect();
                        var s = this.m_gameView.PlateInfoTo2DArray(
                          this.m_gameView.SpinAck.RoundQueue[
                            this.m_gameView.RoundIdx
                          ].PlateSymbol
                        );
                        this.m_gameView.EffectPlate.ShowScatterSymbolEffect(s),
                          node$1.Play(Game_Define.AudioClips.Trigger_FG_Bell);
                        var a = Game_Define.AudioClips.Trigger_FG_Bell
                          ? Game_Define.AudioClips.Trigger_FG_Bell.getDuration()
                          : 2;
                        this.m_gameView.Pharaoh.PlayEnterFree(),
                          tween(this.m_gameView.node)
                            .delay(a)
                            .call(function () {
                              i();
                            })
                            .start();
                      }
                    else i();
                  }),
                  (i.OnProcess = function () {}),
                  (i.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$o),
          _dec$o,
          _class$p;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "e2ee5xWNOtIhrzwits9LCIo", "SpinState", void 0);
        var ccclass$p = _decorator.ccclass,
          SpinState =
            ((_dec$o = ccclass$p("SpinState")),
            _dec$o(
              (_class$p = (function (e) {
                function t(t) {
                  var i;
                  return (
                    ((i = e.call(this) || this).m_gameView = null),
                    (i.m_gameView = t),
                    i
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.OnEnter = function () {
                    this.m_gameView.IsSpined ||
                      (log("GAMEVIEW_STATE.SPIN"),
                      node$a.StartSpin(),
                      node$4.IsAutoSpin ||
                        node$1.Play(
                          Game_Define.AudioClips.Reel_Spin,
                          !1,
                          null,
                          0.5
                        ),
                      node$4.CanPlayFeaturesDemo(!1),
                      node$8.SetBuyBonusState(!1),
                      (this.m_gameView.HasScatterCol = [!1, !1, !1, !1, !1]),
                      (this.m_gameView.HasNudgeCol = [!1, !1, !1, !1, !1]),
                      (this.m_gameView.HasNudge = !1),
                      (node$4.IsGameIdle = !1),
                      (this.m_gameView.StartNearWinCol = -1),
                      this.m_gameView.ClearAll(),
                      this.m_gameView.StartSpin(),
                      this.m_gameView.IsInFG
                        ? (this.m_gameView.InitFgPlate(),
                          tween(this.m_gameView.node)
                            .delay(Game_Define.DELAYTIME.NORMAL_SPIN_ACK)
                            .call(function () {
                              node$4.IsAutoSpin ||
                                node$4.SetSpinState(
                                  SlotBottomBarState.START_SPIN
                                );
                            })
                            .start())
                        : ((this.m_gameView.ManualInfoActive = !0),
                          this.m_gameView.UnshowSpinAck &&
                            this.m_gameView.OnRecvSpinAck(
                              this.m_gameView.UnshowSpinAck
                            )),
                      this.m_gameView.UnshowSpinAck &&
                        (this.m_gameView.UnshowSpinAck = null));
                  }),
                  (i.OnProcess = function (e) {
                    this.m_gameView.SlotReels.Spin(e),
                      this.m_gameView.SlotReels.IsPlateStop() &&
                        (this.m_gameView.IsChange &&
                          this.m_gameView.OnRotation(),
                        (this.m_gameView.IsSpined = !1),
                        node$7.NextState(Game_Define.GAMEVIEW_STATE.MULTI_SPIN),
                        (this.m_gameView.CanSpaceStop = !0),
                        (this.m_gameView.CanPlateStop = !0));
                  }),
                  (i.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$p),
          _dec$p,
          _class$q;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "dc2716Cl0pEe7SpPrMTUU15",
            "UnshowPerpareState",
            void 0
          );
        var ccclass$q = _decorator.ccclass,
          UnshowPerpareState =
            ((_dec$p = ccclass$q("UnshowPerpareState")),
            _dec$p(
              (_class$q = (function (e) {
                function t(t) {
                  var i;
                  return (
                    ((i = e.call(this) || this).m_gameView = null),
                    (i.m_gameView = t),
                    i
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.OnEnter = function () {
                    if (
                      (error(
                        "Game_Define.GAMEVIEW_STATE.UNSHOW_PERPARE",
                        this.m_gameView.UnshowSpinAck
                      ),
                      this.m_gameView.UnshowSpinAck)
                    ) {
                      if (
                        (node$4.SetBarNodeVisiable(!0),
                        node$4.SetBarNodeVisiable(!0),
                        (this.m_gameView.IntroNode.active = !1),
                        node$b.UnshowStartRound >= 1)
                      ) {
                        (this.m_gameView.IsInFG = !0),
                          this.m_gameView.CloseManual(),
                          (this.m_gameView.ManualInfoActive = !1),
                          (this.m_gameView.RoundIdx =
                            node$b.UnshowStartRound - 1),
                          error(
                            "UNSHOW_PERPARE this.m_gameView.Round:",
                            this.m_gameView.RoundIdx
                          ),
                          (this.m_gameView.SpinAck =
                            this.m_gameView.UnshowSpinAck);
                        var e =
                          this.m_gameView.SpinAck.RoundQueue[
                            this.m_gameView.RoundIdx
                          ];
                        this.m_gameView.ChangeBackGround(),
                          (this.m_gameView.MultiReelsS.MultiBarSpine.getComponent(
                            UIOpacity
                          ).opacity = 255),
                          this.m_gameView.FgCounter.SetEnterFree(),
                          this.m_gameView.FgCounterS.SetEnterFree(),
                          this.m_gameView.FgCounterOnrotation(),
                          (this.m_gameView.FgLastRound = e.FreeRemainRound
                            ? e.FreeRemainRound
                            : 0),
                          (this.m_gameView.FgCounterS.FgRemainRoundLabel.string =
                            this.m_gameView.FgLastRound.toString()),
                          (this.m_gameView.FgCounter.FgRemainRoundLabel.string =
                            this.m_gameView.FgLastRound.toString());
                        var t = e.FreeTotalRound ? e.FreeTotalRound : 10;
                        (this.m_gameView.FgCounterS.FgTotalRoundLabel.string =
                          t.toString()),
                          (this.m_gameView.FgCounter.FgTotalRoundLabel.string =
                            t.toString()),
                          error(
                            "FgRound:",
                            this.m_gameView.FgLastRound,
                            "TotalFgRound:",
                            t
                          ),
                          (this.m_gameView.Win = 0);
                        for (var i = 0; i < this.m_gameView.RoundIdx + 1; i++) {
                          var n = this.m_gameView.SpinAck.RoundQueue[i];
                          this.m_gameView.Win = node.plus(
                            this.m_gameView.Win,
                            n.RoundWin ? n.RoundWin : 0
                          );
                        }
                        node$4.SetWinValue(this.m_gameView.Win),
                          node$4.SetEnterFree(),
                          null !== this.m_gameView.BgmId &&
                            node$1.Stop(this.m_gameView.BgmId),
                          (this.m_gameView.BgmId = node$1.Play(
                            Game_Define.AudioClips.BGM_FG,
                            !0,
                            null,
                            0.5
                          ));
                      }
                      this.m_gameView.OnRotation(),
                        (node$8.HasUnshow = !1),
                        (node$b.HasUnshow = !1),
                        node$6.ShowMessageBox(
                          node$3.StringKey.MSGBOX_UNSHOW_BACK,
                          node$3.StringKey.MSGBOX_TITLE_SYSTEM_INFO,
                          function () {
                            node$7.NextState(CommonState.SPIN);
                          }
                        );
                    } else
                      console.error(
                        "Info Error",
                        node$b.UnshowStartRound,
                        this.m_gameView.UnshowSpinAck.RoundQueue
                      );
                  }),
                  (i.OnProcess = function () {}),
                  (i.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$q),
          _dec$q,
          _class$r;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "f0709HmXaJNB7CZ773YGl/D",
            "WaitReadyState",
            void 0
          );
        var ccclass$r = _decorator.ccclass,
          WaitReadyState =
            ((_dec$q = ccclass$r("WaitReadyState")),
            _dec$q(
              (_class$r = (function (e) {
                function t(t) {
                  var i;
                  return (
                    ((i = e.call(this) || this).m_gameView = null),
                    (i.m_gameView = t),
                    i
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.OnEnter = function () {
                    log("GAMEVIEW_STATE.WAIT_READY"),
                      this.m_gameView.InitExtra(),
                      this.m_gameView.ChangeBackGround(),
                      node$4.ShowGameScene(),
                      node$4.ShowPlayReady(),
                      node$4.SetBarNodeVisiable(!1),
                      this.m_gameView.SetIntro(),
                      (this.m_gameView.IntroNode.active = !0),
                      node$c.LoadingComplete();
                  }),
                  (i.OnProcess = function () {}),
                  (i.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$r),
          _dec$r,
          _class$s;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "eb8bfKZcQhOY5JSCRmrsu9k",
            "WaitResState",
            void 0
          );
        var ccclass$s = _decorator.ccclass,
          WaitResState =
            ((_dec$r = ccclass$s("WaitResState")),
            _dec$r(
              (_class$s = (function (e) {
                function t(t) {
                  var i;
                  return (
                    ((i = e.call(this) || this).m_gameView = null),
                    (i.m_gameView = t),
                    i
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.OnEnter = function () {
                    log("GAMEVIEW_STATE.WAIT_RES"),
                      node$4.SetBarNodeVisiable(!0);
                  }),
                  (i.OnProcess = function () {
                    Game_Define.AudioClips.Debut &&
                      node$4.IsFeaturesDemoLoaded() &&
                      node$7.NextState(Game_Define.GAMEVIEW_STATE.WAIT_READY);
                  }),
                  (i.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$s);
        cclegacy._RF.pop();
        var CjsLoader = (function () {
            function e() {
              (this._registry = {}), (this._moduleCache = {});
            }
            var t = e.prototype;
            return (
              (t.define = function (e, t, i) {
                this._registry[e] = { factory: t, resolveMap: i };
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
                var i = this._moduleCache[e];
                if (i) return i.exports;
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
                var i, n;
                return e in cjsInfos
                  ? e
                  : t &&
                    null !=
                      (i =
                        null == (n = cjsInfos[t]) ? void 0 : n.resolveCache[e])
                  ? i
                  : void 0;
              }),
              (t._tryModuleLoad = function (e, t) {
                var i = !0;
                try {
                  this._load(e, t), (i = !1);
                } finally {
                  i && delete this._moduleCache[t];
                }
              }),
              (t._load = function (e, t) {
                var i = this._loadWrapper(t),
                  n = i.factory,
                  r = i.resolveMap,
                  o = this._createRequire(e),
                  s = r
                    ? this._createRequireWithResolveMap(
                        "function" == typeof r ? r() : r,
                        o
                      )
                    : o;
                n(e.exports, s, e);
              }),
              (t._loadWrapper = function (e) {
                return e in this._registry
                  ? this._registry[e]
                  : this._loadHostProvidedModules(e);
              }),
              (t._loadHostProvidedModules = function (e) {
                return {
                  factory: function (t, i, n) {
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
                return function (i) {
                  return t._require(i, e);
                };
              }),
              (t._createRequireWithResolveMap = function (e, t) {
                return function (i) {
                  var n = e[i];
                  if (n) return t(n);
                  throw new Error("Unresolved specifier " + i);
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
          _cjsExports,
          __cjsMetaURL =
            "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/long/src/long.js";
        loader.define(
          __cjsMetaURL,
          function (e, t, i, n, r) {
            i.exports = s;
            var o = null;
            try {
              o = new WebAssembly.Instance(
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
            function s(e, t, i) {
              (this.low = 0 | e), (this.high = 0 | t), (this.unsigned = !!i);
            }
            function a(e) {
              return !0 === (e && e.__isLong__);
            }
            s.prototype.__isLong__,
              Object.defineProperty(s.prototype, "__isLong__", { value: !0 }),
              (s.isLong = a);
            var l = {},
              u = {};
            function c(e, t) {
              var i, n, r;
              return t
                ? (r = 0 <= (e >>>= 0) && e < 256) && (n = u[e])
                  ? n
                  : ((i = _(e, (0 | e) < 0 ? -1 : 0, !0)), r && (u[e] = i), i)
                : (r = -128 <= (e |= 0) && e < 128) && (n = l[e])
                ? n
                : ((i = _(e, e < 0 ? -1 : 0, !1)), r && (l[e] = i), i);
            }
            function m(e, t) {
              if (isNaN(e)) return t ? b : w;
              if (t) {
                if (e < 0) return b;
                if (e >= y) return A;
              } else {
                if (e <= -g) return E;
                if (e + 1 >= g) return T;
              }
              return e < 0 ? m(-e, t).neg() : _(e % f | 0, (e / f) | 0, t);
            }
            function _(e, t, i) {
              return new s(e, t, i);
            }
            (s.fromInt = c), (s.fromNumber = m), (s.fromBits = _);
            var p = Math.pow;
            function d(e, t, i) {
              if (0 === e.length) throw Error("empty string");
              if (
                "NaN" === e ||
                "Infinity" === e ||
                "+Infinity" === e ||
                "-Infinity" === e
              )
                return w;
              if (
                ("number" == typeof t ? ((i = t), (t = !1)) : (t = !!t),
                (i = i || 10) < 2 || 36 < i)
              )
                throw RangeError("radix");
              var n;
              if ((n = e.indexOf("-")) > 0) throw Error("interior hyphen");
              if (0 === n) return d(e.substring(1), t, i).neg();
              for (var r = m(p(i, 8)), o = w, s = 0; s < e.length; s += 8) {
                var a = Math.min(8, e.length - s),
                  l = parseInt(e.substring(s, s + a), i);
                if (a < 8) {
                  var u = m(p(i, a));
                  o = o.mul(u).add(m(l));
                } else o = (o = o.mul(r)).add(m(l));
              }
              return (o.unsigned = t), o;
            }
            function h(e, t) {
              return "number" == typeof e
                ? m(e, t)
                : "string" == typeof e
                ? d(e, t)
                : _(e.low, e.high, "boolean" == typeof t ? t : e.unsigned);
            }
            (s.fromString = d), (s.fromValue = h);
            var f = 4294967296,
              y = f * f,
              g = y / 2,
              S = c(1 << 24),
              w = c(0);
            s.ZERO = w;
            var b = c(0, !0);
            s.UZERO = b;
            var v = c(1);
            s.ONE = v;
            var $ = c(1, !0);
            s.UONE = $;
            var R = c(-1);
            s.NEG_ONE = R;
            var T = _(-1, 2147483647, !1);
            s.MAX_VALUE = T;
            var A = _(-1, -1, !0);
            s.MAX_UNSIGNED_VALUE = A;
            var E = _(0, -2147483648, !1);
            s.MIN_VALUE = E;
            var N = s.prototype;
            (N.toInt = function () {
              return this.unsigned ? this.low >>> 0 : this.low;
            }),
              (N.toNumber = function () {
                return this.unsigned
                  ? (this.high >>> 0) * f + (this.low >>> 0)
                  : this.high * f + (this.low >>> 0);
              }),
              (N.toString = function (e) {
                if ((e = e || 10) < 2 || 36 < e) throw RangeError("radix");
                if (this.isZero()) return "0";
                if (this.isNegative()) {
                  if (this.eq(E)) {
                    var t = m(e),
                      i = this.div(t),
                      n = i.mul(t).sub(this);
                    return i.toString(e) + n.toInt().toString(e);
                  }
                  return "-" + this.neg().toString(e);
                }
                for (var r = m(p(e, 6), this.unsigned), o = this, s = ""; ; ) {
                  var a = o.div(r),
                    l = (o.sub(a.mul(r)).toInt() >>> 0).toString(e);
                  if ((o = a).isZero()) return l + s;
                  for (; l.length < 6; ) l = "0" + l;
                  s = "" + l + s;
                }
              }),
              (N.getHighBits = function () {
                return this.high;
              }),
              (N.getHighBitsUnsigned = function () {
                return this.high >>> 0;
              }),
              (N.getLowBits = function () {
                return this.low;
              }),
              (N.getLowBitsUnsigned = function () {
                return this.low >>> 0;
              }),
              (N.getNumBitsAbs = function () {
                if (this.isNegative())
                  return this.eq(E) ? 64 : this.neg().getNumBitsAbs();
                for (
                  var e = 0 != this.high ? this.high : this.low, t = 31;
                  t > 0 && 0 == (e & (1 << t));
                  t--
                );
                return 0 != this.high ? t + 33 : t + 1;
              }),
              (N.isZero = function () {
                return 0 === this.high && 0 === this.low;
              }),
              (N.eqz = N.isZero),
              (N.isNegative = function () {
                return !this.unsigned && this.high < 0;
              }),
              (N.isPositive = function () {
                return this.unsigned || this.high >= 0;
              }),
              (N.isOdd = function () {
                return 1 == (1 & this.low);
              }),
              (N.isEven = function () {
                return 0 == (1 & this.low);
              }),
              (N.equals = function (e) {
                return (
                  a(e) || (e = h(e)),
                  (this.unsigned === e.unsigned ||
                    this.high >>> 31 != 1 ||
                    e.high >>> 31 != 1) &&
                    this.high === e.high &&
                    this.low === e.low
                );
              }),
              (N.eq = N.equals),
              (N.notEquals = function (e) {
                return !this.eq(e);
              }),
              (N.neq = N.notEquals),
              (N.ne = N.notEquals),
              (N.lessThan = function (e) {
                return this.comp(e) < 0;
              }),
              (N.lt = N.lessThan),
              (N.lessThanOrEqual = function (e) {
                return this.comp(e) <= 0;
              }),
              (N.lte = N.lessThanOrEqual),
              (N.le = N.lessThanOrEqual),
              (N.greaterThan = function (e) {
                return this.comp(e) > 0;
              }),
              (N.gt = N.greaterThan),
              (N.greaterThanOrEqual = function (e) {
                return this.comp(e) >= 0;
              }),
              (N.gte = N.greaterThanOrEqual),
              (N.ge = N.greaterThanOrEqual),
              (N.compare = function (e) {
                if ((a(e) || (e = h(e)), this.eq(e))) return 0;
                var t = this.isNegative(),
                  i = e.isNegative();
                return t && !i
                  ? -1
                  : !t && i
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
              (N.comp = N.compare),
              (N.negate = function () {
                return !this.unsigned && this.eq(E) ? E : this.not().add(v);
              }),
              (N.neg = N.negate),
              (N.add = function (e) {
                a(e) || (e = h(e));
                var t = this.high >>> 16,
                  i = 65535 & this.high,
                  n = this.low >>> 16,
                  r = 65535 & this.low,
                  o = e.high >>> 16,
                  s = 65535 & e.high,
                  l = e.low >>> 16,
                  u = 0,
                  c = 0,
                  m = 0,
                  p = 0;
                return (
                  (m += (p += r + (65535 & e.low)) >>> 16),
                  (c += (m += n + l) >>> 16),
                  (u += (c += i + s) >>> 16),
                  (u += t + o),
                  _(
                    ((m &= 65535) << 16) | (p &= 65535),
                    ((u &= 65535) << 16) | (c &= 65535),
                    this.unsigned
                  )
                );
              }),
              (N.subtract = function (e) {
                return a(e) || (e = h(e)), this.add(e.neg());
              }),
              (N.sub = N.subtract),
              (N.multiply = function (e) {
                if (this.isZero()) return w;
                if ((a(e) || (e = h(e)), o))
                  return _(
                    o.mul(this.low, this.high, e.low, e.high),
                    o.get_high(),
                    this.unsigned
                  );
                if (e.isZero()) return w;
                if (this.eq(E)) return e.isOdd() ? E : w;
                if (e.eq(E)) return this.isOdd() ? E : w;
                if (this.isNegative())
                  return e.isNegative()
                    ? this.neg().mul(e.neg())
                    : this.neg().mul(e).neg();
                if (e.isNegative()) return this.mul(e.neg()).neg();
                if (this.lt(S) && e.lt(S))
                  return m(this.toNumber() * e.toNumber(), this.unsigned);
                var t = this.high >>> 16,
                  i = 65535 & this.high,
                  n = this.low >>> 16,
                  r = 65535 & this.low,
                  s = e.high >>> 16,
                  l = 65535 & e.high,
                  u = e.low >>> 16,
                  c = 65535 & e.low,
                  p = 0,
                  d = 0,
                  f = 0,
                  y = 0;
                return (
                  (f += (y += r * c) >>> 16),
                  (d += (f += n * c) >>> 16),
                  (f &= 65535),
                  (d += (f += r * u) >>> 16),
                  (p += (d += i * c) >>> 16),
                  (d &= 65535),
                  (p += (d += n * u) >>> 16),
                  (d &= 65535),
                  (p += (d += r * l) >>> 16),
                  (p += t * c + i * u + n * l + r * s),
                  _(
                    ((f &= 65535) << 16) | (y &= 65535),
                    ((p &= 65535) << 16) | (d &= 65535),
                    this.unsigned
                  )
                );
              }),
              (N.mul = N.multiply),
              (N.divide = function (e) {
                if ((a(e) || (e = h(e)), e.isZero()))
                  throw Error("division by zero");
                var t, i, n;
                if (o)
                  return this.unsigned ||
                    -2147483648 !== this.high ||
                    -1 !== e.low ||
                    -1 !== e.high
                    ? _(
                        (this.unsigned ? o.div_u : o.div_s)(
                          this.low,
                          this.high,
                          e.low,
                          e.high
                        ),
                        o.get_high(),
                        this.unsigned
                      )
                    : this;
                if (this.isZero()) return this.unsigned ? b : w;
                if (this.unsigned) {
                  if ((e.unsigned || (e = e.toUnsigned()), e.gt(this)))
                    return b;
                  if (e.gt(this.shru(1))) return $;
                  n = b;
                } else {
                  if (this.eq(E))
                    return e.eq(v) || e.eq(R)
                      ? E
                      : e.eq(E)
                      ? v
                      : (t = this.shr(1).div(e).shl(1)).eq(w)
                      ? e.isNegative()
                        ? v
                        : R
                      : ((i = this.sub(e.mul(t))), (n = t.add(i.div(e))));
                  if (e.eq(E)) return this.unsigned ? b : w;
                  if (this.isNegative())
                    return e.isNegative()
                      ? this.neg().div(e.neg())
                      : this.neg().div(e).neg();
                  if (e.isNegative()) return this.div(e.neg()).neg();
                  n = w;
                }
                for (i = this; i.gte(e); ) {
                  t = Math.max(1, Math.floor(i.toNumber() / e.toNumber()));
                  for (
                    var r = Math.ceil(Math.log(t) / Math.LN2),
                      s = r <= 48 ? 1 : p(2, r - 48),
                      l = m(t),
                      u = l.mul(e);
                    u.isNegative() || u.gt(i);

                  )
                    u = (l = m((t -= s), this.unsigned)).mul(e);
                  l.isZero() && (l = v), (n = n.add(l)), (i = i.sub(u));
                }
                return n;
              }),
              (N.div = N.divide),
              (N.modulo = function (e) {
                return (
                  a(e) || (e = h(e)),
                  o
                    ? _(
                        (this.unsigned ? o.rem_u : o.rem_s)(
                          this.low,
                          this.high,
                          e.low,
                          e.high
                        ),
                        o.get_high(),
                        this.unsigned
                      )
                    : this.sub(this.div(e).mul(e))
                );
              }),
              (N.mod = N.modulo),
              (N.rem = N.modulo),
              (N.not = function () {
                return _(~this.low, ~this.high, this.unsigned);
              }),
              (N.and = function (e) {
                return (
                  a(e) || (e = h(e)),
                  _(this.low & e.low, this.high & e.high, this.unsigned)
                );
              }),
              (N.or = function (e) {
                return (
                  a(e) || (e = h(e)),
                  _(this.low | e.low, this.high | e.high, this.unsigned)
                );
              }),
              (N.xor = function (e) {
                return (
                  a(e) || (e = h(e)),
                  _(this.low ^ e.low, this.high ^ e.high, this.unsigned)
                );
              }),
              (N.shiftLeft = function (e) {
                return (
                  a(e) && (e = e.toInt()),
                  0 == (e &= 63)
                    ? this
                    : e < 32
                    ? _(
                        this.low << e,
                        (this.high << e) | (this.low >>> (32 - e)),
                        this.unsigned
                      )
                    : _(0, this.low << (e - 32), this.unsigned)
                );
              }),
              (N.shl = N.shiftLeft),
              (N.shiftRight = function (e) {
                return (
                  a(e) && (e = e.toInt()),
                  0 == (e &= 63)
                    ? this
                    : e < 32
                    ? _(
                        (this.low >>> e) | (this.high << (32 - e)),
                        this.high >> e,
                        this.unsigned
                      )
                    : _(
                        this.high >> (e - 32),
                        this.high >= 0 ? 0 : -1,
                        this.unsigned
                      )
                );
              }),
              (N.shr = N.shiftRight),
              (N.shiftRightUnsigned = function (e) {
                if ((a(e) && (e = e.toInt()), 0 === (e &= 63))) return this;
                var t = this.high;
                return e < 32
                  ? _(
                      (this.low >>> e) | (t << (32 - e)),
                      t >>> e,
                      this.unsigned
                    )
                  : _(32 === e ? t : t >>> (e - 32), 0, this.unsigned);
              }),
              (N.shru = N.shiftRightUnsigned),
              (N.shr_u = N.shiftRightUnsigned),
              (N.toSigned = function () {
                return this.unsigned ? _(this.low, this.high, !1) : this;
              }),
              (N.toUnsigned = function () {
                return this.unsigned ? this : _(this.low, this.high, !0);
              }),
              (N.toBytes = function (e) {
                return e ? this.toBytesLE() : this.toBytesBE();
              }),
              (N.toBytesLE = function () {
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
              (N.toBytesBE = function () {
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
              (s.fromBytes = function (e, t, i) {
                return i ? s.fromBytesLE(e, t) : s.fromBytesBE(e, t);
              }),
              (s.fromBytesLE = function (e, t) {
                return new s(
                  e[0] | (e[1] << 8) | (e[2] << 16) | (e[3] << 24),
                  e[4] | (e[5] << 8) | (e[6] << 16) | (e[7] << 24),
                  t
                );
              }),
              (s.fromBytesBE = function (e, t) {
                return new s(
                  (e[4] << 24) | (e[5] << 16) | (e[6] << 8) | e[7],
                  (e[0] << 24) | (e[1] << 16) | (e[2] << 8) | e[3],
                  t
                );
              }),
              (_cjsExports = i.exports);
          },
          {}
        ),
          __cjsMetaURL ||
            loader.throwInvalidWrapper(
              "./long.js",
              "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/long/src/long.mjs?cjs=&original=.js"
            ),
          loader.require(__cjsMetaURL);
        var __cjsMetaURL$1 =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js";
        loader.define(
          __cjsMetaURL$1,
          function (e, t, i, n, r) {
            (i.exports = function (e, t) {
              var i = new Array(arguments.length - 1),
                n = 0,
                r = 2,
                o = !0;
              for (; r < arguments.length; ) i[n++] = arguments[r++];
              return new Promise(function (r, s) {
                i[n] = function (e) {
                  if (o)
                    if (((o = !1), e)) s(e);
                    else {
                      for (
                        var t = new Array(arguments.length - 1), i = 0;
                        i < t.length;

                      )
                        t[i++] = arguments[i];
                      r.apply(null, t);
                    }
                };
                try {
                  e.apply(t || null, i);
                } catch (e) {
                  o && ((o = !1), s(e));
                }
              });
            }),
              i.exports;
          },
          {}
        );
        var __cjsMetaURL$2 =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js";
        loader.define(
          __cjsMetaURL$2,
          function (e, t, i, n, r) {
            var o = e;
            o.length = function (e) {
              var t = e.length;
              if (!t) return 0;
              for (var i = 0; --t % 4 > 1 && "=" === e.charAt(t); ) ++i;
              return Math.ceil(3 * e.length) / 4 - i;
            };
            for (var s = new Array(64), a = new Array(123), l = 0; l < 64; )
              a[
                (s[l] =
                  l < 26
                    ? l + 65
                    : l < 52
                    ? l + 71
                    : l < 62
                    ? l - 4
                    : (l - 59) | 43)
              ] = l++;
            o.encode = function (e, t, i) {
              for (var n, r = null, o = [], a = 0, l = 0; t < i; ) {
                var u = e[t++];
                switch (l) {
                  case 0:
                    (o[a++] = s[u >> 2]), (n = (3 & u) << 4), (l = 1);
                    break;
                  case 1:
                    (o[a++] = s[n | (u >> 4)]), (n = (15 & u) << 2), (l = 2);
                    break;
                  case 2:
                    (o[a++] = s[n | (u >> 6)]), (o[a++] = s[63 & u]), (l = 0);
                }
                a > 8191 &&
                  ((r || (r = [])).push(String.fromCharCode.apply(String, o)),
                  (a = 0));
              }
              return (
                l && ((o[a++] = s[n]), (o[a++] = 61), 1 === l && (o[a++] = 61)),
                r
                  ? (a &&
                      r.push(String.fromCharCode.apply(String, o.slice(0, a))),
                    r.join(""))
                  : String.fromCharCode.apply(String, o.slice(0, a))
              );
            };
            var u = "invalid encoding";
            (o.decode = function (e, t, i) {
              for (var n, r = i, o = 0, s = 0; s < e.length; ) {
                var l = e.charCodeAt(s++);
                if (61 === l && o > 1) break;
                if (void 0 === (l = a[l])) throw Error(u);
                switch (o) {
                  case 0:
                    (n = l), (o = 1);
                    break;
                  case 1:
                    (t[i++] = (n << 2) | ((48 & l) >> 4)), (n = l), (o = 2);
                    break;
                  case 2:
                    (t[i++] = ((15 & n) << 4) | ((60 & l) >> 2)),
                      (n = l),
                      (o = 3);
                    break;
                  case 3:
                    (t[i++] = ((3 & n) << 6) | l), (o = 0);
                }
              }
              if (1 === o) throw Error(u);
              return i - r;
            }),
              (o.test = function (e) {
                return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(
                  e
                );
              }),
              i.exports;
          },
          {}
        );
        var __cjsMetaURL$3 =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js";
        loader.define(
          __cjsMetaURL$3,
          function (e, t, i, n, r) {
            function o() {
              this._listeners = {};
            }
            (i.exports = o),
              (o.prototype.on = function (e, t, i) {
                return (
                  (this._listeners[e] || (this._listeners[e] = [])).push({
                    fn: t,
                    ctx: i || this,
                  }),
                  this
                );
              }),
              (o.prototype.off = function (e, t) {
                if (void 0 === e) this._listeners = {};
                else if (void 0 === t) this._listeners[e] = [];
                else
                  for (var i = this._listeners[e], n = 0; n < i.length; )
                    i[n].fn === t ? i.splice(n, 1) : ++n;
                return this;
              }),
              (o.prototype.emit = function (e) {
                var t = this._listeners[e];
                if (t) {
                  for (var i = [], n = 1; n < arguments.length; )
                    i.push(arguments[n++]);
                  for (n = 0; n < t.length; ) t[n].fn.apply(t[n++].ctx, i);
                }
                return this;
              }),
              i.exports;
          },
          {}
        );
        var __cjsMetaURL$4 =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/@protobufjs/float/index.js";
        loader.define(
          __cjsMetaURL$4,
          function (e, t, i, n, r) {
            function o(e) {
              return (
                "undefined" != typeof Float32Array
                  ? (function () {
                      var t = new Float32Array([-0]),
                        i = new Uint8Array(t.buffer),
                        n = 128 === i[3];
                      function r(e, n, r) {
                        (t[0] = e),
                          (n[r] = i[0]),
                          (n[r + 1] = i[1]),
                          (n[r + 2] = i[2]),
                          (n[r + 3] = i[3]);
                      }
                      function o(e, n, r) {
                        (t[0] = e),
                          (n[r] = i[3]),
                          (n[r + 1] = i[2]),
                          (n[r + 2] = i[1]),
                          (n[r + 3] = i[0]);
                      }
                      function s(e, n) {
                        return (
                          (i[0] = e[n]),
                          (i[1] = e[n + 1]),
                          (i[2] = e[n + 2]),
                          (i[3] = e[n + 3]),
                          t[0]
                        );
                      }
                      function a(e, n) {
                        return (
                          (i[3] = e[n]),
                          (i[2] = e[n + 1]),
                          (i[1] = e[n + 2]),
                          (i[0] = e[n + 3]),
                          t[0]
                        );
                      }
                      (e.writeFloatLE = n ? r : o),
                        (e.writeFloatBE = n ? o : r),
                        (e.readFloatLE = n ? s : a),
                        (e.readFloatBE = n ? a : s);
                    })()
                  : (function () {
                      function t(e, t, i, n) {
                        var r = t < 0 ? 1 : 0;
                        if ((r && (t = -t), 0 === t))
                          e(1 / t > 0 ? 0 : 2147483648, i, n);
                        else if (isNaN(t)) e(2143289344, i, n);
                        else if (t > 34028234663852886e22)
                          e(((r << 31) | 2139095040) >>> 0, i, n);
                        else if (t < 11754943508222875e-54)
                          e(
                            ((r << 31) |
                              Math.round(t / 1401298464324817e-60)) >>>
                              0,
                            i,
                            n
                          );
                        else {
                          var o = Math.floor(Math.log(t) / Math.LN2);
                          e(
                            ((r << 31) |
                              ((o + 127) << 23) |
                              (8388607 &
                                Math.round(t * Math.pow(2, -o) * 8388608))) >>>
                              0,
                            i,
                            n
                          );
                        }
                      }
                      function i(e, t, i) {
                        var n = e(t, i),
                          r = 2 * (n >> 31) + 1,
                          o = (n >>> 23) & 255,
                          s = 8388607 & n;
                        return 255 === o
                          ? s
                            ? NaN
                            : r * (1 / 0)
                          : 0 === o
                          ? 1401298464324817e-60 * r * s
                          : r * Math.pow(2, o - 150) * (s + 8388608);
                      }
                      (e.writeFloatLE = t.bind(null, s)),
                        (e.writeFloatBE = t.bind(null, a)),
                        (e.readFloatLE = i.bind(null, l)),
                        (e.readFloatBE = i.bind(null, u));
                    })(),
                "undefined" != typeof Float64Array
                  ? (function () {
                      var t = new Float64Array([-0]),
                        i = new Uint8Array(t.buffer),
                        n = 128 === i[7];
                      function r(e, n, r) {
                        (t[0] = e),
                          (n[r] = i[0]),
                          (n[r + 1] = i[1]),
                          (n[r + 2] = i[2]),
                          (n[r + 3] = i[3]),
                          (n[r + 4] = i[4]),
                          (n[r + 5] = i[5]),
                          (n[r + 6] = i[6]),
                          (n[r + 7] = i[7]);
                      }
                      function o(e, n, r) {
                        (t[0] = e),
                          (n[r] = i[7]),
                          (n[r + 1] = i[6]),
                          (n[r + 2] = i[5]),
                          (n[r + 3] = i[4]),
                          (n[r + 4] = i[3]),
                          (n[r + 5] = i[2]),
                          (n[r + 6] = i[1]),
                          (n[r + 7] = i[0]);
                      }
                      function s(e, n) {
                        return (
                          (i[0] = e[n]),
                          (i[1] = e[n + 1]),
                          (i[2] = e[n + 2]),
                          (i[3] = e[n + 3]),
                          (i[4] = e[n + 4]),
                          (i[5] = e[n + 5]),
                          (i[6] = e[n + 6]),
                          (i[7] = e[n + 7]),
                          t[0]
                        );
                      }
                      function a(e, n) {
                        return (
                          (i[7] = e[n]),
                          (i[6] = e[n + 1]),
                          (i[5] = e[n + 2]),
                          (i[4] = e[n + 3]),
                          (i[3] = e[n + 4]),
                          (i[2] = e[n + 5]),
                          (i[1] = e[n + 6]),
                          (i[0] = e[n + 7]),
                          t[0]
                        );
                      }
                      (e.writeDoubleLE = n ? r : o),
                        (e.writeDoubleBE = n ? o : r),
                        (e.readDoubleLE = n ? s : a),
                        (e.readDoubleBE = n ? a : s);
                    })()
                  : (function () {
                      function t(e, t, i, n, r, o) {
                        var s = n < 0 ? 1 : 0;
                        if ((s && (n = -n), 0 === n))
                          e(0, r, o + t),
                            e(1 / n > 0 ? 0 : 2147483648, r, o + i);
                        else if (isNaN(n))
                          e(0, r, o + t), e(2146959360, r, o + i);
                        else if (n > 17976931348623157e292)
                          e(0, r, o + t),
                            e(((s << 31) | 2146435072) >>> 0, r, o + i);
                        else {
                          var a;
                          if (n < 22250738585072014e-324)
                            e((a = n / 5e-324) >>> 0, r, o + t),
                              e(((s << 31) | (a / 4294967296)) >>> 0, r, o + i);
                          else {
                            var l = Math.floor(Math.log(n) / Math.LN2);
                            1024 === l && (l = 1023),
                              e(
                                (4503599627370496 *
                                  (a = n * Math.pow(2, -l))) >>>
                                  0,
                                r,
                                o + t
                              ),
                              e(
                                ((s << 31) |
                                  ((l + 1023) << 20) |
                                  ((1048576 * a) & 1048575)) >>>
                                  0,
                                r,
                                o + i
                              );
                          }
                        }
                      }
                      function i(e, t, i, n, r) {
                        var o = e(n, r + t),
                          s = e(n, r + i),
                          a = 2 * (s >> 31) + 1,
                          l = (s >>> 20) & 2047,
                          u = 4294967296 * (1048575 & s) + o;
                        return 2047 === l
                          ? u
                            ? NaN
                            : a * (1 / 0)
                          : 0 === l
                          ? 5e-324 * a * u
                          : a * Math.pow(2, l - 1075) * (u + 4503599627370496);
                      }
                      (e.writeDoubleLE = t.bind(null, s, 0, 4)),
                        (e.writeDoubleBE = t.bind(null, a, 4, 0)),
                        (e.readDoubleLE = i.bind(null, l, 0, 4)),
                        (e.readDoubleBE = i.bind(null, u, 4, 0));
                    })(),
                e
              );
            }
            function s(e, t, i) {
              (t[i] = 255 & e),
                (t[i + 1] = (e >>> 8) & 255),
                (t[i + 2] = (e >>> 16) & 255),
                (t[i + 3] = e >>> 24);
            }
            function a(e, t, i) {
              (t[i] = e >>> 24),
                (t[i + 1] = (e >>> 16) & 255),
                (t[i + 2] = (e >>> 8) & 255),
                (t[i + 3] = 255 & e);
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
            function u(e, t) {
              return (
                ((e[t] << 24) |
                  (e[t + 1] << 16) |
                  (e[t + 2] << 8) |
                  e[t + 3]) >>>
                0
              );
            }
            (i.exports = o(o)),
              i.exports,
              i.exports.writeFloatLE,
              i.exports.writeFloatBE,
              i.exports.readFloatLE,
              i.exports.readFloatBE,
              i.exports.writeDoubleLE,
              i.exports.writeDoubleBE,
              i.exports.readDoubleLE,
              i.exports.readDoubleBE;
          },
          {}
        );
        var __cjsMetaURL$5 =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js";
        loader.define(
          __cjsMetaURL$5,
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
        var __cjsMetaURL$6 =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js";
        loader.define(
          __cjsMetaURL$6,
          function (e, t, i, n, r) {
            var o = e;
            (o.length = function (e) {
              for (var t = 0, i = 0, n = 0; n < e.length; ++n)
                (i = e.charCodeAt(n)) < 128
                  ? (t += 1)
                  : i < 2048
                  ? (t += 2)
                  : 55296 == (64512 & i) &&
                    56320 == (64512 & e.charCodeAt(n + 1))
                  ? (++n, (t += 4))
                  : (t += 3);
              return t;
            }),
              (o.read = function (e, t, i) {
                if (i - t < 1) return "";
                for (var n, r = null, o = [], s = 0; t < i; )
                  (n = e[t++]) < 128
                    ? (o[s++] = n)
                    : n > 191 && n < 224
                    ? (o[s++] = ((31 & n) << 6) | (63 & e[t++]))
                    : n > 239 && n < 365
                    ? ((n =
                        (((7 & n) << 18) |
                          ((63 & e[t++]) << 12) |
                          ((63 & e[t++]) << 6) |
                          (63 & e[t++])) -
                        65536),
                      (o[s++] = 55296 + (n >> 10)),
                      (o[s++] = 56320 + (1023 & n)))
                    : (o[s++] =
                        ((15 & n) << 12) |
                        ((63 & e[t++]) << 6) |
                        (63 & e[t++])),
                    s > 8191 &&
                      ((r || (r = [])).push(
                        String.fromCharCode.apply(String, o)
                      ),
                      (s = 0));
                return r
                  ? (s &&
                      r.push(String.fromCharCode.apply(String, o.slice(0, s))),
                    r.join(""))
                  : String.fromCharCode.apply(String, o.slice(0, s));
              }),
              (o.write = function (e, t, i) {
                for (var n, r, o = i, s = 0; s < e.length; ++s)
                  (n = e.charCodeAt(s)) < 128
                    ? (t[i++] = n)
                    : n < 2048
                    ? ((t[i++] = (n >> 6) | 192), (t[i++] = (63 & n) | 128))
                    : 55296 == (64512 & n) &&
                      56320 == (64512 & (r = e.charCodeAt(s + 1)))
                    ? ((n = 65536 + ((1023 & n) << 10) + (1023 & r)),
                      ++s,
                      (t[i++] = (n >> 18) | 240),
                      (t[i++] = ((n >> 12) & 63) | 128),
                      (t[i++] = ((n >> 6) & 63) | 128),
                      (t[i++] = (63 & n) | 128))
                    : ((t[i++] = (n >> 12) | 224),
                      (t[i++] = ((n >> 6) & 63) | 128),
                      (t[i++] = (63 & n) | 128));
                return i - o;
              }),
              i.exports;
          },
          {}
        );
        var __cjsMetaURL$7 =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js";
        loader.define(
          __cjsMetaURL$7,
          function (e, t, i, n, r) {
            (i.exports = function (e, t, i) {
              var n = i || 8192,
                r = n >>> 1,
                o = null,
                s = n;
              return function (i) {
                if (i < 1 || i > r) return e(i);
                s + i > n && ((o = e(n)), (s = 0));
                var a = t.call(o, s, (s += i));
                return 7 & s && (s = 1 + (7 | s)), a;
              };
            }),
              i.exports;
          },
          {}
        );
        var __cjsMetaURL$8 =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js";
        loader.define(
          __cjsMetaURL$8,
          function (e, t, i, n, r) {
            i.exports = s;
            var o = t("../util/minimal");
            function s(e, t) {
              (this.lo = e >>> 0), (this.hi = t >>> 0);
            }
            var a = (s.zero = new s(0, 0));
            (a.toNumber = function () {
              return 0;
            }),
              (a.zzEncode = a.zzDecode =
                function () {
                  return this;
                }),
              (a.length = function () {
                return 1;
              });
            var l = (s.zeroHash = "\0\0\0\0\0\0\0\0");
            (s.fromNumber = function (e) {
              if (0 === e) return a;
              var t = e < 0;
              t && (e = -e);
              var i = e >>> 0,
                n = ((e - i) / 4294967296) >>> 0;
              return (
                t &&
                  ((n = ~n >>> 0),
                  (i = ~i >>> 0),
                  ++i > 4294967295 && ((i = 0), ++n > 4294967295 && (n = 0))),
                new s(i, n)
              );
            }),
              (s.from = function (e) {
                if ("number" == typeof e) return s.fromNumber(e);
                if (o.isString(e)) {
                  if (!o.Long) return s.fromNumber(parseInt(e, 10));
                  e = o.Long.fromString(e);
                }
                return e.low || e.high ? new s(e.low >>> 0, e.high >>> 0) : a;
              }),
              (s.prototype.toNumber = function (e) {
                if (!e && this.hi >>> 31) {
                  var t = (1 + ~this.lo) >>> 0,
                    i = ~this.hi >>> 0;
                  return t || (i = (i + 1) >>> 0), -(t + 4294967296 * i);
                }
                return this.lo + 4294967296 * this.hi;
              }),
              (s.prototype.toLong = function (e) {
                return o.Long
                  ? new o.Long(0 | this.lo, 0 | this.hi, Boolean(e))
                  : {
                      low: 0 | this.lo,
                      high: 0 | this.hi,
                      unsigned: Boolean(e),
                    };
              });
            var u = String.prototype.charCodeAt;
            (s.fromHash = function (e) {
              return e === l
                ? a
                : new s(
                    (u.call(e, 0) |
                      (u.call(e, 1) << 8) |
                      (u.call(e, 2) << 16) |
                      (u.call(e, 3) << 24)) >>>
                      0,
                    (u.call(e, 4) |
                      (u.call(e, 5) << 8) |
                      (u.call(e, 6) << 16) |
                      (u.call(e, 7) << 24)) >>>
                      0
                  );
            }),
              (s.prototype.toHash = function () {
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
              (s.prototype.zzEncode = function () {
                var e = this.hi >> 31;
                return (
                  (this.hi = (((this.hi << 1) | (this.lo >>> 31)) ^ e) >>> 0),
                  (this.lo = ((this.lo << 1) ^ e) >>> 0),
                  this
                );
              }),
              (s.prototype.zzDecode = function () {
                var e = -(1 & this.lo);
                return (
                  (this.lo = (((this.lo >>> 1) | (this.hi << 31)) ^ e) >>> 0),
                  (this.hi = ((this.hi >>> 1) ^ e) >>> 0),
                  this
                );
              }),
              (s.prototype.length = function () {
                var e = this.lo,
                  t = ((this.lo >>> 28) | (this.hi << 4)) >>> 0,
                  i = this.hi >>> 24;
                return 0 === i
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
                  : i < 128
                  ? 9
                  : 10;
              }),
              i.exports;
          },
          function () {
            return { "../util/minimal": __cjsMetaURL$9 };
          }
        );
        var __cjsMetaURL$9 =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js";
        loader.define(
          __cjsMetaURL$9,
          function (e, t, i, n, r) {
            var o = e;
            function s(e, t, i) {
              for (var n = Object.keys(t), r = 0; r < n.length; ++r)
                (void 0 !== e[n[r]] && i) || (e[n[r]] = t[n[r]]);
              return e;
            }
            function a(e) {
              function t(e, i) {
                if (!(this instanceof t)) return new t(e, i);
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
                  i && s(this, i);
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
            (o.asPromise = t("@protobufjs/aspromise")),
              (o.base64 = t("@protobufjs/base64")),
              (o.EventEmitter = t("@protobufjs/eventemitter")),
              (o.float = t("@protobufjs/float")),
              (o.inquire = t("@protobufjs/inquire")),
              (o.utf8 = t("@protobufjs/utf8")),
              (o.pool = t("@protobufjs/pool")),
              (o.LongBits = t("./longbits")),
              (o.isNode = Boolean(
                "undefined" != typeof global &&
                  global &&
                  global.process &&
                  global.process.versions &&
                  global.process.versions.node
              )),
              (o.global =
                (o.isNode && global) ||
                ("undefined" != typeof window && window) ||
                ("undefined" != typeof self && self) ||
                this),
              (o.emptyArray = Object.freeze ? Object.freeze([]) : []),
              (o.emptyObject = Object.freeze ? Object.freeze({}) : {}),
              (o.isInteger =
                Number.isInteger ||
                function (e) {
                  return (
                    "number" == typeof e && isFinite(e) && Math.floor(e) === e
                  );
                }),
              (o.isString = function (e) {
                return "string" == typeof e || e instanceof String;
              }),
              (o.isObject = function (e) {
                return e && "object" == typeof e;
              }),
              (o.isset = o.isSet =
                function (e, t) {
                  var i = e[t];
                  return (
                    !(null == i || !e.hasOwnProperty(t)) &&
                    ("object" != typeof i ||
                      (Array.isArray(i) ? i.length : Object.keys(i).length) > 0)
                  );
                }),
              (o.Buffer = (function () {
                try {
                  var e = o.inquire("buffer").Buffer;
                  return e.prototype.utf8Write ? e : null;
                } catch (e) {
                  return null;
                }
              })()),
              (o._Buffer_from = null),
              (o._Buffer_allocUnsafe = null),
              (o.newBuffer = function (e) {
                return "number" == typeof e
                  ? o.Buffer
                    ? o._Buffer_allocUnsafe(e)
                    : new o.Array(e)
                  : o.Buffer
                  ? o._Buffer_from(e)
                  : "undefined" == typeof Uint8Array
                  ? e
                  : new Uint8Array(e);
              }),
              (o.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array),
              (o.Long =
                (o.global.dcodeIO && o.global.dcodeIO.Long) ||
                o.global.Long ||
                o.inquire("long")),
              (o.key2Re = /^true|false|0|1$/),
              (o.key32Re = /^-?(?:0|[1-9][0-9]*)$/),
              (o.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/),
              (o.longToHash = function (e) {
                return e ? o.LongBits.from(e).toHash() : o.LongBits.zeroHash;
              }),
              (o.longFromHash = function (e, t) {
                var i = o.LongBits.fromHash(e);
                return o.Long
                  ? o.Long.fromBits(i.lo, i.hi, t)
                  : i.toNumber(Boolean(t));
              }),
              (o.merge = s),
              (o.lcFirst = function (e) {
                return e.charAt(0).toLowerCase() + e.substring(1);
              }),
              (o.newError = a),
              (o.ProtocolError = a("ProtocolError")),
              (o.oneOfGetter = function (e) {
                for (var t = {}, i = 0; i < e.length; ++i) t[e[i]] = 1;
                return function () {
                  for (var e = Object.keys(this), i = e.length - 1; i > -1; --i)
                    if (
                      1 === t[e[i]] &&
                      void 0 !== this[e[i]] &&
                      null !== this[e[i]]
                    )
                      return e[i];
                };
              }),
              (o.oneOfSetter = function (e) {
                return function (t) {
                  for (var i = 0; i < e.length; ++i)
                    e[i] !== t && delete this[e[i]];
                };
              }),
              (o.toJSONOptions = {
                longs: String,
                enums: String,
                bytes: String,
                json: !0,
              }),
              (o._configure = function () {
                var e = o.Buffer;
                e
                  ? ((o._Buffer_from =
                      (e.from !== Uint8Array.from && e.from) ||
                      function (t, i) {
                        return new e(t, i);
                      }),
                    (o._Buffer_allocUnsafe =
                      e.allocUnsafe ||
                      function (t) {
                        return new e(t);
                      }))
                  : (o._Buffer_from = o._Buffer_allocUnsafe = null);
              }),
              i.exports;
          },
          function () {
            return {
              "@protobufjs/aspromise": __cjsMetaURL$1,
              "@protobufjs/base64": __cjsMetaURL$2,
              "@protobufjs/eventemitter": __cjsMetaURL$3,
              "@protobufjs/float": __cjsMetaURL$4,
              "@protobufjs/inquire": __cjsMetaURL$5,
              "@protobufjs/utf8": __cjsMetaURL$6,
              "@protobufjs/pool": __cjsMetaURL$7,
              "./longbits": __cjsMetaURL$8,
            };
          }
        );
        var __cjsMetaURL$a =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/src/writer.js";
        loader.define(
          __cjsMetaURL$a,
          function (e, t, i, n, r) {
            i.exports = p;
            var o,
              s = t("./util/minimal"),
              a = s.LongBits,
              l = s.base64,
              u = s.utf8;
            function c(e, t, i) {
              (this.fn = e),
                (this.len = t),
                (this.next = void 0),
                (this.val = i);
            }
            function m() {}
            function _(e) {
              (this.head = e.head),
                (this.tail = e.tail),
                (this.len = e.len),
                (this.next = e.states);
            }
            function p() {
              (this.len = 0),
                (this.head = new c(m, 0, 0)),
                (this.tail = this.head),
                (this.states = null);
            }
            var d = function () {
              return s.Buffer
                ? function () {
                    return (p.create = function () {
                      return new o();
                    })();
                  }
                : function () {
                    return new p();
                  };
            };
            function h(e, t, i) {
              t[i] = 255 & e;
            }
            function f(e, t) {
              (this.len = e), (this.next = void 0), (this.val = t);
            }
            function y(e, t, i) {
              for (; e.hi; )
                (t[i++] = (127 & e.lo) | 128),
                  (e.lo = ((e.lo >>> 7) | (e.hi << 25)) >>> 0),
                  (e.hi >>>= 7);
              for (; e.lo > 127; )
                (t[i++] = (127 & e.lo) | 128), (e.lo = e.lo >>> 7);
              t[i++] = e.lo;
            }
            function g(e, t, i) {
              (t[i] = 255 & e),
                (t[i + 1] = (e >>> 8) & 255),
                (t[i + 2] = (e >>> 16) & 255),
                (t[i + 3] = e >>> 24);
            }
            (p.create = d()),
              (p.alloc = function (e) {
                return new s.Array(e);
              }),
              s.Array !== Array &&
                (p.alloc = s.pool(p.alloc, s.Array.prototype.subarray)),
              (p.prototype._push = function (e, t, i) {
                return (
                  (this.tail = this.tail.next = new c(e, t, i)),
                  (this.len += t),
                  this
                );
              }),
              (f.prototype = Object.create(c.prototype)),
              (f.prototype.fn = function (e, t, i) {
                for (; e > 127; ) (t[i++] = (127 & e) | 128), (e >>>= 7);
                t[i] = e;
              }),
              (p.prototype.uint32 = function (e) {
                return (
                  (this.len += (this.tail = this.tail.next =
                    new f(
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
              (p.prototype.int32 = function (e) {
                return e < 0
                  ? this._push(y, 10, a.fromNumber(e))
                  : this.uint32(e);
              }),
              (p.prototype.sint32 = function (e) {
                return this.uint32(((e << 1) ^ (e >> 31)) >>> 0);
              }),
              (p.prototype.uint64 = function (e) {
                var t = a.from(e);
                return this._push(y, t.length(), t);
              }),
              (p.prototype.int64 = p.prototype.uint64),
              (p.prototype.sint64 = function (e) {
                var t = a.from(e).zzEncode();
                return this._push(y, t.length(), t);
              }),
              (p.prototype.bool = function (e) {
                return this._push(h, 1, e ? 1 : 0);
              }),
              (p.prototype.fixed32 = function (e) {
                return this._push(g, 4, e >>> 0);
              }),
              (p.prototype.sfixed32 = p.prototype.fixed32),
              (p.prototype.fixed64 = function (e) {
                var t = a.from(e);
                return this._push(g, 4, t.lo)._push(g, 4, t.hi);
              }),
              (p.prototype.sfixed64 = p.prototype.fixed64),
              (p.prototype.float = function (e) {
                return this._push(s.float.writeFloatLE, 4, e);
              }),
              (p.prototype.double = function (e) {
                return this._push(s.float.writeDoubleLE, 8, e);
              });
            var S = s.Array.prototype.set
              ? function (e, t, i) {
                  t.set(e, i);
                }
              : function (e, t, i) {
                  for (var n = 0; n < e.length; ++n) t[i + n] = e[n];
                };
            (p.prototype.bytes = function (e) {
              var t = e.length >>> 0;
              if (!t) return this._push(h, 1, 0);
              if (s.isString(e)) {
                var i = p.alloc((t = l.length(e)));
                l.decode(e, i, 0), (e = i);
              }
              return this.uint32(t)._push(S, t, e);
            }),
              (p.prototype.string = function (e) {
                var t = u.length(e);
                return t
                  ? this.uint32(t)._push(u.write, t, e)
                  : this._push(h, 1, 0);
              }),
              (p.prototype.fork = function () {
                return (
                  (this.states = new _(this)),
                  (this.head = this.tail = new c(m, 0, 0)),
                  (this.len = 0),
                  this
                );
              }),
              (p.prototype.reset = function () {
                return (
                  this.states
                    ? ((this.head = this.states.head),
                      (this.tail = this.states.tail),
                      (this.len = this.states.len),
                      (this.states = this.states.next))
                    : ((this.head = this.tail = new c(m, 0, 0)),
                      (this.len = 0)),
                  this
                );
              }),
              (p.prototype.ldelim = function () {
                var e = this.head,
                  t = this.tail,
                  i = this.len;
                return (
                  this.reset().uint32(i),
                  i &&
                    ((this.tail.next = e.next),
                    (this.tail = t),
                    (this.len += i)),
                  this
                );
              }),
              (p.prototype.finish = function () {
                for (
                  var e = this.head.next,
                    t = this.constructor.alloc(this.len),
                    i = 0;
                  e;

                )
                  e.fn(e.val, t, i), (i += e.len), (e = e.next);
                return t;
              }),
              (p._configure = function (e) {
                (o = e), (p.create = d()), o._configure();
              }),
              i.exports;
          },
          function () {
            return { "./util/minimal": __cjsMetaURL$9 };
          }
        );
        var __cjsMetaURL$b =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js";
        loader.define(
          __cjsMetaURL$b,
          function (e, t, i, n, r) {
            i.exports = a;
            var o = t("./writer");
            (a.prototype = Object.create(o.prototype)).constructor = a;
            var s = t("./util/minimal");
            function a() {
              o.call(this);
            }
            function l(e, t, i) {
              e.length < 40
                ? s.utf8.write(e, t, i)
                : t.utf8Write
                ? t.utf8Write(e, i)
                : t.write(e, i);
            }
            (a._configure = function () {
              (a.alloc = s._Buffer_allocUnsafe),
                (a.writeBytesBuffer =
                  s.Buffer &&
                  s.Buffer.prototype instanceof Uint8Array &&
                  "set" === s.Buffer.prototype.set.name
                    ? function (e, t, i) {
                        t.set(e, i);
                      }
                    : function (e, t, i) {
                        if (e.copy) e.copy(t, i, 0, e.length);
                        else for (var n = 0; n < e.length; ) t[i++] = e[n++];
                      });
            }),
              (a.prototype.bytes = function (e) {
                s.isString(e) && (e = s._Buffer_from(e, "base64"));
                var t = e.length >>> 0;
                return (
                  this.uint32(t),
                  t && this._push(a.writeBytesBuffer, t, e),
                  this
                );
              }),
              (a.prototype.string = function (e) {
                var t = s.Buffer.byteLength(e);
                return this.uint32(t), t && this._push(l, t, e), this;
              }),
              a._configure(),
              i.exports;
          },
          function () {
            return {
              "./writer": __cjsMetaURL$a,
              "./util/minimal": __cjsMetaURL$9,
            };
          }
        );
        var __cjsMetaURL$c =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/src/reader.js";
        loader.define(
          __cjsMetaURL$c,
          function (e, t, i, n, r) {
            i.exports = c;
            var o,
              s = t("./util/minimal"),
              a = s.LongBits,
              l = s.utf8;
            function u(e, t) {
              return RangeError(
                "index out of range: " +
                  e.pos +
                  " + " +
                  (t || 1) +
                  " > " +
                  e.len
              );
            }
            function c(e) {
              (this.buf = e), (this.pos = 0), (this.len = e.length);
            }
            var m,
              _ =
                "undefined" != typeof Uint8Array
                  ? function (e) {
                      if (e instanceof Uint8Array || Array.isArray(e))
                        return new c(e);
                      throw Error("illegal buffer");
                    }
                  : function (e) {
                      if (Array.isArray(e)) return new c(e);
                      throw Error("illegal buffer");
                    },
              p = function () {
                return s.Buffer
                  ? function (e) {
                      return (c.create = function (e) {
                        return s.Buffer.isBuffer(e) ? new o(e) : _(e);
                      })(e);
                    }
                  : _;
              };
            function d() {
              var e = new a(0, 0),
                t = 0;
              if (!(this.len - this.pos > 4)) {
                for (; t < 3; ++t) {
                  if (this.pos >= this.len) throw u(this);
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
                  if (this.pos >= this.len) throw u(this);
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
            function h(e, t) {
              return (
                (e[t - 4] |
                  (e[t - 3] << 8) |
                  (e[t - 2] << 16) |
                  (e[t - 1] << 24)) >>>
                0
              );
            }
            function f() {
              if (this.pos + 8 > this.len) throw u(this, 8);
              return new a(
                h(this.buf, (this.pos += 4)),
                h(this.buf, (this.pos += 4))
              );
            }
            (c.create = p()),
              (c.prototype._slice =
                s.Array.prototype.subarray || s.Array.prototype.slice),
              (c.prototype.uint32 =
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
                    throw ((this.pos = this.len), u(this, 10));
                  return m;
                })),
              (c.prototype.int32 = function () {
                return 0 | this.uint32();
              }),
              (c.prototype.sint32 = function () {
                var e = this.uint32();
                return ((e >>> 1) ^ -(1 & e)) | 0;
              }),
              (c.prototype.bool = function () {
                return 0 !== this.uint32();
              }),
              (c.prototype.fixed32 = function () {
                if (this.pos + 4 > this.len) throw u(this, 4);
                return h(this.buf, (this.pos += 4));
              }),
              (c.prototype.sfixed32 = function () {
                if (this.pos + 4 > this.len) throw u(this, 4);
                return 0 | h(this.buf, (this.pos += 4));
              }),
              (c.prototype.float = function () {
                if (this.pos + 4 > this.len) throw u(this, 4);
                var e = s.float.readFloatLE(this.buf, this.pos);
                return (this.pos += 4), e;
              }),
              (c.prototype.double = function () {
                if (this.pos + 8 > this.len) throw u(this, 4);
                var e = s.float.readDoubleLE(this.buf, this.pos);
                return (this.pos += 8), e;
              }),
              (c.prototype.bytes = function () {
                var e = this.uint32(),
                  t = this.pos,
                  i = this.pos + e;
                if (i > this.len) throw u(this, e);
                return (
                  (this.pos += e),
                  Array.isArray(this.buf)
                    ? this.buf.slice(t, i)
                    : t === i
                    ? new this.buf.constructor(0)
                    : this._slice.call(this.buf, t, i)
                );
              }),
              (c.prototype.string = function () {
                var e = this.bytes();
                return l.read(e, 0, e.length);
              }),
              (c.prototype.skip = function (e) {
                if ("number" == typeof e) {
                  if (this.pos + e > this.len) throw u(this, e);
                  this.pos += e;
                } else
                  do {
                    if (this.pos >= this.len) throw u(this);
                  } while (128 & this.buf[this.pos++]);
                return this;
              }),
              (c.prototype.skipType = function (e) {
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
              (c._configure = function (e) {
                (o = e), (c.create = p()), o._configure();
                var t = s.Long ? "toLong" : "toNumber";
                s.merge(c.prototype, {
                  int64: function () {
                    return d.call(this)[t](!1);
                  },
                  uint64: function () {
                    return d.call(this)[t](!0);
                  },
                  sint64: function () {
                    return d.call(this).zzDecode()[t](!1);
                  },
                  fixed64: function () {
                    return f.call(this)[t](!0);
                  },
                  sfixed64: function () {
                    return f.call(this)[t](!1);
                  },
                });
              }),
              i.exports;
          },
          function () {
            return { "./util/minimal": __cjsMetaURL$9 };
          }
        );
        var __cjsMetaURL$d =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js";
        loader.define(
          __cjsMetaURL$d,
          function (e, t, i, n, r) {
            i.exports = a;
            var o = t("./reader");
            (a.prototype = Object.create(o.prototype)).constructor = a;
            var s = t("./util/minimal");
            function a(e) {
              o.call(this, e);
            }
            (a._configure = function () {
              s.Buffer && (a.prototype._slice = s.Buffer.prototype.slice);
            }),
              (a.prototype.string = function () {
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
              a._configure(),
              i.exports;
          },
          function () {
            return {
              "./reader": __cjsMetaURL$c,
              "./util/minimal": __cjsMetaURL$9,
            };
          }
        );
        var __cjsMetaURL$e =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js";
        loader.define(
          __cjsMetaURL$e,
          function (e, t, i, n, r) {
            i.exports = s;
            var o = t("../util/minimal");
            function s(e, t, i) {
              if ("function" != typeof e)
                throw TypeError("rpcImpl must be a function");
              o.EventEmitter.call(this),
                (this.rpcImpl = e),
                (this.requestDelimited = Boolean(t)),
                (this.responseDelimited = Boolean(i));
            }
            ((s.prototype = Object.create(
              o.EventEmitter.prototype
            )).constructor = s),
              (s.prototype.rpcCall = function e(t, i, n, r, s) {
                if (!r) throw TypeError("request must be specified");
                var a = this;
                if (!s) return o.asPromise(e, a, t, i, n, r);
                if (a.rpcImpl)
                  try {
                    return a.rpcImpl(
                      t,
                      i[a.requestDelimited ? "encodeDelimited" : "encode"](
                        r
                      ).finish(),
                      function (e, i) {
                        if (e) return a.emit("error", e, t), s(e);
                        if (null !== i) {
                          if (!(i instanceof n))
                            try {
                              i =
                                n[
                                  a.responseDelimited
                                    ? "decodeDelimited"
                                    : "decode"
                                ](i);
                            } catch (e) {
                              return a.emit("error", e, t), s(e);
                            }
                          return a.emit("data", i, t), s(null, i);
                        }
                        a.end(!0);
                      }
                    );
                  } catch (e) {
                    return (
                      a.emit("error", e, t),
                      void setTimeout(function () {
                        s(e);
                      }, 0)
                    );
                  }
                else
                  setTimeout(function () {
                    s(Error("already ended"));
                  }, 0);
              }),
              (s.prototype.end = function (e) {
                return (
                  this.rpcImpl &&
                    (e || this.rpcImpl(null, null, null),
                    (this.rpcImpl = null),
                    this.emit("end").off()),
                  this
                );
              }),
              i.exports;
          },
          function () {
            return { "../util/minimal": __cjsMetaURL$9 };
          }
        );
        var __cjsMetaURL$f =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js";
        loader.define(
          __cjsMetaURL$f,
          function (e, t, i, n, r) {
            (e.Service = t("./rpc/service")), i.exports;
          },
          function () {
            return { "./rpc/service": __cjsMetaURL$e };
          }
        );
        var __cjsMetaURL$g =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/src/roots.js";
        loader.define(
          __cjsMetaURL$g,
          function (e, t, i, n, r) {
            (i.exports = {}), i.exports;
          },
          {}
        );
        var __cjsMetaURL$h =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js";
        loader.define(
          __cjsMetaURL$h,
          function (e, t, i, n, r) {
            var o = e;
            function s() {
              o.util._configure(),
                o.Writer._configure(o.BufferWriter),
                o.Reader._configure(o.BufferReader);
            }
            (o.build = "minimal"),
              (o.Writer = t("./writer")),
              (o.BufferWriter = t("./writer_buffer")),
              (o.Reader = t("./reader")),
              (o.BufferReader = t("./reader_buffer")),
              (o.util = t("./util/minimal")),
              (o.rpc = t("./rpc")),
              (o.roots = t("./roots")),
              (o.configure = s),
              s(),
              i.exports;
          },
          function () {
            return {
              "./writer": __cjsMetaURL$a,
              "./writer_buffer": __cjsMetaURL$b,
              "./reader": __cjsMetaURL$c,
              "./reader_buffer": __cjsMetaURL$d,
              "./util/minimal": __cjsMetaURL$9,
              "./rpc": __cjsMetaURL$f,
              "./roots": __cjsMetaURL$g,
            };
          }
        );
        var __cjsMetaURL$i =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js";
        loader.define(
          __cjsMetaURL$i,
          function (e, t, i, n, r) {
            function o(e, t) {
              "string" == typeof e && ((t = e), (e = void 0));
              var i = [];
              function n(e) {
                if ("string" != typeof e) {
                  var t = r();
                  if (
                    (o.verbose && console.log("codegen: " + t),
                    (t = "return " + t),
                    e)
                  ) {
                    for (
                      var s = Object.keys(e),
                        a = new Array(s.length + 1),
                        l = new Array(s.length),
                        u = 0;
                      u < s.length;

                    )
                      (a[u] = s[u]), (l[u] = e[s[u++]]);
                    return (a[u] = t), Function.apply(null, a).apply(null, l);
                  }
                  return Function(t)();
                }
                for (
                  var c = new Array(arguments.length - 1), m = 0;
                  m < c.length;

                )
                  c[m] = arguments[++m];
                if (
                  ((m = 0),
                  (e = e.replace(/%([%dfijs])/g, function (e, t) {
                    var i = c[m++];
                    switch (t) {
                      case "d":
                      case "f":
                        return String(Number(i));
                      case "i":
                        return String(Math.floor(i));
                      case "j":
                        return JSON.stringify(i);
                      case "s":
                        return String(i);
                    }
                    return "%";
                  })),
                  m !== c.length)
                )
                  throw Error("parameter count mismatch");
                return i.push(e), n;
              }
              function r(n) {
                return (
                  "function " +
                  (n || t || "") +
                  "(" +
                  ((e && e.join(",")) || "") +
                  "){\n  " +
                  i.join("\n  ") +
                  "\n}"
                );
              }
              return (n.toString = r), n;
            }
            (i.exports = o), (o.verbose = !1), i.exports;
          },
          {}
        );
        var __cjsMetaURL$j =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js";
        loader.define(
          __cjsMetaURL$j,
          function (e, t, i, n, r) {
            i.exports = a;
            var o = t("@protobufjs/aspromise"),
              s = t("@protobufjs/inquire")("fs");
            function a(e, t, i) {
              return (
                "function" == typeof t ? ((i = t), (t = {})) : t || (t = {}),
                i
                  ? !t.xhr && s && s.readFile
                    ? s.readFile(e, function (n, r) {
                        return n && "undefined" != typeof XMLHttpRequest
                          ? a.xhr(e, t, i)
                          : n
                          ? i(n)
                          : i(null, t.binary ? r : r.toString("utf8"));
                      })
                    : a.xhr(e, t, i)
                  : o(a, this, e, t)
              );
            }
            (a.xhr = function (e, t, i) {
              var n = new XMLHttpRequest();
              (n.onreadystatechange = function () {
                if (4 === n.readyState) {
                  if (0 !== n.status && 200 !== n.status)
                    return i(Error("status " + n.status));
                  if (t.binary) {
                    var e = n.response;
                    if (!e) {
                      e = [];
                      for (var r = 0; r < n.responseText.length; ++r)
                        e.push(255 & n.responseText.charCodeAt(r));
                    }
                    return i(
                      null,
                      "undefined" != typeof Uint8Array ? new Uint8Array(e) : e
                    );
                  }
                  return i(null, n.responseText);
                }
              }),
                t.binary &&
                  ("overrideMimeType" in n &&
                    n.overrideMimeType("text/plain; charset=x-user-defined"),
                  (n.responseType = "arraybuffer")),
                n.open("GET", e),
                n.send();
            }),
              i.exports;
          },
          function () {
            return {
              "@protobufjs/aspromise": __cjsMetaURL$1,
              "@protobufjs/inquire": __cjsMetaURL$5,
            };
          }
        );
        var __cjsMetaURL$k =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/@protobufjs/path/index.js";
        loader.define(
          __cjsMetaURL$k,
          function (e, t, i, n, r) {
            var o = e,
              s = (o.isAbsolute = function (e) {
                return /^(?:\/|\w+:)/.test(e);
              }),
              a = (o.normalize = function (e) {
                var t = (e = e
                    .replace(/\\/g, "/")
                    .replace(/\/{2,}/g, "/")).split("/"),
                  i = s(e),
                  n = "";
                i && (n = t.shift() + "/");
                for (var r = 0; r < t.length; )
                  ".." === t[r]
                    ? r > 0 && ".." !== t[r - 1]
                      ? t.splice(--r, 2)
                      : i
                      ? t.splice(r, 1)
                      : ++r
                    : "." === t[r]
                    ? t.splice(r, 1)
                    : ++r;
                return n + t.join("/");
              });
            (o.resolve = function (e, t, i) {
              return (
                i || (t = a(t)),
                s(t)
                  ? t
                  : (i || (e = a(e)),
                    (e = e.replace(/(?:\/|^)[^/]+$/, "")).length
                      ? a(e + "/" + t)
                      : t)
              );
            }),
              i.exports;
          },
          {}
        );
        var __cjsMetaURL$l =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/src/types.js";
        loader.define(
          __cjsMetaURL$l,
          function (e, t, i, n, r) {
            var o = e,
              s = t("./util"),
              a = [
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
              var i = 0,
                n = {};
              for (t |= 0; i < e.length; ) n[a[i + t]] = e[i++];
              return n;
            }
            (o.basic = l([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2])),
              (o.defaults = l([
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
                s.emptyArray,
                null,
              ])),
              (o.long = l([0, 0, 0, 1, 1], 7)),
              (o.mapKey = l([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2)),
              (o.packed = l([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0])),
              i.exports;
          },
          function () {
            return { "./util": __cjsMetaURL$z };
          }
        );
        var __cjsMetaURL$m =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/src/field.js";
        loader.define(
          __cjsMetaURL$m,
          function (e, t, i, n, r) {
            i.exports = m;
            var o = t("./object");
            ((m.prototype = Object.create(o.prototype)).constructor =
              m).className = "Field";
            var s,
              a = t("./enum"),
              l = t("./types"),
              u = t("./util"),
              c = /^required|optional|repeated$/;
            function m(e, t, i, n, r, s, a) {
              if (
                (u.isObject(n)
                  ? ((a = r), (s = n), (n = r = void 0))
                  : u.isObject(r) && ((a = s), (s = r), (r = void 0)),
                o.call(this, e, s),
                !u.isInteger(t) || t < 0)
              )
                throw TypeError("id must be a non-negative integer");
              if (!u.isString(i)) throw TypeError("type must be a string");
              if (void 0 !== n && !c.test((n = n.toString().toLowerCase())))
                throw TypeError("rule must be a string rule");
              if (void 0 !== r && !u.isString(r))
                throw TypeError("extend must be a string");
              "proto3_optional" === n && (n = "optional"),
                (this.rule = n && "optional" !== n ? n : void 0),
                (this.type = i),
                (this.id = t),
                (this.extend = r || void 0),
                (this.required = "required" === n),
                (this.optional = !this.required),
                (this.repeated = "repeated" === n),
                (this.map = !1),
                (this.message = null),
                (this.partOf = null),
                (this.typeDefault = null),
                (this.defaultValue = null),
                (this.long = !!u.Long && void 0 !== l.long[i]),
                (this.bytes = "bytes" === i),
                (this.resolvedType = null),
                (this.extensionField = null),
                (this.declaringField = null),
                (this._packed = null),
                (this.comment = a);
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
              (m.prototype.setOption = function (e, t, i) {
                return (
                  "packed" === e && (this._packed = null),
                  o.prototype.setOption.call(this, e, t, i)
                );
              }),
              (m.prototype.toJSON = function (e) {
                var t = !!e && Boolean(e.keepComments);
                return u.toObject([
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
                    this.resolvedType instanceof s
                      ? (this.typeDefault = null)
                      : (this.typeDefault =
                          this.resolvedType.values[
                            Object.keys(this.resolvedType.values)[0]
                          ])),
                  this.options &&
                    null != this.options.default &&
                    ((this.typeDefault = this.options.default),
                    this.resolvedType instanceof a &&
                      "string" == typeof this.typeDefault &&
                      (this.typeDefault =
                        this.resolvedType.values[this.typeDefault])),
                  this.options &&
                    ((!0 !== this.options.packed &&
                      (void 0 === this.options.packed ||
                        !this.resolvedType ||
                        this.resolvedType instanceof a)) ||
                      delete this.options.packed,
                    Object.keys(this.options).length ||
                      (this.options = void 0)),
                  this.long)
                )
                  (this.typeDefault = u.Long.fromNumber(
                    this.typeDefault,
                    "u" === this.type.charAt(0)
                  )),
                    Object.freeze && Object.freeze(this.typeDefault);
                else if (this.bytes && "string" == typeof this.typeDefault) {
                  var e;
                  u.base64.test(this.typeDefault)
                    ? u.base64.decode(
                        this.typeDefault,
                        (e = u.newBuffer(u.base64.length(this.typeDefault))),
                        0
                      )
                    : u.utf8.write(
                        this.typeDefault,
                        (e = u.newBuffer(u.utf8.length(this.typeDefault))),
                        0
                      ),
                    (this.typeDefault = e);
                }
                return (
                  this.map
                    ? (this.defaultValue = u.emptyObject)
                    : this.repeated
                    ? (this.defaultValue = u.emptyArray)
                    : (this.defaultValue = this.typeDefault),
                  this.parent instanceof s &&
                    (this.parent.ctor.prototype[this.name] = this.defaultValue),
                  o.prototype.resolve.call(this)
                );
              }),
              (m.d = function (e, t, i, n) {
                return (
                  "function" == typeof t
                    ? (t = u.decorateType(t).name)
                    : t && "object" == typeof t && (t = u.decorateEnum(t).name),
                  function (r, o) {
                    u.decorateType(r.constructor).add(
                      new m(o, e, t, i, { default: n })
                    );
                  }
                );
              }),
              (m._configure = function (e) {
                s = e;
              }),
              i.exports;
          },
          function () {
            return {
              "./object": __cjsMetaURL$A,
              "./enum": __cjsMetaURL$B,
              "./types": __cjsMetaURL$l,
              "./util": __cjsMetaURL$z,
            };
          }
        );
        var __cjsMetaURL$n =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js";
        loader.define(
          __cjsMetaURL$n,
          function (e, t, i, n, r) {
            i.exports = l;
            var o = t("./object");
            ((l.prototype = Object.create(o.prototype)).constructor =
              l).className = "OneOf";
            var s = t("./field"),
              a = t("./util");
            function l(e, t, i, n) {
              if (
                (Array.isArray(t) || ((i = t), (t = void 0)),
                o.call(this, e, i),
                void 0 !== t && !Array.isArray(t))
              )
                throw TypeError("fieldNames must be an Array");
              (this.oneof = t || []),
                (this.fieldsArray = []),
                (this.comment = n);
            }
            function u(e) {
              if (e.parent)
                for (var t = 0; t < e.fieldsArray.length; ++t)
                  e.fieldsArray[t].parent || e.parent.add(e.fieldsArray[t]);
            }
            (l.fromJSON = function (e, t) {
              return new l(e, t.oneof, t.options, t.comment);
            }),
              (l.prototype.toJSON = function (e) {
                var t = !!e && Boolean(e.keepComments);
                return a.toObject([
                  "options",
                  this.options,
                  "oneof",
                  this.oneof,
                  "comment",
                  t ? this.comment : void 0,
                ]);
              }),
              (l.prototype.add = function (e) {
                if (!(e instanceof s)) throw TypeError("field must be a Field");
                return (
                  e.parent && e.parent !== this.parent && e.parent.remove(e),
                  this.oneof.push(e.name),
                  this.fieldsArray.push(e),
                  (e.partOf = this),
                  u(this),
                  this
                );
              }),
              (l.prototype.remove = function (e) {
                if (!(e instanceof s)) throw TypeError("field must be a Field");
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
                o.prototype.onAdd.call(this, e);
                for (var t = 0; t < this.oneof.length; ++t) {
                  var i = e.get(this.oneof[t]);
                  i &&
                    !i.partOf &&
                    ((i.partOf = this), this.fieldsArray.push(i));
                }
                u(this);
              }),
              (l.prototype.onRemove = function (e) {
                for (var t, i = 0; i < this.fieldsArray.length; ++i)
                  (t = this.fieldsArray[i]).parent && t.parent.remove(t);
                o.prototype.onRemove.call(this, e);
              }),
              (l.d = function () {
                for (
                  var e = new Array(arguments.length), t = 0;
                  t < arguments.length;

                )
                  e[t] = arguments[t++];
                return function (t, i) {
                  a.decorateType(t.constructor).add(new l(i, e)),
                    Object.defineProperty(t, i, {
                      get: a.oneOfGetter(e),
                      set: a.oneOfSetter(e),
                    });
                };
              }),
              i.exports;
          },
          function () {
            return {
              "./object": __cjsMetaURL$A,
              "./field": __cjsMetaURL$m,
              "./util": __cjsMetaURL$z,
            };
          }
        );
        var __cjsMetaURL$o =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js";
        loader.define(
          __cjsMetaURL$o,
          function (e, t, i, n, r) {
            i.exports = p;
            var o = t("./object");
            ((p.prototype = Object.create(o.prototype)).constructor =
              p).className = "Namespace";
            var s,
              a,
              l,
              u = t("./field"),
              c = t("./oneof"),
              m = t("./util");
            function _(e, t) {
              if (e && e.length) {
                for (var i = {}, n = 0; n < e.length; ++n)
                  i[e[n].name] = e[n].toJSON(t);
                return i;
              }
            }
            function p(e, t) {
              o.call(this, e, t),
                (this.nested = void 0),
                (this._nestedArray = null);
            }
            function d(e) {
              return (e._nestedArray = null), e;
            }
            (p.fromJSON = function (e, t) {
              return new p(e, t.options).addJSON(t.nested);
            }),
              (p.arrayToJSON = _),
              (p.isReservedId = function (e, t) {
                if (e)
                  for (var i = 0; i < e.length; ++i)
                    if ("string" != typeof e[i] && e[i][0] <= t && e[i][1] > t)
                      return !0;
                return !1;
              }),
              (p.isReservedName = function (e, t) {
                if (e)
                  for (var i = 0; i < e.length; ++i) if (e[i] === t) return !0;
                return !1;
              }),
              Object.defineProperty(p.prototype, "nestedArray", {
                get: function () {
                  return (
                    this._nestedArray ||
                    (this._nestedArray = m.toArray(this.nested))
                  );
                },
              }),
              (p.prototype.toJSON = function (e) {
                return m.toObject([
                  "options",
                  this.options,
                  "nested",
                  _(this.nestedArray, e),
                ]);
              }),
              (p.prototype.addJSON = function (e) {
                if (e)
                  for (var t, i = Object.keys(e), n = 0; n < i.length; ++n)
                    (t = e[i[n]]),
                      this.add(
                        (void 0 !== t.fields
                          ? s.fromJSON
                          : void 0 !== t.values
                          ? l.fromJSON
                          : void 0 !== t.methods
                          ? a.fromJSON
                          : void 0 !== t.id
                          ? u.fromJSON
                          : p.fromJSON)(i[n], t)
                      );
                return this;
              }),
              (p.prototype.get = function (e) {
                return (this.nested && this.nested[e]) || null;
              }),
              (p.prototype.getEnum = function (e) {
                if (this.nested && this.nested[e] instanceof l)
                  return this.nested[e].values;
                throw Error("no such enum: " + e);
              }),
              (p.prototype.add = function (e) {
                if (
                  !(
                    (e instanceof u && void 0 !== e.extend) ||
                    e instanceof s ||
                    e instanceof l ||
                    e instanceof a ||
                    e instanceof p ||
                    e instanceof c
                  )
                )
                  throw TypeError("object must be a valid nested object");
                if (this.nested) {
                  var t = this.get(e.name);
                  if (t) {
                    if (
                      !(t instanceof p && e instanceof p) ||
                      t instanceof s ||
                      t instanceof a
                    )
                      throw Error("duplicate name '" + e.name + "' in " + this);
                    for (var i = t.nestedArray, n = 0; n < i.length; ++n)
                      e.add(i[n]);
                    this.remove(t),
                      this.nested || (this.nested = {}),
                      e.setOptions(t.options, !0);
                  }
                } else this.nested = {};
                return (this.nested[e.name] = e), e.onAdd(this), d(this);
              }),
              (p.prototype.remove = function (e) {
                if (!(e instanceof o))
                  throw TypeError("object must be a ReflectionObject");
                if (e.parent !== this)
                  throw Error(e + " is not a member of " + this);
                return (
                  delete this.nested[e.name],
                  Object.keys(this.nested).length || (this.nested = void 0),
                  e.onRemove(this),
                  d(this)
                );
              }),
              (p.prototype.define = function (e, t) {
                if (m.isString(e)) e = e.split(".");
                else if (!Array.isArray(e)) throw TypeError("illegal path");
                if (e && e.length && "" === e[0])
                  throw Error("path must be relative");
                for (var i = this; e.length > 0; ) {
                  var n = e.shift();
                  if (i.nested && i.nested[n]) {
                    if (!((i = i.nested[n]) instanceof p))
                      throw Error("path conflicts with non-namespace objects");
                  } else i.add((i = new p(n)));
                }
                return t && i.addJSON(t), i;
              }),
              (p.prototype.resolveAll = function () {
                for (var e = this.nestedArray, t = 0; t < e.length; )
                  e[t] instanceof p ? e[t++].resolveAll() : e[t++].resolve();
                return this.resolve();
              }),
              (p.prototype.lookup = function (e, t, i) {
                if (
                  ("boolean" == typeof t
                    ? ((i = t), (t = void 0))
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
                    n instanceof p &&
                    (n = n.lookup(e.slice(1), t, !0))
                  )
                    return n;
                } else
                  for (var r = 0; r < this.nestedArray.length; ++r)
                    if (
                      this._nestedArray[r] instanceof p &&
                      (n = this._nestedArray[r].lookup(e, t, !0))
                    )
                      return n;
                return null === this.parent || i
                  ? null
                  : this.parent.lookup(e, t);
              }),
              (p.prototype.lookupType = function (e) {
                var t = this.lookup(e, [s]);
                if (!t) throw Error("no such type: " + e);
                return t;
              }),
              (p.prototype.lookupEnum = function (e) {
                var t = this.lookup(e, [l]);
                if (!t) throw Error("no such Enum '" + e + "' in " + this);
                return t;
              }),
              (p.prototype.lookupTypeOrEnum = function (e) {
                var t = this.lookup(e, [s, l]);
                if (!t)
                  throw Error("no such Type or Enum '" + e + "' in " + this);
                return t;
              }),
              (p.prototype.lookupService = function (e) {
                var t = this.lookup(e, [a]);
                if (!t) throw Error("no such Service '" + e + "' in " + this);
                return t;
              }),
              (p._configure = function (e, t, i) {
                (s = e), (a = t), (l = i);
              }),
              i.exports;
          },
          function () {
            return {
              "./object": __cjsMetaURL$A,
              "./field": __cjsMetaURL$m,
              "./oneof": __cjsMetaURL$n,
              "./util": __cjsMetaURL$z,
            };
          }
        );
        var __cjsMetaURL$p =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js";
        loader.define(
          __cjsMetaURL$p,
          function (e, t, i, n, r) {
            i.exports = l;
            var o = t("./field");
            ((l.prototype = Object.create(o.prototype)).constructor =
              l).className = "MapField";
            var s = t("./types"),
              a = t("./util");
            function l(e, t, i, n, r, s) {
              if ((o.call(this, e, t, n, void 0, void 0, r, s), !a.isString(i)))
                throw TypeError("keyType must be a string");
              (this.keyType = i),
                (this.resolvedKeyType = null),
                (this.map = !0);
            }
            (l.fromJSON = function (e, t) {
              return new l(e, t.id, t.keyType, t.type, t.options, t.comment);
            }),
              (l.prototype.toJSON = function (e) {
                var t = !!e && Boolean(e.keepComments);
                return a.toObject([
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
                if (void 0 === s.mapKey[this.keyType])
                  throw Error("invalid key type: " + this.keyType);
                return o.prototype.resolve.call(this);
              }),
              (l.d = function (e, t, i) {
                return (
                  "function" == typeof i
                    ? (i = a.decorateType(i).name)
                    : i && "object" == typeof i && (i = a.decorateEnum(i).name),
                  function (n, r) {
                    a.decorateType(n.constructor).add(new l(r, e, t, i));
                  }
                );
              }),
              i.exports;
          },
          function () {
            return {
              "./field": __cjsMetaURL$m,
              "./types": __cjsMetaURL$l,
              "./util": __cjsMetaURL$z,
            };
          }
        );
        var __cjsMetaURL$q =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/src/method.js";
        loader.define(
          __cjsMetaURL$q,
          function (e, t, i, n, r) {
            i.exports = a;
            var o = t("./object");
            ((a.prototype = Object.create(o.prototype)).constructor =
              a).className = "Method";
            var s = t("./util");
            function a(e, t, i, n, r, a, l, u, c) {
              if (
                (s.isObject(r)
                  ? ((l = r), (r = a = void 0))
                  : s.isObject(a) && ((l = a), (a = void 0)),
                void 0 !== t && !s.isString(t))
              )
                throw TypeError("type must be a string");
              if (!s.isString(i))
                throw TypeError("requestType must be a string");
              if (!s.isString(n))
                throw TypeError("responseType must be a string");
              o.call(this, e, l),
                (this.type = t || "rpc"),
                (this.requestType = i),
                (this.requestStream = !!r || void 0),
                (this.responseType = n),
                (this.responseStream = !!a || void 0),
                (this.resolvedRequestType = null),
                (this.resolvedResponseType = null),
                (this.comment = u),
                (this.parsedOptions = c);
            }
            (a.fromJSON = function (e, t) {
              return new a(
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
              (a.prototype.toJSON = function (e) {
                var t = !!e && Boolean(e.keepComments);
                return s.toObject([
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
              (a.prototype.resolve = function () {
                return this.resolved
                  ? this
                  : ((this.resolvedRequestType = this.parent.lookupType(
                      this.requestType
                    )),
                    (this.resolvedResponseType = this.parent.lookupType(
                      this.responseType
                    )),
                    o.prototype.resolve.call(this));
              }),
              i.exports;
          },
          function () {
            return { "./object": __cjsMetaURL$A, "./util": __cjsMetaURL$z };
          }
        );
        var __cjsMetaURL$r =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/src/service.js";
        loader.define(
          __cjsMetaURL$r,
          function (e, t, i, n, r) {
            i.exports = u;
            var o = t("./namespace");
            ((u.prototype = Object.create(o.prototype)).constructor =
              u).className = "Service";
            var s = t("./method"),
              a = t("./util"),
              l = t("./rpc");
            function u(e, t) {
              o.call(this, e, t),
                (this.methods = {}),
                (this._methodsArray = null);
            }
            function c(e) {
              return (e._methodsArray = null), e;
            }
            (u.fromJSON = function (e, t) {
              var i = new u(e, t.options);
              if (t.methods)
                for (var n = Object.keys(t.methods), r = 0; r < n.length; ++r)
                  i.add(s.fromJSON(n[r], t.methods[n[r]]));
              return (
                t.nested && i.addJSON(t.nested), (i.comment = t.comment), i
              );
            }),
              (u.prototype.toJSON = function (e) {
                var t = o.prototype.toJSON.call(this, e),
                  i = !!e && Boolean(e.keepComments);
                return a.toObject([
                  "options",
                  (t && t.options) || void 0,
                  "methods",
                  o.arrayToJSON(this.methodsArray, e) || {},
                  "nested",
                  (t && t.nested) || void 0,
                  "comment",
                  i ? this.comment : void 0,
                ]);
              }),
              Object.defineProperty(u.prototype, "methodsArray", {
                get: function () {
                  return (
                    this._methodsArray ||
                    (this._methodsArray = a.toArray(this.methods))
                  );
                },
              }),
              (u.prototype.get = function (e) {
                return this.methods[e] || o.prototype.get.call(this, e);
              }),
              (u.prototype.resolveAll = function () {
                for (var e = this.methodsArray, t = 0; t < e.length; ++t)
                  e[t].resolve();
                return o.prototype.resolve.call(this);
              }),
              (u.prototype.add = function (e) {
                if (this.get(e.name))
                  throw Error("duplicate name '" + e.name + "' in " + this);
                return e instanceof s
                  ? ((this.methods[e.name] = e), (e.parent = this), c(this))
                  : o.prototype.add.call(this, e);
              }),
              (u.prototype.remove = function (e) {
                if (e instanceof s) {
                  if (this.methods[e.name] !== e)
                    throw Error(e + " is not a member of " + this);
                  return (
                    delete this.methods[e.name], (e.parent = null), c(this)
                  );
                }
                return o.prototype.remove.call(this, e);
              }),
              (u.prototype.create = function (e, t, i) {
                for (
                  var n, r = new l.Service(e, t, i), o = 0;
                  o < this.methodsArray.length;
                  ++o
                ) {
                  var s = a
                    .lcFirst((n = this._methodsArray[o]).resolve().name)
                    .replace(/[^$\w_]/g, "");
                  r[s] = a.codegen(
                    ["r", "c"],
                    a.isReserved(s) ? s + "_" : s
                  )("return this.rpcCall(m,q,s,r,c)")({
                    m: n,
                    q: n.resolvedRequestType.ctor,
                    s: n.resolvedResponseType.ctor,
                  });
                }
                return r;
              }),
              i.exports;
          },
          function () {
            return {
              "./namespace": __cjsMetaURL$o,
              "./method": __cjsMetaURL$q,
              "./util": __cjsMetaURL$z,
              "./rpc": __cjsMetaURL$f,
            };
          }
        );
        var __cjsMetaURL$s =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/src/message.js";
        loader.define(
          __cjsMetaURL$s,
          function (e, t, i, n, r) {
            i.exports = s;
            var o = t("./util/minimal");
            function s(e) {
              if (e)
                for (var t = Object.keys(e), i = 0; i < t.length; ++i)
                  this[t[i]] = e[t[i]];
            }
            (s.create = function (e) {
              return this.$type.create(e);
            }),
              (s.encode = function (e, t) {
                return this.$type.encode(e, t);
              }),
              (s.encodeDelimited = function (e, t) {
                return this.$type.encodeDelimited(e, t);
              }),
              (s.decode = function (e) {
                return this.$type.decode(e);
              }),
              (s.decodeDelimited = function (e) {
                return this.$type.decodeDelimited(e);
              }),
              (s.verify = function (e) {
                return this.$type.verify(e);
              }),
              (s.fromObject = function (e) {
                return this.$type.fromObject(e);
              }),
              (s.toObject = function (e, t) {
                return this.$type.toObject(e, t);
              }),
              (s.prototype.toJSON = function () {
                return this.$type.toObject(this, o.toJSONOptions);
              }),
              i.exports;
          },
          function () {
            return { "./util/minimal": __cjsMetaURL$9 };
          }
        );
        var __cjsMetaURL$t =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js";
        loader.define(
          __cjsMetaURL$t,
          function (e, t, i, n, r) {
            i.exports = function (e) {
              var t = a.codegen(
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
              for (var i = 0; i < e.fieldsArray.length; ++i) {
                var n = e._fieldsArray[i].resolve(),
                  r = n.resolvedType instanceof o ? "int32" : n.type,
                  u = "m" + a.safeProp(n.name);
                t("case %i:", n.id),
                  n.map
                    ? (t("if(%s===util.emptyObject)", u)("%s={}", u)(
                        "var c2 = r.uint32()+r.pos"
                      ),
                      void 0 !== s.defaults[n.keyType]
                        ? t("k=%j", s.defaults[n.keyType])
                        : t("k=null"),
                      void 0 !== s.defaults[r]
                        ? t("value=%j", s.defaults[r])
                        : t("value=null"),
                      t("while(r.pos<c2){")("var tag2=r.uint32()")(
                        "switch(tag2>>>3){"
                      )(
                        "case 1: k=r.%s(); break",
                        n.keyType
                      )("case 2:"),
                      void 0 === s.basic[r]
                        ? t("value=types[%i].decode(r,r.uint32())", i)
                        : t("value=r.%s()", r),
                      t("break")("default:")("r.skipType(tag2&7)")("break")(
                        "}"
                      )("}"),
                      void 0 !== s.long[n.keyType]
                        ? t(
                            '%s[typeof k==="object"?util.longToHash(k):k]=value',
                            u
                          )
                        : t("%s[k]=value", u))
                    : n.repeated
                    ? (t("if(!(%s&&%s.length))", u, u)("%s=[]", u),
                      void 0 !== s.packed[r] &&
                        t("if((t&7)===2){")("var c2=r.uint32()+r.pos")(
                          "while(r.pos<c2)"
                        )(
                          "%s.push(r.%s())",
                          u,
                          r
                        )("}else"),
                      void 0 === s.basic[r]
                        ? t(
                            n.resolvedType.group
                              ? "%s.push(types[%i].decode(r))"
                              : "%s.push(types[%i].decode(r,r.uint32()))",
                            u,
                            i
                          )
                        : t("%s.push(r.%s())", u, r))
                    : void 0 === s.basic[r]
                    ? t(
                        n.resolvedType.group
                          ? "%s=types[%i].decode(r)"
                          : "%s=types[%i].decode(r,r.uint32())",
                        u,
                        i
                      )
                    : t("%s=r.%s()", u, r),
                  t("break");
              }
              for (
                t("default:")("r.skipType(t&7)")("break")("}")("}"), i = 0;
                i < e._fieldsArray.length;
                ++i
              ) {
                var c = e._fieldsArray[i];
                c.required &&
                  t("if(!m.hasOwnProperty(%j))", c.name)(
                    "throw util.ProtocolError(%j,{instance:m})",
                    l(c)
                  );
              }
              return t("return m");
            };
            var o = t("./enum"),
              s = t("./types"),
              a = t("./util");
            function l(e) {
              return "missing required '" + e.name + "'";
            }
            i.exports;
          },
          function () {
            return {
              "./enum": __cjsMetaURL$B,
              "./types": __cjsMetaURL$l,
              "./util": __cjsMetaURL$z,
            };
          }
        );
        var __cjsMetaURL$u =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js";
        loader.define(
          __cjsMetaURL$u,
          function (e, t, i, n, r) {
            i.exports = function (e) {
              var t = s.codegen(
                  ["m"],
                  e.name + "$verify"
                )('if(typeof m!=="object"||m===null)')(
                  "return%j",
                  "object expected"
                ),
                i = e.oneofsArray,
                n = {};
              i.length && t("var p={}");
              for (var r = 0; r < e.fieldsArray.length; ++r) {
                var o = e._fieldsArray[r].resolve(),
                  c = "m" + s.safeProp(o.name);
                if (
                  (o.optional &&
                    t("if(%s!=null&&m.hasOwnProperty(%j)){", c, o.name),
                  o.map)
                )
                  t("if(!util.isObject(%s))", c)("return%j", a(o, "object"))(
                    "var k=Object.keys(%s)",
                    c
                  )("for(var i=0;i<k.length;++i){"),
                    u(t, o, "k[i]"),
                    l(t, o, r, c + "[k[i]]")("}");
                else if (o.repeated)
                  t("if(!Array.isArray(%s))", c)("return%j", a(o, "array"))(
                    "for(var i=0;i<%s.length;++i){",
                    c
                  ),
                    l(t, o, r, c + "[i]")("}");
                else {
                  if (o.partOf) {
                    var m = s.safeProp(o.partOf.name);
                    1 === n[o.partOf.name] &&
                      t("if(p%s===1)", m)(
                        "return%j",
                        o.partOf.name + ": multiple values"
                      ),
                      (n[o.partOf.name] = 1),
                      t("p%s=1", m);
                  }
                  l(t, o, r, c);
                }
                o.optional && t("}");
              }
              return t("return null");
            };
            var o = t("./enum"),
              s = t("./util");
            function a(e, t) {
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
            function l(e, t, i, n) {
              if (t.resolvedType)
                if (t.resolvedType instanceof o) {
                  e("switch(%s){", n)("default:")(
                    "return%j",
                    a(t, "enum value")
                  );
                  for (
                    var r = Object.keys(t.resolvedType.values), s = 0;
                    s < r.length;
                    ++s
                  )
                    e("case %i:", t.resolvedType.values[r[s]]);
                  e("break")("}");
                } else
                  e("{")("var e=types[%i].verify(%s);", i, n)("if(e)")(
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
                      a(t, "integer")
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
                    )("return%j", a(t, "integer|Long"));
                    break;
                  case "float":
                  case "double":
                    e('if(typeof %s!=="number")', n)(
                      "return%j",
                      a(t, "number")
                    );
                    break;
                  case "bool":
                    e('if(typeof %s!=="boolean")', n)(
                      "return%j",
                      a(t, "boolean")
                    );
                    break;
                  case "string":
                    e("if(!util.isString(%s))", n)("return%j", a(t, "string"));
                    break;
                  case "bytes":
                    e(
                      'if(!(%s&&typeof %s.length==="number"||util.isString(%s)))',
                      n,
                      n,
                      n
                    )("return%j", a(t, "buffer"));
                }
              return e;
            }
            function u(e, t, i) {
              switch (t.keyType) {
                case "int32":
                case "uint32":
                case "sint32":
                case "fixed32":
                case "sfixed32":
                  e("if(!util.key32Re.test(%s))", i)(
                    "return%j",
                    a(t, "integer key")
                  );
                  break;
                case "int64":
                case "uint64":
                case "sint64":
                case "fixed64":
                case "sfixed64":
                  e("if(!util.key64Re.test(%s))", i)(
                    "return%j",
                    a(t, "integer|Long key")
                  );
                  break;
                case "bool":
                  e("if(!util.key2Re.test(%s))", i)(
                    "return%j",
                    a(t, "boolean key")
                  );
              }
              return e;
            }
            i.exports;
          },
          function () {
            return { "./enum": __cjsMetaURL$B, "./util": __cjsMetaURL$z };
          }
        );
        var __cjsMetaURL$v =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/src/converter.js";
        loader.define(
          __cjsMetaURL$v,
          function (e, t, i, n, r) {
            var o = e,
              s = t("./enum"),
              a = t("./util");
            function l(e, t, i, n) {
              if (t.resolvedType)
                if (t.resolvedType instanceof s) {
                  e("switch(d%s){", n);
                  for (
                    var r = t.resolvedType.values, o = Object.keys(r), a = 0;
                    a < o.length;
                    ++a
                  )
                    t.repeated && r[o[a]] === t.typeDefault && e("default:"),
                      e("case%j:", o[a])("case %i:", r[o[a]])(
                        "m%s=%j",
                        n,
                        r[o[a]]
                      )("break");
                  e("}");
                } else
                  e('if(typeof d%s!=="object")', n)(
                    "throw TypeError(%j)",
                    t.fullName + ": object expected"
                  )("m%s=types[%i].fromObject(d%s)", n, i, n);
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
            function u(e, t, i, n) {
              if (t.resolvedType)
                t.resolvedType instanceof s
                  ? e(
                      "d%s=o.enums===String?types[%i].values[m%s]:m%s",
                      n,
                      i,
                      n,
                      n
                    )
                  : e("d%s=types[%i].toObject(m%s,o)", n, i, n);
              else {
                var r = !1;
                switch (t.type) {
                  case "double":
                  case "float":
                    e("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", n, n, n, n);
                    break;
                  case "uint64":
                    r = !0;
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
                      r ? "true" : "",
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
            (o.fromObject = function (e) {
              var t = e.fieldsArray,
                i = a.codegen(
                  ["d"],
                  e.name + "$fromObject"
                )("if(d instanceof this.ctor)")("return d");
              if (!t.length) return i("return new this.ctor");
              i("var m=new this.ctor");
              for (var n = 0; n < t.length; ++n) {
                var r = t[n].resolve(),
                  o = a.safeProp(r.name);
                r.map
                  ? (i("if(d%s){", o)('if(typeof d%s!=="object")', o)(
                      "throw TypeError(%j)",
                      r.fullName + ": object expected"
                    )("m%s={}", o)(
                      "for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){",
                      o
                    ),
                    l(i, r, n, o + "[ks[i]]")("}")("}"))
                  : r.repeated
                  ? (i("if(d%s){", o)("if(!Array.isArray(d%s))", o)(
                      "throw TypeError(%j)",
                      r.fullName + ": array expected"
                    )("m%s=[]", o)("for(var i=0;i<d%s.length;++i){", o),
                    l(i, r, n, o + "[i]")("}")("}"))
                  : (r.resolvedType instanceof s || i("if(d%s!=null){", o),
                    l(i, r, n, o),
                    r.resolvedType instanceof s || i("}"));
              }
              return i("return m");
            }),
              (o.toObject = function (e) {
                var t = e.fieldsArray.slice().sort(a.compareFieldsById);
                if (!t.length) return a.codegen()("return {}");
                for (
                  var i = a.codegen(["m", "o"], e.name + "$toObject")("if(!o)")(
                      "o={}"
                    )("var d={}"),
                    n = [],
                    r = [],
                    o = [],
                    l = 0;
                  l < t.length;
                  ++l
                )
                  t[l].partOf ||
                    (t[l].resolve().repeated ? n : t[l].map ? r : o).push(t[l]);
                if (n.length) {
                  for (i("if(o.arrays||o.defaults){"), l = 0; l < n.length; ++l)
                    i("d%s=[]", a.safeProp(n[l].name));
                  i("}");
                }
                if (r.length) {
                  for (
                    i("if(o.objects||o.defaults){"), l = 0;
                    l < r.length;
                    ++l
                  )
                    i("d%s={}", a.safeProp(r[l].name));
                  i("}");
                }
                if (o.length) {
                  for (i("if(o.defaults){"), l = 0; l < o.length; ++l) {
                    var c = o[l],
                      m = a.safeProp(c.name);
                    if (c.resolvedType instanceof s)
                      i(
                        "d%s=o.enums===String?%j:%j",
                        m,
                        c.resolvedType.valuesById[c.typeDefault],
                        c.typeDefault
                      );
                    else if (c.long)
                      i("if(util.Long){")(
                        "var n=new util.Long(%i,%i,%j)",
                        c.typeDefault.low,
                        c.typeDefault.high,
                        c.typeDefault.unsigned
                      )(
                        "d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n",
                        m
                      )("}else")(
                        "d%s=o.longs===String?%j:%i",
                        m,
                        c.typeDefault.toString(),
                        c.typeDefault.toNumber()
                      );
                    else if (c.bytes) {
                      var _ =
                        "[" +
                        Array.prototype.slice.call(c.typeDefault).join(",") +
                        "]";
                      i(
                        "if(o.bytes===String)d%s=%j",
                        m,
                        String.fromCharCode.apply(String, c.typeDefault)
                      )("else{")("d%s=%s", m, _)(
                        "if(o.bytes!==Array)d%s=util.newBuffer(d%s)",
                        m,
                        m
                      )("}");
                    } else i("d%s=%j", m, c.typeDefault);
                  }
                  i("}");
                }
                var p = !1;
                for (l = 0; l < t.length; ++l) {
                  c = t[l];
                  var d = e._fieldsArray.indexOf(c);
                  m = a.safeProp(c.name);
                  c.map
                    ? (p || ((p = !0), i("var ks2")),
                      i(
                        "if(m%s&&(ks2=Object.keys(m%s)).length){",
                        m,
                        m
                      )(
                        "d%s={}",
                        m
                      )("for(var j=0;j<ks2.length;++j){"),
                      u(i, c, d, m + "[ks2[j]]")("}"))
                    : c.repeated
                    ? (i("if(m%s&&m%s.length){", m, m)("d%s=[]", m)(
                        "for(var j=0;j<m%s.length;++j){",
                        m
                      ),
                      u(i, c, d, m + "[j]")("}"))
                    : (i("if(m%s!=null&&m.hasOwnProperty(%j)){", m, c.name),
                      u(i, c, d, m),
                      c.partOf &&
                        i("if(o.oneofs)")(
                          "d%s=%j",
                          a.safeProp(c.partOf.name),
                          c.name
                        )),
                    i("}");
                }
                return i("return d");
              }),
              i.exports;
          },
          function () {
            return { "./enum": __cjsMetaURL$B, "./util": __cjsMetaURL$z };
          }
        );
        var __cjsMetaURL$w =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js";
        loader.define(
          __cjsMetaURL$w,
          function (e, t, i, n, r) {
            var o = e,
              s = t("./message");
            (o[".google.protobuf.Any"] = {
              fromObject: function (e) {
                if (e && e["@type"]) {
                  var t = e["@type"].substring(e["@type"].lastIndexOf("/") + 1),
                    i = this.lookup(t);
                  if (i) {
                    var n =
                      "." === e["@type"].charAt(0)
                        ? e["@type"].substr(1)
                        : e["@type"];
                    return (
                      -1 === n.indexOf("/") && (n = "/" + n),
                      this.create({
                        type_url: n,
                        value: i.encode(i.fromObject(e)).finish(),
                      })
                    );
                  }
                }
                return this.fromObject(e);
              },
              toObject: function (e, t) {
                var i = "",
                  n = "";
                if (t && t.json && e.type_url && e.value) {
                  (n = e.type_url.substring(e.type_url.lastIndexOf("/") + 1)),
                    (i = e.type_url.substring(
                      0,
                      e.type_url.lastIndexOf("/") + 1
                    ));
                  var r = this.lookup(n);
                  r && (e = r.decode(e.value));
                }
                if (!(e instanceof this.ctor) && e instanceof s) {
                  var o = e.$type.toObject(e, t);
                  return (
                    "" === i && (i = "type.googleapis.com/"),
                    (n =
                      i +
                      ("." === e.$type.fullName[0]
                        ? e.$type.fullName.substr(1)
                        : e.$type.fullName)),
                    (o["@type"] = n),
                    o
                  );
                }
                return this.toObject(e, t);
              },
            }),
              i.exports;
          },
          function () {
            return { "./message": __cjsMetaURL$s };
          }
        );
        var __cjsMetaURL$x =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/src/type.js";
        loader.define(
          __cjsMetaURL$x,
          function (e, t, i, n, r) {
            i.exports = w;
            var o = t("./namespace");
            ((w.prototype = Object.create(o.prototype)).constructor =
              w).className = "Type";
            var s = t("./enum"),
              a = t("./oneof"),
              l = t("./field"),
              u = t("./mapfield"),
              c = t("./service"),
              m = t("./message"),
              _ = t("./reader"),
              p = t("./writer"),
              d = t("./util"),
              h = t("./encoder"),
              f = t("./decoder"),
              y = t("./verifier"),
              g = t("./converter"),
              S = t("./wrappers");
            function w(e, t) {
              o.call(this, e, t),
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
            Object.defineProperties(w.prototype, {
              fieldsById: {
                get: function () {
                  if (this._fieldsById) return this._fieldsById;
                  this._fieldsById = {};
                  for (
                    var e = Object.keys(this.fields), t = 0;
                    t < e.length;
                    ++t
                  ) {
                    var i = this.fields[e[t]],
                      n = i.id;
                    if (this._fieldsById[n])
                      throw Error("duplicate id " + n + " in " + this);
                    this._fieldsById[n] = i;
                  }
                  return this._fieldsById;
                },
              },
              fieldsArray: {
                get: function () {
                  return (
                    this._fieldsArray ||
                    (this._fieldsArray = d.toArray(this.fields))
                  );
                },
              },
              oneofsArray: {
                get: function () {
                  return (
                    this._oneofsArray ||
                    (this._oneofsArray = d.toArray(this.oneofs))
                  );
                },
              },
              ctor: {
                get: function () {
                  return (
                    this._ctor || (this.ctor = w.generateConstructor(this)())
                  );
                },
                set: function (e) {
                  var t = e.prototype;
                  t instanceof m ||
                    (((e.prototype = new m()).constructor = e),
                    d.merge(e.prototype, t)),
                    (e.$type = e.prototype.$type = this),
                    d.merge(e, m, !0),
                    (this._ctor = e);
                  for (var i = 0; i < this.fieldsArray.length; ++i)
                    this._fieldsArray[i].resolve();
                  var n = {};
                  for (i = 0; i < this.oneofsArray.length; ++i)
                    n[this._oneofsArray[i].resolve().name] = {
                      get: d.oneOfGetter(this._oneofsArray[i].oneof),
                      set: d.oneOfSetter(this._oneofsArray[i].oneof),
                    };
                  i && Object.defineProperties(e.prototype, n);
                },
              },
            }),
              (w.generateConstructor = function (e) {
                for (
                  var t, i = d.codegen(["p"], e.name), n = 0;
                  n < e.fieldsArray.length;
                  ++n
                )
                  (t = e._fieldsArray[n]).map
                    ? i("this%s={}", d.safeProp(t.name))
                    : t.repeated && i("this%s=[]", d.safeProp(t.name));
                return i(
                  "if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)"
                )("this[ks[i]]=p[ks[i]]");
              }),
              (w.fromJSON = function (e, t) {
                var i = new w(e, t.options);
                (i.extensions = t.extensions), (i.reserved = t.reserved);
                for (var n = Object.keys(t.fields), r = 0; r < n.length; ++r)
                  i.add(
                    (void 0 !== t.fields[n[r]].keyType
                      ? u.fromJSON
                      : l.fromJSON)(n[r], t.fields[n[r]])
                  );
                if (t.oneofs)
                  for (n = Object.keys(t.oneofs), r = 0; r < n.length; ++r)
                    i.add(a.fromJSON(n[r], t.oneofs[n[r]]));
                if (t.nested)
                  for (n = Object.keys(t.nested), r = 0; r < n.length; ++r) {
                    var m = t.nested[n[r]];
                    i.add(
                      (void 0 !== m.id
                        ? l.fromJSON
                        : void 0 !== m.fields
                        ? w.fromJSON
                        : void 0 !== m.values
                        ? s.fromJSON
                        : void 0 !== m.methods
                        ? c.fromJSON
                        : o.fromJSON)(n[r], m)
                    );
                  }
                return (
                  t.extensions &&
                    t.extensions.length &&
                    (i.extensions = t.extensions),
                  t.reserved && t.reserved.length && (i.reserved = t.reserved),
                  t.group && (i.group = !0),
                  t.comment && (i.comment = t.comment),
                  i
                );
              }),
              (w.prototype.toJSON = function (e) {
                var t = o.prototype.toJSON.call(this, e),
                  i = !!e && Boolean(e.keepComments);
                return d.toObject([
                  "options",
                  (t && t.options) || void 0,
                  "oneofs",
                  o.arrayToJSON(this.oneofsArray, e),
                  "fields",
                  o.arrayToJSON(
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
                  i ? this.comment : void 0,
                ]);
              }),
              (w.prototype.resolveAll = function () {
                for (var e = this.fieldsArray, t = 0; t < e.length; )
                  e[t++].resolve();
                var i = this.oneofsArray;
                for (t = 0; t < i.length; ) i[t++].resolve();
                return o.prototype.resolveAll.call(this);
              }),
              (w.prototype.get = function (e) {
                return (
                  this.fields[e] ||
                  (this.oneofs && this.oneofs[e]) ||
                  (this.nested && this.nested[e]) ||
                  null
                );
              }),
              (w.prototype.add = function (e) {
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
                return e instanceof a
                  ? (this.oneofs || (this.oneofs = {}),
                    (this.oneofs[e.name] = e),
                    e.onAdd(this),
                    b(this))
                  : o.prototype.add.call(this, e);
              }),
              (w.prototype.remove = function (e) {
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
                if (e instanceof a) {
                  if (!this.oneofs || this.oneofs[e.name] !== e)
                    throw Error(e + " is not a member of " + this);
                  return (
                    delete this.oneofs[e.name],
                    (e.parent = null),
                    e.onRemove(this),
                    b(this)
                  );
                }
                return o.prototype.remove.call(this, e);
              }),
              (w.prototype.isReservedId = function (e) {
                return o.isReservedId(this.reserved, e);
              }),
              (w.prototype.isReservedName = function (e) {
                return o.isReservedName(this.reserved, e);
              }),
              (w.prototype.create = function (e) {
                return new this.ctor(e);
              }),
              (w.prototype.setup = function () {
                for (
                  var e = this.fullName, t = [], i = 0;
                  i < this.fieldsArray.length;
                  ++i
                )
                  t.push(this._fieldsArray[i].resolve().resolvedType);
                (this.encode = h(this)({ Writer: p, types: t, util: d })),
                  (this.decode = f(this)({ Reader: _, types: t, util: d })),
                  (this.verify = y(this)({ types: t, util: d })),
                  (this.fromObject = g.fromObject(this)({ types: t, util: d })),
                  (this.toObject = g.toObject(this)({ types: t, util: d }));
                var n = S[e];
                if (n) {
                  var r = Object.create(this);
                  (r.fromObject = this.fromObject),
                    (this.fromObject = n.fromObject.bind(r)),
                    (r.toObject = this.toObject),
                    (this.toObject = n.toObject.bind(r));
                }
                return this;
              }),
              (w.prototype.encode = function (e, t) {
                return this.setup().encode(e, t);
              }),
              (w.prototype.encodeDelimited = function (e, t) {
                return this.encode(e, t && t.len ? t.fork() : t).ldelim();
              }),
              (w.prototype.decode = function (e, t) {
                return this.setup().decode(e, t);
              }),
              (w.prototype.decodeDelimited = function (e) {
                return (
                  e instanceof _ || (e = _.create(e)),
                  this.decode(e, e.uint32())
                );
              }),
              (w.prototype.verify = function (e) {
                return this.setup().verify(e);
              }),
              (w.prototype.fromObject = function (e) {
                return this.setup().fromObject(e);
              }),
              (w.prototype.toObject = function (e, t) {
                return this.setup().toObject(e, t);
              }),
              (w.d = function (e) {
                return function (t) {
                  d.decorateType(t, e);
                };
              }),
              i.exports;
          },
          function () {
            return {
              "./namespace": __cjsMetaURL$o,
              "./enum": __cjsMetaURL$B,
              "./oneof": __cjsMetaURL$n,
              "./field": __cjsMetaURL$m,
              "./mapfield": __cjsMetaURL$p,
              "./service": __cjsMetaURL$r,
              "./message": __cjsMetaURL$s,
              "./reader": __cjsMetaURL$c,
              "./writer": __cjsMetaURL$a,
              "./util": __cjsMetaURL$z,
              "./encoder": __cjsMetaURL$C,
              "./decoder": __cjsMetaURL$t,
              "./verifier": __cjsMetaURL$u,
              "./converter": __cjsMetaURL$v,
              "./wrappers": __cjsMetaURL$w,
            };
          }
        );
        var __cjsMetaURL$y =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/src/root.js";
        loader.define(
          __cjsMetaURL$y,
          function (e, t, i, n, r) {
            i.exports = p;
            var o = t("./namespace");
            ((p.prototype = Object.create(o.prototype)).constructor =
              p).className = "Root";
            var s,
              a,
              l,
              u = t("./field"),
              c = t("./enum"),
              m = t("./oneof"),
              _ = t("./util");
            function p(e) {
              o.call(this, "", e), (this.deferred = []), (this.files = []);
            }
            function d() {}
            (p.fromJSON = function (e, t) {
              return (
                t || (t = new p()),
                e.options && t.setOptions(e.options),
                t.addJSON(e.nested)
              );
            }),
              (p.prototype.resolvePath = _.path.resolve),
              (p.prototype.fetch = _.fetch),
              (p.prototype.load = function e(t, i, n) {
                "function" == typeof i && ((n = i), (i = void 0));
                var r = this;
                if (!n) return _.asPromise(e, r, t, i);
                var o = n === d;
                function s(e, t) {
                  if (n) {
                    var i = n;
                    if (((n = null), o)) throw e;
                    i(e, t);
                  }
                }
                function u(e) {
                  var t = e.lastIndexOf("google/protobuf/");
                  if (t > -1) {
                    var i = e.substring(t);
                    if (i in l) return i;
                  }
                  return null;
                }
                function c(e, t) {
                  try {
                    if (
                      (_.isString(t) &&
                        "{" === t.charAt(0) &&
                        (t = JSON.parse(t)),
                      _.isString(t))
                    ) {
                      a.filename = e;
                      var n,
                        l = a(t, r, i),
                        c = 0;
                      if (l.imports)
                        for (; c < l.imports.length; ++c)
                          (n =
                            u(l.imports[c]) ||
                            r.resolvePath(e, l.imports[c])) && m(n);
                      if (l.weakImports)
                        for (c = 0; c < l.weakImports.length; ++c)
                          (n =
                            u(l.weakImports[c]) ||
                            r.resolvePath(e, l.weakImports[c])) && m(n, !0);
                    } else r.setOptions(t.options).addJSON(t.nested);
                  } catch (e) {
                    s(e);
                  }
                  o || p || s(null, r);
                }
                function m(e, t) {
                  if (!(r.files.indexOf(e) > -1))
                    if ((r.files.push(e), e in l))
                      o
                        ? c(e, l[e])
                        : (++p,
                          setTimeout(function () {
                            --p, c(e, l[e]);
                          }));
                    else if (o) {
                      var i;
                      try {
                        i = _.fs.readFileSync(e).toString("utf8");
                      } catch (e) {
                        return void (t || s(e));
                      }
                      c(e, i);
                    } else
                      ++p,
                        r.fetch(e, function (i, o) {
                          --p,
                            n && (i ? (t ? p || s(null, r) : s(i)) : c(e, o));
                        });
                }
                var p = 0;
                _.isString(t) && (t = [t]);
                for (var h, f = 0; f < t.length; ++f)
                  (h = r.resolvePath("", t[f])) && m(h);
                if (o) return r;
                p || s(null, r);
              }),
              (p.prototype.loadSync = function (e, t) {
                if (!_.isNode) throw Error("not supported");
                return this.load(e, t, d);
              }),
              (p.prototype.resolveAll = function () {
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
                return o.prototype.resolveAll.call(this);
              });
            var h = /^[A-Z]/;
            function f(e, t) {
              var i = t.parent.lookup(t.extend);
              if (i) {
                var n = new u(
                  t.fullName,
                  t.id,
                  t.type,
                  t.rule,
                  void 0,
                  t.options
                );
                return (
                  (n.declaringField = t), (t.extensionField = n), i.add(n), !0
                );
              }
              return !1;
            }
            (p.prototype._handleAdd = function (e) {
              if (e instanceof u)
                void 0 === e.extend ||
                  e.extensionField ||
                  f(0, e) ||
                  this.deferred.push(e);
              else if (e instanceof c)
                h.test(e.name) && (e.parent[e.name] = e.values);
              else if (!(e instanceof m)) {
                if (e instanceof s)
                  for (var t = 0; t < this.deferred.length; )
                    f(0, this.deferred[t]) ? this.deferred.splice(t, 1) : ++t;
                for (var i = 0; i < e.nestedArray.length; ++i)
                  this._handleAdd(e._nestedArray[i]);
                h.test(e.name) && (e.parent[e.name] = e);
              }
            }),
              (p.prototype._handleRemove = function (e) {
                if (e instanceof u) {
                  if (void 0 !== e.extend)
                    if (e.extensionField)
                      e.extensionField.parent.remove(e.extensionField),
                        (e.extensionField = null);
                    else {
                      var t = this.deferred.indexOf(e);
                      t > -1 && this.deferred.splice(t, 1);
                    }
                } else if (e instanceof c)
                  h.test(e.name) && delete e.parent[e.name];
                else if (e instanceof o) {
                  for (var i = 0; i < e.nestedArray.length; ++i)
                    this._handleRemove(e._nestedArray[i]);
                  h.test(e.name) && delete e.parent[e.name];
                }
              }),
              (p._configure = function (e, t, i) {
                (s = e), (a = t), (l = i);
              }),
              i.exports;
          },
          function () {
            return {
              "./namespace": __cjsMetaURL$o,
              "./field": __cjsMetaURL$m,
              "./enum": __cjsMetaURL$B,
              "./oneof": __cjsMetaURL$n,
              "./util": __cjsMetaURL$z,
            };
          }
        );
        var __cjsMetaURL$z =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/src/util.js";
        loader.define(
          __cjsMetaURL$z,
          function (e, t, i, n, r) {
            var o,
              s,
              a = (i.exports = t("./util/minimal")),
              l = t("./roots");
            (a.codegen = t("@protobufjs/codegen")),
              (a.fetch = t("@protobufjs/fetch")),
              (a.path = t("@protobufjs/path")),
              (a.fs = a.inquire("fs")),
              (a.toArray = function (e) {
                if (e) {
                  for (
                    var t = Object.keys(e), i = new Array(t.length), n = 0;
                    n < t.length;

                  )
                    i[n] = e[t[n++]];
                  return i;
                }
                return [];
              }),
              (a.toObject = function (e) {
                for (var t = {}, i = 0; i < e.length; ) {
                  var n = e[i++],
                    r = e[i++];
                  void 0 !== r && (t[n] = r);
                }
                return t;
              });
            var u = /\\/g,
              c = /"/g;
            (a.isReserved = function (e) {
              return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(
                e
              );
            }),
              (a.safeProp = function (e) {
                return !/^[$\w_]+$/.test(e) || a.isReserved(e)
                  ? '["' + e.replace(u, "\\\\").replace(c, '\\"') + '"]'
                  : "." + e;
              }),
              (a.ucFirst = function (e) {
                return e.charAt(0).toUpperCase() + e.substring(1);
              });
            var m = /_([a-z])/g;
            (a.camelCase = function (e) {
              return (
                e.substring(0, 1) +
                e.substring(1).replace(m, function (e, t) {
                  return t.toUpperCase();
                })
              );
            }),
              (a.compareFieldsById = function (e, t) {
                return e.id - t.id;
              }),
              (a.decorateType = function (e, i) {
                if (e.$type)
                  return (
                    i &&
                      e.$type.name !== i &&
                      (a.decorateRoot.remove(e.$type),
                      (e.$type.name = i),
                      a.decorateRoot.add(e.$type)),
                    e.$type
                  );
                o || (o = t("./type"));
                var n = new o(i || e.name);
                return (
                  a.decorateRoot.add(n),
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
            var _ = 0;
            (a.decorateEnum = function (e) {
              if (e.$type) return e.$type;
              s || (s = t("./enum"));
              var i = new s("Enum" + _++, e);
              return (
                a.decorateRoot.add(i),
                Object.defineProperty(e, "$type", { value: i, enumerable: !1 }),
                i
              );
            }),
              (a.setProperty = function (e, t, i) {
                if ("object" != typeof e)
                  throw TypeError("dst must be an object");
                if (!t) throw TypeError("path must be specified");
                return (function e(t, i, n) {
                  var r = i.shift();
                  if (i.length > 0) t[r] = e(t[r] || {}, i, n);
                  else {
                    var o = t[r];
                    o && (n = [].concat(o).concat(n)), (t[r] = n);
                  }
                  return t;
                })(e, (t = t.split(".")), i);
              }),
              Object.defineProperty(a, "decorateRoot", {
                get: function () {
                  return l.decorated || (l.decorated = new (t("./root"))());
                },
              }),
              i.exports;
          },
          function () {
            return {
              "./util/minimal": __cjsMetaURL$9,
              "./roots": __cjsMetaURL$g,
              "@protobufjs/codegen": __cjsMetaURL$i,
              "@protobufjs/fetch": __cjsMetaURL$j,
              "@protobufjs/path": __cjsMetaURL$k,
              "./type": __cjsMetaURL$x,
              "./enum": __cjsMetaURL$B,
              "./root": __cjsMetaURL$y,
            };
          }
        );
        var __cjsMetaURL$A =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/src/object.js";
        loader.define(
          __cjsMetaURL$A,
          function (e, t, i, n, r) {
            (i.exports = a), (a.className = "ReflectionObject");
            var o,
              s = t("./util");
            function a(e, t) {
              if (!s.isString(e)) throw TypeError("name must be a string");
              if (t && !s.isObject(t))
                throw TypeError("options must be an object");
              (this.options = t),
                (this.parsedOptions = null),
                (this.name = e),
                (this.parent = null),
                (this.resolved = !1),
                (this.comment = null),
                (this.filename = null);
            }
            Object.defineProperties(a.prototype, {
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
              (a.prototype.toJSON = function () {
                throw Error();
              }),
              (a.prototype.onAdd = function (e) {
                this.parent && this.parent !== e && this.parent.remove(this),
                  (this.parent = e),
                  (this.resolved = !1);
                var t = e.root;
                t instanceof o && t._handleAdd(this);
              }),
              (a.prototype.onRemove = function (e) {
                var t = e.root;
                t instanceof o && t._handleRemove(this),
                  (this.parent = null),
                  (this.resolved = !1);
              }),
              (a.prototype.resolve = function () {
                return (
                  this.resolved ||
                    (this.root instanceof o && (this.resolved = !0)),
                  this
                );
              }),
              (a.prototype.getOption = function (e) {
                if (this.options) return this.options[e];
              }),
              (a.prototype.setOption = function (e, t, i) {
                return (
                  (i && this.options && void 0 !== this.options[e]) ||
                    ((this.options || (this.options = {}))[e] = t),
                  this
                );
              }),
              (a.prototype.setParsedOption = function (e, t, i) {
                this.parsedOptions || (this.parsedOptions = []);
                var n = this.parsedOptions;
                if (i) {
                  var r = n.find(function (t) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                  });
                  if (r) {
                    var o = r[e];
                    s.setProperty(o, i, t);
                  } else ((r = {})[e] = s.setProperty({}, i, t)), n.push(r);
                } else {
                  var a = {};
                  (a[e] = t), n.push(a);
                }
                return this;
              }),
              (a.prototype.setOptions = function (e, t) {
                if (e)
                  for (var i = Object.keys(e), n = 0; n < i.length; ++n)
                    this.setOption(i[n], e[i[n]], t);
                return this;
              }),
              (a.prototype.toString = function () {
                var e = this.constructor.className,
                  t = this.fullName;
                return t.length ? e + " " + t : e;
              }),
              (a._configure = function (e) {
                o = e;
              }),
              i.exports;
          },
          function () {
            return { "./util": __cjsMetaURL$z };
          }
        );
        var __cjsMetaURL$B =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/src/enum.js";
        loader.define(
          __cjsMetaURL$B,
          function (e, t, i, n, r) {
            i.exports = l;
            var o = t("./object");
            ((l.prototype = Object.create(o.prototype)).constructor =
              l).className = "Enum";
            var s = t("./namespace"),
              a = t("./util");
            function l(e, t, i, n, r) {
              if ((o.call(this, e, i), t && "object" != typeof t))
                throw TypeError("values must be an object");
              if (
                ((this.valuesById = {}),
                (this.values = Object.create(this.valuesById)),
                (this.comment = n),
                (this.comments = r || {}),
                (this.reserved = void 0),
                t)
              )
                for (var s = Object.keys(t), a = 0; a < s.length; ++a)
                  "number" == typeof t[s[a]] &&
                    (this.valuesById[(this.values[s[a]] = t[s[a]])] = s[a]);
            }
            (l.fromJSON = function (e, t) {
              var i = new l(e, t.values, t.options, t.comment, t.comments);
              return (i.reserved = t.reserved), i;
            }),
              (l.prototype.toJSON = function (e) {
                var t = !!e && Boolean(e.keepComments);
                return a.toObject([
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
              (l.prototype.add = function (e, t, i) {
                if (!a.isString(e)) throw TypeError("name must be a string");
                if (!a.isInteger(t)) throw TypeError("id must be an integer");
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
                return (this.comments[e] = i || null), this;
              }),
              (l.prototype.remove = function (e) {
                if (!a.isString(e)) throw TypeError("name must be a string");
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
                return s.isReservedId(this.reserved, e);
              }),
              (l.prototype.isReservedName = function (e) {
                return s.isReservedName(this.reserved, e);
              }),
              i.exports;
          },
          function () {
            return {
              "./object": __cjsMetaURL$A,
              "./namespace": __cjsMetaURL$o,
              "./util": __cjsMetaURL$z,
            };
          }
        );
        var __cjsMetaURL$C =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js";
        loader.define(
          __cjsMetaURL$C,
          function (e, t, i, n, r) {
            i.exports = function (e) {
              for (
                var t,
                  i = a.codegen(["m", "w"], e.name + "$encode")("if(!w)")(
                    "w=Writer.create()"
                  ),
                  n = e.fieldsArray.slice().sort(a.compareFieldsById),
                  r = 0;
                r < n.length;
                ++r
              ) {
                var u = n[r].resolve(),
                  c = e._fieldsArray.indexOf(u),
                  m = u.resolvedType instanceof o ? "int32" : u.type,
                  _ = s.basic[m];
                (t = "m" + a.safeProp(u.name)),
                  u.map
                    ? (i(
                        "if(%s!=null&&Object.hasOwnProperty.call(m,%j)){",
                        t,
                        u.name
                      )("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", t)(
                        "w.uint32(%i).fork().uint32(%i).%s(ks[i])",
                        ((u.id << 3) | 2) >>> 0,
                        8 | s.mapKey[u.keyType],
                        u.keyType
                      ),
                      void 0 === _
                        ? i(
                            "types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()",
                            c,
                            t
                          )
                        : i(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | _, m, t),
                      i("}")("}"))
                    : u.repeated
                    ? (i("if(%s!=null&&%s.length){", t, t),
                      u.packed && void 0 !== s.packed[m]
                        ? i("w.uint32(%i).fork()", ((u.id << 3) | 2) >>> 0)(
                            "for(var i=0;i<%s.length;++i)",
                            t
                          )(
                            "w.%s(%s[i])",
                            m,
                            t
                          )("w.ldelim()")
                        : (i("for(var i=0;i<%s.length;++i)", t),
                          void 0 === _
                            ? l(i, u, c, t + "[i]")
                            : i(
                                "w.uint32(%i).%s(%s[i])",
                                ((u.id << 3) | _) >>> 0,
                                m,
                                t
                              )),
                      i("}"))
                    : (u.optional &&
                        i(
                          "if(%s!=null&&Object.hasOwnProperty.call(m,%j))",
                          t,
                          u.name
                        ),
                      void 0 === _
                        ? l(i, u, c, t)
                        : i(
                            "w.uint32(%i).%s(%s)",
                            ((u.id << 3) | _) >>> 0,
                            m,
                            t
                          ));
              }
              return i("return w");
            };
            var o = t("./enum"),
              s = t("./types"),
              a = t("./util");
            function l(e, t, i, n) {
              return t.resolvedType.group
                ? e(
                    "types[%i].encode(%s,w.uint32(%i)).uint32(%i)",
                    i,
                    n,
                    ((t.id << 3) | 3) >>> 0,
                    ((t.id << 3) | 4) >>> 0
                  )
                : e(
                    "types[%i].encode(%s,w.uint32(%i).fork()).ldelim()",
                    i,
                    n,
                    ((t.id << 3) | 2) >>> 0
                  );
            }
            i.exports;
          },
          function () {
            return {
              "./enum": __cjsMetaURL$B,
              "./types": __cjsMetaURL$l,
              "./util": __cjsMetaURL$z,
            };
          }
        );
        var __cjsMetaURL$D =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js";
        loader.define(
          __cjsMetaURL$D,
          function (e, t, i, n, r) {
            var o = (i.exports = t("./index-minimal"));
            (o.build = "light"),
              (o.load = function (e, t, i) {
                return (
                  "function" == typeof t
                    ? ((i = t), (t = new o.Root()))
                    : t || (t = new o.Root()),
                  t.load(e, i)
                );
              }),
              (o.loadSync = function (e, t) {
                return t || (t = new o.Root()), t.loadSync(e);
              }),
              (o.encoder = t("./encoder")),
              (o.decoder = t("./decoder")),
              (o.verifier = t("./verifier")),
              (o.converter = t("./converter")),
              (o.ReflectionObject = t("./object")),
              (o.Namespace = t("./namespace")),
              (o.Root = t("./root")),
              (o.Enum = t("./enum")),
              (o.Type = t("./type")),
              (o.Field = t("./field")),
              (o.OneOf = t("./oneof")),
              (o.MapField = t("./mapfield")),
              (o.Service = t("./service")),
              (o.Method = t("./method")),
              (o.Message = t("./message")),
              (o.wrappers = t("./wrappers")),
              (o.types = t("./types")),
              (o.util = t("./util")),
              o.ReflectionObject._configure(o.Root),
              o.Namespace._configure(o.Type, o.Service, o.Enum),
              o.Root._configure(o.Type),
              o.Field._configure(o.Type),
              i.exports;
          },
          function () {
            return {
              "./index-minimal": __cjsMetaURL$h,
              "./encoder": __cjsMetaURL$C,
              "./decoder": __cjsMetaURL$t,
              "./verifier": __cjsMetaURL$u,
              "./converter": __cjsMetaURL$v,
              "./object": __cjsMetaURL$A,
              "./namespace": __cjsMetaURL$o,
              "./root": __cjsMetaURL$y,
              "./enum": __cjsMetaURL$B,
              "./type": __cjsMetaURL$x,
              "./field": __cjsMetaURL$m,
              "./oneof": __cjsMetaURL$n,
              "./mapfield": __cjsMetaURL$p,
              "./service": __cjsMetaURL$r,
              "./method": __cjsMetaURL$q,
              "./message": __cjsMetaURL$s,
              "./wrappers": __cjsMetaURL$w,
              "./types": __cjsMetaURL$l,
              "./util": __cjsMetaURL$z,
            };
          }
        );
        var __cjsMetaURL$E =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js";
        loader.define(
          __cjsMetaURL$E,
          function (e, t, i, n, r) {
            i.exports = h;
            var o = /[\s{}=;:[\],'"()<>]/g,
              s = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
              a = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
              l = /^ *[*/]+ */,
              u = /^\s*\*?\/*/,
              c = /\n/g,
              m = /\s/,
              _ = /\\(.?)/g,
              p = { 0: "\0", r: "\r", n: "\n", t: "\t" };
            function d(e) {
              return e.replace(_, function (e, t) {
                switch (t) {
                  case "\\":
                  case "":
                    return t;
                  default:
                    return p[t] || "";
                }
              });
            }
            function h(e, t) {
              e = e.toString();
              var i = 0,
                n = e.length,
                r = 1,
                _ = null,
                p = null,
                h = 0,
                f = !1,
                y = !1,
                g = [],
                S = null;
              function w(e) {
                return Error("illegal " + e + " (line " + r + ")");
              }
              function b(t) {
                return e.charAt(t);
              }
              function v(i, n, o) {
                (_ = e.charAt(i++)), (h = r), (f = !1), (y = o);
                var s,
                  a = i - (t ? 2 : 3);
                do {
                  if (--a < 0 || "\n" === (s = e.charAt(a))) {
                    f = !0;
                    break;
                  }
                } while (" " === s || "\t" === s);
                for (
                  var m = e.substring(i, n).split(c), d = 0;
                  d < m.length;
                  ++d
                )
                  m[d] = m[d].replace(t ? u : l, "").trim();
                p = m.join("\n").trim();
              }
              function $(t) {
                var i = R(t),
                  n = e.substring(t, i);
                return /^\s*\/{1,2}/.test(n);
              }
              function R(e) {
                for (var t = e; t < n && "\n" !== b(t); ) t++;
                return t;
              }
              function T() {
                if (g.length > 0) return g.shift();
                if (S)
                  return (function () {
                    var t = "'" === S ? a : s;
                    t.lastIndex = i - 1;
                    var n = t.exec(e);
                    if (!n) throw w("string");
                    return (i = t.lastIndex), A(S), (S = null), d(n[1]);
                  })();
                var l,
                  u,
                  c,
                  _,
                  p,
                  h = 0 === i;
                do {
                  if (i === n) return null;
                  for (l = !1; m.test((c = b(i))); )
                    if (("\n" === c && ((h = !0), ++r), ++i === n)) return null;
                  if ("/" === b(i)) {
                    if (++i === n) throw w("comment");
                    if ("/" === b(i))
                      if (t) {
                        if (((_ = i), (p = !1), $(i))) {
                          p = !0;
                          do {
                            if ((i = R(i)) === n) break;
                            i++;
                          } while ($(i));
                        } else i = Math.min(n, R(i) + 1);
                        p && v(_, i, h), r++, (l = !0);
                      } else {
                        for (p = "/" === b((_ = i + 1)); "\n" !== b(++i); )
                          if (i === n) return null;
                        ++i, p && v(_, i - 1, h), ++r, (l = !0);
                      }
                    else {
                      if ("*" !== (c = b(i))) return "/";
                      (_ = i + 1), (p = t || "*" === b(_));
                      do {
                        if (("\n" === c && ++r, ++i === n)) throw w("comment");
                        (u = c), (c = b(i));
                      } while ("*" !== u || "/" !== c);
                      ++i, p && v(_, i - 2, h), (l = !0);
                    }
                  }
                } while (l);
                var f = i;
                if (((o.lastIndex = 0), !o.test(b(f++))))
                  for (; f < n && !o.test(b(f)); ) ++f;
                var y = e.substring(i, (i = f));
                return ('"' !== y && "'" !== y) || (S = y), y;
              }
              function A(e) {
                g.push(e);
              }
              function E() {
                if (!g.length) {
                  var e = T();
                  if (null === e) return null;
                  A(e);
                }
                return g[0];
              }
              return Object.defineProperty(
                {
                  next: T,
                  peek: E,
                  push: A,
                  skip: function (e, t) {
                    var i = E();
                    if (i === e) return T(), !0;
                    if (!t) throw w("token '" + i + "', '" + e + "' expected");
                    return !1;
                  },
                  cmnt: function (e) {
                    var i = null;
                    return (
                      void 0 === e
                        ? h === r - 1 &&
                          (t || "*" === _ || f) &&
                          (i = y ? p : null)
                        : (h < e && E(),
                          h !== e ||
                            f ||
                            (!t && "/" !== _) ||
                            (i = y ? null : p)),
                      i
                    );
                  },
                },
                "line",
                {
                  get: function () {
                    return r;
                  },
                }
              );
            }
            (h.unescape = d), i.exports;
          },
          {}
        );
        var __cjsMetaURL$F =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/src/parse.js";
        loader.define(
          __cjsMetaURL$F,
          function (e, t, i, n, r) {
            (i.exports = A),
              (A.filename = null),
              (A.defaults = { keepCase: !1 });
            var o = t("./tokenize"),
              s = t("./root"),
              a = t("./type"),
              l = t("./field"),
              u = t("./mapfield"),
              c = t("./oneof"),
              m = t("./enum"),
              _ = t("./service"),
              p = t("./method"),
              d = t("./types"),
              h = t("./util"),
              f = /^[1-9][0-9]*$/,
              y = /^-?[1-9][0-9]*$/,
              g = /^0[x][0-9a-fA-F]+$/,
              S = /^-?0[x][0-9a-fA-F]+$/,
              w = /^0[0-7]+$/,
              b = /^-?0[0-7]+$/,
              v = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/,
              $ = /^[a-zA-Z_][a-zA-Z_0-9]*$/,
              R =
                /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/,
              T = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
            function A(e, t, i) {
              t instanceof s || ((i = t), (t = new s())), i || (i = A.defaults);
              var n,
                r,
                E,
                N,
                L,
                I = i.preferTrailingComment || !1,
                C = o(e, i.alternateCommentMode || !1),
                D = C.next,
                M = C.push,
                P = C.peek,
                F = C.skip,
                O = C.cmnt,
                k = !0,
                G = !1,
                x = t,
                W = i.keepCase
                  ? function (e) {
                      return e;
                    }
                  : h.camelCase;
              function B(e, t, i) {
                var n = A.filename;
                return (
                  i || (A.filename = null),
                  Error(
                    "illegal " +
                      (t || "token") +
                      " '" +
                      e +
                      "' (" +
                      (n ? n + ", " : "") +
                      "line " +
                      C.line +
                      ")"
                  )
                );
              }
              function U() {
                var e,
                  t = [];
                do {
                  if ('"' !== (e = D()) && "'" !== e) throw B(e);
                  t.push(D()), F(e), (e = P());
                } while ('"' === e || "'" === e);
                return t.join("");
              }
              function j(e) {
                var t = D();
                switch (t) {
                  case "'":
                  case '"':
                    return M(t), U();
                  case "true":
                  case "TRUE":
                    return !0;
                  case "false":
                  case "FALSE":
                    return !1;
                }
                try {
                  return (function (e, t) {
                    var i = 1;
                    "-" === e.charAt(0) && ((i = -1), (e = e.substring(1)));
                    switch (e) {
                      case "inf":
                      case "INF":
                      case "Inf":
                        return i * (1 / 0);
                      case "nan":
                      case "NAN":
                      case "Nan":
                      case "NaN":
                        return NaN;
                      case "0":
                        return 0;
                    }
                    if (f.test(e)) return i * parseInt(e, 10);
                    if (g.test(e)) return i * parseInt(e, 16);
                    if (w.test(e)) return i * parseInt(e, 8);
                    if (v.test(e)) return i * parseFloat(e);
                    throw B(e, "number", t);
                  })(t, !0);
                } catch (i) {
                  if (e && R.test(t)) return t;
                  throw B(t, "value");
                }
              }
              function V(e, t) {
                var i, n;
                do {
                  !t || ('"' !== (i = P()) && "'" !== i)
                    ? e.push([(n = z(D())), F("to", !0) ? z(D()) : n])
                    : e.push(U());
                } while (F(",", !0));
                F(";");
              }
              function z(e, t) {
                switch (e) {
                  case "max":
                  case "MAX":
                  case "Max":
                    return 536870911;
                  case "0":
                    return 0;
                }
                if (!t && "-" === e.charAt(0)) throw B(e, "id");
                if (y.test(e)) return parseInt(e, 10);
                if (S.test(e)) return parseInt(e, 16);
                if (b.test(e)) return parseInt(e, 8);
                throw B(e, "id");
              }
              function H() {
                if (void 0 !== n) throw B("package");
                if (((n = D()), !R.test(n))) throw B(n, "name");
                (x = x.define(n)), F(";");
              }
              function Y() {
                var e,
                  t = P();
                switch (t) {
                  case "weak":
                    (e = E || (E = [])), D();
                    break;
                  case "public":
                    D();
                  default:
                    e = r || (r = []);
                }
                (t = U()), F(";"), e.push(t);
              }
              function q() {
                if (
                  (F("="), (N = U()), !(G = "proto3" === N) && "proto2" !== N)
                )
                  throw B(N, "syntax");
                F(";");
              }
              function J(e, t) {
                switch (t) {
                  case "option":
                    return X(e, t), F(";"), !0;
                  case "message":
                    return (
                      (function (e, t) {
                        if (!$.test((t = D()))) throw B(t, "type name");
                        var i = new a(t);
                        K(i, function (e) {
                          if (!J(i, e))
                            switch (e) {
                              case "map":
                                !(function (e) {
                                  F("<");
                                  var t = D();
                                  if (void 0 === d.mapKey[t])
                                    throw B(t, "type");
                                  F(",");
                                  var i = D();
                                  if (!R.test(i)) throw B(i, "type");
                                  F(">");
                                  var n = D();
                                  if (!$.test(n)) throw B(n, "name");
                                  F("=");
                                  var r = new u(W(n), z(D()), t, i);
                                  K(
                                    r,
                                    function (e) {
                                      if ("option" !== e) throw B(e);
                                      X(r, e), F(";");
                                    },
                                    function () {
                                      te(r);
                                    }
                                  ),
                                    e.add(r);
                                })(i);
                                break;
                              case "required":
                              case "repeated":
                                Q(i, e);
                                break;
                              case "optional":
                                Q(i, G ? "proto3_optional" : "optional");
                                break;
                              case "oneof":
                                !(function (e, t) {
                                  if (!$.test((t = D()))) throw B(t, "name");
                                  var i = new c(W(t));
                                  K(i, function (e) {
                                    "option" === e
                                      ? (X(i, e), F(";"))
                                      : (M(e), Q(i, "optional"));
                                  }),
                                    e.add(i);
                                })(i, e);
                                break;
                              case "extensions":
                                V(i.extensions || (i.extensions = []));
                                break;
                              case "reserved":
                                V(i.reserved || (i.reserved = []), !0);
                                break;
                              default:
                                if (!G || !R.test(e)) throw B(e);
                                M(e), Q(i, "optional");
                            }
                        }),
                          e.add(i);
                      })(e, t),
                      !0
                    );
                  case "enum":
                    return (
                      (function (e, t) {
                        if (!$.test((t = D()))) throw B(t, "name");
                        var i = new m(t);
                        K(i, function (e) {
                          switch (e) {
                            case "option":
                              X(i, e), F(";");
                              break;
                            case "reserved":
                              V(i.reserved || (i.reserved = []), !0);
                              break;
                            default:
                              !(function (e, t) {
                                if (!$.test(t)) throw B(t, "name");
                                F("=");
                                var i = z(D(), !0),
                                  n = {};
                                K(
                                  n,
                                  function (e) {
                                    if ("option" !== e) throw B(e);
                                    X(n, e), F(";");
                                  },
                                  function () {
                                    te(n);
                                  }
                                ),
                                  e.add(t, i, n.comment);
                              })(i, e);
                          }
                        }),
                          e.add(i);
                      })(e, t),
                      !0
                    );
                  case "service":
                    return (
                      (function (e, t) {
                        if (!$.test((t = D()))) throw B(t, "service name");
                        var i = new _(t);
                        K(i, function (e) {
                          if (!J(i, e)) {
                            if ("rpc" !== e) throw B(e);
                            !(function (e, t) {
                              var i = O(),
                                n = t;
                              if (!$.test((t = D()))) throw B(t, "name");
                              var r,
                                o,
                                s,
                                a,
                                l = t;
                              F("("), F("stream", !0) && (o = !0);
                              if (!R.test((t = D()))) throw B(t);
                              (r = t),
                                F(")"),
                                F("returns"),
                                F("("),
                                F("stream", !0) && (a = !0);
                              if (!R.test((t = D()))) throw B(t);
                              (s = t), F(")");
                              var u = new p(l, n, r, s, o, a);
                              (u.comment = i),
                                K(u, function (e) {
                                  if ("option" !== e) throw B(e);
                                  X(u, e), F(";");
                                }),
                                e.add(u);
                            })(i, e);
                          }
                        }),
                          e.add(i);
                      })(e, t),
                      !0
                    );
                  case "extend":
                    return (
                      (function (e, t) {
                        if (!R.test((t = D()))) throw B(t, "reference");
                        var i = t;
                        K(null, function (t) {
                          switch (t) {
                            case "required":
                            case "repeated":
                              Q(e, t, i);
                              break;
                            case "optional":
                              Q(e, G ? "proto3_optional" : "optional", i);
                              break;
                            default:
                              if (!G || !R.test(t)) throw B(t);
                              M(t), Q(e, "optional", i);
                          }
                        });
                      })(e, t),
                      !0
                    );
                }
                return !1;
              }
              function K(e, t, i) {
                var n = C.line;
                if (
                  (e &&
                    ("string" != typeof e.comment && (e.comment = O()),
                    (e.filename = A.filename)),
                  F("{", !0))
                ) {
                  for (var r; "}" !== (r = D()); ) t(r);
                  F(";", !0);
                } else
                  i && i(),
                    F(";"),
                    e &&
                      ("string" != typeof e.comment || I) &&
                      (e.comment = O(n) || e.comment);
              }
              function Q(e, t, i) {
                var n = D();
                if ("group" !== n) {
                  if (!R.test(n)) throw B(n, "type");
                  var r = D();
                  if (!$.test(r)) throw B(r, "name");
                  (r = W(r)), F("=");
                  var o = new l(r, z(D()), n, t, i);
                  if (
                    (K(
                      o,
                      function (e) {
                        if ("option" !== e) throw B(e);
                        X(o, e), F(";");
                      },
                      function () {
                        te(o);
                      }
                    ),
                    "proto3_optional" === t)
                  ) {
                    var s = new c("_" + r);
                    o.setOption("proto3_optional", !0), s.add(o), e.add(s);
                  } else e.add(o);
                  G ||
                    !o.repeated ||
                    (void 0 === d.packed[n] && void 0 !== d.basic[n]) ||
                    o.setOption("packed", !1, !0);
                } else
                  !(function (e, t) {
                    var i = D();
                    if (!$.test(i)) throw B(i, "name");
                    var n = h.lcFirst(i);
                    i === n && (i = h.ucFirst(i));
                    F("=");
                    var r = z(D()),
                      o = new a(i);
                    o.group = !0;
                    var s = new l(n, r, i, t);
                    (s.filename = A.filename),
                      K(o, function (e) {
                        switch (e) {
                          case "option":
                            X(o, e), F(";");
                            break;
                          case "required":
                          case "repeated":
                            Q(o, e);
                            break;
                          case "optional":
                            Q(o, G ? "proto3_optional" : "optional");
                            break;
                          default:
                            throw B(e);
                        }
                      }),
                      e.add(o).add(s);
                  })(e, t);
              }
              function X(e, t) {
                var i = F("(", !0);
                if (!R.test((t = D()))) throw B(t, "name");
                var n,
                  r = t,
                  o = r;
                i &&
                  (F(")"),
                  (o = r = "(" + r + ")"),
                  (t = P()),
                  T.test(t) && ((n = t.substr(1)), (r += t), D())),
                  F("="),
                  (function (e, t, i, n) {
                    e.setParsedOption && e.setParsedOption(t, i, n);
                  })(e, o, Z(e, r), n);
              }
              function Z(e, t) {
                if (F("{", !0)) {
                  for (var i = {}; !F("}", !0); ) {
                    if (!$.test((L = D()))) throw B(L, "name");
                    var n,
                      r = L;
                    "{" === P()
                      ? (n = Z(e, t + "." + L))
                      : (F(":"),
                        "{" === P()
                          ? (n = Z(e, t + "." + L))
                          : ((n = j(!0)), ee(e, t + "." + L, n)));
                    var o = i[r];
                    o && (n = [].concat(o).concat(n)), (i[r] = n), F(",", !0);
                  }
                  return i;
                }
                var s = j(!0);
                return ee(e, t, s), s;
              }
              function ee(e, t, i) {
                e.setOption && e.setOption(t, i);
              }
              function te(e) {
                if (F("[", !0)) {
                  do {
                    X(e, "option");
                  } while (F(",", !0));
                  F("]");
                }
                return e;
              }
              for (; null !== (L = D()); )
                switch (L) {
                  case "package":
                    if (!k) throw B(L);
                    H();
                    break;
                  case "import":
                    if (!k) throw B(L);
                    Y();
                    break;
                  case "syntax":
                    if (!k) throw B(L);
                    q();
                    break;
                  case "option":
                    X(x, L), F(";");
                    break;
                  default:
                    if (J(x, L)) {
                      k = !1;
                      continue;
                    }
                    throw B(L);
                }
              return (
                (A.filename = null),
                { package: n, imports: r, weakImports: E, syntax: N, root: t }
              );
            }
            i.exports;
          },
          function () {
            return {
              "./tokenize": __cjsMetaURL$E,
              "./root": __cjsMetaURL$y,
              "./type": __cjsMetaURL$x,
              "./field": __cjsMetaURL$m,
              "./mapfield": __cjsMetaURL$p,
              "./oneof": __cjsMetaURL$n,
              "./enum": __cjsMetaURL$B,
              "./service": __cjsMetaURL$r,
              "./method": __cjsMetaURL$q,
              "./types": __cjsMetaURL$l,
              "./util": __cjsMetaURL$z,
            };
          }
        );
        var __cjsMetaURL$G =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/src/common.js";
        loader.define(
          __cjsMetaURL$G,
          function (e, t, i, n, r) {
            i.exports = a;
            var o,
              s = /\/|\./;
            function a(e, t) {
              s.test(e) ||
                ((e = "google/protobuf/" + e + ".proto"),
                (t = {
                  nested: { google: { nested: { protobuf: { nested: t } } } },
                })),
                (a[e] = t);
            }
            a("any", {
              Any: {
                fields: {
                  type_url: { type: "string", id: 1 },
                  value: { type: "bytes", id: 2 },
                },
              },
            }),
              a("duration", {
                Duration: (o = {
                  fields: {
                    seconds: { type: "int64", id: 1 },
                    nanos: { type: "int32", id: 2 },
                  },
                }),
              }),
              a("timestamp", { Timestamp: o }),
              a("empty", { Empty: { fields: {} } }),
              a("struct", {
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
              a("wrappers", {
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
              a("field_mask", {
                FieldMask: {
                  fields: {
                    paths: { rule: "repeated", type: "string", id: 1 },
                  },
                },
              }),
              (a.get = function (e) {
                return a[e] || null;
              }),
              i.exports;
          },
          {}
        );
        var __cjsMetaURL$H =
            "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/src/index.js",
          _cjsExports$1;
        loader.define(
          __cjsMetaURL$H,
          function (e, t, i, n, r) {
            var o = (i.exports = t("./index-light"));
            (o.build = "full"),
              (o.tokenize = t("./tokenize")),
              (o.parse = t("./parse")),
              (o.common = t("./common")),
              o.Root._configure(o.Type, o.parse, o.common),
              i.exports;
          },
          function () {
            return {
              "./index-light": __cjsMetaURL$D,
              "./tokenize": __cjsMetaURL$E,
              "./parse": __cjsMetaURL$F,
              "./common": __cjsMetaURL$G,
            };
          }
        );
        var __cjsMetaURL$I =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/index.js";
        loader.define(
          __cjsMetaURL$I,
          function (e, t, i, n, r) {
            (i.exports = t("./src/index")), (_cjsExports$1 = i.exports);
          },
          function () {
            return { "./src/index": __cjsMetaURL$H };
          }
        ),
          __cjsMetaURL$I ||
            loader.throwInvalidWrapper(
              "./index.js",
              "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/index.mjs?cjs=&original=.js"
            ),
          loader.require(__cjsMetaURL$I);
        var __cjsMetaURL$J =
            "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/node_modules/protobufjs/minimal.js",
          _cjsExports$2;
        loader.define(
          __cjsMetaURL$J,
          function (e, t, i, n, r) {
            (i.exports = t("./src/index-minimal")), i.exports;
          },
          function () {
            return { "./src/index-minimal": __cjsMetaURL$h };
          }
        );
        var __cjsMetaURL$K =
            "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/assets/game/Script/Proto/loeProto.js",
          _dec$s,
          _dec2$a,
          _class$t,
          _class2$b,
          _descriptor$a;
        loader.define(
          __cjsMetaURL$K,
          function (e, t, i, n, r) {
            var o,
              s = t("protobufjs/minimal"),
              a = s.Reader,
              l = s.Writer,
              u = s.util,
              c = s.roots.default || (s.roots.default = {});
            (c.loeProto =
              (((o = {}).Column = (function () {
                function e(e) {
                  if (((this.Col = []), e))
                    for (var t = Object.keys(e), i = 0; i < t.length; ++i)
                      null != e[t[i]] && (this[t[i]] = e[t[i]]);
                }
                return (
                  (e.prototype.Col = u.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = l.create()), null != e.Col && e.Col.length)
                    ) {
                      t.uint32(10).fork();
                      for (var i = 0; i < e.Col.length; ++i) t.int32(e.Col[i]);
                      t.ldelim();
                    }
                    return t;
                  }),
                  (e.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (e.decode = function (e, t) {
                    e instanceof a || (e = a.create(e));
                    for (
                      var i = void 0 === t ? e.len : e.pos + t,
                        n = new c.loeProto.Column();
                      e.pos < i;

                    ) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          if (
                            ((n.Col && n.Col.length) || (n.Col = []),
                            2 == (7 & r))
                          )
                            for (var o = e.uint32() + e.pos; e.pos < o; )
                              n.Col.push(e.int32());
                          else n.Col.push(e.int32());
                          break;
                        default:
                          e.skipType(7 & r);
                      }
                    }
                    return n;
                  }),
                  (e.decodeDelimited = function (e) {
                    return (
                      e instanceof a || (e = new a(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (e.verify = function (e) {
                    if ("object" != typeof e || null === e)
                      return "object expected";
                    if (null != e.Col && e.hasOwnProperty("Col")) {
                      if (!Array.isArray(e.Col)) return "Col: array expected";
                      for (var t = 0; t < e.Col.length; ++t)
                        if (!u.isInteger(e.Col[t]))
                          return "Col: integer[] expected";
                    }
                    return null;
                  }),
                  (e.fromObject = function (e) {
                    if (e instanceof c.loeProto.Column) return e;
                    var t = new c.loeProto.Column();
                    if (e.Col) {
                      if (!Array.isArray(e.Col))
                        throw TypeError(".loeProto.Column.Col: array expected");
                      t.Col = [];
                      for (var i = 0; i < e.Col.length; ++i)
                        t.Col[i] = 0 | e.Col[i];
                    }
                    return t;
                  }),
                  (e.toObject = function (e, t) {
                    t || (t = {});
                    var i = {};
                    if (
                      ((t.arrays || t.defaults) && (i.Col = []),
                      e.Col && e.Col.length)
                    ) {
                      i.Col = [];
                      for (var n = 0; n < e.Col.length; ++n)
                        i.Col[n] = e.Col[n];
                    }
                    return i;
                  }),
                  (e.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      s.util.toJSONOptions
                    );
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/loeProto.Column"
                    );
                  }),
                  e
                );
              })()),
              (o.AwardData = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), i = 0; i < t.length; ++i)
                      null != e[t[i]] && (this[t[i]] = e[t[i]]);
                }
                return (
                  (e.prototype.Symbol = 0),
                  (e.prototype.Count = 0),
                  (e.prototype.Line = 0),
                  (e.prototype.Win = 0),
                  (e.prototype.Mult = 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = l.create()),
                      null != e.Symbol &&
                        Object.hasOwnProperty.call(e, "Symbol") &&
                        t.uint32(8).int32(e.Symbol),
                      null != e.Count &&
                        Object.hasOwnProperty.call(e, "Count") &&
                        t.uint32(16).int32(e.Count),
                      null != e.Line &&
                        Object.hasOwnProperty.call(e, "Line") &&
                        t.uint32(24).int32(e.Line),
                      null != e.Win &&
                        Object.hasOwnProperty.call(e, "Win") &&
                        t.uint32(33).double(e.Win),
                      null != e.Mult &&
                        Object.hasOwnProperty.call(e, "Mult") &&
                        t.uint32(41).double(e.Mult),
                      t
                    );
                  }),
                  (e.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (e.decode = function (e, t) {
                    e instanceof a || (e = a.create(e));
                    for (
                      var i = void 0 === t ? e.len : e.pos + t,
                        n = new c.loeProto.AwardData();
                      e.pos < i;

                    ) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.Symbol = e.int32();
                          break;
                        case 2:
                          n.Count = e.int32();
                          break;
                        case 3:
                          n.Line = e.int32();
                          break;
                        case 4:
                          n.Win = e.double();
                          break;
                        case 5:
                          n.Mult = e.double();
                          break;
                        default:
                          e.skipType(7 & r);
                      }
                    }
                    return n;
                  }),
                  (e.decodeDelimited = function (e) {
                    return (
                      e instanceof a || (e = new a(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (e.verify = function (e) {
                    return "object" != typeof e || null === e
                      ? "object expected"
                      : null != e.Symbol &&
                        e.hasOwnProperty("Symbol") &&
                        !u.isInteger(e.Symbol)
                      ? "Symbol: integer expected"
                      : null != e.Count &&
                        e.hasOwnProperty("Count") &&
                        !u.isInteger(e.Count)
                      ? "Count: integer expected"
                      : null != e.Line &&
                        e.hasOwnProperty("Line") &&
                        !u.isInteger(e.Line)
                      ? "Line: integer expected"
                      : null != e.Win &&
                        e.hasOwnProperty("Win") &&
                        "number" != typeof e.Win
                      ? "Win: number expected"
                      : null != e.Mult &&
                        e.hasOwnProperty("Mult") &&
                        "number" != typeof e.Mult
                      ? "Mult: number expected"
                      : null;
                  }),
                  (e.fromObject = function (e) {
                    if (e instanceof c.loeProto.AwardData) return e;
                    var t = new c.loeProto.AwardData();
                    return (
                      null != e.Symbol && (t.Symbol = 0 | e.Symbol),
                      null != e.Count && (t.Count = 0 | e.Count),
                      null != e.Line && (t.Line = 0 | e.Line),
                      null != e.Win && (t.Win = Number(e.Win)),
                      null != e.Mult && (t.Mult = Number(e.Mult)),
                      t
                    );
                  }),
                  (e.toObject = function (e, t) {
                    t || (t = {});
                    var i = {};
                    return (
                      t.defaults &&
                        ((i.Symbol = 0),
                        (i.Count = 0),
                        (i.Line = 0),
                        (i.Win = 0),
                        (i.Mult = 0)),
                      null != e.Symbol &&
                        e.hasOwnProperty("Symbol") &&
                        (i.Symbol = e.Symbol),
                      null != e.Count &&
                        e.hasOwnProperty("Count") &&
                        (i.Count = e.Count),
                      null != e.Line &&
                        e.hasOwnProperty("Line") &&
                        (i.Line = e.Line),
                      null != e.Win &&
                        e.hasOwnProperty("Win") &&
                        (i.Win =
                          t.json && !isFinite(e.Win) ? String(e.Win) : e.Win),
                      null != e.Mult &&
                        e.hasOwnProperty("Mult") &&
                        (i.Mult =
                          t.json && !isFinite(e.Mult)
                            ? String(e.Mult)
                            : e.Mult),
                      i
                    );
                  }),
                  (e.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      s.util.toJSONOptions
                    );
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/loeProto.AwardData"
                    );
                  }),
                  e
                );
              })()),
              (o.RoundInfo = (function () {
                function e(e) {
                  if (
                    ((this.PlateSymbol = []),
                    (this.AwardDataVec = []),
                    (this.NudgeReelResult = []),
                    e)
                  )
                    for (var t = Object.keys(e), i = 0; i < t.length; ++i)
                      null != e[t[i]] && (this[t[i]] = e[t[i]]);
                }
                return (
                  (e.prototype.PlateSymbol = u.emptyArray),
                  (e.prototype.AwardDataVec = u.emptyArray),
                  (e.prototype.AwardTypeFlag = 0),
                  (e.prototype.FreeType = 0),
                  (e.prototype.FreeRemainRound = 0),
                  (e.prototype.RoundWin = 0),
                  (e.prototype.NudgeMult = 0),
                  (e.prototype.Nudge = 0),
                  (e.prototype.NudgeReelResult = u.emptyArray),
                  (e.prototype.FreeNowRound = 0),
                  (e.prototype.FreeTotalRound = 0),
                  (e.prototype.MaxFlag = !1),
                  (e.prototype.ScatterWin = 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = l.create()),
                      null != e.PlateSymbol && e.PlateSymbol.length)
                    )
                      for (var i = 0; i < e.PlateSymbol.length; ++i)
                        c.loeProto.Column.encode(
                          e.PlateSymbol[i],
                          t.uint32(10).fork()
                        ).ldelim();
                    if (null != e.AwardDataVec && e.AwardDataVec.length)
                      for (i = 0; i < e.AwardDataVec.length; ++i)
                        c.loeProto.AwardData.encode(
                          e.AwardDataVec[i],
                          t.uint32(18).fork()
                        ).ldelim();
                    if (
                      (null != e.AwardTypeFlag &&
                        Object.hasOwnProperty.call(e, "AwardTypeFlag") &&
                        t.uint32(24).int32(e.AwardTypeFlag),
                      null != e.FreeType &&
                        Object.hasOwnProperty.call(e, "FreeType") &&
                        t.uint32(32).int32(e.FreeType),
                      null != e.FreeRemainRound &&
                        Object.hasOwnProperty.call(e, "FreeRemainRound") &&
                        t.uint32(40).int32(e.FreeRemainRound),
                      null != e.RoundWin &&
                        Object.hasOwnProperty.call(e, "RoundWin") &&
                        t.uint32(49).double(e.RoundWin),
                      null != e.NudgeMult &&
                        Object.hasOwnProperty.call(e, "NudgeMult") &&
                        t.uint32(57).double(e.NudgeMult),
                      null != e.Nudge &&
                        Object.hasOwnProperty.call(e, "Nudge") &&
                        t.uint32(64).int32(e.Nudge),
                      null != e.NudgeReelResult && e.NudgeReelResult.length)
                    ) {
                      for (
                        t.uint32(74).fork(), i = 0;
                        i < e.NudgeReelResult.length;
                        ++i
                      )
                        t.int32(e.NudgeReelResult[i]);
                      t.ldelim();
                    }
                    return (
                      null != e.FreeNowRound &&
                        Object.hasOwnProperty.call(e, "FreeNowRound") &&
                        t.uint32(80).int32(e.FreeNowRound),
                      null != e.FreeTotalRound &&
                        Object.hasOwnProperty.call(e, "FreeTotalRound") &&
                        t.uint32(88).int32(e.FreeTotalRound),
                      null != e.MaxFlag &&
                        Object.hasOwnProperty.call(e, "MaxFlag") &&
                        t.uint32(96).bool(e.MaxFlag),
                      null != e.ScatterWin &&
                        Object.hasOwnProperty.call(e, "ScatterWin") &&
                        t.uint32(105).double(e.ScatterWin),
                      t
                    );
                  }),
                  (e.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (e.decode = function (e, t) {
                    e instanceof a || (e = a.create(e));
                    for (
                      var i = void 0 === t ? e.len : e.pos + t,
                        n = new c.loeProto.RoundInfo();
                      e.pos < i;

                    ) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          (n.PlateSymbol && n.PlateSymbol.length) ||
                            (n.PlateSymbol = []),
                            n.PlateSymbol.push(
                              c.loeProto.Column.decode(e, e.uint32())
                            );
                          break;
                        case 2:
                          (n.AwardDataVec && n.AwardDataVec.length) ||
                            (n.AwardDataVec = []),
                            n.AwardDataVec.push(
                              c.loeProto.AwardData.decode(e, e.uint32())
                            );
                          break;
                        case 3:
                          n.AwardTypeFlag = e.int32();
                          break;
                        case 4:
                          n.FreeType = e.int32();
                          break;
                        case 5:
                          n.FreeRemainRound = e.int32();
                          break;
                        case 6:
                          n.RoundWin = e.double();
                          break;
                        case 7:
                          n.NudgeMult = e.double();
                          break;
                        case 8:
                          n.Nudge = e.int32();
                          break;
                        case 9:
                          if (
                            ((n.NudgeReelResult && n.NudgeReelResult.length) ||
                              (n.NudgeReelResult = []),
                            2 == (7 & r))
                          )
                            for (var o = e.uint32() + e.pos; e.pos < o; )
                              n.NudgeReelResult.push(e.int32());
                          else n.NudgeReelResult.push(e.int32());
                          break;
                        case 10:
                          n.FreeNowRound = e.int32();
                          break;
                        case 11:
                          n.FreeTotalRound = e.int32();
                          break;
                        case 12:
                          n.MaxFlag = e.bool();
                          break;
                        case 13:
                          n.ScatterWin = e.double();
                          break;
                        default:
                          e.skipType(7 & r);
                      }
                    }
                    return n;
                  }),
                  (e.decodeDelimited = function (e) {
                    return (
                      e instanceof a || (e = new a(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (e.verify = function (e) {
                    if ("object" != typeof e || null === e)
                      return "object expected";
                    if (
                      null != e.PlateSymbol &&
                      e.hasOwnProperty("PlateSymbol")
                    ) {
                      if (!Array.isArray(e.PlateSymbol))
                        return "PlateSymbol: array expected";
                      for (var t = 0; t < e.PlateSymbol.length; ++t)
                        if ((i = c.loeProto.Column.verify(e.PlateSymbol[t])))
                          return "PlateSymbol." + i;
                    }
                    if (
                      null != e.AwardDataVec &&
                      e.hasOwnProperty("AwardDataVec")
                    ) {
                      if (!Array.isArray(e.AwardDataVec))
                        return "AwardDataVec: array expected";
                      for (t = 0; t < e.AwardDataVec.length; ++t) {
                        var i;
                        if (
                          (i = c.loeProto.AwardData.verify(e.AwardDataVec[t]))
                        )
                          return "AwardDataVec." + i;
                      }
                    }
                    if (
                      null != e.AwardTypeFlag &&
                      e.hasOwnProperty("AwardTypeFlag") &&
                      !u.isInteger(e.AwardTypeFlag)
                    )
                      return "AwardTypeFlag: integer expected";
                    if (
                      null != e.FreeType &&
                      e.hasOwnProperty("FreeType") &&
                      !u.isInteger(e.FreeType)
                    )
                      return "FreeType: integer expected";
                    if (
                      null != e.FreeRemainRound &&
                      e.hasOwnProperty("FreeRemainRound") &&
                      !u.isInteger(e.FreeRemainRound)
                    )
                      return "FreeRemainRound: integer expected";
                    if (
                      null != e.RoundWin &&
                      e.hasOwnProperty("RoundWin") &&
                      "number" != typeof e.RoundWin
                    )
                      return "RoundWin: number expected";
                    if (
                      null != e.NudgeMult &&
                      e.hasOwnProperty("NudgeMult") &&
                      "number" != typeof e.NudgeMult
                    )
                      return "NudgeMult: number expected";
                    if (
                      null != e.Nudge &&
                      e.hasOwnProperty("Nudge") &&
                      !u.isInteger(e.Nudge)
                    )
                      return "Nudge: integer expected";
                    if (
                      null != e.NudgeReelResult &&
                      e.hasOwnProperty("NudgeReelResult")
                    ) {
                      if (!Array.isArray(e.NudgeReelResult))
                        return "NudgeReelResult: array expected";
                      for (t = 0; t < e.NudgeReelResult.length; ++t)
                        if (!u.isInteger(e.NudgeReelResult[t]))
                          return "NudgeReelResult: integer[] expected";
                    }
                    return null != e.FreeNowRound &&
                      e.hasOwnProperty("FreeNowRound") &&
                      !u.isInteger(e.FreeNowRound)
                      ? "FreeNowRound: integer expected"
                      : null != e.FreeTotalRound &&
                        e.hasOwnProperty("FreeTotalRound") &&
                        !u.isInteger(e.FreeTotalRound)
                      ? "FreeTotalRound: integer expected"
                      : null != e.MaxFlag &&
                        e.hasOwnProperty("MaxFlag") &&
                        "boolean" != typeof e.MaxFlag
                      ? "MaxFlag: boolean expected"
                      : null != e.ScatterWin &&
                        e.hasOwnProperty("ScatterWin") &&
                        "number" != typeof e.ScatterWin
                      ? "ScatterWin: number expected"
                      : null;
                  }),
                  (e.fromObject = function (e) {
                    if (e instanceof c.loeProto.RoundInfo) return e;
                    var t = new c.loeProto.RoundInfo();
                    if (e.PlateSymbol) {
                      if (!Array.isArray(e.PlateSymbol))
                        throw TypeError(
                          ".loeProto.RoundInfo.PlateSymbol: array expected"
                        );
                      t.PlateSymbol = [];
                      for (var i = 0; i < e.PlateSymbol.length; ++i) {
                        if ("object" != typeof e.PlateSymbol[i])
                          throw TypeError(
                            ".loeProto.RoundInfo.PlateSymbol: object expected"
                          );
                        t.PlateSymbol[i] = c.loeProto.Column.fromObject(
                          e.PlateSymbol[i]
                        );
                      }
                    }
                    if (e.AwardDataVec) {
                      if (!Array.isArray(e.AwardDataVec))
                        throw TypeError(
                          ".loeProto.RoundInfo.AwardDataVec: array expected"
                        );
                      for (
                        t.AwardDataVec = [], i = 0;
                        i < e.AwardDataVec.length;
                        ++i
                      ) {
                        if ("object" != typeof e.AwardDataVec[i])
                          throw TypeError(
                            ".loeProto.RoundInfo.AwardDataVec: object expected"
                          );
                        t.AwardDataVec[i] = c.loeProto.AwardData.fromObject(
                          e.AwardDataVec[i]
                        );
                      }
                    }
                    if (
                      (null != e.AwardTypeFlag &&
                        (t.AwardTypeFlag = 0 | e.AwardTypeFlag),
                      null != e.FreeType && (t.FreeType = 0 | e.FreeType),
                      null != e.FreeRemainRound &&
                        (t.FreeRemainRound = 0 | e.FreeRemainRound),
                      null != e.RoundWin && (t.RoundWin = Number(e.RoundWin)),
                      null != e.NudgeMult &&
                        (t.NudgeMult = Number(e.NudgeMult)),
                      null != e.Nudge && (t.Nudge = 0 | e.Nudge),
                      e.NudgeReelResult)
                    ) {
                      if (!Array.isArray(e.NudgeReelResult))
                        throw TypeError(
                          ".loeProto.RoundInfo.NudgeReelResult: array expected"
                        );
                      for (
                        t.NudgeReelResult = [], i = 0;
                        i < e.NudgeReelResult.length;
                        ++i
                      )
                        t.NudgeReelResult[i] = 0 | e.NudgeReelResult[i];
                    }
                    return (
                      null != e.FreeNowRound &&
                        (t.FreeNowRound = 0 | e.FreeNowRound),
                      null != e.FreeTotalRound &&
                        (t.FreeTotalRound = 0 | e.FreeTotalRound),
                      null != e.MaxFlag && (t.MaxFlag = Boolean(e.MaxFlag)),
                      null != e.ScatterWin &&
                        (t.ScatterWin = Number(e.ScatterWin)),
                      t
                    );
                  }),
                  (e.toObject = function (e, t) {
                    t || (t = {});
                    var i = {};
                    if (
                      ((t.arrays || t.defaults) &&
                        ((i.PlateSymbol = []),
                        (i.AwardDataVec = []),
                        (i.NudgeReelResult = [])),
                      t.defaults &&
                        ((i.AwardTypeFlag = 0),
                        (i.FreeType = 0),
                        (i.FreeRemainRound = 0),
                        (i.RoundWin = 0),
                        (i.NudgeMult = 0),
                        (i.Nudge = 0),
                        (i.FreeNowRound = 0),
                        (i.FreeTotalRound = 0),
                        (i.MaxFlag = !1),
                        (i.ScatterWin = 0)),
                      e.PlateSymbol && e.PlateSymbol.length)
                    ) {
                      i.PlateSymbol = [];
                      for (var n = 0; n < e.PlateSymbol.length; ++n)
                        i.PlateSymbol[n] = c.loeProto.Column.toObject(
                          e.PlateSymbol[n],
                          t
                        );
                    }
                    if (e.AwardDataVec && e.AwardDataVec.length)
                      for (
                        i.AwardDataVec = [], n = 0;
                        n < e.AwardDataVec.length;
                        ++n
                      )
                        i.AwardDataVec[n] = c.loeProto.AwardData.toObject(
                          e.AwardDataVec[n],
                          t
                        );
                    if (
                      (null != e.AwardTypeFlag &&
                        e.hasOwnProperty("AwardTypeFlag") &&
                        (i.AwardTypeFlag = e.AwardTypeFlag),
                      null != e.FreeType &&
                        e.hasOwnProperty("FreeType") &&
                        (i.FreeType = e.FreeType),
                      null != e.FreeRemainRound &&
                        e.hasOwnProperty("FreeRemainRound") &&
                        (i.FreeRemainRound = e.FreeRemainRound),
                      null != e.RoundWin &&
                        e.hasOwnProperty("RoundWin") &&
                        (i.RoundWin =
                          t.json && !isFinite(e.RoundWin)
                            ? String(e.RoundWin)
                            : e.RoundWin),
                      null != e.NudgeMult &&
                        e.hasOwnProperty("NudgeMult") &&
                        (i.NudgeMult =
                          t.json && !isFinite(e.NudgeMult)
                            ? String(e.NudgeMult)
                            : e.NudgeMult),
                      null != e.Nudge &&
                        e.hasOwnProperty("Nudge") &&
                        (i.Nudge = e.Nudge),
                      e.NudgeReelResult && e.NudgeReelResult.length)
                    )
                      for (
                        i.NudgeReelResult = [], n = 0;
                        n < e.NudgeReelResult.length;
                        ++n
                      )
                        i.NudgeReelResult[n] = e.NudgeReelResult[n];
                    return (
                      null != e.FreeNowRound &&
                        e.hasOwnProperty("FreeNowRound") &&
                        (i.FreeNowRound = e.FreeNowRound),
                      null != e.FreeTotalRound &&
                        e.hasOwnProperty("FreeTotalRound") &&
                        (i.FreeTotalRound = e.FreeTotalRound),
                      null != e.MaxFlag &&
                        e.hasOwnProperty("MaxFlag") &&
                        (i.MaxFlag = e.MaxFlag),
                      null != e.ScatterWin &&
                        e.hasOwnProperty("ScatterWin") &&
                        (i.ScatterWin =
                          t.json && !isFinite(e.ScatterWin)
                            ? String(e.ScatterWin)
                            : e.ScatterWin),
                      i
                    );
                  }),
                  (e.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      s.util.toJSONOptions
                    );
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/loeProto.RoundInfo"
                    );
                  }),
                  e
                );
              })()),
              (o.SpinAck = (function () {
                function e(e) {
                  if (((this.RoundQueue = []), e))
                    for (var t = Object.keys(e), i = 0; i < t.length; ++i)
                      null != e[t[i]] && (this[t[i]] = e[t[i]]);
                }
                return (
                  (e.prototype.RoundQueue = u.emptyArray),
                  (e.prototype.FreeTotalWin = 0),
                  (e.prototype.TotalWin = 0),
                  (e.prototype.ShowIndex = ""),
                  (e.prototype.NowMoney = 0),
                  (e.prototype.AckType = 0),
                  (e.prototype.RTP = 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = l.create()),
                      null != e.RoundQueue && e.RoundQueue.length)
                    )
                      for (var i = 0; i < e.RoundQueue.length; ++i)
                        c.loeProto.RoundInfo.encode(
                          e.RoundQueue[i],
                          t.uint32(10).fork()
                        ).ldelim();
                    return (
                      null != e.FreeTotalWin &&
                        Object.hasOwnProperty.call(e, "FreeTotalWin") &&
                        t.uint32(17).double(e.FreeTotalWin),
                      null != e.TotalWin &&
                        Object.hasOwnProperty.call(e, "TotalWin") &&
                        t.uint32(25).double(e.TotalWin),
                      null != e.ShowIndex &&
                        Object.hasOwnProperty.call(e, "ShowIndex") &&
                        t.uint32(34).string(e.ShowIndex),
                      null != e.NowMoney &&
                        Object.hasOwnProperty.call(e, "NowMoney") &&
                        t.uint32(41).double(e.NowMoney),
                      null != e.AckType &&
                        Object.hasOwnProperty.call(e, "AckType") &&
                        t.uint32(48).int32(e.AckType),
                      null != e.RTP &&
                        Object.hasOwnProperty.call(e, "RTP") &&
                        t.uint32(57).double(e.RTP),
                      t
                    );
                  }),
                  (e.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (e.decode = function (e, t) {
                    e instanceof a || (e = a.create(e));
                    for (
                      var i = void 0 === t ? e.len : e.pos + t,
                        n = new c.loeProto.SpinAck();
                      e.pos < i;

                    ) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          (n.RoundQueue && n.RoundQueue.length) ||
                            (n.RoundQueue = []),
                            n.RoundQueue.push(
                              c.loeProto.RoundInfo.decode(e, e.uint32())
                            );
                          break;
                        case 2:
                          n.FreeTotalWin = e.double();
                          break;
                        case 3:
                          n.TotalWin = e.double();
                          break;
                        case 4:
                          n.ShowIndex = e.string();
                          break;
                        case 5:
                          n.NowMoney = e.double();
                          break;
                        case 6:
                          n.AckType = e.int32();
                          break;
                        case 7:
                          n.RTP = e.double();
                          break;
                        default:
                          e.skipType(7 & r);
                      }
                    }
                    return n;
                  }),
                  (e.decodeDelimited = function (e) {
                    return (
                      e instanceof a || (e = new a(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (e.verify = function (e) {
                    if ("object" != typeof e || null === e)
                      return "object expected";
                    if (
                      null != e.RoundQueue &&
                      e.hasOwnProperty("RoundQueue")
                    ) {
                      if (!Array.isArray(e.RoundQueue))
                        return "RoundQueue: array expected";
                      for (var t = 0; t < e.RoundQueue.length; ++t) {
                        var i = c.loeProto.RoundInfo.verify(e.RoundQueue[t]);
                        if (i) return "RoundQueue." + i;
                      }
                    }
                    return null != e.FreeTotalWin &&
                      e.hasOwnProperty("FreeTotalWin") &&
                      "number" != typeof e.FreeTotalWin
                      ? "FreeTotalWin: number expected"
                      : null != e.TotalWin &&
                        e.hasOwnProperty("TotalWin") &&
                        "number" != typeof e.TotalWin
                      ? "TotalWin: number expected"
                      : null != e.ShowIndex &&
                        e.hasOwnProperty("ShowIndex") &&
                        !u.isString(e.ShowIndex)
                      ? "ShowIndex: string expected"
                      : null != e.NowMoney &&
                        e.hasOwnProperty("NowMoney") &&
                        "number" != typeof e.NowMoney
                      ? "NowMoney: number expected"
                      : null != e.AckType &&
                        e.hasOwnProperty("AckType") &&
                        !u.isInteger(e.AckType)
                      ? "AckType: integer expected"
                      : null != e.RTP &&
                        e.hasOwnProperty("RTP") &&
                        "number" != typeof e.RTP
                      ? "RTP: number expected"
                      : null;
                  }),
                  (e.fromObject = function (e) {
                    if (e instanceof c.loeProto.SpinAck) return e;
                    var t = new c.loeProto.SpinAck();
                    if (e.RoundQueue) {
                      if (!Array.isArray(e.RoundQueue))
                        throw TypeError(
                          ".loeProto.SpinAck.RoundQueue: array expected"
                        );
                      t.RoundQueue = [];
                      for (var i = 0; i < e.RoundQueue.length; ++i) {
                        if ("object" != typeof e.RoundQueue[i])
                          throw TypeError(
                            ".loeProto.SpinAck.RoundQueue: object expected"
                          );
                        t.RoundQueue[i] = c.loeProto.RoundInfo.fromObject(
                          e.RoundQueue[i]
                        );
                      }
                    }
                    return (
                      null != e.FreeTotalWin &&
                        (t.FreeTotalWin = Number(e.FreeTotalWin)),
                      null != e.TotalWin && (t.TotalWin = Number(e.TotalWin)),
                      null != e.ShowIndex &&
                        (t.ShowIndex = String(e.ShowIndex)),
                      null != e.NowMoney && (t.NowMoney = Number(e.NowMoney)),
                      null != e.AckType && (t.AckType = 0 | e.AckType),
                      null != e.RTP && (t.RTP = Number(e.RTP)),
                      t
                    );
                  }),
                  (e.toObject = function (e, t) {
                    t || (t = {});
                    var i = {};
                    if (
                      ((t.arrays || t.defaults) && (i.RoundQueue = []),
                      t.defaults &&
                        ((i.FreeTotalWin = 0),
                        (i.TotalWin = 0),
                        (i.ShowIndex = ""),
                        (i.NowMoney = 0),
                        (i.AckType = 0),
                        (i.RTP = 0)),
                      e.RoundQueue && e.RoundQueue.length)
                    ) {
                      i.RoundQueue = [];
                      for (var n = 0; n < e.RoundQueue.length; ++n)
                        i.RoundQueue[n] = c.loeProto.RoundInfo.toObject(
                          e.RoundQueue[n],
                          t
                        );
                    }
                    return (
                      null != e.FreeTotalWin &&
                        e.hasOwnProperty("FreeTotalWin") &&
                        (i.FreeTotalWin =
                          t.json && !isFinite(e.FreeTotalWin)
                            ? String(e.FreeTotalWin)
                            : e.FreeTotalWin),
                      null != e.TotalWin &&
                        e.hasOwnProperty("TotalWin") &&
                        (i.TotalWin =
                          t.json && !isFinite(e.TotalWin)
                            ? String(e.TotalWin)
                            : e.TotalWin),
                      null != e.ShowIndex &&
                        e.hasOwnProperty("ShowIndex") &&
                        (i.ShowIndex = e.ShowIndex),
                      null != e.NowMoney &&
                        e.hasOwnProperty("NowMoney") &&
                        (i.NowMoney =
                          t.json && !isFinite(e.NowMoney)
                            ? String(e.NowMoney)
                            : e.NowMoney),
                      null != e.AckType &&
                        e.hasOwnProperty("AckType") &&
                        (i.AckType = e.AckType),
                      null != e.RTP &&
                        e.hasOwnProperty("RTP") &&
                        (i.RTP =
                          t.json && !isFinite(e.RTP) ? String(e.RTP) : e.RTP),
                      i
                    );
                  }),
                  (e.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      s.util.toJSONOptions
                    );
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/loeProto.SpinAck"
                    );
                  }),
                  e
                );
              })()),
              (o.GameInfoData = (function () {
                function e(e) {
                  if (((this.Mul = []), e))
                    for (var t = Object.keys(e), i = 0; i < t.length; ++i)
                      null != e[t[i]] && (this[t[i]] = e[t[i]]);
                }
                return (
                  (e.prototype.ShowExtra = !1),
                  (e.prototype.Mul = u.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = l.create()),
                      null != e.ShowExtra &&
                        Object.hasOwnProperty.call(e, "ShowExtra") &&
                        t.uint32(8).bool(e.ShowExtra),
                      null != e.Mul && e.Mul.length)
                    ) {
                      t.uint32(18).fork();
                      for (var i = 0; i < e.Mul.length; ++i) t.double(e.Mul[i]);
                      t.ldelim();
                    }
                    return t;
                  }),
                  (e.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (e.decode = function (e, t) {
                    e instanceof a || (e = a.create(e));
                    for (
                      var i = void 0 === t ? e.len : e.pos + t,
                        n = new c.loeProto.GameInfoData();
                      e.pos < i;

                    ) {
                      var r = e.uint32();
                      switch (r >>> 3) {
                        case 1:
                          n.ShowExtra = e.bool();
                          break;
                        case 2:
                          if (
                            ((n.Mul && n.Mul.length) || (n.Mul = []),
                            2 == (7 & r))
                          )
                            for (var o = e.uint32() + e.pos; e.pos < o; )
                              n.Mul.push(e.double());
                          else n.Mul.push(e.double());
                          break;
                        default:
                          e.skipType(7 & r);
                      }
                    }
                    return n;
                  }),
                  (e.decodeDelimited = function (e) {
                    return (
                      e instanceof a || (e = new a(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (e.verify = function (e) {
                    if ("object" != typeof e || null === e)
                      return "object expected";
                    if (
                      null != e.ShowExtra &&
                      e.hasOwnProperty("ShowExtra") &&
                      "boolean" != typeof e.ShowExtra
                    )
                      return "ShowExtra: boolean expected";
                    if (null != e.Mul && e.hasOwnProperty("Mul")) {
                      if (!Array.isArray(e.Mul)) return "Mul: array expected";
                      for (var t = 0; t < e.Mul.length; ++t)
                        if ("number" != typeof e.Mul[t])
                          return "Mul: number[] expected";
                    }
                    return null;
                  }),
                  (e.fromObject = function (e) {
                    if (e instanceof c.loeProto.GameInfoData) return e;
                    var t = new c.loeProto.GameInfoData();
                    if (
                      (null != e.ShowExtra &&
                        (t.ShowExtra = Boolean(e.ShowExtra)),
                      e.Mul)
                    ) {
                      if (!Array.isArray(e.Mul))
                        throw TypeError(
                          ".loeProto.GameInfoData.Mul: array expected"
                        );
                      t.Mul = [];
                      for (var i = 0; i < e.Mul.length; ++i)
                        t.Mul[i] = Number(e.Mul[i]);
                    }
                    return t;
                  }),
                  (e.toObject = function (e, t) {
                    t || (t = {});
                    var i = {};
                    if (
                      ((t.arrays || t.defaults) && (i.Mul = []),
                      t.defaults && (i.ShowExtra = !1),
                      null != e.ShowExtra &&
                        e.hasOwnProperty("ShowExtra") &&
                        (i.ShowExtra = e.ShowExtra),
                      e.Mul && e.Mul.length)
                    ) {
                      i.Mul = [];
                      for (var n = 0; n < e.Mul.length; ++n)
                        i.Mul[n] =
                          t.json && !isFinite(e.Mul[n])
                            ? String(e.Mul[n])
                            : e.Mul[n];
                    }
                    return i;
                  }),
                  (e.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      s.util.toJSONOptions
                    );
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/loeProto.GameInfoData"
                    );
                  }),
                  e
                );
              })()),
              o)),
              (i.exports = c),
              (_cjsExports$2 = i.exports);
          },
          function () {
            return { "protobufjs/minimal": __cjsMetaURL$J };
          }
        ),
          __cjsMetaURL$K ||
            loader.throwInvalidWrapper(
              "./loeProto.js",
              "file:///Users/m2mac1/Desktop/H5/Client/workspace/LegacyOfEgypt/Client/Thai_UAT/assets/game/Script/Proto/loeProto.mjs?cjs=&original=.js"
            ),
          loader.require(__cjsMetaURL$K),
          cclegacy._RF.push(
            {},
            "fb337+YmGtAmonMW+J68QAP",
            "MultiBarSpine",
            void 0
          );
        var AnimName$6 = {
            L_Close: "L_Close",
            L_Loop: "L_Loop",
            L_Open: "L_Open",
            S_Close: "S_Close",
            S_Loop: "S_Loop",
            S_Open: "S_Open",
            L_Close_Front: "L_Close_Front",
            L_Loop_Front: "L_Loop_Front",
            L_Open_Front: "L_Open_Front",
            S_Close_Front: "S_Close_Front",
            S_Loop_Front: "S_Loop_Front",
            S_Open_Front: "S_Open_Front",
            L_Hold_Close: "L_Hold_Close",
            L_Hold_Loop: "L_Hold_Loop",
            L_Hold_Open: "L_Hold_Open",
            S_Hold_Close: "S_Hold_Close",
            S_Hold_Loop: "S_Hold_Loop",
            S_Hold_Open: "S_Hold_Open",
            L_Fx_Open_Front: "L_Fx_Open_Front",
            L_Fx_Hit_Front: "L_Fx_Hit_Front",
            L_Fx_Close_Front: "L_Fx_Close_Front",
            S_Fx_Open_Front: "S_Fx_Open_Front",
            S_Fx_Hit_Front: "S_Fx_Hit_Front",
            S_Fx_Close_Front: "S_Fx_Close_Front",
          },
          ccclass$t = _decorator.ccclass,
          property$b = _decorator.property,
          MultiBarSpine =
            ((_dec$s = ccclass$t("MultiBarSpine")),
            (_dec2$a = property$b({ type: sp.Skeleton, tooltip: "Spine" })),
            _dec$s(
              ((_class2$b = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, n = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    n[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_spine",
                      _descriptor$a,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.ShowL = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$6.L_Open)
                                  );
                                case 2:
                                  this.PlayAnimation(AnimName$6.L_Loop, !0);
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
                  (i.ShowS = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$6.S_Open)
                                  );
                                case 2:
                                  this.PlayAnimation(AnimName$6.S_Loop, !0);
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
                  (i.ShowLFront = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$6.L_Open_Front)
                                  );
                                case 2:
                                  this.PlayAnimation(
                                    AnimName$6.L_Loop_Front,
                                    !0
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
                  (i.ShowSFront = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$6.S_Open_Front)
                                  );
                                case 2:
                                  this.PlayAnimation(
                                    AnimName$6.S_Loop_Front,
                                    !0
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
                  (i.HitL = function () {
                    this.PlayAnimation(AnimName$6.L_Fx_Hit_Front);
                  }),
                  (i.HitS = function () {
                    this.PlayAnimation(AnimName$6.S_Fx_Hit_Front);
                  }),
                  (i.HoldOpenL = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$6.L_Hold_Open)
                                  );
                                case 2:
                                  this.PlayAnimation(AnimName$6.L_Loop, !0);
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
                  (i.HoldOpenS = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$6.S_Hold_Open)
                                  );
                                case 2:
                                  this.PlayAnimation(AnimName$6.S_Loop, !0);
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
                  (i.CloseHoldL = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$6.L_Hold_Close)
                                  );
                                case 2:
                                  this.PlayAnimation(
                                    AnimName$6.L_Hold_Loop,
                                    !0
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
                  (i.CloseHoldS = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$6.S_Hold_Close)
                                  );
                                case 2:
                                  this.PlayAnimation(
                                    AnimName$6.S_Hold_Loop,
                                    !0
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
                  (i.GetShowTimeL = function () {
                    var e = this.m_spine.findAnimation(AnimName$6.L_Open);
                    if (e) return e.duration;
                  }),
                  (i.GetShowTimeS = function () {
                    var e = this.m_spine.findAnimation(AnimName$6.S_Open);
                    if (e) return e.duration;
                  }),
                  (i.Close = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$6.L_Close)
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
                  (i.CloseS = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$6.S_Close)
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
                  (i.CloseFrontL = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  this.PlayAnimation(AnimName$6.L_Close_Front);
                                case 1:
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
                  (i.CloseFrontS = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  this.PlayAnimation(AnimName$6.S_Close_Front);
                                case 1:
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
                  (i.PlayAnimation = function (e, t) {
                    var i = this;
                    return (
                      void 0 === t && (t = !1),
                      new Promise(function (n) {
                        i.m_spine.setToSetupPose();
                        var r = i.m_spine.setAnimation(0, e, t);
                        r
                          ? i.m_spine.setTrackCompleteListener(r, function () {
                              n();
                            })
                          : i.m_spine.setCompleteListener(function () {
                              n();
                            });
                      })
                    );
                  }),
                  t
                );
              })(Component)),
              (_descriptor$a = _applyDecoratedDescriptor(
                _class2$b.prototype,
                "m_spine",
                [_dec2$a],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_class$t = _class2$b))
            ) || _class$t),
          _dec$t,
          _dec2$b,
          _class$u,
          _class2$c,
          _descriptor$b;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "fdf3fhdTSFObZPSWWrdjoDf",
            "FX_ShowSpine",
            void 0
          );
        var ccclass$u = _decorator.ccclass,
          property$c = _decorator.property,
          AnimName$7 = {
            FX_MultiWin: "FX_MultiWin",
            FX_Show: "FX_Show",
            FX_Show2: "FX_Show2",
            FX_Show3: "FX_Show3",
            FX_Show3_S: "FX_Show3_S",
            FX_ShowWin: "FX_ShowWin",
            FX_ShowWin2: "FX_ShowWin2",
            FX_ShowWin3: "FX_ShowWin3",
          },
          FX_ShowSpine =
            ((_dec$t = ccclass$u("FX_ShowSpine")),
            (_dec2$b = property$c({ type: sp.Skeleton, tooltip: "Spine" })),
            _dec$t(
              ((_class2$c = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, n = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    n[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_spine",
                      _descriptor$b,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.Show = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, i) {
                        var n;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === i && (i = !0),
                                    (this.m_spine.node.active = !0),
                                    (n =
                                      t >= Game_Define.MultiLevel.HIGH
                                        ? i
                                          ? AnimName$7.FX_Show3
                                          : AnimName$7.FX_Show3_S
                                        : t >= Game_Define.MultiLevel.MEDIUM
                                        ? AnimName$7.FX_Show2
                                        : AnimName$7.FX_Show),
                                    (e.next = 5),
                                    this.PlayAnimation(n)
                                  );
                                case 5:
                                  this.m_spine.node.active = !1;
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
                  (i.MultiWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.m_spine.node.active = !0),
                                    (e.next = 3),
                                    this.PlayAnimation(AnimName$7.FX_MultiWin)
                                  );
                                case 3:
                                  this.m_spine.node.active = !1;
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
                  (i.ShowWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var i;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === t && (t = 1),
                                    (this.m_spine.node.active = !0),
                                    (i =
                                      t >= Game_Define.MultiLevel.HIGH
                                        ? AnimName$7.FX_ShowWin3
                                        : t >= Game_Define.MultiLevel.MEDIUM
                                        ? AnimName$7.FX_ShowWin2
                                        : AnimName$7.FX_ShowWin),
                                    (e.next = 5),
                                    this.PlayAnimation(i)
                                  );
                                case 5:
                                  this.m_spine.node.active = !1;
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
                  (i.PlayAnimation = function (e, t) {
                    var i = this;
                    return (
                      void 0 === t && (t = !1),
                      new Promise(function (n) {
                        i.m_spine.setToSetupPose();
                        var r = i.m_spine.setAnimation(0, e, t);
                        r
                          ? i.m_spine.setTrackCompleteListener(r, function () {
                              n();
                            })
                          : i.m_spine.setCompleteListener(function () {
                              n();
                            });
                      })
                    );
                  }),
                  t
                );
              })(Component)),
              (_descriptor$b = _applyDecoratedDescriptor(
                _class2$c.prototype,
                "m_spine",
                [_dec2$b],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_class$u = _class2$c))
            ) || _class$u),
          _dec$u,
          _dec2$c,
          _dec3$7,
          _class$v,
          _class2$d,
          _descriptor$c,
          _descriptor2$9,
          _descriptor3$5;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "b3ab3PBueVG3KhfBms9123w",
            "MultiLabel",
            void 0
          );
        var ccclass$v = _decorator.ccclass,
          property$d = _decorator.property,
          MultiLabel =
            ((_dec$u = property$d({ type: Label, tooltip: "黃色數字" })),
            (_dec2$c = property$d({ type: Label, tooltip: "綠色數字" })),
            (_dec3$7 = property$d({ type: Sprite, tooltip: "綠色數字光暈" })),
            ccclass$v(
              ((_class2$d = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, n = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    n[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_labelY",
                      _descriptor$c,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_labelG",
                      _descriptor2$9,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_bg",
                      _descriptor3$5,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                return (
                  _inheritsLoose(t, e),
                  (t.prototype.SetLabel = function (e) {
                    (this.m_labelY.string = e.toString()),
                      (this.m_labelG.string = e.toString()),
                      e >= Game_Define.MultiLevel.MEDIUM
                        ? ((this.m_labelY.node.getComponent(
                            UIOpacity
                          ).opacity = 0.1),
                          (this.m_labelG.node.getComponent(
                            UIOpacity
                          ).opacity = 255),
                          (this.m_bg.node.getComponent(
                            UIOpacity
                          ).opacity = 255))
                        : ((this.m_labelY.node.getComponent(
                            UIOpacity
                          ).opacity = 255),
                          (this.m_labelG.node.getComponent(
                            UIOpacity
                          ).opacity = 0.1),
                          (this.m_bg.node.getComponent(
                            UIOpacity
                          ).opacity = 0.1));
                  }),
                  _createClass(t, [
                    {
                      key: "Label",
                      get: function () {
                        return this.m_labelY;
                      },
                    },
                  ]),
                  t
                );
              })(Component)),
              (_descriptor$c = _applyDecoratedDescriptor(
                _class2$d.prototype,
                "m_labelY",
                [_dec$u],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor2$9 = _applyDecoratedDescriptor(
                _class2$d.prototype,
                "m_labelG",
                [_dec2$c],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor3$5 = _applyDecoratedDescriptor(
                _class2$d.prototype,
                "m_bg",
                [_dec3$7],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_class$v = _class2$d))
            ) || _class$v),
          _dec$v,
          _dec2$d,
          _dec3$8,
          _dec4$3,
          _dec5$3,
          _dec6$3,
          _dec7$3,
          _dec8$1,
          _dec9$1,
          _dec10$1,
          _dec11$1,
          _dec12$1,
          _class$w,
          _class2$e,
          _descriptor$d,
          _descriptor2$a,
          _descriptor3$6,
          _descriptor4$3,
          _descriptor5$3,
          _descriptor6$3,
          _descriptor7$2,
          _descriptor8$1,
          _descriptor9$1,
          _descriptor10$1,
          _descriptor11$1,
          _descriptor12$1;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "398fdFUvvtIda93z2N4ph4H",
            "MultiReels",
            void 0
          );
        var ccclass$w = _decorator.ccclass,
          property$e = _decorator.property,
          MultiReels =
            ((_dec$v = property$e({
              type: MultiLabel,
              tooltip: "加乘的label",
            })),
            (_dec2$d = property$e({
              type: MultiBarSpine,
              tooltip: "倍率轉輪Spine",
            })),
            (_dec3$8 = property$e({
              type: MultiBarSpine,
              tooltip: "倍率轉輪Spine(中間框)",
            })),
            (_dec4$3 = property$e({
              type: FX_ShowSpine,
              tooltip: "中心位置光球Spine",
            })),
            (_dec5$3 = property$e({ type: Label, tooltip: "總加乘的label" })),
            (_dec6$3 = property$e({
              type: Node,
              tooltip: "加乘轉輪的遮罩節點",
            })),
            (_dec7$3 = property$e({ type: Node, tooltip: "底板" })),
            (_dec8$1 = property$e({ type: Node, tooltip: "總加乘飛行節點" })),
            (_dec9$1 = property$e({
              type: Label,
              tooltip: "總加乘飛行節點label",
            })),
            (_dec10$1 = property$e({
              type: Node,
              tooltip: "Nudge倒數次數Node",
            })),
            (_dec11$1 = property$e({
              type: Label,
              tooltip: "Nudge倒數次數Label",
            })),
            (_dec12$1 = property$e({
              type: Label,
              tooltip: "Nudge總次數Label",
            })),
            ccclass$w(
              ((_class2$e = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, n = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    n[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_multiLabels",
                      _descriptor$d,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_multiBarSpine",
                      _descriptor2$a,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_multiBarFrontSpine",
                      _descriptor3$6,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fxShowSpine",
                      _descriptor4$3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_totalMultiLabel",
                      _descriptor5$3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_wheelMaskNode",
                      _descriptor6$3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_background",
                      _descriptor7$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_flyMultiNode",
                      _descriptor8$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_flyMultiLabel",
                      _descriptor9$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_nudgeCountNode",
                      _descriptor10$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_nudgeCountLabel",
                      _descriptor11$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_nudgeTotalLabel",
                      _descriptor12$1,
                      _assertThisInitialized(t)
                    ),
                    (t.m_gameView = null),
                    (t.m_viewSize = void 0),
                    (t.m_mutiSize = void 0),
                    (t.m_oneRoundTime = Game_Define.MultiReels.ONE_ROUND_TIME),
                    (t.m_nowTime = void 0),
                    (t.m_stoptime = void 0),
                    (t.m_randIdx = 0),
                    (t.m_isChangeToFinalMuti = [!1, !1, !1, !1, !1, !1]),
                    (t.m_spinBufferTime01 = 0.1),
                    (t.m_spinBufferTime02 = 0.1),
                    (t.m_downLength = 30),
                    (t.m_isPlaySound = !1),
                    (t.m_isChangeSymbol = new Array()),
                    (t.m_time = 0),
                    (t.m_reelPreTime =
                      t.m_oneRoundTime *
                      (Game_Define.MultiReels.TOTAL_ROUND - 1)),
                    (t.m_reelStopTime_new =
                      t.m_oneRoundTime * Game_Define.MultiReels.TOTAL_ROUND),
                    (t.m_stopTime_new =
                      t.m_reelStopTime_new +
                      t.m_spinBufferTime01 +
                      t.m_spinBufferTime02),
                    (t.m_hasFly = !1),
                    (t.m_isStop = !1),
                    (t.m_isFirstStop = !1),
                    (t.m_nudgeReelResult = null),
                    (t.m_nudgeIndex = 2),
                    (t.m_currentMulti = 0),
                    (t.m_multiAddEffect = null),
                    (t.m_nudgeChangeIndex = 6),
                    (t.m_isOpen = !1),
                    (t.m_isHold = !1),
                    (t.m_isPlayNudgeSound = !1),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.onLoad = function () {
                    this.SetMulti(),
                      (this.m_wheelMaskNode.getComponent(
                        UIOpacity
                      ).opacity = 0),
                      (this.m_background.getComponent(UIOpacity).opacity = 0),
                      (this.m_totalMultiLabel.string = ""),
                      (this.m_flyMultiNode.active = !0),
                      (this.m_flyMultiNode.getComponent(UIOpacity).opacity = 0),
                      (this.m_multiAddEffect = instantiate(
                        this.m_fxShowSpine.node
                      )),
                      this.m_multiAddEffect.setScale(v3(2, 2)),
                      this.m_multiAddEffect.setPosition(
                        this.m_totalMultiLabel.node.getPosition()
                      ),
                      this.node.addChild(this.m_multiAddEffect);
                  }),
                  (i.Init = function (e) {
                    this.m_gameView = e;
                  }),
                  (i.SetMulti = function () {
                    this.m_viewSize =
                      this.m_wheelMaskNode.getComponent(
                        UITransform
                      ).contentSize;
                    var e = this.m_multiLabels.length - 2;
                    this.m_mutiSize = new Size(
                      this.m_viewSize.width,
                      this.m_viewSize.height / e
                    );
                    for (var t = 0; t < this.m_multiLabels.length; t++)
                      this.m_multiLabels[t].SetLabel(
                        Game_Define.INIT_MULTI_NUMBER[t]
                      );
                    error("橫版"),
                      error("this.m_viewSize:", this.m_viewSize),
                      error("this.m_mutiSize:", this.m_mutiSize);
                  }),
                  (i.MultiSpin = function (e) {
                    this.m_time = node.strip(this.m_time + e);
                    for (
                      var t = this.m_time,
                        i = this.m_oneRoundTime,
                        n = this.m_reelStopTime_new,
                        r = 0;
                      r < this.m_multiLabels.length;
                      r++
                    ) {
                      var o = this.m_multiLabels[r].node,
                        s =
                          this.m_mutiSize.height *
                          (Math.floor(this.m_multiLabels.length / 2) - r);
                      if (t < n) {
                        var a =
                            ((t % i) / i) *
                            this.m_mutiSize.height *
                            this.m_multiLabels.length,
                          l = this.GetMovelength(
                            a,
                            this.m_mutiSize.height * (6.5 - r),
                            7 * this.m_mutiSize.height,
                            r,
                            !1
                          );
                        o.setPosition(v3(0, s - l));
                      } else if (t < n + this.m_spinBufferTime01) {
                        var u =
                          ((t - n) / this.m_spinBufferTime01) *
                          this.m_downLength;
                        o.setPosition(v3(0, s - u)),
                          this.CheckChangeToFinalSymbol(r, !0);
                      } else if (
                        t <
                        n + this.m_spinBufferTime01 + this.m_spinBufferTime02
                      ) {
                        var c =
                          ((t - n - this.m_spinBufferTime01) /
                            this.m_spinBufferTime02) *
                          this.m_downLength;
                        o.setPosition(v3(0, s - this.m_downLength + c)),
                          this.CheckChangeToFinalSymbol(r, !0);
                      } else
                        this.CheckChangeToFinalSymbol(r, !0),
                          0 != r ||
                            this.m_isPlaySound ||
                            ((this.m_isPlaySound = !0),
                            node$1.Play(Game_Define.AudioClips.Reel_Stop)),
                          o.setPosition(v3(0, s));
                      this.SetRadian(r);
                    }
                    var m =
                      this.m_gameView.SpinAck.RoundQueue[
                        this.m_gameView.RoundIdx
                      ];
                    if (
                      !this.m_hasFly &&
                      m.Nudge &&
                      t >=
                        this.m_stopTime_new + Game_Define.DELAYTIME.READY_TO_FLY
                    ) {
                      var _ = this.m_gameView.PlateInfoTo2DArray(m.PlateSymbol);
                      this.m_gameView.EffectPlate.FlyNudgeSymbolToMultiBar(_),
                        (this.m_hasFly = !0);
                    }
                    t >= this.m_stopTime_new &&
                      (this.m_isFirstStop ||
                        (node$1.Play(Game_Define.AudioClips.Multiplier),
                        (this.m_currentMulti +=
                          this.m_nudgeReelResult[this.m_nudgeIndex]),
                        (this.m_totalMultiLabel.string =
                          "X" + this.m_currentMulti.toString()),
                        this.m_gameView.EffectPlate.ZoomNode(
                          this.m_totalMultiLabel.node
                        ),
                        this.m_multiAddEffect
                          .getComponent(FX_ShowSpine)
                          .ShowWin(this.m_nudgeReelResult[this.m_nudgeIndex]),
                        this.m_fxShowSpine.Show(
                          this.m_nudgeReelResult[this.m_nudgeIndex]
                        ),
                        (this.m_isFirstStop = !0),
                        this.m_nudgeReelResult[this.m_nudgeIndex] >=
                          Game_Define.MultiLevel.MEDIUM &&
                          this.m_gameView.EffectPlate.ShakeWorld()));
                    var p = this.m_gameView.EffectPlate.GetNudgeFlyDuration();
                    t >=
                      this.m_stopTime_new +
                        p +
                        Game_Define.DELAYTIME.READY_TO_FLY +
                        Game_Define.DELAYTIME.READY_TO_NUDGE &&
                      (this.m_isStop = !0);
                  }),
                  (i.GetMovelength = function (e, t, i, n, r) {
                    return (
                      e >= t
                        ? ((e -= i),
                          this.m_isChangeSymbol[n] &&
                            ((this.m_isChangeSymbol[n] = !1),
                            this.ChangeSymbol(n, r)))
                        : (this.m_isChangeSymbol[n] = !0),
                      e
                    );
                  }),
                  (i.ChangeSymbol = function (e, t) {
                    if (
                      (this.m_reelStopTime_new &&
                        this.m_time > this.m_reelPreTime) ||
                      t
                    ) {
                      if (this.m_nudgeReelResult[e] && e < 6) {
                        var i = (Number(e) + 1).toString();
                        this.m_multiLabels[i].SetLabel(
                          this.m_nudgeReelResult[e]
                        );
                      }
                    } else {
                      var n =
                        Game_Define.MULTI_NUMBER_WITH_WEIGHTS[
                          Math.floor(
                            Math.random() *
                              Game_Define.MULTI_NUMBER_WITH_WEIGHTS.length
                          )
                        ];
                      this.m_multiLabels[e].SetLabel(n);
                    }
                  }),
                  (i.CheckChangeToFinalSymbol = function (e, t) {
                    void 0 === t && (t = !1),
                      this.m_isChangeToFinalMuti[e] ||
                        ((this.m_isChangeToFinalMuti[e] = !0),
                        this.ChangeSymbol(e, t));
                  }),
                  (i.MultiStart = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (this.m_time = 0),
                                    (this.m_hasFly = !1),
                                    (this.m_isStop = !1),
                                    (this.m_isFirstStop = !1),
                                    (this.m_nudgeReelResult = t),
                                    (this.m_nudgeIndex = 2),
                                    (this.m_currentMulti = this.m_gameView
                                      .IsInFG
                                      ? this.m_currentMulti
                                      : 0),
                                    (this.m_nudgeChangeIndex = 6),
                                    (this.m_isPlaySound = !1),
                                    (this.m_isOpen = !0),
                                    (this.m_isChangeToFinalMuti = [
                                      !1,
                                      !1,
                                      !1,
                                      !1,
                                      !1,
                                      !1,
                                    ]);
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
                  (i.ShowMultiBar = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.m_multiBarFrontSpine.node.active =
                                      !0),
                                    this.m_gameView.IsInFG && this.m_isHold
                                      ? this.m_multiBarSpine.HoldOpenL()
                                      : this.m_multiBarSpine.ShowL(),
                                    this.m_multiBarFrontSpine.ShowLFront(),
                                    (e.next = 5),
                                    node$3.Wait(this, 0.5)
                                  );
                                case 5:
                                  tween(
                                    this.m_wheelMaskNode.getComponent(UIOpacity)
                                  )
                                    .to(0.2, { opacity: 255 })
                                    .start(),
                                    tween(
                                      this.m_background.getComponent(UIOpacity)
                                    )
                                      .to(0.2, { opacity: 255 })
                                      .start();
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
                  (i.ShowNudgeCount = function (e) {
                    (this.m_nudgeCountLabel.string = e.toString()),
                      (this.m_nudgeTotalLabel.string = e.toString()),
                      e > 0 &&
                        tween(this.m_nudgeCountNode.getComponent(UIOpacity))
                          .to(0.2, { opacity: 255 })
                          .start();
                  }),
                  (i.Nudge = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var i,
                          n,
                          r,
                          o,
                          s,
                          a,
                          l,
                          u,
                          c,
                          m = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (i = 7 * this.m_mutiSize.height),
                                    (n = 10),
                                    (r = Game_Define.DELAYTIME.NUDGE_DELAY),
                                    (s = t),
                                    (a = 0);
                                case 5:
                                  if (!(a < t)) {
                                    e.next = 19;
                                    break;
                                  }
                                  for (
                                    l = this.GetNudgeEffectTime(
                                      this.m_nudgeReelResult[
                                        this.m_nudgeIndex + 1
                                      ]
                                    ),
                                      o =
                                        Game_Define.DELAYTIME.NUDGE_PUSH +
                                        Game_Define.DELAYTIME.NUDGE_COMEBACK +
                                        r +
                                        l,
                                      s -= 1,
                                      u = function (e) {
                                        var t = m.m_multiLabels[e].node;
                                        tween(t)
                                          .parallel(
                                            tween()
                                              .to(
                                                Game_Define.DELAYTIME
                                                  .NUDGE_PUSH,
                                                {
                                                  position: v3(
                                                    t.position.x,
                                                    t.position.y +
                                                      m.m_mutiSize.height +
                                                      n
                                                  ),
                                                }
                                              )
                                              .call(function () {
                                                m.SetRadian(e);
                                              })
                                              .to(
                                                Game_Define.DELAYTIME
                                                  .NUDGE_COMEBACK,
                                                {
                                                  position: v3(
                                                    t.position.x,
                                                    t.position.y +
                                                      m.m_mutiSize.height
                                                  ),
                                                }
                                              ),
                                            tween().call(function () {
                                              m.m_isPlayNudgeSound ||
                                                (node$1.Play(
                                                  Game_Define.AudioClips
                                                    .Nudge_Push
                                                ),
                                                (m.m_isPlayNudgeSound = !0)),
                                                m.m_fxShowSpine.Show(
                                                  m.m_nudgeReelResult[
                                                    m.m_nudgeIndex + 1
                                                  ]
                                                ),
                                                (m.m_nudgeCountLabel.string =
                                                  s.toString()),
                                                m.m_nudgeReelResult[
                                                  m.m_nudgeIndex + 1
                                                ] >=
                                                  Game_Define.MultiLevel
                                                    .MEDIUM &&
                                                  m.m_gameView.EffectPlate.ShakeWorld();
                                            })
                                          )
                                          .call(function () {
                                            t.position.y > 175 &&
                                              (t.setPosition(
                                                v3(
                                                  t.position.x,
                                                  t.position.y - i
                                                )
                                              ),
                                              m.m_nudgeReelResult.length >
                                                m.m_nudgeChangeIndex &&
                                                (m.m_multiLabels[e].SetLabel(
                                                  m.m_nudgeReelResult[
                                                    m.m_nudgeChangeIndex
                                                  ]
                                                ),
                                                m.m_nudgeChangeIndex++),
                                              m.m_nudgeIndex++,
                                              (m.m_currentMulti +=
                                                m.m_nudgeReelResult[
                                                  m.m_nudgeIndex
                                                ]),
                                              (m.m_totalMultiLabel.string =
                                                "X" +
                                                m.m_currentMulti.toString()),
                                              m.m_gameView.EffectPlate.ZoomNode(
                                                m.m_totalMultiLabel.node
                                              ),
                                              m.m_multiAddEffect
                                                .getComponent(FX_ShowSpine)
                                                .ShowWin(
                                                  m.m_nudgeReelResult[
                                                    m.m_nudgeIndex
                                                  ]
                                                ));
                                          })
                                          .start();
                                      },
                                      c = 0;
                                    c < this.m_multiLabels.length;
                                    c++
                                  )
                                    u(c);
                                  return (
                                    (this.m_isPlayNudgeSound = !1),
                                    (e.next = 14),
                                    node$3.Wait(this, o)
                                  );
                                case 14:
                                  (r -= Game_Define.DELAYTIME.ACCELERATION) <
                                    Game_Define.DELAYTIME.NUDGE_MIN_DELAY &&
                                    (r = Game_Define.DELAYTIME.NUDGE_MIN_DELAY);
                                case 16:
                                  a++, (e.next = 5);
                                  break;
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (i.LogMultiLabels = function () {
                    for (var e = 0; e < this.m_multiLabels.length; e++)
                      0 == this.m_multiLabels[e].node.getPosition().y &&
                        this.m_multiLabels[e].Label.string !=
                          this.m_nudgeReelResult[
                            this.m_nudgeReelResult.length - 3
                          ].toString() &&
                        (this.m_gameView.SendVerificationEvent(
                          Game_Define.EVENT_ID.MULTI_CENTER_L,
                          this.m_multiLabels[e].Label.string
                        ),
                        this.m_gameView.SendVerificationEvent(
                          Game_Define.EVENT_ID.NUDGE_REEL_RESULT,
                          this.m_nudgeReelResult.toString()
                        ),
                        error(
                          "橫版中間框：",
                          this.m_multiLabels[e].Label.string
                        ),
                        error(
                          "server給的數字:",
                          this.m_nudgeReelResult[
                            this.m_nudgeReelResult.length - 3
                          ].toString()
                        ));
                  }),
                  (i.GetNudgeEffectTime = function (e) {
                    var t = 0;
                    return (
                      e >= Game_Define.MultiLevel.HIGH
                        ? (t = Game_Define.DELAYTIME.HIGH_DELAY)
                        : e >= Game_Define.MultiLevel.MEDIUM &&
                          (t = Game_Define.DELAYTIME.MEDIUM_DELAY),
                      t
                    );
                  }),
                  (i.HideMulti = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (this.m_isOpen) {
                                    e.next = 2;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 2:
                                  return (
                                    (e.next = 4),
                                    this.m_multiBarFrontSpine.CloseFrontL()
                                  );
                                case 4:
                                  if (
                                    (tween(
                                      this.m_wheelMaskNode.getComponent(
                                        UIOpacity
                                      )
                                    )
                                      .to(0.3, { opacity: 0.1 })
                                      .start(),
                                    tween(
                                      this.m_background.getComponent(UIOpacity)
                                    )
                                      .to(0.3, { opacity: 0.1 })
                                      .start(),
                                    this.m_gameView.IsInFG ||
                                      ((this.m_currentMulti = 0),
                                      (this.m_totalMultiLabel.string = "")),
                                    !this.m_gameView.IsInFG)
                                  ) {
                                    e.next = 13;
                                    break;
                                  }
                                  return (
                                    (e.next = 10),
                                    this.m_multiBarSpine.CloseHoldL()
                                  );
                                case 10:
                                  (this.m_isHold = !0), (e.next = 16);
                                  break;
                                case 13:
                                  return (
                                    (e.next = 15), this.m_multiBarSpine.Close()
                                  );
                                case 15:
                                  this.m_isHold = !1;
                                case 16:
                                  this.m_isOpen = !1;
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
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (i.LeaveFree = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2), this.m_multiBarSpine.Close()
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
                  (i.HideNudgeCount = function () {
                    tween(this.m_nudgeCountNode.getComponent(UIOpacity))
                      .to(0.3, { opacity: 0.1 })
                      .start();
                  }),
                  (i.HideMultiLabels = function () {
                    for (var e = 0; e < this.m_multiLabels.length; e++)
                      this.m_multiLabels[e].node.active = !1;
                  }),
                  (i.SetRadian = function (e) {
                    var t = this.m_multiLabels[e].node.getPosition(),
                      i =
                        1 -
                        (0.5 * Math.abs(t.y)) /
                          this.m_wheelMaskNode.getComponent(UITransform)
                            .contentSize.y;
                    this.m_multiLabels[e].node.setScale(i, i);
                  }),
                  _createClass(t, [
                    {
                      key: "TotalMultiLabel",
                      get: function () {
                        return this.m_totalMultiLabel;
                      },
                    },
                    {
                      key: "WheelMaskNode",
                      get: function () {
                        return this.m_wheelMaskNode;
                      },
                    },
                    {
                      key: "FlyMultiNode",
                      get: function () {
                        return this.m_flyMultiNode;
                      },
                    },
                    {
                      key: "FlyMultiLabel",
                      get: function () {
                        return this.m_flyMultiLabel;
                      },
                    },
                    {
                      key: "IsStop",
                      get: function () {
                        return this.m_isStop;
                      },
                    },
                    {
                      key: "CurrentMulti",
                      get: function () {
                        return this.m_currentMulti;
                      },
                      set: function (e) {
                        this.m_currentMulti = e;
                      },
                    },
                    {
                      key: "IsHold",
                      set: function (e) {
                        this.m_isHold = e;
                      },
                    },
                  ]),
                  t
                );
              })(Component)),
              (_descriptor$d = _applyDecoratedDescriptor(
                _class2$e.prototype,
                "m_multiLabels",
                [_dec$v],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor2$a = _applyDecoratedDescriptor(
                _class2$e.prototype,
                "m_multiBarSpine",
                [_dec2$d],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor3$6 = _applyDecoratedDescriptor(
                _class2$e.prototype,
                "m_multiBarFrontSpine",
                [_dec3$8],
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
                _class2$e.prototype,
                "m_fxShowSpine",
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
              (_descriptor5$3 = _applyDecoratedDescriptor(
                _class2$e.prototype,
                "m_totalMultiLabel",
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
              (_descriptor6$3 = _applyDecoratedDescriptor(
                _class2$e.prototype,
                "m_wheelMaskNode",
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
              (_descriptor7$2 = _applyDecoratedDescriptor(
                _class2$e.prototype,
                "m_background",
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
              (_descriptor8$1 = _applyDecoratedDescriptor(
                _class2$e.prototype,
                "m_flyMultiNode",
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
              (_descriptor9$1 = _applyDecoratedDescriptor(
                _class2$e.prototype,
                "m_flyMultiLabel",
                [_dec9$1],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor10$1 = _applyDecoratedDescriptor(
                _class2$e.prototype,
                "m_nudgeCountNode",
                [_dec10$1],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor11$1 = _applyDecoratedDescriptor(
                _class2$e.prototype,
                "m_nudgeCountLabel",
                [_dec11$1],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor12$1 = _applyDecoratedDescriptor(
                _class2$e.prototype,
                "m_nudgeTotalLabel",
                [_dec12$1],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_class$w = _class2$e))
            ) || _class$w),
          _dec$w,
          _dec2$e,
          _dec3$9,
          _dec4$4,
          _dec5$4,
          _dec6$4,
          _dec7$4,
          _dec8$2,
          _dec9$2,
          _dec10$2,
          _dec11$2,
          _dec12$2,
          _class$x,
          _class2$f,
          _descriptor$e,
          _descriptor2$b,
          _descriptor3$7,
          _descriptor4$4,
          _descriptor5$4,
          _descriptor6$4,
          _descriptor7$3,
          _descriptor8$2,
          _descriptor9$2,
          _descriptor10$2,
          _descriptor11$2,
          _descriptor12$2;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "48183/cngROlal9xNOdKOSt",
            "MultiReelsS",
            void 0
          );
        var ccclass$x = _decorator.ccclass,
          property$f = _decorator.property,
          MultiReelsS =
            ((_dec$w = property$f({
              type: MultiLabel,
              tooltip: "加乘的label",
            })),
            (_dec2$e = property$f({
              type: MultiBarSpine,
              tooltip: "倍率轉輪Spine",
            })),
            (_dec3$9 = property$f({
              type: MultiBarSpine,
              tooltip: "倍率轉輪Spine(中間框)",
            })),
            (_dec4$4 = property$f({
              type: FX_ShowSpine,
              tooltip: "中心位置光球Spine",
            })),
            (_dec5$4 = property$f({ type: Label, tooltip: "總加乘的label" })),
            (_dec6$4 = property$f({
              type: Node,
              tooltip: "加乘轉輪的遮罩節點",
            })),
            (_dec7$4 = property$f({ type: Node, tooltip: "底板" })),
            (_dec8$2 = property$f({ type: Node, tooltip: "總加乘飛行節點" })),
            (_dec9$2 = property$f({
              type: Label,
              tooltip: "總加乘飛行節點label",
            })),
            (_dec10$2 = property$f({
              type: Node,
              tooltip: "Nudge倒數次數Node",
            })),
            (_dec11$2 = property$f({
              type: Label,
              tooltip: "Nudge倒數次數Label",
            })),
            (_dec12$2 = property$f({
              type: Label,
              tooltip: "Nudge總次數Label",
            })),
            ccclass$x(
              ((_class2$f = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, n = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    n[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_multiLabels",
                      _descriptor$e,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_multiBarSpine",
                      _descriptor2$b,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_multiBarFrontSpine",
                      _descriptor3$7,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fxShowSpine",
                      _descriptor4$4,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_totalMultiLabel",
                      _descriptor5$4,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_wheelMaskNode",
                      _descriptor6$4,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_background",
                      _descriptor7$3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_flyMultiNode",
                      _descriptor8$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_flyMultiLabel",
                      _descriptor9$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_nudgeCountNode",
                      _descriptor10$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_nudgeCountLabel",
                      _descriptor11$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_nudgeTotalLabel",
                      _descriptor12$2,
                      _assertThisInitialized(t)
                    ),
                    (t.m_gameView = null),
                    (t.m_viewSize = void 0),
                    (t.m_mutiSize = void 0),
                    (t.m_oneRoundTime = Game_Define.MultiReels.ONE_ROUND_TIME),
                    (t.m_nowTime = void 0),
                    (t.m_stoptime = void 0),
                    (t.m_randIdx = 0),
                    (t.m_isChangeToFinalMuti = [!1, !1, !1, !1, !1, !1]),
                    (t.m_spinBufferTime01 = 0.1),
                    (t.m_spinBufferTime02 = 0.1),
                    (t.m_rightLength = 30),
                    (t.m_isPlaySound = !1),
                    (t.m_isChangeSymbol = new Array()),
                    (t.m_time = 0),
                    (t.m_reelPreTime =
                      t.m_oneRoundTime *
                      (Game_Define.MultiReels.TOTAL_ROUND - 1)),
                    (t.m_reelStopTime_new =
                      t.m_oneRoundTime * Game_Define.MultiReels.TOTAL_ROUND),
                    (t.m_stopTime_new =
                      t.m_reelStopTime_new +
                      t.m_spinBufferTime01 +
                      t.m_spinBufferTime02),
                    (t.m_isFirstStop = !1),
                    (t.m_nudgeReelResult = null),
                    (t.m_nudgeIndex = 2),
                    (t.m_currentMulti = 0),
                    (t.m_multiAddEffect = null),
                    (t.m_nudgeChangeIndex = 6),
                    (t.m_isOpen = !1),
                    (t.m_isHold = !1),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.onLoad = function () {
                    this.SetMulti(),
                      (this.m_wheelMaskNode.getComponent(
                        UIOpacity
                      ).opacity = 0),
                      (this.m_background.getComponent(UIOpacity).opacity = 0),
                      (this.m_totalMultiLabel.string = ""),
                      this.m_multiBarSpine.CloseS(),
                      (this.m_flyMultiNode.active = !0),
                      (this.m_flyMultiNode.getComponent(UIOpacity).opacity = 0),
                      (this.m_multiAddEffect = instantiate(
                        this.m_fxShowSpine.node
                      )),
                      this.m_multiAddEffect.setScale(v3(2, 2)),
                      this.m_multiAddEffect.setPosition(
                        this.m_totalMultiLabel.node.getPosition()
                      ),
                      this.node.addChild(this.m_multiAddEffect);
                  }),
                  (i.Init = function (e) {
                    this.m_gameView = e;
                  }),
                  (i.SetMulti = function () {
                    this.m_viewSize =
                      this.m_wheelMaskNode.getComponent(
                        UITransform
                      ).contentSize;
                    var e = this.m_multiLabels.length - 2;
                    this.m_mutiSize = new Size(
                      this.m_viewSize.width / e,
                      this.m_viewSize.height
                    );
                    for (var t = 0; t < this.m_multiLabels.length; t++)
                      this.m_multiLabels[t].SetLabel(
                        Game_Define.INIT_MULTI_NUMBER[t]
                      );
                    error("直版"),
                      error("this.m_viewSize:", this.m_viewSize),
                      error("this.m_mutiSize:", this.m_mutiSize);
                  }),
                  (i.MultiSpin = function (e) {
                    this.m_time = node.strip(this.m_time + e);
                    for (
                      var t = this.m_time,
                        i = this.m_oneRoundTime,
                        n = this.m_reelStopTime_new,
                        r = 0;
                      r < this.m_multiLabels.length;
                      r++
                    ) {
                      var o = this.m_multiLabels[r].node,
                        s =
                          this.m_mutiSize.width *
                          (Math.floor(this.m_multiLabels.length / 2) - r);
                      if (t < n) {
                        var a =
                            ((t % i) / i) *
                            this.m_mutiSize.width *
                            this.m_multiLabels.length,
                          l = this.GetMovelength(
                            a,
                            this.m_mutiSize.width * (6.5 - r),
                            7 * this.m_mutiSize.width,
                            r,
                            !1
                          );
                        o.setPosition(v3(s - l, 0));
                      } else if (t < n + this.m_spinBufferTime01) {
                        var u =
                          ((t - n) / this.m_spinBufferTime01) *
                          this.m_rightLength;
                        o.setPosition(v3(s - u, 0)),
                          this.CheckChangeToFinalSymbol(r, !0);
                      } else if (
                        t <
                        n + this.m_spinBufferTime01 + this.m_spinBufferTime02
                      ) {
                        var c =
                          ((t - n - this.m_spinBufferTime01) /
                            this.m_spinBufferTime02) *
                          this.m_rightLength;
                        o.setPosition(v3(s - this.m_rightLength + c, 0)),
                          this.CheckChangeToFinalSymbol(r, !0);
                      } else
                        this.CheckChangeToFinalSymbol(r, !0),
                          0 != r ||
                            this.m_isPlaySound ||
                            ((this.m_isPlaySound = !0),
                            node$1.Play(Game_Define.AudioClips.Reel_Stop)),
                          o.setPosition(v3(s, 0));
                      this.SetRadian(r);
                    }
                    t >= this.m_stopTime_new &&
                      (this.m_isFirstStop ||
                        ((this.m_currentMulti +=
                          this.m_nudgeReelResult[this.m_nudgeIndex]),
                        (this.m_totalMultiLabel.string =
                          "X" + this.m_currentMulti.toString()),
                        this.m_gameView.EffectPlate.ZoomNode(
                          this.m_totalMultiLabel.node
                        ),
                        this.m_multiAddEffect
                          .getComponent(FX_ShowSpine)
                          .ShowWin(this.m_nudgeReelResult[this.m_nudgeIndex]),
                        this.m_fxShowSpine.Show(
                          this.m_nudgeReelResult[this.m_nudgeIndex],
                          !1
                        ),
                        (this.m_isFirstStop = !0)));
                  }),
                  (i.GetMovelength = function (e, t, i, n, r) {
                    return (
                      e >= t
                        ? ((e -= i),
                          this.m_isChangeSymbol[n] &&
                            ((this.m_isChangeSymbol[n] = !1),
                            this.ChangeSymbol(n, r)))
                        : (this.m_isChangeSymbol[n] = !0),
                      e
                    );
                  }),
                  (i.ChangeSymbol = function (e, t) {
                    if (
                      (this.m_reelStopTime_new &&
                        this.m_time > this.m_reelPreTime) ||
                      t
                    ) {
                      if (this.m_nudgeReelResult[e] && e < 6) {
                        var i = (Number(e) + 1).toString();
                        this.m_multiLabels[i].SetLabel(
                          this.m_nudgeReelResult[e]
                        );
                      }
                    } else {
                      var n =
                        Game_Define.MULTI_NUMBER_WITH_WEIGHTS[
                          Math.floor(
                            Math.random() *
                              Game_Define.MULTI_NUMBER_WITH_WEIGHTS.length
                          )
                        ];
                      this.m_multiLabels[e].SetLabel(n);
                    }
                  }),
                  (i.CheckChangeToFinalSymbol = function (e, t) {
                    void 0 === t && (t = !1),
                      this.m_isChangeToFinalMuti[e] ||
                        ((this.m_isChangeToFinalMuti[e] = !0),
                        this.ChangeSymbol(e, t));
                  }),
                  (i.MultiStart = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (this.m_time = 0),
                                    (this.m_isFirstStop = !1),
                                    (this.m_nudgeReelResult = t),
                                    (this.m_nudgeIndex = 2),
                                    (this.m_currentMulti = this.m_gameView
                                      .IsInFG
                                      ? this.m_currentMulti
                                      : 0),
                                    (this.m_nudgeChangeIndex = 6),
                                    (this.m_isPlaySound = !1),
                                    (this.m_isOpen = !0),
                                    (this.m_isChangeToFinalMuti = [
                                      !1,
                                      !1,
                                      !1,
                                      !1,
                                      !1,
                                      !1,
                                    ]);
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
                  (i.ShowMultiBar = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.m_multiBarFrontSpine.node.active =
                                      !0),
                                    this.m_gameView.IsInFG && this.m_isHold
                                      ? this.m_multiBarSpine.HoldOpenS()
                                      : this.m_multiBarSpine.ShowS(),
                                    this.m_multiBarFrontSpine.ShowSFront(),
                                    (e.next = 5),
                                    node$3.Wait(this, 0.5)
                                  );
                                case 5:
                                  tween(
                                    this.m_wheelMaskNode.getComponent(UIOpacity)
                                  )
                                    .to(0.2, { opacity: 255 })
                                    .start(),
                                    tween(
                                      this.m_background.getComponent(UIOpacity)
                                    )
                                      .to(0.2, { opacity: 255 })
                                      .start();
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
                  (i.ShowNudgeCount = function (e) {
                    (this.m_nudgeCountLabel.string = e.toString()),
                      (this.m_nudgeTotalLabel.string = e.toString()),
                      e > 0 &&
                        tween(this.m_nudgeCountNode.getComponent(UIOpacity))
                          .to(0.2, { opacity: 255 })
                          .start();
                  }),
                  (i.Nudge = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var i,
                          n,
                          r,
                          o,
                          s,
                          a,
                          l,
                          u,
                          c,
                          m = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (i = 7 * this.m_mutiSize.width),
                                    (n = 10),
                                    (r = Game_Define.DELAYTIME.NUDGE_DELAY),
                                    (s = t),
                                    (a = 0);
                                case 5:
                                  if (!(a < t)) {
                                    e.next = 18;
                                    break;
                                  }
                                  for (
                                    l = this.GetNudgeEffectTime(
                                      this.m_nudgeReelResult[
                                        this.m_nudgeIndex + 1
                                      ]
                                    ),
                                      o =
                                        Game_Define.DELAYTIME.NUDGE_PUSH +
                                        Game_Define.DELAYTIME.NUDGE_COMEBACK +
                                        r +
                                        l,
                                      s -= 1,
                                      u = function (e) {
                                        var t = m.m_multiLabels[e].node;
                                        tween(t)
                                          .parallel(
                                            tween()
                                              .to(
                                                Game_Define.DELAYTIME
                                                  .NUDGE_PUSH,
                                                {
                                                  position: v3(
                                                    t.position.x +
                                                      m.m_mutiSize.width +
                                                      n,
                                                    t.position.y
                                                  ),
                                                }
                                              )
                                              .call(function () {
                                                m.SetRadian(e);
                                              })
                                              .to(
                                                Game_Define.DELAYTIME
                                                  .NUDGE_COMEBACK,
                                                {
                                                  position: v3(
                                                    t.position.x +
                                                      m.m_mutiSize.width,
                                                    t.position.y
                                                  ),
                                                }
                                              ),
                                            tween().call(function () {
                                              m.m_fxShowSpine.Show(
                                                m.m_nudgeReelResult[
                                                  m.m_nudgeIndex + 1
                                                ],
                                                !1
                                              ),
                                                (m.m_nudgeCountLabel.string =
                                                  s.toString());
                                            })
                                          )
                                          .call(function () {
                                            t.position.x > 250 &&
                                              (t.setPosition(
                                                v3(
                                                  t.position.x - i,
                                                  t.position.y
                                                )
                                              ),
                                              m.m_nudgeReelResult.length >
                                                m.m_nudgeChangeIndex &&
                                                (m.m_multiLabels[e].SetLabel(
                                                  m.m_nudgeReelResult[
                                                    m.m_nudgeChangeIndex
                                                  ]
                                                ),
                                                m.m_nudgeChangeIndex++),
                                              m.m_nudgeIndex++,
                                              (m.m_currentMulti +=
                                                m.m_nudgeReelResult[
                                                  m.m_nudgeIndex
                                                ]),
                                              (m.m_totalMultiLabel.string =
                                                "X" +
                                                m.m_currentMulti.toString()),
                                              m.m_gameView.EffectPlate.ZoomNode(
                                                m.m_totalMultiLabel.node
                                              ),
                                              m.m_multiAddEffect
                                                .getComponent(FX_ShowSpine)
                                                .ShowWin(
                                                  m.m_nudgeReelResult[
                                                    m.m_nudgeIndex
                                                  ]
                                                ));
                                          })
                                          .start();
                                      },
                                      c = 0;
                                    c < this.m_multiLabels.length;
                                    c++
                                  )
                                    u(c);
                                  return (e.next = 13), node$3.Wait(this, o);
                                case 13:
                                  (r -= Game_Define.DELAYTIME.ACCELERATION) <
                                    Game_Define.DELAYTIME.NUDGE_MIN_DELAY &&
                                    (r = Game_Define.DELAYTIME.NUDGE_MIN_DELAY);
                                case 15:
                                  a++, (e.next = 5);
                                  break;
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
                  (i.LogMultiLabels = function () {
                    for (var e = 0; e < this.m_multiLabels.length; e++)
                      0 == this.m_multiLabels[e].node.getPosition().x &&
                        this.m_multiLabels[e].Label.string !=
                          this.m_nudgeReelResult[
                            this.m_nudgeReelResult.length - 3
                          ].toString() &&
                        (this.m_gameView.SendVerificationEvent(
                          Game_Define.EVENT_ID.MULTI_CENTER_S,
                          this.m_multiLabels[e].Label.string
                        ),
                        this.m_gameView.SendVerificationEvent(
                          Game_Define.EVENT_ID.NUDGE_REEL_RESULT,
                          this.m_nudgeReelResult.toString()
                        ),
                        error(
                          "直版中間框：",
                          this.m_multiLabels[e].Label.string
                        ),
                        error(
                          "server給的數字:",
                          this.m_nudgeReelResult[
                            this.m_nudgeReelResult.length - 3
                          ].toString()
                        ));
                  }),
                  (i.GetNudgeEffectTime = function (e) {
                    var t = 0;
                    return (
                      e >= Game_Define.MultiLevel.HIGH
                        ? (t = Game_Define.DELAYTIME.HIGH_DELAY)
                        : e >= Game_Define.MultiLevel.MEDIUM &&
                          (t = Game_Define.DELAYTIME.MEDIUM_DELAY),
                      t
                    );
                  }),
                  (i.HideMulti = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (this.m_isOpen) {
                                    e.next = 2;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 2:
                                  return (
                                    (e.next = 4),
                                    this.m_multiBarFrontSpine.CloseFrontS()
                                  );
                                case 4:
                                  tween(
                                    this.m_wheelMaskNode.getComponent(UIOpacity)
                                  )
                                    .to(0.3, { opacity: 0.1 })
                                    .start(),
                                    tween(
                                      this.m_background.getComponent(UIOpacity)
                                    )
                                      .to(0.3, { opacity: 0.1 })
                                      .start(),
                                    this.m_gameView.IsInFG ||
                                      ((this.m_currentMulti = 0),
                                      (this.m_totalMultiLabel.string = "")),
                                    this.m_gameView.IsInFG
                                      ? (this.m_multiBarSpine.CloseHoldS(),
                                        (this.m_isHold = !0))
                                      : (this.m_multiBarSpine.CloseS(),
                                        (this.m_isHold = !1)),
                                    (this.m_isOpen = !1);
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
                  (i.LeaveFree = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2), this.m_multiBarSpine.CloseS()
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
                  (i.HideNudgeCount = function () {
                    tween(this.m_nudgeCountNode.getComponent(UIOpacity))
                      .to(0.3, { opacity: 0.1 })
                      .start();
                  }),
                  (i.HideMultiLabels = function () {
                    for (var e = 0; e < this.m_multiLabels.length; e++)
                      this.m_multiLabels[e].node.active = !1;
                  }),
                  (i.SetRadian = function (e) {
                    var t = this.m_multiLabels[e].node.getPosition(),
                      i =
                        1 -
                        (0.5 * Math.abs(t.x)) /
                          this.m_wheelMaskNode.getComponent(UITransform)
                            .contentSize.x;
                    this.m_multiLabels[e].node.setScale(i, i);
                  }),
                  _createClass(t, [
                    {
                      key: "MultiBarSpine",
                      get: function () {
                        return this.m_multiBarSpine;
                      },
                    },
                    {
                      key: "TotalMultiLabel",
                      get: function () {
                        return this.m_totalMultiLabel;
                      },
                    },
                    {
                      key: "WheelMaskNode",
                      get: function () {
                        return this.m_wheelMaskNode;
                      },
                    },
                    {
                      key: "FlyMultiNode",
                      get: function () {
                        return this.m_flyMultiNode;
                      },
                    },
                    {
                      key: "FlyMultiLabel",
                      get: function () {
                        return this.m_flyMultiLabel;
                      },
                    },
                    {
                      key: "NudgeCountNode",
                      get: function () {
                        return this.m_nudgeCountNode;
                      },
                    },
                    {
                      key: "CurrentMulti",
                      get: function () {
                        return this.m_currentMulti;
                      },
                      set: function (e) {
                        this.m_currentMulti = e;
                      },
                    },
                    {
                      key: "IsHold",
                      set: function (e) {
                        this.m_isHold = e;
                      },
                    },
                  ]),
                  t
                );
              })(Component)),
              (_descriptor$e = _applyDecoratedDescriptor(
                _class2$f.prototype,
                "m_multiLabels",
                [_dec$w],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor2$b = _applyDecoratedDescriptor(
                _class2$f.prototype,
                "m_multiBarSpine",
                [_dec2$e],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor3$7 = _applyDecoratedDescriptor(
                _class2$f.prototype,
                "m_multiBarFrontSpine",
                [_dec3$9],
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
                _class2$f.prototype,
                "m_fxShowSpine",
                [_dec4$4],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor5$4 = _applyDecoratedDescriptor(
                _class2$f.prototype,
                "m_totalMultiLabel",
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
              (_descriptor6$4 = _applyDecoratedDescriptor(
                _class2$f.prototype,
                "m_wheelMaskNode",
                [_dec6$4],
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
                _class2$f.prototype,
                "m_background",
                [_dec7$4],
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
                _class2$f.prototype,
                "m_flyMultiNode",
                [_dec8$2],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor9$2 = _applyDecoratedDescriptor(
                _class2$f.prototype,
                "m_flyMultiLabel",
                [_dec9$2],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor10$2 = _applyDecoratedDescriptor(
                _class2$f.prototype,
                "m_nudgeCountNode",
                [_dec10$2],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor11$2 = _applyDecoratedDescriptor(
                _class2$f.prototype,
                "m_nudgeCountLabel",
                [_dec11$2],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor12$2 = _applyDecoratedDescriptor(
                _class2$f.prototype,
                "m_nudgeTotalLabel",
                [_dec12$2],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_class$x = _class2$f))
            ) || _class$x),
          _dec$x,
          _dec2$f,
          _class$y,
          _class2$g,
          _descriptor$f;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "2dc1d9xSCVHQLaStT79irCU", "Pharaoh", void 0);
        var ccclass$y = _decorator.ccclass,
          property$g = _decorator.property,
          PharaohAnimation = {
            MG_Idle: "Idle",
            MG_Idle2: "Idle2",
            MG_Win: "Win",
            FG_Idle: "FG_idle",
            FG_Idle2: "FG_Idle2",
            FG_Declare: "FG_Declare",
            FG_Win: "FG_win",
            Big_Win_Start1: "BW_Start1",
            Big_Win_Start2: "BW_Start2",
            Big_Win_Loop: "BW_Loop",
            Big_Win_End1: "BW_End1",
            Big_Win_End2: "BW_End2",
            Wild_Start: "Wild_start",
            Wild_Loop: "Wild_loop",
            Wild_End: "Wild_End",
            Wild_End_FG: "Wild_End_FG",
            NearWin: "Nearwin",
            FG_To_MG: "FG_To_MG",
          },
          PharaohAnimationList = [
            "Idle",
            "Idle2",
            "Win",
            "FG_idle",
            "FG_Idle2",
            "FG_Declare",
            "FG_win",
            "BW_Start1",
            "BW_Start2",
            "BW_Loop",
            "BW_End1",
            "BW_End2",
            "Wild_start",
            "Wild_loop",
            "Wild_End",
            "Wild_End_FG",
            "Nearwin",
            "FG_To_MG",
          ],
          Pharaoh =
            ((_dec$x = ccclass$y("Pharaoh")),
            (_dec2$f = property$g({ type: sp.Skeleton, tooltip: "Spine" })),
            _dec$x(
              ((_class2$g = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, n = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    n[r] = arguments[r];
                  return (
                    ((t =
                      e.call.apply(e, [this].concat(n)) ||
                      this).m_lastAnimName = ""),
                    (t.m_gameView = null),
                    _initializerDefineProperty(
                      t,
                      "m_spine",
                      _descriptor$f,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.Init = function (e) {
                    (this.m_gameView = e), this.SetAllMix();
                  }),
                  (i.SetAllMix = function () {
                    for (var e = 0; e < PharaohAnimationList.length; ++e)
                      for (var t = 0; t < PharaohAnimationList.length; ++t)
                        this.m_spine.setMix(
                          PharaohAnimationList[e],
                          PharaohAnimationList[t],
                          0.15
                        );
                  }),
                  (i.PlaySmallWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (t) {
                                    e.next = 6;
                                    break;
                                  }
                                  return (
                                    (e.next = 3),
                                    this.PlayAnimation(PharaohAnimation.MG_Win)
                                  );
                                case 3:
                                  this.PlayMgIdle(), (e.next = 9);
                                  break;
                                case 6:
                                  return (
                                    (e.next = 8),
                                    this.PlayAnimation(PharaohAnimation.FG_Win)
                                  );
                                case 8:
                                  this.PlayFgIdle();
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
                  (i.PlayBigWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (t) {
                                    e.next = 6;
                                    break;
                                  }
                                  return (
                                    (e.next = 3),
                                    this.PlayAnimation(
                                      PharaohAnimation.Big_Win_Start1
                                    )
                                  );
                                case 3:
                                  this.PlayAnimation(
                                    PharaohAnimation.Big_Win_Loop,
                                    !0
                                  ),
                                    (e.next = 9);
                                  break;
                                case 6:
                                  return (
                                    (e.next = 8),
                                    this.PlayAnimation(
                                      PharaohAnimation.Big_Win_Start2
                                    )
                                  );
                                case 8:
                                  this.PlayAnimation(
                                    PharaohAnimation.Big_Win_Loop,
                                    !0
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
                  (i.HideBigWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (t) {
                                    e.next = 6;
                                    break;
                                  }
                                  return (
                                    (e.next = 3),
                                    this.PlayAnimation(
                                      PharaohAnimation.Big_Win_End1
                                    )
                                  );
                                case 3:
                                  this.PlayMgIdle(), (e.next = 9);
                                  break;
                                case 6:
                                  return (
                                    (e.next = 8),
                                    this.PlayAnimation(
                                      PharaohAnimation.Big_Win_End2
                                    )
                                  );
                                case 8:
                                  this.PlayFgIdle();
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
                  (i.PlayTriggerNudge = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (t) {
                                    e.next = 8;
                                    break;
                                  }
                                  return (
                                    (e.next = 3),
                                    this.PlayAnimation(
                                      PharaohAnimation.Big_Win_Start1
                                    )
                                  );
                                case 3:
                                  return (
                                    (e.next = 5),
                                    this.PlayAnimation(
                                      PharaohAnimation.Big_Win_End1
                                    )
                                  );
                                case 5:
                                  this.PlayMgIdle(), (e.next = 13);
                                  break;
                                case 8:
                                  return (
                                    (e.next = 10),
                                    this.PlayAnimation(
                                      PharaohAnimation.Big_Win_Start2
                                    )
                                  );
                                case 10:
                                  return (
                                    (e.next = 12),
                                    this.PlayAnimation(
                                      PharaohAnimation.Big_Win_End2
                                    )
                                  );
                                case 12:
                                  this.PlayFgIdle();
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (i.PlayEnterFree = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(
                                      PharaohAnimation.Wild_Start
                                    )
                                  );
                                case 2:
                                  this.PlayAnimation(
                                    PharaohAnimation.Wild_Loop,
                                    !0
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
                  (i.PlayFgDeclare = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(
                                      PharaohAnimation.Wild_End
                                    )
                                  );
                                case 2:
                                  return (
                                    (e.next = 4),
                                    this.PlayAnimation(
                                      PharaohAnimation.FG_Declare
                                    )
                                  );
                                case 4:
                                  this.PlayFgIdle();
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
                  (i.PlayFgToMg = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(
                                      PharaohAnimation.FG_To_MG
                                    )
                                  );
                                case 2:
                                  this.PlayMgIdle();
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
                  (i.PlayNearWin = function () {
                    this.PlayAnimation(PharaohAnimation.NearWin, !0);
                  }),
                  (i.PlayMgIdle = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, i;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (t = Math.floor(3 * Math.random()) + 1),
                                    (i = 0);
                                case 2:
                                  if (!(i < t)) {
                                    e.next = 8;
                                    break;
                                  }
                                  return (
                                    (e.next = 5),
                                    this.PlayAnimation(PharaohAnimation.MG_Idle)
                                  );
                                case 5:
                                  i++, (e.next = 2);
                                  break;
                                case 8:
                                  return (
                                    (e.next = 10),
                                    this.PlayAnimation(
                                      PharaohAnimation.MG_Idle2
                                    )
                                  );
                                case 10:
                                  this.PlayMgIdle();
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
                  (i.PlayFgIdle = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, i;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (t = Math.floor(3 * Math.random()) + 1),
                                    (i = 0);
                                case 2:
                                  if (!(i < t)) {
                                    e.next = 8;
                                    break;
                                  }
                                  return (
                                    (e.next = 5),
                                    this.PlayAnimation(PharaohAnimation.FG_Idle)
                                  );
                                case 5:
                                  i++, (e.next = 2);
                                  break;
                                case 8:
                                  return (
                                    (e.next = 10),
                                    this.PlayAnimation(
                                      PharaohAnimation.FG_Idle2
                                    )
                                  );
                                case 10:
                                  this.PlayFgIdle();
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
                  (i.PlayAnimation = function (e, t, i) {
                    var n = this;
                    return (
                      void 0 === t && (t = !1),
                      new Promise(function (r) {
                        n.m_spine.clearTrack(0), n.m_spine.setToSetupPose();
                        var o = n.m_spine.setAnimation(0, e, t);
                        o
                          ? (n.m_spine.setTrackEventListener(
                              o,
                              function (e, t) {
                                var n = t.data.name;
                                null == i || i(n);
                              }
                            ),
                            n.m_spine.setTrackCompleteListener(o, function () {
                              r();
                            }))
                          : n.m_spine.setCompleteListener(function () {
                              r();
                            });
                      })
                    );
                  }),
                  (i.playBigWinStart = function () {
                    this.PlayAnimation(PharaohAnimation.Big_Win_Start1);
                  }),
                  (i.playFgIdle = function () {
                    this.PlayAnimation(PharaohAnimation.FG_Idle);
                  }),
                  t
                );
              })(Component)),
              (_descriptor$f = _applyDecoratedDescriptor(
                _class2$g.prototype,
                "m_spine",
                [_dec2$f],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_class$y = _class2$g))
            ) || _class$y),
          _dec$y,
          _dec2$g,
          _class$z,
          _class2$h,
          _descriptor$g;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "1b8b5dmG/9BaZXzjirUtUfH",
            "IntroSpine",
            void 0
          );
        var ccclass$z = _decorator.ccclass,
          property$h = _decorator.property,
          AnimName$8 = {
            GameIntro_L: "GameIntro_L",
            GameIntro_S: "GameIntro_S",
          },
          IntroSpine =
            ((_dec$y = ccclass$z("IntroSpine")),
            (_dec2$g = property$h({ type: sp.Skeleton, tooltip: "Spine" })),
            _dec$y(
              ((_class2$h = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, n = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    n[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_spine",
                      _descriptor$g,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.SetIntro = function (e) {
                    var t = e ? AnimName$8.GameIntro_L : AnimName$8.GameIntro_S;
                    (this.m_spine.node.active = !0),
                      this.PlayAnimation(t, !1, 0);
                  }),
                  (i.ShowIntro = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var i;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (i = t
                                      ? AnimName$8.GameIntro_L
                                      : AnimName$8.GameIntro_S),
                                    (e.next = 3),
                                    this.PlayAnimation(i)
                                  );
                                case 3:
                                  this.m_spine.node.active = !1;
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (i.PlayAnimation = function (e, t, i) {
                    var n = this;
                    return (
                      void 0 === t && (t = !1),
                      void 0 === i && (i = 1),
                      new Promise(function (r) {
                        (n.m_spine.timeScale = i),
                          n.m_spine.clearTrack(0),
                          n.m_spine.setToSetupPose();
                        var o = n.m_spine.setAnimation(0, e, t);
                        o
                          ? n.m_spine.setTrackCompleteListener(o, function () {
                              r();
                            })
                          : n.m_spine.setCompleteListener(function () {
                              r();
                            });
                      })
                    );
                  }),
                  t
                );
              })(Component)),
              (_descriptor$g = _applyDecoratedDescriptor(
                _class2$h.prototype,
                "m_spine",
                [_dec2$g],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_class$z = _class2$h))
            ) || _class$z),
          _dec$z,
          _dec2$h,
          _dec3$a,
          _dec4$5,
          _dec5$5,
          _dec6$5,
          _dec7$5,
          _dec8$3,
          _dec9$3,
          _dec10$3,
          _dec11$3,
          _dec12$3,
          _dec13$1,
          _dec14,
          _dec15,
          _dec16,
          _dec17,
          _dec18,
          _dec19,
          _dec20,
          _dec21,
          _dec22,
          _dec23,
          _dec24,
          _dec25,
          _dec26,
          _dec27,
          _dec28,
          _dec29,
          _dec30,
          _class$A,
          _class2$i,
          _descriptor$h,
          _descriptor2$c,
          _descriptor3$8,
          _descriptor4$5,
          _descriptor5$5,
          _descriptor6$5,
          _descriptor7$4,
          _descriptor8$3,
          _descriptor9$3,
          _descriptor10$3,
          _descriptor11$3,
          _descriptor12$3,
          _descriptor13,
          _descriptor14,
          _descriptor15,
          _descriptor16,
          _descriptor17,
          _descriptor18,
          _descriptor19,
          _descriptor20,
          _descriptor21,
          _descriptor22,
          _descriptor23,
          _descriptor24,
          _descriptor25,
          _descriptor26,
          _descriptor27,
          _descriptor28,
          _descriptor29,
          _descriptor30;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "307645aeFNIsZdTut42vzbU", "GameView", void 0);
        var WIDTH = 1136,
          HEIGHT = 640,
          ccclass$A = _decorator.ccclass,
          property$i = _decorator.property,
          GameView =
            ((_dec$z = property$i({ type: IntroSpine, tooltip: "前導" })),
            (_dec2$h = property$i({ type: Animation, tooltip: "MainView" })),
            (_dec3$a = property$i({ type: SlotReels, tooltip: "轉輪" })),
            (_dec4$5 = property$i({ type: EffectPlate, tooltip: "盤面表演" })),
            (_dec5$5 = property$i({ type: Node, tooltip: "地bar根節點" })),
            (_dec6$5 = property$i(Button)),
            (_dec7$5 = property$i(Button)),
            (_dec8$3 = property$i({ type: Sprite, tooltip: "標題-直版" })),
            (_dec9$3 = property$i({ type: SpriteAtlas, tooltip: "標題合圖" })),
            (_dec10$3 = property$i({ type: Label, tooltip: "跑分LABEL" })),
            (_dec11$3 = property$i({
              type: FX_ShowSpine,
              tooltip: "跑分Spine",
            })),
            (_dec12$3 = property$i({ type: Node, tooltip: "跑分底板" })),
            (_dec13$1 = property$i({ type: Pharaoh, tooltip: "法老王人物" })),
            (_dec14 = property$i({ type: BigWin, tooltip: "大獎表演" })),
            (_dec15 = property$i({ type: Node, tooltip: "MG背景_L" })),
            (_dec16 = property$i({ type: Node, tooltip: "MG背景_S" })),
            (_dec17 = property$i({ type: Node, tooltip: "FG背景_L" })),
            (_dec18 = property$i({ type: Node, tooltip: "FG背景_S" })),
            (_dec19 = property$i({
              type: ManualComponent,
              tooltip: "新版跑馬燈(i)",
            })),
            (_dec20 = property$i({ type: Node, tooltip: "新版跑馬燈(i)按鈕" })),
            (_dec21 = property$i({
              type: MultiReels,
              tooltip: "橫版倍率轉輪",
            })),
            (_dec22 = property$i({
              type: MultiReelsS,
              tooltip: "直版倍率轉輪",
            })),
            (_dec23 = property$i({
              type: MultiBarSpine,
              tooltip: "倍率轉輪Spine",
            })),
            (_dec24 = property$i({ type: Node, tooltip: "NearWin特效Node" })),
            (_dec25 = property$i({
              type: FG_DeclareSpine,
              tooltip: "FG宣告Spine",
            })),
            (_dec26 = property$i({
              type: FG_DeclareSpine,
              tooltip: "FG結算Spine",
            })),
            (_dec27 = property$i({
              type: FG_MoreSpinSpine,
              tooltip: "FG加局Spine",
            })),
            (_dec28 = property$i({ type: Label, tooltip: "FG加局數" })),
            (_dec29 = property$i({
              type: FgCounter,
              tooltip: "FG計數器(橫版)",
            })),
            (_dec30 = property$i({
              type: FgCounter,
              tooltip: "FG計數器(直版)",
            })),
            ccclass$A(
              ((_class2$i = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, n = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    n[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_introSpine",
                      _descriptor$h,
                      _assertThisInitialized(t)
                    ),
                    (t.m_isReady = !0),
                    _initializerDefineProperty(
                      t,
                      "m_mainAnim",
                      _descriptor2$c,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_slotReels",
                      _descriptor3$8,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_effectPlate",
                      _descriptor4$5,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_barNode",
                      _descriptor5$5,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_plateSpineBtn",
                      _descriptor6$5,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_freePlateSpineBtn",
                      _descriptor7$4,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_titleNodeS",
                      _descriptor8$3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_titleSpriteAtlas",
                      _descriptor9$3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_winValueLabel",
                      _descriptor10$3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_winFxShowSpine",
                      _descriptor11$3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_winButtomNode",
                      _descriptor12$3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_pharaoh",
                      _descriptor13,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_bigWin",
                      _descriptor14,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_MgBackGroundNodeL",
                      _descriptor15,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_MgBackGroundNodeS",
                      _descriptor16,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_FgBackGroundNodeL",
                      _descriptor17,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_FgBackGroundNodeS",
                      _descriptor18,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_manual",
                      _descriptor19,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_manualBtn",
                      _descriptor20,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_multiReels",
                      _descriptor21,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_multiReelsS",
                      _descriptor22,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_multiBar",
                      _descriptor23,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_nearWinEffectNode",
                      _descriptor24,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fgDeclareSpine",
                      _descriptor25,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fgCompliment",
                      _descriptor26,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_moreFgSpine",
                      _descriptor27,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_moreFgTimesLabel",
                      _descriptor28,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fgCounter",
                      _descriptor29,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fgCounterS",
                      _descriptor30,
                      _assertThisInitialized(t)
                    ),
                    (t.m_isInFG = !1),
                    (t.m_isHardStop = !1),
                    (t.m_isFirstPlateSpin = !0),
                    (t.m_isLandscape = !1),
                    (t.m_isRotationLock = !1),
                    (t.m_isChange = !1),
                    (t.m_spinAck = null),
                    (t.m_unshowSpinAck = null),
                    (t.m_roundIdx = 0),
                    (t.m_canSpaceStop = !1),
                    (t.m_canPlateStop = !1),
                    (t.m_bgmId = null),
                    (t.m_isSpined = !1),
                    (t.m_fakeSpinAck = null),
                    (t.m_win = 0),
                    (t.m_hasScatterCol = [!1, !1, !1, !1, !1]),
                    (t.m_plateScatterCount = 0),
                    (t.m_hasNudgeCol = [!1, !1, !1, !1, !1]),
                    (t.m_hasNudge = !1),
                    (t.m_fgLastRound = 0),
                    (t.m_isPlayingNearWin = !1),
                    (t.m_startNearWinCol = -1),
                    (t.m_isNearWinCols = [!1, !1, !1, !1, !1]),
                    (t.m_nearWinSoundId = null),
                    (t.m_oldRealPlate = null),
                    (t.m_isAutoShowFeatures = !1),
                    (t.m_autoplayInfos = null),
                    (t.m_realFeaturesSpinAck = null),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.onLoad = function () {
                    var e = this;
                    (_cjsExports$1.util.Long = _cjsExports),
                      _cjsExports$1.configure(),
                      AstarteInit(),
                      (node$3.CURRENCY_CHANGE_ENABLE = !0),
                      (Game_Define.ShowDisplayValue = function (e) {
                        return node$4.GetDisplayValue(e);
                      }),
                      this.m_slotReels.Init(this),
                      this.m_slotReels.SetPlayStopSoundFunction(function (t) {
                        e.StopSpinFunc(t);
                      }),
                      this.m_multiReels.Init(this),
                      this.m_multiReelsS.Init(this),
                      this.m_effectPlate.Init(this),
                      this.OnRotation(),
                      node.AddOnRotationCb(function () {
                        e.OnRotation();
                      }),
                      sys.isNative ||
                        (window.onerror = function (e, t, i, n, r) {
                          var o = "-1",
                            s = 0;
                          node$3.APP &&
                            ((o = node$3.APP.GetAID()),
                            (s = Number(node$3.APP.GetApiID())));
                          var a = node$d.FormErrorParams(
                            o,
                            s,
                            Number(node$3.NOW_GAME_ID),
                            Game_Define.Ver,
                            r
                          );
                          node$d.SendErrorLog(a);
                        }),
                      (node$3.IsInMG = function () {
                        return !e.m_isInFG;
                      });
                  }),
                  (i.start = function () {
                    var e = this;
                    node.CheckSwitchOff(SwitchOffKeyDefine.CloseManual) &&
                      (this.m_manual.node.active = !1),
                      this.m_pharaoh.Init(this),
                      node.CheckSwitchOff(SwitchOffKeyDefine.NoQuickSpin) ||
                        input.on(Input.EventType.KEY_DOWN, function (t) {
                          switch (t.keyCode) {
                            case KeyCode.SPACE:
                              node$4.SendSpinLog(),
                                node$6.IsShow() ||
                                  (node$4 &&
                                    !node$8.IsShowBackpack() &&
                                    (node$4.BtnState !=
                                      SlotBottomBarState.IDLE ||
                                    node$4.IsAutoSpin ||
                                    node$8.IsFeaturesDemoMode
                                      ? e.m_canSpaceStop && e.ClickStop()
                                      : e.ClickSpin()));
                          }
                        });
                    var t = {};
                    (t[CommonState.WAIT_RES] = new WaitResState(this)),
                      (t[Game_Define.GAMEVIEW_STATE.WAIT_READY] =
                        new WaitReadyState(this)),
                      (t[Game_Define.GAMEVIEW_STATE.PLATE_SHOW] =
                        new PlateShowState(this)),
                      (t[Game_Define.GAMEVIEW_STATE.FEATURE_SHOW] =
                        new FeatureShowState(this)),
                      (t[Game_Define.GAMEVIEW_STATE.UNSHOW_PREPARE] =
                        new UnshowPerpareState(this)),
                      (t[CommonState.IDLE] = new IdleState(this)),
                      (t[CommonState.SPIN] = new SpinState(this)),
                      (t[Game_Define.GAMEVIEW_STATE.AWARD] = new AwardState(
                        this
                      )),
                      (t[Game_Define.GAMEVIEW_STATE.MULTI_SPIN] =
                        new MultiSpinState(this)),
                      (t[Game_Define.GAMEVIEW_STATE.NUDGE] = new NudgeState(
                        this
                      )),
                      (t[Game_Define.GAMEVIEW_STATE.NUDGE_AWARD_STATE] =
                        new NudgeAwardState(this)),
                      (t[Game_Define.GAMEVIEW_STATE.ROUND_SHOW_END] =
                        new RoundShowEndState(this)),
                      (t[CommonState.CHECK_STATE] = new CheckState(this)),
                      (t[Game_Define.GAMEVIEW_STATE.SCATTER] = new ScatterState(
                        this
                      )),
                      (t[Game_Define.GAMEVIEW_STATE.ENTER_FREE] =
                        new EnterFreeState(this)),
                      (t[Game_Define.GAMEVIEW_STATE.LEAVE_FREE] =
                        new LeaveFreeState(this)),
                      (t[Game_Define.GAMEVIEW_STATE.ROUND_END] =
                        new RoundEndState(this)),
                      node$b.SetGameCb(this),
                      node$7.Init(t),
                      node$7.NextState(CommonState.LOGIN),
                      this.m_manualBtn.on(
                        Node.EventType.TOUCH_END,
                        function () {
                          node$1.Play(node$3.AudioClips.COMMON_BTN);
                        }
                      );
                  }),
                  (i.SyncPlate = function () {
                    if (this.m_isSpined)
                      this.OnRecvSpinAck(this.m_fakeSpinAck),
                        (this.m_fakeSpinAck = null),
                        node$7.NextState(CommonState.SPIN);
                    else {
                      if (this.m_spinAck) {
                        var e = this.PlateInfoTo2DArray(
                          this.m_spinAck.RoundQueue[this.m_roundIdx].PlateSymbol
                        );
                        this.m_slotReels.SetPlateSymbol(e);
                      } else this.m_slotReels.SetPlateSymbol([]);
                      node$7.NextState(CommonState.IDLE),
                        node$4.SetSpinState(SlotBottomBarState.IDLE);
                    }
                  }),
                  (i.SettingBottomBar = function () {
                    var e = this;
                    (node$4.VerString =
                      "v_" +
                      node$3.VERSION.replace("ver.", "") +
                      "_" +
                      Game_Define.Ver),
                      node$4.SetTouchEvet(function (t) {
                        e.BarTouchCb(t);
                      }),
                      node$4.HaveStopSound(!1),
                      node$4.SetWinValue(0),
                      node$4.SetAutoplayConfirmCb(function (t) {
                        e.CloseManual(),
                          (e.m_autoplayInfos = JSON.parse(t)),
                          node$e.Dispatch(CommonEventName.SpinReqNotify);
                      }),
                      node$4.SetAutoPlaySettingPanelFreeGameString(
                        node$3.StringKey.AUTO_PLAY_PANEL_ENTER_FREEGAME
                      ),
                      node$4.SetSpinState(SlotBottomBarState.CLICK_CANCEL);
                    var t = this.m_titleSpriteAtlas.getSpriteFrame(
                      "logo_" + node$5.CurrLang
                    );
                    t ||
                      (t = this.m_titleSpriteAtlas.getSpriteFrame(
                        "logo_" + node$3.Lang.EN
                      )),
                      node$4.ShowPlayReady(
                        t,
                        function () {
                          return (
                            node$7.Current() !==
                              Game_Define.GAMEVIEW_STATE.WAIT_READY ||
                            (node$7.NextState(
                              Game_Define.GAMEVIEW_STATE.PLATE_SHOW
                            ),
                            !1)
                          );
                        },
                        function () {
                          node$7.Current() ===
                            Game_Define.GAMEVIEW_STATE.WAIT_READY &&
                            (node$8.IsFeaturesDemo
                              ? node$7.NextState(
                                  Game_Define.GAMEVIEW_STATE.FEATURE_SHOW
                                )
                              : node$7.NextState(
                                  Game_Define.GAMEVIEW_STATE.PLATE_SHOW
                                ));
                        }
                      ),
                      node$4.SetGameLogo([this.m_titleNodeS.node]),
                      node$4.SetFollowNode(this.node),
                      node.CheckSwitchOff(SwitchOffKeyDefine.NoQuickSpin) ||
                        this.m_plateSpineBtn.node.on(
                          Node.EventType.TOUCH_END,
                          function (t) {
                            node$4.SendSpinLog(), e.BarTouchCb(t);
                          }
                        ),
                      node.CloseIntroLoading.push(function () {
                        node$b.HasUnshow &&
                          node$7.NextState(
                            Game_Define.GAMEVIEW_STATE.UNSHOW_PREPARE
                          );
                      });
                  }),
                  (i.BarTouchCb = function (e) {
                    var t = this;
                    switch (e.target.name) {
                      case this.m_plateSpineBtn.node.name:
                        if (node$7.Current() == CommonState.IDLE)
                          if (this.m_isFirstPlateSpin) {
                            this.m_isFirstPlateSpin = !1;
                            var i = {};
                            (i.contextKey =
                              node$3.StringKey.MSGBOX_TOUCHPANEL_SPIN),
                              (i.titleKey =
                                node$3.StringKey.MSGBOX_TITLE_SYSTEM_INFO),
                              (i.showCancelBtn = !1),
                              (i.showConfirmBtn = !0),
                              (i.showCloseBtn = !0),
                              (i.confirmCB = function () {
                                t.ClickSpin();
                              }),
                              node$6.PushMessageBoxSetting(i);
                          } else this.ClickSpin();
                        else this.m_canPlateStop && this.ClickStop();
                        break;
                      case BottomBar_UIName.BTN_SPIN:
                        log("spin~~~"), this.ClickSpin(), this.CloseManual();
                        break;
                      case BottomBar_UIName.BTN_SPINSTOP:
                        this.ClickStop();
                        break;
                      case BottomBar_UIName.BTN_AUTOPLAY:
                        if (
                          !node.CheckSwitchOff(
                            SwitchOffKeyDefine.ShowAutoSetting
                          )
                        )
                          break;
                      case BottomBar_UIName.BTN_WISEAUTOPLAY:
                        node$4.IsAutoSpin &&
                          (node$4.ShowAutoPlayState(!1),
                          node$4.SetSpinState(SlotBottomBarState.CLICK_CANCEL)),
                          node$4.ShowAutoplaySettingView(node$4.GetChips());
                        break;
                      case BottomBar_UIName.BTN_AUTOSTOP_C:
                      case BottomBar_UIName.BTN_AUTOSTOP:
                        this.StopAutoPlay(),
                          node$4.SetSpinState(SlotBottomBarState.CLICK_CANCEL);
                    }
                  }),
                  (i.ClickSpin = function () {
                    if (
                      !node$8.IsNowInDemoMenu &&
                      node$7.Current() == CommonState.IDLE
                    )
                      if (
                        (node$4.GetChips() >=
                          node.strip(this.GetNowBetValue()) ||
                          this.m_isInFG ||
                          node$4.IsFreeSpin) &&
                        this.IsBackpackPass() &&
                        !node$f.IsOpen()
                      )
                        node$4.SetSpinState(SlotBottomBarState.CLICK_SPIN),
                          node$e.Dispatch(CommonEventName.SpinReqNotify);
                      else if (this.IsBackpackPass() && !node$f.IsOpen()) {
                        var e = node$4.GetBetList();
                        node.strip(this.GetNowBetValue()) == node.strip(e[0]) ||
                        node$4.GetChips() < node.strip(e[0])
                          ? node$6.ShowMessageBox(
                              node$3.StringKey.MSGBOX_MONEY_NOT_ENOUGH
                            )
                          : node$6.ShowMessageBox(
                              node$3.StringKey.MSGBOX_MONEY_NOT_ENOUGH_DOWN_BET
                            );
                      } else
                        node$4.SetSpinState(SlotBottomBarState.IDLE),
                          node$7.NextState(CommonState.IDLE);
                  }),
                  (i.ClickStop = function () {
                    node.CheckSwitchOff(SwitchOffKeyDefine.NoQuickSpin) ||
                      (node$7.Current() != CommonState.SPIN || node$4.IsHardStop
                        ? (node$7.Current() !=
                            Game_Define.GAMEVIEW_STATE.AWARD &&
                            node$7.Current() !=
                              Game_Define.GAMEVIEW_STATE.NUDGE_AWARD_STATE) ||
                          (this.m_bigWin.Stop(),
                          node$4.IsAutoSpin
                            ? node$4.SetSpinState(
                                SlotBottomBarState.CLICK_STOP_IN_AUTOPLAY
                              )
                            : node$4.SetSpinState(
                                SlotBottomBarState.CLICK_STOP
                              ))
                        : (node$4.IsAutoSpin
                            ? node$4.SetSpinState(
                                SlotBottomBarState.CLICK_STOP_IN_AUTOPLAY
                              )
                            : node$4.SetSpinState(
                                SlotBottomBarState.CLICK_STOP
                              ),
                          this.m_slotReels.SetIsClickStopBtn()));
                  }),
                  (i.GetNowBetValue = function () {
                    return node$4.GetNowBetValue();
                  }),
                  (i.StopAutoPlay = function () {
                    node$4.ShowAutoPlayState(!1);
                  }),
                  (i.OnRotation = function () {
                    if ((log("OnRotation"), this.m_isRotationLock))
                      this.m_isChange = !0;
                    else {
                      this.m_isChange = !1;
                      var e = screen.windowSize;
                      this.m_isLandscape = e.width > e.height;
                      var t = this.node.getComponent(Animation);
                      if (this.m_isLandscape) {
                        if (
                          (e.width / e.height <= WIDTH / HEIGHT
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
                          node$7 &&
                            node$7.Current() ===
                              Game_Define.GAMEVIEW_STATE.WAIT_READY)
                        ) {
                          t.play("GameView_GameIntro_L");
                          var i = t.getState("GameView_GameIntro_L");
                          i.setTime(0), i.sample(), t.stop();
                        }
                        this.m_mainAnim.play("Frame_Change_L"),
                          t.play("GameView_L"),
                          (this.m_titleNodeS.node.active = !1),
                          (this.m_pharaoh.node.getComponent(
                            UIOpacity
                          ).opacity = 0.1);
                      } else {
                        if (
                          (e.height / e.width <= WIDTH / HEIGHT
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
                          node$7 &&
                            node$7.Current() ===
                              Game_Define.GAMEVIEW_STATE.WAIT_READY)
                        ) {
                          t.play("GameView_GameIntro_S");
                          var n = t.getState("GameView_GameIntro_S");
                          n.setTime(0), n.sample(), t.stop();
                        }
                        this.m_mainAnim.play("Frame_Change_S"),
                          t.play("GameView_S"),
                          (this.m_titleNodeS.node.active = !0),
                          (this.m_pharaoh.node.getComponent(
                            UIOpacity
                          ).opacity = 255);
                      }
                      this.ChangeBackGround(),
                        this.SetMultiReels(),
                        this.IntroOnRotation(),
                        this.FgCounterOnrotation(),
                        node$4 &&
                          node$4.OnRotation(
                            this.m_isLandscape,
                            function () {},
                            !0
                          ),
                        node$8 && node$8.OnRotation(this.m_isLandscape, !0),
                        node$6.OnRotate(this.m_isLandscape);
                    }
                  }),
                  (i.FgCounterOnrotation = function () {
                    this.m_isLandscape
                      ? ((this.m_fgCounter.node.getComponent(
                          UIOpacity
                        ).opacity = 255),
                        (this.m_fgCounterS.node.getComponent(
                          UIOpacity
                        ).opacity = 0.1))
                      : ((this.m_fgCounter.node.getComponent(
                          UIOpacity
                        ).opacity = 0.1),
                        (this.m_fgCounterS.node.getComponent(
                          UIOpacity
                        ).opacity = 255));
                  }),
                  (i.StopSpinFunc = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var i, n, r, o, s, a, l, u, c, m;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    i = 0, n = 0;
                                    n < this.m_hasScatterCol.length;
                                    n++
                                  )
                                    this.m_hasScatterCol[n] && (i += 1);
                                  if (!this.m_spinAck) {
                                    e.next = 30;
                                    break;
                                  }
                                  if (!this.m_isHardStop) {
                                    e.next = 23;
                                    break;
                                  }
                                  if (((r = !1), 0 != t)) {
                                    e.next = 15;
                                    break;
                                  }
                                  o = 0;
                                case 7:
                                  if (!(o < this.m_hasNudgeCol.length)) {
                                    e.next = 14;
                                    break;
                                  }
                                  if (!this.m_hasNudgeCol[o]) {
                                    e.next = 11;
                                    break;
                                  }
                                  return (r = !0), e.abrupt("break", 14);
                                case 11:
                                  o++, (e.next = 7);
                                  break;
                                case 14:
                                  i >= 3
                                    ? this.PlayScatterSound(i)
                                    : r
                                    ? node$1.Play(
                                        Game_Define.AudioClips.Nudge_Appear
                                      )
                                    : node$1.Play(
                                        Game_Define.AudioClips.Reel_Stop,
                                        !1
                                      );
                                case 15:
                                  if (!this.m_hasNudgeCol[t]) {
                                    e.next = 21;
                                    break;
                                  }
                                  return (
                                    (s =
                                      this.SpinAck.RoundQueue[this.RoundIdx]),
                                    (a = this.PlateInfoTo2DArray(
                                      s.PlateSymbol
                                    )),
                                    (l = s.Nudge ? s.Nudge : 0),
                                    (e.next = 21),
                                    this.EffectPlate.ShowNudgeSymbolEffectStop(
                                      a,
                                      l
                                    )
                                  );
                                case 21:
                                  e.next = 30;
                                  break;
                                case 23:
                                  if (
                                    (this.m_hasScatterCol[t]
                                      ? i >= 3 || t <= 2
                                        ? (this.m_plateScatterCount++,
                                          this.PlayScatterSound(
                                            this.m_plateScatterCount
                                          ))
                                        : 2 != i ||
                                          3 != t ||
                                          this.m_hasScatterCol[4] ||
                                          (this.m_plateScatterCount++,
                                          this.PlayScatterSound(
                                            this.m_plateScatterCount
                                          ))
                                      : this.m_hasNudgeCol[t] &&
                                        !this.m_isPlayingNearWin
                                      ? node$1.Play(
                                          Game_Define.AudioClips.Nudge_Appear
                                        )
                                      : node$1.Play(
                                          Game_Define.AudioClips.Reel_Stop,
                                          !1,
                                          null,
                                          1
                                        ),
                                    !this.m_hasNudgeCol[t] ||
                                      this.m_isPlayingNearWin)
                                  ) {
                                    e.next = 30;
                                    break;
                                  }
                                  return (
                                    (u =
                                      this.SpinAck.RoundQueue[this.RoundIdx]),
                                    (c = this.PlateInfoTo2DArray(
                                      u.PlateSymbol
                                    )),
                                    (m = u.Nudge ? u.Nudge : 0),
                                    (e.next = 30),
                                    this.EffectPlate.ShowNudgeSymbolEffectStop(
                                      c,
                                      m
                                    )
                                  );
                                case 30:
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
                  (i.SetTxt = function () {
                    this.m_fgDeclareSpine.SetTxt(),
                      this.m_fgCompliment.SetTxt(!1),
                      this.m_fgCounter.SetTxt(!0),
                      this.m_fgCounterS.SetTxt(!1),
                      this.m_moreFgSpine.SetTxt();
                    var e = this.m_titleSpriteAtlas.getSpriteFrame(
                      "logo_" + node$5.CurrLang
                    );
                    e ||
                      (e = this.m_titleSpriteAtlas.getSpriteFrame(
                        "logo_" + node$3.Lang.EN
                      )),
                      (this.m_titleNodeS.spriteFrame = e),
                      node$4.SetTxt(),
                      null == node$8 || node$8.SetTxt(),
                      this.m_manual.SetTxt(
                        ["String_01", "String_02", "String_03"],
                        "String_00"
                      );
                  }),
                  (i.CloseManual = function () {
                    this.m_manual.CloseManul();
                  }),
                  (i.update = function (e) {
                    node$7.Tick(e);
                  }),
                  (i.InitPrefab = function () {
                    this.m_effectPlate.Prepare(), this.m_bigWin.Init(this);
                  }),
                  (i.InitExtra = function () {
                    var e = this;
                    this.ChangeDemoPlateByRatio(),
                      node$4.FeaturesDemoInit(
                        function (t) {
                          node$4.SetSpinState(SlotBottomBarState.AUTO_UNABLE),
                            log("demo select", t),
                            tween(e.node)
                              .call(function () {
                                node$4.SetSpinState(
                                  SlotBottomBarState.CLICK_SPIN
                                ),
                                  node$7.NextState(CommonState.SPIN);
                              })
                              .delay(0.5)
                              .call(function () {
                                var i = new _cjsExports$2.loeProto.SpinAck();
                                (i = e.m_realFeaturesSpinAck[t]),
                                  e.OnRecvSpinAck(i);
                              })
                              .start();
                        },
                        this.m_realFeaturesSpinAck.length,
                        node$4.FindBetIndexByValue(Game_Define.FeatureBetValue),
                        function () {
                          e.m_isAutoShowFeatures &&
                            (log("m_isAutoShowFeatures IN."),
                            (e.m_isAutoShowFeatures = !1),
                            node$7.NextState(
                              Game_Define.GAMEVIEW_STATE.WAIT_READY
                            ));
                        }
                      ),
                      this.ReqMail();
                    node$g.NewInit(
                      function () {
                        node$4.SetSpinState(SlotBottomBarState.CLICK_SPIN),
                          node$7.NextState(CommonState.SPIN),
                          node$e.Dispatch(CommonEventName.SpinReqNotify);
                      },
                      function () {
                        node$4.IsAutoSpin && e.StopAutoPlay();
                      }
                    ),
                      node$8.RecommendNewInit(),
                      node$h.NewInit(),
                      node$i.NewInit(),
                      node$j.JpManagerInit(),
                      node$j.MhbManagerInit(),
                      node$k.NewInit(),
                      node$8.RankingInit(
                        [node$3.APP.GetAccount(), node$3.APP.GetNickName()],
                        node$3.APP.GetAToken(),
                        node.ConvertLanguageToFull(node$5.CurrLang),
                        null,
                        null,
                        function () {
                          e.ReqMail();
                        }
                      ),
                      node$f.Init();
                  }),
                  (i.IsBackpackPass = function () {
                    return node$h.IsBackpackPass();
                  }),
                  (i.LoadSound = function () {
                    var e = this,
                      t = function e(t, i) {
                        node$3.GameBundle.load(t, function (n, r) {
                          if (n) return error(n.message || n), void e(t, i);
                          i && i(r);
                        });
                      },
                      i = function (i) {
                        t("Sound/" + i, function (t) {
                          (Game_Define.AudioClips[i] = t),
                            null != e.m_bgmId ||
                              !Game_Define.AudioClips.BGM_MG ||
                              (node$7.Current() ===
                                Game_Define.GAMEVIEW_STATE.ENTER_FREE &&
                                e.m_isInFG) ||
                              (e.m_bgmId = node$1.PlayBackGround(
                                Game_Define.AudioClips.BGM_MG,
                                !0,
                                null,
                                0.5
                              ));
                        });
                      };
                    for (var n in Game_Define.AudioClips) i(n);
                  }),
                  (i.SetIntro = function () {
                    this.m_introSpine.SetIntro(this.m_isLandscape),
                      (this.m_titleNodeS.node.getComponent(
                        UIOpacity
                      ).opacity = 0);
                  }),
                  (i.ShowIntro = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.m_isReady = !1),
                                    (e.next = 3),
                                    this.m_introSpine.ShowIntro(
                                      this.m_isLandscape
                                    )
                                  );
                                case 3:
                                  this.m_titleNodeS.node.getComponent(
                                    UIOpacity
                                  ).opacity = 255;
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
                  (i.IntroOnRotation = function () {
                    this.m_isReady &&
                      this.m_introSpine.SetIntro(this.m_isLandscape);
                  }),
                  (i.InitFgPlate = function () {
                    (this.m_roundIdx += 1),
                      (this.m_fgLastRound -= 1),
                      (this.m_fgCounter.FgRemainRoundLabel.string =
                        this.m_fgLastRound.toString()),
                      (this.m_fgCounterS.FgRemainRoundLabel.string =
                        this.m_fgLastRound.toString());
                    var e = this.PlateInfoTo2DArray(
                      this.SpinAck.RoundQueue[this.m_roundIdx].PlateSymbol
                    );
                    this.CheckNearWin(e), this.m_slotReels.SetPlateInfo(e);
                    for (var t = !0, i = 0; i < e.length; i++)
                      for (var n = 0; n < e[i].length; n++)
                        if (e[i][n] === Game_Define.Symbol.SymbolScatter) {
                          t ? (t = !1) : (this.HasScatterCol[i] = !0);
                          break;
                        }
                    (this.m_canSpaceStop = !0), (this.m_canPlateStop = !0);
                  }),
                  (i.UpdateFgCounter = function () {
                    var e =
                      this.m_spinAck.RoundQueue[this.m_roundIdx].FreeTotalRound;
                    (this.m_fgLastRound += 5),
                      (this.m_fgCounterS.FgRemainRoundLabel.string =
                        this.m_fgLastRound.toString()),
                      this.m_effectPlate.ZoomFgCountNode(
                        this.m_fgCounterS.FgRemainRoundLabel.node,
                        v3(1.3, 1.3),
                        v3(1, 1)
                      ),
                      (this.m_fgCounterS.FgTotalRoundLabel.string =
                        e.toString()),
                      this.m_effectPlate.ZoomFgCountNode(
                        this.m_fgCounterS.FgTotalRoundLabel.node,
                        v3(1.3, 1.3),
                        v3(1, 1)
                      ),
                      (this.m_fgCounter.FgRemainRoundLabel.string =
                        this.m_fgLastRound.toString()),
                      this.m_effectPlate.ZoomFgCountNode(
                        this.m_fgCounter.FgRemainRoundLabel.node,
                        v3(1.3, 1.3),
                        v3(1, 1)
                      ),
                      (this.m_fgCounter.FgTotalRoundLabel.string =
                        e.toString()),
                      this.m_effectPlate.ZoomFgCountNode(
                        this.m_fgCounter.FgTotalRoundLabel.node,
                        v3(1.3, 1.3),
                        v3(1, 1)
                      );
                  }),
                  (i.PlaySamllWinSound = function (e) {
                    var t = [
                        {
                          odds: 0,
                          sound: Game_Define.AudioClips.Small_Win1,
                          time: 0.756,
                        },
                        {
                          odds: 2,
                          sound: Game_Define.AudioClips.Small_Win2,
                          time: 1.2,
                        },
                        {
                          odds: 4,
                          sound: Game_Define.AudioClips.Small_Win3,
                          time: 1.7,
                        },
                      ],
                      i = node.divide(e, node$4.GetNowBetValue());
                    if (this.m_isInFG) {
                      for (var n = t.length - 2; n >= 0; --n)
                        if (i >= t[n].odds)
                          return node$1.Play(t[n].sound), t[n].time;
                    } else
                      for (var r = t.length - 1; r >= 0; --r)
                        if (i >= t[r].odds)
                          return node$1.Play(t[r].sound), t[r].time;
                  }),
                  (i.ClearAll = function () {
                    this.m_effectPlate.HideSymbolEffect(),
                      (this.m_slotReels.NudgeTimes = ""),
                      this.MultiReels.HideMulti(),
                      this.MultiReelsS.HideMulti(),
                      (this.m_plateScatterCount = 0);
                  }),
                  (i.OnCommand = function(e, t,data) {
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
                      case node$3.AckType.info:
                        this.SettingBottomBar(),
                          node$4.AutoPlayPanelInit(),
                          node$8.FeaturesInit(
                            [
                              "features/left/spriteFrame",
                              "features/right/spriteFrame",
                            ],
                            [
                              Game_Define.StringKey.KK_FEATURES_LEFT,
                              Game_Define.StringKey.KK_FEATURES_RIGHT,
                            ],
                            Game_Define.CHILLI_NUM,
                            this.m_titleSpriteAtlas
                          );
                        var i = node$5.GetGameAtlas();
                        node$8.SetFeatruesDesc([
                          i.getSpriteFrame("txt1"),
                          i.getSpriteFrame("txt2"),
                        ]),
                          node$8.CheckFirstFeatures(),
                          node$4.SetSpinState(SlotBottomBarState.IDLE),
                          this.InitPrefab(),
                          this.Pharaoh.PlayMgIdle(),
                          this.SetTxt(),
                          this.OnRotation(),
                          node$4.SetAutoPlayPanelTxt(),
                          node$8.SetCanAutoShowRankboardUI(),
                          this.LoadSound();
                        break;
                      case node$3.AckType.spin:
                      case node$3.AckType.lastSpin:
                        var n = _cjsExports$2.loeProto.SpinAck.decode(t);
                        this.OnRecvSpinAck(n);
                        
            SendTestSpinInfo(n, data);
break;
                      case node$3.AckType.unshow:
                        var r = _cjsExports$2.loeProto.SpinAck.decode(t);
                        this.m_unshowSpinAck = r;
                    }
                  }),
                  (i.OnRecvSpinAck = function (e) {
                    error("OnRecvSpinAck:", e),
                      (this.m_roundIdx = 0),
                      (this.m_spinAck = e),
                      null == e.TotalWin && (e.TotalWin = 0),
                      null == e.FreeTotalWin && (e.FreeTotalWin = 0),
                      node$4.IsAutoSpin &&
                        !node$4.IsHardStop &&
                        node$4.SetSpinState(
                          SlotBottomBarState.CLICK_AUTOPLAY_HARDSTOP
                        ),
                      null == this.m_spinAck.AckType &&
                        (this.m_spinAck.AckType = 0);
                    var t = this.PlateInfoTo2DArray(
                      this.m_spinAck.RoundQueue[0].PlateSymbol
                    );
                    this.CheckNearWin(t),
                      this.m_slotReels.SetPlateInfo(t),
                      node$8.IsFeaturesDemoMode || (this.m_oldRealPlate = t),
                      node$4.IsHardStop
                        ? (this.m_slotReels.SetIsClickStopBtn(),
                          node$4.SetSpinWithSpeed())
                        : node$4.IsAutoSpin ||
                          node$4.SetSpinState(SlotBottomBarState.START_SPIN),
                      (this.m_canSpaceStop = !0),
                      (this.m_canPlateStop = !0),
                      tween(this.node)
                        .delay(0.15)
                        .call(function () {
                          node$4.SetWinValue(0);
                        })
                        .start();
                  }),
                  (i.ReqMail = function () {
                    node$3.APP && node$d.SendMailReq();
                  }),
                  (i.CheckScatter = function (e) {
                    for (var t = 0, i = 0; i < e.length; i++)
                      for (var n = 0; n < e[i].length; n++)
                        e[i][n] == Game_Define.Symbol.SymbolScatter && t++;
                    return t;
                  }),
                  (i.PlateInfoTo2DArray = function (e) {
                    for (
                      var t = [
                          [-1, -1, -1, -1],
                          [-1, -1, -1, -1],
                          [-1, -1, -1, -1],
                          [-1, -1, -1, -1],
                          [-1, -1, -1, -1],
                        ],
                        i = 0;
                      i < COL;
                      i++
                    )
                      for (var n = 0; n < ROW; n++) t[i][n] = e[i].Col[n];
                    return t;
                  }),
                  (i.ShowSmallWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, i) {
                        var n,
                          r,
                          o,
                          s,
                          a,
                          l = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    (void 0 === i && (i = !1),
                                    ((n = this.m_winValueLabel).string = "0"),
                                    (r = Game_Define.DELAYTIME.SHOW_SMALL_WIN),
                                    (o = node.divide(
                                      Game_Define.DELAYTIME.RUN_SMALL_WIN,
                                      0.02
                                    )),
                                    (s = Number(n.string.replace(/,/g, ""))),
                                    (a = node.divide(node.strip(t - s), o)),
                                    Tween.stopAllByTarget(n.node),
                                    tween(n.node)
                                      .parallel(
                                        tween().call(function () {
                                          tween(n.node.getComponent(UIOpacity))
                                            .to(r, { opacity: 255 })
                                            .start();
                                        }),
                                        tween().call(function () {
                                          tween(
                                            l.m_winButtomNode.getComponent(
                                              UIOpacity
                                            )
                                          )
                                            .to(r, { opacity: 255 })
                                            .start();
                                        }),
                                        tween().repeat(
                                          o,
                                          tween()
                                            .call(function () {
                                              (s += a) > t && (s = t),
                                                (n.string =
                                                  node.FormatNumberThousands(
                                                    node$4.GetDisplayValue(s),
                                                    node.FORMAT_NUMBER_TYPE
                                                      .PERMANENT_DOT
                                                  ));
                                            })
                                            .delay(0.02)
                                        )
                                      )
                                      .start(),
                                    i)
                                  ) {
                                    e.next = 13;
                                    break;
                                  }
                                  return (
                                    (e.next = 12),
                                    node$3.Wait(
                                      this,
                                      Game_Define.DELAYTIME.SMALL_WIN_STAY
                                    )
                                  );
                                case 12:
                                  tween(n.node)
                                    .parallel(
                                      tween().call(function () {
                                        tween(n.node.getComponent(UIOpacity))
                                          .to(0.2, { opacity: 0.1 })
                                          .start();
                                      }),
                                      tween().call(function () {
                                        tween(
                                          l.m_winButtomNode.getComponent(
                                            UIOpacity
                                          )
                                        )
                                          .to(0.2, { opacity: 0.1 })
                                          .start();
                                      })
                                    )
                                    .start();
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
                    return function (t, i) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (i.RemoveSmallWin = function () {
                    (this.m_winValueLabel.node.getComponent(
                      UIOpacity
                    ).opacity = 0.1),
                      (this.m_winButtomNode.getComponent(
                        UIOpacity
                      ).opacity = 0.1);
                  }),
                  (i.StartSpin = function () {
                    var e = this;
                    this.m_isInFG
                      ? (this.m_isHardStop = !1)
                      : (this.m_isHardStop = node$4.IsHardStop),
                      this.m_slotReels.StartSpin(),
                      this.m_slotReels.ShowDarkOrLightSymbol(!1),
                      this.m_effectPlate.StopSingleLineEffect(),
                      this.m_slotReels.SetNearWinCb(
                        function (t) {
                          e.NearWinStart(t);
                        },
                        function () {
                          e.NearWinEnd();
                        }
                      );
                  }),
                  (i.CheckNearWin = function (e) {
                    for (var t = 0, i = 0; i < e.length; i++) {
                      for (var n = 0; n < e[i].length; n++)
                        e[i][n] === Game_Define.Symbol.SymbolScatter && t++;
                      if (
                        -1 === this.m_startNearWinCol &&
                        2 === t &&
                        i + 1 < COL
                      ) {
                        this.m_startNearWinCol = i + 1;
                        break;
                      }
                    }
                  }),
                  (i.NearWinStart = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var i;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (!this.m_isHardStop) {
                                    e.next = 2;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 2:
                                  return (
                                    0.3, (e.next = 5), node$3.Wait(this, 0.3)
                                  );
                                case 5:
                                  (this.m_nearWinSoundId = node$1.Play(
                                    Game_Define.AudioClips.Near_Win
                                  )),
                                    this.m_isPlayingNearWin ||
                                      ((this.m_isPlayingNearWin = !0),
                                      this.IsInFG ||
                                        this.m_pharaoh.PlayNearWin()),
                                    this.m_effectPlate.ShowNearWin(t),
                                    (i = this.PlateInfoTo2DArray(
                                      this.SpinAck.RoundQueue[this.RoundIdx]
                                        .PlateSymbol
                                    )),
                                    this.m_effectPlate.ShowScatterNearWin(i, t),
                                    this.m_slotReels.ShowNearWinLightCol(t);
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
                  (i.NearWinEnd = function () {
                    !this.m_isHardStop &&
                      this.m_isPlayingNearWin &&
                      (1 != this.m_nearWinSoundId &&
                        node$1.Stop(this.m_nearWinSoundId),
                      (this.m_isPlayingNearWin = !1),
                      this.m_effectPlate.HideNearWin(),
                      this.m_effectPlate.HideSymbolEffect(!0),
                      this.m_slotReels.ShowDarkOrLightSymbol(!1),
                      this.IsInFG
                        ? this.m_pharaoh.PlayFgIdle()
                        : this.m_pharaoh.PlayMgIdle());
                  }),
                  (i.GetString = function (e) {
                    return node$5.GetString(e);
                  }),
                  (i.IsFeaturesDemoMode = function () {
                    return node$8.IsFeaturesDemoMode;
                  }),
                  (i.ChangeBackGround = function () {
                    var e;
                    (e = this.m_isInFG
                      ? this.m_isLandscape
                        ? this.m_FgBackGroundNodeL
                        : this.m_FgBackGroundNodeS
                      : this.m_isLandscape
                      ? this.m_MgBackGroundNodeL
                      : this.m_MgBackGroundNodeS),
                      (this.m_FgBackGroundNodeL.active = !1),
                      (this.m_FgBackGroundNodeS.active = !1),
                      (this.m_MgBackGroundNodeL.active = !1),
                      (this.m_MgBackGroundNodeS.active = !1),
                      (e.active = !0);
                  }),
                  (i.SetMultiReels = function () {
                    this.m_isLandscape
                      ? ((this.m_multiReels.node.getComponent(
                          UIOpacity
                        ).opacity = 255),
                        (this.m_multiReelsS.node.getComponent(
                          UIOpacity
                        ).opacity = 0.1))
                      : ((this.m_multiReels.node.getComponent(
                          UIOpacity
                        ).opacity = 0.1),
                        (this.m_multiReelsS.node.getComponent(
                          UIOpacity
                        ).opacity = 255));
                  }),
                  (i.SetPlateBtnAvailble = function (e) {
                    this.m_plateSpineBtn.node.active = e;
                  }),
                  (i.ChangeDemoPlateByRatio = function () {
                    this.m_realFeaturesSpinAck = new Array();
                    var e =
                        node$4.GetBetList()[
                          node$4.FindBetIndexByValue(
                            Game_Define.FeatureBetValue
                          )
                        ],
                      t = JSON.parse(JSON.stringify(FeaturesAck.MG));
                    this.ChangeWinInfo(t, e),
                      this.m_realFeaturesSpinAck.push(t);
                    var i = JSON.parse(JSON.stringify(FeaturesAck.FG));
                    this.ChangeWinInfo(i, e),
                      this.m_realFeaturesSpinAck.push(i);
                  }),
                  (i.ChangeWinInfo = function (e, t) {
                    (e.TotalWin = e.TotalWin ? node.times(e.TotalWin, t) : 0),
                      (e.FreeTotalWin = e.FreeTotalWin
                        ? node.times(e.FreeTotalWin, t)
                        : 0);
                    for (var i = 0; i < e.RoundQueue.length; i++) {
                      var n = e.RoundQueue[i];
                      if (
                        ((n.RoundWin = node.times(
                          n.RoundWin ? n.RoundWin : 0,
                          t
                        )),
                        n.AwardDataVec)
                      )
                        for (var r = 0; r < n.AwardDataVec.length; r++)
                          n.AwardDataVec[r].Win = node.times(
                            n.AwardDataVec[r].Win || 0,
                            t
                          );
                    }
                  }),
                  (i.SetBGMVolumeByFade = function (e, t) {
                    var i = this,
                      n = (t - e) / 10;
                    tween(this.node)
                      .repeat(
                        10,
                        tween()
                          .delay(0.1)
                          .call(function () {
                            (e += n), node$1.SetVolume(i.m_bgmId, e);
                          })
                      )
                      .call(function () {
                        node$1.SetVolume(i.m_bgmId, t);
                      })
                      .start();
                  }),
                  (i.PlayScatterSound = function (e) {
                    switch (e) {
                      case 0:
                        break;
                      case 1:
                        node$1.Play(Game_Define.AudioClips.Scatter1);
                        break;
                      case 2:
                        node$1.Play(Game_Define.AudioClips.Scatter2);
                        break;
                      case 3:
                        node$1.Play(Game_Define.AudioClips.Scatter3);
                        break;
                      case 4:
                        node$1.Play(Game_Define.AudioClips.Scatter4);
                        break;
                      case 5:
                        node$1.Play(Game_Define.AudioClips.Scatter5);
                    }
                  }),
                  (i.SendVerificationEvent = function (e, t) {
                    if (node$3.APP) {
                      var i = node.GetLinkParameterByName("ssoKey") || "",
                        n = "";
                      this.m_spinAck && (n = this.m_spinAck.ShowIndex),
                        node$d.SendVerificationEvent(
                          node$d.FormVerificationEventParams(
                            Number(node$3.APP.GetAID()),
                            Number(node$3.NOW_GAME_ID),
                            Game_Define.Ver,
                            e,
                            t,
                            i,
                            node$3.APP.GetAID(),
                            n
                          )
                        );
                    }
                  }),
                  (i.GetSpinInfo = function () {
                    return null;
                  }),
                  (i.CancelSpin = function () {
                    this.SyncPlate();
                  }),
                  (i.RetryRoundEnd = function () {
                    node$3.IsInMG()
                      ? node$b.ReqRoundEnd(1, !0)
                      : node$b.ReqRoundEnd(
                          this.m_roundIdx + 1,
                          this.m_roundIdx >=
                            this.m_spinAck.RoundQueue.length - 1
                        );
                  }),
                  (i.GetTotalWin = function () {
                    var e = node$l.GetAck();
                    return e.TotalWin ? e.TotalWin : 0;
                  }),
                  _createClass(t, [
                    {
                      key: "IntroNode",
                      get: function () {
                        return this.m_introSpine.node;
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
                      key: "TitleNodeS",
                      get: function () {
                        return this.m_titleNodeS;
                      },
                    },
                    {
                      key: "WinValueLabel",
                      get: function () {
                        return this.m_winValueLabel;
                      },
                    },
                    {
                      key: "WinFxShowSpine",
                      get: function () {
                        return this.m_winFxShowSpine;
                      },
                    },
                    {
                      key: "Pharaoh",
                      get: function () {
                        return this.m_pharaoh;
                      },
                    },
                    {
                      key: "BigWin",
                      get: function () {
                        return this.m_bigWin;
                      },
                    },
                    {
                      key: "Manual",
                      get: function () {
                        return this.m_manual;
                      },
                    },
                    {
                      key: "ManualInfoActive",
                      set: function (e) {
                        e || this.m_manual.CloseManul(),
                          (this.m_manual.FeatureInfoBtn.active = e);
                      },
                    },
                    {
                      key: "MultiReels",
                      get: function () {
                        return this.m_multiReels;
                      },
                    },
                    {
                      key: "MultiReelsS",
                      get: function () {
                        return this.m_multiReelsS;
                      },
                    },
                    {
                      key: "MultiBar",
                      get: function () {
                        return this.m_multiBar;
                      },
                    },
                    {
                      key: "NearWinEffectNode",
                      get: function () {
                        return this.m_nearWinEffectNode;
                      },
                    },
                    {
                      key: "FgDeclareSpine",
                      get: function () {
                        return this.m_fgDeclareSpine;
                      },
                    },
                    {
                      key: "FgCompliment",
                      get: function () {
                        return this.m_fgCompliment;
                      },
                    },
                    {
                      key: "MoreFgSpine",
                      get: function () {
                        return this.m_moreFgSpine;
                      },
                    },
                    {
                      key: "MoreFgTimesLabel",
                      get: function () {
                        return this.m_moreFgTimesLabel;
                      },
                    },
                    {
                      key: "FgCounter",
                      get: function () {
                        return this.m_fgCounter;
                      },
                    },
                    {
                      key: "FgCounterS",
                      get: function () {
                        return this.m_fgCounterS;
                      },
                    },
                    {
                      key: "IsInFG",
                      get: function () {
                        return this.m_isInFG;
                      },
                      set: function (e) {
                        this.m_isInFG = e;
                      },
                    },
                    {
                      key: "IsHardStop",
                      get: function () {
                        return this.m_isHardStop;
                      },
                    },
                    {
                      key: "IsLandscape",
                      get: function () {
                        return this.m_isLandscape;
                      },
                    },
                    {
                      key: "IsRotationLock",
                      set: function (e) {
                        this.m_isRotationLock = e;
                      },
                    },
                    {
                      key: "IsChange",
                      get: function () {
                        return this.m_isChange;
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
                      key: "RoundIdx",
                      get: function () {
                        return this.m_roundIdx;
                      },
                      set: function (e) {
                        this.m_roundIdx = e;
                      },
                    },
                    {
                      key: "CanSpaceStop",
                      set: function (e) {
                        this.m_canSpaceStop = e;
                      },
                    },
                    {
                      key: "CanPlateStop",
                      set: function (e) {
                        this.m_canPlateStop = e;
                      },
                    },
                    {
                      key: "BgmId",
                      get: function () {
                        return this.m_bgmId;
                      },
                      set: function (e) {
                        this.m_bgmId = e;
                      },
                    },
                    {
                      key: "IsSpined",
                      get: function () {
                        return this.m_isSpined;
                      },
                      set: function (e) {
                        this.m_isSpined = e;
                      },
                    },
                    {
                      key: "Win",
                      get: function () {
                        return this.m_win;
                      },
                      set: function (e) {
                        this.m_win = e;
                      },
                    },
                    {
                      key: "HasScatterCol",
                      get: function () {
                        return this.m_hasScatterCol;
                      },
                      set: function (e) {
                        this.m_hasScatterCol = e;
                      },
                    },
                    {
                      key: "HasNudgeCol",
                      get: function () {
                        return this.m_hasNudgeCol;
                      },
                      set: function (e) {
                        this.m_hasNudgeCol = e;
                      },
                    },
                    {
                      key: "HasNudge",
                      get: function () {
                        return this.m_hasNudge;
                      },
                      set: function (e) {
                        this.m_hasNudge = e;
                      },
                    },
                    {
                      key: "FgLastRound",
                      get: function () {
                        return this.m_fgLastRound;
                      },
                      set: function (e) {
                        this.m_fgLastRound = e;
                      },
                    },
                    {
                      key: "StartNearWinCol",
                      get: function () {
                        return this.m_startNearWinCol;
                      },
                      set: function (e) {
                        this.m_startNearWinCol = e;
                      },
                    },
                    {
                      key: "IsNearWinCols",
                      get: function () {
                        return this.m_isNearWinCols;
                      },
                      set: function (e) {
                        this.m_isNearWinCols = e;
                      },
                    },
                    {
                      key: "OldRealPlate",
                      get: function () {
                        return this.m_oldRealPlate;
                      },
                      set: function (e) {
                        this.m_oldRealPlate = e;
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
              (_descriptor$h = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_introSpine",
                [_dec$z],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor2$c = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_mainAnim",
                [_dec2$h],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor3$8 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_slotReels",
                [_dec3$a],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor4$5 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_effectPlate",
                [_dec4$5],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor5$5 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_barNode",
                [_dec5$5],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor6$5 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_plateSpineBtn",
                [_dec6$5],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor7$4 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_freePlateSpineBtn",
                [_dec7$5],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor8$3 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_titleNodeS",
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
              (_descriptor9$3 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_titleSpriteAtlas",
                [_dec9$3],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor10$3 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_winValueLabel",
                [_dec10$3],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor11$3 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_winFxShowSpine",
                [_dec11$3],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor12$3 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_winButtomNode",
                [_dec12$3],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor13 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_pharaoh",
                [_dec13$1],
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
                _class2$i.prototype,
                "m_bigWin",
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
                _class2$i.prototype,
                "m_MgBackGroundNodeL",
                [_dec15],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor16 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_MgBackGroundNodeS",
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
                _class2$i.prototype,
                "m_FgBackGroundNodeL",
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
                _class2$i.prototype,
                "m_FgBackGroundNodeS",
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
                _class2$i.prototype,
                "m_manual",
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
                _class2$i.prototype,
                "m_manualBtn",
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
              (_descriptor21 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_multiReels",
                [_dec21],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor22 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_multiReelsS",
                [_dec22],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor23 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_multiBar",
                [_dec23],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor24 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_nearWinEffectNode",
                [_dec24],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor25 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_fgDeclareSpine",
                [_dec25],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor26 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_fgCompliment",
                [_dec26],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor27 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_moreFgSpine",
                [_dec27],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor28 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_moreFgTimesLabel",
                [_dec28],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor29 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_fgCounter",
                [_dec29],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor30 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_fgCounterS",
                [_dec30],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_class$A = _class2$i))
            ) || _class$A),
          _dec$A,
          _dec2$i,
          _class$B,
          _class2$j,
          _descriptor$i;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "483deQhvb5CK7Rr7YTOINx3",
            "BackGroundSpine",
            void 0
          );
        var ccclass$B = _decorator.ccclass,
          property$j = _decorator.property,
          BackGroundSpine =
            ((_dec$A = ccclass$B("BackGroundSpine")),
            (_dec2$i = property$j({ type: sp.Skeleton, tooltip: "Spine" })),
            _dec$A(
              ((_class2$j = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, n = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    n[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_spine",
                      _descriptor$i,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var i = t.prototype;
                return (
                  (i.ShowBackGround = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, i) {
                        return _regeneratorRuntime().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t, i) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (i.PlayAnimation = function (e, t) {
                    var i = this;
                    return (
                      void 0 === t && (t = !1),
                      new Promise(function (n) {
                        i.m_spine.clearTrack(0), i.m_spine.setToSetupPose();
                        var r = i.m_spine.setAnimation(0, e, t);
                        r
                          ? i.m_spine.setTrackCompleteListener(r, function () {
                              n();
                            })
                          : i.m_spine.setCompleteListener(function () {
                              n();
                            });
                      })
                    );
                  }),
                  t
                );
              })(Component)),
              (_descriptor$i = _applyDecoratedDescriptor(
                _class2$j.prototype,
                "m_spine",
                [_dec2$i],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_class$B = _class2$j))
            ) || _class$B);
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
