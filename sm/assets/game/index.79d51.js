System.register(
  "chunks:///game.js",
  ["./index-af7e36be.js", "cc"],
  function (exports, module) {
    "use strict";
    var _applyDecoratedDescriptor,
      _inheritsLoose,
      _initializerDefineProperty,
      _assertThisInitialized,
      node,
      _createClass,
      _asyncToGenerator,
      _regeneratorRuntime,
      SpineKit,
      node$1,
      node$2,
      node$3,
      SwitchOffKeyDefine,
      node$4,
      node$5,
      CommonState,
      node$6,
      node$7,
      BaseState,
      BigWinComponent,
      SlotBottomBarState,
      node$8,
      Common_IdleState,
      node$9,
      node$a,
      node$b,
      node$c,
      CommonBuyBonus,
      ManualComponent,
      CommonBuyBonusCell,
      AstarteInit,
      node$d,
      node$e,
      CommonEventName,
      node$f,
      node$g,
      node$h,
      node$i,
      node$j,
      node$k,
      BottomBar_UIName,
      BetValueChange,
      cclegacy,
      Enum,
      _decorator,
      sp,
      Label,
      Component,
      Sprite,
      CCString,
      Node,
      Animation,
      tween,
      v3,
      Button,
      color,
      log,
      UIOpacity,
      SpriteFrame,
      UITransform,
      Size,
      UIRenderer,
      Vec3,
      error,
      instantiate,
      Prefab,
      Font,
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
          (_applyDecoratedDescriptor = e._),
            (_inheritsLoose = e.a),
            (_initializerDefineProperty = e.b),
            (_assertThisInitialized = e.c),
            (node = e.g),
            (_createClass = e.d),
            (_asyncToGenerator = e.l),
            (_regeneratorRuntime = e.q),
            (SpineKit = e.t),
            (node$1 = e.i),
            (node$2 = e.e),
            (node$3 = e.f),
            (SwitchOffKeyDefine = e.S),
            (node$4 = e.h),
            (node$5 = e.m),
            (CommonState = e.C),
            (node$6 = e.k),
            (node$7 = e.u),
            (BaseState = e.B),
            (BigWinComponent = e.v),
            (SlotBottomBarState = e.r),
            (node$8 = e.p),
            (Common_IdleState = e.w),
            (node$9 = e.x),
            (node$a = e.y),
            (node$b = e.z),
            (node$c = e.A),
            (CommonBuyBonus = e.D),
            (ManualComponent = e.M),
            (CommonBuyBonusCell = e.E),
            (AstarteInit = e.F),
            (node$d = e.G),
            (node$e = e.H),
            (CommonEventName = e.I),
            (node$f = e.J),
            (node$g = e.K),
            (node$h = e.L),
            (node$i = e.o),
            (node$j = e.N),
            (node$k = e.O),
            (BottomBar_UIName = e.P),
            (BetValueChange = e.Q);
        },
        function (e) {
          (cclegacy = e.cclegacy),
            (Enum = e.Enum),
            (_decorator = e._decorator),
            (sp = e.sp),
            (Label = e.Label),
            (Component = e.Component),
            (Sprite = e.Sprite),
            (CCString = e.CCString),
            (Node = e.Node),
            (Animation = e.Animation),
            (tween = e.tween),
            (v3 = e.v3),
            (Button = e.Button),
            (color = e.color),
            (log = e.log),
            (UIOpacity = e.UIOpacity),
            (SpriteFrame = e.SpriteFrame),
            (UITransform = e.UITransform),
            (Size = e.Size),
            (UIRenderer = e.UIRenderer),
            (Vec3 = e.Vec3),
            (error = e.error),
            (instantiate = e.instantiate),
            (Prefab = e.Prefab),
            (Font = e.Font),
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
        var GAMEVIEW_STATE,
          Symbol,
          SelectSymbol,
          SpecialSymbol,
          CoinSymbol,
          AwardTypeFlag,
          Column,
          BetIndex;
        cclegacy._RF.push({}, "9dd5bYB55dAuZ3OEHzuRcIs", "Game_Define", void 0),
          (function (e) {
            (e[(e.WAIT_READY = 0)] = "WAIT_READY"),
              (e[(e.FEATURE_SHOW = 1)] = "FEATURE_SHOW"),
              (e[(e.UNSHOW_PREPARE = 2)] = "UNSHOW_PREPARE"),
              (e[(e.PLATE_SHOW = 3)] = "PLATE_SHOW"),
              (e[(e.IDLE = 4)] = "IDLE"),
              (e[(e.SPIN = 5)] = "SPIN"),
              (e[(e.REAL_SPIN = 6)] = "REAL_SPIN"),
              (e[(e.MYSTERY = 7)] = "MYSTERY"),
              (e[(e.GOLDEN_LION = 8)] = "GOLDEN_LION"),
              (e[(e.SINGLE_SPIN = 9)] = "SINGLE_SPIN"),
              (e[(e.CONVERT = 10)] = "CONVERT"),
              (e[(e.MULTIPLY = 11)] = "MULTIPLY"),
              (e[(e.COLLECT = 12)] = "COLLECT"),
              (e[(e.ENTER_FREE = 13)] = "ENTER_FREE"),
              (e[(e.LEAVE_FREE = 14)] = "LEAVE_FREE"),
              (e[(e.LINE_AWARD = 15)] = "LINE_AWARD"),
              (e[(e.AWARD = 16)] = "AWARD"),
              (e[(e.NUDGE_UP = 17)] = "NUDGE_UP"),
              (e[(e.ROUND_SHOW_END = 18)] = "ROUND_SHOW_END"),
              (e[(e.ROUND_END = 19)] = "ROUND_END");
          })(GAMEVIEW_STATE || (GAMEVIEW_STATE = {})),
          (function (e) {
            (e[(e.Symbol_00 = 0)] = "Symbol_00"),
              (e[(e.Symbol_01 = 1)] = "Symbol_01"),
              (e[(e.Symbol_02 = 2)] = "Symbol_02"),
              (e[(e.Symbol_03 = 3)] = "Symbol_03"),
              (e[(e.Symbol_04 = 4)] = "Symbol_04"),
              (e[(e.Symbol_05 = 5)] = "Symbol_05"),
              (e[(e.Symbol_06 = 6)] = "Symbol_06"),
              (e[(e.Symbol_07 = 7)] = "Symbol_07"),
              (e[(e.Symbol_Wild = 8)] = "Symbol_Wild"),
              (e[(e.Symbol_Scatter = 9)] = "Symbol_Scatter"),
              (e[(e.Symbol_Mystery = 10)] = "Symbol_Mystery"),
              (e[(e.Symbol_GlodenLion = 11)] = "Symbol_GlodenLion"),
              (e[(e.Symbol_Mystery_LeverUp = 12)] = "Symbol_Mystery_LeverUp");
          })(Symbol || (Symbol = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.Select_Frame = 1)] = "Select_Frame");
          })(SelectSymbol || (SelectSymbol = {})),
          (function (e) {
            (e[(e.Symbol_Bronze_Coin = 12)] = "Symbol_Bronze_Coin"),
              (e[(e.Symbol_Multiplier = 13)] = "Symbol_Multiplier"),
              (e[(e.Symbol_Collector = 14)] = "Symbol_Collector"),
              (e[(e.Symbol_Converter = 15)] = "Symbol_Converter"),
              (e[(e.Symbol_NudgeUp = 16)] = "Symbol_NudgeUp"),
              (e[(e.Symbol_Silver_Coin = 17)] = "Symbol_Silver_Coin"),
              (e[(e.Symbol_Gold_Coin = 18)] = "Symbol_Gold_Coin"),
              (e[(e.Symbol_Super_Coin = 19)] = "Symbol_Super_Coin");
          })(SpecialSymbol || (SpecialSymbol = {})),
          (function (e) {
            (e[(e.Bronze = 0)] = "Bronze"),
              (e[(e.Silver = 1)] = "Silver"),
              (e[(e.Gold = 2)] = "Gold"),
              (e[(e.Super = 3)] = "Super");
          })(CoinSymbol || (CoinSymbol = {})),
          (function (e) {
            (e[(e.AwardTypeNon = 0)] = "AwardTypeNon"),
              (e[(e.AwardTypeLine = 1)] = "AwardTypeLine"),
              (e[(e.AwardTypeGolden = 2)] = "AwardTypeGolden"),
              (e[(e.AwardTypeGetFree = 4)] = "AwardTypeGetFree"),
              (e[(e.AwardTypeInFree = 8)] = "AwardTypeInFree"),
              (e[(e.AwardTypeLeaveFree = 16)] = "AwardTypeLeaveFree"),
              (e[(e.AwardTypeGetFreeInFree = 32)] = "AwardTypeGetFreeInFree");
          })(AwardTypeFlag || (AwardTypeFlag = {})),
          (function (e) {
            (e[(e.First = 0)] = "First"),
              (e[(e.Second = 1)] = "Second"),
              (e[(e.Third = 2)] = "Third"),
              (e[(e.Forth = 3)] = "Forth"),
              (e[(e.Fifth = 4)] = "Fifth");
          })(Column || (Column = {})),
          (function (e) {
            (e[(e.First = 0)] = "First"),
              (e[(e.Second = 1)] = "Second"),
              (e[(e.Third = 2)] = "Third"),
              (e[(e.Fourth = 3)] = "Fourth"),
              (e[(e.Fifth = 4)] = "Fifth");
          })(BetIndex || (BetIndex = {}));
        var Game_Define = function () {},
          _dec,
          _dec2,
          _class,
          _class2,
          _descriptor,
          _descriptor2;
        (Game_Define.Ver = "53"),
          (Game_Define.CHILI_NUM = 4),
          (Game_Define.Column = Enum(Column)),
          (Game_Define.Symbol = Enum(Symbol)),
          (Game_Define.SelectSymbol = Enum(SelectSymbol)),
          (Game_Define.SpecialSymbol = Enum(SpecialSymbol)),
          (Game_Define.CoinSymbol = Enum(CoinSymbol)),
          (Game_Define.BetIndex = Enum(BetIndex)),
          (Game_Define.GameState = Enum(GAMEVIEW_STATE)),
          (Game_Define.AwardTypeFlag = Enum(AwardTypeFlag)),
          (Game_Define.COL = 5),
          (Game_Define.ROW = 5),
          (Game_Define.MaxSymbolEachColumn = 5),
          (Game_Define.MinSymbolEachColumn = 5),
          (Game_Define.SmallAward = [2, 4, 6]),
          (Game_Define.RoundIdx = 0),
          (Game_Define.ComboIdx = 0),
          (Game_Define.EnteredGLState = !1),
          (Game_Define.IsNudgeUp = !1),
          (Game_Define.CurrrentCoinPlate = null),
          (Game_Define.FGAllWins = 1),
          (Game_Define.MGAllWins = 1),
          (Game_Define.LastLockColumn = [!1, !1, !1, !1, !1]),
          (Game_Define.LastBottomRow = [-1, -1, -1, -1, -1]),
          (Game_Define.LastTopRow = [-1, -1, -1, -1, -1]),
          (Game_Define.LastSelectPlate = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ]),
          (Game_Define.OldPlateInfo = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ]),
          (Game_Define.CurrentLevelUpNum = 0),
          (Game_Define.LastPlate = null),
          (Game_Define.LastGoldPos = null),
          (Game_Define.IsJustReset = !1),
          (Game_Define.IsSetInfoOk = !1),
          (Game_Define.BetInfos = {}),
          (Game_Define.ScatterCount = 0),
          (Game_Define.IsAllGoldLion = !1),
          (Game_Define.CollectSpeed = 5),
          (Game_Define.IsGetSpinAck = !1),
          (Game_Define.IsInFG = !1),
          (Game_Define.IsHardStop = !1),
          (Game_Define.IsInBuyBonus = !1),
          (Game_Define.CanNotSaveInfo = !1),
          (Game_Define.IsUnshow = !1),
          (Game_Define.StringKey = {
            FEATURE_LEFT: "FEATURE_LEFT",
            FEATURE_RIGHT: "FEATURE_RIGHT",
          }),
          (Game_Define.INIT_PLATE = [
            [8, 8, 8, 8, 8],
            [7, 7, 7, 7, 7],
            [6, 6, 6, 6, 6],
            [5, 5, 5, 5, 5],
            [4, 4, 4, 4, 4],
          ]),
          (Game_Define.SYMBOL_LINE_VEC = [
            [4, 9, 14, 19, 24],
            [3, 8, 13, 18, 23],
            [2, 7, 12, 17, 22],
            [1, 6, 11, 16, 21],
            [0, 5, 10, 15, 20],
            [4, 8, 14, 18, 24],
            [3, 7, 13, 17, 23],
            [2, 6, 12, 16, 22],
            [1, 5, 11, 15, 21],
            [3, 9, 13, 19, 23],
            [2, 8, 12, 18, 22],
            [1, 7, 11, 17, 21],
            [0, 6, 10, 16, 20],
            [4, 8, 12, 18, 24],
            [3, 7, 11, 17, 23],
            [2, 6, 10, 16, 22],
            [2, 8, 14, 18, 22],
            [1, 7, 13, 17, 21],
            [0, 6, 12, 16, 20],
            [4, 8, 12, 16, 20],
            [0, 6, 12, 18, 24],
            [4, 8, 13, 18, 24],
            [3, 7, 12, 17, 23],
            [2, 6, 11, 16, 22],
            [1, 5, 10, 15, 21],
            [3, 9, 14, 19, 23],
            [2, 8, 13, 18, 22],
            [1, 7, 12, 17, 21],
            [0, 6, 11, 16, 20],
            [4, 7, 14, 17, 24],
            [3, 6, 13, 16, 23],
            [2, 5, 12, 15, 22],
            [2, 9, 12, 19, 22],
            [1, 8, 11, 18, 21],
            [0, 7, 10, 17, 20],
            [4, 9, 13, 19, 24],
            [3, 8, 12, 18, 23],
            [2, 7, 11, 17, 22],
            [1, 6, 10, 16, 21],
            [3, 8, 14, 18, 23],
          ]),
          (Game_Define.EFFECT_ZINDEX = {
            NORMAL: 0,
            WILD: 50,
            MYSTERY: 100,
            GOLD_FRAME: 150,
            GOLD_LION: 200,
            COIN: 250,
            MULTIPLIER: 300,
            COLLECTOR: 350,
            CONVERTER: 400,
            NUDGE_UP: 450,
            SCATTER: 500,
            FLY_COIN: 550,
            FLY_MYSTERY: 600,
          }),
          (Game_Define.SPECIAL_SYMBOL_WEIGHT = {
            9: 1,
            12: 90,
            13: 4,
            14: 2,
            15: 2,
            16: 1,
          }),
          (Game_Define.COIN_SYMBOL_WEIGHT = { 0: 75, 1: 15, 2: 7, 3: 3 }),
          (Game_Define.COIN_LEVEL = {
            Bronze: 1,
            Silver: 10,
            Gold: 50,
            Super: 250,
          }),
          (Game_Define.AWARD_SETTING = [
            { BetRate: 6, Lv1: 1 },
            { BetRate: 15, Lv1: 2 },
            { BetRate: 30, Lv1: 3 },
          ]),
          (Game_Define.BigWinEventName = "AnimationEvent"),
          (Game_Define.BigWinSound1 = "Sound1"),
          (Game_Define.BigWinSound2 = "Sound2"),
          (Game_Define.BigWinStartAnimName = "BigWin_Start"),
          (Game_Define.DELAY = {
            SMALL_WIN: 0.5,
            SYMBOL_WIN: 1.5,
            NUDGE_TIME: 0.5,
            SELECT_FRAME_FADE_TIME: 0.5,
            WAIT_FOR_NUDGE: 0.05,
            NUDGE_UP: 3,
            YELLOW_MYSTERY_FLY: 0.4,
          }),
          (Game_Define.NON_MYSTERY_SELECT_PROBABILITY = 0.5),
          (Game_Define.ShakeWorld = { SPEED: 0.04, DELTA: 2.5, TIMES: 10 }),
          (Game_Define.AudioPathPre = "Sound/"),
          (Game_Define.AudioClips = {
            Debut: null,
            BGM_MG: null,
            Near_Win: null,
            Scatter_01: null,
            Scatter_02: null,
            Scatter_03: null,
            Scatter_04: null,
            Scatter_05: null,
            Scatter_Bell: null,
            BG_Appear: null,
            BGM_BG: null,
            BG_End: null,
            Multiplier_Up: null,
            Win_Show: null,
            Small_Win_01: null,
            Small_Win_02: null,
            Small_Win_03: null,
            Big_Win: null,
            Big_Win_Change: null,
            Big_Win_End: null,
            Multiplier_Get: null,
            Mystery_Appear_01: null,
            Mystery_Appear_02: null,
            Mystery_Appear_03: null,
            Mystery_Appear_04: null,
            Mystery_Appear_05: null,
            Mystery_Open: null,
            Mystery_Close: null,
            Frame_On: null,
            GLion_Appear: null,
            GLion_Appear_Change: null,
            Coin_Appear_01: null,
            Coin_Appear_02: null,
            Coin_Appear_03: null,
            Coin_Appear_04: null,
            Coin_Appear_Multiplier: null,
            Coin_Appear_Collector: null,
            Coin_Appear_Converter: null,
            Coin_Appear_NugdeUp: null,
            BGM_GLion: null,
            Reel_Spin: null,
            Reel_Stop: null,
            Collect_Fly: null,
            Coin_Multiplier_Show: null,
            Coin_Appear_Collector_Change: null,
            Coin_Appear_Collector_Change_B: null,
            Coin_Converter_Select: null,
            Coin_Converter_Show: null,
            Coin_Converter_Change: null,
            Coin_NugdeUp_Show: null,
            Coin_NugdeUp: null,
            Lion_Roar: null,
            Reel_Recovery: null,
            Shock: null,
          }),
          (Game_Define.DebugMode = !1),
          (Game_Define.DebugSpeed = 5),
          (Game_Define.DebugSpinSpeed = 5),
          (Game_Define.EVENT_ID = { POSITION_ERROR: 2e3, SYMBOL_ERROR: 2001 }),
          (Game_Define.SPINACK_TEST = {
            RoundQueue: [
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [10, 10, 10, 10, 10] },
                      { Col: [10, 10, 10, 10, 10] },
                      { Col: [10, 10, 10, 10, 10] },
                      { Col: [10, 10, 10, 10, 10] },
                      { Col: [10, 10, 10, 10, 10] },
                    ],
                    AwardDataVec: [],
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [12, 12, 12, 12, 12] },
                      { Col: [12, 12, 12, 9, 13] },
                      { Col: [12, 12, 12, 12, 12] },
                      { Col: [12, 9, 12, 12, 12] },
                      { Col: [12, 12, 12, 12, 12] },
                    ],
                    AwardDataVec: [],
                    MysteryGolden: {
                      CoinMul: [
                        { Colm: [4, 4, 4, 2, 2] },
                        { Colm: [2, 4, 4, 0, 0] },
                        { Colm: [4, 2, 4, 2, 2] },
                        { Colm: [4, 0, 2, 2, 2] },
                        { Colm: [2, 4, 4, 20, 2] },
                      ],
                      Mult: [{ Pos: 9, Mul: 2 }],
                      Collector: [],
                      Convert: [],
                      GoldenType: 1,
                    },
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [12, 12, 12, 12, 12] },
                      { Col: [12, 12, 12, 9, 12] },
                      { Col: [12, 12, 12, 12, 12] },
                      { Col: [12, 9, 12, 12, 12] },
                      { Col: [12, 12, 12, 12, 12] },
                    ],
                    AwardDataVec: [],
                    ComboStageWin: 84,
                    GoldenWin: 84,
                    MysteryGolden: {
                      CoinMul: [
                        { Colm: [4, 4, 4, 2, 2] },
                        { Colm: [2, 4, 4, 0, 2] },
                        { Colm: [4, 2, 4, 2, 2] },
                        { Colm: [4, 0, 2, 2, 2] },
                        { Colm: [2, 4, 4, 20, 2] },
                      ],
                      Mult: [],
                      Collector: [],
                      Convert: [],
                      GoldenType: 1,
                    },
                  },
                ],
                GoldPos: [],
                PatternPos: [
                  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                  18, 19, 20, 21, 22, 23, 24,
                ],
                RoundWin: 84,
                MysterySymbol: 11,
                FinalMult: 1,
                ScatterCount: 2,
                AwardTypeFlag: 2,
              },
            ],
            TotalWin: 84,
            RTP: 0.97,
            IsBuy: !0,
          }),
          cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "0e946dsAitL95+7CQblNzwe",
            "AllWinsCounter",
            void 0
          );
        var AnimName = {
            MG: "MG",
            MG_Change: "MG_Change",
            MG_Start_L: "MG_Start_L",
            MG_Start_S: "MG_Start_S",
            MG_win: "MG_win",
            SB_Change: "SB_Change",
            SB_Collect: "SB_Collect",
            SB: "SB",
            SB_PlusOne: "SB+1",
          },
          EventName = { Change: "Change" },
          ccclass = _decorator.ccclass,
          property = _decorator.property,
          AllWinsCounter =
            ((_dec = property({ type: sp.Skeleton, tooltip: "spine" })),
            (_dec2 = property({ type: Label, tooltip: "乘倍" })),
            ccclass(
              ((_class2 = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(i)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_spine",
                      _descriptor,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_multiLabel",
                      _descriptor2,
                      _assertThisInitialized(t)
                    ),
                    (t.m_gameView = null),
                    (t.m_eventMap = {}),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.Init = function (e) {
                    var t = this;
                    (this.m_gameView = e),
                      this.SetEventMap(EventName.Change, function () {
                        var e =
                          t.m_gameView.SpinAck.RoundQueue[Game_Define.RoundIdx]
                            .FinalMult;
                        (t.m_multiLabel.string = "X" + e.toString()),
                          Game_Define.IsInFG
                            ? (Game_Define.FGAllWins = e)
                            : (Game_Define.MGAllWins = e),
                          node.Play(Game_Define.AudioClips.Multiplier_Up);
                      });
                  }),
                  (n.SetEventMap = function (e, t) {
                    this.m_eventMap[e] = t;
                  }),
                  (n.PlayMG = function () {
                    this.PlayAnimation(AnimName.MG);
                  }),
                  (n.PlayWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (!Game_Define.IsInFG) {
                                    e.next = 5;
                                    break;
                                  }
                                  return (
                                    (e.next = 3),
                                    this.PlayAnimation(AnimName.SB_Collect)
                                  );
                                case 3:
                                  e.next = 7;
                                  break;
                                case 5:
                                  return (
                                    (e.next = 7),
                                    this.PlayAnimation(AnimName.MG_win)
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
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.PlayPlusOne = function () {
                    this.PlayAnimation(AnimName.SB_PlusOne);
                  }),
                  (n.SetMultiLabel = function (e) {
                    this.m_multiLabel.string = "X" + e.toString();
                  }),
                  (n.PlaySBChange = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName.SB_Change)
                                  );
                                case 2:
                                  this.PlayAnimation(AnimName.SB);
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
                  (n.PlayMGChange = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName.MG_Change)
                                  );
                                case 2:
                                  this.PlayAnimation(AnimName.MG);
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
                  (n.PlayAnimation = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n, i, o, r) {
                        var a = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === n && (n = !1),
                                    void 0 === i && (i = 0),
                                    void 0 === o && (o = "default"),
                                    void 0 === r && (r = !0),
                                    this.m_spine.setSkin(o),
                                    (e.next = 7),
                                    SpineKit.PlayAnimation(
                                      this.m_spine,
                                      t,
                                      n,
                                      i,
                                      function (e) {
                                        !a.m_eventMap[e] ||
                                          (t != AnimName.SB_Collect &&
                                            t != AnimName.MG_win) ||
                                          a.m_eventMap[e]();
                                      },
                                      r
                                    )
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
                    return function (t, n, i, o, r) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  _createClass(t, [
                    {
                      key: "MultiLabel",
                      get: function () {
                        return this.m_multiLabel;
                      },
                    },
                  ]),
                  t
                );
              })(Component)),
              (_descriptor = _applyDecoratedDescriptor(
                _class2.prototype,
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
                _class2.prototype,
                "m_multiLabel",
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
              (_class = _class2))
            ) || _class),
          _dec$1,
          _dec2$1,
          _dec3,
          _dec4,
          _dec5,
          _class$1,
          _class2$1,
          _descriptor$1,
          _descriptor2$1,
          _descriptor3,
          _descriptor4;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "59982IjbuxA0IQTmR4LMT31",
            "BuyBonusCell",
            void 0
          );
        var ccclass$1 = _decorator.ccclass,
          property$1 = _decorator.property,
          BuyBonusCell =
            ((_dec$1 = ccclass$1("BuyBonusCell")),
            (_dec2$1 = property$1({ type: Sprite, tooltip: "購買文字" })),
            (_dec3 = property$1({ type: Sprite, tooltip: "項目標題" })),
            (_dec4 = property$1({ type: CCString, tooltip: "標題圖片名稱" })),
            (_dec5 = property$1({ type: Label, tooltip: "金額" })),
            _dec$1(
              ((_class2$1 = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(i)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_buyHintSprite",
                      _descriptor$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_titleSprite",
                      _descriptor2$1,
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
                var n = t.prototype;
                return (
                  (n.start = function () {
                    var e = node$1.GetGameAtlas();
                    node$1.CurrLang !== node$2.Lang.EN &&
                      ((this.m_buyHintSprite.spriteFrame = e.getSpriteFrame(
                        "Txt_Buy_Feature_Buy"
                      )),
                      (this.m_titleSprite.spriteFrame = e.getSpriteFrame(
                        this.m_titlePicName
                      )));
                  }),
                  (n.SetPrice = function (e) {
                    this.m_priceLabel.string = e;
                  }),
                  t
                );
              })(Component)),
              (_descriptor$1 = _applyDecoratedDescriptor(
                _class2$1.prototype,
                "m_buyHintSprite",
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
                _class2$1.prototype,
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
                _class2$1.prototype,
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
              (_class$1 = _class2$1))
            ) || _class$1),
          _dec$2,
          _dec2$2,
          _dec3$1,
          _dec4$1,
          _dec5$1,
          _dec6,
          _dec7,
          _dec8,
          _dec9,
          _dec10,
          _class$2,
          _class2$2,
          _descriptor$2,
          _descriptor2$2,
          _descriptor3$1,
          _descriptor4$1,
          _descriptor5,
          _descriptor6,
          _descriptor7,
          _descriptor8,
          _descriptor9;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "223a833YIZEkJg3LFq5ar4r", "BuyBonus", void 0);
        var AnimName$1 = {
            Show: "Buy_Feature_Open",
            Hide: "Buy_Feature_Close",
          },
          SCALE_TIME = 0.05,
          ccclass$2 = _decorator.ccclass,
          property$2 = _decorator.property,
          BuyBonus =
            ((_dec$2 = ccclass$2("BuyBonus")),
            (_dec2$2 = property$2({ type: Node, tooltip: "介面" })),
            (_dec3$1 = property$2({
              type: Animation,
              tooltip: "介面開關動畫",
            })),
            (_dec4$1 = property$2({ type: Node, tooltip: "開啟按鈕節點" })),
            (_dec5$1 = property$2({ type: Label, tooltip: "押注金額" })),
            (_dec6 = property$2({ type: BuyBonusCell, tooltip: "購買項目" })),
            (_dec7 = property$2({ type: Sprite, tooltip: "標題" })),
            (_dec8 = property$2({ type: Sprite, tooltip: "押注" })),
            (_dec9 = property$2({ type: Node, tooltip: "全畫面關閉按鈕" })),
            (_dec10 = property$2({
              type: Sprite,
              tooltip: "紅寶石按鈕多語系",
            })),
            _dec$2(
              ((_class2$2 = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(i)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_viewNode",
                      _descriptor$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_anim",
                      _descriptor2$2,
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
                    _initializerDefineProperty(
                      t,
                      "m_btnScreenNode",
                      _descriptor8,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_buyBonusSprite",
                      _descriptor9,
                      _assertThisInitialized(t)
                    ),
                    (t.m_gameView = null),
                    (t.m_setting = null),
                    (t.m_betList = null),
                    (t.m_betIdx = 0),
                    (t.m_oldBetIdx = 0),
                    (t.m_bonusType = null),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.SetTxt = function () {
                    var e = node$1.GetGameAtlas();
                    (this.m_betSprite.spriteFrame = e.getSpriteFrame(
                      "Txt_Buy_Feature_Bet"
                    )),
                      (this.m_titleSprite.spriteFrame = e.getSpriteFrame(
                        "Txt_Buy_Feature_Title"
                      )),
                      (this.m_buyBonusSprite.spriteFrame =
                        e.getSpriteFrame("BuyBonus_IconName"));
                  }),
                  (n.Init = function (e, t) {
                    var n = this;
                    if (
                      !e ||
                      node$3.CheckSwitchOff(SwitchOffKeyDefine.ShopingMall)
                    )
                      return (
                        (this.m_viewNode.active = !1),
                        void this.SetBuyBtnVisible(!1)
                      );
                    (this.m_setting = e),
                      (this.m_gameView = t),
                      (this.m_betList = JSON.parse(
                        JSON.stringify(node$4.GetBetList())
                      ));
                    for (
                      var i = this.m_betList.length - 1;
                      i >= 0 && this.m_betList[i] > this.m_setting.MaxBet;
                      i--
                    )
                      this.m_betList.splice(i);
                    (this.m_betIdx = node$4.GetNowBetIndex()),
                      (!this.m_betList[this.m_betIdx] ||
                        this.m_betList[this.m_betIdx] >
                          this.m_betList[this.m_betList.length - 1]) &&
                        (this.m_betIdx = this.m_betList.length - 1),
                      this.SetPrice();
                    for (
                      var o = function (e) {
                          n.m_buyBonusCells[e]
                            .getComponent(Button)
                            .node.on(Node.EventType.TOUCH_END, function () {
                              if (
                                ((n.m_bonusType = e),
                                node$4.GetChips() < n.GetBuyBonusBetForTry())
                              ) {
                                var t = node$4.GetBetList();
                                node$3.strip(node$4.GetNowBetValue()) ==
                                  node$3.strip(t[0]) ||
                                node$4.GetChips() < node$3.strip(t[0])
                                  ? node$6.ShowMessageBox(
                                      node$2.StringKey.MSGBOX_MONEY_NOT_ENOUGH
                                    )
                                  : node$6.ShowMessageBox(
                                      node$2.StringKey
                                        .MSGBOX_MONEY_NOT_ENOUGH_DOWN_BET
                                    );
                              } else 2 == e && (Game_Define.IsAllGoldLion = !0), node.Play(node$2.AudioClips.COMMON_BTN), n.Hide(), (n.m_oldBetIdx = node$4.GetNowBetIndex()), node$4.SetNowBet(n.m_betList[n.m_betIdx]), n.m_gameView.ClickSpin(), (Game_Define.IsInBuyBonus = !0), n.m_gameView.EffectPlate.CleanAllEffect(), n.m_gameView.KeepLastPlateInfo(), n.m_gameView.SlotReels.CleanLock(), (Game_Define.CurrentLevelUpNum = 0), n.m_gameView.AllWinsCounter.SetMultiLabel(1);
                            });
                        },
                        r = 0;
                      r < this.m_buyBonusCells.length;
                      r++
                    )
                      o(r);
                    (this.m_viewNode.active = !1),
                      this.m_openBtnNode.on(
                        Node.EventType.TOUCH_START,
                        function () {
                          tween(n.m_openBtnNode)
                            .to(SCALE_TIME, { scale: v3(0.9, 0.9, 1) })
                            .start();
                        }
                      ),
                      this.m_openBtnNode.on(
                        Node.EventType.TOUCH_CANCEL,
                        function () {
                          tween(n.m_openBtnNode)
                            .to(SCALE_TIME, { scale: v3(1, 1, 1) })
                            .start();
                        }
                      ),
                      this.m_openBtnNode.on(
                        Node.EventType.TOUCH_END,
                        function () {
                          tween(n.m_openBtnNode)
                            .to(SCALE_TIME, { scale: v3(1, 1, 1) })
                            .start();
                        }
                      );
                  }),
                  (n.GetBuyBonusBetForTry = function () {
                    return this.m_setting && null !== this.m_bonusType
                      ? node$3.times(
                          this.m_setting.PriceOdd[this.m_bonusType],
                          this.m_betList[this.m_betIdx]
                        )
                      : node$3.strip(node$4.GetNowBetValue());
                  }),
                  (n.SetPrice = function () {
                    var e = this.m_betList[this.m_betIdx];
                    this.m_betLabel.string =
                      "" +
                      node$2.DollarSymbol +
                      node$3.FormatNumberThousands(
                        e,
                        node$3.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                      );
                    for (var t = 0; t < this.m_buyBonusCells.length; t++) {
                      var n = node$3.times(e, this.m_setting.PriceOdd[t]);
                      this.m_buyBonusCells[t].SetPrice(
                        "" +
                          node$2.DollarSymbol +
                          node$3.FormatNumberThousands(
                            n,
                            node$3.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                          )
                      );
                    }
                  }),
                  (n.SetBuyBtnVisible = function (e) {
                    this.m_openBtnNode.active = !!this.m_setting && e;
                  }),
                  (n.GetBuyBtnVisible = function () {
                    return this.m_openBtnNode.active;
                  }),
                  (n.GetBuyBonusBet = function () {
                    return this.m_setting && null !== this.m_bonusType
                      ? node$3.times(
                          this.m_setting.PriceOdd[this.m_bonusType],
                          node$4.GetNowBetValue()
                        )
                      : node$3.strip(node$4.GetNowBetValue());
                  }),
                  (n.CleanInfo = function () {
                    this.m_bonusType = null;
                  }),
                  (n.Show = function () {
                    if (node$5.Current() === CommonState.IDLE) {
                      if (this.m_anim.getState(AnimName$1.Hide).isPlaying)
                        return;
                      node.Play(node$2.AudioClips.COMMON_BTN),
                        (this.m_viewNode.active = !0),
                        this.m_anim.play(AnimName$1.Show),
                        (this.m_btnScreenNode.active = !0);
                    } else
                      node$6.ShowMessageBox(
                        node$2.StringKey.FREEWINCASH_PLAYING1
                      );
                  }),
                  (n.Hide = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, n, i;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (!1 !== this.GetBuyBtnVisible()) {
                                    e.next = 4;
                                    break;
                                  }
                                  return (
                                    (this.m_viewNode.active = !1),
                                    (this.m_btnScreenNode.active = !1),
                                    e.abrupt("return")
                                  );
                                case 4:
                                  if (
                                    ((t = this.m_anim.getState(
                                      AnimName$1.Show
                                    )),
                                    (n = this.m_anim.getState(AnimName$1.Hide)),
                                    !t.isPlaying && !n.isPlaying)
                                  ) {
                                    e.next = 8;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 8:
                                  return (
                                    node.Play(node$2.AudioClips.COMMON_BTN),
                                    this.m_anim.play(AnimName$1.Hide),
                                    (i = this.m_anim.getState(AnimName$1.Hide)),
                                    (e.next = 13),
                                    node$2.Wait(this, i.duration)
                                  );
                                case 13:
                                  (this.m_viewNode.active = !1),
                                    (this.m_btnScreenNode.active = !1);
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
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.AddBet = function () {
                    this.m_betIdx + 1 > this.m_betList.length - 1 ||
                      (node.Play(node$2.AudioClips.COMMON_BTN),
                      this.m_betIdx++,
                      this.SetPrice());
                  }),
                  (n.SubBet = function () {
                    this.m_betIdx - 1 < 0 ||
                      (node.Play(node$2.AudioClips.COMMON_BTN),
                      this.m_betIdx--,
                      this.SetPrice());
                  }),
                  _createClass(t, [
                    {
                      key: "BetList",
                      get: function () {
                        return this.m_betList;
                      },
                    },
                    {
                      key: "OldBetIdx",
                      get: function () {
                        return this.m_oldBetIdx;
                      },
                    },
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
              (_descriptor$2 = _applyDecoratedDescriptor(
                _class2$2.prototype,
                "m_viewNode",
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
              (_descriptor2$2 = _applyDecoratedDescriptor(
                _class2$2.prototype,
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
                _class2$2.prototype,
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
                _class2$2.prototype,
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
                _class2$2.prototype,
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
                _class2$2.prototype,
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
                _class2$2.prototype,
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
              (_descriptor8 = _applyDecoratedDescriptor(
                _class2$2.prototype,
                "m_btnScreenNode",
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
                _class2$2.prototype,
                "m_buyBonusSprite",
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
              (_class$2 = _class2$2))
            ) || _class$2),
          _dec$3,
          _class$3;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "3d29ftYSalGUa5ErBgzzXje",
            "ColumnSymbol",
            void 0
          );
        var ccclass$3 = _decorator.ccclass,
          ColumnSymbol =
            ((_dec$3 = ccclass$3("ColumnSymbol")),
            _dec$3(
              (_class$3 = (function () {
                function e(e, t, n, i, o) {
                  void 0 === o && (o = !1),
                    (this.m_parentNode = null),
                    (this.m_symbolSprites = new Array()),
                    (this.m_selectSprites = new Array()),
                    (this.m_soltReels = null),
                    (this.m_symbols = []),
                    (this.m_name = ""),
                    (this.m_basePos = v3(0, 0, 0)),
                    (this.m_parentNode = e),
                    (this.m_soltReels = n),
                    log("");
                  for (var r = 0; r < Game_Define.ROW; ++r) {
                    var a = new Node();
                    (a.name = i + "_" + r), (a.layer = node$2.Layer2D);
                    var s = a.addComponent(Sprite);
                    a.addComponent(UIOpacity),
                      (s.type = Sprite.Type.SIMPLE),
                      (s.sizeMode = Sprite.SizeMode.RAW),
                      (s.trim = !1),
                      this.m_parentNode.addChild(a),
                      o
                        ? (this.m_selectSprites[r] = s)
                        : (this.m_symbolSprites[r] = s);
                  }
                }
                var t = e.prototype;
                return (
                  (t.SetSymbols = function (e) {
                    this.m_symbols = e;
                    for (var t = 0; t < this.m_symbolSprites.length; ++t)
                      t < e.length
                        ? ((this.m_symbolSprites[t].node.active = !0),
                          (this.m_symbolSprites[t].spriteFrame =
                            this.m_soltReels.GetSymbolSpriteFrame(e[t])),
                          this.m_symbolSprites[t].node.setPosition(
                            this.CalPosY(t)
                          ))
                        : (this.m_symbolSprites[t].node.active = !1);
                  }),
                  (t.SetSelectSymbols = function (e) {
                    for (var t = 0; t < this.m_selectSprites.length; ++t)
                      t < e.length
                        ? ((this.m_selectSprites[t].node.active = !0),
                          (this.m_selectSprites[t].spriteFrame =
                            this.m_soltReels.GetSelectSpriteFrame(e[t])),
                          this.m_selectSprites[t].node.setPosition(
                            this.CalPosY(t)
                          ))
                        : (this.m_selectSprites[t].node.active = !1);
                  }),
                  (t.ChangeSymbol = function (e, t) {
                    (this.m_symbolSprites[t].spriteFrame =
                      this.m_soltReels.GetSymbolSpriteFrame(e)),
                      (this.m_symbolSprites[t].node.active = !0);
                  }),
                  (t.SetPosition = function (e) {
                    this.m_basePos = e;
                    for (var t = 0; t < Game_Define.ROW; ++t) {
                      var n = this.CalPosY(t);
                      this.m_symbolSprites[t].node.setPosition(n);
                    }
                  }),
                  (t.SetSelectPosition = function (e) {
                    this.m_basePos = e;
                    for (var t = 0; t < Game_Define.ROW; ++t) {
                      var n = this.CalPosY(t);
                      this.m_selectSprites[t].node.setPosition(n);
                    }
                  }),
                  (t.SetPositionByTween = function (e, t) {
                    this.m_basePos = e;
                    for (var n = 0; n < this.m_symbols.length; ++n) {
                      var i = this.CalPosY(n);
                      tween(this.m_symbolSprites[n].node)
                        .to(t, { position: i }, { easing: "circOut" })
                        .start();
                    }
                  }),
                  (t.CalPosY = function (e) {
                    var t = this.m_basePos.clone();
                    return (
                      (t.y += (e + 0.5) * this.m_soltReels.SymbolSize.height), t
                    );
                  }),
                  (t.CalStopPosY = function (e) {
                    var t = v3(0, 0, 0);
                    return (
                      (t.y +=
                        (Game_Define.ROW - 2.5 - e + 0.5) *
                        this.m_soltReels.SymbolSize.height),
                      t
                    );
                  }),
                  (t.HideSymbol = function (e) {
                    this.m_symbolSprites[e].node.active = !1;
                  }),
                  (t.SetColumnVisiable = function (e) {
                    for (var t = 0; t < Game_Define.ROW; ++t)
                      this.m_symbolSprites[t].node.active = e;
                  }),
                  (t.SetSymbolDark = function (e, t) {
                    var n = t ? color(96, 96, 96) : color(255, 255, 255);
                    this.m_symbolSprites[e].color = n;
                  }),
                  (t.GetSymbolNode = function (e) {
                    return this.m_symbolSprites[e].node;
                  }),
                  (t.GetSelectNode = function (e) {
                    return this.m_selectSprites[e].node;
                  }),
                  _createClass(e, [
                    {
                      key: "Name",
                      get: function () {
                        return this.m_name;
                      },
                      set: function (e) {
                        this.m_name = e;
                      },
                    },
                  ]),
                  e
                );
              })())
            ) || _class$3),
          _dec$4,
          _dec2$3,
          _class$4,
          _class2$3,
          _descriptor$3,
          _descriptor2$3;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "9be2e2B6+ZN8pNznPKVGOJw", "SlotReels", void 0);
        var REEL_POSITION_OFFSET = [
            v3(0, 0),
            v3(0, 0),
            v3(0, 0),
            v3(0, 0),
            v3(0, 0),
          ],
          ccclass$4 = _decorator.ccclass,
          property$3 = _decorator.property,
          SlotReels =
            ((_dec$4 = property$3(SpriteFrame)),
            (_dec2$3 = property$3(SpriteFrame)),
            ccclass$4(
              ((_class2$3 = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(i)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_symbolSpriteFrames",
                      _descriptor$3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_selectSpriteFrames",
                      _descriptor2$3,
                      _assertThisInitialized(t)
                    ),
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
                    (t.m_plateInfo = [[], [], [], [], []]),
                    (t.m_selectPlateInfo = [[], [], [], [], []]),
                    (t.m_performSelectPlateInfo = [
                      [0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0],
                    ]),
                    (t.m_isChangeSymbol = new Map()),
                    (t.m_currentMoveLength = new Map()),
                    (t.m_isColStops = []),
                    (t.m_symbols = []),
                    (t.m_upperSymbols = []),
                    (t.m_lowerSymbols = []),
                    (t.m_symbolPos = [[], [], [], [], []]),
                    (t.m_upSymbolPos = new Array()),
                    (t.m_lowSymbolPos = new Array()),
                    (t.m_time = 0),
                    (t.m_stopTime = 0),
                    (t.m_reelStopTimes = new Array()),
                    (t.m_reelPreTimes = new Array()),
                    (t.m_riseTime = 0),
                    (t.m_totalLength = null),
                    (t.m_upLength = 0),
                    (t.m_downLength = 20),
                    (t.m_spinBufferTime01 = 0.1),
                    (t.m_spinBufferTime02 = 0.2),
                    (t.m_spinTime = 0.3),
                    (t.m_timesOfBaseSpin = 1),
                    (t.m_spinDelayTime = 0),
                    (t.m_spinIntervalTimes = 1),
                    (t.m_isChangeToFinalSymbol = new Array()),
                    (t.m_isStop = !1),
                    (t.m_isClickStopBtn = !1),
                    (t.m_lockColumn = [!1, !1, !1, !1, !1]),
                    (t.m_isPlaySymbolStop = [!1, !1, !1, !1, !1]),
                    (t.m_isPlaySound = [!1, !1, !1, !1, !1]),
                    (t.m_canPlayReelStopSound = !0),
                    (t.m_isPlaySpinSound = !1),
                    (t.m_reelSpinSoundId = -1),
                    (t.m_isStartNearWin = !1),
                    (t.m_isPlayNearWin = [!1, !1, !1, !1, !1]),
                    (t.m_secondScatterCol = -1),
                    (t.m_nearwinSpinTime = 1.7),
                    (t.m_isPlayLionNearWin = [!1, !1, !1, !1, !1]),
                    (t.m_fakeReel = [
                      [
                        10, 10, 10, 10, 10, 2, 6, 6, 3, 3, 3, 1, 7, 0, 5, 5, 1,
                        1, 4, 4, 4, 0, 0, 0, 0, 6, 6, 3, 3, 7, 7, 1, 1, 2, 2, 4,
                        4, 9, 2, 2, 2, 2, 1, 1, 5, 5, 5, 3, 3, 3, 3, 8, 2, 2, 2,
                        2, 4, 4, 4, 1, 1, 1, 1, 6, 6, 6, 6, 0, 0, 0, 2, 2, 1, 1,
                        3, 5, 5, 0, 0, 7, 7, 10, 10, 10, 10, 10, 3, 3, 3, 3, 3,
                        1, 1, 9, 2, 2, 2, 1, 1, 4, 4, 4, 2, 2, 0, 0, 0, 0, 1, 1,
                        1, 1, 7, 7, 0, 0, 5, 5, 5, 5, 8, 4, 4, 2, 2, 5, 5, 5, 0,
                        0, 2, 2, 8, 3, 3, 3, 3, 4, 4, 4, 4, 4, 6, 6, 6, 6, 1, 1,
                        3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 5, 5, 1, 1, 10, 10, 10,
                        10, 10, 2, 7, 7, 7, 7, 7, 0, 0, 0, 1, 1, 1, 1, 4, 4, 4,
                        4, 4, 0, 0, 0, 0, 6, 6, 6, 6, 1, 1, 5, 5, 5, 5, 3, 3, 8,
                        1, 1, 1, 5, 5, 5, 3, 3, 3, 3, 1, 8, 2, 2, 2, 2, 4, 4, 4,
                        0, 0, 0, 0, 5, 5, 5, 5, 1, 1, 0, 0, 6, 6, 6, 3, 4, 4, 2,
                        2, 7, 7, 4, 4, 4, 2, 9, 0, 0, 0, 0, 5, 5, 1, 1, 1, 0, 0,
                        0, 5, 5, 3, 3, 8, 4, 4, 3, 3, 5, 5, 5, 2, 2, 2, 2, 2, 2,
                        7, 7, 7, 7, 3, 3, 0, 0, 0, 1, 1, 4, 4, 4, 4, 0, 8, 0, 2,
                        2, 3, 3, 5, 5, 6, 6, 6, 2, 2, 2, 3, 3, 3, 9, 1, 1, 1, 7,
                        7, 2, 2, 1, 1, 5, 5, 3, 3, 4, 4, 4, 4, 2, 2, 8, 3, 1, 0,
                        6, 6, 1, 1, 1, 7, 7, 3, 3, 3, 5, 5, 1, 1, 8, 0, 0, 4, 4,
                        2, 2, 6, 6,
                      ],
                      [
                        10, 10, 10, 10, 10, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 8, 3,
                        3, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 0, 0, 3, 3, 3, 3, 9, 2,
                        2, 1, 8, 3, 3, 0, 0, 6, 6, 6, 6, 6, 1, 1, 2, 2, 2, 3, 3,
                        3, 3, 4, 4, 4, 4, 2, 7, 7, 7, 0, 0, 4, 4, 5, 5, 5, 3, 3,
                        2, 2, 1, 1, 3, 3, 3, 10, 10, 10, 10, 10, 0, 0, 5, 5, 5,
                        5, 5, 1, 1, 1, 8, 3, 3, 0, 0, 4, 4, 4, 4, 3, 3, 1, 1, 0,
                        0, 6, 6, 1, 1, 2, 2, 2, 2, 8, 3, 3, 0, 0, 0, 0, 6, 6, 6,
                        2, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 3, 3, 0, 0, 0,
                        1, 1, 5, 5, 5, 2, 2, 2, 2, 7, 7, 7, 7, 7, 10, 10, 10,
                        10, 10, 1, 1, 5, 5, 5, 5, 3, 3, 4, 4, 8, 0, 0, 0, 0, 4,
                        4, 4, 4, 3, 3, 1, 1, 0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 8, 3,
                        3, 0, 0, 6, 6, 6, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 1, 4,
                        4, 4, 2, 2, 2, 0, 0, 0, 9, 5, 5, 5, 5, 2, 2, 2, 2, 7, 7,
                        7, 3, 3, 3, 5, 5, 5, 5, 5, 1, 1, 8, 3, 3, 0, 0, 4, 4, 4,
                        4, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 8, 3, 3, 0,
                        0, 0, 1, 1, 1, 0, 0, 2, 2, 2, 2, 2, 7, 7, 7, 7, 2, 2, 4,
                        4, 4, 4, 4, 4, 9, 0, 0, 5, 5, 5, 5, 1, 1, 1, 1, 0, 0, 0,
                        0, 3, 3, 8, 4, 4, 2, 2, 2, 2, 6, 6, 6, 1, 1, 1, 5, 5, 5,
                        5, 0, 0, 0, 0, 8, 1, 1, 1, 1, 0, 0, 5, 5, 6, 6, 0, 0, 3,
                        1, 1, 1, 5, 5, 5, 0, 0, 0, 4, 4, 4, 3, 3, 8, 2, 2, 7, 7,
                        0, 6, 6,
                      ],
                      [
                        10, 10, 10, 10, 10, 1, 4, 4, 6, 6, 0, 9, 3, 3, 3, 4, 4,
                        7, 7, 1, 1, 1, 0, 0, 0, 5, 5, 5, 2, 2, 3, 3, 1, 1, 1, 1,
                        1, 9, 1, 6, 6, 6, 6, 6, 1, 1, 1, 1, 2, 2, 0, 5, 5, 3, 3,
                        1, 4, 4, 2, 7, 7, 7, 4, 4, 4, 4, 0, 0, 0, 1, 1, 1, 3, 3,
                        3, 0, 8, 0, 3, 3, 1, 10, 10, 10, 10, 10, 4, 4, 4, 6, 6,
                        0, 0, 2, 3, 3, 3, 7, 7, 7, 1, 1, 3, 0, 0, 5, 5, 5, 5, 2,
                        2, 3, 3, 3, 1, 6, 6, 6, 6, 2, 2, 2, 0, 0, 0, 3, 3, 4, 4,
                        4, 4, 0, 5, 5, 5, 5, 1, 1, 1, 2, 3, 4, 4, 4, 2, 2, 3, 1,
                        1, 1, 5, 1, 1, 7, 7, 7, 0, 0, 0, 3, 3, 1, 10, 10, 10,
                        10, 10, 1, 6, 6, 6, 6, 6, 2, 2, 3, 3, 3, 3, 7, 7, 1, 1,
                        0, 0, 0, 5, 5, 5, 5, 2, 2, 3, 3, 3, 3, 4, 4, 2, 2, 2, 0,
                        6, 6, 5, 5, 3, 3, 4, 4, 2, 2, 5, 5, 5, 0, 0, 8, 1, 1, 1,
                        7, 7, 7, 2, 2, 2, 2, 0, 0, 0, 1, 1, 1, 4, 4, 4, 0, 8, 0,
                        3, 3, 1, 5, 5, 5, 2, 2, 3, 3, 6, 6, 6, 6, 2, 2, 2, 1, 1,
                        1, 5, 5, 5, 5, 5, 2, 2, 2, 0, 0, 0, 3, 3, 8, 4, 4, 3, 3,
                        7, 7, 7, 2, 2, 2, 0, 0, 0, 1, 1, 1, 4, 4, 4, 0, 8, 0, 2,
                        2, 3, 3, 5, 5, 6, 6, 6, 2, 5, 5, 5, 1, 1, 5, 5, 8, 3, 3,
                        0, 0, 4, 4, 4, 4, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 2, 2, 2,
                        2, 8, 3, 3, 2, 2, 2, 2, 4, 4, 4, 4, 0, 0, 0, 0, 7, 7, 7,
                        2, 2, 2, 2, 0, 0, 0, 0, 0, 8, 1, 1, 1, 4, 4, 0, 0, 0, 7,
                        7, 4, 4, 3, 3, 8, 0, 0, 0, 5, 5, 5, 1, 1, 1, 4, 4, 2, 2,
                        6, 6, 1,
                      ],
                      [
                        10, 10, 10, 10, 10, 4, 4, 4, 0, 0, 0, 9, 1, 1, 7, 7, 7,
                        7, 0, 0, 0, 0, 6, 6, 6, 6, 0, 0, 5, 5, 4, 4, 3, 3, 1, 1,
                        1, 5, 5, 5, 5, 1, 7, 7, 2, 2, 4, 4, 4, 3, 3, 3, 2, 2, 2,
                        2, 0, 0, 4, 4, 3, 3, 2, 2, 3, 3, 5, 5, 5, 0, 8, 1, 6, 0,
                        0, 1, 4, 4, 4, 0, 0, 3, 3, 5, 5, 2, 4, 3, 0, 0, 7, 7, 2,
                        8, 0, 4, 2, 3, 5, 5, 1, 1, 1, 1, 0, 0, 10, 10, 10, 10,
                        10, 4, 4, 4, 1, 1, 3, 5, 1, 1, 7, 7, 0, 0, 0, 1, 1, 1,
                        6, 6, 6, 6, 3, 3, 5, 5, 4, 4, 6, 3, 3, 0, 0, 5, 5, 5, 5,
                        1, 7, 7, 2, 2, 4, 4, 5, 1, 3, 0, 2, 2, 2, 2, 1, 0, 4, 4,
                        3, 3, 2, 2, 3, 3, 5, 5, 4, 0, 8, 1, 6, 0, 0, 1, 4, 4, 2,
                        1, 1, 4, 3, 5, 6, 2, 4, 3, 0, 0, 3, 3, 2, 8, 1, 4, 2, 3,
                        5, 5, 1, 1, 1, 1, 0, 6, 10, 10, 10, 10, 10, 4, 4, 1, 1,
                        0, 3, 5, 7, 7, 7, 7, 0, 4, 2, 1, 0, 3, 6, 6, 6, 6, 0, 3,
                        5, 5, 4, 4, 9, 3, 3, 0, 0, 5, 5, 5, 5, 1, 7, 7, 7, 2, 4,
                        4, 5, 1, 3, 0, 2, 2, 2, 2, 1, 0, 4, 4, 3, 3, 2, 2, 3, 3,
                        5, 5, 4, 0, 8, 1, 6, 6, 0, 1, 4, 4, 2, 1, 1, 4, 4, 4, 2,
                        2, 3, 3, 0, 0, 3, 7, 2, 8, 1, 1, 2, 5, 5, 5, 1, 1, 1, 1,
                        0, 6, 4, 4, 1, 1, 0, 3, 5, 1, 1, 7, 7, 0, 4, 2, 1, 0, 3,
                        6, 6, 6, 6, 0, 3, 5, 5, 4, 4, 3, 3, 7, 0, 0, 5, 5, 5, 5,
                        1, 7, 7, 1, 4, 4, 4, 0, 0, 2, 2, 2, 5, 4, 4, 6, 0, 3, 7,
                        7, 0, 0, 2, 2, 2, 1, 3, 5, 5, 2, 4, 4, 1, 1, 7, 7, 7, 0,
                        5, 3, 3, 2, 2, 8, 2, 2, 6, 6, 2, 2, 3, 3, 8, 0, 1, 6, 6,
                        5, 5, 0, 6, 0, 0, 1, 4, 4, 2, 1, 1, 4, 4, 5, 2, 2, 4, 3,
                        0, 9, 3, 6, 6, 3, 3, 2, 2, 4, 4, 4, 0, 0, 0, 6, 6, 1, 1,
                        5, 5, 3, 8, 2, 2, 7, 7, 0, 1, 1,
                      ],
                      [
                        10, 10, 10, 10, 10, 3, 3, 1, 0, 0, 7, 5, 1, 1, 4, 4, 4,
                        3, 3, 3, 7, 3, 1, 1, 1, 1, 0, 0, 0, 7, 2, 2, 7, 1, 0, 0,
                        9, 0, 5, 5, 5, 1, 6, 6, 0, 1, 1, 3, 0, 1, 3, 7, 7, 1, 0,
                        0, 3, 3, 6, 2, 3, 1, 0, 0, 0, 5, 5, 3, 8, 0, 2, 2, 7, 1,
                        0, 6, 2, 2, 3, 3, 1, 1, 3, 3, 3, 3, 2, 2, 4, 6, 6, 0, 3,
                        3, 4, 2, 2, 1, 4, 4, 0, 7, 7, 3, 3, 7, 5, 4, 4, 6, 0, 3,
                        7, 2, 0, 0, 2, 2, 2, 1, 5, 5, 5, 2, 4, 4, 1, 1, 7, 7, 7,
                        0, 3, 3, 2, 2, 10, 10, 10, 10, 10, 2, 2, 1, 0, 0, 7, 5,
                        3, 3, 4, 4, 4, 3, 6, 2, 5, 3, 1, 1, 1, 1, 0, 0, 0, 5, 2,
                        2, 7, 1, 5, 3, 3, 3, 5, 5, 2, 1, 6, 6, 0, 0, 1, 1, 1, 1,
                        3, 6, 6, 6, 0, 0, 3, 3, 3, 2, 2, 1, 1, 0, 0, 5, 5, 3, 8,
                        0, 2, 2, 7, 1, 6, 6, 2, 2, 2, 2, 1, 1, 3, 3, 3, 3, 2, 2,
                        4, 4, 0, 0, 3, 3, 4, 2, 2, 1, 4, 4, 0, 7, 4, 2, 2, 5, 5,
                        4, 4, 6, 9, 3, 7, 7, 7, 0, 0, 2, 2, 1, 3, 5, 5, 2, 4, 4,
                        1, 9, 2, 7, 7, 0, 5, 3, 0, 0, 10, 10, 10, 10, 10, 2, 2,
                        1, 0, 0, 7, 7, 3, 3, 4, 4, 4, 3, 8, 2, 5, 5, 1, 1, 1, 1,
                        3, 3, 0, 0, 2, 2, 1, 1, 1, 2, 2, 5, 5, 5, 5, 1, 6, 6, 6,
                        1, 1, 2, 0, 1, 3, 0, 0, 1, 0, 0, 3, 3, 3, 2, 2, 6, 6, 0,
                        0, 5, 5, 3, 8, 0, 2, 2, 7, 1, 0, 6, 2, 2, 3, 2, 1, 1, 3,
                        3, 3, 3, 2, 2, 4, 4, 6, 0, 3, 7, 3, 2, 2, 4, 4, 4, 0, 7,
                        7, 2, 2, 3, 4, 4, 4, 6, 0, 3, 7, 2, 0, 0, 0, 2, 2, 1, 5,
                        5, 5, 2, 4, 4, 1, 1, 7, 7, 7, 0, 5, 3, 3, 5, 5, 4, 0, 8,
                        1, 6, 0, 0, 1, 4, 4, 2, 1, 1, 4, 4, 5, 2, 2, 4, 3, 0, 0,
                        3, 7, 2, 8, 1, 2, 2, 3, 5, 5, 1, 1, 1, 1, 6, 6, 4, 4, 2,
                        9, 1, 1, 0, 0, 4, 4, 2, 6, 3, 4, 6, 6, 0, 4, 5, 6, 0, 8,
                        2, 3, 0, 6, 6, 5, 5, 1, 1, 1, 0, 0, 1, 1, 5, 5, 7, 3, 8,
                        1, 1, 1, 5, 5, 6, 3, 2, 2, 2, 4, 4, 4, 3, 3, 3, 7, 0, 1,
                        1, 1, 6, 2, 2, 2, 5, 5, 3, 3, 4, 4, 0, 6, 2,
                      ],
                    ]),
                    (t.m_fakeReelCounter = [0, 0, 0, 0, 0]),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.onLoad = function () {
                    var e = this;
                    (this.m_viewSize =
                      this.node.getComponent(UITransform).contentSize),
                      (this.m_symbolSize = new Size(
                        this.m_viewSize.width / Game_Define.COL,
                        this.m_viewSize.height / Game_Define.ROW
                      )),
                      (this.m_reelStopTimes = Array(Game_Define.COL).fill(
                        null
                      )),
                      (this.m_reelPreTimes = Array(Game_Define.COL).fill(null)),
                      this.InitPlate(),
                      (this.m_fakeReelCounter = [
                        Math.floor(100 * Math.random()),
                        Math.floor(100 * Math.random()),
                        Math.floor(100 * Math.random()),
                        Math.floor(100 * Math.random()),
                        Math.floor(100 * Math.random()),
                      ]);
                    var t = function () {
                      var t = node$7.TempoSetting.TripleCoinTreasure;
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
                    t(), node$7.AddCb(t);
                  }),
                  (n.InitPlate = function () {
                    this.m_plateInfo = Game_Define.INIT_PLATE;
                    for (var e = 0, t = 0; t < Game_Define.COL; t++) {
                      for (var n = [], i = 0; i < Game_Define.ROW; i++) {
                        var o = this.NewSymbolNode(
                          t,
                          i,
                          this.m_plateInfo[t][i],
                          String(e)
                        );
                        e++,
                          n.push(o),
                          this.m_isChangeSymbol.set(o.name, !1),
                          this.m_currentMoveLength.set(o.name, 0),
                          (this.m_symbolPos[t][i] = v3(
                            o.getPosition().x,
                            o.getPosition().y,
                            0
                          ));
                      }
                      this.m_symbols.push(n);
                    }
                    for (var r = 0; r < Game_Define.COL; r++) {
                      var a = this.NewSymbolNode(
                        r,
                        Game_Define.ROW,
                        r,
                        String(e)
                      );
                      e++,
                        this.m_upperSymbols.push(a),
                        (a.active = !1),
                        this.m_isChangeSymbol.set(a.name, !1),
                        this.m_currentMoveLength.set(a.name, 0),
                        (this.m_upSymbolPos[r] = v3(
                          a.getPosition().x,
                          a.getPosition().y,
                          0
                        ));
                    }
                    for (var s = 0; s < Game_Define.COL; s++) {
                      var l = this.NewSymbolNode(s, -1, s, String(e));
                      e++,
                        this.m_lowerSymbols.push(l),
                        (l.active = !1),
                        this.m_isChangeSymbol.set(l.name, !1),
                        this.m_currentMoveLength.set(l.name, 0),
                        (this.m_lowSymbolPos[s] = v3(
                          l.getPosition().x,
                          l.getPosition().y,
                          0
                        ));
                    }
                    this.m_isChangeToFinalSymbol = Array(e).fill(!1);
                  }),
                  (n.NewSymbolNode = function (e, t, n, i) {
                    var o =
                        this.m_symbolSize.width * (e + 0.5) +
                        REEL_POSITION_OFFSET[e].x -
                        this.m_viewSize.width / 2,
                      r =
                        this.m_symbolSize.height * (t + 0.5) +
                        REEL_POSITION_OFFSET[e].y -
                        this.m_viewSize.height / 2,
                      a = new Node();
                    (a.name = i),
                      this.node.addChild(a),
                      a.setPosition(o, r),
                      a.addComponent(UIOpacity);
                    var s = a.addComponent(Sprite);
                    return (
                      (s.sizeMode = Sprite.SizeMode.RAW),
                      (s.type = Sprite.Type.SIMPLE),
                      (s.trim = !1),
                      (s.spriteFrame = this.m_symbolSpriteFrames[n]),
                      a
                    );
                  }),
                  (n.Init = function (e) {
                    this.m_gameView = e;
                  }),
                  (n.StartSpin = function () {
                    (this.m_isStartNearWin = !1),
                      (this.m_secondScatterCol = -1),
                      (this.m_time = 0),
                      (this.m_stopTime = 0),
                      (this.m_isStop = !1),
                      (this.m_isClickStopBtn = !1),
                      (this.m_canPlayReelStopSound = !0),
                      (this.m_isPlayNearWin = [!1, !1, !1, !1, !1]),
                      (this.m_isPlaySound = [!1, !1, !1, !1, !1]),
                      (this.m_isPlaySymbolStop = [!1, !1, !1, !1, !1]),
                      (this.m_isPlaySpinSound = !1),
                      (this.m_reelSpinSoundId = -1),
                      (this.m_isPlayLionNearWin = [!1, !1, !1, !1, !1]),
                      (this.m_plateInfo = null),
                      (this.m_selectPlateInfo = null),
                      (Game_Define.ScatterCount = 0),
                      (this.m_isColStops = Array(Game_Define.COL).fill(!1));
                    for (var e = 0; e < Game_Define.COL; e++)
                      (this.m_reelStopTimes[e] = null),
                        (this.m_reelPreTimes[e] = null);
                    1 === Game_Define.RoundIdx ||
                      Game_Define.IsJustReset ||
                      (this.m_lockColumn = Game_Define.LastLockColumn);
                    for (
                      var t = 0;
                      t < this.m_isChangeToFinalSymbol.length;
                      t++
                    )
                      this.m_isChangeToFinalSymbol[t] = !1;
                    this.LockMysteryColumn(), this.SetUpperAndLowerActive(!0);
                  }),
                  (n.SetIsClickStopBtn = function () {
                    if (((this.m_isClickStopBtn = !0), 0 !== this.m_stopTime)) {
                      for (
                        var e = Game_Define.IsNudgeUp
                            ? Game_Define.DELAY.NUDGE_UP
                            : 0,
                          t = Math.ceil(this.m_time / this.m_spinTime),
                          n = ((t = t > 0 ? t : 1) - 1) * this.m_spinTime,
                          i = node$3.strip(t * this.m_spinTime),
                          o = 0;
                        o < Game_Define.COL;
                        ++o
                      )
                        this.m_reelStopTimes[o] > i &&
                          ((this.m_reelStopTimes[o] = i + 0 + e),
                          (this.m_reelPreTimes[o] = n + 0 + e));
                      var r =
                        node$7.TempoSetting.TripleCoinTreasure.SPEED_UP_STOP_TIME(
                          0,
                          this.m_time
                        );
                      r < this.m_stopTime &&
                        (this.m_stopTime = node$3.strip(r) + 0 + e);
                    }
                  }),
                  (n.ShowStaticSymbol = function () {
                    for (var e = 0; e < Game_Define.COL; e++)
                      for (var t = 0; t < Game_Define.ROW; t++)
                        this.m_symbols[e][t].active = !0;
                  }),
                  (n.Spin = function (e) {
                    if (
                      !this.m_isStop &&
                      ((this.m_time = node$3.strip(this.m_time + e)),
                      this.Spin_RealSpinMultiple(),
                      Game_Define.IsHardStop ||
                        this.m_isClickStopBtn ||
                        this.m_isStartNearWin ||
                        -1 === this.m_secondScatterCol ||
                        !(
                          this.m_time >
                          this.m_reelStopTimes[this.m_secondScatterCol]
                        ) ||
                        Game_Define.IsInFG ||
                        (this.m_isStartNearWin = !0),
                      this.m_time >= this.m_stopTime && 0 != this.m_stopTime)
                    ) {
                      -1 !== this.m_reelSpinSoundId &&
                        (this.m_gameView.SetBGMVolumeByFade(
                          1,
                          0,
                          0.1,
                          this.m_reelSpinSoundId
                        ),
                        (this.m_reelSpinSoundId = -1)),
                        (this.m_isStop = !0),
                        this.m_gameView.EffectPlate.CleanAllScatterEffect(),
                        this.ShowSymbolDark(!1);
                      for (var t = 0; t < Game_Define.COL; t++)
                        this.m_gameView.EffectPlate.CloseFxSelectTip(t);
                      this.SetUpperAndLowerActive(!1);
                    }
                  }),
                  (n.Spin_RealSpinMultiple = function () {
                    for (
                      var e = this,
                        t = function (t) {
                          if (1 == e.m_lockColumn[t]) return "continue";
                          e.m_isPlaySpinSound ||
                            ((e.m_isPlaySpinSound = !0),
                            (e.m_reelSpinSoundId = node.Play(
                              Game_Define.AudioClips.Reel_Spin,
                              !0
                            ))),
                            e.m_isStartNearWin &&
                              t > e.m_secondScatterCol &&
                              e.m_time > e.m_reelStopTimes[t - 1] &&
                              !e.m_isPlayNearWin[t] &&
                              1 == e.m_isPlaySymbolStop[t - 1] &&
                              !e.m_isClickStopBtn &&
                              !Game_Define.IsHardStop &&
                              ((e.m_isPlayNearWin[t] = !0),
                              e.m_gameView.EffectPlate.PlayNearWin(t),
                              e.m_gameView.EffectPlate.ShowScatterNearWin(
                                e.m_plateInfo,
                                t
                              ),
                              e.ShowSymbolDark(!0),
                              e.ShowSymbolDark(!1, t, t + 1));
                          for (
                            var n = e.m_spinTime, i = 0;
                            i < Game_Define.ROW;
                            i++
                          ) {
                            e.SpinMoving(
                              t,
                              i,
                              e.m_symbols[t][i],
                              n,
                              function () {
                                e.m_isColStops[t] || e.PlaySymbolStop(t),
                                  e.m_gameView.EffectPlate.SetSpecialSymbolPos(
                                    t,
                                    e.m_plateInfo[t]
                                  ),
                                  e.m_gameView.EffectPlate.CloseNearWin(t);
                              }
                            );
                          }
                          e.SpinMoving(
                            t,
                            Game_Define.ROW,
                            e.m_upperSymbols[t],
                            n,
                            function () {
                              e.m_isColStops[t] ||
                                ((e.m_isColStops[t] = !0),
                                e.CheckPlayStopSound(t),
                                e.PlayLionNearWin(t));
                            }
                          ),
                            e.SpinMoving(t, -1, e.m_lowerSymbols[t], n);
                        },
                        n = 0;
                      n < Game_Define.COL;
                      n++
                    )
                      t(n);
                  }),
                  (n.SpinMoving = function (e, t, n, i, o) {
                    var r = this.m_time,
                      a = this.m_reelStopTimes[e],
                      s = this.m_riseTime * Game_Define.COL,
                      l = this.m_symbolSize.height * (Game_Define.ROW + 2),
                      c = this.m_symbolSize.height * (t + 1 + 0.5),
                      m =
                        this.m_symbolSize.width * (e + 0.5) +
                        REEL_POSITION_OFFSET[e].x -
                        this.m_viewSize.width / 2,
                      u =
                        this.m_symbolSize.height * (t + 0.5) +
                        REEL_POSITION_OFFSET[e].y -
                        this.m_viewSize.height / 2,
                      _ = 0;
                    if (r < this.m_riseTime * e);
                    else if (r < this.m_riseTime * (e + 1))
                      _ =
                        ((r - this.m_riseTime * e) / this.m_riseTime) *
                        this.m_upLength;
                    else if (r < s) _ = this.m_upLength;
                    else if (null == a || r < a + s) {
                      var p = (((r - s) % i) / i) * l;
                      _ = -this.GetMovelength(p, c, l, e, t, n);
                    } else
                      r < a + s + this.m_spinBufferTime01
                        ? ((_ =
                            (-(r - a - s) / this.m_spinBufferTime01) *
                            this.m_downLength),
                          this.CheckChangeToFinalSymbol(e, t, n))
                        : r <
                          a +
                            s +
                            this.m_spinBufferTime01 +
                            this.m_spinBufferTime02
                        ? ((_ =
                            -(
                              1 -
                              (r - a - s - this.m_spinBufferTime01) /
                                this.m_spinBufferTime02
                            ) * this.m_downLength),
                          this.CheckChangeToFinalSymbol(e, t, n))
                        : this.CheckChangeToFinalSymbol(e, t, n);
                    n.setPosition(m, u + _),
                      a && r >= a + s && (null == o || o());
                  }),
                  (n.GetMovelength = function (e, t, n, i, o, r) {
                    return (
                      e >= t && (e -= n),
                      this.m_currentMoveLength.get(r.name) >= e
                        ? this.m_isChangeSymbol.get(r.name) ||
                          (this.m_isChangeSymbol.set(r.name, !0),
                          this.ChangeSymbol(i, o, r, !1))
                        : this.m_isChangeSymbol.set(r.name, !1),
                      this.m_currentMoveLength.set(r.name, e),
                      e
                    );
                  }),
                  (n.ChangeSymbol = function (e, t, n, i) {
                    var o = this.m_reelPreTimes[e],
                      r = this.m_riseTime * Game_Define.COL,
                      a = 0;
                    ((o && this.m_time - r > o) || i) &&
                    t >= 0 &&
                    t < Game_Define.ROW
                      ? (a = this.m_plateInfo[e][t])
                      : ((a = this.m_fakeReel[e][this.m_fakeReelCounter[e]]),
                        this.m_fakeReelCounter[e]++,
                        this.m_fakeReelCounter[e] >=
                          this.m_fakeReel[e].length &&
                          (this.m_fakeReelCounter[e] = 0)),
                      (n.getComponent(Sprite).spriteFrame =
                        this.m_symbolSpriteFrames[a]);
                  }),
                  (n.CheckChangeToFinalSymbol = function (e, t, n) {
                    var i = Number(n.name);
                    this.m_isChangeToFinalSymbol[i] ||
                      ((this.m_isChangeToFinalSymbol[i] = !0),
                      this.ChangeSymbol(e, t, n, !0));
                  }),
                  (n.PlaySymbolStop = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (this.m_isPlaySymbolStop[t]) {
                                    e.next = 9;
                                    break;
                                  }
                                  if (
                                    ((this.m_isPlaySymbolStop[t] = !0),
                                    Game_Define.IsHardStop)
                                  ) {
                                    e.next = 6;
                                    break;
                                  }
                                  this.m_gameView.EffectPlate.SpecialSymbolStop(
                                    t,
                                    this.m_plateInfo[t]
                                  ),
                                    (e.next = 9);
                                  break;
                                case 6:
                                  if (0 === t) {
                                    e.next = 8;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 8:
                                  this.m_gameView.EffectPlate.AllSpecialSymbolStop(
                                    this.m_plateInfo
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
                  (n.PlayLionNearWin = function (e) {
                    this.m_isPlayLionNearWin[e] ||
                      ((this.m_isPlayLionNearWin[e] = !0),
                      Game_Define.IsHardStop ||
                        e !== this.m_secondScatterCol ||
                        this.m_gameView.CharacterSpine.PlayNearWinStart(),
                      this.m_isStartNearWin &&
                        e === Game_Define.COL - 1 &&
                        this.m_gameView.CharacterSpine.PlayNearWinEnd());
                  }),
                  (n.KeepGoldMystery = function (e) {
                    for (
                      var t = this.m_plateInfo[e], n = 0;
                      n < Game_Define.ROW;
                      n++
                    )
                      Game_Define.LastSelectPlate[e][n] ==
                        Game_Define.SelectSymbol.Select_Frame &&
                        (Game_Define.IsNudgeUp
                          ? n < 4 &&
                            (t[n + 1] =
                              Game_Define.Symbol.Symbol_Mystery_LeverUp)
                          : n > 0 &&
                            (t[n - 1] =
                              Game_Define.Symbol.Symbol_Mystery_LeverUp));
                    return t;
                  }),
                  (n.NudgeAll = function () {
                    for (var e = 0; e < Game_Define.COL; e++)
                      this.m_lockColumn[e] && this.Nudge(e);
                  }),
                  (n.Nudge = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n, i, o, r, a;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    n =
                                      this.m_viewSize.height / Game_Define.ROW,
                                      n = Game_Define.IsNudgeUp ? -n : n,
                                      this.SetColSymbolPosUp(t, n),
                                      i = this.m_plateInfo[t],
                                      Game_Define.IsInFG ||
                                        ((i = this.KeepGoldMystery(t)),
                                        error("KeepGoldMystery:", i)),
                                      o = 0;
                                    o < Game_Define.ROW;
                                    o++
                                  )
                                    this.SetSymbolNode(t, o, i[o]);
                                  Game_Define.IsNudgeUp
                                    ? ((r = Game_Define.LastTopRow[t]),
                                      (this.m_upperSymbols[t].getComponent(
                                        Sprite
                                      ).spriteFrame =
                                        this.m_symbolSpriteFrames[r]))
                                    : ((a = Game_Define.LastBottomRow[t]),
                                      (this.m_lowerSymbols[t].getComponent(
                                        Sprite
                                      ).spriteFrame =
                                        this.m_symbolSpriteFrames[a])),
                                    this.SetPositionByTween(t);
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
                  (n.SetColSymbolPosUp = function (e, t) {
                    for (var n = 0; n < Game_Define.ROW; n++) {
                      var i = this.m_symbolPos[e][n].x,
                        o = this.m_symbolPos[e][n].y;
                      this.m_symbols[e][n].setPosition(i, o + t);
                    }
                    var r = this.m_upSymbolPos[e].x,
                      a = this.m_upSymbolPos[e].y;
                    this.m_upperSymbols[e].setPosition(r, a + t);
                    var s = this.m_lowSymbolPos[e].x,
                      l = this.m_lowSymbolPos[e].y;
                    this.m_lowerSymbols[e].setPosition(s, l + t);
                  }),
                  (n.SetPositionByTween = function (e) {
                    for (var t = 0; t < Game_Define.ROW; t++) {
                      var n = this.m_symbolPos[e][t];
                      tween(this.m_symbols[e][t])
                        .to(
                          Game_Define.DELAY.NUDGE_TIME,
                          { position: n },
                          { easing: "circOut" }
                        )
                        .start();
                    }
                    var i = this.m_upSymbolPos[e];
                    tween(this.m_upperSymbols[e])
                      .to(
                        Game_Define.DELAY.NUDGE_TIME,
                        { position: i },
                        { easing: "circOut" }
                      )
                      .start();
                    var o = this.m_lowSymbolPos[e];
                    tween(this.m_lowerSymbols[e])
                      .to(
                        Game_Define.DELAY.NUDGE_TIME,
                        { position: o },
                        { easing: "circOut" }
                      )
                      .start();
                  }),
                  (n.SetPlateInfo = function (e, t) {
                    (this.m_plateInfo = e.map(function (e) {
                      return e.slice();
                    })),
                      this.SetSelectPlateInfo(t);
                    var n = this.m_riseTime * Game_Define.COL,
                      i = Math.ceil((this.m_time - n) / this.m_spinTime);
                    this.m_secondScatterCol = this.GetSecondScatterCol();
                    var o = Game_Define.IsNudgeUp
                      ? Game_Define.DELAY.NUDGE_UP
                      : 0;
                    if (this.m_isClickStopBtn) {
                      this.m_stopTime =
                        node$3.strip(this.m_spinTime * i + n) + 0 + o;
                      for (var r = 0; r < Game_Define.COL; r++)
                        (this.m_reelStopTimes[r] =
                          node$3.strip(this.m_spinTime * i) + 0 + o),
                          (this.m_reelPreTimes[r] =
                            node$3.strip(this.m_spinTime * (i - 1)) + 0 + o);
                    } else {
                      this.m_stopTime = node$3.strip(
                        this.m_spinTime * (i + this.m_timesOfBaseSpin) +
                          this.m_spinIntervalTimes *
                            this.m_spinTime *
                            (Game_Define.COL - 1) +
                          +n +
                          this.m_spinBufferTime01 +
                          this.m_spinBufferTime02 +
                          0 +
                          o
                      );
                      for (var a = 0; a < Game_Define.COL; a++)
                        (this.m_reelStopTimes[a] = node$3.strip(
                          this.m_spinTime * (i + this.m_timesOfBaseSpin) +
                            this.m_spinIntervalTimes * this.m_spinTime * a +
                            0 +
                            o
                        )),
                          (this.m_reelPreTimes[a] = node$3.strip(
                            this.m_spinTime * (i + this.m_timesOfBaseSpin) +
                              this.m_spinIntervalTimes *
                                this.m_spinTime *
                                (a - 1) +
                              0 +
                              o
                          ));
                      if (-1 !== this.m_secondScatterCol) {
                        this.m_stopTime =
                          this.m_stopTime +
                          this.m_nearwinSpinTime *
                            (Game_Define.COL - (this.m_secondScatterCol + 1));
                        for (var s = 0; s < Game_Define.COL; s++)
                          s > this.m_secondScatterCol &&
                            ((this.m_reelStopTimes[s] = node$3.strip(
                              this.m_reelStopTimes[s] +
                                this.m_nearwinSpinTime *
                                  (s - this.m_secondScatterCol)
                            )),
                            (this.m_reelPreTimes[s] = node$3.strip(
                              this.m_reelStopTimes[s] +
                                this.m_nearwinSpinTime *
                                  (s - this.m_secondScatterCol)
                            )));
                      }
                    }
                    for (
                      var l = 0,
                        c = -1,
                        m = [0, 0, 0, 0, 0],
                        u = [0, 0, 0, 0, 0],
                        _ = 0;
                      _ < this.m_lockColumn.length;
                      _++
                    )
                      this.m_lockColumn[_] || ((l = _), c++),
                        c >= 0
                          ? ((m[_] = this.m_reelStopTimes[c]),
                            (u[_] = this.m_reelPreTimes[c]))
                          : ((m[_] = this.m_reelStopTimes[0]),
                            (u[_] = this.m_reelPreTimes[0]));
                    (this.m_reelStopTimes = m),
                      (this.m_reelPreTimes = u),
                      (this.m_stopTime =
                        this.m_reelStopTimes[l] +
                        this.m_spinBufferTime01 +
                        this.m_spinBufferTime02),
                      this.m_stopTime < Game_Define.DELAY.NUDGE_TIME &&
                        (this.m_stopTime = Game_Define.DELAY.NUDGE_TIME),
                      (Game_Define.IsGetSpinAck = !0);
                  }),
                  (n.GetSecondScatterCol = function () {
                    for (var e = -1, t = 0, n = 0; n < Game_Define.COL; n++)
                      for (var i = 0; i < Game_Define.ROW; i++)
                        if (
                          (this.m_plateInfo[n][i] ==
                            Game_Define.Symbol.Symbol_Scatter && t++,
                          -1 === e &&
                            2 === t &&
                            n !== this.m_plateInfo.length - 1 &&
                            !Game_Define.IsInFG)
                        ) {
                          e = n;
                          break;
                        }
                    return e;
                  }),
                  (n.LockMysteryColumn = function () {
                    for (var e = 0; e < Game_Define.COL; e++)
                      if (Game_Define.LastLockColumn[e])
                        for (var t = 1; t < Game_Define.ROW; t++)
                          Game_Define.OldPlateInfo[e][t] ===
                            Game_Define.Symbol.Symbol_Mystery &&
                            (this.m_lockColumn[e] = !0);
                  }),
                  (n.LastLockColumn = function () {
                    Game_Define.LastLockColumn = [!1, !1, !1, !1, !1];
                    for (var e = 0; e < Game_Define.COL; e++)
                      for (var t = 0; t < Game_Define.ROW; t++)
                        (((this.m_plateInfo[e][t] ==
                          Game_Define.Symbol.Symbol_Mystery ||
                          this.m_plateInfo[e][t] ==
                            Game_Define.Symbol.Symbol_Mystery_LeverUp) &&
                          0 !== t) ||
                          ((this.m_plateInfo[e][t] ==
                            Game_Define.Symbol.Symbol_Mystery ||
                            this.m_plateInfo[e][t] ==
                              Game_Define.Symbol.Symbol_Mystery_LeverUp) &&
                            0 == t &&
                            Game_Define.IsNudgeUp)) &&
                          (Game_Define.LastLockColumn[e] = !0),
                          0 === t &&
                            (Game_Define.LastBottomRow[e] =
                              this.m_plateInfo[e][t]),
                          4 === t &&
                            (Game_Define.LastTopRow[e] =
                              this.m_plateInfo[e][t]);
                  }),
                  (n.RecoverLockInfo = function (e) {
                    Game_Define.LastLockColumn = [!1, !1, !1, !1, !1];
                    for (var t = 0; t < Game_Define.COL; t++)
                      for (var n = 0; n < Game_Define.ROW; n++)
                        (e[t][n] != Game_Define.Symbol.Symbol_Mystery &&
                          e[t][n] !=
                            Game_Define.Symbol.Symbol_Mystery_LeverUp) ||
                          0 === n ||
                          (this.m_lockColumn[t] = !0),
                          0 === n && (Game_Define.LastBottomRow[t] = e[t][n]);
                  }),
                  (n.RecoverPlateInfo = function () {
                    this.m_plateInfo = Game_Define.LastPlate;
                  }),
                  (n.SetFreeGameLockColumn = function () {
                    this.m_lockColumn = [!1, !0, !1, !0, !1];
                  }),
                  (n.CleanLock = function () {
                    (this.m_lockColumn = [!1, !1, !1, !1, !1]),
                      (Game_Define.LastLockColumn = [!1, !1, !1, !1, !1]);
                  }),
                  (n.GetSelectTime = function () {
                    for (var e = 0, t = 0; t < this.m_lockColumn.length; t++)
                      this.m_lockColumn[t] &&
                        (e =
                          3 * this.m_spinTime + Game_Define.DELAY.NUDGE_TIME);
                    return e;
                  }),
                  (n.IsPlateStop = function () {
                    return this.m_isStop;
                  }),
                  (n.GetSymbolNode = function (e, t) {
                    return this.m_symbols[e][t];
                  }),
                  (n.ShowSymbolNode = function (e, t, n) {
                    this.m_symbols[e][t].active = n;
                    var i = n ? 255 : 0;
                    this.m_symbols[e][t].getComponent(UIOpacity).opacity = i;
                  }),
                  (n.SetSymbolNode = function (e, t, n) {
                    this.m_symbols[e][t].getComponent(Sprite).spriteFrame =
                      this.m_symbolSpriteFrames[n];
                  }),
                  (n.CheckPlayStopSound = function (e) {
                    if (!this.m_isPlaySound[e])
                      if (
                        ((this.m_isPlaySound[e] = !0), Game_Define.IsHardStop)
                      ) {
                        if (!this.m_canPlayReelStopSound) return;
                        for (
                          var t = 0, n = 0, i = 0;
                          i < Game_Define.COL;
                          i++
                        ) {
                          for (var o = !1, r = 0; r < Game_Define.ROW; r++)
                            this.m_plateInfo[i][r] ==
                            Game_Define.Symbol.Symbol_Scatter
                              ? t++
                              : this.m_plateInfo[i][r] ==
                                  Game_Define.Symbol.Symbol_Mystery && (o = !0);
                          o && n++;
                        }
                        t > 0
                          ? this.PlaySatterSound(t)
                          : n > 0 && 0 === t
                          ? this.PlayMysterySound(n)
                          : node.Play(Game_Define.AudioClips.Reel_Stop),
                          (this.m_canPlayReelStopSound = !1);
                      } else {
                        for (
                          var a = 0, s = !1, l = 0, c = !1, m = 0;
                          m <= e;
                          m++
                        ) {
                          for (var u = !1, _ = 0; _ < Game_Define.ROW; _++)
                            this.m_plateInfo[m][_] ==
                            Game_Define.Symbol.Symbol_Scatter
                              ? (a++, m == e && (s = !0))
                              : this.m_plateInfo[m][_] ==
                                  Game_Define.Symbol.Symbol_Mystery &&
                                ((u = !0), m == e && (c = !0));
                          u && l++;
                        }
                        s
                          ? this.PlaySatterSound(a)
                          : c && !s
                          ? this.PlayMysterySound(l)
                          : (this.m_canPlayReelStopSound &&
                              node.Play(Game_Define.AudioClips.Reel_Stop),
                            this.m_isClickStopBtn &&
                              (this.m_canPlayReelStopSound = !1));
                      }
                  }),
                  (n.PlaySatterSound = function (e) {
                    1 == e
                      ? (node.Play(Game_Define.AudioClips.Scatter_01),
                        (Game_Define.ScatterCount = 1))
                      : 2 == e
                      ? (node.Play(Game_Define.AudioClips.Scatter_02),
                        (Game_Define.ScatterCount = 2))
                      : 3 == e
                      ? (node.Play(Game_Define.AudioClips.Scatter_03),
                        (Game_Define.ScatterCount = 3))
                      : 4 == e
                      ? (node.Play(Game_Define.AudioClips.Scatter_04),
                        (Game_Define.ScatterCount = 4))
                      : 5 == e &&
                        (node.Play(Game_Define.AudioClips.Scatter_05),
                        (Game_Define.ScatterCount = 5));
                  }),
                  (n.PlayMysterySound = function (e) {
                    1 === e
                      ? node.Play(Game_Define.AudioClips.Mystery_Appear_01)
                      : 2 === e
                      ? node.Play(Game_Define.AudioClips.Mystery_Appear_02)
                      : 3 === e
                      ? node.Play(Game_Define.AudioClips.Mystery_Appear_03)
                      : 4 === e
                      ? node.Play(Game_Define.AudioClips.Mystery_Appear_04)
                      : 5 === e &&
                        node.Play(Game_Define.AudioClips.Mystery_Appear_05);
                  }),
                  (n.RecoverPlate = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, n;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    -1 !== this.m_reelSpinSoundId &&
                                      (this.m_gameView.SetBGMVolumeByFade(
                                        1,
                                        0,
                                        0.1,
                                        this.m_reelSpinSoundId
                                      ),
                                      (this.m_reelSpinSoundId = -1)),
                                      this.SetPlateSymbol(
                                        Game_Define.INIT_PLATE
                                      ),
                                      t = 0;
                                    t < Game_Define.COL;
                                    t++
                                  )
                                    for (n = 0; n < Game_Define.ROW; n++)
                                      this.m_symbols[t][n].active = !0;
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
                  (n.SetPlateSymbol = function (e) {
                    void 0 === e && (e = []),
                      0 == e.length && (e = Game_Define.INIT_PLATE);
                    for (var t = 0; t < Game_Define.COL; t++)
                      for (
                        var n =
                            this.m_symbolSize.width * (t + 0.5) +
                            REEL_POSITION_OFFSET[t].x -
                            this.m_viewSize.width / 2,
                          i = 0;
                        i < Game_Define.ROW;
                        i++
                      ) {
                        var o = this.m_symbolSpriteFrames[e[t][i]];
                        this.m_symbols[t][i].getComponent(Sprite).spriteFrame =
                          o;
                        var r =
                          this.m_symbolSize.height * (i + 0.5) +
                          REEL_POSITION_OFFSET[t].y -
                          this.m_viewSize.height / 2;
                        this.m_symbols[t][i].setPosition(n, r);
                      }
                    for (var a = 0; a < Game_Define.COL; a++) {
                      var s =
                          this.m_symbolSize.width * (a + 0.5) +
                          REEL_POSITION_OFFSET[a].x -
                          this.m_viewSize.width / 2,
                        l =
                          this.m_symbolSize.height * (Game_Define.ROW + 0.5) +
                          REEL_POSITION_OFFSET[a].y -
                          this.m_viewSize.height / 2;
                      this.m_upperSymbols[a].setPosition(s, l),
                        (this.m_upperSymbols[a].active = !1);
                      var c =
                        -0.5 * this.m_symbolSize.height +
                        REEL_POSITION_OFFSET[a].y -
                        this.m_viewSize.height / 2;
                      this.m_lowerSymbols[a].setPosition(s, c),
                        (this.m_lowerSymbols[a].active = !1);
                    }
                  }),
                  (n.RandomSymbol = function () {
                    return Math.floor(
                      Math.random() * (Game_Define.Symbol.Symbol_Mystery + 1)
                    );
                  }),
                  (n.RandomSelectSymbol = function (e) {
                    return (
                      void 0 === e && (e = 0.5), Math.random() > 1 - e ? 1 : 0
                    );
                  }),
                  (n.GetSymbolSpriteFrame = function (e) {
                    return this.m_symbolSpriteFrames[e];
                  }),
                  (n.GetSelectSpriteFrame = function (e) {
                    return this.m_selectSpriteFrames[e];
                  }),
                  (n.ShowSymbolDark = function (e, t, n) {
                    void 0 === t && (t = 0),
                      void 0 === n && (n = Game_Define.COL);
                    for (
                      var i = e ? color(96, 96, 96) : color(255, 255, 255),
                        o = t;
                      o < n;
                      o++
                    ) {
                      for (var r = 0; r < Game_Define.ROW; r++)
                        this.m_symbols[o][r].getComponent(UIRenderer).color = i;
                      (this.m_upperSymbols[o].getComponent(UIRenderer).color =
                        i),
                        (this.m_lowerSymbols[o].getComponent(UIRenderer).color =
                          i);
                    }
                  }),
                  (n.SetSymbolDark = function (e, t, n) {
                    var i = n ? color(96, 96, 96) : color(255, 255, 255);
                    this.m_symbols[e][t].getComponent(Sprite).color = i;
                  }),
                  (n.GetSymbolPosition = function (e, t) {
                    return this.m_symbolPos[e][t];
                  }),
                  (n.SetUpperAndLowerActive = function (e) {
                    for (var t = 0; t < Game_Define.COL; t++)
                      (this.m_upperSymbols[t].active = e),
                        (this.m_lowerSymbols[t].active = e);
                  }),
                  (n.SetSelectPlateInfo = function (e) {
                    this.m_selectPlateInfo = [
                      [0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0],
                    ];
                    for (var t = 0; t < e.length; t++) {
                      var n = this.Pos2Vec(e[t]),
                        i = n.x,
                        o = n.y;
                      this.m_selectPlateInfo[i][o] =
                        Game_Define.SelectSymbol.Select_Frame;
                    }
                  }),
                  (n.RecoverLastSelectPlate = function () {
                    Game_Define.LastSelectPlate = [
                      [0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0],
                    ];
                    for (var e = 0; e < Game_Define.LastGoldPos.length; e++) {
                      var t = this.Pos2Vec(Game_Define.LastGoldPos[e]),
                        n = t.x,
                        i = t.y;
                      Game_Define.LastSelectPlate[n][i] =
                        Game_Define.SelectSymbol.Select_Frame;
                    }
                  }),
                  (n.SetPerformSelectPlateInfo = function () {
                    if (this.m_selectPlateInfo) {
                      this.m_performSelectPlateInfo = [
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                      ];
                      for (var e = 0; e < Game_Define.COL; e++)
                        if (this.m_lockColumn[e])
                          for (var t = 0; t < Game_Define.ROW; t++)
                            this.m_selectPlateInfo[e][t] ==
                              Game_Define.SelectSymbol.Select_Frame &&
                              Game_Define.LastSelectPlate[e][t] ==
                                Game_Define.SelectSymbol.None &&
                              (this.m_performSelectPlateInfo[e][t] =
                                Game_Define.SelectSymbol.Select_Frame),
                              this.m_plateInfo[e][t] !==
                                Game_Define.Symbol.Symbol_Mystery &&
                                (this.m_performSelectPlateInfo[e][t] =
                                  this.RandomSelectSymbol(
                                    Game_Define.NON_MYSTERY_SELECT_PROBABILITY
                                  ));
                    }
                  }),
                  (n.Pos2Vec = function (e) {
                    return new Vec3(
                      Math.floor(e / Game_Define.COL),
                      e % Game_Define.COL,
                      0
                    );
                  }),
                  (n.ShiftSelectPlate = function () {
                    Game_Define.CurrentLevelUpNum = 0;
                    for (var e = 0; e < Game_Define.COL; e++) {
                      Game_Define.IsNudgeUp
                        ? (Game_Define.LastSelectPlate[e].pop(),
                          Game_Define.LastSelectPlate[e].unshift(0))
                        : (Game_Define.LastSelectPlate[e].shift(),
                          Game_Define.LastSelectPlate[e].push(0));
                      for (var t = 0; t < Game_Define.ROW; t++)
                        Game_Define.LastSelectPlate[e][t] ==
                          Game_Define.SelectSymbol.Select_Frame &&
                          Game_Define.CurrentLevelUpNum++;
                    }
                  }),
                  _createClass(t, [
                    {
                      key: "SymbolSize",
                      get: function () {
                        return this.m_symbolSize;
                      },
                    },
                    {
                      key: "PlateInfo",
                      get: function () {
                        return this.m_plateInfo;
                      },
                    },
                    {
                      key: "SelectPlateInfo",
                      get: function () {
                        return this.m_selectPlateInfo;
                      },
                    },
                    {
                      key: "LockColumn",
                      get: function () {
                        return this.m_lockColumn;
                      },
                    },
                  ]),
                  t
                );
              })(Component)),
              (_descriptor$3 = _applyDecoratedDescriptor(
                _class2$3.prototype,
                "m_symbolSpriteFrames",
                [_dec$4],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor2$3 = _applyDecoratedDescriptor(
                _class2$3.prototype,
                "m_selectSpriteFrames",
                [_dec2$3],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_class$4 = _class2$3))
            ) || _class$4),
          _dec$5,
          _dec2$4,
          _class$5,
          _class2$4,
          _descriptor$4;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "b157c+P4RROOrynXFdYclhN",
            "SymbolSpine",
            void 0
          );
        var AnimName$2 = { Win: "Win", Stop: "Stop" },
          ccclass$5 = _decorator.ccclass,
          property$4 = _decorator.property,
          SymbolSpine =
            ((_dec$5 = ccclass$5("SymbolSpine")),
            (_dec2$4 = property$4({ type: sp.Skeleton, tooltip: "Spine" })),
            _dec$5(
              ((_class2$4 = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(i)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_spine",
                      _descriptor$4,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.ShowWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$2.Win, !1)
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
                  (n.PlayAnimation = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === n && (n = !1),
                                    Game_Define.DebugMode &&
                                      (this.m_spine.getState().timeScale =
                                        Game_Define.DebugSpeed),
                                    (this.node.active = !0),
                                    (e.next = 5),
                                    SpineKit.PlayAnimation(this.m_spine, t, n)
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
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  t
                );
              })(Component)),
              (_descriptor$4 = _applyDecoratedDescriptor(
                _class2$4.prototype,
                "m_spine",
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
              (_class$5 = _class2$4))
            ) || _class$5);
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "0126cFRsN1B/Z99sQEZtv+E", "NodePool", void 0);
        var NodePool = (function () {
            function e() {
              if (
                ((this.m_symbolEffectPrefabs = null),
                (this.m_symbolEffectNodes = {}),
                (this.m_coinSymbolEffectPrefabs = null),
                (this.m_coinSymbolEffectNodes = {}),
                (this.m_fxShootPrefab = null),
                (this.m_fxShootNodes = null),
                (this.m_fxCoinPrefab = null),
                (this.m_fxCoinNodes = null),
                (this.m_goldFramePrefab = null),
                (this.m_goldFrameNodes = null),
                (this.m_greenBgPrefab = null),
                (this.m_greenBgNodes = null),
                (this.m_fxSelectPrefab = null),
                (this.m_fxSelectNodes = null),
                e._instance)
              )
                throw new Error(
                  "Error: Instantiation failed: Use NodePool.getInstance() instead of new."
                );
              e._instance = this;
            }
            e.getInstance = function () {
              return this._instance || (this._instance = new e()), e._instance;
            };
            var t = e.prototype;
            return (
              (t.SetEffectPrefabs = function (e, t, n, i, o, r) {
                this.m_symbolEffectPrefabs = e;
                for (var a = 0; a < e.length; a++)
                  this.m_symbolEffectNodes[e[a].name] = new Array();
                this.m_coinSymbolEffectPrefabs = t;
                for (var s = 0; s < t.length; s++)
                  this.m_coinSymbolEffectNodes[t[s].name] = new Array();
                (this.m_fxShootPrefab = n),
                  (this.m_fxShootNodes = new Array()),
                  (this.m_fxCoinPrefab = i),
                  (this.m_fxCoinNodes = new Array()),
                  (this.m_goldFramePrefab = o),
                  (this.m_goldFrameNodes = new Array()),
                  (this.m_fxSelectPrefab = r),
                  (this.m_fxSelectNodes = new Array());
              }),
              (t.SetGreenBgPrefab = function (e) {
                (this.m_greenBgPrefab = e), (this.m_greenBgNodes = new Array());
              }),
              (t.GetSymbolEffectNode = function (e) {
                var t = this.m_symbolEffectPrefabs[e],
                  n = t.name;
                return this.m_symbolEffectNodes[n] &&
                  this.m_symbolEffectNodes[n].length > 0
                  ? this.m_symbolEffectNodes[n].shift()
                  : instantiate(t);
              }),
              (t.GetCoinSymbolEffectNode = function (e) {
                var t = this.m_coinSymbolEffectPrefabs[e],
                  n = t.name;
                return this.m_coinSymbolEffectNodes[n] &&
                  this.m_coinSymbolEffectNodes[n].length > 0
                  ? this.m_coinSymbolEffectNodes[n].shift()
                  : instantiate(t);
              }),
              (t.GetFxShootEffectNode = function () {
                var e = this.m_fxShootPrefab;
                return this.m_fxShootNodes && this.m_fxShootNodes.length > 0
                  ? this.m_fxShootNodes.shift()
                  : instantiate(e);
              }),
              (t.GetFxCoinEffectNode = function () {
                var e = this.m_fxCoinPrefab;
                return this.m_fxCoinNodes && this.m_fxCoinNodes.length > 0
                  ? this.m_fxCoinNodes.shift()
                  : instantiate(e);
              }),
              (t.GetGoldFrameEffectNode = function () {
                var e = this.m_goldFramePrefab;
                return this.m_goldFrameNodes && this.m_goldFrameNodes.length > 0
                  ? this.m_goldFrameNodes.shift()
                  : instantiate(e);
              }),
              (t.GetGreenBgEffectNode = function () {
                var e = this.m_greenBgPrefab;
                return this.m_greenBgNodes && this.m_greenBgNodes.length > 0
                  ? this.m_greenBgNodes.shift()
                  : instantiate(e);
              }),
              (t.GetFxSelectEffectNode = function () {
                var e = this.m_fxSelectPrefab;
                return this.m_fxSelectNodes && this.m_fxSelectNodes.length > 0
                  ? this.m_fxSelectNodes.shift()
                  : instantiate(e);
              }),
              (t.ReturnSymbolEffect = function (e) {
                this.m_symbolEffectNodes[e.name] ||
                  (this.m_symbolEffectNodes[e.name] = []),
                  this.m_symbolEffectNodes[e.name].push(e);
              }),
              (t.ReturnCoinSymbolEffect = function (e) {
                this.m_coinSymbolEffectNodes[e.name] ||
                  (this.m_coinSymbolEffectNodes[e.name] = []),
                  this.m_coinSymbolEffectNodes[e.name].push(e);
              }),
              (t.ReturnFxShootEffect = function (e) {
                this.m_fxShootNodes || (this.m_fxShootNodes = []),
                  this.m_fxShootNodes.push(e);
              }),
              (t.ReturnFxCoinEffect = function (e) {
                this.m_fxCoinNodes || (this.m_fxCoinNodes = []),
                  this.m_fxCoinNodes.push(e);
              }),
              (t.ReturnGoldFrameEffect = function (e) {
                this.m_goldFrameNodes || (this.m_goldFrameNodes = []),
                  this.m_goldFrameNodes.push(e);
              }),
              (t.ReturnGreenBgEffect = function (e) {
                this.m_greenBgNodes || (this.m_greenBgNodes = []),
                  this.m_greenBgNodes.push(e);
              }),
              (t.ReturnFxSelectEffect = function (e) {
                this.m_fxSelectNodes || (this.m_fxSelectNodes = []),
                  this.m_fxSelectNodes.push(e);
              }),
              e
            );
          })(),
          _dec$6,
          _dec2$5,
          _class$6,
          _class2$5,
          _descriptor$5;
        (NodePool._instance = new NodePool()),
          cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "1b34e+BW3VOdZcp+SenLxDm",
            "MysterySpine",
            void 0
          );
        var SkinName = { Gold: "Gold", Green: "Green" },
          AnimName$3 = {
            Close: "Close",
            Close_NF: "Close_NF",
            End: "End",
            Level_Up: "Level_Up",
            Open: "Open",
            Open_NF: "Open_NF",
            Stop: "Stop",
          },
          ccclass$6 = _decorator.ccclass,
          property$5 = _decorator.property,
          MysterySpine =
            ((_dec$6 = ccclass$6("MysterySpine")),
            (_dec2$5 = property$5({ type: sp.Skeleton, tooltip: "Spine" })),
            _dec$6(
              ((_class2$5 = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(i)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_spine",
                      _descriptor$5,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.SetSkin = function (e) {
                    e
                      ? this.m_spine.setSkin(SkinName.Gold)
                      : this.m_spine.setSkin(SkinName.Green);
                  }),
                  (n.ShowSkin = function (e) {
                    e
                      ? (this.m_spine.setSkin(SkinName.Gold),
                        this.PlayAnimation(AnimName$3.Open),
                        (this.m_spine.paused = !0))
                      : (this.m_spine.setSkin(SkinName.Green),
                        this.PlayAnimation(AnimName$3.Open),
                        (this.m_spine.paused = !0));
                  }),
                  (n.ShowOpen = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (n = Game_Define.IsHardStop ? 1.5 : 1),
                                    this.SetSkin(t),
                                    (e.next = 4),
                                    this.PlayAnimation(AnimName$3.Open, !1, n)
                                  );
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
                  (n.ShowClose = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (n = Game_Define.IsHardStop ? 2 : 1.5),
                                    this.SetSkin(t),
                                    (e.next = 4),
                                    this.PlayAnimation(AnimName$3.Close, !1, n)
                                  );
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
                  (n.ShowLevelUp = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    this.m_spine.setSkin(SkinName.Green),
                                    (e.next = 3),
                                    this.PlayAnimation(AnimName$3.Level_Up)
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
                  (n.PlayAnimation = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n, i) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === n && (n = !1),
                                    void 0 === i && (i = 1),
                                    Game_Define.DebugMode
                                      ? (this.m_spine.getState().timeScale =
                                          Game_Define.DebugSpeed)
                                      : (this.m_spine.getState().timeScale = i),
                                    (this.m_spine.paused = !1),
                                    (this.node.active = !0),
                                    (e.next = 7),
                                    SpineKit.PlayAnimation(this.m_spine, t, n)
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
                    return function (t, n, i) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  t
                );
              })(Component)),
              (_descriptor$5 = _applyDecoratedDescriptor(
                _class2$5.prototype,
                "m_spine",
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
              (_class$6 = _class2$5))
            ) || _class$6),
          _dec$7,
          _dec2$6,
          _class$7,
          _class2$6,
          _descriptor$6;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "cf5311zA7FJd6jcUVGWvQU6",
            "MultiplierSpine",
            void 0
          );
        var DefaultSkinName = "default",
          SkinName$1 = { x2: "x2", x3: "x3", x5: "x5", x10: "x10" },
          AnimName$4 = { End: "End", Shoot: "Shoot", Stop: "Stop" },
          ccclass$7 = _decorator.ccclass,
          property$6 = _decorator.property,
          MultiplierSpine =
            ((_dec$7 = ccclass$7("MultiplierSpine")),
            (_dec2$6 = property$6({ type: sp.Skeleton, tooltip: "Spine" })),
            _dec$7(
              ((_class2$6 = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(i)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_spine",
                      _descriptor$6,
                      _assertThisInitialized(t)
                    ),
                    (t.m_skinName = DefaultSkinName),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.PlayStop = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.m_skinName = SkinName$1["x" + t]),
                                    (e.next = 3),
                                    this.PlayAnimation(AnimName$4.Stop)
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
                  (n.PlayShoot = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.m_skinName = SkinName$1["x" + t]),
                                    (e.next = 3),
                                    this.PlayAnimation(AnimName$4.Shoot)
                                  );
                                case 3:
                                  this.PlayAnimation(AnimName$4.End);
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
                  (n.PlayAnimation = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === n && (n = !1),
                                    Game_Define.DebugMode &&
                                      (this.m_spine.getState().timeScale =
                                        Game_Define.DebugSpeed),
                                    this.m_spine.setSkin(this.m_skinName),
                                    (this.node.active = !0),
                                    (e.next = 6),
                                    SpineKit.PlayAnimation(this.m_spine, t, n)
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
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  t
                );
              })(Component)),
              (_descriptor$6 = _applyDecoratedDescriptor(
                _class2$6.prototype,
                "m_spine",
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
              (_class$7 = _class2$6))
            ) || _class$7),
          _dec$8,
          _dec2$7,
          _class$8,
          _class2$7,
          _descriptor$7;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "5ed65N3d5pDcpXQenvIPVuX",
            "FxShootSpine",
            void 0
          );
        var AnimName$5 = { Shoot: "Shoot" },
          ccclass$8 = _decorator.ccclass,
          property$7 = _decorator.property,
          FxShootSpine =
            ((_dec$8 = ccclass$8("FxShootSpine")),
            (_dec2$7 = property$7({ type: sp.Skeleton, tooltip: "Spine" })),
            _dec$8(
              ((_class2$7 = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(i)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_spine",
                      _descriptor$7,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.PlayShoot = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n, i;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (n = this.m_spine.findBone("HP_B")),
                                    (i = this.node
                                      .getComponent(UITransform)
                                      .convertToNodeSpaceAR(t)),
                                    (n.x = i.x),
                                    (n.y = i.y),
                                    (e.next = 6),
                                    this.PlayAnimation(AnimName$5.Shoot)
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.PlayAnimation = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === n && (n = !1),
                                    Game_Define.DebugMode &&
                                      (this.m_spine.getState().timeScale =
                                        Game_Define.DebugSpeed),
                                    (this.node.active = !0),
                                    (e.next = 5),
                                    SpineKit.PlayAnimation(
                                      this.m_spine,
                                      t,
                                      n,
                                      0,
                                      null,
                                      !1
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
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  t
                );
              })(Component)),
              (_descriptor$7 = _applyDecoratedDescriptor(
                _class2$7.prototype,
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
              (_class$8 = _class2$7))
            ) || _class$8),
          _dec$9,
          _dec2$8,
          _class$9,
          _class2$8,
          _descriptor$8;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "d3efc5WA9BDHrAIxsG2WWuo",
            "FxCoinSpine",
            void 0
          );
        var AnimName$6 = {
            End: "End",
            Plus: "Plus",
            Plus_Change: "Plus_Change",
            Plus_Change_S: "Plus_Change_S",
            Plus_S: "Plus_S",
            FG_Outro: "FG_Outro",
            FG_Outro_S: "FG_Outro_S",
          },
          ccclass$9 = _decorator.ccclass,
          property$8 = _decorator.property,
          FxCoinSpine =
            ((_dec$9 = ccclass$9("FxCoinSpine")),
            (_dec2$8 = property$8({ type: sp.Skeleton, tooltip: "Spine" })),
            _dec$9(
              ((_class2$8 = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(i)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_spine",
                      _descriptor$8,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.PlayPlus = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$6.Plus)
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
                  (n.PlayPlus_S = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$6.Plus_S)
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
                  (n.PlayPlusChange = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$6.Plus_Change)
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
                  (n.PlayPlusChange_S = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$6.Plus_Change_S)
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
                  (n.PlayEnd = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$6.End)
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
                  (n.PlayWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (!(t >= Game_Define.COIN_LEVEL.Super)) {
                                    e.next = 5;
                                    break;
                                  }
                                  return (
                                    (e.next = 3),
                                    this.PlayAnimation(AnimName$6.FG_Outro_S)
                                  );
                                case 3:
                                  e.next = 7;
                                  break;
                                case 5:
                                  return (
                                    (e.next = 7),
                                    this.PlayAnimation(AnimName$6.FG_Outro)
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.PlayAnimation = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === n && (n = !1),
                                    Game_Define.DebugMode &&
                                      (this.m_spine.getState().timeScale =
                                        Game_Define.DebugSpeed),
                                    (this.node.active = !0),
                                    (e.next = 5),
                                    SpineKit.PlayAnimation(this.m_spine, t, n)
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
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  t
                );
              })(Component)),
              (_descriptor$8 = _applyDecoratedDescriptor(
                _class2$8.prototype,
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
              (_class$9 = _class2$8))
            ) || _class$9),
          _dec$a,
          _dec2$9,
          _dec3$2,
          _class$a,
          _class2$9,
          _descriptor$9,
          _descriptor2$4;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "f98eb6NYZVDwp0kAuLFJJQn",
            "CoinSymbolSpine",
            void 0
          );
        var AnimName$7 = {
            Collect: "Collect",
            Loop: "Loop",
            Plus: "Plus",
            Plus_Change: "Plus_Change",
            Plus_End: "Plus_End",
            FG_Outro: "FG_Outro",
          },
          ccclass$a = _decorator.ccclass,
          property$9 = _decorator.property,
          CoinSymbolSpine =
            ((_dec$a = ccclass$a("CoinSymbolSpine")),
            (_dec2$9 = property$9({ type: sp.Skeleton, tooltip: "Spine" })),
            (_dec3$2 = property$9({ type: Label, tooltip: "硬幣上的數字" })),
            _dec$a(
              ((_class2$9 = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(i)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_spine",
                      _descriptor$9,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_label",
                      _descriptor2$4,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.SetCoinLabel = function (e) {
                    this.m_label.string = e.toString();
                  }),
                  (n.PlayPlus = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    tween(this.node)
                                      .delay(0.5)
                                      .call(function () {
                                        n.SetCoinLabel(t);
                                      })
                                      .start(),
                                    (e.next = 3),
                                    this.PlayAnimation(AnimName$7.Plus)
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
                  (n.PlayPlusChange = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    this.SetCoinLabel(t),
                                    (e.next = 3),
                                    this.PlayAnimation(AnimName$7.Plus_Change)
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
                  (n.PlayCollect = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    tween(this.node)
                                      .to(0.1, { position: t })
                                      .start(),
                                    this.PlayAnimation(
                                      AnimName$7.Collect,
                                      !1,
                                      1.5
                                    ),
                                    (e.next = 4),
                                    node$2.Wait(this, 0.1)
                                  );
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
                  (n.PlayWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$7.FG_Outro)
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
                  (n.PlayLoop = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$7.Loop)
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
                  (n.PlayAnimation = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n, i) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === n && (n = !1),
                                    void 0 === i && (i = 1),
                                    Game_Define.DebugMode
                                      ? (this.m_spine.getState().timeScale =
                                          Game_Define.DebugSpeed)
                                      : (this.m_spine.getState().timeScale = i),
                                    (this.node.active = !0),
                                    (e.next = 6),
                                    SpineKit.PlayAnimation(this.m_spine, t, n)
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
                    return function (t, n, i) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  t
                );
              })(Component)),
              (_descriptor$9 = _applyDecoratedDescriptor(
                _class2$9.prototype,
                "m_spine",
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
              (_descriptor2$4 = _applyDecoratedDescriptor(
                _class2$9.prototype,
                "m_label",
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
              (_class$a = _class2$9))
            ) || _class$a),
          _dec$b,
          _dec2$a,
          _dec3$3,
          _class$b,
          _class2$a,
          _descriptor$a,
          _descriptor2$5;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "1e0c95BhxlHA55ubvGurfmc",
            "CollectorSpine",
            void 0
          );
        var AnimName$8 = {
            Collect: "Collect",
            Collect_End: "Collect_End",
            Collect_Start: "Collect_Start",
            Plus_Change: "Plus_Change",
            Stop: "Stop",
          },
          ccclass$b = _decorator.ccclass,
          property$a = _decorator.property,
          CollectorSpine =
            ((_dec$b = ccclass$b("CollectorSpine")),
            (_dec2$a = property$a({ type: sp.Skeleton, tooltip: "Spine" })),
            (_dec3$3 = property$a({
              type: Label,
              tooltip: "Collector上的數字",
            })),
            _dec$b(
              ((_class2$a = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(i)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_spine",
                      _descriptor$a,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_label",
                      _descriptor2$5,
                      _assertThisInitialized(t)
                    ),
                    (t.m_totalWin = 0),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.SetLabel = function (e) {
                    this.m_label.string = e.toString();
                  }),
                  (n.PlayStop = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$8.Stop)
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
                  (n.PlayCollectStart = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.m_totalWin = 0),
                                    (this.m_totalWin += t),
                                    tween(this.node)
                                      .delay(0.167 / Game_Define.CollectSpeed)
                                      .call(function () {
                                        n.SetLabel(n.m_totalWin);
                                      })
                                      .start(),
                                    (e.next = 5),
                                    this.PlayAnimation(
                                      AnimName$8.Collect_Start,
                                      !1,
                                      Game_Define.CollectSpeed
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.PlayCollect = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.m_totalWin += t),
                                    tween(this.node)
                                      .delay(0.25 / Game_Define.CollectSpeed)
                                      .call(function () {
                                        n.SetLabel(n.m_totalWin);
                                      })
                                      .start(),
                                    (e.next = 4),
                                    this.PlayAnimation(
                                      AnimName$8.Collect,
                                      !1,
                                      Game_Define.CollectSpeed
                                    )
                                  );
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
                  (n.PlayCollectEnd = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.m_totalWin += t),
                                    tween(this.node)
                                      .delay(0.5)
                                      .call(function () {
                                        node.Play(
                                          Game_Define.AudioClips
                                            .Coin_Appear_Collector_Change_B
                                        );
                                      })
                                      .start(),
                                    tween(this.node)
                                      .delay(0.583)
                                      .call(function () {
                                        n.SetLabel(n.m_totalWin),
                                          node.Play(
                                            Game_Define.AudioClips
                                              .Coin_Appear_Collector_Change_B
                                          );
                                      })
                                      .start(),
                                    (e.next = 5),
                                    this.PlayAnimation(AnimName$8.Collect_End)
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.PlayPlusChange = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$8.Plus_Change)
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
                  (n.PlayAnimation = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n, i) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === n && (n = !1),
                                    void 0 === i && (i = 1),
                                    Game_Define.DebugMode
                                      ? (this.m_spine.getState().timeScale =
                                          Game_Define.DebugSpeed)
                                      : (this.m_spine.getState().timeScale = i),
                                    (this.node.active = !0),
                                    (e.next = 6),
                                    SpineKit.PlayAnimation(this.m_spine, t, n)
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
                    return function (t, n, i) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  t
                );
              })(Component)),
              (_descriptor$a = _applyDecoratedDescriptor(
                _class2$a.prototype,
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
              (_descriptor2$5 = _applyDecoratedDescriptor(
                _class2$a.prototype,
                "m_label",
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
              (_class$b = _class2$a))
            ) || _class$b),
          _dec$c,
          _dec2$b,
          _class$c,
          _class2$b,
          _descriptor$b;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "be397OgmJZIy5MaEQansLUN",
            "ConverterSpine",
            void 0
          );
        var AnimName$9 = {
            Attack_Change: "Attack_Change",
            Change: "Change",
            Stop: "Stop",
          },
          ccclass$c = _decorator.ccclass,
          property$b = _decorator.property,
          ConverterSpine =
            ((_dec$c = ccclass$c("ConverterSpine")),
            (_dec2$b = property$b({ type: sp.Skeleton, tooltip: "Spine" })),
            _dec$c(
              ((_class2$b = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(i)) || this),
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
                var n = t.prototype;
                return (
                  (n.PlayStop = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$9.Stop)
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
                  (n.PlayChange = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$9.Change)
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
                  (n.PlayAttackChange = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    this.PlayAnimation(
                                      AnimName$9.Attack_Change
                                    ),
                                    (e.next = 3),
                                    node$2.Wait(this, 1)
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
                  (n.PlayAnimation = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === n && (n = !1),
                                    Game_Define.DebugMode &&
                                      (this.m_spine.getState().timeScale =
                                        Game_Define.DebugSpeed),
                                    (this.node.active = !0),
                                    (e.next = 5),
                                    SpineKit.PlayAnimation(this.m_spine, t, n)
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
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  t
                );
              })(Component)),
              (_descriptor$b = _applyDecoratedDescriptor(
                _class2$b.prototype,
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
              (_class$c = _class2$b))
            ) || _class$c),
          _dec$d,
          _dec2$c,
          _class$d,
          _class2$c,
          _descriptor$c;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "e3e7bayKatIvqRgOHUfAmeK",
            "GoldLionSpine",
            void 0
          );
        var GlodenLionAnimName = {
            Attack_Change: "Attack_Change",
            Change: "Change",
            Loop: "Loop",
            Stop: "Stop",
          },
          ccclass$d = _decorator.ccclass,
          property$c = _decorator.property,
          GoldLionSpine =
            ((_dec$d = ccclass$d("GoldLionSpine")),
            (_dec2$c = property$c({ type: sp.Skeleton, tooltip: "Spine" })),
            _dec$d(
              ((_class2$c = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(i)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_spine",
                      _descriptor$c,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.PlayStopAndLoop = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(GlodenLionAnimName.Stop)
                                  );
                                case 2:
                                  return (
                                    (e.next = 4),
                                    this.PlayAnimation(GlodenLionAnimName.Loop)
                                  );
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
                  (n.PlayChange = (function () {
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
                                      GlodenLionAnimName.Change
                                    )
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
                  (n.PlayAttackChange = (function () {
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
                                      GlodenLionAnimName.Attack_Change
                                    )
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
                  (n.PlayAnimation = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === n && (n = !1),
                                    Game_Define.DebugMode &&
                                      (this.m_spine.getState().timeScale =
                                        Game_Define.DebugSpeed),
                                    (this.node.active = !0),
                                    (e.next = 5),
                                    SpineKit.PlayAnimation(this.m_spine, t, n)
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
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  t
                );
              })(Component)),
              (_descriptor$c = _applyDecoratedDescriptor(
                _class2$c.prototype,
                "m_spine",
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
              (_class$d = _class2$c))
            ) || _class$d),
          _dec$e,
          _dec2$d,
          _class$e,
          _class2$d,
          _descriptor$d;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "f223bEpWOFJpord0ZDYlL7C",
            "GoldFrameSpine",
            void 0
          );
        var AnimName$a = {
            Attack_Change: "Attack_Change",
            End: "End",
            Loop: "Loop",
            Symbol_11_Change: "Symbol_11_Change",
            Symbol_18_Change: "Symbol_18_Change",
          },
          ccclass$e = _decorator.ccclass,
          property$d = _decorator.property,
          GoldFrameSpine =
            ((_dec$e = ccclass$e("GoldFrameSpine")),
            (_dec2$d = property$d({ type: sp.Skeleton, tooltip: "Spine" })),
            _dec$e(
              ((_class2$d = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(i)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_spine",
                      _descriptor$d,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.PlaySymbol11Change = (function () {
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
                                      AnimName$a.Symbol_11_Change
                                    )
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
                  (n.PlayEnd = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$a.End)
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
                  (n.PlayAnimation = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === n && (n = !1),
                                    Game_Define.DebugMode &&
                                      (this.m_spine.getState().timeScale =
                                        Game_Define.DebugSpeed),
                                    (this.node.active = !0),
                                    (e.next = 5),
                                    SpineKit.PlayAnimation(this.m_spine, t, n)
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
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  t
                );
              })(Component)),
              (_descriptor$d = _applyDecoratedDescriptor(
                _class2$d.prototype,
                "m_spine",
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
              (_class$e = _class2$d))
            ) || _class$e),
          _dec$f,
          _dec2$e,
          _class$f,
          _class2$e,
          _descriptor$e;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "f9a7c2Sf1hFtKFh8d4q8HaL",
            "GreenBgSpine",
            void 0
          );
        var AnimName$b = {
            Attack_Change: "Attack_Change",
            End: "End",
            Loop: "Loop",
            Symbol_11_Change: "Symbol_11_Change",
            Symbol_18_Change: "Symbol_18_Change",
          },
          ccclass$f = _decorator.ccclass,
          property$e = _decorator.property,
          GreenBgSpine =
            ((_dec$f = ccclass$f("GreenBgSpine")),
            (_dec2$e = property$e({ type: sp.Skeleton, tooltip: "Spine" })),
            _dec$f(
              ((_class2$e = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(i)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_spine",
                      _descriptor$e,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.PlaySymbol11Change = (function () {
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
                                      AnimName$b.Symbol_11_Change
                                    )
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
                  (n.PlayEnd = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$b.End)
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
                  (n.PlayAnimation = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === n && (n = !1),
                                    Game_Define.DebugMode &&
                                      (this.m_spine.getState().timeScale =
                                        Game_Define.DebugSpeed),
                                    (this.node.active = !0),
                                    (e.next = 5),
                                    SpineKit.PlayAnimation(this.m_spine, t, n)
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
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  t
                );
              })(Component)),
              (_descriptor$e = _applyDecoratedDescriptor(
                _class2$e.prototype,
                "m_spine",
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
              (_class$f = _class2$e))
            ) || _class$f),
          _dec$g,
          _dec2$f,
          _class$g,
          _class2$f,
          _descriptor$f;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "ea91emtGidLE4V6zJ+HtGAu",
            "ScatterSpine",
            void 0
          );
        var AnimName$c = { Nearwin: "Nearwin", Stop: "Stop", Win: "Win" },
          ccclass$g = _decorator.ccclass,
          property$f = _decorator.property,
          ScatterSpine =
            ((_dec$g = ccclass$g("ScatterSpine")),
            (_dec2$f = property$f({ type: sp.Skeleton, tooltip: "Spine" })),
            _dec$g(
              ((_class2$f = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(i)) || this),
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
                var n = t.prototype;
                return (
                  (n.PlayStop = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$c.Stop, !1)
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
                  (n.PlayNearWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$c.Nearwin, !0)
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
                  (n.PlayWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$c.Win, !0)
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
                  (n.PlayAnimation = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === n && (n = !1),
                                    Game_Define.DebugMode &&
                                      (this.m_spine.getState().timeScale =
                                        Game_Define.DebugSpeed),
                                    (this.node.active = !0),
                                    (e.next = 5),
                                    SpineKit.PlayAnimation(this.m_spine, t, n)
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
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  t
                );
              })(Component)),
              (_descriptor$f = _applyDecoratedDescriptor(
                _class2$f.prototype,
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
              (_class$g = _class2$f))
            ) || _class$g),
          _dec$h,
          _dec2$g,
          _dec3$4,
          _dec4$2,
          _dec5$2,
          _dec6$1,
          _dec7$1,
          _class$h,
          _class2$g,
          _descriptor$g,
          _descriptor2$6,
          _descriptor3$2,
          _descriptor4$2,
          _descriptor5$1,
          _descriptor6$1;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "44742wfOb9CTLFQ2jGC/CrH", "FGDeclare", void 0);
        var AnimName$d = { Start: "Start", Loop: "Loop", End: "End" },
          ccclass$h = _decorator.ccclass,
          property$g = _decorator.property,
          FGDeclare =
            ((_dec$h = ccclass$h("FGDeclare")),
            (_dec2$g = property$g({ type: sp.Skeleton, tooltip: "Spine" })),
            (_dec3$4 = property$g({ type: Sprite, tooltip: "CONGRATS" })),
            (_dec4$2 = property$g({
              type: Sprite,
              tooltip: "YOU'RE ENTERING THE",
            })),
            (_dec5$2 = property$g({ type: Sprite, tooltip: "SPECIAL BONUS" })),
            (_dec6$1 = property$g({
              type: Sprite,
              tooltip: "GET UNLIMITED FREE SPINES WHEN",
            })),
            (_dec7$1 = property$g({
              type: Sprite,
              tooltip: "INCREASING MULTIPLIERS",
            })),
            _dec$h(
              ((_class2$g = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(i)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_spine",
                      _descriptor$g,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_text1",
                      _descriptor2$6,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_text2",
                      _descriptor3$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_text3",
                      _descriptor4$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_text4",
                      _descriptor5$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_text5",
                      _descriptor6$1,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.SetTxt = function () {
                    var e = node$1.GetGameAtlas();
                    (this.m_text1.spriteFrame = e.getSpriteFrame(
                      "TXT_Fg_Compliment01"
                    )),
                      (this.m_text2.spriteFrame =
                        e.getSpriteFrame("TXT_Fg_Declare01")),
                      (this.m_text3.spriteFrame =
                        e.getSpriteFrame("TXT_Fg_Declare02")),
                      (this.m_text4.spriteFrame =
                        e.getSpriteFrame("TXT_Fg_Declare03")),
                      (this.m_text5.spriteFrame =
                        e.getSpriteFrame("TXT_Fg_Declare04"));
                  }),
                  (n.PlayStart = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$d.Start, !1)
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
                  (n.PlayLoop = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$d.Loop, !1)
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
                  (n.PlayEnd = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$d.End, !1)
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
                  (n.PlayAnimation = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === n && (n = !1),
                                    Game_Define.DebugMode &&
                                      (this.m_spine.getState().timeScale =
                                        Game_Define.DebugSpeed),
                                    (e.next = 4),
                                    SpineKit.PlayAnimation(this.m_spine, t, n)
                                  );
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
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  t
                );
              })(Component)),
              (_descriptor$g = _applyDecoratedDescriptor(
                _class2$g.prototype,
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
              (_descriptor2$6 = _applyDecoratedDescriptor(
                _class2$g.prototype,
                "m_text1",
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
              (_descriptor3$2 = _applyDecoratedDescriptor(
                _class2$g.prototype,
                "m_text2",
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
                _class2$g.prototype,
                "m_text3",
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
              (_descriptor5$1 = _applyDecoratedDescriptor(
                _class2$g.prototype,
                "m_text4",
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
                _class2$g.prototype,
                "m_text5",
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
              (_class$h = _class2$g))
            ) || _class$h),
          _dec$i,
          _dec2$h,
          _dec3$5,
          _dec4$3,
          _class$i,
          _class2$h,
          _descriptor$h,
          _descriptor2$7,
          _descriptor3$3,
          _descriptor4$3;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "686d3054DVMqbH3zQ2kAVql",
            "Compliment",
            void 0
          );
        var AnimName$e = { Start: "Start", Loop: "Loop", End: "End" },
          ccclass$i = _decorator.ccclass,
          property$h = _decorator.property,
          Compliment =
            ((_dec$i = property$h({ type: sp.Skeleton, tooltip: "Spine" })),
            (_dec2$h = property$h({ type: Label, tooltip: "贏分" })),
            (_dec3$5 = property$h({ type: Sprite, tooltip: "CONGRATS" })),
            (_dec4$3 = property$h({
              type: Sprite,
              tooltip: "DURING SPECIAL BONUS",
            })),
            ccclass$i(
              ((_class2$h = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(i)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_spine",
                      _descriptor$h,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_winLabel",
                      _descriptor2$7,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_text1",
                      _descriptor3$3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_text2",
                      _descriptor4$3,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.SetTxt = function () {
                    var e = node$1.GetGameAtlas();
                    (this.m_text1.spriteFrame = e.getSpriteFrame(
                      "TXT_Fg_Compliment01"
                    )),
                      (this.m_text2.spriteFrame = e.getSpriteFrame(
                        "TXT_Fg_Compliment02"
                      ));
                  }),
                  (n.PlayStart = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$e.Start, !1)
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
                  (n.PlayLoop = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$e.Loop, !1)
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
                  (n.PlayEnd = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$e.End, !1)
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
                  (n.ShowRunningWin = function (e) {
                    var t = this,
                      n = node$3.FORMAT_NUMBER_TYPE.PERMANENT_DOT,
                      i = 4;
                    Game_Define.DebugMode &&
                      (i = node$3.divide(i, Game_Define.DebugSpeed));
                    var o = 0,
                      r = node$3.divide(i, 0.02),
                      a = node$3.divide(e, r);
                    tween(this.node)
                      .repeat(
                        r,
                        tween()
                          .call(function () {
                            (o += a) >= e && (o = e),
                              (t.m_winLabel.string =
                                node$3.FormatNumberThousands(o, n));
                          })
                          .delay(0.02)
                      )
                      .call(function () {
                        t.m_winLabel.string = node$3.FormatNumberThousands(
                          e,
                          n
                        );
                      })
                      .start();
                  }),
                  (n.PlayAnimation = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === n && (n = !1),
                                    Game_Define.DebugMode &&
                                      (this.m_spine.getState().timeScale =
                                        Game_Define.DebugSpeed),
                                    (e.next = 4),
                                    SpineKit.PlayAnimation(this.m_spine, t, n)
                                  );
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
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  t
                );
              })(Component)),
              (_descriptor$h = _applyDecoratedDescriptor(
                _class2$h.prototype,
                "m_spine",
                [_dec$i],
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
                _class2$h.prototype,
                "m_winLabel",
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
              (_descriptor3$3 = _applyDecoratedDescriptor(
                _class2$h.prototype,
                "m_text1",
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
              (_descriptor4$3 = _applyDecoratedDescriptor(
                _class2$h.prototype,
                "m_text2",
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
              (_class$i = _class2$h))
            ) || _class$i),
          _dec$j,
          _dec2$i,
          _class$j,
          _class2$i,
          _descriptor$i;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "30dd1vGSw1H76iqTfZQQx41",
            "NudgeUpSpine",
            void 0
          );
        var AnimName$f = { Win: "Win", Nugde_Up: "Nugde Up" },
          ccclass$j = _decorator.ccclass,
          property$i = _decorator.property,
          NudgeUpSpine =
            ((_dec$j = ccclass$j("NudgeUpSpine")),
            (_dec2$i = property$i({ type: sp.Skeleton, tooltip: "Spine" })),
            _dec$j(
              ((_class2$i = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(i)) || this),
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
                var n = t.prototype;
                return (
                  (n.PlayWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    node.Play(
                                      Game_Define.AudioClips.Coin_NugdeUp_Show
                                    ),
                                    (e.next = 3),
                                    this.PlayAnimation(AnimName$f.Win)
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
                  (n.PlayNudgeUp = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    node.Play(
                                      Game_Define.AudioClips.Coin_NugdeUp
                                    ),
                                    (e.next = 3),
                                    this.PlayAnimation(AnimName$f.Nugde_Up)
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
                  (n.PlayAnimation = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === n && (n = !1),
                                    Game_Define.DebugMode &&
                                      (this.m_spine.getState().timeScale =
                                        Game_Define.DebugSpeed),
                                    (this.node.active = !0),
                                    (e.next = 5),
                                    SpineKit.PlayAnimation(this.m_spine, t, n)
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
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  t
                );
              })(Component)),
              (_descriptor$i = _applyDecoratedDescriptor(
                _class2$i.prototype,
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
              (_class$j = _class2$i))
            ) || _class$j),
          _dec$k,
          _dec2$j,
          _class$k,
          _class2$j,
          _descriptor$j;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "955bfIJRPNBD6FCXc3k1Klc",
            "FxSelectSpine",
            void 0
          );
        var AnimName$g = { End: "End", Loop: "Loop", Stop: "Stop", Win: "Win" },
          ccclass$k = _decorator.ccclass,
          property$j = _decorator.property,
          FxSelectSpine =
            ((_dec$k = ccclass$k("FxSelectSpine")),
            (_dec2$j = property$j({ type: sp.Skeleton, tooltip: "Spine" })),
            _dec$k(
              ((_class2$j = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(i)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_spine",
                      _descriptor$j,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.PlayStop = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$g.Stop, !1)
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
                  (n.PlayWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$g.Win, !1)
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
                  (n.PlayAnimation = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === n && (n = !1),
                                    Game_Define.DebugMode &&
                                      (this.m_spine.getState().timeScale =
                                        Game_Define.DebugSpeed),
                                    (this.node.active = !0),
                                    (e.next = 5),
                                    SpineKit.PlayAnimation(this.m_spine, t, n)
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
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  t
                );
              })(Component)),
              (_descriptor$j = _applyDecoratedDescriptor(
                _class2$j.prototype,
                "m_spine",
                [_dec2$j],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_class$k = _class2$j))
            ) || _class$k),
          _dec$l,
          _dec2$k,
          _dec3$6,
          _dec4$4,
          _dec5$3,
          _dec6$2,
          _dec7$2,
          _dec8$1,
          _dec9$1,
          _dec10$1,
          _dec11,
          _dec12,
          _dec13,
          _class$l,
          _class2$k,
          _descriptor$k,
          _descriptor2$8,
          _descriptor3$4,
          _descriptor4$4,
          _descriptor5$2,
          _descriptor6$2,
          _descriptor7$1,
          _descriptor8$1,
          _descriptor9$1,
          _descriptor10,
          _descriptor11,
          _descriptor12,
          _descriptor13;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "6ce29bc2xhOy7VMiCYykoLL",
            "EffectPlate",
            void 0
          );
        var ccclass$l = _decorator.ccclass,
          property$k = _decorator.property,
          EffectPlate =
            ((_dec$l = property$k({
              type: Prefab,
              tooltip: "每個symbol的特效",
            })),
            (_dec2$k = property$k({
              type: Prefab,
              tooltip: "coinSymbol的特效",
            })),
            (_dec3$6 = property$k({ type: SlotReels, tooltip: "轉輪" })),
            (_dec4$4 = property$k({
              type: Node,
              tooltip: "單格轉輪背景特效層",
            })),
            (_dec5$3 = property$k({ type: Prefab, tooltip: "FxShoot特效" })),
            (_dec6$2 = property$k({ type: Prefab, tooltip: "FxCoin特效" })),
            (_dec7$2 = property$k({ type: Prefab, tooltip: "金框特效" })),
            (_dec8$1 = property$k({ type: Prefab, tooltip: "選取框特效" })),
            (_dec9$1 = property$k({
              type: sp.Skeleton,
              tooltip: "選取框提示特效",
            })),
            (_dec10$1 = property$k({
              type: sp.Skeleton,
              tooltip: "NearWin特效",
            })),
            (_dec11 = property$k({ type: FGDeclare, tooltip: "FG宣告動畫" })),
            (_dec12 = property$k({ type: Compliment, tooltip: "FG結算動畫" })),
            (_dec13 = property$k({
              type: NudgeUpSpine,
              tooltip: "盤面NudgeUp特效",
            })),
            ccclass$l(
              ((_class2$k = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(i)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_symbolEffectPrefabs",
                      _descriptor$k,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_coinSymbolEffectPrefabs",
                      _descriptor2$8,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_slotReels",
                      _descriptor3$4,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_singleSlotBgNode",
                      _descriptor4$4,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fxShootPrefab",
                      _descriptor5$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fxCoinPrefab",
                      _descriptor6$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_goldFramePrefab",
                      _descriptor7$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fxSelectPrefab",
                      _descriptor8$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fxSelectTipSpine",
                      _descriptor9$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_nearWinSpine",
                      _descriptor10,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fgDeclare",
                      _descriptor11,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_compliment",
                      _descriptor12,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_nudgeUpSpine",
                      _descriptor13,
                      _assertThisInitialized(t)
                    ),
                    (t.m_gameView = null),
                    (t.m_symbolEffectNodes = new Array()),
                    (t.m_fxSelectEffectNodes = new Array()),
                    (t.m_mysteryEffectNodes = new Array()),
                    (t.m_flyMysteryEffectNodes = new Array()),
                    (t.m_scatterEffectNodes = new Array()),
                    (t.m_goldLionEffectNodes = new Array()),
                    (t.m_goldFrameEffectNodes = new Array()),
                    (t.m_greenBgEffectNodes = new Array()),
                    (t.m_fxShootEffectNodes = new Array()),
                    (t.m_fxCoinEffectNodes = new Array()),
                    (t.m_coinSymbolEffectNodes = new Array()),
                    (t.m_multiplierEffectNodes = new Array()),
                    (t.m_collectorEffectNode = null),
                    (t.m_converterEffectNode = null),
                    (t.m_nudgeUpEffectNode = null),
                    (t.m_changeSymbols = new Array()),
                    (t.m_singleLineAni = null),
                    (t.m_isFxSelectTipPlaying = [!1, !1, !1, !1, !1]),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.onLoad = function () {
                    for (var e = 0; e < Game_Define.COL; e++) {
                      this.m_symbolEffectNodes.push(new Array()),
                        this.m_fxSelectEffectNodes.push(new Array()),
                        this.m_mysteryEffectNodes.push(new Array()),
                        this.m_flyMysteryEffectNodes.push(new Array()),
                        this.m_scatterEffectNodes.push(new Array()),
                        this.m_goldLionEffectNodes.push(new Array()),
                        this.m_goldFrameEffectNodes.push(new Array()),
                        this.m_greenBgEffectNodes.push(new Array()),
                        this.m_fxShootEffectNodes.push(new Array()),
                        this.m_fxCoinEffectNodes.push(new Array()),
                        this.m_multiplierEffectNodes.push(new Array()),
                        this.m_coinSymbolEffectNodes.push(new Array()),
                        this.m_changeSymbols.push(new Array());
                      for (var t = 0; t < Game_Define.ROW; t++)
                        this.m_changeSymbols[e][t] = -1;
                    }
                  }),
                  (n.Init = function (e) {
                    (this.m_gameView = e),
                      NodePool.getInstance().SetEffectPrefabs(
                        this.m_symbolEffectPrefabs,
                        this.m_coinSymbolEffectPrefabs,
                        this.m_fxShootPrefab,
                        this.m_fxCoinPrefab,
                        this.m_goldFramePrefab,
                        this.m_fxSelectPrefab
                      );
                  }),
                  (n.InitCoinEffect = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, n, i, o, r, a, s, l;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (t = [1, 10, 50, 2500]), (n = 0);
                                case 2:
                                  if (!(n < t.length)) {
                                    e.next = 11;
                                    break;
                                  }
                                  for (i = [], o = 0; o < Game_Define.COL; o++)
                                    for (r = 0; r < Game_Define.ROW; r++)
                                      (a = this.GetCoinSymbol(t[n])),
                                        (s =
                                          NodePool.getInstance().GetCoinSymbolEffectNode(
                                            a
                                          )),
                                        this.node.addChild(s),
                                        (this.m_coinSymbolEffectNodes[o][r] =
                                          s),
                                        (l = s.getComponent(CoinSymbolSpine)),
                                        i.push(l.PlayLoop());
                                  return (e.next = 7), Promise.all(i);
                                case 7:
                                  this.m_gameView.EffectPlate.CleanAllCoinSymbolEffect();
                                case 8:
                                  n++, (e.next = 2);
                                  break;
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
                  (n.InitNearWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, n;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (t = 0; t < Game_Define.COL; t++)
                                    (this.m_nearWinSpine[t].node.active = !0),
                                      this.m_nearWinSpine[t].setAnimation(
                                        0,
                                        "Loop",
                                        !0
                                      );
                                  return (
                                    (e.next = 3),
                                    node$2.Wait(this.m_gameView, 0.1)
                                  );
                                case 3:
                                  for (n = 0; n < Game_Define.COL; n++)
                                    this.CloseNearWin(n);
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
                  (n.ShowSymbolEffect = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        var i, o, r, a, s, l, c, m, u, _, p, f, d;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (i = [], o = 0; o < n.length; o++)
                                    for (
                                      r = n[o].Index ? n[o].Index : 0,
                                        a = Game_Define.SYMBOL_LINE_VEC[r],
                                        s = this.m_gameView.PosIndexToVec3(a),
                                        l = n[o].Symbol ? n[o].Symbol : 0,
                                        c = 0;
                                      c < n[o].Count;
                                      c++
                                    )
                                      (m = s[c].x),
                                        (u = s[c].y),
                                        (this.m_slotReels.GetSymbolNode(
                                          m,
                                          u
                                        ).active = !1),
                                        (_ = void 0),
                                        this.m_symbolEffectNodes[m][u]
                                          ? (_ = this.m_symbolEffectNodes[m][u])
                                          : ((p =
                                              this.m_slotReels.GetSymbolPosition(
                                                m,
                                                u
                                              )),
                                            (f = void 0),
                                            this.m_changeSymbols[m][u] ==
                                              Game_Define.Symbol.Symbol_Wild ||
                                            t[m][u] ==
                                              Game_Define.Symbol.Symbol_Wild
                                              ? ((_ =
                                                  NodePool.getInstance().GetSymbolEffectNode(
                                                    Game_Define.Symbol
                                                      .Symbol_Wild
                                                  )),
                                                (f =
                                                  Game_Define.Symbol
                                                    .Symbol_Wild))
                                              : ((_ =
                                                  NodePool.getInstance().GetSymbolEffectNode(
                                                    l
                                                  )),
                                                (f = l)),
                                            _.setPosition(p),
                                            this.node.addChild(_),
                                            this.SetZIndex(_, f),
                                            (this.m_symbolEffectNodes[m][u] =
                                              _)),
                                        (d = _.getComponent(SymbolSpine)),
                                        i.push(d.ShowWin());
                                  return (e.next = 4), Promise.all(i);
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
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.ShowSingleLineEffect = function (e, t) {
                    var n = this;
                    if (!this.m_singleLineAni && t && 0 !== t.length) {
                      var i = t.length,
                        o = 0;
                      this.m_singleLineAni = tween(this.node)
                        .repeatForever(
                          tween()
                            .call(function () {
                              n.CleanAllSymbolEffect(),
                                n.m_slotReels.ShowStaticSymbol();
                              for (
                                var r = t[o].Index ? t[o].Index : 0,
                                  a = Game_Define.SYMBOL_LINE_VEC[r],
                                  s = n.m_gameView.PosIndexToVec3(a),
                                  l = t[o].Symbol ? t[o].Symbol : 0,
                                  c = 0;
                                c < t[o].Count;
                                c++
                              ) {
                                var m = s[c].x,
                                  u = s[c].y;
                                n.m_slotReels.GetSymbolNode(m, u).active = !1;
                                var _ = void 0;
                                if (n.m_symbolEffectNodes[m][u])
                                  _ = n.m_symbolEffectNodes[m][u];
                                else {
                                  var p = n.m_slotReels.GetSymbolPosition(m, u),
                                    f = void 0;
                                  n.m_changeSymbols[m][u] ==
                                    Game_Define.Symbol.Symbol_Wild ||
                                  e[m][u] == Game_Define.Symbol.Symbol_Wild
                                    ? ((_ =
                                        NodePool.getInstance().GetSymbolEffectNode(
                                          Game_Define.Symbol.Symbol_Wild
                                        )),
                                      (f = Game_Define.Symbol.Symbol_Wild))
                                    : ((_ =
                                        NodePool.getInstance().GetSymbolEffectNode(
                                          l
                                        )),
                                      (f = l)),
                                    _.setPosition(p),
                                    n.node.addChild(_),
                                    n.SetZIndex(_, f),
                                    (n.m_symbolEffectNodes[m][u] = _);
                                }
                                _.getComponent(SymbolSpine).ShowWin();
                              }
                              o < i - 1 ? o++ : (o = 0);
                            })
                            .delay(Game_Define.DELAY.SYMBOL_WIN)
                        )
                        .start();
                    }
                  }),
                  (n.StopSingleLineEffect = function () {
                    this.m_singleLineAni &&
                      (this.m_singleLineAni.stop(),
                      (this.m_singleLineAni = null));
                  }),
                  (n.SingleSpecialSymbolStop = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n, i, o) {
                        var r, a, s, l, c, m, u, _, p, f, d, h, y, S, g, b;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((r = this.m_slotReels.GetSymbolPosition(
                                      t,
                                      n
                                    )),
                                    i !=
                                      Game_Define.SpecialSymbol
                                        .Symbol_Multiplier)
                                  ) {
                                    e.next = 14;
                                    break;
                                  }
                                  if (0 == (a = Math.abs(o)))
                                    for (
                                      s =
                                        this.m_gameView.SpinAck.RoundQueue[
                                          Game_Define.RoundIdx
                                        ],
                                        l =
                                          s.ComboStageData[Game_Define.ComboIdx]
                                            .MysteryGolden,
                                        c = l.Mult,
                                        m = 0;
                                      m < c.length;
                                      m++
                                    )
                                      (u = c[m].Pos ? c[m].Pos : 0),
                                        (_ = this.m_gameView.PosIndexToVec3([
                                          u,
                                        ])[0]).x == t &&
                                          _.y == n &&
                                          (a = c[m].Mul);
                                  return (
                                    (p =
                                      NodePool.getInstance().GetSymbolEffectNode(
                                        Game_Define.SpecialSymbol
                                          .Symbol_Multiplier
                                      )).setPosition(r),
                                    this.node.addChild(p),
                                    node$3.SetOrderedZindex(
                                      p,
                                      Game_Define.EFFECT_ZINDEX.MULTIPLIER
                                    ),
                                    (this.m_multiplierEffectNodes[t][n] = p),
                                    (f = p.getComponent(MultiplierSpine)),
                                    (e.next = 12),
                                    f.PlayStop(a)
                                  );
                                case 12:
                                  e.next = 45;
                                  break;
                                case 14:
                                  if (
                                    i !=
                                    Game_Define.SpecialSymbol.Symbol_Collector
                                  ) {
                                    e.next = 25;
                                    break;
                                  }
                                  return (
                                    (d =
                                      NodePool.getInstance().GetSymbolEffectNode(
                                        Game_Define.SpecialSymbol
                                          .Symbol_Collector
                                      )).setPosition(r),
                                    this.node.addChild(d),
                                    node$3.SetOrderedZindex(
                                      d,
                                      Game_Define.EFFECT_ZINDEX.COLLECTOR
                                    ),
                                    (this.m_collectorEffectNode = d),
                                    (h = d.getComponent(CollectorSpine)),
                                    (e.next = 23),
                                    h.PlayStop()
                                  );
                                case 23:
                                  e.next = 45;
                                  break;
                                case 25:
                                  if (
                                    i !=
                                    Game_Define.SpecialSymbol.Symbol_Converter
                                  ) {
                                    e.next = 36;
                                    break;
                                  }
                                  return (
                                    (y =
                                      NodePool.getInstance().GetSymbolEffectNode(
                                        Game_Define.SpecialSymbol
                                          .Symbol_Converter
                                      )).setPosition(r),
                                    this.node.addChild(y),
                                    node$3.SetOrderedZindex(
                                      y,
                                      Game_Define.EFFECT_ZINDEX.CONVERTER
                                    ),
                                    (this.m_converterEffectNode = y),
                                    (S = y.getComponent(ConverterSpine)),
                                    (e.next = 34),
                                    S.PlayStop()
                                  );
                                case 34:
                                  e.next = 45;
                                  break;
                                case 36:
                                  if (i != Game_Define.Symbol.Symbol_Scatter) {
                                    e.next = 45;
                                    break;
                                  }
                                  return (
                                    (g =
                                      NodePool.getInstance().GetSymbolEffectNode(
                                        Game_Define.Symbol.Symbol_Scatter
                                      )).setPosition(r),
                                    this.node.addChild(g),
                                    node$3.SetOrderedZindex(
                                      g,
                                      Game_Define.EFFECT_ZINDEX.SCATTER
                                    ),
                                    (this.m_scatterEffectNodes[t][n] = g),
                                    (b = g.getComponent(ScatterSpine)),
                                    (e.next = 45),
                                    b.PlayStop()
                                  );
                                case 45:
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
                  (n.GetSingleSpecialSymbolEffectNode = function (e, t, n) {
                    if (n == Game_Define.SpecialSymbol.Symbol_Multiplier) {
                      if (this.m_multiplierEffectNodes[e][t])
                        return this.m_multiplierEffectNodes[e][t];
                    } else if (
                      n == Game_Define.SpecialSymbol.Symbol_Collector
                    ) {
                      if (this.m_collectorEffectNode)
                        return this.m_collectorEffectNode;
                    } else if (
                      n == Game_Define.SpecialSymbol.Symbol_Converter
                    ) {
                      if (this.m_converterEffectNode)
                        return this.m_converterEffectNode;
                    } else {
                      if (n != Game_Define.Symbol.Symbol_Scatter) return null;
                      if (this.m_scatterEffectNodes[e][t])
                        return this.m_scatterEffectNodes[e][t];
                    }
                  }),
                  (n.SpecialSymbolStop = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        var i, o, r, a, s;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (i = [], o = 0; o < n.length; o++)
                                    (r = this.m_slotReels.GetSymbolPosition(
                                      t,
                                      o
                                    )),
                                      n[o] ==
                                        Game_Define.Symbol.Symbol_Scatter &&
                                        ((a =
                                          NodePool.getInstance().GetSymbolEffectNode(
                                            Game_Define.Symbol.Symbol_Scatter
                                          )).setPosition(r),
                                        this.node.addChild(a),
                                        node$3.SetOrderedZindex(
                                          a,
                                          Game_Define.EFFECT_ZINDEX.SCATTER
                                        ),
                                        (this.m_scatterEffectNodes[t][o] = a),
                                        (s = a.getComponent(ScatterSpine)),
                                        i.push(s.PlayStop()));
                                  if (0 !== i.length) {
                                    e.next = 4;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 4:
                                  return (e.next = 6), Promise.all(i);
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
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.SetSpecialSymbolPos = function (e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var i = this.m_slotReels.GetSymbolPosition(e, n);
                      t[n] == Game_Define.Symbol.Symbol_Scatter &&
                        this.m_scatterEffectNodes[e][n] &&
                        this.m_scatterEffectNodes[e][n].setPosition(i);
                    }
                  }),
                  (n.AllSpecialSymbolStop = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (n = 0; n < t.length; n++)
                                    this.SpecialSymbolStop(n, t[n]);
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
                  (n.ShowScatterNearWin = function (e, t) {
                    for (var n = 0; n < Game_Define.COL; n++)
                      for (var i = 0; i < Game_Define.ROW; i++)
                        if (
                          e[n][i] == Game_Define.Symbol.Symbol_Scatter &&
                          n < t
                        ) {
                          var o = void 0;
                          if (this.m_scatterEffectNodes[n][i])
                            o = this.m_scatterEffectNodes[n][i];
                          else {
                            var r = this.m_slotReels.GetSymbolPosition(n, i);
                            (o = NodePool.getInstance().GetSymbolEffectNode(
                              Game_Define.Symbol.Symbol_Scatter
                            )).setPosition(r),
                              this.node.addChild(o),
                              node$3.SetOrderedZindex(
                                o,
                                Game_Define.EFFECT_ZINDEX.SCATTER
                              ),
                              (this.m_scatterEffectNodes[n][i] = o);
                          }
                          o.getComponent(ScatterSpine).PlayNearWin();
                        }
                  }),
                  (n.ShowScatterWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n, i, o, r;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    this.m_gameView.SlotReels.ShowSymbolDark(
                                      !0
                                    ),
                                      n = 0;
                                    n < Game_Define.COL;
                                    n++
                                  )
                                    for (i = 0; i < Game_Define.ROW; i++)
                                      t[n][i] ==
                                        Game_Define.Symbol.Symbol_Scatter &&
                                        ((o = void 0),
                                        this.m_scatterEffectNodes[n][i]
                                          ? (o =
                                              this.m_scatterEffectNodes[n][i])
                                          : ((r =
                                              this.m_slotReels.GetSymbolPosition(
                                                n,
                                                i
                                              )),
                                            (o =
                                              NodePool.getInstance().GetSymbolEffectNode(
                                                Game_Define.Symbol
                                                  .Symbol_Scatter
                                              )).setPosition(r),
                                            this.node.addChild(o),
                                            node$3.SetOrderedZindex(
                                              o,
                                              Game_Define.EFFECT_ZINDEX.SCATTER
                                            ),
                                            (this.m_scatterEffectNodes[n][i] =
                                              o)),
                                        o.getComponent(ScatterSpine).PlayWin());
                                  return (
                                    node.Play(
                                      Game_Define.AudioClips.Scatter_Bell
                                    ),
                                    (e.next = 5),
                                    node$2.Wait(this.m_gameView, 1.5)
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.EnterFree = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.m_fgDeclare.node.active = !0),
                                    (e.next = 3),
                                    this.m_fgDeclare.PlayStart()
                                  );
                                case 3:
                                  return (
                                    t(),
                                    (e.next = 6),
                                    this.m_fgDeclare.PlayLoop()
                                  );
                                case 6:
                                  return (
                                    (e.next = 8), this.m_fgDeclare.PlayEnd()
                                  );
                                case 8:
                                  this.m_fgDeclare.node.active = !1;
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
                  (n.LeaveFree = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.m_compliment.node.active = !0),
                                    this.m_compliment.ShowRunningWin(t),
                                    (e.next = 4),
                                    this.m_compliment.PlayStart()
                                  );
                                case 4:
                                  return (
                                    n(),
                                    (e.next = 7),
                                    this.m_compliment.PlayLoop()
                                  );
                                case 7:
                                  return (
                                    (e.next = 9), this.m_compliment.PlayEnd()
                                  );
                                case 9:
                                  this.m_compliment.node.active = !1;
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
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.OpenMystery = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n, i) {
                        var o,
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
                                  for (
                                    o = this.m_gameView.GoldPosToPlate(i),
                                      r = new Array(),
                                      a = function (e) {
                                        for (
                                          var i = function (i) {
                                              if (
                                                t[e][i] ==
                                                Game_Define.Symbol
                                                  .Symbol_Mystery
                                              ) {
                                                var a;
                                                if (
                                                  c.m_mysteryEffectNodes[e][i]
                                                )
                                                  a =
                                                    c.m_mysteryEffectNodes[e][
                                                      i
                                                    ];
                                                else {
                                                  var s =
                                                    c.m_slotReels.GetSymbolPosition(
                                                      e,
                                                      i
                                                    );
                                                  (a =
                                                    NodePool.getInstance().GetSymbolEffectNode(
                                                      Game_Define.Symbol
                                                        .Symbol_Mystery
                                                    )).setPosition(s),
                                                    c.node.addChild(a),
                                                    c.SetZIndex(
                                                      a,
                                                      Game_Define.Symbol
                                                        .Symbol_Mystery
                                                    ),
                                                    (c.m_mysteryEffectNodes[e][
                                                      i
                                                    ] = a);
                                                }
                                                a.getComponent(
                                                  UIOpacity
                                                ).opacity = 255;
                                                var l =
                                                    a.getComponent(
                                                      MysterySpine
                                                    ),
                                                  m = !!o[e][i];
                                                Game_Define.IsInFG && (m = !1),
                                                  r.push(l.ShowOpen(m)),
                                                  tween(c.node)
                                                    .delay(0.2)
                                                    .call(function () {
                                                      (c.m_slotReels.GetSymbolNode(
                                                        e,
                                                        i
                                                      ).active = !1),
                                                        c.m_slotReels.ShowSymbolNode(
                                                          e,
                                                          i,
                                                          !1
                                                        ),
                                                        c.m_slotReels.SetSymbolNode(
                                                          e,
                                                          i,
                                                          n
                                                        ),
                                                        (c.m_changeSymbols[e][
                                                          i
                                                        ] = n);
                                                    })
                                                    .start();
                                              }
                                            },
                                            a = 0;
                                          a < Game_Define.ROW;
                                          a++
                                        )
                                          i(a);
                                      },
                                      s = 0;
                                    s < Game_Define.COL;
                                    s++
                                  )
                                    a(s);
                                  if (0 !== r.length) {
                                    e.next = 6;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 6:
                                  return (
                                    (l = Game_Define.IsHardStop ? 0.3 : 0.5),
                                    Game_Define.DebugMode &&
                                      (l = 0.9 / Game_Define.DebugSpeed),
                                    tween(this.node)
                                      .delay(l)
                                      .call(function () {
                                        for (
                                          var e = 0;
                                          e < Game_Define.COL;
                                          e++
                                        )
                                          for (
                                            var n = 0;
                                            n < Game_Define.ROW;
                                            n++
                                          )
                                            t[e][n] ==
                                              Game_Define.Symbol
                                                .Symbol_Mystery &&
                                              c.m_slotReels.ShowSymbolNode(
                                                e,
                                                n,
                                                !0
                                              );
                                      })
                                      .start(),
                                    node.Play(
                                      Game_Define.AudioClips.Mystery_Open
                                    ),
                                    (e.next = 12),
                                    Promise.all(r)
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
                    return function (t, n, i) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.CloseMystery = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        var i, o, r, a, s, l, c, m, u, _;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    i = new Array(), o = 0;
                                    o < this.m_mysteryEffectNodes.length;
                                    o++
                                  )
                                    for (
                                      r = 0;
                                      r < this.m_mysteryEffectNodes[o].length;
                                      r++
                                    )
                                      (t[o][r] !=
                                        Game_Define.Symbol.Symbol_Mystery &&
                                        t[o][r] !=
                                          Game_Define.Symbol
                                            .Symbol_Mystery_LeverUp) ||
                                        ((a = void 0),
                                        this.m_mysteryEffectNodes[o][r]
                                          ? (a =
                                              this.m_mysteryEffectNodes[o][r])
                                          : ((s =
                                              this.m_slotReels.GetSymbolPosition(
                                                o,
                                                r
                                              )),
                                            (a =
                                              NodePool.getInstance().GetSymbolEffectNode(
                                                Game_Define.Symbol
                                                  .Symbol_Mystery
                                              )).setPosition(s),
                                            this.node.addChild(a),
                                            this.SetZIndex(
                                              a,
                                              Game_Define.Symbol.Symbol_Mystery
                                            ),
                                            (this.m_mysteryEffectNodes[o][r] =
                                              a)),
                                        (a.getComponent(
                                          UIOpacity
                                        ).opacity = 255),
                                        (l = a.getComponent(MysterySpine)),
                                        (c =
                                          n[o][r] ==
                                          Game_Define.SelectSymbol
                                            .Select_Frame),
                                        Game_Define.IsInFG && (c = !1),
                                        i.push(l.ShowClose(c)));
                                  if (0 !== i.length) {
                                    e.next = 4;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 4:
                                  return (
                                    node.Play(
                                      Game_Define.AudioClips.Mystery_Close
                                    ),
                                    (e.next = 7),
                                    Promise.all(i)
                                  );
                                case 7:
                                  for (
                                    m = 0;
                                    m < this.m_mysteryEffectNodes.length;
                                    m++
                                  )
                                    for (
                                      u = 0;
                                      u < this.m_mysteryEffectNodes[m].length;
                                      u++
                                    )
                                      (t[m][u] !=
                                        Game_Define.Symbol.Symbol_Mystery &&
                                        t[m][u] !=
                                          Game_Define.Symbol
                                            .Symbol_Mystery_LeverUp) ||
                                        ((this.m_slotReels.GetSymbolNode(
                                          m,
                                          u
                                        ).active = !0),
                                        (_ =
                                          n[m][u] ==
                                          Game_Define.SelectSymbol.Select_Frame
                                            ? Game_Define.Symbol
                                                .Symbol_Mystery_LeverUp
                                            : Game_Define.Symbol
                                                .Symbol_Mystery),
                                        Game_Define.IsInFG &&
                                          (_ =
                                            Game_Define.Symbol.Symbol_Mystery),
                                        this.m_slotReels.SetSymbolNode(m, u, _),
                                        (this.m_changeSymbols[m][u] = -1));
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
                  (n.SelectHit = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n, i, o, r, a, s;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    n = new Array(), i = 0;
                                    i < Game_Define.COL;
                                    i++
                                  )
                                    for (o = 0; o < Game_Define.ROW; o++)
                                      ((t[i][o] ==
                                        Game_Define.SelectSymbol.Select_Frame &&
                                        Game_Define.LastSelectPlate[i][o] ==
                                          Game_Define.SelectSymbol.None) ||
                                        (Game_Define.IsInFG &&
                                          t[i][o] ==
                                            Game_Define.SelectSymbol
                                              .Select_Frame)) &&
                                        ((r = void 0),
                                        this.m_fxSelectEffectNodes[i][o]
                                          ? (r =
                                              this.m_fxSelectEffectNodes[i][o])
                                          : ((a =
                                              this.m_slotReels.GetSymbolPosition(
                                                i,
                                                o
                                              )),
                                            (r =
                                              NodePool.getInstance().GetFxSelectEffectNode()).setPosition(
                                              a
                                            ),
                                            this.node.addChild(r),
                                            (this.m_fxSelectEffectNodes[i][o] =
                                              r)),
                                        (s = r.getComponent(FxSelectSpine)),
                                        n.push(s.PlayStop()));
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.MysteryLevelUp = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n, i, o, r, a, s, l;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    n = new Array(), i = 0;
                                    i < Game_Define.COL;
                                    i++
                                  )
                                    for (o = 0; o < Game_Define.ROW; o++)
                                      ((t[i][o] ==
                                        Game_Define.SelectSymbol.Select_Frame &&
                                        Game_Define.LastSelectPlate[i][o] ==
                                          Game_Define.SelectSymbol.None) ||
                                        (Game_Define.IsInFG &&
                                          t[i][o] ==
                                            Game_Define.SelectSymbol
                                              .Select_Frame)) &&
                                        ((r =
                                          this.m_fxSelectEffectNodes[i][
                                            o
                                          ].getComponent(FxSelectSpine)),
                                        n.push(r.PlayWin()),
                                        (a = void 0),
                                        this.m_mysteryEffectNodes[i][o]
                                          ? (a =
                                              this.m_mysteryEffectNodes[i][o])
                                          : ((s =
                                              this.m_slotReels.GetSymbolPosition(
                                                i,
                                                o
                                              )),
                                            (a =
                                              NodePool.getInstance().GetSymbolEffectNode(
                                                Game_Define.Symbol
                                                  .Symbol_Mystery
                                              )).setPosition(s),
                                            this.node.addChild(a),
                                            this.SetZIndex(
                                              a,
                                              Game_Define.Symbol.Symbol_Mystery
                                            ),
                                            (this.m_mysteryEffectNodes[i][o] =
                                              a)),
                                        (a.getComponent(
                                          UIOpacity
                                        ).opacity = 255),
                                        (l = a.getComponent(MysterySpine)),
                                        n.push(l.ShowLevelUp()));
                                  return (e.next = 4), Promise.all(n);
                                case 4:
                                  this.CleanAllFxSelectEffect();
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.YellowMysteryFlyToAllWins = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n, i, o, r, a, s, l, c, m, u;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    n = Game_Define.DELAY.YELLOW_MYSTERY_FLY,
                                      i =
                                        this.m_gameView.AllWinsCounter
                                          .MultiLabel.node,
                                      o = i.parent
                                        .getComponent(UITransform)
                                        .convertToWorldSpaceAR(i.position),
                                      r = this.m_gameView.node
                                        .getComponent(UITransform)
                                        .convertToNodeSpaceAR(o),
                                      a = 0;
                                    a < Game_Define.COL;
                                    a++
                                  )
                                    for (s = 0; s < Game_Define.ROW; s++)
                                      t[a][s] ==
                                        Game_Define.SelectSymbol.Select_Frame &&
                                        ((l = this.m_slotReels.GetSymbolNode(
                                          a,
                                          s
                                        )),
                                        (c = l.parent
                                          .getComponent(UITransform)
                                          .convertToWorldSpaceAR(l.position)),
                                        (m = this.m_gameView.node
                                          .getComponent(UITransform)
                                          .convertToNodeSpaceAR(c)),
                                        (u =
                                          NodePool.getInstance().GetSymbolEffectNode(
                                            Game_Define.Symbol.Symbol_Mystery
                                          )).setPosition(m),
                                        this.m_gameView.node.addChild(u),
                                        node$3.SetOrderedZindex(
                                          u,
                                          Game_Define.EFFECT_ZINDEX.FLY_MYSTERY
                                        ),
                                        (this.m_flyMysteryEffectNodes[a][s] =
                                          u),
                                        u
                                          .getComponent(MysterySpine)
                                          .ShowSkin(!0),
                                        (u.getComponent(
                                          UIOpacity
                                        ).opacity = 255),
                                        this.m_mysteryEffectNodes[a][s]
                                          .getComponent(MysterySpine)
                                          .ShowSkin(!1),
                                        tween(u)
                                          .to(
                                            n,
                                            { position: r },
                                            { easing: "quartIn" }
                                          )
                                          .start(),
                                        tween(u.getComponent(UIOpacity))
                                          .delay(n - 0.05)
                                          .to(0.1, { opacity: 0.1 })
                                          .start());
                                  return (
                                    (e.next = 7),
                                    node$2.Wait(this.m_gameView, n + 0.05)
                                  );
                                case 7:
                                  this.CleanAllFlyMysteryEffect();
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
                  (n.ShowGoldenLion = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n, i, o, r, a, s, l;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    n = new Array(), i = 0;
                                    i < Game_Define.COL;
                                    i++
                                  )
                                    for (o = 0; o < Game_Define.ROW; o++)
                                      t[i][o] ==
                                        Game_Define.Symbol.Symbol_Mystery &&
                                        ((r = this.m_slotReels.GetSymbolNode(
                                          i,
                                          o
                                        )),
                                        (a = this.m_slotReels.GetSymbolPosition(
                                          i,
                                          o
                                        )),
                                        (r.active = !1),
                                        (this.m_mysteryEffectNodes[i][
                                          o
                                        ].active = !1),
                                        (s =
                                          NodePool.getInstance().GetSymbolEffectNode(
                                            Game_Define.Symbol.Symbol_GlodenLion
                                          )).setPosition(a),
                                        this.node.addChild(s),
                                        node$3.SetOrderedZindex(
                                          s,
                                          Game_Define.EFFECT_ZINDEX.GOLD_LION
                                        ),
                                        (this.m_goldLionEffectNodes[i][o] = s),
                                        (l = s.getComponent(GoldLionSpine)),
                                        n.push(l.PlayStopAndLoop()));
                                  return (
                                    node.Play(
                                      Game_Define.AudioClips.GLion_Appear
                                    ),
                                    (e.next = 5),
                                    Promise.all(n)
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.GoldLionChange = function (e) {
                    for (
                      var t = this,
                        n = function (n) {
                          for (
                            var i = function (i) {
                                if (
                                  e[n][i] == Game_Define.Symbol.Symbol_Mystery
                                ) {
                                  var o;
                                  if (t.m_goldLionEffectNodes[n][i])
                                    o = t.m_goldLionEffectNodes[n][i];
                                  else {
                                    var r = t.m_slotReels.GetSymbolPosition(
                                      n,
                                      i
                                    );
                                    (o =
                                      NodePool.getInstance().GetSymbolEffectNode(
                                        Game_Define.Symbol.Symbol_GlodenLion
                                      )).setPosition(r),
                                      t.node.addChild(o),
                                      node$3.SetOrderedZindex(
                                        o,
                                        Game_Define.EFFECT_ZINDEX.GOLD_LION
                                      ),
                                      (t.m_goldLionEffectNodes[n][i] = o);
                                  }
                                  o.getComponent(GoldLionSpine)
                                    .PlayChange()
                                    .then(function () {
                                      t.CleanGoldLionEffect(n, i);
                                    });
                                }
                              },
                              o = 0;
                            o < Game_Define.ROW;
                            o++
                          )
                            i(o);
                        },
                        i = 0;
                      i < Game_Define.COL;
                      i++
                    )
                      n(i);
                  }),
                  (n.ShowGoldFrameAndGreenBg = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n, i, o, r, a, s, l, c;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    n = new Array(), i = 0;
                                    i < Game_Define.COL;
                                    i++
                                  )
                                    for (o = 0; o < Game_Define.ROW; o++)
                                      t[i][o] ==
                                        Game_Define.Symbol.Symbol_Mystery &&
                                        ((r =
                                          this.m_slotReels.GetSymbolPosition(
                                            i,
                                            o
                                          )),
                                        (a =
                                          NodePool.getInstance().GetGoldFrameEffectNode()).setPosition(
                                          r
                                        ),
                                        this.node.addChild(a),
                                        (this.m_goldFrameEffectNodes[i][o] = a),
                                        (s = a.getComponent(GoldFrameSpine)),
                                        n.push(s.PlaySymbol11Change()),
                                        (l =
                                          NodePool.getInstance().GetGreenBgEffectNode()).setPosition(
                                          r
                                        ),
                                        this.m_singleSlotBgNode.addChild(l),
                                        node$3.SetOrderedZindex(l, 0),
                                        (this.m_greenBgEffectNodes[i][o] = l),
                                        (c = l.getComponent(GreenBgSpine)),
                                        n.push(c.PlaySymbol11Change()));
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.PlayConvert = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        var i, o, r, a, s;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  node.Play(
                                    Game_Define.AudioClips.Coin_Converter_Select
                                  ),
                                    (i = n.TargetSymbol ? n.TargetSymbol : 0),
                                    (o = 0);
                                case 3:
                                  if (!(o < Game_Define.COL)) {
                                    e.next = 22;
                                    break;
                                  }
                                  r = 0;
                                case 5:
                                  if (!(r < Game_Define.ROW)) {
                                    e.next = 19;
                                    break;
                                  }
                                  if (
                                    t[o][r] !=
                                    Game_Define.SpecialSymbol.Symbol_Converter
                                  ) {
                                    e.next = 16;
                                    break;
                                  }
                                  return (
                                    (a = void 0),
                                    this.m_converterEffectNode
                                      ? (a = this.m_converterEffectNode)
                                      : ((s =
                                          this.m_slotReels.GetSymbolPosition(
                                            o,
                                            r
                                          )),
                                        (a =
                                          NodePool.getInstance().GetSymbolEffectNode(
                                            Game_Define.SpecialSymbol
                                              .Symbol_Converter
                                          )).setPosition(s),
                                        this.node.addChild(a),
                                        node$3.SetOrderedZindex(
                                          a,
                                          Game_Define.EFFECT_ZINDEX.CONVERTER
                                        ),
                                        (this.m_converterEffectNode = a)),
                                    a.getComponent(ConverterSpine).PlayChange(),
                                    (e.next = 13),
                                    node$2.Wait(this.m_gameView, 0.5)
                                  );
                                case 13:
                                  return (
                                    this.m_gameView.SingleSlot.SetSymbolNode(
                                      o,
                                      r,
                                      i
                                    ),
                                    (e.next = 16),
                                    node$2.Wait(this.m_gameView, 0.5)
                                  );
                                case 16:
                                  r++, (e.next = 5);
                                  break;
                                case 19:
                                  o++, (e.next = 3);
                                  break;
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
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.ShowConvertTarget = function (e, t) {
                    for (
                      var n = e.CvPos,
                        i = this.m_gameView.PosIndexToVec3(n),
                        o = 0;
                      o < i.length;
                      o++
                    ) {
                      var r = i[o].x,
                        a = i[o].y;
                      this.m_slotReels.SetSymbolDark(r, a, !t);
                    }
                  }),
                  (n.ConvertToGoldLion = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n, i, o, r, a, s, l, c, m, u, _;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    n = t.CvPos,
                                      i = t.SrcPos ? t.SrcPos : 0,
                                      n.push(i),
                                      o = this.m_gameView.PosIndexToVec3(n),
                                      r = [],
                                      a = 0;
                                    a < o.length;
                                    a++
                                  )
                                    (s = o[a].x),
                                      (l = o[a].y),
                                      (c = void 0),
                                      this.m_goldLionEffectNodes[s][l]
                                        ? (c = this.m_goldLionEffectNodes[s][l])
                                        : ((m =
                                            this.m_slotReels.GetSymbolPosition(
                                              s,
                                              l
                                            )),
                                          (c =
                                            NodePool.getInstance().GetSymbolEffectNode(
                                              Game_Define.Symbol
                                                .Symbol_GlodenLion
                                            )).setPosition(m),
                                          this.node.addChild(c),
                                          node$3.SetOrderedZindex(
                                            c,
                                            Game_Define.EFFECT_ZINDEX.GOLD_LION
                                          ),
                                          (this.m_goldLionEffectNodes[s][l] =
                                            c)),
                                      (u = c.getComponent(GoldLionSpine)),
                                      r.push(u.PlayAttackChange()),
                                      (_ =
                                        this.m_converterEffectNode.getComponent(
                                          ConverterSpine
                                        )),
                                      r.push(_.PlayAttackChange());
                                  return (
                                    this.m_gameView.CharacterSpine.PlayHit(),
                                    node.Play(
                                      Game_Define.AudioClips
                                        .Coin_Converter_Change
                                    ),
                                    (e.next = 10),
                                    Promise.all(r)
                                  );
                                case 10:
                                  this.CleanConverterEffect();
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
                  (n.ConvertGoldLionChange = function (e) {
                    var t = this,
                      n = e.CvPos,
                      i = e.SrcPos ? e.SrcPos : 0;
                    n.push(i);
                    for (
                      var o = this.m_gameView.PosIndexToVec3(n),
                        r = function (e) {
                          var n = o[e].x,
                            i = o[e].y,
                            r = t.m_slotReels.GetSymbolPosition(n, i);
                          if (
                            (t.m_goldLionEffectNodes[n][i]
                              .getComponent(GoldLionSpine)
                              .PlayChange()
                              .then(function () {
                                t.CleanGoldLionEffect(n, i);
                              }),
                            !t.m_greenBgEffectNodes[n][i])
                          ) {
                            var a =
                              NodePool.getInstance().GetGreenBgEffectNode();
                            a.setPosition(r),
                              t.m_singleSlotBgNode.addChild(a),
                              (t.m_greenBgEffectNodes[n][i] = a),
                              a.getComponent(GreenBgSpine).PlaySymbol11Change();
                          }
                          if (!t.m_goldFrameEffectNodes[n][i]) {
                            var s =
                              NodePool.getInstance().GetGoldFrameEffectNode();
                            s.setPosition(r),
                              t.node.addChild(s),
                              node$3.SetOrderedZindex(
                                s,
                                Game_Define.EFFECT_ZINDEX.GOLD_FRAME
                              ),
                              (t.m_goldFrameEffectNodes[n][i] = s),
                              s
                                .getComponent(GoldFrameSpine)
                                .PlaySymbol11Change();
                          }
                        },
                        a = 0;
                      a < o.length;
                      a++
                    )
                      r(a);
                  }),
                  (n.MultiplierShoot = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        var i,
                          o,
                          r,
                          a,
                          s,
                          l = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  node.Play(
                                    Game_Define.AudioClips.Coin_Multiplier_Show
                                  ),
                                    (i = this.m_gameView.PosIndexToVec3([
                                      t,
                                    ])[0]),
                                    (o = i.x),
                                    (r = i.y),
                                    (a = _regeneratorRuntime().mark(function e(
                                      t
                                    ) {
                                      var i, a;
                                      return _regeneratorRuntime().wrap(
                                        function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                (i = _regeneratorRuntime().mark(
                                                  function e(i) {
                                                    var a, s, c;
                                                    return _regeneratorRuntime().wrap(
                                                      function (e) {
                                                        for (;;)
                                                          switch (
                                                            (e.prev = e.next)
                                                          ) {
                                                            case 0:
                                                              if (
                                                                t != o ||
                                                                i != r
                                                              ) {
                                                                e.next = 7;
                                                                break;
                                                              }
                                                              return (
                                                                l
                                                                  .m_multiplierEffectNodes[
                                                                  t
                                                                ][i]
                                                                  ? (a =
                                                                      l
                                                                        .m_multiplierEffectNodes[
                                                                        t
                                                                      ][i])
                                                                  : ((s =
                                                                      l.m_slotReels.GetSymbolPosition(
                                                                        t,
                                                                        i
                                                                      )),
                                                                    (a =
                                                                      NodePool.getInstance().GetSymbolEffectNode(
                                                                        Game_Define
                                                                          .SpecialSymbol
                                                                          .Symbol_Multiplier
                                                                      )).setPosition(
                                                                      s
                                                                    ),
                                                                    l.node.addChild(
                                                                      a
                                                                    ),
                                                                    (l.m_multiplierEffectNodes[
                                                                      t
                                                                    ][i] = a)),
                                                                (c =
                                                                  a.getComponent(
                                                                    MultiplierSpine
                                                                  )),
                                                                (e.next = 5),
                                                                c
                                                                  .PlayShoot(n)
                                                                  .then(
                                                                    function () {
                                                                      l.CleanMultiplierEffect(
                                                                        t,
                                                                        i
                                                                      );
                                                                    }
                                                                  )
                                                              );
                                                            case 5:
                                                              l.m_gameView.SingleSlot.GetSymbolNode(
                                                                t,
                                                                i
                                                              ).active = !1;
                                                            case 7:
                                                            case "end":
                                                              return e.stop();
                                                          }
                                                      },
                                                      e
                                                    );
                                                  }
                                                )),
                                                  (a = 0);
                                              case 2:
                                                if (!(a < Game_Define.ROW)) {
                                                  e.next = 7;
                                                  break;
                                                }
                                                return e.delegateYield(
                                                  i(a),
                                                  "t0",
                                                  4
                                                );
                                              case 4:
                                                a++, (e.next = 2);
                                                break;
                                              case 7:
                                              case "end":
                                                return e.stop();
                                            }
                                        },
                                        e
                                      );
                                    })),
                                    (s = 0);
                                case 6:
                                  if (!(s < Game_Define.COL)) {
                                    e.next = 11;
                                    break;
                                  }
                                  return e.delegateYield(a(s), "t0", 8);
                                case 8:
                                  s++, (e.next = 6);
                                  break;
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
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.FxShootCoin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        var i, o, r, a, s, l, c, m, u, _, p;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    o = this.m_gameView.PosIndexToVec3([t])[0],
                                      r = 0;
                                    r < Game_Define.COL;
                                    r++
                                  )
                                    for (a = 0; a < Game_Define.ROW; a++)
                                      r == o.x &&
                                        a == o.y &&
                                        (i = this.m_slotReels.GetSymbolNode(
                                          r,
                                          a
                                        ));
                                  for (s = [], l = 0; l < Game_Define.COL; l++)
                                    for (c = 0; c < Game_Define.ROW; c++)
                                      n[l][c] ==
                                        Game_Define.SpecialSymbol
                                          .Symbol_Bronze_Coin &&
                                        (void 0,
                                        (u = this.m_slotReels.GetSymbolNode(
                                          l,
                                          c
                                        )),
                                        (m = u.parent
                                          .getComponent(UITransform)
                                          .convertToWorldSpaceAR(u.position)),
                                        (_ =
                                          NodePool.getInstance().GetFxShootEffectNode()),
                                        this.node.addChild(_),
                                        _.setPosition(i.position),
                                        (this.m_fxShootEffectNodes[l][c] = _),
                                        (p = _.getComponent(FxShootSpine)),
                                        s.push(p.PlayShoot(m)));
                                  return (e.next = 6), Promise.all(s);
                                case 6:
                                  this.CleanAllFxShootEffect();
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
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.CoinPlus = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        var i, o, r, a, s, l, c, m, u, _, p, f, d;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (i = [], o = 0; o < Game_Define.COL; o++)
                                    for (r = 0; r < Game_Define.ROW; r++)
                                      n[o][r] > 0 &&
                                        ((a =
                                          this.m_slotReels.GetSymbolPosition(
                                            o,
                                            r
                                          )),
                                        (s =
                                          Game_Define.CurrrentCoinPlate[o][r]),
                                        (l = node$3.times(s, t)),
                                        (Game_Define.CurrrentCoinPlate[o][r] =
                                          l),
                                        (c = this.GetCoinSymbol(l)),
                                        (m =
                                          NodePool.getInstance().GetCoinSymbolEffectNode(
                                            c
                                          )),
                                        this.node.addChild(m),
                                        node$3.SetOrderedZindex(
                                          m,
                                          Game_Define.EFFECT_ZINDEX.COIN
                                        ),
                                        m.setPosition(a),
                                        (this.m_coinSymbolEffectNodes[o][r] =
                                          m),
                                        (u =
                                          m.getComponent(
                                            CoinSymbolSpine
                                          )).SetCoinLabel(s),
                                        i.push(u.PlayPlus(l)),
                                        (this.m_gameView.SingleSlot.GetSymbolNode(
                                          o,
                                          r
                                        ).getComponent(
                                          UIOpacity
                                        ).opacity = 0.1),
                                        this.m_gameView.SingleSlot.SetCoinSymbolNode(
                                          o,
                                          r,
                                          l
                                        ),
                                        (_ =
                                          NodePool.getInstance().GetFxCoinEffectNode()),
                                        this.node.addChild(_),
                                        _.setPosition(a),
                                        (this.m_fxCoinEffectNodes[o][r] = _),
                                        (p = _.getComponent(FxCoinSpine)),
                                        c ==
                                        Game_Define.SpecialSymbol
                                          .Symbol_Super_Coin
                                          ? i.push(p.PlayPlus_S())
                                          : i.push(p.PlayPlus()));
                                  return (e.next = 4), Promise.all(i);
                                case 4:
                                  for (
                                    this.CleanAllFxCoinEffect(),
                                      this.CleanAllCoinSymbolEffect(),
                                      f = 0;
                                    f < Game_Define.COL;
                                    f++
                                  )
                                    for (d = 0; d < Game_Define.ROW; d++)
                                      n[f][d] > 0 &&
                                        (this.m_gameView.SingleSlot.GetSymbolNode(
                                          f,
                                          d
                                        ).getComponent(
                                          UIOpacity
                                        ).opacity = 255);
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
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.CollectCoin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        var i,
                          o,
                          r,
                          a,
                          s,
                          l,
                          c,
                          m,
                          u,
                          _,
                          p,
                          f,
                          d,
                          h,
                          y,
                          S,
                          g,
                          b;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (o = 0; o < Game_Define.COL; o++)
                                    for (r = 0; r < Game_Define.ROW; r++)
                                      t[o][r] ==
                                        Game_Define.SpecialSymbol
                                          .Symbol_Collector &&
                                        (i = this.m_slotReels.GetSymbolPosition(
                                          o,
                                          r
                                        ));
                                  (a = this.GetFirstCoinPos(n)),
                                    (s = a.x),
                                    (l = a.y),
                                    (c = this.GetLastCoinPos(n)),
                                    (m = c.x),
                                    (u = c.y),
                                    (_ = 0);
                                case 8:
                                  if (!(_ < Game_Define.COL)) {
                                    e.next = 33;
                                    break;
                                  }
                                  p = 4;
                                case 10:
                                  if (!(p >= 0)) {
                                    e.next = 30;
                                    break;
                                  }
                                  if (!((f = n[_][p]) > 0)) {
                                    e.next = 27;
                                    break;
                                  }
                                  return (
                                    (d = void 0),
                                    this.m_coinSymbolEffectNodes[_][p]
                                      ? (d = this.m_coinSymbolEffectNodes[_][p])
                                      : ((h =
                                          this.m_slotReels.GetSymbolPosition(
                                            _,
                                            p
                                          )),
                                        (y = this.GetCoinSymbol(f)),
                                        (d =
                                          NodePool.getInstance().GetCoinSymbolEffectNode(
                                            y
                                          )),
                                        this.node.addChild(d),
                                        d.setPosition(h),
                                        (this.m_coinSymbolEffectNodes[_][p] =
                                          d)),
                                    node$3.SetOrderedZindex(
                                      d,
                                      Game_Define.EFFECT_ZINDEX.FLY_COIN
                                    ),
                                    (this.m_gameView.SingleSlot.GetSymbolNode(
                                      _,
                                      p
                                    ).active = !1),
                                    (S =
                                      d.getComponent(
                                        CoinSymbolSpine
                                      )).SetCoinLabel(f),
                                    node.Play(
                                      Game_Define.AudioClips.Collect_Fly
                                    ),
                                    (e.next = 23),
                                    S.PlayCollect(i)
                                  );
                                case 23:
                                  return (
                                    (g = _ == s && p == l),
                                    (b = _ == m && p == u),
                                    (e.next = 27),
                                    this.CollectorUpdate(n[_][p], g, b, i)
                                  );
                                case 27:
                                  p--, (e.next = 10);
                                  break;
                                case 30:
                                  _++, (e.next = 8);
                                  break;
                                case 33:
                                  this.m_gameView.EffectPlate.CleanAllCoinSymbolEffect();
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
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.GetFirstCoinPos = function (e) {
                    for (var t = 0; t < Game_Define.COL; t++)
                      for (var n = 4; n >= 0; n--)
                        if (e[t][n] > 0) return v3(t, n);
                  }),
                  (n.GetLastCoinPos = function (e) {
                    for (var t, n = 0; n < Game_Define.COL; n++)
                      for (var i = 4; i >= 0; i--)
                        e[n][i] > 0 && (t = v3(n, i));
                    return t;
                  }),
                  (n.CollectorUpdate = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n, i, o) {
                        var r, a;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    (this.m_collectorEffectNode
                                      ? (r =
                                          this.m_collectorEffectNode.getComponent(
                                            CollectorSpine
                                          ))
                                      : ((a =
                                          NodePool.getInstance().GetSymbolEffectNode(
                                            Game_Define.SpecialSymbol
                                              .Symbol_Collector
                                          )).setPosition(o),
                                        this.node.addChild(a),
                                        node$3.SetOrderedZindex(
                                          a,
                                          Game_Define.EFFECT_ZINDEX.COLLECTOR
                                        ),
                                        (r = a.getComponent(CollectorSpine)),
                                        (this.m_collectorEffectNode = a)),
                                    !n)
                                  ) {
                                    e.next = 6;
                                    break;
                                  }
                                  return (e.next = 4), r.PlayCollectStart(t);
                                case 4:
                                  e.next = 13;
                                  break;
                                case 6:
                                  if (!i) {
                                    e.next = 11;
                                    break;
                                  }
                                  return (e.next = 9), r.PlayCollectEnd(t);
                                case 9:
                                  e.next = 13;
                                  break;
                                case 11:
                                  return (e.next = 13), r.PlayCollect(t);
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
                    return function (t, n, i, o) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.CollectorToCoin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        var i,
                          o,
                          r = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  node.Play(
                                    Game_Define.AudioClips
                                      .Coin_Appear_Collector_Change
                                  ),
                                    (i = _regeneratorRuntime().mark(function e(
                                      i
                                    ) {
                                      var o, a;
                                      return _regeneratorRuntime().wrap(
                                        function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                (o = _regeneratorRuntime().mark(
                                                  function e(o) {
                                                    var a, s, l, c;
                                                    return _regeneratorRuntime().wrap(
                                                      function (e) {
                                                        for (;;)
                                                          switch (
                                                            (e.prev = e.next)
                                                          ) {
                                                            case 0:
                                                              if (
                                                                t[i][o] !=
                                                                Game_Define
                                                                  .SpecialSymbol
                                                                  .Symbol_Collector
                                                              ) {
                                                                e.next = 15;
                                                                break;
                                                              }
                                                              return (
                                                                r.m_collectorEffectNode
                                                                  .getComponent(
                                                                    CollectorSpine
                                                                  )
                                                                  .PlayPlusChange(),
                                                                (a =
                                                                  r.m_slotReels.GetSymbolPosition(
                                                                    i,
                                                                    o
                                                                  )),
                                                                (s =
                                                                  r.GetCoinSymbol(
                                                                    n
                                                                  )),
                                                                (l =
                                                                  NodePool.getInstance().GetCoinSymbolEffectNode(
                                                                    s
                                                                  )),
                                                                r.node.addChild(
                                                                  l
                                                                ),
                                                                node$3.SetOrderedZindex(
                                                                  l,
                                                                  Game_Define
                                                                    .EFFECT_ZINDEX
                                                                    .COIN
                                                                ),
                                                                l.setPosition(
                                                                  a
                                                                ),
                                                                (r.m_coinSymbolEffectNodes[
                                                                  i
                                                                ][o] = l),
                                                                tween(r.node)
                                                                  .delay(0.5)
                                                                  .call(
                                                                    function () {
                                                                      r.m_gameView.SingleSlot.SetCoinSymbolNode(
                                                                        i,
                                                                        o,
                                                                        n
                                                                      );
                                                                    }
                                                                  )
                                                                  .start(),
                                                                (c =
                                                                  l.getComponent(
                                                                    CoinSymbolSpine
                                                                  )),
                                                                (e.next = 14),
                                                                c.PlayPlusChange(
                                                                  n
                                                                )
                                                              );
                                                            case 14:
                                                              r.CleanCoinSymbolEffect(
                                                                i,
                                                                o
                                                              );
                                                            case 15:
                                                            case "end":
                                                              return e.stop();
                                                          }
                                                      },
                                                      e
                                                    );
                                                  }
                                                )),
                                                  (a = 0);
                                              case 2:
                                                if (!(a < Game_Define.ROW)) {
                                                  e.next = 7;
                                                  break;
                                                }
                                                return e.delegateYield(
                                                  o(a),
                                                  "t0",
                                                  4
                                                );
                                              case 4:
                                                a++, (e.next = 2);
                                                break;
                                              case 7:
                                              case "end":
                                                return e.stop();
                                            }
                                        },
                                        e
                                      );
                                    })),
                                    (o = 0);
                                case 3:
                                  if (!(o < Game_Define.COL)) {
                                    e.next = 8;
                                    break;
                                  }
                                  return e.delegateYield(i(o), "t0", 5);
                                case 5:
                                  o++, (e.next = 3);
                                  break;
                                case 8:
                                  this.CleanCollectorEffect();
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
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.CoinWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n, i, o, r, a, s, l, c, m, u, _, p, f;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (n = [], i = 0; i < Game_Define.COL; i++)
                                    for (o = 0; o < Game_Define.ROW; o++)
                                      (r = t[i][o]) > 0 &&
                                        (this.m_gameView.SingleSlot.SetSymbolOpacity(
                                          i,
                                          o,
                                          0.1
                                        ),
                                        (a = void 0),
                                        this.m_coinSymbolEffectNodes[i][o]
                                          ? (a =
                                              this.m_coinSymbolEffectNodes[i][
                                                o
                                              ])
                                          : ((s =
                                              this.m_slotReels.GetSymbolPosition(
                                                i,
                                                o
                                              )),
                                            (l = this.GetCoinSymbol(r)),
                                            (a =
                                              NodePool.getInstance().GetCoinSymbolEffectNode(
                                                l
                                              )),
                                            this.node.addChild(a),
                                            a.setPosition(s),
                                            (this.m_coinSymbolEffectNodes[i][
                                              o
                                            ] = a)),
                                        (c =
                                          a.getComponent(
                                            CoinSymbolSpine
                                          )).SetCoinLabel(r),
                                        n.push(c.PlayWin()),
                                        (m = this.m_slotReels.GetSymbolPosition(
                                          i,
                                          o
                                        )),
                                        (u =
                                          NodePool.getInstance().GetFxCoinEffectNode()),
                                        this.node.addChild(u),
                                        u.setPosition(m),
                                        (this.m_fxCoinEffectNodes[i][o] = u),
                                        (_ = u.getComponent(FxCoinSpine)),
                                        n.push(_.PlayWin(r)));
                                  return (e.next = 4), Promise.all(n);
                                case 4:
                                  for (p = 0; p < Game_Define.COL; p++)
                                    for (f = 0; f < Game_Define.ROW; f++)
                                      t[p][f] > 0 &&
                                        this.m_gameView.SingleSlot.SetSymbolOpacity(
                                          p,
                                          f,
                                          255
                                        );
                                  this.m_gameView.EffectPlate.CleanAllCoinSymbolEffect(),
                                    this.m_gameView.EffectPlate.CleanAllFxCoinEffect();
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.NudgeUpWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n, i, o, r, a, s;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  n = 0;
                                case 1:
                                  if (!(n < Game_Define.COL)) {
                                    e.next = 23;
                                    break;
                                  }
                                  i = 0;
                                case 3:
                                  if (!(i < Game_Define.ROW)) {
                                    e.next = 20;
                                    break;
                                  }
                                  if (
                                    t[n][i] !=
                                    Game_Define.SpecialSymbol.Symbol_NudgeUp
                                  ) {
                                    e.next = 17;
                                    break;
                                  }
                                  return (
                                    (o = this.m_slotReels.GetSymbolNode(n, i)),
                                    (r = this.m_slotReels.GetSymbolPosition(
                                      n,
                                      i
                                    )),
                                    (o.active = !1),
                                    (a =
                                      NodePool.getInstance().GetSymbolEffectNode(
                                        Game_Define.SpecialSymbol.Symbol_NudgeUp
                                      )).setPosition(r),
                                    this.node.addChild(a),
                                    node$3.SetOrderedZindex(
                                      a,
                                      Game_Define.EFFECT_ZINDEX.NUDGE_UP
                                    ),
                                    (this.m_nudgeUpEffectNode = a),
                                    (s = a.getComponent(NudgeUpSpine)),
                                    (e.next = 16),
                                    s.PlayWin()
                                  );
                                case 16:
                                  o.active = !0;
                                case 17:
                                  i++, (e.next = 3);
                                  break;
                                case 20:
                                  n++, (e.next = 1);
                                  break;
                                case 23:
                                  this.CleanNudgeUpEffect();
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.NudgeUpPlate = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.m_nudgeUpSpine.node.active = !0),
                                    (e.next = 3),
                                    this.m_nudgeUpSpine.PlayNudgeUp()
                                  );
                                case 3:
                                  this.m_nudgeUpSpine.node.active = !1;
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
                  (n.GoldFrameAndGreenBgEnd = function () {
                    for (var e = 0; e < Game_Define.COL; e++)
                      for (var t = 0; t < Game_Define.ROW; t++) {
                        if (this.m_goldFrameEffectNodes[e][t])
                          this.m_goldFrameEffectNodes[e][t]
                            .getComponent(GoldFrameSpine)
                            .PlayEnd(),
                            this.m_greenBgEffectNodes[e][t]
                              .getComponent(GreenBgSpine)
                              .PlayEnd();
                      }
                  }),
                  (n.FxCoinEnd = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, n, i, o, r, a;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (t = [], n = 0; n < Game_Define.COL; n++)
                                    for (i = 0; i < Game_Define.ROW; i++)
                                      this.m_goldFrameEffectNodes[n][i] &&
                                        ((o =
                                          this.m_slotReels.GetSymbolPosition(
                                            n,
                                            i
                                          )),
                                        (r =
                                          NodePool.getInstance().GetFxCoinEffectNode()),
                                        this.node.addChild(r),
                                        r.setPosition(o),
                                        (this.m_fxCoinEffectNodes[n][i] = r),
                                        (a = r.getComponent(FxCoinSpine)),
                                        t.push(a.PlayEnd()));
                                  return (e.next = 4), Promise.all(t);
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
                  (n.TurnOnMystery = function () {
                    for (var e = 0; e < Game_Define.COL; e++)
                      for (var t = 0; t < Game_Define.ROW; t++)
                        this.m_mysteryEffectNodes[e][t] &&
                          (this.m_mysteryEffectNodes[e][t].active = !0);
                  }),
                  (n.ShowFxSelectTip = function (e) {
                    this.m_isFxSelectTipPlaying[e] ||
                      ((this.m_isFxSelectTipPlaying[e] = !0),
                      (this.m_fxSelectTipSpine[e].node.active = !0),
                      (this.m_fxSelectTipSpine[e].node.getComponent(
                        UIOpacity
                      ).opacity = 255),
                      this.m_fxSelectTipSpine[e].setAnimation(0, "Loop", !0));
                  }),
                  (n.CloseFxSelectTip = function (e) {
                    var t = this;
                    tween(
                      this.m_fxSelectTipSpine[e].node.getComponent(UIOpacity)
                    )
                      .to(0.2, { opacity: 0.1 })
                      .call(function () {
                        t.m_fxSelectTipSpine[e].node.active = !1;
                      })
                      .start();
                  }),
                  (n.ResetFlag = function () {
                    for (var e = 0; e < Game_Define.COL; e++)
                      this.m_isFxSelectTipPlaying[e] = !1;
                  }),
                  (n.PlayNearWin = function (e) {
                    (this.m_nearWinSpine[e].node.active = !0),
                      this.m_nearWinSpine[e].setAnimation(0, "Loop", !0),
                      tween(this.m_nearWinSpine[e].node.getComponent(UIOpacity))
                        .to(0.1, { opacity: 255 })
                        .start(),
                      node.Play(Game_Define.AudioClips.Near_Win);
                  }),
                  (n.CloseNearWin = function (e) {
                    var t = this;
                    tween(this.m_nearWinSpine[e].node.getComponent(UIOpacity))
                      .to(0.2, { opacity: 0.1 })
                      .call(function () {
                        t.m_nearWinSpine[e].node.active = !1;
                      })
                      .start();
                  }),
                  (n.SetFreeGameMystery = function () {
                    this.CleanAllMysteryEffect();
                    for (var e = 0; e < Game_Define.COL; e++)
                      if (1 == e || 3 == e)
                        for (var t = 0; t < Game_Define.ROW; t++)
                          this.m_slotReels.SetSymbolNode(
                            e,
                            t,
                            Game_Define.Symbol.Symbol_Mystery
                          );
                  }),
                  (n.GetCoinSymbol = function (e) {
                    return e >= Game_Define.COIN_LEVEL.Super
                      ? Game_Define.CoinSymbol.Super
                      : e >= Game_Define.COIN_LEVEL.Gold &&
                        e < Game_Define.COIN_LEVEL.Super
                      ? Game_Define.CoinSymbol.Gold
                      : e >= Game_Define.COIN_LEVEL.Silver &&
                        e < Game_Define.COIN_LEVEL.Gold
                      ? Game_Define.CoinSymbol.Silver
                      : Game_Define.CoinSymbol.Bronze;
                  }),
                  (n.SetZIndex = function (e, t) {
                    t == Game_Define.Symbol.Symbol_Mystery
                      ? node$3.SetOrderedZindex(
                          e,
                          Game_Define.EFFECT_ZINDEX.MYSTERY
                        )
                      : t == Game_Define.Symbol.Symbol_Wild
                      ? node$3.SetOrderedZindex(
                          e,
                          Game_Define.EFFECT_ZINDEX.WILD
                        )
                      : node$3.SetOrderedZindex(
                          e,
                          Game_Define.EFFECT_ZINDEX.NORMAL
                        );
                  }),
                  (n.ShakeWorld = function () {
                    node.Play(Game_Define.AudioClips.Shock);
                    var e = this.m_gameView.node,
                      t = Game_Define.ShakeWorld.SPEED,
                      n = Game_Define.ShakeWorld.DELTA,
                      i = Game_Define.ShakeWorld.TIMES,
                      o = e.position.x,
                      r = e.position.y;
                    return (
                      tween(e)
                        .repeat(
                          i,
                          tween()
                            .to(t, { position: v3(o + n, r + n) })
                            .to(t, { position: v3(o - n, r - n) })
                            .to(t, { position: v3(o - n, r + n) })
                            .to(t, { position: v3(o, r) })
                        )
                        .start(),
                      4 * t * i
                    );
                  }),
                  (n.CleanSymbolEffect = function (e, t) {
                    if (this.m_symbolEffectNodes[e][t]) {
                      var n = this.m_symbolEffectNodes[e][t];
                      NodePool.getInstance().ReturnSymbolEffect(n),
                        n.removeFromParent(),
                        (this.m_symbolEffectNodes[e][t] = null);
                    }
                  }),
                  (n.CleanMysteryEffect = function (e, t) {
                    if (this.m_mysteryEffectNodes[e][t]) {
                      var n = this.m_mysteryEffectNodes[e][t];
                      NodePool.getInstance().ReturnSymbolEffect(n),
                        n.removeFromParent(),
                        (this.m_mysteryEffectNodes[e][t] = null);
                    }
                  }),
                  (n.CleanFlyMysteryEffect = function (e, t) {
                    if (this.m_flyMysteryEffectNodes[e][t]) {
                      var n = this.m_flyMysteryEffectNodes[e][t];
                      NodePool.getInstance().ReturnSymbolEffect(n),
                        n.removeFromParent(),
                        (this.m_flyMysteryEffectNodes[e][t] = null);
                    }
                  }),
                  (n.CleanScatterEffect = function (e, t) {
                    if (this.m_scatterEffectNodes[e][t]) {
                      var n = this.m_scatterEffectNodes[e][t];
                      NodePool.getInstance().ReturnSymbolEffect(n),
                        n.removeFromParent(),
                        (this.m_scatterEffectNodes[e][t] = null);
                    }
                  }),
                  (n.CleanGoldLionEffect = function (e, t) {
                    if (this.m_goldLionEffectNodes[e][t]) {
                      var n = this.m_goldLionEffectNodes[e][t];
                      NodePool.getInstance().ReturnSymbolEffect(n),
                        n.removeFromParent(),
                        (this.m_goldLionEffectNodes[e][t] = null);
                    }
                  }),
                  (n.CleanFxShootEffect = function (e, t) {
                    if (this.m_fxShootEffectNodes[e][t]) {
                      var n = this.m_fxShootEffectNodes[e][t];
                      NodePool.getInstance().ReturnFxShootEffect(n),
                        n.removeFromParent(),
                        (this.m_fxShootEffectNodes[e][t] = null);
                    }
                  }),
                  (n.CleanFxCoinEffect = function (e, t) {
                    if (this.m_fxCoinEffectNodes[e][t]) {
                      var n = this.m_fxCoinEffectNodes[e][t];
                      NodePool.getInstance().ReturnFxCoinEffect(n),
                        n.removeFromParent(),
                        (this.m_fxCoinEffectNodes[e][t] = null);
                    }
                  }),
                  (n.CleanCoinSymbolEffect = function (e, t) {
                    if (this.m_coinSymbolEffectNodes[e][t]) {
                      var n = this.m_coinSymbolEffectNodes[e][t];
                      NodePool.getInstance().ReturnCoinSymbolEffect(n),
                        n.removeFromParent(),
                        (this.m_coinSymbolEffectNodes[e][t] = null);
                    }
                  }),
                  (n.CleanMultiplierEffect = function (e, t) {
                    if (this.m_multiplierEffectNodes[e][t]) {
                      var n = this.m_multiplierEffectNodes[e][t];
                      NodePool.getInstance().ReturnSymbolEffect(n),
                        n.removeFromParent(),
                        (this.m_multiplierEffectNodes[e][t] = null);
                    }
                  }),
                  (n.CleanCollectorEffect = function () {
                    if (this.m_collectorEffectNode) {
                      var e = this.m_collectorEffectNode;
                      NodePool.getInstance().ReturnSymbolEffect(e),
                        e.removeFromParent(),
                        (this.m_collectorEffectNode = null);
                    }
                  }),
                  (n.CleanConverterEffect = function () {
                    if (this.m_converterEffectNode) {
                      var e = this.m_converterEffectNode;
                      NodePool.getInstance().ReturnSymbolEffect(e),
                        e.removeFromParent(),
                        (this.m_converterEffectNode = null);
                    }
                  }),
                  (n.CleanNudgeUpEffect = function () {
                    if (this.m_nudgeUpEffectNode) {
                      var e = this.m_nudgeUpEffectNode;
                      NodePool.getInstance().ReturnSymbolEffect(e),
                        e.removeFromParent(),
                        (this.m_nudgeUpEffectNode = null);
                    }
                  }),
                  (n.CleanGoldFrameEffect = function (e, t) {
                    if (this.m_goldFrameEffectNodes[e][t]) {
                      var n = this.m_goldFrameEffectNodes[e][t];
                      NodePool.getInstance().ReturnGoldFrameEffect(n),
                        n.removeFromParent(),
                        (this.m_goldFrameEffectNodes[e][t] = null);
                    }
                  }),
                  (n.CleanGreenBgEffect = function (e, t) {
                    if (this.m_greenBgEffectNodes[e][t]) {
                      var n = this.m_greenBgEffectNodes[e][t];
                      NodePool.getInstance().ReturnGreenBgEffect(n),
                        n.removeFromParent(),
                        (this.m_greenBgEffectNodes[e][t] = null);
                    }
                  }),
                  (n.CleanFxSelectEffect = function (e, t) {
                    if (this.m_fxSelectEffectNodes[e][t]) {
                      var n = this.m_fxSelectEffectNodes[e][t];
                      NodePool.getInstance().ReturnFxSelectEffect(n),
                        n.removeFromParent(),
                        (this.m_fxSelectEffectNodes[e][t] = null);
                    }
                  }),
                  (n.CleanAllSymbolEffect = function () {
                    for (var e = 0; e < this.m_symbolEffectNodes.length; e++)
                      for (
                        var t = 0;
                        t < this.m_symbolEffectNodes[e].length;
                        t++
                      )
                        this.CleanSymbolEffect(e, t);
                  }),
                  (n.CleanAllScatterEffect = function () {
                    for (var e = 0; e < this.m_scatterEffectNodes.length; e++)
                      for (
                        var t = 0;
                        t < this.m_scatterEffectNodes[e].length;
                        t++
                      )
                        this.CleanScatterEffect(e, t);
                  }),
                  (n.CleanAllCoinSymbolEffect = function () {
                    for (
                      var e = 0;
                      e < this.m_coinSymbolEffectNodes.length;
                      e++
                    )
                      for (
                        var t = 0;
                        t < this.m_coinSymbolEffectNodes[e].length;
                        t++
                      )
                        this.CleanCoinSymbolEffect(e, t);
                  }),
                  (n.CleanAllMysteryEffect = function () {
                    for (var e = 0; e < this.m_mysteryEffectNodes.length; e++)
                      for (
                        var t = 0;
                        t < this.m_mysteryEffectNodes[e].length;
                        t++
                      )
                        this.CleanMysteryEffect(e, t);
                  }),
                  (n.CleanAllFlyMysteryEffect = function () {
                    for (
                      var e = 0;
                      e < this.m_flyMysteryEffectNodes.length;
                      e++
                    )
                      for (
                        var t = 0;
                        t < this.m_flyMysteryEffectNodes[e].length;
                        t++
                      )
                        this.CleanFlyMysteryEffect(e, t);
                  }),
                  (n.CleanAllGoldLionEffect = function () {
                    for (var e = 0; e < this.m_goldLionEffectNodes.length; e++)
                      for (
                        var t = 0;
                        t < this.m_goldLionEffectNodes[e].length;
                        t++
                      )
                        this.CleanGoldLionEffect(e, t);
                  }),
                  (n.CleanAllFxShootEffect = function () {
                    for (var e = 0; e < this.m_fxShootEffectNodes.length; e++)
                      for (
                        var t = 0;
                        t < this.m_fxShootEffectNodes[e].length;
                        t++
                      )
                        this.CleanFxShootEffect(e, t);
                  }),
                  (n.CleanAllFxCoinEffect = function () {
                    for (var e = 0; e < this.m_fxCoinEffectNodes.length; e++)
                      for (
                        var t = 0;
                        t < this.m_fxCoinEffectNodes[e].length;
                        t++
                      )
                        this.CleanFxCoinEffect(e, t);
                  }),
                  (n.CleanAllGoldFrameEffect = function () {
                    for (var e = 0; e < this.m_goldFrameEffectNodes.length; e++)
                      for (
                        var t = 0;
                        t < this.m_goldFrameEffectNodes[e].length;
                        t++
                      )
                        this.CleanGoldFrameEffect(e, t);
                  }),
                  (n.CleanAllGreenBgEffect = function () {
                    for (var e = 0; e < this.m_greenBgEffectNodes.length; e++)
                      for (
                        var t = 0;
                        t < this.m_greenBgEffectNodes[e].length;
                        t++
                      )
                        this.CleanGreenBgEffect(e, t);
                  }),
                  (n.CleanAllFxSelectEffect = function () {
                    for (var e = 0; e < this.m_fxSelectEffectNodes.length; e++)
                      for (
                        var t = 0;
                        t < this.m_fxSelectEffectNodes[e].length;
                        t++
                      )
                        this.CleanFxSelectEffect(e, t);
                  }),
                  (n.CleanAllEffect = function () {
                    this.CleanAllSymbolEffect(),
                      this.StopSingleLineEffect(),
                      this.CleanAllCoinSymbolEffect(),
                      this.CleanAllMysteryEffect(),
                      this.CleanAllScatterEffect(),
                      this.CleanAllGoldFrameEffect(),
                      this.CleanAllGreenBgEffect(),
                      this.m_slotReels.ShowStaticSymbol(),
                      this.m_slotReels.ShowSymbolDark(!1),
                      this.m_gameView.SingleSlot.CloseAllSymbol();
                    for (var e = 0; e < Game_Define.COL; e++)
                      for (var t = 0; t < Game_Define.ROW; t++)
                        this.m_changeSymbols[e][t] = -1;
                  }),
                  _createClass(t, [
                    {
                      key: "FgDeclare",
                      get: function () {
                        return this.m_fgDeclare;
                      },
                    },
                    {
                      key: "Compliment",
                      get: function () {
                        return this.m_compliment;
                      },
                    },
                  ]),
                  t
                );
              })(Component)),
              (_descriptor$k = _applyDecoratedDescriptor(
                _class2$k.prototype,
                "m_symbolEffectPrefabs",
                [_dec$l],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor2$8 = _applyDecoratedDescriptor(
                _class2$k.prototype,
                "m_coinSymbolEffectPrefabs",
                [_dec2$k],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor3$4 = _applyDecoratedDescriptor(
                _class2$k.prototype,
                "m_slotReels",
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
              (_descriptor4$4 = _applyDecoratedDescriptor(
                _class2$k.prototype,
                "m_singleSlotBgNode",
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
              (_descriptor5$2 = _applyDecoratedDescriptor(
                _class2$k.prototype,
                "m_fxShootPrefab",
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
                _class2$k.prototype,
                "m_fxCoinPrefab",
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
              (_descriptor7$1 = _applyDecoratedDescriptor(
                _class2$k.prototype,
                "m_goldFramePrefab",
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
              (_descriptor8$1 = _applyDecoratedDescriptor(
                _class2$k.prototype,
                "m_fxSelectPrefab",
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
                _class2$k.prototype,
                "m_fxSelectTipSpine",
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
                _class2$k.prototype,
                "m_nearWinSpine",
                [_dec10$1],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor11 = _applyDecoratedDescriptor(
                _class2$k.prototype,
                "m_fgDeclare",
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
                _class2$k.prototype,
                "m_compliment",
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
              (_descriptor13 = _applyDecoratedDescriptor(
                _class2$k.prototype,
                "m_nudgeUpSpine",
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
              (_class$l = _class2$k))
            ) || _class$l);
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "c3d1a6WZbFLComt0jiq1CSq",
            "FeaturesAck",
            void 0
          );
        var FeaturesAck = function () {},
          _dec$m,
          _class$m;
        (FeaturesAck.TWO_MYSTERY_WILD = {
          RoundQueue: [
            {
              ComboStageData: [
                {
                  ComboStageSymbol: [
                    { Col: [10, 10, 10, 10, 10] },
                    { Col: [10, 10, 10, 10, 4] },
                    { Col: [5, 6, 6, 6, 2] },
                    { Col: [10, 10, 10, 10, 1] },
                    { Col: [1, 1, 1, 1, 0] },
                  ],
                  AwardDataVec: [
                    { Index: 1, Symbol: 6, Count: 4, Win: 2 },
                    { Index: 2, Symbol: 6, Count: 4, Win: 2 },
                    { Index: 3, Symbol: 6, Count: 4, Win: 2 },
                    { Index: 4, Symbol: 5, Count: 4, Win: 0.8 },
                    { Index: 5, Symbol: 2, Count: 4, Win: 0.3 },
                    { Index: 6, Symbol: 6, Count: 4, Win: 2 },
                    { Index: 7, Symbol: 6, Count: 4, Win: 2 },
                    { Index: 8, Symbol: 6, Count: 4, Win: 2 },
                    { Index: 10, Symbol: 6, Count: 4, Win: 2 },
                    { Index: 11, Symbol: 6, Count: 4, Win: 2 },
                    { Index: 12, Symbol: 5, Count: 4, Win: 0.8 },
                    { Index: 13, Symbol: 6, Count: 4, Win: 2 },
                    { Index: 14, Symbol: 6, Count: 4, Win: 2 },
                    { Index: 15, Symbol: 5, Count: 4, Win: 0.8 },
                    { Index: 16, Symbol: 2, Count: 4, Win: 0.3 },
                    { Index: 17, Symbol: 6, Count: 4, Win: 2 },
                    { Index: 18, Symbol: 6, Count: 4, Win: 2 },
                    { Index: 19, Symbol: 6, Count: 4, Win: 2 },
                    { Index: 20, Symbol: 6, Count: 4, Win: 2 },
                    { Index: 21, Symbol: 6, Count: 4, Win: 2 },
                    { Index: 22, Symbol: 6, Count: 4, Win: 2 },
                    { Index: 23, Symbol: 6, Count: 4, Win: 2 },
                    { Index: 24, Symbol: 5, Count: 4, Win: 0.8 },
                    { Index: 26, Symbol: 6, Count: 4, Win: 2 },
                    { Index: 27, Symbol: 6, Count: 4, Win: 2 },
                    { Index: 28, Symbol: 6, Count: 4, Win: 2 },
                    { Index: 29, Symbol: 2, Count: 4, Win: 0.3 },
                    { Index: 30, Symbol: 6, Count: 4, Win: 2 },
                    { Index: 31, Symbol: 6, Count: 4, Win: 2 },
                    { Index: 33, Symbol: 6, Count: 4, Win: 2 },
                    { Index: 34, Symbol: 5, Count: 4, Win: 0.8 },
                    { Index: 36, Symbol: 6, Count: 4, Win: 2 },
                    { Index: 37, Symbol: 6, Count: 4, Win: 2 },
                    { Index: 38, Symbol: 5, Count: 4, Win: 0.8 },
                    { Index: 39, Symbol: 2, Count: 4, Win: 0.3 },
                  ],
                  ComboStageWin: 56,
                  LinWin: 55.999999999999986,
                },
              ],
              GoldPos: [],
              PatternPos: [0, 1, 2, 3, 4, 5, 6, 7, 8, 15, 16, 17, 18],
              RoundWin: 56,
              MysterySymbol: 8,
              FinalMult: 1,
              FreeMysteryFlag: !0,
              AwardTypeFlag: 1,
              StartMult: 1,
            },
          ],
          TotalWin: 56,
          RTP: 97,
        }),
          (FeaturesAck.GOLD_LION_ALL_SPECIAL = {
            RoundQueue: [
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [2, 10, 10, 10, 10] },
                      { Col: [10, 10, 10, 4, 0] },
                      { Col: [0, 0, 8, 1, 1] },
                      { Col: [0, 1, 4, 4, 2] },
                      { Col: [3, 0, 0, 1, 0] },
                    ],
                    AwardDataVec: [],
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [2, 15, 14, 13, 12] },
                      { Col: [12, 12, 12, 4, 0] },
                      { Col: [0, 0, 8, 1, 1] },
                      { Col: [0, 1, 4, 4, 2] },
                      { Col: [3, 0, 0, 1, 0] },
                    ],
                    AwardDataVec: [],
                    MysteryGolden: {
                      CoinMul: [
                        { Colm: [0, 0, 0, -3, 2] },
                        { Colm: [5, 1, 5, 0, 0] },
                        { Colm: [0, 0, 0, 0, 0] },
                        { Colm: [0, 0, 0, 0, 0] },
                        { Colm: [0, 0, 0, 0, 0] },
                      ],
                      Mult: [],
                      Collector: [],
                      Convert: [
                        {
                          CvPos: [13, 14, 16, 23, 1, 1, 1],
                          TargetSymbol: 1,
                          SrcPos: 1,
                        },
                      ],
                    },
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [2, 12, 14, 13, 12] },
                      { Col: [12, 12, 12, 4, 0] },
                      { Col: [0, 0, 8, 12, 12] },
                      { Col: [0, 12, 4, 4, 2] },
                      { Col: [3, 0, 0, 12, 0] },
                    ],
                    AwardDataVec: [],
                    MysteryGolden: {
                      CoinMul: [
                        { Colm: [0, 3, 0, 0, 6] },
                        { Colm: [15, 3, 15, 0, 0] },
                        { Colm: [0, 0, 0, 15, 3] },
                        { Colm: [0, 3, 0, 0, 0] },
                        { Colm: [0, 0, 0, 15, 0] },
                      ],
                      Mult: [{ Pos: 3, Mul: 3 }],
                      Collector: [
                        {
                          CcPos: [1, 4, 5, 6, 7, 13, 14, 16, 23, 3],
                          SrcPos: 2,
                          Mul: 78,
                        },
                      ],
                      Convert: [],
                    },
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [2, 12, 12, 12, 12] },
                      { Col: [12, 12, 12, 4, 0] },
                      { Col: [0, 0, 8, 12, 12] },
                      { Col: [0, 15, 4, 4, 2] },
                      { Col: [3, 0, 0, 12, 0] },
                    ],
                    AwardDataVec: [],
                    MysteryGolden: {
                      CoinMul: [
                        { Colm: [0, 5, 78, 2, 1] },
                        { Colm: [5, 1, 1, 0, 0] },
                        { Colm: [0, 0, 0, 1, 10] },
                        { Colm: [0, 0, 0, 0, 0] },
                        { Colm: [0, 0, 0, 2, 0] },
                      ],
                      Mult: [],
                      Collector: [],
                      Convert: [
                        {
                          CvPos: [8, 17, 18, 16, 16, 16],
                          TargetSymbol: 4,
                          SrcPos: 16,
                        },
                      ],
                    },
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [2, 12, 12, 12, 12] },
                      { Col: [12, 12, 12, 12, 0] },
                      { Col: [0, 0, 8, 12, 12] },
                      { Col: [0, 12, 12, 12, 2] },
                      { Col: [3, 0, 0, 12, 0] },
                    ],
                    AwardDataVec: [],
                    ComboStageWin: 117,
                    GoldenWin: 117,
                    MysteryGolden: {
                      CoinMul: [
                        { Colm: [0, 5, 78, 2, 1] },
                        { Colm: [5, 1, 1, 5, 0] },
                        { Colm: [0, 0, 0, 1, 10] },
                        { Colm: [0, 2, 2, 2, 0] },
                        { Colm: [0, 0, 0, 2, 0] },
                      ],
                      Mult: [],
                      Collector: [],
                      Convert: [],
                    },
                  },
                ],
                GoldPos: [],
                PatternPos: [1, 2, 3, 4, 5, 6, 7],
                RoundWin: 117,
                MysterySymbol: 11,
                FinalMult: 1,
                FreeMysteryFlag: !0,
                AwardTypeFlag: 2,
              },
            ],
            TotalWin: 117,
            RTP: 97,
          }),
          (FeaturesAck.FIVE_SCATTER_FG = {
            RoundQueue: [
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [9, 5, 5, 5, 5] },
                      { Col: [1, 9, 3, 3, 3] },
                      { Col: [4, 9, 4, 6, 6] },
                      { Col: [0, 4, 2, 1, 9] },
                      { Col: [9, 6, 1, 5, 5] },
                    ],
                    AwardDataVec: [],
                  },
                ],
                GoldPos: [],
                PatternPos: [],
                MysterySymbol: -1,
                FinalMult: 1,
                ScatterCount: 5,
                AwardTypeFlag: 4,
              },
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [5, 5, 5, 1, 3] },
                      { Col: [10, 10, 10, 10, 10] },
                      { Col: [4, 0, 1, 8, 2] },
                      { Col: [10, 10, 10, 10, 10] },
                      { Col: [2, 2, 4, 3, 6] },
                    ],
                    AwardDataVec: [],
                  },
                ],
                GoldPos: [],
                PatternPos: [5, 6, 7, 8, 9, 15, 16, 17, 18, 19],
                FinalMult: 26,
                FreeTotalRound: 1,
                FreeMysteryFlag: !0,
                AwardTypeFlag: 8,
                StartMult: 26,
              },
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [3, 3, 3, 3, 5] },
                      { Col: [10, 10, 10, 10, 6] },
                      { Col: [2, 1, 3, 2, 4] },
                      { Col: [10, 10, 10, 10, 0] },
                      { Col: [0, 6, 6, 6, 6] },
                    ],
                    AwardDataVec: [],
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [3, 3, 3, 3, 5] },
                      { Col: [16, 12, 12, 15, 6] },
                      { Col: [2, 1, 3, 2, 4] },
                      { Col: [12, 12, 12, 12, 0] },
                      { Col: [0, 6, 6, 6, 6] },
                    ],
                    AwardDataVec: [],
                    MysteryGolden: {
                      CoinMul: [
                        { Colm: [0, 0, 0, 0, 0] },
                        { Colm: [0, 2, 1, 0, 0] },
                        { Colm: [0, 0, 0, 0, 0] },
                        { Colm: [1, 1, 2, 2, 0] },
                        { Colm: [0, 0, 0, 0, 0] },
                      ],
                      Mult: [],
                      Collector: [],
                      Convert: [
                        {
                          CvPos: [10, 13, 8, 8, 8],
                          TargetSymbol: 2,
                          SrcPos: 8,
                        },
                      ],
                      GoldenType: 1,
                    },
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [3, 3, 3, 3, 5] },
                      { Col: [16, 12, 12, 12, 6] },
                      { Col: [12, 1, 3, 12, 4] },
                      { Col: [12, 12, 12, 12, 0] },
                      { Col: [0, 6, 6, 6, 6] },
                    ],
                    AwardDataVec: [],
                    ComboStageWin: 351,
                    GoldenWin: 351,
                    MysteryGolden: {
                      CoinMul: [
                        { Colm: [0, 0, 0, 0, 0] },
                        { Colm: [0, 2, 1, 1, 0] },
                        { Colm: [1, 0, 0, 2, 0] },
                        { Colm: [1, 1, 2, 2, 0] },
                        { Colm: [0, 0, 0, 0, 0] },
                      ],
                      Mult: [],
                      Collector: [],
                      Convert: [],
                      GoldenType: 1,
                    },
                  },
                ],
                GoldPos: [],
                PatternPos: [5, 6, 7, 8, 15, 16, 17, 18],
                RoundWin: 351,
                MysterySymbol: 11,
                FinalMult: 27,
                FreeTotalRound: 2,
                FreeMysteryFlag: !0,
                AwardTypeFlag: 10,
                StartMult: 27,
              },
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [4, 4, 6, 6, 2] },
                      { Col: [10, 10, 10, 10, 10] },
                      { Col: [0, 4, 4, 3, 3] },
                      { Col: [10, 10, 10, 10, 10] },
                      { Col: [6, 10, 10, 10, 10] },
                    ],
                    AwardDataVec: [
                      { Index: 3, Symbol: 4, Count: 5, Win: 70 },
                      { Index: 8, Symbol: 4, Count: 5, Win: 70 },
                      { Index: 11, Symbol: 4, Count: 5, Win: 70 },
                      { Index: 18, Symbol: 4, Count: 4, Win: 19.6 },
                      { Index: 20, Symbol: 4, Count: 5, Win: 70 },
                      { Index: 27, Symbol: 4, Count: 5, Win: 70 },
                      { Index: 28, Symbol: 4, Count: 4, Win: 19.6 },
                      { Index: 33, Symbol: 4, Count: 5, Win: 70 },
                    ],
                    ComboStageWin: 459.2,
                    LinWin: 459.20000000000005,
                  },
                ],
                GoldPos: [],
                PatternPos: [5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 21, 22, 23, 24],
                RoundWin: 459.2,
                MysterySymbol: 8,
                FinalMult: 28,
                FreeTotalRound: 3,
                FreeMysteryFlag: !0,
                AwardTypeFlag: 9,
                StartMult: 28,
              },
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [2, 1, 1, 5, 5] },
                      { Col: [10, 10, 10, 10, 6] },
                      { Col: [7, 0, 0, 4, 4] },
                      { Col: [10, 10, 10, 10, 0] },
                      { Col: [10, 10, 10, 10, 10] },
                    ],
                    AwardDataVec: [],
                  },
                ],
                GoldPos: [],
                PatternPos: [5, 6, 7, 8, 15, 16, 17, 18, 20, 21, 22, 23, 24],
                MysterySymbol: 1,
                FinalMult: 29,
                FreeTotalRound: 4,
                FreeMysteryFlag: !0,
                AwardTypeFlag: 8,
                StartMult: 29,
              },
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [2, 2, 5, 5, 4] },
                      { Col: [10, 10, 10, 6, 5] },
                      { Col: [7, 7, 7, 7, 0] },
                      { Col: [10, 10, 10, 0, 4] },
                      { Col: [10, 10, 10, 10, 6] },
                    ],
                    AwardDataVec: [],
                  },
                ],
                GoldPos: [],
                PatternPos: [5, 6, 7, 15, 16, 17, 20, 21, 22, 23],
                MysterySymbol: 1,
                FinalMult: 30,
                FreeTotalRound: 5,
                FreeMysteryFlag: !0,
                AwardTypeFlag: 8,
                StartMult: 30,
              },
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [6, 2, 1, 1, 5] },
                      { Col: [10, 10, 6, 5, 4] },
                      { Col: [3, 5, 5, 5, 3] },
                      { Col: [10, 10, 0, 4, 0] },
                      { Col: [10, 10, 10, 6, 5] },
                    ],
                    AwardDataVec: [
                      { Index: 13, Symbol: 5, Count: 3, Win: 9.3 },
                      { Index: 19, Symbol: 5, Count: 3, Win: 9.3 },
                      { Index: 21, Symbol: 5, Count: 3, Win: 9.3 },
                    ],
                    ComboStageWin: 27.9,
                    LinWin: 27.900000000000002,
                  },
                ],
                GoldPos: [],
                PatternPos: [5, 6, 15, 16, 20, 21, 22],
                RoundWin: 27.9,
                MysterySymbol: 1,
                FinalMult: 31,
                FreeTotalRound: 6,
                FreeMysteryFlag: !0,
                AwardTypeFlag: 9,
                StartMult: 31,
              },
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [3, 3, 3, 3, 5] },
                      { Col: [10, 6, 5, 4, 3] },
                      { Col: [1, 0, 2, 5, 0] },
                      { Col: [10, 0, 4, 0, 1] },
                      { Col: [10, 10, 6, 5, 7] },
                    ],
                    AwardDataVec: [],
                  },
                ],
                GoldPos: [],
                PatternPos: [5, 15, 20, 21],
                MysterySymbol: 5,
                FinalMult: 32,
                FreeTotalRound: 7,
                FreeMysteryFlag: !0,
                AwardTypeFlag: 8,
                StartMult: 32,
              },
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [0, 8, 3, 1, 1] },
                      { Col: [1, 1, 1, 1, 1] },
                      { Col: [2, 4, 0, 1, 1] },
                      { Col: [10, 1, 2, 0, 4] },
                      { Col: [10, 6, 5, 7, 6] },
                    ],
                    AwardDataVec: [
                      { Symbol: 1, Count: 3, Win: 3.3 },
                      { Index: 1, Symbol: 1, Count: 3, Win: 3.3 },
                      { Index: 5, Symbol: 1, Count: 3, Win: 3.3 },
                      { Index: 6, Symbol: 1, Count: 3, Win: 3.3 },
                      { Index: 9, Symbol: 1, Count: 3, Win: 3.3 },
                      { Index: 17, Symbol: 1, Count: 3, Win: 3.3 },
                      { Index: 21, Symbol: 1, Count: 3, Win: 3.3 },
                      { Index: 25, Symbol: 1, Count: 3, Win: 3.3 },
                      { Index: 29, Symbol: 1, Count: 3, Win: 3.3 },
                      { Index: 30, Symbol: 1, Count: 4, Win: 6.6 },
                      { Index: 35, Symbol: 1, Count: 3, Win: 3.3 },
                      { Index: 39, Symbol: 1, Count: 3, Win: 3.3 },
                    ],
                    ComboStageWin: 42.9,
                    LinWin: 42.9,
                  },
                ],
                GoldPos: [],
                PatternPos: [15, 20],
                RoundWin: 42.9,
                MysterySymbol: 4,
                FinalMult: 33,
                FreeTotalRound: 8,
                FreeMysteryFlag: !0,
                AwardTypeFlag: 9,
                StartMult: 33,
              },
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [1, 5, 0, 3, 5] },
                      { Col: [2, 2, 2, 2, 3] },
                      { Col: [0, 2, 2, 1, 3] },
                      { Col: [4, 4, 1, 2, 0] },
                      { Col: [3, 0, 5, 2, 2] },
                    ],
                    AwardDataVec: [
                      { Index: 25, Symbol: 3, Count: 3, Win: 3.4 },
                    ],
                    ComboStageWin: 3.4,
                    LinWin: 3.4,
                  },
                ],
                GoldPos: [],
                PatternPos: [],
                RoundWin: 3.4,
                MysterySymbol: -1,
                FinalMult: 34,
                FreeTotalRound: 9,
                AwardTypeFlag: 25,
                StartMult: 34,
              },
            ],
            FreeTotalWin: 884.4,
            TotalWin: 884.4,
            RTP: 0.97,
          }),
          cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "308233CCYZAJahNjzJsJWRT",
            "AwardState",
            void 0
          );
        var ccclass$m = _decorator.ccclass,
          AwardState =
            ((_dec$m = ccclass$m("AwardState")),
            _dec$m(
              (_class$m = (function (e) {
                function t(t) {
                  var n;
                  return (
                    ((n = e.call(this) || this).m_gameView = null),
                    (n.m_lvl = 0),
                    (n.m_isShowWinEnd = !1),
                    (n.m_gameView = t),
                    n
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.OnEnter = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, n, i, o, r, a, s, l, c, m;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    (log("game state AWARD"),
                                    (this.m_gameView.CanSpaceStop = !0),
                                    (this.m_gameView.CanPlateStop = !0),
                                    (this.m_isShowWinEnd = !1),
                                    !this.m_gameView.SpinAck)
                                  ) {
                                    e.next = 48;
                                    break;
                                  }
                                  if (!Game_Define.EnteredGLState) {
                                    e.next = 14;
                                    break;
                                  }
                                  return (
                                    (t =
                                      this.m_gameView.SpinAck.RoundQueue[
                                        Game_Define.RoundIdx
                                      ]),
                                    (n =
                                      t.ComboStageData[Game_Define.ComboIdx]
                                        .MysteryGolden),
                                    (i = this.m_gameView.PlateSymbolTo2DArray(
                                      n.CoinMul,
                                      !0
                                    )),
                                    node.Play(
                                      Game_Define.AudioClips.Multiplier_Get
                                    ),
                                    (e.next = 12),
                                    this.m_gameView.EffectPlate.CoinWin(i)
                                  );
                                case 12:
                                  return (
                                    (e.next = 14),
                                    node$2.Wait(this.m_gameView, 0.5)
                                  );
                                case 14:
                                  if (
                                    ((this.m_lvl = BigWinComponent.Level.NONE),
                                    (o =
                                      this.m_gameView.SpinAck.RoundQueue[
                                        Game_Define.RoundIdx
                                      ]),
                                    o.MaxFlag &&
                                      node$6.ShowMessageBox(
                                        node$2.StringKey.MSGBOX_MAX_REWARD,
                                        node$2.StringKey
                                          .MSGBOX_TITLE_SYSTEM_INFO
                                      ),
                                    !((r = o.RoundWin ? o.RoundWin : 0) > 0))
                                  ) {
                                    e.next = 39;
                                    break;
                                  }
                                  if (
                                    ((a = node$4.GetNowBetValue()),
                                    !Game_Define.EnteredGLState)
                                  ) {
                                    e.next = 28;
                                    break;
                                  }
                                  if (
                                    ((s =
                                      o.ComboStageData[Game_Define.ComboIdx]
                                        .GoldenWin),
                                    !(node$3.divide(s, a) >= 30))
                                  ) {
                                    e.next = 28;
                                    break;
                                  }
                                  return (
                                    (l =
                                      this.m_gameView.EffectPlate.ShakeWorld()),
                                    (e.next = 28),
                                    node$2.Wait(this.m_gameView, l - 0.5)
                                  );
                                case 28:
                                  (this.m_gameView.TotalWin += o.RoundWin),
                                    (c = node$3.divide(r, a)),
                                    (m = Game_Define.AWARD_SETTING.length - 1);
                                case 31:
                                  if (!(m >= 0)) {
                                    e.next = 38;
                                    break;
                                  }
                                  if (
                                    !(c >= Game_Define.AWARD_SETTING[m].BetRate)
                                  ) {
                                    e.next = 35;
                                    break;
                                  }
                                  return (
                                    (this.m_lvl =
                                      Game_Define.AWARD_SETTING[m].Lv1),
                                    e.abrupt("break", 38)
                                  );
                                case 35:
                                  m--, (e.next = 31);
                                  break;
                                case 38:
                                  (!node$3.CheckSwitchOff(
                                    SwitchOffKeyDefine.NoSoundUnder1
                                  ) ||
                                    (node$3.CheckSwitchOff(
                                      SwitchOffKeyDefine.NoSoundUnder1
                                    ) &&
                                      c > 1)) &&
                                    c < Game_Define.SmallAward[2] &&
                                    (c < Game_Define.SmallAward[0]
                                      ? node.Play(
                                          Game_Define.AudioClips.Small_Win_01
                                        )
                                      : c < Game_Define.SmallAward[1]
                                      ? node.Play(
                                          Game_Define.AudioClips.Small_Win_02
                                        )
                                      : node.Play(
                                          Game_Define.AudioClips.Small_Win_03
                                        ));
                                case 39:
                                  if (
                                    (this.m_lvl !==
                                      BigWinComponent.Level.NONE &&
                                      (this.m_gameView.SetBGMVolumeByFade(
                                        1,
                                        0.01,
                                        0,
                                        this.m_gameView.BgmId
                                      ),
                                      (this.m_gameView.BigWin.node.active = !0),
                                      this.m_gameView.BigWin.Show(
                                        r,
                                        this.m_lvl
                                      ),
                                      node$4.SetSpinState(
                                        SlotBottomBarState.GET_AWARD_NO_AUTO
                                      )),
                                    !(
                                      r > 0 &&
                                      this.m_lvl === BigWinComponent.Level.NONE
                                    ))
                                  ) {
                                    e.next = 47;
                                    break;
                                  }
                                  return (
                                    this.m_gameView.ShowWin(r),
                                    (e.next = 44),
                                    node$2.Wait(
                                      this.m_gameView,
                                      Game_Define.DELAY.SYMBOL_WIN
                                    )
                                  );
                                case 44:
                                  (this.m_isShowWinEnd = !0), (e.next = 48);
                                  break;
                                case 47:
                                  this.m_isShowWinEnd = !0;
                                case 48:
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
                  (n.OnProcess = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  this.m_gameView.BigWin.IsEnd &&
                                    this.m_isShowWinEnd &&
                                    (this.m_lvl !==
                                      BigWinComponent.Level.NONE &&
                                      this.m_gameView.SetBGMVolumeByFade(
                                        0.1,
                                        1,
                                        0.5,
                                        this.m_gameView.BgmId
                                      ),
                                    (this.m_gameView.BigWin.node.active = !1),
                                    node$4.SetWinValueWithCheck({
                                      maxWin: this.m_gameView.SpinAck.TotalWin,
                                      value: this.m_gameView.TotalWin,
                                      stopAction: !0,
                                    }),
                                    Game_Define.EnteredGLState &&
                                    this.HasNudgeUp()
                                      ? node$5.NextState(
                                          GAMEVIEW_STATE.NUDGE_UP
                                        )
                                      : node$5.NextState(
                                          GAMEVIEW_STATE.ROUND_SHOW_END
                                        ));
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
                  (n.OnLeave = function () {}),
                  (n.HasNudgeUp = function () {
                    for (
                      var e =
                          this.m_gameView.SpinAck.RoundQueue[
                            Game_Define.RoundIdx
                          ],
                        t = this.m_gameView.PlateSymbolTo2DArray(
                          e.ComboStageData[Game_Define.ComboIdx]
                            .ComboStageSymbol
                        ),
                        n = !1,
                        i = 0;
                      i < Game_Define.COL;
                      i++
                    )
                      for (var o = 0; o < Game_Define.ROW; o++)
                        t[i][o] == Game_Define.SpecialSymbol.Symbol_NudgeUp &&
                          (n = !0);
                    return n;
                  }),
                  t
                );
              })(BaseState))
            ) || _class$m),
          _dec$n,
          _class$n;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "a6fa5arhLdNRJj/JDcgnZ0L",
            "CheckState",
            void 0
          );
        var ccclass$n = _decorator.ccclass,
          CheckState =
            ((_dec$n = ccclass$n("CheckState")),
            _dec$n(
              (_class$n = (function (e) {
                function t(t) {
                  var n;
                  return (
                    ((n = e.call(this) || this).m_gameView = null),
                    (n.m_gameView = t),
                    n
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.OnEnter = function () {
                    log("game state CHECK_STATE"),
                      this.m_gameView.SpinAck.RoundQueue.length > 1 &&
                      !Game_Define.IsInFG
                        ? node$5.NextState(GAMEVIEW_STATE.ENTER_FREE)
                        : Game_Define.IsInFG &&
                          Game_Define.RoundIdx ===
                            this.m_gameView.SpinAck.RoundQueue.length - 1
                        ? node$5.NextState(GAMEVIEW_STATE.LEAVE_FREE)
                        : node$5.NextState(GAMEVIEW_STATE.ROUND_END);
                  }),
                  (n.OnProcess = function () {}),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$n),
          _dec$o,
          _class$o;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "a704cpiV7dLzLX3cJJLbHnj",
            "CollectState",
            void 0
          );
        var ccclass$o = _decorator.ccclass,
          CollectState =
            ((_dec$o = ccclass$o("CollectState")),
            _dec$o(
              (_class$o = (function (e) {
                function t(t) {
                  var n;
                  return (
                    ((n = e.call(this) || this).m_gameView = null),
                    (n.m_mysteryGolden = null),
                    (n.m_canStartSpin = !1),
                    (n.m_gameView = t),
                    n
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.OnEnter = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, n, i, o, r, a, s, l, c, m, u;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    log("game state CollectState"),
                                    (this.m_canStartSpin = !1),
                                    (t =
                                      this.m_gameView.SpinAck.RoundQueue[
                                        Game_Define.RoundIdx
                                      ]),
                                    (n = this.m_gameView.PlateSymbolTo2DArray(
                                      t.ComboStageData[Game_Define.ComboIdx]
                                        .ComboStageSymbol
                                    )),
                                    (this.m_mysteryGolden =
                                      t.ComboStageData[
                                        Game_Define.ComboIdx
                                      ].MysteryGolden),
                                    (i = this.m_gameView.PlateSymbolTo2DArray(
                                      this.m_mysteryGolden.CoinMul,
                                      !0
                                    )),
                                    (o = this.m_mysteryGolden.Collector[0].Mul),
                                    (e.next = 9),
                                    this.m_gameView.EffectPlate.CollectCoin(
                                      n,
                                      i
                                    )
                                  );
                                case 9:
                                  return (
                                    (e.next = 11),
                                    this.m_gameView.EffectPlate.CollectorToCoin(
                                      n,
                                      o
                                    )
                                  );
                                case 11:
                                  if (
                                    ((r =
                                      this.m_mysteryGolden.Collector[0].CcPos),
                                    (a = this.m_mysteryGolden.Mult))
                                  )
                                    for (s = 0; s < a.length; s++)
                                      (l = a[s].Pos ? a[s].Pos : 0), r.push(l);
                                  (c = this.GetCanSpinPlate(r)),
                                    Game_Define.ComboIdx++,
                                    (m = this.m_gameView.PlateSymbolTo2DArray(
                                      t.ComboStageData[Game_Define.ComboIdx]
                                        .ComboStageSymbol
                                    )),
                                    (this.m_mysteryGolden =
                                      t.ComboStageData[
                                        Game_Define.ComboIdx
                                      ].MysteryGolden),
                                    (u = this.m_gameView.PlateSymbolTo2DArray(
                                      this.m_mysteryGolden.CoinMul,
                                      !0
                                    )),
                                    this.m_gameView.SingleSlot.StartSpin(
                                      node$4.IsHardStop
                                    ),
                                    this.m_gameView.SingleSlot.SetPlateInfo(
                                      m,
                                      u,
                                      c
                                    ),
                                    (this.m_canStartSpin = !0);
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
                  (n.OnProcess = function (e) {
                    this.m_canStartSpin &&
                      (this.m_gameView.SingleSlot.Spin(e),
                      this.m_gameView.SingleSlot.IsPlateStop() &&
                        this.m_gameView.CheckNextState(this.m_mysteryGolden));
                  }),
                  (n.OnLeave = function () {}),
                  (n.GetCanSpinPlate = function (e) {
                    for (
                      var t = [
                          [!1, !1, !1, !1, !1],
                          [!1, !1, !1, !1, !1],
                          [!1, !1, !1, !1, !1],
                          [!1, !1, !1, !1, !1],
                          [!1, !1, !1, !1, !1],
                        ],
                        n = 0;
                      n < e.length;
                      n++
                    ) {
                      var i = Math.floor(e[n] / Game_Define.COL),
                        o = e[n] % Game_Define.ROW;
                      t[i][o] = !0;
                    }
                    return t;
                  }),
                  t
                );
              })(BaseState))
            ) || _class$o),
          _dec$p,
          _class$p;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "f39f5p6o7xI/bcSRjpEi5BR",
            "ConvertState",
            void 0
          );
        var ccclass$p = _decorator.ccclass,
          ConvertState =
            ((_dec$p = ccclass$p("ConvertState")),
            _dec$p(
              (_class$p = (function (e) {
                function t(t) {
                  var n;
                  return (
                    ((n = e.call(this) || this).m_gameView = null),
                    (n.m_mysteryGolden = null),
                    (n.m_convertPos = null),
                    (n.m_canStartSpin = !1),
                    (n.m_gameView = t),
                    n
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.OnEnter = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, n, i, o, r, a, s, l, c, m;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    log("game state ConvertState"),
                                    (this.m_canStartSpin = !1),
                                    (t =
                                      this.m_gameView.SpinAck.RoundQueue[
                                        Game_Define.RoundIdx
                                      ]),
                                    (n = this.m_gameView.PlateSymbolTo2DArray(
                                      t.ComboStageData[Game_Define.ComboIdx]
                                        .ComboStageSymbol
                                    )),
                                    (this.m_mysteryGolden =
                                      t.ComboStageData[
                                        Game_Define.ComboIdx
                                      ].MysteryGolden),
                                    (i = this.m_mysteryGolden.Convert[0]),
                                    (e.next = 8),
                                    this.m_gameView.EffectPlate.PlayConvert(
                                      n,
                                      i
                                    )
                                  );
                                case 8:
                                  return (
                                    (o = Game_Define.DebugMode
                                      ? 0.5 / Game_Define.DebugSpeed
                                      : 0.5),
                                    (e.next = 11),
                                    node$2.Wait(this.m_gameView, o)
                                  );
                                case 11:
                                  return (
                                    node.Play(
                                      Game_Define.AudioClips.Coin_Converter_Show
                                    ),
                                    this.m_gameView.EffectPlate.ShowConvertTarget(
                                      i,
                                      !0
                                    ),
                                    (e.next = 15),
                                    this.m_gameView.EffectPlate.ConvertToGoldLion(
                                      i
                                    )
                                  );
                                case 15:
                                  return (
                                    node.Play(
                                      Game_Define.AudioClips.GLion_Appear_Change
                                    ),
                                    this.m_gameView.EffectPlate.ConvertGoldLionChange(
                                      i
                                    ),
                                    (r = Game_Define.DebugMode
                                      ? 1.5 / Game_Define.DebugSpeed
                                      : 1.5),
                                    (e.next = 20),
                                    node$2.Wait(this.m_gameView, r)
                                  );
                                case 20:
                                  this.m_gameView.EffectPlate.ShowConvertTarget(
                                    i,
                                    !1
                                  ),
                                    (a = i.CvPos),
                                    (s = i.SrcPos ? i.SrcPos : 0),
                                    a.push(s),
                                    (l = this.GetCanSpinPlate(a)),
                                    Game_Define.ComboIdx++,
                                    (c = this.m_gameView.PlateSymbolTo2DArray(
                                      t.ComboStageData[Game_Define.ComboIdx]
                                        .ComboStageSymbol
                                    )),
                                    (this.m_mysteryGolden =
                                      t.ComboStageData[
                                        Game_Define.ComboIdx
                                      ].MysteryGolden),
                                    (m = this.m_gameView.PlateSymbolTo2DArray(
                                      this.m_mysteryGolden.CoinMul,
                                      !0
                                    )),
                                    this.m_gameView.SingleSlot.StartSpin(
                                      node$4.IsHardStop
                                    ),
                                    this.m_gameView.SingleSlot.SetPlateInfo(
                                      c,
                                      m,
                                      l
                                    ),
                                    (this.m_canStartSpin = !0);
                                case 32:
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
                  (n.OnProcess = function (e) {
                    this.m_canStartSpin &&
                      (this.m_gameView.SingleSlot.Spin(e),
                      this.m_gameView.SingleSlot.IsPlateStop() &&
                        this.m_gameView.CheckNextState(this.m_mysteryGolden));
                  }),
                  (n.OnLeave = function () {}),
                  (n.GetCanSpinPlate = function (e) {
                    for (
                      var t = [
                          [!1, !1, !1, !1, !1],
                          [!1, !1, !1, !1, !1],
                          [!1, !1, !1, !1, !1],
                          [!1, !1, !1, !1, !1],
                          [!1, !1, !1, !1, !1],
                        ],
                        n = 0;
                      n < e.length;
                      n++
                    ) {
                      var i = Math.floor(e[n] / Game_Define.COL),
                        o = e[n] % Game_Define.ROW;
                      t[i][o] = !0;
                    }
                    return t;
                  }),
                  t
                );
              })(BaseState))
            ) || _class$p),
          _dec$q,
          _class$q;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "2f5e879wXRJyYdDJS/FZQ7t",
            "EnterFreeState",
            void 0
          );
        var ccclass$q = _decorator.ccclass,
          EnterFreeState =
            ((_dec$q = ccclass$q("EnterFreeState")),
            _dec$q(
              (_class$q = (function (e) {
                function t(t) {
                  var n;
                  return (
                    ((n = e.call(this) || this).m_gameView = null),
                    (n.m_gameView = t),
                    n
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.OnEnter = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t,
                          n,
                          i = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    log("game state ENTER_FREE"),
                                    node$8.IsFeaturesDemoMode ||
                                      Game_Define.IsInBuyBonus ||
                                      this.m_gameView.KeepLastPlateInfo(),
                                    (t =
                                      this.m_gameView.SpinAck.RoundQueue[
                                        Game_Define.RoundIdx
                                      ]),
                                    (n = this.m_gameView.PlateSymbolTo2DArray(
                                      t.ComboStageData[Game_Define.ComboIdx]
                                        .ComboStageSymbol
                                    )),
                                    this.m_gameView.EffectPlate.ShowScatterWin(
                                      n
                                    ),
                                    this.m_gameView.SetBGMVolumeByFade(
                                      1,
                                      0.2,
                                      1,
                                      this.m_gameView.BgmId
                                    ),
                                    (e.next = 8),
                                    this.m_gameView.CharacterSpine.PlayScatterWin()
                                  );
                                case 8:
                                  return (
                                    node$4.SetBarNodeVisiable(!1),
                                    (Game_Define.IsInFG = !0),
                                    (this.m_gameView.IsLock = !0),
                                    this.m_gameView.SlotReels.SetFreeGameLockColumn(),
                                    this.m_gameView.SetBGMVolumeByFade(
                                      1,
                                      0.01,
                                      0.5,
                                      this.m_gameView.BgmId
                                    ),
                                    node.Play(Game_Define.AudioClips.BG_Appear),
                                    node$4.SetEnterFree(),
                                    (e.next = 17),
                                    this.m_gameView.EffectPlate.EnterFree(
                                      function () {
                                        Game_Define.EnteredGLState &&
                                          (i.m_gameView.EffectPlate.TurnOnMystery(),
                                          i.m_gameView.SingleSlot.CloseAllSymbol(),
                                          i.m_gameView.EffectPlate.CleanAllGoldFrameEffect(),
                                          i.m_gameView.EffectPlate.CleanAllGreenBgEffect(),
                                          (Game_Define.EnteredGLState = !1)),
                                          i.m_gameView.EffectPlate.CleanAllEffect(),
                                          i.m_gameView.EffectPlate.SetFreeGameMystery(),
                                          i.m_gameView.BuyBonus.SetBuyBtnVisible(
                                            !1
                                          );
                                      }
                                    )
                                  );
                                case 17:
                                  return (
                                    (Game_Define.FGAllWins =
                                      this.m_gameView.GetFGAllWins()),
                                    this.m_gameView.AllWinsCounter.SetMultiLabel(
                                      Game_Define.FGAllWins
                                    ),
                                    node$4.SetEnterFree(!1),
                                    (this.m_gameView.IsLock = !1),
                                    this.m_gameView.IsChange &&
                                      this.m_gameView.OnRotation(),
                                    node$4.SetBarNodeVisiable(!0, 0.5),
                                    (e.next = 25),
                                    this.m_gameView.SetFreeGame()
                                  );
                                case 25:
                                  this.m_gameView.SetBGMVolumeByFade(
                                    0.01,
                                    0,
                                    0,
                                    this.m_gameView.BgmId
                                  ),
                                    (this.m_gameView.BgmId = node.Play(
                                      Game_Define.AudioClips.BGM_BG,
                                      !0,
                                      null,
                                      0
                                    )),
                                    this.m_gameView.SetBGMVolumeByFade(
                                      0,
                                      1,
                                      0.5,
                                      this.m_gameView.BgmId
                                    ),
                                    this.m_gameView.AutoplayInfos &&
                                      this.m_gameView.AutoplayInfos
                                        .isCheckFree &&
                                      node$4.ShowAutoPlayState(!1),
                                    node$5.NextState(GAMEVIEW_STATE.ROUND_END);
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
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.OnProcess = function () {}),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$q),
          _dec$r,
          _class$r;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "7eb64TTMslIo5ug03PgJc0J",
            "FeatureShowState",
            void 0
          );
        var ccclass$r = _decorator.ccclass,
          FeatureShowState =
            ((_dec$r = ccclass$r("FeatureShowState")),
            _dec$r(
              (_class$r = (function (e) {
                function t(t) {
                  var n;
                  return (
                    ((n = e.call(this) || this).m_gameView = null),
                    (n.m_gameView = t),
                    n
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.OnEnter = function () {
                    log("GAMEVIEW_STATE.FEATURE_SHOW"),
                      (this.m_gameView.IntroSpine.node.active = !1),
                      (this.m_gameView.IntroSpine.IsIntroed = !0),
                      node$4.CanPlayFeaturesDemo(!0),
                      (this.m_gameView.IsAutoShowFeatures = !0),
                      node$4.SetBarNodeVisiable(!0),
                      node$8.AutoShowFeatures(),
                      this.m_gameView.BuyBonus.SetBuyBtnVisible(!0);
                  }),
                  (n.OnProcess = function () {}),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$r),
          _dec$s,
          _class$s;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "a65c679lZdHcYUSg2LV29XV",
            "GoldenLionState",
            void 0
          );
        var ccclass$s = _decorator.ccclass,
          GoldenLionState =
            ((_dec$s = ccclass$s("GoldenLionState")),
            _dec$s(
              (_class$s = (function (e) {
                function t(t) {
                  var n;
                  return (
                    ((n = e.call(this) || this).m_gameView = null),
                    (n.m_gameView = t),
                    n
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.OnEnter = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, n;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    log("game state GoldenLionState"),
                                    this.m_gameView.EffectPlate.CleanAllSymbolEffect(),
                                    this.m_gameView.SlotReels.ShowStaticSymbol(),
                                    (Game_Define.ComboIdx = 0),
                                    (t =
                                      this.m_gameView.SpinAck.RoundQueue[
                                        Game_Define.RoundIdx
                                      ]),
                                    (n = this.m_gameView.PlateSymbolTo2DArray(
                                      t.ComboStageData[Game_Define.ComboIdx]
                                        .ComboStageSymbol
                                    )),
                                    this.m_gameView.SlotReels.ShowSymbolDark(
                                      !0
                                    ),
                                    node.Play(
                                      Game_Define.AudioClips.GLion_Appear_Change
                                    ),
                                    this.m_gameView.EffectPlate.GoldLionChange(
                                      n
                                    ),
                                    this.m_gameView.EffectPlate.ShowGoldFrameAndGreenBg(
                                      n
                                    ),
                                    this.m_gameView.SetBGMVolumeByFade(
                                      1,
                                      0,
                                      1.5,
                                      this.m_gameView.BgmId
                                    ),
                                    (e.next = 13),
                                    node$2.Wait(this.m_gameView, 1.5)
                                  );
                                case 13:
                                  (this.m_gameView.BgmId = node.Play(
                                    Game_Define.AudioClips.BGM_GLion,
                                    !0,
                                    null,
                                    0
                                  )),
                                    this.m_gameView.SetBGMVolumeByFade(
                                      0,
                                      1,
                                      0.5,
                                      this.m_gameView.BgmId
                                    ),
                                    node$5.NextState(
                                      GAMEVIEW_STATE.SINGLE_SPIN
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
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.OnProcess = function () {}),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$s);
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "b4ea3no+tlEg7YLlfUmSyPr", "IdleState", void 0);
        var IdleState = (function (e) {
            function t(t) {
              var n;
              return (
                ((n = e.call(this) || this).m_gameView = null),
                (n.m_gameView = t),
                n
              );
            }
            return (
              _inheritsLoose(t, e),
              (t.prototype.Enter = (function () {
                var e = _asyncToGenerator(
                  _regeneratorRuntime().mark(function e() {
                    var t, n, i;
                    return _regeneratorRuntime().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              log("game state idle"),
                                Game_Define.IsInFG ||
                                  node$4.IsFreeSpin ||
                                  (node$4.CanPlayFeaturesDemo(!0),
                                  (node$4.IsGameIdle = !0)),
                                this.m_gameView.CharacterSpine.PlayIdle(),
                                !this.m_gameView.SpinAck ||
                                  Game_Define.IsInFG ||
                                  Game_Define.IsJustReset ||
                                  ((t =
                                    this.m_gameView.SpinAck.RoundQueue[
                                      Game_Define.RoundIdx
                                    ]),
                                  (n = this.m_gameView.PlateSymbolTo2DArray(
                                    t.ComboStageData[0].ComboStageSymbol
                                  )),
                                  (i = t.ComboStageData[0].AwardDataVec),
                                  this.m_gameView.EffectPlate.ShowSingleLineEffect(
                                    n,
                                    i
                                  )),
                                Game_Define.IsInFG ||
                                  this.m_gameView.BuyBonus.SetBuyBtnVisible(!0);
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
              t
            );
          })(Common_IdleState),
          _dec$t,
          _class$t;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "b7a34kOG2dDfqJUtIKHND5I",
            "LeaveFreeState",
            void 0
          );
        var ccclass$t = _decorator.ccclass,
          LeaveFreeState =
            ((_dec$t = ccclass$t("LeaveFreeState")),
            _dec$t(
              (_class$t = (function (e) {
                function t(t) {
                  var n;
                  return (
                    ((n = e.call(this) || this).m_gameView = null),
                    (n.m_gameView = t),
                    n
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.OnEnter = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    log("game state LEAVE_FREE"),
                                    (e.next = 3),
                                    node$2.Wait(this.m_gameView, 1)
                                  );
                                case 3:
                                  return (
                                    (Game_Define.IsInFG = !1),
                                    node$4.SetLeaveFree(!1),
                                    this.m_gameView.SetBGMVolumeByFade(
                                      1,
                                      0.01,
                                      0.5,
                                      this.m_gameView.BgmId
                                    ),
                                    node.Play(Game_Define.AudioClips.BG_End),
                                    (e.next = 9),
                                    this.m_gameView.EffectPlate.LeaveFree(
                                      this.m_gameView.SpinAck.TotalWin,
                                      function () {
                                        t.m_gameView.EffectPlate.CleanAllEffect(),
                                          node$8.IsFeaturesDemoMode ||
                                            Game_Define.IsInBuyBonus ||
                                            t.m_gameView.RecoverLastPlateInfo();
                                      }
                                    )
                                  );
                                case 9:
                                  node$8.IsFeaturesDemoMode ||
                                    Game_Define.IsInBuyBonus ||
                                    this.m_gameView.AllWinsCounter.SetMultiLabel(
                                      Game_Define.LastGoldPos.length + 1
                                    ),
                                    this.m_gameView.SetBGMVolumeByFade(
                                      1,
                                      0,
                                      0,
                                      this.m_gameView.BgmId
                                    ),
                                    (this.m_gameView.BgmId = node.Play(
                                      Game_Define.AudioClips.BGM_MG,
                                      !0,
                                      null,
                                      0
                                    )),
                                    this.m_gameView.SetBGMVolumeByFade(
                                      0,
                                      1,
                                      0.5,
                                      this.m_gameView.BgmId
                                    ),
                                    this.m_gameView.SetMainGame(),
                                    this.m_gameView.BuyBonus.SetBuyBtnVisible(
                                      !0
                                    ),
                                    node$4.SetLeaveFree(),
                                    node$5.NextState(GAMEVIEW_STATE.ROUND_END);
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
                  (n.OnProcess = function () {}),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$t),
          _dec$u,
          _class$u;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "a030cwPCUBPu4m0sPsFxliN",
            "LineAwardState",
            void 0
          );
        var ccclass$u = _decorator.ccclass,
          LineAwardState =
            ((_dec$u = ccclass$u("LineAwardState")),
            _dec$u(
              (_class$u = (function (e) {
                function t(t) {
                  var n;
                  return (
                    ((n = e.call(this) || this).m_gameView = null),
                    (n.m_gameView = t),
                    n
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.OnEnter = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, n, i, o, r;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    (log("game state LineAwardState"),
                                    (t =
                                      this.m_gameView.SpinAck.RoundQueue[
                                        Game_Define.RoundIdx
                                      ]),
                                    (n = this.m_gameView.PlateSymbolTo2DArray(
                                      t.ComboStageData[0].ComboStageSymbol
                                    )),
                                    !(
                                      (i = t.ComboStageData[0].ComboStageWin
                                        ? t.ComboStageData[0].ComboStageWin
                                        : 0) > 0
                                    ))
                                  ) {
                                    e.next = 15;
                                    break;
                                  }
                                  if (
                                    ((o = t.ComboStageData[0].AwardDataVec),
                                    this.m_gameView.SlotReels.ShowSymbolDark(
                                      !0
                                    ),
                                    this.m_gameView.EffectPlate.ShowSymbolEffect(
                                      n,
                                      o
                                    ),
                                    (r =
                                      node$3.divide(
                                        i,
                                        node$4.GetNowBetValue()
                                      ) >= Game_Define.SmallAward[2]),
                                    !Game_Define.EnteredGLState && !r)
                                  ) {
                                    e.next = 13;
                                    break;
                                  }
                                  return (
                                    node.Play(Game_Define.AudioClips.Win_Show),
                                    (e.next = 13),
                                    node$2.Wait(
                                      this.m_gameView,
                                      Game_Define.DELAY.SYMBOL_WIN
                                    )
                                  );
                                case 13:
                                  this.m_gameView.CharacterSpine.PlayWin(),
                                    (!Game_Define.EnteredGLState && r) ||
                                      node$4.SetWinValueWithCheck({
                                        maxWin:
                                          this.m_gameView.SpinAck.TotalWin,
                                        value: node$3.strip(
                                          this.m_gameView.TotalWin + i
                                        ),
                                        stopAction: !0,
                                      });
                                case 15:
                                  node$3.ParseAwardTypeFlag(
                                    t.AwardTypeFlag,
                                    Game_Define.AwardTypeFlag.AwardTypeGolden
                                  )
                                    ? node$5.NextState(
                                        GAMEVIEW_STATE.GOLDEN_LION
                                      )
                                    : node$5.NextState(GAMEVIEW_STATE.AWARD);
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
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.OnProcess = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$u),
          _dec$v,
          _class$v;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "ba3ccOWytBNmZs+1p1khc8K",
            "MultiplyState",
            void 0
          );
        var ccclass$v = _decorator.ccclass,
          MultiplyState =
            ((_dec$v = ccclass$v("MultiplyState")),
            _dec$v(
              (_class$v = (function (e) {
                function t(t) {
                  var n;
                  return (
                    ((n = e.call(this) || this).m_gameView = null),
                    (n.m_mysteryGolden = null),
                    (n.m_canStartSpin = !1),
                    (n.m_gameView = t),
                    n
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.OnEnter = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, n, i, o, r, a, s, l, c, m, u, _, p;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    log("game state MultiplyState"),
                                      this.m_canStartSpin = !1,
                                      Game_Define.CurrrentCoinPlate = null,
                                      t =
                                        this.m_gameView.SpinAck.RoundQueue[
                                          Game_Define.RoundIdx
                                        ],
                                      n = this.m_gameView.PlateSymbolTo2DArray(
                                        t.ComboStageData[Game_Define.ComboIdx]
                                          .ComboStageSymbol
                                      ),
                                      this.m_mysteryGolden =
                                        t.ComboStageData[
                                          Game_Define.ComboIdx
                                        ].MysteryGolden,
                                      i = this.m_gameView.PlateSymbolTo2DArray(
                                        this.m_mysteryGolden.CoinMul,
                                        !0
                                      ),
                                      o = this.m_mysteryGolden.Mult,
                                      r = 1,
                                      a = 0;
                                    a < o.length;
                                    a++
                                  )
                                    r = node$3.times(r, o[a].Mul);
                                  (Game_Define.CurrrentCoinPlate =
                                    this.m_gameView.GetOldCoinPlate(r, i)),
                                    (s = []),
                                    (l = 0);
                                case 13:
                                  if (!(l < o.length)) {
                                    e.next = 27;
                                    break;
                                  }
                                  return (
                                    (c = o[l].Mul),
                                    (m = o[l].Pos ? o[l].Pos : 0),
                                    s.push(m),
                                    (e.next = 19),
                                    this.m_gameView.EffectPlate.MultiplierShoot(
                                      m,
                                      c
                                    )
                                  );
                                case 19:
                                  return (
                                    this.m_gameView.EffectPlate.FxShootCoin(
                                      m,
                                      n
                                    ),
                                    (e.next = 22),
                                    this.m_gameView.EffectPlate.CoinPlus(c, i)
                                  );
                                case 22:
                                  return (
                                    (e.next = 24),
                                    node$2.Wait(this.m_gameView, 1)
                                  );
                                case 24:
                                  l++, (e.next = 13);
                                  break;
                                case 27:
                                  this.m_mysteryGolden.Collector.length > 0
                                    ? node$5.NextState(GAMEVIEW_STATE.COLLECT)
                                    : ((u = this.GetCanSpinPlate(s)),
                                      Game_Define.ComboIdx++,
                                      (_ = this.m_gameView.PlateSymbolTo2DArray(
                                        t.ComboStageData[Game_Define.ComboIdx]
                                          .ComboStageSymbol
                                      )),
                                      (this.m_mysteryGolden =
                                        t.ComboStageData[
                                          Game_Define.ComboIdx
                                        ].MysteryGolden),
                                      (p = this.m_gameView.PlateSymbolTo2DArray(
                                        this.m_mysteryGolden.CoinMul,
                                        !0
                                      )),
                                      this.m_gameView.SingleSlot.StartSpin(
                                        node$4.IsHardStop
                                      ),
                                      this.m_gameView.SingleSlot.SetPlateInfo(
                                        _,
                                        p,
                                        u
                                      ),
                                      (this.m_canStartSpin = !0));
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
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.OnProcess = function (e) {
                    this.m_canStartSpin &&
                      (this.m_gameView.SingleSlot.Spin(e),
                      this.m_gameView.SingleSlot.IsPlateStop() &&
                        this.m_gameView.CheckNextState(this.m_mysteryGolden));
                  }),
                  (n.OnLeave = function () {}),
                  (n.GetCanSpinPlate = function (e) {
                    for (
                      var t = [
                          [!1, !1, !1, !1, !1],
                          [!1, !1, !1, !1, !1],
                          [!1, !1, !1, !1, !1],
                          [!1, !1, !1, !1, !1],
                          [!1, !1, !1, !1, !1],
                        ],
                        n = 0;
                      n < e.length;
                      n++
                    ) {
                      var i = Math.floor(e[n] / Game_Define.COL),
                        o = e[n] % Game_Define.ROW;
                      t[i][o] = !0;
                    }
                    return t;
                  }),
                  t
                );
              })(BaseState))
            ) || _class$v),
          _dec$w,
          _class$w;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "15ccfpKFqlLiZP3SImloFn5",
            "MysteryState",
            void 0
          );
        var ccclass$w = _decorator.ccclass,
          MysteryState =
            ((_dec$w = ccclass$w("MysteryState")),
            _dec$w(
              (_class$w = (function (e) {
                function t(t) {
                  var n;
                  return (
                    ((n = e.call(this) || this).m_gameView = null),
                    (n.m_gameView = t),
                    n
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.OnEnter = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, n, i, o, r, a, s, l;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    (log("game state Mystery"),
                                    (t =
                                      this.m_gameView.SpinAck.RoundQueue[
                                        Game_Define.RoundIdx
                                      ]),
                                    (n = this.m_gameView.PlateSymbolTo2DArray(
                                      t.ComboStageData[0].ComboStageSymbol
                                    )),
                                    (i = t.MysterySymbol ? t.MysterySymbol : 0),
                                    !(
                                      (o = t.GoldPos.length) >
                                        Game_Define.CurrentLevelUpNum ||
                                      (Game_Define.IsInFG && o > 0)
                                    ))
                                  ) {
                                    e.next = 27;
                                    break;
                                  }
                                  return (
                                    this.m_gameView.EffectPlate.SelectHit(
                                      this.m_gameView.SlotReels.SelectPlateInfo
                                    ),
                                    (e.next = 9),
                                    node$2.Wait(this.m_gameView, 0.5)
                                  );
                                case 9:
                                  if (
                                    (node.Play(Game_Define.AudioClips.Frame_On),
                                    this.m_gameView.CharacterSpine.PlayMystery(),
                                    this.m_gameView.EffectPlate.MysteryLevelUp(
                                      this.m_gameView.SlotReels.SelectPlateInfo
                                    ),
                                    !Game_Define.IsInFG)
                                  ) {
                                    e.next = 22;
                                    break;
                                  }
                                  return (
                                    (r = Game_Define.DebugMode
                                      ? 2 / Game_Define.DebugSpeed
                                      : 2),
                                    (e.next = 16),
                                    node$2.Wait(this.m_gameView, r)
                                  );
                                case 16:
                                  return (
                                    this.m_gameView.EffectPlate.YellowMysteryFlyToAllWins(
                                      this.m_gameView.SlotReels.SelectPlateInfo
                                    ),
                                    (e.next = 19),
                                    node$2.Wait(
                                      this.m_gameView,
                                      Game_Define.DELAY.YELLOW_MYSTERY_FLY / 2
                                    )
                                  );
                                case 19:
                                  node.Play(Game_Define.AudioClips.Collect_Fly),
                                    (e.next = 25);
                                  break;
                                case 22:
                                  return (
                                    (a = Game_Define.DebugMode
                                      ? 0.5 / Game_Define.DebugSpeed
                                      : 0.5),
                                    (e.next = 25),
                                    node$2.Wait(this.m_gameView, a)
                                  );
                                case 25:
                                  return (
                                    (e.next = 27),
                                    this.m_gameView.AllWinsCounter.PlayWin()
                                  );
                                case 27:
                                  if (!(i >= 0)) {
                                    e.next = 30;
                                    break;
                                  }
                                  return (
                                    (e.next = 30),
                                    this.m_gameView.EffectPlate.OpenMystery(
                                      n,
                                      i,
                                      t.GoldPos
                                    )
                                  );
                                case 30:
                                  if (
                                    ((s = node$3.ParseAwardTypeFlag(
                                      t.AwardTypeFlag,
                                      Game_Define.AwardTypeFlag.AwardTypeGolden
                                    )),
                                    (l = t.ComboStageData[0].ComboStageWin
                                      ? t.ComboStageData[0].ComboStageWin
                                      : 0),
                                    !s)
                                  ) {
                                    e.next = 39;
                                    break;
                                  }
                                  return (
                                    (Game_Define.EnteredGLState = !0),
                                    (e.next = 36),
                                    this.m_gameView.EffectPlate.ShowGoldenLion(
                                      n
                                    )
                                  );
                                case 36:
                                  l > 0
                                    ? node$5.NextState(
                                        GAMEVIEW_STATE.LINE_AWARD
                                      )
                                    : node$5.NextState(
                                        GAMEVIEW_STATE.GOLDEN_LION
                                      ),
                                    (e.next = 40);
                                  break;
                                case 39:
                                  node$5.NextState(GAMEVIEW_STATE.LINE_AWARD);
                                case 40:
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
                  (n.OnProcess = function () {}),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$w),
          _dec$x,
          _class$x;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "1fc7crkugpKU5n7csAk+Ap1",
            "NudgeUpState",
            void 0
          );
        var ccclass$x = _decorator.ccclass,
          NudgeUpState =
            ((_dec$x = ccclass$x("NudgeUpState")),
            _dec$x(
              (_class$x = (function (e) {
                function t(t) {
                  var n;
                  return (
                    ((n = e.call(this) || this).m_gameView = null),
                    (n.m_gameView = t),
                    n
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.OnEnter = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, n;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    log("game state NudgeUpState"),
                                    (Game_Define.IsNudgeUp = !0),
                                    (t =
                                      this.m_gameView.SpinAck.RoundQueue[
                                        Game_Define.RoundIdx
                                      ]),
                                    (n = this.m_gameView.PlateSymbolTo2DArray(
                                      t.ComboStageData[Game_Define.ComboIdx]
                                        .ComboStageSymbol
                                    )),
                                    (e.next = 6),
                                    this.m_gameView.EffectPlate.NudgeUpWin(n)
                                  );
                                case 6:
                                  node$5.NextState(
                                    GAMEVIEW_STATE.ROUND_SHOW_END
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
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.OnProcess = function () {}),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$x),
          _dec$y,
          _class$y;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "532b7nlLvVGfZL70S5dE7+g",
            "PlateShowState",
            void 0
          );
        var ccclass$y = _decorator.ccclass,
          PlateShowState =
            ((_dec$y = ccclass$y("PlateShowState")),
            _dec$y(
              (_class$y = (function (e) {
                function t(t) {
                  var n;
                  return (
                    ((n = e.call(this) || this).m_gameView = null),
                    (n.m_gameView = t),
                    n
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.OnEnter = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    log("game state PLATE_SHOW"),
                                    (this.m_gameView.IsLock = !0),
                                    this.m_gameView.SetBGMVolumeByFade(
                                      1,
                                      0.001,
                                      0,
                                      this.m_gameView.BgmId
                                    ),
                                    node.Play(Game_Define.AudioClips.Debut),
                                    (e.next = 6),
                                    this.m_gameView.IntroSpine.ShowIntro(
                                      this.m_gameView.IsLandscape
                                    )
                                  );
                                case 6:
                                  (this.m_gameView.IsLock = !1),
                                    this.m_gameView.OnRotation(),
                                    this.m_gameView.SetBGMVolumeByFade(
                                      0,
                                      1,
                                      0.5,
                                      this.m_gameView.BgmId
                                    ),
                                    node$4.SetBarNodeVisiable(!0, 0.5),
                                    this.m_gameView.BuyBonus.SetBuyBtnVisible(
                                      !0
                                    ),
                                    node$4.SetSpinState(
                                      SlotBottomBarState.IDLE
                                    ),
                                    node$2.FreeSpinRemain > 0
                                      ? node$5.NextState(
                                          CommonState.CHECK_FREESPIN
                                        )
                                      : node$5.NextState(CommonState.IDLE),
                                    node$9.StartAutoShow();
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
                  (n.OnProcess = function () {}),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$y),
          _dec$z,
          _class$z;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "c3a9f87OcpP7plXrKHx+1ap",
            "RealSpinState",
            void 0
          );
        var ccclass$z = _decorator.ccclass,
          RealSpinState =
            ((_dec$z = ccclass$z("RealSpinState")),
            _dec$z(
              (_class$z = (function (e) {
                function t(t) {
                  var n;
                  return (
                    ((n = e.call(this) || this).m_gameView = null),
                    (n.m_canSpin = !1),
                    (n.m_gameView = t),
                    n
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.OnEnter = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    (log("game state RealSpinState"),
                                    (this.m_canSpin = !1),
                                    1 === Game_Define.RoundIdx ||
                                      (node$8.IsFeaturesDemoMode &&
                                        0 == Game_Define.RoundIdx))
                                  ) {
                                    e.next = 14;
                                    break;
                                  }
                                  if (!Game_Define.IsNudgeUp) {
                                    e.next = 10;
                                    break;
                                  }
                                  return (
                                    (this.m_canSpin = !0),
                                    (e.next = 7),
                                    this.m_gameView.EffectPlate.NudgeUpPlate()
                                  );
                                case 7:
                                  this.m_gameView.SlotReels.NudgeAll(),
                                    (e.next = 14);
                                  break;
                                case 10:
                                  if (
                                    (this.m_gameView.SlotReels.NudgeAll(),
                                    !this.HasLockColumn())
                                  ) {
                                    e.next = 14;
                                    break;
                                  }
                                  return (
                                    (e.next = 14),
                                    node$2.Wait(
                                      this.m_gameView,
                                      Game_Define.DELAY.WAIT_FOR_NUDGE
                                    )
                                  );
                                case 14:
                                  (this.m_canSpin = !0),
                                    this.m_gameView.SlotReels.ShiftSelectPlate(),
                                    this.m_gameView.SlotReels.SetPerformSelectPlateInfo(),
                                    Game_Define.IsInFG
                                      ? (Game_Define.FGAllWins++,
                                        this.m_gameView.AllWinsCounter.PlayPlusOne(),
                                        tween(
                                          this.m_gameView.AllWinsCounter.node
                                        )
                                          .delay(0.167)
                                          .call(function () {
                                            t.m_gameView.AllWinsCounter.SetMultiLabel(
                                              Game_Define.FGAllWins
                                            );
                                          })
                                          .start())
                                      : ((node$8.IsFeaturesDemoMode ||
                                          Game_Define.IsInBuyBonus) &&
                                          0 == Game_Define.RoundIdx &&
                                          (Game_Define.CurrentLevelUpNum = 0),
                                        (Game_Define.MGAllWins =
                                          1 + Game_Define.CurrentLevelUpNum),
                                        this.m_gameView.AllWinsCounter.SetMultiLabel(
                                          Game_Define.MGAllWins
                                        ));
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
                  (n.OnProcess = function (e) {
                    this.m_canSpin &&
                      (this.m_gameView.SlotReels.Spin(e),
                      this.m_gameView.SlotReels.IsPlateStop() &&
                        (node$5.NextState(GAMEVIEW_STATE.MYSTERY),
                        (this.m_canSpin = !1),
                        (Game_Define.IsNudgeUp = !1)));
                  }),
                  (n.OnLeave = function () {}),
                  (n.HasLockColumn = function () {
                    for (var e = 0; e < Game_Define.COL; e++)
                      if (this.m_gameView.SlotReels.LockColumn[e]) return !0;
                    return !1;
                  }),
                  t
                );
              })(BaseState))
            ) || _class$z),
          _dec$A,
          _class$A;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "db111yvMHdDGqh6o393i93Y",
            "RoundEndState",
            void 0
          );
        var ccclass$A = _decorator.ccclass,
          RoundEndState =
            ((_dec$A = ccclass$A("RoundEndState")),
            _dec$A(
              (_class$A = (function (e) {
                function t(t) {
                  var n;
                  return (
                    ((n = e.call(this) || this).m_gameView = null),
                    (n.m_processTick = 0),
                    (n.m_canToNextRound = !1),
                    (n.m_gameView = t),
                    n
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.OnEnter = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    (log("game state ROUND_END"),
                                    (Game_Define.IsGetSpinAck = !1),
                                    (this.m_canToNextRound = !1),
                                    (this.m_gameView.CanPlateSpin = !0),
                                    (this.m_gameView.CanPlateStop = !1),
                                    (this.m_gameView.CanSpaceStop = !1),
                                    (Game_Define.IsAllGoldLion = !1),
                                    this.m_gameView.RetryRoundEnd(),
                                    Game_Define.IsInFG ||
                                      (Game_Define.LastSelectPlate =
                                        this.m_gameView.SlotReels.SelectPlateInfo),
                                    node$4.IsAutoSpin &&
                                      (this.m_processTick =
                                        node$7.TempoSetting.TripleCoinTreasure.AUTO_DELAY_TIME),
                                    Game_Define.IsInFG &&
                                    0 == Game_Define.RoundIdx
                                      ? (Game_Define.LastLockColumn = [
                                          !1,
                                          !1,
                                          !1,
                                          !1,
                                          !1,
                                        ])
                                      : (this.m_gameView.SpinAck.RoundQueue
                                          .length > 1 &&
                                          Game_Define.RoundIdx + 1 ==
                                            this.m_gameView.SpinAck.RoundQueue
                                              .length) ||
                                        this.m_gameView.SlotReels.LastLockColumn(),
                                    (Game_Define.OldPlateInfo =
                                      this.m_gameView.SlotReels.PlateInfo),
                                    Game_Define.EnteredGLState &&
                                      (this.m_gameView.SetBGMVolumeByFade(
                                        1,
                                        0,
                                        0.5,
                                        this.m_gameView.BgmId
                                      ),
                                      Game_Define.IsInFG
                                        ? (this.m_gameView.BgmId = node.Play(
                                            Game_Define.AudioClips.BGM_BG,
                                            !0,
                                            null,
                                            0
                                          ))
                                        : (this.m_gameView.BgmId = node.Play(
                                            Game_Define.AudioClips.BGM_MG,
                                            !0,
                                            null,
                                            0
                                          )),
                                      this.m_gameView.SetBGMVolumeByFade(
                                        0,
                                        1,
                                        0.5,
                                        this.m_gameView.BgmId
                                      ),
                                      (Game_Define.ComboIdx = 0)),
                                    !Game_Define.IsUnshow || Game_Define.IsInFG)
                                  ) {
                                    e.next = 22;
                                    break;
                                  }
                                  return (
                                    this.m_gameView.EffectPlate.CleanAllEffect(),
                                    this.m_gameView.SetLastPlateInfoByBet(),
                                    this.m_gameView.RecoverLastPlateInfo(),
                                    this.m_gameView.AllWinsCounter.SetMultiLabel(
                                      Game_Define.LastGoldPos.length + 1
                                    ),
                                    (e.next = 20),
                                    this.m_gameView.FxReelSpine.PlayFxReel()
                                  );
                                case 20:
                                  (Game_Define.IsUnshow = !1),
                                    (Game_Define.CanNotSaveInfo = !0);
                                case 22:
                                  if (
                                    !Game_Define.IsInBuyBonus ||
                                    Game_Define.IsInFG
                                  ) {
                                    e.next = 32;
                                    break;
                                  }
                                  return (
                                    node$4.SetNowBet(
                                      this.m_gameView.BetList[
                                        this.m_gameView.OldBetIdx
                                      ]
                                    ),
                                    this.m_gameView.EffectPlate.CleanAllEffect(),
                                    this.m_gameView.SetLastPlateInfoByBet(),
                                    this.m_gameView.RecoverLastPlateInfo(),
                                    this.m_gameView.AllWinsCounter.SetMultiLabel(
                                      Game_Define.LastGoldPos.length + 1
                                    ),
                                    (e.next = 30),
                                    this.m_gameView.FxReelSpine.PlayFxReel()
                                  );
                                case 30:
                                  (Game_Define.IsInBuyBonus = !1),
                                    (Game_Define.CanNotSaveInfo = !0);
                                case 32:
                                  this.m_canToNextRound = !0;
                                case 33:
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
                  (n.OnProcess = function (e) {
                    this.m_canToNextRound &&
                      ((this.m_processTick = node$3.strip(
                        this.m_processTick - e
                      )),
                      this.m_processTick <= 0 &&
                        node$a.CanToNextRound() &&
                        (!node$b.IsTwice ||
                          (node$b.IsTwice && node$b.IsGetRoundEndAck)) &&
                        (Game_Define.IsInFG &&
                        (Game_Define.RoundIdx > 0 || node$4.IsAutoSpin)
                          ? node$5.NextState(CommonState.SPIN)
                          : Game_Define.IsInFG
                          ? node$5.NextState(CommonState.IDLE)
                          : node$5.NextState(CommonState.END)));
                  }),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$A),
          _dec$B,
          _class$B;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "d1ec7vSBBNBgYctZv3L4dK5",
            "RoundShowEndState",
            void 0
          );
        var ccclass$B = _decorator.ccclass,
          RoundShowEndState =
            ((_dec$B = ccclass$B("RoundShowEndState")),
            _dec$B(
              (_class$B = (function (e) {
                function t(t) {
                  var n;
                  return (
                    ((n = e.call(this) || this).m_gameView = null),
                    (n.m_gameView = t),
                    n
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.OnEnter = function () {
                    log("game state ROUND_SHOW_END"),
                      node$5.NextState(CommonState.COMMON_SHOW);
                  }),
                  (n.OnProcess = function () {}),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$B),
          _dec$C,
          _class$C;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "3418fwqS0BC0Lvzu7GjCtkl",
            "SingleSpinState",
            void 0
          );
        var ccclass$C = _decorator.ccclass,
          SingleSpinState =
            ((_dec$C = ccclass$C("SingleSpinState")),
            _dec$C(
              (_class$C = (function (e) {
                function t(t) {
                  var n;
                  return (
                    ((n = e.call(this) || this).m_gameView = null),
                    (n.m_mysteryGolden = null),
                    (n.m_canStartSpin = !1),
                    (n.m_gameView = t),
                    n
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.OnEnter = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, n, i, o, r;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  log("game state SingleSpinState"),
                                    (this.m_canStartSpin = !1),
                                    (t =
                                      this.m_gameView.SpinAck.RoundQueue[
                                        Game_Define.RoundIdx
                                      ]),
                                    (n = this.m_gameView.PlateSymbolTo2DArray(
                                      t.ComboStageData[Game_Define.ComboIdx]
                                        .ComboStageSymbol
                                    )),
                                    (i = this.GetCanSpinPlate(n)),
                                    Game_Define.ComboIdx++,
                                    (o = this.m_gameView.PlateSymbolTo2DArray(
                                      t.ComboStageData[Game_Define.ComboIdx]
                                        .ComboStageSymbol
                                    )),
                                    (this.m_mysteryGolden =
                                      t.ComboStageData[
                                        Game_Define.ComboIdx
                                      ].MysteryGolden),
                                    (r = this.m_gameView.PlateSymbolTo2DArray(
                                      this.m_mysteryGolden.CoinMul,
                                      !0
                                    )),
                                    this.m_gameView.SingleSlot.StartSpin(
                                      node$4.IsHardStop
                                    ),
                                    this.m_gameView.SingleSlot.SetPlateInfo(
                                      o,
                                      r,
                                      i
                                    ),
                                    (this.m_canStartSpin = !0);
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
                  (n.OnProcess = function (e) {
                    if (
                      this.m_canStartSpin &&
                      (this.m_gameView.SingleSlot.Spin(e),
                      this.m_gameView.SingleSlot.IsPlateStop())
                    ) {
                      if (this.m_mysteryGolden.Convert.length > 0)
                        return void node$5.NextState(GAMEVIEW_STATE.CONVERT);
                      if (this.m_mysteryGolden.Mult.length > 0)
                        return void node$5.NextState(GAMEVIEW_STATE.MULTIPLY);
                      if (this.m_mysteryGolden.Collector.length > 0)
                        return void node$5.NextState(GAMEVIEW_STATE.COLLECT);
                      node$5.NextState(GAMEVIEW_STATE.AWARD);
                    }
                  }),
                  (n.OnLeave = function () {}),
                  (n.GetCanSpinPlate = function (e) {
                    for (
                      var t = [
                          [!1, !1, !1, !1, !1],
                          [!1, !1, !1, !1, !1],
                          [!1, !1, !1, !1, !1],
                          [!1, !1, !1, !1, !1],
                          [!1, !1, !1, !1, !1],
                        ],
                        n = 0;
                      n < Game_Define.COL;
                      n++
                    )
                      for (var i = 0; i < Game_Define.ROW; i++)
                        e[n][i] == Game_Define.Symbol.Symbol_Mystery &&
                          (t[n][i] = !0);
                    return t;
                  }),
                  t
                );
              })(BaseState))
            ) || _class$C),
          _dec$D,
          _class$D;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "00a29hBQ0ZMmpsOj5cxSEJI", "SpinState", void 0);
        var ccclass$D = _decorator.ccclass,
          SpinState =
            ((_dec$D = ccclass$D("SpinState")),
            _dec$D(
              (_class$D = (function (e) {
                function t(t) {
                  var n;
                  return (
                    ((n = e.call(this) || this).m_gameView = null),
                    (n.m_canSpin = !1),
                    (n.m_gameView = t),
                    n
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.OnEnter = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, n, i;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    (log("game state SpinState"),
                                    (this.m_canSpin = !1),
                                    (Game_Define.IsSetInfoOk = !1),
                                    node$a.StartSpin(),
                                    (node$4.IsGameIdle = !1),
                                    Game_Define.IsInFG
                                      ? (Game_Define.RoundIdx++,
                                        (t =
                                          this.m_gameView.SpinAck.RoundQueue[
                                            Game_Define.RoundIdx
                                          ]),
                                        (n =
                                          this.m_gameView.PlateSymbolTo2DArray(
                                            t.ComboStageData[0].ComboStageSymbol
                                          )),
                                        (i = t.GoldPos),
                                        this.m_gameView.StartSpin(),
                                        this.m_gameView.SlotReels.SetPlateInfo(
                                          n,
                                          i
                                        ),
                                        Game_Define.IsHardStop &&
                                          this.m_gameView.SlotReels.SetIsClickStopBtn(),
                                        (Game_Define.IsSetInfoOk = !0))
                                      : (this.m_gameView.StartSpin(),
                                        this.m_gameView.UnshowSpinAck &&
                                          (error("接收UnshowSpinAck！！！"),
                                          this.m_gameView.OnRecvSpinAck(
                                            this.m_gameView.UnshowSpinAck
                                          ))),
                                    this.m_gameView.UnshowSpinAck &&
                                      (this.m_gameView.UnshowSpinAck = null),
                                    !Game_Define.EnteredGLState)
                                  ) {
                                    e.next = 18;
                                    break;
                                  }
                                  return (
                                    this.m_gameView.EffectPlate.TurnOnMystery(),
                                    this.m_gameView.EffectPlate.GoldFrameAndGreenBgEnd(),
                                    this.m_gameView.SingleSlot.CloseAllSymbol(),
                                    (e.next = 13),
                                    this.m_gameView.EffectPlate.FxCoinEnd()
                                  );
                                case 13:
                                  this.m_gameView.EffectPlate.CleanAllGoldFrameEffect(),
                                    this.m_gameView.EffectPlate.CleanAllGreenBgEffect(),
                                    this.m_gameView.EffectPlate.CleanAllFxCoinEffect(),
                                    this.m_gameView.EffectPlate.CleanAllScatterEffect(),
                                    (Game_Define.EnteredGLState = !1);
                                case 18:
                                  if (
                                    (this.m_gameView.SlotReels.ShowSymbolDark(
                                      !1
                                    ),
                                    this.m_gameView.SlotReels.ShowStaticSymbol(),
                                    this.m_gameView.EffectPlate.StopSingleLineEffect(),
                                    this.m_gameView.EffectPlate.CleanAllSymbolEffect(),
                                    1 === Game_Define.RoundIdx ||
                                      (node$8.IsFeaturesDemoMode &&
                                        0 == Game_Define.RoundIdx))
                                  ) {
                                    e.next = 33;
                                    break;
                                  }
                                  if (Game_Define.IsJustReset) {
                                    e.next = 28;
                                    break;
                                  }
                                  return (
                                    (e.next = 26),
                                    this.m_gameView.EffectPlate.CloseMystery(
                                      Game_Define.OldPlateInfo,
                                      Game_Define.LastSelectPlate
                                    )
                                  );
                                case 26:
                                  e.next = 31;
                                  break;
                                case 28:
                                  if (!this.HasLockColumn()) {
                                    e.next = 31;
                                    break;
                                  }
                                  return (
                                    (e.next = 31),
                                    node$2.Wait(this.m_gameView, 0.5)
                                  );
                                case 31:
                                  (Game_Define.IsJustReset = !1),
                                    this.m_gameView.EffectPlate.CleanAllMysteryEffect();
                                case 33:
                                  this.m_canSpin = !0;
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
                  (n.OnProcess = function () {
                    (this.IsNeedNudge() && !Game_Define.IsGetSpinAck) ||
                      !this.m_canSpin ||
                      node$5.NextState(GAMEVIEW_STATE.REAL_SPIN);
                  }),
                  (n.OnLeave = function () {}),
                  (n.HasLockColumn = function () {
                    for (var e = 0; e < Game_Define.COL; e++)
                      if (this.m_gameView.SlotReels.LockColumn[e]) return !0;
                    return !1;
                  }),
                  (n.IsNeedNudge = function () {
                    for (var e = 0; e < Game_Define.COL; e++)
                      for (var t = 1; t < Game_Define.ROW; t++)
                        if (
                          Game_Define.OldPlateInfo[e][t] ===
                          Game_Define.Symbol.Symbol_Mystery
                        )
                          return !0;
                    return !1;
                  }),
                  t
                );
              })(BaseState))
            ) || _class$D),
          _dec$E,
          _class$E;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "108671eHYhAX73IH/PgjaiY",
            "UnshowPerpareState",
            void 0
          );
        var ccclass$E = _decorator.ccclass,
          UnshowPerpareState =
            ((_dec$E = ccclass$E("UnshowPerpareState")),
            _dec$E(
              (_class$E = (function (e) {
                function t(t) {
                  var n;
                  return (
                    ((n = e.call(this) || this).m_gameView = null),
                    (n.m_unShowPlate = null),
                    (n.m_unShowGoldPos = null),
                    (n.m_gameView = t),
                    n
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.OnEnter = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, n, i;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    (error(
                                      "Game_Define.GAMEVIEW_STATE.UNSHOW_PERPARE",
                                      this.m_gameView.UnshowSpinAck
                                    ),
                                    !this.m_gameView.UnshowSpinAck)
                                  ) {
                                    e.next = 42;
                                    break;
                                  }
                                  if (
                                    ((Game_Define.IsUnshow = !0),
                                    node$4.SetBarNodeVisiable(!0),
                                    (Game_Define.LastPlate =
                                      Game_Define.INIT_PLATE),
                                    (Game_Define.LastGoldPos = []),
                                    this.m_gameView.SlotReels.CleanLock(),
                                    this.m_gameView.AllWinsCounter.SetMultiLabel(
                                      1
                                    ),
                                    this.m_gameView.RecoverLastPlateInfo(),
                                    node$4.SetBarNodeVisiable(!0),
                                    (this.m_gameView.IntroSpine.node.active =
                                      !1),
                                    (this.m_gameView.IntroSpine.IsIntroed = !0),
                                    !(node$b.UnshowStartRound >= 1))
                                  ) {
                                    e.next = 35;
                                    break;
                                  }
                                  for (
                                    Game_Define.IsInFG = !0,
                                      Game_Define.RoundIdx =
                                        node$b.UnshowStartRound - 1,
                                      error(
                                        "UNSHOW_PERPARE this.m_gameView.Round:",
                                        Game_Define.RoundIdx
                                      ),
                                      this.m_gameView.SpinAck =
                                        this.m_gameView.UnshowSpinAck,
                                      node$8.IsFeaturesDemoMode ||
                                        this.m_gameView.KeepLastPlateInfo(),
                                      this.GetUnShowPlateInfo(),
                                      this.RecoverUnShowPlateInfo(),
                                      0 == Game_Define.RoundIdx &&
                                        (this.m_gameView.SlotReels.SetFreeGameLockColumn(),
                                        this.m_gameView.EffectPlate.SetFreeGameMystery()),
                                      this.m_gameView.TotalWin = 0,
                                      t = 0;
                                    t < Game_Define.RoundIdx + 1;
                                    t++
                                  )
                                    (n = this.m_gameView.SpinAck.RoundQueue[t]),
                                      (this.m_gameView.TotalWin = node$3.plus(
                                        this.m_gameView.TotalWin,
                                        n.RoundWin ? n.RoundWin : 0
                                      ));
                                  return (
                                    node$4.SetWinValue(
                                      this.m_gameView.TotalWin
                                    ),
                                    node$4.SetEnterFree(!1),
                                    (Game_Define.FGAllWins =
                                      this.m_gameView.SpinAck.RoundQueue[
                                        Game_Define.RoundIdx + 1
                                      ].StartMult - 1),
                                    this.m_gameView.AllWinsCounter.SetMultiLabel(
                                      Game_Define.FGAllWins
                                    ),
                                    this.m_gameView.SetBGMVolumeByFade(
                                      1,
                                      0,
                                      0,
                                      this.m_gameView.BgmId
                                    ),
                                    (this.m_gameView.BgmId = node.Play(
                                      Game_Define.AudioClips.BGM_BG,
                                      !0,
                                      null,
                                      0
                                    )),
                                    this.m_gameView.SetBGMVolumeByFade(
                                      0,
                                      1,
                                      0.5,
                                      this.m_gameView.BgmId
                                    ),
                                    this.m_gameView.BuyBonus.SetBuyBtnVisible(
                                      !1
                                    ),
                                    (e.next = 33),
                                    this.m_gameView.SetFreeGame()
                                  );
                                case 33:
                                  e.next = 36;
                                  break;
                                case 35:
                                  null == (i = this.m_gameView.BuyBonus) ||
                                    i.SetBuyBtnVisible(!0);
                                case 36:
                                  this.m_gameView.OnRotation(),
                                    (node$8.HasUnshow = !1),
                                    (node$b.HasUnshow = !1),
                                    node$6.ShowMessageBox(
                                      node$2.StringKey.MSGBOX_UNSHOW_BACK,
                                      node$2.StringKey.MSGBOX_TITLE_SYSTEM_INFO,
                                      function () {
                                        node$5.NextState(CommonState.SPIN);
                                      }
                                    ),
                                    (e.next = 43);
                                  break;
                                case 42:
                                  console.error(
                                    "Info Error",
                                    node$b.UnshowStartRound,
                                    this.m_gameView.UnshowSpinAck.RoundQueue
                                  );
                                case 43:
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
                  (n.OnProcess = function () {}),
                  (n.OnLeave = function () {}),
                  (n.GetUnShowPlateInfo = function () {
                    var e =
                      this.m_gameView.SpinAck.RoundQueue[Game_Define.RoundIdx];
                    if (
                      ((this.m_unShowPlate =
                        this.m_gameView.PlateSymbolTo2DArray(
                          e.ComboStageData[0].ComboStageSymbol
                        )),
                      (this.m_unShowGoldPos = e.GoldPos ? e.GoldPos : []),
                      this.m_unShowGoldPos.length > 0)
                    )
                      for (
                        var t = this.m_gameView.PosIndexToVec3(
                            this.m_unShowGoldPos
                          ),
                          n = 0;
                        n < t.length;
                        n++
                      ) {
                        var i = t[n].x,
                          o = t[n].y;
                        this.m_unShowPlate[i][o] =
                          Game_Define.Symbol.Symbol_Mystery_LeverUp;
                      }
                    error("GetUnShowPlateInfo:"),
                      error("this.m_unShowPlate:", this.m_unShowPlate),
                      error("this.m_unShowGoldPos:", this.m_unShowGoldPos);
                  }),
                  (n.RecoverUnShowPlateInfo = function () {
                    for (var e = 0; e < Game_Define.COL; e++)
                      for (var t = 0; t < Game_Define.ROW; t++)
                        this.m_gameView.SlotReels.SetSymbolNode(
                          e,
                          t,
                          this.m_unShowPlate[e][t]
                        );
                    this.m_gameView.SlotReels.RecoverLockInfo(
                      this.m_unShowPlate
                    ),
                      this.m_gameView.SlotReels.RecoverLastSelectPlate(),
                      (Game_Define.IsJustReset = !0),
                      error("RecoverUnShowPlateInfo:"),
                      error("this.m_unShowPlate:", this.m_unShowPlate),
                      error("LastSelectPlate:", Game_Define.LastSelectPlate),
                      error("Lock:", this.m_gameView.SlotReels.LockColumn);
                  }),
                  t
                );
              })(BaseState))
            ) || _class$E);
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "65ccfEGOpFM57FdWeLBvLJg",
            "WaitReadyState",
            void 0
          );
        var WaitReadyState = (function (e) {
            function t(t) {
              var n;
              return (
                ((n = e.call(this) || this).m_gameView = null),
                (n.m_gameView = t),
                n
              );
            }
            _inheritsLoose(t, e);
            var n = t.prototype;
            return (
              (n.OnEnter = function () {
                log("game state WaitReadyState"),
                  this.m_gameView.InitExtra(),
                  this.m_gameView.BuyBonus.SetBuyBtnVisible(!1),
                  node$4.ShowGameScene(),
                  node$4.ShowPlayReady(),
                  node$4.SetBarNodeVisiable(!1),
                  (this.m_gameView.IntroSpine.IsIntroed = !1),
                  this.m_gameView.IntroSpine.SetIntro(
                    this.m_gameView.IsLandscape
                  ),
                  node$c.LoadingComplete();
              }),
              (n.OnProcess = function () {}),
              (n.OnLeave = function () {}),
              t
            );
          })(BaseState),
          _dec$F,
          _class$F;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "5438aStUL9NR4o2qdPA238Z",
            "WaitResState",
            void 0
          );
        var ccclass$F = _decorator.ccclass,
          WaitResState =
            ((_dec$F = ccclass$F("WaitResState")),
            _dec$F(
              (_class$F = (function (e) {
                function t(t) {
                  var n;
                  return (
                    ((n = e.call(this) || this).m_gameView = null),
                    (n.m_gameView = t),
                    n
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.OnEnter = function () {
                    log("Game_Define.GAMEVIEW_STATE.WAIT_RES"),
                      this.m_gameView.FeaturesDemoInit();
                  }),
                  (n.OnProcess = function () {
                    Game_Define.AudioClips.BGM_MG &&
                      node$4.IsFeaturesDemoLoaded() &&
                      node$5.NextState(GAMEVIEW_STATE.WAIT_READY);
                  }),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$F);
        cclegacy._RF.pop();
        var CjsLoader = (function () {
            function e() {
              (this._registry = {}), (this._moduleCache = {});
            }
            var t = e.prototype;
            return (
              (t.define = function (e, t, n) {
                this._registry[e] = { factory: t, resolveMap: n };
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
                var n = this._moduleCache[e];
                if (n) return n.exports;
                var i = { id: e, exports: {} };
                return (
                  (this._moduleCache[e] = i),
                  this._tryModuleLoad(i, e),
                  i.exports
                );
              }),
              (t._resolve = function (e, t) {
                return (
                  this._resolveFromInfos(e, t) || this._throwUnresolved(e, t)
                );
              }),
              (t._resolveFromInfos = function (e, t) {
                var n, i;
                return e in cjsInfos
                  ? e
                  : t &&
                    null !=
                      (n =
                        null == (i = cjsInfos[t]) ? void 0 : i.resolveCache[e])
                  ? n
                  : void 0;
              }),
              (t._tryModuleLoad = function (e, t) {
                var n = !0;
                try {
                  this._load(e, t), (n = !1);
                } finally {
                  n && delete this._moduleCache[t];
                }
              }),
              (t._load = function (e, t) {
                var n = this._loadWrapper(t),
                  i = n.factory,
                  o = n.resolveMap,
                  r = this._createRequire(e),
                  a = o
                    ? this._createRequireWithResolveMap(
                        "function" == typeof o ? o() : o,
                        r
                      )
                    : r;
                i(e.exports, a, e);
              }),
              (t._loadWrapper = function (e) {
                return e in this._registry
                  ? this._registry[e]
                  : this._loadHostProvidedModules(e);
              }),
              (t._loadHostProvidedModules = function (e) {
                return {
                  factory: function (t, n, i) {
                    if ("undefined" == typeof require)
                      throw new Error(
                        "Current environment does not provide a require() for requiring '" +
                          e +
                          "'."
                      );
                    try {
                      i.exports = require(e);
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
                return function (n) {
                  return t._require(n, e);
                };
              }),
              (t._createRequireWithResolveMap = function (e, t) {
                return function (n) {
                  var i = e[n];
                  if (i) return t(i);
                  throw new Error("Unresolved specifier " + n);
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
            "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/long/src/long.js";
        loader.define(
          __cjsMetaURL,
          function (e, t, n, i, o) {
            n.exports = a;
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
            function a(e, t, n) {
              (this.low = 0 | e), (this.high = 0 | t), (this.unsigned = !!n);
            }
            function s(e) {
              return !0 === (e && e.__isLong__);
            }
            a.prototype.__isLong__,
              Object.defineProperty(a.prototype, "__isLong__", { value: !0 }),
              (a.isLong = s);
            var l = {},
              c = {};
            function m(e, t) {
              var n, i, o;
              return t
                ? (o = 0 <= (e >>>= 0) && e < 256) && (i = c[e])
                  ? i
                  : ((n = _(e, (0 | e) < 0 ? -1 : 0, !0)), o && (c[e] = n), n)
                : (o = -128 <= (e |= 0) && e < 128) && (i = l[e])
                ? i
                : ((n = _(e, e < 0 ? -1 : 0, !1)), o && (l[e] = n), n);
            }
            function u(e, t) {
              if (isNaN(e)) return t ? v : b;
              if (t) {
                if (e < 0) return v;
                if (e >= y) return P;
              } else {
                if (e <= -S) return D;
                if (e + 1 >= S) return $;
              }
              return e < 0 ? u(-e, t).neg() : _(e % h | 0, (e / h) | 0, t);
            }
            function _(e, t, n) {
              return new a(e, t, n);
            }
            (a.fromInt = m), (a.fromNumber = u), (a.fromBits = _);
            var p = Math.pow;
            function f(e, t, n) {
              if (0 === e.length) throw Error("empty string");
              if (
                "NaN" === e ||
                "Infinity" === e ||
                "+Infinity" === e ||
                "-Infinity" === e
              )
                return b;
              if (
                ("number" == typeof t ? ((n = t), (t = !1)) : (t = !!t),
                (n = n || 10) < 2 || 36 < n)
              )
                throw RangeError("radix");
              var i;
              if ((i = e.indexOf("-")) > 0) throw Error("interior hyphen");
              if (0 === i) return f(e.substring(1), t, n).neg();
              for (var o = u(p(n, 8)), r = b, a = 0; a < e.length; a += 8) {
                var s = Math.min(8, e.length - a),
                  l = parseInt(e.substring(a, a + s), n);
                if (s < 8) {
                  var c = u(p(n, s));
                  r = r.mul(c).add(u(l));
                } else r = (r = r.mul(o)).add(u(l));
              }
              return (r.unsigned = t), r;
            }
            function d(e, t) {
              return "number" == typeof e
                ? u(e, t)
                : "string" == typeof e
                ? f(e, t)
                : _(e.low, e.high, "boolean" == typeof t ? t : e.unsigned);
            }
            (a.fromString = f), (a.fromValue = d);
            var h = 4294967296,
              y = h * h,
              S = y / 2,
              g = m(1 << 24),
              b = m(0);
            a.ZERO = b;
            var v = m(0, !0);
            a.UZERO = v;
            var C = m(1);
            a.ONE = C;
            var w = m(1, !0);
            a.UONE = w;
            var G = m(-1);
            a.NEG_ONE = G;
            var $ = _(-1, 2147483647, !1);
            a.MAX_VALUE = $;
            var P = _(-1, -1, !0);
            a.MAX_UNSIGNED_VALUE = P;
            var D = _(0, -2147483648, !1);
            a.MIN_VALUE = D;
            var A = a.prototype;
            (A.toInt = function () {
              return this.unsigned ? this.low >>> 0 : this.low;
            }),
              (A.toNumber = function () {
                return this.unsigned
                  ? (this.high >>> 0) * h + (this.low >>> 0)
                  : this.high * h + (this.low >>> 0);
              }),
              (A.toString = function (e) {
                if ((e = e || 10) < 2 || 36 < e) throw RangeError("radix");
                if (this.isZero()) return "0";
                if (this.isNegative()) {
                  if (this.eq(D)) {
                    var t = u(e),
                      n = this.div(t),
                      i = n.mul(t).sub(this);
                    return n.toString(e) + i.toInt().toString(e);
                  }
                  return "-" + this.neg().toString(e);
                }
                for (var o = u(p(e, 6), this.unsigned), r = this, a = ""; ; ) {
                  var s = r.div(o),
                    l = (r.sub(s.mul(o)).toInt() >>> 0).toString(e);
                  if ((r = s).isZero()) return l + a;
                  for (; l.length < 6; ) l = "0" + l;
                  a = "" + l + a;
                }
              }),
              (A.getHighBits = function () {
                return this.high;
              }),
              (A.getHighBitsUnsigned = function () {
                return this.high >>> 0;
              }),
              (A.getLowBits = function () {
                return this.low;
              }),
              (A.getLowBitsUnsigned = function () {
                return this.low >>> 0;
              }),
              (A.getNumBitsAbs = function () {
                if (this.isNegative())
                  return this.eq(D) ? 64 : this.neg().getNumBitsAbs();
                for (
                  var e = 0 != this.high ? this.high : this.low, t = 31;
                  t > 0 && 0 == (e & (1 << t));
                  t--
                );
                return 0 != this.high ? t + 33 : t + 1;
              }),
              (A.isZero = function () {
                return 0 === this.high && 0 === this.low;
              }),
              (A.eqz = A.isZero),
              (A.isNegative = function () {
                return !this.unsigned && this.high < 0;
              }),
              (A.isPositive = function () {
                return this.unsigned || this.high >= 0;
              }),
              (A.isOdd = function () {
                return 1 == (1 & this.low);
              }),
              (A.isEven = function () {
                return 0 == (1 & this.low);
              }),
              (A.equals = function (e) {
                return (
                  s(e) || (e = d(e)),
                  (this.unsigned === e.unsigned ||
                    this.high >>> 31 != 1 ||
                    e.high >>> 31 != 1) &&
                    this.high === e.high &&
                    this.low === e.low
                );
              }),
              (A.eq = A.equals),
              (A.notEquals = function (e) {
                return !this.eq(e);
              }),
              (A.neq = A.notEquals),
              (A.ne = A.notEquals),
              (A.lessThan = function (e) {
                return this.comp(e) < 0;
              }),
              (A.lt = A.lessThan),
              (A.lessThanOrEqual = function (e) {
                return this.comp(e) <= 0;
              }),
              (A.lte = A.lessThanOrEqual),
              (A.le = A.lessThanOrEqual),
              (A.greaterThan = function (e) {
                return this.comp(e) > 0;
              }),
              (A.gt = A.greaterThan),
              (A.greaterThanOrEqual = function (e) {
                return this.comp(e) >= 0;
              }),
              (A.gte = A.greaterThanOrEqual),
              (A.ge = A.greaterThanOrEqual),
              (A.compare = function (e) {
                if ((s(e) || (e = d(e)), this.eq(e))) return 0;
                var t = this.isNegative(),
                  n = e.isNegative();
                return t && !n
                  ? -1
                  : !t && n
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
              (A.comp = A.compare),
              (A.negate = function () {
                return !this.unsigned && this.eq(D) ? D : this.not().add(C);
              }),
              (A.neg = A.negate),
              (A.add = function (e) {
                s(e) || (e = d(e));
                var t = this.high >>> 16,
                  n = 65535 & this.high,
                  i = this.low >>> 16,
                  o = 65535 & this.low,
                  r = e.high >>> 16,
                  a = 65535 & e.high,
                  l = e.low >>> 16,
                  c = 0,
                  m = 0,
                  u = 0,
                  p = 0;
                return (
                  (u += (p += o + (65535 & e.low)) >>> 16),
                  (m += (u += i + l) >>> 16),
                  (c += (m += n + a) >>> 16),
                  (c += t + r),
                  _(
                    ((u &= 65535) << 16) | (p &= 65535),
                    ((c &= 65535) << 16) | (m &= 65535),
                    this.unsigned
                  )
                );
              }),
              (A.subtract = function (e) {
                return s(e) || (e = d(e)), this.add(e.neg());
              }),
              (A.sub = A.subtract),
              (A.multiply = function (e) {
                if (this.isZero()) return b;
                if ((s(e) || (e = d(e)), r))
                  return _(
                    r.mul(this.low, this.high, e.low, e.high),
                    r.get_high(),
                    this.unsigned
                  );
                if (e.isZero()) return b;
                if (this.eq(D)) return e.isOdd() ? D : b;
                if (e.eq(D)) return this.isOdd() ? D : b;
                if (this.isNegative())
                  return e.isNegative()
                    ? this.neg().mul(e.neg())
                    : this.neg().mul(e).neg();
                if (e.isNegative()) return this.mul(e.neg()).neg();
                if (this.lt(g) && e.lt(g))
                  return u(this.toNumber() * e.toNumber(), this.unsigned);
                var t = this.high >>> 16,
                  n = 65535 & this.high,
                  i = this.low >>> 16,
                  o = 65535 & this.low,
                  a = e.high >>> 16,
                  l = 65535 & e.high,
                  c = e.low >>> 16,
                  m = 65535 & e.low,
                  p = 0,
                  f = 0,
                  h = 0,
                  y = 0;
                return (
                  (h += (y += o * m) >>> 16),
                  (f += (h += i * m) >>> 16),
                  (h &= 65535),
                  (f += (h += o * c) >>> 16),
                  (p += (f += n * m) >>> 16),
                  (f &= 65535),
                  (p += (f += i * c) >>> 16),
                  (f &= 65535),
                  (p += (f += o * l) >>> 16),
                  (p += t * m + n * c + i * l + o * a),
                  _(
                    ((h &= 65535) << 16) | (y &= 65535),
                    ((p &= 65535) << 16) | (f &= 65535),
                    this.unsigned
                  )
                );
              }),
              (A.mul = A.multiply),
              (A.divide = function (e) {
                if ((s(e) || (e = d(e)), e.isZero()))
                  throw Error("division by zero");
                var t, n, i;
                if (r)
                  return this.unsigned ||
                    -2147483648 !== this.high ||
                    -1 !== e.low ||
                    -1 !== e.high
                    ? _(
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
                if (this.isZero()) return this.unsigned ? v : b;
                if (this.unsigned) {
                  if ((e.unsigned || (e = e.toUnsigned()), e.gt(this)))
                    return v;
                  if (e.gt(this.shru(1))) return w;
                  i = v;
                } else {
                  if (this.eq(D))
                    return e.eq(C) || e.eq(G)
                      ? D
                      : e.eq(D)
                      ? C
                      : (t = this.shr(1).div(e).shl(1)).eq(b)
                      ? e.isNegative()
                        ? C
                        : G
                      : ((n = this.sub(e.mul(t))), (i = t.add(n.div(e))));
                  if (e.eq(D)) return this.unsigned ? v : b;
                  if (this.isNegative())
                    return e.isNegative()
                      ? this.neg().div(e.neg())
                      : this.neg().div(e).neg();
                  if (e.isNegative()) return this.div(e.neg()).neg();
                  i = b;
                }
                for (n = this; n.gte(e); ) {
                  t = Math.max(1, Math.floor(n.toNumber() / e.toNumber()));
                  for (
                    var o = Math.ceil(Math.log(t) / Math.LN2),
                      a = o <= 48 ? 1 : p(2, o - 48),
                      l = u(t),
                      c = l.mul(e);
                    c.isNegative() || c.gt(n);

                  )
                    c = (l = u((t -= a), this.unsigned)).mul(e);
                  l.isZero() && (l = C), (i = i.add(l)), (n = n.sub(c));
                }
                return i;
              }),
              (A.div = A.divide),
              (A.modulo = function (e) {
                return (
                  s(e) || (e = d(e)),
                  r
                    ? _(
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
              (A.mod = A.modulo),
              (A.rem = A.modulo),
              (A.not = function () {
                return _(~this.low, ~this.high, this.unsigned);
              }),
              (A.and = function (e) {
                return (
                  s(e) || (e = d(e)),
                  _(this.low & e.low, this.high & e.high, this.unsigned)
                );
              }),
              (A.or = function (e) {
                return (
                  s(e) || (e = d(e)),
                  _(this.low | e.low, this.high | e.high, this.unsigned)
                );
              }),
              (A.xor = function (e) {
                return (
                  s(e) || (e = d(e)),
                  _(this.low ^ e.low, this.high ^ e.high, this.unsigned)
                );
              }),
              (A.shiftLeft = function (e) {
                return (
                  s(e) && (e = e.toInt()),
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
              (A.shl = A.shiftLeft),
              (A.shiftRight = function (e) {
                return (
                  s(e) && (e = e.toInt()),
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
              (A.shr = A.shiftRight),
              (A.shiftRightUnsigned = function (e) {
                if ((s(e) && (e = e.toInt()), 0 === (e &= 63))) return this;
                var t = this.high;
                return e < 32
                  ? _(
                      (this.low >>> e) | (t << (32 - e)),
                      t >>> e,
                      this.unsigned
                    )
                  : _(32 === e ? t : t >>> (e - 32), 0, this.unsigned);
              }),
              (A.shru = A.shiftRightUnsigned),
              (A.shr_u = A.shiftRightUnsigned),
              (A.toSigned = function () {
                return this.unsigned ? _(this.low, this.high, !1) : this;
              }),
              (A.toUnsigned = function () {
                return this.unsigned ? this : _(this.low, this.high, !0);
              }),
              (A.toBytes = function (e) {
                return e ? this.toBytesLE() : this.toBytesBE();
              }),
              (A.toBytesLE = function () {
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
              (A.toBytesBE = function () {
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
              (a.fromBytes = function (e, t, n) {
                return n ? a.fromBytesLE(e, t) : a.fromBytesBE(e, t);
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
              (_cjsExports = n.exports);
          },
          {}
        ),
          __cjsMetaURL ||
            loader.throwInvalidWrapper(
              "./long.js",
              "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/long/src/long.mjs?cjs=&original=.js"
            ),
          loader.require(__cjsMetaURL);
        var __cjsMetaURL$1 =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js";
        loader.define(
          __cjsMetaURL$1,
          function (e, t, n, i, o) {
            (n.exports = function (e, t) {
              var n = new Array(arguments.length - 1),
                i = 0,
                o = 2,
                r = !0;
              for (; o < arguments.length; ) n[i++] = arguments[o++];
              return new Promise(function (o, a) {
                n[i] = function (e) {
                  if (r)
                    if (((r = !1), e)) a(e);
                    else {
                      for (
                        var t = new Array(arguments.length - 1), n = 0;
                        n < t.length;

                      )
                        t[n++] = arguments[n];
                      o.apply(null, t);
                    }
                };
                try {
                  e.apply(t || null, n);
                } catch (e) {
                  r && ((r = !1), a(e));
                }
              });
            }),
              n.exports;
          },
          {}
        );
        var __cjsMetaURL$2 =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js";
        loader.define(
          __cjsMetaURL$2,
          function (e, t, n, i, o) {
            var r = e;
            r.length = function (e) {
              var t = e.length;
              if (!t) return 0;
              for (var n = 0; --t % 4 > 1 && "=" === e.charAt(t); ) ++n;
              return Math.ceil(3 * e.length) / 4 - n;
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
            r.encode = function (e, t, n) {
              for (var i, o = null, r = [], s = 0, l = 0; t < n; ) {
                var c = e[t++];
                switch (l) {
                  case 0:
                    (r[s++] = a[c >> 2]), (i = (3 & c) << 4), (l = 1);
                    break;
                  case 1:
                    (r[s++] = a[i | (c >> 4)]), (i = (15 & c) << 2), (l = 2);
                    break;
                  case 2:
                    (r[s++] = a[i | (c >> 6)]), (r[s++] = a[63 & c]), (l = 0);
                }
                s > 8191 &&
                  ((o || (o = [])).push(String.fromCharCode.apply(String, r)),
                  (s = 0));
              }
              return (
                l && ((r[s++] = a[i]), (r[s++] = 61), 1 === l && (r[s++] = 61)),
                o
                  ? (s &&
                      o.push(String.fromCharCode.apply(String, r.slice(0, s))),
                    o.join(""))
                  : String.fromCharCode.apply(String, r.slice(0, s))
              );
            };
            var c = "invalid encoding";
            (r.decode = function (e, t, n) {
              for (var i, o = n, r = 0, a = 0; a < e.length; ) {
                var l = e.charCodeAt(a++);
                if (61 === l && r > 1) break;
                if (void 0 === (l = s[l])) throw Error(c);
                switch (r) {
                  case 0:
                    (i = l), (r = 1);
                    break;
                  case 1:
                    (t[n++] = (i << 2) | ((48 & l) >> 4)), (i = l), (r = 2);
                    break;
                  case 2:
                    (t[n++] = ((15 & i) << 4) | ((60 & l) >> 2)),
                      (i = l),
                      (r = 3);
                    break;
                  case 3:
                    (t[n++] = ((3 & i) << 6) | l), (r = 0);
                }
              }
              if (1 === r) throw Error(c);
              return n - o;
            }),
              (r.test = function (e) {
                return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(
                  e
                );
              }),
              n.exports;
          },
          {}
        );
        var __cjsMetaURL$3 =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js";
        loader.define(
          __cjsMetaURL$3,
          function (e, t, n, i, o) {
            function r() {
              this._listeners = {};
            }
            (n.exports = r),
              (r.prototype.on = function (e, t, n) {
                return (
                  (this._listeners[e] || (this._listeners[e] = [])).push({
                    fn: t,
                    ctx: n || this,
                  }),
                  this
                );
              }),
              (r.prototype.off = function (e, t) {
                if (void 0 === e) this._listeners = {};
                else if (void 0 === t) this._listeners[e] = [];
                else
                  for (var n = this._listeners[e], i = 0; i < n.length; )
                    n[i].fn === t ? n.splice(i, 1) : ++i;
                return this;
              }),
              (r.prototype.emit = function (e) {
                var t = this._listeners[e];
                if (t) {
                  for (var n = [], i = 1; i < arguments.length; )
                    n.push(arguments[i++]);
                  for (i = 0; i < t.length; ) t[i].fn.apply(t[i++].ctx, n);
                }
                return this;
              }),
              n.exports;
          },
          {}
        );
        var __cjsMetaURL$4 =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/@protobufjs/float/index.js";
        loader.define(
          __cjsMetaURL$4,
          function (e, t, n, i, o) {
            function r(e) {
              return (
                "undefined" != typeof Float32Array
                  ? (function () {
                      var t = new Float32Array([-0]),
                        n = new Uint8Array(t.buffer),
                        i = 128 === n[3];
                      function o(e, i, o) {
                        (t[0] = e),
                          (i[o] = n[0]),
                          (i[o + 1] = n[1]),
                          (i[o + 2] = n[2]),
                          (i[o + 3] = n[3]);
                      }
                      function r(e, i, o) {
                        (t[0] = e),
                          (i[o] = n[3]),
                          (i[o + 1] = n[2]),
                          (i[o + 2] = n[1]),
                          (i[o + 3] = n[0]);
                      }
                      function a(e, i) {
                        return (
                          (n[0] = e[i]),
                          (n[1] = e[i + 1]),
                          (n[2] = e[i + 2]),
                          (n[3] = e[i + 3]),
                          t[0]
                        );
                      }
                      function s(e, i) {
                        return (
                          (n[3] = e[i]),
                          (n[2] = e[i + 1]),
                          (n[1] = e[i + 2]),
                          (n[0] = e[i + 3]),
                          t[0]
                        );
                      }
                      (e.writeFloatLE = i ? o : r),
                        (e.writeFloatBE = i ? r : o),
                        (e.readFloatLE = i ? a : s),
                        (e.readFloatBE = i ? s : a);
                    })()
                  : (function () {
                      function t(e, t, n, i) {
                        var o = t < 0 ? 1 : 0;
                        if ((o && (t = -t), 0 === t))
                          e(1 / t > 0 ? 0 : 2147483648, n, i);
                        else if (isNaN(t)) e(2143289344, n, i);
                        else if (t > 34028234663852886e22)
                          e(((o << 31) | 2139095040) >>> 0, n, i);
                        else if (t < 11754943508222875e-54)
                          e(
                            ((o << 31) |
                              Math.round(t / 1401298464324817e-60)) >>>
                              0,
                            n,
                            i
                          );
                        else {
                          var r = Math.floor(Math.log(t) / Math.LN2);
                          e(
                            ((o << 31) |
                              ((r + 127) << 23) |
                              (8388607 &
                                Math.round(t * Math.pow(2, -r) * 8388608))) >>>
                              0,
                            n,
                            i
                          );
                        }
                      }
                      function n(e, t, n) {
                        var i = e(t, n),
                          o = 2 * (i >> 31) + 1,
                          r = (i >>> 23) & 255,
                          a = 8388607 & i;
                        return 255 === r
                          ? a
                            ? NaN
                            : o * (1 / 0)
                          : 0 === r
                          ? 1401298464324817e-60 * o * a
                          : o * Math.pow(2, r - 150) * (a + 8388608);
                      }
                      (e.writeFloatLE = t.bind(null, a)),
                        (e.writeFloatBE = t.bind(null, s)),
                        (e.readFloatLE = n.bind(null, l)),
                        (e.readFloatBE = n.bind(null, c));
                    })(),
                "undefined" != typeof Float64Array
                  ? (function () {
                      var t = new Float64Array([-0]),
                        n = new Uint8Array(t.buffer),
                        i = 128 === n[7];
                      function o(e, i, o) {
                        (t[0] = e),
                          (i[o] = n[0]),
                          (i[o + 1] = n[1]),
                          (i[o + 2] = n[2]),
                          (i[o + 3] = n[3]),
                          (i[o + 4] = n[4]),
                          (i[o + 5] = n[5]),
                          (i[o + 6] = n[6]),
                          (i[o + 7] = n[7]);
                      }
                      function r(e, i, o) {
                        (t[0] = e),
                          (i[o] = n[7]),
                          (i[o + 1] = n[6]),
                          (i[o + 2] = n[5]),
                          (i[o + 3] = n[4]),
                          (i[o + 4] = n[3]),
                          (i[o + 5] = n[2]),
                          (i[o + 6] = n[1]),
                          (i[o + 7] = n[0]);
                      }
                      function a(e, i) {
                        return (
                          (n[0] = e[i]),
                          (n[1] = e[i + 1]),
                          (n[2] = e[i + 2]),
                          (n[3] = e[i + 3]),
                          (n[4] = e[i + 4]),
                          (n[5] = e[i + 5]),
                          (n[6] = e[i + 6]),
                          (n[7] = e[i + 7]),
                          t[0]
                        );
                      }
                      function s(e, i) {
                        return (
                          (n[7] = e[i]),
                          (n[6] = e[i + 1]),
                          (n[5] = e[i + 2]),
                          (n[4] = e[i + 3]),
                          (n[3] = e[i + 4]),
                          (n[2] = e[i + 5]),
                          (n[1] = e[i + 6]),
                          (n[0] = e[i + 7]),
                          t[0]
                        );
                      }
                      (e.writeDoubleLE = i ? o : r),
                        (e.writeDoubleBE = i ? r : o),
                        (e.readDoubleLE = i ? a : s),
                        (e.readDoubleBE = i ? s : a);
                    })()
                  : (function () {
                      function t(e, t, n, i, o, r) {
                        var a = i < 0 ? 1 : 0;
                        if ((a && (i = -i), 0 === i))
                          e(0, o, r + t),
                            e(1 / i > 0 ? 0 : 2147483648, o, r + n);
                        else if (isNaN(i))
                          e(0, o, r + t), e(2146959360, o, r + n);
                        else if (i > 17976931348623157e292)
                          e(0, o, r + t),
                            e(((a << 31) | 2146435072) >>> 0, o, r + n);
                        else {
                          var s;
                          if (i < 22250738585072014e-324)
                            e((s = i / 5e-324) >>> 0, o, r + t),
                              e(((a << 31) | (s / 4294967296)) >>> 0, o, r + n);
                          else {
                            var l = Math.floor(Math.log(i) / Math.LN2);
                            1024 === l && (l = 1023),
                              e(
                                (4503599627370496 *
                                  (s = i * Math.pow(2, -l))) >>>
                                  0,
                                o,
                                r + t
                              ),
                              e(
                                ((a << 31) |
                                  ((l + 1023) << 20) |
                                  ((1048576 * s) & 1048575)) >>>
                                  0,
                                o,
                                r + n
                              );
                          }
                        }
                      }
                      function n(e, t, n, i, o) {
                        var r = e(i, o + t),
                          a = e(i, o + n),
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
                        (e.readDoubleLE = n.bind(null, l, 0, 4)),
                        (e.readDoubleBE = n.bind(null, c, 4, 0));
                    })(),
                e
              );
            }
            function a(e, t, n) {
              (t[n] = 255 & e),
                (t[n + 1] = (e >>> 8) & 255),
                (t[n + 2] = (e >>> 16) & 255),
                (t[n + 3] = e >>> 24);
            }
            function s(e, t, n) {
              (t[n] = e >>> 24),
                (t[n + 1] = (e >>> 16) & 255),
                (t[n + 2] = (e >>> 8) & 255),
                (t[n + 3] = 255 & e);
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
            (n.exports = r(r)),
              n.exports,
              n.exports.writeFloatLE,
              n.exports.writeFloatBE,
              n.exports.readFloatLE,
              n.exports.readFloatBE,
              n.exports.writeDoubleLE,
              n.exports.writeDoubleBE,
              n.exports.readDoubleLE,
              n.exports.readDoubleBE;
          },
          {}
        );
        var __cjsMetaURL$5 =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js";
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
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js";
        loader.define(
          __cjsMetaURL$6,
          function (e, t, n, i, o) {
            var r = e;
            (r.length = function (e) {
              for (var t = 0, n = 0, i = 0; i < e.length; ++i)
                (n = e.charCodeAt(i)) < 128
                  ? (t += 1)
                  : n < 2048
                  ? (t += 2)
                  : 55296 == (64512 & n) &&
                    56320 == (64512 & e.charCodeAt(i + 1))
                  ? (++i, (t += 4))
                  : (t += 3);
              return t;
            }),
              (r.read = function (e, t, n) {
                if (n - t < 1) return "";
                for (var i, o = null, r = [], a = 0; t < n; )
                  (i = e[t++]) < 128
                    ? (r[a++] = i)
                    : i > 191 && i < 224
                    ? (r[a++] = ((31 & i) << 6) | (63 & e[t++]))
                    : i > 239 && i < 365
                    ? ((i =
                        (((7 & i) << 18) |
                          ((63 & e[t++]) << 12) |
                          ((63 & e[t++]) << 6) |
                          (63 & e[t++])) -
                        65536),
                      (r[a++] = 55296 + (i >> 10)),
                      (r[a++] = 56320 + (1023 & i)))
                    : (r[a++] =
                        ((15 & i) << 12) |
                        ((63 & e[t++]) << 6) |
                        (63 & e[t++])),
                    a > 8191 &&
                      ((o || (o = [])).push(
                        String.fromCharCode.apply(String, r)
                      ),
                      (a = 0));
                return o
                  ? (a &&
                      o.push(String.fromCharCode.apply(String, r.slice(0, a))),
                    o.join(""))
                  : String.fromCharCode.apply(String, r.slice(0, a));
              }),
              (r.write = function (e, t, n) {
                for (var i, o, r = n, a = 0; a < e.length; ++a)
                  (i = e.charCodeAt(a)) < 128
                    ? (t[n++] = i)
                    : i < 2048
                    ? ((t[n++] = (i >> 6) | 192), (t[n++] = (63 & i) | 128))
                    : 55296 == (64512 & i) &&
                      56320 == (64512 & (o = e.charCodeAt(a + 1)))
                    ? ((i = 65536 + ((1023 & i) << 10) + (1023 & o)),
                      ++a,
                      (t[n++] = (i >> 18) | 240),
                      (t[n++] = ((i >> 12) & 63) | 128),
                      (t[n++] = ((i >> 6) & 63) | 128),
                      (t[n++] = (63 & i) | 128))
                    : ((t[n++] = (i >> 12) | 224),
                      (t[n++] = ((i >> 6) & 63) | 128),
                      (t[n++] = (63 & i) | 128));
                return n - r;
              }),
              n.exports;
          },
          {}
        );
        var __cjsMetaURL$7 =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js";
        loader.define(
          __cjsMetaURL$7,
          function (e, t, n, i, o) {
            (n.exports = function (e, t, n) {
              var i = n || 8192,
                o = i >>> 1,
                r = null,
                a = i;
              return function (n) {
                if (n < 1 || n > o) return e(n);
                a + n > i && ((r = e(i)), (a = 0));
                var s = t.call(r, a, (a += n));
                return 7 & a && (a = 1 + (7 | a)), s;
              };
            }),
              n.exports;
          },
          {}
        );
        var __cjsMetaURL$8 =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js";
        loader.define(
          __cjsMetaURL$8,
          function (e, t, n, i, o) {
            n.exports = a;
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
              var n = e >>> 0,
                i = ((e - n) / 4294967296) >>> 0;
              return (
                t &&
                  ((i = ~i >>> 0),
                  (n = ~n >>> 0),
                  ++n > 4294967295 && ((n = 0), ++i > 4294967295 && (i = 0))),
                new a(n, i)
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
                    n = ~this.hi >>> 0;
                  return t || (n = (n + 1) >>> 0), -(t + 4294967296 * n);
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
                  n = this.hi >>> 24;
                return 0 === n
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
                  : n < 128
                  ? 9
                  : 10;
              }),
              n.exports;
          },
          function () {
            return { "../util/minimal": __cjsMetaURL$9 };
          }
        );
        var __cjsMetaURL$9 =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js";
        loader.define(
          __cjsMetaURL$9,
          function (e, t, n, i, o) {
            var r = e;
            function a(e, t, n) {
              for (var i = Object.keys(t), o = 0; o < i.length; ++o)
                (void 0 !== e[i[o]] && n) || (e[i[o]] = t[i[o]]);
              return e;
            }
            function s(e) {
              function t(e, n) {
                if (!(this instanceof t)) return new t(e, n);
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
                  n && a(this, n);
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
                  var n = e[t];
                  return (
                    !(null == n || !e.hasOwnProperty(t)) &&
                    ("object" != typeof n ||
                      (Array.isArray(n) ? n.length : Object.keys(n).length) > 0)
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
                var n = r.LongBits.fromHash(e);
                return r.Long
                  ? r.Long.fromBits(n.lo, n.hi, t)
                  : n.toNumber(Boolean(t));
              }),
              (r.merge = a),
              (r.lcFirst = function (e) {
                return e.charAt(0).toLowerCase() + e.substring(1);
              }),
              (r.newError = s),
              (r.ProtocolError = s("ProtocolError")),
              (r.oneOfGetter = function (e) {
                for (var t = {}, n = 0; n < e.length; ++n) t[e[n]] = 1;
                return function () {
                  for (var e = Object.keys(this), n = e.length - 1; n > -1; --n)
                    if (
                      1 === t[e[n]] &&
                      void 0 !== this[e[n]] &&
                      null !== this[e[n]]
                    )
                      return e[n];
                };
              }),
              (r.oneOfSetter = function (e) {
                return function (t) {
                  for (var n = 0; n < e.length; ++n)
                    e[n] !== t && delete this[e[n]];
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
                      function (t, n) {
                        return new e(t, n);
                      }),
                    (r._Buffer_allocUnsafe =
                      e.allocUnsafe ||
                      function (t) {
                        return new e(t);
                      }))
                  : (r._Buffer_from = r._Buffer_allocUnsafe = null);
              }),
              n.exports;
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
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/src/writer.js";
        loader.define(
          __cjsMetaURL$a,
          function (e, t, n, i, o) {
            n.exports = p;
            var r,
              a = t("./util/minimal"),
              s = a.LongBits,
              l = a.base64,
              c = a.utf8;
            function m(e, t, n) {
              (this.fn = e),
                (this.len = t),
                (this.next = void 0),
                (this.val = n);
            }
            function u() {}
            function _(e) {
              (this.head = e.head),
                (this.tail = e.tail),
                (this.len = e.len),
                (this.next = e.states);
            }
            function p() {
              (this.len = 0),
                (this.head = new m(u, 0, 0)),
                (this.tail = this.head),
                (this.states = null);
            }
            var f = function () {
              return a.Buffer
                ? function () {
                    return (p.create = function () {
                      return new r();
                    })();
                  }
                : function () {
                    return new p();
                  };
            };
            function d(e, t, n) {
              t[n] = 255 & e;
            }
            function h(e, t) {
              (this.len = e), (this.next = void 0), (this.val = t);
            }
            function y(e, t, n) {
              for (; e.hi; )
                (t[n++] = (127 & e.lo) | 128),
                  (e.lo = ((e.lo >>> 7) | (e.hi << 25)) >>> 0),
                  (e.hi >>>= 7);
              for (; e.lo > 127; )
                (t[n++] = (127 & e.lo) | 128), (e.lo = e.lo >>> 7);
              t[n++] = e.lo;
            }
            function S(e, t, n) {
              (t[n] = 255 & e),
                (t[n + 1] = (e >>> 8) & 255),
                (t[n + 2] = (e >>> 16) & 255),
                (t[n + 3] = e >>> 24);
            }
            (p.create = f()),
              (p.alloc = function (e) {
                return new a.Array(e);
              }),
              a.Array !== Array &&
                (p.alloc = a.pool(p.alloc, a.Array.prototype.subarray)),
              (p.prototype._push = function (e, t, n) {
                return (
                  (this.tail = this.tail.next = new m(e, t, n)),
                  (this.len += t),
                  this
                );
              }),
              (h.prototype = Object.create(m.prototype)),
              (h.prototype.fn = function (e, t, n) {
                for (; e > 127; ) (t[n++] = (127 & e) | 128), (e >>>= 7);
                t[n] = e;
              }),
              (p.prototype.uint32 = function (e) {
                return (
                  (this.len += (this.tail = this.tail.next =
                    new h(
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
                  ? this._push(y, 10, s.fromNumber(e))
                  : this.uint32(e);
              }),
              (p.prototype.sint32 = function (e) {
                return this.uint32(((e << 1) ^ (e >> 31)) >>> 0);
              }),
              (p.prototype.uint64 = function (e) {
                var t = s.from(e);
                return this._push(y, t.length(), t);
              }),
              (p.prototype.int64 = p.prototype.uint64),
              (p.prototype.sint64 = function (e) {
                var t = s.from(e).zzEncode();
                return this._push(y, t.length(), t);
              }),
              (p.prototype.bool = function (e) {
                return this._push(d, 1, e ? 1 : 0);
              }),
              (p.prototype.fixed32 = function (e) {
                return this._push(S, 4, e >>> 0);
              }),
              (p.prototype.sfixed32 = p.prototype.fixed32),
              (p.prototype.fixed64 = function (e) {
                var t = s.from(e);
                return this._push(S, 4, t.lo)._push(S, 4, t.hi);
              }),
              (p.prototype.sfixed64 = p.prototype.fixed64),
              (p.prototype.float = function (e) {
                return this._push(a.float.writeFloatLE, 4, e);
              }),
              (p.prototype.double = function (e) {
                return this._push(a.float.writeDoubleLE, 8, e);
              });
            var g = a.Array.prototype.set
              ? function (e, t, n) {
                  t.set(e, n);
                }
              : function (e, t, n) {
                  for (var i = 0; i < e.length; ++i) t[n + i] = e[i];
                };
            (p.prototype.bytes = function (e) {
              var t = e.length >>> 0;
              if (!t) return this._push(d, 1, 0);
              if (a.isString(e)) {
                var n = p.alloc((t = l.length(e)));
                l.decode(e, n, 0), (e = n);
              }
              return this.uint32(t)._push(g, t, e);
            }),
              (p.prototype.string = function (e) {
                var t = c.length(e);
                return t
                  ? this.uint32(t)._push(c.write, t, e)
                  : this._push(d, 1, 0);
              }),
              (p.prototype.fork = function () {
                return (
                  (this.states = new _(this)),
                  (this.head = this.tail = new m(u, 0, 0)),
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
                    : ((this.head = this.tail = new m(u, 0, 0)),
                      (this.len = 0)),
                  this
                );
              }),
              (p.prototype.ldelim = function () {
                var e = this.head,
                  t = this.tail,
                  n = this.len;
                return (
                  this.reset().uint32(n),
                  n &&
                    ((this.tail.next = e.next),
                    (this.tail = t),
                    (this.len += n)),
                  this
                );
              }),
              (p.prototype.finish = function () {
                for (
                  var e = this.head.next,
                    t = this.constructor.alloc(this.len),
                    n = 0;
                  e;

                )
                  e.fn(e.val, t, n), (n += e.len), (e = e.next);
                return t;
              }),
              (p._configure = function (e) {
                (r = e), (p.create = f()), r._configure();
              }),
              n.exports;
          },
          function () {
            return { "./util/minimal": __cjsMetaURL$9 };
          }
        );
        var __cjsMetaURL$b =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js";
        loader.define(
          __cjsMetaURL$b,
          function (e, t, n, i, o) {
            n.exports = s;
            var r = t("./writer");
            (s.prototype = Object.create(r.prototype)).constructor = s;
            var a = t("./util/minimal");
            function s() {
              r.call(this);
            }
            function l(e, t, n) {
              e.length < 40
                ? a.utf8.write(e, t, n)
                : t.utf8Write
                ? t.utf8Write(e, n)
                : t.write(e, n);
            }
            (s._configure = function () {
              (s.alloc = a._Buffer_allocUnsafe),
                (s.writeBytesBuffer =
                  a.Buffer &&
                  a.Buffer.prototype instanceof Uint8Array &&
                  "set" === a.Buffer.prototype.set.name
                    ? function (e, t, n) {
                        t.set(e, n);
                      }
                    : function (e, t, n) {
                        if (e.copy) e.copy(t, n, 0, e.length);
                        else for (var i = 0; i < e.length; ) t[n++] = e[i++];
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
              n.exports;
          },
          function () {
            return {
              "./writer": __cjsMetaURL$a,
              "./util/minimal": __cjsMetaURL$9,
            };
          }
        );
        var __cjsMetaURL$c =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/src/reader.js";
        loader.define(
          __cjsMetaURL$c,
          function (e, t, n, i, o) {
            n.exports = m;
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
            function m(e) {
              (this.buf = e), (this.pos = 0), (this.len = e.length);
            }
            var u,
              _ =
                "undefined" != typeof Uint8Array
                  ? function (e) {
                      if (e instanceof Uint8Array || Array.isArray(e))
                        return new m(e);
                      throw Error("illegal buffer");
                    }
                  : function (e) {
                      if (Array.isArray(e)) return new m(e);
                      throw Error("illegal buffer");
                    },
              p = function () {
                return a.Buffer
                  ? function (e) {
                      return (m.create = function (e) {
                        return a.Buffer.isBuffer(e) ? new r(e) : _(e);
                      })(e);
                    }
                  : _;
              };
            function f() {
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
            function d(e, t) {
              return (
                (e[t - 4] |
                  (e[t - 3] << 8) |
                  (e[t - 2] << 16) |
                  (e[t - 1] << 24)) >>>
                0
              );
            }
            function h() {
              if (this.pos + 8 > this.len) throw c(this, 8);
              return new s(
                d(this.buf, (this.pos += 4)),
                d(this.buf, (this.pos += 4))
              );
            }
            (m.create = p()),
              (m.prototype._slice =
                a.Array.prototype.subarray || a.Array.prototype.slice),
              (m.prototype.uint32 =
                ((u = 4294967295),
                function () {
                  if (
                    ((u = (127 & this.buf[this.pos]) >>> 0),
                    this.buf[this.pos++] < 128)
                  )
                    return u;
                  if (
                    ((u = (u | ((127 & this.buf[this.pos]) << 7)) >>> 0),
                    this.buf[this.pos++] < 128)
                  )
                    return u;
                  if (
                    ((u = (u | ((127 & this.buf[this.pos]) << 14)) >>> 0),
                    this.buf[this.pos++] < 128)
                  )
                    return u;
                  if (
                    ((u = (u | ((127 & this.buf[this.pos]) << 21)) >>> 0),
                    this.buf[this.pos++] < 128)
                  )
                    return u;
                  if (
                    ((u = (u | ((15 & this.buf[this.pos]) << 28)) >>> 0),
                    this.buf[this.pos++] < 128)
                  )
                    return u;
                  if ((this.pos += 5) > this.len)
                    throw ((this.pos = this.len), c(this, 10));
                  return u;
                })),
              (m.prototype.int32 = function () {
                return 0 | this.uint32();
              }),
              (m.prototype.sint32 = function () {
                var e = this.uint32();
                return ((e >>> 1) ^ -(1 & e)) | 0;
              }),
              (m.prototype.bool = function () {
                return 0 !== this.uint32();
              }),
              (m.prototype.fixed32 = function () {
                if (this.pos + 4 > this.len) throw c(this, 4);
                return d(this.buf, (this.pos += 4));
              }),
              (m.prototype.sfixed32 = function () {
                if (this.pos + 4 > this.len) throw c(this, 4);
                return 0 | d(this.buf, (this.pos += 4));
              }),
              (m.prototype.float = function () {
                if (this.pos + 4 > this.len) throw c(this, 4);
                var e = a.float.readFloatLE(this.buf, this.pos);
                return (this.pos += 4), e;
              }),
              (m.prototype.double = function () {
                if (this.pos + 8 > this.len) throw c(this, 4);
                var e = a.float.readDoubleLE(this.buf, this.pos);
                return (this.pos += 8), e;
              }),
              (m.prototype.bytes = function () {
                var e = this.uint32(),
                  t = this.pos,
                  n = this.pos + e;
                if (n > this.len) throw c(this, e);
                return (
                  (this.pos += e),
                  Array.isArray(this.buf)
                    ? this.buf.slice(t, n)
                    : t === n
                    ? new this.buf.constructor(0)
                    : this._slice.call(this.buf, t, n)
                );
              }),
              (m.prototype.string = function () {
                var e = this.bytes();
                return l.read(e, 0, e.length);
              }),
              (m.prototype.skip = function (e) {
                if ("number" == typeof e) {
                  if (this.pos + e > this.len) throw c(this, e);
                  this.pos += e;
                } else
                  do {
                    if (this.pos >= this.len) throw c(this);
                  } while (128 & this.buf[this.pos++]);
                return this;
              }),
              (m.prototype.skipType = function (e) {
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
              (m._configure = function (e) {
                (r = e), (m.create = p()), r._configure();
                var t = a.Long ? "toLong" : "toNumber";
                a.merge(m.prototype, {
                  int64: function () {
                    return f.call(this)[t](!1);
                  },
                  uint64: function () {
                    return f.call(this)[t](!0);
                  },
                  sint64: function () {
                    return f.call(this).zzDecode()[t](!1);
                  },
                  fixed64: function () {
                    return h.call(this)[t](!0);
                  },
                  sfixed64: function () {
                    return h.call(this)[t](!1);
                  },
                });
              }),
              n.exports;
          },
          function () {
            return { "./util/minimal": __cjsMetaURL$9 };
          }
        );
        var __cjsMetaURL$d =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js";
        loader.define(
          __cjsMetaURL$d,
          function (e, t, n, i, o) {
            n.exports = s;
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
              n.exports;
          },
          function () {
            return {
              "./reader": __cjsMetaURL$c,
              "./util/minimal": __cjsMetaURL$9,
            };
          }
        );
        var __cjsMetaURL$e =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js";
        loader.define(
          __cjsMetaURL$e,
          function (e, t, n, i, o) {
            n.exports = a;
            var r = t("../util/minimal");
            function a(e, t, n) {
              if ("function" != typeof e)
                throw TypeError("rpcImpl must be a function");
              r.EventEmitter.call(this),
                (this.rpcImpl = e),
                (this.requestDelimited = Boolean(t)),
                (this.responseDelimited = Boolean(n));
            }
            ((a.prototype = Object.create(
              r.EventEmitter.prototype
            )).constructor = a),
              (a.prototype.rpcCall = function e(t, n, i, o, a) {
                if (!o) throw TypeError("request must be specified");
                var s = this;
                if (!a) return r.asPromise(e, s, t, n, i, o);
                if (s.rpcImpl)
                  try {
                    return s.rpcImpl(
                      t,
                      n[s.requestDelimited ? "encodeDelimited" : "encode"](
                        o
                      ).finish(),
                      function (e, n) {
                        if (e) return s.emit("error", e, t), a(e);
                        if (null !== n) {
                          if (!(n instanceof i))
                            try {
                              n =
                                i[
                                  s.responseDelimited
                                    ? "decodeDelimited"
                                    : "decode"
                                ](n);
                            } catch (e) {
                              return s.emit("error", e, t), a(e);
                            }
                          return s.emit("data", n, t), a(null, n);
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
              n.exports;
          },
          function () {
            return { "../util/minimal": __cjsMetaURL$9 };
          }
        );
        var __cjsMetaURL$f =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js";
        loader.define(
          __cjsMetaURL$f,
          function (e, t, n, i, o) {
            (e.Service = t("./rpc/service")), n.exports;
          },
          function () {
            return { "./rpc/service": __cjsMetaURL$e };
          }
        );
        var __cjsMetaURL$g =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/src/roots.js";
        loader.define(
          __cjsMetaURL$g,
          function (e, t, n, i, o) {
            (n.exports = {}), n.exports;
          },
          {}
        );
        var __cjsMetaURL$h =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js";
        loader.define(
          __cjsMetaURL$h,
          function (e, t, n, i, o) {
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
              n.exports;
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
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js";
        loader.define(
          __cjsMetaURL$i,
          function (e, t, n, i, o) {
            function r(e, t) {
              "string" == typeof e && ((t = e), (e = void 0));
              var n = [];
              function i(e) {
                if ("string" != typeof e) {
                  var t = o();
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
                  var m = new Array(arguments.length - 1), u = 0;
                  u < m.length;

                )
                  m[u] = arguments[++u];
                if (
                  ((u = 0),
                  (e = e.replace(/%([%dfijs])/g, function (e, t) {
                    var n = m[u++];
                    switch (t) {
                      case "d":
                      case "f":
                        return String(Number(n));
                      case "i":
                        return String(Math.floor(n));
                      case "j":
                        return JSON.stringify(n);
                      case "s":
                        return String(n);
                    }
                    return "%";
                  })),
                  u !== m.length)
                )
                  throw Error("parameter count mismatch");
                return n.push(e), i;
              }
              function o(i) {
                return (
                  "function " +
                  (i || t || "") +
                  "(" +
                  ((e && e.join(",")) || "") +
                  "){\n  " +
                  n.join("\n  ") +
                  "\n}"
                );
              }
              return (i.toString = o), i;
            }
            (n.exports = r), (r.verbose = !1), n.exports;
          },
          {}
        );
        var __cjsMetaURL$j =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js";
        loader.define(
          __cjsMetaURL$j,
          function (e, t, n, i, o) {
            n.exports = s;
            var r = t("@protobufjs/aspromise"),
              a = t("@protobufjs/inquire")("fs");
            function s(e, t, n) {
              return (
                "function" == typeof t ? ((n = t), (t = {})) : t || (t = {}),
                n
                  ? !t.xhr && a && a.readFile
                    ? a.readFile(e, function (i, o) {
                        return i && "undefined" != typeof XMLHttpRequest
                          ? s.xhr(e, t, n)
                          : i
                          ? n(i)
                          : n(null, t.binary ? o : o.toString("utf8"));
                      })
                    : s.xhr(e, t, n)
                  : r(s, this, e, t)
              );
            }
            (s.xhr = function (e, t, n) {
              var i = new XMLHttpRequest();
              (i.onreadystatechange = function () {
                if (4 === i.readyState) {
                  if (0 !== i.status && 200 !== i.status)
                    return n(Error("status " + i.status));
                  if (t.binary) {
                    var e = i.response;
                    if (!e) {
                      e = [];
                      for (var o = 0; o < i.responseText.length; ++o)
                        e.push(255 & i.responseText.charCodeAt(o));
                    }
                    return n(
                      null,
                      "undefined" != typeof Uint8Array ? new Uint8Array(e) : e
                    );
                  }
                  return n(null, i.responseText);
                }
              }),
                t.binary &&
                  ("overrideMimeType" in i &&
                    i.overrideMimeType("text/plain; charset=x-user-defined"),
                  (i.responseType = "arraybuffer")),
                i.open("GET", e),
                i.send();
            }),
              n.exports;
          },
          function () {
            return {
              "@protobufjs/aspromise": __cjsMetaURL$1,
              "@protobufjs/inquire": __cjsMetaURL$5,
            };
          }
        );
        var __cjsMetaURL$k =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/@protobufjs/path/index.js";
        loader.define(
          __cjsMetaURL$k,
          function (e, t, n, i, o) {
            var r = e,
              a = (r.isAbsolute = function (e) {
                return /^(?:\/|\w+:)/.test(e);
              }),
              s = (r.normalize = function (e) {
                var t = (e = e
                    .replace(/\\/g, "/")
                    .replace(/\/{2,}/g, "/")).split("/"),
                  n = a(e),
                  i = "";
                n && (i = t.shift() + "/");
                for (var o = 0; o < t.length; )
                  ".." === t[o]
                    ? o > 0 && ".." !== t[o - 1]
                      ? t.splice(--o, 2)
                      : n
                      ? t.splice(o, 1)
                      : ++o
                    : "." === t[o]
                    ? t.splice(o, 1)
                    : ++o;
                return i + t.join("/");
              });
            (r.resolve = function (e, t, n) {
              return (
                n || (t = s(t)),
                a(t)
                  ? t
                  : (n || (e = s(e)),
                    (e = e.replace(/(?:\/|^)[^/]+$/, "")).length
                      ? s(e + "/" + t)
                      : t)
              );
            }),
              n.exports;
          },
          {}
        );
        var __cjsMetaURL$l =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/src/types.js";
        loader.define(
          __cjsMetaURL$l,
          function (e, t, n, i, o) {
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
              var n = 0,
                i = {};
              for (t |= 0; n < e.length; ) i[s[n + t]] = e[n++];
              return i;
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
              n.exports;
          },
          function () {
            return { "./util": __cjsMetaURL$z };
          }
        );
        var __cjsMetaURL$m =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/src/field.js";
        loader.define(
          __cjsMetaURL$m,
          function (e, t, n, i, o) {
            n.exports = u;
            var r = t("./object");
            ((u.prototype = Object.create(r.prototype)).constructor =
              u).className = "Field";
            var a,
              s = t("./enum"),
              l = t("./types"),
              c = t("./util"),
              m = /^required|optional|repeated$/;
            function u(e, t, n, i, o, a, s) {
              if (
                (c.isObject(i)
                  ? ((s = o), (a = i), (i = o = void 0))
                  : c.isObject(o) && ((s = a), (a = o), (o = void 0)),
                r.call(this, e, a),
                !c.isInteger(t) || t < 0)
              )
                throw TypeError("id must be a non-negative integer");
              if (!c.isString(n)) throw TypeError("type must be a string");
              if (void 0 !== i && !m.test((i = i.toString().toLowerCase())))
                throw TypeError("rule must be a string rule");
              if (void 0 !== o && !c.isString(o))
                throw TypeError("extend must be a string");
              "proto3_optional" === i && (i = "optional"),
                (this.rule = i && "optional" !== i ? i : void 0),
                (this.type = n),
                (this.id = t),
                (this.extend = o || void 0),
                (this.required = "required" === i),
                (this.optional = !this.required),
                (this.repeated = "repeated" === i),
                (this.map = !1),
                (this.message = null),
                (this.partOf = null),
                (this.typeDefault = null),
                (this.defaultValue = null),
                (this.long = !!c.Long && void 0 !== l.long[n]),
                (this.bytes = "bytes" === n),
                (this.resolvedType = null),
                (this.extensionField = null),
                (this.declaringField = null),
                (this._packed = null),
                (this.comment = s);
            }
            (u.fromJSON = function (e, t) {
              return new u(
                e,
                t.id,
                t.type,
                t.rule,
                t.extend,
                t.options,
                t.comment
              );
            }),
              Object.defineProperty(u.prototype, "packed", {
                get: function () {
                  return (
                    null === this._packed &&
                      (this._packed = !1 !== this.getOption("packed")),
                    this._packed
                  );
                },
              }),
              (u.prototype.setOption = function (e, t, n) {
                return (
                  "packed" === e && (this._packed = null),
                  r.prototype.setOption.call(this, e, t, n)
                );
              }),
              (u.prototype.toJSON = function (e) {
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
              (u.prototype.resolve = function () {
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
              (u.d = function (e, t, n, i) {
                return (
                  "function" == typeof t
                    ? (t = c.decorateType(t).name)
                    : t && "object" == typeof t && (t = c.decorateEnum(t).name),
                  function (o, r) {
                    c.decorateType(o.constructor).add(
                      new u(r, e, t, n, { default: i })
                    );
                  }
                );
              }),
              (u._configure = function (e) {
                a = e;
              }),
              n.exports;
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
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js";
        loader.define(
          __cjsMetaURL$n,
          function (e, t, n, i, o) {
            n.exports = l;
            var r = t("./object");
            ((l.prototype = Object.create(r.prototype)).constructor =
              l).className = "OneOf";
            var a = t("./field"),
              s = t("./util");
            function l(e, t, n, i) {
              if (
                (Array.isArray(t) || ((n = t), (t = void 0)),
                r.call(this, e, n),
                void 0 !== t && !Array.isArray(t))
              )
                throw TypeError("fieldNames must be an Array");
              (this.oneof = t || []),
                (this.fieldsArray = []),
                (this.comment = i);
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
                  var n = e.get(this.oneof[t]);
                  n &&
                    !n.partOf &&
                    ((n.partOf = this), this.fieldsArray.push(n));
                }
                c(this);
              }),
              (l.prototype.onRemove = function (e) {
                for (var t, n = 0; n < this.fieldsArray.length; ++n)
                  (t = this.fieldsArray[n]).parent && t.parent.remove(t);
                r.prototype.onRemove.call(this, e);
              }),
              (l.d = function () {
                for (
                  var e = new Array(arguments.length), t = 0;
                  t < arguments.length;

                )
                  e[t] = arguments[t++];
                return function (t, n) {
                  s.decorateType(t.constructor).add(new l(n, e)),
                    Object.defineProperty(t, n, {
                      get: s.oneOfGetter(e),
                      set: s.oneOfSetter(e),
                    });
                };
              }),
              n.exports;
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
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js";
        loader.define(
          __cjsMetaURL$o,
          function (e, t, n, i, o) {
            n.exports = p;
            var r = t("./object");
            ((p.prototype = Object.create(r.prototype)).constructor =
              p).className = "Namespace";
            var a,
              s,
              l,
              c = t("./field"),
              m = t("./oneof"),
              u = t("./util");
            function _(e, t) {
              if (e && e.length) {
                for (var n = {}, i = 0; i < e.length; ++i)
                  n[e[i].name] = e[i].toJSON(t);
                return n;
              }
            }
            function p(e, t) {
              r.call(this, e, t),
                (this.nested = void 0),
                (this._nestedArray = null);
            }
            function f(e) {
              return (e._nestedArray = null), e;
            }
            (p.fromJSON = function (e, t) {
              return new p(e, t.options).addJSON(t.nested);
            }),
              (p.arrayToJSON = _),
              (p.isReservedId = function (e, t) {
                if (e)
                  for (var n = 0; n < e.length; ++n)
                    if ("string" != typeof e[n] && e[n][0] <= t && e[n][1] > t)
                      return !0;
                return !1;
              }),
              (p.isReservedName = function (e, t) {
                if (e)
                  for (var n = 0; n < e.length; ++n) if (e[n] === t) return !0;
                return !1;
              }),
              Object.defineProperty(p.prototype, "nestedArray", {
                get: function () {
                  return (
                    this._nestedArray ||
                    (this._nestedArray = u.toArray(this.nested))
                  );
                },
              }),
              (p.prototype.toJSON = function (e) {
                return u.toObject([
                  "options",
                  this.options,
                  "nested",
                  _(this.nestedArray, e),
                ]);
              }),
              (p.prototype.addJSON = function (e) {
                if (e)
                  for (var t, n = Object.keys(e), i = 0; i < n.length; ++i)
                    (t = e[n[i]]),
                      this.add(
                        (void 0 !== t.fields
                          ? a.fromJSON
                          : void 0 !== t.values
                          ? l.fromJSON
                          : void 0 !== t.methods
                          ? s.fromJSON
                          : void 0 !== t.id
                          ? c.fromJSON
                          : p.fromJSON)(n[i], t)
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
                    (e instanceof c && void 0 !== e.extend) ||
                    e instanceof a ||
                    e instanceof l ||
                    e instanceof s ||
                    e instanceof p ||
                    e instanceof m
                  )
                )
                  throw TypeError("object must be a valid nested object");
                if (this.nested) {
                  var t = this.get(e.name);
                  if (t) {
                    if (
                      !(t instanceof p && e instanceof p) ||
                      t instanceof a ||
                      t instanceof s
                    )
                      throw Error("duplicate name '" + e.name + "' in " + this);
                    for (var n = t.nestedArray, i = 0; i < n.length; ++i)
                      e.add(n[i]);
                    this.remove(t),
                      this.nested || (this.nested = {}),
                      e.setOptions(t.options, !0);
                  }
                } else this.nested = {};
                return (this.nested[e.name] = e), e.onAdd(this), f(this);
              }),
              (p.prototype.remove = function (e) {
                if (!(e instanceof r))
                  throw TypeError("object must be a ReflectionObject");
                if (e.parent !== this)
                  throw Error(e + " is not a member of " + this);
                return (
                  delete this.nested[e.name],
                  Object.keys(this.nested).length || (this.nested = void 0),
                  e.onRemove(this),
                  f(this)
                );
              }),
              (p.prototype.define = function (e, t) {
                if (u.isString(e)) e = e.split(".");
                else if (!Array.isArray(e)) throw TypeError("illegal path");
                if (e && e.length && "" === e[0])
                  throw Error("path must be relative");
                for (var n = this; e.length > 0; ) {
                  var i = e.shift();
                  if (n.nested && n.nested[i]) {
                    if (!((n = n.nested[i]) instanceof p))
                      throw Error("path conflicts with non-namespace objects");
                  } else n.add((n = new p(i)));
                }
                return t && n.addJSON(t), n;
              }),
              (p.prototype.resolveAll = function () {
                for (var e = this.nestedArray, t = 0; t < e.length; )
                  e[t] instanceof p ? e[t++].resolveAll() : e[t++].resolve();
                return this.resolve();
              }),
              (p.prototype.lookup = function (e, t, n) {
                if (
                  ("boolean" == typeof t
                    ? ((n = t), (t = void 0))
                    : t && !Array.isArray(t) && (t = [t]),
                  u.isString(e) && e.length)
                ) {
                  if ("." === e) return this.root;
                  e = e.split(".");
                } else if (!e.length) return this;
                if ("" === e[0]) return this.root.lookup(e.slice(1), t);
                var i = this.get(e[0]);
                if (i) {
                  if (1 === e.length) {
                    if (!t || t.indexOf(i.constructor) > -1) return i;
                  } else if (
                    i instanceof p &&
                    (i = i.lookup(e.slice(1), t, !0))
                  )
                    return i;
                } else
                  for (var o = 0; o < this.nestedArray.length; ++o)
                    if (
                      this._nestedArray[o] instanceof p &&
                      (i = this._nestedArray[o].lookup(e, t, !0))
                    )
                      return i;
                return null === this.parent || n
                  ? null
                  : this.parent.lookup(e, t);
              }),
              (p.prototype.lookupType = function (e) {
                var t = this.lookup(e, [a]);
                if (!t) throw Error("no such type: " + e);
                return t;
              }),
              (p.prototype.lookupEnum = function (e) {
                var t = this.lookup(e, [l]);
                if (!t) throw Error("no such Enum '" + e + "' in " + this);
                return t;
              }),
              (p.prototype.lookupTypeOrEnum = function (e) {
                var t = this.lookup(e, [a, l]);
                if (!t)
                  throw Error("no such Type or Enum '" + e + "' in " + this);
                return t;
              }),
              (p.prototype.lookupService = function (e) {
                var t = this.lookup(e, [s]);
                if (!t) throw Error("no such Service '" + e + "' in " + this);
                return t;
              }),
              (p._configure = function (e, t, n) {
                (a = e), (s = t), (l = n);
              }),
              n.exports;
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
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js";
        loader.define(
          __cjsMetaURL$p,
          function (e, t, n, i, o) {
            n.exports = l;
            var r = t("./field");
            ((l.prototype = Object.create(r.prototype)).constructor =
              l).className = "MapField";
            var a = t("./types"),
              s = t("./util");
            function l(e, t, n, i, o, a) {
              if ((r.call(this, e, t, i, void 0, void 0, o, a), !s.isString(n)))
                throw TypeError("keyType must be a string");
              (this.keyType = n),
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
              (l.d = function (e, t, n) {
                return (
                  "function" == typeof n
                    ? (n = s.decorateType(n).name)
                    : n && "object" == typeof n && (n = s.decorateEnum(n).name),
                  function (i, o) {
                    s.decorateType(i.constructor).add(new l(o, e, t, n));
                  }
                );
              }),
              n.exports;
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
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/src/method.js";
        loader.define(
          __cjsMetaURL$q,
          function (e, t, n, i, o) {
            n.exports = s;
            var r = t("./object");
            ((s.prototype = Object.create(r.prototype)).constructor =
              s).className = "Method";
            var a = t("./util");
            function s(e, t, n, i, o, s, l, c, m) {
              if (
                (a.isObject(o)
                  ? ((l = o), (o = s = void 0))
                  : a.isObject(s) && ((l = s), (s = void 0)),
                void 0 !== t && !a.isString(t))
              )
                throw TypeError("type must be a string");
              if (!a.isString(n))
                throw TypeError("requestType must be a string");
              if (!a.isString(i))
                throw TypeError("responseType must be a string");
              r.call(this, e, l),
                (this.type = t || "rpc"),
                (this.requestType = n),
                (this.requestStream = !!o || void 0),
                (this.responseType = i),
                (this.responseStream = !!s || void 0),
                (this.resolvedRequestType = null),
                (this.resolvedResponseType = null),
                (this.comment = c),
                (this.parsedOptions = m);
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
              n.exports;
          },
          function () {
            return { "./object": __cjsMetaURL$A, "./util": __cjsMetaURL$z };
          }
        );
        var __cjsMetaURL$r =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/src/service.js";
        loader.define(
          __cjsMetaURL$r,
          function (e, t, n, i, o) {
            n.exports = c;
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
            function m(e) {
              return (e._methodsArray = null), e;
            }
            (c.fromJSON = function (e, t) {
              var n = new c(e, t.options);
              if (t.methods)
                for (var i = Object.keys(t.methods), o = 0; o < i.length; ++o)
                  n.add(a.fromJSON(i[o], t.methods[i[o]]));
              return (
                t.nested && n.addJSON(t.nested), (n.comment = t.comment), n
              );
            }),
              (c.prototype.toJSON = function (e) {
                var t = r.prototype.toJSON.call(this, e),
                  n = !!e && Boolean(e.keepComments);
                return s.toObject([
                  "options",
                  (t && t.options) || void 0,
                  "methods",
                  r.arrayToJSON(this.methodsArray, e) || {},
                  "nested",
                  (t && t.nested) || void 0,
                  "comment",
                  n ? this.comment : void 0,
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
                  ? ((this.methods[e.name] = e), (e.parent = this), m(this))
                  : r.prototype.add.call(this, e);
              }),
              (c.prototype.remove = function (e) {
                if (e instanceof a) {
                  if (this.methods[e.name] !== e)
                    throw Error(e + " is not a member of " + this);
                  return (
                    delete this.methods[e.name], (e.parent = null), m(this)
                  );
                }
                return r.prototype.remove.call(this, e);
              }),
              (c.prototype.create = function (e, t, n) {
                for (
                  var i, o = new l.Service(e, t, n), r = 0;
                  r < this.methodsArray.length;
                  ++r
                ) {
                  var a = s
                    .lcFirst((i = this._methodsArray[r]).resolve().name)
                    .replace(/[^$\w_]/g, "");
                  o[a] = s.codegen(
                    ["r", "c"],
                    s.isReserved(a) ? a + "_" : a
                  )("return this.rpcCall(m,q,s,r,c)")({
                    m: i,
                    q: i.resolvedRequestType.ctor,
                    s: i.resolvedResponseType.ctor,
                  });
                }
                return o;
              }),
              n.exports;
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
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/src/message.js";
        loader.define(
          __cjsMetaURL$s,
          function (e, t, n, i, o) {
            n.exports = a;
            var r = t("./util/minimal");
            function a(e) {
              if (e)
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  this[t[n]] = e[t[n]];
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
              n.exports;
          },
          function () {
            return { "./util/minimal": __cjsMetaURL$9 };
          }
        );
        var __cjsMetaURL$t =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js";
        loader.define(
          __cjsMetaURL$t,
          function (e, t, n, i, o) {
            n.exports = function (e) {
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
              for (var n = 0; n < e.fieldsArray.length; ++n) {
                var i = e._fieldsArray[n].resolve(),
                  o = i.resolvedType instanceof r ? "int32" : i.type,
                  c = "m" + s.safeProp(i.name);
                t("case %i:", i.id),
                  i.map
                    ? (t("if(%s===util.emptyObject)", c)("%s={}", c)(
                        "var c2 = r.uint32()+r.pos"
                      ),
                      void 0 !== a.defaults[i.keyType]
                        ? t("k=%j", a.defaults[i.keyType])
                        : t("k=null"),
                      void 0 !== a.defaults[o]
                        ? t("value=%j", a.defaults[o])
                        : t("value=null"),
                      t("while(r.pos<c2){")("var tag2=r.uint32()")(
                        "switch(tag2>>>3){"
                      )(
                        "case 1: k=r.%s(); break",
                        i.keyType
                      )("case 2:"),
                      void 0 === a.basic[o]
                        ? t("value=types[%i].decode(r,r.uint32())", n)
                        : t("value=r.%s()", o),
                      t("break")("default:")("r.skipType(tag2&7)")("break")(
                        "}"
                      )("}"),
                      void 0 !== a.long[i.keyType]
                        ? t(
                            '%s[typeof k==="object"?util.longToHash(k):k]=value',
                            c
                          )
                        : t("%s[k]=value", c))
                    : i.repeated
                    ? (t("if(!(%s&&%s.length))", c, c)("%s=[]", c),
                      void 0 !== a.packed[o] &&
                        t("if((t&7)===2){")("var c2=r.uint32()+r.pos")(
                          "while(r.pos<c2)"
                        )(
                          "%s.push(r.%s())",
                          c,
                          o
                        )("}else"),
                      void 0 === a.basic[o]
                        ? t(
                            i.resolvedType.group
                              ? "%s.push(types[%i].decode(r))"
                              : "%s.push(types[%i].decode(r,r.uint32()))",
                            c,
                            n
                          )
                        : t("%s.push(r.%s())", c, o))
                    : void 0 === a.basic[o]
                    ? t(
                        i.resolvedType.group
                          ? "%s=types[%i].decode(r)"
                          : "%s=types[%i].decode(r,r.uint32())",
                        c,
                        n
                      )
                    : t("%s=r.%s()", c, o),
                  t("break");
              }
              for (
                t("default:")("r.skipType(t&7)")("break")("}")("}"), n = 0;
                n < e._fieldsArray.length;
                ++n
              ) {
                var m = e._fieldsArray[n];
                m.required &&
                  t("if(!m.hasOwnProperty(%j))", m.name)(
                    "throw util.ProtocolError(%j,{instance:m})",
                    l(m)
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
            n.exports;
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
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js";
        loader.define(
          __cjsMetaURL$u,
          function (e, t, n, i, o) {
            n.exports = function (e) {
              var t = a.codegen(
                  ["m"],
                  e.name + "$verify"
                )('if(typeof m!=="object"||m===null)')(
                  "return%j",
                  "object expected"
                ),
                n = e.oneofsArray,
                i = {};
              n.length && t("var p={}");
              for (var o = 0; o < e.fieldsArray.length; ++o) {
                var r = e._fieldsArray[o].resolve(),
                  m = "m" + a.safeProp(r.name);
                if (
                  (r.optional &&
                    t("if(%s!=null&&m.hasOwnProperty(%j)){", m, r.name),
                  r.map)
                )
                  t("if(!util.isObject(%s))", m)("return%j", s(r, "object"))(
                    "var k=Object.keys(%s)",
                    m
                  )("for(var i=0;i<k.length;++i){"),
                    c(t, r, "k[i]"),
                    l(t, r, o, m + "[k[i]]")("}");
                else if (r.repeated)
                  t("if(!Array.isArray(%s))", m)("return%j", s(r, "array"))(
                    "for(var i=0;i<%s.length;++i){",
                    m
                  ),
                    l(t, r, o, m + "[i]")("}");
                else {
                  if (r.partOf) {
                    var u = a.safeProp(r.partOf.name);
                    1 === i[r.partOf.name] &&
                      t("if(p%s===1)", u)(
                        "return%j",
                        r.partOf.name + ": multiple values"
                      ),
                      (i[r.partOf.name] = 1),
                      t("p%s=1", u);
                  }
                  l(t, r, o, m);
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
            function l(e, t, n, i) {
              if (t.resolvedType)
                if (t.resolvedType instanceof r) {
                  e("switch(%s){", i)("default:")(
                    "return%j",
                    s(t, "enum value")
                  );
                  for (
                    var o = Object.keys(t.resolvedType.values), a = 0;
                    a < o.length;
                    ++a
                  )
                    e("case %i:", t.resolvedType.values[o[a]]);
                  e("break")("}");
                } else
                  e("{")("var e=types[%i].verify(%s);", n, i)("if(e)")(
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
                    e("if(!util.isInteger(%s))", i)(
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
                      i,
                      i,
                      i,
                      i
                    )("return%j", s(t, "integer|Long"));
                    break;
                  case "float":
                  case "double":
                    e('if(typeof %s!=="number")', i)(
                      "return%j",
                      s(t, "number")
                    );
                    break;
                  case "bool":
                    e('if(typeof %s!=="boolean")', i)(
                      "return%j",
                      s(t, "boolean")
                    );
                    break;
                  case "string":
                    e("if(!util.isString(%s))", i)("return%j", s(t, "string"));
                    break;
                  case "bytes":
                    e(
                      'if(!(%s&&typeof %s.length==="number"||util.isString(%s)))',
                      i,
                      i,
                      i
                    )("return%j", s(t, "buffer"));
                }
              return e;
            }
            function c(e, t, n) {
              switch (t.keyType) {
                case "int32":
                case "uint32":
                case "sint32":
                case "fixed32":
                case "sfixed32":
                  e("if(!util.key32Re.test(%s))", n)(
                    "return%j",
                    s(t, "integer key")
                  );
                  break;
                case "int64":
                case "uint64":
                case "sint64":
                case "fixed64":
                case "sfixed64":
                  e("if(!util.key64Re.test(%s))", n)(
                    "return%j",
                    s(t, "integer|Long key")
                  );
                  break;
                case "bool":
                  e("if(!util.key2Re.test(%s))", n)(
                    "return%j",
                    s(t, "boolean key")
                  );
              }
              return e;
            }
            n.exports;
          },
          function () {
            return { "./enum": __cjsMetaURL$B, "./util": __cjsMetaURL$z };
          }
        );
        var __cjsMetaURL$v =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/src/converter.js";
        loader.define(
          __cjsMetaURL$v,
          function (e, t, n, i, o) {
            var r = e,
              a = t("./enum"),
              s = t("./util");
            function l(e, t, n, i) {
              if (t.resolvedType)
                if (t.resolvedType instanceof a) {
                  e("switch(d%s){", i);
                  for (
                    var o = t.resolvedType.values, r = Object.keys(o), s = 0;
                    s < r.length;
                    ++s
                  )
                    t.repeated && o[r[s]] === t.typeDefault && e("default:"),
                      e("case%j:", r[s])("case %i:", o[r[s]])(
                        "m%s=%j",
                        i,
                        o[r[s]]
                      )("break");
                  e("}");
                } else
                  e('if(typeof d%s!=="object")', i)(
                    "throw TypeError(%j)",
                    t.fullName + ": object expected"
                  )("m%s=types[%i].fromObject(d%s)", i, n, i);
              else {
                var l = !1;
                switch (t.type) {
                  case "double":
                  case "float":
                    e("m%s=Number(d%s)", i, i);
                    break;
                  case "uint32":
                  case "fixed32":
                    e("m%s=d%s>>>0", i, i);
                    break;
                  case "int32":
                  case "sint32":
                  case "sfixed32":
                    e("m%s=d%s|0", i, i);
                    break;
                  case "uint64":
                    l = !0;
                  case "int64":
                  case "sint64":
                  case "fixed64":
                  case "sfixed64":
                    e("if(util.Long)")(
                      "(m%s=util.Long.fromValue(d%s)).unsigned=%j",
                      i,
                      i,
                      l
                    )('else if(typeof d%s==="string")', i)(
                      "m%s=parseInt(d%s,10)",
                      i,
                      i
                    )('else if(typeof d%s==="number")', i)(
                      "m%s=d%s",
                      i,
                      i
                    )('else if(typeof d%s==="object")', i)(
                      "m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)",
                      i,
                      i,
                      i,
                      l ? "true" : ""
                    );
                    break;
                  case "bytes":
                    e('if(typeof d%s==="string")', i)(
                      "util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)",
                      i,
                      i,
                      i
                    )("else if(d%s.length)", i)("m%s=d%s", i, i);
                    break;
                  case "string":
                    e("m%s=String(d%s)", i, i);
                    break;
                  case "bool":
                    e("m%s=Boolean(d%s)", i, i);
                }
              }
              return e;
            }
            function c(e, t, n, i) {
              if (t.resolvedType)
                t.resolvedType instanceof a
                  ? e(
                      "d%s=o.enums===String?types[%i].values[m%s]:m%s",
                      i,
                      n,
                      i,
                      i
                    )
                  : e("d%s=types[%i].toObject(m%s,o)", i, n, i);
              else {
                var o = !1;
                switch (t.type) {
                  case "double":
                  case "float":
                    e("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", i, i, i, i);
                    break;
                  case "uint64":
                    o = !0;
                  case "int64":
                  case "sint64":
                  case "fixed64":
                  case "sfixed64":
                    e('if(typeof m%s==="number")', i)(
                      "d%s=o.longs===String?String(m%s):m%s",
                      i,
                      i,
                      i
                    )("else")(
                      "d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s",
                      i,
                      i,
                      i,
                      i,
                      o ? "true" : "",
                      i
                    );
                    break;
                  case "bytes":
                    e(
                      "d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s",
                      i,
                      i,
                      i,
                      i,
                      i
                    );
                    break;
                  default:
                    e("d%s=m%s", i, i);
                }
              }
              return e;
            }
            (r.fromObject = function (e) {
              var t = e.fieldsArray,
                n = s.codegen(
                  ["d"],
                  e.name + "$fromObject"
                )("if(d instanceof this.ctor)")("return d");
              if (!t.length) return n("return new this.ctor");
              n("var m=new this.ctor");
              for (var i = 0; i < t.length; ++i) {
                var o = t[i].resolve(),
                  r = s.safeProp(o.name);
                o.map
                  ? (n("if(d%s){", r)('if(typeof d%s!=="object")', r)(
                      "throw TypeError(%j)",
                      o.fullName + ": object expected"
                    )("m%s={}", r)(
                      "for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){",
                      r
                    ),
                    l(n, o, i, r + "[ks[i]]")("}")("}"))
                  : o.repeated
                  ? (n("if(d%s){", r)("if(!Array.isArray(d%s))", r)(
                      "throw TypeError(%j)",
                      o.fullName + ": array expected"
                    )("m%s=[]", r)("for(var i=0;i<d%s.length;++i){", r),
                    l(n, o, i, r + "[i]")("}")("}"))
                  : (o.resolvedType instanceof a || n("if(d%s!=null){", r),
                    l(n, o, i, r),
                    o.resolvedType instanceof a || n("}"));
              }
              return n("return m");
            }),
              (r.toObject = function (e) {
                var t = e.fieldsArray.slice().sort(s.compareFieldsById);
                if (!t.length) return s.codegen()("return {}");
                for (
                  var n = s.codegen(["m", "o"], e.name + "$toObject")("if(!o)")(
                      "o={}"
                    )("var d={}"),
                    i = [],
                    o = [],
                    r = [],
                    l = 0;
                  l < t.length;
                  ++l
                )
                  t[l].partOf ||
                    (t[l].resolve().repeated ? i : t[l].map ? o : r).push(t[l]);
                if (i.length) {
                  for (n("if(o.arrays||o.defaults){"), l = 0; l < i.length; ++l)
                    n("d%s=[]", s.safeProp(i[l].name));
                  n("}");
                }
                if (o.length) {
                  for (
                    n("if(o.objects||o.defaults){"), l = 0;
                    l < o.length;
                    ++l
                  )
                    n("d%s={}", s.safeProp(o[l].name));
                  n("}");
                }
                if (r.length) {
                  for (n("if(o.defaults){"), l = 0; l < r.length; ++l) {
                    var m = r[l],
                      u = s.safeProp(m.name);
                    if (m.resolvedType instanceof a)
                      n(
                        "d%s=o.enums===String?%j:%j",
                        u,
                        m.resolvedType.valuesById[m.typeDefault],
                        m.typeDefault
                      );
                    else if (m.long)
                      n("if(util.Long){")(
                        "var n=new util.Long(%i,%i,%j)",
                        m.typeDefault.low,
                        m.typeDefault.high,
                        m.typeDefault.unsigned
                      )(
                        "d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n",
                        u
                      )("}else")(
                        "d%s=o.longs===String?%j:%i",
                        u,
                        m.typeDefault.toString(),
                        m.typeDefault.toNumber()
                      );
                    else if (m.bytes) {
                      var _ =
                        "[" +
                        Array.prototype.slice.call(m.typeDefault).join(",") +
                        "]";
                      n(
                        "if(o.bytes===String)d%s=%j",
                        u,
                        String.fromCharCode.apply(String, m.typeDefault)
                      )("else{")("d%s=%s", u, _)(
                        "if(o.bytes!==Array)d%s=util.newBuffer(d%s)",
                        u,
                        u
                      )("}");
                    } else n("d%s=%j", u, m.typeDefault);
                  }
                  n("}");
                }
                var p = !1;
                for (l = 0; l < t.length; ++l) {
                  m = t[l];
                  var f = e._fieldsArray.indexOf(m);
                  u = s.safeProp(m.name);
                  m.map
                    ? (p || ((p = !0), n("var ks2")),
                      n(
                        "if(m%s&&(ks2=Object.keys(m%s)).length){",
                        u,
                        u
                      )(
                        "d%s={}",
                        u
                      )("for(var j=0;j<ks2.length;++j){"),
                      c(n, m, f, u + "[ks2[j]]")("}"))
                    : m.repeated
                    ? (n("if(m%s&&m%s.length){", u, u)("d%s=[]", u)(
                        "for(var j=0;j<m%s.length;++j){",
                        u
                      ),
                      c(n, m, f, u + "[j]")("}"))
                    : (n("if(m%s!=null&&m.hasOwnProperty(%j)){", u, m.name),
                      c(n, m, f, u),
                      m.partOf &&
                        n("if(o.oneofs)")(
                          "d%s=%j",
                          s.safeProp(m.partOf.name),
                          m.name
                        )),
                    n("}");
                }
                return n("return d");
              }),
              n.exports;
          },
          function () {
            return { "./enum": __cjsMetaURL$B, "./util": __cjsMetaURL$z };
          }
        );
        var __cjsMetaURL$w =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js";
        loader.define(
          __cjsMetaURL$w,
          function (e, t, n, i, o) {
            var r = e,
              a = t("./message");
            (r[".google.protobuf.Any"] = {
              fromObject: function (e) {
                if (e && e["@type"]) {
                  var t = e["@type"].substring(e["@type"].lastIndexOf("/") + 1),
                    n = this.lookup(t);
                  if (n) {
                    var i =
                      "." === e["@type"].charAt(0)
                        ? e["@type"].substr(1)
                        : e["@type"];
                    return (
                      -1 === i.indexOf("/") && (i = "/" + i),
                      this.create({
                        type_url: i,
                        value: n.encode(n.fromObject(e)).finish(),
                      })
                    );
                  }
                }
                return this.fromObject(e);
              },
              toObject: function (e, t) {
                var n = "",
                  i = "";
                if (t && t.json && e.type_url && e.value) {
                  (i = e.type_url.substring(e.type_url.lastIndexOf("/") + 1)),
                    (n = e.type_url.substring(
                      0,
                      e.type_url.lastIndexOf("/") + 1
                    ));
                  var o = this.lookup(i);
                  o && (e = o.decode(e.value));
                }
                if (!(e instanceof this.ctor) && e instanceof a) {
                  var r = e.$type.toObject(e, t);
                  return (
                    "" === n && (n = "type.googleapis.com/"),
                    (i =
                      n +
                      ("." === e.$type.fullName[0]
                        ? e.$type.fullName.substr(1)
                        : e.$type.fullName)),
                    (r["@type"] = i),
                    r
                  );
                }
                return this.toObject(e, t);
              },
            }),
              n.exports;
          },
          function () {
            return { "./message": __cjsMetaURL$s };
          }
        );
        var __cjsMetaURL$x =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/src/type.js";
        loader.define(
          __cjsMetaURL$x,
          function (e, t, n, i, o) {
            n.exports = b;
            var r = t("./namespace");
            ((b.prototype = Object.create(r.prototype)).constructor =
              b).className = "Type";
            var a = t("./enum"),
              s = t("./oneof"),
              l = t("./field"),
              c = t("./mapfield"),
              m = t("./service"),
              u = t("./message"),
              _ = t("./reader"),
              p = t("./writer"),
              f = t("./util"),
              d = t("./encoder"),
              h = t("./decoder"),
              y = t("./verifier"),
              S = t("./converter"),
              g = t("./wrappers");
            function b(e, t) {
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
            function v(e) {
              return (
                (e._fieldsById = e._fieldsArray = e._oneofsArray = null),
                delete e.encode,
                delete e.decode,
                delete e.verify,
                e
              );
            }
            Object.defineProperties(b.prototype, {
              fieldsById: {
                get: function () {
                  if (this._fieldsById) return this._fieldsById;
                  this._fieldsById = {};
                  for (
                    var e = Object.keys(this.fields), t = 0;
                    t < e.length;
                    ++t
                  ) {
                    var n = this.fields[e[t]],
                      i = n.id;
                    if (this._fieldsById[i])
                      throw Error("duplicate id " + i + " in " + this);
                    this._fieldsById[i] = n;
                  }
                  return this._fieldsById;
                },
              },
              fieldsArray: {
                get: function () {
                  return (
                    this._fieldsArray ||
                    (this._fieldsArray = f.toArray(this.fields))
                  );
                },
              },
              oneofsArray: {
                get: function () {
                  return (
                    this._oneofsArray ||
                    (this._oneofsArray = f.toArray(this.oneofs))
                  );
                },
              },
              ctor: {
                get: function () {
                  return (
                    this._ctor || (this.ctor = b.generateConstructor(this)())
                  );
                },
                set: function (e) {
                  var t = e.prototype;
                  t instanceof u ||
                    (((e.prototype = new u()).constructor = e),
                    f.merge(e.prototype, t)),
                    (e.$type = e.prototype.$type = this),
                    f.merge(e, u, !0),
                    (this._ctor = e);
                  for (var n = 0; n < this.fieldsArray.length; ++n)
                    this._fieldsArray[n].resolve();
                  var i = {};
                  for (n = 0; n < this.oneofsArray.length; ++n)
                    i[this._oneofsArray[n].resolve().name] = {
                      get: f.oneOfGetter(this._oneofsArray[n].oneof),
                      set: f.oneOfSetter(this._oneofsArray[n].oneof),
                    };
                  n && Object.defineProperties(e.prototype, i);
                },
              },
            }),
              (b.generateConstructor = function (e) {
                for (
                  var t, n = f.codegen(["p"], e.name), i = 0;
                  i < e.fieldsArray.length;
                  ++i
                )
                  (t = e._fieldsArray[i]).map
                    ? n("this%s={}", f.safeProp(t.name))
                    : t.repeated && n("this%s=[]", f.safeProp(t.name));
                return n(
                  "if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)"
                )("this[ks[i]]=p[ks[i]]");
              }),
              (b.fromJSON = function (e, t) {
                var n = new b(e, t.options);
                (n.extensions = t.extensions), (n.reserved = t.reserved);
                for (var i = Object.keys(t.fields), o = 0; o < i.length; ++o)
                  n.add(
                    (void 0 !== t.fields[i[o]].keyType
                      ? c.fromJSON
                      : l.fromJSON)(i[o], t.fields[i[o]])
                  );
                if (t.oneofs)
                  for (i = Object.keys(t.oneofs), o = 0; o < i.length; ++o)
                    n.add(s.fromJSON(i[o], t.oneofs[i[o]]));
                if (t.nested)
                  for (i = Object.keys(t.nested), o = 0; o < i.length; ++o) {
                    var u = t.nested[i[o]];
                    n.add(
                      (void 0 !== u.id
                        ? l.fromJSON
                        : void 0 !== u.fields
                        ? b.fromJSON
                        : void 0 !== u.values
                        ? a.fromJSON
                        : void 0 !== u.methods
                        ? m.fromJSON
                        : r.fromJSON)(i[o], u)
                    );
                  }
                return (
                  t.extensions &&
                    t.extensions.length &&
                    (n.extensions = t.extensions),
                  t.reserved && t.reserved.length && (n.reserved = t.reserved),
                  t.group && (n.group = !0),
                  t.comment && (n.comment = t.comment),
                  n
                );
              }),
              (b.prototype.toJSON = function (e) {
                var t = r.prototype.toJSON.call(this, e),
                  n = !!e && Boolean(e.keepComments);
                return f.toObject([
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
                  n ? this.comment : void 0,
                ]);
              }),
              (b.prototype.resolveAll = function () {
                for (var e = this.fieldsArray, t = 0; t < e.length; )
                  e[t++].resolve();
                var n = this.oneofsArray;
                for (t = 0; t < n.length; ) n[t++].resolve();
                return r.prototype.resolveAll.call(this);
              }),
              (b.prototype.get = function (e) {
                return (
                  this.fields[e] ||
                  (this.oneofs && this.oneofs[e]) ||
                  (this.nested && this.nested[e]) ||
                  null
                );
              }),
              (b.prototype.add = function (e) {
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
                    v(this)
                  );
                }
                return e instanceof s
                  ? (this.oneofs || (this.oneofs = {}),
                    (this.oneofs[e.name] = e),
                    e.onAdd(this),
                    v(this))
                  : r.prototype.add.call(this, e);
              }),
              (b.prototype.remove = function (e) {
                if (e instanceof l && void 0 === e.extend) {
                  if (!this.fields || this.fields[e.name] !== e)
                    throw Error(e + " is not a member of " + this);
                  return (
                    delete this.fields[e.name],
                    (e.parent = null),
                    e.onRemove(this),
                    v(this)
                  );
                }
                if (e instanceof s) {
                  if (!this.oneofs || this.oneofs[e.name] !== e)
                    throw Error(e + " is not a member of " + this);
                  return (
                    delete this.oneofs[e.name],
                    (e.parent = null),
                    e.onRemove(this),
                    v(this)
                  );
                }
                return r.prototype.remove.call(this, e);
              }),
              (b.prototype.isReservedId = function (e) {
                return r.isReservedId(this.reserved, e);
              }),
              (b.prototype.isReservedName = function (e) {
                return r.isReservedName(this.reserved, e);
              }),
              (b.prototype.create = function (e) {
                return new this.ctor(e);
              }),
              (b.prototype.setup = function () {
                for (
                  var e = this.fullName, t = [], n = 0;
                  n < this.fieldsArray.length;
                  ++n
                )
                  t.push(this._fieldsArray[n].resolve().resolvedType);
                (this.encode = d(this)({ Writer: p, types: t, util: f })),
                  (this.decode = h(this)({ Reader: _, types: t, util: f })),
                  (this.verify = y(this)({ types: t, util: f })),
                  (this.fromObject = S.fromObject(this)({ types: t, util: f })),
                  (this.toObject = S.toObject(this)({ types: t, util: f }));
                var i = g[e];
                if (i) {
                  var o = Object.create(this);
                  (o.fromObject = this.fromObject),
                    (this.fromObject = i.fromObject.bind(o)),
                    (o.toObject = this.toObject),
                    (this.toObject = i.toObject.bind(o));
                }
                return this;
              }),
              (b.prototype.encode = function (e, t) {
                return this.setup().encode(e, t);
              }),
              (b.prototype.encodeDelimited = function (e, t) {
                return this.encode(e, t && t.len ? t.fork() : t).ldelim();
              }),
              (b.prototype.decode = function (e, t) {
                return this.setup().decode(e, t);
              }),
              (b.prototype.decodeDelimited = function (e) {
                return (
                  e instanceof _ || (e = _.create(e)),
                  this.decode(e, e.uint32())
                );
              }),
              (b.prototype.verify = function (e) {
                return this.setup().verify(e);
              }),
              (b.prototype.fromObject = function (e) {
                return this.setup().fromObject(e);
              }),
              (b.prototype.toObject = function (e, t) {
                return this.setup().toObject(e, t);
              }),
              (b.d = function (e) {
                return function (t) {
                  f.decorateType(t, e);
                };
              }),
              n.exports;
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
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/src/root.js";
        loader.define(
          __cjsMetaURL$y,
          function (e, t, n, i, o) {
            n.exports = p;
            var r = t("./namespace");
            ((p.prototype = Object.create(r.prototype)).constructor =
              p).className = "Root";
            var a,
              s,
              l,
              c = t("./field"),
              m = t("./enum"),
              u = t("./oneof"),
              _ = t("./util");
            function p(e) {
              r.call(this, "", e), (this.deferred = []), (this.files = []);
            }
            function f() {}
            (p.fromJSON = function (e, t) {
              return (
                t || (t = new p()),
                e.options && t.setOptions(e.options),
                t.addJSON(e.nested)
              );
            }),
              (p.prototype.resolvePath = _.path.resolve),
              (p.prototype.fetch = _.fetch),
              (p.prototype.load = function e(t, n, i) {
                "function" == typeof n && ((i = n), (n = void 0));
                var o = this;
                if (!i) return _.asPromise(e, o, t, n);
                var r = i === f;
                function a(e, t) {
                  if (i) {
                    var n = i;
                    if (((i = null), r)) throw e;
                    n(e, t);
                  }
                }
                function c(e) {
                  var t = e.lastIndexOf("google/protobuf/");
                  if (t > -1) {
                    var n = e.substring(t);
                    if (n in l) return n;
                  }
                  return null;
                }
                function m(e, t) {
                  try {
                    if (
                      (_.isString(t) &&
                        "{" === t.charAt(0) &&
                        (t = JSON.parse(t)),
                      _.isString(t))
                    ) {
                      s.filename = e;
                      var i,
                        l = s(t, o, n),
                        m = 0;
                      if (l.imports)
                        for (; m < l.imports.length; ++m)
                          (i =
                            c(l.imports[m]) ||
                            o.resolvePath(e, l.imports[m])) && u(i);
                      if (l.weakImports)
                        for (m = 0; m < l.weakImports.length; ++m)
                          (i =
                            c(l.weakImports[m]) ||
                            o.resolvePath(e, l.weakImports[m])) && u(i, !0);
                    } else o.setOptions(t.options).addJSON(t.nested);
                  } catch (e) {
                    a(e);
                  }
                  r || p || a(null, o);
                }
                function u(e, t) {
                  if (!(o.files.indexOf(e) > -1))
                    if ((o.files.push(e), e in l))
                      r
                        ? m(e, l[e])
                        : (++p,
                          setTimeout(function () {
                            --p, m(e, l[e]);
                          }));
                    else if (r) {
                      var n;
                      try {
                        n = _.fs.readFileSync(e).toString("utf8");
                      } catch (e) {
                        return void (t || a(e));
                      }
                      m(e, n);
                    } else
                      ++p,
                        o.fetch(e, function (n, r) {
                          --p,
                            i && (n ? (t ? p || a(null, o) : a(n)) : m(e, r));
                        });
                }
                var p = 0;
                _.isString(t) && (t = [t]);
                for (var d, h = 0; h < t.length; ++h)
                  (d = o.resolvePath("", t[h])) && u(d);
                if (r) return o;
                p || a(null, o);
              }),
              (p.prototype.loadSync = function (e, t) {
                if (!_.isNode) throw Error("not supported");
                return this.load(e, t, f);
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
                return r.prototype.resolveAll.call(this);
              });
            var d = /^[A-Z]/;
            function h(e, t) {
              var n = t.parent.lookup(t.extend);
              if (n) {
                var i = new c(
                  t.fullName,
                  t.id,
                  t.type,
                  t.rule,
                  void 0,
                  t.options
                );
                return (
                  (i.declaringField = t), (t.extensionField = i), n.add(i), !0
                );
              }
              return !1;
            }
            (p.prototype._handleAdd = function (e) {
              if (e instanceof c)
                void 0 === e.extend ||
                  e.extensionField ||
                  h(0, e) ||
                  this.deferred.push(e);
              else if (e instanceof m)
                d.test(e.name) && (e.parent[e.name] = e.values);
              else if (!(e instanceof u)) {
                if (e instanceof a)
                  for (var t = 0; t < this.deferred.length; )
                    h(0, this.deferred[t]) ? this.deferred.splice(t, 1) : ++t;
                for (var n = 0; n < e.nestedArray.length; ++n)
                  this._handleAdd(e._nestedArray[n]);
                d.test(e.name) && (e.parent[e.name] = e);
              }
            }),
              (p.prototype._handleRemove = function (e) {
                if (e instanceof c) {
                  if (void 0 !== e.extend)
                    if (e.extensionField)
                      e.extensionField.parent.remove(e.extensionField),
                        (e.extensionField = null);
                    else {
                      var t = this.deferred.indexOf(e);
                      t > -1 && this.deferred.splice(t, 1);
                    }
                } else if (e instanceof m)
                  d.test(e.name) && delete e.parent[e.name];
                else if (e instanceof r) {
                  for (var n = 0; n < e.nestedArray.length; ++n)
                    this._handleRemove(e._nestedArray[n]);
                  d.test(e.name) && delete e.parent[e.name];
                }
              }),
              (p._configure = function (e, t, n) {
                (a = e), (s = t), (l = n);
              }),
              n.exports;
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
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/src/util.js";
        loader.define(
          __cjsMetaURL$z,
          function (e, t, n, i, o) {
            var r,
              a,
              s = (n.exports = t("./util/minimal")),
              l = t("./roots");
            (s.codegen = t("@protobufjs/codegen")),
              (s.fetch = t("@protobufjs/fetch")),
              (s.path = t("@protobufjs/path")),
              (s.fs = s.inquire("fs")),
              (s.toArray = function (e) {
                if (e) {
                  for (
                    var t = Object.keys(e), n = new Array(t.length), i = 0;
                    i < t.length;

                  )
                    n[i] = e[t[i++]];
                  return n;
                }
                return [];
              }),
              (s.toObject = function (e) {
                for (var t = {}, n = 0; n < e.length; ) {
                  var i = e[n++],
                    o = e[n++];
                  void 0 !== o && (t[i] = o);
                }
                return t;
              });
            var c = /\\/g,
              m = /"/g;
            (s.isReserved = function (e) {
              return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(
                e
              );
            }),
              (s.safeProp = function (e) {
                return !/^[$\w_]+$/.test(e) || s.isReserved(e)
                  ? '["' + e.replace(c, "\\\\").replace(m, '\\"') + '"]'
                  : "." + e;
              }),
              (s.ucFirst = function (e) {
                return e.charAt(0).toUpperCase() + e.substring(1);
              });
            var u = /_([a-z])/g;
            (s.camelCase = function (e) {
              return (
                e.substring(0, 1) +
                e.substring(1).replace(u, function (e, t) {
                  return t.toUpperCase();
                })
              );
            }),
              (s.compareFieldsById = function (e, t) {
                return e.id - t.id;
              }),
              (s.decorateType = function (e, n) {
                if (e.$type)
                  return (
                    n &&
                      e.$type.name !== n &&
                      (s.decorateRoot.remove(e.$type),
                      (e.$type.name = n),
                      s.decorateRoot.add(e.$type)),
                    e.$type
                  );
                r || (r = t("./type"));
                var i = new r(n || e.name);
                return (
                  s.decorateRoot.add(i),
                  (i.ctor = e),
                  Object.defineProperty(e, "$type", {
                    value: i,
                    enumerable: !1,
                  }),
                  Object.defineProperty(e.prototype, "$type", {
                    value: i,
                    enumerable: !1,
                  }),
                  i
                );
              });
            var _ = 0;
            (s.decorateEnum = function (e) {
              if (e.$type) return e.$type;
              a || (a = t("./enum"));
              var n = new a("Enum" + _++, e);
              return (
                s.decorateRoot.add(n),
                Object.defineProperty(e, "$type", { value: n, enumerable: !1 }),
                n
              );
            }),
              (s.setProperty = function (e, t, n) {
                if ("object" != typeof e)
                  throw TypeError("dst must be an object");
                if (!t) throw TypeError("path must be specified");
                return (function e(t, n, i) {
                  var o = n.shift();
                  if ("__proto__" === o || "prototype" === o) return t;
                  if (n.length > 0) t[o] = e(t[o] || {}, n, i);
                  else {
                    var r = t[o];
                    r && (i = [].concat(r).concat(i)), (t[o] = i);
                  }
                  return t;
                })(e, (t = t.split(".")), n);
              }),
              Object.defineProperty(s, "decorateRoot", {
                get: function () {
                  return l.decorated || (l.decorated = new (t("./root"))());
                },
              }),
              n.exports;
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
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/src/object.js";
        loader.define(
          __cjsMetaURL$A,
          function (e, t, n, i, o) {
            (n.exports = s), (s.className = "ReflectionObject");
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
              (s.prototype.setOption = function (e, t, n) {
                return (
                  (n && this.options && void 0 !== this.options[e]) ||
                    ((this.options || (this.options = {}))[e] = t),
                  this
                );
              }),
              (s.prototype.setParsedOption = function (e, t, n) {
                this.parsedOptions || (this.parsedOptions = []);
                var i = this.parsedOptions;
                if (n) {
                  var o = i.find(function (t) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                  });
                  if (o) {
                    var r = o[e];
                    a.setProperty(r, n, t);
                  } else ((o = {})[e] = a.setProperty({}, n, t)), i.push(o);
                } else {
                  var s = {};
                  (s[e] = t), i.push(s);
                }
                return this;
              }),
              (s.prototype.setOptions = function (e, t) {
                if (e)
                  for (var n = Object.keys(e), i = 0; i < n.length; ++i)
                    this.setOption(n[i], e[n[i]], t);
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
              n.exports;
          },
          function () {
            return { "./util": __cjsMetaURL$z };
          }
        );
        var __cjsMetaURL$B =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/src/enum.js";
        loader.define(
          __cjsMetaURL$B,
          function (e, t, n, i, o) {
            n.exports = l;
            var r = t("./object");
            ((l.prototype = Object.create(r.prototype)).constructor =
              l).className = "Enum";
            var a = t("./namespace"),
              s = t("./util");
            function l(e, t, n, i, o) {
              if ((r.call(this, e, n), t && "object" != typeof t))
                throw TypeError("values must be an object");
              if (
                ((this.valuesById = {}),
                (this.values = Object.create(this.valuesById)),
                (this.comment = i),
                (this.comments = o || {}),
                (this.reserved = void 0),
                t)
              )
                for (var a = Object.keys(t), s = 0; s < a.length; ++s)
                  "number" == typeof t[a[s]] &&
                    (this.valuesById[(this.values[a[s]] = t[a[s]])] = a[s]);
            }
            (l.fromJSON = function (e, t) {
              var n = new l(e, t.values, t.options, t.comment, t.comments);
              return (n.reserved = t.reserved), n;
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
              (l.prototype.add = function (e, t, n) {
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
                return (this.comments[e] = n || null), this;
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
              n.exports;
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
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js";
        loader.define(
          __cjsMetaURL$C,
          function (e, t, n, i, o) {
            n.exports = function (e) {
              for (
                var t,
                  n = s.codegen(["m", "w"], e.name + "$encode")("if(!w)")(
                    "w=Writer.create()"
                  ),
                  i = e.fieldsArray.slice().sort(s.compareFieldsById),
                  o = 0;
                o < i.length;
                ++o
              ) {
                var c = i[o].resolve(),
                  m = e._fieldsArray.indexOf(c),
                  u = c.resolvedType instanceof r ? "int32" : c.type,
                  _ = a.basic[u];
                (t = "m" + s.safeProp(c.name)),
                  c.map
                    ? (n(
                        "if(%s!=null&&Object.hasOwnProperty.call(m,%j)){",
                        t,
                        c.name
                      )("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", t)(
                        "w.uint32(%i).fork().uint32(%i).%s(ks[i])",
                        ((c.id << 3) | 2) >>> 0,
                        8 | a.mapKey[c.keyType],
                        c.keyType
                      ),
                      void 0 === _
                        ? n(
                            "types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()",
                            m,
                            t
                          )
                        : n(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | _, u, t),
                      n("}")("}"))
                    : c.repeated
                    ? (n("if(%s!=null&&%s.length){", t, t),
                      c.packed && void 0 !== a.packed[u]
                        ? n("w.uint32(%i).fork()", ((c.id << 3) | 2) >>> 0)(
                            "for(var i=0;i<%s.length;++i)",
                            t
                          )(
                            "w.%s(%s[i])",
                            u,
                            t
                          )("w.ldelim()")
                        : (n("for(var i=0;i<%s.length;++i)", t),
                          void 0 === _
                            ? l(n, c, m, t + "[i]")
                            : n(
                                "w.uint32(%i).%s(%s[i])",
                                ((c.id << 3) | _) >>> 0,
                                u,
                                t
                              )),
                      n("}"))
                    : (c.optional &&
                        n(
                          "if(%s!=null&&Object.hasOwnProperty.call(m,%j))",
                          t,
                          c.name
                        ),
                      void 0 === _
                        ? l(n, c, m, t)
                        : n(
                            "w.uint32(%i).%s(%s)",
                            ((c.id << 3) | _) >>> 0,
                            u,
                            t
                          ));
              }
              return n("return w");
            };
            var r = t("./enum"),
              a = t("./types"),
              s = t("./util");
            function l(e, t, n, i) {
              return t.resolvedType.group
                ? e(
                    "types[%i].encode(%s,w.uint32(%i)).uint32(%i)",
                    n,
                    i,
                    ((t.id << 3) | 3) >>> 0,
                    ((t.id << 3) | 4) >>> 0
                  )
                : e(
                    "types[%i].encode(%s,w.uint32(%i).fork()).ldelim()",
                    n,
                    i,
                    ((t.id << 3) | 2) >>> 0
                  );
            }
            n.exports;
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
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js";
        loader.define(
          __cjsMetaURL$D,
          function (e, t, n, i, o) {
            var r = (n.exports = t("./index-minimal"));
            (r.build = "light"),
              (r.load = function (e, t, n) {
                return (
                  "function" == typeof t
                    ? ((n = t), (t = new r.Root()))
                    : t || (t = new r.Root()),
                  t.load(e, n)
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
              n.exports;
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
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js";
        loader.define(
          __cjsMetaURL$E,
          function (e, t, n, i, o) {
            n.exports = d;
            var r = /[\s{}=;:[\],'"()<>]/g,
              a = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
              s = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
              l = /^ *[*/]+ */,
              c = /^\s*\*?\/*/,
              m = /\n/g,
              u = /\s/,
              _ = /\\(.?)/g,
              p = { 0: "\0", r: "\r", n: "\n", t: "\t" };
            function f(e) {
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
            function d(e, t) {
              e = e.toString();
              var n = 0,
                i = e.length,
                o = 1,
                _ = null,
                p = null,
                d = 0,
                h = !1,
                y = !1,
                S = [],
                g = null;
              function b(e) {
                return Error("illegal " + e + " (line " + o + ")");
              }
              function v(t) {
                return e.charAt(t);
              }
              function C(n, i, r) {
                (_ = e.charAt(n++)), (d = o), (h = !1), (y = r);
                var a,
                  s = n - (t ? 2 : 3);
                do {
                  if (--s < 0 || "\n" === (a = e.charAt(s))) {
                    h = !0;
                    break;
                  }
                } while (" " === a || "\t" === a);
                for (
                  var u = e.substring(n, i).split(m), f = 0;
                  f < u.length;
                  ++f
                )
                  u[f] = u[f].replace(t ? c : l, "").trim();
                p = u.join("\n").trim();
              }
              function w(t) {
                var n = G(t),
                  i = e.substring(t, n);
                return /^\s*\/{1,2}/.test(i);
              }
              function G(e) {
                for (var t = e; t < i && "\n" !== v(t); ) t++;
                return t;
              }
              function $() {
                if (S.length > 0) return S.shift();
                if (g)
                  return (function () {
                    var t = "'" === g ? s : a;
                    t.lastIndex = n - 1;
                    var i = t.exec(e);
                    if (!i) throw b("string");
                    return (n = t.lastIndex), P(g), (g = null), f(i[1]);
                  })();
                var l,
                  c,
                  m,
                  _,
                  p,
                  d = 0 === n;
                do {
                  if (n === i) return null;
                  for (l = !1; u.test((m = v(n))); )
                    if (("\n" === m && ((d = !0), ++o), ++n === i)) return null;
                  if ("/" === v(n)) {
                    if (++n === i) throw b("comment");
                    if ("/" === v(n))
                      if (t) {
                        if (((_ = n), (p = !1), w(n))) {
                          p = !0;
                          do {
                            if ((n = G(n)) === i) break;
                            n++;
                          } while (w(n));
                        } else n = Math.min(i, G(n) + 1);
                        p && C(_, n, d), o++, (l = !0);
                      } else {
                        for (p = "/" === v((_ = n + 1)); "\n" !== v(++n); )
                          if (n === i) return null;
                        ++n, p && C(_, n - 1, d), ++o, (l = !0);
                      }
                    else {
                      if ("*" !== (m = v(n))) return "/";
                      (_ = n + 1), (p = t || "*" === v(_));
                      do {
                        if (("\n" === m && ++o, ++n === i)) throw b("comment");
                        (c = m), (m = v(n));
                      } while ("*" !== c || "/" !== m);
                      ++n, p && C(_, n - 2, d), (l = !0);
                    }
                  }
                } while (l);
                var h = n;
                if (((r.lastIndex = 0), !r.test(v(h++))))
                  for (; h < i && !r.test(v(h)); ) ++h;
                var y = e.substring(n, (n = h));
                return ('"' !== y && "'" !== y) || (g = y), y;
              }
              function P(e) {
                S.push(e);
              }
              function D() {
                if (!S.length) {
                  var e = $();
                  if (null === e) return null;
                  P(e);
                }
                return S[0];
              }
              return Object.defineProperty(
                {
                  next: $,
                  peek: D,
                  push: P,
                  skip: function (e, t) {
                    var n = D();
                    if (n === e) return $(), !0;
                    if (!t) throw b("token '" + n + "', '" + e + "' expected");
                    return !1;
                  },
                  cmnt: function (e) {
                    var n = null;
                    return (
                      void 0 === e
                        ? d === o - 1 &&
                          (t || "*" === _ || h) &&
                          (n = y ? p : null)
                        : (d < e && D(),
                          d !== e ||
                            h ||
                            (!t && "/" !== _) ||
                            (n = y ? null : p)),
                      n
                    );
                  },
                },
                "line",
                {
                  get: function () {
                    return o;
                  },
                }
              );
            }
            (d.unescape = f), n.exports;
          },
          {}
        );
        var __cjsMetaURL$F =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/src/parse.js";
        loader.define(
          __cjsMetaURL$F,
          function (e, t, n, i, o) {
            (n.exports = P),
              (P.filename = null),
              (P.defaults = { keepCase: !1 });
            var r = t("./tokenize"),
              a = t("./root"),
              s = t("./type"),
              l = t("./field"),
              c = t("./mapfield"),
              m = t("./oneof"),
              u = t("./enum"),
              _ = t("./service"),
              p = t("./method"),
              f = t("./types"),
              d = t("./util"),
              h = /^[1-9][0-9]*$/,
              y = /^-?[1-9][0-9]*$/,
              S = /^0[x][0-9a-fA-F]+$/,
              g = /^-?0[x][0-9a-fA-F]+$/,
              b = /^0[0-7]+$/,
              v = /^-?0[0-7]+$/,
              C = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/,
              w = /^[a-zA-Z_][a-zA-Z_0-9]*$/,
              G =
                /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/,
              $ = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
            function P(e, t, n) {
              t instanceof a || ((n = t), (t = new a())), n || (n = P.defaults);
              var i,
                o,
                D,
                A,
                E,
                R = n.preferTrailingComment || !1,
                T = r(e, n.alternateCommentMode || !1),
                I = T.next,
                N = T.push,
                L = T.peek,
                x = T.skip,
                M = T.cmnt,
                k = !0,
                O = !1,
                F = t,
                B = n.keepCase
                  ? function (e) {
                      return e;
                    }
                  : d.camelCase;
              function W(e, t, n) {
                var i = P.filename;
                return (
                  n || (P.filename = null),
                  Error(
                    "illegal " +
                      (t || "token") +
                      " '" +
                      e +
                      "' (" +
                      (i ? i + ", " : "") +
                      "line " +
                      T.line +
                      ")"
                  )
                );
              }
              function V() {
                var e,
                  t = [];
                do {
                  if ('"' !== (e = I()) && "'" !== e) throw W(e);
                  t.push(I()), x(e), (e = L());
                } while ('"' === e || "'" === e);
                return t.join("");
              }
              function j(e) {
                var t = I();
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
                    var n = 1;
                    "-" === e.charAt(0) && ((n = -1), (e = e.substring(1)));
                    switch (e) {
                      case "inf":
                      case "INF":
                      case "Inf":
                        return n * (1 / 0);
                      case "nan":
                      case "NAN":
                      case "Nan":
                      case "NaN":
                        return NaN;
                      case "0":
                        return 0;
                    }
                    if (h.test(e)) return n * parseInt(e, 10);
                    if (S.test(e)) return n * parseInt(e, 16);
                    if (b.test(e)) return n * parseInt(e, 8);
                    if (C.test(e)) return n * parseFloat(e);
                    throw W(e, "number", t);
                  })(t, !0);
                } catch (n) {
                  if (e && G.test(t)) return t;
                  throw W(t, "value");
                }
              }
              function U(e, t) {
                var n, i;
                do {
                  !t || ('"' !== (n = L()) && "'" !== n)
                    ? e.push([(i = z(I())), x("to", !0) ? z(I()) : i])
                    : e.push(V());
                } while (x(",", !0));
                x(";");
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
                if (!t && "-" === e.charAt(0)) throw W(e, "id");
                if (y.test(e)) return parseInt(e, 10);
                if (g.test(e)) return parseInt(e, 16);
                if (v.test(e)) return parseInt(e, 8);
                throw W(e, "id");
              }
              function H() {
                if (void 0 !== i) throw W("package");
                if (((i = I()), !G.test(i))) throw W(i, "name");
                (F = F.define(i)), x(";");
              }
              function q() {
                var e,
                  t = L();
                switch (t) {
                  case "weak":
                    (e = D || (D = [])), I();
                    break;
                  case "public":
                    I();
                  default:
                    e = o || (o = []);
                }
                (t = V()), x(";"), e.push(t);
              }
              function Y() {
                if (
                  (x("="), (A = V()), !(O = "proto3" === A) && "proto2" !== A)
                )
                  throw W(A, "syntax");
                x(";");
              }
              function K(e, t) {
                switch (t) {
                  case "option":
                    return Q(e, t), x(";"), !0;
                  case "message":
                    return (
                      (function (e, t) {
                        if (!w.test((t = I()))) throw W(t, "type name");
                        var n = new s(t);
                        J(n, function (e) {
                          if (!K(n, e))
                            switch (e) {
                              case "map":
                                !(function (e) {
                                  x("<");
                                  var t = I();
                                  if (void 0 === f.mapKey[t])
                                    throw W(t, "type");
                                  x(",");
                                  var n = I();
                                  if (!G.test(n)) throw W(n, "type");
                                  x(">");
                                  var i = I();
                                  if (!w.test(i)) throw W(i, "name");
                                  x("=");
                                  var o = new c(B(i), z(I()), t, n);
                                  J(
                                    o,
                                    function (e) {
                                      if ("option" !== e) throw W(e);
                                      Q(o, e), x(";");
                                    },
                                    function () {
                                      te(o);
                                    }
                                  ),
                                    e.add(o);
                                })(n);
                                break;
                              case "required":
                              case "repeated":
                                Z(n, e);
                                break;
                              case "optional":
                                Z(n, O ? "proto3_optional" : "optional");
                                break;
                              case "oneof":
                                !(function (e, t) {
                                  if (!w.test((t = I()))) throw W(t, "name");
                                  var n = new m(B(t));
                                  J(n, function (e) {
                                    "option" === e
                                      ? (Q(n, e), x(";"))
                                      : (N(e), Z(n, "optional"));
                                  }),
                                    e.add(n);
                                })(n, e);
                                break;
                              case "extensions":
                                U(n.extensions || (n.extensions = []));
                                break;
                              case "reserved":
                                U(n.reserved || (n.reserved = []), !0);
                                break;
                              default:
                                if (!O || !G.test(e)) throw W(e);
                                N(e), Z(n, "optional");
                            }
                        }),
                          e.add(n);
                      })(e, t),
                      !0
                    );
                  case "enum":
                    return (
                      (function (e, t) {
                        if (!w.test((t = I()))) throw W(t, "name");
                        var n = new u(t);
                        J(n, function (e) {
                          switch (e) {
                            case "option":
                              Q(n, e), x(";");
                              break;
                            case "reserved":
                              U(n.reserved || (n.reserved = []), !0);
                              break;
                            default:
                              !(function (e, t) {
                                if (!w.test(t)) throw W(t, "name");
                                x("=");
                                var n = z(I(), !0),
                                  i = {};
                                J(
                                  i,
                                  function (e) {
                                    if ("option" !== e) throw W(e);
                                    Q(i, e), x(";");
                                  },
                                  function () {
                                    te(i);
                                  }
                                ),
                                  e.add(t, n, i.comment);
                              })(n, e);
                          }
                        }),
                          e.add(n);
                      })(e, t),
                      !0
                    );
                  case "service":
                    return (
                      (function (e, t) {
                        if (!w.test((t = I()))) throw W(t, "service name");
                        var n = new _(t);
                        J(n, function (e) {
                          if (!K(n, e)) {
                            if ("rpc" !== e) throw W(e);
                            !(function (e, t) {
                              var n = M(),
                                i = t;
                              if (!w.test((t = I()))) throw W(t, "name");
                              var o,
                                r,
                                a,
                                s,
                                l = t;
                              x("("), x("stream", !0) && (r = !0);
                              if (!G.test((t = I()))) throw W(t);
                              (o = t),
                                x(")"),
                                x("returns"),
                                x("("),
                                x("stream", !0) && (s = !0);
                              if (!G.test((t = I()))) throw W(t);
                              (a = t), x(")");
                              var c = new p(l, i, o, a, r, s);
                              (c.comment = n),
                                J(c, function (e) {
                                  if ("option" !== e) throw W(e);
                                  Q(c, e), x(";");
                                }),
                                e.add(c);
                            })(n, e);
                          }
                        }),
                          e.add(n);
                      })(e, t),
                      !0
                    );
                  case "extend":
                    return (
                      (function (e, t) {
                        if (!G.test((t = I()))) throw W(t, "reference");
                        var n = t;
                        J(null, function (t) {
                          switch (t) {
                            case "required":
                            case "repeated":
                              Z(e, t, n);
                              break;
                            case "optional":
                              Z(e, O ? "proto3_optional" : "optional", n);
                              break;
                            default:
                              if (!O || !G.test(t)) throw W(t);
                              N(t), Z(e, "optional", n);
                          }
                        });
                      })(e, t),
                      !0
                    );
                }
                return !1;
              }
              function J(e, t, n) {
                var i = T.line;
                if (
                  (e &&
                    ("string" != typeof e.comment && (e.comment = M()),
                    (e.filename = P.filename)),
                  x("{", !0))
                ) {
                  for (var o; "}" !== (o = I()); ) t(o);
                  x(";", !0);
                } else
                  n && n(),
                    x(";"),
                    e &&
                      ("string" != typeof e.comment || R) &&
                      (e.comment = M(i) || e.comment);
              }
              function Z(e, t, n) {
                var i = I();
                if ("group" !== i) {
                  if (!G.test(i)) throw W(i, "type");
                  var o = I();
                  if (!w.test(o)) throw W(o, "name");
                  (o = B(o)), x("=");
                  var r = new l(o, z(I()), i, t, n);
                  if (
                    (J(
                      r,
                      function (e) {
                        if ("option" !== e) throw W(e);
                        Q(r, e), x(";");
                      },
                      function () {
                        te(r);
                      }
                    ),
                    "proto3_optional" === t)
                  ) {
                    var a = new m("_" + o);
                    r.setOption("proto3_optional", !0), a.add(r), e.add(a);
                  } else e.add(r);
                  O ||
                    !r.repeated ||
                    (void 0 === f.packed[i] && void 0 !== f.basic[i]) ||
                    r.setOption("packed", !1, !0);
                } else
                  !(function (e, t) {
                    var n = I();
                    if (!w.test(n)) throw W(n, "name");
                    var i = d.lcFirst(n);
                    n === i && (n = d.ucFirst(n));
                    x("=");
                    var o = z(I()),
                      r = new s(n);
                    r.group = !0;
                    var a = new l(i, o, n, t);
                    (a.filename = P.filename),
                      J(r, function (e) {
                        switch (e) {
                          case "option":
                            Q(r, e), x(";");
                            break;
                          case "required":
                          case "repeated":
                            Z(r, e);
                            break;
                          case "optional":
                            Z(r, O ? "proto3_optional" : "optional");
                            break;
                          default:
                            throw W(e);
                        }
                      }),
                      e.add(r).add(a);
                  })(e, t);
              }
              function Q(e, t) {
                var n = x("(", !0);
                if (!G.test((t = I()))) throw W(t, "name");
                var i,
                  o = t,
                  r = o;
                n &&
                  (x(")"),
                  (r = o = "(" + o + ")"),
                  (t = L()),
                  $.test(t) && ((i = t.substr(1)), (o += t), I())),
                  x("="),
                  (function (e, t, n, i) {
                    e.setParsedOption && e.setParsedOption(t, n, i);
                  })(e, r, X(e, o), i);
              }
              function X(e, t) {
                if (x("{", !0)) {
                  for (var n = {}; !x("}", !0); ) {
                    if (!w.test((E = I()))) throw W(E, "name");
                    var i,
                      o = E;
                    "{" === L()
                      ? (i = X(e, t + "." + E))
                      : (x(":"),
                        "{" === L()
                          ? (i = X(e, t + "." + E))
                          : ((i = j(!0)), ee(e, t + "." + E, i)));
                    var r = n[o];
                    r && (i = [].concat(r).concat(i)), (n[o] = i), x(",", !0);
                  }
                  return n;
                }
                var a = j(!0);
                return ee(e, t, a), a;
              }
              function ee(e, t, n) {
                e.setOption && e.setOption(t, n);
              }
              function te(e) {
                if (x("[", !0)) {
                  do {
                    Q(e, "option");
                  } while (x(",", !0));
                  x("]");
                }
                return e;
              }
              for (; null !== (E = I()); )
                switch (E) {
                  case "package":
                    if (!k) throw W(E);
                    H();
                    break;
                  case "import":
                    if (!k) throw W(E);
                    q();
                    break;
                  case "syntax":
                    if (!k) throw W(E);
                    Y();
                    break;
                  case "option":
                    Q(F, E), x(";");
                    break;
                  default:
                    if (K(F, E)) {
                      k = !1;
                      continue;
                    }
                    throw W(E);
                }
              return (
                (P.filename = null),
                { package: i, imports: o, weakImports: D, syntax: A, root: t }
              );
            }
            n.exports;
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
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/src/common.js";
        loader.define(
          __cjsMetaURL$G,
          function (e, t, n, i, o) {
            n.exports = s;
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
              n.exports;
          },
          {}
        );
        var __cjsMetaURL$H =
            "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/src/index.js",
          _cjsExports$1;
        loader.define(
          __cjsMetaURL$H,
          function (e, t, n, i, o) {
            var r = (n.exports = t("./index-light"));
            (r.build = "full"),
              (r.tokenize = t("./tokenize")),
              (r.parse = t("./parse")),
              (r.common = t("./common")),
              r.Root._configure(r.Type, r.parse, r.common),
              n.exports;
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
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/index.js";
        loader.define(
          __cjsMetaURL$I,
          function (e, t, n, i, o) {
            (n.exports = t("./src/index")), (_cjsExports$1 = n.exports);
          },
          function () {
            return { "./src/index": __cjsMetaURL$H };
          }
        ),
          __cjsMetaURL$I ||
            loader.throwInvalidWrapper(
              "./index.js",
              "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/index.mjs?cjs=&original=.js"
            ),
          loader.require(__cjsMetaURL$I);
        var __cjsMetaURL$J =
            "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/node_modules/protobufjs/minimal.js",
          _cjsExports$2;
        loader.define(
          __cjsMetaURL$J,
          function (e, t, n, i, o) {
            (n.exports = t("./src/index-minimal")), n.exports;
          },
          function () {
            return { "./src/index-minimal": __cjsMetaURL$h };
          }
        );
        var __cjsMetaURL$K =
            "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/assets/game/Script/Proto/smProto.js",
          _dec$G,
          _dec2$l,
          _dec3$7,
          _class$G,
          _class2$l,
          _descriptor$l,
          _descriptor2$9;
        loader.define(
          __cjsMetaURL$K,
          function (e, t, n, i, o) {
            var r,
              a = t("protobufjs/minimal"),
              s = a.Reader,
              l = a.Writer,
              c = a.util,
              m = a.roots.default || (a.roots.default = {});
            (m.smProto =
              (((r = {}).Column = (function () {
                function e(e) {
                  if (((this.Col = []), e))
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.Col = c.emptyArray),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = l.create()), null != e.Col && e.Col.length)
                    ) {
                      t.uint32(10).fork();
                      for (var n = 0; n < e.Col.length; ++n) t.int32(e.Col[n]);
                      t.ldelim();
                    }
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof s || (e = s.create(e));
                    for (
                      var n = void 0 === t ? e.len : e.pos + t,
                        i = new m.smProto.Column();
                      e.pos < n;

                    ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          if (
                            ((i.Col && i.Col.length) || (i.Col = []),
                            2 == (7 & o))
                          )
                            for (var r = e.uint32() + e.pos; e.pos < r; )
                              i.Col.push(e.int32());
                          else i.Col.push(e.int32());
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    return i;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/smProto.Column"
                    );
                  }),
                  e
                );
              })()),
              (r.AwardData = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.Index = 0),
                  (e.prototype.Symbol = 0),
                  (e.prototype.Count = 0),
                  (e.prototype.Win = 0),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = l.create()),
                      null != e.Index &&
                        Object.hasOwnProperty.call(e, "Index") &&
                        t.uint32(8).int32(e.Index),
                      null != e.Symbol &&
                        Object.hasOwnProperty.call(e, "Symbol") &&
                        t.uint32(16).int32(e.Symbol),
                      null != e.Count &&
                        Object.hasOwnProperty.call(e, "Count") &&
                        t.uint32(24).int32(e.Count),
                      null != e.Win &&
                        Object.hasOwnProperty.call(e, "Win") &&
                        t.uint32(33).double(e.Win),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof s || (e = s.create(e));
                    for (
                      var n = void 0 === t ? e.len : e.pos + t,
                        i = new m.smProto.AwardData();
                      e.pos < n;

                    ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          i.Index = e.int32();
                          break;
                        case 2:
                          i.Symbol = e.int32();
                          break;
                        case 3:
                          i.Count = e.int32();
                          break;
                        case 4:
                          i.Win = e.double();
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    return i;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/smProto.AwardData"
                    );
                  }),
                  e
                );
              })()),
              (r.SSymbol = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.Pos = 0),
                  (e.prototype.Mul = 0),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = l.create()),
                      null != e.Pos &&
                        Object.hasOwnProperty.call(e, "Pos") &&
                        t.uint32(8).int32(e.Pos),
                      null != e.Mul &&
                        Object.hasOwnProperty.call(e, "Mul") &&
                        t.uint32(17).double(e.Mul),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof s || (e = s.create(e));
                    for (
                      var n = void 0 === t ? e.len : e.pos + t,
                        i = new m.smProto.SSymbol();
                      e.pos < n;

                    ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          i.Pos = e.int32();
                          break;
                        case 2:
                          i.Mul = e.double();
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    return i;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/smProto.SSymbol"
                    );
                  }),
                  e
                );
              })()),
              (r.CcSymbol = (function () {
                function e(e) {
                  if (((this.CcPos = []), e))
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.SrcPos = 0),
                  (e.prototype.Mul = 0),
                  (e.prototype.CcPos = c.emptyArray),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = l.create()),
                      null != e.SrcPos &&
                        Object.hasOwnProperty.call(e, "SrcPos") &&
                        t.uint32(8).int32(e.SrcPos),
                      null != e.Mul &&
                        Object.hasOwnProperty.call(e, "Mul") &&
                        t.uint32(17).double(e.Mul),
                      null != e.CcPos && e.CcPos.length)
                    ) {
                      t.uint32(26).fork();
                      for (var n = 0; n < e.CcPos.length; ++n)
                        t.int32(e.CcPos[n]);
                      t.ldelim();
                    }
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof s || (e = s.create(e));
                    for (
                      var n = void 0 === t ? e.len : e.pos + t,
                        i = new m.smProto.CcSymbol();
                      e.pos < n;

                    ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          i.SrcPos = e.int32();
                          break;
                        case 2:
                          i.Mul = e.double();
                          break;
                        case 3:
                          if (
                            ((i.CcPos && i.CcPos.length) || (i.CcPos = []),
                            2 == (7 & o))
                          )
                            for (var r = e.uint32() + e.pos; e.pos < r; )
                              i.CcPos.push(e.int32());
                          else i.CcPos.push(e.int32());
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    return i;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/smProto.CcSymbol"
                    );
                  }),
                  e
                );
              })()),
              (r.CvSymbol = (function () {
                function e(e) {
                  if (((this.CvPos = []), e))
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.TargetSymbol = 0),
                  (e.prototype.SrcPos = 0),
                  (e.prototype.CvPos = c.emptyArray),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = l.create()),
                      null != e.TargetSymbol &&
                        Object.hasOwnProperty.call(e, "TargetSymbol") &&
                        t.uint32(8).int32(e.TargetSymbol),
                      null != e.SrcPos &&
                        Object.hasOwnProperty.call(e, "SrcPos") &&
                        t.uint32(16).int32(e.SrcPos),
                      null != e.CvPos && e.CvPos.length)
                    ) {
                      t.uint32(26).fork();
                      for (var n = 0; n < e.CvPos.length; ++n)
                        t.int32(e.CvPos[n]);
                      t.ldelim();
                    }
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof s || (e = s.create(e));
                    for (
                      var n = void 0 === t ? e.len : e.pos + t,
                        i = new m.smProto.CvSymbol();
                      e.pos < n;

                    ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          i.TargetSymbol = e.int32();
                          break;
                        case 2:
                          i.SrcPos = e.int32();
                          break;
                        case 3:
                          if (
                            ((i.CvPos && i.CvPos.length) || (i.CvPos = []),
                            2 == (7 & o))
                          )
                            for (var r = e.uint32() + e.pos; e.pos < r; )
                              i.CvPos.push(e.int32());
                          else i.CvPos.push(e.int32());
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    return i;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/smProto.CvSymbol"
                    );
                  }),
                  e
                );
              })()),
              (r.ColumnM = (function () {
                function e(e) {
                  if (((this.Colm = []), e))
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.Colm = c.emptyArray),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = l.create()), null != e.Colm && e.Colm.length)
                    ) {
                      t.uint32(10).fork();
                      for (var n = 0; n < e.Colm.length; ++n)
                        t.double(e.Colm[n]);
                      t.ldelim();
                    }
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof s || (e = s.create(e));
                    for (
                      var n = void 0 === t ? e.len : e.pos + t,
                        i = new m.smProto.ColumnM();
                      e.pos < n;

                    ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          if (
                            ((i.Colm && i.Colm.length) || (i.Colm = []),
                            2 == (7 & o))
                          )
                            for (var r = e.uint32() + e.pos; e.pos < r; )
                              i.Colm.push(e.double());
                          else i.Colm.push(e.double());
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    return i;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/smProto.ColumnM"
                    );
                  }),
                  e
                );
              })()),
              (r.MusteryPack = (function () {
                function e(e) {
                  if (
                    ((this.CoinMul = []),
                    (this.Mult = []),
                    (this.Collector = []),
                    (this.Convert = []),
                    e)
                  )
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.GoldenType = 0),
                  (e.prototype.CoinMul = c.emptyArray),
                  (e.prototype.Mult = c.emptyArray),
                  (e.prototype.Collector = c.emptyArray),
                  (e.prototype.Convert = c.emptyArray),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = l.create()),
                      null != e.GoldenType &&
                        Object.hasOwnProperty.call(e, "GoldenType") &&
                        t.uint32(8).int32(e.GoldenType),
                      null != e.CoinMul && e.CoinMul.length)
                    )
                      for (var n = 0; n < e.CoinMul.length; ++n)
                        m.smProto.ColumnM.encode(
                          e.CoinMul[n],
                          t.uint32(18).fork()
                        ).ldelim();
                    if (null != e.Mult && e.Mult.length)
                      for (n = 0; n < e.Mult.length; ++n)
                        m.smProto.SSymbol.encode(
                          e.Mult[n],
                          t.uint32(26).fork()
                        ).ldelim();
                    if (null != e.Collector && e.Collector.length)
                      for (n = 0; n < e.Collector.length; ++n)
                        m.smProto.CcSymbol.encode(
                          e.Collector[n],
                          t.uint32(34).fork()
                        ).ldelim();
                    if (null != e.Convert && e.Convert.length)
                      for (n = 0; n < e.Convert.length; ++n)
                        m.smProto.CvSymbol.encode(
                          e.Convert[n],
                          t.uint32(42).fork()
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof s || (e = s.create(e));
                    for (
                      var n = void 0 === t ? e.len : e.pos + t,
                        i = new m.smProto.MusteryPack();
                      e.pos < n;

                    ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          i.GoldenType = e.int32();
                          break;
                        case 2:
                          (i.CoinMul && i.CoinMul.length) || (i.CoinMul = []),
                            i.CoinMul.push(
                              m.smProto.ColumnM.decode(e, e.uint32())
                            );
                          break;
                        case 3:
                          (i.Mult && i.Mult.length) || (i.Mult = []),
                            i.Mult.push(
                              m.smProto.SSymbol.decode(e, e.uint32())
                            );
                          break;
                        case 4:
                          (i.Collector && i.Collector.length) ||
                            (i.Collector = []),
                            i.Collector.push(
                              m.smProto.CcSymbol.decode(e, e.uint32())
                            );
                          break;
                        case 5:
                          (i.Convert && i.Convert.length) || (i.Convert = []),
                            i.Convert.push(
                              m.smProto.CvSymbol.decode(e, e.uint32())
                            );
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    return i;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/smProto.MusteryPack"
                    );
                  }),
                  e
                );
              })()),
              (r.ComboStageInfo = (function () {
                function e(e) {
                  if (
                    ((this.ComboStageSymbol = []), (this.AwardDataVec = []), e)
                  )
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.ComboStageSymbol = c.emptyArray),
                  (e.prototype.ComboStageWin = 0),
                  (e.prototype.LinWin = 0),
                  (e.prototype.AwardDataVec = c.emptyArray),
                  (e.prototype.GoldenWin = 0),
                  (e.prototype.MysteryGolden = null),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = l.create()),
                      null != e.ComboStageSymbol && e.ComboStageSymbol.length)
                    )
                      for (var n = 0; n < e.ComboStageSymbol.length; ++n)
                        m.smProto.Column.encode(
                          e.ComboStageSymbol[n],
                          t.uint32(10).fork()
                        ).ldelim();
                    if (
                      (null != e.ComboStageWin &&
                        Object.hasOwnProperty.call(e, "ComboStageWin") &&
                        t.uint32(17).double(e.ComboStageWin),
                      null != e.LinWin &&
                        Object.hasOwnProperty.call(e, "LinWin") &&
                        t.uint32(25).double(e.LinWin),
                      null != e.AwardDataVec && e.AwardDataVec.length)
                    )
                      for (n = 0; n < e.AwardDataVec.length; ++n)
                        m.smProto.AwardData.encode(
                          e.AwardDataVec[n],
                          t.uint32(34).fork()
                        ).ldelim();
                    return (
                      null != e.GoldenWin &&
                        Object.hasOwnProperty.call(e, "GoldenWin") &&
                        t.uint32(41).double(e.GoldenWin),
                      null != e.MysteryGolden &&
                        Object.hasOwnProperty.call(e, "MysteryGolden") &&
                        m.smProto.MusteryPack.encode(
                          e.MysteryGolden,
                          t.uint32(50).fork()
                        ).ldelim(),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof s || (e = s.create(e));
                    for (
                      var n = void 0 === t ? e.len : e.pos + t,
                        i = new m.smProto.ComboStageInfo();
                      e.pos < n;

                    ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          (i.ComboStageSymbol && i.ComboStageSymbol.length) ||
                            (i.ComboStageSymbol = []),
                            i.ComboStageSymbol.push(
                              m.smProto.Column.decode(e, e.uint32())
                            );
                          break;
                        case 2:
                          i.ComboStageWin = e.double();
                          break;
                        case 3:
                          i.LinWin = e.double();
                          break;
                        case 4:
                          (i.AwardDataVec && i.AwardDataVec.length) ||
                            (i.AwardDataVec = []),
                            i.AwardDataVec.push(
                              m.smProto.AwardData.decode(e, e.uint32())
                            );
                          break;
                        case 5:
                          i.GoldenWin = e.double();
                          break;
                        case 6:
                          i.MysteryGolden = m.smProto.MusteryPack.decode(
                            e,
                            e.uint32()
                          );
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    return i;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/smProto.ComboStageInfo"
                    );
                  }),
                  e
                );
              })()),
              (r.RoundInfo = (function () {
                function e(e) {
                  if (
                    ((this.ComboStageData = []),
                    (this.GoldPos = []),
                    (this.PatternPos = []),
                    e)
                  )
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.ComboStageData = c.emptyArray),
                  (e.prototype.RoundWin = 0),
                  (e.prototype.MysterySymbol = 0),
                  (e.prototype.FinalMult = 0),
                  (e.prototype.GoldPos = c.emptyArray),
                  (e.prototype.FreeTotalRound = 0),
                  (e.prototype.FreeMysteryFlag = !1),
                  (e.prototype.ScatterCount = 0),
                  (e.prototype.AwardTypeFlag = 0),
                  (e.prototype.PatternPos = c.emptyArray),
                  (e.prototype.StartMult = 0),
                  (e.prototype.MaxFlag = !1),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = l.create()),
                      null != e.ComboStageData && e.ComboStageData.length)
                    )
                      for (var n = 0; n < e.ComboStageData.length; ++n)
                        m.smProto.ComboStageInfo.encode(
                          e.ComboStageData[n],
                          t.uint32(10).fork()
                        ).ldelim();
                    if (
                      (null != e.RoundWin &&
                        Object.hasOwnProperty.call(e, "RoundWin") &&
                        t.uint32(17).double(e.RoundWin),
                      null != e.MysterySymbol &&
                        Object.hasOwnProperty.call(e, "MysterySymbol") &&
                        t.uint32(24).int32(e.MysterySymbol),
                      null != e.FinalMult &&
                        Object.hasOwnProperty.call(e, "FinalMult") &&
                        t.uint32(33).double(e.FinalMult),
                      null != e.GoldPos && e.GoldPos.length)
                    ) {
                      for (
                        t.uint32(42).fork(), n = 0;
                        n < e.GoldPos.length;
                        ++n
                      )
                        t.int32(e.GoldPos[n]);
                      t.ldelim();
                    }
                    if (
                      (null != e.FreeTotalRound &&
                        Object.hasOwnProperty.call(e, "FreeTotalRound") &&
                        t.uint32(48).int32(e.FreeTotalRound),
                      null != e.FreeMysteryFlag &&
                        Object.hasOwnProperty.call(e, "FreeMysteryFlag") &&
                        t.uint32(56).bool(e.FreeMysteryFlag),
                      null != e.ScatterCount &&
                        Object.hasOwnProperty.call(e, "ScatterCount") &&
                        t.uint32(64).int32(e.ScatterCount),
                      null != e.AwardTypeFlag &&
                        Object.hasOwnProperty.call(e, "AwardTypeFlag") &&
                        t.uint32(72).int32(e.AwardTypeFlag),
                      null != e.PatternPos && e.PatternPos.length)
                    ) {
                      for (
                        t.uint32(82).fork(), n = 0;
                        n < e.PatternPos.length;
                        ++n
                      )
                        t.int32(e.PatternPos[n]);
                      t.ldelim();
                    }
                    return (
                      null != e.StartMult &&
                        Object.hasOwnProperty.call(e, "StartMult") &&
                        t.uint32(89).double(e.StartMult),
                      null != e.MaxFlag &&
                        Object.hasOwnProperty.call(e, "MaxFlag") &&
                        t.uint32(96).bool(e.MaxFlag),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof s || (e = s.create(e));
                    for (
                      var n = void 0 === t ? e.len : e.pos + t,
                        i = new m.smProto.RoundInfo();
                      e.pos < n;

                    ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          (i.ComboStageData && i.ComboStageData.length) ||
                            (i.ComboStageData = []),
                            i.ComboStageData.push(
                              m.smProto.ComboStageInfo.decode(e, e.uint32())
                            );
                          break;
                        case 2:
                          i.RoundWin = e.double();
                          break;
                        case 3:
                          i.MysterySymbol = e.int32();
                          break;
                        case 4:
                          i.FinalMult = e.double();
                          break;
                        case 5:
                          if (
                            ((i.GoldPos && i.GoldPos.length) ||
                              (i.GoldPos = []),
                            2 == (7 & o))
                          )
                            for (var r = e.uint32() + e.pos; e.pos < r; )
                              i.GoldPos.push(e.int32());
                          else i.GoldPos.push(e.int32());
                          break;
                        case 6:
                          i.FreeTotalRound = e.int32();
                          break;
                        case 7:
                          i.FreeMysteryFlag = e.bool();
                          break;
                        case 8:
                          i.ScatterCount = e.int32();
                          break;
                        case 9:
                          i.AwardTypeFlag = e.int32();
                          break;
                        case 10:
                          if (
                            ((i.PatternPos && i.PatternPos.length) ||
                              (i.PatternPos = []),
                            2 == (7 & o))
                          )
                            for (r = e.uint32() + e.pos; e.pos < r; )
                              i.PatternPos.push(e.int32());
                          else i.PatternPos.push(e.int32());
                          break;
                        case 11:
                          i.StartMult = e.double();
                          break;
                        case 12:
                          i.MaxFlag = e.bool();
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    return i;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/smProto.RoundInfo"
                    );
                  }),
                  e
                );
              })()),
              (r.SpinAck = (function () {
                function e(e) {
                  if (((this.RoundQueue = []), e))
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.RoundQueue = c.emptyArray),
                  (e.prototype.FreeTotalWin = 0),
                  (e.prototype.FreeType = 0),
                  (e.prototype.TotalWin = 0),
                  (e.prototype.ShowIndex = ""),
                  (e.prototype.NowMoney = 0),
                  (e.prototype.AckType = 0),
                  (e.prototype.RTP = 0),
                  (e.prototype.LID = 0),
                  (e.prototype.RID = 0),
                  (e.prototype.IsBuy = !1),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = l.create()),
                      null != e.RoundQueue && e.RoundQueue.length)
                    )
                      for (var n = 0; n < e.RoundQueue.length; ++n)
                        m.smProto.RoundInfo.encode(
                          e.RoundQueue[n],
                          t.uint32(10).fork()
                        ).ldelim();
                    return (
                      null != e.FreeTotalWin &&
                        Object.hasOwnProperty.call(e, "FreeTotalWin") &&
                        t.uint32(17).double(e.FreeTotalWin),
                      null != e.FreeType &&
                        Object.hasOwnProperty.call(e, "FreeType") &&
                        t.uint32(24).int32(e.FreeType),
                      null != e.TotalWin &&
                        Object.hasOwnProperty.call(e, "TotalWin") &&
                        t.uint32(33).double(e.TotalWin),
                      null != e.ShowIndex &&
                        Object.hasOwnProperty.call(e, "ShowIndex") &&
                        t.uint32(42).string(e.ShowIndex),
                      null != e.NowMoney &&
                        Object.hasOwnProperty.call(e, "NowMoney") &&
                        t.uint32(49).double(e.NowMoney),
                      null != e.AckType &&
                        Object.hasOwnProperty.call(e, "AckType") &&
                        t.uint32(56).int32(e.AckType),
                      null != e.RTP &&
                        Object.hasOwnProperty.call(e, "RTP") &&
                        t.uint32(65).double(e.RTP),
                      null != e.LID &&
                        Object.hasOwnProperty.call(e, "LID") &&
                        t.uint32(72).int32(e.LID),
                      null != e.RID &&
                        Object.hasOwnProperty.call(e, "RID") &&
                        t.uint32(80).int32(e.RID),
                      null != e.IsBuy &&
                        Object.hasOwnProperty.call(e, "IsBuy") &&
                        t.uint32(88).bool(e.IsBuy),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof s || (e = s.create(e));
                    for (
                      var n = void 0 === t ? e.len : e.pos + t,
                        i = new m.smProto.SpinAck();
                      e.pos < n;

                    ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          (i.RoundQueue && i.RoundQueue.length) ||
                            (i.RoundQueue = []),
                            i.RoundQueue.push(
                              m.smProto.RoundInfo.decode(e, e.uint32())
                            );
                          break;
                        case 2:
                          i.FreeTotalWin = e.double();
                          break;
                        case 3:
                          i.FreeType = e.int32();
                          break;
                        case 4:
                          i.TotalWin = e.double();
                          break;
                        case 5:
                          i.ShowIndex = e.string();
                          break;
                        case 6:
                          i.NowMoney = e.double();
                          break;
                        case 7:
                          i.AckType = e.int32();
                          break;
                        case 8:
                          i.RTP = e.double();
                          break;
                        case 9:
                          i.LID = e.int32();
                          break;
                        case 10:
                          i.RID = e.int32();
                          break;
                        case 11:
                          i.IsBuy = e.bool();
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    return i;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/smProto.SpinAck"
                    );
                  }),
                  e
                );
              })()),
              (r.GameInfo = (function () {
                function e(e) {
                  if (((this.BetMap = []), e))
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.BetMap = c.emptyArray),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = l.create()),
                      null != e.BetMap && e.BetMap.length)
                    )
                      for (var n = 0; n < e.BetMap.length; ++n)
                        m.smProto.BetInfo.encode(
                          e.BetMap[n],
                          t.uint32(10).fork()
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof s || (e = s.create(e));
                    for (
                      var n = void 0 === t ? e.len : e.pos + t,
                        i = new m.smProto.GameInfo();
                      e.pos < n;

                    ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          (i.BetMap && i.BetMap.length) || (i.BetMap = []),
                            i.BetMap.push(
                              m.smProto.BetInfo.decode(e, e.uint32())
                            );
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    return i;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/smProto.GameInfo"
                    );
                  }),
                  e
                );
              })()),
              (r.ColPattern = (function () {
                function e(e) {
                  if (((this.NormalSymbol = []), (this.Gold = []), e))
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.Pos = 0),
                  (e.prototype.Col = 0),
                  (e.prototype.NormalSymbol = c.emptyArray),
                  (e.prototype.Gold = c.emptyArray),
                  (e.prototype.PRT = 0),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = l.create()),
                      null != e.Pos &&
                        Object.hasOwnProperty.call(e, "Pos") &&
                        t.uint32(8).int32(e.Pos),
                      null != e.Col &&
                        Object.hasOwnProperty.call(e, "Col") &&
                        t.uint32(16).int32(e.Col),
                      null != e.NormalSymbol && e.NormalSymbol.length)
                    ) {
                      t.uint32(26).fork();
                      for (var n = 0; n < e.NormalSymbol.length; ++n)
                        t.int32(e.NormalSymbol[n]);
                      t.ldelim();
                    }
                    if (null != e.Gold && e.Gold.length) {
                      for (t.uint32(34).fork(), n = 0; n < e.Gold.length; ++n)
                        t.int32(e.Gold[n]);
                      t.ldelim();
                    }
                    return (
                      null != e.PRT &&
                        Object.hasOwnProperty.call(e, "PRT") &&
                        t.uint32(40).int32(e.PRT),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof s || (e = s.create(e));
                    for (
                      var n = void 0 === t ? e.len : e.pos + t,
                        i = new m.smProto.ColPattern();
                      e.pos < n;

                    ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          i.Pos = e.int32();
                          break;
                        case 2:
                          i.Col = e.int32();
                          break;
                        case 3:
                          if (
                            ((i.NormalSymbol && i.NormalSymbol.length) ||
                              (i.NormalSymbol = []),
                            2 == (7 & o))
                          )
                            for (var r = e.uint32() + e.pos; e.pos < r; )
                              i.NormalSymbol.push(e.int32());
                          else i.NormalSymbol.push(e.int32());
                          break;
                        case 4:
                          if (
                            ((i.Gold && i.Gold.length) || (i.Gold = []),
                            2 == (7 & o))
                          )
                            for (r = e.uint32() + e.pos; e.pos < r; )
                              i.Gold.push(e.int32());
                          else i.Gold.push(e.int32());
                          break;
                        case 5:
                          i.PRT = e.int32();
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    return i;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/smProto.ColPattern"
                    );
                  }),
                  e
                );
              })()),
              (r.BetInfo = (function () {
                function e(e) {
                  if (((this.PSymbol = []), (this.PMap = []), e))
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.Bet = 0),
                  (e.prototype.PSymbol = c.emptyArray),
                  (e.prototype.PMap = c.emptyArray),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = l.create()),
                      null != e.Bet &&
                        Object.hasOwnProperty.call(e, "Bet") &&
                        t.uint32(9).double(e.Bet),
                      null != e.PSymbol && e.PSymbol.length)
                    )
                      for (var n = 0; n < e.PSymbol.length; ++n)
                        m.smProto.Column.encode(
                          e.PSymbol[n],
                          t.uint32(18).fork()
                        ).ldelim();
                    if (null != e.PMap && e.PMap.length)
                      for (n = 0; n < e.PMap.length; ++n)
                        m.smProto.ColPattern.encode(
                          e.PMap[n],
                          t.uint32(26).fork()
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof s || (e = s.create(e));
                    for (
                      var n = void 0 === t ? e.len : e.pos + t,
                        i = new m.smProto.BetInfo();
                      e.pos < n;

                    ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          i.Bet = e.double();
                          break;
                        case 2:
                          (i.PSymbol && i.PSymbol.length) || (i.PSymbol = []),
                            i.PSymbol.push(
                              m.smProto.Column.decode(e, e.uint32())
                            );
                          break;
                        case 3:
                          (i.PMap && i.PMap.length) || (i.PMap = []),
                            i.PMap.push(
                              m.smProto.ColPattern.decode(e, e.uint32())
                            );
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    return i;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/smProto.BetInfo"
                    );
                  }),
                  e
                );
              })()),
              (r.StateInfo = (function () {
                function e(e) {
                  if (((this.NowPMap = []), (this.BetMap = []), e))
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.NowBet = 0),
                  (e.prototype.NowPMap = c.emptyArray),
                  (e.prototype.BetMap = c.emptyArray),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = l.create()),
                      null != e.NowBet &&
                        Object.hasOwnProperty.call(e, "NowBet") &&
                        t.uint32(9).double(e.NowBet),
                      null != e.NowPMap && e.NowPMap.length)
                    )
                      for (var n = 0; n < e.NowPMap.length; ++n)
                        m.smProto.ColPattern.encode(
                          e.NowPMap[n],
                          t.uint32(18).fork()
                        ).ldelim();
                    if (null != e.BetMap && e.BetMap.length)
                      for (n = 0; n < e.BetMap.length; ++n)
                        m.smProto.BetInfo.encode(
                          e.BetMap[n],
                          t.uint32(26).fork()
                        ).ldelim();
                    return t;
                  }),
                  (e.decode = function (e, t) {
                    e instanceof s || (e = s.create(e));
                    for (
                      var n = void 0 === t ? e.len : e.pos + t,
                        i = new m.smProto.StateInfo();
                      e.pos < n;

                    ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          i.NowBet = e.double();
                          break;
                        case 2:
                          (i.NowPMap && i.NowPMap.length) || (i.NowPMap = []),
                            i.NowPMap.push(
                              m.smProto.ColPattern.decode(e, e.uint32())
                            );
                          break;
                        case 3:
                          (i.BetMap && i.BetMap.length) || (i.BetMap = []),
                            i.BetMap.push(
                              m.smProto.BetInfo.decode(e, e.uint32())
                            );
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    return i;
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/smProto.StateInfo"
                    );
                  }),
                  e
                );
              })()),
              r)),
              (n.exports = m),
              (_cjsExports$2 = n.exports);
          },
          function () {
            return { "protobufjs/minimal": __cjsMetaURL$J };
          }
        ),
          __cjsMetaURL$K ||
            loader.throwInvalidWrapper(
              "./smProto.js",
              "file:///Users/m2mac1/Desktop/H5/Client/workspace/SafariMystery/Client/Thai_UAT/assets/game/Script/Proto/smProto.mjs?cjs=&original=.js"
            ),
          loader.require(__cjsMetaURL$K),
          cclegacy._RF.push(
            {},
            "16063mqr69AOaWtKVfdXKB1",
            "CharacterSpine",
            void 0
          );
        var AnimName$h = {
            Hit: "_Hit",
            Idle: "_Idle",
            Mystery: "_Mystery",
            Win: "_Win",
            ScatterWin_End: "_ScatterWin_End",
            ScatterWin_Loop: "_ScatterWin_Loop",
            ScatterWin_Start: "_ScatterWin_Start",
            ScatterWin_Win: "_ScatterWin_Win",
            End: "S_End",
            Start: "S_Start",
          },
          ccclass$G = _decorator.ccclass,
          property$l = _decorator.property,
          CharacterSpine =
            ((_dec$G = ccclass$G("CharacterSpine")),
            (_dec2$l = property$l({
              type: sp.Skeleton,
              tooltip: "橫版角色spine",
            })),
            (_dec3$7 = property$l({
              type: sp.Skeleton,
              tooltip: "直版角色spine",
            })),
            _dec$G(
              ((_class2$l = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(i)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_spineL",
                      _descriptor$l,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_spineS",
                      _descriptor2$9,
                      _assertThisInitialized(t)
                    ),
                    (t.m_gameView = null),
                    (t.m_playName = null),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.Init = function (e) {
                    this.m_gameView = e;
                  }),
                  (n.SetMix = function () {
                    this.m_spineL.setMix(
                      "L" + AnimName$h.Idle,
                      "L" + AnimName$h.ScatterWin_Win,
                      0.25
                    ),
                      this.m_spineS.setMix(
                        "S" + AnimName$h.Idle,
                        "S" + AnimName$h.ScatterWin_Win,
                        0.25
                      ),
                      this.m_spineL.setMix(
                        "L" + AnimName$h.ScatterWin_End,
                        "L" + AnimName$h.ScatterWin_Win,
                        0.25
                      ),
                      this.m_spineS.setMix(
                        "S" + AnimName$h.ScatterWin_End,
                        "S" + AnimName$h.ScatterWin_Win,
                        0.25
                      );
                  }),
                  (n.PlayIdle = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (this.m_playName != AnimName$h.Idle) {
                                    e.next = 2;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 2:
                                  this.PlayAnimation(AnimName$h.Idle, !0);
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
                  (n.PlayWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$h.Win)
                                  );
                                case 2:
                                  this.PlayAnimation(AnimName$h.Idle, !0);
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
                  (n.PlayMystery = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$h.Mystery)
                                  );
                                case 2:
                                  this.PlayAnimation(AnimName$h.Idle, !0);
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
                  (n.PlayHit = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$h.Hit)
                                  );
                                case 2:
                                  this.PlayAnimation(AnimName$h.Idle, !0);
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
                  (n.PlayNearWinStart = (function () {
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
                                      AnimName$h.ScatterWin_Start
                                    )
                                  );
                                case 2:
                                  this.PlayAnimation(
                                    AnimName$h.ScatterWin_Loop,
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
                  (n.PlayNearWinEnd = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, n, i;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (t =
                                      this.m_gameView.SpinAck.RoundQueue[
                                        Game_Define.RoundIdx
                                      ]),
                                    (n = this.m_gameView.PlateSymbolTo2DArray(
                                      t.ComboStageData[Game_Define.ComboIdx]
                                        .ComboStageSymbol
                                    )),
                                    (i = this.m_gameView.GetScatterCount(n)),
                                    (e.next = 5),
                                    this.PlayAnimation(
                                      AnimName$h.ScatterWin_End
                                    )
                                  );
                                case 5:
                                  i < 3 &&
                                    this.PlayAnimation(AnimName$h.Idle, !0);
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
                  (n.PlayScatterWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    node.Play(Game_Define.AudioClips.Lion_Roar),
                                    (e.next = 3),
                                    this.PlayAnimation(
                                      AnimName$h.ScatterWin_Win
                                    )
                                  );
                                case 3:
                                  this.PlayAnimation(AnimName$h.Idle, !0);
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
                  (n.OnRotation = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  this.m_gameView.IsLandscape
                                    ? ((this.m_spineL.node.getComponent(
                                        UIOpacity
                                      ).opacity = 255),
                                      (this.m_spineS.node.getComponent(
                                        UIOpacity
                                      ).opacity = 0.1))
                                    : ((this.m_spineL.node.getComponent(
                                        UIOpacity
                                      ).opacity = 0.1),
                                      (this.m_spineS.node.getComponent(
                                        UIOpacity
                                      ).opacity = 255));
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
                  (n.PlayAnimation = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === n && (n = !1),
                                    Game_Define.DebugMode &&
                                      ((this.m_spineL.getState().timeScale =
                                        Game_Define.DebugSpeed),
                                      (this.m_spineS.getState().timeScale =
                                        Game_Define.DebugSpeed)),
                                    (this.m_playName = t),
                                    SpineKit.PlayAnimation(
                                      this.m_spineL,
                                      "L" + t,
                                      n
                                    ),
                                    (e.next = 6),
                                    SpineKit.PlayAnimation(
                                      this.m_spineS,
                                      "S" + t,
                                      n
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
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  t
                );
              })(Component)),
              (_descriptor$l = _applyDecoratedDescriptor(
                _class2$l.prototype,
                "m_spineL",
                [_dec2$l],
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
                _class2$l.prototype,
                "m_spineS",
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
              (_class$G = _class2$l))
            ) || _class$G);
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "0b99dW6uWhL7p9i63uO47TZ",
            "SingleColumnSymbol",
            void 0
          );
        var CoinFonts = { BRONZE: 0, SILVER: 1, GOLD: 2 },
          MultiSprites = { x2: 0, x3: 1, x5: 2, x10: 3 },
          SingleColumnSymbol = (function (e) {
            function t() {
              for (
                var t, n = arguments.length, i = new Array(n), o = 0;
                o < n;
                o++
              )
                i[o] = arguments[o];
              return (
                ((t = e.call.apply(e, [this].concat(i)) || this).m_parentNode =
                  null),
                (t.m_symbolNode = new Node()),
                (t.m_labelNode = new Node()),
                (t.m_multiNode = new Node()),
                (t.m_data = null),
                (t.m_singleSlotReels = null),
                (t.m_soltReels = null),
                (t.m_name = ""),
                (t.m_fonts = []),
                (t.m_multiSprites = null),
                t
              );
            }
            _inheritsLoose(t, e);
            var n = t.prototype;
            return (
              (n.Init = function (e, t, n, i, o, r) {
                (this.m_parentNode = e),
                  (this.m_soltReels = t),
                  (this.m_singleSlotReels = n),
                  (this.m_data = i);
                var a = instantiate(r);
                (this.m_name = o), (a.name = o);
                var s = a.getComponent(Sprite);
                (s.type = Sprite.Type.SIMPLE),
                  (s.sizeMode = Sprite.SizeMode.RAW),
                  (s.trim = !1),
                  this.m_parentNode.addChild(a),
                  (this.m_symbolNode = a),
                  (this.m_labelNode =
                    this.m_symbolNode.getChildByName("Label")),
                  (this.m_multiNode =
                    this.m_symbolNode.getChildByName("Multi"));
              }),
              (n.SetSymbol = function (e) {
                if (
                  (e == Game_Define.Symbol.Symbol_Scatter ? (e = 8) : (e -= 12),
                  this.m_symbolNode ||
                    (this.m_symbolNode = this.GetNewSymbolNode()),
                  !(
                    (null === this.m_symbolNode &&
                      void 0 === this.m_symbolNode) ||
                    (null === this.m_data && void 0 === this.m_data)
                  ))
                ) {
                  var t = this.m_symbolNode.getComponent(Sprite);
                  t || (t = this.m_symbolNode.addComponent(Sprite)),
                    (t.spriteFrame =
                      this.m_singleSlotReels.GetSymbolSpriteFrame(e)),
                    (this.m_data = e);
                }
              }),
              (n.SetLabel = function (e, t) {
                if (
                  e == Game_Define.SpecialSymbol.Symbol_Bronze_Coin &&
                  t > 0
                ) {
                  (this.m_labelNode.getComponent(Label).string = t.toString()),
                    (this.m_labelNode.getComponent(Label).useSystemFont = !1);
                  var n = this.m_symbolNode.getComponent(Sprite);
                  t >= 250
                    ? ((n.spriteFrame =
                        this.m_singleSlotReels.GetSymbolSpriteFrame(
                          Game_Define.SpecialSymbol.Symbol_Super_Coin - 12
                        )),
                      (this.m_labelNode.getComponent(Label).font =
                        this.m_fonts[CoinFonts.GOLD]))
                    : t >= 50 && t <= 249
                    ? ((n.spriteFrame =
                        this.m_singleSlotReels.GetSymbolSpriteFrame(
                          Game_Define.SpecialSymbol.Symbol_Gold_Coin - 12
                        )),
                      (this.m_labelNode.getComponent(Label).font =
                        this.m_fonts[CoinFonts.GOLD]))
                    : t >= 10 && t <= 49
                    ? ((n.spriteFrame =
                        this.m_singleSlotReels.GetSymbolSpriteFrame(
                          Game_Define.SpecialSymbol.Symbol_Silver_Coin - 12
                        )),
                      (this.m_labelNode.getComponent(Label).font =
                        this.m_fonts[CoinFonts.SILVER]))
                    : ((n.spriteFrame =
                        this.m_singleSlotReels.GetSymbolSpriteFrame(
                          Game_Define.SpecialSymbol.Symbol_Bronze_Coin - 12
                        )),
                      (this.m_labelNode.getComponent(Label).font =
                        this.m_fonts[CoinFonts.BRONZE]));
                } else this.m_labelNode.getComponent(Label).string = "";
              }),
              (n.GetSpriteBySymbol = function (e, t) {
                var n = 0;
                return (
                  (n =
                    e == Game_Define.SpecialSymbol.Symbol_Bronze_Coin && t > 0
                      ? t >= 250
                        ? Game_Define.SpecialSymbol.Symbol_Super_Coin - 12
                        : t >= 50 && t <= 249
                        ? Game_Define.SpecialSymbol.Symbol_Gold_Coin - 12
                        : t >= 10 && t <= 49
                        ? Game_Define.SpecialSymbol.Symbol_Silver_Coin - 12
                        : Game_Define.SpecialSymbol.Symbol_Bronze_Coin - 12
                      : e == Game_Define.Symbol.Symbol_Scatter
                      ? 8
                      : e - 12),
                  this.m_singleSlotReels.GetSymbolSpriteFrame(n)
                );
              }),
              (n.SetMulti = function (e, t) {
                e == Game_Define.SpecialSymbol.Symbol_Multiplier
                  ? ((t = Math.abs(t)),
                    (this.m_multiNode.getComponent(Sprite).spriteFrame =
                      this.m_multiSprites[MultiSprites["x" + t]]))
                  : (this.m_multiNode.getComponent(Sprite).spriteFrame = null);
              }),
              (n.GetSymbol = function () {
                return this.m_symbolNode ? this.m_symbolNode : null;
              }),
              (n.GetLabelNode = function () {
                return this.m_labelNode ? this.m_labelNode : null;
              }),
              (n.GetMultiNode = function () {
                return this.m_multiNode ? this.m_multiNode : null;
              }),
              (n.ChangeSymbol = function (e) {
                (this.m_symbolNode.getComponent(Sprite).spriteFrame =
                  this.m_soltReels.GetSymbolSpriteFrame(e)),
                  (this.m_symbolNode.active = !0);
              }),
              (n.SetOpacity = function (e) {
                this.m_symbolNode.getComponent(UIOpacity).opacity = e;
              }),
              (n.GetNewSymbolNode = function () {
                var e = new Node();
                return e.addComponent(Sprite), this.node.addChild(e), e;
              }),
              (n.SetDark = function (e) {
                var t = e ? 120 : 255;
                this.SetColor(this.m_symbolNode, t);
              }),
              (n.SetColor = function (e, t) {
                e.getComponent(Sprite) &&
                  (e.getComponent(Sprite).color = color(t, t, t));
              }),
              (n.SetPosition = function (e, t, n) {
                this.m_symbolNode.setPosition(v3(e, t, n));
              }),
              (n.CloseSymbol = function () {
                tween(this.m_symbolNode.getComponent(UIOpacity))
                  .to(1, { opacity: 0.1 })
                  .start();
              }),
              _createClass(t, [
                {
                  key: "Name",
                  get: function () {
                    return this.m_name;
                  },
                },
                {
                  key: "Fonts",
                  set: function (e) {
                    this.m_fonts = e;
                  },
                },
                {
                  key: "MultiSprites",
                  set: function (e) {
                    this.m_multiSprites = e;
                  },
                },
              ]),
              t
            );
          })(Component),
          _dec$H,
          _class$H,
          _class2$m,
          _descriptor$m,
          _class3;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "60fe3PiCVRIEaHpC+HZ7ria",
            "SingleSlotReels",
            void 0
          );
        var SHOW_PLATES = 3,
          ccclass$H = _decorator.ccclass,
          property$m = _decorator.property,
          SingleSlotReels =
            ((_dec$H = property$m({
              type: SpriteFrame,
              tooltip: "要旋轉的Symbol",
            })),
            ccclass$H(
              ((_class3 = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(i)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_symbolSpriteFrames",
                      _descriptor$m,
                      _assertThisInitialized(t)
                    ),
                    (t.m_gameView = null),
                    (t.m_slotReels = null),
                    (t.m_coinFonts = []),
                    (t.m_multiSprites = null),
                    (t.m_viewSize = null),
                    (t.m_symbolSize = null),
                    (t.m_time = 0),
                    (t.m_stopTime = 0),
                    (t.m_reelStopTimes = new Array()),
                    (t.m_reelPreTimes = new Array()),
                    (t.m_columnSymbols = new Array()),
                    (t.m_upperSymbols = new Array()),
                    (t.m_lowerSymbols = new Array()),
                    (t.m_plate = [0, 0, 0, 0, 0]),
                    (t.m_coinPlate = [0, 0, 0, 0, 0]),
                    (t.m_numberOfSymbol = 0),
                    (t.m_canSpinCol = [!1, !1, !1, !1, !1]),
                    (t.m_posErrorStr = ""),
                    (t.m_symbolErrorStr = ""),
                    (t.m_totalLength = null),
                    (t.m_downLength = 20),
                    (t.m_spinBufferTime01 = 0.1),
                    (t.m_spinBufferTime02 = 0.2),
                    (t.m_spinTime = 0.5),
                    (t.m_timesOfBaseSpin = 0),
                    (t.m_spinIntervalTimes = 2),
                    (t.m_timesOfBaseSpinFast = 0),
                    (t.m_spinIntervalTimesFast = 2),
                    (t.m_isChangeSymbol = {}),
                    (t.m_isChangeToFinalSymbol = new Array()),
                    (t.m_isStop = !1),
                    (t.m_comparePos = []),
                    (t.m_reelXPos = []),
                    (t.m_reelYPos = []),
                    (t.m_symbolPos = new Array()),
                    (t.m_lockColumn = [!1, !1, !1, !1, !1]),
                    (t.m_isHardStop = !1),
                    (t.m_isClickStopBtn = !1),
                    (t.m_isPlaySound = [!1, !1, !1, !1, !1]),
                    (t.m_isPlaySymbolStop = [!1, !1, !1, !1, !1]),
                    (t.m_isPlaySymbolStopSound = [!1, !1, !1, !1, !1]),
                    (t.m_row = null),
                    (t.m_symbolPrefab = null),
                    (t.m_symbolWeightArray = null),
                    (t.m_coinWeightArray = null),
                    (t.m_isCheckAndChangeToRightSymbol = [!1, !1, !1, !1, !1]),
                    (t.m_isCheckedPos = [!1, !1, !1, !1, !1]),
                    (t.m_isCheckedSymbol = [!1, !1, !1, !1, !1]),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.onLoad = function () {
                    (this.m_viewSize =
                      this.node.getComponent(UITransform).contentSize),
                      (this.m_symbolSize = new Size(
                        this.m_viewSize.width / Game_Define.COL,
                        this.m_viewSize.height
                      ));
                    for (var e = 0; e < SHOW_PLATES; ++e)
                      this.m_comparePos.push(
                        this.m_viewSize.height * (e + 0.5)
                      ),
                        this.m_reelYPos.push(
                          this.m_viewSize.height * (e - SHOW_PLATES / 2)
                        );
                    for (var t = 0; t < Game_Define.COL; ++t)
                      this.m_reelXPos.push(
                        this.m_symbolSize.width * (t + 0.5) -
                          this.m_viewSize.width / 2
                      );
                    this.m_totalLength = this.m_viewSize.height * SHOW_PLATES;
                    for (var n = 0; n < Game_Define.COL; n++) {
                      var i =
                        this.m_symbolSize.width * (n + 0.5) -
                        this.m_viewSize.width / 2;
                      this.m_symbolPos.push(v3(i, 0, 0));
                    }
                    Game_Define.DebugMode &&
                      (this.m_spinTime = node$3.divide(
                        this.m_spinTime,
                        Game_Define.DebugSpinSpeed
                      ));
                  }),
                  (n.CreateSymbol = function (e) {
                    this.m_row = e;
                    for (var t = 0; t < Game_Define.COL; t++) {
                      this.m_isChangeToFinalSymbol.push(!1),
                        this.m_reelStopTimes.push(null),
                        this.m_reelPreTimes.push(null);
                      var n = new SingleColumnSymbol();
                      this.m_columnSymbols.push(n);
                      var i = this.m_numberOfSymbol.toString();
                      n.Init(
                        this.node,
                        this.m_slotReels,
                        this,
                        this.m_plate[t],
                        i,
                        this.m_symbolPrefab
                      ),
                        (this.m_numberOfSymbol += 1);
                      var o =
                        this.m_symbolSize.width * (t + 0.5) -
                        this.m_viewSize.width / 2;
                      n.SetPosition(o, 0),
                        (n.Fonts = this.m_coinFonts),
                        (n.MultiSprites = this.m_multiSprites);
                    }
                    for (var r = 0; r < Game_Define.COL; r++) {
                      var a =
                          this.m_symbolSize.width * (r + 0.5) -
                          this.m_viewSize.width / 2,
                        s = this.m_viewSize.height,
                        l = new SingleColumnSymbol(),
                        c = (this.m_numberOfSymbol + r).toString();
                      l.Init(
                        this.node,
                        this.m_slotReels,
                        this,
                        this.m_plate[r],
                        c,
                        this.m_symbolPrefab
                      ),
                        l.SetPosition(a, s),
                        (l.Fonts = this.m_coinFonts),
                        (l.MultiSprites = this.m_multiSprites),
                        this.m_upperSymbols.push(l),
                        (s = -this.m_viewSize.height);
                      var m = new SingleColumnSymbol(),
                        u = (-(r + 1)).toString();
                      m.Init(
                        this.node,
                        this.m_slotReels,
                        this,
                        this.m_plate[r],
                        u,
                        this.m_symbolPrefab
                      ),
                        m.SetPosition(a, s),
                        (m.Fonts = this.m_coinFonts),
                        (m.MultiSprites = this.m_multiSprites),
                        this.m_lowerSymbols.push(m);
                    }
                  }),
                  (n.Init = function (e, t, n) {
                    (this.m_gameView = e),
                      (this.m_symbolPrefab = n),
                      (this.m_slotReels = e.SlotReels),
                      this.CreateSymbol(t),
                      (this.m_symbolWeightArray = this.GetSymbolWeightArray()),
                      (this.m_coinWeightArray = this.GetCoinWeightArray());
                  }),
                  (n.GetSymbolSpriteFrame = function (e) {
                    return this.m_symbolSpriteFrames[e || 0];
                  }),
                  (n.SetSymbolNode = function (e, t) {
                    this.m_columnSymbols[e].ChangeSymbol(t);
                  }),
                  (n.GetSymbolNode = function (e) {
                    return this.m_columnSymbols[e].GetSymbol();
                  }),
                  (n.StartSpin = function (e) {
                    (this.m_isHardStop = e),
                      (this.m_time = 0),
                      (this.m_stopTime = 0),
                      (this.m_isStop = !1),
                      (this.m_isClickStopBtn = !1),
                      (this.m_isPlaySound = [!1, !1, !1, !1, !1]),
                      (this.m_isPlaySymbolStop = [!1, !1, !1, !1, !1]),
                      (this.m_isPlaySymbolStopSound = [!1, !1, !1, !1, !1]),
                      (this.m_isCheckedPos = [!1, !1, !1, !1, !1]),
                      (this.m_isCheckedSymbol = [!1, !1, !1, !1, !1]),
                      (this.m_isCheckAndChangeToRightSymbol = [
                        !1,
                        !1,
                        !1,
                        !1,
                        !1,
                      ]),
                      (this.m_canSpinCol = [!1, !1, !1, !1, !1]),
                      (this.m_posErrorStr = ""),
                      (this.m_symbolErrorStr = "");
                    for (var t = 0; t < Game_Define.COL; t++)
                      (this.m_reelStopTimes[t] = null),
                        (this.m_reelPreTimes[t] = null),
                        (this.m_lockColumn[t] = !1);
                    for (
                      var n = 0;
                      n < this.m_isChangeToFinalSymbol.length;
                      n++
                    )
                      this.m_isChangeToFinalSymbol[n] = !1;
                  }),
                  (n.IsPlateStop = function () {
                    return this.m_isStop;
                  }),
                  (n.Spin = function (e) {
                    (this.m_time = node$3.strip(this.m_time + e)),
                      this.m_isStop ||
                        (this.Spin_RealSpinMultiple(),
                        this.m_time >= this.m_stopTime &&
                          0 != this.m_stopTime &&
                          null !== this.m_reelStopTimes[0] &&
                          ((this.m_isStop = !0),
                          this.CheckAndChangeSymbolToRight()));
                  }),
                  (n.Spin_RealSpinMultiple = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t,
                          n,
                          i,
                          o,
                          r,
                          a,
                          s,
                          l,
                          c,
                          m,
                          u,
                          _,
                          p,
                          f,
                          d,
                          h,
                          y,
                          S,
                          g;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (t = this.m_time), (n = 0);
                                case 2:
                                  if (!(n < Game_Define.COL)) {
                                    e.next = 22;
                                    break;
                                  }
                                  if (!this.m_lockColumn[n]) {
                                    e.next = 5;
                                    break;
                                  }
                                  return e.abrupt("continue", 19);
                                case 5:
                                  (i = this.m_reelStopTimes[n]),
                                    (o =
                                      this.m_symbolSize.width * (n + 0.5) -
                                      this.m_viewSize.width / 2),
                                    0,
                                    (r = 3 * this.m_viewSize.height),
                                    (a =
                                      ((t % this.m_spinTime) /
                                        this.m_spinTime) *
                                      r),
                                    (s =
                                      this.m_symbolSize.width * (n + 0.5) -
                                      this.m_viewSize.width / 2),
                                    (l = this.m_viewSize.height),
                                    null == i || t < i
                                      ? ((c = this.GetMovelength(
                                          a,
                                          this.m_comparePos[2],
                                          n,
                                          this.m_upperSymbols[n]
                                        )),
                                        this.m_upperSymbols[n].SetPosition(
                                          s,
                                          l - c
                                        ))
                                      : t < i + this.m_spinBufferTime01
                                      ? ((m =
                                          ((t - i) / this.m_spinBufferTime01) *
                                          this.m_downLength),
                                        this.m_upperSymbols[n].SetPosition(
                                          s,
                                          l - m
                                        ))
                                      : t <
                                        i +
                                          this.m_spinBufferTime01 +
                                          this.m_spinBufferTime02
                                      ? ((u =
                                          ((t - i - this.m_spinBufferTime01) /
                                            this.m_spinBufferTime02) *
                                          this.m_downLength),
                                        this.m_upperSymbols[n].SetPosition(
                                          s,
                                          l - this.m_downLength + u
                                        ))
                                      : this.m_upperSymbols[n].SetPosition(
                                          s,
                                          l
                                        ),
                                    (s =
                                      this.m_symbolSize.width * (n + 0.5) -
                                      this.m_viewSize.width / 2),
                                    (l = -this.m_viewSize.height),
                                    null == i || t < i
                                      ? ((_ = this.GetMovelength(
                                          a,
                                          this.m_comparePos[0],
                                          n,
                                          this.m_lowerSymbols[n]
                                        )),
                                        this.m_lowerSymbols[n].SetPosition(
                                          s,
                                          l - _
                                        ))
                                      : t < i + this.m_spinBufferTime01
                                      ? ((p =
                                          ((t - i) / this.m_spinBufferTime01) *
                                          this.m_downLength),
                                        this.m_lowerSymbols[n].SetPosition(
                                          s,
                                          l - p
                                        ))
                                      : t <
                                        i +
                                          this.m_spinBufferTime01 +
                                          this.m_spinBufferTime02
                                      ? ((f =
                                          ((t - i - this.m_spinBufferTime01) /
                                            this.m_spinBufferTime02) *
                                          this.m_downLength),
                                        this.m_lowerSymbols[n].SetPosition(
                                          s,
                                          l - this.m_downLength + f
                                        ))
                                      : this.m_lowerSymbols[n].SetPosition(
                                          s,
                                          l
                                        ),
                                    (d =
                                      this.m_gameView.EffectPlate.GetSingleSpecialSymbolEffectNode(
                                        n,
                                        this.m_row,
                                        this.m_plate[n]
                                      )),
                                    (h = 106 * this.m_row - 212),
                                    null == i || t < i
                                      ? ((y = this.GetMovelength(
                                          a,
                                          this.m_comparePos[1],
                                          n,
                                          this.m_columnSymbols[n]
                                        )),
                                        this.m_columnSymbols[n].SetPosition(
                                          o,
                                          0 - y
                                        ))
                                      : t < i + this.m_spinBufferTime01
                                      ? ((S =
                                          ((t - i) / this.m_spinBufferTime01) *
                                          this.m_downLength),
                                        this.m_columnSymbols[n].SetPosition(
                                          o,
                                          0 - S
                                        ),
                                        this.CheckChangeToFinalSymbol(
                                          n,
                                          this.m_columnSymbols[n],
                                          !0
                                        ),
                                        this.PlaySymbolStopSound(n),
                                        this.PlaySymbolStop(n),
                                        d && d.setPosition(o, 0 - S + h))
                                      : t <
                                        i +
                                          this.m_spinBufferTime01 +
                                          this.m_spinBufferTime02
                                      ? ((g =
                                          ((t - i - this.m_spinBufferTime01) /
                                            this.m_spinBufferTime02) *
                                          this.m_downLength),
                                        this.m_columnSymbols[n].SetPosition(
                                          o,
                                          0 - this.m_downLength + g
                                        ),
                                        this.CheckChangeToFinalSymbol(
                                          n,
                                          this.m_columnSymbols[n],
                                          !0
                                        ),
                                        d &&
                                          d.setPosition(
                                            o,
                                            0 - this.m_downLength + g + h
                                          ))
                                      : (this.CheckChangeToFinalSymbol(
                                          n,
                                          this.m_columnSymbols[n],
                                          !0
                                        ),
                                        this.m_columnSymbols[n].SetPosition(
                                          o,
                                          0
                                        ),
                                        d && d.setPosition(o, 0 + h),
                                        this.SetUpSymbol(n, !1),
                                        this.SetLowSymbol(n, !1),
                                        this.CheckPositionError(n),
                                        this.CheckSymbolError(n));
                                case 19:
                                  n++, (e.next = 2);
                                  break;
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
                  (n.GetMovelength = function (e, t, n, i) {
                    var o = i.Name;
                    if (e >= t) {
                      if (
                        ((e -= this.m_totalLength),
                        this.m_isChangeSymbol[o] && !this.m_isClickStopBtn)
                      ) {
                        var r = !1;
                        (this.m_isHardStop || this.m_isClickStopBtn) &&
                          (r = !0),
                          (this.m_isChangeSymbol[o] = !1),
                          this.ChangeSymbol(n, i, r);
                      }
                    } else this.m_isChangeSymbol[o] = !0;
                    return e;
                  }),
                  (n.ChangeSymbol = function (e, t, n) {
                    var i = Number(t.Name),
                      o = this.m_reelPreTimes[e];
                    if (n && this.m_time > o)
                      if (i >= 0 && i < this.m_numberOfSymbol) {
                        t.SetSymbol(this.m_plate[e]),
                          t.SetLabel(this.m_plate[e], this.m_coinPlate[e]);
                        var r = this.m_coinPlate[e];
                        if (0 == r)
                          for (
                            var a =
                                this.m_gameView.SpinAck.RoundQueue[
                                  Game_Define.RoundIdx
                                ].ComboStageData[Game_Define.ComboIdx]
                                  .MysteryGolden.Mult,
                              s = 0;
                            s < a.length;
                            s++
                          ) {
                            var l = a[s].Pos ? a[s].Pos : 0,
                              c = this.m_gameView.PosIndexToVec3([l])[0];
                            c.x == e && c.y == this.m_row && (r = a[s].Mul);
                          }
                        t.SetMulti(this.m_plate[e], r);
                      } else {
                        var m = this.RandSymbol();
                        t.SetSymbol(m),
                          t.SetLabel(m, this.RandLabel()),
                          t.SetMulti(m, this.RandMulti());
                      }
                    else if (
                      null != o &&
                      (this.m_time >= o ||
                        Math.abs(this.m_time - o) < this.m_spinTime)
                    )
                      if (i >= 0 && i < this.m_numberOfSymbol) {
                        t.SetSymbol(this.m_plate[e]),
                          t.SetLabel(this.m_plate[e], this.m_coinPlate[e]);
                        var u = this.m_coinPlate[e];
                        if (0 == u)
                          for (
                            var _ =
                                this.m_gameView.SpinAck.RoundQueue[
                                  Game_Define.RoundIdx
                                ].ComboStageData[Game_Define.ComboIdx]
                                  .MysteryGolden.Mult,
                              p = 0;
                            p < _.length;
                            p++
                          ) {
                            var f = _[p].Pos ? _[p].Pos : 0,
                              d = this.m_gameView.PosIndexToVec3([f])[0];
                            d.x == e && d.y == this.m_row && (u = _[p].Mul);
                          }
                        t.SetMulti(this.m_plate[e], u);
                      } else {
                        var h = this.RandSymbol();
                        t.SetSymbol(h),
                          t.SetLabel(h, this.RandLabel()),
                          t.SetMulti(h, this.RandMulti());
                      }
                    else {
                      var y = this.RandSymbol();
                      t.SetSymbol(y),
                        t.SetLabel(y, this.RandLabel()),
                        t.SetMulti(y, this.RandMulti());
                    }
                  }),
                  (n.RandSymbol = function () {
                    var e = Math.floor(100 * Math.random()),
                      t = this.m_symbolWeightArray[e];
                    return (
                      Game_Define.IsAllGoldLion
                        ? (t != Game_Define.SpecialSymbol.Symbol_Converter &&
                            t != Game_Define.SpecialSymbol.Symbol_NudgeUp) ||
                          (t = Game_Define.SpecialSymbol.Symbol_Bronze_Coin)
                        : Game_Define.IsInFG ||
                          (t == Game_Define.SpecialSymbol.Symbol_NudgeUp &&
                            (t = Game_Define.SpecialSymbol.Symbol_Bronze_Coin)),
                      t
                    );
                  }),
                  (n.RandLabel = function () {
                    var e,
                      t = Math.floor(100 * Math.random()),
                      n = this.m_coinWeightArray[t];
                    return (
                      n == Game_Define.CoinSymbol.Bronze
                        ? (e = [1, 2, 5])
                        : n == Game_Define.CoinSymbol.Silver
                        ? (e = [10, 25])
                        : n == Game_Define.CoinSymbol.Gold
                        ? (e = [50, 100])
                        : n == Game_Define.CoinSymbol.Super &&
                          (e = [250, 500, 1e3, 2500, 5e3]),
                      e[Math.floor(Math.random() * e.length)]
                    );
                  }),
                  (n.RandMulti = function () {
                    var e = Math.floor(4 * Math.random());
                    return t.IndexToMulti[e];
                  }),
                  (n.CheckChangeToFinalSymbol = function (e, t, n) {
                    void 0 === n && (n = !1),
                      this.m_isChangeToFinalSymbol[e] ||
                        ((this.m_isChangeToFinalSymbol[e] = !0),
                        this.ChangeSymbol(e, t, n));
                  }),
                  (n.PlaySymbolStop = function (e) {
                    this.m_isPlaySymbolStop[e] ||
                      ((this.m_isPlaySymbolStop[e] = !0),
                      this.m_gameView.EffectPlate.SingleSpecialSymbolStop(
                        e,
                        this.m_row,
                        this.m_plate[e],
                        this.m_coinPlate[e]
                      ));
                  }),
                  (n.PlaySymbolStopSound = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n, i, o;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  this.m_isPlaySymbolStopSound[t] ||
                                    ((this.m_isPlaySymbolStopSound[t] = !0),
                                    (n = this.m_plate[t]),
                                    (i = this.m_coinPlate[t]),
                                    n ==
                                    Game_Define.SpecialSymbol.Symbol_Converter
                                      ? node.Play(
                                          Game_Define.AudioClips
                                            .Coin_Appear_Converter
                                        )
                                      : n ==
                                        Game_Define.SpecialSymbol
                                          .Symbol_Collector
                                      ? node.Play(
                                          Game_Define.AudioClips
                                            .Coin_Appear_Collector
                                        )
                                      : n ==
                                        Game_Define.SpecialSymbol
                                          .Symbol_Multiplier
                                      ? node.Play(
                                          Game_Define.AudioClips
                                            .Coin_Appear_Multiplier
                                        )
                                      : n == Game_Define.Symbol.Symbol_Scatter
                                      ? (Game_Define.ScatterCount++,
                                        this.m_gameView.SlotReels.PlaySatterSound(
                                          Game_Define.ScatterCount
                                        ))
                                      : (o =
                                          this.m_gameView.EffectPlate.GetCoinSymbol(
                                            i
                                          )) == Game_Define.CoinSymbol.Super
                                      ? node.Play(
                                          Game_Define.AudioClips.Coin_Appear_04
                                        )
                                      : o == Game_Define.CoinSymbol.Gold
                                      ? node.Play(
                                          Game_Define.AudioClips.Coin_Appear_03
                                        )
                                      : o == Game_Define.CoinSymbol.Silver
                                      ? node.Play(
                                          Game_Define.AudioClips.Coin_Appear_02
                                        )
                                      : o == Game_Define.CoinSymbol.Bronze &&
                                        node.Play(
                                          Game_Define.AudioClips.Coin_Appear_01
                                        ));
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
                  (n.SetPlateInfo = function (e, t, n, i) {
                    (this.m_plate = e), (this.m_coinPlate = t);
                    for (var o = 0; o < e.length; o++)
                      (e[o] >= Game_Define.SpecialSymbol.Symbol_Bronze_Coin ||
                        e[o] == Game_Define.Symbol.Symbol_Scatter) &&
                      i[o]
                        ? ((this.m_columnSymbols[o].GetSymbol().active = !0),
                          this.m_columnSymbols[o].SetOpacity(255),
                          this.m_upperSymbols[o].SetOpacity(255),
                          this.m_lowerSymbols[o].SetOpacity(255),
                          (this.m_canSpinCol[o] = !0))
                        : (this.m_lockColumn[o] = !0);
                    for (
                      var r = Math.ceil(this.m_time / this.m_spinTime), a = 0;
                      a < n.length;
                      a++
                    ) {
                      var s = this.m_spinTime;
                      (this.m_reelStopTimes[a] = node$3.strip(
                        s * (r + this.m_timesOfBaseSpin) +
                          s * this.m_spinIntervalTimes * n[a]
                      )),
                        (this.m_reelPreTimes[a] =
                          this.m_reelStopTimes[a] - this.m_spinTime);
                    }
                    this.m_stopTime =
                      this.m_reelStopTimes[Game_Define.COL - 1] +
                      this.m_spinBufferTime01 +
                      this.m_spinBufferTime02;
                  }),
                  (n.SetCoinSymbol = function (e, t) {
                    this.m_columnSymbols[e].SetSymbol(
                      Game_Define.SpecialSymbol.Symbol_Bronze_Coin
                    ),
                      this.m_columnSymbols[e].SetLabel(
                        Game_Define.SpecialSymbol.Symbol_Bronze_Coin,
                        t
                      );
                  }),
                  (n.CloseAllSymbol = function () {
                    for (var e = 0; e < Game_Define.COL; e++)
                      this.m_columnSymbols[e].CloseSymbol(),
                        this.m_upperSymbols[e].CloseSymbol(),
                        this.m_lowerSymbols[e].CloseSymbol();
                  }),
                  (n.GetSymbolWeightArray = function () {
                    for (
                      var e = Object.keys(
                          Game_Define.SPECIAL_SYMBOL_WEIGHT
                        ).map(function (e) {
                          return Number(e);
                        }),
                        t = Object.values(Game_Define.SPECIAL_SYMBOL_WEIGHT),
                        n = [],
                        i = 0;
                      i < e.length;
                      i++
                    )
                      for (var o = 0; o < t[i]; o++) n.push(e[i]);
                    return n;
                  }),
                  (n.GetCoinWeightArray = function () {
                    for (
                      var e = Object.keys(Game_Define.COIN_SYMBOL_WEIGHT).map(
                          function (e) {
                            return Number(e);
                          }
                        ),
                        t = Object.values(Game_Define.COIN_SYMBOL_WEIGHT),
                        n = [],
                        i = 0;
                      i < e.length;
                      i++
                    )
                      for (var o = 0; o < t[i]; o++) n.push(e[i]);
                    return n;
                  }),
                  (n.SetUpSymbol = function (e, t) {
                    var n = t ? 255 : 0.1;
                    this.m_upperSymbols[e].SetOpacity(n);
                  }),
                  (n.SetLowSymbol = function (e, t) {
                    var n = t ? 255 : 0.1;
                    this.m_lowerSymbols[e].SetOpacity(n);
                  }),
                  (n.SetSymbolOpacity = function (e, t) {
                    this.m_columnSymbols[e].SetOpacity(t);
                  }),
                  (n.CheckPositionError = function (e) {
                    if (!this.m_isCheckedPos[e] && this.m_canSpinCol[e]) {
                      this.m_isCheckedPos[e] = !0;
                      var t = this.GetSymbolNode(e).position,
                        n = this.m_symbolPos[e];
                      if (Math.abs(t.x - n.x) > 1 || Math.abs(t.y - n.y) > 1) {
                        error("位置錯誤"),
                          error("col:", e, "row:", this.m_row, "位置:", t),
                          error("正確位置：", n);
                        var i =
                          "[" +
                          e.toString() +
                          "][" +
                          this.m_row.toString() +
                          "] X: " +
                          t.toString();
                        (i +=
                          "[" +
                          this.m_reelPreTimes[e] +
                          ", " +
                          this.m_reelStopTimes[e] +
                          ", " +
                          this.m_stopTime.toFixed(2) +
                          ", " +
                          this.m_time.toFixed(2) +
                          "] | "),
                          (this.m_posErrorStr += i),
                          this.m_columnSymbols[e].SetPosition(n.x, n.y, 0);
                      }
                    }
                  }),
                  (n.CheckSymbolError = function (e) {
                    if (!this.m_isCheckedSymbol[e] && this.m_canSpinCol[e]) {
                      this.m_isCheckedSymbol[e] = !0;
                      var t =
                          this.GetSymbolNode(e).getComponent(
                            Sprite
                          ).spriteFrame,
                        n = this.m_columnSymbols[e].GetSpriteBySymbol(
                          this.m_plate[e],
                          this.m_coinPlate[e]
                        ),
                        i = this.m_columnSymbols[e]
                          .GetLabelNode()
                          .getComponent(Label).string,
                        o =
                          this.m_coinPlate[e] <= 0
                            ? ""
                            : this.m_coinPlate[e].toString(),
                        r = this.m_coinPlate[e];
                      if (r <= 0)
                        for (
                          var a =
                              this.m_gameView.SpinAck.RoundQueue[
                                Game_Define.RoundIdx
                              ].ComboStageData[Game_Define.ComboIdx]
                                .MysteryGolden.Mult,
                            s = 0;
                          s < a.length;
                          s++
                        ) {
                          var l = a[s].Pos ? a[s].Pos : 0,
                            c = this.m_gameView.PosIndexToVec3([l])[0];
                          c.x == e && c.y == this.m_row && (r = a[s].Mul);
                        }
                      else r = 0;
                      r = Math.abs(r);
                      var m = this.m_columnSymbols[e]
                          .GetMultiNode()
                          .getComponent(Sprite).spriteFrame,
                        u = m ? m.name.split("_")[2] : "",
                        _ = 0 == r ? "" : "x" + r.toString();
                      if (
                        t.name != n.name ||
                        i != o ||
                        (this.m_plate[e] ==
                          Game_Define.SpecialSymbol.Symbol_Multiplier &&
                          u != _)
                      ) {
                        error("Symbol錯誤"),
                          error(
                            "col:",
                            e,
                            "row:",
                            this.m_row,
                            "Symbol:",
                            t.name,
                            "Coin:",
                            i,
                            "Multi:",
                            u
                          ),
                          error(
                            "正確Symbol：",
                            n.name,
                            "Coin:",
                            o,
                            "Multi:",
                            _
                          ),
                          error(
                            "reelPreTimes:",
                            this.m_reelPreTimes[e],
                            "reelStopTimes:",
                            this.m_reelStopTimes[e],
                            "stopTime:",
                            this.m_stopTime,
                            "time:",
                            this.m_time
                          );
                        var p =
                          "[" +
                          e.toString() +
                          "][" +
                          this.m_row.toString() +
                          "] X: " +
                          t.name +
                          ", " +
                          i +
                          ", " +
                          u +
                          " O: " +
                          n.name +
                          ", " +
                          o +
                          ", " +
                          _;
                        (p +=
                          "[" +
                          this.m_reelPreTimes[e] +
                          ", " +
                          this.m_reelStopTimes[e] +
                          ", " +
                          this.m_stopTime.toFixed(2) +
                          ", " +
                          this.m_time.toFixed(2) +
                          "] | "),
                          (this.m_symbolErrorStr += p),
                          this.m_columnSymbols[e].SetSymbol(this.m_plate[e]),
                          this.m_columnSymbols[e].SetLabel(
                            this.m_plate[e],
                            this.m_coinPlate[e]
                          ),
                          this.m_columnSymbols[e].SetMulti(this.m_plate[e], r);
                      }
                    }
                  }),
                  (n.CheckAndChangeSymbolToRight = function () {
                    for (var e = 0; e < Game_Define.COL; e++)
                      if (
                        !this.m_isCheckAndChangeToRightSymbol[e] &&
                        this.m_canSpinCol[e]
                      ) {
                        this.m_isCheckAndChangeToRightSymbol[e] = !0;
                        var t = this.GetSymbolNode(e).position,
                          n = this.m_symbolPos[e];
                        (Math.abs(t.x - n.x) > 1 || Math.abs(t.y - n.y) > 1) &&
                          (error("位置錯誤"),
                          error("col:", e, "row:", this.m_row, "位置:", t),
                          error("正確位置：", n),
                          this.m_columnSymbols[e].SetPosition(n.x, n.y, 0));
                        var i =
                            this.GetSymbolNode(e).getComponent(
                              Sprite
                            ).spriteFrame,
                          o = this.m_columnSymbols[e].GetSpriteBySymbol(
                            this.m_plate[e],
                            this.m_coinPlate[e]
                          ),
                          r = this.m_columnSymbols[e]
                            .GetLabelNode()
                            .getComponent(Label).string,
                          a =
                            0 == this.m_coinPlate[e]
                              ? ""
                              : this.m_coinPlate[e].toString(),
                          s = this.m_coinPlate[e];
                        if (s <= 0)
                          for (
                            var l =
                                this.m_gameView.SpinAck.RoundQueue[
                                  Game_Define.RoundIdx
                                ].ComboStageData[Game_Define.ComboIdx]
                                  .MysteryGolden.Mult,
                              c = 0;
                            c < l.length;
                            c++
                          ) {
                            var m = l[c].Pos ? l[c].Pos : 0,
                              u = this.m_gameView.PosIndexToVec3([m])[0];
                            u.x == e && u.y == this.m_row && (s = l[c].Mul);
                          }
                        else s = 0;
                        s = Math.abs(s);
                        var _ = this.m_columnSymbols[e]
                            .GetMultiNode()
                            .getComponent(Sprite).spriteFrame,
                          p = _ ? _.name.split("_")[2] : "",
                          f = 0 == s ? "" : "x" + s.toString();
                        (i.name != o.name ||
                          r != a ||
                          (this.m_plate[e] ==
                            Game_Define.SpecialSymbol.Symbol_Multiplier &&
                            p != f)) &&
                          (error("Symbol錯誤"),
                          error(
                            "col:",
                            e,
                            "row:",
                            this.m_row,
                            "Symbol:",
                            i.name,
                            "Coin:",
                            r,
                            "Multi:",
                            p
                          ),
                          error(
                            "正確Symbol：",
                            o.name,
                            "Coin:",
                            a,
                            "Multi:",
                            f
                          ),
                          this.m_columnSymbols[e].SetSymbol(this.m_plate[e]),
                          this.m_columnSymbols[e].SetLabel(
                            this.m_plate[e],
                            this.m_coinPlate[e]
                          ),
                          this.m_columnSymbols[e].SetMulti(this.m_plate[e], s));
                      }
                  }),
                  _createClass(t, [
                    {
                      key: "CoinFonts",
                      set: function (e) {
                        this.m_coinFonts = e;
                      },
                    },
                    {
                      key: "MultiSprites",
                      set: function (e) {
                        this.m_multiSprites = e;
                      },
                    },
                    {
                      key: "SymbolSize",
                      get: function () {
                        return this.m_symbolSize;
                      },
                    },
                    {
                      key: "ReelStopTimes",
                      get: function () {
                        return this.m_reelStopTimes;
                      },
                    },
                    {
                      key: "PosErrorStr",
                      get: function () {
                        return this.m_posErrorStr;
                      },
                    },
                    {
                      key: "SymbolErrorStr",
                      get: function () {
                        return this.m_symbolErrorStr;
                      },
                    },
                    {
                      key: "SymbolPos",
                      get: function () {
                        return this.m_symbolPos;
                      },
                    },
                  ]),
                  t
                );
              })(Component)),
              (_class3.IndexToMulti = { 0: 2, 1: 3, 2: 5, 3: 10 }),
              (_class2$m = _class3),
              (_descriptor$m = _applyDecoratedDescriptor(
                _class2$m.prototype,
                "m_symbolSpriteFrames",
                [_dec$H],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_class$H = _class2$m))
            ) || _class$H),
          _dec$I,
          _dec2$m,
          _dec3$8,
          _dec4$5,
          _dec5$4,
          _class$I,
          _class2$n,
          _descriptor$n,
          _descriptor2$a,
          _descriptor3$5,
          _descriptor4$5,
          _descriptor5$3;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "cd7ddDTxtBHtIITPayj4NW5",
            "SingleSlot",
            void 0
          );
        var ccclass$I = _decorator.ccclass,
          property$n = _decorator.property,
          SingleSlot =
            ((_dec$I = property$n({ type: Prefab, tooltip: "單格轉輪Prefab" })),
            (_dec2$m = property$n({
              type: SingleSlotReels,
              tooltip: "單格轉輪",
            })),
            (_dec3$8 = property$n({ type: Font, tooltip: "硬幣字型" })),
            (_dec4$5 = property$n({
              type: SpriteFrame,
              tooltip: "乘倍符號倍數的Sprite",
            })),
            (_dec5$4 = property$n({
              type: Prefab,
              tooltip: "草叢背景特效Prefab",
            })),
            ccclass$I(
              ((_class2$n = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(i)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_singleSlotSymbolPrefab",
                      _descriptor$n,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_singleSlotReels",
                      _descriptor2$a,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_coinFonts",
                      _descriptor3$5,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_multiSprites",
                      _descriptor4$5,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_greenBgPrefab",
                      _descriptor5$3,
                      _assertThisInitialized(t)
                    ),
                    (t.m_gameView = null),
                    (t.m_isChecked = !1),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.onLoad = function () {
                    for (var e = 0; e < this.m_singleSlotReels.length; e++)
                      (this.m_singleSlotReels[e].CoinFonts = this.m_coinFonts),
                        (this.m_singleSlotReels[e].MultiSprites =
                          this.m_multiSprites);
                  }),
                  (n.Init = function (e) {
                    this.m_gameView = e;
                    for (var t = 0; t < Game_Define.ROW; t++)
                      this.m_singleSlotReels[t].Init(
                        this.m_gameView,
                        4 - t,
                        this.m_singleSlotSymbolPrefab
                      );
                    NodePool.getInstance().SetGreenBgPrefab(
                      this.m_greenBgPrefab
                    ),
                      (this.node.active = !1);
                  }),
                  (n.StartSpin = function (e) {
                    this.node.active = !0;
                    for (var t = 0; t < Game_Define.ROW; t++)
                      this.m_singleSlotReels[t].StartSpin(e);
                    this.m_isChecked = !1;
                  }),
                  (n.SetPlateInfo = function (e, t, n) {
                    void 0 === n && (n = null);
                    for (
                      var i = this.GetSingleSlotPlate(e),
                        o =
                          this.m_gameView.SpinAck.RoundQueue[
                            Game_Define.RoundIdx
                          ].ComboStageData[Game_Define.ComboIdx].MysteryGolden
                            .Mult,
                        r = 1,
                        a = 0;
                      a < o.length;
                      a++
                    )
                      r = node$3.times(r, o[a].Mul);
                    t = this.m_gameView.GetOldCoinPlate(r, t);
                    var s,
                      l = this.GetSingleSlotPlate(t);
                    n && (s = this.GetSingleCanSpinPlate(n));
                    for (
                      var c = this.GetTimeOrderPlate(e, t, n), m = 0;
                      m < Game_Define.ROW;
                      m++
                    )
                      n
                        ? this.m_singleSlotReels[m].SetPlateInfo(
                            i[m],
                            l[m],
                            c[m],
                            s[m]
                          )
                        : this.m_singleSlotReels[m].SetPlateInfo(
                            i[m],
                            l[m],
                            c[m],
                            [!0, !0, !0, !0, !0]
                          );
                  }),
                  (n.Spin = function (e) {
                    for (var t = 0; t < Game_Define.ROW; t++)
                      this.m_singleSlotReels[t].Spin(e);
                    this.IsPlateStop() &&
                      !this.m_isChecked &&
                      ((this.m_isChecked = !0), this.CheckIfSendErrorLog());
                  }),
                  (n.IsPlateStop = function () {
                    return this.m_singleSlotReels[4].IsPlateStop();
                  }),
                  (n.GetSingleSlotPlate = function (e) {
                    for (
                      var t = [
                          [-1, -1, -1, -1, -1],
                          [-1, -1, -1, -1, -1],
                          [-1, -1, -1, -1, -1],
                          [-1, -1, -1, -1, -1],
                          [-1, -1, -1, -1, -1],
                        ],
                        n = 0;
                      n < Game_Define.COL;
                      n++
                    )
                      for (var i = 0; i < Game_Define.ROW; i++)
                        t[n][i] = e[i][4 - n];
                    return t;
                  }),
                  (n.GetSingleCanSpinPlate = function (e) {
                    for (
                      var t = [
                          [!1, !1, !1, !1, !1],
                          [!1, !1, !1, !1, !1],
                          [!1, !1, !1, !1, !1],
                          [!1, !1, !1, !1, !1],
                          [!1, !1, !1, !1, !1],
                        ],
                        n = 0;
                      n < Game_Define.COL;
                      n++
                    )
                      for (var i = 0; i < Game_Define.ROW; i++)
                        t[n][i] = e[i][4 - n];
                    return t;
                  }),
                  (n.GetTimeOrderPlate = function (e, t, n) {
                    void 0 === n && (n = null);
                    for (var i = 0; i < Game_Define.COL; i++)
                      (e[i] = e[i].reverse()),
                        (t[i] = t[i].reverse()),
                        n
                          ? (n[i] = n[i].reverse())
                          : (n = [
                              [!0, !0, !0, !0, !0],
                              [!0, !0, !0, !0, !0],
                              [!0, !0, !0, !0, !0],
                              [!0, !0, !0, !0, !0],
                              [!0, !0, !0, !0, !0],
                            ]);
                    for (
                      var o = 1,
                        r = [
                          [-1, -1, -1, -1, -1],
                          [-1, -1, -1, -1, -1],
                          [-1, -1, -1, -1, -1],
                          [-1, -1, -1, -1, -1],
                          [-1, -1, -1, -1, -1],
                        ],
                        a = 0;
                      a < Game_Define.COL;
                      a++
                    )
                      for (var s = 0; s < Game_Define.ROW; s++)
                        (e[a][s] >=
                          Game_Define.SpecialSymbol.Symbol_Bronze_Coin ||
                          e[a][s] == Game_Define.Symbol.Symbol_Scatter) &&
                          n[a][s] &&
                          o++,
                          (r[s][a] = o);
                    return r;
                  }),
                  (n.SetSymbolNode = function (e, t, n) {
                    (t = 4 - t), this.m_singleSlotReels[t].SetSymbolNode(e, n);
                  }),
                  (n.GetSymbolNode = function (e, t) {
                    return (
                      (t = 4 - t), this.m_singleSlotReels[t].GetSymbolNode(e)
                    );
                  }),
                  (n.SetCoinSymbolNode = function (e, t, n) {
                    (t = 4 - t), this.m_singleSlotReels[t].SetCoinSymbol(e, n);
                  }),
                  (n.CloseAllSymbol = function () {
                    for (var e = this, t = 0; t < Game_Define.ROW; t++)
                      this.m_singleSlotReels[t].CloseAllSymbol();
                    tween(this.m_gameView.node)
                      .delay(1)
                      .call(function () {
                        e.node.active = !1;
                      })
                      .start();
                  }),
                  (n.SetSymbolOpacity = function (e, t, n) {
                    (t = 4 - t),
                      this.m_singleSlotReels[t].SetSymbolOpacity(e, n);
                  }),
                  (n.CheckIfSendErrorLog = function () {
                    for (var e = "", t = "", n = 0; n < Game_Define.ROW; n++)
                      "" != this.m_singleSlotReels[n].PosErrorStr &&
                        (e += this.m_singleSlotReels[n].PosErrorStr),
                        "" != this.m_singleSlotReels[n].SymbolErrorStr &&
                          (t += this.m_singleSlotReels[n].SymbolErrorStr);
                    var i =
                      " | Round: " +
                      Game_Define.RoundIdx +
                      " Combo: " +
                      Game_Define.ComboIdx;
                    "" != e &&
                      ((e += i),
                      this.m_gameView.SendVerificationEvent(
                        Game_Define.EVENT_ID.POSITION_ERROR,
                        e
                      )),
                      "" != t &&
                        (error("symbolErrorStr:", (t += i)),
                        this.m_gameView.SendVerificationEvent(
                          Game_Define.EVENT_ID.SYMBOL_ERROR,
                          t
                        ));
                  }),
                  t
                );
              })(Component)),
              (_descriptor$n = _applyDecoratedDescriptor(
                _class2$n.prototype,
                "m_singleSlotSymbolPrefab",
                [_dec$I],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor2$a = _applyDecoratedDescriptor(
                _class2$n.prototype,
                "m_singleSlotReels",
                [_dec2$m],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor3$5 = _applyDecoratedDescriptor(
                _class2$n.prototype,
                "m_coinFonts",
                [_dec3$8],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor4$5 = _applyDecoratedDescriptor(
                _class2$n.prototype,
                "m_multiSprites",
                [_dec4$5],
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
                _class2$n.prototype,
                "m_greenBgPrefab",
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
              (_class$I = _class2$n))
            ) || _class$I),
          _dec$J,
          _dec2$n,
          _class$J,
          _class2$o,
          _descriptor$o;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "80b66lte8xBIJ9Y1rDdAmg6",
            "IntroSpine",
            void 0
          );
        var AnimName$i = {
            GameIntro_L: "GameIntro_L",
            GameIntro_S: "GameIntro_S",
          },
          ccclass$J = _decorator.ccclass,
          property$o = _decorator.property,
          IntroSpine =
            ((_dec$J = ccclass$J("IntroSpine")),
            (_dec2$n = property$o({ type: sp.Skeleton, tooltip: "Spine" })),
            _dec$J(
              ((_class2$o = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(i)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_spine",
                      _descriptor$o,
                      _assertThisInitialized(t)
                    ),
                    (t.m_isIntroed = !1),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.SetIntro = function (e) {
                    if (!this.m_isIntroed) {
                      var t = e
                        ? AnimName$i.GameIntro_L
                        : AnimName$i.GameIntro_S;
                      (this.node.active = !0),
                        this.PlayAnimation(t),
                        (this.m_spine.paused = !0);
                    }
                  }),
                  (n.ShowIntro = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.m_isIntroed = !0),
                                    (this.m_spine.paused = !1),
                                    (n = t
                                      ? AnimName$i.GameIntro_L
                                      : AnimName$i.GameIntro_S),
                                    (e.next = 5),
                                    this.PlayAnimation(n)
                                  );
                                case 5:
                                  this.node.active = !1;
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
                  (n.PlayAnimation = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === n && (n = !1),
                                    Game_Define.DebugMode &&
                                      (this.m_spine.getState().timeScale =
                                        Game_Define.DebugSpeed),
                                    (e.next = 4),
                                    SpineKit.PlayAnimation(this.m_spine, t, n)
                                  );
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
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  _createClass(t, [
                    {
                      key: "IsIntroed",
                      set: function (e) {
                        this.m_isIntroed = e;
                      },
                    },
                  ]),
                  t
                );
              })(Component)),
              (_descriptor$o = _applyDecoratedDescriptor(
                _class2$o.prototype,
                "m_spine",
                [_dec2$n],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_class$J = _class2$o))
            ) || _class$J),
          _dec$K,
          _dec2$o,
          _class$K,
          _class2$p,
          _descriptor$p;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "6ac96kaoWdLKr2n9Dd/TnzU",
            "FxReelSpine",
            void 0
          );
        var AnimName$j = { Fx_Reel: "Fx_Reel" },
          ccclass$K = _decorator.ccclass,
          property$p = _decorator.property,
          FxReelSpine =
            ((_dec$K = ccclass$K("FxReelSpine")),
            (_dec2$o = property$p({ type: sp.Skeleton, tooltip: "Spine" })),
            _dec$K(
              ((_class2$p = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(i)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_spine",
                      _descriptor$p,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.PlayFxReel = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    node.Play(
                                      Game_Define.AudioClips.Reel_Recovery
                                    ),
                                    (e.next = 3),
                                    this.PlayAnimation(AnimName$j.Fx_Reel)
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
                  (n.PlayAnimation = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === n && (n = !1),
                                    Game_Define.DebugMode &&
                                      (this.m_spine.getState().timeScale =
                                        Game_Define.DebugSpeed),
                                    (this.node.active = !0),
                                    (e.next = 5),
                                    SpineKit.PlayAnimation(this.m_spine, t, n)
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
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  t
                );
              })(Component)),
              (_descriptor$p = _applyDecoratedDescriptor(
                _class2$p.prototype,
                "m_spine",
                [_dec2$o],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_class$K = _class2$p))
            ) || _class$K),
          _dec$L,
          _dec2$p,
          _dec3$9,
          _dec4$6,
          _dec5$5,
          _dec6$3,
          _dec7$3,
          _dec8$2,
          _dec9$2,
          _dec10$2,
          _dec11$1,
          _dec12$1,
          _dec13$1,
          _dec14,
          _dec15,
          _dec16,
          _dec17,
          _dec18,
          _dec19,
          _dec20,
          _class$L,
          _class2$q,
          _descriptor$q,
          _descriptor2$b,
          _descriptor3$6,
          _descriptor4$6,
          _descriptor5$4,
          _descriptor6$3,
          _descriptor7$2,
          _descriptor8$2,
          _descriptor9$2,
          _descriptor10$1,
          _descriptor11$1,
          _descriptor12$1,
          _descriptor13$1,
          _descriptor14,
          _descriptor15,
          _descriptor16,
          _descriptor17,
          _descriptor18,
          _descriptor19,
          _descriptor20,
          _class3$1;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "36f45OC/4FKkY696bpsAmoW", "GameView", void 0);
        var WIDTH = 1136,
          HEIGHT = 640,
          FeatureBetValue = 10,
          smallWinAnimName = {
            Win_Start_1: "Win_Start_1",
            Win_Start_2: "Win_Start_2",
            Win_Multiply: "Win_Multiply",
            Win_Loop: "Win_Loop",
            Win_End: "Win_End",
          },
          ccclass$L = _decorator.ccclass,
          property$q = _decorator.property,
          GameView =
            ((_dec$L = property$q({
              type: CommonBuyBonus,
              tooltip: "購買Bonus",
            })),
            (_dec2$p = property$q({ type: Animation, tooltip: "直橫動畫" })),
            (_dec3$9 = property$q({ type: Node, tooltip: "Main Game 直版" })),
            (_dec4$6 = property$q({ type: Node, tooltip: "Main Game 橫版" })),
            (_dec5$5 = property$q({ type: Node, tooltip: "盤面下方的草(MG)" })),
            (_dec6$3 = property$q({ type: Node, tooltip: "盤面下方的草(FG)" })),
            (_dec7$3 = property$q({ type: SlotReels, tooltip: "盤面本體" })),
            (_dec8$2 = property$q({
              type: SingleSlot,
              tooltip: "單格轉盤面本體",
            })),
            (_dec9$2 = property$q({ type: EffectPlate, tooltip: "盤面表演" })),
            (_dec10$2 = property$q({ type: BigWinComponent, tooltip: "大獎" })),
            (_dec11$1 = property$q({
              type: ManualComponent,
              tooltip: "特色描述(i)",
            })),
            (_dec12$1 = property$q({ type: SpriteAtlas, tooltip: "標題合圖" })),
            (_dec13$1 = property$q({ type: Animation, tooltip: "小跑分提示" })),
            (_dec14 = property$q({ type: Label, tooltip: "小跑分數字" })),
            (_dec15 = property$q({
              type: CharacterSpine,
              tooltip: "主場角色",
            })),
            (_dec16 = property$q({
              type: AllWinsCounter,
              tooltip: "AllWins倍率板",
            })),
            (_dec17 = property$q({
              type: Animation,
              tooltip: "背景動畫(MG、FG)",
            })),
            (_dec18 = property$q({ type: IntroSpine, tooltip: "前導" })),
            (_dec19 = property$q({
              type: FxReelSpine,
              tooltip: "更換盤面時的盤面刷光",
            })),
            (_dec20 = property$q({
              type: CommonBuyBonusCell,
              tooltip: "購買項目",
            })),
            ccclass$L(
              ((_class3$1 = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(i)) || this),
                    _initializerDefineProperty(
                      t,
                      "m_buyBonus",
                      _descriptor$q,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_mainGameAnim",
                      _descriptor2$b,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_mainGameS",
                      _descriptor3$6,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_mainGameL",
                      _descriptor4$6,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_mgGrassNode",
                      _descriptor5$4,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fgGrassNode",
                      _descriptor6$3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_slotReels",
                      _descriptor7$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_singleSlot",
                      _descriptor8$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_effectPlate",
                      _descriptor9$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_bigWin",
                      _descriptor10$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_manual",
                      _descriptor11$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_titleSpriteAtlas",
                      _descriptor12$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_winAnim",
                      _descriptor13$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_winNum",
                      _descriptor14,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_characterSpine",
                      _descriptor15,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_allWinsCounter",
                      _descriptor16,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_backgroundAnim",
                      _descriptor17,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_introSpine",
                      _descriptor18,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fxReelSpine",
                      _descriptor19,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_buyBonusCells",
                      _descriptor20,
                      _assertThisInitialized(t)
                    ),
                    (t.m_spinAck = null),
                    (t.m_unshowSpinAck = null),
                    (t.m_totalWin = 0),
                    (t.m_canSpaceStop = !1),
                    (t.m_canSpaceSpin = !0),
                    (t.m_canPlateStop = !1),
                    (t.m_canPlateSpin = !0),
                    (t.m_bgmId = null),
                    (t.m_realFeaturesSpinAck = null),
                    (t.m_isAutoShowFeatures = !1),
                    (t.m_isFirstPlateSpin = !0),
                    (t.m_isLandscape = !1),
                    (t.m_isLock = !1),
                    (t.m_isChange = !1),
                    (t.m_autoplayInfos = null),
                    (t.m_nowBet = 0),
                    (t.m_spinBet = 0),
                    (t.m_isChangedPlate = !1),
                    (t.m_plateIsTheSame = !1),
                    (t.m_version = Game_Define.Ver),
                    (t.m_oldBetIdx = 0),
                    (t.m_betList = []),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.onLoad = function () {
                    (_cjsExports$1.util.Long = _cjsExports),
                      _cjsExports$1.configure(),
                      AstarteInit(),
                      (node$2.CURRENCY_CHANGE_ENABLE = !0),
                      sys.isNative ||
                        (window.onerror = function (e, t, n, i, o) {
                          var r = "-1",
                            a = 0;
                          node$2.APP &&
                            ((r = node$2.APP.GetAID()),
                            (a = Number(node$2.APP.GetApiID())));
                          var s = node$d.FormErrorParams(
                            r,
                            a,
                            Number(node$2.NOW_GAME_ID),
                            Game_Define.Ver,
                            o
                          );
                          node$d.SendErrorLog(s);
                        }),
                      (node$2.IsInMG = function () {
                        return !Game_Define.IsInFG;
                      });
                  }),
                  (n.start = function () {
                    var e = this;
                    node$3.CheckSwitchOff(SwitchOffKeyDefine.CloseManual) &&
                      (this.m_manual.node.active = !1),
                      node$3.CheckSwitchOff(SwitchOffKeyDefine.NoQuickSpin) ||
                        input.on(Input.EventType.KEY_DOWN, function (t) {
                          switch (t.keyCode) {
                            case KeyCode.SPACE:
                              node$4.SendSpinLog(),
                                node$4 &&
                                  !node$8.IsShowBackpack() &&
                                  (node$5.Current() == CommonState.IDLE &&
                                  e.m_canSpaceSpin
                                    ? e.ClickSpin()
                                    : e.m_canSpaceStop && e.ClickStop());
                          }
                        }),
                      this.m_characterSpine.Init(this),
                      this.m_allWinsCounter.Init(this),
                      this.m_slotReels.Init(this),
                      this.m_singleSlot.Init(this),
                      this.m_effectPlate.Init(this),
                      this.m_characterSpine.SetMix(),
                      this.m_effectPlate.InitCoinEffect(),
                      this.m_effectPlate.InitNearWin(),
                      this.BuyBonusCellsInit(),
                      this.OnRotation(),
                      node$3.AddOnRotationCb(function () {
                        e.OnRotation();
                      });
                    var t = -1;
                    this.m_bigWin.Init(
                      function (e, n, i) {
                        e === Game_Define.BigWinEventName &&
                          (n === Game_Define.BigWinSound1
                            ? i === Game_Define.BigWinStartAnimName &&
                              (t = node.Play(Game_Define.AudioClips.Big_Win))
                            : n === Game_Define.BigWinSound2 &&
                              (-1 !== t && (node.Stop(t), (t = -1)),
                              node.Play(Game_Define.AudioClips.Big_Win_End)));
                      },
                      function (e) {
                        return e;
                      }
                    );
                    var n = {};
                    (n[CommonState.WAIT_RES] = new WaitResState(this)),
                      (n[GAMEVIEW_STATE.WAIT_READY] = new WaitReadyState(this)),
                      (n[GAMEVIEW_STATE.FEATURE_SHOW] = new FeatureShowState(
                        this
                      )),
                      (n[GAMEVIEW_STATE.UNSHOW_PREPARE] =
                        new UnshowPerpareState(this)),
                      (n[GAMEVIEW_STATE.PLATE_SHOW] = new PlateShowState(this)),
                      (n[CommonState.IDLE] = new IdleState(this)),
                      (n[CommonState.SPIN] = new SpinState(this)),
                      (n[GAMEVIEW_STATE.REAL_SPIN] = new RealSpinState(this)),
                      (n[GAMEVIEW_STATE.MYSTERY] = new MysteryState(this)),
                      (n[GAMEVIEW_STATE.GOLDEN_LION] = new GoldenLionState(
                        this
                      )),
                      (n[GAMEVIEW_STATE.SINGLE_SPIN] = new SingleSpinState(
                        this
                      )),
                      (n[GAMEVIEW_STATE.CONVERT] = new ConvertState(this)),
                      (n[GAMEVIEW_STATE.MULTIPLY] = new MultiplyState(this)),
                      (n[GAMEVIEW_STATE.COLLECT] = new CollectState(this)),
                      (n[GAMEVIEW_STATE.ENTER_FREE] = new EnterFreeState(this)),
                      (n[GAMEVIEW_STATE.LEAVE_FREE] = new LeaveFreeState(this)),
                      (n[GAMEVIEW_STATE.LINE_AWARD] = new LineAwardState(this)),
                      (n[GAMEVIEW_STATE.AWARD] = new AwardState(this)),
                      (n[GAMEVIEW_STATE.NUDGE_UP] = new NudgeUpState(this)),
                      (n[GAMEVIEW_STATE.ROUND_SHOW_END] = new RoundShowEndState(
                        this
                      )),
                      (n[CommonState.CHECK_STATE] = new CheckState(this)),
                      (n[GAMEVIEW_STATE.ROUND_END] = new RoundEndState(this)),
                      node$5.Init(n),
                      node$5.NextState(CommonState.LOGIN),
                      node$b.SetGameCb(this);
                  }),
                  (n.BuyBonusCellsInit = function () {
                    for (
                      var e = this,
                        t = function (t) {
                          e.m_buyBonusCells[t]
                            .getComponent(Button)
                            .node.on(Node.EventType.TOUCH_END, function () {
                              var n;
                              node$4.GetChips() <
                                (null == (n = e.m_buyBonus)
                                  ? void 0
                                  : n.GetBuyBonusBet()) ||
                                (2 == t && (Game_Define.IsAllGoldLion = !0));
                            });
                        },
                        n = 0;
                      n < this.m_buyBonusCells.length;
                      n++
                    )
                      t(n);
                  }),
                  (n.update = function (e) {
                    node$5.Tick(e);
                  }),
                  (n.SettingBottomBar = function () {
                    var e = this;
                    (node$4.VerString =
                      "v_" + node$2.VERSION + "_" + Game_Define.Ver),
                      node$4.SetTouchEvet(function (t) {
                        e.BarTouchCb(t);
                      }),
                      node$4.SetWinValue(0);
                    var t = this.m_titleSpriteAtlas.getSpriteFrame(
                      "logo_" + node$1.CurrLang
                    );
                    node$4.ShowPlayReady(
                      t,
                      function () {
                        return (
                          node$5.Current() !== GAMEVIEW_STATE.WAIT_READY ||
                          (node$5.NextState(GAMEVIEW_STATE.PLATE_SHOW), !1)
                        );
                      },
                      function () {
                        node$5.Current() === GAMEVIEW_STATE.WAIT_READY &&
                          (node$8.IsFeaturesDemo
                            ? node$5.NextState(GAMEVIEW_STATE.FEATURE_SHOW)
                            : node$5.NextState(GAMEVIEW_STATE.PLATE_SHOW));
                      }
                    ),
                      node$4.SetFollowNode(this.node),
                      node$4.SetAutoplayConfirmCb(function (t) {
                        e.m_manual && e.m_manual.CloseManul(),
                          (e.m_autoplayInfos = JSON.parse(t)),
                          Game_Define.IsInFG
                            ? e.ClickSpin()
                            : node$e.Dispatch(CommonEventName.SpinReqNotify),
                          e.m_buyBonus.Hide();
                      }),
                      node$4.SetAutoPlaySettingPanelFreeGameString(
                        node$2.StringKey.AUTO_PLAY_PANEL_ENTER_FREEGAME
                      ),
                      (node$4.IsSendBetViewOpen = !0),
                      (node$4.IsSendBetChange = !0),
                      node$4.SetFollowNode(this.node),
                      node$3.CheckSwitchOff(SwitchOffKeyDefine.NoQuickSpin) ||
                        this.m_slotReels.node.on(
                          Node.EventType.TOUCH_END,
                          function (t) {
                            node$4.SendSpinLog(), e.BarTouchCb(t);
                          }
                        ),
                      node$3.CloseIntroLoading.push(function () {
                        node$b.HasUnshow &&
                          node$5.NextState(GAMEVIEW_STATE.UNSHOW_PREPARE);
                      });
                  }),
                  (n.SetTxt = function () {
                    this.m_manual.SetTxt(
                      ["String_01", "String_02", "String_03"],
                      "String_00"
                    ),
                      this.m_effectPlate.FgDeclare.SetTxt(),
                      this.m_effectPlate.Compliment.SetTxt();
                  }),
                  (n.OnRotation = function () {
                    log("OnRotation");
                    var e = screen.windowSize;
                    if (this.m_isLock) {
                      var n = e.width > e.height;
                      return (
                        log(this.m_isLandscape, n),
                        this.m_isLandscape && !n
                          ? view.setDesignResolutionSize(
                              WIDTH,
                              HEIGHT,
                              ResolutionPolicy.FIXED_WIDTH
                            )
                          : !this.m_isLandscape &&
                            n &&
                            view.setDesignResolutionSize(
                              HEIGHT,
                              WIDTH,
                              ResolutionPolicy.FIXED_HEIGHT
                            ),
                        void (this.m_isChange = !0)
                      );
                    }
                    (this.m_isChange = !1),
                      (this.m_isLandscape = e.width > e.height),
                      this.m_isLandscape
                        ? (e.width / e.height <= WIDTH / HEIGHT
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
                          (this.m_mainGameS.active = !1),
                          (this.m_mainGameL.active = !0),
                          this.node
                            .getComponent(Animation)
                            .play(t.AnimName.GameView_L),
                          this.m_mainGameAnim.play(t.AnimName.MainGame_L))
                        : (e.height / e.width <= WIDTH / HEIGHT
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
                          (this.m_mainGameL.active = !1),
                          (this.m_mainGameS.active = !0),
                          this.node
                            .getComponent(Animation)
                            .play(t.AnimName.GameView_S),
                          this.m_mainGameAnim.play(t.AnimName.MainGame_S)),
                      node$4 &&
                        node$4.OnRotation(
                          this.m_isLandscape,
                          function () {},
                          !0
                        ),
                      node$8 && node$8.OnRotation(this.m_isLandscape, !0),
                      node$6.OnRotate(this.m_isLandscape),
                      this.m_characterSpine.OnRotation(),
                      this.m_introSpine.SetIntro(this.m_isLandscape);
                  }),
                  (n.LoginSuccess = function () {
                    var e = this;
                    this.SetTxt(),
                      node$4.SetTxt(),
                      node$8.SetTxt(),
                      this.OnRotation(),
                      node$4.SetAutoPlayPanelTxt(),
                      node$4.SetSpinState(SlotBottomBarState.CLICK_CANCEL),
                      this.m_characterSpine.PlayIdle(),
                      this.m_allWinsCounter.PlayMG();
                    var t = function (t) {
                      var n, i;
                      Game_Define.AudioClips.hasOwnProperty(t) &&
                        ((n = Game_Define.AudioPathPre + t),
                        (i = function (n) {
                          (Game_Define.AudioClips[t] = n),
                            null == e.m_bgmId &&
                              Game_Define.AudioClips.BGM_MG &&
                              (e.m_bgmId = node.PlayBackGround(
                                Game_Define.AudioClips.BGM_MG,
                                !0
                              ));
                        }),
                        node$2.GameBundle.load(n, function (e, t) {
                          e ? error(e.message || e) : i && i(t);
                        }));
                    };
                    for (var n in Game_Define.AudioClips) t(n);
                  }),
                  (n.InitExtra = function () {
                    var e = this;
                    this.ReqMail(),
                      node$8.RecommendNewInit(),
                      node$f.NewInit(),
                      node$g.NewInit(),
                      node$h.JpManagerInit(),
                      node$h.MhbManagerInit();
                    node$i.NewInit(
                      function () {
                        e.m_buyBonus.Hide(),
                          node$4.SetSpinState(SlotBottomBarState.CLICK_SPIN),
                          node$5.NextState(CommonState.SPIN),
                          node$e.Dispatch(CommonEventName.SpinReqNotify);
                      },
                      function () {
                        node$4.IsAutoSpin && node$4.ShowAutoPlayState(!1);
                      }
                    ),
                      node$j.NewInit(),
                      node$8.RankingInit(
                        [node$2.APP.GetAccount(), node$2.APP.GetNickName()],
                        node$2.APP.GetAToken(),
                        node$3.ConvertLanguageToFull(node$1.CurrLang),
                        null,
                        null,
                        function () {
                          e.ReqMail();
                        }
                      ),
                      node$k.Init();
                  }),
                  (n.ReqMail = function () {
                    node$2.APP && node$d.SendMailReq();
                  }),
                  (n.BarTouchCb = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n,
                          i,
                          o,
                          r,
                          a,
                          s = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (n = t.target.name),
                                    error("BarTouchCb:", n),
                                    (e.t0 = n),
                                    (e.next =
                                      e.t0 === this.m_slotReels.node.name
                                        ? 5
                                        : e.t0 === BottomBar_UIName.BTN_SPIN
                                        ? 7
                                        : e.t0 === BottomBar_UIName.BTN_SPINSTOP
                                        ? 9
                                        : e.t0 === BottomBar_UIName.BTN_AUTOPLAY
                                        ? 11
                                        : e.t0 ===
                                          BottomBar_UIName.BTN_WISEAUTOPLAY
                                        ? 13
                                        : e.t0 ===
                                            BottomBar_UIName.BTN_AUTOSTOP_C ||
                                          e.t0 === BottomBar_UIName.BTN_AUTOSTOP
                                        ? 16
                                        : e.t0 === BetValueChange
                                        ? 20
                                        : 30);
                                  break;
                                case 5:
                                  return (
                                    node$5.Current() == CommonState.IDLE &&
                                    this.m_canPlateSpin
                                      ? this.m_isFirstPlateSpin
                                        ? ((this.m_isFirstPlateSpin = !1),
                                          ((i = {}).contextKey =
                                            node$2.StringKey.MSGBOX_TOUCHPANEL_SPIN),
                                          (i.titleKey =
                                            node$2.StringKey.MSGBOX_TITLE_SYSTEM_INFO),
                                          (i.showCancelBtn = !1),
                                          (i.showConfirmBtn = !0),
                                          (i.showCloseBtn = !0),
                                          (i.confirmCB = function () {
                                            s.ClickSpin();
                                          }),
                                          node$6.PushMessageBoxSetting(i))
                                        : this.ClickSpin()
                                      : this.m_canPlateStop && this.ClickStop(),
                                    e.abrupt("break", 31)
                                  );
                                case 7:
                                  return (
                                    node$5.Current() == CommonState.IDLE &&
                                      this.ClickSpin(),
                                    e.abrupt("break", 31)
                                  );
                                case 9:
                                  return (
                                    this.ClickStop(), e.abrupt("break", 31)
                                  );
                                case 11:
                                  if (
                                    node$3.CheckSwitchOff(
                                      SwitchOffKeyDefine.ShowAutoSetting
                                    )
                                  ) {
                                    e.next = 13;
                                    break;
                                  }
                                  return e.abrupt("break", 31);
                                case 13:
                                  return (
                                    node$4.IsAutoSpin &&
                                      (node$4.ShowAutoPlayState(!1),
                                      node$4.SetSpinState(
                                        SlotBottomBarState.CLICK_CANCEL
                                      )),
                                    node$4.ShowAutoplaySettingView(
                                      node$4.GetChips()
                                    ),
                                    e.abrupt("break", 31)
                                  );
                                case 16:
                                  return (
                                    node$4.ShowAutoPlayState(!1),
                                    node$4.SetSpinState(
                                      SlotBottomBarState.CLICK_CANCEL
                                    ),
                                    node$5.Current() == GAMEVIEW_STATE.AWARD &&
                                      node$4.SetSpinState(
                                        SlotBottomBarState.GET_AWARD_NO_AUTO
                                      ),
                                    e.abrupt("break", 31)
                                  );
                                case 20:
                                  if (
                                    (this.m_spinAck &&
                                      this.m_nowBet == this.m_spinBet &&
                                      !Game_Define.CanNotSaveInfo &&
                                      ((o = this.m_spinAck.RoundQueue[0]),
                                      (o.MysterySymbol ? o.MysterySymbol : 0) >=
                                      0
                                        ? ((r = this.PlateSymbolTo2DArray(
                                            o.ComboStageData[0].ComboStageSymbol
                                          )),
                                          (a = o.GoldPos ? o.GoldPos : []),
                                          (Game_Define.BetInfos[this.m_nowBet] =
                                            { Plate: r, GoldPos: a }))
                                        : (Game_Define.BetInfos[this.m_nowBet] =
                                            {
                                              Plate: Game_Define.INIT_PLATE,
                                              GoldPos: [],
                                            })),
                                    this.m_effectPlate.CleanAllEffect(),
                                    this.SetLastPlateInfoByBet(),
                                    Game_Define.IsInBuyBonus ||
                                      this.RecoverLastPlateInfo(),
                                    this.m_allWinsCounter.SetMultiLabel(
                                      Game_Define.LastGoldPos.length + 1
                                    ),
                                    this.m_plateIsTheSame)
                                  ) {
                                    e.next = 28;
                                    break;
                                  }
                                  return (
                                    (e.next = 28),
                                    this.m_fxReelSpine.PlayFxReel()
                                  );
                                case 28:
                                  return (
                                    (this.m_plateIsTheSame = !1),
                                    e.abrupt("break", 31)
                                  );
                                case 30:
                                  return e.abrupt("break", 31);
                                case 31:
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
                  (n.ClickSpin = function () {
                    if (
                      (this.m_manual && this.m_manual.CloseManul(),
                      node$5.Current() === CommonState.IDLE)
                    )
                      if (
                        (node$4.GetChips() >=
                          this.m_buyBonus.GetBuyBonusBet() ||
                          node$4.IsFreeSpin ||
                          Game_Define.IsInFG) &&
                        this.IsBackpackPass() &&
                        !node$k.IsOpen()
                      )
                        node$4.SetSpinState(SlotBottomBarState.CLICK_SPIN),
                          this.m_buyBonus.Hide(),
                          node$e.Dispatch(CommonEventName.SpinReqNotify);
                      else if (
                        (this.m_buyBonus.CleanInfo(),
                        this.IsBackpackPass() && !node$k.IsOpen())
                      ) {
                        var e = node$4.GetBetList();
                        node$3.strip(node$4.GetNowBetValue()) ==
                          node$3.strip(e[0]) ||
                        node$4.GetChips() < node$3.strip(e[0])
                          ? node$6.ShowMessageBox(
                              node$2.StringKey.MSGBOX_MONEY_NOT_ENOUGH
                            )
                          : node$6.ShowMessageBox(
                              node$2.StringKey.MSGBOX_MONEY_NOT_ENOUGH_DOWN_BET
                            );
                      } else
                        node$4.SetSpinState(SlotBottomBarState.IDLE),
                          node$5.NextState(CommonState.IDLE);
                  }),
                  (n.ClickStop = function () {
                    node$3.CheckSwitchOff(SwitchOffKeyDefine.NoQuickSpin) ||
                      ((node$5.Current() != CommonState.SPIN &&
                        node$5.Current() != GAMEVIEW_STATE.REAL_SPIN) ||
                        (this.m_slotReels.SetIsClickStopBtn(),
                        node$4.IsAutoSpin
                          ? node$4.SetSpinState(
                              SlotBottomBarState.CLICK_STOP_IN_AUTOPLAY
                            )
                          : node$4.SetSpinState(SlotBottomBarState.CLICK_STOP)),
                      node$5.Current() == GAMEVIEW_STATE.AWARD
                        ? (this.m_bigWin.Stop(),
                          node$4.SetSpinState(
                            SlotBottomBarState.CLICK_STOP_NO_AUTO
                          ))
                        : node$4.IsAutoSpin
                        ? node$4.SetSpinState(
                            SlotBottomBarState.CLICK_STOP_IN_AUTOPLAY
                          )
                        : node$5.Current() !== CommonState.IDLE &&
                          node$4.SetSpinState(SlotBottomBarState.CLICK_STOP));
                  }),
                  (n.IsBackpackPass = function () {
                    return node$f.IsBackpackPass();
                  }),
                  (n.FeaturesDemoInit = function () {
                    var e = this;
                    this.ChangeDemoPlateByRatio(),
                      node$4.FeaturesDemoInit(
                        function (t) {
                          e.PlayDemo(t);
                        },
                        this.m_realFeaturesSpinAck.length,
                        node$4.FindBetIndexByValue(FeatureBetValue),
                        function () {
                          e.m_isAutoShowFeatures &&
                            ((e.m_isAutoShowFeatures = !1),
                            node$5.NextState(GAMEVIEW_STATE.WAIT_READY)),
                            e.m_effectPlate.CleanAllEffect(),
                            e.RecoverLastPlateInfo(),
                            e.m_allWinsCounter.SetMultiLabel(
                              Game_Define.LastGoldPos.length + 1
                            ),
                            e.m_fxReelSpine.PlayFxReel();
                        }
                      );
                  }),
                  (n.ChangeDemoPlateByRatio = function () {
                    this.m_realFeaturesSpinAck = new Array();
                    var e =
                        node$4.GetBetList()[
                          node$4.FindBetIndexByValue(FeatureBetValue)
                        ],
                      t = JSON.parse(
                        JSON.stringify(FeaturesAck.TWO_MYSTERY_WILD)
                      );
                    this.ChangeWinInfo(t, e),
                      this.m_realFeaturesSpinAck.push(t);
                    var n = JSON.parse(
                      JSON.stringify(FeaturesAck.GOLD_LION_ALL_SPECIAL)
                    );
                    this.ChangeWinInfo(n, e),
                      this.m_realFeaturesSpinAck.push(n);
                    var i = JSON.parse(
                      JSON.stringify(FeaturesAck.FIVE_SCATTER_FG)
                    );
                    this.ChangeWinInfo(i, e),
                      this.m_realFeaturesSpinAck.push(i);
                  }),
                  (n.ChangeWinInfo = function (e, t) {
                    (e.TotalWin = e.TotalWin ? node$3.times(e.TotalWin, t) : 0),
                      (e.FreeTotalWin = e.FreeTotalWin
                        ? node$3.times(e.FreeTotalWin, t)
                        : 0);
                    for (var n = 0; n < e.RoundQueue.length; n++) {
                      var i = e.RoundQueue[n];
                      if (
                        ((i.RoundWin = node$3.times(
                          i.RoundWin ? i.RoundWin : 0,
                          t
                        )),
                        i.ComboStageData)
                      )
                        for (var o = 0; o < i.ComboStageData.length; o++)
                          i.ComboStageData[o].ComboStageWin = node$3.times(
                            i.ComboStageData[o].ComboStageWin
                              ? i.ComboStageData[o].ComboStageWin
                              : 0,
                            t
                          );
                    }
                  }),
                  (n.PlayDemo = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    this.KeepLastPlateInfo(),
                                    this.m_slotReels.CleanLock(),
                                    this.m_effectPlate.CleanAllEffect(),
                                    this.m_allWinsCounter.SetMultiLabel(1),
                                    node$4.SetSpinState(
                                      SlotBottomBarState.CLICK_SPIN
                                    ),
                                    node$5.NextState(CommonState.SPIN),
                                    (e.next = 8),
                                    node$2.Wait(this, 0.5)
                                  );
                                case 8:
                                  (n = this.m_realFeaturesSpinAck[t]),
                                    this.OnRecvSpinAck(n);
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.CancelSpin = function () {
                    node$5.NextState(CommonState.IDLE),
                      (Game_Define.IsInBuyBonus = !1),
                      this.m_effectPlate.CleanAllEffect(),
                      this.SetLastPlateInfoByBet(),
                      this.RecoverLastPlateInfo(),
                      this.m_allWinsCounter.SetMultiLabel(
                        Game_Define.LastGoldPos.length + 1
                      ),
                      this.BuyBonus.CleanInfo();
                  }),
                  (n.RetryRoundEnd = function () {
                    node$b.ReqRoundEnd(
                      Game_Define.RoundIdx + 1,
                      Game_Define.RoundIdx >=
                        this.m_spinAck.RoundQueue.length - 1
                    );
                  }),
                  (n.GetSpinInfo = function () {
                    return null;
                  }),
                  (n.OnCommand = function(e, t,data) {
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

                    var n = this;
                    switch (e) {
                      case node$2.AckType.info:
                        this.SettingBottomBar(),
                          node$4.AutoPlayPanelInit(),
                          node$8.FeaturesInit(
                            [
                              "/features/left/spriteFrame",
                              "/features/right/spriteFrame",
                            ],
                            [
                              Game_Define.StringKey.FEATURE_LEFT,
                              Game_Define.StringKey.FEATURE_RIGHT,
                            ],
                            Game_Define.CHILI_NUM,
                            this.m_titleSpriteAtlas
                          );
                        var i,
                          o = node$1.GetGameAtlas();
                        if (
                          (node$8.SetFeatruesDesc([
                            o.getSpriteFrame("txt1"),
                            o.getSpriteFrame("txt2"),
                          ]),
                          node$8.CheckFirstFeatures(),
                          (i = _cjsExports$2.smProto.GameInfo.decode(t)),
                          error("info", i),
                          this.GetBetInfos(i),
                          error("Game_Define.BetInfos", Game_Define.BetInfos),
                          this.SetLastPlateInfoByBet(),
                          this.RecoverLastPlateInfo(),
                          this.m_allWinsCounter.SetMultiLabel(
                            Game_Define.LastGoldPos.length + 1
                          ),
                          this.m_buyBonus.Init(
                            node$b.GameMallInfo,
                            this,
                            !1,
                            function () {
                              var e;
                              node$4.GetChips() <
                                (null == (e = n.m_buyBonus)
                                  ? void 0
                                  : e.GetBuyBonusBet()) ||
                                ((n.m_oldBetIdx = node$4.GetNowBetIndex()),
                                (Game_Define.IsInBuyBonus = !0),
                                n.m_effectPlate.CleanAllEffect(),
                                n.KeepLastPlateInfo(),
                                n.m_slotReels.CleanLock(),
                                (Game_Define.CurrentLevelUpNum = 0),
                                n.m_allWinsCounter.SetMultiLabel(1));
                            }
                          ),
                          error(
                            "commonGameManager.GameMallInfo:",
                            node$b.GameMallInfo
                          ),
                          node$b.GameMallInfo &&
                            !node$3.CheckSwitchOff(
                              SwitchOffKeyDefine.ShopingMall
                            ))
                        ) {
                          this.m_betList = JSON.parse(
                            JSON.stringify(node$4.GetBetList())
                          );
                          for (
                            var r = this.m_betList.length - 1;
                            r >= 0 &&
                            this.m_betList[r] > node$b.GameMallInfo.MaxBet;
                            r--
                          )
                            this.m_betList.splice(r);
                        }
                        this.LoginSuccess();
                        break;
                      case node$2.AckType.spin:
                      case node$2.AckType.lastSpin:
                        var a = _cjsExports$2.smProto.SpinAck.decode(t);
                        log("spin", a), this.OnRecvSpinAck(a);
                        
            SendTestSpinInfo(a, data);
break;
                      case node$2.AckType.unshow:
                        var s = _cjsExports$2.smProto.SpinAck.decode(t);
                        this.m_unshowSpinAck = s;
                    }
                  }),
                  (n.GetBuyBonusIndex = function () {
                    return this.m_buyBonus.BonusType;
                  }),
                  (n.GetBetInfos = function (e) {
                    for (var t = 0; t < e.BetMap.length; t++) {
                      for (
                        var n = e.BetMap[t].Bet,
                          i = [],
                          o = this.PlateSymbolTo2DArray(e.BetMap[t].PSymbol),
                          r = 0;
                        r < Game_Define.COL;
                        r++
                      )
                        for (var a = 0; a < Game_Define.ROW; a++)
                          20 == o[r][a] &&
                            (o[r][a] =
                              Game_Define.Symbol.Symbol_Mystery_LeverUp),
                            o[r][a] ==
                              Game_Define.Symbol.Symbol_Mystery_LeverUp &&
                              i.push(r * Game_Define.COL + a);
                      Game_Define.BetInfos[n] = { Plate: o, GoldPos: i };
                    }
                  }),
                  (n.StartSpin = function () {
                    this.m_effectPlate.ResetFlag(),
                      (Game_Define.IsHardStop = node$4.IsHardStop),
                      this.m_slotReels.StartSpin(),
                      Game_Define.IsHardStop && node$4.SetSpinWithSpeed();
                  }),
                  (n.OnRecvSpinAck = function (e) {
                    void 0 === e && (e = null),
                      (this.m_spinBet = node$4.GetNowBetValue()),
                      (this.m_spinAck = e),
                      this.BuyBonus.CleanInfo(),
                      error("OnRecvSpinAck", this.m_spinAck),
                      node$4.SetWinValue(0),
                      (Game_Define.RoundIdx = 0),
                      (Game_Define.ComboIdx = 0),
                      (this.m_totalWin = 0);
                    var t =
                        this.m_spinAck.RoundQueue[Game_Define.RoundIdx]
                          .ComboStageData[0].ComboStageSymbol,
                      n =
                        this.m_spinAck.RoundQueue[Game_Define.RoundIdx].GoldPos;
                    if (
                      (t
                        ? this.m_slotReels.SetPlateInfo(
                            this.PlateSymbolTo2DArray(t),
                            n
                          )
                        : node$5.NextState(CommonState.IDLE),
                      Game_Define.IsHardStop
                        ? this.m_slotReels.SetIsClickStopBtn()
                        : node$4.SetSpinState(
                            SlotBottomBarState.GET_AWARD_NO_AUTO
                          ),
                      (node$8.IsFeaturesDemoMode || Game_Define.IsInBuyBonus) &&
                        0 == Game_Define.RoundIdx &&
                        ((Game_Define.CurrentLevelUpNum = 0),
                        (Game_Define.MGAllWins =
                          1 + Game_Define.CurrentLevelUpNum),
                        this.m_allWinsCounter.SetMultiLabel(
                          Game_Define.MGAllWins
                        )),
                      (this.m_canPlateStop = !0),
                      (this.m_canSpaceStop = !0),
                      node$8.IsFeaturesDemoMode ||
                        Game_Define.IsInBuyBonus ||
                        (Game_Define.LastPlate = null),
                      (Game_Define.IsSetInfoOk = !0),
                      (Game_Define.CanNotSaveInfo = !1),
                      !Game_Define.IsInBuyBonus &&
                        !node$8.IsFeaturesDemoMode &&
                        !node$2.IsUsingItem)
                    ) {
                      var i = this.m_spinAck.RoundQueue[0];
                      if ((i.MysterySymbol ? i.MysterySymbol : 0) >= 0) {
                        var o = this.PlateSymbolTo2DArray(
                            i.ComboStageData[0].ComboStageSymbol
                          ),
                          r = i.GoldPos ? i.GoldPos : [];
                        Game_Define.BetInfos[node$4.GetNowBetValue()] = {
                          Plate: o,
                          GoldPos: r,
                        };
                      } else
                        Game_Define.BetInfos[node$4.GetNowBetValue()] = {
                          Plate: Game_Define.INIT_PLATE,
                          GoldPos: [],
                        };
                    }
                  }),
                  (n.ShowWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.m_winNum.string =
                                      node$3.FormatNumberThousands(
                                        node$3.strip(t),
                                        node$3.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                                      )),
                                    (this.m_winAnim.node.active = !0),
                                    this.m_winAnim.play(
                                      smallWinAnimName.Win_Start_1
                                    ),
                                    (n =
                                      this.m_winAnim.getState(
                                        smallWinAnimName.Win_Start_1
                                      ).duration + Game_Define.DELAY.SMALL_WIN),
                                    (e.next = 6),
                                    node$2.Wait(this, n)
                                  );
                                case 6:
                                  return (
                                    this.m_winAnim.play(
                                      smallWinAnimName.Win_End
                                    ),
                                    (e.next = 9),
                                    node$2.Wait(
                                      this,
                                      this.m_winAnim.getState(
                                        smallWinAnimName.Win_End
                                      ).duration
                                    )
                                  );
                                case 9:
                                  this.m_winAnim.node.active = !1;
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.SetMainGame = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.m_mgGrassNode.active = !0),
                                    (this.m_fgGrassNode.active = !1),
                                    this.m_backgroundAnim.play(
                                      t.BgAnimName.Change_MG
                                    ),
                                    (e.next = 5),
                                    this.m_allWinsCounter.PlayMGChange()
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
                  (n.SetFreeGame = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.m_mgGrassNode.active = !1),
                                    (this.m_fgGrassNode.active = !0),
                                    this.m_backgroundAnim.play(
                                      t.BgAnimName.Change_SB
                                    ),
                                    (e.next = 5),
                                    this.m_allWinsCounter.PlaySBChange()
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
                  (n.SetBGMVolumeByFade = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n, i, o) {
                        var r, a;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === i && (i = 1),
                                    10,
                                    (r = i / 10),
                                    (a = (n - t) / 10),
                                    tween(this.node)
                                      .repeat(
                                        10,
                                        tween()
                                          .delay(r)
                                          .call(function () {
                                            (t += a), node.SetVolume(o, t);
                                          })
                                      )
                                      .call(function () {
                                        node.SetVolume(o, n),
                                          0 == n && node.Stop(o);
                                      })
                                      .start(),
                                    (e.next = 7),
                                    node$2.Wait(this, i)
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
                    return function (t, n, i, o) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.PlateSymbolTo2DArray = function (e, t) {
                    void 0 === t && (t = !1);
                    for (
                      var n = [
                          [-1, -1, -1, -1, -1],
                          [-1, -1, -1, -1, -1],
                          [-1, -1, -1, -1, -1],
                          [-1, -1, -1, -1, -1],
                          [-1, -1, -1, -1, -1],
                        ],
                        i = 0;
                      i < Game_Define.COL;
                      i++
                    )
                      for (var o = 0; o < Game_Define.ROW; o++)
                        n[i][o] = t ? e[i].Colm[o] : e[i].Col[o];
                    return n;
                  }),
                  (n.GetScatterCount = function (e) {
                    for (var t = 0, n = 0; n < e.length; n++)
                      for (var i = 0; i < e[n].length; i++)
                        e[n][i] == Game_Define.Symbol.Symbol_Scatter && t++;
                    return t;
                  }),
                  (n.GetFGAllWins = function () {
                    var e = 1,
                      t = this.m_spinAck.RoundQueue[Game_Define.RoundIdx],
                      n = this.PlateSymbolTo2DArray(
                        t.ComboStageData[Game_Define.ComboIdx].ComboStageSymbol
                      ),
                      i = this.GetScatterCount(n);
                    return 5 == i ? (e = 25) : 4 == i && (e = 5), e;
                  }),
                  (n.PosIndexToVec3 = function (e) {
                    for (
                      var t = Array.from(new Set(e)), n = new Array(), i = 0;
                      i < t.length;
                      i++
                    )
                      n.push(
                        new Vec3(
                          Math.floor(t[i] / Game_Define.COL),
                          t[i] % Game_Define.COL,
                          0
                        )
                      );
                    return n;
                  }),
                  (n.GoldPosToPlate = function (e) {
                    for (
                      var t = Array.from(new Set(e)), n = new Array(), i = 0;
                      i < t.length;
                      i++
                    )
                      n.push(
                        new Vec3(
                          Math.floor(t[i] / Game_Define.COL),
                          t[i] % Game_Define.COL,
                          0
                        )
                      );
                    for (
                      var o = [
                          [!1, !1, !1, !1, !1],
                          [!1, !1, !1, !1, !1],
                          [!1, !1, !1, !1, !1],
                          [!1, !1, !1, !1, !1],
                          [!1, !1, !1, !1, !1],
                        ],
                        r = 0;
                      r < n.length;
                      r++
                    ) {
                      var a = n[r].x,
                        s = n[r].y;
                      o[a][s] = !0;
                    }
                    return o;
                  }),
                  (n.GetOldCoinPlate = function (e, t) {
                    if (1 == e) return t;
                    for (
                      var n = [
                          [0, 0, 0, 0, 0],
                          [0, 0, 0, 0, 0],
                          [0, 0, 0, 0, 0],
                          [0, 0, 0, 0, 0],
                          [0, 0, 0, 0, 0],
                        ],
                        i = 0;
                      i < Game_Define.ROW;
                      i++
                    )
                      for (var o = 0; o < Game_Define.COL; o++)
                        t[i][o] > 0 && (n[i][o] = node$3.divide(t[i][o], e));
                    return n;
                  }),
                  (n.KeepLastPlateInfo = function () {
                    if (!Game_Define.LastPlate)
                      if (this.m_spinAck) {
                        if (
                          ((Game_Define.LastPlate = this.PlateSymbolTo2DArray(
                            this.m_spinAck.RoundQueue[0].ComboStageData[0]
                              .ComboStageSymbol
                          )),
                          (Game_Define.LastGoldPos = this.m_spinAck
                            .RoundQueue[0].GoldPos
                            ? this.m_spinAck.RoundQueue[0].GoldPos
                            : []),
                          Game_Define.LastGoldPos.length > 0)
                        )
                          for (
                            var e = this.PosIndexToVec3(
                                Game_Define.LastGoldPos
                              ),
                              t = 0;
                            t < e.length;
                            t++
                          ) {
                            var n = e[t].x,
                              i = e[t].y;
                            Game_Define.LastPlate[n][i] =
                              Game_Define.Symbol.Symbol_Mystery_LeverUp;
                          }
                      } else
                        (Game_Define.LastPlate = Game_Define.INIT_PLATE),
                          (Game_Define.LastGoldPos = []);
                  }),
                  (n.RecoverLastPlateInfo = function () {
                    for (var e = 0; e < Game_Define.COL; e++)
                      for (var t = 0; t < Game_Define.ROW; t++)
                        this.m_slotReels.SetSymbolNode(
                          e,
                          t,
                          Game_Define.LastPlate[e][t]
                        );
                    this.m_slotReels.RecoverLockInfo(Game_Define.LastPlate),
                      this.m_slotReels.RecoverLastSelectPlate(),
                      this.m_slotReels.RecoverPlateInfo(),
                      (Game_Define.IsJustReset = !0);
                  }),
                  (n.CheckNextState = function (e) {
                    e.Convert.length > 0
                      ? node$5.NextState(GAMEVIEW_STATE.CONVERT)
                      : e.Mult.length > 0
                      ? node$5.NextState(GAMEVIEW_STATE.MULTIPLY)
                      : e.Collector.length > 0
                      ? node$5.NextState(GAMEVIEW_STATE.COLLECT)
                      : node$5.NextState(GAMEVIEW_STATE.AWARD);
                  }),
                  (n.SetLastPlateInfoByBet = function () {
                    this.m_slotReels.CleanLock();
                    var e = node$4.GetNowBetValue().toString();
                    if (Game_Define.BetInfos[e]) {
                      var t = Game_Define.BetInfos[e].Plate;
                      Game_Define.LastGoldPos = Game_Define.BetInfos[e].GoldPos;
                      for (
                        var n = this.PosIndexToVec3(Game_Define.LastGoldPos),
                          i = 0;
                        i < n.length;
                        i++
                      ) {
                        var o = n[i].x,
                          r = n[i].y;
                        t[o][r] = Game_Define.Symbol.Symbol_Mystery_LeverUp;
                      }
                      Game_Define.LastPlate &&
                        t == Game_Define.LastPlate.toString() &&
                        (this.m_plateIsTheSame = !0),
                        (Game_Define.LastPlate = t),
                        (Game_Define.OldPlateInfo = t);
                    } else
                      Game_Define.LastPlate &&
                        Game_Define.LastPlate.toString() ==
                          Game_Define.INIT_PLATE.toString() &&
                        (this.m_plateIsTheSame = !0),
                        (Game_Define.LastPlate = Game_Define.INIT_PLATE),
                        (Game_Define.OldPlateInfo = Game_Define.INIT_PLATE),
                        (Game_Define.LastGoldPos = []);
                  }),
                  (n.SendVerificationEvent = function (e, t) {
                    var n = node$3.GetLinkParameterByName("ssoKey") || "",
                      i = "";
                    this.m_spinAck && (i = node$4.GetLogIndex().split(" ")[1]),
                      node$d.SendVerificationEvent(
                        node$d.FormVerificationEventParams(
                          Number(node$2.APP.GetAID()),
                          Number(node$2.NOW_GAME_ID),
                          Game_Define.Ver,
                          e,
                          t,
                          n,
                          node$2.APP.GetAID(),
                          i
                        )
                      );
                  }),
                  _createClass(t, [
                    {
                      key: "BuyBonus",
                      get: function () {
                        return this.m_buyBonus;
                      },
                    },
                    {
                      key: "SlotReels",
                      get: function () {
                        return this.m_slotReels;
                      },
                    },
                    {
                      key: "SingleSlot",
                      get: function () {
                        return this.m_singleSlot;
                      },
                    },
                    {
                      key: "EffectPlate",
                      get: function () {
                        return this.m_effectPlate;
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
                      key: "CharacterSpine",
                      get: function () {
                        return this.m_characterSpine;
                      },
                    },
                    {
                      key: "AllWinsCounter",
                      get: function () {
                        return this.m_allWinsCounter;
                      },
                    },
                    {
                      key: "IntroSpine",
                      get: function () {
                        return this.m_introSpine;
                      },
                    },
                    {
                      key: "FxReelSpine",
                      get: function () {
                        return this.m_fxReelSpine;
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
                      key: "TotalWin",
                      get: function () {
                        return this.m_totalWin;
                      },
                      set: function (e) {
                        this.m_totalWin = e;
                      },
                    },
                    {
                      key: "CanSpaceStop",
                      set: function (e) {
                        this.m_canSpaceStop = e;
                      },
                    },
                    {
                      key: "CanSpaceSpin",
                      set: function (e) {
                        this.m_canSpaceSpin = e;
                      },
                    },
                    {
                      key: "CanPlateStop",
                      set: function (e) {
                        this.m_canPlateStop = e;
                      },
                    },
                    {
                      key: "CanPlateSpin",
                      set: function (e) {
                        this.m_canPlateSpin = e;
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
                      key: "IsAutoShowFeatures",
                      set: function (e) {
                        this.m_isAutoShowFeatures = e;
                      },
                    },
                    {
                      key: "IsLandscape",
                      get: function () {
                        return this.m_isLandscape;
                      },
                    },
                    {
                      key: "IsLock",
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
                      key: "AutoplayInfos",
                      get: function () {
                        return this.m_autoplayInfos;
                      },
                    },
                    {
                      key: "Version",
                      get: function () {
                        return this.m_version;
                      },
                    },
                    {
                      key: "OldBetIdx",
                      get: function () {
                        return this.m_oldBetIdx;
                      },
                    },
                    {
                      key: "BetList",
                      get: function () {
                        return this.m_betList;
                      },
                    },
                  ]),
                  t
                );
              })(Component)),
              (_class3$1.AnimName = {
                GameView_S: "GameView_S",
                GameView_L: "GameView_L",
                MainGame_S: "MainGame_S",
                MainGame_L: "MainGame_L",
                Manual_Open: "Manual_Open",
                Manual_Close: "Manual_Close",
                Manual_Loop: "Manual_Loop",
              }),
              (_class3$1.BgAnimName = {
                Change_SB: "Change_SB",
                MG_Background: "MG_Background",
                SB_Background: "SB_Background",
                Change_MG: "Change_MG",
              }),
              (_class2$q = _class3$1),
              (_descriptor$q = _applyDecoratedDescriptor(
                _class2$q.prototype,
                "m_buyBonus",
                [_dec$L],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor2$b = _applyDecoratedDescriptor(
                _class2$q.prototype,
                "m_mainGameAnim",
                [_dec2$p],
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
                _class2$q.prototype,
                "m_mainGameS",
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
              (_descriptor4$6 = _applyDecoratedDescriptor(
                _class2$q.prototype,
                "m_mainGameL",
                [_dec4$6],
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
                _class2$q.prototype,
                "m_mgGrassNode",
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
              (_descriptor6$3 = _applyDecoratedDescriptor(
                _class2$q.prototype,
                "m_fgGrassNode",
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
                _class2$q.prototype,
                "m_slotReels",
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
                _class2$q.prototype,
                "m_singleSlot",
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
                _class2$q.prototype,
                "m_effectPlate",
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
              (_descriptor10$1 = _applyDecoratedDescriptor(
                _class2$q.prototype,
                "m_bigWin",
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
              (_descriptor11$1 = _applyDecoratedDescriptor(
                _class2$q.prototype,
                "m_manual",
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
                _class2$q.prototype,
                "m_titleSpriteAtlas",
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
              (_descriptor13$1 = _applyDecoratedDescriptor(
                _class2$q.prototype,
                "m_winAnim",
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
                _class2$q.prototype,
                "m_winNum",
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
                _class2$q.prototype,
                "m_characterSpine",
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
                _class2$q.prototype,
                "m_allWinsCounter",
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
                _class2$q.prototype,
                "m_backgroundAnim",
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
                _class2$q.prototype,
                "m_introSpine",
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
                _class2$q.prototype,
                "m_fxReelSpine",
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
                _class2$q.prototype,
                "m_buyBonusCells",
                [_dec20],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_class$L = _class2$q))
            ) || _class$L);
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
